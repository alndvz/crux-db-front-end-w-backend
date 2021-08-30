goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__48918,p__48919){
var map__48922 = p__48918;
var map__48922__$1 = cljs.core.__destructure_map(map__48922);
var svc = map__48922__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48922__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48922__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48922__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48923 = p__48919;
var map__48923__$1 = cljs.core.__destructure_map(map__48923);
var msg = map__48923__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48923__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48923__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__48944,p__48945){
var map__48946 = p__48944;
var map__48946__$1 = cljs.core.__destructure_map(map__48946);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48946__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__48947 = p__48945;
var map__48947__$1 = cljs.core.__destructure_map(map__48947);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48947__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__48955,p__48956){
var map__48959 = p__48955;
var map__48959__$1 = cljs.core.__destructure_map(map__48959);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48959__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48959__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__48960 = p__48956;
var map__48960__$1 = cljs.core.__destructure_map(map__48960);
var msg = map__48960__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48960__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__48966,tid){
var map__48968 = p__48966;
var map__48968__$1 = cljs.core.__destructure_map(map__48968);
var svc = map__48968__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48968__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__48986 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__48987 = null;
var count__48988 = (0);
var i__48989 = (0);
while(true){
if((i__48989 < count__48988)){
var vec__49002 = chunk__48987.cljs$core$IIndexed$_nth$arity$2(null,i__48989);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49002,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49002,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49027 = seq__48986;
var G__49028 = chunk__48987;
var G__49029 = count__48988;
var G__49030 = (i__48989 + (1));
seq__48986 = G__49027;
chunk__48987 = G__49028;
count__48988 = G__49029;
i__48989 = G__49030;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48986);
if(temp__5753__auto__){
var seq__48986__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48986__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48986__$1);
var G__49031 = cljs.core.chunk_rest(seq__48986__$1);
var G__49032 = c__4649__auto__;
var G__49033 = cljs.core.count(c__4649__auto__);
var G__49034 = (0);
seq__48986 = G__49031;
chunk__48987 = G__49032;
count__48988 = G__49033;
i__48989 = G__49034;
continue;
} else {
var vec__49007 = cljs.core.first(seq__48986__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49007,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49007,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__49035 = cljs.core.next(seq__48986__$1);
var G__49036 = null;
var G__49037 = (0);
var G__49038 = (0);
seq__48986 = G__49035;
chunk__48987 = G__49036;
count__48988 = G__49037;
i__48989 = G__49038;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__48969_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__48969_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__48972_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__48972_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__48973_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__48973_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__48974_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__48974_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__49022){
var map__49023 = p__49022;
var map__49023__$1 = cljs.core.__destructure_map(map__49023);
var svc = map__49023__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49023__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49023__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
