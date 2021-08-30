goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__40235 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40236 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40236);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__40239 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__40240 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__40240);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40239);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__40235);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__40248 = arguments.length;
switch (G__40248) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__40252 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40252,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__40258_40294 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__40259_40295 = null;
var count__40260_40296 = (0);
var i__40261_40297 = (0);
while(true){
if((i__40261_40297 < count__40260_40296)){
var vec__40276_40299 = chunk__40259_40295.cljs$core$IIndexed$_nth$arity$2(null,i__40261_40297);
var container_40300 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40276_40299,(0),null);
var comp_40301 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40276_40299,(1),null);
reagent.dom.re_render_component(comp_40301,container_40300);


var G__40305 = seq__40258_40294;
var G__40306 = chunk__40259_40295;
var G__40307 = count__40260_40296;
var G__40308 = (i__40261_40297 + (1));
seq__40258_40294 = G__40305;
chunk__40259_40295 = G__40306;
count__40260_40296 = G__40307;
i__40261_40297 = G__40308;
continue;
} else {
var temp__5753__auto___40309 = cljs.core.seq(seq__40258_40294);
if(temp__5753__auto___40309){
var seq__40258_40310__$1 = temp__5753__auto___40309;
if(cljs.core.chunked_seq_QMARK_(seq__40258_40310__$1)){
var c__4649__auto___40311 = cljs.core.chunk_first(seq__40258_40310__$1);
var G__40312 = cljs.core.chunk_rest(seq__40258_40310__$1);
var G__40313 = c__4649__auto___40311;
var G__40314 = cljs.core.count(c__4649__auto___40311);
var G__40315 = (0);
seq__40258_40294 = G__40312;
chunk__40259_40295 = G__40313;
count__40260_40296 = G__40314;
i__40261_40297 = G__40315;
continue;
} else {
var vec__40280_40317 = cljs.core.first(seq__40258_40310__$1);
var container_40318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40317,(0),null);
var comp_40319 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40280_40317,(1),null);
reagent.dom.re_render_component(comp_40319,container_40318);


var G__40320 = cljs.core.next(seq__40258_40310__$1);
var G__40321 = null;
var G__40322 = (0);
var G__40323 = (0);
seq__40258_40294 = G__40320;
chunk__40259_40295 = G__40321;
count__40260_40296 = G__40322;
i__40261_40297 = G__40323;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
