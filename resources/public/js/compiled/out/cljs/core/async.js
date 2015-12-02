// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args20995 = [];
var len__17884__auto___21001 = arguments.length;
var i__17885__auto___21002 = (0);
while(true){
if((i__17885__auto___21002 < len__17884__auto___21001)){
args20995.push((arguments[i__17885__auto___21002]));

var G__21003 = (i__17885__auto___21002 + (1));
i__17885__auto___21002 = G__21003;
continue;
} else {
}
break;
}

var G__20997 = args20995.length;
switch (G__20997) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20995.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20998 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20998 = (function (f,blockable,meta20999){
this.f = f;
this.blockable = blockable;
this.meta20999 = meta20999;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21000,meta20999__$1){
var self__ = this;
var _21000__$1 = this;
return (new cljs.core.async.t_cljs$core$async20998(self__.f,self__.blockable,meta20999__$1));
});

cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21000){
var self__ = this;
var _21000__$1 = this;
return self__.meta20999;
});

cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20998.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20999","meta20999",-220432296,null)], null);
});

cljs.core.async.t_cljs$core$async20998.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20998.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20998";

cljs.core.async.t_cljs$core$async20998.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20998");
});

cljs.core.async.__GT_t_cljs$core$async20998 = (function cljs$core$async$__GT_t_cljs$core$async20998(f__$1,blockable__$1,meta20999){
return (new cljs.core.async.t_cljs$core$async20998(f__$1,blockable__$1,meta20999));
});

}

return (new cljs.core.async.t_cljs$core$async20998(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21007 = [];
var len__17884__auto___21010 = arguments.length;
var i__17885__auto___21011 = (0);
while(true){
if((i__17885__auto___21011 < len__17884__auto___21010)){
args21007.push((arguments[i__17885__auto___21011]));

var G__21012 = (i__17885__auto___21011 + (1));
i__17885__auto___21011 = G__21012;
continue;
} else {
}
break;
}

var G__21009 = args21007.length;
switch (G__21009) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21007.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21014 = [];
var len__17884__auto___21017 = arguments.length;
var i__17885__auto___21018 = (0);
while(true){
if((i__17885__auto___21018 < len__17884__auto___21017)){
args21014.push((arguments[i__17885__auto___21018]));

var G__21019 = (i__17885__auto___21018 + (1));
i__17885__auto___21018 = G__21019;
continue;
} else {
}
break;
}

var G__21016 = args21014.length;
switch (G__21016) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21014.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21021 = [];
var len__17884__auto___21024 = arguments.length;
var i__17885__auto___21025 = (0);
while(true){
if((i__17885__auto___21025 < len__17884__auto___21024)){
args21021.push((arguments[i__17885__auto___21025]));

var G__21026 = (i__17885__auto___21025 + (1));
i__17885__auto___21025 = G__21026;
continue;
} else {
}
break;
}

var G__21023 = args21021.length;
switch (G__21023) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21021.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21028 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21028);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21028,ret){
return (function (){
return fn1.call(null,val_21028);
});})(val_21028,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21029 = [];
var len__17884__auto___21032 = arguments.length;
var i__17885__auto___21033 = (0);
while(true){
if((i__17885__auto___21033 < len__17884__auto___21032)){
args21029.push((arguments[i__17885__auto___21033]));

var G__21034 = (i__17885__auto___21033 + (1));
i__17885__auto___21033 = G__21034;
continue;
} else {
}
break;
}

var G__21031 = args21029.length;
switch (G__21031) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21029.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___21036 = n;
var x_21037 = (0);
while(true){
if((x_21037 < n__17729__auto___21036)){
(a[x_21037] = (0));

var G__21038 = (x_21037 + (1));
x_21037 = G__21038;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21039 = (i + (1));
i = G__21039;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21043 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21043 = (function (alt_flag,flag,meta21044){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21044 = meta21044;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21045,meta21044__$1){
var self__ = this;
var _21045__$1 = this;
return (new cljs.core.async.t_cljs$core$async21043(self__.alt_flag,self__.flag,meta21044__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21045){
var self__ = this;
var _21045__$1 = this;
return self__.meta21044;
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21044","meta21044",-204605905,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21043.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21043.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21043";

cljs.core.async.t_cljs$core$async21043.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21043");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21043 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21043(alt_flag__$1,flag__$1,meta21044){
return (new cljs.core.async.t_cljs$core$async21043(alt_flag__$1,flag__$1,meta21044));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21043(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21049 = (function (alt_handler,flag,cb,meta21050){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21050 = meta21050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21051,meta21050__$1){
var self__ = this;
var _21051__$1 = this;
return (new cljs.core.async.t_cljs$core$async21049(self__.alt_handler,self__.flag,self__.cb,meta21050__$1));
});

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21051){
var self__ = this;
var _21051__$1 = this;
return self__.meta21050;
});

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21050","meta21050",1552566944,null)], null);
});

cljs.core.async.t_cljs$core$async21049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21049";

cljs.core.async.t_cljs$core$async21049.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21049");
});

cljs.core.async.__GT_t_cljs$core$async21049 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21049(alt_handler__$1,flag__$1,cb__$1,meta21050){
return (new cljs.core.async.t_cljs$core$async21049(alt_handler__$1,flag__$1,cb__$1,meta21050));
});

}

return (new cljs.core.async.t_cljs$core$async21049(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21052_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21052_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21053_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21053_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21054 = (i + (1));
i = G__21054;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___21060 = arguments.length;
var i__17885__auto___21061 = (0);
while(true){
if((i__17885__auto___21061 < len__17884__auto___21060)){
args__17891__auto__.push((arguments[i__17885__auto___21061]));

var G__21062 = (i__17885__auto___21061 + (1));
i__17885__auto___21061 = G__21062;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21057){
var map__21058 = p__21057;
var map__21058__$1 = ((((!((map__21058 == null)))?((((map__21058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21058):map__21058);
var opts = map__21058__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21055){
var G__21056 = cljs.core.first.call(null,seq21055);
var seq21055__$1 = cljs.core.next.call(null,seq21055);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21056,seq21055__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21063 = [];
var len__17884__auto___21113 = arguments.length;
var i__17885__auto___21114 = (0);
while(true){
if((i__17885__auto___21114 < len__17884__auto___21113)){
args21063.push((arguments[i__17885__auto___21114]));

var G__21115 = (i__17885__auto___21114 + (1));
i__17885__auto___21114 = G__21115;
continue;
} else {
}
break;
}

var G__21065 = args21063.length;
switch (G__21065) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21063.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20950__auto___21117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___21117){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___21117){
return (function (state_21089){
var state_val_21090 = (state_21089[(1)]);
if((state_val_21090 === (7))){
var inst_21085 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21091_21118 = state_21089__$1;
(statearr_21091_21118[(2)] = inst_21085);

(statearr_21091_21118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (1))){
var state_21089__$1 = state_21089;
var statearr_21092_21119 = state_21089__$1;
(statearr_21092_21119[(2)] = null);

(statearr_21092_21119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (4))){
var inst_21068 = (state_21089[(7)]);
var inst_21068__$1 = (state_21089[(2)]);
var inst_21069 = (inst_21068__$1 == null);
var state_21089__$1 = (function (){var statearr_21093 = state_21089;
(statearr_21093[(7)] = inst_21068__$1);

return statearr_21093;
})();
if(cljs.core.truth_(inst_21069)){
var statearr_21094_21120 = state_21089__$1;
(statearr_21094_21120[(1)] = (5));

} else {
var statearr_21095_21121 = state_21089__$1;
(statearr_21095_21121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (13))){
var state_21089__$1 = state_21089;
var statearr_21096_21122 = state_21089__$1;
(statearr_21096_21122[(2)] = null);

(statearr_21096_21122[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (6))){
var inst_21068 = (state_21089[(7)]);
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21089__$1,(11),to,inst_21068);
} else {
if((state_val_21090 === (3))){
var inst_21087 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21089__$1,inst_21087);
} else {
if((state_val_21090 === (12))){
var state_21089__$1 = state_21089;
var statearr_21097_21123 = state_21089__$1;
(statearr_21097_21123[(2)] = null);

(statearr_21097_21123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (2))){
var state_21089__$1 = state_21089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21089__$1,(4),from);
} else {
if((state_val_21090 === (11))){
var inst_21078 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
if(cljs.core.truth_(inst_21078)){
var statearr_21098_21124 = state_21089__$1;
(statearr_21098_21124[(1)] = (12));

} else {
var statearr_21099_21125 = state_21089__$1;
(statearr_21099_21125[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (9))){
var state_21089__$1 = state_21089;
var statearr_21100_21126 = state_21089__$1;
(statearr_21100_21126[(2)] = null);

(statearr_21100_21126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (5))){
var state_21089__$1 = state_21089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21101_21127 = state_21089__$1;
(statearr_21101_21127[(1)] = (8));

} else {
var statearr_21102_21128 = state_21089__$1;
(statearr_21102_21128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (14))){
var inst_21083 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21103_21129 = state_21089__$1;
(statearr_21103_21129[(2)] = inst_21083);

(statearr_21103_21129[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (10))){
var inst_21075 = (state_21089[(2)]);
var state_21089__$1 = state_21089;
var statearr_21104_21130 = state_21089__$1;
(statearr_21104_21130[(2)] = inst_21075);

(statearr_21104_21130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21090 === (8))){
var inst_21072 = cljs.core.async.close_BANG_.call(null,to);
var state_21089__$1 = state_21089;
var statearr_21105_21131 = state_21089__$1;
(statearr_21105_21131[(2)] = inst_21072);

(statearr_21105_21131[(1)] = (10));


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
});})(c__20950__auto___21117))
;
return ((function (switch__20838__auto__,c__20950__auto___21117){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_21109 = [null,null,null,null,null,null,null,null];
(statearr_21109[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_21109[(1)] = (1));

return statearr_21109;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_21089){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21110){if((e21110 instanceof Object)){
var ex__20842__auto__ = e21110;
var statearr_21111_21132 = state_21089;
(statearr_21111_21132[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21133 = state_21089;
state_21089 = G__21133;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_21089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_21089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___21117))
})();
var state__20952__auto__ = (function (){var statearr_21112 = f__20951__auto__.call(null);
(statearr_21112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21117);

return statearr_21112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___21117))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__21317){
var vec__21318 = p__21317;
var v = cljs.core.nth.call(null,vec__21318,(0),null);
var p = cljs.core.nth.call(null,vec__21318,(1),null);
var job = vec__21318;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20950__auto___21500 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results){
return (function (state_21323){
var state_val_21324 = (state_21323[(1)]);
if((state_val_21324 === (1))){
var state_21323__$1 = state_21323;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21323__$1,(2),res,v);
} else {
if((state_val_21324 === (2))){
var inst_21320 = (state_21323[(2)]);
var inst_21321 = cljs.core.async.close_BANG_.call(null,res);
var state_21323__$1 = (function (){var statearr_21325 = state_21323;
(statearr_21325[(7)] = inst_21320);

return statearr_21325;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21323__$1,inst_21321);
} else {
return null;
}
}
});})(c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results))
;
return ((function (switch__20838__auto__,c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_21329 = [null,null,null,null,null,null,null,null];
(statearr_21329[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__);

(statearr_21329[(1)] = (1));

return statearr_21329;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1 = (function (state_21323){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21323);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21330){if((e21330 instanceof Object)){
var ex__20842__auto__ = e21330;
var statearr_21331_21501 = state_21323;
(statearr_21331_21501[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21323);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21502 = state_21323;
state_21323 = G__21502;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = function(state_21323){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1.call(this,state_21323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results))
})();
var state__20952__auto__ = (function (){var statearr_21332 = f__20951__auto__.call(null);
(statearr_21332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21500);

return statearr_21332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___21500,res,vec__21318,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__21333){
var vec__21334 = p__21333;
var v = cljs.core.nth.call(null,vec__21334,(0),null);
var p = cljs.core.nth.call(null,vec__21334,(1),null);
var job = vec__21334;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___21503 = n;
var __21504 = (0);
while(true){
if((__21504 < n__17729__auto___21503)){
var G__21335_21505 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__21335_21505) {
case "compute":
var c__20950__auto___21507 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21504,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (__21504,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function (state_21348){
var state_val_21349 = (state_21348[(1)]);
if((state_val_21349 === (1))){
var state_21348__$1 = state_21348;
var statearr_21350_21508 = state_21348__$1;
(statearr_21350_21508[(2)] = null);

(statearr_21350_21508[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (2))){
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21348__$1,(4),jobs);
} else {
if((state_val_21349 === (3))){
var inst_21346 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21348__$1,inst_21346);
} else {
if((state_val_21349 === (4))){
var inst_21338 = (state_21348[(2)]);
var inst_21339 = process.call(null,inst_21338);
var state_21348__$1 = state_21348;
if(cljs.core.truth_(inst_21339)){
var statearr_21351_21509 = state_21348__$1;
(statearr_21351_21509[(1)] = (5));

} else {
var statearr_21352_21510 = state_21348__$1;
(statearr_21352_21510[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (5))){
var state_21348__$1 = state_21348;
var statearr_21353_21511 = state_21348__$1;
(statearr_21353_21511[(2)] = null);

(statearr_21353_21511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (6))){
var state_21348__$1 = state_21348;
var statearr_21354_21512 = state_21348__$1;
(statearr_21354_21512[(2)] = null);

(statearr_21354_21512[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21349 === (7))){
var inst_21344 = (state_21348[(2)]);
var state_21348__$1 = state_21348;
var statearr_21355_21513 = state_21348__$1;
(statearr_21355_21513[(2)] = inst_21344);

(statearr_21355_21513[(1)] = (3));


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
});})(__21504,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
;
return ((function (__21504,switch__20838__auto__,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_21359 = [null,null,null,null,null,null,null];
(statearr_21359[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__);

(statearr_21359[(1)] = (1));

return statearr_21359;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1 = (function (state_21348){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21360){if((e21360 instanceof Object)){
var ex__20842__auto__ = e21360;
var statearr_21361_21514 = state_21348;
(statearr_21361_21514[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21515 = state_21348;
state_21348 = G__21515;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = function(state_21348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1.call(this,state_21348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__;
})()
;})(__21504,switch__20838__auto__,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
})();
var state__20952__auto__ = (function (){var statearr_21362 = f__20951__auto__.call(null);
(statearr_21362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21507);

return statearr_21362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(__21504,c__20950__auto___21507,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
);


break;
case "async":
var c__20950__auto___21516 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21504,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (__21504,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function (state_21375){
var state_val_21376 = (state_21375[(1)]);
if((state_val_21376 === (1))){
var state_21375__$1 = state_21375;
var statearr_21377_21517 = state_21375__$1;
(statearr_21377_21517[(2)] = null);

(statearr_21377_21517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21376 === (2))){
var state_21375__$1 = state_21375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21375__$1,(4),jobs);
} else {
if((state_val_21376 === (3))){
var inst_21373 = (state_21375[(2)]);
var state_21375__$1 = state_21375;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21375__$1,inst_21373);
} else {
if((state_val_21376 === (4))){
var inst_21365 = (state_21375[(2)]);
var inst_21366 = async.call(null,inst_21365);
var state_21375__$1 = state_21375;
if(cljs.core.truth_(inst_21366)){
var statearr_21378_21518 = state_21375__$1;
(statearr_21378_21518[(1)] = (5));

} else {
var statearr_21379_21519 = state_21375__$1;
(statearr_21379_21519[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21376 === (5))){
var state_21375__$1 = state_21375;
var statearr_21380_21520 = state_21375__$1;
(statearr_21380_21520[(2)] = null);

(statearr_21380_21520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21376 === (6))){
var state_21375__$1 = state_21375;
var statearr_21381_21521 = state_21375__$1;
(statearr_21381_21521[(2)] = null);

(statearr_21381_21521[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21376 === (7))){
var inst_21371 = (state_21375[(2)]);
var state_21375__$1 = state_21375;
var statearr_21382_21522 = state_21375__$1;
(statearr_21382_21522[(2)] = inst_21371);

(statearr_21382_21522[(1)] = (3));


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
});})(__21504,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
;
return ((function (__21504,switch__20838__auto__,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_21386 = [null,null,null,null,null,null,null];
(statearr_21386[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__);

(statearr_21386[(1)] = (1));

return statearr_21386;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1 = (function (state_21375){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21387){if((e21387 instanceof Object)){
var ex__20842__auto__ = e21387;
var statearr_21388_21523 = state_21375;
(statearr_21388_21523[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21524 = state_21375;
state_21375 = G__21524;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = function(state_21375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1.call(this,state_21375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__;
})()
;})(__21504,switch__20838__auto__,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
})();
var state__20952__auto__ = (function (){var statearr_21389 = f__20951__auto__.call(null);
(statearr_21389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21516);

return statearr_21389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(__21504,c__20950__auto___21516,G__21335_21505,n__17729__auto___21503,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__21525 = (__21504 + (1));
__21504 = G__21525;
continue;
} else {
}
break;
}

var c__20950__auto___21526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___21526,jobs,results,process,async){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___21526,jobs,results,process,async){
return (function (state_21411){
var state_val_21412 = (state_21411[(1)]);
if((state_val_21412 === (1))){
var state_21411__$1 = state_21411;
var statearr_21413_21527 = state_21411__$1;
(statearr_21413_21527[(2)] = null);

(statearr_21413_21527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (2))){
var state_21411__$1 = state_21411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21411__$1,(4),from);
} else {
if((state_val_21412 === (3))){
var inst_21409 = (state_21411[(2)]);
var state_21411__$1 = state_21411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21411__$1,inst_21409);
} else {
if((state_val_21412 === (4))){
var inst_21392 = (state_21411[(7)]);
var inst_21392__$1 = (state_21411[(2)]);
var inst_21393 = (inst_21392__$1 == null);
var state_21411__$1 = (function (){var statearr_21414 = state_21411;
(statearr_21414[(7)] = inst_21392__$1);

return statearr_21414;
})();
if(cljs.core.truth_(inst_21393)){
var statearr_21415_21528 = state_21411__$1;
(statearr_21415_21528[(1)] = (5));

} else {
var statearr_21416_21529 = state_21411__$1;
(statearr_21416_21529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (5))){
var inst_21395 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21411__$1 = state_21411;
var statearr_21417_21530 = state_21411__$1;
(statearr_21417_21530[(2)] = inst_21395);

(statearr_21417_21530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (6))){
var inst_21392 = (state_21411[(7)]);
var inst_21397 = (state_21411[(8)]);
var inst_21397__$1 = cljs.core.async.chan.call(null,(1));
var inst_21398 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21399 = [inst_21392,inst_21397__$1];
var inst_21400 = (new cljs.core.PersistentVector(null,2,(5),inst_21398,inst_21399,null));
var state_21411__$1 = (function (){var statearr_21418 = state_21411;
(statearr_21418[(8)] = inst_21397__$1);

return statearr_21418;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21411__$1,(8),jobs,inst_21400);
} else {
if((state_val_21412 === (7))){
var inst_21407 = (state_21411[(2)]);
var state_21411__$1 = state_21411;
var statearr_21419_21531 = state_21411__$1;
(statearr_21419_21531[(2)] = inst_21407);

(statearr_21419_21531[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21412 === (8))){
var inst_21397 = (state_21411[(8)]);
var inst_21402 = (state_21411[(2)]);
var state_21411__$1 = (function (){var statearr_21420 = state_21411;
(statearr_21420[(9)] = inst_21402);

return statearr_21420;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21411__$1,(9),results,inst_21397);
} else {
if((state_val_21412 === (9))){
var inst_21404 = (state_21411[(2)]);
var state_21411__$1 = (function (){var statearr_21421 = state_21411;
(statearr_21421[(10)] = inst_21404);

return statearr_21421;
})();
var statearr_21422_21532 = state_21411__$1;
(statearr_21422_21532[(2)] = null);

(statearr_21422_21532[(1)] = (2));


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
});})(c__20950__auto___21526,jobs,results,process,async))
;
return ((function (switch__20838__auto__,c__20950__auto___21526,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_21426 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21426[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__);

(statearr_21426[(1)] = (1));

return statearr_21426;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1 = (function (state_21411){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21427){if((e21427 instanceof Object)){
var ex__20842__auto__ = e21427;
var statearr_21428_21533 = state_21411;
(statearr_21428_21533[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21427;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21534 = state_21411;
state_21411 = G__21534;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = function(state_21411){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1.call(this,state_21411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___21526,jobs,results,process,async))
})();
var state__20952__auto__ = (function (){var statearr_21429 = f__20951__auto__.call(null);
(statearr_21429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21526);

return statearr_21429;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___21526,jobs,results,process,async))
);


var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__,jobs,results,process,async){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__,jobs,results,process,async){
return (function (state_21467){
var state_val_21468 = (state_21467[(1)]);
if((state_val_21468 === (7))){
var inst_21463 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21469_21535 = state_21467__$1;
(statearr_21469_21535[(2)] = inst_21463);

(statearr_21469_21535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (20))){
var state_21467__$1 = state_21467;
var statearr_21470_21536 = state_21467__$1;
(statearr_21470_21536[(2)] = null);

(statearr_21470_21536[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (1))){
var state_21467__$1 = state_21467;
var statearr_21471_21537 = state_21467__$1;
(statearr_21471_21537[(2)] = null);

(statearr_21471_21537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (4))){
var inst_21432 = (state_21467[(7)]);
var inst_21432__$1 = (state_21467[(2)]);
var inst_21433 = (inst_21432__$1 == null);
var state_21467__$1 = (function (){var statearr_21472 = state_21467;
(statearr_21472[(7)] = inst_21432__$1);

return statearr_21472;
})();
if(cljs.core.truth_(inst_21433)){
var statearr_21473_21538 = state_21467__$1;
(statearr_21473_21538[(1)] = (5));

} else {
var statearr_21474_21539 = state_21467__$1;
(statearr_21474_21539[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (15))){
var inst_21445 = (state_21467[(8)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21467__$1,(18),to,inst_21445);
} else {
if((state_val_21468 === (21))){
var inst_21458 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21475_21540 = state_21467__$1;
(statearr_21475_21540[(2)] = inst_21458);

(statearr_21475_21540[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (13))){
var inst_21460 = (state_21467[(2)]);
var state_21467__$1 = (function (){var statearr_21476 = state_21467;
(statearr_21476[(9)] = inst_21460);

return statearr_21476;
})();
var statearr_21477_21541 = state_21467__$1;
(statearr_21477_21541[(2)] = null);

(statearr_21477_21541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (6))){
var inst_21432 = (state_21467[(7)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21467__$1,(11),inst_21432);
} else {
if((state_val_21468 === (17))){
var inst_21453 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
if(cljs.core.truth_(inst_21453)){
var statearr_21478_21542 = state_21467__$1;
(statearr_21478_21542[(1)] = (19));

} else {
var statearr_21479_21543 = state_21467__$1;
(statearr_21479_21543[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (3))){
var inst_21465 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21467__$1,inst_21465);
} else {
if((state_val_21468 === (12))){
var inst_21442 = (state_21467[(10)]);
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21467__$1,(14),inst_21442);
} else {
if((state_val_21468 === (2))){
var state_21467__$1 = state_21467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21467__$1,(4),results);
} else {
if((state_val_21468 === (19))){
var state_21467__$1 = state_21467;
var statearr_21480_21544 = state_21467__$1;
(statearr_21480_21544[(2)] = null);

(statearr_21480_21544[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (11))){
var inst_21442 = (state_21467[(2)]);
var state_21467__$1 = (function (){var statearr_21481 = state_21467;
(statearr_21481[(10)] = inst_21442);

return statearr_21481;
})();
var statearr_21482_21545 = state_21467__$1;
(statearr_21482_21545[(2)] = null);

(statearr_21482_21545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (9))){
var state_21467__$1 = state_21467;
var statearr_21483_21546 = state_21467__$1;
(statearr_21483_21546[(2)] = null);

(statearr_21483_21546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (5))){
var state_21467__$1 = state_21467;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21484_21547 = state_21467__$1;
(statearr_21484_21547[(1)] = (8));

} else {
var statearr_21485_21548 = state_21467__$1;
(statearr_21485_21548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (14))){
var inst_21445 = (state_21467[(8)]);
var inst_21447 = (state_21467[(11)]);
var inst_21445__$1 = (state_21467[(2)]);
var inst_21446 = (inst_21445__$1 == null);
var inst_21447__$1 = cljs.core.not.call(null,inst_21446);
var state_21467__$1 = (function (){var statearr_21486 = state_21467;
(statearr_21486[(8)] = inst_21445__$1);

(statearr_21486[(11)] = inst_21447__$1);

return statearr_21486;
})();
if(inst_21447__$1){
var statearr_21487_21549 = state_21467__$1;
(statearr_21487_21549[(1)] = (15));

} else {
var statearr_21488_21550 = state_21467__$1;
(statearr_21488_21550[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (16))){
var inst_21447 = (state_21467[(11)]);
var state_21467__$1 = state_21467;
var statearr_21489_21551 = state_21467__$1;
(statearr_21489_21551[(2)] = inst_21447);

(statearr_21489_21551[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (10))){
var inst_21439 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21490_21552 = state_21467__$1;
(statearr_21490_21552[(2)] = inst_21439);

(statearr_21490_21552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (18))){
var inst_21450 = (state_21467[(2)]);
var state_21467__$1 = state_21467;
var statearr_21491_21553 = state_21467__$1;
(statearr_21491_21553[(2)] = inst_21450);

(statearr_21491_21553[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21468 === (8))){
var inst_21436 = cljs.core.async.close_BANG_.call(null,to);
var state_21467__$1 = state_21467;
var statearr_21492_21554 = state_21467__$1;
(statearr_21492_21554[(2)] = inst_21436);

(statearr_21492_21554[(1)] = (10));


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
});})(c__20950__auto__,jobs,results,process,async))
;
return ((function (switch__20838__auto__,c__20950__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_21496 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__);

(statearr_21496[(1)] = (1));

return statearr_21496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1 = (function (state_21467){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21497){if((e21497 instanceof Object)){
var ex__20842__auto__ = e21497;
var statearr_21498_21555 = state_21467;
(statearr_21498_21555[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21556 = state_21467;
state_21467 = G__21556;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__ = function(state_21467){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1.call(this,state_21467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__,jobs,results,process,async))
})();
var state__20952__auto__ = (function (){var statearr_21499 = f__20951__auto__.call(null);
(statearr_21499[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_21499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__,jobs,results,process,async))
);

return c__20950__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args21557 = [];
var len__17884__auto___21560 = arguments.length;
var i__17885__auto___21561 = (0);
while(true){
if((i__17885__auto___21561 < len__17884__auto___21560)){
args21557.push((arguments[i__17885__auto___21561]));

var G__21562 = (i__17885__auto___21561 + (1));
i__17885__auto___21561 = G__21562;
continue;
} else {
}
break;
}

var G__21559 = args21557.length;
switch (G__21559) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21557.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args21564 = [];
var len__17884__auto___21567 = arguments.length;
var i__17885__auto___21568 = (0);
while(true){
if((i__17885__auto___21568 < len__17884__auto___21567)){
args21564.push((arguments[i__17885__auto___21568]));

var G__21569 = (i__17885__auto___21568 + (1));
i__17885__auto___21568 = G__21569;
continue;
} else {
}
break;
}

var G__21566 = args21564.length;
switch (G__21566) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21564.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args21571 = [];
var len__17884__auto___21624 = arguments.length;
var i__17885__auto___21625 = (0);
while(true){
if((i__17885__auto___21625 < len__17884__auto___21624)){
args21571.push((arguments[i__17885__auto___21625]));

var G__21626 = (i__17885__auto___21625 + (1));
i__17885__auto___21625 = G__21626;
continue;
} else {
}
break;
}

var G__21573 = args21571.length;
switch (G__21573) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21571.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20950__auto___21628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___21628,tc,fc){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___21628,tc,fc){
return (function (state_21599){
var state_val_21600 = (state_21599[(1)]);
if((state_val_21600 === (7))){
var inst_21595 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21601_21629 = state_21599__$1;
(statearr_21601_21629[(2)] = inst_21595);

(statearr_21601_21629[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (1))){
var state_21599__$1 = state_21599;
var statearr_21602_21630 = state_21599__$1;
(statearr_21602_21630[(2)] = null);

(statearr_21602_21630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (4))){
var inst_21576 = (state_21599[(7)]);
var inst_21576__$1 = (state_21599[(2)]);
var inst_21577 = (inst_21576__$1 == null);
var state_21599__$1 = (function (){var statearr_21603 = state_21599;
(statearr_21603[(7)] = inst_21576__$1);

return statearr_21603;
})();
if(cljs.core.truth_(inst_21577)){
var statearr_21604_21631 = state_21599__$1;
(statearr_21604_21631[(1)] = (5));

} else {
var statearr_21605_21632 = state_21599__$1;
(statearr_21605_21632[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (13))){
var state_21599__$1 = state_21599;
var statearr_21606_21633 = state_21599__$1;
(statearr_21606_21633[(2)] = null);

(statearr_21606_21633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (6))){
var inst_21576 = (state_21599[(7)]);
var inst_21582 = p.call(null,inst_21576);
var state_21599__$1 = state_21599;
if(cljs.core.truth_(inst_21582)){
var statearr_21607_21634 = state_21599__$1;
(statearr_21607_21634[(1)] = (9));

} else {
var statearr_21608_21635 = state_21599__$1;
(statearr_21608_21635[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (3))){
var inst_21597 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21599__$1,inst_21597);
} else {
if((state_val_21600 === (12))){
var state_21599__$1 = state_21599;
var statearr_21609_21636 = state_21599__$1;
(statearr_21609_21636[(2)] = null);

(statearr_21609_21636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (2))){
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21599__$1,(4),ch);
} else {
if((state_val_21600 === (11))){
var inst_21576 = (state_21599[(7)]);
var inst_21586 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21599__$1,(8),inst_21586,inst_21576);
} else {
if((state_val_21600 === (9))){
var state_21599__$1 = state_21599;
var statearr_21610_21637 = state_21599__$1;
(statearr_21610_21637[(2)] = tc);

(statearr_21610_21637[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (5))){
var inst_21579 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21580 = cljs.core.async.close_BANG_.call(null,fc);
var state_21599__$1 = (function (){var statearr_21611 = state_21599;
(statearr_21611[(8)] = inst_21579);

return statearr_21611;
})();
var statearr_21612_21638 = state_21599__$1;
(statearr_21612_21638[(2)] = inst_21580);

(statearr_21612_21638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (14))){
var inst_21593 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
var statearr_21613_21639 = state_21599__$1;
(statearr_21613_21639[(2)] = inst_21593);

(statearr_21613_21639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (10))){
var state_21599__$1 = state_21599;
var statearr_21614_21640 = state_21599__$1;
(statearr_21614_21640[(2)] = fc);

(statearr_21614_21640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21600 === (8))){
var inst_21588 = (state_21599[(2)]);
var state_21599__$1 = state_21599;
if(cljs.core.truth_(inst_21588)){
var statearr_21615_21641 = state_21599__$1;
(statearr_21615_21641[(1)] = (12));

} else {
var statearr_21616_21642 = state_21599__$1;
(statearr_21616_21642[(1)] = (13));

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
});})(c__20950__auto___21628,tc,fc))
;
return ((function (switch__20838__auto__,c__20950__auto___21628,tc,fc){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_21620 = [null,null,null,null,null,null,null,null,null];
(statearr_21620[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_21620[(1)] = (1));

return statearr_21620;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_21599){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21621){if((e21621 instanceof Object)){
var ex__20842__auto__ = e21621;
var statearr_21622_21643 = state_21599;
(statearr_21622_21643[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21644 = state_21599;
state_21599 = G__21644;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_21599){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_21599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___21628,tc,fc))
})();
var state__20952__auto__ = (function (){var statearr_21623 = f__20951__auto__.call(null);
(statearr_21623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___21628);

return statearr_21623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___21628,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__){
return (function (state_21708){
var state_val_21709 = (state_21708[(1)]);
if((state_val_21709 === (7))){
var inst_21704 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21710_21731 = state_21708__$1;
(statearr_21710_21731[(2)] = inst_21704);

(statearr_21710_21731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (1))){
var inst_21688 = init;
var state_21708__$1 = (function (){var statearr_21711 = state_21708;
(statearr_21711[(7)] = inst_21688);

return statearr_21711;
})();
var statearr_21712_21732 = state_21708__$1;
(statearr_21712_21732[(2)] = null);

(statearr_21712_21732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (4))){
var inst_21691 = (state_21708[(8)]);
var inst_21691__$1 = (state_21708[(2)]);
var inst_21692 = (inst_21691__$1 == null);
var state_21708__$1 = (function (){var statearr_21713 = state_21708;
(statearr_21713[(8)] = inst_21691__$1);

return statearr_21713;
})();
if(cljs.core.truth_(inst_21692)){
var statearr_21714_21733 = state_21708__$1;
(statearr_21714_21733[(1)] = (5));

} else {
var statearr_21715_21734 = state_21708__$1;
(statearr_21715_21734[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (6))){
var inst_21695 = (state_21708[(9)]);
var inst_21688 = (state_21708[(7)]);
var inst_21691 = (state_21708[(8)]);
var inst_21695__$1 = f.call(null,inst_21688,inst_21691);
var inst_21696 = cljs.core.reduced_QMARK_.call(null,inst_21695__$1);
var state_21708__$1 = (function (){var statearr_21716 = state_21708;
(statearr_21716[(9)] = inst_21695__$1);

return statearr_21716;
})();
if(inst_21696){
var statearr_21717_21735 = state_21708__$1;
(statearr_21717_21735[(1)] = (8));

} else {
var statearr_21718_21736 = state_21708__$1;
(statearr_21718_21736[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (3))){
var inst_21706 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21708__$1,inst_21706);
} else {
if((state_val_21709 === (2))){
var state_21708__$1 = state_21708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21708__$1,(4),ch);
} else {
if((state_val_21709 === (9))){
var inst_21695 = (state_21708[(9)]);
var inst_21688 = inst_21695;
var state_21708__$1 = (function (){var statearr_21719 = state_21708;
(statearr_21719[(7)] = inst_21688);

return statearr_21719;
})();
var statearr_21720_21737 = state_21708__$1;
(statearr_21720_21737[(2)] = null);

(statearr_21720_21737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (5))){
var inst_21688 = (state_21708[(7)]);
var state_21708__$1 = state_21708;
var statearr_21721_21738 = state_21708__$1;
(statearr_21721_21738[(2)] = inst_21688);

(statearr_21721_21738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (10))){
var inst_21702 = (state_21708[(2)]);
var state_21708__$1 = state_21708;
var statearr_21722_21739 = state_21708__$1;
(statearr_21722_21739[(2)] = inst_21702);

(statearr_21722_21739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21709 === (8))){
var inst_21695 = (state_21708[(9)]);
var inst_21698 = cljs.core.deref.call(null,inst_21695);
var state_21708__$1 = state_21708;
var statearr_21723_21740 = state_21708__$1;
(statearr_21723_21740[(2)] = inst_21698);

(statearr_21723_21740[(1)] = (10));


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
});})(c__20950__auto__))
;
return ((function (switch__20838__auto__,c__20950__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20839__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20839__auto____0 = (function (){
var statearr_21727 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21727[(0)] = cljs$core$async$reduce_$_state_machine__20839__auto__);

(statearr_21727[(1)] = (1));

return statearr_21727;
});
var cljs$core$async$reduce_$_state_machine__20839__auto____1 = (function (state_21708){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21728){if((e21728 instanceof Object)){
var ex__20842__auto__ = e21728;
var statearr_21729_21741 = state_21708;
(statearr_21729_21741[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21742 = state_21708;
state_21708 = G__21742;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20839__auto__ = function(state_21708){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20839__auto____1.call(this,state_21708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20839__auto____0;
cljs$core$async$reduce_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20839__auto____1;
return cljs$core$async$reduce_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__))
})();
var state__20952__auto__ = (function (){var statearr_21730 = f__20951__auto__.call(null);
(statearr_21730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_21730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__))
);

return c__20950__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args21743 = [];
var len__17884__auto___21795 = arguments.length;
var i__17885__auto___21796 = (0);
while(true){
if((i__17885__auto___21796 < len__17884__auto___21795)){
args21743.push((arguments[i__17885__auto___21796]));

var G__21797 = (i__17885__auto___21796 + (1));
i__17885__auto___21796 = G__21797;
continue;
} else {
}
break;
}

var G__21745 = args21743.length;
switch (G__21745) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21743.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__){
return (function (state_21770){
var state_val_21771 = (state_21770[(1)]);
if((state_val_21771 === (7))){
var inst_21752 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
var statearr_21772_21799 = state_21770__$1;
(statearr_21772_21799[(2)] = inst_21752);

(statearr_21772_21799[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (1))){
var inst_21746 = cljs.core.seq.call(null,coll);
var inst_21747 = inst_21746;
var state_21770__$1 = (function (){var statearr_21773 = state_21770;
(statearr_21773[(7)] = inst_21747);

return statearr_21773;
})();
var statearr_21774_21800 = state_21770__$1;
(statearr_21774_21800[(2)] = null);

(statearr_21774_21800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (4))){
var inst_21747 = (state_21770[(7)]);
var inst_21750 = cljs.core.first.call(null,inst_21747);
var state_21770__$1 = state_21770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21770__$1,(7),ch,inst_21750);
} else {
if((state_val_21771 === (13))){
var inst_21764 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
var statearr_21775_21801 = state_21770__$1;
(statearr_21775_21801[(2)] = inst_21764);

(statearr_21775_21801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (6))){
var inst_21755 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
if(cljs.core.truth_(inst_21755)){
var statearr_21776_21802 = state_21770__$1;
(statearr_21776_21802[(1)] = (8));

} else {
var statearr_21777_21803 = state_21770__$1;
(statearr_21777_21803[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (3))){
var inst_21768 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21770__$1,inst_21768);
} else {
if((state_val_21771 === (12))){
var state_21770__$1 = state_21770;
var statearr_21778_21804 = state_21770__$1;
(statearr_21778_21804[(2)] = null);

(statearr_21778_21804[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (2))){
var inst_21747 = (state_21770[(7)]);
var state_21770__$1 = state_21770;
if(cljs.core.truth_(inst_21747)){
var statearr_21779_21805 = state_21770__$1;
(statearr_21779_21805[(1)] = (4));

} else {
var statearr_21780_21806 = state_21770__$1;
(statearr_21780_21806[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (11))){
var inst_21761 = cljs.core.async.close_BANG_.call(null,ch);
var state_21770__$1 = state_21770;
var statearr_21781_21807 = state_21770__$1;
(statearr_21781_21807[(2)] = inst_21761);

(statearr_21781_21807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (9))){
var state_21770__$1 = state_21770;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21782_21808 = state_21770__$1;
(statearr_21782_21808[(1)] = (11));

} else {
var statearr_21783_21809 = state_21770__$1;
(statearr_21783_21809[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (5))){
var inst_21747 = (state_21770[(7)]);
var state_21770__$1 = state_21770;
var statearr_21784_21810 = state_21770__$1;
(statearr_21784_21810[(2)] = inst_21747);

(statearr_21784_21810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (10))){
var inst_21766 = (state_21770[(2)]);
var state_21770__$1 = state_21770;
var statearr_21785_21811 = state_21770__$1;
(statearr_21785_21811[(2)] = inst_21766);

(statearr_21785_21811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21771 === (8))){
var inst_21747 = (state_21770[(7)]);
var inst_21757 = cljs.core.next.call(null,inst_21747);
var inst_21747__$1 = inst_21757;
var state_21770__$1 = (function (){var statearr_21786 = state_21770;
(statearr_21786[(7)] = inst_21747__$1);

return statearr_21786;
})();
var statearr_21787_21812 = state_21770__$1;
(statearr_21787_21812[(2)] = null);

(statearr_21787_21812[(1)] = (2));


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
});})(c__20950__auto__))
;
return ((function (switch__20838__auto__,c__20950__auto__){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_21791 = [null,null,null,null,null,null,null,null];
(statearr_21791[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_21791[(1)] = (1));

return statearr_21791;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_21770){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_21770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e21792){if((e21792 instanceof Object)){
var ex__20842__auto__ = e21792;
var statearr_21793_21813 = state_21770;
(statearr_21793_21813[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21814 = state_21770;
state_21770 = G__21814;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_21770){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_21770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__))
})();
var state__20952__auto__ = (function (){var statearr_21794 = f__20951__auto__.call(null);
(statearr_21794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_21794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__))
);

return c__20950__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22036 = (function (mult,ch,cs,meta22037){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22037 = meta22037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22038,meta22037__$1){
var self__ = this;
var _22038__$1 = this;
return (new cljs.core.async.t_cljs$core$async22036(self__.mult,self__.ch,self__.cs,meta22037__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22038){
var self__ = this;
var _22038__$1 = this;
return self__.meta22037;
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22037","meta22037",-1919429509,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22036";

cljs.core.async.t_cljs$core$async22036.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22036");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22036 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22036(mult__$1,ch__$1,cs__$1,meta22037){
return (new cljs.core.async.t_cljs$core$async22036(mult__$1,ch__$1,cs__$1,meta22037));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22036(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__20950__auto___22257 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___22257,cs,m,dchan,dctr,done){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___22257,cs,m,dchan,dctr,done){
return (function (state_22169){
var state_val_22170 = (state_22169[(1)]);
if((state_val_22170 === (7))){
var inst_22165 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22171_22258 = state_22169__$1;
(statearr_22171_22258[(2)] = inst_22165);

(statearr_22171_22258[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (20))){
var inst_22070 = (state_22169[(7)]);
var inst_22080 = cljs.core.first.call(null,inst_22070);
var inst_22081 = cljs.core.nth.call(null,inst_22080,(0),null);
var inst_22082 = cljs.core.nth.call(null,inst_22080,(1),null);
var state_22169__$1 = (function (){var statearr_22172 = state_22169;
(statearr_22172[(8)] = inst_22081);

return statearr_22172;
})();
if(cljs.core.truth_(inst_22082)){
var statearr_22173_22259 = state_22169__$1;
(statearr_22173_22259[(1)] = (22));

} else {
var statearr_22174_22260 = state_22169__$1;
(statearr_22174_22260[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (27))){
var inst_22112 = (state_22169[(9)]);
var inst_22041 = (state_22169[(10)]);
var inst_22117 = (state_22169[(11)]);
var inst_22110 = (state_22169[(12)]);
var inst_22117__$1 = cljs.core._nth.call(null,inst_22110,inst_22112);
var inst_22118 = cljs.core.async.put_BANG_.call(null,inst_22117__$1,inst_22041,done);
var state_22169__$1 = (function (){var statearr_22175 = state_22169;
(statearr_22175[(11)] = inst_22117__$1);

return statearr_22175;
})();
if(cljs.core.truth_(inst_22118)){
var statearr_22176_22261 = state_22169__$1;
(statearr_22176_22261[(1)] = (30));

} else {
var statearr_22177_22262 = state_22169__$1;
(statearr_22177_22262[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (1))){
var state_22169__$1 = state_22169;
var statearr_22178_22263 = state_22169__$1;
(statearr_22178_22263[(2)] = null);

(statearr_22178_22263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (24))){
var inst_22070 = (state_22169[(7)]);
var inst_22087 = (state_22169[(2)]);
var inst_22088 = cljs.core.next.call(null,inst_22070);
var inst_22050 = inst_22088;
var inst_22051 = null;
var inst_22052 = (0);
var inst_22053 = (0);
var state_22169__$1 = (function (){var statearr_22179 = state_22169;
(statearr_22179[(13)] = inst_22053);

(statearr_22179[(14)] = inst_22052);

(statearr_22179[(15)] = inst_22050);

(statearr_22179[(16)] = inst_22051);

(statearr_22179[(17)] = inst_22087);

return statearr_22179;
})();
var statearr_22180_22264 = state_22169__$1;
(statearr_22180_22264[(2)] = null);

(statearr_22180_22264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (39))){
var state_22169__$1 = state_22169;
var statearr_22184_22265 = state_22169__$1;
(statearr_22184_22265[(2)] = null);

(statearr_22184_22265[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (4))){
var inst_22041 = (state_22169[(10)]);
var inst_22041__$1 = (state_22169[(2)]);
var inst_22042 = (inst_22041__$1 == null);
var state_22169__$1 = (function (){var statearr_22185 = state_22169;
(statearr_22185[(10)] = inst_22041__$1);

return statearr_22185;
})();
if(cljs.core.truth_(inst_22042)){
var statearr_22186_22266 = state_22169__$1;
(statearr_22186_22266[(1)] = (5));

} else {
var statearr_22187_22267 = state_22169__$1;
(statearr_22187_22267[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (15))){
var inst_22053 = (state_22169[(13)]);
var inst_22052 = (state_22169[(14)]);
var inst_22050 = (state_22169[(15)]);
var inst_22051 = (state_22169[(16)]);
var inst_22066 = (state_22169[(2)]);
var inst_22067 = (inst_22053 + (1));
var tmp22181 = inst_22052;
var tmp22182 = inst_22050;
var tmp22183 = inst_22051;
var inst_22050__$1 = tmp22182;
var inst_22051__$1 = tmp22183;
var inst_22052__$1 = tmp22181;
var inst_22053__$1 = inst_22067;
var state_22169__$1 = (function (){var statearr_22188 = state_22169;
(statearr_22188[(18)] = inst_22066);

(statearr_22188[(13)] = inst_22053__$1);

(statearr_22188[(14)] = inst_22052__$1);

(statearr_22188[(15)] = inst_22050__$1);

(statearr_22188[(16)] = inst_22051__$1);

return statearr_22188;
})();
var statearr_22189_22268 = state_22169__$1;
(statearr_22189_22268[(2)] = null);

(statearr_22189_22268[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (21))){
var inst_22091 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22193_22269 = state_22169__$1;
(statearr_22193_22269[(2)] = inst_22091);

(statearr_22193_22269[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (31))){
var inst_22117 = (state_22169[(11)]);
var inst_22121 = done.call(null,null);
var inst_22122 = cljs.core.async.untap_STAR_.call(null,m,inst_22117);
var state_22169__$1 = (function (){var statearr_22194 = state_22169;
(statearr_22194[(19)] = inst_22121);

return statearr_22194;
})();
var statearr_22195_22270 = state_22169__$1;
(statearr_22195_22270[(2)] = inst_22122);

(statearr_22195_22270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (32))){
var inst_22112 = (state_22169[(9)]);
var inst_22111 = (state_22169[(20)]);
var inst_22109 = (state_22169[(21)]);
var inst_22110 = (state_22169[(12)]);
var inst_22124 = (state_22169[(2)]);
var inst_22125 = (inst_22112 + (1));
var tmp22190 = inst_22111;
var tmp22191 = inst_22109;
var tmp22192 = inst_22110;
var inst_22109__$1 = tmp22191;
var inst_22110__$1 = tmp22192;
var inst_22111__$1 = tmp22190;
var inst_22112__$1 = inst_22125;
var state_22169__$1 = (function (){var statearr_22196 = state_22169;
(statearr_22196[(9)] = inst_22112__$1);

(statearr_22196[(22)] = inst_22124);

(statearr_22196[(20)] = inst_22111__$1);

(statearr_22196[(21)] = inst_22109__$1);

(statearr_22196[(12)] = inst_22110__$1);

return statearr_22196;
})();
var statearr_22197_22271 = state_22169__$1;
(statearr_22197_22271[(2)] = null);

(statearr_22197_22271[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (40))){
var inst_22137 = (state_22169[(23)]);
var inst_22141 = done.call(null,null);
var inst_22142 = cljs.core.async.untap_STAR_.call(null,m,inst_22137);
var state_22169__$1 = (function (){var statearr_22198 = state_22169;
(statearr_22198[(24)] = inst_22141);

return statearr_22198;
})();
var statearr_22199_22272 = state_22169__$1;
(statearr_22199_22272[(2)] = inst_22142);

(statearr_22199_22272[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (33))){
var inst_22128 = (state_22169[(25)]);
var inst_22130 = cljs.core.chunked_seq_QMARK_.call(null,inst_22128);
var state_22169__$1 = state_22169;
if(inst_22130){
var statearr_22200_22273 = state_22169__$1;
(statearr_22200_22273[(1)] = (36));

} else {
var statearr_22201_22274 = state_22169__$1;
(statearr_22201_22274[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (13))){
var inst_22060 = (state_22169[(26)]);
var inst_22063 = cljs.core.async.close_BANG_.call(null,inst_22060);
var state_22169__$1 = state_22169;
var statearr_22202_22275 = state_22169__$1;
(statearr_22202_22275[(2)] = inst_22063);

(statearr_22202_22275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (22))){
var inst_22081 = (state_22169[(8)]);
var inst_22084 = cljs.core.async.close_BANG_.call(null,inst_22081);
var state_22169__$1 = state_22169;
var statearr_22203_22276 = state_22169__$1;
(statearr_22203_22276[(2)] = inst_22084);

(statearr_22203_22276[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (36))){
var inst_22128 = (state_22169[(25)]);
var inst_22132 = cljs.core.chunk_first.call(null,inst_22128);
var inst_22133 = cljs.core.chunk_rest.call(null,inst_22128);
var inst_22134 = cljs.core.count.call(null,inst_22132);
var inst_22109 = inst_22133;
var inst_22110 = inst_22132;
var inst_22111 = inst_22134;
var inst_22112 = (0);
var state_22169__$1 = (function (){var statearr_22204 = state_22169;
(statearr_22204[(9)] = inst_22112);

(statearr_22204[(20)] = inst_22111);

(statearr_22204[(21)] = inst_22109);

(statearr_22204[(12)] = inst_22110);

return statearr_22204;
})();
var statearr_22205_22277 = state_22169__$1;
(statearr_22205_22277[(2)] = null);

(statearr_22205_22277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (41))){
var inst_22128 = (state_22169[(25)]);
var inst_22144 = (state_22169[(2)]);
var inst_22145 = cljs.core.next.call(null,inst_22128);
var inst_22109 = inst_22145;
var inst_22110 = null;
var inst_22111 = (0);
var inst_22112 = (0);
var state_22169__$1 = (function (){var statearr_22206 = state_22169;
(statearr_22206[(9)] = inst_22112);

(statearr_22206[(20)] = inst_22111);

(statearr_22206[(27)] = inst_22144);

(statearr_22206[(21)] = inst_22109);

(statearr_22206[(12)] = inst_22110);

return statearr_22206;
})();
var statearr_22207_22278 = state_22169__$1;
(statearr_22207_22278[(2)] = null);

(statearr_22207_22278[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (43))){
var state_22169__$1 = state_22169;
var statearr_22208_22279 = state_22169__$1;
(statearr_22208_22279[(2)] = null);

(statearr_22208_22279[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (29))){
var inst_22153 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22209_22280 = state_22169__$1;
(statearr_22209_22280[(2)] = inst_22153);

(statearr_22209_22280[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (44))){
var inst_22162 = (state_22169[(2)]);
var state_22169__$1 = (function (){var statearr_22210 = state_22169;
(statearr_22210[(28)] = inst_22162);

return statearr_22210;
})();
var statearr_22211_22281 = state_22169__$1;
(statearr_22211_22281[(2)] = null);

(statearr_22211_22281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (6))){
var inst_22101 = (state_22169[(29)]);
var inst_22100 = cljs.core.deref.call(null,cs);
var inst_22101__$1 = cljs.core.keys.call(null,inst_22100);
var inst_22102 = cljs.core.count.call(null,inst_22101__$1);
var inst_22103 = cljs.core.reset_BANG_.call(null,dctr,inst_22102);
var inst_22108 = cljs.core.seq.call(null,inst_22101__$1);
var inst_22109 = inst_22108;
var inst_22110 = null;
var inst_22111 = (0);
var inst_22112 = (0);
var state_22169__$1 = (function (){var statearr_22212 = state_22169;
(statearr_22212[(9)] = inst_22112);

(statearr_22212[(20)] = inst_22111);

(statearr_22212[(29)] = inst_22101__$1);

(statearr_22212[(30)] = inst_22103);

(statearr_22212[(21)] = inst_22109);

(statearr_22212[(12)] = inst_22110);

return statearr_22212;
})();
var statearr_22213_22282 = state_22169__$1;
(statearr_22213_22282[(2)] = null);

(statearr_22213_22282[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (28))){
var inst_22128 = (state_22169[(25)]);
var inst_22109 = (state_22169[(21)]);
var inst_22128__$1 = cljs.core.seq.call(null,inst_22109);
var state_22169__$1 = (function (){var statearr_22214 = state_22169;
(statearr_22214[(25)] = inst_22128__$1);

return statearr_22214;
})();
if(inst_22128__$1){
var statearr_22215_22283 = state_22169__$1;
(statearr_22215_22283[(1)] = (33));

} else {
var statearr_22216_22284 = state_22169__$1;
(statearr_22216_22284[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (25))){
var inst_22112 = (state_22169[(9)]);
var inst_22111 = (state_22169[(20)]);
var inst_22114 = (inst_22112 < inst_22111);
var inst_22115 = inst_22114;
var state_22169__$1 = state_22169;
if(cljs.core.truth_(inst_22115)){
var statearr_22217_22285 = state_22169__$1;
(statearr_22217_22285[(1)] = (27));

} else {
var statearr_22218_22286 = state_22169__$1;
(statearr_22218_22286[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (34))){
var state_22169__$1 = state_22169;
var statearr_22219_22287 = state_22169__$1;
(statearr_22219_22287[(2)] = null);

(statearr_22219_22287[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (17))){
var state_22169__$1 = state_22169;
var statearr_22220_22288 = state_22169__$1;
(statearr_22220_22288[(2)] = null);

(statearr_22220_22288[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (3))){
var inst_22167 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22169__$1,inst_22167);
} else {
if((state_val_22170 === (12))){
var inst_22096 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22221_22289 = state_22169__$1;
(statearr_22221_22289[(2)] = inst_22096);

(statearr_22221_22289[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (2))){
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(4),ch);
} else {
if((state_val_22170 === (23))){
var state_22169__$1 = state_22169;
var statearr_22222_22290 = state_22169__$1;
(statearr_22222_22290[(2)] = null);

(statearr_22222_22290[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (35))){
var inst_22151 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22223_22291 = state_22169__$1;
(statearr_22223_22291[(2)] = inst_22151);

(statearr_22223_22291[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (19))){
var inst_22070 = (state_22169[(7)]);
var inst_22074 = cljs.core.chunk_first.call(null,inst_22070);
var inst_22075 = cljs.core.chunk_rest.call(null,inst_22070);
var inst_22076 = cljs.core.count.call(null,inst_22074);
var inst_22050 = inst_22075;
var inst_22051 = inst_22074;
var inst_22052 = inst_22076;
var inst_22053 = (0);
var state_22169__$1 = (function (){var statearr_22224 = state_22169;
(statearr_22224[(13)] = inst_22053);

(statearr_22224[(14)] = inst_22052);

(statearr_22224[(15)] = inst_22050);

(statearr_22224[(16)] = inst_22051);

return statearr_22224;
})();
var statearr_22225_22292 = state_22169__$1;
(statearr_22225_22292[(2)] = null);

(statearr_22225_22292[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (11))){
var inst_22050 = (state_22169[(15)]);
var inst_22070 = (state_22169[(7)]);
var inst_22070__$1 = cljs.core.seq.call(null,inst_22050);
var state_22169__$1 = (function (){var statearr_22226 = state_22169;
(statearr_22226[(7)] = inst_22070__$1);

return statearr_22226;
})();
if(inst_22070__$1){
var statearr_22227_22293 = state_22169__$1;
(statearr_22227_22293[(1)] = (16));

} else {
var statearr_22228_22294 = state_22169__$1;
(statearr_22228_22294[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (9))){
var inst_22098 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22229_22295 = state_22169__$1;
(statearr_22229_22295[(2)] = inst_22098);

(statearr_22229_22295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (5))){
var inst_22048 = cljs.core.deref.call(null,cs);
var inst_22049 = cljs.core.seq.call(null,inst_22048);
var inst_22050 = inst_22049;
var inst_22051 = null;
var inst_22052 = (0);
var inst_22053 = (0);
var state_22169__$1 = (function (){var statearr_22230 = state_22169;
(statearr_22230[(13)] = inst_22053);

(statearr_22230[(14)] = inst_22052);

(statearr_22230[(15)] = inst_22050);

(statearr_22230[(16)] = inst_22051);

return statearr_22230;
})();
var statearr_22231_22296 = state_22169__$1;
(statearr_22231_22296[(2)] = null);

(statearr_22231_22296[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (14))){
var state_22169__$1 = state_22169;
var statearr_22232_22297 = state_22169__$1;
(statearr_22232_22297[(2)] = null);

(statearr_22232_22297[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (45))){
var inst_22159 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22233_22298 = state_22169__$1;
(statearr_22233_22298[(2)] = inst_22159);

(statearr_22233_22298[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (26))){
var inst_22101 = (state_22169[(29)]);
var inst_22155 = (state_22169[(2)]);
var inst_22156 = cljs.core.seq.call(null,inst_22101);
var state_22169__$1 = (function (){var statearr_22234 = state_22169;
(statearr_22234[(31)] = inst_22155);

return statearr_22234;
})();
if(inst_22156){
var statearr_22235_22299 = state_22169__$1;
(statearr_22235_22299[(1)] = (42));

} else {
var statearr_22236_22300 = state_22169__$1;
(statearr_22236_22300[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (16))){
var inst_22070 = (state_22169[(7)]);
var inst_22072 = cljs.core.chunked_seq_QMARK_.call(null,inst_22070);
var state_22169__$1 = state_22169;
if(inst_22072){
var statearr_22237_22301 = state_22169__$1;
(statearr_22237_22301[(1)] = (19));

} else {
var statearr_22238_22302 = state_22169__$1;
(statearr_22238_22302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (38))){
var inst_22148 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22239_22303 = state_22169__$1;
(statearr_22239_22303[(2)] = inst_22148);

(statearr_22239_22303[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (30))){
var state_22169__$1 = state_22169;
var statearr_22240_22304 = state_22169__$1;
(statearr_22240_22304[(2)] = null);

(statearr_22240_22304[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (10))){
var inst_22053 = (state_22169[(13)]);
var inst_22051 = (state_22169[(16)]);
var inst_22059 = cljs.core._nth.call(null,inst_22051,inst_22053);
var inst_22060 = cljs.core.nth.call(null,inst_22059,(0),null);
var inst_22061 = cljs.core.nth.call(null,inst_22059,(1),null);
var state_22169__$1 = (function (){var statearr_22241 = state_22169;
(statearr_22241[(26)] = inst_22060);

return statearr_22241;
})();
if(cljs.core.truth_(inst_22061)){
var statearr_22242_22305 = state_22169__$1;
(statearr_22242_22305[(1)] = (13));

} else {
var statearr_22243_22306 = state_22169__$1;
(statearr_22243_22306[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (18))){
var inst_22094 = (state_22169[(2)]);
var state_22169__$1 = state_22169;
var statearr_22244_22307 = state_22169__$1;
(statearr_22244_22307[(2)] = inst_22094);

(statearr_22244_22307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (42))){
var state_22169__$1 = state_22169;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22169__$1,(45),dchan);
} else {
if((state_val_22170 === (37))){
var inst_22041 = (state_22169[(10)]);
var inst_22128 = (state_22169[(25)]);
var inst_22137 = (state_22169[(23)]);
var inst_22137__$1 = cljs.core.first.call(null,inst_22128);
var inst_22138 = cljs.core.async.put_BANG_.call(null,inst_22137__$1,inst_22041,done);
var state_22169__$1 = (function (){var statearr_22245 = state_22169;
(statearr_22245[(23)] = inst_22137__$1);

return statearr_22245;
})();
if(cljs.core.truth_(inst_22138)){
var statearr_22246_22308 = state_22169__$1;
(statearr_22246_22308[(1)] = (39));

} else {
var statearr_22247_22309 = state_22169__$1;
(statearr_22247_22309[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22170 === (8))){
var inst_22053 = (state_22169[(13)]);
var inst_22052 = (state_22169[(14)]);
var inst_22055 = (inst_22053 < inst_22052);
var inst_22056 = inst_22055;
var state_22169__$1 = state_22169;
if(cljs.core.truth_(inst_22056)){
var statearr_22248_22310 = state_22169__$1;
(statearr_22248_22310[(1)] = (10));

} else {
var statearr_22249_22311 = state_22169__$1;
(statearr_22249_22311[(1)] = (11));

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
});})(c__20950__auto___22257,cs,m,dchan,dctr,done))
;
return ((function (switch__20838__auto__,c__20950__auto___22257,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20839__auto__ = null;
var cljs$core$async$mult_$_state_machine__20839__auto____0 = (function (){
var statearr_22253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22253[(0)] = cljs$core$async$mult_$_state_machine__20839__auto__);

(statearr_22253[(1)] = (1));

return statearr_22253;
});
var cljs$core$async$mult_$_state_machine__20839__auto____1 = (function (state_22169){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_22169);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e22254){if((e22254 instanceof Object)){
var ex__20842__auto__ = e22254;
var statearr_22255_22312 = state_22169;
(statearr_22255_22312[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22313 = state_22169;
state_22169 = G__22313;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20839__auto__ = function(state_22169){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20839__auto____1.call(this,state_22169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20839__auto____0;
cljs$core$async$mult_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20839__auto____1;
return cljs$core$async$mult_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___22257,cs,m,dchan,dctr,done))
})();
var state__20952__auto__ = (function (){var statearr_22256 = f__20951__auto__.call(null);
(statearr_22256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___22257);

return statearr_22256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___22257,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args22314 = [];
var len__17884__auto___22317 = arguments.length;
var i__17885__auto___22318 = (0);
while(true){
if((i__17885__auto___22318 < len__17884__auto___22317)){
args22314.push((arguments[i__17885__auto___22318]));

var G__22319 = (i__17885__auto___22318 + (1));
i__17885__auto___22318 = G__22319;
continue;
} else {
}
break;
}

var G__22316 = args22314.length;
switch (G__22316) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22314.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___22331 = arguments.length;
var i__17885__auto___22332 = (0);
while(true){
if((i__17885__auto___22332 < len__17884__auto___22331)){
args__17891__auto__.push((arguments[i__17885__auto___22332]));

var G__22333 = (i__17885__auto___22332 + (1));
i__17885__auto___22332 = G__22333;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22325){
var map__22326 = p__22325;
var map__22326__$1 = ((((!((map__22326 == null)))?((((map__22326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22326):map__22326);
var opts = map__22326__$1;
var statearr_22328_22334 = state;
(statearr_22328_22334[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__22326,map__22326__$1,opts){
return (function (val){
var statearr_22329_22335 = state;
(statearr_22329_22335[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__22326,map__22326__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_22330_22336 = state;
(statearr_22330_22336[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22321){
var G__22322 = cljs.core.first.call(null,seq22321);
var seq22321__$1 = cljs.core.next.call(null,seq22321);
var G__22323 = cljs.core.first.call(null,seq22321__$1);
var seq22321__$2 = cljs.core.next.call(null,seq22321__$1);
var G__22324 = cljs.core.first.call(null,seq22321__$2);
var seq22321__$3 = cljs.core.next.call(null,seq22321__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22322,G__22323,G__22324,seq22321__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22500 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22501){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22501 = meta22501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22502,meta22501__$1){
var self__ = this;
var _22502__$1 = this;
return (new cljs.core.async.t_cljs$core$async22500(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22501__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_22502){
var self__ = this;
var _22502__$1 = this;
return self__.meta22501;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22501","meta22501",1942918068,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async22500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22500";

cljs.core.async.t_cljs$core$async22500.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22500");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async22500 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async22500(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22501){
return (new cljs.core.async.t_cljs$core$async22500(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22501));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async22500(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20950__auto___22663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_22600){
var state_val_22601 = (state_22600[(1)]);
if((state_val_22601 === (7))){
var inst_22518 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
var statearr_22602_22664 = state_22600__$1;
(statearr_22602_22664[(2)] = inst_22518);

(statearr_22602_22664[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (20))){
var inst_22530 = (state_22600[(7)]);
var state_22600__$1 = state_22600;
var statearr_22603_22665 = state_22600__$1;
(statearr_22603_22665[(2)] = inst_22530);

(statearr_22603_22665[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (27))){
var state_22600__$1 = state_22600;
var statearr_22604_22666 = state_22600__$1;
(statearr_22604_22666[(2)] = null);

(statearr_22604_22666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (1))){
var inst_22506 = (state_22600[(8)]);
var inst_22506__$1 = calc_state.call(null);
var inst_22508 = (inst_22506__$1 == null);
var inst_22509 = cljs.core.not.call(null,inst_22508);
var state_22600__$1 = (function (){var statearr_22605 = state_22600;
(statearr_22605[(8)] = inst_22506__$1);

return statearr_22605;
})();
if(inst_22509){
var statearr_22606_22667 = state_22600__$1;
(statearr_22606_22667[(1)] = (2));

} else {
var statearr_22607_22668 = state_22600__$1;
(statearr_22607_22668[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (24))){
var inst_22553 = (state_22600[(9)]);
var inst_22574 = (state_22600[(10)]);
var inst_22560 = (state_22600[(11)]);
var inst_22574__$1 = inst_22553.call(null,inst_22560);
var state_22600__$1 = (function (){var statearr_22608 = state_22600;
(statearr_22608[(10)] = inst_22574__$1);

return statearr_22608;
})();
if(cljs.core.truth_(inst_22574__$1)){
var statearr_22609_22669 = state_22600__$1;
(statearr_22609_22669[(1)] = (29));

} else {
var statearr_22610_22670 = state_22600__$1;
(statearr_22610_22670[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (4))){
var inst_22521 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22521)){
var statearr_22611_22671 = state_22600__$1;
(statearr_22611_22671[(1)] = (8));

} else {
var statearr_22612_22672 = state_22600__$1;
(statearr_22612_22672[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (15))){
var inst_22547 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22547)){
var statearr_22613_22673 = state_22600__$1;
(statearr_22613_22673[(1)] = (19));

} else {
var statearr_22614_22674 = state_22600__$1;
(statearr_22614_22674[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (21))){
var inst_22552 = (state_22600[(12)]);
var inst_22552__$1 = (state_22600[(2)]);
var inst_22553 = cljs.core.get.call(null,inst_22552__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22554 = cljs.core.get.call(null,inst_22552__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22555 = cljs.core.get.call(null,inst_22552__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22600__$1 = (function (){var statearr_22615 = state_22600;
(statearr_22615[(9)] = inst_22553);

(statearr_22615[(12)] = inst_22552__$1);

(statearr_22615[(13)] = inst_22554);

return statearr_22615;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22600__$1,(22),inst_22555);
} else {
if((state_val_22601 === (31))){
var inst_22582 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22582)){
var statearr_22616_22675 = state_22600__$1;
(statearr_22616_22675[(1)] = (32));

} else {
var statearr_22617_22676 = state_22600__$1;
(statearr_22617_22676[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (32))){
var inst_22559 = (state_22600[(14)]);
var state_22600__$1 = state_22600;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22600__$1,(35),out,inst_22559);
} else {
if((state_val_22601 === (33))){
var inst_22552 = (state_22600[(12)]);
var inst_22530 = inst_22552;
var state_22600__$1 = (function (){var statearr_22618 = state_22600;
(statearr_22618[(7)] = inst_22530);

return statearr_22618;
})();
var statearr_22619_22677 = state_22600__$1;
(statearr_22619_22677[(2)] = null);

(statearr_22619_22677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (13))){
var inst_22530 = (state_22600[(7)]);
var inst_22537 = inst_22530.cljs$lang$protocol_mask$partition0$;
var inst_22538 = (inst_22537 & (64));
var inst_22539 = inst_22530.cljs$core$ISeq$;
var inst_22540 = (inst_22538) || (inst_22539);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22540)){
var statearr_22620_22678 = state_22600__$1;
(statearr_22620_22678[(1)] = (16));

} else {
var statearr_22621_22679 = state_22600__$1;
(statearr_22621_22679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (22))){
var inst_22559 = (state_22600[(14)]);
var inst_22560 = (state_22600[(11)]);
var inst_22558 = (state_22600[(2)]);
var inst_22559__$1 = cljs.core.nth.call(null,inst_22558,(0),null);
var inst_22560__$1 = cljs.core.nth.call(null,inst_22558,(1),null);
var inst_22561 = (inst_22559__$1 == null);
var inst_22562 = cljs.core._EQ_.call(null,inst_22560__$1,change);
var inst_22563 = (inst_22561) || (inst_22562);
var state_22600__$1 = (function (){var statearr_22622 = state_22600;
(statearr_22622[(14)] = inst_22559__$1);

(statearr_22622[(11)] = inst_22560__$1);

return statearr_22622;
})();
if(cljs.core.truth_(inst_22563)){
var statearr_22623_22680 = state_22600__$1;
(statearr_22623_22680[(1)] = (23));

} else {
var statearr_22624_22681 = state_22600__$1;
(statearr_22624_22681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (36))){
var inst_22552 = (state_22600[(12)]);
var inst_22530 = inst_22552;
var state_22600__$1 = (function (){var statearr_22625 = state_22600;
(statearr_22625[(7)] = inst_22530);

return statearr_22625;
})();
var statearr_22626_22682 = state_22600__$1;
(statearr_22626_22682[(2)] = null);

(statearr_22626_22682[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (29))){
var inst_22574 = (state_22600[(10)]);
var state_22600__$1 = state_22600;
var statearr_22627_22683 = state_22600__$1;
(statearr_22627_22683[(2)] = inst_22574);

(statearr_22627_22683[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (6))){
var state_22600__$1 = state_22600;
var statearr_22628_22684 = state_22600__$1;
(statearr_22628_22684[(2)] = false);

(statearr_22628_22684[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (28))){
var inst_22570 = (state_22600[(2)]);
var inst_22571 = calc_state.call(null);
var inst_22530 = inst_22571;
var state_22600__$1 = (function (){var statearr_22629 = state_22600;
(statearr_22629[(7)] = inst_22530);

(statearr_22629[(15)] = inst_22570);

return statearr_22629;
})();
var statearr_22630_22685 = state_22600__$1;
(statearr_22630_22685[(2)] = null);

(statearr_22630_22685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (25))){
var inst_22596 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
var statearr_22631_22686 = state_22600__$1;
(statearr_22631_22686[(2)] = inst_22596);

(statearr_22631_22686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (34))){
var inst_22594 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
var statearr_22632_22687 = state_22600__$1;
(statearr_22632_22687[(2)] = inst_22594);

(statearr_22632_22687[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (17))){
var state_22600__$1 = state_22600;
var statearr_22633_22688 = state_22600__$1;
(statearr_22633_22688[(2)] = false);

(statearr_22633_22688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (3))){
var state_22600__$1 = state_22600;
var statearr_22634_22689 = state_22600__$1;
(statearr_22634_22689[(2)] = false);

(statearr_22634_22689[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (12))){
var inst_22598 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22600__$1,inst_22598);
} else {
if((state_val_22601 === (2))){
var inst_22506 = (state_22600[(8)]);
var inst_22511 = inst_22506.cljs$lang$protocol_mask$partition0$;
var inst_22512 = (inst_22511 & (64));
var inst_22513 = inst_22506.cljs$core$ISeq$;
var inst_22514 = (inst_22512) || (inst_22513);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22514)){
var statearr_22635_22690 = state_22600__$1;
(statearr_22635_22690[(1)] = (5));

} else {
var statearr_22636_22691 = state_22600__$1;
(statearr_22636_22691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (23))){
var inst_22559 = (state_22600[(14)]);
var inst_22565 = (inst_22559 == null);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22565)){
var statearr_22637_22692 = state_22600__$1;
(statearr_22637_22692[(1)] = (26));

} else {
var statearr_22638_22693 = state_22600__$1;
(statearr_22638_22693[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (35))){
var inst_22585 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
if(cljs.core.truth_(inst_22585)){
var statearr_22639_22694 = state_22600__$1;
(statearr_22639_22694[(1)] = (36));

} else {
var statearr_22640_22695 = state_22600__$1;
(statearr_22640_22695[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (19))){
var inst_22530 = (state_22600[(7)]);
var inst_22549 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22530);
var state_22600__$1 = state_22600;
var statearr_22641_22696 = state_22600__$1;
(statearr_22641_22696[(2)] = inst_22549);

(statearr_22641_22696[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (11))){
var inst_22530 = (state_22600[(7)]);
var inst_22534 = (inst_22530 == null);
var inst_22535 = cljs.core.not.call(null,inst_22534);
var state_22600__$1 = state_22600;
if(inst_22535){
var statearr_22642_22697 = state_22600__$1;
(statearr_22642_22697[(1)] = (13));

} else {
var statearr_22643_22698 = state_22600__$1;
(statearr_22643_22698[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (9))){
var inst_22506 = (state_22600[(8)]);
var state_22600__$1 = state_22600;
var statearr_22644_22699 = state_22600__$1;
(statearr_22644_22699[(2)] = inst_22506);

(statearr_22644_22699[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (5))){
var state_22600__$1 = state_22600;
var statearr_22645_22700 = state_22600__$1;
(statearr_22645_22700[(2)] = true);

(statearr_22645_22700[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (14))){
var state_22600__$1 = state_22600;
var statearr_22646_22701 = state_22600__$1;
(statearr_22646_22701[(2)] = false);

(statearr_22646_22701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (26))){
var inst_22560 = (state_22600[(11)]);
var inst_22567 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22560);
var state_22600__$1 = state_22600;
var statearr_22647_22702 = state_22600__$1;
(statearr_22647_22702[(2)] = inst_22567);

(statearr_22647_22702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (16))){
var state_22600__$1 = state_22600;
var statearr_22648_22703 = state_22600__$1;
(statearr_22648_22703[(2)] = true);

(statearr_22648_22703[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (38))){
var inst_22590 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
var statearr_22649_22704 = state_22600__$1;
(statearr_22649_22704[(2)] = inst_22590);

(statearr_22649_22704[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (30))){
var inst_22553 = (state_22600[(9)]);
var inst_22560 = (state_22600[(11)]);
var inst_22554 = (state_22600[(13)]);
var inst_22577 = cljs.core.empty_QMARK_.call(null,inst_22553);
var inst_22578 = inst_22554.call(null,inst_22560);
var inst_22579 = cljs.core.not.call(null,inst_22578);
var inst_22580 = (inst_22577) && (inst_22579);
var state_22600__$1 = state_22600;
var statearr_22650_22705 = state_22600__$1;
(statearr_22650_22705[(2)] = inst_22580);

(statearr_22650_22705[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (10))){
var inst_22506 = (state_22600[(8)]);
var inst_22526 = (state_22600[(2)]);
var inst_22527 = cljs.core.get.call(null,inst_22526,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22528 = cljs.core.get.call(null,inst_22526,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22529 = cljs.core.get.call(null,inst_22526,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22530 = inst_22506;
var state_22600__$1 = (function (){var statearr_22651 = state_22600;
(statearr_22651[(16)] = inst_22529);

(statearr_22651[(17)] = inst_22528);

(statearr_22651[(18)] = inst_22527);

(statearr_22651[(7)] = inst_22530);

return statearr_22651;
})();
var statearr_22652_22706 = state_22600__$1;
(statearr_22652_22706[(2)] = null);

(statearr_22652_22706[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (18))){
var inst_22544 = (state_22600[(2)]);
var state_22600__$1 = state_22600;
var statearr_22653_22707 = state_22600__$1;
(statearr_22653_22707[(2)] = inst_22544);

(statearr_22653_22707[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (37))){
var state_22600__$1 = state_22600;
var statearr_22654_22708 = state_22600__$1;
(statearr_22654_22708[(2)] = null);

(statearr_22654_22708[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22601 === (8))){
var inst_22506 = (state_22600[(8)]);
var inst_22523 = cljs.core.apply.call(null,cljs.core.hash_map,inst_22506);
var state_22600__$1 = state_22600;
var statearr_22655_22709 = state_22600__$1;
(statearr_22655_22709[(2)] = inst_22523);

(statearr_22655_22709[(1)] = (10));


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
});})(c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20838__auto__,c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20839__auto__ = null;
var cljs$core$async$mix_$_state_machine__20839__auto____0 = (function (){
var statearr_22659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22659[(0)] = cljs$core$async$mix_$_state_machine__20839__auto__);

(statearr_22659[(1)] = (1));

return statearr_22659;
});
var cljs$core$async$mix_$_state_machine__20839__auto____1 = (function (state_22600){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_22600);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e22660){if((e22660 instanceof Object)){
var ex__20842__auto__ = e22660;
var statearr_22661_22710 = state_22600;
(statearr_22661_22710[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22600);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22660;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22711 = state_22600;
state_22600 = G__22711;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20839__auto__ = function(state_22600){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20839__auto____1.call(this,state_22600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20839__auto____0;
cljs$core$async$mix_$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20839__auto____1;
return cljs$core$async$mix_$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20952__auto__ = (function (){var statearr_22662 = f__20951__auto__.call(null);
(statearr_22662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___22663);

return statearr_22662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___22663,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args22712 = [];
var len__17884__auto___22715 = arguments.length;
var i__17885__auto___22716 = (0);
while(true){
if((i__17885__auto___22716 < len__17884__auto___22715)){
args22712.push((arguments[i__17885__auto___22716]));

var G__22717 = (i__17885__auto___22716 + (1));
i__17885__auto___22716 = G__22717;
continue;
} else {
}
break;
}

var G__22714 = args22712.length;
switch (G__22714) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22712.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args22720 = [];
var len__17884__auto___22845 = arguments.length;
var i__17885__auto___22846 = (0);
while(true){
if((i__17885__auto___22846 < len__17884__auto___22845)){
args22720.push((arguments[i__17885__auto___22846]));

var G__22847 = (i__17885__auto___22846 + (1));
i__17885__auto___22846 = G__22847;
continue;
} else {
}
break;
}

var G__22722 = args22720.length;
switch (G__22722) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22720.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__22719_SHARP_){
if(cljs.core.truth_(p1__22719_SHARP_.call(null,topic))){
return p1__22719_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22719_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22723 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22723 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22724){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22724 = meta22724;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22725,meta22724__$1){
var self__ = this;
var _22725__$1 = this;
return (new cljs.core.async.t_cljs$core$async22723(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22724__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22725){
var self__ = this;
var _22725__$1 = this;
return self__.meta22724;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22724","meta22724",1184316421,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22723.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22723.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22723";

cljs.core.async.t_cljs$core$async22723.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22723");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22723 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22724){
return (new cljs.core.async.t_cljs$core$async22723(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22724));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22723(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20950__auto___22849 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___22849,mults,ensure_mult,p){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___22849,mults,ensure_mult,p){
return (function (state_22797){
var state_val_22798 = (state_22797[(1)]);
if((state_val_22798 === (7))){
var inst_22793 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22799_22850 = state_22797__$1;
(statearr_22799_22850[(2)] = inst_22793);

(statearr_22799_22850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (20))){
var state_22797__$1 = state_22797;
var statearr_22800_22851 = state_22797__$1;
(statearr_22800_22851[(2)] = null);

(statearr_22800_22851[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (1))){
var state_22797__$1 = state_22797;
var statearr_22801_22852 = state_22797__$1;
(statearr_22801_22852[(2)] = null);

(statearr_22801_22852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (24))){
var inst_22776 = (state_22797[(7)]);
var inst_22785 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22776);
var state_22797__$1 = state_22797;
var statearr_22802_22853 = state_22797__$1;
(statearr_22802_22853[(2)] = inst_22785);

(statearr_22802_22853[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (4))){
var inst_22728 = (state_22797[(8)]);
var inst_22728__$1 = (state_22797[(2)]);
var inst_22729 = (inst_22728__$1 == null);
var state_22797__$1 = (function (){var statearr_22803 = state_22797;
(statearr_22803[(8)] = inst_22728__$1);

return statearr_22803;
})();
if(cljs.core.truth_(inst_22729)){
var statearr_22804_22854 = state_22797__$1;
(statearr_22804_22854[(1)] = (5));

} else {
var statearr_22805_22855 = state_22797__$1;
(statearr_22805_22855[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (15))){
var inst_22770 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22806_22856 = state_22797__$1;
(statearr_22806_22856[(2)] = inst_22770);

(statearr_22806_22856[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (21))){
var inst_22790 = (state_22797[(2)]);
var state_22797__$1 = (function (){var statearr_22807 = state_22797;
(statearr_22807[(9)] = inst_22790);

return statearr_22807;
})();
var statearr_22808_22857 = state_22797__$1;
(statearr_22808_22857[(2)] = null);

(statearr_22808_22857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (13))){
var inst_22752 = (state_22797[(10)]);
var inst_22754 = cljs.core.chunked_seq_QMARK_.call(null,inst_22752);
var state_22797__$1 = state_22797;
if(inst_22754){
var statearr_22809_22858 = state_22797__$1;
(statearr_22809_22858[(1)] = (16));

} else {
var statearr_22810_22859 = state_22797__$1;
(statearr_22810_22859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (22))){
var inst_22782 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
if(cljs.core.truth_(inst_22782)){
var statearr_22811_22860 = state_22797__$1;
(statearr_22811_22860[(1)] = (23));

} else {
var statearr_22812_22861 = state_22797__$1;
(statearr_22812_22861[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (6))){
var inst_22728 = (state_22797[(8)]);
var inst_22778 = (state_22797[(11)]);
var inst_22776 = (state_22797[(7)]);
var inst_22776__$1 = topic_fn.call(null,inst_22728);
var inst_22777 = cljs.core.deref.call(null,mults);
var inst_22778__$1 = cljs.core.get.call(null,inst_22777,inst_22776__$1);
var state_22797__$1 = (function (){var statearr_22813 = state_22797;
(statearr_22813[(11)] = inst_22778__$1);

(statearr_22813[(7)] = inst_22776__$1);

return statearr_22813;
})();
if(cljs.core.truth_(inst_22778__$1)){
var statearr_22814_22862 = state_22797__$1;
(statearr_22814_22862[(1)] = (19));

} else {
var statearr_22815_22863 = state_22797__$1;
(statearr_22815_22863[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (25))){
var inst_22787 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22816_22864 = state_22797__$1;
(statearr_22816_22864[(2)] = inst_22787);

(statearr_22816_22864[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (17))){
var inst_22752 = (state_22797[(10)]);
var inst_22761 = cljs.core.first.call(null,inst_22752);
var inst_22762 = cljs.core.async.muxch_STAR_.call(null,inst_22761);
var inst_22763 = cljs.core.async.close_BANG_.call(null,inst_22762);
var inst_22764 = cljs.core.next.call(null,inst_22752);
var inst_22738 = inst_22764;
var inst_22739 = null;
var inst_22740 = (0);
var inst_22741 = (0);
var state_22797__$1 = (function (){var statearr_22817 = state_22797;
(statearr_22817[(12)] = inst_22739);

(statearr_22817[(13)] = inst_22741);

(statearr_22817[(14)] = inst_22763);

(statearr_22817[(15)] = inst_22740);

(statearr_22817[(16)] = inst_22738);

return statearr_22817;
})();
var statearr_22818_22865 = state_22797__$1;
(statearr_22818_22865[(2)] = null);

(statearr_22818_22865[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (3))){
var inst_22795 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22797__$1,inst_22795);
} else {
if((state_val_22798 === (12))){
var inst_22772 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22819_22866 = state_22797__$1;
(statearr_22819_22866[(2)] = inst_22772);

(statearr_22819_22866[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (2))){
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22797__$1,(4),ch);
} else {
if((state_val_22798 === (23))){
var state_22797__$1 = state_22797;
var statearr_22820_22867 = state_22797__$1;
(statearr_22820_22867[(2)] = null);

(statearr_22820_22867[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (19))){
var inst_22728 = (state_22797[(8)]);
var inst_22778 = (state_22797[(11)]);
var inst_22780 = cljs.core.async.muxch_STAR_.call(null,inst_22778);
var state_22797__$1 = state_22797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22797__$1,(22),inst_22780,inst_22728);
} else {
if((state_val_22798 === (11))){
var inst_22752 = (state_22797[(10)]);
var inst_22738 = (state_22797[(16)]);
var inst_22752__$1 = cljs.core.seq.call(null,inst_22738);
var state_22797__$1 = (function (){var statearr_22821 = state_22797;
(statearr_22821[(10)] = inst_22752__$1);

return statearr_22821;
})();
if(inst_22752__$1){
var statearr_22822_22868 = state_22797__$1;
(statearr_22822_22868[(1)] = (13));

} else {
var statearr_22823_22869 = state_22797__$1;
(statearr_22823_22869[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (9))){
var inst_22774 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22824_22870 = state_22797__$1;
(statearr_22824_22870[(2)] = inst_22774);

(statearr_22824_22870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (5))){
var inst_22735 = cljs.core.deref.call(null,mults);
var inst_22736 = cljs.core.vals.call(null,inst_22735);
var inst_22737 = cljs.core.seq.call(null,inst_22736);
var inst_22738 = inst_22737;
var inst_22739 = null;
var inst_22740 = (0);
var inst_22741 = (0);
var state_22797__$1 = (function (){var statearr_22825 = state_22797;
(statearr_22825[(12)] = inst_22739);

(statearr_22825[(13)] = inst_22741);

(statearr_22825[(15)] = inst_22740);

(statearr_22825[(16)] = inst_22738);

return statearr_22825;
})();
var statearr_22826_22871 = state_22797__$1;
(statearr_22826_22871[(2)] = null);

(statearr_22826_22871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (14))){
var state_22797__$1 = state_22797;
var statearr_22830_22872 = state_22797__$1;
(statearr_22830_22872[(2)] = null);

(statearr_22830_22872[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (16))){
var inst_22752 = (state_22797[(10)]);
var inst_22756 = cljs.core.chunk_first.call(null,inst_22752);
var inst_22757 = cljs.core.chunk_rest.call(null,inst_22752);
var inst_22758 = cljs.core.count.call(null,inst_22756);
var inst_22738 = inst_22757;
var inst_22739 = inst_22756;
var inst_22740 = inst_22758;
var inst_22741 = (0);
var state_22797__$1 = (function (){var statearr_22831 = state_22797;
(statearr_22831[(12)] = inst_22739);

(statearr_22831[(13)] = inst_22741);

(statearr_22831[(15)] = inst_22740);

(statearr_22831[(16)] = inst_22738);

return statearr_22831;
})();
var statearr_22832_22873 = state_22797__$1;
(statearr_22832_22873[(2)] = null);

(statearr_22832_22873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (10))){
var inst_22739 = (state_22797[(12)]);
var inst_22741 = (state_22797[(13)]);
var inst_22740 = (state_22797[(15)]);
var inst_22738 = (state_22797[(16)]);
var inst_22746 = cljs.core._nth.call(null,inst_22739,inst_22741);
var inst_22747 = cljs.core.async.muxch_STAR_.call(null,inst_22746);
var inst_22748 = cljs.core.async.close_BANG_.call(null,inst_22747);
var inst_22749 = (inst_22741 + (1));
var tmp22827 = inst_22739;
var tmp22828 = inst_22740;
var tmp22829 = inst_22738;
var inst_22738__$1 = tmp22829;
var inst_22739__$1 = tmp22827;
var inst_22740__$1 = tmp22828;
var inst_22741__$1 = inst_22749;
var state_22797__$1 = (function (){var statearr_22833 = state_22797;
(statearr_22833[(12)] = inst_22739__$1);

(statearr_22833[(13)] = inst_22741__$1);

(statearr_22833[(15)] = inst_22740__$1);

(statearr_22833[(17)] = inst_22748);

(statearr_22833[(16)] = inst_22738__$1);

return statearr_22833;
})();
var statearr_22834_22874 = state_22797__$1;
(statearr_22834_22874[(2)] = null);

(statearr_22834_22874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (18))){
var inst_22767 = (state_22797[(2)]);
var state_22797__$1 = state_22797;
var statearr_22835_22875 = state_22797__$1;
(statearr_22835_22875[(2)] = inst_22767);

(statearr_22835_22875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22798 === (8))){
var inst_22741 = (state_22797[(13)]);
var inst_22740 = (state_22797[(15)]);
var inst_22743 = (inst_22741 < inst_22740);
var inst_22744 = inst_22743;
var state_22797__$1 = state_22797;
if(cljs.core.truth_(inst_22744)){
var statearr_22836_22876 = state_22797__$1;
(statearr_22836_22876[(1)] = (10));

} else {
var statearr_22837_22877 = state_22797__$1;
(statearr_22837_22877[(1)] = (11));

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
});})(c__20950__auto___22849,mults,ensure_mult,p))
;
return ((function (switch__20838__auto__,c__20950__auto___22849,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_22841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22841[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_22841[(1)] = (1));

return statearr_22841;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_22797){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_22797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e22842){if((e22842 instanceof Object)){
var ex__20842__auto__ = e22842;
var statearr_22843_22878 = state_22797;
(statearr_22843_22878[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22879 = state_22797;
state_22797 = G__22879;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_22797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_22797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___22849,mults,ensure_mult,p))
})();
var state__20952__auto__ = (function (){var statearr_22844 = f__20951__auto__.call(null);
(statearr_22844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___22849);

return statearr_22844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___22849,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args22880 = [];
var len__17884__auto___22883 = arguments.length;
var i__17885__auto___22884 = (0);
while(true){
if((i__17885__auto___22884 < len__17884__auto___22883)){
args22880.push((arguments[i__17885__auto___22884]));

var G__22885 = (i__17885__auto___22884 + (1));
i__17885__auto___22884 = G__22885;
continue;
} else {
}
break;
}

var G__22882 = args22880.length;
switch (G__22882) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22880.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args22887 = [];
var len__17884__auto___22890 = arguments.length;
var i__17885__auto___22891 = (0);
while(true){
if((i__17885__auto___22891 < len__17884__auto___22890)){
args22887.push((arguments[i__17885__auto___22891]));

var G__22892 = (i__17885__auto___22891 + (1));
i__17885__auto___22891 = G__22892;
continue;
} else {
}
break;
}

var G__22889 = args22887.length;
switch (G__22889) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22887.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args22894 = [];
var len__17884__auto___22965 = arguments.length;
var i__17885__auto___22966 = (0);
while(true){
if((i__17885__auto___22966 < len__17884__auto___22965)){
args22894.push((arguments[i__17885__auto___22966]));

var G__22967 = (i__17885__auto___22966 + (1));
i__17885__auto___22966 = G__22967;
continue;
} else {
}
break;
}

var G__22896 = args22894.length;
switch (G__22896) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22894.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__20950__auto___22969 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22935){
var state_val_22936 = (state_22935[(1)]);
if((state_val_22936 === (7))){
var state_22935__$1 = state_22935;
var statearr_22937_22970 = state_22935__$1;
(statearr_22937_22970[(2)] = null);

(statearr_22937_22970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (1))){
var state_22935__$1 = state_22935;
var statearr_22938_22971 = state_22935__$1;
(statearr_22938_22971[(2)] = null);

(statearr_22938_22971[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (4))){
var inst_22899 = (state_22935[(7)]);
var inst_22901 = (inst_22899 < cnt);
var state_22935__$1 = state_22935;
if(cljs.core.truth_(inst_22901)){
var statearr_22939_22972 = state_22935__$1;
(statearr_22939_22972[(1)] = (6));

} else {
var statearr_22940_22973 = state_22935__$1;
(statearr_22940_22973[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (15))){
var inst_22931 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22941_22974 = state_22935__$1;
(statearr_22941_22974[(2)] = inst_22931);

(statearr_22941_22974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (13))){
var inst_22924 = cljs.core.async.close_BANG_.call(null,out);
var state_22935__$1 = state_22935;
var statearr_22942_22975 = state_22935__$1;
(statearr_22942_22975[(2)] = inst_22924);

(statearr_22942_22975[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (6))){
var state_22935__$1 = state_22935;
var statearr_22943_22976 = state_22935__$1;
(statearr_22943_22976[(2)] = null);

(statearr_22943_22976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (3))){
var inst_22933 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22935__$1,inst_22933);
} else {
if((state_val_22936 === (12))){
var inst_22921 = (state_22935[(8)]);
var inst_22921__$1 = (state_22935[(2)]);
var inst_22922 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22921__$1);
var state_22935__$1 = (function (){var statearr_22944 = state_22935;
(statearr_22944[(8)] = inst_22921__$1);

return statearr_22944;
})();
if(cljs.core.truth_(inst_22922)){
var statearr_22945_22977 = state_22935__$1;
(statearr_22945_22977[(1)] = (13));

} else {
var statearr_22946_22978 = state_22935__$1;
(statearr_22946_22978[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (2))){
var inst_22898 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22899 = (0);
var state_22935__$1 = (function (){var statearr_22947 = state_22935;
(statearr_22947[(7)] = inst_22899);

(statearr_22947[(9)] = inst_22898);

return statearr_22947;
})();
var statearr_22948_22979 = state_22935__$1;
(statearr_22948_22979[(2)] = null);

(statearr_22948_22979[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (11))){
var inst_22899 = (state_22935[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22935,(10),Object,null,(9));
var inst_22908 = chs__$1.call(null,inst_22899);
var inst_22909 = done.call(null,inst_22899);
var inst_22910 = cljs.core.async.take_BANG_.call(null,inst_22908,inst_22909);
var state_22935__$1 = state_22935;
var statearr_22949_22980 = state_22935__$1;
(statearr_22949_22980[(2)] = inst_22910);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (9))){
var inst_22899 = (state_22935[(7)]);
var inst_22912 = (state_22935[(2)]);
var inst_22913 = (inst_22899 + (1));
var inst_22899__$1 = inst_22913;
var state_22935__$1 = (function (){var statearr_22950 = state_22935;
(statearr_22950[(10)] = inst_22912);

(statearr_22950[(7)] = inst_22899__$1);

return statearr_22950;
})();
var statearr_22951_22981 = state_22935__$1;
(statearr_22951_22981[(2)] = null);

(statearr_22951_22981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (5))){
var inst_22919 = (state_22935[(2)]);
var state_22935__$1 = (function (){var statearr_22952 = state_22935;
(statearr_22952[(11)] = inst_22919);

return statearr_22952;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22935__$1,(12),dchan);
} else {
if((state_val_22936 === (14))){
var inst_22921 = (state_22935[(8)]);
var inst_22926 = cljs.core.apply.call(null,f,inst_22921);
var state_22935__$1 = state_22935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22935__$1,(16),out,inst_22926);
} else {
if((state_val_22936 === (16))){
var inst_22928 = (state_22935[(2)]);
var state_22935__$1 = (function (){var statearr_22953 = state_22935;
(statearr_22953[(12)] = inst_22928);

return statearr_22953;
})();
var statearr_22954_22982 = state_22935__$1;
(statearr_22954_22982[(2)] = null);

(statearr_22954_22982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (10))){
var inst_22903 = (state_22935[(2)]);
var inst_22904 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22935__$1 = (function (){var statearr_22955 = state_22935;
(statearr_22955[(13)] = inst_22903);

return statearr_22955;
})();
var statearr_22956_22983 = state_22935__$1;
(statearr_22956_22983[(2)] = inst_22904);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22936 === (8))){
var inst_22917 = (state_22935[(2)]);
var state_22935__$1 = state_22935;
var statearr_22957_22984 = state_22935__$1;
(statearr_22957_22984[(2)] = inst_22917);

(statearr_22957_22984[(1)] = (5));


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
});})(c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20838__auto__,c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_22961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22961[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_22961[(1)] = (1));

return statearr_22961;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_22935){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_22935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e22962){if((e22962 instanceof Object)){
var ex__20842__auto__ = e22962;
var statearr_22963_22985 = state_22935;
(statearr_22963_22985[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22986 = state_22935;
state_22935 = G__22986;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_22935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_22935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20952__auto__ = (function (){var statearr_22964 = f__20951__auto__.call(null);
(statearr_22964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___22969);

return statearr_22964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___22969,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args22988 = [];
var len__17884__auto___23044 = arguments.length;
var i__17885__auto___23045 = (0);
while(true){
if((i__17885__auto___23045 < len__17884__auto___23044)){
args22988.push((arguments[i__17885__auto___23045]));

var G__23046 = (i__17885__auto___23045 + (1));
i__17885__auto___23045 = G__23046;
continue;
} else {
}
break;
}

var G__22990 = args22988.length;
switch (G__22990) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22988.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23048,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23048,out){
return (function (state_23020){
var state_val_23021 = (state_23020[(1)]);
if((state_val_23021 === (7))){
var inst_23000 = (state_23020[(7)]);
var inst_22999 = (state_23020[(8)]);
var inst_22999__$1 = (state_23020[(2)]);
var inst_23000__$1 = cljs.core.nth.call(null,inst_22999__$1,(0),null);
var inst_23001 = cljs.core.nth.call(null,inst_22999__$1,(1),null);
var inst_23002 = (inst_23000__$1 == null);
var state_23020__$1 = (function (){var statearr_23022 = state_23020;
(statearr_23022[(7)] = inst_23000__$1);

(statearr_23022[(8)] = inst_22999__$1);

(statearr_23022[(9)] = inst_23001);

return statearr_23022;
})();
if(cljs.core.truth_(inst_23002)){
var statearr_23023_23049 = state_23020__$1;
(statearr_23023_23049[(1)] = (8));

} else {
var statearr_23024_23050 = state_23020__$1;
(statearr_23024_23050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (1))){
var inst_22991 = cljs.core.vec.call(null,chs);
var inst_22992 = inst_22991;
var state_23020__$1 = (function (){var statearr_23025 = state_23020;
(statearr_23025[(10)] = inst_22992);

return statearr_23025;
})();
var statearr_23026_23051 = state_23020__$1;
(statearr_23026_23051[(2)] = null);

(statearr_23026_23051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (4))){
var inst_22992 = (state_23020[(10)]);
var state_23020__$1 = state_23020;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23020__$1,(7),inst_22992);
} else {
if((state_val_23021 === (6))){
var inst_23016 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
var statearr_23027_23052 = state_23020__$1;
(statearr_23027_23052[(2)] = inst_23016);

(statearr_23027_23052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (3))){
var inst_23018 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23020__$1,inst_23018);
} else {
if((state_val_23021 === (2))){
var inst_22992 = (state_23020[(10)]);
var inst_22994 = cljs.core.count.call(null,inst_22992);
var inst_22995 = (inst_22994 > (0));
var state_23020__$1 = state_23020;
if(cljs.core.truth_(inst_22995)){
var statearr_23029_23053 = state_23020__$1;
(statearr_23029_23053[(1)] = (4));

} else {
var statearr_23030_23054 = state_23020__$1;
(statearr_23030_23054[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (11))){
var inst_22992 = (state_23020[(10)]);
var inst_23009 = (state_23020[(2)]);
var tmp23028 = inst_22992;
var inst_22992__$1 = tmp23028;
var state_23020__$1 = (function (){var statearr_23031 = state_23020;
(statearr_23031[(10)] = inst_22992__$1);

(statearr_23031[(11)] = inst_23009);

return statearr_23031;
})();
var statearr_23032_23055 = state_23020__$1;
(statearr_23032_23055[(2)] = null);

(statearr_23032_23055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (9))){
var inst_23000 = (state_23020[(7)]);
var state_23020__$1 = state_23020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23020__$1,(11),out,inst_23000);
} else {
if((state_val_23021 === (5))){
var inst_23014 = cljs.core.async.close_BANG_.call(null,out);
var state_23020__$1 = state_23020;
var statearr_23033_23056 = state_23020__$1;
(statearr_23033_23056[(2)] = inst_23014);

(statearr_23033_23056[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (10))){
var inst_23012 = (state_23020[(2)]);
var state_23020__$1 = state_23020;
var statearr_23034_23057 = state_23020__$1;
(statearr_23034_23057[(2)] = inst_23012);

(statearr_23034_23057[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23021 === (8))){
var inst_23000 = (state_23020[(7)]);
var inst_22992 = (state_23020[(10)]);
var inst_22999 = (state_23020[(8)]);
var inst_23001 = (state_23020[(9)]);
var inst_23004 = (function (){var cs = inst_22992;
var vec__22997 = inst_22999;
var v = inst_23000;
var c = inst_23001;
return ((function (cs,vec__22997,v,c,inst_23000,inst_22992,inst_22999,inst_23001,state_val_23021,c__20950__auto___23048,out){
return (function (p1__22987_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22987_SHARP_);
});
;})(cs,vec__22997,v,c,inst_23000,inst_22992,inst_22999,inst_23001,state_val_23021,c__20950__auto___23048,out))
})();
var inst_23005 = cljs.core.filterv.call(null,inst_23004,inst_22992);
var inst_22992__$1 = inst_23005;
var state_23020__$1 = (function (){var statearr_23035 = state_23020;
(statearr_23035[(10)] = inst_22992__$1);

return statearr_23035;
})();
var statearr_23036_23058 = state_23020__$1;
(statearr_23036_23058[(2)] = null);

(statearr_23036_23058[(1)] = (2));


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
});})(c__20950__auto___23048,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23048,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23040 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23040[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23040[(1)] = (1));

return statearr_23040;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23020){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23041){if((e23041 instanceof Object)){
var ex__20842__auto__ = e23041;
var statearr_23042_23059 = state_23020;
(statearr_23042_23059[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23041;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23060 = state_23020;
state_23020 = G__23060;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23048,out))
})();
var state__20952__auto__ = (function (){var statearr_23043 = f__20951__auto__.call(null);
(statearr_23043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23048);

return statearr_23043;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23048,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23061 = [];
var len__17884__auto___23110 = arguments.length;
var i__17885__auto___23111 = (0);
while(true){
if((i__17885__auto___23111 < len__17884__auto___23110)){
args23061.push((arguments[i__17885__auto___23111]));

var G__23112 = (i__17885__auto___23111 + (1));
i__17885__auto___23111 = G__23112;
continue;
} else {
}
break;
}

var G__23063 = args23061.length;
switch (G__23063) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23061.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23114,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23114,out){
return (function (state_23087){
var state_val_23088 = (state_23087[(1)]);
if((state_val_23088 === (7))){
var inst_23069 = (state_23087[(7)]);
var inst_23069__$1 = (state_23087[(2)]);
var inst_23070 = (inst_23069__$1 == null);
var inst_23071 = cljs.core.not.call(null,inst_23070);
var state_23087__$1 = (function (){var statearr_23089 = state_23087;
(statearr_23089[(7)] = inst_23069__$1);

return statearr_23089;
})();
if(inst_23071){
var statearr_23090_23115 = state_23087__$1;
(statearr_23090_23115[(1)] = (8));

} else {
var statearr_23091_23116 = state_23087__$1;
(statearr_23091_23116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (1))){
var inst_23064 = (0);
var state_23087__$1 = (function (){var statearr_23092 = state_23087;
(statearr_23092[(8)] = inst_23064);

return statearr_23092;
})();
var statearr_23093_23117 = state_23087__$1;
(statearr_23093_23117[(2)] = null);

(statearr_23093_23117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (4))){
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23087__$1,(7),ch);
} else {
if((state_val_23088 === (6))){
var inst_23082 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23094_23118 = state_23087__$1;
(statearr_23094_23118[(2)] = inst_23082);

(statearr_23094_23118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (3))){
var inst_23084 = (state_23087[(2)]);
var inst_23085 = cljs.core.async.close_BANG_.call(null,out);
var state_23087__$1 = (function (){var statearr_23095 = state_23087;
(statearr_23095[(9)] = inst_23084);

return statearr_23095;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23087__$1,inst_23085);
} else {
if((state_val_23088 === (2))){
var inst_23064 = (state_23087[(8)]);
var inst_23066 = (inst_23064 < n);
var state_23087__$1 = state_23087;
if(cljs.core.truth_(inst_23066)){
var statearr_23096_23119 = state_23087__$1;
(statearr_23096_23119[(1)] = (4));

} else {
var statearr_23097_23120 = state_23087__$1;
(statearr_23097_23120[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (11))){
var inst_23064 = (state_23087[(8)]);
var inst_23074 = (state_23087[(2)]);
var inst_23075 = (inst_23064 + (1));
var inst_23064__$1 = inst_23075;
var state_23087__$1 = (function (){var statearr_23098 = state_23087;
(statearr_23098[(8)] = inst_23064__$1);

(statearr_23098[(10)] = inst_23074);

return statearr_23098;
})();
var statearr_23099_23121 = state_23087__$1;
(statearr_23099_23121[(2)] = null);

(statearr_23099_23121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (9))){
var state_23087__$1 = state_23087;
var statearr_23100_23122 = state_23087__$1;
(statearr_23100_23122[(2)] = null);

(statearr_23100_23122[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (5))){
var state_23087__$1 = state_23087;
var statearr_23101_23123 = state_23087__$1;
(statearr_23101_23123[(2)] = null);

(statearr_23101_23123[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (10))){
var inst_23079 = (state_23087[(2)]);
var state_23087__$1 = state_23087;
var statearr_23102_23124 = state_23087__$1;
(statearr_23102_23124[(2)] = inst_23079);

(statearr_23102_23124[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23088 === (8))){
var inst_23069 = (state_23087[(7)]);
var state_23087__$1 = state_23087;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23087__$1,(11),out,inst_23069);
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
});})(c__20950__auto___23114,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23114,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23106 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23106[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23106[(1)] = (1));

return statearr_23106;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23087){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23107){if((e23107 instanceof Object)){
var ex__20842__auto__ = e23107;
var statearr_23108_23125 = state_23087;
(statearr_23108_23125[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23107;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23126 = state_23087;
state_23087 = G__23126;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23087){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23114,out))
})();
var state__20952__auto__ = (function (){var statearr_23109 = f__20951__auto__.call(null);
(statearr_23109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23114);

return statearr_23109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23114,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23134 = (function (map_LT_,f,ch,meta23135){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23135 = meta23135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23136,meta23135__$1){
var self__ = this;
var _23136__$1 = this;
return (new cljs.core.async.t_cljs$core$async23134(self__.map_LT_,self__.f,self__.ch,meta23135__$1));
});

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23136){
var self__ = this;
var _23136__$1 = this;
return self__.meta23135;
});

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async23137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23137 = (function (map_LT_,f,ch,meta23135,_,fn1,meta23138){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta23135 = meta23135;
this._ = _;
this.fn1 = fn1;
this.meta23138 = meta23138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_23139,meta23138__$1){
var self__ = this;
var _23139__$1 = this;
return (new cljs.core.async.t_cljs$core$async23137(self__.map_LT_,self__.f,self__.ch,self__.meta23135,self__._,self__.fn1,meta23138__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_23139){
var self__ = this;
var _23139__$1 = this;
return self__.meta23138;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__23127_SHARP_){
return f1.call(null,(((p1__23127_SHARP_ == null))?null:self__.f.call(null,p1__23127_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23135","meta23135",-1605650843,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23134","cljs.core.async/t_cljs$core$async23134",1979929400,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23138","meta23138",-1140431924,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async23137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23137";

cljs.core.async.t_cljs$core$async23137.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23137");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async23137 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23137(map_LT___$1,f__$1,ch__$1,meta23135__$1,___$2,fn1__$1,meta23138){
return (new cljs.core.async.t_cljs$core$async23137(map_LT___$1,f__$1,ch__$1,meta23135__$1,___$2,fn1__$1,meta23138));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async23137(self__.map_LT_,self__.f,self__.ch,self__.meta23135,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async23134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23135","meta23135",-1605650843,null)], null);
});

cljs.core.async.t_cljs$core$async23134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23134";

cljs.core.async.t_cljs$core$async23134.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23134");
});

cljs.core.async.__GT_t_cljs$core$async23134 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23134(map_LT___$1,f__$1,ch__$1,meta23135){
return (new cljs.core.async.t_cljs$core$async23134(map_LT___$1,f__$1,ch__$1,meta23135));
});

}

return (new cljs.core.async.t_cljs$core$async23134(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async23143 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23143 = (function (map_GT_,f,ch,meta23144){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta23144 = meta23144;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23145,meta23144__$1){
var self__ = this;
var _23145__$1 = this;
return (new cljs.core.async.t_cljs$core$async23143(self__.map_GT_,self__.f,self__.ch,meta23144__$1));
});

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23145){
var self__ = this;
var _23145__$1 = this;
return self__.meta23144;
});

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23143.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async23143.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23144","meta23144",-107537147,null)], null);
});

cljs.core.async.t_cljs$core$async23143.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23143.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23143";

cljs.core.async.t_cljs$core$async23143.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23143");
});

cljs.core.async.__GT_t_cljs$core$async23143 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23143(map_GT___$1,f__$1,ch__$1,meta23144){
return (new cljs.core.async.t_cljs$core$async23143(map_GT___$1,f__$1,ch__$1,meta23144));
});

}

return (new cljs.core.async.t_cljs$core$async23143(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async23149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23149 = (function (filter_GT_,p,ch,meta23150){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta23150 = meta23150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23151,meta23150__$1){
var self__ = this;
var _23151__$1 = this;
return (new cljs.core.async.t_cljs$core$async23149(self__.filter_GT_,self__.p,self__.ch,meta23150__$1));
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23151){
var self__ = this;
var _23151__$1 = this;
return self__.meta23150;
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async23149.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async23149.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23150","meta23150",-55210383,null)], null);
});

cljs.core.async.t_cljs$core$async23149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23149";

cljs.core.async.t_cljs$core$async23149.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async23149");
});

cljs.core.async.__GT_t_cljs$core$async23149 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23149(filter_GT___$1,p__$1,ch__$1,meta23150){
return (new cljs.core.async.t_cljs$core$async23149(filter_GT___$1,p__$1,ch__$1,meta23150));
});

}

return (new cljs.core.async.t_cljs$core$async23149(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args23152 = [];
var len__17884__auto___23196 = arguments.length;
var i__17885__auto___23197 = (0);
while(true){
if((i__17885__auto___23197 < len__17884__auto___23196)){
args23152.push((arguments[i__17885__auto___23197]));

var G__23198 = (i__17885__auto___23197 + (1));
i__17885__auto___23197 = G__23198;
continue;
} else {
}
break;
}

var G__23154 = args23152.length;
switch (G__23154) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23152.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23200 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23200,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23200,out){
return (function (state_23175){
var state_val_23176 = (state_23175[(1)]);
if((state_val_23176 === (7))){
var inst_23171 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23177_23201 = state_23175__$1;
(statearr_23177_23201[(2)] = inst_23171);

(statearr_23177_23201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (1))){
var state_23175__$1 = state_23175;
var statearr_23178_23202 = state_23175__$1;
(statearr_23178_23202[(2)] = null);

(statearr_23178_23202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (4))){
var inst_23157 = (state_23175[(7)]);
var inst_23157__$1 = (state_23175[(2)]);
var inst_23158 = (inst_23157__$1 == null);
var state_23175__$1 = (function (){var statearr_23179 = state_23175;
(statearr_23179[(7)] = inst_23157__$1);

return statearr_23179;
})();
if(cljs.core.truth_(inst_23158)){
var statearr_23180_23203 = state_23175__$1;
(statearr_23180_23203[(1)] = (5));

} else {
var statearr_23181_23204 = state_23175__$1;
(statearr_23181_23204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (6))){
var inst_23157 = (state_23175[(7)]);
var inst_23162 = p.call(null,inst_23157);
var state_23175__$1 = state_23175;
if(cljs.core.truth_(inst_23162)){
var statearr_23182_23205 = state_23175__$1;
(statearr_23182_23205[(1)] = (8));

} else {
var statearr_23183_23206 = state_23175__$1;
(statearr_23183_23206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (3))){
var inst_23173 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23175__$1,inst_23173);
} else {
if((state_val_23176 === (2))){
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23175__$1,(4),ch);
} else {
if((state_val_23176 === (11))){
var inst_23165 = (state_23175[(2)]);
var state_23175__$1 = state_23175;
var statearr_23184_23207 = state_23175__$1;
(statearr_23184_23207[(2)] = inst_23165);

(statearr_23184_23207[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (9))){
var state_23175__$1 = state_23175;
var statearr_23185_23208 = state_23175__$1;
(statearr_23185_23208[(2)] = null);

(statearr_23185_23208[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (5))){
var inst_23160 = cljs.core.async.close_BANG_.call(null,out);
var state_23175__$1 = state_23175;
var statearr_23186_23209 = state_23175__$1;
(statearr_23186_23209[(2)] = inst_23160);

(statearr_23186_23209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (10))){
var inst_23168 = (state_23175[(2)]);
var state_23175__$1 = (function (){var statearr_23187 = state_23175;
(statearr_23187[(8)] = inst_23168);

return statearr_23187;
})();
var statearr_23188_23210 = state_23175__$1;
(statearr_23188_23210[(2)] = null);

(statearr_23188_23210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23176 === (8))){
var inst_23157 = (state_23175[(7)]);
var state_23175__$1 = state_23175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23175__$1,(11),out,inst_23157);
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
});})(c__20950__auto___23200,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23200,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23192 = [null,null,null,null,null,null,null,null,null];
(statearr_23192[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23192[(1)] = (1));

return statearr_23192;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23175){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23193){if((e23193 instanceof Object)){
var ex__20842__auto__ = e23193;
var statearr_23194_23211 = state_23175;
(statearr_23194_23211[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23212 = state_23175;
state_23175 = G__23212;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23200,out))
})();
var state__20952__auto__ = (function (){var statearr_23195 = f__20951__auto__.call(null);
(statearr_23195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23200);

return statearr_23195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23200,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args23213 = [];
var len__17884__auto___23216 = arguments.length;
var i__17885__auto___23217 = (0);
while(true){
if((i__17885__auto___23217 < len__17884__auto___23216)){
args23213.push((arguments[i__17885__auto___23217]));

var G__23218 = (i__17885__auto___23217 + (1));
i__17885__auto___23217 = G__23218;
continue;
} else {
}
break;
}

var G__23215 = args23213.length;
switch (G__23215) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23213.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__20950__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto__){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto__){
return (function (state_23385){
var state_val_23386 = (state_23385[(1)]);
if((state_val_23386 === (7))){
var inst_23381 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23387_23428 = state_23385__$1;
(statearr_23387_23428[(2)] = inst_23381);

(statearr_23387_23428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (20))){
var inst_23351 = (state_23385[(7)]);
var inst_23362 = (state_23385[(2)]);
var inst_23363 = cljs.core.next.call(null,inst_23351);
var inst_23337 = inst_23363;
var inst_23338 = null;
var inst_23339 = (0);
var inst_23340 = (0);
var state_23385__$1 = (function (){var statearr_23388 = state_23385;
(statearr_23388[(8)] = inst_23339);

(statearr_23388[(9)] = inst_23337);

(statearr_23388[(10)] = inst_23362);

(statearr_23388[(11)] = inst_23338);

(statearr_23388[(12)] = inst_23340);

return statearr_23388;
})();
var statearr_23389_23429 = state_23385__$1;
(statearr_23389_23429[(2)] = null);

(statearr_23389_23429[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (1))){
var state_23385__$1 = state_23385;
var statearr_23390_23430 = state_23385__$1;
(statearr_23390_23430[(2)] = null);

(statearr_23390_23430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (4))){
var inst_23326 = (state_23385[(13)]);
var inst_23326__$1 = (state_23385[(2)]);
var inst_23327 = (inst_23326__$1 == null);
var state_23385__$1 = (function (){var statearr_23391 = state_23385;
(statearr_23391[(13)] = inst_23326__$1);

return statearr_23391;
})();
if(cljs.core.truth_(inst_23327)){
var statearr_23392_23431 = state_23385__$1;
(statearr_23392_23431[(1)] = (5));

} else {
var statearr_23393_23432 = state_23385__$1;
(statearr_23393_23432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (15))){
var state_23385__$1 = state_23385;
var statearr_23397_23433 = state_23385__$1;
(statearr_23397_23433[(2)] = null);

(statearr_23397_23433[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (21))){
var state_23385__$1 = state_23385;
var statearr_23398_23434 = state_23385__$1;
(statearr_23398_23434[(2)] = null);

(statearr_23398_23434[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (13))){
var inst_23339 = (state_23385[(8)]);
var inst_23337 = (state_23385[(9)]);
var inst_23338 = (state_23385[(11)]);
var inst_23340 = (state_23385[(12)]);
var inst_23347 = (state_23385[(2)]);
var inst_23348 = (inst_23340 + (1));
var tmp23394 = inst_23339;
var tmp23395 = inst_23337;
var tmp23396 = inst_23338;
var inst_23337__$1 = tmp23395;
var inst_23338__$1 = tmp23396;
var inst_23339__$1 = tmp23394;
var inst_23340__$1 = inst_23348;
var state_23385__$1 = (function (){var statearr_23399 = state_23385;
(statearr_23399[(8)] = inst_23339__$1);

(statearr_23399[(9)] = inst_23337__$1);

(statearr_23399[(11)] = inst_23338__$1);

(statearr_23399[(12)] = inst_23340__$1);

(statearr_23399[(14)] = inst_23347);

return statearr_23399;
})();
var statearr_23400_23435 = state_23385__$1;
(statearr_23400_23435[(2)] = null);

(statearr_23400_23435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (22))){
var state_23385__$1 = state_23385;
var statearr_23401_23436 = state_23385__$1;
(statearr_23401_23436[(2)] = null);

(statearr_23401_23436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (6))){
var inst_23326 = (state_23385[(13)]);
var inst_23335 = f.call(null,inst_23326);
var inst_23336 = cljs.core.seq.call(null,inst_23335);
var inst_23337 = inst_23336;
var inst_23338 = null;
var inst_23339 = (0);
var inst_23340 = (0);
var state_23385__$1 = (function (){var statearr_23402 = state_23385;
(statearr_23402[(8)] = inst_23339);

(statearr_23402[(9)] = inst_23337);

(statearr_23402[(11)] = inst_23338);

(statearr_23402[(12)] = inst_23340);

return statearr_23402;
})();
var statearr_23403_23437 = state_23385__$1;
(statearr_23403_23437[(2)] = null);

(statearr_23403_23437[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (17))){
var inst_23351 = (state_23385[(7)]);
var inst_23355 = cljs.core.chunk_first.call(null,inst_23351);
var inst_23356 = cljs.core.chunk_rest.call(null,inst_23351);
var inst_23357 = cljs.core.count.call(null,inst_23355);
var inst_23337 = inst_23356;
var inst_23338 = inst_23355;
var inst_23339 = inst_23357;
var inst_23340 = (0);
var state_23385__$1 = (function (){var statearr_23404 = state_23385;
(statearr_23404[(8)] = inst_23339);

(statearr_23404[(9)] = inst_23337);

(statearr_23404[(11)] = inst_23338);

(statearr_23404[(12)] = inst_23340);

return statearr_23404;
})();
var statearr_23405_23438 = state_23385__$1;
(statearr_23405_23438[(2)] = null);

(statearr_23405_23438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (3))){
var inst_23383 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23385__$1,inst_23383);
} else {
if((state_val_23386 === (12))){
var inst_23371 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23406_23439 = state_23385__$1;
(statearr_23406_23439[(2)] = inst_23371);

(statearr_23406_23439[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (2))){
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23385__$1,(4),in$);
} else {
if((state_val_23386 === (23))){
var inst_23379 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23407_23440 = state_23385__$1;
(statearr_23407_23440[(2)] = inst_23379);

(statearr_23407_23440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (19))){
var inst_23366 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23408_23441 = state_23385__$1;
(statearr_23408_23441[(2)] = inst_23366);

(statearr_23408_23441[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (11))){
var inst_23351 = (state_23385[(7)]);
var inst_23337 = (state_23385[(9)]);
var inst_23351__$1 = cljs.core.seq.call(null,inst_23337);
var state_23385__$1 = (function (){var statearr_23409 = state_23385;
(statearr_23409[(7)] = inst_23351__$1);

return statearr_23409;
})();
if(inst_23351__$1){
var statearr_23410_23442 = state_23385__$1;
(statearr_23410_23442[(1)] = (14));

} else {
var statearr_23411_23443 = state_23385__$1;
(statearr_23411_23443[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (9))){
var inst_23373 = (state_23385[(2)]);
var inst_23374 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23385__$1 = (function (){var statearr_23412 = state_23385;
(statearr_23412[(15)] = inst_23373);

return statearr_23412;
})();
if(cljs.core.truth_(inst_23374)){
var statearr_23413_23444 = state_23385__$1;
(statearr_23413_23444[(1)] = (21));

} else {
var statearr_23414_23445 = state_23385__$1;
(statearr_23414_23445[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (5))){
var inst_23329 = cljs.core.async.close_BANG_.call(null,out);
var state_23385__$1 = state_23385;
var statearr_23415_23446 = state_23385__$1;
(statearr_23415_23446[(2)] = inst_23329);

(statearr_23415_23446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (14))){
var inst_23351 = (state_23385[(7)]);
var inst_23353 = cljs.core.chunked_seq_QMARK_.call(null,inst_23351);
var state_23385__$1 = state_23385;
if(inst_23353){
var statearr_23416_23447 = state_23385__$1;
(statearr_23416_23447[(1)] = (17));

} else {
var statearr_23417_23448 = state_23385__$1;
(statearr_23417_23448[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (16))){
var inst_23369 = (state_23385[(2)]);
var state_23385__$1 = state_23385;
var statearr_23418_23449 = state_23385__$1;
(statearr_23418_23449[(2)] = inst_23369);

(statearr_23418_23449[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23386 === (10))){
var inst_23338 = (state_23385[(11)]);
var inst_23340 = (state_23385[(12)]);
var inst_23345 = cljs.core._nth.call(null,inst_23338,inst_23340);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23385__$1,(13),out,inst_23345);
} else {
if((state_val_23386 === (18))){
var inst_23351 = (state_23385[(7)]);
var inst_23360 = cljs.core.first.call(null,inst_23351);
var state_23385__$1 = state_23385;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23385__$1,(20),out,inst_23360);
} else {
if((state_val_23386 === (8))){
var inst_23339 = (state_23385[(8)]);
var inst_23340 = (state_23385[(12)]);
var inst_23342 = (inst_23340 < inst_23339);
var inst_23343 = inst_23342;
var state_23385__$1 = state_23385;
if(cljs.core.truth_(inst_23343)){
var statearr_23419_23450 = state_23385__$1;
(statearr_23419_23450[(1)] = (10));

} else {
var statearr_23420_23451 = state_23385__$1;
(statearr_23420_23451[(1)] = (11));

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
});})(c__20950__auto__))
;
return ((function (switch__20838__auto__,c__20950__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____0 = (function (){
var statearr_23424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23424[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__);

(statearr_23424[(1)] = (1));

return statearr_23424;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____1 = (function (state_23385){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23385);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23425){if((e23425 instanceof Object)){
var ex__20842__auto__ = e23425;
var statearr_23426_23452 = state_23385;
(statearr_23426_23452[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23385);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23425;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23453 = state_23385;
state_23385 = G__23453;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__ = function(state_23385){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____1.call(this,state_23385);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20839__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto__))
})();
var state__20952__auto__ = (function (){var statearr_23427 = f__20951__auto__.call(null);
(statearr_23427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto__);

return statearr_23427;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto__))
);

return c__20950__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args23454 = [];
var len__17884__auto___23457 = arguments.length;
var i__17885__auto___23458 = (0);
while(true){
if((i__17885__auto___23458 < len__17884__auto___23457)){
args23454.push((arguments[i__17885__auto___23458]));

var G__23459 = (i__17885__auto___23458 + (1));
i__17885__auto___23458 = G__23459;
continue;
} else {
}
break;
}

var G__23456 = args23454.length;
switch (G__23456) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23454.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args23461 = [];
var len__17884__auto___23464 = arguments.length;
var i__17885__auto___23465 = (0);
while(true){
if((i__17885__auto___23465 < len__17884__auto___23464)){
args23461.push((arguments[i__17885__auto___23465]));

var G__23466 = (i__17885__auto___23465 + (1));
i__17885__auto___23465 = G__23466;
continue;
} else {
}
break;
}

var G__23463 = args23461.length;
switch (G__23463) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23461.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args23468 = [];
var len__17884__auto___23519 = arguments.length;
var i__17885__auto___23520 = (0);
while(true){
if((i__17885__auto___23520 < len__17884__auto___23519)){
args23468.push((arguments[i__17885__auto___23520]));

var G__23521 = (i__17885__auto___23520 + (1));
i__17885__auto___23520 = G__23521;
continue;
} else {
}
break;
}

var G__23470 = args23468.length;
switch (G__23470) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23468.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23523,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23523,out){
return (function (state_23494){
var state_val_23495 = (state_23494[(1)]);
if((state_val_23495 === (7))){
var inst_23489 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
var statearr_23496_23524 = state_23494__$1;
(statearr_23496_23524[(2)] = inst_23489);

(statearr_23496_23524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (1))){
var inst_23471 = null;
var state_23494__$1 = (function (){var statearr_23497 = state_23494;
(statearr_23497[(7)] = inst_23471);

return statearr_23497;
})();
var statearr_23498_23525 = state_23494__$1;
(statearr_23498_23525[(2)] = null);

(statearr_23498_23525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (4))){
var inst_23474 = (state_23494[(8)]);
var inst_23474__$1 = (state_23494[(2)]);
var inst_23475 = (inst_23474__$1 == null);
var inst_23476 = cljs.core.not.call(null,inst_23475);
var state_23494__$1 = (function (){var statearr_23499 = state_23494;
(statearr_23499[(8)] = inst_23474__$1);

return statearr_23499;
})();
if(inst_23476){
var statearr_23500_23526 = state_23494__$1;
(statearr_23500_23526[(1)] = (5));

} else {
var statearr_23501_23527 = state_23494__$1;
(statearr_23501_23527[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (6))){
var state_23494__$1 = state_23494;
var statearr_23502_23528 = state_23494__$1;
(statearr_23502_23528[(2)] = null);

(statearr_23502_23528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (3))){
var inst_23491 = (state_23494[(2)]);
var inst_23492 = cljs.core.async.close_BANG_.call(null,out);
var state_23494__$1 = (function (){var statearr_23503 = state_23494;
(statearr_23503[(9)] = inst_23491);

return statearr_23503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23494__$1,inst_23492);
} else {
if((state_val_23495 === (2))){
var state_23494__$1 = state_23494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23494__$1,(4),ch);
} else {
if((state_val_23495 === (11))){
var inst_23474 = (state_23494[(8)]);
var inst_23483 = (state_23494[(2)]);
var inst_23471 = inst_23474;
var state_23494__$1 = (function (){var statearr_23504 = state_23494;
(statearr_23504[(10)] = inst_23483);

(statearr_23504[(7)] = inst_23471);

return statearr_23504;
})();
var statearr_23505_23529 = state_23494__$1;
(statearr_23505_23529[(2)] = null);

(statearr_23505_23529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (9))){
var inst_23474 = (state_23494[(8)]);
var state_23494__$1 = state_23494;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23494__$1,(11),out,inst_23474);
} else {
if((state_val_23495 === (5))){
var inst_23474 = (state_23494[(8)]);
var inst_23471 = (state_23494[(7)]);
var inst_23478 = cljs.core._EQ_.call(null,inst_23474,inst_23471);
var state_23494__$1 = state_23494;
if(inst_23478){
var statearr_23507_23530 = state_23494__$1;
(statearr_23507_23530[(1)] = (8));

} else {
var statearr_23508_23531 = state_23494__$1;
(statearr_23508_23531[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (10))){
var inst_23486 = (state_23494[(2)]);
var state_23494__$1 = state_23494;
var statearr_23509_23532 = state_23494__$1;
(statearr_23509_23532[(2)] = inst_23486);

(statearr_23509_23532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23495 === (8))){
var inst_23471 = (state_23494[(7)]);
var tmp23506 = inst_23471;
var inst_23471__$1 = tmp23506;
var state_23494__$1 = (function (){var statearr_23510 = state_23494;
(statearr_23510[(7)] = inst_23471__$1);

return statearr_23510;
})();
var statearr_23511_23533 = state_23494__$1;
(statearr_23511_23533[(2)] = null);

(statearr_23511_23533[(1)] = (2));


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
});})(c__20950__auto___23523,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23523,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23515[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23515[(1)] = (1));

return statearr_23515;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23494){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23516){if((e23516 instanceof Object)){
var ex__20842__auto__ = e23516;
var statearr_23517_23534 = state_23494;
(statearr_23517_23534[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23535 = state_23494;
state_23494 = G__23535;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23523,out))
})();
var state__20952__auto__ = (function (){var statearr_23518 = f__20951__auto__.call(null);
(statearr_23518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23523);

return statearr_23518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23523,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args23536 = [];
var len__17884__auto___23606 = arguments.length;
var i__17885__auto___23607 = (0);
while(true){
if((i__17885__auto___23607 < len__17884__auto___23606)){
args23536.push((arguments[i__17885__auto___23607]));

var G__23608 = (i__17885__auto___23607 + (1));
i__17885__auto___23607 = G__23608;
continue;
} else {
}
break;
}

var G__23538 = args23536.length;
switch (G__23538) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23536.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23610,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23610,out){
return (function (state_23576){
var state_val_23577 = (state_23576[(1)]);
if((state_val_23577 === (7))){
var inst_23572 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23578_23611 = state_23576__$1;
(statearr_23578_23611[(2)] = inst_23572);

(statearr_23578_23611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (1))){
var inst_23539 = (new Array(n));
var inst_23540 = inst_23539;
var inst_23541 = (0);
var state_23576__$1 = (function (){var statearr_23579 = state_23576;
(statearr_23579[(7)] = inst_23540);

(statearr_23579[(8)] = inst_23541);

return statearr_23579;
})();
var statearr_23580_23612 = state_23576__$1;
(statearr_23580_23612[(2)] = null);

(statearr_23580_23612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (4))){
var inst_23544 = (state_23576[(9)]);
var inst_23544__$1 = (state_23576[(2)]);
var inst_23545 = (inst_23544__$1 == null);
var inst_23546 = cljs.core.not.call(null,inst_23545);
var state_23576__$1 = (function (){var statearr_23581 = state_23576;
(statearr_23581[(9)] = inst_23544__$1);

return statearr_23581;
})();
if(inst_23546){
var statearr_23582_23613 = state_23576__$1;
(statearr_23582_23613[(1)] = (5));

} else {
var statearr_23583_23614 = state_23576__$1;
(statearr_23583_23614[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (15))){
var inst_23566 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23584_23615 = state_23576__$1;
(statearr_23584_23615[(2)] = inst_23566);

(statearr_23584_23615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (13))){
var state_23576__$1 = state_23576;
var statearr_23585_23616 = state_23576__$1;
(statearr_23585_23616[(2)] = null);

(statearr_23585_23616[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (6))){
var inst_23541 = (state_23576[(8)]);
var inst_23562 = (inst_23541 > (0));
var state_23576__$1 = state_23576;
if(cljs.core.truth_(inst_23562)){
var statearr_23586_23617 = state_23576__$1;
(statearr_23586_23617[(1)] = (12));

} else {
var statearr_23587_23618 = state_23576__$1;
(statearr_23587_23618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (3))){
var inst_23574 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23576__$1,inst_23574);
} else {
if((state_val_23577 === (12))){
var inst_23540 = (state_23576[(7)]);
var inst_23564 = cljs.core.vec.call(null,inst_23540);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23576__$1,(15),out,inst_23564);
} else {
if((state_val_23577 === (2))){
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23576__$1,(4),ch);
} else {
if((state_val_23577 === (11))){
var inst_23556 = (state_23576[(2)]);
var inst_23557 = (new Array(n));
var inst_23540 = inst_23557;
var inst_23541 = (0);
var state_23576__$1 = (function (){var statearr_23588 = state_23576;
(statearr_23588[(10)] = inst_23556);

(statearr_23588[(7)] = inst_23540);

(statearr_23588[(8)] = inst_23541);

return statearr_23588;
})();
var statearr_23589_23619 = state_23576__$1;
(statearr_23589_23619[(2)] = null);

(statearr_23589_23619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (9))){
var inst_23540 = (state_23576[(7)]);
var inst_23554 = cljs.core.vec.call(null,inst_23540);
var state_23576__$1 = state_23576;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23576__$1,(11),out,inst_23554);
} else {
if((state_val_23577 === (5))){
var inst_23544 = (state_23576[(9)]);
var inst_23540 = (state_23576[(7)]);
var inst_23541 = (state_23576[(8)]);
var inst_23549 = (state_23576[(11)]);
var inst_23548 = (inst_23540[inst_23541] = inst_23544);
var inst_23549__$1 = (inst_23541 + (1));
var inst_23550 = (inst_23549__$1 < n);
var state_23576__$1 = (function (){var statearr_23590 = state_23576;
(statearr_23590[(11)] = inst_23549__$1);

(statearr_23590[(12)] = inst_23548);

return statearr_23590;
})();
if(cljs.core.truth_(inst_23550)){
var statearr_23591_23620 = state_23576__$1;
(statearr_23591_23620[(1)] = (8));

} else {
var statearr_23592_23621 = state_23576__$1;
(statearr_23592_23621[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (14))){
var inst_23569 = (state_23576[(2)]);
var inst_23570 = cljs.core.async.close_BANG_.call(null,out);
var state_23576__$1 = (function (){var statearr_23594 = state_23576;
(statearr_23594[(13)] = inst_23569);

return statearr_23594;
})();
var statearr_23595_23622 = state_23576__$1;
(statearr_23595_23622[(2)] = inst_23570);

(statearr_23595_23622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (10))){
var inst_23560 = (state_23576[(2)]);
var state_23576__$1 = state_23576;
var statearr_23596_23623 = state_23576__$1;
(statearr_23596_23623[(2)] = inst_23560);

(statearr_23596_23623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23577 === (8))){
var inst_23540 = (state_23576[(7)]);
var inst_23549 = (state_23576[(11)]);
var tmp23593 = inst_23540;
var inst_23540__$1 = tmp23593;
var inst_23541 = inst_23549;
var state_23576__$1 = (function (){var statearr_23597 = state_23576;
(statearr_23597[(7)] = inst_23540__$1);

(statearr_23597[(8)] = inst_23541);

return statearr_23597;
})();
var statearr_23598_23624 = state_23576__$1;
(statearr_23598_23624[(2)] = null);

(statearr_23598_23624[(1)] = (2));


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
});})(c__20950__auto___23610,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23610,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23602[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23602[(1)] = (1));

return statearr_23602;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23576){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23576);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23603){if((e23603 instanceof Object)){
var ex__20842__auto__ = e23603;
var statearr_23604_23625 = state_23576;
(statearr_23604_23625[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23576);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23626 = state_23576;
state_23576 = G__23626;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23576){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23610,out))
})();
var state__20952__auto__ = (function (){var statearr_23605 = f__20951__auto__.call(null);
(statearr_23605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23610);

return statearr_23605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23610,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args23627 = [];
var len__17884__auto___23701 = arguments.length;
var i__17885__auto___23702 = (0);
while(true){
if((i__17885__auto___23702 < len__17884__auto___23701)){
args23627.push((arguments[i__17885__auto___23702]));

var G__23703 = (i__17885__auto___23702 + (1));
i__17885__auto___23702 = G__23703;
continue;
} else {
}
break;
}

var G__23629 = args23627.length;
switch (G__23629) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23627.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20950__auto___23705 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20950__auto___23705,out){
return (function (){
var f__20951__auto__ = (function (){var switch__20838__auto__ = ((function (c__20950__auto___23705,out){
return (function (state_23671){
var state_val_23672 = (state_23671[(1)]);
if((state_val_23672 === (7))){
var inst_23667 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
var statearr_23673_23706 = state_23671__$1;
(statearr_23673_23706[(2)] = inst_23667);

(statearr_23673_23706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (1))){
var inst_23630 = [];
var inst_23631 = inst_23630;
var inst_23632 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23671__$1 = (function (){var statearr_23674 = state_23671;
(statearr_23674[(7)] = inst_23631);

(statearr_23674[(8)] = inst_23632);

return statearr_23674;
})();
var statearr_23675_23707 = state_23671__$1;
(statearr_23675_23707[(2)] = null);

(statearr_23675_23707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (4))){
var inst_23635 = (state_23671[(9)]);
var inst_23635__$1 = (state_23671[(2)]);
var inst_23636 = (inst_23635__$1 == null);
var inst_23637 = cljs.core.not.call(null,inst_23636);
var state_23671__$1 = (function (){var statearr_23676 = state_23671;
(statearr_23676[(9)] = inst_23635__$1);

return statearr_23676;
})();
if(inst_23637){
var statearr_23677_23708 = state_23671__$1;
(statearr_23677_23708[(1)] = (5));

} else {
var statearr_23678_23709 = state_23671__$1;
(statearr_23678_23709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (15))){
var inst_23661 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
var statearr_23679_23710 = state_23671__$1;
(statearr_23679_23710[(2)] = inst_23661);

(statearr_23679_23710[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (13))){
var state_23671__$1 = state_23671;
var statearr_23680_23711 = state_23671__$1;
(statearr_23680_23711[(2)] = null);

(statearr_23680_23711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (6))){
var inst_23631 = (state_23671[(7)]);
var inst_23656 = inst_23631.length;
var inst_23657 = (inst_23656 > (0));
var state_23671__$1 = state_23671;
if(cljs.core.truth_(inst_23657)){
var statearr_23681_23712 = state_23671__$1;
(statearr_23681_23712[(1)] = (12));

} else {
var statearr_23682_23713 = state_23671__$1;
(statearr_23682_23713[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (3))){
var inst_23669 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23671__$1,inst_23669);
} else {
if((state_val_23672 === (12))){
var inst_23631 = (state_23671[(7)]);
var inst_23659 = cljs.core.vec.call(null,inst_23631);
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23671__$1,(15),out,inst_23659);
} else {
if((state_val_23672 === (2))){
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23671__$1,(4),ch);
} else {
if((state_val_23672 === (11))){
var inst_23639 = (state_23671[(10)]);
var inst_23635 = (state_23671[(9)]);
var inst_23649 = (state_23671[(2)]);
var inst_23650 = [];
var inst_23651 = inst_23650.push(inst_23635);
var inst_23631 = inst_23650;
var inst_23632 = inst_23639;
var state_23671__$1 = (function (){var statearr_23683 = state_23671;
(statearr_23683[(11)] = inst_23651);

(statearr_23683[(12)] = inst_23649);

(statearr_23683[(7)] = inst_23631);

(statearr_23683[(8)] = inst_23632);

return statearr_23683;
})();
var statearr_23684_23714 = state_23671__$1;
(statearr_23684_23714[(2)] = null);

(statearr_23684_23714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (9))){
var inst_23631 = (state_23671[(7)]);
var inst_23647 = cljs.core.vec.call(null,inst_23631);
var state_23671__$1 = state_23671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23671__$1,(11),out,inst_23647);
} else {
if((state_val_23672 === (5))){
var inst_23639 = (state_23671[(10)]);
var inst_23635 = (state_23671[(9)]);
var inst_23632 = (state_23671[(8)]);
var inst_23639__$1 = f.call(null,inst_23635);
var inst_23640 = cljs.core._EQ_.call(null,inst_23639__$1,inst_23632);
var inst_23641 = cljs.core.keyword_identical_QMARK_.call(null,inst_23632,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_23642 = (inst_23640) || (inst_23641);
var state_23671__$1 = (function (){var statearr_23685 = state_23671;
(statearr_23685[(10)] = inst_23639__$1);

return statearr_23685;
})();
if(cljs.core.truth_(inst_23642)){
var statearr_23686_23715 = state_23671__$1;
(statearr_23686_23715[(1)] = (8));

} else {
var statearr_23687_23716 = state_23671__$1;
(statearr_23687_23716[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (14))){
var inst_23664 = (state_23671[(2)]);
var inst_23665 = cljs.core.async.close_BANG_.call(null,out);
var state_23671__$1 = (function (){var statearr_23689 = state_23671;
(statearr_23689[(13)] = inst_23664);

return statearr_23689;
})();
var statearr_23690_23717 = state_23671__$1;
(statearr_23690_23717[(2)] = inst_23665);

(statearr_23690_23717[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (10))){
var inst_23654 = (state_23671[(2)]);
var state_23671__$1 = state_23671;
var statearr_23691_23718 = state_23671__$1;
(statearr_23691_23718[(2)] = inst_23654);

(statearr_23691_23718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23672 === (8))){
var inst_23639 = (state_23671[(10)]);
var inst_23631 = (state_23671[(7)]);
var inst_23635 = (state_23671[(9)]);
var inst_23644 = inst_23631.push(inst_23635);
var tmp23688 = inst_23631;
var inst_23631__$1 = tmp23688;
var inst_23632 = inst_23639;
var state_23671__$1 = (function (){var statearr_23692 = state_23671;
(statearr_23692[(14)] = inst_23644);

(statearr_23692[(7)] = inst_23631__$1);

(statearr_23692[(8)] = inst_23632);

return statearr_23692;
})();
var statearr_23693_23719 = state_23671__$1;
(statearr_23693_23719[(2)] = null);

(statearr_23693_23719[(1)] = (2));


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
});})(c__20950__auto___23705,out))
;
return ((function (switch__20838__auto__,c__20950__auto___23705,out){
return (function() {
var cljs$core$async$state_machine__20839__auto__ = null;
var cljs$core$async$state_machine__20839__auto____0 = (function (){
var statearr_23697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23697[(0)] = cljs$core$async$state_machine__20839__auto__);

(statearr_23697[(1)] = (1));

return statearr_23697;
});
var cljs$core$async$state_machine__20839__auto____1 = (function (state_23671){
while(true){
var ret_value__20840__auto__ = (function (){try{while(true){
var result__20841__auto__ = switch__20838__auto__.call(null,state_23671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20841__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20841__auto__;
}
break;
}
}catch (e23698){if((e23698 instanceof Object)){
var ex__20842__auto__ = e23698;
var statearr_23699_23720 = state_23671;
(statearr_23699_23720[(5)] = ex__20842__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20840__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23721 = state_23671;
state_23671 = G__23721;
continue;
} else {
return ret_value__20840__auto__;
}
break;
}
});
cljs$core$async$state_machine__20839__auto__ = function(state_23671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20839__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20839__auto____1.call(this,state_23671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20839__auto____0;
cljs$core$async$state_machine__20839__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20839__auto____1;
return cljs$core$async$state_machine__20839__auto__;
})()
;})(switch__20838__auto__,c__20950__auto___23705,out))
})();
var state__20952__auto__ = (function (){var statearr_23700 = f__20951__auto__.call(null);
(statearr_23700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20950__auto___23705);

return statearr_23700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20952__auto__);
});})(c__20950__auto___23705,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1449036925099