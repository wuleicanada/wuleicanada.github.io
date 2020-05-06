goog.provide('nicholas.helpers');
goog.require('cljs.core');
nicholas.helpers.format_price = (function giggin$helpers$format_price(cents){
return [" $",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cents / 100.0))].join('');
});

//# sourceMappingURL=nicholas.helpers.js.map
