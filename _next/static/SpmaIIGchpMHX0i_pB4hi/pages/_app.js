(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{0:function(e,t,r){r("GcxT"),e.exports=r("nOHt")},"1TCz":function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=(r("67mL"),r("/MKj")),i=r("9OUN");r("1mXj");function c(e){return function(t){var r=t.dispatch,n=t.getState;return function(t){return function(o){return"function"===typeof o?o(r,n,e):t(o)}}}}var u=c();u.withExtraArgument=c;var l=u;function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={people:[],selectedPerson:{},isFetchingPeople:!0,planets:[],selectedPlanet:{},isFetchingPlanet:!0,starships:[],selectedStarship:{},isFetchingStarship:!0,randomPlanet:{},isFetchingRandomPlanet:!0,broken:!1,brokenRandomPlanet:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PEOPLE":var r=t.payload.map((function(e,t){return e.id=t+1,e}));return p({},e,{people:r,selectedPerson:r[0],isFetchingPeople:!1});case"SELECT_PEOPLE":var n=e.people.filter((function(e){return e.name===t.payload}));return p({},e,{selectedPerson:n[0]});case"FETCH_PLANETS":var o=t.payload.map((function(e,t){return e.id=e.url.match(/([0-9]*)\/$/)[1],e}));return p({},e,{planets:o,selectedPlanet:o[1],isFetchingPlanet:!1,isFetchingRandomPlanet:!1});case"SELECT_PLANET":var a=e.planets.filter((function(e){return e.name===t.payload}));return p({},e,{selectedPlanet:a[0]});case"FETCH_STARSHIPS":var i=t.payload.map((function(e,t){return e.id=e.url.match(/([0-9]*)\/$/)[1],e}));return p({},e,{starships:i,selectedStarship:i[0],isFetchingStarship:!1});case"SELECT_STARSHIP":var c=e.starships.filter((function(e){return e.name===t.payload}));return p({},e,{selectedStarship:c[0]});case"RANDOM_PLANET":var u=Math.round(10*Math.random()+1),l=e.planets[u];return p({},e,{randomPlanet:l||e.planets[3]});case"SET_BROKEN_IMG":return console.log("broken "),p({},e,{broken:!0});case"SET_DEFAULT_BROKEN_IMG":return console.log("default "),p({},e,{broken:!1});case"SET_BROKEN_IMG_RANDOM":return p({},e,{brokenRandomPlanet:!0});case"SET_DEFAULT_BROKEN_RANDOM_IMG":return p({},e,{brokenRandomPlanet:!1});default:return e}},g=Object(i.c)(h,Object(i.a)(l)),v=o.a.createElement;t.default=function(e){var t=e.Component,r=e.pageProps;return v(a.a,{store:g},v(t,r))}},"1mXj":function(e,t,r){(function(e){!function(t){"use strict";function r(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function n(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,r){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function a(e,t){a.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function c(e,t,r){c.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function u(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function l(e){var t="undefined"==typeof e?"undefined":P(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,r,n,s,p,d){d=d||[];var h=(s=s||[]).slice(0);if("undefined"!=typeof p){if(n){if("function"==typeof n&&n(h,p))return;if("object"===("undefined"==typeof n?"undefined":P(n))){if(n.prefilter&&n.prefilter(h,p))return;if(n.normalize){var g=n.normalize(h,p,e,t);g&&(e=g[0],t=g[1])}}}h.push(p)}"regexp"===l(e)&&"regexp"===l(t)&&(e=e.toString(),t=t.toString());var v="undefined"==typeof e?"undefined":P(e),y="undefined"==typeof t?"undefined":P(t),b="undefined"!==v||d&&d[d.length-1].lhs&&d[d.length-1].lhs.hasOwnProperty(p),m="undefined"!==y||d&&d[d.length-1].rhs&&d[d.length-1].rhs.hasOwnProperty(p);if(!b&&m)r(new a(h,t));else if(!m&&b)r(new i(h,e));else if(l(e)!==l(t))r(new o(h,e,t));else if("date"===l(e)&&e-t!==0)r(new o(h,e,t));else if("object"===v&&null!==e&&null!==t)if(d.filter((function(t){return t.lhs===e})).length)e!==t&&r(new o(h,e,t));else{if(d.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?r(new c(h,w,new i(void 0,e[w]))):f(e[w],t[w],r,n,h,w,d);for(;w<t.length;)r(new c(h,w,new a(void 0,t[w++])))}else{var E=Object.keys(e),S=Object.keys(t);E.forEach((function(o,a){var i=S.indexOf(o);i>=0?(f(e[o],t[o],r,n,h,o,d),S=u(S,i)):f(e[o],void 0,r,n,h,o,d)})),S.forEach((function(e){f(void 0,t[e],r,n,h,e,d)}))}d.length=d.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||r(new o(h,e,t)))}function s(e,t,r,n){return n=n||[],f(e,t,(function(e){e&&n.push(e)}),r),n.length?n:void 0}function p(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,a=r.path?r.path.length-1:0;++o<a;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,a=t[r],i=n.path.length-1;for(o=0;o<i;o++)a=a[n.path[o]];switch(n.kind){case"A":e(a[n.path[o]],n.index,n.item);break;case"D":delete a[n.path[o]];break;case"E":case"N":a[n.path[o]]=n.rhs}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":t=u(t,r);break;case"E":case"N":t[r]=n.rhs}return t}(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function d(e){return"color: "+x[e].color+"; font-weight: bold"}function h(e,t,r,n){var o=s(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach((function(e){var t=e.kind,n=function(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,a=e.index,i=e.item;switch(t){case"E":return[r.join("."),n,"\u2192",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+a+"]",i];default:return[]}}(e);r.log.apply(r,["%c "+x[t].text,d(t)].concat(O(n)))})):r.log("\u2014\u2014 no diff \u2014\u2014");try{r.groupEnd()}catch(e){r.log("\u2014\u2014 diff end \u2014\u2014 ")}}function g(e,t,r,n){switch("undefined"==typeof e?"undefined":P(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,O(r)):e[n];case"function":return e(t);default:return e}}function v(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,a=void 0===o?function(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var a=["action"];return a.push("%c"+String(e.type)),t&&a.push("%c@ "+n),r&&a.push("%c(in "+o.toFixed(2)+" ms)"),a.join(" ")}}(t):o,i=t.collapsed,c=t.colors,u=t.level,l=t.diff,f="undefined"==typeof t.titleFormatter;e.forEach((function(o,s){var p=o.started,d=o.startedTime,v=o.action,y=o.prevState,b=o.error,m=o.took,w=o.nextState,S=e[s+1];S&&(w=S.prevState,m=S.started-p);var P=n(v),O="function"==typeof i?i((function(){return w}),v,o):i,j=E(d),x=c.title?"color: "+c.title(P)+";":"",k=["color: gray; font-weight: lighter;"];k.push(x),t.timestamp&&k.push("color: gray; font-weight: lighter;"),t.duration&&k.push("color: gray; font-weight: lighter;");var A=a(P,j,m);try{O?c.title&&f?r.groupCollapsed.apply(r,["%c "+A].concat(k)):r.groupCollapsed(A):c.title&&f?r.group.apply(r,["%c "+A].concat(k)):r.group(A)}catch(e){r.log(A)}var D=g(u,P,[y],"prevState"),_=g(u,P,[P],"action"),T=g(u,P,[b,y],"error"),N=g(u,P,[w],"nextState");if(D)if(c.prevState){var F="color: "+c.prevState(y)+"; font-weight: bold";r[D]("%c prev state",F,y)}else r[D]("prev state",y);if(_)if(c.action){var C="color: "+c.action(P)+"; font-weight: bold";r[_]("%c action    ",C,P)}else r[_]("action    ",P);if(b&&T)if(c.error){var L="color: "+c.error(b,y)+"; font-weight: bold;";r[T]("%c error     ",L,b)}else r[T]("error     ",b);if(N)if(c.nextState){var M="color: "+c.nextState(w)+"; font-weight: bold";r[N]("%c next state",M,w)}else r[N]("next state",w);l&&h(y,w,r,O);try{r.groupEnd()}catch(e){r.log("\u2014\u2014 log end \u2014\u2014")}}))}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},k,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,a=t.predicate,i=t.logErrors,c=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof a&&!a(r,l))return e(l);var f={};u.push(f),f.started=S.now(),f.startedTime=new Date,f.prevState=n(r()),f.action=l;var s=void 0;if(i)try{s=e(l)}catch(e){f.error=o(e)}else s=e(l);f.took=S.now()-f.started,f.nextState=n(r());var p=t.diff&&"function"==typeof c?c(r,l):t.diff;if(v(u,Object.assign({},t,{diff:p})),u.length=0,f.error)throw f.error;return s}}}}var b,m,w=function(e,t){return function(e,t){return new Array(t+1).join(e)}("0",t-e.toString().length)+e},E=function(e){return w(e.getHours(),2)+":"+w(e.getMinutes(),2)+":"+w(e.getSeconds(),2)+"."+w(e.getMilliseconds(),3)},S="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},O=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},j=[];b="object"===("undefined"==typeof e?"undefined":P(e))&&e?e:"undefined"!=typeof window?window:{},(m=b.DeepDiff)&&j.push((function(){"undefined"!=typeof m&&b.DeepDiff===s&&(b.DeepDiff=m,m=void 0)})),r(o,n),r(a,n),r(i,n),r(c,n),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:function(e,t,r){e&&t&&f(e,t,(function(n){r&&!r(e,t,n)||p(e,t,n)}))},enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:function(e,t,r){if(e&&t&&r&&r.kind){var n,o,a=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof a[r.path[n]]&&(a[r.path[n]]={}),a=a[r.path[n]];switch(r.kind){case"A":!function e(t,r,n){if(n.path&&n.path.length){var o,a=t[r],i=n.path.length-1;for(o=0;o<i;o++)a=a[n.path[o]];switch(n.kind){case"A":e(a[n.path[o]],n.index,n.item);break;case"D":case"E":a[n.path[o]]=n.lhs;break;case"N":delete a[n.path[o]]}}else switch(n.kind){case"A":e(t[r],n.index,n.item);break;case"D":case"E":t[r]=n.lhs;break;case"N":t=u(t,r)}return t}(a[r.path[n]],r.index,r.item);break;case"D":case"E":a[r.path[n]]=r.lhs;break;case"N":delete a[r.path[n]]}}},enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof m},enumerable:!0},noConflict:{value:function(){return j&&(j.forEach((function(e){e()})),j=null),s},enumerable:!0}});var x={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},k={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?y()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=k,t.createLogger=y,t.logger=A,t.default=A,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,r("yLpj"))},"67mL":function(e,t,r){},GcxT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])}},[[0,1,2,0,3]]]);