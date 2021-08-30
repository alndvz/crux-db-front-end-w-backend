goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47926,res){
var map__47928 = p__47926;
var map__47928__$1 = cljs.core.__destructure_map(map__47928);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47928__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47928__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47929 = res;
var G__47929__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47929,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47929);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47929__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47929__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47935 = arguments.length;
switch (G__47935) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47938,msg,handlers,timeout_after_ms){
var map__47940 = p__47938;
var map__47940__$1 = cljs.core.__destructure_map(map__47940);
var runtime = map__47940__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47940__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48107 = arguments.length;
var i__4830__auto___48108 = (0);
while(true){
if((i__4830__auto___48108 < len__4829__auto___48107)){
args__4835__auto__.push((arguments[i__4830__auto___48108]));

var G__48109 = (i__4830__auto___48108 + (1));
i__4830__auto___48108 = G__48109;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47949,ev,args){
var map__47950 = p__47949;
var map__47950__$1 = cljs.core.__destructure_map(map__47950);
var runtime = map__47950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47951 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47954 = null;
var count__47955 = (0);
var i__47956 = (0);
while(true){
if((i__47956 < count__47955)){
var ext = chunk__47954.cljs$core$IIndexed$_nth$arity$2(null,i__47956);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48133 = seq__47951;
var G__48134 = chunk__47954;
var G__48135 = count__47955;
var G__48136 = (i__47956 + (1));
seq__47951 = G__48133;
chunk__47954 = G__48134;
count__47955 = G__48135;
i__47956 = G__48136;
continue;
} else {
var G__48139 = seq__47951;
var G__48140 = chunk__47954;
var G__48141 = count__47955;
var G__48142 = (i__47956 + (1));
seq__47951 = G__48139;
chunk__47954 = G__48140;
count__47955 = G__48141;
i__47956 = G__48142;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47951);
if(temp__5753__auto__){
var seq__47951__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47951__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47951__$1);
var G__48143 = cljs.core.chunk_rest(seq__47951__$1);
var G__48144 = c__4649__auto__;
var G__48145 = cljs.core.count(c__4649__auto__);
var G__48146 = (0);
seq__47951 = G__48143;
chunk__47954 = G__48144;
count__47955 = G__48145;
i__47956 = G__48146;
continue;
} else {
var ext = cljs.core.first(seq__47951__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__48147 = cljs.core.next(seq__47951__$1);
var G__48148 = null;
var G__48149 = (0);
var G__48150 = (0);
seq__47951 = G__48147;
chunk__47954 = G__48148;
count__47955 = G__48149;
i__47956 = G__48150;
continue;
} else {
var G__48151 = cljs.core.next(seq__47951__$1);
var G__48152 = null;
var G__48153 = (0);
var G__48154 = (0);
seq__47951 = G__48151;
chunk__47954 = G__48152;
count__47955 = G__48153;
i__47956 = G__48154;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47944){
var G__47945 = cljs.core.first(seq47944);
var seq47944__$1 = cljs.core.next(seq47944);
var G__47946 = cljs.core.first(seq47944__$1);
var seq47944__$2 = cljs.core.next(seq47944__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47945,G__47946,seq47944__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__48022,p__48023){
var map__48024 = p__48022;
var map__48024__$1 = cljs.core.__destructure_map(map__48024);
var runtime = map__48024__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48024__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48025 = p__48023;
var map__48025__$1 = cljs.core.__destructure_map(map__48025);
var msg = map__48025__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__48027 = cljs.core.deref(state_ref);
var map__48027__$1 = cljs.core.__destructure_map(map__48027);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48027__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48027__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__48031){
var map__48032 = p__48031;
var map__48032__$1 = cljs.core.__destructure_map(map__48032);
var runtime = map__48032__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48032__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__48040,msg){
var map__48041 = p__48040;
var map__48041__$1 = cljs.core.__destructure_map(map__48041);
var runtime = map__48041__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48041__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__48047,key,p__48048){
var map__48049 = p__48047;
var map__48049__$1 = cljs.core.__destructure_map(map__48049);
var state = map__48049__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48049__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__48050 = p__48048;
var map__48050__$1 = cljs.core.__destructure_map(map__48050);
var spec = map__48050__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48050__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__48054,key,spec){
var map__48056 = p__48054;
var map__48056__$1 = cljs.core.__destructure_map(map__48056);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48056__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__48058_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__48058_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__48059_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__48059_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__48060_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__48060_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__48061_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__48061_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__48062_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__48062_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__48068,key){
var map__48070 = p__48068;
var map__48070__$1 = cljs.core.__destructure_map(map__48070);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48070__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__48075,msg){
var map__48077 = p__48075;
var map__48077__$1 = cljs.core.__destructure_map(map__48077);
var runtime = map__48077__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48077__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__48080,p__48081){
var map__48083 = p__48080;
var map__48083__$1 = cljs.core.__destructure_map(map__48083);
var runtime = map__48083__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48083__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__48084 = p__48081;
var map__48084__$1 = cljs.core.__destructure_map(map__48084);
var msg = map__48084__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48084__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__48090 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__48092 = null;
var count__48093 = (0);
var i__48094 = (0);
while(true){
if((i__48094 < count__48093)){
var map__48100 = chunk__48092.cljs$core$IIndexed$_nth$arity$2(null,i__48094);
var map__48100__$1 = cljs.core.__destructure_map(map__48100);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48100__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48182 = seq__48090;
var G__48183 = chunk__48092;
var G__48184 = count__48093;
var G__48185 = (i__48094 + (1));
seq__48090 = G__48182;
chunk__48092 = G__48183;
count__48093 = G__48184;
i__48094 = G__48185;
continue;
} else {
var G__48186 = seq__48090;
var G__48187 = chunk__48092;
var G__48188 = count__48093;
var G__48189 = (i__48094 + (1));
seq__48090 = G__48186;
chunk__48092 = G__48187;
count__48093 = G__48188;
i__48094 = G__48189;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48090);
if(temp__5753__auto__){
var seq__48090__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48090__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48090__$1);
var G__48190 = cljs.core.chunk_rest(seq__48090__$1);
var G__48191 = c__4649__auto__;
var G__48192 = cljs.core.count(c__4649__auto__);
var G__48193 = (0);
seq__48090 = G__48190;
chunk__48092 = G__48191;
count__48093 = G__48192;
i__48094 = G__48193;
continue;
} else {
var map__48101 = cljs.core.first(seq__48090__$1);
var map__48101__$1 = cljs.core.__destructure_map(map__48101);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48101__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__48198 = cljs.core.next(seq__48090__$1);
var G__48199 = null;
var G__48200 = (0);
var G__48201 = (0);
seq__48090 = G__48198;
chunk__48092 = G__48199;
count__48093 = G__48200;
i__48094 = G__48201;
continue;
} else {
var G__48202 = cljs.core.next(seq__48090__$1);
var G__48203 = null;
var G__48204 = (0);
var G__48205 = (0);
seq__48090 = G__48202;
chunk__48092 = G__48203;
count__48093 = G__48204;
i__48094 = G__48205;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
