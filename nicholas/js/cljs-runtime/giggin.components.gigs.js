goog.provide('nicholas.components.gigs');
goog.require('cljs.core');
goog.require('nicholas.state');
goog.require('nicholas.helpers');
nicholas.components.gigs.gigs = (function giggin$components$gigs$gigs(){
var add_to_orders = (function (p1__27417_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(nicholas.state.orders,cljs.core.update,p1__27417_SHARP_,cljs.core.inc);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gigs","gigs",1192988250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gigs","div.gigs",-102058002),(function (){var iter__4523__auto__ = (function giggin$components$gigs$gigs_$_iter__27421(s__27422){
return (new cljs.core.LazySeq(null,(function (){
var s__27422__$1 = s__27422;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__27422__$1);
if(temp__5735__auto__){
var s__27422__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27422__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__27422__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__27453 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__27452 = (0);
while(true){
if((i__27452 < size__4522__auto__)){
var map__27454 = cljs.core._nth(c__4521__auto__,i__27452);
var map__27454__$1 = (((((!((map__27454 == null))))?(((((map__27454.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27454.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27454):map__27454);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27454__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27454__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27454__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27454__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27454__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
cljs.core.chunk_append(b__27453,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27452,map__27454,map__27454__$1,id,img,title,price,desc,c__4521__auto__,size__4522__auto__,b__27453,s__27422__$2,temp__5735__auto__,add_to_orders){
return (function (){
return add_to_orders(id);
});})(i__27452,map__27454,map__27454__$1,id,img,title,price,desc,c__4521__auto__,size__4522__auto__,b__27453,s__27422__$2,temp__5735__auto__,add_to_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),nicholas.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desciption","p.gig__desciption",1813040518),desc], null)], null)], null));

var G__27463 = (i__27452 + (1));
i__27452 = G__27463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27453),giggin$components$gigs$gigs_$_iter__27421(cljs.core.chunk_rest(s__27422__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27453),null);
}
} else {
var map__27461 = cljs.core.first(s__27422__$2);
var map__27461__$1 = (((((!((map__27461 == null))))?(((((map__27461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__27461):map__27461);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27461__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var img = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27461__$1,new cljs.core.Keyword(null,"img","img",1442687358));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27461__$1,new cljs.core.Keyword(null,"title","title",636505583));
var price = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27461__$1,new cljs.core.Keyword(null,"price","price",22129180));
var desc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27461__$1,new cljs.core.Keyword(null,"desc","desc",2093485764));
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig","div.gig",585920249),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.gig__artwork","img.gig__artwork",145688453),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),img,new cljs.core.Keyword(null,"alt","alt",-3214426),title], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__body","div.gig__body",-51299878),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.gig__title","div.gig__title",1828713596),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.btn.btn--primary.float--right.tooltip","div.btn.btn--primary.float--right.tooltip",-597010778),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data-tooltip","data-tooltip",121719926),"Add to order",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27461,map__27461__$1,id,img,title,price,desc,s__27422__$2,temp__5735__auto__,add_to_orders){
return (function (){
return add_to_orders(id);
});})(map__27461,map__27461__$1,id,img,title,price,desc,s__27422__$2,temp__5735__auto__,add_to_orders))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.icon.icon--plus","i.icon.icon--plus",-1882059067)], null)], null),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__price","p.gig__price",442531190),nicholas.helpers.format_price(price)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.gig__desciption","p.gig__desciption",1813040518),desc], null)], null)], null),giggin$components$gigs$gigs_$_iter__27421(cljs.core.rest(s__27422__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(cljs.core.vals(cljs.core.deref(nicholas.state.gigs)));
})()], null)], null)], null);
});

//# sourceMappingURL=nicholas.components.gigs.js.map
