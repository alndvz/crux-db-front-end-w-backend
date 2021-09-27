goog.provide('articles.articles_view.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("articles.articles-view.subs","select-article","articles.articles-view.subs/select-article",-220336140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__30044){
var vec__30045 = p__30044;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(0),null);
var article_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30045,(1),null);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30043_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("article","id","article/id",-98206402).cljs$core$IFn$_invoke$arity$1(p1__30043_SHARP_),article_id);
}),new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db)));
})], 0));

//# sourceMappingURL=articles.articles_view.subs.js.map
