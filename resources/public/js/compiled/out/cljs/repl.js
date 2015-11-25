// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24208_24222 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24209_24223 = null;
var count__24210_24224 = (0);
var i__24211_24225 = (0);
while(true){
if((i__24211_24225 < count__24210_24224)){
var f_24226 = cljs.core._nth.call(null,chunk__24209_24223,i__24211_24225);
cljs.core.println.call(null,"  ",f_24226);

var G__24227 = seq__24208_24222;
var G__24228 = chunk__24209_24223;
var G__24229 = count__24210_24224;
var G__24230 = (i__24211_24225 + (1));
seq__24208_24222 = G__24227;
chunk__24209_24223 = G__24228;
count__24210_24224 = G__24229;
i__24211_24225 = G__24230;
continue;
} else {
var temp__4425__auto___24231 = cljs.core.seq.call(null,seq__24208_24222);
if(temp__4425__auto___24231){
var seq__24208_24232__$1 = temp__4425__auto___24231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24208_24232__$1)){
var c__17629__auto___24233 = cljs.core.chunk_first.call(null,seq__24208_24232__$1);
var G__24234 = cljs.core.chunk_rest.call(null,seq__24208_24232__$1);
var G__24235 = c__17629__auto___24233;
var G__24236 = cljs.core.count.call(null,c__17629__auto___24233);
var G__24237 = (0);
seq__24208_24222 = G__24234;
chunk__24209_24223 = G__24235;
count__24210_24224 = G__24236;
i__24211_24225 = G__24237;
continue;
} else {
var f_24238 = cljs.core.first.call(null,seq__24208_24232__$1);
cljs.core.println.call(null,"  ",f_24238);

var G__24239 = cljs.core.next.call(null,seq__24208_24232__$1);
var G__24240 = null;
var G__24241 = (0);
var G__24242 = (0);
seq__24208_24222 = G__24239;
chunk__24209_24223 = G__24240;
count__24210_24224 = G__24241;
i__24211_24225 = G__24242;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24243 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24243);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24243)))?cljs.core.second.call(null,arglists_24243):arglists_24243));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24212 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24213 = null;
var count__24214 = (0);
var i__24215 = (0);
while(true){
if((i__24215 < count__24214)){
var vec__24216 = cljs.core._nth.call(null,chunk__24213,i__24215);
var name = cljs.core.nth.call(null,vec__24216,(0),null);
var map__24217 = cljs.core.nth.call(null,vec__24216,(1),null);
var map__24217__$1 = ((((!((map__24217 == null)))?((((map__24217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24217):map__24217);
var doc = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24217__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24244 = seq__24212;
var G__24245 = chunk__24213;
var G__24246 = count__24214;
var G__24247 = (i__24215 + (1));
seq__24212 = G__24244;
chunk__24213 = G__24245;
count__24214 = G__24246;
i__24215 = G__24247;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24212);
if(temp__4425__auto__){
var seq__24212__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24212__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24212__$1);
var G__24248 = cljs.core.chunk_rest.call(null,seq__24212__$1);
var G__24249 = c__17629__auto__;
var G__24250 = cljs.core.count.call(null,c__17629__auto__);
var G__24251 = (0);
seq__24212 = G__24248;
chunk__24213 = G__24249;
count__24214 = G__24250;
i__24215 = G__24251;
continue;
} else {
var vec__24219 = cljs.core.first.call(null,seq__24212__$1);
var name = cljs.core.nth.call(null,vec__24219,(0),null);
var map__24220 = cljs.core.nth.call(null,vec__24219,(1),null);
var map__24220__$1 = ((((!((map__24220 == null)))?((((map__24220.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24220.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24220):map__24220);
var doc = cljs.core.get.call(null,map__24220__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24220__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24252 = cljs.core.next.call(null,seq__24212__$1);
var G__24253 = null;
var G__24254 = (0);
var G__24255 = (0);
seq__24212 = G__24252;
chunk__24213 = G__24253;
count__24214 = G__24254;
i__24215 = G__24255;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1448389553101