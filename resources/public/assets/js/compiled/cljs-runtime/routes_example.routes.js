goog.provide('routes_example.routes');
if((typeof routes_example !== 'undefined') && (typeof routes_example.routes !== 'undefined') && (typeof routes_example.routes.panels !== 'undefined')){
} else {
routes_example.routes.panels = (function (){var method_table__4712__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4713__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4714__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4715__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4716__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__56144 = cljs.core.get_global_hierarchy;
return (fexpr__56144.cljs$core$IFn$_invoke$arity$0 ? fexpr__56144.cljs$core$IFn$_invoke$arity$0() : fexpr__56144.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("routes-example.routes","panels"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4716__auto__,method_table__4712__auto__,prefer_table__4713__auto__,method_cache__4714__auto__,cached_hierarchy__4715__auto__));
})();
}
routes_example.routes.panels.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"No panel found for this route."], null);
}));
routes_example.routes.routes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.PersistentArrayMap(null, 3, ["",new cljs.core.Keyword(null,"home","home",-74557309),"about",new cljs.core.Keyword(null,"about","about",1423892543),"articles",new cljs.core.PersistentArrayMap(null, 1, ["",new cljs.core.Keyword(null,"articles-index","articles-index",1630226012)], null)], null)], null));
routes_example.routes.parse = (function routes_example$routes$parse(url){
return bidi.bidi.match_route(cljs.core.deref(routes_example.routes.routes),url);
});
routes_example.routes.url_for = (function routes_example$routes$url_for(var_args){
var args__4835__auto__ = [];
var len__4829__auto___56146 = arguments.length;
var i__4830__auto___56147 = (0);
while(true){
if((i__4830__auto___56147 < len__4829__auto___56146)){
args__4835__auto__.push((arguments[i__4830__auto___56147]));

var G__56148 = (i__4830__auto___56147 + (1));
i__4830__auto___56147 = G__56148;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return routes_example.routes.url_for.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(routes_example.routes.url_for.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(routes_example.routes.routes)], null),args));
}));

(routes_example.routes.url_for.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(routes_example.routes.url_for.cljs$lang$applyTo = (function (seq56145){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56145));
}));

routes_example.routes.dispatch = (function routes_example$routes$dispatch(route){
var panel = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.name(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(route)),"-panel"].join(''));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("routes-example.events","set-route","routes-example.events/set-route",-2034592499),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"route","route",329891309),route,new cljs.core.Keyword(null,"panel","panel",-558637456),panel], null)], null));
});
if((typeof routes_example !== 'undefined') && (typeof routes_example.routes !== 'undefined') && (typeof routes_example.routes.history !== 'undefined')){
} else {
routes_example.routes.history = pushy.core.pushy(routes_example.routes.dispatch,routes_example.routes.parse);
}
routes_example.routes.navigate_BANG_ = (function routes_example$routes$navigate_BANG_(handler){
return routes_example.routes.history.pushy$core$IHistory$set_token_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(routes_example.routes.url_for,handler));
});
routes_example.routes.start_BANG_ = (function routes_example$routes$start_BANG_(){
return routes_example.routes.history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"navigate","navigate",657596805),(function (handler){
return routes_example.routes.navigate_BANG_(handler);
}));

//# sourceMappingURL=routes_example.routes.js.map
