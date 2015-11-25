// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('figwheel.client.utils');
goog.require('om_basic.core');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__19581__delegate = function (x){
if(cljs.core.truth_(om_basic.core.on_js_reload)){
return cljs.core.apply.call(null,om_basic.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'om_basic.core/on-js-reload' is missing");
}
};
var G__19581 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__19582__i = 0, G__19582__a = new Array(arguments.length -  0);
while (G__19582__i < G__19582__a.length) {G__19582__a[G__19582__i] = arguments[G__19582__i + 0]; ++G__19582__i;}
  x = new cljs.core.IndexedSeq(G__19582__a,0);
} 
return G__19581__delegate.call(this,x);};
G__19581.cljs$lang$maxFixedArity = 0;
G__19581.cljs$lang$applyTo = (function (arglist__19583){
var x = cljs.core.seq(arglist__19583);
return G__19581__delegate(x);
});
G__19581.cljs$core$IFn$_invoke$arity$variadic = G__19581__delegate;
return G__19581;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1448485828383