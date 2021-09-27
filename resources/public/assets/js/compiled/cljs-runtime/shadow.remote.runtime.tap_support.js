goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__45493,p__45494){
var map__45496 = p__45493;
var map__45496__$1 = cljs.core.__destructure_map(map__45496);
var svc = map__45496__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45496__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45497 = p__45494;
var map__45497__$1 = cljs.core.__destructure_map(map__45497);
var msg = map__45497__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45497__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45497__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__45517,p__45518){
var map__45520 = p__45517;
var map__45520__$1 = cljs.core.__destructure_map(map__45520);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45520__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__45521 = p__45518;
var map__45521__$1 = cljs.core.__destructure_map(map__45521);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45521__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__45526,p__45527){
var map__45531 = p__45526;
var map__45531__$1 = cljs.core.__destructure_map(map__45531);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45531__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__45532 = p__45527;
var map__45532__$1 = cljs.core.__destructure_map(map__45532);
var msg = map__45532__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__45532__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__45539,tid){
var map__45540 = p__45539;
var map__45540__$1 = cljs.core.__destructure_map(map__45540);
var svc = map__45540__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45540__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__45558 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__45559 = null;
var count__45560 = (0);
var i__45561 = (0);
while(true){
if((i__45561 < count__45560)){
var vec__45570 = chunk__45559.cljs$core$IIndexed$_nth$arity$2(null,i__45561);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45570,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45570,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45597 = seq__45558;
var G__45598 = chunk__45559;
var G__45599 = count__45560;
var G__45600 = (i__45561 + (1));
seq__45558 = G__45597;
chunk__45559 = G__45598;
count__45560 = G__45599;
i__45561 = G__45600;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45558);
if(temp__5753__auto__){
var seq__45558__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45558__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45558__$1);
var G__45602 = cljs.core.chunk_rest(seq__45558__$1);
var G__45603 = c__4649__auto__;
var G__45604 = cljs.core.count(c__4649__auto__);
var G__45605 = (0);
seq__45558 = G__45602;
chunk__45559 = G__45603;
count__45560 = G__45604;
i__45561 = G__45605;
continue;
} else {
var vec__45573 = cljs.core.first(seq__45558__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45573,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__45607 = cljs.core.next(seq__45558__$1);
var G__45608 = null;
var G__45609 = (0);
var G__45610 = (0);
seq__45558 = G__45607;
chunk__45559 = G__45608;
count__45560 = G__45609;
i__45561 = G__45610;
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
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__45549_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__45549_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__45550_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__45550_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__45552_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__45552_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__45553_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__45553_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__45579){
var map__45580 = p__45579;
var map__45580__$1 = cljs.core.__destructure_map(map__45580);
var svc = map__45580__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45580__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45580__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
