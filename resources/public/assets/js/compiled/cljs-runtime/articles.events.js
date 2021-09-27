goog.provide('articles.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.events","initialize-db","articles.events/initialize-db",-353952958),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__29916__auto__ = articles.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29916__auto__;
}catch (e30313){var e = e30313;
throw e;
}}):(function (_,___$1){
return articles.db.default_db;
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.events","navigate","articles.events/navigate",1241347819),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,p__30314){
var vec__30315 = p__30314;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30315,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null)));

var result__29916__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (){var result__29916__auto__ = handler;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29916__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29916__auto__;
}catch (e30318){var e = e30318;
throw e;
}}):(function (_,p__30319){
var vec__30320 = p__30319;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30320,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"navigate","navigate",657596805),handler], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.events","set-active-panel","articles.events/set-active-panel",1969430546),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30323,p__30324){
var map__30325 = p__30323;
var map__30325__$1 = cljs.core.__destructure_map(map__30325);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30325__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30326 = p__30324;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30326,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30326,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null)));

var result__29916__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29916__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29916__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29916__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var result__29916__auto__ = active_panel;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29916__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29916__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29916__auto__;
}catch (e30329){var e = e30329;
throw e;
}}):(function (p__30330,p__30331){
var map__30332 = p__30330;
var map__30332__$1 = cljs.core.__destructure_map(map__30332);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30332__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30333 = p__30331;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(0),null);
var active_panel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30333,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel)], null);
})));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.events","set-route","articles.events/set-route",1911551539),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (p__30336,p__30337){
var map__30338 = p__30336;
var map__30338__$1 = cljs.core.__destructure_map(map__30338);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30338__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30339 = p__30337;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30339,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"route","route",1970422836,null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"route","route",1970422836,null))], null)));

var result__29916__auto__ = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(function (){var result__29916__auto__ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var result__29916__auto__ = db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(4),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29916__auto__;
})(),new cljs.core.Keyword(null,"route","route",329891309),(function (){var result__29916__auto__ = route;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),2,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(6),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"route","route",1970422836,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(2)], null));

return result__29916__auto__;
})());
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(3),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"route","route",1970422836,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__29916__auto__;
})()], null);
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__29916__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Symbol(null,"route","route",1970422836,null))], null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__29916__auto__;
}catch (e30342){var e = e30342;
throw e;
}}):(function (p__30343,p__30344){
var map__30345 = p__30343;
var map__30345__$1 = cljs.core.__destructure_map(map__30345);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30345__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__30346 = p__30344;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30346,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"route","route",329891309),route)], null);
})));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"api-fail","api-fail",-540594213),(function (db,p__30349){
var vec__30350 = p__30349;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30350,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"failure-http-result","failure-http-result",598023256),result);
}));

//# sourceMappingURL=articles.events.js.map
