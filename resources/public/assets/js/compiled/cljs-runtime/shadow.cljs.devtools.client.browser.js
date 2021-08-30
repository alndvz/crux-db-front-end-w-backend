goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___51544 = arguments.length;
var i__4830__auto___51545 = (0);
while(true){
if((i__4830__auto___51545 < len__4829__auto___51544)){
args__4835__auto__.push((arguments[i__4830__auto___51545]));

var G__51546 = (i__4830__auto___51545 + (1));
i__4830__auto___51545 = G__51546;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51286){
var G__51287 = cljs.core.first(seq51286);
var seq51286__$1 = cljs.core.next(seq51286);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51287,seq51286__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51296 = cljs.core.seq(sources);
var chunk__51297 = null;
var count__51298 = (0);
var i__51299 = (0);
while(true){
if((i__51299 < count__51298)){
var map__51311 = chunk__51297.cljs$core$IIndexed$_nth$arity$2(null,i__51299);
var map__51311__$1 = cljs.core.__destructure_map(map__51311);
var src = map__51311__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51311__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51312){var e_51547 = e51312;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51547);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51547.message)].join('')));
}

var G__51548 = seq__51296;
var G__51549 = chunk__51297;
var G__51550 = count__51298;
var G__51551 = (i__51299 + (1));
seq__51296 = G__51548;
chunk__51297 = G__51549;
count__51298 = G__51550;
i__51299 = G__51551;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51296);
if(temp__5753__auto__){
var seq__51296__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51296__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51296__$1);
var G__51552 = cljs.core.chunk_rest(seq__51296__$1);
var G__51553 = c__4649__auto__;
var G__51554 = cljs.core.count(c__4649__auto__);
var G__51555 = (0);
seq__51296 = G__51552;
chunk__51297 = G__51553;
count__51298 = G__51554;
i__51299 = G__51555;
continue;
} else {
var map__51315 = cljs.core.first(seq__51296__$1);
var map__51315__$1 = cljs.core.__destructure_map(map__51315);
var src = map__51315__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51315__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e51317){var e_51556 = e51317;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_51556);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_51556.message)].join('')));
}

var G__51557 = cljs.core.next(seq__51296__$1);
var G__51558 = null;
var G__51559 = (0);
var G__51560 = (0);
seq__51296 = G__51557;
chunk__51297 = G__51558;
count__51298 = G__51559;
i__51299 = G__51560;
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
var seq__51325 = cljs.core.seq(js_requires);
var chunk__51326 = null;
var count__51327 = (0);
var i__51328 = (0);
while(true){
if((i__51328 < count__51327)){
var js_ns = chunk__51326.cljs$core$IIndexed$_nth$arity$2(null,i__51328);
var require_str_51561 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51561);


var G__51562 = seq__51325;
var G__51563 = chunk__51326;
var G__51564 = count__51327;
var G__51565 = (i__51328 + (1));
seq__51325 = G__51562;
chunk__51326 = G__51563;
count__51327 = G__51564;
i__51328 = G__51565;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51325);
if(temp__5753__auto__){
var seq__51325__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51325__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51325__$1);
var G__51566 = cljs.core.chunk_rest(seq__51325__$1);
var G__51567 = c__4649__auto__;
var G__51568 = cljs.core.count(c__4649__auto__);
var G__51569 = (0);
seq__51325 = G__51566;
chunk__51326 = G__51567;
count__51327 = G__51568;
i__51328 = G__51569;
continue;
} else {
var js_ns = cljs.core.first(seq__51325__$1);
var require_str_51570 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_51570);


var G__51571 = cljs.core.next(seq__51325__$1);
var G__51572 = null;
var G__51573 = (0);
var G__51574 = (0);
seq__51325 = G__51571;
chunk__51326 = G__51572;
count__51327 = G__51573;
i__51328 = G__51574;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__51330){
var map__51331 = p__51330;
var map__51331__$1 = cljs.core.__destructure_map(map__51331);
var msg = map__51331__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51331__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51332(s__51333){
return (new cljs.core.LazySeq(null,(function (){
var s__51333__$1 = s__51333;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51333__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__51338 = cljs.core.first(xs__6308__auto__);
var map__51338__$1 = cljs.core.__destructure_map(map__51338);
var src = map__51338__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51338__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51338__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__51333__$1,map__51338,map__51338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51331,map__51331__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51332_$_iter__51334(s__51335){
return (new cljs.core.LazySeq(null,((function (s__51333__$1,map__51338,map__51338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51331,map__51331__$1,msg,info,reload_info){
return (function (){
var s__51335__$1 = s__51335;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__51335__$1);
if(temp__5753__auto____$1){
var s__51335__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__51335__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__51335__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__51337 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__51336 = (0);
while(true){
if((i__51336 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__51336);
cljs.core.chunk_append(b__51337,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__51576 = (i__51336 + (1));
i__51336 = G__51576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51337),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51332_$_iter__51334(cljs.core.chunk_rest(s__51335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51337),null);
}
} else {
var warning = cljs.core.first(s__51335__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51332_$_iter__51334(cljs.core.rest(s__51335__$2)));
}
} else {
return null;
}
break;
}
});})(s__51333__$1,map__51338,map__51338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51331,map__51331__$1,msg,info,reload_info))
,null,null));
});})(s__51333__$1,map__51338,map__51338__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__51331,map__51331__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__51332(cljs.core.rest(s__51333__$1)));
} else {
var G__51578 = cljs.core.rest(s__51333__$1);
s__51333__$1 = G__51578;
continue;
}
} else {
var G__51579 = cljs.core.rest(s__51333__$1);
s__51333__$1 = G__51579;
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
var seq__51339_51580 = cljs.core.seq(warnings);
var chunk__51340_51581 = null;
var count__51341_51582 = (0);
var i__51342_51583 = (0);
while(true){
if((i__51342_51583 < count__51341_51582)){
var map__51345_51585 = chunk__51340_51581.cljs$core$IIndexed$_nth$arity$2(null,i__51342_51583);
var map__51345_51586__$1 = cljs.core.__destructure_map(map__51345_51585);
var w_51587 = map__51345_51586__$1;
var msg_51588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51345_51586__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51345_51586__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51345_51586__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51591 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51345_51586__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51591)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51589),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51590),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51588__$1)].join(''));


var G__51595 = seq__51339_51580;
var G__51596 = chunk__51340_51581;
var G__51597 = count__51341_51582;
var G__51598 = (i__51342_51583 + (1));
seq__51339_51580 = G__51595;
chunk__51340_51581 = G__51596;
count__51341_51582 = G__51597;
i__51342_51583 = G__51598;
continue;
} else {
var temp__5753__auto___51599 = cljs.core.seq(seq__51339_51580);
if(temp__5753__auto___51599){
var seq__51339_51600__$1 = temp__5753__auto___51599;
if(cljs.core.chunked_seq_QMARK_(seq__51339_51600__$1)){
var c__4649__auto___51601 = cljs.core.chunk_first(seq__51339_51600__$1);
var G__51602 = cljs.core.chunk_rest(seq__51339_51600__$1);
var G__51603 = c__4649__auto___51601;
var G__51604 = cljs.core.count(c__4649__auto___51601);
var G__51605 = (0);
seq__51339_51580 = G__51602;
chunk__51340_51581 = G__51603;
count__51341_51582 = G__51604;
i__51342_51583 = G__51605;
continue;
} else {
var map__51350_51606 = cljs.core.first(seq__51339_51600__$1);
var map__51350_51607__$1 = cljs.core.__destructure_map(map__51350_51606);
var w_51608 = map__51350_51607__$1;
var msg_51609__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350_51607__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_51610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350_51607__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_51611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350_51607__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_51612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51350_51607__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_51612)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_51610),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_51611),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_51609__$1)].join(''));


var G__51616 = cljs.core.next(seq__51339_51600__$1);
var G__51617 = null;
var G__51618 = (0);
var G__51619 = (0);
seq__51339_51580 = G__51616;
chunk__51340_51581 = G__51617;
count__51341_51582 = G__51618;
i__51342_51583 = G__51619;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__51329_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__51329_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__51363){
var map__51365 = p__51363;
var map__51365__$1 = cljs.core.__destructure_map(map__51365);
var msg = map__51365__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51365__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__51369 = cljs.core.seq(updates);
var chunk__51371 = null;
var count__51372 = (0);
var i__51373 = (0);
while(true){
if((i__51373 < count__51372)){
var path = chunk__51371.cljs$core$IIndexed$_nth$arity$2(null,i__51373);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51451_51621 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51455_51622 = null;
var count__51456_51623 = (0);
var i__51457_51624 = (0);
while(true){
if((i__51457_51624 < count__51456_51623)){
var node_51625 = chunk__51455_51622.cljs$core$IIndexed$_nth$arity$2(null,i__51457_51624);
if(cljs.core.not(node_51625.shadow$old)){
var path_match_51626 = shadow.cljs.devtools.client.browser.match_paths(node_51625.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51626)){
var new_link_51627 = (function (){var G__51464 = node_51625.cloneNode(true);
G__51464.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51626),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51464;
})();
(node_51625.shadow$old = true);

(new_link_51627.onload = ((function (seq__51451_51621,chunk__51455_51622,count__51456_51623,i__51457_51624,seq__51369,chunk__51371,count__51372,i__51373,new_link_51627,path_match_51626,node_51625,path,map__51365,map__51365__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51625);
});})(seq__51451_51621,chunk__51455_51622,count__51456_51623,i__51457_51624,seq__51369,chunk__51371,count__51372,i__51373,new_link_51627,path_match_51626,node_51625,path,map__51365,map__51365__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51626], 0));

goog.dom.insertSiblingAfter(new_link_51627,node_51625);


var G__51628 = seq__51451_51621;
var G__51629 = chunk__51455_51622;
var G__51630 = count__51456_51623;
var G__51631 = (i__51457_51624 + (1));
seq__51451_51621 = G__51628;
chunk__51455_51622 = G__51629;
count__51456_51623 = G__51630;
i__51457_51624 = G__51631;
continue;
} else {
var G__51632 = seq__51451_51621;
var G__51633 = chunk__51455_51622;
var G__51634 = count__51456_51623;
var G__51635 = (i__51457_51624 + (1));
seq__51451_51621 = G__51632;
chunk__51455_51622 = G__51633;
count__51456_51623 = G__51634;
i__51457_51624 = G__51635;
continue;
}
} else {
var G__51636 = seq__51451_51621;
var G__51637 = chunk__51455_51622;
var G__51638 = count__51456_51623;
var G__51639 = (i__51457_51624 + (1));
seq__51451_51621 = G__51636;
chunk__51455_51622 = G__51637;
count__51456_51623 = G__51638;
i__51457_51624 = G__51639;
continue;
}
} else {
var temp__5753__auto___51640 = cljs.core.seq(seq__51451_51621);
if(temp__5753__auto___51640){
var seq__51451_51641__$1 = temp__5753__auto___51640;
if(cljs.core.chunked_seq_QMARK_(seq__51451_51641__$1)){
var c__4649__auto___51642 = cljs.core.chunk_first(seq__51451_51641__$1);
var G__51643 = cljs.core.chunk_rest(seq__51451_51641__$1);
var G__51644 = c__4649__auto___51642;
var G__51645 = cljs.core.count(c__4649__auto___51642);
var G__51646 = (0);
seq__51451_51621 = G__51643;
chunk__51455_51622 = G__51644;
count__51456_51623 = G__51645;
i__51457_51624 = G__51646;
continue;
} else {
var node_51647 = cljs.core.first(seq__51451_51641__$1);
if(cljs.core.not(node_51647.shadow$old)){
var path_match_51648 = shadow.cljs.devtools.client.browser.match_paths(node_51647.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51648)){
var new_link_51649 = (function (){var G__51469 = node_51647.cloneNode(true);
G__51469.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51648),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51469;
})();
(node_51647.shadow$old = true);

(new_link_51649.onload = ((function (seq__51451_51621,chunk__51455_51622,count__51456_51623,i__51457_51624,seq__51369,chunk__51371,count__51372,i__51373,new_link_51649,path_match_51648,node_51647,seq__51451_51641__$1,temp__5753__auto___51640,path,map__51365,map__51365__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51647);
});})(seq__51451_51621,chunk__51455_51622,count__51456_51623,i__51457_51624,seq__51369,chunk__51371,count__51372,i__51373,new_link_51649,path_match_51648,node_51647,seq__51451_51641__$1,temp__5753__auto___51640,path,map__51365,map__51365__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51648], 0));

goog.dom.insertSiblingAfter(new_link_51649,node_51647);


var G__51653 = cljs.core.next(seq__51451_51641__$1);
var G__51654 = null;
var G__51655 = (0);
var G__51656 = (0);
seq__51451_51621 = G__51653;
chunk__51455_51622 = G__51654;
count__51456_51623 = G__51655;
i__51457_51624 = G__51656;
continue;
} else {
var G__51657 = cljs.core.next(seq__51451_51641__$1);
var G__51658 = null;
var G__51659 = (0);
var G__51660 = (0);
seq__51451_51621 = G__51657;
chunk__51455_51622 = G__51658;
count__51456_51623 = G__51659;
i__51457_51624 = G__51660;
continue;
}
} else {
var G__51661 = cljs.core.next(seq__51451_51641__$1);
var G__51662 = null;
var G__51663 = (0);
var G__51664 = (0);
seq__51451_51621 = G__51661;
chunk__51455_51622 = G__51662;
count__51456_51623 = G__51663;
i__51457_51624 = G__51664;
continue;
}
}
} else {
}
}
break;
}


var G__51665 = seq__51369;
var G__51666 = chunk__51371;
var G__51667 = count__51372;
var G__51668 = (i__51373 + (1));
seq__51369 = G__51665;
chunk__51371 = G__51666;
count__51372 = G__51667;
i__51373 = G__51668;
continue;
} else {
var G__51669 = seq__51369;
var G__51670 = chunk__51371;
var G__51671 = count__51372;
var G__51672 = (i__51373 + (1));
seq__51369 = G__51669;
chunk__51371 = G__51670;
count__51372 = G__51671;
i__51373 = G__51672;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51369);
if(temp__5753__auto__){
var seq__51369__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51369__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__51369__$1);
var G__51673 = cljs.core.chunk_rest(seq__51369__$1);
var G__51674 = c__4649__auto__;
var G__51675 = cljs.core.count(c__4649__auto__);
var G__51676 = (0);
seq__51369 = G__51673;
chunk__51371 = G__51674;
count__51372 = G__51675;
i__51373 = G__51676;
continue;
} else {
var path = cljs.core.first(seq__51369__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__51470_51677 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__51474_51678 = null;
var count__51475_51679 = (0);
var i__51476_51680 = (0);
while(true){
if((i__51476_51680 < count__51475_51679)){
var node_51681 = chunk__51474_51678.cljs$core$IIndexed$_nth$arity$2(null,i__51476_51680);
if(cljs.core.not(node_51681.shadow$old)){
var path_match_51682 = shadow.cljs.devtools.client.browser.match_paths(node_51681.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51682)){
var new_link_51683 = (function (){var G__51487 = node_51681.cloneNode(true);
G__51487.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51682),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51487;
})();
(node_51681.shadow$old = true);

(new_link_51683.onload = ((function (seq__51470_51677,chunk__51474_51678,count__51475_51679,i__51476_51680,seq__51369,chunk__51371,count__51372,i__51373,new_link_51683,path_match_51682,node_51681,path,seq__51369__$1,temp__5753__auto__,map__51365,map__51365__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51681);
});})(seq__51470_51677,chunk__51474_51678,count__51475_51679,i__51476_51680,seq__51369,chunk__51371,count__51372,i__51373,new_link_51683,path_match_51682,node_51681,path,seq__51369__$1,temp__5753__auto__,map__51365,map__51365__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51682], 0));

goog.dom.insertSiblingAfter(new_link_51683,node_51681);


var G__51688 = seq__51470_51677;
var G__51689 = chunk__51474_51678;
var G__51690 = count__51475_51679;
var G__51691 = (i__51476_51680 + (1));
seq__51470_51677 = G__51688;
chunk__51474_51678 = G__51689;
count__51475_51679 = G__51690;
i__51476_51680 = G__51691;
continue;
} else {
var G__51692 = seq__51470_51677;
var G__51693 = chunk__51474_51678;
var G__51694 = count__51475_51679;
var G__51695 = (i__51476_51680 + (1));
seq__51470_51677 = G__51692;
chunk__51474_51678 = G__51693;
count__51475_51679 = G__51694;
i__51476_51680 = G__51695;
continue;
}
} else {
var G__51699 = seq__51470_51677;
var G__51700 = chunk__51474_51678;
var G__51701 = count__51475_51679;
var G__51702 = (i__51476_51680 + (1));
seq__51470_51677 = G__51699;
chunk__51474_51678 = G__51700;
count__51475_51679 = G__51701;
i__51476_51680 = G__51702;
continue;
}
} else {
var temp__5753__auto___51703__$1 = cljs.core.seq(seq__51470_51677);
if(temp__5753__auto___51703__$1){
var seq__51470_51704__$1 = temp__5753__auto___51703__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51470_51704__$1)){
var c__4649__auto___51705 = cljs.core.chunk_first(seq__51470_51704__$1);
var G__51706 = cljs.core.chunk_rest(seq__51470_51704__$1);
var G__51707 = c__4649__auto___51705;
var G__51708 = cljs.core.count(c__4649__auto___51705);
var G__51709 = (0);
seq__51470_51677 = G__51706;
chunk__51474_51678 = G__51707;
count__51475_51679 = G__51708;
i__51476_51680 = G__51709;
continue;
} else {
var node_51710 = cljs.core.first(seq__51470_51704__$1);
if(cljs.core.not(node_51710.shadow$old)){
var path_match_51711 = shadow.cljs.devtools.client.browser.match_paths(node_51710.getAttribute("href"),path);
if(cljs.core.truth_(path_match_51711)){
var new_link_51712 = (function (){var G__51488 = node_51710.cloneNode(true);
G__51488.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_51711),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__51488;
})();
(node_51710.shadow$old = true);

(new_link_51712.onload = ((function (seq__51470_51677,chunk__51474_51678,count__51475_51679,i__51476_51680,seq__51369,chunk__51371,count__51372,i__51373,new_link_51712,path_match_51711,node_51710,seq__51470_51704__$1,temp__5753__auto___51703__$1,path,seq__51369__$1,temp__5753__auto__,map__51365,map__51365__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_51710);
});})(seq__51470_51677,chunk__51474_51678,count__51475_51679,i__51476_51680,seq__51369,chunk__51371,count__51372,i__51373,new_link_51712,path_match_51711,node_51710,seq__51470_51704__$1,temp__5753__auto___51703__$1,path,seq__51369__$1,temp__5753__auto__,map__51365,map__51365__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_51711], 0));

goog.dom.insertSiblingAfter(new_link_51712,node_51710);


var G__51713 = cljs.core.next(seq__51470_51704__$1);
var G__51714 = null;
var G__51715 = (0);
var G__51716 = (0);
seq__51470_51677 = G__51713;
chunk__51474_51678 = G__51714;
count__51475_51679 = G__51715;
i__51476_51680 = G__51716;
continue;
} else {
var G__51717 = cljs.core.next(seq__51470_51704__$1);
var G__51718 = null;
var G__51719 = (0);
var G__51720 = (0);
seq__51470_51677 = G__51717;
chunk__51474_51678 = G__51718;
count__51475_51679 = G__51719;
i__51476_51680 = G__51720;
continue;
}
} else {
var G__51721 = cljs.core.next(seq__51470_51704__$1);
var G__51722 = null;
var G__51723 = (0);
var G__51724 = (0);
seq__51470_51677 = G__51721;
chunk__51474_51678 = G__51722;
count__51475_51679 = G__51723;
i__51476_51680 = G__51724;
continue;
}
}
} else {
}
}
break;
}


var G__51728 = cljs.core.next(seq__51369__$1);
var G__51729 = null;
var G__51730 = (0);
var G__51731 = (0);
seq__51369 = G__51728;
chunk__51371 = G__51729;
count__51372 = G__51730;
i__51373 = G__51731;
continue;
} else {
var G__51732 = cljs.core.next(seq__51369__$1);
var G__51733 = null;
var G__51734 = (0);
var G__51735 = (0);
seq__51369 = G__51732;
chunk__51371 = G__51733;
count__51372 = G__51734;
i__51373 = G__51735;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__51489){
var map__51490 = p__51489;
var map__51490__$1 = cljs.core.__destructure_map(map__51490);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51490__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__51501){
var map__51502 = p__51501;
var map__51502__$1 = cljs.core.__destructure_map(map__51502);
var _ = map__51502__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51502__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__51503,done,error){
var map__51504 = p__51503;
var map__51504__$1 = cljs.core.__destructure_map(map__51504);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51504__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__51506,done,error){
var map__51507 = p__51506;
var map__51507__$1 = cljs.core.__destructure_map(map__51507);
var msg = map__51507__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51507__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51507__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51507__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__51508){
var map__51509 = p__51508;
var map__51509__$1 = cljs.core.__destructure_map(map__51509);
var src = map__51509__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51509__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__51510 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__51510) : done.call(null,G__51510));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__51515){
var map__51516 = p__51515;
var map__51516__$1 = cljs.core.__destructure_map(map__51516);
var msg__$1 = map__51516__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51516__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e51517){var ex = e51517;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__51519){
var map__51520 = p__51519;
var map__51520__$1 = cljs.core.__destructure_map(map__51520);
var env = map__51520__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51520__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__51521){
var map__51523 = p__51521;
var map__51523__$1 = cljs.core.__destructure_map(map__51523);
var msg = map__51523__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51523__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__51533){
var map__51534 = p__51533;
var map__51534__$1 = cljs.core.__destructure_map(map__51534);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51534__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51534__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__51538){
var map__51539 = p__51538;
var map__51539__$1 = cljs.core.__destructure_map(map__51539);
var svc = map__51539__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51539__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
