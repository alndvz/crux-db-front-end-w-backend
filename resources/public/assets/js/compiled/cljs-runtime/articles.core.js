goog.provide('articles.core');
articles.core.dev_setup = (function articles$core$dev_setup(){
if(articles.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
articles.core.mount_root = (function articles$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.views.main_panel], null),root_el);
});
articles.core.init = (function articles$core$init(){
articles.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.events","initialize-db","articles.events/initialize-db",-353952958)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-index.events","load-articles","articles.articles-index.events/load-articles",-1363574022)], null));

articles.core.dev_setup();

return articles.core.mount_root();
});

//# sourceMappingURL=articles.core.js.map
