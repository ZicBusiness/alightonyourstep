(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))o(m);new MutationObserver(m=>{for(const v of m)if(v.type==="childList")for(const z of v.addedNodes)z.tagName==="LINK"&&z.rel==="modulepreload"&&o(z)}).observe(document,{childList:!0,subtree:!0});function d(m){const v={};return m.integrity&&(v.integrity=m.integrity),m.referrerPolicy&&(v.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?v.credentials="include":m.crossOrigin==="anonymous"?v.credentials="omit":v.credentials="same-origin",v}function o(m){if(m.ep)return;m.ep=!0;const v=d(m);fetch(m.href,v)}})();var xs={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dd;function _p(){if(Dd)return Rn;Dd=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function d(o,m,v){var z=null;if(v!==void 0&&(z=""+v),m.key!==void 0&&(z=""+m.key),"key"in m){v={};for(var j in m)j!=="key"&&(v[j]=m[j])}else v=m;return m=v.ref,{$$typeof:s,type:o,key:z,ref:m!==void 0?m:null,props:v}}return Rn.Fragment=f,Rn.jsx=d,Rn.jsxs=d,Rn}var Md;function Cp(){return Md||(Md=1,xs.exports=_p()),xs.exports}var u=Cp(),Ss={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _d;function wp(){if(_d)return le;_d=1;var s=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),m=Symbol.for("react.profiler"),v=Symbol.for("react.consumer"),z=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),q=Symbol.iterator;function D(y){return y===null||typeof y!="object"?null:(y=q&&y[q]||y["@@iterator"],typeof y=="function"?y:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,Y={};function G(y,H,Z){this.props=y,this.context=H,this.refs=Y,this.updater=Z||k}G.prototype.isReactComponent={},G.prototype.setState=function(y,H){if(typeof y!="object"&&typeof y!="function"&&y!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,y,H,"setState")},G.prototype.forceUpdate=function(y){this.updater.enqueueForceUpdate(this,y,"forceUpdate")};function T(){}T.prototype=G.prototype;function B(y,H,Z){this.props=y,this.context=H,this.refs=Y,this.updater=Z||k}var X=B.prototype=new T;X.constructor=B,w(X,G.prototype),X.isPureReactComponent=!0;var $=Array.isArray,J={H:null,A:null,T:null,S:null,V:null},pe=Object.prototype.hasOwnProperty;function Ee(y,H,Z,Q,F,oe){return Z=oe.ref,{$$typeof:s,type:y,key:H,ref:Z!==void 0?Z:null,props:oe}}function Te(y,H){return Ee(y.type,H,void 0,void 0,void 0,y.props)}function be(y){return typeof y=="object"&&y!==null&&y.$$typeof===s}function Ve(y){var H={"=":"=0",":":"=2"};return"$"+y.replace(/[=:]/g,function(Z){return H[Z]})}var at=/\/+/g;function Ge(y,H){return typeof y=="object"&&y!==null&&y.key!=null?Ve(""+y.key):H.toString(36)}function Ct(){}function ue(y){switch(y.status){case"fulfilled":return y.value;case"rejected":throw y.reason;default:switch(typeof y.status=="string"?y.then(Ct,Ct):(y.status="pending",y.then(function(H){y.status==="pending"&&(y.status="fulfilled",y.value=H)},function(H){y.status==="pending"&&(y.status="rejected",y.reason=H)})),y.status){case"fulfilled":return y.value;case"rejected":throw y.reason}}throw y}function ae(y,H,Z,Q,F){var oe=typeof y;(oe==="undefined"||oe==="boolean")&&(y=null);var te=!1;if(y===null)te=!0;else switch(oe){case"bigint":case"string":case"number":te=!0;break;case"object":switch(y.$$typeof){case s:case f:te=!0;break;case R:return te=y._init,ae(te(y._payload),H,Z,Q,F)}}if(te)return F=F(y),te=Q===""?"."+Ge(y,0):Q,$(F)?(Z="",te!=null&&(Z=te.replace(at,"$&/")+"/"),ae(F,H,Z,"",function(It){return It})):F!=null&&(be(F)&&(F=Te(F,Z+(F.key==null||y&&y.key===F.key?"":(""+F.key).replace(at,"$&/")+"/")+te)),H.push(F)),1;te=0;var lt=Q===""?".":Q+":";if($(y))for(var Ne=0;Ne<y.length;Ne++)Q=y[Ne],oe=lt+Ge(Q,Ne),te+=ae(Q,H,Z,oe,F);else if(Ne=D(y),typeof Ne=="function")for(y=Ne.call(y),Ne=0;!(Q=y.next()).done;)Q=Q.value,oe=lt+Ge(Q,Ne++),te+=ae(Q,H,Z,oe,F);else if(oe==="object"){if(typeof y.then=="function")return ae(ue(y),H,Z,Q,F);throw H=String(y),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(y).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return te}function M(y,H,Z){if(y==null)return y;var Q=[],F=0;return ae(y,Q,"","",function(oe){return H.call(Z,oe,F++)}),Q}function L(y){if(y._status===-1){var H=y._result;H=H(),H.then(function(Z){(y._status===0||y._status===-1)&&(y._status=1,y._result=Z)},function(Z){(y._status===0||y._status===-1)&&(y._status=2,y._result=Z)}),y._status===-1&&(y._status=0,y._result=H)}if(y._status===1)return y._result.default;throw y._result}var W=typeof reportError=="function"?reportError:function(y){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof y=="object"&&y!==null&&typeof y.message=="string"?String(y.message):String(y),error:y});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",y);return}console.error(y)};function xe(){}return le.Children={map:M,forEach:function(y,H,Z){M(y,function(){H.apply(this,arguments)},Z)},count:function(y){var H=0;return M(y,function(){H++}),H},toArray:function(y){return M(y,function(H){return H})||[]},only:function(y){if(!be(y))throw Error("React.Children.only expected to receive a single React element child.");return y}},le.Component=G,le.Fragment=d,le.Profiler=m,le.PureComponent=B,le.StrictMode=o,le.Suspense=g,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,le.__COMPILER_RUNTIME={__proto__:null,c:function(y){return J.H.useMemoCache(y)}},le.cache=function(y){return function(){return y.apply(null,arguments)}},le.cloneElement=function(y,H,Z){if(y==null)throw Error("The argument must be a React element, but you passed "+y+".");var Q=w({},y.props),F=y.key,oe=void 0;if(H!=null)for(te in H.ref!==void 0&&(oe=void 0),H.key!==void 0&&(F=""+H.key),H)!pe.call(H,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&H.ref===void 0||(Q[te]=H[te]);var te=arguments.length-2;if(te===1)Q.children=Z;else if(1<te){for(var lt=Array(te),Ne=0;Ne<te;Ne++)lt[Ne]=arguments[Ne+2];Q.children=lt}return Ee(y.type,F,void 0,void 0,oe,Q)},le.createContext=function(y){return y={$$typeof:z,_currentValue:y,_currentValue2:y,_threadCount:0,Provider:null,Consumer:null},y.Provider=y,y.Consumer={$$typeof:v,_context:y},y},le.createElement=function(y,H,Z){var Q,F={},oe=null;if(H!=null)for(Q in H.key!==void 0&&(oe=""+H.key),H)pe.call(H,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(F[Q]=H[Q]);var te=arguments.length-2;if(te===1)F.children=Z;else if(1<te){for(var lt=Array(te),Ne=0;Ne<te;Ne++)lt[Ne]=arguments[Ne+2];F.children=lt}if(y&&y.defaultProps)for(Q in te=y.defaultProps,te)F[Q]===void 0&&(F[Q]=te[Q]);return Ee(y,oe,void 0,void 0,null,F)},le.createRef=function(){return{current:null}},le.forwardRef=function(y){return{$$typeof:j,render:y}},le.isValidElement=be,le.lazy=function(y){return{$$typeof:R,_payload:{_status:-1,_result:y},_init:L}},le.memo=function(y,H){return{$$typeof:h,type:y,compare:H===void 0?null:H}},le.startTransition=function(y){var H=J.T,Z={};J.T=Z;try{var Q=y(),F=J.S;F!==null&&F(Z,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(xe,W)}catch(oe){W(oe)}finally{J.T=H}},le.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},le.use=function(y){return J.H.use(y)},le.useActionState=function(y,H,Z){return J.H.useActionState(y,H,Z)},le.useCallback=function(y,H){return J.H.useCallback(y,H)},le.useContext=function(y){return J.H.useContext(y)},le.useDebugValue=function(){},le.useDeferredValue=function(y,H){return J.H.useDeferredValue(y,H)},le.useEffect=function(y,H,Z){var Q=J.H;if(typeof Z=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return Q.useEffect(y,H)},le.useId=function(){return J.H.useId()},le.useImperativeHandle=function(y,H,Z){return J.H.useImperativeHandle(y,H,Z)},le.useInsertionEffect=function(y,H){return J.H.useInsertionEffect(y,H)},le.useLayoutEffect=function(y,H){return J.H.useLayoutEffect(y,H)},le.useMemo=function(y,H){return J.H.useMemo(y,H)},le.useOptimistic=function(y,H){return J.H.useOptimistic(y,H)},le.useReducer=function(y,H,Z){return J.H.useReducer(y,H,Z)},le.useRef=function(y){return J.H.useRef(y)},le.useState=function(y){return J.H.useState(y)},le.useSyncExternalStore=function(y,H,Z){return J.H.useSyncExternalStore(y,H,Z)},le.useTransition=function(){return J.H.useTransition()},le.version="19.1.0",le}var Cd;function Ds(){return Cd||(Cd=1,Ss.exports=wp()),Ss.exports}var A=Ds(),js={exports:{}},On={},Es={exports:{}},Ns={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Up(){return wd||(wd=1,function(s){function f(M,L){var W=M.length;M.push(L);e:for(;0<W;){var xe=W-1>>>1,y=M[xe];if(0<m(y,L))M[xe]=L,M[W]=y,W=xe;else break e}}function d(M){return M.length===0?null:M[0]}function o(M){if(M.length===0)return null;var L=M[0],W=M.pop();if(W!==L){M[0]=W;e:for(var xe=0,y=M.length,H=y>>>1;xe<H;){var Z=2*(xe+1)-1,Q=M[Z],F=Z+1,oe=M[F];if(0>m(Q,W))F<y&&0>m(oe,Q)?(M[xe]=oe,M[F]=W,xe=F):(M[xe]=Q,M[Z]=W,xe=Z);else if(F<y&&0>m(oe,W))M[xe]=oe,M[F]=W,xe=F;else break e}}return L}function m(M,L){var W=M.sortIndex-L.sortIndex;return W!==0?W:M.id-L.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var v=performance;s.unstable_now=function(){return v.now()}}else{var z=Date,j=z.now();s.unstable_now=function(){return z.now()-j}}var g=[],h=[],R=1,q=null,D=3,k=!1,w=!1,Y=!1,G=!1,T=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate<"u"?setImmediate:null;function $(M){for(var L=d(h);L!==null;){if(L.callback===null)o(h);else if(L.startTime<=M)o(h),L.sortIndex=L.expirationTime,f(g,L);else break;L=d(h)}}function J(M){if(Y=!1,$(M),!w)if(d(g)!==null)w=!0,pe||(pe=!0,Ge());else{var L=d(h);L!==null&&ae(J,L.startTime-M)}}var pe=!1,Ee=-1,Te=5,be=-1;function Ve(){return G?!0:!(s.unstable_now()-be<Te)}function at(){if(G=!1,pe){var M=s.unstable_now();be=M;var L=!0;try{e:{w=!1,Y&&(Y=!1,B(Ee),Ee=-1),k=!0;var W=D;try{t:{for($(M),q=d(g);q!==null&&!(q.expirationTime>M&&Ve());){var xe=q.callback;if(typeof xe=="function"){q.callback=null,D=q.priorityLevel;var y=xe(q.expirationTime<=M);if(M=s.unstable_now(),typeof y=="function"){q.callback=y,$(M),L=!0;break t}q===d(g)&&o(g),$(M)}else o(g);q=d(g)}if(q!==null)L=!0;else{var H=d(h);H!==null&&ae(J,H.startTime-M),L=!1}}break e}finally{q=null,D=W,k=!1}L=void 0}}finally{L?Ge():pe=!1}}}var Ge;if(typeof X=="function")Ge=function(){X(at)};else if(typeof MessageChannel<"u"){var Ct=new MessageChannel,ue=Ct.port2;Ct.port1.onmessage=at,Ge=function(){ue.postMessage(null)}}else Ge=function(){T(at,0)};function ae(M,L){Ee=T(function(){M(s.unstable_now())},L)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(M){M.callback=null},s.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<M?Math.floor(1e3/M):5},s.unstable_getCurrentPriorityLevel=function(){return D},s.unstable_next=function(M){switch(D){case 1:case 2:case 3:var L=3;break;default:L=D}var W=D;D=L;try{return M()}finally{D=W}},s.unstable_requestPaint=function(){G=!0},s.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var W=D;D=M;try{return L()}finally{D=W}},s.unstable_scheduleCallback=function(M,L,W){var xe=s.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?xe+W:xe):W=xe,M){case 1:var y=-1;break;case 2:y=250;break;case 5:y=1073741823;break;case 4:y=1e4;break;default:y=5e3}return y=W+y,M={id:R++,callback:L,priorityLevel:M,startTime:W,expirationTime:y,sortIndex:-1},W>xe?(M.sortIndex=W,f(h,M),d(g)===null&&M===d(h)&&(Y?(B(Ee),Ee=-1):Y=!0,ae(J,W-xe))):(M.sortIndex=y,f(g,M),w||k||(w=!0,pe||(pe=!0,Ge()))),M},s.unstable_shouldYield=Ve,s.unstable_wrapCallback=function(M){var L=D;return function(){var W=D;D=L;try{return M.apply(this,arguments)}finally{D=W}}}}(Ns)),Ns}var Ud;function Hp(){return Ud||(Ud=1,Es.exports=Up()),Es.exports}var As={exports:{}},$e={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function Bp(){if(Hd)return $e;Hd=1;var s=Ds();function f(g){var h="https://react.dev/errors/"+g;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)h+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+g+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(f(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},m=Symbol.for("react.portal");function v(g,h,R){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:m,key:q==null?null:""+q,children:g,containerInfo:h,implementation:R}}var z=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(g,h){if(g==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return $e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,$e.createPortal=function(g,h){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(f(299));return v(g,h,null,R)},$e.flushSync=function(g){var h=z.T,R=o.p;try{if(z.T=null,o.p=2,g)return g()}finally{z.T=h,o.p=R,o.d.f()}},$e.preconnect=function(g,h){typeof g=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(g,h))},$e.prefetchDNS=function(g){typeof g=="string"&&o.d.D(g)},$e.preinit=function(g,h){if(typeof g=="string"&&h&&typeof h.as=="string"){var R=h.as,q=j(R,h.crossOrigin),D=typeof h.integrity=="string"?h.integrity:void 0,k=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;R==="style"?o.d.S(g,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:q,integrity:D,fetchPriority:k}):R==="script"&&o.d.X(g,{crossOrigin:q,integrity:D,fetchPriority:k,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},$e.preinitModule=function(g,h){if(typeof g=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var R=j(h.as,h.crossOrigin);o.d.M(g,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(g)},$e.preload=function(g,h){if(typeof g=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var R=h.as,q=j(R,h.crossOrigin);o.d.L(g,R,{crossOrigin:q,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},$e.preloadModule=function(g,h){if(typeof g=="string")if(h){var R=j(h.as,h.crossOrigin);o.d.m(g,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(g)},$e.requestFormReset=function(g){o.d.r(g)},$e.unstable_batchedUpdates=function(g,h){return g(h)},$e.useFormState=function(g,h,R){return z.H.useFormState(g,h,R)},$e.useFormStatus=function(){return z.H.useHostTransitionStatus()},$e.version="19.1.0",$e}var Bd;function qp(){if(Bd)return As.exports;Bd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),As.exports=Bp(),As.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qd;function Yp(){if(qd)return On;qd=1;var s=Hp(),f=Ds(),d=qp();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function v(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function z(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function j(e){if(v(e)!==e)throw Error(o(188))}function g(e){var t=e.alternate;if(!t){if(t=v(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return j(n),e;if(i===l)return j(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,r=n.child;r;){if(r===a){c=!0,a=n,l=i;break}if(r===l){c=!0,l=n,a=i;break}r=r.sibling}if(!c){for(r=i.child;r;){if(r===a){c=!0,a=i,l=n;break}if(r===l){c=!0,l=i,a=n;break}r=r.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function h(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=h(e),t!==null)return t;e=e.sibling}return null}var R=Object.assign,q=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),w=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),T=Symbol.for("react.provider"),B=Symbol.for("react.consumer"),X=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),pe=Symbol.for("react.suspense_list"),Ee=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),be=Symbol.for("react.activity"),Ve=Symbol.for("react.memo_cache_sentinel"),at=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=at&&e[at]||e["@@iterator"],typeof e=="function"?e:null)}var Ct=Symbol.for("react.client.reference");function ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Ct?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case w:return"Fragment";case G:return"Profiler";case Y:return"StrictMode";case J:return"Suspense";case pe:return"SuspenseList";case be:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case X:return(e.displayName||"Context")+".Provider";case B:return(e._context.displayName||"Context")+".Consumer";case $:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ee:return t=e.displayName||null,t!==null?t:ue(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return ue(e(t))}catch{}}return null}var ae=Array.isArray,M=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},xe=[],y=-1;function H(e){return{current:e}}function Z(e){0>y||(e.current=xe[y],xe[y]=null,y--)}function Q(e,t){y++,xe[y]=e.current,e.current=t}var F=H(null),oe=H(null),te=H(null),lt=H(null);function Ne(e,t){switch(Q(te,t),Q(oe,e),Q(F,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=nd(t),e=id(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(F),Q(F,e)}function It(){Z(F),Z(oe),Z(te)}function iu(e){e.memoizedState!==null&&Q(lt,e);var t=F.current,a=id(t,e.type);t!==a&&(Q(oe,e),Q(F,a))}function Bn(e){oe.current===e&&(Z(F),Z(oe)),lt.current===e&&(Z(lt),En._currentValue=W)}var uu=Object.prototype.hasOwnProperty,cu=s.unstable_scheduleCallback,su=s.unstable_cancelCallback,om=s.unstable_shouldYield,fm=s.unstable_requestPaint,At=s.unstable_now,dm=s.unstable_getCurrentPriorityLevel,Hs=s.unstable_ImmediatePriority,Bs=s.unstable_UserBlockingPriority,qn=s.unstable_NormalPriority,mm=s.unstable_LowPriority,qs=s.unstable_IdlePriority,hm=s.log,pm=s.unstable_setDisableYieldValue,Dl=null,nt=null;function ea(e){if(typeof hm=="function"&&pm(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Dl,e)}catch{}}var it=Math.clz32?Math.clz32:ym,gm=Math.log,vm=Math.LN2;function ym(e){return e>>>=0,e===0?32:31-(gm(e)/vm|0)|0}var Yn=256,kn=4194304;function Aa(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var r=l&134217727;return r!==0?(l=r&~i,l!==0?n=Aa(l):(c&=r,c!==0?n=Aa(c):a||(a=r&~e,a!==0&&(n=Aa(a))))):(r=l&~i,r!==0?n=Aa(r):c!==0?n=Aa(c):a||(a=l&~e,a!==0&&(n=Aa(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Ml(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function bm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ys(){var e=Yn;return Yn<<=1,(Yn&4194048)===0&&(Yn=256),e}function ks(){var e=kn;return kn<<=1,(kn&62914560)===0&&(kn=4194304),e}function ru(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function _l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xm(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var r=e.entanglements,p=e.expirationTimes,E=e.hiddenUpdates;for(a=c&~a;0<a;){var _=31-it(a),U=1<<_;r[_]=0,p[_]=-1;var N=E[_];if(N!==null)for(E[_]=null,_=0;_<N.length;_++){var O=N[_];O!==null&&(O.lane&=-536870913)}a&=~U}l!==0&&Ls(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Ls(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-it(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Gs(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-it(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ou(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Xs(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:Nd(e.type))}function Sm(e,t){var a=L.p;try{return L.p=e,t()}finally{L.p=a}}var ta=Math.random().toString(36).slice(2),Ke="__reactFiber$"+ta,Fe="__reactProps$"+ta,Xa="__reactContainer$"+ta,du="__reactEvents$"+ta,jm="__reactListeners$"+ta,Em="__reactHandles$"+ta,Qs="__reactResources$"+ta,Cl="__reactMarker$"+ta;function mu(e){delete e[Ke],delete e[Fe],delete e[du],delete e[jm],delete e[Em]}function Qa(e){var t=e[Ke];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Xa]||a[Ke]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=rd(e);e!==null;){if(a=e[Ke])return a;e=rd(e)}return t}e=a,a=e.parentNode}return null}function Za(e){if(e=e[Ke]||e[Xa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Va(e){var t=e[Qs];return t||(t=e[Qs]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Be(e){e[Cl]=!0}var Zs=new Set,Vs={};function Ta(e,t){Ka(e,t),Ka(e+"Capture",t)}function Ka(e,t){for(Vs[e]=t,e=0;e<t.length;e++)Zs.add(t[e])}var Nm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ks={},Js={};function Am(e){return uu.call(Js,e)?!0:uu.call(Ks,e)?!1:Nm.test(e)?Js[e]=!0:(Ks[e]=!0,!1)}function Gn(e,t,a){if(Am(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function wt(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var hu,$s;function Ja(e){if(hu===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);hu=t&&t[1]||"",$s=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+hu+e+$s}var pu=!1;function gu(e,t){if(!e||pu)return"";pu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(O){var N=O}Reflect.construct(e,[],U)}else{try{U.call()}catch(O){N=O}e.call(U.prototype)}}else{try{throw Error()}catch(O){N=O}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(O){if(O&&N&&typeof O.stack=="string")return[O.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],r=i[1];if(c&&r){var p=c.split(`
`),E=r.split(`
`);for(n=l=0;l<p.length&&!p[l].includes("DetermineComponentFrameRoot");)l++;for(;n<E.length&&!E[n].includes("DetermineComponentFrameRoot");)n++;if(l===p.length||n===E.length)for(l=p.length-1,n=E.length-1;1<=l&&0<=n&&p[l]!==E[n];)n--;for(;1<=l&&0<=n;l--,n--)if(p[l]!==E[n]){if(l!==1||n!==1)do if(l--,n--,0>n||p[l]!==E[n]){var _=`
`+p[l].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=l&&0<=n);break}}}finally{pu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function Tm(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return gu(e.type,!1);case 11:return gu(e.type.render,!1);case 1:return gu(e.type,!0);case 31:return Ja("Activity");default:return""}}function Ws(e){try{var t="";do t+=Tm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fs(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function zm(e){var t=Fs(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qn(e){e._valueTracker||(e._valueTracker=zm(e))}function Ps(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Fs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rm=/[\n"\\]/g;function ht(e){return e.replace(Rm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function vu(e,t,a,l,n,i,c,r){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+mt(t)):e.value!==""+mt(t)&&(e.value=""+mt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?yu(e,c,mt(t)):a!=null?yu(e,c,mt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.name=""+mt(r):e.removeAttribute("name")}function Is(e,t,a,l,n,i,c,r){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+mt(a):"",t=t!=null?""+mt(t):a,r||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=r?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function yu(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+mt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function er(e,t,a){if(t!=null&&(t=""+mt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+mt(a):""}function tr(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(ae(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=mt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Om=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ar(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Om.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function lr(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&ar(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&ar(e,i,t[i])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Dm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Mm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return Mm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var xu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function nr(e){var t=Za(e);if(t&&(e=t.stateNode)){var a=e[Fe]||null;e:switch(e=t.stateNode,t.type){case"input":if(vu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[Fe]||null;if(!n)throw Error(o(90));vu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Ps(l)}break e;case"textarea":er(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var ju=!1;function ir(e,t,a){if(ju)return e(t,a);ju=!0;try{var l=e(t);return l}finally{if(ju=!1,(Fa!==null||Pa!==null)&&(Mi(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,nr(t),e)))for(t=0;t<e.length;t++)nr(e[t])}}function Ul(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Fe]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Eu=!1;if(Ut)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){Eu=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{Eu=!1}var aa=null,Nu=null,Kn=null;function ur(){if(Kn)return Kn;var e,t=Nu,a=t.length,l,n="value"in aa?aa.value:aa.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Kn=n.slice(e,1<l?1-l:void 0)}function Jn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $n(){return!0}function cr(){return!1}function Pe(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(a=e[r],this[r]=a?a(i):i[r]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?$n:cr,this.isPropagationStopped=cr,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=$n)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=$n)},persist:function(){},isPersistent:$n}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wn=Pe(za),Bl=R({},za,{view:0,detail:0}),_m=Pe(Bl),Au,Tu,ql,Fn=R({},Bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ql&&(ql&&e.type==="mousemove"?(Au=e.screenX-ql.screenX,Tu=e.screenY-ql.screenY):Tu=Au=0,ql=e),Au)},movementY:function(e){return"movementY"in e?e.movementY:Tu}}),sr=Pe(Fn),Cm=R({},Fn,{dataTransfer:0}),wm=Pe(Cm),Um=R({},Bl,{relatedTarget:0}),zu=Pe(Um),Hm=R({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Bm=Pe(Hm),qm=R({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ym=Pe(qm),km=R({},za,{data:0}),rr=Pe(km),Lm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xm[e])?!!t[e]:!1}function Ru(){return Qm}var Zm=R({},Bl,{key:function(e){if(e.key){var t=Lm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Jn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(e){return e.type==="keypress"?Jn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Jn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vm=Pe(Zm),Km=R({},Fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),or=Pe(Km),Jm=R({},Bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),$m=Pe(Jm),Wm=R({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),Fm=Pe(Wm),Pm=R({},Fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=Pe(Pm),eh=R({},za,{newState:0,oldState:0}),th=Pe(eh),ah=[9,13,27,32],Ou=Ut&&"CompositionEvent"in window,Yl=null;Ut&&"documentMode"in document&&(Yl=document.documentMode);var lh=Ut&&"TextEvent"in window&&!Yl,fr=Ut&&(!Ou||Yl&&8<Yl&&11>=Yl),dr=" ",mr=!1;function hr(e,t){switch(e){case"keyup":return ah.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function nh(e,t){switch(e){case"compositionend":return pr(t);case"keypress":return t.which!==32?null:(mr=!0,dr);case"textInput":return e=t.data,e===dr&&mr?null:e;default:return null}}function ih(e,t){if(Ia)return e==="compositionend"||!Ou&&hr(e,t)?(e=ur(),Kn=Nu=aa=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fr&&t.locale!=="ko"?null:t.data;default:return null}}var uh={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function gr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!uh[e.type]:t==="textarea"}function vr(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=Bi(t,"onChange"),0<t.length&&(a=new Wn("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var kl=null,Ll=null;function ch(e){If(e,0)}function Pn(e){var t=wl(e);if(Ps(t))return e}function yr(e,t){if(e==="change")return t}var br=!1;if(Ut){var Du;if(Ut){var Mu="oninput"in document;if(!Mu){var xr=document.createElement("div");xr.setAttribute("oninput","return;"),Mu=typeof xr.oninput=="function"}Du=Mu}else Du=!1;br=Du&&(!document.documentMode||9<document.documentMode)}function Sr(){kl&&(kl.detachEvent("onpropertychange",jr),Ll=kl=null)}function jr(e){if(e.propertyName==="value"&&Pn(Ll)){var t=[];vr(t,Ll,e,Su(e)),ir(ch,t)}}function sh(e,t,a){e==="focusin"?(Sr(),kl=t,Ll=a,kl.attachEvent("onpropertychange",jr)):e==="focusout"&&Sr()}function rh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Ll)}function oh(e,t){if(e==="click")return Pn(t)}function fh(e,t){if(e==="input"||e==="change")return Pn(t)}function dh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ut=typeof Object.is=="function"?Object.is:dh;function Gl(e,t){if(ut(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!uu.call(t,n)||!ut(e[n],t[n]))return!1}return!0}function Er(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nr(e,t){var a=Er(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Er(a)}}function Ar(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ar(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Tr(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function _u(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mh=Ut&&"documentMode"in document&&11>=document.documentMode,el=null,Cu=null,Xl=null,wu=!1;function zr(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;wu||el==null||el!==Zn(l)||(l=el,"selectionStart"in l&&_u(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Xl&&Gl(Xl,l)||(Xl=l,l=Bi(Cu,"onSelect"),0<l.length&&(t=new Wn("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ra(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionrun:Ra("Transition","TransitionRun"),transitionstart:Ra("Transition","TransitionStart"),transitioncancel:Ra("Transition","TransitionCancel"),transitionend:Ra("Transition","TransitionEnd")},Uu={},Rr={};Ut&&(Rr=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Oa(e){if(Uu[e])return Uu[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in Rr)return Uu[e]=t[a];return e}var Or=Oa("animationend"),Dr=Oa("animationiteration"),Mr=Oa("animationstart"),hh=Oa("transitionrun"),ph=Oa("transitionstart"),gh=Oa("transitioncancel"),_r=Oa("transitionend"),Cr=new Map,Hu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hu.push("scrollEnd");function jt(e,t){Cr.set(e,t),Ta(t,[e])}var wr=new WeakMap;function pt(e,t){if(typeof e=="object"&&e!==null){var a=wr.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Ws(t)},wr.set(e,t),t)}return{value:e,source:t,stack:Ws(t)}}var gt=[],al=0,Bu=0;function In(){for(var e=al,t=Bu=al=0;t<e;){var a=gt[t];gt[t++]=null;var l=gt[t];gt[t++]=null;var n=gt[t];gt[t++]=null;var i=gt[t];if(gt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&Ur(a,n,i)}}function ei(e,t,a,l){gt[al++]=e,gt[al++]=t,gt[al++]=a,gt[al++]=l,Bu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function qu(e,t,a,l){return ei(e,t,a,l),ti(e)}function ll(e,t){return ei(e,null,null,t),ti(e)}function Ur(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-it(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ti(e){if(50<pn)throw pn=0,Qc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function vh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,a,l){return new vh(e,t,a,l)}function Yu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ht(e,t){var a=e.alternate;return a===null?(a=ct(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Hr(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ai(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")Yu(e)&&(c=1);else if(typeof e=="string")c=bp(e,a,F.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case be:return e=ct(31,a,t,n),e.elementType=be,e.lanes=i,e;case w:return Da(a.children,n,i,t);case Y:c=8,n|=24;break;case G:return e=ct(12,a,t,n|2),e.elementType=G,e.lanes=i,e;case J:return e=ct(13,a,t,n),e.elementType=J,e.lanes=i,e;case pe:return e=ct(19,a,t,n),e.elementType=pe,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case T:case X:c=10;break e;case B:c=9;break e;case $:c=11;break e;case Ee:c=14;break e;case Te:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=ct(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Da(e,t,a,l){return e=ct(7,e,l,t),e.lanes=a,e}function ku(e,t,a){return e=ct(6,e,null,t),e.lanes=a,e}function Lu(e,t,a){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],ul=0,li=null,ni=0,vt=[],yt=0,Ma=null,Bt=1,qt="";function _a(e,t){il[ul++]=ni,il[ul++]=li,li=e,ni=t}function Br(e,t,a){vt[yt++]=Bt,vt[yt++]=qt,vt[yt++]=Ma,Ma=e;var l=Bt;e=qt;var n=32-it(l)-1;l&=~(1<<n),a+=1;var i=32-it(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,Bt=1<<32-it(t)+n|a<<n|l,qt=i+e}else Bt=1<<i|a<<n|l,qt=e}function Gu(e){e.return!==null&&(_a(e,1),Br(e,1,0))}function Xu(e){for(;e===li;)li=il[--ul],il[ul]=null,ni=il[--ul],il[ul]=null;for(;e===Ma;)Ma=vt[--yt],vt[yt]=null,qt=vt[--yt],vt[yt]=null,Bt=vt[--yt],vt[yt]=null}var We=null,Oe=null,de=!1,Ca=null,Tt=!1,Qu=Error(o(519));function wa(e){var t=Error(o(418,""));throw Vl(pt(t,e)),Qu}function qr(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ke]=e,t[Fe]=l,a){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(a=0;a<vn.length;a++)se(vn[a],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Is(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Qn(t);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),tr(t,l.value,l.defaultValue,l.children),Qn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||ld(t.textContent,a)?(l.popover!=null&&(se("beforetoggle",t),se("toggle",t)),l.onScroll!=null&&se("scroll",t),l.onScrollEnd!=null&&se("scrollend",t),l.onClick!=null&&(t.onclick=qi),t=!0):t=!1,t||wa(e)}function Yr(e){for(We=e.return;We;)switch(We.tag){case 5:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:We=We.return}}function Ql(e){if(e!==We)return!1;if(!de)return Yr(e),de=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||us(e.type,e.memoizedProps)),a=!a),a&&Oe&&wa(e),Yr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Oe=Nt(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Oe=null}}else t===27?(t=Oe,ya(e.type)?(e=os,os=null,Oe=e):Oe=t):Oe=We?Nt(e.stateNode.nextSibling):null;return!0}function Zl(){Oe=We=null,de=!1}function kr(){var e=Ca;return e!==null&&(tt===null?tt=e:tt.push.apply(tt,e),Ca=null),e}function Vl(e){Ca===null?Ca=[e]:Ca.push(e)}var Zu=H(null),Ua=null,Yt=null;function la(e,t,a){Q(Zu,t._currentValue),t._currentValue=a}function kt(e){e._currentValue=Zu.current,Z(Zu)}function Vu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Ku(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var r=i;i=n;for(var p=0;p<t.length;p++)if(r.context===t[p]){i.lanes|=a,r=i.alternate,r!==null&&(r.lanes|=a),Vu(i.return,a,e),l||(c=null);break e}i=r.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Vu(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function Kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var r=n.type;ut(n.pendingProps.value,c.value)||(e!==null?e.push(r):e=[r])}}else if(n===lt.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}n=n.return}e!==null&&Ku(t,e,a,l),t.flags|=262144}function ii(e){for(e=e.firstContext;e!==null;){if(!ut(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ha(e){Ua=e,Yt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Je(e){return Lr(Ua,e)}function ui(e,t){return Ua===null&&Ha(e),Lr(e,t)}function Lr(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Yt===null){if(e===null)throw Error(o(308));Yt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Yt=Yt.next=t;return a}var yh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},bh=s.unstable_scheduleCallback,xh=s.unstable_NormalPriority,Ue={$$typeof:X,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ju(){return{controller:new yh,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&bh(xh,function(){e.controller.abort()})}var $l=null,$u=0,cl=0,sl=null;function Sh(e,t){if($l===null){var a=$l=[];$u=0,cl=Fc(),sl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return $u++,t.then(Gr,Gr),t}function Gr(){if(--$u===0&&$l!==null){sl!==null&&(sl.status="fulfilled");var e=$l;$l=null,cl=0,sl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function jh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Xr=M.S;M.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sh(e,t),Xr!==null&&Xr(e,t)};var Ba=H(null);function Wu(){var e=Ba.current;return e!==null?e:je.pooledCache}function ci(e,t){t===null?Q(Ba,Ba.current):Q(Ba,t.pool)}function Qr(){var e=Wu();return e===null?null:{parent:Ue._currentValue,pool:e}}var Wl=Error(o(460)),Zr=Error(o(474)),si=Error(o(542)),Fu={then:function(){}};function Vr(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Kr(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$r(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,$r(e),e}throw Fl=t,Wl}}var Fl=null;function Jr(){if(Fl===null)throw Error(o(459));var e=Fl;return Fl=null,e}function $r(e){if(e===Wl||e===si)throw Error(o(483))}var na=!1;function Pu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ua(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(me&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ti(e),Ur(e,null,a),t}return ei(e,l,t,a),ti(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gs(e,a)}}function ec(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var tc=!1;function Il(){if(tc){var e=sl;if(e!==null)throw e}}function en(e,t,a,l){tc=!1;var n=e.updateQueue;na=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,r=n.shared.pending;if(r!==null){n.shared.pending=null;var p=r,E=p.next;p.next=null,c===null?i=E:c.next=E,c=p;var _=e.alternate;_!==null&&(_=_.updateQueue,r=_.lastBaseUpdate,r!==c&&(r===null?_.firstBaseUpdate=E:r.next=E,_.lastBaseUpdate=p))}if(i!==null){var U=n.baseState;c=0,_=E=p=null,r=i;do{var N=r.lane&-536870913,O=N!==r.lane;if(O?(re&N)===N:(l&N)===N){N!==0&&N===cl&&(tc=!0),_!==null&&(_=_.next={lane:0,tag:r.tag,payload:r.payload,callback:null,next:null});e:{var ee=e,P=r;N=t;var ye=a;switch(P.tag){case 1:if(ee=P.payload,typeof ee=="function"){U=ee.call(ye,U,N);break e}U=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=P.payload,N=typeof ee=="function"?ee.call(ye,U,N):ee,N==null)break e;U=R({},U,N);break e;case 2:na=!0}}N=r.callback,N!==null&&(e.flags|=64,O&&(e.flags|=8192),O=n.callbacks,O===null?n.callbacks=[N]:O.push(N))}else O={lane:N,tag:r.tag,payload:r.payload,callback:r.callback,next:null},_===null?(E=_=O,p=U):_=_.next=O,c|=N;if(r=r.next,r===null){if(r=n.shared.pending,r===null)break;O=r,r=O.next,O.next=null,n.lastBaseUpdate=O,n.shared.pending=null}}while(!0);_===null&&(p=U),n.baseState=p,n.firstBaseUpdate=E,n.lastBaseUpdate=_,i===null&&(n.shared.lanes=0),ha|=c,e.lanes=c,e.memoizedState=U}}function Wr(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Fr(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wr(a[e],t)}var rl=H(null),oi=H(0);function Pr(e,t){e=Kt,Q(oi,e),Q(rl,t),Kt=e|t.baseLanes}function ac(){Q(oi,Kt),Q(rl,rl.current)}function lc(){Kt=oi.current,Z(rl),Z(oi)}var ca=0,ne=null,ge=null,Ce=null,fi=!1,ol=!1,qa=!1,di=0,tn=0,fl=null,Eh=0;function Me(){throw Error(o(321))}function nc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!ut(e[a],t[a]))return!1;return!0}function ic(e,t,a,l,n,i){return ca=i,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Ho:Bo,qa=!1,i=a(l,n),qa=!1,ol&&(i=eo(t,a,l,n)),Ir(e),i}function Ir(e){M.H=yi;var t=ge!==null&&ge.next!==null;if(ca=0,Ce=ge=ne=null,fi=!1,tn=0,fl=null,t)throw Error(o(300));e===null||qe||(e=e.dependencies,e!==null&&ii(e)&&(qe=!0))}function eo(e,t,a,l){ne=e;var n=0;do{if(ol&&(fl=null),tn=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,Ce=ge=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}M.H=Dh,i=t(a,l)}while(ol);return i}function Nh(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(ge!==null?ge.memoizedState:null)!==e&&(ne.flags|=1024),t}function uc(){var e=di!==0;return di=0,e}function cc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function sc(e){if(fi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fi=!1}ca=0,Ce=ge=ne=null,ol=!1,tn=di=0,fl=null}function Ie(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ne.memoizedState=Ce=e:Ce=Ce.next=e,Ce}function we(){if(ge===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ge.next;var t=Ce===null?ne.memoizedState:Ce.next;if(t!==null)Ce=t,ge=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));ge=e,e={memoizedState:ge.memoizedState,baseState:ge.baseState,baseQueue:ge.baseQueue,queue:ge.queue,next:null},Ce===null?ne.memoizedState=Ce=e:Ce=Ce.next=e}return Ce}function rc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=Kr(fl,e,t),t=ne,(Ce===null?t.memoizedState:Ce.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Ho:Bo),e}function mi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===X)return Je(e)}throw Error(o(438,String(e)))}function oc(e){var t=null,a=ne.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ne.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=rc(),ne.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Ve;return t.index++,a}function Lt(e,t){return typeof t=="function"?t(e):t}function hi(e){var t=we();return fc(t,ge,e)}function fc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var r=c=null,p=null,E=t,_=!1;do{var U=E.lane&-536870913;if(U!==E.lane?(re&U)===U:(ca&U)===U){var N=E.revertLane;if(N===0)p!==null&&(p=p.next={lane:0,revertLane:0,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null}),U===cl&&(_=!0);else if((ca&N)===N){E=E.next,N===cl&&(_=!0);continue}else U={lane:0,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(r=p=U,c=i):p=p.next=U,ne.lanes|=N,ha|=N;U=E.action,qa&&a(i,U),i=E.hasEagerState?E.eagerState:a(i,U)}else N={lane:U,revertLane:E.revertLane,action:E.action,hasEagerState:E.hasEagerState,eagerState:E.eagerState,next:null},p===null?(r=p=N,c=i):p=p.next=N,ne.lanes|=U,ha|=U;E=E.next}while(E!==null&&E!==t);if(p===null?c=i:p.next=r,!ut(i,e.memoizedState)&&(qe=!0,_&&(a=sl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=p,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function dc(e){var t=we(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);ut(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function to(e,t,a){var l=ne,n=we(),i=de;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!ut((ge||n).memoizedState,a);c&&(n.memoizedState=a,qe=!0),n=n.queue;var r=no.bind(null,l,n,e);if(ln(2048,8,r,[e]),n.getSnapshot!==t||c||Ce!==null&&Ce.memoizedState.tag&1){if(l.flags|=2048,dl(9,pi(),lo.bind(null,l,n,a,t),null),je===null)throw Error(o(349));i||(ca&124)!==0||ao(l,t,a)}return a}function ao(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ne.updateQueue,t===null?(t=rc(),ne.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function lo(e,t,a,l){t.value=a,t.getSnapshot=l,io(t)&&uo(e)}function no(e,t,a){return a(function(){io(t)&&uo(e)})}function io(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!ut(e,a)}catch{return!0}}function uo(e){var t=ll(e,2);t!==null&&dt(t,e,2)}function mc(e){var t=Ie();if(typeof e=="function"){var a=e;if(e=a(),qa){ea(!0);try{a()}finally{ea(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:e},t}function co(e,t,a,l){return e.baseState=a,fc(e,ge,typeof l=="function"?l:Lt)}function Ah(e,t,a,l,n){if(vi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};M.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,so(t,i)):(i.next=a.next,t.pending=a.next=i)}}function so(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=M.T,c={};M.T=c;try{var r=a(n,l),p=M.S;p!==null&&p(c,r),ro(e,t,r)}catch(E){hc(e,t,E)}finally{M.T=i}}else try{i=a(n,l),ro(e,t,i)}catch(E){hc(e,t,E)}}function ro(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){oo(e,t,l)},function(l){return hc(e,t,l)}):oo(e,t,a)}function oo(e,t,a){t.status="fulfilled",t.value=a,fo(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,so(e,a)))}function hc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,fo(t),t=t.next;while(t!==l)}e.action=null}function fo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mo(e,t){return t}function ho(e,t){if(de){var a=je.formState;if(a!==null){e:{var l=ne;if(de){if(Oe){t:{for(var n=Oe,i=Tt;n.nodeType!==8;){if(!i){n=null;break t}if(n=Nt(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Oe=Nt(n.nextSibling),l=n.data==="F!";break e}}wa(l)}l=!1}l&&(t=a[0])}}return a=Ie(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mo,lastRenderedState:t},a.queue=l,a=Co.bind(null,ne,l),l.dispatch=a,l=mc(!1),i=bc.bind(null,ne,!1,l.queue),l=Ie(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Ah.bind(null,ne,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function po(e){var t=we();return go(t,ge,e)}function go(e,t,a){if(t=fc(e,t,mo)[0],e=hi(Lt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(c){throw c===Wl?si:c}else l=t;t=we();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ne.flags|=2048,dl(9,pi(),Th.bind(null,n,a),null)),[l,i,e]}function Th(e,t){e.action=t}function vo(e){var t=we(),a=ge;if(a!==null)return go(t,a,e);we(),t=t.memoizedState,a=we();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ne.updateQueue,t===null&&(t=rc(),ne.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function pi(){return{destroy:void 0,resource:void 0}}function yo(){return we().memoizedState}function gi(e,t,a,l){var n=Ie();l=l===void 0?null:l,ne.flags|=e,n.memoizedState=dl(1|t,pi(),a,l)}function ln(e,t,a,l){var n=we();l=l===void 0?null:l;var i=n.memoizedState.inst;ge!==null&&l!==null&&nc(l,ge.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(ne.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function bo(e,t){gi(8390656,8,e,t)}function xo(e,t){ln(2048,8,e,t)}function So(e,t){return ln(4,2,e,t)}function jo(e,t){return ln(4,4,e,t)}function Eo(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function No(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,Eo.bind(null,t,e),a)}function pc(){}function Ao(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&nc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function To(e,t){var a=we();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&nc(t,l[1]))return l[0];if(l=e(),qa){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l}function gc(e,t,a){return a===void 0||(ca&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Df(),ne.lanes|=e,ha|=e,a)}function zo(e,t,a,l){return ut(a,t)?a:rl.current!==null?(e=gc(e,a,l),ut(e,t)||(qe=!0),e):(ca&42)===0?(qe=!0,e.memoizedState=a):(e=Df(),ne.lanes|=e,ha|=e,t)}function Ro(e,t,a,l,n){var i=L.p;L.p=i!==0&&8>i?i:8;var c=M.T,r={};M.T=r,bc(e,!1,t,a);try{var p=n(),E=M.S;if(E!==null&&E(r,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var _=jh(p,l);nn(e,t,_,ft(e))}else nn(e,t,l,ft(e))}catch(U){nn(e,t,{then:function(){},status:"rejected",reason:U},ft())}finally{L.p=i,M.T=c}}function zh(){}function vc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=Oo(e).queue;Ro(e,n,t,W,a===null?zh:function(){return Do(e),a(l)})}function Oo(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Do(e){var t=Oo(e).next.queue;nn(e,t,{},ft())}function yc(){return Je(En)}function Mo(){return we().memoizedState}function _o(){return we().memoizedState}function Rh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=ft();e=ia(a);var l=ua(t,e,a);l!==null&&(dt(l,t,a),Pl(l,t,a)),t={cache:Ju()},e.payload=t;return}t=t.return}}function Oh(e,t,a){var l=ft();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?wo(t,a):(a=qu(e,t,a,l),a!==null&&(dt(a,e,l),Uo(a,t,l)))}function Co(e,t,a){var l=ft();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))wo(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,r=i(c,a);if(n.hasEagerState=!0,n.eagerState=r,ut(r,c))return ei(e,t,n,0),je===null&&In(),!1}catch{}finally{}if(a=qu(e,t,n,l),a!==null)return dt(a,e,l),Uo(a,t,l),!0}return!1}function bc(e,t,a,l){if(l={lane:2,revertLane:Fc(),action:l,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(o(479))}else t=qu(e,a,l,2),t!==null&&dt(t,e,2)}function vi(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function wo(e,t){ol=fi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Uo(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Gs(e,a)}}var yi={readContext:Je,use:mi,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useLayoutEffect:Me,useInsertionEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useSyncExternalStore:Me,useId:Me,useHostTransitionStatus:Me,useFormState:Me,useActionState:Me,useOptimistic:Me,useMemoCache:Me,useCacheRefresh:Me},Ho={readContext:Je,use:mi,useCallback:function(e,t){return Ie().memoizedState=[e,t===void 0?null:t],e},useContext:Je,useEffect:bo,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,gi(4194308,4,Eo.bind(null,t,e),a)},useLayoutEffect:function(e,t){return gi(4194308,4,e,t)},useInsertionEffect:function(e,t){gi(4,2,e,t)},useMemo:function(e,t){var a=Ie();t=t===void 0?null:t;var l=e();if(qa){ea(!0);try{e()}finally{ea(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Ie();if(a!==void 0){var n=a(t);if(qa){ea(!0);try{a(t)}finally{ea(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Oh.bind(null,ne,e),[l.memoizedState,e]},useRef:function(e){var t=Ie();return e={current:e},t.memoizedState=e},useState:function(e){e=mc(e);var t=e.queue,a=Co.bind(null,ne,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:pc,useDeferredValue:function(e,t){var a=Ie();return gc(a,e,t)},useTransition:function(){var e=mc(!1);return e=Ro.bind(null,ne,e.queue,!0,!1),Ie().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ne,n=Ie();if(de){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),je===null)throw Error(o(349));(re&124)!==0||ao(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,bo(no.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,pi(),lo.bind(null,l,i,a,t),null),a},useId:function(){var e=Ie(),t=je.identifierPrefix;if(de){var a=qt,l=Bt;a=(l&~(1<<32-it(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=di++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=Eh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:yc,useFormState:ho,useActionState:ho,useOptimistic:function(e){var t=Ie();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=bc.bind(null,ne,!0,a),a.dispatch=t,[e,t]},useMemoCache:oc,useCacheRefresh:function(){return Ie().memoizedState=Rh.bind(null,ne)}},Bo={readContext:Je,use:mi,useCallback:Ao,useContext:Je,useEffect:xo,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:jo,useMemo:To,useReducer:hi,useRef:yo,useState:function(){return hi(Lt)},useDebugValue:pc,useDeferredValue:function(e,t){var a=we();return zo(a,ge.memoizedState,e,t)},useTransition:function(){var e=hi(Lt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:to,useId:Mo,useHostTransitionStatus:yc,useFormState:po,useActionState:po,useOptimistic:function(e,t){var a=we();return co(a,ge,e,t)},useMemoCache:oc,useCacheRefresh:_o},Dh={readContext:Je,use:mi,useCallback:Ao,useContext:Je,useEffect:xo,useImperativeHandle:No,useInsertionEffect:So,useLayoutEffect:jo,useMemo:To,useReducer:dc,useRef:yo,useState:function(){return dc(Lt)},useDebugValue:pc,useDeferredValue:function(e,t){var a=we();return ge===null?gc(a,e,t):zo(a,ge.memoizedState,e,t)},useTransition:function(){var e=dc(Lt)[0],t=we().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:to,useId:Mo,useHostTransitionStatus:yc,useFormState:vo,useActionState:vo,useOptimistic:function(e,t){var a=we();return ge!==null?co(a,ge,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:oc,useCacheRefresh:_o},ml=null,un=0;function bi(e){var t=un;return un+=1,ml===null&&(ml=[]),Kr(ml,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===q?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function qo(e){var t=e._init;return t(e._payload)}function Yo(e){function t(x,b){if(e){var S=x.deletions;S===null?(x.deletions=[b],x.flags|=16):S.push(b)}}function a(x,b){if(!e)return null;for(;b!==null;)t(x,b),b=b.sibling;return null}function l(x){for(var b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function n(x,b){return x=Ht(x,b),x.index=0,x.sibling=null,x}function i(x,b,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<b?(x.flags|=67108866,b):S):(x.flags|=67108866,b)):(x.flags|=1048576,b)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function r(x,b,S,C){return b===null||b.tag!==6?(b=ku(S,x.mode,C),b.return=x,b):(b=n(b,S),b.return=x,b)}function p(x,b,S,C){var V=S.type;return V===w?_(x,b,S.props.children,C,S.key):b!==null&&(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Te&&qo(V)===b.type)?(b=n(b,S.props),cn(b,S),b.return=x,b):(b=ai(S.type,S.key,S.props,null,x.mode,C),cn(b,S),b.return=x,b)}function E(x,b,S,C){return b===null||b.tag!==4||b.stateNode.containerInfo!==S.containerInfo||b.stateNode.implementation!==S.implementation?(b=Lu(S,x.mode,C),b.return=x,b):(b=n(b,S.children||[]),b.return=x,b)}function _(x,b,S,C,V){return b===null||b.tag!==7?(b=Da(S,x.mode,C,V),b.return=x,b):(b=n(b,S),b.return=x,b)}function U(x,b,S){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=ku(""+b,x.mode,S),b.return=x,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case D:return S=ai(b.type,b.key,b.props,null,x.mode,S),cn(S,b),S.return=x,S;case k:return b=Lu(b,x.mode,S),b.return=x,b;case Te:var C=b._init;return b=C(b._payload),U(x,b,S)}if(ae(b)||Ge(b))return b=Da(b,x.mode,S,null),b.return=x,b;if(typeof b.then=="function")return U(x,bi(b),S);if(b.$$typeof===X)return U(x,ui(x,b),S);xi(x,b)}return null}function N(x,b,S,C){var V=b!==null?b.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return V!==null?null:r(x,b,""+S,C);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case D:return S.key===V?p(x,b,S,C):null;case k:return S.key===V?E(x,b,S,C):null;case Te:return V=S._init,S=V(S._payload),N(x,b,S,C)}if(ae(S)||Ge(S))return V!==null?null:_(x,b,S,C,null);if(typeof S.then=="function")return N(x,b,bi(S),C);if(S.$$typeof===X)return N(x,b,ui(x,S),C);xi(x,S)}return null}function O(x,b,S,C,V){if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return x=x.get(S)||null,r(b,x,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case D:return x=x.get(C.key===null?S:C.key)||null,p(b,x,C,V);case k:return x=x.get(C.key===null?S:C.key)||null,E(b,x,C,V);case Te:var ie=C._init;return C=ie(C._payload),O(x,b,S,C,V)}if(ae(C)||Ge(C))return x=x.get(S)||null,_(b,x,C,V,null);if(typeof C.then=="function")return O(x,b,S,bi(C),V);if(C.$$typeof===X)return O(x,b,S,ui(b,C),V);xi(b,C)}return null}function ee(x,b,S,C){for(var V=null,ie=null,K=b,I=b=0,ke=null;K!==null&&I<S.length;I++){K.index>I?(ke=K,K=null):ke=K.sibling;var fe=N(x,K,S[I],C);if(fe===null){K===null&&(K=ke);break}e&&K&&fe.alternate===null&&t(x,K),b=i(fe,b,I),ie===null?V=fe:ie.sibling=fe,ie=fe,K=ke}if(I===S.length)return a(x,K),de&&_a(x,I),V;if(K===null){for(;I<S.length;I++)K=U(x,S[I],C),K!==null&&(b=i(K,b,I),ie===null?V=K:ie.sibling=K,ie=K);return de&&_a(x,I),V}for(K=l(K);I<S.length;I++)ke=O(K,x,I,S[I],C),ke!==null&&(e&&ke.alternate!==null&&K.delete(ke.key===null?I:ke.key),b=i(ke,b,I),ie===null?V=ke:ie.sibling=ke,ie=ke);return e&&K.forEach(function(Ea){return t(x,Ea)}),de&&_a(x,I),V}function P(x,b,S,C){if(S==null)throw Error(o(151));for(var V=null,ie=null,K=b,I=b=0,ke=null,fe=S.next();K!==null&&!fe.done;I++,fe=S.next()){K.index>I?(ke=K,K=null):ke=K.sibling;var Ea=N(x,K,fe.value,C);if(Ea===null){K===null&&(K=ke);break}e&&K&&Ea.alternate===null&&t(x,K),b=i(Ea,b,I),ie===null?V=Ea:ie.sibling=Ea,ie=Ea,K=ke}if(fe.done)return a(x,K),de&&_a(x,I),V;if(K===null){for(;!fe.done;I++,fe=S.next())fe=U(x,fe.value,C),fe!==null&&(b=i(fe,b,I),ie===null?V=fe:ie.sibling=fe,ie=fe);return de&&_a(x,I),V}for(K=l(K);!fe.done;I++,fe=S.next())fe=O(K,x,I,fe.value,C),fe!==null&&(e&&fe.alternate!==null&&K.delete(fe.key===null?I:fe.key),b=i(fe,b,I),ie===null?V=fe:ie.sibling=fe,ie=fe);return e&&K.forEach(function(Mp){return t(x,Mp)}),de&&_a(x,I),V}function ye(x,b,S,C){if(typeof S=="object"&&S!==null&&S.type===w&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case D:e:{for(var V=S.key;b!==null;){if(b.key===V){if(V=S.type,V===w){if(b.tag===7){a(x,b.sibling),C=n(b,S.props.children),C.return=x,x=C;break e}}else if(b.elementType===V||typeof V=="object"&&V!==null&&V.$$typeof===Te&&qo(V)===b.type){a(x,b.sibling),C=n(b,S.props),cn(C,S),C.return=x,x=C;break e}a(x,b);break}else t(x,b);b=b.sibling}S.type===w?(C=Da(S.props.children,x.mode,C,S.key),C.return=x,x=C):(C=ai(S.type,S.key,S.props,null,x.mode,C),cn(C,S),C.return=x,x=C)}return c(x);case k:e:{for(V=S.key;b!==null;){if(b.key===V)if(b.tag===4&&b.stateNode.containerInfo===S.containerInfo&&b.stateNode.implementation===S.implementation){a(x,b.sibling),C=n(b,S.children||[]),C.return=x,x=C;break e}else{a(x,b);break}else t(x,b);b=b.sibling}C=Lu(S,x.mode,C),C.return=x,x=C}return c(x);case Te:return V=S._init,S=V(S._payload),ye(x,b,S,C)}if(ae(S))return ee(x,b,S,C);if(Ge(S)){if(V=Ge(S),typeof V!="function")throw Error(o(150));return S=V.call(S),P(x,b,S,C)}if(typeof S.then=="function")return ye(x,b,bi(S),C);if(S.$$typeof===X)return ye(x,b,ui(x,S),C);xi(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,b!==null&&b.tag===6?(a(x,b.sibling),C=n(b,S),C.return=x,x=C):(a(x,b),C=ku(S,x.mode,C),C.return=x,x=C),c(x)):a(x,b)}return function(x,b,S,C){try{un=0;var V=ye(x,b,S,C);return ml=null,V}catch(K){if(K===Wl||K===si)throw K;var ie=ct(29,K,null,x.mode);return ie.lanes=C,ie.return=x,ie}finally{}}}var hl=Yo(!0),ko=Yo(!1),bt=H(null),zt=null;function sa(e){var t=e.alternate;Q(He,He.current&1),Q(bt,e),zt===null&&(t===null||rl.current!==null||t.memoizedState!==null)&&(zt=e)}function Lo(e){if(e.tag===22){if(Q(He,He.current),Q(bt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else ra()}function ra(){Q(He,He.current),Q(bt,bt.current)}function Gt(e){Z(bt),zt===e&&(zt=null),Z(He)}var He=H(0);function Si(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||rs(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function xc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:R({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Sc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=ft(),n=ia(l);n.payload=t,a!=null&&(n.callback=a),t=ua(e,n,l),t!==null&&(dt(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=ft(),n=ia(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=ua(e,n,l),t!==null&&(dt(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=ft(),l=ia(a);l.tag=2,t!=null&&(l.callback=t),t=ua(e,l,a),t!==null&&(dt(t,e,a),Pl(t,e,a))}};function Go(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Gl(a,l)||!Gl(n,i):!0}function Xo(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&Sc.enqueueReplaceState(t,t.state,null)}function Ya(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=R({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var ji=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Qo(e){ji(e)}function Zo(e){console.error(e)}function Vo(e){ji(e)}function Ei(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ko(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function jc(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){Ei(e,t)},a}function Jo(e){return e=ia(e),e.tag=3,e}function $o(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Ko(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Ko(t,a,l),typeof n!="function"&&(pa===null?pa=new Set([this]):pa.add(this));var r=l.stack;this.componentDidCatch(l.value,{componentStack:r!==null?r:""})})}function Mh(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Kl(t,a,n,!0),a=bt.current,a!==null){switch(a.tag){case 13:return zt===null?Vc():a.alternate===null&&De===0&&(De=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===Fu?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Jc(e,l,n)),!1;case 22:return a.flags|=65536,l===Fu?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Jc(e,l,n)),!1}throw Error(o(435,a.tag))}return Jc(e,l,n),Vc(),!1}if(de)return t=bt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Qu&&(e=Error(o(422),{cause:l}),Vl(pt(e,a)))):(l!==Qu&&(t=Error(o(423),{cause:l}),Vl(pt(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=pt(l,a),n=jc(e.stateNode,l,n),ec(e,n),De!==4&&(De=2)),!1;var i=Error(o(520),{cause:l});if(i=pt(i,a),hn===null?hn=[i]:hn.push(i),De!==4&&(De=2),t===null)return!0;l=pt(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=jc(a.stateNode,l,e),ec(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(pa===null||!pa.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Jo(n),$o(n,e,a,l),ec(a,n),!1}a=a.return}while(a!==null);return!1}var Wo=Error(o(461)),qe=!1;function Xe(e,t,a,l){t.child=e===null?ko(t,null,a,l):hl(t,e.child,a,l)}function Fo(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var r in l)r!=="ref"&&(c[r]=l[r])}else c=l;return Ha(t),l=ic(e,t,a,c,i,n),r=uc(),e!==null&&!qe?(cc(e,t,n),Xt(e,t,n)):(de&&r&&Gu(t),t.flags|=1,Xe(e,t,l,n),t.child)}function Po(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!Yu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Io(e,t,i,l,n)):(e=ai(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Dc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Gl,a(c,l)&&e.ref===t.ref)return Xt(e,t,n)}return t.flags|=1,e=Ht(i,l),e.ref=t.ref,e.return=t,t.child=e}function Io(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Gl(i,l)&&e.ref===t.ref)if(qe=!1,t.pendingProps=l=i,Dc(e,n))(e.flags&131072)!==0&&(qe=!0);else return t.lanes=e.lanes,Xt(e,t,n)}return Ec(e,t,a,l,n)}function ef(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return tf(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ci(t,i!==null?i.cachePool:null),i!==null?Pr(t,i):ac(),Lo(t);else return t.lanes=t.childLanes=536870912,tf(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ci(t,i.cachePool),Pr(t,i),ra(),t.memoizedState=null):(e!==null&&ci(t,null),ac(),ra());return Xe(e,t,n,a),t.child}function tf(e,t,a,l){var n=Wu();return n=n===null?null:{parent:Ue._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ci(t,null),ac(),Lo(t),e!==null&&Kl(e,t,l,!0),null}function Ni(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ec(e,t,a,l,n){return Ha(t),a=ic(e,t,a,l,void 0,n),l=uc(),e!==null&&!qe?(cc(e,t,n),Xt(e,t,n)):(de&&l&&Gu(t),t.flags|=1,Xe(e,t,a,n),t.child)}function af(e,t,a,l,n,i){return Ha(t),t.updateQueue=null,a=eo(t,l,a,n),Ir(e),l=uc(),e!==null&&!qe?(cc(e,t,i),Xt(e,t,i)):(de&&l&&Gu(t),t.flags|=1,Xe(e,t,a,i),t.child)}function lf(e,t,a,l,n){if(Ha(t),t.stateNode===null){var i=nl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Je(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Sc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Pu(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Je(c):nl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(xc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&Sc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var r=t.memoizedProps,p=Ya(a,r);i.props=p;var E=i.context,_=a.contextType;c=nl,typeof _=="object"&&_!==null&&(c=Je(_));var U=a.getDerivedStateFromProps;_=typeof U=="function"||typeof i.getSnapshotBeforeUpdate=="function",r=t.pendingProps!==r,_||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r||E!==c)&&Xo(t,i,l,c),na=!1;var N=t.memoizedState;i.state=N,en(t,l,i,n),Il(),E=t.memoizedState,r||N!==E||na?(typeof U=="function"&&(xc(t,a,U,l),E=t.memoizedState),(p=na||Go(t,a,p,l,N,E,c))?(_||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=E),i.props=l,i.state=E,i.context=c,l=p):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Iu(e,t),c=t.memoizedProps,_=Ya(a,c),i.props=_,U=t.pendingProps,N=i.context,E=a.contextType,p=nl,typeof E=="object"&&E!==null&&(p=Je(E)),r=a.getDerivedStateFromProps,(E=typeof r=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==U||N!==p)&&Xo(t,i,l,p),na=!1,N=t.memoizedState,i.state=N,en(t,l,i,n),Il();var O=t.memoizedState;c!==U||N!==O||na||e!==null&&e.dependencies!==null&&ii(e.dependencies)?(typeof r=="function"&&(xc(t,a,r,l),O=t.memoizedState),(_=na||Go(t,a,_,l,N,O,p)||e!==null&&e.dependencies!==null&&ii(e.dependencies))?(E||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,O,p),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,O,p)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=O),i.props=l,i.state=O,i.context=p,l=_):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ni(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):Xe(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Xt(e,t,n),e}function nf(e,t,a,l){return Zl(),t.flags|=256,Xe(e,t,a,l),t.child}var Nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ac(e){return{baseLanes:e,cachePool:Qr()}}function Tc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function uf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(de){if(n?sa(t):ra(),de){var r=Oe,p;if(p=r){e:{for(p=r,r=Tt;p.nodeType!==8;){if(!r){r=null;break e}if(p=Nt(p.nextSibling),p===null){r=null;break e}}r=p}r!==null?(t.memoizedState={dehydrated:r,treeContext:Ma!==null?{id:Bt,overflow:qt}:null,retryLane:536870912,hydrationErrors:null},p=ct(18,null,null,0),p.stateNode=r,p.return=t,t.child=p,We=t,Oe=null,p=!0):p=!1}p||wa(t)}if(r=t.memoizedState,r!==null&&(r=r.dehydrated,r!==null))return rs(r)?t.lanes=32:t.lanes=536870912,null;Gt(t)}return r=l.children,l=l.fallback,n?(ra(),n=t.mode,r=Ai({mode:"hidden",children:r},n),l=Da(l,n,a,null),r.return=t,l.return=t,r.sibling=l,t.child=r,n=t.child,n.memoizedState=Ac(a),n.childLanes=Tc(e,c,a),t.memoizedState=Nc,l):(sa(t),zc(t,r))}if(p=e.memoizedState,p!==null&&(r=p.dehydrated,r!==null)){if(i)t.flags&256?(sa(t),t.flags&=-257,t=Rc(e,t,a)):t.memoizedState!==null?(ra(),t.child=e.child,t.flags|=128,t=null):(ra(),n=l.fallback,r=t.mode,l=Ai({mode:"visible",children:l.children},r),n=Da(n,r,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=Ac(a),l.childLanes=Tc(e,c,a),t.memoizedState=Nc,t=n);else if(sa(t),rs(r)){if(c=r.nextSibling&&r.nextSibling.dataset,c)var E=c.dgst;c=E,l=Error(o(419)),l.stack="",l.digest=c,Vl({value:l,source:null,stack:null}),t=Rc(e,t,a)}else if(qe||Kl(e,t,a,!1),c=(a&e.childLanes)!==0,qe||c){if(c=je,c!==null&&(l=a&-a,l=(l&42)!==0?1:ou(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==p.retryLane))throw p.retryLane=l,ll(e,l),dt(c,e,l),Wo;r.data==="$?"||Vc(),t=Rc(e,t,a)}else r.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=p.treeContext,Oe=Nt(r.nextSibling),We=t,de=!0,Ca=null,Tt=!1,e!==null&&(vt[yt++]=Bt,vt[yt++]=qt,vt[yt++]=Ma,Bt=e.id,qt=e.overflow,Ma=t),t=zc(t,l.children),t.flags|=4096);return t}return n?(ra(),n=l.fallback,r=t.mode,p=e.child,E=p.sibling,l=Ht(p,{mode:"hidden",children:l.children}),l.subtreeFlags=p.subtreeFlags&65011712,E!==null?n=Ht(E,n):(n=Da(n,r,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,r=e.child.memoizedState,r===null?r=Ac(a):(p=r.cachePool,p!==null?(E=Ue._currentValue,p=p.parent!==E?{parent:E,pool:E}:p):p=Qr(),r={baseLanes:r.baseLanes|a,cachePool:p}),n.memoizedState=r,n.childLanes=Tc(e,c,a),t.memoizedState=Nc,l):(sa(t),a=e.child,e=a.sibling,a=Ht(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function zc(e,t){return t=Ai({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ai(e,t){return e=ct(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Rc(e,t,a){return hl(t,e.child,null,a),e=zc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Vu(e.return,t,a)}function Oc(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function sf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Xe(e,t,l.children,a),l=He.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&cf(e,a,t);else if(e.tag===19)cf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(Q(He,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Si(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Oc(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Si(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Oc(t,!0,a,null,i);break;case"together":Oc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ha|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ht(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ht(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Dc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ii(e)))}function _h(e,t,a){switch(t.tag){case 3:Ne(t,t.stateNode.containerInfo),la(t,Ue,e.memoizedState.cache),Zl();break;case 27:case 5:iu(t);break;case 4:Ne(t,t.stateNode.containerInfo);break;case 10:la(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(sa(t),t.flags|=128,null):(a&t.child.childLanes)!==0?uf(e,t,a):(sa(t),e=Xt(e,t,a),e!==null?e.sibling:null);sa(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return sf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),Q(He,He.current),l)break;return null;case 22:case 23:return t.lanes=0,ef(e,t,a);case 24:la(t,Ue,e.memoizedState.cache)}return Xt(e,t,a)}function rf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)qe=!0;else{if(!Dc(e,a)&&(t.flags&128)===0)return qe=!1,_h(e,t,a);qe=(e.flags&131072)!==0}else qe=!1,de&&(t.flags&1048576)!==0&&Br(t,ni,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")Yu(l)?(e=Ya(l,e),t.tag=1,t=lf(null,t,l,e,a)):(t.tag=0,t=Ec(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===$){t.tag=11,t=Fo(null,t,l,e,a);break e}else if(n===Ee){t.tag=14,t=Po(null,t,l,e,a);break e}}throw t=ue(l)||l,Error(o(306,t,""))}}return t;case 0:return Ec(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ya(l,t.pendingProps),lf(e,t,l,n,a);case 3:e:{if(Ne(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Iu(e,t),en(t,l,null,a);var c=t.memoizedState;if(l=c.cache,la(t,Ue,l),l!==i.cache&&Ku(t,[Ue],a,!0),Il(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=nf(e,t,l,a);break e}else if(l!==n){n=pt(Error(o(424)),t),Vl(n),t=nf(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Oe=Nt(e.firstChild),We=t,de=!0,Ca=null,Tt=!0,a=ko(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Zl(),l===n){t=Xt(e,t,a);break e}Xe(e,t,l,a)}t=t.child}return t;case 26:return Ni(e,t),e===null?(a=md(t.type,null,t.pendingProps,null))?t.memoizedState=a:de||(a=t.type,e=t.pendingProps,l=Yi(te.current).createElement(a),l[Ke]=t,l[Fe]=e,Ze(l,a,e),Be(l),t.stateNode=l):t.memoizedState=md(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return iu(t),e===null&&de&&(l=t.stateNode=od(t.type,t.pendingProps,te.current),We=t,Tt=!0,n=Oe,ya(t.type)?(os=n,Oe=Nt(l.firstChild)):Oe=n),Xe(e,t,t.pendingProps.children,a),Ni(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&de&&((n=l=Oe)&&(l=up(l,t.type,t.pendingProps,Tt),l!==null?(t.stateNode=l,We=t,Oe=Nt(l.firstChild),Tt=!1,n=!0):n=!1),n||wa(t)),iu(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,us(n,i)?l=null:c!==null&&us(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=ic(e,t,Nh,null,null,a),En._currentValue=n),Ni(e,t),Xe(e,t,l,a),t.child;case 6:return e===null&&de&&((e=a=Oe)&&(a=cp(a,t.pendingProps,Tt),a!==null?(t.stateNode=a,We=t,Oe=null,e=!0):e=!1),e||wa(t)),null;case 13:return uf(e,t,a);case 4:return Ne(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):Xe(e,t,l,a),t.child;case 11:return Fo(e,t,t.type,t.pendingProps,a);case 7:return Xe(e,t,t.pendingProps,a),t.child;case 8:return Xe(e,t,t.pendingProps.children,a),t.child;case 12:return Xe(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,la(t,t.type,l.value),Xe(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,Ha(t),n=Je(n),l=l(n),t.flags|=1,Xe(e,t,l,a),t.child;case 14:return Po(e,t,t.type,t.pendingProps,a);case 15:return Io(e,t,t.type,t.pendingProps,a);case 19:return sf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ai(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ht(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return ef(e,t,a);case 24:return Ha(t),l=Je(Ue),e===null?(n=Wu(),n===null&&(n=je,i=Ju(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Pu(t),la(t,Ue,n)):((e.lanes&a)!==0&&(Iu(e,t),en(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),la(t,Ue,l)):(l=i.cache,la(t,Ue,l),l!==n.cache&&Ku(t,[Ue],a,!0))),Xe(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Qt(e){e.flags|=4}function of(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!yd(t)){if(t=bt.current,t!==null&&((re&4194048)===re?zt!==null:(re&62914560)!==re&&(re&536870912)===0||t!==zt))throw Fl=Fu,Zr;e.flags|=8192}}function Ti(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ks():536870912,e.lanes|=t,yl|=t)}function sn(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ze(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Ch(e,t,a){var l=t.pendingProps;switch(Xu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ze(t),null;case 1:return ze(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(Ue),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ql(t)?Qt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,kr())),ze(t),null;case 26:return a=t.memoizedState,e===null?(Qt(t),a!==null?(ze(t),of(t,a)):(ze(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Qt(t),ze(t),of(t,a)):(ze(t),t.flags&=-16777217):(e.memoizedProps!==l&&Qt(t),ze(t),t.flags&=-16777217),null;case 27:Bn(t),a=te.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ze(t),null}e=F.current,Ql(t)?qr(t):(e=od(n,l,a),t.stateNode=e,Qt(t))}return ze(t),null;case 5:if(Bn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return ze(t),null}if(e=F.current,Ql(t))qr(t);else{switch(n=Yi(te.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ke]=t,e[Fe]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ze(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qt(t)}}return ze(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Qt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=te.current,Ql(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=We,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ke]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||ld(e.nodeValue,a)),e||wa(t)}else e=Yi(e).createTextNode(l),e[Ke]=t,t.stateNode=e}return ze(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Ql(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ke]=t}else Zl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ze(t),n=!1}else n=kr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Gt(t),t):(Gt(t),null)}if(Gt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ti(t,t.updateQueue),ze(t),null;case 4:return It(),e===null&&ts(t.stateNode.containerInfo),ze(t),null;case 10:return kt(t.type),ze(t),null;case 19:if(Z(He),n=t.memoizedState,n===null)return ze(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)sn(n,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=Si(e),i!==null){for(t.flags|=128,sn(n,!1),e=i.updateQueue,t.updateQueue=e,Ti(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Hr(a,e),a=a.sibling;return Q(He,He.current&1|2),t.child}e=e.sibling}n.tail!==null&&At()>Oi&&(t.flags|=128,l=!0,sn(n,!1),t.lanes=4194304)}else{if(!l)if(e=Si(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ti(t,e),sn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!de)return ze(t),null}else 2*At()-n.renderingStartTime>Oi&&a!==536870912&&(t.flags|=128,l=!0,sn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=At(),t.sibling=null,e=He.current,Q(He,l?e&1|2:e&1),t):(ze(t),null);case 22:case 23:return Gt(t),lc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(ze(t),t.subtreeFlags&6&&(t.flags|=8192)):ze(t),a=t.updateQueue,a!==null&&Ti(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Z(Ba),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),kt(Ue),ze(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function wh(e,t){switch(Xu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(Ue),It(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Bn(t),null;case 13:if(Gt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Zl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(He),null;case 4:return It(),null;case 10:return kt(t.type),null;case 22:case 23:return Gt(t),lc(),e!==null&&Z(Ba),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(Ue),null;case 25:return null;default:return null}}function ff(e,t){switch(Xu(t),t.tag){case 3:kt(Ue),It();break;case 26:case 27:case 5:Bn(t);break;case 4:It();break;case 13:Gt(t);break;case 19:Z(He);break;case 10:kt(t.type);break;case 22:case 23:Gt(t),lc(),e!==null&&Z(Ba);break;case 24:kt(Ue)}}function rn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(r){Se(t,t.return,r)}}function oa(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,r=c.destroy;if(r!==void 0){c.destroy=void 0,n=t;var p=a,E=r;try{E()}catch(_){Se(n,p,_)}}}l=l.next}while(l!==i)}}catch(_){Se(t,t.return,_)}}function df(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Fr(t,a)}catch(l){Se(e,e.return,l)}}}function mf(e,t,a){a.props=Ya(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Se(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){Se(e,t,n)}}function Rt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){Se(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){Se(e,t,n)}else a.current=null}function hf(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){Se(e,e.return,n)}}function Mc(e,t,a){try{var l=e.stateNode;tp(l,e.type,a,t),l[Fe]=t}catch(n){Se(e,e.return,n)}}function pf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ya(e.type)||e.tag===4}function _c(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ya(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=qi));else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Cc(e,t,a),e=e.sibling;e!==null;)Cc(e,t,a),e=e.sibling}function zi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&ya(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zi(e,t,a),e=e.sibling;e!==null;)zi(e,t,a),e=e.sibling}function gf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ze(t,l,a),t[Ke]=e,t[Fe]=a}catch(i){Se(e,e.return,i)}}var Zt=!1,_e=!1,wc=!1,vf=typeof WeakSet=="function"?WeakSet:Set,Ye=null;function Uh(e,t){if(e=e.containerInfo,ns=Zi,e=Tr(e),_u(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,r=-1,p=-1,E=0,_=0,U=e,N=null;t:for(;;){for(var O;U!==a||n!==0&&U.nodeType!==3||(r=c+n),U!==i||l!==0&&U.nodeType!==3||(p=c+l),U.nodeType===3&&(c+=U.nodeValue.length),(O=U.firstChild)!==null;)N=U,U=O;for(;;){if(U===e)break t;if(N===a&&++E===n&&(r=c),N===i&&++_===l&&(p=c),(O=U.nextSibling)!==null)break;U=N,N=U.parentNode}U=O}a=r===-1||p===-1?null:{start:r,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(is={focusedElem:e,selectionRange:a},Zi=!1,Ye=t;Ye!==null;)if(t=Ye,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,Ye=e;else for(;Ye!==null;){switch(t=Ye,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var ee=Ya(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(ee,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(P){Se(a,a.return,P)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ss(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ss(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Ye=e;break}Ye=t.return}}function yf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:fa(e,a),l&4&&rn(5,a);break;case 1:if(fa(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){Se(a,a.return,c)}else{var n=Ya(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){Se(a,a.return,c)}}l&64&&df(a),l&512&&on(a,a.return);break;case 3:if(fa(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Fr(e,t)}catch(c){Se(a,a.return,c)}}break;case 27:t===null&&l&4&&gf(a);case 26:case 5:fa(e,a),t===null&&l&4&&hf(a),l&512&&on(a,a.return);break;case 12:fa(e,a);break;case 13:fa(e,a),l&4&&Sf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Qh.bind(null,a),sp(e,a))));break;case 22:if(l=a.memoizedState!==null||Zt,!l){t=t!==null&&t.memoizedState!==null||_e,n=Zt;var i=_e;Zt=l,(_e=t)&&!i?da(e,a,(a.subtreeFlags&8772)!==0):fa(e,a),Zt=n,_e=i}break;case 30:break;default:fa(e,a)}}function bf(e){var t=e.alternate;t!==null&&(e.alternate=null,bf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&mu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,et=!1;function Vt(e,t,a){for(a=a.child;a!==null;)xf(e,t,a),a=a.sibling}function xf(e,t,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Dl,a)}catch{}switch(a.tag){case 26:_e||Rt(a,t),Vt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||Rt(a,t);var l=Ae,n=et;ya(a.type)&&(Ae=a.stateNode,et=!1),Vt(e,t,a),bn(a.stateNode),Ae=l,et=n;break;case 5:_e||Rt(a,t);case 6:if(l=Ae,n=et,Ae=null,Vt(e,t,a),Ae=l,et=n,Ae!==null)if(et)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(a.stateNode)}catch(i){Se(a,t,i)}else try{Ae.removeChild(a.stateNode)}catch(i){Se(a,t,i)}break;case 18:Ae!==null&&(et?(e=Ae,sd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),zn(e)):sd(Ae,a.stateNode));break;case 4:l=Ae,n=et,Ae=a.stateNode.containerInfo,et=!0,Vt(e,t,a),Ae=l,et=n;break;case 0:case 11:case 14:case 15:_e||oa(2,a,t),_e||oa(4,a,t),Vt(e,t,a);break;case 1:_e||(Rt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&mf(a,t,l)),Vt(e,t,a);break;case 21:Vt(e,t,a);break;case 22:_e=(l=_e)||a.memoizedState!==null,Vt(e,t,a),_e=l;break;default:Vt(e,t,a)}}function Sf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{zn(e)}catch(a){Se(t,t.return,a)}}function Hh(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new vf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new vf),t;default:throw Error(o(435,e.tag))}}function Uc(e,t){var a=Hh(e);t.forEach(function(l){var n=Zh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function st(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,r=c;e:for(;r!==null;){switch(r.tag){case 27:if(ya(r.type)){Ae=r.stateNode,et=!1;break e}break;case 5:Ae=r.stateNode,et=!1;break e;case 3:case 4:Ae=r.stateNode.containerInfo,et=!0;break e}r=r.return}if(Ae===null)throw Error(o(160));xf(i,c,n),Ae=null,et=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)jf(t,e),t=t.sibling}var Et=null;function jf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:st(t,e),rt(e),l&4&&(oa(3,e,e.return),rn(3,e),oa(5,e,e.return));break;case 1:st(t,e),rt(e),l&512&&(_e||a===null||Rt(a,a.return)),l&64&&Zt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=Et;if(st(t,e),rt(e),l&512&&(_e||a===null||Rt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[Cl]||i[Ke]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ze(i,l,a),i[Ke]=e,Be(i),l=i;break e;case"link":var c=gd("link","href",n).get(l+(a.href||""));if(c){for(var r=0;r<c.length;r++)if(i=c[r],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(r,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;case"meta":if(c=gd("meta","content",n).get(l+(a.content||""))){for(r=0;r<c.length;r++)if(i=c[r],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(r,1);break t}}i=n.createElement(l),Ze(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ke]=e,Be(i),l=i}e.stateNode=l}else vd(n,e.type,e.stateNode);else e.stateNode=pd(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?vd(n,e.type,e.stateNode):pd(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Mc(e,e.memoizedProps,a.memoizedProps)}break;case 27:st(t,e),rt(e),l&512&&(_e||a===null||Rt(a,a.return)),a!==null&&l&4&&Mc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(st(t,e),rt(e),l&512&&(_e||a===null||Rt(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(O){Se(e,e.return,O)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Mc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(wc=!0);break;case 6:if(st(t,e),rt(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(O){Se(e,e.return,O)}}break;case 3:if(Gi=null,n=Et,Et=ki(t.containerInfo),st(t,e),Et=n,rt(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(O){Se(e,e.return,O)}wc&&(wc=!1,Ef(e));break;case 4:l=Et,Et=ki(e.stateNode.containerInfo),st(t,e),rt(e),Et=l;break;case 12:st(t,e),rt(e);break;case 13:st(t,e),rt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Lc=At()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uc(e,l)));break;case 22:n=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,E=Zt,_=_e;if(Zt=E||n,_e=_||p,st(t,e),_e=_,Zt=E,rt(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||p||Zt||_e||ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){p=a=t;try{if(i=p.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{r=p.stateNode;var U=p.memoizedProps.style,N=U!=null&&U.hasOwnProperty("display")?U.display:null;r.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(O){Se(p,p.return,O)}}}else if(t.tag===6){if(a===null){p=t;try{p.stateNode.nodeValue=n?"":p.memoizedProps}catch(O){Se(p,p.return,O)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,Uc(e,a))));break;case 19:st(t,e),rt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Uc(e,l)));break;case 30:break;case 21:break;default:st(t,e),rt(e)}}function rt(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(pf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=_c(e);zi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(Wa(c,""),a.flags&=-33);var r=_c(e);zi(e,r,c);break;case 3:case 4:var p=a.stateNode.containerInfo,E=_c(e);Cc(e,E,p);break;default:throw Error(o(161))}}catch(_){Se(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function fa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)yf(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),ka(t);break;case 1:Rt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&mf(t,t.return,a),ka(t);break;case 27:bn(t.stateNode);case 26:case 5:Rt(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function da(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:da(n,i,a),rn(4,i);break;case 1:if(da(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(E){Se(l,l.return,E)}if(l=i,n=l.updateQueue,n!==null){var r=l.stateNode;try{var p=n.shared.hiddenCallbacks;if(p!==null)for(n.shared.hiddenCallbacks=null,n=0;n<p.length;n++)Wr(p[n],r)}catch(E){Se(l,l.return,E)}}a&&c&64&&df(i),on(i,i.return);break;case 27:gf(i);case 26:case 5:da(n,i,a),a&&l===null&&c&4&&hf(i),on(i,i.return);break;case 12:da(n,i,a);break;case 13:da(n,i,a),a&&c&4&&Sf(n,i);break;case 22:i.memoizedState===null&&da(n,i,a),on(i,i.return);break;case 30:break;default:da(n,i,a)}t=t.sibling}}function Hc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function Bc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function Ot(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Nf(e,t,a,l),t=t.sibling}function Nf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Ot(e,t,a,l),n&2048&&rn(9,t);break;case 1:Ot(e,t,a,l);break;case 3:Ot(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){Ot(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,r=i.onPostCommit;typeof r=="function"&&r(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){Se(t,t.return,p)}}else Ot(e,t,a,l);break;case 13:Ot(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Ot(e,t,a,l):fn(e,t):i._visibility&2?Ot(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Hc(c,t);break;case 24:Ot(e,t,a,l),n&2048&&Bc(t.alternate,t);break;default:Ot(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,r=a,p=l,E=c.flags;switch(c.tag){case 0:case 11:case 15:pl(i,c,r,p,n),rn(8,c);break;case 23:break;case 22:var _=c.stateNode;c.memoizedState!==null?_._visibility&2?pl(i,c,r,p,n):fn(i,c):(_._visibility|=2,pl(i,c,r,p,n)),n&&E&2048&&Hc(c.alternate,c);break;case 24:pl(i,c,r,p,n),n&&E&2048&&Bc(c.alternate,c);break;default:pl(i,c,r,p,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Hc(l.alternate,l);break;case 24:fn(a,l),n&2048&&Bc(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function gl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 26:gl(e),e.flags&dn&&e.memoizedState!==null&&Sp(Et,e.memoizedState,e.memoizedProps);break;case 5:gl(e);break;case 3:case 4:var t=Et;Et=ki(e.stateNode.containerInfo),gl(e),Et=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,gl(e),dn=t):gl(e));break;default:gl(e)}}function Tf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Rf(l,e)}Tf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zf(e),e=e.sibling}function zf(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&oa(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ri(e)):mn(e);break;default:mn(e)}}function Ri(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Ye=l,Rf(l,e)}Tf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),Ri(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ri(t));break;default:Ri(t)}e=e.sibling}}function Rf(e,t){for(;Ye!==null;){var a=Ye;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Ye=l;else e:for(a=e;Ye!==null;){l=Ye;var n=l.sibling,i=l.return;if(bf(l),l===a){Ye=null;break e}if(n!==null){n.return=i,Ye=n;break e}Ye=i}}}var Bh={getCacheForType:function(e){var t=Je(Ue),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},qh=typeof WeakMap=="function"?WeakMap:Map,me=0,je=null,ce=null,re=0,he=0,ot=null,ma=!1,vl=!1,qc=!1,Kt=0,De=0,ha=0,La=0,Yc=0,xt=0,yl=0,hn=null,tt=null,kc=!1,Lc=0,Oi=1/0,Di=null,pa=null,Qe=0,ga=null,bl=null,xl=0,Gc=0,Xc=null,Of=null,pn=0,Qc=null;function ft(){if((me&2)!==0&&re!==0)return re&-re;if(M.T!==null){var e=cl;return e!==0?e:Fc()}return Xs()}function Df(){xt===0&&(xt=(re&536870912)===0||de?Ys():536870912);var e=bt.current;return e!==null&&(e.flags|=32),xt}function dt(e,t,a){(e===je&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),va(e,re,xt,!1)),_l(e,a),((me&2)===0||e!==je)&&(e===je&&((me&2)===0&&(La|=a),De===4&&va(e,re,xt,!1)),Dt(e))}function Mf(e,t,a){if((me&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Ml(e,t),n=l?Lh(e,t):Kc(e,t,!0),i=l;do{if(n===0){vl&&!l&&va(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!Yh(a)){n=Kc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var r=e;n=hn;var p=r.current.memoizedState.isDehydrated;if(p&&(Sl(r,c).flags|=256),c=Kc(r,c,!1),c!==2){if(qc&&!p){r.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=tt,tt=n,i!==null&&(tt===null?tt=i:tt.push.apply(tt,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),va(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:va(l,t,xt,!ma);break e;case 2:tt=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Lc+300-At(),10<n)){if(va(l,t,xt,!ma),Ln(l,0,!0)!==0)break e;l.timeoutHandle=ud(_f.bind(null,l,a,tt,Di,kc,t,xt,La,yl,ma,i,2,-0,0),n);break e}_f(l,a,tt,Di,kc,t,xt,La,yl,ma,i,0,-0,0)}}break}while(!0);Dt(e)}function _f(e,t,a,l,n,i,c,r,p,E,_,U,N,O){if(e.timeoutHandle=-1,U=t.subtreeFlags,(U&8192||(U&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:xp},Af(t),U=jp(),U!==null)){e.cancelPendingCommit=U(Yf.bind(null,e,t,i,a,l,n,c,r,p,_,1,N,O)),va(e,i,c,!E);return}Yf(e,t,i,a,l,n,c,r,p)}function Yh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!ut(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function va(e,t,a,l){t&=~Yc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-it(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Ls(e,a,t)}function Mi(){return(me&6)===0?(gn(0),!1):!0}function Zc(){if(ce!==null){if(he===0)var e=ce.return;else e=ce,Yt=Ua=null,sc(e),ml=null,un=0,e=ce;for(;e!==null;)ff(e.alternate,e),e=e.return;ce=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zc(),je=e,ce=a=Ht(e.current,null),re=t,he=0,ot=null,ma=!1,vl=Ml(e,t),qc=!1,yl=xt=Yc=La=ha=De=0,tt=hn=null,kc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-it(l),i=1<<n;t|=e[n],l&=~i}return Kt=t,In(),a}function Cf(e,t){ne=null,M.H=yi,t===Wl||t===si?(t=Jr(),he=3):t===Zr?(t=Jr(),he=4):he=t===Wo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ot=t,ce===null&&(De=1,Ei(e,pt(t,e.current)))}function wf(){var e=M.H;return M.H=yi,e===null?yi:e}function Uf(){var e=M.A;return M.A=Bh,e}function Vc(){De=4,ma||(re&4194048)!==re&&bt.current!==null||(vl=!0),(ha&134217727)===0&&(La&134217727)===0||je===null||va(je,re,xt,!1)}function Kc(e,t,a){var l=me;me|=2;var n=wf(),i=Uf();(je!==e||re!==t)&&(Di=null,Sl(e,t)),t=!1;var c=De;e:do try{if(he!==0&&ce!==null){var r=ce,p=ot;switch(he){case 8:Zc(),c=6;break e;case 3:case 2:case 9:case 6:bt.current===null&&(t=!0);var E=he;if(he=0,ot=null,jl(e,r,p,E),a&&vl){c=0;break e}break;default:E=he,he=0,ot=null,jl(e,r,p,E)}}kh(),c=De;break}catch(_){Cf(e,_)}while(!0);return t&&e.shellSuspendCounter++,Yt=Ua=null,me=l,M.H=n,M.A=i,ce===null&&(je=null,re=0,In()),c}function kh(){for(;ce!==null;)Hf(ce)}function Lh(e,t){var a=me;me|=2;var l=wf(),n=Uf();je!==e||re!==t?(Di=null,Oi=At()+500,Sl(e,t)):vl=Ml(e,t);e:do try{if(he!==0&&ce!==null){t=ce;var i=ot;t:switch(he){case 1:he=0,ot=null,jl(e,t,i,1);break;case 2:case 9:if(Vr(i)){he=0,ot=null,Bf(t);break}t=function(){he!==2&&he!==9||je!==e||(he=7),Dt(e)},i.then(t,t);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Vr(i)?(he=0,ot=null,Bf(t)):(he=0,ot=null,jl(e,t,i,7));break;case 5:var c=null;switch(ce.tag){case 26:c=ce.memoizedState;case 5:case 27:var r=ce;if(!c||yd(c)){he=0,ot=null;var p=r.sibling;if(p!==null)ce=p;else{var E=r.return;E!==null?(ce=E,_i(E)):ce=null}break t}}he=0,ot=null,jl(e,t,i,5);break;case 6:he=0,ot=null,jl(e,t,i,6);break;case 8:Zc(),De=6;break e;default:throw Error(o(462))}}Gh();break}catch(_){Cf(e,_)}while(!0);return Yt=Ua=null,M.H=l,M.A=n,me=a,ce!==null?0:(je=null,re=0,In(),De)}function Gh(){for(;ce!==null&&!om();)Hf(ce)}function Hf(e){var t=rf(e.alternate,e,Kt);e.memoizedProps=e.pendingProps,t===null?_i(e):ce=t}function Bf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=af(a,t,t.pendingProps,t.type,void 0,re);break;case 11:t=af(a,t,t.pendingProps,t.type.render,t.ref,re);break;case 5:sc(t);default:ff(a,t),t=ce=Hr(t,Kt),t=rf(a,t,Kt)}e.memoizedProps=e.pendingProps,t===null?_i(e):ce=t}function jl(e,t,a,l){Yt=Ua=null,sc(t),ml=null,un=0;var n=t.return;try{if(Mh(e,n,t,a,re)){De=1,Ei(e,pt(a,e.current)),ce=null;return}}catch(i){if(n!==null)throw ce=n,i;De=1,Ei(e,pt(a,e.current)),ce=null;return}t.flags&32768?(de||l===1?e=!0:vl||(re&536870912)!==0?e=!1:(ma=e=!0,(l===2||l===9||l===3||l===6)&&(l=bt.current,l!==null&&l.tag===13&&(l.flags|=16384))),qf(t,e)):_i(t)}function _i(e){var t=e;do{if((t.flags&32768)!==0){qf(t,ma);return}e=t.return;var a=Ch(t.alternate,t,Kt);if(a!==null){ce=a;return}if(t=t.sibling,t!==null){ce=t;return}ce=t=e}while(t!==null);De===0&&(De=5)}function qf(e,t){do{var a=wh(e.alternate,e);if(a!==null){a.flags&=32767,ce=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ce=e;return}ce=e=a}while(e!==null);De=6,ce=null}function Yf(e,t,a,l,n,i,c,r,p){e.cancelPendingCommit=null;do Ci();while(Qe!==0);if((me&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=Bu,xm(e,a,i,c,r,p),e===je&&(ce=je=null,re=0),bl=t,ga=e,xl=a,Gc=i,Xc=n,Of=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vh(qn,function(){return Qf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=M.T,M.T=null,n=L.p,L.p=2,c=me,me|=4;try{Uh(e,t,a)}finally{me=c,L.p=n,M.T=l}}Qe=1,kf(),Lf(),Gf()}}function kf(){if(Qe===1){Qe=0;var e=ga,t=bl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var l=L.p;L.p=2;var n=me;me|=4;try{jf(t,e);var i=is,c=Tr(e.containerInfo),r=i.focusedElem,p=i.selectionRange;if(c!==r&&r&&r.ownerDocument&&Ar(r.ownerDocument.documentElement,r)){if(p!==null&&_u(r)){var E=p.start,_=p.end;if(_===void 0&&(_=E),"selectionStart"in r)r.selectionStart=E,r.selectionEnd=Math.min(_,r.value.length);else{var U=r.ownerDocument||document,N=U&&U.defaultView||window;if(N.getSelection){var O=N.getSelection(),ee=r.textContent.length,P=Math.min(p.start,ee),ye=p.end===void 0?P:Math.min(p.end,ee);!O.extend&&P>ye&&(c=ye,ye=P,P=c);var x=Nr(r,P),b=Nr(r,ye);if(x&&b&&(O.rangeCount!==1||O.anchorNode!==x.node||O.anchorOffset!==x.offset||O.focusNode!==b.node||O.focusOffset!==b.offset)){var S=U.createRange();S.setStart(x.node,x.offset),O.removeAllRanges(),P>ye?(O.addRange(S),O.extend(b.node,b.offset)):(S.setEnd(b.node,b.offset),O.addRange(S))}}}}for(U=[],O=r;O=O.parentNode;)O.nodeType===1&&U.push({element:O,left:O.scrollLeft,top:O.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<U.length;r++){var C=U[r];C.element.scrollLeft=C.left,C.element.scrollTop=C.top}}Zi=!!ns,is=ns=null}finally{me=n,L.p=l,M.T=a}}e.current=t,Qe=2}}function Lf(){if(Qe===2){Qe=0;var e=ga,t=bl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var l=L.p;L.p=2;var n=me;me|=4;try{yf(e,t.alternate,t)}finally{me=n,L.p=l,M.T=a}}Qe=3}}function Gf(){if(Qe===4||Qe===3){Qe=0,fm();var e=ga,t=bl,a=xl,l=Of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Qe=5:(Qe=0,bl=ga=null,Xf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(pa=null),fu(a),t=t.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Dl,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=M.T,n=L.p,L.p=2,M.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var r=l[c];i(r.value,{componentStack:r.stack})}}finally{M.T=t,L.p=n}}(xl&3)!==0&&Ci(),Dt(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Qc?pn++:(pn=0,Qc=e):pn=0,gn(0)}}function Xf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Ci(e){return kf(),Lf(),Gf(),Qf()}function Qf(){if(Qe!==5)return!1;var e=ga,t=Gc;Gc=0;var a=fu(xl),l=M.T,n=L.p;try{L.p=32>a?32:a,M.T=null,a=Xc,Xc=null;var i=ga,c=xl;if(Qe=0,bl=ga=null,xl=0,(me&6)!==0)throw Error(o(331));var r=me;if(me|=4,zf(i.current),Nf(i,i.current,c,a),me=r,gn(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Dl,i)}catch{}return!0}finally{L.p=n,M.T=l,Xf(e,t)}}function Zf(e,t,a){t=pt(a,t),t=jc(e.stateNode,t,2),e=ua(e,t,2),e!==null&&(_l(e,2),Dt(e))}function Se(e,t,a){if(e.tag===3)Zf(e,e,a);else for(;t!==null;){if(t.tag===3){Zf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pa===null||!pa.has(l))){e=pt(a,e),a=Jo(2),l=ua(t,a,2),l!==null&&($o(a,l,t,e),_l(l,2),Dt(l));break}}t=t.return}}function Jc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new qh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(qc=!0,n.add(a),e=Xh.bind(null,e,t,a),t.then(e,e))}function Xh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(re&a)===a&&(De===4||De===3&&(re&62914560)===re&&300>At()-Lc?(me&2)===0&&Sl(e,0):Yc|=a,yl===re&&(yl=0)),Dt(e)}function Vf(e,t){t===0&&(t=ks()),e=ll(e,t),e!==null&&(_l(e,t),Dt(e))}function Qh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Vf(e,a)}function Zh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Vf(e,a)}function Vh(e,t){return cu(e,t)}var wi=null,El=null,$c=!1,Ui=!1,Wc=!1,Ga=0;function Dt(e){e!==El&&e.next===null&&(El===null?wi=El=e:El=El.next=e),Ui=!0,$c||($c=!0,Jh())}function gn(e,t){if(!Wc&&Ui){Wc=!0;do for(var a=!1,l=wi;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,r=l.pingedLanes;i=(1<<31-it(42|e)+1)-1,i&=n&~(c&~r),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Wf(l,i))}else i=re,i=Ln(l,l===je?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Ml(l,i)||(a=!0,Wf(l,i));l=l.next}while(a);Wc=!1}}function Kh(){Kf()}function Kf(){Ui=$c=!1;var e=0;Ga!==0&&(ap()&&(e=Ga),Ga=0);for(var t=At(),a=null,l=wi;l!==null;){var n=l.next,i=Jf(l,t);i===0?(l.next=null,a===null?wi=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(i&3)!==0)&&(Ui=!0)),l=n}gn(e)}function Jf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-it(i),r=1<<c,p=n[c];p===-1?((r&a)===0||(r&l)!==0)&&(n[c]=bm(r,t)):p<=t&&(e.expiredLanes|=r),i&=~r}if(t=je,a=re,a=Ln(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(he===2||he===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&su(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ml(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&su(l),fu(a)){case 2:case 8:a=Bs;break;case 32:a=qn;break;case 268435456:a=qs;break;default:a=qn}return l=$f.bind(null,e),a=cu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&su(l),e.callbackPriority=2,e.callbackNode=null,2}function $f(e,t){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ci()&&e.callbackNode!==a)return null;var l=re;return l=Ln(e,e===je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Mf(e,l,t),Jf(e,At()),e.callbackNode!=null&&e.callbackNode===a?$f.bind(null,e):null)}function Wf(e,t){if(Ci())return null;Mf(e,t,!0)}function Jh(){np(function(){(me&6)!==0?cu(Hs,Kh):Kf()})}function Fc(){return Ga===0&&(Ga=Ys()),Ga}function Ff(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function Pf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function $h(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=Ff((n[Fe]||null).action),c=l.submitter;c&&(t=(t=c[Fe]||null)?Ff(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var r=new Wn("action","action",null,l,n);e.push({event:r,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var p=c?Pf(n,c):new FormData(n);vc(a,{pending:!0,data:p,method:n.method,action:i},null,p)}}else typeof i=="function"&&(r.preventDefault(),p=c?Pf(n,c):new FormData(n),vc(a,{pending:!0,data:p,method:n.method,action:i},i,p))},currentTarget:n}]})}}for(var Pc=0;Pc<Hu.length;Pc++){var Ic=Hu[Pc],Wh=Ic.toLowerCase(),Fh=Ic[0].toUpperCase()+Ic.slice(1);jt(Wh,"on"+Fh)}jt(Or,"onAnimationEnd"),jt(Dr,"onAnimationIteration"),jt(Mr,"onAnimationStart"),jt("dblclick","onDoubleClick"),jt("focusin","onFocus"),jt("focusout","onBlur"),jt(hh,"onTransitionRun"),jt(ph,"onTransitionStart"),jt(gh,"onTransitionCancel"),jt(_r,"onTransitionEnd"),Ka("onMouseEnter",["mouseout","mouseover"]),Ka("onMouseLeave",["mouseout","mouseover"]),Ka("onPointerEnter",["pointerout","pointerover"]),Ka("onPointerLeave",["pointerout","pointerover"]),Ta("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ta("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ta("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ta("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ta("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ph=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vn));function If(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var r=l[c],p=r.instance,E=r.currentTarget;if(r=r.listener,p!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(_){ji(_)}n.currentTarget=null,i=p}else for(c=0;c<l.length;c++){if(r=l[c],p=r.instance,E=r.currentTarget,r=r.listener,p!==i&&n.isPropagationStopped())break e;i=r,n.currentTarget=E;try{i(n)}catch(_){ji(_)}n.currentTarget=null,i=p}}}}function se(e,t){var a=t[du];a===void 0&&(a=t[du]=new Set);var l=e+"__bubble";a.has(l)||(ed(t,e,2,!1),a.add(l))}function es(e,t,a){var l=0;t&&(l|=4),ed(a,e,l,t)}var Hi="_reactListening"+Math.random().toString(36).slice(2);function ts(e){if(!e[Hi]){e[Hi]=!0,Zs.forEach(function(a){a!=="selectionchange"&&(Ph.has(a)||es(a,!1,e),es(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Hi]||(t[Hi]=!0,es("selectionchange",!1,t))}}function ed(e,t,a,l){switch(Nd(t)){case 2:var n=Ap;break;case 8:n=Tp;break;default:n=ps}a=n.bind(null,t,a,e),n=void 0,!Eu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function as(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var r=l.stateNode.containerInfo;if(r===n)break;if(c===4)for(c=l.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;r!==null;){if(c=Qa(r),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){l=i=c;continue e}r=r.parentNode}}l=l.return}ir(function(){var E=i,_=Su(a),U=[];e:{var N=Cr.get(e);if(N!==void 0){var O=Wn,ee=e;switch(e){case"keypress":if(Jn(a)===0)break e;case"keydown":case"keyup":O=Vm;break;case"focusin":ee="focus",O=zu;break;case"focusout":ee="blur",O=zu;break;case"beforeblur":case"afterblur":O=zu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=sr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=wm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=$m;break;case Or:case Dr:case Mr:O=Bm;break;case _r:O=Fm;break;case"scroll":case"scrollend":O=_m;break;case"wheel":O=Im;break;case"copy":case"cut":case"paste":O=Ym;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=or;break;case"toggle":case"beforetoggle":O=th}var P=(t&4)!==0,ye=!P&&(e==="scroll"||e==="scrollend"),x=P?N!==null?N+"Capture":null:N;P=[];for(var b=E,S;b!==null;){var C=b;if(S=C.stateNode,C=C.tag,C!==5&&C!==26&&C!==27||S===null||x===null||(C=Ul(b,x),C!=null&&P.push(yn(b,C,S))),ye)break;b=b.return}0<P.length&&(N=new O(N,ee,null,a,_),U.push({event:N,listeners:P}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",O=e==="mouseout"||e==="pointerout",N&&a!==xu&&(ee=a.relatedTarget||a.fromElement)&&(Qa(ee)||ee[Xa]))break e;if((O||N)&&(N=_.window===_?_:(N=_.ownerDocument)?N.defaultView||N.parentWindow:window,O?(ee=a.relatedTarget||a.toElement,O=E,ee=ee?Qa(ee):null,ee!==null&&(ye=v(ee),P=ee.tag,ee!==ye||P!==5&&P!==27&&P!==6)&&(ee=null)):(O=null,ee=E),O!==ee)){if(P=sr,C="onMouseLeave",x="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(P=or,C="onPointerLeave",x="onPointerEnter",b="pointer"),ye=O==null?N:wl(O),S=ee==null?N:wl(ee),N=new P(C,b+"leave",O,a,_),N.target=ye,N.relatedTarget=S,C=null,Qa(_)===E&&(P=new P(x,b+"enter",ee,a,_),P.target=S,P.relatedTarget=ye,C=P),ye=C,O&&ee)t:{for(P=O,x=ee,b=0,S=P;S;S=Nl(S))b++;for(S=0,C=x;C;C=Nl(C))S++;for(;0<b-S;)P=Nl(P),b--;for(;0<S-b;)x=Nl(x),S--;for(;b--;){if(P===x||x!==null&&P===x.alternate)break t;P=Nl(P),x=Nl(x)}P=null}else P=null;O!==null&&td(U,N,O,P,!1),ee!==null&&ye!==null&&td(U,ye,ee,P,!0)}}e:{if(N=E?wl(E):window,O=N.nodeName&&N.nodeName.toLowerCase(),O==="select"||O==="input"&&N.type==="file")var V=yr;else if(gr(N))if(br)V=fh;else{V=rh;var ie=sh}else O=N.nodeName,!O||O.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?E&&bu(E.elementType)&&(V=yr):V=oh;if(V&&(V=V(e,E))){vr(U,V,a,_);break e}ie&&ie(e,N,E),e==="focusout"&&E&&N.type==="number"&&E.memoizedProps.value!=null&&yu(N,"number",N.value)}switch(ie=E?wl(E):window,e){case"focusin":(gr(ie)||ie.contentEditable==="true")&&(el=ie,Cu=E,Xl=null);break;case"focusout":Xl=Cu=el=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,zr(U,a,_);break;case"selectionchange":if(mh)break;case"keydown":case"keyup":zr(U,a,_)}var K;if(Ou)e:{switch(e){case"compositionstart":var I="onCompositionStart";break e;case"compositionend":I="onCompositionEnd";break e;case"compositionupdate":I="onCompositionUpdate";break e}I=void 0}else Ia?hr(e,a)&&(I="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(I="onCompositionStart");I&&(fr&&a.locale!=="ko"&&(Ia||I!=="onCompositionStart"?I==="onCompositionEnd"&&Ia&&(K=ur()):(aa=_,Nu="value"in aa?aa.value:aa.textContent,Ia=!0)),ie=Bi(E,I),0<ie.length&&(I=new rr(I,e,null,a,_),U.push({event:I,listeners:ie}),K?I.data=K:(K=pr(a),K!==null&&(I.data=K)))),(K=lh?nh(e,a):ih(e,a))&&(I=Bi(E,"onBeforeInput"),0<I.length&&(ie=new rr("onBeforeInput","beforeinput",null,a,_),U.push({event:ie,listeners:I}),ie.data=K)),$h(U,e,E,a,_)}If(U,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Bi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=Ul(e,a),n!=null&&l.unshift(yn(e,n,i)),n=Ul(e,t),n!=null&&l.push(yn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function td(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var r=a,p=r.alternate,E=r.stateNode;if(r=r.tag,p!==null&&p===l)break;r!==5&&r!==26&&r!==27||E===null||(p=E,n?(E=Ul(a,i),E!=null&&c.unshift(yn(a,E,p))):n||(E=Ul(a,i),E!=null&&c.push(yn(a,E,p)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var Ih=/\r\n?/g,ep=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Ih,`
`).replace(ep,"")}function ld(e,t){return t=ad(t),ad(e)===t}function qi(){}function ve(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":lr(e,l,i);break;case"data":if(t!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&ve(e,t,"name",n.name,n,null),ve(e,t,"formEncType",n.formEncType,n,null),ve(e,t,"formMethod",n.formMethod,n,null),ve(e,t,"formTarget",n.formTarget,n,null)):(ve(e,t,"encType",n.encType,n,null),ve(e,t,"method",n.method,n,null),ve(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=qi);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":se("beforetoggle",e),se("toggle",e),Gn(e,"popover",l);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Dm.get(a)||a,Gn(e,a,l))}}function ls(e,t,a,l,n,i){switch(a){case"style":lr(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&se("scroll",e);break;case"onScrollEnd":l!=null&&se("scrollend",e);break;case"onClick":l!=null&&(e.onclick=qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vs.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[Fe]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Gn(e,a,l)}}}function Ze(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,i,c,a,null)}}n&&ve(e,t,"srcSet",a.srcSet,a,null),l&&ve(e,t,"src",a.src,a,null);return;case"input":se("invalid",e);var r=i=c=n=null,p=null,E=null;for(l in a)if(a.hasOwnProperty(l)){var _=a[l];if(_!=null)switch(l){case"name":n=_;break;case"type":c=_;break;case"checked":p=_;break;case"defaultChecked":E=_;break;case"value":i=_;break;case"defaultValue":r=_;break;case"children":case"dangerouslySetInnerHTML":if(_!=null)throw Error(o(137,t));break;default:ve(e,t,l,_,a,null)}}Is(e,i,r,p,E,c,n,!1),Qn(e);return;case"select":se("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(r=a[n],r!=null))switch(n){case"value":i=r;break;case"defaultValue":c=r;break;case"multiple":l=r;default:ve(e,t,n,r,a,null)}t=i,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":se("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(r=a[c],r!=null))switch(c){case"value":l=r;break;case"defaultValue":n=r;break;case"children":i=r;break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(o(91));break;default:ve(e,t,c,r,a,null)}tr(e,l,n,i),Qn(e);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(l=a[p],l!=null))switch(p){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ve(e,t,p,l,a,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(l=0;l<vn.length;l++)se(vn[l],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(E in a)if(a.hasOwnProperty(E)&&(l=a[E],l!=null))switch(E){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:ve(e,t,E,l,a,null)}return;default:if(bu(t)){for(_ in a)a.hasOwnProperty(_)&&(l=a[_],l!==void 0&&ls(e,t,_,l,a,void 0));return}}for(r in a)a.hasOwnProperty(r)&&(l=a[r],l!=null&&ve(e,t,r,l,a,null))}function tp(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,r=null,p=null,E=null,_=null;for(O in a){var U=a[O];if(a.hasOwnProperty(O)&&U!=null)switch(O){case"checked":break;case"value":break;case"defaultValue":p=U;default:l.hasOwnProperty(O)||ve(e,t,O,null,l,U)}}for(var N in l){var O=l[N];if(U=a[N],l.hasOwnProperty(N)&&(O!=null||U!=null))switch(N){case"type":i=O;break;case"name":n=O;break;case"checked":E=O;break;case"defaultChecked":_=O;break;case"value":c=O;break;case"defaultValue":r=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:O!==U&&ve(e,t,N,O,l,U)}}vu(e,c,r,p,E,_,i,n);return;case"select":O=c=r=N=null;for(i in a)if(p=a[i],a.hasOwnProperty(i)&&p!=null)switch(i){case"value":break;case"multiple":O=p;default:l.hasOwnProperty(i)||ve(e,t,i,null,l,p)}for(n in l)if(i=l[n],p=a[n],l.hasOwnProperty(n)&&(i!=null||p!=null))switch(n){case"value":N=i;break;case"defaultValue":r=i;break;case"multiple":c=i;default:i!==p&&ve(e,t,n,i,l,p)}t=r,a=c,l=O,N!=null?$a(e,!!a,N,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":O=N=null;for(r in a)if(n=a[r],a.hasOwnProperty(r)&&n!=null&&!l.hasOwnProperty(r))switch(r){case"value":break;case"children":break;default:ve(e,t,r,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":O=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&ve(e,t,c,n,l,i)}er(e,N,O);return;case"option":for(var ee in a)if(N=a[ee],a.hasOwnProperty(ee)&&N!=null&&!l.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:ve(e,t,ee,null,l,N)}for(p in l)if(N=l[p],O=a[p],l.hasOwnProperty(p)&&N!==O&&(N!=null||O!=null))switch(p){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:ve(e,t,p,N,l,O)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var P in a)N=a[P],a.hasOwnProperty(P)&&N!=null&&!l.hasOwnProperty(P)&&ve(e,t,P,null,l,N);for(E in l)if(N=l[E],O=a[E],l.hasOwnProperty(E)&&N!==O&&(N!=null||O!=null))switch(E){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:ve(e,t,E,N,l,O)}return;default:if(bu(t)){for(var ye in a)N=a[ye],a.hasOwnProperty(ye)&&N!==void 0&&!l.hasOwnProperty(ye)&&ls(e,t,ye,void 0,l,N);for(_ in l)N=l[_],O=a[_],!l.hasOwnProperty(_)||N===O||N===void 0&&O===void 0||ls(e,t,_,N,l,O);return}}for(var x in a)N=a[x],a.hasOwnProperty(x)&&N!=null&&!l.hasOwnProperty(x)&&ve(e,t,x,null,l,N);for(U in l)N=l[U],O=a[U],!l.hasOwnProperty(U)||N===O||N==null&&O==null||ve(e,t,U,N,l,O)}var ns=null,is=null;function Yi(e){return e.nodeType===9?e:e.ownerDocument}function nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function us(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var cs=null;function ap(){var e=window.event;return e&&e.type==="popstate"?e===cs?!1:(cs=e,!0):(cs=null,!1)}var ud=typeof setTimeout=="function"?setTimeout:void 0,lp=typeof clearTimeout=="function"?clearTimeout:void 0,cd=typeof Promise=="function"?Promise:void 0,np=typeof queueMicrotask=="function"?queueMicrotask:typeof cd<"u"?function(e){return cd.resolve(null).then(e).catch(ip)}:ud;function ip(e){setTimeout(function(){throw e})}function ya(e){return e==="head"}function sd(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&bn(c.documentElement),a&2&&bn(c.body),a&4)for(a=c.head,bn(a),c=a.firstChild;c;){var r=c.nextSibling,p=c.nodeName;c[Cl]||p==="SCRIPT"||p==="STYLE"||p==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=r}}if(n===0){e.removeChild(i),zn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);zn(t)}function ss(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ss(a),mu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function up(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Cl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Nt(e.nextSibling),e===null)break}return null}function cp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Nt(e.nextSibling),e===null))return null;return e}function rs(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function sp(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Nt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var os=null;function rd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function od(e,t,a){switch(t=Yi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function bn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);mu(e)}var St=new Map,fd=new Set;function ki(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Jt=L.d;L.d={f:rp,r:op,D:fp,C:dp,L:mp,m:hp,X:gp,S:pp,M:vp};function rp(){var e=Jt.f(),t=Mi();return e||t}function op(e){var t=Za(e);t!==null&&t.tag===5&&t.type==="form"?Do(t):Jt.r(e)}var Al=typeof document>"u"?null:document;function dd(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var n=ht(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),fd.has(n)||(fd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ze(t,"link",e),Be(t),l.head.appendChild(t)))}}function fp(e){Jt.D(e),dd("dns-prefetch",e,null)}function dp(e,t){Jt.C(e,t),dd("preconnect",e,t)}function mp(e,t,a){Jt.L(e,t,a);var l=Al;if(l&&e&&t){var n='link[rel="preload"][as="'+ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+ht(a.imageSizes)+'"]')):n+='[href="'+ht(e)+'"]';var i=n;switch(t){case"style":i=Tl(e);break;case"script":i=zl(e)}St.has(i)||(e=R({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),St.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(xn(i))||t==="script"&&l.querySelector(Sn(i))||(t=l.createElement("link"),Ze(t,"link",e),Be(t),l.head.appendChild(t)))}}function hp(e,t){Jt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+ht(l)+'"][href="'+ht(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=zl(e)}if(!St.has(i)&&(e=R({rel:"modulepreload",href:e},t),St.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(i)))return}l=a.createElement("link"),Ze(l,"link",e),Be(l),a.head.appendChild(l)}}}function pp(e,t,a){Jt.S(e,t,a);var l=Al;if(l&&e){var n=Va(l).hoistableStyles,i=Tl(e);t=t||"default";var c=n.get(i);if(!c){var r={loading:0,preload:null};if(c=l.querySelector(xn(i)))r.loading=5;else{e=R({rel:"stylesheet",href:e,"data-precedence":t},a),(a=St.get(i))&&fs(e,a);var p=c=l.createElement("link");Be(p),Ze(p,"link",e),p._p=new Promise(function(E,_){p.onload=E,p.onerror=_}),p.addEventListener("load",function(){r.loading|=1}),p.addEventListener("error",function(){r.loading|=2}),r.loading|=4,Li(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:r},n.set(i,c)}}}function gp(e,t){Jt.X(e,t);var a=Al;if(a&&e){var l=Va(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=R({src:e,async:!0},t),(t=St.get(n))&&ds(e,t),i=a.createElement("script"),Be(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function vp(e,t){Jt.M(e,t);var a=Al;if(a&&e){var l=Va(a).hoistableScripts,n=zl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=R({src:e,async:!0,type:"module"},t),(t=St.get(n))&&ds(e,t),i=a.createElement("script"),Be(i),Ze(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function md(e,t,a,l){var n=(n=te.current)?ki(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Tl(a.href),a=Va(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Tl(a.href);var i=Va(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(xn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),St.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},St.set(e,a),i||yp(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=zl(a),a=Va(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Tl(e){return'href="'+ht(e)+'"'}function xn(e){return'link[rel="stylesheet"]['+e+"]"}function hd(e){return R({},e,{"data-precedence":e.precedence,precedence:null})}function yp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ze(t,"link",a),Be(t),e.head.appendChild(t))}function zl(e){return'[src="'+ht(e)+'"]'}function Sn(e){return"script[async]"+e}function pd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+ht(a.href)+'"]');if(l)return t.instance=l,Be(l),l;var n=R({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Be(l),Ze(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=Tl(a.href);var i=e.querySelector(xn(n));if(i)return t.state.loading|=4,t.instance=i,Be(i),i;l=hd(a),(n=St.get(n))&&fs(l,n),i=(e.ownerDocument||e).createElement("link"),Be(i);var c=i;return c._p=new Promise(function(r,p){c.onload=r,c.onerror=p}),Ze(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=zl(a.src),(n=e.querySelector(Sn(i)))?(t.instance=n,Be(n),n):(l=a,(n=St.get(i))&&(l=R({},a),ds(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),Be(n),Ze(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var r=l[c];if(r.dataset.precedence===t)i=r;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function fs(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ds(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function gd(e,t,a){if(Gi===null){var l=new Map,n=Gi=new Map;n.set(a,l)}else n=Gi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[Cl]||i[Ke]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var r=l.get(c);r?r.push(i):l.set(c,[i])}}return l}function vd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function bp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function yd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function xp(){}function Sp(e,t,a){if(jn===null)throw Error(o(475));var l=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=Tl(a.href),i=e.querySelector(xn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,Be(i);return}i=e.ownerDocument||e,a=hd(a),(n=St.get(n))&&fs(a,n),i=i.createElement("link"),Be(i);var c=i;c._p=new Promise(function(r,p){c.onload=r,c.onerror=p}),Ze(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Xi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function jp(){if(jn===null)throw Error(o(475));var e=jn;return e.stylesheets&&e.count===0&&ms(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&ms(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xi(){if(this.count--,this.count===0){if(this.stylesheets)ms(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function ms(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(Ep,e),Qi=null,Xi.call(e))}function Ep(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var l=a.get(null);else{a=new Map,Qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Xi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var En={$$typeof:X,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function Np(e,t,a,l,n,i,c,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ru(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ru(0),this.hiddenUpdates=ru(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function bd(e,t,a,l,n,i,c,r,p,E,_,U){return e=new Np(e,t,a,c,r,p,E,U),t=1,i===!0&&(t|=24),i=ct(3,null,null,t),e.current=i,i.stateNode=e,t=Ju(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Pu(i),e}function xd(e){return e?(e=nl,e):nl}function Sd(e,t,a,l,n,i){n=xd(n),l.context===null?l.context=n:l.pendingContext=n,l=ia(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=ua(e,l,t),a!==null&&(dt(a,e,t),Pl(a,e,t))}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function hs(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function Ed(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&dt(t,e,67108864),hs(e,67108864)}}var Zi=!0;function Ap(e,t,a,l){var n=M.T;M.T=null;var i=L.p;try{L.p=2,ps(e,t,a,l)}finally{L.p=i,M.T=n}}function Tp(e,t,a,l){var n=M.T;M.T=null;var i=L.p;try{L.p=8,ps(e,t,a,l)}finally{L.p=i,M.T=n}}function ps(e,t,a,l){if(Zi){var n=gs(l);if(n===null)as(e,t,l,Vi,a),Ad(e,l);else if(Rp(n,e,t,a,l))l.stopPropagation();else if(Ad(e,l),t&4&&-1<zp.indexOf(e)){for(;n!==null;){var i=Za(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Aa(i.pendingLanes);if(c!==0){var r=i;for(r.pendingLanes|=2,r.entangledLanes|=2;c;){var p=1<<31-it(c);r.entanglements[1]|=p,c&=~p}Dt(i),(me&6)===0&&(Oi=At()+500,gn(0))}}break;case 13:r=ll(i,2),r!==null&&dt(r,i,2),Mi(),hs(i,2)}if(i=gs(l),i===null&&as(e,t,l,Vi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else as(e,t,l,null,a)}}function gs(e){return e=Su(e),vs(e)}var Vi=null;function vs(e){if(Vi=null,e=Qa(e),e!==null){var t=v(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=z(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vi=e,null}function Nd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(dm()){case Hs:return 2;case Bs:return 8;case qn:case mm:return 32;case qs:return 268435456;default:return 32}default:return 32}}var ys=!1,ba=null,xa=null,Sa=null,Nn=new Map,An=new Map,ja=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ad(e,t){switch(e){case"focusin":case"focusout":ba=null;break;case"dragenter":case"dragleave":xa=null;break;case"mouseover":case"mouseout":Sa=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function Tn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Za(t),t!==null&&Ed(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Rp(e,t,a,l,n){switch(t){case"focusin":return ba=Tn(ba,e,t,a,l,n),!0;case"dragenter":return xa=Tn(xa,e,t,a,l,n),!0;case"mouseover":return Sa=Tn(Sa,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,Tn(Nn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,An.set(i,Tn(An.get(i)||null,e,t,a,l,n)),!0}return!1}function Td(e){var t=Qa(e.target);if(t!==null){var a=v(t);if(a!==null){if(t=a.tag,t===13){if(t=z(a),t!==null){e.blockedOn=t,Sm(e.priority,function(){if(a.tag===13){var l=ft();l=ou(l);var n=ll(a,l);n!==null&&dt(n,a,l),hs(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=gs(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);xu=l,a.target.dispatchEvent(l),xu=null}else return t=Za(a),t!==null&&Ed(t),e.blockedOn=a,!1;t.shift()}return!0}function zd(e,t,a){Ki(e)&&a.delete(t)}function Op(){ys=!1,ba!==null&&Ki(ba)&&(ba=null),xa!==null&&Ki(xa)&&(xa=null),Sa!==null&&Ki(Sa)&&(Sa=null),Nn.forEach(zd),An.forEach(zd)}function Ji(e,t){e.blockedOn===t&&(e.blockedOn=null,ys||(ys=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Op)))}var $i=null;function Rd(e){$i!==e&&($i=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){$i===e&&($i=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(vs(l||a)===null)continue;break}var i=Za(a);i!==null&&(e.splice(t,3),t-=3,vc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function zn(e){function t(p){return Ji(p,e)}ba!==null&&Ji(ba,e),xa!==null&&Ji(xa,e),Sa!==null&&Ji(Sa,e),Nn.forEach(t),An.forEach(t);for(var a=0;a<ja.length;a++){var l=ja[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<ja.length&&(a=ja[0],a.blockedOn===null);)Td(a),a.blockedOn===null&&ja.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[Fe]||null;if(typeof i=="function")c||Rd(a);else if(c){var r=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[Fe]||null)r=c.formAction;else if(vs(n)!==null)continue}else r=c.action;typeof r=="function"?a[l+1]=r:(a.splice(l,3),l-=3),Rd(a)}}}function bs(e){this._internalRoot=e}Wi.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=ft();Sd(a,l,e,t,null,null)},Wi.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Sd(e.current,2,null,e,null,null),Mi(),t[Xa]=null}};function Wi(e){this._internalRoot=e}Wi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Xs();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ja.length&&t!==0&&t<ja[a].priority;a++);ja.splice(a,0,e),a===0&&Td(e)}};var Od=f.version;if(Od!=="19.1.0")throw Error(o(527,Od,"19.1.0"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=g(t),e=e!==null?h(e):null,e=e===null?null:e.stateNode,e};var Dp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Dl=Fi.inject(Dp),nt=Fi}catch{}}return On.createRoot=function(e,t){if(!m(e))throw Error(o(299));var a=!1,l="",n=Qo,i=Zo,c=Vo,r=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(r=t.unstable_transitionCallbacks)),t=bd(e,1,!1,null,null,a,l,n,i,c,r,null),e[Xa]=t.current,ts(e),new bs(t)},On.hydrateRoot=function(e,t,a){if(!m(e))throw Error(o(299));var l=!1,n="",i=Qo,c=Zo,r=Vo,p=null,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(r=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(p=a.unstable_transitionCallbacks),a.formState!==void 0&&(E=a.formState)),t=bd(e,1,!0,t,a??null,l,n,i,c,r,p,E),t.context=xd(null),a=t.current,l=ft(),l=ou(l),n=ia(l),n.callback=null,ua(a,n,l),a=l,t.current.lanes=a,_l(t,a),Dt(t),e[Xa]=t.current,ts(e),new Wi(t)},On.version="19.1.0",On}var Yd;function kp(){if(Yd)return js.exports;Yd=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(f){console.error(f)}}return s(),js.exports=Yp(),js.exports}var Lp=kp(),Dn={},kd;function Gp(){if(kd)return Dn;kd=1,Object.defineProperty(Dn,"__esModule",{value:!0}),Dn.parse=z,Dn.serialize=h;const s=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,f=/^[\u0021-\u003A\u003C-\u007E]*$/,d=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,m=Object.prototype.toString,v=(()=>{const D=function(){};return D.prototype=Object.create(null),D})();function z(D,k){const w=new v,Y=D.length;if(Y<2)return w;const G=(k==null?void 0:k.decode)||R;let T=0;do{const B=D.indexOf("=",T);if(B===-1)break;const X=D.indexOf(";",T),$=X===-1?Y:X;if(B>$){T=D.lastIndexOf(";",B-1)+1;continue}const J=j(D,T,B),pe=g(D,B,J),Ee=D.slice(J,pe);if(w[Ee]===void 0){let Te=j(D,B+1,$),be=g(D,$,Te);const Ve=G(D.slice(Te,be));w[Ee]=Ve}T=$+1}while(T<Y);return w}function j(D,k,w){do{const Y=D.charCodeAt(k);if(Y!==32&&Y!==9)return k}while(++k<w);return w}function g(D,k,w){for(;k>w;){const Y=D.charCodeAt(--k);if(Y!==32&&Y!==9)return k+1}return w}function h(D,k,w){const Y=(w==null?void 0:w.encode)||encodeURIComponent;if(!s.test(D))throw new TypeError(`argument name is invalid: ${D}`);const G=Y(k);if(!f.test(G))throw new TypeError(`argument val is invalid: ${k}`);let T=D+"="+G;if(!w)return T;if(w.maxAge!==void 0){if(!Number.isInteger(w.maxAge))throw new TypeError(`option maxAge is invalid: ${w.maxAge}`);T+="; Max-Age="+w.maxAge}if(w.domain){if(!d.test(w.domain))throw new TypeError(`option domain is invalid: ${w.domain}`);T+="; Domain="+w.domain}if(w.path){if(!o.test(w.path))throw new TypeError(`option path is invalid: ${w.path}`);T+="; Path="+w.path}if(w.expires){if(!q(w.expires)||!Number.isFinite(w.expires.valueOf()))throw new TypeError(`option expires is invalid: ${w.expires}`);T+="; Expires="+w.expires.toUTCString()}if(w.httpOnly&&(T+="; HttpOnly"),w.secure&&(T+="; Secure"),w.partitioned&&(T+="; Partitioned"),w.priority)switch(typeof w.priority=="string"?w.priority.toLowerCase():void 0){case"low":T+="; Priority=Low";break;case"medium":T+="; Priority=Medium";break;case"high":T+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${w.priority}`)}if(w.sameSite)switch(typeof w.sameSite=="string"?w.sameSite.toLowerCase():w.sameSite){case!0:case"strict":T+="; SameSite=Strict";break;case"lax":T+="; SameSite=Lax";break;case"none":T+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${w.sameSite}`)}return T}function R(D){if(D.indexOf("%")===-1)return D;try{return decodeURIComponent(D)}catch{return D}}function q(D){return m.call(D)==="[object Date]"}return Dn}Gp();var Ld="popstate";function Xp(s={}){function f(o,m){let{pathname:v,search:z,hash:j}=o.location;return Rs("",{pathname:v,search:z,hash:j},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function d(o,m){return typeof m=="string"?m:_n(m)}return Zp(f,d,null,s)}function Re(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}function Mt(s,f){if(!s){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Qp(){return Math.random().toString(36).substring(2,10)}function Gd(s,f){return{usr:s.state,key:s.key,idx:f}}function Rs(s,f,d=null,o){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof f=="string"?Rl(f):f,state:d,key:f&&f.key||o||Qp()}}function _n({pathname:s="/",search:f="",hash:d=""}){return f&&f!=="?"&&(s+=f.charAt(0)==="?"?f:"?"+f),d&&d!=="#"&&(s+=d.charAt(0)==="#"?d:"#"+d),s}function Rl(s){let f={};if(s){let d=s.indexOf("#");d>=0&&(f.hash=s.substring(d),s=s.substring(0,d));let o=s.indexOf("?");o>=0&&(f.search=s.substring(o),s=s.substring(0,o)),s&&(f.pathname=s)}return f}function Zp(s,f,d,o={}){let{window:m=document.defaultView,v5Compat:v=!1}=o,z=m.history,j="POP",g=null,h=R();h==null&&(h=0,z.replaceState({...z.state,idx:h},""));function R(){return(z.state||{idx:null}).idx}function q(){j="POP";let G=R(),T=G==null?null:G-h;h=G,g&&g({action:j,location:Y.location,delta:T})}function D(G,T){j="PUSH";let B=Rs(Y.location,G,T);h=R()+1;let X=Gd(B,h),$=Y.createHref(B);try{z.pushState(X,"",$)}catch(J){if(J instanceof DOMException&&J.name==="DataCloneError")throw J;m.location.assign($)}v&&g&&g({action:j,location:Y.location,delta:1})}function k(G,T){j="REPLACE";let B=Rs(Y.location,G,T);h=R();let X=Gd(B,h),$=Y.createHref(B);z.replaceState(X,"",$),v&&g&&g({action:j,location:Y.location,delta:0})}function w(G){return Vp(G)}let Y={get action(){return j},get location(){return s(m,z)},listen(G){if(g)throw new Error("A history only accepts one active listener");return m.addEventListener(Ld,q),g=G,()=>{m.removeEventListener(Ld,q),g=null}},createHref(G){return f(m,G)},createURL:w,encodeLocation(G){let T=w(G);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:D,replace:k,go(G){return z.go(G)}};return Y}function Vp(s,f=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Re(d,"No window.location.(origin|href) available to create URL");let o=typeof s=="string"?s:_n(s);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Vd(s,f,d="/"){return Kp(s,f,d,!1)}function Kp(s,f,d,o){let m=typeof f=="string"?Rl(f):f,v=Wt(m.pathname||"/",d);if(v==null)return null;let z=Kd(s);Jp(z);let j=null;for(let g=0;j==null&&g<z.length;++g){let h=ig(v);j=lg(z[g],h,o)}return j}function Kd(s,f=[],d=[],o=""){let m=(v,z,j)=>{let g={relativePath:j===void 0?v.path||"":j,caseSensitive:v.caseSensitive===!0,childrenIndex:z,route:v};g.relativePath.startsWith("/")&&(Re(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length));let h=$t([o,g.relativePath]),R=d.concat(g);v.children&&v.children.length>0&&(Re(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),Kd(v.children,f,R,h)),!(v.path==null&&!v.index)&&f.push({path:h,score:tg(h,v.index),routesMeta:R})};return s.forEach((v,z)=>{var j;if(v.path===""||!((j=v.path)!=null&&j.includes("?")))m(v,z);else for(let g of Jd(v.path))m(v,z,g)}),f}function Jd(s){let f=s.split("/");if(f.length===0)return[];let[d,...o]=f,m=d.endsWith("?"),v=d.replace(/\?$/,"");if(o.length===0)return m?[v,""]:[v];let z=Jd(o.join("/")),j=[];return j.push(...z.map(g=>g===""?v:[v,g].join("/"))),m&&j.push(...z),j.map(g=>s.startsWith("/")&&g===""?"/":g)}function Jp(s){s.sort((f,d)=>f.score!==d.score?d.score-f.score:ag(f.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var $p=/^:[\w-]+$/,Wp=3,Fp=2,Pp=1,Ip=10,eg=-2,Xd=s=>s==="*";function tg(s,f){let d=s.split("/"),o=d.length;return d.some(Xd)&&(o+=eg),f&&(o+=Fp),d.filter(m=>!Xd(m)).reduce((m,v)=>m+($p.test(v)?Wp:v===""?Pp:Ip),o)}function ag(s,f){return s.length===f.length&&s.slice(0,-1).every((o,m)=>o===f[m])?s[s.length-1]-f[f.length-1]:0}function lg(s,f,d=!1){let{routesMeta:o}=s,m={},v="/",z=[];for(let j=0;j<o.length;++j){let g=o[j],h=j===o.length-1,R=v==="/"?f:f.slice(v.length)||"/",q=tu({path:g.relativePath,caseSensitive:g.caseSensitive,end:h},R),D=g.route;if(!q&&h&&d&&!o[o.length-1].route.index&&(q=tu({path:g.relativePath,caseSensitive:g.caseSensitive,end:!1},R)),!q)return null;Object.assign(m,q.params),z.push({params:m,pathname:$t([v,q.pathname]),pathnameBase:rg($t([v,q.pathnameBase])),route:D}),q.pathnameBase!=="/"&&(v=$t([v,q.pathnameBase]))}return z}function tu(s,f){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[d,o]=ng(s.path,s.caseSensitive,s.end),m=f.match(d);if(!m)return null;let v=m[0],z=v.replace(/(.)\/+$/,"$1"),j=m.slice(1);return{params:o.reduce((h,{paramName:R,isOptional:q},D)=>{if(R==="*"){let w=j[D]||"";z=v.slice(0,v.length-w.length).replace(/(.)\/+$/,"$1")}const k=j[D];return q&&!k?h[R]=void 0:h[R]=(k||"").replace(/%2F/g,"/"),h},{}),pathname:v,pathnameBase:z,pattern:s}}function ng(s,f=!1,d=!0){Mt(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let o=[],m="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(z,j,g)=>(o.push({paramName:j,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(o.push({paramName:"*"}),m+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?m+="\\/*$":s!==""&&s!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,f?void 0:"i"),o]}function ig(s){try{return s.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Mt(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),s}}function Wt(s,f){if(f==="/")return s;if(!s.toLowerCase().startsWith(f.toLowerCase()))return null;let d=f.endsWith("/")?f.length-1:f.length,o=s.charAt(d);return o&&o!=="/"?null:s.slice(d)||"/"}function ug(s,f="/"){let{pathname:d,search:o="",hash:m=""}=typeof s=="string"?Rl(s):s;return{pathname:d?d.startsWith("/")?d:cg(d,f):f,search:og(o),hash:fg(m)}}function cg(s,f){let d=f.replace(/\/+$/,"").split("/");return s.split("/").forEach(m=>{m===".."?d.length>1&&d.pop():m!=="."&&d.push(m)}),d.length>1?d.join("/"):"/"}function Ts(s,f,d,o){return`Cannot include a '${s}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function sg(s){return s.filter((f,d)=>d===0||f.route.path&&f.route.path.length>0)}function $d(s){let f=sg(s);return f.map((d,o)=>o===f.length-1?d.pathname:d.pathnameBase)}function Wd(s,f,d,o=!1){let m;typeof s=="string"?m=Rl(s):(m={...s},Re(!m.pathname||!m.pathname.includes("?"),Ts("?","pathname","search",m)),Re(!m.pathname||!m.pathname.includes("#"),Ts("#","pathname","hash",m)),Re(!m.search||!m.search.includes("#"),Ts("#","search","hash",m)));let v=s===""||m.pathname==="",z=v?"/":m.pathname,j;if(z==null)j=d;else{let q=f.length-1;if(!o&&z.startsWith("..")){let D=z.split("/");for(;D[0]==="..";)D.shift(),q-=1;m.pathname=D.join("/")}j=q>=0?f[q]:"/"}let g=ug(m,j),h=z&&z!=="/"&&z.endsWith("/"),R=(v||z===".")&&d.endsWith("/");return!g.pathname.endsWith("/")&&(h||R)&&(g.pathname+="/"),g}var $t=s=>s.join("/").replace(/\/\/+/g,"/"),rg=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),og=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,fg=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function dg(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var Fd=["POST","PUT","PATCH","DELETE"];new Set(Fd);var mg=["GET",...Fd];new Set(mg);var Ol=A.createContext(null);Ol.displayName="DataRouter";var au=A.createContext(null);au.displayName="DataRouterState";var Pd=A.createContext({isTransitioning:!1});Pd.displayName="ViewTransition";var hg=A.createContext(new Map);hg.displayName="Fetchers";var pg=A.createContext(null);pg.displayName="Await";var _t=A.createContext(null);_t.displayName="Navigation";var Cn=A.createContext(null);Cn.displayName="Location";var Ft=A.createContext({outlet:null,matches:[],isDataRoute:!1});Ft.displayName="Route";var Ms=A.createContext(null);Ms.displayName="RouteError";function gg(s,{relative:f}={}){Re(wn(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=A.useContext(_t),{hash:m,pathname:v,search:z}=Un(s,{relative:f}),j=v;return d!=="/"&&(j=v==="/"?d:$t([d,v])),o.createHref({pathname:j,search:z,hash:m})}function wn(){return A.useContext(Cn)!=null}function Pt(){return Re(wn(),"useLocation() may be used only in the context of a <Router> component."),A.useContext(Cn).location}var Id="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function em(s){A.useContext(_t).static||A.useLayoutEffect(s)}function vg(){let{isDataRoute:s}=A.useContext(Ft);return s?Dg():yg()}function yg(){Re(wn(),"useNavigate() may be used only in the context of a <Router> component.");let s=A.useContext(Ol),{basename:f,navigator:d}=A.useContext(_t),{matches:o}=A.useContext(Ft),{pathname:m}=Pt(),v=JSON.stringify($d(o)),z=A.useRef(!1);return em(()=>{z.current=!0}),A.useCallback((g,h={})=>{if(Mt(z.current,Id),!z.current)return;if(typeof g=="number"){d.go(g);return}let R=Wd(g,JSON.parse(v),m,h.relative==="path");s==null&&f!=="/"&&(R.pathname=R.pathname==="/"?f:$t([f,R.pathname])),(h.replace?d.replace:d.push)(R,h.state,h)},[f,d,v,m,s])}A.createContext(null);function Un(s,{relative:f}={}){let{matches:d}=A.useContext(Ft),{pathname:o}=Pt(),m=JSON.stringify($d(d));return A.useMemo(()=>Wd(s,JSON.parse(m),o,f==="path"),[s,m,o,f])}function bg(s,f){return tm(s,f)}function tm(s,f,d,o){var T;Re(wn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:m}=A.useContext(_t),{matches:v}=A.useContext(Ft),z=v[v.length-1],j=z?z.params:{},g=z?z.pathname:"/",h=z?z.pathnameBase:"/",R=z&&z.route;{let B=R&&R.path||"";am(g,!R||B.endsWith("*")||B.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${B}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${B}"> to <Route path="${B==="/"?"*":`${B}/*`}">.`)}let q=Pt(),D;if(f){let B=typeof f=="string"?Rl(f):f;Re(h==="/"||((T=B.pathname)==null?void 0:T.startsWith(h)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${h}" but pathname "${B.pathname}" was given in the \`location\` prop.`),D=B}else D=q;let k=D.pathname||"/",w=k;if(h!=="/"){let B=h.replace(/^\//,"").split("/");w="/"+k.replace(/^\//,"").split("/").slice(B.length).join("/")}let Y=Vd(s,{pathname:w});Mt(R||Y!=null,`No routes matched location "${D.pathname}${D.search}${D.hash}" `),Mt(Y==null||Y[Y.length-1].route.element!==void 0||Y[Y.length-1].route.Component!==void 0||Y[Y.length-1].route.lazy!==void 0,`Matched leaf route at location "${D.pathname}${D.search}${D.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let G=Ng(Y&&Y.map(B=>Object.assign({},B,{params:Object.assign({},j,B.params),pathname:$t([h,m.encodeLocation?m.encodeLocation(B.pathname).pathname:B.pathname]),pathnameBase:B.pathnameBase==="/"?h:$t([h,m.encodeLocation?m.encodeLocation(B.pathnameBase).pathname:B.pathnameBase])})),v,d,o);return f&&G?A.createElement(Cn.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...D},navigationType:"POP"}},G):G}function xg(){let s=Og(),f=dg(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),d=s instanceof Error?s.stack:null,o="rgba(200,200,200, 0.5)",m={padding:"0.5rem",backgroundColor:o},v={padding:"2px 4px",backgroundColor:o},z=null;return console.error("Error handled by React Router default ErrorBoundary:",s),z=A.createElement(A.Fragment,null,A.createElement("p",null,"💿 Hey developer 👋"),A.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",A.createElement("code",{style:v},"ErrorBoundary")," or"," ",A.createElement("code",{style:v},"errorElement")," prop on your route.")),A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},f),d?A.createElement("pre",{style:m},d):null,z)}var Sg=A.createElement(xg,null),jg=class extends A.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,f){return f.location!==s.location||f.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:f.error,location:f.location,revalidation:s.revalidation||f.revalidation}}componentDidCatch(s,f){console.error("React Router caught the following error during render",s,f)}render(){return this.state.error!==void 0?A.createElement(Ft.Provider,{value:this.props.routeContext},A.createElement(Ms.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Eg({routeContext:s,match:f,children:d}){let o=A.useContext(Ol);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),A.createElement(Ft.Provider,{value:s},d)}function Ng(s,f=[],d=null,o=null){if(s==null){if(!d)return null;if(d.errors)s=d.matches;else if(f.length===0&&!d.initialized&&d.matches.length>0)s=d.matches;else return null}let m=s,v=d==null?void 0:d.errors;if(v!=null){let g=m.findIndex(h=>h.route.id&&(v==null?void 0:v[h.route.id])!==void 0);Re(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),m=m.slice(0,Math.min(m.length,g+1))}let z=!1,j=-1;if(d)for(let g=0;g<m.length;g++){let h=m[g];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(j=g),h.route.id){let{loaderData:R,errors:q}=d,D=h.route.loader&&!R.hasOwnProperty(h.route.id)&&(!q||q[h.route.id]===void 0);if(h.route.lazy||D){z=!0,j>=0?m=m.slice(0,j+1):m=[m[0]];break}}}return m.reduceRight((g,h,R)=>{let q,D=!1,k=null,w=null;d&&(q=v&&h.route.id?v[h.route.id]:void 0,k=h.route.errorElement||Sg,z&&(j<0&&R===0?(am("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,w=null):j===R&&(D=!0,w=h.route.hydrateFallbackElement||null)));let Y=f.concat(m.slice(0,R+1)),G=()=>{let T;return q?T=k:D?T=w:h.route.Component?T=A.createElement(h.route.Component,null):h.route.element?T=h.route.element:T=g,A.createElement(Eg,{match:h,routeContext:{outlet:g,matches:Y,isDataRoute:d!=null},children:T})};return d&&(h.route.ErrorBoundary||h.route.errorElement||R===0)?A.createElement(jg,{location:d.location,revalidation:d.revalidation,component:k,error:q,children:G(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):G()},null)}function _s(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ag(s){let f=A.useContext(Ol);return Re(f,_s(s)),f}function Tg(s){let f=A.useContext(au);return Re(f,_s(s)),f}function zg(s){let f=A.useContext(Ft);return Re(f,_s(s)),f}function Cs(s){let f=zg(s),d=f.matches[f.matches.length-1];return Re(d.route.id,`${s} can only be used on routes that contain a unique "id"`),d.route.id}function Rg(){return Cs("useRouteId")}function Og(){var o;let s=A.useContext(Ms),f=Tg("useRouteError"),d=Cs("useRouteError");return s!==void 0?s:(o=f.errors)==null?void 0:o[d]}function Dg(){let{router:s}=Ag("useNavigate"),f=Cs("useNavigate"),d=A.useRef(!1);return em(()=>{d.current=!0}),A.useCallback(async(m,v={})=>{Mt(d.current,Id),d.current&&(typeof m=="number"?s.navigate(m):await s.navigate(m,{fromRouteId:f,...v}))},[s,f])}var Qd={};function am(s,f,d){!f&&!Qd[s]&&(Qd[s]=!0,Mt(!1,d))}A.memo(Mg);function Mg({routes:s,future:f,state:d}){return tm(s,void 0,d,f)}function Na(s){Re(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function _g({basename:s="/",children:f=null,location:d,navigationType:o="POP",navigator:m,static:v=!1}){Re(!wn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let z=s.replace(/^\/*/,"/"),j=A.useMemo(()=>({basename:z,navigator:m,static:v,future:{}}),[z,m,v]);typeof d=="string"&&(d=Rl(d));let{pathname:g="/",search:h="",hash:R="",state:q=null,key:D="default"}=d,k=A.useMemo(()=>{let w=Wt(g,z);return w==null?null:{location:{pathname:w,search:h,hash:R,state:q,key:D},navigationType:o}},[z,g,h,R,q,D,o]);return Mt(k!=null,`<Router basename="${z}"> is not able to match the URL "${g}${h}${R}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:A.createElement(_t.Provider,{value:j},A.createElement(Cn.Provider,{children:f,value:k}))}function Cg({children:s,location:f}){return bg(Os(s),f)}function Os(s,f=[]){let d=[];return A.Children.forEach(s,(o,m)=>{if(!A.isValidElement(o))return;let v=[...f,m];if(o.type===A.Fragment){d.push.apply(d,Os(o.props.children,v));return}Re(o.type===Na,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Re(!o.props.index||!o.props.children,"An index route cannot have child routes.");let z={id:o.props.id||v.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(z.children=Os(o.props.children,v)),d.push(z)}),d}var Ii="get",eu="application/x-www-form-urlencoded";function lu(s){return s!=null&&typeof s.tagName=="string"}function wg(s){return lu(s)&&s.tagName.toLowerCase()==="button"}function Ug(s){return lu(s)&&s.tagName.toLowerCase()==="form"}function Hg(s){return lu(s)&&s.tagName.toLowerCase()==="input"}function Bg(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function qg(s,f){return s.button===0&&(!f||f==="_self")&&!Bg(s)}var Pi=null;function Yg(){if(Pi===null)try{new FormData(document.createElement("form"),0),Pi=!1}catch{Pi=!0}return Pi}var kg=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function zs(s){return s!=null&&!kg.has(s)?(Mt(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${eu}"`),null):s}function Lg(s,f){let d,o,m,v,z;if(Ug(s)){let j=s.getAttribute("action");o=j?Wt(j,f):null,d=s.getAttribute("method")||Ii,m=zs(s.getAttribute("enctype"))||eu,v=new FormData(s)}else if(wg(s)||Hg(s)&&(s.type==="submit"||s.type==="image")){let j=s.form;if(j==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let g=s.getAttribute("formaction")||j.getAttribute("action");if(o=g?Wt(g,f):null,d=s.getAttribute("formmethod")||j.getAttribute("method")||Ii,m=zs(s.getAttribute("formenctype"))||zs(j.getAttribute("enctype"))||eu,v=new FormData(j,s),!Yg()){let{name:h,type:R,value:q}=s;if(R==="image"){let D=h?`${h}.`:"";v.append(`${D}x`,"0"),v.append(`${D}y`,"0")}else h&&v.append(h,q)}}else{if(lu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=Ii,o=null,m=eu,z=s}return v&&m==="text/plain"&&(z=v,v=void 0),{action:o,method:d.toLowerCase(),encType:m,formData:v,body:z}}function ws(s,f){if(s===!1||s===null||typeof s>"u")throw new Error(f)}async function Gg(s,f){if(s.id in f)return f[s.id];try{let d=await import(s.module);return f[s.id]=d,d}catch(d){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Xg(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function Qg(s,f,d){let o=await Promise.all(s.map(async m=>{let v=f.routes[m.route.id];if(v){let z=await Gg(v,d);return z.links?z.links():[]}return[]}));return Jg(o.flat(1).filter(Xg).filter(m=>m.rel==="stylesheet"||m.rel==="preload").map(m=>m.rel==="stylesheet"?{...m,rel:"prefetch",as:"style"}:{...m,rel:"prefetch"}))}function Zd(s,f,d,o,m,v){let z=(g,h)=>d[h]?g.route.id!==d[h].route.id:!0,j=(g,h)=>{var R;return d[h].pathname!==g.pathname||((R=d[h].route.path)==null?void 0:R.endsWith("*"))&&d[h].params["*"]!==g.params["*"]};return v==="assets"?f.filter((g,h)=>z(g,h)||j(g,h)):v==="data"?f.filter((g,h)=>{var q;let R=o.routes[g.route.id];if(!R||!R.hasLoader)return!1;if(z(g,h)||j(g,h))return!0;if(g.route.shouldRevalidate){let D=g.route.shouldRevalidate({currentUrl:new URL(m.pathname+m.search+m.hash,window.origin),currentParams:((q=d[0])==null?void 0:q.params)||{},nextUrl:new URL(s,window.origin),nextParams:g.params,defaultShouldRevalidate:!0});if(typeof D=="boolean")return D}return!0}):[]}function Zg(s,f,{includeHydrateFallback:d}={}){return Vg(s.map(o=>{let m=f.routes[o.route.id];if(!m)return[];let v=[m.module];return m.clientActionModule&&(v=v.concat(m.clientActionModule)),m.clientLoaderModule&&(v=v.concat(m.clientLoaderModule)),d&&m.hydrateFallbackModule&&(v=v.concat(m.hydrateFallbackModule)),m.imports&&(v=v.concat(m.imports)),v}).flat(1))}function Vg(s){return[...new Set(s)]}function Kg(s){let f={},d=Object.keys(s).sort();for(let o of d)f[o]=s[o];return f}function Jg(s,f){let d=new Set;return new Set(f),s.reduce((o,m)=>{let v=JSON.stringify(Kg(m));return d.has(v)||(d.add(v),o.push({key:v,link:m})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var $g=new Set([100,101,204,205]);function Wg(s,f){let d=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return d.pathname==="/"?d.pathname="_root.data":f&&Wt(d.pathname,f)==="/"?d.pathname=`${f.replace(/\/$/,"")}/_root.data`:d.pathname=`${d.pathname.replace(/\/$/,"")}.data`,d}function lm(){let s=A.useContext(Ol);return ws(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function Fg(){let s=A.useContext(au);return ws(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var Us=A.createContext(void 0);Us.displayName="FrameworkContext";function nm(){let s=A.useContext(Us);return ws(s,"You must render this element inside a <HydratedRouter> element"),s}function Pg(s,f){let d=A.useContext(Us),[o,m]=A.useState(!1),[v,z]=A.useState(!1),{onFocus:j,onBlur:g,onMouseEnter:h,onMouseLeave:R,onTouchStart:q}=f,D=A.useRef(null);A.useEffect(()=>{if(s==="render"&&z(!0),s==="viewport"){let Y=T=>{T.forEach(B=>{z(B.isIntersecting)})},G=new IntersectionObserver(Y,{threshold:.5});return D.current&&G.observe(D.current),()=>{G.disconnect()}}},[s]),A.useEffect(()=>{if(o){let Y=setTimeout(()=>{z(!0)},100);return()=>{clearTimeout(Y)}}},[o]);let k=()=>{m(!0)},w=()=>{m(!1),z(!1)};return d?s!=="intent"?[v,D,{}]:[v,D,{onFocus:Mn(j,k),onBlur:Mn(g,w),onMouseEnter:Mn(h,k),onMouseLeave:Mn(R,w),onTouchStart:Mn(q,k)}]:[!1,D,{}]}function Mn(s,f){return d=>{s&&s(d),d.defaultPrevented||f(d)}}function Ig({page:s,...f}){let{router:d}=lm(),o=A.useMemo(()=>Vd(d.routes,s,d.basename),[d.routes,s,d.basename]);return o?A.createElement(t0,{page:s,matches:o,...f}):null}function e0(s){let{manifest:f,routeModules:d}=nm(),[o,m]=A.useState([]);return A.useEffect(()=>{let v=!1;return Qg(s,f,d).then(z=>{v||m(z)}),()=>{v=!0}},[s,f,d]),o}function t0({page:s,matches:f,...d}){let o=Pt(),{manifest:m,routeModules:v}=nm(),{basename:z}=lm(),{loaderData:j,matches:g}=Fg(),h=A.useMemo(()=>Zd(s,f,g,m,o,"data"),[s,f,g,m,o]),R=A.useMemo(()=>Zd(s,f,g,m,o,"assets"),[s,f,g,m,o]),q=A.useMemo(()=>{if(s===o.pathname+o.search+o.hash)return[];let w=new Set,Y=!1;if(f.forEach(T=>{var X;let B=m.routes[T.route.id];!B||!B.hasLoader||(!h.some($=>$.route.id===T.route.id)&&T.route.id in j&&((X=v[T.route.id])!=null&&X.shouldRevalidate)||B.hasClientLoader?Y=!0:w.add(T.route.id))}),w.size===0)return[];let G=Wg(s,z);return Y&&w.size>0&&G.searchParams.set("_routes",f.filter(T=>w.has(T.route.id)).map(T=>T.route.id).join(",")),[G.pathname+G.search]},[z,j,o,m,h,f,s,v]),D=A.useMemo(()=>Zg(R,m),[R,m]),k=e0(R);return A.createElement(A.Fragment,null,q.map(w=>A.createElement("link",{key:w,rel:"prefetch",as:"fetch",href:w,...d})),D.map(w=>A.createElement("link",{key:w,rel:"modulepreload",href:w,...d})),k.map(({key:w,link:Y})=>A.createElement("link",{key:w,...Y})))}function a0(...s){return f=>{s.forEach(d=>{typeof d=="function"?d(f):d!=null&&(d.current=f)})}}var im=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{im&&(window.__reactRouterVersion="7.6.3")}catch{}function l0({basename:s,children:f,window:d}){let o=A.useRef();o.current==null&&(o.current=Xp({window:d,v5Compat:!0}));let m=o.current,[v,z]=A.useState({action:m.action,location:m.location}),j=A.useCallback(g=>{A.startTransition(()=>z(g))},[z]);return A.useLayoutEffect(()=>m.listen(j),[m,j]),A.createElement(_g,{basename:s,children:f,location:v.location,navigationType:v.action,navigator:m})}var um=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Le=A.forwardRef(function({onClick:f,discover:d="render",prefetch:o="none",relative:m,reloadDocument:v,replace:z,state:j,target:g,to:h,preventScrollReset:R,viewTransition:q,...D},k){let{basename:w}=A.useContext(_t),Y=typeof h=="string"&&um.test(h),G,T=!1;if(typeof h=="string"&&Y&&(G=h,im))try{let be=new URL(window.location.href),Ve=h.startsWith("//")?new URL(be.protocol+h):new URL(h),at=Wt(Ve.pathname,w);Ve.origin===be.origin&&at!=null?h=at+Ve.search+Ve.hash:T=!0}catch{Mt(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let B=gg(h,{relative:m}),[X,$,J]=Pg(o,D),pe=c0(h,{replace:z,state:j,target:g,preventScrollReset:R,relative:m,viewTransition:q});function Ee(be){f&&f(be),be.defaultPrevented||pe(be)}let Te=A.createElement("a",{...D,...J,href:G||B,onClick:T||v?f:Ee,ref:a0(k,$),target:g,"data-discover":!Y&&d==="render"?"true":void 0});return X&&!Y?A.createElement(A.Fragment,null,Te,A.createElement(Ig,{page:B})):Te});Le.displayName="Link";var n0=A.forwardRef(function({"aria-current":f="page",caseSensitive:d=!1,className:o="",end:m=!1,style:v,to:z,viewTransition:j,children:g,...h},R){let q=Un(z,{relative:h.relative}),D=Pt(),k=A.useContext(au),{navigator:w,basename:Y}=A.useContext(_t),G=k!=null&&d0(q)&&j===!0,T=w.encodeLocation?w.encodeLocation(q).pathname:q.pathname,B=D.pathname,X=k&&k.navigation&&k.navigation.location?k.navigation.location.pathname:null;d||(B=B.toLowerCase(),X=X?X.toLowerCase():null,T=T.toLowerCase()),X&&Y&&(X=Wt(X,Y)||X);const $=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let J=B===T||!m&&B.startsWith(T)&&B.charAt($)==="/",pe=X!=null&&(X===T||!m&&X.startsWith(T)&&X.charAt(T.length)==="/"),Ee={isActive:J,isPending:pe,isTransitioning:G},Te=J?f:void 0,be;typeof o=="function"?be=o(Ee):be=[o,J?"active":null,pe?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Ve=typeof v=="function"?v(Ee):v;return A.createElement(Le,{...h,"aria-current":Te,className:be,ref:R,style:Ve,to:z,viewTransition:j},typeof g=="function"?g(Ee):g)});n0.displayName="NavLink";var i0=A.forwardRef(({discover:s="render",fetcherKey:f,navigate:d,reloadDocument:o,replace:m,state:v,method:z=Ii,action:j,onSubmit:g,relative:h,preventScrollReset:R,viewTransition:q,...D},k)=>{let w=o0(),Y=f0(j,{relative:h}),G=z.toLowerCase()==="get"?"get":"post",T=typeof j=="string"&&um.test(j),B=X=>{if(g&&g(X),X.defaultPrevented)return;X.preventDefault();let $=X.nativeEvent.submitter,J=($==null?void 0:$.getAttribute("formmethod"))||z;w($||X.currentTarget,{fetcherKey:f,method:J,navigate:d,replace:m,state:v,relative:h,preventScrollReset:R,viewTransition:q})};return A.createElement("form",{ref:k,method:G,action:Y,onSubmit:o?g:B,...D,"data-discover":!T&&s==="render"?"true":void 0})});i0.displayName="Form";function u0(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function cm(s){let f=A.useContext(Ol);return Re(f,u0(s)),f}function c0(s,{target:f,replace:d,state:o,preventScrollReset:m,relative:v,viewTransition:z}={}){let j=vg(),g=Pt(),h=Un(s,{relative:v});return A.useCallback(R=>{if(qg(R,f)){R.preventDefault();let q=d!==void 0?d:_n(g)===_n(h);j(s,{replace:q,state:o,preventScrollReset:m,relative:v,viewTransition:z})}},[g,j,h,d,o,f,s,m,v,z])}var s0=0,r0=()=>`__${String(++s0)}__`;function o0(){let{router:s}=cm("useSubmit"),{basename:f}=A.useContext(_t),d=Rg();return A.useCallback(async(o,m={})=>{let{action:v,method:z,encType:j,formData:g,body:h}=Lg(o,f);if(m.navigate===!1){let R=m.fetcherKey||r0();await s.fetch(R,d,m.action||v,{preventScrollReset:m.preventScrollReset,formData:g,body:h,formMethod:m.method||z,formEncType:m.encType||j,flushSync:m.flushSync})}else await s.navigate(m.action||v,{preventScrollReset:m.preventScrollReset,formData:g,body:h,formMethod:m.method||z,formEncType:m.encType||j,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[s,f,d])}function f0(s,{relative:f}={}){let{basename:d}=A.useContext(_t),o=A.useContext(Ft);Re(o,"useFormAction must be used inside a RouteContext");let[m]=o.matches.slice(-1),v={...Un(s||".",{relative:f})},z=Pt();if(s==null){v.search=z.search;let j=new URLSearchParams(v.search),g=j.getAll("index");if(g.some(R=>R==="")){j.delete("index"),g.filter(q=>q).forEach(q=>j.append("index",q));let R=j.toString();v.search=R?`?${R}`:""}}return(!s||s===".")&&m.route.index&&(v.search=v.search?v.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(v.pathname=v.pathname==="/"?d:$t([d,v.pathname])),_n(v)}function d0(s,f={}){let d=A.useContext(Pd);Re(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=cm("useViewTransitionState"),m=Un(s,{relative:f.relative});if(!d.isTransitioning)return!1;let v=Wt(d.currentLocation.pathname,o)||d.currentLocation.pathname,z=Wt(d.nextLocation.pathname,o)||d.nextLocation.pathname;return tu(m.pathname,z)!=null||tu(m.pathname,v)!=null}[...$g];const sm=A.createContext(),Hn=()=>{const s=A.useContext(sm);if(!s)throw new Error("useSave must be used within a SaveProvider");return s},m0=({children:s})=>{const[f,d]=A.useState("saved"),[o,m]=A.useState(null),[v,z]=A.useState(!0),[j,g]=A.useState({});A.useEffect(()=>{(()=>{try{const B=localStorage.getItem("lightOnYourStep_saveData");if(B){const X=JSON.parse(B);g(X),m(new Date(X.timestamp||Date.now()))}}catch(B){console.error("Erro ao carregar dados salvos:",B)}})()},[]);const h=A.useCallback(T=>{try{d("saving");const B={...T,timestamp:Date.now(),version:"1.0"};return localStorage.setItem("lightOnYourStep_saveData",JSON.stringify(B)),sessionStorage.setItem("lightOnYourStep_backup",JSON.stringify(B)),g(B),m(new Date),d("saved"),setTimeout(()=>{console.log("Dados salvos no servidor:",B)},100),!0}catch(B){return console.error("Erro ao salvar:",B),d("error"),!1}},[]);A.useEffect(()=>{if(!v)return;const T=setInterval(()=>{Object.keys(j).length>0&&h(j)},12e4);return()=>clearInterval(T)},[v,j,h]),A.useEffect(()=>{let T;const B=()=>{clearTimeout(T),T=setTimeout(()=>{Object.keys(j).length>0&&h(j)},3e4)},X=()=>{B()},$=["mousedown","mousemove","keypress","scroll","touchstart"];return $.forEach(J=>{document.addEventListener(J,X,!0)}),B(),()=>{clearTimeout(T),$.forEach(J=>{document.removeEventListener(J,X,!0)})}},[j,h]),A.useEffect(()=>{const T=B=>{Object.keys(j).length>0&&h(j)};return window.addEventListener("beforeunload",T),()=>{window.removeEventListener("beforeunload",T)}},[j,h]);const R=A.useCallback((T,B)=>{g(X=>({...X,[T]:B}))},[]),q=A.useCallback(()=>h(j),[j,h]),D=A.useCallback(()=>{try{const T=sessionStorage.getItem("lightOnYourStep_backup");if(T){const B=JSON.parse(T);return g(B),m(new Date(B.timestamp)),!0}return!1}catch(T){return console.error("Erro ao restaurar backup:",T),!1}},[]),k=A.useCallback(()=>{localStorage.removeItem("lightOnYourStep_saveData"),sessionStorage.removeItem("lightOnYourStep_backup"),g({}),m(null),d("saved")},[]),w=A.useCallback(()=>{try{const T=JSON.stringify(j,null,2),B=new Blob([T],{type:"application/json"}),X=URL.createObjectURL(B),$=document.createElement("a");return $.href=X,$.download=`light-on-your-step-backup-${new Date().toISOString().split("T")[0]}.json`,document.body.appendChild($),$.click(),document.body.removeChild($),URL.revokeObjectURL(X),!0}catch(T){return console.error("Erro ao exportar dados:",T),!1}},[j]),Y=A.useCallback(T=>new Promise((B,X)=>{const $=new FileReader;$.onload=J=>{try{const pe=JSON.parse(J.target.result);g(pe),h(pe),B(!0)}catch(pe){console.error("Erro ao importar dados:",pe),X(pe)}},$.onerror=()=>{X(new Error("Erro ao ler arquivo"))},$.readAsText(T)}),[h]),G={saveStatus:f,lastSaveTime:o,autoSaveEnabled:v,saveData:j,updateSaveData:R,manualSave:q,restoreBackup:D,clearSaveData:k,exportData:w,importData:Y,setAutoSaveEnabled:z,getSaveDataSize:()=>{try{return new Blob([JSON.stringify(j)]).size}catch{return 0}},getLastSaveTimeFormatted:()=>o?o.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"Nunca"};return u.jsx(sm.Provider,{value:G,children:s})},rm=A.createContext(),nu=()=>{const s=A.useContext(rm);if(!s)throw new Error("useStudy must be used within a StudyProvider");return s},h0=({children:s})=>{const{updateSaveData:f,saveData:d}=Hn(),[o,m]=A.useState(1),[v,z]=A.useState(0),[j,g]=A.useState({}),[h,R]=A.useState([]),[q,D]=A.useState([]),[k,w]=A.useState({}),Y=[{id:1,title:"Fundamentos",description:"Estabelecendo o diálogo",color:"#3498db",authors:["Erving Goffman","Talcott Parsons","Pierre Bourdieu"]},{id:2,title:"Aprofundamento",description:"Ordem vs. Conflito",color:"#27ae60",authors:["Friedrich Hayek","Michel Foucault","James Coleman"]},{id:3,title:"Complexificação",description:"Tradição vs. Mudança",color:"#f39c12",authors:["Michael Oakeshott","Norbert Elias","Samuel Huntington","Pierre Bourdieu"]},{id:4,title:"Especialização",description:"Estado vs. Sociedade",color:"#e74c3c",authors:["Robert Nozick","James C. Scott","Francis Fukuyama","Anthony Giddens"]},{id:5,title:"Modernidade",description:"Progresso vs. Tradição",color:"#9b59b6",authors:["Daniel Bell","Zygmunt Bauman","Roger Scruton"]},{id:6,title:"Integração",description:"Sínteses Contemporâneas",color:"#1abc9c",authors:["Bruno Latour","Steven Pinker","Pierre Bourdieu"]}],G=[{id:1,name:"Erving Goffman",years:"1922-1982",nationality:"Canadense-Americano",perspective:"neutral",mainWork:"A Representação do Eu na Vida Cotidiana",keyConcepts:["Dramaturgical Analysis","Front Stage vs Back Stage","Impression Management"],phase:1,description:"Sociólogo que desenvolveu a análise dramatúrgica da vida social.",amazonLink:"https://amazon.com/goffman-representation-self"},{id:2,name:"Talcott Parsons",years:"1902-1979",nationality:"Americano",perspective:"conservative",mainWork:"O Sistema Social",keyConcepts:["Funcionalismo Estrutural","Modelo AGIL","Valores Compartilhados"],phase:1,description:"Teórico do funcionalismo estrutural e da teoria da ação social.",amazonLink:"https://amazon.com/parsons-social-system"},{id:3,name:"Pierre Bourdieu",years:"1930-2002",nationality:"Francês",perspective:"critical",mainWork:"O Poder Simbólico",keyConcepts:["Habitus","Campo","Capital Simbólico","Violência Simbólica"],phase:1,description:"Sociólogo crítico que desenvolveu a teoria dos campos e do habitus.",amazonLink:"https://amazon.com/bourdieu-symbolic-power"},{id:4,name:"Friedrich Hayek",years:"1899-1992",nationality:"Austríaco",perspective:"conservative",mainWork:"Os Fundamentos da Liberdade",keyConcepts:["Ordem Espontânea","Conhecimento Disperso","Catallaxia"],phase:2,description:"Economista e filósofo, teórico da ordem espontânea e do liberalismo.",amazonLink:"https://amazon.com/hayek-constitution-liberty"},{id:5,name:"Michel Foucault",years:"1926-1984",nationality:"Francês",perspective:"critical",mainWork:"Microfísica do Poder",keyConcepts:["Microfísica do Poder","Disciplina","Biopolítica","Saber-Poder"],phase:2,description:"Filósofo que desenvolveu uma genealogia crítica das instituições modernas.",amazonLink:"https://amazon.com/foucault-microphysics-power"}];A.useEffect(()=>{d.studyProgress&&(m(d.studyProgress.currentPhase||1),z(d.studyProgress.completionPercentage||0),g(d.studyProgress.readingProgress||{}),R(d.studyProgress.completedAuthors||[]),D(d.studyProgress.bookmarks||[]),w(d.studyProgress.notes||{}))},[d]),A.useEffect(()=>{const ue={currentPhase:o,completionPercentage:v,readingProgress:j,completedAuthors:h,bookmarks:q,notes:k,lastUpdated:Date.now()};f("studyProgress",ue)},[o,v,j,h,q,k,f]);const T=ue=>{if(ue>=1&&ue<=6){m(ue);const ae=Math.round(ue/6*100);z(ae)}},B=(ue,ae)=>{g(M=>({...M,[ue]:{percentage:ae,timestamp:Date.now()}}))},X=ue=>{h.includes(ue)||R(ae=>[...ae,ue])},$=(ue,ae,M)=>{const L={id:Date.now(),contentId:ue,title:ae,url:M,timestamp:Date.now()};D(W=>[...W,L])},J=ue=>{D(ae=>ae.filter(M=>M.id!==ue))},pe=(ue,ae)=>{w(M=>({...M,[ue]:{text:ae,timestamp:Date.now()}}))},Ee=ue=>{w(ae=>{const M={...ae};return delete M[ue],M})},Te=()=>Y.find(ue=>ue.id===o),be=ue=>G.filter(ae=>ae.phase===ue),Ct={currentPhase:o,completionPercentage:v,readingProgress:j,completedAuthors:h,bookmarks:q,notes:k,phases:Y,authors:G,updatePhase:T,updateReadingProgress:B,markAuthorCompleted:X,addBookmark:$,removeBookmark:J,addNote:pe,removeNote:Ee,getCurrentPhaseData:Te,getAuthorsByPhase:be,getAuthorById:ue=>G.find(ae=>ae.id===ue),getProgressStats:()=>{const ue=G.length,ae=h.length,M=Y.length;return{authorsCompleted:ae,totalAuthors:ue,authorsPercentage:Math.round(ae/ue*100),phasesCompleted:o-1,totalPhases:M,phasesPercentage:Math.round((o-1)/M*100),overallProgress:v}},getRecommendedBooks:()=>be(o).map(ae=>({title:ae.mainWork,author:ae.name,amazonLink:ae.amazonLink}))};return u.jsx(rm.Provider,{value:Ct,children:s})},p0=()=>{const[s,f]=A.useState(!1),[d,o]=A.useState(!1),m=Pt(),{getCurrentPhaseData:v,getProgressStats:z}=nu();A.useEffect(()=>{const R=()=>{o(window.scrollY>50)};return window.addEventListener("scroll",R),()=>window.removeEventListener("scroll",R)},[]);const j=v(),g=z(),h=[{path:"/",label:"Início"},{path:"/estudo",label:"O Estudo"},{path:"/autores",label:"Autores"},{path:"/progresso",label:"Progresso"},{path:"/sobre",label:"Sobre"},{path:"/contato",label:"Contato"}];return u.jsxs("header",{className:`header ${d?"scrolled":""}`,children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"header-content",children:[u.jsx("div",{className:"logo",children:u.jsxs(Le,{to:"/",children:[u.jsx("h1",{children:"A Light on Your Step"}),u.jsx("p",{children:"Estudo Sociológico Dialógico"})]})}),u.jsxs("div",{className:"header-progress",children:[u.jsxs("div",{className:"phase-indicator",children:[u.jsx("span",{className:"phase-label",children:"Fase Atual:"}),u.jsx("span",{className:"phase-name",style:{color:j==null?void 0:j.color},children:j==null?void 0:j.title})]}),u.jsx("div",{className:"progress-mini",children:u.jsx("div",{className:"progress-mini-fill",style:{width:`${g.overallProgress}%`,backgroundColor:j==null?void 0:j.color}})}),u.jsxs("span",{className:"progress-text",children:[g.overallProgress,"%"]})]}),u.jsx("nav",{className:"desktop-nav",children:u.jsx("ul",{children:h.map(R=>u.jsx("li",{children:u.jsx(Le,{to:R.path,className:m.pathname===R.path?"active":"",children:R.label})},R.path))})}),u.jsxs("button",{className:"mobile-menu-toggle",onClick:()=>f(!s),"aria-label":"Toggle menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]})]}),u.jsxs("nav",{className:`mobile-nav ${s?"open":""}`,children:[u.jsx("ul",{children:h.map(R=>u.jsx("li",{children:u.jsx(Le,{to:R.path,className:m.pathname===R.path?"active":"",onClick:()=>f(!1),children:R.label})},R.path))}),u.jsxs("div",{className:"mobile-progress",children:[u.jsx("h4",{children:"Progresso do Estudo"}),u.jsxs("div",{className:"progress-stats",children:[u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-label",children:"Fase:"}),u.jsx("span",{className:"stat-value",children:j==null?void 0:j.title})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-label",children:"Progresso:"}),u.jsxs("span",{className:"stat-value",children:[g.overallProgress,"%"]})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-label",children:"Autores:"}),u.jsxs("span",{className:"stat-value",children:[g.authorsCompleted,"/",g.totalAuthors]})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .header {
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          color: white;
          padding: 1rem 0;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .header.scrolled {
          padding: 0.5rem 0;
          background: linear-gradient(135deg, rgba(26, 37, 47, 0.95) 0%, rgba(44, 62, 80, 0.95) 100%);
          backdrop-filter: blur(10px);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .logo a {
          text-decoration: none;
          color: white;
        }

        .logo h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.8rem;
          margin: 0;
          background: linear-gradient(45deg, #f39c12, #e74c3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .logo p {
          font-size: 0.9rem;
          margin: 0;
          opacity: 0.8;
          font-style: italic;
        }

        .header-progress {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          max-width: 400px;
        }

        .phase-indicator {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .phase-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .phase-name {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .progress-mini {
          flex: 1;
          height: 8px;
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-mini-fill {
          height: 100%;
          background: #3498db;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: 0.9rem;
          font-weight: bold;
          min-width: 40px;
        }

        .desktop-nav ul {
          display: flex;
          list-style: none;
          gap: 2rem;
          margin: 0;
          padding: 0;
        }

        .desktop-nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          transition: all 0.3s ease;
          position: relative;
        }

        .desktop-nav a:hover,
        .desktop-nav a.active {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .desktop-nav a.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 3px;
          background: #f39c12;
          border-radius: 2px;
        }

        .mobile-menu-toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-menu-toggle span {
          width: 25px;
          height: 3px;
          background: white;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .mobile-nav {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          border-top: 1px solid rgba(255,255,255,0.1);
          transform: translateY(-100%);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-nav.open {
          transform: translateY(0);
          opacity: 1;
        }

        .mobile-nav ul {
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .mobile-nav a {
          display: block;
          color: white;
          text-decoration: none;
          padding: 1rem 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transition: all 0.3s ease;
        }

        .mobile-nav a:hover,
        .mobile-nav a.active {
          background: rgba(255,255,255,0.1);
          padding-left: 2.5rem;
        }

        .mobile-progress {
          padding: 1.5rem 2rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .mobile-progress h4 {
          margin: 0 0 1rem 0;
          color: #f39c12;
        }

        .progress-stats {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .stat {
          display: flex;
          justify-content: space-between;
        }

        .stat-label {
          opacity: 0.8;
        }

        .stat-value {
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .header-progress {
            display: none;
          }

          .desktop-nav {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-nav {
            display: block;
          }

          .logo h1 {
            font-size: 1.4rem;
          }

          .logo p {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 480px) {
          .header {
            padding: 0.8rem 0;
          }

          .logo h1 {
            font-size: 1.2rem;
          }

          .logo p {
            display: none;
          }
        }
      `})]})},g0=()=>{const{getLastSaveTimeFormatted:s,saveStatus:f}=Hn(),{getProgressStats:d}=nu(),o=d(),m=new Date().getFullYear();return u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"footer-monetization",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"ad-placeholder",children:[u.jsx("p",{children:"📢 Espaço para Google AdSense - Banner Rodapé"}),u.jsx("small",{children:"Anúncios relacionados a educação e livros acadêmicos"})]})})}),u.jsx("div",{className:"footer-content",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"📚 A Light on Your Step"}),u.jsx("p",{children:"Um estudo sociológico dialógico que explora o diálogo entre perspectivas críticas e conservadoras através de 20 autores fundamentais em 6 fases progressivas."}),u.jsxs("div",{className:"footer-stats",children:[u.jsxs("div",{className:"footer-stat",children:[u.jsx("span",{className:"stat-number",children:o.authorsCompleted}),u.jsx("span",{className:"stat-label",children:"Autores Estudados"})]}),u.jsxs("div",{className:"footer-stat",children:[u.jsxs("span",{className:"stat-number",children:[o.overallProgress,"%"]}),u.jsx("span",{className:"stat-label",children:"Progresso Total"})]})]})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"🔗 Links Rápidos"}),u.jsxs("ul",{className:"footer-links",children:[u.jsx("li",{children:u.jsx(Le,{to:"/",children:"Início"})}),u.jsx("li",{children:u.jsx(Le,{to:"/estudo",children:"O Estudo"})}),u.jsx("li",{children:u.jsx(Le,{to:"/autores",children:"Autores"})}),u.jsx("li",{children:u.jsx(Le,{to:"/progresso",children:"Progresso"})}),u.jsx("li",{children:u.jsx(Le,{to:"/sobre",children:"Sobre"})}),u.jsx("li",{children:u.jsx(Le,{to:"/contato",children:"Contato"})})]})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"🗺️ Fases do Estudo"}),u.jsxs("ul",{className:"footer-phases",children:[u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#3498db"}}),"Fundamentos"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#27ae60"}}),"Aprofundamento"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#f39c12"}}),"Complexificação"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#e74c3c"}}),"Especialização"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#9b59b6"}}),"Modernidade"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#1abc9c"}}),"Integração"]})]})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"📧 Mantenha-se Atualizado"}),u.jsx("p",{children:"Receba análises sociológicas exclusivas"}),u.jsxs("form",{className:"footer-newsletter",children:[u.jsx("input",{type:"email",placeholder:"Seu email"}),u.jsx("button",{type:"submit",children:"Inscrever"})]}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",title:"Facebook",children:"📘"}),u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",title:"Twitter",children:"🐦"}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:"💼"}),u.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:"📷"})]})]})]})})}),u.jsx("div",{className:"footer-books",children:u.jsxs("div",{className:"container",children:[u.jsx("h4",{children:"📖 Livros Recomendados"}),u.jsxs("div",{className:"books-carousel",children:[u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📚"}),u.jsxs("div",{className:"book-details",children:[u.jsx("strong",{children:"A Representação do Eu"}),u.jsx("small",{children:"Erving Goffman"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]}),u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📚"}),u.jsxs("div",{className:"book-details",children:[u.jsx("strong",{children:"O Poder Simbólico"}),u.jsx("small",{children:"Pierre Bourdieu"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]}),u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📚"}),u.jsxs("div",{className:"book-details",children:[u.jsx("strong",{children:"Os Fundamentos da Liberdade"}),u.jsx("small",{children:"Friedrich Hayek"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]}),u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📚"}),u.jsxs("div",{className:"book-details",children:[u.jsx("strong",{children:"Microfísica do Poder"}),u.jsx("small",{children:"Michel Foucault"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]})]}),u.jsx("div",{className:"affiliate-disclaimer",children:u.jsx("small",{children:"ℹ️ Links de afiliados: Este site pode receber comissões por compras realizadas através dos links acima."})})]})}),u.jsx("div",{className:"footer-bottom",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-bottom-content",children:[u.jsxs("div",{className:"footer-info",children:[u.jsxs("p",{children:["© ",m," A Light on Your Step. Todos os direitos reservados."]}),u.jsx("p",{children:"Estudo sociológico dialógico desenvolvido com 💙 para o avanço do conhecimento."})]}),u.jsxs("div",{className:"footer-save-status",children:[u.jsxs("div",{className:"save-info",children:[u.jsx("span",{className:"save-label",children:"Status do Save:"}),u.jsxs("span",{className:`save-status ${f}`,children:[f==="saved"&&"✅ Salvo",f==="saving"&&"💾 Salvando...",f==="error"&&"❌ Erro"]})]}),u.jsx("div",{className:"last-save",children:u.jsxs("small",{children:["Último save: ",s()]})})]}),u.jsxs("div",{className:"footer-legal",children:[u.jsx(Le,{to:"/privacidade",children:"Política de Privacidade"}),u.jsx(Le,{to:"/termos",children:"Termos de Uso"}),u.jsx(Le,{to:"/cookies",children:"Política de Cookies"})]})]})})}),u.jsx("style",{jsx:!0,children:`
        .footer {
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          color: white;
          margin-top: 4rem;
        }

        .footer-monetization {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-content {
          padding: 3rem 0;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
        }

        .footer-section h4 {
          margin-bottom: 1.5rem;
          color: #f39c12;
          font-size: 1.2rem;
        }

        .footer-section p {
          line-height: 1.6;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .footer-stats {
          display: flex;
          gap: 2rem;
        }

        .footer-stat {
          text-align: center;
        }

        .footer-stat .stat-number {
          display: block;
          font-size: 1.8rem;
          font-weight: bold;
          color: #3498db;
        }

        .footer-stat .stat-label {
          font-size: 0.8rem;
          opacity: 0.8;
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
          opacity: 0.8;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-links a:hover {
          opacity: 1;
          color: #3498db;
          padding-left: 0.5rem;
        }

        .footer-phases {
          list-style: none;
          padding: 0;
        }

        .footer-phases li {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          margin-bottom: 0.8rem;
          opacity: 0.9;
        }

        .phase-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .footer-newsletter {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .footer-newsletter input {
          flex: 1;
          padding: 0.8rem;
          border: none;
          border-radius: 5px;
          font-size: 0.9rem;
        }

        .footer-newsletter button {
          padding: 0.8rem 1.5rem;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-weight: 600;
          transition: background 0.3s ease;
        }

        .footer-newsletter button:hover {
          background: #2980b9;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          text-decoration: none;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #3498db;
          transform: translateY(-3px);
        }

        .footer-books {
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .footer-books h4 {
          text-align: center;
          margin-bottom: 2rem;
          color: #f39c12;
        }

        .books-carousel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .book-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255,255,255,0.05);
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .book-item:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-2px);
        }

        .book-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .book-details {
          flex: 1;
        }

        .book-details strong {
          display: block;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .book-details small {
          display: block;
          opacity: 0.8;
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .book-link {
          color: #3498db;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 600;
          transition: color 0.3s ease;
        }

        .book-link:hover {
          color: #f39c12;
        }

        .footer-bottom {
          padding: 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          background: rgba(0,0,0,0.2);
        }

        .footer-bottom-content {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 2rem;
          align-items: center;
        }

        .footer-info p {
          margin: 0;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .footer-save-status {
          text-align: center;
          padding: 1rem;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
        }

        .save-info {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-bottom: 0.3rem;
        }

        .save-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .save-status {
          font-weight: 600;
          font-size: 0.9rem;
        }

        .save-status.saved {
          color: #27ae60;
        }

        .save-status.saving {
          color: #f39c12;
        }

        .save-status.error {
          color: #e74c3c;
        }

        .last-save {
          font-size: 0.8rem;
          opacity: 0.7;
        }

        .footer-legal {
          display: flex;
          gap: 1rem;
          justify-content: flex-end;
          flex-wrap: wrap;
        }

        .footer-legal a {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.8;
          transition: all 0.3s ease;
        }

        .footer-legal a:hover {
          opacity: 1;
          color: #3498db;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-stats {
            justify-content: center;
          }

          .footer-newsletter {
            flex-direction: column;
          }

          .books-carousel {
            grid-template-columns: 1fr;
          }

          .footer-bottom-content {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            text-align: center;
          }

          .footer-legal {
            justify-content: center;
          }

          .footer-save-status {
            order: -1;
          }
        }

        @media (max-width: 480px) {
          .footer-content {
            padding: 2rem 0;
          }

          .footer-books {
            padding: 1.5rem 0;
          }

          .book-item {
            flex-direction: column;
            text-align: center;
          }

          .footer-legal {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `})]})},v0=()=>{const{getCurrentPhaseData:s,getProgressStats:f,getRecommendedBooks:d}=nu(),{updateSaveData:o}=Hn(),[m,v]=A.useState(""),[z,j]=A.useState(""),g=s(),h=f(),R=d();A.useEffect(()=>{o("lastVisitedPage",{page:"home",timestamp:Date.now()})},[o]);const q=D=>{D.preventDefault(),j("loading"),setTimeout(()=>{j("success"),v(""),o("newsletterSubscription",{email:m,timestamp:Date.now(),source:"homepage"})},1e3)};return u.jsxs("div",{className:"homepage",children:[u.jsx("section",{className:"hero",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-text",children:[u.jsx("h1",{className:"hero-title",children:"A Light on Your Step"}),u.jsx("p",{className:"hero-subtitle",children:"Um Estudo Sociológico Dialógico"}),u.jsx("p",{className:"hero-description",children:"Explore o fascinante diálogo entre perspectivas críticas e conservadoras do pensamento sociológico através de 20 autores fundamentais, organizados em 6 fases progressivas de conhecimento."}),u.jsxs("div",{className:"hero-stats",children:[u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"20"}),u.jsx("span",{className:"stat-label",children:"Autores"})]}),u.jsxs("div",{className:"stat",children:[u.jsx("span",{className:"stat-number",children:"6"}),u.jsx("span",{className:"stat-label",children:"Fases"})]}),u.jsxs("div",{className:"stat",children:[u.jsxs("span",{className:"stat-number",children:[h.overallProgress,"%"]}),u.jsx("span",{className:"stat-label",children:"Seu Progresso"})]})]}),u.jsxs("div",{className:"hero-actions",children:[u.jsx(Le,{to:"/estudo",className:"btn btn-primary",children:"🚀 Começar o Estudo"}),u.jsx(Le,{to:"/progresso",className:"btn btn-secondary",children:"📊 Ver Progresso"})]})]}),u.jsx("div",{className:"hero-visual",children:u.jsx("div",{className:"phase-circle",style:{borderColor:g==null?void 0:g.color},children:u.jsxs("div",{className:"phase-content",children:[u.jsxs("span",{className:"phase-number",children:["Fase ",g==null?void 0:g.id]}),u.jsx("span",{className:"phase-title",children:g==null?void 0:g.title}),u.jsx("span",{className:"phase-description",children:g==null?void 0:g.description})]})})})]})})}),u.jsx("section",{className:"monetization-area",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"ad-placeholder",children:[u.jsx("p",{children:"📢 Espaço para Google AdSense - Banner Superior"}),u.jsx("small",{children:"Anúncios relacionados a livros acadêmicos e educação"})]})})}),u.jsx("section",{className:"current-phase",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"🎯 Sua Fase Atual"}),u.jsx("p",{children:"Continue seu progresso no estudo sociológico dialógico"})]}),u.jsx("div",{className:"phase-card",style:{borderTopColor:g==null?void 0:g.color},children:u.jsxs("div",{className:"phase-info",children:[u.jsx("h3",{children:g==null?void 0:g.title}),u.jsx("p",{children:g==null?void 0:g.description}),u.jsxs("div",{className:"phase-progress",children:[u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${h.overallProgress}%`,backgroundColor:g==null?void 0:g.color}})}),u.jsxs("span",{className:"progress-text",children:[h.overallProgress,"% concluído"]})]}),u.jsxs("div",{className:"phase-authors",children:[u.jsx("h4",{children:"Autores desta fase:"}),u.jsx("div",{className:"authors-list",children:g==null?void 0:g.authors.map((D,k)=>u.jsx("span",{className:"author-tag",children:D},k))})]}),u.jsx(Le,{to:"/estudo",className:"btn btn-primary",children:"Continuar Estudo"})]})})]})}),u.jsx("section",{className:"study-overview",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"grid grid-2",children:[u.jsxs("div",{className:"overview-content",children:[u.jsx("h2",{children:"📚 Sobre o Estudo"}),u.jsx("p",{children:'"A Light on Your Step" é um estudo sociológico inovador que apresenta um diálogo estruturado entre diferentes tradições do pensamento social.'}),u.jsxs("div",{className:"methodology",children:[u.jsx("h3",{children:"Metodologia Dialógica"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Perspectivas Contrastantes:"})," Críticas vs. Conservadoras"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Progressão Estruturada:"})," 6 fases de complexidade crescente"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Síntese Criativa:"})," Integração de diferentes visões"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Aplicação Prática:"})," Relevância para questões contemporâneas"]})]})]}),u.jsx(Le,{to:"/sobre",className:"btn btn-secondary",children:"Saiba Mais"})]}),u.jsxs("div",{className:"phases-preview",children:[u.jsx("h3",{children:"🗺️ Fases do Estudo"}),u.jsx("div",{className:"phases-list",children:[1,2,3,4,5,6].map(D=>{const k={1:{title:"Fundamentos",color:"#3498db"},2:{title:"Aprofundamento",color:"#27ae60"},3:{title:"Complexificação",color:"#f39c12"},4:{title:"Especialização",color:"#e74c3c"},5:{title:"Modernidade",color:"#9b59b6"},6:{title:"Integração",color:"#1abc9c"}}[D],w=D<(g==null?void 0:g.id),Y=D===(g==null?void 0:g.id);return u.jsxs("div",{className:`phase-item ${w?"completed":""} ${Y?"current":""}`,style:{borderLeftColor:k.color},children:[u.jsxs("span",{className:"phase-number",children:["Fase ",D]}),u.jsx("span",{className:"phase-name",children:k.title}),w&&u.jsx("span",{className:"phase-status",children:"✅"}),Y&&u.jsx("span",{className:"phase-status",children:"🔄"})]},D)})})]})]})})}),u.jsx("section",{className:"recommended-books",children:u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"section-header",children:[u.jsx("h2",{children:"📖 Livros Recomendados"}),u.jsx("p",{children:"Obras fundamentais para aprofundar seu conhecimento na fase atual"})]}),u.jsx("div",{className:"books-grid",children:R.slice(0,3).map((D,k)=>u.jsxs("div",{className:"book-card",children:[u.jsx("div",{className:"book-cover",children:"📚"}),u.jsxs("div",{className:"book-info",children:[u.jsx("h4",{children:D.title}),u.jsxs("p",{children:["Por ",D.author]}),u.jsx("a",{href:D.amazonLink,className:"btn btn-small btn-primary",target:"_blank",rel:"noopener noreferrer",onClick:()=>{o("affiliateClick",{book:D.title,author:D.author,timestamp:Date.now(),source:"homepage"})},children:"Ver na Amazon"})]})]},k))}),u.jsx("div",{className:"affiliate-disclaimer",children:u.jsx("small",{children:"ℹ️ Este site contém links de afiliados. Podemos receber uma comissão por compras feitas através destes links, sem custo adicional para você."})})]})}),u.jsx("section",{className:"newsletter-signup",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"newsletter-content",children:[u.jsx("h2",{children:"📧 Receba Análises Exclusivas"}),u.jsx("p",{children:"Inscreva-se para receber insights sociológicos, atualizações do estudo e recomendações de leitura diretamente no seu email."}),u.jsxs("form",{className:"newsletter-form",onSubmit:q,children:[u.jsx("input",{type:"email",placeholder:"Seu melhor email",value:m,onChange:D=>v(D.target.value),required:!0,disabled:z==="loading"}),u.jsx("button",{type:"submit",disabled:z==="loading",children:z==="loading"?"Inscrevendo...":"Inscrever-se"})]}),z==="success"&&u.jsx("div",{className:"newsletter-success",children:"✅ Inscrição realizada com sucesso! Verifique seu email."}),u.jsxs("div",{className:"newsletter-benefits",children:[u.jsxs("div",{className:"benefit",children:[u.jsx("span",{className:"benefit-icon",children:"🎯"}),u.jsx("span",{children:"Análises sociológicas semanais"})]}),u.jsxs("div",{className:"benefit",children:[u.jsx("span",{className:"benefit-icon",children:"📚"}),u.jsx("span",{children:"Recomendações de livros"})]}),u.jsxs("div",{className:"benefit",children:[u.jsx("span",{className:"benefit-icon",children:"🔄"}),u.jsx("span",{children:"Atualizações do estudo"})]})]})]})})}),u.jsx("section",{className:"social-section",children:u.jsxs("div",{className:"container",children:[u.jsx("h3",{children:"📢 Compartilhe o Conhecimento"}),u.jsxs("div",{className:"social-share",children:[u.jsx("a",{href:"https://www.facebook.com/sharer/sharer.php?u=https://alightonyourstep.com",className:"facebook",target:"_blank",rel:"noopener noreferrer",children:"📘 Facebook"}),u.jsx("a",{href:"https://twitter.com/intent/tweet?url=https://alightonyourstep.com&text=Descobri um estudo sociológico fascinante!",className:"twitter",target:"_blank",rel:"noopener noreferrer",children:"🐦 Twitter"}),u.jsx("a",{href:"https://www.linkedin.com/sharing/share-offsite/?url=https://alightonyourstep.com",className:"linkedin",target:"_blank",rel:"noopener noreferrer",children:"💼 LinkedIn"}),u.jsx("a",{href:"https://wa.me/?text=Confira este estudo sociológico: https://alightonyourstep.com",className:"whatsapp",target:"_blank",rel:"noopener noreferrer",children:"💬 WhatsApp"})]})]})}),u.jsx("style",{jsx:!0,children:`
        .homepage {
          padding-top: 100px;
        }

        .hero {
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          color: white;
          padding: 4rem 0;
          margin-bottom: 2rem;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 4rem;
          align-items: center;
        }

        .hero-title {
          font-size: 3.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #f39c12, #e74c3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          font-style: italic;
        }

        .hero-description {
          font-size: 1.2rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .hero-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .stat {
          text-align: center;
        }

        .stat-number {
          display: block;
          font-size: 2.5rem;
          font-weight: bold;
          color: #f39c12;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .phase-circle {
          width: 250px;
          height: 250px;
          border: 4px solid #3498db;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
        }

        .phase-content {
          text-align: center;
          padding: 2rem;
        }

        .phase-number {
          display: block;
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: #f39c12;
        }

        .phase-title {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }

        .phase-description {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .current-phase {
          padding: 3rem 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .phase-card {
          background: white;
          border-radius: 15px;
          padding: 3rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-top: 5px solid #3498db;
        }

        .phase-info h3 {
          font-size: 2rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .phase-progress {
          margin: 2rem 0;
        }

        .progress-text {
          display: block;
          margin-top: 0.5rem;
          font-weight: 600;
          color: #7f8c8d;
        }

        .phase-authors {
          margin: 2rem 0;
        }

        .phase-authors h4 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .authors-list {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .author-tag {
          background: #ecf0f1;
          color: #2c3e50;
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .study-overview {
          padding: 4rem 0;
          background: #f8f9fa;
        }

        .methodology ul {
          list-style: none;
          padding: 0;
        }

        .methodology li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #ecf0f1;
        }

        .phases-preview h3 {
          margin-bottom: 2rem;
          color: #2c3e50;
        }

        .phases-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .phase-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          border-left: 4px solid #ecf0f1;
          transition: all 0.3s ease;
        }

        .phase-item.completed {
          background: #d5f4e6;
        }

        .phase-item.current {
          background: #fff3cd;
          border-left-width: 6px;
        }

        .phase-number {
          font-weight: bold;
          color: #7f8c8d;
          min-width: 60px;
        }

        .phase-name {
          flex: 1;
          font-weight: 600;
        }

        .phase-status {
          font-size: 1.2rem;
        }

        .recommended-books {
          padding: 4rem 0;
        }

        .books-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .book-card {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .book-card:hover {
          transform: translateY(-5px);
        }

        .book-cover {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .book-info h4 {
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .book-info p {
          color: #7f8c8d;
          margin-bottom: 1.5rem;
        }

        .affiliate-disclaimer {
          text-align: center;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e9ecef;
        }

        .newsletter-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-content h2 {
          color: white;
          margin-bottom: 1rem;
        }

        .newsletter-content p {
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .newsletter-success {
          background: rgba(39, 174, 96, 0.2);
          color: white;
          padding: 1rem;
          border-radius: 8px;
          margin-top: 1rem;
          font-weight: 600;
        }

        .newsletter-benefits {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }

        .benefit {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          opacity: 0.9;
        }

        .benefit-icon {
          font-size: 1.2rem;
        }

        .social-section {
          padding: 3rem 0;
          background: #f8f9fa;
          text-align: center;
        }

        .social-section h3 {
          margin-bottom: 2rem;
          color: #2c3e50;
        }

        @media (max-width: 768px) {
          .hero-content {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-stats {
            justify-content: center;
          }

          .hero-actions {
            justify-content: center;
            flex-wrap: wrap;
          }

          .phase-circle {
            width: 200px;
            height: 200px;
          }

          .phase-card {
            padding: 2rem;
          }

          .newsletter-benefits {
            flex-direction: column;
            align-items: center;
          }
        }
      `})]})},y0=()=>{var w,Y,G;const{phases:s,currentPhase:f,updatePhase:d,getCurrentPhaseData:o,getAuthorsByPhase:m,getProgressStats:v}=nu(),{updateSaveData:z}=Hn(),[j,g]=A.useState(f),[h,R]=A.useState(0),q=o(),D=v();A.useEffect(()=>{z("lastVisitedPage",{page:"study",timestamp:Date.now()})},[z]),A.useEffect(()=>{const T=()=>{const B=window.pageYOffset,X=document.documentElement.scrollHeight-window.innerHeight,$=B/X*100;R(Math.min(100,Math.max(0,$)))};return window.addEventListener("scroll",T),()=>window.removeEventListener("scroll",T)},[]);const k=T=>{g(T),d(T),z("phaseChange",{fromPhase:f,toPhase:T,timestamp:Date.now()})};return u.jsxs("div",{className:"study-page",children:[u.jsx("div",{className:"reading-progress-bar",children:u.jsx("div",{className:"reading-progress-fill",style:{width:`${h}%`}})}),u.jsx("section",{className:"study-hero",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"hero-content",children:[u.jsx("h1",{children:"📚 O Estudo Sociológico Dialógico"}),u.jsx("p",{className:"hero-subtitle",children:"Uma jornada através do pensamento sociológico contemporâneo"}),u.jsxs("div",{className:"study-stats",children:[u.jsxs("div",{className:"stat-card",children:[u.jsxs("span",{className:"stat-number",children:[D.overallProgress,"%"]}),u.jsx("span",{className:"stat-label",children:"Progresso Total"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("span",{className:"stat-number",children:[D.authorsCompleted,"/",D.totalAuthors]}),u.jsx("span",{className:"stat-label",children:"Autores Estudados"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsxs("span",{className:"stat-number",children:[f,"/6"]}),u.jsx("span",{className:"stat-label",children:"Fase Atual"})]})]})]})})}),u.jsx("section",{className:"monetization-area",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"ad-placeholder",children:[u.jsx("p",{children:"📢 Google AdSense - Anúncios Educacionais"}),u.jsx("small",{children:"Livros de sociologia, cursos online, materiais acadêmicos"})]})})}),u.jsx("section",{className:"phase-selector",children:u.jsxs("div",{className:"container",children:[u.jsx("h2",{children:"🗺️ Navegue pelas Fases do Estudo"}),u.jsx("div",{className:"phases-grid",children:s.map(T=>{const B=T.id<f,X=T.id===f,$=T.id===j;return u.jsxs("div",{className:`phase-card ${B?"completed":""} ${X?"current":""} ${$?"selected":""}`,onClick:()=>k(T.id),style:{borderTopColor:T.color},children:[u.jsxs("div",{className:"phase-header",children:[u.jsxs("span",{className:"phase-number",children:["Fase ",T.id]}),u.jsxs("span",{className:"phase-status",children:[B&&"✅",X&&"🔄",T.id>f&&"🔒"]})]}),u.jsx("h3",{style:{color:T.color},children:T.title}),u.jsx("p",{children:T.description}),u.jsx("div",{className:"phase-authors",children:u.jsxs("small",{children:[T.authors.length," autores"]})})]},T.id)})})]})}),u.jsx("section",{className:"phase-content",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"content-grid",children:[u.jsx("div",{className:"main-content",children:u.jsxs("div",{className:"phase-detail",style:{borderLeftColor:(w=s.find(T=>T.id===j))==null?void 0:w.color},children:[u.jsxs("h2",{children:["Fase ",j,": ",(Y=s.find(T=>T.id===j))==null?void 0:Y.title]}),u.jsx("p",{className:"phase-description",children:(G=s.find(T=>T.id===j))==null?void 0:G.description}),j===1&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"🏛️ Fundamentos do Pensamento Sociológico"}),u.jsx("p",{children:"Nesta primeira fase, estabelecemos as bases do diálogo sociológico através de três perspectivas fundamentais que moldam nossa compreensão da sociedade."}),u.jsxs("div",{className:"key-concepts",children:[u.jsx("h4",{children:"Conceitos-chave:"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Interação Social:"})," Como os indivíduos se relacionam em sociedade"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Estrutura vs. Agência:"})," O eterno debate sociológico"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Ordem Social:"})," Como a sociedade se mantém coesa"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Poder Simbólico:"})," Formas sutis de dominação"]})]})]}),u.jsxs("div",{className:"dialogue-preview",children:[u.jsx("h4",{children:"🤝 Diálogo Central:"}),u.jsxs("div",{className:"dialogue-comparison",children:[u.jsxs("div",{className:"perspective conservative",children:[u.jsx("h5",{children:"Perspectiva Conservadora"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Talcott Parsons"})," enfatiza a importância da ordem e estabilidade social através de valores compartilhados."]})]}),u.jsxs("div",{className:"perspective critical",children:[u.jsx("h5",{children:"Perspectiva Crítica"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Pierre Bourdieu"})," revela como o poder simbólico perpetua desigualdades de forma sutil."]})]})]}),u.jsxs("div",{className:"synthesis",children:[u.jsx("h5",{children:"Síntese Dialógica"}),u.jsxs("p",{children:[u.jsx("strong",{children:"Erving Goffman"})," oferece uma perspectiva intermediária, focando na performance social cotidiana."]})]})]})]}),j===2&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"⚖️ Ordem vs. Conflito"}),u.jsx("p",{children:"A segunda fase aprofunda o debate fundamental entre visões que privilegiam a ordem social e aquelas que enfatizam o conflito como motor da mudança."}),u.jsxs("div",{className:"key-concepts",children:[u.jsx("h4",{children:"Conceitos-chave:"}),u.jsxs("ul",{children:[u.jsxs("li",{children:[u.jsx("strong",{children:"Ordem Espontânea:"})," Organização social sem planejamento central"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Microfísica do Poder:"})," Poder capilar e disciplinar"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Capital Social:"})," Redes e relações como recursos"]}),u.jsxs("li",{children:[u.jsx("strong",{children:"Governamentalidade:"})," Novas formas de controle social"]})]})]})]}),j===3&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"🔄 Tradição vs. Mudança"}),u.jsx("p",{children:"Esta fase explora a tensão entre a preservação de tradições e a necessidade de adaptação às transformações sociais."})]}),j===4&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"🏛️ Estado vs. Sociedade"}),u.jsx("p",{children:"Análise das relações complexas entre instituições estatais e organizações da sociedade civil."})]}),j===5&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"🚀 Progresso vs. Tradição"}),u.jsx("p",{children:"Exame crítico das narrativas de progresso e modernização versus a valorização de tradições estabelecidas."})]}),j===6&&u.jsxs("div",{className:"phase-content-detail",children:[u.jsx("h3",{children:"🔗 Sínteses Contemporâneas"}),u.jsx("p",{children:"Integração final dos debates anteriores através de perspectivas sociológicas contemporâneas que buscam sínteses criativas."})]}),u.jsxs("div",{className:"phase-authors-detail",children:[u.jsx("h4",{children:"👥 Autores desta Fase"}),u.jsx("div",{className:"authors-grid",children:m(j).map(T=>u.jsxs("div",{className:`author-card ${T.perspective}`,children:[u.jsxs("div",{className:"author-header",children:[u.jsx("h5",{children:T.name}),u.jsx("span",{className:"author-years",children:T.years})]}),u.jsx("p",{className:"author-work",children:T.mainWork}),u.jsx("div",{className:"author-concepts",children:T.keyConcepts.slice(0,2).map((B,X)=>u.jsx("span",{className:"concept-tag",children:B},X))}),u.jsxs("div",{className:"author-perspective",children:[T.perspective==="conservative"&&"🔵 Conservadora",T.perspective==="critical"&&"🔴 Crítica",T.perspective==="neutral"&&"⚪ Síntese"]})]},T.id))})]})]})}),u.jsxs("div",{className:"sidebar",children:[u.jsxs("div",{className:"widget progress-widget",children:[u.jsx("h4",{children:"📊 Seu Progresso"}),u.jsxs("div",{className:"progress-circle",children:[u.jsxs("svg",{width:"120",height:"120",children:[u.jsx("circle",{cx:"60",cy:"60",r:"50",stroke:"#ecf0f1",strokeWidth:"8",fill:"none"}),u.jsx("circle",{cx:"60",cy:"60",r:"50",stroke:(q==null?void 0:q.color)||"#3498db",strokeWidth:"8",fill:"none",strokeDasharray:`${D.overallProgress/100*314} 314`,strokeLinecap:"round",transform:"rotate(-90 60 60)"})]}),u.jsxs("div",{className:"progress-text",children:[u.jsxs("span",{className:"progress-number",children:[D.overallProgress,"%"]}),u.jsx("span",{className:"progress-label",children:"Concluído"})]})]})]}),u.jsxs("div",{className:"widget books-widget",children:[u.jsx("h4",{children:"📚 Livros Recomendados"}),u.jsxs("div",{className:"recommended-books",children:[u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📖"}),u.jsxs("div",{className:"book-info",children:[u.jsx("strong",{children:"A Representação do Eu"}),u.jsx("small",{children:"Erving Goffman"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]}),u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📖"}),u.jsxs("div",{className:"book-info",children:[u.jsx("strong",{children:"O Sistema Social"}),u.jsx("small",{children:"Talcott Parsons"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]}),u.jsxs("div",{className:"book-item",children:[u.jsx("span",{className:"book-icon",children:"📖"}),u.jsxs("div",{className:"book-info",children:[u.jsx("strong",{children:"O Poder Simbólico"}),u.jsx("small",{children:"Pierre Bourdieu"}),u.jsx("a",{href:"#",className:"book-link",children:"Ver na Amazon"})]})]})]}),u.jsx("div",{className:"affiliate-note",children:u.jsx("small",{children:"💡 Links de afiliados - Apoie o projeto"})})]}),u.jsxs("div",{className:"widget newsletter-widget",children:[u.jsx("h4",{children:"📧 Newsletter"}),u.jsx("p",{children:"Receba análises sociológicas exclusivas"}),u.jsxs("form",{className:"sidebar-newsletter",children:[u.jsx("input",{type:"email",placeholder:"Seu email"}),u.jsx("button",{type:"submit",children:"Inscrever"})]})]})]})]})})}),u.jsx("style",{jsx:!0,children:`
        .study-page {
          padding-top: 100px;
        }

        .reading-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: rgba(255,255,255,0.2);
          z-index: 1001;
        }

        .reading-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3498db, #27ae60);
          transition: width 0.3s ease;
        }

        .study-hero {
          background: linear-gradient(135deg, #1a252f 0%, #2c3e50 100%);
          color: white;
          padding: 3rem 0;
          margin-bottom: 2rem;
        }

        .hero-content {
          text-align: center;
        }

        .hero-content h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #f39c12, #e74c3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          opacity: 0.9;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .study-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .stat-card {
          background: rgba(255,255,255,0.1);
          padding: 1.5rem;
          border-radius: 10px;
          text-align: center;
          backdrop-filter: blur(10px);
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: bold;
          color: #f39c12;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
        }

        .phase-selector {
          padding: 3rem 0;
        }

        .phase-selector h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .phase-card {
          background: white;
          border-radius: 10px;
          padding: 2rem;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          border-top: 4px solid #ecf0f1;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .phase-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .phase-card.completed {
          background: #d5f4e6;
          border-top-color: #27ae60;
        }

        .phase-card.current {
          background: #fff3cd;
          border-top-width: 6px;
        }

        .phase-card.selected {
          background: #e3f2fd;
          border-top-width: 6px;
          transform: translateY(-5px);
        }

        .phase-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .phase-number {
          font-weight: bold;
          color: #7f8c8d;
        }

        .phase-status {
          font-size: 1.2rem;
        }

        .phase-card h3 {
          margin-bottom: 1rem;
        }

        .phase-authors {
          margin-top: 1rem;
          text-align: right;
        }

        .phase-authors small {
          color: #7f8c8d;
          font-style: italic;
        }

        .phase-content {
          padding: 3rem 0;
          background: #f8f9fa;
        }

        .content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 3rem;
        }

        .phase-detail {
          background: white;
          padding: 3rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 5px solid #3498db;
        }

        .phase-detail h2 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .phase-description {
          font-size: 1.2rem;
          color: #7f8c8d;
          margin-bottom: 2rem;
          font-style: italic;
        }

        .key-concepts {
          margin: 2rem 0;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 10px;
        }

        .key-concepts h4 {
          color: #2c3e50;
          margin-bottom: 1rem;
        }

        .key-concepts ul {
          list-style: none;
          padding: 0;
        }

        .key-concepts li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #ecf0f1;
        }

        .dialogue-preview {
          margin: 3rem 0;
        }

        .dialogue-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .perspective {
          padding: 1.5rem;
          border-radius: 10px;
          border-left: 4px solid;
        }

        .perspective.conservative {
          background: #fef9e7;
          border-left-color: #f39c12;
        }

        .perspective.critical {
          background: #fdf2f2;
          border-left-color: #e74c3c;
        }

        .perspective h5 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .synthesis {
          padding: 1.5rem;
          background: #e8f5e8;
          border-radius: 10px;
          border-left: 4px solid #27ae60;
        }

        .synthesis h5 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .authors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          margin-top: 2rem;
        }

        .author-card {
          background: white;
          padding: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          border-left: 4px solid #ecf0f1;
        }

        .author-card.conservative {
          border-left-color: #f39c12;
        }

        .author-card.critical {
          border-left-color: #e74c3c;
        }

        .author-card.neutral {
          border-left-color: #3498db;
        }

        .author-header {
          margin-bottom: 1rem;
        }

        .author-header h5 {
          margin: 0;
          color: #2c3e50;
        }

        .author-years {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .author-work {
          font-style: italic;
          color: #7f8c8d;
          margin-bottom: 1rem;
        }

        .concept-tag {
          display: inline-block;
          background: #ecf0f1;
          color: #2c3e50;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          margin: 0.2rem 0.2rem 0.2rem 0;
        }

        .author-perspective {
          margin-top: 1rem;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .widget {
          background: white;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
          margin-bottom: 2rem;
        }

        .widget h4 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }

        .progress-circle {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .progress-text {
          position: absolute;
          text-align: center;
        }

        .progress-number {
          display: block;
          font-size: 1.5rem;
          font-weight: bold;
          color: #2c3e50;
        }

        .progress-label {
          font-size: 0.8rem;
          color: #7f8c8d;
        }

        .book-item {
          display: flex;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .book-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .book-info {
          flex: 1;
        }

        .book-info strong {
          display: block;
          margin-bottom: 0.3rem;
          color: #2c3e50;
        }

        .book-info small {
          display: block;
          color: #7f8c8d;
          margin-bottom: 0.5rem;
        }

        .book-link {
          color: #3498db;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .book-link:hover {
          color: #2980b9;
        }

        .affiliate-note {
          text-align: center;
          margin-top: 1rem;
          padding: 0.5rem;
          background: #fff3cd;
          border-radius: 5px;
        }

        .sidebar-newsletter {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .sidebar-newsletter input {
          padding: 0.8rem;
          border: 1px solid #ddd;
          border-radius: 5px;
        }

        .sidebar-newsletter button {
          padding: 0.8rem;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          cursor: pointer;
        }

        .sidebar-newsletter button:hover {
          background: #2980b9;
        }

        @media (max-width: 768px) {
          .hero-content h1 {
            font-size: 2rem;
          }

          .study-stats {
            flex-direction: column;
            align-items: center;
          }

          .phases-grid {
            grid-template-columns: 1fr;
          }

          .content-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .dialogue-comparison {
            grid-template-columns: 1fr;
          }

          .authors-grid {
            grid-template-columns: 1fr;
          }

          .phase-detail {
            padding: 2rem;
          }
        }
      `})]})},b0=()=>u.jsx("div",{className:"authors-page",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"👥 Autores do Estudo"}),u.jsx("p",{children:"Página em desenvolvimento..."})]})}),x0=()=>u.jsx("div",{className:"progress-page",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"📊 Progresso do Estudo"}),u.jsx("p",{children:"Página em desenvolvimento..."})]})}),S0=()=>u.jsx("div",{className:"post-page",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"📝 Post"}),u.jsx("p",{children:"Página em desenvolvimento..."})]})}),j0=()=>u.jsx("div",{className:"about-page",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"ℹ️ Sobre o Projeto"}),u.jsx("p",{children:"Página em desenvolvimento..."})]})}),E0=()=>u.jsx("div",{className:"contact-page",children:u.jsxs("div",{className:"container",children:[u.jsx("h1",{children:"📞 Contato"}),u.jsx("p",{children:"Página em desenvolvimento..."})]})}),N0=()=>{const{saveStatus:s,lastSaveTime:f,getLastSaveTimeFormatted:d,manualSave:o,autoSaveEnabled:m,setAutoSaveEnabled:v,getSaveDataSize:z,exportData:j,clearSaveData:g}=Hn(),[h,R]=A.useState(!1),[q,D]=A.useState(!1);A.useEffect(()=>{if(s==="saved"){D(!0);const T=setTimeout(()=>D(!1),2e3);return()=>clearTimeout(T)}},[s]);const k=()=>{switch(s){case"saving":return"💾";case"saved":return"✅";case"error":return"❌";default:return"💾"}},w=()=>{switch(s){case"saving":return"Salvando...";case"saved":return"Salvo";case"error":return"Erro ao salvar";default:return"Aguardando"}},Y=()=>{switch(s){case"saving":return"#f39c12";case"saved":return"#27ae60";case"error":return"#e74c3c";default:return"#95a5a6"}},G=T=>{if(T===0)return"0 B";const B=1024,X=["B","KB","MB"],$=Math.floor(Math.log(T)/Math.log(B));return parseFloat((T/Math.pow(B,$)).toFixed(1))+" "+X[$]};return u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:`save-indicator ${q?"animate":""}`,onClick:()=>R(!h),title:"Clique para ver detalhes do save",children:[u.jsxs("div",{className:"save-status",children:[u.jsx("span",{className:"save-icon",children:k()}),u.jsx("span",{className:"save-text",children:w()})]}),f&&u.jsx("div",{className:"save-time",children:d()})]}),h&&u.jsxs("div",{className:"save-details-panel",children:[u.jsxs("div",{className:"save-details-header",children:[u.jsx("h4",{children:"💾 Sistema de Save Automático"}),u.jsx("button",{className:"close-btn",onClick:()=>R(!1),children:"✕"})]}),u.jsxs("div",{className:"save-details-content",children:[u.jsxs("div",{className:"detail-section",children:[u.jsx("h5",{children:"Status Atual"}),u.jsxs("div",{className:"status-info",children:[u.jsx("span",{className:"status-dot",style:{backgroundColor:Y()}}),u.jsx("span",{children:w()}),f&&u.jsxs("span",{className:"last-save",children:["Último save: ",d()]})]})]}),u.jsxs("div",{className:"detail-section",children:[u.jsx("h5",{children:"Configurações"}),u.jsxs("div",{className:"setting-item",children:[u.jsxs("label",{children:[u.jsx("input",{type:"checkbox",checked:m,onChange:T=>v(T.target.checked)}),"Auto-save ativo"]}),u.jsx("small",{children:"Salva automaticamente a cada 2 minutos"})]})]}),u.jsxs("div",{className:"detail-section",children:[u.jsx("h5",{children:"Estatísticas"}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Tamanho dos dados:"}),u.jsx("span",{className:"stat-value",children:G(z())})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Save automático:"}),u.jsx("span",{className:"stat-value",children:m?"Ativo":"Inativo"})]})]})]}),u.jsxs("div",{className:"detail-section",children:[u.jsx("h5",{children:"Ações"}),u.jsxs("div",{className:"action-buttons",children:[u.jsx("button",{className:"btn btn-small btn-primary",onClick:o,disabled:s==="saving",children:"💾 Salvar Agora"}),u.jsx("button",{className:"btn btn-small btn-secondary",onClick:j,children:"📥 Exportar Dados"}),u.jsx("button",{className:"btn btn-small btn-danger",onClick:()=>{window.confirm("Tem certeza que deseja limpar todos os dados salvos?")&&(g(),R(!1))},children:"🗑️ Limpar Dados"})]})]}),u.jsxs("div",{className:"detail-section",children:[u.jsx("h5",{children:"Como Funciona"}),u.jsxs("div",{className:"info-list",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-icon",children:"⏰"}),u.jsx("span",{children:"Auto-save a cada 2 minutos"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-icon",children:"😴"}),u.jsx("span",{children:"Save por inatividade (30s)"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-icon",children:"🚪"}),u.jsx("span",{children:"Save ao sair da página"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("span",{className:"info-icon",children:"💾"}),u.jsx("span",{children:"Backup local no navegador"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .save-indicator {
          position: fixed;
          top: 100px;
          right: 20px;
          background: white;
          border-radius: 10px;
          padding: 0.8rem 1rem;
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 999;
          border: 2px solid ${Y()};
          min-width: 120px;
        }

        .save-indicator:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        }

        .save-indicator.animate {
          animation: saveSuccess 0.6s ease-out;
        }

        .save-status {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: ${Y()};
        }

        .save-icon {
          font-size: 1.2rem;
        }

        .save-text {
          font-size: 0.9rem;
        }

        .save-time {
          font-size: 0.8rem;
          color: #7f8c8d;
          margin-top: 0.3rem;
          text-align: center;
        }

        .save-details-panel {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          z-index: 1001;
          width: 90%;
          max-width: 500px;
          max-height: 80vh;
          overflow-y: auto;
        }

        .save-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          border-bottom: 1px solid #ecf0f1;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px 15px 0 0;
        }

        .save-details-header h4 {
          margin: 0;
          color: #2c3e50;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #7f8c8d;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #ecf0f1;
          color: #2c3e50;
        }

        .save-details-content {
          padding: 1.5rem;
        }

        .detail-section {
          margin-bottom: 2rem;
        }

        .detail-section h5 {
          margin: 0 0 1rem 0;
          color: #2c3e50;
          font-size: 1rem;
          border-bottom: 2px solid #3498db;
          padding-bottom: 0.5rem;
        }

        .status-info {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .status-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .last-save {
          font-size: 0.9rem;
          color: #7f8c8d;
        }

        .setting-item {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .setting-item label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 500;
        }

        .setting-item small {
          color: #7f8c8d;
          margin-left: 1.5rem;
        }

        .stats-grid {
          display: grid;
          gap: 0.8rem;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 5px;
        }

        .stat-label {
          color: #7f8c8d;
        }

        .stat-value {
          font-weight: 600;
          color: #2c3e50;
        }

        .action-buttons {
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
        }

        .btn-danger {
          background: linear-gradient(45deg, #e74c3c, #c0392b);
        }

        .btn-danger:hover {
          background: linear-gradient(45deg, #c0392b, #e74c3c);
        }

        .info-list {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .info-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.5rem;
          background: #f8f9fa;
          border-radius: 5px;
        }

        .info-icon {
          font-size: 1.2rem;
          width: 24px;
          text-align: center;
        }

        @keyframes saveSuccess {
          0% {
            transform: scale(1);
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 8px 30px rgba(39, 174, 96, 0.4);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 5px 20px rgba(0,0,0,0.15);
          }
        }

        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .save-indicator {
            top: 80px;
            right: 10px;
            padding: 0.6rem 0.8rem;
            min-width: 100px;
          }

          .save-details-panel {
            width: 95%;
            max-height: 85vh;
          }

          .save-details-content {
            padding: 1rem;
          }

          .action-buttons {
            flex-direction: column;
          }

          .action-buttons .btn {
            width: 100%;
          }
        }
      `})]})},A0=()=>{const{pathname:s}=Pt();return A.useEffect(()=>{window.scrollTo({top:0,left:0,behavior:"smooth"})},[s]),null};function T0(){const[s,f]=A.useState(!0);return A.useEffect(()=>{const d=setTimeout(()=>{f(!1)},1e3);return()=>clearTimeout(d)},[]),s?u.jsx("div",{className:"loading-screen",children:u.jsxs("div",{className:"loading-content",children:[u.jsxs("div",{className:"loading-logo",children:[u.jsx("h1",{children:"A Light on Your Step"}),u.jsx("p",{children:"Carregando estudo sociológico..."})]}),u.jsx("div",{className:"loading-spinner",children:u.jsx("div",{className:"spinner"})})]})}):u.jsx(m0,{children:u.jsx(h0,{children:u.jsx(l0,{children:u.jsxs("div",{className:"App",children:[u.jsx(A0,{}),u.jsx(N0,{}),u.jsx(p0,{}),u.jsx("main",{className:"main-content",children:u.jsxs(Cg,{children:[u.jsx(Na,{path:"/",element:u.jsx(v0,{})}),u.jsx(Na,{path:"/estudo",element:u.jsx(y0,{})}),u.jsx(Na,{path:"/autores",element:u.jsx(b0,{})}),u.jsx(Na,{path:"/progresso",element:u.jsx(x0,{})}),u.jsx(Na,{path:"/post/:id",element:u.jsx(S0,{})}),u.jsx(Na,{path:"/sobre",element:u.jsx(j0,{})}),u.jsx(Na,{path:"/contato",element:u.jsx(E0,{})})]})}),u.jsx(g0,{})]})})})})}Lp.createRoot(document.getElementById("root")).render(u.jsx(A.StrictMode,{children:u.jsx(T0,{})}));
