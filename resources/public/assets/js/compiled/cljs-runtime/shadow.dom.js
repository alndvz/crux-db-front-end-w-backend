goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46169 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_46169(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46170 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_46170(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45084 = coll;
var G__45085 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45084,G__45085) : shadow.dom.lazy_native_coll_seq.call(null,G__45084,G__45085));
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
var G__45103 = arguments.length;
switch (G__45103) {
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
var G__45112 = arguments.length;
switch (G__45112) {
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
var G__45126 = arguments.length;
switch (G__45126) {
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
var G__45138 = arguments.length;
switch (G__45138) {
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
var G__45155 = arguments.length;
switch (G__45155) {
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
var G__45176 = arguments.length;
switch (G__45176) {
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
}catch (e45187){if((e45187 instanceof Object)){
var e = e45187;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45187;

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
var seq__45199 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45200 = null;
var count__45201 = (0);
var i__45202 = (0);
while(true){
if((i__45202 < count__45201)){
var el = chunk__45200.cljs$core$IIndexed$_nth$arity$2(null,i__45202);
var handler_46197__$1 = ((function (seq__45199,chunk__45200,count__45201,i__45202,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45199,chunk__45200,count__45201,i__45202,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46197__$1);


var G__46198 = seq__45199;
var G__46199 = chunk__45200;
var G__46200 = count__45201;
var G__46201 = (i__45202 + (1));
seq__45199 = G__46198;
chunk__45200 = G__46199;
count__45201 = G__46200;
i__45202 = G__46201;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45199);
if(temp__5753__auto__){
var seq__45199__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45199__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45199__$1);
var G__46205 = cljs.core.chunk_rest(seq__45199__$1);
var G__46206 = c__4649__auto__;
var G__46207 = cljs.core.count(c__4649__auto__);
var G__46208 = (0);
seq__45199 = G__46205;
chunk__45200 = G__46206;
count__45201 = G__46207;
i__45202 = G__46208;
continue;
} else {
var el = cljs.core.first(seq__45199__$1);
var handler_46209__$1 = ((function (seq__45199,chunk__45200,count__45201,i__45202,el,seq__45199__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45199,chunk__45200,count__45201,i__45202,el,seq__45199__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46209__$1);


var G__46210 = cljs.core.next(seq__45199__$1);
var G__46211 = null;
var G__46212 = (0);
var G__46213 = (0);
seq__45199 = G__46210;
chunk__45200 = G__46211;
count__45201 = G__46212;
i__45202 = G__46213;
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
var G__45230 = arguments.length;
switch (G__45230) {
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
var seq__45244 = cljs.core.seq(events);
var chunk__45245 = null;
var count__45246 = (0);
var i__45247 = (0);
while(true){
if((i__45247 < count__45246)){
var vec__45263 = chunk__45245.cljs$core$IIndexed$_nth$arity$2(null,i__45247);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45263,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45263,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46218 = seq__45244;
var G__46219 = chunk__45245;
var G__46220 = count__45246;
var G__46221 = (i__45247 + (1));
seq__45244 = G__46218;
chunk__45245 = G__46219;
count__45246 = G__46220;
i__45247 = G__46221;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45244);
if(temp__5753__auto__){
var seq__45244__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45244__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45244__$1);
var G__46222 = cljs.core.chunk_rest(seq__45244__$1);
var G__46223 = c__4649__auto__;
var G__46224 = cljs.core.count(c__4649__auto__);
var G__46225 = (0);
seq__45244 = G__46222;
chunk__45245 = G__46223;
count__45246 = G__46224;
i__45247 = G__46225;
continue;
} else {
var vec__45272 = cljs.core.first(seq__45244__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45272,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45272,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46226 = cljs.core.next(seq__45244__$1);
var G__46227 = null;
var G__46228 = (0);
var G__46229 = (0);
seq__45244 = G__46226;
chunk__45245 = G__46227;
count__45246 = G__46228;
i__45247 = G__46229;
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
var seq__45286 = cljs.core.seq(styles);
var chunk__45287 = null;
var count__45288 = (0);
var i__45289 = (0);
while(true){
if((i__45289 < count__45288)){
var vec__45303 = chunk__45287.cljs$core$IIndexed$_nth$arity$2(null,i__45289);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45303,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45303,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46231 = seq__45286;
var G__46232 = chunk__45287;
var G__46233 = count__45288;
var G__46234 = (i__45289 + (1));
seq__45286 = G__46231;
chunk__45287 = G__46232;
count__45288 = G__46233;
i__45289 = G__46234;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45286);
if(temp__5753__auto__){
var seq__45286__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45286__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45286__$1);
var G__46235 = cljs.core.chunk_rest(seq__45286__$1);
var G__46236 = c__4649__auto__;
var G__46237 = cljs.core.count(c__4649__auto__);
var G__46238 = (0);
seq__45286 = G__46235;
chunk__45287 = G__46236;
count__45288 = G__46237;
i__45289 = G__46238;
continue;
} else {
var vec__45311 = cljs.core.first(seq__45286__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45311,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45311,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46241 = cljs.core.next(seq__45286__$1);
var G__46242 = null;
var G__46243 = (0);
var G__46244 = (0);
seq__45286 = G__46241;
chunk__45287 = G__46242;
count__45288 = G__46243;
i__45289 = G__46244;
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
var G__45321_46245 = key;
var G__45321_46246__$1 = (((G__45321_46245 instanceof cljs.core.Keyword))?G__45321_46245.fqn:null);
switch (G__45321_46246__$1) {
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
var ks_46248 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_46248,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_46248,"aria-");
}
})())){
el.setAttribute(ks_46248,value);
} else {
(el[ks_46248] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45351){
var map__45352 = p__45351;
var map__45352__$1 = cljs.core.__destructure_map(map__45352);
var props = map__45352__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45352__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45353 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45353,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45353,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45353,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45357 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45357,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45357;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45360 = arguments.length;
switch (G__45360) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45372){
var vec__45373 = p__45372;
var seq__45374 = cljs.core.seq(vec__45373);
var first__45375 = cljs.core.first(seq__45374);
var seq__45374__$1 = cljs.core.next(seq__45374);
var nn = first__45375;
var first__45375__$1 = cljs.core.first(seq__45374__$1);
var seq__45374__$2 = cljs.core.next(seq__45374__$1);
var np = first__45375__$1;
var nc = seq__45374__$2;
var node = vec__45373;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45376 = nn;
var G__45377 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45376,G__45377) : create_fn.call(null,G__45376,G__45377));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45380 = nn;
var G__45381 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45380,G__45381) : create_fn.call(null,G__45380,G__45381));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45384 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45384,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45384,(1),null);
var seq__45390_46257 = cljs.core.seq(node_children);
var chunk__45391_46258 = null;
var count__45392_46259 = (0);
var i__45393_46260 = (0);
while(true){
if((i__45393_46260 < count__45392_46259)){
var child_struct_46261 = chunk__45391_46258.cljs$core$IIndexed$_nth$arity$2(null,i__45393_46260);
var children_46262 = shadow.dom.dom_node(child_struct_46261);
if(cljs.core.seq_QMARK_(children_46262)){
var seq__45449_46263 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46262));
var chunk__45451_46264 = null;
var count__45452_46265 = (0);
var i__45453_46266 = (0);
while(true){
if((i__45453_46266 < count__45452_46265)){
var child_46267 = chunk__45451_46264.cljs$core$IIndexed$_nth$arity$2(null,i__45453_46266);
if(cljs.core.truth_(child_46267)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46267);


var G__46268 = seq__45449_46263;
var G__46269 = chunk__45451_46264;
var G__46270 = count__45452_46265;
var G__46271 = (i__45453_46266 + (1));
seq__45449_46263 = G__46268;
chunk__45451_46264 = G__46269;
count__45452_46265 = G__46270;
i__45453_46266 = G__46271;
continue;
} else {
var G__46272 = seq__45449_46263;
var G__46273 = chunk__45451_46264;
var G__46274 = count__45452_46265;
var G__46275 = (i__45453_46266 + (1));
seq__45449_46263 = G__46272;
chunk__45451_46264 = G__46273;
count__45452_46265 = G__46274;
i__45453_46266 = G__46275;
continue;
}
} else {
var temp__5753__auto___46276 = cljs.core.seq(seq__45449_46263);
if(temp__5753__auto___46276){
var seq__45449_46277__$1 = temp__5753__auto___46276;
if(cljs.core.chunked_seq_QMARK_(seq__45449_46277__$1)){
var c__4649__auto___46278 = cljs.core.chunk_first(seq__45449_46277__$1);
var G__46279 = cljs.core.chunk_rest(seq__45449_46277__$1);
var G__46280 = c__4649__auto___46278;
var G__46281 = cljs.core.count(c__4649__auto___46278);
var G__46282 = (0);
seq__45449_46263 = G__46279;
chunk__45451_46264 = G__46280;
count__45452_46265 = G__46281;
i__45453_46266 = G__46282;
continue;
} else {
var child_46283 = cljs.core.first(seq__45449_46277__$1);
if(cljs.core.truth_(child_46283)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46283);


var G__46284 = cljs.core.next(seq__45449_46277__$1);
var G__46285 = null;
var G__46286 = (0);
var G__46287 = (0);
seq__45449_46263 = G__46284;
chunk__45451_46264 = G__46285;
count__45452_46265 = G__46286;
i__45453_46266 = G__46287;
continue;
} else {
var G__46288 = cljs.core.next(seq__45449_46277__$1);
var G__46289 = null;
var G__46290 = (0);
var G__46291 = (0);
seq__45449_46263 = G__46288;
chunk__45451_46264 = G__46289;
count__45452_46265 = G__46290;
i__45453_46266 = G__46291;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46262);
}


var G__46292 = seq__45390_46257;
var G__46293 = chunk__45391_46258;
var G__46294 = count__45392_46259;
var G__46295 = (i__45393_46260 + (1));
seq__45390_46257 = G__46292;
chunk__45391_46258 = G__46293;
count__45392_46259 = G__46294;
i__45393_46260 = G__46295;
continue;
} else {
var temp__5753__auto___46296 = cljs.core.seq(seq__45390_46257);
if(temp__5753__auto___46296){
var seq__45390_46297__$1 = temp__5753__auto___46296;
if(cljs.core.chunked_seq_QMARK_(seq__45390_46297__$1)){
var c__4649__auto___46298 = cljs.core.chunk_first(seq__45390_46297__$1);
var G__46299 = cljs.core.chunk_rest(seq__45390_46297__$1);
var G__46300 = c__4649__auto___46298;
var G__46301 = cljs.core.count(c__4649__auto___46298);
var G__46302 = (0);
seq__45390_46257 = G__46299;
chunk__45391_46258 = G__46300;
count__45392_46259 = G__46301;
i__45393_46260 = G__46302;
continue;
} else {
var child_struct_46303 = cljs.core.first(seq__45390_46297__$1);
var children_46304 = shadow.dom.dom_node(child_struct_46303);
if(cljs.core.seq_QMARK_(children_46304)){
var seq__45481_46305 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46304));
var chunk__45483_46306 = null;
var count__45484_46307 = (0);
var i__45485_46308 = (0);
while(true){
if((i__45485_46308 < count__45484_46307)){
var child_46309 = chunk__45483_46306.cljs$core$IIndexed$_nth$arity$2(null,i__45485_46308);
if(cljs.core.truth_(child_46309)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46309);


var G__46310 = seq__45481_46305;
var G__46311 = chunk__45483_46306;
var G__46312 = count__45484_46307;
var G__46313 = (i__45485_46308 + (1));
seq__45481_46305 = G__46310;
chunk__45483_46306 = G__46311;
count__45484_46307 = G__46312;
i__45485_46308 = G__46313;
continue;
} else {
var G__46314 = seq__45481_46305;
var G__46315 = chunk__45483_46306;
var G__46316 = count__45484_46307;
var G__46317 = (i__45485_46308 + (1));
seq__45481_46305 = G__46314;
chunk__45483_46306 = G__46315;
count__45484_46307 = G__46316;
i__45485_46308 = G__46317;
continue;
}
} else {
var temp__5753__auto___46318__$1 = cljs.core.seq(seq__45481_46305);
if(temp__5753__auto___46318__$1){
var seq__45481_46319__$1 = temp__5753__auto___46318__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45481_46319__$1)){
var c__4649__auto___46320 = cljs.core.chunk_first(seq__45481_46319__$1);
var G__46321 = cljs.core.chunk_rest(seq__45481_46319__$1);
var G__46322 = c__4649__auto___46320;
var G__46323 = cljs.core.count(c__4649__auto___46320);
var G__46324 = (0);
seq__45481_46305 = G__46321;
chunk__45483_46306 = G__46322;
count__45484_46307 = G__46323;
i__45485_46308 = G__46324;
continue;
} else {
var child_46326 = cljs.core.first(seq__45481_46319__$1);
if(cljs.core.truth_(child_46326)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46326);


var G__46327 = cljs.core.next(seq__45481_46319__$1);
var G__46328 = null;
var G__46329 = (0);
var G__46330 = (0);
seq__45481_46305 = G__46327;
chunk__45483_46306 = G__46328;
count__45484_46307 = G__46329;
i__45485_46308 = G__46330;
continue;
} else {
var G__46331 = cljs.core.next(seq__45481_46319__$1);
var G__46332 = null;
var G__46333 = (0);
var G__46334 = (0);
seq__45481_46305 = G__46331;
chunk__45483_46306 = G__46332;
count__45484_46307 = G__46333;
i__45485_46308 = G__46334;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46304);
}


var G__46335 = cljs.core.next(seq__45390_46297__$1);
var G__46336 = null;
var G__46337 = (0);
var G__46338 = (0);
seq__45390_46257 = G__46335;
chunk__45391_46258 = G__46336;
count__45392_46259 = G__46337;
i__45393_46260 = G__46338;
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
var seq__45541 = cljs.core.seq(node);
var chunk__45542 = null;
var count__45543 = (0);
var i__45544 = (0);
while(true){
if((i__45544 < count__45543)){
var n = chunk__45542.cljs$core$IIndexed$_nth$arity$2(null,i__45544);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46341 = seq__45541;
var G__46342 = chunk__45542;
var G__46343 = count__45543;
var G__46344 = (i__45544 + (1));
seq__45541 = G__46341;
chunk__45542 = G__46342;
count__45543 = G__46343;
i__45544 = G__46344;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45541);
if(temp__5753__auto__){
var seq__45541__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45541__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45541__$1);
var G__46346 = cljs.core.chunk_rest(seq__45541__$1);
var G__46347 = c__4649__auto__;
var G__46348 = cljs.core.count(c__4649__auto__);
var G__46349 = (0);
seq__45541 = G__46346;
chunk__45542 = G__46347;
count__45543 = G__46348;
i__45544 = G__46349;
continue;
} else {
var n = cljs.core.first(seq__45541__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46350 = cljs.core.next(seq__45541__$1);
var G__46351 = null;
var G__46352 = (0);
var G__46353 = (0);
seq__45541 = G__46350;
chunk__45542 = G__46351;
count__45543 = G__46352;
i__45544 = G__46353;
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
var G__45569 = arguments.length;
switch (G__45569) {
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
var G__45577 = arguments.length;
switch (G__45577) {
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
var G__45594 = arguments.length;
switch (G__45594) {
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
var len__4829__auto___46362 = arguments.length;
var i__4830__auto___46363 = (0);
while(true){
if((i__4830__auto___46363 < len__4829__auto___46362)){
args__4835__auto__.push((arguments[i__4830__auto___46363]));

var G__46364 = (i__4830__auto___46363 + (1));
i__4830__auto___46363 = G__46364;
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
var seq__45632_46365 = cljs.core.seq(nodes);
var chunk__45633_46366 = null;
var count__45634_46367 = (0);
var i__45635_46368 = (0);
while(true){
if((i__45635_46368 < count__45634_46367)){
var node_46369 = chunk__45633_46366.cljs$core$IIndexed$_nth$arity$2(null,i__45635_46368);
fragment.appendChild(shadow.dom._to_dom(node_46369));


var G__46370 = seq__45632_46365;
var G__46371 = chunk__45633_46366;
var G__46372 = count__45634_46367;
var G__46373 = (i__45635_46368 + (1));
seq__45632_46365 = G__46370;
chunk__45633_46366 = G__46371;
count__45634_46367 = G__46372;
i__45635_46368 = G__46373;
continue;
} else {
var temp__5753__auto___46374 = cljs.core.seq(seq__45632_46365);
if(temp__5753__auto___46374){
var seq__45632_46375__$1 = temp__5753__auto___46374;
if(cljs.core.chunked_seq_QMARK_(seq__45632_46375__$1)){
var c__4649__auto___46376 = cljs.core.chunk_first(seq__45632_46375__$1);
var G__46377 = cljs.core.chunk_rest(seq__45632_46375__$1);
var G__46378 = c__4649__auto___46376;
var G__46379 = cljs.core.count(c__4649__auto___46376);
var G__46380 = (0);
seq__45632_46365 = G__46377;
chunk__45633_46366 = G__46378;
count__45634_46367 = G__46379;
i__45635_46368 = G__46380;
continue;
} else {
var node_46381 = cljs.core.first(seq__45632_46375__$1);
fragment.appendChild(shadow.dom._to_dom(node_46381));


var G__46382 = cljs.core.next(seq__45632_46375__$1);
var G__46383 = null;
var G__46384 = (0);
var G__46385 = (0);
seq__45632_46365 = G__46382;
chunk__45633_46366 = G__46383;
count__45634_46367 = G__46384;
i__45635_46368 = G__46385;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq45625){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq45625));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__45641_46386 = cljs.core.seq(scripts);
var chunk__45642_46387 = null;
var count__45643_46388 = (0);
var i__45644_46389 = (0);
while(true){
if((i__45644_46389 < count__45643_46388)){
var vec__45652_46391 = chunk__45642_46387.cljs$core$IIndexed$_nth$arity$2(null,i__45644_46389);
var script_tag_46393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45652_46391,(0),null);
var script_body_46394 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45652_46391,(1),null);
eval(script_body_46394);


var G__46395 = seq__45641_46386;
var G__46396 = chunk__45642_46387;
var G__46397 = count__45643_46388;
var G__46398 = (i__45644_46389 + (1));
seq__45641_46386 = G__46395;
chunk__45642_46387 = G__46396;
count__45643_46388 = G__46397;
i__45644_46389 = G__46398;
continue;
} else {
var temp__5753__auto___46402 = cljs.core.seq(seq__45641_46386);
if(temp__5753__auto___46402){
var seq__45641_46404__$1 = temp__5753__auto___46402;
if(cljs.core.chunked_seq_QMARK_(seq__45641_46404__$1)){
var c__4649__auto___46405 = cljs.core.chunk_first(seq__45641_46404__$1);
var G__46406 = cljs.core.chunk_rest(seq__45641_46404__$1);
var G__46407 = c__4649__auto___46405;
var G__46408 = cljs.core.count(c__4649__auto___46405);
var G__46409 = (0);
seq__45641_46386 = G__46406;
chunk__45642_46387 = G__46407;
count__45643_46388 = G__46408;
i__45644_46389 = G__46409;
continue;
} else {
var vec__45655_46410 = cljs.core.first(seq__45641_46404__$1);
var script_tag_46411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655_46410,(0),null);
var script_body_46412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45655_46410,(1),null);
eval(script_body_46412);


var G__46413 = cljs.core.next(seq__45641_46404__$1);
var G__46414 = null;
var G__46415 = (0);
var G__46416 = (0);
seq__45641_46386 = G__46413;
chunk__45642_46387 = G__46414;
count__45643_46388 = G__46415;
i__45644_46389 = G__46416;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__45658){
var vec__45660 = p__45658;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45660,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45660,(1),null);
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
var G__45672 = arguments.length;
switch (G__45672) {
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
var seq__45695 = cljs.core.seq(style_keys);
var chunk__45696 = null;
var count__45697 = (0);
var i__45698 = (0);
while(true){
if((i__45698 < count__45697)){
var it = chunk__45696.cljs$core$IIndexed$_nth$arity$2(null,i__45698);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46422 = seq__45695;
var G__46423 = chunk__45696;
var G__46424 = count__45697;
var G__46425 = (i__45698 + (1));
seq__45695 = G__46422;
chunk__45696 = G__46423;
count__45697 = G__46424;
i__45698 = G__46425;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45695);
if(temp__5753__auto__){
var seq__45695__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45695__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__45695__$1);
var G__46426 = cljs.core.chunk_rest(seq__45695__$1);
var G__46427 = c__4649__auto__;
var G__46428 = cljs.core.count(c__4649__auto__);
var G__46429 = (0);
seq__45695 = G__46426;
chunk__45696 = G__46427;
count__45697 = G__46428;
i__45698 = G__46429;
continue;
} else {
var it = cljs.core.first(seq__45695__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46430 = cljs.core.next(seq__45695__$1);
var G__46431 = null;
var G__46432 = (0);
var G__46433 = (0);
seq__45695 = G__46430;
chunk__45696 = G__46431;
count__45697 = G__46432;
i__45698 = G__46433;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k45711,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__45718 = k45711;
var G__45718__$1 = (((G__45718 instanceof cljs.core.Keyword))?G__45718.fqn:null);
switch (G__45718__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45711,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__45720){
var vec__45721 = p__45720;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45721,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45721,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45710){
var self__ = this;
var G__45710__$1 = this;
return (new cljs.core.RecordIter((0),G__45710__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45712,other45713){
var self__ = this;
var this45712__$1 = this;
return (((!((other45713 == null)))) && ((((this45712__$1.constructor === other45713.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45712__$1.x,other45713.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45712__$1.y,other45713.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45712__$1.__extmap,other45713.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k45711){
var self__ = this;
var this__4479__auto____$1 = this;
var G__45761 = k45711;
var G__45761__$1 = (((G__45761 instanceof cljs.core.Keyword))?G__45761.fqn:null);
switch (G__45761__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45711);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__45710){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__45764 = cljs.core.keyword_identical_QMARK_;
var expr__45765 = k__4481__auto__;
if(cljs.core.truth_((pred__45764.cljs$core$IFn$_invoke$arity$2 ? pred__45764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__45765) : pred__45764.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__45765)))){
return (new shadow.dom.Coordinate(G__45710,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45764.cljs$core$IFn$_invoke$arity$2 ? pred__45764.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__45765) : pred__45764.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__45765)))){
return (new shadow.dom.Coordinate(self__.x,G__45710,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__45710),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__45710){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__45710,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__45714){
var extmap__4512__auto__ = (function (){var G__45786 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45714,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__45714)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45786);
} else {
return G__45786;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__45714),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__45714),null,cljs.core.not_empty(extmap__4512__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k45799,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__45808 = k45799;
var G__45808__$1 = (((G__45808 instanceof cljs.core.Keyword))?G__45808.fqn:null);
switch (G__45808__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k45799,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__45815){
var vec__45816 = p__45815;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45816,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45816,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__45798){
var self__ = this;
var G__45798__$1 = this;
return (new cljs.core.RecordIter((0),G__45798__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this45800,other45801){
var self__ = this;
var this45800__$1 = this;
return (((!((other45801 == null)))) && ((((this45800__$1.constructor === other45801.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45800__$1.w,other45801.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45800__$1.h,other45801.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this45800__$1.__extmap,other45801.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k45799){
var self__ = this;
var this__4479__auto____$1 = this;
var G__45837 = k45799;
var G__45837__$1 = (((G__45837 instanceof cljs.core.Keyword))?G__45837.fqn:null);
switch (G__45837__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k45799);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__45798){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__45840 = cljs.core.keyword_identical_QMARK_;
var expr__45841 = k__4481__auto__;
if(cljs.core.truth_((pred__45840.cljs$core$IFn$_invoke$arity$2 ? pred__45840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__45841) : pred__45840.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__45841)))){
return (new shadow.dom.Size(G__45798,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__45840.cljs$core$IFn$_invoke$arity$2 ? pred__45840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__45841) : pred__45840.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__45841)))){
return (new shadow.dom.Size(self__.w,G__45798,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__45798),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__45798){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__45798,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__45802){
var extmap__4512__auto__ = (function (){var G__45845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__45802,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__45802)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__45845);
} else {
return G__45845;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__45802),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__45802),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
var G__46479 = (i + (1));
var G__46480 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__46479;
ret = G__46480;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__45878){
var vec__45880 = p__45878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45880,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__45890 = arguments.length;
switch (G__45890) {
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
var G__46487 = ps;
var G__46488 = (i + (1));
el__$1 = G__46487;
i = G__46488;
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
var vec__45936 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45936,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45936,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45936,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__45944_46492 = cljs.core.seq(props);
var chunk__45945_46493 = null;
var count__45946_46494 = (0);
var i__45947_46495 = (0);
while(true){
if((i__45947_46495 < count__45946_46494)){
var vec__45973_46496 = chunk__45945_46493.cljs$core$IIndexed$_nth$arity$2(null,i__45947_46495);
var k_46497 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45973_46496,(0),null);
var v_46498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45973_46496,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_46497);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46497),v_46498);


var G__46500 = seq__45944_46492;
var G__46501 = chunk__45945_46493;
var G__46502 = count__45946_46494;
var G__46503 = (i__45947_46495 + (1));
seq__45944_46492 = G__46500;
chunk__45945_46493 = G__46501;
count__45946_46494 = G__46502;
i__45947_46495 = G__46503;
continue;
} else {
var temp__5753__auto___46505 = cljs.core.seq(seq__45944_46492);
if(temp__5753__auto___46505){
var seq__45944_46506__$1 = temp__5753__auto___46505;
if(cljs.core.chunked_seq_QMARK_(seq__45944_46506__$1)){
var c__4649__auto___46507 = cljs.core.chunk_first(seq__45944_46506__$1);
var G__46509 = cljs.core.chunk_rest(seq__45944_46506__$1);
var G__46510 = c__4649__auto___46507;
var G__46511 = cljs.core.count(c__4649__auto___46507);
var G__46512 = (0);
seq__45944_46492 = G__46509;
chunk__45945_46493 = G__46510;
count__45946_46494 = G__46511;
i__45947_46495 = G__46512;
continue;
} else {
var vec__45979_46513 = cljs.core.first(seq__45944_46506__$1);
var k_46514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45979_46513,(0),null);
var v_46515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45979_46513,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_46514);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_46514),v_46515);


var G__46516 = cljs.core.next(seq__45944_46506__$1);
var G__46517 = null;
var G__46518 = (0);
var G__46519 = (0);
seq__45944_46492 = G__46516;
chunk__45945_46493 = G__46517;
count__45946_46494 = G__46518;
i__45947_46495 = G__46519;
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
var vec__45994 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45994,(1),null);
var seq__45997_46520 = cljs.core.seq(node_children);
var chunk__45999_46521 = null;
var count__46000_46522 = (0);
var i__46001_46523 = (0);
while(true){
if((i__46001_46523 < count__46000_46522)){
var child_struct_46525 = chunk__45999_46521.cljs$core$IIndexed$_nth$arity$2(null,i__46001_46523);
if((!((child_struct_46525 == null)))){
if(typeof child_struct_46525 === 'string'){
var text_46526 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46526),child_struct_46525].join(''));
} else {
var children_46531 = shadow.dom.svg_node(child_struct_46525);
if(cljs.core.seq_QMARK_(children_46531)){
var seq__46074_46532 = cljs.core.seq(children_46531);
var chunk__46076_46533 = null;
var count__46077_46534 = (0);
var i__46078_46535 = (0);
while(true){
if((i__46078_46535 < count__46077_46534)){
var child_46536 = chunk__46076_46533.cljs$core$IIndexed$_nth$arity$2(null,i__46078_46535);
if(cljs.core.truth_(child_46536)){
node.appendChild(child_46536);


var G__46540 = seq__46074_46532;
var G__46541 = chunk__46076_46533;
var G__46542 = count__46077_46534;
var G__46543 = (i__46078_46535 + (1));
seq__46074_46532 = G__46540;
chunk__46076_46533 = G__46541;
count__46077_46534 = G__46542;
i__46078_46535 = G__46543;
continue;
} else {
var G__46544 = seq__46074_46532;
var G__46545 = chunk__46076_46533;
var G__46546 = count__46077_46534;
var G__46547 = (i__46078_46535 + (1));
seq__46074_46532 = G__46544;
chunk__46076_46533 = G__46545;
count__46077_46534 = G__46546;
i__46078_46535 = G__46547;
continue;
}
} else {
var temp__5753__auto___46548 = cljs.core.seq(seq__46074_46532);
if(temp__5753__auto___46548){
var seq__46074_46550__$1 = temp__5753__auto___46548;
if(cljs.core.chunked_seq_QMARK_(seq__46074_46550__$1)){
var c__4649__auto___46552 = cljs.core.chunk_first(seq__46074_46550__$1);
var G__46553 = cljs.core.chunk_rest(seq__46074_46550__$1);
var G__46554 = c__4649__auto___46552;
var G__46555 = cljs.core.count(c__4649__auto___46552);
var G__46556 = (0);
seq__46074_46532 = G__46553;
chunk__46076_46533 = G__46554;
count__46077_46534 = G__46555;
i__46078_46535 = G__46556;
continue;
} else {
var child_46557 = cljs.core.first(seq__46074_46550__$1);
if(cljs.core.truth_(child_46557)){
node.appendChild(child_46557);


var G__46558 = cljs.core.next(seq__46074_46550__$1);
var G__46559 = null;
var G__46560 = (0);
var G__46561 = (0);
seq__46074_46532 = G__46558;
chunk__46076_46533 = G__46559;
count__46077_46534 = G__46560;
i__46078_46535 = G__46561;
continue;
} else {
var G__46562 = cljs.core.next(seq__46074_46550__$1);
var G__46563 = null;
var G__46564 = (0);
var G__46565 = (0);
seq__46074_46532 = G__46562;
chunk__46076_46533 = G__46563;
count__46077_46534 = G__46564;
i__46078_46535 = G__46565;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46531);
}
}


var G__46567 = seq__45997_46520;
var G__46568 = chunk__45999_46521;
var G__46569 = count__46000_46522;
var G__46570 = (i__46001_46523 + (1));
seq__45997_46520 = G__46567;
chunk__45999_46521 = G__46568;
count__46000_46522 = G__46569;
i__46001_46523 = G__46570;
continue;
} else {
var G__46571 = seq__45997_46520;
var G__46572 = chunk__45999_46521;
var G__46573 = count__46000_46522;
var G__46574 = (i__46001_46523 + (1));
seq__45997_46520 = G__46571;
chunk__45999_46521 = G__46572;
count__46000_46522 = G__46573;
i__46001_46523 = G__46574;
continue;
}
} else {
var temp__5753__auto___46575 = cljs.core.seq(seq__45997_46520);
if(temp__5753__auto___46575){
var seq__45997_46576__$1 = temp__5753__auto___46575;
if(cljs.core.chunked_seq_QMARK_(seq__45997_46576__$1)){
var c__4649__auto___46577 = cljs.core.chunk_first(seq__45997_46576__$1);
var G__46578 = cljs.core.chunk_rest(seq__45997_46576__$1);
var G__46579 = c__4649__auto___46577;
var G__46580 = cljs.core.count(c__4649__auto___46577);
var G__46581 = (0);
seq__45997_46520 = G__46578;
chunk__45999_46521 = G__46579;
count__46000_46522 = G__46580;
i__46001_46523 = G__46581;
continue;
} else {
var child_struct_46582 = cljs.core.first(seq__45997_46576__$1);
if((!((child_struct_46582 == null)))){
if(typeof child_struct_46582 === 'string'){
var text_46583 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_46583),child_struct_46582].join(''));
} else {
var children_46584 = shadow.dom.svg_node(child_struct_46582);
if(cljs.core.seq_QMARK_(children_46584)){
var seq__46099_46585 = cljs.core.seq(children_46584);
var chunk__46101_46586 = null;
var count__46102_46587 = (0);
var i__46103_46588 = (0);
while(true){
if((i__46103_46588 < count__46102_46587)){
var child_46592 = chunk__46101_46586.cljs$core$IIndexed$_nth$arity$2(null,i__46103_46588);
if(cljs.core.truth_(child_46592)){
node.appendChild(child_46592);


var G__46593 = seq__46099_46585;
var G__46594 = chunk__46101_46586;
var G__46595 = count__46102_46587;
var G__46596 = (i__46103_46588 + (1));
seq__46099_46585 = G__46593;
chunk__46101_46586 = G__46594;
count__46102_46587 = G__46595;
i__46103_46588 = G__46596;
continue;
} else {
var G__46597 = seq__46099_46585;
var G__46598 = chunk__46101_46586;
var G__46599 = count__46102_46587;
var G__46600 = (i__46103_46588 + (1));
seq__46099_46585 = G__46597;
chunk__46101_46586 = G__46598;
count__46102_46587 = G__46599;
i__46103_46588 = G__46600;
continue;
}
} else {
var temp__5753__auto___46601__$1 = cljs.core.seq(seq__46099_46585);
if(temp__5753__auto___46601__$1){
var seq__46099_46605__$1 = temp__5753__auto___46601__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46099_46605__$1)){
var c__4649__auto___46606 = cljs.core.chunk_first(seq__46099_46605__$1);
var G__46607 = cljs.core.chunk_rest(seq__46099_46605__$1);
var G__46608 = c__4649__auto___46606;
var G__46609 = cljs.core.count(c__4649__auto___46606);
var G__46610 = (0);
seq__46099_46585 = G__46607;
chunk__46101_46586 = G__46608;
count__46102_46587 = G__46609;
i__46103_46588 = G__46610;
continue;
} else {
var child_46611 = cljs.core.first(seq__46099_46605__$1);
if(cljs.core.truth_(child_46611)){
node.appendChild(child_46611);


var G__46612 = cljs.core.next(seq__46099_46605__$1);
var G__46613 = null;
var G__46614 = (0);
var G__46615 = (0);
seq__46099_46585 = G__46612;
chunk__46101_46586 = G__46613;
count__46102_46587 = G__46614;
i__46103_46588 = G__46615;
continue;
} else {
var G__46616 = cljs.core.next(seq__46099_46605__$1);
var G__46617 = null;
var G__46618 = (0);
var G__46619 = (0);
seq__46099_46585 = G__46616;
chunk__46101_46586 = G__46617;
count__46102_46587 = G__46618;
i__46103_46588 = G__46619;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_46584);
}
}


var G__46620 = cljs.core.next(seq__45997_46576__$1);
var G__46621 = null;
var G__46622 = (0);
var G__46623 = (0);
seq__45997_46520 = G__46620;
chunk__45999_46521 = G__46621;
count__46000_46522 = G__46622;
i__46001_46523 = G__46623;
continue;
} else {
var G__46624 = cljs.core.next(seq__45997_46576__$1);
var G__46625 = null;
var G__46626 = (0);
var G__46627 = (0);
seq__45997_46520 = G__46624;
chunk__45999_46521 = G__46625;
count__46000_46522 = G__46626;
i__46001_46523 = G__46627;
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
var len__4829__auto___46632 = arguments.length;
var i__4830__auto___46633 = (0);
while(true){
if((i__4830__auto___46633 < len__4829__auto___46632)){
args__4835__auto__.push((arguments[i__4830__auto___46633]));

var G__46634 = (i__4830__auto___46633 + (1));
i__4830__auto___46633 = G__46634;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46127){
var G__46128 = cljs.core.first(seq46127);
var seq46127__$1 = cljs.core.next(seq46127);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46128,seq46127__$1);
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
var G__46139 = arguments.length;
switch (G__46139) {
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
var c__42443__auto___46644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__42444__auto__ = (function (){var switch__42328__auto__ = (function (state_46155){
var state_val_46156 = (state_46155[(1)]);
if((state_val_46156 === (1))){
var state_46155__$1 = state_46155;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46155__$1,(2),once_or_cleanup);
} else {
if((state_val_46156 === (2))){
var inst_46151 = (state_46155[(2)]);
var inst_46152 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46155__$1 = (function (){var statearr_46157 = state_46155;
(statearr_46157[(7)] = inst_46151);

return statearr_46157;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46155__$1,inst_46152);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__42329__auto__ = null;
var shadow$dom$state_machine__42329__auto____0 = (function (){
var statearr_46158 = [null,null,null,null,null,null,null,null];
(statearr_46158[(0)] = shadow$dom$state_machine__42329__auto__);

(statearr_46158[(1)] = (1));

return statearr_46158;
});
var shadow$dom$state_machine__42329__auto____1 = (function (state_46155){
while(true){
var ret_value__42330__auto__ = (function (){try{while(true){
var result__42331__auto__ = switch__42328__auto__(state_46155);
if(cljs.core.keyword_identical_QMARK_(result__42331__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__42331__auto__;
}
break;
}
}catch (e46159){var ex__42332__auto__ = e46159;
var statearr_46160_46645 = state_46155;
(statearr_46160_46645[(2)] = ex__42332__auto__);


if(cljs.core.seq((state_46155[(4)]))){
var statearr_46161_46646 = state_46155;
(statearr_46161_46646[(1)] = cljs.core.first((state_46155[(4)])));

} else {
throw ex__42332__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__42330__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46647 = state_46155;
state_46155 = G__46647;
continue;
} else {
return ret_value__42330__auto__;
}
break;
}
});
shadow$dom$state_machine__42329__auto__ = function(state_46155){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__42329__auto____0.call(this);
case 1:
return shadow$dom$state_machine__42329__auto____1.call(this,state_46155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__42329__auto____0;
shadow$dom$state_machine__42329__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__42329__auto____1;
return shadow$dom$state_machine__42329__auto__;
})()
})();
var state__42445__auto__ = (function (){var statearr_46164 = f__42444__auto__();
(statearr_46164[(6)] = c__42443__auto___46644);

return statearr_46164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__42445__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
