// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__23184_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__23184_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__23189 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__23190 = null;
var count__23191 = (0);
var i__23192 = (0);
while(true){
if((i__23192 < count__23191)){
var n = cljs.core._nth.call(null,chunk__23190,i__23192);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23193 = seq__23189;
var G__23194 = chunk__23190;
var G__23195 = count__23191;
var G__23196 = (i__23192 + (1));
seq__23189 = G__23193;
chunk__23190 = G__23194;
count__23191 = G__23195;
i__23192 = G__23196;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23189);
if(temp__4425__auto__){
var seq__23189__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23189__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23189__$1);
var G__23197 = cljs.core.chunk_rest.call(null,seq__23189__$1);
var G__23198 = c__17629__auto__;
var G__23199 = cljs.core.count.call(null,c__17629__auto__);
var G__23200 = (0);
seq__23189 = G__23197;
chunk__23190 = G__23198;
count__23191 = G__23199;
i__23192 = G__23200;
continue;
} else {
var n = cljs.core.first.call(null,seq__23189__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__23201 = cljs.core.next.call(null,seq__23189__$1);
var G__23202 = null;
var G__23203 = (0);
var G__23204 = (0);
seq__23189 = G__23201;
chunk__23190 = G__23202;
count__23191 = G__23203;
i__23192 = G__23204;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__23243_23250 = cljs.core.seq.call(null,deps);
var chunk__23244_23251 = null;
var count__23245_23252 = (0);
var i__23246_23253 = (0);
while(true){
if((i__23246_23253 < count__23245_23252)){
var dep_23254 = cljs.core._nth.call(null,chunk__23244_23251,i__23246_23253);
topo_sort_helper_STAR_.call(null,dep_23254,(depth + (1)),state);

var G__23255 = seq__23243_23250;
var G__23256 = chunk__23244_23251;
var G__23257 = count__23245_23252;
var G__23258 = (i__23246_23253 + (1));
seq__23243_23250 = G__23255;
chunk__23244_23251 = G__23256;
count__23245_23252 = G__23257;
i__23246_23253 = G__23258;
continue;
} else {
var temp__4425__auto___23259 = cljs.core.seq.call(null,seq__23243_23250);
if(temp__4425__auto___23259){
var seq__23243_23260__$1 = temp__4425__auto___23259;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23243_23260__$1)){
var c__17629__auto___23261 = cljs.core.chunk_first.call(null,seq__23243_23260__$1);
var G__23262 = cljs.core.chunk_rest.call(null,seq__23243_23260__$1);
var G__23263 = c__17629__auto___23261;
var G__23264 = cljs.core.count.call(null,c__17629__auto___23261);
var G__23265 = (0);
seq__23243_23250 = G__23262;
chunk__23244_23251 = G__23263;
count__23245_23252 = G__23264;
i__23246_23253 = G__23265;
continue;
} else {
var dep_23266 = cljs.core.first.call(null,seq__23243_23260__$1);
topo_sort_helper_STAR_.call(null,dep_23266,(depth + (1)),state);

var G__23267 = cljs.core.next.call(null,seq__23243_23260__$1);
var G__23268 = null;
var G__23269 = (0);
var G__23270 = (0);
seq__23243_23250 = G__23267;
chunk__23244_23251 = G__23268;
count__23245_23252 = G__23269;
i__23246_23253 = G__23270;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__23247){
var vec__23249 = p__23247;
var x = cljs.core.nth.call(null,vec__23249,(0),null);
var xs = cljs.core.nthnext.call(null,vec__23249,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__23249,x,xs,get_deps__$1){
return (function (p1__23205_SHARP_){
return clojure.set.difference.call(null,p1__23205_SHARP_,x);
});})(vec__23249,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__23283 = cljs.core.seq.call(null,provides);
var chunk__23284 = null;
var count__23285 = (0);
var i__23286 = (0);
while(true){
if((i__23286 < count__23285)){
var prov = cljs.core._nth.call(null,chunk__23284,i__23286);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23287_23295 = cljs.core.seq.call(null,requires);
var chunk__23288_23296 = null;
var count__23289_23297 = (0);
var i__23290_23298 = (0);
while(true){
if((i__23290_23298 < count__23289_23297)){
var req_23299 = cljs.core._nth.call(null,chunk__23288_23296,i__23290_23298);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23299,prov);

var G__23300 = seq__23287_23295;
var G__23301 = chunk__23288_23296;
var G__23302 = count__23289_23297;
var G__23303 = (i__23290_23298 + (1));
seq__23287_23295 = G__23300;
chunk__23288_23296 = G__23301;
count__23289_23297 = G__23302;
i__23290_23298 = G__23303;
continue;
} else {
var temp__4425__auto___23304 = cljs.core.seq.call(null,seq__23287_23295);
if(temp__4425__auto___23304){
var seq__23287_23305__$1 = temp__4425__auto___23304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23287_23305__$1)){
var c__17629__auto___23306 = cljs.core.chunk_first.call(null,seq__23287_23305__$1);
var G__23307 = cljs.core.chunk_rest.call(null,seq__23287_23305__$1);
var G__23308 = c__17629__auto___23306;
var G__23309 = cljs.core.count.call(null,c__17629__auto___23306);
var G__23310 = (0);
seq__23287_23295 = G__23307;
chunk__23288_23296 = G__23308;
count__23289_23297 = G__23309;
i__23290_23298 = G__23310;
continue;
} else {
var req_23311 = cljs.core.first.call(null,seq__23287_23305__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23311,prov);

var G__23312 = cljs.core.next.call(null,seq__23287_23305__$1);
var G__23313 = null;
var G__23314 = (0);
var G__23315 = (0);
seq__23287_23295 = G__23312;
chunk__23288_23296 = G__23313;
count__23289_23297 = G__23314;
i__23290_23298 = G__23315;
continue;
}
} else {
}
}
break;
}

var G__23316 = seq__23283;
var G__23317 = chunk__23284;
var G__23318 = count__23285;
var G__23319 = (i__23286 + (1));
seq__23283 = G__23316;
chunk__23284 = G__23317;
count__23285 = G__23318;
i__23286 = G__23319;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__23283);
if(temp__4425__auto__){
var seq__23283__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23283__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__23283__$1);
var G__23320 = cljs.core.chunk_rest.call(null,seq__23283__$1);
var G__23321 = c__17629__auto__;
var G__23322 = cljs.core.count.call(null,c__17629__auto__);
var G__23323 = (0);
seq__23283 = G__23320;
chunk__23284 = G__23321;
count__23285 = G__23322;
i__23286 = G__23323;
continue;
} else {
var prov = cljs.core.first.call(null,seq__23283__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__23291_23324 = cljs.core.seq.call(null,requires);
var chunk__23292_23325 = null;
var count__23293_23326 = (0);
var i__23294_23327 = (0);
while(true){
if((i__23294_23327 < count__23293_23326)){
var req_23328 = cljs.core._nth.call(null,chunk__23292_23325,i__23294_23327);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23328,prov);

var G__23329 = seq__23291_23324;
var G__23330 = chunk__23292_23325;
var G__23331 = count__23293_23326;
var G__23332 = (i__23294_23327 + (1));
seq__23291_23324 = G__23329;
chunk__23292_23325 = G__23330;
count__23293_23326 = G__23331;
i__23294_23327 = G__23332;
continue;
} else {
var temp__4425__auto___23333__$1 = cljs.core.seq.call(null,seq__23291_23324);
if(temp__4425__auto___23333__$1){
var seq__23291_23334__$1 = temp__4425__auto___23333__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23291_23334__$1)){
var c__17629__auto___23335 = cljs.core.chunk_first.call(null,seq__23291_23334__$1);
var G__23336 = cljs.core.chunk_rest.call(null,seq__23291_23334__$1);
var G__23337 = c__17629__auto___23335;
var G__23338 = cljs.core.count.call(null,c__17629__auto___23335);
var G__23339 = (0);
seq__23291_23324 = G__23336;
chunk__23292_23325 = G__23337;
count__23293_23326 = G__23338;
i__23294_23327 = G__23339;
continue;
} else {
var req_23340 = cljs.core.first.call(null,seq__23291_23334__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_23340,prov);

var G__23341 = cljs.core.next.call(null,seq__23291_23334__$1);
var G__23342 = null;
var G__23343 = (0);
var G__23344 = (0);
seq__23291_23324 = G__23341;
chunk__23292_23325 = G__23342;
count__23293_23326 = G__23343;
i__23294_23327 = G__23344;
continue;
}
} else {
}
}
break;
}

var G__23345 = cljs.core.next.call(null,seq__23283__$1);
var G__23346 = null;
var G__23347 = (0);
var G__23348 = (0);
seq__23283 = G__23345;
chunk__23284 = G__23346;
count__23285 = G__23347;
i__23286 = G__23348;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__23353_23357 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__23354_23358 = null;
var count__23355_23359 = (0);
var i__23356_23360 = (0);
while(true){
if((i__23356_23360 < count__23355_23359)){
var ns_23361 = cljs.core._nth.call(null,chunk__23354_23358,i__23356_23360);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23361);

var G__23362 = seq__23353_23357;
var G__23363 = chunk__23354_23358;
var G__23364 = count__23355_23359;
var G__23365 = (i__23356_23360 + (1));
seq__23353_23357 = G__23362;
chunk__23354_23358 = G__23363;
count__23355_23359 = G__23364;
i__23356_23360 = G__23365;
continue;
} else {
var temp__4425__auto___23366 = cljs.core.seq.call(null,seq__23353_23357);
if(temp__4425__auto___23366){
var seq__23353_23367__$1 = temp__4425__auto___23366;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23353_23367__$1)){
var c__17629__auto___23368 = cljs.core.chunk_first.call(null,seq__23353_23367__$1);
var G__23369 = cljs.core.chunk_rest.call(null,seq__23353_23367__$1);
var G__23370 = c__17629__auto___23368;
var G__23371 = cljs.core.count.call(null,c__17629__auto___23368);
var G__23372 = (0);
seq__23353_23357 = G__23369;
chunk__23354_23358 = G__23370;
count__23355_23359 = G__23371;
i__23356_23360 = G__23372;
continue;
} else {
var ns_23373 = cljs.core.first.call(null,seq__23353_23367__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_23373);

var G__23374 = cljs.core.next.call(null,seq__23353_23367__$1);
var G__23375 = null;
var G__23376 = (0);
var G__23377 = (0);
seq__23353_23357 = G__23374;
chunk__23354_23358 = G__23375;
count__23355_23359 = G__23376;
i__23356_23360 = G__23377;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__23378__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__23378 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__23379__i = 0, G__23379__a = new Array(arguments.length -  0);
while (G__23379__i < G__23379__a.length) {G__23379__a[G__23379__i] = arguments[G__23379__i + 0]; ++G__23379__i;}
  args = new cljs.core.IndexedSeq(G__23379__a,0);
} 
return G__23378__delegate.call(this,args);};
G__23378.cljs$lang$maxFixedArity = 0;
G__23378.cljs$lang$applyTo = (function (arglist__23380){
var args = cljs.core.seq(arglist__23380);
return G__23378__delegate(args);
});
G__23378.cljs$core$IFn$_invoke$arity$variadic = G__23378__delegate;
return G__23378;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__23382 = cljs.core._EQ_;
var expr__23383 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__23382.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__23383))){
var path_parts = ((function (pred__23382,expr__23383){
return (function (p1__23381_SHARP_){
return clojure.string.split.call(null,p1__23381_SHARP_,/[\/\\]/);
});})(pred__23382,expr__23383))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__23382,expr__23383){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e23385){if((e23385 instanceof Error)){
var e = e23385;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e23385;

}
}})());
});
;})(path_parts,sep,root,pred__23382,expr__23383))
} else {
if(cljs.core.truth_(pred__23382.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__23383))){
return ((function (pred__23382,expr__23383){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__23382,expr__23383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__23382,expr__23383))
);

return deferred.addErrback(((function (deferred,pred__23382,expr__23383){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__23382,expr__23383))
);
});
;})(pred__23382,expr__23383))
} else {
return ((function (pred__23382,expr__23383){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__23382,expr__23383))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__23386,callback){
var map__23389 = p__23386;
var map__23389__$1 = ((((!((map__23389 == null)))?((((map__23389.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23389.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23389):map__23389);
var file_msg = map__23389__$1;
var request_url = cljs.core.get.call(null,map__23389__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__23389,map__23389__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__23389,map__23389__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__){
return (function (state_23413){
var state_val_23414 = (state_23413[(1)]);
if((state_val_23414 === (7))){
var inst_23409 = (state_23413[(2)]);
var state_23413__$1 = state_23413;
var statearr_23415_23435 = state_23413__$1;
(statearr_23415_23435[(2)] = inst_23409);

(statearr_23415_23435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (1))){
var state_23413__$1 = state_23413;
var statearr_23416_23436 = state_23413__$1;
(statearr_23416_23436[(2)] = null);

(statearr_23416_23436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (4))){
var inst_23393 = (state_23413[(7)]);
var inst_23393__$1 = (state_23413[(2)]);
var state_23413__$1 = (function (){var statearr_23417 = state_23413;
(statearr_23417[(7)] = inst_23393__$1);

return statearr_23417;
})();
if(cljs.core.truth_(inst_23393__$1)){
var statearr_23418_23437 = state_23413__$1;
(statearr_23418_23437[(1)] = (5));

} else {
var statearr_23419_23438 = state_23413__$1;
(statearr_23419_23438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (6))){
var state_23413__$1 = state_23413;
var statearr_23420_23439 = state_23413__$1;
(statearr_23420_23439[(2)] = null);

(statearr_23420_23439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (3))){
var inst_23411 = (state_23413[(2)]);
var state_23413__$1 = state_23413;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23413__$1,inst_23411);
} else {
if((state_val_23414 === (2))){
var state_23413__$1 = state_23413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23413__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_23414 === (11))){
var inst_23405 = (state_23413[(2)]);
var state_23413__$1 = (function (){var statearr_23421 = state_23413;
(statearr_23421[(8)] = inst_23405);

return statearr_23421;
})();
var statearr_23422_23440 = state_23413__$1;
(statearr_23422_23440[(2)] = null);

(statearr_23422_23440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (9))){
var inst_23397 = (state_23413[(9)]);
var inst_23399 = (state_23413[(10)]);
var inst_23401 = inst_23399.call(null,inst_23397);
var state_23413__$1 = state_23413;
var statearr_23423_23441 = state_23413__$1;
(statearr_23423_23441[(2)] = inst_23401);

(statearr_23423_23441[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (5))){
var inst_23393 = (state_23413[(7)]);
var inst_23395 = figwheel.client.file_reloading.blocking_load.call(null,inst_23393);
var state_23413__$1 = state_23413;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23413__$1,(8),inst_23395);
} else {
if((state_val_23414 === (10))){
var inst_23397 = (state_23413[(9)]);
var inst_23403 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_23397);
var state_23413__$1 = state_23413;
var statearr_23424_23442 = state_23413__$1;
(statearr_23424_23442[(2)] = inst_23403);

(statearr_23424_23442[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23414 === (8))){
var inst_23393 = (state_23413[(7)]);
var inst_23399 = (state_23413[(10)]);
var inst_23397 = (state_23413[(2)]);
var inst_23398 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_23399__$1 = cljs.core.get.call(null,inst_23398,inst_23393);
var state_23413__$1 = (function (){var statearr_23425 = state_23413;
(statearr_23425[(9)] = inst_23397);

(statearr_23425[(10)] = inst_23399__$1);

return statearr_23425;
})();
if(cljs.core.truth_(inst_23399__$1)){
var statearr_23426_23443 = state_23413__$1;
(statearr_23426_23443[(1)] = (9));

} else {
var statearr_23427_23444 = state_23413__$1;
(statearr_23427_23444[(1)] = (10));

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
});})(c__20241__auto__))
;
return ((function (switch__20129__auto__,c__20241__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20130__auto__ = null;
var figwheel$client$file_reloading$state_machine__20130__auto____0 = (function (){
var statearr_23431 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23431[(0)] = figwheel$client$file_reloading$state_machine__20130__auto__);

(statearr_23431[(1)] = (1));

return statearr_23431;
});
var figwheel$client$file_reloading$state_machine__20130__auto____1 = (function (state_23413){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_23413);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e23432){if((e23432 instanceof Object)){
var ex__20133__auto__ = e23432;
var statearr_23433_23445 = state_23413;
(statearr_23433_23445[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23446 = state_23413;
state_23413 = G__23446;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20130__auto__ = function(state_23413){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20130__auto____1.call(this,state_23413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20130__auto____0;
figwheel$client$file_reloading$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20130__auto____1;
return figwheel$client$file_reloading$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__))
})();
var state__20243__auto__ = (function (){var statearr_23434 = f__20242__auto__.call(null);
(statearr_23434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__))
);

return c__20241__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__23447,callback){
var map__23450 = p__23447;
var map__23450__$1 = ((((!((map__23450 == null)))?((((map__23450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23450):map__23450);
var file_msg = map__23450__$1;
var namespace = cljs.core.get.call(null,map__23450__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__23450,map__23450__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__23450,map__23450__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__23452){
var map__23455 = p__23452;
var map__23455__$1 = ((((!((map__23455 == null)))?((((map__23455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23455):map__23455);
var file_msg = map__23455__$1;
var namespace = cljs.core.get.call(null,map__23455__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__23457,callback){
var map__23460 = p__23457;
var map__23460__$1 = ((((!((map__23460 == null)))?((((map__23460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23460):map__23460);
var file_msg = map__23460__$1;
var request_url = cljs.core.get.call(null,map__23460__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__23460__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__20241__auto___23548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___23548,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___23548,out){
return (function (state_23530){
var state_val_23531 = (state_23530[(1)]);
if((state_val_23531 === (1))){
var inst_23508 = cljs.core.nth.call(null,files,(0),null);
var inst_23509 = cljs.core.nthnext.call(null,files,(1));
var inst_23510 = files;
var state_23530__$1 = (function (){var statearr_23532 = state_23530;
(statearr_23532[(7)] = inst_23509);

(statearr_23532[(8)] = inst_23510);

(statearr_23532[(9)] = inst_23508);

return statearr_23532;
})();
var statearr_23533_23549 = state_23530__$1;
(statearr_23533_23549[(2)] = null);

(statearr_23533_23549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23531 === (2))){
var inst_23510 = (state_23530[(8)]);
var inst_23513 = (state_23530[(10)]);
var inst_23513__$1 = cljs.core.nth.call(null,inst_23510,(0),null);
var inst_23514 = cljs.core.nthnext.call(null,inst_23510,(1));
var inst_23515 = (inst_23513__$1 == null);
var inst_23516 = cljs.core.not.call(null,inst_23515);
var state_23530__$1 = (function (){var statearr_23534 = state_23530;
(statearr_23534[(11)] = inst_23514);

(statearr_23534[(10)] = inst_23513__$1);

return statearr_23534;
})();
if(inst_23516){
var statearr_23535_23550 = state_23530__$1;
(statearr_23535_23550[(1)] = (4));

} else {
var statearr_23536_23551 = state_23530__$1;
(statearr_23536_23551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23531 === (3))){
var inst_23528 = (state_23530[(2)]);
var state_23530__$1 = state_23530;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23530__$1,inst_23528);
} else {
if((state_val_23531 === (4))){
var inst_23513 = (state_23530[(10)]);
var inst_23518 = figwheel.client.file_reloading.reload_js_file.call(null,inst_23513);
var state_23530__$1 = state_23530;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23530__$1,(7),inst_23518);
} else {
if((state_val_23531 === (5))){
var inst_23524 = cljs.core.async.close_BANG_.call(null,out);
var state_23530__$1 = state_23530;
var statearr_23537_23552 = state_23530__$1;
(statearr_23537_23552[(2)] = inst_23524);

(statearr_23537_23552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23531 === (6))){
var inst_23526 = (state_23530[(2)]);
var state_23530__$1 = state_23530;
var statearr_23538_23553 = state_23530__$1;
(statearr_23538_23553[(2)] = inst_23526);

(statearr_23538_23553[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23531 === (7))){
var inst_23514 = (state_23530[(11)]);
var inst_23520 = (state_23530[(2)]);
var inst_23521 = cljs.core.async.put_BANG_.call(null,out,inst_23520);
var inst_23510 = inst_23514;
var state_23530__$1 = (function (){var statearr_23539 = state_23530;
(statearr_23539[(8)] = inst_23510);

(statearr_23539[(12)] = inst_23521);

return statearr_23539;
})();
var statearr_23540_23554 = state_23530__$1;
(statearr_23540_23554[(2)] = null);

(statearr_23540_23554[(1)] = (2));


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
});})(c__20241__auto___23548,out))
;
return ((function (switch__20129__auto__,c__20241__auto___23548,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____0 = (function (){
var statearr_23544 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23544[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__);

(statearr_23544[(1)] = (1));

return statearr_23544;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____1 = (function (state_23530){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_23530);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e23545){if((e23545 instanceof Object)){
var ex__20133__auto__ = e23545;
var statearr_23546_23555 = state_23530;
(statearr_23546_23555[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23530);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23556 = state_23530;
state_23530 = G__23556;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__ = function(state_23530){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____1.call(this,state_23530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___23548,out))
})();
var state__20243__auto__ = (function (){var statearr_23547 = f__20242__auto__.call(null);
(statearr_23547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___23548);

return statearr_23547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___23548,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__23557,opts){
var map__23561 = p__23557;
var map__23561__$1 = ((((!((map__23561 == null)))?((((map__23561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23561):map__23561);
var eval_body__$1 = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__23561__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e23563){var e = e23563;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__23564_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23564_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__23569){
var vec__23570 = p__23569;
var k = cljs.core.nth.call(null,vec__23570,(0),null);
var v = cljs.core.nth.call(null,vec__23570,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__23571){
var vec__23572 = p__23571;
var k = cljs.core.nth.call(null,vec__23572,(0),null);
var v = cljs.core.nth.call(null,vec__23572,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__23576,p__23577){
var map__23824 = p__23576;
var map__23824__$1 = ((((!((map__23824 == null)))?((((map__23824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
var opts = map__23824__$1;
var before_jsload = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__23825 = p__23577;
var map__23825__$1 = ((((!((map__23825 == null)))?((((map__23825.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23825.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23825):map__23825);
var msg = map__23825__$1;
var files = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__23825__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_23978){
var state_val_23979 = (state_23978[(1)]);
if((state_val_23979 === (7))){
var inst_23839 = (state_23978[(7)]);
var inst_23840 = (state_23978[(8)]);
var inst_23841 = (state_23978[(9)]);
var inst_23842 = (state_23978[(10)]);
var inst_23847 = cljs.core._nth.call(null,inst_23840,inst_23842);
var inst_23848 = figwheel.client.file_reloading.eval_body.call(null,inst_23847,opts);
var inst_23849 = (inst_23842 + (1));
var tmp23980 = inst_23839;
var tmp23981 = inst_23840;
var tmp23982 = inst_23841;
var inst_23839__$1 = tmp23980;
var inst_23840__$1 = tmp23981;
var inst_23841__$1 = tmp23982;
var inst_23842__$1 = inst_23849;
var state_23978__$1 = (function (){var statearr_23983 = state_23978;
(statearr_23983[(7)] = inst_23839__$1);

(statearr_23983[(8)] = inst_23840__$1);

(statearr_23983[(9)] = inst_23841__$1);

(statearr_23983[(11)] = inst_23848);

(statearr_23983[(10)] = inst_23842__$1);

return statearr_23983;
})();
var statearr_23984_24070 = state_23978__$1;
(statearr_23984_24070[(2)] = null);

(statearr_23984_24070[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (20))){
var inst_23882 = (state_23978[(12)]);
var inst_23890 = figwheel.client.file_reloading.sort_files.call(null,inst_23882);
var state_23978__$1 = state_23978;
var statearr_23985_24071 = state_23978__$1;
(statearr_23985_24071[(2)] = inst_23890);

(statearr_23985_24071[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (27))){
var state_23978__$1 = state_23978;
var statearr_23986_24072 = state_23978__$1;
(statearr_23986_24072[(2)] = null);

(statearr_23986_24072[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (1))){
var inst_23831 = (state_23978[(13)]);
var inst_23828 = before_jsload.call(null,files);
var inst_23829 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_23830 = (function (){return ((function (inst_23831,inst_23828,inst_23829,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23573_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23573_SHARP_);
});
;})(inst_23831,inst_23828,inst_23829,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23831__$1 = cljs.core.filter.call(null,inst_23830,files);
var inst_23832 = cljs.core.not_empty.call(null,inst_23831__$1);
var state_23978__$1 = (function (){var statearr_23987 = state_23978;
(statearr_23987[(14)] = inst_23829);

(statearr_23987[(15)] = inst_23828);

(statearr_23987[(13)] = inst_23831__$1);

return statearr_23987;
})();
if(cljs.core.truth_(inst_23832)){
var statearr_23988_24073 = state_23978__$1;
(statearr_23988_24073[(1)] = (2));

} else {
var statearr_23989_24074 = state_23978__$1;
(statearr_23989_24074[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (24))){
var state_23978__$1 = state_23978;
var statearr_23990_24075 = state_23978__$1;
(statearr_23990_24075[(2)] = null);

(statearr_23990_24075[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (39))){
var inst_23932 = (state_23978[(16)]);
var state_23978__$1 = state_23978;
var statearr_23991_24076 = state_23978__$1;
(statearr_23991_24076[(2)] = inst_23932);

(statearr_23991_24076[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (46))){
var inst_23973 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_23992_24077 = state_23978__$1;
(statearr_23992_24077[(2)] = inst_23973);

(statearr_23992_24077[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (4))){
var inst_23876 = (state_23978[(2)]);
var inst_23877 = cljs.core.List.EMPTY;
var inst_23878 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_23877);
var inst_23879 = (function (){return ((function (inst_23876,inst_23877,inst_23878,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23574_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__23574_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__23574_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_23876,inst_23877,inst_23878,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23880 = cljs.core.filter.call(null,inst_23879,files);
var inst_23881 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_23882 = cljs.core.concat.call(null,inst_23880,inst_23881);
var state_23978__$1 = (function (){var statearr_23993 = state_23978;
(statearr_23993[(17)] = inst_23878);

(statearr_23993[(18)] = inst_23876);

(statearr_23993[(12)] = inst_23882);

return statearr_23993;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_23994_24078 = state_23978__$1;
(statearr_23994_24078[(1)] = (16));

} else {
var statearr_23995_24079 = state_23978__$1;
(statearr_23995_24079[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (15))){
var inst_23866 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_23996_24080 = state_23978__$1;
(statearr_23996_24080[(2)] = inst_23866);

(statearr_23996_24080[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (21))){
var inst_23892 = (state_23978[(19)]);
var inst_23892__$1 = (state_23978[(2)]);
var inst_23893 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_23892__$1);
var state_23978__$1 = (function (){var statearr_23997 = state_23978;
(statearr_23997[(19)] = inst_23892__$1);

return statearr_23997;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23978__$1,(22),inst_23893);
} else {
if((state_val_23979 === (31))){
var inst_23976 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23978__$1,inst_23976);
} else {
if((state_val_23979 === (32))){
var inst_23932 = (state_23978[(16)]);
var inst_23937 = inst_23932.cljs$lang$protocol_mask$partition0$;
var inst_23938 = (inst_23937 & (64));
var inst_23939 = inst_23932.cljs$core$ISeq$;
var inst_23940 = (inst_23938) || (inst_23939);
var state_23978__$1 = state_23978;
if(cljs.core.truth_(inst_23940)){
var statearr_23998_24081 = state_23978__$1;
(statearr_23998_24081[(1)] = (35));

} else {
var statearr_23999_24082 = state_23978__$1;
(statearr_23999_24082[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (40))){
var inst_23953 = (state_23978[(20)]);
var inst_23952 = (state_23978[(2)]);
var inst_23953__$1 = cljs.core.get.call(null,inst_23952,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_23954 = cljs.core.get.call(null,inst_23952,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_23955 = cljs.core.not_empty.call(null,inst_23953__$1);
var state_23978__$1 = (function (){var statearr_24000 = state_23978;
(statearr_24000[(21)] = inst_23954);

(statearr_24000[(20)] = inst_23953__$1);

return statearr_24000;
})();
if(cljs.core.truth_(inst_23955)){
var statearr_24001_24083 = state_23978__$1;
(statearr_24001_24083[(1)] = (41));

} else {
var statearr_24002_24084 = state_23978__$1;
(statearr_24002_24084[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (33))){
var state_23978__$1 = state_23978;
var statearr_24003_24085 = state_23978__$1;
(statearr_24003_24085[(2)] = false);

(statearr_24003_24085[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (13))){
var inst_23852 = (state_23978[(22)]);
var inst_23856 = cljs.core.chunk_first.call(null,inst_23852);
var inst_23857 = cljs.core.chunk_rest.call(null,inst_23852);
var inst_23858 = cljs.core.count.call(null,inst_23856);
var inst_23839 = inst_23857;
var inst_23840 = inst_23856;
var inst_23841 = inst_23858;
var inst_23842 = (0);
var state_23978__$1 = (function (){var statearr_24004 = state_23978;
(statearr_24004[(7)] = inst_23839);

(statearr_24004[(8)] = inst_23840);

(statearr_24004[(9)] = inst_23841);

(statearr_24004[(10)] = inst_23842);

return statearr_24004;
})();
var statearr_24005_24086 = state_23978__$1;
(statearr_24005_24086[(2)] = null);

(statearr_24005_24086[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (22))){
var inst_23896 = (state_23978[(23)]);
var inst_23900 = (state_23978[(24)]);
var inst_23892 = (state_23978[(19)]);
var inst_23895 = (state_23978[(25)]);
var inst_23895__$1 = (state_23978[(2)]);
var inst_23896__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23895__$1);
var inst_23897 = (function (){var all_files = inst_23892;
var res_SINGLEQUOTE_ = inst_23895__$1;
var res = inst_23896__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_23896,inst_23900,inst_23892,inst_23895,inst_23895__$1,inst_23896__$1,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__23575_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__23575_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_23896,inst_23900,inst_23892,inst_23895,inst_23895__$1,inst_23896__$1,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23898 = cljs.core.filter.call(null,inst_23897,inst_23895__$1);
var inst_23899 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_23900__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_23899);
var inst_23901 = cljs.core.not_empty.call(null,inst_23900__$1);
var state_23978__$1 = (function (){var statearr_24006 = state_23978;
(statearr_24006[(26)] = inst_23898);

(statearr_24006[(23)] = inst_23896__$1);

(statearr_24006[(24)] = inst_23900__$1);

(statearr_24006[(25)] = inst_23895__$1);

return statearr_24006;
})();
if(cljs.core.truth_(inst_23901)){
var statearr_24007_24087 = state_23978__$1;
(statearr_24007_24087[(1)] = (23));

} else {
var statearr_24008_24088 = state_23978__$1;
(statearr_24008_24088[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (36))){
var state_23978__$1 = state_23978;
var statearr_24009_24089 = state_23978__$1;
(statearr_24009_24089[(2)] = false);

(statearr_24009_24089[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (41))){
var inst_23953 = (state_23978[(20)]);
var inst_23957 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_23958 = cljs.core.map.call(null,inst_23957,inst_23953);
var inst_23959 = cljs.core.pr_str.call(null,inst_23958);
var inst_23960 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_23959)].join('');
var inst_23961 = figwheel.client.utils.log.call(null,inst_23960);
var state_23978__$1 = state_23978;
var statearr_24010_24090 = state_23978__$1;
(statearr_24010_24090[(2)] = inst_23961);

(statearr_24010_24090[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (43))){
var inst_23954 = (state_23978[(21)]);
var inst_23964 = (state_23978[(2)]);
var inst_23965 = cljs.core.not_empty.call(null,inst_23954);
var state_23978__$1 = (function (){var statearr_24011 = state_23978;
(statearr_24011[(27)] = inst_23964);

return statearr_24011;
})();
if(cljs.core.truth_(inst_23965)){
var statearr_24012_24091 = state_23978__$1;
(statearr_24012_24091[(1)] = (44));

} else {
var statearr_24013_24092 = state_23978__$1;
(statearr_24013_24092[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (29))){
var inst_23898 = (state_23978[(26)]);
var inst_23896 = (state_23978[(23)]);
var inst_23932 = (state_23978[(16)]);
var inst_23900 = (state_23978[(24)]);
var inst_23892 = (state_23978[(19)]);
var inst_23895 = (state_23978[(25)]);
var inst_23928 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_23931 = (function (){var all_files = inst_23892;
var res_SINGLEQUOTE_ = inst_23895;
var res = inst_23896;
var files_not_loaded = inst_23898;
var dependencies_that_loaded = inst_23900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23932,inst_23900,inst_23892,inst_23895,inst_23928,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23930){
var map__24014 = p__23930;
var map__24014__$1 = ((((!((map__24014 == null)))?((((map__24014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24014):map__24014);
var namespace = cljs.core.get.call(null,map__24014__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23932,inst_23900,inst_23892,inst_23895,inst_23928,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23932__$1 = cljs.core.group_by.call(null,inst_23931,inst_23898);
var inst_23934 = (inst_23932__$1 == null);
var inst_23935 = cljs.core.not.call(null,inst_23934);
var state_23978__$1 = (function (){var statearr_24016 = state_23978;
(statearr_24016[(16)] = inst_23932__$1);

(statearr_24016[(28)] = inst_23928);

return statearr_24016;
})();
if(inst_23935){
var statearr_24017_24093 = state_23978__$1;
(statearr_24017_24093[(1)] = (32));

} else {
var statearr_24018_24094 = state_23978__$1;
(statearr_24018_24094[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (44))){
var inst_23954 = (state_23978[(21)]);
var inst_23967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_23954);
var inst_23968 = cljs.core.pr_str.call(null,inst_23967);
var inst_23969 = [cljs.core.str("not required: "),cljs.core.str(inst_23968)].join('');
var inst_23970 = figwheel.client.utils.log.call(null,inst_23969);
var state_23978__$1 = state_23978;
var statearr_24019_24095 = state_23978__$1;
(statearr_24019_24095[(2)] = inst_23970);

(statearr_24019_24095[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (6))){
var inst_23873 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_24020_24096 = state_23978__$1;
(statearr_24020_24096[(2)] = inst_23873);

(statearr_24020_24096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (28))){
var inst_23898 = (state_23978[(26)]);
var inst_23925 = (state_23978[(2)]);
var inst_23926 = cljs.core.not_empty.call(null,inst_23898);
var state_23978__$1 = (function (){var statearr_24021 = state_23978;
(statearr_24021[(29)] = inst_23925);

return statearr_24021;
})();
if(cljs.core.truth_(inst_23926)){
var statearr_24022_24097 = state_23978__$1;
(statearr_24022_24097[(1)] = (29));

} else {
var statearr_24023_24098 = state_23978__$1;
(statearr_24023_24098[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (25))){
var inst_23896 = (state_23978[(23)]);
var inst_23912 = (state_23978[(2)]);
var inst_23913 = cljs.core.not_empty.call(null,inst_23896);
var state_23978__$1 = (function (){var statearr_24024 = state_23978;
(statearr_24024[(30)] = inst_23912);

return statearr_24024;
})();
if(cljs.core.truth_(inst_23913)){
var statearr_24025_24099 = state_23978__$1;
(statearr_24025_24099[(1)] = (26));

} else {
var statearr_24026_24100 = state_23978__$1;
(statearr_24026_24100[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (34))){
var inst_23947 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
if(cljs.core.truth_(inst_23947)){
var statearr_24027_24101 = state_23978__$1;
(statearr_24027_24101[(1)] = (38));

} else {
var statearr_24028_24102 = state_23978__$1;
(statearr_24028_24102[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (17))){
var state_23978__$1 = state_23978;
var statearr_24029_24103 = state_23978__$1;
(statearr_24029_24103[(2)] = recompile_dependents);

(statearr_24029_24103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (3))){
var state_23978__$1 = state_23978;
var statearr_24030_24104 = state_23978__$1;
(statearr_24030_24104[(2)] = null);

(statearr_24030_24104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (12))){
var inst_23869 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_24031_24105 = state_23978__$1;
(statearr_24031_24105[(2)] = inst_23869);

(statearr_24031_24105[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (2))){
var inst_23831 = (state_23978[(13)]);
var inst_23838 = cljs.core.seq.call(null,inst_23831);
var inst_23839 = inst_23838;
var inst_23840 = null;
var inst_23841 = (0);
var inst_23842 = (0);
var state_23978__$1 = (function (){var statearr_24032 = state_23978;
(statearr_24032[(7)] = inst_23839);

(statearr_24032[(8)] = inst_23840);

(statearr_24032[(9)] = inst_23841);

(statearr_24032[(10)] = inst_23842);

return statearr_24032;
})();
var statearr_24033_24106 = state_23978__$1;
(statearr_24033_24106[(2)] = null);

(statearr_24033_24106[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (23))){
var inst_23898 = (state_23978[(26)]);
var inst_23896 = (state_23978[(23)]);
var inst_23900 = (state_23978[(24)]);
var inst_23892 = (state_23978[(19)]);
var inst_23895 = (state_23978[(25)]);
var inst_23903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_23905 = (function (){var all_files = inst_23892;
var res_SINGLEQUOTE_ = inst_23895;
var res = inst_23896;
var files_not_loaded = inst_23898;
var dependencies_that_loaded = inst_23900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23903,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23904){
var map__24034 = p__23904;
var map__24034__$1 = ((((!((map__24034 == null)))?((((map__24034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24034):map__24034);
var request_url = cljs.core.get.call(null,map__24034__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23903,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23906 = cljs.core.reverse.call(null,inst_23900);
var inst_23907 = cljs.core.map.call(null,inst_23905,inst_23906);
var inst_23908 = cljs.core.pr_str.call(null,inst_23907);
var inst_23909 = figwheel.client.utils.log.call(null,inst_23908);
var state_23978__$1 = (function (){var statearr_24036 = state_23978;
(statearr_24036[(31)] = inst_23903);

return statearr_24036;
})();
var statearr_24037_24107 = state_23978__$1;
(statearr_24037_24107[(2)] = inst_23909);

(statearr_24037_24107[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (35))){
var state_23978__$1 = state_23978;
var statearr_24038_24108 = state_23978__$1;
(statearr_24038_24108[(2)] = true);

(statearr_24038_24108[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (19))){
var inst_23882 = (state_23978[(12)]);
var inst_23888 = figwheel.client.file_reloading.expand_files.call(null,inst_23882);
var state_23978__$1 = state_23978;
var statearr_24039_24109 = state_23978__$1;
(statearr_24039_24109[(2)] = inst_23888);

(statearr_24039_24109[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (11))){
var state_23978__$1 = state_23978;
var statearr_24040_24110 = state_23978__$1;
(statearr_24040_24110[(2)] = null);

(statearr_24040_24110[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (9))){
var inst_23871 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_24041_24111 = state_23978__$1;
(statearr_24041_24111[(2)] = inst_23871);

(statearr_24041_24111[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (5))){
var inst_23841 = (state_23978[(9)]);
var inst_23842 = (state_23978[(10)]);
var inst_23844 = (inst_23842 < inst_23841);
var inst_23845 = inst_23844;
var state_23978__$1 = state_23978;
if(cljs.core.truth_(inst_23845)){
var statearr_24042_24112 = state_23978__$1;
(statearr_24042_24112[(1)] = (7));

} else {
var statearr_24043_24113 = state_23978__$1;
(statearr_24043_24113[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (14))){
var inst_23852 = (state_23978[(22)]);
var inst_23861 = cljs.core.first.call(null,inst_23852);
var inst_23862 = figwheel.client.file_reloading.eval_body.call(null,inst_23861,opts);
var inst_23863 = cljs.core.next.call(null,inst_23852);
var inst_23839 = inst_23863;
var inst_23840 = null;
var inst_23841 = (0);
var inst_23842 = (0);
var state_23978__$1 = (function (){var statearr_24044 = state_23978;
(statearr_24044[(7)] = inst_23839);

(statearr_24044[(8)] = inst_23840);

(statearr_24044[(32)] = inst_23862);

(statearr_24044[(9)] = inst_23841);

(statearr_24044[(10)] = inst_23842);

return statearr_24044;
})();
var statearr_24045_24114 = state_23978__$1;
(statearr_24045_24114[(2)] = null);

(statearr_24045_24114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (45))){
var state_23978__$1 = state_23978;
var statearr_24046_24115 = state_23978__$1;
(statearr_24046_24115[(2)] = null);

(statearr_24046_24115[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (26))){
var inst_23898 = (state_23978[(26)]);
var inst_23896 = (state_23978[(23)]);
var inst_23900 = (state_23978[(24)]);
var inst_23892 = (state_23978[(19)]);
var inst_23895 = (state_23978[(25)]);
var inst_23915 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_23917 = (function (){var all_files = inst_23892;
var res_SINGLEQUOTE_ = inst_23895;
var res = inst_23896;
var files_not_loaded = inst_23898;
var dependencies_that_loaded = inst_23900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23915,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__23916){
var map__24047 = p__23916;
var map__24047__$1 = ((((!((map__24047 == null)))?((((map__24047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24047):map__24047);
var namespace = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__24047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23915,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23918 = cljs.core.map.call(null,inst_23917,inst_23896);
var inst_23919 = cljs.core.pr_str.call(null,inst_23918);
var inst_23920 = figwheel.client.utils.log.call(null,inst_23919);
var inst_23921 = (function (){var all_files = inst_23892;
var res_SINGLEQUOTE_ = inst_23895;
var res = inst_23896;
var files_not_loaded = inst_23898;
var dependencies_that_loaded = inst_23900;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23915,inst_23917,inst_23918,inst_23919,inst_23920,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_23898,inst_23896,inst_23900,inst_23892,inst_23895,inst_23915,inst_23917,inst_23918,inst_23919,inst_23920,state_val_23979,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_23922 = setTimeout(inst_23921,(10));
var state_23978__$1 = (function (){var statearr_24049 = state_23978;
(statearr_24049[(33)] = inst_23915);

(statearr_24049[(34)] = inst_23920);

return statearr_24049;
})();
var statearr_24050_24116 = state_23978__$1;
(statearr_24050_24116[(2)] = inst_23922);

(statearr_24050_24116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (16))){
var state_23978__$1 = state_23978;
var statearr_24051_24117 = state_23978__$1;
(statearr_24051_24117[(2)] = reload_dependents);

(statearr_24051_24117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (38))){
var inst_23932 = (state_23978[(16)]);
var inst_23949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23932);
var state_23978__$1 = state_23978;
var statearr_24052_24118 = state_23978__$1;
(statearr_24052_24118[(2)] = inst_23949);

(statearr_24052_24118[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (30))){
var state_23978__$1 = state_23978;
var statearr_24053_24119 = state_23978__$1;
(statearr_24053_24119[(2)] = null);

(statearr_24053_24119[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (10))){
var inst_23852 = (state_23978[(22)]);
var inst_23854 = cljs.core.chunked_seq_QMARK_.call(null,inst_23852);
var state_23978__$1 = state_23978;
if(inst_23854){
var statearr_24054_24120 = state_23978__$1;
(statearr_24054_24120[(1)] = (13));

} else {
var statearr_24055_24121 = state_23978__$1;
(statearr_24055_24121[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (18))){
var inst_23886 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
if(cljs.core.truth_(inst_23886)){
var statearr_24056_24122 = state_23978__$1;
(statearr_24056_24122[(1)] = (19));

} else {
var statearr_24057_24123 = state_23978__$1;
(statearr_24057_24123[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (42))){
var state_23978__$1 = state_23978;
var statearr_24058_24124 = state_23978__$1;
(statearr_24058_24124[(2)] = null);

(statearr_24058_24124[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (37))){
var inst_23944 = (state_23978[(2)]);
var state_23978__$1 = state_23978;
var statearr_24059_24125 = state_23978__$1;
(statearr_24059_24125[(2)] = inst_23944);

(statearr_24059_24125[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23979 === (8))){
var inst_23839 = (state_23978[(7)]);
var inst_23852 = (state_23978[(22)]);
var inst_23852__$1 = cljs.core.seq.call(null,inst_23839);
var state_23978__$1 = (function (){var statearr_24060 = state_23978;
(statearr_24060[(22)] = inst_23852__$1);

return statearr_24060;
})();
if(inst_23852__$1){
var statearr_24061_24126 = state_23978__$1;
(statearr_24061_24126[(1)] = (10));

} else {
var statearr_24062_24127 = state_23978__$1;
(statearr_24062_24127[(1)] = (11));

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
});})(c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20129__auto__,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____0 = (function (){
var statearr_24066 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24066[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__);

(statearr_24066[(1)] = (1));

return statearr_24066;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____1 = (function (state_23978){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_23978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e24067){if((e24067 instanceof Object)){
var ex__20133__auto__ = e24067;
var statearr_24068_24128 = state_23978;
(statearr_24068_24128[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24129 = state_23978;
state_23978 = G__24129;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__ = function(state_23978){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____1.call(this,state_23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__20243__auto__ = (function (){var statearr_24069 = f__20242__auto__.call(null);
(statearr_24069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_24069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__,map__23824,map__23824__$1,opts,before_jsload,on_jsload,reload_dependents,map__23825,map__23825__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__20241__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__24132,link){
var map__24135 = p__24132;
var map__24135__$1 = ((((!((map__24135 == null)))?((((map__24135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24135):map__24135);
var file = cljs.core.get.call(null,map__24135__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__24135,map__24135__$1,file){
return (function (p1__24130_SHARP_,p2__24131_SHARP_){
if(cljs.core._EQ_.call(null,p1__24130_SHARP_,p2__24131_SHARP_)){
return p1__24130_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__24135,map__24135__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__24141){
var map__24142 = p__24141;
var map__24142__$1 = ((((!((map__24142 == null)))?((((map__24142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24142):map__24142);
var match_length = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__24142__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__24137_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__24137_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args24144 = [];
var len__17884__auto___24147 = arguments.length;
var i__17885__auto___24148 = (0);
while(true){
if((i__17885__auto___24148 < len__17884__auto___24147)){
args24144.push((arguments[i__17885__auto___24148]));

var G__24149 = (i__17885__auto___24148 + (1));
i__17885__auto___24148 = G__24149;
continue;
} else {
}
break;
}

var G__24146 = args24144.length;
switch (G__24146) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24144.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__24151_SHARP_,p2__24152_SHARP_){
return cljs.core.assoc.call(null,p1__24151_SHARP_,cljs.core.get.call(null,p2__24152_SHARP_,key),p2__24152_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__24153){
var map__24156 = p__24153;
var map__24156__$1 = ((((!((map__24156 == null)))?((((map__24156.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24156.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24156):map__24156);
var f_data = map__24156__$1;
var file = cljs.core.get.call(null,map__24156__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__24158,files_msg){
var map__24165 = p__24158;
var map__24165__$1 = ((((!((map__24165 == null)))?((((map__24165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24165):map__24165);
var opts = map__24165__$1;
var on_cssload = cljs.core.get.call(null,map__24165__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__24167_24171 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__24168_24172 = null;
var count__24169_24173 = (0);
var i__24170_24174 = (0);
while(true){
if((i__24170_24174 < count__24169_24173)){
var f_24175 = cljs.core._nth.call(null,chunk__24168_24172,i__24170_24174);
figwheel.client.file_reloading.reload_css_file.call(null,f_24175);

var G__24176 = seq__24167_24171;
var G__24177 = chunk__24168_24172;
var G__24178 = count__24169_24173;
var G__24179 = (i__24170_24174 + (1));
seq__24167_24171 = G__24176;
chunk__24168_24172 = G__24177;
count__24169_24173 = G__24178;
i__24170_24174 = G__24179;
continue;
} else {
var temp__4425__auto___24180 = cljs.core.seq.call(null,seq__24167_24171);
if(temp__4425__auto___24180){
var seq__24167_24181__$1 = temp__4425__auto___24180;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24167_24181__$1)){
var c__17629__auto___24182 = cljs.core.chunk_first.call(null,seq__24167_24181__$1);
var G__24183 = cljs.core.chunk_rest.call(null,seq__24167_24181__$1);
var G__24184 = c__17629__auto___24182;
var G__24185 = cljs.core.count.call(null,c__17629__auto___24182);
var G__24186 = (0);
seq__24167_24171 = G__24183;
chunk__24168_24172 = G__24184;
count__24169_24173 = G__24185;
i__24170_24174 = G__24186;
continue;
} else {
var f_24187 = cljs.core.first.call(null,seq__24167_24181__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_24187);

var G__24188 = cljs.core.next.call(null,seq__24167_24181__$1);
var G__24189 = null;
var G__24190 = (0);
var G__24191 = (0);
seq__24167_24171 = G__24188;
chunk__24168_24172 = G__24189;
count__24169_24173 = G__24190;
i__24170_24174 = G__24191;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__24165,map__24165__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__24165,map__24165__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1448389552967