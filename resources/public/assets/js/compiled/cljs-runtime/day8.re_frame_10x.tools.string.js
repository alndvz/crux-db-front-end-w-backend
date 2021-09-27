goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39592 = arguments.length;
var i__4830__auto___39593 = (0);
while(true){
if((i__4830__auto___39593 < len__4829__auto___39592)){
args__4835__auto__.push((arguments[i__4830__auto___39593]));

var G__39594 = (i__4830__auto___39593 + (1));
i__4830__auto___39593 = G__39594;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39575){
var vec__39576 = p__39575;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39576,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq39565){
var G__39566 = cljs.core.first(seq39565);
var seq39565__$1 = cljs.core.next(seq39565);
var G__39567 = cljs.core.first(seq39565__$1);
var seq39565__$2 = cljs.core.next(seq39565__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39566,G__39567,seq39565__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___39595 = arguments.length;
var i__4830__auto___39596 = (0);
while(true){
if((i__4830__auto___39596 < len__4829__auto___39595)){
args__4835__auto__.push((arguments[i__4830__auto___39596]));

var G__39597 = (i__4830__auto___39596 + (1));
i__4830__auto___39596 = G__39597;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__39587){
var vec__39588 = p__39587;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39588,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4223__auto__ = plural;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq39584){
var G__39585 = cljs.core.first(seq39584);
var seq39584__$1 = cljs.core.next(seq39584);
var G__39586 = cljs.core.first(seq39584__$1);
var seq39584__$2 = cljs.core.next(seq39584__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39585,G__39586,seq39584__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
