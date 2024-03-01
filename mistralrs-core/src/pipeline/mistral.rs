use super::{Loader, ModelPaths, Pipeline, SimpleModelPaths, TokenSource};
use crate::models::Cache;
use crate::{deref_mut_refcell, deref_refcell};
use crate::{
    models::mistral::{Config, Model as NormalModel},
    models::qmistral::Model as QModel,
    sequence::Sequence,
    utils::{
        dtype::get_dtype_from_torch_dtype, tokens::get_token,
        varbuilder_utils::from_mmaped_safetensors,
    },
};
use anyhow::Result;
use candle_core::{DType, Device, Tensor};
use candle_nn::Activation;
use candle_sampling::logits_processor::Logprobs;
use hf_hub::{api::sync::ApiBuilder, Repo, RepoType};
use serde::Deserialize;
use std::cell::RefCell;
use std::{iter::repeat, rc::Rc, sync::Mutex};
use thiserror::Error;
use tokenizers::Tokenizer;

enum Model {
    Normal(NormalModel),
    Quantized(QModel),
}

pub struct MistralPipeline {
    model: Model,
    tokenizer: Tokenizer,
    config: MistralSpecificConfig,
}

pub struct MistralLoader {
    model_id: String,
    config: MistralSpecificConfig,
    quantized_model_id: Option<String>,
    quantized_filename: Option<String>,
}

#[derive(Clone, Copy)]
pub struct MistralSpecificConfig {
    pub use_flash_attn: bool,
    pub repeat_last_n: usize,
}

#[derive(Deserialize)]
pub struct BasicConfig {
    vocab_size: usize,
    hidden_size: usize,
    intermediate_size: usize,
    num_hidden_layers: usize,
    num_attention_heads: usize,
    num_key_value_heads: usize,
    hidden_act: Activation,
    max_position_embeddings: usize,
    rms_norm_eps: f64,
    rope_theta: f64,
    sliding_window: usize,
    torch_dtype: Option<String>,
}

#[derive(Error, Debug)]
enum TokenizerError {
    #[error("`{0}`")]
    Error(String),
}

impl MistralLoader {
    pub fn new(
        model_id: String,
        config: MistralSpecificConfig,
        quantized_model_id: Option<String>,
        quantized_filename: Option<String>,
    ) -> Self {
        Self {
            model_id,
            config,
            quantized_model_id,
            quantized_filename,
        }
    }
}

impl Loader for MistralLoader {
    fn download_model(
        &self,
        revision: Option<String>,
        token_source: TokenSource,
    ) -> Result<Box<dyn ModelPaths>> {
        let api = ApiBuilder::new()
            .with_progress(true)
            .with_token(Some(get_token(&token_source)?))
            .build()?;
        let revision = revision.unwrap_or("main".to_string());
        let api = api.repo(Repo::with_revision(
            self.model_id.clone(),
            RepoType::Model,
            revision.clone(),
        ));

        let tokenizer_filename = api.get("tokenizer.json")?;

        let config_filename = api.get("config.json")?;

        let filenames = match &self.quantized_filename {
            Some(name) => {
                let qapi = ApiBuilder::new()
                    .with_progress(true)
                    .with_token(Some(get_token(&token_source)?))
                    .build()?;
                let qapi = qapi.repo(Repo::with_revision(
                    self.quantized_model_id.as_ref().unwrap().clone(),
                    RepoType::Model,
                    revision,
                ));
                vec![qapi.get(name).unwrap()]
            }
            None => {
                let mut filenames = vec![];
                for rfilename in api
                    .info()?
                    .siblings
                    .iter()
                    .map(|x| x.rfilename.clone())
                    .filter(|x| x.ends_with(".safetensors"))
                {
                    let filename = api.get(&rfilename)?;
                    filenames.push(filename);
                }
                filenames
            }
        };

        Ok(Box::new(SimpleModelPaths {
            tokenizer_filename,
            config_filename,
            filenames,
            quantized: self.quantized_filename.is_some(),
        }))
    }

    fn _setup_model(
        &self,
        paths: &dyn ModelPaths,
        dtype: Option<DType>,
        device: &Device,
    ) -> Result<Box<Mutex<dyn Pipeline>>> {
        let basic_config: BasicConfig =
            serde_json::from_slice(&std::fs::read(paths.get_config_filename())?)?;
        let config = Config {
            vocab_size: basic_config.vocab_size,
            hidden_size: basic_config.hidden_size,
            intermediate_size: basic_config.intermediate_size,
            num_hidden_layers: basic_config.num_hidden_layers,
            num_attention_heads: basic_config.num_attention_heads,
            num_key_value_heads: basic_config.num_key_value_heads,
            hidden_act: basic_config.hidden_act,
            max_position_embeddings: basic_config.max_position_embeddings,
            rms_norm_eps: basic_config.rms_norm_eps,
            rope_theta: basic_config.rope_theta,
            sliding_window: basic_config.sliding_window,
            use_flash_attn: self.config.use_flash_attn,
        };
        let default_dtype = match basic_config.torch_dtype {
            Some(value) => get_dtype_from_torch_dtype(value)?,
            None => {
                if device.is_cuda() {
                    DType::BF16
                } else {
                    DType::F32
                }
            }
        };

        let model = match paths.is_quantized() {
            true => {
                let vb = candle_transformers::quantized_var_builder::VarBuilder::from_gguf(
                    paths
                        .get_weight_filenames()
                        .first()
                        .unwrap()
                        .clone()
                        .into_os_string()
                        .into_string()
                        .unwrap(),
                    device,
                )?;
                let model = QModel::new(&config, vb)?;
                Model::Quantized(model)
            }
            false => {
                let vb = from_mmaped_safetensors(
                    paths.get_weight_filenames(),
                    dtype.unwrap_or(default_dtype),
                    device,
                    false,
                )?;

                let model = NormalModel::new(&config, vb)?;
                Model::Normal(model)
            }
        };

        let tokenizer = Tokenizer::from_file(paths.get_tokenizer_filename())
            .map_err(|e| TokenizerError::Error(e.to_string()))?;

        Ok(Box::new(Mutex::new(MistralPipeline {
            model,
            tokenizer,
            config: self.config,
        })))
    }
}

impl Pipeline for MistralPipeline {
    fn forward(&mut self, input_toks: Box<[Rc<RefCell<Sequence>>]>, is_prompt: bool) -> Tensor {
        let (input_ids, seqlen_offsets) = if is_prompt {
            // NOTE(EricLBuehler): Unwrap reasoning: Get the maximum sequence length.
            let max_len = input_toks
                .iter()
                .map(|seq| deref_refcell!(seq).len())
                .max()
                .unwrap();
            let padding_tok = 0;
            // Pad each sequence by the padding token to the max len.
            let mut seqs_tensors = Vec::new();
            let mut seqlen_offsets = Vec::new();
            for seq in input_toks.iter() {
                let mut ctxt = deref_refcell!(seq).get_toks().to_vec();
                seqlen_offsets.push(0);
                *deref_mut_refcell!(seq).gen_idx() += 1;

                ctxt.extend(repeat(padding_tok).take(max_len - ctxt.len()));

                // NOTE(EricLBuehler): Unwrap reasoning: The dimensions must match.
                seqs_tensors.push(
                    Tensor::new(ctxt, self.device())
                        .unwrap()
                        .unsqueeze(0)
                        .unwrap(),
                );
            }
            // NOTE(EricLBuehler): Unwrap reasoning: Correct dimensions are provided.
            (Tensor::cat(&seqs_tensors, 0).unwrap(), seqlen_offsets)
        } else {
            // Pad each sequence by the padding token to the max len.
            let mut seqs_tensors = Vec::new();
            let mut seqlen_offsets = Vec::new();
            for seq in input_toks.iter() {
                let start_pos = deref_refcell!(seq).get_toks().len().saturating_sub(1);
                let ctxt = deref_refcell!(seq).get_toks()[start_pos..].to_vec();
                seqlen_offsets.push(start_pos);
                *deref_mut_refcell!(seq).gen_idx() += 1;

                // NOTE(EricLBuehler): Unwrap reasoning: The dimensions must match.
                seqs_tensors.push(
                    Tensor::new(ctxt, self.device())
                        .unwrap()
                        .unsqueeze(0)
                        .unwrap(),
                );
            }
            // NOTE(EricLBuehler): Unwrap reasoning: Correct dimensions are provided.
            (Tensor::cat(&seqs_tensors, 0).unwrap(), seqlen_offsets)
        };
        let result = match self.model {
            Model::Normal(ref mut model) => model.forward(&input_ids, &seqlen_offsets),
            Model::Quantized(ref mut model) => model.forward(&input_ids, &seqlen_offsets),
        };
        match result {
            Ok(v) => v,
            Err(e) => {
                panic!("Model failed with error `{e}`. Please raise an issue.");
            }
        }
    }
    fn tokenize_prompt(&self, prompt: &str) -> Result<Vec<u32>> {
        let encoding = self
            .tokenizer
            .encode(prompt, false)
            .map_err(|e| anyhow::Error::msg(e.to_string()))?;
        Ok(encoding.get_ids().to_vec())
    }
    fn device(&self) -> &Device {
        match self.model {
            Model::Normal(ref model) => &model.device,
            Model::Quantized(ref model) => &model.device,
        }
    }
    fn num_hidden_layers(&self) -> usize {
        self.cache().lock().len()
    }
    fn cache(&self) -> &Cache {
        match self.model {
            Model::Normal(ref model) => &model.cache,
            Model::Quantized(ref model) => &model.cache,
        }
    }
    fn sample(&mut self, logits: Tensor, seq: Rc<RefCell<Sequence>>) -> Result<Logprobs> {
        let logits = logits
            .squeeze(0)
            .unwrap()
            .squeeze(0)
            .unwrap()
            .to_dtype(DType::F32)
            .unwrap();
        let start_at = deref_refcell!(seq)
            .get_toks()
            .len()
            .saturating_sub(self.config.repeat_last_n);
        let ctxt = deref_refcell!(seq).get_toks()[start_at..].to_vec();

        Ok(deref_mut_refcell!(seq)
            .logits_processor()
            .sample(&logits, Some(&ctxt))?)
    }
    fn tokenizer(&self) -> Tokenizer {
        self.tokenizer.clone()
    }
    fn eos_tok(&self) -> u32 {
        self.tokenizer
            .get_vocab(true)
            .get("</s>")
            .copied()
            .expect("Unable to extract `</s>` EOS token.")
    }
}