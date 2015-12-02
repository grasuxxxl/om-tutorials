// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__25287 = cljs.core._EQ_;
var expr__25288 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__25287.call(null,"true",expr__25288))){
return true;
} else {
if(cljs.core.truth_(pred__25287.call(null,"false",expr__25288))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__25288)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__25290__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25290 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25291__i = 0, G__25291__a = new Array(arguments.length -  0);
while (G__25291__i < G__25291__a.length) {G__25291__a[G__25291__i] = arguments[G__25291__i + 0]; ++G__25291__i;}
  args = new cljs.core.IndexedSeq(G__25291__a,0);
} 
return G__25290__delegate.call(this,args);};
G__25290.cljs$lang$maxFixedArity = 0;
G__25290.cljs$lang$applyTo = (function (arglist__25292){
var args = cljs.core.seq(arglist__25292);
return G__25290__delegate(args);
});
G__25290.cljs$core$IFn$_invoke$arity$variadic = G__25290__delegate;
return G__25290;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__25293){
var map__25296 = p__25293;
var map__25296__$1 = ((((!((map__25296 == null)))?((((map__25296.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25296.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25296):map__25296);
var message = cljs.core.get.call(null,map__25296__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__25296__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__20950__auto___25458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___25458,ch){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___25458,ch){
return (function (state_25427){
var state_val_25428 = (state_25427[(1)]);
if((state_val_25428 === (7))){
var inst_25423 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25429_25459 = state_25427__$1;
(statearr_25429_25459[(2)] = inst_25423);

(statearr_25429_25459[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (1))){
var state_25427__$1 = state_25427;
var statearr_25430_25460 = state_25427__$1;
(statearr_25430_25460[(2)] = null);

(statearr_25430_25460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (4))){
var inst_25380 = (state_25427[(7)]);
var inst_25380__$1 = (state_25427[(2)]);
var state_25427__$1 = (function (){var statearr_25431 = state_25427;
(statearr_25431[(7)] = inst_25380__$1);

return statearr_25431;
})();
if(cljs.core.truth_(inst_25380__$1)){
var statearr_25432_25461 = state_25427__$1;
(statearr_25432_25461[(1)] = (5));

} else {
var statearr_25433_25462 = state_25427__$1;
(statearr_25433_25462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (15))){
var inst_25387 = (state_25427[(8)]);
var inst_25402 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25387);
var inst_25403 = cljs.core.first.call(null,inst_25402);
var inst_25404 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_25403);
var inst_25405 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_25404)].join('');
var inst_25406 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_25405);
var state_25427__$1 = state_25427;
var statearr_25434_25463 = state_25427__$1;
(statearr_25434_25463[(2)] = inst_25406);

(statearr_25434_25463[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (13))){
var inst_25411 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25435_25464 = state_25427__$1;
(statearr_25435_25464[(2)] = inst_25411);

(statearr_25435_25464[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (6))){
var state_25427__$1 = state_25427;
var statearr_25436_25465 = state_25427__$1;
(statearr_25436_25465[(2)] = null);

(statearr_25436_25465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (17))){
var inst_25409 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25437_25466 = state_25427__$1;
(statearr_25437_25466[(2)] = inst_25409);

(statearr_25437_25466[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (3))){
var inst_25425 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25427__$1,inst_25425);
} else {
if((state_val_25428 === (12))){
var inst_25386 = (state_25427[(9)]);
var inst_25400 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_25386,opts);
var state_25427__$1 = state_25427;
if(cljs.core.truth_(inst_25400)){
var statearr_25438_25467 = state_25427__$1;
(statearr_25438_25467[(1)] = (15));

} else {
var statearr_25439_25468 = state_25427__$1;
(statearr_25439_25468[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (2))){
var state_25427__$1 = state_25427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25427__$1,(4),ch);
} else {
if((state_val_25428 === (11))){
var inst_25387 = (state_25427[(8)]);
var inst_25392 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25393 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_25387);
var inst_25394 = cljs.core.async.timeout.call(null,(1000));
var inst_25395 = [inst_25393,inst_25394];
var inst_25396 = (new cljs.core.PersistentVector(null,2,(5),inst_25392,inst_25395,null));
var state_25427__$1 = state_25427;
return cljs.core.async.ioc_alts_BANG_.call(null,state_25427__$1,(14),inst_25396);
} else {
if((state_val_25428 === (9))){
var inst_25387 = (state_25427[(8)]);
var inst_25413 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_25414 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_25387);
var inst_25415 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25414);
var inst_25416 = [cljs.core.str("Not loading: "),cljs.core.str(inst_25415)].join('');
var inst_25417 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_25416);
var state_25427__$1 = (function (){var statearr_25440 = state_25427;
(statearr_25440[(10)] = inst_25413);

return statearr_25440;
})();
var statearr_25441_25469 = state_25427__$1;
(statearr_25441_25469[(2)] = inst_25417);

(statearr_25441_25469[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (5))){
var inst_25380 = (state_25427[(7)]);
var inst_25382 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_25383 = (new cljs.core.PersistentArrayMap(null,2,inst_25382,null));
var inst_25384 = (new cljs.core.PersistentHashSet(null,inst_25383,null));
var inst_25385 = figwheel.client.focus_msgs.call(null,inst_25384,inst_25380);
var inst_25386 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_25385);
var inst_25387 = cljs.core.first.call(null,inst_25385);
var inst_25388 = figwheel.client.autoload_QMARK_.call(null);
var state_25427__$1 = (function (){var statearr_25442 = state_25427;
(statearr_25442[(9)] = inst_25386);

(statearr_25442[(8)] = inst_25387);

return statearr_25442;
})();
if(cljs.core.truth_(inst_25388)){
var statearr_25443_25470 = state_25427__$1;
(statearr_25443_25470[(1)] = (8));

} else {
var statearr_25444_25471 = state_25427__$1;
(statearr_25444_25471[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (14))){
var inst_25398 = (state_25427[(2)]);
var state_25427__$1 = state_25427;
var statearr_25445_25472 = state_25427__$1;
(statearr_25445_25472[(2)] = inst_25398);

(statearr_25445_25472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (16))){
var state_25427__$1 = state_25427;
var statearr_25446_25473 = state_25427__$1;
(statearr_25446_25473[(2)] = null);

(statearr_25446_25473[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (10))){
var inst_25419 = (state_25427[(2)]);
var state_25427__$1 = (function (){var statearr_25447 = state_25427;
(statearr_25447[(11)] = inst_25419);

return statearr_25447;
})();
var statearr_25448_25474 = state_25427__$1;
(statearr_25448_25474[(2)] = null);

(statearr_25448_25474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25428 === (8))){
var inst_25386 = (state_25427[(9)]);
var inst_25390 = figwheel.client.reload_file_state_QMARK_.call(null,inst_25386,opts);
var state_25427__$1 = state_25427;
if(cljs.core.truth_(inst_25390)){
var statearr_25449_25475 = state_25427__$1;
(statearr_25449_25475[(1)] = (11));

} else {
var statearr_25450_25476 = state_25427__$1;
(statearr_25450_25476[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20950__auto___25458,ch))
;
return ((function (switch__20838__auto__,c__20950__auto___25458,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____0 = (function (){
var statearr_25454 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25454[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__);

(statearr_25454[(1)] = (1));

return statearr_25454;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____1 = (function (state_25427){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_25427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e25455){if((e25455 instanceof Object)){
var ex__20842__auto__ = e25455;
var statearr_25456_25477 = state_25427;
(statearr_25456_25477[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25478 = state_25427;
state_25427 = G__25478;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__ = function(state_25427){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____1.call(this,state_25427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20839__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___25458,ch))
})();
var state__20952__auto__ = (function (){var statearr_25457 = f__20951__auto__.call(null);
(statearr_25457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___25458);

return statearr_25457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___25458,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__25479_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__25479_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_25486 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_25486){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_25484 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_25485 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_25484,_STAR_print_newline_STAR_25485,base_path_25486){
return (function() { 
var G__25487__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__25487 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25488__i = 0, G__25488__a = new Array(arguments.length -  0);
while (G__25488__i < G__25488__a.length) {G__25488__a[G__25488__i] = arguments[G__25488__i + 0]; ++G__25488__i;}
  args = new cljs.core.IndexedSeq(G__25488__a,0);
} 
return G__25487__delegate.call(this,args);};
G__25487.cljs$lang$maxFixedArity = 0;
G__25487.cljs$lang$applyTo = (function (arglist__25489){
var args = cljs.core.seq(arglist__25489);
return G__25487__delegate(args);
});
G__25487.cljs$core$IFn$_invoke$arity$variadic = G__25487__delegate;
return G__25487;
})()
;})(_STAR_print_fn_STAR_25484,_STAR_print_newline_STAR_25485,base_path_25486))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_25485;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_25484;
}}catch (e25483){if((e25483 instanceof Error)){
var e = e25483;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_25486], null));
} else {
var e = e25483;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_25486))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__25490){
var map__25497 = p__25490;
var map__25497__$1 = ((((!((map__25497 == null)))?((((map__25497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25497):map__25497);
var opts = map__25497__$1;
var build_id = cljs.core.get.call(null,map__25497__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__25497,map__25497__$1,opts,build_id){
return (function (p__25499){
var vec__25500 = p__25499;
var map__25501 = cljs.core.nth.call(null,vec__25500,(0),null);
var map__25501__$1 = ((((!((map__25501 == null)))?((((map__25501.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25501.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25501):map__25501);
var msg = map__25501__$1;
var msg_name = cljs.core.get.call(null,map__25501__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25500,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__25500,map__25501,map__25501__$1,msg,msg_name,_,map__25497,map__25497__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__25500,map__25501,map__25501__$1,msg,msg_name,_,map__25497,map__25497__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__25497,map__25497__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__25507){
var vec__25508 = p__25507;
var map__25509 = cljs.core.nth.call(null,vec__25508,(0),null);
var map__25509__$1 = ((((!((map__25509 == null)))?((((map__25509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25509):map__25509);
var msg = map__25509__$1;
var msg_name = cljs.core.get.call(null,map__25509__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25508,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__25511){
var map__25521 = p__25511;
var map__25521__$1 = ((((!((map__25521 == null)))?((((map__25521.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25521.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25521):map__25521);
var on_compile_warning = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__25521__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__25521,map__25521__$1,on_compile_warning,on_compile_fail){
return (function (p__25523){
var vec__25524 = p__25523;
var map__25525 = cljs.core.nth.call(null,vec__25524,(0),null);
var map__25525__$1 = ((((!((map__25525 == null)))?((((map__25525.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25525.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25525):map__25525);
var msg = map__25525__$1;
var msg_name = cljs.core.get.call(null,map__25525__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__25524,(1));
var pred__25527 = cljs.core._EQ_;
var expr__25528 = msg_name;
if(cljs.core.truth_(pred__25527.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__25528))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__25527.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__25528))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__25521,map__25521__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__,msg_hist,msg_names,msg){
return (function (state_25744){
var state_val_25745 = (state_25744[(1)]);
if((state_val_25745 === (7))){
var inst_25668 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25668)){
var statearr_25746_25792 = state_25744__$1;
(statearr_25746_25792[(1)] = (8));

} else {
var statearr_25747_25793 = state_25744__$1;
(statearr_25747_25793[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (20))){
var inst_25738 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25748_25794 = state_25744__$1;
(statearr_25748_25794[(2)] = inst_25738);

(statearr_25748_25794[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (27))){
var inst_25734 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25749_25795 = state_25744__$1;
(statearr_25749_25795[(2)] = inst_25734);

(statearr_25749_25795[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (1))){
var inst_25661 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25661)){
var statearr_25750_25796 = state_25744__$1;
(statearr_25750_25796[(1)] = (2));

} else {
var statearr_25751_25797 = state_25744__$1;
(statearr_25751_25797[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (24))){
var inst_25736 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25752_25798 = state_25744__$1;
(statearr_25752_25798[(2)] = inst_25736);

(statearr_25752_25798[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (4))){
var inst_25742 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25744__$1,inst_25742);
} else {
if((state_val_25745 === (15))){
var inst_25740 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25753_25799 = state_25744__$1;
(statearr_25753_25799[(2)] = inst_25740);

(statearr_25753_25799[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (21))){
var inst_25699 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25754_25800 = state_25744__$1;
(statearr_25754_25800[(2)] = inst_25699);

(statearr_25754_25800[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (31))){
var inst_25723 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25723)){
var statearr_25755_25801 = state_25744__$1;
(statearr_25755_25801[(1)] = (34));

} else {
var statearr_25756_25802 = state_25744__$1;
(statearr_25756_25802[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (32))){
var inst_25732 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25757_25803 = state_25744__$1;
(statearr_25757_25803[(2)] = inst_25732);

(statearr_25757_25803[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (33))){
var inst_25721 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25758_25804 = state_25744__$1;
(statearr_25758_25804[(2)] = inst_25721);

(statearr_25758_25804[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (13))){
var inst_25682 = figwheel.client.heads_up.clear.call(null);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(16),inst_25682);
} else {
if((state_val_25745 === (22))){
var inst_25703 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25704 = figwheel.client.heads_up.append_message.call(null,inst_25703);
var state_25744__$1 = state_25744;
var statearr_25759_25805 = state_25744__$1;
(statearr_25759_25805[(2)] = inst_25704);

(statearr_25759_25805[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (36))){
var inst_25730 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25760_25806 = state_25744__$1;
(statearr_25760_25806[(2)] = inst_25730);

(statearr_25760_25806[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (29))){
var inst_25714 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25761_25807 = state_25744__$1;
(statearr_25761_25807[(2)] = inst_25714);

(statearr_25761_25807[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (6))){
var inst_25663 = (state_25744[(7)]);
var state_25744__$1 = state_25744;
var statearr_25762_25808 = state_25744__$1;
(statearr_25762_25808[(2)] = inst_25663);

(statearr_25762_25808[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (28))){
var inst_25710 = (state_25744[(2)]);
var inst_25711 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25712 = figwheel.client.heads_up.display_warning.call(null,inst_25711);
var state_25744__$1 = (function (){var statearr_25763 = state_25744;
(statearr_25763[(8)] = inst_25710);

return statearr_25763;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(29),inst_25712);
} else {
if((state_val_25745 === (25))){
var inst_25708 = figwheel.client.heads_up.clear.call(null);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(28),inst_25708);
} else {
if((state_val_25745 === (34))){
var inst_25725 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(37),inst_25725);
} else {
if((state_val_25745 === (17))){
var inst_25690 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25764_25809 = state_25744__$1;
(statearr_25764_25809[(2)] = inst_25690);

(statearr_25764_25809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (3))){
var inst_25680 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25680)){
var statearr_25765_25810 = state_25744__$1;
(statearr_25765_25810[(1)] = (13));

} else {
var statearr_25766_25811 = state_25744__$1;
(statearr_25766_25811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (12))){
var inst_25676 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25767_25812 = state_25744__$1;
(statearr_25767_25812[(2)] = inst_25676);

(statearr_25767_25812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (2))){
var inst_25663 = (state_25744[(7)]);
var inst_25663__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25744__$1 = (function (){var statearr_25768 = state_25744;
(statearr_25768[(7)] = inst_25663__$1);

return statearr_25768;
})();
if(cljs.core.truth_(inst_25663__$1)){
var statearr_25769_25813 = state_25744__$1;
(statearr_25769_25813[(1)] = (5));

} else {
var statearr_25770_25814 = state_25744__$1;
(statearr_25770_25814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (23))){
var inst_25706 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25706)){
var statearr_25771_25815 = state_25744__$1;
(statearr_25771_25815[(1)] = (25));

} else {
var statearr_25772_25816 = state_25744__$1;
(statearr_25772_25816[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (35))){
var state_25744__$1 = state_25744;
var statearr_25773_25817 = state_25744__$1;
(statearr_25773_25817[(2)] = null);

(statearr_25773_25817[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (19))){
var inst_25701 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25701)){
var statearr_25774_25818 = state_25744__$1;
(statearr_25774_25818[(1)] = (22));

} else {
var statearr_25775_25819 = state_25744__$1;
(statearr_25775_25819[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (11))){
var inst_25672 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25776_25820 = state_25744__$1;
(statearr_25776_25820[(2)] = inst_25672);

(statearr_25776_25820[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (9))){
var inst_25674 = figwheel.client.heads_up.clear.call(null);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(12),inst_25674);
} else {
if((state_val_25745 === (5))){
var inst_25665 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25744__$1 = state_25744;
var statearr_25777_25821 = state_25744__$1;
(statearr_25777_25821[(2)] = inst_25665);

(statearr_25777_25821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (14))){
var inst_25692 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25692)){
var statearr_25778_25822 = state_25744__$1;
(statearr_25778_25822[(1)] = (18));

} else {
var statearr_25779_25823 = state_25744__$1;
(statearr_25779_25823[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (26))){
var inst_25716 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25744__$1 = state_25744;
if(cljs.core.truth_(inst_25716)){
var statearr_25780_25824 = state_25744__$1;
(statearr_25780_25824[(1)] = (30));

} else {
var statearr_25781_25825 = state_25744__$1;
(statearr_25781_25825[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (16))){
var inst_25684 = (state_25744[(2)]);
var inst_25685 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25686 = figwheel.client.format_messages.call(null,inst_25685);
var inst_25687 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25688 = figwheel.client.heads_up.display_error.call(null,inst_25686,inst_25687);
var state_25744__$1 = (function (){var statearr_25782 = state_25744;
(statearr_25782[(9)] = inst_25684);

return statearr_25782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(17),inst_25688);
} else {
if((state_val_25745 === (30))){
var inst_25718 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25719 = figwheel.client.heads_up.display_warning.call(null,inst_25718);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(33),inst_25719);
} else {
if((state_val_25745 === (10))){
var inst_25678 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25783_25826 = state_25744__$1;
(statearr_25783_25826[(2)] = inst_25678);

(statearr_25783_25826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (18))){
var inst_25694 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25695 = figwheel.client.format_messages.call(null,inst_25694);
var inst_25696 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25697 = figwheel.client.heads_up.display_error.call(null,inst_25695,inst_25696);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(21),inst_25697);
} else {
if((state_val_25745 === (37))){
var inst_25727 = (state_25744[(2)]);
var state_25744__$1 = state_25744;
var statearr_25784_25827 = state_25744__$1;
(statearr_25784_25827[(2)] = inst_25727);

(statearr_25784_25827[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25745 === (8))){
var inst_25670 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25744__$1 = state_25744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25744__$1,(11),inst_25670);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__20950__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20838__auto__,c__20950__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____0 = (function (){
var statearr_25788 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25788[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__);

(statearr_25788[(1)] = (1));

return statearr_25788;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____1 = (function (state_25744){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_25744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e25789){if((e25789 instanceof Object)){
var ex__20842__auto__ = e25789;
var statearr_25790_25828 = state_25744;
(statearr_25790_25828[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25789;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25829 = state_25744;
state_25744 = G__25829;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__ = function(state_25744){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____1.call(this,state_25744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__,msg_hist,msg_names,msg))
})();
var state__20952__auto__ = (function (){var statearr_25791 = f__20951__auto__.call(null);
(statearr_25791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_25791;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__,msg_hist,msg_names,msg))
);

return c__20950__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20950__auto___25892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___25892,ch){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___25892,ch){
return (function (state_25875){
var state_val_25876 = (state_25875[(1)]);
if((state_val_25876 === (1))){
var state_25875__$1 = state_25875;
var statearr_25877_25893 = state_25875__$1;
(statearr_25877_25893[(2)] = null);

(statearr_25877_25893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (2))){
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25875__$1,(4),ch);
} else {
if((state_val_25876 === (3))){
var inst_25873 = (state_25875[(2)]);
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25875__$1,inst_25873);
} else {
if((state_val_25876 === (4))){
var inst_25863 = (state_25875[(7)]);
var inst_25863__$1 = (state_25875[(2)]);
var state_25875__$1 = (function (){var statearr_25878 = state_25875;
(statearr_25878[(7)] = inst_25863__$1);

return statearr_25878;
})();
if(cljs.core.truth_(inst_25863__$1)){
var statearr_25879_25894 = state_25875__$1;
(statearr_25879_25894[(1)] = (5));

} else {
var statearr_25880_25895 = state_25875__$1;
(statearr_25880_25895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (5))){
var inst_25863 = (state_25875[(7)]);
var inst_25865 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25863);
var state_25875__$1 = state_25875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25875__$1,(8),inst_25865);
} else {
if((state_val_25876 === (6))){
var state_25875__$1 = state_25875;
var statearr_25881_25896 = state_25875__$1;
(statearr_25881_25896[(2)] = null);

(statearr_25881_25896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (7))){
var inst_25871 = (state_25875[(2)]);
var state_25875__$1 = state_25875;
var statearr_25882_25897 = state_25875__$1;
(statearr_25882_25897[(2)] = inst_25871);

(statearr_25882_25897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25876 === (8))){
var inst_25867 = (state_25875[(2)]);
var state_25875__$1 = (function (){var statearr_25883 = state_25875;
(statearr_25883[(8)] = inst_25867);

return statearr_25883;
})();
var statearr_25884_25898 = state_25875__$1;
(statearr_25884_25898[(2)] = null);

(statearr_25884_25898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__20950__auto___25892,ch))
;
return ((function (switch__20838__auto__,c__20950__auto___25892,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20839__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20839__auto____0 = (function (){
var statearr_25888 = [null,null,null,null,null,null,null,null,null];
(statearr_25888[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20839__auto__);

(statearr_25888[(1)] = (1));

return statearr_25888;
});
var figwheel$client$heads_up_plugin_$_state_machine__20839__auto____1 = (function (state_25875){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_25875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e25889){if((e25889 instanceof Object)){
var ex__20842__auto__ = e25889;
var statearr_25890_25899 = state_25875;
(statearr_25890_25899[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25889;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25900 = state_25875;
state_25875 = G__25900;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20839__auto__ = function(state_25875){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20839__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20839__auto____1.call(this,state_25875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20839__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20839__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___25892,ch))
})();
var state__20952__auto__ = (function (){var statearr_25891 = f__20951__auto__.call(null);
(statearr_25891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___25892);

return statearr_25891;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___25892,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__){
return (function (state_25921){
var state_val_25922 = (state_25921[(1)]);
if((state_val_25922 === (1))){
var inst_25916 = cljs.core.async.timeout.call(null,(3000));
var state_25921__$1 = state_25921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25921__$1,(2),inst_25916);
} else {
if((state_val_25922 === (2))){
var inst_25918 = (state_25921[(2)]);
var inst_25919 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25921__$1 = (function (){var statearr_25923 = state_25921;
(statearr_25923[(7)] = inst_25918);

return statearr_25923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25921__$1,inst_25919);
} else {
return null;
}
}
});})(c__20950__auto__))
;
return ((function (switch__20838__auto__,c__20950__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____0 = (function (){
var statearr_25927 = [null,null,null,null,null,null,null,null];
(statearr_25927[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__);

(statearr_25927[(1)] = (1));

return statearr_25927;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____1 = (function (state_25921){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_25921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e25928){if((e25928 instanceof Object)){
var ex__20842__auto__ = e25928;
var statearr_25929_25931 = state_25921;
(statearr_25929_25931[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25932 = state_25921;
state_25921 = G__25932;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__ = function(state_25921){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____1.call(this,state_25921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20839__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__))
})();
var state__20952__auto__ = (function (){var statearr_25930 = f__20951__auto__.call(null);
(statearr_25930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_25930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__))
);

return c__20950__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25933){
var map__25940 = p__25933;
var map__25940__$1 = ((((!((map__25940 == null)))?((((map__25940.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25940.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25940):map__25940);
var ed = map__25940__$1;
var formatted_exception = cljs.core.get.call(null,map__25940__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25940__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25940__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25942_25946 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25943_25947 = null;
var count__25944_25948 = (0);
var i__25945_25949 = (0);
while(true){
if((i__25945_25949 < count__25944_25948)){
var msg_25950 = cljs.core._nth.call(null,chunk__25943_25947,i__25945_25949);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25950);

var G__25951 = seq__25942_25946;
var G__25952 = chunk__25943_25947;
var G__25953 = count__25944_25948;
var G__25954 = (i__25945_25949 + (1));
seq__25942_25946 = G__25951;
chunk__25943_25947 = G__25952;
count__25944_25948 = G__25953;
i__25945_25949 = G__25954;
continue;
} else {
var temp__4425__auto___25955 = cljs.core.seq.call(null,seq__25942_25946);
if(temp__4425__auto___25955){
var seq__25942_25956__$1 = temp__4425__auto___25955;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25942_25956__$1)){
var c__17629__auto___25957 = cljs.core.chunk_first.call(null,seq__25942_25956__$1);
var G__25958 = cljs.core.chunk_rest.call(null,seq__25942_25956__$1);
var G__25959 = c__17629__auto___25957;
var G__25960 = cljs.core.count.call(null,c__17629__auto___25957);
var G__25961 = (0);
seq__25942_25946 = G__25958;
chunk__25943_25947 = G__25959;
count__25944_25948 = G__25960;
i__25945_25949 = G__25961;
continue;
} else {
var msg_25962 = cljs.core.first.call(null,seq__25942_25956__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25962);

var G__25963 = cljs.core.next.call(null,seq__25942_25956__$1);
var G__25964 = null;
var G__25965 = (0);
var G__25966 = (0);
seq__25942_25946 = G__25963;
chunk__25943_25947 = G__25964;
count__25944_25948 = G__25965;
i__25945_25949 = G__25966;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25967){
var map__25970 = p__25967;
var map__25970__$1 = ((((!((map__25970 == null)))?((((map__25970.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25970.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25970):map__25970);
var w = map__25970__$1;
var message = cljs.core.get.call(null,map__25970__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__25978 = cljs.core.seq.call(null,plugins);
var chunk__25979 = null;
var count__25980 = (0);
var i__25981 = (0);
while(true){
if((i__25981 < count__25980)){
var vec__25982 = cljs.core._nth.call(null,chunk__25979,i__25981);
var k = cljs.core.nth.call(null,vec__25982,(0),null);
var plugin = cljs.core.nth.call(null,vec__25982,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25984 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25978,chunk__25979,count__25980,i__25981,pl_25984,vec__25982,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25984.call(null,msg_hist);
});})(seq__25978,chunk__25979,count__25980,i__25981,pl_25984,vec__25982,k,plugin))
);
} else {
}

var G__25985 = seq__25978;
var G__25986 = chunk__25979;
var G__25987 = count__25980;
var G__25988 = (i__25981 + (1));
seq__25978 = G__25985;
chunk__25979 = G__25986;
count__25980 = G__25987;
i__25981 = G__25988;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25978);
if(temp__4425__auto__){
var seq__25978__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25978__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25978__$1);
var G__25989 = cljs.core.chunk_rest.call(null,seq__25978__$1);
var G__25990 = c__17629__auto__;
var G__25991 = cljs.core.count.call(null,c__17629__auto__);
var G__25992 = (0);
seq__25978 = G__25989;
chunk__25979 = G__25990;
count__25980 = G__25991;
i__25981 = G__25992;
continue;
} else {
var vec__25983 = cljs.core.first.call(null,seq__25978__$1);
var k = cljs.core.nth.call(null,vec__25983,(0),null);
var plugin = cljs.core.nth.call(null,vec__25983,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25993 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25978,chunk__25979,count__25980,i__25981,pl_25993,vec__25983,k,plugin,seq__25978__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25993.call(null,msg_hist);
});})(seq__25978,chunk__25979,count__25980,i__25981,pl_25993,vec__25983,k,plugin,seq__25978__$1,temp__4425__auto__))
);
} else {
}

var G__25994 = cljs.core.next.call(null,seq__25978__$1);
var G__25995 = null;
var G__25996 = (0);
var G__25997 = (0);
seq__25978 = G__25994;
chunk__25979 = G__25995;
count__25980 = G__25996;
i__25981 = G__25997;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args25998 = [];
var len__17884__auto___26001 = arguments.length;
var i__17885__auto___26002 = (0);
while(true){
if((i__17885__auto___26002 < len__17884__auto___26001)){
args25998.push((arguments[i__17885__auto___26002]));

var G__26003 = (i__17885__auto___26002 + (1));
i__17885__auto___26002 = G__26003;
continue;
} else {
}
break;
}

var G__26000 = args25998.length;
switch (G__26000) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25998.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___26009 = arguments.length;
var i__17885__auto___26010 = (0);
while(true){
if((i__17885__auto___26010 < len__17884__auto___26009)){
args__17891__auto__.push((arguments[i__17885__auto___26010]));

var G__26011 = (i__17885__auto___26010 + (1));
i__17885__auto___26010 = G__26011;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__26006){
var map__26007 = p__26006;
var map__26007__$1 = ((((!((map__26007 == null)))?((((map__26007.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26007.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26007):map__26007);
var opts = map__26007__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq26005){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26005));
});

//# sourceMappingURL=client.js.map?rel=1449036927141