goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32868 = arguments.length;
switch (G__32868) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32869 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32869 = (function (f,blockable,meta32870){
this.f = f;
this.blockable = blockable;
this.meta32870 = meta32870;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32871,meta32870__$1){
var self__ = this;
var _32871__$1 = this;
return (new cljs.core.async.t_cljs$core$async32869(self__.f,self__.blockable,meta32870__$1));
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32871){
var self__ = this;
var _32871__$1 = this;
return self__.meta32870;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32869.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32869.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32870","meta32870",-646618605,null)], null);
}));

(cljs.core.async.t_cljs$core$async32869.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32869");

(cljs.core.async.t_cljs$core$async32869.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32869");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32869.
 */
cljs.core.async.__GT_t_cljs$core$async32869 = (function cljs$core$async$__GT_t_cljs$core$async32869(f__$1,blockable__$1,meta32870){
return (new cljs.core.async.t_cljs$core$async32869(f__$1,blockable__$1,meta32870));
});

}

return (new cljs.core.async.t_cljs$core$async32869(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__32874 = arguments.length;
switch (G__32874) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32876 = arguments.length;
switch (G__32876) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__32878 = arguments.length;
switch (G__32878) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34362 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34362) : fn1.call(null,val_34362));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34362) : fn1.call(null,val_34362));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32880 = arguments.length;
switch (G__32880) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___34375 = n;
var x_34376 = (0);
while(true){
if((x_34376 < n__4607__auto___34375)){
(a[x_34376] = x_34376);

var G__34377 = (x_34376 + (1));
x_34376 = G__34377;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32881 = (function (flag,meta32882){
this.flag = flag;
this.meta32882 = meta32882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32883,meta32882__$1){
var self__ = this;
var _32883__$1 = this;
return (new cljs.core.async.t_cljs$core$async32881(self__.flag,meta32882__$1));
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32883){
var self__ = this;
var _32883__$1 = this;
return self__.meta32882;
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32881.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32882","meta32882",-802387854,null)], null);
}));

(cljs.core.async.t_cljs$core$async32881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32881");

(cljs.core.async.t_cljs$core$async32881.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32881.
 */
cljs.core.async.__GT_t_cljs$core$async32881 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32881(flag__$1,meta32882){
return (new cljs.core.async.t_cljs$core$async32881(flag__$1,meta32882));
});

}

return (new cljs.core.async.t_cljs$core$async32881(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32884 = (function (flag,cb,meta32885){
this.flag = flag;
this.cb = cb;
this.meta32885 = meta32885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32886,meta32885__$1){
var self__ = this;
var _32886__$1 = this;
return (new cljs.core.async.t_cljs$core$async32884(self__.flag,self__.cb,meta32885__$1));
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32886){
var self__ = this;
var _32886__$1 = this;
return self__.meta32885;
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32885","meta32885",786515893,null)], null);
}));

(cljs.core.async.t_cljs$core$async32884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32884");

(cljs.core.async.t_cljs$core$async32884.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async32884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32884.
 */
cljs.core.async.__GT_t_cljs$core$async32884 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32884(flag__$1,cb__$1,meta32885){
return (new cljs.core.async.t_cljs$core$async32884(flag__$1,cb__$1,meta32885));
});

}

return (new cljs.core.async.t_cljs$core$async32884(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32887_SHARP_){
var G__32889 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32887_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32889) : fret.call(null,G__32889));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32888_SHARP_){
var G__32890 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32888_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32890) : fret.call(null,G__32890));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4120__auto__ = wport;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34400 = (i + (1));
i = G__34400;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4120__auto__ = ret;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4109__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4109__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4109__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4736__auto__ = [];
var len__4730__auto___34401 = arguments.length;
var i__4731__auto___34402 = (0);
while(true){
if((i__4731__auto___34402 < len__4730__auto___34401)){
args__4736__auto__.push((arguments[i__4731__auto___34402]));

var G__34403 = (i__4731__auto___34402 + (1));
i__4731__auto___34402 = G__34403;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32893){
var map__32894 = p__32893;
var map__32894__$1 = (((((!((map__32894 == null))))?(((((map__32894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32894):map__32894);
var opts = map__32894__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32891){
var G__32892 = cljs.core.first(seq32891);
var seq32891__$1 = cljs.core.next(seq32891);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32892,seq32891__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__32897 = arguments.length;
switch (G__32897) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32792__auto___34414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_32921){
var state_val_32922 = (state_32921[(1)]);
if((state_val_32922 === (7))){
var inst_32917 = (state_32921[(2)]);
var state_32921__$1 = state_32921;
var statearr_32923_34415 = state_32921__$1;
(statearr_32923_34415[(2)] = inst_32917);

(statearr_32923_34415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (1))){
var state_32921__$1 = state_32921;
var statearr_32924_34416 = state_32921__$1;
(statearr_32924_34416[(2)] = null);

(statearr_32924_34416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (4))){
var inst_32900 = (state_32921[(7)]);
var inst_32900__$1 = (state_32921[(2)]);
var inst_32901 = (inst_32900__$1 == null);
var state_32921__$1 = (function (){var statearr_32925 = state_32921;
(statearr_32925[(7)] = inst_32900__$1);

return statearr_32925;
})();
if(cljs.core.truth_(inst_32901)){
var statearr_32926_34417 = state_32921__$1;
(statearr_32926_34417[(1)] = (5));

} else {
var statearr_32927_34418 = state_32921__$1;
(statearr_32927_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (13))){
var state_32921__$1 = state_32921;
var statearr_32928_34419 = state_32921__$1;
(statearr_32928_34419[(2)] = null);

(statearr_32928_34419[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (6))){
var inst_32900 = (state_32921[(7)]);
var state_32921__$1 = state_32921;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32921__$1,(11),to,inst_32900);
} else {
if((state_val_32922 === (3))){
var inst_32919 = (state_32921[(2)]);
var state_32921__$1 = state_32921;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32921__$1,inst_32919);
} else {
if((state_val_32922 === (12))){
var state_32921__$1 = state_32921;
var statearr_32929_34420 = state_32921__$1;
(statearr_32929_34420[(2)] = null);

(statearr_32929_34420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (2))){
var state_32921__$1 = state_32921;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32921__$1,(4),from);
} else {
if((state_val_32922 === (11))){
var inst_32910 = (state_32921[(2)]);
var state_32921__$1 = state_32921;
if(cljs.core.truth_(inst_32910)){
var statearr_32930_34421 = state_32921__$1;
(statearr_32930_34421[(1)] = (12));

} else {
var statearr_32931_34422 = state_32921__$1;
(statearr_32931_34422[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (9))){
var state_32921__$1 = state_32921;
var statearr_32932_34423 = state_32921__$1;
(statearr_32932_34423[(2)] = null);

(statearr_32932_34423[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (5))){
var state_32921__$1 = state_32921;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32933_34424 = state_32921__$1;
(statearr_32933_34424[(1)] = (8));

} else {
var statearr_32934_34425 = state_32921__$1;
(statearr_32934_34425[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (14))){
var inst_32915 = (state_32921[(2)]);
var state_32921__$1 = state_32921;
var statearr_32935_34426 = state_32921__$1;
(statearr_32935_34426[(2)] = inst_32915);

(statearr_32935_34426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (10))){
var inst_32907 = (state_32921[(2)]);
var state_32921__$1 = state_32921;
var statearr_32936_34427 = state_32921__$1;
(statearr_32936_34427[(2)] = inst_32907);

(statearr_32936_34427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32922 === (8))){
var inst_32904 = cljs.core.async.close_BANG_(to);
var state_32921__$1 = state_32921;
var statearr_32937_34428 = state_32921__$1;
(statearr_32937_34428[(2)] = inst_32904);

(statearr_32937_34428[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_32938 = [null,null,null,null,null,null,null,null];
(statearr_32938[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_32938[(1)] = (1));

return statearr_32938;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_32921){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_32921);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e32939){var ex__32743__auto__ = e32939;
var statearr_32940_34429 = state_32921;
(statearr_32940_34429[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_32921[(4)]))){
var statearr_32941_34430 = state_32921;
(statearr_32941_34430[(1)] = cljs.core.first((state_32921[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34432 = state_32921;
state_32921 = G__34432;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_32921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_32921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_32942 = f__32793__auto__();
(statearr_32942[(6)] = c__32792__auto___34414);

return statearr_32942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32943){
var vec__32944 = p__32943;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32944,(1),null);
var job = vec__32944;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32792__auto___34451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_32951){
var state_val_32952 = (state_32951[(1)]);
if((state_val_32952 === (1))){
var state_32951__$1 = state_32951;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32951__$1,(2),res,v);
} else {
if((state_val_32952 === (2))){
var inst_32948 = (state_32951[(2)]);
var inst_32949 = cljs.core.async.close_BANG_(res);
var state_32951__$1 = (function (){var statearr_32953 = state_32951;
(statearr_32953[(7)] = inst_32948);

return statearr_32953;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32951__$1,inst_32949);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_32954 = [null,null,null,null,null,null,null,null];
(statearr_32954[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__);

(statearr_32954[(1)] = (1));

return statearr_32954;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1 = (function (state_32951){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_32951);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e32955){var ex__32743__auto__ = e32955;
var statearr_32956_34456 = state_32951;
(statearr_32956_34456[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_32951[(4)]))){
var statearr_32957_34457 = state_32951;
(statearr_32957_34457[(1)] = cljs.core.first((state_32951[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34459 = state_32951;
state_32951 = G__34459;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = function(state_32951){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1.call(this,state_32951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_32958 = f__32793__auto__();
(statearr_32958[(6)] = c__32792__auto___34451);

return statearr_32958;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32959){
var vec__32960 = p__32959;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32960,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32960,(1),null);
var job = vec__32960;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4607__auto___34461 = n;
var __34463 = (0);
while(true){
if((__34463 < n__4607__auto___34461)){
var G__32963_34464 = type;
var G__32963_34465__$1 = (((G__32963_34464 instanceof cljs.core.Keyword))?G__32963_34464.fqn:null);
switch (G__32963_34465__$1) {
case "compute":
var c__32792__auto___34467 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34463,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = ((function (__34463,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function (state_32976){
var state_val_32977 = (state_32976[(1)]);
if((state_val_32977 === (1))){
var state_32976__$1 = state_32976;
var statearr_32978_34468 = state_32976__$1;
(statearr_32978_34468[(2)] = null);

(statearr_32978_34468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (2))){
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32976__$1,(4),jobs);
} else {
if((state_val_32977 === (3))){
var inst_32974 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32976__$1,inst_32974);
} else {
if((state_val_32977 === (4))){
var inst_32966 = (state_32976[(2)]);
var inst_32967 = process(inst_32966);
var state_32976__$1 = state_32976;
if(cljs.core.truth_(inst_32967)){
var statearr_32979_34469 = state_32976__$1;
(statearr_32979_34469[(1)] = (5));

} else {
var statearr_32980_34470 = state_32976__$1;
(statearr_32980_34470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (5))){
var state_32976__$1 = state_32976;
var statearr_32981_34471 = state_32976__$1;
(statearr_32981_34471[(2)] = null);

(statearr_32981_34471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (6))){
var state_32976__$1 = state_32976;
var statearr_32982_34472 = state_32976__$1;
(statearr_32982_34472[(2)] = null);

(statearr_32982_34472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32977 === (7))){
var inst_32972 = (state_32976[(2)]);
var state_32976__$1 = state_32976;
var statearr_32983_34475 = state_32976__$1;
(statearr_32983_34475[(2)] = inst_32972);

(statearr_32983_34475[(1)] = (3));


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
});})(__34463,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
;
return ((function (__34463,switch__32739__auto__,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_32984 = [null,null,null,null,null,null,null];
(statearr_32984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__);

(statearr_32984[(1)] = (1));

return statearr_32984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1 = (function (state_32976){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_32976);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e32985){var ex__32743__auto__ = e32985;
var statearr_32986_34478 = state_32976;
(statearr_32986_34478[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_32976[(4)]))){
var statearr_32987_34479 = state_32976;
(statearr_32987_34479[(1)] = cljs.core.first((state_32976[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34482 = state_32976;
state_32976 = G__34482;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = function(state_32976){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1.call(this,state_32976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__;
})()
;})(__34463,switch__32739__auto__,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
})();
var state__32794__auto__ = (function (){var statearr_32988 = f__32793__auto__();
(statearr_32988[(6)] = c__32792__auto___34467);

return statearr_32988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
});})(__34463,c__32792__auto___34467,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
);


break;
case "async":
var c__32792__auto___34484 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34463,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = ((function (__34463,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function (state_33001){
var state_val_33002 = (state_33001[(1)]);
if((state_val_33002 === (1))){
var state_33001__$1 = state_33001;
var statearr_33003_34485 = state_33001__$1;
(statearr_33003_34485[(2)] = null);

(statearr_33003_34485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (2))){
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33001__$1,(4),jobs);
} else {
if((state_val_33002 === (3))){
var inst_32999 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33001__$1,inst_32999);
} else {
if((state_val_33002 === (4))){
var inst_32991 = (state_33001[(2)]);
var inst_32992 = async(inst_32991);
var state_33001__$1 = state_33001;
if(cljs.core.truth_(inst_32992)){
var statearr_33004_34486 = state_33001__$1;
(statearr_33004_34486[(1)] = (5));

} else {
var statearr_33005_34487 = state_33001__$1;
(statearr_33005_34487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (5))){
var state_33001__$1 = state_33001;
var statearr_33006_34488 = state_33001__$1;
(statearr_33006_34488[(2)] = null);

(statearr_33006_34488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (6))){
var state_33001__$1 = state_33001;
var statearr_33007_34489 = state_33001__$1;
(statearr_33007_34489[(2)] = null);

(statearr_33007_34489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33002 === (7))){
var inst_32997 = (state_33001[(2)]);
var state_33001__$1 = state_33001;
var statearr_33008_34490 = state_33001__$1;
(statearr_33008_34490[(2)] = inst_32997);

(statearr_33008_34490[(1)] = (3));


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
});})(__34463,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
;
return ((function (__34463,switch__32739__auto__,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_33009 = [null,null,null,null,null,null,null];
(statearr_33009[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__);

(statearr_33009[(1)] = (1));

return statearr_33009;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1 = (function (state_33001){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33001);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33010){var ex__32743__auto__ = e33010;
var statearr_33011_34491 = state_33001;
(statearr_33011_34491[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33001[(4)]))){
var statearr_33012_34492 = state_33001;
(statearr_33012_34492[(1)] = cljs.core.first((state_33001[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34493 = state_33001;
state_33001 = G__34493;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = function(state_33001){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1.call(this,state_33001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__;
})()
;})(__34463,switch__32739__auto__,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
})();
var state__32794__auto__ = (function (){var statearr_33013 = f__32793__auto__();
(statearr_33013[(6)] = c__32792__auto___34484);

return statearr_33013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
});})(__34463,c__32792__auto___34484,G__32963_34464,G__32963_34465__$1,n__4607__auto___34461,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32963_34465__$1)].join('')));

}

var G__34494 = (__34463 + (1));
__34463 = G__34494;
continue;
} else {
}
break;
}

var c__32792__auto___34495 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33035){
var state_val_33036 = (state_33035[(1)]);
if((state_val_33036 === (7))){
var inst_33031 = (state_33035[(2)]);
var state_33035__$1 = state_33035;
var statearr_33037_34496 = state_33035__$1;
(statearr_33037_34496[(2)] = inst_33031);

(statearr_33037_34496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (1))){
var state_33035__$1 = state_33035;
var statearr_33038_34497 = state_33035__$1;
(statearr_33038_34497[(2)] = null);

(statearr_33038_34497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (4))){
var inst_33016 = (state_33035[(7)]);
var inst_33016__$1 = (state_33035[(2)]);
var inst_33017 = (inst_33016__$1 == null);
var state_33035__$1 = (function (){var statearr_33039 = state_33035;
(statearr_33039[(7)] = inst_33016__$1);

return statearr_33039;
})();
if(cljs.core.truth_(inst_33017)){
var statearr_33040_34498 = state_33035__$1;
(statearr_33040_34498[(1)] = (5));

} else {
var statearr_33041_34499 = state_33035__$1;
(statearr_33041_34499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (6))){
var inst_33016 = (state_33035[(7)]);
var inst_33021 = (state_33035[(8)]);
var inst_33021__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33022 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33023 = [inst_33016,inst_33021__$1];
var inst_33024 = (new cljs.core.PersistentVector(null,2,(5),inst_33022,inst_33023,null));
var state_33035__$1 = (function (){var statearr_33042 = state_33035;
(statearr_33042[(8)] = inst_33021__$1);

return statearr_33042;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33035__$1,(8),jobs,inst_33024);
} else {
if((state_val_33036 === (3))){
var inst_33033 = (state_33035[(2)]);
var state_33035__$1 = state_33035;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33035__$1,inst_33033);
} else {
if((state_val_33036 === (2))){
var state_33035__$1 = state_33035;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33035__$1,(4),from);
} else {
if((state_val_33036 === (9))){
var inst_33028 = (state_33035[(2)]);
var state_33035__$1 = (function (){var statearr_33043 = state_33035;
(statearr_33043[(9)] = inst_33028);

return statearr_33043;
})();
var statearr_33044_34500 = state_33035__$1;
(statearr_33044_34500[(2)] = null);

(statearr_33044_34500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (5))){
var inst_33019 = cljs.core.async.close_BANG_(jobs);
var state_33035__$1 = state_33035;
var statearr_33045_34501 = state_33035__$1;
(statearr_33045_34501[(2)] = inst_33019);

(statearr_33045_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33036 === (8))){
var inst_33021 = (state_33035[(8)]);
var inst_33026 = (state_33035[(2)]);
var state_33035__$1 = (function (){var statearr_33046 = state_33035;
(statearr_33046[(10)] = inst_33026);

return statearr_33046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33035__$1,(9),results,inst_33021);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_33047 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33047[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__);

(statearr_33047[(1)] = (1));

return statearr_33047;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1 = (function (state_33035){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33035);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33048){var ex__32743__auto__ = e33048;
var statearr_33049_34504 = state_33035;
(statearr_33049_34504[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33035[(4)]))){
var statearr_33050_34506 = state_33035;
(statearr_33050_34506[(1)] = cljs.core.first((state_33035[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34507 = state_33035;
state_33035 = G__34507;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = function(state_33035){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1.call(this,state_33035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33051 = f__32793__auto__();
(statearr_33051[(6)] = c__32792__auto___34495);

return statearr_33051;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


var c__32792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33089){
var state_val_33090 = (state_33089[(1)]);
if((state_val_33090 === (7))){
var inst_33085 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33091_34508 = state_33089__$1;
(statearr_33091_34508[(2)] = inst_33085);

(statearr_33091_34508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (20))){
var state_33089__$1 = state_33089;
var statearr_33092_34509 = state_33089__$1;
(statearr_33092_34509[(2)] = null);

(statearr_33092_34509[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (1))){
var state_33089__$1 = state_33089;
var statearr_33093_34510 = state_33089__$1;
(statearr_33093_34510[(2)] = null);

(statearr_33093_34510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (4))){
var inst_33054 = (state_33089[(7)]);
var inst_33054__$1 = (state_33089[(2)]);
var inst_33055 = (inst_33054__$1 == null);
var state_33089__$1 = (function (){var statearr_33094 = state_33089;
(statearr_33094[(7)] = inst_33054__$1);

return statearr_33094;
})();
if(cljs.core.truth_(inst_33055)){
var statearr_33095_34511 = state_33089__$1;
(statearr_33095_34511[(1)] = (5));

} else {
var statearr_33096_34512 = state_33089__$1;
(statearr_33096_34512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (15))){
var inst_33067 = (state_33089[(8)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33089__$1,(18),to,inst_33067);
} else {
if((state_val_33090 === (21))){
var inst_33080 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33097_34513 = state_33089__$1;
(statearr_33097_34513[(2)] = inst_33080);

(statearr_33097_34513[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (13))){
var inst_33082 = (state_33089[(2)]);
var state_33089__$1 = (function (){var statearr_33098 = state_33089;
(statearr_33098[(9)] = inst_33082);

return statearr_33098;
})();
var statearr_33099_34514 = state_33089__$1;
(statearr_33099_34514[(2)] = null);

(statearr_33099_34514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (6))){
var inst_33054 = (state_33089[(7)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33089__$1,(11),inst_33054);
} else {
if((state_val_33090 === (17))){
var inst_33075 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
if(cljs.core.truth_(inst_33075)){
var statearr_33100_34515 = state_33089__$1;
(statearr_33100_34515[(1)] = (19));

} else {
var statearr_33101_34516 = state_33089__$1;
(statearr_33101_34516[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (3))){
var inst_33087 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33089__$1,inst_33087);
} else {
if((state_val_33090 === (12))){
var inst_33064 = (state_33089[(10)]);
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33089__$1,(14),inst_33064);
} else {
if((state_val_33090 === (2))){
var state_33089__$1 = state_33089;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33089__$1,(4),results);
} else {
if((state_val_33090 === (19))){
var state_33089__$1 = state_33089;
var statearr_33102_34517 = state_33089__$1;
(statearr_33102_34517[(2)] = null);

(statearr_33102_34517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (11))){
var inst_33064 = (state_33089[(2)]);
var state_33089__$1 = (function (){var statearr_33103 = state_33089;
(statearr_33103[(10)] = inst_33064);

return statearr_33103;
})();
var statearr_33104_34518 = state_33089__$1;
(statearr_33104_34518[(2)] = null);

(statearr_33104_34518[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (9))){
var state_33089__$1 = state_33089;
var statearr_33105_34519 = state_33089__$1;
(statearr_33105_34519[(2)] = null);

(statearr_33105_34519[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (5))){
var state_33089__$1 = state_33089;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33106_34520 = state_33089__$1;
(statearr_33106_34520[(1)] = (8));

} else {
var statearr_33107_34521 = state_33089__$1;
(statearr_33107_34521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (14))){
var inst_33067 = (state_33089[(8)]);
var inst_33067__$1 = (state_33089[(2)]);
var inst_33068 = (inst_33067__$1 == null);
var inst_33069 = cljs.core.not(inst_33068);
var state_33089__$1 = (function (){var statearr_33108 = state_33089;
(statearr_33108[(8)] = inst_33067__$1);

return statearr_33108;
})();
if(inst_33069){
var statearr_33109_34522 = state_33089__$1;
(statearr_33109_34522[(1)] = (15));

} else {
var statearr_33110_34523 = state_33089__$1;
(statearr_33110_34523[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (16))){
var state_33089__$1 = state_33089;
var statearr_33111_34524 = state_33089__$1;
(statearr_33111_34524[(2)] = false);

(statearr_33111_34524[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (10))){
var inst_33061 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33112_34525 = state_33089__$1;
(statearr_33112_34525[(2)] = inst_33061);

(statearr_33112_34525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (18))){
var inst_33072 = (state_33089[(2)]);
var state_33089__$1 = state_33089;
var statearr_33113_34526 = state_33089__$1;
(statearr_33113_34526[(2)] = inst_33072);

(statearr_33113_34526[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33090 === (8))){
var inst_33058 = cljs.core.async.close_BANG_(to);
var state_33089__$1 = state_33089;
var statearr_33114_34527 = state_33089__$1;
(statearr_33114_34527[(2)] = inst_33058);

(statearr_33114_34527[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_33115 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33115[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__);

(statearr_33115[(1)] = (1));

return statearr_33115;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1 = (function (state_33089){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33089);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33116){var ex__32743__auto__ = e33116;
var statearr_33117_34528 = state_33089;
(statearr_33117_34528[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33089[(4)]))){
var statearr_33118_34529 = state_33089;
(statearr_33118_34529[(1)] = cljs.core.first((state_33089[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34530 = state_33089;
state_33089 = G__34530;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__ = function(state_33089){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1.call(this,state_33089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33119 = f__32793__auto__();
(statearr_33119[(6)] = c__32792__auto__);

return statearr_33119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

return c__32792__auto__;
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
var G__33121 = arguments.length;
switch (G__33121) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__33123 = arguments.length;
switch (G__33123) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__33125 = arguments.length;
switch (G__33125) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__32792__auto___34541 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33151){
var state_val_33152 = (state_33151[(1)]);
if((state_val_33152 === (7))){
var inst_33147 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33153_34542 = state_33151__$1;
(statearr_33153_34542[(2)] = inst_33147);

(statearr_33153_34542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (1))){
var state_33151__$1 = state_33151;
var statearr_33154_34543 = state_33151__$1;
(statearr_33154_34543[(2)] = null);

(statearr_33154_34543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (4))){
var inst_33128 = (state_33151[(7)]);
var inst_33128__$1 = (state_33151[(2)]);
var inst_33129 = (inst_33128__$1 == null);
var state_33151__$1 = (function (){var statearr_33155 = state_33151;
(statearr_33155[(7)] = inst_33128__$1);

return statearr_33155;
})();
if(cljs.core.truth_(inst_33129)){
var statearr_33156_34544 = state_33151__$1;
(statearr_33156_34544[(1)] = (5));

} else {
var statearr_33157_34545 = state_33151__$1;
(statearr_33157_34545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (13))){
var state_33151__$1 = state_33151;
var statearr_33158_34546 = state_33151__$1;
(statearr_33158_34546[(2)] = null);

(statearr_33158_34546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (6))){
var inst_33128 = (state_33151[(7)]);
var inst_33134 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33128) : p.call(null,inst_33128));
var state_33151__$1 = state_33151;
if(cljs.core.truth_(inst_33134)){
var statearr_33159_34547 = state_33151__$1;
(statearr_33159_34547[(1)] = (9));

} else {
var statearr_33160_34548 = state_33151__$1;
(statearr_33160_34548[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (3))){
var inst_33149 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33151__$1,inst_33149);
} else {
if((state_val_33152 === (12))){
var state_33151__$1 = state_33151;
var statearr_33161_34549 = state_33151__$1;
(statearr_33161_34549[(2)] = null);

(statearr_33161_34549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (2))){
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33151__$1,(4),ch);
} else {
if((state_val_33152 === (11))){
var inst_33128 = (state_33151[(7)]);
var inst_33138 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33151__$1,(8),inst_33138,inst_33128);
} else {
if((state_val_33152 === (9))){
var state_33151__$1 = state_33151;
var statearr_33162_34550 = state_33151__$1;
(statearr_33162_34550[(2)] = tc);

(statearr_33162_34550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (5))){
var inst_33131 = cljs.core.async.close_BANG_(tc);
var inst_33132 = cljs.core.async.close_BANG_(fc);
var state_33151__$1 = (function (){var statearr_33163 = state_33151;
(statearr_33163[(8)] = inst_33131);

return statearr_33163;
})();
var statearr_33164_34551 = state_33151__$1;
(statearr_33164_34551[(2)] = inst_33132);

(statearr_33164_34551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (14))){
var inst_33145 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
var statearr_33165_34552 = state_33151__$1;
(statearr_33165_34552[(2)] = inst_33145);

(statearr_33165_34552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (10))){
var state_33151__$1 = state_33151;
var statearr_33166_34553 = state_33151__$1;
(statearr_33166_34553[(2)] = fc);

(statearr_33166_34553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33152 === (8))){
var inst_33140 = (state_33151[(2)]);
var state_33151__$1 = state_33151;
if(cljs.core.truth_(inst_33140)){
var statearr_33167_34554 = state_33151__$1;
(statearr_33167_34554[(1)] = (12));

} else {
var statearr_33168_34555 = state_33151__$1;
(statearr_33168_34555[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33169 = [null,null,null,null,null,null,null,null,null];
(statearr_33169[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33169[(1)] = (1));

return statearr_33169;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33151){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33151);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33170){var ex__32743__auto__ = e33170;
var statearr_33171_34556 = state_33151;
(statearr_33171_34556[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33151[(4)]))){
var statearr_33172_34557 = state_33151;
(statearr_33172_34557[(1)] = cljs.core.first((state_33151[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34558 = state_33151;
state_33151 = G__34558;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33151){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33173 = f__32793__auto__();
(statearr_33173[(6)] = c__32792__auto___34541);

return statearr_33173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33195){
var state_val_33196 = (state_33195[(1)]);
if((state_val_33196 === (7))){
var inst_33191 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
var statearr_33197_34559 = state_33195__$1;
(statearr_33197_34559[(2)] = inst_33191);

(statearr_33197_34559[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (1))){
var inst_33174 = init;
var inst_33175 = inst_33174;
var state_33195__$1 = (function (){var statearr_33198 = state_33195;
(statearr_33198[(7)] = inst_33175);

return statearr_33198;
})();
var statearr_33199_34560 = state_33195__$1;
(statearr_33199_34560[(2)] = null);

(statearr_33199_34560[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (4))){
var inst_33178 = (state_33195[(8)]);
var inst_33178__$1 = (state_33195[(2)]);
var inst_33179 = (inst_33178__$1 == null);
var state_33195__$1 = (function (){var statearr_33200 = state_33195;
(statearr_33200[(8)] = inst_33178__$1);

return statearr_33200;
})();
if(cljs.core.truth_(inst_33179)){
var statearr_33201_34561 = state_33195__$1;
(statearr_33201_34561[(1)] = (5));

} else {
var statearr_33202_34562 = state_33195__$1;
(statearr_33202_34562[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (6))){
var inst_33178 = (state_33195[(8)]);
var inst_33182 = (state_33195[(9)]);
var inst_33175 = (state_33195[(7)]);
var inst_33182__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33175,inst_33178) : f.call(null,inst_33175,inst_33178));
var inst_33183 = cljs.core.reduced_QMARK_(inst_33182__$1);
var state_33195__$1 = (function (){var statearr_33203 = state_33195;
(statearr_33203[(9)] = inst_33182__$1);

return statearr_33203;
})();
if(inst_33183){
var statearr_33204_34563 = state_33195__$1;
(statearr_33204_34563[(1)] = (8));

} else {
var statearr_33205_34564 = state_33195__$1;
(statearr_33205_34564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (3))){
var inst_33193 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33195__$1,inst_33193);
} else {
if((state_val_33196 === (2))){
var state_33195__$1 = state_33195;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33195__$1,(4),ch);
} else {
if((state_val_33196 === (9))){
var inst_33182 = (state_33195[(9)]);
var inst_33175 = inst_33182;
var state_33195__$1 = (function (){var statearr_33206 = state_33195;
(statearr_33206[(7)] = inst_33175);

return statearr_33206;
})();
var statearr_33207_34566 = state_33195__$1;
(statearr_33207_34566[(2)] = null);

(statearr_33207_34566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (5))){
var inst_33175 = (state_33195[(7)]);
var state_33195__$1 = state_33195;
var statearr_33208_34567 = state_33195__$1;
(statearr_33208_34567[(2)] = inst_33175);

(statearr_33208_34567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (10))){
var inst_33189 = (state_33195[(2)]);
var state_33195__$1 = state_33195;
var statearr_33209_34568 = state_33195__$1;
(statearr_33209_34568[(2)] = inst_33189);

(statearr_33209_34568[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33196 === (8))){
var inst_33182 = (state_33195[(9)]);
var inst_33185 = cljs.core.deref(inst_33182);
var state_33195__$1 = state_33195;
var statearr_33210_34569 = state_33195__$1;
(statearr_33210_34569[(2)] = inst_33185);

(statearr_33210_34569[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32740__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32740__auto____0 = (function (){
var statearr_33211 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33211[(0)] = cljs$core$async$reduce_$_state_machine__32740__auto__);

(statearr_33211[(1)] = (1));

return statearr_33211;
});
var cljs$core$async$reduce_$_state_machine__32740__auto____1 = (function (state_33195){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33195);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33212){var ex__32743__auto__ = e33212;
var statearr_33213_34570 = state_33195;
(statearr_33213_34570[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33195[(4)]))){
var statearr_33214_34571 = state_33195;
(statearr_33214_34571[(1)] = cljs.core.first((state_33195[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34573 = state_33195;
state_33195 = G__34573;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32740__auto__ = function(state_33195){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32740__auto____1.call(this,state_33195);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32740__auto____0;
cljs$core$async$reduce_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32740__auto____1;
return cljs$core$async$reduce_$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33215 = f__32793__auto__();
(statearr_33215[(6)] = c__32792__auto__);

return statearr_33215;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

return c__32792__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33221){
var state_val_33222 = (state_33221[(1)]);
if((state_val_33222 === (1))){
var inst_33216 = cljs.core.async.reduce(f__$1,init,ch);
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33221__$1,(2),inst_33216);
} else {
if((state_val_33222 === (2))){
var inst_33218 = (state_33221[(2)]);
var inst_33219 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33218) : f__$1.call(null,inst_33218));
var state_33221__$1 = state_33221;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33221__$1,inst_33219);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32740__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32740__auto____0 = (function (){
var statearr_33223 = [null,null,null,null,null,null,null];
(statearr_33223[(0)] = cljs$core$async$transduce_$_state_machine__32740__auto__);

(statearr_33223[(1)] = (1));

return statearr_33223;
});
var cljs$core$async$transduce_$_state_machine__32740__auto____1 = (function (state_33221){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33221);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33224){var ex__32743__auto__ = e33224;
var statearr_33225_34575 = state_33221;
(statearr_33225_34575[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33221[(4)]))){
var statearr_33226_34583 = state_33221;
(statearr_33226_34583[(1)] = cljs.core.first((state_33221[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34584 = state_33221;
state_33221 = G__34584;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32740__auto__ = function(state_33221){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32740__auto____1.call(this,state_33221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32740__auto____0;
cljs$core$async$transduce_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32740__auto____1;
return cljs$core$async$transduce_$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33227 = f__32793__auto__();
(statearr_33227[(6)] = c__32792__auto__);

return statearr_33227;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

return c__32792__auto__;
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
var G__33229 = arguments.length;
switch (G__33229) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33254){
var state_val_33255 = (state_33254[(1)]);
if((state_val_33255 === (7))){
var inst_33236 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
var statearr_33256_34586 = state_33254__$1;
(statearr_33256_34586[(2)] = inst_33236);

(statearr_33256_34586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (1))){
var inst_33230 = cljs.core.seq(coll);
var inst_33231 = inst_33230;
var state_33254__$1 = (function (){var statearr_33257 = state_33254;
(statearr_33257[(7)] = inst_33231);

return statearr_33257;
})();
var statearr_33258_34587 = state_33254__$1;
(statearr_33258_34587[(2)] = null);

(statearr_33258_34587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (4))){
var inst_33231 = (state_33254[(7)]);
var inst_33234 = cljs.core.first(inst_33231);
var state_33254__$1 = state_33254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33254__$1,(7),ch,inst_33234);
} else {
if((state_val_33255 === (13))){
var inst_33248 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
var statearr_33259_34588 = state_33254__$1;
(statearr_33259_34588[(2)] = inst_33248);

(statearr_33259_34588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (6))){
var inst_33239 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
if(cljs.core.truth_(inst_33239)){
var statearr_33260_34589 = state_33254__$1;
(statearr_33260_34589[(1)] = (8));

} else {
var statearr_33261_34590 = state_33254__$1;
(statearr_33261_34590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (3))){
var inst_33252 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33254__$1,inst_33252);
} else {
if((state_val_33255 === (12))){
var state_33254__$1 = state_33254;
var statearr_33262_34591 = state_33254__$1;
(statearr_33262_34591[(2)] = null);

(statearr_33262_34591[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (2))){
var inst_33231 = (state_33254[(7)]);
var state_33254__$1 = state_33254;
if(cljs.core.truth_(inst_33231)){
var statearr_33263_34592 = state_33254__$1;
(statearr_33263_34592[(1)] = (4));

} else {
var statearr_33264_34593 = state_33254__$1;
(statearr_33264_34593[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (11))){
var inst_33245 = cljs.core.async.close_BANG_(ch);
var state_33254__$1 = state_33254;
var statearr_33265_34594 = state_33254__$1;
(statearr_33265_34594[(2)] = inst_33245);

(statearr_33265_34594[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (9))){
var state_33254__$1 = state_33254;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33266_34595 = state_33254__$1;
(statearr_33266_34595[(1)] = (11));

} else {
var statearr_33267_34596 = state_33254__$1;
(statearr_33267_34596[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (5))){
var inst_33231 = (state_33254[(7)]);
var state_33254__$1 = state_33254;
var statearr_33268_34597 = state_33254__$1;
(statearr_33268_34597[(2)] = inst_33231);

(statearr_33268_34597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (10))){
var inst_33250 = (state_33254[(2)]);
var state_33254__$1 = state_33254;
var statearr_33269_34598 = state_33254__$1;
(statearr_33269_34598[(2)] = inst_33250);

(statearr_33269_34598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33255 === (8))){
var inst_33231 = (state_33254[(7)]);
var inst_33241 = cljs.core.next(inst_33231);
var inst_33231__$1 = inst_33241;
var state_33254__$1 = (function (){var statearr_33270 = state_33254;
(statearr_33270[(7)] = inst_33231__$1);

return statearr_33270;
})();
var statearr_33271_34599 = state_33254__$1;
(statearr_33271_34599[(2)] = null);

(statearr_33271_34599[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33272 = [null,null,null,null,null,null,null,null];
(statearr_33272[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33272[(1)] = (1));

return statearr_33272;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33254){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33254);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33273){var ex__32743__auto__ = e33273;
var statearr_33274_34600 = state_33254;
(statearr_33274_34600[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33254[(4)]))){
var statearr_33275_34601 = state_33254;
(statearr_33275_34601[(1)] = cljs.core.first((state_33254[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_33254;
state_33254 = G__34602;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33276 = f__32793__auto__();
(statearr_33276[(6)] = c__32792__auto__);

return statearr_33276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

return c__32792__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34603 = (function (_){
var x__4422__auto__ = (((_ == null))?null:_);
var m__4423__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4423__auto__.call(null,_));
} else {
var m__4420__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4420__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34603(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34611 = (function (m,ch,close_QMARK_){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4423__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4420__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34611(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34615 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34615(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34619 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34619(m);
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33277 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33277 = (function (ch,cs,meta33278){
this.ch = ch;
this.cs = cs;
this.meta33278 = meta33278;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33279,meta33278__$1){
var self__ = this;
var _33279__$1 = this;
return (new cljs.core.async.t_cljs$core$async33277(self__.ch,self__.cs,meta33278__$1));
}));

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33279){
var self__ = this;
var _33279__$1 = this;
return self__.meta33278;
}));

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33277.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33277.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33278","meta33278",1519700734,null)], null);
}));

(cljs.core.async.t_cljs$core$async33277.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33277.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33277");

(cljs.core.async.t_cljs$core$async33277.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33277");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33277.
 */
cljs.core.async.__GT_t_cljs$core$async33277 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33277(ch__$1,cs__$1,meta33278){
return (new cljs.core.async.t_cljs$core$async33277(ch__$1,cs__$1,meta33278));
});

}

return (new cljs.core.async.t_cljs$core$async33277(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__32792__auto___34639 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33412){
var state_val_33413 = (state_33412[(1)]);
if((state_val_33413 === (7))){
var inst_33408 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33414_34641 = state_33412__$1;
(statearr_33414_34641[(2)] = inst_33408);

(statearr_33414_34641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (20))){
var inst_33313 = (state_33412[(7)]);
var inst_33325 = cljs.core.first(inst_33313);
var inst_33326 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33325,(0),null);
var inst_33327 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33325,(1),null);
var state_33412__$1 = (function (){var statearr_33415 = state_33412;
(statearr_33415[(8)] = inst_33326);

return statearr_33415;
})();
if(cljs.core.truth_(inst_33327)){
var statearr_33416_34642 = state_33412__$1;
(statearr_33416_34642[(1)] = (22));

} else {
var statearr_33417_34643 = state_33412__$1;
(statearr_33417_34643[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (27))){
var inst_33282 = (state_33412[(9)]);
var inst_33362 = (state_33412[(10)]);
var inst_33357 = (state_33412[(11)]);
var inst_33355 = (state_33412[(12)]);
var inst_33362__$1 = cljs.core._nth(inst_33355,inst_33357);
var inst_33363 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33362__$1,inst_33282,done);
var state_33412__$1 = (function (){var statearr_33418 = state_33412;
(statearr_33418[(10)] = inst_33362__$1);

return statearr_33418;
})();
if(cljs.core.truth_(inst_33363)){
var statearr_33419_34644 = state_33412__$1;
(statearr_33419_34644[(1)] = (30));

} else {
var statearr_33420_34645 = state_33412__$1;
(statearr_33420_34645[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (1))){
var state_33412__$1 = state_33412;
var statearr_33421_34646 = state_33412__$1;
(statearr_33421_34646[(2)] = null);

(statearr_33421_34646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (24))){
var inst_33313 = (state_33412[(7)]);
var inst_33332 = (state_33412[(2)]);
var inst_33333 = cljs.core.next(inst_33313);
var inst_33291 = inst_33333;
var inst_33292 = null;
var inst_33293 = (0);
var inst_33294 = (0);
var state_33412__$1 = (function (){var statearr_33422 = state_33412;
(statearr_33422[(13)] = inst_33292);

(statearr_33422[(14)] = inst_33291);

(statearr_33422[(15)] = inst_33332);

(statearr_33422[(16)] = inst_33294);

(statearr_33422[(17)] = inst_33293);

return statearr_33422;
})();
var statearr_33423_34647 = state_33412__$1;
(statearr_33423_34647[(2)] = null);

(statearr_33423_34647[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (39))){
var state_33412__$1 = state_33412;
var statearr_33427_34648 = state_33412__$1;
(statearr_33427_34648[(2)] = null);

(statearr_33427_34648[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (4))){
var inst_33282 = (state_33412[(9)]);
var inst_33282__$1 = (state_33412[(2)]);
var inst_33283 = (inst_33282__$1 == null);
var state_33412__$1 = (function (){var statearr_33428 = state_33412;
(statearr_33428[(9)] = inst_33282__$1);

return statearr_33428;
})();
if(cljs.core.truth_(inst_33283)){
var statearr_33429_34649 = state_33412__$1;
(statearr_33429_34649[(1)] = (5));

} else {
var statearr_33430_34650 = state_33412__$1;
(statearr_33430_34650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (15))){
var inst_33292 = (state_33412[(13)]);
var inst_33291 = (state_33412[(14)]);
var inst_33294 = (state_33412[(16)]);
var inst_33293 = (state_33412[(17)]);
var inst_33309 = (state_33412[(2)]);
var inst_33310 = (inst_33294 + (1));
var tmp33424 = inst_33292;
var tmp33425 = inst_33291;
var tmp33426 = inst_33293;
var inst_33291__$1 = tmp33425;
var inst_33292__$1 = tmp33424;
var inst_33293__$1 = tmp33426;
var inst_33294__$1 = inst_33310;
var state_33412__$1 = (function (){var statearr_33431 = state_33412;
(statearr_33431[(13)] = inst_33292__$1);

(statearr_33431[(18)] = inst_33309);

(statearr_33431[(14)] = inst_33291__$1);

(statearr_33431[(16)] = inst_33294__$1);

(statearr_33431[(17)] = inst_33293__$1);

return statearr_33431;
})();
var statearr_33432_34651 = state_33412__$1;
(statearr_33432_34651[(2)] = null);

(statearr_33432_34651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (21))){
var inst_33336 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33436_34652 = state_33412__$1;
(statearr_33436_34652[(2)] = inst_33336);

(statearr_33436_34652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (31))){
var inst_33362 = (state_33412[(10)]);
var inst_33366 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33362);
var state_33412__$1 = state_33412;
var statearr_33437_34653 = state_33412__$1;
(statearr_33437_34653[(2)] = inst_33366);

(statearr_33437_34653[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (32))){
var inst_33356 = (state_33412[(19)]);
var inst_33354 = (state_33412[(20)]);
var inst_33357 = (state_33412[(11)]);
var inst_33355 = (state_33412[(12)]);
var inst_33368 = (state_33412[(2)]);
var inst_33369 = (inst_33357 + (1));
var tmp33433 = inst_33356;
var tmp33434 = inst_33354;
var tmp33435 = inst_33355;
var inst_33354__$1 = tmp33434;
var inst_33355__$1 = tmp33435;
var inst_33356__$1 = tmp33433;
var inst_33357__$1 = inst_33369;
var state_33412__$1 = (function (){var statearr_33438 = state_33412;
(statearr_33438[(19)] = inst_33356__$1);

(statearr_33438[(21)] = inst_33368);

(statearr_33438[(20)] = inst_33354__$1);

(statearr_33438[(11)] = inst_33357__$1);

(statearr_33438[(12)] = inst_33355__$1);

return statearr_33438;
})();
var statearr_33439_34654 = state_33412__$1;
(statearr_33439_34654[(2)] = null);

(statearr_33439_34654[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (40))){
var inst_33381 = (state_33412[(22)]);
var inst_33385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33381);
var state_33412__$1 = state_33412;
var statearr_33440_34655 = state_33412__$1;
(statearr_33440_34655[(2)] = inst_33385);

(statearr_33440_34655[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (33))){
var inst_33372 = (state_33412[(23)]);
var inst_33374 = cljs.core.chunked_seq_QMARK_(inst_33372);
var state_33412__$1 = state_33412;
if(inst_33374){
var statearr_33441_34656 = state_33412__$1;
(statearr_33441_34656[(1)] = (36));

} else {
var statearr_33442_34657 = state_33412__$1;
(statearr_33442_34657[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (13))){
var inst_33303 = (state_33412[(24)]);
var inst_33306 = cljs.core.async.close_BANG_(inst_33303);
var state_33412__$1 = state_33412;
var statearr_33443_34658 = state_33412__$1;
(statearr_33443_34658[(2)] = inst_33306);

(statearr_33443_34658[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (22))){
var inst_33326 = (state_33412[(8)]);
var inst_33329 = cljs.core.async.close_BANG_(inst_33326);
var state_33412__$1 = state_33412;
var statearr_33444_34659 = state_33412__$1;
(statearr_33444_34659[(2)] = inst_33329);

(statearr_33444_34659[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (36))){
var inst_33372 = (state_33412[(23)]);
var inst_33376 = cljs.core.chunk_first(inst_33372);
var inst_33377 = cljs.core.chunk_rest(inst_33372);
var inst_33378 = cljs.core.count(inst_33376);
var inst_33354 = inst_33377;
var inst_33355 = inst_33376;
var inst_33356 = inst_33378;
var inst_33357 = (0);
var state_33412__$1 = (function (){var statearr_33445 = state_33412;
(statearr_33445[(19)] = inst_33356);

(statearr_33445[(20)] = inst_33354);

(statearr_33445[(11)] = inst_33357);

(statearr_33445[(12)] = inst_33355);

return statearr_33445;
})();
var statearr_33446_34660 = state_33412__$1;
(statearr_33446_34660[(2)] = null);

(statearr_33446_34660[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (41))){
var inst_33372 = (state_33412[(23)]);
var inst_33387 = (state_33412[(2)]);
var inst_33388 = cljs.core.next(inst_33372);
var inst_33354 = inst_33388;
var inst_33355 = null;
var inst_33356 = (0);
var inst_33357 = (0);
var state_33412__$1 = (function (){var statearr_33447 = state_33412;
(statearr_33447[(19)] = inst_33356);

(statearr_33447[(20)] = inst_33354);

(statearr_33447[(25)] = inst_33387);

(statearr_33447[(11)] = inst_33357);

(statearr_33447[(12)] = inst_33355);

return statearr_33447;
})();
var statearr_33448_34661 = state_33412__$1;
(statearr_33448_34661[(2)] = null);

(statearr_33448_34661[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (43))){
var state_33412__$1 = state_33412;
var statearr_33449_34662 = state_33412__$1;
(statearr_33449_34662[(2)] = null);

(statearr_33449_34662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (29))){
var inst_33396 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33450_34663 = state_33412__$1;
(statearr_33450_34663[(2)] = inst_33396);

(statearr_33450_34663[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (44))){
var inst_33405 = (state_33412[(2)]);
var state_33412__$1 = (function (){var statearr_33451 = state_33412;
(statearr_33451[(26)] = inst_33405);

return statearr_33451;
})();
var statearr_33452_34664 = state_33412__$1;
(statearr_33452_34664[(2)] = null);

(statearr_33452_34664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (6))){
var inst_33346 = (state_33412[(27)]);
var inst_33345 = cljs.core.deref(cs);
var inst_33346__$1 = cljs.core.keys(inst_33345);
var inst_33347 = cljs.core.count(inst_33346__$1);
var inst_33348 = cljs.core.reset_BANG_(dctr,inst_33347);
var inst_33353 = cljs.core.seq(inst_33346__$1);
var inst_33354 = inst_33353;
var inst_33355 = null;
var inst_33356 = (0);
var inst_33357 = (0);
var state_33412__$1 = (function (){var statearr_33453 = state_33412;
(statearr_33453[(19)] = inst_33356);

(statearr_33453[(27)] = inst_33346__$1);

(statearr_33453[(20)] = inst_33354);

(statearr_33453[(11)] = inst_33357);

(statearr_33453[(12)] = inst_33355);

(statearr_33453[(28)] = inst_33348);

return statearr_33453;
})();
var statearr_33454_34665 = state_33412__$1;
(statearr_33454_34665[(2)] = null);

(statearr_33454_34665[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (28))){
var inst_33372 = (state_33412[(23)]);
var inst_33354 = (state_33412[(20)]);
var inst_33372__$1 = cljs.core.seq(inst_33354);
var state_33412__$1 = (function (){var statearr_33455 = state_33412;
(statearr_33455[(23)] = inst_33372__$1);

return statearr_33455;
})();
if(inst_33372__$1){
var statearr_33456_34666 = state_33412__$1;
(statearr_33456_34666[(1)] = (33));

} else {
var statearr_33457_34667 = state_33412__$1;
(statearr_33457_34667[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (25))){
var inst_33356 = (state_33412[(19)]);
var inst_33357 = (state_33412[(11)]);
var inst_33359 = (inst_33357 < inst_33356);
var inst_33360 = inst_33359;
var state_33412__$1 = state_33412;
if(cljs.core.truth_(inst_33360)){
var statearr_33458_34668 = state_33412__$1;
(statearr_33458_34668[(1)] = (27));

} else {
var statearr_33459_34669 = state_33412__$1;
(statearr_33459_34669[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (34))){
var state_33412__$1 = state_33412;
var statearr_33460_34670 = state_33412__$1;
(statearr_33460_34670[(2)] = null);

(statearr_33460_34670[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (17))){
var state_33412__$1 = state_33412;
var statearr_33461_34671 = state_33412__$1;
(statearr_33461_34671[(2)] = null);

(statearr_33461_34671[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (3))){
var inst_33410 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33412__$1,inst_33410);
} else {
if((state_val_33413 === (12))){
var inst_33341 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33462_34675 = state_33412__$1;
(statearr_33462_34675[(2)] = inst_33341);

(statearr_33462_34675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (2))){
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33412__$1,(4),ch);
} else {
if((state_val_33413 === (23))){
var state_33412__$1 = state_33412;
var statearr_33463_34676 = state_33412__$1;
(statearr_33463_34676[(2)] = null);

(statearr_33463_34676[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (35))){
var inst_33394 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33464_34680 = state_33412__$1;
(statearr_33464_34680[(2)] = inst_33394);

(statearr_33464_34680[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (19))){
var inst_33313 = (state_33412[(7)]);
var inst_33317 = cljs.core.chunk_first(inst_33313);
var inst_33318 = cljs.core.chunk_rest(inst_33313);
var inst_33319 = cljs.core.count(inst_33317);
var inst_33291 = inst_33318;
var inst_33292 = inst_33317;
var inst_33293 = inst_33319;
var inst_33294 = (0);
var state_33412__$1 = (function (){var statearr_33465 = state_33412;
(statearr_33465[(13)] = inst_33292);

(statearr_33465[(14)] = inst_33291);

(statearr_33465[(16)] = inst_33294);

(statearr_33465[(17)] = inst_33293);

return statearr_33465;
})();
var statearr_33466_34682 = state_33412__$1;
(statearr_33466_34682[(2)] = null);

(statearr_33466_34682[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (11))){
var inst_33313 = (state_33412[(7)]);
var inst_33291 = (state_33412[(14)]);
var inst_33313__$1 = cljs.core.seq(inst_33291);
var state_33412__$1 = (function (){var statearr_33467 = state_33412;
(statearr_33467[(7)] = inst_33313__$1);

return statearr_33467;
})();
if(inst_33313__$1){
var statearr_33468_34684 = state_33412__$1;
(statearr_33468_34684[(1)] = (16));

} else {
var statearr_33469_34686 = state_33412__$1;
(statearr_33469_34686[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (9))){
var inst_33343 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33470_34687 = state_33412__$1;
(statearr_33470_34687[(2)] = inst_33343);

(statearr_33470_34687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (5))){
var inst_33289 = cljs.core.deref(cs);
var inst_33290 = cljs.core.seq(inst_33289);
var inst_33291 = inst_33290;
var inst_33292 = null;
var inst_33293 = (0);
var inst_33294 = (0);
var state_33412__$1 = (function (){var statearr_33471 = state_33412;
(statearr_33471[(13)] = inst_33292);

(statearr_33471[(14)] = inst_33291);

(statearr_33471[(16)] = inst_33294);

(statearr_33471[(17)] = inst_33293);

return statearr_33471;
})();
var statearr_33472_34688 = state_33412__$1;
(statearr_33472_34688[(2)] = null);

(statearr_33472_34688[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (14))){
var state_33412__$1 = state_33412;
var statearr_33473_34689 = state_33412__$1;
(statearr_33473_34689[(2)] = null);

(statearr_33473_34689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (45))){
var inst_33402 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33474_34690 = state_33412__$1;
(statearr_33474_34690[(2)] = inst_33402);

(statearr_33474_34690[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (26))){
var inst_33346 = (state_33412[(27)]);
var inst_33398 = (state_33412[(2)]);
var inst_33399 = cljs.core.seq(inst_33346);
var state_33412__$1 = (function (){var statearr_33475 = state_33412;
(statearr_33475[(29)] = inst_33398);

return statearr_33475;
})();
if(inst_33399){
var statearr_33476_34691 = state_33412__$1;
(statearr_33476_34691[(1)] = (42));

} else {
var statearr_33477_34692 = state_33412__$1;
(statearr_33477_34692[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (16))){
var inst_33313 = (state_33412[(7)]);
var inst_33315 = cljs.core.chunked_seq_QMARK_(inst_33313);
var state_33412__$1 = state_33412;
if(inst_33315){
var statearr_33478_34693 = state_33412__$1;
(statearr_33478_34693[(1)] = (19));

} else {
var statearr_33479_34694 = state_33412__$1;
(statearr_33479_34694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (38))){
var inst_33391 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33480_34696 = state_33412__$1;
(statearr_33480_34696[(2)] = inst_33391);

(statearr_33480_34696[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (30))){
var state_33412__$1 = state_33412;
var statearr_33481_34700 = state_33412__$1;
(statearr_33481_34700[(2)] = null);

(statearr_33481_34700[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (10))){
var inst_33292 = (state_33412[(13)]);
var inst_33294 = (state_33412[(16)]);
var inst_33302 = cljs.core._nth(inst_33292,inst_33294);
var inst_33303 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33302,(0),null);
var inst_33304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33302,(1),null);
var state_33412__$1 = (function (){var statearr_33482 = state_33412;
(statearr_33482[(24)] = inst_33303);

return statearr_33482;
})();
if(cljs.core.truth_(inst_33304)){
var statearr_33483_34703 = state_33412__$1;
(statearr_33483_34703[(1)] = (13));

} else {
var statearr_33484_34704 = state_33412__$1;
(statearr_33484_34704[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (18))){
var inst_33339 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33485_34707 = state_33412__$1;
(statearr_33485_34707[(2)] = inst_33339);

(statearr_33485_34707[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (42))){
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33412__$1,(45),dchan);
} else {
if((state_val_33413 === (37))){
var inst_33282 = (state_33412[(9)]);
var inst_33372 = (state_33412[(23)]);
var inst_33381 = (state_33412[(22)]);
var inst_33381__$1 = cljs.core.first(inst_33372);
var inst_33382 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33381__$1,inst_33282,done);
var state_33412__$1 = (function (){var statearr_33486 = state_33412;
(statearr_33486[(22)] = inst_33381__$1);

return statearr_33486;
})();
if(cljs.core.truth_(inst_33382)){
var statearr_33487_34711 = state_33412__$1;
(statearr_33487_34711[(1)] = (39));

} else {
var statearr_33488_34712 = state_33412__$1;
(statearr_33488_34712[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (8))){
var inst_33294 = (state_33412[(16)]);
var inst_33293 = (state_33412[(17)]);
var inst_33296 = (inst_33294 < inst_33293);
var inst_33297 = inst_33296;
var state_33412__$1 = state_33412;
if(cljs.core.truth_(inst_33297)){
var statearr_33489_34717 = state_33412__$1;
(statearr_33489_34717[(1)] = (10));

} else {
var statearr_33490_34718 = state_33412__$1;
(statearr_33490_34718[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__32740__auto__ = null;
var cljs$core$async$mult_$_state_machine__32740__auto____0 = (function (){
var statearr_33491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33491[(0)] = cljs$core$async$mult_$_state_machine__32740__auto__);

(statearr_33491[(1)] = (1));

return statearr_33491;
});
var cljs$core$async$mult_$_state_machine__32740__auto____1 = (function (state_33412){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33412);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33492){var ex__32743__auto__ = e33492;
var statearr_33493_34725 = state_33412;
(statearr_33493_34725[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33412[(4)]))){
var statearr_33494_34726 = state_33412;
(statearr_33494_34726[(1)] = cljs.core.first((state_33412[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34727 = state_33412;
state_33412 = G__34727;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32740__auto__ = function(state_33412){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32740__auto____1.call(this,state_33412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32740__auto____0;
cljs$core$async$mult_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32740__auto____1;
return cljs$core$async$mult_$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33495 = f__32793__auto__();
(statearr_33495[(6)] = c__32792__auto___34639);

return statearr_33495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33497 = arguments.length;
switch (G__33497) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34729 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34729(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34730 = (function (m,ch){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4423__auto__.call(null,m,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4420__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34730(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34737 = (function (m){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4423__auto__.call(null,m));
} else {
var m__4420__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4420__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34737(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34744 = (function (m,state_map){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4423__auto__.call(null,m,state_map));
} else {
var m__4420__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4420__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34744(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34745 = (function (m,mode){
var x__4422__auto__ = (((m == null))?null:m);
var m__4423__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4423__auto__.call(null,m,mode));
} else {
var m__4420__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4420__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34745(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34746 = arguments.length;
var i__4731__auto___34747 = (0);
while(true){
if((i__4731__auto___34747 < len__4730__auto___34746)){
args__4736__auto__.push((arguments[i__4731__auto___34747]));

var G__34748 = (i__4731__auto___34747 + (1));
i__4731__auto___34747 = G__34748;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33502){
var map__33503 = p__33502;
var map__33503__$1 = (((((!((map__33503 == null))))?(((((map__33503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33503):map__33503);
var opts = map__33503__$1;
var statearr_33505_34749 = state;
(statearr_33505_34749[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33506_34756 = state;
(statearr_33506_34756[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33507_34757 = state;
(statearr_33507_34757[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33498){
var G__33499 = cljs.core.first(seq33498);
var seq33498__$1 = cljs.core.next(seq33498);
var G__33500 = cljs.core.first(seq33498__$1);
var seq33498__$2 = cljs.core.next(seq33498__$1);
var G__33501 = cljs.core.first(seq33498__$2);
var seq33498__$3 = cljs.core.next(seq33498__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33499,G__33500,G__33501,seq33498__$3);
}));

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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33508 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33509){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33509 = meta33509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33510,meta33509__$1){
var self__ = this;
var _33510__$1 = this;
return (new cljs.core.async.t_cljs$core$async33508(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33509__$1));
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33510){
var self__ = this;
var _33510__$1 = this;
return self__.meta33509;
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33508.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33509","meta33509",81264563,null)], null);
}));

(cljs.core.async.t_cljs$core$async33508.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33508");

(cljs.core.async.t_cljs$core$async33508.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33508");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33508.
 */
cljs.core.async.__GT_t_cljs$core$async33508 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33509){
return (new cljs.core.async.t_cljs$core$async33508(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33509));
});

}

return (new cljs.core.async.t_cljs$core$async33508(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32792__auto___34763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33612){
var state_val_33613 = (state_33612[(1)]);
if((state_val_33613 === (7))){
var inst_33527 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33614_34764 = state_33612__$1;
(statearr_33614_34764[(2)] = inst_33527);

(statearr_33614_34764[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (20))){
var inst_33539 = (state_33612[(7)]);
var state_33612__$1 = state_33612;
var statearr_33615_34765 = state_33612__$1;
(statearr_33615_34765[(2)] = inst_33539);

(statearr_33615_34765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (27))){
var state_33612__$1 = state_33612;
var statearr_33616_34766 = state_33612__$1;
(statearr_33616_34766[(2)] = null);

(statearr_33616_34766[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (1))){
var inst_33514 = (state_33612[(8)]);
var inst_33514__$1 = calc_state();
var inst_33516 = (inst_33514__$1 == null);
var inst_33517 = cljs.core.not(inst_33516);
var state_33612__$1 = (function (){var statearr_33617 = state_33612;
(statearr_33617[(8)] = inst_33514__$1);

return statearr_33617;
})();
if(inst_33517){
var statearr_33618_34767 = state_33612__$1;
(statearr_33618_34767[(1)] = (2));

} else {
var statearr_33619_34768 = state_33612__$1;
(statearr_33619_34768[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (24))){
var inst_33563 = (state_33612[(9)]);
var inst_33572 = (state_33612[(10)]);
var inst_33586 = (state_33612[(11)]);
var inst_33586__$1 = (inst_33563.cljs$core$IFn$_invoke$arity$1 ? inst_33563.cljs$core$IFn$_invoke$arity$1(inst_33572) : inst_33563.call(null,inst_33572));
var state_33612__$1 = (function (){var statearr_33620 = state_33612;
(statearr_33620[(11)] = inst_33586__$1);

return statearr_33620;
})();
if(cljs.core.truth_(inst_33586__$1)){
var statearr_33621_34769 = state_33612__$1;
(statearr_33621_34769[(1)] = (29));

} else {
var statearr_33622_34770 = state_33612__$1;
(statearr_33622_34770[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (4))){
var inst_33530 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33530)){
var statearr_33623_34771 = state_33612__$1;
(statearr_33623_34771[(1)] = (8));

} else {
var statearr_33624_34772 = state_33612__$1;
(statearr_33624_34772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (15))){
var inst_33557 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33557)){
var statearr_33625_34773 = state_33612__$1;
(statearr_33625_34773[(1)] = (19));

} else {
var statearr_33626_34774 = state_33612__$1;
(statearr_33626_34774[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (21))){
var inst_33562 = (state_33612[(12)]);
var inst_33562__$1 = (state_33612[(2)]);
var inst_33563 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33562__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33564 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33562__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33565 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33562__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33612__$1 = (function (){var statearr_33627 = state_33612;
(statearr_33627[(9)] = inst_33563);

(statearr_33627[(13)] = inst_33564);

(statearr_33627[(12)] = inst_33562__$1);

return statearr_33627;
})();
return cljs.core.async.ioc_alts_BANG_(state_33612__$1,(22),inst_33565);
} else {
if((state_val_33613 === (31))){
var inst_33594 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33594)){
var statearr_33628_34777 = state_33612__$1;
(statearr_33628_34777[(1)] = (32));

} else {
var statearr_33629_34778 = state_33612__$1;
(statearr_33629_34778[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (32))){
var inst_33571 = (state_33612[(14)]);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33612__$1,(35),out,inst_33571);
} else {
if((state_val_33613 === (33))){
var inst_33562 = (state_33612[(12)]);
var inst_33539 = inst_33562;
var state_33612__$1 = (function (){var statearr_33630 = state_33612;
(statearr_33630[(7)] = inst_33539);

return statearr_33630;
})();
var statearr_33631_34779 = state_33612__$1;
(statearr_33631_34779[(2)] = null);

(statearr_33631_34779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (13))){
var inst_33539 = (state_33612[(7)]);
var inst_33546 = inst_33539.cljs$lang$protocol_mask$partition0$;
var inst_33547 = (inst_33546 & (64));
var inst_33548 = inst_33539.cljs$core$ISeq$;
var inst_33549 = (cljs.core.PROTOCOL_SENTINEL === inst_33548);
var inst_33550 = ((inst_33547) || (inst_33549));
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33550)){
var statearr_33632_34781 = state_33612__$1;
(statearr_33632_34781[(1)] = (16));

} else {
var statearr_33633_34783 = state_33612__$1;
(statearr_33633_34783[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (22))){
var inst_33571 = (state_33612[(14)]);
var inst_33572 = (state_33612[(10)]);
var inst_33570 = (state_33612[(2)]);
var inst_33571__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33570,(0),null);
var inst_33572__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33570,(1),null);
var inst_33573 = (inst_33571__$1 == null);
var inst_33574 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33572__$1,change);
var inst_33575 = ((inst_33573) || (inst_33574));
var state_33612__$1 = (function (){var statearr_33634 = state_33612;
(statearr_33634[(14)] = inst_33571__$1);

(statearr_33634[(10)] = inst_33572__$1);

return statearr_33634;
})();
if(cljs.core.truth_(inst_33575)){
var statearr_33635_34784 = state_33612__$1;
(statearr_33635_34784[(1)] = (23));

} else {
var statearr_33636_34785 = state_33612__$1;
(statearr_33636_34785[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (36))){
var inst_33562 = (state_33612[(12)]);
var inst_33539 = inst_33562;
var state_33612__$1 = (function (){var statearr_33637 = state_33612;
(statearr_33637[(7)] = inst_33539);

return statearr_33637;
})();
var statearr_33638_34786 = state_33612__$1;
(statearr_33638_34786[(2)] = null);

(statearr_33638_34786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (29))){
var inst_33586 = (state_33612[(11)]);
var state_33612__$1 = state_33612;
var statearr_33639_34787 = state_33612__$1;
(statearr_33639_34787[(2)] = inst_33586);

(statearr_33639_34787[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (6))){
var state_33612__$1 = state_33612;
var statearr_33640_34788 = state_33612__$1;
(statearr_33640_34788[(2)] = false);

(statearr_33640_34788[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (28))){
var inst_33582 = (state_33612[(2)]);
var inst_33583 = calc_state();
var inst_33539 = inst_33583;
var state_33612__$1 = (function (){var statearr_33641 = state_33612;
(statearr_33641[(7)] = inst_33539);

(statearr_33641[(15)] = inst_33582);

return statearr_33641;
})();
var statearr_33642_34789 = state_33612__$1;
(statearr_33642_34789[(2)] = null);

(statearr_33642_34789[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (25))){
var inst_33608 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33643_34790 = state_33612__$1;
(statearr_33643_34790[(2)] = inst_33608);

(statearr_33643_34790[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (34))){
var inst_33606 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33644_34791 = state_33612__$1;
(statearr_33644_34791[(2)] = inst_33606);

(statearr_33644_34791[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (17))){
var state_33612__$1 = state_33612;
var statearr_33645_34792 = state_33612__$1;
(statearr_33645_34792[(2)] = false);

(statearr_33645_34792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (3))){
var state_33612__$1 = state_33612;
var statearr_33646_34793 = state_33612__$1;
(statearr_33646_34793[(2)] = false);

(statearr_33646_34793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (12))){
var inst_33610 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33612__$1,inst_33610);
} else {
if((state_val_33613 === (2))){
var inst_33514 = (state_33612[(8)]);
var inst_33519 = inst_33514.cljs$lang$protocol_mask$partition0$;
var inst_33520 = (inst_33519 & (64));
var inst_33521 = inst_33514.cljs$core$ISeq$;
var inst_33522 = (cljs.core.PROTOCOL_SENTINEL === inst_33521);
var inst_33523 = ((inst_33520) || (inst_33522));
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33523)){
var statearr_33647_34794 = state_33612__$1;
(statearr_33647_34794[(1)] = (5));

} else {
var statearr_33648_34796 = state_33612__$1;
(statearr_33648_34796[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (23))){
var inst_33571 = (state_33612[(14)]);
var inst_33577 = (inst_33571 == null);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33577)){
var statearr_33649_34798 = state_33612__$1;
(statearr_33649_34798[(1)] = (26));

} else {
var statearr_33650_34799 = state_33612__$1;
(statearr_33650_34799[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (35))){
var inst_33597 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
if(cljs.core.truth_(inst_33597)){
var statearr_33651_34800 = state_33612__$1;
(statearr_33651_34800[(1)] = (36));

} else {
var statearr_33652_34801 = state_33612__$1;
(statearr_33652_34801[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (19))){
var inst_33539 = (state_33612[(7)]);
var inst_33559 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33539);
var state_33612__$1 = state_33612;
var statearr_33653_34802 = state_33612__$1;
(statearr_33653_34802[(2)] = inst_33559);

(statearr_33653_34802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (11))){
var inst_33539 = (state_33612[(7)]);
var inst_33543 = (inst_33539 == null);
var inst_33544 = cljs.core.not(inst_33543);
var state_33612__$1 = state_33612;
if(inst_33544){
var statearr_33654_34803 = state_33612__$1;
(statearr_33654_34803[(1)] = (13));

} else {
var statearr_33655_34804 = state_33612__$1;
(statearr_33655_34804[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (9))){
var inst_33514 = (state_33612[(8)]);
var state_33612__$1 = state_33612;
var statearr_33656_34805 = state_33612__$1;
(statearr_33656_34805[(2)] = inst_33514);

(statearr_33656_34805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (5))){
var state_33612__$1 = state_33612;
var statearr_33657_34806 = state_33612__$1;
(statearr_33657_34806[(2)] = true);

(statearr_33657_34806[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (14))){
var state_33612__$1 = state_33612;
var statearr_33658_34807 = state_33612__$1;
(statearr_33658_34807[(2)] = false);

(statearr_33658_34807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (26))){
var inst_33572 = (state_33612[(10)]);
var inst_33579 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33572);
var state_33612__$1 = state_33612;
var statearr_33659_34808 = state_33612__$1;
(statearr_33659_34808[(2)] = inst_33579);

(statearr_33659_34808[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (16))){
var state_33612__$1 = state_33612;
var statearr_33660_34809 = state_33612__$1;
(statearr_33660_34809[(2)] = true);

(statearr_33660_34809[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (38))){
var inst_33602 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33661_34810 = state_33612__$1;
(statearr_33661_34810[(2)] = inst_33602);

(statearr_33661_34810[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (30))){
var inst_33563 = (state_33612[(9)]);
var inst_33572 = (state_33612[(10)]);
var inst_33564 = (state_33612[(13)]);
var inst_33589 = cljs.core.empty_QMARK_(inst_33563);
var inst_33590 = (inst_33564.cljs$core$IFn$_invoke$arity$1 ? inst_33564.cljs$core$IFn$_invoke$arity$1(inst_33572) : inst_33564.call(null,inst_33572));
var inst_33591 = cljs.core.not(inst_33590);
var inst_33592 = ((inst_33589) && (inst_33591));
var state_33612__$1 = state_33612;
var statearr_33662_34811 = state_33612__$1;
(statearr_33662_34811[(2)] = inst_33592);

(statearr_33662_34811[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (10))){
var inst_33514 = (state_33612[(8)]);
var inst_33535 = (state_33612[(2)]);
var inst_33536 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33535,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33537 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33535,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33538 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33535,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33539 = inst_33514;
var state_33612__$1 = (function (){var statearr_33663 = state_33612;
(statearr_33663[(7)] = inst_33539);

(statearr_33663[(16)] = inst_33538);

(statearr_33663[(17)] = inst_33536);

(statearr_33663[(18)] = inst_33537);

return statearr_33663;
})();
var statearr_33664_34812 = state_33612__$1;
(statearr_33664_34812[(2)] = null);

(statearr_33664_34812[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (18))){
var inst_33554 = (state_33612[(2)]);
var state_33612__$1 = state_33612;
var statearr_33665_34813 = state_33612__$1;
(statearr_33665_34813[(2)] = inst_33554);

(statearr_33665_34813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (37))){
var state_33612__$1 = state_33612;
var statearr_33666_34814 = state_33612__$1;
(statearr_33666_34814[(2)] = null);

(statearr_33666_34814[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33613 === (8))){
var inst_33514 = (state_33612[(8)]);
var inst_33532 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_33514);
var state_33612__$1 = state_33612;
var statearr_33667_34816 = state_33612__$1;
(statearr_33667_34816[(2)] = inst_33532);

(statearr_33667_34816[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__32740__auto__ = null;
var cljs$core$async$mix_$_state_machine__32740__auto____0 = (function (){
var statearr_33668 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33668[(0)] = cljs$core$async$mix_$_state_machine__32740__auto__);

(statearr_33668[(1)] = (1));

return statearr_33668;
});
var cljs$core$async$mix_$_state_machine__32740__auto____1 = (function (state_33612){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33612);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33669){var ex__32743__auto__ = e33669;
var statearr_33670_34817 = state_33612;
(statearr_33670_34817[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33612[(4)]))){
var statearr_33671_34818 = state_33612;
(statearr_33671_34818[(1)] = cljs.core.first((state_33612[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34823 = state_33612;
state_33612 = G__34823;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32740__auto__ = function(state_33612){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32740__auto____1.call(this,state_33612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32740__auto____0;
cljs$core$async$mix_$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32740__auto____1;
return cljs$core$async$mix_$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33672 = f__32793__auto__();
(statearr_33672[(6)] = c__32792__auto___34763);

return statearr_33672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34824 = (function (p,v,ch,close_QMARK_){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4423__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4420__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4420__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34824(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34825 = (function (p,v,ch){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4423__auto__.call(null,p,v,ch));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4420__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34825(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34833 = (function() {
var G__34834 = null;
var G__34834__1 = (function (p){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4423__auto__.call(null,p));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4420__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34834__2 = (function (p,v){
var x__4422__auto__ = (((p == null))?null:p);
var m__4423__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4423__auto__.call(null,p,v));
} else {
var m__4420__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4420__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34834 = function(p,v){
switch(arguments.length){
case 1:
return G__34834__1.call(this,p);
case 2:
return G__34834__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34834.cljs$core$IFn$_invoke$arity$1 = G__34834__1;
G__34834.cljs$core$IFn$_invoke$arity$2 = G__34834__2;
return G__34834;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33674 = arguments.length;
switch (G__33674) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34833(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34833(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__33677 = arguments.length;
switch (G__33677) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4120__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33675_SHARP_){
if(cljs.core.truth_((p1__33675_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33675_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33675_SHARP_.call(null,topic)))){
return p1__33675_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33675_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33678 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33678 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33679){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33679 = meta33679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33680,meta33679__$1){
var self__ = this;
var _33680__$1 = this;
return (new cljs.core.async.t_cljs$core$async33678(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33679__$1));
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33680){
var self__ = this;
var _33680__$1 = this;
return self__.meta33679;
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33678.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33679","meta33679",-1187496470,null)], null);
}));

(cljs.core.async.t_cljs$core$async33678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33678");

(cljs.core.async.t_cljs$core$async33678.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33678.
 */
cljs.core.async.__GT_t_cljs$core$async33678 = (function cljs$core$async$__GT_t_cljs$core$async33678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33679){
return (new cljs.core.async.t_cljs$core$async33678(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33679));
});

}

return (new cljs.core.async.t_cljs$core$async33678(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32792__auto___34852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33752){
var state_val_33753 = (state_33752[(1)]);
if((state_val_33753 === (7))){
var inst_33748 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33754_34853 = state_33752__$1;
(statearr_33754_34853[(2)] = inst_33748);

(statearr_33754_34853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (20))){
var state_33752__$1 = state_33752;
var statearr_33755_34854 = state_33752__$1;
(statearr_33755_34854[(2)] = null);

(statearr_33755_34854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (1))){
var state_33752__$1 = state_33752;
var statearr_33756_34855 = state_33752__$1;
(statearr_33756_34855[(2)] = null);

(statearr_33756_34855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (24))){
var inst_33731 = (state_33752[(7)]);
var inst_33740 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33731);
var state_33752__$1 = state_33752;
var statearr_33757_34856 = state_33752__$1;
(statearr_33757_34856[(2)] = inst_33740);

(statearr_33757_34856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (4))){
var inst_33683 = (state_33752[(8)]);
var inst_33683__$1 = (state_33752[(2)]);
var inst_33684 = (inst_33683__$1 == null);
var state_33752__$1 = (function (){var statearr_33758 = state_33752;
(statearr_33758[(8)] = inst_33683__$1);

return statearr_33758;
})();
if(cljs.core.truth_(inst_33684)){
var statearr_33759_34857 = state_33752__$1;
(statearr_33759_34857[(1)] = (5));

} else {
var statearr_33760_34858 = state_33752__$1;
(statearr_33760_34858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (15))){
var inst_33725 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33761_34859 = state_33752__$1;
(statearr_33761_34859[(2)] = inst_33725);

(statearr_33761_34859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (21))){
var inst_33745 = (state_33752[(2)]);
var state_33752__$1 = (function (){var statearr_33762 = state_33752;
(statearr_33762[(9)] = inst_33745);

return statearr_33762;
})();
var statearr_33763_34860 = state_33752__$1;
(statearr_33763_34860[(2)] = null);

(statearr_33763_34860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (13))){
var inst_33707 = (state_33752[(10)]);
var inst_33709 = cljs.core.chunked_seq_QMARK_(inst_33707);
var state_33752__$1 = state_33752;
if(inst_33709){
var statearr_33764_34861 = state_33752__$1;
(statearr_33764_34861[(1)] = (16));

} else {
var statearr_33765_34862 = state_33752__$1;
(statearr_33765_34862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (22))){
var inst_33737 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33737)){
var statearr_33766_34863 = state_33752__$1;
(statearr_33766_34863[(1)] = (23));

} else {
var statearr_33767_34864 = state_33752__$1;
(statearr_33767_34864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (6))){
var inst_33733 = (state_33752[(11)]);
var inst_33731 = (state_33752[(7)]);
var inst_33683 = (state_33752[(8)]);
var inst_33731__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33683) : topic_fn.call(null,inst_33683));
var inst_33732 = cljs.core.deref(mults);
var inst_33733__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33732,inst_33731__$1);
var state_33752__$1 = (function (){var statearr_33768 = state_33752;
(statearr_33768[(11)] = inst_33733__$1);

(statearr_33768[(7)] = inst_33731__$1);

return statearr_33768;
})();
if(cljs.core.truth_(inst_33733__$1)){
var statearr_33769_34865 = state_33752__$1;
(statearr_33769_34865[(1)] = (19));

} else {
var statearr_33770_34866 = state_33752__$1;
(statearr_33770_34866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (25))){
var inst_33742 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33771_34871 = state_33752__$1;
(statearr_33771_34871[(2)] = inst_33742);

(statearr_33771_34871[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (17))){
var inst_33707 = (state_33752[(10)]);
var inst_33716 = cljs.core.first(inst_33707);
var inst_33717 = cljs.core.async.muxch_STAR_(inst_33716);
var inst_33718 = cljs.core.async.close_BANG_(inst_33717);
var inst_33719 = cljs.core.next(inst_33707);
var inst_33693 = inst_33719;
var inst_33694 = null;
var inst_33695 = (0);
var inst_33696 = (0);
var state_33752__$1 = (function (){var statearr_33772 = state_33752;
(statearr_33772[(12)] = inst_33693);

(statearr_33772[(13)] = inst_33695);

(statearr_33772[(14)] = inst_33696);

(statearr_33772[(15)] = inst_33694);

(statearr_33772[(16)] = inst_33718);

return statearr_33772;
})();
var statearr_33773_34872 = state_33752__$1;
(statearr_33773_34872[(2)] = null);

(statearr_33773_34872[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (3))){
var inst_33750 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33752__$1,inst_33750);
} else {
if((state_val_33753 === (12))){
var inst_33727 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33774_34873 = state_33752__$1;
(statearr_33774_34873[(2)] = inst_33727);

(statearr_33774_34873[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (2))){
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33752__$1,(4),ch);
} else {
if((state_val_33753 === (23))){
var state_33752__$1 = state_33752;
var statearr_33775_34874 = state_33752__$1;
(statearr_33775_34874[(2)] = null);

(statearr_33775_34874[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (19))){
var inst_33733 = (state_33752[(11)]);
var inst_33683 = (state_33752[(8)]);
var inst_33735 = cljs.core.async.muxch_STAR_(inst_33733);
var state_33752__$1 = state_33752;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33752__$1,(22),inst_33735,inst_33683);
} else {
if((state_val_33753 === (11))){
var inst_33693 = (state_33752[(12)]);
var inst_33707 = (state_33752[(10)]);
var inst_33707__$1 = cljs.core.seq(inst_33693);
var state_33752__$1 = (function (){var statearr_33776 = state_33752;
(statearr_33776[(10)] = inst_33707__$1);

return statearr_33776;
})();
if(inst_33707__$1){
var statearr_33777_34879 = state_33752__$1;
(statearr_33777_34879[(1)] = (13));

} else {
var statearr_33778_34880 = state_33752__$1;
(statearr_33778_34880[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (9))){
var inst_33729 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33779_34882 = state_33752__$1;
(statearr_33779_34882[(2)] = inst_33729);

(statearr_33779_34882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (5))){
var inst_33690 = cljs.core.deref(mults);
var inst_33691 = cljs.core.vals(inst_33690);
var inst_33692 = cljs.core.seq(inst_33691);
var inst_33693 = inst_33692;
var inst_33694 = null;
var inst_33695 = (0);
var inst_33696 = (0);
var state_33752__$1 = (function (){var statearr_33780 = state_33752;
(statearr_33780[(12)] = inst_33693);

(statearr_33780[(13)] = inst_33695);

(statearr_33780[(14)] = inst_33696);

(statearr_33780[(15)] = inst_33694);

return statearr_33780;
})();
var statearr_33781_34883 = state_33752__$1;
(statearr_33781_34883[(2)] = null);

(statearr_33781_34883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (14))){
var state_33752__$1 = state_33752;
var statearr_33785_34884 = state_33752__$1;
(statearr_33785_34884[(2)] = null);

(statearr_33785_34884[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (16))){
var inst_33707 = (state_33752[(10)]);
var inst_33711 = cljs.core.chunk_first(inst_33707);
var inst_33712 = cljs.core.chunk_rest(inst_33707);
var inst_33713 = cljs.core.count(inst_33711);
var inst_33693 = inst_33712;
var inst_33694 = inst_33711;
var inst_33695 = inst_33713;
var inst_33696 = (0);
var state_33752__$1 = (function (){var statearr_33786 = state_33752;
(statearr_33786[(12)] = inst_33693);

(statearr_33786[(13)] = inst_33695);

(statearr_33786[(14)] = inst_33696);

(statearr_33786[(15)] = inst_33694);

return statearr_33786;
})();
var statearr_33787_34886 = state_33752__$1;
(statearr_33787_34886[(2)] = null);

(statearr_33787_34886[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (10))){
var inst_33693 = (state_33752[(12)]);
var inst_33695 = (state_33752[(13)]);
var inst_33696 = (state_33752[(14)]);
var inst_33694 = (state_33752[(15)]);
var inst_33701 = cljs.core._nth(inst_33694,inst_33696);
var inst_33702 = cljs.core.async.muxch_STAR_(inst_33701);
var inst_33703 = cljs.core.async.close_BANG_(inst_33702);
var inst_33704 = (inst_33696 + (1));
var tmp33782 = inst_33693;
var tmp33783 = inst_33695;
var tmp33784 = inst_33694;
var inst_33693__$1 = tmp33782;
var inst_33694__$1 = tmp33784;
var inst_33695__$1 = tmp33783;
var inst_33696__$1 = inst_33704;
var state_33752__$1 = (function (){var statearr_33788 = state_33752;
(statearr_33788[(12)] = inst_33693__$1);

(statearr_33788[(13)] = inst_33695__$1);

(statearr_33788[(14)] = inst_33696__$1);

(statearr_33788[(17)] = inst_33703);

(statearr_33788[(15)] = inst_33694__$1);

return statearr_33788;
})();
var statearr_33789_34891 = state_33752__$1;
(statearr_33789_34891[(2)] = null);

(statearr_33789_34891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (18))){
var inst_33722 = (state_33752[(2)]);
var state_33752__$1 = state_33752;
var statearr_33790_34892 = state_33752__$1;
(statearr_33790_34892[(2)] = inst_33722);

(statearr_33790_34892[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33753 === (8))){
var inst_33695 = (state_33752[(13)]);
var inst_33696 = (state_33752[(14)]);
var inst_33698 = (inst_33696 < inst_33695);
var inst_33699 = inst_33698;
var state_33752__$1 = state_33752;
if(cljs.core.truth_(inst_33699)){
var statearr_33791_34893 = state_33752__$1;
(statearr_33791_34893[(1)] = (10));

} else {
var statearr_33792_34894 = state_33752__$1;
(statearr_33792_34894[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33793[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33793[(1)] = (1));

return statearr_33793;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33752){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33752);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33794){var ex__32743__auto__ = e33794;
var statearr_33795_34895 = state_33752;
(statearr_33795_34895[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33752[(4)]))){
var statearr_33796_34896 = state_33752;
(statearr_33796_34896[(1)] = cljs.core.first((state_33752[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34897 = state_33752;
state_33752 = G__34897;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33797 = f__32793__auto__();
(statearr_33797[(6)] = c__32792__auto___34852);

return statearr_33797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33799 = arguments.length;
switch (G__33799) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33801 = arguments.length;
switch (G__33801) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__33803 = arguments.length;
switch (G__33803) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__32792__auto___34901 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33846){
var state_val_33847 = (state_33846[(1)]);
if((state_val_33847 === (7))){
var state_33846__$1 = state_33846;
var statearr_33848_34905 = state_33846__$1;
(statearr_33848_34905[(2)] = null);

(statearr_33848_34905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (1))){
var state_33846__$1 = state_33846;
var statearr_33849_34906 = state_33846__$1;
(statearr_33849_34906[(2)] = null);

(statearr_33849_34906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (4))){
var inst_33806 = (state_33846[(7)]);
var inst_33807 = (state_33846[(8)]);
var inst_33809 = (inst_33807 < inst_33806);
var state_33846__$1 = state_33846;
if(cljs.core.truth_(inst_33809)){
var statearr_33850_34907 = state_33846__$1;
(statearr_33850_34907[(1)] = (6));

} else {
var statearr_33851_34908 = state_33846__$1;
(statearr_33851_34908[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (15))){
var inst_33832 = (state_33846[(9)]);
var inst_33837 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33832);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33846__$1,(17),out,inst_33837);
} else {
if((state_val_33847 === (13))){
var inst_33832 = (state_33846[(9)]);
var inst_33832__$1 = (state_33846[(2)]);
var inst_33833 = cljs.core.some(cljs.core.nil_QMARK_,inst_33832__$1);
var state_33846__$1 = (function (){var statearr_33852 = state_33846;
(statearr_33852[(9)] = inst_33832__$1);

return statearr_33852;
})();
if(cljs.core.truth_(inst_33833)){
var statearr_33853_34909 = state_33846__$1;
(statearr_33853_34909[(1)] = (14));

} else {
var statearr_33854_34910 = state_33846__$1;
(statearr_33854_34910[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (6))){
var state_33846__$1 = state_33846;
var statearr_33855_34911 = state_33846__$1;
(statearr_33855_34911[(2)] = null);

(statearr_33855_34911[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (17))){
var inst_33839 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33857 = state_33846;
(statearr_33857[(10)] = inst_33839);

return statearr_33857;
})();
var statearr_33858_34912 = state_33846__$1;
(statearr_33858_34912[(2)] = null);

(statearr_33858_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (3))){
var inst_33844 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33846__$1,inst_33844);
} else {
if((state_val_33847 === (12))){
var _ = (function (){var statearr_33859 = state_33846;
(statearr_33859[(4)] = cljs.core.rest((state_33846[(4)])));

return statearr_33859;
})();
var state_33846__$1 = state_33846;
var ex33856 = (state_33846__$1[(2)]);
var statearr_33860_34914 = state_33846__$1;
(statearr_33860_34914[(5)] = ex33856);


if((ex33856 instanceof Object)){
var statearr_33861_34915 = state_33846__$1;
(statearr_33861_34915[(1)] = (11));

(statearr_33861_34915[(5)] = null);

} else {
throw ex33856;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (2))){
var inst_33805 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33806 = cnt;
var inst_33807 = (0);
var state_33846__$1 = (function (){var statearr_33862 = state_33846;
(statearr_33862[(7)] = inst_33806);

(statearr_33862[(11)] = inst_33805);

(statearr_33862[(8)] = inst_33807);

return statearr_33862;
})();
var statearr_33863_34916 = state_33846__$1;
(statearr_33863_34916[(2)] = null);

(statearr_33863_34916[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (11))){
var inst_33811 = (state_33846[(2)]);
var inst_33812 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33846__$1 = (function (){var statearr_33864 = state_33846;
(statearr_33864[(12)] = inst_33811);

return statearr_33864;
})();
var statearr_33865_34917 = state_33846__$1;
(statearr_33865_34917[(2)] = inst_33812);

(statearr_33865_34917[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (9))){
var inst_33807 = (state_33846[(8)]);
var _ = (function (){var statearr_33866 = state_33846;
(statearr_33866[(4)] = cljs.core.cons((12),(state_33846[(4)])));

return statearr_33866;
})();
var inst_33818 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33807) : chs__$1.call(null,inst_33807));
var inst_33819 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33807) : done.call(null,inst_33807));
var inst_33820 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33818,inst_33819);
var ___$1 = (function (){var statearr_33867 = state_33846;
(statearr_33867[(4)] = cljs.core.rest((state_33846[(4)])));

return statearr_33867;
})();
var state_33846__$1 = state_33846;
var statearr_33868_34918 = state_33846__$1;
(statearr_33868_34918[(2)] = inst_33820);

(statearr_33868_34918[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (5))){
var inst_33830 = (state_33846[(2)]);
var state_33846__$1 = (function (){var statearr_33869 = state_33846;
(statearr_33869[(13)] = inst_33830);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33846__$1,(13),dchan);
} else {
if((state_val_33847 === (14))){
var inst_33835 = cljs.core.async.close_BANG_(out);
var state_33846__$1 = state_33846;
var statearr_33870_34919 = state_33846__$1;
(statearr_33870_34919[(2)] = inst_33835);

(statearr_33870_34919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (16))){
var inst_33842 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33871_34920 = state_33846__$1;
(statearr_33871_34920[(2)] = inst_33842);

(statearr_33871_34920[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (10))){
var inst_33807 = (state_33846[(8)]);
var inst_33823 = (state_33846[(2)]);
var inst_33824 = (inst_33807 + (1));
var inst_33807__$1 = inst_33824;
var state_33846__$1 = (function (){var statearr_33872 = state_33846;
(statearr_33872[(14)] = inst_33823);

(statearr_33872[(8)] = inst_33807__$1);

return statearr_33872;
})();
var statearr_33873_34925 = state_33846__$1;
(statearr_33873_34925[(2)] = null);

(statearr_33873_34925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33847 === (8))){
var inst_33828 = (state_33846[(2)]);
var state_33846__$1 = state_33846;
var statearr_33874_34927 = state_33846__$1;
(statearr_33874_34927[(2)] = inst_33828);

(statearr_33874_34927[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33875 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33875[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33875[(1)] = (1));

return statearr_33875;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33846){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33846);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33876){var ex__32743__auto__ = e33876;
var statearr_33877_34928 = state_33846;
(statearr_33877_34928[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33846[(4)]))){
var statearr_33878_34929 = state_33846;
(statearr_33878_34929[(1)] = cljs.core.first((state_33846[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34930 = state_33846;
state_33846 = G__34930;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33846){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33879 = f__32793__auto__();
(statearr_33879[(6)] = c__32792__auto___34901);

return statearr_33879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33882 = arguments.length;
switch (G__33882) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___34933 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33914){
var state_val_33915 = (state_33914[(1)]);
if((state_val_33915 === (7))){
var inst_33893 = (state_33914[(7)]);
var inst_33894 = (state_33914[(8)]);
var inst_33893__$1 = (state_33914[(2)]);
var inst_33894__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33893__$1,(0),null);
var inst_33895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33893__$1,(1),null);
var inst_33896 = (inst_33894__$1 == null);
var state_33914__$1 = (function (){var statearr_33916 = state_33914;
(statearr_33916[(7)] = inst_33893__$1);

(statearr_33916[(8)] = inst_33894__$1);

(statearr_33916[(9)] = inst_33895);

return statearr_33916;
})();
if(cljs.core.truth_(inst_33896)){
var statearr_33917_34938 = state_33914__$1;
(statearr_33917_34938[(1)] = (8));

} else {
var statearr_33918_34939 = state_33914__$1;
(statearr_33918_34939[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (1))){
var inst_33883 = cljs.core.vec(chs);
var inst_33884 = inst_33883;
var state_33914__$1 = (function (){var statearr_33919 = state_33914;
(statearr_33919[(10)] = inst_33884);

return statearr_33919;
})();
var statearr_33920_34940 = state_33914__$1;
(statearr_33920_34940[(2)] = null);

(statearr_33920_34940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (4))){
var inst_33884 = (state_33914[(10)]);
var state_33914__$1 = state_33914;
return cljs.core.async.ioc_alts_BANG_(state_33914__$1,(7),inst_33884);
} else {
if((state_val_33915 === (6))){
var inst_33910 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33921_34941 = state_33914__$1;
(statearr_33921_34941[(2)] = inst_33910);

(statearr_33921_34941[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (3))){
var inst_33912 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33914__$1,inst_33912);
} else {
if((state_val_33915 === (2))){
var inst_33884 = (state_33914[(10)]);
var inst_33886 = cljs.core.count(inst_33884);
var inst_33887 = (inst_33886 > (0));
var state_33914__$1 = state_33914;
if(cljs.core.truth_(inst_33887)){
var statearr_33923_34942 = state_33914__$1;
(statearr_33923_34942[(1)] = (4));

} else {
var statearr_33924_34943 = state_33914__$1;
(statearr_33924_34943[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (11))){
var inst_33884 = (state_33914[(10)]);
var inst_33903 = (state_33914[(2)]);
var tmp33922 = inst_33884;
var inst_33884__$1 = tmp33922;
var state_33914__$1 = (function (){var statearr_33925 = state_33914;
(statearr_33925[(11)] = inst_33903);

(statearr_33925[(10)] = inst_33884__$1);

return statearr_33925;
})();
var statearr_33926_34944 = state_33914__$1;
(statearr_33926_34944[(2)] = null);

(statearr_33926_34944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (9))){
var inst_33894 = (state_33914[(8)]);
var state_33914__$1 = state_33914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33914__$1,(11),out,inst_33894);
} else {
if((state_val_33915 === (5))){
var inst_33908 = cljs.core.async.close_BANG_(out);
var state_33914__$1 = state_33914;
var statearr_33927_34945 = state_33914__$1;
(statearr_33927_34945[(2)] = inst_33908);

(statearr_33927_34945[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (10))){
var inst_33906 = (state_33914[(2)]);
var state_33914__$1 = state_33914;
var statearr_33928_34946 = state_33914__$1;
(statearr_33928_34946[(2)] = inst_33906);

(statearr_33928_34946[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33915 === (8))){
var inst_33893 = (state_33914[(7)]);
var inst_33894 = (state_33914[(8)]);
var inst_33895 = (state_33914[(9)]);
var inst_33884 = (state_33914[(10)]);
var inst_33898 = (function (){var cs = inst_33884;
var vec__33889 = inst_33893;
var v = inst_33894;
var c = inst_33895;
return (function (p1__33880_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33880_SHARP_);
});
})();
var inst_33899 = cljs.core.filterv(inst_33898,inst_33884);
var inst_33884__$1 = inst_33899;
var state_33914__$1 = (function (){var statearr_33929 = state_33914;
(statearr_33929[(10)] = inst_33884__$1);

return statearr_33929;
})();
var statearr_33930_34947 = state_33914__$1;
(statearr_33930_34947[(2)] = null);

(statearr_33930_34947[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33931 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33931[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33931[(1)] = (1));

return statearr_33931;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33914){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33914);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33932){var ex__32743__auto__ = e33932;
var statearr_33933_34948 = state_33914;
(statearr_33933_34948[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33914[(4)]))){
var statearr_33934_34949 = state_33914;
(statearr_33934_34949[(1)] = cljs.core.first((state_33914[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34950 = state_33914;
state_33914 = G__34950;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33935 = f__32793__auto__();
(statearr_33935[(6)] = c__32792__auto___34933);

return statearr_33935;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33937 = arguments.length;
switch (G__33937) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___34955 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_33961){
var state_val_33962 = (state_33961[(1)]);
if((state_val_33962 === (7))){
var inst_33943 = (state_33961[(7)]);
var inst_33943__$1 = (state_33961[(2)]);
var inst_33944 = (inst_33943__$1 == null);
var inst_33945 = cljs.core.not(inst_33944);
var state_33961__$1 = (function (){var statearr_33963 = state_33961;
(statearr_33963[(7)] = inst_33943__$1);

return statearr_33963;
})();
if(inst_33945){
var statearr_33964_34956 = state_33961__$1;
(statearr_33964_34956[(1)] = (8));

} else {
var statearr_33965_34957 = state_33961__$1;
(statearr_33965_34957[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (1))){
var inst_33938 = (0);
var state_33961__$1 = (function (){var statearr_33966 = state_33961;
(statearr_33966[(8)] = inst_33938);

return statearr_33966;
})();
var statearr_33967_34958 = state_33961__$1;
(statearr_33967_34958[(2)] = null);

(statearr_33967_34958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (4))){
var state_33961__$1 = state_33961;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33961__$1,(7),ch);
} else {
if((state_val_33962 === (6))){
var inst_33956 = (state_33961[(2)]);
var state_33961__$1 = state_33961;
var statearr_33968_34959 = state_33961__$1;
(statearr_33968_34959[(2)] = inst_33956);

(statearr_33968_34959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (3))){
var inst_33958 = (state_33961[(2)]);
var inst_33959 = cljs.core.async.close_BANG_(out);
var state_33961__$1 = (function (){var statearr_33969 = state_33961;
(statearr_33969[(9)] = inst_33958);

return statearr_33969;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33961__$1,inst_33959);
} else {
if((state_val_33962 === (2))){
var inst_33938 = (state_33961[(8)]);
var inst_33940 = (inst_33938 < n);
var state_33961__$1 = state_33961;
if(cljs.core.truth_(inst_33940)){
var statearr_33970_34960 = state_33961__$1;
(statearr_33970_34960[(1)] = (4));

} else {
var statearr_33971_34961 = state_33961__$1;
(statearr_33971_34961[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (11))){
var inst_33938 = (state_33961[(8)]);
var inst_33948 = (state_33961[(2)]);
var inst_33949 = (inst_33938 + (1));
var inst_33938__$1 = inst_33949;
var state_33961__$1 = (function (){var statearr_33972 = state_33961;
(statearr_33972[(8)] = inst_33938__$1);

(statearr_33972[(10)] = inst_33948);

return statearr_33972;
})();
var statearr_33973_34963 = state_33961__$1;
(statearr_33973_34963[(2)] = null);

(statearr_33973_34963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (9))){
var state_33961__$1 = state_33961;
var statearr_33974_34964 = state_33961__$1;
(statearr_33974_34964[(2)] = null);

(statearr_33974_34964[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (5))){
var state_33961__$1 = state_33961;
var statearr_33975_34965 = state_33961__$1;
(statearr_33975_34965[(2)] = null);

(statearr_33975_34965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (10))){
var inst_33953 = (state_33961[(2)]);
var state_33961__$1 = state_33961;
var statearr_33976_34966 = state_33961__$1;
(statearr_33976_34966[(2)] = inst_33953);

(statearr_33976_34966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33962 === (8))){
var inst_33943 = (state_33961[(7)]);
var state_33961__$1 = state_33961;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33961__$1,(11),out,inst_33943);
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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_33977 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33977[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_33977[(1)] = (1));

return statearr_33977;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_33961){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_33961);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e33978){var ex__32743__auto__ = e33978;
var statearr_33979_34967 = state_33961;
(statearr_33979_34967[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_33961[(4)]))){
var statearr_33980_34968 = state_33961;
(statearr_33980_34968[(1)] = cljs.core.first((state_33961[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34969 = state_33961;
state_33961 = G__34969;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_33961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_33961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_33981 = f__32793__auto__();
(statearr_33981[(6)] = c__32792__auto___34955);

return statearr_33981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33983 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33983 = (function (f,ch,meta33984){
this.f = f;
this.ch = ch;
this.meta33984 = meta33984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33985,meta33984__$1){
var self__ = this;
var _33985__$1 = this;
return (new cljs.core.async.t_cljs$core$async33983(self__.f,self__.ch,meta33984__$1));
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33985){
var self__ = this;
var _33985__$1 = this;
return self__.meta33984;
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33986 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33986 = (function (f,ch,meta33984,_,fn1,meta33987){
this.f = f;
this.ch = ch;
this.meta33984 = meta33984;
this._ = _;
this.fn1 = fn1;
this.meta33987 = meta33987;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33988,meta33987__$1){
var self__ = this;
var _33988__$1 = this;
return (new cljs.core.async.t_cljs$core$async33986(self__.f,self__.ch,self__.meta33984,self__._,self__.fn1,meta33987__$1));
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33988){
var self__ = this;
var _33988__$1 = this;
return self__.meta33987;
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33986.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33982_SHARP_){
var G__33989 = (((p1__33982_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33982_SHARP_) : self__.f.call(null,p1__33982_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33989) : f1.call(null,G__33989));
});
}));

(cljs.core.async.t_cljs$core$async33986.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33984","meta33984",-1039456797,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33983","cljs.core.async/t_cljs$core$async33983",-1103672786,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33987","meta33987",1075656115,null)], null);
}));

(cljs.core.async.t_cljs$core$async33986.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33986.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33986");

(cljs.core.async.t_cljs$core$async33986.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33986");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33986.
 */
cljs.core.async.__GT_t_cljs$core$async33986 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33986(f__$1,ch__$1,meta33984__$1,___$2,fn1__$1,meta33987){
return (new cljs.core.async.t_cljs$core$async33986(f__$1,ch__$1,meta33984__$1,___$2,fn1__$1,meta33987));
});

}

return (new cljs.core.async.t_cljs$core$async33986(self__.f,self__.ch,self__.meta33984,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4109__auto__ = ret;
if(cljs.core.truth_(and__4109__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4109__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33990 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33990) : self__.f.call(null,G__33990));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33983.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33984","meta33984",-1039456797,null)], null);
}));

(cljs.core.async.t_cljs$core$async33983.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33983");

(cljs.core.async.t_cljs$core$async33983.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33983");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33983.
 */
cljs.core.async.__GT_t_cljs$core$async33983 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33983(f__$1,ch__$1,meta33984){
return (new cljs.core.async.t_cljs$core$async33983(f__$1,ch__$1,meta33984));
});

}

return (new cljs.core.async.t_cljs$core$async33983(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33991 = (function (f,ch,meta33992){
this.f = f;
this.ch = ch;
this.meta33992 = meta33992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33993,meta33992__$1){
var self__ = this;
var _33993__$1 = this;
return (new cljs.core.async.t_cljs$core$async33991(self__.f,self__.ch,meta33992__$1));
}));

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33993){
var self__ = this;
var _33993__$1 = this;
return self__.meta33992;
}));

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33991.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33992","meta33992",1009639774,null)], null);
}));

(cljs.core.async.t_cljs$core$async33991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33991");

(cljs.core.async.t_cljs$core$async33991.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33991.
 */
cljs.core.async.__GT_t_cljs$core$async33991 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33991(f__$1,ch__$1,meta33992){
return (new cljs.core.async.t_cljs$core$async33991(f__$1,ch__$1,meta33992));
});

}

return (new cljs.core.async.t_cljs$core$async33991(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33994 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33994 = (function (p,ch,meta33995){
this.p = p;
this.ch = ch;
this.meta33995 = meta33995;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33996,meta33995__$1){
var self__ = this;
var _33996__$1 = this;
return (new cljs.core.async.t_cljs$core$async33994(self__.p,self__.ch,meta33995__$1));
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33996){
var self__ = this;
var _33996__$1 = this;
return self__.meta33995;
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33994.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33994.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33995","meta33995",1362545496,null)], null);
}));

(cljs.core.async.t_cljs$core$async33994.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33994");

(cljs.core.async.t_cljs$core$async33994.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"cljs.core.async/t_cljs$core$async33994");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33994.
 */
cljs.core.async.__GT_t_cljs$core$async33994 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33994(p__$1,ch__$1,meta33995){
return (new cljs.core.async.t_cljs$core$async33994(p__$1,ch__$1,meta33995));
});

}

return (new cljs.core.async.t_cljs$core$async33994(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33998 = arguments.length;
switch (G__33998) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___34981 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_34019){
var state_val_34020 = (state_34019[(1)]);
if((state_val_34020 === (7))){
var inst_34015 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34021_34982 = state_34019__$1;
(statearr_34021_34982[(2)] = inst_34015);

(statearr_34021_34982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (1))){
var state_34019__$1 = state_34019;
var statearr_34022_34983 = state_34019__$1;
(statearr_34022_34983[(2)] = null);

(statearr_34022_34983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (4))){
var inst_34001 = (state_34019[(7)]);
var inst_34001__$1 = (state_34019[(2)]);
var inst_34002 = (inst_34001__$1 == null);
var state_34019__$1 = (function (){var statearr_34023 = state_34019;
(statearr_34023[(7)] = inst_34001__$1);

return statearr_34023;
})();
if(cljs.core.truth_(inst_34002)){
var statearr_34024_34984 = state_34019__$1;
(statearr_34024_34984[(1)] = (5));

} else {
var statearr_34025_34985 = state_34019__$1;
(statearr_34025_34985[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (6))){
var inst_34001 = (state_34019[(7)]);
var inst_34006 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34001) : p.call(null,inst_34001));
var state_34019__$1 = state_34019;
if(cljs.core.truth_(inst_34006)){
var statearr_34026_34986 = state_34019__$1;
(statearr_34026_34986[(1)] = (8));

} else {
var statearr_34027_34987 = state_34019__$1;
(statearr_34027_34987[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (3))){
var inst_34017 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34019__$1,inst_34017);
} else {
if((state_val_34020 === (2))){
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34019__$1,(4),ch);
} else {
if((state_val_34020 === (11))){
var inst_34009 = (state_34019[(2)]);
var state_34019__$1 = state_34019;
var statearr_34028_34988 = state_34019__$1;
(statearr_34028_34988[(2)] = inst_34009);

(statearr_34028_34988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (9))){
var state_34019__$1 = state_34019;
var statearr_34029_34989 = state_34019__$1;
(statearr_34029_34989[(2)] = null);

(statearr_34029_34989[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (5))){
var inst_34004 = cljs.core.async.close_BANG_(out);
var state_34019__$1 = state_34019;
var statearr_34030_34990 = state_34019__$1;
(statearr_34030_34990[(2)] = inst_34004);

(statearr_34030_34990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (10))){
var inst_34012 = (state_34019[(2)]);
var state_34019__$1 = (function (){var statearr_34031 = state_34019;
(statearr_34031[(8)] = inst_34012);

return statearr_34031;
})();
var statearr_34032_34991 = state_34019__$1;
(statearr_34032_34991[(2)] = null);

(statearr_34032_34991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34020 === (8))){
var inst_34001 = (state_34019[(7)]);
var state_34019__$1 = state_34019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34019__$1,(11),out,inst_34001);
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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_34033 = [null,null,null,null,null,null,null,null,null];
(statearr_34033[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_34033[(1)] = (1));

return statearr_34033;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_34019){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_34019);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e34034){var ex__32743__auto__ = e34034;
var statearr_34035_34995 = state_34019;
(statearr_34035_34995[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_34019[(4)]))){
var statearr_34036_34996 = state_34019;
(statearr_34036_34996[(1)] = cljs.core.first((state_34019[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35001 = state_34019;
state_34019 = G__35001;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_34019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_34019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_34037 = f__32793__auto__();
(statearr_34037[(6)] = c__32792__auto___34981);

return statearr_34037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34039 = arguments.length;
switch (G__34039) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32792__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_34101){
var state_val_34102 = (state_34101[(1)]);
if((state_val_34102 === (7))){
var inst_34097 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34103_35006 = state_34101__$1;
(statearr_34103_35006[(2)] = inst_34097);

(statearr_34103_35006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (20))){
var inst_34067 = (state_34101[(7)]);
var inst_34078 = (state_34101[(2)]);
var inst_34079 = cljs.core.next(inst_34067);
var inst_34053 = inst_34079;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34101__$1 = (function (){var statearr_34104 = state_34101;
(statearr_34104[(8)] = inst_34055);

(statearr_34104[(9)] = inst_34054);

(statearr_34104[(10)] = inst_34056);

(statearr_34104[(11)] = inst_34078);

(statearr_34104[(12)] = inst_34053);

return statearr_34104;
})();
var statearr_34105_35010 = state_34101__$1;
(statearr_34105_35010[(2)] = null);

(statearr_34105_35010[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (1))){
var state_34101__$1 = state_34101;
var statearr_34106_35011 = state_34101__$1;
(statearr_34106_35011[(2)] = null);

(statearr_34106_35011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (4))){
var inst_34042 = (state_34101[(13)]);
var inst_34042__$1 = (state_34101[(2)]);
var inst_34043 = (inst_34042__$1 == null);
var state_34101__$1 = (function (){var statearr_34107 = state_34101;
(statearr_34107[(13)] = inst_34042__$1);

return statearr_34107;
})();
if(cljs.core.truth_(inst_34043)){
var statearr_34108_35015 = state_34101__$1;
(statearr_34108_35015[(1)] = (5));

} else {
var statearr_34109_35016 = state_34101__$1;
(statearr_34109_35016[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (15))){
var state_34101__$1 = state_34101;
var statearr_34113_35017 = state_34101__$1;
(statearr_34113_35017[(2)] = null);

(statearr_34113_35017[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (21))){
var state_34101__$1 = state_34101;
var statearr_34114_35018 = state_34101__$1;
(statearr_34114_35018[(2)] = null);

(statearr_34114_35018[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (13))){
var inst_34055 = (state_34101[(8)]);
var inst_34054 = (state_34101[(9)]);
var inst_34056 = (state_34101[(10)]);
var inst_34053 = (state_34101[(12)]);
var inst_34063 = (state_34101[(2)]);
var inst_34064 = (inst_34056 + (1));
var tmp34110 = inst_34055;
var tmp34111 = inst_34054;
var tmp34112 = inst_34053;
var inst_34053__$1 = tmp34112;
var inst_34054__$1 = tmp34111;
var inst_34055__$1 = tmp34110;
var inst_34056__$1 = inst_34064;
var state_34101__$1 = (function (){var statearr_34115 = state_34101;
(statearr_34115[(14)] = inst_34063);

(statearr_34115[(8)] = inst_34055__$1);

(statearr_34115[(9)] = inst_34054__$1);

(statearr_34115[(10)] = inst_34056__$1);

(statearr_34115[(12)] = inst_34053__$1);

return statearr_34115;
})();
var statearr_34116_35022 = state_34101__$1;
(statearr_34116_35022[(2)] = null);

(statearr_34116_35022[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (22))){
var state_34101__$1 = state_34101;
var statearr_34117_35023 = state_34101__$1;
(statearr_34117_35023[(2)] = null);

(statearr_34117_35023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (6))){
var inst_34042 = (state_34101[(13)]);
var inst_34051 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34042) : f.call(null,inst_34042));
var inst_34052 = cljs.core.seq(inst_34051);
var inst_34053 = inst_34052;
var inst_34054 = null;
var inst_34055 = (0);
var inst_34056 = (0);
var state_34101__$1 = (function (){var statearr_34118 = state_34101;
(statearr_34118[(8)] = inst_34055);

(statearr_34118[(9)] = inst_34054);

(statearr_34118[(10)] = inst_34056);

(statearr_34118[(12)] = inst_34053);

return statearr_34118;
})();
var statearr_34119_35025 = state_34101__$1;
(statearr_34119_35025[(2)] = null);

(statearr_34119_35025[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (17))){
var inst_34067 = (state_34101[(7)]);
var inst_34071 = cljs.core.chunk_first(inst_34067);
var inst_34072 = cljs.core.chunk_rest(inst_34067);
var inst_34073 = cljs.core.count(inst_34071);
var inst_34053 = inst_34072;
var inst_34054 = inst_34071;
var inst_34055 = inst_34073;
var inst_34056 = (0);
var state_34101__$1 = (function (){var statearr_34120 = state_34101;
(statearr_34120[(8)] = inst_34055);

(statearr_34120[(9)] = inst_34054);

(statearr_34120[(10)] = inst_34056);

(statearr_34120[(12)] = inst_34053);

return statearr_34120;
})();
var statearr_34121_35026 = state_34101__$1;
(statearr_34121_35026[(2)] = null);

(statearr_34121_35026[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (3))){
var inst_34099 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34101__$1,inst_34099);
} else {
if((state_val_34102 === (12))){
var inst_34087 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34122_35036 = state_34101__$1;
(statearr_34122_35036[(2)] = inst_34087);

(statearr_34122_35036[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (2))){
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34101__$1,(4),in$);
} else {
if((state_val_34102 === (23))){
var inst_34095 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34123_35037 = state_34101__$1;
(statearr_34123_35037[(2)] = inst_34095);

(statearr_34123_35037[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (19))){
var inst_34082 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34124_35044 = state_34101__$1;
(statearr_34124_35044[(2)] = inst_34082);

(statearr_34124_35044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (11))){
var inst_34053 = (state_34101[(12)]);
var inst_34067 = (state_34101[(7)]);
var inst_34067__$1 = cljs.core.seq(inst_34053);
var state_34101__$1 = (function (){var statearr_34125 = state_34101;
(statearr_34125[(7)] = inst_34067__$1);

return statearr_34125;
})();
if(inst_34067__$1){
var statearr_34126_35045 = state_34101__$1;
(statearr_34126_35045[(1)] = (14));

} else {
var statearr_34127_35046 = state_34101__$1;
(statearr_34127_35046[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (9))){
var inst_34089 = (state_34101[(2)]);
var inst_34090 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34101__$1 = (function (){var statearr_34128 = state_34101;
(statearr_34128[(15)] = inst_34089);

return statearr_34128;
})();
if(cljs.core.truth_(inst_34090)){
var statearr_34129_35047 = state_34101__$1;
(statearr_34129_35047[(1)] = (21));

} else {
var statearr_34130_35048 = state_34101__$1;
(statearr_34130_35048[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (5))){
var inst_34045 = cljs.core.async.close_BANG_(out);
var state_34101__$1 = state_34101;
var statearr_34131_35049 = state_34101__$1;
(statearr_34131_35049[(2)] = inst_34045);

(statearr_34131_35049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (14))){
var inst_34067 = (state_34101[(7)]);
var inst_34069 = cljs.core.chunked_seq_QMARK_(inst_34067);
var state_34101__$1 = state_34101;
if(inst_34069){
var statearr_34132_35050 = state_34101__$1;
(statearr_34132_35050[(1)] = (17));

} else {
var statearr_34133_35051 = state_34101__$1;
(statearr_34133_35051[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (16))){
var inst_34085 = (state_34101[(2)]);
var state_34101__$1 = state_34101;
var statearr_34134_35052 = state_34101__$1;
(statearr_34134_35052[(2)] = inst_34085);

(statearr_34134_35052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34102 === (10))){
var inst_34054 = (state_34101[(9)]);
var inst_34056 = (state_34101[(10)]);
var inst_34061 = cljs.core._nth(inst_34054,inst_34056);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(13),out,inst_34061);
} else {
if((state_val_34102 === (18))){
var inst_34067 = (state_34101[(7)]);
var inst_34076 = cljs.core.first(inst_34067);
var state_34101__$1 = state_34101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34101__$1,(20),out,inst_34076);
} else {
if((state_val_34102 === (8))){
var inst_34055 = (state_34101[(8)]);
var inst_34056 = (state_34101[(10)]);
var inst_34058 = (inst_34056 < inst_34055);
var inst_34059 = inst_34058;
var state_34101__$1 = state_34101;
if(cljs.core.truth_(inst_34059)){
var statearr_34135_35053 = state_34101__$1;
(statearr_34135_35053[(1)] = (10));

} else {
var statearr_34136_35054 = state_34101__$1;
(statearr_34136_35054[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____0 = (function (){
var statearr_34137 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34137[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__);

(statearr_34137[(1)] = (1));

return statearr_34137;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____1 = (function (state_34101){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_34101);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e34138){var ex__32743__auto__ = e34138;
var statearr_34139_35061 = state_34101;
(statearr_34139_35061[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_34101[(4)]))){
var statearr_34140_35062 = state_34101;
(statearr_34140_35062[(1)] = cljs.core.first((state_34101[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35063 = state_34101;
state_34101 = G__35063;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__ = function(state_34101){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____1.call(this,state_34101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32740__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_34141 = f__32793__auto__();
(statearr_34141[(6)] = c__32792__auto__);

return statearr_34141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

return c__32792__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34143 = arguments.length;
switch (G__34143) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34145 = arguments.length;
switch (G__34145) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34147 = arguments.length;
switch (G__34147) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___35067 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_34171){
var state_val_34172 = (state_34171[(1)]);
if((state_val_34172 === (7))){
var inst_34166 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34173_35074 = state_34171__$1;
(statearr_34173_35074[(2)] = inst_34166);

(statearr_34173_35074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (1))){
var inst_34148 = null;
var state_34171__$1 = (function (){var statearr_34174 = state_34171;
(statearr_34174[(7)] = inst_34148);

return statearr_34174;
})();
var statearr_34175_35075 = state_34171__$1;
(statearr_34175_35075[(2)] = null);

(statearr_34175_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (4))){
var inst_34151 = (state_34171[(8)]);
var inst_34151__$1 = (state_34171[(2)]);
var inst_34152 = (inst_34151__$1 == null);
var inst_34153 = cljs.core.not(inst_34152);
var state_34171__$1 = (function (){var statearr_34176 = state_34171;
(statearr_34176[(8)] = inst_34151__$1);

return statearr_34176;
})();
if(inst_34153){
var statearr_34177_35076 = state_34171__$1;
(statearr_34177_35076[(1)] = (5));

} else {
var statearr_34178_35077 = state_34171__$1;
(statearr_34178_35077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (6))){
var state_34171__$1 = state_34171;
var statearr_34179_35078 = state_34171__$1;
(statearr_34179_35078[(2)] = null);

(statearr_34179_35078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (3))){
var inst_34168 = (state_34171[(2)]);
var inst_34169 = cljs.core.async.close_BANG_(out);
var state_34171__$1 = (function (){var statearr_34180 = state_34171;
(statearr_34180[(9)] = inst_34168);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34171__$1,inst_34169);
} else {
if((state_val_34172 === (2))){
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34171__$1,(4),ch);
} else {
if((state_val_34172 === (11))){
var inst_34151 = (state_34171[(8)]);
var inst_34160 = (state_34171[(2)]);
var inst_34148 = inst_34151;
var state_34171__$1 = (function (){var statearr_34181 = state_34171;
(statearr_34181[(10)] = inst_34160);

(statearr_34181[(7)] = inst_34148);

return statearr_34181;
})();
var statearr_34182_35079 = state_34171__$1;
(statearr_34182_35079[(2)] = null);

(statearr_34182_35079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (9))){
var inst_34151 = (state_34171[(8)]);
var state_34171__$1 = state_34171;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34171__$1,(11),out,inst_34151);
} else {
if((state_val_34172 === (5))){
var inst_34148 = (state_34171[(7)]);
var inst_34151 = (state_34171[(8)]);
var inst_34155 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34151,inst_34148);
var state_34171__$1 = state_34171;
if(inst_34155){
var statearr_34184_35080 = state_34171__$1;
(statearr_34184_35080[(1)] = (8));

} else {
var statearr_34185_35081 = state_34171__$1;
(statearr_34185_35081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (10))){
var inst_34163 = (state_34171[(2)]);
var state_34171__$1 = state_34171;
var statearr_34186_35082 = state_34171__$1;
(statearr_34186_35082[(2)] = inst_34163);

(statearr_34186_35082[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34172 === (8))){
var inst_34148 = (state_34171[(7)]);
var tmp34183 = inst_34148;
var inst_34148__$1 = tmp34183;
var state_34171__$1 = (function (){var statearr_34187 = state_34171;
(statearr_34187[(7)] = inst_34148__$1);

return statearr_34187;
})();
var statearr_34188_35089 = state_34171__$1;
(statearr_34188_35089[(2)] = null);

(statearr_34188_35089[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_34189 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34189[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_34189[(1)] = (1));

return statearr_34189;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_34171){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_34171);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e34190){var ex__32743__auto__ = e34190;
var statearr_34191_35090 = state_34171;
(statearr_34191_35090[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_34171[(4)]))){
var statearr_34192_35091 = state_34171;
(statearr_34192_35091[(1)] = cljs.core.first((state_34171[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35092 = state_34171;
state_34171 = G__35092;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_34193 = f__32793__auto__();
(statearr_34193[(6)] = c__32792__auto___35067);

return statearr_34193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34195 = arguments.length;
switch (G__34195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___35094 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_34233){
var state_val_34234 = (state_34233[(1)]);
if((state_val_34234 === (7))){
var inst_34229 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34235_35095 = state_34233__$1;
(statearr_34235_35095[(2)] = inst_34229);

(statearr_34235_35095[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (1))){
var inst_34196 = (new Array(n));
var inst_34197 = inst_34196;
var inst_34198 = (0);
var state_34233__$1 = (function (){var statearr_34236 = state_34233;
(statearr_34236[(7)] = inst_34198);

(statearr_34236[(8)] = inst_34197);

return statearr_34236;
})();
var statearr_34237_35096 = state_34233__$1;
(statearr_34237_35096[(2)] = null);

(statearr_34237_35096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (4))){
var inst_34201 = (state_34233[(9)]);
var inst_34201__$1 = (state_34233[(2)]);
var inst_34202 = (inst_34201__$1 == null);
var inst_34203 = cljs.core.not(inst_34202);
var state_34233__$1 = (function (){var statearr_34238 = state_34233;
(statearr_34238[(9)] = inst_34201__$1);

return statearr_34238;
})();
if(inst_34203){
var statearr_34239_35097 = state_34233__$1;
(statearr_34239_35097[(1)] = (5));

} else {
var statearr_34240_35098 = state_34233__$1;
(statearr_34240_35098[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (15))){
var inst_34223 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34241_35099 = state_34233__$1;
(statearr_34241_35099[(2)] = inst_34223);

(statearr_34241_35099[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (13))){
var state_34233__$1 = state_34233;
var statearr_34242_35102 = state_34233__$1;
(statearr_34242_35102[(2)] = null);

(statearr_34242_35102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (6))){
var inst_34198 = (state_34233[(7)]);
var inst_34219 = (inst_34198 > (0));
var state_34233__$1 = state_34233;
if(cljs.core.truth_(inst_34219)){
var statearr_34243_35103 = state_34233__$1;
(statearr_34243_35103[(1)] = (12));

} else {
var statearr_34244_35104 = state_34233__$1;
(statearr_34244_35104[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (3))){
var inst_34231 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34233__$1,inst_34231);
} else {
if((state_val_34234 === (12))){
var inst_34197 = (state_34233[(8)]);
var inst_34221 = cljs.core.vec(inst_34197);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34233__$1,(15),out,inst_34221);
} else {
if((state_val_34234 === (2))){
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34233__$1,(4),ch);
} else {
if((state_val_34234 === (11))){
var inst_34213 = (state_34233[(2)]);
var inst_34214 = (new Array(n));
var inst_34197 = inst_34214;
var inst_34198 = (0);
var state_34233__$1 = (function (){var statearr_34245 = state_34233;
(statearr_34245[(7)] = inst_34198);

(statearr_34245[(10)] = inst_34213);

(statearr_34245[(8)] = inst_34197);

return statearr_34245;
})();
var statearr_34246_35105 = state_34233__$1;
(statearr_34246_35105[(2)] = null);

(statearr_34246_35105[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (9))){
var inst_34197 = (state_34233[(8)]);
var inst_34211 = cljs.core.vec(inst_34197);
var state_34233__$1 = state_34233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34233__$1,(11),out,inst_34211);
} else {
if((state_val_34234 === (5))){
var inst_34198 = (state_34233[(7)]);
var inst_34201 = (state_34233[(9)]);
var inst_34206 = (state_34233[(11)]);
var inst_34197 = (state_34233[(8)]);
var inst_34205 = (inst_34197[inst_34198] = inst_34201);
var inst_34206__$1 = (inst_34198 + (1));
var inst_34207 = (inst_34206__$1 < n);
var state_34233__$1 = (function (){var statearr_34247 = state_34233;
(statearr_34247[(12)] = inst_34205);

(statearr_34247[(11)] = inst_34206__$1);

return statearr_34247;
})();
if(cljs.core.truth_(inst_34207)){
var statearr_34248_35106 = state_34233__$1;
(statearr_34248_35106[(1)] = (8));

} else {
var statearr_34249_35107 = state_34233__$1;
(statearr_34249_35107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (14))){
var inst_34226 = (state_34233[(2)]);
var inst_34227 = cljs.core.async.close_BANG_(out);
var state_34233__$1 = (function (){var statearr_34251 = state_34233;
(statearr_34251[(13)] = inst_34226);

return statearr_34251;
})();
var statearr_34252_35109 = state_34233__$1;
(statearr_34252_35109[(2)] = inst_34227);

(statearr_34252_35109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (10))){
var inst_34217 = (state_34233[(2)]);
var state_34233__$1 = state_34233;
var statearr_34253_35111 = state_34233__$1;
(statearr_34253_35111[(2)] = inst_34217);

(statearr_34253_35111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34234 === (8))){
var inst_34206 = (state_34233[(11)]);
var inst_34197 = (state_34233[(8)]);
var tmp34250 = inst_34197;
var inst_34197__$1 = tmp34250;
var inst_34198 = inst_34206;
var state_34233__$1 = (function (){var statearr_34254 = state_34233;
(statearr_34254[(7)] = inst_34198);

(statearr_34254[(8)] = inst_34197__$1);

return statearr_34254;
})();
var statearr_34255_35112 = state_34233__$1;
(statearr_34255_35112[(2)] = null);

(statearr_34255_35112[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_34256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34256[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_34256[(1)] = (1));

return statearr_34256;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_34233){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_34233);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e34257){var ex__32743__auto__ = e34257;
var statearr_34258_35113 = state_34233;
(statearr_34258_35113[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_34233[(4)]))){
var statearr_34259_35114 = state_34233;
(statearr_34259_35114[(1)] = cljs.core.first((state_34233[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35115 = state_34233;
state_34233 = G__35115;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_34233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_34233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_34260 = f__32793__auto__();
(statearr_34260[(6)] = c__32792__auto___35094);

return statearr_34260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34262 = arguments.length;
switch (G__34262) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__32792__auto___35123 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_34304){
var state_val_34305 = (state_34304[(1)]);
if((state_val_34305 === (7))){
var inst_34300 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34306_35124 = state_34304__$1;
(statearr_34306_35124[(2)] = inst_34300);

(statearr_34306_35124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (1))){
var inst_34263 = [];
var inst_34264 = inst_34263;
var inst_34265 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34304__$1 = (function (){var statearr_34307 = state_34304;
(statearr_34307[(7)] = inst_34264);

(statearr_34307[(8)] = inst_34265);

return statearr_34307;
})();
var statearr_34308_35126 = state_34304__$1;
(statearr_34308_35126[(2)] = null);

(statearr_34308_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (4))){
var inst_34268 = (state_34304[(9)]);
var inst_34268__$1 = (state_34304[(2)]);
var inst_34269 = (inst_34268__$1 == null);
var inst_34270 = cljs.core.not(inst_34269);
var state_34304__$1 = (function (){var statearr_34309 = state_34304;
(statearr_34309[(9)] = inst_34268__$1);

return statearr_34309;
})();
if(inst_34270){
var statearr_34310_35128 = state_34304__$1;
(statearr_34310_35128[(1)] = (5));

} else {
var statearr_34311_35129 = state_34304__$1;
(statearr_34311_35129[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (15))){
var inst_34294 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34312_35132 = state_34304__$1;
(statearr_34312_35132[(2)] = inst_34294);

(statearr_34312_35132[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (13))){
var state_34304__$1 = state_34304;
var statearr_34313_35134 = state_34304__$1;
(statearr_34313_35134[(2)] = null);

(statearr_34313_35134[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (6))){
var inst_34264 = (state_34304[(7)]);
var inst_34289 = inst_34264.length;
var inst_34290 = (inst_34289 > (0));
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34290)){
var statearr_34314_35135 = state_34304__$1;
(statearr_34314_35135[(1)] = (12));

} else {
var statearr_34315_35136 = state_34304__$1;
(statearr_34315_35136[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (3))){
var inst_34302 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34304__$1,inst_34302);
} else {
if((state_val_34305 === (12))){
var inst_34264 = (state_34304[(7)]);
var inst_34292 = cljs.core.vec(inst_34264);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(15),out,inst_34292);
} else {
if((state_val_34305 === (2))){
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(4),ch);
} else {
if((state_val_34305 === (11))){
var inst_34268 = (state_34304[(9)]);
var inst_34272 = (state_34304[(10)]);
var inst_34282 = (state_34304[(2)]);
var inst_34283 = [];
var inst_34284 = inst_34283.push(inst_34268);
var inst_34264 = inst_34283;
var inst_34265 = inst_34272;
var state_34304__$1 = (function (){var statearr_34316 = state_34304;
(statearr_34316[(11)] = inst_34284);

(statearr_34316[(7)] = inst_34264);

(statearr_34316[(8)] = inst_34265);

(statearr_34316[(12)] = inst_34282);

return statearr_34316;
})();
var statearr_34317_35138 = state_34304__$1;
(statearr_34317_35138[(2)] = null);

(statearr_34317_35138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (9))){
var inst_34264 = (state_34304[(7)]);
var inst_34280 = cljs.core.vec(inst_34264);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(11),out,inst_34280);
} else {
if((state_val_34305 === (5))){
var inst_34268 = (state_34304[(9)]);
var inst_34272 = (state_34304[(10)]);
var inst_34265 = (state_34304[(8)]);
var inst_34272__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34268) : f.call(null,inst_34268));
var inst_34273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34272__$1,inst_34265);
var inst_34274 = cljs.core.keyword_identical_QMARK_(inst_34265,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34275 = ((inst_34273) || (inst_34274));
var state_34304__$1 = (function (){var statearr_34318 = state_34304;
(statearr_34318[(10)] = inst_34272__$1);

return statearr_34318;
})();
if(cljs.core.truth_(inst_34275)){
var statearr_34319_35139 = state_34304__$1;
(statearr_34319_35139[(1)] = (8));

} else {
var statearr_34320_35140 = state_34304__$1;
(statearr_34320_35140[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (14))){
var inst_34297 = (state_34304[(2)]);
var inst_34298 = cljs.core.async.close_BANG_(out);
var state_34304__$1 = (function (){var statearr_34322 = state_34304;
(statearr_34322[(13)] = inst_34297);

return statearr_34322;
})();
var statearr_34323_35141 = state_34304__$1;
(statearr_34323_35141[(2)] = inst_34298);

(statearr_34323_35141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (10))){
var inst_34287 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34324_35142 = state_34304__$1;
(statearr_34324_35142[(2)] = inst_34287);

(statearr_34324_35142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (8))){
var inst_34268 = (state_34304[(9)]);
var inst_34272 = (state_34304[(10)]);
var inst_34264 = (state_34304[(7)]);
var inst_34277 = inst_34264.push(inst_34268);
var tmp34321 = inst_34264;
var inst_34264__$1 = tmp34321;
var inst_34265 = inst_34272;
var state_34304__$1 = (function (){var statearr_34325 = state_34304;
(statearr_34325[(7)] = inst_34264__$1);

(statearr_34325[(8)] = inst_34265);

(statearr_34325[(14)] = inst_34277);

return statearr_34325;
})();
var statearr_34326_35144 = state_34304__$1;
(statearr_34326_35144[(2)] = null);

(statearr_34326_35144[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__32740__auto__ = null;
var cljs$core$async$state_machine__32740__auto____0 = (function (){
var statearr_34327 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34327[(0)] = cljs$core$async$state_machine__32740__auto__);

(statearr_34327[(1)] = (1));

return statearr_34327;
});
var cljs$core$async$state_machine__32740__auto____1 = (function (state_34304){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_34304);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e34328){var ex__32743__auto__ = e34328;
var statearr_34329_35146 = state_34304;
(statearr_34329_35146[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_34304[(4)]))){
var statearr_34330_35147 = state_34304;
(statearr_34330_35147[(1)] = cljs.core.first((state_34304[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35148 = state_34304;
state_34304 = G__35148;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
cljs$core$async$state_machine__32740__auto__ = function(state_34304){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32740__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32740__auto____1.call(this,state_34304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32740__auto____0;
cljs$core$async$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32740__auto____1;
return cljs$core$async$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_34331 = f__32793__auto__();
(statearr_34331[(6)] = c__32792__auto___35123);

return statearr_34331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
