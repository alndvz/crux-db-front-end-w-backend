goog.provide('articles.articles_create.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-create.events","initialise-edit","articles.articles-create.events/initialise-edit",519136691),(function (db,p__36332){
var vec__36333 = p__36332;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36333,(0),null);
var article_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36333,(1),null);
var article = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__36331_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((article_id | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36331_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),cljs.core.PersistentVector.EMPTY)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-id","editing-id",-544615278),(article_id | (0))),new cljs.core.Keyword(null,"form","form",-1624062471),article);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-create.events","initialise-create","articles.articles-create.events/initialise-create",-2019971658),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"form","form",-1624062471));
}));
articles.articles_create.events.get_date = (function articles$articles_create$events$get_date(){
var month_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"], null);
var date = (new Date());
var day = date.getDate();
var month = (function (){var G__36336 = date.getMonth();
return (month_names.cljs$core$IFn$_invoke$arity$1 ? month_names.cljs$core$IFn$_invoke$arity$1(G__36336) : month_names.call(null,G__36336));
})();
var year = date.getFullYear();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-create.events","save-article-tag","articles.articles-create.events/save-article-tag",968159759),(function (db,_){
var new_tag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),null);
var current_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.PersistentHashSet.EMPTY);
var G__36337 = db;
var G__36337__$1 = (cljs.core.truth_(new_tag)?cljs.core.assoc_in(G__36337,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tags,new_tag)):G__36337);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36337__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-create.events","remove-article-tag","articles.articles-create.events/remove-article-tag",2129772857),(function (db,p__36338){
var vec__36339 = p__36338;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36339,(1),null);
var current_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_tags,tag));
}));
articles.articles_create.events.save_new_article = (function articles$articles_create$events$save_new_article(db){
var last_article_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.max_key,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"id","id",-1388402092),(0));
var article = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db),new cljs.core.Keyword(null,"date-created","date-created",603296579),articles.articles_create.events.get_date()),new cljs.core.Keyword(null,"id","id",-1388402092),(last_article_id + (1)));
var current_articles = cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),cljs.core.PersistentVector.EMPTY);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_articles,article)),new cljs.core.Keyword(null,"form","form",-1624062471));
});
articles.articles_create.events.update_article = (function articles$articles_create$events$update_article(db,id){
var article = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db);
var article_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36342_SHARP_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__36342_SHARP_);
}),new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db));
var article_index = article_ids.indexOf(id);
var updated_articles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"articles","articles",-454771639).cljs$core$IFn$_invoke$arity$1(db),article_index,article);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),updated_articles);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-create.events","save-article","articles.articles-create.events/save-article",885887469),(function (db,p__36343){
var vec__36344 = p__36343;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(0),null);
var editing_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36344,(1),null);
var updated_db = (cljs.core.truth_(editing_id)?articles.articles_create.events.update_article(db,editing_id):articles.articles_create.events.save_new_article(db));
return updated_db;
}));

//# sourceMappingURL=articles.articles_create.events.js.map
