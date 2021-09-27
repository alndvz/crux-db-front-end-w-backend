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
var _STAR_always_update_STAR__orig_val__36781 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36782 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36782);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__36783 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__36784 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__36784);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36783);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__36781);
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
var G__36789 = arguments.length;
switch (G__36789) {
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

var vec__36790 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(1),null);
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

var seq__36796_36827 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__36797_36828 = null;
var count__36798_36829 = (0);
var i__36799_36830 = (0);
while(true){
if((i__36799_36830 < count__36798_36829)){
var vec__36807_36831 = chunk__36797_36828.cljs$core$IIndexed$_nth$arity$2(null,i__36799_36830);
var container_36832 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36807_36831,(0),null);
var comp_36833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36807_36831,(1),null);
reagent.dom.re_render_component(comp_36833,container_36832);


var G__36834 = seq__36796_36827;
var G__36835 = chunk__36797_36828;
var G__36836 = count__36798_36829;
var G__36837 = (i__36799_36830 + (1));
seq__36796_36827 = G__36834;
chunk__36797_36828 = G__36835;
count__36798_36829 = G__36836;
i__36799_36830 = G__36837;
continue;
} else {
var temp__5753__auto___36838 = cljs.core.seq(seq__36796_36827);
if(temp__5753__auto___36838){
var seq__36796_36839__$1 = temp__5753__auto___36838;
if(cljs.core.chunked_seq_QMARK_(seq__36796_36839__$1)){
var c__4649__auto___36840 = cljs.core.chunk_first(seq__36796_36839__$1);
var G__36841 = cljs.core.chunk_rest(seq__36796_36839__$1);
var G__36842 = c__4649__auto___36840;
var G__36843 = cljs.core.count(c__4649__auto___36840);
var G__36844 = (0);
seq__36796_36827 = G__36841;
chunk__36797_36828 = G__36842;
count__36798_36829 = G__36843;
i__36799_36830 = G__36844;
continue;
} else {
var vec__36813_36845 = cljs.core.first(seq__36796_36839__$1);
var container_36846 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813_36845,(0),null);
var comp_36847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36813_36845,(1),null);
reagent.dom.re_render_component(comp_36847,container_36846);


var G__36848 = cljs.core.next(seq__36796_36839__$1);
var G__36849 = null;
var G__36850 = (0);
var G__36851 = (0);
seq__36796_36827 = G__36848;
chunk__36797_36828 = G__36849;
count__36798_36829 = G__36850;
i__36799_36830 = G__36851;
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
