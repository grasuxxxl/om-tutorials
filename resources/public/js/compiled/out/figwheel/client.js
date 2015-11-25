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
var pred__24627 = cljs.core._EQ_;
var expr__24628 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__24627.call(null,"true",expr__24628))){
return true;
} else {
if(cljs.core.truth_(pred__24627.call(null,"false",expr__24628))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__24628)].join('')));
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
var G__24630__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24630 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24631__i = 0, G__24631__a = new Array(arguments.length -  0);
while (G__24631__i < G__24631__a.length) {G__24631__a[G__24631__i] = arguments[G__24631__i + 0]; ++G__24631__i;}
  args = new cljs.core.IndexedSeq(G__24631__a,0);
} 
return G__24630__delegate.call(this,args);};
G__24630.cljs$lang$maxFixedArity = 0;
G__24630.cljs$lang$applyTo = (function (arglist__24632){
var args = cljs.core.seq(arglist__24632);
return G__24630__delegate(args);
});
G__24630.cljs$core$IFn$_invoke$arity$variadic = G__24630__delegate;
return G__24630;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__24633){
var map__24636 = p__24633;
var map__24636__$1 = ((((!((map__24636 == null)))?((((map__24636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24636):map__24636);
var message = cljs.core.get.call(null,map__24636__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__24636__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__20241__auto___24798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___24798,ch){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___24798,ch){
return (function (state_24767){
var state_val_24768 = (state_24767[(1)]);
if((state_val_24768 === (7))){
var inst_24763 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24769_24799 = state_24767__$1;
(statearr_24769_24799[(2)] = inst_24763);

(statearr_24769_24799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (1))){
var state_24767__$1 = state_24767;
var statearr_24770_24800 = state_24767__$1;
(statearr_24770_24800[(2)] = null);

(statearr_24770_24800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (4))){
var inst_24720 = (state_24767[(7)]);
var inst_24720__$1 = (state_24767[(2)]);
var state_24767__$1 = (function (){var statearr_24771 = state_24767;
(statearr_24771[(7)] = inst_24720__$1);

return statearr_24771;
})();
if(cljs.core.truth_(inst_24720__$1)){
var statearr_24772_24801 = state_24767__$1;
(statearr_24772_24801[(1)] = (5));

} else {
var statearr_24773_24802 = state_24767__$1;
(statearr_24773_24802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (15))){
var inst_24727 = (state_24767[(8)]);
var inst_24742 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24727);
var inst_24743 = cljs.core.first.call(null,inst_24742);
var inst_24744 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_24743);
var inst_24745 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_24744)].join('');
var inst_24746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_24745);
var state_24767__$1 = state_24767;
var statearr_24774_24803 = state_24767__$1;
(statearr_24774_24803[(2)] = inst_24746);

(statearr_24774_24803[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (13))){
var inst_24751 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24775_24804 = state_24767__$1;
(statearr_24775_24804[(2)] = inst_24751);

(statearr_24775_24804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (6))){
var state_24767__$1 = state_24767;
var statearr_24776_24805 = state_24767__$1;
(statearr_24776_24805[(2)] = null);

(statearr_24776_24805[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (17))){
var inst_24749 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24777_24806 = state_24767__$1;
(statearr_24777_24806[(2)] = inst_24749);

(statearr_24777_24806[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (3))){
var inst_24765 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24767__$1,inst_24765);
} else {
if((state_val_24768 === (12))){
var inst_24726 = (state_24767[(9)]);
var inst_24740 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_24726,opts);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24740)){
var statearr_24778_24807 = state_24767__$1;
(statearr_24778_24807[(1)] = (15));

} else {
var statearr_24779_24808 = state_24767__$1;
(statearr_24779_24808[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (2))){
var state_24767__$1 = state_24767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24767__$1,(4),ch);
} else {
if((state_val_24768 === (11))){
var inst_24727 = (state_24767[(8)]);
var inst_24732 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24733 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_24727);
var inst_24734 = cljs.core.async.timeout.call(null,(1000));
var inst_24735 = [inst_24733,inst_24734];
var inst_24736 = (new cljs.core.PersistentVector(null,2,(5),inst_24732,inst_24735,null));
var state_24767__$1 = state_24767;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24767__$1,(14),inst_24736);
} else {
if((state_val_24768 === (9))){
var inst_24727 = (state_24767[(8)]);
var inst_24753 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_24754 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_24727);
var inst_24755 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24754);
var inst_24756 = [cljs.core.str("Not loading: "),cljs.core.str(inst_24755)].join('');
var inst_24757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_24756);
var state_24767__$1 = (function (){var statearr_24780 = state_24767;
(statearr_24780[(10)] = inst_24753);

return statearr_24780;
})();
var statearr_24781_24809 = state_24767__$1;
(statearr_24781_24809[(2)] = inst_24757);

(statearr_24781_24809[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (5))){
var inst_24720 = (state_24767[(7)]);
var inst_24722 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_24723 = (new cljs.core.PersistentArrayMap(null,2,inst_24722,null));
var inst_24724 = (new cljs.core.PersistentHashSet(null,inst_24723,null));
var inst_24725 = figwheel.client.focus_msgs.call(null,inst_24724,inst_24720);
var inst_24726 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_24725);
var inst_24727 = cljs.core.first.call(null,inst_24725);
var inst_24728 = figwheel.client.autoload_QMARK_.call(null);
var state_24767__$1 = (function (){var statearr_24782 = state_24767;
(statearr_24782[(9)] = inst_24726);

(statearr_24782[(8)] = inst_24727);

return statearr_24782;
})();
if(cljs.core.truth_(inst_24728)){
var statearr_24783_24810 = state_24767__$1;
(statearr_24783_24810[(1)] = (8));

} else {
var statearr_24784_24811 = state_24767__$1;
(statearr_24784_24811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (14))){
var inst_24738 = (state_24767[(2)]);
var state_24767__$1 = state_24767;
var statearr_24785_24812 = state_24767__$1;
(statearr_24785_24812[(2)] = inst_24738);

(statearr_24785_24812[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (16))){
var state_24767__$1 = state_24767;
var statearr_24786_24813 = state_24767__$1;
(statearr_24786_24813[(2)] = null);

(statearr_24786_24813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (10))){
var inst_24759 = (state_24767[(2)]);
var state_24767__$1 = (function (){var statearr_24787 = state_24767;
(statearr_24787[(11)] = inst_24759);

return statearr_24787;
})();
var statearr_24788_24814 = state_24767__$1;
(statearr_24788_24814[(2)] = null);

(statearr_24788_24814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24768 === (8))){
var inst_24726 = (state_24767[(9)]);
var inst_24730 = figwheel.client.reload_file_state_QMARK_.call(null,inst_24726,opts);
var state_24767__$1 = state_24767;
if(cljs.core.truth_(inst_24730)){
var statearr_24789_24815 = state_24767__$1;
(statearr_24789_24815[(1)] = (11));

} else {
var statearr_24790_24816 = state_24767__$1;
(statearr_24790_24816[(1)] = (12));

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
});})(c__20241__auto___24798,ch))
;
return ((function (switch__20129__auto__,c__20241__auto___24798,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____0 = (function (){
var statearr_24794 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24794[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__);

(statearr_24794[(1)] = (1));

return statearr_24794;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____1 = (function (state_24767){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_24767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e24795){if((e24795 instanceof Object)){
var ex__20133__auto__ = e24795;
var statearr_24796_24817 = state_24767;
(statearr_24796_24817[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24818 = state_24767;
state_24767 = G__24818;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__ = function(state_24767){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____1.call(this,state_24767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20130__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___24798,ch))
})();
var state__20243__auto__ = (function (){var statearr_24797 = f__20242__auto__.call(null);
(statearr_24797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___24798);

return statearr_24797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___24798,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__24819_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__24819_SHARP_));
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
var base_path_24826 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_24826){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_24824 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_24825 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_24824,_STAR_print_newline_STAR_24825,base_path_24826){
return (function() { 
var G__24827__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__24827 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24828__i = 0, G__24828__a = new Array(arguments.length -  0);
while (G__24828__i < G__24828__a.length) {G__24828__a[G__24828__i] = arguments[G__24828__i + 0]; ++G__24828__i;}
  args = new cljs.core.IndexedSeq(G__24828__a,0);
} 
return G__24827__delegate.call(this,args);};
G__24827.cljs$lang$maxFixedArity = 0;
G__24827.cljs$lang$applyTo = (function (arglist__24829){
var args = cljs.core.seq(arglist__24829);
return G__24827__delegate(args);
});
G__24827.cljs$core$IFn$_invoke$arity$variadic = G__24827__delegate;
return G__24827;
})()
;})(_STAR_print_fn_STAR_24824,_STAR_print_newline_STAR_24825,base_path_24826))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24825;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24824;
}}catch (e24823){if((e24823 instanceof Error)){
var e = e24823;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_24826], null));
} else {
var e = e24823;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_24826))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__24830){
var map__24837 = p__24830;
var map__24837__$1 = ((((!((map__24837 == null)))?((((map__24837.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24837.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24837):map__24837);
var opts = map__24837__$1;
var build_id = cljs.core.get.call(null,map__24837__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__24837,map__24837__$1,opts,build_id){
return (function (p__24839){
var vec__24840 = p__24839;
var map__24841 = cljs.core.nth.call(null,vec__24840,(0),null);
var map__24841__$1 = ((((!((map__24841 == null)))?((((map__24841.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24841.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24841):map__24841);
var msg = map__24841__$1;
var msg_name = cljs.core.get.call(null,map__24841__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24840,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__24840,map__24841,map__24841__$1,msg,msg_name,_,map__24837,map__24837__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__24840,map__24841,map__24841__$1,msg,msg_name,_,map__24837,map__24837__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__24837,map__24837__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__24847){
var vec__24848 = p__24847;
var map__24849 = cljs.core.nth.call(null,vec__24848,(0),null);
var map__24849__$1 = ((((!((map__24849 == null)))?((((map__24849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24849):map__24849);
var msg = map__24849__$1;
var msg_name = cljs.core.get.call(null,map__24849__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24848,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__24851){
var map__24861 = p__24851;
var map__24861__$1 = ((((!((map__24861 == null)))?((((map__24861.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24861.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24861):map__24861);
var on_compile_warning = cljs.core.get.call(null,map__24861__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__24861__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__24861,map__24861__$1,on_compile_warning,on_compile_fail){
return (function (p__24863){
var vec__24864 = p__24863;
var map__24865 = cljs.core.nth.call(null,vec__24864,(0),null);
var map__24865__$1 = ((((!((map__24865 == null)))?((((map__24865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24865):map__24865);
var msg = map__24865__$1;
var msg_name = cljs.core.get.call(null,map__24865__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__24864,(1));
var pred__24867 = cljs.core._EQ_;
var expr__24868 = msg_name;
if(cljs.core.truth_(pred__24867.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__24868))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__24867.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24868))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__24861,map__24861__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__,msg_hist,msg_names,msg){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__,msg_hist,msg_names,msg){
return (function (state_25084){
var state_val_25085 = (state_25084[(1)]);
if((state_val_25085 === (7))){
var inst_25008 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25008)){
var statearr_25086_25132 = state_25084__$1;
(statearr_25086_25132[(1)] = (8));

} else {
var statearr_25087_25133 = state_25084__$1;
(statearr_25087_25133[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (20))){
var inst_25078 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25088_25134 = state_25084__$1;
(statearr_25088_25134[(2)] = inst_25078);

(statearr_25088_25134[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (27))){
var inst_25074 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25089_25135 = state_25084__$1;
(statearr_25089_25135[(2)] = inst_25074);

(statearr_25089_25135[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (1))){
var inst_25001 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25001)){
var statearr_25090_25136 = state_25084__$1;
(statearr_25090_25136[(1)] = (2));

} else {
var statearr_25091_25137 = state_25084__$1;
(statearr_25091_25137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (24))){
var inst_25076 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25092_25138 = state_25084__$1;
(statearr_25092_25138[(2)] = inst_25076);

(statearr_25092_25138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (4))){
var inst_25082 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25084__$1,inst_25082);
} else {
if((state_val_25085 === (15))){
var inst_25080 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25093_25139 = state_25084__$1;
(statearr_25093_25139[(2)] = inst_25080);

(statearr_25093_25139[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (21))){
var inst_25039 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25094_25140 = state_25084__$1;
(statearr_25094_25140[(2)] = inst_25039);

(statearr_25094_25140[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (31))){
var inst_25063 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25063)){
var statearr_25095_25141 = state_25084__$1;
(statearr_25095_25141[(1)] = (34));

} else {
var statearr_25096_25142 = state_25084__$1;
(statearr_25096_25142[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (32))){
var inst_25072 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25097_25143 = state_25084__$1;
(statearr_25097_25143[(2)] = inst_25072);

(statearr_25097_25143[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (33))){
var inst_25061 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25098_25144 = state_25084__$1;
(statearr_25098_25144[(2)] = inst_25061);

(statearr_25098_25144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (13))){
var inst_25022 = figwheel.client.heads_up.clear.call(null);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(16),inst_25022);
} else {
if((state_val_25085 === (22))){
var inst_25043 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25044 = figwheel.client.heads_up.append_message.call(null,inst_25043);
var state_25084__$1 = state_25084;
var statearr_25099_25145 = state_25084__$1;
(statearr_25099_25145[(2)] = inst_25044);

(statearr_25099_25145[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (36))){
var inst_25070 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25100_25146 = state_25084__$1;
(statearr_25100_25146[(2)] = inst_25070);

(statearr_25100_25146[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (29))){
var inst_25054 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25101_25147 = state_25084__$1;
(statearr_25101_25147[(2)] = inst_25054);

(statearr_25101_25147[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (6))){
var inst_25003 = (state_25084[(7)]);
var state_25084__$1 = state_25084;
var statearr_25102_25148 = state_25084__$1;
(statearr_25102_25148[(2)] = inst_25003);

(statearr_25102_25148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (28))){
var inst_25050 = (state_25084[(2)]);
var inst_25051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25052 = figwheel.client.heads_up.display_warning.call(null,inst_25051);
var state_25084__$1 = (function (){var statearr_25103 = state_25084;
(statearr_25103[(8)] = inst_25050);

return statearr_25103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(29),inst_25052);
} else {
if((state_val_25085 === (25))){
var inst_25048 = figwheel.client.heads_up.clear.call(null);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(28),inst_25048);
} else {
if((state_val_25085 === (34))){
var inst_25065 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(37),inst_25065);
} else {
if((state_val_25085 === (17))){
var inst_25030 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25104_25149 = state_25084__$1;
(statearr_25104_25149[(2)] = inst_25030);

(statearr_25104_25149[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (3))){
var inst_25020 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25020)){
var statearr_25105_25150 = state_25084__$1;
(statearr_25105_25150[(1)] = (13));

} else {
var statearr_25106_25151 = state_25084__$1;
(statearr_25106_25151[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (12))){
var inst_25016 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25107_25152 = state_25084__$1;
(statearr_25107_25152[(2)] = inst_25016);

(statearr_25107_25152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (2))){
var inst_25003 = (state_25084[(7)]);
var inst_25003__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_25084__$1 = (function (){var statearr_25108 = state_25084;
(statearr_25108[(7)] = inst_25003__$1);

return statearr_25108;
})();
if(cljs.core.truth_(inst_25003__$1)){
var statearr_25109_25153 = state_25084__$1;
(statearr_25109_25153[(1)] = (5));

} else {
var statearr_25110_25154 = state_25084__$1;
(statearr_25110_25154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (23))){
var inst_25046 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25046)){
var statearr_25111_25155 = state_25084__$1;
(statearr_25111_25155[(1)] = (25));

} else {
var statearr_25112_25156 = state_25084__$1;
(statearr_25112_25156[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (35))){
var state_25084__$1 = state_25084;
var statearr_25113_25157 = state_25084__$1;
(statearr_25113_25157[(2)] = null);

(statearr_25113_25157[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (19))){
var inst_25041 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25041)){
var statearr_25114_25158 = state_25084__$1;
(statearr_25114_25158[(1)] = (22));

} else {
var statearr_25115_25159 = state_25084__$1;
(statearr_25115_25159[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (11))){
var inst_25012 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25116_25160 = state_25084__$1;
(statearr_25116_25160[(2)] = inst_25012);

(statearr_25116_25160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (9))){
var inst_25014 = figwheel.client.heads_up.clear.call(null);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(12),inst_25014);
} else {
if((state_val_25085 === (5))){
var inst_25005 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_25084__$1 = state_25084;
var statearr_25117_25161 = state_25084__$1;
(statearr_25117_25161[(2)] = inst_25005);

(statearr_25117_25161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (14))){
var inst_25032 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25032)){
var statearr_25118_25162 = state_25084__$1;
(statearr_25118_25162[(1)] = (18));

} else {
var statearr_25119_25163 = state_25084__$1;
(statearr_25119_25163[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (26))){
var inst_25056 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_25084__$1 = state_25084;
if(cljs.core.truth_(inst_25056)){
var statearr_25120_25164 = state_25084__$1;
(statearr_25120_25164[(1)] = (30));

} else {
var statearr_25121_25165 = state_25084__$1;
(statearr_25121_25165[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (16))){
var inst_25024 = (state_25084[(2)]);
var inst_25025 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25026 = figwheel.client.format_messages.call(null,inst_25025);
var inst_25027 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25028 = figwheel.client.heads_up.display_error.call(null,inst_25026,inst_25027);
var state_25084__$1 = (function (){var statearr_25122 = state_25084;
(statearr_25122[(9)] = inst_25024);

return statearr_25122;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(17),inst_25028);
} else {
if((state_val_25085 === (30))){
var inst_25058 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25059 = figwheel.client.heads_up.display_warning.call(null,inst_25058);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(33),inst_25059);
} else {
if((state_val_25085 === (10))){
var inst_25018 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25123_25166 = state_25084__$1;
(statearr_25123_25166[(2)] = inst_25018);

(statearr_25123_25166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (18))){
var inst_25034 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25035 = figwheel.client.format_messages.call(null,inst_25034);
var inst_25036 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_25037 = figwheel.client.heads_up.display_error.call(null,inst_25035,inst_25036);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(21),inst_25037);
} else {
if((state_val_25085 === (37))){
var inst_25067 = (state_25084[(2)]);
var state_25084__$1 = state_25084;
var statearr_25124_25167 = state_25084__$1;
(statearr_25124_25167[(2)] = inst_25067);

(statearr_25124_25167[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25085 === (8))){
var inst_25010 = figwheel.client.heads_up.flash_loaded.call(null);
var state_25084__$1 = state_25084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25084__$1,(11),inst_25010);
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
});})(c__20241__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20129__auto__,c__20241__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____0 = (function (){
var statearr_25128 = [null,null,null,null,null,null,null,null,null,null];
(statearr_25128[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__);

(statearr_25128[(1)] = (1));

return statearr_25128;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____1 = (function (state_25084){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_25084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e25129){if((e25129 instanceof Object)){
var ex__20133__auto__ = e25129;
var statearr_25130_25168 = state_25084;
(statearr_25130_25168[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25129;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25169 = state_25084;
state_25084 = G__25169;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__ = function(state_25084){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____1.call(this,state_25084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__,msg_hist,msg_names,msg))
})();
var state__20243__auto__ = (function (){var statearr_25131 = f__20242__auto__.call(null);
(statearr_25131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_25131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__,msg_hist,msg_names,msg))
);

return c__20241__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__20241__auto___25232 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___25232,ch){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___25232,ch){
return (function (state_25215){
var state_val_25216 = (state_25215[(1)]);
if((state_val_25216 === (1))){
var state_25215__$1 = state_25215;
var statearr_25217_25233 = state_25215__$1;
(statearr_25217_25233[(2)] = null);

(statearr_25217_25233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (2))){
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25215__$1,(4),ch);
} else {
if((state_val_25216 === (3))){
var inst_25213 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25215__$1,inst_25213);
} else {
if((state_val_25216 === (4))){
var inst_25203 = (state_25215[(7)]);
var inst_25203__$1 = (state_25215[(2)]);
var state_25215__$1 = (function (){var statearr_25218 = state_25215;
(statearr_25218[(7)] = inst_25203__$1);

return statearr_25218;
})();
if(cljs.core.truth_(inst_25203__$1)){
var statearr_25219_25234 = state_25215__$1;
(statearr_25219_25234[(1)] = (5));

} else {
var statearr_25220_25235 = state_25215__$1;
(statearr_25220_25235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (5))){
var inst_25203 = (state_25215[(7)]);
var inst_25205 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_25203);
var state_25215__$1 = state_25215;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25215__$1,(8),inst_25205);
} else {
if((state_val_25216 === (6))){
var state_25215__$1 = state_25215;
var statearr_25221_25236 = state_25215__$1;
(statearr_25221_25236[(2)] = null);

(statearr_25221_25236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (7))){
var inst_25211 = (state_25215[(2)]);
var state_25215__$1 = state_25215;
var statearr_25222_25237 = state_25215__$1;
(statearr_25222_25237[(2)] = inst_25211);

(statearr_25222_25237[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25216 === (8))){
var inst_25207 = (state_25215[(2)]);
var state_25215__$1 = (function (){var statearr_25223 = state_25215;
(statearr_25223[(8)] = inst_25207);

return statearr_25223;
})();
var statearr_25224_25238 = state_25215__$1;
(statearr_25224_25238[(2)] = null);

(statearr_25224_25238[(1)] = (2));


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
});})(c__20241__auto___25232,ch))
;
return ((function (switch__20129__auto__,c__20241__auto___25232,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20130__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20130__auto____0 = (function (){
var statearr_25228 = [null,null,null,null,null,null,null,null,null];
(statearr_25228[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20130__auto__);

(statearr_25228[(1)] = (1));

return statearr_25228;
});
var figwheel$client$heads_up_plugin_$_state_machine__20130__auto____1 = (function (state_25215){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_25215);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e25229){if((e25229 instanceof Object)){
var ex__20133__auto__ = e25229;
var statearr_25230_25239 = state_25215;
(statearr_25230_25239[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25240 = state_25215;
state_25215 = G__25240;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20130__auto__ = function(state_25215){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20130__auto____1.call(this,state_25215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20130__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20130__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___25232,ch))
})();
var state__20243__auto__ = (function (){var statearr_25231 = f__20242__auto__.call(null);
(statearr_25231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___25232);

return statearr_25231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___25232,ch))
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
var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__){
return (function (state_25261){
var state_val_25262 = (state_25261[(1)]);
if((state_val_25262 === (1))){
var inst_25256 = cljs.core.async.timeout.call(null,(3000));
var state_25261__$1 = state_25261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25261__$1,(2),inst_25256);
} else {
if((state_val_25262 === (2))){
var inst_25258 = (state_25261[(2)]);
var inst_25259 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_25261__$1 = (function (){var statearr_25263 = state_25261;
(statearr_25263[(7)] = inst_25258);

return statearr_25263;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25261__$1,inst_25259);
} else {
return null;
}
}
});})(c__20241__auto__))
;
return ((function (switch__20129__auto__,c__20241__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____0 = (function (){
var statearr_25267 = [null,null,null,null,null,null,null,null];
(statearr_25267[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__);

(statearr_25267[(1)] = (1));

return statearr_25267;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____1 = (function (state_25261){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_25261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e25268){if((e25268 instanceof Object)){
var ex__20133__auto__ = e25268;
var statearr_25269_25271 = state_25261;
(statearr_25269_25271[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25272 = state_25261;
state_25261 = G__25272;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__ = function(state_25261){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____1.call(this,state_25261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20130__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__))
})();
var state__20243__auto__ = (function (){var statearr_25270 = f__20242__auto__.call(null);
(statearr_25270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_25270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__))
);

return c__20241__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__25273){
var map__25280 = p__25273;
var map__25280__$1 = ((((!((map__25280 == null)))?((((map__25280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25280):map__25280);
var ed = map__25280__$1;
var formatted_exception = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__25280__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__25282_25286 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__25283_25287 = null;
var count__25284_25288 = (0);
var i__25285_25289 = (0);
while(true){
if((i__25285_25289 < count__25284_25288)){
var msg_25290 = cljs.core._nth.call(null,chunk__25283_25287,i__25285_25289);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25290);

var G__25291 = seq__25282_25286;
var G__25292 = chunk__25283_25287;
var G__25293 = count__25284_25288;
var G__25294 = (i__25285_25289 + (1));
seq__25282_25286 = G__25291;
chunk__25283_25287 = G__25292;
count__25284_25288 = G__25293;
i__25285_25289 = G__25294;
continue;
} else {
var temp__4425__auto___25295 = cljs.core.seq.call(null,seq__25282_25286);
if(temp__4425__auto___25295){
var seq__25282_25296__$1 = temp__4425__auto___25295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25282_25296__$1)){
var c__17629__auto___25297 = cljs.core.chunk_first.call(null,seq__25282_25296__$1);
var G__25298 = cljs.core.chunk_rest.call(null,seq__25282_25296__$1);
var G__25299 = c__17629__auto___25297;
var G__25300 = cljs.core.count.call(null,c__17629__auto___25297);
var G__25301 = (0);
seq__25282_25286 = G__25298;
chunk__25283_25287 = G__25299;
count__25284_25288 = G__25300;
i__25285_25289 = G__25301;
continue;
} else {
var msg_25302 = cljs.core.first.call(null,seq__25282_25296__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_25302);

var G__25303 = cljs.core.next.call(null,seq__25282_25296__$1);
var G__25304 = null;
var G__25305 = (0);
var G__25306 = (0);
seq__25282_25286 = G__25303;
chunk__25283_25287 = G__25304;
count__25284_25288 = G__25305;
i__25285_25289 = G__25306;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__25307){
var map__25310 = p__25307;
var map__25310__$1 = ((((!((map__25310 == null)))?((((map__25310.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25310.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25310):map__25310);
var w = map__25310__$1;
var message = cljs.core.get.call(null,map__25310__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__25318 = cljs.core.seq.call(null,plugins);
var chunk__25319 = null;
var count__25320 = (0);
var i__25321 = (0);
while(true){
if((i__25321 < count__25320)){
var vec__25322 = cljs.core._nth.call(null,chunk__25319,i__25321);
var k = cljs.core.nth.call(null,vec__25322,(0),null);
var plugin = cljs.core.nth.call(null,vec__25322,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25324 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25318,chunk__25319,count__25320,i__25321,pl_25324,vec__25322,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_25324.call(null,msg_hist);
});})(seq__25318,chunk__25319,count__25320,i__25321,pl_25324,vec__25322,k,plugin))
);
} else {
}

var G__25325 = seq__25318;
var G__25326 = chunk__25319;
var G__25327 = count__25320;
var G__25328 = (i__25321 + (1));
seq__25318 = G__25325;
chunk__25319 = G__25326;
count__25320 = G__25327;
i__25321 = G__25328;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25318);
if(temp__4425__auto__){
var seq__25318__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25318__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__25318__$1);
var G__25329 = cljs.core.chunk_rest.call(null,seq__25318__$1);
var G__25330 = c__17629__auto__;
var G__25331 = cljs.core.count.call(null,c__17629__auto__);
var G__25332 = (0);
seq__25318 = G__25329;
chunk__25319 = G__25330;
count__25320 = G__25331;
i__25321 = G__25332;
continue;
} else {
var vec__25323 = cljs.core.first.call(null,seq__25318__$1);
var k = cljs.core.nth.call(null,vec__25323,(0),null);
var plugin = cljs.core.nth.call(null,vec__25323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_25333 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__25318,chunk__25319,count__25320,i__25321,pl_25333,vec__25323,k,plugin,seq__25318__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_25333.call(null,msg_hist);
});})(seq__25318,chunk__25319,count__25320,i__25321,pl_25333,vec__25323,k,plugin,seq__25318__$1,temp__4425__auto__))
);
} else {
}

var G__25334 = cljs.core.next.call(null,seq__25318__$1);
var G__25335 = null;
var G__25336 = (0);
var G__25337 = (0);
seq__25318 = G__25334;
chunk__25319 = G__25335;
count__25320 = G__25336;
i__25321 = G__25337;
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
var args25338 = [];
var len__17884__auto___25341 = arguments.length;
var i__17885__auto___25342 = (0);
while(true){
if((i__17885__auto___25342 < len__17884__auto___25341)){
args25338.push((arguments[i__17885__auto___25342]));

var G__25343 = (i__17885__auto___25342 + (1));
i__17885__auto___25342 = G__25343;
continue;
} else {
}
break;
}

var G__25340 = args25338.length;
switch (G__25340) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25338.length)].join('')));

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
var len__17884__auto___25349 = arguments.length;
var i__17885__auto___25350 = (0);
while(true){
if((i__17885__auto___25350 < len__17884__auto___25349)){
args__17891__auto__.push((arguments[i__17885__auto___25350]));

var G__25351 = (i__17885__auto___25350 + (1));
i__17885__auto___25350 = G__25351;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__25346){
var map__25347 = p__25346;
var map__25347__$1 = ((((!((map__25347 == null)))?((((map__25347.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25347.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25347):map__25347);
var opts = map__25347__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq25345){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25345));
});

//# sourceMappingURL=client.js.map?rel=1448389554648