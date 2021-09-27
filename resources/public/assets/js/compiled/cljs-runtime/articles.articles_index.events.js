goog.provide('articles.articles_index.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-index.events","load-articles","articles.articles-index.events/load-articles",-1363574022),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/articles/",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-index.events","store-articles","articles.articles-index.events/store-articles",895905272)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-fail","api-fail",-540594213)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-index.events","store-articles","articles.articles-index.events/store-articles",895905272),(function (db,p__48123){
var vec__48124 = p__48123;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48124,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48124,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),result);
}));

//# sourceMappingURL=articles.articles_index.events.js.map
