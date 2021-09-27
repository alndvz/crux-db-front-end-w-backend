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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__44594,res){
var map__44595 = p__44594;
var map__44595__$1 = cljs.core.__destructure_map(map__44595);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44595__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44595__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__44596 = res;
var G__44596__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44596,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__44596);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44596__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__44596__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__44623 = arguments.length;
switch (G__44623) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__44624,msg,handlers,timeout_after_ms){
var map__44625 = p__44624;
var map__44625__$1 = cljs.core.__destructure_map(map__44625);
var runtime = map__44625__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44625__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___44857 = arguments.length;
var i__4830__auto___44858 = (0);
while(true){
if((i__4830__auto___44858 < len__4829__auto___44857)){
args__4835__auto__.push((arguments[i__4830__auto___44858]));

var G__44860 = (i__4830__auto___44858 + (1));
i__4830__auto___44858 = G__44860;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__44635,ev,args){
var map__44636 = p__44635;
var map__44636__$1 = cljs.core.__destructure_map(map__44636);
var runtime = map__44636__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44636__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__44637 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44640 = null;
var count__44641 = (0);
var i__44642 = (0);
while(true){
if((i__44642 < count__44641)){
var ext = chunk__44640.cljs$core$IIndexed$_nth$arity$2(null,i__44642);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44865 = seq__44637;
var G__44866 = chunk__44640;
var G__44867 = count__44641;
var G__44868 = (i__44642 + (1));
seq__44637 = G__44865;
chunk__44640 = G__44866;
count__44641 = G__44867;
i__44642 = G__44868;
continue;
} else {
var G__44870 = seq__44637;
var G__44871 = chunk__44640;
var G__44872 = count__44641;
var G__44873 = (i__44642 + (1));
seq__44637 = G__44870;
chunk__44640 = G__44871;
count__44641 = G__44872;
i__44642 = G__44873;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44637);
if(temp__5753__auto__){
var seq__44637__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44637__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44637__$1);
var G__44875 = cljs.core.chunk_rest(seq__44637__$1);
var G__44876 = c__4649__auto__;
var G__44877 = cljs.core.count(c__4649__auto__);
var G__44878 = (0);
seq__44637 = G__44875;
chunk__44640 = G__44876;
count__44641 = G__44877;
i__44642 = G__44878;
continue;
} else {
var ext = cljs.core.first(seq__44637__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__44881 = cljs.core.next(seq__44637__$1);
var G__44882 = null;
var G__44883 = (0);
var G__44884 = (0);
seq__44637 = G__44881;
chunk__44640 = G__44882;
count__44641 = G__44883;
i__44642 = G__44884;
continue;
} else {
var G__44886 = cljs.core.next(seq__44637__$1);
var G__44887 = null;
var G__44888 = (0);
var G__44889 = (0);
seq__44637 = G__44886;
chunk__44640 = G__44887;
count__44641 = G__44888;
i__44642 = G__44889;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq44629){
var G__44630 = cljs.core.first(seq44629);
var seq44629__$1 = cljs.core.next(seq44629);
var G__44631 = cljs.core.first(seq44629__$1);
var seq44629__$2 = cljs.core.next(seq44629__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44630,G__44631,seq44629__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__44648,p__44649){
var map__44650 = p__44648;
var map__44650__$1 = cljs.core.__destructure_map(map__44650);
var runtime = map__44650__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44651 = p__44649;
var map__44651__$1 = cljs.core.__destructure_map(map__44651);
var msg = map__44651__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44651__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__44652 = cljs.core.deref(state_ref);
var map__44652__$1 = cljs.core.__destructure_map(map__44652);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44652__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__44653){
var map__44654 = p__44653;
var map__44654__$1 = cljs.core.__destructure_map(map__44654);
var runtime = map__44654__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44654__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__44655,msg){
var map__44656 = p__44655;
var map__44656__$1 = cljs.core.__destructure_map(map__44656);
var runtime = map__44656__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44656__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__44702,key,p__44703){
var map__44717 = p__44702;
var map__44717__$1 = cljs.core.__destructure_map(map__44717);
var state = map__44717__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44717__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__44718 = p__44703;
var map__44718__$1 = cljs.core.__destructure_map(map__44718);
var spec = map__44718__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44718__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__44723,key,spec){
var map__44729 = p__44723;
var map__44729__$1 = cljs.core.__destructure_map(map__44729);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44729__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__44734_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__44734_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__44736_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__44736_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__44737_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__44737_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__44738_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__44738_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__44739_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__44739_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__44754,key){
var map__44755 = p__44754;
var map__44755__$1 = cljs.core.__destructure_map(map__44755);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44755__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__44762,msg){
var map__44763 = p__44762;
var map__44763__$1 = cljs.core.__destructure_map(map__44763);
var runtime = map__44763__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44763__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__44774,p__44775){
var map__44777 = p__44774;
var map__44777__$1 = cljs.core.__destructure_map(map__44777);
var runtime = map__44777__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44777__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__44778 = p__44775;
var map__44778__$1 = cljs.core.__destructure_map(map__44778);
var msg = map__44778__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44778__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44778__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__44785 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__44787 = null;
var count__44788 = (0);
var i__44789 = (0);
while(true){
if((i__44789 < count__44788)){
var map__44796 = chunk__44787.cljs$core$IIndexed$_nth$arity$2(null,i__44789);
var map__44796__$1 = cljs.core.__destructure_map(map__44796);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44796__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44923 = seq__44785;
var G__44924 = chunk__44787;
var G__44925 = count__44788;
var G__44926 = (i__44789 + (1));
seq__44785 = G__44923;
chunk__44787 = G__44924;
count__44788 = G__44925;
i__44789 = G__44926;
continue;
} else {
var G__44927 = seq__44785;
var G__44928 = chunk__44787;
var G__44929 = count__44788;
var G__44930 = (i__44789 + (1));
seq__44785 = G__44927;
chunk__44787 = G__44928;
count__44788 = G__44929;
i__44789 = G__44930;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__44785);
if(temp__5753__auto__){
var seq__44785__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44785__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__44785__$1);
var G__44932 = cljs.core.chunk_rest(seq__44785__$1);
var G__44933 = c__4649__auto__;
var G__44934 = cljs.core.count(c__4649__auto__);
var G__44935 = (0);
seq__44785 = G__44932;
chunk__44787 = G__44933;
count__44788 = G__44934;
i__44789 = G__44935;
continue;
} else {
var map__44797 = cljs.core.first(seq__44785__$1);
var map__44797__$1 = cljs.core.__destructure_map(map__44797);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44797__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__44940 = cljs.core.next(seq__44785__$1);
var G__44941 = null;
var G__44942 = (0);
var G__44943 = (0);
seq__44785 = G__44940;
chunk__44787 = G__44941;
count__44788 = G__44942;
i__44789 = G__44943;
continue;
} else {
var G__44944 = cljs.core.next(seq__44785__$1);
var G__44945 = null;
var G__44946 = (0);
var G__44947 = (0);
seq__44785 = G__44944;
chunk__44787 = G__44945;
count__44788 = G__44946;
i__44789 = G__44947;
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
