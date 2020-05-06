goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37973){
var map__37974 = p__37973;
var map__37974__$1 = (((((!((map__37974 == null))))?(((((map__37974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37974):map__37974);
var m = map__37974__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37974__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4120__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37976_38186 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37977_38187 = null;
var count__37978_38188 = (0);
var i__37979_38189 = (0);
while(true){
if((i__37979_38189 < count__37978_38188)){
var f_38190 = chunk__37977_38187.cljs$core$IIndexed$_nth$arity$2(null,i__37979_38189);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38190], 0));


var G__38191 = seq__37976_38186;
var G__38192 = chunk__37977_38187;
var G__38193 = count__37978_38188;
var G__38194 = (i__37979_38189 + (1));
seq__37976_38186 = G__38191;
chunk__37977_38187 = G__38192;
count__37978_38188 = G__38193;
i__37979_38189 = G__38194;
continue;
} else {
var temp__5735__auto___38195 = cljs.core.seq(seq__37976_38186);
if(temp__5735__auto___38195){
var seq__37976_38196__$1 = temp__5735__auto___38195;
if(cljs.core.chunked_seq_QMARK_(seq__37976_38196__$1)){
var c__4550__auto___38197 = cljs.core.chunk_first(seq__37976_38196__$1);
var G__38198 = cljs.core.chunk_rest(seq__37976_38196__$1);
var G__38199 = c__4550__auto___38197;
var G__38200 = cljs.core.count(c__4550__auto___38197);
var G__38201 = (0);
seq__37976_38186 = G__38198;
chunk__37977_38187 = G__38199;
count__37978_38188 = G__38200;
i__37979_38189 = G__38201;
continue;
} else {
var f_38202 = cljs.core.first(seq__37976_38196__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38202], 0));


var G__38203 = cljs.core.next(seq__37976_38196__$1);
var G__38204 = null;
var G__38205 = (0);
var G__38206 = (0);
seq__37976_38186 = G__38203;
chunk__37977_38187 = G__38204;
count__37978_38188 = G__38205;
i__37979_38189 = G__38206;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38207 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4120__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38207], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38207)))?cljs.core.second(arglists_38207):arglists_38207)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37981_38208 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37982_38209 = null;
var count__37983_38210 = (0);
var i__37984_38211 = (0);
while(true){
if((i__37984_38211 < count__37983_38210)){
var vec__37998_38212 = chunk__37982_38209.cljs$core$IIndexed$_nth$arity$2(null,i__37984_38211);
var name_38213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998_38212,(0),null);
var map__38001_38214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37998_38212,(1),null);
var map__38001_38215__$1 = (((((!((map__38001_38214 == null))))?(((((map__38001_38214.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38001_38214.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38001_38214):map__38001_38214);
var doc_38216 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001_38215__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38217 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38001_38215__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38213], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38217], 0));

if(cljs.core.truth_(doc_38216)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38216], 0));
} else {
}


var G__38219 = seq__37981_38208;
var G__38220 = chunk__37982_38209;
var G__38221 = count__37983_38210;
var G__38222 = (i__37984_38211 + (1));
seq__37981_38208 = G__38219;
chunk__37982_38209 = G__38220;
count__37983_38210 = G__38221;
i__37984_38211 = G__38222;
continue;
} else {
var temp__5735__auto___38223 = cljs.core.seq(seq__37981_38208);
if(temp__5735__auto___38223){
var seq__37981_38224__$1 = temp__5735__auto___38223;
if(cljs.core.chunked_seq_QMARK_(seq__37981_38224__$1)){
var c__4550__auto___38225 = cljs.core.chunk_first(seq__37981_38224__$1);
var G__38226 = cljs.core.chunk_rest(seq__37981_38224__$1);
var G__38227 = c__4550__auto___38225;
var G__38228 = cljs.core.count(c__4550__auto___38225);
var G__38229 = (0);
seq__37981_38208 = G__38226;
chunk__37982_38209 = G__38227;
count__37983_38210 = G__38228;
i__37984_38211 = G__38229;
continue;
} else {
var vec__38006_38230 = cljs.core.first(seq__37981_38224__$1);
var name_38231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006_38230,(0),null);
var map__38009_38232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38006_38230,(1),null);
var map__38009_38233__$1 = (((((!((map__38009_38232 == null))))?(((((map__38009_38232.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38009_38232.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38009_38232):map__38009_38232);
var doc_38234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38009_38233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38235], 0));

if(cljs.core.truth_(doc_38234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38234], 0));
} else {
}


var G__38237 = cljs.core.next(seq__37981_38224__$1);
var G__38238 = null;
var G__38239 = (0);
var G__38240 = (0);
seq__37981_38208 = G__38237;
chunk__37982_38209 = G__38238;
count__37983_38210 = G__38239;
i__37984_38211 = G__38240;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__38011 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38012 = null;
var count__38013 = (0);
var i__38014 = (0);
while(true){
if((i__38014 < count__38013)){
var role = chunk__38012.cljs$core$IIndexed$_nth$arity$2(null,i__38014);
var temp__5735__auto___38242__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38242__$1)){
var spec_38243 = temp__5735__auto___38242__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38243)], 0));
} else {
}


var G__38244 = seq__38011;
var G__38245 = chunk__38012;
var G__38246 = count__38013;
var G__38247 = (i__38014 + (1));
seq__38011 = G__38244;
chunk__38012 = G__38245;
count__38013 = G__38246;
i__38014 = G__38247;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__38011);
if(temp__5735__auto____$1){
var seq__38011__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__38011__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__38011__$1);
var G__38248 = cljs.core.chunk_rest(seq__38011__$1);
var G__38249 = c__4550__auto__;
var G__38250 = cljs.core.count(c__4550__auto__);
var G__38251 = (0);
seq__38011 = G__38248;
chunk__38012 = G__38249;
count__38013 = G__38250;
i__38014 = G__38251;
continue;
} else {
var role = cljs.core.first(seq__38011__$1);
var temp__5735__auto___38252__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38252__$2)){
var spec_38253 = temp__5735__auto___38252__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38253)], 0));
} else {
}


var G__38254 = cljs.core.next(seq__38011__$1);
var G__38255 = null;
var G__38256 = (0);
var G__38257 = (0);
seq__38011 = G__38254;
chunk__38012 = G__38255;
count__38013 = G__38256;
i__38014 = G__38257;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38267 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38268 = cljs.core.ex_cause(t);
via = G__38267;
t = G__38268;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38022 = datafied_throwable;
var map__38022__$1 = (((((!((map__38022 == null))))?(((((map__38022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38022):map__38022);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38022__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38022__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38023 = cljs.core.last(via);
var map__38023__$1 = (((((!((map__38023 == null))))?(((((map__38023.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38023.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38023):map__38023);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38023__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38023__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38023__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38024 = data;
var map__38024__$1 = (((((!((map__38024 == null))))?(((((map__38024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38024):map__38024);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38024__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38025 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38025__$1 = (((((!((map__38025 == null))))?(((((map__38025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38025):map__38025);
var top_data = map__38025__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38025__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38030 = phase;
var G__38030__$1 = (((G__38030 instanceof cljs.core.Keyword))?G__38030.fqn:null);
switch (G__38030__$1) {
case "read-source":
var map__38031 = data;
var map__38031__$1 = (((((!((map__38031 == null))))?(((((map__38031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38031):map__38031);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38031__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38037 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38037__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38037,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38037);
var G__38037__$2 = (cljs.core.truth_((function (){var fexpr__38038 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38038.cljs$core$IFn$_invoke$arity$1 ? fexpr__38038.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38038.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38037__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38037__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38037__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38037__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38039 = top_data;
var G__38039__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38039,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38039);
var G__38039__$2 = (cljs.core.truth_((function (){var fexpr__38040 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38040.cljs$core$IFn$_invoke$arity$1 ? fexpr__38040.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38040.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38039__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38039__$1);
var G__38039__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38039__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38039__$2);
var G__38039__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38039__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38039__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38039__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38039__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38041 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38041,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38041,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38041,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38041,(3),null);
var G__38044 = top_data;
var G__38044__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38044,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38044);
var G__38044__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38044__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38044__$1);
var G__38044__$3 = (cljs.core.truth_((function (){var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38044__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38044__$2);
var G__38044__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38044__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38044__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38044__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38044__$4;
}

break;
case "execution":
var vec__38058 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38058,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38021_SHARP_){
var or__4120__auto__ = (p1__38021_SHARP_ == null);
if(or__4120__auto__){
return or__4120__auto__;
} else {
var fexpr__38062 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38062.cljs$core$IFn$_invoke$arity$1 ? fexpr__38062.cljs$core$IFn$_invoke$arity$1(p1__38021_SHARP_) : fexpr__38062.call(null,p1__38021_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4120__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return line;
}
})();
var G__38067 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38067__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38067,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38067);
var G__38067__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38067__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38067__$1);
var G__38067__$3 = (cljs.core.truth_((function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
var and__4109__auto__ = source__$1;
if(cljs.core.truth_(and__4109__auto__)){
return method;
} else {
return and__4109__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38067__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4120__auto__ = fn;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38067__$2);
var G__38067__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38067__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38067__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38067__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38067__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38030__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38097){
var map__38103 = p__38097;
var map__38103__$1 = (((((!((map__38103 == null))))?(((((map__38103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38103):map__38103);
var triage_data = map__38103__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = source;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4120__auto__ = line;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4120__auto__ = class$;
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38149 = phase;
var G__38149__$1 = (((G__38149 instanceof cljs.core.Keyword))?G__38149.fqn:null);
switch (G__38149__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38150 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38151 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38152 = loc;
var G__38153 = (cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38154_38271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38155_38272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38156_38273 = true;
var _STAR_print_fn_STAR__temp_val__38157_38274 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38156_38273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38157_38274);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38085_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38085_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38155_38272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38154_38271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38150,G__38151,G__38152,G__38153) : format.call(null,G__38150,G__38151,G__38152,G__38153));

break;
case "macroexpansion":
var G__38158 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38159 = cause_type;
var G__38160 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38161 = loc;
var G__38162 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38158,G__38159,G__38160,G__38161,G__38162) : format.call(null,G__38158,G__38159,G__38160,G__38161,G__38162));

break;
case "compile-syntax-check":
var G__38163 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38164 = cause_type;
var G__38165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38166 = loc;
var G__38167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38163,G__38164,G__38165,G__38166,G__38167) : format.call(null,G__38163,G__38164,G__38165,G__38166,G__38167));

break;
case "compilation":
var G__38168 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38169 = cause_type;
var G__38170 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38171 = loc;
var G__38172 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38168,G__38169,G__38170,G__38171,G__38172) : format.call(null,G__38168,G__38169,G__38170,G__38171,G__38172));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38173 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38174 = symbol;
var G__38175 = loc;
var G__38176 = (function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38177_38277 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38178_38278 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38179_38279 = true;
var _STAR_print_fn_STAR__temp_val__38180_38280 = (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38179_38279);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38180_38280);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38090_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38090_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38178_38278);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38177_38277);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38173,G__38174,G__38175,G__38176) : format.call(null,G__38173,G__38174,G__38175,G__38176));
} else {
var G__38181 = "Execution error%s at %s(%s).\n%s\n";
var G__38182 = cause_type;
var G__38183 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38184 = loc;
var G__38185 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38181,G__38182,G__38183,G__38184,G__38185) : format.call(null,G__38181,G__38182,G__38183,G__38184,G__38185));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38149__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
