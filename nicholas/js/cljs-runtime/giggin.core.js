goog.provide('nicholas.core');
goog.require('cljs.core');
goog.require('reagent.dom');
goog.require('nicholas.components.math');
nicholas.core.app = (function giggin$core$app(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [nicholas.components.math.question,(10),(10)], null)], null);
});
nicholas.core.main = (function giggin$core$main(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nicholas.core.app], null),document.getElementById("app"));
});
goog.exportSymbol('nicholas.core.main', nicholas.core.main);

//# sourceMappingURL=nicholas.core.js.map
