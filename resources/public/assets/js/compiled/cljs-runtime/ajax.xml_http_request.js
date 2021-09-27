goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47880 = e.target.readyState;
var fexpr__47879 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__47879.cljs$core$IFn$_invoke$arity$1 ? fexpr__47879.cljs$core$IFn$_invoke$arity$1(G__47880) : fexpr__47879.call(null,G__47880));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47902,handler){
var map__47903 = p__47902;
var map__47903__$1 = cljs.core.__destructure_map(map__47903);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47903__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47903__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47903__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47896_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47896_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___47976 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___47976)){
var response_type_47980 = temp__5753__auto___47976;
(this$__$1.responseType = cljs.core.name(response_type_47980));
} else {
}

var seq__47915_47981 = cljs.core.seq(headers);
var chunk__47916_47982 = null;
var count__47917_47983 = (0);
var i__47918_47984 = (0);
while(true){
if((i__47918_47984 < count__47917_47983)){
var vec__47929_47985 = chunk__47916_47982.cljs$core$IIndexed$_nth$arity$2(null,i__47918_47984);
var k_47986 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47929_47985,(0),null);
var v_47987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47929_47985,(1),null);
this$__$1.setRequestHeader(k_47986,v_47987);


var G__47988 = seq__47915_47981;
var G__47989 = chunk__47916_47982;
var G__47990 = count__47917_47983;
var G__47991 = (i__47918_47984 + (1));
seq__47915_47981 = G__47988;
chunk__47916_47982 = G__47989;
count__47917_47983 = G__47990;
i__47918_47984 = G__47991;
continue;
} else {
var temp__5753__auto___47992 = cljs.core.seq(seq__47915_47981);
if(temp__5753__auto___47992){
var seq__47915_47993__$1 = temp__5753__auto___47992;
if(cljs.core.chunked_seq_QMARK_(seq__47915_47993__$1)){
var c__4649__auto___47994 = cljs.core.chunk_first(seq__47915_47993__$1);
var G__47995 = cljs.core.chunk_rest(seq__47915_47993__$1);
var G__47996 = c__4649__auto___47994;
var G__47997 = cljs.core.count(c__4649__auto___47994);
var G__47998 = (0);
seq__47915_47981 = G__47995;
chunk__47916_47982 = G__47996;
count__47917_47983 = G__47997;
i__47918_47984 = G__47998;
continue;
} else {
var vec__47932_48001 = cljs.core.first(seq__47915_47993__$1);
var k_48002 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932_48001,(0),null);
var v_48003 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47932_48001,(1),null);
this$__$1.setRequestHeader(k_48002,v_48003);


var G__48007 = cljs.core.next(seq__47915_47993__$1);
var G__48008 = null;
var G__48009 = (0);
var G__48010 = (0);
seq__47915_47981 = G__48007;
chunk__47916_47982 = G__48008;
count__47917_47983 = G__48009;
i__47918_47984 = G__48010;
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
