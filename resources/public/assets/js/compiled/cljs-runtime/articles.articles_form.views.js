goog.provide('articles.articles_form.views');
articles.articles_form.views.image_display = (function articles$articles_form$views$image_display(){
var temp__5753__auto__ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.form.subs","form","articles.form.subs/form",-118228811),new cljs.core.Keyword(null,"image-url","image-url",-1064784064)], null)));
if(cljs.core.truth_(temp__5753__auto__)){
var image_url = temp__5753__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),image_url], null)], null);
} else {
return null;
}
});
articles.articles_form.views.tag_list = (function articles$articles_form$views$tag_list(){
var tags = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.subs","tag-list","articles.articles-form.subs/tag-list",-1450617689)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt-2","div.mt-2",-701876875),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (tag){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.tag.is-success.mr-2","span.tag.is-success.mr-2",1499885204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),tag], null),tag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.delete.is-small","button.delete.is-small",277509490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","remove-article-tag","articles.articles-form.events/remove-article-tag",1216389313),tag], null));
})], null)], null)], null);
}),tags)], null);
});
articles.articles_form.views.add_tag_input = (function articles$articles_form$views$add_tag_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Tags"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-one-third","div.column.is-one-third",-1947595203),articles.form.views.text_input(new cljs.core.Keyword(null,"tag","tag",-1290361223),"")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-narrow.is-align-self-center.is-clickable","div.column.is-narrow.is-align-self-center.is-clickable",-1108324296),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","save-article-tag","articles.articles-form.events/save-article-tag",-491154521)], null));
})], null),"\u2795"], null)], null)], null);
});
articles.articles_form.views.article_form = (function articles$articles_form$views$article_form(){
var edit_id = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.subs","edit-id","articles.articles-form.subs/edit-id",-929089316)], null)));
var form_valid_QMARK_ = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.form.subs","form-is-valid?","articles.form.subs/form-is-valid?",-677217329),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"excerpt","excerpt",219850763),new cljs.core.Keyword(null,"image-url","image-url",-1064784064),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.Keyword(null,"author","author",2111686192),new cljs.core.Keyword(null,"tags","tags",1771418977)], null)], null)));
var title = (cljs.core.truth_(edit_id)?"Update Article":"Create Article");
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title","h1.title",-2139952071),title], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),articles.form.views.text_input(new cljs.core.Keyword(null,"title","title",636505583),"Title"),articles.form.views.text_input(new cljs.core.Keyword(null,"excerpt","excerpt",219850763),"Excerpt"),articles.form.views.text_input(new cljs.core.Keyword(null,"image-url","image-url",-1064784064),"Image url"),articles.articles_form.views.image_display(),articles.form.views.text_area(new cljs.core.Keyword(null,"body","body",-2049205669),"Body"),articles.form.views.select_input(new cljs.core.Keyword(null,"author","author",2111686192),"Author",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["On the code again","Allan","Jeremy Mags"], null)),articles.articles_form.views.add_tag_input(),articles.articles_form.views.tag_list(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button.is-primary.mt-4","button.button.is-primary.mt-4",1813488742),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.not(form_valid_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","save-article","articles.articles-form.events/save-article",1723642485),edit_id], null));
})], null),(cljs.core.truth_(edit_id)?"Update":"Save")], null)], null)], null)], null);
});
articles.articles_form.views.create_article_panel = (function articles$articles_form$views$create_article_panel(){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","initialise-create","articles.articles-form.events/initialise-create",833899806)], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_form.views.article_form], null);
});
articles.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"create-article-panel","create-article-panel",1232229028),(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_form.views.create_article_panel], null);
}));
articles.articles_form.views.edit_article_panel = (function articles$articles_form$views$edit_article_panel(route_params){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.articles-form.events","initialise-edit","articles.articles-form.events/initialise-edit",-387956181),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(route_params)], null));

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_form.views.article_form], null);
});
articles.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edit-article-panel","edit-article-panel",1369016663),(function (_,route_params){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [articles.articles_form.views.edit_article_panel,route_params], null);
}));

//# sourceMappingURL=articles.articles_form.views.js.map
