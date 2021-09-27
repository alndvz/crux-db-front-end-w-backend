goog.provide('articles.form.views');
articles.form.views.field_control = (function articles$form$views$field_control(id,label,control){
var value = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.form.subs","form","articles.form.subs/form",-118228811),id], null));
var update_form = (function (p1__30310_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("articles.form.events","update-form","articles.form.events/update-form",445397880),id,p1__30310_SHARP_.target.value], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.label","label.label",725637336),label], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.control","div.control",1957951243),(control.cljs$core$IFn$_invoke$arity$2 ? control.cljs$core$IFn$_invoke$arity$2(value,update_form) : control.call(null,value,update_form))], null)], null);
});
articles.form.views.text_input = (function articles$form$views$text_input(id,label){
return articles.form.views.field_control(id,label,(function (value,update_form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input","input.input",-850828147),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_form,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),""], null)], null);
}));
});
articles.form.views.select_input = (function articles$form$views$select_input(id,label,options){
return articles.form.views.field_control(id,label,(function (value,update_form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.select","div.select",1512138448),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_form], null),((cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30311_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30311_SHARP_,cljs.core.deref(value));
}),options)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),""], null),"Please select"], null):null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (o){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),o,new cljs.core.Keyword(null,"value","value",305978217),o], null),o], null);
}),options)], null)], null);
}));
});
articles.form.views.text_area = (function articles$form$views$text_area(id,label){
return articles.form.views.field_control(id,label,(function (value,update_form){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea.textarea","textarea.textarea",-1013865997),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),update_form,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),""], null)], null);
}));
});
cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30312_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__30312_SHARP_,"on the code again");
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on the code again"], null)));

//# sourceMappingURL=articles.form.views.js.map
