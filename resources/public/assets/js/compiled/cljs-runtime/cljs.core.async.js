goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__42527 = arguments.length;
switch (G__42527) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42535 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42535 = (function (f,blockable,meta42536){
this.f = f;
this.blockable = blockable;
this.meta42536 = meta42536;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42537,meta42536__$1){
var self__ = this;
var _42537__$1 = this;
return (new cljs.core.async.t_cljs$core$async42535(self__.f,self__.blockable,meta42536__$1));
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42537){
var self__ = this;
var _42537__$1 = this;
return self__.meta42536;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async42535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async42535.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta42536","meta42536",-1043537521,null)], null);
}));

(cljs.core.async.t_cljs$core$async42535.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42535.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42535");

(cljs.core.async.t_cljs$core$async42535.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42535");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42535.
 */
cljs.core.async.__GT_t_cljs$core$async42535 = (function cljs$core$async$__GT_t_cljs$core$async42535(f__$1,blockable__$1,meta42536){
return (new cljs.core.async.t_cljs$core$async42535(f__$1,blockable__$1,meta42536));
});

}

return (new cljs.core.async.t_cljs$core$async42535(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__42580 = arguments.length;
switch (G__42580) {
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
var G__42592 = arguments.length;
switch (G__42592) {
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
var G__42606 = arguments.length;
switch (G__42606) {
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
var val_45068 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45068) : fn1.call(null,val_45068));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_45068) : fn1.call(null,val_45068));
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
var G__42608 = arguments.length;
switch (G__42608) {
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
var n__4706__auto___45088 = n;
var x_45089 = (0);
while(true){
if((x_45089 < n__4706__auto___45088)){
(a[x_45089] = x_45089);

var G__45090 = (x_45089 + (1));
x_45089 = G__45090;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42615 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42615 = (function (flag,meta42616){
this.flag = flag;
this.meta42616 = meta42616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42617,meta42616__$1){
var self__ = this;
var _42617__$1 = this;
return (new cljs.core.async.t_cljs$core$async42615(self__.flag,meta42616__$1));
}));

(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42617){
var self__ = this;
var _42617__$1 = this;
return self__.meta42616;
}));

(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async42615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta42616","meta42616",-2142584391,null)], null);
}));

(cljs.core.async.t_cljs$core$async42615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42615");

(cljs.core.async.t_cljs$core$async42615.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42615.
 */
cljs.core.async.__GT_t_cljs$core$async42615 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async42615(flag__$1,meta42616){
return (new cljs.core.async.t_cljs$core$async42615(flag__$1,meta42616));
});

}

return (new cljs.core.async.t_cljs$core$async42615(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42622 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42622 = (function (flag,cb,meta42623){
this.flag = flag;
this.cb = cb;
this.meta42623 = meta42623;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42624,meta42623__$1){
var self__ = this;
var _42624__$1 = this;
return (new cljs.core.async.t_cljs$core$async42622(self__.flag,self__.cb,meta42623__$1));
}));

(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42624){
var self__ = this;
var _42624__$1 = this;
return self__.meta42623;
}));

(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42622.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async42622.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta42623","meta42623",-311046625,null)], null);
}));

(cljs.core.async.t_cljs$core$async42622.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42622.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42622");

(cljs.core.async.t_cljs$core$async42622.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async42622");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42622.
 */
cljs.core.async.__GT_t_cljs$core$async42622 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async42622(flag__$1,cb__$1,meta42623){
return (new cljs.core.async.t_cljs$core$async42622(flag__$1,cb__$1,meta42623));
});

}

return (new cljs.core.async.t_cljs$core$async42622(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__42634_SHARP_){
var G__42637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42634_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42637) : fret.call(null,G__42637));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__42635_SHARP_){
var G__42638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42635_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__42638) : fret.call(null,G__42638));
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
var G__45096 = (i + (1));
i = G__45096;
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
var len__4829__auto___45098 = arguments.length;
var i__4830__auto___45099 = (0);
while(true){
if((i__4830__auto___45099 < len__4829__auto___45098)){
args__4835__auto__.push((arguments[i__4830__auto___45099]));

var G__45100 = (i__4830__auto___45099 + (1));
i__4830__auto___45099 = G__45100;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__42646){
var map__42647 = p__42646;
var map__42647__$1 = cljs.core.__destructure_map(map__42647);
var opts = map__42647__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq42640){
var G__42641 = cljs.core.first(seq42640);
var seq42640__$1 = cljs.core.next(seq42640);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42641,seq42640__$1);
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
var G__42649 = arguments.length;
switch (G__42649) {
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
var c__42443__auto___45104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_42683){
var state_val_42684 = (state_42683[(1)]);
if((state_val_42684 === (7))){
var inst_42678 = (state_42683[(2)]);
var state_42683__$1 = state_42683;
var statearr_42687_45105 = state_42683__$1;
(statearr_42687_45105[(2)] = inst_42678);

(statearr_42687_45105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (1))){
var state_42683__$1 = state_42683;
var statearr_42697_45106 = state_42683__$1;
(statearr_42697_45106[(2)] = null);

(statearr_42697_45106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (4))){
var inst_42658 = (state_42683[(7)]);
var inst_42658__$1 = (state_42683[(2)]);
var inst_42659 = (inst_42658__$1 == null);
var state_42683__$1 = (function (){var statearr_42698 = state_42683;
(statearr_42698[(7)] = inst_42658__$1);

return statearr_42698;
})();
if(cljs.core.truth_(inst_42659)){
var statearr_42699_45108 = state_42683__$1;
(statearr_42699_45108[(1)] = (5));

} else {
var statearr_42700_45109 = state_42683__$1;
(statearr_42700_45109[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (13))){
var state_42683__$1 = state_42683;
var statearr_42701_45111 = state_42683__$1;
(statearr_42701_45111[(2)] = null);

(statearr_42701_45111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (6))){
var inst_42658 = (state_42683[(7)]);
var state_42683__$1 = state_42683;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42683__$1,(11),to,inst_42658);
} else {
if((state_val_42684 === (3))){
var inst_42680 = (state_42683[(2)]);
var state_42683__$1 = state_42683;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42683__$1,inst_42680);
} else {
if((state_val_42684 === (12))){
var state_42683__$1 = state_42683;
var statearr_42711_45113 = state_42683__$1;
(statearr_42711_45113[(2)] = null);

(statearr_42711_45113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (2))){
var state_42683__$1 = state_42683;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42683__$1,(4),from);
} else {
if((state_val_42684 === (11))){
var inst_42671 = (state_42683[(2)]);
var state_42683__$1 = state_42683;
if(cljs.core.truth_(inst_42671)){
var statearr_42712_45115 = state_42683__$1;
(statearr_42712_45115[(1)] = (12));

} else {
var statearr_42713_45116 = state_42683__$1;
(statearr_42713_45116[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (9))){
var state_42683__$1 = state_42683;
var statearr_42714_45121 = state_42683__$1;
(statearr_42714_45121[(2)] = null);

(statearr_42714_45121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (5))){
var state_42683__$1 = state_42683;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42715_45122 = state_42683__$1;
(statearr_42715_45122[(1)] = (8));

} else {
var statearr_42716_45123 = state_42683__$1;
(statearr_42716_45123[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (14))){
var inst_42676 = (state_42683[(2)]);
var state_42683__$1 = state_42683;
var statearr_42717_45125 = state_42683__$1;
(statearr_42717_45125[(2)] = inst_42676);

(statearr_42717_45125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (10))){
var inst_42668 = (state_42683[(2)]);
var state_42683__$1 = state_42683;
var statearr_42721_45127 = state_42683__$1;
(statearr_42721_45127[(2)] = inst_42668);

(statearr_42721_45127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42684 === (8))){
var inst_42665 = cljs.core.async.close_BANG_(to);
var state_42683__$1 = state_42683;
var statearr_42722_45128 = state_42683__$1;
(statearr_42722_45128[(2)] = inst_42665);

(statearr_42722_45128[(1)] = (10));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_42723 = [null,null,null,null,null,null,null,null];
(statearr_42723[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_42723[(1)] = (1));

return statearr_42723;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_42683){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42683);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42724){var ex__42332__auto__ = e42724;
var statearr_42725_45129 = state_42683;
(statearr_42725_45129[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42683[(4)]))){
var statearr_42726_45130 = state_42683;
(statearr_42726_45130[(1)] = cljs.core.first((state_42683[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45131 = state_42683;
state_42683 = G__45131;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_42683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_42683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_42727 = f__42444__auto__();
(statearr_42727[(6)] = c__42443__auto___45104);

return statearr_42727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var process = (function (p__42731){
var vec__42732 = p__42731;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42732,(1),null);
var job = vec__42732;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__42443__auto___45136 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_42739){
var state_val_42740 = (state_42739[(1)]);
if((state_val_42740 === (1))){
var state_42739__$1 = state_42739;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42739__$1,(2),res,v);
} else {
if((state_val_42740 === (2))){
var inst_42736 = (state_42739[(2)]);
var inst_42737 = cljs.core.async.close_BANG_(res);
var state_42739__$1 = (function (){var statearr_42744 = state_42739;
(statearr_42744[(7)] = inst_42736);

return statearr_42744;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42739__$1,inst_42737);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_42745 = [null,null,null,null,null,null,null,null];
(statearr_42745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__);

(statearr_42745[(1)] = (1));

return statearr_42745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1 = (function (state_42739){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42739);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42749){var ex__42332__auto__ = e42749;
var statearr_42750_45139 = state_42739;
(statearr_42750_45139[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42739[(4)]))){
var statearr_42751_45141 = state_42739;
(statearr_42751_45141[(1)] = cljs.core.first((state_42739[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45142 = state_42739;
state_42739 = G__45142;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = function(state_42739){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1.call(this,state_42739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_42752 = f__42444__auto__();
(statearr_42752[(6)] = c__42443__auto___45136);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__42753){
var vec__42754 = p__42753;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42754,(1),null);
var job = vec__42754;
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
var n__4706__auto___45145 = n;
var __45146 = (0);
while(true){
if((__45146 < n__4706__auto___45145)){
var G__42761_45147 = type;
var G__42761_45148__$1 = (((G__42761_45147 instanceof cljs.core.Keyword))?G__42761_45147.fqn:null);
switch (G__42761_45148__$1) {
case "compute":
var c__42443__auto___45150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45146,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = ((function (__45146,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function (state_42774){
var state_val_42775 = (state_42774[(1)]);
if((state_val_42775 === (1))){
var state_42774__$1 = state_42774;
var statearr_42780_45151 = state_42774__$1;
(statearr_42780_45151[(2)] = null);

(statearr_42780_45151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (2))){
var state_42774__$1 = state_42774;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42774__$1,(4),jobs);
} else {
if((state_val_42775 === (3))){
var inst_42772 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42774__$1,inst_42772);
} else {
if((state_val_42775 === (4))){
var inst_42764 = (state_42774[(2)]);
var inst_42765 = process(inst_42764);
var state_42774__$1 = state_42774;
if(cljs.core.truth_(inst_42765)){
var statearr_42781_45156 = state_42774__$1;
(statearr_42781_45156[(1)] = (5));

} else {
var statearr_42782_45157 = state_42774__$1;
(statearr_42782_45157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (5))){
var state_42774__$1 = state_42774;
var statearr_42783_45158 = state_42774__$1;
(statearr_42783_45158[(2)] = null);

(statearr_42783_45158[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (6))){
var state_42774__$1 = state_42774;
var statearr_42784_45159 = state_42774__$1;
(statearr_42784_45159[(2)] = null);

(statearr_42784_45159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42775 === (7))){
var inst_42770 = (state_42774[(2)]);
var state_42774__$1 = state_42774;
var statearr_42786_45160 = state_42774__$1;
(statearr_42786_45160[(2)] = inst_42770);

(statearr_42786_45160[(1)] = (3));


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
});})(__45146,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
;
return ((function (__45146,switch__42328__auto__,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_42787 = [null,null,null,null,null,null,null];
(statearr_42787[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__);

(statearr_42787[(1)] = (1));

return statearr_42787;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1 = (function (state_42774){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42774);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42788){var ex__42332__auto__ = e42788;
var statearr_42789_45163 = state_42774;
(statearr_42789_45163[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42774[(4)]))){
var statearr_42790_45164 = state_42774;
(statearr_42790_45164[(1)] = cljs.core.first((state_42774[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45165 = state_42774;
state_42774 = G__45165;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = function(state_42774){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1.call(this,state_42774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__;
})()
;})(__45146,switch__42328__auto__,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
})();
var state__42445__auto__ = (function (){var statearr_42795 = f__42444__auto__();
(statearr_42795[(6)] = c__42443__auto___45150);

return statearr_42795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
});})(__45146,c__42443__auto___45150,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
);


break;
case "async":
var c__42443__auto___45166 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__45146,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = ((function (__45146,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function (state_42811){
var state_val_42812 = (state_42811[(1)]);
if((state_val_42812 === (1))){
var state_42811__$1 = state_42811;
var statearr_42813_45169 = state_42811__$1;
(statearr_42813_45169[(2)] = null);

(statearr_42813_45169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (2))){
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42811__$1,(4),jobs);
} else {
if((state_val_42812 === (3))){
var inst_42809 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42811__$1,inst_42809);
} else {
if((state_val_42812 === (4))){
var inst_42801 = (state_42811[(2)]);
var inst_42802 = async(inst_42801);
var state_42811__$1 = state_42811;
if(cljs.core.truth_(inst_42802)){
var statearr_42814_45170 = state_42811__$1;
(statearr_42814_45170[(1)] = (5));

} else {
var statearr_42815_45171 = state_42811__$1;
(statearr_42815_45171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (5))){
var state_42811__$1 = state_42811;
var statearr_42816_45172 = state_42811__$1;
(statearr_42816_45172[(2)] = null);

(statearr_42816_45172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (6))){
var state_42811__$1 = state_42811;
var statearr_42817_45174 = state_42811__$1;
(statearr_42817_45174[(2)] = null);

(statearr_42817_45174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42812 === (7))){
var inst_42807 = (state_42811[(2)]);
var state_42811__$1 = state_42811;
var statearr_42818_45175 = state_42811__$1;
(statearr_42818_45175[(2)] = inst_42807);

(statearr_42818_45175[(1)] = (3));


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
});})(__45146,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
;
return ((function (__45146,switch__42328__auto__,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_42819 = [null,null,null,null,null,null,null];
(statearr_42819[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__);

(statearr_42819[(1)] = (1));

return statearr_42819;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1 = (function (state_42811){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42811);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42820){var ex__42332__auto__ = e42820;
var statearr_42821_45177 = state_42811;
(statearr_42821_45177[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42811[(4)]))){
var statearr_42822_45178 = state_42811;
(statearr_42822_45178[(1)] = cljs.core.first((state_42811[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45179 = state_42811;
state_42811 = G__45179;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = function(state_42811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1.call(this,state_42811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__;
})()
;})(__45146,switch__42328__auto__,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
})();
var state__42445__auto__ = (function (){var statearr_42823 = f__42444__auto__();
(statearr_42823[(6)] = c__42443__auto___45166);

return statearr_42823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
});})(__45146,c__42443__auto___45166,G__42761_45147,G__42761_45148__$1,n__4706__auto___45145,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42761_45148__$1)].join('')));

}

var G__45180 = (__45146 + (1));
__45146 = G__45180;
continue;
} else {
}
break;
}

var c__42443__auto___45181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_42846){
var state_val_42847 = (state_42846[(1)]);
if((state_val_42847 === (7))){
var inst_42841 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
var statearr_42849_45183 = state_42846__$1;
(statearr_42849_45183[(2)] = inst_42841);

(statearr_42849_45183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (1))){
var state_42846__$1 = state_42846;
var statearr_42850_45184 = state_42846__$1;
(statearr_42850_45184[(2)] = null);

(statearr_42850_45184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (4))){
var inst_42826 = (state_42846[(7)]);
var inst_42826__$1 = (state_42846[(2)]);
var inst_42827 = (inst_42826__$1 == null);
var state_42846__$1 = (function (){var statearr_42851 = state_42846;
(statearr_42851[(7)] = inst_42826__$1);

return statearr_42851;
})();
if(cljs.core.truth_(inst_42827)){
var statearr_42852_45185 = state_42846__$1;
(statearr_42852_45185[(1)] = (5));

} else {
var statearr_42853_45186 = state_42846__$1;
(statearr_42853_45186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (6))){
var inst_42826 = (state_42846[(7)]);
var inst_42831 = (state_42846[(8)]);
var inst_42831__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_42832 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42833 = [inst_42826,inst_42831__$1];
var inst_42834 = (new cljs.core.PersistentVector(null,2,(5),inst_42832,inst_42833,null));
var state_42846__$1 = (function (){var statearr_42858 = state_42846;
(statearr_42858[(8)] = inst_42831__$1);

return statearr_42858;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42846__$1,(8),jobs,inst_42834);
} else {
if((state_val_42847 === (3))){
var inst_42843 = (state_42846[(2)]);
var state_42846__$1 = state_42846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42846__$1,inst_42843);
} else {
if((state_val_42847 === (2))){
var state_42846__$1 = state_42846;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42846__$1,(4),from);
} else {
if((state_val_42847 === (9))){
var inst_42838 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42860 = state_42846;
(statearr_42860[(9)] = inst_42838);

return statearr_42860;
})();
var statearr_42861_45190 = state_42846__$1;
(statearr_42861_45190[(2)] = null);

(statearr_42861_45190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (5))){
var inst_42829 = cljs.core.async.close_BANG_(jobs);
var state_42846__$1 = state_42846;
var statearr_42862_45191 = state_42846__$1;
(statearr_42862_45191[(2)] = inst_42829);

(statearr_42862_45191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42847 === (8))){
var inst_42831 = (state_42846[(8)]);
var inst_42836 = (state_42846[(2)]);
var state_42846__$1 = (function (){var statearr_42864 = state_42846;
(statearr_42864[(10)] = inst_42836);

return statearr_42864;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42846__$1,(9),results,inst_42831);
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
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_42865 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42865[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__);

(statearr_42865[(1)] = (1));

return statearr_42865;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1 = (function (state_42846){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42846);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42870){var ex__42332__auto__ = e42870;
var statearr_42871_45194 = state_42846;
(statearr_42871_45194[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42846[(4)]))){
var statearr_42872_45196 = state_42846;
(statearr_42872_45196[(1)] = cljs.core.first((state_42846[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45198 = state_42846;
state_42846 = G__45198;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = function(state_42846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1.call(this,state_42846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_42873 = f__42444__auto__();
(statearr_42873[(6)] = c__42443__auto___45181);

return statearr_42873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


var c__42443__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_42911){
var state_val_42912 = (state_42911[(1)]);
if((state_val_42912 === (7))){
var inst_42907 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42913_45203 = state_42911__$1;
(statearr_42913_45203[(2)] = inst_42907);

(statearr_42913_45203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (20))){
var state_42911__$1 = state_42911;
var statearr_42914_45204 = state_42911__$1;
(statearr_42914_45204[(2)] = null);

(statearr_42914_45204[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (1))){
var state_42911__$1 = state_42911;
var statearr_42915_45205 = state_42911__$1;
(statearr_42915_45205[(2)] = null);

(statearr_42915_45205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (4))){
var inst_42876 = (state_42911[(7)]);
var inst_42876__$1 = (state_42911[(2)]);
var inst_42877 = (inst_42876__$1 == null);
var state_42911__$1 = (function (){var statearr_42916 = state_42911;
(statearr_42916[(7)] = inst_42876__$1);

return statearr_42916;
})();
if(cljs.core.truth_(inst_42877)){
var statearr_42917_45207 = state_42911__$1;
(statearr_42917_45207[(1)] = (5));

} else {
var statearr_42918_45208 = state_42911__$1;
(statearr_42918_45208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (15))){
var inst_42889 = (state_42911[(8)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42911__$1,(18),to,inst_42889);
} else {
if((state_val_42912 === (21))){
var inst_42902 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42920_45210 = state_42911__$1;
(statearr_42920_45210[(2)] = inst_42902);

(statearr_42920_45210[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (13))){
var inst_42904 = (state_42911[(2)]);
var state_42911__$1 = (function (){var statearr_42921 = state_42911;
(statearr_42921[(9)] = inst_42904);

return statearr_42921;
})();
var statearr_42922_45211 = state_42911__$1;
(statearr_42922_45211[(2)] = null);

(statearr_42922_45211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (6))){
var inst_42876 = (state_42911[(7)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42911__$1,(11),inst_42876);
} else {
if((state_val_42912 === (17))){
var inst_42897 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
if(cljs.core.truth_(inst_42897)){
var statearr_42926_45212 = state_42911__$1;
(statearr_42926_45212[(1)] = (19));

} else {
var statearr_42927_45213 = state_42911__$1;
(statearr_42927_45213[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (3))){
var inst_42909 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42911__$1,inst_42909);
} else {
if((state_val_42912 === (12))){
var inst_42886 = (state_42911[(10)]);
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42911__$1,(14),inst_42886);
} else {
if((state_val_42912 === (2))){
var state_42911__$1 = state_42911;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42911__$1,(4),results);
} else {
if((state_val_42912 === (19))){
var state_42911__$1 = state_42911;
var statearr_42928_45216 = state_42911__$1;
(statearr_42928_45216[(2)] = null);

(statearr_42928_45216[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (11))){
var inst_42886 = (state_42911[(2)]);
var state_42911__$1 = (function (){var statearr_42929 = state_42911;
(statearr_42929[(10)] = inst_42886);

return statearr_42929;
})();
var statearr_42930_45219 = state_42911__$1;
(statearr_42930_45219[(2)] = null);

(statearr_42930_45219[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (9))){
var state_42911__$1 = state_42911;
var statearr_42931_45220 = state_42911__$1;
(statearr_42931_45220[(2)] = null);

(statearr_42931_45220[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (5))){
var state_42911__$1 = state_42911;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42932_45221 = state_42911__$1;
(statearr_42932_45221[(1)] = (8));

} else {
var statearr_42933_45222 = state_42911__$1;
(statearr_42933_45222[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (14))){
var inst_42889 = (state_42911[(8)]);
var inst_42891 = (state_42911[(11)]);
var inst_42889__$1 = (state_42911[(2)]);
var inst_42890 = (inst_42889__$1 == null);
var inst_42891__$1 = cljs.core.not(inst_42890);
var state_42911__$1 = (function (){var statearr_42935 = state_42911;
(statearr_42935[(8)] = inst_42889__$1);

(statearr_42935[(11)] = inst_42891__$1);

return statearr_42935;
})();
if(inst_42891__$1){
var statearr_42936_45225 = state_42911__$1;
(statearr_42936_45225[(1)] = (15));

} else {
var statearr_42937_45226 = state_42911__$1;
(statearr_42937_45226[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (16))){
var inst_42891 = (state_42911[(11)]);
var state_42911__$1 = state_42911;
var statearr_42938_45227 = state_42911__$1;
(statearr_42938_45227[(2)] = inst_42891);

(statearr_42938_45227[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (10))){
var inst_42883 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42939_45228 = state_42911__$1;
(statearr_42939_45228[(2)] = inst_42883);

(statearr_42939_45228[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (18))){
var inst_42894 = (state_42911[(2)]);
var state_42911__$1 = state_42911;
var statearr_42940_45231 = state_42911__$1;
(statearr_42940_45231[(2)] = inst_42894);

(statearr_42940_45231[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42912 === (8))){
var inst_42880 = cljs.core.async.close_BANG_(to);
var state_42911__$1 = state_42911;
var statearr_42941_45232 = state_42911__$1;
(statearr_42941_45232[(2)] = inst_42880);

(statearr_42941_45232[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_42942 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42942[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__);

(statearr_42942[(1)] = (1));

return statearr_42942;
});
var cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1 = (function (state_42911){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42911);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e42943){var ex__42332__auto__ = e42943;
var statearr_42944_45233 = state_42911;
(statearr_42944_45233[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42911[(4)]))){
var statearr_42945_45235 = state_42911;
(statearr_42945_45235[(1)] = cljs.core.first((state_42911[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45237 = state_42911;
state_42911 = G__45237;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__ = function(state_42911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1.call(this,state_42911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_42946 = f__42444__auto__();
(statearr_42946[(6)] = c__42443__auto__);

return statearr_42946;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

return c__42443__auto__;
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
var G__42948 = arguments.length;
switch (G__42948) {
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
var G__42952 = arguments.length;
switch (G__42952) {
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
var G__42954 = arguments.length;
switch (G__42954) {
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
var c__42443__auto___45252 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_42980){
var state_val_42981 = (state_42980[(1)]);
if((state_val_42981 === (7))){
var inst_42976 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_42982_45253 = state_42980__$1;
(statearr_42982_45253[(2)] = inst_42976);

(statearr_42982_45253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (1))){
var state_42980__$1 = state_42980;
var statearr_42985_45254 = state_42980__$1;
(statearr_42985_45254[(2)] = null);

(statearr_42985_45254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (4))){
var inst_42957 = (state_42980[(7)]);
var inst_42957__$1 = (state_42980[(2)]);
var inst_42958 = (inst_42957__$1 == null);
var state_42980__$1 = (function (){var statearr_42989 = state_42980;
(statearr_42989[(7)] = inst_42957__$1);

return statearr_42989;
})();
if(cljs.core.truth_(inst_42958)){
var statearr_42990_45260 = state_42980__$1;
(statearr_42990_45260[(1)] = (5));

} else {
var statearr_42991_45261 = state_42980__$1;
(statearr_42991_45261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (13))){
var state_42980__$1 = state_42980;
var statearr_42994_45262 = state_42980__$1;
(statearr_42994_45262[(2)] = null);

(statearr_42994_45262[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (6))){
var inst_42957 = (state_42980[(7)]);
var inst_42963 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42957) : p.call(null,inst_42957));
var state_42980__$1 = state_42980;
if(cljs.core.truth_(inst_42963)){
var statearr_42999_45267 = state_42980__$1;
(statearr_42999_45267[(1)] = (9));

} else {
var statearr_43000_45269 = state_42980__$1;
(statearr_43000_45269[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (3))){
var inst_42978 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42980__$1,inst_42978);
} else {
if((state_val_42981 === (12))){
var state_42980__$1 = state_42980;
var statearr_43004_45270 = state_42980__$1;
(statearr_43004_45270[(2)] = null);

(statearr_43004_45270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (2))){
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42980__$1,(4),ch);
} else {
if((state_val_42981 === (11))){
var inst_42957 = (state_42980[(7)]);
var inst_42967 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42980__$1,(8),inst_42967,inst_42957);
} else {
if((state_val_42981 === (9))){
var state_42980__$1 = state_42980;
var statearr_43005_45275 = state_42980__$1;
(statearr_43005_45275[(2)] = tc);

(statearr_43005_45275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (5))){
var inst_42960 = cljs.core.async.close_BANG_(tc);
var inst_42961 = cljs.core.async.close_BANG_(fc);
var state_42980__$1 = (function (){var statearr_43006 = state_42980;
(statearr_43006[(8)] = inst_42960);

return statearr_43006;
})();
var statearr_43007_45277 = state_42980__$1;
(statearr_43007_45277[(2)] = inst_42961);

(statearr_43007_45277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (14))){
var inst_42974 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
var statearr_43008_45278 = state_42980__$1;
(statearr_43008_45278[(2)] = inst_42974);

(statearr_43008_45278[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (10))){
var state_42980__$1 = state_42980;
var statearr_43009_45283 = state_42980__$1;
(statearr_43009_45283[(2)] = fc);

(statearr_43009_45283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42981 === (8))){
var inst_42969 = (state_42980[(2)]);
var state_42980__$1 = state_42980;
if(cljs.core.truth_(inst_42969)){
var statearr_43010_45284 = state_42980__$1;
(statearr_43010_45284[(1)] = (12));

} else {
var statearr_43011_45285 = state_42980__$1;
(statearr_43011_45285[(1)] = (13));

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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_43016 = [null,null,null,null,null,null,null,null,null];
(statearr_43016[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_43016[(1)] = (1));

return statearr_43016;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_42980){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_42980);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43021){var ex__42332__auto__ = e43021;
var statearr_43022_45290 = state_42980;
(statearr_43022_45290[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_42980[(4)]))){
var statearr_43023_45294 = state_42980;
(statearr_43023_45294[(1)] = cljs.core.first((state_42980[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45295 = state_42980;
state_42980 = G__45295;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_42980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_42980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43024 = f__42444__auto__();
(statearr_43024[(6)] = c__42443__auto___45252);

return statearr_43024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var c__42443__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43048){
var state_val_43049 = (state_43048[(1)]);
if((state_val_43049 === (7))){
var inst_43042 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
var statearr_43061_45296 = state_43048__$1;
(statearr_43061_45296[(2)] = inst_43042);

(statearr_43061_45296[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (1))){
var inst_43025 = init;
var inst_43026 = inst_43025;
var state_43048__$1 = (function (){var statearr_43063 = state_43048;
(statearr_43063[(7)] = inst_43026);

return statearr_43063;
})();
var statearr_43064_45297 = state_43048__$1;
(statearr_43064_45297[(2)] = null);

(statearr_43064_45297[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (4))){
var inst_43029 = (state_43048[(8)]);
var inst_43029__$1 = (state_43048[(2)]);
var inst_43030 = (inst_43029__$1 == null);
var state_43048__$1 = (function (){var statearr_43065 = state_43048;
(statearr_43065[(8)] = inst_43029__$1);

return statearr_43065;
})();
if(cljs.core.truth_(inst_43030)){
var statearr_43067_45301 = state_43048__$1;
(statearr_43067_45301[(1)] = (5));

} else {
var statearr_43070_45302 = state_43048__$1;
(statearr_43070_45302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (6))){
var inst_43026 = (state_43048[(7)]);
var inst_43033 = (state_43048[(9)]);
var inst_43029 = (state_43048[(8)]);
var inst_43033__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_43026,inst_43029) : f.call(null,inst_43026,inst_43029));
var inst_43034 = cljs.core.reduced_QMARK_(inst_43033__$1);
var state_43048__$1 = (function (){var statearr_43072 = state_43048;
(statearr_43072[(9)] = inst_43033__$1);

return statearr_43072;
})();
if(inst_43034){
var statearr_43073_45306 = state_43048__$1;
(statearr_43073_45306[(1)] = (8));

} else {
var statearr_43074_45307 = state_43048__$1;
(statearr_43074_45307[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (3))){
var inst_43044 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43048__$1,inst_43044);
} else {
if((state_val_43049 === (2))){
var state_43048__$1 = state_43048;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43048__$1,(4),ch);
} else {
if((state_val_43049 === (9))){
var inst_43033 = (state_43048[(9)]);
var inst_43026 = inst_43033;
var state_43048__$1 = (function (){var statearr_43075 = state_43048;
(statearr_43075[(7)] = inst_43026);

return statearr_43075;
})();
var statearr_43076_45308 = state_43048__$1;
(statearr_43076_45308[(2)] = null);

(statearr_43076_45308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (5))){
var inst_43026 = (state_43048[(7)]);
var state_43048__$1 = state_43048;
var statearr_43077_45309 = state_43048__$1;
(statearr_43077_45309[(2)] = inst_43026);

(statearr_43077_45309[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (10))){
var inst_43040 = (state_43048[(2)]);
var state_43048__$1 = state_43048;
var statearr_43080_45310 = state_43048__$1;
(statearr_43080_45310[(2)] = inst_43040);

(statearr_43080_45310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43049 === (8))){
var inst_43033 = (state_43048[(9)]);
var inst_43036 = cljs.core.deref(inst_43033);
var state_43048__$1 = state_43048;
var statearr_43082_45315 = state_43048__$1;
(statearr_43082_45315[(2)] = inst_43036);

(statearr_43082_45315[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__42329__auto__ = null;
var cljs$core$async$reduce_$_state_machine__42329__auto____0 = (function (){
var statearr_43087 = [null,null,null,null,null,null,null,null,null,null];
(statearr_43087[(0)] = cljs$core$async$reduce_$_state_machine__42329__auto__);

(statearr_43087[(1)] = (1));

return statearr_43087;
});
var cljs$core$async$reduce_$_state_machine__42329__auto____1 = (function (state_43048){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43048);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43088){var ex__42332__auto__ = e43088;
var statearr_43089_45318 = state_43048;
(statearr_43089_45318[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43048[(4)]))){
var statearr_43090_45319 = state_43048;
(statearr_43090_45319[(1)] = cljs.core.first((state_43048[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45320 = state_43048;
state_43048 = G__45320;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__42329__auto__ = function(state_43048){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__42329__auto____1.call(this,state_43048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__42329__auto____0;
cljs$core$async$reduce_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__42329__auto____1;
return cljs$core$async$reduce_$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43094 = f__42444__auto__();
(statearr_43094[(6)] = c__42443__auto__);

return statearr_43094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

return c__42443__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__42443__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43100){
var state_val_43101 = (state_43100[(1)]);
if((state_val_43101 === (1))){
var inst_43095 = cljs.core.async.reduce(f__$1,init,ch);
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43100__$1,(2),inst_43095);
} else {
if((state_val_43101 === (2))){
var inst_43097 = (state_43100[(2)]);
var inst_43098 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_43097) : f__$1.call(null,inst_43097));
var state_43100__$1 = state_43100;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43100__$1,inst_43098);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__42329__auto__ = null;
var cljs$core$async$transduce_$_state_machine__42329__auto____0 = (function (){
var statearr_43102 = [null,null,null,null,null,null,null];
(statearr_43102[(0)] = cljs$core$async$transduce_$_state_machine__42329__auto__);

(statearr_43102[(1)] = (1));

return statearr_43102;
});
var cljs$core$async$transduce_$_state_machine__42329__auto____1 = (function (state_43100){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43100);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43103){var ex__42332__auto__ = e43103;
var statearr_43104_45322 = state_43100;
(statearr_43104_45322[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43100[(4)]))){
var statearr_43105_45323 = state_43100;
(statearr_43105_45323[(1)] = cljs.core.first((state_43100[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45324 = state_43100;
state_43100 = G__45324;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__42329__auto__ = function(state_43100){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__42329__auto____1.call(this,state_43100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__42329__auto____0;
cljs$core$async$transduce_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__42329__auto____1;
return cljs$core$async$transduce_$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43106 = f__42444__auto__();
(statearr_43106[(6)] = c__42443__auto__);

return statearr_43106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

return c__42443__auto__;
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
var G__43116 = arguments.length;
switch (G__43116) {
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
var c__42443__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43145){
var state_val_43146 = (state_43145[(1)]);
if((state_val_43146 === (7))){
var inst_43127 = (state_43145[(2)]);
var state_43145__$1 = state_43145;
var statearr_43150_45326 = state_43145__$1;
(statearr_43150_45326[(2)] = inst_43127);

(statearr_43150_45326[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (1))){
var inst_43121 = cljs.core.seq(coll);
var inst_43122 = inst_43121;
var state_43145__$1 = (function (){var statearr_43151 = state_43145;
(statearr_43151[(7)] = inst_43122);

return statearr_43151;
})();
var statearr_43152_45327 = state_43145__$1;
(statearr_43152_45327[(2)] = null);

(statearr_43152_45327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (4))){
var inst_43122 = (state_43145[(7)]);
var inst_43125 = cljs.core.first(inst_43122);
var state_43145__$1 = state_43145;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43145__$1,(7),ch,inst_43125);
} else {
if((state_val_43146 === (13))){
var inst_43139 = (state_43145[(2)]);
var state_43145__$1 = state_43145;
var statearr_43153_45328 = state_43145__$1;
(statearr_43153_45328[(2)] = inst_43139);

(statearr_43153_45328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (6))){
var inst_43130 = (state_43145[(2)]);
var state_43145__$1 = state_43145;
if(cljs.core.truth_(inst_43130)){
var statearr_43157_45329 = state_43145__$1;
(statearr_43157_45329[(1)] = (8));

} else {
var statearr_43158_45330 = state_43145__$1;
(statearr_43158_45330[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (3))){
var inst_43143 = (state_43145[(2)]);
var state_43145__$1 = state_43145;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43145__$1,inst_43143);
} else {
if((state_val_43146 === (12))){
var state_43145__$1 = state_43145;
var statearr_43164_45331 = state_43145__$1;
(statearr_43164_45331[(2)] = null);

(statearr_43164_45331[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (2))){
var inst_43122 = (state_43145[(7)]);
var state_43145__$1 = state_43145;
if(cljs.core.truth_(inst_43122)){
var statearr_43165_45332 = state_43145__$1;
(statearr_43165_45332[(1)] = (4));

} else {
var statearr_43166_45333 = state_43145__$1;
(statearr_43166_45333[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (11))){
var inst_43136 = cljs.core.async.close_BANG_(ch);
var state_43145__$1 = state_43145;
var statearr_43170_45334 = state_43145__$1;
(statearr_43170_45334[(2)] = inst_43136);

(statearr_43170_45334[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (9))){
var state_43145__$1 = state_43145;
if(cljs.core.truth_(close_QMARK_)){
var statearr_43171_45335 = state_43145__$1;
(statearr_43171_45335[(1)] = (11));

} else {
var statearr_43172_45336 = state_43145__$1;
(statearr_43172_45336[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (5))){
var inst_43122 = (state_43145[(7)]);
var state_43145__$1 = state_43145;
var statearr_43173_45339 = state_43145__$1;
(statearr_43173_45339[(2)] = inst_43122);

(statearr_43173_45339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (10))){
var inst_43141 = (state_43145[(2)]);
var state_43145__$1 = state_43145;
var statearr_43174_45340 = state_43145__$1;
(statearr_43174_45340[(2)] = inst_43141);

(statearr_43174_45340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43146 === (8))){
var inst_43122 = (state_43145[(7)]);
var inst_43132 = cljs.core.next(inst_43122);
var inst_43122__$1 = inst_43132;
var state_43145__$1 = (function (){var statearr_43175 = state_43145;
(statearr_43175[(7)] = inst_43122__$1);

return statearr_43175;
})();
var statearr_43176_45346 = state_43145__$1;
(statearr_43176_45346[(2)] = null);

(statearr_43176_45346[(1)] = (2));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_43177 = [null,null,null,null,null,null,null,null];
(statearr_43177[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_43177[(1)] = (1));

return statearr_43177;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_43145){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43145);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43178){var ex__42332__auto__ = e43178;
var statearr_43179_45348 = state_43145;
(statearr_43179_45348[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43145[(4)]))){
var statearr_43180_45349 = state_43145;
(statearr_43180_45349[(1)] = cljs.core.first((state_43145[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45350 = state_43145;
state_43145 = G__45350;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_43145){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_43145);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43182 = f__42444__auto__();
(statearr_43182[(6)] = c__42443__auto__);

return statearr_43182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

return c__42443__auto__;
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
var G__43186 = arguments.length;
switch (G__43186) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_45359 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_45359(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_45363 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_45363(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_45366 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_45366(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_45369 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_45369(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43194 = (function (ch,cs,meta43195){
this.ch = ch;
this.cs = cs;
this.meta43195 = meta43195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43196,meta43195__$1){
var self__ = this;
var _43196__$1 = this;
return (new cljs.core.async.t_cljs$core$async43194(self__.ch,self__.cs,meta43195__$1));
}));

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43196){
var self__ = this;
var _43196__$1 = this;
return self__.meta43195;
}));

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async43194.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async43194.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta43195","meta43195",571351235,null)], null);
}));

(cljs.core.async.t_cljs$core$async43194.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43194.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43194");

(cljs.core.async.t_cljs$core$async43194.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43194");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43194.
 */
cljs.core.async.__GT_t_cljs$core$async43194 = (function cljs$core$async$mult_$___GT_t_cljs$core$async43194(ch__$1,cs__$1,meta43195){
return (new cljs.core.async.t_cljs$core$async43194(ch__$1,cs__$1,meta43195));
});

}

return (new cljs.core.async.t_cljs$core$async43194(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__42443__auto___45389 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43339){
var state_val_43340 = (state_43339[(1)]);
if((state_val_43340 === (7))){
var inst_43335 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43341_45394 = state_43339__$1;
(statearr_43341_45394[(2)] = inst_43335);

(statearr_43341_45394[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (20))){
var inst_43238 = (state_43339[(7)]);
var inst_43252 = cljs.core.first(inst_43238);
var inst_43253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43252,(0),null);
var inst_43254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43252,(1),null);
var state_43339__$1 = (function (){var statearr_43342 = state_43339;
(statearr_43342[(8)] = inst_43253);

return statearr_43342;
})();
if(cljs.core.truth_(inst_43254)){
var statearr_43343_45401 = state_43339__$1;
(statearr_43343_45401[(1)] = (22));

} else {
var statearr_43344_45402 = state_43339__$1;
(statearr_43344_45402[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (27))){
var inst_43284 = (state_43339[(9)]);
var inst_43207 = (state_43339[(10)]);
var inst_43282 = (state_43339[(11)]);
var inst_43289 = (state_43339[(12)]);
var inst_43289__$1 = cljs.core._nth(inst_43282,inst_43284);
var inst_43290 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43289__$1,inst_43207,done);
var state_43339__$1 = (function (){var statearr_43345 = state_43339;
(statearr_43345[(12)] = inst_43289__$1);

return statearr_43345;
})();
if(cljs.core.truth_(inst_43290)){
var statearr_43346_45403 = state_43339__$1;
(statearr_43346_45403[(1)] = (30));

} else {
var statearr_43347_45404 = state_43339__$1;
(statearr_43347_45404[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (1))){
var state_43339__$1 = state_43339;
var statearr_43348_45409 = state_43339__$1;
(statearr_43348_45409[(2)] = null);

(statearr_43348_45409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (24))){
var inst_43238 = (state_43339[(7)]);
var inst_43259 = (state_43339[(2)]);
var inst_43260 = cljs.core.next(inst_43238);
var inst_43216 = inst_43260;
var inst_43217 = null;
var inst_43218 = (0);
var inst_43219 = (0);
var state_43339__$1 = (function (){var statearr_43354 = state_43339;
(statearr_43354[(13)] = inst_43259);

(statearr_43354[(14)] = inst_43216);

(statearr_43354[(15)] = inst_43217);

(statearr_43354[(16)] = inst_43218);

(statearr_43354[(17)] = inst_43219);

return statearr_43354;
})();
var statearr_43356_45410 = state_43339__$1;
(statearr_43356_45410[(2)] = null);

(statearr_43356_45410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (39))){
var state_43339__$1 = state_43339;
var statearr_43360_45411 = state_43339__$1;
(statearr_43360_45411[(2)] = null);

(statearr_43360_45411[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (4))){
var inst_43207 = (state_43339[(10)]);
var inst_43207__$1 = (state_43339[(2)]);
var inst_43208 = (inst_43207__$1 == null);
var state_43339__$1 = (function (){var statearr_43361 = state_43339;
(statearr_43361[(10)] = inst_43207__$1);

return statearr_43361;
})();
if(cljs.core.truth_(inst_43208)){
var statearr_43362_45412 = state_43339__$1;
(statearr_43362_45412[(1)] = (5));

} else {
var statearr_43363_45414 = state_43339__$1;
(statearr_43363_45414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (15))){
var inst_43216 = (state_43339[(14)]);
var inst_43217 = (state_43339[(15)]);
var inst_43218 = (state_43339[(16)]);
var inst_43219 = (state_43339[(17)]);
var inst_43234 = (state_43339[(2)]);
var inst_43235 = (inst_43219 + (1));
var tmp43357 = inst_43216;
var tmp43358 = inst_43217;
var tmp43359 = inst_43218;
var inst_43216__$1 = tmp43357;
var inst_43217__$1 = tmp43358;
var inst_43218__$1 = tmp43359;
var inst_43219__$1 = inst_43235;
var state_43339__$1 = (function (){var statearr_43373 = state_43339;
(statearr_43373[(14)] = inst_43216__$1);

(statearr_43373[(15)] = inst_43217__$1);

(statearr_43373[(16)] = inst_43218__$1);

(statearr_43373[(17)] = inst_43219__$1);

(statearr_43373[(18)] = inst_43234);

return statearr_43373;
})();
var statearr_43374_45418 = state_43339__$1;
(statearr_43374_45418[(2)] = null);

(statearr_43374_45418[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (21))){
var inst_43263 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43378_45419 = state_43339__$1;
(statearr_43378_45419[(2)] = inst_43263);

(statearr_43378_45419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (31))){
var inst_43289 = (state_43339[(12)]);
var inst_43293 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43289);
var state_43339__$1 = state_43339;
var statearr_43379_45421 = state_43339__$1;
(statearr_43379_45421[(2)] = inst_43293);

(statearr_43379_45421[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (32))){
var inst_43284 = (state_43339[(9)]);
var inst_43282 = (state_43339[(11)]);
var inst_43283 = (state_43339[(19)]);
var inst_43281 = (state_43339[(20)]);
var inst_43295 = (state_43339[(2)]);
var inst_43296 = (inst_43284 + (1));
var tmp43375 = inst_43282;
var tmp43376 = inst_43283;
var tmp43377 = inst_43281;
var inst_43281__$1 = tmp43377;
var inst_43282__$1 = tmp43375;
var inst_43283__$1 = tmp43376;
var inst_43284__$1 = inst_43296;
var state_43339__$1 = (function (){var statearr_43380 = state_43339;
(statearr_43380[(9)] = inst_43284__$1);

(statearr_43380[(11)] = inst_43282__$1);

(statearr_43380[(19)] = inst_43283__$1);

(statearr_43380[(20)] = inst_43281__$1);

(statearr_43380[(21)] = inst_43295);

return statearr_43380;
})();
var statearr_43381_45431 = state_43339__$1;
(statearr_43381_45431[(2)] = null);

(statearr_43381_45431[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (40))){
var inst_43308 = (state_43339[(22)]);
var inst_43312 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_43308);
var state_43339__$1 = state_43339;
var statearr_43384_45433 = state_43339__$1;
(statearr_43384_45433[(2)] = inst_43312);

(statearr_43384_45433[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (33))){
var inst_43299 = (state_43339[(23)]);
var inst_43301 = cljs.core.chunked_seq_QMARK_(inst_43299);
var state_43339__$1 = state_43339;
if(inst_43301){
var statearr_43387_45434 = state_43339__$1;
(statearr_43387_45434[(1)] = (36));

} else {
var statearr_43388_45435 = state_43339__$1;
(statearr_43388_45435[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (13))){
var inst_43228 = (state_43339[(24)]);
var inst_43231 = cljs.core.async.close_BANG_(inst_43228);
var state_43339__$1 = state_43339;
var statearr_43389_45438 = state_43339__$1;
(statearr_43389_45438[(2)] = inst_43231);

(statearr_43389_45438[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (22))){
var inst_43253 = (state_43339[(8)]);
var inst_43256 = cljs.core.async.close_BANG_(inst_43253);
var state_43339__$1 = state_43339;
var statearr_43390_45439 = state_43339__$1;
(statearr_43390_45439[(2)] = inst_43256);

(statearr_43390_45439[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (36))){
var inst_43299 = (state_43339[(23)]);
var inst_43303 = cljs.core.chunk_first(inst_43299);
var inst_43304 = cljs.core.chunk_rest(inst_43299);
var inst_43305 = cljs.core.count(inst_43303);
var inst_43281 = inst_43304;
var inst_43282 = inst_43303;
var inst_43283 = inst_43305;
var inst_43284 = (0);
var state_43339__$1 = (function (){var statearr_43391 = state_43339;
(statearr_43391[(9)] = inst_43284);

(statearr_43391[(11)] = inst_43282);

(statearr_43391[(19)] = inst_43283);

(statearr_43391[(20)] = inst_43281);

return statearr_43391;
})();
var statearr_43392_45440 = state_43339__$1;
(statearr_43392_45440[(2)] = null);

(statearr_43392_45440[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (41))){
var inst_43299 = (state_43339[(23)]);
var inst_43314 = (state_43339[(2)]);
var inst_43315 = cljs.core.next(inst_43299);
var inst_43281 = inst_43315;
var inst_43282 = null;
var inst_43283 = (0);
var inst_43284 = (0);
var state_43339__$1 = (function (){var statearr_43393 = state_43339;
(statearr_43393[(9)] = inst_43284);

(statearr_43393[(11)] = inst_43282);

(statearr_43393[(19)] = inst_43283);

(statearr_43393[(25)] = inst_43314);

(statearr_43393[(20)] = inst_43281);

return statearr_43393;
})();
var statearr_43394_45441 = state_43339__$1;
(statearr_43394_45441[(2)] = null);

(statearr_43394_45441[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (43))){
var state_43339__$1 = state_43339;
var statearr_43395_45446 = state_43339__$1;
(statearr_43395_45446[(2)] = null);

(statearr_43395_45446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (29))){
var inst_43323 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43396_45447 = state_43339__$1;
(statearr_43396_45447[(2)] = inst_43323);

(statearr_43396_45447[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (44))){
var inst_43332 = (state_43339[(2)]);
var state_43339__$1 = (function (){var statearr_43397 = state_43339;
(statearr_43397[(26)] = inst_43332);

return statearr_43397;
})();
var statearr_43398_45448 = state_43339__$1;
(statearr_43398_45448[(2)] = null);

(statearr_43398_45448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (6))){
var inst_43273 = (state_43339[(27)]);
var inst_43272 = cljs.core.deref(cs);
var inst_43273__$1 = cljs.core.keys(inst_43272);
var inst_43274 = cljs.core.count(inst_43273__$1);
var inst_43275 = cljs.core.reset_BANG_(dctr,inst_43274);
var inst_43280 = cljs.core.seq(inst_43273__$1);
var inst_43281 = inst_43280;
var inst_43282 = null;
var inst_43283 = (0);
var inst_43284 = (0);
var state_43339__$1 = (function (){var statearr_43399 = state_43339;
(statearr_43399[(9)] = inst_43284);

(statearr_43399[(11)] = inst_43282);

(statearr_43399[(28)] = inst_43275);

(statearr_43399[(19)] = inst_43283);

(statearr_43399[(20)] = inst_43281);

(statearr_43399[(27)] = inst_43273__$1);

return statearr_43399;
})();
var statearr_43400_45455 = state_43339__$1;
(statearr_43400_45455[(2)] = null);

(statearr_43400_45455[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (28))){
var inst_43299 = (state_43339[(23)]);
var inst_43281 = (state_43339[(20)]);
var inst_43299__$1 = cljs.core.seq(inst_43281);
var state_43339__$1 = (function (){var statearr_43401 = state_43339;
(statearr_43401[(23)] = inst_43299__$1);

return statearr_43401;
})();
if(inst_43299__$1){
var statearr_43402_45458 = state_43339__$1;
(statearr_43402_45458[(1)] = (33));

} else {
var statearr_43403_45459 = state_43339__$1;
(statearr_43403_45459[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (25))){
var inst_43284 = (state_43339[(9)]);
var inst_43283 = (state_43339[(19)]);
var inst_43286 = (inst_43284 < inst_43283);
var inst_43287 = inst_43286;
var state_43339__$1 = state_43339;
if(cljs.core.truth_(inst_43287)){
var statearr_43404_45460 = state_43339__$1;
(statearr_43404_45460[(1)] = (27));

} else {
var statearr_43405_45461 = state_43339__$1;
(statearr_43405_45461[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (34))){
var state_43339__$1 = state_43339;
var statearr_43407_45462 = state_43339__$1;
(statearr_43407_45462[(2)] = null);

(statearr_43407_45462[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (17))){
var state_43339__$1 = state_43339;
var statearr_43409_45463 = state_43339__$1;
(statearr_43409_45463[(2)] = null);

(statearr_43409_45463[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (3))){
var inst_43337 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43339__$1,inst_43337);
} else {
if((state_val_43340 === (12))){
var inst_43268 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43413_45464 = state_43339__$1;
(statearr_43413_45464[(2)] = inst_43268);

(statearr_43413_45464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (2))){
var state_43339__$1 = state_43339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43339__$1,(4),ch);
} else {
if((state_val_43340 === (23))){
var state_43339__$1 = state_43339;
var statearr_43419_45465 = state_43339__$1;
(statearr_43419_45465[(2)] = null);

(statearr_43419_45465[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (35))){
var inst_43321 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43420_45468 = state_43339__$1;
(statearr_43420_45468[(2)] = inst_43321);

(statearr_43420_45468[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (19))){
var inst_43238 = (state_43339[(7)]);
var inst_43244 = cljs.core.chunk_first(inst_43238);
var inst_43245 = cljs.core.chunk_rest(inst_43238);
var inst_43246 = cljs.core.count(inst_43244);
var inst_43216 = inst_43245;
var inst_43217 = inst_43244;
var inst_43218 = inst_43246;
var inst_43219 = (0);
var state_43339__$1 = (function (){var statearr_43421 = state_43339;
(statearr_43421[(14)] = inst_43216);

(statearr_43421[(15)] = inst_43217);

(statearr_43421[(16)] = inst_43218);

(statearr_43421[(17)] = inst_43219);

return statearr_43421;
})();
var statearr_43422_45469 = state_43339__$1;
(statearr_43422_45469[(2)] = null);

(statearr_43422_45469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (11))){
var inst_43216 = (state_43339[(14)]);
var inst_43238 = (state_43339[(7)]);
var inst_43238__$1 = cljs.core.seq(inst_43216);
var state_43339__$1 = (function (){var statearr_43424 = state_43339;
(statearr_43424[(7)] = inst_43238__$1);

return statearr_43424;
})();
if(inst_43238__$1){
var statearr_43429_45472 = state_43339__$1;
(statearr_43429_45472[(1)] = (16));

} else {
var statearr_43430_45473 = state_43339__$1;
(statearr_43430_45473[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (9))){
var inst_43270 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43435_45474 = state_43339__$1;
(statearr_43435_45474[(2)] = inst_43270);

(statearr_43435_45474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (5))){
var inst_43214 = cljs.core.deref(cs);
var inst_43215 = cljs.core.seq(inst_43214);
var inst_43216 = inst_43215;
var inst_43217 = null;
var inst_43218 = (0);
var inst_43219 = (0);
var state_43339__$1 = (function (){var statearr_43436 = state_43339;
(statearr_43436[(14)] = inst_43216);

(statearr_43436[(15)] = inst_43217);

(statearr_43436[(16)] = inst_43218);

(statearr_43436[(17)] = inst_43219);

return statearr_43436;
})();
var statearr_43439_45475 = state_43339__$1;
(statearr_43439_45475[(2)] = null);

(statearr_43439_45475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (14))){
var state_43339__$1 = state_43339;
var statearr_43440_45476 = state_43339__$1;
(statearr_43440_45476[(2)] = null);

(statearr_43440_45476[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (45))){
var inst_43329 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43443_45477 = state_43339__$1;
(statearr_43443_45477[(2)] = inst_43329);

(statearr_43443_45477[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (26))){
var inst_43273 = (state_43339[(27)]);
var inst_43325 = (state_43339[(2)]);
var inst_43326 = cljs.core.seq(inst_43273);
var state_43339__$1 = (function (){var statearr_43445 = state_43339;
(statearr_43445[(29)] = inst_43325);

return statearr_43445;
})();
if(inst_43326){
var statearr_43446_45478 = state_43339__$1;
(statearr_43446_45478[(1)] = (42));

} else {
var statearr_43447_45479 = state_43339__$1;
(statearr_43447_45479[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (16))){
var inst_43238 = (state_43339[(7)]);
var inst_43242 = cljs.core.chunked_seq_QMARK_(inst_43238);
var state_43339__$1 = state_43339;
if(inst_43242){
var statearr_43449_45480 = state_43339__$1;
(statearr_43449_45480[(1)] = (19));

} else {
var statearr_43451_45487 = state_43339__$1;
(statearr_43451_45487[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (38))){
var inst_43318 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43453_45488 = state_43339__$1;
(statearr_43453_45488[(2)] = inst_43318);

(statearr_43453_45488[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (30))){
var state_43339__$1 = state_43339;
var statearr_43456_45489 = state_43339__$1;
(statearr_43456_45489[(2)] = null);

(statearr_43456_45489[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (10))){
var inst_43217 = (state_43339[(15)]);
var inst_43219 = (state_43339[(17)]);
var inst_43227 = cljs.core._nth(inst_43217,inst_43219);
var inst_43228 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43227,(0),null);
var inst_43229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43227,(1),null);
var state_43339__$1 = (function (){var statearr_43459 = state_43339;
(statearr_43459[(24)] = inst_43228);

return statearr_43459;
})();
if(cljs.core.truth_(inst_43229)){
var statearr_43460_45491 = state_43339__$1;
(statearr_43460_45491[(1)] = (13));

} else {
var statearr_43461_45492 = state_43339__$1;
(statearr_43461_45492[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (18))){
var inst_43266 = (state_43339[(2)]);
var state_43339__$1 = state_43339;
var statearr_43464_45495 = state_43339__$1;
(statearr_43464_45495[(2)] = inst_43266);

(statearr_43464_45495[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (42))){
var state_43339__$1 = state_43339;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43339__$1,(45),dchan);
} else {
if((state_val_43340 === (37))){
var inst_43207 = (state_43339[(10)]);
var inst_43299 = (state_43339[(23)]);
var inst_43308 = (state_43339[(22)]);
var inst_43308__$1 = cljs.core.first(inst_43299);
var inst_43309 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_43308__$1,inst_43207,done);
var state_43339__$1 = (function (){var statearr_43465 = state_43339;
(statearr_43465[(22)] = inst_43308__$1);

return statearr_43465;
})();
if(cljs.core.truth_(inst_43309)){
var statearr_43466_45502 = state_43339__$1;
(statearr_43466_45502[(1)] = (39));

} else {
var statearr_43467_45503 = state_43339__$1;
(statearr_43467_45503[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43340 === (8))){
var inst_43218 = (state_43339[(16)]);
var inst_43219 = (state_43339[(17)]);
var inst_43221 = (inst_43219 < inst_43218);
var inst_43222 = inst_43221;
var state_43339__$1 = state_43339;
if(cljs.core.truth_(inst_43222)){
var statearr_43472_45504 = state_43339__$1;
(statearr_43472_45504[(1)] = (10));

} else {
var statearr_43473_45506 = state_43339__$1;
(statearr_43473_45506[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__42329__auto__ = null;
var cljs$core$async$mult_$_state_machine__42329__auto____0 = (function (){
var statearr_43481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43481[(0)] = cljs$core$async$mult_$_state_machine__42329__auto__);

(statearr_43481[(1)] = (1));

return statearr_43481;
});
var cljs$core$async$mult_$_state_machine__42329__auto____1 = (function (state_43339){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43339);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43482){var ex__42332__auto__ = e43482;
var statearr_43483_45510 = state_43339;
(statearr_43483_45510[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43339[(4)]))){
var statearr_43484_45512 = state_43339;
(statearr_43484_45512[(1)] = cljs.core.first((state_43339[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45513 = state_43339;
state_43339 = G__45513;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__42329__auto__ = function(state_43339){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__42329__auto____1.call(this,state_43339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__42329__auto____0;
cljs$core$async$mult_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__42329__auto____1;
return cljs$core$async$mult_$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43491 = f__42444__auto__();
(statearr_43491[(6)] = c__42443__auto___45389);

return statearr_43491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var G__43493 = arguments.length;
switch (G__43493) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_45522 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_45522(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_45523 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_45523(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_45530 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_45530(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_45534 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_45534(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_45537 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_45537(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___45547 = arguments.length;
var i__4830__auto___45548 = (0);
while(true){
if((i__4830__auto___45548 < len__4829__auto___45547)){
args__4835__auto__.push((arguments[i__4830__auto___45548]));

var G__45551 = (i__4830__auto___45548 + (1));
i__4830__auto___45548 = G__45551;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__43539){
var map__43540 = p__43539;
var map__43540__$1 = cljs.core.__destructure_map(map__43540);
var opts = map__43540__$1;
var statearr_43541_45554 = state;
(statearr_43541_45554[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_43542_45555 = state;
(statearr_43542_45555[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_43543_45556 = state;
(statearr_43543_45556[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq43533){
var G__43534 = cljs.core.first(seq43533);
var seq43533__$1 = cljs.core.next(seq43533);
var G__43535 = cljs.core.first(seq43533__$1);
var seq43533__$2 = cljs.core.next(seq43533__$1);
var G__43536 = cljs.core.first(seq43533__$2);
var seq43533__$3 = cljs.core.next(seq43533__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43534,G__43535,G__43536,seq43533__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43555 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43556){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta43556 = meta43556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43557,meta43556__$1){
var self__ = this;
var _43557__$1 = this;
return (new cljs.core.async.t_cljs$core$async43555(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43556__$1));
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43557){
var self__ = this;
var _43557__$1 = this;
return self__.meta43556;
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43555.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async43555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta43556","meta43556",1217136428,null)], null);
}));

(cljs.core.async.t_cljs$core$async43555.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43555.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43555");

(cljs.core.async.t_cljs$core$async43555.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43555");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43555.
 */
cljs.core.async.__GT_t_cljs$core$async43555 = (function cljs$core$async$mix_$___GT_t_cljs$core$async43555(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43556){
return (new cljs.core.async.t_cljs$core$async43555(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43556));
});

}

return (new cljs.core.async.t_cljs$core$async43555(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42443__auto___45578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43656){
var state_val_43657 = (state_43656[(1)]);
if((state_val_43657 === (7))){
var inst_43615 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
if(cljs.core.truth_(inst_43615)){
var statearr_43659_45581 = state_43656__$1;
(statearr_43659_45581[(1)] = (8));

} else {
var statearr_43660_45582 = state_43656__$1;
(statearr_43660_45582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (20))){
var inst_43602 = (state_43656[(7)]);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43656__$1,(23),out,inst_43602);
} else {
if((state_val_43657 === (1))){
var inst_43579 = calc_state();
var inst_43580 = cljs.core.__destructure_map(inst_43579);
var inst_43581 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43580,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43580,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43580,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43584 = inst_43579;
var state_43656__$1 = (function (){var statearr_43661 = state_43656;
(statearr_43661[(8)] = inst_43583);

(statearr_43661[(9)] = inst_43584);

(statearr_43661[(10)] = inst_43581);

(statearr_43661[(11)] = inst_43582);

return statearr_43661;
})();
var statearr_43666_45586 = state_43656__$1;
(statearr_43666_45586[(2)] = null);

(statearr_43666_45586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (24))){
var inst_43593 = (state_43656[(12)]);
var inst_43584 = inst_43593;
var state_43656__$1 = (function (){var statearr_43669 = state_43656;
(statearr_43669[(9)] = inst_43584);

return statearr_43669;
})();
var statearr_43670_45587 = state_43656__$1;
(statearr_43670_45587[(2)] = null);

(statearr_43670_45587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (4))){
var inst_43602 = (state_43656[(7)]);
var inst_43610 = (state_43656[(13)]);
var inst_43601 = (state_43656[(2)]);
var inst_43602__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43601,(0),null);
var inst_43607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43601,(1),null);
var inst_43610__$1 = (inst_43602__$1 == null);
var state_43656__$1 = (function (){var statearr_43671 = state_43656;
(statearr_43671[(7)] = inst_43602__$1);

(statearr_43671[(14)] = inst_43607);

(statearr_43671[(13)] = inst_43610__$1);

return statearr_43671;
})();
if(cljs.core.truth_(inst_43610__$1)){
var statearr_43673_45588 = state_43656__$1;
(statearr_43673_45588[(1)] = (5));

} else {
var statearr_43674_45589 = state_43656__$1;
(statearr_43674_45589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (15))){
var inst_43594 = (state_43656[(15)]);
var inst_43629 = (state_43656[(16)]);
var inst_43629__$1 = cljs.core.empty_QMARK_(inst_43594);
var state_43656__$1 = (function (){var statearr_43675 = state_43656;
(statearr_43675[(16)] = inst_43629__$1);

return statearr_43675;
})();
if(inst_43629__$1){
var statearr_43676_45590 = state_43656__$1;
(statearr_43676_45590[(1)] = (17));

} else {
var statearr_43679_45591 = state_43656__$1;
(statearr_43679_45591[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (21))){
var inst_43593 = (state_43656[(12)]);
var inst_43584 = inst_43593;
var state_43656__$1 = (function (){var statearr_43680 = state_43656;
(statearr_43680[(9)] = inst_43584);

return statearr_43680;
})();
var statearr_43681_45593 = state_43656__$1;
(statearr_43681_45593[(2)] = null);

(statearr_43681_45593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (13))){
var inst_43622 = (state_43656[(2)]);
var inst_43623 = calc_state();
var inst_43584 = inst_43623;
var state_43656__$1 = (function (){var statearr_43682 = state_43656;
(statearr_43682[(9)] = inst_43584);

(statearr_43682[(17)] = inst_43622);

return statearr_43682;
})();
var statearr_43687_45595 = state_43656__$1;
(statearr_43687_45595[(2)] = null);

(statearr_43687_45595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (22))){
var inst_43650 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43688_45596 = state_43656__$1;
(statearr_43688_45596[(2)] = inst_43650);

(statearr_43688_45596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (6))){
var inst_43607 = (state_43656[(14)]);
var inst_43613 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43607,change);
var state_43656__$1 = state_43656;
var statearr_43689_45601 = state_43656__$1;
(statearr_43689_45601[(2)] = inst_43613);

(statearr_43689_45601[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (25))){
var state_43656__$1 = state_43656;
var statearr_43690_45606 = state_43656__$1;
(statearr_43690_45606[(2)] = null);

(statearr_43690_45606[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (17))){
var inst_43607 = (state_43656[(14)]);
var inst_43595 = (state_43656[(18)]);
var inst_43632 = (inst_43595.cljs$core$IFn$_invoke$arity$1 ? inst_43595.cljs$core$IFn$_invoke$arity$1(inst_43607) : inst_43595.call(null,inst_43607));
var inst_43633 = cljs.core.not(inst_43632);
var state_43656__$1 = state_43656;
var statearr_43691_45611 = state_43656__$1;
(statearr_43691_45611[(2)] = inst_43633);

(statearr_43691_45611[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (3))){
var inst_43654 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43656__$1,inst_43654);
} else {
if((state_val_43657 === (12))){
var state_43656__$1 = state_43656;
var statearr_43692_45612 = state_43656__$1;
(statearr_43692_45612[(2)] = null);

(statearr_43692_45612[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (2))){
var inst_43584 = (state_43656[(9)]);
var inst_43593 = (state_43656[(12)]);
var inst_43593__$1 = cljs.core.__destructure_map(inst_43584);
var inst_43594 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43593__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43595 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43593__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43596 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43593__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43656__$1 = (function (){var statearr_43699 = state_43656;
(statearr_43699[(15)] = inst_43594);

(statearr_43699[(18)] = inst_43595);

(statearr_43699[(12)] = inst_43593__$1);

return statearr_43699;
})();
return cljs.core.async.ioc_alts_BANG_(state_43656__$1,(4),inst_43596);
} else {
if((state_val_43657 === (23))){
var inst_43641 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
if(cljs.core.truth_(inst_43641)){
var statearr_43700_45613 = state_43656__$1;
(statearr_43700_45613[(1)] = (24));

} else {
var statearr_43701_45614 = state_43656__$1;
(statearr_43701_45614[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (19))){
var inst_43636 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43703_45615 = state_43656__$1;
(statearr_43703_45615[(2)] = inst_43636);

(statearr_43703_45615[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (11))){
var inst_43607 = (state_43656[(14)]);
var inst_43619 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_43607);
var state_43656__$1 = state_43656;
var statearr_43704_45616 = state_43656__$1;
(statearr_43704_45616[(2)] = inst_43619);

(statearr_43704_45616[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (9))){
var inst_43594 = (state_43656[(15)]);
var inst_43607 = (state_43656[(14)]);
var inst_43626 = (state_43656[(19)]);
var inst_43626__$1 = (inst_43594.cljs$core$IFn$_invoke$arity$1 ? inst_43594.cljs$core$IFn$_invoke$arity$1(inst_43607) : inst_43594.call(null,inst_43607));
var state_43656__$1 = (function (){var statearr_43705 = state_43656;
(statearr_43705[(19)] = inst_43626__$1);

return statearr_43705;
})();
if(cljs.core.truth_(inst_43626__$1)){
var statearr_43706_45617 = state_43656__$1;
(statearr_43706_45617[(1)] = (14));

} else {
var statearr_43707_45618 = state_43656__$1;
(statearr_43707_45618[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (5))){
var inst_43610 = (state_43656[(13)]);
var state_43656__$1 = state_43656;
var statearr_43709_45619 = state_43656__$1;
(statearr_43709_45619[(2)] = inst_43610);

(statearr_43709_45619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (14))){
var inst_43626 = (state_43656[(19)]);
var state_43656__$1 = state_43656;
var statearr_43711_45620 = state_43656__$1;
(statearr_43711_45620[(2)] = inst_43626);

(statearr_43711_45620[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (26))){
var inst_43646 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43712_45621 = state_43656__$1;
(statearr_43712_45621[(2)] = inst_43646);

(statearr_43712_45621[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (16))){
var inst_43638 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
if(cljs.core.truth_(inst_43638)){
var statearr_43713_45622 = state_43656__$1;
(statearr_43713_45622[(1)] = (20));

} else {
var statearr_43714_45623 = state_43656__$1;
(statearr_43714_45623[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (10))){
var inst_43652 = (state_43656[(2)]);
var state_43656__$1 = state_43656;
var statearr_43715_45624 = state_43656__$1;
(statearr_43715_45624[(2)] = inst_43652);

(statearr_43715_45624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (18))){
var inst_43629 = (state_43656[(16)]);
var state_43656__$1 = state_43656;
var statearr_43716_45626 = state_43656__$1;
(statearr_43716_45626[(2)] = inst_43629);

(statearr_43716_45626[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43657 === (8))){
var inst_43602 = (state_43656[(7)]);
var inst_43617 = (inst_43602 == null);
var state_43656__$1 = state_43656;
if(cljs.core.truth_(inst_43617)){
var statearr_43717_45627 = state_43656__$1;
(statearr_43717_45627[(1)] = (11));

} else {
var statearr_43718_45628 = state_43656__$1;
(statearr_43718_45628[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__42329__auto__ = null;
var cljs$core$async$mix_$_state_machine__42329__auto____0 = (function (){
var statearr_43725 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43725[(0)] = cljs$core$async$mix_$_state_machine__42329__auto__);

(statearr_43725[(1)] = (1));

return statearr_43725;
});
var cljs$core$async$mix_$_state_machine__42329__auto____1 = (function (state_43656){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43656);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43726){var ex__42332__auto__ = e43726;
var statearr_43727_45629 = state_43656;
(statearr_43727_45629[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43656[(4)]))){
var statearr_43729_45630 = state_43656;
(statearr_43729_45630[(1)] = cljs.core.first((state_43656[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45631 = state_43656;
state_43656 = G__45631;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__42329__auto__ = function(state_43656){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__42329__auto____1.call(this,state_43656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__42329__auto____0;
cljs$core$async$mix_$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__42329__auto____1;
return cljs$core$async$mix_$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43730 = f__42444__auto__();
(statearr_43730[(6)] = c__42443__auto___45578);

return statearr_43730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_45636 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_45636(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_45637 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_45637(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_45638 = (function() {
var G__45639 = null;
var G__45639__1 = (function (p){
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
var G__45639__2 = (function (p,v){
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
G__45639 = function(p,v){
switch(arguments.length){
case 1:
return G__45639__1.call(this,p);
case 2:
return G__45639__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45639.cljs$core$IFn$_invoke$arity$1 = G__45639__1;
G__45639.cljs$core$IFn$_invoke$arity$2 = G__45639__2;
return G__45639;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__43754 = arguments.length;
switch (G__43754) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45638(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_45638(p,v);
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
var G__43761 = arguments.length;
switch (G__43761) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__43759_SHARP_){
if(cljs.core.truth_((p1__43759_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__43759_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__43759_SHARP_.call(null,topic)))){
return p1__43759_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__43759_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43762 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43762 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43763){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43763 = meta43763;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43764,meta43763__$1){
var self__ = this;
var _43764__$1 = this;
return (new cljs.core.async.t_cljs$core$async43762(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43763__$1));
}));

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43764){
var self__ = this;
var _43764__$1 = this;
return self__.meta43763;
}));

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async43762.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async43762.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43763","meta43763",827661906,null)], null);
}));

(cljs.core.async.t_cljs$core$async43762.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43762.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43762");

(cljs.core.async.t_cljs$core$async43762.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async43762");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43762.
 */
cljs.core.async.__GT_t_cljs$core$async43762 = (function cljs$core$async$__GT_t_cljs$core$async43762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43763){
return (new cljs.core.async.t_cljs$core$async43762(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43763));
});

}

return (new cljs.core.async.t_cljs$core$async43762(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__42443__auto___45664 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_43850){
var state_val_43853 = (state_43850[(1)]);
if((state_val_43853 === (7))){
var inst_43841 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43854_45665 = state_43850__$1;
(statearr_43854_45665[(2)] = inst_43841);

(statearr_43854_45665[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (20))){
var state_43850__$1 = state_43850;
var statearr_43855_45666 = state_43850__$1;
(statearr_43855_45666[(2)] = null);

(statearr_43855_45666[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (1))){
var state_43850__$1 = state_43850;
var statearr_43856_45667 = state_43850__$1;
(statearr_43856_45667[(2)] = null);

(statearr_43856_45667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (24))){
var inst_43824 = (state_43850[(7)]);
var inst_43833 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_43824);
var state_43850__$1 = state_43850;
var statearr_43858_45670 = state_43850__$1;
(statearr_43858_45670[(2)] = inst_43833);

(statearr_43858_45670[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (4))){
var inst_43776 = (state_43850[(8)]);
var inst_43776__$1 = (state_43850[(2)]);
var inst_43777 = (inst_43776__$1 == null);
var state_43850__$1 = (function (){var statearr_43868 = state_43850;
(statearr_43868[(8)] = inst_43776__$1);

return statearr_43868;
})();
if(cljs.core.truth_(inst_43777)){
var statearr_43869_45673 = state_43850__$1;
(statearr_43869_45673[(1)] = (5));

} else {
var statearr_43870_45674 = state_43850__$1;
(statearr_43870_45674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (15))){
var inst_43818 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43871_45676 = state_43850__$1;
(statearr_43871_45676[(2)] = inst_43818);

(statearr_43871_45676[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (21))){
var inst_43838 = (state_43850[(2)]);
var state_43850__$1 = (function (){var statearr_43872 = state_43850;
(statearr_43872[(9)] = inst_43838);

return statearr_43872;
})();
var statearr_43873_45677 = state_43850__$1;
(statearr_43873_45677[(2)] = null);

(statearr_43873_45677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (13))){
var inst_43800 = (state_43850[(10)]);
var inst_43802 = cljs.core.chunked_seq_QMARK_(inst_43800);
var state_43850__$1 = state_43850;
if(inst_43802){
var statearr_43875_45678 = state_43850__$1;
(statearr_43875_45678[(1)] = (16));

} else {
var statearr_43876_45679 = state_43850__$1;
(statearr_43876_45679[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (22))){
var inst_43830 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
if(cljs.core.truth_(inst_43830)){
var statearr_43883_45680 = state_43850__$1;
(statearr_43883_45680[(1)] = (23));

} else {
var statearr_43884_45681 = state_43850__$1;
(statearr_43884_45681[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (6))){
var inst_43824 = (state_43850[(7)]);
var inst_43776 = (state_43850[(8)]);
var inst_43826 = (state_43850[(11)]);
var inst_43824__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_43776) : topic_fn.call(null,inst_43776));
var inst_43825 = cljs.core.deref(mults);
var inst_43826__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43825,inst_43824__$1);
var state_43850__$1 = (function (){var statearr_43886 = state_43850;
(statearr_43886[(7)] = inst_43824__$1);

(statearr_43886[(11)] = inst_43826__$1);

return statearr_43886;
})();
if(cljs.core.truth_(inst_43826__$1)){
var statearr_43887_45683 = state_43850__$1;
(statearr_43887_45683[(1)] = (19));

} else {
var statearr_43888_45684 = state_43850__$1;
(statearr_43888_45684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (25))){
var inst_43835 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43890_45685 = state_43850__$1;
(statearr_43890_45685[(2)] = inst_43835);

(statearr_43890_45685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (17))){
var inst_43800 = (state_43850[(10)]);
var inst_43809 = cljs.core.first(inst_43800);
var inst_43810 = cljs.core.async.muxch_STAR_(inst_43809);
var inst_43811 = cljs.core.async.close_BANG_(inst_43810);
var inst_43812 = cljs.core.next(inst_43800);
var inst_43786 = inst_43812;
var inst_43787 = null;
var inst_43788 = (0);
var inst_43789 = (0);
var state_43850__$1 = (function (){var statearr_43891 = state_43850;
(statearr_43891[(12)] = inst_43787);

(statearr_43891[(13)] = inst_43811);

(statearr_43891[(14)] = inst_43789);

(statearr_43891[(15)] = inst_43788);

(statearr_43891[(16)] = inst_43786);

return statearr_43891;
})();
var statearr_43892_45686 = state_43850__$1;
(statearr_43892_45686[(2)] = null);

(statearr_43892_45686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (3))){
var inst_43844 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43850__$1,inst_43844);
} else {
if((state_val_43853 === (12))){
var inst_43820 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43900_45687 = state_43850__$1;
(statearr_43900_45687[(2)] = inst_43820);

(statearr_43900_45687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (2))){
var state_43850__$1 = state_43850;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43850__$1,(4),ch);
} else {
if((state_val_43853 === (23))){
var state_43850__$1 = state_43850;
var statearr_43902_45688 = state_43850__$1;
(statearr_43902_45688[(2)] = null);

(statearr_43902_45688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (19))){
var inst_43776 = (state_43850[(8)]);
var inst_43826 = (state_43850[(11)]);
var inst_43828 = cljs.core.async.muxch_STAR_(inst_43826);
var state_43850__$1 = state_43850;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43850__$1,(22),inst_43828,inst_43776);
} else {
if((state_val_43853 === (11))){
var inst_43800 = (state_43850[(10)]);
var inst_43786 = (state_43850[(16)]);
var inst_43800__$1 = cljs.core.seq(inst_43786);
var state_43850__$1 = (function (){var statearr_43907 = state_43850;
(statearr_43907[(10)] = inst_43800__$1);

return statearr_43907;
})();
if(inst_43800__$1){
var statearr_43908_45689 = state_43850__$1;
(statearr_43908_45689[(1)] = (13));

} else {
var statearr_43909_45690 = state_43850__$1;
(statearr_43909_45690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (9))){
var inst_43822 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43910_45692 = state_43850__$1;
(statearr_43910_45692[(2)] = inst_43822);

(statearr_43910_45692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (5))){
var inst_43783 = cljs.core.deref(mults);
var inst_43784 = cljs.core.vals(inst_43783);
var inst_43785 = cljs.core.seq(inst_43784);
var inst_43786 = inst_43785;
var inst_43787 = null;
var inst_43788 = (0);
var inst_43789 = (0);
var state_43850__$1 = (function (){var statearr_43912 = state_43850;
(statearr_43912[(12)] = inst_43787);

(statearr_43912[(14)] = inst_43789);

(statearr_43912[(15)] = inst_43788);

(statearr_43912[(16)] = inst_43786);

return statearr_43912;
})();
var statearr_43915_45693 = state_43850__$1;
(statearr_43915_45693[(2)] = null);

(statearr_43915_45693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (14))){
var state_43850__$1 = state_43850;
var statearr_43919_45694 = state_43850__$1;
(statearr_43919_45694[(2)] = null);

(statearr_43919_45694[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (16))){
var inst_43800 = (state_43850[(10)]);
var inst_43804 = cljs.core.chunk_first(inst_43800);
var inst_43805 = cljs.core.chunk_rest(inst_43800);
var inst_43806 = cljs.core.count(inst_43804);
var inst_43786 = inst_43805;
var inst_43787 = inst_43804;
var inst_43788 = inst_43806;
var inst_43789 = (0);
var state_43850__$1 = (function (){var statearr_43927 = state_43850;
(statearr_43927[(12)] = inst_43787);

(statearr_43927[(14)] = inst_43789);

(statearr_43927[(15)] = inst_43788);

(statearr_43927[(16)] = inst_43786);

return statearr_43927;
})();
var statearr_43931_45699 = state_43850__$1;
(statearr_43931_45699[(2)] = null);

(statearr_43931_45699[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (10))){
var inst_43787 = (state_43850[(12)]);
var inst_43789 = (state_43850[(14)]);
var inst_43788 = (state_43850[(15)]);
var inst_43786 = (state_43850[(16)]);
var inst_43794 = cljs.core._nth(inst_43787,inst_43789);
var inst_43795 = cljs.core.async.muxch_STAR_(inst_43794);
var inst_43796 = cljs.core.async.close_BANG_(inst_43795);
var inst_43797 = (inst_43789 + (1));
var tmp43916 = inst_43787;
var tmp43917 = inst_43788;
var tmp43918 = inst_43786;
var inst_43786__$1 = tmp43918;
var inst_43787__$1 = tmp43916;
var inst_43788__$1 = tmp43917;
var inst_43789__$1 = inst_43797;
var state_43850__$1 = (function (){var statearr_43933 = state_43850;
(statearr_43933[(17)] = inst_43796);

(statearr_43933[(12)] = inst_43787__$1);

(statearr_43933[(14)] = inst_43789__$1);

(statearr_43933[(15)] = inst_43788__$1);

(statearr_43933[(16)] = inst_43786__$1);

return statearr_43933;
})();
var statearr_43934_45700 = state_43850__$1;
(statearr_43934_45700[(2)] = null);

(statearr_43934_45700[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (18))){
var inst_43815 = (state_43850[(2)]);
var state_43850__$1 = state_43850;
var statearr_43940_45701 = state_43850__$1;
(statearr_43940_45701[(2)] = inst_43815);

(statearr_43940_45701[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43853 === (8))){
var inst_43789 = (state_43850[(14)]);
var inst_43788 = (state_43850[(15)]);
var inst_43791 = (inst_43789 < inst_43788);
var inst_43792 = inst_43791;
var state_43850__$1 = state_43850;
if(cljs.core.truth_(inst_43792)){
var statearr_43945_45702 = state_43850__$1;
(statearr_43945_45702[(1)] = (10));

} else {
var statearr_43946_45703 = state_43850__$1;
(statearr_43946_45703[(1)] = (11));

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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_43953 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43953[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_43953[(1)] = (1));

return statearr_43953;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_43850){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_43850);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e43954){var ex__42332__auto__ = e43954;
var statearr_43955_45707 = state_43850;
(statearr_43955_45707[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_43850[(4)]))){
var statearr_43956_45708 = state_43850;
(statearr_43956_45708[(1)] = cljs.core.first((state_43850[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45709 = state_43850;
state_43850 = G__45709;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_43850){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_43850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_43960 = f__42444__auto__();
(statearr_43960[(6)] = c__42443__auto___45664);

return statearr_43960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var G__43962 = arguments.length;
switch (G__43962) {
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
var G__43972 = arguments.length;
switch (G__43972) {
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
var G__43990 = arguments.length;
switch (G__43990) {
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
var c__42443__auto___45730 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44066){
var state_val_44067 = (state_44066[(1)]);
if((state_val_44067 === (7))){
var state_44066__$1 = state_44066;
var statearr_44072_45732 = state_44066__$1;
(statearr_44072_45732[(2)] = null);

(statearr_44072_45732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (1))){
var state_44066__$1 = state_44066;
var statearr_44073_45735 = state_44066__$1;
(statearr_44073_45735[(2)] = null);

(statearr_44073_45735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (4))){
var inst_44005 = (state_44066[(7)]);
var inst_44006 = (state_44066[(8)]);
var inst_44010 = (inst_44006 < inst_44005);
var state_44066__$1 = state_44066;
if(cljs.core.truth_(inst_44010)){
var statearr_44077_45737 = state_44066__$1;
(statearr_44077_45737[(1)] = (6));

} else {
var statearr_44078_45739 = state_44066__$1;
(statearr_44078_45739[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (15))){
var inst_44048 = (state_44066[(9)]);
var inst_44053 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_44048);
var state_44066__$1 = state_44066;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44066__$1,(17),out,inst_44053);
} else {
if((state_val_44067 === (13))){
var inst_44048 = (state_44066[(9)]);
var inst_44048__$1 = (state_44066[(2)]);
var inst_44049 = cljs.core.some(cljs.core.nil_QMARK_,inst_44048__$1);
var state_44066__$1 = (function (){var statearr_44084 = state_44066;
(statearr_44084[(9)] = inst_44048__$1);

return statearr_44084;
})();
if(cljs.core.truth_(inst_44049)){
var statearr_44085_45742 = state_44066__$1;
(statearr_44085_45742[(1)] = (14));

} else {
var statearr_44086_45743 = state_44066__$1;
(statearr_44086_45743[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (6))){
var state_44066__$1 = state_44066;
var statearr_44087_45744 = state_44066__$1;
(statearr_44087_45744[(2)] = null);

(statearr_44087_45744[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (17))){
var inst_44055 = (state_44066[(2)]);
var state_44066__$1 = (function (){var statearr_44090 = state_44066;
(statearr_44090[(10)] = inst_44055);

return statearr_44090;
})();
var statearr_44092_45745 = state_44066__$1;
(statearr_44092_45745[(2)] = null);

(statearr_44092_45745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (3))){
var inst_44063 = (state_44066[(2)]);
var state_44066__$1 = state_44066;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44066__$1,inst_44063);
} else {
if((state_val_44067 === (12))){
var _ = (function (){var statearr_44095 = state_44066;
(statearr_44095[(4)] = cljs.core.rest((state_44066[(4)])));

return statearr_44095;
})();
var state_44066__$1 = state_44066;
var ex44088 = (state_44066__$1[(2)]);
var statearr_44096_45747 = state_44066__$1;
(statearr_44096_45747[(5)] = ex44088);


if((ex44088 instanceof Object)){
var statearr_44097_45749 = state_44066__$1;
(statearr_44097_45749[(1)] = (11));

(statearr_44097_45749[(5)] = null);

} else {
throw ex44088;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (2))){
var inst_44004 = cljs.core.reset_BANG_(dctr,cnt);
var inst_44005 = cnt;
var inst_44006 = (0);
var state_44066__$1 = (function (){var statearr_44103 = state_44066;
(statearr_44103[(7)] = inst_44005);

(statearr_44103[(8)] = inst_44006);

(statearr_44103[(11)] = inst_44004);

return statearr_44103;
})();
var statearr_44104_45751 = state_44066__$1;
(statearr_44104_45751[(2)] = null);

(statearr_44104_45751[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (11))){
var inst_44019 = (state_44066[(2)]);
var inst_44023 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_44066__$1 = (function (){var statearr_44105 = state_44066;
(statearr_44105[(12)] = inst_44019);

return statearr_44105;
})();
var statearr_44106_45754 = state_44066__$1;
(statearr_44106_45754[(2)] = inst_44023);

(statearr_44106_45754[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (9))){
var inst_44006 = (state_44066[(8)]);
var _ = (function (){var statearr_44108 = state_44066;
(statearr_44108[(4)] = cljs.core.cons((12),(state_44066[(4)])));

return statearr_44108;
})();
var inst_44029 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_44006) : chs__$1.call(null,inst_44006));
var inst_44030 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_44006) : done.call(null,inst_44006));
var inst_44031 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_44029,inst_44030);
var ___$1 = (function (){var statearr_44109 = state_44066;
(statearr_44109[(4)] = cljs.core.rest((state_44066[(4)])));

return statearr_44109;
})();
var state_44066__$1 = state_44066;
var statearr_44111_45756 = state_44066__$1;
(statearr_44111_45756[(2)] = inst_44031);

(statearr_44111_45756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (5))){
var inst_44042 = (state_44066[(2)]);
var state_44066__$1 = (function (){var statearr_44112 = state_44066;
(statearr_44112[(13)] = inst_44042);

return statearr_44112;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44066__$1,(13),dchan);
} else {
if((state_val_44067 === (14))){
var inst_44051 = cljs.core.async.close_BANG_(out);
var state_44066__$1 = state_44066;
var statearr_44113_45759 = state_44066__$1;
(statearr_44113_45759[(2)] = inst_44051);

(statearr_44113_45759[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (16))){
var inst_44061 = (state_44066[(2)]);
var state_44066__$1 = state_44066;
var statearr_44114_45760 = state_44066__$1;
(statearr_44114_45760[(2)] = inst_44061);

(statearr_44114_45760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (10))){
var inst_44006 = (state_44066[(8)]);
var inst_44034 = (state_44066[(2)]);
var inst_44035 = (inst_44006 + (1));
var inst_44006__$1 = inst_44035;
var state_44066__$1 = (function (){var statearr_44115 = state_44066;
(statearr_44115[(14)] = inst_44034);

(statearr_44115[(8)] = inst_44006__$1);

return statearr_44115;
})();
var statearr_44116_45763 = state_44066__$1;
(statearr_44116_45763[(2)] = null);

(statearr_44116_45763[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44067 === (8))){
var inst_44040 = (state_44066[(2)]);
var state_44066__$1 = state_44066;
var statearr_44117_45768 = state_44066__$1;
(statearr_44117_45768[(2)] = inst_44040);

(statearr_44117_45768[(1)] = (5));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44118 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44118[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44118[(1)] = (1));

return statearr_44118;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44066){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44066);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44119){var ex__42332__auto__ = e44119;
var statearr_44120_45773 = state_44066;
(statearr_44120_45773[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44066[(4)]))){
var statearr_44122_45774 = state_44066;
(statearr_44122_45774[(1)] = cljs.core.first((state_44066[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45775 = state_44066;
state_44066 = G__45775;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44066){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44127 = f__42444__auto__();
(statearr_44127[(6)] = c__42443__auto___45730);

return statearr_44127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var G__44130 = arguments.length;
switch (G__44130) {
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
var c__42443__auto___45784 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44168){
var state_val_44169 = (state_44168[(1)]);
if((state_val_44169 === (7))){
var inst_44144 = (state_44168[(7)]);
var inst_44142 = (state_44168[(8)]);
var inst_44142__$1 = (state_44168[(2)]);
var inst_44144__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44142__$1,(0),null);
var inst_44145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_44142__$1,(1),null);
var inst_44149 = (inst_44144__$1 == null);
var state_44168__$1 = (function (){var statearr_44170 = state_44168;
(statearr_44170[(7)] = inst_44144__$1);

(statearr_44170[(8)] = inst_44142__$1);

(statearr_44170[(9)] = inst_44145);

return statearr_44170;
})();
if(cljs.core.truth_(inst_44149)){
var statearr_44171_45787 = state_44168__$1;
(statearr_44171_45787[(1)] = (8));

} else {
var statearr_44172_45788 = state_44168__$1;
(statearr_44172_45788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (1))){
var inst_44132 = cljs.core.vec(chs);
var inst_44133 = inst_44132;
var state_44168__$1 = (function (){var statearr_44174 = state_44168;
(statearr_44174[(10)] = inst_44133);

return statearr_44174;
})();
var statearr_44175_45790 = state_44168__$1;
(statearr_44175_45790[(2)] = null);

(statearr_44175_45790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (4))){
var inst_44133 = (state_44168[(10)]);
var state_44168__$1 = state_44168;
return cljs.core.async.ioc_alts_BANG_(state_44168__$1,(7),inst_44133);
} else {
if((state_val_44169 === (6))){
var inst_44164 = (state_44168[(2)]);
var state_44168__$1 = state_44168;
var statearr_44177_45791 = state_44168__$1;
(statearr_44177_45791[(2)] = inst_44164);

(statearr_44177_45791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (3))){
var inst_44166 = (state_44168[(2)]);
var state_44168__$1 = state_44168;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44168__$1,inst_44166);
} else {
if((state_val_44169 === (2))){
var inst_44133 = (state_44168[(10)]);
var inst_44135 = cljs.core.count(inst_44133);
var inst_44136 = (inst_44135 > (0));
var state_44168__$1 = state_44168;
if(cljs.core.truth_(inst_44136)){
var statearr_44180_45793 = state_44168__$1;
(statearr_44180_45793[(1)] = (4));

} else {
var statearr_44181_45794 = state_44168__$1;
(statearr_44181_45794[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (11))){
var inst_44133 = (state_44168[(10)]);
var inst_44157 = (state_44168[(2)]);
var tmp44179 = inst_44133;
var inst_44133__$1 = tmp44179;
var state_44168__$1 = (function (){var statearr_44182 = state_44168;
(statearr_44182[(10)] = inst_44133__$1);

(statearr_44182[(11)] = inst_44157);

return statearr_44182;
})();
var statearr_44183_45797 = state_44168__$1;
(statearr_44183_45797[(2)] = null);

(statearr_44183_45797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (9))){
var inst_44144 = (state_44168[(7)]);
var state_44168__$1 = state_44168;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44168__$1,(11),out,inst_44144);
} else {
if((state_val_44169 === (5))){
var inst_44162 = cljs.core.async.close_BANG_(out);
var state_44168__$1 = state_44168;
var statearr_44185_45803 = state_44168__$1;
(statearr_44185_45803[(2)] = inst_44162);

(statearr_44185_45803[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (10))){
var inst_44160 = (state_44168[(2)]);
var state_44168__$1 = state_44168;
var statearr_44187_45805 = state_44168__$1;
(statearr_44187_45805[(2)] = inst_44160);

(statearr_44187_45805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44169 === (8))){
var inst_44144 = (state_44168[(7)]);
var inst_44133 = (state_44168[(10)]);
var inst_44142 = (state_44168[(8)]);
var inst_44145 = (state_44168[(9)]);
var inst_44152 = (function (){var cs = inst_44133;
var vec__44138 = inst_44142;
var v = inst_44144;
var c = inst_44145;
return (function (p1__44128_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__44128_SHARP_);
});
})();
var inst_44153 = cljs.core.filterv(inst_44152,inst_44133);
var inst_44133__$1 = inst_44153;
var state_44168__$1 = (function (){var statearr_44193 = state_44168;
(statearr_44193[(10)] = inst_44133__$1);

return statearr_44193;
})();
var statearr_44194_45807 = state_44168__$1;
(statearr_44194_45807[(2)] = null);

(statearr_44194_45807[(1)] = (2));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44213 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44213[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44213[(1)] = (1));

return statearr_44213;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44168){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44168);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44215){var ex__42332__auto__ = e44215;
var statearr_44217_45810 = state_44168;
(statearr_44217_45810[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44168[(4)]))){
var statearr_44218_45814 = state_44168;
(statearr_44218_45814[(1)] = cljs.core.first((state_44168[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45819 = state_44168;
state_44168 = G__45819;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44168){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44220 = f__42444__auto__();
(statearr_44220[(6)] = c__42443__auto___45784);

return statearr_44220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
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
var G__44227 = arguments.length;
switch (G__44227) {
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
var c__42443__auto___45821 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44254){
var state_val_44255 = (state_44254[(1)]);
if((state_val_44255 === (7))){
var inst_44233 = (state_44254[(7)]);
var inst_44233__$1 = (state_44254[(2)]);
var inst_44235 = (inst_44233__$1 == null);
var inst_44236 = cljs.core.not(inst_44235);
var state_44254__$1 = (function (){var statearr_44277 = state_44254;
(statearr_44277[(7)] = inst_44233__$1);

return statearr_44277;
})();
if(inst_44236){
var statearr_44278_45822 = state_44254__$1;
(statearr_44278_45822[(1)] = (8));

} else {
var statearr_44280_45823 = state_44254__$1;
(statearr_44280_45823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (1))){
var inst_44228 = (0);
var state_44254__$1 = (function (){var statearr_44281 = state_44254;
(statearr_44281[(8)] = inst_44228);

return statearr_44281;
})();
var statearr_44282_45824 = state_44254__$1;
(statearr_44282_45824[(2)] = null);

(statearr_44282_45824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (4))){
var state_44254__$1 = state_44254;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44254__$1,(7),ch);
} else {
if((state_val_44255 === (6))){
var inst_44249 = (state_44254[(2)]);
var state_44254__$1 = state_44254;
var statearr_44293_45825 = state_44254__$1;
(statearr_44293_45825[(2)] = inst_44249);

(statearr_44293_45825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (3))){
var inst_44251 = (state_44254[(2)]);
var inst_44252 = cljs.core.async.close_BANG_(out);
var state_44254__$1 = (function (){var statearr_44295 = state_44254;
(statearr_44295[(9)] = inst_44251);

return statearr_44295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44254__$1,inst_44252);
} else {
if((state_val_44255 === (2))){
var inst_44228 = (state_44254[(8)]);
var inst_44230 = (inst_44228 < n);
var state_44254__$1 = state_44254;
if(cljs.core.truth_(inst_44230)){
var statearr_44296_45826 = state_44254__$1;
(statearr_44296_45826[(1)] = (4));

} else {
var statearr_44298_45827 = state_44254__$1;
(statearr_44298_45827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (11))){
var inst_44228 = (state_44254[(8)]);
var inst_44241 = (state_44254[(2)]);
var inst_44242 = (inst_44228 + (1));
var inst_44228__$1 = inst_44242;
var state_44254__$1 = (function (){var statearr_44305 = state_44254;
(statearr_44305[(10)] = inst_44241);

(statearr_44305[(8)] = inst_44228__$1);

return statearr_44305;
})();
var statearr_44310_45828 = state_44254__$1;
(statearr_44310_45828[(2)] = null);

(statearr_44310_45828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (9))){
var state_44254__$1 = state_44254;
var statearr_44311_45829 = state_44254__$1;
(statearr_44311_45829[(2)] = null);

(statearr_44311_45829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (5))){
var state_44254__$1 = state_44254;
var statearr_44312_45830 = state_44254__$1;
(statearr_44312_45830[(2)] = null);

(statearr_44312_45830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (10))){
var inst_44246 = (state_44254[(2)]);
var state_44254__$1 = state_44254;
var statearr_44318_45831 = state_44254__$1;
(statearr_44318_45831[(2)] = inst_44246);

(statearr_44318_45831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44255 === (8))){
var inst_44233 = (state_44254[(7)]);
var state_44254__$1 = state_44254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44254__$1,(11),out,inst_44233);
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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44335 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44335[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44335[(1)] = (1));

return statearr_44335;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44254){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44254);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44336){var ex__42332__auto__ = e44336;
var statearr_44337_45832 = state_44254;
(statearr_44337_45832[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44254[(4)]))){
var statearr_44338_45833 = state_44254;
(statearr_44338_45833[(1)] = cljs.core.first((state_44254[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45834 = state_44254;
state_44254 = G__45834;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44339 = f__42444__auto__();
(statearr_44339[(6)] = c__42443__auto___45821);

return statearr_44339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44342 = (function (f,ch,meta44343){
this.f = f;
this.ch = ch;
this.meta44343 = meta44343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44344,meta44343__$1){
var self__ = this;
var _44344__$1 = this;
return (new cljs.core.async.t_cljs$core$async44342(self__.f,self__.ch,meta44343__$1));
}));

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44344){
var self__ = this;
var _44344__$1 = this;
return self__.meta44343;
}));

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44351 = (function (f,ch,meta44343,_,fn1,meta44352){
this.f = f;
this.ch = ch;
this.meta44343 = meta44343;
this._ = _;
this.fn1 = fn1;
this.meta44352 = meta44352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44353,meta44352__$1){
var self__ = this;
var _44353__$1 = this;
return (new cljs.core.async.t_cljs$core$async44351(self__.f,self__.ch,self__.meta44343,self__._,self__.fn1,meta44352__$1));
}));

(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44353){
var self__ = this;
var _44353__$1 = this;
return self__.meta44352;
}));

(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async44351.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__44340_SHARP_){
var G__44366 = (((p1__44340_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__44340_SHARP_) : self__.f.call(null,p1__44340_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__44366) : f1.call(null,G__44366));
});
}));

(cljs.core.async.t_cljs$core$async44351.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44343","meta44343",1160912977,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async44342","cljs.core.async/t_cljs$core$async44342",-1792283121,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta44352","meta44352",-1795707868,null)], null);
}));

(cljs.core.async.t_cljs$core$async44351.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44351.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44351");

(cljs.core.async.t_cljs$core$async44351.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44351");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44351.
 */
cljs.core.async.__GT_t_cljs$core$async44351 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44351(f__$1,ch__$1,meta44343__$1,___$2,fn1__$1,meta44352){
return (new cljs.core.async.t_cljs$core$async44351(f__$1,ch__$1,meta44343__$1,___$2,fn1__$1,meta44352));
});

}

return (new cljs.core.async.t_cljs$core$async44351(self__.f,self__.ch,self__.meta44343,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__44372 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__44372) : self__.f.call(null,G__44372));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async44342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44343","meta44343",1160912977,null)], null);
}));

(cljs.core.async.t_cljs$core$async44342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44342");

(cljs.core.async.t_cljs$core$async44342.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44342.
 */
cljs.core.async.__GT_t_cljs$core$async44342 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async44342(f__$1,ch__$1,meta44343){
return (new cljs.core.async.t_cljs$core$async44342(f__$1,ch__$1,meta44343));
});

}

return (new cljs.core.async.t_cljs$core$async44342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44373 = (function (f,ch,meta44374){
this.f = f;
this.ch = ch;
this.meta44374 = meta44374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44375,meta44374__$1){
var self__ = this;
var _44375__$1 = this;
return (new cljs.core.async.t_cljs$core$async44373(self__.f,self__.ch,meta44374__$1));
}));

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44375){
var self__ = this;
var _44375__$1 = this;
return self__.meta44374;
}));

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44373.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async44373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44374","meta44374",1348906026,null)], null);
}));

(cljs.core.async.t_cljs$core$async44373.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44373.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44373");

(cljs.core.async.t_cljs$core$async44373.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44373");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44373.
 */
cljs.core.async.__GT_t_cljs$core$async44373 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async44373(f__$1,ch__$1,meta44374){
return (new cljs.core.async.t_cljs$core$async44373(f__$1,ch__$1,meta44374));
});

}

return (new cljs.core.async.t_cljs$core$async44373(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async44433 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async44433 = (function (p,ch,meta44434){
this.p = p;
this.ch = ch;
this.meta44434 = meta44434;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44435,meta44434__$1){
var self__ = this;
var _44435__$1 = this;
return (new cljs.core.async.t_cljs$core$async44433(self__.p,self__.ch,meta44434__$1));
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44435){
var self__ = this;
var _44435__$1 = this;
return self__.meta44434;
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async44433.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async44433.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta44434","meta44434",-1250757555,null)], null);
}));

(cljs.core.async.t_cljs$core$async44433.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async44433.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async44433");

(cljs.core.async.t_cljs$core$async44433.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async44433");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async44433.
 */
cljs.core.async.__GT_t_cljs$core$async44433 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async44433(p__$1,ch__$1,meta44434){
return (new cljs.core.async.t_cljs$core$async44433(p__$1,ch__$1,meta44434));
});

}

return (new cljs.core.async.t_cljs$core$async44433(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__44442 = arguments.length;
switch (G__44442) {
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
var c__42443__auto___45856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44463){
var state_val_44464 = (state_44463[(1)]);
if((state_val_44464 === (7))){
var inst_44459 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44465_45857 = state_44463__$1;
(statearr_44465_45857[(2)] = inst_44459);

(statearr_44465_45857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (1))){
var state_44463__$1 = state_44463;
var statearr_44466_45858 = state_44463__$1;
(statearr_44466_45858[(2)] = null);

(statearr_44466_45858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (4))){
var inst_44445 = (state_44463[(7)]);
var inst_44445__$1 = (state_44463[(2)]);
var inst_44446 = (inst_44445__$1 == null);
var state_44463__$1 = (function (){var statearr_44467 = state_44463;
(statearr_44467[(7)] = inst_44445__$1);

return statearr_44467;
})();
if(cljs.core.truth_(inst_44446)){
var statearr_44468_45859 = state_44463__$1;
(statearr_44468_45859[(1)] = (5));

} else {
var statearr_44469_45860 = state_44463__$1;
(statearr_44469_45860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (6))){
var inst_44445 = (state_44463[(7)]);
var inst_44450 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_44445) : p.call(null,inst_44445));
var state_44463__$1 = state_44463;
if(cljs.core.truth_(inst_44450)){
var statearr_44470_45861 = state_44463__$1;
(statearr_44470_45861[(1)] = (8));

} else {
var statearr_44471_45862 = state_44463__$1;
(statearr_44471_45862[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (3))){
var inst_44461 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44463__$1,inst_44461);
} else {
if((state_val_44464 === (2))){
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44463__$1,(4),ch);
} else {
if((state_val_44464 === (11))){
var inst_44453 = (state_44463[(2)]);
var state_44463__$1 = state_44463;
var statearr_44472_45863 = state_44463__$1;
(statearr_44472_45863[(2)] = inst_44453);

(statearr_44472_45863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (9))){
var state_44463__$1 = state_44463;
var statearr_44473_45865 = state_44463__$1;
(statearr_44473_45865[(2)] = null);

(statearr_44473_45865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (5))){
var inst_44448 = cljs.core.async.close_BANG_(out);
var state_44463__$1 = state_44463;
var statearr_44474_45867 = state_44463__$1;
(statearr_44474_45867[(2)] = inst_44448);

(statearr_44474_45867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (10))){
var inst_44456 = (state_44463[(2)]);
var state_44463__$1 = (function (){var statearr_44475 = state_44463;
(statearr_44475[(8)] = inst_44456);

return statearr_44475;
})();
var statearr_44476_45869 = state_44463__$1;
(statearr_44476_45869[(2)] = null);

(statearr_44476_45869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44464 === (8))){
var inst_44445 = (state_44463[(7)]);
var state_44463__$1 = state_44463;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44463__$1,(11),out,inst_44445);
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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44477 = [null,null,null,null,null,null,null,null,null];
(statearr_44477[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44477[(1)] = (1));

return statearr_44477;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44463){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44463);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44479){var ex__42332__auto__ = e44479;
var statearr_44480_45874 = state_44463;
(statearr_44480_45874[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44463[(4)]))){
var statearr_44481_45875 = state_44463;
(statearr_44481_45875[(1)] = cljs.core.first((state_44463[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45876 = state_44463;
state_44463 = G__45876;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44482 = f__42444__auto__();
(statearr_44482[(6)] = c__42443__auto___45856);

return statearr_44482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__44484 = arguments.length;
switch (G__44484) {
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
var c__42443__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44547){
var state_val_44548 = (state_44547[(1)]);
if((state_val_44548 === (7))){
var inst_44543 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
var statearr_44549_45887 = state_44547__$1;
(statearr_44549_45887[(2)] = inst_44543);

(statearr_44549_45887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (20))){
var inst_44513 = (state_44547[(7)]);
var inst_44524 = (state_44547[(2)]);
var inst_44525 = cljs.core.next(inst_44513);
var inst_44499 = inst_44525;
var inst_44500 = null;
var inst_44501 = (0);
var inst_44502 = (0);
var state_44547__$1 = (function (){var statearr_44550 = state_44547;
(statearr_44550[(8)] = inst_44502);

(statearr_44550[(9)] = inst_44500);

(statearr_44550[(10)] = inst_44501);

(statearr_44550[(11)] = inst_44524);

(statearr_44550[(12)] = inst_44499);

return statearr_44550;
})();
var statearr_44551_45891 = state_44547__$1;
(statearr_44551_45891[(2)] = null);

(statearr_44551_45891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (1))){
var state_44547__$1 = state_44547;
var statearr_44552_45893 = state_44547__$1;
(statearr_44552_45893[(2)] = null);

(statearr_44552_45893[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (4))){
var inst_44488 = (state_44547[(13)]);
var inst_44488__$1 = (state_44547[(2)]);
var inst_44489 = (inst_44488__$1 == null);
var state_44547__$1 = (function (){var statearr_44553 = state_44547;
(statearr_44553[(13)] = inst_44488__$1);

return statearr_44553;
})();
if(cljs.core.truth_(inst_44489)){
var statearr_44554_45895 = state_44547__$1;
(statearr_44554_45895[(1)] = (5));

} else {
var statearr_44555_45896 = state_44547__$1;
(statearr_44555_45896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (15))){
var state_44547__$1 = state_44547;
var statearr_44559_45897 = state_44547__$1;
(statearr_44559_45897[(2)] = null);

(statearr_44559_45897[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (21))){
var state_44547__$1 = state_44547;
var statearr_44560_45899 = state_44547__$1;
(statearr_44560_45899[(2)] = null);

(statearr_44560_45899[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (13))){
var inst_44502 = (state_44547[(8)]);
var inst_44500 = (state_44547[(9)]);
var inst_44501 = (state_44547[(10)]);
var inst_44499 = (state_44547[(12)]);
var inst_44509 = (state_44547[(2)]);
var inst_44510 = (inst_44502 + (1));
var tmp44556 = inst_44500;
var tmp44557 = inst_44501;
var tmp44558 = inst_44499;
var inst_44499__$1 = tmp44558;
var inst_44500__$1 = tmp44556;
var inst_44501__$1 = tmp44557;
var inst_44502__$1 = inst_44510;
var state_44547__$1 = (function (){var statearr_44561 = state_44547;
(statearr_44561[(8)] = inst_44502__$1);

(statearr_44561[(14)] = inst_44509);

(statearr_44561[(9)] = inst_44500__$1);

(statearr_44561[(10)] = inst_44501__$1);

(statearr_44561[(12)] = inst_44499__$1);

return statearr_44561;
})();
var statearr_44562_45901 = state_44547__$1;
(statearr_44562_45901[(2)] = null);

(statearr_44562_45901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (22))){
var state_44547__$1 = state_44547;
var statearr_44563_45902 = state_44547__$1;
(statearr_44563_45902[(2)] = null);

(statearr_44563_45902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (6))){
var inst_44488 = (state_44547[(13)]);
var inst_44497 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44488) : f.call(null,inst_44488));
var inst_44498 = cljs.core.seq(inst_44497);
var inst_44499 = inst_44498;
var inst_44500 = null;
var inst_44501 = (0);
var inst_44502 = (0);
var state_44547__$1 = (function (){var statearr_44564 = state_44547;
(statearr_44564[(8)] = inst_44502);

(statearr_44564[(9)] = inst_44500);

(statearr_44564[(10)] = inst_44501);

(statearr_44564[(12)] = inst_44499);

return statearr_44564;
})();
var statearr_44565_45904 = state_44547__$1;
(statearr_44565_45904[(2)] = null);

(statearr_44565_45904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (17))){
var inst_44513 = (state_44547[(7)]);
var inst_44517 = cljs.core.chunk_first(inst_44513);
var inst_44518 = cljs.core.chunk_rest(inst_44513);
var inst_44519 = cljs.core.count(inst_44517);
var inst_44499 = inst_44518;
var inst_44500 = inst_44517;
var inst_44501 = inst_44519;
var inst_44502 = (0);
var state_44547__$1 = (function (){var statearr_44566 = state_44547;
(statearr_44566[(8)] = inst_44502);

(statearr_44566[(9)] = inst_44500);

(statearr_44566[(10)] = inst_44501);

(statearr_44566[(12)] = inst_44499);

return statearr_44566;
})();
var statearr_44567_45905 = state_44547__$1;
(statearr_44567_45905[(2)] = null);

(statearr_44567_45905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (3))){
var inst_44545 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44547__$1,inst_44545);
} else {
if((state_val_44548 === (12))){
var inst_44533 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
var statearr_44568_45907 = state_44547__$1;
(statearr_44568_45907[(2)] = inst_44533);

(statearr_44568_45907[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (2))){
var state_44547__$1 = state_44547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44547__$1,(4),in$);
} else {
if((state_val_44548 === (23))){
var inst_44541 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
var statearr_44569_45909 = state_44547__$1;
(statearr_44569_45909[(2)] = inst_44541);

(statearr_44569_45909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (19))){
var inst_44528 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
var statearr_44570_45910 = state_44547__$1;
(statearr_44570_45910[(2)] = inst_44528);

(statearr_44570_45910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (11))){
var inst_44513 = (state_44547[(7)]);
var inst_44499 = (state_44547[(12)]);
var inst_44513__$1 = cljs.core.seq(inst_44499);
var state_44547__$1 = (function (){var statearr_44571 = state_44547;
(statearr_44571[(7)] = inst_44513__$1);

return statearr_44571;
})();
if(inst_44513__$1){
var statearr_44572_45913 = state_44547__$1;
(statearr_44572_45913[(1)] = (14));

} else {
var statearr_44573_45914 = state_44547__$1;
(statearr_44573_45914[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (9))){
var inst_44535 = (state_44547[(2)]);
var inst_44536 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_44547__$1 = (function (){var statearr_44574 = state_44547;
(statearr_44574[(15)] = inst_44535);

return statearr_44574;
})();
if(cljs.core.truth_(inst_44536)){
var statearr_44575_45917 = state_44547__$1;
(statearr_44575_45917[(1)] = (21));

} else {
var statearr_44576_45918 = state_44547__$1;
(statearr_44576_45918[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (5))){
var inst_44491 = cljs.core.async.close_BANG_(out);
var state_44547__$1 = state_44547;
var statearr_44577_45919 = state_44547__$1;
(statearr_44577_45919[(2)] = inst_44491);

(statearr_44577_45919[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (14))){
var inst_44513 = (state_44547[(7)]);
var inst_44515 = cljs.core.chunked_seq_QMARK_(inst_44513);
var state_44547__$1 = state_44547;
if(inst_44515){
var statearr_44578_45922 = state_44547__$1;
(statearr_44578_45922[(1)] = (17));

} else {
var statearr_44579_45923 = state_44547__$1;
(statearr_44579_45923[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (16))){
var inst_44531 = (state_44547[(2)]);
var state_44547__$1 = state_44547;
var statearr_44580_45924 = state_44547__$1;
(statearr_44580_45924[(2)] = inst_44531);

(statearr_44580_45924[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44548 === (10))){
var inst_44502 = (state_44547[(8)]);
var inst_44500 = (state_44547[(9)]);
var inst_44507 = cljs.core._nth(inst_44500,inst_44502);
var state_44547__$1 = state_44547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44547__$1,(13),out,inst_44507);
} else {
if((state_val_44548 === (18))){
var inst_44513 = (state_44547[(7)]);
var inst_44522 = cljs.core.first(inst_44513);
var state_44547__$1 = state_44547;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44547__$1,(20),out,inst_44522);
} else {
if((state_val_44548 === (8))){
var inst_44502 = (state_44547[(8)]);
var inst_44501 = (state_44547[(10)]);
var inst_44504 = (inst_44502 < inst_44501);
var inst_44505 = inst_44504;
var state_44547__$1 = state_44547;
if(cljs.core.truth_(inst_44505)){
var statearr_44581_45925 = state_44547__$1;
(statearr_44581_45925[(1)] = (10));

} else {
var statearr_44582_45926 = state_44547__$1;
(statearr_44582_45926[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____0 = (function (){
var statearr_44583 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44583[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__);

(statearr_44583[(1)] = (1));

return statearr_44583;
});
var cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____1 = (function (state_44547){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44547);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44584){var ex__42332__auto__ = e44584;
var statearr_44585_45928 = state_44547;
(statearr_44585_45928[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44547[(4)]))){
var statearr_44586_45930 = state_44547;
(statearr_44586_45930[(1)] = cljs.core.first((state_44547[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45931 = state_44547;
state_44547 = G__45931;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__ = function(state_44547){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____1.call(this,state_44547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__42329__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44587 = f__42444__auto__();
(statearr_44587[(6)] = c__42443__auto__);

return statearr_44587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

return c__42443__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__44589 = arguments.length;
switch (G__44589) {
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
var G__44591 = arguments.length;
switch (G__44591) {
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
var G__44593 = arguments.length;
switch (G__44593) {
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
var c__42443__auto___45935 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44621){
var state_val_44622 = (state_44621[(1)]);
if((state_val_44622 === (7))){
var inst_44615 = (state_44621[(2)]);
var state_44621__$1 = state_44621;
var statearr_44626_45939 = state_44621__$1;
(statearr_44626_45939[(2)] = inst_44615);

(statearr_44626_45939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (1))){
var inst_44597 = null;
var state_44621__$1 = (function (){var statearr_44627 = state_44621;
(statearr_44627[(7)] = inst_44597);

return statearr_44627;
})();
var statearr_44628_45940 = state_44621__$1;
(statearr_44628_45940[(2)] = null);

(statearr_44628_45940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (4))){
var inst_44600 = (state_44621[(8)]);
var inst_44600__$1 = (state_44621[(2)]);
var inst_44601 = (inst_44600__$1 == null);
var inst_44602 = cljs.core.not(inst_44601);
var state_44621__$1 = (function (){var statearr_44632 = state_44621;
(statearr_44632[(8)] = inst_44600__$1);

return statearr_44632;
})();
if(inst_44602){
var statearr_44633_45943 = state_44621__$1;
(statearr_44633_45943[(1)] = (5));

} else {
var statearr_44634_45948 = state_44621__$1;
(statearr_44634_45948[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (6))){
var state_44621__$1 = state_44621;
var statearr_44645_45950 = state_44621__$1;
(statearr_44645_45950[(2)] = null);

(statearr_44645_45950[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (3))){
var inst_44618 = (state_44621[(2)]);
var inst_44619 = cljs.core.async.close_BANG_(out);
var state_44621__$1 = (function (){var statearr_44646 = state_44621;
(statearr_44646[(9)] = inst_44618);

return statearr_44646;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_44621__$1,inst_44619);
} else {
if((state_val_44622 === (2))){
var state_44621__$1 = state_44621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44621__$1,(4),ch);
} else {
if((state_val_44622 === (11))){
var inst_44600 = (state_44621[(8)]);
var inst_44609 = (state_44621[(2)]);
var inst_44597 = inst_44600;
var state_44621__$1 = (function (){var statearr_44657 = state_44621;
(statearr_44657[(10)] = inst_44609);

(statearr_44657[(7)] = inst_44597);

return statearr_44657;
})();
var statearr_44659_45956 = state_44621__$1;
(statearr_44659_45956[(2)] = null);

(statearr_44659_45956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (9))){
var inst_44600 = (state_44621[(8)]);
var state_44621__$1 = state_44621;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44621__$1,(11),out,inst_44600);
} else {
if((state_val_44622 === (5))){
var inst_44600 = (state_44621[(8)]);
var inst_44597 = (state_44621[(7)]);
var inst_44604 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44600,inst_44597);
var state_44621__$1 = state_44621;
if(inst_44604){
var statearr_44662_45959 = state_44621__$1;
(statearr_44662_45959[(1)] = (8));

} else {
var statearr_44663_45960 = state_44621__$1;
(statearr_44663_45960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (10))){
var inst_44612 = (state_44621[(2)]);
var state_44621__$1 = state_44621;
var statearr_44664_45961 = state_44621__$1;
(statearr_44664_45961[(2)] = inst_44612);

(statearr_44664_45961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44622 === (8))){
var inst_44597 = (state_44621[(7)]);
var tmp44661 = inst_44597;
var inst_44597__$1 = tmp44661;
var state_44621__$1 = (function (){var statearr_44669 = state_44621;
(statearr_44669[(7)] = inst_44597__$1);

return statearr_44669;
})();
var statearr_44670_45964 = state_44621__$1;
(statearr_44670_45964[(2)] = null);

(statearr_44670_45964[(1)] = (2));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44671[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44671[(1)] = (1));

return statearr_44671;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44621){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44621);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44672){var ex__42332__auto__ = e44672;
var statearr_44673_45970 = state_44621;
(statearr_44673_45970[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44621[(4)]))){
var statearr_44674_45971 = state_44621;
(statearr_44674_45971[(1)] = cljs.core.first((state_44621[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45972 = state_44621;
state_44621 = G__45972;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44621){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44675 = f__42444__auto__();
(statearr_44675[(6)] = c__42443__auto___45935);

return statearr_44675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__44677 = arguments.length;
switch (G__44677) {
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
var c__42443__auto___45977 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44719){
var state_val_44720 = (state_44719[(1)]);
if((state_val_44720 === (7))){
var inst_44713 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44721_45978 = state_44719__$1;
(statearr_44721_45978[(2)] = inst_44713);

(statearr_44721_45978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (1))){
var inst_44678 = (new Array(n));
var inst_44679 = inst_44678;
var inst_44680 = (0);
var state_44719__$1 = (function (){var statearr_44722 = state_44719;
(statearr_44722[(7)] = inst_44679);

(statearr_44722[(8)] = inst_44680);

return statearr_44722;
})();
var statearr_44724_45982 = state_44719__$1;
(statearr_44724_45982[(2)] = null);

(statearr_44724_45982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (4))){
var inst_44683 = (state_44719[(9)]);
var inst_44683__$1 = (state_44719[(2)]);
var inst_44684 = (inst_44683__$1 == null);
var inst_44685 = cljs.core.not(inst_44684);
var state_44719__$1 = (function (){var statearr_44735 = state_44719;
(statearr_44735[(9)] = inst_44683__$1);

return statearr_44735;
})();
if(inst_44685){
var statearr_44740_45983 = state_44719__$1;
(statearr_44740_45983[(1)] = (5));

} else {
var statearr_44741_45984 = state_44719__$1;
(statearr_44741_45984[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (15))){
var inst_44707 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44742_45985 = state_44719__$1;
(statearr_44742_45985[(2)] = inst_44707);

(statearr_44742_45985[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (13))){
var state_44719__$1 = state_44719;
var statearr_44743_45987 = state_44719__$1;
(statearr_44743_45987[(2)] = null);

(statearr_44743_45987[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (6))){
var inst_44680 = (state_44719[(8)]);
var inst_44701 = (inst_44680 > (0));
var state_44719__$1 = state_44719;
if(cljs.core.truth_(inst_44701)){
var statearr_44748_45989 = state_44719__$1;
(statearr_44748_45989[(1)] = (12));

} else {
var statearr_44749_45990 = state_44719__$1;
(statearr_44749_45990[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (3))){
var inst_44715 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44719__$1,inst_44715);
} else {
if((state_val_44720 === (12))){
var inst_44679 = (state_44719[(7)]);
var inst_44705 = cljs.core.vec(inst_44679);
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44719__$1,(15),out,inst_44705);
} else {
if((state_val_44720 === (2))){
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44719__$1,(4),ch);
} else {
if((state_val_44720 === (11))){
var inst_44695 = (state_44719[(2)]);
var inst_44696 = (new Array(n));
var inst_44679 = inst_44696;
var inst_44680 = (0);
var state_44719__$1 = (function (){var statearr_44756 = state_44719;
(statearr_44756[(7)] = inst_44679);

(statearr_44756[(10)] = inst_44695);

(statearr_44756[(8)] = inst_44680);

return statearr_44756;
})();
var statearr_44757_46006 = state_44719__$1;
(statearr_44757_46006[(2)] = null);

(statearr_44757_46006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (9))){
var inst_44679 = (state_44719[(7)]);
var inst_44693 = cljs.core.vec(inst_44679);
var state_44719__$1 = state_44719;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44719__$1,(11),out,inst_44693);
} else {
if((state_val_44720 === (5))){
var inst_44679 = (state_44719[(7)]);
var inst_44683 = (state_44719[(9)]);
var inst_44688 = (state_44719[(11)]);
var inst_44680 = (state_44719[(8)]);
var inst_44687 = (inst_44679[inst_44680] = inst_44683);
var inst_44688__$1 = (inst_44680 + (1));
var inst_44689 = (inst_44688__$1 < n);
var state_44719__$1 = (function (){var statearr_44764 = state_44719;
(statearr_44764[(11)] = inst_44688__$1);

(statearr_44764[(12)] = inst_44687);

return statearr_44764;
})();
if(cljs.core.truth_(inst_44689)){
var statearr_44765_46016 = state_44719__$1;
(statearr_44765_46016[(1)] = (8));

} else {
var statearr_44766_46017 = state_44719__$1;
(statearr_44766_46017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (14))){
var inst_44710 = (state_44719[(2)]);
var inst_44711 = cljs.core.async.close_BANG_(out);
var state_44719__$1 = (function (){var statearr_44768 = state_44719;
(statearr_44768[(13)] = inst_44710);

return statearr_44768;
})();
var statearr_44769_46018 = state_44719__$1;
(statearr_44769_46018[(2)] = inst_44711);

(statearr_44769_46018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (10))){
var inst_44699 = (state_44719[(2)]);
var state_44719__$1 = state_44719;
var statearr_44776_46019 = state_44719__$1;
(statearr_44776_46019[(2)] = inst_44699);

(statearr_44776_46019[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44720 === (8))){
var inst_44679 = (state_44719[(7)]);
var inst_44688 = (state_44719[(11)]);
var tmp44767 = inst_44679;
var inst_44679__$1 = tmp44767;
var inst_44680 = inst_44688;
var state_44719__$1 = (function (){var statearr_44779 = state_44719;
(statearr_44779[(7)] = inst_44679__$1);

(statearr_44779[(8)] = inst_44680);

return statearr_44779;
})();
var statearr_44780_46024 = state_44719__$1;
(statearr_44780_46024[(2)] = null);

(statearr_44780_46024[(1)] = (2));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44781 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44781[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44781[(1)] = (1));

return statearr_44781;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44719){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44719);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44782){var ex__42332__auto__ = e44782;
var statearr_44783_46027 = state_44719;
(statearr_44783_46027[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44719[(4)]))){
var statearr_44784_46028 = state_44719;
(statearr_44784_46028[(1)] = cljs.core.first((state_44719[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46030 = state_44719;
state_44719 = G__46030;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44719){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44719);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44792 = f__42444__auto__();
(statearr_44792[(6)] = c__42443__auto___45977);

return statearr_44792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__44795 = arguments.length;
switch (G__44795) {
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
var c__42443__auto___46034 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_44842){
var state_val_44843 = (state_44842[(1)]);
if((state_val_44843 === (7))){
var inst_44838 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
var statearr_44844_46035 = state_44842__$1;
(statearr_44844_46035[(2)] = inst_44838);

(statearr_44844_46035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (1))){
var inst_44798 = [];
var inst_44799 = inst_44798;
var inst_44800 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44842__$1 = (function (){var statearr_44845 = state_44842;
(statearr_44845[(7)] = inst_44799);

(statearr_44845[(8)] = inst_44800);

return statearr_44845;
})();
var statearr_44847_46042 = state_44842__$1;
(statearr_44847_46042[(2)] = null);

(statearr_44847_46042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (4))){
var inst_44803 = (state_44842[(9)]);
var inst_44803__$1 = (state_44842[(2)]);
var inst_44804 = (inst_44803__$1 == null);
var inst_44805 = cljs.core.not(inst_44804);
var state_44842__$1 = (function (){var statearr_44848 = state_44842;
(statearr_44848[(9)] = inst_44803__$1);

return statearr_44848;
})();
if(inst_44805){
var statearr_44851_46047 = state_44842__$1;
(statearr_44851_46047[(1)] = (5));

} else {
var statearr_44852_46048 = state_44842__$1;
(statearr_44852_46048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (15))){
var inst_44799 = (state_44842[(7)]);
var inst_44830 = cljs.core.vec(inst_44799);
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44842__$1,(18),out,inst_44830);
} else {
if((state_val_44843 === (13))){
var inst_44825 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
var statearr_44859_46050 = state_44842__$1;
(statearr_44859_46050[(2)] = inst_44825);

(statearr_44859_46050[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (6))){
var inst_44799 = (state_44842[(7)]);
var inst_44827 = inst_44799.length;
var inst_44828 = (inst_44827 > (0));
var state_44842__$1 = state_44842;
if(cljs.core.truth_(inst_44828)){
var statearr_44861_46052 = state_44842__$1;
(statearr_44861_46052[(1)] = (15));

} else {
var statearr_44862_46054 = state_44842__$1;
(statearr_44862_46054[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (17))){
var inst_44835 = (state_44842[(2)]);
var inst_44836 = cljs.core.async.close_BANG_(out);
var state_44842__$1 = (function (){var statearr_44864 = state_44842;
(statearr_44864[(10)] = inst_44835);

return statearr_44864;
})();
var statearr_44869_46055 = state_44842__$1;
(statearr_44869_46055[(2)] = inst_44836);

(statearr_44869_46055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (3))){
var inst_44840 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.return_chan(state_44842__$1,inst_44840);
} else {
if((state_val_44843 === (12))){
var inst_44799 = (state_44842[(7)]);
var inst_44818 = cljs.core.vec(inst_44799);
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_44842__$1,(14),out,inst_44818);
} else {
if((state_val_44843 === (2))){
var state_44842__$1 = state_44842;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_44842__$1,(4),ch);
} else {
if((state_val_44843 === (11))){
var inst_44799 = (state_44842[(7)]);
var inst_44807 = (state_44842[(11)]);
var inst_44803 = (state_44842[(9)]);
var inst_44815 = inst_44799.push(inst_44803);
var tmp44880 = inst_44799;
var inst_44799__$1 = tmp44880;
var inst_44800 = inst_44807;
var state_44842__$1 = (function (){var statearr_44892 = state_44842;
(statearr_44892[(7)] = inst_44799__$1);

(statearr_44892[(8)] = inst_44800);

(statearr_44892[(12)] = inst_44815);

return statearr_44892;
})();
var statearr_44893_46061 = state_44842__$1;
(statearr_44893_46061[(2)] = null);

(statearr_44893_46061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (9))){
var inst_44800 = (state_44842[(8)]);
var inst_44811 = cljs.core.keyword_identical_QMARK_(inst_44800,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_44842__$1 = state_44842;
var statearr_44897_46064 = state_44842__$1;
(statearr_44897_46064[(2)] = inst_44811);

(statearr_44897_46064[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (5))){
var inst_44808 = (state_44842[(13)]);
var inst_44807 = (state_44842[(11)]);
var inst_44800 = (state_44842[(8)]);
var inst_44803 = (state_44842[(9)]);
var inst_44807__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_44803) : f.call(null,inst_44803));
var inst_44808__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_44807__$1,inst_44800);
var state_44842__$1 = (function (){var statearr_44899 = state_44842;
(statearr_44899[(13)] = inst_44808__$1);

(statearr_44899[(11)] = inst_44807__$1);

return statearr_44899;
})();
if(inst_44808__$1){
var statearr_44900_46071 = state_44842__$1;
(statearr_44900_46071[(1)] = (8));

} else {
var statearr_44901_46073 = state_44842__$1;
(statearr_44901_46073[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (14))){
var inst_44807 = (state_44842[(11)]);
var inst_44803 = (state_44842[(9)]);
var inst_44820 = (state_44842[(2)]);
var inst_44821 = [];
var inst_44822 = inst_44821.push(inst_44803);
var inst_44799 = inst_44821;
var inst_44800 = inst_44807;
var state_44842__$1 = (function (){var statearr_44902 = state_44842;
(statearr_44902[(7)] = inst_44799);

(statearr_44902[(14)] = inst_44822);

(statearr_44902[(15)] = inst_44820);

(statearr_44902[(8)] = inst_44800);

return statearr_44902;
})();
var statearr_44906_46082 = state_44842__$1;
(statearr_44906_46082[(2)] = null);

(statearr_44906_46082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (16))){
var state_44842__$1 = state_44842;
var statearr_44907_46084 = state_44842__$1;
(statearr_44907_46084[(2)] = null);

(statearr_44907_46084[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (10))){
var inst_44813 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
if(cljs.core.truth_(inst_44813)){
var statearr_44909_46086 = state_44842__$1;
(statearr_44909_46086[(1)] = (11));

} else {
var statearr_44910_46087 = state_44842__$1;
(statearr_44910_46087[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (18))){
var inst_44832 = (state_44842[(2)]);
var state_44842__$1 = state_44842;
var statearr_44912_46088 = state_44842__$1;
(statearr_44912_46088[(2)] = inst_44832);

(statearr_44912_46088[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44843 === (8))){
var inst_44808 = (state_44842[(13)]);
var state_44842__$1 = state_44842;
var statearr_44913_46089 = state_44842__$1;
(statearr_44913_46089[(2)] = inst_44808);

(statearr_44913_46089[(1)] = (10));


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
var cljs$core$async$state_machine__42329__auto__ = null;
var cljs$core$async$state_machine__42329__auto____0 = (function (){
var statearr_44914 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44914[(0)] = cljs$core$async$state_machine__42329__auto__);

(statearr_44914[(1)] = (1));

return statearr_44914;
});
var cljs$core$async$state_machine__42329__auto____1 = (function (state_44842){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_44842);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e44915){var ex__42332__auto__ = e44915;
var statearr_44916_46091 = state_44842;
(statearr_44916_46091[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_44842[(4)]))){
var statearr_44918_46092 = state_44842;
(statearr_44918_46092[(1)] = cljs.core.first((state_44842[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46095 = state_44842;
state_44842 = G__46095;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
cljs$core$async$state_machine__42329__auto__ = function(state_44842){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__42329__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__42329__auto____1.call(this,state_44842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__42329__auto____0;
cljs$core$async$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__42329__auto____1;
return cljs$core$async$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_44920 = f__42444__auto__();
(statearr_44920[(6)] = c__42443__auto___46034);

return statearr_44920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
