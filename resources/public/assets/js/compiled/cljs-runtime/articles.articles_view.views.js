goog.provide('articles.articles_view.views');
articles.articles_view.views.article_view = (function articles$articles_view$views$article_view(p__30048){
var map__30049 = p__30048;
var map__30049__$1 = cljs.core.__destructure_map(map__30049);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("article","title","article/title",1368883941));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("article","image-url","article/image-url",-1746813834));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("article","author","article/author",-1976133446));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("article","body","article/body",-1506062491));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("artiicle","tags","artiicle/tags",-623761264));
var date_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30049__$1,new cljs.core.Keyword("article","date-created","article/date-created",-63123787));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),image_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.mb-1","h2.subtitle.mb-1",1485386666),["By1: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.subtitle.is-6.mt-0","h3.subtitle.is-6.mt-0",-1246144163),date_created], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-success.mr-2","span.tag.is-success.mr-2",1499885204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null),tag], null);
}),tags),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"article.content.mt-5","article.content.mt-5",-1437491360),body], null)], null);
});
articles.articles_view.views.view_article_panel = (function articles$articles_view$views$view_article_panel(route_params){
var selected_article = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-view.subs","select-article","articles.articles-view.subs/select-article",-220336140),(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(route_params) | (0))], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_view.views.article_view,selected_article], null);
});
articles.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"view-article-panel","view-article-panel",-773167270),(function (_,route_params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_view.views.view_article_panel,route_params], null);
}));
cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-view.subs","select-article","articles.articles-view.subs/select-article",-220336140),(1)], null)));

//# sourceMappingURL=articles.articles_view.views.js.map
