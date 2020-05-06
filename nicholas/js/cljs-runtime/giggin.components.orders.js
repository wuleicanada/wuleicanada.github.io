goog.provide('nicholas.components.orders');
goog.require('cljs.core');
goog.require('nicholas.state');
goog.require('nicholas.helpers');
nicholas.components.orders.orders = (function giggin$components$orders$orders(){
var remove_from_orders = (function (p1__27411_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(nicholas.state.orders,cljs.core.dissoc,p1__27411_SHARP_);
});
var remove_all_from_orders = (function (){
return cljs.core.reset_BANG_(nicholas.state.orders,cljs.core.PersistentArrayMap.EMPTY);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aside","aside",1414397537),((cljs.core.empty_QMARK_(cljs.core.deref(nicholas.state.orders)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.empty","div.empty",47401225),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.title","div.title",-1929547732),"You don't have any orders."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.subtitle","div.subtitle",-1871234920),"Click on a + to add an order"], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.order","div.order",-190189494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.body","div.body",-96313067),(function (){var iter__4523__auto__ = (function giggin$components$orders$orders_$_iter__27412(s__27413){
return (new cljs.core.LazySeq(null,(function (){
var s__27413__$1 = s__27413;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27413__$1);
if(temp__5735__auto__){
var s__27413__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27413__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__27413__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__27425 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__27424 = (0);
while(true){
if((i__27424 < size__4522__auto__)){
var vec__27433 = cljs.core._nth(c__4521__auto__,i__27424);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27433,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27433,(1),null);
cljs.core.chunk_append(b__27425,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quant)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),nicholas.helpers.format_price((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quant))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27424,vec__27433,id,quant,c__4521__auto__,size__4522__auto__,b__27425,s__27413__$2,temp__5735__auto__,remove_from_orders,remove_all_from_orders){
return (function (){
return remove_from_orders(id);
});})(i__27424,vec__27433,id,quant,c__4521__auto__,size__4522__auto__,b__27425,s__27413__$2,temp__5735__auto__,remove_from_orders,remove_all_from_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null));

var G__27460 = (i__27424 + (1));
i__27424 = G__27460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27425),giggin$components$orders$orders_$_iter__27412(cljs.core.chunk_rest(s__27413__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27425),null);
}
} else {
var vec__27439 = cljs.core.first(s__27413__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27439,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27439,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.img","div.img",2113685181),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"img","img",1442687358)], null)),new cljs.core.Keyword(null,"alt","alt",-3214426),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null))], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.title","p.title",-1265013094),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"title","title",636505583)], null)))," \u00D7 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(quant)].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),nicholas.helpers.format_price((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null)) * quant))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Remove",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27439,id,quant,s__27413__$2,temp__5735__auto__,remove_from_orders,remove_all_from_orders){
return (function (){
return remove_from_orders(id);
});})(vec__27439,id,quant,s__27413__$2,temp__5735__auto__,remove_from_orders,remove_all_from_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--cross","i.icon.icon--cross",-1116124260)], null)], null)], null)], null),giggin$components$orders$orders_$_iter__27412(cljs.core.rest(s__27413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.deref(nicholas.state.orders));
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.total","div.total",1164460301),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.item","div.item",517680018),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.content","div.content",-298042649),"Total"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.action","div.action",-2064981372),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.price","div.price",1541719866),nicholas.helpers.format_price(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (sum,p__27445){
var vec__27446 = p__27445;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27446,(0),null);
var quant = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27446,(1),null);
return (sum + (quant * cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(nicholas.state.gigs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"price","price",22129180)], null))));
}),(0),cljs.core.deref(nicholas.state.orders)))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn--link.tooltip","button.btn.btn--link.tooltip",-1501154667),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tip","data-tip",-581061709),"Remove all",new cljs.core.Keyword(null,"on-click","on-click",1632826543),remove_all_from_orders], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--delete","i.icon.icon--delete",1739225438)], null)], null)], null)], null)], null))], null);
});

//# sourceMappingURL=nicholas.components.orders.js.map
