goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___48222 = arguments.length;
var i__4830__auto___48223 = (0);
while(true){
if((i__4830__auto___48223 < len__4829__auto___48222)){
args__4835__auto__.push((arguments[i__4830__auto___48223]));

var G__48224 = (i__4830__auto___48223 + (1));
i__4830__auto___48223 = G__48224;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47780){
var G__47781 = cljs.core.first(seq47780);
var seq47780__$1 = cljs.core.next(seq47780);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47781,seq47780__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47806 = cljs.core.seq(sources);
var chunk__47808 = null;
var count__47809 = (0);
var i__47810 = (0);
while(true){
if((i__47810 < count__47809)){
var map__47826 = chunk__47808.cljs$core$IIndexed$_nth$arity$2(null,i__47810);
var map__47826__$1 = cljs.core.__destructure_map(map__47826);
var src = map__47826__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47826__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47826__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47826__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47826__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47827){var e_48235 = e47827;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48235);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48235.message)].join('')));
}

var G__48239 = seq__47806;
var G__48240 = chunk__47808;
var G__48241 = count__47809;
var G__48242 = (i__47810 + (1));
seq__47806 = G__48239;
chunk__47808 = G__48240;
count__47809 = G__48241;
i__47810 = G__48242;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47806);
if(temp__5753__auto__){
var seq__47806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47806__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47806__$1);
var G__48243 = cljs.core.chunk_rest(seq__47806__$1);
var G__48244 = c__4649__auto__;
var G__48245 = cljs.core.count(c__4649__auto__);
var G__48246 = (0);
seq__47806 = G__48243;
chunk__47808 = G__48244;
count__47809 = G__48245;
i__47810 = G__48246;
continue;
} else {
var map__47834 = cljs.core.first(seq__47806__$1);
var map__47834__$1 = cljs.core.__destructure_map(map__47834);
var src = map__47834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47839){var e_48250 = e47839;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_48250);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_48250.message)].join('')));
}

var G__48251 = cljs.core.next(seq__47806__$1);
var G__48252 = null;
var G__48253 = (0);
var G__48254 = (0);
seq__47806 = G__48251;
chunk__47808 = G__48252;
count__47809 = G__48253;
i__47810 = G__48254;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47846 = cljs.core.seq(js_requires);
var chunk__47847 = null;
var count__47848 = (0);
var i__47849 = (0);
while(true){
if((i__47849 < count__47848)){
var js_ns = chunk__47847.cljs$core$IIndexed$_nth$arity$2(null,i__47849);
var require_str_48258 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48258);


var G__48259 = seq__47846;
var G__48260 = chunk__47847;
var G__48261 = count__47848;
var G__48262 = (i__47849 + (1));
seq__47846 = G__48259;
chunk__47847 = G__48260;
count__47848 = G__48261;
i__47849 = G__48262;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47846);
if(temp__5753__auto__){
var seq__47846__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47846__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47846__$1);
var G__48263 = cljs.core.chunk_rest(seq__47846__$1);
var G__48264 = c__4649__auto__;
var G__48265 = cljs.core.count(c__4649__auto__);
var G__48266 = (0);
seq__47846 = G__48263;
chunk__47847 = G__48264;
count__47848 = G__48265;
i__47849 = G__48266;
continue;
} else {
var js_ns = cljs.core.first(seq__47846__$1);
var require_str_48267 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_48267);


var G__48268 = cljs.core.next(seq__47846__$1);
var G__48269 = null;
var G__48270 = (0);
var G__48271 = (0);
seq__47846 = G__48268;
chunk__47847 = G__48269;
count__47848 = G__48270;
i__47849 = G__48271;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47866){
var map__47867 = p__47866;
var map__47867__$1 = cljs.core.__destructure_map(map__47867);
var msg = map__47867__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47867__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47867__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47868(s__47869){
return (new cljs.core.LazySeq(null,(function (){
var s__47869__$1 = s__47869;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__47869__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__47875 = cljs.core.first(xs__6308__auto__);
var map__47875__$1 = cljs.core.__destructure_map(map__47875);
var src = map__47875__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47875__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__47869__$1,map__47875,map__47875__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47867,map__47867__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47868_$_iter__47870(s__47871){
return (new cljs.core.LazySeq(null,((function (s__47869__$1,map__47875,map__47875__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47867,map__47867__$1,msg,info,reload_info){
return (function (){
var s__47871__$1 = s__47871;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__47871__$1);
if(temp__5753__auto____$1){
var s__47871__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47871__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__47871__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__47873 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__47872 = (0);
while(true){
if((i__47872 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__47872);
cljs.core.chunk_append(b__47873,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__48277 = (i__47872 + (1));
i__47872 = G__48277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47873),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47868_$_iter__47870(cljs.core.chunk_rest(s__47871__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47873),null);
}
} else {
var warning = cljs.core.first(s__47871__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47868_$_iter__47870(cljs.core.rest(s__47871__$2)));
}
} else {
return null;
}
break;
}
});})(s__47869__$1,map__47875,map__47875__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47867,map__47867__$1,msg,info,reload_info))
,null,null));
});})(s__47869__$1,map__47875,map__47875__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__47867,map__47867__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47868(cljs.core.rest(s__47869__$1)));
} else {
var G__48279 = cljs.core.rest(s__47869__$1);
s__47869__$1 = G__48279;
continue;
}
} else {
var G__48280 = cljs.core.rest(s__47869__$1);
s__47869__$1 = G__48280;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47883_48281 = cljs.core.seq(warnings);
var chunk__47884_48282 = null;
var count__47885_48283 = (0);
var i__47886_48284 = (0);
while(true){
if((i__47886_48284 < count__47885_48283)){
var map__47898_48285 = chunk__47884_48282.cljs$core$IIndexed$_nth$arity$2(null,i__47886_48284);
var map__47898_48286__$1 = cljs.core.__destructure_map(map__47898_48285);
var w_48287 = map__47898_48286__$1;
var msg_48288__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47898_48286__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47898_48286__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47898_48286__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48291 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47898_48286__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48291)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48289),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48290),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48288__$1)].join(''));


var G__48294 = seq__47883_48281;
var G__48295 = chunk__47884_48282;
var G__48296 = count__47885_48283;
var G__48297 = (i__47886_48284 + (1));
seq__47883_48281 = G__48294;
chunk__47884_48282 = G__48295;
count__47885_48283 = G__48296;
i__47886_48284 = G__48297;
continue;
} else {
var temp__5753__auto___48298 = cljs.core.seq(seq__47883_48281);
if(temp__5753__auto___48298){
var seq__47883_48299__$1 = temp__5753__auto___48298;
if(cljs.core.chunked_seq_QMARK_(seq__47883_48299__$1)){
var c__4649__auto___48300 = cljs.core.chunk_first(seq__47883_48299__$1);
var G__48303 = cljs.core.chunk_rest(seq__47883_48299__$1);
var G__48304 = c__4649__auto___48300;
var G__48305 = cljs.core.count(c__4649__auto___48300);
var G__48306 = (0);
seq__47883_48281 = G__48303;
chunk__47884_48282 = G__48304;
count__47885_48283 = G__48305;
i__47886_48284 = G__48306;
continue;
} else {
var map__47904_48308 = cljs.core.first(seq__47883_48299__$1);
var map__47904_48309__$1 = cljs.core.__destructure_map(map__47904_48308);
var w_48310 = map__47904_48309__$1;
var msg_48311__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904_48309__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_48312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904_48309__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_48313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904_48309__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_48314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47904_48309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_48314)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_48312),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_48313),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_48311__$1)].join(''));


var G__48317 = cljs.core.next(seq__47883_48299__$1);
var G__48318 = null;
var G__48319 = (0);
var G__48320 = (0);
seq__47883_48281 = G__48317;
chunk__47884_48282 = G__48318;
count__47885_48283 = G__48319;
i__47886_48284 = G__48320;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47862_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47862_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47935){
var map__47936 = p__47935;
var map__47936__$1 = cljs.core.__destructure_map(map__47936);
var msg = map__47936__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47936__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__47939 = cljs.core.seq(updates);
var chunk__47941 = null;
var count__47942 = (0);
var i__47943 = (0);
while(true){
if((i__47943 < count__47942)){
var path = chunk__47941.cljs$core$IIndexed$_nth$arity$2(null,i__47943);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48055_48326 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48059_48327 = null;
var count__48060_48328 = (0);
var i__48061_48329 = (0);
while(true){
if((i__48061_48329 < count__48060_48328)){
var node_48331 = chunk__48059_48327.cljs$core$IIndexed$_nth$arity$2(null,i__48061_48329);
if(cljs.core.not(node_48331.shadow$old)){
var path_match_48338 = shadow.cljs.devtools.client.browser.match_paths(node_48331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48338)){
var new_link_48339 = (function (){var G__48076 = node_48331.cloneNode(true);
G__48076.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48338),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48076;
})();
(node_48331.shadow$old = true);

(new_link_48339.onload = ((function (seq__48055_48326,chunk__48059_48327,count__48060_48328,i__48061_48329,seq__47939,chunk__47941,count__47942,i__47943,new_link_48339,path_match_48338,node_48331,path,map__47936,map__47936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48331);
});})(seq__48055_48326,chunk__48059_48327,count__48060_48328,i__48061_48329,seq__47939,chunk__47941,count__47942,i__47943,new_link_48339,path_match_48338,node_48331,path,map__47936,map__47936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48338], 0));

goog.dom.insertSiblingAfter(new_link_48339,node_48331);


var G__48340 = seq__48055_48326;
var G__48341 = chunk__48059_48327;
var G__48342 = count__48060_48328;
var G__48343 = (i__48061_48329 + (1));
seq__48055_48326 = G__48340;
chunk__48059_48327 = G__48341;
count__48060_48328 = G__48342;
i__48061_48329 = G__48343;
continue;
} else {
var G__48344 = seq__48055_48326;
var G__48345 = chunk__48059_48327;
var G__48346 = count__48060_48328;
var G__48347 = (i__48061_48329 + (1));
seq__48055_48326 = G__48344;
chunk__48059_48327 = G__48345;
count__48060_48328 = G__48346;
i__48061_48329 = G__48347;
continue;
}
} else {
var G__48348 = seq__48055_48326;
var G__48349 = chunk__48059_48327;
var G__48350 = count__48060_48328;
var G__48351 = (i__48061_48329 + (1));
seq__48055_48326 = G__48348;
chunk__48059_48327 = G__48349;
count__48060_48328 = G__48350;
i__48061_48329 = G__48351;
continue;
}
} else {
var temp__5753__auto___48352 = cljs.core.seq(seq__48055_48326);
if(temp__5753__auto___48352){
var seq__48055_48353__$1 = temp__5753__auto___48352;
if(cljs.core.chunked_seq_QMARK_(seq__48055_48353__$1)){
var c__4649__auto___48354 = cljs.core.chunk_first(seq__48055_48353__$1);
var G__48355 = cljs.core.chunk_rest(seq__48055_48353__$1);
var G__48356 = c__4649__auto___48354;
var G__48357 = cljs.core.count(c__4649__auto___48354);
var G__48358 = (0);
seq__48055_48326 = G__48355;
chunk__48059_48327 = G__48356;
count__48060_48328 = G__48357;
i__48061_48329 = G__48358;
continue;
} else {
var node_48359 = cljs.core.first(seq__48055_48353__$1);
if(cljs.core.not(node_48359.shadow$old)){
var path_match_48360 = shadow.cljs.devtools.client.browser.match_paths(node_48359.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48360)){
var new_link_48361 = (function (){var G__48082 = node_48359.cloneNode(true);
G__48082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48360),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48082;
})();
(node_48359.shadow$old = true);

(new_link_48361.onload = ((function (seq__48055_48326,chunk__48059_48327,count__48060_48328,i__48061_48329,seq__47939,chunk__47941,count__47942,i__47943,new_link_48361,path_match_48360,node_48359,seq__48055_48353__$1,temp__5753__auto___48352,path,map__47936,map__47936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48359);
});})(seq__48055_48326,chunk__48059_48327,count__48060_48328,i__48061_48329,seq__47939,chunk__47941,count__47942,i__47943,new_link_48361,path_match_48360,node_48359,seq__48055_48353__$1,temp__5753__auto___48352,path,map__47936,map__47936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48360], 0));

goog.dom.insertSiblingAfter(new_link_48361,node_48359);


var G__48362 = cljs.core.next(seq__48055_48353__$1);
var G__48363 = null;
var G__48364 = (0);
var G__48365 = (0);
seq__48055_48326 = G__48362;
chunk__48059_48327 = G__48363;
count__48060_48328 = G__48364;
i__48061_48329 = G__48365;
continue;
} else {
var G__48366 = cljs.core.next(seq__48055_48353__$1);
var G__48367 = null;
var G__48368 = (0);
var G__48369 = (0);
seq__48055_48326 = G__48366;
chunk__48059_48327 = G__48367;
count__48060_48328 = G__48368;
i__48061_48329 = G__48369;
continue;
}
} else {
var G__48370 = cljs.core.next(seq__48055_48353__$1);
var G__48371 = null;
var G__48372 = (0);
var G__48373 = (0);
seq__48055_48326 = G__48370;
chunk__48059_48327 = G__48371;
count__48060_48328 = G__48372;
i__48061_48329 = G__48373;
continue;
}
}
} else {
}
}
break;
}


var G__48374 = seq__47939;
var G__48375 = chunk__47941;
var G__48376 = count__47942;
var G__48377 = (i__47943 + (1));
seq__47939 = G__48374;
chunk__47941 = G__48375;
count__47942 = G__48376;
i__47943 = G__48377;
continue;
} else {
var G__48378 = seq__47939;
var G__48379 = chunk__47941;
var G__48380 = count__47942;
var G__48381 = (i__47943 + (1));
seq__47939 = G__48378;
chunk__47941 = G__48379;
count__47942 = G__48380;
i__47943 = G__48381;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47939);
if(temp__5753__auto__){
var seq__47939__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47939__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__47939__$1);
var G__48382 = cljs.core.chunk_rest(seq__47939__$1);
var G__48383 = c__4649__auto__;
var G__48384 = cljs.core.count(c__4649__auto__);
var G__48385 = (0);
seq__47939 = G__48382;
chunk__47941 = G__48383;
count__47942 = G__48384;
i__47943 = G__48385;
continue;
} else {
var path = cljs.core.first(seq__47939__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__48087_48386 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__48091_48387 = null;
var count__48092_48388 = (0);
var i__48093_48389 = (0);
while(true){
if((i__48093_48389 < count__48092_48388)){
var node_48392 = chunk__48091_48387.cljs$core$IIndexed$_nth$arity$2(null,i__48093_48389);
if(cljs.core.not(node_48392.shadow$old)){
var path_match_48396 = shadow.cljs.devtools.client.browser.match_paths(node_48392.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48396)){
var new_link_48398 = (function (){var G__48111 = node_48392.cloneNode(true);
G__48111.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48396),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48111;
})();
(node_48392.shadow$old = true);

(new_link_48398.onload = ((function (seq__48087_48386,chunk__48091_48387,count__48092_48388,i__48093_48389,seq__47939,chunk__47941,count__47942,i__47943,new_link_48398,path_match_48396,node_48392,path,seq__47939__$1,temp__5753__auto__,map__47936,map__47936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48392);
});})(seq__48087_48386,chunk__48091_48387,count__48092_48388,i__48093_48389,seq__47939,chunk__47941,count__47942,i__47943,new_link_48398,path_match_48396,node_48392,path,seq__47939__$1,temp__5753__auto__,map__47936,map__47936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48396], 0));

goog.dom.insertSiblingAfter(new_link_48398,node_48392);


var G__48405 = seq__48087_48386;
var G__48406 = chunk__48091_48387;
var G__48407 = count__48092_48388;
var G__48408 = (i__48093_48389 + (1));
seq__48087_48386 = G__48405;
chunk__48091_48387 = G__48406;
count__48092_48388 = G__48407;
i__48093_48389 = G__48408;
continue;
} else {
var G__48409 = seq__48087_48386;
var G__48410 = chunk__48091_48387;
var G__48411 = count__48092_48388;
var G__48412 = (i__48093_48389 + (1));
seq__48087_48386 = G__48409;
chunk__48091_48387 = G__48410;
count__48092_48388 = G__48411;
i__48093_48389 = G__48412;
continue;
}
} else {
var G__48413 = seq__48087_48386;
var G__48414 = chunk__48091_48387;
var G__48415 = count__48092_48388;
var G__48416 = (i__48093_48389 + (1));
seq__48087_48386 = G__48413;
chunk__48091_48387 = G__48414;
count__48092_48388 = G__48415;
i__48093_48389 = G__48416;
continue;
}
} else {
var temp__5753__auto___48417__$1 = cljs.core.seq(seq__48087_48386);
if(temp__5753__auto___48417__$1){
var seq__48087_48418__$1 = temp__5753__auto___48417__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48087_48418__$1)){
var c__4649__auto___48419 = cljs.core.chunk_first(seq__48087_48418__$1);
var G__48420 = cljs.core.chunk_rest(seq__48087_48418__$1);
var G__48421 = c__4649__auto___48419;
var G__48422 = cljs.core.count(c__4649__auto___48419);
var G__48423 = (0);
seq__48087_48386 = G__48420;
chunk__48091_48387 = G__48421;
count__48092_48388 = G__48422;
i__48093_48389 = G__48423;
continue;
} else {
var node_48424 = cljs.core.first(seq__48087_48418__$1);
if(cljs.core.not(node_48424.shadow$old)){
var path_match_48426 = shadow.cljs.devtools.client.browser.match_paths(node_48424.getAttribute("href"),path);
if(cljs.core.truth_(path_match_48426)){
var new_link_48427 = (function (){var G__48114 = node_48424.cloneNode(true);
G__48114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_48426),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__48114;
})();
(node_48424.shadow$old = true);

(new_link_48427.onload = ((function (seq__48087_48386,chunk__48091_48387,count__48092_48388,i__48093_48389,seq__47939,chunk__47941,count__47942,i__47943,new_link_48427,path_match_48426,node_48424,seq__48087_48418__$1,temp__5753__auto___48417__$1,path,seq__47939__$1,temp__5753__auto__,map__47936,map__47936__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_48424);
});})(seq__48087_48386,chunk__48091_48387,count__48092_48388,i__48093_48389,seq__47939,chunk__47941,count__47942,i__47943,new_link_48427,path_match_48426,node_48424,seq__48087_48418__$1,temp__5753__auto___48417__$1,path,seq__47939__$1,temp__5753__auto__,map__47936,map__47936__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_48426], 0));

goog.dom.insertSiblingAfter(new_link_48427,node_48424);


var G__48428 = cljs.core.next(seq__48087_48418__$1);
var G__48429 = null;
var G__48430 = (0);
var G__48431 = (0);
seq__48087_48386 = G__48428;
chunk__48091_48387 = G__48429;
count__48092_48388 = G__48430;
i__48093_48389 = G__48431;
continue;
} else {
var G__48432 = cljs.core.next(seq__48087_48418__$1);
var G__48433 = null;
var G__48434 = (0);
var G__48435 = (0);
seq__48087_48386 = G__48432;
chunk__48091_48387 = G__48433;
count__48092_48388 = G__48434;
i__48093_48389 = G__48435;
continue;
}
} else {
var G__48436 = cljs.core.next(seq__48087_48418__$1);
var G__48437 = null;
var G__48438 = (0);
var G__48439 = (0);
seq__48087_48386 = G__48436;
chunk__48091_48387 = G__48437;
count__48092_48388 = G__48438;
i__48093_48389 = G__48439;
continue;
}
}
} else {
}
}
break;
}


var G__48440 = cljs.core.next(seq__47939__$1);
var G__48441 = null;
var G__48442 = (0);
var G__48443 = (0);
seq__47939 = G__48440;
chunk__47941 = G__48441;
count__47942 = G__48442;
i__47943 = G__48443;
continue;
} else {
var G__48444 = cljs.core.next(seq__47939__$1);
var G__48445 = null;
var G__48446 = (0);
var G__48447 = (0);
seq__47939 = G__48444;
chunk__47941 = G__48445;
count__47942 = G__48446;
i__47943 = G__48447;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__48115){
var map__48116 = p__48115;
var map__48116__$1 = cljs.core.__destructure_map(map__48116);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48116__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__48137){
var map__48138 = p__48137;
var map__48138__$1 = cljs.core.__destructure_map(map__48138);
var _ = map__48138__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48138__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__48143,done,error){
var map__48144 = p__48143;
var map__48144__$1 = cljs.core.__destructure_map(map__48144);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48144__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__48157,done,error){
var map__48158 = p__48157;
var map__48158__$1 = cljs.core.__destructure_map(map__48158);
var msg = map__48158__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48158__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48158__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48158__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__48164){
var map__48166 = p__48164;
var map__48166__$1 = cljs.core.__destructure_map(map__48166);
var src = map__48166__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48166__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__48171 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__48171) : done.call(null,G__48171));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__48175){
var map__48176 = p__48175;
var map__48176__$1 = cljs.core.__destructure_map(map__48176);
var msg__$1 = map__48176__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48176__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e48177){var ex = e48177;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__48183){
var map__48184 = p__48183;
var map__48184__$1 = cljs.core.__destructure_map(map__48184);
var env = map__48184__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48184__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__48197){
var map__48198 = p__48197;
var map__48198__$1 = cljs.core.__destructure_map(map__48198);
var msg = map__48198__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48198__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__48206){
var map__48207 = p__48206;
var map__48207__$1 = cljs.core.__destructure_map(map__48207);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48207__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__48209){
var map__48210 = p__48209;
var map__48210__$1 = cljs.core.__destructure_map(map__48210);
var svc = map__48210__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48210__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
