goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
goog.require('clojure.set');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4736__auto__ = [];
var len__4730__auto___36599 = arguments.length;
var i__4731__auto___36601 = (0);
while(true){
if((i__4731__auto___36601 < len__4730__auto___36599)){
args__4736__auto__.push((arguments[i__4731__auto___36601]));

var G__36602 = (i__4731__auto___36601 + (1));
i__4731__auto___36601 = G__36602;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq36429){
var G__36430 = cljs.core.first(seq36429);
var seq36429__$1 = cljs.core.next(seq36429);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36430,seq36429__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__36432 = cljs.core.seq(sources);
var chunk__36433 = null;
var count__36434 = (0);
var i__36435 = (0);
while(true){
if((i__36435 < count__36434)){
var map__36447 = chunk__36433.cljs$core$IIndexed$_nth$arity$2(null,i__36435);
var map__36447__$1 = (((((!((map__36447 == null))))?(((((map__36447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36447):map__36447);
var src = map__36447__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36447__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36452){var e_36609 = e36452;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36609);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36609.message)].join('')));
}

var G__36610 = seq__36432;
var G__36611 = chunk__36433;
var G__36612 = count__36434;
var G__36613 = (i__36435 + (1));
seq__36432 = G__36610;
chunk__36433 = G__36611;
count__36434 = G__36612;
i__36435 = G__36613;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36432);
if(temp__5735__auto__){
var seq__36432__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36432__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36432__$1);
var G__36616 = cljs.core.chunk_rest(seq__36432__$1);
var G__36617 = c__4550__auto__;
var G__36618 = cljs.core.count(c__4550__auto__);
var G__36619 = (0);
seq__36432 = G__36616;
chunk__36433 = G__36617;
count__36434 = G__36618;
i__36435 = G__36619;
continue;
} else {
var map__36453 = cljs.core.first(seq__36432__$1);
var map__36453__$1 = (((((!((map__36453 == null))))?(((((map__36453.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36453.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36453):map__36453);
var src = map__36453__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36453__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e36458){var e_36622 = e36458;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36622);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36622.message)].join('')));
}

var G__36623 = cljs.core.next(seq__36432__$1);
var G__36624 = null;
var G__36625 = (0);
var G__36626 = (0);
seq__36432 = G__36623;
chunk__36433 = G__36624;
count__36434 = G__36625;
i__36435 = G__36626;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__36459 = cljs.core.seq(js_requires);
var chunk__36460 = null;
var count__36461 = (0);
var i__36462 = (0);
while(true){
if((i__36462 < count__36461)){
var js_ns = chunk__36460.cljs$core$IIndexed$_nth$arity$2(null,i__36462);
var require_str_36640 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36640);


var G__36641 = seq__36459;
var G__36642 = chunk__36460;
var G__36643 = count__36461;
var G__36644 = (i__36462 + (1));
seq__36459 = G__36641;
chunk__36460 = G__36642;
count__36461 = G__36643;
i__36462 = G__36644;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36459);
if(temp__5735__auto__){
var seq__36459__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36459__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36459__$1);
var G__36645 = cljs.core.chunk_rest(seq__36459__$1);
var G__36646 = c__4550__auto__;
var G__36647 = cljs.core.count(c__4550__auto__);
var G__36648 = (0);
seq__36459 = G__36645;
chunk__36460 = G__36646;
count__36461 = G__36647;
i__36462 = G__36648;
continue;
} else {
var js_ns = cljs.core.first(seq__36459__$1);
var require_str_36650 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36650);


var G__36651 = cljs.core.next(seq__36459__$1);
var G__36652 = null;
var G__36653 = (0);
var G__36654 = (0);
seq__36459 = G__36651;
chunk__36460 = G__36652;
count__36461 = G__36653;
i__36462 = G__36654;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__36469 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__36469) : callback.call(null,G__36469));
} else {
return goog.net.XhrIo.send(shadow.cljs.devtools.client.env.files_url(),(function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__36472){
var map__36473 = p__36472;
var map__36473__$1 = (((((!((map__36473 == null))))?(((((map__36473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36473.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36473):map__36473);
var msg = map__36473__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36473__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36475(s__36476){
return (new cljs.core.LazySeq(null,(function (){
var s__36476__$1 = s__36476;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__36476__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__36481 = cljs.core.first(xs__6292__auto__);
var map__36481__$1 = (((((!((map__36481 == null))))?(((((map__36481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36481):map__36481);
var src = map__36481__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36481__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36481__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4519__auto__ = ((function (s__36476__$1,map__36481,map__36481__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36473,map__36473__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36475_$_iter__36477(s__36478){
return (new cljs.core.LazySeq(null,((function (s__36476__$1,map__36481,map__36481__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36473,map__36473__$1,msg,info,reload_info){
return (function (){
var s__36478__$1 = s__36478;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__36478__$1);
if(temp__5735__auto____$1){
var s__36478__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__36478__$2)){
var c__4521__auto__ = cljs.core.chunk_first(s__36478__$2);
var size__4522__auto__ = cljs.core.count(c__4521__auto__);
var b__36480 = cljs.core.chunk_buffer(size__4522__auto__);
if((function (){var i__36479 = (0);
while(true){
if((i__36479 < size__4522__auto__)){
var warning = cljs.core._nth(c__4521__auto__,i__36479);
cljs.core.chunk_append(b__36480,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36663 = (i__36479 + (1));
i__36479 = G__36663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__36480),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36475_$_iter__36477(cljs.core.chunk_rest(s__36478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__36480),null);
}
} else {
var warning = cljs.core.first(s__36478__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36475_$_iter__36477(cljs.core.rest(s__36478__$2)));
}
} else {
return null;
}
break;
}
});})(s__36476__$1,map__36481,map__36481__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36473,map__36473__$1,msg,info,reload_info))
,null,null));
});})(s__36476__$1,map__36481,map__36481__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__36473,map__36473__$1,msg,info,reload_info))
;
var fs__4520__auto__ = cljs.core.seq(iterys__4519__auto__(warnings));
if(fs__4520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__36475(cljs.core.rest(s__36476__$1)));
} else {
var G__36664 = cljs.core.rest(s__36476__$1);
s__36476__$1 = G__36664;
continue;
}
} else {
var G__36666 = cljs.core.rest(s__36476__$1);
s__36476__$1 = G__36666;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
var seq__36483_36667 = cljs.core.seq(warnings);
var chunk__36484_36668 = null;
var count__36485_36669 = (0);
var i__36486_36670 = (0);
while(true){
if((i__36486_36670 < count__36485_36669)){
var map__36491_36673 = chunk__36484_36668.cljs$core$IIndexed$_nth$arity$2(null,i__36486_36670);
var map__36491_36674__$1 = (((((!((map__36491_36673 == null))))?(((((map__36491_36673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36491_36673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36491_36673):map__36491_36673);
var w_36675 = map__36491_36674__$1;
var msg_36676__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36491_36674__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36677 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36491_36674__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36491_36674__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36679 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36491_36674__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36679)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36677),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36678),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36676__$1)].join(''));


var G__36681 = seq__36483_36667;
var G__36682 = chunk__36484_36668;
var G__36683 = count__36485_36669;
var G__36684 = (i__36486_36670 + (1));
seq__36483_36667 = G__36681;
chunk__36484_36668 = G__36682;
count__36485_36669 = G__36683;
i__36486_36670 = G__36684;
continue;
} else {
var temp__5735__auto___36685 = cljs.core.seq(seq__36483_36667);
if(temp__5735__auto___36685){
var seq__36483_36686__$1 = temp__5735__auto___36685;
if(cljs.core.chunked_seq_QMARK_(seq__36483_36686__$1)){
var c__4550__auto___36687 = cljs.core.chunk_first(seq__36483_36686__$1);
var G__36688 = cljs.core.chunk_rest(seq__36483_36686__$1);
var G__36689 = c__4550__auto___36687;
var G__36690 = cljs.core.count(c__4550__auto___36687);
var G__36691 = (0);
seq__36483_36667 = G__36688;
chunk__36484_36668 = G__36689;
count__36485_36669 = G__36690;
i__36486_36670 = G__36691;
continue;
} else {
var map__36496_36692 = cljs.core.first(seq__36483_36686__$1);
var map__36496_36693__$1 = (((((!((map__36496_36692 == null))))?(((((map__36496_36692.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36496_36692.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36496_36692):map__36496_36692);
var w_36694 = map__36496_36693__$1;
var msg_36695__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36496_36693__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36696 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36496_36693__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36496_36693__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36496_36693__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36698)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36696),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36697),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36695__$1)].join(''));


var G__36699 = cljs.core.next(seq__36483_36686__$1);
var G__36700 = null;
var G__36701 = (0);
var G__36702 = (0);
seq__36483_36667 = G__36699;
chunk__36484_36668 = G__36700;
count__36485_36669 = G__36701;
i__36486_36670 = G__36702;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__36471_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__36471_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__36498){
var map__36499 = p__36498;
var map__36499__$1 = (((((!((map__36499 == null))))?(((((map__36499.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36499.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36499):map__36499);
var msg = map__36499__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36499__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__36501 = cljs.core.seq(updates);
var chunk__36503 = null;
var count__36504 = (0);
var i__36505 = (0);
while(true){
if((i__36505 < count__36504)){
var path = chunk__36503.cljs$core$IIndexed$_nth$arity$2(null,i__36505);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36541_36712 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36544_36713 = null;
var count__36545_36714 = (0);
var i__36546_36715 = (0);
while(true){
if((i__36546_36715 < count__36545_36714)){
var node_36717 = chunk__36544_36713.cljs$core$IIndexed$_nth$arity$2(null,i__36546_36715);
var path_match_36718 = shadow.cljs.devtools.client.browser.match_paths(node_36717.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36718)){
var new_link_36719 = (function (){var G__36553 = node_36717.cloneNode(true);
G__36553.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36718),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36553;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36718], 0));

goog.dom.insertSiblingAfter(new_link_36719,node_36717);

goog.dom.removeNode(node_36717);


var G__36721 = seq__36541_36712;
var G__36722 = chunk__36544_36713;
var G__36723 = count__36545_36714;
var G__36724 = (i__36546_36715 + (1));
seq__36541_36712 = G__36721;
chunk__36544_36713 = G__36722;
count__36545_36714 = G__36723;
i__36546_36715 = G__36724;
continue;
} else {
var G__36725 = seq__36541_36712;
var G__36726 = chunk__36544_36713;
var G__36727 = count__36545_36714;
var G__36728 = (i__36546_36715 + (1));
seq__36541_36712 = G__36725;
chunk__36544_36713 = G__36726;
count__36545_36714 = G__36727;
i__36546_36715 = G__36728;
continue;
}
} else {
var temp__5735__auto___36729 = cljs.core.seq(seq__36541_36712);
if(temp__5735__auto___36729){
var seq__36541_36730__$1 = temp__5735__auto___36729;
if(cljs.core.chunked_seq_QMARK_(seq__36541_36730__$1)){
var c__4550__auto___36733 = cljs.core.chunk_first(seq__36541_36730__$1);
var G__36736 = cljs.core.chunk_rest(seq__36541_36730__$1);
var G__36737 = c__4550__auto___36733;
var G__36738 = cljs.core.count(c__4550__auto___36733);
var G__36739 = (0);
seq__36541_36712 = G__36736;
chunk__36544_36713 = G__36737;
count__36545_36714 = G__36738;
i__36546_36715 = G__36739;
continue;
} else {
var node_36742 = cljs.core.first(seq__36541_36730__$1);
var path_match_36743 = shadow.cljs.devtools.client.browser.match_paths(node_36742.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36743)){
var new_link_36746 = (function (){var G__36554 = node_36742.cloneNode(true);
G__36554.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36743),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36554;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36743], 0));

goog.dom.insertSiblingAfter(new_link_36746,node_36742);

goog.dom.removeNode(node_36742);


var G__36748 = cljs.core.next(seq__36541_36730__$1);
var G__36749 = null;
var G__36750 = (0);
var G__36751 = (0);
seq__36541_36712 = G__36748;
chunk__36544_36713 = G__36749;
count__36545_36714 = G__36750;
i__36546_36715 = G__36751;
continue;
} else {
var G__36752 = cljs.core.next(seq__36541_36730__$1);
var G__36753 = null;
var G__36754 = (0);
var G__36755 = (0);
seq__36541_36712 = G__36752;
chunk__36544_36713 = G__36753;
count__36545_36714 = G__36754;
i__36546_36715 = G__36755;
continue;
}
}
} else {
}
}
break;
}


var G__36759 = seq__36501;
var G__36760 = chunk__36503;
var G__36761 = count__36504;
var G__36762 = (i__36505 + (1));
seq__36501 = G__36759;
chunk__36503 = G__36760;
count__36504 = G__36761;
i__36505 = G__36762;
continue;
} else {
var G__36763 = seq__36501;
var G__36764 = chunk__36503;
var G__36765 = count__36504;
var G__36766 = (i__36505 + (1));
seq__36501 = G__36763;
chunk__36503 = G__36764;
count__36504 = G__36765;
i__36505 = G__36766;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__36501);
if(temp__5735__auto__){
var seq__36501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36501__$1)){
var c__4550__auto__ = cljs.core.chunk_first(seq__36501__$1);
var G__36769 = cljs.core.chunk_rest(seq__36501__$1);
var G__36770 = c__4550__auto__;
var G__36771 = cljs.core.count(c__4550__auto__);
var G__36772 = (0);
seq__36501 = G__36769;
chunk__36503 = G__36770;
count__36504 = G__36771;
i__36505 = G__36772;
continue;
} else {
var path = cljs.core.first(seq__36501__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36556_36773 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36559_36774 = null;
var count__36560_36775 = (0);
var i__36561_36776 = (0);
while(true){
if((i__36561_36776 < count__36560_36775)){
var node_36779 = chunk__36559_36774.cljs$core$IIndexed$_nth$arity$2(null,i__36561_36776);
var path_match_36781 = shadow.cljs.devtools.client.browser.match_paths(node_36779.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36781)){
var new_link_36782 = (function (){var G__36568 = node_36779.cloneNode(true);
G__36568.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36781),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36568;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36781], 0));

goog.dom.insertSiblingAfter(new_link_36782,node_36779);

goog.dom.removeNode(node_36779);


var G__36785 = seq__36556_36773;
var G__36786 = chunk__36559_36774;
var G__36787 = count__36560_36775;
var G__36788 = (i__36561_36776 + (1));
seq__36556_36773 = G__36785;
chunk__36559_36774 = G__36786;
count__36560_36775 = G__36787;
i__36561_36776 = G__36788;
continue;
} else {
var G__36789 = seq__36556_36773;
var G__36790 = chunk__36559_36774;
var G__36791 = count__36560_36775;
var G__36792 = (i__36561_36776 + (1));
seq__36556_36773 = G__36789;
chunk__36559_36774 = G__36790;
count__36560_36775 = G__36791;
i__36561_36776 = G__36792;
continue;
}
} else {
var temp__5735__auto___36797__$1 = cljs.core.seq(seq__36556_36773);
if(temp__5735__auto___36797__$1){
var seq__36556_36798__$1 = temp__5735__auto___36797__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36556_36798__$1)){
var c__4550__auto___36799 = cljs.core.chunk_first(seq__36556_36798__$1);
var G__36800 = cljs.core.chunk_rest(seq__36556_36798__$1);
var G__36801 = c__4550__auto___36799;
var G__36802 = cljs.core.count(c__4550__auto___36799);
var G__36803 = (0);
seq__36556_36773 = G__36800;
chunk__36559_36774 = G__36801;
count__36560_36775 = G__36802;
i__36561_36776 = G__36803;
continue;
} else {
var node_36804 = cljs.core.first(seq__36556_36798__$1);
var path_match_36805 = shadow.cljs.devtools.client.browser.match_paths(node_36804.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36805)){
var new_link_36806 = (function (){var G__36572 = node_36804.cloneNode(true);
G__36572.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36805),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36572;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36805], 0));

goog.dom.insertSiblingAfter(new_link_36806,node_36804);

goog.dom.removeNode(node_36804);


var G__36807 = cljs.core.next(seq__36556_36798__$1);
var G__36808 = null;
var G__36809 = (0);
var G__36810 = (0);
seq__36556_36773 = G__36807;
chunk__36559_36774 = G__36808;
count__36560_36775 = G__36809;
i__36561_36776 = G__36810;
continue;
} else {
var G__36811 = cljs.core.next(seq__36556_36798__$1);
var G__36812 = null;
var G__36813 = (0);
var G__36814 = (0);
seq__36556_36773 = G__36811;
chunk__36559_36774 = G__36812;
count__36560_36775 = G__36813;
i__36561_36776 = G__36814;
continue;
}
}
} else {
}
}
break;
}


var G__36815 = cljs.core.next(seq__36501__$1);
var G__36816 = null;
var G__36817 = (0);
var G__36818 = (0);
seq__36501 = G__36815;
chunk__36503 = G__36816;
count__36504 = G__36817;
i__36505 = G__36818;
continue;
} else {
var G__36819 = cljs.core.next(seq__36501__$1);
var G__36820 = null;
var G__36821 = (0);
var G__36822 = (0);
seq__36501 = G__36819;
chunk__36503 = G__36820;
count__36504 = G__36821;
i__36505 = G__36822;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36573){
var map__36574 = p__36573;
var map__36574__$1 = (((((!((map__36574 == null))))?(((((map__36574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36574):map__36574);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36574__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36576,done){
var map__36577 = p__36576;
var map__36577__$1 = (((((!((map__36577 == null))))?(((((map__36577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36577):map__36577);
var msg = map__36577__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36577__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36580){
var map__36581 = p__36580;
var map__36581__$1 = (((((!((map__36581 == null))))?(((((map__36581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36581):map__36581);
var src = map__36581__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36581__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4109__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4109__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36583){var e = e36583;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36584,done){
var map__36585 = p__36584;
var map__36585__$1 = (((((!((map__36585 == null))))?(((((map__36585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36585):map__36585);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36585__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36588){
var map__36589 = p__36588;
var map__36589__$1 = (((((!((map__36589 == null))))?(((((map__36589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36589):map__36589);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36589__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36591,done){
var map__36592 = p__36591;
var map__36592__$1 = (((((!((map__36592 == null))))?(((((map__36592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36592):map__36592);
var msg = map__36592__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36592__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36594_36825 = type;
var G__36594_36826__$1 = (((G__36594_36825 instanceof cljs.core.Keyword))?G__36594_36825.fqn:null);
switch (G__36594_36826__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
return goog.net.XhrIo.send(["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join(''),(function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
}),"POST",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0)),({"content-type": "application/edn; charset=utf-8"}));
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var fexpr__36596 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36596.cljs$core$IFn$_invoke$arity$1 ? fexpr__36596.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"init","init",-1875481434)) : fexpr__36596.call(null,new cljs.core.Keyword(null,"init","init",-1875481434)));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4120__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4120__auto__)){
return or__4120__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36597){var e = e36597;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36834 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36834)){
var s_36835 = temp__5735__auto___36834;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36835.onclose = (function (e){
return null;
}));

s_36835.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

if(cljs.core.truth_(goog.global.window)){
window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));
} else {
}

if(cljs.core.truth_((function (){var and__4109__auto__ = goog.global.document;
if(cljs.core.truth_(and__4109__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",goog.global.document.readyState);
} else {
return and__4109__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
