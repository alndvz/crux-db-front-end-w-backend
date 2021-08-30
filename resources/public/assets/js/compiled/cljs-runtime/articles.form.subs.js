goog.provide('articles.form.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("articles.form.subs","form","articles.form.subs/form",-118228811),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__35483){
var vec__35485 = p__35483;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35485,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),id], null),"");
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("articles.form.subs","form-is-valid?","articles.form.subs/form-is-valid?",-677217329),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__35492){
var vec__35493 = p__35492;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35493,(0),null);
var form_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35493,(1),null);
return cljs.core.every_QMARK_((function (p1__35491_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),p1__35491_SHARP_], null));
}),form_ids);
})], 0));

//# sourceMappingURL=articles.form.subs.js.map
