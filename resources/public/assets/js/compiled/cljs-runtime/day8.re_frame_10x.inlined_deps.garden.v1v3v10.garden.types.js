goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types');

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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit = (function (unit,magnitude,__meta,__extmap,__hash){
this.unit = unit;
this.magnitude = magnitude;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k31800,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__31806 = k31800;
var G__31806__$1 = (((G__31806 instanceof cljs.core.Keyword))?G__31806.fqn:null);
switch (G__31806__$1) {
case "unit":
return self__.unit;

break;
case "magnitude":
return self__.magnitude;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31800,else__4475__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__31807){
var vec__31808 = p__31807;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31808,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31808,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSUnit{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31799){
var self__ = this;
var G__31799__$1 = this;
return (new cljs.core.RecordIter((0),G__31799__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unit","unit",375175175),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-2144458263 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31801,other31802){
var self__ = this;
var this31801__$1 = this;
return (((!((other31802 == null)))) && ((((this31801__$1.constructor === other31802.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31801__$1.unit,other31802.unit)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31801__$1.magnitude,other31802.magnitude)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31801__$1.__extmap,other31802.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unit","unit",375175175),null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k31800){
var self__ = this;
var this__4479__auto____$1 = this;
var G__31830 = k31800;
var G__31830__$1 = (((G__31830 instanceof cljs.core.Keyword))?G__31830.fqn:null);
switch (G__31830__$1) {
case "unit":
case "magnitude":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31800);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__31799){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__31834 = cljs.core.keyword_identical_QMARK_;
var expr__31835 = k__4481__auto__;
if(cljs.core.truth_((pred__31834.cljs$core$IFn$_invoke$arity$2 ? pred__31834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unit","unit",375175175),expr__31835) : pred__31834.call(null,new cljs.core.Keyword(null,"unit","unit",375175175),expr__31835)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(G__31799,self__.magnitude,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31834.cljs$core$IFn$_invoke$arity$2 ? pred__31834.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__31835) : pred__31834.call(null,new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),expr__31835)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,G__31799,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__31799),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"unit","unit",375175175),self__.unit,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"magnitude","magnitude",1924274222),self__.magnitude,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__31799){
var self__ = this;
var this__4471__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(self__.unit,self__.magnitude,G__31799,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"unit","unit",2015706702,null),new cljs.core.Symbol(null,"magnitude","magnitude",-730161547,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSUnit(unit,magnitude){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(unit,magnitude,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSUnit, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSUnit = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSUnit(G__31803){
var extmap__4512__auto__ = (function (){var G__31845 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31803,new cljs.core.Keyword(null,"unit","unit",375175175),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"magnitude","magnitude",1924274222)], 0));
if(cljs.core.record_QMARK_(G__31803)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31845);
} else {
return G__31845;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSUnit(new cljs.core.Keyword(null,"unit","unit",375175175).cljs$core$IFn$_invoke$arity$1(G__31803),new cljs.core.Keyword(null,"magnitude","magnitude",1924274222).cljs$core$IFn$_invoke$arity$1(G__31803),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction = (function (f,args,__meta,__extmap,__hash){
this.f = f;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k31848,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__31854 = k31848;
var G__31854__$1 = (((G__31854 instanceof cljs.core.Keyword))?G__31854.fqn:null);
switch (G__31854__$1) {
case "f":
return self__.f;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31848,else__4475__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__31855){
var vec__31856 = p__31855;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31856,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31856,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSFunction{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"f","f",-1597136552),self__.f],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31847){
var self__ = this;
var G__31847__$1 = this;
return (new cljs.core.RecordIter((0),G__31847__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (716070664 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31849,other31850){
var self__ = this;
var this31849__$1 = this;
return (((!((other31850 == null)))) && ((((this31849__$1.constructor === other31850.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.f,other31850.f)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.args,other31850.args)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31849__$1.__extmap,other31850.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"f","f",-1597136552),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k31848){
var self__ = this;
var this__4479__auto____$1 = this;
var G__31901 = k31848;
var G__31901__$1 = (((G__31901 instanceof cljs.core.Keyword))?G__31901.fqn:null);
switch (G__31901__$1) {
case "f":
case "args":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31848);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__31847){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__31905 = cljs.core.keyword_identical_QMARK_;
var expr__31906 = k__4481__auto__;
if(cljs.core.truth_((pred__31905.cljs$core$IFn$_invoke$arity$2 ? pred__31905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"f","f",-1597136552),expr__31906) : pred__31905.call(null,new cljs.core.Keyword(null,"f","f",-1597136552),expr__31906)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(G__31847,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31905.cljs$core$IFn$_invoke$arity$2 ? pred__31905.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"args","args",1315556576),expr__31906) : pred__31905.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__31906)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,G__31847,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__31847),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"f","f",-1597136552),self__.f,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"args","args",1315556576),self__.args,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__31847){
var self__ = this;
var this__4471__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(self__.f,self__.args,G__31847,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSFunction(f,args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(f,args,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSFunction, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSFunction = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSFunction(G__31852){
var extmap__4512__auto__ = (function (){var G__31919 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31852,new cljs.core.Keyword(null,"f","f",-1597136552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"args","args",1315556576)], 0));
if(cljs.core.record_QMARK_(G__31852)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31919);
} else {
return G__31919;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSFunction(new cljs.core.Keyword(null,"f","f",-1597136552).cljs$core$IFn$_invoke$arity$1(G__31852),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__31852),null,cljs.core.not_empty(extmap__4512__auto__),null));
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
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule = (function (identifier,value,__meta,__extmap,__hash){
this.identifier = identifier;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k31921,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__31927 = k31921;
var G__31927__$1 = (((G__31927 instanceof cljs.core.Keyword))?G__31927.fqn:null);
switch (G__31927__$1) {
case "identifier":
return self__.identifier;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k31921,else__4475__auto__);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__31930){
var vec__31931 = p__31930;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31931,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31931,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types.CSSAtRule{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__31920){
var self__ = this;
var G__31920__$1 = this;
return (new cljs.core.RecordIter((0),G__31920__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1117572042 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this31922,other31923){
var self__ = this;
var this31922__$1 = this;
return (((!((other31923 == null)))) && ((((this31922__$1.constructor === other31923.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31922__$1.identifier,other31923.identifier)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31922__$1.value,other31923.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this31922__$1.__extmap,other31923.__extmap)))))))));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k31921){
var self__ = this;
var this__4479__auto____$1 = this;
var G__31942 = k31921;
var G__31942__$1 = (((G__31942 instanceof cljs.core.Keyword))?G__31942.fqn:null);
switch (G__31942__$1) {
case "identifier":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k31921);

}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__31920){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__31943 = cljs.core.keyword_identical_QMARK_;
var expr__31944 = k__4481__auto__;
if(cljs.core.truth_((pred__31943.cljs$core$IFn$_invoke$arity$2 ? pred__31943.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__31944) : pred__31943.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498),expr__31944)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(G__31920,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__31943.cljs$core$IFn$_invoke$arity$2 ? pred__31943.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__31944) : pred__31943.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__31944)))){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,G__31920,self__.__meta,self__.__extmap,null));
} else {
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__31920),null));
}
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"identifier","identifier",-805503498),self__.identifier,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__31920){
var self__ = this;
var this__4471__auto____$1 = this;
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(self__.identifier,self__.value,G__31920,self__.__extmap,self__.__hash));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"identifier","identifier",835028029,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$type = true);

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule",null,(1),null));
}));

(day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule");
}));

/**
 * Positional factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$__GT_CSSAtRule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(identifier,value,null,null,null));
});

/**
 * Factory function for day8.re-frame-10x.inlined-deps.garden.v1v3v10.garden.types/CSSAtRule, taking a map of keywords to field values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.map__GT_CSSAtRule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v10$garden$types$map__GT_CSSAtRule(G__31924){
var extmap__4512__auto__ = (function (){var G__31950 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__31924,new cljs.core.Keyword(null,"identifier","identifier",-805503498),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__31924)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__31950);
} else {
return G__31950;
}
})();
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.CSSAtRule(new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(G__31924),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__31924),null,cljs.core.not_empty(extmap__4512__auto__),null));
});


//# sourceMappingURL=day8.re_frame_10x.inlined_deps.garden.v1v3v10.garden.types.js.map
