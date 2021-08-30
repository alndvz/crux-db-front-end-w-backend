goog.provide('articles.articles_view.views');
articles.articles_view.views.article_view = (function articles$articles_view$views$article_view(p__33538){
var map__33539 = p__33538;
var map__33539__$1 = cljs.core.__destructure_map(map__33539);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"title","title",636505583));
var image_url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"image-url","image-url",-1064784064));
var author = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"author","author",2111686192));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var date_created = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33539__$1,new cljs.core.Keyword(null,"date-created","date-created",603296579));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),image_url], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.subtitle.mb-1","h2.subtitle.mb-1",1485386666),["By: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(author)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.subtitle.is-6.mt-0","h3.subtitle.is-6.mt-0",-1246144163),date_created], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
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

//# sourceMappingURL=articles.articles_view.views.js.map
