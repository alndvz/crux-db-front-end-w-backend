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
var _STAR_current_trace_STAR__orig_val__32650 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__32651 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__32651);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32863 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32863)){
var new_db_32864 = temp__5753__auto___32863;
var fexpr__32661_32865 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32661_32865.cljs$core$IFn$_invoke$arity$1 ? fexpr__32661_32865.cljs$core$IFn$_invoke$arity$1(new_db_32864) : fexpr__32661_32865.call(null,new_db_32864));
} else {
}

var seq__32667 = cljs.core.seq(effects_without_db);
var chunk__32668 = null;
var count__32669 = (0);
var i__32670 = (0);
while(true){
if((i__32670 < count__32669)){
var vec__32691 = chunk__32668.cljs$core$IIndexed$_nth$arity$2(null,i__32670);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32691,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32691,(1),null);
var temp__5751__auto___32866 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32866)){
var effect_fn_32867 = temp__5751__auto___32866;
(effect_fn_32867.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32867.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32867.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32869 = seq__32667;
var G__32870 = chunk__32668;
var G__32871 = count__32669;
var G__32872 = (i__32670 + (1));
seq__32667 = G__32869;
chunk__32668 = G__32870;
count__32669 = G__32871;
i__32670 = G__32872;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32667);
if(temp__5753__auto__){
var seq__32667__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32667__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32667__$1);
var G__32876 = cljs.core.chunk_rest(seq__32667__$1);
var G__32877 = c__4649__auto__;
var G__32878 = cljs.core.count(c__4649__auto__);
var G__32879 = (0);
seq__32667 = G__32876;
chunk__32668 = G__32877;
count__32669 = G__32878;
i__32670 = G__32879;
continue;
} else {
var vec__32699 = cljs.core.first(seq__32667__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32699,(1),null);
var temp__5751__auto___32881 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32881)){
var effect_fn_32882 = temp__5751__auto___32881;
(effect_fn_32882.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32882.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32882.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32883 = cljs.core.next(seq__32667__$1);
var G__32884 = null;
var G__32885 = (0);
var G__32886 = (0);
seq__32667 = G__32883;
chunk__32668 = G__32884;
count__32669 = G__32885;
i__32670 = G__32886;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__31779__auto___32887 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__31780__auto___32888 = (end__31779__auto___32887 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__31780__auto___32888,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__31779__auto___32887);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__32650);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___32889 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___32889)){
var new_db_32890 = temp__5753__auto___32889;
var fexpr__32714_32891 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__32714_32891.cljs$core$IFn$_invoke$arity$1 ? fexpr__32714_32891.cljs$core$IFn$_invoke$arity$1(new_db_32890) : fexpr__32714_32891.call(null,new_db_32890));
} else {
}

var seq__32715 = cljs.core.seq(effects_without_db);
var chunk__32716 = null;
var count__32717 = (0);
var i__32718 = (0);
while(true){
if((i__32718 < count__32717)){
var vec__32734 = chunk__32716.cljs$core$IIndexed$_nth$arity$2(null,i__32718);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32734,(1),null);
var temp__5751__auto___32896 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32896)){
var effect_fn_32898 = temp__5751__auto___32896;
(effect_fn_32898.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32898.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32898.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32900 = seq__32715;
var G__32901 = chunk__32716;
var G__32902 = count__32717;
var G__32903 = (i__32718 + (1));
seq__32715 = G__32900;
chunk__32716 = G__32901;
count__32717 = G__32902;
i__32718 = G__32903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32715);
if(temp__5753__auto__){
var seq__32715__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32715__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32715__$1);
var G__32907 = cljs.core.chunk_rest(seq__32715__$1);
var G__32908 = c__4649__auto__;
var G__32909 = cljs.core.count(c__4649__auto__);
var G__32910 = (0);
seq__32715 = G__32907;
chunk__32716 = G__32908;
count__32717 = G__32909;
i__32718 = G__32910;
continue;
} else {
var vec__32750 = cljs.core.first(seq__32715__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32750,(1),null);
var temp__5751__auto___32911 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32911)){
var effect_fn_32913 = temp__5751__auto___32911;
(effect_fn_32913.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32913.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32913.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__32914 = cljs.core.next(seq__32715__$1);
var G__32915 = null;
var G__32916 = (0);
var G__32917 = (0);
seq__32715 = G__32914;
chunk__32716 = G__32915;
count__32717 = G__32916;
i__32718 = G__32917;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__32759){
var map__32760 = p__32759;
var map__32760__$1 = cljs.core.__destructure_map(map__32760);
var effect = map__32760__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32760__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32760__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__32761 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32762 = null;
var count__32763 = (0);
var i__32764 = (0);
while(true){
if((i__32764 < count__32763)){
var effect = chunk__32762.cljs$core$IIndexed$_nth$arity$2(null,i__32764);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32923 = seq__32761;
var G__32924 = chunk__32762;
var G__32925 = count__32763;
var G__32926 = (i__32764 + (1));
seq__32761 = G__32923;
chunk__32762 = G__32924;
count__32763 = G__32925;
i__32764 = G__32926;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32761);
if(temp__5753__auto__){
var seq__32761__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32761__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32761__$1);
var G__32929 = cljs.core.chunk_rest(seq__32761__$1);
var G__32930 = c__4649__auto__;
var G__32931 = cljs.core.count(c__4649__auto__);
var G__32932 = (0);
seq__32761 = G__32929;
chunk__32762 = G__32930;
count__32763 = G__32931;
i__32764 = G__32932;
continue;
} else {
var effect = cljs.core.first(seq__32761__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__32935 = cljs.core.next(seq__32761__$1);
var G__32936 = null;
var G__32937 = (0);
var G__32938 = (0);
seq__32761 = G__32935;
chunk__32762 = G__32936;
count__32763 = G__32937;
i__32764 = G__32938;
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
var seq__32769 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__32770 = null;
var count__32771 = (0);
var i__32772 = (0);
while(true){
if((i__32772 < count__32771)){
var vec__32796 = chunk__32770.cljs$core$IIndexed$_nth$arity$2(null,i__32772);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32796,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32796,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32943 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32943)){
var effect_fn_32944 = temp__5751__auto___32943;
(effect_fn_32944.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32944.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32944.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32945 = seq__32769;
var G__32946 = chunk__32770;
var G__32947 = count__32771;
var G__32948 = (i__32772 + (1));
seq__32769 = G__32945;
chunk__32770 = G__32946;
count__32771 = G__32947;
i__32772 = G__32948;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32769);
if(temp__5753__auto__){
var seq__32769__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32769__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32769__$1);
var G__32952 = cljs.core.chunk_rest(seq__32769__$1);
var G__32953 = c__4649__auto__;
var G__32954 = cljs.core.count(c__4649__auto__);
var G__32955 = (0);
seq__32769 = G__32952;
chunk__32770 = G__32953;
count__32771 = G__32954;
i__32772 = G__32955;
continue;
} else {
var vec__32808 = cljs.core.first(seq__32769__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32808,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___32956 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___32956)){
var effect_fn_32958 = temp__5751__auto___32956;
(effect_fn_32958.cljs$core$IFn$_invoke$arity$1 ? effect_fn_32958.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_32958.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__32960 = cljs.core.next(seq__32769__$1);
var G__32961 = null;
var G__32962 = (0);
var G__32963 = (0);
seq__32769 = G__32960;
chunk__32770 = G__32961;
count__32771 = G__32962;
i__32772 = G__32963;
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
var seq__32817 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__32818 = null;
var count__32819 = (0);
var i__32820 = (0);
while(true){
if((i__32820 < count__32819)){
var event = chunk__32818.cljs$core$IIndexed$_nth$arity$2(null,i__32820);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32966 = seq__32817;
var G__32967 = chunk__32818;
var G__32968 = count__32819;
var G__32969 = (i__32820 + (1));
seq__32817 = G__32966;
chunk__32818 = G__32967;
count__32819 = G__32968;
i__32820 = G__32969;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32817);
if(temp__5753__auto__){
var seq__32817__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32817__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32817__$1);
var G__32972 = cljs.core.chunk_rest(seq__32817__$1);
var G__32973 = c__4649__auto__;
var G__32974 = cljs.core.count(c__4649__auto__);
var G__32975 = (0);
seq__32817 = G__32972;
chunk__32818 = G__32973;
count__32819 = G__32974;
i__32820 = G__32975;
continue;
} else {
var event = cljs.core.first(seq__32817__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__32980 = cljs.core.next(seq__32817__$1);
var G__32981 = null;
var G__32982 = (0);
var G__32983 = (0);
seq__32817 = G__32980;
chunk__32818 = G__32981;
count__32819 = G__32982;
i__32820 = G__32983;
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
var seq__32845 = cljs.core.seq(value);
var chunk__32846 = null;
var count__32847 = (0);
var i__32848 = (0);
while(true){
if((i__32848 < count__32847)){
var event = chunk__32846.cljs$core$IIndexed$_nth$arity$2(null,i__32848);
clear_event(event);


var G__32985 = seq__32845;
var G__32986 = chunk__32846;
var G__32987 = count__32847;
var G__32988 = (i__32848 + (1));
seq__32845 = G__32985;
chunk__32846 = G__32986;
count__32847 = G__32987;
i__32848 = G__32988;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32845);
if(temp__5753__auto__){
var seq__32845__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32845__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32845__$1);
var G__32990 = cljs.core.chunk_rest(seq__32845__$1);
var G__32991 = c__4649__auto__;
var G__32992 = cljs.core.count(c__4649__auto__);
var G__32993 = (0);
seq__32845 = G__32990;
chunk__32846 = G__32991;
count__32847 = G__32992;
i__32848 = G__32993;
continue;
} else {
var event = cljs.core.first(seq__32845__$1);
clear_event(event);


var G__32997 = cljs.core.next(seq__32845__$1);
var G__32998 = null;
var G__32999 = (0);
var G__33000 = (0);
seq__32845 = G__32997;
chunk__32846 = G__32998;
count__32847 = G__32999;
i__32848 = G__33000;
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
