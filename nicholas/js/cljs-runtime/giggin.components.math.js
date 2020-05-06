goog.provide('nicholas.components.math');
goog.require('cljs.core');
goog.require('reagent.core');
nicholas.components.math.generate_values = (function giggin$components$math$generate_values(max1,max2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(max1) | (0)),new cljs.core.Keyword(null,"b","b",1482224470),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(max2) | (0)),new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core._PLUS_], null);
});
nicholas.components.math.question = (function giggin$components$math$question(max1,max2){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nicholas.components.math.generate_values(max1,max2));
var map__28265 = cljs.core.deref(data);
var map__28265__$1 = (((((!((map__28265 == null))))?(((((map__28265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28265):map__28265);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28265__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),cljs.core.str.cljs$core$IFn$_invoke$arity$1(a)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"+"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),b], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.charCode)){
var my_answer = parseInt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.re_seq(/\d/,e.target.value)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_answer,(op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(a,b) : op.call(null,a,b)))){
alert("\uD83D\uDE00");

(e.target.value = "");

return cljs.core.reset_BANG_(data,nicholas.components.math.generate_values);
} else {
return null;
}
} else {
return null;
}
})], null)], null)], null);
});

//# sourceMappingURL=nicholas.components.math.js.map
