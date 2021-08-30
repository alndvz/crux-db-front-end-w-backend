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
var _STAR_current_trace_STAR__orig_val__38996 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__38997 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__38997);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39120 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39120)){
var new_db_39121 = temp__5753__auto___39120;
var fexpr__39000_39122 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39000_39122.cljs$core$IFn$_invoke$arity$1 ? fexpr__39000_39122.cljs$core$IFn$_invoke$arity$1(new_db_39121) : fexpr__39000_39122.call(null,new_db_39121));
} else {
}

var seq__39001 = cljs.core.seq(effects_without_db);
var chunk__39002 = null;
var count__39003 = (0);
var i__39004 = (0);
while(true){
if((i__39004 < count__39003)){
var vec__39012 = chunk__39002.cljs$core$IIndexed$_nth$arity$2(null,i__39004);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39012,(1),null);
var temp__5751__auto___39123 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39123)){
var effect_fn_39124 = temp__5751__auto___39123;
(effect_fn_39124.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39124.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39124.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39125 = seq__39001;
var G__39126 = chunk__39002;
var G__39127 = count__39003;
var G__39128 = (i__39004 + (1));
seq__39001 = G__39125;
chunk__39002 = G__39126;
count__39003 = G__39127;
i__39004 = G__39128;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39001);
if(temp__5753__auto__){
var seq__39001__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39001__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39001__$1);
var G__39129 = cljs.core.chunk_rest(seq__39001__$1);
var G__39130 = c__4649__auto__;
var G__39131 = cljs.core.count(c__4649__auto__);
var G__39132 = (0);
seq__39001 = G__39129;
chunk__39002 = G__39130;
count__39003 = G__39131;
i__39004 = G__39132;
continue;
} else {
var vec__39018 = cljs.core.first(seq__39001__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39018,(1),null);
var temp__5751__auto___39133 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39133)){
var effect_fn_39134 = temp__5751__auto___39133;
(effect_fn_39134.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39134.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39134.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39137 = cljs.core.next(seq__39001__$1);
var G__39138 = null;
var G__39139 = (0);
var G__39140 = (0);
seq__39001 = G__39137;
chunk__39002 = G__39138;
count__39003 = G__39139;
i__39004 = G__39140;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__38562__auto___39141 = re_frame.interop.now();
var duration__38563__auto___39142 = (end__38562__auto___39141 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__38563__auto___39142,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__38562__auto___39141);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__38996);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___39143 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___39143)){
var new_db_39144 = temp__5753__auto___39143;
var fexpr__39023_39145 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__39023_39145.cljs$core$IFn$_invoke$arity$1 ? fexpr__39023_39145.cljs$core$IFn$_invoke$arity$1(new_db_39144) : fexpr__39023_39145.call(null,new_db_39144));
} else {
}

var seq__39024 = cljs.core.seq(effects_without_db);
var chunk__39025 = null;
var count__39026 = (0);
var i__39027 = (0);
while(true){
if((i__39027 < count__39026)){
var vec__39036 = chunk__39025.cljs$core$IIndexed$_nth$arity$2(null,i__39027);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39036,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39036,(1),null);
var temp__5751__auto___39147 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39147)){
var effect_fn_39149 = temp__5751__auto___39147;
(effect_fn_39149.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39149.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39149.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39150 = seq__39024;
var G__39151 = chunk__39025;
var G__39152 = count__39026;
var G__39153 = (i__39027 + (1));
seq__39024 = G__39150;
chunk__39025 = G__39151;
count__39026 = G__39152;
i__39027 = G__39153;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39024);
if(temp__5753__auto__){
var seq__39024__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39024__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39024__$1);
var G__39155 = cljs.core.chunk_rest(seq__39024__$1);
var G__39156 = c__4649__auto__;
var G__39157 = cljs.core.count(c__4649__auto__);
var G__39158 = (0);
seq__39024 = G__39155;
chunk__39025 = G__39156;
count__39026 = G__39157;
i__39027 = G__39158;
continue;
} else {
var vec__39042 = cljs.core.first(seq__39024__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39042,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39042,(1),null);
var temp__5751__auto___39159 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39159)){
var effect_fn_39160 = temp__5751__auto___39159;
(effect_fn_39160.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39160.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39160.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__39162 = cljs.core.next(seq__39024__$1);
var G__39163 = null;
var G__39164 = (0);
var G__39165 = (0);
seq__39024 = G__39162;
chunk__39025 = G__39163;
count__39026 = G__39164;
i__39027 = G__39165;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__39058){
var map__39059 = p__39058;
var map__39059__$1 = cljs.core.__destructure_map(map__39059);
var effect = map__39059__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39059__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__39062 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39063 = null;
var count__39064 = (0);
var i__39065 = (0);
while(true){
if((i__39065 < count__39064)){
var effect = chunk__39063.cljs$core$IIndexed$_nth$arity$2(null,i__39065);
re_frame.fx.dispatch_later(effect);


var G__39166 = seq__39062;
var G__39167 = chunk__39063;
var G__39168 = count__39064;
var G__39169 = (i__39065 + (1));
seq__39062 = G__39166;
chunk__39063 = G__39167;
count__39064 = G__39168;
i__39065 = G__39169;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39062);
if(temp__5753__auto__){
var seq__39062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39062__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39062__$1);
var G__39170 = cljs.core.chunk_rest(seq__39062__$1);
var G__39171 = c__4649__auto__;
var G__39172 = cljs.core.count(c__4649__auto__);
var G__39173 = (0);
seq__39062 = G__39170;
chunk__39063 = G__39171;
count__39064 = G__39172;
i__39065 = G__39173;
continue;
} else {
var effect = cljs.core.first(seq__39062__$1);
re_frame.fx.dispatch_later(effect);


var G__39174 = cljs.core.next(seq__39062__$1);
var G__39175 = null;
var G__39176 = (0);
var G__39177 = (0);
seq__39062 = G__39174;
chunk__39063 = G__39175;
count__39064 = G__39176;
i__39065 = G__39177;
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
var seq__39068 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__39069 = null;
var count__39070 = (0);
var i__39071 = (0);
while(true){
if((i__39071 < count__39070)){
var vec__39080 = chunk__39069.cljs$core$IIndexed$_nth$arity$2(null,i__39071);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39080,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39178 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39178)){
var effect_fn_39179 = temp__5751__auto___39178;
(effect_fn_39179.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39179.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39179.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39180 = seq__39068;
var G__39181 = chunk__39069;
var G__39182 = count__39070;
var G__39183 = (i__39071 + (1));
seq__39068 = G__39180;
chunk__39069 = G__39181;
count__39070 = G__39182;
i__39071 = G__39183;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39068);
if(temp__5753__auto__){
var seq__39068__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39068__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39068__$1);
var G__39184 = cljs.core.chunk_rest(seq__39068__$1);
var G__39185 = c__4649__auto__;
var G__39186 = cljs.core.count(c__4649__auto__);
var G__39187 = (0);
seq__39068 = G__39184;
chunk__39069 = G__39185;
count__39070 = G__39186;
i__39071 = G__39187;
continue;
} else {
var vec__39083 = cljs.core.first(seq__39068__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39083,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___39188 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___39188)){
var effect_fn_39189 = temp__5751__auto___39188;
(effect_fn_39189.cljs$core$IFn$_invoke$arity$1 ? effect_fn_39189.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_39189.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__39190 = cljs.core.next(seq__39068__$1);
var G__39191 = null;
var G__39192 = (0);
var G__39193 = (0);
seq__39068 = G__39190;
chunk__39069 = G__39191;
count__39070 = G__39192;
i__39071 = G__39193;
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
var seq__39095 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__39096 = null;
var count__39097 = (0);
var i__39098 = (0);
while(true){
if((i__39098 < count__39097)){
var event = chunk__39096.cljs$core$IIndexed$_nth$arity$2(null,i__39098);
re_frame.router.dispatch(event);


var G__39197 = seq__39095;
var G__39198 = chunk__39096;
var G__39199 = count__39097;
var G__39201 = (i__39098 + (1));
seq__39095 = G__39197;
chunk__39096 = G__39198;
count__39097 = G__39199;
i__39098 = G__39201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39095);
if(temp__5753__auto__){
var seq__39095__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39095__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39095__$1);
var G__39203 = cljs.core.chunk_rest(seq__39095__$1);
var G__39204 = c__4649__auto__;
var G__39205 = cljs.core.count(c__4649__auto__);
var G__39206 = (0);
seq__39095 = G__39203;
chunk__39096 = G__39204;
count__39097 = G__39205;
i__39098 = G__39206;
continue;
} else {
var event = cljs.core.first(seq__39095__$1);
re_frame.router.dispatch(event);


var G__39207 = cljs.core.next(seq__39095__$1);
var G__39208 = null;
var G__39209 = (0);
var G__39210 = (0);
seq__39095 = G__39207;
chunk__39096 = G__39208;
count__39097 = G__39209;
i__39098 = G__39210;
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
var seq__39116 = cljs.core.seq(value);
var chunk__39117 = null;
var count__39118 = (0);
var i__39119 = (0);
while(true){
if((i__39119 < count__39118)){
var event = chunk__39117.cljs$core$IIndexed$_nth$arity$2(null,i__39119);
clear_event(event);


var G__39212 = seq__39116;
var G__39213 = chunk__39117;
var G__39214 = count__39118;
var G__39215 = (i__39119 + (1));
seq__39116 = G__39212;
chunk__39117 = G__39213;
count__39118 = G__39214;
i__39119 = G__39215;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__39116);
if(temp__5753__auto__){
var seq__39116__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__39116__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__39116__$1);
var G__39216 = cljs.core.chunk_rest(seq__39116__$1);
var G__39217 = c__4649__auto__;
var G__39218 = cljs.core.count(c__4649__auto__);
var G__39219 = (0);
seq__39116 = G__39216;
chunk__39117 = G__39217;
count__39118 = G__39218;
i__39119 = G__39219;
continue;
} else {
var event = cljs.core.first(seq__39116__$1);
clear_event(event);


var G__39220 = cljs.core.next(seq__39116__$1);
var G__39221 = null;
var G__39222 = (0);
var G__39223 = (0);
seq__39116 = G__39220;
chunk__39117 = G__39221;
count__39118 = G__39222;
i__39119 = G__39223;
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
