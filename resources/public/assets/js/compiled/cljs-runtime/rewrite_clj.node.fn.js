goog.provide('rewrite_clj.node.fn');
/**
 * Construct function form.
 */
rewrite_clj.node.fn.construct_fn = (function rewrite_clj$node$fn$construct_fn(syms,vararg,body){
return (new cljs.core.List(null,new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),(new cljs.core.List(null,cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(syms,(cljs.core.truth_(vararg)?(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),(new cljs.core.List(null,vararg,null,(1),null)),(2),null)):null))),(new cljs.core.List(null,body,null,(1),null)),(2),null)),(3),null));
});
/**
 * Get index based on the substring following the parameter's `%`.
 * Zero means vararg.
 */
rewrite_clj.node.fn.sym_index = (function rewrite_clj$node$fn$sym_index(n){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"&")){
return (0);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(n,"")){
return (1);
} else {
if(cljs.core.truth_(cljs.core.re_matches(/\d+/,n))){
return parseInt(n);
} else {
throw (new Error("arg literal must be %, %& or %integer."));

}
}
}
});
/**
 * If symbol starting with `%`, convert to respective gensym.
 */
rewrite_clj.node.fn.symbol__GT_gensym = (function rewrite_clj$node$fn$symbol__GT_gensym(sym_seq,vararg_QMARK_,max_n,sym){
if((sym instanceof cljs.core.Symbol)){
var nm = cljs.core.name(sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nm.indexOf("%"),(0))){
var i = rewrite_clj.node.fn.sym_index(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nm,(1)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(max_n,cljs.core.max,i);

return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sym_seq,i);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Walk the form and create an expand function form.
 */
rewrite_clj.node.fn.fn_walk = (function rewrite_clj$node$fn$fn_walk(form){
var syms = (function (){var iter__4622__auto__ = (function rewrite_clj$node$fn$fn_walk_$_iter__41074(s__41075){
return (new cljs.core.LazySeq(null,(function (){
var s__41075__$1 = s__41075;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__41075__$1);
if(temp__5753__auto__){
var s__41075__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__41075__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__41075__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__41077 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__41076 = (0);
while(true){
if((i__41076 < size__4621__auto__)){
var i = cljs.core._nth(c__4620__auto__,i__41076);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
cljs.core.chunk_append(b__41077,cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')));

var G__41291 = (i__41076 + (1));
i__41076 = G__41291;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__41077),rewrite_clj$node$fn$fn_walk_$_iter__41074(cljs.core.chunk_rest(s__41075__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__41077),null);
}
} else {
var i = cljs.core.first(s__41075__$2);
var base = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(0)))?"rest__":["p",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),"__"].join(''));
var s = cljs.core.name(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(base));
return cljs.core.cons(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([s,"#"].join('')),rewrite_clj$node$fn$fn_walk_$_iter__41074(cljs.core.rest(s__41075__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$0());
})();
var vararg_QMARK_ = false;
var max_n = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var body = clojure.walk.prewalk((function (p1__41071_SHARP_){
var or__4223__auto__ = rewrite_clj.node.fn.symbol__GT_gensym(syms,vararg_QMARK_,max_n,p1__41071_SHARP_);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return p1__41071_SHARP_;
}
}),form);
return rewrite_clj.node.fn.construct_fn(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(max_n),cljs.core.rest(syms)),null,body);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {rewrite_clj.node.protocols.InnerNode}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {rewrite_clj.node.protocols.Node}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
rewrite_clj.node.fn.FnNode = (function (children,__meta,__extmap,__hash){
this.children = children;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(rewrite_clj.node.fn.FnNode.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return this$.rewrite_clj$node$protocols$Node$string$arity$1(null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k41101,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__41119 = k41101;
var G__41119__$1 = (((G__41119 instanceof cljs.core.Keyword))?G__41119.fqn:null);
switch (G__41119__$1) {
case "children":
return self__.children;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k41101,else__4475__auto__);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__41126){
var vec__41128 = p__41126;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41128,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41128,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#rewrite-clj.node.fn.FnNode{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"children","children",-940561982),self__.children],null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__41100){
var self__ = this;
var G__41100__$1 = this;
return (new cljs.core.RecordIter((0),G__41100__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children","children",-940561982)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1740346885 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this41102,other41103){
var self__ = this;
var this41102__$1 = this;
return (((!((other41103 == null)))) && ((((this41102__$1.constructor === other41103.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41102__$1.children,other41103.children)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this41102__$1.__extmap,other41103.__extmap)))))));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$tag$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"fn","fn",-1175266204);
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$printable_only_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$sexpr$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rewrite_clj.node.fn.fn_walk(rewrite_clj.node.protocols.sexprs(self__.children));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$length$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ((3) + rewrite_clj.node.protocols.sum_lengths(self__.children));
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$Node$string$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return ["#(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(rewrite_clj.node.protocols.concat_strings(self__.children)),")"].join('');
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$ = cljs.core.PROTOCOL_SENTINEL);

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$inner_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$children$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.children;
}));

(rewrite_clj.node.fn.FnNode.prototype.rewrite_clj$node$protocols$InnerNode$replace_children$arity$2 = (function (this$,children_SINGLEQUOTE_){
var self__ = this;
var this$__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword(null,"children","children",-940561982),children_SINGLEQUOTE_);
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k41101){
var self__ = this;
var this__4479__auto____$1 = this;
var G__41216 = k41101;
var G__41216__$1 = (((G__41216 instanceof cljs.core.Keyword))?G__41216.fqn:null);
switch (G__41216__$1) {
case "children":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k41101);

}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__41100){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__41220 = cljs.core.keyword_identical_QMARK_;
var expr__41221 = k__4481__auto__;
if(cljs.core.truth_((pred__41220.cljs$core$IFn$_invoke$arity$2 ? pred__41220.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),expr__41221) : pred__41220.call(null,new cljs.core.Keyword(null,"children","children",-940561982),expr__41221)))){
return (new rewrite_clj.node.fn.FnNode(G__41100,self__.__meta,self__.__extmap,null));
} else {
return (new rewrite_clj.node.fn.FnNode(self__.children,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__41100),null));
}
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"children","children",-940561982),self__.children,null))], null),self__.__extmap));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__41100){
var self__ = this;
var this__4471__auto____$1 = this;
return (new rewrite_clj.node.fn.FnNode(self__.children,G__41100,self__.__extmap,self__.__hash));
}));

(rewrite_clj.node.fn.FnNode.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(rewrite_clj.node.fn.FnNode.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null)], null);
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$type = true);

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"rewrite-clj.node.fn/FnNode",null,(1),null));
}));

(rewrite_clj.node.fn.FnNode.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"rewrite-clj.node.fn/FnNode");
}));

/**
 * Positional factory function for rewrite-clj.node.fn/FnNode.
 */
rewrite_clj.node.fn.__GT_FnNode = (function rewrite_clj$node$fn$__GT_FnNode(children){
return (new rewrite_clj.node.fn.FnNode(children,null,null,null));
});

/**
 * Factory function for rewrite-clj.node.fn/FnNode, taking a map of keywords to field values.
 */
rewrite_clj.node.fn.map__GT_FnNode = (function rewrite_clj$node$fn$map__GT_FnNode(G__41107){
var extmap__4512__auto__ = (function (){var G__41251 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__41107,new cljs.core.Keyword(null,"children","children",-940561982));
if(cljs.core.record_QMARK_(G__41107)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__41251);
} else {
return G__41251;
}
})();
return (new rewrite_clj.node.fn.FnNode(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(G__41107),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

/**
 * Create node representing an anonymous function.
 */
rewrite_clj.node.fn.fn_node = (function rewrite_clj$node$fn$fn_node(children){
return rewrite_clj.node.fn.__GT_FnNode(children);
});

//# sourceMappingURL=rewrite_clj.node.fn.js.map
