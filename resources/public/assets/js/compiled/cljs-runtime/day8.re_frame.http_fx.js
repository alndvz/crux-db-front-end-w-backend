goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__47603){
var vec__47605 = p__47603;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47605,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47605,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__47611){
var map__47612 = p__47611;
var map__47612__$1 = cljs.core.__destructure_map(map__47612);
var request = map__47612__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47612__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47612__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__47609_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__47609_SHARP_));
}),(function (p1__47610_SHARP_){
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__47610_SHARP_));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.Keyword(null,"on-request","on-request",972531605)], 0));
});
day8.re_frame.http_fx.dispatch_on_request = (function day8$re_frame$http_fx$dispatch_on_request(request,xhrio){
var temp__5751__auto__ = new cljs.core.Keyword(null,"on-request","on-request",972531605).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var on_request = temp__5751__auto__;
return re_frame.core.dispatch(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_request,xhrio));
} else {
return null;
}
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__47619 = cljs.core.seq(seq_request_maps);
var chunk__47620 = null;
var count__47621 = (0);
var i__47622 = (0);
while(true){
if((i__47622 < count__47621)){
var request__$1 = chunk__47620.cljs$core$IIndexed$_nth$arity$2(null,i__47622);
var xhrio_47661 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_47661);


var G__47662 = seq__47619;
var G__47663 = chunk__47620;
var G__47664 = count__47621;
var G__47665 = (i__47622 + (1));
seq__47619 = G__47662;
chunk__47620 = G__47663;
count__47621 = G__47664;
i__47622 = G__47665;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47619);
if(temp__5753__auto__){
var seq__47619__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47619__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47619__$1);
var G__47666 = cljs.core.chunk_rest(seq__47619__$1);
var G__47667 = c__4649__auto__;
var G__47668 = cljs.core.count(c__4649__auto__);
var G__47669 = (0);
seq__47619 = G__47666;
chunk__47620 = G__47667;
count__47621 = G__47668;
i__47622 = G__47669;
continue;
} else {
var request__$1 = cljs.core.first(seq__47619__$1);
var xhrio_47670 = ajax.simple.ajax_request(day8.re_frame.http_fx.request__GT_xhrio_options(request__$1));
day8.re_frame.http_fx.dispatch_on_request(request__$1,xhrio_47670);


var G__47671 = cljs.core.next(seq__47619__$1);
var G__47672 = null;
var G__47673 = (0);
var G__47674 = (0);
seq__47619 = G__47671;
chunk__47620 = G__47672;
count__47621 = G__47673;
i__47622 = G__47674;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=day8.re_frame.http_fx.js.map
