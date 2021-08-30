goog.provide('routes_example.core');
routes_example.core.dev_setup = (function routes_example$core$dev_setup(){
if(routes_example.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
routes_example.core.mount_root = (function routes_example$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes_example.views.main_panel], null),root_el);
});
routes_example.core.init = (function routes_example$core$init(){
routes_example.routes.start_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes-example.events","initialize-db","routes-example.events/initialize-db",-469631328)], null));

routes_example.core.dev_setup();

return routes_example.core.mount_root();
});

//# sourceMappingURL=routes_example.core.js.map
