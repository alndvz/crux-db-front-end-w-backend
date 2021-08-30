goog.provide('articles.articles_form.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","initialise-edit","articles.articles-form.events/initialise-edit",-387956181),(function (db,p__35592){
var vec__35593 = p__35592;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(0),null);
var article_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35593,(1),null);
var article = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35591_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((article_id | (0)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35591_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"articles","articles",-454771639),cljs.core.PersistentVector.EMPTY)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"editing-id","editing-id",-544615278),(article_id | (0))),new cljs.core.Keyword(null,"form","form",-1624062471),article);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","initialise-create","articles.articles-form.events/initialise-create",833899806),(function (db,_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"form","form",-1624062471)),new cljs.core.Keyword(null,"editing-id","editing-id",-544615278));
}));
articles.articles_form.events.get_date = (function articles$articles_form$events$get_date(){
var month_names = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dev"], null);
var date = (new Date());
var day = date.getDate();
var month = (function (){var G__35596 = date.getMonth();
return (month_names.cljs$core$IFn$_invoke$arity$1 ? month_names.cljs$core$IFn$_invoke$arity$1(G__35596) : month_names.call(null,G__35596));
})();
var year = date.getFullYear();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(month)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(year)].join('');
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","save-article-tag","articles.articles-form.events/save-article-tag",-491154521),(function (db,_){
var new_tag = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),null);
var current_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.PersistentHashSet.EMPTY);
var G__35597 = db;
var G__35597__$1 = (cljs.core.truth_(new_tag)?cljs.core.assoc_in(G__35597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_tags,new_tag)):G__35597);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35597__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([""], 0));

}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","remove-article-tag","articles.articles-form.events/remove-article-tag",1216389313),(function (db,p__35598){
var vec__35599 = p__35598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(0),null);
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35599,(1),null);
var current_tags = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),cljs.core.disj.cljs$core$IFn$_invoke$arity$2(current_tags,tag));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","save-article","articles.articles-form.events/save-article",1723642485),(function (p__35602,p__35603){
var map__35604 = p__35602;
var map__35604__$1 = cljs.core.__destructure_map(map__35604);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35604__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__35605 = p__35603;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35605,(0),null);
var editing_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35605,(1),null);
var form_data = new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(db);
var article = (cljs.core.truth_(editing_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(form_data,new cljs.core.Keyword(null,"date-created","date-created",603296579),articles.articles_form.events.get_date()):form_data);
var uri = (cljs.core.truth_(editing_id)?"/articles/update":"/articles/create");
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"POST","POST",110456857),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),article,new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","saved-article","articles.articles-form.events/saved-article",-633671347)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"api-fail","api-fail",-540594213)], null)], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("articles.articles-form.events","saves-article","articles.articles-form.events/saves-article",1671319847),(function (db,p__35608){
var vec__35609 = p__35608;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35609,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"success-http-result","success-http-result",1914186549),result);
}));

//# sourceMappingURL=articles.articles_form.events.js.map
