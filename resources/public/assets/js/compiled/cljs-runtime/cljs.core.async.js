goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46009 = arguments.length;
switch (G__46009) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46013 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46013 = (function (f,blockable,meta46014){
this.f = f;
this.blockable = blockable;
this.meta46014 = meta46014;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46015,meta46014__$1){
var self__ = this;
var _46015__$1 = this;
return (new cljs.core.async.t_cljs$core$async46013(self__.f,self__.blockable,meta46014__$1));
}));

(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46015){
var self__ = this;
var _46015__$1 = this;
return self__.meta46014;
}));

(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46013.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46014","meta46014",1900974194,null)], null);
}));

(cljs.core.async.t_cljs$core$async46013.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46013.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46013");

(cljs.core.async.t_cljs$core$async46013.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46013");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46013.
 */
cljs.core.async.__GT_t_cljs$core$async46013 = (function cljs$core$async$__GT_t_cljs$core$async46013(f__$1,blockable__$1,meta46014){
return (new cljs.core.async.t_cljs$core$async46013(f__$1,blockable__$1,meta46014));
});

}

return (new cljs.core.async.t_cljs$core$async46013(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46051 = arguments.length;
switch (G__46051) {
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
var G__46067 = arguments.length;
switch (G__46067) {
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
var G__46085 = arguments.length;
switch (G__46085) {
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
var val_48548 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48548) : fn1.call(null,val_48548));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48548) : fn1.call(null,val_48548));
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
var G__46105 = arguments.length;
switch (G__46105) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4706__auto___48554 = n;
var x_48555 = (0);
while(true){
if((x_48555 < n__4706__auto___48554)){
(a[x_48555] = x_48555);

var G__48556 = (x_48555 + (1));
x_48555 = G__48556;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46112 = (function (flag,meta46113){
this.flag = flag;
this.meta46113 = meta46113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46114,meta46113__$1){
var self__ = this;
var _46114__$1 = this;
return (new cljs.core.async.t_cljs$core$async46112(self__.flag,meta46113__$1));
}));

(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46114){
var self__ = this;
var _46114__$1 = this;
return self__.meta46113;
}));

(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46113","meta46113",349534456,null)], null);
}));

(cljs.core.async.t_cljs$core$async46112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46112");

(cljs.core.async.t_cljs$core$async46112.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46112.
 */
cljs.core.async.__GT_t_cljs$core$async46112 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46112(flag__$1,meta46113){
return (new cljs.core.async.t_cljs$core$async46112(flag__$1,meta46113));
});

}

return (new cljs.core.async.t_cljs$core$async46112(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46125 = (function (flag,cb,meta46126){
this.flag = flag;
this.cb = cb;
this.meta46126 = meta46126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46127,meta46126__$1){
var self__ = this;
var _46127__$1 = this;
return (new cljs.core.async.t_cljs$core$async46125(self__.flag,self__.cb,meta46126__$1));
}));

(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46127){
var self__ = this;
var _46127__$1 = this;
return self__.meta46126;
}));

(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46125.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46126","meta46126",-681456696,null)], null);
}));

(cljs.core.async.t_cljs$core$async46125.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46125.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46125");

(cljs.core.async.t_cljs$core$async46125.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46125");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46125.
 */
cljs.core.async.__GT_t_cljs$core$async46125 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46125(flag__$1,cb__$1,meta46126){
return (new cljs.core.async.t_cljs$core$async46125(flag__$1,cb__$1,meta46126));
});

}

return (new cljs.core.async.t_cljs$core$async46125(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46136_SHARP_){
var G__46142 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46136_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46142) : fret.call(null,G__46142));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46137_SHARP_){
var G__46146 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46137_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46146) : fret.call(null,G__46146));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48559 = (i + (1));
i = G__48559;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4835__auto__ = [];
var len__4829__auto___48561 = arguments.length;
var i__4830__auto___48562 = (0);
while(true){
if((i__4830__auto___48562 < len__4829__auto___48561)){
args__4835__auto__.push((arguments[i__4830__auto___48562]));

var G__48563 = (i__4830__auto___48562 + (1));
i__4830__auto___48562 = G__48563;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46150){
var map__46151 = p__46150;
var map__46151__$1 = cljs.core.__destructure_map(map__46151);
var opts = map__46151__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46147){
var G__46149 = cljs.core.first(seq46147);
var seq46147__$1 = cljs.core.next(seq46147);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46149,seq46147__$1);
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
var G__46160 = arguments.length;
switch (G__46160) {
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
var c__45936__auto___48569 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46196){
var state_val_46197 = (state_46196[(1)]);
if((state_val_46197 === (7))){
var inst_46192 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
var statearr_46202_48570 = state_46196__$1;
(statearr_46202_48570[(2)] = inst_46192);

(statearr_46202_48570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (1))){
var state_46196__$1 = state_46196;
var statearr_46203_48571 = state_46196__$1;
(statearr_46203_48571[(2)] = null);

(statearr_46203_48571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (4))){
var inst_46170 = (state_46196[(7)]);
var inst_46170__$1 = (state_46196[(2)]);
var inst_46173 = (inst_46170__$1 == null);
var state_46196__$1 = (function (){var statearr_46204 = state_46196;
(statearr_46204[(7)] = inst_46170__$1);

return statearr_46204;
})();
if(cljs.core.truth_(inst_46173)){
var statearr_46205_48572 = state_46196__$1;
(statearr_46205_48572[(1)] = (5));

} else {
var statearr_46206_48573 = state_46196__$1;
(statearr_46206_48573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (13))){
var state_46196__$1 = state_46196;
var statearr_46208_48576 = state_46196__$1;
(statearr_46208_48576[(2)] = null);

(statearr_46208_48576[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (6))){
var inst_46170 = (state_46196[(7)]);
var state_46196__$1 = state_46196;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46196__$1,(11),to,inst_46170);
} else {
if((state_val_46197 === (3))){
var inst_46194 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46196__$1,inst_46194);
} else {
if((state_val_46197 === (12))){
var state_46196__$1 = state_46196;
var statearr_46209_48577 = state_46196__$1;
(statearr_46209_48577[(2)] = null);

(statearr_46209_48577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (2))){
var state_46196__$1 = state_46196;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46196__$1,(4),from);
} else {
if((state_val_46197 === (11))){
var inst_46185 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
if(cljs.core.truth_(inst_46185)){
var statearr_46210_48580 = state_46196__$1;
(statearr_46210_48580[(1)] = (12));

} else {
var statearr_46211_48581 = state_46196__$1;
(statearr_46211_48581[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (9))){
var state_46196__$1 = state_46196;
var statearr_46212_48583 = state_46196__$1;
(statearr_46212_48583[(2)] = null);

(statearr_46212_48583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (5))){
var state_46196__$1 = state_46196;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46213_48584 = state_46196__$1;
(statearr_46213_48584[(1)] = (8));

} else {
var statearr_46214_48585 = state_46196__$1;
(statearr_46214_48585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (14))){
var inst_46190 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
var statearr_46215_48586 = state_46196__$1;
(statearr_46215_48586[(2)] = inst_46190);

(statearr_46215_48586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (10))){
var inst_46182 = (state_46196[(2)]);
var state_46196__$1 = state_46196;
var statearr_46216_48587 = state_46196__$1;
(statearr_46216_48587[(2)] = inst_46182);

(statearr_46216_48587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46197 === (8))){
var inst_46179 = cljs.core.async.close_BANG_(to);
var state_46196__$1 = state_46196;
var statearr_46217_48588 = state_46196__$1;
(statearr_46217_48588[(2)] = inst_46179);

(statearr_46217_48588[(1)] = (10));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_46218 = [null,null,null,null,null,null,null,null];
(statearr_46218[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_46218[(1)] = (1));

return statearr_46218;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_46196){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46196);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46219){var ex__45838__auto__ = e46219;
var statearr_46220_48591 = state_46196;
(statearr_46220_48591[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46196[(4)]))){
var statearr_46221_48592 = state_46196;
(statearr_46221_48592[(1)] = cljs.core.first((state_46196[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48593 = state_46196;
state_46196 = G__48593;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_46196){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_46196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46222 = f__45937__auto__();
(statearr_46222[(6)] = c__45936__auto___48569);

return statearr_46222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var process = (function (p__46225){
var vec__46226 = p__46225;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46226,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46226,(1),null);
var job = vec__46226;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__45936__auto___48597 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46233){
var state_val_46234 = (state_46233[(1)]);
if((state_val_46234 === (1))){
var state_46233__$1 = state_46233;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46233__$1,(2),res,v);
} else {
if((state_val_46234 === (2))){
var inst_46230 = (state_46233[(2)]);
var inst_46231 = cljs.core.async.close_BANG_(res);
var state_46233__$1 = (function (){var statearr_46235 = state_46233;
(statearr_46235[(7)] = inst_46230);

return statearr_46235;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46233__$1,inst_46231);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_46236 = [null,null,null,null,null,null,null,null];
(statearr_46236[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__);

(statearr_46236[(1)] = (1));

return statearr_46236;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1 = (function (state_46233){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46233);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46237){var ex__45838__auto__ = e46237;
var statearr_46238_48600 = state_46233;
(statearr_46238_48600[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46233[(4)]))){
var statearr_46239_48601 = state_46233;
(statearr_46239_48601[(1)] = cljs.core.first((state_46233[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48602 = state_46233;
state_46233 = G__48602;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = function(state_46233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1.call(this,state_46233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46243 = f__45937__auto__();
(statearr_46243[(6)] = c__45936__auto___48597);

return statearr_46243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46248){
var vec__46249 = p__46248;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46249,(1),null);
var job = vec__46249;
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
var n__4706__auto___48607 = n;
var __48608 = (0);
while(true){
if((__48608 < n__4706__auto___48607)){
var G__46253_48609 = type;
var G__46253_48610__$1 = (((G__46253_48609 instanceof cljs.core.Keyword))?G__46253_48609.fqn:null);
switch (G__46253_48610__$1) {
case "compute":
var c__45936__auto___48612 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48608,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = ((function (__48608,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function (state_46266){
var state_val_46267 = (state_46266[(1)]);
if((state_val_46267 === (1))){
var state_46266__$1 = state_46266;
var statearr_46271_48615 = state_46266__$1;
(statearr_46271_48615[(2)] = null);

(statearr_46271_48615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (2))){
var state_46266__$1 = state_46266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46266__$1,(4),jobs);
} else {
if((state_val_46267 === (3))){
var inst_46264 = (state_46266[(2)]);
var state_46266__$1 = state_46266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46266__$1,inst_46264);
} else {
if((state_val_46267 === (4))){
var inst_46256 = (state_46266[(2)]);
var inst_46257 = process(inst_46256);
var state_46266__$1 = state_46266;
if(cljs.core.truth_(inst_46257)){
var statearr_46275_48616 = state_46266__$1;
(statearr_46275_48616[(1)] = (5));

} else {
var statearr_46276_48617 = state_46266__$1;
(statearr_46276_48617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (5))){
var state_46266__$1 = state_46266;
var statearr_46277_48618 = state_46266__$1;
(statearr_46277_48618[(2)] = null);

(statearr_46277_48618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (6))){
var state_46266__$1 = state_46266;
var statearr_46278_48620 = state_46266__$1;
(statearr_46278_48620[(2)] = null);

(statearr_46278_48620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46267 === (7))){
var inst_46262 = (state_46266[(2)]);
var state_46266__$1 = state_46266;
var statearr_46279_48622 = state_46266__$1;
(statearr_46279_48622[(2)] = inst_46262);

(statearr_46279_48622[(1)] = (3));


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
});})(__48608,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
;
return ((function (__48608,switch__45834__auto__,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_46280 = [null,null,null,null,null,null,null];
(statearr_46280[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__);

(statearr_46280[(1)] = (1));

return statearr_46280;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1 = (function (state_46266){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46266);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46281){var ex__45838__auto__ = e46281;
var statearr_46282_48625 = state_46266;
(statearr_46282_48625[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46266[(4)]))){
var statearr_46284_48626 = state_46266;
(statearr_46284_48626[(1)] = cljs.core.first((state_46266[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48628 = state_46266;
state_46266 = G__48628;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = function(state_46266){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1.call(this,state_46266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__;
})()
;})(__48608,switch__45834__auto__,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
})();
var state__45938__auto__ = (function (){var statearr_46293 = f__45937__auto__();
(statearr_46293[(6)] = c__45936__auto___48612);

return statearr_46293;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
});})(__48608,c__45936__auto___48612,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
);


break;
case "async":
var c__45936__auto___48630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48608,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = ((function (__48608,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function (state_46310){
var state_val_46311 = (state_46310[(1)]);
if((state_val_46311 === (1))){
var state_46310__$1 = state_46310;
var statearr_46315_48633 = state_46310__$1;
(statearr_46315_48633[(2)] = null);

(statearr_46315_48633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46311 === (2))){
var state_46310__$1 = state_46310;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46310__$1,(4),jobs);
} else {
if((state_val_46311 === (3))){
var inst_46308 = (state_46310[(2)]);
var state_46310__$1 = state_46310;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46310__$1,inst_46308);
} else {
if((state_val_46311 === (4))){
var inst_46298 = (state_46310[(2)]);
var inst_46301 = async(inst_46298);
var state_46310__$1 = state_46310;
if(cljs.core.truth_(inst_46301)){
var statearr_46319_48634 = state_46310__$1;
(statearr_46319_48634[(1)] = (5));

} else {
var statearr_46320_48636 = state_46310__$1;
(statearr_46320_48636[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46311 === (5))){
var state_46310__$1 = state_46310;
var statearr_46321_48638 = state_46310__$1;
(statearr_46321_48638[(2)] = null);

(statearr_46321_48638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46311 === (6))){
var state_46310__$1 = state_46310;
var statearr_46322_48639 = state_46310__$1;
(statearr_46322_48639[(2)] = null);

(statearr_46322_48639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46311 === (7))){
var inst_46306 = (state_46310[(2)]);
var state_46310__$1 = state_46310;
var statearr_46329_48640 = state_46310__$1;
(statearr_46329_48640[(2)] = inst_46306);

(statearr_46329_48640[(1)] = (3));


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
});})(__48608,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
;
return ((function (__48608,switch__45834__auto__,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_46333 = [null,null,null,null,null,null,null];
(statearr_46333[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__);

(statearr_46333[(1)] = (1));

return statearr_46333;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1 = (function (state_46310){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46310);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46334){var ex__45838__auto__ = e46334;
var statearr_46335_48642 = state_46310;
(statearr_46335_48642[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46310[(4)]))){
var statearr_46336_48643 = state_46310;
(statearr_46336_48643[(1)] = cljs.core.first((state_46310[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48645 = state_46310;
state_46310 = G__48645;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = function(state_46310){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1.call(this,state_46310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__;
})()
;})(__48608,switch__45834__auto__,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
})();
var state__45938__auto__ = (function (){var statearr_46338 = f__45937__auto__();
(statearr_46338[(6)] = c__45936__auto___48630);

return statearr_46338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
});})(__48608,c__45936__auto___48630,G__46253_48609,G__46253_48610__$1,n__4706__auto___48607,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46253_48610__$1)].join('')));

}

var G__48646 = (__48608 + (1));
__48608 = G__48646;
continue;
} else {
}
break;
}

var c__45936__auto___48647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46360){
var state_val_46361 = (state_46360[(1)]);
if((state_val_46361 === (7))){
var inst_46356 = (state_46360[(2)]);
var state_46360__$1 = state_46360;
var statearr_46366_48649 = state_46360__$1;
(statearr_46366_48649[(2)] = inst_46356);

(statearr_46366_48649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (1))){
var state_46360__$1 = state_46360;
var statearr_46367_48651 = state_46360__$1;
(statearr_46367_48651[(2)] = null);

(statearr_46367_48651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (4))){
var inst_46341 = (state_46360[(7)]);
var inst_46341__$1 = (state_46360[(2)]);
var inst_46342 = (inst_46341__$1 == null);
var state_46360__$1 = (function (){var statearr_46368 = state_46360;
(statearr_46368[(7)] = inst_46341__$1);

return statearr_46368;
})();
if(cljs.core.truth_(inst_46342)){
var statearr_46377_48652 = state_46360__$1;
(statearr_46377_48652[(1)] = (5));

} else {
var statearr_46378_48653 = state_46360__$1;
(statearr_46378_48653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (6))){
var inst_46341 = (state_46360[(7)]);
var inst_46346 = (state_46360[(8)]);
var inst_46346__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46347 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46348 = [inst_46341,inst_46346__$1];
var inst_46349 = (new cljs.core.PersistentVector(null,2,(5),inst_46347,inst_46348,null));
var state_46360__$1 = (function (){var statearr_46379 = state_46360;
(statearr_46379[(8)] = inst_46346__$1);

return statearr_46379;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46360__$1,(8),jobs,inst_46349);
} else {
if((state_val_46361 === (3))){
var inst_46358 = (state_46360[(2)]);
var state_46360__$1 = state_46360;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46360__$1,inst_46358);
} else {
if((state_val_46361 === (2))){
var state_46360__$1 = state_46360;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46360__$1,(4),from);
} else {
if((state_val_46361 === (9))){
var inst_46353 = (state_46360[(2)]);
var state_46360__$1 = (function (){var statearr_46380 = state_46360;
(statearr_46380[(9)] = inst_46353);

return statearr_46380;
})();
var statearr_46382_48657 = state_46360__$1;
(statearr_46382_48657[(2)] = null);

(statearr_46382_48657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (5))){
var inst_46344 = cljs.core.async.close_BANG_(jobs);
var state_46360__$1 = state_46360;
var statearr_46383_48659 = state_46360__$1;
(statearr_46383_48659[(2)] = inst_46344);

(statearr_46383_48659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46361 === (8))){
var inst_46346 = (state_46360[(8)]);
var inst_46351 = (state_46360[(2)]);
var state_46360__$1 = (function (){var statearr_46384 = state_46360;
(statearr_46384[(10)] = inst_46351);

return statearr_46384;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46360__$1,(9),results,inst_46346);
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
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_46385 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46385[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__);

(statearr_46385[(1)] = (1));

return statearr_46385;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1 = (function (state_46360){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46360);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46386){var ex__45838__auto__ = e46386;
var statearr_46387_48662 = state_46360;
(statearr_46387_48662[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46360[(4)]))){
var statearr_46388_48663 = state_46360;
(statearr_46388_48663[(1)] = cljs.core.first((state_46360[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48664 = state_46360;
state_46360 = G__48664;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = function(state_46360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1.call(this,state_46360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46389 = f__45937__auto__();
(statearr_46389[(6)] = c__45936__auto___48647);

return statearr_46389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


var c__45936__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46430){
var state_val_46431 = (state_46430[(1)]);
if((state_val_46431 === (7))){
var inst_46426 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
var statearr_46435_48665 = state_46430__$1;
(statearr_46435_48665[(2)] = inst_46426);

(statearr_46435_48665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (20))){
var state_46430__$1 = state_46430;
var statearr_46436_48666 = state_46430__$1;
(statearr_46436_48666[(2)] = null);

(statearr_46436_48666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (1))){
var state_46430__$1 = state_46430;
var statearr_46437_48667 = state_46430__$1;
(statearr_46437_48667[(2)] = null);

(statearr_46437_48667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (4))){
var inst_46392 = (state_46430[(7)]);
var inst_46392__$1 = (state_46430[(2)]);
var inst_46393 = (inst_46392__$1 == null);
var state_46430__$1 = (function (){var statearr_46438 = state_46430;
(statearr_46438[(7)] = inst_46392__$1);

return statearr_46438;
})();
if(cljs.core.truth_(inst_46393)){
var statearr_46442_48670 = state_46430__$1;
(statearr_46442_48670[(1)] = (5));

} else {
var statearr_46443_48671 = state_46430__$1;
(statearr_46443_48671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (15))){
var inst_46408 = (state_46430[(8)]);
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46430__$1,(18),to,inst_46408);
} else {
if((state_val_46431 === (21))){
var inst_46421 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
var statearr_46444_48672 = state_46430__$1;
(statearr_46444_48672[(2)] = inst_46421);

(statearr_46444_48672[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (13))){
var inst_46423 = (state_46430[(2)]);
var state_46430__$1 = (function (){var statearr_46445 = state_46430;
(statearr_46445[(9)] = inst_46423);

return statearr_46445;
})();
var statearr_46449_48675 = state_46430__$1;
(statearr_46449_48675[(2)] = null);

(statearr_46449_48675[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (6))){
var inst_46392 = (state_46430[(7)]);
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46430__$1,(11),inst_46392);
} else {
if((state_val_46431 === (17))){
var inst_46416 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
if(cljs.core.truth_(inst_46416)){
var statearr_46454_48677 = state_46430__$1;
(statearr_46454_48677[(1)] = (19));

} else {
var statearr_46456_48678 = state_46430__$1;
(statearr_46456_48678[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (3))){
var inst_46428 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46430__$1,inst_46428);
} else {
if((state_val_46431 === (12))){
var inst_46405 = (state_46430[(10)]);
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46430__$1,(14),inst_46405);
} else {
if((state_val_46431 === (2))){
var state_46430__$1 = state_46430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46430__$1,(4),results);
} else {
if((state_val_46431 === (19))){
var state_46430__$1 = state_46430;
var statearr_46460_48681 = state_46430__$1;
(statearr_46460_48681[(2)] = null);

(statearr_46460_48681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (11))){
var inst_46405 = (state_46430[(2)]);
var state_46430__$1 = (function (){var statearr_46461 = state_46430;
(statearr_46461[(10)] = inst_46405);

return statearr_46461;
})();
var statearr_46462_48682 = state_46430__$1;
(statearr_46462_48682[(2)] = null);

(statearr_46462_48682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (9))){
var state_46430__$1 = state_46430;
var statearr_46463_48687 = state_46430__$1;
(statearr_46463_48687[(2)] = null);

(statearr_46463_48687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (5))){
var state_46430__$1 = state_46430;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46464_48688 = state_46430__$1;
(statearr_46464_48688[(1)] = (8));

} else {
var statearr_46465_48689 = state_46430__$1;
(statearr_46465_48689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (14))){
var inst_46410 = (state_46430[(11)]);
var inst_46408 = (state_46430[(8)]);
var inst_46408__$1 = (state_46430[(2)]);
var inst_46409 = (inst_46408__$1 == null);
var inst_46410__$1 = cljs.core.not(inst_46409);
var state_46430__$1 = (function (){var statearr_46466 = state_46430;
(statearr_46466[(11)] = inst_46410__$1);

(statearr_46466[(8)] = inst_46408__$1);

return statearr_46466;
})();
if(inst_46410__$1){
var statearr_46467_48690 = state_46430__$1;
(statearr_46467_48690[(1)] = (15));

} else {
var statearr_46468_48691 = state_46430__$1;
(statearr_46468_48691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (16))){
var inst_46410 = (state_46430[(11)]);
var state_46430__$1 = state_46430;
var statearr_46469_48692 = state_46430__$1;
(statearr_46469_48692[(2)] = inst_46410);

(statearr_46469_48692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (10))){
var inst_46399 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
var statearr_46470_48693 = state_46430__$1;
(statearr_46470_48693[(2)] = inst_46399);

(statearr_46470_48693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (18))){
var inst_46413 = (state_46430[(2)]);
var state_46430__$1 = state_46430;
var statearr_46471_48694 = state_46430__$1;
(statearr_46471_48694[(2)] = inst_46413);

(statearr_46471_48694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46431 === (8))){
var inst_46396 = cljs.core.async.close_BANG_(to);
var state_46430__$1 = state_46430;
var statearr_46473_48699 = state_46430__$1;
(statearr_46473_48699[(2)] = inst_46396);

(statearr_46473_48699[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_46476 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__);

(statearr_46476[(1)] = (1));

return statearr_46476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1 = (function (state_46430){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46430);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46477){var ex__45838__auto__ = e46477;
var statearr_46478_48700 = state_46430;
(statearr_46478_48700[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46430[(4)]))){
var statearr_46479_48701 = state_46430;
(statearr_46479_48701[(1)] = cljs.core.first((state_46430[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48702 = state_46430;
state_46430 = G__48702;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__ = function(state_46430){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1.call(this,state_46430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46480 = f__45937__auto__();
(statearr_46480[(6)] = c__45936__auto__);

return statearr_46480;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

return c__45936__auto__;
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
var G__46484 = arguments.length;
switch (G__46484) {
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
var G__46489 = arguments.length;
switch (G__46489) {
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
var G__46493 = arguments.length;
switch (G__46493) {
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
var c__45936__auto___48709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46521){
var state_val_46522 = (state_46521[(1)]);
if((state_val_46522 === (7))){
var inst_46517 = (state_46521[(2)]);
var state_46521__$1 = state_46521;
var statearr_46523_48710 = state_46521__$1;
(statearr_46523_48710[(2)] = inst_46517);

(statearr_46523_48710[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (1))){
var state_46521__$1 = state_46521;
var statearr_46524_48711 = state_46521__$1;
(statearr_46524_48711[(2)] = null);

(statearr_46524_48711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (4))){
var inst_46498 = (state_46521[(7)]);
var inst_46498__$1 = (state_46521[(2)]);
var inst_46499 = (inst_46498__$1 == null);
var state_46521__$1 = (function (){var statearr_46526 = state_46521;
(statearr_46526[(7)] = inst_46498__$1);

return statearr_46526;
})();
if(cljs.core.truth_(inst_46499)){
var statearr_46527_48712 = state_46521__$1;
(statearr_46527_48712[(1)] = (5));

} else {
var statearr_46528_48713 = state_46521__$1;
(statearr_46528_48713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (13))){
var state_46521__$1 = state_46521;
var statearr_46529_48715 = state_46521__$1;
(statearr_46529_48715[(2)] = null);

(statearr_46529_48715[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (6))){
var inst_46498 = (state_46521[(7)]);
var inst_46504 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46498) : p.call(null,inst_46498));
var state_46521__$1 = state_46521;
if(cljs.core.truth_(inst_46504)){
var statearr_46530_48717 = state_46521__$1;
(statearr_46530_48717[(1)] = (9));

} else {
var statearr_46531_48718 = state_46521__$1;
(statearr_46531_48718[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (3))){
var inst_46519 = (state_46521[(2)]);
var state_46521__$1 = state_46521;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46521__$1,inst_46519);
} else {
if((state_val_46522 === (12))){
var state_46521__$1 = state_46521;
var statearr_46532_48719 = state_46521__$1;
(statearr_46532_48719[(2)] = null);

(statearr_46532_48719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (2))){
var state_46521__$1 = state_46521;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46521__$1,(4),ch);
} else {
if((state_val_46522 === (11))){
var inst_46498 = (state_46521[(7)]);
var inst_46508 = (state_46521[(2)]);
var state_46521__$1 = state_46521;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46521__$1,(8),inst_46508,inst_46498);
} else {
if((state_val_46522 === (9))){
var state_46521__$1 = state_46521;
var statearr_46534_48720 = state_46521__$1;
(statearr_46534_48720[(2)] = tc);

(statearr_46534_48720[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (5))){
var inst_46501 = cljs.core.async.close_BANG_(tc);
var inst_46502 = cljs.core.async.close_BANG_(fc);
var state_46521__$1 = (function (){var statearr_46538 = state_46521;
(statearr_46538[(8)] = inst_46501);

return statearr_46538;
})();
var statearr_46539_48721 = state_46521__$1;
(statearr_46539_48721[(2)] = inst_46502);

(statearr_46539_48721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (14))){
var inst_46515 = (state_46521[(2)]);
var state_46521__$1 = state_46521;
var statearr_46543_48722 = state_46521__$1;
(statearr_46543_48722[(2)] = inst_46515);

(statearr_46543_48722[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (10))){
var state_46521__$1 = state_46521;
var statearr_46544_48723 = state_46521__$1;
(statearr_46544_48723[(2)] = fc);

(statearr_46544_48723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46522 === (8))){
var inst_46510 = (state_46521[(2)]);
var state_46521__$1 = state_46521;
if(cljs.core.truth_(inst_46510)){
var statearr_46549_48724 = state_46521__$1;
(statearr_46549_48724[(1)] = (12));

} else {
var statearr_46550_48725 = state_46521__$1;
(statearr_46550_48725[(1)] = (13));

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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_46551 = [null,null,null,null,null,null,null,null,null];
(statearr_46551[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_46551[(1)] = (1));

return statearr_46551;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_46521){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46521);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46552){var ex__45838__auto__ = e46552;
var statearr_46553_48726 = state_46521;
(statearr_46553_48726[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46521[(4)]))){
var statearr_46554_48727 = state_46521;
(statearr_46554_48727[(1)] = cljs.core.first((state_46521[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48728 = state_46521;
state_46521 = G__48728;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_46521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_46521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46555 = f__45937__auto__();
(statearr_46555[(6)] = c__45936__auto___48709);

return statearr_46555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var c__45936__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46579){
var state_val_46580 = (state_46579[(1)]);
if((state_val_46580 === (7))){
var inst_46573 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46582_48733 = state_46579__$1;
(statearr_46582_48733[(2)] = inst_46573);

(statearr_46582_48733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (1))){
var inst_46556 = init;
var inst_46557 = inst_46556;
var state_46579__$1 = (function (){var statearr_46583 = state_46579;
(statearr_46583[(7)] = inst_46557);

return statearr_46583;
})();
var statearr_46584_48737 = state_46579__$1;
(statearr_46584_48737[(2)] = null);

(statearr_46584_48737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (4))){
var inst_46560 = (state_46579[(8)]);
var inst_46560__$1 = (state_46579[(2)]);
var inst_46561 = (inst_46560__$1 == null);
var state_46579__$1 = (function (){var statearr_46585 = state_46579;
(statearr_46585[(8)] = inst_46560__$1);

return statearr_46585;
})();
if(cljs.core.truth_(inst_46561)){
var statearr_46586_48738 = state_46579__$1;
(statearr_46586_48738[(1)] = (5));

} else {
var statearr_46587_48739 = state_46579__$1;
(statearr_46587_48739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (6))){
var inst_46560 = (state_46579[(8)]);
var inst_46557 = (state_46579[(7)]);
var inst_46564 = (state_46579[(9)]);
var inst_46564__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46557,inst_46560) : f.call(null,inst_46557,inst_46560));
var inst_46565 = cljs.core.reduced_QMARK_(inst_46564__$1);
var state_46579__$1 = (function (){var statearr_46588 = state_46579;
(statearr_46588[(9)] = inst_46564__$1);

return statearr_46588;
})();
if(inst_46565){
var statearr_46589_48742 = state_46579__$1;
(statearr_46589_48742[(1)] = (8));

} else {
var statearr_46590_48746 = state_46579__$1;
(statearr_46590_48746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (3))){
var inst_46575 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46579__$1,inst_46575);
} else {
if((state_val_46580 === (2))){
var state_46579__$1 = state_46579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46579__$1,(4),ch);
} else {
if((state_val_46580 === (9))){
var inst_46564 = (state_46579[(9)]);
var inst_46557 = inst_46564;
var state_46579__$1 = (function (){var statearr_46591 = state_46579;
(statearr_46591[(7)] = inst_46557);

return statearr_46591;
})();
var statearr_46592_48752 = state_46579__$1;
(statearr_46592_48752[(2)] = null);

(statearr_46592_48752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (5))){
var inst_46557 = (state_46579[(7)]);
var state_46579__$1 = state_46579;
var statearr_46593_48756 = state_46579__$1;
(statearr_46593_48756[(2)] = inst_46557);

(statearr_46593_48756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (10))){
var inst_46571 = (state_46579[(2)]);
var state_46579__$1 = state_46579;
var statearr_46594_48757 = state_46579__$1;
(statearr_46594_48757[(2)] = inst_46571);

(statearr_46594_48757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46580 === (8))){
var inst_46564 = (state_46579[(9)]);
var inst_46567 = cljs.core.deref(inst_46564);
var state_46579__$1 = state_46579;
var statearr_46595_48758 = state_46579__$1;
(statearr_46595_48758[(2)] = inst_46567);

(statearr_46595_48758[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__45835__auto__ = null;
var cljs$core$async$reduce_$_state_machine__45835__auto____0 = (function (){
var statearr_46596 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46596[(0)] = cljs$core$async$reduce_$_state_machine__45835__auto__);

(statearr_46596[(1)] = (1));

return statearr_46596;
});
var cljs$core$async$reduce_$_state_machine__45835__auto____1 = (function (state_46579){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46579);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46597){var ex__45838__auto__ = e46597;
var statearr_46598_48763 = state_46579;
(statearr_46598_48763[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46579[(4)]))){
var statearr_46599_48764 = state_46579;
(statearr_46599_48764[(1)] = cljs.core.first((state_46579[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48765 = state_46579;
state_46579 = G__48765;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__45835__auto__ = function(state_46579){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__45835__auto____1.call(this,state_46579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__45835__auto____0;
cljs$core$async$reduce_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__45835__auto____1;
return cljs$core$async$reduce_$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46602 = f__45937__auto__();
(statearr_46602[(6)] = c__45936__auto__);

return statearr_46602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

return c__45936__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__45936__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46613){
var state_val_46614 = (state_46613[(1)]);
if((state_val_46614 === (1))){
var inst_46606 = cljs.core.async.reduce(f__$1,init,ch);
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46613__$1,(2),inst_46606);
} else {
if((state_val_46614 === (2))){
var inst_46608 = (state_46613[(2)]);
var inst_46609 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46608) : f__$1.call(null,inst_46608));
var state_46613__$1 = state_46613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46613__$1,inst_46609);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__45835__auto__ = null;
var cljs$core$async$transduce_$_state_machine__45835__auto____0 = (function (){
var statearr_46626 = [null,null,null,null,null,null,null];
(statearr_46626[(0)] = cljs$core$async$transduce_$_state_machine__45835__auto__);

(statearr_46626[(1)] = (1));

return statearr_46626;
});
var cljs$core$async$transduce_$_state_machine__45835__auto____1 = (function (state_46613){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46613);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46627){var ex__45838__auto__ = e46627;
var statearr_46632_48773 = state_46613;
(statearr_46632_48773[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46613[(4)]))){
var statearr_46633_48774 = state_46613;
(statearr_46633_48774[(1)] = cljs.core.first((state_46613[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48775 = state_46613;
state_46613 = G__48775;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__45835__auto__ = function(state_46613){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__45835__auto____1.call(this,state_46613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__45835__auto____0;
cljs$core$async$transduce_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__45835__auto____1;
return cljs$core$async$transduce_$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46634 = f__45937__auto__();
(statearr_46634[(6)] = c__45936__auto__);

return statearr_46634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

return c__45936__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__46638 = arguments.length;
switch (G__46638) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__45936__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46663){
var state_val_46664 = (state_46663[(1)]);
if((state_val_46664 === (7))){
var inst_46645 = (state_46663[(2)]);
var state_46663__$1 = state_46663;
var statearr_46665_48785 = state_46663__$1;
(statearr_46665_48785[(2)] = inst_46645);

(statearr_46665_48785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (1))){
var inst_46639 = cljs.core.seq(coll);
var inst_46640 = inst_46639;
var state_46663__$1 = (function (){var statearr_46666 = state_46663;
(statearr_46666[(7)] = inst_46640);

return statearr_46666;
})();
var statearr_46667_48788 = state_46663__$1;
(statearr_46667_48788[(2)] = null);

(statearr_46667_48788[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (4))){
var inst_46640 = (state_46663[(7)]);
var inst_46643 = cljs.core.first(inst_46640);
var state_46663__$1 = state_46663;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46663__$1,(7),ch,inst_46643);
} else {
if((state_val_46664 === (13))){
var inst_46657 = (state_46663[(2)]);
var state_46663__$1 = state_46663;
var statearr_46668_48789 = state_46663__$1;
(statearr_46668_48789[(2)] = inst_46657);

(statearr_46668_48789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (6))){
var inst_46648 = (state_46663[(2)]);
var state_46663__$1 = state_46663;
if(cljs.core.truth_(inst_46648)){
var statearr_46669_48793 = state_46663__$1;
(statearr_46669_48793[(1)] = (8));

} else {
var statearr_46670_48796 = state_46663__$1;
(statearr_46670_48796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (3))){
var inst_46661 = (state_46663[(2)]);
var state_46663__$1 = state_46663;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46663__$1,inst_46661);
} else {
if((state_val_46664 === (12))){
var state_46663__$1 = state_46663;
var statearr_46677_48797 = state_46663__$1;
(statearr_46677_48797[(2)] = null);

(statearr_46677_48797[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (2))){
var inst_46640 = (state_46663[(7)]);
var state_46663__$1 = state_46663;
if(cljs.core.truth_(inst_46640)){
var statearr_46678_48800 = state_46663__$1;
(statearr_46678_48800[(1)] = (4));

} else {
var statearr_46679_48801 = state_46663__$1;
(statearr_46679_48801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (11))){
var inst_46654 = cljs.core.async.close_BANG_(ch);
var state_46663__$1 = state_46663;
var statearr_46680_48802 = state_46663__$1;
(statearr_46680_48802[(2)] = inst_46654);

(statearr_46680_48802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (9))){
var state_46663__$1 = state_46663;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46683_48803 = state_46663__$1;
(statearr_46683_48803[(1)] = (11));

} else {
var statearr_46684_48804 = state_46663__$1;
(statearr_46684_48804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (5))){
var inst_46640 = (state_46663[(7)]);
var state_46663__$1 = state_46663;
var statearr_46685_48806 = state_46663__$1;
(statearr_46685_48806[(2)] = inst_46640);

(statearr_46685_48806[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (10))){
var inst_46659 = (state_46663[(2)]);
var state_46663__$1 = state_46663;
var statearr_46687_48807 = state_46663__$1;
(statearr_46687_48807[(2)] = inst_46659);

(statearr_46687_48807[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46664 === (8))){
var inst_46640 = (state_46663[(7)]);
var inst_46650 = cljs.core.next(inst_46640);
var inst_46640__$1 = inst_46650;
var state_46663__$1 = (function (){var statearr_46688 = state_46663;
(statearr_46688[(7)] = inst_46640__$1);

return statearr_46688;
})();
var statearr_46690_48808 = state_46663__$1;
(statearr_46690_48808[(2)] = null);

(statearr_46690_48808[(1)] = (2));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_46691 = [null,null,null,null,null,null,null,null];
(statearr_46691[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_46691[(1)] = (1));

return statearr_46691;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_46663){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46663);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e46692){var ex__45838__auto__ = e46692;
var statearr_46693_48811 = state_46663;
(statearr_46693_48811[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46663[(4)]))){
var statearr_46694_48812 = state_46663;
(statearr_46694_48812[(1)] = cljs.core.first((state_46663[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48813 = state_46663;
state_46663 = G__48813;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_46663){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_46663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_46696 = f__45937__auto__();
(statearr_46696[(6)] = c__45936__auto__);

return statearr_46696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

return c__45936__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__46704 = arguments.length;
switch (G__46704) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48819 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48819(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48820 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48820(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48823 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48823(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48826 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48826(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46739 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46739 = (function (ch,cs,meta46740){
this.ch = ch;
this.cs = cs;
this.meta46740 = meta46740;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46741,meta46740__$1){
var self__ = this;
var _46741__$1 = this;
return (new cljs.core.async.t_cljs$core$async46739(self__.ch,self__.cs,meta46740__$1));
}));

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46741){
var self__ = this;
var _46741__$1 = this;
return self__.meta46740;
}));

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46739.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46739.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46740","meta46740",1792038225,null)], null);
}));

(cljs.core.async.t_cljs$core$async46739.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46739.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46739");

(cljs.core.async.t_cljs$core$async46739.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async46739");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46739.
 */
cljs.core.async.__GT_t_cljs$core$async46739 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46739(ch__$1,cs__$1,meta46740){
return (new cljs.core.async.t_cljs$core$async46739(ch__$1,cs__$1,meta46740));
});

}

return (new cljs.core.async.t_cljs$core$async46739(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__45936__auto___48837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_46905){
var state_val_46906 = (state_46905[(1)]);
if((state_val_46906 === (7))){
var inst_46901 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46915_48838 = state_46905__$1;
(statearr_46915_48838[(2)] = inst_46901);

(statearr_46915_48838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (20))){
var inst_46792 = (state_46905[(7)]);
var inst_46804 = cljs.core.first(inst_46792);
var inst_46805 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46804,(0),null);
var inst_46806 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46804,(1),null);
var state_46905__$1 = (function (){var statearr_46917 = state_46905;
(statearr_46917[(8)] = inst_46805);

return statearr_46917;
})();
if(cljs.core.truth_(inst_46806)){
var statearr_46918_48844 = state_46905__$1;
(statearr_46918_48844[(1)] = (22));

} else {
var statearr_46922_48845 = state_46905__$1;
(statearr_46922_48845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (27))){
var inst_46761 = (state_46905[(9)]);
var inst_46847 = (state_46905[(10)]);
var inst_46842 = (state_46905[(11)]);
var inst_46840 = (state_46905[(12)]);
var inst_46847__$1 = cljs.core._nth(inst_46840,inst_46842);
var inst_46852 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46847__$1,inst_46761,done);
var state_46905__$1 = (function (){var statearr_46926 = state_46905;
(statearr_46926[(10)] = inst_46847__$1);

return statearr_46926;
})();
if(cljs.core.truth_(inst_46852)){
var statearr_46927_48847 = state_46905__$1;
(statearr_46927_48847[(1)] = (30));

} else {
var statearr_46928_48848 = state_46905__$1;
(statearr_46928_48848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (1))){
var state_46905__$1 = state_46905;
var statearr_46929_48850 = state_46905__$1;
(statearr_46929_48850[(2)] = null);

(statearr_46929_48850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (24))){
var inst_46792 = (state_46905[(7)]);
var inst_46811 = (state_46905[(2)]);
var inst_46812 = cljs.core.next(inst_46792);
var inst_46770 = inst_46812;
var inst_46771 = null;
var inst_46772 = (0);
var inst_46773 = (0);
var state_46905__$1 = (function (){var statearr_46933 = state_46905;
(statearr_46933[(13)] = inst_46773);

(statearr_46933[(14)] = inst_46811);

(statearr_46933[(15)] = inst_46770);

(statearr_46933[(16)] = inst_46772);

(statearr_46933[(17)] = inst_46771);

return statearr_46933;
})();
var statearr_46934_48853 = state_46905__$1;
(statearr_46934_48853[(2)] = null);

(statearr_46934_48853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (39))){
var state_46905__$1 = state_46905;
var statearr_46938_48854 = state_46905__$1;
(statearr_46938_48854[(2)] = null);

(statearr_46938_48854[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (4))){
var inst_46761 = (state_46905[(9)]);
var inst_46761__$1 = (state_46905[(2)]);
var inst_46762 = (inst_46761__$1 == null);
var state_46905__$1 = (function (){var statearr_46939 = state_46905;
(statearr_46939[(9)] = inst_46761__$1);

return statearr_46939;
})();
if(cljs.core.truth_(inst_46762)){
var statearr_46940_48855 = state_46905__$1;
(statearr_46940_48855[(1)] = (5));

} else {
var statearr_46941_48856 = state_46905__$1;
(statearr_46941_48856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (15))){
var inst_46773 = (state_46905[(13)]);
var inst_46770 = (state_46905[(15)]);
var inst_46772 = (state_46905[(16)]);
var inst_46771 = (state_46905[(17)]);
var inst_46788 = (state_46905[(2)]);
var inst_46789 = (inst_46773 + (1));
var tmp46935 = inst_46770;
var tmp46936 = inst_46772;
var tmp46937 = inst_46771;
var inst_46770__$1 = tmp46935;
var inst_46771__$1 = tmp46937;
var inst_46772__$1 = tmp46936;
var inst_46773__$1 = inst_46789;
var state_46905__$1 = (function (){var statearr_46942 = state_46905;
(statearr_46942[(13)] = inst_46773__$1);

(statearr_46942[(18)] = inst_46788);

(statearr_46942[(15)] = inst_46770__$1);

(statearr_46942[(16)] = inst_46772__$1);

(statearr_46942[(17)] = inst_46771__$1);

return statearr_46942;
})();
var statearr_46946_48857 = state_46905__$1;
(statearr_46946_48857[(2)] = null);

(statearr_46946_48857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (21))){
var inst_46815 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46950_48859 = state_46905__$1;
(statearr_46950_48859[(2)] = inst_46815);

(statearr_46950_48859[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (31))){
var inst_46847 = (state_46905[(10)]);
var inst_46855 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46847);
var state_46905__$1 = state_46905;
var statearr_46951_48863 = state_46905__$1;
(statearr_46951_48863[(2)] = inst_46855);

(statearr_46951_48863[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (32))){
var inst_46841 = (state_46905[(19)]);
var inst_46839 = (state_46905[(20)]);
var inst_46842 = (state_46905[(11)]);
var inst_46840 = (state_46905[(12)]);
var inst_46857 = (state_46905[(2)]);
var inst_46858 = (inst_46842 + (1));
var tmp46947 = inst_46841;
var tmp46948 = inst_46839;
var tmp46949 = inst_46840;
var inst_46839__$1 = tmp46948;
var inst_46840__$1 = tmp46949;
var inst_46841__$1 = tmp46947;
var inst_46842__$1 = inst_46858;
var state_46905__$1 = (function (){var statearr_46952 = state_46905;
(statearr_46952[(19)] = inst_46841__$1);

(statearr_46952[(20)] = inst_46839__$1);

(statearr_46952[(21)] = inst_46857);

(statearr_46952[(11)] = inst_46842__$1);

(statearr_46952[(12)] = inst_46840__$1);

return statearr_46952;
})();
var statearr_46959_48868 = state_46905__$1;
(statearr_46959_48868[(2)] = null);

(statearr_46959_48868[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (40))){
var inst_46870 = (state_46905[(22)]);
var inst_46877 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46870);
var state_46905__$1 = state_46905;
var statearr_46960_48869 = state_46905__$1;
(statearr_46960_48869[(2)] = inst_46877);

(statearr_46960_48869[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (33))){
var inst_46861 = (state_46905[(23)]);
var inst_46863 = cljs.core.chunked_seq_QMARK_(inst_46861);
var state_46905__$1 = state_46905;
if(inst_46863){
var statearr_46961_48872 = state_46905__$1;
(statearr_46961_48872[(1)] = (36));

} else {
var statearr_46963_48873 = state_46905__$1;
(statearr_46963_48873[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (13))){
var inst_46782 = (state_46905[(24)]);
var inst_46785 = cljs.core.async.close_BANG_(inst_46782);
var state_46905__$1 = state_46905;
var statearr_46964_48878 = state_46905__$1;
(statearr_46964_48878[(2)] = inst_46785);

(statearr_46964_48878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (22))){
var inst_46805 = (state_46905[(8)]);
var inst_46808 = cljs.core.async.close_BANG_(inst_46805);
var state_46905__$1 = state_46905;
var statearr_46965_48879 = state_46905__$1;
(statearr_46965_48879[(2)] = inst_46808);

(statearr_46965_48879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (36))){
var inst_46861 = (state_46905[(23)]);
var inst_46865 = cljs.core.chunk_first(inst_46861);
var inst_46866 = cljs.core.chunk_rest(inst_46861);
var inst_46867 = cljs.core.count(inst_46865);
var inst_46839 = inst_46866;
var inst_46840 = inst_46865;
var inst_46841 = inst_46867;
var inst_46842 = (0);
var state_46905__$1 = (function (){var statearr_46966 = state_46905;
(statearr_46966[(19)] = inst_46841);

(statearr_46966[(20)] = inst_46839);

(statearr_46966[(11)] = inst_46842);

(statearr_46966[(12)] = inst_46840);

return statearr_46966;
})();
var statearr_46967_48880 = state_46905__$1;
(statearr_46967_48880[(2)] = null);

(statearr_46967_48880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (41))){
var inst_46861 = (state_46905[(23)]);
var inst_46879 = (state_46905[(2)]);
var inst_46880 = cljs.core.next(inst_46861);
var inst_46839 = inst_46880;
var inst_46840 = null;
var inst_46841 = (0);
var inst_46842 = (0);
var state_46905__$1 = (function (){var statearr_46971 = state_46905;
(statearr_46971[(19)] = inst_46841);

(statearr_46971[(20)] = inst_46839);

(statearr_46971[(25)] = inst_46879);

(statearr_46971[(11)] = inst_46842);

(statearr_46971[(12)] = inst_46840);

return statearr_46971;
})();
var statearr_46975_48888 = state_46905__$1;
(statearr_46975_48888[(2)] = null);

(statearr_46975_48888[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (43))){
var state_46905__$1 = state_46905;
var statearr_46976_48889 = state_46905__$1;
(statearr_46976_48889[(2)] = null);

(statearr_46976_48889[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (29))){
var inst_46888 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46978_48890 = state_46905__$1;
(statearr_46978_48890[(2)] = inst_46888);

(statearr_46978_48890[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (44))){
var inst_46898 = (state_46905[(2)]);
var state_46905__$1 = (function (){var statearr_46979 = state_46905;
(statearr_46979[(26)] = inst_46898);

return statearr_46979;
})();
var statearr_46980_48899 = state_46905__$1;
(statearr_46980_48899[(2)] = null);

(statearr_46980_48899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (6))){
var inst_46825 = (state_46905[(27)]);
var inst_46824 = cljs.core.deref(cs);
var inst_46825__$1 = cljs.core.keys(inst_46824);
var inst_46826 = cljs.core.count(inst_46825__$1);
var inst_46827 = cljs.core.reset_BANG_(dctr,inst_46826);
var inst_46838 = cljs.core.seq(inst_46825__$1);
var inst_46839 = inst_46838;
var inst_46840 = null;
var inst_46841 = (0);
var inst_46842 = (0);
var state_46905__$1 = (function (){var statearr_46987 = state_46905;
(statearr_46987[(19)] = inst_46841);

(statearr_46987[(20)] = inst_46839);

(statearr_46987[(27)] = inst_46825__$1);

(statearr_46987[(28)] = inst_46827);

(statearr_46987[(11)] = inst_46842);

(statearr_46987[(12)] = inst_46840);

return statearr_46987;
})();
var statearr_46989_48900 = state_46905__$1;
(statearr_46989_48900[(2)] = null);

(statearr_46989_48900[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (28))){
var inst_46839 = (state_46905[(20)]);
var inst_46861 = (state_46905[(23)]);
var inst_46861__$1 = cljs.core.seq(inst_46839);
var state_46905__$1 = (function (){var statearr_46990 = state_46905;
(statearr_46990[(23)] = inst_46861__$1);

return statearr_46990;
})();
if(inst_46861__$1){
var statearr_46991_48903 = state_46905__$1;
(statearr_46991_48903[(1)] = (33));

} else {
var statearr_46992_48904 = state_46905__$1;
(statearr_46992_48904[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (25))){
var inst_46841 = (state_46905[(19)]);
var inst_46842 = (state_46905[(11)]);
var inst_46844 = (inst_46842 < inst_46841);
var inst_46845 = inst_46844;
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46845)){
var statearr_46993_48905 = state_46905__$1;
(statearr_46993_48905[(1)] = (27));

} else {
var statearr_46994_48906 = state_46905__$1;
(statearr_46994_48906[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (34))){
var state_46905__$1 = state_46905;
var statearr_46995_48907 = state_46905__$1;
(statearr_46995_48907[(2)] = null);

(statearr_46995_48907[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (17))){
var state_46905__$1 = state_46905;
var statearr_46996_48908 = state_46905__$1;
(statearr_46996_48908[(2)] = null);

(statearr_46996_48908[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (3))){
var inst_46903 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46905__$1,inst_46903);
} else {
if((state_val_46906 === (12))){
var inst_46820 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_46997_48909 = state_46905__$1;
(statearr_46997_48909[(2)] = inst_46820);

(statearr_46997_48909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (2))){
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46905__$1,(4),ch);
} else {
if((state_val_46906 === (23))){
var state_46905__$1 = state_46905;
var statearr_47002_48910 = state_46905__$1;
(statearr_47002_48910[(2)] = null);

(statearr_47002_48910[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (35))){
var inst_46886 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_47005_48911 = state_46905__$1;
(statearr_47005_48911[(2)] = inst_46886);

(statearr_47005_48911[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (19))){
var inst_46792 = (state_46905[(7)]);
var inst_46796 = cljs.core.chunk_first(inst_46792);
var inst_46797 = cljs.core.chunk_rest(inst_46792);
var inst_46798 = cljs.core.count(inst_46796);
var inst_46770 = inst_46797;
var inst_46771 = inst_46796;
var inst_46772 = inst_46798;
var inst_46773 = (0);
var state_46905__$1 = (function (){var statearr_47006 = state_46905;
(statearr_47006[(13)] = inst_46773);

(statearr_47006[(15)] = inst_46770);

(statearr_47006[(16)] = inst_46772);

(statearr_47006[(17)] = inst_46771);

return statearr_47006;
})();
var statearr_47007_48912 = state_46905__$1;
(statearr_47007_48912[(2)] = null);

(statearr_47007_48912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (11))){
var inst_46792 = (state_46905[(7)]);
var inst_46770 = (state_46905[(15)]);
var inst_46792__$1 = cljs.core.seq(inst_46770);
var state_46905__$1 = (function (){var statearr_47009 = state_46905;
(statearr_47009[(7)] = inst_46792__$1);

return statearr_47009;
})();
if(inst_46792__$1){
var statearr_47010_48913 = state_46905__$1;
(statearr_47010_48913[(1)] = (16));

} else {
var statearr_47011_48914 = state_46905__$1;
(statearr_47011_48914[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (9))){
var inst_46822 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_47012_48915 = state_46905__$1;
(statearr_47012_48915[(2)] = inst_46822);

(statearr_47012_48915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (5))){
var inst_46768 = cljs.core.deref(cs);
var inst_46769 = cljs.core.seq(inst_46768);
var inst_46770 = inst_46769;
var inst_46771 = null;
var inst_46772 = (0);
var inst_46773 = (0);
var state_46905__$1 = (function (){var statearr_47013 = state_46905;
(statearr_47013[(13)] = inst_46773);

(statearr_47013[(15)] = inst_46770);

(statearr_47013[(16)] = inst_46772);

(statearr_47013[(17)] = inst_46771);

return statearr_47013;
})();
var statearr_47014_48916 = state_46905__$1;
(statearr_47014_48916[(2)] = null);

(statearr_47014_48916[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (14))){
var state_46905__$1 = state_46905;
var statearr_47015_48917 = state_46905__$1;
(statearr_47015_48917[(2)] = null);

(statearr_47015_48917[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (45))){
var inst_46895 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_47020_48921 = state_46905__$1;
(statearr_47020_48921[(2)] = inst_46895);

(statearr_47020_48921[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (26))){
var inst_46825 = (state_46905[(27)]);
var inst_46890 = (state_46905[(2)]);
var inst_46891 = cljs.core.seq(inst_46825);
var state_46905__$1 = (function (){var statearr_47021 = state_46905;
(statearr_47021[(29)] = inst_46890);

return statearr_47021;
})();
if(inst_46891){
var statearr_47022_48924 = state_46905__$1;
(statearr_47022_48924[(1)] = (42));

} else {
var statearr_47023_48925 = state_46905__$1;
(statearr_47023_48925[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (16))){
var inst_46792 = (state_46905[(7)]);
var inst_46794 = cljs.core.chunked_seq_QMARK_(inst_46792);
var state_46905__$1 = state_46905;
if(inst_46794){
var statearr_47024_48926 = state_46905__$1;
(statearr_47024_48926[(1)] = (19));

} else {
var statearr_47025_48927 = state_46905__$1;
(statearr_47025_48927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (38))){
var inst_46883 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_47026_48928 = state_46905__$1;
(statearr_47026_48928[(2)] = inst_46883);

(statearr_47026_48928[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (30))){
var state_46905__$1 = state_46905;
var statearr_47027_48937 = state_46905__$1;
(statearr_47027_48937[(2)] = null);

(statearr_47027_48937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (10))){
var inst_46773 = (state_46905[(13)]);
var inst_46771 = (state_46905[(17)]);
var inst_46781 = cljs.core._nth(inst_46771,inst_46773);
var inst_46782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46781,(0),null);
var inst_46783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46781,(1),null);
var state_46905__$1 = (function (){var statearr_47032 = state_46905;
(statearr_47032[(24)] = inst_46782);

return statearr_47032;
})();
if(cljs.core.truth_(inst_46783)){
var statearr_47034_48941 = state_46905__$1;
(statearr_47034_48941[(1)] = (13));

} else {
var statearr_47036_48942 = state_46905__$1;
(statearr_47036_48942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (18))){
var inst_46818 = (state_46905[(2)]);
var state_46905__$1 = state_46905;
var statearr_47037_48948 = state_46905__$1;
(statearr_47037_48948[(2)] = inst_46818);

(statearr_47037_48948[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (42))){
var state_46905__$1 = state_46905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46905__$1,(45),dchan);
} else {
if((state_val_46906 === (37))){
var inst_46761 = (state_46905[(9)]);
var inst_46870 = (state_46905[(22)]);
var inst_46861 = (state_46905[(23)]);
var inst_46870__$1 = cljs.core.first(inst_46861);
var inst_46874 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46870__$1,inst_46761,done);
var state_46905__$1 = (function (){var statearr_47038 = state_46905;
(statearr_47038[(22)] = inst_46870__$1);

return statearr_47038;
})();
if(cljs.core.truth_(inst_46874)){
var statearr_47039_48952 = state_46905__$1;
(statearr_47039_48952[(1)] = (39));

} else {
var statearr_47040_48953 = state_46905__$1;
(statearr_47040_48953[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46906 === (8))){
var inst_46773 = (state_46905[(13)]);
var inst_46772 = (state_46905[(16)]);
var inst_46775 = (inst_46773 < inst_46772);
var inst_46776 = inst_46775;
var state_46905__$1 = state_46905;
if(cljs.core.truth_(inst_46776)){
var statearr_47042_48957 = state_46905__$1;
(statearr_47042_48957[(1)] = (10));

} else {
var statearr_47043_48958 = state_46905__$1;
(statearr_47043_48958[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__45835__auto__ = null;
var cljs$core$async$mult_$_state_machine__45835__auto____0 = (function (){
var statearr_47044 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47044[(0)] = cljs$core$async$mult_$_state_machine__45835__auto__);

(statearr_47044[(1)] = (1));

return statearr_47044;
});
var cljs$core$async$mult_$_state_machine__45835__auto____1 = (function (state_46905){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_46905);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47045){var ex__45838__auto__ = e47045;
var statearr_47046_48963 = state_46905;
(statearr_47046_48963[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_46905[(4)]))){
var statearr_47047_48964 = state_46905;
(statearr_47047_48964[(1)] = cljs.core.first((state_46905[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48965 = state_46905;
state_46905 = G__48965;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__45835__auto__ = function(state_46905){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__45835__auto____1.call(this,state_46905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__45835__auto____0;
cljs$core$async$mult_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__45835__auto____1;
return cljs$core$async$mult_$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47050 = f__45937__auto__();
(statearr_47050[(6)] = c__45936__auto___48837);

return statearr_47050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var G__47052 = arguments.length;
switch (G__47052) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_48977 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48977(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48985 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48985(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48995 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48995(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48996 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48996(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49001 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49001(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49006 = arguments.length;
var i__4830__auto___49010 = (0);
while(true){
if((i__4830__auto___49010 < len__4829__auto___49006)){
args__4835__auto__.push((arguments[i__4830__auto___49010]));

var G__49012 = (i__4830__auto___49010 + (1));
i__4830__auto___49010 = G__49012;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47098){
var map__47099 = p__47098;
var map__47099__$1 = cljs.core.__destructure_map(map__47099);
var opts = map__47099__$1;
var statearr_47100_49018 = state;
(statearr_47100_49018[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47105_49020 = state;
(statearr_47105_49020[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_47106_49021 = state;
(statearr_47106_49021[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47094){
var G__47095 = cljs.core.first(seq47094);
var seq47094__$1 = cljs.core.next(seq47094);
var G__47096 = cljs.core.first(seq47094__$1);
var seq47094__$2 = cljs.core.next(seq47094__$1);
var G__47097 = cljs.core.first(seq47094__$2);
var seq47094__$3 = cljs.core.next(seq47094__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47095,G__47096,G__47097,seq47094__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47112 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47112 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47113){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47113 = meta47113;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47114,meta47113__$1){
var self__ = this;
var _47114__$1 = this;
return (new cljs.core.async.t_cljs$core$async47112(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47113__$1));
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47114){
var self__ = this;
var _47114__$1 = this;
return self__.meta47113;
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47112.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47112.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47113","meta47113",379404763,null)], null);
}));

(cljs.core.async.t_cljs$core$async47112.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47112.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47112");

(cljs.core.async.t_cljs$core$async47112.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47112");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47112.
 */
cljs.core.async.__GT_t_cljs$core$async47112 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47112(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47113){
return (new cljs.core.async.t_cljs$core$async47112(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47113));
});

}

return (new cljs.core.async.t_cljs$core$async47112(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45936__auto___49039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47214){
var state_val_47215 = (state_47214[(1)]);
if((state_val_47215 === (7))){
var inst_47170 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
if(cljs.core.truth_(inst_47170)){
var statearr_47223_49040 = state_47214__$1;
(statearr_47223_49040[(1)] = (8));

} else {
var statearr_47225_49041 = state_47214__$1;
(statearr_47225_49041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (20))){
var inst_47162 = (state_47214[(7)]);
var state_47214__$1 = state_47214;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47214__$1,(23),out,inst_47162);
} else {
if((state_val_47215 === (1))){
var inst_47144 = calc_state();
var inst_47145 = cljs.core.__destructure_map(inst_47144);
var inst_47146 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47145,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47147 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47145,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47145,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47149 = inst_47144;
var state_47214__$1 = (function (){var statearr_47227 = state_47214;
(statearr_47227[(8)] = inst_47149);

(statearr_47227[(9)] = inst_47146);

(statearr_47227[(10)] = inst_47148);

(statearr_47227[(11)] = inst_47147);

return statearr_47227;
})();
var statearr_47228_49042 = state_47214__$1;
(statearr_47228_49042[(2)] = null);

(statearr_47228_49042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (24))){
var inst_47152 = (state_47214[(12)]);
var inst_47149 = inst_47152;
var state_47214__$1 = (function (){var statearr_47229 = state_47214;
(statearr_47229[(8)] = inst_47149);

return statearr_47229;
})();
var statearr_47230_49043 = state_47214__$1;
(statearr_47230_49043[(2)] = null);

(statearr_47230_49043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (4))){
var inst_47162 = (state_47214[(7)]);
var inst_47164 = (state_47214[(13)]);
var inst_47161 = (state_47214[(2)]);
var inst_47162__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47161,(0),null);
var inst_47163 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47161,(1),null);
var inst_47164__$1 = (inst_47162__$1 == null);
var state_47214__$1 = (function (){var statearr_47232 = state_47214;
(statearr_47232[(7)] = inst_47162__$1);

(statearr_47232[(14)] = inst_47163);

(statearr_47232[(13)] = inst_47164__$1);

return statearr_47232;
})();
if(cljs.core.truth_(inst_47164__$1)){
var statearr_47239_49044 = state_47214__$1;
(statearr_47239_49044[(1)] = (5));

} else {
var statearr_47240_49045 = state_47214__$1;
(statearr_47240_49045[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (15))){
var inst_47185 = (state_47214[(15)]);
var inst_47154 = (state_47214[(16)]);
var inst_47185__$1 = cljs.core.empty_QMARK_(inst_47154);
var state_47214__$1 = (function (){var statearr_47242 = state_47214;
(statearr_47242[(15)] = inst_47185__$1);

return statearr_47242;
})();
if(inst_47185__$1){
var statearr_47243_49046 = state_47214__$1;
(statearr_47243_49046[(1)] = (17));

} else {
var statearr_47244_49047 = state_47214__$1;
(statearr_47244_49047[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (21))){
var inst_47152 = (state_47214[(12)]);
var inst_47149 = inst_47152;
var state_47214__$1 = (function (){var statearr_47245 = state_47214;
(statearr_47245[(8)] = inst_47149);

return statearr_47245;
})();
var statearr_47247_49048 = state_47214__$1;
(statearr_47247_49048[(2)] = null);

(statearr_47247_49048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (13))){
var inst_47177 = (state_47214[(2)]);
var inst_47178 = calc_state();
var inst_47149 = inst_47178;
var state_47214__$1 = (function (){var statearr_47248 = state_47214;
(statearr_47248[(8)] = inst_47149);

(statearr_47248[(17)] = inst_47177);

return statearr_47248;
})();
var statearr_47250_49050 = state_47214__$1;
(statearr_47250_49050[(2)] = null);

(statearr_47250_49050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (22))){
var inst_47208 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
var statearr_47252_49051 = state_47214__$1;
(statearr_47252_49051[(2)] = inst_47208);

(statearr_47252_49051[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (6))){
var inst_47163 = (state_47214[(14)]);
var inst_47168 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47163,change);
var state_47214__$1 = state_47214;
var statearr_47255_49056 = state_47214__$1;
(statearr_47255_49056[(2)] = inst_47168);

(statearr_47255_49056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (25))){
var state_47214__$1 = state_47214;
var statearr_47256_49057 = state_47214__$1;
(statearr_47256_49057[(2)] = null);

(statearr_47256_49057[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (17))){
var inst_47155 = (state_47214[(18)]);
var inst_47163 = (state_47214[(14)]);
var inst_47190 = (inst_47155.cljs$core$IFn$_invoke$arity$1 ? inst_47155.cljs$core$IFn$_invoke$arity$1(inst_47163) : inst_47155.call(null,inst_47163));
var inst_47191 = cljs.core.not(inst_47190);
var state_47214__$1 = state_47214;
var statearr_47264_49058 = state_47214__$1;
(statearr_47264_49058[(2)] = inst_47191);

(statearr_47264_49058[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (3))){
var inst_47212 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47214__$1,inst_47212);
} else {
if((state_val_47215 === (12))){
var state_47214__$1 = state_47214;
var statearr_47270_49059 = state_47214__$1;
(statearr_47270_49059[(2)] = null);

(statearr_47270_49059[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (2))){
var inst_47149 = (state_47214[(8)]);
var inst_47152 = (state_47214[(12)]);
var inst_47152__$1 = cljs.core.__destructure_map(inst_47149);
var inst_47154 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47155 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47156 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47152__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47214__$1 = (function (){var statearr_47271 = state_47214;
(statearr_47271[(12)] = inst_47152__$1);

(statearr_47271[(16)] = inst_47154);

(statearr_47271[(18)] = inst_47155);

return statearr_47271;
})();
return cljs.core.async.ioc_alts_BANG_(state_47214__$1,(4),inst_47156);
} else {
if((state_val_47215 === (23))){
var inst_47199 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
if(cljs.core.truth_(inst_47199)){
var statearr_47273_49060 = state_47214__$1;
(statearr_47273_49060[(1)] = (24));

} else {
var statearr_47274_49061 = state_47214__$1;
(statearr_47274_49061[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (19))){
var inst_47194 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
var statearr_47275_49062 = state_47214__$1;
(statearr_47275_49062[(2)] = inst_47194);

(statearr_47275_49062[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (11))){
var inst_47163 = (state_47214[(14)]);
var inst_47174 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47163);
var state_47214__$1 = state_47214;
var statearr_47276_49063 = state_47214__$1;
(statearr_47276_49063[(2)] = inst_47174);

(statearr_47276_49063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (9))){
var inst_47181 = (state_47214[(19)]);
var inst_47154 = (state_47214[(16)]);
var inst_47163 = (state_47214[(14)]);
var inst_47181__$1 = (inst_47154.cljs$core$IFn$_invoke$arity$1 ? inst_47154.cljs$core$IFn$_invoke$arity$1(inst_47163) : inst_47154.call(null,inst_47163));
var state_47214__$1 = (function (){var statearr_47277 = state_47214;
(statearr_47277[(19)] = inst_47181__$1);

return statearr_47277;
})();
if(cljs.core.truth_(inst_47181__$1)){
var statearr_47282_49064 = state_47214__$1;
(statearr_47282_49064[(1)] = (14));

} else {
var statearr_47285_49065 = state_47214__$1;
(statearr_47285_49065[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (5))){
var inst_47164 = (state_47214[(13)]);
var state_47214__$1 = state_47214;
var statearr_47286_49066 = state_47214__$1;
(statearr_47286_49066[(2)] = inst_47164);

(statearr_47286_49066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (14))){
var inst_47181 = (state_47214[(19)]);
var state_47214__$1 = state_47214;
var statearr_47287_49068 = state_47214__$1;
(statearr_47287_49068[(2)] = inst_47181);

(statearr_47287_49068[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (26))){
var inst_47204 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
var statearr_47293_49070 = state_47214__$1;
(statearr_47293_49070[(2)] = inst_47204);

(statearr_47293_49070[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (16))){
var inst_47196 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
if(cljs.core.truth_(inst_47196)){
var statearr_47294_49071 = state_47214__$1;
(statearr_47294_49071[(1)] = (20));

} else {
var statearr_47295_49073 = state_47214__$1;
(statearr_47295_49073[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (10))){
var inst_47210 = (state_47214[(2)]);
var state_47214__$1 = state_47214;
var statearr_47297_49074 = state_47214__$1;
(statearr_47297_49074[(2)] = inst_47210);

(statearr_47297_49074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (18))){
var inst_47185 = (state_47214[(15)]);
var state_47214__$1 = state_47214;
var statearr_47300_49075 = state_47214__$1;
(statearr_47300_49075[(2)] = inst_47185);

(statearr_47300_49075[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47215 === (8))){
var inst_47162 = (state_47214[(7)]);
var inst_47172 = (inst_47162 == null);
var state_47214__$1 = state_47214;
if(cljs.core.truth_(inst_47172)){
var statearr_47301_49077 = state_47214__$1;
(statearr_47301_49077[(1)] = (11));

} else {
var statearr_47302_49078 = state_47214__$1;
(statearr_47302_49078[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__45835__auto__ = null;
var cljs$core$async$mix_$_state_machine__45835__auto____0 = (function (){
var statearr_47303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47303[(0)] = cljs$core$async$mix_$_state_machine__45835__auto__);

(statearr_47303[(1)] = (1));

return statearr_47303;
});
var cljs$core$async$mix_$_state_machine__45835__auto____1 = (function (state_47214){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47214);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47311){var ex__45838__auto__ = e47311;
var statearr_47312_49082 = state_47214;
(statearr_47312_49082[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47214[(4)]))){
var statearr_47313_49083 = state_47214;
(statearr_47313_49083[(1)] = cljs.core.first((state_47214[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49084 = state_47214;
state_47214 = G__49084;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__45835__auto__ = function(state_47214){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__45835__auto____1.call(this,state_47214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__45835__auto____0;
cljs$core$async$mix_$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__45835__auto____1;
return cljs$core$async$mix_$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47315 = f__45937__auto__();
(statearr_47315[(6)] = c__45936__auto___49039);

return statearr_47315;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_49086 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_49086(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49087 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_49087(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49088 = (function() {
var G__49089 = null;
var G__49089__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__49089__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__49089 = function(p,v){
switch(arguments.length){
case 1:
return G__49089__1.call(this,p);
case 2:
return G__49089__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49089.cljs$core$IFn$_invoke$arity$1 = G__49089__1;
G__49089.cljs$core$IFn$_invoke$arity$2 = G__49089__2;
return G__49089;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47342 = arguments.length;
switch (G__47342) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49088(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49088(p,v);
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
var G__47356 = arguments.length;
switch (G__47356) {
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
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47351_SHARP_){
if(cljs.core.truth_((p1__47351_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47351_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47351_SHARP_.call(null,topic)))){
return p1__47351_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47351_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47371 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47371 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47372){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47372 = meta47372;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47373,meta47372__$1){
var self__ = this;
var _47373__$1 = this;
return (new cljs.core.async.t_cljs$core$async47371(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47372__$1));
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47373){
var self__ = this;
var _47373__$1 = this;
return self__.meta47372;
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47371.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47371.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47372","meta47372",-1162914076,null)], null);
}));

(cljs.core.async.t_cljs$core$async47371.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47371.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47371");

(cljs.core.async.t_cljs$core$async47371.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47371");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47371.
 */
cljs.core.async.__GT_t_cljs$core$async47371 = (function cljs$core$async$__GT_t_cljs$core$async47371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47372){
return (new cljs.core.async.t_cljs$core$async47371(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47372));
});

}

return (new cljs.core.async.t_cljs$core$async47371(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__45936__auto___49096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47465){
var state_val_47466 = (state_47465[(1)]);
if((state_val_47466 === (7))){
var inst_47461 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47471_49097 = state_47465__$1;
(statearr_47471_49097[(2)] = inst_47461);

(statearr_47471_49097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (20))){
var state_47465__$1 = state_47465;
var statearr_47472_49098 = state_47465__$1;
(statearr_47472_49098[(2)] = null);

(statearr_47472_49098[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (1))){
var state_47465__$1 = state_47465;
var statearr_47473_49099 = state_47465__$1;
(statearr_47473_49099[(2)] = null);

(statearr_47473_49099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (24))){
var inst_47440 = (state_47465[(7)]);
var inst_47451 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47440);
var state_47465__$1 = state_47465;
var statearr_47492_49100 = state_47465__$1;
(statearr_47492_49100[(2)] = inst_47451);

(statearr_47492_49100[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (4))){
var inst_47389 = (state_47465[(8)]);
var inst_47389__$1 = (state_47465[(2)]);
var inst_47390 = (inst_47389__$1 == null);
var state_47465__$1 = (function (){var statearr_47501 = state_47465;
(statearr_47501[(8)] = inst_47389__$1);

return statearr_47501;
})();
if(cljs.core.truth_(inst_47390)){
var statearr_47509_49102 = state_47465__$1;
(statearr_47509_49102[(1)] = (5));

} else {
var statearr_47510_49103 = state_47465__$1;
(statearr_47510_49103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (15))){
var inst_47434 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47518_49106 = state_47465__$1;
(statearr_47518_49106[(2)] = inst_47434);

(statearr_47518_49106[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (21))){
var inst_47457 = (state_47465[(2)]);
var state_47465__$1 = (function (){var statearr_47524 = state_47465;
(statearr_47524[(9)] = inst_47457);

return statearr_47524;
})();
var statearr_47530_49107 = state_47465__$1;
(statearr_47530_49107[(2)] = null);

(statearr_47530_49107[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (13))){
var inst_47414 = (state_47465[(10)]);
var inst_47417 = cljs.core.chunked_seq_QMARK_(inst_47414);
var state_47465__$1 = state_47465;
if(inst_47417){
var statearr_47537_49108 = state_47465__$1;
(statearr_47537_49108[(1)] = (16));

} else {
var statearr_47538_49109 = state_47465__$1;
(statearr_47538_49109[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (22))){
var inst_47448 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
if(cljs.core.truth_(inst_47448)){
var statearr_47541_49110 = state_47465__$1;
(statearr_47541_49110[(1)] = (23));

} else {
var statearr_47542_49112 = state_47465__$1;
(statearr_47542_49112[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (6))){
var inst_47440 = (state_47465[(7)]);
var inst_47442 = (state_47465[(11)]);
var inst_47389 = (state_47465[(8)]);
var inst_47440__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47389) : topic_fn.call(null,inst_47389));
var inst_47441 = cljs.core.deref(mults);
var inst_47442__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47441,inst_47440__$1);
var state_47465__$1 = (function (){var statearr_47543 = state_47465;
(statearr_47543[(7)] = inst_47440__$1);

(statearr_47543[(11)] = inst_47442__$1);

return statearr_47543;
})();
if(cljs.core.truth_(inst_47442__$1)){
var statearr_47544_49117 = state_47465__$1;
(statearr_47544_49117[(1)] = (19));

} else {
var statearr_47545_49118 = state_47465__$1;
(statearr_47545_49118[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (25))){
var inst_47454 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47547_49119 = state_47465__$1;
(statearr_47547_49119[(2)] = inst_47454);

(statearr_47547_49119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (17))){
var inst_47414 = (state_47465[(10)]);
var inst_47425 = cljs.core.first(inst_47414);
var inst_47426 = cljs.core.async.muxch_STAR_(inst_47425);
var inst_47427 = cljs.core.async.close_BANG_(inst_47426);
var inst_47428 = cljs.core.next(inst_47414);
var inst_47399 = inst_47428;
var inst_47400 = null;
var inst_47401 = (0);
var inst_47402 = (0);
var state_47465__$1 = (function (){var statearr_47549 = state_47465;
(statearr_47549[(12)] = inst_47401);

(statearr_47549[(13)] = inst_47400);

(statearr_47549[(14)] = inst_47427);

(statearr_47549[(15)] = inst_47402);

(statearr_47549[(16)] = inst_47399);

return statearr_47549;
})();
var statearr_47550_49121 = state_47465__$1;
(statearr_47550_49121[(2)] = null);

(statearr_47550_49121[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (3))){
var inst_47463 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47465__$1,inst_47463);
} else {
if((state_val_47466 === (12))){
var inst_47436 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47551_49122 = state_47465__$1;
(statearr_47551_49122[(2)] = inst_47436);

(statearr_47551_49122[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (2))){
var state_47465__$1 = state_47465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47465__$1,(4),ch);
} else {
if((state_val_47466 === (23))){
var state_47465__$1 = state_47465;
var statearr_47553_49123 = state_47465__$1;
(statearr_47553_49123[(2)] = null);

(statearr_47553_49123[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (19))){
var inst_47442 = (state_47465[(11)]);
var inst_47389 = (state_47465[(8)]);
var inst_47444 = cljs.core.async.muxch_STAR_(inst_47442);
var state_47465__$1 = state_47465;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47465__$1,(22),inst_47444,inst_47389);
} else {
if((state_val_47466 === (11))){
var inst_47399 = (state_47465[(16)]);
var inst_47414 = (state_47465[(10)]);
var inst_47414__$1 = cljs.core.seq(inst_47399);
var state_47465__$1 = (function (){var statearr_47558 = state_47465;
(statearr_47558[(10)] = inst_47414__$1);

return statearr_47558;
})();
if(inst_47414__$1){
var statearr_47559_49126 = state_47465__$1;
(statearr_47559_49126[(1)] = (13));

} else {
var statearr_47561_49127 = state_47465__$1;
(statearr_47561_49127[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (9))){
var inst_47438 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47562_49128 = state_47465__$1;
(statearr_47562_49128[(2)] = inst_47438);

(statearr_47562_49128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (5))){
var inst_47396 = cljs.core.deref(mults);
var inst_47397 = cljs.core.vals(inst_47396);
var inst_47398 = cljs.core.seq(inst_47397);
var inst_47399 = inst_47398;
var inst_47400 = null;
var inst_47401 = (0);
var inst_47402 = (0);
var state_47465__$1 = (function (){var statearr_47565 = state_47465;
(statearr_47565[(12)] = inst_47401);

(statearr_47565[(13)] = inst_47400);

(statearr_47565[(15)] = inst_47402);

(statearr_47565[(16)] = inst_47399);

return statearr_47565;
})();
var statearr_47566_49129 = state_47465__$1;
(statearr_47566_49129[(2)] = null);

(statearr_47566_49129[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (14))){
var state_47465__$1 = state_47465;
var statearr_47570_49130 = state_47465__$1;
(statearr_47570_49130[(2)] = null);

(statearr_47570_49130[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (16))){
var inst_47414 = (state_47465[(10)]);
var inst_47419 = cljs.core.chunk_first(inst_47414);
var inst_47420 = cljs.core.chunk_rest(inst_47414);
var inst_47421 = cljs.core.count(inst_47419);
var inst_47399 = inst_47420;
var inst_47400 = inst_47419;
var inst_47401 = inst_47421;
var inst_47402 = (0);
var state_47465__$1 = (function (){var statearr_47571 = state_47465;
(statearr_47571[(12)] = inst_47401);

(statearr_47571[(13)] = inst_47400);

(statearr_47571[(15)] = inst_47402);

(statearr_47571[(16)] = inst_47399);

return statearr_47571;
})();
var statearr_47572_49134 = state_47465__$1;
(statearr_47572_49134[(2)] = null);

(statearr_47572_49134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (10))){
var inst_47401 = (state_47465[(12)]);
var inst_47400 = (state_47465[(13)]);
var inst_47402 = (state_47465[(15)]);
var inst_47399 = (state_47465[(16)]);
var inst_47408 = cljs.core._nth(inst_47400,inst_47402);
var inst_47409 = cljs.core.async.muxch_STAR_(inst_47408);
var inst_47410 = cljs.core.async.close_BANG_(inst_47409);
var inst_47411 = (inst_47402 + (1));
var tmp47567 = inst_47401;
var tmp47568 = inst_47400;
var tmp47569 = inst_47399;
var inst_47399__$1 = tmp47569;
var inst_47400__$1 = tmp47568;
var inst_47401__$1 = tmp47567;
var inst_47402__$1 = inst_47411;
var state_47465__$1 = (function (){var statearr_47573 = state_47465;
(statearr_47573[(12)] = inst_47401__$1);

(statearr_47573[(13)] = inst_47400__$1);

(statearr_47573[(15)] = inst_47402__$1);

(statearr_47573[(17)] = inst_47410);

(statearr_47573[(16)] = inst_47399__$1);

return statearr_47573;
})();
var statearr_47576_49141 = state_47465__$1;
(statearr_47576_49141[(2)] = null);

(statearr_47576_49141[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (18))){
var inst_47431 = (state_47465[(2)]);
var state_47465__$1 = state_47465;
var statearr_47579_49143 = state_47465__$1;
(statearr_47579_49143[(2)] = inst_47431);

(statearr_47579_49143[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47466 === (8))){
var inst_47401 = (state_47465[(12)]);
var inst_47402 = (state_47465[(15)]);
var inst_47405 = (inst_47402 < inst_47401);
var inst_47406 = inst_47405;
var state_47465__$1 = state_47465;
if(cljs.core.truth_(inst_47406)){
var statearr_47580_49148 = state_47465__$1;
(statearr_47580_49148[(1)] = (10));

} else {
var statearr_47581_49149 = state_47465__$1;
(statearr_47581_49149[(1)] = (11));

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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_47587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47587[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_47587[(1)] = (1));

return statearr_47587;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_47465){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47465);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47595){var ex__45838__auto__ = e47595;
var statearr_47598_49150 = state_47465;
(statearr_47598_49150[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47465[(4)]))){
var statearr_47606_49151 = state_47465;
(statearr_47606_49151[(1)] = cljs.core.first((state_47465[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49155 = state_47465;
state_47465 = G__49155;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_47465){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_47465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47611 = f__45937__auto__();
(statearr_47611[(6)] = c__45936__auto___49096);

return statearr_47611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var G__47614 = arguments.length;
switch (G__47614) {
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
var G__47619 = arguments.length;
switch (G__47619) {
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
var G__47642 = arguments.length;
switch (G__47642) {
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
var c__45936__auto___49171 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47728){
var state_val_47729 = (state_47728[(1)]);
if((state_val_47729 === (7))){
var state_47728__$1 = state_47728;
var statearr_47738_49176 = state_47728__$1;
(statearr_47738_49176[(2)] = null);

(statearr_47738_49176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (1))){
var state_47728__$1 = state_47728;
var statearr_47743_49177 = state_47728__$1;
(statearr_47743_49177[(2)] = null);

(statearr_47743_49177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (4))){
var inst_47687 = (state_47728[(7)]);
var inst_47688 = (state_47728[(8)]);
var inst_47690 = (inst_47688 < inst_47687);
var state_47728__$1 = state_47728;
if(cljs.core.truth_(inst_47690)){
var statearr_47744_49178 = state_47728__$1;
(statearr_47744_49178[(1)] = (6));

} else {
var statearr_47745_49179 = state_47728__$1;
(statearr_47745_49179[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (15))){
var inst_47714 = (state_47728[(9)]);
var inst_47719 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47714);
var state_47728__$1 = state_47728;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47728__$1,(17),out,inst_47719);
} else {
if((state_val_47729 === (13))){
var inst_47714 = (state_47728[(9)]);
var inst_47714__$1 = (state_47728[(2)]);
var inst_47715 = cljs.core.some(cljs.core.nil_QMARK_,inst_47714__$1);
var state_47728__$1 = (function (){var statearr_47747 = state_47728;
(statearr_47747[(9)] = inst_47714__$1);

return statearr_47747;
})();
if(cljs.core.truth_(inst_47715)){
var statearr_47748_49181 = state_47728__$1;
(statearr_47748_49181[(1)] = (14));

} else {
var statearr_47749_49182 = state_47728__$1;
(statearr_47749_49182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (6))){
var state_47728__$1 = state_47728;
var statearr_47750_49183 = state_47728__$1;
(statearr_47750_49183[(2)] = null);

(statearr_47750_49183[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (17))){
var inst_47721 = (state_47728[(2)]);
var state_47728__$1 = (function (){var statearr_47752 = state_47728;
(statearr_47752[(10)] = inst_47721);

return statearr_47752;
})();
var statearr_47753_49184 = state_47728__$1;
(statearr_47753_49184[(2)] = null);

(statearr_47753_49184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (3))){
var inst_47726 = (state_47728[(2)]);
var state_47728__$1 = state_47728;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47728__$1,inst_47726);
} else {
if((state_val_47729 === (12))){
var _ = (function (){var statearr_47755 = state_47728;
(statearr_47755[(4)] = cljs.core.rest((state_47728[(4)])));

return statearr_47755;
})();
var state_47728__$1 = state_47728;
var ex47751 = (state_47728__$1[(2)]);
var statearr_47756_49185 = state_47728__$1;
(statearr_47756_49185[(5)] = ex47751);


if((ex47751 instanceof Object)){
var statearr_47758_49186 = state_47728__$1;
(statearr_47758_49186[(1)] = (11));

(statearr_47758_49186[(5)] = null);

} else {
throw ex47751;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (2))){
var inst_47686 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47687 = cnt;
var inst_47688 = (0);
var state_47728__$1 = (function (){var statearr_47759 = state_47728;
(statearr_47759[(7)] = inst_47687);

(statearr_47759[(8)] = inst_47688);

(statearr_47759[(11)] = inst_47686);

return statearr_47759;
})();
var statearr_47760_49190 = state_47728__$1;
(statearr_47760_49190[(2)] = null);

(statearr_47760_49190[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (11))){
var inst_47693 = (state_47728[(2)]);
var inst_47694 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47728__$1 = (function (){var statearr_47761 = state_47728;
(statearr_47761[(12)] = inst_47693);

return statearr_47761;
})();
var statearr_47762_49194 = state_47728__$1;
(statearr_47762_49194[(2)] = inst_47694);

(statearr_47762_49194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (9))){
var inst_47688 = (state_47728[(8)]);
var _ = (function (){var statearr_47763 = state_47728;
(statearr_47763[(4)] = cljs.core.cons((12),(state_47728[(4)])));

return statearr_47763;
})();
var inst_47700 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47688) : chs__$1.call(null,inst_47688));
var inst_47701 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47688) : done.call(null,inst_47688));
var inst_47702 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47700,inst_47701);
var ___$1 = (function (){var statearr_47764 = state_47728;
(statearr_47764[(4)] = cljs.core.rest((state_47728[(4)])));

return statearr_47764;
})();
var state_47728__$1 = state_47728;
var statearr_47765_49196 = state_47728__$1;
(statearr_47765_49196[(2)] = inst_47702);

(statearr_47765_49196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (5))){
var inst_47712 = (state_47728[(2)]);
var state_47728__$1 = (function (){var statearr_47766 = state_47728;
(statearr_47766[(13)] = inst_47712);

return statearr_47766;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47728__$1,(13),dchan);
} else {
if((state_val_47729 === (14))){
var inst_47717 = cljs.core.async.close_BANG_(out);
var state_47728__$1 = state_47728;
var statearr_47767_49197 = state_47728__$1;
(statearr_47767_49197[(2)] = inst_47717);

(statearr_47767_49197[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (16))){
var inst_47724 = (state_47728[(2)]);
var state_47728__$1 = state_47728;
var statearr_47768_49199 = state_47728__$1;
(statearr_47768_49199[(2)] = inst_47724);

(statearr_47768_49199[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (10))){
var inst_47688 = (state_47728[(8)]);
var inst_47705 = (state_47728[(2)]);
var inst_47706 = (inst_47688 + (1));
var inst_47688__$1 = inst_47706;
var state_47728__$1 = (function (){var statearr_47769 = state_47728;
(statearr_47769[(8)] = inst_47688__$1);

(statearr_47769[(14)] = inst_47705);

return statearr_47769;
})();
var statearr_47770_49201 = state_47728__$1;
(statearr_47770_49201[(2)] = null);

(statearr_47770_49201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47729 === (8))){
var inst_47710 = (state_47728[(2)]);
var state_47728__$1 = state_47728;
var statearr_47771_49204 = state_47728__$1;
(statearr_47771_49204[(2)] = inst_47710);

(statearr_47771_49204[(1)] = (5));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_47772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47772[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_47772[(1)] = (1));

return statearr_47772;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_47728){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47728);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47773){var ex__45838__auto__ = e47773;
var statearr_47774_49207 = state_47728;
(statearr_47774_49207[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47728[(4)]))){
var statearr_47775_49208 = state_47728;
(statearr_47775_49208[(1)] = cljs.core.first((state_47728[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49211 = state_47728;
state_47728 = G__49211;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_47728){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_47728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47776 = f__45937__auto__();
(statearr_47776[(6)] = c__45936__auto___49171);

return statearr_47776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var G__47779 = arguments.length;
switch (G__47779) {
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
var c__45936__auto___49218 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47811){
var state_val_47812 = (state_47811[(1)]);
if((state_val_47812 === (7))){
var inst_47791 = (state_47811[(7)]);
var inst_47790 = (state_47811[(8)]);
var inst_47790__$1 = (state_47811[(2)]);
var inst_47791__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47790__$1,(0),null);
var inst_47792 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47790__$1,(1),null);
var inst_47793 = (inst_47791__$1 == null);
var state_47811__$1 = (function (){var statearr_47813 = state_47811;
(statearr_47813[(7)] = inst_47791__$1);

(statearr_47813[(9)] = inst_47792);

(statearr_47813[(8)] = inst_47790__$1);

return statearr_47813;
})();
if(cljs.core.truth_(inst_47793)){
var statearr_47814_49220 = state_47811__$1;
(statearr_47814_49220[(1)] = (8));

} else {
var statearr_47815_49221 = state_47811__$1;
(statearr_47815_49221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (1))){
var inst_47780 = cljs.core.vec(chs);
var inst_47781 = inst_47780;
var state_47811__$1 = (function (){var statearr_47816 = state_47811;
(statearr_47816[(10)] = inst_47781);

return statearr_47816;
})();
var statearr_47817_49223 = state_47811__$1;
(statearr_47817_49223[(2)] = null);

(statearr_47817_49223[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (4))){
var inst_47781 = (state_47811[(10)]);
var state_47811__$1 = state_47811;
return cljs.core.async.ioc_alts_BANG_(state_47811__$1,(7),inst_47781);
} else {
if((state_val_47812 === (6))){
var inst_47807 = (state_47811[(2)]);
var state_47811__$1 = state_47811;
var statearr_47818_49225 = state_47811__$1;
(statearr_47818_49225[(2)] = inst_47807);

(statearr_47818_49225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (3))){
var inst_47809 = (state_47811[(2)]);
var state_47811__$1 = state_47811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47811__$1,inst_47809);
} else {
if((state_val_47812 === (2))){
var inst_47781 = (state_47811[(10)]);
var inst_47783 = cljs.core.count(inst_47781);
var inst_47784 = (inst_47783 > (0));
var state_47811__$1 = state_47811;
if(cljs.core.truth_(inst_47784)){
var statearr_47820_49228 = state_47811__$1;
(statearr_47820_49228[(1)] = (4));

} else {
var statearr_47821_49230 = state_47811__$1;
(statearr_47821_49230[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (11))){
var inst_47781 = (state_47811[(10)]);
var inst_47800 = (state_47811[(2)]);
var tmp47819 = inst_47781;
var inst_47781__$1 = tmp47819;
var state_47811__$1 = (function (){var statearr_47822 = state_47811;
(statearr_47822[(11)] = inst_47800);

(statearr_47822[(10)] = inst_47781__$1);

return statearr_47822;
})();
var statearr_47823_49235 = state_47811__$1;
(statearr_47823_49235[(2)] = null);

(statearr_47823_49235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (9))){
var inst_47791 = (state_47811[(7)]);
var state_47811__$1 = state_47811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47811__$1,(11),out,inst_47791);
} else {
if((state_val_47812 === (5))){
var inst_47805 = cljs.core.async.close_BANG_(out);
var state_47811__$1 = state_47811;
var statearr_47824_49237 = state_47811__$1;
(statearr_47824_49237[(2)] = inst_47805);

(statearr_47824_49237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (10))){
var inst_47803 = (state_47811[(2)]);
var state_47811__$1 = state_47811;
var statearr_47825_49239 = state_47811__$1;
(statearr_47825_49239[(2)] = inst_47803);

(statearr_47825_49239[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47812 === (8))){
var inst_47791 = (state_47811[(7)]);
var inst_47792 = (state_47811[(9)]);
var inst_47790 = (state_47811[(8)]);
var inst_47781 = (state_47811[(10)]);
var inst_47795 = (function (){var cs = inst_47781;
var vec__47786 = inst_47790;
var v = inst_47791;
var c = inst_47792;
return (function (p1__47777_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47777_SHARP_);
});
})();
var inst_47796 = cljs.core.filterv(inst_47795,inst_47781);
var inst_47781__$1 = inst_47796;
var state_47811__$1 = (function (){var statearr_47826 = state_47811;
(statearr_47826[(10)] = inst_47781__$1);

return statearr_47826;
})();
var statearr_47827_49240 = state_47811__$1;
(statearr_47827_49240[(2)] = null);

(statearr_47827_49240[(1)] = (2));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_47828 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47828[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_47828[(1)] = (1));

return statearr_47828;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_47811){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47811);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47830){var ex__45838__auto__ = e47830;
var statearr_47831_49241 = state_47811;
(statearr_47831_49241[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47811[(4)]))){
var statearr_47832_49242 = state_47811;
(statearr_47832_49242[(1)] = cljs.core.first((state_47811[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49243 = state_47811;
state_47811 = G__49243;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_47811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_47811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47833 = f__45937__auto__();
(statearr_47833[(6)] = c__45936__auto___49218);

return statearr_47833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
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
var G__47835 = arguments.length;
switch (G__47835) {
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
var c__45936__auto___49247 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47859){
var state_val_47860 = (state_47859[(1)]);
if((state_val_47860 === (7))){
var inst_47841 = (state_47859[(7)]);
var inst_47841__$1 = (state_47859[(2)]);
var inst_47842 = (inst_47841__$1 == null);
var inst_47843 = cljs.core.not(inst_47842);
var state_47859__$1 = (function (){var statearr_47861 = state_47859;
(statearr_47861[(7)] = inst_47841__$1);

return statearr_47861;
})();
if(inst_47843){
var statearr_47862_49248 = state_47859__$1;
(statearr_47862_49248[(1)] = (8));

} else {
var statearr_47863_49253 = state_47859__$1;
(statearr_47863_49253[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (1))){
var inst_47836 = (0);
var state_47859__$1 = (function (){var statearr_47864 = state_47859;
(statearr_47864[(8)] = inst_47836);

return statearr_47864;
})();
var statearr_47865_49258 = state_47859__$1;
(statearr_47865_49258[(2)] = null);

(statearr_47865_49258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (4))){
var state_47859__$1 = state_47859;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47859__$1,(7),ch);
} else {
if((state_val_47860 === (6))){
var inst_47854 = (state_47859[(2)]);
var state_47859__$1 = state_47859;
var statearr_47866_49259 = state_47859__$1;
(statearr_47866_49259[(2)] = inst_47854);

(statearr_47866_49259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (3))){
var inst_47856 = (state_47859[(2)]);
var inst_47857 = cljs.core.async.close_BANG_(out);
var state_47859__$1 = (function (){var statearr_47867 = state_47859;
(statearr_47867[(9)] = inst_47856);

return statearr_47867;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47859__$1,inst_47857);
} else {
if((state_val_47860 === (2))){
var inst_47836 = (state_47859[(8)]);
var inst_47838 = (inst_47836 < n);
var state_47859__$1 = state_47859;
if(cljs.core.truth_(inst_47838)){
var statearr_47868_49262 = state_47859__$1;
(statearr_47868_49262[(1)] = (4));

} else {
var statearr_47869_49263 = state_47859__$1;
(statearr_47869_49263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (11))){
var inst_47836 = (state_47859[(8)]);
var inst_47846 = (state_47859[(2)]);
var inst_47847 = (inst_47836 + (1));
var inst_47836__$1 = inst_47847;
var state_47859__$1 = (function (){var statearr_47870 = state_47859;
(statearr_47870[(8)] = inst_47836__$1);

(statearr_47870[(10)] = inst_47846);

return statearr_47870;
})();
var statearr_47871_49264 = state_47859__$1;
(statearr_47871_49264[(2)] = null);

(statearr_47871_49264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (9))){
var state_47859__$1 = state_47859;
var statearr_47872_49265 = state_47859__$1;
(statearr_47872_49265[(2)] = null);

(statearr_47872_49265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (5))){
var state_47859__$1 = state_47859;
var statearr_47873_49266 = state_47859__$1;
(statearr_47873_49266[(2)] = null);

(statearr_47873_49266[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (10))){
var inst_47851 = (state_47859[(2)]);
var state_47859__$1 = state_47859;
var statearr_47874_49267 = state_47859__$1;
(statearr_47874_49267[(2)] = inst_47851);

(statearr_47874_49267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47860 === (8))){
var inst_47841 = (state_47859[(7)]);
var state_47859__$1 = state_47859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47859__$1,(11),out,inst_47841);
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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_47875 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47875[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_47875[(1)] = (1));

return statearr_47875;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_47859){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47859);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47876){var ex__45838__auto__ = e47876;
var statearr_47877_49271 = state_47859;
(statearr_47877_49271[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47859[(4)]))){
var statearr_47878_49272 = state_47859;
(statearr_47878_49272[(1)] = cljs.core.first((state_47859[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49273 = state_47859;
state_47859 = G__49273;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_47859){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_47859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47879 = f__45937__auto__();
(statearr_47879[(6)] = c__45936__auto___49247);

return statearr_47879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47881 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47881 = (function (f,ch,meta47882){
this.f = f;
this.ch = ch;
this.meta47882 = meta47882;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47883,meta47882__$1){
var self__ = this;
var _47883__$1 = this;
return (new cljs.core.async.t_cljs$core$async47881(self__.f,self__.ch,meta47882__$1));
}));

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47883){
var self__ = this;
var _47883__$1 = this;
return self__.meta47882;
}));

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47884 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47884 = (function (f,ch,meta47882,_,fn1,meta47885){
this.f = f;
this.ch = ch;
this.meta47882 = meta47882;
this._ = _;
this.fn1 = fn1;
this.meta47885 = meta47885;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47886,meta47885__$1){
var self__ = this;
var _47886__$1 = this;
return (new cljs.core.async.t_cljs$core$async47884(self__.f,self__.ch,self__.meta47882,self__._,self__.fn1,meta47885__$1));
}));

(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47886){
var self__ = this;
var _47886__$1 = this;
return self__.meta47885;
}));

(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47884.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47880_SHARP_){
var G__47887 = (((p1__47880_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47880_SHARP_) : self__.f.call(null,p1__47880_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47887) : f1.call(null,G__47887));
});
}));

(cljs.core.async.t_cljs$core$async47884.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47882","meta47882",-1382604109,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47881","cljs.core.async/t_cljs$core$async47881",-314884733,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47885","meta47885",-2040398655,null)], null);
}));

(cljs.core.async.t_cljs$core$async47884.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47884.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47884");

(cljs.core.async.t_cljs$core$async47884.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47884");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47884.
 */
cljs.core.async.__GT_t_cljs$core$async47884 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47884(f__$1,ch__$1,meta47882__$1,___$2,fn1__$1,meta47885){
return (new cljs.core.async.t_cljs$core$async47884(f__$1,ch__$1,meta47882__$1,___$2,fn1__$1,meta47885));
});

}

return (new cljs.core.async.t_cljs$core$async47884(self__.f,self__.ch,self__.meta47882,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47888 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47888) : self__.f.call(null,G__47888));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47881.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47881.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47882","meta47882",-1382604109,null)], null);
}));

(cljs.core.async.t_cljs$core$async47881.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47881.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47881");

(cljs.core.async.t_cljs$core$async47881.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47881");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47881.
 */
cljs.core.async.__GT_t_cljs$core$async47881 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47881(f__$1,ch__$1,meta47882){
return (new cljs.core.async.t_cljs$core$async47881(f__$1,ch__$1,meta47882));
});

}

return (new cljs.core.async.t_cljs$core$async47881(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47889 = (function (f,ch,meta47890){
this.f = f;
this.ch = ch;
this.meta47890 = meta47890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47891,meta47890__$1){
var self__ = this;
var _47891__$1 = this;
return (new cljs.core.async.t_cljs$core$async47889(self__.f,self__.ch,meta47890__$1));
}));

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47891){
var self__ = this;
var _47891__$1 = this;
return self__.meta47890;
}));

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47890","meta47890",1555391766,null)], null);
}));

(cljs.core.async.t_cljs$core$async47889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47889");

(cljs.core.async.t_cljs$core$async47889.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47889.
 */
cljs.core.async.__GT_t_cljs$core$async47889 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47889(f__$1,ch__$1,meta47890){
return (new cljs.core.async.t_cljs$core$async47889(f__$1,ch__$1,meta47890));
});

}

return (new cljs.core.async.t_cljs$core$async47889(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47892 = (function (p,ch,meta47893){
this.p = p;
this.ch = ch;
this.meta47893 = meta47893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47894,meta47893__$1){
var self__ = this;
var _47894__$1 = this;
return (new cljs.core.async.t_cljs$core$async47892(self__.p,self__.ch,meta47893__$1));
}));

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47894){
var self__ = this;
var _47894__$1 = this;
return self__.meta47893;
}));

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47892.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47893","meta47893",-1512595857,null)], null);
}));

(cljs.core.async.t_cljs$core$async47892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47892");

(cljs.core.async.t_cljs$core$async47892.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async47892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47892.
 */
cljs.core.async.__GT_t_cljs$core$async47892 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47892(p__$1,ch__$1,meta47893){
return (new cljs.core.async.t_cljs$core$async47892(p__$1,ch__$1,meta47893));
});

}

return (new cljs.core.async.t_cljs$core$async47892(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47897 = arguments.length;
switch (G__47897) {
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
var c__45936__auto___49295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_47918){
var state_val_47919 = (state_47918[(1)]);
if((state_val_47919 === (7))){
var inst_47914 = (state_47918[(2)]);
var state_47918__$1 = state_47918;
var statearr_47920_49298 = state_47918__$1;
(statearr_47920_49298[(2)] = inst_47914);

(statearr_47920_49298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (1))){
var state_47918__$1 = state_47918;
var statearr_47921_49299 = state_47918__$1;
(statearr_47921_49299[(2)] = null);

(statearr_47921_49299[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (4))){
var inst_47900 = (state_47918[(7)]);
var inst_47900__$1 = (state_47918[(2)]);
var inst_47901 = (inst_47900__$1 == null);
var state_47918__$1 = (function (){var statearr_47922 = state_47918;
(statearr_47922[(7)] = inst_47900__$1);

return statearr_47922;
})();
if(cljs.core.truth_(inst_47901)){
var statearr_47923_49301 = state_47918__$1;
(statearr_47923_49301[(1)] = (5));

} else {
var statearr_47924_49302 = state_47918__$1;
(statearr_47924_49302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (6))){
var inst_47900 = (state_47918[(7)]);
var inst_47905 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47900) : p.call(null,inst_47900));
var state_47918__$1 = state_47918;
if(cljs.core.truth_(inst_47905)){
var statearr_47925_49304 = state_47918__$1;
(statearr_47925_49304[(1)] = (8));

} else {
var statearr_47927_49305 = state_47918__$1;
(statearr_47927_49305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (3))){
var inst_47916 = (state_47918[(2)]);
var state_47918__$1 = state_47918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47918__$1,inst_47916);
} else {
if((state_val_47919 === (2))){
var state_47918__$1 = state_47918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47918__$1,(4),ch);
} else {
if((state_val_47919 === (11))){
var inst_47908 = (state_47918[(2)]);
var state_47918__$1 = state_47918;
var statearr_47930_49306 = state_47918__$1;
(statearr_47930_49306[(2)] = inst_47908);

(statearr_47930_49306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (9))){
var state_47918__$1 = state_47918;
var statearr_47931_49307 = state_47918__$1;
(statearr_47931_49307[(2)] = null);

(statearr_47931_49307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (5))){
var inst_47903 = cljs.core.async.close_BANG_(out);
var state_47918__$1 = state_47918;
var statearr_47932_49308 = state_47918__$1;
(statearr_47932_49308[(2)] = inst_47903);

(statearr_47932_49308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (10))){
var inst_47911 = (state_47918[(2)]);
var state_47918__$1 = (function (){var statearr_47934 = state_47918;
(statearr_47934[(8)] = inst_47911);

return statearr_47934;
})();
var statearr_47936_49309 = state_47918__$1;
(statearr_47936_49309[(2)] = null);

(statearr_47936_49309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47919 === (8))){
var inst_47900 = (state_47918[(7)]);
var state_47918__$1 = state_47918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47918__$1,(11),out,inst_47900);
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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_47937 = [null,null,null,null,null,null,null,null,null];
(statearr_47937[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_47937[(1)] = (1));

return statearr_47937;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_47918){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_47918);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e47939){var ex__45838__auto__ = e47939;
var statearr_47941_49311 = state_47918;
(statearr_47941_49311[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_47918[(4)]))){
var statearr_47942_49312 = state_47918;
(statearr_47942_49312[(1)] = cljs.core.first((state_47918[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49313 = state_47918;
state_47918 = G__49313;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_47918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_47918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_47943 = f__45937__auto__();
(statearr_47943[(6)] = c__45936__auto___49295);

return statearr_47943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47948 = arguments.length;
switch (G__47948) {
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
var c__45936__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_48020){
var state_val_48021 = (state_48020[(1)]);
if((state_val_48021 === (7))){
var inst_48016 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48026_49320 = state_48020__$1;
(statearr_48026_49320[(2)] = inst_48016);

(statearr_48026_49320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (20))){
var inst_47986 = (state_48020[(7)]);
var inst_47997 = (state_48020[(2)]);
var inst_47998 = cljs.core.next(inst_47986);
var inst_47972 = inst_47998;
var inst_47973 = null;
var inst_47974 = (0);
var inst_47975 = (0);
var state_48020__$1 = (function (){var statearr_48028 = state_48020;
(statearr_48028[(8)] = inst_47972);

(statearr_48028[(9)] = inst_47973);

(statearr_48028[(10)] = inst_47974);

(statearr_48028[(11)] = inst_47997);

(statearr_48028[(12)] = inst_47975);

return statearr_48028;
})();
var statearr_48029_49325 = state_48020__$1;
(statearr_48029_49325[(2)] = null);

(statearr_48029_49325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (1))){
var state_48020__$1 = state_48020;
var statearr_48030_49328 = state_48020__$1;
(statearr_48030_49328[(2)] = null);

(statearr_48030_49328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (4))){
var inst_47961 = (state_48020[(13)]);
var inst_47961__$1 = (state_48020[(2)]);
var inst_47962 = (inst_47961__$1 == null);
var state_48020__$1 = (function (){var statearr_48033 = state_48020;
(statearr_48033[(13)] = inst_47961__$1);

return statearr_48033;
})();
if(cljs.core.truth_(inst_47962)){
var statearr_48034_49330 = state_48020__$1;
(statearr_48034_49330[(1)] = (5));

} else {
var statearr_48035_49332 = state_48020__$1;
(statearr_48035_49332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (15))){
var state_48020__$1 = state_48020;
var statearr_48039_49333 = state_48020__$1;
(statearr_48039_49333[(2)] = null);

(statearr_48039_49333[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (21))){
var state_48020__$1 = state_48020;
var statearr_48042_49334 = state_48020__$1;
(statearr_48042_49334[(2)] = null);

(statearr_48042_49334[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (13))){
var inst_47972 = (state_48020[(8)]);
var inst_47973 = (state_48020[(9)]);
var inst_47974 = (state_48020[(10)]);
var inst_47975 = (state_48020[(12)]);
var inst_47982 = (state_48020[(2)]);
var inst_47983 = (inst_47975 + (1));
var tmp48036 = inst_47972;
var tmp48037 = inst_47973;
var tmp48038 = inst_47974;
var inst_47972__$1 = tmp48036;
var inst_47973__$1 = tmp48037;
var inst_47974__$1 = tmp48038;
var inst_47975__$1 = inst_47983;
var state_48020__$1 = (function (){var statearr_48043 = state_48020;
(statearr_48043[(14)] = inst_47982);

(statearr_48043[(8)] = inst_47972__$1);

(statearr_48043[(9)] = inst_47973__$1);

(statearr_48043[(10)] = inst_47974__$1);

(statearr_48043[(12)] = inst_47975__$1);

return statearr_48043;
})();
var statearr_48044_49336 = state_48020__$1;
(statearr_48044_49336[(2)] = null);

(statearr_48044_49336[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (22))){
var state_48020__$1 = state_48020;
var statearr_48045_49338 = state_48020__$1;
(statearr_48045_49338[(2)] = null);

(statearr_48045_49338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (6))){
var inst_47961 = (state_48020[(13)]);
var inst_47970 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47961) : f.call(null,inst_47961));
var inst_47971 = cljs.core.seq(inst_47970);
var inst_47972 = inst_47971;
var inst_47973 = null;
var inst_47974 = (0);
var inst_47975 = (0);
var state_48020__$1 = (function (){var statearr_48046 = state_48020;
(statearr_48046[(8)] = inst_47972);

(statearr_48046[(9)] = inst_47973);

(statearr_48046[(10)] = inst_47974);

(statearr_48046[(12)] = inst_47975);

return statearr_48046;
})();
var statearr_48051_49350 = state_48020__$1;
(statearr_48051_49350[(2)] = null);

(statearr_48051_49350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (17))){
var inst_47986 = (state_48020[(7)]);
var inst_47990 = cljs.core.chunk_first(inst_47986);
var inst_47991 = cljs.core.chunk_rest(inst_47986);
var inst_47992 = cljs.core.count(inst_47990);
var inst_47972 = inst_47991;
var inst_47973 = inst_47990;
var inst_47974 = inst_47992;
var inst_47975 = (0);
var state_48020__$1 = (function (){var statearr_48052 = state_48020;
(statearr_48052[(8)] = inst_47972);

(statearr_48052[(9)] = inst_47973);

(statearr_48052[(10)] = inst_47974);

(statearr_48052[(12)] = inst_47975);

return statearr_48052;
})();
var statearr_48053_49351 = state_48020__$1;
(statearr_48053_49351[(2)] = null);

(statearr_48053_49351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (3))){
var inst_48018 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48020__$1,inst_48018);
} else {
if((state_val_48021 === (12))){
var inst_48006 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48057_49353 = state_48020__$1;
(statearr_48057_49353[(2)] = inst_48006);

(statearr_48057_49353[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (2))){
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48020__$1,(4),in$);
} else {
if((state_val_48021 === (23))){
var inst_48014 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48063_49354 = state_48020__$1;
(statearr_48063_49354[(2)] = inst_48014);

(statearr_48063_49354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (19))){
var inst_48001 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48064_49355 = state_48020__$1;
(statearr_48064_49355[(2)] = inst_48001);

(statearr_48064_49355[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (11))){
var inst_47972 = (state_48020[(8)]);
var inst_47986 = (state_48020[(7)]);
var inst_47986__$1 = cljs.core.seq(inst_47972);
var state_48020__$1 = (function (){var statearr_48065 = state_48020;
(statearr_48065[(7)] = inst_47986__$1);

return statearr_48065;
})();
if(inst_47986__$1){
var statearr_48066_49357 = state_48020__$1;
(statearr_48066_49357[(1)] = (14));

} else {
var statearr_48067_49358 = state_48020__$1;
(statearr_48067_49358[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (9))){
var inst_48008 = (state_48020[(2)]);
var inst_48009 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48020__$1 = (function (){var statearr_48069 = state_48020;
(statearr_48069[(15)] = inst_48008);

return statearr_48069;
})();
if(cljs.core.truth_(inst_48009)){
var statearr_48071_49359 = state_48020__$1;
(statearr_48071_49359[(1)] = (21));

} else {
var statearr_48072_49360 = state_48020__$1;
(statearr_48072_49360[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (5))){
var inst_47964 = cljs.core.async.close_BANG_(out);
var state_48020__$1 = state_48020;
var statearr_48073_49361 = state_48020__$1;
(statearr_48073_49361[(2)] = inst_47964);

(statearr_48073_49361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (14))){
var inst_47986 = (state_48020[(7)]);
var inst_47988 = cljs.core.chunked_seq_QMARK_(inst_47986);
var state_48020__$1 = state_48020;
if(inst_47988){
var statearr_48074_49364 = state_48020__$1;
(statearr_48074_49364[(1)] = (17));

} else {
var statearr_48076_49365 = state_48020__$1;
(statearr_48076_49365[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (16))){
var inst_48004 = (state_48020[(2)]);
var state_48020__$1 = state_48020;
var statearr_48078_49366 = state_48020__$1;
(statearr_48078_49366[(2)] = inst_48004);

(statearr_48078_49366[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48021 === (10))){
var inst_47973 = (state_48020[(9)]);
var inst_47975 = (state_48020[(12)]);
var inst_47980 = cljs.core._nth(inst_47973,inst_47975);
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48020__$1,(13),out,inst_47980);
} else {
if((state_val_48021 === (18))){
var inst_47986 = (state_48020[(7)]);
var inst_47995 = cljs.core.first(inst_47986);
var state_48020__$1 = state_48020;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48020__$1,(20),out,inst_47995);
} else {
if((state_val_48021 === (8))){
var inst_47974 = (state_48020[(10)]);
var inst_47975 = (state_48020[(12)]);
var inst_47977 = (inst_47975 < inst_47974);
var inst_47978 = inst_47977;
var state_48020__$1 = state_48020;
if(cljs.core.truth_(inst_47978)){
var statearr_48079_49371 = state_48020__$1;
(statearr_48079_49371[(1)] = (10));

} else {
var statearr_48082_49372 = state_48020__$1;
(statearr_48082_49372[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____0 = (function (){
var statearr_48085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48085[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__);

(statearr_48085[(1)] = (1));

return statearr_48085;
});
var cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____1 = (function (state_48020){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_48020);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e48086){var ex__45838__auto__ = e48086;
var statearr_48087_49374 = state_48020;
(statearr_48087_49374[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_48020[(4)]))){
var statearr_48088_49375 = state_48020;
(statearr_48088_49375[(1)] = cljs.core.first((state_48020[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49378 = state_48020;
state_48020 = G__49378;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__ = function(state_48020){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____1.call(this,state_48020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__45835__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_48089 = f__45937__auto__();
(statearr_48089[(6)] = c__45936__auto__);

return statearr_48089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

return c__45936__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48098 = arguments.length;
switch (G__48098) {
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
var G__48103 = arguments.length;
switch (G__48103) {
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
var G__48106 = arguments.length;
switch (G__48106) {
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
var c__45936__auto___49395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_48137){
var state_val_48138 = (state_48137[(1)]);
if((state_val_48138 === (7))){
var inst_48128 = (state_48137[(2)]);
var state_48137__$1 = state_48137;
var statearr_48155_49396 = state_48137__$1;
(statearr_48155_49396[(2)] = inst_48128);

(statearr_48155_49396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (1))){
var inst_48110 = null;
var state_48137__$1 = (function (){var statearr_48156 = state_48137;
(statearr_48156[(7)] = inst_48110);

return statearr_48156;
})();
var statearr_48157_49398 = state_48137__$1;
(statearr_48157_49398[(2)] = null);

(statearr_48157_49398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (4))){
var inst_48113 = (state_48137[(8)]);
var inst_48113__$1 = (state_48137[(2)]);
var inst_48114 = (inst_48113__$1 == null);
var inst_48115 = cljs.core.not(inst_48114);
var state_48137__$1 = (function (){var statearr_48158 = state_48137;
(statearr_48158[(8)] = inst_48113__$1);

return statearr_48158;
})();
if(inst_48115){
var statearr_48159_49400 = state_48137__$1;
(statearr_48159_49400[(1)] = (5));

} else {
var statearr_48160_49402 = state_48137__$1;
(statearr_48160_49402[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (6))){
var state_48137__$1 = state_48137;
var statearr_48161_49403 = state_48137__$1;
(statearr_48161_49403[(2)] = null);

(statearr_48161_49403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (3))){
var inst_48130 = (state_48137[(2)]);
var inst_48131 = cljs.core.async.close_BANG_(out);
var state_48137__$1 = (function (){var statearr_48162 = state_48137;
(statearr_48162[(9)] = inst_48130);

return statearr_48162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48137__$1,inst_48131);
} else {
if((state_val_48138 === (2))){
var state_48137__$1 = state_48137;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48137__$1,(4),ch);
} else {
if((state_val_48138 === (11))){
var inst_48113 = (state_48137[(8)]);
var inst_48122 = (state_48137[(2)]);
var inst_48110 = inst_48113;
var state_48137__$1 = (function (){var statearr_48165 = state_48137;
(statearr_48165[(10)] = inst_48122);

(statearr_48165[(7)] = inst_48110);

return statearr_48165;
})();
var statearr_48166_49405 = state_48137__$1;
(statearr_48166_49405[(2)] = null);

(statearr_48166_49405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (9))){
var inst_48113 = (state_48137[(8)]);
var state_48137__$1 = state_48137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48137__$1,(11),out,inst_48113);
} else {
if((state_val_48138 === (5))){
var inst_48113 = (state_48137[(8)]);
var inst_48110 = (state_48137[(7)]);
var inst_48117 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48113,inst_48110);
var state_48137__$1 = state_48137;
if(inst_48117){
var statearr_48169_49408 = state_48137__$1;
(statearr_48169_49408[(1)] = (8));

} else {
var statearr_48173_49409 = state_48137__$1;
(statearr_48173_49409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (10))){
var inst_48125 = (state_48137[(2)]);
var state_48137__$1 = state_48137;
var statearr_48174_49412 = state_48137__$1;
(statearr_48174_49412[(2)] = inst_48125);

(statearr_48174_49412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48138 === (8))){
var inst_48110 = (state_48137[(7)]);
var tmp48167 = inst_48110;
var inst_48110__$1 = tmp48167;
var state_48137__$1 = (function (){var statearr_48175 = state_48137;
(statearr_48175[(7)] = inst_48110__$1);

return statearr_48175;
})();
var statearr_48176_49414 = state_48137__$1;
(statearr_48176_49414[(2)] = null);

(statearr_48176_49414[(1)] = (2));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_48177 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48177[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_48177[(1)] = (1));

return statearr_48177;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_48137){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_48137);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e48178){var ex__45838__auto__ = e48178;
var statearr_48179_49420 = state_48137;
(statearr_48179_49420[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_48137[(4)]))){
var statearr_48180_49422 = state_48137;
(statearr_48180_49422[(1)] = cljs.core.first((state_48137[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49423 = state_48137;
state_48137 = G__49423;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_48137){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_48137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_48181 = f__45937__auto__();
(statearr_48181[(6)] = c__45936__auto___49395);

return statearr_48181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48211 = arguments.length;
switch (G__48211) {
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
var c__45936__auto___49426 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_48257){
var state_val_48258 = (state_48257[(1)]);
if((state_val_48258 === (7))){
var inst_48253 = (state_48257[(2)]);
var state_48257__$1 = state_48257;
var statearr_48263_49429 = state_48257__$1;
(statearr_48263_49429[(2)] = inst_48253);

(statearr_48263_49429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (1))){
var inst_48216 = (new Array(n));
var inst_48217 = inst_48216;
var inst_48218 = (0);
var state_48257__$1 = (function (){var statearr_48265 = state_48257;
(statearr_48265[(7)] = inst_48217);

(statearr_48265[(8)] = inst_48218);

return statearr_48265;
})();
var statearr_48269_49432 = state_48257__$1;
(statearr_48269_49432[(2)] = null);

(statearr_48269_49432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (4))){
var inst_48221 = (state_48257[(9)]);
var inst_48221__$1 = (state_48257[(2)]);
var inst_48222 = (inst_48221__$1 == null);
var inst_48223 = cljs.core.not(inst_48222);
var state_48257__$1 = (function (){var statearr_48270 = state_48257;
(statearr_48270[(9)] = inst_48221__$1);

return statearr_48270;
})();
if(inst_48223){
var statearr_48271_49433 = state_48257__$1;
(statearr_48271_49433[(1)] = (5));

} else {
var statearr_48272_49434 = state_48257__$1;
(statearr_48272_49434[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (15))){
var inst_48247 = (state_48257[(2)]);
var state_48257__$1 = state_48257;
var statearr_48273_49435 = state_48257__$1;
(statearr_48273_49435[(2)] = inst_48247);

(statearr_48273_49435[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (13))){
var state_48257__$1 = state_48257;
var statearr_48274_49438 = state_48257__$1;
(statearr_48274_49438[(2)] = null);

(statearr_48274_49438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (6))){
var inst_48218 = (state_48257[(8)]);
var inst_48243 = (inst_48218 > (0));
var state_48257__$1 = state_48257;
if(cljs.core.truth_(inst_48243)){
var statearr_48275_49440 = state_48257__$1;
(statearr_48275_49440[(1)] = (12));

} else {
var statearr_48276_49442 = state_48257__$1;
(statearr_48276_49442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (3))){
var inst_48255 = (state_48257[(2)]);
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48257__$1,inst_48255);
} else {
if((state_val_48258 === (12))){
var inst_48217 = (state_48257[(7)]);
var inst_48245 = cljs.core.vec(inst_48217);
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48257__$1,(15),out,inst_48245);
} else {
if((state_val_48258 === (2))){
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48257__$1,(4),ch);
} else {
if((state_val_48258 === (11))){
var inst_48237 = (state_48257[(2)]);
var inst_48238 = (new Array(n));
var inst_48217 = inst_48238;
var inst_48218 = (0);
var state_48257__$1 = (function (){var statearr_48277 = state_48257;
(statearr_48277[(7)] = inst_48217);

(statearr_48277[(8)] = inst_48218);

(statearr_48277[(10)] = inst_48237);

return statearr_48277;
})();
var statearr_48278_49448 = state_48257__$1;
(statearr_48278_49448[(2)] = null);

(statearr_48278_49448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (9))){
var inst_48217 = (state_48257[(7)]);
var inst_48235 = cljs.core.vec(inst_48217);
var state_48257__$1 = state_48257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48257__$1,(11),out,inst_48235);
} else {
if((state_val_48258 === (5))){
var inst_48230 = (state_48257[(11)]);
var inst_48217 = (state_48257[(7)]);
var inst_48221 = (state_48257[(9)]);
var inst_48218 = (state_48257[(8)]);
var inst_48225 = (inst_48217[inst_48218] = inst_48221);
var inst_48230__$1 = (inst_48218 + (1));
var inst_48231 = (inst_48230__$1 < n);
var state_48257__$1 = (function (){var statearr_48279 = state_48257;
(statearr_48279[(11)] = inst_48230__$1);

(statearr_48279[(12)] = inst_48225);

return statearr_48279;
})();
if(cljs.core.truth_(inst_48231)){
var statearr_48280_49452 = state_48257__$1;
(statearr_48280_49452[(1)] = (8));

} else {
var statearr_48281_49453 = state_48257__$1;
(statearr_48281_49453[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (14))){
var inst_48250 = (state_48257[(2)]);
var inst_48251 = cljs.core.async.close_BANG_(out);
var state_48257__$1 = (function (){var statearr_48283 = state_48257;
(statearr_48283[(13)] = inst_48250);

return statearr_48283;
})();
var statearr_48284_49455 = state_48257__$1;
(statearr_48284_49455[(2)] = inst_48251);

(statearr_48284_49455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (10))){
var inst_48241 = (state_48257[(2)]);
var state_48257__$1 = state_48257;
var statearr_48285_49458 = state_48257__$1;
(statearr_48285_49458[(2)] = inst_48241);

(statearr_48285_49458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48258 === (8))){
var inst_48230 = (state_48257[(11)]);
var inst_48217 = (state_48257[(7)]);
var tmp48282 = inst_48217;
var inst_48217__$1 = tmp48282;
var inst_48218 = inst_48230;
var state_48257__$1 = (function (){var statearr_48286 = state_48257;
(statearr_48286[(7)] = inst_48217__$1);

(statearr_48286[(8)] = inst_48218);

return statearr_48286;
})();
var statearr_48287_49460 = state_48257__$1;
(statearr_48287_49460[(2)] = null);

(statearr_48287_49460[(1)] = (2));


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
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_48288 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48288[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_48288[(1)] = (1));

return statearr_48288;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_48257){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_48257);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e48289){var ex__45838__auto__ = e48289;
var statearr_48290_49470 = state_48257;
(statearr_48290_49470[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_48257[(4)]))){
var statearr_48291_49471 = state_48257;
(statearr_48291_49471[(1)] = cljs.core.first((state_48257[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49476 = state_48257;
state_48257 = G__49476;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_48257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_48257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_48292 = f__45937__auto__();
(statearr_48292[(6)] = c__45936__auto___49426);

return statearr_48292;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48300 = arguments.length;
switch (G__48300) {
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
var c__45936__auto___49480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_48351){
var state_val_48352 = (state_48351[(1)]);
if((state_val_48352 === (7))){
var inst_48347 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48357_49482 = state_48351__$1;
(statearr_48357_49482[(2)] = inst_48347);

(statearr_48357_49482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (1))){
var inst_48303 = [];
var inst_48305 = inst_48303;
var inst_48306 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48351__$1 = (function (){var statearr_48358 = state_48351;
(statearr_48358[(7)] = inst_48305);

(statearr_48358[(8)] = inst_48306);

return statearr_48358;
})();
var statearr_48359_49485 = state_48351__$1;
(statearr_48359_49485[(2)] = null);

(statearr_48359_49485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (4))){
var inst_48309 = (state_48351[(9)]);
var inst_48309__$1 = (state_48351[(2)]);
var inst_48310 = (inst_48309__$1 == null);
var inst_48311 = cljs.core.not(inst_48310);
var state_48351__$1 = (function (){var statearr_48363 = state_48351;
(statearr_48363[(9)] = inst_48309__$1);

return statearr_48363;
})();
if(inst_48311){
var statearr_48364_49488 = state_48351__$1;
(statearr_48364_49488[(1)] = (5));

} else {
var statearr_48366_49489 = state_48351__$1;
(statearr_48366_49489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (15))){
var inst_48305 = (state_48351[(7)]);
var inst_48339 = cljs.core.vec(inst_48305);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48351__$1,(18),out,inst_48339);
} else {
if((state_val_48352 === (13))){
var inst_48333 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48368_49491 = state_48351__$1;
(statearr_48368_49491[(2)] = inst_48333);

(statearr_48368_49491[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (6))){
var inst_48305 = (state_48351[(7)]);
var inst_48335 = inst_48305.length;
var inst_48336 = (inst_48335 > (0));
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48336)){
var statearr_48369_49493 = state_48351__$1;
(statearr_48369_49493[(1)] = (15));

} else {
var statearr_48370_49494 = state_48351__$1;
(statearr_48370_49494[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (17))){
var inst_48344 = (state_48351[(2)]);
var inst_48345 = cljs.core.async.close_BANG_(out);
var state_48351__$1 = (function (){var statearr_48371 = state_48351;
(statearr_48371[(10)] = inst_48344);

return statearr_48371;
})();
var statearr_48373_49495 = state_48351__$1;
(statearr_48373_49495[(2)] = inst_48345);

(statearr_48373_49495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (3))){
var inst_48349 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48351__$1,inst_48349);
} else {
if((state_val_48352 === (12))){
var inst_48305 = (state_48351[(7)]);
var inst_48325 = cljs.core.vec(inst_48305);
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48351__$1,(14),out,inst_48325);
} else {
if((state_val_48352 === (2))){
var state_48351__$1 = state_48351;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48351__$1,(4),ch);
} else {
if((state_val_48352 === (11))){
var inst_48309 = (state_48351[(9)]);
var inst_48305 = (state_48351[(7)]);
var inst_48313 = (state_48351[(11)]);
var inst_48322 = inst_48305.push(inst_48309);
var tmp48375 = inst_48305;
var inst_48305__$1 = tmp48375;
var inst_48306 = inst_48313;
var state_48351__$1 = (function (){var statearr_48378 = state_48351;
(statearr_48378[(7)] = inst_48305__$1);

(statearr_48378[(12)] = inst_48322);

(statearr_48378[(8)] = inst_48306);

return statearr_48378;
})();
var statearr_48379_49499 = state_48351__$1;
(statearr_48379_49499[(2)] = null);

(statearr_48379_49499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (9))){
var inst_48306 = (state_48351[(8)]);
var inst_48318 = cljs.core.keyword_identical_QMARK_(inst_48306,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48351__$1 = state_48351;
var statearr_48381_49500 = state_48351__$1;
(statearr_48381_49500[(2)] = inst_48318);

(statearr_48381_49500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (5))){
var inst_48309 = (state_48351[(9)]);
var inst_48306 = (state_48351[(8)]);
var inst_48315 = (state_48351[(13)]);
var inst_48313 = (state_48351[(11)]);
var inst_48313__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48309) : f.call(null,inst_48309));
var inst_48315__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48313__$1,inst_48306);
var state_48351__$1 = (function (){var statearr_48390 = state_48351;
(statearr_48390[(13)] = inst_48315__$1);

(statearr_48390[(11)] = inst_48313__$1);

return statearr_48390;
})();
if(inst_48315__$1){
var statearr_48391_49504 = state_48351__$1;
(statearr_48391_49504[(1)] = (8));

} else {
var statearr_48392_49505 = state_48351__$1;
(statearr_48392_49505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (14))){
var inst_48309 = (state_48351[(9)]);
var inst_48313 = (state_48351[(11)]);
var inst_48327 = (state_48351[(2)]);
var inst_48329 = [];
var inst_48330 = inst_48329.push(inst_48309);
var inst_48305 = inst_48329;
var inst_48306 = inst_48313;
var state_48351__$1 = (function (){var statearr_48393 = state_48351;
(statearr_48393[(14)] = inst_48327);

(statearr_48393[(7)] = inst_48305);

(statearr_48393[(15)] = inst_48330);

(statearr_48393[(8)] = inst_48306);

return statearr_48393;
})();
var statearr_48394_49509 = state_48351__$1;
(statearr_48394_49509[(2)] = null);

(statearr_48394_49509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (16))){
var state_48351__$1 = state_48351;
var statearr_48400_49510 = state_48351__$1;
(statearr_48400_49510[(2)] = null);

(statearr_48400_49510[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (10))){
var inst_48320 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
if(cljs.core.truth_(inst_48320)){
var statearr_48406_49511 = state_48351__$1;
(statearr_48406_49511[(1)] = (11));

} else {
var statearr_48412_49513 = state_48351__$1;
(statearr_48412_49513[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (18))){
var inst_48341 = (state_48351[(2)]);
var state_48351__$1 = state_48351;
var statearr_48417_49514 = state_48351__$1;
(statearr_48417_49514[(2)] = inst_48341);

(statearr_48417_49514[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48352 === (8))){
var inst_48315 = (state_48351[(13)]);
var state_48351__$1 = state_48351;
var statearr_48422_49516 = state_48351__$1;
(statearr_48422_49516[(2)] = inst_48315);

(statearr_48422_49516[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__45835__auto__ = null;
var cljs$core$async$state_machine__45835__auto____0 = (function (){
var statearr_48423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48423[(0)] = cljs$core$async$state_machine__45835__auto__);

(statearr_48423[(1)] = (1));

return statearr_48423;
});
var cljs$core$async$state_machine__45835__auto____1 = (function (state_48351){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_48351);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e48424){var ex__45838__auto__ = e48424;
var statearr_48430_49518 = state_48351;
(statearr_48430_49518[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_48351[(4)]))){
var statearr_48431_49520 = state_48351;
(statearr_48431_49520[(1)] = cljs.core.first((state_48351[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49522 = state_48351;
state_48351 = G__49522;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
cljs$core$async$state_machine__45835__auto__ = function(state_48351){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__45835__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__45835__auto____1.call(this,state_48351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__45835__auto____0;
cljs$core$async$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__45835__auto____1;
return cljs$core$async$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_48432 = f__45937__auto__();
(statearr_48432[(6)] = c__45936__auto___49480);

return statearr_48432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
