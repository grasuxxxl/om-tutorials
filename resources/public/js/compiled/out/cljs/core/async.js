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
var args20286 = [];
var len__17884__auto___20292 = arguments.length;
var i__17885__auto___20293 = (0);
while(true){
if((i__17885__auto___20293 < len__17884__auto___20292)){
args20286.push((arguments[i__17885__auto___20293]));

var G__20294 = (i__17885__auto___20293 + (1));
i__17885__auto___20293 = G__20294;
continue;
} else {
}
break;
}

var G__20288 = args20286.length;
switch (G__20288) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20286.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async20289 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20289 = (function (f,blockable,meta20290){
this.f = f;
this.blockable = blockable;
this.meta20290 = meta20290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20291,meta20290__$1){
var self__ = this;
var _20291__$1 = this;
return (new cljs.core.async.t_cljs$core$async20289(self__.f,self__.blockable,meta20290__$1));
});

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20291){
var self__ = this;
var _20291__$1 = this;
return self__.meta20290;
});

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async20289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async20289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta20290","meta20290",890239734,null)], null);
});

cljs.core.async.t_cljs$core$async20289.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20289";

cljs.core.async.t_cljs$core$async20289.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20289");
});

cljs.core.async.__GT_t_cljs$core$async20289 = (function cljs$core$async$__GT_t_cljs$core$async20289(f__$1,blockable__$1,meta20290){
return (new cljs.core.async.t_cljs$core$async20289(f__$1,blockable__$1,meta20290));
});

}

return (new cljs.core.async.t_cljs$core$async20289(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args20298 = [];
var len__17884__auto___20301 = arguments.length;
var i__17885__auto___20302 = (0);
while(true){
if((i__17885__auto___20302 < len__17884__auto___20301)){
args20298.push((arguments[i__17885__auto___20302]));

var G__20303 = (i__17885__auto___20302 + (1));
i__17885__auto___20302 = G__20303;
continue;
} else {
}
break;
}

var G__20300 = args20298.length;
switch (G__20300) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20298.length)].join('')));

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
var args20305 = [];
var len__17884__auto___20308 = arguments.length;
var i__17885__auto___20309 = (0);
while(true){
if((i__17885__auto___20309 < len__17884__auto___20308)){
args20305.push((arguments[i__17885__auto___20309]));

var G__20310 = (i__17885__auto___20309 + (1));
i__17885__auto___20309 = G__20310;
continue;
} else {
}
break;
}

var G__20307 = args20305.length;
switch (G__20307) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20305.length)].join('')));

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
var args20312 = [];
var len__17884__auto___20315 = arguments.length;
var i__17885__auto___20316 = (0);
while(true){
if((i__17885__auto___20316 < len__17884__auto___20315)){
args20312.push((arguments[i__17885__auto___20316]));

var G__20317 = (i__17885__auto___20316 + (1));
i__17885__auto___20316 = G__20317;
continue;
} else {
}
break;
}

var G__20314 = args20312.length;
switch (G__20314) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20312.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_20319 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_20319);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_20319,ret){
return (function (){
return fn1.call(null,val_20319);
});})(val_20319,ret))
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
var args20320 = [];
var len__17884__auto___20323 = arguments.length;
var i__17885__auto___20324 = (0);
while(true){
if((i__17885__auto___20324 < len__17884__auto___20323)){
args20320.push((arguments[i__17885__auto___20324]));

var G__20325 = (i__17885__auto___20324 + (1));
i__17885__auto___20324 = G__20325;
continue;
} else {
}
break;
}

var G__20322 = args20320.length;
switch (G__20322) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20320.length)].join('')));

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
var n__17729__auto___20327 = n;
var x_20328 = (0);
while(true){
if((x_20328 < n__17729__auto___20327)){
(a[x_20328] = (0));

var G__20329 = (x_20328 + (1));
x_20328 = G__20329;
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

var G__20330 = (i + (1));
i = G__20330;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async20334 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20334 = (function (alt_flag,flag,meta20335){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta20335 = meta20335;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_20336,meta20335__$1){
var self__ = this;
var _20336__$1 = this;
return (new cljs.core.async.t_cljs$core$async20334(self__.alt_flag,self__.flag,meta20335__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_20336){
var self__ = this;
var _20336__$1 = this;
return self__.meta20335;
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta20335","meta20335",1612653356,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async20334.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20334.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20334";

cljs.core.async.t_cljs$core$async20334.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20334");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async20334 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async20334(alt_flag__$1,flag__$1,meta20335){
return (new cljs.core.async.t_cljs$core$async20334(alt_flag__$1,flag__$1,meta20335));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async20334(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async20340 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20340 = (function (alt_handler,flag,cb,meta20341){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta20341 = meta20341;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20342,meta20341__$1){
var self__ = this;
var _20342__$1 = this;
return (new cljs.core.async.t_cljs$core$async20340(self__.alt_handler,self__.flag,self__.cb,meta20341__$1));
});

cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20342){
var self__ = this;
var _20342__$1 = this;
return self__.meta20341;
});

cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async20340.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async20340.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta20341","meta20341",-1709773926,null)], null);
});

cljs.core.async.t_cljs$core$async20340.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async20340.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20340";

cljs.core.async.t_cljs$core$async20340.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async20340");
});

cljs.core.async.__GT_t_cljs$core$async20340 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async20340(alt_handler__$1,flag__$1,cb__$1,meta20341){
return (new cljs.core.async.t_cljs$core$async20340(alt_handler__$1,flag__$1,cb__$1,meta20341));
});

}

return (new cljs.core.async.t_cljs$core$async20340(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__20343_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20343_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__20344_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__20344_SHARP_,port], null));
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
var G__20345 = (i + (1));
i = G__20345;
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
var len__17884__auto___20351 = arguments.length;
var i__17885__auto___20352 = (0);
while(true){
if((i__17885__auto___20352 < len__17884__auto___20351)){
args__17891__auto__.push((arguments[i__17885__auto___20352]));

var G__20353 = (i__17885__auto___20352 + (1));
i__17885__auto___20352 = G__20353;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__20348){
var map__20349 = p__20348;
var map__20349__$1 = ((((!((map__20349 == null)))?((((map__20349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20349):map__20349);
var opts = map__20349__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq20346){
var G__20347 = cljs.core.first.call(null,seq20346);
var seq20346__$1 = cljs.core.next.call(null,seq20346);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__20347,seq20346__$1);
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
var args20354 = [];
var len__17884__auto___20404 = arguments.length;
var i__17885__auto___20405 = (0);
while(true){
if((i__17885__auto___20405 < len__17884__auto___20404)){
args20354.push((arguments[i__17885__auto___20405]));

var G__20406 = (i__17885__auto___20405 + (1));
i__17885__auto___20405 = G__20406;
continue;
} else {
}
break;
}

var G__20356 = args20354.length;
switch (G__20356) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20354.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__20241__auto___20408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___20408){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___20408){
return (function (state_20380){
var state_val_20381 = (state_20380[(1)]);
if((state_val_20381 === (7))){
var inst_20376 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20382_20409 = state_20380__$1;
(statearr_20382_20409[(2)] = inst_20376);

(statearr_20382_20409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (1))){
var state_20380__$1 = state_20380;
var statearr_20383_20410 = state_20380__$1;
(statearr_20383_20410[(2)] = null);

(statearr_20383_20410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (4))){
var inst_20359 = (state_20380[(7)]);
var inst_20359__$1 = (state_20380[(2)]);
var inst_20360 = (inst_20359__$1 == null);
var state_20380__$1 = (function (){var statearr_20384 = state_20380;
(statearr_20384[(7)] = inst_20359__$1);

return statearr_20384;
})();
if(cljs.core.truth_(inst_20360)){
var statearr_20385_20411 = state_20380__$1;
(statearr_20385_20411[(1)] = (5));

} else {
var statearr_20386_20412 = state_20380__$1;
(statearr_20386_20412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (13))){
var state_20380__$1 = state_20380;
var statearr_20387_20413 = state_20380__$1;
(statearr_20387_20413[(2)] = null);

(statearr_20387_20413[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (6))){
var inst_20359 = (state_20380[(7)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20380__$1,(11),to,inst_20359);
} else {
if((state_val_20381 === (3))){
var inst_20378 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20380__$1,inst_20378);
} else {
if((state_val_20381 === (12))){
var state_20380__$1 = state_20380;
var statearr_20388_20414 = state_20380__$1;
(statearr_20388_20414[(2)] = null);

(statearr_20388_20414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (2))){
var state_20380__$1 = state_20380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20380__$1,(4),from);
} else {
if((state_val_20381 === (11))){
var inst_20369 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
if(cljs.core.truth_(inst_20369)){
var statearr_20389_20415 = state_20380__$1;
(statearr_20389_20415[(1)] = (12));

} else {
var statearr_20390_20416 = state_20380__$1;
(statearr_20390_20416[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (9))){
var state_20380__$1 = state_20380;
var statearr_20391_20417 = state_20380__$1;
(statearr_20391_20417[(2)] = null);

(statearr_20391_20417[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (5))){
var state_20380__$1 = state_20380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20392_20418 = state_20380__$1;
(statearr_20392_20418[(1)] = (8));

} else {
var statearr_20393_20419 = state_20380__$1;
(statearr_20393_20419[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (14))){
var inst_20374 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20394_20420 = state_20380__$1;
(statearr_20394_20420[(2)] = inst_20374);

(statearr_20394_20420[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (10))){
var inst_20366 = (state_20380[(2)]);
var state_20380__$1 = state_20380;
var statearr_20395_20421 = state_20380__$1;
(statearr_20395_20421[(2)] = inst_20366);

(statearr_20395_20421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20381 === (8))){
var inst_20363 = cljs.core.async.close_BANG_.call(null,to);
var state_20380__$1 = state_20380;
var statearr_20396_20422 = state_20380__$1;
(statearr_20396_20422[(2)] = inst_20363);

(statearr_20396_20422[(1)] = (10));


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
});})(c__20241__auto___20408))
;
return ((function (switch__20129__auto__,c__20241__auto___20408){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_20400 = [null,null,null,null,null,null,null,null];
(statearr_20400[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_20400[(1)] = (1));

return statearr_20400;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_20380){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20401){if((e20401 instanceof Object)){
var ex__20133__auto__ = e20401;
var statearr_20402_20423 = state_20380;
(statearr_20402_20423[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20401;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20424 = state_20380;
state_20380 = G__20424;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_20380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_20380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___20408))
})();
var state__20243__auto__ = (function (){var statearr_20403 = f__20242__auto__.call(null);
(statearr_20403[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20408);

return statearr_20403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___20408))
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
return (function (p__20608){
var vec__20609 = p__20608;
var v = cljs.core.nth.call(null,vec__20609,(0),null);
var p = cljs.core.nth.call(null,vec__20609,(1),null);
var job = vec__20609;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__20241__auto___20791 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results){
return (function (state_20614){
var state_val_20615 = (state_20614[(1)]);
if((state_val_20615 === (1))){
var state_20614__$1 = state_20614;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20614__$1,(2),res,v);
} else {
if((state_val_20615 === (2))){
var inst_20611 = (state_20614[(2)]);
var inst_20612 = cljs.core.async.close_BANG_.call(null,res);
var state_20614__$1 = (function (){var statearr_20616 = state_20614;
(statearr_20616[(7)] = inst_20611);

return statearr_20616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20614__$1,inst_20612);
} else {
return null;
}
}
});})(c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results))
;
return ((function (switch__20129__auto__,c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_20620 = [null,null,null,null,null,null,null,null];
(statearr_20620[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__);

(statearr_20620[(1)] = (1));

return statearr_20620;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1 = (function (state_20614){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20614);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20621){if((e20621 instanceof Object)){
var ex__20133__auto__ = e20621;
var statearr_20622_20792 = state_20614;
(statearr_20622_20792[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20614);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20793 = state_20614;
state_20614 = G__20793;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = function(state_20614){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1.call(this,state_20614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results))
})();
var state__20243__auto__ = (function (){var statearr_20623 = f__20242__auto__.call(null);
(statearr_20623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20791);

return statearr_20623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___20791,res,vec__20609,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__20624){
var vec__20625 = p__20624;
var v = cljs.core.nth.call(null,vec__20625,(0),null);
var p = cljs.core.nth.call(null,vec__20625,(1),null);
var job = vec__20625;
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
var n__17729__auto___20794 = n;
var __20795 = (0);
while(true){
if((__20795 < n__17729__auto___20794)){
var G__20626_20796 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__20626_20796) {
case "compute":
var c__20241__auto___20798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20795,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (__20795,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function (state_20639){
var state_val_20640 = (state_20639[(1)]);
if((state_val_20640 === (1))){
var state_20639__$1 = state_20639;
var statearr_20641_20799 = state_20639__$1;
(statearr_20641_20799[(2)] = null);

(statearr_20641_20799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20640 === (2))){
var state_20639__$1 = state_20639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20639__$1,(4),jobs);
} else {
if((state_val_20640 === (3))){
var inst_20637 = (state_20639[(2)]);
var state_20639__$1 = state_20639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20639__$1,inst_20637);
} else {
if((state_val_20640 === (4))){
var inst_20629 = (state_20639[(2)]);
var inst_20630 = process.call(null,inst_20629);
var state_20639__$1 = state_20639;
if(cljs.core.truth_(inst_20630)){
var statearr_20642_20800 = state_20639__$1;
(statearr_20642_20800[(1)] = (5));

} else {
var statearr_20643_20801 = state_20639__$1;
(statearr_20643_20801[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20640 === (5))){
var state_20639__$1 = state_20639;
var statearr_20644_20802 = state_20639__$1;
(statearr_20644_20802[(2)] = null);

(statearr_20644_20802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20640 === (6))){
var state_20639__$1 = state_20639;
var statearr_20645_20803 = state_20639__$1;
(statearr_20645_20803[(2)] = null);

(statearr_20645_20803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20640 === (7))){
var inst_20635 = (state_20639[(2)]);
var state_20639__$1 = state_20639;
var statearr_20646_20804 = state_20639__$1;
(statearr_20646_20804[(2)] = inst_20635);

(statearr_20646_20804[(1)] = (3));


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
});})(__20795,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
;
return ((function (__20795,switch__20129__auto__,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_20650 = [null,null,null,null,null,null,null];
(statearr_20650[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__);

(statearr_20650[(1)] = (1));

return statearr_20650;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1 = (function (state_20639){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20651){if((e20651 instanceof Object)){
var ex__20133__auto__ = e20651;
var statearr_20652_20805 = state_20639;
(statearr_20652_20805[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20651;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20806 = state_20639;
state_20639 = G__20806;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = function(state_20639){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1.call(this,state_20639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__;
})()
;})(__20795,switch__20129__auto__,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
})();
var state__20243__auto__ = (function (){var statearr_20653 = f__20242__auto__.call(null);
(statearr_20653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20798);

return statearr_20653;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(__20795,c__20241__auto___20798,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
);


break;
case "async":
var c__20241__auto___20807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__20795,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (__20795,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function (state_20666){
var state_val_20667 = (state_20666[(1)]);
if((state_val_20667 === (1))){
var state_20666__$1 = state_20666;
var statearr_20668_20808 = state_20666__$1;
(statearr_20668_20808[(2)] = null);

(statearr_20668_20808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (2))){
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20666__$1,(4),jobs);
} else {
if((state_val_20667 === (3))){
var inst_20664 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20666__$1,inst_20664);
} else {
if((state_val_20667 === (4))){
var inst_20656 = (state_20666[(2)]);
var inst_20657 = async.call(null,inst_20656);
var state_20666__$1 = state_20666;
if(cljs.core.truth_(inst_20657)){
var statearr_20669_20809 = state_20666__$1;
(statearr_20669_20809[(1)] = (5));

} else {
var statearr_20670_20810 = state_20666__$1;
(statearr_20670_20810[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (5))){
var state_20666__$1 = state_20666;
var statearr_20671_20811 = state_20666__$1;
(statearr_20671_20811[(2)] = null);

(statearr_20671_20811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (6))){
var state_20666__$1 = state_20666;
var statearr_20672_20812 = state_20666__$1;
(statearr_20672_20812[(2)] = null);

(statearr_20672_20812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20667 === (7))){
var inst_20662 = (state_20666[(2)]);
var state_20666__$1 = state_20666;
var statearr_20673_20813 = state_20666__$1;
(statearr_20673_20813[(2)] = inst_20662);

(statearr_20673_20813[(1)] = (3));


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
});})(__20795,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
;
return ((function (__20795,switch__20129__auto__,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_20677 = [null,null,null,null,null,null,null];
(statearr_20677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__);

(statearr_20677[(1)] = (1));

return statearr_20677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1 = (function (state_20666){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20678){if((e20678 instanceof Object)){
var ex__20133__auto__ = e20678;
var statearr_20679_20814 = state_20666;
(statearr_20679_20814[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20815 = state_20666;
state_20666 = G__20815;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = function(state_20666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1.call(this,state_20666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__;
})()
;})(__20795,switch__20129__auto__,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
})();
var state__20243__auto__ = (function (){var statearr_20680 = f__20242__auto__.call(null);
(statearr_20680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20807);

return statearr_20680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(__20795,c__20241__auto___20807,G__20626_20796,n__17729__auto___20794,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__20816 = (__20795 + (1));
__20795 = G__20816;
continue;
} else {
}
break;
}

var c__20241__auto___20817 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___20817,jobs,results,process,async){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___20817,jobs,results,process,async){
return (function (state_20702){
var state_val_20703 = (state_20702[(1)]);
if((state_val_20703 === (1))){
var state_20702__$1 = state_20702;
var statearr_20704_20818 = state_20702__$1;
(statearr_20704_20818[(2)] = null);

(statearr_20704_20818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (2))){
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20702__$1,(4),from);
} else {
if((state_val_20703 === (3))){
var inst_20700 = (state_20702[(2)]);
var state_20702__$1 = state_20702;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20702__$1,inst_20700);
} else {
if((state_val_20703 === (4))){
var inst_20683 = (state_20702[(7)]);
var inst_20683__$1 = (state_20702[(2)]);
var inst_20684 = (inst_20683__$1 == null);
var state_20702__$1 = (function (){var statearr_20705 = state_20702;
(statearr_20705[(7)] = inst_20683__$1);

return statearr_20705;
})();
if(cljs.core.truth_(inst_20684)){
var statearr_20706_20819 = state_20702__$1;
(statearr_20706_20819[(1)] = (5));

} else {
var statearr_20707_20820 = state_20702__$1;
(statearr_20707_20820[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (5))){
var inst_20686 = cljs.core.async.close_BANG_.call(null,jobs);
var state_20702__$1 = state_20702;
var statearr_20708_20821 = state_20702__$1;
(statearr_20708_20821[(2)] = inst_20686);

(statearr_20708_20821[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (6))){
var inst_20688 = (state_20702[(8)]);
var inst_20683 = (state_20702[(7)]);
var inst_20688__$1 = cljs.core.async.chan.call(null,(1));
var inst_20689 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_20690 = [inst_20683,inst_20688__$1];
var inst_20691 = (new cljs.core.PersistentVector(null,2,(5),inst_20689,inst_20690,null));
var state_20702__$1 = (function (){var statearr_20709 = state_20702;
(statearr_20709[(8)] = inst_20688__$1);

return statearr_20709;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20702__$1,(8),jobs,inst_20691);
} else {
if((state_val_20703 === (7))){
var inst_20698 = (state_20702[(2)]);
var state_20702__$1 = state_20702;
var statearr_20710_20822 = state_20702__$1;
(statearr_20710_20822[(2)] = inst_20698);

(statearr_20710_20822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20703 === (8))){
var inst_20688 = (state_20702[(8)]);
var inst_20693 = (state_20702[(2)]);
var state_20702__$1 = (function (){var statearr_20711 = state_20702;
(statearr_20711[(9)] = inst_20693);

return statearr_20711;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20702__$1,(9),results,inst_20688);
} else {
if((state_val_20703 === (9))){
var inst_20695 = (state_20702[(2)]);
var state_20702__$1 = (function (){var statearr_20712 = state_20702;
(statearr_20712[(10)] = inst_20695);

return statearr_20712;
})();
var statearr_20713_20823 = state_20702__$1;
(statearr_20713_20823[(2)] = null);

(statearr_20713_20823[(1)] = (2));


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
});})(c__20241__auto___20817,jobs,results,process,async))
;
return ((function (switch__20129__auto__,c__20241__auto___20817,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_20717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20717[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__);

(statearr_20717[(1)] = (1));

return statearr_20717;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1 = (function (state_20702){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20702);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20718){if((e20718 instanceof Object)){
var ex__20133__auto__ = e20718;
var statearr_20719_20824 = state_20702;
(statearr_20719_20824[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20702);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20825 = state_20702;
state_20702 = G__20825;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = function(state_20702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1.call(this,state_20702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___20817,jobs,results,process,async))
})();
var state__20243__auto__ = (function (){var statearr_20720 = f__20242__auto__.call(null);
(statearr_20720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20817);

return statearr_20720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___20817,jobs,results,process,async))
);


var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__,jobs,results,process,async){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__,jobs,results,process,async){
return (function (state_20758){
var state_val_20759 = (state_20758[(1)]);
if((state_val_20759 === (7))){
var inst_20754 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
var statearr_20760_20826 = state_20758__$1;
(statearr_20760_20826[(2)] = inst_20754);

(statearr_20760_20826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (20))){
var state_20758__$1 = state_20758;
var statearr_20761_20827 = state_20758__$1;
(statearr_20761_20827[(2)] = null);

(statearr_20761_20827[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (1))){
var state_20758__$1 = state_20758;
var statearr_20762_20828 = state_20758__$1;
(statearr_20762_20828[(2)] = null);

(statearr_20762_20828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (4))){
var inst_20723 = (state_20758[(7)]);
var inst_20723__$1 = (state_20758[(2)]);
var inst_20724 = (inst_20723__$1 == null);
var state_20758__$1 = (function (){var statearr_20763 = state_20758;
(statearr_20763[(7)] = inst_20723__$1);

return statearr_20763;
})();
if(cljs.core.truth_(inst_20724)){
var statearr_20764_20829 = state_20758__$1;
(statearr_20764_20829[(1)] = (5));

} else {
var statearr_20765_20830 = state_20758__$1;
(statearr_20765_20830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (15))){
var inst_20736 = (state_20758[(8)]);
var state_20758__$1 = state_20758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20758__$1,(18),to,inst_20736);
} else {
if((state_val_20759 === (21))){
var inst_20749 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
var statearr_20766_20831 = state_20758__$1;
(statearr_20766_20831[(2)] = inst_20749);

(statearr_20766_20831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (13))){
var inst_20751 = (state_20758[(2)]);
var state_20758__$1 = (function (){var statearr_20767 = state_20758;
(statearr_20767[(9)] = inst_20751);

return statearr_20767;
})();
var statearr_20768_20832 = state_20758__$1;
(statearr_20768_20832[(2)] = null);

(statearr_20768_20832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (6))){
var inst_20723 = (state_20758[(7)]);
var state_20758__$1 = state_20758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20758__$1,(11),inst_20723);
} else {
if((state_val_20759 === (17))){
var inst_20744 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
if(cljs.core.truth_(inst_20744)){
var statearr_20769_20833 = state_20758__$1;
(statearr_20769_20833[(1)] = (19));

} else {
var statearr_20770_20834 = state_20758__$1;
(statearr_20770_20834[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (3))){
var inst_20756 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20758__$1,inst_20756);
} else {
if((state_val_20759 === (12))){
var inst_20733 = (state_20758[(10)]);
var state_20758__$1 = state_20758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20758__$1,(14),inst_20733);
} else {
if((state_val_20759 === (2))){
var state_20758__$1 = state_20758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20758__$1,(4),results);
} else {
if((state_val_20759 === (19))){
var state_20758__$1 = state_20758;
var statearr_20771_20835 = state_20758__$1;
(statearr_20771_20835[(2)] = null);

(statearr_20771_20835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (11))){
var inst_20733 = (state_20758[(2)]);
var state_20758__$1 = (function (){var statearr_20772 = state_20758;
(statearr_20772[(10)] = inst_20733);

return statearr_20772;
})();
var statearr_20773_20836 = state_20758__$1;
(statearr_20773_20836[(2)] = null);

(statearr_20773_20836[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (9))){
var state_20758__$1 = state_20758;
var statearr_20774_20837 = state_20758__$1;
(statearr_20774_20837[(2)] = null);

(statearr_20774_20837[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (5))){
var state_20758__$1 = state_20758;
if(cljs.core.truth_(close_QMARK_)){
var statearr_20775_20838 = state_20758__$1;
(statearr_20775_20838[(1)] = (8));

} else {
var statearr_20776_20839 = state_20758__$1;
(statearr_20776_20839[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (14))){
var inst_20738 = (state_20758[(11)]);
var inst_20736 = (state_20758[(8)]);
var inst_20736__$1 = (state_20758[(2)]);
var inst_20737 = (inst_20736__$1 == null);
var inst_20738__$1 = cljs.core.not.call(null,inst_20737);
var state_20758__$1 = (function (){var statearr_20777 = state_20758;
(statearr_20777[(11)] = inst_20738__$1);

(statearr_20777[(8)] = inst_20736__$1);

return statearr_20777;
})();
if(inst_20738__$1){
var statearr_20778_20840 = state_20758__$1;
(statearr_20778_20840[(1)] = (15));

} else {
var statearr_20779_20841 = state_20758__$1;
(statearr_20779_20841[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (16))){
var inst_20738 = (state_20758[(11)]);
var state_20758__$1 = state_20758;
var statearr_20780_20842 = state_20758__$1;
(statearr_20780_20842[(2)] = inst_20738);

(statearr_20780_20842[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (10))){
var inst_20730 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
var statearr_20781_20843 = state_20758__$1;
(statearr_20781_20843[(2)] = inst_20730);

(statearr_20781_20843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (18))){
var inst_20741 = (state_20758[(2)]);
var state_20758__$1 = state_20758;
var statearr_20782_20844 = state_20758__$1;
(statearr_20782_20844[(2)] = inst_20741);

(statearr_20782_20844[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20759 === (8))){
var inst_20727 = cljs.core.async.close_BANG_.call(null,to);
var state_20758__$1 = state_20758;
var statearr_20783_20845 = state_20758__$1;
(statearr_20783_20845[(2)] = inst_20727);

(statearr_20783_20845[(1)] = (10));


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
});})(c__20241__auto__,jobs,results,process,async))
;
return ((function (switch__20129__auto__,c__20241__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_20787 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__);

(statearr_20787[(1)] = (1));

return statearr_20787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1 = (function (state_20758){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20788){if((e20788 instanceof Object)){
var ex__20133__auto__ = e20788;
var statearr_20789_20846 = state_20758;
(statearr_20789_20846[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20788;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20847 = state_20758;
state_20758 = G__20847;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__ = function(state_20758){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1.call(this,state_20758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__,jobs,results,process,async))
})();
var state__20243__auto__ = (function (){var statearr_20790 = f__20242__auto__.call(null);
(statearr_20790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_20790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__,jobs,results,process,async))
);

return c__20241__auto__;
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
var args20848 = [];
var len__17884__auto___20851 = arguments.length;
var i__17885__auto___20852 = (0);
while(true){
if((i__17885__auto___20852 < len__17884__auto___20851)){
args20848.push((arguments[i__17885__auto___20852]));

var G__20853 = (i__17885__auto___20852 + (1));
i__17885__auto___20852 = G__20853;
continue;
} else {
}
break;
}

var G__20850 = args20848.length;
switch (G__20850) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20848.length)].join('')));

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
var args20855 = [];
var len__17884__auto___20858 = arguments.length;
var i__17885__auto___20859 = (0);
while(true){
if((i__17885__auto___20859 < len__17884__auto___20858)){
args20855.push((arguments[i__17885__auto___20859]));

var G__20860 = (i__17885__auto___20859 + (1));
i__17885__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var G__20857 = args20855.length;
switch (G__20857) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20855.length)].join('')));

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
var args20862 = [];
var len__17884__auto___20915 = arguments.length;
var i__17885__auto___20916 = (0);
while(true){
if((i__17885__auto___20916 < len__17884__auto___20915)){
args20862.push((arguments[i__17885__auto___20916]));

var G__20917 = (i__17885__auto___20916 + (1));
i__17885__auto___20916 = G__20917;
continue;
} else {
}
break;
}

var G__20864 = args20862.length;
switch (G__20864) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20862.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__20241__auto___20919 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___20919,tc,fc){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___20919,tc,fc){
return (function (state_20890){
var state_val_20891 = (state_20890[(1)]);
if((state_val_20891 === (7))){
var inst_20886 = (state_20890[(2)]);
var state_20890__$1 = state_20890;
var statearr_20892_20920 = state_20890__$1;
(statearr_20892_20920[(2)] = inst_20886);

(statearr_20892_20920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (1))){
var state_20890__$1 = state_20890;
var statearr_20893_20921 = state_20890__$1;
(statearr_20893_20921[(2)] = null);

(statearr_20893_20921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (4))){
var inst_20867 = (state_20890[(7)]);
var inst_20867__$1 = (state_20890[(2)]);
var inst_20868 = (inst_20867__$1 == null);
var state_20890__$1 = (function (){var statearr_20894 = state_20890;
(statearr_20894[(7)] = inst_20867__$1);

return statearr_20894;
})();
if(cljs.core.truth_(inst_20868)){
var statearr_20895_20922 = state_20890__$1;
(statearr_20895_20922[(1)] = (5));

} else {
var statearr_20896_20923 = state_20890__$1;
(statearr_20896_20923[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (13))){
var state_20890__$1 = state_20890;
var statearr_20897_20924 = state_20890__$1;
(statearr_20897_20924[(2)] = null);

(statearr_20897_20924[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (6))){
var inst_20867 = (state_20890[(7)]);
var inst_20873 = p.call(null,inst_20867);
var state_20890__$1 = state_20890;
if(cljs.core.truth_(inst_20873)){
var statearr_20898_20925 = state_20890__$1;
(statearr_20898_20925[(1)] = (9));

} else {
var statearr_20899_20926 = state_20890__$1;
(statearr_20899_20926[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (3))){
var inst_20888 = (state_20890[(2)]);
var state_20890__$1 = state_20890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20890__$1,inst_20888);
} else {
if((state_val_20891 === (12))){
var state_20890__$1 = state_20890;
var statearr_20900_20927 = state_20890__$1;
(statearr_20900_20927[(2)] = null);

(statearr_20900_20927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (2))){
var state_20890__$1 = state_20890;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20890__$1,(4),ch);
} else {
if((state_val_20891 === (11))){
var inst_20867 = (state_20890[(7)]);
var inst_20877 = (state_20890[(2)]);
var state_20890__$1 = state_20890;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20890__$1,(8),inst_20877,inst_20867);
} else {
if((state_val_20891 === (9))){
var state_20890__$1 = state_20890;
var statearr_20901_20928 = state_20890__$1;
(statearr_20901_20928[(2)] = tc);

(statearr_20901_20928[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (5))){
var inst_20870 = cljs.core.async.close_BANG_.call(null,tc);
var inst_20871 = cljs.core.async.close_BANG_.call(null,fc);
var state_20890__$1 = (function (){var statearr_20902 = state_20890;
(statearr_20902[(8)] = inst_20870);

return statearr_20902;
})();
var statearr_20903_20929 = state_20890__$1;
(statearr_20903_20929[(2)] = inst_20871);

(statearr_20903_20929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (14))){
var inst_20884 = (state_20890[(2)]);
var state_20890__$1 = state_20890;
var statearr_20904_20930 = state_20890__$1;
(statearr_20904_20930[(2)] = inst_20884);

(statearr_20904_20930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (10))){
var state_20890__$1 = state_20890;
var statearr_20905_20931 = state_20890__$1;
(statearr_20905_20931[(2)] = fc);

(statearr_20905_20931[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20891 === (8))){
var inst_20879 = (state_20890[(2)]);
var state_20890__$1 = state_20890;
if(cljs.core.truth_(inst_20879)){
var statearr_20906_20932 = state_20890__$1;
(statearr_20906_20932[(1)] = (12));

} else {
var statearr_20907_20933 = state_20890__$1;
(statearr_20907_20933[(1)] = (13));

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
});})(c__20241__auto___20919,tc,fc))
;
return ((function (switch__20129__auto__,c__20241__auto___20919,tc,fc){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_20911 = [null,null,null,null,null,null,null,null,null];
(statearr_20911[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_20911[(1)] = (1));

return statearr_20911;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_20890){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e20912){if((e20912 instanceof Object)){
var ex__20133__auto__ = e20912;
var statearr_20913_20934 = state_20890;
(statearr_20913_20934[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20912;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20935 = state_20890;
state_20890 = G__20935;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_20890){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_20890);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___20919,tc,fc))
})();
var state__20243__auto__ = (function (){var statearr_20914 = f__20242__auto__.call(null);
(statearr_20914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___20919);

return statearr_20914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___20919,tc,fc))
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
var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__){
return (function (state_20999){
var state_val_21000 = (state_20999[(1)]);
if((state_val_21000 === (7))){
var inst_20995 = (state_20999[(2)]);
var state_20999__$1 = state_20999;
var statearr_21001_21022 = state_20999__$1;
(statearr_21001_21022[(2)] = inst_20995);

(statearr_21001_21022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (1))){
var inst_20979 = init;
var state_20999__$1 = (function (){var statearr_21002 = state_20999;
(statearr_21002[(7)] = inst_20979);

return statearr_21002;
})();
var statearr_21003_21023 = state_20999__$1;
(statearr_21003_21023[(2)] = null);

(statearr_21003_21023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (4))){
var inst_20982 = (state_20999[(8)]);
var inst_20982__$1 = (state_20999[(2)]);
var inst_20983 = (inst_20982__$1 == null);
var state_20999__$1 = (function (){var statearr_21004 = state_20999;
(statearr_21004[(8)] = inst_20982__$1);

return statearr_21004;
})();
if(cljs.core.truth_(inst_20983)){
var statearr_21005_21024 = state_20999__$1;
(statearr_21005_21024[(1)] = (5));

} else {
var statearr_21006_21025 = state_20999__$1;
(statearr_21006_21025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (6))){
var inst_20982 = (state_20999[(8)]);
var inst_20979 = (state_20999[(7)]);
var inst_20986 = (state_20999[(9)]);
var inst_20986__$1 = f.call(null,inst_20979,inst_20982);
var inst_20987 = cljs.core.reduced_QMARK_.call(null,inst_20986__$1);
var state_20999__$1 = (function (){var statearr_21007 = state_20999;
(statearr_21007[(9)] = inst_20986__$1);

return statearr_21007;
})();
if(inst_20987){
var statearr_21008_21026 = state_20999__$1;
(statearr_21008_21026[(1)] = (8));

} else {
var statearr_21009_21027 = state_20999__$1;
(statearr_21009_21027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (3))){
var inst_20997 = (state_20999[(2)]);
var state_20999__$1 = state_20999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20999__$1,inst_20997);
} else {
if((state_val_21000 === (2))){
var state_20999__$1 = state_20999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20999__$1,(4),ch);
} else {
if((state_val_21000 === (9))){
var inst_20986 = (state_20999[(9)]);
var inst_20979 = inst_20986;
var state_20999__$1 = (function (){var statearr_21010 = state_20999;
(statearr_21010[(7)] = inst_20979);

return statearr_21010;
})();
var statearr_21011_21028 = state_20999__$1;
(statearr_21011_21028[(2)] = null);

(statearr_21011_21028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (5))){
var inst_20979 = (state_20999[(7)]);
var state_20999__$1 = state_20999;
var statearr_21012_21029 = state_20999__$1;
(statearr_21012_21029[(2)] = inst_20979);

(statearr_21012_21029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (10))){
var inst_20993 = (state_20999[(2)]);
var state_20999__$1 = state_20999;
var statearr_21013_21030 = state_20999__$1;
(statearr_21013_21030[(2)] = inst_20993);

(statearr_21013_21030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21000 === (8))){
var inst_20986 = (state_20999[(9)]);
var inst_20989 = cljs.core.deref.call(null,inst_20986);
var state_20999__$1 = state_20999;
var statearr_21014_21031 = state_20999__$1;
(statearr_21014_21031[(2)] = inst_20989);

(statearr_21014_21031[(1)] = (10));


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
});})(c__20241__auto__))
;
return ((function (switch__20129__auto__,c__20241__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20130__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20130__auto____0 = (function (){
var statearr_21018 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21018[(0)] = cljs$core$async$reduce_$_state_machine__20130__auto__);

(statearr_21018[(1)] = (1));

return statearr_21018;
});
var cljs$core$async$reduce_$_state_machine__20130__auto____1 = (function (state_20999){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_20999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e21019){if((e21019 instanceof Object)){
var ex__20133__auto__ = e21019;
var statearr_21020_21032 = state_20999;
(statearr_21020_21032[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21019;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21033 = state_20999;
state_20999 = G__21033;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20130__auto__ = function(state_20999){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20130__auto____1.call(this,state_20999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20130__auto____0;
cljs$core$async$reduce_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20130__auto____1;
return cljs$core$async$reduce_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__))
})();
var state__20243__auto__ = (function (){var statearr_21021 = f__20242__auto__.call(null);
(statearr_21021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_21021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__))
);

return c__20241__auto__;
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
var args21034 = [];
var len__17884__auto___21086 = arguments.length;
var i__17885__auto___21087 = (0);
while(true){
if((i__17885__auto___21087 < len__17884__auto___21086)){
args21034.push((arguments[i__17885__auto___21087]));

var G__21088 = (i__17885__auto___21087 + (1));
i__17885__auto___21087 = G__21088;
continue;
} else {
}
break;
}

var G__21036 = args21034.length;
switch (G__21036) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21034.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__){
return (function (state_21061){
var state_val_21062 = (state_21061[(1)]);
if((state_val_21062 === (7))){
var inst_21043 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21063_21090 = state_21061__$1;
(statearr_21063_21090[(2)] = inst_21043);

(statearr_21063_21090[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (1))){
var inst_21037 = cljs.core.seq.call(null,coll);
var inst_21038 = inst_21037;
var state_21061__$1 = (function (){var statearr_21064 = state_21061;
(statearr_21064[(7)] = inst_21038);

return statearr_21064;
})();
var statearr_21065_21091 = state_21061__$1;
(statearr_21065_21091[(2)] = null);

(statearr_21065_21091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (4))){
var inst_21038 = (state_21061[(7)]);
var inst_21041 = cljs.core.first.call(null,inst_21038);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21061__$1,(7),ch,inst_21041);
} else {
if((state_val_21062 === (13))){
var inst_21055 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21066_21092 = state_21061__$1;
(statearr_21066_21092[(2)] = inst_21055);

(statearr_21066_21092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (6))){
var inst_21046 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
if(cljs.core.truth_(inst_21046)){
var statearr_21067_21093 = state_21061__$1;
(statearr_21067_21093[(1)] = (8));

} else {
var statearr_21068_21094 = state_21061__$1;
(statearr_21068_21094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (3))){
var inst_21059 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21061__$1,inst_21059);
} else {
if((state_val_21062 === (12))){
var state_21061__$1 = state_21061;
var statearr_21069_21095 = state_21061__$1;
(statearr_21069_21095[(2)] = null);

(statearr_21069_21095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (2))){
var inst_21038 = (state_21061[(7)]);
var state_21061__$1 = state_21061;
if(cljs.core.truth_(inst_21038)){
var statearr_21070_21096 = state_21061__$1;
(statearr_21070_21096[(1)] = (4));

} else {
var statearr_21071_21097 = state_21061__$1;
(statearr_21071_21097[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (11))){
var inst_21052 = cljs.core.async.close_BANG_.call(null,ch);
var state_21061__$1 = state_21061;
var statearr_21072_21098 = state_21061__$1;
(statearr_21072_21098[(2)] = inst_21052);

(statearr_21072_21098[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (9))){
var state_21061__$1 = state_21061;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21073_21099 = state_21061__$1;
(statearr_21073_21099[(1)] = (11));

} else {
var statearr_21074_21100 = state_21061__$1;
(statearr_21074_21100[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (5))){
var inst_21038 = (state_21061[(7)]);
var state_21061__$1 = state_21061;
var statearr_21075_21101 = state_21061__$1;
(statearr_21075_21101[(2)] = inst_21038);

(statearr_21075_21101[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (10))){
var inst_21057 = (state_21061[(2)]);
var state_21061__$1 = state_21061;
var statearr_21076_21102 = state_21061__$1;
(statearr_21076_21102[(2)] = inst_21057);

(statearr_21076_21102[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21062 === (8))){
var inst_21038 = (state_21061[(7)]);
var inst_21048 = cljs.core.next.call(null,inst_21038);
var inst_21038__$1 = inst_21048;
var state_21061__$1 = (function (){var statearr_21077 = state_21061;
(statearr_21077[(7)] = inst_21038__$1);

return statearr_21077;
})();
var statearr_21078_21103 = state_21061__$1;
(statearr_21078_21103[(2)] = null);

(statearr_21078_21103[(1)] = (2));


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
});})(c__20241__auto__))
;
return ((function (switch__20129__auto__,c__20241__auto__){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_21082 = [null,null,null,null,null,null,null,null];
(statearr_21082[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_21082[(1)] = (1));

return statearr_21082;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_21061){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_21061);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e21083){if((e21083 instanceof Object)){
var ex__20133__auto__ = e21083;
var statearr_21084_21104 = state_21061;
(statearr_21084_21104[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21061);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21083;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21105 = state_21061;
state_21061 = G__21105;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_21061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_21061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__))
})();
var state__20243__auto__ = (function (){var statearr_21085 = f__20242__auto__.call(null);
(statearr_21085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_21085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__))
);

return c__20241__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async21327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21327 = (function (mult,ch,cs,meta21328){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta21328 = meta21328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_21329,meta21328__$1){
var self__ = this;
var _21329__$1 = this;
return (new cljs.core.async.t_cljs$core$async21327(self__.mult,self__.ch,self__.cs,meta21328__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_21329){
var self__ = this;
var _21329__$1 = this;
return self__.meta21328;
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21328","meta21328",428783788,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async21327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21327";

cljs.core.async.t_cljs$core$async21327.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21327");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async21327 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async21327(mult__$1,ch__$1,cs__$1,meta21328){
return (new cljs.core.async.t_cljs$core$async21327(mult__$1,ch__$1,cs__$1,meta21328));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async21327(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__20241__auto___21548 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___21548,cs,m,dchan,dctr,done){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___21548,cs,m,dchan,dctr,done){
return (function (state_21460){
var state_val_21461 = (state_21460[(1)]);
if((state_val_21461 === (7))){
var inst_21456 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21462_21549 = state_21460__$1;
(statearr_21462_21549[(2)] = inst_21456);

(statearr_21462_21549[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (20))){
var inst_21361 = (state_21460[(7)]);
var inst_21371 = cljs.core.first.call(null,inst_21361);
var inst_21372 = cljs.core.nth.call(null,inst_21371,(0),null);
var inst_21373 = cljs.core.nth.call(null,inst_21371,(1),null);
var state_21460__$1 = (function (){var statearr_21463 = state_21460;
(statearr_21463[(8)] = inst_21372);

return statearr_21463;
})();
if(cljs.core.truth_(inst_21373)){
var statearr_21464_21550 = state_21460__$1;
(statearr_21464_21550[(1)] = (22));

} else {
var statearr_21465_21551 = state_21460__$1;
(statearr_21465_21551[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (27))){
var inst_21408 = (state_21460[(9)]);
var inst_21401 = (state_21460[(10)]);
var inst_21403 = (state_21460[(11)]);
var inst_21332 = (state_21460[(12)]);
var inst_21408__$1 = cljs.core._nth.call(null,inst_21401,inst_21403);
var inst_21409 = cljs.core.async.put_BANG_.call(null,inst_21408__$1,inst_21332,done);
var state_21460__$1 = (function (){var statearr_21466 = state_21460;
(statearr_21466[(9)] = inst_21408__$1);

return statearr_21466;
})();
if(cljs.core.truth_(inst_21409)){
var statearr_21467_21552 = state_21460__$1;
(statearr_21467_21552[(1)] = (30));

} else {
var statearr_21468_21553 = state_21460__$1;
(statearr_21468_21553[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (1))){
var state_21460__$1 = state_21460;
var statearr_21469_21554 = state_21460__$1;
(statearr_21469_21554[(2)] = null);

(statearr_21469_21554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (24))){
var inst_21361 = (state_21460[(7)]);
var inst_21378 = (state_21460[(2)]);
var inst_21379 = cljs.core.next.call(null,inst_21361);
var inst_21341 = inst_21379;
var inst_21342 = null;
var inst_21343 = (0);
var inst_21344 = (0);
var state_21460__$1 = (function (){var statearr_21470 = state_21460;
(statearr_21470[(13)] = inst_21343);

(statearr_21470[(14)] = inst_21342);

(statearr_21470[(15)] = inst_21344);

(statearr_21470[(16)] = inst_21378);

(statearr_21470[(17)] = inst_21341);

return statearr_21470;
})();
var statearr_21471_21555 = state_21460__$1;
(statearr_21471_21555[(2)] = null);

(statearr_21471_21555[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (39))){
var state_21460__$1 = state_21460;
var statearr_21475_21556 = state_21460__$1;
(statearr_21475_21556[(2)] = null);

(statearr_21475_21556[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (4))){
var inst_21332 = (state_21460[(12)]);
var inst_21332__$1 = (state_21460[(2)]);
var inst_21333 = (inst_21332__$1 == null);
var state_21460__$1 = (function (){var statearr_21476 = state_21460;
(statearr_21476[(12)] = inst_21332__$1);

return statearr_21476;
})();
if(cljs.core.truth_(inst_21333)){
var statearr_21477_21557 = state_21460__$1;
(statearr_21477_21557[(1)] = (5));

} else {
var statearr_21478_21558 = state_21460__$1;
(statearr_21478_21558[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (15))){
var inst_21343 = (state_21460[(13)]);
var inst_21342 = (state_21460[(14)]);
var inst_21344 = (state_21460[(15)]);
var inst_21341 = (state_21460[(17)]);
var inst_21357 = (state_21460[(2)]);
var inst_21358 = (inst_21344 + (1));
var tmp21472 = inst_21343;
var tmp21473 = inst_21342;
var tmp21474 = inst_21341;
var inst_21341__$1 = tmp21474;
var inst_21342__$1 = tmp21473;
var inst_21343__$1 = tmp21472;
var inst_21344__$1 = inst_21358;
var state_21460__$1 = (function (){var statearr_21479 = state_21460;
(statearr_21479[(13)] = inst_21343__$1);

(statearr_21479[(18)] = inst_21357);

(statearr_21479[(14)] = inst_21342__$1);

(statearr_21479[(15)] = inst_21344__$1);

(statearr_21479[(17)] = inst_21341__$1);

return statearr_21479;
})();
var statearr_21480_21559 = state_21460__$1;
(statearr_21480_21559[(2)] = null);

(statearr_21480_21559[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (21))){
var inst_21382 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21484_21560 = state_21460__$1;
(statearr_21484_21560[(2)] = inst_21382);

(statearr_21484_21560[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (31))){
var inst_21408 = (state_21460[(9)]);
var inst_21412 = done.call(null,null);
var inst_21413 = cljs.core.async.untap_STAR_.call(null,m,inst_21408);
var state_21460__$1 = (function (){var statearr_21485 = state_21460;
(statearr_21485[(19)] = inst_21412);

return statearr_21485;
})();
var statearr_21486_21561 = state_21460__$1;
(statearr_21486_21561[(2)] = inst_21413);

(statearr_21486_21561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (32))){
var inst_21400 = (state_21460[(20)]);
var inst_21402 = (state_21460[(21)]);
var inst_21401 = (state_21460[(10)]);
var inst_21403 = (state_21460[(11)]);
var inst_21415 = (state_21460[(2)]);
var inst_21416 = (inst_21403 + (1));
var tmp21481 = inst_21400;
var tmp21482 = inst_21402;
var tmp21483 = inst_21401;
var inst_21400__$1 = tmp21481;
var inst_21401__$1 = tmp21483;
var inst_21402__$1 = tmp21482;
var inst_21403__$1 = inst_21416;
var state_21460__$1 = (function (){var statearr_21487 = state_21460;
(statearr_21487[(20)] = inst_21400__$1);

(statearr_21487[(21)] = inst_21402__$1);

(statearr_21487[(22)] = inst_21415);

(statearr_21487[(10)] = inst_21401__$1);

(statearr_21487[(11)] = inst_21403__$1);

return statearr_21487;
})();
var statearr_21488_21562 = state_21460__$1;
(statearr_21488_21562[(2)] = null);

(statearr_21488_21562[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (40))){
var inst_21428 = (state_21460[(23)]);
var inst_21432 = done.call(null,null);
var inst_21433 = cljs.core.async.untap_STAR_.call(null,m,inst_21428);
var state_21460__$1 = (function (){var statearr_21489 = state_21460;
(statearr_21489[(24)] = inst_21432);

return statearr_21489;
})();
var statearr_21490_21563 = state_21460__$1;
(statearr_21490_21563[(2)] = inst_21433);

(statearr_21490_21563[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (33))){
var inst_21419 = (state_21460[(25)]);
var inst_21421 = cljs.core.chunked_seq_QMARK_.call(null,inst_21419);
var state_21460__$1 = state_21460;
if(inst_21421){
var statearr_21491_21564 = state_21460__$1;
(statearr_21491_21564[(1)] = (36));

} else {
var statearr_21492_21565 = state_21460__$1;
(statearr_21492_21565[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (13))){
var inst_21351 = (state_21460[(26)]);
var inst_21354 = cljs.core.async.close_BANG_.call(null,inst_21351);
var state_21460__$1 = state_21460;
var statearr_21493_21566 = state_21460__$1;
(statearr_21493_21566[(2)] = inst_21354);

(statearr_21493_21566[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (22))){
var inst_21372 = (state_21460[(8)]);
var inst_21375 = cljs.core.async.close_BANG_.call(null,inst_21372);
var state_21460__$1 = state_21460;
var statearr_21494_21567 = state_21460__$1;
(statearr_21494_21567[(2)] = inst_21375);

(statearr_21494_21567[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (36))){
var inst_21419 = (state_21460[(25)]);
var inst_21423 = cljs.core.chunk_first.call(null,inst_21419);
var inst_21424 = cljs.core.chunk_rest.call(null,inst_21419);
var inst_21425 = cljs.core.count.call(null,inst_21423);
var inst_21400 = inst_21424;
var inst_21401 = inst_21423;
var inst_21402 = inst_21425;
var inst_21403 = (0);
var state_21460__$1 = (function (){var statearr_21495 = state_21460;
(statearr_21495[(20)] = inst_21400);

(statearr_21495[(21)] = inst_21402);

(statearr_21495[(10)] = inst_21401);

(statearr_21495[(11)] = inst_21403);

return statearr_21495;
})();
var statearr_21496_21568 = state_21460__$1;
(statearr_21496_21568[(2)] = null);

(statearr_21496_21568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (41))){
var inst_21419 = (state_21460[(25)]);
var inst_21435 = (state_21460[(2)]);
var inst_21436 = cljs.core.next.call(null,inst_21419);
var inst_21400 = inst_21436;
var inst_21401 = null;
var inst_21402 = (0);
var inst_21403 = (0);
var state_21460__$1 = (function (){var statearr_21497 = state_21460;
(statearr_21497[(20)] = inst_21400);

(statearr_21497[(21)] = inst_21402);

(statearr_21497[(27)] = inst_21435);

(statearr_21497[(10)] = inst_21401);

(statearr_21497[(11)] = inst_21403);

return statearr_21497;
})();
var statearr_21498_21569 = state_21460__$1;
(statearr_21498_21569[(2)] = null);

(statearr_21498_21569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (43))){
var state_21460__$1 = state_21460;
var statearr_21499_21570 = state_21460__$1;
(statearr_21499_21570[(2)] = null);

(statearr_21499_21570[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (29))){
var inst_21444 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21500_21571 = state_21460__$1;
(statearr_21500_21571[(2)] = inst_21444);

(statearr_21500_21571[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (44))){
var inst_21453 = (state_21460[(2)]);
var state_21460__$1 = (function (){var statearr_21501 = state_21460;
(statearr_21501[(28)] = inst_21453);

return statearr_21501;
})();
var statearr_21502_21572 = state_21460__$1;
(statearr_21502_21572[(2)] = null);

(statearr_21502_21572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (6))){
var inst_21392 = (state_21460[(29)]);
var inst_21391 = cljs.core.deref.call(null,cs);
var inst_21392__$1 = cljs.core.keys.call(null,inst_21391);
var inst_21393 = cljs.core.count.call(null,inst_21392__$1);
var inst_21394 = cljs.core.reset_BANG_.call(null,dctr,inst_21393);
var inst_21399 = cljs.core.seq.call(null,inst_21392__$1);
var inst_21400 = inst_21399;
var inst_21401 = null;
var inst_21402 = (0);
var inst_21403 = (0);
var state_21460__$1 = (function (){var statearr_21503 = state_21460;
(statearr_21503[(20)] = inst_21400);

(statearr_21503[(29)] = inst_21392__$1);

(statearr_21503[(21)] = inst_21402);

(statearr_21503[(30)] = inst_21394);

(statearr_21503[(10)] = inst_21401);

(statearr_21503[(11)] = inst_21403);

return statearr_21503;
})();
var statearr_21504_21573 = state_21460__$1;
(statearr_21504_21573[(2)] = null);

(statearr_21504_21573[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (28))){
var inst_21400 = (state_21460[(20)]);
var inst_21419 = (state_21460[(25)]);
var inst_21419__$1 = cljs.core.seq.call(null,inst_21400);
var state_21460__$1 = (function (){var statearr_21505 = state_21460;
(statearr_21505[(25)] = inst_21419__$1);

return statearr_21505;
})();
if(inst_21419__$1){
var statearr_21506_21574 = state_21460__$1;
(statearr_21506_21574[(1)] = (33));

} else {
var statearr_21507_21575 = state_21460__$1;
(statearr_21507_21575[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (25))){
var inst_21402 = (state_21460[(21)]);
var inst_21403 = (state_21460[(11)]);
var inst_21405 = (inst_21403 < inst_21402);
var inst_21406 = inst_21405;
var state_21460__$1 = state_21460;
if(cljs.core.truth_(inst_21406)){
var statearr_21508_21576 = state_21460__$1;
(statearr_21508_21576[(1)] = (27));

} else {
var statearr_21509_21577 = state_21460__$1;
(statearr_21509_21577[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (34))){
var state_21460__$1 = state_21460;
var statearr_21510_21578 = state_21460__$1;
(statearr_21510_21578[(2)] = null);

(statearr_21510_21578[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (17))){
var state_21460__$1 = state_21460;
var statearr_21511_21579 = state_21460__$1;
(statearr_21511_21579[(2)] = null);

(statearr_21511_21579[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (3))){
var inst_21458 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21460__$1,inst_21458);
} else {
if((state_val_21461 === (12))){
var inst_21387 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21512_21580 = state_21460__$1;
(statearr_21512_21580[(2)] = inst_21387);

(statearr_21512_21580[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (2))){
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21460__$1,(4),ch);
} else {
if((state_val_21461 === (23))){
var state_21460__$1 = state_21460;
var statearr_21513_21581 = state_21460__$1;
(statearr_21513_21581[(2)] = null);

(statearr_21513_21581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (35))){
var inst_21442 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21514_21582 = state_21460__$1;
(statearr_21514_21582[(2)] = inst_21442);

(statearr_21514_21582[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (19))){
var inst_21361 = (state_21460[(7)]);
var inst_21365 = cljs.core.chunk_first.call(null,inst_21361);
var inst_21366 = cljs.core.chunk_rest.call(null,inst_21361);
var inst_21367 = cljs.core.count.call(null,inst_21365);
var inst_21341 = inst_21366;
var inst_21342 = inst_21365;
var inst_21343 = inst_21367;
var inst_21344 = (0);
var state_21460__$1 = (function (){var statearr_21515 = state_21460;
(statearr_21515[(13)] = inst_21343);

(statearr_21515[(14)] = inst_21342);

(statearr_21515[(15)] = inst_21344);

(statearr_21515[(17)] = inst_21341);

return statearr_21515;
})();
var statearr_21516_21583 = state_21460__$1;
(statearr_21516_21583[(2)] = null);

(statearr_21516_21583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (11))){
var inst_21361 = (state_21460[(7)]);
var inst_21341 = (state_21460[(17)]);
var inst_21361__$1 = cljs.core.seq.call(null,inst_21341);
var state_21460__$1 = (function (){var statearr_21517 = state_21460;
(statearr_21517[(7)] = inst_21361__$1);

return statearr_21517;
})();
if(inst_21361__$1){
var statearr_21518_21584 = state_21460__$1;
(statearr_21518_21584[(1)] = (16));

} else {
var statearr_21519_21585 = state_21460__$1;
(statearr_21519_21585[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (9))){
var inst_21389 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21520_21586 = state_21460__$1;
(statearr_21520_21586[(2)] = inst_21389);

(statearr_21520_21586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (5))){
var inst_21339 = cljs.core.deref.call(null,cs);
var inst_21340 = cljs.core.seq.call(null,inst_21339);
var inst_21341 = inst_21340;
var inst_21342 = null;
var inst_21343 = (0);
var inst_21344 = (0);
var state_21460__$1 = (function (){var statearr_21521 = state_21460;
(statearr_21521[(13)] = inst_21343);

(statearr_21521[(14)] = inst_21342);

(statearr_21521[(15)] = inst_21344);

(statearr_21521[(17)] = inst_21341);

return statearr_21521;
})();
var statearr_21522_21587 = state_21460__$1;
(statearr_21522_21587[(2)] = null);

(statearr_21522_21587[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (14))){
var state_21460__$1 = state_21460;
var statearr_21523_21588 = state_21460__$1;
(statearr_21523_21588[(2)] = null);

(statearr_21523_21588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (45))){
var inst_21450 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21524_21589 = state_21460__$1;
(statearr_21524_21589[(2)] = inst_21450);

(statearr_21524_21589[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (26))){
var inst_21392 = (state_21460[(29)]);
var inst_21446 = (state_21460[(2)]);
var inst_21447 = cljs.core.seq.call(null,inst_21392);
var state_21460__$1 = (function (){var statearr_21525 = state_21460;
(statearr_21525[(31)] = inst_21446);

return statearr_21525;
})();
if(inst_21447){
var statearr_21526_21590 = state_21460__$1;
(statearr_21526_21590[(1)] = (42));

} else {
var statearr_21527_21591 = state_21460__$1;
(statearr_21527_21591[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (16))){
var inst_21361 = (state_21460[(7)]);
var inst_21363 = cljs.core.chunked_seq_QMARK_.call(null,inst_21361);
var state_21460__$1 = state_21460;
if(inst_21363){
var statearr_21528_21592 = state_21460__$1;
(statearr_21528_21592[(1)] = (19));

} else {
var statearr_21529_21593 = state_21460__$1;
(statearr_21529_21593[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (38))){
var inst_21439 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21530_21594 = state_21460__$1;
(statearr_21530_21594[(2)] = inst_21439);

(statearr_21530_21594[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (30))){
var state_21460__$1 = state_21460;
var statearr_21531_21595 = state_21460__$1;
(statearr_21531_21595[(2)] = null);

(statearr_21531_21595[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (10))){
var inst_21342 = (state_21460[(14)]);
var inst_21344 = (state_21460[(15)]);
var inst_21350 = cljs.core._nth.call(null,inst_21342,inst_21344);
var inst_21351 = cljs.core.nth.call(null,inst_21350,(0),null);
var inst_21352 = cljs.core.nth.call(null,inst_21350,(1),null);
var state_21460__$1 = (function (){var statearr_21532 = state_21460;
(statearr_21532[(26)] = inst_21351);

return statearr_21532;
})();
if(cljs.core.truth_(inst_21352)){
var statearr_21533_21596 = state_21460__$1;
(statearr_21533_21596[(1)] = (13));

} else {
var statearr_21534_21597 = state_21460__$1;
(statearr_21534_21597[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (18))){
var inst_21385 = (state_21460[(2)]);
var state_21460__$1 = state_21460;
var statearr_21535_21598 = state_21460__$1;
(statearr_21535_21598[(2)] = inst_21385);

(statearr_21535_21598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (42))){
var state_21460__$1 = state_21460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21460__$1,(45),dchan);
} else {
if((state_val_21461 === (37))){
var inst_21428 = (state_21460[(23)]);
var inst_21419 = (state_21460[(25)]);
var inst_21332 = (state_21460[(12)]);
var inst_21428__$1 = cljs.core.first.call(null,inst_21419);
var inst_21429 = cljs.core.async.put_BANG_.call(null,inst_21428__$1,inst_21332,done);
var state_21460__$1 = (function (){var statearr_21536 = state_21460;
(statearr_21536[(23)] = inst_21428__$1);

return statearr_21536;
})();
if(cljs.core.truth_(inst_21429)){
var statearr_21537_21599 = state_21460__$1;
(statearr_21537_21599[(1)] = (39));

} else {
var statearr_21538_21600 = state_21460__$1;
(statearr_21538_21600[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21461 === (8))){
var inst_21343 = (state_21460[(13)]);
var inst_21344 = (state_21460[(15)]);
var inst_21346 = (inst_21344 < inst_21343);
var inst_21347 = inst_21346;
var state_21460__$1 = state_21460;
if(cljs.core.truth_(inst_21347)){
var statearr_21539_21601 = state_21460__$1;
(statearr_21539_21601[(1)] = (10));

} else {
var statearr_21540_21602 = state_21460__$1;
(statearr_21540_21602[(1)] = (11));

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
});})(c__20241__auto___21548,cs,m,dchan,dctr,done))
;
return ((function (switch__20129__auto__,c__20241__auto___21548,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20130__auto__ = null;
var cljs$core$async$mult_$_state_machine__20130__auto____0 = (function (){
var statearr_21544 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21544[(0)] = cljs$core$async$mult_$_state_machine__20130__auto__);

(statearr_21544[(1)] = (1));

return statearr_21544;
});
var cljs$core$async$mult_$_state_machine__20130__auto____1 = (function (state_21460){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_21460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e21545){if((e21545 instanceof Object)){
var ex__20133__auto__ = e21545;
var statearr_21546_21603 = state_21460;
(statearr_21546_21603[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21545;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21604 = state_21460;
state_21460 = G__21604;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20130__auto__ = function(state_21460){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20130__auto____1.call(this,state_21460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20130__auto____0;
cljs$core$async$mult_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20130__auto____1;
return cljs$core$async$mult_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___21548,cs,m,dchan,dctr,done))
})();
var state__20243__auto__ = (function (){var statearr_21547 = f__20242__auto__.call(null);
(statearr_21547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___21548);

return statearr_21547;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___21548,cs,m,dchan,dctr,done))
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
var args21605 = [];
var len__17884__auto___21608 = arguments.length;
var i__17885__auto___21609 = (0);
while(true){
if((i__17885__auto___21609 < len__17884__auto___21608)){
args21605.push((arguments[i__17885__auto___21609]));

var G__21610 = (i__17885__auto___21609 + (1));
i__17885__auto___21609 = G__21610;
continue;
} else {
}
break;
}

var G__21607 = args21605.length;
switch (G__21607) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21605.length)].join('')));

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
var len__17884__auto___21622 = arguments.length;
var i__17885__auto___21623 = (0);
while(true){
if((i__17885__auto___21623 < len__17884__auto___21622)){
args__17891__auto__.push((arguments[i__17885__auto___21623]));

var G__21624 = (i__17885__auto___21623 + (1));
i__17885__auto___21623 = G__21624;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__21616){
var map__21617 = p__21616;
var map__21617__$1 = ((((!((map__21617 == null)))?((((map__21617.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21617.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21617):map__21617);
var opts = map__21617__$1;
var statearr_21619_21625 = state;
(statearr_21619_21625[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__21617,map__21617__$1,opts){
return (function (val){
var statearr_21620_21626 = state;
(statearr_21620_21626[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__21617,map__21617__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_21621_21627 = state;
(statearr_21621_21627[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq21612){
var G__21613 = cljs.core.first.call(null,seq21612);
var seq21612__$1 = cljs.core.next.call(null,seq21612);
var G__21614 = cljs.core.first.call(null,seq21612__$1);
var seq21612__$2 = cljs.core.next.call(null,seq21612__$1);
var G__21615 = cljs.core.first.call(null,seq21612__$2);
var seq21612__$3 = cljs.core.next.call(null,seq21612__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21613,G__21614,G__21615,seq21612__$3);
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
if(typeof cljs.core.async.t_cljs$core$async21791 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21791 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta21792){
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
this.meta21792 = meta21792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21793,meta21792__$1){
var self__ = this;
var _21793__$1 = this;
return (new cljs.core.async.t_cljs$core$async21791(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta21792__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_21793){
var self__ = this;
var _21793__$1 = this;
return self__.meta21792;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async21791.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta21792","meta21792",-1934922434,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async21791.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21791.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21791";

cljs.core.async.t_cljs$core$async21791.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async21791");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async21791 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async21791(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21792){
return (new cljs.core.async.t_cljs$core$async21791(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta21792));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async21791(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20241__auto___21954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_21891){
var state_val_21892 = (state_21891[(1)]);
if((state_val_21892 === (7))){
var inst_21809 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21893_21955 = state_21891__$1;
(statearr_21893_21955[(2)] = inst_21809);

(statearr_21893_21955[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (20))){
var inst_21821 = (state_21891[(7)]);
var state_21891__$1 = state_21891;
var statearr_21894_21956 = state_21891__$1;
(statearr_21894_21956[(2)] = inst_21821);

(statearr_21894_21956[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (27))){
var state_21891__$1 = state_21891;
var statearr_21895_21957 = state_21891__$1;
(statearr_21895_21957[(2)] = null);

(statearr_21895_21957[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (1))){
var inst_21797 = (state_21891[(8)]);
var inst_21797__$1 = calc_state.call(null);
var inst_21799 = (inst_21797__$1 == null);
var inst_21800 = cljs.core.not.call(null,inst_21799);
var state_21891__$1 = (function (){var statearr_21896 = state_21891;
(statearr_21896[(8)] = inst_21797__$1);

return statearr_21896;
})();
if(inst_21800){
var statearr_21897_21958 = state_21891__$1;
(statearr_21897_21958[(1)] = (2));

} else {
var statearr_21898_21959 = state_21891__$1;
(statearr_21898_21959[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (24))){
var inst_21851 = (state_21891[(9)]);
var inst_21865 = (state_21891[(10)]);
var inst_21844 = (state_21891[(11)]);
var inst_21865__$1 = inst_21844.call(null,inst_21851);
var state_21891__$1 = (function (){var statearr_21899 = state_21891;
(statearr_21899[(10)] = inst_21865__$1);

return statearr_21899;
})();
if(cljs.core.truth_(inst_21865__$1)){
var statearr_21900_21960 = state_21891__$1;
(statearr_21900_21960[(1)] = (29));

} else {
var statearr_21901_21961 = state_21891__$1;
(statearr_21901_21961[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (4))){
var inst_21812 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21812)){
var statearr_21902_21962 = state_21891__$1;
(statearr_21902_21962[(1)] = (8));

} else {
var statearr_21903_21963 = state_21891__$1;
(statearr_21903_21963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (15))){
var inst_21838 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21838)){
var statearr_21904_21964 = state_21891__$1;
(statearr_21904_21964[(1)] = (19));

} else {
var statearr_21905_21965 = state_21891__$1;
(statearr_21905_21965[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (21))){
var inst_21843 = (state_21891[(12)]);
var inst_21843__$1 = (state_21891[(2)]);
var inst_21844 = cljs.core.get.call(null,inst_21843__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21845 = cljs.core.get.call(null,inst_21843__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21846 = cljs.core.get.call(null,inst_21843__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_21891__$1 = (function (){var statearr_21906 = state_21891;
(statearr_21906[(13)] = inst_21845);

(statearr_21906[(11)] = inst_21844);

(statearr_21906[(12)] = inst_21843__$1);

return statearr_21906;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_21891__$1,(22),inst_21846);
} else {
if((state_val_21892 === (31))){
var inst_21873 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21873)){
var statearr_21907_21966 = state_21891__$1;
(statearr_21907_21966[(1)] = (32));

} else {
var statearr_21908_21967 = state_21891__$1;
(statearr_21908_21967[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (32))){
var inst_21850 = (state_21891[(14)]);
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21891__$1,(35),out,inst_21850);
} else {
if((state_val_21892 === (33))){
var inst_21843 = (state_21891[(12)]);
var inst_21821 = inst_21843;
var state_21891__$1 = (function (){var statearr_21909 = state_21891;
(statearr_21909[(7)] = inst_21821);

return statearr_21909;
})();
var statearr_21910_21968 = state_21891__$1;
(statearr_21910_21968[(2)] = null);

(statearr_21910_21968[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (13))){
var inst_21821 = (state_21891[(7)]);
var inst_21828 = inst_21821.cljs$lang$protocol_mask$partition0$;
var inst_21829 = (inst_21828 & (64));
var inst_21830 = inst_21821.cljs$core$ISeq$;
var inst_21831 = (inst_21829) || (inst_21830);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21831)){
var statearr_21911_21969 = state_21891__$1;
(statearr_21911_21969[(1)] = (16));

} else {
var statearr_21912_21970 = state_21891__$1;
(statearr_21912_21970[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (22))){
var inst_21851 = (state_21891[(9)]);
var inst_21850 = (state_21891[(14)]);
var inst_21849 = (state_21891[(2)]);
var inst_21850__$1 = cljs.core.nth.call(null,inst_21849,(0),null);
var inst_21851__$1 = cljs.core.nth.call(null,inst_21849,(1),null);
var inst_21852 = (inst_21850__$1 == null);
var inst_21853 = cljs.core._EQ_.call(null,inst_21851__$1,change);
var inst_21854 = (inst_21852) || (inst_21853);
var state_21891__$1 = (function (){var statearr_21913 = state_21891;
(statearr_21913[(9)] = inst_21851__$1);

(statearr_21913[(14)] = inst_21850__$1);

return statearr_21913;
})();
if(cljs.core.truth_(inst_21854)){
var statearr_21914_21971 = state_21891__$1;
(statearr_21914_21971[(1)] = (23));

} else {
var statearr_21915_21972 = state_21891__$1;
(statearr_21915_21972[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (36))){
var inst_21843 = (state_21891[(12)]);
var inst_21821 = inst_21843;
var state_21891__$1 = (function (){var statearr_21916 = state_21891;
(statearr_21916[(7)] = inst_21821);

return statearr_21916;
})();
var statearr_21917_21973 = state_21891__$1;
(statearr_21917_21973[(2)] = null);

(statearr_21917_21973[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (29))){
var inst_21865 = (state_21891[(10)]);
var state_21891__$1 = state_21891;
var statearr_21918_21974 = state_21891__$1;
(statearr_21918_21974[(2)] = inst_21865);

(statearr_21918_21974[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (6))){
var state_21891__$1 = state_21891;
var statearr_21919_21975 = state_21891__$1;
(statearr_21919_21975[(2)] = false);

(statearr_21919_21975[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (28))){
var inst_21861 = (state_21891[(2)]);
var inst_21862 = calc_state.call(null);
var inst_21821 = inst_21862;
var state_21891__$1 = (function (){var statearr_21920 = state_21891;
(statearr_21920[(15)] = inst_21861);

(statearr_21920[(7)] = inst_21821);

return statearr_21920;
})();
var statearr_21921_21976 = state_21891__$1;
(statearr_21921_21976[(2)] = null);

(statearr_21921_21976[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (25))){
var inst_21887 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21922_21977 = state_21891__$1;
(statearr_21922_21977[(2)] = inst_21887);

(statearr_21922_21977[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (34))){
var inst_21885 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21923_21978 = state_21891__$1;
(statearr_21923_21978[(2)] = inst_21885);

(statearr_21923_21978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (17))){
var state_21891__$1 = state_21891;
var statearr_21924_21979 = state_21891__$1;
(statearr_21924_21979[(2)] = false);

(statearr_21924_21979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (3))){
var state_21891__$1 = state_21891;
var statearr_21925_21980 = state_21891__$1;
(statearr_21925_21980[(2)] = false);

(statearr_21925_21980[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (12))){
var inst_21889 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21891__$1,inst_21889);
} else {
if((state_val_21892 === (2))){
var inst_21797 = (state_21891[(8)]);
var inst_21802 = inst_21797.cljs$lang$protocol_mask$partition0$;
var inst_21803 = (inst_21802 & (64));
var inst_21804 = inst_21797.cljs$core$ISeq$;
var inst_21805 = (inst_21803) || (inst_21804);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21805)){
var statearr_21926_21981 = state_21891__$1;
(statearr_21926_21981[(1)] = (5));

} else {
var statearr_21927_21982 = state_21891__$1;
(statearr_21927_21982[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (23))){
var inst_21850 = (state_21891[(14)]);
var inst_21856 = (inst_21850 == null);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21856)){
var statearr_21928_21983 = state_21891__$1;
(statearr_21928_21983[(1)] = (26));

} else {
var statearr_21929_21984 = state_21891__$1;
(statearr_21929_21984[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (35))){
var inst_21876 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
if(cljs.core.truth_(inst_21876)){
var statearr_21930_21985 = state_21891__$1;
(statearr_21930_21985[(1)] = (36));

} else {
var statearr_21931_21986 = state_21891__$1;
(statearr_21931_21986[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (19))){
var inst_21821 = (state_21891[(7)]);
var inst_21840 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21821);
var state_21891__$1 = state_21891;
var statearr_21932_21987 = state_21891__$1;
(statearr_21932_21987[(2)] = inst_21840);

(statearr_21932_21987[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (11))){
var inst_21821 = (state_21891[(7)]);
var inst_21825 = (inst_21821 == null);
var inst_21826 = cljs.core.not.call(null,inst_21825);
var state_21891__$1 = state_21891;
if(inst_21826){
var statearr_21933_21988 = state_21891__$1;
(statearr_21933_21988[(1)] = (13));

} else {
var statearr_21934_21989 = state_21891__$1;
(statearr_21934_21989[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (9))){
var inst_21797 = (state_21891[(8)]);
var state_21891__$1 = state_21891;
var statearr_21935_21990 = state_21891__$1;
(statearr_21935_21990[(2)] = inst_21797);

(statearr_21935_21990[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (5))){
var state_21891__$1 = state_21891;
var statearr_21936_21991 = state_21891__$1;
(statearr_21936_21991[(2)] = true);

(statearr_21936_21991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (14))){
var state_21891__$1 = state_21891;
var statearr_21937_21992 = state_21891__$1;
(statearr_21937_21992[(2)] = false);

(statearr_21937_21992[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (26))){
var inst_21851 = (state_21891[(9)]);
var inst_21858 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_21851);
var state_21891__$1 = state_21891;
var statearr_21938_21993 = state_21891__$1;
(statearr_21938_21993[(2)] = inst_21858);

(statearr_21938_21993[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (16))){
var state_21891__$1 = state_21891;
var statearr_21939_21994 = state_21891__$1;
(statearr_21939_21994[(2)] = true);

(statearr_21939_21994[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (38))){
var inst_21881 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21940_21995 = state_21891__$1;
(statearr_21940_21995[(2)] = inst_21881);

(statearr_21940_21995[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (30))){
var inst_21845 = (state_21891[(13)]);
var inst_21851 = (state_21891[(9)]);
var inst_21844 = (state_21891[(11)]);
var inst_21868 = cljs.core.empty_QMARK_.call(null,inst_21844);
var inst_21869 = inst_21845.call(null,inst_21851);
var inst_21870 = cljs.core.not.call(null,inst_21869);
var inst_21871 = (inst_21868) && (inst_21870);
var state_21891__$1 = state_21891;
var statearr_21941_21996 = state_21891__$1;
(statearr_21941_21996[(2)] = inst_21871);

(statearr_21941_21996[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (10))){
var inst_21797 = (state_21891[(8)]);
var inst_21817 = (state_21891[(2)]);
var inst_21818 = cljs.core.get.call(null,inst_21817,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_21819 = cljs.core.get.call(null,inst_21817,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_21820 = cljs.core.get.call(null,inst_21817,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_21821 = inst_21797;
var state_21891__$1 = (function (){var statearr_21942 = state_21891;
(statearr_21942[(16)] = inst_21819);

(statearr_21942[(17)] = inst_21820);

(statearr_21942[(18)] = inst_21818);

(statearr_21942[(7)] = inst_21821);

return statearr_21942;
})();
var statearr_21943_21997 = state_21891__$1;
(statearr_21943_21997[(2)] = null);

(statearr_21943_21997[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (18))){
var inst_21835 = (state_21891[(2)]);
var state_21891__$1 = state_21891;
var statearr_21944_21998 = state_21891__$1;
(statearr_21944_21998[(2)] = inst_21835);

(statearr_21944_21998[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (37))){
var state_21891__$1 = state_21891;
var statearr_21945_21999 = state_21891__$1;
(statearr_21945_21999[(2)] = null);

(statearr_21945_21999[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21892 === (8))){
var inst_21797 = (state_21891[(8)]);
var inst_21814 = cljs.core.apply.call(null,cljs.core.hash_map,inst_21797);
var state_21891__$1 = state_21891;
var statearr_21946_22000 = state_21891__$1;
(statearr_21946_22000[(2)] = inst_21814);

(statearr_21946_22000[(1)] = (10));


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
});})(c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20129__auto__,c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20130__auto__ = null;
var cljs$core$async$mix_$_state_machine__20130__auto____0 = (function (){
var statearr_21950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21950[(0)] = cljs$core$async$mix_$_state_machine__20130__auto__);

(statearr_21950[(1)] = (1));

return statearr_21950;
});
var cljs$core$async$mix_$_state_machine__20130__auto____1 = (function (state_21891){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_21891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e21951){if((e21951 instanceof Object)){
var ex__20133__auto__ = e21951;
var statearr_21952_22001 = state_21891;
(statearr_21952_22001[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21951;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22002 = state_21891;
state_21891 = G__22002;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20130__auto__ = function(state_21891){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20130__auto____1.call(this,state_21891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20130__auto____0;
cljs$core$async$mix_$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20130__auto____1;
return cljs$core$async$mix_$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__20243__auto__ = (function (){var statearr_21953 = f__20242__auto__.call(null);
(statearr_21953[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___21954);

return statearr_21953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___21954,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args22003 = [];
var len__17884__auto___22006 = arguments.length;
var i__17885__auto___22007 = (0);
while(true){
if((i__17885__auto___22007 < len__17884__auto___22006)){
args22003.push((arguments[i__17885__auto___22007]));

var G__22008 = (i__17885__auto___22007 + (1));
i__17885__auto___22007 = G__22008;
continue;
} else {
}
break;
}

var G__22005 = args22003.length;
switch (G__22005) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22003.length)].join('')));

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
var args22011 = [];
var len__17884__auto___22136 = arguments.length;
var i__17885__auto___22137 = (0);
while(true){
if((i__17885__auto___22137 < len__17884__auto___22136)){
args22011.push((arguments[i__17885__auto___22137]));

var G__22138 = (i__17885__auto___22137 + (1));
i__17885__auto___22137 = G__22138;
continue;
} else {
}
break;
}

var G__22013 = args22011.length;
switch (G__22013) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22011.length)].join('')));

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
return (function (p1__22010_SHARP_){
if(cljs.core.truth_(p1__22010_SHARP_.call(null,topic))){
return p1__22010_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22010_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async22014 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22014 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22015){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22015 = meta22015;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_22016,meta22015__$1){
var self__ = this;
var _22016__$1 = this;
return (new cljs.core.async.t_cljs$core$async22014(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22015__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_22016){
var self__ = this;
var _22016__$1 = this;
return self__.meta22015;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22015","meta22015",1889281493,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async22014.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22014.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22014";

cljs.core.async.t_cljs$core$async22014.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22014");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async22014 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async22014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22015){
return (new cljs.core.async.t_cljs$core$async22014(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22015));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async22014(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__20241__auto___22140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22140,mults,ensure_mult,p){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22140,mults,ensure_mult,p){
return (function (state_22088){
var state_val_22089 = (state_22088[(1)]);
if((state_val_22089 === (7))){
var inst_22084 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22090_22141 = state_22088__$1;
(statearr_22090_22141[(2)] = inst_22084);

(statearr_22090_22141[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (20))){
var state_22088__$1 = state_22088;
var statearr_22091_22142 = state_22088__$1;
(statearr_22091_22142[(2)] = null);

(statearr_22091_22142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (1))){
var state_22088__$1 = state_22088;
var statearr_22092_22143 = state_22088__$1;
(statearr_22092_22143[(2)] = null);

(statearr_22092_22143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (24))){
var inst_22067 = (state_22088[(7)]);
var inst_22076 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22067);
var state_22088__$1 = state_22088;
var statearr_22093_22144 = state_22088__$1;
(statearr_22093_22144[(2)] = inst_22076);

(statearr_22093_22144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (4))){
var inst_22019 = (state_22088[(8)]);
var inst_22019__$1 = (state_22088[(2)]);
var inst_22020 = (inst_22019__$1 == null);
var state_22088__$1 = (function (){var statearr_22094 = state_22088;
(statearr_22094[(8)] = inst_22019__$1);

return statearr_22094;
})();
if(cljs.core.truth_(inst_22020)){
var statearr_22095_22145 = state_22088__$1;
(statearr_22095_22145[(1)] = (5));

} else {
var statearr_22096_22146 = state_22088__$1;
(statearr_22096_22146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (15))){
var inst_22061 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22097_22147 = state_22088__$1;
(statearr_22097_22147[(2)] = inst_22061);

(statearr_22097_22147[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (21))){
var inst_22081 = (state_22088[(2)]);
var state_22088__$1 = (function (){var statearr_22098 = state_22088;
(statearr_22098[(9)] = inst_22081);

return statearr_22098;
})();
var statearr_22099_22148 = state_22088__$1;
(statearr_22099_22148[(2)] = null);

(statearr_22099_22148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (13))){
var inst_22043 = (state_22088[(10)]);
var inst_22045 = cljs.core.chunked_seq_QMARK_.call(null,inst_22043);
var state_22088__$1 = state_22088;
if(inst_22045){
var statearr_22100_22149 = state_22088__$1;
(statearr_22100_22149[(1)] = (16));

} else {
var statearr_22101_22150 = state_22088__$1;
(statearr_22101_22150[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (22))){
var inst_22073 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
if(cljs.core.truth_(inst_22073)){
var statearr_22102_22151 = state_22088__$1;
(statearr_22102_22151[(1)] = (23));

} else {
var statearr_22103_22152 = state_22088__$1;
(statearr_22103_22152[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (6))){
var inst_22019 = (state_22088[(8)]);
var inst_22067 = (state_22088[(7)]);
var inst_22069 = (state_22088[(11)]);
var inst_22067__$1 = topic_fn.call(null,inst_22019);
var inst_22068 = cljs.core.deref.call(null,mults);
var inst_22069__$1 = cljs.core.get.call(null,inst_22068,inst_22067__$1);
var state_22088__$1 = (function (){var statearr_22104 = state_22088;
(statearr_22104[(7)] = inst_22067__$1);

(statearr_22104[(11)] = inst_22069__$1);

return statearr_22104;
})();
if(cljs.core.truth_(inst_22069__$1)){
var statearr_22105_22153 = state_22088__$1;
(statearr_22105_22153[(1)] = (19));

} else {
var statearr_22106_22154 = state_22088__$1;
(statearr_22106_22154[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (25))){
var inst_22078 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22107_22155 = state_22088__$1;
(statearr_22107_22155[(2)] = inst_22078);

(statearr_22107_22155[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (17))){
var inst_22043 = (state_22088[(10)]);
var inst_22052 = cljs.core.first.call(null,inst_22043);
var inst_22053 = cljs.core.async.muxch_STAR_.call(null,inst_22052);
var inst_22054 = cljs.core.async.close_BANG_.call(null,inst_22053);
var inst_22055 = cljs.core.next.call(null,inst_22043);
var inst_22029 = inst_22055;
var inst_22030 = null;
var inst_22031 = (0);
var inst_22032 = (0);
var state_22088__$1 = (function (){var statearr_22108 = state_22088;
(statearr_22108[(12)] = inst_22030);

(statearr_22108[(13)] = inst_22032);

(statearr_22108[(14)] = inst_22029);

(statearr_22108[(15)] = inst_22054);

(statearr_22108[(16)] = inst_22031);

return statearr_22108;
})();
var statearr_22109_22156 = state_22088__$1;
(statearr_22109_22156[(2)] = null);

(statearr_22109_22156[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (3))){
var inst_22086 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22088__$1,inst_22086);
} else {
if((state_val_22089 === (12))){
var inst_22063 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22110_22157 = state_22088__$1;
(statearr_22110_22157[(2)] = inst_22063);

(statearr_22110_22157[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (2))){
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22088__$1,(4),ch);
} else {
if((state_val_22089 === (23))){
var state_22088__$1 = state_22088;
var statearr_22111_22158 = state_22088__$1;
(statearr_22111_22158[(2)] = null);

(statearr_22111_22158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (19))){
var inst_22019 = (state_22088[(8)]);
var inst_22069 = (state_22088[(11)]);
var inst_22071 = cljs.core.async.muxch_STAR_.call(null,inst_22069);
var state_22088__$1 = state_22088;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22088__$1,(22),inst_22071,inst_22019);
} else {
if((state_val_22089 === (11))){
var inst_22043 = (state_22088[(10)]);
var inst_22029 = (state_22088[(14)]);
var inst_22043__$1 = cljs.core.seq.call(null,inst_22029);
var state_22088__$1 = (function (){var statearr_22112 = state_22088;
(statearr_22112[(10)] = inst_22043__$1);

return statearr_22112;
})();
if(inst_22043__$1){
var statearr_22113_22159 = state_22088__$1;
(statearr_22113_22159[(1)] = (13));

} else {
var statearr_22114_22160 = state_22088__$1;
(statearr_22114_22160[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (9))){
var inst_22065 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22115_22161 = state_22088__$1;
(statearr_22115_22161[(2)] = inst_22065);

(statearr_22115_22161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (5))){
var inst_22026 = cljs.core.deref.call(null,mults);
var inst_22027 = cljs.core.vals.call(null,inst_22026);
var inst_22028 = cljs.core.seq.call(null,inst_22027);
var inst_22029 = inst_22028;
var inst_22030 = null;
var inst_22031 = (0);
var inst_22032 = (0);
var state_22088__$1 = (function (){var statearr_22116 = state_22088;
(statearr_22116[(12)] = inst_22030);

(statearr_22116[(13)] = inst_22032);

(statearr_22116[(14)] = inst_22029);

(statearr_22116[(16)] = inst_22031);

return statearr_22116;
})();
var statearr_22117_22162 = state_22088__$1;
(statearr_22117_22162[(2)] = null);

(statearr_22117_22162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (14))){
var state_22088__$1 = state_22088;
var statearr_22121_22163 = state_22088__$1;
(statearr_22121_22163[(2)] = null);

(statearr_22121_22163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (16))){
var inst_22043 = (state_22088[(10)]);
var inst_22047 = cljs.core.chunk_first.call(null,inst_22043);
var inst_22048 = cljs.core.chunk_rest.call(null,inst_22043);
var inst_22049 = cljs.core.count.call(null,inst_22047);
var inst_22029 = inst_22048;
var inst_22030 = inst_22047;
var inst_22031 = inst_22049;
var inst_22032 = (0);
var state_22088__$1 = (function (){var statearr_22122 = state_22088;
(statearr_22122[(12)] = inst_22030);

(statearr_22122[(13)] = inst_22032);

(statearr_22122[(14)] = inst_22029);

(statearr_22122[(16)] = inst_22031);

return statearr_22122;
})();
var statearr_22123_22164 = state_22088__$1;
(statearr_22123_22164[(2)] = null);

(statearr_22123_22164[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (10))){
var inst_22030 = (state_22088[(12)]);
var inst_22032 = (state_22088[(13)]);
var inst_22029 = (state_22088[(14)]);
var inst_22031 = (state_22088[(16)]);
var inst_22037 = cljs.core._nth.call(null,inst_22030,inst_22032);
var inst_22038 = cljs.core.async.muxch_STAR_.call(null,inst_22037);
var inst_22039 = cljs.core.async.close_BANG_.call(null,inst_22038);
var inst_22040 = (inst_22032 + (1));
var tmp22118 = inst_22030;
var tmp22119 = inst_22029;
var tmp22120 = inst_22031;
var inst_22029__$1 = tmp22119;
var inst_22030__$1 = tmp22118;
var inst_22031__$1 = tmp22120;
var inst_22032__$1 = inst_22040;
var state_22088__$1 = (function (){var statearr_22124 = state_22088;
(statearr_22124[(12)] = inst_22030__$1);

(statearr_22124[(13)] = inst_22032__$1);

(statearr_22124[(17)] = inst_22039);

(statearr_22124[(14)] = inst_22029__$1);

(statearr_22124[(16)] = inst_22031__$1);

return statearr_22124;
})();
var statearr_22125_22165 = state_22088__$1;
(statearr_22125_22165[(2)] = null);

(statearr_22125_22165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (18))){
var inst_22058 = (state_22088[(2)]);
var state_22088__$1 = state_22088;
var statearr_22126_22166 = state_22088__$1;
(statearr_22126_22166[(2)] = inst_22058);

(statearr_22126_22166[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22089 === (8))){
var inst_22032 = (state_22088[(13)]);
var inst_22031 = (state_22088[(16)]);
var inst_22034 = (inst_22032 < inst_22031);
var inst_22035 = inst_22034;
var state_22088__$1 = state_22088;
if(cljs.core.truth_(inst_22035)){
var statearr_22127_22167 = state_22088__$1;
(statearr_22127_22167[(1)] = (10));

} else {
var statearr_22128_22168 = state_22088__$1;
(statearr_22128_22168[(1)] = (11));

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
});})(c__20241__auto___22140,mults,ensure_mult,p))
;
return ((function (switch__20129__auto__,c__20241__auto___22140,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22132[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22132[(1)] = (1));

return statearr_22132;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22088){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22088);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22133){if((e22133 instanceof Object)){
var ex__20133__auto__ = e22133;
var statearr_22134_22169 = state_22088;
(statearr_22134_22169[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22133;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22170 = state_22088;
state_22088 = G__22170;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22140,mults,ensure_mult,p))
})();
var state__20243__auto__ = (function (){var statearr_22135 = f__20242__auto__.call(null);
(statearr_22135[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22140);

return statearr_22135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22140,mults,ensure_mult,p))
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
var args22171 = [];
var len__17884__auto___22174 = arguments.length;
var i__17885__auto___22175 = (0);
while(true){
if((i__17885__auto___22175 < len__17884__auto___22174)){
args22171.push((arguments[i__17885__auto___22175]));

var G__22176 = (i__17885__auto___22175 + (1));
i__17885__auto___22175 = G__22176;
continue;
} else {
}
break;
}

var G__22173 = args22171.length;
switch (G__22173) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22171.length)].join('')));

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
var args22178 = [];
var len__17884__auto___22181 = arguments.length;
var i__17885__auto___22182 = (0);
while(true){
if((i__17885__auto___22182 < len__17884__auto___22181)){
args22178.push((arguments[i__17885__auto___22182]));

var G__22183 = (i__17885__auto___22182 + (1));
i__17885__auto___22182 = G__22183;
continue;
} else {
}
break;
}

var G__22180 = args22178.length;
switch (G__22180) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22178.length)].join('')));

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
var args22185 = [];
var len__17884__auto___22256 = arguments.length;
var i__17885__auto___22257 = (0);
while(true){
if((i__17885__auto___22257 < len__17884__auto___22256)){
args22185.push((arguments[i__17885__auto___22257]));

var G__22258 = (i__17885__auto___22257 + (1));
i__17885__auto___22257 = G__22258;
continue;
} else {
}
break;
}

var G__22187 = args22185.length;
switch (G__22187) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22185.length)].join('')));

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
var c__20241__auto___22260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_22226){
var state_val_22227 = (state_22226[(1)]);
if((state_val_22227 === (7))){
var state_22226__$1 = state_22226;
var statearr_22228_22261 = state_22226__$1;
(statearr_22228_22261[(2)] = null);

(statearr_22228_22261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (1))){
var state_22226__$1 = state_22226;
var statearr_22229_22262 = state_22226__$1;
(statearr_22229_22262[(2)] = null);

(statearr_22229_22262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (4))){
var inst_22190 = (state_22226[(7)]);
var inst_22192 = (inst_22190 < cnt);
var state_22226__$1 = state_22226;
if(cljs.core.truth_(inst_22192)){
var statearr_22230_22263 = state_22226__$1;
(statearr_22230_22263[(1)] = (6));

} else {
var statearr_22231_22264 = state_22226__$1;
(statearr_22231_22264[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (15))){
var inst_22222 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
var statearr_22232_22265 = state_22226__$1;
(statearr_22232_22265[(2)] = inst_22222);

(statearr_22232_22265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (13))){
var inst_22215 = cljs.core.async.close_BANG_.call(null,out);
var state_22226__$1 = state_22226;
var statearr_22233_22266 = state_22226__$1;
(statearr_22233_22266[(2)] = inst_22215);

(statearr_22233_22266[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (6))){
var state_22226__$1 = state_22226;
var statearr_22234_22267 = state_22226__$1;
(statearr_22234_22267[(2)] = null);

(statearr_22234_22267[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (3))){
var inst_22224 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22226__$1,inst_22224);
} else {
if((state_val_22227 === (12))){
var inst_22212 = (state_22226[(8)]);
var inst_22212__$1 = (state_22226[(2)]);
var inst_22213 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22212__$1);
var state_22226__$1 = (function (){var statearr_22235 = state_22226;
(statearr_22235[(8)] = inst_22212__$1);

return statearr_22235;
})();
if(cljs.core.truth_(inst_22213)){
var statearr_22236_22268 = state_22226__$1;
(statearr_22236_22268[(1)] = (13));

} else {
var statearr_22237_22269 = state_22226__$1;
(statearr_22237_22269[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (2))){
var inst_22189 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22190 = (0);
var state_22226__$1 = (function (){var statearr_22238 = state_22226;
(statearr_22238[(9)] = inst_22189);

(statearr_22238[(7)] = inst_22190);

return statearr_22238;
})();
var statearr_22239_22270 = state_22226__$1;
(statearr_22239_22270[(2)] = null);

(statearr_22239_22270[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (11))){
var inst_22190 = (state_22226[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_22226,(10),Object,null,(9));
var inst_22199 = chs__$1.call(null,inst_22190);
var inst_22200 = done.call(null,inst_22190);
var inst_22201 = cljs.core.async.take_BANG_.call(null,inst_22199,inst_22200);
var state_22226__$1 = state_22226;
var statearr_22240_22271 = state_22226__$1;
(statearr_22240_22271[(2)] = inst_22201);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22226__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (9))){
var inst_22190 = (state_22226[(7)]);
var inst_22203 = (state_22226[(2)]);
var inst_22204 = (inst_22190 + (1));
var inst_22190__$1 = inst_22204;
var state_22226__$1 = (function (){var statearr_22241 = state_22226;
(statearr_22241[(7)] = inst_22190__$1);

(statearr_22241[(10)] = inst_22203);

return statearr_22241;
})();
var statearr_22242_22272 = state_22226__$1;
(statearr_22242_22272[(2)] = null);

(statearr_22242_22272[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (5))){
var inst_22210 = (state_22226[(2)]);
var state_22226__$1 = (function (){var statearr_22243 = state_22226;
(statearr_22243[(11)] = inst_22210);

return statearr_22243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22226__$1,(12),dchan);
} else {
if((state_val_22227 === (14))){
var inst_22212 = (state_22226[(8)]);
var inst_22217 = cljs.core.apply.call(null,f,inst_22212);
var state_22226__$1 = state_22226;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22226__$1,(16),out,inst_22217);
} else {
if((state_val_22227 === (16))){
var inst_22219 = (state_22226[(2)]);
var state_22226__$1 = (function (){var statearr_22244 = state_22226;
(statearr_22244[(12)] = inst_22219);

return statearr_22244;
})();
var statearr_22245_22273 = state_22226__$1;
(statearr_22245_22273[(2)] = null);

(statearr_22245_22273[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (10))){
var inst_22194 = (state_22226[(2)]);
var inst_22195 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22226__$1 = (function (){var statearr_22246 = state_22226;
(statearr_22246[(13)] = inst_22194);

return statearr_22246;
})();
var statearr_22247_22274 = state_22226__$1;
(statearr_22247_22274[(2)] = inst_22195);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22226__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22227 === (8))){
var inst_22208 = (state_22226[(2)]);
var state_22226__$1 = state_22226;
var statearr_22248_22275 = state_22226__$1;
(statearr_22248_22275[(2)] = inst_22208);

(statearr_22248_22275[(1)] = (5));


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
});})(c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20129__auto__,c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22252 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22252[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22252[(1)] = (1));

return statearr_22252;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22226){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22226);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22253){if((e22253 instanceof Object)){
var ex__20133__auto__ = e22253;
var statearr_22254_22276 = state_22226;
(statearr_22254_22276[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22277 = state_22226;
state_22226 = G__22277;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__20243__auto__ = (function (){var statearr_22255 = f__20242__auto__.call(null);
(statearr_22255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22260);

return statearr_22255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22260,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args22279 = [];
var len__17884__auto___22335 = arguments.length;
var i__17885__auto___22336 = (0);
while(true){
if((i__17885__auto___22336 < len__17884__auto___22335)){
args22279.push((arguments[i__17885__auto___22336]));

var G__22337 = (i__17885__auto___22336 + (1));
i__17885__auto___22336 = G__22337;
continue;
} else {
}
break;
}

var G__22281 = args22279.length;
switch (G__22281) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22279.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22339,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22339,out){
return (function (state_22311){
var state_val_22312 = (state_22311[(1)]);
if((state_val_22312 === (7))){
var inst_22290 = (state_22311[(7)]);
var inst_22291 = (state_22311[(8)]);
var inst_22290__$1 = (state_22311[(2)]);
var inst_22291__$1 = cljs.core.nth.call(null,inst_22290__$1,(0),null);
var inst_22292 = cljs.core.nth.call(null,inst_22290__$1,(1),null);
var inst_22293 = (inst_22291__$1 == null);
var state_22311__$1 = (function (){var statearr_22313 = state_22311;
(statearr_22313[(7)] = inst_22290__$1);

(statearr_22313[(9)] = inst_22292);

(statearr_22313[(8)] = inst_22291__$1);

return statearr_22313;
})();
if(cljs.core.truth_(inst_22293)){
var statearr_22314_22340 = state_22311__$1;
(statearr_22314_22340[(1)] = (8));

} else {
var statearr_22315_22341 = state_22311__$1;
(statearr_22315_22341[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (1))){
var inst_22282 = cljs.core.vec.call(null,chs);
var inst_22283 = inst_22282;
var state_22311__$1 = (function (){var statearr_22316 = state_22311;
(statearr_22316[(10)] = inst_22283);

return statearr_22316;
})();
var statearr_22317_22342 = state_22311__$1;
(statearr_22317_22342[(2)] = null);

(statearr_22317_22342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (4))){
var inst_22283 = (state_22311[(10)]);
var state_22311__$1 = state_22311;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22311__$1,(7),inst_22283);
} else {
if((state_val_22312 === (6))){
var inst_22307 = (state_22311[(2)]);
var state_22311__$1 = state_22311;
var statearr_22318_22343 = state_22311__$1;
(statearr_22318_22343[(2)] = inst_22307);

(statearr_22318_22343[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (3))){
var inst_22309 = (state_22311[(2)]);
var state_22311__$1 = state_22311;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22311__$1,inst_22309);
} else {
if((state_val_22312 === (2))){
var inst_22283 = (state_22311[(10)]);
var inst_22285 = cljs.core.count.call(null,inst_22283);
var inst_22286 = (inst_22285 > (0));
var state_22311__$1 = state_22311;
if(cljs.core.truth_(inst_22286)){
var statearr_22320_22344 = state_22311__$1;
(statearr_22320_22344[(1)] = (4));

} else {
var statearr_22321_22345 = state_22311__$1;
(statearr_22321_22345[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (11))){
var inst_22283 = (state_22311[(10)]);
var inst_22300 = (state_22311[(2)]);
var tmp22319 = inst_22283;
var inst_22283__$1 = tmp22319;
var state_22311__$1 = (function (){var statearr_22322 = state_22311;
(statearr_22322[(10)] = inst_22283__$1);

(statearr_22322[(11)] = inst_22300);

return statearr_22322;
})();
var statearr_22323_22346 = state_22311__$1;
(statearr_22323_22346[(2)] = null);

(statearr_22323_22346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (9))){
var inst_22291 = (state_22311[(8)]);
var state_22311__$1 = state_22311;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22311__$1,(11),out,inst_22291);
} else {
if((state_val_22312 === (5))){
var inst_22305 = cljs.core.async.close_BANG_.call(null,out);
var state_22311__$1 = state_22311;
var statearr_22324_22347 = state_22311__$1;
(statearr_22324_22347[(2)] = inst_22305);

(statearr_22324_22347[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (10))){
var inst_22303 = (state_22311[(2)]);
var state_22311__$1 = state_22311;
var statearr_22325_22348 = state_22311__$1;
(statearr_22325_22348[(2)] = inst_22303);

(statearr_22325_22348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22312 === (8))){
var inst_22283 = (state_22311[(10)]);
var inst_22290 = (state_22311[(7)]);
var inst_22292 = (state_22311[(9)]);
var inst_22291 = (state_22311[(8)]);
var inst_22295 = (function (){var cs = inst_22283;
var vec__22288 = inst_22290;
var v = inst_22291;
var c = inst_22292;
return ((function (cs,vec__22288,v,c,inst_22283,inst_22290,inst_22292,inst_22291,state_val_22312,c__20241__auto___22339,out){
return (function (p1__22278_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22278_SHARP_);
});
;})(cs,vec__22288,v,c,inst_22283,inst_22290,inst_22292,inst_22291,state_val_22312,c__20241__auto___22339,out))
})();
var inst_22296 = cljs.core.filterv.call(null,inst_22295,inst_22283);
var inst_22283__$1 = inst_22296;
var state_22311__$1 = (function (){var statearr_22326 = state_22311;
(statearr_22326[(10)] = inst_22283__$1);

return statearr_22326;
})();
var statearr_22327_22349 = state_22311__$1;
(statearr_22327_22349[(2)] = null);

(statearr_22327_22349[(1)] = (2));


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
});})(c__20241__auto___22339,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22339,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22331 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22331[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22331[(1)] = (1));

return statearr_22331;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22311){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22311);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22332){if((e22332 instanceof Object)){
var ex__20133__auto__ = e22332;
var statearr_22333_22350 = state_22311;
(statearr_22333_22350[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22311);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22351 = state_22311;
state_22311 = G__22351;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22339,out))
})();
var state__20243__auto__ = (function (){var statearr_22334 = f__20242__auto__.call(null);
(statearr_22334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22339);

return statearr_22334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22339,out))
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
var args22352 = [];
var len__17884__auto___22401 = arguments.length;
var i__17885__auto___22402 = (0);
while(true){
if((i__17885__auto___22402 < len__17884__auto___22401)){
args22352.push((arguments[i__17885__auto___22402]));

var G__22403 = (i__17885__auto___22402 + (1));
i__17885__auto___22402 = G__22403;
continue;
} else {
}
break;
}

var G__22354 = args22352.length;
switch (G__22354) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22352.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22405 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22405,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22405,out){
return (function (state_22378){
var state_val_22379 = (state_22378[(1)]);
if((state_val_22379 === (7))){
var inst_22360 = (state_22378[(7)]);
var inst_22360__$1 = (state_22378[(2)]);
var inst_22361 = (inst_22360__$1 == null);
var inst_22362 = cljs.core.not.call(null,inst_22361);
var state_22378__$1 = (function (){var statearr_22380 = state_22378;
(statearr_22380[(7)] = inst_22360__$1);

return statearr_22380;
})();
if(inst_22362){
var statearr_22381_22406 = state_22378__$1;
(statearr_22381_22406[(1)] = (8));

} else {
var statearr_22382_22407 = state_22378__$1;
(statearr_22382_22407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (1))){
var inst_22355 = (0);
var state_22378__$1 = (function (){var statearr_22383 = state_22378;
(statearr_22383[(8)] = inst_22355);

return statearr_22383;
})();
var statearr_22384_22408 = state_22378__$1;
(statearr_22384_22408[(2)] = null);

(statearr_22384_22408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (4))){
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22378__$1,(7),ch);
} else {
if((state_val_22379 === (6))){
var inst_22373 = (state_22378[(2)]);
var state_22378__$1 = state_22378;
var statearr_22385_22409 = state_22378__$1;
(statearr_22385_22409[(2)] = inst_22373);

(statearr_22385_22409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (3))){
var inst_22375 = (state_22378[(2)]);
var inst_22376 = cljs.core.async.close_BANG_.call(null,out);
var state_22378__$1 = (function (){var statearr_22386 = state_22378;
(statearr_22386[(9)] = inst_22375);

return statearr_22386;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22378__$1,inst_22376);
} else {
if((state_val_22379 === (2))){
var inst_22355 = (state_22378[(8)]);
var inst_22357 = (inst_22355 < n);
var state_22378__$1 = state_22378;
if(cljs.core.truth_(inst_22357)){
var statearr_22387_22410 = state_22378__$1;
(statearr_22387_22410[(1)] = (4));

} else {
var statearr_22388_22411 = state_22378__$1;
(statearr_22388_22411[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (11))){
var inst_22355 = (state_22378[(8)]);
var inst_22365 = (state_22378[(2)]);
var inst_22366 = (inst_22355 + (1));
var inst_22355__$1 = inst_22366;
var state_22378__$1 = (function (){var statearr_22389 = state_22378;
(statearr_22389[(10)] = inst_22365);

(statearr_22389[(8)] = inst_22355__$1);

return statearr_22389;
})();
var statearr_22390_22412 = state_22378__$1;
(statearr_22390_22412[(2)] = null);

(statearr_22390_22412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (9))){
var state_22378__$1 = state_22378;
var statearr_22391_22413 = state_22378__$1;
(statearr_22391_22413[(2)] = null);

(statearr_22391_22413[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (5))){
var state_22378__$1 = state_22378;
var statearr_22392_22414 = state_22378__$1;
(statearr_22392_22414[(2)] = null);

(statearr_22392_22414[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (10))){
var inst_22370 = (state_22378[(2)]);
var state_22378__$1 = state_22378;
var statearr_22393_22415 = state_22378__$1;
(statearr_22393_22415[(2)] = inst_22370);

(statearr_22393_22415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22379 === (8))){
var inst_22360 = (state_22378[(7)]);
var state_22378__$1 = state_22378;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22378__$1,(11),out,inst_22360);
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
});})(c__20241__auto___22405,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22405,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22397 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22397[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22397[(1)] = (1));

return statearr_22397;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22378){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22398){if((e22398 instanceof Object)){
var ex__20133__auto__ = e22398;
var statearr_22399_22416 = state_22378;
(statearr_22399_22416[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22398;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22417 = state_22378;
state_22378 = G__22417;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22378){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22405,out))
})();
var state__20243__auto__ = (function (){var statearr_22400 = f__20242__auto__.call(null);
(statearr_22400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22405);

return statearr_22400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22405,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22425 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22425 = (function (map_LT_,f,ch,meta22426){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22426 = meta22426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22427,meta22426__$1){
var self__ = this;
var _22427__$1 = this;
return (new cljs.core.async.t_cljs$core$async22425(self__.map_LT_,self__.f,self__.ch,meta22426__$1));
});

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22427){
var self__ = this;
var _22427__$1 = this;
return self__.meta22426;
});

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async22428 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22428 = (function (map_LT_,f,ch,meta22426,_,fn1,meta22429){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta22426 = meta22426;
this._ = _;
this.fn1 = fn1;
this.meta22429 = meta22429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_22430,meta22429__$1){
var self__ = this;
var _22430__$1 = this;
return (new cljs.core.async.t_cljs$core$async22428(self__.map_LT_,self__.f,self__.ch,self__.meta22426,self__._,self__.fn1,meta22429__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_22430){
var self__ = this;
var _22430__$1 = this;
return self__.meta22429;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__22418_SHARP_){
return f1.call(null,(((p1__22418_SHARP_ == null))?null:self__.f.call(null,p1__22418_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22426","meta22426",865320390,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22425","cljs.core.async/t_cljs$core$async22425",1721057087,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22429","meta22429",-807439006,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async22428.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22428.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22428";

cljs.core.async.t_cljs$core$async22428.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22428");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async22428 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22428(map_LT___$1,f__$1,ch__$1,meta22426__$1,___$2,fn1__$1,meta22429){
return (new cljs.core.async.t_cljs$core$async22428(map_LT___$1,f__$1,ch__$1,meta22426__$1,___$2,fn1__$1,meta22429));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async22428(self__.map_LT_,self__.f,self__.ch,self__.meta22426,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22425.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async22425.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22426","meta22426",865320390,null)], null);
});

cljs.core.async.t_cljs$core$async22425.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22425.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22425";

cljs.core.async.t_cljs$core$async22425.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22425");
});

cljs.core.async.__GT_t_cljs$core$async22425 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22425(map_LT___$1,f__$1,ch__$1,meta22426){
return (new cljs.core.async.t_cljs$core$async22425(map_LT___$1,f__$1,ch__$1,meta22426));
});

}

return (new cljs.core.async.t_cljs$core$async22425(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async22434 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22434 = (function (map_GT_,f,ch,meta22435){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta22435 = meta22435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22436,meta22435__$1){
var self__ = this;
var _22436__$1 = this;
return (new cljs.core.async.t_cljs$core$async22434(self__.map_GT_,self__.f,self__.ch,meta22435__$1));
});

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22436){
var self__ = this;
var _22436__$1 = this;
return self__.meta22435;
});

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async22434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22435","meta22435",1997351336,null)], null);
});

cljs.core.async.t_cljs$core$async22434.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22434";

cljs.core.async.t_cljs$core$async22434.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22434");
});

cljs.core.async.__GT_t_cljs$core$async22434 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22434(map_GT___$1,f__$1,ch__$1,meta22435){
return (new cljs.core.async.t_cljs$core$async22434(map_GT___$1,f__$1,ch__$1,meta22435));
});

}

return (new cljs.core.async.t_cljs$core$async22434(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async22440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22440 = (function (filter_GT_,p,ch,meta22441){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta22441 = meta22441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22442,meta22441__$1){
var self__ = this;
var _22442__$1 = this;
return (new cljs.core.async.t_cljs$core$async22440(self__.filter_GT_,self__.p,self__.ch,meta22441__$1));
});

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22442){
var self__ = this;
var _22442__$1 = this;
return self__.meta22441;
});

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async22440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async22440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22441","meta22441",31567450,null)], null);
});

cljs.core.async.t_cljs$core$async22440.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22440";

cljs.core.async.t_cljs$core$async22440.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async22440");
});

cljs.core.async.__GT_t_cljs$core$async22440 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22440(filter_GT___$1,p__$1,ch__$1,meta22441){
return (new cljs.core.async.t_cljs$core$async22440(filter_GT___$1,p__$1,ch__$1,meta22441));
});

}

return (new cljs.core.async.t_cljs$core$async22440(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args22443 = [];
var len__17884__auto___22487 = arguments.length;
var i__17885__auto___22488 = (0);
while(true){
if((i__17885__auto___22488 < len__17884__auto___22487)){
args22443.push((arguments[i__17885__auto___22488]));

var G__22489 = (i__17885__auto___22488 + (1));
i__17885__auto___22488 = G__22489;
continue;
} else {
}
break;
}

var G__22445 = args22443.length;
switch (G__22445) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22443.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22491,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22491,out){
return (function (state_22466){
var state_val_22467 = (state_22466[(1)]);
if((state_val_22467 === (7))){
var inst_22462 = (state_22466[(2)]);
var state_22466__$1 = state_22466;
var statearr_22468_22492 = state_22466__$1;
(statearr_22468_22492[(2)] = inst_22462);

(statearr_22468_22492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (1))){
var state_22466__$1 = state_22466;
var statearr_22469_22493 = state_22466__$1;
(statearr_22469_22493[(2)] = null);

(statearr_22469_22493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (4))){
var inst_22448 = (state_22466[(7)]);
var inst_22448__$1 = (state_22466[(2)]);
var inst_22449 = (inst_22448__$1 == null);
var state_22466__$1 = (function (){var statearr_22470 = state_22466;
(statearr_22470[(7)] = inst_22448__$1);

return statearr_22470;
})();
if(cljs.core.truth_(inst_22449)){
var statearr_22471_22494 = state_22466__$1;
(statearr_22471_22494[(1)] = (5));

} else {
var statearr_22472_22495 = state_22466__$1;
(statearr_22472_22495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (6))){
var inst_22448 = (state_22466[(7)]);
var inst_22453 = p.call(null,inst_22448);
var state_22466__$1 = state_22466;
if(cljs.core.truth_(inst_22453)){
var statearr_22473_22496 = state_22466__$1;
(statearr_22473_22496[(1)] = (8));

} else {
var statearr_22474_22497 = state_22466__$1;
(statearr_22474_22497[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (3))){
var inst_22464 = (state_22466[(2)]);
var state_22466__$1 = state_22466;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22466__$1,inst_22464);
} else {
if((state_val_22467 === (2))){
var state_22466__$1 = state_22466;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22466__$1,(4),ch);
} else {
if((state_val_22467 === (11))){
var inst_22456 = (state_22466[(2)]);
var state_22466__$1 = state_22466;
var statearr_22475_22498 = state_22466__$1;
(statearr_22475_22498[(2)] = inst_22456);

(statearr_22475_22498[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (9))){
var state_22466__$1 = state_22466;
var statearr_22476_22499 = state_22466__$1;
(statearr_22476_22499[(2)] = null);

(statearr_22476_22499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (5))){
var inst_22451 = cljs.core.async.close_BANG_.call(null,out);
var state_22466__$1 = state_22466;
var statearr_22477_22500 = state_22466__$1;
(statearr_22477_22500[(2)] = inst_22451);

(statearr_22477_22500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (10))){
var inst_22459 = (state_22466[(2)]);
var state_22466__$1 = (function (){var statearr_22478 = state_22466;
(statearr_22478[(8)] = inst_22459);

return statearr_22478;
})();
var statearr_22479_22501 = state_22466__$1;
(statearr_22479_22501[(2)] = null);

(statearr_22479_22501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22467 === (8))){
var inst_22448 = (state_22466[(7)]);
var state_22466__$1 = state_22466;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22466__$1,(11),out,inst_22448);
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
});})(c__20241__auto___22491,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22491,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22483 = [null,null,null,null,null,null,null,null,null];
(statearr_22483[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22483[(1)] = (1));

return statearr_22483;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22466){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22466);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22484){if((e22484 instanceof Object)){
var ex__20133__auto__ = e22484;
var statearr_22485_22502 = state_22466;
(statearr_22485_22502[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22466);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22503 = state_22466;
state_22466 = G__22503;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22466){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22491,out))
})();
var state__20243__auto__ = (function (){var statearr_22486 = f__20242__auto__.call(null);
(statearr_22486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22491);

return statearr_22486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22491,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args22504 = [];
var len__17884__auto___22507 = arguments.length;
var i__17885__auto___22508 = (0);
while(true){
if((i__17885__auto___22508 < len__17884__auto___22507)){
args22504.push((arguments[i__17885__auto___22508]));

var G__22509 = (i__17885__auto___22508 + (1));
i__17885__auto___22508 = G__22509;
continue;
} else {
}
break;
}

var G__22506 = args22504.length;
switch (G__22506) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22504.length)].join('')));

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
var c__20241__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto__){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto__){
return (function (state_22676){
var state_val_22677 = (state_22676[(1)]);
if((state_val_22677 === (7))){
var inst_22672 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22678_22719 = state_22676__$1;
(statearr_22678_22719[(2)] = inst_22672);

(statearr_22678_22719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (20))){
var inst_22642 = (state_22676[(7)]);
var inst_22653 = (state_22676[(2)]);
var inst_22654 = cljs.core.next.call(null,inst_22642);
var inst_22628 = inst_22654;
var inst_22629 = null;
var inst_22630 = (0);
var inst_22631 = (0);
var state_22676__$1 = (function (){var statearr_22679 = state_22676;
(statearr_22679[(8)] = inst_22629);

(statearr_22679[(9)] = inst_22653);

(statearr_22679[(10)] = inst_22631);

(statearr_22679[(11)] = inst_22628);

(statearr_22679[(12)] = inst_22630);

return statearr_22679;
})();
var statearr_22680_22720 = state_22676__$1;
(statearr_22680_22720[(2)] = null);

(statearr_22680_22720[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (1))){
var state_22676__$1 = state_22676;
var statearr_22681_22721 = state_22676__$1;
(statearr_22681_22721[(2)] = null);

(statearr_22681_22721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (4))){
var inst_22617 = (state_22676[(13)]);
var inst_22617__$1 = (state_22676[(2)]);
var inst_22618 = (inst_22617__$1 == null);
var state_22676__$1 = (function (){var statearr_22682 = state_22676;
(statearr_22682[(13)] = inst_22617__$1);

return statearr_22682;
})();
if(cljs.core.truth_(inst_22618)){
var statearr_22683_22722 = state_22676__$1;
(statearr_22683_22722[(1)] = (5));

} else {
var statearr_22684_22723 = state_22676__$1;
(statearr_22684_22723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (15))){
var state_22676__$1 = state_22676;
var statearr_22688_22724 = state_22676__$1;
(statearr_22688_22724[(2)] = null);

(statearr_22688_22724[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (21))){
var state_22676__$1 = state_22676;
var statearr_22689_22725 = state_22676__$1;
(statearr_22689_22725[(2)] = null);

(statearr_22689_22725[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (13))){
var inst_22629 = (state_22676[(8)]);
var inst_22631 = (state_22676[(10)]);
var inst_22628 = (state_22676[(11)]);
var inst_22630 = (state_22676[(12)]);
var inst_22638 = (state_22676[(2)]);
var inst_22639 = (inst_22631 + (1));
var tmp22685 = inst_22629;
var tmp22686 = inst_22628;
var tmp22687 = inst_22630;
var inst_22628__$1 = tmp22686;
var inst_22629__$1 = tmp22685;
var inst_22630__$1 = tmp22687;
var inst_22631__$1 = inst_22639;
var state_22676__$1 = (function (){var statearr_22690 = state_22676;
(statearr_22690[(8)] = inst_22629__$1);

(statearr_22690[(14)] = inst_22638);

(statearr_22690[(10)] = inst_22631__$1);

(statearr_22690[(11)] = inst_22628__$1);

(statearr_22690[(12)] = inst_22630__$1);

return statearr_22690;
})();
var statearr_22691_22726 = state_22676__$1;
(statearr_22691_22726[(2)] = null);

(statearr_22691_22726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (22))){
var state_22676__$1 = state_22676;
var statearr_22692_22727 = state_22676__$1;
(statearr_22692_22727[(2)] = null);

(statearr_22692_22727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (6))){
var inst_22617 = (state_22676[(13)]);
var inst_22626 = f.call(null,inst_22617);
var inst_22627 = cljs.core.seq.call(null,inst_22626);
var inst_22628 = inst_22627;
var inst_22629 = null;
var inst_22630 = (0);
var inst_22631 = (0);
var state_22676__$1 = (function (){var statearr_22693 = state_22676;
(statearr_22693[(8)] = inst_22629);

(statearr_22693[(10)] = inst_22631);

(statearr_22693[(11)] = inst_22628);

(statearr_22693[(12)] = inst_22630);

return statearr_22693;
})();
var statearr_22694_22728 = state_22676__$1;
(statearr_22694_22728[(2)] = null);

(statearr_22694_22728[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (17))){
var inst_22642 = (state_22676[(7)]);
var inst_22646 = cljs.core.chunk_first.call(null,inst_22642);
var inst_22647 = cljs.core.chunk_rest.call(null,inst_22642);
var inst_22648 = cljs.core.count.call(null,inst_22646);
var inst_22628 = inst_22647;
var inst_22629 = inst_22646;
var inst_22630 = inst_22648;
var inst_22631 = (0);
var state_22676__$1 = (function (){var statearr_22695 = state_22676;
(statearr_22695[(8)] = inst_22629);

(statearr_22695[(10)] = inst_22631);

(statearr_22695[(11)] = inst_22628);

(statearr_22695[(12)] = inst_22630);

return statearr_22695;
})();
var statearr_22696_22729 = state_22676__$1;
(statearr_22696_22729[(2)] = null);

(statearr_22696_22729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (3))){
var inst_22674 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22676__$1,inst_22674);
} else {
if((state_val_22677 === (12))){
var inst_22662 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22697_22730 = state_22676__$1;
(statearr_22697_22730[(2)] = inst_22662);

(statearr_22697_22730[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (2))){
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22676__$1,(4),in$);
} else {
if((state_val_22677 === (23))){
var inst_22670 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22698_22731 = state_22676__$1;
(statearr_22698_22731[(2)] = inst_22670);

(statearr_22698_22731[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (19))){
var inst_22657 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22699_22732 = state_22676__$1;
(statearr_22699_22732[(2)] = inst_22657);

(statearr_22699_22732[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (11))){
var inst_22642 = (state_22676[(7)]);
var inst_22628 = (state_22676[(11)]);
var inst_22642__$1 = cljs.core.seq.call(null,inst_22628);
var state_22676__$1 = (function (){var statearr_22700 = state_22676;
(statearr_22700[(7)] = inst_22642__$1);

return statearr_22700;
})();
if(inst_22642__$1){
var statearr_22701_22733 = state_22676__$1;
(statearr_22701_22733[(1)] = (14));

} else {
var statearr_22702_22734 = state_22676__$1;
(statearr_22702_22734[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (9))){
var inst_22664 = (state_22676[(2)]);
var inst_22665 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22676__$1 = (function (){var statearr_22703 = state_22676;
(statearr_22703[(15)] = inst_22664);

return statearr_22703;
})();
if(cljs.core.truth_(inst_22665)){
var statearr_22704_22735 = state_22676__$1;
(statearr_22704_22735[(1)] = (21));

} else {
var statearr_22705_22736 = state_22676__$1;
(statearr_22705_22736[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (5))){
var inst_22620 = cljs.core.async.close_BANG_.call(null,out);
var state_22676__$1 = state_22676;
var statearr_22706_22737 = state_22676__$1;
(statearr_22706_22737[(2)] = inst_22620);

(statearr_22706_22737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (14))){
var inst_22642 = (state_22676[(7)]);
var inst_22644 = cljs.core.chunked_seq_QMARK_.call(null,inst_22642);
var state_22676__$1 = state_22676;
if(inst_22644){
var statearr_22707_22738 = state_22676__$1;
(statearr_22707_22738[(1)] = (17));

} else {
var statearr_22708_22739 = state_22676__$1;
(statearr_22708_22739[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (16))){
var inst_22660 = (state_22676[(2)]);
var state_22676__$1 = state_22676;
var statearr_22709_22740 = state_22676__$1;
(statearr_22709_22740[(2)] = inst_22660);

(statearr_22709_22740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22677 === (10))){
var inst_22629 = (state_22676[(8)]);
var inst_22631 = (state_22676[(10)]);
var inst_22636 = cljs.core._nth.call(null,inst_22629,inst_22631);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22676__$1,(13),out,inst_22636);
} else {
if((state_val_22677 === (18))){
var inst_22642 = (state_22676[(7)]);
var inst_22651 = cljs.core.first.call(null,inst_22642);
var state_22676__$1 = state_22676;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22676__$1,(20),out,inst_22651);
} else {
if((state_val_22677 === (8))){
var inst_22631 = (state_22676[(10)]);
var inst_22630 = (state_22676[(12)]);
var inst_22633 = (inst_22631 < inst_22630);
var inst_22634 = inst_22633;
var state_22676__$1 = state_22676;
if(cljs.core.truth_(inst_22634)){
var statearr_22710_22741 = state_22676__$1;
(statearr_22710_22741[(1)] = (10));

} else {
var statearr_22711_22742 = state_22676__$1;
(statearr_22711_22742[(1)] = (11));

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
});})(c__20241__auto__))
;
return ((function (switch__20129__auto__,c__20241__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____0 = (function (){
var statearr_22715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22715[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__);

(statearr_22715[(1)] = (1));

return statearr_22715;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____1 = (function (state_22676){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22676);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22716){if((e22716 instanceof Object)){
var ex__20133__auto__ = e22716;
var statearr_22717_22743 = state_22676;
(statearr_22717_22743[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22676);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22744 = state_22676;
state_22676 = G__22744;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__ = function(state_22676){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____1.call(this,state_22676);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20130__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto__))
})();
var state__20243__auto__ = (function (){var statearr_22718 = f__20242__auto__.call(null);
(statearr_22718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto__);

return statearr_22718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto__))
);

return c__20241__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args22745 = [];
var len__17884__auto___22748 = arguments.length;
var i__17885__auto___22749 = (0);
while(true){
if((i__17885__auto___22749 < len__17884__auto___22748)){
args22745.push((arguments[i__17885__auto___22749]));

var G__22750 = (i__17885__auto___22749 + (1));
i__17885__auto___22749 = G__22750;
continue;
} else {
}
break;
}

var G__22747 = args22745.length;
switch (G__22747) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22745.length)].join('')));

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
var args22752 = [];
var len__17884__auto___22755 = arguments.length;
var i__17885__auto___22756 = (0);
while(true){
if((i__17885__auto___22756 < len__17884__auto___22755)){
args22752.push((arguments[i__17885__auto___22756]));

var G__22757 = (i__17885__auto___22756 + (1));
i__17885__auto___22756 = G__22757;
continue;
} else {
}
break;
}

var G__22754 = args22752.length;
switch (G__22754) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22752.length)].join('')));

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
var args22759 = [];
var len__17884__auto___22810 = arguments.length;
var i__17885__auto___22811 = (0);
while(true){
if((i__17885__auto___22811 < len__17884__auto___22810)){
args22759.push((arguments[i__17885__auto___22811]));

var G__22812 = (i__17885__auto___22811 + (1));
i__17885__auto___22811 = G__22812;
continue;
} else {
}
break;
}

var G__22761 = args22759.length;
switch (G__22761) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22759.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22814 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22814,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22814,out){
return (function (state_22785){
var state_val_22786 = (state_22785[(1)]);
if((state_val_22786 === (7))){
var inst_22780 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22787_22815 = state_22785__$1;
(statearr_22787_22815[(2)] = inst_22780);

(statearr_22787_22815[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (1))){
var inst_22762 = null;
var state_22785__$1 = (function (){var statearr_22788 = state_22785;
(statearr_22788[(7)] = inst_22762);

return statearr_22788;
})();
var statearr_22789_22816 = state_22785__$1;
(statearr_22789_22816[(2)] = null);

(statearr_22789_22816[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (4))){
var inst_22765 = (state_22785[(8)]);
var inst_22765__$1 = (state_22785[(2)]);
var inst_22766 = (inst_22765__$1 == null);
var inst_22767 = cljs.core.not.call(null,inst_22766);
var state_22785__$1 = (function (){var statearr_22790 = state_22785;
(statearr_22790[(8)] = inst_22765__$1);

return statearr_22790;
})();
if(inst_22767){
var statearr_22791_22817 = state_22785__$1;
(statearr_22791_22817[(1)] = (5));

} else {
var statearr_22792_22818 = state_22785__$1;
(statearr_22792_22818[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (6))){
var state_22785__$1 = state_22785;
var statearr_22793_22819 = state_22785__$1;
(statearr_22793_22819[(2)] = null);

(statearr_22793_22819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (3))){
var inst_22782 = (state_22785[(2)]);
var inst_22783 = cljs.core.async.close_BANG_.call(null,out);
var state_22785__$1 = (function (){var statearr_22794 = state_22785;
(statearr_22794[(9)] = inst_22782);

return statearr_22794;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22785__$1,inst_22783);
} else {
if((state_val_22786 === (2))){
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22785__$1,(4),ch);
} else {
if((state_val_22786 === (11))){
var inst_22765 = (state_22785[(8)]);
var inst_22774 = (state_22785[(2)]);
var inst_22762 = inst_22765;
var state_22785__$1 = (function (){var statearr_22795 = state_22785;
(statearr_22795[(10)] = inst_22774);

(statearr_22795[(7)] = inst_22762);

return statearr_22795;
})();
var statearr_22796_22820 = state_22785__$1;
(statearr_22796_22820[(2)] = null);

(statearr_22796_22820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (9))){
var inst_22765 = (state_22785[(8)]);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22785__$1,(11),out,inst_22765);
} else {
if((state_val_22786 === (5))){
var inst_22762 = (state_22785[(7)]);
var inst_22765 = (state_22785[(8)]);
var inst_22769 = cljs.core._EQ_.call(null,inst_22765,inst_22762);
var state_22785__$1 = state_22785;
if(inst_22769){
var statearr_22798_22821 = state_22785__$1;
(statearr_22798_22821[(1)] = (8));

} else {
var statearr_22799_22822 = state_22785__$1;
(statearr_22799_22822[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (10))){
var inst_22777 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22800_22823 = state_22785__$1;
(statearr_22800_22823[(2)] = inst_22777);

(statearr_22800_22823[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (8))){
var inst_22762 = (state_22785[(7)]);
var tmp22797 = inst_22762;
var inst_22762__$1 = tmp22797;
var state_22785__$1 = (function (){var statearr_22801 = state_22785;
(statearr_22801[(7)] = inst_22762__$1);

return statearr_22801;
})();
var statearr_22802_22824 = state_22785__$1;
(statearr_22802_22824[(2)] = null);

(statearr_22802_22824[(1)] = (2));


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
});})(c__20241__auto___22814,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22814,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22806 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22806[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22806[(1)] = (1));

return statearr_22806;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22785){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22807){if((e22807 instanceof Object)){
var ex__20133__auto__ = e22807;
var statearr_22808_22825 = state_22785;
(statearr_22808_22825[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22807;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22826 = state_22785;
state_22785 = G__22826;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22785){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22814,out))
})();
var state__20243__auto__ = (function (){var statearr_22809 = f__20242__auto__.call(null);
(statearr_22809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22814);

return statearr_22809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22814,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args22827 = [];
var len__17884__auto___22897 = arguments.length;
var i__17885__auto___22898 = (0);
while(true){
if((i__17885__auto___22898 < len__17884__auto___22897)){
args22827.push((arguments[i__17885__auto___22898]));

var G__22899 = (i__17885__auto___22898 + (1));
i__17885__auto___22898 = G__22899;
continue;
} else {
}
break;
}

var G__22829 = args22827.length;
switch (G__22829) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22827.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22901 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22901,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22901,out){
return (function (state_22867){
var state_val_22868 = (state_22867[(1)]);
if((state_val_22868 === (7))){
var inst_22863 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22869_22902 = state_22867__$1;
(statearr_22869_22902[(2)] = inst_22863);

(statearr_22869_22902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (1))){
var inst_22830 = (new Array(n));
var inst_22831 = inst_22830;
var inst_22832 = (0);
var state_22867__$1 = (function (){var statearr_22870 = state_22867;
(statearr_22870[(7)] = inst_22832);

(statearr_22870[(8)] = inst_22831);

return statearr_22870;
})();
var statearr_22871_22903 = state_22867__$1;
(statearr_22871_22903[(2)] = null);

(statearr_22871_22903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (4))){
var inst_22835 = (state_22867[(9)]);
var inst_22835__$1 = (state_22867[(2)]);
var inst_22836 = (inst_22835__$1 == null);
var inst_22837 = cljs.core.not.call(null,inst_22836);
var state_22867__$1 = (function (){var statearr_22872 = state_22867;
(statearr_22872[(9)] = inst_22835__$1);

return statearr_22872;
})();
if(inst_22837){
var statearr_22873_22904 = state_22867__$1;
(statearr_22873_22904[(1)] = (5));

} else {
var statearr_22874_22905 = state_22867__$1;
(statearr_22874_22905[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (15))){
var inst_22857 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22875_22906 = state_22867__$1;
(statearr_22875_22906[(2)] = inst_22857);

(statearr_22875_22906[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (13))){
var state_22867__$1 = state_22867;
var statearr_22876_22907 = state_22867__$1;
(statearr_22876_22907[(2)] = null);

(statearr_22876_22907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (6))){
var inst_22832 = (state_22867[(7)]);
var inst_22853 = (inst_22832 > (0));
var state_22867__$1 = state_22867;
if(cljs.core.truth_(inst_22853)){
var statearr_22877_22908 = state_22867__$1;
(statearr_22877_22908[(1)] = (12));

} else {
var statearr_22878_22909 = state_22867__$1;
(statearr_22878_22909[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (3))){
var inst_22865 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22867__$1,inst_22865);
} else {
if((state_val_22868 === (12))){
var inst_22831 = (state_22867[(8)]);
var inst_22855 = cljs.core.vec.call(null,inst_22831);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22867__$1,(15),out,inst_22855);
} else {
if((state_val_22868 === (2))){
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22867__$1,(4),ch);
} else {
if((state_val_22868 === (11))){
var inst_22847 = (state_22867[(2)]);
var inst_22848 = (new Array(n));
var inst_22831 = inst_22848;
var inst_22832 = (0);
var state_22867__$1 = (function (){var statearr_22879 = state_22867;
(statearr_22879[(10)] = inst_22847);

(statearr_22879[(7)] = inst_22832);

(statearr_22879[(8)] = inst_22831);

return statearr_22879;
})();
var statearr_22880_22910 = state_22867__$1;
(statearr_22880_22910[(2)] = null);

(statearr_22880_22910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (9))){
var inst_22831 = (state_22867[(8)]);
var inst_22845 = cljs.core.vec.call(null,inst_22831);
var state_22867__$1 = state_22867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22867__$1,(11),out,inst_22845);
} else {
if((state_val_22868 === (5))){
var inst_22832 = (state_22867[(7)]);
var inst_22831 = (state_22867[(8)]);
var inst_22835 = (state_22867[(9)]);
var inst_22840 = (state_22867[(11)]);
var inst_22839 = (inst_22831[inst_22832] = inst_22835);
var inst_22840__$1 = (inst_22832 + (1));
var inst_22841 = (inst_22840__$1 < n);
var state_22867__$1 = (function (){var statearr_22881 = state_22867;
(statearr_22881[(11)] = inst_22840__$1);

(statearr_22881[(12)] = inst_22839);

return statearr_22881;
})();
if(cljs.core.truth_(inst_22841)){
var statearr_22882_22911 = state_22867__$1;
(statearr_22882_22911[(1)] = (8));

} else {
var statearr_22883_22912 = state_22867__$1;
(statearr_22883_22912[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (14))){
var inst_22860 = (state_22867[(2)]);
var inst_22861 = cljs.core.async.close_BANG_.call(null,out);
var state_22867__$1 = (function (){var statearr_22885 = state_22867;
(statearr_22885[(13)] = inst_22860);

return statearr_22885;
})();
var statearr_22886_22913 = state_22867__$1;
(statearr_22886_22913[(2)] = inst_22861);

(statearr_22886_22913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (10))){
var inst_22851 = (state_22867[(2)]);
var state_22867__$1 = state_22867;
var statearr_22887_22914 = state_22867__$1;
(statearr_22887_22914[(2)] = inst_22851);

(statearr_22887_22914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22868 === (8))){
var inst_22831 = (state_22867[(8)]);
var inst_22840 = (state_22867[(11)]);
var tmp22884 = inst_22831;
var inst_22831__$1 = tmp22884;
var inst_22832 = inst_22840;
var state_22867__$1 = (function (){var statearr_22888 = state_22867;
(statearr_22888[(7)] = inst_22832);

(statearr_22888[(8)] = inst_22831__$1);

return statearr_22888;
})();
var statearr_22889_22915 = state_22867__$1;
(statearr_22889_22915[(2)] = null);

(statearr_22889_22915[(1)] = (2));


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
});})(c__20241__auto___22901,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22901,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22893 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22893[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22893[(1)] = (1));

return statearr_22893;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22867){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22894){if((e22894 instanceof Object)){
var ex__20133__auto__ = e22894;
var statearr_22895_22916 = state_22867;
(statearr_22895_22916[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22894;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22917 = state_22867;
state_22867 = G__22917;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22867){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22901,out))
})();
var state__20243__auto__ = (function (){var statearr_22896 = f__20242__auto__.call(null);
(statearr_22896[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22901);

return statearr_22896;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22901,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args22918 = [];
var len__17884__auto___22992 = arguments.length;
var i__17885__auto___22993 = (0);
while(true){
if((i__17885__auto___22993 < len__17884__auto___22992)){
args22918.push((arguments[i__17885__auto___22993]));

var G__22994 = (i__17885__auto___22993 + (1));
i__17885__auto___22993 = G__22994;
continue;
} else {
}
break;
}

var G__22920 = args22918.length;
switch (G__22920) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22918.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__20241__auto___22996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20241__auto___22996,out){
return (function (){
var f__20242__auto__ = (function (){var switch__20129__auto__ = ((function (c__20241__auto___22996,out){
return (function (state_22962){
var state_val_22963 = (state_22962[(1)]);
if((state_val_22963 === (7))){
var inst_22958 = (state_22962[(2)]);
var state_22962__$1 = state_22962;
var statearr_22964_22997 = state_22962__$1;
(statearr_22964_22997[(2)] = inst_22958);

(statearr_22964_22997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (1))){
var inst_22921 = [];
var inst_22922 = inst_22921;
var inst_22923 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_22962__$1 = (function (){var statearr_22965 = state_22962;
(statearr_22965[(7)] = inst_22923);

(statearr_22965[(8)] = inst_22922);

return statearr_22965;
})();
var statearr_22966_22998 = state_22962__$1;
(statearr_22966_22998[(2)] = null);

(statearr_22966_22998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (4))){
var inst_22926 = (state_22962[(9)]);
var inst_22926__$1 = (state_22962[(2)]);
var inst_22927 = (inst_22926__$1 == null);
var inst_22928 = cljs.core.not.call(null,inst_22927);
var state_22962__$1 = (function (){var statearr_22967 = state_22962;
(statearr_22967[(9)] = inst_22926__$1);

return statearr_22967;
})();
if(inst_22928){
var statearr_22968_22999 = state_22962__$1;
(statearr_22968_22999[(1)] = (5));

} else {
var statearr_22969_23000 = state_22962__$1;
(statearr_22969_23000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (15))){
var inst_22952 = (state_22962[(2)]);
var state_22962__$1 = state_22962;
var statearr_22970_23001 = state_22962__$1;
(statearr_22970_23001[(2)] = inst_22952);

(statearr_22970_23001[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (13))){
var state_22962__$1 = state_22962;
var statearr_22971_23002 = state_22962__$1;
(statearr_22971_23002[(2)] = null);

(statearr_22971_23002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (6))){
var inst_22922 = (state_22962[(8)]);
var inst_22947 = inst_22922.length;
var inst_22948 = (inst_22947 > (0));
var state_22962__$1 = state_22962;
if(cljs.core.truth_(inst_22948)){
var statearr_22972_23003 = state_22962__$1;
(statearr_22972_23003[(1)] = (12));

} else {
var statearr_22973_23004 = state_22962__$1;
(statearr_22973_23004[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (3))){
var inst_22960 = (state_22962[(2)]);
var state_22962__$1 = state_22962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22962__$1,inst_22960);
} else {
if((state_val_22963 === (12))){
var inst_22922 = (state_22962[(8)]);
var inst_22950 = cljs.core.vec.call(null,inst_22922);
var state_22962__$1 = state_22962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22962__$1,(15),out,inst_22950);
} else {
if((state_val_22963 === (2))){
var state_22962__$1 = state_22962;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22962__$1,(4),ch);
} else {
if((state_val_22963 === (11))){
var inst_22930 = (state_22962[(10)]);
var inst_22926 = (state_22962[(9)]);
var inst_22940 = (state_22962[(2)]);
var inst_22941 = [];
var inst_22942 = inst_22941.push(inst_22926);
var inst_22922 = inst_22941;
var inst_22923 = inst_22930;
var state_22962__$1 = (function (){var statearr_22974 = state_22962;
(statearr_22974[(11)] = inst_22942);

(statearr_22974[(7)] = inst_22923);

(statearr_22974[(12)] = inst_22940);

(statearr_22974[(8)] = inst_22922);

return statearr_22974;
})();
var statearr_22975_23005 = state_22962__$1;
(statearr_22975_23005[(2)] = null);

(statearr_22975_23005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (9))){
var inst_22922 = (state_22962[(8)]);
var inst_22938 = cljs.core.vec.call(null,inst_22922);
var state_22962__$1 = state_22962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22962__$1,(11),out,inst_22938);
} else {
if((state_val_22963 === (5))){
var inst_22930 = (state_22962[(10)]);
var inst_22926 = (state_22962[(9)]);
var inst_22923 = (state_22962[(7)]);
var inst_22930__$1 = f.call(null,inst_22926);
var inst_22931 = cljs.core._EQ_.call(null,inst_22930__$1,inst_22923);
var inst_22932 = cljs.core.keyword_identical_QMARK_.call(null,inst_22923,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_22933 = (inst_22931) || (inst_22932);
var state_22962__$1 = (function (){var statearr_22976 = state_22962;
(statearr_22976[(10)] = inst_22930__$1);

return statearr_22976;
})();
if(cljs.core.truth_(inst_22933)){
var statearr_22977_23006 = state_22962__$1;
(statearr_22977_23006[(1)] = (8));

} else {
var statearr_22978_23007 = state_22962__$1;
(statearr_22978_23007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (14))){
var inst_22955 = (state_22962[(2)]);
var inst_22956 = cljs.core.async.close_BANG_.call(null,out);
var state_22962__$1 = (function (){var statearr_22980 = state_22962;
(statearr_22980[(13)] = inst_22955);

return statearr_22980;
})();
var statearr_22981_23008 = state_22962__$1;
(statearr_22981_23008[(2)] = inst_22956);

(statearr_22981_23008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (10))){
var inst_22945 = (state_22962[(2)]);
var state_22962__$1 = state_22962;
var statearr_22982_23009 = state_22962__$1;
(statearr_22982_23009[(2)] = inst_22945);

(statearr_22982_23009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22963 === (8))){
var inst_22930 = (state_22962[(10)]);
var inst_22926 = (state_22962[(9)]);
var inst_22922 = (state_22962[(8)]);
var inst_22935 = inst_22922.push(inst_22926);
var tmp22979 = inst_22922;
var inst_22922__$1 = tmp22979;
var inst_22923 = inst_22930;
var state_22962__$1 = (function (){var statearr_22983 = state_22962;
(statearr_22983[(14)] = inst_22935);

(statearr_22983[(7)] = inst_22923);

(statearr_22983[(8)] = inst_22922__$1);

return statearr_22983;
})();
var statearr_22984_23010 = state_22962__$1;
(statearr_22984_23010[(2)] = null);

(statearr_22984_23010[(1)] = (2));


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
});})(c__20241__auto___22996,out))
;
return ((function (switch__20129__auto__,c__20241__auto___22996,out){
return (function() {
var cljs$core$async$state_machine__20130__auto__ = null;
var cljs$core$async$state_machine__20130__auto____0 = (function (){
var statearr_22988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22988[(0)] = cljs$core$async$state_machine__20130__auto__);

(statearr_22988[(1)] = (1));

return statearr_22988;
});
var cljs$core$async$state_machine__20130__auto____1 = (function (state_22962){
while(true){
var ret_value__20131__auto__ = (function (){try{while(true){
var result__20132__auto__ = switch__20129__auto__.call(null,state_22962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20132__auto__;
}
break;
}
}catch (e22989){if((e22989 instanceof Object)){
var ex__20133__auto__ = e22989;
var statearr_22990_23011 = state_22962;
(statearr_22990_23011[(5)] = ex__20133__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23012 = state_22962;
state_22962 = G__23012;
continue;
} else {
return ret_value__20131__auto__;
}
break;
}
});
cljs$core$async$state_machine__20130__auto__ = function(state_22962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20130__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20130__auto____1.call(this,state_22962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20130__auto____0;
cljs$core$async$state_machine__20130__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20130__auto____1;
return cljs$core$async$state_machine__20130__auto__;
})()
;})(switch__20129__auto__,c__20241__auto___22996,out))
})();
var state__20243__auto__ = (function (){var statearr_22991 = f__20242__auto__.call(null);
(statearr_22991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20241__auto___22996);

return statearr_22991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20243__auto__);
});})(c__20241__auto___22996,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1448389551563