goog.provide('routes_example.articles_index.views');
routes_example.articles_index.views.article_card = (function routes_example$articles_index$views$article_card(p__56149){
var map__56150 = p__56149;
var map__56150__$1 = cljs.core.__destructure_map(map__56150);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56150__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),title], null);
});
routes_example.articles_index.views.articles_index_panel = (function routes_example$articles_index$views$articles_index_panel(){
var articles = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes-example.articles-index.subs","articles","routes-example.articles-index.subs/articles",-1118959567)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (article){
return routes_example.articles_index.views.article_card(article);
}),articles)], null);
});
routes_example.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"articles-index-panel","articles-index-panel",-1605551137),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes_example.articles_index.views.articles_index_panel], null);
}));

//# sourceMappingURL=routes_example.articles_index.views.js.map
