goog.provide('routes_example.user_view.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("routes-example.user-view.subs","user","routes-example.user-view.subs/user",1371360955),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__51393){
var vec__51394 = p__51393;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394,(0),null);
var user_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51394,(1),null);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (u){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(u),(user_id | (0)));
}),new cljs.core.Keyword(null,"users","users",-713552705).cljs$core$IFn$_invoke$arity$1(db)));
})], 0));

//# sourceMappingURL=routes_example.user_view.subs.js.map
