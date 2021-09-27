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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__35131){
var map__35132 = p__35131;
var map__35132__$1 = cljs.core.__destructure_map(map__35132);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35132__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__35135_35164 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__35136_35165 = null;
var count__35137_35166 = (0);
var i__35138_35167 = (0);
while(true){
if((i__35138_35167 < count__35137_35166)){
var vec__35151_35168 = chunk__35136_35165.cljs$core$IIndexed$_nth$arity$2(null,i__35138_35167);
var k_35169 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35168,(0),null);
var cb_35170 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35151_35168,(1),null);
try{var G__35155_35171 = cljs.core.deref(re_frame.trace.traces);
(cb_35170.cljs$core$IFn$_invoke$arity$1 ? cb_35170.cljs$core$IFn$_invoke$arity$1(G__35155_35171) : cb_35170.call(null,G__35155_35171));
}catch (e35154){var e_35172 = e35154;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35169,"while storing",cljs.core.deref(re_frame.trace.traces),e_35172], 0));
}

var G__35174 = seq__35135_35164;
var G__35175 = chunk__35136_35165;
var G__35176 = count__35137_35166;
var G__35177 = (i__35138_35167 + (1));
seq__35135_35164 = G__35174;
chunk__35136_35165 = G__35175;
count__35137_35166 = G__35176;
i__35138_35167 = G__35177;
continue;
} else {
var temp__5753__auto___35178 = cljs.core.seq(seq__35135_35164);
if(temp__5753__auto___35178){
var seq__35135_35179__$1 = temp__5753__auto___35178;
if(cljs.core.chunked_seq_QMARK_(seq__35135_35179__$1)){
var c__4649__auto___35180 = cljs.core.chunk_first(seq__35135_35179__$1);
var G__35181 = cljs.core.chunk_rest(seq__35135_35179__$1);
var G__35182 = c__4649__auto___35180;
var G__35183 = cljs.core.count(c__4649__auto___35180);
var G__35184 = (0);
seq__35135_35164 = G__35181;
chunk__35136_35165 = G__35182;
count__35137_35166 = G__35183;
i__35138_35167 = G__35184;
continue;
} else {
var vec__35156_35185 = cljs.core.first(seq__35135_35179__$1);
var k_35186 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35185,(0),null);
var cb_35187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35156_35185,(1),null);
try{var G__35160_35188 = cljs.core.deref(re_frame.trace.traces);
(cb_35187.cljs$core$IFn$_invoke$arity$1 ? cb_35187.cljs$core$IFn$_invoke$arity$1(G__35160_35188) : cb_35187.call(null,G__35160_35188));
}catch (e35159){var e_35189 = e35159;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_35186,"while storing",cljs.core.deref(re_frame.trace.traces),e_35189], 0));
}

var G__35192 = cljs.core.next(seq__35135_35179__$1);
var G__35193 = null;
var G__35194 = (0);
var G__35195 = (0);
seq__35135_35164 = G__35192;
chunk__35136_35165 = G__35193;
count__35137_35166 = G__35194;
i__35138_35167 = G__35195;
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
