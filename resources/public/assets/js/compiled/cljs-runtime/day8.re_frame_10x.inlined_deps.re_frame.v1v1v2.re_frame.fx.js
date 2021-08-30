goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__36099 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__36100 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__36100);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___36310 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___36310)){
var new_db_36311 = temp__5753__auto___36310;
var fexpr__36110_36312 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36110_36312.cljs$core$IFn$_invoke$arity$1 ? fexpr__36110_36312.cljs$core$IFn$_invoke$arity$1(new_db_36311) : fexpr__36110_36312.call(null,new_db_36311));
} else {
}

var seq__36112 = cljs.core.seq(effects_without_db);
var chunk__36113 = null;
var count__36114 = (0);
var i__36115 = (0);
while(true){
if((i__36115 < count__36114)){
var vec__36135 = chunk__36113.cljs$core$IIndexed$_nth$arity$2(null,i__36115);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36135,(1),null);
var temp__5751__auto___36313 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36313)){
var effect_fn_36314 = temp__5751__auto___36313;
(effect_fn_36314.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36314.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36314.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36315 = seq__36112;
var G__36316 = chunk__36113;
var G__36317 = count__36114;
var G__36318 = (i__36115 + (1));
seq__36112 = G__36315;
chunk__36113 = G__36316;
count__36114 = G__36317;
i__36115 = G__36318;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36112);
if(temp__5753__auto__){
var seq__36112__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36112__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36112__$1);
var G__36320 = cljs.core.chunk_rest(seq__36112__$1);
var G__36321 = c__4649__auto__;
var G__36322 = cljs.core.count(c__4649__auto__);
var G__36323 = (0);
seq__36112 = G__36320;
chunk__36113 = G__36321;
count__36114 = G__36322;
i__36115 = G__36323;
continue;
} else {
var vec__36144 = cljs.core.first(seq__36112__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36144,(1),null);
var temp__5751__auto___36325 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36325)){
var effect_fn_36326 = temp__5751__auto___36325;
(effect_fn_36326.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36326.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36326.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36327 = cljs.core.next(seq__36112__$1);
var G__36328 = null;
var G__36329 = (0);
var G__36330 = (0);
seq__36112 = G__36327;
chunk__36113 = G__36328;
count__36114 = G__36329;
i__36115 = G__36330;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__35232__auto___36331 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__35233__auto___36332 = (end__35232__auto___36331 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35233__auto___36332,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__35232__auto___36331);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__36099);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___36335 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___36335)){
var new_db_36336 = temp__5753__auto___36335;
var fexpr__36154_36337 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__36154_36337.cljs$core$IFn$_invoke$arity$1 ? fexpr__36154_36337.cljs$core$IFn$_invoke$arity$1(new_db_36336) : fexpr__36154_36337.call(null,new_db_36336));
} else {
}

var seq__36155 = cljs.core.seq(effects_without_db);
var chunk__36156 = null;
var count__36157 = (0);
var i__36158 = (0);
while(true){
if((i__36158 < count__36157)){
var vec__36184 = chunk__36156.cljs$core$IIndexed$_nth$arity$2(null,i__36158);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36184,(1),null);
var temp__5751__auto___36338 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36338)){
var effect_fn_36342 = temp__5751__auto___36338;
(effect_fn_36342.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36342.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36342.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36343 = seq__36155;
var G__36344 = chunk__36156;
var G__36345 = count__36157;
var G__36346 = (i__36158 + (1));
seq__36155 = G__36343;
chunk__36156 = G__36344;
count__36157 = G__36345;
i__36158 = G__36346;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36155);
if(temp__5753__auto__){
var seq__36155__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36155__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36155__$1);
var G__36347 = cljs.core.chunk_rest(seq__36155__$1);
var G__36348 = c__4649__auto__;
var G__36349 = cljs.core.count(c__4649__auto__);
var G__36350 = (0);
seq__36155 = G__36347;
chunk__36156 = G__36348;
count__36157 = G__36349;
i__36158 = G__36350;
continue;
} else {
var vec__36195 = cljs.core.first(seq__36155__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36195,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36195,(1),null);
var temp__5751__auto___36351 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36351)){
var effect_fn_36352 = temp__5751__auto___36351;
(effect_fn_36352.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36352.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36352.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__36353 = cljs.core.next(seq__36155__$1);
var G__36354 = null;
var G__36355 = (0);
var G__36356 = (0);
seq__36155 = G__36353;
chunk__36156 = G__36354;
count__36157 = G__36355;
i__36158 = G__36356;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__36204){
var map__36205 = p__36204;
var map__36205__$1 = cljs.core.__destructure_map(map__36205);
var effect = map__36205__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36205__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__36212 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36213 = null;
var count__36214 = (0);
var i__36215 = (0);
while(true){
if((i__36215 < count__36214)){
var effect = chunk__36213.cljs$core$IIndexed$_nth$arity$2(null,i__36215);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__36359 = seq__36212;
var G__36360 = chunk__36213;
var G__36361 = count__36214;
var G__36362 = (i__36215 + (1));
seq__36212 = G__36359;
chunk__36213 = G__36360;
count__36214 = G__36361;
i__36215 = G__36362;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36212);
if(temp__5753__auto__){
var seq__36212__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36212__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36212__$1);
var G__36364 = cljs.core.chunk_rest(seq__36212__$1);
var G__36365 = c__4649__auto__;
var G__36366 = cljs.core.count(c__4649__auto__);
var G__36367 = (0);
seq__36212 = G__36364;
chunk__36213 = G__36365;
count__36214 = G__36366;
i__36215 = G__36367;
continue;
} else {
var effect = cljs.core.first(seq__36212__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__36368 = cljs.core.next(seq__36212__$1);
var G__36369 = null;
var G__36370 = (0);
var G__36371 = (0);
seq__36212 = G__36368;
chunk__36213 = G__36369;
count__36214 = G__36370;
i__36215 = G__36371;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__36222 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__36223 = null;
var count__36224 = (0);
var i__36225 = (0);
while(true){
if((i__36225 < count__36224)){
var vec__36248 = chunk__36223.cljs$core$IIndexed$_nth$arity$2(null,i__36225);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36248,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___36373 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36373)){
var effect_fn_36374 = temp__5751__auto___36373;
(effect_fn_36374.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36374.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36374.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36376 = seq__36222;
var G__36377 = chunk__36223;
var G__36378 = count__36224;
var G__36379 = (i__36225 + (1));
seq__36222 = G__36376;
chunk__36223 = G__36377;
count__36224 = G__36378;
i__36225 = G__36379;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36222);
if(temp__5753__auto__){
var seq__36222__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36222__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36222__$1);
var G__36380 = cljs.core.chunk_rest(seq__36222__$1);
var G__36381 = c__4649__auto__;
var G__36382 = cljs.core.count(c__4649__auto__);
var G__36383 = (0);
seq__36222 = G__36380;
chunk__36223 = G__36381;
count__36224 = G__36382;
i__36225 = G__36383;
continue;
} else {
var vec__36258 = cljs.core.first(seq__36222__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36258,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36258,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___36386 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___36386)){
var effect_fn_36387 = temp__5751__auto___36386;
(effect_fn_36387.cljs$core$IFn$_invoke$arity$1 ? effect_fn_36387.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_36387.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__36388 = cljs.core.next(seq__36222__$1);
var G__36389 = null;
var G__36390 = (0);
var G__36391 = (0);
seq__36222 = G__36388;
chunk__36223 = G__36389;
count__36224 = G__36390;
i__36225 = G__36391;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__36275 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__36276 = null;
var count__36277 = (0);
var i__36278 = (0);
while(true){
if((i__36278 < count__36277)){
var event = chunk__36276.cljs$core$IIndexed$_nth$arity$2(null,i__36278);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__36397 = seq__36275;
var G__36398 = chunk__36276;
var G__36399 = count__36277;
var G__36400 = (i__36278 + (1));
seq__36275 = G__36397;
chunk__36276 = G__36398;
count__36277 = G__36399;
i__36278 = G__36400;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36275);
if(temp__5753__auto__){
var seq__36275__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36275__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36275__$1);
var G__36401 = cljs.core.chunk_rest(seq__36275__$1);
var G__36402 = c__4649__auto__;
var G__36403 = cljs.core.count(c__4649__auto__);
var G__36404 = (0);
seq__36275 = G__36401;
chunk__36276 = G__36402;
count__36277 = G__36403;
i__36278 = G__36404;
continue;
} else {
var event = cljs.core.first(seq__36275__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__36405 = cljs.core.next(seq__36275__$1);
var G__36406 = null;
var G__36407 = (0);
var G__36408 = (0);
seq__36275 = G__36405;
chunk__36276 = G__36406;
count__36277 = G__36407;
i__36278 = G__36408;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__36290 = cljs.core.seq(value);
var chunk__36291 = null;
var count__36292 = (0);
var i__36293 = (0);
while(true){
if((i__36293 < count__36292)){
var event = chunk__36291.cljs$core$IIndexed$_nth$arity$2(null,i__36293);
clear_event(event);


var G__36413 = seq__36290;
var G__36414 = chunk__36291;
var G__36415 = count__36292;
var G__36416 = (i__36293 + (1));
seq__36290 = G__36413;
chunk__36291 = G__36414;
count__36292 = G__36415;
i__36293 = G__36416;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__36290);
if(temp__5753__auto__){
var seq__36290__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36290__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__36290__$1);
var G__36417 = cljs.core.chunk_rest(seq__36290__$1);
var G__36418 = c__4649__auto__;
var G__36419 = cljs.core.count(c__4649__auto__);
var G__36420 = (0);
seq__36290 = G__36417;
chunk__36291 = G__36418;
count__36292 = G__36419;
i__36293 = G__36420;
continue;
} else {
var event = cljs.core.first(seq__36290__$1);
clear_event(event);


var G__36421 = cljs.core.next(seq__36290__$1);
var G__36422 = null;
var G__36423 = (0);
var G__36424 = (0);
seq__36290 = G__36421;
chunk__36291 = G__36422;
count__36292 = G__36423;
i__36293 = G__36424;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
