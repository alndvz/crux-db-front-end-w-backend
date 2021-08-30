goog.provide('routes_example.user_view.views');
routes_example.user_view.views.user_view = (function routes_example$user_view$views$user_view(route_params){
var user = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes-example.user-view.subs","user","routes-example.user-view.subs/user",1371360955),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(route_params)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["The selected user is ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(user))].join('')], null);
});
routes_example.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"user-view-panel","user-view-panel",-520837266),(function (_,route_params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [routes_example.user_view.views.user_view,route_params], null);
}));

//# sourceMappingURL=routes_example.user_view.views.js.map
