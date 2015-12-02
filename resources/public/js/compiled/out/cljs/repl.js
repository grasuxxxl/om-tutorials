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
var seq__24868_24882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24869_24883 = null;
var count__24870_24884 = (0);
var i__24871_24885 = (0);
while(true){
if((i__24871_24885 < count__24870_24884)){
var f_24886 = cljs.core._nth.call(null,chunk__24869_24883,i__24871_24885);
cljs.core.println.call(null,"  ",f_24886);

var G__24887 = seq__24868_24882;
var G__24888 = chunk__24869_24883;
var G__24889 = count__24870_24884;
var G__24890 = (i__24871_24885 + (1));
seq__24868_24882 = G__24887;
chunk__24869_24883 = G__24888;
count__24870_24884 = G__24889;
i__24871_24885 = G__24890;
continue;
} else {
var temp__4425__auto___24891 = cljs.core.seq.call(null,seq__24868_24882);
if(temp__4425__auto___24891){
var seq__24868_24892__$1 = temp__4425__auto___24891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24868_24892__$1)){
var c__17629__auto___24893 = cljs.core.chunk_first.call(null,seq__24868_24892__$1);
var G__24894 = cljs.core.chunk_rest.call(null,seq__24868_24892__$1);
var G__24895 = c__17629__auto___24893;
var G__24896 = cljs.core.count.call(null,c__17629__auto___24893);
var G__24897 = (0);
seq__24868_24882 = G__24894;
chunk__24869_24883 = G__24895;
count__24870_24884 = G__24896;
i__24871_24885 = G__24897;
continue;
} else {
var f_24898 = cljs.core.first.call(null,seq__24868_24892__$1);
cljs.core.println.call(null,"  ",f_24898);

var G__24899 = cljs.core.next.call(null,seq__24868_24892__$1);
var G__24900 = null;
var G__24901 = (0);
var G__24902 = (0);
seq__24868_24882 = G__24899;
chunk__24869_24883 = G__24900;
count__24870_24884 = G__24901;
i__24871_24885 = G__24902;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24903 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24903);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24903)))?cljs.core.second.call(null,arglists_24903):arglists_24903));
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
var seq__24872 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24873 = null;
var count__24874 = (0);
var i__24875 = (0);
while(true){
if((i__24875 < count__24874)){
var vec__24876 = cljs.core._nth.call(null,chunk__24873,i__24875);
var name = cljs.core.nth.call(null,vec__24876,(0),null);
var map__24877 = cljs.core.nth.call(null,vec__24876,(1),null);
var map__24877__$1 = ((((!((map__24877 == null)))?((((map__24877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24877):map__24877);
var doc = cljs.core.get.call(null,map__24877__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24877__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24904 = seq__24872;
var G__24905 = chunk__24873;
var G__24906 = count__24874;
var G__24907 = (i__24875 + (1));
seq__24872 = G__24904;
chunk__24873 = G__24905;
count__24874 = G__24906;
i__24875 = G__24907;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24872);
if(temp__4425__auto__){
var seq__24872__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24872__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__24872__$1);
var G__24908 = cljs.core.chunk_rest.call(null,seq__24872__$1);
var G__24909 = c__17629__auto__;
var G__24910 = cljs.core.count.call(null,c__17629__auto__);
var G__24911 = (0);
seq__24872 = G__24908;
chunk__24873 = G__24909;
count__24874 = G__24910;
i__24875 = G__24911;
continue;
} else {
var vec__24879 = cljs.core.first.call(null,seq__24872__$1);
var name = cljs.core.nth.call(null,vec__24879,(0),null);
var map__24880 = cljs.core.nth.call(null,vec__24879,(1),null);
var map__24880__$1 = ((((!((map__24880 == null)))?((((map__24880.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24880.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24880):map__24880);
var doc = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__24880__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__24912 = cljs.core.next.call(null,seq__24872__$1);
var G__24913 = null;
var G__24914 = (0);
var G__24915 = (0);
seq__24872 = G__24912;
chunk__24873 = G__24913;
count__24874 = G__24914;
i__24875 = G__24915;
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

//# sourceMappingURL=repl.js.map?rel=1449036926135