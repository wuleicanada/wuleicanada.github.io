goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_35143 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_35143(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_35145 = (function (this$){
var x__4422__auto__ = (((this$ == null))?null:this$);
var m__4423__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4422__auto__)]);
if((!((m__4423__auto__ == null)))){
return (m__4423__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4423__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4423__auto__.call(null,this$));
} else {
var m__4420__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4420__auto__ == null)))){
return (m__4420__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4420__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4420__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_35145(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__34449 = coll;
var G__34450 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__34449,G__34450) : shadow.dom.lazy_native_coll_seq.call(null,G__34449,G__34450));
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
var or__4120__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4363__auto__,writer__4364__auto__,opt__4365__auto__){
return cljs.core._write(writer__4364__auto__,"shadow.dom/NativeColl");
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
var G__34505 = arguments.length;
switch (G__34505) {
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
var G__34533 = arguments.length;
switch (G__34533) {
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
var G__34537 = arguments.length;
switch (G__34537) {
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
var G__34539 = arguments.length;
switch (G__34539) {
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
var G__34565 = arguments.length;
switch (G__34565) {
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
var G__34574 = arguments.length;
switch (G__34574) {
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

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e34576){if((e34576 instanceof Object)){
var e = e34576;
return console.log("didnt support attachEvent",el,e);
} else {
throw e34576;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4120__auto__ = (!((typeof document !== 'undefined')));
if(or__4120__auto__){
return or__4120__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__34577 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__34578 = null;
var count__34579 = (0);
var i__34580 = (0);
while(true){
if((i__34580 < count__34579)){
var el = chunk__34578.cljs$core$IIndexed$_nth$arity$2(null,i__34580);
var handler_35157__$1 = ((function (seq__34577,chunk__34578,count__34579,i__34580,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34577,chunk__34578,count__34579,i__34580,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35157__$1);


var G__35158 = seq__34577;
var G__35159 = chunk__34578;
var G__35160 = count__34579;
var G__35161 = (i__34580 + (1));
seq__34577 = G__35158;
chunk__34578 = G__35159;
count__34579 = G__35160;
i__34580 = G__35161;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34577);
if(temp__5735__auto__){
var seq__34577__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34577__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34577__$1);
var G__35162 = cljs.core.chunk_rest(seq__34577__$1);
var G__35163 = c__4550__auto__;
var G__35164 = cljs.core.count(c__4550__auto__);
var G__35165 = (0);
seq__34577 = G__35162;
chunk__34578 = G__35163;
count__34579 = G__35164;
i__34580 = G__35165;
continue;
} else {
var el = cljs.core.first(seq__34577__$1);
var handler_35166__$1 = ((function (seq__34577,chunk__34578,count__34579,i__34580,el,seq__34577__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__34577,chunk__34578,count__34579,i__34580,el,seq__34577__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_35166__$1);


var G__35167 = cljs.core.next(seq__34577__$1);
var G__35168 = null;
var G__35169 = (0);
var G__35170 = (0);
seq__34577 = G__35167;
chunk__34578 = G__35168;
count__34579 = G__35169;
i__34580 = G__35170;
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
var G__34582 = arguments.length;
switch (G__34582) {
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
var seq__34604 = cljs.core.seq(events);
var chunk__34605 = null;
var count__34606 = (0);
var i__34607 = (0);
while(true){
if((i__34607 < count__34606)){
var vec__34616 = chunk__34605.cljs$core$IIndexed$_nth$arity$2(null,i__34607);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34616,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35172 = seq__34604;
var G__35173 = chunk__34605;
var G__35174 = count__34606;
var G__35175 = (i__34607 + (1));
seq__34604 = G__35172;
chunk__34605 = G__35173;
count__34606 = G__35174;
i__34607 = G__35175;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34604);
if(temp__5735__auto__){
var seq__34604__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34604__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34604__$1);
var G__35176 = cljs.core.chunk_rest(seq__34604__$1);
var G__35177 = c__4550__auto__;
var G__35178 = cljs.core.count(c__4550__auto__);
var G__35179 = (0);
seq__34604 = G__35176;
chunk__34605 = G__35177;
count__34606 = G__35178;
i__34607 = G__35179;
continue;
} else {
var vec__34620 = cljs.core.first(seq__34604__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34620,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34620,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__35181 = cljs.core.next(seq__34604__$1);
var G__35182 = null;
var G__35183 = (0);
var G__35184 = (0);
seq__34604 = G__35181;
chunk__34605 = G__35182;
count__34606 = G__35183;
i__34607 = G__35184;
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
var seq__34623 = cljs.core.seq(styles);
var chunk__34624 = null;
var count__34625 = (0);
var i__34626 = (0);
while(true){
if((i__34626 < count__34625)){
var vec__34633 = chunk__34624.cljs$core$IIndexed$_nth$arity$2(null,i__34626);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34633,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34633,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35186 = seq__34623;
var G__35187 = chunk__34624;
var G__35188 = count__34625;
var G__35189 = (i__34626 + (1));
seq__34623 = G__35186;
chunk__34624 = G__35187;
count__34625 = G__35188;
i__34626 = G__35189;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34623);
if(temp__5735__auto__){
var seq__34623__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34623__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34623__$1);
var G__35191 = cljs.core.chunk_rest(seq__34623__$1);
var G__35192 = c__4550__auto__;
var G__35193 = cljs.core.count(c__4550__auto__);
var G__35194 = (0);
seq__34623 = G__35191;
chunk__34624 = G__35192;
count__34625 = G__35193;
i__34626 = G__35194;
continue;
} else {
var vec__34636 = cljs.core.first(seq__34623__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34636,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__35196 = cljs.core.next(seq__34623__$1);
var G__35197 = null;
var G__35198 = (0);
var G__35199 = (0);
seq__34623 = G__35196;
chunk__34624 = G__35197;
count__34625 = G__35198;
i__34626 = G__35199;
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
var G__34640_35200 = key;
var G__34640_35201__$1 = (((G__34640_35200 instanceof cljs.core.Keyword))?G__34640_35200.fqn:null);
switch (G__34640_35201__$1) {
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
var ks_35203 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4120__auto__ = goog.string.startsWith(ks_35203,"data-");
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return goog.string.startsWith(ks_35203,"aria-");
}
})())){
el.setAttribute(ks_35203,value);
} else {
(el[ks_35203] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__34672){
var map__34673 = p__34672;
var map__34673__$1 = (((((!((map__34673 == null))))?(((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34673):map__34673);
var props = map__34673__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34673__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__34677 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34677,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__34681 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__34681,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__34681;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__34685 = arguments.length;
switch (G__34685) {
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__34695){
var vec__34697 = p__34695;
var seq__34698 = cljs.core.seq(vec__34697);
var first__34699 = cljs.core.first(seq__34698);
var seq__34698__$1 = cljs.core.next(seq__34698);
var nn = first__34699;
var first__34699__$1 = cljs.core.first(seq__34698__$1);
var seq__34698__$2 = cljs.core.next(seq__34698__$1);
var np = first__34699__$1;
var nc = seq__34698__$2;
var node = vec__34697;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34701 = nn;
var G__34702 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34701,G__34702) : create_fn.call(null,G__34701,G__34702));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__34705 = nn;
var G__34706 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__34705,G__34706) : create_fn.call(null,G__34705,G__34706));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__34708 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34708,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34708,(1),null);
var seq__34713_35207 = cljs.core.seq(node_children);
var chunk__34714_35208 = null;
var count__34715_35209 = (0);
var i__34716_35210 = (0);
while(true){
if((i__34716_35210 < count__34715_35209)){
var child_struct_35212 = chunk__34714_35208.cljs$core$IIndexed$_nth$arity$2(null,i__34716_35210);
var children_35213 = shadow.dom.dom_node(child_struct_35212);
if(cljs.core.seq_QMARK_(children_35213)){
var seq__34738_35214 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35213));
var chunk__34740_35215 = null;
var count__34741_35216 = (0);
var i__34742_35217 = (0);
while(true){
if((i__34742_35217 < count__34741_35216)){
var child_35218 = chunk__34740_35215.cljs$core$IIndexed$_nth$arity$2(null,i__34742_35217);
if(cljs.core.truth_(child_35218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35218);


var G__35219 = seq__34738_35214;
var G__35220 = chunk__34740_35215;
var G__35221 = count__34741_35216;
var G__35222 = (i__34742_35217 + (1));
seq__34738_35214 = G__35219;
chunk__34740_35215 = G__35220;
count__34741_35216 = G__35221;
i__34742_35217 = G__35222;
continue;
} else {
var G__35223 = seq__34738_35214;
var G__35224 = chunk__34740_35215;
var G__35225 = count__34741_35216;
var G__35226 = (i__34742_35217 + (1));
seq__34738_35214 = G__35223;
chunk__34740_35215 = G__35224;
count__34741_35216 = G__35225;
i__34742_35217 = G__35226;
continue;
}
} else {
var temp__5735__auto___35227 = cljs.core.seq(seq__34738_35214);
if(temp__5735__auto___35227){
var seq__34738_35228__$1 = temp__5735__auto___35227;
if(cljs.core.chunked_seq_QMARK_(seq__34738_35228__$1)){
var c__4550__auto___35229 = cljs.core.chunk_first(seq__34738_35228__$1);
var G__35230 = cljs.core.chunk_rest(seq__34738_35228__$1);
var G__35231 = c__4550__auto___35229;
var G__35232 = cljs.core.count(c__4550__auto___35229);
var G__35233 = (0);
seq__34738_35214 = G__35230;
chunk__34740_35215 = G__35231;
count__34741_35216 = G__35232;
i__34742_35217 = G__35233;
continue;
} else {
var child_35235 = cljs.core.first(seq__34738_35228__$1);
if(cljs.core.truth_(child_35235)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35235);


var G__35236 = cljs.core.next(seq__34738_35228__$1);
var G__35237 = null;
var G__35238 = (0);
var G__35239 = (0);
seq__34738_35214 = G__35236;
chunk__34740_35215 = G__35237;
count__34741_35216 = G__35238;
i__34742_35217 = G__35239;
continue;
} else {
var G__35240 = cljs.core.next(seq__34738_35228__$1);
var G__35241 = null;
var G__35242 = (0);
var G__35243 = (0);
seq__34738_35214 = G__35240;
chunk__34740_35215 = G__35241;
count__34741_35216 = G__35242;
i__34742_35217 = G__35243;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35213);
}


var G__35244 = seq__34713_35207;
var G__35245 = chunk__34714_35208;
var G__35246 = count__34715_35209;
var G__35247 = (i__34716_35210 + (1));
seq__34713_35207 = G__35244;
chunk__34714_35208 = G__35245;
count__34715_35209 = G__35246;
i__34716_35210 = G__35247;
continue;
} else {
var temp__5735__auto___35248 = cljs.core.seq(seq__34713_35207);
if(temp__5735__auto___35248){
var seq__34713_35249__$1 = temp__5735__auto___35248;
if(cljs.core.chunked_seq_QMARK_(seq__34713_35249__$1)){
var c__4550__auto___35250 = cljs.core.chunk_first(seq__34713_35249__$1);
var G__35251 = cljs.core.chunk_rest(seq__34713_35249__$1);
var G__35252 = c__4550__auto___35250;
var G__35253 = cljs.core.count(c__4550__auto___35250);
var G__35254 = (0);
seq__34713_35207 = G__35251;
chunk__34714_35208 = G__35252;
count__34715_35209 = G__35253;
i__34716_35210 = G__35254;
continue;
} else {
var child_struct_35255 = cljs.core.first(seq__34713_35249__$1);
var children_35256 = shadow.dom.dom_node(child_struct_35255);
if(cljs.core.seq_QMARK_(children_35256)){
var seq__34750_35258 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_35256));
var chunk__34752_35259 = null;
var count__34753_35260 = (0);
var i__34754_35261 = (0);
while(true){
if((i__34754_35261 < count__34753_35260)){
var child_35264 = chunk__34752_35259.cljs$core$IIndexed$_nth$arity$2(null,i__34754_35261);
if(cljs.core.truth_(child_35264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35264);


var G__35265 = seq__34750_35258;
var G__35266 = chunk__34752_35259;
var G__35267 = count__34753_35260;
var G__35268 = (i__34754_35261 + (1));
seq__34750_35258 = G__35265;
chunk__34752_35259 = G__35266;
count__34753_35260 = G__35267;
i__34754_35261 = G__35268;
continue;
} else {
var G__35269 = seq__34750_35258;
var G__35270 = chunk__34752_35259;
var G__35271 = count__34753_35260;
var G__35272 = (i__34754_35261 + (1));
seq__34750_35258 = G__35269;
chunk__34752_35259 = G__35270;
count__34753_35260 = G__35271;
i__34754_35261 = G__35272;
continue;
}
} else {
var temp__5735__auto___35273__$1 = cljs.core.seq(seq__34750_35258);
if(temp__5735__auto___35273__$1){
var seq__34750_35274__$1 = temp__5735__auto___35273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__34750_35274__$1)){
var c__4550__auto___35276 = cljs.core.chunk_first(seq__34750_35274__$1);
var G__35277 = cljs.core.chunk_rest(seq__34750_35274__$1);
var G__35278 = c__4550__auto___35276;
var G__35279 = cljs.core.count(c__4550__auto___35276);
var G__35280 = (0);
seq__34750_35258 = G__35277;
chunk__34752_35259 = G__35278;
count__34753_35260 = G__35279;
i__34754_35261 = G__35280;
continue;
} else {
var child_35281 = cljs.core.first(seq__34750_35274__$1);
if(cljs.core.truth_(child_35281)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_35281);


var G__35283 = cljs.core.next(seq__34750_35274__$1);
var G__35284 = null;
var G__35285 = (0);
var G__35286 = (0);
seq__34750_35258 = G__35283;
chunk__34752_35259 = G__35284;
count__34753_35260 = G__35285;
i__34754_35261 = G__35286;
continue;
} else {
var G__35287 = cljs.core.next(seq__34750_35274__$1);
var G__35288 = null;
var G__35289 = (0);
var G__35290 = (0);
seq__34750_35258 = G__35287;
chunk__34752_35259 = G__35288;
count__34753_35260 = G__35289;
i__34754_35261 = G__35290;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_35256);
}


var G__35292 = cljs.core.next(seq__34713_35249__$1);
var G__35293 = null;
var G__35294 = (0);
var G__35295 = (0);
seq__34713_35207 = G__35292;
chunk__34714_35208 = G__35293;
count__34715_35209 = G__35294;
i__34716_35210 = G__35295;
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
var seq__34759 = cljs.core.seq(node);
var chunk__34760 = null;
var count__34761 = (0);
var i__34762 = (0);
while(true){
if((i__34762 < count__34761)){
var n = chunk__34760.cljs$core$IIndexed$_nth$arity$2(null,i__34762);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35296 = seq__34759;
var G__35297 = chunk__34760;
var G__35298 = count__34761;
var G__35299 = (i__34762 + (1));
seq__34759 = G__35296;
chunk__34760 = G__35297;
count__34761 = G__35298;
i__34762 = G__35299;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34759);
if(temp__5735__auto__){
var seq__34759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34759__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34759__$1);
var G__35303 = cljs.core.chunk_rest(seq__34759__$1);
var G__35304 = c__4550__auto__;
var G__35305 = cljs.core.count(c__4550__auto__);
var G__35306 = (0);
seq__34759 = G__35303;
chunk__34760 = G__35304;
count__34761 = G__35305;
i__34762 = G__35306;
continue;
} else {
var n = cljs.core.first(seq__34759__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__35307 = cljs.core.next(seq__34759__$1);
var G__35308 = null;
var G__35309 = (0);
var G__35310 = (0);
seq__34759 = G__35307;
chunk__34760 = G__35308;
count__34761 = G__35309;
i__34762 = G__35310;
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
var G__34776 = arguments.length;
switch (G__34776) {
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
var G__34782 = arguments.length;
switch (G__34782) {
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
var G__34797 = arguments.length;
switch (G__34797) {
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
var or__4120__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
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
var args__4736__auto__ = [];
var len__4730__auto___35318 = arguments.length;
var i__4731__auto___35319 = (0);
while(true){
if((i__4731__auto___35319 < len__4730__auto___35318)){
args__4736__auto__.push((arguments[i__4731__auto___35319]));

var G__35320 = (i__4731__auto___35319 + (1));
i__4731__auto___35319 = G__35320;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__34819_35321 = cljs.core.seq(nodes);
var chunk__34820_35322 = null;
var count__34821_35323 = (0);
var i__34822_35324 = (0);
while(true){
if((i__34822_35324 < count__34821_35323)){
var node_35325 = chunk__34820_35322.cljs$core$IIndexed$_nth$arity$2(null,i__34822_35324);
fragment.appendChild(shadow.dom._to_dom(node_35325));


var G__35326 = seq__34819_35321;
var G__35327 = chunk__34820_35322;
var G__35328 = count__34821_35323;
var G__35329 = (i__34822_35324 + (1));
seq__34819_35321 = G__35326;
chunk__34820_35322 = G__35327;
count__34821_35323 = G__35328;
i__34822_35324 = G__35329;
continue;
} else {
var temp__5735__auto___35330 = cljs.core.seq(seq__34819_35321);
if(temp__5735__auto___35330){
var seq__34819_35331__$1 = temp__5735__auto___35330;
if(cljs.core.chunked_seq_QMARK_(seq__34819_35331__$1)){
var c__4550__auto___35332 = cljs.core.chunk_first(seq__34819_35331__$1);
var G__35333 = cljs.core.chunk_rest(seq__34819_35331__$1);
var G__35334 = c__4550__auto___35332;
var G__35335 = cljs.core.count(c__4550__auto___35332);
var G__35336 = (0);
seq__34819_35321 = G__35333;
chunk__34820_35322 = G__35334;
count__34821_35323 = G__35335;
i__34822_35324 = G__35336;
continue;
} else {
var node_35337 = cljs.core.first(seq__34819_35331__$1);
fragment.appendChild(shadow.dom._to_dom(node_35337));


var G__35338 = cljs.core.next(seq__34819_35331__$1);
var G__35339 = null;
var G__35340 = (0);
var G__35341 = (0);
seq__34819_35321 = G__35338;
chunk__34820_35322 = G__35339;
count__34821_35323 = G__35340;
i__34822_35324 = G__35341;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq34815){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq34815));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__34826_35342 = cljs.core.seq(scripts);
var chunk__34827_35343 = null;
var count__34828_35344 = (0);
var i__34829_35345 = (0);
while(true){
if((i__34829_35345 < count__34828_35344)){
var vec__34838_35346 = chunk__34827_35343.cljs$core$IIndexed$_nth$arity$2(null,i__34829_35345);
var script_tag_35347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34838_35346,(0),null);
var script_body_35348 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34838_35346,(1),null);
eval(script_body_35348);


var G__35349 = seq__34826_35342;
var G__35350 = chunk__34827_35343;
var G__35351 = count__34828_35344;
var G__35352 = (i__34829_35345 + (1));
seq__34826_35342 = G__35349;
chunk__34827_35343 = G__35350;
count__34828_35344 = G__35351;
i__34829_35345 = G__35352;
continue;
} else {
var temp__5735__auto___35353 = cljs.core.seq(seq__34826_35342);
if(temp__5735__auto___35353){
var seq__34826_35354__$1 = temp__5735__auto___35353;
if(cljs.core.chunked_seq_QMARK_(seq__34826_35354__$1)){
var c__4550__auto___35355 = cljs.core.chunk_first(seq__34826_35354__$1);
var G__35356 = cljs.core.chunk_rest(seq__34826_35354__$1);
var G__35357 = c__4550__auto___35355;
var G__35358 = cljs.core.count(c__4550__auto___35355);
var G__35359 = (0);
seq__34826_35342 = G__35356;
chunk__34827_35343 = G__35357;
count__34828_35344 = G__35358;
i__34829_35345 = G__35359;
continue;
} else {
var vec__34842_35360 = cljs.core.first(seq__34826_35354__$1);
var script_tag_35361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842_35360,(0),null);
var script_body_35362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34842_35360,(1),null);
eval(script_body_35362);


var G__35363 = cljs.core.next(seq__34826_35354__$1);
var G__35364 = null;
var G__35365 = (0);
var G__35366 = (0);
seq__34826_35342 = G__35363;
chunk__34827_35343 = G__35364;
count__34828_35344 = G__35365;
i__34829_35345 = G__35366;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__34845){
var vec__34846 = p__34845;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34846,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34846,(1),null);
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
var G__34851 = arguments.length;
switch (G__34851) {
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
var seq__34867 = cljs.core.seq(style_keys);
var chunk__34868 = null;
var count__34869 = (0);
var i__34870 = (0);
while(true){
if((i__34870 < count__34869)){
var it = chunk__34868.cljs$core$IIndexed$_nth$arity$2(null,i__34870);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35368 = seq__34867;
var G__35369 = chunk__34868;
var G__35370 = count__34869;
var G__35371 = (i__34870 + (1));
seq__34867 = G__35368;
chunk__34868 = G__35369;
count__34869 = G__35370;
i__34870 = G__35371;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__34867);
if(temp__5735__auto__){
var seq__34867__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__34867__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__34867__$1);
var G__35372 = cljs.core.chunk_rest(seq__34867__$1);
var G__35373 = c__4550__auto__;
var G__35374 = cljs.core.count(c__4550__auto__);
var G__35375 = (0);
seq__34867 = G__35372;
chunk__34868 = G__35373;
count__34869 = G__35374;
i__34870 = G__35375;
continue;
} else {
var it = cljs.core.first(seq__34867__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__35376 = cljs.core.next(seq__34867__$1);
var G__35377 = null;
var G__35378 = (0);
var G__35379 = (0);
seq__34867 = G__35376;
chunk__34868 = G__35377;
count__34869 = G__35378;
i__34870 = G__35379;
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
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34876,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34885 = k34876;
var G__34885__$1 = (((G__34885 instanceof cljs.core.Keyword))?G__34885.fqn:null);
switch (G__34885__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34876,else__4377__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34887){
var vec__34888 = p__34887;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34888,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34875){
var self__ = this;
var G__34875__$1 = this;
return (new cljs.core.RecordIter((0),G__34875__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34877,other34878){
var self__ = this;
var this34877__$1 = this;
return (((!((other34878 == null)))) && ((this34877__$1.constructor === other34878.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34877__$1.x,other34878.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34877__$1.y,other34878.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34877__$1.__extmap,other34878.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34875){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34902 = cljs.core.keyword_identical_QMARK_;
var expr__34903 = k__4382__auto__;
if(cljs.core.truth_((pred__34902.cljs$core$IFn$_invoke$arity$2 ? pred__34902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__34903) : pred__34902.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__34903)))){
return (new shadow.dom.Coordinate(G__34875,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34902.cljs$core$IFn$_invoke$arity$2 ? pred__34902.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__34903) : pred__34902.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__34903)))){
return (new shadow.dom.Coordinate(self__.x,G__34875,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34875),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34875){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__34875,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Coordinate");
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__34881){
var extmap__4413__auto__ = (function (){var G__34913 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34881,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__34881)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34913);
} else {
return G__34913;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__34881),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__34881),null,cljs.core.not_empty(extmap__4413__auto__),null));
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
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4374__auto__,k__4375__auto__){
var self__ = this;
var this__4374__auto____$1 = this;
return this__4374__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4375__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4376__auto__,k34922,else__4377__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var G__34931 = k34922;
var G__34931__$1 = (((G__34931 instanceof cljs.core.Keyword))?G__34931.fqn:null);
switch (G__34931__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k34922,else__4377__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4393__auto__,f__4394__auto__,init__4395__auto__){
var self__ = this;
var this__4393__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4396__auto__,p__34934){
var vec__34935 = p__34934;
var k__4397__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935,(0),null);
var v__4398__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34935,(1),null);
return (f__4394__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4394__auto__.cljs$core$IFn$_invoke$arity$3(ret__4396__auto__,k__4397__auto__,v__4398__auto__) : f__4394__auto__.call(null,ret__4396__auto__,k__4397__auto__,v__4398__auto__));
}),init__4395__auto__,this__4393__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4388__auto__,writer__4389__auto__,opts__4390__auto__){
var self__ = this;
var this__4388__auto____$1 = this;
var pr_pair__4391__auto__ = (function (keyval__4392__auto__){
return cljs.core.pr_sequential_writer(writer__4389__auto__,cljs.core.pr_writer,""," ","",opts__4390__auto__,keyval__4392__auto__);
});
return cljs.core.pr_sequential_writer(writer__4389__auto__,pr_pair__4391__auto__,"#shadow.dom.Size{",", ","}",opts__4390__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__34921){
var self__ = this;
var G__34921__$1 = this;
return (new cljs.core.RecordIter((0),G__34921__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4372__auto__){
var self__ = this;
var this__4372__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4369__auto__){
var self__ = this;
var this__4369__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4370__auto__){
var self__ = this;
var this__4370__auto____$1 = this;
var h__4232__auto__ = self__.__hash;
if((!((h__4232__auto__ == null)))){
return h__4232__auto__;
} else {
var h__4232__auto____$1 = (function (coll__4371__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4371__auto__));
})(this__4370__auto____$1);
(self__.__hash = h__4232__auto____$1);

return h__4232__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this34923,other34924){
var self__ = this;
var this34923__$1 = this;
return (((!((other34924 == null)))) && ((this34923__$1.constructor === other34924.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34923__$1.w,other34924.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34923__$1.h,other34924.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this34923__$1.__extmap,other34924.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4383__auto__,k__4384__auto__){
var self__ = this;
var this__4383__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4384__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4383__auto____$1),self__.__meta),k__4384__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4384__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4381__auto__,k__4382__auto__,G__34921){
var self__ = this;
var this__4381__auto____$1 = this;
var pred__34951 = cljs.core.keyword_identical_QMARK_;
var expr__34952 = k__4382__auto__;
if(cljs.core.truth_((pred__34951.cljs$core$IFn$_invoke$arity$2 ? pred__34951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__34952) : pred__34951.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__34952)))){
return (new shadow.dom.Size(G__34921,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__34951.cljs$core$IFn$_invoke$arity$2 ? pred__34951.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__34952) : pred__34951.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__34952)))){
return (new shadow.dom.Size(self__.w,G__34921,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4382__auto__,G__34921),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4386__auto__){
var self__ = this;
var this__4386__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4373__auto__,G__34921){
var self__ = this;
var this__4373__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__34921,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4379__auto__,entry__4380__auto__){
var self__ = this;
var this__4379__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4380__auto__)){
return this__4379__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4380__auto__,(0)),cljs.core._nth(entry__4380__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4379__auto____$1,entry__4380__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4417__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4417__auto__,writer__4418__auto__){
return cljs.core._write(writer__4418__auto__,"shadow.dom/Size");
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__34926){
var extmap__4413__auto__ = (function (){var G__34962 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__34926,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__34926)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__34962);
} else {
return G__34962;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__34926),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__34926),null,cljs.core.not_empty(extmap__4413__auto__),null));
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
var a__4604__auto__ = opts;
var l__4605__auto__ = a__4604__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4605__auto__)){
var G__35399 = (i + (1));
var G__35400 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__35399;
ret = G__35400;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34974){
var vec__34975 = p__34974;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34975,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__34979 = arguments.length;
switch (G__34979) {
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
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
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
var G__35409 = ps;
var G__35410 = (i + (1));
el__$1 = G__35409;
i = G__35410;
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
var vec__34992 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34992,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__34997_35414 = cljs.core.seq(props);
var chunk__34998_35415 = null;
var count__34999_35416 = (0);
var i__35000_35417 = (0);
while(true){
if((i__35000_35417 < count__34999_35416)){
var vec__35012_35421 = chunk__34998_35415.cljs$core$IIndexed$_nth$arity$2(null,i__35000_35417);
var k_35422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35012_35421,(0),null);
var v_35423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35012_35421,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_35422);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35422),v_35423);


var G__35424 = seq__34997_35414;
var G__35425 = chunk__34998_35415;
var G__35426 = count__34999_35416;
var G__35427 = (i__35000_35417 + (1));
seq__34997_35414 = G__35424;
chunk__34998_35415 = G__35425;
count__34999_35416 = G__35426;
i__35000_35417 = G__35427;
continue;
} else {
var temp__5735__auto___35428 = cljs.core.seq(seq__34997_35414);
if(temp__5735__auto___35428){
var seq__34997_35429__$1 = temp__5735__auto___35428;
if(cljs.core.chunked_seq_QMARK_(seq__34997_35429__$1)){
var c__4550__auto___35430 = cljs.core.chunk_first(seq__34997_35429__$1);
var G__35431 = cljs.core.chunk_rest(seq__34997_35429__$1);
var G__35432 = c__4550__auto___35430;
var G__35433 = cljs.core.count(c__4550__auto___35430);
var G__35434 = (0);
seq__34997_35414 = G__35431;
chunk__34998_35415 = G__35432;
count__34999_35416 = G__35433;
i__35000_35417 = G__35434;
continue;
} else {
var vec__35019_35435 = cljs.core.first(seq__34997_35429__$1);
var k_35436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019_35435,(0),null);
var v_35437 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35019_35435,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_35436);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_35436),v_35437);


var G__35438 = cljs.core.next(seq__34997_35429__$1);
var G__35439 = null;
var G__35440 = (0);
var G__35441 = (0);
seq__34997_35414 = G__35438;
chunk__34998_35415 = G__35439;
count__34999_35416 = G__35440;
i__35000_35417 = G__35441;
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
var vec__35027 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35027,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35027,(1),null);
var seq__35030_35445 = cljs.core.seq(node_children);
var chunk__35032_35446 = null;
var count__35033_35447 = (0);
var i__35034_35448 = (0);
while(true){
if((i__35034_35448 < count__35033_35447)){
var child_struct_35449 = chunk__35032_35446.cljs$core$IIndexed$_nth$arity$2(null,i__35034_35448);
if((!((child_struct_35449 == null)))){
if(typeof child_struct_35449 === 'string'){
var text_35450 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35450),child_struct_35449].join(''));
} else {
var children_35451 = shadow.dom.svg_node(child_struct_35449);
if(cljs.core.seq_QMARK_(children_35451)){
var seq__35068_35452 = cljs.core.seq(children_35451);
var chunk__35070_35453 = null;
var count__35071_35454 = (0);
var i__35072_35455 = (0);
while(true){
if((i__35072_35455 < count__35071_35454)){
var child_35456 = chunk__35070_35453.cljs$core$IIndexed$_nth$arity$2(null,i__35072_35455);
if(cljs.core.truth_(child_35456)){
node.appendChild(child_35456);


var G__35457 = seq__35068_35452;
var G__35458 = chunk__35070_35453;
var G__35459 = count__35071_35454;
var G__35460 = (i__35072_35455 + (1));
seq__35068_35452 = G__35457;
chunk__35070_35453 = G__35458;
count__35071_35454 = G__35459;
i__35072_35455 = G__35460;
continue;
} else {
var G__35461 = seq__35068_35452;
var G__35462 = chunk__35070_35453;
var G__35463 = count__35071_35454;
var G__35464 = (i__35072_35455 + (1));
seq__35068_35452 = G__35461;
chunk__35070_35453 = G__35462;
count__35071_35454 = G__35463;
i__35072_35455 = G__35464;
continue;
}
} else {
var temp__5735__auto___35465 = cljs.core.seq(seq__35068_35452);
if(temp__5735__auto___35465){
var seq__35068_35466__$1 = temp__5735__auto___35465;
if(cljs.core.chunked_seq_QMARK_(seq__35068_35466__$1)){
var c__4550__auto___35467 = cljs.core.chunk_first(seq__35068_35466__$1);
var G__35468 = cljs.core.chunk_rest(seq__35068_35466__$1);
var G__35469 = c__4550__auto___35467;
var G__35470 = cljs.core.count(c__4550__auto___35467);
var G__35471 = (0);
seq__35068_35452 = G__35468;
chunk__35070_35453 = G__35469;
count__35071_35454 = G__35470;
i__35072_35455 = G__35471;
continue;
} else {
var child_35473 = cljs.core.first(seq__35068_35466__$1);
if(cljs.core.truth_(child_35473)){
node.appendChild(child_35473);


var G__35474 = cljs.core.next(seq__35068_35466__$1);
var G__35475 = null;
var G__35476 = (0);
var G__35477 = (0);
seq__35068_35452 = G__35474;
chunk__35070_35453 = G__35475;
count__35071_35454 = G__35476;
i__35072_35455 = G__35477;
continue;
} else {
var G__35481 = cljs.core.next(seq__35068_35466__$1);
var G__35482 = null;
var G__35483 = (0);
var G__35484 = (0);
seq__35068_35452 = G__35481;
chunk__35070_35453 = G__35482;
count__35071_35454 = G__35483;
i__35072_35455 = G__35484;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35451);
}
}


var G__35485 = seq__35030_35445;
var G__35486 = chunk__35032_35446;
var G__35487 = count__35033_35447;
var G__35488 = (i__35034_35448 + (1));
seq__35030_35445 = G__35485;
chunk__35032_35446 = G__35486;
count__35033_35447 = G__35487;
i__35034_35448 = G__35488;
continue;
} else {
var G__35489 = seq__35030_35445;
var G__35490 = chunk__35032_35446;
var G__35491 = count__35033_35447;
var G__35492 = (i__35034_35448 + (1));
seq__35030_35445 = G__35489;
chunk__35032_35446 = G__35490;
count__35033_35447 = G__35491;
i__35034_35448 = G__35492;
continue;
}
} else {
var temp__5735__auto___35493 = cljs.core.seq(seq__35030_35445);
if(temp__5735__auto___35493){
var seq__35030_35494__$1 = temp__5735__auto___35493;
if(cljs.core.chunked_seq_QMARK_(seq__35030_35494__$1)){
var c__4550__auto___35495 = cljs.core.chunk_first(seq__35030_35494__$1);
var G__35496 = cljs.core.chunk_rest(seq__35030_35494__$1);
var G__35497 = c__4550__auto___35495;
var G__35498 = cljs.core.count(c__4550__auto___35495);
var G__35499 = (0);
seq__35030_35445 = G__35496;
chunk__35032_35446 = G__35497;
count__35033_35447 = G__35498;
i__35034_35448 = G__35499;
continue;
} else {
var child_struct_35500 = cljs.core.first(seq__35030_35494__$1);
if((!((child_struct_35500 == null)))){
if(typeof child_struct_35500 === 'string'){
var text_35501 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_35501),child_struct_35500].join(''));
} else {
var children_35502 = shadow.dom.svg_node(child_struct_35500);
if(cljs.core.seq_QMARK_(children_35502)){
var seq__35083_35503 = cljs.core.seq(children_35502);
var chunk__35085_35504 = null;
var count__35086_35505 = (0);
var i__35087_35506 = (0);
while(true){
if((i__35087_35506 < count__35086_35505)){
var child_35507 = chunk__35085_35504.cljs$core$IIndexed$_nth$arity$2(null,i__35087_35506);
if(cljs.core.truth_(child_35507)){
node.appendChild(child_35507);


var G__35508 = seq__35083_35503;
var G__35509 = chunk__35085_35504;
var G__35510 = count__35086_35505;
var G__35511 = (i__35087_35506 + (1));
seq__35083_35503 = G__35508;
chunk__35085_35504 = G__35509;
count__35086_35505 = G__35510;
i__35087_35506 = G__35511;
continue;
} else {
var G__35512 = seq__35083_35503;
var G__35513 = chunk__35085_35504;
var G__35514 = count__35086_35505;
var G__35515 = (i__35087_35506 + (1));
seq__35083_35503 = G__35512;
chunk__35085_35504 = G__35513;
count__35086_35505 = G__35514;
i__35087_35506 = G__35515;
continue;
}
} else {
var temp__5735__auto___35516__$1 = cljs.core.seq(seq__35083_35503);
if(temp__5735__auto___35516__$1){
var seq__35083_35517__$1 = temp__5735__auto___35516__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35083_35517__$1)){
var c__4550__auto___35518 = cljs.core.chunk_first(seq__35083_35517__$1);
var G__35519 = cljs.core.chunk_rest(seq__35083_35517__$1);
var G__35520 = c__4550__auto___35518;
var G__35521 = cljs.core.count(c__4550__auto___35518);
var G__35522 = (0);
seq__35083_35503 = G__35519;
chunk__35085_35504 = G__35520;
count__35086_35505 = G__35521;
i__35087_35506 = G__35522;
continue;
} else {
var child_35523 = cljs.core.first(seq__35083_35517__$1);
if(cljs.core.truth_(child_35523)){
node.appendChild(child_35523);


var G__35524 = cljs.core.next(seq__35083_35517__$1);
var G__35525 = null;
var G__35526 = (0);
var G__35527 = (0);
seq__35083_35503 = G__35524;
chunk__35085_35504 = G__35525;
count__35086_35505 = G__35526;
i__35087_35506 = G__35527;
continue;
} else {
var G__35528 = cljs.core.next(seq__35083_35517__$1);
var G__35529 = null;
var G__35530 = (0);
var G__35531 = (0);
seq__35083_35503 = G__35528;
chunk__35085_35504 = G__35529;
count__35086_35505 = G__35530;
i__35087_35506 = G__35531;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_35502);
}
}


var G__35532 = cljs.core.next(seq__35030_35494__$1);
var G__35533 = null;
var G__35534 = (0);
var G__35535 = (0);
seq__35030_35445 = G__35532;
chunk__35032_35446 = G__35533;
count__35033_35447 = G__35534;
i__35034_35448 = G__35535;
continue;
} else {
var G__35536 = cljs.core.next(seq__35030_35494__$1);
var G__35537 = null;
var G__35538 = (0);
var G__35539 = (0);
seq__35030_35445 = G__35536;
chunk__35032_35446 = G__35537;
count__35033_35447 = G__35538;
i__35034_35448 = G__35539;
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
var args__4736__auto__ = [];
var len__4730__auto___35540 = arguments.length;
var i__4731__auto___35541 = (0);
while(true){
if((i__4731__auto___35541 < len__4730__auto___35540)){
args__4736__auto__.push((arguments[i__4731__auto___35541]));

var G__35542 = (i__4731__auto___35541 + (1));
i__4731__auto___35541 = G__35542;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq35100){
var G__35101 = cljs.core.first(seq35100);
var seq35100__$1 = cljs.core.next(seq35100);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35101,seq35100__$1);
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
var G__35110 = arguments.length;
switch (G__35110) {
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

if(cljs.core.truth_((function (){var and__4109__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4109__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4109__auto__;
}
})())){
var c__32792__auto___35546 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32793__auto__ = (function (){var switch__32739__auto__ = (function (state_35121){
var state_val_35122 = (state_35121[(1)]);
if((state_val_35122 === (1))){
var state_35121__$1 = state_35121;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35121__$1,(2),once_or_cleanup);
} else {
if((state_val_35122 === (2))){
var inst_35118 = (state_35121[(2)]);
var inst_35119 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_35121__$1 = (function (){var statearr_35125 = state_35121;
(statearr_35125[(7)] = inst_35118);

return statearr_35125;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35121__$1,inst_35119);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32740__auto__ = null;
var shadow$dom$state_machine__32740__auto____0 = (function (){
var statearr_35127 = [null,null,null,null,null,null,null,null];
(statearr_35127[(0)] = shadow$dom$state_machine__32740__auto__);

(statearr_35127[(1)] = (1));

return statearr_35127;
});
var shadow$dom$state_machine__32740__auto____1 = (function (state_35121){
while(true){
var ret_value__32741__auto__ = (function (){try{while(true){
var result__32742__auto__ = switch__32739__auto__(state_35121);
if(cljs.core.keyword_identical_QMARK_(result__32742__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32742__auto__;
}
break;
}
}catch (e35130){var ex__32743__auto__ = e35130;
var statearr_35131_35548 = state_35121;
(statearr_35131_35548[(2)] = ex__32743__auto__);


if(cljs.core.seq((state_35121[(4)]))){
var statearr_35133_35549 = state_35121;
(statearr_35133_35549[(1)] = cljs.core.first((state_35121[(4)])));

} else {
throw ex__32743__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32741__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35550 = state_35121;
state_35121 = G__35550;
continue;
} else {
return ret_value__32741__auto__;
}
break;
}
});
shadow$dom$state_machine__32740__auto__ = function(state_35121){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32740__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32740__auto____1.call(this,state_35121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32740__auto____0;
shadow$dom$state_machine__32740__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32740__auto____1;
return shadow$dom$state_machine__32740__auto__;
})()
})();
var state__32794__auto__ = (function (){var statearr_35137 = f__32793__auto__();
(statearr_35137[(6)] = c__32792__auto___35546);

return statearr_35137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32794__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
