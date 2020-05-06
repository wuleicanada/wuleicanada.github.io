goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__27001__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27002__i = 0, G__27002__a = new Array(arguments.length -  0);
while (G__27002__i < G__27002__a.length) {G__27002__a[G__27002__i] = arguments[G__27002__i + 0]; ++G__27002__i;}
  args = new cljs.core.IndexedSeq(G__27002__a,0,null);
} 
return G__27001__delegate.call(this,args);};
G__27001.cljs$lang$maxFixedArity = 0;
G__27001.cljs$lang$applyTo = (function (arglist__27003){
var args = cljs.core.seq(arglist__27003);
return G__27001__delegate(args);
});
G__27001.cljs$core$IFn$_invoke$arity$variadic = G__27001__delegate;
return G__27001;
})()
);

(o.error = (function() { 
var G__27004__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__27004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27005__i = 0, G__27005__a = new Array(arguments.length -  0);
while (G__27005__i < G__27005__a.length) {G__27005__a[G__27005__i] = arguments[G__27005__i + 0]; ++G__27005__i;}
  args = new cljs.core.IndexedSeq(G__27005__a,0,null);
} 
return G__27004__delegate.call(this,args);};
G__27004.cljs$lang$maxFixedArity = 0;
G__27004.cljs$lang$applyTo = (function (arglist__27006){
var args = cljs.core.seq(arglist__27006);
return G__27004__delegate(args);
});
G__27004.cljs$core$IFn$_invoke$arity$variadic = G__27004__delegate;
return G__27004;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
