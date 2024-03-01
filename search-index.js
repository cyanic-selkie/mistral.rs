var searchIndex = new Map(JSON.parse('[\
["mistralrs",{"doc":"","t":"FPPGNNNNNNNNHNNNNNNNNNNNNNNNHNNNNNNOHOOCONNNNNNNNNNNNOOOOOOFFPPPPGNNNNNNNNNNNNOHHNNNNNNNNNNNNNNNNNNNNNNNNNNNOOOOOOOOOONNNOONNNOOONNNNNNNNNNNN","n":["Args","Mistral","MistralGGUF","ModelSelected","augment_args","augment_args_for_update","augment_subcommands","augment_subcommands_for_update","borrow","borrow","borrow_mut","borrow_mut","chatcompletions","command","command_for_update","deref","deref","deref_mut","deref_mut","drop","drop","fmt","from","from","from_arg_matches","from_arg_matches","from_arg_matches_mut","from_arg_matches_mut","get_router","group_id","has_subcommand","init","init","into","into","log","main","max_seqs","model","openai","port","try_from","try_from","try_into","try_into","type_id","type_id","update_from_arg_matches","update_from_arg_matches","update_from_arg_matches_mut","update_from_arg_matches_mut","vzip","vzip","model_id","quantized_filename","quantized_model_id","repeat_last_n","repeat_last_n","tok_model_id","ChatCompletionRequest","Message","Multi","MultiId","Single","SingleId","StopTokens","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","clone","clone","clone","clone_into","clone_into","clone_into","content","default_1usize","default_false","deref","deref","deref","deref_mut","deref_mut","deref_mut","deserialize","deserialize","deserialize","drop","drop","drop","fmt","fmt","fmt","from","from","from","from_ref","from_ref","from_ref","init","init","init","into","into","into","logit_bias","logprobs","max_tokens","messages","model","n_choices","name","presence_penalty","repetition_penalty","role","serialize","serialize","serialize","stop_seqs","temperature","to_owned","to_owned","to_owned","top_k","top_logprobs","top_p","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","vzip","vzip","vzip"],"q":[[0,"mistralrs"],[53,"mistralrs::ModelSelected"],[59,"mistralrs::openai"],[141,"clap_builder::builder::command"],[142,"mistralrs_core"],[143,"alloc::sync"],[144,"mistralrs_core::pipeline"],[145,"axum::extract::state"],[146,"axum::json"],[147,"alloc::string"],[148,"core::fmt"],[149,"core::fmt"],[150,"clap_builder"],[151,"core::result"],[152,"axum::routing"],[153,"clap_builder::util::id"],[154,"core::option"],[155,"anyhow"],[156,"core::any"],[157,"serde::de"],[158,"serde::ser"]],"d":["","Select the mistral instruct model.","Select the quantized mistral instruct model with gguf.","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Log all responses and requests to output.log","","Maximum running sequences at any time","Model","","Port to serve on.","","","","","","","","","","","","","Model ID to load from","Quantized filename, only applicable if <code>quantized</code> is set.","Quantized model ID to find the <code>quantized_filename</code>, only …","Control the application of repeat penalty for the last n …","Control the application of repeat penalty for the last n …","Model ID to load the tokenizer from","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,11,11,0,17,17,11,11,11,17,11,17,0,17,17,11,17,11,17,11,17,11,11,17,11,17,11,17,0,17,11,11,17,11,17,17,0,17,17,0,17,11,17,11,17,11,17,11,17,11,17,11,17,29,30,30,29,30,30,0,0,26,26,26,26,0,25,26,7,25,26,7,25,26,7,25,26,7,25,0,0,25,26,7,25,26,7,25,26,7,25,26,7,25,26,7,25,26,7,25,26,7,25,26,7,25,26,7,7,7,7,7,7,7,25,7,7,25,25,26,7,7,7,25,26,7,7,7,7,25,26,7,25,26,7,25,26,7,25,26,7],"f":[0,0,0,0,[1,1],[1,1],[1,1],[1,1],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[[6,[[5,[[3,[2]],[3,[4]]]]]],[8,[7]]],9],[[],1],[[],1],[10,-1,[]],[10,-1,[]],[10,-1,[]],[10,-1,[]],[10,5],[10,5],[[11,12],13],[-1,-1,[]],[-1,-1,[]],[14,[[16,[11,15]]]],[14,[[16,[17,15]]]],[14,[[16,[11,15]]]],[14,[[16,[17,15]]]],[[[5,[[3,[2]],[3,[4]]]]],18],[[],[[20,[19]]]],[21,22],[[],10],[[],10],[-1,-2,[],[]],[-1,-2,[],[]],0,[[],[[23,[5]]]],0,0,0,0,[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,24,[]],[-1,24,[]],[[11,14],[[16,[5,15]]]],[[17,14],[[16,[5,15]]]],[[11,14],[[16,[5,15]]]],[[17,14],[[16,[5,15]]]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[25,25],[26,26],[7,7],[[-1,-2],5,[],[]],[[-1,-2],5,[],[]],[[-1,-2],5,[],[]],0,[[],10],[[],22],[10,-1,[]],[10,-1,[]],[10,-1,[]],[10,-1,[]],[10,-1,[]],[10,-1,[]],[-1,[[16,[25]]],27],[-1,[[16,[26]]],27],[-1,[[16,[7]]],27],[10,5],[10,5],[10,5],[[25,12],13],[[26,12],13],[[7,12],13],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[[],10],[[],10],[[],10],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,0,0,0,0,0,0,0,[[25,-1],16,28],[[26,-1],16,28],[[7,-1],16,28],0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,[[16,[-2]]],[],[]],[-1,24,[]],[-1,24,[]],[-1,24,[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]]],"c":[],"p":[[5,"Command",141],[5,"MistralRs",142],[5,"Arc",143],[10,"Conversation",144],[1,"tuple"],[5,"State",145],[5,"ChatCompletionRequest",59],[5,"Json",146],[5,"String",147],[1,"usize"],[6,"ModelSelected",0],[5,"Formatter",148],[8,"Result",148],[5,"ArgMatches",149],[8,"Error",150],[6,"Result",151],[5,"Args",0],[5,"Router",152],[5,"Id",153],[6,"Option",154],[1,"str"],[1,"bool"],[8,"Result",155],[5,"TypeId",156],[5,"Message",59],[6,"StopTokens",59],[10,"Deserializer",157],[10,"Serializer",158],[15,"Mistral",53],[15,"MistralGGUF",53]],"b":[]}],\
["mistralrs_core",{"doc":"","t":"PFKPPPPPKFFFGPPPPFGFGPGGMNNNNNNNNNNNNNNNNNNNNNNNONNNNNNNNONNNNNNNNNNNNNNNNNNNNNNQQMNNNNNNNNNNNNNNNNNNNNNNNNNNNQMNQQONNNNNNNNNNNNNNNNNNNNNNNNONNONNOOOOOOOONOOONNNNOOONNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNOONNNNNNNNNNN","n":["CacheToken","ChatCompletionResponse","Conversation","Done","EnvVar","Error","Fixed","Ids","Loader","MistralLoader","MistralRs","MistralSpecificConfig","ModelKind","Normal","Path","QuantizedGGML","QuantizedGGUF","Request","Response","SamplingParams","SchedulerMethod","Seqs","StopTokens","TokenSource","_setup_model","_setup_model","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","choices","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","created","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut","deref_mut_refcell","deref_refcell","download_model","download_model","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","drop","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","get_mut_arcmutex","get_prompt","get_sender","handle_seq_error","handle_seq_error_stateaware","id","init","init","init","init","init","init","init","init","init","init","init","into","into","into","into","into","into","into","into","into","into","into","load_model","load_model","max_len","maybe_log_request","maybe_log_response","model","new","new","object","presence_penalty","prompt","repeat_last_n","repeat_penalty","response","return_logprobs","sampling_params","serialize","stop_toks","system_fingerprint","temperature","to_owned","to_owned","to_owned","to_owned","top_k","top_n_logprobs","top_p","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","type_id","usage","use_flash_attn","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip","vzip"],"q":[[0,"mistralrs_core"],[211,"candle_core::dtype"],[212,"core::option"],[213,"candle_core::device"],[214,"std::sync::mutex"],[215,"alloc::boxed"],[216,"alloc::sync"],[217,"anyhow"],[218,"alloc::string"],[219,"core::fmt"],[220,"core::fmt"],[221,"alloc::vec"],[222,"std::sync::mpsc"],[223,"core::result"],[224,"serde::ser"],[225,"core::any"]],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","Returns the argument unchanged.","","","","","","","","","","","","","","","","","","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","Calls <code>U::from(self)</code>.","If <code>revision</code> is None, then it defaults to <code>main</code>. If <code>dtype</code> is …","If <code>revision</code> is None, then it defaults to <code>main</code>. If <code>dtype</code> is …","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[18,0,0,32,18,32,27,14,0,0,0,0,0,26,18,26,26,0,0,0,0,14,0,0,1,11,11,18,26,19,32,27,24,12,13,14,15,11,18,26,19,32,27,24,12,13,14,15,13,12,13,14,15,12,13,14,15,13,11,18,26,19,32,27,24,12,13,14,15,11,18,26,19,32,27,24,12,13,14,15,0,0,1,11,11,18,26,19,32,27,24,12,13,14,15,19,13,14,15,11,18,26,19,32,27,24,12,13,14,15,0,7,24,0,0,13,11,18,26,19,32,27,24,12,13,14,15,11,18,26,19,32,27,24,12,13,14,15,1,1,15,24,24,13,11,24,13,15,19,12,15,19,19,19,13,15,13,15,12,13,14,15,15,15,15,11,18,26,19,32,27,24,12,13,14,15,11,18,26,19,32,27,24,12,13,14,15,11,18,26,19,32,27,24,12,13,14,15,13,12,11,18,26,19,32,27,24,12,13,14,15],"f":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,[12,12],[13,13],[14,14],[15,15],[[-1,-2],9,[],[]],[[-1,-2],9,[],[]],[[-1,-2],9,[],[]],[[-1,-2],9,[],[]],0,[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],[16,-1,[]],0,0,[[1,[3,[17]],18],[[10,[[6,[0]]]]]],[[11,[3,[17]],18],[[10,[[6,[0]]]]]],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[16,9],[[19,20],21],[[13,20],21],[[14,20],21],[[15,20],21],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],[-1,-1,[]],0,[[7,[23,[[22,[17,17]]]]],[[10,[17,17]]]],[24,[[25,[19]]]],0,0,0,[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[[],16],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[[1,[3,[17]],18,[3,[2]],4],[[10,[[9,[[6,[[5,[0]]]],[8,[7]]]]]]]],[[1,[3,[17]],18,[3,[2]],4],[[10,[[9,[[6,[[5,[0]]]],[8,[7]]]]]]]],0,[[[8,[24]],17],9],[[[8,[24]],13],9],0,[[17,12,[3,[17]],[3,[17]],26],11],[[[6,[[5,[0]]]],27,28],[[8,[24]]]],0,0,0,0,0,0,0,0,[[13,-1],29,30],0,0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],0,0,0,[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,[[29,[-2]]],[],[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],[-1,31,[]],0,0,[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]],[-1,-2,[],[]]],"c":[],"p":[[10,"Loader",0],[6,"DType",211],[6,"Option",212],[6,"Device",213],[5,"Mutex",214],[5,"Box",215],[10,"Conversation",0],[5,"Arc",216],[1,"tuple"],[8,"Result",217],[5,"MistralLoader",0],[5,"MistralSpecificConfig",0],[5,"ChatCompletionResponse",0],[6,"StopTokens",0],[5,"SamplingParams",0],[1,"usize"],[5,"String",218],[6,"TokenSource",0],[5,"Request",0],[5,"Formatter",219],[8,"Result",219],[5,"HashMap",220],[5,"Vec",221],[5,"MistralRs",0],[5,"Sender",222],[6,"ModelKind",0],[6,"SchedulerMethod",0],[1,"bool"],[6,"Result",223],[10,"Serializer",224],[5,"TypeId",225],[6,"Response",0]],"b":[]}]\
]'));
if (typeof exports !== 'undefined') exports.searchIndex = searchIndex;
else if (window.initSearch) window.initSearch(searchIndex);
