goog.provide('articles.routes');
if((typeof articles !== 'undefined') && (typeof articles.routes !== 'undefined') && (typeof articles.routes.panels !== 'undefined')){
} else {
articles.routes.panels = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__35510 = cljs.core.get_global_hierarchy;
return (fexpr__35510.cljs$core$IFn$_invoke$arity$0 ? fexpr__35510.cljs$core$IFn$_invoke$arity$0() : fexpr__35510.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("articles.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
articles.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
articles.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"articles-index","articles-index",1630226012),"about",new cljs.core.Keyword(null,"about","about",1423892543),"articles",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"articles-index","articles-index",1630226012),"/create",new cljs.core.Keyword(null,"create-article","create-article",1468529795),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"id","id",-1388402092),"/edit"], null),new cljs.core.Keyword(null,"edit-article","edit-article",-827571277),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"id","id",-1388402092),"/view"], null),new cljs.core.Keyword(null,"view-article","view-article",-478744494)])], null)], null));
articles.routes.parse = (function articles$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(articles.routes.routes),url);
});
articles.routes.url_for = (function articles$routes$url_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___35512 = arguments.length;
var i__4830__auto___35513 = (0);
while(true){
if((i__4830__auto___35513 < len__4829__auto___35512)){
args__4835__auto__.push((arguments[i__4830__auto___35513]));

var G__35514 = (i__4830__auto___35513 + (1));
i__4830__auto___35513 = G__35514;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return articles.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(articles.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(articles.routes.routes)], null),args));
}));

(articles.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(articles.routes.url_for.cljs$lang$applyTo = (function (seq35511){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35511));
}));

articles.routes.dispatch = (function articles$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.events","set-route","articles.events/set-route",1911551539),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"panel","panel",-558637456),panel], null)], null));
});
if((typeof articles !== 'undefined') && (typeof articles.routes !== 'undefined') && (typeof articles.routes.history !== 'undefined')){
} else {
articles.routes.history = pushy.core.pushy(articles.routes.dispatch,articles.routes.parse);
}
articles.routes.navigate_BANG_ = (function articles$routes$navigate_BANG_(handler){
return articles.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(articles.routes.url_for,handler));
});
articles.routes.start_BANG_ = (function articles$routes$start_BANG_(){
return articles.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return articles.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=articles.routes.js.map
