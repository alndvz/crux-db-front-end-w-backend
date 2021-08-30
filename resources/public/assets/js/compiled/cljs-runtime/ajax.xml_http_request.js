goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__35544 = e.target.readyState;
var fexpr__35543 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__35543.cljs$core$IFn$_invoke$arity$1 ? fexpr__35543.cljs$core$IFn$_invoke$arity$1(G__35544) : fexpr__35543.call(null,G__35544));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__35552,handler){
var map__35553 = p__35552;
var map__35553__$1 = cljs.core.__destructure_map(map__35553);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35553__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35553__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35553__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35553__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35553__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__35553__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35553__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__35551_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__35551_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___35597 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___35597)){
var response_type_35598 = temp__5753__auto___35597;
(this$__$1.responseType = cljs.core.name(response_type_35598));
} else {
}

var seq__35561_35600 = cljs.core.seq(headers);
var chunk__35562_35601 = null;
var count__35563_35602 = (0);
var i__35564_35603 = (0);
while(true){
if((i__35564_35603 < count__35563_35602)){
var vec__35580_35605 = chunk__35562_35601.cljs$core$IIndexed$_nth$arity$2(null,i__35564_35603);
var k_35606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580_35605,(0),null);
var v_35607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35580_35605,(1),null);
this$__$1.setRequestHeader(k_35606,v_35607);


var G__35608 = seq__35561_35600;
var G__35609 = chunk__35562_35601;
var G__35610 = count__35563_35602;
var G__35611 = (i__35564_35603 + (1));
seq__35561_35600 = G__35608;
chunk__35562_35601 = G__35609;
count__35563_35602 = G__35610;
i__35564_35603 = G__35611;
continue;
} else {
var temp__5753__auto___35612 = cljs.core.seq(seq__35561_35600);
if(temp__5753__auto___35612){
var seq__35561_35613__$1 = temp__5753__auto___35612;
if(cljs.core.chunked_seq_QMARK_(seq__35561_35613__$1)){
var c__4649__auto___35614 = cljs.core.chunk_first(seq__35561_35613__$1);
var G__35615 = cljs.core.chunk_rest(seq__35561_35613__$1);
var G__35616 = c__4649__auto___35614;
var G__35617 = cljs.core.count(c__4649__auto___35614);
var G__35618 = (0);
seq__35561_35600 = G__35615;
chunk__35562_35601 = G__35616;
count__35563_35602 = G__35617;
i__35564_35603 = G__35618;
continue;
} else {
var vec__35587_35619 = cljs.core.first(seq__35561_35613__$1);
var k_35620 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_35619,(0),null);
var v_35621 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35587_35619,(1),null);
this$__$1.setRequestHeader(k_35620,v_35621);


var G__35622 = cljs.core.next(seq__35561_35613__$1);
var G__35623 = null;
var G__35624 = (0);
var G__35625 = (0);
seq__35561_35600 = G__35622;
chunk__35562_35601 = G__35623;
count__35563_35602 = G__35624;
i__35564_35603 = G__35625;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
