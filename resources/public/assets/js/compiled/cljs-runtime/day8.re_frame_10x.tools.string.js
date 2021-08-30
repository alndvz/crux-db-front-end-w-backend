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
var len__4829__auto___43046 = arguments.length;
var i__4830__auto___43048 = (0);
while(true){
if((i__4830__auto___43048 < len__4829__auto___43046)){
args__4835__auto__.push((arguments[i__4830__auto___43048]));

var G__43049 = (i__4830__auto___43048 + (1));
i__4830__auto___43048 = G__43049;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__43032){
var vec__43033 = p__43032;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43033,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq43022){
var G__43023 = cljs.core.first(seq43022);
var seq43022__$1 = cljs.core.next(seq43022);
var G__43024 = cljs.core.first(seq43022__$1);
var seq43022__$2 = cljs.core.next(seq43022__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43023,G__43024,seq43022__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___43054 = arguments.length;
var i__4830__auto___43055 = (0);
while(true){
if((i__4830__auto___43055 < len__4829__auto___43054)){
args__4835__auto__.push((arguments[i__4830__auto___43055]));

var G__43056 = (i__4830__auto___43055 + (1));
i__4830__auto___43055 = G__43056;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__43042){
var vec__43043 = p__43042;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43043,(0),null);
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
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq43037){
var G__43038 = cljs.core.first(seq43037);
var seq43037__$1 = cljs.core.next(seq43037);
var G__43039 = cljs.core.first(seq43037__$1);
var seq43037__$2 = cljs.core.next(seq43037__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__43038,G__43039,seq43037__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
