goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__38584){
var map__38585 = p__38584;
var map__38585__$1 = cljs.core.__destructure_map(map__38585);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38585__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__38588_38617 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__38589_38618 = null;
var count__38590_38619 = (0);
var i__38591_38620 = (0);
while(true){
if((i__38591_38620 < count__38590_38619)){
var vec__38603_38621 = chunk__38589_38618.cljs$core$IIndexed$_nth$arity$2(null,i__38591_38620);
var k_38622 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603_38621,(0),null);
var cb_38623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38603_38621,(1),null);
try{var G__38607_38624 = cljs.core.deref(re_frame.trace.traces);
(cb_38623.cljs$core$IFn$_invoke$arity$1 ? cb_38623.cljs$core$IFn$_invoke$arity$1(G__38607_38624) : cb_38623.call(null,G__38607_38624));
}catch (e38606){var e_38625 = e38606;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38622,"while storing",cljs.core.deref(re_frame.trace.traces),e_38625], 0));
}

var G__38626 = seq__38588_38617;
var G__38627 = chunk__38589_38618;
var G__38628 = count__38590_38619;
var G__38629 = (i__38591_38620 + (1));
seq__38588_38617 = G__38626;
chunk__38589_38618 = G__38627;
count__38590_38619 = G__38628;
i__38591_38620 = G__38629;
continue;
} else {
var temp__5753__auto___38630 = cljs.core.seq(seq__38588_38617);
if(temp__5753__auto___38630){
var seq__38588_38631__$1 = temp__5753__auto___38630;
if(cljs.core.chunked_seq_QMARK_(seq__38588_38631__$1)){
var c__4649__auto___38632 = cljs.core.chunk_first(seq__38588_38631__$1);
var G__38633 = cljs.core.chunk_rest(seq__38588_38631__$1);
var G__38634 = c__4649__auto___38632;
var G__38635 = cljs.core.count(c__4649__auto___38632);
var G__38636 = (0);
seq__38588_38617 = G__38633;
chunk__38589_38618 = G__38634;
count__38590_38619 = G__38635;
i__38591_38620 = G__38636;
continue;
} else {
var vec__38609_38637 = cljs.core.first(seq__38588_38631__$1);
var k_38638 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609_38637,(0),null);
var cb_38639 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38609_38637,(1),null);
try{var G__38613_38640 = cljs.core.deref(re_frame.trace.traces);
(cb_38639.cljs$core$IFn$_invoke$arity$1 ? cb_38639.cljs$core$IFn$_invoke$arity$1(G__38613_38640) : cb_38639.call(null,G__38613_38640));
}catch (e38612){var e_38641 = e38612;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_38638,"while storing",cljs.core.deref(re_frame.trace.traces),e_38641], 0));
}

var G__38642 = cljs.core.next(seq__38588_38631__$1);
var G__38643 = null;
var G__38644 = (0);
var G__38645 = (0);
seq__38588_38617 = G__38642;
chunk__38589_38618 = G__38643;
count__38590_38619 = G__38644;
i__38591_38620 = G__38645;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
