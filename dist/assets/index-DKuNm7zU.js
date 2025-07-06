(function(){const f=document.createElement("link").relList;if(f&&f.supports&&f.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const y of d)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&o(E)}).observe(document,{childList:!0,subtree:!0});function m(d){const y={};return d.integrity&&(y.integrity=d.integrity),d.referrerPolicy&&(y.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?y.credentials="include":d.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function o(d){if(d.ep)return;d.ep=!0;const y=m(d);fetch(d.href,y)}})();var yr={exports:{}},Rn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rd;function Rp(){if(Rd)return Rn;Rd=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.fragment");function m(o,d,y){var E=null;if(y!==void 0&&(E=""+y),d.key!==void 0&&(E=""+d.key),"key"in d){y={};for(var D in d)D!=="key"&&(y[D]=d[D])}else y=d;return d=y.ref,{$$typeof:r,type:o,key:E,ref:d!==void 0?d:null,props:y}}return Rn.Fragment=f,Rn.jsx=m,Rn.jsxs=m,Rn}var Od;function Op(){return Od||(Od=1,yr.exports=Rp()),yr.exports}var u=Op(),xr={exports:{}},te={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Md;function Mp(){if(Md)return te;Md=1;var r=Symbol.for("react.transitional.element"),f=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),y=Symbol.for("react.consumer"),E=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),H=Symbol.iterator;function _(v){return v===null||typeof v!="object"?null:(v=H&&v[H]||v["@@iterator"],typeof v=="function"?v:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,G={};function V(v,U,L){this.props=v,this.context=U,this.refs=G,this.updater=L||Q}V.prototype.isReactComponent={},V.prototype.setState=function(v,U){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,U,"setState")},V.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function w(){}w.prototype=V.prototype;function Z(v,U,L){this.props=v,this.context=U,this.refs=G,this.updater=L||Q}var P=Z.prototype=new w;P.constructor=Z,q(P,V.prototype),P.isPureReactComponent=!0;var ce=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},Me=Object.prototype.hasOwnProperty;function Ne(v,U,L,B,k,re){return L=re.ref,{$$typeof:r,type:v,key:U,ref:L!==void 0?L:null,props:re}}function Te(v,U){return Ne(v.type,U,void 0,void 0,void 0,v.props)}function xe(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function ke(v){var U={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(L){return U[L]})}var ft=/\/+/g;function Xe(v,U){return typeof v=="object"&&v!==null&&v.key!=null?ke(""+v.key):U.toString(36)}function ja(){}function Ea(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(ja,ja):(v.status="pending",v.then(function(U){v.status==="pending"&&(v.status="fulfilled",v.value=U)},function(U){v.status==="pending"&&(v.status="rejected",v.reason=U)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function Qe(v,U,L,B,k){var re=typeof v;(re==="undefined"||re==="boolean")&&(v=null);var ee=!1;if(v===null)ee=!0;else switch(re){case"bigint":case"string":case"number":ee=!0;break;case"object":switch(v.$$typeof){case r:case f:ee=!0;break;case z:return ee=v._init,Qe(ee(v._payload),U,L,B,k)}}if(ee)return k=k(v),ee=B===""?"."+Xe(v,0):B,ce(k)?(L="",ee!=null&&(L=ee.replace(ft,"$&/")+"/"),Qe(k,U,L,"",function(Wt){return Wt})):k!=null&&(xe(k)&&(k=Te(k,L+(k.key==null||v&&v.key===k.key?"":(""+k.key).replace(ft,"$&/")+"/")+ee)),U.push(k)),1;ee=0;var tt=B===""?".":B+":";if(ce(v))for(var be=0;be<v.length;be++)B=v[be],re=tt+Xe(B,be),ee+=Qe(B,U,L,re,k);else if(be=_(v),typeof be=="function")for(v=be.call(v),be=0;!(B=v.next()).done;)B=B.value,re=tt+Xe(B,be++),ee+=Qe(B,U,L,re,k);else if(re==="object"){if(typeof v.then=="function")return Qe(Ea(v),U,L,B,k);throw U=String(v),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return ee}function R(v,U,L){if(v==null)return v;var B=[],k=0;return Qe(v,B,"","",function(re){return U.call(L,re,k++)}),B}function Y(v){if(v._status===-1){var U=v._result;U=U(),U.then(function(L){(v._status===0||v._status===-1)&&(v._status=1,v._result=L)},function(L){(v._status===0||v._status===-1)&&(v._status=2,v._result=L)}),v._status===-1&&(v._status=0,v._result=U)}if(v._status===1)return v._result.default;throw v._result}var W=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function ve(){}return te.Children={map:R,forEach:function(v,U,L){R(v,function(){U.apply(this,arguments)},L)},count:function(v){var U=0;return R(v,function(){U++}),U},toArray:function(v){return R(v,function(U){return U})||[]},only:function(v){if(!xe(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},te.Component=V,te.Fragment=m,te.Profiler=d,te.PureComponent=Z,te.StrictMode=o,te.Suspense=b,te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,te.__COMPILER_RUNTIME={__proto__:null,c:function(v){return I.H.useMemoCache(v)}},te.cache=function(v){return function(){return v.apply(null,arguments)}},te.cloneElement=function(v,U,L){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var B=q({},v.props),k=v.key,re=void 0;if(U!=null)for(ee in U.ref!==void 0&&(re=void 0),U.key!==void 0&&(k=""+U.key),U)!Me.call(U,ee)||ee==="key"||ee==="__self"||ee==="__source"||ee==="ref"&&U.ref===void 0||(B[ee]=U[ee]);var ee=arguments.length-2;if(ee===1)B.children=L;else if(1<ee){for(var tt=Array(ee),be=0;be<ee;be++)tt[be]=arguments[be+2];B.children=tt}return Ne(v.type,k,void 0,void 0,re,B)},te.createContext=function(v){return v={$$typeof:E,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:y,_context:v},v},te.createElement=function(v,U,L){var B,k={},re=null;if(U!=null)for(B in U.key!==void 0&&(re=""+U.key),U)Me.call(U,B)&&B!=="key"&&B!=="__self"&&B!=="__source"&&(k[B]=U[B]);var ee=arguments.length-2;if(ee===1)k.children=L;else if(1<ee){for(var tt=Array(ee),be=0;be<ee;be++)tt[be]=arguments[be+2];k.children=tt}if(v&&v.defaultProps)for(B in ee=v.defaultProps,ee)k[B]===void 0&&(k[B]=ee[B]);return Ne(v,re,void 0,void 0,null,k)},te.createRef=function(){return{current:null}},te.forwardRef=function(v){return{$$typeof:D,render:v}},te.isValidElement=xe,te.lazy=function(v){return{$$typeof:z,_payload:{_status:-1,_result:v},_init:Y}},te.memo=function(v,U){return{$$typeof:p,type:v,compare:U===void 0?null:U}},te.startTransition=function(v){var U=I.T,L={};I.T=L;try{var B=v(),k=I.S;k!==null&&k(L,B),typeof B=="object"&&B!==null&&typeof B.then=="function"&&B.then(ve,W)}catch(re){W(re)}finally{I.T=U}},te.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},te.use=function(v){return I.H.use(v)},te.useActionState=function(v,U,L){return I.H.useActionState(v,U,L)},te.useCallback=function(v,U){return I.H.useCallback(v,U)},te.useContext=function(v){return I.H.useContext(v)},te.useDebugValue=function(){},te.useDeferredValue=function(v,U){return I.H.useDeferredValue(v,U)},te.useEffect=function(v,U,L){var B=I.H;if(typeof L=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return B.useEffect(v,U)},te.useId=function(){return I.H.useId()},te.useImperativeHandle=function(v,U,L){return I.H.useImperativeHandle(v,U,L)},te.useInsertionEffect=function(v,U){return I.H.useInsertionEffect(v,U)},te.useLayoutEffect=function(v,U){return I.H.useLayoutEffect(v,U)},te.useMemo=function(v,U){return I.H.useMemo(v,U)},te.useOptimistic=function(v,U){return I.H.useOptimistic(v,U)},te.useReducer=function(v,U,L){return I.H.useReducer(v,U,L)},te.useRef=function(v){return I.H.useRef(v)},te.useState=function(v){return I.H.useState(v)},te.useSyncExternalStore=function(v,U,L){return I.H.useSyncExternalStore(v,U,L)},te.useTransition=function(){return I.H.useTransition()},te.version="19.1.0",te}var Dd;function Rr(){return Dd||(Dd=1,xr.exports=Mp()),xr.exports}var M=Rr(),br={exports:{}},On={},Sr={exports:{}},jr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Dp(){return Cd||(Cd=1,function(r){function f(R,Y){var W=R.length;R.push(Y);e:for(;0<W;){var ve=W-1>>>1,v=R[ve];if(0<d(v,Y))R[ve]=Y,R[W]=v,W=ve;else break e}}function m(R){return R.length===0?null:R[0]}function o(R){if(R.length===0)return null;var Y=R[0],W=R.pop();if(W!==Y){R[0]=W;e:for(var ve=0,v=R.length,U=v>>>1;ve<U;){var L=2*(ve+1)-1,B=R[L],k=L+1,re=R[k];if(0>d(B,W))k<v&&0>d(re,B)?(R[ve]=re,R[k]=W,ve=k):(R[ve]=B,R[L]=W,ve=L);else if(k<v&&0>d(re,W))R[ve]=re,R[k]=W,ve=k;else break e}}return Y}function d(R,Y){var W=R.sortIndex-Y.sortIndex;return W!==0?W:R.id-Y.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var y=performance;r.unstable_now=function(){return y.now()}}else{var E=Date,D=E.now();r.unstable_now=function(){return E.now()-D}}var b=[],p=[],z=1,H=null,_=3,Q=!1,q=!1,G=!1,V=!1,w=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function ce(R){for(var Y=m(p);Y!==null;){if(Y.callback===null)o(p);else if(Y.startTime<=R)o(p),Y.sortIndex=Y.expirationTime,f(b,Y);else break;Y=m(p)}}function I(R){if(G=!1,ce(R),!q)if(m(b)!==null)q=!0,Me||(Me=!0,Xe());else{var Y=m(p);Y!==null&&Qe(I,Y.startTime-R)}}var Me=!1,Ne=-1,Te=5,xe=-1;function ke(){return V?!0:!(r.unstable_now()-xe<Te)}function ft(){if(V=!1,Me){var R=r.unstable_now();xe=R;var Y=!0;try{e:{q=!1,G&&(G=!1,Z(Ne),Ne=-1),Q=!0;var W=_;try{t:{for(ce(R),H=m(b);H!==null&&!(H.expirationTime>R&&ke());){var ve=H.callback;if(typeof ve=="function"){H.callback=null,_=H.priorityLevel;var v=ve(H.expirationTime<=R);if(R=r.unstable_now(),typeof v=="function"){H.callback=v,ce(R),Y=!0;break t}H===m(b)&&o(b),ce(R)}else o(b);H=m(b)}if(H!==null)Y=!0;else{var U=m(p);U!==null&&Qe(I,U.startTime-R),Y=!1}}break e}finally{H=null,_=W,Q=!1}Y=void 0}}finally{Y?Xe():Me=!1}}}var Xe;if(typeof P=="function")Xe=function(){P(ft)};else if(typeof MessageChannel<"u"){var ja=new MessageChannel,Ea=ja.port2;ja.port1.onmessage=ft,Xe=function(){Ea.postMessage(null)}}else Xe=function(){w(ft,0)};function Qe(R,Y){Ne=w(function(){R(r.unstable_now())},Y)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(R){R.callback=null},r.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Te=0<R?Math.floor(1e3/R):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(R){switch(_){case 1:case 2:case 3:var Y=3;break;default:Y=_}var W=_;_=Y;try{return R()}finally{_=W}},r.unstable_requestPaint=function(){V=!0},r.unstable_runWithPriority=function(R,Y){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var W=_;_=R;try{return Y()}finally{_=W}},r.unstable_scheduleCallback=function(R,Y,W){var ve=r.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?ve+W:ve):W=ve,R){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=W+v,R={id:z++,callback:Y,priorityLevel:R,startTime:W,expirationTime:v,sortIndex:-1},W>ve?(R.sortIndex=W,f(p,R),m(b)===null&&R===m(p)&&(G?(Z(Ne),Ne=-1):G=!0,Qe(I,W-ve))):(R.sortIndex=v,f(b,R),q||Q||(q=!0,Me||(Me=!0,Xe()))),R},r.unstable_shouldYield=ke,r.unstable_wrapCallback=function(R){var Y=_;return function(){var W=_;_=Y;try{return R.apply(this,arguments)}finally{_=W}}}}(jr)),jr}var _d;function Cp(){return _d||(_d=1,Sr.exports=Dp()),Sr.exports}var Er={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ud;function _p(){if(Ud)return Ke;Ud=1;var r=Rr();function f(b){var p="https://react.dev/errors/"+b;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var z=2;z<arguments.length;z++)p+="&args[]="+encodeURIComponent(arguments[z])}return"Minified React error #"+b+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function m(){}var o={d:{f:m,r:function(){throw Error(f(522))},D:m,C:m,L:m,m,X:m,S:m,M:m},p:0,findDOMNode:null},d=Symbol.for("react.portal");function y(b,p,z){var H=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:H==null?null:""+H,children:b,containerInfo:p,implementation:z}}var E=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function D(b,p){if(b==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Ke.createPortal=function(b,p){var z=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(f(299));return y(b,p,null,z)},Ke.flushSync=function(b){var p=E.T,z=o.p;try{if(E.T=null,o.p=2,b)return b()}finally{E.T=p,o.p=z,o.d.f()}},Ke.preconnect=function(b,p){typeof b=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,o.d.C(b,p))},Ke.prefetchDNS=function(b){typeof b=="string"&&o.d.D(b)},Ke.preinit=function(b,p){if(typeof b=="string"&&p&&typeof p.as=="string"){var z=p.as,H=D(z,p.crossOrigin),_=typeof p.integrity=="string"?p.integrity:void 0,Q=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;z==="style"?o.d.S(b,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:H,integrity:_,fetchPriority:Q}):z==="script"&&o.d.X(b,{crossOrigin:H,integrity:_,fetchPriority:Q,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Ke.preinitModule=function(b,p){if(typeof b=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var z=D(p.as,p.crossOrigin);o.d.M(b,{crossOrigin:z,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&o.d.M(b)},Ke.preload=function(b,p){if(typeof b=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var z=p.as,H=D(z,p.crossOrigin);o.d.L(b,z,{crossOrigin:H,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Ke.preloadModule=function(b,p){if(typeof b=="string")if(p){var z=D(p.as,p.crossOrigin);o.d.m(b,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:z,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else o.d.m(b)},Ke.requestFormReset=function(b){o.d.r(b)},Ke.unstable_batchedUpdates=function(b,p){return b(p)},Ke.useFormState=function(b,p,z){return E.H.useFormState(b,p,z)},Ke.useFormStatus=function(){return E.H.useHostTransitionStatus()},Ke.version="19.1.0",Ke}var qd;function Up(){if(qd)return Er.exports;qd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),Er.exports=_p(),Er.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hd;function qp(){if(Hd)return On;Hd=1;var r=Cp(),f=Rr(),m=Up();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function y(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function E(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function D(e){if(y(e)!==e)throw Error(o(188))}function b(e){var t=e.alternate;if(!t){if(t=y(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var n=a.return;if(n===null)break;var i=n.alternate;if(i===null){if(l=n.return,l!==null){a=l;continue}break}if(n.child===i.child){for(i=n.child;i;){if(i===a)return D(n),e;if(i===l)return D(n),t;i=i.sibling}throw Error(o(188))}if(a.return!==l.return)a=n,l=i;else{for(var c=!1,s=n.child;s;){if(s===a){c=!0,a=n,l=i;break}if(s===l){c=!0,l=n,a=i;break}s=s.sibling}if(!c){for(s=i.child;s;){if(s===a){c=!0,a=i,l=n;break}if(s===l){c=!0,l=i,a=n;break}s=s.sibling}if(!c)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,H=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),Q=Symbol.for("react.portal"),q=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),V=Symbol.for("react.profiler"),w=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),P=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),xe=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),ft=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=ft&&e[ft]||e["@@iterator"],typeof e=="function"?e:null)}var ja=Symbol.for("react.client.reference");function Ea(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ja?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case q:return"Fragment";case V:return"Profiler";case G:return"StrictMode";case I:return"Suspense";case Me:return"SuspenseList";case xe:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Q:return"Portal";case P:return(e.displayName||"Context")+".Provider";case Z:return(e._context.displayName||"Context")+".Consumer";case ce:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}var Qe=Array.isArray,R=f.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=m.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},ve=[],v=-1;function U(e){return{current:e}}function L(e){0>v||(e.current=ve[v],ve[v]=null,v--)}function B(e,t){v++,ve[v]=e.current,e.current=t}var k=U(null),re=U(null),ee=U(null),tt=U(null);function be(e,t){switch(B(ee,t),B(re,e),B(k,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ad(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ad(t),e=ld(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}L(k),B(k,e)}function Wt(){L(k),L(re),L(ee)}function lu(e){e.memoizedState!==null&&B(tt,e);var t=k.current,a=ld(t,e.type);t!==a&&(B(re,e),B(k,a))}function Hn(e){re.current===e&&(L(k),L(re)),tt.current===e&&(L(tt),En._currentValue=W)}var nu=Object.prototype.hasOwnProperty,iu=r.unstable_scheduleCallback,uu=r.unstable_cancelCallback,um=r.unstable_shouldYield,cm=r.unstable_requestPaint,Nt=r.unstable_now,rm=r.unstable_getCurrentPriorityLevel,Ur=r.unstable_ImmediatePriority,qr=r.unstable_UserBlockingPriority,wn=r.unstable_NormalPriority,sm=r.unstable_LowPriority,Hr=r.unstable_IdlePriority,om=r.log,fm=r.unstable_setDisableYieldValue,Ml=null,at=null;function Ft(e){if(typeof om=="function"&&fm(e),at&&typeof at.setStrictMode=="function")try{at.setStrictMode(Ml,e)}catch{}}var lt=Math.clz32?Math.clz32:hm,dm=Math.log,mm=Math.LN2;function hm(e){return e>>>=0,e===0?32:31-(dm(e)/mm|0)|0}var Bn=256,Yn=4194304;function Na(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ln(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var n=0,i=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var s=l&134217727;return s!==0?(l=s&~i,l!==0?n=Na(l):(c&=s,c!==0?n=Na(c):a||(a=s&~e,a!==0&&(n=Na(a))))):(s=l&~i,s!==0?n=Na(s):c!==0?n=Na(c):a||(a=l&~e,a!==0&&(n=Na(a)))),n===0?0:t!==0&&t!==n&&(t&i)===0&&(i=n&-n,a=t&-t,i>=a||i===32&&(a&4194048)!==0)?t:n}function Dl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pm(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wr(){var e=Bn;return Bn<<=1,(Bn&4194048)===0&&(Bn=256),e}function Br(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function cu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Cl(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vm(e,t,a,l,n,i){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,h=e.expirationTimes,j=e.hiddenUpdates;for(a=c&~a;0<a;){var T=31-lt(a),C=1<<T;s[T]=0,h[T]=-1;var N=j[T];if(N!==null)for(j[T]=null,T=0;T<N.length;T++){var A=N[T];A!==null&&(A.lane&=-536870913)}a&=~C}l!==0&&Yr(e,l,0),i!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=i&~(c&~t))}function Yr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-lt(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&4194090}function Lr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-lt(a),n=1<<l;n&t|e[l]&t&&(e[l]|=t),a&=~n}}function ru(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function su(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gr(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:jd(e.type))}function gm(e,t){var a=Y.p;try{return Y.p=e,t()}finally{Y.p=a}}var Pt=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Pt,$e="__reactProps$"+Pt,Qa="__reactContainer$"+Pt,ou="__reactEvents$"+Pt,ym="__reactListeners$"+Pt,xm="__reactHandles$"+Pt,Xr="__reactResources$"+Pt,_l="__reactMarker$"+Pt;function fu(e){delete e[Ze],delete e[$e],delete e[ou],delete e[ym],delete e[xm]}function Za(e){var t=e[Ze];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Qa]||a[Ze]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=cd(e);e!==null;){if(a=e[Ze])return a;e=cd(e)}return t}e=a,a=e.parentNode}return null}function Va(e){if(e=e[Ze]||e[Qa]){var t=e.tag;if(t===5||t===6||t===13||t===26||t===27||t===3)return e}return null}function Ul(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Ka(e){var t=e[Xr];return t||(t=e[Xr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function qe(e){e[_l]=!0}var Qr=new Set,Zr={};function Aa(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(Zr[e]=t,e=0;e<t.length;e++)Qr.add(t[e])}var bm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vr={},Kr={};function Sm(e){return nu.call(Kr,e)?!0:nu.call(Vr,e)?!1:bm.test(e)?Kr[e]=!0:(Vr[e]=!0,!1)}function Gn(e,t,a){if(Sm(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Xn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Ct(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}var du,kr;function Ja(e){if(du===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);du=t&&t[1]||"",kr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+du+e+kr}var mu=!1;function hu(e,t){if(!e||mu)return"";mu=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var N=A}Reflect.construct(e,[],C)}else{try{C.call()}catch(A){N=A}e.call(C.prototype)}}else{try{throw Error()}catch(A){N=A}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&N&&typeof A.stack=="string")return[A.stack,N.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),c=i[0],s=i[1];if(c&&s){var h=c.split(`
`),j=s.split(`
`);for(n=l=0;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;for(;n<j.length&&!j[n].includes("DetermineComponentFrameRoot");)n++;if(l===h.length||n===j.length)for(l=h.length-1,n=j.length-1;1<=l&&0<=n&&h[l]!==j[n];)n--;for(;1<=l&&0<=n;l--,n--)if(h[l]!==j[n]){if(l!==1||n!==1)do if(l--,n--,0>n||h[l]!==j[n]){var T=`
`+h[l].replace(" at new "," at ");return e.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",e.displayName)),T}while(1<=l&&0<=n);break}}}finally{mu=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Ja(a):""}function jm(e){switch(e.tag){case 26:case 27:case 5:return Ja(e.type);case 16:return Ja("Lazy");case 13:return Ja("Suspense");case 19:return Ja("SuspenseList");case 0:case 15:return hu(e.type,!1);case 11:return hu(e.type.render,!1);case 1:return hu(e.type,!0);case 31:return Ja("Activity");default:return""}}function Jr(e){try{var t="";do t+=jm(e),e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function dt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $r(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Em(e){var t=$r(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var n=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(c){l=""+c,i.call(this,c)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(c){l=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Qn(e){e._valueTracker||(e._valueTracker=Em(e))}function Wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=$r(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function Zn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Nm=/[\n"\\]/g;function mt(e){return e.replace(Nm,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function pu(e,t,a,l,n,i,c,s){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),t!=null?c==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+dt(t)):e.value!==""+dt(t)&&(e.value=""+dt(t)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),t!=null?vu(e,c,dt(t)):a!=null?vu(e,c,dt(a)):l!=null&&e.removeAttribute("value"),n==null&&i!=null&&(e.defaultChecked=!!i),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+dt(s):e.removeAttribute("name")}function Fr(e,t,a,l,n,i,c,s){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||a!=null){if(!(i!=="submit"&&i!=="reset"||t!=null))return;a=a!=null?""+dt(a):"",t=t!=null?""+dt(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}l=l??n,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=s?e.checked:!!l,e.defaultChecked=!!l,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c)}function vu(e,t,a){t==="number"&&Zn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $a(e,t,a,l){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&l&&(e[a].defaultSelected=!0)}else{for(a=""+dt(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,l&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Pr(e,t,a){if(t!=null&&(t=""+dt(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+dt(a):""}function Ir(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Qe(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=dt(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l)}function Wa(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Am=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function es(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||Am.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ts(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var n in t)l=t[n],t.hasOwnProperty(n)&&a[n]!==l&&es(e,n,l)}else for(var i in t)t.hasOwnProperty(i)&&es(e,i,t[i])}function gu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zm=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vn(e){return Tm.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var yu=null;function xu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fa=null,Pa=null;function as(e){var t=Va(e);if(t&&(e=t.stateNode)){var a=e[$e]||null;e:switch(e=t.stateNode,t.type){case"input":if(pu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var n=l[$e]||null;if(!n)throw Error(o(90));pu(l,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Wr(l)}break e;case"textarea":Pr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$a(e,!!a.multiple,t,!1)}}}var bu=!1;function ls(e,t,a){if(bu)return e(t,a);bu=!0;try{var l=e(t);return l}finally{if(bu=!1,(Fa!==null||Pa!==null)&&(Mi(),Fa&&(t=Fa,e=Pa,Pa=Fa=null,as(t),e)))for(t=0;t<e.length;t++)as(e[t])}}function ql(e,t){var a=e.stateNode;if(a===null)return null;var l=a[$e]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var _t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Su=!1;if(_t)try{var Hl={};Object.defineProperty(Hl,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Hl,Hl),window.removeEventListener("test",Hl,Hl)}catch{Su=!1}var It=null,ju=null,Kn=null;function ns(){if(Kn)return Kn;var e,t=ju,a=t.length,l,n="value"in It?It.value:It.textContent,i=n.length;for(e=0;e<a&&t[e]===n[e];e++);var c=a-e;for(l=1;l<=c&&t[a-l]===n[i-l];l++);return Kn=n.slice(e,1<l?1-l:void 0)}function kn(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Jn(){return!0}function is(){return!1}function We(e){function t(a,l,n,i,c){this._reactName=a,this._targetInst=n,this.type=l,this.nativeEvent=i,this.target=c,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Jn:is,this.isPropagationStopped=is,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),t}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=We(za),wl=z({},za,{view:0,detail:0}),Rm=We(wl),Eu,Nu,Bl,Wn=z({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Bl&&(Bl&&e.type==="mousemove"?(Eu=e.screenX-Bl.screenX,Nu=e.screenY-Bl.screenY):Nu=Eu=0,Bl=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:Nu}}),us=We(Wn),Om=z({},Wn,{dataTransfer:0}),Mm=We(Om),Dm=z({},wl,{relatedTarget:0}),Au=We(Dm),Cm=z({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),_m=We(Cm),Um=z({},za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qm=We(Um),Hm=z({},za,{data:0}),cs=We(Hm),wm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ym={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ym[e])?!!t[e]:!1}function zu(){return Lm}var Gm=z({},wl,{key:function(e){if(e.key){var t=wm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Bm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(e){return e.type==="keypress"?kn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xm=We(Gm),Qm=z({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rs=We(Qm),Zm=z({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),Vm=We(Zm),Km=z({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),km=We(Km),Jm=z({},Wn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$m=We(Jm),Wm=z({},za,{newState:0,oldState:0}),Fm=We(Wm),Pm=[9,13,27,32],Tu=_t&&"CompositionEvent"in window,Yl=null;_t&&"documentMode"in document&&(Yl=document.documentMode);var Im=_t&&"TextEvent"in window&&!Yl,ss=_t&&(!Tu||Yl&&8<Yl&&11>=Yl),os=" ",fs=!1;function ds(e,t){switch(e){case"keyup":return Pm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ms(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ia=!1;function eh(e,t){switch(e){case"compositionend":return ms(t);case"keypress":return t.which!==32?null:(fs=!0,os);case"textInput":return e=t.data,e===os&&fs?null:e;default:return null}}function th(e,t){if(Ia)return e==="compositionend"||!Tu&&ds(e,t)?(e=ns(),Kn=ju=It=null,Ia=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ss&&t.locale!=="ko"?null:t.data;default:return null}}var ah={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ah[e.type]:t==="textarea"}function ps(e,t,a,l){Fa?Pa?Pa.push(l):Pa=[l]:Fa=l,t=Hi(t,"onChange"),0<t.length&&(a=new $n("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Ll=null,Gl=null;function lh(e){Ff(e,0)}function Fn(e){var t=Ul(e);if(Wr(t))return e}function vs(e,t){if(e==="change")return t}var gs=!1;if(_t){var Ru;if(_t){var Ou="oninput"in document;if(!Ou){var ys=document.createElement("div");ys.setAttribute("oninput","return;"),Ou=typeof ys.oninput=="function"}Ru=Ou}else Ru=!1;gs=Ru&&(!document.documentMode||9<document.documentMode)}function xs(){Ll&&(Ll.detachEvent("onpropertychange",bs),Gl=Ll=null)}function bs(e){if(e.propertyName==="value"&&Fn(Gl)){var t=[];ps(t,Gl,e,xu(e)),ls(lh,t)}}function nh(e,t,a){e==="focusin"?(xs(),Ll=t,Gl=a,Ll.attachEvent("onpropertychange",bs)):e==="focusout"&&xs()}function ih(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fn(Gl)}function uh(e,t){if(e==="click")return Fn(t)}function ch(e,t){if(e==="input"||e==="change")return Fn(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var nt=typeof Object.is=="function"?Object.is:rh;function Xl(e,t){if(nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var n=a[l];if(!nu.call(t,n)||!nt(e[n],t[n]))return!1}return!0}function Ss(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function js(e,t){var a=Ss(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ss(a)}}function Es(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Es(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ns(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Zn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Zn(e.document)}return t}function Mu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var sh=_t&&"documentMode"in document&&11>=document.documentMode,el=null,Du=null,Ql=null,Cu=!1;function As(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cu||el==null||el!==Zn(l)||(l=el,"selectionStart"in l&&Mu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ql&&Xl(Ql,l)||(Ql=l,l=Hi(Du,"onSelect"),0<l.length&&(t=new $n("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=el)))}function Ta(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var tl={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionrun:Ta("Transition","TransitionRun"),transitionstart:Ta("Transition","TransitionStart"),transitioncancel:Ta("Transition","TransitionCancel"),transitionend:Ta("Transition","TransitionEnd")},_u={},zs={};_t&&(zs=document.createElement("div").style,"AnimationEvent"in window||(delete tl.animationend.animation,delete tl.animationiteration.animation,delete tl.animationstart.animation),"TransitionEvent"in window||delete tl.transitionend.transition);function Ra(e){if(_u[e])return _u[e];if(!tl[e])return e;var t=tl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in zs)return _u[e]=t[a];return e}var Ts=Ra("animationend"),Rs=Ra("animationiteration"),Os=Ra("animationstart"),oh=Ra("transitionrun"),fh=Ra("transitionstart"),dh=Ra("transitioncancel"),Ms=Ra("transitionend"),Ds=new Map,Uu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uu.push("scrollEnd");function St(e,t){Ds.set(e,t),Aa(t,[e])}var Cs=new WeakMap;function ht(e,t){if(typeof e=="object"&&e!==null){var a=Cs.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Jr(t)},Cs.set(e,t),t)}return{value:e,source:t,stack:Jr(t)}}var pt=[],al=0,qu=0;function Pn(){for(var e=al,t=qu=al=0;t<e;){var a=pt[t];pt[t++]=null;var l=pt[t];pt[t++]=null;var n=pt[t];pt[t++]=null;var i=pt[t];if(pt[t++]=null,l!==null&&n!==null){var c=l.pending;c===null?n.next=n:(n.next=c.next,c.next=n),l.pending=n}i!==0&&_s(a,n,i)}}function In(e,t,a,l){pt[al++]=e,pt[al++]=t,pt[al++]=a,pt[al++]=l,qu|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Hu(e,t,a,l){return In(e,t,a,l),ei(e)}function ll(e,t){return In(e,null,null,t),ei(e)}function _s(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var n=!1,i=e.return;i!==null;)i.childLanes|=a,l=i.alternate,l!==null&&(l.childLanes|=a),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(n=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,n&&t!==null&&(n=31-lt(a),e=i.hiddenUpdates,l=e[n],l===null?e[n]=[t]:l.push(t),t.lane=a|536870912),i):null}function ei(e){if(50<pn)throw pn=0,Xc=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var nl={};function mh(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,a,l){return new mh(e,t,a,l)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ut(e,t){var a=e.alternate;return a===null?(a=it(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Us(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ti(e,t,a,l,n,i){var c=0;if(l=e,typeof e=="function")wu(e)&&(c=1);else if(typeof e=="string")c=pp(e,a,k.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case xe:return e=it(31,a,t,n),e.elementType=xe,e.lanes=i,e;case q:return Oa(a.children,n,i,t);case G:c=8,n|=24;break;case V:return e=it(12,a,t,n|2),e.elementType=V,e.lanes=i,e;case I:return e=it(13,a,t,n),e.elementType=I,e.lanes=i,e;case Me:return e=it(19,a,t,n),e.elementType=Me,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:case P:c=10;break e;case Z:c=9;break e;case ce:c=11;break e;case Ne:c=14;break e;case Te:c=16,l=null;break e}c=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=it(c,a,t,n),t.elementType=e,t.type=l,t.lanes=i,t}function Oa(e,t,a,l){return e=it(7,e,l,t),e.lanes=a,e}function Bu(e,t,a){return e=it(6,e,null,t),e.lanes=a,e}function Yu(e,t,a){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var il=[],ul=0,ai=null,li=0,vt=[],gt=0,Ma=null,qt=1,Ht="";function Da(e,t){il[ul++]=li,il[ul++]=ai,ai=e,li=t}function qs(e,t,a){vt[gt++]=qt,vt[gt++]=Ht,vt[gt++]=Ma,Ma=e;var l=qt;e=Ht;var n=32-lt(l)-1;l&=~(1<<n),a+=1;var i=32-lt(t)+n;if(30<i){var c=n-n%5;i=(l&(1<<c)-1).toString(32),l>>=c,n-=c,qt=1<<32-lt(t)+n|a<<n|l,Ht=i+e}else qt=1<<i|a<<n|l,Ht=e}function Lu(e){e.return!==null&&(Da(e,1),qs(e,1,0))}function Gu(e){for(;e===ai;)ai=il[--ul],il[ul]=null,li=il[--ul],il[ul]=null;for(;e===Ma;)Ma=vt[--gt],vt[gt]=null,Ht=vt[--gt],vt[gt]=null,qt=vt[--gt],vt[gt]=null}var Je=null,Ae=null,oe=!1,Ca=null,At=!1,Xu=Error(o(519));function _a(e){var t=Error(o(418,""));throw Kl(ht(t,e)),Xu}function Hs(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[Ze]=e,t[$e]=l,a){case"dialog":ie("cancel",t),ie("close",t);break;case"iframe":case"object":case"embed":ie("load",t);break;case"video":case"audio":for(a=0;a<gn.length;a++)ie(gn[a],t);break;case"source":ie("error",t);break;case"img":case"image":case"link":ie("error",t),ie("load",t);break;case"details":ie("toggle",t);break;case"input":ie("invalid",t),Fr(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),Qn(t);break;case"select":ie("invalid",t);break;case"textarea":ie("invalid",t),Ir(t,l.value,l.defaultValue,l.children),Qn(t)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||td(t.textContent,a)?(l.popover!=null&&(ie("beforetoggle",t),ie("toggle",t)),l.onScroll!=null&&ie("scroll",t),l.onScrollEnd!=null&&ie("scrollend",t),l.onClick!=null&&(t.onclick=wi),t=!0):t=!1,t||_a(e)}function ws(e){for(Je=e.return;Je;)switch(Je.tag){case 5:case 13:At=!1;return;case 27:case 3:At=!0;return;default:Je=Je.return}}function Zl(e){if(e!==Je)return!1;if(!oe)return ws(e),oe=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||nr(e.type,e.memoizedProps)),a=!a),a&&Ae&&_a(e),ws(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(t===0){Ae=Et(e.nextSibling);break e}t--}else a!=="$"&&a!=="$!"&&a!=="$?"||t++;e=e.nextSibling}Ae=null}}else t===27?(t=Ae,pa(e.type)?(e=rr,rr=null,Ae=e):Ae=t):Ae=Je?Et(e.stateNode.nextSibling):null;return!0}function Vl(){Ae=Je=null,oe=!1}function Bs(){var e=Ca;return e!==null&&(Ie===null?Ie=e:Ie.push.apply(Ie,e),Ca=null),e}function Kl(e){Ca===null?Ca=[e]:Ca.push(e)}var Qu=U(null),Ua=null,wt=null;function ea(e,t,a){B(Qu,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Qu.current,L(Qu)}function Zu(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function Vu(e,t,a,l){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var i=n.dependencies;if(i!==null){var c=n.child;i=i.firstContext;e:for(;i!==null;){var s=i;i=n;for(var h=0;h<t.length;h++)if(s.context===t[h]){i.lanes|=a,s=i.alternate,s!==null&&(s.lanes|=a),Zu(i.return,a,e),l||(c=null);break e}i=s.next}}else if(n.tag===18){if(c=n.return,c===null)throw Error(o(341));c.lanes|=a,i=c.alternate,i!==null&&(i.lanes|=a),Zu(c,a,e),c=null}else c=n.child;if(c!==null)c.return=n;else for(c=n;c!==null;){if(c===e){c=null;break}if(n=c.sibling,n!==null){n.return=c.return,c=n;break}c=c.return}n=c}}function kl(e,t,a,l){e=null;for(var n=t,i=!1;n!==null;){if(!i){if((n.flags&524288)!==0)i=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var c=n.alternate;if(c===null)throw Error(o(387));if(c=c.memoizedProps,c!==null){var s=n.type;nt(n.pendingProps.value,c.value)||(e!==null?e.push(s):e=[s])}}else if(n===tt.current){if(c=n.alternate,c===null)throw Error(o(387));c.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(En):e=[En])}n=n.return}e!==null&&Vu(t,e,a,l),t.flags|=262144}function ni(e){for(e=e.firstContext;e!==null;){if(!nt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function qa(e){Ua=e,wt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ve(e){return Ys(Ua,e)}function ii(e,t){return Ua===null&&qa(e),Ys(e,t)}function Ys(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},wt===null){if(e===null)throw Error(o(308));wt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else wt=wt.next=t;return a}var hh=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ph=r.unstable_scheduleCallback,vh=r.unstable_NormalPriority,_e={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new hh,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&ph(vh,function(){e.controller.abort()})}var $l=null,ku=0,cl=0,rl=null;function gh(e,t){if($l===null){var a=$l=[];ku=0,cl=$c(),rl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return ku++,t.then(Ls,Ls),t}function Ls(){if(--ku===0&&$l!==null){rl!==null&&(rl.status="fulfilled");var e=$l;$l=null,cl=0,rl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function yh(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(l.status="rejected",l.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),l}var Gs=R.S;R.S=function(e,t){typeof t=="object"&&t!==null&&typeof t.then=="function"&&gh(e,t),Gs!==null&&Gs(e,t)};var Ha=U(null);function Ju(){var e=Ha.current;return e!==null?e:ye.pooledCache}function ui(e,t){t===null?B(Ha,Ha.current):B(Ha,t.pool)}function Xs(){var e=Ju();return e===null?null:{parent:_e._currentValue,pool:e}}var Wl=Error(o(460)),Qs=Error(o(474)),ci=Error(o(542)),$u={then:function(){}};function Zs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ri(){}function Vs(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(ri,ri),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ks(e),e;default:if(typeof t.status=="string")t.then(ri,ri);else{if(e=ye,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=l}},function(l){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ks(e),e}throw Fl=t,Wl}}var Fl=null;function Ks(){if(Fl===null)throw Error(o(459));var e=Fl;return Fl=null,e}function ks(e){if(e===Wl||e===ci)throw Error(o(483))}var ta=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Fu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function aa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function la(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(fe&2)!==0){var n=l.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),l.pending=t,t=ei(e),_s(e,null,a),t}return In(e,l,t,a),ei(e)}function Pl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}function Pu(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var n=null,i=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};i===null?n=i=c:i=i.next=c,a=a.next}while(a!==null);i===null?n=i=t:i=i.next=t}else n=i=t;a={baseState:l.baseState,firstBaseUpdate:n,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Iu=!1;function Il(){if(Iu){var e=rl;if(e!==null)throw e}}function en(e,t,a,l){Iu=!1;var n=e.updateQueue;ta=!1;var i=n.firstBaseUpdate,c=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var h=s,j=h.next;h.next=null,c===null?i=j:c.next=j,c=h;var T=e.alternate;T!==null&&(T=T.updateQueue,s=T.lastBaseUpdate,s!==c&&(s===null?T.firstBaseUpdate=j:s.next=j,T.lastBaseUpdate=h))}if(i!==null){var C=n.baseState;c=0,T=j=h=null,s=i;do{var N=s.lane&-536870913,A=N!==s.lane;if(A?(ue&N)===N:(l&N)===N){N!==0&&N===cl&&(Iu=!0),T!==null&&(T=T.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var F=e,J=s;N=t;var pe=a;switch(J.tag){case 1:if(F=J.payload,typeof F=="function"){C=F.call(pe,C,N);break e}C=F;break e;case 3:F.flags=F.flags&-65537|128;case 0:if(F=J.payload,N=typeof F=="function"?F.call(pe,C,N):F,N==null)break e;C=z({},C,N);break e;case 2:ta=!0}}N=s.callback,N!==null&&(e.flags|=64,A&&(e.flags|=8192),A=n.callbacks,A===null?n.callbacks=[N]:A.push(N))}else A={lane:N,tag:s.tag,payload:s.payload,callback:s.callback,next:null},T===null?(j=T=A,h=C):T=T.next=A,c|=N;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;A=s,s=A.next,A.next=null,n.lastBaseUpdate=A,n.shared.pending=null}}while(!0);T===null&&(h=C),n.baseState=h,n.firstBaseUpdate=j,n.lastBaseUpdate=T,i===null&&(n.shared.lanes=0),fa|=c,e.lanes=c,e.memoizedState=C}}function Js(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function $s(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Js(a[e],t)}var sl=U(null),si=U(0);function Ws(e,t){e=Vt,B(si,e),B(sl,t),Vt=e|t.baseLanes}function ec(){B(si,Vt),B(sl,sl.current)}function tc(){Vt=si.current,L(sl),L(si)}var na=0,ae=null,me=null,De=null,oi=!1,ol=!1,wa=!1,fi=0,tn=0,fl=null,xh=0;function Re(){throw Error(o(321))}function ac(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!nt(e[a],t[a]))return!1;return!0}function lc(e,t,a,l,n,i){return na=i,ae=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,R.H=e===null||e.memoizedState===null?Uo:qo,wa=!1,i=a(l,n),wa=!1,ol&&(i=Ps(t,a,l,n)),Fs(e),i}function Fs(e){R.H=gi;var t=me!==null&&me.next!==null;if(na=0,De=me=ae=null,oi=!1,tn=0,fl=null,t)throw Error(o(300));e===null||He||(e=e.dependencies,e!==null&&ni(e)&&(He=!0))}function Ps(e,t,a,l){ae=e;var n=0;do{if(ol&&(fl=null),tn=0,ol=!1,25<=n)throw Error(o(301));if(n+=1,De=me=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}R.H=zh,i=t(a,l)}while(ol);return i}function bh(){var e=R.H,t=e.useState()[0];return t=typeof t.then=="function"?an(t):t,e=e.useState()[0],(me!==null?me.memoizedState:null)!==e&&(ae.flags|=1024),t}function nc(){var e=fi!==0;return fi=0,e}function ic(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function uc(e){if(oi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}oi=!1}na=0,De=me=ae=null,ol=!1,tn=fi=0,fl=null}function Fe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?ae.memoizedState=De=e:De=De.next=e,De}function Ce(){if(me===null){var e=ae.alternate;e=e!==null?e.memoizedState:null}else e=me.next;var t=De===null?ae.memoizedState:De.next;if(t!==null)De=t,me=e;else{if(e===null)throw ae.alternate===null?Error(o(467)):Error(o(310));me=e,e={memoizedState:me.memoizedState,baseState:me.baseState,baseQueue:me.baseQueue,queue:me.queue,next:null},De===null?ae.memoizedState=De=e:De=De.next=e}return De}function cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function an(e){var t=tn;return tn+=1,fl===null&&(fl=[]),e=Vs(fl,e,t),t=ae,(De===null?t.memoizedState:De.next)===null&&(t=t.alternate,R.H=t===null||t.memoizedState===null?Uo:qo),e}function di(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return an(e);if(e.$$typeof===P)return Ve(e)}throw Error(o(438,String(e)))}function rc(e){var t=null,a=ae.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ae.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=cc(),ae.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=ke;return t.index++,a}function Yt(e,t){return typeof t=="function"?t(e):t}function mi(e){var t=Ce();return sc(t,me,e)}function sc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var n=e.baseQueue,i=l.pending;if(i!==null){if(n!==null){var c=n.next;n.next=i.next,i.next=c}t.baseQueue=n=i,l.pending=null}if(i=e.baseState,n===null)e.memoizedState=i;else{t=n.next;var s=c=null,h=null,j=t,T=!1;do{var C=j.lane&-536870913;if(C!==j.lane?(ue&C)===C:(na&C)===C){var N=j.revertLane;if(N===0)h!==null&&(h=h.next={lane:0,revertLane:0,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),C===cl&&(T=!0);else if((na&N)===N){j=j.next,N===cl&&(T=!0);continue}else C={lane:0,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(s=h=C,c=i):h=h.next=C,ae.lanes|=N,fa|=N;C=j.action,wa&&a(i,C),i=j.hasEagerState?j.eagerState:a(i,C)}else N={lane:C,revertLane:j.revertLane,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},h===null?(s=h=N,c=i):h=h.next=N,ae.lanes|=C,fa|=C;j=j.next}while(j!==null&&j!==t);if(h===null?c=i:h.next=s,!nt(i,e.memoizedState)&&(He=!0,T&&(a=rl,a!==null)))throw a;e.memoizedState=i,e.baseState=c,e.baseQueue=h,l.lastRenderedState=i}return n===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function oc(e){var t=Ce(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,n=a.pending,i=t.memoizedState;if(n!==null){a.pending=null;var c=n=n.next;do i=e(i,c.action),c=c.next;while(c!==n);nt(i,t.memoizedState)||(He=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),a.lastRenderedState=i}return[i,l]}function Is(e,t,a){var l=ae,n=Ce(),i=oe;if(i){if(a===void 0)throw Error(o(407));a=a()}else a=t();var c=!nt((me||n).memoizedState,a);c&&(n.memoizedState=a,He=!0),n=n.queue;var s=ao.bind(null,l,n,e);if(ln(2048,8,s,[e]),n.getSnapshot!==t||c||De!==null&&De.memoizedState.tag&1){if(l.flags|=2048,dl(9,hi(),to.bind(null,l,n,a,t),null),ye===null)throw Error(o(349));i||(na&124)!==0||eo(l,t,a)}return a}function eo(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ae.updateQueue,t===null?(t=cc(),ae.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function to(e,t,a,l){t.value=a,t.getSnapshot=l,lo(t)&&no(e)}function ao(e,t,a){return a(function(){lo(t)&&no(e)})}function lo(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!nt(e,a)}catch{return!0}}function no(e){var t=ll(e,2);t!==null&&ot(t,e,2)}function fc(e){var t=Fe();if(typeof e=="function"){var a=e;if(e=a(),wa){Ft(!0);try{a()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function io(e,t,a,l){return e.baseState=a,sc(e,me,typeof l=="function"?l:Yt)}function Sh(e,t,a,l,n){if(vi(e))throw Error(o(485));if(e=t.action,e!==null){var i={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){i.listeners.push(c)}};R.T!==null?a(!0):i.isTransition=!1,l(i),a=t.pending,a===null?(i.next=t.pending=i,uo(t,i)):(i.next=a.next,t.pending=a.next=i)}}function uo(e,t){var a=t.action,l=t.payload,n=e.state;if(t.isTransition){var i=R.T,c={};R.T=c;try{var s=a(n,l),h=R.S;h!==null&&h(c,s),co(e,t,s)}catch(j){dc(e,t,j)}finally{R.T=i}}else try{i=a(n,l),co(e,t,i)}catch(j){dc(e,t,j)}}function co(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){ro(e,t,l)},function(l){return dc(e,t,l)}):ro(e,t,a)}function ro(e,t,a){t.status="fulfilled",t.value=a,so(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,uo(e,a)))}function dc(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,so(t),t=t.next;while(t!==l)}e.action=null}function so(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function oo(e,t){return t}function fo(e,t){if(oe){var a=ye.formState;if(a!==null){e:{var l=ae;if(oe){if(Ae){t:{for(var n=Ae,i=At;n.nodeType!==8;){if(!i){n=null;break t}if(n=Et(n.nextSibling),n===null){n=null;break t}}i=n.data,n=i==="F!"||i==="F"?n:null}if(n){Ae=Et(n.nextSibling),l=n.data==="F!";break e}}_a(l)}l=!1}l&&(t=a[0])}}return a=Fe(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:oo,lastRenderedState:t},a.queue=l,a=Do.bind(null,ae,l),l.dispatch=a,l=fc(!1),i=gc.bind(null,ae,!1,l.queue),l=Fe(),n={state:t,dispatch:null,action:e,pending:null},l.queue=n,a=Sh.bind(null,ae,n,i,a),n.dispatch=a,l.memoizedState=e,[t,a,!1]}function mo(e){var t=Ce();return ho(t,me,e)}function ho(e,t,a){if(t=sc(e,t,oo)[0],e=mi(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=an(t)}catch(c){throw c===Wl?ci:c}else l=t;t=Ce();var n=t.queue,i=n.dispatch;return a!==t.memoizedState&&(ae.flags|=2048,dl(9,hi(),jh.bind(null,n,a),null)),[l,i,e]}function jh(e,t){e.action=t}function po(e){var t=Ce(),a=me;if(a!==null)return ho(t,a,e);Ce(),t=t.memoizedState,a=Ce();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function dl(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ae.updateQueue,t===null&&(t=cc(),ae.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function hi(){return{destroy:void 0,resource:void 0}}function vo(){return Ce().memoizedState}function pi(e,t,a,l){var n=Fe();l=l===void 0?null:l,ae.flags|=e,n.memoizedState=dl(1|t,hi(),a,l)}function ln(e,t,a,l){var n=Ce();l=l===void 0?null:l;var i=n.memoizedState.inst;me!==null&&l!==null&&ac(l,me.memoizedState.deps)?n.memoizedState=dl(t,i,a,l):(ae.flags|=e,n.memoizedState=dl(1|t,i,a,l))}function go(e,t){pi(8390656,8,e,t)}function yo(e,t){ln(2048,8,e,t)}function xo(e,t){return ln(4,2,e,t)}function bo(e,t){return ln(4,4,e,t)}function So(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function jo(e,t,a){a=a!=null?a.concat([e]):null,ln(4,4,So.bind(null,t,e),a)}function mc(){}function Eo(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&ac(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function No(e,t){var a=Ce();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&ac(t,l[1]))return l[0];if(l=e(),wa){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l}function hc(e,t,a){return a===void 0||(na&1073741824)!==0?e.memoizedState=t:(e.memoizedState=a,e=Rf(),ae.lanes|=e,fa|=e,a)}function Ao(e,t,a,l){return nt(a,t)?a:sl.current!==null?(e=hc(e,a,l),nt(e,t)||(He=!0),e):(na&42)===0?(He=!0,e.memoizedState=a):(e=Rf(),ae.lanes|=e,fa|=e,t)}function zo(e,t,a,l,n){var i=Y.p;Y.p=i!==0&&8>i?i:8;var c=R.T,s={};R.T=s,gc(e,!1,t,a);try{var h=n(),j=R.S;if(j!==null&&j(s,h),h!==null&&typeof h=="object"&&typeof h.then=="function"){var T=yh(h,l);nn(e,t,T,st(e))}else nn(e,t,l,st(e))}catch(C){nn(e,t,{then:function(){},status:"rejected",reason:C},st())}finally{Y.p=i,R.T=c}}function Eh(){}function pc(e,t,a,l){if(e.tag!==5)throw Error(o(476));var n=To(e).queue;zo(e,n,t,W,a===null?Eh:function(){return Ro(e),a(l)})}function To(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:W},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ro(e){var t=To(e).next.queue;nn(e,t,{},st())}function vc(){return Ve(En)}function Oo(){return Ce().memoizedState}function Mo(){return Ce().memoizedState}function Nh(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=st();e=aa(a);var l=la(t,e,a);l!==null&&(ot(l,t,a),Pl(l,t,a)),t={cache:Ku()},e.payload=t;return}t=t.return}}function Ah(e,t,a){var l=st();a={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},vi(e)?Co(t,a):(a=Hu(e,t,a,l),a!==null&&(ot(a,e,l),_o(a,t,l)))}function Do(e,t,a){var l=st();nn(e,t,a,l)}function nn(e,t,a,l){var n={lane:l,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(vi(e))Co(t,n);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var c=t.lastRenderedState,s=i(c,a);if(n.hasEagerState=!0,n.eagerState=s,nt(s,c))return In(e,t,n,0),ye===null&&Pn(),!1}catch{}finally{}if(a=Hu(e,t,n,l),a!==null)return ot(a,e,l),_o(a,t,l),!0}return!1}function gc(e,t,a,l){if(l={lane:2,revertLane:$c(),action:l,hasEagerState:!1,eagerState:null,next:null},vi(e)){if(t)throw Error(o(479))}else t=Hu(e,a,l,2),t!==null&&ot(t,e,2)}function vi(e){var t=e.alternate;return e===ae||t!==null&&t===ae}function Co(e,t){ol=oi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function _o(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,Lr(e,a)}}var gi={readContext:Ve,use:di,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useLayoutEffect:Re,useInsertionEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useSyncExternalStore:Re,useId:Re,useHostTransitionStatus:Re,useFormState:Re,useActionState:Re,useOptimistic:Re,useMemoCache:Re,useCacheRefresh:Re},Uo={readContext:Ve,use:di,useCallback:function(e,t){return Fe().memoizedState=[e,t===void 0?null:t],e},useContext:Ve,useEffect:go,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,pi(4194308,4,So.bind(null,t,e),a)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){pi(4,2,e,t)},useMemo:function(e,t){var a=Fe();t=t===void 0?null:t;var l=e();if(wa){Ft(!0);try{e()}finally{Ft(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Fe();if(a!==void 0){var n=a(t);if(wa){Ft(!0);try{a(t)}finally{Ft(!1)}}}else n=t;return l.memoizedState=l.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},l.queue=e,e=e.dispatch=Ah.bind(null,ae,e),[l.memoizedState,e]},useRef:function(e){var t=Fe();return e={current:e},t.memoizedState=e},useState:function(e){e=fc(e);var t=e.queue,a=Do.bind(null,ae,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:mc,useDeferredValue:function(e,t){var a=Fe();return hc(a,e,t)},useTransition:function(){var e=fc(!1);return e=zo.bind(null,ae,e.queue,!0,!1),Fe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ae,n=Fe();if(oe){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),ye===null)throw Error(o(349));(ue&124)!==0||eo(l,t,a)}n.memoizedState=a;var i={value:a,getSnapshot:t};return n.queue=i,go(ao.bind(null,l,i,e),[e]),l.flags|=2048,dl(9,hi(),to.bind(null,l,i,a,t),null),a},useId:function(){var e=Fe(),t=ye.identifierPrefix;if(oe){var a=Ht,l=qt;a=(l&~(1<<32-lt(l)-1)).toString(32)+a,t="«"+t+"R"+a,a=fi++,0<a&&(t+="H"+a.toString(32)),t+="»"}else a=xh++,t="«"+t+"r"+a.toString(32)+"»";return e.memoizedState=t},useHostTransitionStatus:vc,useFormState:fo,useActionState:fo,useOptimistic:function(e){var t=Fe();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=gc.bind(null,ae,!0,a),a.dispatch=t,[e,t]},useMemoCache:rc,useCacheRefresh:function(){return Fe().memoizedState=Nh.bind(null,ae)}},qo={readContext:Ve,use:di,useCallback:Eo,useContext:Ve,useEffect:yo,useImperativeHandle:jo,useInsertionEffect:xo,useLayoutEffect:bo,useMemo:No,useReducer:mi,useRef:vo,useState:function(){return mi(Yt)},useDebugValue:mc,useDeferredValue:function(e,t){var a=Ce();return Ao(a,me.memoizedState,e,t)},useTransition:function(){var e=mi(Yt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:Oo,useHostTransitionStatus:vc,useFormState:mo,useActionState:mo,useOptimistic:function(e,t){var a=Ce();return io(a,me,e,t)},useMemoCache:rc,useCacheRefresh:Mo},zh={readContext:Ve,use:di,useCallback:Eo,useContext:Ve,useEffect:yo,useImperativeHandle:jo,useInsertionEffect:xo,useLayoutEffect:bo,useMemo:No,useReducer:oc,useRef:vo,useState:function(){return oc(Yt)},useDebugValue:mc,useDeferredValue:function(e,t){var a=Ce();return me===null?hc(a,e,t):Ao(a,me.memoizedState,e,t)},useTransition:function(){var e=oc(Yt)[0],t=Ce().memoizedState;return[typeof e=="boolean"?e:an(e),t]},useSyncExternalStore:Is,useId:Oo,useHostTransitionStatus:vc,useFormState:po,useActionState:po,useOptimistic:function(e,t){var a=Ce();return me!==null?io(a,me,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rc,useCacheRefresh:Mo},ml=null,un=0;function yi(e){var t=un;return un+=1,ml===null&&(ml=[]),Vs(ml,e,t)}function cn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function xi(e,t){throw t.$$typeof===H?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Ho(e){var t=e._init;return t(e._payload)}function wo(e){function t(x,g){if(e){var S=x.deletions;S===null?(x.deletions=[g],x.flags|=16):S.push(g)}}function a(x,g){if(!e)return null;for(;g!==null;)t(x,g),g=g.sibling;return null}function l(x){for(var g=new Map;x!==null;)x.key!==null?g.set(x.key,x):g.set(x.index,x),x=x.sibling;return g}function n(x,g){return x=Ut(x,g),x.index=0,x.sibling=null,x}function i(x,g,S){return x.index=S,e?(S=x.alternate,S!==null?(S=S.index,S<g?(x.flags|=67108866,g):S):(x.flags|=67108866,g)):(x.flags|=1048576,g)}function c(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function s(x,g,S,O){return g===null||g.tag!==6?(g=Bu(S,x.mode,O),g.return=x,g):(g=n(g,S),g.return=x,g)}function h(x,g,S,O){var X=S.type;return X===q?T(x,g,S.props.children,O,S.key):g!==null&&(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&Ho(X)===g.type)?(g=n(g,S.props),cn(g,S),g.return=x,g):(g=ti(S.type,S.key,S.props,null,x.mode,O),cn(g,S),g.return=x,g)}function j(x,g,S,O){return g===null||g.tag!==4||g.stateNode.containerInfo!==S.containerInfo||g.stateNode.implementation!==S.implementation?(g=Yu(S,x.mode,O),g.return=x,g):(g=n(g,S.children||[]),g.return=x,g)}function T(x,g,S,O,X){return g===null||g.tag!==7?(g=Oa(S,x.mode,O,X),g.return=x,g):(g=n(g,S),g.return=x,g)}function C(x,g,S){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Bu(""+g,x.mode,S),g.return=x,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case _:return S=ti(g.type,g.key,g.props,null,x.mode,S),cn(S,g),S.return=x,S;case Q:return g=Yu(g,x.mode,S),g.return=x,g;case Te:var O=g._init;return g=O(g._payload),C(x,g,S)}if(Qe(g)||Xe(g))return g=Oa(g,x.mode,S,null),g.return=x,g;if(typeof g.then=="function")return C(x,yi(g),S);if(g.$$typeof===P)return C(x,ii(x,g),S);xi(x,g)}return null}function N(x,g,S,O){var X=g!==null?g.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return X!==null?null:s(x,g,""+S,O);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case _:return S.key===X?h(x,g,S,O):null;case Q:return S.key===X?j(x,g,S,O):null;case Te:return X=S._init,S=X(S._payload),N(x,g,S,O)}if(Qe(S)||Xe(S))return X!==null?null:T(x,g,S,O,null);if(typeof S.then=="function")return N(x,g,yi(S),O);if(S.$$typeof===P)return N(x,g,ii(x,S),O);xi(x,S)}return null}function A(x,g,S,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return x=x.get(S)||null,s(g,x,""+O,X);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case _:return x=x.get(O.key===null?S:O.key)||null,h(g,x,O,X);case Q:return x=x.get(O.key===null?S:O.key)||null,j(g,x,O,X);case Te:var le=O._init;return O=le(O._payload),A(x,g,S,O,X)}if(Qe(O)||Xe(O))return x=x.get(S)||null,T(g,x,O,X,null);if(typeof O.then=="function")return A(x,g,S,yi(O),X);if(O.$$typeof===P)return A(x,g,S,ii(g,O),X);xi(g,O)}return null}function F(x,g,S,O){for(var X=null,le=null,K=g,$=g=0,Be=null;K!==null&&$<S.length;$++){K.index>$?(Be=K,K=null):Be=K.sibling;var se=N(x,K,S[$],O);if(se===null){K===null&&(K=Be);break}e&&K&&se.alternate===null&&t(x,K),g=i(se,g,$),le===null?X=se:le.sibling=se,le=se,K=Be}if($===S.length)return a(x,K),oe&&Da(x,$),X;if(K===null){for(;$<S.length;$++)K=C(x,S[$],O),K!==null&&(g=i(K,g,$),le===null?X=K:le.sibling=K,le=K);return oe&&Da(x,$),X}for(K=l(K);$<S.length;$++)Be=A(K,x,$,S[$],O),Be!==null&&(e&&Be.alternate!==null&&K.delete(Be.key===null?$:Be.key),g=i(Be,g,$),le===null?X=Be:le.sibling=Be,le=Be);return e&&K.forEach(function(ba){return t(x,ba)}),oe&&Da(x,$),X}function J(x,g,S,O){if(S==null)throw Error(o(151));for(var X=null,le=null,K=g,$=g=0,Be=null,se=S.next();K!==null&&!se.done;$++,se=S.next()){K.index>$?(Be=K,K=null):Be=K.sibling;var ba=N(x,K,se.value,O);if(ba===null){K===null&&(K=Be);break}e&&K&&ba.alternate===null&&t(x,K),g=i(ba,g,$),le===null?X=ba:le.sibling=ba,le=ba,K=Be}if(se.done)return a(x,K),oe&&Da(x,$),X;if(K===null){for(;!se.done;$++,se=S.next())se=C(x,se.value,O),se!==null&&(g=i(se,g,$),le===null?X=se:le.sibling=se,le=se);return oe&&Da(x,$),X}for(K=l(K);!se.done;$++,se=S.next())se=A(K,x,$,se.value,O),se!==null&&(e&&se.alternate!==null&&K.delete(se.key===null?$:se.key),g=i(se,g,$),le===null?X=se:le.sibling=se,le=se);return e&&K.forEach(function(Tp){return t(x,Tp)}),oe&&Da(x,$),X}function pe(x,g,S,O){if(typeof S=="object"&&S!==null&&S.type===q&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case _:e:{for(var X=S.key;g!==null;){if(g.key===X){if(X=S.type,X===q){if(g.tag===7){a(x,g.sibling),O=n(g,S.props.children),O.return=x,x=O;break e}}else if(g.elementType===X||typeof X=="object"&&X!==null&&X.$$typeof===Te&&Ho(X)===g.type){a(x,g.sibling),O=n(g,S.props),cn(O,S),O.return=x,x=O;break e}a(x,g);break}else t(x,g);g=g.sibling}S.type===q?(O=Oa(S.props.children,x.mode,O,S.key),O.return=x,x=O):(O=ti(S.type,S.key,S.props,null,x.mode,O),cn(O,S),O.return=x,x=O)}return c(x);case Q:e:{for(X=S.key;g!==null;){if(g.key===X)if(g.tag===4&&g.stateNode.containerInfo===S.containerInfo&&g.stateNode.implementation===S.implementation){a(x,g.sibling),O=n(g,S.children||[]),O.return=x,x=O;break e}else{a(x,g);break}else t(x,g);g=g.sibling}O=Yu(S,x.mode,O),O.return=x,x=O}return c(x);case Te:return X=S._init,S=X(S._payload),pe(x,g,S,O)}if(Qe(S))return F(x,g,S,O);if(Xe(S)){if(X=Xe(S),typeof X!="function")throw Error(o(150));return S=X.call(S),J(x,g,S,O)}if(typeof S.then=="function")return pe(x,g,yi(S),O);if(S.$$typeof===P)return pe(x,g,ii(x,S),O);xi(x,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,g!==null&&g.tag===6?(a(x,g.sibling),O=n(g,S),O.return=x,x=O):(a(x,g),O=Bu(S,x.mode,O),O.return=x,x=O),c(x)):a(x,g)}return function(x,g,S,O){try{un=0;var X=pe(x,g,S,O);return ml=null,X}catch(K){if(K===Wl||K===ci)throw K;var le=it(29,K,null,x.mode);return le.lanes=O,le.return=x,le}finally{}}}var hl=wo(!0),Bo=wo(!1),yt=U(null),zt=null;function ia(e){var t=e.alternate;B(Ue,Ue.current&1),B(yt,e),zt===null&&(t===null||sl.current!==null||t.memoizedState!==null)&&(zt=e)}function Yo(e){if(e.tag===22){if(B(Ue,Ue.current),B(yt,e),zt===null){var t=e.alternate;t!==null&&t.memoizedState!==null&&(zt=e)}}else ua()}function ua(){B(Ue,Ue.current),B(yt,yt.current)}function Lt(e){L(yt),zt===e&&(zt=null),L(Ue)}var Ue=U(0);function bi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||cr(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function yc(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var xc={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Pl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=st(),n=aa(l);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=la(e,n,l),t!==null&&(ot(t,e,l),Pl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=st(),l=aa(a);l.tag=2,t!=null&&(l.callback=t),t=la(e,l,a),t!==null&&(ot(t,e,a),Pl(t,e,a))}};function Lo(e,t,a,l,n,i,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,c):t.prototype&&t.prototype.isPureReactComponent?!Xl(a,l)||!Xl(n,i):!0}function Go(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&xc.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=z({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}var Si=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Xo(e){Si(e)}function Qo(e){console.error(e)}function Zo(e){Si(e)}function ji(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Vo(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function bc(e,t,a){return a=aa(a),a.tag=3,a.payload={element:null},a.callback=function(){ji(e,t)},a}function Ko(e){return e=aa(e),e.tag=3,e}function ko(e,t,a,l){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var i=l.value;e.payload=function(){return n(i)},e.callback=function(){Vo(t,a,l)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Vo(t,a,l),typeof n!="function"&&(da===null?da=new Set([this]):da.add(this));var s=l.stack;this.componentDidCatch(l.value,{componentStack:s!==null?s:""})})}function Th(e,t,a,l,n){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&kl(t,a,n,!0),a=yt.current,a!==null){switch(a.tag){case 13:return zt===null?Zc():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=n,l===$u?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Kc(e,l,n)),!1;case 22:return a.flags|=65536,l===$u?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Kc(e,l,n)),!1}throw Error(o(435,a.tag))}return Kc(e,l,n),Zc(),!1}if(oe)return t=yt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,l!==Xu&&(e=Error(o(422),{cause:l}),Kl(ht(e,a)))):(l!==Xu&&(t=Error(o(423),{cause:l}),Kl(ht(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,l=ht(l,a),n=bc(e.stateNode,l,n),Pu(e,n),ze!==4&&(ze=2)),!1;var i=Error(o(520),{cause:l});if(i=ht(i,a),hn===null?hn=[i]:hn.push(i),ze!==4&&(ze=2),t===null)return!0;l=ht(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=bc(a.stateNode,l,e),Pu(a,e),!1;case 1:if(t=a.type,i=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(da===null||!da.has(i))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Ko(n),ko(n,e,a,l),Pu(a,n),!1}a=a.return}while(a!==null);return!1}var Jo=Error(o(461)),He=!1;function Ye(e,t,a,l){t.child=e===null?Bo(t,null,a,l):hl(t,e.child,a,l)}function $o(e,t,a,l,n){a=a.render;var i=t.ref;if("ref"in l){var c={};for(var s in l)s!=="ref"&&(c[s]=l[s])}else c=l;return qa(t),l=lc(e,t,a,c,i,n),s=nc(),e!==null&&!He?(ic(e,t,n),Gt(e,t,n)):(oe&&s&&Lu(t),t.flags|=1,Ye(e,t,l,n),t.child)}function Wo(e,t,a,l,n){if(e===null){var i=a.type;return typeof i=="function"&&!wu(i)&&i.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=i,Fo(e,t,i,l,n)):(e=ti(a.type,null,l,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Rc(e,n)){var c=i.memoizedProps;if(a=a.compare,a=a!==null?a:Xl,a(c,l)&&e.ref===t.ref)return Gt(e,t,n)}return t.flags|=1,e=Ut(i,l),e.ref=t.ref,e.return=t,t.child=e}function Fo(e,t,a,l,n){if(e!==null){var i=e.memoizedProps;if(Xl(i,l)&&e.ref===t.ref)if(He=!1,t.pendingProps=l=i,Rc(e,n))(e.flags&131072)!==0&&(He=!0);else return t.lanes=e.lanes,Gt(e,t,n)}return Sc(e,t,a,l,n)}function Po(e,t,a){var l=t.pendingProps,n=l.children,i=e!==null?e.memoizedState:null;if(l.mode==="hidden"){if((t.flags&128)!==0){if(l=i!==null?i.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;t.childLanes=i&~l}else t.childLanes=0,t.child=null;return Io(e,t,l,a)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ui(t,i!==null?i.cachePool:null),i!==null?Ws(t,i):ec(),Yo(t);else return t.lanes=t.childLanes=536870912,Io(e,t,i!==null?i.baseLanes|a:a,a)}else i!==null?(ui(t,i.cachePool),Ws(t,i),ua(),t.memoizedState=null):(e!==null&&ui(t,null),ec(),ua());return Ye(e,t,n,a),t.child}function Io(e,t,a,l){var n=Ju();return n=n===null?null:{parent:_e._currentValue,pool:n},t.memoizedState={baseLanes:a,cachePool:n},e!==null&&ui(t,null),ec(),Yo(t),e!==null&&kl(e,t,l,!0),null}function Ei(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Sc(e,t,a,l,n){return qa(t),a=lc(e,t,a,l,void 0,n),l=nc(),e!==null&&!He?(ic(e,t,n),Gt(e,t,n)):(oe&&l&&Lu(t),t.flags|=1,Ye(e,t,a,n),t.child)}function ef(e,t,a,l,n,i){return qa(t),t.updateQueue=null,a=Ps(t,l,a,n),Fs(e),l=nc(),e!==null&&!He?(ic(e,t,i),Gt(e,t,i)):(oe&&l&&Lu(t),t.flags|=1,Ye(e,t,a,i),t.child)}function tf(e,t,a,l,n){if(qa(t),t.stateNode===null){var i=nl,c=a.contextType;typeof c=="object"&&c!==null&&(i=Ve(c)),i=new a(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=xc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Wu(t),c=a.contextType,i.context=typeof c=="object"&&c!==null?Ve(c):nl,i.state=t.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(yc(t,a,c,l),i.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(c=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),c!==i.state&&xc.enqueueReplaceState(i,i.state,null),en(t,l,i,n),Il(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var s=t.memoizedProps,h=Ba(a,s);i.props=h;var j=i.context,T=a.contextType;c=nl,typeof T=="object"&&T!==null&&(c=Ve(T));var C=a.getDerivedStateFromProps;T=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,T||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s||j!==c)&&Go(t,i,l,c),ta=!1;var N=t.memoizedState;i.state=N,en(t,l,i,n),Il(),j=t.memoizedState,s||N!==j||ta?(typeof C=="function"&&(yc(t,a,C,l),j=t.memoizedState),(h=ta||Lo(t,a,h,l,N,j,c))?(T||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=j),i.props=l,i.state=j,i.context=c,l=h):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Fu(e,t),c=t.memoizedProps,T=Ba(a,c),i.props=T,C=t.pendingProps,N=i.context,j=a.contextType,h=nl,typeof j=="object"&&j!==null&&(h=Ve(j)),s=a.getDerivedStateFromProps,(j=typeof s=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c!==C||N!==h)&&Go(t,i,l,h),ta=!1,N=t.memoizedState,i.state=N,en(t,l,i,n),Il();var A=t.memoizedState;c!==C||N!==A||ta||e!==null&&e.dependencies!==null&&ni(e.dependencies)?(typeof s=="function"&&(yc(t,a,s,l),A=t.memoizedState),(T=ta||Lo(t,a,T,l,N,A,h)||e!==null&&e.dependencies!==null&&ni(e.dependencies))?(j||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,A,h),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,A,h)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=A),i.props=l,i.state=A,i.context=h,l=T):(typeof i.componentDidUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&N===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ei(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=hl(t,e.child,null,n),t.child=hl(t,null,a,n)):Ye(e,t,a,n),t.memoizedState=i.state,e=t.child):e=Gt(e,t,n),e}function af(e,t,a,l){return Vl(),t.flags|=256,Ye(e,t,a,l),t.child}var jc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ec(e){return{baseLanes:e,cachePool:Xs()}}function Nc(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=xt),e}function lf(e,t,a){var l=t.pendingProps,n=!1,i=(t.flags&128)!==0,c;if((c=i)||(c=e!==null&&e.memoizedState===null?!1:(Ue.current&2)!==0),c&&(n=!0,t.flags&=-129),c=(t.flags&32)!==0,t.flags&=-33,e===null){if(oe){if(n?ia(t):ua(),oe){var s=Ae,h;if(h=s){e:{for(h=s,s=At;h.nodeType!==8;){if(!s){s=null;break e}if(h=Et(h.nextSibling),h===null){s=null;break e}}s=h}s!==null?(t.memoizedState={dehydrated:s,treeContext:Ma!==null?{id:qt,overflow:Ht}:null,retryLane:536870912,hydrationErrors:null},h=it(18,null,null,0),h.stateNode=s,h.return=t,t.child=h,Je=t,Ae=null,h=!0):h=!1}h||_a(t)}if(s=t.memoizedState,s!==null&&(s=s.dehydrated,s!==null))return cr(s)?t.lanes=32:t.lanes=536870912,null;Lt(t)}return s=l.children,l=l.fallback,n?(ua(),n=t.mode,s=Ni({mode:"hidden",children:s},n),l=Oa(l,n,a,null),s.return=t,l.return=t,s.sibling=l,t.child=s,n=t.child,n.memoizedState=Ec(a),n.childLanes=Nc(e,c,a),t.memoizedState=jc,l):(ia(t),Ac(t,s))}if(h=e.memoizedState,h!==null&&(s=h.dehydrated,s!==null)){if(i)t.flags&256?(ia(t),t.flags&=-257,t=zc(e,t,a)):t.memoizedState!==null?(ua(),t.child=e.child,t.flags|=128,t=null):(ua(),n=l.fallback,s=t.mode,l=Ni({mode:"visible",children:l.children},s),n=Oa(n,s,a,null),n.flags|=2,l.return=t,n.return=t,l.sibling=n,t.child=l,hl(t,e.child,null,a),l=t.child,l.memoizedState=Ec(a),l.childLanes=Nc(e,c,a),t.memoizedState=jc,t=n);else if(ia(t),cr(s)){if(c=s.nextSibling&&s.nextSibling.dataset,c)var j=c.dgst;c=j,l=Error(o(419)),l.stack="",l.digest=c,Kl({value:l,source:null,stack:null}),t=zc(e,t,a)}else if(He||kl(e,t,a,!1),c=(a&e.childLanes)!==0,He||c){if(c=ye,c!==null&&(l=a&-a,l=(l&42)!==0?1:ru(l),l=(l&(c.suspendedLanes|a))!==0?0:l,l!==0&&l!==h.retryLane))throw h.retryLane=l,ll(e,l),ot(c,e,l),Jo;s.data==="$?"||Zc(),t=zc(e,t,a)}else s.data==="$?"?(t.flags|=192,t.child=e.child,t=null):(e=h.treeContext,Ae=Et(s.nextSibling),Je=t,oe=!0,Ca=null,At=!1,e!==null&&(vt[gt++]=qt,vt[gt++]=Ht,vt[gt++]=Ma,qt=e.id,Ht=e.overflow,Ma=t),t=Ac(t,l.children),t.flags|=4096);return t}return n?(ua(),n=l.fallback,s=t.mode,h=e.child,j=h.sibling,l=Ut(h,{mode:"hidden",children:l.children}),l.subtreeFlags=h.subtreeFlags&65011712,j!==null?n=Ut(j,n):(n=Oa(n,s,a,null),n.flags|=2),n.return=t,l.return=t,l.sibling=n,t.child=l,l=n,n=t.child,s=e.child.memoizedState,s===null?s=Ec(a):(h=s.cachePool,h!==null?(j=_e._currentValue,h=h.parent!==j?{parent:j,pool:j}:h):h=Xs(),s={baseLanes:s.baseLanes|a,cachePool:h}),n.memoizedState=s,n.childLanes=Nc(e,c,a),t.memoizedState=jc,l):(ia(t),a=e.child,e=a.sibling,a=Ut(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(c=t.deletions,c===null?(t.deletions=[e],t.flags|=16):c.push(e)),t.child=a,t.memoizedState=null,a)}function Ac(e,t){return t=Ni({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ni(e,t){return e=it(22,e,null,t),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function zc(e,t,a){return hl(t,e.child,null,a),e=Ac(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nf(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Zu(e.return,t,a)}function Tc(e,t,a,l,n){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:n}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=l,i.tail=a,i.tailMode=n)}function uf(e,t,a){var l=t.pendingProps,n=l.revealOrder,i=l.tail;if(Ye(e,t,l.children,a),l=Ue.current,(l&2)!==0)l=l&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&nf(e,a,t);else if(e.tag===19)nf(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}switch(B(Ue,l),n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&bi(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),Tc(t,!1,n,a,i);break;case"backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&bi(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}Tc(t,!0,a,null,i);break;case"together":Tc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),fa|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(kl(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ut(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ut(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Rc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ni(e)))}function Rh(e,t,a){switch(t.tag){case 3:be(t,t.stateNode.containerInfo),ea(t,_e,e.memoizedState.cache),Vl();break;case 27:case 5:lu(t);break;case 4:be(t,t.stateNode.containerInfo);break;case 10:ea(t,t.type,t.memoizedProps.value);break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(ia(t),t.flags|=128,null):(a&t.child.childLanes)!==0?lf(e,t,a):(ia(t),e=Gt(e,t,a),e!==null?e.sibling:null);ia(t);break;case 19:var n=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(kl(e,t,a,!1),l=(a&t.childLanes)!==0),n){if(l)return uf(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),B(Ue,Ue.current),l)break;return null;case 22:case 23:return t.lanes=0,Po(e,t,a);case 24:ea(t,_e,e.memoizedState.cache)}return Gt(e,t,a)}function cf(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)He=!0;else{if(!Rc(e,a)&&(t.flags&128)===0)return He=!1,Rh(e,t,a);He=(e.flags&131072)!==0}else He=!1,oe&&(t.flags&1048576)!==0&&qs(t,li,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var l=t.elementType,n=l._init;if(l=n(l._payload),t.type=l,typeof l=="function")wu(l)?(e=Ba(l,e),t.tag=1,t=tf(null,t,l,e,a)):(t.tag=0,t=Sc(null,t,l,e,a));else{if(l!=null){if(n=l.$$typeof,n===ce){t.tag=11,t=$o(null,t,l,e,a);break e}else if(n===Ne){t.tag=14,t=Wo(null,t,l,e,a);break e}}throw t=Ea(l)||l,Error(o(306,t,""))}}return t;case 0:return Sc(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,n=Ba(l,t.pendingProps),tf(e,t,l,n,a);case 3:e:{if(be(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var i=t.memoizedState;n=i.element,Fu(e,t),en(t,l,null,a);var c=t.memoizedState;if(l=c.cache,ea(t,_e,l),l!==i.cache&&Vu(t,[_e],a,!0),Il(),l=c.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:c.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=af(e,t,l,a);break e}else if(l!==n){n=ht(Error(o(424)),t),Kl(n),t=af(e,t,l,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ae=Et(e.firstChild),Je=t,oe=!0,Ca=null,At=!0,a=Bo(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Vl(),l===n){t=Gt(e,t,a);break e}Ye(e,t,l,a)}t=t.child}return t;case 26:return Ei(e,t),e===null?(a=fd(t.type,null,t.pendingProps,null))?t.memoizedState=a:oe||(a=t.type,e=t.pendingProps,l=Bi(ee.current).createElement(a),l[Ze]=t,l[$e]=e,Ge(l,a,e),qe(l),t.stateNode=l):t.memoizedState=fd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return lu(t),e===null&&oe&&(l=t.stateNode=rd(t.type,t.pendingProps,ee.current),Je=t,At=!0,n=Ae,pa(t.type)?(rr=n,Ae=Et(l.firstChild)):Ae=n),Ye(e,t,t.pendingProps.children,a),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&oe&&((n=l=Ae)&&(l=ap(l,t.type,t.pendingProps,At),l!==null?(t.stateNode=l,Je=t,Ae=Et(l.firstChild),At=!1,n=!0):n=!1),n||_a(t)),lu(t),n=t.type,i=t.pendingProps,c=e!==null?e.memoizedProps:null,l=i.children,nr(n,i)?l=null:c!==null&&nr(n,c)&&(t.flags|=32),t.memoizedState!==null&&(n=lc(e,t,bh,null,null,a),En._currentValue=n),Ei(e,t),Ye(e,t,l,a),t.child;case 6:return e===null&&oe&&((e=a=Ae)&&(a=lp(a,t.pendingProps,At),a!==null?(t.stateNode=a,Je=t,Ae=null,e=!0):e=!1),e||_a(t)),null;case 13:return lf(e,t,a);case 4:return be(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=hl(t,null,l,a):Ye(e,t,l,a),t.child;case 11:return $o(e,t,t.type,t.pendingProps,a);case 7:return Ye(e,t,t.pendingProps,a),t.child;case 8:return Ye(e,t,t.pendingProps.children,a),t.child;case 12:return Ye(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,ea(t,t.type,l.value),Ye(e,t,l.children,a),t.child;case 9:return n=t.type._context,l=t.pendingProps.children,qa(t),n=Ve(n),l=l(n),t.flags|=1,Ye(e,t,l,a),t.child;case 14:return Wo(e,t,t.type,t.pendingProps,a);case 15:return Fo(e,t,t.type,t.pendingProps,a);case 19:return uf(e,t,a);case 31:return l=t.pendingProps,a=t.mode,l={mode:l.mode,children:l.children},e===null?(a=Ni(l,a),a.ref=t.ref,t.child=a,a.return=t,t=a):(a=Ut(e.child,l),a.ref=t.ref,t.child=a,a.return=t,t=a),t;case 22:return Po(e,t,a);case 24:return qa(t),l=Ve(_e),e===null?(n=Ju(),n===null&&(n=ye,i=Ku(),n.pooledCache=i,i.refCount++,i!==null&&(n.pooledCacheLanes|=a),n=i),t.memoizedState={parent:l,cache:n},Wu(t),ea(t,_e,n)):((e.lanes&a)!==0&&(Fu(e,t),en(t,null,null,a),Il()),n=e.memoizedState,i=t.memoizedState,n.parent!==l?(n={parent:l,cache:l},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ea(t,_e,l)):(l=i.cache,ea(t,_e,l),l!==n.cache&&Vu(t,[_e],a,!0))),Ye(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Xt(e){e.flags|=4}function rf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vd(t)){if(t=yt.current,t!==null&&((ue&4194048)===ue?zt!==null:(ue&62914560)!==ue&&(ue&536870912)===0||t!==zt))throw Fl=$u,Qs;e.flags|=8192}}function Ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Br():536870912,e.lanes|=t,yl|=t)}function rn(e,t){if(!oe)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function je(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags&65011712,l|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,l|=n.subtreeFlags,l|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function Oh(e,t,a){var l=t.pendingProps;switch(Gu(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(t),null;case 1:return je(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Bt(_e),Wt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zl(t)?Xt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Bs())),je(t),null;case 26:return a=t.memoizedState,e===null?(Xt(t),a!==null?(je(t),rf(t,a)):(je(t),t.flags&=-16777217)):a?a!==e.memoizedState?(Xt(t),je(t),rf(t,a)):(je(t),t.flags&=-16777217):(e.memoizedProps!==l&&Xt(t),je(t),t.flags&=-16777217),null;case 27:Hn(t),a=ee.current;var n=t.type;if(e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}e=k.current,Zl(t)?Hs(t):(e=rd(n,l,a),t.stateNode=e,Xt(t))}return je(t),null;case 5:if(Hn(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return je(t),null}if(e=k.current,Zl(t))Hs(t);else{switch(n=Bi(ee.current),e){case 1:e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=n.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=n.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=n.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof l.is=="string"?n.createElement("select",{is:l.is}):n.createElement("select"),l.multiple?e.multiple=!0:l.size&&(e.size=l.size);break;default:e=typeof l.is=="string"?n.createElement(a,{is:l.is}):n.createElement(a)}}e[Ze]=t,e[$e]=l;e:for(n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.tag!==27&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}t.stateNode=e;e:switch(Ge(e,a,l),a){case"button":case"input":case"select":case"textarea":e=!!l.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Xt(t)}}return je(t),t.flags&=-16777217,null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&Xt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=ee.current,Zl(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,n=Je,n!==null)switch(n.tag){case 27:case 5:l=n.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||td(e.nodeValue,a)),e||_a(t)}else e=Bi(e).createTextNode(l),e[Ze]=t,t.stateNode=e}return je(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=Zl(t),l!==null&&l.dehydrated!==null){if(e===null){if(!n)throw Error(o(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(o(317));n[Ze]=t}else Vl(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;je(t),n=!1}else n=Bs(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(Lt(t),t):(Lt(t),null)}if(Lt(t),(t.flags&128)!==0)return t.lanes=a,t;if(a=l!==null,e=e!==null&&e.memoizedState!==null,a){l=t.child,n=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(n=l.alternate.memoizedState.cachePool.pool);var i=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==n&&(l.flags|=2048)}return a!==e&&a&&(t.child.flags|=8192),Ai(t,t.updateQueue),je(t),null;case 4:return Wt(),e===null&&Ic(t.stateNode.containerInfo),je(t),null;case 10:return Bt(t.type),je(t),null;case 19:if(L(Ue),n=t.memoizedState,n===null)return je(t),null;if(l=(t.flags&128)!==0,i=n.rendering,i===null)if(l)rn(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=bi(e),i!==null){for(t.flags|=128,rn(n,!1),e=i.updateQueue,t.updateQueue=e,Ai(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Us(a,e),a=a.sibling;return B(Ue,Ue.current&1|2),t.child}e=e.sibling}n.tail!==null&&Nt()>Ri&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304)}else{if(!l)if(e=bi(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,Ai(t,e),rn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!i.alternate&&!oe)return je(t),null}else 2*Nt()-n.renderingStartTime>Ri&&a!==536870912&&(t.flags|=128,l=!0,rn(n,!1),t.lanes=4194304);n.isBackwards?(i.sibling=t.child,t.child=i):(e=n.last,e!==null?e.sibling=i:t.child=i,n.last=i)}return n.tail!==null?(t=n.tail,n.rendering=t,n.tail=t.sibling,n.renderingStartTime=Nt(),t.sibling=null,e=Ue.current,B(Ue,l?e&1|2:e&1),t):(je(t),null);case 22:case 23:return Lt(t),tc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(je(t),t.subtreeFlags&6&&(t.flags|=8192)):je(t),a=t.updateQueue,a!==null&&Ai(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&L(Ha),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(_e),je(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Mh(e,t){switch(Gu(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(_e),Wt(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Hn(t),null;case 13:if(Lt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Vl()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(Ue),null;case 4:return Wt(),null;case 10:return Bt(t.type),null;case 22:case 23:return Lt(t),tc(),e!==null&&L(Ha),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(_e),null;case 25:return null;default:return null}}function sf(e,t){switch(Gu(t),t.tag){case 3:Bt(_e),Wt();break;case 26:case 27:case 5:Hn(t);break;case 4:Wt();break;case 13:Lt(t);break;case 19:L(Ue);break;case 10:Bt(t.type);break;case 22:case 23:Lt(t),tc(),e!==null&&L(Ha);break;case 24:Bt(_e)}}function sn(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var n=l.next;a=n;do{if((a.tag&e)===e){l=void 0;var i=a.create,c=a.inst;l=i(),c.destroy=l}a=a.next}while(a!==n)}}catch(s){ge(t,t.return,s)}}function ca(e,t,a){try{var l=t.updateQueue,n=l!==null?l.lastEffect:null;if(n!==null){var i=n.next;l=i;do{if((l.tag&e)===e){var c=l.inst,s=c.destroy;if(s!==void 0){c.destroy=void 0,n=t;var h=a,j=s;try{j()}catch(T){ge(n,h,T)}}}l=l.next}while(l!==i)}}catch(T){ge(t,t.return,T)}}function of(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{$s(t,a)}catch(l){ge(e,e.return,l)}}}function ff(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){ge(e,t,l)}}function on(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(n){ge(e,t,n)}}function Tt(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(n){ge(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ge(e,t,n)}else a.current=null}function df(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(n){ge(e,e.return,n)}}function Oc(e,t,a){try{var l=e.stateNode;Fh(l,e.type,a,t),l[$e]=t}catch(n){ge(e,e.return,n)}}function mf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function Mc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||mf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=wi));else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Dc(e,t,a),e=e.sibling;e!==null;)Dc(e,t,a),e=e.sibling}function zi(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zi(e,t,a),e=e.sibling;e!==null;)zi(e,t,a),e=e.sibling}function hf(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Ge(t,l,a),t[Ze]=e,t[$e]=a}catch(i){ge(e,e.return,i)}}var Qt=!1,Oe=!1,Cc=!1,pf=typeof WeakSet=="function"?WeakSet:Set,we=null;function Dh(e,t){if(e=e.containerInfo,ar=Zi,e=Ns(e),Mu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var n=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{a.nodeType,i.nodeType}catch{a=null;break e}var c=0,s=-1,h=-1,j=0,T=0,C=e,N=null;t:for(;;){for(var A;C!==a||n!==0&&C.nodeType!==3||(s=c+n),C!==i||l!==0&&C.nodeType!==3||(h=c+l),C.nodeType===3&&(c+=C.nodeValue.length),(A=C.firstChild)!==null;)N=C,C=A;for(;;){if(C===e)break t;if(N===a&&++j===n&&(s=c),N===i&&++T===l&&(h=c),(A=C.nextSibling)!==null)break;C=N,N=C.parentNode}C=A}a=s===-1||h===-1?null:{start:s,end:h}}else a=null}a=a||{start:0,end:0}}else a=null;for(lr={focusedElem:e,selectionRange:a},Zi=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1024)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,i=t.alternate,e=t.flags,t.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&i!==null){e=void 0,a=t,n=i.memoizedProps,i=i.memoizedState,l=a.stateNode;try{var F=Ba(a.type,n,a.elementType===a.type);e=l.getSnapshotBeforeUpdate(F,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(J){ge(a,a.return,J)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ur(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ur(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function vf(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ra(e,a),l&4&&sn(5,a);break;case 1:if(ra(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(c){ge(a,a.return,c)}else{var n=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(c){ge(a,a.return,c)}}l&64&&of(a),l&512&&on(a,a.return);break;case 3:if(ra(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{$s(e,t)}catch(c){ge(a,a.return,c)}}break;case 27:t===null&&l&4&&hf(a);case 26:case 5:ra(e,a),t===null&&l&4&&df(a),l&512&&on(a,a.return);break;case 12:ra(e,a);break;case 13:ra(e,a),l&4&&xf(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Lh.bind(null,a),np(e,a))));break;case 22:if(l=a.memoizedState!==null||Qt,!l){t=t!==null&&t.memoizedState!==null||Oe,n=Qt;var i=Oe;Qt=l,(Oe=t)&&!i?sa(e,a,(a.subtreeFlags&8772)!==0):ra(e,a),Qt=n,Oe=i}break;case 30:break;default:ra(e,a)}}function gf(e){var t=e.alternate;t!==null&&(e.alternate=null,gf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&fu(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Se=null,Pe=!1;function Zt(e,t,a){for(a=a.child;a!==null;)yf(e,t,a),a=a.sibling}function yf(e,t,a){if(at&&typeof at.onCommitFiberUnmount=="function")try{at.onCommitFiberUnmount(Ml,a)}catch{}switch(a.tag){case 26:Oe||Tt(a,t),Zt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Oe||Tt(a,t);var l=Se,n=Pe;pa(a.type)&&(Se=a.stateNode,Pe=!1),Zt(e,t,a),xn(a.stateNode),Se=l,Pe=n;break;case 5:Oe||Tt(a,t);case 6:if(l=Se,n=Pe,Se=null,Zt(e,t,a),Se=l,Pe=n,Se!==null)if(Pe)try{(Se.nodeType===9?Se.body:Se.nodeName==="HTML"?Se.ownerDocument.body:Se).removeChild(a.stateNode)}catch(i){ge(a,t,i)}else try{Se.removeChild(a.stateNode)}catch(i){ge(a,t,i)}break;case 18:Se!==null&&(Pe?(e=Se,ud(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Tn(e)):ud(Se,a.stateNode));break;case 4:l=Se,n=Pe,Se=a.stateNode.containerInfo,Pe=!0,Zt(e,t,a),Se=l,Pe=n;break;case 0:case 11:case 14:case 15:Oe||ca(2,a,t),Oe||ca(4,a,t),Zt(e,t,a);break;case 1:Oe||(Tt(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&ff(a,t,l)),Zt(e,t,a);break;case 21:Zt(e,t,a);break;case 22:Oe=(l=Oe)||a.memoizedState!==null,Zt(e,t,a),Oe=l;break;default:Zt(e,t,a)}}function xf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Tn(e)}catch(a){ge(t,t.return,a)}}function Ch(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new pf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new pf),t;default:throw Error(o(435,e.tag))}}function _c(e,t){var a=Ch(e);t.forEach(function(l){var n=Gh.bind(null,e,l);a.has(l)||(a.add(l),l.then(n,n))})}function ut(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var n=a[l],i=e,c=t,s=c;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){Se=s.stateNode,Pe=!1;break e}break;case 5:Se=s.stateNode,Pe=!1;break e;case 3:case 4:Se=s.stateNode.containerInfo,Pe=!0;break e}s=s.return}if(Se===null)throw Error(o(160));yf(i,c,n),Se=null,Pe=!1,i=n.alternate,i!==null&&(i.return=null),n.return=null}if(t.subtreeFlags&13878)for(t=t.child;t!==null;)bf(t,e),t=t.sibling}var jt=null;function bf(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ut(t,e),ct(e),l&4&&(ca(3,e,e.return),sn(3,e),ca(5,e,e.return));break;case 1:ut(t,e),ct(e),l&512&&(Oe||a===null||Tt(a,a.return)),l&64&&Qt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var n=jt;if(ut(t,e),ct(e),l&512&&(Oe||a===null||Tt(a,a.return)),l&4){var i=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(l){case"title":i=n.getElementsByTagName("title")[0],(!i||i[_l]||i[Ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=n.createElement(l),n.head.insertBefore(i,n.querySelector("head > title"))),Ge(i,l,a),i[Ze]=e,qe(i),l=i;break e;case"link":var c=hd("link","href",n).get(l+(a.href||""));if(c){for(var s=0;s<c.length;s++)if(i=c[s],i.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&i.getAttribute("rel")===(a.rel==null?null:a.rel)&&i.getAttribute("title")===(a.title==null?null:a.title)&&i.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(s,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;case"meta":if(c=hd("meta","content",n).get(l+(a.content||""))){for(s=0;s<c.length;s++)if(i=c[s],i.getAttribute("content")===(a.content==null?null:""+a.content)&&i.getAttribute("name")===(a.name==null?null:a.name)&&i.getAttribute("property")===(a.property==null?null:a.property)&&i.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&i.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(s,1);break t}}i=n.createElement(l),Ge(i,l,a),n.head.appendChild(i);break;default:throw Error(o(468,l))}i[Ze]=e,qe(i),l=i}e.stateNode=l}else pd(n,e.type,e.stateNode);else e.stateNode=md(n,l,e.memoizedProps);else i!==l?(i===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):i.count--,l===null?pd(n,e.type,e.stateNode):md(n,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Oc(e,e.memoizedProps,a.memoizedProps)}break;case 27:ut(t,e),ct(e),l&512&&(Oe||a===null||Tt(a,a.return)),a!==null&&l&4&&Oc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(ut(t,e),ct(e),l&512&&(Oe||a===null||Tt(a,a.return)),e.flags&32){n=e.stateNode;try{Wa(n,"")}catch(A){ge(e,e.return,A)}}l&4&&e.stateNode!=null&&(n=e.memoizedProps,Oc(e,n,a!==null?a.memoizedProps:n)),l&1024&&(Cc=!0);break;case 6:if(ut(t,e),ct(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(A){ge(e,e.return,A)}}break;case 3:if(Gi=null,n=jt,jt=Yi(t.containerInfo),ut(t,e),jt=n,ct(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Tn(t.containerInfo)}catch(A){ge(e,e.return,A)}Cc&&(Cc=!1,Sf(e));break;case 4:l=jt,jt=Yi(e.stateNode.containerInfo),ut(t,e),ct(e),jt=l;break;case 12:ut(t,e),ct(e);break;case 13:ut(t,e),ct(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Yc=Nt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 22:n=e.memoizedState!==null;var h=a!==null&&a.memoizedState!==null,j=Qt,T=Oe;if(Qt=j||n,Oe=T||h,ut(t,e),Oe=T,Qt=j,ct(e),l&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||h||Qt||Oe||Ya(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){h=a=t;try{if(i=h.stateNode,n)c=i.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{s=h.stateNode;var C=h.memoizedProps.style,N=C!=null&&C.hasOwnProperty("display")?C.display:null;s.style.display=N==null||typeof N=="boolean"?"":(""+N).trim()}}catch(A){ge(h,h.return,A)}}}else if(t.tag===6){if(a===null){h=t;try{h.stateNode.nodeValue=n?"":h.memoizedProps}catch(A){ge(h,h.return,A)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,_c(e,a))));break;case 19:ut(t,e),ct(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,_c(e,l)));break;case 30:break;case 21:break;default:ut(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(mf(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var n=a.stateNode,i=Mc(e);zi(e,i,n);break;case 5:var c=a.stateNode;a.flags&32&&(Wa(c,""),a.flags&=-33);var s=Mc(e);zi(e,s,c);break;case 3:case 4:var h=a.stateNode.containerInfo,j=Mc(e);Dc(e,j,h);break;default:throw Error(o(161))}}catch(T){ge(e,e.return,T)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Sf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Sf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ra(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)vf(e,t.alternate,t),t=t.sibling}function Ya(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:ca(4,t,t.return),Ya(t);break;case 1:Tt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&ff(t,t.return,a),Ya(t);break;case 27:xn(t.stateNode);case 26:case 5:Tt(t,t.return),Ya(t);break;case 22:t.memoizedState===null&&Ya(t);break;case 30:Ya(t);break;default:Ya(t)}e=e.sibling}}function sa(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,n=e,i=t,c=i.flags;switch(i.tag){case 0:case 11:case 15:sa(n,i,a),sn(4,i);break;case 1:if(sa(n,i,a),l=i,n=l.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(j){ge(l,l.return,j)}if(l=i,n=l.updateQueue,n!==null){var s=l.stateNode;try{var h=n.shared.hiddenCallbacks;if(h!==null)for(n.shared.hiddenCallbacks=null,n=0;n<h.length;n++)Js(h[n],s)}catch(j){ge(l,l.return,j)}}a&&c&64&&of(i),on(i,i.return);break;case 27:hf(i);case 26:case 5:sa(n,i,a),a&&l===null&&c&4&&df(i),on(i,i.return);break;case 12:sa(n,i,a);break;case 13:sa(n,i,a),a&&c&4&&xf(n,i);break;case 22:i.memoizedState===null&&sa(n,i,a),on(i,i.return);break;case 30:break;default:sa(n,i,a)}t=t.sibling}}function Uc(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Jl(a))}function qc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function Rt(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)jf(e,t,a,l),t=t.sibling}function jf(e,t,a,l){var n=t.flags;switch(t.tag){case 0:case 11:case 15:Rt(e,t,a,l),n&2048&&sn(9,t);break;case 1:Rt(e,t,a,l);break;case 3:Rt(e,t,a,l),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(n&2048){Rt(e,t,a,l),e=t.stateNode;try{var i=t.memoizedProps,c=i.id,s=i.onPostCommit;typeof s=="function"&&s(c,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(h){ge(t,t.return,h)}}else Rt(e,t,a,l);break;case 13:Rt(e,t,a,l);break;case 23:break;case 22:i=t.stateNode,c=t.alternate,t.memoizedState!==null?i._visibility&2?Rt(e,t,a,l):fn(e,t):i._visibility&2?Rt(e,t,a,l):(i._visibility|=2,pl(e,t,a,l,(t.subtreeFlags&10256)!==0)),n&2048&&Uc(c,t);break;case 24:Rt(e,t,a,l),n&2048&&qc(t.alternate,t);break;default:Rt(e,t,a,l)}}function pl(e,t,a,l,n){for(n=n&&(t.subtreeFlags&10256)!==0,t=t.child;t!==null;){var i=e,c=t,s=a,h=l,j=c.flags;switch(c.tag){case 0:case 11:case 15:pl(i,c,s,h,n),sn(8,c);break;case 23:break;case 22:var T=c.stateNode;c.memoizedState!==null?T._visibility&2?pl(i,c,s,h,n):fn(i,c):(T._visibility|=2,pl(i,c,s,h,n)),n&&j&2048&&Uc(c.alternate,c);break;case 24:pl(i,c,s,h,n),n&&j&2048&&qc(c.alternate,c);break;default:pl(i,c,s,h,n)}t=t.sibling}}function fn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,n=l.flags;switch(l.tag){case 22:fn(a,l),n&2048&&Uc(l.alternate,l);break;case 24:fn(a,l),n&2048&&qc(l.alternate,l);break;default:fn(a,l)}t=t.sibling}}var dn=8192;function vl(e){if(e.subtreeFlags&dn)for(e=e.child;e!==null;)Ef(e),e=e.sibling}function Ef(e){switch(e.tag){case 26:vl(e),e.flags&dn&&e.memoizedState!==null&&gp(jt,e.memoizedState,e.memoizedProps);break;case 5:vl(e);break;case 3:case 4:var t=jt;jt=Yi(e.stateNode.containerInfo),vl(e),jt=t;break;case 22:e.memoizedState===null&&(t=e.alternate,t!==null&&t.memoizedState!==null?(t=dn,dn=16777216,vl(e),dn=t):vl(e));break;default:vl(e)}}function Nf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function mn(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];we=l,zf(l,e)}Nf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Af(e),e=e.sibling}function Af(e){switch(e.tag){case 0:case 11:case 15:mn(e),e.flags&2048&&ca(9,e,e.return);break;case 3:mn(e);break;case 12:mn(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ti(e)):mn(e);break;default:mn(e)}}function Ti(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];we=l,zf(l,e)}Nf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:ca(8,t,t.return),Ti(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,Ti(t));break;default:Ti(t)}e=e.sibling}}function zf(e,t){for(;we!==null;){var a=we;switch(a.tag){case 0:case 11:case 15:ca(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Jl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,we=l;else e:for(a=e;we!==null;){l=we;var n=l.sibling,i=l.return;if(gf(l),l===a){we=null;break e}if(n!==null){n.return=i,we=n;break e}we=i}}}var _h={getCacheForType:function(e){var t=Ve(_e),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a}},Uh=typeof WeakMap=="function"?WeakMap:Map,fe=0,ye=null,ne=null,ue=0,de=0,rt=null,oa=!1,gl=!1,Hc=!1,Vt=0,ze=0,fa=0,La=0,wc=0,xt=0,yl=0,hn=null,Ie=null,Bc=!1,Yc=0,Ri=1/0,Oi=null,da=null,Le=0,ma=null,xl=null,bl=0,Lc=0,Gc=null,Tf=null,pn=0,Xc=null;function st(){if((fe&2)!==0&&ue!==0)return ue&-ue;if(R.T!==null){var e=cl;return e!==0?e:$c()}return Gr()}function Rf(){xt===0&&(xt=(ue&536870912)===0||oe?wr():536870912);var e=yt.current;return e!==null&&(e.flags|=32),xt}function ot(e,t,a){(e===ye&&(de===2||de===9)||e.cancelPendingCommit!==null)&&(Sl(e,0),ha(e,ue,xt,!1)),Cl(e,a),((fe&2)===0||e!==ye)&&(e===ye&&((fe&2)===0&&(La|=a),ze===4&&ha(e,ue,xt,!1)),Ot(e))}function Of(e,t,a){if((fe&6)!==0)throw Error(o(327));var l=!a&&(t&124)===0&&(t&e.expiredLanes)===0||Dl(e,t),n=l?wh(e,t):Vc(e,t,!0),i=l;do{if(n===0){gl&&!l&&ha(e,t,0,!1);break}else{if(a=e.current.alternate,i&&!qh(a)){n=Vc(e,t,!1),i=!1;continue}if(n===2){if(i=t,e.errorRecoveryDisabledLanes&i)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){t=c;e:{var s=e;n=hn;var h=s.current.memoizedState.isDehydrated;if(h&&(Sl(s,c).flags|=256),c=Vc(s,c,!1),c!==2){if(Hc&&!h){s.errorRecoveryDisabledLanes|=i,La|=i,n=4;break e}i=Ie,Ie=n,i!==null&&(Ie===null?Ie=i:Ie.push.apply(Ie,i))}n=c}if(i=!1,n!==2)continue}}if(n===1){Sl(e,0),ha(e,t,0,!0);break}e:{switch(l=e,i=n,i){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:ha(l,t,xt,!oa);break e;case 2:Ie=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(n=Yc+300-Nt(),10<n)){if(ha(l,t,xt,!oa),Ln(l,0,!0)!==0)break e;l.timeoutHandle=nd(Mf.bind(null,l,a,Ie,Oi,Bc,t,xt,La,yl,oa,i,2,-0,0),n);break e}Mf(l,a,Ie,Oi,Bc,t,xt,La,yl,oa,i,0,-0,0)}}break}while(!0);Ot(e)}function Mf(e,t,a,l,n,i,c,s,h,j,T,C,N,A){if(e.timeoutHandle=-1,C=t.subtreeFlags,(C&8192||(C&16785408)===16785408)&&(jn={stylesheets:null,count:0,unsuspend:vp},Ef(t),C=yp(),C!==null)){e.cancelPendingCommit=C(wf.bind(null,e,t,i,a,l,n,c,s,h,T,1,N,A)),ha(e,i,c,!j);return}wf(e,t,i,a,l,n,c,s,h)}function qh(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var n=a[l],i=n.getSnapshot;n=n.value;try{if(!nt(i(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ha(e,t,a,l){t&=~wc,t&=~La,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var n=t;0<n;){var i=31-lt(n),c=1<<i;l[i]=-1,n&=~c}a!==0&&Yr(e,a,t)}function Mi(){return(fe&6)===0?(vn(0),!1):!0}function Qc(){if(ne!==null){if(de===0)var e=ne.return;else e=ne,wt=Ua=null,uc(e),ml=null,un=0,e=ne;for(;e!==null;)sf(e.alternate,e),e=e.return;ne=null}}function Sl(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ih(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qc(),ye=e,ne=a=Ut(e.current,null),ue=t,de=0,rt=null,oa=!1,gl=Dl(e,t),Hc=!1,yl=xt=wc=La=fa=ze=0,Ie=hn=null,Bc=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var n=31-lt(l),i=1<<n;t|=e[n],l&=~i}return Vt=t,Pn(),a}function Df(e,t){ae=null,R.H=gi,t===Wl||t===ci?(t=Ks(),de=3):t===Qs?(t=Ks(),de=4):de=t===Jo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,rt=t,ne===null&&(ze=1,ji(e,ht(t,e.current)))}function Cf(){var e=R.H;return R.H=gi,e===null?gi:e}function _f(){var e=R.A;return R.A=_h,e}function Zc(){ze=4,oa||(ue&4194048)!==ue&&yt.current!==null||(gl=!0),(fa&134217727)===0&&(La&134217727)===0||ye===null||ha(ye,ue,xt,!1)}function Vc(e,t,a){var l=fe;fe|=2;var n=Cf(),i=_f();(ye!==e||ue!==t)&&(Oi=null,Sl(e,t)),t=!1;var c=ze;e:do try{if(de!==0&&ne!==null){var s=ne,h=rt;switch(de){case 8:Qc(),c=6;break e;case 3:case 2:case 9:case 6:yt.current===null&&(t=!0);var j=de;if(de=0,rt=null,jl(e,s,h,j),a&&gl){c=0;break e}break;default:j=de,de=0,rt=null,jl(e,s,h,j)}}Hh(),c=ze;break}catch(T){Df(e,T)}while(!0);return t&&e.shellSuspendCounter++,wt=Ua=null,fe=l,R.H=n,R.A=i,ne===null&&(ye=null,ue=0,Pn()),c}function Hh(){for(;ne!==null;)Uf(ne)}function wh(e,t){var a=fe;fe|=2;var l=Cf(),n=_f();ye!==e||ue!==t?(Oi=null,Ri=Nt()+500,Sl(e,t)):gl=Dl(e,t);e:do try{if(de!==0&&ne!==null){t=ne;var i=rt;t:switch(de){case 1:de=0,rt=null,jl(e,t,i,1);break;case 2:case 9:if(Zs(i)){de=0,rt=null,qf(t);break}t=function(){de!==2&&de!==9||ye!==e||(de=7),Ot(e)},i.then(t,t);break e;case 3:de=7;break e;case 4:de=5;break e;case 7:Zs(i)?(de=0,rt=null,qf(t)):(de=0,rt=null,jl(e,t,i,7));break;case 5:var c=null;switch(ne.tag){case 26:c=ne.memoizedState;case 5:case 27:var s=ne;if(!c||vd(c)){de=0,rt=null;var h=s.sibling;if(h!==null)ne=h;else{var j=s.return;j!==null?(ne=j,Di(j)):ne=null}break t}}de=0,rt=null,jl(e,t,i,5);break;case 6:de=0,rt=null,jl(e,t,i,6);break;case 8:Qc(),ze=6;break e;default:throw Error(o(462))}}Bh();break}catch(T){Df(e,T)}while(!0);return wt=Ua=null,R.H=l,R.A=n,fe=a,ne!==null?0:(ye=null,ue=0,Pn(),ze)}function Bh(){for(;ne!==null&&!um();)Uf(ne)}function Uf(e){var t=cf(e.alternate,e,Vt);e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function qf(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=ef(a,t,t.pendingProps,t.type,void 0,ue);break;case 11:t=ef(a,t,t.pendingProps,t.type.render,t.ref,ue);break;case 5:uc(t);default:sf(a,t),t=ne=Us(t,Vt),t=cf(a,t,Vt)}e.memoizedProps=e.pendingProps,t===null?Di(e):ne=t}function jl(e,t,a,l){wt=Ua=null,uc(t),ml=null,un=0;var n=t.return;try{if(Th(e,n,t,a,ue)){ze=1,ji(e,ht(a,e.current)),ne=null;return}}catch(i){if(n!==null)throw ne=n,i;ze=1,ji(e,ht(a,e.current)),ne=null;return}t.flags&32768?(oe||l===1?e=!0:gl||(ue&536870912)!==0?e=!1:(oa=e=!0,(l===2||l===9||l===3||l===6)&&(l=yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hf(t,e)):Di(t)}function Di(e){var t=e;do{if((t.flags&32768)!==0){Hf(t,oa);return}e=t.return;var a=Oh(t.alternate,t,Vt);if(a!==null){ne=a;return}if(t=t.sibling,t!==null){ne=t;return}ne=t=e}while(t!==null);ze===0&&(ze=5)}function Hf(e,t){do{var a=Mh(e.alternate,e);if(a!==null){a.flags&=32767,ne=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ne=e;return}ne=e=a}while(e!==null);ze=6,ne=null}function wf(e,t,a,l,n,i,c,s,h){e.cancelPendingCommit=null;do Ci();while(Le!==0);if((fe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(i=t.lanes|t.childLanes,i|=qu,vm(e,a,i,c,s,h),e===ye&&(ne=ye=null,ue=0),xl=t,ma=e,bl=a,Lc=i,Gc=n,Tf=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Xh(wn,function(){return Xf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=R.T,R.T=null,n=Y.p,Y.p=2,c=fe,fe|=4;try{Dh(e,t,a)}finally{fe=c,Y.p=n,R.T=l}}Le=1,Bf(),Yf(),Lf()}}function Bf(){if(Le===1){Le=0;var e=ma,t=xl,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=R.T,R.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{bf(t,e);var i=lr,c=Ns(e.containerInfo),s=i.focusedElem,h=i.selectionRange;if(c!==s&&s&&s.ownerDocument&&Es(s.ownerDocument.documentElement,s)){if(h!==null&&Mu(s)){var j=h.start,T=h.end;if(T===void 0&&(T=j),"selectionStart"in s)s.selectionStart=j,s.selectionEnd=Math.min(T,s.value.length);else{var C=s.ownerDocument||document,N=C&&C.defaultView||window;if(N.getSelection){var A=N.getSelection(),F=s.textContent.length,J=Math.min(h.start,F),pe=h.end===void 0?J:Math.min(h.end,F);!A.extend&&J>pe&&(c=pe,pe=J,J=c);var x=js(s,J),g=js(s,pe);if(x&&g&&(A.rangeCount!==1||A.anchorNode!==x.node||A.anchorOffset!==x.offset||A.focusNode!==g.node||A.focusOffset!==g.offset)){var S=C.createRange();S.setStart(x.node,x.offset),A.removeAllRanges(),J>pe?(A.addRange(S),A.extend(g.node,g.offset)):(S.setEnd(g.node,g.offset),A.addRange(S))}}}}for(C=[],A=s;A=A.parentNode;)A.nodeType===1&&C.push({element:A,left:A.scrollLeft,top:A.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<C.length;s++){var O=C[s];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}Zi=!!ar,lr=ar=null}finally{fe=n,Y.p=l,R.T=a}}e.current=t,Le=2}}function Yf(){if(Le===2){Le=0;var e=ma,t=xl,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=R.T,R.T=null;var l=Y.p;Y.p=2;var n=fe;fe|=4;try{vf(e,t.alternate,t)}finally{fe=n,Y.p=l,R.T=a}}Le=3}}function Lf(){if(Le===4||Le===3){Le=0,cm();var e=ma,t=xl,a=bl,l=Tf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Le=5:(Le=0,xl=ma=null,Gf(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(da=null),su(a),t=t.stateNode,at&&typeof at.onCommitFiberRoot=="function")try{at.onCommitFiberRoot(Ml,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=R.T,n=Y.p,Y.p=2,R.T=null;try{for(var i=e.onRecoverableError,c=0;c<l.length;c++){var s=l[c];i(s.value,{componentStack:s.stack})}}finally{R.T=t,Y.p=n}}(bl&3)!==0&&Ci(),Ot(e),n=e.pendingLanes,(a&4194090)!==0&&(n&42)!==0?e===Xc?pn++:(pn=0,Xc=e):pn=0,vn(0)}}function Gf(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Ci(e){return Bf(),Yf(),Lf(),Xf()}function Xf(){if(Le!==5)return!1;var e=ma,t=Lc;Lc=0;var a=su(bl),l=R.T,n=Y.p;try{Y.p=32>a?32:a,R.T=null,a=Gc,Gc=null;var i=ma,c=bl;if(Le=0,xl=ma=null,bl=0,(fe&6)!==0)throw Error(o(331));var s=fe;if(fe|=4,Af(i.current),jf(i,i.current,c,a),fe=s,vn(0,!1),at&&typeof at.onPostCommitFiberRoot=="function")try{at.onPostCommitFiberRoot(Ml,i)}catch{}return!0}finally{Y.p=n,R.T=l,Gf(e,t)}}function Qf(e,t,a){t=ht(a,t),t=bc(e.stateNode,t,2),e=la(e,t,2),e!==null&&(Cl(e,2),Ot(e))}function ge(e,t,a){if(e.tag===3)Qf(e,e,a);else for(;t!==null;){if(t.tag===3){Qf(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(da===null||!da.has(l))){e=ht(a,e),a=Ko(2),l=la(t,a,2),l!==null&&(ko(a,l,t,e),Cl(l,2),Ot(l));break}}t=t.return}}function Kc(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Uh;var n=new Set;l.set(t,n)}else n=l.get(t),n===void 0&&(n=new Set,l.set(t,n));n.has(a)||(Hc=!0,n.add(a),e=Yh.bind(null,e,t,a),t.then(e,e))}function Yh(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ye===e&&(ue&a)===a&&(ze===4||ze===3&&(ue&62914560)===ue&&300>Nt()-Yc?(fe&2)===0&&Sl(e,0):wc|=a,yl===ue&&(yl=0)),Ot(e)}function Zf(e,t){t===0&&(t=Br()),e=ll(e,t),e!==null&&(Cl(e,t),Ot(e))}function Lh(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Zf(e,a)}function Gh(e,t){var a=0;switch(e.tag){case 13:var l=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),Zf(e,a)}function Xh(e,t){return iu(e,t)}var _i=null,El=null,kc=!1,Ui=!1,Jc=!1,Ga=0;function Ot(e){e!==El&&e.next===null&&(El===null?_i=El=e:El=El.next=e),Ui=!0,kc||(kc=!0,Zh())}function vn(e,t){if(!Jc&&Ui){Jc=!0;do for(var a=!1,l=_i;l!==null;){if(e!==0){var n=l.pendingLanes;if(n===0)var i=0;else{var c=l.suspendedLanes,s=l.pingedLanes;i=(1<<31-lt(42|e)+1)-1,i&=n&~(c&~s),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(a=!0,Jf(l,i))}else i=ue,i=Ln(l,l===ye?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(i&3)===0||Dl(l,i)||(a=!0,Jf(l,i));l=l.next}while(a);Jc=!1}}function Qh(){Vf()}function Vf(){Ui=kc=!1;var e=0;Ga!==0&&(Ph()&&(e=Ga),Ga=0);for(var t=Nt(),a=null,l=_i;l!==null;){var n=l.next,i=Kf(l,t);i===0?(l.next=null,a===null?_i=n:a.next=n,n===null&&(El=a)):(a=l,(e!==0||(i&3)!==0)&&(Ui=!0)),l=n}vn(e)}function Kf(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,n=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var c=31-lt(i),s=1<<c,h=n[c];h===-1?((s&a)===0||(s&l)!==0)&&(n[c]=pm(s,t)):h<=t&&(e.expiredLanes|=s),i&=~s}if(t=ye,a=ue,a=Ln(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(de===2||de===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&uu(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Dl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&uu(l),su(a)){case 2:case 8:a=qr;break;case 32:a=wn;break;case 268435456:a=Hr;break;default:a=wn}return l=kf.bind(null,e),a=iu(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&uu(l),e.callbackPriority=2,e.callbackNode=null,2}function kf(e,t){if(Le!==0&&Le!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ci()&&e.callbackNode!==a)return null;var l=ue;return l=Ln(e,e===ye?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Of(e,l,t),Kf(e,Nt()),e.callbackNode!=null&&e.callbackNode===a?kf.bind(null,e):null)}function Jf(e,t){if(Ci())return null;Of(e,t,!0)}function Zh(){ep(function(){(fe&6)!==0?iu(Ur,Qh):Vf()})}function $c(){return Ga===0&&(Ga=wr()),Ga}function $f(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vn(""+e)}function Wf(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function Vh(e,t,a,l,n){if(t==="submit"&&a&&a.stateNode===n){var i=$f((n[$e]||null).action),c=l.submitter;c&&(t=(t=c[$e]||null)?$f(t.formAction):c.getAttribute("formAction"),t!==null&&(i=t,c=null));var s=new $n("action","action",null,l,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ga!==0){var h=c?Wf(n,c):new FormData(n);pc(a,{pending:!0,data:h,method:n.method,action:i},null,h)}}else typeof i=="function"&&(s.preventDefault(),h=c?Wf(n,c):new FormData(n),pc(a,{pending:!0,data:h,method:n.method,action:i},i,h))},currentTarget:n}]})}}for(var Wc=0;Wc<Uu.length;Wc++){var Fc=Uu[Wc],Kh=Fc.toLowerCase(),kh=Fc[0].toUpperCase()+Fc.slice(1);St(Kh,"on"+kh)}St(Ts,"onAnimationEnd"),St(Rs,"onAnimationIteration"),St(Os,"onAnimationStart"),St("dblclick","onDoubleClick"),St("focusin","onFocus"),St("focusout","onBlur"),St(oh,"onTransitionRun"),St(fh,"onTransitionStart"),St(dh,"onTransitionCancel"),St(Ms,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Aa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Aa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Aa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Aa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Aa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jh=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gn));function Ff(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],n=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var c=l.length-1;0<=c;c--){var s=l[c],h=s.instance,j=s.currentTarget;if(s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=j;try{i(n)}catch(T){Si(T)}n.currentTarget=null,i=h}else for(c=0;c<l.length;c++){if(s=l[c],h=s.instance,j=s.currentTarget,s=s.listener,h!==i&&n.isPropagationStopped())break e;i=s,n.currentTarget=j;try{i(n)}catch(T){Si(T)}n.currentTarget=null,i=h}}}}function ie(e,t){var a=t[ou];a===void 0&&(a=t[ou]=new Set);var l=e+"__bubble";a.has(l)||(Pf(t,e,2,!1),a.add(l))}function Pc(e,t,a){var l=0;t&&(l|=4),Pf(a,e,l,t)}var qi="_reactListening"+Math.random().toString(36).slice(2);function Ic(e){if(!e[qi]){e[qi]=!0,Qr.forEach(function(a){a!=="selectionchange"&&(Jh.has(a)||Pc(a,!1,e),Pc(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[qi]||(t[qi]=!0,Pc("selectionchange",!1,t))}}function Pf(e,t,a,l){switch(jd(t)){case 2:var n=Sp;break;case 8:n=jp;break;default:n=mr}a=n.bind(null,t,a,e),n=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),l?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function er(e,t,a,l,n){var i=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var c=l.tag;if(c===3||c===4){var s=l.stateNode.containerInfo;if(s===n)break;if(c===4)for(c=l.return;c!==null;){var h=c.tag;if((h===3||h===4)&&c.stateNode.containerInfo===n)return;c=c.return}for(;s!==null;){if(c=Za(s),c===null)return;if(h=c.tag,h===5||h===6||h===26||h===27){l=i=c;continue e}s=s.parentNode}}l=l.return}ls(function(){var j=i,T=xu(a),C=[];e:{var N=Ds.get(e);if(N!==void 0){var A=$n,F=e;switch(e){case"keypress":if(kn(a)===0)break e;case"keydown":case"keyup":A=Xm;break;case"focusin":F="focus",A=Au;break;case"focusout":F="blur",A=Au;break;case"beforeblur":case"afterblur":A=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=us;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Mm;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=Vm;break;case Ts:case Rs:case Os:A=_m;break;case Ms:A=km;break;case"scroll":case"scrollend":A=Rm;break;case"wheel":A=$m;break;case"copy":case"cut":case"paste":A=qm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=rs;break;case"toggle":case"beforetoggle":A=Fm}var J=(t&4)!==0,pe=!J&&(e==="scroll"||e==="scrollend"),x=J?N!==null?N+"Capture":null:N;J=[];for(var g=j,S;g!==null;){var O=g;if(S=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||S===null||x===null||(O=ql(g,x),O!=null&&J.push(yn(g,O,S))),pe)break;g=g.return}0<J.length&&(N=new A(N,F,null,a,T),C.push({event:N,listeners:J}))}}if((t&7)===0){e:{if(N=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",N&&a!==yu&&(F=a.relatedTarget||a.fromElement)&&(Za(F)||F[Qa]))break e;if((A||N)&&(N=T.window===T?T:(N=T.ownerDocument)?N.defaultView||N.parentWindow:window,A?(F=a.relatedTarget||a.toElement,A=j,F=F?Za(F):null,F!==null&&(pe=y(F),J=F.tag,F!==pe||J!==5&&J!==27&&J!==6)&&(F=null)):(A=null,F=j),A!==F)){if(J=us,O="onMouseLeave",x="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(J=rs,O="onPointerLeave",x="onPointerEnter",g="pointer"),pe=A==null?N:Ul(A),S=F==null?N:Ul(F),N=new J(O,g+"leave",A,a,T),N.target=pe,N.relatedTarget=S,O=null,Za(T)===j&&(J=new J(x,g+"enter",F,a,T),J.target=S,J.relatedTarget=pe,O=J),pe=O,A&&F)t:{for(J=A,x=F,g=0,S=J;S;S=Nl(S))g++;for(S=0,O=x;O;O=Nl(O))S++;for(;0<g-S;)J=Nl(J),g--;for(;0<S-g;)x=Nl(x),S--;for(;g--;){if(J===x||x!==null&&J===x.alternate)break t;J=Nl(J),x=Nl(x)}J=null}else J=null;A!==null&&If(C,N,A,J,!1),F!==null&&pe!==null&&If(C,pe,F,J,!0)}}e:{if(N=j?Ul(j):window,A=N.nodeName&&N.nodeName.toLowerCase(),A==="select"||A==="input"&&N.type==="file")var X=vs;else if(hs(N))if(gs)X=ch;else{X=ih;var le=nh}else A=N.nodeName,!A||A.toLowerCase()!=="input"||N.type!=="checkbox"&&N.type!=="radio"?j&&gu(j.elementType)&&(X=vs):X=uh;if(X&&(X=X(e,j))){ps(C,X,a,T);break e}le&&le(e,N,j),e==="focusout"&&j&&N.type==="number"&&j.memoizedProps.value!=null&&vu(N,"number",N.value)}switch(le=j?Ul(j):window,e){case"focusin":(hs(le)||le.contentEditable==="true")&&(el=le,Du=j,Ql=null);break;case"focusout":Ql=Du=el=null;break;case"mousedown":Cu=!0;break;case"contextmenu":case"mouseup":case"dragend":Cu=!1,As(C,a,T);break;case"selectionchange":if(sh)break;case"keydown":case"keyup":As(C,a,T)}var K;if(Tu)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Ia?ds(e,a)&&($="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&($="onCompositionStart");$&&(ss&&a.locale!=="ko"&&(Ia||$!=="onCompositionStart"?$==="onCompositionEnd"&&Ia&&(K=ns()):(It=T,ju="value"in It?It.value:It.textContent,Ia=!0)),le=Hi(j,$),0<le.length&&($=new cs($,e,null,a,T),C.push({event:$,listeners:le}),K?$.data=K:(K=ms(a),K!==null&&($.data=K)))),(K=Im?eh(e,a):th(e,a))&&($=Hi(j,"onBeforeInput"),0<$.length&&(le=new cs("onBeforeInput","beforeinput",null,a,T),C.push({event:le,listeners:$}),le.data=K)),Vh(C,e,j,a,T)}Ff(C,t)})}function yn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Hi(e,t){for(var a=t+"Capture",l=[];e!==null;){var n=e,i=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||i===null||(n=ql(e,a),n!=null&&l.unshift(yn(e,n,i)),n=ql(e,t),n!=null&&l.push(yn(e,n,i))),e.tag===3)return l;e=e.return}return[]}function Nl(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function If(e,t,a,l,n){for(var i=t._reactName,c=[];a!==null&&a!==l;){var s=a,h=s.alternate,j=s.stateNode;if(s=s.tag,h!==null&&h===l)break;s!==5&&s!==26&&s!==27||j===null||(h=j,n?(j=ql(a,i),j!=null&&c.unshift(yn(a,j,h))):n||(j=ql(a,i),j!=null&&c.push(yn(a,j,h)))),a=a.return}c.length!==0&&e.push({event:t,listeners:c})}var $h=/\r\n?/g,Wh=/\u0000|\uFFFD/g;function ed(e){return(typeof e=="string"?e:""+e).replace($h,`
`).replace(Wh,"")}function td(e,t){return t=ed(t),ed(e)===t}function wi(){}function he(e,t,a,l,n,i){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Wa(e,""+l);break;case"className":Xn(e,"class",l);break;case"tabIndex":Xn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Xn(e,a,l);break;case"style":ts(e,l,i);break;case"data":if(t!=="object"){Xn(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(a==="formAction"?(t!=="input"&&he(e,t,"name",n.name,n,null),he(e,t,"formEncType",n.formEncType,n,null),he(e,t,"formMethod",n.formMethod,n,null),he(e,t,"formTarget",n.formTarget,n,null)):(he(e,t,"encType",n.encType,n,null),he(e,t,"method",n.method,n,null),he(e,t,"target",n.target,n,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=Vn(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=wi);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=Vn(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":ie("beforetoggle",e),ie("toggle",e),Gn(e,"popover",l);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Gn(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=zm.get(a)||a,Gn(e,a,l))}}function tr(e,t,a,l,n,i){switch(a){case"style":ts(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(n.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Wa(e,l):(typeof l=="number"||typeof l=="bigint")&&Wa(e,""+l);break;case"onScroll":l!=null&&ie("scroll",e);break;case"onScrollEnd":l!=null&&ie("scrollend",e);break;case"onClick":l!=null&&(e.onclick=wi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Zr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),i=e[$e]||null,i=i!=null?i[a]:null,typeof i=="function"&&e.removeEventListener(t,i,n),typeof l=="function")){typeof i!="function"&&i!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,n);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):Gn(e,a,l)}}}function Ge(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ie("error",e),ie("load",e);var l=!1,n=!1,i;for(i in a)if(a.hasOwnProperty(i)){var c=a[i];if(c!=null)switch(i){case"src":l=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,i,c,a,null)}}n&&he(e,t,"srcSet",a.srcSet,a,null),l&&he(e,t,"src",a.src,a,null);return;case"input":ie("invalid",e);var s=i=c=n=null,h=null,j=null;for(l in a)if(a.hasOwnProperty(l)){var T=a[l];if(T!=null)switch(l){case"name":n=T;break;case"type":c=T;break;case"checked":h=T;break;case"defaultChecked":j=T;break;case"value":i=T;break;case"defaultValue":s=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(o(137,t));break;default:he(e,t,l,T,a,null)}}Fr(e,i,s,h,j,c,n,!1),Qn(e);return;case"select":ie("invalid",e),l=c=i=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":i=s;break;case"defaultValue":c=s;break;case"multiple":l=s;default:he(e,t,n,s,a,null)}t=i,a=c,e.multiple=!!l,t!=null?$a(e,!!l,t,!1):a!=null&&$a(e,!!l,a,!0);return;case"textarea":ie("invalid",e),i=n=l=null;for(c in a)if(a.hasOwnProperty(c)&&(s=a[c],s!=null))switch(c){case"value":l=s;break;case"defaultValue":n=s;break;case"children":i=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(o(91));break;default:he(e,t,c,s,a,null)}Ir(e,l,n,i),Qn(e);return;case"option":for(h in a)if(a.hasOwnProperty(h)&&(l=a[h],l!=null))switch(h){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:he(e,t,h,l,a,null)}return;case"dialog":ie("beforetoggle",e),ie("toggle",e),ie("cancel",e),ie("close",e);break;case"iframe":case"object":ie("load",e);break;case"video":case"audio":for(l=0;l<gn.length;l++)ie(gn[l],e);break;case"image":ie("error",e),ie("load",e);break;case"details":ie("toggle",e);break;case"embed":case"source":case"link":ie("error",e),ie("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(l=a[j],l!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:he(e,t,j,l,a,null)}return;default:if(gu(t)){for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!==void 0&&tr(e,t,T,l,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(l=a[s],l!=null&&he(e,t,s,l,a,null))}function Fh(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,i=null,c=null,s=null,h=null,j=null,T=null;for(A in a){var C=a[A];if(a.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":h=C;default:l.hasOwnProperty(A)||he(e,t,A,null,l,C)}}for(var N in l){var A=l[N];if(C=a[N],l.hasOwnProperty(N)&&(A!=null||C!=null))switch(N){case"type":i=A;break;case"name":n=A;break;case"checked":j=A;break;case"defaultChecked":T=A;break;case"value":c=A;break;case"defaultValue":s=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:A!==C&&he(e,t,N,A,l,C)}}pu(e,c,s,h,j,T,i,n);return;case"select":A=c=s=N=null;for(i in a)if(h=a[i],a.hasOwnProperty(i)&&h!=null)switch(i){case"value":break;case"multiple":A=h;default:l.hasOwnProperty(i)||he(e,t,i,null,l,h)}for(n in l)if(i=l[n],h=a[n],l.hasOwnProperty(n)&&(i!=null||h!=null))switch(n){case"value":N=i;break;case"defaultValue":s=i;break;case"multiple":c=i;default:i!==h&&he(e,t,n,i,l,h)}t=s,a=c,l=A,N!=null?$a(e,!!a,N,!1):!!l!=!!a&&(t!=null?$a(e,!!a,t,!0):$a(e,!!a,a?[]:"",!1));return;case"textarea":A=N=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!l.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:he(e,t,s,null,l,n)}for(c in l)if(n=l[c],i=a[c],l.hasOwnProperty(c)&&(n!=null||i!=null))switch(c){case"value":N=n;break;case"defaultValue":A=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(o(91));break;default:n!==i&&he(e,t,c,n,l,i)}Pr(e,N,A);return;case"option":for(var F in a)if(N=a[F],a.hasOwnProperty(F)&&N!=null&&!l.hasOwnProperty(F))switch(F){case"selected":e.selected=!1;break;default:he(e,t,F,null,l,N)}for(h in l)if(N=l[h],A=a[h],l.hasOwnProperty(h)&&N!==A&&(N!=null||A!=null))switch(h){case"selected":e.selected=N&&typeof N!="function"&&typeof N!="symbol";break;default:he(e,t,h,N,l,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var J in a)N=a[J],a.hasOwnProperty(J)&&N!=null&&!l.hasOwnProperty(J)&&he(e,t,J,null,l,N);for(j in l)if(N=l[j],A=a[j],l.hasOwnProperty(j)&&N!==A&&(N!=null||A!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(N!=null)throw Error(o(137,t));break;default:he(e,t,j,N,l,A)}return;default:if(gu(t)){for(var pe in a)N=a[pe],a.hasOwnProperty(pe)&&N!==void 0&&!l.hasOwnProperty(pe)&&tr(e,t,pe,void 0,l,N);for(T in l)N=l[T],A=a[T],!l.hasOwnProperty(T)||N===A||N===void 0&&A===void 0||tr(e,t,T,N,l,A);return}}for(var x in a)N=a[x],a.hasOwnProperty(x)&&N!=null&&!l.hasOwnProperty(x)&&he(e,t,x,null,l,N);for(C in l)N=l[C],A=a[C],!l.hasOwnProperty(C)||N===A||N==null&&A==null||he(e,t,C,N,l,A)}var ar=null,lr=null;function Bi(e){return e.nodeType===9?e:e.ownerDocument}function ad(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ld(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function nr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ir=null;function Ph(){var e=window.event;return e&&e.type==="popstate"?e===ir?!1:(ir=e,!0):(ir=null,!1)}var nd=typeof setTimeout=="function"?setTimeout:void 0,Ih=typeof clearTimeout=="function"?clearTimeout:void 0,id=typeof Promise=="function"?Promise:void 0,ep=typeof queueMicrotask=="function"?queueMicrotask:typeof id<"u"?function(e){return id.resolve(null).then(e).catch(tp)}:nd;function tp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function ud(e,t){var a=t,l=0,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(0<l&&8>l){a=l;var c=e.ownerDocument;if(a&1&&xn(c.documentElement),a&2&&xn(c.body),a&4)for(a=c.head,xn(a),c=a.firstChild;c;){var s=c.nextSibling,h=c.nodeName;c[_l]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=s}}if(n===0){e.removeChild(i),Tn(t);return}n--}else a==="$"||a==="$?"||a==="$!"?n++:l=a.charCodeAt(0)-48;else l=0;a=i}while(a);Tn(t)}function ur(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ur(a),fu(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ap(e,t,a,l){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[_l])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=Et(e.nextSibling),e===null)break}return null}function lp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Et(e.nextSibling),e===null))return null;return e}function cr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function np(e,t){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Et(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="F!"||t==="F")break;if(t==="/$")return null}}return e}var rr=null;function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(t===0)return e;t--}else a==="/$"&&t++}e=e.previousSibling}return null}function rd(e,t,a){switch(t=Bi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function xn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);fu(e)}var bt=new Map,sd=new Set;function Yi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=Y.d;Y.d={f:ip,r:up,D:cp,C:rp,L:sp,m:op,X:dp,S:fp,M:mp};function ip(){var e=Kt.f(),t=Mi();return e||t}function up(e){var t=Va(e);t!==null&&t.tag===5&&t.type==="form"?Ro(t):Kt.r(e)}var Al=typeof document>"u"?null:document;function od(e,t,a){var l=Al;if(l&&typeof t=="string"&&t){var n=mt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),sd.has(n)||(sd.add(n),e={rel:e,crossOrigin:a,href:t},l.querySelector(n)===null&&(t=l.createElement("link"),Ge(t,"link",e),qe(t),l.head.appendChild(t)))}}function cp(e){Kt.D(e),od("dns-prefetch",e,null)}function rp(e,t){Kt.C(e,t),od("preconnect",e,t)}function sp(e,t,a){Kt.L(e,t,a);var l=Al;if(l&&e&&t){var n='link[rel="preload"][as="'+mt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+mt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+mt(a.imageSizes)+'"]')):n+='[href="'+mt(e)+'"]';var i=n;switch(t){case"style":i=zl(e);break;case"script":i=Tl(e)}bt.has(i)||(e=z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),bt.set(i,e),l.querySelector(n)!==null||t==="style"&&l.querySelector(bn(i))||t==="script"&&l.querySelector(Sn(i))||(t=l.createElement("link"),Ge(t,"link",e),qe(t),l.head.appendChild(t)))}}function op(e,t){Kt.m(e,t);var a=Al;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+mt(l)+'"][href="'+mt(e)+'"]',i=n;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Tl(e)}if(!bt.has(i)&&(e=z({rel:"modulepreload",href:e},t),bt.set(i,e),a.querySelector(n)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sn(i)))return}l=a.createElement("link"),Ge(l,"link",e),qe(l),a.head.appendChild(l)}}}function fp(e,t,a){Kt.S(e,t,a);var l=Al;if(l&&e){var n=Ka(l).hoistableStyles,i=zl(e);t=t||"default";var c=n.get(i);if(!c){var s={loading:0,preload:null};if(c=l.querySelector(bn(i)))s.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=bt.get(i))&&sr(e,a);var h=c=l.createElement("link");qe(h),Ge(h,"link",e),h._p=new Promise(function(j,T){h.onload=j,h.onerror=T}),h.addEventListener("load",function(){s.loading|=1}),h.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Li(c,t,l)}c={type:"stylesheet",instance:c,count:1,state:s},n.set(i,c)}}}function dp(e,t){Kt.X(e,t);var a=Al;if(a&&e){var l=Ka(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=z({src:e,async:!0},t),(t=bt.get(n))&&or(e,t),i=a.createElement("script"),qe(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function mp(e,t){Kt.M(e,t);var a=Al;if(a&&e){var l=Ka(a).hoistableScripts,n=Tl(e),i=l.get(n);i||(i=a.querySelector(Sn(n)),i||(e=z({src:e,async:!0,type:"module"},t),(t=bt.get(n))&&or(e,t),i=a.createElement("script"),qe(i),Ge(i,"link",e),a.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(n,i))}}function fd(e,t,a,l){var n=(n=ee.current)?Yi(n):null;if(!n)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=zl(a.href),a=Ka(n).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=zl(a.href);var i=Ka(n).hoistableStyles,c=i.get(e);if(c||(n=n.ownerDocument||n,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,c),(i=n.querySelector(bn(e)))&&!i._p&&(c.instance=i,c.state.loading=5),bt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},bt.set(e,a),i||hp(n,e,a,c.state))),t&&l===null)throw Error(o(528,""));return c}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tl(a),a=Ka(n).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function zl(e){return'href="'+mt(e)+'"'}function bn(e){return'link[rel="stylesheet"]['+e+"]"}function dd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function hp(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Ge(t,"link",a),qe(t),e.head.appendChild(t))}function Tl(e){return'[src="'+mt(e)+'"]'}function Sn(e){return"script[async]"+e}function md(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+mt(a.href)+'"]');if(l)return t.instance=l,qe(l),l;var n=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),qe(l),Ge(l,"style",n),Li(l,a.precedence,e),t.instance=l;case"stylesheet":n=zl(a.href);var i=e.querySelector(bn(n));if(i)return t.state.loading|=4,t.instance=i,qe(i),i;l=dd(a),(n=bt.get(n))&&sr(l,n),i=(e.ownerDocument||e).createElement("link"),qe(i);var c=i;return c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Ge(i,"link",l),t.state.loading|=4,Li(i,a.precedence,e),t.instance=i;case"script":return i=Tl(a.src),(n=e.querySelector(Sn(i)))?(t.instance=n,qe(n),n):(l=a,(n=bt.get(i))&&(l=z({},a),or(l,n)),e=e.ownerDocument||e,n=e.createElement("script"),qe(n),Ge(n,"link",l),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,Li(l,a.precedence,e));return t.instance}function Li(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=l.length?l[l.length-1]:null,i=n,c=0;c<l.length;c++){var s=l[c];if(s.dataset.precedence===t)i=s;else if(i!==n)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function sr(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function or(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Gi=null;function hd(e,t,a){if(Gi===null){var l=new Map,n=Gi=new Map;n.set(a,l)}else n=Gi,l=n.get(a),l||(l=new Map,n.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var i=a[n];if(!(i[_l]||i[Ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var c=i.getAttribute(t)||"";c=e+c;var s=l.get(c);s?s.push(i):l.set(c,[i])}}return l}function pd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function pp(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function vd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var jn=null;function vp(){}function gp(e,t,a){if(jn===null)throw Error(o(475));var l=jn;if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var n=zl(a.href),i=e.querySelector(bn(n));if(i){e=i._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(l.count++,l=Xi.bind(l),e.then(l,l)),t.state.loading|=4,t.instance=i,qe(i);return}i=e.ownerDocument||e,a=dd(a),(n=bt.get(n))&&sr(a,n),i=i.createElement("link"),qe(i);var c=i;c._p=new Promise(function(s,h){c.onload=s,c.onerror=h}),Ge(i,"link",a),t.instance=i}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(t,e),(e=t.state.preload)&&(t.state.loading&3)===0&&(l.count++,t=Xi.bind(l),e.addEventListener("load",t),e.addEventListener("error",t))}}function yp(){if(jn===null)throw Error(o(475));var e=jn;return e.stylesheets&&e.count===0&&fr(e,e.stylesheets),0<e.count?function(t){var a=setTimeout(function(){if(e.stylesheets&&fr(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Xi(){if(this.count--,this.count===0){if(this.stylesheets)fr(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Qi=null;function fr(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Qi=new Map,t.forEach(xp,e),Qi=null,Xi.call(e))}function xp(e,t){if(!(t.state.loading&4)){var a=Qi.get(e);if(a)var l=a.get(null);else{a=new Map,Qi.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<n.length;i++){var c=n[i];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),l=c)}l&&a.set(null,l)}n=t.instance,c=n.getAttribute("data-precedence"),i=a.get(c)||l,i===l&&a.set(null,n),a.set(c,n),this.count++,l=Xi.bind(this),n.addEventListener("load",l),n.addEventListener("error",l),i?i.parentNode.insertBefore(n,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var En={$$typeof:P,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function bp(e,t,a,l,n,i,c,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=cu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.hiddenUpdates=cu(null),this.identifierPrefix=l,this.onUncaughtError=n,this.onCaughtError=i,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function gd(e,t,a,l,n,i,c,s,h,j,T,C){return e=new bp(e,t,a,c,s,h,j,C),t=1,i===!0&&(t|=24),i=it(3,null,null,t),e.current=i,i.stateNode=e,t=Ku(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:a,cache:t},Wu(i),e}function yd(e){return e?(e=nl,e):nl}function xd(e,t,a,l,n,i){n=yd(n),l.context===null?l.context=n:l.pendingContext=n,l=aa(t),l.payload={element:a},i=i===void 0?null:i,i!==null&&(l.callback=i),a=la(e,l,t),a!==null&&(ot(a,e,t),Pl(a,e,t))}function bd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function dr(e,t){bd(e,t),(e=e.alternate)&&bd(e,t)}function Sd(e){if(e.tag===13){var t=ll(e,67108864);t!==null&&ot(t,e,67108864),dr(e,67108864)}}var Zi=!0;function Sp(e,t,a,l){var n=R.T;R.T=null;var i=Y.p;try{Y.p=2,mr(e,t,a,l)}finally{Y.p=i,R.T=n}}function jp(e,t,a,l){var n=R.T;R.T=null;var i=Y.p;try{Y.p=8,mr(e,t,a,l)}finally{Y.p=i,R.T=n}}function mr(e,t,a,l){if(Zi){var n=hr(l);if(n===null)er(e,t,l,Vi,a),Ed(e,l);else if(Np(n,e,t,a,l))l.stopPropagation();else if(Ed(e,l),t&4&&-1<Ep.indexOf(e)){for(;n!==null;){var i=Va(n);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var c=Na(i.pendingLanes);if(c!==0){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;c;){var h=1<<31-lt(c);s.entanglements[1]|=h,c&=~h}Ot(i),(fe&6)===0&&(Ri=Nt()+500,vn(0))}}break;case 13:s=ll(i,2),s!==null&&ot(s,i,2),Mi(),dr(i,2)}if(i=hr(l),i===null&&er(e,t,l,Vi,a),i===n)break;n=i}n!==null&&l.stopPropagation()}else er(e,t,l,null,a)}}function hr(e){return e=xu(e),pr(e)}var Vi=null;function pr(e){if(Vi=null,e=Za(e),e!==null){var t=y(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=E(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Vi=e,null}function jd(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(rm()){case Ur:return 2;case qr:return 8;case wn:case sm:return 32;case Hr:return 268435456;default:return 32}default:return 32}}var vr=!1,va=null,ga=null,ya=null,Nn=new Map,An=new Map,xa=[],Ep="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ed(e,t){switch(e){case"focusin":case"focusout":va=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":Nn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function zn(e,t,a,l,n,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:i,targetContainers:[n]},t!==null&&(t=Va(t),t!==null&&Sd(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Np(e,t,a,l,n){switch(t){case"focusin":return va=zn(va,e,t,a,l,n),!0;case"dragenter":return ga=zn(ga,e,t,a,l,n),!0;case"mouseover":return ya=zn(ya,e,t,a,l,n),!0;case"pointerover":var i=n.pointerId;return Nn.set(i,zn(Nn.get(i)||null,e,t,a,l,n)),!0;case"gotpointercapture":return i=n.pointerId,An.set(i,zn(An.get(i)||null,e,t,a,l,n)),!0}return!1}function Nd(e){var t=Za(e.target);if(t!==null){var a=y(t);if(a!==null){if(t=a.tag,t===13){if(t=E(a),t!==null){e.blockedOn=t,gm(e.priority,function(){if(a.tag===13){var l=st();l=ru(l);var n=ll(a,l);n!==null&&ot(n,a,l),dr(a,l)}});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ki(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=hr(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);yu=l,a.target.dispatchEvent(l),yu=null}else return t=Va(a),t!==null&&Sd(t),e.blockedOn=a,!1;t.shift()}return!0}function Ad(e,t,a){Ki(e)&&a.delete(t)}function Ap(){vr=!1,va!==null&&Ki(va)&&(va=null),ga!==null&&Ki(ga)&&(ga=null),ya!==null&&Ki(ya)&&(ya=null),Nn.forEach(Ad),An.forEach(Ad)}function ki(e,t){e.blockedOn===t&&(e.blockedOn=null,vr||(vr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ap)))}var Ji=null;function zd(e){Ji!==e&&(Ji=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ji===e&&(Ji=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],n=e[t+2];if(typeof l!="function"){if(pr(l||a)===null)continue;break}var i=Va(a);i!==null&&(e.splice(t,3),t-=3,pc(i,{pending:!0,data:n,method:a.method,action:l},l,n))}}))}function Tn(e){function t(h){return ki(h,e)}va!==null&&ki(va,e),ga!==null&&ki(ga,e),ya!==null&&ki(ya,e),Nn.forEach(t),An.forEach(t);for(var a=0;a<xa.length;a++){var l=xa[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<xa.length&&(a=xa[0],a.blockedOn===null);)Nd(a),a.blockedOn===null&&xa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var n=a[l],i=a[l+1],c=n[$e]||null;if(typeof i=="function")c||zd(a);else if(c){var s=null;if(i&&i.hasAttribute("formAction")){if(n=i,c=i[$e]||null)s=c.formAction;else if(pr(n)!==null)continue}else s=c.action;typeof s=="function"?a[l+1]=s:(a.splice(l,3),l-=3),zd(a)}}}function gr(e){this._internalRoot=e}$i.prototype.render=gr.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=st();xd(a,l,e,t,null,null)},$i.prototype.unmount=gr.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;xd(e.current,2,null,e,null,null),Mi(),t[Qa]=null}};function $i(e){this._internalRoot=e}$i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<xa.length&&t!==0&&t<xa[a].priority;a++);xa.splice(a,0,e),a===0&&Nd(e)}};var Td=f.version;if(Td!=="19.1.0")throw Error(o(527,Td,"19.1.0"));Y.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=b(t),e=e!==null?p(e):null,e=e===null?null:e.stateNode,e};var zp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:R,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{Ml=Wi.inject(zp),at=Wi}catch{}}return On.createRoot=function(e,t){if(!d(e))throw Error(o(299));var a=!1,l="",n=Xo,i=Qo,c=Zo,s=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.unstable_transitionCallbacks!==void 0&&(s=t.unstable_transitionCallbacks)),t=gd(e,1,!1,null,null,a,l,n,i,c,s,null),e[Qa]=t.current,Ic(e),new gr(t)},On.hydrateRoot=function(e,t,a){if(!d(e))throw Error(o(299));var l=!1,n="",i=Xo,c=Qo,s=Zo,h=null,j=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(i=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(h=a.unstable_transitionCallbacks),a.formState!==void 0&&(j=a.formState)),t=gd(e,1,!0,t,a??null,l,n,i,c,s,h,j),t.context=yd(null),a=t.current,l=st(),l=ru(l),n=aa(l),n.callback=null,la(a,n,l),a=l,t.current.lanes=a,Cl(t,a),Ot(t),e[Qa]=t.current,Ic(e),new $i(t)},On.version="19.1.0",On}var wd;function Hp(){if(wd)return br.exports;wd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(f){console.error(f)}}return r(),br.exports=qp(),br.exports}var wp=Hp(),Mn={},Bd;function Bp(){if(Bd)return Mn;Bd=1,Object.defineProperty(Mn,"__esModule",{value:!0}),Mn.parse=E,Mn.serialize=p;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,f=/^[\u0021-\u003A\u003C-\u007E]*$/,m=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,o=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,y=(()=>{const _=function(){};return _.prototype=Object.create(null),_})();function E(_,Q){const q=new y,G=_.length;if(G<2)return q;const V=(Q==null?void 0:Q.decode)||z;let w=0;do{const Z=_.indexOf("=",w);if(Z===-1)break;const P=_.indexOf(";",w),ce=P===-1?G:P;if(Z>ce){w=_.lastIndexOf(";",Z-1)+1;continue}const I=D(_,w,Z),Me=b(_,Z,I),Ne=_.slice(I,Me);if(q[Ne]===void 0){let Te=D(_,Z+1,ce),xe=b(_,ce,Te);const ke=V(_.slice(Te,xe));q[Ne]=ke}w=ce+1}while(w<G);return q}function D(_,Q,q){do{const G=_.charCodeAt(Q);if(G!==32&&G!==9)return Q}while(++Q<q);return q}function b(_,Q,q){for(;Q>q;){const G=_.charCodeAt(--Q);if(G!==32&&G!==9)return Q+1}return q}function p(_,Q,q){const G=(q==null?void 0:q.encode)||encodeURIComponent;if(!r.test(_))throw new TypeError(`argument name is invalid: ${_}`);const V=G(Q);if(!f.test(V))throw new TypeError(`argument val is invalid: ${Q}`);let w=_+"="+V;if(!q)return w;if(q.maxAge!==void 0){if(!Number.isInteger(q.maxAge))throw new TypeError(`option maxAge is invalid: ${q.maxAge}`);w+="; Max-Age="+q.maxAge}if(q.domain){if(!m.test(q.domain))throw new TypeError(`option domain is invalid: ${q.domain}`);w+="; Domain="+q.domain}if(q.path){if(!o.test(q.path))throw new TypeError(`option path is invalid: ${q.path}`);w+="; Path="+q.path}if(q.expires){if(!H(q.expires)||!Number.isFinite(q.expires.valueOf()))throw new TypeError(`option expires is invalid: ${q.expires}`);w+="; Expires="+q.expires.toUTCString()}if(q.httpOnly&&(w+="; HttpOnly"),q.secure&&(w+="; Secure"),q.partitioned&&(w+="; Partitioned"),q.priority)switch(typeof q.priority=="string"?q.priority.toLowerCase():void 0){case"low":w+="; Priority=Low";break;case"medium":w+="; Priority=Medium";break;case"high":w+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${q.priority}`)}if(q.sameSite)switch(typeof q.sameSite=="string"?q.sameSite.toLowerCase():q.sameSite){case!0:case"strict":w+="; SameSite=Strict";break;case"lax":w+="; SameSite=Lax";break;case"none":w+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${q.sameSite}`)}return w}function z(_){if(_.indexOf("%")===-1)return _;try{return decodeURIComponent(_)}catch{return _}}function H(_){return d.call(_)==="[object Date]"}return Mn}Bp();var Yd="popstate";function Yp(r={}){function f(o,d){let{pathname:y,search:E,hash:D}=o.location;return zr("",{pathname:y,search:E,hash:D},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function m(o,d){return typeof d=="string"?d:Cn(d)}return Gp(f,m,null,r)}function Ee(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}function Mt(r,f){if(!r){typeof console<"u"&&console.warn(f);try{throw new Error(f)}catch{}}}function Lp(){return Math.random().toString(36).substring(2,10)}function Ld(r,f){return{usr:r.state,key:r.key,idx:f}}function zr(r,f,m=null,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof f=="string"?Rl(f):f,state:m,key:f&&f.key||o||Lp()}}function Cn({pathname:r="/",search:f="",hash:m=""}){return f&&f!=="?"&&(r+=f.charAt(0)==="?"?f:"?"+f),m&&m!=="#"&&(r+=m.charAt(0)==="#"?m:"#"+m),r}function Rl(r){let f={};if(r){let m=r.indexOf("#");m>=0&&(f.hash=r.substring(m),r=r.substring(0,m));let o=r.indexOf("?");o>=0&&(f.search=r.substring(o),r=r.substring(0,o)),r&&(f.pathname=r)}return f}function Gp(r,f,m,o={}){let{window:d=document.defaultView,v5Compat:y=!1}=o,E=d.history,D="POP",b=null,p=z();p==null&&(p=0,E.replaceState({...E.state,idx:p},""));function z(){return(E.state||{idx:null}).idx}function H(){D="POP";let V=z(),w=V==null?null:V-p;p=V,b&&b({action:D,location:G.location,delta:w})}function _(V,w){D="PUSH";let Z=zr(G.location,V,w);p=z()+1;let P=Ld(Z,p),ce=G.createHref(Z);try{E.pushState(P,"",ce)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;d.location.assign(ce)}y&&b&&b({action:D,location:G.location,delta:1})}function Q(V,w){D="REPLACE";let Z=zr(G.location,V,w);p=z();let P=Ld(Z,p),ce=G.createHref(Z);E.replaceState(P,"",ce),y&&b&&b({action:D,location:G.location,delta:0})}function q(V){return Xp(V)}let G={get action(){return D},get location(){return r(d,E)},listen(V){if(b)throw new Error("A history only accepts one active listener");return d.addEventListener(Yd,H),b=V,()=>{d.removeEventListener(Yd,H),b=null}},createHref(V){return f(d,V)},createURL:q,encodeLocation(V){let w=q(V);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:_,replace:Q,go(V){return E.go(V)}};return G}function Xp(r,f=!1){let m="http://localhost";typeof window<"u"&&(m=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(m,"No window.location.(origin|href) available to create URL");let o=typeof r=="string"?r:Cn(r);return o=o.replace(/ $/,"%20"),!f&&o.startsWith("//")&&(o=m+o),new URL(o,m)}function Zd(r,f,m="/"){return Qp(r,f,m,!1)}function Qp(r,f,m,o){let d=typeof f=="string"?Rl(f):f,y=Jt(d.pathname||"/",m);if(y==null)return null;let E=Vd(r);Zp(E);let D=null;for(let b=0;D==null&&b<E.length;++b){let p=tv(y);D=Ip(E[b],p,o)}return D}function Vd(r,f=[],m=[],o=""){let d=(y,E,D)=>{let b={relativePath:D===void 0?y.path||"":D,caseSensitive:y.caseSensitive===!0,childrenIndex:E,route:y};b.relativePath.startsWith("/")&&(Ee(b.relativePath.startsWith(o),`Absolute route path "${b.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),b.relativePath=b.relativePath.slice(o.length));let p=kt([o,b.relativePath]),z=m.concat(b);y.children&&y.children.length>0&&(Ee(y.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Vd(y.children,f,z,p)),!(y.path==null&&!y.index)&&f.push({path:p,score:Fp(p,y.index),routesMeta:z})};return r.forEach((y,E)=>{var D;if(y.path===""||!((D=y.path)!=null&&D.includes("?")))d(y,E);else for(let b of Kd(y.path))d(y,E,b)}),f}function Kd(r){let f=r.split("/");if(f.length===0)return[];let[m,...o]=f,d=m.endsWith("?"),y=m.replace(/\?$/,"");if(o.length===0)return d?[y,""]:[y];let E=Kd(o.join("/")),D=[];return D.push(...E.map(b=>b===""?y:[y,b].join("/"))),d&&D.push(...E),D.map(b=>r.startsWith("/")&&b===""?"/":b)}function Zp(r){r.sort((f,m)=>f.score!==m.score?m.score-f.score:Pp(f.routesMeta.map(o=>o.childrenIndex),m.routesMeta.map(o=>o.childrenIndex)))}var Vp=/^:[\w-]+$/,Kp=3,kp=2,Jp=1,$p=10,Wp=-2,Gd=r=>r==="*";function Fp(r,f){let m=r.split("/"),o=m.length;return m.some(Gd)&&(o+=Wp),f&&(o+=kp),m.filter(d=>!Gd(d)).reduce((d,y)=>d+(Vp.test(y)?Kp:y===""?Jp:$p),o)}function Pp(r,f){return r.length===f.length&&r.slice(0,-1).every((o,d)=>o===f[d])?r[r.length-1]-f[f.length-1]:0}function Ip(r,f,m=!1){let{routesMeta:o}=r,d={},y="/",E=[];for(let D=0;D<o.length;++D){let b=o[D],p=D===o.length-1,z=y==="/"?f:f.slice(y.length)||"/",H=eu({path:b.relativePath,caseSensitive:b.caseSensitive,end:p},z),_=b.route;if(!H&&p&&m&&!o[o.length-1].route.index&&(H=eu({path:b.relativePath,caseSensitive:b.caseSensitive,end:!1},z)),!H)return null;Object.assign(d,H.params),E.push({params:d,pathname:kt([y,H.pathname]),pathnameBase:iv(kt([y,H.pathnameBase])),route:_}),H.pathnameBase!=="/"&&(y=kt([y,H.pathnameBase]))}return E}function eu(r,f){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[m,o]=ev(r.path,r.caseSensitive,r.end),d=f.match(m);if(!d)return null;let y=d[0],E=y.replace(/(.)\/+$/,"$1"),D=d.slice(1);return{params:o.reduce((p,{paramName:z,isOptional:H},_)=>{if(z==="*"){let q=D[_]||"";E=y.slice(0,y.length-q.length).replace(/(.)\/+$/,"$1")}const Q=D[_];return H&&!Q?p[z]=void 0:p[z]=(Q||"").replace(/%2F/g,"/"),p},{}),pathname:y,pathnameBase:E,pattern:r}}function ev(r,f=!1,m=!0){Mt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let o=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(E,D,b)=>(o.push({paramName:D,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(o.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):m?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,f?void 0:"i"),o]}function tv(r){try{return r.split("/").map(f=>decodeURIComponent(f).replace(/\//g,"%2F")).join("/")}catch(f){return Mt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${f}).`),r}}function Jt(r,f){if(f==="/")return r;if(!r.toLowerCase().startsWith(f.toLowerCase()))return null;let m=f.endsWith("/")?f.length-1:f.length,o=r.charAt(m);return o&&o!=="/"?null:r.slice(m)||"/"}function av(r,f="/"){let{pathname:m,search:o="",hash:d=""}=typeof r=="string"?Rl(r):r;return{pathname:m?m.startsWith("/")?m:lv(m,f):f,search:uv(o),hash:cv(d)}}function lv(r,f){let m=f.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?m.length>1&&m.pop():d!=="."&&m.push(d)}),m.length>1?m.join("/"):"/"}function Nr(r,f,m,o){return`Cannot include a '${r}' character in a manually specified \`to.${f}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${m}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function nv(r){return r.filter((f,m)=>m===0||f.route.path&&f.route.path.length>0)}function kd(r){let f=nv(r);return f.map((m,o)=>o===f.length-1?m.pathname:m.pathnameBase)}function Jd(r,f,m,o=!1){let d;typeof r=="string"?d=Rl(r):(d={...r},Ee(!d.pathname||!d.pathname.includes("?"),Nr("?","pathname","search",d)),Ee(!d.pathname||!d.pathname.includes("#"),Nr("#","pathname","hash",d)),Ee(!d.search||!d.search.includes("#"),Nr("#","search","hash",d)));let y=r===""||d.pathname==="",E=y?"/":d.pathname,D;if(E==null)D=m;else{let H=f.length-1;if(!o&&E.startsWith("..")){let _=E.split("/");for(;_[0]==="..";)_.shift(),H-=1;d.pathname=_.join("/")}D=H>=0?f[H]:"/"}let b=av(d,D),p=E&&E!=="/"&&E.endsWith("/"),z=(y||E===".")&&m.endsWith("/");return!b.pathname.endsWith("/")&&(p||z)&&(b.pathname+="/"),b}var kt=r=>r.join("/").replace(/\/\/+/g,"/"),iv=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),uv=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,cv=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function rv(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var $d=["POST","PUT","PATCH","DELETE"];new Set($d);var sv=["GET",...$d];new Set(sv);var Ol=M.createContext(null);Ol.displayName="DataRouter";var tu=M.createContext(null);tu.displayName="DataRouterState";var Wd=M.createContext({isTransitioning:!1});Wd.displayName="ViewTransition";var ov=M.createContext(new Map);ov.displayName="Fetchers";var fv=M.createContext(null);fv.displayName="Await";var Dt=M.createContext(null);Dt.displayName="Navigation";var _n=M.createContext(null);_n.displayName="Location";var $t=M.createContext({outlet:null,matches:[],isDataRoute:!1});$t.displayName="Route";var Or=M.createContext(null);Or.displayName="RouteError";function dv(r,{relative:f}={}){Ee(Un(),"useHref() may be used only in the context of a <Router> component.");let{basename:m,navigator:o}=M.useContext(Dt),{hash:d,pathname:y,search:E}=qn(r,{relative:f}),D=y;return m!=="/"&&(D=y==="/"?m:kt([m,y])),o.createHref({pathname:D,search:E,hash:d})}function Un(){return M.useContext(_n)!=null}function Sa(){return Ee(Un(),"useLocation() may be used only in the context of a <Router> component."),M.useContext(_n).location}var Fd="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Pd(r){M.useContext(Dt).static||M.useLayoutEffect(r)}function mv(){let{isDataRoute:r}=M.useContext($t);return r?zv():hv()}function hv(){Ee(Un(),"useNavigate() may be used only in the context of a <Router> component.");let r=M.useContext(Ol),{basename:f,navigator:m}=M.useContext(Dt),{matches:o}=M.useContext($t),{pathname:d}=Sa(),y=JSON.stringify(kd(o)),E=M.useRef(!1);return Pd(()=>{E.current=!0}),M.useCallback((b,p={})=>{if(Mt(E.current,Fd),!E.current)return;if(typeof b=="number"){m.go(b);return}let z=Jd(b,JSON.parse(y),d,p.relative==="path");r==null&&f!=="/"&&(z.pathname=z.pathname==="/"?f:kt([f,z.pathname])),(p.replace?m.replace:m.push)(z,p.state,p)},[f,m,y,d,r])}M.createContext(null);function qn(r,{relative:f}={}){let{matches:m}=M.useContext($t),{pathname:o}=Sa(),d=JSON.stringify(kd(m));return M.useMemo(()=>Jd(r,JSON.parse(d),o,f==="path"),[r,d,o,f])}function pv(r,f){return Id(r,f)}function Id(r,f,m,o){var w;Ee(Un(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d}=M.useContext(Dt),{matches:y}=M.useContext($t),E=y[y.length-1],D=E?E.params:{},b=E?E.pathname:"/",p=E?E.pathnameBase:"/",z=E&&E.route;{let Z=z&&z.path||"";em(b,!z||Z.endsWith("*")||Z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${b}" (under <Route path="${Z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Z}"> to <Route path="${Z==="/"?"*":`${Z}/*`}">.`)}let H=Sa(),_;if(f){let Z=typeof f=="string"?Rl(f):f;Ee(p==="/"||((w=Z.pathname)==null?void 0:w.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${Z.pathname}" was given in the \`location\` prop.`),_=Z}else _=H;let Q=_.pathname||"/",q=Q;if(p!=="/"){let Z=p.replace(/^\//,"").split("/");q="/"+Q.replace(/^\//,"").split("/").slice(Z.length).join("/")}let G=Zd(r,{pathname:q});Mt(z||G!=null,`No routes matched location "${_.pathname}${_.search}${_.hash}" `),Mt(G==null||G[G.length-1].route.element!==void 0||G[G.length-1].route.Component!==void 0||G[G.length-1].route.lazy!==void 0,`Matched leaf route at location "${_.pathname}${_.search}${_.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let V=bv(G&&G.map(Z=>Object.assign({},Z,{params:Object.assign({},D,Z.params),pathname:kt([p,d.encodeLocation?d.encodeLocation(Z.pathname).pathname:Z.pathname]),pathnameBase:Z.pathnameBase==="/"?p:kt([p,d.encodeLocation?d.encodeLocation(Z.pathnameBase).pathname:Z.pathnameBase])})),y,m,o);return f&&V?M.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",..._},navigationType:"POP"}},V):V}function vv(){let r=Av(),f=rv(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),m=r instanceof Error?r.stack:null,o="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:o},y={padding:"2px 4px",backgroundColor:o},E=null;return console.error("Error handled by React Router default ErrorBoundary:",r),E=M.createElement(M.Fragment,null,M.createElement("p",null,"💿 Hey developer 👋"),M.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",M.createElement("code",{style:y},"ErrorBoundary")," or"," ",M.createElement("code",{style:y},"errorElement")," prop on your route.")),M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},f),m?M.createElement("pre",{style:d},m):null,E)}var gv=M.createElement(vv,null),yv=class extends M.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,f){return f.location!==r.location||f.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:f.error,location:f.location,revalidation:r.revalidation||f.revalidation}}componentDidCatch(r,f){console.error("React Router caught the following error during render",r,f)}render(){return this.state.error!==void 0?M.createElement($t.Provider,{value:this.props.routeContext},M.createElement(Or.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xv({routeContext:r,match:f,children:m}){let o=M.useContext(Ol);return o&&o.static&&o.staticContext&&(f.route.errorElement||f.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=f.route.id),M.createElement($t.Provider,{value:r},m)}function bv(r,f=[],m=null,o=null){if(r==null){if(!m)return null;if(m.errors)r=m.matches;else if(f.length===0&&!m.initialized&&m.matches.length>0)r=m.matches;else return null}let d=r,y=m==null?void 0:m.errors;if(y!=null){let b=d.findIndex(p=>p.route.id&&(y==null?void 0:y[p.route.id])!==void 0);Ee(b>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(y).join(",")}`),d=d.slice(0,Math.min(d.length,b+1))}let E=!1,D=-1;if(m)for(let b=0;b<d.length;b++){let p=d[b];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(D=b),p.route.id){let{loaderData:z,errors:H}=m,_=p.route.loader&&!z.hasOwnProperty(p.route.id)&&(!H||H[p.route.id]===void 0);if(p.route.lazy||_){E=!0,D>=0?d=d.slice(0,D+1):d=[d[0]];break}}}return d.reduceRight((b,p,z)=>{let H,_=!1,Q=null,q=null;m&&(H=y&&p.route.id?y[p.route.id]:void 0,Q=p.route.errorElement||gv,E&&(D<0&&z===0?(em("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),_=!0,q=null):D===z&&(_=!0,q=p.route.hydrateFallbackElement||null)));let G=f.concat(d.slice(0,z+1)),V=()=>{let w;return H?w=Q:_?w=q:p.route.Component?w=M.createElement(p.route.Component,null):p.route.element?w=p.route.element:w=b,M.createElement(xv,{match:p,routeContext:{outlet:b,matches:G,isDataRoute:m!=null},children:w})};return m&&(p.route.ErrorBoundary||p.route.errorElement||z===0)?M.createElement(yv,{location:m.location,revalidation:m.revalidation,component:Q,error:H,children:V(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):V()},null)}function Mr(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sv(r){let f=M.useContext(Ol);return Ee(f,Mr(r)),f}function jv(r){let f=M.useContext(tu);return Ee(f,Mr(r)),f}function Ev(r){let f=M.useContext($t);return Ee(f,Mr(r)),f}function Dr(r){let f=Ev(r),m=f.matches[f.matches.length-1];return Ee(m.route.id,`${r} can only be used on routes that contain a unique "id"`),m.route.id}function Nv(){return Dr("useRouteId")}function Av(){var o;let r=M.useContext(Or),f=jv("useRouteError"),m=Dr("useRouteError");return r!==void 0?r:(o=f.errors)==null?void 0:o[m]}function zv(){let{router:r}=Sv("useNavigate"),f=Dr("useNavigate"),m=M.useRef(!1);return Pd(()=>{m.current=!0}),M.useCallback(async(d,y={})=>{Mt(m.current,Fd),m.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:f,...y}))},[r,f])}var Xd={};function em(r,f,m){!f&&!Xd[r]&&(Xd[r]=!0,Mt(!1,m))}M.memo(Tv);function Tv({routes:r,future:f,state:m}){return Id(r,void 0,m,f)}function Xa(r){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Rv({basename:r="/",children:f=null,location:m,navigationType:o="POP",navigator:d,static:y=!1}){Ee(!Un(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=r.replace(/^\/*/,"/"),D=M.useMemo(()=>({basename:E,navigator:d,static:y,future:{}}),[E,d,y]);typeof m=="string"&&(m=Rl(m));let{pathname:b="/",search:p="",hash:z="",state:H=null,key:_="default"}=m,Q=M.useMemo(()=>{let q=Jt(b,E);return q==null?null:{location:{pathname:q,search:p,hash:z,state:H,key:_},navigationType:o}},[E,b,p,z,H,_,o]);return Mt(Q!=null,`<Router basename="${E}"> is not able to match the URL "${b}${p}${z}" because it does not start with the basename, so the <Router> won't render anything.`),Q==null?null:M.createElement(Dt.Provider,{value:D},M.createElement(_n.Provider,{children:f,value:Q}))}function Ov({children:r,location:f}){return pv(Tr(r),f)}function Tr(r,f=[]){let m=[];return M.Children.forEach(r,(o,d)=>{if(!M.isValidElement(o))return;let y=[...f,d];if(o.type===M.Fragment){m.push.apply(m,Tr(o.props.children,y));return}Ee(o.type===Xa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let E={id:o.props.id||y.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(E.children=Tr(o.props.children,y)),m.push(E)}),m}var Pi="get",Ii="application/x-www-form-urlencoded";function au(r){return r!=null&&typeof r.tagName=="string"}function Mv(r){return au(r)&&r.tagName.toLowerCase()==="button"}function Dv(r){return au(r)&&r.tagName.toLowerCase()==="form"}function Cv(r){return au(r)&&r.tagName.toLowerCase()==="input"}function _v(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Uv(r,f){return r.button===0&&(!f||f==="_self")&&!_v(r)}var Fi=null;function qv(){if(Fi===null)try{new FormData(document.createElement("form"),0),Fi=!1}catch{Fi=!0}return Fi}var Hv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ar(r){return r!=null&&!Hv.has(r)?(Mt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ii}"`),null):r}function wv(r,f){let m,o,d,y,E;if(Dv(r)){let D=r.getAttribute("action");o=D?Jt(D,f):null,m=r.getAttribute("method")||Pi,d=Ar(r.getAttribute("enctype"))||Ii,y=new FormData(r)}else if(Mv(r)||Cv(r)&&(r.type==="submit"||r.type==="image")){let D=r.form;if(D==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let b=r.getAttribute("formaction")||D.getAttribute("action");if(o=b?Jt(b,f):null,m=r.getAttribute("formmethod")||D.getAttribute("method")||Pi,d=Ar(r.getAttribute("formenctype"))||Ar(D.getAttribute("enctype"))||Ii,y=new FormData(D,r),!qv()){let{name:p,type:z,value:H}=r;if(z==="image"){let _=p?`${p}.`:"";y.append(`${_}x`,"0"),y.append(`${_}y`,"0")}else p&&y.append(p,H)}}else{if(au(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');m=Pi,o=null,d=Ii,E=r}return y&&d==="text/plain"&&(E=y,y=void 0),{action:o,method:m.toLowerCase(),encType:d,formData:y,body:E}}function Cr(r,f){if(r===!1||r===null||typeof r>"u")throw new Error(f)}async function Bv(r,f){if(r.id in f)return f[r.id];try{let m=await import(r.module);return f[r.id]=m,m}catch(m){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(m),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Yv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function Lv(r,f,m){let o=await Promise.all(r.map(async d=>{let y=f.routes[d.route.id];if(y){let E=await Bv(y,m);return E.links?E.links():[]}return[]}));return Zv(o.flat(1).filter(Yv).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Qd(r,f,m,o,d,y){let E=(b,p)=>m[p]?b.route.id!==m[p].route.id:!0,D=(b,p)=>{var z;return m[p].pathname!==b.pathname||((z=m[p].route.path)==null?void 0:z.endsWith("*"))&&m[p].params["*"]!==b.params["*"]};return y==="assets"?f.filter((b,p)=>E(b,p)||D(b,p)):y==="data"?f.filter((b,p)=>{var H;let z=o.routes[b.route.id];if(!z||!z.hasLoader)return!1;if(E(b,p)||D(b,p))return!0;if(b.route.shouldRevalidate){let _=b.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((H=m[0])==null?void 0:H.params)||{},nextUrl:new URL(r,window.origin),nextParams:b.params,defaultShouldRevalidate:!0});if(typeof _=="boolean")return _}return!0}):[]}function Gv(r,f,{includeHydrateFallback:m}={}){return Xv(r.map(o=>{let d=f.routes[o.route.id];if(!d)return[];let y=[d.module];return d.clientActionModule&&(y=y.concat(d.clientActionModule)),d.clientLoaderModule&&(y=y.concat(d.clientLoaderModule)),m&&d.hydrateFallbackModule&&(y=y.concat(d.hydrateFallbackModule)),d.imports&&(y=y.concat(d.imports)),y}).flat(1))}function Xv(r){return[...new Set(r)]}function Qv(r){let f={},m=Object.keys(r).sort();for(let o of m)f[o]=r[o];return f}function Zv(r,f){let m=new Set;return new Set(f),r.reduce((o,d)=>{let y=JSON.stringify(Qv(d));return m.has(y)||(m.add(y),o.push({key:y,link:d})),o},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Vv=new Set([100,101,204,205]);function Kv(r,f){let m=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return m.pathname==="/"?m.pathname="_root.data":f&&Jt(m.pathname,f)==="/"?m.pathname=`${f.replace(/\/$/,"")}/_root.data`:m.pathname=`${m.pathname.replace(/\/$/,"")}.data`,m}function tm(){let r=M.useContext(Ol);return Cr(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function kv(){let r=M.useContext(tu);return Cr(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var _r=M.createContext(void 0);_r.displayName="FrameworkContext";function am(){let r=M.useContext(_r);return Cr(r,"You must render this element inside a <HydratedRouter> element"),r}function Jv(r,f){let m=M.useContext(_r),[o,d]=M.useState(!1),[y,E]=M.useState(!1),{onFocus:D,onBlur:b,onMouseEnter:p,onMouseLeave:z,onTouchStart:H}=f,_=M.useRef(null);M.useEffect(()=>{if(r==="render"&&E(!0),r==="viewport"){let G=w=>{w.forEach(Z=>{E(Z.isIntersecting)})},V=new IntersectionObserver(G,{threshold:.5});return _.current&&V.observe(_.current),()=>{V.disconnect()}}},[r]),M.useEffect(()=>{if(o){let G=setTimeout(()=>{E(!0)},100);return()=>{clearTimeout(G)}}},[o]);let Q=()=>{d(!0)},q=()=>{d(!1),E(!1)};return m?r!=="intent"?[y,_,{}]:[y,_,{onFocus:Dn(D,Q),onBlur:Dn(b,q),onMouseEnter:Dn(p,Q),onMouseLeave:Dn(z,q),onTouchStart:Dn(H,Q)}]:[!1,_,{}]}function Dn(r,f){return m=>{r&&r(m),m.defaultPrevented||f(m)}}function $v({page:r,...f}){let{router:m}=tm(),o=M.useMemo(()=>Zd(m.routes,r,m.basename),[m.routes,r,m.basename]);return o?M.createElement(Fv,{page:r,matches:o,...f}):null}function Wv(r){let{manifest:f,routeModules:m}=am(),[o,d]=M.useState([]);return M.useEffect(()=>{let y=!1;return Lv(r,f,m).then(E=>{y||d(E)}),()=>{y=!0}},[r,f,m]),o}function Fv({page:r,matches:f,...m}){let o=Sa(),{manifest:d,routeModules:y}=am(),{basename:E}=tm(),{loaderData:D,matches:b}=kv(),p=M.useMemo(()=>Qd(r,f,b,d,o,"data"),[r,f,b,d,o]),z=M.useMemo(()=>Qd(r,f,b,d,o,"assets"),[r,f,b,d,o]),H=M.useMemo(()=>{if(r===o.pathname+o.search+o.hash)return[];let q=new Set,G=!1;if(f.forEach(w=>{var P;let Z=d.routes[w.route.id];!Z||!Z.hasLoader||(!p.some(ce=>ce.route.id===w.route.id)&&w.route.id in D&&((P=y[w.route.id])!=null&&P.shouldRevalidate)||Z.hasClientLoader?G=!0:q.add(w.route.id))}),q.size===0)return[];let V=Kv(r,E);return G&&q.size>0&&V.searchParams.set("_routes",f.filter(w=>q.has(w.route.id)).map(w=>w.route.id).join(",")),[V.pathname+V.search]},[E,D,o,d,p,f,r,y]),_=M.useMemo(()=>Gv(z,d),[z,d]),Q=Wv(z);return M.createElement(M.Fragment,null,H.map(q=>M.createElement("link",{key:q,rel:"prefetch",as:"fetch",href:q,...m})),_.map(q=>M.createElement("link",{key:q,rel:"modulepreload",href:q,...m})),Q.map(({key:q,link:G})=>M.createElement("link",{key:q,...G})))}function Pv(...r){return f=>{r.forEach(m=>{typeof m=="function"?m(f):m!=null&&(m.current=f)})}}var lm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{lm&&(window.__reactRouterVersion="7.6.1")}catch{}function Iv({basename:r,children:f,window:m}){let o=M.useRef();o.current==null&&(o.current=Yp({window:m,v5Compat:!0}));let d=o.current,[y,E]=M.useState({action:d.action,location:d.location}),D=M.useCallback(b=>{M.startTransition(()=>E(b))},[E]);return M.useLayoutEffect(()=>d.listen(D),[d,D]),M.createElement(Rv,{basename:r,children:f,location:y.location,navigationType:y.action,navigator:d})}var nm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,et=M.forwardRef(function({onClick:f,discover:m="render",prefetch:o="none",relative:d,reloadDocument:y,replace:E,state:D,target:b,to:p,preventScrollReset:z,viewTransition:H,..._},Q){let{basename:q}=M.useContext(Dt),G=typeof p=="string"&&nm.test(p),V,w=!1;if(typeof p=="string"&&G&&(V=p,lm))try{let xe=new URL(window.location.href),ke=p.startsWith("//")?new URL(xe.protocol+p):new URL(p),ft=Jt(ke.pathname,q);ke.origin===xe.origin&&ft!=null?p=ft+ke.search+ke.hash:w=!0}catch{Mt(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=dv(p,{relative:d}),[P,ce,I]=Jv(o,_),Me=l0(p,{replace:E,state:D,target:b,preventScrollReset:z,relative:d,viewTransition:H});function Ne(xe){f&&f(xe),xe.defaultPrevented||Me(xe)}let Te=M.createElement("a",{..._,...I,href:V||Z,onClick:w||y?f:Ne,ref:Pv(Q,ce),target:b,"data-discover":!G&&m==="render"?"true":void 0});return P&&!G?M.createElement(M.Fragment,null,Te,M.createElement($v,{page:Z})):Te});et.displayName="Link";var e0=M.forwardRef(function({"aria-current":f="page",caseSensitive:m=!1,className:o="",end:d=!1,style:y,to:E,viewTransition:D,children:b,...p},z){let H=qn(E,{relative:p.relative}),_=Sa(),Q=M.useContext(tu),{navigator:q,basename:G}=M.useContext(Dt),V=Q!=null&&r0(H)&&D===!0,w=q.encodeLocation?q.encodeLocation(H).pathname:H.pathname,Z=_.pathname,P=Q&&Q.navigation&&Q.navigation.location?Q.navigation.location.pathname:null;m||(Z=Z.toLowerCase(),P=P?P.toLowerCase():null,w=w.toLowerCase()),P&&G&&(P=Jt(P,G)||P);const ce=w!=="/"&&w.endsWith("/")?w.length-1:w.length;let I=Z===w||!d&&Z.startsWith(w)&&Z.charAt(ce)==="/",Me=P!=null&&(P===w||!d&&P.startsWith(w)&&P.charAt(w.length)==="/"),Ne={isActive:I,isPending:Me,isTransitioning:V},Te=I?f:void 0,xe;typeof o=="function"?xe=o(Ne):xe=[o,I?"active":null,Me?"pending":null,V?"transitioning":null].filter(Boolean).join(" ");let ke=typeof y=="function"?y(Ne):y;return M.createElement(et,{...p,"aria-current":Te,className:xe,ref:z,style:ke,to:E,viewTransition:D},typeof b=="function"?b(Ne):b)});e0.displayName="NavLink";var t0=M.forwardRef(({discover:r="render",fetcherKey:f,navigate:m,reloadDocument:o,replace:d,state:y,method:E=Pi,action:D,onSubmit:b,relative:p,preventScrollReset:z,viewTransition:H,..._},Q)=>{let q=u0(),G=c0(D,{relative:p}),V=E.toLowerCase()==="get"?"get":"post",w=typeof D=="string"&&nm.test(D),Z=P=>{if(b&&b(P),P.defaultPrevented)return;P.preventDefault();let ce=P.nativeEvent.submitter,I=(ce==null?void 0:ce.getAttribute("formmethod"))||E;q(ce||P.currentTarget,{fetcherKey:f,method:I,navigate:m,replace:d,state:y,relative:p,preventScrollReset:z,viewTransition:H})};return M.createElement("form",{ref:Q,method:V,action:G,onSubmit:o?b:Z,..._,"data-discover":!w&&r==="render"?"true":void 0})});t0.displayName="Form";function a0(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function im(r){let f=M.useContext(Ol);return Ee(f,a0(r)),f}function l0(r,{target:f,replace:m,state:o,preventScrollReset:d,relative:y,viewTransition:E}={}){let D=mv(),b=Sa(),p=qn(r,{relative:y});return M.useCallback(z=>{if(Uv(z,f)){z.preventDefault();let H=m!==void 0?m:Cn(b)===Cn(p);D(r,{replace:H,state:o,preventScrollReset:d,relative:y,viewTransition:E})}},[b,D,p,m,o,f,r,d,y,E])}var n0=0,i0=()=>`__${String(++n0)}__`;function u0(){let{router:r}=im("useSubmit"),{basename:f}=M.useContext(Dt),m=Nv();return M.useCallback(async(o,d={})=>{let{action:y,method:E,encType:D,formData:b,body:p}=wv(o,f);if(d.navigate===!1){let z=d.fetcherKey||i0();await r.fetch(z,m,d.action||y,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||E,formEncType:d.encType||D,flushSync:d.flushSync})}else await r.navigate(d.action||y,{preventScrollReset:d.preventScrollReset,formData:b,body:p,formMethod:d.method||E,formEncType:d.encType||D,replace:d.replace,state:d.state,fromRouteId:m,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,f,m])}function c0(r,{relative:f}={}){let{basename:m}=M.useContext(Dt),o=M.useContext($t);Ee(o,"useFormAction must be used inside a RouteContext");let[d]=o.matches.slice(-1),y={...qn(r||".",{relative:f})},E=Sa();if(r==null){y.search=E.search;let D=new URLSearchParams(y.search),b=D.getAll("index");if(b.some(z=>z==="")){D.delete("index"),b.filter(H=>H).forEach(H=>D.append("index",H));let z=D.toString();y.search=z?`?${z}`:""}}return(!r||r===".")&&d.route.index&&(y.search=y.search?y.search.replace(/^\?/,"?index&"):"?index"),m!=="/"&&(y.pathname=y.pathname==="/"?m:kt([m,y.pathname])),Cn(y)}function r0(r,f={}){let m=M.useContext(Wd);Ee(m!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=im("useViewTransitionState"),d=qn(r,{relative:f.relative});if(!m.isTransitioning)return!1;let y=Jt(m.currentLocation.pathname,o)||m.currentLocation.pathname,E=Jt(m.nextLocation.pathname,o)||m.nextLocation.pathname;return eu(d.pathname,E)!=null||eu(d.pathname,y)!=null}[...Vv];const s0=()=>{const[r,f]=M.useState(!1),[m,o]=M.useState(!1),d=Sa();M.useEffect(()=>{const E=()=>{f(window.scrollY>50)};return window.addEventListener("scroll",E),()=>window.removeEventListener("scroll",E)},[]);const y=[{path:"/",label:"Início"},{path:"/estudo",label:"O Estudo"},{path:"/autores",label:"Autores"},{path:"/progresso",label:"Progresso"},{path:"/sobre",label:"Sobre"},{path:"/contato",label:"Contato"}];return u.jsx("header",{className:`header ${r?"scrolled":""}`,children:u.jsxs("div",{className:"header-content",children:[u.jsx("div",{className:"logo",children:u.jsxs(et,{to:"/",children:[u.jsx("h1",{children:"A Light on Your Step"}),u.jsx("p",{children:"Estudo Sociológico Dialógico"})]})}),u.jsx("nav",{className:"desktop-nav",children:u.jsx("ul",{children:y.map(E=>u.jsx("li",{children:u.jsx(et,{to:E.path,className:d.pathname===E.path?"active":"",children:E.label})},E.path))})}),u.jsxs("button",{className:"mobile-menu-toggle",onClick:()=>o(!m),"aria-label":"Toggle mobile menu",children:[u.jsx("span",{}),u.jsx("span",{}),u.jsx("span",{})]}),u.jsx("nav",{className:`mobile-nav ${m?"open":""}`,children:u.jsx("ul",{children:y.map(E=>u.jsx("li",{children:u.jsx(et,{to:E.path,className:d.pathname===E.path?"active":"",onClick:()=>o(!1),children:E.label})},E.path))})})]})})},o0=()=>{const r=new Date().getFullYear();return u.jsxs("footer",{className:"footer",children:[u.jsx("div",{className:"footer-content",children:u.jsx("div",{className:"container",children:u.jsxs("div",{className:"footer-grid",children:[u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"📚 A Light on Your Step"}),u.jsx("p",{children:"Um estudo sociológico dialógico que explora o diálogo entre perspectivas críticas e conservadoras através de 20 autores fundamentais em 6 fases progressivas."})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"🔗 Links Rápidos"}),u.jsxs("ul",{className:"footer-links",children:[u.jsx("li",{children:u.jsx(et,{to:"/",children:"Início"})}),u.jsx("li",{children:u.jsx(et,{to:"/estudo",children:"O Estudo"})}),u.jsx("li",{children:u.jsx(et,{to:"/autores",children:"Autores"})}),u.jsx("li",{children:u.jsx(et,{to:"/progresso",children:"Progresso"})}),u.jsx("li",{children:u.jsx(et,{to:"/sobre",children:"Sobre"})}),u.jsx("li",{children:u.jsx(et,{to:"/contato",children:"Contato"})})]})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"🗺️ Fases do Estudo"}),u.jsxs("ul",{className:"footer-phases",children:[u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#3498db"}}),"Fundamentos"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#27ae60"}}),"Aprofundamento"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#f39c12"}}),"Complexificação"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#e74c3c"}}),"Especialização"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#9b59b6"}}),"Modernidade"]}),u.jsxs("li",{children:[u.jsx("span",{className:"phase-dot",style:{backgroundColor:"#1abc9c"}}),"Integração"]})]})]}),u.jsxs("div",{className:"footer-section",children:[u.jsx("h4",{children:"📧 Mantenha-se Atualizado"}),u.jsx("p",{children:"Receba análises sociológicas exclusivas"}),u.jsxs("form",{className:"footer-newsletter",children:[u.jsx("input",{type:"email",placeholder:"Seu email"}),u.jsx("button",{type:"submit",children:"Inscrever"})]}),u.jsxs("div",{className:"social-links",children:[u.jsx("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",title:"Facebook",children:"📘"}),u.jsx("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",title:"Twitter",children:"🐦"}),u.jsx("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:"💼"}),u.jsx("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",title:"Instagram",children:"📷"})]})]})]})})}),u.jsx("div",{className:"footer-bottom",children:u.jsxs("div",{className:"container",children:[u.jsxs("p",{children:["© ",r," A Light on Your Step. Todos os direitos reservados."]}),u.jsx("p",{children:"Estudo sociológico dialógico desenvolvido com 💙 para o avanço do conhecimento."})]})})]})},f0=()=>u.jsxs("div",{className:"home-page",children:[u.jsxs("div",{className:"container",children:[u.jsx("section",{className:"hero",children:u.jsxs("div",{className:"hero-content",children:[u.jsx("h1",{children:"A Light on Your Step"}),u.jsx("h2",{children:"Estudo Sociológico Dialógico"}),u.jsx("p",{children:"Uma jornada intelectual através de 20 autores fundamentais, explorando o diálogo entre perspectivas críticas e conservadoras em 6 fases progressivas de aprendizado."}),u.jsxs("div",{className:"hero-buttons",children:[u.jsx(et,{to:"/estudo",className:"btn",children:"🚀 Começar o Estudo"}),u.jsx(et,{to:"/autores",className:"btn btn-secondary",children:"👥 Ver Autores"})]})]})}),u.jsxs("section",{className:"phases-overview",children:[u.jsx("h2",{children:"🗺️ As 6 Fases do Estudo"}),u.jsxs("div",{className:"phases-grid",children:[u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#3498db"},children:"1"}),u.jsx("h3",{children:"Fundamentos"}),u.jsx("p",{children:"Estabelecimento das bases teóricas fundamentais da sociologia."})]}),u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#27ae60"},children:"2"}),u.jsx("h3",{children:"Aprofundamento"}),u.jsx("p",{children:"Exploração mais profunda dos conceitos e teorias sociológicas."})]}),u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#f39c12"},children:"3"}),u.jsx("h3",{children:"Complexificação"}),u.jsx("p",{children:"Análise de teorias mais complexas e suas interrelações."})]}),u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#e74c3c"},children:"4"}),u.jsx("h3",{children:"Especialização"}),u.jsx("p",{children:"Foco em áreas específicas e especializadas da sociologia."})]}),u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#9b59b6"},children:"5"}),u.jsx("h3",{children:"Modernidade"}),u.jsx("p",{children:"Estudo das teorias sociológicas modernas e contemporâneas."})]}),u.jsxs("div",{className:"phase-card",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:"#1abc9c"},children:"6"}),u.jsx("h3",{children:"Integração"}),u.jsx("p",{children:"Síntese e integração de todos os conhecimentos adquiridos."})]})]})]}),u.jsxs("section",{className:"features",children:[u.jsx("h2",{children:"✨ Por que este Estudo?"}),u.jsxs("div",{className:"features-grid",children:[u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"🎯"}),u.jsx("h3",{children:"Abordagem Dialógica"}),u.jsx("p",{children:"Promove o diálogo entre diferentes perspectivas sociológicas, enriquecendo a compreensão através da diversidade de pensamento."})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"📚"}),u.jsx("h3",{children:"20 Autores Fundamentais"}),u.jsx("p",{children:"Seleção cuidadosa de pensadores que moldaram a sociologia, desde os clássicos até os contemporâneos."})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"🔄"}),u.jsx("h3",{children:"Progressão Estruturada"}),u.jsx("p",{children:"Organização em fases que permitem uma evolução natural do conhecimento, do básico ao avançado."})]}),u.jsxs("div",{className:"feature-card",children:[u.jsx("div",{className:"feature-icon",children:"⚖️"}),u.jsx("h3",{children:"Equilíbrio de Perspectivas"}),u.jsx("p",{children:"Apresentação equilibrada de visões críticas e conservadoras, promovendo uma análise imparcial e completa."})]})]})]}),u.jsx("section",{className:"cta",children:u.jsxs("div",{className:"cta-content",children:[u.jsx("h2",{children:"Pronto para Começar sua Jornada Sociológica?"}),u.jsx("p",{children:"Embarque nesta experiência de aprendizado única e transforme sua compreensão sobre a sociedade e suas complexidades."}),u.jsx(et,{to:"/estudo",className:"btn",children:"🚀 Iniciar Estudo Agora"})]})})]}),u.jsx("style",{jsx:!0,children:`
        .home-page {
          padding-top: 6rem;
        }

        .hero {
          text-align: center;
          padding: 4rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          margin-bottom: 4rem;
        }

        .hero h1 {
          font-size: 3.5rem;
          margin-bottom: 0.5rem;
          background: linear-gradient(45deg, #f39c12, #e74c3c);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero h2 {
          font-size: 1.5rem;
          color: #7f8c8d;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto 2rem auto;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .phases-overview {
          margin-bottom: 4rem;
        }

        .phases-overview h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }

        .phases-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .phase-card {
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .phase-card:hover {
          transform: translateY(-5px);
        }

        .phase-number {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem auto;
        }

        .phase-card h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .features {
          margin-bottom: 4rem;
        }

        .features h2 {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: #fff;
          padding: 2rem;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-5px);
        }

        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .feature-card h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .cta {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
          padding: 4rem 2rem;
          border-radius: 20px;
          text-align: center;
          margin-bottom: 2rem;
        }

        .cta h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .cta p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .cta .btn {
          background: #fff;
          color: #3498db;
        }

        .cta .btn:hover {
          background: #f8f9fa;
          transform: translateY(-3px);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 2.5rem;
          }

          .hero h2 {
            font-size: 1.2rem;
          }

          .hero p {
            font-size: 1rem;
          }

          .phases-grid,
          .features-grid {
            grid-template-columns: 1fr;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `})]}),d0=()=>{const[r,f]=M.useState(1),m=[{id:1,title:"Fundamentos",subtitle:"Indivíduo vs. Sociedade",color:"#3498db",description:"A primeira fase estabelece as bases fundamentais da sociologia, explorando a tensão entre o indivíduo e a sociedade.",authors:[{name:"Émile Durkheim",years:"1858-1917",perspective:"conservative"},{name:"Max Weber",years:"1864-1920",perspective:"neutral"},{name:"Karl Marx",years:"1818-1883",perspective:"critical"}]},{id:2,title:"Aprofundamento",subtitle:"Ordem vs. Conflito",color:"#27ae60",description:"A segunda fase aprofunda o debate fundamental entre visões que privilegiam a ordem social e aquelas que enfatizam o conflito.",authors:[{name:"Talcott Parsons",years:"1902-1979",perspective:"conservative"},{name:"C. Wright Mills",years:"1916-1962",perspective:"critical"},{name:"Georg Simmel",years:"1858-1918",perspective:"neutral"}]},{id:3,title:"Complexificação",subtitle:"Tradição vs. Mudança",color:"#f39c12",description:"Esta fase explora a tensão entre a preservação de tradições e a necessidade de adaptação às transformações sociais.",authors:[{name:"Edmund Burke",years:"1729-1797",perspective:"conservative"},{name:"Antonio Gramsci",years:"1891-1937",perspective:"critical"},{name:"Jürgen Habermas",years:"1929-",perspective:"neutral"}]},{id:4,title:"Especialização",subtitle:"Estado vs. Sociedade",color:"#e74c3c",description:"Análise das relações complexas entre instituições estatais e organizações da sociedade civil.",authors:[{name:"Friedrich Hayek",years:"1899-1992",perspective:"conservative"},{name:"Michel Foucault",years:"1926-1984",perspective:"critical"},{name:"James Coleman",years:"1926-1995",perspective:"neutral"}]},{id:5,title:"Modernidade",subtitle:"Progresso vs. Tradição",color:"#9b59b6",description:"Exame crítico das narrativas de progresso e modernização versus a valorização de tradições estabelecidas.",authors:[{name:"Robert Nisbet",years:"1913-1996",perspective:"conservative"},{name:"Theodor Adorno",years:"1903-1969",perspective:"critical"},{name:"Anthony Giddens",years:"1938-",perspective:"neutral"}]},{id:6,title:"Integração",subtitle:"Sínteses Contemporâneas",color:"#1abc9c",description:"Integração final dos debates anteriores através de perspectivas sociológicas contemporâneas que buscam sínteses criativas.",authors:[{name:"Roger Scruton",years:"1944-2020",perspective:"conservative"},{name:"Pierre Bourdieu",years:"1930-2002",perspective:"critical"},{name:"Erving Goffman",years:"1922-1982",perspective:"neutral"}]}],o=m.find(d=>d.id===r);return u.jsxs("div",{className:"study-page",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"study-header",children:[u.jsx("h1",{children:"📚 O Estudo Sociológico Dialógico"}),u.jsx("p",{children:"Uma jornada estruturada através de 6 fases progressivas, explorando 20 autores fundamentais que moldaram o pensamento sociológico moderno."})]}),u.jsxs("div",{className:"study-content",children:[u.jsxs("div",{className:"phases-navigation",children:[u.jsx("h2",{children:"Fases do Estudo"}),u.jsx("div",{className:"phases-list",children:m.map(d=>u.jsx("button",{className:`phase-button ${r===d.id?"active":""}`,onClick:()=>f(d.id),style:{borderLeft:r===d.id?`4px solid ${d.color}`:"4px solid transparent"},children:u.jsxs("div",{className:"phase-info",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:d.color},children:d.id}),u.jsxs("div",{className:"phase-text",children:[u.jsx("h3",{children:d.title}),u.jsx("p",{children:d.subtitle})]})]})},d.id))})]}),u.jsxs("div",{className:"phase-details",children:[u.jsx("div",{className:"phase-header",children:u.jsxs("div",{className:"phase-title",children:[u.jsx("div",{className:"phase-number-large",style:{backgroundColor:o.color},children:o.id}),u.jsxs("div",{children:[u.jsx("h2",{children:o.title}),u.jsx("h3",{children:o.subtitle})]})]})}),u.jsx("div",{className:"phase-description",children:u.jsx("p",{children:o.description})}),u.jsxs("div",{className:"phase-authors",children:[u.jsx("h4",{children:"👥 Autores desta Fase"}),u.jsx("div",{className:"authors-grid",children:o.authors.map((d,y)=>u.jsxs("div",{className:`author-card ${d.perspective}`,children:[u.jsxs("div",{className:"author-header",children:[u.jsx("h5",{children:d.name}),u.jsx("span",{className:"author-years",children:d.years})]}),u.jsxs("div",{className:"author-perspective",children:[d.perspective==="conservative"&&"🔵 Perspectiva Conservadora",d.perspective==="critical"&&"🔴 Perspectiva Crítica",d.perspective==="neutral"&&"⚪ Síntese/Neutral"]})]},y))})]})]})]}),u.jsxs("div",{className:"study-methodology",children:[u.jsx("h2",{children:"🎯 Metodologia do Estudo"}),u.jsxs("div",{className:"methodology-grid",children:[u.jsxs("div",{className:"methodology-card",children:[u.jsx("div",{className:"methodology-icon",children:"📖"}),u.jsx("h3",{children:"Leitura Dirigida"}),u.jsx("p",{children:"Textos selecionados de cada autor com foco nos conceitos fundamentais."})]}),u.jsxs("div",{className:"methodology-card",children:[u.jsx("div",{className:"methodology-icon",children:"💭"}),u.jsx("h3",{children:"Reflexão Crítica"}),u.jsx("p",{children:"Análise comparativa entre diferentes perspectivas e abordagens."})]}),u.jsxs("div",{className:"methodology-card",children:[u.jsx("div",{className:"methodology-icon",children:"🔄"}),u.jsx("h3",{children:"Diálogo Construtivo"}),u.jsx("p",{children:"Promoção do debate respeitoso entre visões aparentemente opostas."})]}),u.jsxs("div",{className:"methodology-card",children:[u.jsx("div",{className:"methodology-icon",children:"🎯"}),u.jsx("h3",{children:"Aplicação Prática"}),u.jsx("p",{children:"Conexão dos conceitos teóricos com questões sociais contemporâneas."})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .study-page {
          padding-top: 6rem;
          min-height: 100vh;
        }

        .study-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .study-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .study-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          color: #7f8c8d;
        }

        .study-content {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .phases-navigation {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          height: fit-content;
          position: sticky;
          top: 6rem;
        }

        .phases-navigation h2 {
          margin-bottom: 2rem;
          color: #2c3e50;
          text-align: center;
        }

        .phases-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .phase-button {
          background: #fff;
          border: 1px solid #ecf0f1;
          border-radius: 10px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: left;
          width: 100%;
        }

        .phase-button:hover {
          background: #f8f9fa;
          transform: translateX(5px);
        }

        .phase-button.active {
          background: #f8f9fa;
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .phase-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phase-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
        }

        .phase-text h3 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .phase-text p {
          margin: 0;
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .phase-details {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .phase-header {
          margin-bottom: 2rem;
        }

        .phase-title {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .phase-number-large {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          flex-shrink: 0;
        }

        .phase-title h2 {
          margin: 0;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .phase-title h3 {
          margin: 0.5rem 0 0 0;
          color: #7f8c8d;
          font-size: 1.3rem;
          font-weight: normal;
          font-style: italic;
        }

        .phase-description {
          margin-bottom: 3rem;
        }

        .phase-description p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #2c3e50;
        }

        .phase-authors h4 {
          margin-bottom: 2rem;
          color: #2c3e50;
          font-size: 1.3rem;
        }

        .authors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
        }

        .author-card {
          background: #f8f9fa;
          border-radius: 10px;
          padding: 1.5rem;
          border-left: 4px solid #ecf0f1;
          transition: all 0.3s ease;
        }

        .author-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .author-card.conservative {
          border-left-color: #3498db;
        }

        .author-card.critical {
          border-left-color: #e74c3c;
        }

        .author-card.neutral {
          border-left-color: #95a5a6;
        }

        .author-header {
          margin-bottom: 1rem;
        }

        .author-header h5 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1.1rem;
        }

        .author-years {
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .author-perspective {
          font-size: 0.9rem;
          font-weight: 600;
        }

        .study-methodology {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          padding: 3rem;
        }

        .study-methodology h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .methodology-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .methodology-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .methodology-card:hover {
          transform: translateY(-5px);
        }

        .methodology-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .methodology-card h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .methodology-card p {
          color: #7f8c8d;
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .study-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .phases-navigation {
            position: static;
          }

          .phases-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .study-header h1 {
            font-size: 2rem;
          }

          .phase-title {
            flex-direction: column;
            text-align: center;
          }

          .phase-title h2 {
            font-size: 2rem;
          }

          .authors-grid {
            grid-template-columns: 1fr;
          }

          .methodology-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},m0=()=>{const[r,f]=M.useState("all"),m=[{name:"Émile Durkheim",years:"1858-1917",phase:1,perspective:"conservative",mainWork:"Da Divisão do Trabalho Social",keyConcepts:["Solidariedade Social","Anomia","Fato Social"]},{name:"Max Weber",years:"1864-1920",phase:1,perspective:"neutral",mainWork:"A Ética Protestante e o Espírito do Capitalismo",keyConcepts:["Ação Social","Tipo Ideal","Dominação"]},{name:"Karl Marx",years:"1818-1883",phase:1,perspective:"critical",mainWork:"O Capital",keyConcepts:["Luta de Classes","Mais-valia","Alienação"]},{name:"Talcott Parsons",years:"1902-1979",phase:2,perspective:"conservative",mainWork:"O Sistema Social",keyConcepts:["Sistema Social","Funcionalismo","Padrões de Variáveis"]},{name:"C. Wright Mills",years:"1916-1962",phase:2,perspective:"critical",mainWork:"A Elite do Poder",keyConcepts:["Imaginação Sociológica","Elite do Poder","Estrutura Social"]},{name:"Georg Simmel",years:"1858-1918",phase:2,perspective:"neutral",mainWork:"Sociologia",keyConcepts:["Interação Social","Formas Sociais","Conflito Social"]},{name:"Edmund Burke",years:"1729-1797",phase:3,perspective:"conservative",mainWork:"Reflexões sobre a Revolução em França",keyConcepts:["Tradição","Mudança Gradual","Ordem Natural"]},{name:"Antonio Gramsci",years:"1891-1937",phase:3,perspective:"critical",mainWork:"Cadernos do Cárcere",keyConcepts:["Hegemonia","Intelectual Orgânico","Bloco Histórico"]},{name:"Jürgen Habermas",years:"1929-",phase:3,perspective:"neutral",mainWork:"Teoria da Ação Comunicativa",keyConcepts:["Ação Comunicativa","Esfera Pública","Mundo da Vida"]},{name:"Friedrich Hayek",years:"1899-1992",phase:4,perspective:"conservative",mainWork:"O Caminho da Servidão",keyConcepts:["Ordem Espontânea","Conhecimento Disperso","Liberdade Individual"]},{name:"Michel Foucault",years:"1926-1984",phase:4,perspective:"critical",mainWork:"Vigiar e Punir",keyConcepts:["Microfísica do Poder","Disciplina","Governamentalidade"]},{name:"James Coleman",years:"1926-1995",phase:4,perspective:"neutral",mainWork:"Fundamentos da Teoria Social",keyConcepts:["Capital Social","Escolha Racional","Normas Sociais"]},{name:"Robert Nisbet",years:"1913-1996",phase:5,perspective:"conservative",mainWork:"A Busca da Comunidade",keyConcepts:["Comunidade","Autoridade","Tradição"]},{name:"Theodor Adorno",years:"1903-1969",phase:5,perspective:"critical",mainWork:"Dialética do Esclarecimento",keyConcepts:["Indústria Cultural","Razão Instrumental","Teoria Crítica"]},{name:"Anthony Giddens",years:"1938-",phase:5,perspective:"neutral",mainWork:"A Constituição da Sociedade",keyConcepts:["Estruturação","Modernidade Reflexiva","Globalização"]},{name:"Roger Scruton",years:"1944-2020",phase:6,perspective:"conservative",mainWork:"Como Ser um Conservador",keyConcepts:["Conservadorismo","Tradição Cultural","Identidade Nacional"]},{name:"Pierre Bourdieu",years:"1930-2002",phase:6,perspective:"critical",mainWork:"A Distinção",keyConcepts:["Capital Cultural","Habitus","Campo Social"]},{name:"Erving Goffman",years:"1922-1982",phase:6,perspective:"neutral",mainWork:"A Representação do Eu na Vida Cotidiana",keyConcepts:["Dramatização","Estigma","Interação Face a Face"]}],o=[{id:1,title:"Fundamentos",color:"#3498db"},{id:2,title:"Aprofundamento",color:"#27ae60"},{id:3,title:"Complexificação",color:"#f39c12"},{id:4,title:"Especialização",color:"#e74c3c"},{id:5,title:"Modernidade",color:"#9b59b6"},{id:6,title:"Integração",color:"#1abc9c"}],d=r==="all"?m:m.filter(E=>E.perspective===r),y=E=>o.find(D=>D.id===E);return u.jsxs("div",{className:"authors-page",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"authors-header",children:[u.jsx("h1",{children:"👥 Os 20 Autores Fundamentais"}),u.jsx("p",{children:"Conheça os pensadores que moldaram a sociologia moderna, organizados em 6 fases progressivas e representando diferentes perspectivas do pensamento social."})]}),u.jsxs("div",{className:"filters",children:[u.jsx("h3",{children:"Filtrar por Perspectiva:"}),u.jsxs("div",{className:"filter-buttons",children:[u.jsx("button",{className:r==="all"?"active":"",onClick:()=>f("all"),children:"Todas as Perspectivas"}),u.jsx("button",{className:r==="conservative"?"active":"",onClick:()=>f("conservative"),children:"🔵 Conservadora"}),u.jsx("button",{className:r==="critical"?"active":"",onClick:()=>f("critical"),children:"🔴 Crítica"}),u.jsx("button",{className:r==="neutral"?"active":"",onClick:()=>f("neutral"),children:"⚪ Síntese/Neutral"})]})]}),u.jsx("div",{className:"authors-grid",children:d.map((E,D)=>{const b=y(E.phase);return u.jsxs("div",{className:`author-card ${E.perspective}`,children:[u.jsx("div",{className:"author-phase",children:u.jsxs("span",{className:"phase-badge",style:{backgroundColor:b.color},children:["Fase ",E.phase,": ",b.title]})}),u.jsxs("div",{className:"author-main",children:[u.jsx("h3",{children:E.name}),u.jsx("p",{className:"author-years",children:E.years}),u.jsxs("p",{className:"author-work",children:[u.jsx("strong",{children:"Obra Principal:"})," ",E.mainWork]})]}),u.jsxs("div",{className:"author-concepts",children:[u.jsx("h4",{children:"Conceitos-chave:"}),u.jsx("div",{className:"concepts-tags",children:E.keyConcepts.map((p,z)=>u.jsx("span",{className:"concept-tag",children:p},z))})]}),u.jsxs("div",{className:"author-perspective",children:[E.perspective==="conservative"&&u.jsx("span",{className:"perspective-badge conservative",children:"🔵 Perspectiva Conservadora"}),E.perspective==="critical"&&u.jsx("span",{className:"perspective-badge critical",children:"🔴 Perspectiva Crítica"}),E.perspective==="neutral"&&u.jsx("span",{className:"perspective-badge neutral",children:"⚪ Síntese/Neutral"})]})]},D)})}),u.jsxs("div",{className:"perspectives-explanation",children:[u.jsx("h2",{children:"🎯 Compreendendo as Perspectivas"}),u.jsxs("div",{className:"perspectives-grid",children:[u.jsxs("div",{className:"perspective-card conservative",children:[u.jsx("div",{className:"perspective-icon",children:"🔵"}),u.jsx("h3",{children:"Perspectiva Conservadora"}),u.jsx("p",{children:"Enfatiza a importância da ordem, tradição e estabilidade social. Valoriza instituições estabelecidas e mudanças graduais."})]}),u.jsxs("div",{className:"perspective-card critical",children:[u.jsx("div",{className:"perspective-icon",children:"🔴"}),u.jsx("h3",{children:"Perspectiva Crítica"}),u.jsx("p",{children:"Questiona estruturas de poder existentes e busca transformação social. Foca em desigualdades e conflitos sociais."})]}),u.jsxs("div",{className:"perspective-card neutral",children:[u.jsx("div",{className:"perspective-icon",children:"⚪"}),u.jsx("h3",{children:"Síntese/Neutral"}),u.jsx("p",{children:"Busca integrar diferentes abordagens ou mantém neutralidade analítica. Oferece perspectivas equilibradas e sintéticas."})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .authors-page {
          padding-top: 6rem;
          min-height: 100vh;
        }

        .authors-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .authors-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .authors-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          color: #7f8c8d;
        }

        .filters {
          margin-bottom: 3rem;
          text-align: center;
        }

        .filters h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .filter-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .filter-buttons button {
          padding: 0.8rem 1.5rem;
          border: 2px solid #ecf0f1;
          background: #fff;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 600;
        }

        .filter-buttons button:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .filter-buttons button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }

        .authors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .author-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          border-left: 5px solid #ecf0f1;
        }

        .author-card:hover {
          transform: translateY(-5px);
        }

        .author-card.conservative {
          border-left-color: #3498db;
        }

        .author-card.critical {
          border-left-color: #e74c3c;
        }

        .author-card.neutral {
          border-left-color: #95a5a6;
        }

        .author-phase {
          margin-bottom: 1.5rem;
        }

        .phase-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          color: white;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .author-main h3 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
          font-size: 1.5rem;
        }

        .author-years {
          color: #7f8c8d;
          margin: 0 0 1rem 0;
          font-style: italic;
        }

        .author-work {
          margin: 0 0 1.5rem 0;
          line-height: 1.5;
        }

        .author-concepts h4 {
          margin: 0 0 1rem 0;
          color: #2c3e50;
          font-size: 1rem;
        }

        .concepts-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .concept-tag {
          background: #f8f9fa;
          padding: 0.3rem 0.8rem;
          border-radius: 15px;
          font-size: 0.8rem;
          color: #2c3e50;
          border: 1px solid #ecf0f1;
        }

        .author-perspective {
          text-align: center;
        }

        .perspective-badge {
          display: inline-block;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
        }

        .perspective-badge.conservative {
          background: rgba(52, 152, 219, 0.1);
          color: #3498db;
          border: 1px solid #3498db;
        }

        .perspective-badge.critical {
          background: rgba(231, 76, 60, 0.1);
          color: #e74c3c;
          border: 1px solid #e74c3c;
        }

        .perspective-badge.neutral {
          background: rgba(149, 165, 166, 0.1);
          color: #95a5a6;
          border: 1px solid #95a5a6;
        }

        .perspectives-explanation {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          padding: 3rem;
        }

        .perspectives-explanation h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .perspectives-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .perspective-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .perspective-card:hover {
          transform: translateY(-5px);
        }

        .perspective-card.conservative {
          border-top: 4px solid #3498db;
        }

        .perspective-card.critical {
          border-top: 4px solid #e74c3c;
        }

        .perspective-card.neutral {
          border-top: 4px solid #95a5a6;
        }

        .perspective-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .perspective-card h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .perspective-card p {
          color: #7f8c8d;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .authors-header h1 {
            font-size: 2rem;
          }

          .authors-grid {
            grid-template-columns: 1fr;
          }

          .filter-buttons {
            flex-direction: column;
            align-items: center;
          }

          .perspectives-grid {
            grid-template-columns: 1fr;
          }
        }
      `})]})},h0=()=>{const r={overallProgress:35,authorsCompleted:7,totalAuthors:20,currentPhase:2,totalPhases:6},f=[{id:1,title:"Fundamentos",progress:100,color:"#3498db",completed:!0},{id:2,title:"Aprofundamento",progress:67,color:"#27ae60",completed:!1},{id:3,title:"Complexificação",progress:0,color:"#f39c12",completed:!1},{id:4,title:"Especialização",progress:0,color:"#e74c3c",completed:!1},{id:5,title:"Modernidade",progress:0,color:"#9b59b6",completed:!1},{id:6,title:"Integração",progress:0,color:"#1abc9c",completed:!1}],m=[{date:"2025-01-06",action:"Completou estudo de Max Weber",type:"completion"},{date:"2025-01-05",action:"Iniciou Fase 2: Aprofundamento",type:"phase"},{date:"2025-01-04",action:"Completou estudo de Karl Marx",type:"completion"},{date:"2025-01-03",action:"Completou estudo de Émile Durkheim",type:"completion"},{date:"2025-01-02",action:"Completou Fase 1: Fundamentos",type:"phase"}];return u.jsxs("div",{className:"progress-page",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"progress-header",children:[u.jsx("h1",{children:"📊 Seu Progresso no Estudo"}),u.jsx("p",{children:"Acompanhe sua jornada através das 6 fases do estudo sociológico dialógico e veja seu desenvolvimento acadêmico."})]}),u.jsx("div",{className:"progress-overview",children:u.jsxs("div",{className:"overview-cards",children:[u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"card-icon",children:"🎯"}),u.jsxs("div",{className:"card-content",children:[u.jsxs("h3",{children:[r.overallProgress,"%"]}),u.jsx("p",{children:"Progresso Total"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"card-icon",children:"👥"}),u.jsxs("div",{className:"card-content",children:[u.jsxs("h3",{children:[r.authorsCompleted,"/",r.totalAuthors]}),u.jsx("p",{children:"Autores Estudados"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"card-icon",children:"📚"}),u.jsxs("div",{className:"card-content",children:[u.jsxs("h3",{children:[r.currentPhase,"/",r.totalPhases]}),u.jsx("p",{children:"Fase Atual"})]})]}),u.jsxs("div",{className:"overview-card",children:[u.jsx("div",{className:"card-icon",children:"⭐"}),u.jsxs("div",{className:"card-content",children:[u.jsx("h3",{children:"85%"}),u.jsx("p",{children:"Taxa de Retenção"})]})]})]})}),u.jsxs("div",{className:"progress-content",children:[u.jsxs("div",{className:"phases-progress",children:[u.jsx("h2",{children:"🗺️ Progresso por Fase"}),u.jsx("div",{className:"phases-list",children:f.map(o=>u.jsxs("div",{className:`phase-progress ${o.completed?"completed":""}`,children:[u.jsxs("div",{className:"phase-info",children:[u.jsxs("div",{className:"phase-header",children:[u.jsx("div",{className:"phase-number",style:{backgroundColor:o.color},children:o.id}),u.jsxs("div",{className:"phase-details",children:[u.jsx("h3",{children:o.title}),u.jsxs("p",{children:[o.progress,"% concluído"]})]})]}),u.jsx("div",{className:"phase-status",children:o.completed?u.jsx("span",{className:"status-badge completed",children:"✅ Concluída"}):o.progress>0?u.jsx("span",{className:"status-badge in-progress",children:"🔄 Em Progresso"}):u.jsx("span",{className:"status-badge not-started",children:"⏳ Não Iniciada"})})]}),u.jsx("div",{className:"progress-bar",children:u.jsx("div",{className:"progress-fill",style:{width:`${o.progress}%`,backgroundColor:o.color}})})]},o.id))})]}),u.jsxs("div",{className:"sidebar-content",children:[u.jsxs("div",{className:"recent-activity",children:[u.jsx("h3",{children:"📋 Atividade Recente"}),u.jsx("div",{className:"activity-list",children:m.map((o,d)=>u.jsxs("div",{className:`activity-item ${o.type}`,children:[u.jsx("div",{className:"activity-date",children:new Date(o.date).toLocaleDateString("pt-BR")}),u.jsx("div",{className:"activity-action",children:o.action}),u.jsx("div",{className:"activity-icon",children:o.type==="completion"?"📖":"🎯"})]},d))})]}),u.jsxs("div",{className:"study-stats",children:[u.jsx("h3",{children:"📈 Estatísticas de Estudo"}),u.jsxs("div",{className:"stats-grid",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Tempo médio por autor:"}),u.jsx("span",{className:"stat-value",children:"2.5 horas"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Conceitos aprendidos:"}),u.jsx("span",{className:"stat-value",children:"21"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Dias de estudo:"}),u.jsx("span",{className:"stat-value",children:"15"})]}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-label",children:"Próximo autor:"}),u.jsx("span",{className:"stat-value",children:"C. Wright Mills"})]})]})]}),u.jsxs("div",{className:"achievements",children:[u.jsx("h3",{children:"🏆 Conquistas"}),u.jsxs("div",{className:"achievements-list",children:[u.jsxs("div",{className:"achievement earned",children:[u.jsx("span",{className:"achievement-icon",children:"🎓"}),u.jsx("span",{className:"achievement-name",children:"Primeiro Passo"})]}),u.jsxs("div",{className:"achievement earned",children:[u.jsx("span",{className:"achievement-icon",children:"📚"}),u.jsx("span",{className:"achievement-name",children:"Leitor Dedicado"})]}),u.jsxs("div",{className:"achievement earned",children:[u.jsx("span",{className:"achievement-icon",children:"🔥"}),u.jsx("span",{className:"achievement-name",children:"Sequência de 7 dias"})]}),u.jsxs("div",{className:"achievement locked",children:[u.jsx("span",{className:"achievement-icon",children:"⭐"}),u.jsx("span",{className:"achievement-name",children:"Mestre dos Fundamentos"})]})]})]})]})]}),u.jsxs("div",{className:"progress-chart",children:[u.jsx("h2",{children:"📊 Evolução do Progresso"}),u.jsxs("div",{className:"chart-placeholder",children:[u.jsx("p",{children:"Gráfico de evolução do progresso ao longo do tempo"}),u.jsxs("div",{className:"mock-chart",children:[u.jsxs("div",{className:"chart-bars",children:[u.jsx("div",{className:"bar",style:{height:"20%"}}),u.jsx("div",{className:"bar",style:{height:"35%"}}),u.jsx("div",{className:"bar",style:{height:"50%"}}),u.jsx("div",{className:"bar",style:{height:"65%"}}),u.jsx("div",{className:"bar",style:{height:"45%"}}),u.jsx("div",{className:"bar",style:{height:"60%"}}),u.jsx("div",{className:"bar",style:{height:"75%"}})]}),u.jsxs("div",{className:"chart-labels",children:[u.jsx("span",{children:"Sem 1"}),u.jsx("span",{children:"Sem 2"}),u.jsx("span",{children:"Sem 3"}),u.jsx("span",{children:"Sem 4"}),u.jsx("span",{children:"Sem 5"}),u.jsx("span",{children:"Sem 6"}),u.jsx("span",{children:"Sem 7"})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .progress-page {
          padding-top: 6rem;
          min-height: 100vh;
        }

        .progress-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .progress-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .progress-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          color: #7f8c8d;
        }

        .progress-overview {
          margin-bottom: 4rem;
        }

        .overview-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .overview-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          gap: 1.5rem;
          transition: transform 0.3s ease;
        }

        .overview-card:hover {
          transform: translateY(-5px);
        }

        .card-icon {
          font-size: 3rem;
          flex-shrink: 0;
        }

        .card-content h3 {
          margin: 0 0 0.5rem 0;
          font-size: 2rem;
          color: #2c3e50;
        }

        .card-content p {
          margin: 0;
          color: #7f8c8d;
          font-weight: 600;
        }

        .progress-content {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .phases-progress {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .phases-progress h2 {
          margin-bottom: 2rem;
          color: #2c3e50;
        }

        .phases-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .phase-progress {
          border: 1px solid #ecf0f1;
          border-radius: 10px;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }

        .phase-progress:hover {
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .phase-progress.completed {
          background: rgba(39, 174, 96, 0.05);
          border-color: #27ae60;
        }

        .phase-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .phase-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .phase-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          flex-shrink: 0;
        }

        .phase-details h3 {
          margin: 0 0 0.3rem 0;
          color: #2c3e50;
        }

        .phase-details p {
          margin: 0;
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .status-badge {
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .status-badge.completed {
          background: rgba(39, 174, 96, 0.1);
          color: #27ae60;
        }

        .status-badge.in-progress {
          background: rgba(243, 156, 18, 0.1);
          color: #f39c12;
        }

        .status-badge.not-started {
          background: rgba(149, 165, 166, 0.1);
          color: #95a5a6;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background: #ecf0f1;
          border-radius: 4px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 0.3s ease;
        }

        .sidebar-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .recent-activity,
        .study-stats,
        .achievements {
          background: #fff;
          border-radius: 15px;
          padding: 1.5rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .recent-activity h3,
        .study-stats h3,
        .achievements h3 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
        }

        .activity-date {
          font-size: 0.8rem;
          color: #7f8c8d;
          min-width: 80px;
        }

        .activity-action {
          flex: 1;
          font-size: 0.9rem;
          color: #2c3e50;
        }

        .activity-icon {
          font-size: 1.2rem;
        }

        .stats-grid {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.8rem 0;
          border-bottom: 1px solid #ecf0f1;
        }

        .stat-item:last-child {
          border-bottom: none;
        }

        .stat-label {
          color: #7f8c8d;
          font-size: 0.9rem;
        }

        .stat-value {
          color: #2c3e50;
          font-weight: 600;
        }

        .achievements-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .achievement {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .achievement.earned {
          background: rgba(39, 174, 96, 0.1);
          border: 1px solid #27ae60;
        }

        .achievement.locked {
          background: #f8f9fa;
          border: 1px solid #ecf0f1;
          opacity: 0.6;
        }

        .achievement-icon {
          font-size: 1.5rem;
        }

        .achievement-name {
          font-weight: 600;
          color: #2c3e50;
        }

        .progress-chart {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .progress-chart h2 {
          margin-bottom: 2rem;
          color: #2c3e50;
          text-align: center;
        }

        .chart-placeholder {
          text-align: center;
          color: #7f8c8d;
        }

        .mock-chart {
          margin-top: 2rem;
        }

        .chart-bars {
          display: flex;
          align-items: end;
          justify-content: center;
          gap: 1rem;
          height: 200px;
          margin-bottom: 1rem;
        }

        .bar {
          width: 40px;
          background: linear-gradient(45deg, #3498db, #2980b9);
          border-radius: 4px 4px 0 0;
          transition: height 0.3s ease;
        }

        .chart-labels {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .chart-labels span {
          font-size: 0.8rem;
          color: #7f8c8d;
          width: 40px;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .progress-content {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .progress-header h1 {
            font-size: 2rem;
          }

          .overview-cards {
            grid-template-columns: repeat(2, 1fr);
          }

          .phase-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .overview-cards {
            grid-template-columns: 1fr;
          }

          .overview-card {
            flex-direction: column;
            text-align: center;
          }
        }
      `})]})},p0=()=>u.jsxs("div",{className:"about-page",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"about-header",children:[u.jsx("h1",{children:"📖 Sobre o Projeto"}),u.jsx("p",{children:'Conheça a filosofia, metodologia e objetivos por trás do estudo sociológico dialógico "A Light on Your Step".'})]}),u.jsxs("div",{className:"about-content",children:[u.jsxs("section",{className:"mission-section",children:[u.jsxs("div",{className:"section-content",children:[u.jsx("h2",{children:"🎯 Nossa Missão"}),u.jsx("p",{children:'O projeto "A Light on Your Step" nasceu da necessidade de promover um diálogo construtivo entre diferentes correntes do pensamento sociológico. Em um mundo cada vez mais polarizado, acreditamos que a compreensão mútua e o respeito pelas diferentes perspectivas são fundamentais para o avanço do conhecimento.'}),u.jsx("p",{children:"Nossa missão é oferecer uma plataforma de aprendizado que não apenas apresente as teorias sociológicas clássicas e contemporâneas, mas que também demonstre como perspectivas aparentemente opostas podem dialogar de forma produtiva."})]}),u.jsx("div",{className:"section-image",children:u.jsxs("div",{className:"placeholder-image mission",children:[u.jsx("span",{children:"🤝"}),u.jsx("p",{children:"Diálogo Construtivo"})]})})]}),u.jsxs("section",{className:"methodology-section",children:[u.jsx("div",{className:"section-image",children:u.jsxs("div",{className:"placeholder-image methodology",children:[u.jsx("span",{children:"🔬"}),u.jsx("p",{children:"Metodologia Científica"})]})}),u.jsxs("div",{className:"section-content",children:[u.jsx("h2",{children:"🔬 Metodologia"}),u.jsx("p",{children:"O estudo está estruturado em 6 fases progressivas, cada uma explorando diferentes aspectos do pensamento sociológico através de 3-4 autores cuidadosamente selecionados. Esta abordagem permite uma compreensão gradual e aprofundada dos conceitos fundamentais."}),u.jsxs("div",{className:"methodology-points",children:[u.jsxs("div",{className:"point",children:[u.jsx("span",{className:"point-icon",children:"📚"}),u.jsxs("div",{children:[u.jsx("h4",{children:"Seleção Criteriosa"}),u.jsx("p",{children:"Autores escolhidos por sua relevância e impacto no pensamento sociológico"})]})]}),u.jsxs("div",{className:"point",children:[u.jsx("span",{className:"point-icon",children:"⚖️"}),u.jsxs("div",{children:[u.jsx("h4",{children:"Equilíbrio de Perspectivas"}),u.jsx("p",{children:"Representação equilibrada de visões conservadoras, críticas e sintéticas"})]})]}),u.jsxs("div",{className:"point",children:[u.jsx("span",{className:"point-icon",children:"🔄"}),u.jsxs("div",{children:[u.jsx("h4",{children:"Progressão Estruturada"}),u.jsx("p",{children:"Organização que permite evolução natural do conhecimento"})]})]})]})]})]}),u.jsx("section",{className:"philosophy-section",children:u.jsxs("div",{className:"section-content",children:[u.jsx("h2",{children:"💭 Filosofia Educacional"}),u.jsx("p",{children:"Acreditamos que a educação verdadeira não consiste apenas na transmissão de informações, mas na capacidade de desenvolver o pensamento crítico e a habilidade de compreender múltiplas perspectivas sobre um mesmo fenômeno."}),u.jsxs("div",{className:"philosophy-grid",children:[u.jsxs("div",{className:"philosophy-card",children:[u.jsx("div",{className:"card-icon",children:"🧠"}),u.jsx("h3",{children:"Pensamento Crítico"}),u.jsx("p",{children:"Desenvolvimento da capacidade de análise e questionamento construtivo"})]}),u.jsxs("div",{className:"philosophy-card",children:[u.jsx("div",{className:"card-icon",children:"🌍"}),u.jsx("h3",{children:"Visão Ampla"}),u.jsx("p",{children:"Compreensão da complexidade e diversidade do pensamento social"})]}),u.jsxs("div",{className:"philosophy-card",children:[u.jsx("div",{className:"card-icon",children:"🤝"}),u.jsx("h3",{children:"Diálogo Respeitoso"}),u.jsx("p",{children:"Promoção do debate civilizado entre diferentes correntes de pensamento"})]}),u.jsxs("div",{className:"philosophy-card",children:[u.jsx("div",{className:"card-icon",children:"🎯"}),u.jsx("h3",{children:"Aplicação Prática"}),u.jsx("p",{children:"Conexão entre teoria sociológica e questões contemporâneas"})]})]})]})}),u.jsxs("section",{className:"team-section",children:[u.jsx("h2",{children:"👥 Equipe"}),u.jsxs("div",{className:"team-grid",children:[u.jsxs("div",{className:"team-member",children:[u.jsx("div",{className:"member-avatar",children:u.jsx("span",{children:"👨‍🎓"})}),u.jsx("h3",{children:"Dr. João Silva"}),u.jsx("p",{className:"member-role",children:"Coordenador Acadêmico"}),u.jsx("p",{className:"member-bio",children:"Doutor em Sociologia pela USP, especialista em teoria sociológica clássica e contemporânea."})]}),u.jsxs("div",{className:"team-member",children:[u.jsx("div",{className:"member-avatar",children:u.jsx("span",{children:"👩‍🏫"})}),u.jsx("h3",{children:"Dra. Maria Santos"}),u.jsx("p",{className:"member-role",children:"Especialista em Metodologia"}),u.jsx("p",{className:"member-bio",children:"Doutora em Educação, com foco em metodologias inovadoras de ensino em ciências sociais."})]}),u.jsxs("div",{className:"team-member",children:[u.jsx("div",{className:"member-avatar",children:u.jsx("span",{children:"👨‍💻"})}),u.jsx("h3",{children:"Carlos Oliveira"}),u.jsx("p",{className:"member-role",children:"Desenvolvedor"}),u.jsx("p",{className:"member-bio",children:"Especialista em tecnologias educacionais e desenvolvimento de plataformas de aprendizado."})]})]})]}),u.jsxs("section",{className:"impact-section",children:[u.jsx("h2",{children:"📊 Impacto e Resultados"}),u.jsxs("div",{className:"impact-stats",children:[u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-number",children:"500+"}),u.jsx("div",{className:"stat-label",children:"Estudantes Ativos"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-number",children:"95%"}),u.jsx("div",{className:"stat-label",children:"Taxa de Satisfação"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-number",children:"20"}),u.jsx("div",{className:"stat-label",children:"Autores Estudados"})]}),u.jsxs("div",{className:"stat-card",children:[u.jsx("div",{className:"stat-number",children:"6"}),u.jsx("div",{className:"stat-label",children:"Fases Progressivas"})]})]}),u.jsxs("div",{className:"testimonials",children:[u.jsx("h3",{children:"💬 Depoimentos"}),u.jsxs("div",{className:"testimonials-grid",children:[u.jsxs("div",{className:"testimonial",children:[u.jsx("p",{children:'"Este estudo transformou minha compreensão sobre sociologia. A abordagem dialógica me permitiu ver além das polarizações."'}),u.jsx("cite",{children:"— Ana Costa, Estudante de Ciências Sociais"})]}),u.jsxs("div",{className:"testimonial",children:[u.jsx("p",{children:'"Finalmente encontrei um curso que apresenta diferentes perspectivas de forma equilibrada e respeitosa."'}),u.jsx("cite",{children:"— Prof. Roberto Lima, UFMG"})]})]})]})]})]})]}),u.jsx("style",{jsx:!0,children:`
        .about-page {
          padding-top: 6rem;
          min-height: 100vh;
        }

        .about-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .about-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .about-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          color: #7f8c8d;
        }

        .about-content {
          display: flex;
          flex-direction: column;
          gap: 4rem;
        }

        .mission-section,
        .methodology-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: center;
        }

        .section-content h2 {
          margin-bottom: 1.5rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .section-content p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #2c3e50;
          margin-bottom: 1.5rem;
        }

        .placeholder-image {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 3rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .placeholder-image span {
          font-size: 4rem;
          display: block;
          margin-bottom: 1rem;
        }

        .placeholder-image p {
          font-size: 1.2rem;
          color: #2c3e50;
          font-weight: 600;
          margin: 0;
        }

        .methodology-points {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .point {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .point-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .point h4 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
        }

        .point p {
          margin: 0;
          color: #7f8c8d;
          font-size: 1rem;
        }

        .philosophy-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 20px;
          padding: 3rem;
        }

        .philosophy-section h2 {
          text-align: center;
          margin-bottom: 2rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .philosophy-section > .section-content > p {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 3rem auto;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .philosophy-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .philosophy-card:hover {
          transform: translateY(-5px);
        }

        .card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .philosophy-card h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .philosophy-card p {
          color: #7f8c8d;
          line-height: 1.6;
          margin: 0;
        }

        .team-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .team-member {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .team-member:hover {
          transform: translateY(-5px);
        }

        .member-avatar {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(45deg, #3498db, #2980b9);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem auto;
          font-size: 2rem;
        }

        .team-member h3 {
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }

        .member-role {
          color: #3498db;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .member-bio {
          color: #7f8c8d;
          line-height: 1.6;
          margin: 0;
        }

        .impact-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .impact-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .stat-card {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .stat-card:hover {
          transform: translateY(-5px);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #3498db;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #7f8c8d;
          font-weight: 600;
        }

        .testimonials h3 {
          text-align: center;
          margin-bottom: 2rem;
          color: #2c3e50;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 2rem;
        }

        .testimonial {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border-left: 4px solid #3498db;
        }

        .testimonial p {
          font-style: italic;
          margin-bottom: 1rem;
          color: #2c3e50;
          line-height: 1.6;
        }

        .testimonial cite {
          color: #7f8c8d;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .about-header h1 {
            font-size: 2rem;
          }

          .mission-section,
          .methodology-section {
            grid-template-columns: 1fr;
          }

          .philosophy-grid {
            grid-template-columns: 1fr;
          }

          .team-grid {
            grid-template-columns: 1fr;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .impact-stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .impact-stats {
            grid-template-columns: 1fr;
          }
        }
      `})]}),v0=()=>{const[r,f]=M.useState({name:"",email:"",subject:"",message:""}),m=d=>{f({...r,[d.target.name]:d.target.value})},o=d=>{d.preventDefault(),alert("Mensagem enviada com sucesso! Entraremos em contato em breve."),f({name:"",email:"",subject:"",message:""})};return u.jsxs("div",{className:"contact-page",children:[u.jsxs("div",{className:"container",children:[u.jsxs("div",{className:"contact-header",children:[u.jsx("h1",{children:"📧 Entre em Contato"}),u.jsx("p",{children:"Tem dúvidas, sugestões ou quer saber mais sobre o projeto? Estamos aqui para ajudar e ouvir suas ideias."})]}),u.jsxs("div",{className:"contact-content",children:[u.jsx("div",{className:"contact-form-section",children:u.jsxs("div",{className:"form-container",children:[u.jsx("h2",{children:"💬 Envie sua Mensagem"}),u.jsxs("form",{onSubmit:o,className:"contact-form",children:[u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"name",children:"Nome Completo"}),u.jsx("input",{type:"text",id:"name",name:"name",value:r.name,onChange:m,required:!0,placeholder:"Seu nome completo"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"email",children:"E-mail"}),u.jsx("input",{type:"email",id:"email",name:"email",value:r.email,onChange:m,required:!0,placeholder:"seu.email@exemplo.com"})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"subject",children:"Assunto"}),u.jsxs("select",{id:"subject",name:"subject",value:r.subject,onChange:m,required:!0,children:[u.jsx("option",{value:"",children:"Selecione um assunto"}),u.jsx("option",{value:"duvida",children:"Dúvida sobre o estudo"}),u.jsx("option",{value:"sugestao",children:"Sugestão de melhoria"}),u.jsx("option",{value:"colaboracao",children:"Proposta de colaboração"}),u.jsx("option",{value:"tecnico",children:"Problema técnico"}),u.jsx("option",{value:"outro",children:"Outro assunto"})]})]}),u.jsxs("div",{className:"form-group",children:[u.jsx("label",{htmlFor:"message",children:"Mensagem"}),u.jsx("textarea",{id:"message",name:"message",value:r.message,onChange:m,required:!0,rows:"6",placeholder:"Escreva sua mensagem aqui..."})]}),u.jsx("button",{type:"submit",className:"btn submit-btn",children:"📤 Enviar Mensagem"})]})]})}),u.jsx("div",{className:"contact-info-section",children:u.jsxs("div",{className:"info-container",children:[u.jsx("h2",{children:"📍 Informações de Contato"}),u.jsxs("div",{className:"contact-methods",children:[u.jsxs("div",{className:"contact-method",children:[u.jsx("div",{className:"method-icon",children:"📧"}),u.jsxs("div",{className:"method-content",children:[u.jsx("h3",{children:"E-mail"}),u.jsx("p",{children:"contato@lightonyourstep.com"}),u.jsx("small",{children:"Respondemos em até 24 horas"})]})]}),u.jsxs("div",{className:"contact-method",children:[u.jsx("div",{className:"method-icon",children:"📱"}),u.jsxs("div",{className:"method-content",children:[u.jsx("h3",{children:"WhatsApp"}),u.jsx("p",{children:"+55 (11) 99999-9999"}),u.jsx("small",{children:"Segunda a sexta, 9h às 18h"})]})]}),u.jsxs("div",{className:"contact-method",children:[u.jsx("div",{className:"method-icon",children:"🏢"}),u.jsxs("div",{className:"method-content",children:[u.jsx("h3",{children:"Endereço"}),u.jsxs("p",{children:["Rua da Sociologia, 123",u.jsx("br",{}),"São Paulo - SP, 01234-567"]}),u.jsx("small",{children:"Atendimento presencial com agendamento"})]})]}),u.jsxs("div",{className:"contact-method",children:[u.jsx("div",{className:"method-icon",children:"🕒"}),u.jsxs("div",{className:"method-content",children:[u.jsx("h3",{children:"Horário de Atendimento"}),u.jsxs("p",{children:["Segunda a sexta: 9h às 18h",u.jsx("br",{}),"Sábado: 9h às 12h"]}),u.jsx("small",{children:"Fechado aos domingos e feriados"})]})]})]}),u.jsxs("div",{className:"social-contact",children:[u.jsx("h3",{children:"🌐 Redes Sociais"}),u.jsxs("div",{className:"social-links",children:[u.jsxs("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",className:"social-link facebook",children:[u.jsx("span",{children:"📘"}),u.jsx("span",{children:"Facebook"})]}),u.jsxs("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",className:"social-link twitter",children:[u.jsx("span",{children:"🐦"}),u.jsx("span",{children:"Twitter"})]}),u.jsxs("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",className:"social-link linkedin",children:[u.jsx("span",{children:"💼"}),u.jsx("span",{children:"LinkedIn"})]}),u.jsxs("a",{href:"https://instagram.com",target:"_blank",rel:"noopener noreferrer",className:"social-link instagram",children:[u.jsx("span",{children:"📷"}),u.jsx("span",{children:"Instagram"})]})]})]})]})})]}),u.jsxs("div",{className:"faq-section",children:[u.jsx("h2",{children:"❓ Perguntas Frequentes"}),u.jsxs("div",{className:"faq-grid",children:[u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"Como posso começar o estudo?"}),u.jsx("p",{children:'Basta navegar até a seção "O Estudo" e começar pela Fase 1: Fundamentos. O estudo é autoguiado e você pode progredir no seu próprio ritmo.'})]}),u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"O estudo é gratuito?"}),u.jsx("p",{children:"Sim, todo o conteúdo básico do estudo é completamente gratuito. Oferecemos recursos adicionais premium para quem deseja se aprofundar ainda mais."})]}),u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"Preciso de conhecimento prévio em sociologia?"}),u.jsx("p",{children:"Não é necessário. O estudo foi desenvolvido para ser acessível tanto para iniciantes quanto para aqueles que já têm conhecimento na área."})]}),u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"Como posso contribuir com o projeto?"}),u.jsx("p",{children:"Você pode contribuir enviando feedback, sugerindo melhorias, compartilhando o projeto ou até mesmo propondo colaborações acadêmicas."})]}),u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"Há certificado de conclusão?"}),u.jsx("p",{children:"Sim, oferecemos certificados digitais para aqueles que completam todas as fases do estudo e demonstram compreensão dos conceitos."})]}),u.jsxs("div",{className:"faq-item",children:[u.jsx("h3",{children:"Posso usar o material em sala de aula?"}),u.jsx("p",{children:"Absolutamente! Encorajamos educadores a utilizarem nosso material. Entre em contato para discutir parcerias educacionais."})]})]})]}),u.jsx("div",{className:"newsletter-section",children:u.jsxs("div",{className:"newsletter-content",children:[u.jsx("h2",{children:"📬 Mantenha-se Atualizado"}),u.jsx("p",{children:"Receba novidades sobre o projeto, novos conteúdos e análises sociológicas exclusivas diretamente em seu e-mail."}),u.jsxs("form",{className:"newsletter-form",children:[u.jsx("input",{type:"email",placeholder:"Seu melhor e-mail",required:!0}),u.jsx("button",{type:"submit",className:"btn",children:"✉️ Inscrever-se"})]}),u.jsx("small",{children:"Enviamos no máximo 2 e-mails por mês. Você pode cancelar a qualquer momento."})]})})]}),u.jsx("style",{jsx:!0,children:`
        .contact-page {
          padding-top: 6rem;
          min-height: 100vh;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .contact-header p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
          color: #7f8c8d;
        }

        .contact-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .form-container,
        .info-container {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .form-container h2,
        .info-container h2 {
          margin-bottom: 2rem;
          color: #2c3e50;
          font-size: 1.8rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-group label {
          margin-bottom: 0.5rem;
          color: #2c3e50;
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          padding: 1rem;
          border: 2px solid #ecf0f1;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3498db;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          margin-top: 1rem;
          align-self: flex-start;
        }

        .contact-methods {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-method {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .method-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .method-content h3 {
          margin: 0 0 0.5rem 0;
          color: #2c3e50;
        }

        .method-content p {
          margin: 0 0 0.3rem 0;
          color: #2c3e50;
          font-weight: 600;
        }

        .method-content small {
          color: #7f8c8d;
          font-style: italic;
        }

        .social-contact h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          text-decoration: none;
          color: #2c3e50;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #e9ecef;
          transform: translateX(5px);
        }

        .social-link span:first-child {
          font-size: 1.5rem;
        }

        .faq-section {
          margin-bottom: 4rem;
        }

        .faq-section h2 {
          text-align: center;
          margin-bottom: 3rem;
          color: #2c3e50;
          font-size: 2.5rem;
        }

        .faq-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .faq-item {
          background: #fff;
          border-radius: 15px;
          padding: 2rem;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .faq-item:hover {
          transform: translateY(-5px);
        }

        .faq-item h3 {
          margin-bottom: 1rem;
          color: #2c3e50;
          font-size: 1.2rem;
        }

        .faq-item p {
          color: #7f8c8d;
          line-height: 1.6;
          margin: 0;
        }

        .newsletter-section {
          background: linear-gradient(135deg, #3498db 0%, #2980b9 100%);
          color: white;
          padding: 3rem;
          border-radius: 20px;
          text-align: center;
        }

        .newsletter-content h2 {
          margin-bottom: 1rem;
          font-size: 2.5rem;
        }

        .newsletter-content p {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .newsletter-form {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;
          flex-wrap: wrap;
        }

        .newsletter-form input {
          padding: 1rem;
          border: none;
          border-radius: 8px;
          font-size: 1rem;
          min-width: 300px;
        }

        .newsletter-form .btn {
          background: #fff;
          color: #3498db;
        }

        .newsletter-form .btn:hover {
          background: #f8f9fa;
        }

        .newsletter-section small {
          opacity: 0.9;
          font-style: italic;
        }

        @media (max-width: 1024px) {
          .contact-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-header h1 {
            font-size: 2rem;
          }

          .faq-grid {
            grid-template-columns: 1fr;
          }

          .newsletter-form {
            flex-direction: column;
            align-items: center;
          }

          .newsletter-form input {
            min-width: auto;
            width: 100%;
            max-width: 400px;
          }
        }

        @media (max-width: 480px) {
          .form-container,
          .info-container {
            padding: 1.5rem;
          }

          .newsletter-section {
            padding: 2rem 1rem;
          }
        }
      `})]})};function g0(){return u.jsx(Iv,{children:u.jsxs("div",{className:"App",children:[u.jsx(s0,{}),u.jsx("main",{className:"main-content",children:u.jsxs(Ov,{children:[u.jsx(Xa,{path:"/",element:u.jsx(f0,{})}),u.jsx(Xa,{path:"/estudo",element:u.jsx(d0,{})}),u.jsx(Xa,{path:"/autores",element:u.jsx(m0,{})}),u.jsx(Xa,{path:"/progresso",element:u.jsx(h0,{})}),u.jsx(Xa,{path:"/sobre",element:u.jsx(p0,{})}),u.jsx(Xa,{path:"/contato",element:u.jsx(v0,{})})]})}),u.jsx(o0,{})]})})}wp.createRoot(document.getElementById("root")).render(u.jsx(M.StrictMode,{children:u.jsx(g0,{})}));
