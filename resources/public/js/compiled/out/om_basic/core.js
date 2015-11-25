// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_basic.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
om_basic.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Gerald",new cljs.core.Keyword(null,"middle","middle",-701029031),"Jay",new cljs.core.Keyword(null,"last","last",1105735132),"Sussman",new cljs.core.Keyword(null,"email","email",1415816706),"metacirc@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439),new cljs.core.Keyword(null,"6946","6946",443412550)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Hal",new cljs.core.Keyword(null,"last","last",1105735132),"Abelson",new cljs.core.Keyword(null,"email","email",1415816706),"evalapply@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439)], null)], null)], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"6001","6001",1924916439),"The Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"6946","6946",443412550),"The Structure and Interpretation of Classical Mechanics",new cljs.core.Keyword(null,"1806","1806",-1667512160),"Linear Algebra"], null)], null));
om_basic.core.middle_name = (function om_basic$core$middle_name(p__19685){
var map__19688 = p__19685;
var map__19688__$1 = ((((!((map__19688 == null)))?((((map__19688.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19688.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19688):map__19688);
var middle = cljs.core.get.call(null,map__19688__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__19688__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
if(cljs.core.truth_(middle)){
return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else {
if(cljs.core.truth_(middle_initial)){
return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else {
return null;
}
}
});
om_basic.core.display_name = (function om_basic$core$display_name(p__19690){
var map__19693 = p__19690;
var map__19693__$1 = ((((!((map__19693 == null)))?((((map__19693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19693):map__19693);
var contact = map__19693__$1;
var first = cljs.core.get.call(null,map__19693__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__19693__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(om_basic.core.middle_name.call(null,contact))].join('');
});
om_basic.core.registry_view = (function om_basic$core$registry_view(data,owner){
if(typeof om_basic.core.t_om_basic$core19698 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19698 = (function (registry_view,data,owner,meta19699){
this.registry_view = registry_view;
this.data = data;
this.owner = owner;
this.meta19699 = meta19699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19700,meta19699__$1){
var self__ = this;
var _19700__$1 = this;
return (new om_basic.core.t_om_basic$core19698(self__.registry_view,self__.data,self__.owner,meta19699__$1));
});

om_basic.core.t_om_basic$core19698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19700){
var self__ = this;
var _19700__$1 = this;
return self__.meta19699;
});

om_basic.core.t_om_basic$core19698.prototype.om$core$IRenderState$ = true;

om_basic.core.t_om_basic$core19698.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Registry"));
});

om_basic.core.t_om_basic$core19698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"registry-view","registry-view",-1679887188,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19699","meta19699",-585450043,null)], null);
});

om_basic.core.t_om_basic$core19698.cljs$lang$type = true;

om_basic.core.t_om_basic$core19698.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19698";

om_basic.core.t_om_basic$core19698.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19698");
});

om_basic.core.__GT_t_om_basic$core19698 = (function om_basic$core$registry_view_$___GT_t_om_basic$core19698(registry_view__$1,data__$1,owner__$1,meta19699){
return (new om_basic.core.t_om_basic$core19698(registry_view__$1,data__$1,owner__$1,meta19699));
});

}

return (new om_basic.core.t_om_basic$core19698(om_basic$core$registry_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_basic.core.registry_view,om_basic.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
om_basic.core.on_js_reload = (function om_basic$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1448485905199