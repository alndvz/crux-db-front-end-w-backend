goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__35544 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__35545 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__35545);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35683 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35683)){
var new_db_35684 = temp__5753__auto___35683;
var fexpr__35550_35685 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35550_35685.cljs$core$IFn$_invoke$arity$1 ? fexpr__35550_35685.cljs$core$IFn$_invoke$arity$1(new_db_35684) : fexpr__35550_35685.call(null,new_db_35684));
} else {
}

var seq__35551 = cljs.core.seq(effects_without_db);
var chunk__35552 = null;
var count__35553 = (0);
var i__35554 = (0);
while(true){
if((i__35554 < count__35553)){
var vec__35566 = chunk__35552.cljs$core$IIndexed$_nth$arity$2(null,i__35554);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35566,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35566,(1),null);
var temp__5751__auto___35688 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35688)){
var effect_fn_35690 = temp__5751__auto___35688;
(effect_fn_35690.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35690.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35690.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35691 = seq__35551;
var G__35692 = chunk__35552;
var G__35693 = count__35553;
var G__35694 = (i__35554 + (1));
seq__35551 = G__35691;
chunk__35552 = G__35692;
count__35553 = G__35693;
i__35554 = G__35694;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35551);
if(temp__5753__auto__){
var seq__35551__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35551__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35551__$1);
var G__35696 = cljs.core.chunk_rest(seq__35551__$1);
var G__35697 = c__4649__auto__;
var G__35698 = cljs.core.count(c__4649__auto__);
var G__35699 = (0);
seq__35551 = G__35696;
chunk__35552 = G__35697;
count__35553 = G__35698;
i__35554 = G__35699;
continue;
} else {
var vec__35569 = cljs.core.first(seq__35551__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35569,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35569,(1),null);
var temp__5751__auto___35700 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35700)){
var effect_fn_35701 = temp__5751__auto___35700;
(effect_fn_35701.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35701.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35701.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35702 = cljs.core.next(seq__35551__$1);
var G__35703 = null;
var G__35704 = (0);
var G__35705 = (0);
seq__35551 = G__35702;
chunk__35552 = G__35703;
count__35553 = G__35704;
i__35554 = G__35705;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__35109__auto___35706 = re_frame.interop.now();
var duration__35110__auto___35707 = (end__35109__auto___35706 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__35110__auto___35707,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__35109__auto___35706);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__35544);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___35709 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___35709)){
var new_db_35711 = temp__5753__auto___35709;
var fexpr__35575_35713 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__35575_35713.cljs$core$IFn$_invoke$arity$1 ? fexpr__35575_35713.cljs$core$IFn$_invoke$arity$1(new_db_35711) : fexpr__35575_35713.call(null,new_db_35711));
} else {
}

var seq__35576 = cljs.core.seq(effects_without_db);
var chunk__35577 = null;
var count__35578 = (0);
var i__35579 = (0);
while(true){
if((i__35579 < count__35578)){
var vec__35590 = chunk__35577.cljs$core$IIndexed$_nth$arity$2(null,i__35579);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35590,(1),null);
var temp__5751__auto___35715 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35715)){
var effect_fn_35716 = temp__5751__auto___35715;
(effect_fn_35716.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35716.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35716.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35717 = seq__35576;
var G__35718 = chunk__35577;
var G__35719 = count__35578;
var G__35720 = (i__35579 + (1));
seq__35576 = G__35717;
chunk__35577 = G__35718;
count__35578 = G__35719;
i__35579 = G__35720;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35576);
if(temp__5753__auto__){
var seq__35576__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35576__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35576__$1);
var G__35721 = cljs.core.chunk_rest(seq__35576__$1);
var G__35722 = c__4649__auto__;
var G__35723 = cljs.core.count(c__4649__auto__);
var G__35724 = (0);
seq__35576 = G__35721;
chunk__35577 = G__35722;
count__35578 = G__35723;
i__35579 = G__35724;
continue;
} else {
var vec__35594 = cljs.core.first(seq__35576__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35594,(1),null);
var temp__5751__auto___35725 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35725)){
var effect_fn_35726 = temp__5751__auto___35725;
(effect_fn_35726.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35726.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35726.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__35727 = cljs.core.next(seq__35576__$1);
var G__35728 = null;
var G__35729 = (0);
var G__35730 = (0);
seq__35576 = G__35727;
chunk__35577 = G__35728;
count__35578 = G__35729;
i__35579 = G__35730;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__35599){
var map__35600 = p__35599;
var map__35600__$1 = cljs.core.__destructure_map(map__35600);
var effect = map__35600__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35600__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__35609 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35610 = null;
var count__35611 = (0);
var i__35612 = (0);
while(true){
if((i__35612 < count__35611)){
var effect = chunk__35610.cljs$core$IIndexed$_nth$arity$2(null,i__35612);
re_frame.fx.dispatch_later(effect);


var G__35733 = seq__35609;
var G__35734 = chunk__35610;
var G__35735 = count__35611;
var G__35736 = (i__35612 + (1));
seq__35609 = G__35733;
chunk__35610 = G__35734;
count__35611 = G__35735;
i__35612 = G__35736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35609);
if(temp__5753__auto__){
var seq__35609__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35609__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35609__$1);
var G__35737 = cljs.core.chunk_rest(seq__35609__$1);
var G__35738 = c__4649__auto__;
var G__35739 = cljs.core.count(c__4649__auto__);
var G__35740 = (0);
seq__35609 = G__35737;
chunk__35610 = G__35738;
count__35611 = G__35739;
i__35612 = G__35740;
continue;
} else {
var effect = cljs.core.first(seq__35609__$1);
re_frame.fx.dispatch_later(effect);


var G__35741 = cljs.core.next(seq__35609__$1);
var G__35742 = null;
var G__35743 = (0);
var G__35744 = (0);
seq__35609 = G__35741;
chunk__35610 = G__35742;
count__35611 = G__35743;
i__35612 = G__35744;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__35624 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__35625 = null;
var count__35626 = (0);
var i__35627 = (0);
while(true){
if((i__35627 < count__35626)){
var vec__35647 = chunk__35625.cljs$core$IIndexed$_nth$arity$2(null,i__35627);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35647,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35747 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35747)){
var effect_fn_35748 = temp__5751__auto___35747;
(effect_fn_35748.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35748.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35748.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35749 = seq__35624;
var G__35750 = chunk__35625;
var G__35751 = count__35626;
var G__35752 = (i__35627 + (1));
seq__35624 = G__35749;
chunk__35625 = G__35750;
count__35626 = G__35751;
i__35627 = G__35752;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35624);
if(temp__5753__auto__){
var seq__35624__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35624__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35624__$1);
var G__35756 = cljs.core.chunk_rest(seq__35624__$1);
var G__35757 = c__4649__auto__;
var G__35758 = cljs.core.count(c__4649__auto__);
var G__35759 = (0);
seq__35624 = G__35756;
chunk__35625 = G__35757;
count__35626 = G__35758;
i__35627 = G__35759;
continue;
} else {
var vec__35653 = cljs.core.first(seq__35624__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35653,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___35761 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___35761)){
var effect_fn_35762 = temp__5751__auto___35761;
(effect_fn_35762.cljs$core$IFn$_invoke$arity$1 ? effect_fn_35762.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_35762.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__35763 = cljs.core.next(seq__35624__$1);
var G__35764 = null;
var G__35765 = (0);
var G__35766 = (0);
seq__35624 = G__35763;
chunk__35625 = G__35764;
count__35626 = G__35765;
i__35627 = G__35766;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__35661 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__35662 = null;
var count__35663 = (0);
var i__35664 = (0);
while(true){
if((i__35664 < count__35663)){
var event = chunk__35662.cljs$core$IIndexed$_nth$arity$2(null,i__35664);
re_frame.router.dispatch(event);


var G__35768 = seq__35661;
var G__35769 = chunk__35662;
var G__35770 = count__35663;
var G__35771 = (i__35664 + (1));
seq__35661 = G__35768;
chunk__35662 = G__35769;
count__35663 = G__35770;
i__35664 = G__35771;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35661);
if(temp__5753__auto__){
var seq__35661__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35661__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35661__$1);
var G__35774 = cljs.core.chunk_rest(seq__35661__$1);
var G__35775 = c__4649__auto__;
var G__35776 = cljs.core.count(c__4649__auto__);
var G__35777 = (0);
seq__35661 = G__35774;
chunk__35662 = G__35775;
count__35663 = G__35776;
i__35664 = G__35777;
continue;
} else {
var event = cljs.core.first(seq__35661__$1);
re_frame.router.dispatch(event);


var G__35778 = cljs.core.next(seq__35661__$1);
var G__35779 = null;
var G__35780 = (0);
var G__35781 = (0);
seq__35661 = G__35778;
chunk__35662 = G__35779;
count__35663 = G__35780;
i__35664 = G__35781;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__35669 = cljs.core.seq(value);
var chunk__35670 = null;
var count__35671 = (0);
var i__35672 = (0);
while(true){
if((i__35672 < count__35671)){
var event = chunk__35670.cljs$core$IIndexed$_nth$arity$2(null,i__35672);
clear_event(event);


var G__35783 = seq__35669;
var G__35784 = chunk__35670;
var G__35785 = count__35671;
var G__35786 = (i__35672 + (1));
seq__35669 = G__35783;
chunk__35670 = G__35784;
count__35671 = G__35785;
i__35672 = G__35786;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35669);
if(temp__5753__auto__){
var seq__35669__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35669__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__35669__$1);
var G__35787 = cljs.core.chunk_rest(seq__35669__$1);
var G__35788 = c__4649__auto__;
var G__35789 = cljs.core.count(c__4649__auto__);
var G__35790 = (0);
seq__35669 = G__35787;
chunk__35670 = G__35788;
count__35671 = G__35789;
i__35672 = G__35790;
continue;
} else {
var event = cljs.core.first(seq__35669__$1);
clear_event(event);


var G__35793 = cljs.core.next(seq__35669__$1);
var G__35794 = null;
var G__35795 = (0);
var G__35796 = (0);
seq__35669 = G__35793;
chunk__35670 = G__35794;
count__35671 = G__35795;
i__35672 = G__35796;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
