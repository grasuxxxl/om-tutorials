// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_basic.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
(cljs.core.ICloneable["string"] = true);

(cljs.core._clone["string"] = (function (s){
return (new String(s));
}));
String.prototype.cljs$core$ICloneable$ = true;

String.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (s){
var s__$1 = this;
return (new String(s__$1));
});

String.prototype.om$core$IValue$ = true;

String.prototype.om$core$IValue$_value$arity$1 = (function (s){
var s__$1 = this;
return [cljs.core.str(s__$1)].join('');
});
om_basic.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"people","people",1443537404),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Ben",new cljs.core.Keyword(null,"last","last",1105735132),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1415816706),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765),"P",new cljs.core.Keyword(null,"last","last",1105735132),"Hacker",new cljs.core.Keyword(null,"email","email",1415816706),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Gerald",new cljs.core.Keyword(null,"middle","middle",-701029031),"Jay",new cljs.core.Keyword(null,"last","last",1105735132),"Sussman",new cljs.core.Keyword(null,"email","email",1415816706),"metacirc@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439),new cljs.core.Keyword(null,"6946","6946",443412550)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Eva",new cljs.core.Keyword(null,"middle","middle",-701029031),"Lu",new cljs.core.Keyword(null,"last","last",1105735132),"Ator",new cljs.core.Keyword(null,"email","email",1415816706),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"student","student",-1899621508),new cljs.core.Keyword(null,"first","first",-644103046),"Louis",new cljs.core.Keyword(null,"last","last",1105735132),"Reasoner",new cljs.core.Keyword(null,"email","email",1415816706),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"professor","professor",1388675553),new cljs.core.Keyword(null,"first","first",-644103046),"Hal",new cljs.core.Keyword(null,"last","last",1105735132),"Abelson",new cljs.core.Keyword(null,"email","email",1415816706),"evalapply@mit.edu",new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"6001","6001",1924916439)], null)], null)], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"6001","6001",1924916439),"The Structure and Interpretation of Computer Programs",new cljs.core.Keyword(null,"6946","6946",443412550),"The Structure and Interpretation of Classical Mechanics",new cljs.core.Keyword(null,"1806","1806",-1667512160),"Linear Algebra"], null)], null));
om_basic.core.display = (function om_basic$core$display(show){
if(cljs.core.truth_(show)){
return {};
} else {
return {"display": "none"};
}
});
om_basic.core.handle_change = (function om_basic$core$handle_change(e,text,owner){
return om.core.transact_BANG_.call(null,text,(function (_){
return e.target.value;
}));
});
om_basic.core.commit_change = (function om_basic$core$commit_change(text,owner){
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"editing","editing",1365491601),false);
});
om_basic.core.middle_name = (function om_basic$core$middle_name(p__19772){
var map__19775 = p__19772;
var map__19775__$1 = ((((!((map__19775 == null)))?((((map__19775.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19775.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19775):map__19775);
var middle = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"middle","middle",-701029031));
var middle_initial = cljs.core.get.call(null,map__19775__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",854677765));
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
om_basic.core.display_name = (function om_basic$core$display_name(p__19777){
var map__19780 = p__19777;
var map__19780__$1 = ((((!((map__19780 == null)))?((((map__19780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19780):map__19780);
var contact = map__19780__$1;
var first = cljs.core.get.call(null,map__19780__$1,new cljs.core.Keyword(null,"first","first",-644103046));
var last = cljs.core.get.call(null,map__19780__$1,new cljs.core.Keyword(null,"last","last",1105735132));
return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(om_basic.core.middle_name.call(null,contact))].join('');
});
om_basic.core.student_view = (function om_basic$core$student_view(student,owner){
if(typeof om_basic.core.t_om_basic$core19785 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19785 = (function (student_view,student,owner,meta19786){
this.student_view = student_view;
this.student = student;
this.owner = owner;
this.meta19786 = meta19786;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19785.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19787,meta19786__$1){
var self__ = this;
var _19787__$1 = this;
return (new om_basic.core.t_om_basic$core19785(self__.student_view,self__.student,self__.owner,meta19786__$1));
});

om_basic.core.t_om_basic$core19785.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19787){
var self__ = this;
var _19787__$1 = this;
return self__.meta19786;
});

om_basic.core.t_om_basic$core19785.prototype.om$core$IRender$ = true;

om_basic.core.t_om_basic$core19785.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,om_basic.core.display_name.call(null,self__.student));
});

om_basic.core.t_om_basic$core19785.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"student-view","student-view",-390481192,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"student","student",-259089981,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"student","student",-259089981,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19786","meta19786",-383347758,null)], null);
});

om_basic.core.t_om_basic$core19785.cljs$lang$type = true;

om_basic.core.t_om_basic$core19785.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19785";

om_basic.core.t_om_basic$core19785.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19785");
});

om_basic.core.__GT_t_om_basic$core19785 = (function om_basic$core$student_view_$___GT_t_om_basic$core19785(student_view__$1,student__$1,owner__$1,meta19786){
return (new om_basic.core.t_om_basic$core19785(student_view__$1,student__$1,owner__$1,meta19786));
});

}

return (new om_basic.core.t_om_basic$core19785(om_basic$core$student_view,student,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_basic.core.editable = (function om_basic$core$editable(text,owner){
if(typeof om_basic.core.t_om_basic$core19796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRenderState}
 * @implements {cljs.core.IMeta}
 * @implements {om.core.IInitState}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19796 = (function (editable,text,owner,meta19797){
this.editable = editable;
this.text = text;
this.owner = owner;
this.meta19797 = meta19797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19798,meta19797__$1){
var self__ = this;
var _19798__$1 = this;
return (new om_basic.core.t_om_basic$core19796(self__.editable,self__.text,self__.owner,meta19797__$1));
});

om_basic.core.t_om_basic$core19796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19798){
var self__ = this;
var _19798__$1 = this;
return self__.meta19797;
});

om_basic.core.t_om_basic$core19796.prototype.om$core$IInitState$ = true;

om_basic.core.t_om_basic$core19796.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),false], null);
});

om_basic.core.t_om_basic$core19796.prototype.om$core$IRenderState$ = true;

om_basic.core.t_om_basic$core19796.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__19799){
var self__ = this;
var map__19800 = p__19799;
var map__19800__$1 = ((((!((map__19800 == null)))?((((map__19800.cljs$lang$protocol_mask$partition0$ & (64))) || (map__19800.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__19800):map__19800);
var editing = cljs.core.get.call(null,map__19800__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var ___$1 = this;
return React.DOM.li(null,React.DOM.span({"style": om_basic.core.display.call(null,cljs.core.not.call(null,editing))},om.core.value.call(null,self__.text)),om.dom.input.call(null,{"style": om_basic.core.display.call(null,editing), "value": om.core.value.call(null,self__.text), "onChange": ((function (___$1,map__19800,map__19800__$1,editing){
return (function (p1__19788_SHARP_){
return om_basic.core.handle_change.call(null,p1__19788_SHARP_,self__.text,self__.owner);
});})(___$1,map__19800,map__19800__$1,editing))
, "onKeyDown": ((function (___$1,map__19800,map__19800__$1,editing){
return (function (p1__19789_SHARP_){
if(cljs.core._EQ_.call(null,p1__19789_SHARP_.key,"Enter")){
return om_basic.core.commit_change.call(null,self__.text,self__.owner);
} else {
return null;
}
});})(___$1,map__19800,map__19800__$1,editing))
, "onBlur": ((function (___$1,map__19800,map__19800__$1,editing){
return (function (e){
return om_basic.core.commit_change.call(null,self__.text,self__.owner);
});})(___$1,map__19800,map__19800__$1,editing))
}),React.DOM.button({"style": om_basic.core.display.call(null,cljs.core.not.call(null,editing)), "onClick": ((function (___$1,map__19800,map__19800__$1,editing){
return (function (){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editing","editing",1365491601),true);
});})(___$1,map__19800,map__19800__$1,editing))
},"Edit"));
});

om_basic.core.t_om_basic$core19796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"editable","editable",-724155443,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"text","text",-150030170,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19797","meta19797",1482749387,null)], null);
});

om_basic.core.t_om_basic$core19796.cljs$lang$type = true;

om_basic.core.t_om_basic$core19796.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19796";

om_basic.core.t_om_basic$core19796.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19796");
});

om_basic.core.__GT_t_om_basic$core19796 = (function om_basic$core$editable_$___GT_t_om_basic$core19796(editable__$1,text__$1,owner__$1,meta19797){
return (new om_basic.core.t_om_basic$core19796(editable__$1,text__$1,owner__$1,meta19797));
});

}

return (new om_basic.core.t_om_basic$core19796(om_basic$core$editable,text,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_basic.core.professor_view = (function om_basic$core$professor_view(professor,owner){
if(typeof om_basic.core.t_om_basic$core19805 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19805 = (function (professor_view,professor,owner,meta19806){
this.professor_view = professor_view;
this.professor = professor;
this.owner = owner;
this.meta19806 = meta19806;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19805.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19807,meta19806__$1){
var self__ = this;
var _19807__$1 = this;
return (new om_basic.core.t_om_basic$core19805(self__.professor_view,self__.professor,self__.owner,meta19806__$1));
});

om_basic.core.t_om_basic$core19805.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19807){
var self__ = this;
var _19807__$1 = this;
return self__.meta19806;
});

om_basic.core.t_om_basic$core19805.prototype.om$core$IRender$ = true;

om_basic.core.t_om_basic$core19805.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.li(null,React.DOM.div(null,om_basic.core.display_name.call(null,self__.professor)),React.DOM.label(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_basic.core.editable,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.professor))));
});

om_basic.core.t_om_basic$core19805.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"professor-view","professor-view",-323548855,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"professor","professor",-1265760216,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"professor","professor",-1265760216,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19806","meta19806",583976901,null)], null);
});

om_basic.core.t_om_basic$core19805.cljs$lang$type = true;

om_basic.core.t_om_basic$core19805.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19805";

om_basic.core.t_om_basic$core19805.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19805");
});

om_basic.core.__GT_t_om_basic$core19805 = (function om_basic$core$professor_view_$___GT_t_om_basic$core19805(professor_view__$1,professor__$1,owner__$1,meta19806){
return (new om_basic.core.t_om_basic$core19805(professor_view__$1,professor__$1,owner__$1,meta19806));
});

}

return (new om_basic.core.t_om_basic$core19805(om_basic$core$professor_view,professor,owner,cljs.core.PersistentArrayMap.EMPTY));
});
if(typeof om_basic.core.entry_view !== 'undefined'){
} else {
om_basic.core.entry_view = (function (){var method_table__17739__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17740__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17741__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17743__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-basic.core","entry-view"),((function (method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__){
return (function (person,_){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(person);
});})(method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__,hierarchy__17743__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17743__auto__,method_table__17739__auto__,prefer_table__17740__auto__,method_cache__17741__auto__,cached_hierarchy__17742__auto__));
})();
}
cljs.core._add_method.call(null,om_basic.core.entry_view,new cljs.core.Keyword(null,"student","student",-1899621508),(function (person,owner){
return om_basic.core.student_view.call(null,person,owner);
}));
cljs.core._add_method.call(null,om_basic.core.entry_view,new cljs.core.Keyword(null,"professor","professor",1388675553),(function (person,owner){
return om_basic.core.professor_view.call(null,person,owner);
}));
om_basic.core.people = (function om_basic$core$people(data){
return cljs.core.mapv.call(null,(function (x){
if(cljs.core.truth_(new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(x))){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",2037804510)], null),(function (cs){
return cljs.core.mapv.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(data),cs);
}));
} else {
return x;
}
}),new cljs.core.Keyword(null,"people","people",1443537404).cljs$core$IFn$_invoke$arity$1(data));
});
om_basic.core.registry_view = (function om_basic$core$registry_view(data,owner){
if(typeof om_basic.core.t_om_basic$core19811 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19811 = (function (registry_view,data,owner,meta19812){
this.registry_view = registry_view;
this.data = data;
this.owner = owner;
this.meta19812 = meta19812;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19811.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19813,meta19812__$1){
var self__ = this;
var _19813__$1 = this;
return (new om_basic.core.t_om_basic$core19811(self__.registry_view,self__.data,self__.owner,meta19812__$1));
});

om_basic.core.t_om_basic$core19811.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19813){
var self__ = this;
var _19813__$1 = this;
return self__.meta19812;
});

om_basic.core.t_om_basic$core19811.prototype.om$core$IRender$ = true;

om_basic.core.t_om_basic$core19811.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div(null,React.DOM.h2(null,"Registry"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_basic.core.entry_view,om_basic.core.people.call(null,self__.data))));
});

om_basic.core.t_om_basic$core19811.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"registry-view","registry-view",-1679887188,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19812","meta19812",1935012720,null)], null);
});

om_basic.core.t_om_basic$core19811.cljs$lang$type = true;

om_basic.core.t_om_basic$core19811.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19811";

om_basic.core.t_om_basic$core19811.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19811");
});

om_basic.core.__GT_t_om_basic$core19811 = (function om_basic$core$registry_view_$___GT_t_om_basic$core19811(registry_view__$1,data__$1,owner__$1,meta19812){
return (new om_basic.core.t_om_basic$core19811(registry_view__$1,data__$1,owner__$1,meta19812));
});

}

return (new om_basic.core.t_om_basic$core19811(om_basic$core$registry_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om_basic.core.classes_view = (function om_basic$core$classes_view(data,owner){
if(typeof om_basic.core.t_om_basic$core19817 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
om_basic.core.t_om_basic$core19817 = (function (classes_view,data,owner,meta19818){
this.classes_view = classes_view;
this.data = data;
this.owner = owner;
this.meta19818 = meta19818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
om_basic.core.t_om_basic$core19817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19819,meta19818__$1){
var self__ = this;
var _19819__$1 = this;
return (new om_basic.core.t_om_basic$core19817(self__.classes_view,self__.data,self__.owner,meta19818__$1));
});

om_basic.core.t_om_basic$core19817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19819){
var self__ = this;
var _19819__$1 = this;
return self__.meta19818;
});

om_basic.core.t_om_basic$core19817.prototype.om$core$IRender$ = true;

om_basic.core.t_om_basic$core19817.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.DOM.div({"id": "classes"},React.DOM.h2(null,"Classes"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,om_basic.core.editable,cljs.core.vals.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(self__.data)))));
});

om_basic.core.t_om_basic$core19817.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"classes-view","classes-view",413662425,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta19818","meta19818",-1119472424,null)], null);
});

om_basic.core.t_om_basic$core19817.cljs$lang$type = true;

om_basic.core.t_om_basic$core19817.cljs$lang$ctorStr = "om-basic.core/t_om_basic$core19817";

om_basic.core.t_om_basic$core19817.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"om-basic.core/t_om_basic$core19817");
});

om_basic.core.__GT_t_om_basic$core19817 = (function om_basic$core$classes_view_$___GT_t_om_basic$core19817(classes_view__$1,data__$1,owner__$1,meta19818){
return (new om_basic.core.t_om_basic$core19817(classes_view__$1,data__$1,owner__$1,meta19818));
});

}

return (new om_basic.core.t_om_basic$core19817(om_basic$core$classes_view,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,om_basic.core.registry_view,om_basic.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("registry")], null));
om.core.root.call(null,om_basic.core.classes_view,om_basic.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("classes")], null));
om_basic.core.on_js_reload = (function om_basic$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1449090748386