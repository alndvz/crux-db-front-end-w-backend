goog.provide('day8.re_frame_10x.panels.app_db.events');
day8.re_frame_10x.panels.app_db.events.paths_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"paths","paths",-1807389588)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-paths")], null);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","create-path","day8.re-frame-10x.panels.app-db.events/create-path",-383624398),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(paths,Date.now(),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"diff?","diff?",117225601),false,new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-str","path-str",259306316),"",new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226),true], null));
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path","day8.re-frame-10x.panels.app-db.events/update-path",-928809458),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36422){
var vec__36424 = p__36422;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(0),null);
var path_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36424,(1),null);
var path = day8.re_frame_10x.tools.reader.edn.read_string_maybe(path_str);
var paths__$1 = cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),path_str);
if((((((!((path == null)))) && (cljs.core.sequential_QMARK_(path)))) || (clojure.string.blank_QMARK_(path_str)))){
return cljs.core.assoc_in(cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path","path",-188191168)], null),path),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
} else {
return cljs.core.assoc_in(paths__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),false);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","update-path-blur","day8.re-frame-10x.panels.app-db.events/update-path-blur",1529838565),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36433){
var vec__36434 = p__36433;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36434,(0),null);
var map__36437 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(paths,path_id);
var map__36437__$1 = cljs.core.__destructure_map(map__36437);
var valid_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36437__$1,new cljs.core.Keyword(null,"path","path",-188191168));
if(cljs.core.truth_(valid_path_QMARK_)){
return paths;
} else {
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"path-str","path-str",259306316)], null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path], 0))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"valid-path?","valid-path?",-244388226)], null),true);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-path-visibility","day8.re-frame-10x.panels.app-db.events/set-path-visibility",1839643949),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36439){
var vec__36440 = p__36439;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(0),null);
var open_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36440,(1),null);
return cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-diff-visibility","day8.re-frame-10x.panels.app-db.events/set-diff-visibility",-1750368278),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36443){
var vec__36450 = p__36443;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36450,(0),null);
var diff_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36450,(1),null);
var open_QMARK_ = (cljs.core.truth_(diff_QMARK_)?true:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)));
return cljs.core.assoc_in(cljs.core.assoc_in(paths,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"diff?","diff?",117225601)], null),diff_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","remove-path","day8.re-frame-10x.panels.app-db.events/remove-path",-333596006),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (paths,p__36453){
var vec__36455 = p__36453;
var path_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36455,(0),null);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(paths,path_id);
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","paths","day8.re-frame-10x.panels.app-db.events/paths",-421005801),day8.re_frame_10x.panels.app_db.events.paths_interceptors,(function (_,p__36458){
var vec__36459 = p__36458;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36459,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-search-string","day8.re-frame-10x.panels.app-db.events/set-search-string",25437329),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"search-string","search-string",68818394)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v], null),(function (_,p__36465){
var vec__36466 = p__36465;
var search_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36466,(0),null);
return search_string;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","set-json-ml-paths","day8.re-frame-10x.panels.app-db.events/set-json-ml-paths",389660155),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (_,p__36475){
var vec__36477 = p__36475;
var paths = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36477,(0),null);
return paths;
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","toggle-expansion","day8.re-frame-10x.panels.app-db.events/toggle-expansion",-1806345875),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261)], null)], 0)),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.trim_v,day8.re_frame_10x.fx.local_storage.save.cljs$core$IFn$_invoke$arity$1("app-db-json-ml-expansions")], null),(function (paths,p__36481){
var vec__36482 = p__36481;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36482,(0),null);
if(cljs.core.contains_QMARK_(paths,path)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(paths,path);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths,path);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("day8.re-frame-10x.panels.app-db.events","reagent-id","day8.re-frame-10x.panels.app-db.events/reagent-id",-337600458),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-db","app-db",865606302),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415)], null)], 0))], null),(function (_,___$1){
return re_frame.interop.reagent_id(re_frame.db.app_db);
}));

//# sourceMappingURL=day8.re_frame_10x.panels.app_db.events.js.map
