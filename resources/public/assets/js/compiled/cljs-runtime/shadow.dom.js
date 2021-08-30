goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49653 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_49653(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49654 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_49654(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48557 = coll;
var G__48558 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48557,G__48558) : shadow.dom.lazy_native_coll_seq.call(null,G__48557,G__48558));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__48590 = arguments.length;
switch (G__48590) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__48596 = arguments.length;
switch (G__48596) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__48606 = arguments.length;
switch (G__48606) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__48623 = arguments.length;
switch (G__48623) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__48644 = arguments.length;
switch (G__48644) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__48661 = arguments.length;
switch (G__48661) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e48676){if((e48676 instanceof Object)){
var e = e48676;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48676;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__48695 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48696 = null;
var count__48697 = (0);
var i__48698 = (0);
while(true){
if((i__48698 < count__48697)){
var el = chunk__48696.cljs$core$IIndexed$_nth$arity$2(null,i__48698);
var handler_49664__$1 = ((function (seq__48695,chunk__48696,count__48697,i__48698,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48695,chunk__48696,count__48697,i__48698,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49664__$1);


var G__49665 = seq__48695;
var G__49666 = chunk__48696;
var G__49667 = count__48697;
var G__49668 = (i__48698 + (1));
seq__48695 = G__49665;
chunk__48696 = G__49666;
count__48697 = G__49667;
i__48698 = G__49668;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48695);
if(temp__5753__auto__){
var seq__48695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48695__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48695__$1);
var G__49669 = cljs.core.chunk_rest(seq__48695__$1);
var G__49670 = c__4649__auto__;
var G__49671 = cljs.core.count(c__4649__auto__);
var G__49672 = (0);
seq__48695 = G__49669;
chunk__48696 = G__49670;
count__48697 = G__49671;
i__48698 = G__49672;
continue;
} else {
var el = cljs.core.first(seq__48695__$1);
var handler_49673__$1 = ((function (seq__48695,chunk__48696,count__48697,i__48698,el,seq__48695__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48695,chunk__48696,count__48697,i__48698,el,seq__48695__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49673__$1);


var G__49674 = cljs.core.next(seq__48695__$1);
var G__49675 = null;
var G__49676 = (0);
var G__49677 = (0);
seq__48695 = G__49674;
chunk__48696 = G__49675;
count__48697 = G__49676;
i__48698 = G__49677;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__48716 = arguments.length;
switch (G__48716) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__48729 = cljs.core.seq(events);
var chunk__48730 = null;
var count__48731 = (0);
var i__48732 = (0);
while(true){
if((i__48732 < count__48731)){
var vec__48753 = chunk__48730.cljs$core$IIndexed$_nth$arity$2(null,i__48732);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48753,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49682 = seq__48729;
var G__49683 = chunk__48730;
var G__49684 = count__48731;
var G__49685 = (i__48732 + (1));
seq__48729 = G__49682;
chunk__48730 = G__49683;
count__48731 = G__49684;
i__48732 = G__49685;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48729);
if(temp__5753__auto__){
var seq__48729__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48729__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48729__$1);
var G__49686 = cljs.core.chunk_rest(seq__48729__$1);
var G__49687 = c__4649__auto__;
var G__49688 = cljs.core.count(c__4649__auto__);
var G__49689 = (0);
seq__48729 = G__49686;
chunk__48730 = G__49687;
count__48731 = G__49688;
i__48732 = G__49689;
continue;
} else {
var vec__48760 = cljs.core.first(seq__48729__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48760,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49690 = cljs.core.next(seq__48729__$1);
var G__49691 = null;
var G__49692 = (0);
var G__49693 = (0);
seq__48729 = G__49690;
chunk__48730 = G__49691;
count__48731 = G__49692;
i__48732 = G__49693;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__48766 = cljs.core.seq(styles);
var chunk__48767 = null;
var count__48768 = (0);
var i__48769 = (0);
while(true){
if((i__48769 < count__48768)){
var vec__48782 = chunk__48767.cljs$core$IIndexed$_nth$arity$2(null,i__48769);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48782,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49696 = seq__48766;
var G__49697 = chunk__48767;
var G__49698 = count__48768;
var G__49699 = (i__48769 + (1));
seq__48766 = G__49696;
chunk__48767 = G__49697;
count__48768 = G__49698;
i__48769 = G__49699;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__48766);
if(temp__5753__auto__){
var seq__48766__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48766__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__48766__$1);
var G__49700 = cljs.core.chunk_rest(seq__48766__$1);
var G__49701 = c__4649__auto__;
var G__49702 = cljs.core.count(c__4649__auto__);
var G__49703 = (0);
seq__48766 = G__49700;
chunk__48767 = G__49701;
count__48768 = G__49702;
i__48769 = G__49703;
continue;
} else {
var vec__48790 = cljs.core.first(seq__48766__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48790,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49705 = cljs.core.next(seq__48766__$1);
var G__49706 = null;
var G__49707 = (0);
var G__49708 = (0);
seq__48766 = G__49705;
chunk__48767 = G__49706;
count__48768 = G__49707;
i__48769 = G__49708;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__48805_49710 = key;
var G__48805_49711__$1 = (((G__48805_49710 instanceof cljs.core.Keyword))?G__48805_49710.fqn:null);
switch (G__48805_49711__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_49715 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_49715,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_49715,"aria-");
}
})())){
el.setAttribute(ks_49715,value);
} else {
(el[ks_49715] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48831){
var map__48832 = p__48831;
var map__48832__$1 = cljs.core.__destructure_map(map__48832);
var props = map__48832__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48832__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48834 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48834,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48834,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48834,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48839 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48839,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48839;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48849 = arguments.length;
switch (G__48849) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48864){
var vec__48865 = p__48864;
var seq__48866 = cljs.core.seq(vec__48865);
var first__48867 = cljs.core.first(seq__48866);
var seq__48866__$1 = cljs.core.next(seq__48866);
var nn = first__48867;
var first__48867__$1 = cljs.core.first(seq__48866__$1);
var seq__48866__$2 = cljs.core.next(seq__48866__$1);
var np = first__48867__$1;
var nc = seq__48866__$2;
var node = vec__48865;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48870 = nn;
var G__48871 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48870,G__48871) : create_fn.call(null,G__48870,G__48871));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48875 = nn;
var G__48876 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48875,G__48876) : create_fn.call(null,G__48875,G__48876));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48881 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48881,(1),null);
var seq__48884_49728 = cljs.core.seq(node_children);
var chunk__48885_49729 = null;
var count__48886_49730 = (0);
var i__48887_49731 = (0);
while(true){
if((i__48887_49731 < count__48886_49730)){
var child_struct_49732 = chunk__48885_49729.cljs$core$IIndexed$_nth$arity$2(null,i__48887_49731);
var children_49733 = shadow.dom.dom_node(child_struct_49732);
if(cljs.core.seq_QMARK_(children_49733)){
var seq__48978_49736 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49733));
var chunk__48980_49737 = null;
var count__48981_49738 = (0);
var i__48982_49739 = (0);
while(true){
if((i__48982_49739 < count__48981_49738)){
var child_49740 = chunk__48980_49737.cljs$core$IIndexed$_nth$arity$2(null,i__48982_49739);
if(cljs.core.truth_(child_49740)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49740);


var G__49741 = seq__48978_49736;
var G__49742 = chunk__48980_49737;
var G__49743 = count__48981_49738;
var G__49744 = (i__48982_49739 + (1));
seq__48978_49736 = G__49741;
chunk__48980_49737 = G__49742;
count__48981_49738 = G__49743;
i__48982_49739 = G__49744;
continue;
} else {
var G__49745 = seq__48978_49736;
var G__49746 = chunk__48980_49737;
var G__49747 = count__48981_49738;
var G__49748 = (i__48982_49739 + (1));
seq__48978_49736 = G__49745;
chunk__48980_49737 = G__49746;
count__48981_49738 = G__49747;
i__48982_49739 = G__49748;
continue;
}
} else {
var temp__5753__auto___49750 = cljs.core.seq(seq__48978_49736);
if(temp__5753__auto___49750){
var seq__48978_49751__$1 = temp__5753__auto___49750;
if(cljs.core.chunked_seq_QMARK_(seq__48978_49751__$1)){
var c__4649__auto___49752 = cljs.core.chunk_first(seq__48978_49751__$1);
var G__49755 = cljs.core.chunk_rest(seq__48978_49751__$1);
var G__49756 = c__4649__auto___49752;
var G__49757 = cljs.core.count(c__4649__auto___49752);
var G__49758 = (0);
seq__48978_49736 = G__49755;
chunk__48980_49737 = G__49756;
count__48981_49738 = G__49757;
i__48982_49739 = G__49758;
continue;
} else {
var child_49759 = cljs.core.first(seq__48978_49751__$1);
if(cljs.core.truth_(child_49759)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49759);


var G__49760 = cljs.core.next(seq__48978_49751__$1);
var G__49761 = null;
var G__49762 = (0);
var G__49763 = (0);
seq__48978_49736 = G__49760;
chunk__48980_49737 = G__49761;
count__48981_49738 = G__49762;
i__48982_49739 = G__49763;
continue;
} else {
var G__49764 = cljs.core.next(seq__48978_49751__$1);
var G__49765 = null;
var G__49766 = (0);
var G__49767 = (0);
seq__48978_49736 = G__49764;
chunk__48980_49737 = G__49765;
count__48981_49738 = G__49766;
i__48982_49739 = G__49767;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49733);
}


var G__49768 = seq__48884_49728;
var G__49769 = chunk__48885_49729;
var G__49770 = count__48886_49730;
var G__49771 = (i__48887_49731 + (1));
seq__48884_49728 = G__49768;
chunk__48885_49729 = G__49769;
count__48886_49730 = G__49770;
i__48887_49731 = G__49771;
continue;
} else {
var temp__5753__auto___49772 = cljs.core.seq(seq__48884_49728);
if(temp__5753__auto___49772){
var seq__48884_49773__$1 = temp__5753__auto___49772;
if(cljs.core.chunked_seq_QMARK_(seq__48884_49773__$1)){
var c__4649__auto___49774 = cljs.core.chunk_first(seq__48884_49773__$1);
var G__49775 = cljs.core.chunk_rest(seq__48884_49773__$1);
var G__49776 = c__4649__auto___49774;
var G__49777 = cljs.core.count(c__4649__auto___49774);
var G__49778 = (0);
seq__48884_49728 = G__49775;
chunk__48885_49729 = G__49776;
count__48886_49730 = G__49777;
i__48887_49731 = G__49778;
continue;
} else {
var child_struct_49779 = cljs.core.first(seq__48884_49773__$1);
var children_49780 = shadow.dom.dom_node(child_struct_49779);
if(cljs.core.seq_QMARK_(children_49780)){
var seq__49011_49781 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49780));
var chunk__49014_49782 = null;
var count__49015_49783 = (0);
var i__49016_49784 = (0);
while(true){
if((i__49016_49784 < count__49015_49783)){
var child_49785 = chunk__49014_49782.cljs$core$IIndexed$_nth$arity$2(null,i__49016_49784);
if(cljs.core.truth_(child_49785)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49785);


var G__49787 = seq__49011_49781;
var G__49788 = chunk__49014_49782;
var G__49789 = count__49015_49783;
var G__49790 = (i__49016_49784 + (1));
seq__49011_49781 = G__49787;
chunk__49014_49782 = G__49788;
count__49015_49783 = G__49789;
i__49016_49784 = G__49790;
continue;
} else {
var G__49791 = seq__49011_49781;
var G__49792 = chunk__49014_49782;
var G__49793 = count__49015_49783;
var G__49794 = (i__49016_49784 + (1));
seq__49011_49781 = G__49791;
chunk__49014_49782 = G__49792;
count__49015_49783 = G__49793;
i__49016_49784 = G__49794;
continue;
}
} else {
var temp__5753__auto___49795__$1 = cljs.core.seq(seq__49011_49781);
if(temp__5753__auto___49795__$1){
var seq__49011_49796__$1 = temp__5753__auto___49795__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49011_49796__$1)){
var c__4649__auto___49797 = cljs.core.chunk_first(seq__49011_49796__$1);
var G__49798 = cljs.core.chunk_rest(seq__49011_49796__$1);
var G__49799 = c__4649__auto___49797;
var G__49800 = cljs.core.count(c__4649__auto___49797);
var G__49801 = (0);
seq__49011_49781 = G__49798;
chunk__49014_49782 = G__49799;
count__49015_49783 = G__49800;
i__49016_49784 = G__49801;
continue;
} else {
var child_49802 = cljs.core.first(seq__49011_49796__$1);
if(cljs.core.truth_(child_49802)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49802);


var G__49803 = cljs.core.next(seq__49011_49796__$1);
var G__49804 = null;
var G__49805 = (0);
var G__49806 = (0);
seq__49011_49781 = G__49803;
chunk__49014_49782 = G__49804;
count__49015_49783 = G__49805;
i__49016_49784 = G__49806;
continue;
} else {
var G__49808 = cljs.core.next(seq__49011_49796__$1);
var G__49809 = null;
var G__49810 = (0);
var G__49811 = (0);
seq__49011_49781 = G__49808;
chunk__49014_49782 = G__49809;
count__49015_49783 = G__49810;
i__49016_49784 = G__49811;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49780);
}


var G__49812 = cljs.core.next(seq__48884_49773__$1);
var G__49813 = null;
var G__49814 = (0);
var G__49815 = (0);
seq__48884_49728 = G__49812;
chunk__48885_49729 = G__49813;
count__48886_49730 = G__49814;
i__48887_49731 = G__49815;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49052 = cljs.core.seq(node);
var chunk__49053 = null;
var count__49054 = (0);
var i__49055 = (0);
while(true){
if((i__49055 < count__49054)){
var n = chunk__49053.cljs$core$IIndexed$_nth$arity$2(null,i__49055);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49817 = seq__49052;
var G__49818 = chunk__49053;
var G__49819 = count__49054;
var G__49820 = (i__49055 + (1));
seq__49052 = G__49817;
chunk__49053 = G__49818;
count__49054 = G__49819;
i__49055 = G__49820;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49052);
if(temp__5753__auto__){
var seq__49052__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49052__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49052__$1);
var G__49821 = cljs.core.chunk_rest(seq__49052__$1);
var G__49822 = c__4649__auto__;
var G__49823 = cljs.core.count(c__4649__auto__);
var G__49824 = (0);
seq__49052 = G__49821;
chunk__49053 = G__49822;
count__49054 = G__49823;
i__49055 = G__49824;
continue;
} else {
var n = cljs.core.first(seq__49052__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49825 = cljs.core.next(seq__49052__$1);
var G__49826 = null;
var G__49827 = (0);
var G__49828 = (0);
seq__49052 = G__49825;
chunk__49053 = G__49826;
count__49054 = G__49827;
i__49055 = G__49828;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49069 = arguments.length;
switch (G__49069) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49081 = arguments.length;
switch (G__49081) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49092 = arguments.length;
switch (G__49092) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___49837 = arguments.length;
var i__4830__auto___49838 = (0);
while(true){
if((i__4830__auto___49838 < len__4829__auto___49837)){
args__4835__auto__.push((arguments[i__4830__auto___49838]));

var G__49839 = (i__4830__auto___49838 + (1));
i__4830__auto___49838 = G__49839;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49113_49840 = cljs.core.seq(nodes);
var chunk__49114_49841 = null;
var count__49115_49842 = (0);
var i__49116_49843 = (0);
while(true){
if((i__49116_49843 < count__49115_49842)){
var node_49844 = chunk__49114_49841.cljs$core$IIndexed$_nth$arity$2(null,i__49116_49843);
fragment.appendChild(shadow.dom._to_dom(node_49844));


var G__49845 = seq__49113_49840;
var G__49846 = chunk__49114_49841;
var G__49847 = count__49115_49842;
var G__49848 = (i__49116_49843 + (1));
seq__49113_49840 = G__49845;
chunk__49114_49841 = G__49846;
count__49115_49842 = G__49847;
i__49116_49843 = G__49848;
continue;
} else {
var temp__5753__auto___49849 = cljs.core.seq(seq__49113_49840);
if(temp__5753__auto___49849){
var seq__49113_49850__$1 = temp__5753__auto___49849;
if(cljs.core.chunked_seq_QMARK_(seq__49113_49850__$1)){
var c__4649__auto___49852 = cljs.core.chunk_first(seq__49113_49850__$1);
var G__49853 = cljs.core.chunk_rest(seq__49113_49850__$1);
var G__49854 = c__4649__auto___49852;
var G__49855 = cljs.core.count(c__4649__auto___49852);
var G__49856 = (0);
seq__49113_49840 = G__49853;
chunk__49114_49841 = G__49854;
count__49115_49842 = G__49855;
i__49116_49843 = G__49856;
continue;
} else {
var node_49857 = cljs.core.first(seq__49113_49850__$1);
fragment.appendChild(shadow.dom._to_dom(node_49857));


var G__49858 = cljs.core.next(seq__49113_49850__$1);
var G__49859 = null;
var G__49860 = (0);
var G__49861 = (0);
seq__49113_49840 = G__49858;
chunk__49114_49841 = G__49859;
count__49115_49842 = G__49860;
i__49116_49843 = G__49861;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49105){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49105));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49137_49863 = cljs.core.seq(scripts);
var chunk__49138_49864 = null;
var count__49139_49865 = (0);
var i__49140_49866 = (0);
while(true){
if((i__49140_49866 < count__49139_49865)){
var vec__49157_49867 = chunk__49138_49864.cljs$core$IIndexed$_nth$arity$2(null,i__49140_49866);
var script_tag_49868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157_49867,(0),null);
var script_body_49869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49157_49867,(1),null);
eval(script_body_49869);


var G__49870 = seq__49137_49863;
var G__49871 = chunk__49138_49864;
var G__49872 = count__49139_49865;
var G__49873 = (i__49140_49866 + (1));
seq__49137_49863 = G__49870;
chunk__49138_49864 = G__49871;
count__49139_49865 = G__49872;
i__49140_49866 = G__49873;
continue;
} else {
var temp__5753__auto___49876 = cljs.core.seq(seq__49137_49863);
if(temp__5753__auto___49876){
var seq__49137_49877__$1 = temp__5753__auto___49876;
if(cljs.core.chunked_seq_QMARK_(seq__49137_49877__$1)){
var c__4649__auto___49878 = cljs.core.chunk_first(seq__49137_49877__$1);
var G__49880 = cljs.core.chunk_rest(seq__49137_49877__$1);
var G__49881 = c__4649__auto___49878;
var G__49882 = cljs.core.count(c__4649__auto___49878);
var G__49883 = (0);
seq__49137_49863 = G__49880;
chunk__49138_49864 = G__49881;
count__49139_49865 = G__49882;
i__49140_49866 = G__49883;
continue;
} else {
var vec__49165_49884 = cljs.core.first(seq__49137_49877__$1);
var script_tag_49885 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49165_49884,(0),null);
var script_body_49886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49165_49884,(1),null);
eval(script_body_49886);


var G__49887 = cljs.core.next(seq__49137_49877__$1);
var G__49888 = null;
var G__49889 = (0);
var G__49890 = (0);
seq__49137_49863 = G__49887;
chunk__49138_49864 = G__49888;
count__49139_49865 = G__49889;
i__49140_49866 = G__49890;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49170){
var vec__49173 = p__49170;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49173,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__49193 = arguments.length;
switch (G__49193) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__49231 = cljs.core.seq(style_keys);
var chunk__49232 = null;
var count__49233 = (0);
var i__49234 = (0);
while(true){
if((i__49234 < count__49233)){
var it = chunk__49232.cljs$core$IIndexed$_nth$arity$2(null,i__49234);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49900 = seq__49231;
var G__49901 = chunk__49232;
var G__49902 = count__49233;
var G__49903 = (i__49234 + (1));
seq__49231 = G__49900;
chunk__49232 = G__49901;
count__49233 = G__49902;
i__49234 = G__49903;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49231);
if(temp__5753__auto__){
var seq__49231__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49231__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__49231__$1);
var G__49904 = cljs.core.chunk_rest(seq__49231__$1);
var G__49905 = c__4649__auto__;
var G__49906 = cljs.core.count(c__4649__auto__);
var G__49907 = (0);
seq__49231 = G__49904;
chunk__49232 = G__49905;
count__49233 = G__49906;
i__49234 = G__49907;
continue;
} else {
var it = cljs.core.first(seq__49231__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49908 = cljs.core.next(seq__49231__$1);
var G__49909 = null;
var G__49910 = (0);
var G__49911 = (0);
seq__49231 = G__49908;
chunk__49232 = G__49909;
count__49233 = G__49910;
i__49234 = G__49911;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49250,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49268 = k49250;
var G__49268__$1 = (((G__49268 instanceof cljs.core.Keyword))?G__49268.fqn:null);
switch (G__49268__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49250,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49274){
var vec__49275 = p__49274;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49275,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49249){
var self__ = this;
var G__49249__$1 = this;
return (new cljs.core.RecordIter((0),G__49249__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49251,other49252){
var self__ = this;
var this49251__$1 = this;
return (((!((other49252 == null)))) && ((((this49251__$1.constructor === other49252.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49251__$1.x,other49252.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49251__$1.y,other49252.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49251__$1.__extmap,other49252.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49250){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49290 = k49250;
var G__49290__$1 = (((G__49290 instanceof cljs.core.Keyword))?G__49290.fqn:null);
switch (G__49290__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49250);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49249){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49291 = cljs.core.keyword_identical_QMARK_;
var expr__49292 = k__4481__auto__;
if(cljs.core.truth_((pred__49291.cljs$core$IFn$_invoke$arity$2 ? pred__49291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49292) : pred__49291.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49292)))){
return (new shadow.dom.Coordinate(G__49249,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49291.cljs$core$IFn$_invoke$arity$2 ? pred__49291.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49292) : pred__49291.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49292)))){
return (new shadow.dom.Coordinate(self__.x,G__49249,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49249),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49249){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49249,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49260){
var extmap__4512__auto__ = (function (){var G__49310 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49260,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49260)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49310);
} else {
return G__49310;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49260),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49260),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k49319,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__49335 = k49319;
var G__49335__$1 = (((G__49335 instanceof cljs.core.Keyword))?G__49335.fqn:null);
switch (G__49335__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49319,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__49339){
var vec__49341 = p__49339;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49341,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49341,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49318){
var self__ = this;
var G__49318__$1 = this;
return (new cljs.core.RecordIter((0),G__49318__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49321,other49322){
var self__ = this;
var this49321__$1 = this;
return (((!((other49322 == null)))) && ((((this49321__$1.constructor === other49322.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49321__$1.w,other49322.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49321__$1.h,other49322.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49321__$1.__extmap,other49322.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k49319){
var self__ = this;
var this__4479__auto____$1 = this;
var G__49385 = k49319;
var G__49385__$1 = (((G__49385 instanceof cljs.core.Keyword))?G__49385.fqn:null);
switch (G__49385__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49319);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__49318){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__49390 = cljs.core.keyword_identical_QMARK_;
var expr__49391 = k__4481__auto__;
if(cljs.core.truth_((pred__49390.cljs$core$IFn$_invoke$arity$2 ? pred__49390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49391) : pred__49390.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49391)))){
return (new shadow.dom.Size(G__49318,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49390.cljs$core$IFn$_invoke$arity$2 ? pred__49390.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49391) : pred__49390.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49391)))){
return (new shadow.dom.Size(self__.w,G__49318,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__49318),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__49318){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49318,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49324){
var extmap__4512__auto__ = (function (){var G__49415 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49324,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49324)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49415);
} else {
return G__49415;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49324),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49324),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__49947 = (i + (1));
var G__49948 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49947;
ret = G__49948;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49472){
var vec__49473 = p__49472;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49473,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49481 = arguments.length;
switch (G__49481) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__49956 = ps;
var G__49957 = (i + (1));
el__$1 = G__49956;
i = G__49957;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__49540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49540,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49545_49961 = cljs.core.seq(props);
var chunk__49546_49962 = null;
var count__49547_49963 = (0);
var i__49548_49964 = (0);
while(true){
if((i__49548_49964 < count__49547_49963)){
var vec__49558_49965 = chunk__49546_49962.cljs$core$IIndexed$_nth$arity$2(null,i__49548_49964);
var k_49966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558_49965,(0),null);
var v_49967 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49558_49965,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_49966);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49966),v_49967);


var G__49972 = seq__49545_49961;
var G__49973 = chunk__49546_49962;
var G__49974 = count__49547_49963;
var G__49975 = (i__49548_49964 + (1));
seq__49545_49961 = G__49972;
chunk__49546_49962 = G__49973;
count__49547_49963 = G__49974;
i__49548_49964 = G__49975;
continue;
} else {
var temp__5753__auto___49976 = cljs.core.seq(seq__49545_49961);
if(temp__5753__auto___49976){
var seq__49545_49979__$1 = temp__5753__auto___49976;
if(cljs.core.chunked_seq_QMARK_(seq__49545_49979__$1)){
var c__4649__auto___49980 = cljs.core.chunk_first(seq__49545_49979__$1);
var G__49982 = cljs.core.chunk_rest(seq__49545_49979__$1);
var G__49983 = c__4649__auto___49980;
var G__49984 = cljs.core.count(c__4649__auto___49980);
var G__49985 = (0);
seq__49545_49961 = G__49982;
chunk__49546_49962 = G__49983;
count__49547_49963 = G__49984;
i__49548_49964 = G__49985;
continue;
} else {
var vec__49561_49986 = cljs.core.first(seq__49545_49979__$1);
var k_49987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561_49986,(0),null);
var v_49988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49561_49986,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_49987);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49987),v_49988);


var G__49989 = cljs.core.next(seq__49545_49979__$1);
var G__49990 = null;
var G__49991 = (0);
var G__49992 = (0);
seq__49545_49961 = G__49989;
chunk__49546_49962 = G__49990;
count__49547_49963 = G__49991;
i__49548_49964 = G__49992;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__49565 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49565,(1),null);
var seq__49568_49993 = cljs.core.seq(node_children);
var chunk__49570_49994 = null;
var count__49571_49995 = (0);
var i__49572_49996 = (0);
while(true){
if((i__49572_49996 < count__49571_49995)){
var child_struct_49997 = chunk__49570_49994.cljs$core$IIndexed$_nth$arity$2(null,i__49572_49996);
if((!((child_struct_49997 == null)))){
if(typeof child_struct_49997 === 'string'){
var text_49998 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49998),child_struct_49997].join(''));
} else {
var children_49999 = shadow.dom.svg_node(child_struct_49997);
if(cljs.core.seq_QMARK_(children_49999)){
var seq__49596_50000 = cljs.core.seq(children_49999);
var chunk__49598_50001 = null;
var count__49599_50002 = (0);
var i__49600_50003 = (0);
while(true){
if((i__49600_50003 < count__49599_50002)){
var child_50004 = chunk__49598_50001.cljs$core$IIndexed$_nth$arity$2(null,i__49600_50003);
if(cljs.core.truth_(child_50004)){
node.appendChild(child_50004);


var G__50005 = seq__49596_50000;
var G__50006 = chunk__49598_50001;
var G__50007 = count__49599_50002;
var G__50008 = (i__49600_50003 + (1));
seq__49596_50000 = G__50005;
chunk__49598_50001 = G__50006;
count__49599_50002 = G__50007;
i__49600_50003 = G__50008;
continue;
} else {
var G__50009 = seq__49596_50000;
var G__50010 = chunk__49598_50001;
var G__50011 = count__49599_50002;
var G__50012 = (i__49600_50003 + (1));
seq__49596_50000 = G__50009;
chunk__49598_50001 = G__50010;
count__49599_50002 = G__50011;
i__49600_50003 = G__50012;
continue;
}
} else {
var temp__5753__auto___50013 = cljs.core.seq(seq__49596_50000);
if(temp__5753__auto___50013){
var seq__49596_50014__$1 = temp__5753__auto___50013;
if(cljs.core.chunked_seq_QMARK_(seq__49596_50014__$1)){
var c__4649__auto___50015 = cljs.core.chunk_first(seq__49596_50014__$1);
var G__50016 = cljs.core.chunk_rest(seq__49596_50014__$1);
var G__50017 = c__4649__auto___50015;
var G__50018 = cljs.core.count(c__4649__auto___50015);
var G__50019 = (0);
seq__49596_50000 = G__50016;
chunk__49598_50001 = G__50017;
count__49599_50002 = G__50018;
i__49600_50003 = G__50019;
continue;
} else {
var child_50020 = cljs.core.first(seq__49596_50014__$1);
if(cljs.core.truth_(child_50020)){
node.appendChild(child_50020);


var G__50021 = cljs.core.next(seq__49596_50014__$1);
var G__50022 = null;
var G__50023 = (0);
var G__50024 = (0);
seq__49596_50000 = G__50021;
chunk__49598_50001 = G__50022;
count__49599_50002 = G__50023;
i__49600_50003 = G__50024;
continue;
} else {
var G__50025 = cljs.core.next(seq__49596_50014__$1);
var G__50026 = null;
var G__50027 = (0);
var G__50028 = (0);
seq__49596_50000 = G__50025;
chunk__49598_50001 = G__50026;
count__49599_50002 = G__50027;
i__49600_50003 = G__50028;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49999);
}
}


var G__50029 = seq__49568_49993;
var G__50030 = chunk__49570_49994;
var G__50031 = count__49571_49995;
var G__50032 = (i__49572_49996 + (1));
seq__49568_49993 = G__50029;
chunk__49570_49994 = G__50030;
count__49571_49995 = G__50031;
i__49572_49996 = G__50032;
continue;
} else {
var G__50033 = seq__49568_49993;
var G__50034 = chunk__49570_49994;
var G__50035 = count__49571_49995;
var G__50036 = (i__49572_49996 + (1));
seq__49568_49993 = G__50033;
chunk__49570_49994 = G__50034;
count__49571_49995 = G__50035;
i__49572_49996 = G__50036;
continue;
}
} else {
var temp__5753__auto___50037 = cljs.core.seq(seq__49568_49993);
if(temp__5753__auto___50037){
var seq__49568_50038__$1 = temp__5753__auto___50037;
if(cljs.core.chunked_seq_QMARK_(seq__49568_50038__$1)){
var c__4649__auto___50039 = cljs.core.chunk_first(seq__49568_50038__$1);
var G__50040 = cljs.core.chunk_rest(seq__49568_50038__$1);
var G__50041 = c__4649__auto___50039;
var G__50042 = cljs.core.count(c__4649__auto___50039);
var G__50043 = (0);
seq__49568_49993 = G__50040;
chunk__49570_49994 = G__50041;
count__49571_49995 = G__50042;
i__49572_49996 = G__50043;
continue;
} else {
var child_struct_50044 = cljs.core.first(seq__49568_50038__$1);
if((!((child_struct_50044 == null)))){
if(typeof child_struct_50044 === 'string'){
var text_50046 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50046),child_struct_50044].join(''));
} else {
var children_50047 = shadow.dom.svg_node(child_struct_50044);
if(cljs.core.seq_QMARK_(children_50047)){
var seq__49615_50048 = cljs.core.seq(children_50047);
var chunk__49617_50049 = null;
var count__49618_50050 = (0);
var i__49619_50051 = (0);
while(true){
if((i__49619_50051 < count__49618_50050)){
var child_50052 = chunk__49617_50049.cljs$core$IIndexed$_nth$arity$2(null,i__49619_50051);
if(cljs.core.truth_(child_50052)){
node.appendChild(child_50052);


var G__50053 = seq__49615_50048;
var G__50054 = chunk__49617_50049;
var G__50055 = count__49618_50050;
var G__50056 = (i__49619_50051 + (1));
seq__49615_50048 = G__50053;
chunk__49617_50049 = G__50054;
count__49618_50050 = G__50055;
i__49619_50051 = G__50056;
continue;
} else {
var G__50057 = seq__49615_50048;
var G__50058 = chunk__49617_50049;
var G__50059 = count__49618_50050;
var G__50060 = (i__49619_50051 + (1));
seq__49615_50048 = G__50057;
chunk__49617_50049 = G__50058;
count__49618_50050 = G__50059;
i__49619_50051 = G__50060;
continue;
}
} else {
var temp__5753__auto___50061__$1 = cljs.core.seq(seq__49615_50048);
if(temp__5753__auto___50061__$1){
var seq__49615_50062__$1 = temp__5753__auto___50061__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49615_50062__$1)){
var c__4649__auto___50063 = cljs.core.chunk_first(seq__49615_50062__$1);
var G__50064 = cljs.core.chunk_rest(seq__49615_50062__$1);
var G__50065 = c__4649__auto___50063;
var G__50066 = cljs.core.count(c__4649__auto___50063);
var G__50067 = (0);
seq__49615_50048 = G__50064;
chunk__49617_50049 = G__50065;
count__49618_50050 = G__50066;
i__49619_50051 = G__50067;
continue;
} else {
var child_50068 = cljs.core.first(seq__49615_50062__$1);
if(cljs.core.truth_(child_50068)){
node.appendChild(child_50068);


var G__50069 = cljs.core.next(seq__49615_50062__$1);
var G__50070 = null;
var G__50071 = (0);
var G__50072 = (0);
seq__49615_50048 = G__50069;
chunk__49617_50049 = G__50070;
count__49618_50050 = G__50071;
i__49619_50051 = G__50072;
continue;
} else {
var G__50075 = cljs.core.next(seq__49615_50062__$1);
var G__50076 = null;
var G__50077 = (0);
var G__50078 = (0);
seq__49615_50048 = G__50075;
chunk__49617_50049 = G__50076;
count__49618_50050 = G__50077;
i__49619_50051 = G__50078;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50047);
}
}


var G__50079 = cljs.core.next(seq__49568_50038__$1);
var G__50080 = null;
var G__50081 = (0);
var G__50082 = (0);
seq__49568_49993 = G__50079;
chunk__49570_49994 = G__50080;
count__49571_49995 = G__50081;
i__49572_49996 = G__50082;
continue;
} else {
var G__50083 = cljs.core.next(seq__49568_50038__$1);
var G__50084 = null;
var G__50085 = (0);
var G__50086 = (0);
seq__49568_49993 = G__50083;
chunk__49570_49994 = G__50084;
count__49571_49995 = G__50085;
i__49572_49996 = G__50086;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___50091 = arguments.length;
var i__4830__auto___50092 = (0);
while(true){
if((i__4830__auto___50092 < len__4829__auto___50091)){
args__4835__auto__.push((arguments[i__4830__auto___50092]));

var G__50093 = (i__4830__auto___50092 + (1));
i__4830__auto___50092 = G__50093;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49633){
var G__49634 = cljs.core.first(seq49633);
var seq49633__$1 = cljs.core.next(seq49633);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49634,seq49633__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__49638 = arguments.length;
switch (G__49638) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__45936__auto___50099 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__45937__auto__ = (function (){var switch__45834__auto__ = (function (state_49645){
var state_val_49646 = (state_49645[(1)]);
if((state_val_49646 === (1))){
var state_49645__$1 = state_49645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49645__$1,(2),once_or_cleanup);
} else {
if((state_val_49646 === (2))){
var inst_49642 = (state_49645[(2)]);
var inst_49643 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49645__$1 = (function (){var statearr_49647 = state_49645;
(statearr_49647[(7)] = inst_49642);

return statearr_49647;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49645__$1,inst_49643);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__45835__auto__ = null;
var shadow$dom$state_machine__45835__auto____0 = (function (){
var statearr_49648 = [null,null,null,null,null,null,null,null];
(statearr_49648[(0)] = shadow$dom$state_machine__45835__auto__);

(statearr_49648[(1)] = (1));

return statearr_49648;
});
var shadow$dom$state_machine__45835__auto____1 = (function (state_49645){
while(true){
var ret_value__45836__auto__ = (function (){try{while(true){
var result__45837__auto__ = switch__45834__auto__(state_49645);
if(cljs.core.keyword_identical_QMARK_(result__45837__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__45837__auto__;
}
break;
}
}catch (e49649){var ex__45838__auto__ = e49649;
var statearr_49650_50105 = state_49645;
(statearr_49650_50105[(2)] = ex__45838__auto__);


if(cljs.core.seq((state_49645[(4)]))){
var statearr_49651_50106 = state_49645;
(statearr_49651_50106[(1)] = cljs.core.first((state_49645[(4)])));

} else {
throw ex__45838__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__45836__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__50107 = state_49645;
state_49645 = G__50107;
continue;
} else {
return ret_value__45836__auto__;
}
break;
}
});
shadow$dom$state_machine__45835__auto__ = function(state_49645){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__45835__auto____0.call(this);
case 1:
return shadow$dom$state_machine__45835__auto____1.call(this,state_49645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__45835__auto____0;
shadow$dom$state_machine__45835__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__45835__auto____1;
return shadow$dom$state_machine__45835__auto__;
})()
})();
var state__45938__auto__ = (function (){var statearr_49652 = f__45937__auto__();
(statearr_49652[(6)] = c__45936__auto___50099);

return statearr_49652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__45938__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
