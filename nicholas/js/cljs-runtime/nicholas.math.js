goog.provide('nicholas.math');
goog.require('cljs.core');
goog.require('reagent.core');
nicholas.math.generate_numbers = (function nicholas$math$generate_numbers(max1,max2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(max1) | (0)),new cljs.core.Keyword(null,"b","b",1482224470),(cljs.core.rand.cljs$core$IFn$_invoke$arity$1(max2) | (0)),new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core._PLUS_], null);
});
nicholas.math.format_number = (function nicholas$math$format_number(num,spaces){
var padding = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(spaces,cljs.core.char$((160))));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.reverse(cljs.core.take.cljs$core$IFn$_invoke$arity$2(spaces,cljs.core.reverse([cljs.core.str.cljs$core$IFn$_invoke$arity$1(padding),cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('')))));
});
nicholas.math.get_emoji = (function nicholas$math$get_emoji(){
var emojis = cljs.core.PersistentVector.fromArray(["\uD83D\uDE00","\uD83D\uDE03","\uD83D\uDE04","\uD83D\uDE01","\uD83D\uDE06","\uD83D\uDE05","\uD83E\uDD23","\uD83D\uDE02","\uD83D\uDE42","\uD83D\uDE43","\uD83D\uDE09","\uD83D\uDE0A","\uD83D\uDE07","\uD83D\uDE0D","\uD83D\uDE18","\uD83D\uDE17","\uD83D\uDE1A","\uD83D\uDE19","\uD83D\uDE0B","\uD83D\uDE1B","\uD83D\uDE1C","\uD83C\uDF47","\uD83C\uDF48","\uD83C\uDF49","\uD83C\uDF4A","\uD83C\uDF4B","\uD83C\uDF4C","\uD83C\uDF4D","\uD83C\uDF4E","\uD83C\uDF4F","\uD83C\uDF50","\uD83C\uDF51","\uD83C\uDF52","\uD83C\uDF53","\uD83E\uDD5D","\uD83C\uDF45","\uD83E\uDD51","\uD83C\uDF46","\uD83E\uDD54","\uD83E\uDD55","\uD83C\uDF3D","\uD83C\uDF36","\uD83E\uDD52","\uD83C\uDF44","\uD83E\uDD5C","\uD83C\uDF30","\uD83C\uDF5E","\uD83E\uDD50","\uD83E\uDD56","\uD83E\uDD5E","\uD83E\uDDC0","\uD83C\uDF56","\uD83C\uDF57","\uD83E\uDD53","\uD83C\uDF54","\uD83C\uDF5F","\uD83C\uDF55","\uD83C\uDF2D","\uD83C\uDF2E","\u26BD"], true);
var total = cljs.core.count(emojis);
var picked_index = (cljs.core.rand.cljs$core$IFn$_invoke$arity$1(total) | (0));
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(emojis,picked_index);
});
nicholas.math.question = (function nicholas$math$question(max1,max2){
var data = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(nicholas.math.generate_numbers(max1,max2));
var map__27081 = cljs.core.deref(data);
var map__27081__$1 = (((((!((map__27081 == null))))?(((((map__27081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27081):map__27081);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27081__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.math.large","div.math.large",666921668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),nicholas.math.format_number(a,(3))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"+",nicholas.math.format_number(b,(2))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.char$((160))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.large.right","input.large.right",49023363),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"size","size",1098693007),(2),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((13),e.charCode)){
var my_answer = parseInt(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.re_seq(/\d/,e.target.value)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(my_answer,(op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(a,b) : op.call(null,a,b)))){
alert(nicholas.math.get_emoji());

(e.target.value = "");

return cljs.core.reset_BANG_(data,nicholas.math.generate_numbers(max1,max2));
} else {
return null;
}
} else {
return null;
}
})], null)], null)], null);
});

//# sourceMappingURL=nicholas.math.js.map