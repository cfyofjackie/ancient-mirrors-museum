(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const ZE="modulepreload",jE=function(t,e){return new URL(t,e).href},wg={},JE=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=jE(u,i),u in wg)return;wg[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!i)for(let m=o.length-1;m>=0;m--){const S=o[m];if(S.href===u&&(!c||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":ZE,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var cx={exports:{}},gc={},fx={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),QE=Symbol.for("react.portal"),eT=Symbol.for("react.fragment"),tT=Symbol.for("react.strict_mode"),nT=Symbol.for("react.profiler"),iT=Symbol.for("react.provider"),rT=Symbol.for("react.context"),sT=Symbol.for("react.forward_ref"),oT=Symbol.for("react.suspense"),aT=Symbol.for("react.memo"),lT=Symbol.for("react.lazy"),Ag=Symbol.iterator;function uT(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var dx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hx=Object.assign,px={};function bo(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||dx}bo.prototype.isReactComponent={};bo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};bo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mx(){}mx.prototype=bo.prototype;function _p(t,e,n){this.props=t,this.context=e,this.refs=px,this.updater=n||dx}var xp=_p.prototype=new mx;xp.constructor=_p;hx(xp,bo.prototype);xp.isPureReactComponent=!0;var Cg=Array.isArray,gx=Object.prototype.hasOwnProperty,yp={current:null},vx={key:!0,ref:!0,__self:!0,__source:!0};function _x(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gx.call(e,i)&&!vx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:al,type:t,key:s,ref:o,props:r,_owner:yp.current}}function cT(t,e){return{$$typeof:al,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sp(t){return typeof t=="object"&&t!==null&&t.$$typeof===al}function fT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Rg=/\/+/g;function Xc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?fT(""+t.key):e.toString(36)}function fu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case al:case QE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Xc(o,0):i,Cg(r)?(n="",t!=null&&(n=t.replace(Rg,"$&/")+"/"),fu(r,e,n,"",function(u){return u})):r!=null&&(Sp(r)&&(r=cT(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rg,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Xc(s,a);o+=fu(s,e,n,l,r)}else if(l=uT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Xc(s,a++),o+=fu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(t,e,n){if(t==null)return t;var i=[],r=0;return fu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function dT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},du={transition:null},hT={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:du,ReactCurrentOwner:yp};function xx(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:xl,forEach:function(t,e,n){xl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return xl(t,function(){e++}),e},toArray:function(t){return xl(t,function(e){return e})||[]},only:function(t){if(!Sp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=bo;Ye.Fragment=eT;Ye.Profiler=nT;Ye.PureComponent=_p;Ye.StrictMode=tT;Ye.Suspense=oT;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hT;Ye.act=xx;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=yp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gx.call(e,l)&&!vx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:al,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:rT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:iT,_context:t},t.Consumer=t};Ye.createElement=_x;Ye.createFactory=function(t){var e=_x.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:sT,render:t}};Ye.isValidElement=Sp;Ye.lazy=function(t){return{$$typeof:lT,_payload:{_status:-1,_result:t},_init:dT}};Ye.memo=function(t,e){return{$$typeof:aT,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=du.transition;du.transition={};try{t()}finally{du.transition=e}};Ye.unstable_act=xx;Ye.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ye.useContext=function(t){return mn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ye.useId=function(){return mn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ye.useRef=function(t){return mn.current.useRef(t)};Ye.useState=function(t){return mn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return mn.current.useTransition()};Ye.version="18.3.1";fx.exports=Ye;var oe=fx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pT=oe,mT=Symbol.for("react.element"),gT=Symbol.for("react.fragment"),vT=Object.prototype.hasOwnProperty,_T=pT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xT={key:!0,ref:!0,__self:!0,__source:!0};function yx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)vT.call(e,i)&&!xT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:mT,type:t,key:s,ref:o,props:r,_owner:_T.current}}gc.Fragment=gT;gc.jsx=yx;gc.jsxs=yx;cx.exports=gc;var he=cx.exports,Sx={exports:{}},Fn={},Mx={exports:{}},Ex={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,W){var j=L.length;L.push(W);e:for(;0<j;){var te=j-1>>>1,re=L[te];if(0<r(re,W))L[te]=W,L[j]=re,j=te;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var W=L[0],j=L.pop();if(j!==W){L[0]=j;e:for(var te=0,re=L.length,ze=re>>>1;te<ze;){var He=2*(te+1)-1,Fe=L[He],Z=He+1,ae=L[Z];if(0>r(Fe,j))Z<re&&0>r(ae,Fe)?(L[te]=ae,L[Z]=j,te=Z):(L[te]=Fe,L[He]=j,te=He);else if(Z<re&&0>r(ae,j))L[te]=ae,L[Z]=j,te=Z;else break e}}return W}function r(L,W){var j=L.sortIndex-W.sortIndex;return j!==0?j:L.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,m=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var W=n(u);W!==null;){if(W.callback===null)i(u);else if(W.startTime<=L)i(u),W.sortIndex=W.expirationTime,e(l,W);else break;W=n(u)}}function x(L){if(S=!1,y(L),!m)if(n(l)!==null)m=!0,Y(E);else{var W=n(u);W!==null&&k(x,W.startTime-L)}}function E(L,W){m=!1,S&&(S=!1,h(_),_=-1),p=!0;var j=f;try{for(y(W),d=n(l);d!==null&&(!(d.expirationTime>W)||L&&!P());){var te=d.callback;if(typeof te=="function"){d.callback=null,f=d.priorityLevel;var re=te(d.expirationTime<=W);W=t.unstable_now(),typeof re=="function"?d.callback=re:d===n(l)&&i(l),y(W)}else i(l);d=n(l)}if(d!==null)var ze=!0;else{var He=n(u);He!==null&&k(x,He.startTime-W),ze=!1}return ze}finally{d=null,f=j,p=!1}}var w=!1,C=null,_=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function N(){if(C!==null){var L=t.unstable_now();b=L;var W=!0;try{W=C(!0,L)}finally{W?X():(w=!1,C=null)}}else w=!1}var X;if(typeof v=="function")X=function(){v(N)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,B=$.port2;$.port1.onmessage=N,X=function(){B.postMessage(null)}}else X=function(){g(N,0)};function Y(L){C=L,w||(w=!0,X())}function k(L,W){_=g(function(){L(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Y(E))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var j=f;f=W;try{return L()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,W){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=f;f=L;try{return W()}finally{f=j}},t.unstable_scheduleCallback=function(L,W,j){var te=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?te+j:te):j=te,L){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=j+re,L={id:c++,callback:W,priorityLevel:L,startTime:j,expirationTime:re,sortIndex:-1},j>te?(L.sortIndex=j,e(u,L),n(l)===null&&L===n(u)&&(S?(h(_),_=-1):S=!0,k(x,j-te))):(L.sortIndex=re,e(l,L),m||p||(m=!0,Y(E))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var W=f;return function(){var j=f;f=W;try{return L.apply(this,arguments)}finally{f=j}}}})(Ex);Mx.exports=Ex;var yT=Mx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ST=oe,Nn=yT;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tx=new Set,La={};function ms(t,e){po(t,e),po(t+"Capture",e)}function po(t,e){for(La[t]=e,t=0;t<e.length;t++)Tx.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vd=Object.prototype.hasOwnProperty,MT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bg={},Pg={};function ET(t){return vd.call(Pg,t)?!0:vd.call(bg,t)?!1:MT.test(t)?Pg[t]=!0:(bg[t]=!0,!1)}function TT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function wT(t,e,n,i){if(e===null||typeof e>"u"||TT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Mp=/[\-:]([a-z])/g;function Ep(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Mp,Ep);Jt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Mp,Ep);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Mp,Ep);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tp(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(wT(e,n,r,i)&&(n=null),i||r===null?ET(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=ST.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),zs=Symbol.for("react.portal"),Hs=Symbol.for("react.fragment"),wp=Symbol.for("react.strict_mode"),_d=Symbol.for("react.profiler"),wx=Symbol.for("react.provider"),Ax=Symbol.for("react.context"),Ap=Symbol.for("react.forward_ref"),xd=Symbol.for("react.suspense"),yd=Symbol.for("react.suspense_list"),Cp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Cx=Symbol.for("react.offscreen"),Lg=Symbol.iterator;function Bo(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,Yc;function na(t){if(Yc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yc=e&&e[1]||""}return`
`+Yc+t}var $c=!1;function qc(t,e){if(!t||$c)return"";$c=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$c=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?na(t):""}function AT(t){switch(t.tag){case 5:return na(t.type);case 16:return na("Lazy");case 13:return na("Suspense");case 19:return na("SuspenseList");case 0:case 2:case 15:return t=qc(t.type,!1),t;case 11:return t=qc(t.type.render,!1),t;case 1:return t=qc(t.type,!0),t;default:return""}}function Sd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hs:return"Fragment";case zs:return"Portal";case _d:return"Profiler";case wp:return"StrictMode";case xd:return"Suspense";case yd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ax:return(t.displayName||"Context")+".Consumer";case wx:return(t._context.displayName||"Context")+".Provider";case Ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cp:return e=t.displayName||null,e!==null?e:Sd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return Sd(t(e))}catch{}}return null}function CT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Sd(e);case 8:return e===wp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function RT(t){var e=Rx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sl(t){t._valueTracker||(t._valueTracker=RT(t))}function bx(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Du(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Px(t,e){e=e.checked,e!=null&&Tp(t,"checked",e,!1)}function Ed(t,e){Px(t,e);var n=Rr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Td(t,e.type,n):e.hasOwnProperty("defaultValue")&&Td(t,e.type,Rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ig(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Td(t,e,n){(e!=="number"||Du(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ia=Array.isArray;function ro(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Rr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(ia(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Rr(n)}}function Lx(t,e){var n=Rr(e.value),i=Rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Ug(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ml,Ix=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Da(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bT=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){bT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function Nx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function Ux(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Nx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var PT=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cd(t,e){if(e){if(PT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Rd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bd=null;function Rp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pd=null,so=null,oo=null;function Fg(t){if(t=cl(t)){if(typeof Pd!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Sc(e),Pd(t.stateNode,t.type,e))}}function Fx(t){so?oo?oo.push(t):oo=[t]:so=t}function Ox(){if(so){var t=so,e=oo;if(oo=so=null,Fg(t),e)for(t=0;t<e.length;t++)Fg(e[t])}}function Bx(t,e){return t(e)}function kx(){}var Kc=!1;function Vx(t,e,n){if(Kc)return t(e,n);Kc=!0;try{return Bx(t,e,n)}finally{Kc=!1,(so!==null||oo!==null)&&(kx(),Ox())}}function Ia(t,e){var n=t.stateNode;if(n===null)return null;var i=Sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Ld=!1;if(Yi)try{var ko={};Object.defineProperty(ko,"passive",{get:function(){Ld=!0}}),window.addEventListener("test",ko,ko),window.removeEventListener("test",ko,ko)}catch{Ld=!1}function LT(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var pa=!1,Iu=null,Nu=!1,Dd=null,DT={onError:function(t){pa=!0,Iu=t}};function IT(t,e,n,i,r,s,o,a,l){pa=!1,Iu=null,LT.apply(DT,arguments)}function NT(t,e,n,i,r,s,o,a,l){if(IT.apply(this,arguments),pa){if(pa){var u=Iu;pa=!1,Iu=null}else throw Error(ne(198));Nu||(Nu=!0,Dd=u)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function zx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(gs(t)!==t)throw Error(ne(188))}function UT(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Og(r),t;if(s===i)return Og(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function Hx(t){return t=UT(t),t!==null?Gx(t):null}function Gx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gx(t);if(e!==null)return e;t=t.sibling}return null}var Wx=Nn.unstable_scheduleCallback,Bg=Nn.unstable_cancelCallback,FT=Nn.unstable_shouldYield,OT=Nn.unstable_requestPaint,Lt=Nn.unstable_now,BT=Nn.unstable_getCurrentPriorityLevel,bp=Nn.unstable_ImmediatePriority,Xx=Nn.unstable_UserBlockingPriority,Uu=Nn.unstable_NormalPriority,kT=Nn.unstable_LowPriority,Yx=Nn.unstable_IdlePriority,vc=null,Si=null;function VT(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(vc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:GT,zT=Math.log,HT=Math.LN2;function GT(t){return t>>>=0,t===0?32:31-(zT(t)/HT|0)|0}var El=64,Tl=4194304;function ra(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Fu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ra(a):(s&=o,s!==0&&(i=ra(s)))}else o=n&~r,o!==0?i=ra(o):s!==0&&(i=ra(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function WT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function XT(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=WT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $x(){var t=El;return El<<=1,!(El&4194240)&&(El=64),t}function Zc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ll(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function YT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function qx(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kx,Lp,Zx,jx,Jx,Nd=!1,wl=[],yr=null,Sr=null,Mr=null,Na=new Map,Ua=new Map,pr=[],$T="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kg(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":Sr=null;break;case"mouseover":case"mouseout":Mr=null;break;case"pointerover":case"pointerout":Na.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ua.delete(e.pointerId)}}function Vo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&Lp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function qT(t,e,n,i,r){switch(e){case"focusin":return yr=Vo(yr,t,e,n,i,r),!0;case"dragenter":return Sr=Vo(Sr,t,e,n,i,r),!0;case"mouseover":return Mr=Vo(Mr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Na.set(s,Vo(Na.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ua.set(s,Vo(Ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Qx(t){var e=Zr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=zx(n),e!==null){t.blockedOn=e,Jx(t.priority,function(){Zx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ud(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bd=i,n.target.dispatchEvent(i),bd=null}else return e=cl(n),e!==null&&Lp(e),t.blockedOn=n,!1;e.shift()}return!0}function Vg(t,e,n){hu(t)&&n.delete(e)}function KT(){Nd=!1,yr!==null&&hu(yr)&&(yr=null),Sr!==null&&hu(Sr)&&(Sr=null),Mr!==null&&hu(Mr)&&(Mr=null),Na.forEach(Vg),Ua.forEach(Vg)}function zo(t,e){t.blockedOn===e&&(t.blockedOn=null,Nd||(Nd=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,KT)))}function Fa(t){function e(r){return zo(r,t)}if(0<wl.length){zo(wl[0],t);for(var n=1;n<wl.length;n++){var i=wl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(yr!==null&&zo(yr,t),Sr!==null&&zo(Sr,t),Mr!==null&&zo(Mr,t),Na.forEach(e),Ua.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)Qx(n),n.blockedOn===null&&pr.shift()}var ao=er.ReactCurrentBatchConfig,Ou=!0;function ZT(t,e,n,i){var r=nt,s=ao.transition;ao.transition=null;try{nt=1,Dp(t,e,n,i)}finally{nt=r,ao.transition=s}}function jT(t,e,n,i){var r=nt,s=ao.transition;ao.transition=null;try{nt=4,Dp(t,e,n,i)}finally{nt=r,ao.transition=s}}function Dp(t,e,n,i){if(Ou){var r=Ud(t,e,n,i);if(r===null)af(t,e,i,Bu,n),kg(t,i);else if(qT(r,t,e,n,i))i.stopPropagation();else if(kg(t,i),e&4&&-1<$T.indexOf(t)){for(;r!==null;){var s=cl(r);if(s!==null&&Kx(s),s=Ud(t,e,n,i),s===null&&af(t,e,i,Bu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else af(t,e,i,null,n)}}var Bu=null;function Ud(t,e,n,i){if(Bu=null,t=Rp(i),t=Zr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=zx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Bu=t,null}function ey(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(BT()){case bp:return 1;case Xx:return 4;case Uu:case kT:return 16;case Yx:return 536870912;default:return 16}default:return 16}}var vr=null,Ip=null,pu=null;function ty(){if(pu)return pu;var t,e=Ip,n=e.length,i,r="value"in vr?vr.value:vr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return pu=r.slice(t,1<i?1-i:void 0)}function mu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Al(){return!0}function zg(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:zg,this.isPropagationStopped=zg,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Np=On(Po),ul=yt({},Po,{view:0,detail:0}),JT=On(ul),jc,Jc,Ho,_c=yt({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Up,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ho&&(Ho&&t.type==="mousemove"?(jc=t.screenX-Ho.screenX,Jc=t.screenY-Ho.screenY):Jc=jc=0,Ho=t),jc)},movementY:function(t){return"movementY"in t?t.movementY:Jc}}),Hg=On(_c),QT=yt({},_c,{dataTransfer:0}),e1=On(QT),t1=yt({},ul,{relatedTarget:0}),Qc=On(t1),n1=yt({},Po,{animationName:0,elapsedTime:0,pseudoElement:0}),i1=On(n1),r1=yt({},Po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),s1=On(r1),o1=yt({},Po,{data:0}),Gg=On(o1),a1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},l1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function c1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=u1[t])?!!e[t]:!1}function Up(){return c1}var f1=yt({},ul,{key:function(t){if(t.key){var e=a1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=mu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?l1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Up,charCode:function(t){return t.type==="keypress"?mu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?mu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d1=On(f1),h1=yt({},_c,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wg=On(h1),p1=yt({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Up}),m1=On(p1),g1=yt({},Po,{propertyName:0,elapsedTime:0,pseudoElement:0}),v1=On(g1),_1=yt({},_c,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),x1=On(_1),y1=[9,13,27,32],Fp=Yi&&"CompositionEvent"in window,ma=null;Yi&&"documentMode"in document&&(ma=document.documentMode);var S1=Yi&&"TextEvent"in window&&!ma,ny=Yi&&(!Fp||ma&&8<ma&&11>=ma),Xg=" ",Yg=!1;function iy(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ry(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gs=!1;function M1(t,e){switch(t){case"compositionend":return ry(e);case"keypress":return e.which!==32?null:(Yg=!0,Xg);case"textInput":return t=e.data,t===Xg&&Yg?null:t;default:return null}}function E1(t,e){if(Gs)return t==="compositionend"||!Fp&&iy(t,e)?(t=ty(),pu=Ip=vr=null,Gs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ny&&e.locale!=="ko"?null:e.data;default:return null}}var T1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $g(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!T1[t.type]:e==="textarea"}function sy(t,e,n,i){Fx(i),e=ku(e,"onChange"),0<e.length&&(n=new Np("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ga=null,Oa=null;function w1(t){gy(t,0)}function xc(t){var e=Ys(t);if(bx(e))return t}function A1(t,e){if(t==="change")return e}var oy=!1;if(Yi){var ef;if(Yi){var tf="oninput"in document;if(!tf){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),tf=typeof qg.oninput=="function"}ef=tf}else ef=!1;oy=ef&&(!document.documentMode||9<document.documentMode)}function Kg(){ga&&(ga.detachEvent("onpropertychange",ay),Oa=ga=null)}function ay(t){if(t.propertyName==="value"&&xc(Oa)){var e=[];sy(e,Oa,t,Rp(t)),Vx(w1,e)}}function C1(t,e,n){t==="focusin"?(Kg(),ga=e,Oa=n,ga.attachEvent("onpropertychange",ay)):t==="focusout"&&Kg()}function R1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xc(Oa)}function b1(t,e){if(t==="click")return xc(e)}function P1(t,e){if(t==="input"||t==="change")return xc(e)}function L1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:L1;function Ba(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vd.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function Zg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jg(t,e){var n=Zg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zg(n)}}function ly(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ly(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function uy(){for(var t=window,e=Du();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Du(t.document)}return e}function Op(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function D1(t){var e=uy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ly(n.ownerDocument.documentElement,n)){if(i!==null&&Op(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jg(n,s);var o=jg(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var I1=Yi&&"documentMode"in document&&11>=document.documentMode,Ws=null,Fd=null,va=null,Od=!1;function Jg(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Od||Ws==null||Ws!==Du(i)||(i=Ws,"selectionStart"in i&&Op(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),va&&Ba(va,i)||(va=i,i=ku(Fd,"onSelect"),0<i.length&&(e=new Np("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ws)))}function Cl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Xs={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},nf={},cy={};Yi&&(cy=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function yc(t){if(nf[t])return nf[t];if(!Xs[t])return t;var e=Xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in cy)return nf[t]=e[n];return t}var fy=yc("animationend"),dy=yc("animationiteration"),hy=yc("animationstart"),py=yc("transitionend"),my=new Map,Qg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(t,e){my.set(t,e),ms(e,[t])}for(var rf=0;rf<Qg.length;rf++){var sf=Qg[rf],N1=sf.toLowerCase(),U1=sf[0].toUpperCase()+sf.slice(1);Ir(N1,"on"+U1)}Ir(fy,"onAnimationEnd");Ir(dy,"onAnimationIteration");Ir(hy,"onAnimationStart");Ir("dblclick","onDoubleClick");Ir("focusin","onFocus");Ir("focusout","onBlur");Ir(py,"onTransitionEnd");po("onMouseEnter",["mouseout","mouseover"]);po("onMouseLeave",["mouseout","mouseover"]);po("onPointerEnter",["pointerout","pointerover"]);po("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),F1=new Set("cancel close invalid load scroll toggle".split(" ").concat(sa));function e0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,NT(i,e,void 0,t),t.currentTarget=null}function gy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;e0(r,a,u),s=l}}}if(Nu)throw t=Dd,Nu=!1,Dd=null,t}function ft(t,e){var n=e[Hd];n===void 0&&(n=e[Hd]=new Set);var i=t+"__bubble";n.has(i)||(vy(e,t,2,!1),n.add(i))}function of(t,e,n){var i=0;e&&(i|=4),vy(n,t,i,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function ka(t){if(!t[Rl]){t[Rl]=!0,Tx.forEach(function(n){n!=="selectionchange"&&(F1.has(n)||of(n,!1,t),of(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,of("selectionchange",!1,e))}}function vy(t,e,n,i){switch(ey(e)){case 1:var r=ZT;break;case 4:r=jT;break;default:r=Dp}n=r.bind(null,e,n,t),r=void 0,!Ld||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function af(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Zr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Vx(function(){var u=s,c=Rp(n),d=[];e:{var f=my.get(t);if(f!==void 0){var p=Np,m=t;switch(t){case"keypress":if(mu(n)===0)break e;case"keydown":case"keyup":p=d1;break;case"focusin":m="focus",p=Qc;break;case"focusout":m="blur",p=Qc;break;case"beforeblur":case"afterblur":p=Qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=e1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=m1;break;case fy:case dy:case hy:p=i1;break;case py:p=v1;break;case"scroll":p=JT;break;case"wheel":p=x1;break;case"copy":case"cut":case"paste":p=s1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wg}var S=(e&4)!==0,g=!S&&t==="scroll",h=S?f!==null?f+"Capture":null:f;S=[];for(var v=u,y;v!==null;){y=v;var x=y.stateNode;if(y.tag===5&&x!==null&&(y=x,h!==null&&(x=Ia(v,h),x!=null&&S.push(Va(v,x,y)))),g)break;v=v.return}0<S.length&&(f=new p(f,m,null,n,c),d.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==bd&&(m=n.relatedTarget||n.fromElement)&&(Zr(m)||m[$i]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?Zr(m):null,m!==null&&(g=gs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(S=Hg,x="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Wg,x="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:Ys(p),y=m==null?f:Ys(m),f=new S(x,v+"leave",p,n,c),f.target=g,f.relatedTarget=y,x=null,Zr(c)===u&&(S=new S(h,v+"enter",m,n,c),S.target=y,S.relatedTarget=g,x=S),g=x,p&&m)t:{for(S=p,h=m,v=0,y=S;y;y=Es(y))v++;for(y=0,x=h;x;x=Es(x))y++;for(;0<v-y;)S=Es(S),v--;for(;0<y-v;)h=Es(h),y--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=Es(S),h=Es(h)}S=null}else S=null;p!==null&&t0(d,f,p,S,!1),m!==null&&g!==null&&t0(d,g,m,S,!0)}}e:{if(f=u?Ys(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var E=A1;else if($g(f))if(oy)E=P1;else{E=R1;var w=C1}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=b1);if(E&&(E=E(t,u))){sy(d,E,n,c);break e}w&&w(t,f,u),t==="focusout"&&(w=f._wrapperState)&&w.controlled&&f.type==="number"&&Td(f,"number",f.value)}switch(w=u?Ys(u):window,t){case"focusin":($g(w)||w.contentEditable==="true")&&(Ws=w,Fd=u,va=null);break;case"focusout":va=Fd=Ws=null;break;case"mousedown":Od=!0;break;case"contextmenu":case"mouseup":case"dragend":Od=!1,Jg(d,n,c);break;case"selectionchange":if(I1)break;case"keydown":case"keyup":Jg(d,n,c)}var C;if(Fp)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gs?iy(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(ny&&n.locale!=="ko"&&(Gs||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gs&&(C=ty()):(vr=c,Ip="value"in vr?vr.value:vr.textContent,Gs=!0)),w=ku(u,_),0<w.length&&(_=new Gg(_,t,null,n,c),d.push({event:_,listeners:w}),C?_.data=C:(C=ry(n),C!==null&&(_.data=C)))),(C=S1?M1(t,n):E1(t,n))&&(u=ku(u,"onBeforeInput"),0<u.length&&(c=new Gg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}gy(d,e)})}function Va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ku(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ia(t,n),s!=null&&i.unshift(Va(t,s,r)),s=Ia(t,e),s!=null&&i.push(Va(t,s,r))),t=t.return}return i}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ia(n,s),l!=null&&o.unshift(Va(n,l,a))):r||(l=Ia(n,s),l!=null&&o.push(Va(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var O1=/\r\n?/g,B1=/\u0000|\uFFFD/g;function n0(t){return(typeof t=="string"?t:""+t).replace(O1,`
`).replace(B1,"")}function bl(t,e,n){if(e=n0(e),n0(t)!==e&&n)throw Error(ne(425))}function Vu(){}var Bd=null,kd=null;function Vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var zd=typeof setTimeout=="function"?setTimeout:void 0,k1=typeof clearTimeout=="function"?clearTimeout:void 0,i0=typeof Promise=="function"?Promise:void 0,V1=typeof queueMicrotask=="function"?queueMicrotask:typeof i0<"u"?function(t){return i0.resolve(null).then(t).catch(z1)}:zd;function z1(t){setTimeout(function(){throw t})}function lf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fa(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Lo=Math.random().toString(36).slice(2),xi="__reactFiber$"+Lo,za="__reactProps$"+Lo,$i="__reactContainer$"+Lo,Hd="__reactEvents$"+Lo,H1="__reactListeners$"+Lo,G1="__reactHandles$"+Lo;function Zr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[xi])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function cl(t){return t=t[xi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ys(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Sc(t){return t[za]||null}var Gd=[],$s=-1;function Nr(t){return{current:t}}function dt(t){0>$s||(t.current=Gd[$s],Gd[$s]=null,$s--)}function ut(t,e){$s++,Gd[$s]=t.current,t.current=e}var br={},cn=Nr(br),Sn=Nr(!1),os=br;function mo(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function zu(){dt(Sn),dt(cn)}function s0(t,e,n){if(cn.current!==br)throw Error(ne(168));ut(cn,e),ut(Sn,n)}function _y(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,CT(t)||"Unknown",r));return yt({},n,i)}function Hu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,os=cn.current,ut(cn,t),ut(Sn,Sn.current),!0}function o0(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=_y(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,dt(Sn),dt(cn),ut(cn,t)):dt(Sn),ut(Sn,n)}var Fi=null,Mc=!1,uf=!1;function xy(t){Fi===null?Fi=[t]:Fi.push(t)}function W1(t){Mc=!0,xy(t)}function Ur(){if(!uf&&Fi!==null){uf=!0;var t=0,e=nt;try{var n=Fi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Fi=null,Mc=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(t+1)),Wx(bp,Ur),r}finally{nt=e,uf=!1}}return null}var qs=[],Ks=0,Gu=null,Wu=0,Hn=[],Gn=0,as=null,Bi=1,ki="";function Gr(t,e){qs[Ks++]=Wu,qs[Ks++]=Gu,Gu=t,Wu=e}function yy(t,e,n){Hn[Gn++]=Bi,Hn[Gn++]=ki,Hn[Gn++]=as,as=t;var i=Bi;t=ki;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Bi=1<<32-ai(e)+r|n<<r|i,ki=s+t}else Bi=1<<s|n<<r|i,ki=t}function Bp(t){t.return!==null&&(Gr(t,1),yy(t,1,0))}function kp(t){for(;t===Gu;)Gu=qs[--Ks],qs[Ks]=null,Wu=qs[--Ks],qs[Ks]=null;for(;t===as;)as=Hn[--Gn],Hn[Gn]=null,ki=Hn[--Gn],Hn[Gn]=null,Bi=Hn[--Gn],Hn[Gn]=null}var Dn=null,Ln=null,pt=!1,ni=null;function Sy(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Bi,overflow:ki}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function Wd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Xd(t){if(pt){var e=Ln;if(e){var n=e;if(!a0(t,e)){if(Wd(t))throw Error(ne(418));e=Er(n.nextSibling);var i=Dn;e&&a0(t,e)?Sy(i,n):(t.flags=t.flags&-4097|2,pt=!1,Dn=t)}}else{if(Wd(t))throw Error(ne(418));t.flags=t.flags&-4097|2,pt=!1,Dn=t}}}function l0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Pl(t){if(t!==Dn)return!1;if(!pt)return l0(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Wd(t))throw My(),Error(ne(418));for(;e;)Sy(t,e),e=Er(e.nextSibling)}if(l0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?Er(t.stateNode.nextSibling):null;return!0}function My(){for(var t=Ln;t;)t=Er(t.nextSibling)}function go(){Ln=Dn=null,pt=!1}function Vp(t){ni===null?ni=[t]:ni.push(t)}var X1=er.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function Ll(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function u0(t){var e=t._init;return e(t._payload)}function Ey(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Cr(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,x){return v===null||v.tag!==6?(v=gf(y,h.mode,x),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,x){var E=y.type;return E===Hs?c(h,v,y.props.children,x,y.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dr&&u0(E)===v.type)?(x=r(v,y.props),x.ref=Go(h,v,y),x.return=h,x):(x=Mu(y.type,y.key,y.props,null,h.mode,x),x.ref=Go(h,v,y),x.return=h,x)}function u(h,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=vf(y,h.mode,x),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function c(h,v,y,x,E){return v===null||v.tag!==7?(v=rs(y,h.mode,x,E),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gf(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yl:return y=Mu(v.type,v.key,v.props,null,h.mode,y),y.ref=Go(h,null,v),y.return=h,y;case zs:return v=vf(v,h.mode,y),v.return=h,v;case dr:var x=v._init;return d(h,x(v._payload),y)}if(ia(v)||Bo(v))return v=rs(v,h.mode,y,null),v.return=h,v;Ll(h,v)}return null}function f(h,v,y,x){var E=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return E!==null?null:a(h,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return y.key===E?l(h,v,y,x):null;case zs:return y.key===E?u(h,v,y,x):null;case dr:return E=y._init,f(h,v,E(y._payload),x)}if(ia(y)||Bo(y))return E!==null?null:c(h,v,y,x,null);Ll(h,y)}return null}function p(h,v,y,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(y)||null,a(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case yl:return h=h.get(x.key===null?y:x.key)||null,l(v,h,x,E);case zs:return h=h.get(x.key===null?y:x.key)||null,u(v,h,x,E);case dr:var w=x._init;return p(h,v,y,w(x._payload),E)}if(ia(x)||Bo(x))return h=h.get(y)||null,c(v,h,x,E,null);Ll(v,x)}return null}function m(h,v,y,x){for(var E=null,w=null,C=v,_=v=0,A=null;C!==null&&_<y.length;_++){C.index>_?(A=C,C=null):A=C.sibling;var b=f(h,C,y[_],x);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(h,C),v=s(b,v,_),w===null?E=b:w.sibling=b,w=b,C=A}if(_===y.length)return n(h,C),pt&&Gr(h,_),E;if(C===null){for(;_<y.length;_++)C=d(h,y[_],x),C!==null&&(v=s(C,v,_),w===null?E=C:w.sibling=C,w=C);return pt&&Gr(h,_),E}for(C=i(h,C);_<y.length;_++)A=p(C,h,_,y[_],x),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?_:A.key),v=s(A,v,_),w===null?E=A:w.sibling=A,w=A);return t&&C.forEach(function(P){return e(h,P)}),pt&&Gr(h,_),E}function S(h,v,y,x){var E=Bo(y);if(typeof E!="function")throw Error(ne(150));if(y=E.call(y),y==null)throw Error(ne(151));for(var w=E=null,C=v,_=v=0,A=null,b=y.next();C!==null&&!b.done;_++,b=y.next()){C.index>_?(A=C,C=null):A=C.sibling;var P=f(h,C,b.value,x);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(h,C),v=s(P,v,_),w===null?E=P:w.sibling=P,w=P,C=A}if(b.done)return n(h,C),pt&&Gr(h,_),E;if(C===null){for(;!b.done;_++,b=y.next())b=d(h,b.value,x),b!==null&&(v=s(b,v,_),w===null?E=b:w.sibling=b,w=b);return pt&&Gr(h,_),E}for(C=i(h,C);!b.done;_++,b=y.next())b=p(C,h,_,b.value,x),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?_:b.key),v=s(b,v,_),w===null?E=b:w.sibling=b,w=b);return t&&C.forEach(function(N){return e(h,N)}),pt&&Gr(h,_),E}function g(h,v,y,x){if(typeof y=="object"&&y!==null&&y.type===Hs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:e:{for(var E=y.key,w=v;w!==null;){if(w.key===E){if(E=y.type,E===Hs){if(w.tag===7){n(h,w.sibling),v=r(w,y.props.children),v.return=h,h=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===dr&&u0(E)===w.type){n(h,w.sibling),v=r(w,y.props),v.ref=Go(h,w,y),v.return=h,h=v;break e}n(h,w);break}else e(h,w);w=w.sibling}y.type===Hs?(v=rs(y.props.children,h.mode,x,y.key),v.return=h,h=v):(x=Mu(y.type,y.key,y.props,null,h.mode,x),x.ref=Go(h,v,y),x.return=h,h=x)}return o(h);case zs:e:{for(w=y.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=vf(y,h.mode,x),v.return=h,h=v}return o(h);case dr:return w=y._init,g(h,v,w(y._payload),x)}if(ia(y))return m(h,v,y,x);if(Bo(y))return S(h,v,y,x);Ll(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=gf(y,h.mode,x),v.return=h,h=v),o(h)):n(h,v)}return g}var vo=Ey(!0),Ty=Ey(!1),Xu=Nr(null),Yu=null,Zs=null,zp=null;function Hp(){zp=Zs=Yu=null}function Gp(t){var e=Xu.current;dt(Xu),t._currentValue=e}function Yd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function lo(t,e){Yu=t,zp=Zs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(zp!==t)if(t={context:t,memoizedValue:e,next:null},Zs===null){if(Yu===null)throw Error(ne(308));Zs=t,Yu.dependencies={lanes:0,firstContext:t}}else Zs=Zs.next=t;return e}var jr=null;function Wp(t){jr===null?jr=[t]:jr.push(t)}function wy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Wp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ay(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function zi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Wp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function gu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pp(t,n)}}function c0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function $u(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,S=a;switch(f=e,p=n,S.tag){case 1:if(m=S.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=yt({},d,f);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=d}}function f0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var fl={},Mi=Nr(fl),Ha=Nr(fl),Ga=Nr(fl);function Jr(t){if(t===fl)throw Error(ne(174));return t}function Yp(t,e){switch(ut(Ga,e),ut(Ha,t),ut(Mi,fl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}dt(Mi),ut(Mi,e)}function _o(){dt(Mi),dt(Ha),dt(Ga)}function Cy(t){Jr(Ga.current);var e=Jr(Mi.current),n=Ad(e,t.type);e!==n&&(ut(Ha,t),ut(Mi,n))}function $p(t){Ha.current===t&&(dt(Mi),dt(Ha))}var mt=Nr(0);function qu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cf=[];function qp(){for(var t=0;t<cf.length;t++)cf[t]._workInProgressVersionPrimary=null;cf.length=0}var vu=er.ReactCurrentDispatcher,ff=er.ReactCurrentBatchConfig,ls=0,xt=null,Ot=null,Wt=null,Ku=!1,_a=!1,Wa=0,Y1=0;function en(){throw Error(ne(321))}function Kp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function Zp(t,e,n,i,r,s){if(ls=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,vu.current=t===null||t.memoizedState===null?Z1:j1,t=n(i,r),_a){s=0;do{if(_a=!1,Wa=0,25<=s)throw Error(ne(301));s+=1,Wt=Ot=null,e.updateQueue=null,vu.current=J1,t=n(i,r)}while(_a)}if(vu.current=Zu,e=Ot!==null&&Ot.next!==null,ls=0,Wt=Ot=xt=null,Ku=!1,e)throw Error(ne(300));return t}function jp(){var t=Wa!==0;return Wa=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?xt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function $n(){if(Ot===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?xt.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(ne(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?xt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function Xa(t,e){return typeof e=="function"?e(t):e}function df(t){var e=$n(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ls&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,xt.lanes|=c,us|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function hf(t){var e=$n(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ry(){}function by(t,e){var n=xt,i=$n(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,Jp(Dy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ya(9,Ly.bind(null,n,i,r,e),void 0,null),Xt===null)throw Error(ne(349));ls&30||Py(n,e,r)}return r}function Py(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ly(t,e,n,i){e.value=n,e.getSnapshot=i,Iy(e)&&Ny(t)}function Dy(t,e,n){return n(function(){Iy(e)&&Ny(t)})}function Iy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Ny(t){var e=qi(t,1);e!==null&&li(e,t,1,-1)}function d0(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xa,lastRenderedState:t},e.queue=t,t=t.dispatch=K1.bind(null,xt,t),[e.memoizedState,t]}function Ya(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Uy(){return $n().memoizedState}function _u(t,e,n,i){var r=vi();xt.flags|=t,r.memoizedState=Ya(1|e,n,void 0,i===void 0?null:i)}function Ec(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&Kp(i,o.deps)){r.memoizedState=Ya(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ya(1|e,n,s,i)}function h0(t,e){return _u(8390656,8,t,e)}function Jp(t,e){return Ec(2048,8,t,e)}function Fy(t,e){return Ec(4,2,t,e)}function Oy(t,e){return Ec(4,4,t,e)}function By(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function ky(t,e,n){return n=n!=null?n.concat([t]):null,Ec(4,4,By.bind(null,e,t),n)}function Qp(){}function Vy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function zy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Kp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Hy(t,e,n){return ls&21?(ci(n,e)||(n=$x(),xt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function $1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=ff.transition;ff.transition={};try{t(!1),e()}finally{nt=n,ff.transition=i}}function Gy(){return $n().memoizedState}function q1(t,e,n){var i=Ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Wy(t))Xy(e,n);else if(n=wy(t,e,n,i),n!==null){var r=hn();li(n,t,i,r),Yy(n,e,i)}}function K1(t,e,n){var i=Ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wy(t))Xy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,Wp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=wy(t,e,r,i),n!==null&&(r=hn(),li(n,t,i,r),Yy(n,e,i))}}function Wy(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Xy(t,e){_a=Ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Yy(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Pp(t,n)}}var Zu={readContext:Yn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},Z1={readContext:Yn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:h0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,_u(4194308,4,By.bind(null,e,t),n)},useLayoutEffect:function(t,e){return _u(4194308,4,t,e)},useInsertionEffect:function(t,e){return _u(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=q1.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:d0,useDebugValue:Qp,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=d0(!1),e=t[0];return t=$1.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=vi();if(pt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Xt===null)throw Error(ne(349));ls&30||Py(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,h0(Dy.bind(null,i,s,t),[t]),i.flags|=2048,Ya(9,Ly.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Xt.identifierPrefix;if(pt){var n=ki,i=Bi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Y1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},j1={readContext:Yn,useCallback:Vy,useContext:Yn,useEffect:Jp,useImperativeHandle:ky,useInsertionEffect:Fy,useLayoutEffect:Oy,useMemo:zy,useReducer:df,useRef:Uy,useState:function(){return df(Xa)},useDebugValue:Qp,useDeferredValue:function(t){var e=$n();return Hy(e,Ot.memoizedState,t)},useTransition:function(){var t=df(Xa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:by,useId:Gy,unstable_isNewReconciler:!1},J1={readContext:Yn,useCallback:Vy,useContext:Yn,useEffect:Jp,useImperativeHandle:ky,useInsertionEffect:Fy,useLayoutEffect:Oy,useMemo:zy,useReducer:hf,useRef:Uy,useState:function(){return hf(Xa)},useDebugValue:Qp,useDeferredValue:function(t){var e=$n();return Ot===null?e.memoizedState=t:Hy(e,Ot.memoizedState,t)},useTransition:function(){var t=hf(Xa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Ry,useSyncExternalStore:by,useId:Gy,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function $d(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Tc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Ar(t),s=zi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(li(e,t,r,i),gu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=hn(),r=Ar(t),s=zi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Tr(t,s,r),e!==null&&(li(e,t,r,i),gu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=hn(),i=Ar(t),r=zi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Tr(t,r,i),e!==null&&(li(e,t,i,n),gu(e,t,i))}};function p0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ba(n,i)||!Ba(r,s):!0}function $y(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=Mn(e)?os:cn.current,i=e.contextTypes,s=(i=i!=null)?mo(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Tc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function m0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Tc.enqueueReplaceState(e,e.state,null)}function qd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Xp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=Mn(e)?os:cn.current,r.context=mo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&($d(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Tc.enqueueReplaceState(r,r.state,null),$u(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function xo(t,e){try{var n="",i=e;do n+=AT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function pf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Kd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Q1=typeof WeakMap=="function"?WeakMap:Map;function qy(t,e,n){n=zi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Ju||(Ju=!0,sh=i),Kd(t,e)},n}function Ky(t,e,n){n=zi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Kd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Kd(t,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function g0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Q1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=hw.bind(null,t,e,n),e.then(t,t))}function v0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function _0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=zi(-1,1),e.tag=2,Tr(n,e,1))),n.lanes|=1),t)}var ew=er.ReactCurrentOwner,yn=!1;function dn(t,e,n,i){e.child=t===null?Ty(e,null,n,i):vo(e,t.child,n,i)}function x0(t,e,n,i,r){n=n.render;var s=e.ref;return lo(e,r),i=Zp(t,e,n,i,s,r),n=jp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&n&&Bp(e),e.flags|=1,dn(t,e,i,r),e.child)}function y0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!am(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Zy(t,e,s,i,r)):(t=Mu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ba,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=Cr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Zy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ba(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return Zd(t,e,n,i,r)}function jy(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Js,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Js,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Js,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Js,Cn),Cn|=i;return dn(t,e,r,n),e.child}function Jy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,i,r){var s=Mn(n)?os:cn.current;return s=mo(e,s),lo(e,r),n=Zp(t,e,n,i,s,r),i=jp(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&i&&Bp(e),e.flags|=1,dn(t,e,n,r),e.child)}function S0(t,e,n,i,r){if(Mn(n)){var s=!0;Hu(e)}else s=!1;if(lo(e,r),e.stateNode===null)xu(t,e),$y(e,n,i),qd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yn(u):(u=Mn(n)?os:cn.current,u=mo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&m0(e,o,i,u),hr=!1;var f=e.memoizedState;o.state=f,$u(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Sn.current||hr?(typeof c=="function"&&($d(e,n,c,i),l=e.memoizedState),(a=hr||p0(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ay(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ei(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=Mn(n)?os:cn.current,l=mo(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&m0(e,o,i,l),hr=!1,f=e.memoizedState,o.state=f,$u(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Sn.current||hr?(typeof p=="function"&&($d(e,n,p,i),m=e.memoizedState),(u=hr||p0(e,n,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return jd(t,e,n,i,s,r)}function jd(t,e,n,i,r,s){Jy(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&o0(e,n,!1),Ki(t,e,s);i=e.stateNode,ew.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=vo(e,t.child,null,s),e.child=vo(e,null,a,s)):dn(t,e,a,s),e.memoizedState=i.state,r&&o0(e,n,!0),e.child}function Qy(t){var e=t.stateNode;e.pendingContext?s0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s0(t,e.context,!1),Yp(t,e.containerInfo)}function M0(t,e,n,i,r){return go(),Vp(r),e.flags|=256,dn(t,e,n,i),e.child}var Jd={dehydrated:null,treeContext:null,retryLane:0};function Qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function eS(t,e,n){var i=e.pendingProps,r=mt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(mt,r&1),t===null)return Xd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Cc(o,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Qd(n),e.memoizedState=Jd,t):em(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return tw(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Cr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jd,i}return s=t.child,t=s.sibling,i=Cr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function em(t,e){return e=Cc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Dl(t,e,n,i){return i!==null&&Vp(i),vo(e,t.child,null,n),t=em(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function tw(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=pf(Error(ne(422))),Dl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Cc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vo(e,t.child,null,o),e.child.memoizedState=Qd(o),e.memoizedState=Jd,s);if(!(e.mode&1))return Dl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=pf(s,i,void 0),Dl(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Xt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),li(i,t,r,-1))}return om(),i=pf(Error(ne(421))),Dl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=pw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Er(r.nextSibling),Dn=e,pt=!0,ni=null,t!==null&&(Hn[Gn++]=Bi,Hn[Gn++]=ki,Hn[Gn++]=as,Bi=t.id,ki=t.overflow,as=e),e=em(e,i.children),e.flags|=4096,e)}function E0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yd(t.return,e,n)}function mf(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function tS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(t,e,i.children,n),i=mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E0(t,n,e);else if(t.tag===19)E0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&qu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),mf(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&qu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}mf(e,!0,n,null,s);break;case"together":mf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function xu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function nw(t,e,n){switch(e.tag){case 3:Qy(e),go();break;case 5:Cy(e);break;case 1:Mn(e.type)&&Hu(e);break;case 4:Yp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Xu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(mt,mt.current&1),e.flags|=128,null):n&e.child.childLanes?eS(t,e,n):(ut(mt,mt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);ut(mt,mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return tS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(mt,mt.current),i)break;return null;case 22:case 23:return e.lanes=0,jy(t,e,n)}return Ki(t,e,n)}var nS,eh,iS,rS;nS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eh=function(){};iS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Jr(Mi.current);var s=null;switch(n){case"input":r=Md(t,r),i=Md(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=wd(t,r),i=wd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Vu)}Cd(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(La.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(La.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rS=function(t,e,n,i){n!==i&&(e.flags|=4)};function Wo(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function iw(t,e,n){var i=e.pendingProps;switch(kp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&zu(),tn(e),null;case 3:return i=e.stateNode,_o(),dt(Sn),dt(cn),qp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Pl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(lh(ni),ni=null))),eh(t,e),tn(e),null;case 5:$p(e);var r=Jr(Ga.current);if(n=e.type,t!==null&&e.stateNode!=null)iS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return tn(e),null}if(t=Jr(Mi.current),Pl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[za]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<sa.length;r++)ft(sa[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Dg(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Ng(i,s),ft("invalid",i)}Cd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&bl(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&bl(i.textContent,a,t),r=["children",""+a]):La.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":Sl(i),Ig(i,s,!0);break;case"textarea":Sl(i),Ug(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Vu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[za]=i,nS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rd(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<sa.length;r++)ft(sa[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Dg(t,i),r=Md(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Ng(t,i),r=wd(t,i),ft("invalid",t);break;default:r=i}Cd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ux(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ix(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Da(t,l):typeof l=="number"&&Da(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(La.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Tp(t,s,l,o))}switch(n){case"input":Sl(t),Ig(t,i,!1);break;case"textarea":Sl(t),Ug(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Rr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ro(t,!!i.multiple,s,!1):i.defaultValue!=null&&ro(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Vu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)rS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Jr(Ga.current),Jr(Mi.current),Pl(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:bl(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bl(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return tn(e),null;case 13:if(dt(mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Ln!==null&&e.mode&1&&!(e.flags&128))My(),go(),e.flags|=98560,s=!1;else if(s=Pl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[xi]=e}else go(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ni!==null&&(lh(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||mt.current&1?Bt===0&&(Bt=3):om())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return _o(),eh(t,e),t===null&&ka(e.stateNode.containerInfo),tn(e),null;case 10:return Gp(e.type._context),tn(e),null;case 17:return Mn(e.type)&&zu(),tn(e),null;case 19:if(dt(mt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Wo(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=qu(t),o!==null){for(e.flags|=128,Wo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(mt,mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>yo&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304)}else{if(!i)if(t=qu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Wo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return tn(e),null}else 2*Lt()-s.renderingStartTime>yo&&n!==1073741824&&(e.flags|=128,i=!0,Wo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=mt.current,ut(mt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return sm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function rw(t,e){switch(kp(e),e.tag){case 1:return Mn(e.type)&&zu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),dt(Sn),dt(cn),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(dt(mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));go()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(mt),null;case 4:return _o(),null;case 10:return Gp(e.type._context),null;case 22:case 23:return sm(),null;case 24:return null;default:return null}}var Il=!1,on=!1,sw=typeof WeakSet=="function"?WeakSet:Set,Me=null;function js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function th(t,e,n){try{n()}catch(i){wt(t,e,i)}}var T0=!1;function ow(t,e){if(Bd=Ou,t=uy(),Op(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(kd={focusedElem:t,selectionRange:n},Ou=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:ei(e.type,S),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return m=T0,T0=!1,m}function xa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&th(e,n,s)}r=r.next}while(r!==i)}}function wc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function sS(t){var e=t.alternate;e!==null&&(t.alternate=null,sS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[za],delete e[Hd],delete e[H1],delete e[G1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function oS(t){return t.tag===5||t.tag===3||t.tag===4}function w0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||oS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ih(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Vu));else if(i!==4&&(t=t.child,t!==null))for(ih(t,e,n),t=t.sibling;t!==null;)ih(t,e,n),t=t.sibling}function rh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(rh(t,e,n),t=t.sibling;t!==null;)rh(t,e,n),t=t.sibling}var qt=null,ti=!1;function rr(t,e,n){for(n=n.child;n!==null;)aS(t,e,n),n=n.sibling}function aS(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(vc,n)}catch{}switch(n.tag){case 5:on||js(n,e);case 6:var i=qt,r=ti;qt=null,rr(t,e,n),qt=i,ti=r,qt!==null&&(ti?(t=qt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):qt.removeChild(n.stateNode));break;case 18:qt!==null&&(ti?(t=qt,n=n.stateNode,t.nodeType===8?lf(t.parentNode,n):t.nodeType===1&&lf(t,n),Fa(t)):lf(qt,n.stateNode));break;case 4:i=qt,r=ti,qt=n.stateNode.containerInfo,ti=!0,rr(t,e,n),qt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&th(n,e,o),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!on&&(js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,rr(t,e,n),on=i):rr(t,e,n);break;default:rr(t,e,n)}}function A0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new sw),e.forEach(function(i){var r=mw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:qt=a.stateNode,ti=!1;break e;case 3:qt=a.stateNode.containerInfo,ti=!0;break e;case 4:qt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(qt===null)throw Error(ne(160));aS(s,o,r),qt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)lS(e,t),e=e.sibling}function lS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),pi(t),i&4){try{xa(3,t,t.return),wc(3,t)}catch(S){wt(t,t.return,S)}try{xa(5,t,t.return)}catch(S){wt(t,t.return,S)}}break;case 1:Kn(e,t),pi(t),i&512&&n!==null&&js(n,n.return);break;case 5:if(Kn(e,t),pi(t),i&512&&n!==null&&js(n,n.return),t.flags&32){var r=t.stateNode;try{Da(r,"")}catch(S){wt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Px(r,s),Rd(a,o);var u=Rd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Ux(r,d):c==="dangerouslySetInnerHTML"?Ix(r,d):c==="children"?Da(r,d):Tp(r,c,d,u)}switch(a){case"input":Ed(r,s);break;case"textarea":Lx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ro(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?ro(r,!!s.multiple,s.defaultValue,!0):ro(r,!!s.multiple,s.multiple?[]:"",!1))}r[za]=s}catch(S){wt(t,t.return,S)}}break;case 6:if(Kn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){wt(t,t.return,S)}}break;case 3:if(Kn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(e.containerInfo)}catch(S){wt(t,t.return,S)}break;case 4:Kn(e,t),pi(t);break;case 13:Kn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(im=Lt())),i&4&&A0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||c,Kn(e,t),on=u):Kn(e,t),pi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Me=t,c=t.child;c!==null;){for(d=Me=c;Me!==null;){switch(f=Me,p=f.child,f.tag){case 0:case 11:case 14:case 15:xa(4,f,f.return);break;case 1:js(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(S){wt(i,n,S)}}break;case 5:js(f,f.return);break;case 22:if(f.memoizedState!==null){R0(d);continue}}p!==null?(p.return=f,Me=p):R0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nx("display",o))}catch(S){wt(t,t.return,S)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){wt(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),pi(t),i&4&&A0(t);break;case 21:break;default:Kn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(oS(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Da(r,""),i.flags&=-33);var s=w0(t);rh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=w0(t);ih(t,a,o);break;default:throw Error(ne(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function aw(t,e,n){Me=t,uS(t)}function uS(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Il;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Il;var u=on;if(Il=o,(on=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?b0(r):l!==null?(l.return=o,Me=l):b0(r);for(;s!==null;)Me=s,uS(s),s=s.sibling;Me=r,Il=a,on=u}C0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):C0(t)}}function C0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||wc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&f0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}on||e.flags&512&&nh(e)}catch(f){wt(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function R0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function b0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wc(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{nh(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{nh(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var lw=Math.ceil,ju=er.ReactCurrentDispatcher,tm=er.ReactCurrentOwner,Xn=er.ReactCurrentBatchConfig,Je=0,Xt=null,Ut=null,Zt=0,Cn=0,Js=Nr(0),Bt=0,$a=null,us=0,Ac=0,nm=0,ya=null,xn=null,im=0,yo=1/0,Ui=null,Ju=!1,sh=null,wr=null,Nl=!1,_r=null,Qu=0,Sa=0,oh=null,yu=-1,Su=0;function hn(){return Je&6?Lt():yu!==-1?yu:yu=Lt()}function Ar(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:X1.transition!==null?(Su===0&&(Su=$x()),Su):(t=nt,t!==0||(t=window.event,t=t===void 0?16:ey(t.type)),t):1}function li(t,e,n,i){if(50<Sa)throw Sa=0,oh=null,Error(ne(185));ll(t,n,i),(!(Je&2)||t!==Xt)&&(t===Xt&&(!(Je&2)&&(Ac|=n),Bt===4&&mr(t,Zt)),En(t,i),n===1&&Je===0&&!(e.mode&1)&&(yo=Lt()+500,Mc&&Ur()))}function En(t,e){var n=t.callbackNode;XT(t,e);var i=Fu(t,t===Xt?Zt:0);if(i===0)n!==null&&Bg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Bg(n),e===1)t.tag===0?W1(P0.bind(null,t)):xy(P0.bind(null,t)),V1(function(){!(Je&6)&&Ur()}),n=null;else{switch(qx(i)){case 1:n=bp;break;case 4:n=Xx;break;case 16:n=Uu;break;case 536870912:n=Yx;break;default:n=Uu}n=vS(n,cS.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function cS(t,e){if(yu=-1,Su=0,Je&6)throw Error(ne(327));var n=t.callbackNode;if(uo()&&t.callbackNode!==n)return null;var i=Fu(t,t===Xt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=ec(t,i);else{e=i;var r=Je;Je|=2;var s=dS();(Xt!==t||Zt!==e)&&(Ui=null,yo=Lt()+500,is(t,e));do try{fw();break}catch(a){fS(t,a)}while(!0);Hp(),ju.current=s,Je=r,Ut!==null?e=0:(Xt=null,Zt=0,e=Bt)}if(e!==0){if(e===2&&(r=Id(t),r!==0&&(i=r,e=ah(t,r))),e===1)throw n=$a,is(t,0),mr(t,i),En(t,Lt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!uw(r)&&(e=ec(t,i),e===2&&(s=Id(t),s!==0&&(i=s,e=ah(t,s))),e===1))throw n=$a,is(t,0),mr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Wr(t,xn,Ui);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=im+500-Lt(),10<e)){if(Fu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){hn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=zd(Wr.bind(null,t,xn,Ui),e);break}Wr(t,xn,Ui);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*lw(i/1960))-i,10<i){t.timeoutHandle=zd(Wr.bind(null,t,xn,Ui),i);break}Wr(t,xn,Ui);break;case 5:Wr(t,xn,Ui);break;default:throw Error(ne(329))}}}return En(t,Lt()),t.callbackNode===n?cS.bind(null,t):null}function ah(t,e){var n=ya;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=ec(t,e),t!==2&&(e=xn,xn=n,e!==null&&lh(e)),t}function lh(t){xn===null?xn=t:xn.push.apply(xn,t)}function uw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~nm,e&=~Ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function P0(t){if(Je&6)throw Error(ne(327));uo();var e=Fu(t,0);if(!(e&1))return En(t,Lt()),null;var n=ec(t,e);if(t.tag!==0&&n===2){var i=Id(t);i!==0&&(e=i,n=ah(t,i))}if(n===1)throw n=$a,is(t,0),mr(t,e),En(t,Lt()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,xn,Ui),En(t,Lt()),null}function rm(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(yo=Lt()+500,Mc&&Ur())}}function cs(t){_r!==null&&_r.tag===0&&!(Je&6)&&uo();var e=Je;Je|=1;var n=Xn.transition,i=nt;try{if(Xn.transition=null,nt=1,t)return t()}finally{nt=i,Xn.transition=n,Je=e,!(Je&6)&&Ur()}}function sm(){Cn=Js.current,dt(Js)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,k1(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(kp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&zu();break;case 3:_o(),dt(Sn),dt(cn),qp();break;case 5:$p(i);break;case 4:_o();break;case 13:dt(mt);break;case 19:dt(mt);break;case 10:Gp(i.type._context);break;case 22:case 23:sm()}n=n.return}if(Xt=t,Ut=t=Cr(t.current,null),Zt=Cn=e,Bt=0,$a=null,nm=Ac=us=0,xn=ya=null,jr!==null){for(e=0;e<jr.length;e++)if(n=jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}jr=null}return t}function fS(t,e){do{var n=Ut;try{if(Hp(),vu.current=Zu,Ku){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ku=!1}if(ls=0,Wt=Ot=xt=null,_a=!1,Wa=0,tm.current=null,n===null||n.return===null){Bt=1,$a=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=v0(o);if(p!==null){p.flags&=-257,_0(p,o,a,s,e),p.mode&1&&g0(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var S=new Set;S.add(l),e.updateQueue=S}else m.add(l);break e}else{if(!(e&1)){g0(s,u,e),om();break e}l=Error(ne(426))}}else if(pt&&a.mode&1){var g=v0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_0(g,o,a,s,e),Vp(xo(l,a));break e}}s=l=xo(l,a),Bt!==4&&(Bt=2),ya===null?ya=[s]:ya.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=qy(s,l,e);c0(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(wr===null||!wr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Ky(s,a,e);c0(s,x);break e}}s=s.return}while(s!==null)}pS(n)}catch(E){e=E,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function dS(){var t=ju.current;return ju.current=Zu,t===null?Zu:t}function om(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Xt===null||!(us&268435455)&&!(Ac&268435455)||mr(Xt,Zt)}function ec(t,e){var n=Je;Je|=2;var i=dS();(Xt!==t||Zt!==e)&&(Ui=null,is(t,e));do try{cw();break}catch(r){fS(t,r)}while(!0);if(Hp(),Je=n,ju.current=i,Ut!==null)throw Error(ne(261));return Xt=null,Zt=0,Bt}function cw(){for(;Ut!==null;)hS(Ut)}function fw(){for(;Ut!==null&&!FT();)hS(Ut)}function hS(t){var e=gS(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?pS(t):Ut=e,tm.current=null}function pS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=rw(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=iw(n,e,Cn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Wr(t,e,n){var i=nt,r=Xn.transition;try{Xn.transition=null,nt=1,dw(t,e,n,i)}finally{Xn.transition=r,nt=i}return null}function dw(t,e,n,i){do uo();while(_r!==null);if(Je&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(YT(t,s),t===Xt&&(Ut=Xt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Nl||(Nl=!0,vS(Uu,function(){return uo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=nt;nt=1;var a=Je;Je|=4,tm.current=null,ow(t,n),lS(n,t),D1(kd),Ou=!!Bd,kd=Bd=null,t.current=n,aw(n),OT(),Je=a,nt=o,Xn.transition=s}else t.current=n;if(Nl&&(Nl=!1,_r=t,Qu=r),s=t.pendingLanes,s===0&&(wr=null),VT(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ju)throw Ju=!1,t=sh,sh=null,t;return Qu&1&&t.tag!==0&&uo(),s=t.pendingLanes,s&1?t===oh?Sa++:(Sa=0,oh=t):Sa=0,Ur(),null}function uo(){if(_r!==null){var t=qx(Qu),e=Xn.transition,n=nt;try{if(Xn.transition=null,nt=16>t?16:t,_r===null)var i=!1;else{if(t=_r,_r=null,Qu=0,Je&6)throw Error(ne(331));var r=Je;for(Je|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:xa(8,c,s)}var d=c.child;if(d!==null)d.return=c,Me=d;else for(;Me!==null;){c=Me;var f=c.sibling,p=c.return;if(sS(c),c===u){Me=null;break}if(f!==null){f.return=p,Me=f;break}Me=p}}}var m=s.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:xa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){o=Me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Me=y;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wc(9,a)}}catch(E){wt(a,a.return,E)}if(a===o){Me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Me=x;break e}Me=a.return}}if(Je=r,Ur(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(vc,t)}catch{}i=!0}return i}finally{nt=n,Xn.transition=e}}return!1}function L0(t,e,n){e=xo(n,e),e=qy(t,e,1),t=Tr(t,e,1),e=hn(),t!==null&&(ll(t,1,e),En(t,e))}function wt(t,e,n){if(t.tag===3)L0(t,t,n);else for(;e!==null;){if(e.tag===3){L0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){t=xo(n,t),t=Ky(e,t,1),e=Tr(e,t,1),t=hn(),e!==null&&(ll(e,1,t),En(e,t));break}}e=e.return}}function hw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=hn(),t.pingedLanes|=t.suspendedLanes&n,Xt===t&&(Zt&n)===n&&(Bt===4||Bt===3&&(Zt&130023424)===Zt&&500>Lt()-im?is(t,0):nm|=n),En(t,e)}function mS(t,e){e===0&&(t.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var n=hn();t=qi(t,e),t!==null&&(ll(t,e,n),En(t,n))}function pw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),mS(t,n)}function mw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),mS(t,n)}var gS;gS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,nw(t,e,n);yn=!!(t.flags&131072)}else yn=!1,pt&&e.flags&1048576&&yy(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;xu(t,e),t=e.pendingProps;var r=mo(e,cn.current);lo(e,n),r=Zp(null,e,i,t,r,n);var s=jp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Hu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Xp(e),r.updater=Tc,e.stateNode=r,r._reactInternals=e,qd(e,i,t,n),e=jd(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Bp(e),dn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(xu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=vw(i),t=ei(i,t),r){case 0:e=Zd(null,e,i,t,n);break e;case 1:e=S0(null,e,i,t,n);break e;case 11:e=x0(null,e,i,t,n);break e;case 14:e=y0(null,e,i,ei(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Zd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),S0(t,e,i,r,n);case 3:e:{if(Qy(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ay(t,e),$u(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=xo(Error(ne(423)),e),e=M0(t,e,i,n,r);break e}else if(i!==r){r=xo(Error(ne(424)),e),e=M0(t,e,i,n,r);break e}else for(Ln=Er(e.stateNode.containerInfo.firstChild),Dn=e,pt=!0,ni=null,n=Ty(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(go(),i===r){e=Ki(t,e,n);break e}dn(t,e,i,n)}e=e.child}return e;case 5:return Cy(e),t===null&&Xd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vd(i,r)?o=null:s!==null&&Vd(i,s)&&(e.flags|=32),Jy(t,e),dn(t,e,o,n),e.child;case 6:return t===null&&Xd(e),null;case 13:return eS(t,e,n);case 4:return Yp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vo(e,null,i,n):dn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),x0(t,e,i,r,n);case 7:return dn(t,e,e.pendingProps,n),e.child;case 8:return dn(t,e,e.pendingProps.children,n),e.child;case 12:return dn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Xu,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!Sn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=zi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,lo(e,n),r=Yn(r),i=i(r),e.flags|=1,dn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),y0(t,e,i,r,n);case 15:return Zy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),xu(t,e),e.tag=1,Mn(i)?(t=!0,Hu(e)):t=!1,lo(e,n),$y(e,i,r),qd(e,i,r,n),jd(null,e,i,!0,t,n);case 19:return tS(t,e,n);case 22:return jy(t,e,n)}throw Error(ne(156,e.tag))};function vS(t,e){return Wx(t,e)}function gw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new gw(t,e,n,i)}function am(t){return t=t.prototype,!(!t||!t.isReactComponent)}function vw(t){if(typeof t=="function")return am(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ap)return 11;if(t===Cp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Mu(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")am(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hs:return rs(n.children,r,s,e);case wp:o=8,r|=8;break;case _d:return t=Wn(12,n,e,r|2),t.elementType=_d,t.lanes=s,t;case xd:return t=Wn(13,n,e,r),t.elementType=xd,t.lanes=s,t;case yd:return t=Wn(19,n,e,r),t.elementType=yd,t.lanes=s,t;case Cx:return Cc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wx:o=10;break e;case Ax:o=9;break e;case Ap:o=11;break e;case Cp:o=14;break e;case dr:o=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Cc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=Cx,t.lanes=n,t.stateNode={isHidden:!1},t}function gf(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function vf(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function _w(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zc(0),this.expirationTimes=Zc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function lm(t,e,n,i,r,s,o,a,l){return t=new _w(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Xp(s),t}function xw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:zs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function _S(t){if(!t)return br;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(Mn(n))return _y(t,n,e)}return e}function xS(t,e,n,i,r,s,o,a,l){return t=lm(n,i,!0,t,r,s,o,a,l),t.context=_S(null),n=t.current,i=hn(),r=Ar(n),s=zi(i,r),s.callback=e??null,Tr(n,s,r),t.current.lanes=r,ll(t,r,i),En(t,i),t}function Rc(t,e,n,i){var r=e.current,s=hn(),o=Ar(r);return n=_S(n),e.context===null?e.context=n:e.pendingContext=n,e=zi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Tr(r,e,o),t!==null&&(li(t,r,o,s),gu(t,r,o)),o}function tc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function um(t,e){D0(t,e),(t=t.alternate)&&D0(t,e)}function yw(){return null}var yS=typeof reportError=="function"?reportError:function(t){console.error(t)};function cm(t){this._internalRoot=t}bc.prototype.render=cm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));Rc(t,e,null,null)};bc.prototype.unmount=cm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){Rc(null,t,null,null)}),e[$i]=null}};function bc(t){this._internalRoot=t}bc.prototype.unstable_scheduleHydration=function(t){if(t){var e=jx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&Qx(t)}};function fm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function I0(){}function Sw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tc(o);s.call(u)}}var o=xS(e,i,t,0,null,!1,!1,"",I0);return t._reactRootContainer=o,t[$i]=o.current,ka(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tc(l);a.call(u)}}var l=lm(t,0,!1,null,null,!1,!1,"",I0);return t._reactRootContainer=l,t[$i]=l.current,ka(t.nodeType===8?t.parentNode:t),cs(function(){Rc(e,l,n,i)}),l}function Lc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}Rc(e,o,t,r)}else o=Sw(n,e,t,r,i);return tc(o)}Kx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ra(e.pendingLanes);n!==0&&(Pp(e,n|1),En(e,Lt()),!(Je&6)&&(yo=Lt()+500,Ur()))}break;case 13:cs(function(){var i=qi(t,1);if(i!==null){var r=hn();li(i,t,1,r)}}),um(t,1)}};Lp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=hn();li(e,t,134217728,n)}um(t,134217728)}};Zx=function(t){if(t.tag===13){var e=Ar(t),n=qi(t,e);if(n!==null){var i=hn();li(n,t,e,i)}um(t,e)}};jx=function(){return nt};Jx=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Pd=function(t,e,n){switch(e){case"input":if(Ed(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Sc(i);if(!r)throw Error(ne(90));bx(i),Ed(i,r)}}}break;case"textarea":Lx(t,n);break;case"select":e=n.value,e!=null&&ro(t,!!n.multiple,e,!1)}};Bx=rm;kx=cs;var Mw={usingClientEntryPoint:!1,Events:[cl,Ys,Sc,Fx,Ox,rm]},Xo={findFiberByHostInstance:Zr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ew={bundleType:Xo.bundleType,version:Xo.version,rendererPackageName:Xo.rendererPackageName,rendererConfig:Xo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hx(t),t===null?null:t.stateNode},findFiberByHostInstance:Xo.findFiberByHostInstance||yw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{vc=Ul.inject(Ew),Si=Ul}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Mw;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fm(e))throw Error(ne(200));return xw(t,e,null,n)};Fn.createRoot=function(t,e){if(!fm(t))throw Error(ne(299));var n=!1,i="",r=yS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=lm(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,ka(t.nodeType===8?t.parentNode:t),new cm(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=Hx(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return cs(t)};Fn.hydrate=function(t,e,n){if(!Pc(e))throw Error(ne(200));return Lc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!fm(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=yS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=xS(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,ka(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new bc(e)};Fn.render=function(t,e,n){if(!Pc(e))throw Error(ne(200));return Lc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Pc(t))throw Error(ne(40));return t._reactRootContainer?(cs(function(){Lc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Fn.unstable_batchedUpdates=rm;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Pc(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return Lc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function SS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(SS)}catch(t){console.error(t)}}SS(),Sx.exports=Fn;var Tw=Sx.exports,MS,N0=Tw;MS=N0.createRoot,N0.hydrateRoot;const dm=oe.createContext({});function hm(t){const e=oe.useRef(null);return e.current===null&&(e.current=t()),e.current}const Dc=oe.createContext(null),pm=oe.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class ww extends oe.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Aw({children:t,isPresent:e}){const n=oe.useId(),i=oe.useRef(null),r=oe.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=oe.useContext(pm);return oe.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),he.jsx(ww,{isPresent:e,childRef:i,sizeRef:r,children:oe.cloneElement(t,{ref:i})})}const Cw=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=hm(Rw),l=oe.useId(),u=oe.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),c=oe.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),u]:[n,u]);return oe.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),oe.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=he.jsx(Aw,{isPresent:n,children:t})),he.jsx(Dc.Provider,{value:c,children:t})};function Rw(){return new Map}function ES(t=!0){const e=oe.useContext(Dc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=oe.useId();oe.useEffect(()=>{t&&r(s)},[t]);const o=oe.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Fl=t=>t.key||"";function U0(t){const e=[];return oe.Children.forEach(t,n=>{oe.isValidElement(n)&&e.push(n)}),e}const mm=typeof window<"u",TS=mm?oe.useLayoutEffect:oe.useEffect,nc=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=ES(o),u=oe.useMemo(()=>U0(t),[t]),c=o&&!a?[]:u.map(Fl),d=oe.useRef(!0),f=oe.useRef(u),p=hm(()=>new Map),[m,S]=oe.useState(u),[g,h]=oe.useState(u);TS(()=>{d.current=!1,f.current=u;for(let x=0;x<g.length;x++){const E=Fl(g[x]);c.includes(E)?p.delete(E):p.get(E)!==!0&&p.set(E,!1)}},[g,c.length,c.join("-")]);const v=[];if(u!==m){let x=[...u];for(let E=0;E<g.length;E++){const w=g[E],C=Fl(w);c.includes(C)||(x.splice(E,0,w),v.push(w))}s==="wait"&&v.length&&(x=v),h(U0(x)),S(u);return}const{forceRender:y}=oe.useContext(dm);return he.jsx(he.Fragment,{children:g.map(x=>{const E=Fl(x),w=o&&!a?!1:u===g||c.includes(E),C=()=>{if(p.has(E))p.set(E,!0);else return;let _=!0;p.forEach(A=>{A||(_=!1)}),_&&(y==null||y(),h(f.current),o&&(l==null||l()),i&&i())};return he.jsx(Cw,{isPresent:w,initial:!d.current||n?void 0:!1,custom:w?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:w?void 0:C,children:x},E)})})},In=t=>t;let wS=In;function gm(t){let e;return()=>(e===void 0&&(e=t()),e)}const So=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Hi=t=>t*1e3,Gi=t=>t/1e3,bw={useManualTiming:!1};function Pw(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const p=d&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const Ol=["read","resolveKeyframes","update","preRender","render","postRender"],Lw=40;function AS(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=Ol.reduce((h,v)=>(h[v]=Pw(s),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,Lw),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},m=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:Ol.reduce((h,v)=>{const y=o[v];return h[v]=(x,E=!1,w=!1)=>(n||m(),y.schedule(x,E,w)),h},{}),cancel:h=>{for(let v=0;v<Ol.length;v++)o[Ol[v]].cancel(h)},state:r,steps:o}}const{schedule:ht,cancel:Pr,state:Kt,steps:_f}=AS(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),CS=oe.createContext({strict:!1}),F0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mo={};for(const t in F0)Mo[t]={isEnabled:e=>F0[t].some(n=>!!e[n])};function Dw(t){for(const e in t)Mo[e]={...Mo[e],...t[e]}}const Iw=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function ic(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||Iw.has(t)}let RS=t=>!ic(t);function Nw(t){t&&(RS=e=>e.startsWith("on")?!ic(e):t(e))}try{Nw(require("@emotion/is-prop-valid").default)}catch{}function Uw(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(RS(r)||n===!0&&ic(r)||!e&&!ic(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function Fw(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const Ic=oe.createContext({});function qa(t){return typeof t=="string"||Array.isArray(t)}function Nc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const vm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],_m=["initial",...vm];function Uc(t){return Nc(t.animate)||_m.some(e=>qa(t[e]))}function bS(t){return!!(Uc(t)||t.variants)}function Ow(t,e){if(Uc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||qa(n)?n:void 0,animate:qa(i)?i:void 0}}return t.inherit!==!1?e:{}}function Bw(t){const{initial:e,animate:n}=Ow(t,oe.useContext(Ic));return oe.useMemo(()=>({initial:e,animate:n}),[O0(e),O0(n)])}function O0(t){return Array.isArray(t)?t.join(" "):t}const kw=Symbol.for("motionComponentSymbol");function Qs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Vw(t,e,n){return oe.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):Qs(n)&&(n.current=i))},[e])}const xm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),zw="framerAppearId",PS="data-"+xm(zw),{schedule:ym}=AS(queueMicrotask,!1),LS=oe.createContext({});function Hw(t,e,n,i,r){var s,o;const{visualElement:a}=oe.useContext(Ic),l=oe.useContext(CS),u=oe.useContext(Dc),c=oe.useContext(pm).reducedMotion,d=oe.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,p=oe.useContext(LS);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&Gw(d.current,n,r,p);const m=oe.useRef(!1);oe.useInsertionEffect(()=>{f&&m.current&&f.update(n,u)});const S=n[PS],g=oe.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,S)));return TS(()=>{f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),ym.render(f.render),g.current&&f.animationState&&f.animationState.animateChanges())}),oe.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,S)}),g.current=!1))}),f}function Gw(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:DS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Qs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function DS(t){if(t)return t.options.allowProjection!==!1?t.projection:DS(t.parent)}function Ww({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Dw(t);function a(u,c){let d;const f={...oe.useContext(pm),...u,layoutId:Xw(u)},{isStatic:p}=f,m=Bw(u),S=i(u,p);if(!p&&mm){Yw();const g=$w(f);d=g.MeasureLayout,m.visualElement=Hw(r,S,f,e,g.ProjectionNode)}return he.jsxs(Ic.Provider,{value:m,children:[d&&m.visualElement?he.jsx(d,{visualElement:m.visualElement,...f}):null,n(r,u,Vw(S,m.visualElement,c),S,p,m.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=oe.forwardRef(a);return l[kw]=r,l}function Xw({layoutId:t}){const e=oe.useContext(dm).id;return e&&t!==void 0?e+"-"+t:t}function Yw(t,e){oe.useContext(CS).strict}function $w(t){const{drag:e,layout:n}=Mo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const qw=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Sm(t){return typeof t!="string"||t.includes("-")?!1:!!(qw.indexOf(t)>-1||/[A-Z]/u.test(t))}function B0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Mm(t,e,n,i){if(typeof e=="function"){const[r,s]=B0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=B0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const uh=t=>Array.isArray(t),Kw=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),Zw=t=>uh(t)?t[t.length-1]||0:t,an=t=>!!(t&&t.getVelocity);function Eu(t){const e=an(t)?t.get():t;return Kw(e)?e.toValue():e}function jw({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:Jw(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const IS=t=>(e,n)=>{const i=oe.useContext(Ic),r=oe.useContext(Dc),s=()=>jw(t,e,i,r);return n?s():hm(s)};function Jw(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Eu(s[f]);let{initial:o,animate:a}=t;const l=Uc(t),u=bS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Nc(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const m=Mm(t,f[p]);if(m){const{transitionEnd:S,transition:g,...h}=m;for(const v in h){let y=h[v];if(Array.isArray(y)){const x=c?y.length-1:0;y=y[x]}y!==null&&(r[v]=y)}for(const v in S)r[v]=S[v]}}}return r}const Do=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vs=new Set(Do),NS=t=>e=>typeof e=="string"&&e.startsWith(t),US=NS("--"),Qw=NS("var(--"),Em=t=>Qw(t)?eA.test(t.split("/*")[0].trim()):!1,eA=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,FS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Zi=(t,e,n)=>n>e?e:n<t?t:n,Io={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ka={...Io,transform:t=>Zi(0,1,t)},Bl={...Io,default:1},dl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),fr=dl("deg"),Ei=dl("%"),De=dl("px"),tA=dl("vh"),nA=dl("vw"),k0={...Ei,parse:t=>Ei.parse(t)/100,transform:t=>Ei.transform(t*100)},iA={borderWidth:De,borderTopWidth:De,borderRightWidth:De,borderBottomWidth:De,borderLeftWidth:De,borderRadius:De,radius:De,borderTopLeftRadius:De,borderTopRightRadius:De,borderBottomRightRadius:De,borderBottomLeftRadius:De,width:De,maxWidth:De,height:De,maxHeight:De,top:De,right:De,bottom:De,left:De,padding:De,paddingTop:De,paddingRight:De,paddingBottom:De,paddingLeft:De,margin:De,marginTop:De,marginRight:De,marginBottom:De,marginLeft:De,backgroundPositionX:De,backgroundPositionY:De},rA={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:Bl,scaleX:Bl,scaleY:Bl,scaleZ:Bl,skew:fr,skewX:fr,skewY:fr,distance:De,translateX:De,translateY:De,translateZ:De,x:De,y:De,z:De,perspective:De,transformPerspective:De,opacity:Ka,originX:k0,originY:k0,originZ:De},V0={...Io,transform:Math.round},Tm={...iA,...rA,zIndex:V0,size:De,fillOpacity:Ka,strokeOpacity:Ka,numOctaves:V0},sA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},oA=Do.length;function aA(t,e,n){let i="",r=!0;for(let s=0;s<oA;s++){const o=Do[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=FS(a,Tm[o]);if(!l){r=!1;const c=sA[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function wm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(vs.has(l)){o=!0;continue}else if(US(l)){r[l]=u;continue}else{const c=FS(u,Tm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=aA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const lA={offset:"stroke-dashoffset",array:"stroke-dasharray"},uA={offset:"strokeDashoffset",array:"strokeDasharray"};function cA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?lA:uA;t[s.offset]=De.transform(-i);const o=De.transform(e),a=De.transform(n);t[s.array]=`${o} ${a}`}function z0(t,e,n){return typeof t=="string"?t:De.transform(e+n*t)}function fA(t,e,n){const i=z0(e,t.x,t.width),r=z0(n,t.y,t.height);return`${i} ${r}`}function Am(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(wm(t,u,d),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:m}=t;f.transform&&(m&&(p.transform=f.transform),delete f.transform),m&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=fA(m,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&cA(f,o,a,l,!1)}const Cm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),OS=()=>({...Cm(),attrs:{}}),Rm=t=>typeof t=="string"&&t.toLowerCase()==="svg";function BS(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const kS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function VS(t,e,n,i){BS(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(kS.has(r)?r:xm(r),e.attrs[r])}const rc={};function dA(t){Object.assign(rc,t)}function zS(t,{layout:e,layoutId:n}){return vs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!rc[t]||t==="opacity")}function bm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(an(r[o])||e.style&&an(e.style[o])||zS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function HS(t,e,n){const i=bm(t,e,n);for(const r in t)if(an(t[r])||an(e[r])){const s=Do.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function hA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const H0=["x","y","width","height","cx","cy","r"],pA={useVisualState:IS({scrapeMotionValuesFromProps:HS,createRenderState:OS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(vs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<H0.length;a++){const l=H0[a];t[l]!==e[l]&&(o=!0)}o&&ht.read(()=>{hA(n,i),ht.render(()=>{Am(i,r,Rm(n.tagName),t.transformTemplate),VS(n,i)})})}})},mA={useVisualState:IS({scrapeMotionValuesFromProps:bm,createRenderState:Cm})};function GS(t,e,n){for(const i in e)!an(e[i])&&!zS(i,n)&&(t[i]=e[i])}function gA({transformTemplate:t},e){return oe.useMemo(()=>{const n=Cm();return wm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function vA(t,e){const n=t.style||{},i={};return GS(i,n,t),Object.assign(i,gA(t,e)),i}function _A(t,e){const n={},i=vA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function xA(t,e,n,i){const r=oe.useMemo(()=>{const s=OS();return Am(s,e,Rm(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};GS(s,t.style,t),r.style={...s,...r.style}}return r}function yA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Sm(n)?xA:_A)(i,s,o,n),u=Uw(i,typeof n=="string",t),c=n!==oe.Fragment?{...u,...l,ref:r}:{},{children:d}=i,f=oe.useMemo(()=>an(d)?d.get():d,[d]);return oe.createElement(n,{...c,children:f})}}function SA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Sm(i)?pA:mA,preloadedFeatures:t,useRender:yA(r),createVisualElement:e,Component:i};return Ww(o)}}function WS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Fc(t,e,n){const i=t.getProps();return Mm(i,e,n!==void 0?n:i.custom,t)}const MA=gm(()=>window.ScrollTimeline!==void 0);class EA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(MA()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class TA extends EA{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Pm(t,e){return t?t[e]||t.default||t:void 0}const ch=2e4;function XS(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<ch;)e+=n,i=t.next(e);return e>=ch?1/0:e}function Lm(t){return typeof t=="function"}function G0(t,e){t.timeline=e,t.onfinish=null}const Dm=t=>Array.isArray(t)&&typeof t[0]=="number",wA={linearEasing:void 0};function AA(t,e){const n=gm(t);return()=>{var i;return(i=wA[e])!==null&&i!==void 0?i:n()}}const sc=AA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),YS=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(So(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function $S(t){return!!(typeof t=="function"&&sc()||!t||typeof t=="string"&&(t in fh||sc())||Dm(t)||Array.isArray(t)&&t.every($S))}const oa=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,fh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:oa([0,.65,.55,1]),circOut:oa([.55,0,1,.45]),backIn:oa([.31,.01,.66,-.59]),backOut:oa([.33,1.53,.69,.99])};function qS(t,e){if(t)return typeof t=="function"&&sc()?YS(t,e):Dm(t)?oa(t):Array.isArray(t)?t.map(n=>qS(n,e)||fh.easeOut):fh[t]}const Qn={x:!1,y:!1};function KS(){return Qn.x||Qn.y}function CA(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=void 0)!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function ZS(t,e){const n=CA(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function W0(t){return e=>{e.pointerType==="touch"||KS()||t(e)}}function RA(t,e,n={}){const[i,r,s]=ZS(t,n),o=W0(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=W0(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const jS=(t,e)=>e?t===e?!0:jS(t,e.parentElement):!1,Im=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,bA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function PA(t){return bA.has(t.tagName)||t.tabIndex!==-1}const aa=new WeakSet;function X0(t){return e=>{e.key==="Enter"&&t(e)}}function xf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const LA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=X0(()=>{if(aa.has(n))return;xf(n,"down");const r=X0(()=>{xf(n,"up")}),s=()=>xf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Y0(t){return Im(t)&&!KS()}function DA(t,e,n={}){const[i,r,s]=ZS(t,n),o=a=>{const l=a.currentTarget;if(!Y0(a)||aa.has(l))return;aa.add(l);const u=e(a),c=(p,m)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!Y0(p)||!aa.has(l))&&(aa.delete(l),typeof u=="function"&&u(p,{success:m}))},d=p=>{c(p,n.useGlobalTarget||jS(l,p.target))},f=p=>{c(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!PA(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>LA(u,r),r)}),s}function IA(t){return t==="x"||t==="y"?Qn[t]?null:(Qn[t]=!0,()=>{Qn[t]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}const JS=new Set(["width","height","top","left","right","bottom",...Do]);let Tu;function NA(){Tu=void 0}const Ti={now:()=>(Tu===void 0&&Ti.set(Kt.isProcessing||bw.useManualTiming?Kt.timestamp:performance.now()),Tu),set:t=>{Tu=t,queueMicrotask(NA)}};function Nm(t,e){t.indexOf(e)===-1&&t.push(e)}function Um(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Fm{constructor(){this.subscriptions=[]}add(e){return Nm(this.subscriptions,e),()=>Um(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function QS(t,e){return e?t*(1e3/e):0}const $0=30,UA=t=>!isNaN(parseFloat(t));class FA{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ti.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ti.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=UA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Fm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ti.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>$0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,$0);return QS(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Za(t,e){return new FA(t,e)}function OA(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Za(n))}function BA(t,e){const n=Fc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=Zw(s[o]);OA(t,o,a)}}function kA(t){return!!(an(t)&&t.add)}function dh(t,e){const n=t.getValue("willChange");if(kA(n))return n.add(e)}function eM(t){return t.props[PS]}const tM=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,VA=1e-7,zA=12;function HA(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=tM(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>VA&&++a<zA);return o}function hl(t,e,n,i){if(t===e&&n===i)return In;const r=s=>HA(s,0,1,t,n);return s=>s===0||s===1?s:tM(r(s),e,i)}const nM=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,iM=t=>e=>1-t(1-e),rM=hl(.33,1.53,.69,.99),Om=iM(rM),sM=nM(Om),oM=t=>(t*=2)<1?.5*Om(t):.5*(2-Math.pow(2,-10*(t-1))),Bm=t=>1-Math.sin(Math.acos(t)),aM=iM(Bm),lM=nM(Bm),uM=t=>/^0[^.\s]+$/u.test(t);function GA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||uM(t):!0}const Ma=t=>Math.round(t*1e5)/1e5,km=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function WA(t){return t==null}const XA=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Vm=(t,e)=>n=>!!(typeof n=="string"&&XA.test(n)&&n.startsWith(t)||e&&!WA(n)&&Object.prototype.hasOwnProperty.call(n,e)),cM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(km);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},YA=t=>Zi(0,255,t),yf={...Io,transform:t=>Math.round(YA(t))},Qr={test:Vm("rgb","red"),parse:cM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+yf.transform(t)+", "+yf.transform(e)+", "+yf.transform(n)+", "+Ma(Ka.transform(i))+")"};function $A(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const hh={test:Vm("#"),parse:$A,transform:Qr.transform},eo={test:Vm("hsl","hue"),parse:cM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ei.transform(Ma(e))+", "+Ei.transform(Ma(n))+", "+Ma(Ka.transform(i))+")"},sn={test:t=>Qr.test(t)||hh.test(t)||eo.test(t),parse:t=>Qr.test(t)?Qr.parse(t):eo.test(t)?eo.parse(t):hh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?Qr.transform(t):eo.transform(t)},qA=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function KA(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(km))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(qA))===null||n===void 0?void 0:n.length)||0)>0}const fM="number",dM="color",ZA="var",jA="var(",q0="${}",JA=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ja(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(JA,l=>(sn.test(l)?(i.color.push(s),r.push(dM),n.push(sn.parse(l))):l.startsWith(jA)?(i.var.push(s),r.push(ZA),n.push(l)):(i.number.push(s),r.push(fM),n.push(parseFloat(l))),++s,q0)).split(q0);return{values:n,split:a,indexes:i,types:r}}function hM(t){return ja(t).values}function pM(t){const{split:e,types:n}=ja(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===fM?s+=Ma(r[o]):a===dM?s+=sn.transform(r[o]):s+=r[o]}return s}}const QA=t=>typeof t=="number"?0:t;function eC(t){const e=hM(t);return pM(t)(e.map(QA))}const Lr={test:KA,parse:hM,createTransformer:pM,getAnimatableNone:eC},tC=new Set(["brightness","contrast","saturate","opacity"]);function nC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(km)||[];if(!i)return t;const r=n.replace(i,"");let s=tC.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const iC=/\b([a-z-]*)\(.*?\)/gu,ph={...Lr,getAnimatableNone:t=>{const e=t.match(iC);return e?e.map(nC).join(" "):t}},rC={...Tm,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:ph,WebkitFilter:ph},zm=t=>rC[t];function mM(t,e){let n=zm(t);return n!==ph&&(n=Lr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const sC=new Set(["auto","none","0"]);function oC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!sC.has(s)&&ja(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=mM(n,r)}const K0=t=>t===Io||t===De,Z0=(t,e)=>parseFloat(t.split(", ")[e]),j0=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return Z0(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?Z0(s[1],t):0}},aC=new Set(["x","y","z"]),lC=Do.filter(t=>!aC.has(t));function uC(t){const e=[];return lC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Eo={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:j0(4,13),y:j0(5,14)};Eo.translateX=Eo.x;Eo.translateY=Eo.y;const ss=new Set;let mh=!1,gh=!1;function gM(){if(gh){const t=Array.from(ss).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=uC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}gh=!1,mh=!1,ss.forEach(t=>t.complete()),ss.clear()}function vM(){ss.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(gh=!0)})}function cC(){vM(),gM()}class Hm{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ss.add(this),mh||(mh=!0,ht.read(vM),ht.resolveKeyframes(gM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ss.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ss.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const _M=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),fC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function dC(t){const e=fC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function xM(t,e,n=1){const[i,r]=dC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return _M(o)?parseFloat(o):o}return Em(r)?xM(r,e,n+1):r}const yM=t=>e=>e.test(t),hC={test:t=>t==="auto",parse:t=>t},SM=[Io,De,Ei,fr,nA,tA,hC],J0=t=>SM.find(yM(t));class MM extends Hm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Em(u))){const c=xM(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!JS.has(i)||e.length!==2)return;const[r,s]=e,o=J0(r),a=J0(s);if(o!==a)if(K0(o)&&K0(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)GA(e[r])&&i.push(r);i.length&&oC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Eo[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=Eo[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const Q0=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Lr.test(t)||t==="0")&&!t.startsWith("url("));function pC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function mC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Q0(r,e),a=Q0(s,e);return!o||!a?!1:pC(t)||(n==="spring"||Lm(n))&&i}const gC=t=>t!==null;function Oc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(gC),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const vC=40;class EM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ti.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>vC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&cC(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ti.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!mC(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Oc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const gt=(t,e,n)=>t+(e-t)*n;function Sf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function _C({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Sf(l,a,t+1/3),s=Sf(l,a,t),o=Sf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function oc(t,e){return n=>n>0?e:t}const Mf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},xC=[hh,Qr,eo],yC=t=>xC.find(e=>e.test(t));function ev(t){const e=yC(t);if(!e)return!1;let n=e.parse(t);return e===eo&&(n=_C(n)),n}const tv=(t,e)=>{const n=ev(t),i=ev(e);if(!n||!i)return oc(t,e);const r={...n};return s=>(r.red=Mf(n.red,i.red,s),r.green=Mf(n.green,i.green,s),r.blue=Mf(n.blue,i.blue,s),r.alpha=gt(n.alpha,i.alpha,s),Qr.transform(r))},SC=(t,e)=>n=>e(t(n)),pl=(...t)=>t.reduce(SC),vh=new Set(["none","hidden"]);function MC(t,e){return vh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function EC(t,e){return n=>gt(t,e,n)}function Gm(t){return typeof t=="number"?EC:typeof t=="string"?Em(t)?oc:sn.test(t)?tv:AC:Array.isArray(t)?TM:typeof t=="object"?sn.test(t)?tv:TC:oc}function TM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Gm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function TC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Gm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function wC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const AC=(t,e)=>{const n=Lr.createTransformer(e),i=ja(t),r=ja(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?vh.has(t)&&!r.values.length||vh.has(e)&&!i.values.length?MC(t,e):pl(TM(wC(i,r),r.values),n):oc(t,e)};function wM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?gt(t,e,n):Gm(t)(t,e)}const CC=5;function AM(t,e,n){const i=Math.max(e-CC,0);return QS(n-t(i),e-i)}const Tt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Ef=.001;function RC({duration:t=Tt.duration,bounce:e=Tt.bounce,velocity:n=Tt.velocity,mass:i=Tt.mass}){let r,s,o=1-e;o=Zi(Tt.minDamping,Tt.maxDamping,o),t=Zi(Tt.minDuration,Tt.maxDuration,Gi(t)),o<1?(r=u=>{const c=u*o,d=c*t,f=c-n,p=_h(u,o),m=Math.exp(-d);return Ef-f/p*m},s=u=>{const d=u*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-d),S=_h(Math.pow(u,2),o);return(-r(u)+Ef>0?-1:1)*((f-p)*m)/S}):(r=u=>{const c=Math.exp(-u*t),d=(u-n)*t+1;return-Ef+c*d},s=u=>{const c=Math.exp(-u*t),d=(n-u)*(t*t);return c*d});const a=5/t,l=PC(r,s,a);if(t=Hi(t),isNaN(l))return{stiffness:Tt.stiffness,damping:Tt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const bC=12;function PC(t,e,n){let i=n;for(let r=1;r<bC;r++)i=i-t(i)/e(i);return i}function _h(t,e){return t*Math.sqrt(1-e*e)}const LC=["duration","bounce"],DC=["stiffness","damping","mass"];function nv(t,e){return e.some(n=>t[n]!==void 0)}function IC(t){let e={velocity:Tt.velocity,stiffness:Tt.stiffness,damping:Tt.damping,mass:Tt.mass,isResolvedFromDuration:!1,...t};if(!nv(t,DC)&&nv(t,LC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Zi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Tt.mass,stiffness:r,damping:s}}else{const n=RC(t);e={...e,...n,mass:Tt.mass},e.isResolvedFromDuration=!0}return e}function CM(t=Tt.visualDuration,e=Tt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=IC({...n,velocity:-Gi(n.velocity||0)}),m=f||0,S=u/(2*Math.sqrt(l*c)),g=o-s,h=Gi(Math.sqrt(l/c)),v=Math.abs(g)<5;i||(i=v?Tt.restSpeed.granular:Tt.restSpeed.default),r||(r=v?Tt.restDelta.granular:Tt.restDelta.default);let y;if(S<1){const E=_h(h,S);y=w=>{const C=Math.exp(-S*h*w);return o-C*((m+S*h*g)/E*Math.sin(E*w)+g*Math.cos(E*w))}}else if(S===1)y=E=>o-Math.exp(-h*E)*(g+(m+h*g)*E);else{const E=h*Math.sqrt(S*S-1);y=w=>{const C=Math.exp(-S*h*w),_=Math.min(E*w,300);return o-C*((m+S*h*g)*Math.sinh(_)+E*g*Math.cosh(_))/E}}const x={calculatedDuration:p&&d||null,next:E=>{const w=y(E);if(p)a.done=E>=d;else{let C=0;S<1&&(C=E===0?Hi(m):AM(y,E,w));const _=Math.abs(C)<=i,A=Math.abs(o-w)<=r;a.done=_&&A}return a.value=a.done?o:w,a},toString:()=>{const E=Math.min(XS(x),ch),w=YS(C=>x.next(E*C).value,E,30);return E+"ms "+w}};return x}function iv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],f={done:!1,value:d},p=_=>a!==void 0&&_<a||l!==void 0&&_>l,m=_=>a===void 0?l:l===void 0||Math.abs(a-_)<Math.abs(l-_)?a:l;let S=n*e;const g=d+S,h=o===void 0?g:o(g);h!==g&&(S=h-d);const v=_=>-S*Math.exp(-_/i),y=_=>h+v(_),x=_=>{const A=v(_),b=y(_);f.done=Math.abs(A)<=u,f.value=f.done?h:b};let E,w;const C=_=>{p(f.value)&&(E=_,w=CM({keyframes:[f.value,m(f.value)],velocity:AM(y,_,f.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:_=>{let A=!1;return!w&&E===void 0&&(A=!0,x(_),C(_)),E!==void 0&&_>=E?w.next(_-E):(!A&&x(_),f)}}}const NC=hl(.42,0,1,1),UC=hl(0,0,.58,1),RM=hl(.42,0,.58,1),FC=t=>Array.isArray(t)&&typeof t[0]!="number",OC={linear:In,easeIn:NC,easeInOut:RM,easeOut:UC,circIn:Bm,circInOut:lM,circOut:aM,backIn:Om,backInOut:sM,backOut:rM,anticipate:oM},rv=t=>{if(Dm(t)){wS(t.length===4);const[e,n,i,r]=t;return hl(e,n,i,r)}else if(typeof t=="string")return OC[t];return t};function BC(t,e,n){const i=[],r=n||wM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||In:e;a=pl(l,a)}i.push(a)}return i}function kC(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(wS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=BC(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const f=So(t[d],t[d+1],c);return a[d](f)};return n?c=>u(Zi(t[0],t[s-1],c)):u}function VC(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=So(0,e,i);t.push(gt(n,1,r))}}function zC(t){const e=[0];return VC(e,t.length-1),e}function HC(t,e){return t.map(n=>n*e)}function GC(t,e){return t.map(()=>e||RM).splice(0,t.length-1)}function ac({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=FC(i)?i.map(rv):rv(i),s={done:!1,value:e[0]},o=HC(n&&n.length===e.length?n:zC(e),t),a=kC(o,e,{ease:Array.isArray(r)?r:GC(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const WC=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ht.update(e,!0),stop:()=>Pr(e),now:()=>Kt.isProcessing?Kt.timestamp:Ti.now()}},XC={decay:iv,inertia:iv,tween:ac,keyframes:ac,spring:CM},YC=t=>t/100;class Wm extends EM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Hm,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Lm(n)?n:XC[n]||ac;let l,u;a!==ac&&typeof e[0]!="number"&&(l=pl(YC,wM(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=XS(c));const{calculatedDuration:d}=c,f=d+r,p=f*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:_}=this.options;return{done:!0,value:_[_.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:m,repeatDelay:S,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let y=this.currentTime,x=s;if(p){const _=Math.min(this.currentTime,c)/d;let A=Math.floor(_),b=_%1;!b&&_>=1&&(b=1),b===1&&A--,A=Math.min(A,p+1),!!(A%2)&&(m==="reverse"?(b=1-b,S&&(b-=S/d)):m==="mirror"&&(x=o)),y=Zi(0,1,b)*d}const E=v?{done:!1,value:l[0]}:x.next(y);a&&(E.value=a(E.value));let{done:w}=E;!v&&u!==null&&(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&w);return C&&r!==void 0&&(E.value=Oc(l,this.options,r)),g&&g(E.value),C&&this.finish(),E}get duration(){const{resolved:e}=this;return e?Gi(e.calculatedDuration):0}get time(){return Gi(this.currentTime)}set time(e){e=Hi(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Gi(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=WC,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const $C=new Set(["opacity","clipPath","filter","transform"]);function qC(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=qS(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const KC=gm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),lc=10,ZC=2e4;function jC(t){return Lm(t.type)||t.type==="spring"||!$S(t.ease)}function JC(t,e){const n=new Wm({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<ZC;)i=n.sample(s),r.push(i.value),s+=lc;return{times:void 0,keyframes:r,duration:s-lc,ease:"linear"}}const bM={anticipate:oM,backInOut:sM,circInOut:lM};function QC(t){return t in bM}class sv extends EM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new MM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&sc()&&QC(s)&&(s=bM[s]),jC(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:m,...S}=this.options,g=JC(e,S);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,o="keyframes"}const c=qC(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(G0(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(Oc(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Gi(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Gi(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Hi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;G0(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...p}=this.options,m=new Wm({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),S=Hi(this.time);u.setWithVelocity(m.sample(S-lc).value,m.sample(S).value,lc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return KC()&&i&&$C.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const eR={type:"spring",stiffness:500,damping:25,restSpeed:10},tR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),nR={type:"keyframes",duration:.8},iR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},rR=(t,{keyframes:e})=>e.length>2?nR:vs.has(t)?t.startsWith("scale")?tR(e[1]):eR:iR;function sR({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Xm=(t,e,n,i={},r,s)=>o=>{const a=Pm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Hi(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};sR(a)||(c={...c,...rR(t,c)}),c.duration&&(c.duration=Hi(c.duration)),c.repeatDelay&&(c.repeatDelay=Hi(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Oc(c.keyframes,a);if(f!==void 0)return ht.update(()=>{c.onUpdate(f),c.onComplete()}),new TA([])}return!s&&sv.supports(c)?new sv(c):new Wm(c)};function oR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function PM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||c&&oR(c,d))continue;const m={delay:n,...Pm(o||{},d)};let S=!1;if(window.MotionHandoffAnimation){const h=eM(t);if(h){const v=window.MotionHandoffAnimation(h,d,ht);v!==null&&(m.startTime=v,S=!0)}}dh(t,d),f.start(Xm(d,f,p,t.shouldReduceMotion&&JS.has(d)?{type:!1}:m,t,S));const g=f.animation;g&&u.push(g)}return a&&Promise.all(u).then(()=>{ht.update(()=>{a&&BA(t,a)})}),u}function xh(t,e,n={}){var i;const r=Fc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(PM(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return aR(t,e,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function aR(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(lR).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(xh(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function lR(t,e){return t.sortNodePosition(e)}function uR(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>xh(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=xh(t,e,n);else{const r=typeof e=="function"?Fc(t,e,n.custom):e;i=Promise.all(PM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const cR=_m.length;function LM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?LM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<cR;n++){const i=_m[n],r=t.props[i];(qa(r)||r===!1)&&(e[i]=r)}return e}const fR=[...vm].reverse(),dR=vm.length;function hR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>uR(t,n,i)))}function pR(t){let e=hR(t),n=ov(),i=!0;const r=l=>(u,c)=>{var d;const f=Fc(t,c,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:m,...S}=f;u={...u,...S,...m}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=LM(t.parent)||{},d=[],f=new Set;let p={},m=1/0;for(let g=0;g<dR;g++){const h=fR[g],v=n[h],y=u[h]!==void 0?u[h]:c[h],x=qa(y),E=h===l?v.isActive:null;E===!1&&(m=g);let w=y===c[h]&&y!==u[h]&&x;if(w&&i&&t.manuallyAnimateOnMount&&(w=!1),v.protectedKeys={...p},!v.isActive&&E===null||!y&&!v.prevProp||Nc(y)||typeof y=="boolean")continue;const C=mR(v.prevProp,y);let _=C||h===l&&v.isActive&&!w&&x||g>m&&x,A=!1;const b=Array.isArray(y)?y:[y];let P=b.reduce(r(h),{});E===!1&&(P={});const{prevResolvedValues:N={}}=v,X={...N,...P},$=k=>{_=!0,f.has(k)&&(A=!0,f.delete(k)),v.needsAnimating[k]=!0;const L=t.getValue(k);L&&(L.liveStyle=!1)};for(const k in X){const L=P[k],W=N[k];if(p.hasOwnProperty(k))continue;let j=!1;uh(L)&&uh(W)?j=!WS(L,W):j=L!==W,j?L!=null?$(k):f.add(k):L!==void 0&&f.has(k)?$(k):v.protectedKeys[k]=!0}v.prevProp=y,v.prevResolvedValues=P,v.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(_=!1),_&&(!(w&&C)||A)&&d.push(...b.map(k=>({animation:k,options:{type:h}})))}if(f.size){const g={};f.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),g[h]=v??null}),d.push({animation:g})}let S=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=ov(),i=!0}}}function mR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!WS(e,t):!1}function Br(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ov(){return{animate:Br(!0),whileInView:Br(),whileHover:Br(),whileTap:Br(),whileDrag:Br(),whileFocus:Br(),exit:Br()}}class Fr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class gR extends Fr{constructor(e){super(e),e.animationState||(e.animationState=pR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Nc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let vR=0;class _R extends Fr{constructor(){super(...arguments),this.id=vR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const xR={animation:{Feature:gR},exit:{Feature:_R}};function Ja(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function ml(t){return{point:{x:t.pageX,y:t.pageY}}}const yR=t=>e=>Im(e)&&t(e,ml(e));function Ea(t,e,n,i){return Ja(t,e,yR(n),i)}const av=(t,e)=>Math.abs(t-e);function SR(t,e){const n=av(t.x,e.x),i=av(t.y,e.y);return Math.sqrt(n**2+i**2)}class DM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=wf(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=SR(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:m}=d,{timestamp:S}=Kt;this.history.push({...m,timestamp:S});const{onStart:g,onMove:h}=this.handlers;f||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Tf(f,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=wf(d.type==="pointercancel"?this.lastMoveEventInfo:Tf(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,g),m&&m(d,g)},!Im(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=ml(e),a=Tf(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Kt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,wf(a,this.history)),this.removeListeners=pl(Ea(this.contextWindow,"pointermove",this.handlePointerMove),Ea(this.contextWindow,"pointerup",this.handlePointerUp),Ea(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Pr(this.updatePoint)}}function Tf(t,e){return e?{point:e(t.point)}:t}function lv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function wf({point:t},e){return{point:t,delta:lv(t,IM(e)),offset:lv(t,MR(e)),velocity:ER(e,.1)}}function MR(t){return t[0]}function IM(t){return t[t.length-1]}function ER(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=IM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Hi(e)));)n--;if(!i)return{x:0,y:0};const s=Gi(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const NM=1e-4,TR=1-NM,wR=1+NM,UM=.01,AR=0-UM,CR=0+UM;function Un(t){return t.max-t.min}function RR(t,e,n){return Math.abs(t-e)<=n}function uv(t,e,n,i=.5){t.origin=i,t.originPoint=gt(e.min,e.max,t.origin),t.scale=Un(n)/Un(e),t.translate=gt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=TR&&t.scale<=wR||isNaN(t.scale))&&(t.scale=1),(t.translate>=AR&&t.translate<=CR||isNaN(t.translate))&&(t.translate=0)}function Ta(t,e,n,i){uv(t.x,e.x,n.x,i?i.originX:void 0),uv(t.y,e.y,n.y,i?i.originY:void 0)}function cv(t,e,n){t.min=n.min+e.min,t.max=t.min+Un(e)}function bR(t,e,n){cv(t.x,e.x,n.x),cv(t.y,e.y,n.y)}function fv(t,e,n){t.min=e.min-n.min,t.max=t.min+Un(e)}function wa(t,e,n){fv(t.x,e.x,n.x),fv(t.y,e.y,n.y)}function PR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?gt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?gt(n,t,i.max):Math.min(t,n)),t}function dv(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function LR(t,{top:e,left:n,bottom:i,right:r}){return{x:dv(t.x,n,r),y:dv(t.y,e,i)}}function hv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function DR(t,e){return{x:hv(t.x,e.x),y:hv(t.y,e.y)}}function IR(t,e){let n=.5;const i=Un(t),r=Un(e);return r>i?n=So(e.min,e.max-i,t.min):i>r&&(n=So(t.min,t.max-r,e.min)),Zi(0,1,n)}function NR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const yh=.35;function UR(t=yh){return t===!1?t=0:t===!0&&(t=yh),{x:pv(t,"left","right"),y:pv(t,"top","bottom")}}function pv(t,e,n){return{min:mv(t,e),max:mv(t,n)}}function mv(t,e){return typeof t=="number"?t:t[e]||0}const gv=()=>({translate:0,scale:1,origin:0,originPoint:0}),to=()=>({x:gv(),y:gv()}),vv=()=>({min:0,max:0}),bt=()=>({x:vv(),y:vv()});function zn(t){return[t("x"),t("y")]}function FM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function FR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function OR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Af(t){return t===void 0||t===1}function Sh({scale:t,scaleX:e,scaleY:n}){return!Af(t)||!Af(e)||!Af(n)}function Xr(t){return Sh(t)||OM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function OM(t){return _v(t.x)||_v(t.y)}function _v(t){return t&&t!=="0%"}function uc(t,e,n){const i=t-n,r=e*i;return n+r}function xv(t,e,n,i,r){return r!==void 0&&(t=uc(t,r,i)),uc(t,n,i)+e}function Mh(t,e=0,n=1,i,r){t.min=xv(t.min,e,n,i,r),t.max=xv(t.max,e,n,i,r)}function BM(t,{x:e,y:n}){Mh(t.x,e.translate,e.scale,e.originPoint),Mh(t.y,n.translate,n.scale,n.originPoint)}const yv=.999999999999,Sv=1.0000000000001;function BR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&io(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,BM(t,o)),i&&Xr(s.latestValues)&&io(t,s.latestValues))}e.x<Sv&&e.x>yv&&(e.x=1),e.y<Sv&&e.y>yv&&(e.y=1)}function no(t,e){t.min=t.min+e,t.max=t.max+e}function Mv(t,e,n,i,r=.5){const s=gt(t.min,t.max,r);Mh(t,e,n,s,i)}function io(t,e){Mv(t.x,e.x,e.scaleX,e.scale,e.originX),Mv(t.y,e.y,e.scaleY,e.scale,e.originY)}function kM(t,e){return FM(OR(t.getBoundingClientRect(),e))}function kR(t,e,n){const i=kM(t,n),{scroll:r}=e;return r&&(no(i.x,r.offset.x),no(i.y,r.offset.y)),i}const VM=({current:t})=>t?t.ownerDocument.defaultView:null,VR=new WeakMap;class zR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=bt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(ml(c).point)},s=(c,d)=>{const{drag:f,dragPropagation:p,onDragStart:m}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IA(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(Ei.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[g];y&&(h=Un(y)*(parseFloat(h)/100))}}this.originPoint[g]=h}),m&&ht.postRender(()=>m(c,d)),dh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:m,onDrag:S}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:g}=d;if(p&&this.currentDirection===null){this.currentDirection=HR(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),S&&S(c,d)},a=(c,d)=>this.stop(c,d),l=()=>zn(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new DM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:VM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ht.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!kl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=PR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&Qs(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=LR(r.layoutBox,n):this.constraints=!1,this.elastic=UR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&zn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=NR(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Qs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=kR(i,r.root,this.visualElement.getTransformPagePoint());let o=DR(r.layout.layoutBox,s);if(n){const a=n(FR(o));this.hasMutatedConstraints=!!a,a&&(o=FM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=zn(c=>{if(!kl(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return dh(this.visualElement,e),i.start(Xm(e,i,0,n,this.visualElement,!1))}stopAnimation(){zn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){zn(n=>{const{drag:i}=this.getProps();if(!kl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-gt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Qs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};zn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=IR({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),zn(o=>{if(!kl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(gt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;VR.set(this.visualElement,this);const e=this.visualElement.current,n=Ea(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();Qs(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ht.read(i);const o=Ja(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(zn(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=yh,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function kl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function HR(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class GR extends Fr{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new zR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const Ev=t=>(e,n)=>{t&&ht.postRender(()=>t(e,n))};class WR extends Fr{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new DM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:VM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:Ev(e),onStart:Ev(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ht.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Ea(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const wu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Tv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Yo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(De.test(t))t=parseFloat(t);else return t;const n=Tv(t,e.target.x),i=Tv(t,e.target.y);return`${n}% ${i}%`}},XR={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Lr.parse(t);if(r.length>5)return i;const s=Lr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=gt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class YR extends oe.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;dA($R),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),wu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ht.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ym.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function zM(t){const[e,n]=ES(),i=oe.useContext(dm);return he.jsx(YR,{...t,layoutGroup:i,switchLayoutGroup:oe.useContext(LS),isPresent:e,safeToRemove:n})}const $R={borderRadius:{...Yo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Yo,borderTopRightRadius:Yo,borderBottomLeftRadius:Yo,borderBottomRightRadius:Yo,boxShadow:XR};function qR(t,e,n){const i=an(t)?t:Za(t);return i.start(Xm("",i,e,n)),i.animation}function KR(t){return t instanceof SVGElement&&t.tagName!=="svg"}const ZR=(t,e)=>t.depth-e.depth;class jR{constructor(){this.children=[],this.isDirty=!1}add(e){Nm(this.children,e),this.isDirty=!0}remove(e){Um(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ZR),this.isDirty=!1,this.children.forEach(e)}}function JR(t,e){const n=Ti.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Pr(i),t(s-e))};return ht.read(i,!0),()=>Pr(i)}const HM=["TopLeft","TopRight","BottomLeft","BottomRight"],QR=HM.length,wv=t=>typeof t=="string"?parseFloat(t):t,Av=t=>typeof t=="number"||De.test(t);function eb(t,e,n,i,r,s){r?(t.opacity=gt(0,n.opacity!==void 0?n.opacity:1,tb(i)),t.opacityExit=gt(e.opacity!==void 0?e.opacity:1,0,nb(i))):s&&(t.opacity=gt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<QR;o++){const a=`border${HM[o]}Radius`;let l=Cv(e,a),u=Cv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Av(l)===Av(u)?(t[a]=Math.max(gt(wv(l),wv(u),i),0),(Ei.test(u)||Ei.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=gt(e.rotate||0,n.rotate||0,i))}function Cv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const tb=GM(0,.5,aM),nb=GM(.5,.95,In);function GM(t,e,n){return i=>i<t?0:i>e?1:n(So(t,e,i))}function Rv(t,e){t.min=e.min,t.max=e.max}function kn(t,e){Rv(t.x,e.x),Rv(t.y,e.y)}function bv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Pv(t,e,n,i,r){return t-=e,t=uc(t,1/n,i),r!==void 0&&(t=uc(t,1/r,i)),t}function ib(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ei.test(e)&&(e=parseFloat(e),e=gt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=gt(s.min,s.max,i);t===s&&(a-=e),t.min=Pv(t.min,e,n,a,r),t.max=Pv(t.max,e,n,a,r)}function Lv(t,e,[n,i,r],s,o){ib(t,e[n],e[i],e[r],e.scale,s,o)}const rb=["x","scaleX","originX"],sb=["y","scaleY","originY"];function Dv(t,e,n,i){Lv(t.x,e,rb,n?n.x:void 0,i?i.x:void 0),Lv(t.y,e,sb,n?n.y:void 0,i?i.y:void 0)}function Iv(t){return t.translate===0&&t.scale===1}function WM(t){return Iv(t.x)&&Iv(t.y)}function Nv(t,e){return t.min===e.min&&t.max===e.max}function ob(t,e){return Nv(t.x,e.x)&&Nv(t.y,e.y)}function Uv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function XM(t,e){return Uv(t.x,e.x)&&Uv(t.y,e.y)}function Fv(t){return Un(t.x)/Un(t.y)}function Ov(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class ab{constructor(){this.members=[]}add(e){Nm(this.members,e),e.scheduleRender()}remove(e){if(Um(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function lb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:p,skewY:m}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const Yr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},la=typeof window<"u"&&window.MotionDebug!==void 0,Cf=["","X","Y","Z"],ub={visibility:"hidden"},Bv=1e3;let cb=0;function Rf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function YM(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=eM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ht,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&YM(i)}function $M({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=cb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,la&&(Yr.totalNodes=Yr.resolvedTargetDeltas=Yr.recalculatedProjection=0),this.nodes.forEach(hb),this.nodes.forEach(_b),this.nodes.forEach(xb),this.nodes.forEach(pb),la&&window.MotionDebug.record(Yr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new jR)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Fm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=KR(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=JR(f,250),wu.hasAnimatedSinceResize&&(wu.hasAnimatedSinceResize=!1,this.nodes.forEach(Vv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||c.getDefaultTransition()||Tb,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=c.getProps(),v=!this.targetLayout||!XM(this.targetLayout,m)||p,y=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const x={...Pm(S,"layout"),onPlay:g,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(x.delay=0,x.type=!1),this.startAnimation(x)}else f||Vv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Pr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(yb),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&YM(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(kv);return}this.isUpdating||this.nodes.forEach(gb),this.isUpdating=!1,this.nodes.forEach(vb),this.nodes.forEach(fb),this.nodes.forEach(db),this.clearAllSnapshots();const a=Ti.now();Kt.delta=Zi(0,1e3/60,a-Kt.timestamp),Kt.timestamp=a,Kt.isProcessing=!0,_f.update.process(Kt),_f.preRender.process(Kt),_f.render.process(Kt),Kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ym.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mb),this.sharedNodes.forEach(Sb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=bt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!WM(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Xr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),wb(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return bt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Ab))){const{scroll:c}=this.root;c&&(no(l.x,c.offset.x),no(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=bt();if(kn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&kn(l,o),no(l.x,d.offset.x),no(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=bt();kn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&io(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Xr(c.latestValues)&&io(l,c.latestValues)}return Xr(this.latestValues)&&io(l,this.latestValues),l}removeTransform(o){const a=bt();kn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Xr(u.latestValues))continue;Sh(u.latestValues)&&u.updateSnapshot();const c=bt(),d=u.measurePageBox();kn(c,d),Dv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Xr(this.latestValues)&&Dv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Kt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),wa(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=bt(),this.targetWithTransforms=bt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),bR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kn(this.target,this.layout.layoutBox),BM(this.target,this.targetDelta)):kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=bt(),this.relativeTargetOrigin=bt(),wa(this.relativeTargetOrigin,this.target,p.target),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}la&&Yr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Sh(this.parent.latestValues)||OM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Kt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;kn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;BR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=bt());const{target:m}=a;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(bv(this.prevProjectionDelta.x,this.projectionDelta.x),bv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ta(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Ov(this.projectionDelta.x,this.prevProjectionDelta.x)||!Ov(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),la&&Yr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=to(),this.projectionDelta=to(),this.projectionDeltaWithTransform=to()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=to();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=bt(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,S=p!==m,g=this.getStack(),h=!g||g.members.length<=1,v=!!(S&&!h&&this.options.crossfade===!0&&!this.path.some(Eb));this.animationProgress=0;let y;this.mixTargetDelta=x=>{const E=x/1e3;zv(d.x,o.x,E),zv(d.y,o.y,E),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(wa(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Mb(this.relativeTarget,this.relativeTargetOrigin,f,E),y&&ob(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=bt()),kn(y,this.relativeTarget)),S&&(this.animationValues=c,eb(c,u,this.latestValues,E,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Pr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{wu.hasAnimatedSinceResize=!0,this.currentAnimation=qR(0,Bv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&qM(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||bt();const d=Un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=Un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}kn(a,l),io(a,c),Ta(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new ab),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Rf("z",o,u,this.animationValues);for(let c=0;c<Cf.length;c++)Rf(`rotate${Cf[c]}`,o,u,this.animationValues),Rf(`skew${Cf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ub;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Eu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Eu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Xr(this.latestValues)&&(S.transform=c?c({},""):"none",this.hasProjected=!1),S}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=lb(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const S in rc){if(f[S]===void 0)continue;const{correct:g,applyTo:h}=rc[S],v=u.transform==="none"?f[S]:g(f[S],d);if(h){const y=h.length;for(let x=0;x<y;x++)u[h[x]]=v}else u[S]=v}return this.options.layoutId&&(u.pointerEvents=d===this?Eu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(kv),this.root.sharedNodes.clear()}}}function fb(t){t.updateLayout()}function db(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Un(f);f.min=i[d].min,f.max=f.min+p}):qM(s,n.layoutBox,i)&&zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Un(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=to();Ta(a,i,n.layoutBox);const l=to();o?Ta(l,t.applyTransform(r,!0),n.measuredBox):Ta(l,i,n.layoutBox);const u=!WM(a);let c=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const m=bt();wa(m,n.layoutBox,f.layoutBox);const S=bt();wa(S,i,p.layoutBox),XM(m,S)||(c=!0),d.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function hb(t){la&&Yr.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function pb(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function mb(t){t.clearSnapshot()}function kv(t){t.clearMeasurements()}function gb(t){t.isLayoutDirty=!1}function vb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Vv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function _b(t){t.resolveTargetDelta()}function xb(t){t.calcProjection()}function yb(t){t.resetSkewAndRotation()}function Sb(t){t.removeLeadSnapshot()}function zv(t,e,n){t.translate=gt(e.translate,0,n),t.scale=gt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function Hv(t,e,n,i){t.min=gt(e.min,n.min,i),t.max=gt(e.max,n.max,i)}function Mb(t,e,n,i){Hv(t.x,e.x,n.x,i),Hv(t.y,e.y,n.y,i)}function Eb(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Tb={duration:.45,ease:[.4,0,.1,1]},Gv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Wv=Gv("applewebkit/")&&!Gv("chrome/")?Math.round:In;function Xv(t){t.min=Wv(t.min),t.max=Wv(t.max)}function wb(t){Xv(t.x),Xv(t.y)}function qM(t,e,n){return t==="position"||t==="preserve-aspect"&&!RR(Fv(e),Fv(n),.2)}function Ab(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const Cb=$M({attachResizeListener:(t,e)=>Ja(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),bf={current:void 0},KM=$M({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!bf.current){const t=new Cb({});t.mount(window),t.setOptions({layoutScroll:!0}),bf.current=t}return bf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Rb={pan:{Feature:WR},drag:{Feature:GR,ProjectionNode:KM,MeasureLayout:zM}};function Yv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ht.postRender(()=>s(e,ml(e)))}class bb extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=RA(e,n=>(Yv(this.node,n,"Start"),i=>Yv(this.node,i,"End"))))}unmount(){}}class Pb extends Fr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pl(Ja(this.node.current,"focus",()=>this.onFocus()),Ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function $v(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ht.postRender(()=>s(e,ml(e)))}class Lb extends Fr{mount(){const{current:e}=this.node;e&&(this.unmount=DA(e,n=>($v(this.node,n,"Start"),(i,{success:r})=>$v(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Eh=new WeakMap,Pf=new WeakMap,Db=t=>{const e=Eh.get(t.target);e&&e(t)},Ib=t=>{t.forEach(Db)};function Nb({root:t,...e}){const n=t||document;Pf.has(n)||Pf.set(n,{});const i=Pf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Ib,{root:t,...e})),i[r]}function Ub(t,e,n){const i=Nb(e);return Eh.set(t,n),i.observe(t),()=>{Eh.delete(t),i.unobserve(t)}}const Fb={some:0,all:1};class Ob extends Fr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:Fb[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return Ub(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Bb(e,n))&&this.startObserver()}unmount(){}}function Bb({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const kb={inView:{Feature:Ob},tap:{Feature:Lb},focus:{Feature:Pb},hover:{Feature:bb}},Vb={layout:{ProjectionNode:KM,MeasureLayout:zM}},Th={current:null},ZM={current:!1};function zb(){if(ZM.current=!0,!!mm)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Th.current=t.matches;t.addListener(e),e()}else Th.current=!1}const Hb=[...SM,sn,Lr],Gb=t=>Hb.find(yM(t)),qv=new WeakMap;function Wb(t,e,n){for(const i in e){const r=e[i],s=n[i];if(an(r))t.addValue(i,r);else if(an(s))t.addValue(i,Za(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Za(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const Kv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Xb{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Hm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ti.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ht.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=Uc(n),this.isVariantNode=bS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const m=f[p];l[p]!==void 0&&an(m)&&m.set(l[p],!1)}}mount(e){this.current=e,qv.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),ZM.current||zb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Th.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){qv.delete(this.current),this.projection&&this.projection.unmount(),Pr(this.notifyUpdate),Pr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=vs.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Mo){const n=Mo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):bt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<Kv.length;i++){const r=Kv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=Wb(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Za(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(_M(r)||uM(r))?r=parseFloat(r):!Gb(r)&&Lr.test(n)&&(r=mM(e,n)),this.setBaseTarget(e,an(r)?r.get():r)),an(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Mm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!an(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Fm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class jM extends Xb{constructor(){super(...arguments),this.KeyframeResolver=MM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;an(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function Yb(t){return window.getComputedStyle(t)}class $b extends jM{constructor(){super(...arguments),this.type="html",this.renderInstance=BS}readValueFromInstance(e,n){if(vs.has(n)){const i=zm(n);return i&&i.default||0}else{const i=Yb(e),r=(US(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return kM(e,n)}build(e,n,i){wm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return bm(e,n,i)}}class qb extends jM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=bt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(vs.has(n)){const i=zm(n);return i&&i.default||0}return n=kS.has(n)?n:xm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return HS(e,n,i)}build(e,n,i){Am(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){VS(e,n,i,r)}mount(e){this.isSVGTag=Rm(e.tagName),super.mount(e)}}const Kb=(t,e)=>Sm(t)?new qb(e):new $b(e,{allowProjection:t!==oe.Fragment}),Zb=SA({...xR,...kb,...Rb,...Vb},Kb),fs=Fw(Zb),es=[{id:"han",dynasty:"汉",name:"四神博局纹镜",shortDescription:"汉代铜镜规矩方正，博局纹与四神纹样讲求对称，映照出汉人眼中的天地秩序。",tint:"#8a6a4f",frontImage:"mirrors/han/front.webp",backImage:"mirrors/han/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"镜钮居中，可穿绶带持握或悬挂，是铜镜最稳定的结构核心。"},{x:50,y:26,title:"博局纹",description:"博局纹又称 TLV 纹，源自六博棋盘，与四神方位相配，寓意法天象地。"}],reference:{title:"四神博局式青铜镜",detail:"东汉至西汉末（公元 9–100 年），青铜，直径 19 厘米。镜背是一幅宇宙图式：同心圆环与云气纹象征天，钮座方框象征地，四神居天地之间。",imageUrl:"references/han.webp",source:"克利夫兰艺术博物馆（CC0）",sourceUrl:"https://clevelandart.org/art/1995.301"},art3d:{flat:"poc3d/han/sishou.flat.webp",normal:"poc3d/han/sishou.normal.webp",shape:{type:"circle"}}},{id:"tang",dynasty:"唐",name:"海兽葡萄纹镜",shortDescription:"唐代铜镜装饰华丽奔放，海兽与葡萄蔓枝交织成饱满的浮雕，映出盛世的雍容气度。",tint:"#a8823f",frontImage:"mirrors/tang/front.webp",backImage:"mirrors/tang/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"高浮雕纹样在镜钮四周层层铺开，唐镜以厚重的手感与华贵的纹饰著称。"},{x:44,y:36,title:"海兽葡萄纹",description:"葡萄蔓枝缠绕、瑞兽穿行其间，是唐代铜镜最具代表性的纹饰组合。"}],reference:{title:"瑞兽葡萄镜",detail:"唐中期（7 世纪中叶），青铜，直径仅 8.2 厘米。瑞兽与葡萄蔓枝以高浮雕在方寸之间层层铺展，是盛唐华丽审美的缩影。",imageUrl:"references/tang.webp",source:"克利夫兰艺术博物馆（CC0）",sourceUrl:"https://clevelandart.org/art/1995.356"},art3d:{flat:"poc3d/tang/octagon.flat.webp",normal:"poc3d/tang/octagon.normal.webp",shape:{type:"polygon",sides:8}}},{id:"song",dynasty:"宋",name:"湖州石家铭文镜",shortDescription:"宋代铜镜趋于素雅，纹饰退位给铭文，一句「湖州真石家念二叔照子」，透出市井商业的烟火气。",tint:"#6f7a72",frontImage:"mirrors/song/front.webp",backImage:"mirrors/song/back.webp",hotspots:[{x:50,y:30,title:"商标铭文",description:"铸镜匠号的商标式铭文是宋镜的标志——制镜成了品牌生意，审美从神怪纹样转向务实素雅。"}],reference:{title:"湖州石家镜 · 馆藏实物图待补",detail:"宋代湖州石家铸镜盛极一时，镜背多铸「湖州真石家念二叔照子」等商标式铭文，是古代早期品牌意识的实物例证。"},art3d:{flat:"poc3d/song/kuihua.flat.webp",normal:"poc3d/song/kuihua.normal.webp",shape:{type:"lobed",lobes:8,depth:.11}}},{id:"ming",dynasty:"明",name:"五子登科镜",shortDescription:"明代铜镜仿古与吉祥铭文并行，一句「五子登科」，照见的是寻常人家的朴素祈愿。",tint:"#7d5450",frontImage:"mirrors/ming/front.webp",backImage:"mirrors/ming/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"明镜钮制多承古法，形制上可见对汉唐旧式的追摹。"},{x:50,y:28,title:"吉祥铭文",description:"「五子登科」四字直白吉庆，铜镜从文人之雅走向寻常人家的祝福。"}],reference:{title:"五子登科镜 · 馆藏实物图待补",detail:"「五子登科」吉祥铭文镜流行于明代，多为圆形圆钮，铭文环钮而铸，寄托科举登第、多子多福的朴素愿望。"},art3d:{flat:"poc3d/ming/wuzidengke.flat.webp",normal:"poc3d/ming/wuzidengke.normal.webp",shape:{type:"circle"}}}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ym="185",jb=0,Zv=1,Jb=2,Au=1,Qb=2,ua=3,Dr=0,pn=1,Oi=2,Wi=0,co=1,jv=2,Jv=3,Qv=4,eP=5,qr=100,tP=101,nP=102,iP=103,rP=104,sP=200,oP=201,aP=202,lP=203,wh=204,Ah=205,uP=206,cP=207,fP=208,dP=209,hP=210,pP=211,mP=212,gP=213,vP=214,Ch=0,Rh=1,bh=2,To=3,Ph=4,Lh=5,Dh=6,Ih=7,$m=0,_P=1,xP=2,wi=0,JM=1,QM=2,eE=3,qm=4,tE=5,nE=6,iE=7,rE=300,ds=301,wo=302,Lf=303,Df=304,Bc=306,Nh=1e3,Vi=1001,Uh=1002,kt=1003,yP=1004,Vl=1005,ln=1006,If=1007,ts=1008,Pn=1009,sE=1010,oE=1011,Qa=1012,Km=1013,Ci=1014,si=1015,ji=1016,Zm=1017,jm=1018,el=1020,aE=35902,lE=35899,uE=1021,cE=1022,oi=1023,Ji=1026,ns=1027,kc=1028,Jm=1029,hs=1030,Qm=1031,eg=1033,Cu=33776,Ru=33777,bu=33778,Pu=33779,Fh=35840,Oh=35841,Bh=35842,kh=35843,Vh=36196,zh=37492,Hh=37496,Gh=37488,Wh=37489,cc=37490,Xh=37491,Yh=37808,$h=37809,qh=37810,Kh=37811,Zh=37812,jh=37813,Jh=37814,Qh=37815,ep=37816,tp=37817,np=37818,ip=37819,rp=37820,sp=37821,op=36492,ap=36494,lp=36495,up=36283,cp=36284,fc=36285,fp=36286,SP=3200,tl=0,MP=1,gr="",Rn="srgb",dc="srgb-linear",hc="linear",tt="srgb",Ts=7680,e_=519,EP=512,TP=513,wP=514,tg=515,AP=516,CP=517,ng=518,RP=519,t_=35044,n_="300 es",yi=2e3,nl=2001;function bP(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function il(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function PP(){const t=il("canvas");return t.style.display="block",t}const i_={};function r_(...t){const e="THREE."+t.shift();console.log(e,...t)}function fE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=fE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function je(...t){t=fE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function fo(...t){const e=t.join(" ");e in i_||(i_[e]=!0,Ie(...t))}function LP(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const DP={[Ch]:Rh,[bh]:Dh,[Ph]:Ih,[To]:Lh,[Rh]:Ch,[Dh]:bh,[Ih]:Ph,[Lh]:To};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=Math.PI/180,dp=180/Math.PI;function No(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function IP(t,e){return(t%e+e)%e}function Uf(t,e,n){return(1-n)*t+n*e}function $o(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const fg=class fg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fg.prototype.isVector2=!0;let ye=fg;class Uo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],S=s[o+3];if(d!==S||l!==f||u!==p||c!==m){let g=l*f+u*p+c*m+d*S;g<0&&(f=-f,p=-p,m=-m,S=-S,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);h=Math.sin(h*v)/y,a=Math.sin(a*v)/y,l=l*h+f*a,u=u*h+p*a,c=c*h+m*a,d=d*h+S*a}else{l=l*h+f*a,u=u*h+p*a,c=c*h+m*a,d=d*h+S*a;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+c*d+l*p-u*f,e[n+1]=l*m+c*f+u*d-a*p,e[n+2]=u*m+c*p+a*f-l*d,e[n+3]=c*m-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"YXZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"ZXY":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"ZYX":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"YZX":this._x=f*c*d+u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d-f*p*m;break;case"XZY":this._x=f*c*d-u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d+f*p*m;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dg=class dg{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(s_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ff.copy(this).projectOnVector(e),this.sub(Ff)}reflect(e){return this.sub(Ff.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dg.prototype.isVector3=!0;let F=dg;const Ff=new F,s_=new Uo,hg=class hg{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],m=i[8],S=r[0],g=r[3],h=r[6],v=r[1],y=r[4],x=r[7],E=r[2],w=r[5],C=r[8];return s[0]=o*S+a*v+l*E,s[3]=o*g+a*y+l*w,s[6]=o*h+a*x+l*C,s[1]=u*S+c*v+d*E,s[4]=u*g+c*y+d*w,s[7]=u*h+c*x+d*C,s[2]=f*S+p*v+m*E,s[5]=f*g+p*y+m*w,s[8]=f*h+p*x+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=d*S,e[1]=(r*u-c*i)*S,e[2]=(a*i-r*o)*S,e[3]=f*S,e[4]=(c*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-u*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return fo("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Of.makeScale(e,n)),this}rotate(e){return fo("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Of.makeRotation(-e)),this}translate(e,n){return fo("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Of.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hg.prototype.isMatrix3=!0;let Ue=hg;const Of=new Ue,o_=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),a_=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function NP(){const t={enabled:!0,workingColorSpace:dc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=ho(r.r),r.g=ho(r.g),r.b=ho(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gr?hc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[dc]:{primaries:e,whitePoint:i,transfer:hc,toXYZ:o_,fromXYZ:a_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:o_,fromXYZ:a_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const qe=NP();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ho(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class UP{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=il("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=il("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FP=0;class ig{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FP++}),this.uuid=No(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Bf(r[o].image)):s.push(Bf(r[o]))}else s=Bf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Bf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?UP.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let OP=0;const kf=new F;class un extends _s{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Vi,r=Vi,s=ln,o=ts,a=oi,l=Pn,u=un.DEFAULT_ANISOTROPY,c=gr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OP++}),this.uuid=No(),this.name="",this.source=new ig(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kf).x}get height(){return this.source.getSize(kf).y}get depth(){return this.source.getSize(kf).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nh:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nh:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=rE;un.DEFAULT_ANISOTROPY=1;const pg=class pg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],m=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,x=(p+1)/2,E=(h+1)/2,w=(c+f)/4,C=(d+S)/4,_=(m+g)/4;return y>x&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=C/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=_/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=C/s,r=_/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-S)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pg.prototype.isVector4=!0;let vt=pg;class BP extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new un(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ig(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ai extends BP{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dE extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kP extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mc=class mc{constructor(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g)}set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,m=a*c,S=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+m*u,n[5]=f-S*u,n[9]=-a*l,n[2]=S-f*u,n[6]=m+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,m=u*c,S=u*d;n[0]=f+S*a,n[4]=m*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-m,n[6]=S+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,m=u*c,S=u*d;n[0]=f-S*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*c,n[9]=S-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,m=a*c,S=a*d;n[0]=l*c,n[4]=m*u-p,n[8]=f*u+S,n[1]=l*d,n[5]=S*u+f,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,m=a*l,S=a*u;n[0]=l*c,n[4]=S-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+m,n[10]=f-S*d}else if(e.order==="XZY"){const f=o*l,p=o*u,m=a*l,S=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+S,n[5]=o*c,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*c,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(VP,e,zP)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),sr.crossVectors(i,wn),sr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),sr.crossVectors(i,wn)),sr.normalize(),zl.crossVectors(wn,sr),r[0]=sr.x,r[4]=zl.x,r[8]=wn.x,r[1]=sr.y,r[5]=zl.y,r[9]=wn.y,r[2]=sr.z,r[6]=zl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],m=i[2],S=i[6],g=i[10],h=i[14],v=i[3],y=i[7],x=i[11],E=i[15],w=r[0],C=r[4],_=r[8],A=r[12],b=r[1],P=r[5],N=r[9],X=r[13],$=r[2],B=r[6],Y=r[10],k=r[14],L=r[3],W=r[7],j=r[11],te=r[15];return s[0]=o*w+a*b+l*$+u*L,s[4]=o*C+a*P+l*B+u*W,s[8]=o*_+a*N+l*Y+u*j,s[12]=o*A+a*X+l*k+u*te,s[1]=c*w+d*b+f*$+p*L,s[5]=c*C+d*P+f*B+p*W,s[9]=c*_+d*N+f*Y+p*j,s[13]=c*A+d*X+f*k+p*te,s[2]=m*w+S*b+g*$+h*L,s[6]=m*C+S*P+g*B+h*W,s[10]=m*_+S*N+g*Y+h*j,s[14]=m*A+S*X+g*k+h*te,s[3]=v*w+y*b+x*$+E*L,s[7]=v*C+y*P+x*B+E*W,s[11]=v*_+y*N+x*Y+E*j,s[15]=v*A+y*X+x*k+E*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],m=e[3],S=e[7],g=e[11],h=e[15],v=l*p-u*f,y=a*p-u*d,x=a*f-l*d,E=o*p-u*c,w=o*f-l*c,C=o*d-a*c;return n*(S*v-g*y+h*x)-i*(m*v-g*E+h*w)+r*(m*y-S*E+h*C)-s*(m*x-S*w+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],u=e[6],c=e[10];return n*(o*c-a*u)-i*(s*c-a*l)+r*(s*u-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],m=e[12],S=e[13],g=e[14],h=e[15],v=n*a-i*o,y=n*l-r*o,x=n*u-s*o,E=i*l-r*a,w=i*u-s*a,C=r*u-s*l,_=c*S-d*m,A=c*g-f*m,b=c*h-p*m,P=d*g-f*S,N=d*h-p*S,X=f*h-p*g,$=v*X-y*N+x*P+E*b-w*A+C*_;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/$;return e[0]=(a*X-l*N+u*P)*B,e[1]=(r*N-i*X-s*P)*B,e[2]=(S*C-g*w+h*E)*B,e[3]=(f*w-d*C-p*E)*B,e[4]=(l*b-o*X-u*A)*B,e[5]=(n*X-r*b+s*A)*B,e[6]=(g*x-m*C-h*y)*B,e[7]=(c*C-f*x+p*y)*B,e[8]=(o*N-a*b+u*_)*B,e[9]=(i*b-n*N-s*_)*B,e[10]=(m*w-S*x+h*v)*B,e[11]=(d*x-c*w-p*v)*B,e[12]=(a*A-o*P-l*_)*B,e[13]=(n*P-i*A+r*_)*B,e[14]=(S*y-m*E-g*v)*B,e[15]=(c*E-d*y+f*v)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,m=s*d,S=o*c,g=o*d,h=a*d,v=l*u,y=l*c,x=l*d,E=i.x,w=i.y,C=i.z;return r[0]=(1-(S+h))*E,r[1]=(p+x)*E,r[2]=(m-y)*E,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(f+h))*w,r[6]=(g+v)*w,r[7]=0,r[8]=(m+y)*C,r[9]=(g-v)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=As.set(r[0],r[1],r[2]).length();const a=As.set(r[4],r[5],r[6]).length(),l=As.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const u=1/o,c=1/a,d=1/l;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=c,Zn.elements[5]*=c,Zn.elements[6]*=c,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,S;if(l)m=s/(o-s),S=o*s/(o-s);else if(a===yi)m=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===nl)m=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,S;if(l)m=1/(o-s),S=o/(o-s);else if(a===yi)m=-2/(o-s),S=-(o+s)/(o-s);else if(a===nl)m=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};mc.prototype.isMatrix4=!0;let ct=mc;const As=new F,Zn=new ct,VP=new F(0,0,0),zP=new F(1,1,1),sr=new F,zl=new F,wn=new F,l_=new ct,u_=new Uo;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class hE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HP=0;const c_=new F,Cs=new Uo,Pi=new ct,Hl=new F,qo=new F,GP=new F,WP=new Uo,f_=new F(1,0,0),d_=new F(0,1,0),h_=new F(0,0,1),p_={type:"added"},XP={type:"removed"},Rs={type:"childadded",child:null},Vf={type:"childremoved",child:null};class jt extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HP++}),this.uuid=No(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new F,n=new Qi,i=new Uo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Ue}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,n){return c_.copy(e).applyQuaternion(this.quaternion),this.position.add(c_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Hl.copy(e):Hl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pi.lookAt(qo,Hl,this.up):Pi.lookAt(Hl,qo,this.up),this.quaternion.setFromRotationMatrix(Pi),r&&(Pi.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Pi),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(XP),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,GP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,WP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}jt.DEFAULT_UP=new F(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ca extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YP={type:"move"};class zf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ca,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ca,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ca,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),h=this._getHandJoint(u,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(YP)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ca;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Gl={h:0,s:0,l:0};function Hf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=IP(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Hf(o,s,e+1/3),this.g=Hf(o,s,e),this.b=Hf(o,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=pE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ho(e.r),this.g=ho(e.g),this.b=ho(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return qe.workingToColorSpace(rn.copy(this),e),Math.round(We(rn.r*255,0,255))*65536+Math.round(We(rn.g*255,0,255))*256+Math.round(We(rn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Rn){qe.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(Gl);const i=Uf(or.h,Gl.h,n),r=Uf(or.s,Gl.s,n),s=Uf(or.l,Gl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Xe;Xe.NAMES=pE;class mE extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new F,Li=new F,Gf=new F,Di=new F,bs=new F,Ps=new F,m_=new F,Wf=new F,Xf=new F,Yf=new F,$f=new vt,qf=new vt,Kf=new vt;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Li.subVectors(i,n),Gf.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Li),l=jn.dot(Gf),u=Li.dot(Li),c=Li.dot(Gf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Di.x),l.addScaledVector(o,Di.y),l.addScaledVector(a,Di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return $f.setScalar(0),qf.setScalar(0),Kf.setScalar(0),$f.fromBufferAttribute(e,n),qf.fromBufferAttribute(e,i),Kf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector($f,s.x),o.addScaledVector(qf,s.y),o.addScaledVector(Kf,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Li.subVectors(e,n),jn.cross(Li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),jn.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;bs.subVectors(r,i),Ps.subVectors(s,i),Wf.subVectors(e,i);const l=bs.dot(Wf),u=Ps.dot(Wf);if(l<=0&&u<=0)return n.copy(i);Xf.subVectors(e,r);const c=bs.dot(Xf),d=Ps.dot(Xf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(bs,o);Yf.subVectors(e,s);const p=bs.dot(Yf),m=Ps.dot(Yf);if(m>=0&&p<=m)return n.copy(s);const S=p*u-l*m;if(S<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Ps,a);const g=c*m-p*d;if(g<=0&&d-c>=0&&p-m>=0)return m_.subVectors(s,r),a=(d-c)/(d-c+(p-m)),n.copy(r).addScaledVector(m_,a);const h=1/(g+S+f);return o=S*h,a=f*h,n.copy(i).addScaledVector(bs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xs{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Wl.copy(i.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Xl.subVectors(this.max,Ko),Ls.subVectors(e.a,Ko),Ds.subVectors(e.b,Ko),Is.subVectors(e.c,Ko),ar.subVectors(Ds,Ls),lr.subVectors(Is,Ds),kr.subVectors(Ls,Is);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-kr.z,kr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,kr.z,0,-kr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-kr.y,kr.x,0];return!Zf(n,Ls,Ds,Is,Xl)||(n=[1,0,0,0,1,0,0,0,1],!Zf(n,Ls,Ds,Is,Xl))?!1:(Yl.crossVectors(ar,lr),n=[Yl.x,Yl.y,Yl.z],Zf(n,Ls,Ds,Is,Xl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ii=[new F,new F,new F,new F,new F,new F,new F,new F],Jn=new F,Wl=new xs,Ls=new F,Ds=new F,Is=new F,ar=new F,lr=new F,kr=new F,Ko=new F,Xl=new F,Yl=new F,Vr=new F;function Zf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Vr.fromArray(t,s);const a=r.x*Math.abs(Vr.x)+r.y*Math.abs(Vr.y)+r.z*Math.abs(Vr.z),l=e.dot(Vr),u=n.dot(Vr),c=i.dot(Vr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nt=new F,$l=new ye;let $P=0;class ui extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$P++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=t_,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)$l.fromBufferAttribute(this,n),$l.applyMatrix3(e),this.setXY(n,$l.x,$l.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=$o(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=$o(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=$o(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=$o(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=$o(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class gE extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vE extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const qP=new xs,Zo=new F,jf=new F;class gl{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):qP.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zo.subVectors(e,this.center);const n=Zo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zo.copy(e.center).add(jf)),this.expandByPoint(Zo.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let KP=0;const Vn=new ct,Jf=new jt,Ns=new F,An=new xs,jo=new xs,Gt=new F;class qn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KP++}),this.uuid=No(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bP(e)?vE:gE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];jo.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(An.min,jo.min),An.expandByPoint(Gt),Gt.addVectors(An.max,jo.max),An.expandByPoint(Gt)):(An.expandByPoint(jo.min),An.expandByPoint(jo.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Gt.fromBufferAttribute(a,u),l&&(Ns.fromBufferAttribute(e,u),Gt.add(Ns)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new F,l[_]=new F;const u=new F,c=new F,d=new F,f=new ye,p=new ye,m=new ye,S=new F,g=new F;function h(_,A,b){u.fromBufferAttribute(i,_),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,_),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),c.sub(u),d.sub(u),p.sub(f),m.sub(f);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(S.copy(c).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(P),a[_].add(S),a[A].add(S),a[b].add(S),l[_].add(g),l[A].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,A=v.length;_<A;++_){const b=v[_],P=b.start,N=b.count;for(let X=P,$=P+N;X<$;X+=3)h(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const y=new F,x=new F,E=new F,w=new F;function C(_){E.fromBufferAttribute(r,_),w.copy(E);const A=a[_];y.copy(A),y.sub(E.multiplyScalar(E.dot(A))).normalize(),x.crossVectors(w,A);const P=x.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,P)}for(let _=0,A=v.length;_<A;++_){const b=v[_],P=b.start,N=b.count;for(let X=P,$=P+N;X<$;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*c;for(let h=0;h<c;h++)f[m++]=u[p++]}return new ui(f,c,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZP=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZP++}),this.uuid=No(),this.name="",this.type="Material",this.blending=co,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Ah,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=To,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==Dr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==wh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ah&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==To&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new F,Qf=new F,ql=new F,ur=new F,ed=new F,Kl=new F,td=new F;class jP{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,n),Ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qf.copy(e).add(n).multiplyScalar(.5),ql.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(Qf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ql),a=ur.dot(this.direction),l=-ur.dot(ql),u=ur.lengthSq(),c=Math.abs(1-o*o);let d,f,p,m;if(c>0)if(d=o*l-a,f=o*a-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const S=1/c;d*=S,f*=S,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Qf).addScaledVector(ql,f),p}intersectSphere(e,n){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,n,i,r,s){ed.subVectors(n,e),Kl.subVectors(i,e),td.crossVectors(ed,Kl);let o=this.direction.dot(td),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Kl.crossVectors(ur,Kl));if(l<0)return null;const u=a*this.direction.dot(ed.cross(ur));if(u<0||l+u>o)return null;const c=-a*ur.dot(td);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _E extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=$m,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const g_=new ct,zr=new jP,Zl=new gl,v_=new F,jl=new F,Jl=new F,Ql=new F,nd=new F,eu=new F,__=new F,tu=new F;class Pt extends jt{constructor(e=new qn,n=new _E){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){eu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(nd.fromBufferAttribute(d,e),o?eu.addScaledVector(nd,c):eu.addScaledVector(nd.sub(n),c))}n.add(eu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Zl.copy(i.boundingSphere),Zl.applyMatrix4(s),zr.copy(e.ray).recast(e.near),!(Zl.containsPoint(zr.origin)===!1&&(zr.intersectSphere(Zl,v_)===null||zr.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(g_.copy(s).invert(),zr.copy(e.ray).applyMatrix4(g_),!(i.boundingBox!==null&&zr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,zr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,S=f.length;m<S;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=y;x<E;x+=3){const w=a.getX(x),C=a.getX(x+1),_=a.getX(x+2);r=nu(this,h,e,i,u,c,d,w,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=a.getX(g),y=a.getX(g+1),x=a.getX(g+2);r=nu(this,o,e,i,u,c,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,S=f.length;m<S;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let x=v,E=y;x<E;x+=3){const w=x,C=x+1,_=x+2;r=nu(this,h,e,i,u,c,d,w,C,_),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=g,y=g+1,x=g+2;r=nu(this,o,e,i,u,c,d,v,y,x),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function JP(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Dr,a),l===null)return null;tu.copy(a),tu.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(tu);return u<n.near||u>n.far?null:{distance:u,point:tu.clone(),object:t}}function nu(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,jl),t.getVertexPosition(l,Jl),t.getVertexPosition(u,Ql);const c=JP(t,e,n,i,jl,Jl,Ql,__);if(c){const d=new F;ri.getBarycoord(__,jl,Jl,Ql,d),r&&(c.uv=ri.getInterpolatedAttribute(r,a,l,u,d,new ye)),s&&(c.uv1=ri.getInterpolatedAttribute(s,a,l,u,d,new ye)),o&&(c.normal=ri.getInterpolatedAttribute(o,a,l,u,d,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};ri.getNormal(jl,Jl,Ql,f.normal),c.face=f,c.barycoord=d}return c}class rg extends un{constructor(e=null,n=1,i=1,r,s,o,a,l,u=kt,c=kt,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class x_ extends ui{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new ct,y_=new ct,iu=[],S_=new xs,QP=new ct,Jo=new Pt,Qo=new gl;class e3 extends Pt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new x_(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,QP)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Us),S_.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(S_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new gl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Us),Qo.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Qo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Jo.geometry=this.geometry,Jo.material=this.material,Jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qo.copy(this.boundingSphere),Qo.applyMatrix4(i),e.ray.intersectsSphere(Qo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Us),y_.multiplyMatrices(i,Us),Jo.matrixWorld=y_,Jo.raycast(e,iu);for(let o=0,a=iu.length;o<a;o++){const l=iu[o];l.instanceId=s,l.object=this,n.push(l)}iu.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new x_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new rg(new Float32Array(r*this.count),r,this.count,kc,si));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const id=new F,t3=new F,n3=new Ue;class $r{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=id.subVectors(i,n).cross(t3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(id),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||n3.getNormalMatrix(e),r=this.coplanarPoint(id).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new gl,i3=new ye(.5,.5),ru=new F;class sg{constructor(e=new $r,n=new $r,i=new $r,r=new $r,s=new $r,o=new $r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],m=s[8],S=s[9],g=s[10],h=s[11],v=s[12],y=s[13],x=s[14],E=s[15];if(r[0].setComponents(u-o,p-c,h-m,E-v).normalize(),r[1].setComponents(u+o,p+c,h+m,E+v).normalize(),r[2].setComponents(u+a,p+d,h+S,E+y).normalize(),r[3].setComponents(u-a,p-d,h-S,E-y).normalize(),i)r[4].setComponents(l,f,g,x).normalize(),r[5].setComponents(u-l,p-f,h-g,E-x).normalize();else if(r[4].setComponents(u-l,p-f,h-g,E-x).normalize(),n===yi)r[5].setComponents(u+l,p+f,h+g,E+x).normalize();else if(n===nl)r[5].setComponents(l,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){Hr.center.set(0,0,0);const n=i3.distanceTo(e.center);return Hr.radius=.7071067811865476+n,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ru.x=r.normal.x>0?e.max.x:e.min.x,ru.y=r.normal.y>0?e.max.y:e.min.y,ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xE extends un{constructor(e=[],n=ds,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ao extends un{constructor(e,n,i=Ci,r,s,o,a=kt,l=kt,u,c=Ji,d=1){if(c!==Ji&&c!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ig(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class r3 extends Ao{constructor(e,n=Ci,i=ds,r,s,o=kt,a=kt,l,u=Ji){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class yE extends un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fo extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(d,2));function m(S,g,h,v,y,x,E,w,C,_,A){const b=x/C,P=E/_,N=x/2,X=E/2,$=w/2,B=C+1,Y=_+1;let k=0,L=0;const W=new F;for(let j=0;j<Y;j++){const te=j*P-X;for(let re=0;re<B;re++){const ze=re*b-N;W[S]=ze*v,W[g]=te*y,W[h]=$,u.push(W.x,W.y,W.z),W[S]=0,W[g]=0,W[h]=w>0?1:-1,c.push(W.x,W.y,W.z),d.push(re/C),d.push(1-j/_),k+=1}}for(let j=0;j<_;j++)for(let te=0;te<C;te++){const re=f+te+B*j,ze=f+te+B*(j+1),He=f+(te+1)+B*(j+1),Fe=f+(te+1)+B*j;l.push(re,ze,Fe),l.push(ze,He,Fe),L+=6}a.addGroup(p,L,A),p+=L,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class pc extends qn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new F,c=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/e+1)/2,c.y=(o[f+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Aa extends qn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],d=[],f=[],p=[];let m=0;const S=[],g=i/2;let h=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new Yt(d,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(p,2));function v(){const x=new F,E=new F;let w=0;const C=(n-e)/i;for(let _=0;_<=s;_++){const A=[],b=_/s,P=b*(n-e)+e;for(let N=0;N<=r;N++){const X=N/r,$=X*l+a,B=Math.sin($),Y=Math.cos($);E.x=P*B,E.y=-b*i+g,E.z=P*Y,d.push(E.x,E.y,E.z),x.set(B,C,Y).normalize(),f.push(x.x,x.y,x.z),p.push(X,1-b),A.push(m++)}S.push(A)}for(let _=0;_<r;_++)for(let A=0;A<s;A++){const b=S[A][_],P=S[A+1][_],N=S[A+1][_+1],X=S[A][_+1];(e>0||A!==0)&&(c.push(b,P,X),w+=3),(n>0||A!==s-1)&&(c.push(P,N,X),w+=3)}u.addGroup(h,w,0),h+=w}function y(x){const E=m,w=new ye,C=new F;let _=0;const A=x===!0?e:n,b=x===!0?1:-1;for(let N=1;N<=r;N++)d.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),m++;const P=m;for(let N=0;N<=r;N++){const $=N/r*l+a,B=Math.cos($),Y=Math.sin($);C.x=A*Y,C.y=g*b,C.z=A*B,d.push(C.x,C.y,C.z),f.push(0,b,0),w.x=B*.5+.5,w.y=Y*.5*b+.5,p.push(w.x,w.y),m++}for(let N=0;N<r;N++){const X=E+N,$=P+N;x===!0?c.push($,$+1,X):c.push($+1,$,X),_+=3}u.addGroup(h,_,x===!0?1:2),h+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,p=(o-c)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ye:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new ct;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new F)}s[0]=new F,o[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(We(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(We(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class og extends bi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ye){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*c-p*d+this.aX,u=f*d+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class s3 extends og{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function ag(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,p*=c,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const M_=new F,E_=new F,rd=new ag,sd=new ag,od=new ag;class o3 extends bi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(E_.subVectors(r[0],r[1]).add(r[0]),u=E_);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(M_.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=M_),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(c),p);S<1e-4&&(S=1),m<1e-4&&(m=S),g<1e-4&&(g=S),rd.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,m,S,g),sd.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,m,S,g),od.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,m,S,g)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),sd.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),od.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set(rd.calc(l),sd.calc(l),od.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function T_(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function a3(t,e){const n=1-t;return n*n*e}function l3(t,e){return 2*(1-t)*t*e}function u3(t,e){return t*t*e}function Ca(t,e,n,i){return a3(t,e)+l3(t,n)+u3(t,i)}function c3(t,e){const n=1-t;return n*n*n*e}function f3(t,e){const n=1-t;return 3*n*n*t*e}function d3(t,e){return 3*(1-t)*t*t*e}function h3(t,e){return t*t*t*e}function Ra(t,e,n,i,r){return c3(t,e)+f3(t,n)+d3(t,i)+h3(t,r)}class SE extends bi{constructor(e=new ye,n=new ye,i=new ye,r=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ra(e,r.x,s.x,o.x,a.x),Ra(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class p3 extends bi{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ra(e,r.x,s.x,o.x,a.x),Ra(e,r.y,s.y,o.y,a.y),Ra(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ME extends bi{constructor(e=new ye,n=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ye){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ye){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class m3 extends bi{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class EE extends bi{constructor(e=new ye,n=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ye){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ca(e,r.x,s.x,o.x),Ca(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class g3 extends bi{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ca(e,r.x,s.x,o.x),Ca(e,r.y,s.y,o.y),Ca(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class TE extends bi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ye){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(T_(a,l.x,u.x,c.x,d.x),T_(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ye().fromArray(r))}return this}}var w_=Object.freeze({__proto__:null,ArcCurve:s3,CatmullRomCurve3:o3,CubicBezierCurve:SE,CubicBezierCurve3:p3,EllipseCurve:og,LineCurve:ME,LineCurve3:m3,QuadraticBezierCurve:EE,QuadraticBezierCurve3:g3,SplineCurve:TE});class v3 extends bi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new w_[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new w_[r.type]().fromJSON(r))}return this}}class A_ extends v3{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new ME(this.currentPoint.clone(),new ye(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new EE(this.currentPoint.clone(),new ye(e,n),new ye(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new SE(this.currentPoint.clone(),new ye(e,n),new ye(i,r),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new TE(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new og(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class wE extends A_{constructor(e){super(e),this.uuid=No(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new A_().fromJSON(r))}return this}}function _3(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=AE(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=E3(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let c=a,d=l;for(let f=n;f<r;f+=n){const p=t[f],m=t[f+1];p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>d&&(d=m)}u=Math.max(c-a,d-l),u=u!==0?32767/u:0}return rl(s,o,n,a,l,u,0),o}function AE(t,e,n,i,r){let s;if(r===N3(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=C_(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=C_(o/i|0,t[o],t[o+1],s);return s&&Co(s,s.next)&&(ol(s),s=s.next),s}function ps(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Co(n,n.next)||_t(n.prev,n,n.next)===0)){if(ol(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function rl(t,e,n,i,r,s,o){if(!t)return;!o&&s&&R3(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,u=t.next;if(s?y3(t,i,r,s):x3(t)){e.push(l.i,t.i,u.i),ol(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=S3(ps(t),e),rl(t,e,n,i,r,s,2)):o===2&&M3(t,e,n,i,r,s):rl(ps(t),e,n,i,r,s,1);break}}}function x3(t){const e=t.prev,n=t,i=t.next;if(_t(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=Math.min(r,s,o),d=Math.min(a,l,u),f=Math.max(r,s,o),p=Math.max(a,l,u);let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=f&&m.y>=d&&m.y<=p&&fa(r,a,s,l,o,u,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function y3(t,e,n,i){const r=t.prev,s=t,o=t.next;if(_t(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,f=o.y,p=Math.min(a,l,u),m=Math.min(c,d,f),S=Math.max(a,l,u),g=Math.max(c,d,f),h=hp(p,m,e,n,i),v=hp(S,g,e,n,i);let y=t.prevZ,x=t.nextZ;for(;y&&y.z>=h&&x&&x.z<=v;){if(y.x>=p&&y.x<=S&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&fa(a,c,l,d,u,f,y.x,y.y)&&_t(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=p&&x.x<=S&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&fa(a,c,l,d,u,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=S&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&fa(a,c,l,d,u,f,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=S&&x.y>=m&&x.y<=g&&x!==r&&x!==o&&fa(a,c,l,d,u,f,x.x,x.y)&&_t(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function S3(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Co(i,r)&&RE(i,n,n.next,r)&&sl(i,r)&&sl(r,i)&&(e.push(i.i,n.i,r.i),ol(n),ol(n.next),n=t=r),n=n.next}while(n!==t);return ps(n)}function M3(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&L3(o,a)){let l=bE(o,a);o=ps(o,o.next),l=ps(l,l.next),rl(o,e,n,i,r,s,0),rl(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function E3(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=AE(t,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(P3(u))}r.sort(T3);for(let s=0;s<r.length;s++)n=w3(r[s],n);return n}function T3(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function w3(t,e){const n=A3(t,e);if(!n)return e;const i=bE(n,t);return ps(i,i.next),ps(n,n.next)}function A3(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Co(t,n))return n;do{if(Co(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s&&(s=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&CE(r<u?i:s,r,l,u,r<u?s:i,r,n.x,n.y)){const d=Math.abs(r-n.y)/(i-n.x);sl(n,t)&&(d<c||d===c&&(n.x>o.x||n.x===o.x&&C3(o,n)))&&(o=n,c=d)}n=n.next}while(n!==a);return o}function C3(t,e){return _t(t.prev,t,e.prev)<0&&_t(e.next,t,t.next)<0}function R3(t,e,n,i){let r=t;do r.z===0&&(r.z=hp(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,b3(r)}function b3(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<n&&(a++,o=o.nextZ,!!o);u++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function hp(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function P3(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function CE(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function fa(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&CE(t,e,n,i,r,s,o,a)}function L3(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!D3(t,e)&&(sl(t,e)&&sl(e,t)&&I3(t,e)&&(_t(t.prev,t,e.prev)||_t(t,e.prev,e))||Co(t,e)&&_t(t.prev,t,t.next)>0&&_t(e.prev,e,e.next)>0)}function _t(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Co(t,e){return t.x===e.x&&t.y===e.y}function RE(t,e,n,i){const r=ou(_t(t,e,n)),s=ou(_t(t,e,i)),o=ou(_t(n,i,t)),a=ou(_t(n,i,e));return!!(r!==s&&o!==a||r===0&&su(t,n,e)||s===0&&su(t,i,e)||o===0&&su(n,t,i)||a===0&&su(n,e,i))}function su(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ou(t){return t>0?1:t<0?-1:0}function D3(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&RE(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function sl(t,e){return _t(t.prev,t,t.next)<0?_t(t,e,t.next)>=0&&_t(t,t.prev,e)>=0:_t(t,e,t.prev)<0||_t(t,t.next,e)<0}function I3(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function bE(t,e){const n=pp(t.i,t.x,t.y),i=pp(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function C_(t,e,n,i){const r=pp(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ol(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function pp(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function N3(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class U3{static triangulate(e,n,i=2){return _3(e,n,i)}}class ba{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ba.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];R_(e),b_(i,e);let o=e.length;n.forEach(R_);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,b_(i,n[l]);const a=U3.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function R_(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function b_(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class Vc extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],m=[],S=[],g=[];for(let h=0;h<c;h++){const v=h*f-o;for(let y=0;y<u;y++){const x=y*d-s;m.push(x,-v,0),S.push(0,0,1),g.push(y/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+u*h,x=v+u*(h+1),E=v+1+u*(h+1),w=v+1+u*h;p.push(y,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(S,3)),this.setAttribute("uv",new Yt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vc(e.width,e.height,e.widthSegments,e.heightSegments)}}class lg extends qn{constructor(e=new wE([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new Yt(r,3)),this.setAttribute("normal",new Yt(s,3)),this.setAttribute("uv",new Yt(o,2));function u(c){const d=r.length/3,f=c.extractPoints(n);let p=f.shape;const m=f.holes;ba.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,h=m.length;g<h;g++){const v=m[g];ba.isClockWise(v)===!0&&(m[g]=v.reverse())}const S=ba.triangulateShape(p,m);for(let g=0,h=m.length;g<h;g++){const v=m[g];p=p.concat(v)}for(let g=0,h=p.length;g<h;g++){const v=p[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,h=S.length;g<h;g++){const v=S[g],y=v[0]+d,x=v[1]+d,E=v[2]+d;i.push(y,x,E),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return F3(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new lg(i,e.curveSegments)}}function F3(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function Ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(P_(r))r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(P_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=Ro(t[n]);for(const r in i)e[r]=i[r]}return e}function P_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function O3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function PE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const B3={clone:Ro,merge:fn};var k3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ri extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k3,this.fragmentShader=V3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ro(e.uniforms),this.uniformsGroups=O3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ye().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ue().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class z3 extends Ri{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pa extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ad extends ys{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class H3 extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tl,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=$m,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class G3 extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W3 extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ld={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(L_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!L_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function L_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class X3{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],m=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Y3=new X3;class ug{constructor(e){this.manager=e!==void 0?e:Y3,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ug.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fs=new WeakMap;class $3 extends ug{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ld.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let d=Fs.get(o);d===void 0&&(d=[],Fs.set(o,d)),d.push({onLoad:n,onError:r})}return o}const a=il("img");function l(){c(),n&&n(this);const d=Fs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Fs.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),ld.remove(`image:${e}`);const f=Fs.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onError&&m.onError(d)}Fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ld.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class q3 extends ug{constructor(e){super(e)}load(e,n,i,r){const s=new un,o=new $3(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class LE extends jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const ud=new ct,D_=new F,I_=new F;class DE{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sg,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;D_.setFromMatrixPosition(e.matrixWorld),n.position.copy(D_),I_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(I_),n.updateMatrixWorld(),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===nl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ud)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const au=new F,lu=new Uo,mi=new F;class IE extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(au,lu,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,mi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(au,lu,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(au,lu,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new F,N_=new ye,U_=new ye;class bn extends IE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=dp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dp*2*Math.atan(Math.tan(Nf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,N_,U_),n.subVectors(U_,N_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class K3 extends DE{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class Z3 extends LE{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new K3}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class cg extends IE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class j3 extends DE{constructor(){super(new cg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class F_ extends LE{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new j3}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Os=-90,Bs=1;class J3 extends jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Os,Bs,e,n);r.layers=this.layers,this.add(r);const s=new bn(Os,Bs,e,n);s.layers=this.layers,this.add(s);const o=new bn(Os,Bs,e,n);o.layers=this.layers,this.add(o);const a=new bn(Os,Bs,e,n);a.layers=this.layers,this.add(a);const l=new bn(Os,Bs,e,n);l.layers=this.layers,this.add(l);const u=new bn(Os,Bs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===nl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class Q3 extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const mg=class mg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};mg.prototype.isMatrix2=!0;let O_=mg;function B_(t,e,n,i){const r=e2(i);switch(n){case uE:return t*e;case kc:return t*e/r.components*r.byteLength;case Jm:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case Qm:return t*e*2/r.components*r.byteLength;case cE:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case eg:return t*e*4/r.components*r.byteLength;case Cu:case Ru:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bu:case Pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:case kh:return Math.max(t,16)*Math.max(e,8)/4;case Fh:case Bh:return Math.max(t,8)*Math.max(e,8)/2;case Vh:case zh:case Gh:case Wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Hh:case cc:case Xh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ep:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case tp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case np:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ip:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case rp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case sp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case op:case ap:case lp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case up:case cp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case fc:case fp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function e2(t){switch(t){case Pn:case sE:return{byteLength:1,components:1};case Qa:case oE:case ji:return{byteLength:2,components:1};case Zm:case jm:return{byteLength:2,components:4};case Ci:case Km:case si:return{byteLength:4,components:1};case aE:case lE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ym}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ym);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function NE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function t2(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],S=d[p];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const S=d[p];t.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var n2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,i2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,r2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,o2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,a2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,l2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c2=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,f2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,h2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,p2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,m2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,g2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,v2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,x2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,S2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,M2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,E2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,T2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,w2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,A2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,C2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,R2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,b2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,P2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D2="gl_FragColor = linearToOutputTexel( gl_FragColor );",I2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,N2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,U2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,F2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,k2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,G2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,W2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,q2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,K2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,j2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Q2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eL=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tL=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,uL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dL=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mL=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gL=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vL=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_L=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xL=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yL=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SL=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ML=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EL=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TL=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wL=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AL=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CL=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RL=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bL=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PL=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LL=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DL=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IL=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NL=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UL=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FL=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,OL=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BL=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,kL=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VL=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,zL=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HL=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GL=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WL=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,XL=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YL=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$L=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qL=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KL=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZL=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jL=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QL=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iD=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,uD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gD=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_D=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MD=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ED=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,CD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PD=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,LD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DD=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ID=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ND=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:n2,alphahash_pars_fragment:i2,alphamap_fragment:r2,alphamap_pars_fragment:s2,alphatest_fragment:o2,alphatest_pars_fragment:a2,aomap_fragment:l2,aomap_pars_fragment:u2,batching_pars_vertex:c2,batching_vertex:f2,begin_vertex:d2,beginnormal_vertex:h2,bsdfs:p2,iridescence_fragment:m2,bumpmap_pars_fragment:g2,clipping_planes_fragment:v2,clipping_planes_pars_fragment:_2,clipping_planes_pars_vertex:x2,clipping_planes_vertex:y2,color_fragment:S2,color_pars_fragment:M2,color_pars_vertex:E2,color_vertex:T2,common:w2,cube_uv_reflection_fragment:A2,defaultnormal_vertex:C2,displacementmap_pars_vertex:R2,displacementmap_vertex:b2,emissivemap_fragment:P2,emissivemap_pars_fragment:L2,colorspace_fragment:D2,colorspace_pars_fragment:I2,envmap_fragment:N2,envmap_common_pars_fragment:U2,envmap_pars_fragment:F2,envmap_pars_vertex:O2,envmap_physical_pars_fragment:q2,envmap_vertex:B2,fog_vertex:k2,fog_pars_vertex:V2,fog_fragment:z2,fog_pars_fragment:H2,gradientmap_pars_fragment:G2,lightmap_pars_fragment:W2,lights_lambert_fragment:X2,lights_lambert_pars_fragment:Y2,lights_pars_begin:$2,lights_toon_fragment:K2,lights_toon_pars_fragment:Z2,lights_phong_fragment:j2,lights_phong_pars_fragment:J2,lights_physical_fragment:Q2,lights_physical_pars_fragment:eL,lights_fragment_begin:tL,lights_fragment_maps:nL,lights_fragment_end:iL,lightprobes_pars_fragment:rL,logdepthbuf_fragment:sL,logdepthbuf_pars_fragment:oL,logdepthbuf_pars_vertex:aL,logdepthbuf_vertex:lL,map_fragment:uL,map_pars_fragment:cL,map_particle_fragment:fL,map_particle_pars_fragment:dL,metalnessmap_fragment:hL,metalnessmap_pars_fragment:pL,morphinstance_vertex:mL,morphcolor_vertex:gL,morphnormal_vertex:vL,morphtarget_pars_vertex:_L,morphtarget_vertex:xL,normal_fragment_begin:yL,normal_fragment_maps:SL,normal_pars_fragment:ML,normal_pars_vertex:EL,normal_vertex:TL,normalmap_pars_fragment:wL,clearcoat_normal_fragment_begin:AL,clearcoat_normal_fragment_maps:CL,clearcoat_pars_fragment:RL,iridescence_pars_fragment:bL,opaque_fragment:PL,packing:LL,premultiplied_alpha_fragment:DL,project_vertex:IL,dithering_fragment:NL,dithering_pars_fragment:UL,roughnessmap_fragment:FL,roughnessmap_pars_fragment:OL,shadowmap_pars_fragment:BL,shadowmap_pars_vertex:kL,shadowmap_vertex:VL,shadowmask_pars_fragment:zL,skinbase_vertex:HL,skinning_pars_vertex:GL,skinning_vertex:WL,skinnormal_vertex:XL,specularmap_fragment:YL,specularmap_pars_fragment:$L,tonemapping_fragment:qL,tonemapping_pars_fragment:KL,transmission_fragment:ZL,transmission_pars_fragment:jL,uv_pars_fragment:JL,uv_pars_vertex:QL,uv_vertex:eD,worldpos_vertex:tD,background_vert:nD,background_frag:iD,backgroundCube_vert:rD,backgroundCube_frag:sD,cube_vert:oD,cube_frag:aD,depth_vert:lD,depth_frag:uD,distance_vert:cD,distance_frag:fD,equirect_vert:dD,equirect_frag:hD,linedashed_vert:pD,linedashed_frag:mD,meshbasic_vert:gD,meshbasic_frag:vD,meshlambert_vert:_D,meshlambert_frag:xD,meshmatcap_vert:yD,meshmatcap_frag:SD,meshnormal_vert:MD,meshnormal_frag:ED,meshphong_vert:TD,meshphong_frag:wD,meshphysical_vert:AD,meshphysical_frag:CD,meshtoon_vert:RD,meshtoon_frag:bD,points_vert:PD,points_frag:LD,shadow_vert:DD,shadow_frag:ID,sprite_vert:ND,sprite_frag:UD},me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},_i={basic:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:fn([me.points,me.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:fn([me.common,me.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:fn([me.sprite,me.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:fn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:fn([me.lights,me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};_i.physical={uniforms:fn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const uu={r:0,b:0,g:0},FD=new ct,UE=new Ue;UE.set(-1,0,0,0,1,0,0,0,1);function OD(t,e,n,i,r,s){const o=new Xe(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const x=v.backgroundBlurriness>0;y=e.get(y,x)}return y}function m(v){let y=!1;const x=p(v);x===null?g(o,a):x&&x.isColor&&(g(x,1),y=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,y){const x=p(y);x&&(x.isCubeTexture||x.mapping===Bc)?(u===void 0&&(u=new Pt(new Fo(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Ro(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(FD.makeRotationFromEuler(y.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(UE),u.material.toneMapped=qe.getTransfer(x.colorSpace)!==tt,(c!==x||d!==x.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=x,d=x.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Pt(new Vc(2,2),new Ri({name:"BackgroundMaterial",uniforms:Ro(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(c!==x||d!==x.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=x,d=x.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(uu,PE(t)),n.buffers.color.setClear(uu.r,uu.g,uu.b,y,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:S,dispose:h}}function BD(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,N,X,$,B){let Y=!1;const k=d(P,$,X,N);s!==k&&(s=k,u(s.object)),Y=p(P,$,X,B),Y&&m(P,$,X,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,x(P,N,X,$),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function d(P,N,X,$){const B=$.wireframe===!0;let Y=i[N.id];Y===void 0&&(Y={},i[N.id]=Y);const k=P.isInstancedMesh===!0?P.id:0;let L=Y[k];L===void 0&&(L={},Y[k]=L);let W=L[X.id];W===void 0&&(W={},L[X.id]=W);let j=W[B];return j===void 0&&(j=f(l()),W[B]=j),j}function f(P){const N=[],X=[],$=[];for(let B=0;B<n;B++)N[B]=0,X[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:X,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,N,X,$){const B=s.attributes,Y=N.attributes;let k=0;const L=X.getAttributes();for(const W in L)if(L[W].location>=0){const te=B[W];let re=Y[W];if(re===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(re=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(re=P.instanceColor)),te===void 0||te.attribute!==re||re&&te.data!==re.data)return!0;k++}return s.attributesNum!==k||s.index!==$}function m(P,N,X,$){const B={},Y=N.attributes;let k=0;const L=X.getAttributes();for(const W in L)if(L[W].location>=0){let te=Y[W];te===void 0&&(W==="instanceMatrix"&&P.instanceMatrix&&(te=P.instanceMatrix),W==="instanceColor"&&P.instanceColor&&(te=P.instanceColor));const re={};re.attribute=te,te&&te.data&&(re.data=te.data),B[W]=re,k++}s.attributes=B,s.attributesNum=k,s.index=$}function S(){const P=s.newAttributes;for(let N=0,X=P.length;N<X;N++)P[N]=0}function g(P){h(P,0)}function h(P,N){const X=s.newAttributes,$=s.enabledAttributes,B=s.attributeDivisors;X[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),B[P]!==N&&(t.vertexAttribDivisor(P,N),B[P]=N)}function v(){const P=s.newAttributes,N=s.enabledAttributes;for(let X=0,$=N.length;X<$;X++)N[X]!==P[X]&&(t.disableVertexAttribArray(X),N[X]=0)}function y(P,N,X,$,B,Y,k){k===!0?t.vertexAttribIPointer(P,N,X,B,Y):t.vertexAttribPointer(P,N,X,$,B,Y)}function x(P,N,X,$){S();const B=$.attributes,Y=X.getAttributes(),k=N.defaultAttributeValues;for(const L in Y){const W=Y[L];if(W.location>=0){let j=B[L];if(j===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const te=j.normalized,re=j.itemSize,ze=e.get(j);if(ze===void 0)continue;const He=ze.buffer,Fe=ze.type,Z=ze.bytesPerElement,ae=Fe===t.INT||Fe===t.UNSIGNED_INT||j.gpuType===Km;if(j.isInterleavedBufferAttribute){const ie=j.data,Ne=ie.stride,Oe=j.offset;if(ie.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)h(W.location+Pe,ie.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)g(W.location+Pe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let Pe=0;Pe<W.locationSize;Pe++)y(W.location+Pe,re/W.locationSize,Fe,te,Ne*Z,(Oe+re/W.locationSize*Pe)*Z,ae)}else{if(j.isInstancedBufferAttribute){for(let ie=0;ie<W.locationSize;ie++)h(W.location+ie,j.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ie=0;ie<W.locationSize;ie++)g(W.location+ie);t.bindBuffer(t.ARRAY_BUFFER,He);for(let ie=0;ie<W.locationSize;ie++)y(W.location+ie,re/W.locationSize,Fe,te,re*Z,re/W.locationSize*ie*Z,ae)}}else if(k!==void 0){const te=k[L];if(te!==void 0)switch(te.length){case 2:t.vertexAttrib2fv(W.location,te);break;case 3:t.vertexAttrib3fv(W.location,te);break;case 4:t.vertexAttrib4fv(W.location,te);break;default:t.vertexAttrib1fv(W.location,te)}}}}v()}function E(){A();for(const P in i){const N=i[P];for(const X in N){const $=N[X];for(const B in $){const Y=$[B];for(const k in Y)c(Y[k].object),delete Y[k];delete $[B]}}delete i[P]}}function w(P){if(i[P.id]===void 0)return;const N=i[P.id];for(const X in N){const $=N[X];for(const B in $){const Y=$[B];for(const k in Y)c(Y[k].object),delete Y[k];delete $[B]}}delete i[P.id]}function C(P){for(const N in i){const X=i[N];for(const $ in X){const B=X[$];if(B[P.id]===void 0)continue;const Y=B[P.id];for(const k in Y)c(Y[k].object),delete Y[k];delete B[P.id]}}}function _(P){for(const N in i){const X=i[N],$=P.isInstancedMesh===!0?P.id:0,B=X[$];if(B!==void 0){for(const Y in B){const k=B[Y];for(const L in k)c(k[L].object),delete k[L];delete B[Y]}delete X[$],Object.keys(X).length===0&&delete i[N]}}}function A(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function kD(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function VD(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==oi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const _=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!_)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Ie("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),w=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:x,maxSamples:E,samples:w}}function zD(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new $r,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,y=v*4;let x=h.clippingState||null;l.value=x,x=c(m,f,y,p);for(let E=0;E!==y;++E)x[E]=n[E];h.clippingState=x,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,m){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,m!==!0||g===null){const h=p+S*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,x=p;y!==S;++y,x+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const xr=4,k_=[.125,.215,.35,.446,.526,.582],Kr=20,HD=256,ea=new cg,V_=new Xe;let cd=null,fd=0,dd=0,hd=!1;const GD=new F;class mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=GD}=s;cd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=H_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cd,fd,dd),this._renderer.xr.enabled=hd,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cd=this._renderer.getRenderTarget(),fd=this._renderer.getActiveCubeFace(),dd=this._renderer.getActiveMipmapLevel(),hd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:ji,format:oi,colorSpace:dc,depthBuffer:!1},r=z_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=z_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WD(s)),this._blurMaterial=YD(s,e,n),this._ggxMaterial=XD(s,e,n)}return r}_compileMaterial(e){const n=new Pt(new qn,e);this._renderer.compile(n,ea)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(V_),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Fo,new _E({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy(V_),h=!0);for(let y=0;y<6;y++){const x=y%3;x===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):x===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const E=this._cubeSize;ks(r,x*E,y>2?E:0,E,E),d.setRenderTarget(r),h&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===wo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=H_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ea)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:m}=this,S=this._sizeLods[i],g=3*S*(i>m-xr?i-m+xr:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,ks(s,g,h,3*S,2*S),r.setRenderTarget(s),r.render(a,ea),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,ks(e,g,h,3*S,2*S),r.setRenderTarget(e),r.render(a,ea)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Kr-1),S=s/m,g=isFinite(s)?1+Math.floor(c*S):Kr;g>Kr&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Kr}`);const h=[];let v=0;for(let C=0;C<Kr;++C){const _=C/S,A=Math.exp(-_*_/2);h.push(A),C===0?v+=A:C<g&&(v+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const x=this._sizeLods[r],E=3*x*(r>y-xr?r-y+xr:0),w=4*(this._cubeSize-x);ks(n,E,w,3*x,2*x),l.setRenderTarget(n),l.render(d,ea)}}function WD(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+k_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-xr?l=k_[o-t+xr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,m=6,S=3,g=2,h=1,v=new Float32Array(S*m*p),y=new Float32Array(g*m*p),x=new Float32Array(h*m*p);for(let w=0;w<p;w++){const C=w%3*2/3-1,_=w>2?0:-1,A=[C,_,0,C+2/3,_,0,C+2/3,_+1,0,C,_,0,C+2/3,_+1,0,C,_+1,0];v.set(A,S*m*w),y.set(f,g*m*w);const b=[w,w,w,w,w,w];x.set(b,h*m*w)}const E=new qn;E.setAttribute("position",new ui(v,S)),E.setAttribute("uv",new ui(y,g)),E.setAttribute("faceIndex",new ui(x,h)),i.push(new Pt(E,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function z_(t,e,n){const i=new Ai(t,e,n);return i.texture.mapping=Bc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XD(t,e,n){return new Ri({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HD,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function YD(t,e,n){const i=new Float32Array(Kr),r=new F(0,1,0);return new Ri({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function H_(){return new Ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function G_(){return new Ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function zc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class FE extends Ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new xE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Fo(5,5,5),s=new Ri({name:"CubemapFromEquirect",uniforms:Ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Wi});s.uniforms.tEquirect.value=n;const o=new Pt(r,s),a=n.minFilter;return n.minFilter===ts&&(n.minFilter=ln),new J3(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function $D(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===Lf||p===Df)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const S=new FE(m.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",u),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===Lf||p===Df,S=p===ds||p===wo;if(m||S){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new mp(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new mp(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,p){return p===Lf?f.mapping=ds:p===Df&&(f.mapping=wo),f}function l(f){let p=0;const m=6;for(let S=0;S<m;S++)f[S]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function qD(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fo("WebGLRenderer: "+i+" extension not supported."),r}}}function KD(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,m=d.attributes.position;let S=0;if(m===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let y=0,x=v.length;y<x;y+=3){const E=v[y+0],w=v[y+1],C=v[y+2];f.push(E,w,w,C,C,E)}}else{const v=m.array;S=m.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const E=y+0,w=y+1,C=y+2;f.push(E,w,w,C,C,E)}}const g=new(m.count>=65535?vE:gE)(f,1);g.version=S;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function ZD(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function u(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let S=0;for(let g=0;g<p;g++)S+=f[g];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function jD(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JD(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),m===!0&&(y=2),S===!0&&(y=3);let x=a.attributes.position.count*y,E=1;x>e.maxTextureSize&&(E=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*E*4*d),C=new dE(w,x,E,d);C.type=si,C.needsUpdate=!0;const _=y*4;for(let b=0;b<d;b++){const P=g[b],N=h[b],X=v[b],$=x*E*4*b;for(let B=0;B<P.count;B++){const Y=B*_;p===!0&&(r.fromBufferAttribute(P,B),w[$+Y+0]=r.x,w[$+Y+1]=r.y,w[$+Y+2]=r.z,w[$+Y+3]=0),m===!0&&(r.fromBufferAttribute(N,B),w[$+Y+4]=r.x,w[$+Y+5]=r.y,w[$+Y+6]=r.z,w[$+Y+7]=0),S===!0&&(r.fromBufferAttribute(X,B),w[$+Y+8]=r.x,w[$+Y+9]=r.y,w[$+Y+10]=r.z,w[$+Y+11]=X.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new ye(x,E)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<u.length;S++)p+=u[S];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function QD(t,e,n,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}const eI={[JM]:"LINEAR_TONE_MAPPING",[QM]:"REINHARD_TONE_MAPPING",[eE]:"CINEON_TONE_MAPPING",[qm]:"ACES_FILMIC_TONE_MAPPING",[nE]:"AGX_TONE_MAPPING",[iE]:"NEUTRAL_TONE_MAPPING",[tE]:"CUSTOM_TONE_MAPPING"};function tI(t,e,n,i,r,s){const o=new Ai(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new Ao(e,n):void 0}),a=new Ai(e,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new qn;l.setAttribute("position",new Yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Yt([0,2,0,0,2,0],2));const u=new z3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(l,u),d=new cg(-1,1,1,-1,0,1);let f=null,p=null,m=!1,S,g=null,h=[],v=!1;this.setSize=function(y,x){o.setSize(y,x),a.setSize(y,x);for(let E=0;E<h.length;E++){const w=h[E];w.setSize&&w.setSize(y,x)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const x=o.width,E=o.height;for(let w=0;w<h.length;w++){const C=h[w];C.setSize&&C.setSize(x,E)}},this.begin=function(y,x){if(m||y.toneMapping===wi&&h.length===0)return!1;if(g=x,x!==null){const E=x.width,w=x.height;(o.width!==E||o.height!==w)&&this.setSize(E,w)}return v===!1&&y.setRenderTarget(o),S=y.toneMapping,y.toneMapping=wi,!0},this.hasRenderPass=function(){return v},this.end=function(y,x){y.toneMapping=S,m=!0;let E=o,w=a;for(let C=0;C<h.length;C++){const _=h[C];if(_.enabled!==!1&&(_.render(y,w,E,x),_.needsSwap!==!1)){const A=E;E=w,w=A}}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,u.defines={},qe.getTransfer(f)===tt&&(u.defines.SRGB_TRANSFER="");const C=eI[p];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(g),y.render(c,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),u.dispose()}}const OE=new un,gp=new Ao(1,1),BE=new dE,kE=new kP,VE=new xE,W_=[],X_=[],Y_=new Float32Array(16),$_=new Float32Array(9),q_=new Float32Array(4);function Oo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=W_[r];if(s===void 0&&(s=new Float32Array(r),W_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hc(t,e){let n=X_[e];n===void 0&&(n=new Int32Array(e),X_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function nI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function iI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function rI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function sI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function oI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;q_.set(i),t.uniformMatrix2fv(this.addr,!1,q_),zt(n,i)}}function aI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;$_.set(i),t.uniformMatrix3fv(this.addr,!1,$_),zt(n,i)}}function lI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Y_.set(i),t.uniformMatrix4fv(this.addr,!1,Y_),zt(n,i)}}function uI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function cI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function fI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function dI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function hI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function pI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function mI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function gI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function vI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gp.compareFunction=n.isReversedDepthBuffer()?ng:tg,s=gp):s=OE,n.setTexture2D(e||s,r)}function _I(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||kE,r)}function xI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||VE,r)}function yI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||BE,r)}function SI(t){switch(t){case 5126:return nI;case 35664:return iI;case 35665:return rI;case 35666:return sI;case 35674:return oI;case 35675:return aI;case 35676:return lI;case 5124:case 35670:return uI;case 35667:case 35671:return cI;case 35668:case 35672:return fI;case 35669:case 35673:return dI;case 5125:return hI;case 36294:return pI;case 36295:return mI;case 36296:return gI;case 35678:case 36198:case 36298:case 36306:case 35682:return vI;case 35679:case 36299:case 36307:return _I;case 35680:case 36300:case 36308:case 36293:return xI;case 36289:case 36303:case 36311:case 36292:return yI}}function MI(t,e){t.uniform1fv(this.addr,e)}function EI(t,e){const n=Oo(e,this.size,2);t.uniform2fv(this.addr,n)}function TI(t,e){const n=Oo(e,this.size,3);t.uniform3fv(this.addr,n)}function wI(t,e){const n=Oo(e,this.size,4);t.uniform4fv(this.addr,n)}function AI(t,e){const n=Oo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CI(t,e){const n=Oo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function RI(t,e){const n=Oo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function bI(t,e){t.uniform1iv(this.addr,e)}function PI(t,e){t.uniform2iv(this.addr,e)}function LI(t,e){t.uniform3iv(this.addr,e)}function DI(t,e){t.uniform4iv(this.addr,e)}function II(t,e){t.uniform1uiv(this.addr,e)}function NI(t,e){t.uniform2uiv(this.addr,e)}function UI(t,e){t.uniform3uiv(this.addr,e)}function FI(t,e){t.uniform4uiv(this.addr,e)}function OI(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=gp:o=OE;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function BI(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||kE,s[o])}function kI(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||VE,s[o])}function VI(t,e,n){const i=this.cache,r=e.length,s=Hc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||BE,s[o])}function zI(t){switch(t){case 5126:return MI;case 35664:return EI;case 35665:return TI;case 35666:return wI;case 35674:return AI;case 35675:return CI;case 35676:return RI;case 5124:case 35670:return bI;case 35667:case 35671:return PI;case 35668:case 35672:return LI;case 35669:case 35673:return DI;case 5125:return II;case 36294:return NI;case 36295:return UI;case 36296:return FI;case 35678:case 36198:case 36298:case 36306:case 35682:return OI;case 35679:case 36299:case 36307:return BI;case 35680:case 36300:case 36308:case 36293:return kI;case 36289:case 36303:case 36311:case 36292:return VI}}class HI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=SI(n.type)}}class GI{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=zI(n.type)}}class WI{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const pd=/(\w+)(\])?(\[|\.)?/g;function K_(t,e){t.seq.push(e),t.map[e.id]=e}function XI(t,e,n){const i=t.name,r=i.length;for(pd.lastIndex=0;;){const s=pd.exec(i),o=pd.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){K_(n,u===void 0?new HI(a,t,e):new GI(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new WI(a),K_(n,d)),n=d}}}class Lu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);XI(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Z_(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YI=37297;let $I=0;function qI(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const j_=new Ue;function KI(t){qe._getMatrix(j_,qe.workingColorSpace,t);const e=`mat3( ${j_.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case hc:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function J_(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+qI(t.getShaderSource(e),a)}else return s}function ZI(t,e){const n=KI(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const jI={[JM]:"Linear",[QM]:"Reinhard",[eE]:"Cineon",[qm]:"ACESFilmic",[nE]:"AgX",[iE]:"Neutral",[tE]:"Custom"};function JI(t,e){const n=jI[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const cu=new F;function QI(){qe.getLuminanceCoefficients(cu);const t=cu.x.toFixed(4),e=cu.y.toFixed(4),n=cu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function eN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function tN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function nN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function da(t){return t!==""}function Q_(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ex(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iN=/^[ \t]*#include +<([\w\d./]+)>/gm;function vp(t){return t.replace(iN,sN)}const rN=new Map;function sN(t,e){let n=Ve[e];if(n===void 0){const i=rN.get(e);if(i!==void 0)n=Ve[i],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return vp(n)}const oN=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tx(t){return t.replace(oN,aN)}function aN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function nx(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const lN={[Au]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function uN(t){return lN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cN={[ds]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[Bc]:"ENVMAP_TYPE_CUBE_UV"};function fN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":cN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const dN={[wo]:"ENVMAP_MODE_REFRACTION"};function hN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":dN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pN={[$m]:"ENVMAP_BLENDING_MULTIPLY",[_P]:"ENVMAP_BLENDING_MIX",[xP]:"ENVMAP_BLENDING_ADD"};function mN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":pN[t.combine]||"ENVMAP_BLENDING_NONE"}function gN(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function vN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=uN(n),u=fN(n),c=hN(n),d=mN(n),f=gN(n),p=eN(n),m=tN(s),S=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(da).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(da).join(`
`),h.length>0&&(h+=`
`)):(g=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),h=[nx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?Ve.tonemapping_pars_fragment:"",n.toneMapping!==wi?JI("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,ZI("linearToOutputTexel",n.outputColorSpace),QI(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),o=vp(o),o=Q_(o,n),o=ex(o,n),a=vp(a),a=Q_(a,n),a=ex(a,n),o=tx(o),a=tx(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+g+o,x=v+h+a,E=Z_(r,r.VERTEX_SHADER,y),w=Z_(r,r.FRAGMENT_SHADER,x);r.attachShader(S,E),r.attachShader(S,w),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(S)||"",X=r.getShaderInfoLog(E)||"",$=r.getShaderInfoLog(w)||"",B=N.trim(),Y=X.trim(),k=$.trim();let L=!0,W=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,E,w);else{const j=J_(r,E,"vertex"),te=J_(r,w,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+j+`
`+te)}else B!==""?Ie("WebGLProgram: Program Info Log:",B):(Y===""||k==="")&&(W=!1);W&&(P.diagnostics={runnable:L,programLog:B,vertexShader:{log:Y,prefix:g},fragmentShader:{log:k,prefix:h}})}r.deleteShader(E),r.deleteShader(w),_=new Lu(r,S),A=nN(r,S)}let _;this.getUniforms=function(){return _===void 0&&C(this),_};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,YI)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$I++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=E,this.fragmentShader=w,this}let _N=0;class xN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new yN(e),n.set(e,i)),i}}class yN{constructor(e){this.id=_N++,this.code=e,this.usedTimes=0}}function SN(t){return t===hs||t===cc||t===fc}function MN(t,e,n,i,r,s){const o=new hE,a=new xN,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function S(_,A,b,P,N,X){const $=P.fog,B=N.geometry,Y=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,L=e.get(_.envMap||Y,k),W=L&&L.mapping===Bc?L.image.height:null,j=p[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));const te=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,re=te!==void 0?te.length:0;let ze=0;B.morphAttributes.position!==void 0&&(ze=1),B.morphAttributes.normal!==void 0&&(ze=2),B.morphAttributes.color!==void 0&&(ze=3);let He,Fe,Z,ae;if(j){const Ee=_i[j];He=Ee.vertexShader,Fe=Ee.fragmentShader}else{He=_.vertexShader,Fe=_.fragmentShader;const Ee=a.getVertexShaderStage(_),Mt=a.getFragmentShaderStage(_);a.update(_,Ee,Mt),Z=Ee.id,ae=Mt.id}const ie=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,Pe=N.isBatchedMesh===!0,At=!!_.map,$e=!!_.matcap,rt=!!L,Qe=!!_.aoMap,Ke=!!_.lightMap,Dt=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Ht=!!_.displacementMap,$t=!!_.emissiveMap,St=!!_.metalnessMap,It=!!_.roughnessMap,I=_.anisotropy>0,vn=_.clearcoat>0,et=_.dispersion>0,R=_.iridescence>0,M=_.sheen>0,O=_.transmission>0,H=I&&!!_.anisotropyMap,q=vn&&!!_.clearcoatMap,se=vn&&!!_.clearcoatNormalMap,ue=vn&&!!_.clearcoatRoughnessMap,K=R&&!!_.iridescenceMap,Q=R&&!!_.iridescenceThicknessMap,ce=M&&!!_.sheenColorMap,Ae=M&&!!_.sheenRoughnessMap,pe=!!_.specularMap,fe=!!_.specularColorMap,be=!!_.specularIntensityMap,Le=O&&!!_.transmissionMap,Be=O&&!!_.thicknessMap,D=!!_.gradientMap,le=!!_.alphaMap,J=_.alphaTest>0,de=!!_.alphaHash,_e=!!_.extensions;let ee=wi;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ee=t.toneMapping);const we={shaderID:j,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:Fe,defines:_.defines,customVertexShaderID:Z,customFragmentShaderID:ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Pe,batchingColor:Pe&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:$e,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:W,aoMap:Qe,lightMap:Ke,bumpMap:Dt,normalMap:Ft,displacementMap:Ht,emissiveMap:$t,normalMapObjectSpace:Ft&&_.normalMapType===MP,normalMapTangentSpace:Ft&&_.normalMapType===tl,packedNormalMap:Ft&&_.normalMapType===tl&&SN(_.normalMap.format),metalnessMap:St,roughnessMap:It,anisotropy:I,anisotropyMap:H,clearcoat:vn,clearcoatMap:q,clearcoatNormalMap:se,clearcoatRoughnessMap:ue,dispersion:et,iridescence:R,iridescenceMap:K,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:ce,sheenRoughnessMap:Ae,specularMap:pe,specularColorMap:fe,specularIntensityMap:be,transmission:O,transmissionMap:Le,thicknessMap:Be,gradientMap:D,opaque:_.transparent===!1&&_.blending===co&&_.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:de,combine:_.combine,mapUv:At&&m(_.map.channel),aoMapUv:Qe&&m(_.aoMap.channel),lightMapUv:Ke&&m(_.lightMap.channel),bumpMapUv:Dt&&m(_.bumpMap.channel),normalMapUv:Ft&&m(_.normalMap.channel),displacementMapUv:Ht&&m(_.displacementMap.channel),emissiveMapUv:$t&&m(_.emissiveMap.channel),metalnessMapUv:St&&m(_.metalnessMap.channel),roughnessMapUv:It&&m(_.roughnessMap.channel),anisotropyMapUv:H&&m(_.anisotropyMap.channel),clearcoatMapUv:q&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(_.sheenRoughnessMap.channel),specularMapUv:pe&&m(_.specularMap.channel),specularColorMapUv:fe&&m(_.specularColorMap.channel),specularIntensityMapUv:be&&m(_.specularIntensityMap.channel),transmissionMapUv:Le&&m(_.transmissionMap.channel),thicknessMapUv:Be&&m(_.thicknessMap.channel),alphaMapUv:le&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ft||I),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(At||le),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ne,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ze,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&qe.getTransfer(_.map.colorSpace)===tt,decodeVideoTextureEmissive:$t&&_.emissiveMap.isVideoTexture===!0&&qe.getTransfer(_.emissiveMap.colorSpace)===tt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Oi,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:_e&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&_.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function g(_){const A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(const b in _.defines)A.push(b),A.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(h(A,_),v(A,_),A.push(t.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function h(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function v(_,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){const A=p[_.type];let b;if(A){const P=_i[A];b=B3.clone(P.uniforms)}else b=_.uniforms;return b}function x(_,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new vN(t,A,_,r),u.push(b),c.set(A,b)),b}function E(_){if(--_.usedTimes===0){const A=u.indexOf(_);u[A]=u[u.length-1],u.pop(),c.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function C(){a.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:y,acquireProgram:x,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:C}}function EN(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function TN(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ix(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function rx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,S,g,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=o(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=g,v.group=h),e++,v}function l(f,p,m,S,g,h){const v=a(f,p,m,S,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function u(f,p,m,S,g,h){const v=a(f,p,m,S,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function c(f,p,m){n.length>1&&n.sort(f||TN),i.length>1&&i.sort(p||ix),r.length>1&&r.sort(p||ix),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function wN(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new rx,t.set(i,[o])):r>=s.length?(o=new rx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function AN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Xe};break;case"SpotLight":n={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function CN(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let RN=0;function bN(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function PN(t){const e=new AN,n=CN(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new ct,o=new ct;function a(u){let c=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,m=0,S=0,g=0,h=0,v=0,y=0,x=0,E=0,w=0,C=0;u.sort(bN);for(let A=0,b=u.length;A<b;A++){const P=u[A],N=P.color,X=P.intensity,$=P.distance;let B=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hs?B=P.shadow.map.texture:B=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=N.r*X,d+=N.g*X,f+=N.b*X;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],X);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,L=n.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=B,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(N).multiplyScalar(X),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[S]=Y;const k=P.shadow;if(P.map&&(i.spotLightMap[E]=P.map,E++,k.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[S]=k.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=B,x++}S++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(N).multiplyScalar(X),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=Y,g++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const k=P.shadow,L=n.get(P);L.shadowIntensity=k.intensity,L.shadowBias=k.bias,L.shadowNormalBias=k.normalBias,L.shadowRadius=k.radius,L.shadowMapSize=k.mapSize,L.shadowCameraNear=k.camera.near,L.shadowCameraFar=k.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=B,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(X),Y.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[h]=Y,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const _=i.hash;(_.directionalLength!==p||_.pointLength!==m||_.spotLength!==S||_.rectAreaLength!==g||_.hemiLength!==h||_.numDirectionalShadows!==v||_.numPointShadows!==y||_.numSpotShadows!==x||_.numSpotMaps!==E||_.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=x+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,_.directionalLength=p,_.pointLength=m,_.spotLength=S,_.rectAreaLength=g,_.hemiLength=h,_.numDirectionalShadows=v,_.numPointShadows=y,_.numSpotShadows=x,_.numSpotMaps=E,_.numLightProbes=C,i.version=RN++)}function l(u,c){let d=0,f=0,p=0,m=0,S=0;const g=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const y=u[h];if(y.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),d++}else if(y.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const x=i.rectArea[m];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const x=i.point[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const x=i.hemi[S];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function sx(t){const e=new PN(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function LN(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new sx(t),e.set(r,[a])):s>=o.length?(a=new sx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const DN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,NN=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],UN=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ox=new ct,ta=new F,md=new F;function FN(t,e,n){let i=new sg;const r=new ye,s=new ye,o=new vt,a=new G3,l=new W3,u={},c=n.maxTextureSize,d={[Dr]:pn,[pn]:Dr,[Oi]:Oi},f=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:DN,fragmentShader:IN}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new qn;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Pt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Au;let h=this.type;this.render=function(w,C,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Qb&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Au);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),N=t.state;N.setBlending(Wi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const X=h!==this.type;X&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(B=>B.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,B=w.length;$<B;$++){const Y=w[$],k=Y.shadow;if(k===void 0){Ie("WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const L=k.getFrameExtents();r.multiply(L),s.copy(k.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,k.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,k.mapSize.y=s.y));const W=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=W,k.map===null||X===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ua){if(Y.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new Ai(r.x,r.y,{format:hs,type:ji,minFilter:ln,magFilter:ln,generateMipmaps:!1}),k.map.texture.name=Y.name+".shadowMap",k.map.depthTexture=new Ao(r.x,r.y,si),k.map.depthTexture.name=Y.name+".shadowMapDepth",k.map.depthTexture.format=Ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt}else Y.isPointLight?(k.map=new FE(r.x),k.map.depthTexture=new r3(r.x,Ci)):(k.map=new Ai(r.x,r.y),k.map.depthTexture=new Ao(r.x,r.y,Ci)),k.map.depthTexture.name=Y.name+".shadowMap",k.map.depthTexture.format=Ji,this.type===Au?(k.map.depthTexture.compareFunction=W?ng:tg,k.map.depthTexture.minFilter=ln,k.map.depthTexture.magFilter=ln):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=kt,k.map.depthTexture.magFilter=kt);k.camera.updateProjectionMatrix()}const j=k.map.isWebGLCubeRenderTarget?6:1;for(let te=0;te<j;te++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,te),t.clear();else{te===0&&(t.setRenderTarget(k.map),t.clear());const re=k.getViewport(te);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),N.viewport(o)}if(Y.isPointLight){const re=k.camera,ze=k.matrix,He=Y.distance||re.far;He!==re.far&&(re.far=He,re.updateProjectionMatrix()),ta.setFromMatrixPosition(Y.matrixWorld),re.position.copy(ta),md.copy(re.position),md.add(NN[te]),re.up.copy(UN[te]),re.lookAt(md),re.updateMatrixWorld(),ze.makeTranslation(-ta.x,-ta.y,-ta.z),ox.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(ox,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(Y);i=k.getFrustum(),x(C,_,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&v(k,_),k.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(A,b,P)};function v(w,C){const _=e.update(S);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ai(r.x,r.y,{format:hs,type:ji})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,t.setRenderTarget(w.mapPass),t.clear(),t.renderBufferDirect(C,null,_,f,S,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,t.setRenderTarget(w.map),t.clear(),t.renderBufferDirect(C,null,_,p,S,null)}function y(w,C,_,A){let b=null;const P=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=_.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const N=b.uuid,X=C.uuid;let $=u[N];$===void 0&&($={},u[N]=$);let B=$[X];B===void 0&&(B=b.clone(),$[X]=B,C.addEventListener("dispose",E)),b=B}if(b.visible=C.visible,b.wireframe=C.wireframe,A===ua?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,_.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const N=t.properties.get(b);N.light=_}return b}function x(w,C,_,A,b){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ua)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);const X=e.update(w),$=w.material;if(Array.isArray($)){const B=X.groups;for(let Y=0,k=B.length;Y<k;Y++){const L=B[Y],W=$[L.materialIndex];if(W&&W.visible){const j=y(w,W,A,b);w.onBeforeShadow(t,w,C,_,X,j,L),t.renderBufferDirect(_,null,X,j,w,L),w.onAfterShadow(t,w,C,_,X,j,L)}}}else if($.visible){const B=y(w,$,A,b);w.onBeforeShadow(t,w,C,_,X,B,null),t.renderBufferDirect(_,null,X,B,w,null),w.onAfterShadow(t,w,C,_,X,B,null)}}const N=w.children;for(let X=0,$=N.length;X<$;X++)x(N[X],C,_,A,b)}function E(w){w.target.removeEventListener("dispose",E);for(const _ in u){const A=u[_],b=w.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function ON(t,e){function n(){let D=!1;const le=new vt;let J=null;const de=new vt(0,0,0,0);return{setMask:function(_e){J!==_e&&!D&&(t.colorMask(_e,_e,_e,_e),J=_e)},setLocked:function(_e){D=_e},setClear:function(_e,ee,we,Ee,Mt){Mt===!0&&(_e*=Ee,ee*=Ee,we*=Ee),le.set(_e,ee,we,Ee),de.equals(le)===!1&&(t.clearColor(_e,ee,we,Ee),de.copy(le))},reset:function(){D=!1,J=null,de.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,J=null,de=null,_e=null;return{setReversed:function(ee){if(le!==ee){const we=e.get("EXT_clip_control");ee?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return le},setTest:function(ee){ee?ie(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(ee){J!==ee&&!D&&(t.depthMask(ee),J=ee)},setFunc:function(ee){if(le&&(ee=DP[ee]),de!==ee){switch(ee){case Ch:t.depthFunc(t.NEVER);break;case Rh:t.depthFunc(t.ALWAYS);break;case bh:t.depthFunc(t.LESS);break;case To:t.depthFunc(t.LEQUAL);break;case Ph:t.depthFunc(t.EQUAL);break;case Lh:t.depthFunc(t.GEQUAL);break;case Dh:t.depthFunc(t.GREATER);break;case Ih:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ee}},setLocked:function(ee){D=ee},setClear:function(ee){_e!==ee&&(_e=ee,le&&(ee=1-ee),t.clearDepth(ee))},reset:function(){D=!1,J=null,de=null,_e=null,le=!1}}}function r(){let D=!1,le=null,J=null,de=null,_e=null,ee=null,we=null,Ee=null,Mt=null;return{setTest:function(at){D||(at?ie(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(at){le!==at&&!D&&(t.stencilMask(at),le=at)},setFunc:function(at,fi,di){(J!==at||de!==fi||_e!==di)&&(t.stencilFunc(at,fi,di),J=at,de=fi,_e=di)},setOp:function(at,fi,di){(ee!==at||we!==fi||Ee!==di)&&(t.stencilOp(at,fi,di),ee=at,we=fi,Ee=di)},setLocked:function(at){D=at},setClear:function(at){Mt!==at&&(t.clearStencil(at),Mt=at)},reset:function(){D=!1,le=null,J=null,de=null,_e=null,ee=null,we=null,Ee=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,x=null,E=null,w=null,C=null,_=new Xe(0,0,0),A=0,b=!1,P=null,N=null,X=null,$=null,B=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,L=0;const W=t.getParameter(t.VERSION);W.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=L>=1):W.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=L>=2);let j=null,te={};const re=t.getParameter(t.SCISSOR_BOX),ze=t.getParameter(t.VIEWPORT),He=new vt().fromArray(re),Fe=new vt().fromArray(ze);function Z(D,le,J,de){const _e=new Uint8Array(4),ee=t.createTexture();t.bindTexture(D,ee),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<J;we++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(le+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ee}const ae={};ae[t.TEXTURE_2D]=Z(t.TEXTURE_2D,t.TEXTURE_2D,1),ae[t.TEXTURE_CUBE_MAP]=Z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[t.TEXTURE_2D_ARRAY]=Z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ae[t.TEXTURE_3D]=Z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(To),Dt(!1),Ft(Zv),ie(t.CULL_FACE),Qe(Wi);function ie(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function Ne(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Oe(D,le){return f[D]!==le?(t.bindFramebuffer(D,le),f[D]=le,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(D,le){let J=m,de=!1;if(D){J=p.get(le),J===void 0&&(J=[],p.set(le,J));const _e=D.textures;if(J.length!==_e.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,we=_e.length;ee<we;ee++)J[ee]=t.COLOR_ATTACHMENT0+ee;J.length=_e.length,de=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,de=!0);de&&t.drawBuffers(J)}function At(D){return S!==D?(t.useProgram(D),S=D,!0):!1}const $e={[qr]:t.FUNC_ADD,[tP]:t.FUNC_SUBTRACT,[nP]:t.FUNC_REVERSE_SUBTRACT};$e[iP]=t.MIN,$e[rP]=t.MAX;const rt={[sP]:t.ZERO,[oP]:t.ONE,[aP]:t.SRC_COLOR,[wh]:t.SRC_ALPHA,[hP]:t.SRC_ALPHA_SATURATE,[fP]:t.DST_COLOR,[uP]:t.DST_ALPHA,[lP]:t.ONE_MINUS_SRC_COLOR,[Ah]:t.ONE_MINUS_SRC_ALPHA,[dP]:t.ONE_MINUS_DST_COLOR,[cP]:t.ONE_MINUS_DST_ALPHA,[pP]:t.CONSTANT_COLOR,[mP]:t.ONE_MINUS_CONSTANT_COLOR,[gP]:t.CONSTANT_ALPHA,[vP]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(D,le,J,de,_e,ee,we,Ee,Mt,at){if(D===Wi){g===!0&&(Ne(t.BLEND),g=!1);return}if(g===!1&&(ie(t.BLEND),g=!0),D!==eP){if(D!==h||at!==b){if((v!==qr||E!==qr)&&(t.blendEquation(t.FUNC_ADD),v=qr,E=qr),at)switch(D){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jv:t.blendFunc(t.ONE,t.ONE);break;case Jv:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Qv:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:je("WebGLState: Invalid blending: ",D);break}else switch(D){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jv:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Jv:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qv:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",D);break}y=null,x=null,w=null,C=null,_.set(0,0,0),A=0,h=D,b=at}return}_e=_e||le,ee=ee||J,we=we||de,(le!==v||_e!==E)&&(t.blendEquationSeparate($e[le],$e[_e]),v=le,E=_e),(J!==y||de!==x||ee!==w||we!==C)&&(t.blendFuncSeparate(rt[J],rt[de],rt[ee],rt[we]),y=J,x=de,w=ee,C=we),(Ee.equals(_)===!1||Mt!==A)&&(t.blendColor(Ee.r,Ee.g,Ee.b,Mt),_.copy(Ee),A=Mt),h=D,b=!1}function Ke(D,le){D.side===Oi?Ne(t.CULL_FACE):ie(t.CULL_FACE);let J=D.side===pn;le&&(J=!J),Dt(J),D.blending===co&&D.transparent===!1?Qe(Wi):Qe(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const de=D.stencilWrite;a.setTest(de),de&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),$t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function Ft(D){D!==jb?(ie(t.CULL_FACE),D!==N&&(D===Zv?t.cullFace(t.BACK):D===Jb?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),N=D}function Ht(D){D!==X&&(k&&t.lineWidth(D),X=D)}function $t(D,le,J){D?(ie(t.POLYGON_OFFSET_FILL),($!==le||B!==J)&&($=le,B=J,o.getReversed()&&(le=-le),t.polygonOffset(le,J))):Ne(t.POLYGON_OFFSET_FILL)}function St(D){D?ie(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function It(D){D===void 0&&(D=t.TEXTURE0+Y-1),j!==D&&(t.activeTexture(D),j=D)}function I(D,le,J){J===void 0&&(j===null?J=t.TEXTURE0+Y-1:J=j);let de=te[J];de===void 0&&(de={type:void 0,texture:void 0},te[J]=de),(de.type!==D||de.texture!==le)&&(j!==J&&(t.activeTexture(J),j=J),t.bindTexture(D,le||ae[D]),de.type=D,de.texture=le)}function vn(){const D=te[j];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function M(){try{t.texSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function O(){try{t.texSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function H(){try{t.compressedTexSubImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function q(){try{t.compressedTexSubImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function se(){try{t.texStorage2D(...arguments)}catch(D){je("WebGLState:",D)}}function ue(){try{t.texStorage3D(...arguments)}catch(D){je("WebGLState:",D)}}function K(){try{t.texImage2D(...arguments)}catch(D){je("WebGLState:",D)}}function Q(){try{t.texImage3D(...arguments)}catch(D){je("WebGLState:",D)}}function ce(D){return d[D]!==void 0?d[D]:t.getParameter(D)}function Ae(D,le){d[D]!==le&&(t.pixelStorei(D,le),d[D]=le)}function pe(D){He.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function fe(D){Fe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Fe.copy(D))}function be(D,le){let J=u.get(le);J===void 0&&(J=new WeakMap,u.set(le,J));let de=J.get(D);de===void 0&&(de=t.getUniformBlockIndex(le,D.name),J.set(D,de))}function Le(D,le){const de=u.get(le).get(D);l.get(le)!==de&&(t.uniformBlockBinding(le,de,D.__bindingPointIndex),l.set(le,de))}function Be(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},j=null,te={},f={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,x=null,E=null,w=null,C=null,_=new Xe(0,0,0),A=0,b=!1,P=null,N=null,X=null,$=null,B=null,He.set(0,0,t.canvas.width,t.canvas.height),Fe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:Ne,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:At,setBlending:Qe,setMaterial:Ke,setFlipSided:Dt,setCullFace:Ft,setLineWidth:Ht,setPolygonOffset:$t,setScissorTest:St,activeTexture:It,bindTexture:I,unbindTexture:vn,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:K,texImage3D:Q,pixelStorei:Ae,getParameter:ce,updateUBOMapping:be,uniformBlockBinding:Le,texStorage2D:se,texStorage3D:ue,texSubImage2D:M,texSubImage3D:O,compressedTexSubImage2D:H,compressedTexSubImage3D:q,scissor:pe,viewport:fe,reset:Be}}function BN(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ye,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,M){return m?new OffscreenCanvas(R,M):il("canvas")}function g(R,M,O){let H=1;const q=et(R);if((q.width>O||q.height>O)&&(H=O/Math.max(q.width,q.height)),H<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const se=Math.floor(H*q.width),ue=Math.floor(H*q.height);f===void 0&&(f=S(se,ue));const K=M?S(se,ue):f;return K.width=se,K.height=ue,K.getContext("2d").drawImage(R,0,0,se,ue),Ie("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+se+"x"+ue+")."),K}else return"data"in R&&Ie("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(R,M,O,H,q,se=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;H&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=M;if(M===t.RED&&(O===t.FLOAT&&(K=t.R32F),O===t.HALF_FLOAT&&(K=t.R16F),O===t.UNSIGNED_BYTE&&(K=t.R8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.R16_EXT),O===t.SHORT&&ue&&(K=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.R8UI),O===t.UNSIGNED_SHORT&&(K=t.R16UI),O===t.UNSIGNED_INT&&(K=t.R32UI),O===t.BYTE&&(K=t.R8I),O===t.SHORT&&(K=t.R16I),O===t.INT&&(K=t.R32I)),M===t.RG&&(O===t.FLOAT&&(K=t.RG32F),O===t.HALF_FLOAT&&(K=t.RG16F),O===t.UNSIGNED_BYTE&&(K=t.RG8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RG16_EXT),O===t.SHORT&&ue&&(K=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RG8UI),O===t.UNSIGNED_SHORT&&(K=t.RG16UI),O===t.UNSIGNED_INT&&(K=t.RG32UI),O===t.BYTE&&(K=t.RG8I),O===t.SHORT&&(K=t.RG16I),O===t.INT&&(K=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGB8UI),O===t.UNSIGNED_SHORT&&(K=t.RGB16UI),O===t.UNSIGNED_INT&&(K=t.RGB32UI),O===t.BYTE&&(K=t.RGB8I),O===t.SHORT&&(K=t.RGB16I),O===t.INT&&(K=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),O===t.UNSIGNED_INT&&(K=t.RGBA32UI),O===t.BYTE&&(K=t.RGBA8I),O===t.SHORT&&(K=t.RGBA16I),O===t.INT&&(K=t.RGBA32I)),M===t.RGB&&(O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGB16_EXT),O===t.SHORT&&ue&&(K=ue.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),M===t.RGBA){const Q=se?hc:qe.getTransfer(q);O===t.FLOAT&&(K=t.RGBA32F),O===t.HALF_FLOAT&&(K=t.RGBA16F),O===t.UNSIGNED_BYTE&&(K=Q===tt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ue&&(K=ue.RGBA16_EXT),O===t.SHORT&&ue&&(K=ue.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function E(R,M){let O;return R?M===null||M===Ci||M===el?O=t.DEPTH24_STENCIL8:M===si?O=t.DEPTH32F_STENCIL8:M===Qa&&(O=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ci||M===el?O=t.DEPTH_COMPONENT24:M===si?O=t.DEPTH_COMPONENT32F:M===Qa&&(O=t.DEPTH_COMPONENT16),O}function w(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==ln?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function _(R){const M=R.target;M.removeEventListener("dispose",_),P(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const O=R.source,H=p.get(O);if(H){const q=H[M.__cacheKey];q.usedTimes--,q.usedTimes===0&&b(R),Object.keys(H).length===0&&p.delete(O)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const O=R.source,H=p.get(O);delete H[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(M.__webglFramebuffer[H]))for(let q=0;q<M.__webglFramebuffer[H].length;q++)t.deleteFramebuffer(M.__webglFramebuffer[H][q]);else t.deleteFramebuffer(M.__webglFramebuffer[H]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[H])}else{if(Array.isArray(M.__webglFramebuffer))for(let H=0;H<M.__webglFramebuffer.length;H++)t.deleteFramebuffer(M.__webglFramebuffer[H]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let H=0;H<M.__webglColorRenderbuffer.length;H++)M.__webglColorRenderbuffer[H]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[H]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=R.textures;for(let H=0,q=O.length;H<q;H++){const se=i.get(O[H]);se.__webglTexture&&(t.deleteTexture(se.__webglTexture),o.memory.textures--),i.remove(O[H])}i.remove(R)}let N=0;function X(){N=0}function $(){return N}function B(R){N=R}function Y(){const R=N;return R>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),N+=1,R}function k(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const O=i.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&O.__version!==R.version){const H=R.image;if(H===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(O,R,M);return}}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function W(R,M){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Ne(O,R,M);return}else R.isExternalTexture&&(O.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function j(R,M){const O=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&O.__version!==R.version){Ne(O,R,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function te(R,M){const O=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&O.__version!==R.version){Oe(O,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const re={[Nh]:t.REPEAT,[Vi]:t.CLAMP_TO_EDGE,[Uh]:t.MIRRORED_REPEAT},ze={[kt]:t.NEAREST,[yP]:t.NEAREST_MIPMAP_NEAREST,[Vl]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[If]:t.LINEAR_MIPMAP_NEAREST,[ts]:t.LINEAR_MIPMAP_LINEAR},He={[EP]:t.NEVER,[RP]:t.ALWAYS,[TP]:t.LESS,[tg]:t.LEQUAL,[wP]:t.EQUAL,[ng]:t.GEQUAL,[AP]:t.GREATER,[CP]:t.NOTEQUAL};function Fe(R,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ln||M.magFilter===If||M.magFilter===Vl||M.magFilter===ts||M.minFilter===ln||M.minFilter===If||M.minFilter===Vl||M.minFilter===ts)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,re[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,re[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,re[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ze[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ze[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,He[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==Vl&&M.minFilter!==ts||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Z(R,M){let O=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const H=M.source;let q=p.get(H);q===void 0&&(q={},p.set(H,q));const se=k(M);if(se!==R.__cacheKey){q[se]===void 0&&(q[se]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),q[se].usedTimes++;const ue=q[R.__cacheKey];ue!==void 0&&(q[R.__cacheKey].usedTimes--,ue.usedTimes===0&&b(M)),R.__cacheKey=se,R.__webglTexture=q[se].texture}return O}function ae(R,M,O){return Math.floor(Math.floor(R/O)/M)}function ie(R,M,O,H){const se=R.updateRanges;if(se.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,O,H,M.data);else{se.sort((Ae,pe)=>Ae.start-pe.start);let ue=0;for(let Ae=1;Ae<se.length;Ae++){const pe=se[ue],fe=se[Ae],be=pe.start+pe.count,Le=ae(fe.start,M.width,4),Be=ae(pe.start,M.width,4);fe.start<=be+1&&Le===Be&&ae(fe.start+fe.count-1,M.width,4)===Le?pe.count=Math.max(pe.count,fe.start+fe.count-pe.start):(++ue,se[ue]=fe)}se.length=ue+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ae=0,pe=se.length;Ae<pe;Ae++){const fe=se[Ae],be=Math.floor(fe.start/4),Le=Math.ceil(fe.count/4),Be=be%M.width,D=Math.floor(be/M.width),le=Le,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Be),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Be,D,le,J,O,H,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function Ne(R,M,O){let H=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(H=t.TEXTURE_3D);const q=Z(R,M),se=M.source;n.bindTexture(H,R.__webglTexture,t.TEXTURE0+O);const ue=i.get(se);if(se.version!==ue.__version||q===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=qe.getPrimaries(qe.workingColorSpace),de=M.colorSpace===gr?null:qe.getPrimaries(M.colorSpace),_e=M.colorSpace===gr||J===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=g(M.image,!1,r.maxTextureSize);Q=vn(M,Q);const ce=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let pe=x(M.internalFormat,ce,Ae,M.normalized,M.colorSpace,M.isVideoTexture);Fe(H,M);let fe;const be=M.mipmaps,Le=M.isVideoTexture!==!0,Be=ue.__version===void 0||q===!0,D=se.dataReady,le=w(M,Q);if(M.isDepthTexture)pe=E(M.format===ns,M.type),Be&&(Le?n.texStorage2D(t.TEXTURE_2D,1,pe,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,pe,Q.width,Q.height,0,ce,Ae,null));else if(M.isDataTexture)if(be.length>0){Le&&Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,be[0].width,be[0].height);for(let J=0,de=be.length;J<de;J++)fe=be[J],Le?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,ce,Ae,fe.data);M.generateMipmaps=!1}else Le?(Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height),D&&ie(M,Q,ce,Ae)):n.texImage2D(t.TEXTURE_2D,0,pe,Q.width,Q.height,0,ce,Ae,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Le&&Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,be[0].width,be[0].height,Q.depth);for(let J=0,de=be.length;J<de;J++)if(fe=be[J],M.format!==oi)if(ce!==null)if(Le){if(D)if(M.layerUpdates.size>0){const _e=B_(fe.width,fe.height,M.format,M.type);for(const ee of M.layerUpdates){const we=fe.data.subarray(ee*_e/fe.data.BYTES_PER_ELEMENT,(ee+1)*_e/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ee,fe.width,fe.height,1,ce,we)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,ce,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Le?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,ce,Ae,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,pe,fe.width,fe.height,Q.depth,0,ce,Ae,fe.data)}else{Le&&Be&&n.texStorage2D(t.TEXTURE_2D,le,pe,be[0].width,be[0].height);for(let J=0,de=be.length;J<de;J++)fe=be[J],M.format!==oi?ce!==null?Le?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Ae,fe.data):n.texImage2D(t.TEXTURE_2D,J,pe,fe.width,fe.height,0,ce,Ae,fe.data)}else if(M.isDataArrayTexture)if(Le){if(Be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,pe,Q.width,Q.height,Q.depth),D)if(M.layerUpdates.size>0){const J=B_(Q.width,Q.height,M.format,M.type);for(const de of M.layerUpdates){const _e=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ce,Ae,_e)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ae,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,ce,Ae,Q.data);else if(M.isData3DTexture)Le?(Be&&n.texStorage3D(t.TEXTURE_3D,le,pe,Q.width,Q.height,Q.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ae,Q.data)):n.texImage3D(t.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,ce,Ae,Q.data);else if(M.isFramebufferTexture){if(Be)if(Le)n.texStorage2D(t.TEXTURE_2D,le,pe,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let _e=0;_e<le;_e++)n.texImage2D(t.TEXTURE_2D,_e,pe,J,de,0,ce,Ae,null),J>>=1,de>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(M),J.onpaint=de=>{const _e=de.changedElements;for(const ee of d)_e.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const _e=t.RGBA,ee=t.RGBA,we=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,_e,ee,we,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(be.length>0){if(Le&&Be){const J=et(be[0]);n.texStorage2D(t.TEXTURE_2D,le,pe,J.width,J.height)}for(let J=0,de=be.length;J<de;J++)fe=be[J],Le?D&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ce,Ae,fe):n.texImage2D(t.TEXTURE_2D,J,pe,ce,Ae,fe);M.generateMipmaps=!1}else if(Le){if(Be){const J=et(Q);n.texStorage2D(t.TEXTURE_2D,le,pe,J.width,J.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ae,Q)}else n.texImage2D(t.TEXTURE_2D,0,pe,ce,Ae,Q);h(M)&&v(H),ue.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Oe(R,M,O){if(M.image.length!==6)return;const H=Z(R,M),q=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+O);const se=i.get(q);if(q.version!==se.__version||H===!0){n.activeTexture(t.TEXTURE0+O);const ue=qe.getPrimaries(qe.workingColorSpace),K=M.colorSpace===gr?null:qe.getPrimaries(M.colorSpace),Q=M.colorSpace===gr||ue===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ae=M.image[0]&&M.image[0].isDataTexture,pe=[];for(let ee=0;ee<6;ee++)!ce&&!Ae?pe[ee]=g(M.image[ee],!0,r.maxCubemapSize):pe[ee]=Ae?M.image[ee].image:M.image[ee],pe[ee]=vn(M,pe[ee]);const fe=pe[0],be=s.convert(M.format,M.colorSpace),Le=s.convert(M.type),Be=x(M.internalFormat,be,Le,M.normalized,M.colorSpace),D=M.isVideoTexture!==!0,le=se.__version===void 0||H===!0,J=q.dataReady;let de=w(M,fe);Fe(t.TEXTURE_CUBE_MAP,M);let _e;if(ce){D&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,fe.width,fe.height);for(let ee=0;ee<6;ee++){_e=pe[ee].mipmaps;for(let we=0;we<_e.length;we++){const Ee=_e[we];M.format!==oi?be!==null?D?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Ee.width,Ee.height,be,Ee.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Be,Ee.width,Ee.height,0,Ee.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,0,0,Ee.width,Ee.height,be,Le,Ee.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we,Be,Ee.width,Ee.height,0,be,Le,Ee.data)}}}else{if(_e=M.mipmaps,D&&le){_e.length>0&&de++;const ee=et(pe[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ae){D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,pe[ee].width,pe[ee].height,be,Le,pe[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,pe[ee].width,pe[ee].height,0,be,Le,pe[ee].data);for(let we=0;we<_e.length;we++){const Mt=_e[we].image[ee].image;D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,Mt.width,Mt.height,be,Le,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Be,Mt.width,Mt.height,0,be,Le,Mt.data)}}else{D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be,Le,pe[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,be,Le,pe[ee]);for(let we=0;we<_e.length;we++){const Ee=_e[we];D?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,0,0,be,Le,Ee.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,we+1,Be,be,Le,Ee.image[ee])}}}h(M)&&v(t.TEXTURE_CUBE_MAP),se.__version=q.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Pe(R,M,O,H,q,se){const ue=s.convert(O.format,O.colorSpace),K=s.convert(O.type),Q=x(O.internalFormat,ue,K,O.normalized,O.colorSpace),ce=i.get(M),Ae=i.get(O);if(Ae.__renderTarget=M,!ce.__hasExternalTextures){const pe=Math.max(1,M.width>>se),fe=Math.max(1,M.height>>se);q===t.TEXTURE_3D||q===t.TEXTURE_2D_ARRAY?n.texImage3D(q,se,Q,pe,fe,M.depth,0,ue,K,null):n.texImage2D(q,se,Q,pe,fe,0,ue,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,q,Ae.__webglTexture,0,St(M)):(q===t.TEXTURE_2D||q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,q,Ae.__webglTexture,se),n.bindFramebuffer(t.FRAMEBUFFER,null)}function At(R,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const H=M.depthTexture,q=H&&H.isDepthTexture?H.type:null,se=E(M.stencilBuffer,q),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;It(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(M),se,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(M),se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,se,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const H=M.textures;for(let q=0;q<H.length;q++){const se=H[q],ue=s.convert(se.format,se.colorSpace),K=s.convert(se.type),Q=x(se.internalFormat,ue,K,se.normalized,se.colorSpace);It(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(M),Q,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(R,M,O){const H=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const q=i.get(M.depthTexture);if(q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),H){if(q.__webglInit===void 0&&(q.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),q.__webglTexture===void 0){q.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,M.depthTexture);const ce=s.convert(M.depthTexture.format),Ae=s.convert(M.depthTexture.type);let pe;M.depthTexture.format===Ji?pe=t.DEPTH_COMPONENT24:M.depthTexture.format===ns&&(pe=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,pe,M.width,M.height,0,ce,Ae,null)}}else L(M.depthTexture,0);const se=q.__webglTexture,ue=St(M),K=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,Q=M.depthTexture.format===ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ji)It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,K,se,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,K,se,0);else if(M.depthTexture.format===ns)It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,K,se,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){const M=i.get(R),O=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const H=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),H){const q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,H.removeEventListener("dispose",q)};H.addEventListener("dispose",q),M.__depthDisposeCallback=q}M.__boundDepthTexture=H}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(O)for(let H=0;H<6;H++)$e(M.__webglFramebuffer[H],R,H);else{const H=R.texture.mipmaps;H&&H.length>0?$e(M.__webglFramebuffer[0],R,0):$e(M.__webglFramebuffer,R,0)}else if(O){M.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[H]),M.__webglDepthbuffer[H]===void 0)M.__webglDepthbuffer[H]=t.createRenderbuffer(),At(M.__webglDepthbuffer[H],R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,se)}}else{const H=R.texture.mipmaps;if(H&&H.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),At(M.__webglDepthbuffer,R,!1);else{const q=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,se),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,se)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,M,O){const H=i.get(R);M!==void 0&&Pe(H.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&rt(R)}function Ke(R){const M=R.texture,O=i.get(R),H=i.get(M);R.addEventListener("dispose",_);const q=R.textures,se=R.isWebGLCubeRenderTarget===!0,ue=q.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=M.version,o.memory.textures++),se){O.__webglFramebuffer=[];for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[K]=[];for(let Q=0;Q<M.mipmaps.length;Q++)O.__webglFramebuffer[K][Q]=t.createFramebuffer()}else O.__webglFramebuffer[K]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let K=0;K<M.mipmaps.length;K++)O.__webglFramebuffer[K]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let K=0,Q=q.length;K<Q;K++){const ce=i.get(q[K]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&It(R)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let K=0;K<q.length;K++){const Q=q[K];O.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[K]);const ce=s.convert(Q.format,Q.colorSpace),Ae=s.convert(Q.type),pe=x(Q.internalFormat,ce,Ae,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),fe=St(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,pe,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,O.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),At(O.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(se){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),Fe(t.TEXTURE_CUBE_MAP,M);for(let K=0;K<6;K++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Pe(O.__webglFramebuffer[K][Q],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Pe(O.__webglFramebuffer[K],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);h(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let K=0,Q=q.length;K<Q;K++){const ce=q[K],Ae=i.get(ce);let pe=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,Ae.__webglTexture),Fe(pe,ce),Pe(O.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+K,pe,0),h(ce)&&v(pe)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,H.__webglTexture),Fe(K,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Pe(O.__webglFramebuffer[Q],R,M,t.COLOR_ATTACHMENT0,K,Q);else Pe(O.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,K,0);h(M)&&v(K),n.unbindTexture()}R.depthBuffer&&rt(R)}function Dt(R){const M=R.textures;for(let O=0,H=M.length;O<H;O++){const q=M[O];if(h(q)){const se=y(R),ue=i.get(q).__webglTexture;n.bindTexture(se,ue),v(se),n.unbindTexture()}}}const Ft=[],Ht=[];function $t(R){if(R.samples>0){if(It(R)===!1){const M=R.textures,O=R.width,H=R.height;let q=t.COLOR_BUFFER_BIT;const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),K=M.length>1;if(K)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(q|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(q|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Ae=i.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ae,0)}t.blitFramebuffer(0,0,O,H,0,0,O,H,q,t.NEAREST),l===!0&&(Ft.length=0,Ht.length=0,Ft.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ft.push(se),Ht.push(se),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Ae=i.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function St(R){return Math.min(r.maxSamples,R.samples)}function It(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function I(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function vn(R,M){const O=R.colorSpace,H=R.format,q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||O!==dc&&O!==gr&&(qe.getTransfer(O)===tt?(H!==oi||q!==Pn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",O)),M}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=X,this.getTextureUnits=$,this.setTextureUnits=B,this.setTexture2D=L,this.setTexture2DArray=W,this.setTexture3D=j,this.setTextureCube=te,this.rebindTextures=Qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Pe,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function kN(t,e){function n(i,r=gr){let s;const o=qe.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===Zm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jm)return t.UNSIGNED_SHORT_5_5_5_1;if(i===aE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===lE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===sE)return t.BYTE;if(i===oE)return t.SHORT;if(i===Qa)return t.UNSIGNED_SHORT;if(i===Km)return t.INT;if(i===Ci)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===uE)return t.ALPHA;if(i===cE)return t.RGB;if(i===oi)return t.RGBA;if(i===Ji)return t.DEPTH_COMPONENT;if(i===ns)return t.DEPTH_STENCIL;if(i===kc)return t.RED;if(i===Jm)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===Qm)return t.RG_INTEGER;if(i===eg)return t.RGBA_INTEGER;if(i===Cu||i===Ru||i===bu||i===Pu)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Cu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Pu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Cu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ru)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Pu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fh||i===Oh||i===Bh||i===kh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Fh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Oh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Bh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Vh||i===zh||i===Hh||i===Gh||i===Wh||i===cc||i===Xh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Vh||i===zh)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Hh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Gh)return s.COMPRESSED_R11_EAC;if(i===Wh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===cc)return s.COMPRESSED_RG11_EAC;if(i===Xh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Yh||i===$h||i===qh||i===Kh||i===Zh||i===jh||i===Jh||i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Yh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$h)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===qh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Kh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Jh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Qh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ep)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===tp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===np)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ip)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===rp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===sp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===op||i===ap||i===lp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===op)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ap)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===up||i===cp||i===fc||i===fp)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===up)return s.COMPRESSED_RED_RGTC1_EXT;if(i===cp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fp)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===el?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HN{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new yE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ri({vertexShader:VN,fragmentShader:zN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pt(new Vc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class GN extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,m=null;const S=typeof XRWebGLBinding<"u",g=new HN,h={},v=n.getContextAttributes();let y=null,x=null;const E=[],w=[],C=new ye;let _=null;const A=new bn;A.viewport=new vt;const b=new bn;b.viewport=new vt;const P=[A,b],N=new Q3;let X=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ae=E[Z];return ae===void 0&&(ae=new zf,E[Z]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(Z){let ae=E[Z];return ae===void 0&&(ae=new zf,E[Z]=ae),ae.getGripSpace()},this.getHand=function(Z){let ae=E[Z];return ae===void 0&&(ae=new zf,E[Z]=ae),ae.getHandSpace()};function B(Z){const ae=w.indexOf(Z.inputSource);if(ae===-1)return;const ie=E[ae];ie!==void 0&&(ie.update(Z.inputSource,Z.frame,u||o),ie.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",k);for(let Z=0;Z<E.length;Z++){const ae=w[Z];ae!==null&&(w[Z]=null,E[Z].disconnect(ae))}X=null,$=null,g.reset();for(const Z in h)delete h[Z];e.setRenderTarget(y),p=null,f=null,d=null,r=null,x=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){s=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Z){u=Z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(Z){if(r=Z,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let ie=null,Ne=null,Oe=null;v.depth&&(Oe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=v.stencil?ns:Ji,Ne=v.stencil?el:Ci);const Pe={colorFormat:n.RGBA8,depthFormat:Oe,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Pe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),x=new Ai(f.textureWidth,f.textureHeight,{format:oi,type:Pn,depthTexture:new Ao(f.textureWidth,f.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ie={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Ai(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Fe.setContext(r),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(Z){for(let ae=0;ae<Z.removed.length;ae++){const ie=Z.removed[ae],Ne=w.indexOf(ie);Ne>=0&&(w[Ne]=null,E[Ne].disconnect(ie))}for(let ae=0;ae<Z.added.length;ae++){const ie=Z.added[ae];let Ne=w.indexOf(ie);if(Ne===-1){for(let Pe=0;Pe<E.length;Pe++)if(Pe>=w.length){w.push(ie),Ne=Pe;break}else if(w[Pe]===null){w[Pe]=ie,Ne=Pe;break}if(Ne===-1)break}const Oe=E[Ne];Oe&&Oe.connect(ie)}}const L=new F,W=new F;function j(Z,ae,ie){L.setFromMatrixPosition(ae.matrixWorld),W.setFromMatrixPosition(ie.matrixWorld);const Ne=L.distanceTo(W),Oe=ae.projectionMatrix.elements,Pe=ie.projectionMatrix.elements,At=Oe[14]/(Oe[10]-1),$e=Oe[14]/(Oe[10]+1),rt=(Oe[9]+1)/Oe[5],Qe=(Oe[9]-1)/Oe[5],Ke=(Oe[8]-1)/Oe[0],Dt=(Pe[8]+1)/Pe[0],Ft=At*Ke,Ht=At*Dt,$t=Ne/(-Ke+Dt),St=$t*-Ke;if(ae.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(St),Z.translateZ($t),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Oe[10]===-1)Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const It=At+$t,I=$e+$t,vn=Ft-St,et=Ht+(Ne-St),R=rt*$e/I*It,M=Qe*$e/I*It;Z.projectionMatrix.makePerspective(vn,et,R,M,It,I),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function te(Z,ae){ae===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ae.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(r===null)return;let ae=Z.near,ie=Z.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(ie=g.depthFar)),N.near=b.near=A.near=ae,N.far=b.far=A.far=ie,(X!==N.near||$!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),X=N.near,$=N.far),N.layers.mask=Z.layers.mask|6,A.layers.mask=N.layers.mask&-5,b.layers.mask=N.layers.mask&-3;const Ne=Z.parent,Oe=N.cameras;te(N,Ne);for(let Pe=0;Pe<Oe.length;Pe++)te(Oe[Pe],Ne);Oe.length===2?j(N,A,b):N.projectionMatrix.copy(A.projectionMatrix),re(Z,N,Ne)};function re(Z,ae,ie){ie===null?Z.matrix.copy(ae.matrixWorld):(Z.matrix.copy(ie.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ae.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ae.projectionMatrix),Z.projectionMatrixInverse.copy(ae.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=dp*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Z){l=Z,f!==null&&(f.fixedFoveation=Z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(Z){return h[Z]};let ze=null;function He(Z,ae){if(c=ae.getViewerPose(u||o),m=ae,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let Ne=!1;ie.length!==N.cameras.length&&(N.cameras.length=0,Ne=!0);for(let $e=0;$e<ie.length;$e++){const rt=ie[$e];let Qe=null;if(p!==null)Qe=p.getViewport(rt);else{const Dt=d.getViewSubImage(f,rt);Qe=Dt.viewport,$e===0&&(e.setRenderTargetTextures(x,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(x))}let Ke=P[$e];Ke===void 0&&(Ke=new bn,Ke.layers.enable($e),Ke.viewport=new vt,P[$e]=Ke),Ke.matrix.fromArray(rt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(rt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),$e===0&&(N.matrix.copy(Ke.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ne===!0&&N.cameras.push(Ke)}const Oe=r.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const $e=d.getDepthInformation(ie[0]);$e&&$e.isValid&&$e.texture&&g.init($e,r.renderState)}if(Oe&&Oe.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let $e=0;$e<ie.length;$e++){const rt=ie[$e].camera;if(rt){let Qe=h[rt];Qe||(Qe=new yE,h[rt]=Qe);const Ke=d.getCameraImage(rt);Qe.sourceTexture=Ke}}}}for(let ie=0;ie<E.length;ie++){const Ne=w[ie],Oe=E[ie];Ne!==null&&Oe!==void 0&&Oe.update(Ne,ae,u||o)}ze&&ze(Z,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),m=null}const Fe=new NE;Fe.setAnimationLoop(He),this.setAnimationLoop=function(Z){ze=Z},this.dispose=function(){}}}const WN=new ct,zE=new Ue;zE.set(-1,0,0,0,1,0,0,0,1);function XN(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,PE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,y,x){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,x)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),S(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,y):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===pn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===pn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,x=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(WN.makeRotationFromEuler(x)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(zE),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===pn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function YN(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,E){const w=E.program;i.uniformBlockBinding(x,w)}function u(x,E){let w=r[x.id];w===void 0&&(g(x),w=c(x),r[x.id]=w,x.addEventListener("dispose",v));const C=E.program;i.updateUBOMapping(x,C);const _=e.render.frame;s[x.id]!==_&&(f(x),s[x.id]=_)}function c(x){const E=d();x.__bindingPointIndex=E;const w=t.createBuffer(),C=x.__size,_=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,C,_),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,E,w),w}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){const E=r[x.id],w=x.uniforms,C=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,E);for(let _=0,A=w.length;_<A;_++){const b=w[_];if(Array.isArray(b))for(let P=0,N=b.length;P<N;P++)p(b[P],_,P,C);else p(b,_,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(x,E,w,C){if(S(x,E,w,C)===!0){const _=x.__offset,A=x.value;if(Array.isArray(A)){let b=0;for(let P=0;P<A.length;P++){const N=A[P],X=h(N);m(N,x.__data,b),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(b+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,_,x.__data)}}function m(x,E,w){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,w)}function S(x,E,w,C){const _=x.value,A=E+"_"+w;if(C[A]===void 0)return typeof _=="number"||typeof _=="boolean"?C[A]=_:ArrayBuffer.isView(_)?C[A]=_.slice():C[A]=_.clone(),!0;{const b=C[A];if(typeof _=="number"||typeof _=="boolean"){if(b!==_)return C[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(b.equals(_)===!1)return b.copy(_),!0}}return!1}function g(x){const E=x.uniforms;let w=0;const C=16;for(let A=0,b=E.length;A<b;A++){const P=Array.isArray(E[A])?E[A]:[E[A]];for(let N=0,X=P.length;N<X;N++){const $=P[N],B=Array.isArray($.value)?$.value:[$.value];for(let Y=0,k=B.length;Y<k;Y++){const L=B[Y],W=h(L),j=w%C,te=j%W.boundary,re=j+te;w+=te,re!==0&&C-re<W.storage&&(w+=C-re),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=w,w+=W.storage}}}const _=w%C;return _>0&&(w+=C-_),x.__size=w,x.__cache={},this}function h(x){const E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",x),E}function v(x){const E=x.target;E.removeEventListener("dispose",v);const w=o.indexOf(E.__bindingPointIndex);o.splice(w,1),t.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function y(){for(const x in r)t.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:y}}const $N=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function qN(){return gi===null&&(gi=new rg($N,16,16,hs,ji),gi.name="DFG_LUT",gi.minFilter=ln,gi.magFilter=ln,gi.wrapS=Vi,gi.wrapT=Vi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class KN{constructor(e={}){const{canvas:n=PP(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const S=p,g=new Set([eg,Qm,Jm]),h=new Set([Pn,Ci,Qa,el,Zm,jm]),v=new Uint32Array(4),y=new Int32Array(4),x=new F;let E=null,w=null;const C=[],_=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,N=null,X=null,$=null,B=null;this._outputColorSpace=Rn;let Y=0,k=0,L=null,W=-1,j=null;const te=new vt,re=new vt;let ze=null;const He=new Xe(0);let Fe=0,Z=n.width,ae=n.height,ie=1,Ne=null,Oe=null;const Pe=new vt(0,0,Z,ae),At=new vt(0,0,Z,ae);let $e=!1;const rt=new sg;let Qe=!1,Ke=!1;const Dt=new ct,Ft=new F,Ht=new vt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function It(){return L===null?ie:1}let I=i;function vn(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ym}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",fi,!1),I===null){const U="webgl2";if(I=vn(U,T),I===null)throw vn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(T){throw je("WebGLRenderer: "+T.message),T}let et,R,M,O,H,q,se,ue,K,Q,ce,Ae,pe,fe,be,Le,Be,D,le,J,de,_e,ee;function we(){et=new qD(I),et.init(),de=new kN(I,et),R=new VD(I,et,e,de),M=new ON(I,et),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),X=I.createFramebuffer(),$=I.createFramebuffer(),B=I.createFramebuffer(),O=new jD(I),H=new EN,q=new BN(I,et,M,H,R,de,O),se=new $D(b),ue=new t2(I),_e=new BD(I,ue),K=new KD(I,ue,O,_e),Q=new QD(I,K,ue,_e,O),D=new JD(I,R,q),be=new zD(H),ce=new MN(b,se,et,R,_e,be),Ae=new XN(b,H),pe=new wN,fe=new LN(et),Be=new OD(b,se,M,Q,m,l),Le=new FN(b,Q,R),ee=new YN(I,O,R,M),le=new kD(I,et,O),J=new ZD(I,et,O),O.programs=ce.programs,b.capabilities=R,b.extensions=et,b.properties=H,b.renderLists=pe,b.shadowMap=Le,b.state=M,b.info=O}we(),S!==Pn&&(A=new tI(S,n.width,n.height,a,r,s));const Ee=new GN(b,I);this.xr=Ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=et.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=et.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(Z,ae,!1))},this.getSize=function(T){return T.set(Z,ae)},this.setSize=function(T,U,G=!0){if(Ee.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=T,ae=U,n.width=Math.floor(T*ie),n.height=Math.floor(U*ie),G===!0&&(n.style.width=T+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Z*ie,ae*ie).floor()},this.setDrawingBufferSize=function(T,U,G){Z=T,ae=U,ie=G,n.width=Math.floor(T*G),n.height=Math.floor(U*G),this.setViewport(0,0,T,U)},this.setEffects=function(T){if(S===Pn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let U=0;U<T.length;U++)if(T[U].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(te)},this.getViewport=function(T){return T.copy(Pe)},this.setViewport=function(T,U,G,V){T.isVector4?Pe.set(T.x,T.y,T.z,T.w):Pe.set(T,U,G,V),M.viewport(te.copy(Pe).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(At)},this.setScissor=function(T,U,G,V){T.isVector4?At.set(T.x,T.y,T.z,T.w):At.set(T,U,G,V),M.scissor(re.copy(At).multiplyScalar(ie).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(T){M.setScissorTest($e=T)},this.setOpaqueSort=function(T){Ne=T},this.setTransparentSort=function(T){Oe=T},this.getClearColor=function(T){return T.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(T=!0,U=!0,G=!0){let V=0;if(T){let z=!1;if(L!==null){const ve=L.texture.format;z=g.has(ve)}if(z){const ve=L.texture.type,Se=h.has(ve),ge=Be.getClearColor(),Te=Be.getClearAlpha(),Ce=ge.r,ke=ge.g,Ge=ge.b;Se?(v[0]=Ce,v[1]=ke,v[2]=Ge,v[3]=Te,I.clearBufferuiv(I.COLOR,0,v)):(y[0]=Ce,y[1]=ke,y[2]=Ge,y[3]=Te,I.clearBufferiv(I.COLOR,0,y))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",fi,!1),Be.dispose(),pe.dispose(),fe.dispose(),H.dispose(),se.dispose(),Q.dispose(),_e.dispose(),ee.dispose(),ce.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",vg),Ee.removeEventListener("sessionend",_g),Or.stop()};function Mt(T){T.preventDefault(),r_("WebGLRenderer: Context Lost."),P=!0}function at(){r_("WebGLRenderer: Context Restored."),P=!1;const T=O.autoReset,U=Le.enabled,G=Le.autoUpdate,V=Le.needsUpdate,z=Le.type;we(),O.autoReset=T,Le.enabled=U,Le.autoUpdate=G,Le.needsUpdate=V,Le.type=z}function fi(T){je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function di(T){const U=T.target;U.removeEventListener("dispose",di),GE(U)}function GE(T){WE(T),H.remove(T)}function WE(T){const U=H.get(T).programs;U!==void 0&&(U.forEach(function(G){ce.releaseProgram(G)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,G,V,z,ve){U===null&&(U=$t);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,ge=$E(T,U,G,V,z);M.setMaterial(V,Se);let Te=G.index,Ce=1;if(V.wireframe===!0){if(Te=K.getWireframeAttribute(G),Te===void 0)return;Ce=2}const ke=G.drawRange,Ge=G.attributes.position;let Re=ke.start*Ce,it=(ke.start+ke.count)*Ce;ve!==null&&(Re=Math.max(Re,ve.start*Ce),it=Math.min(it,(ve.start+ve.count)*Ce)),Te!==null?(Re=Math.max(Re,0),it=Math.min(it,Te.count)):Ge!=null&&(Re=Math.max(Re,0),it=Math.min(it,Ge.count));const Ct=it-Re;if(Ct<0||Ct===1/0)return;_e.setup(z,V,ge,G,Te);let Et,st=le;if(Te!==null&&(Et=ue.get(Te),st=J,st.setIndex(Et)),z.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*It()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(z.isLine){let Qt=V.linewidth;Qt===void 0&&(Qt=1),M.setLineWidth(Qt*It()),z.isLineSegments?st.setMode(I.LINES):z.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else z.isPoints?st.setMode(I.POINTS):z.isSprite&&st.setMode(I.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Qt=z._multiDrawStarts,xe=z._multiDrawCounts,Tn=z._multiDrawCount,Ze=Te?ue.get(Te).bytesPerElement:1,Bn=H.get(V).currentProgram.getUniforms();for(let hi=0;hi<Tn;hi++)Bn.setValue(I,"_gl_DrawID",hi),st.render(Qt[hi]/Ze,xe[hi])}else if(z.isInstancedMesh)st.renderInstances(Re,Ct,z.count);else if(G.isInstancedBufferGeometry){const Qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,Qt);st.renderInstances(Re,Ct,xe)}else st.render(Re,Ct)};function gg(T,U,G){T.transparent===!0&&T.side===Oi&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,_l(T,U,G),T.side=Dr,T.needsUpdate=!0,_l(T,U,G),T.side=Oi):_l(T,U,G)}this.compile=function(T,U,G=null){G===null&&(G=T),w=fe.get(G),w.init(U),_.push(w),G.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),T!==G&&T.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights();const V=new Set;return T.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ve=z.material;if(ve)if(Array.isArray(ve))for(let Se=0;Se<ve.length;Se++){const ge=ve[Se];gg(ge,G,z),V.add(ge)}else gg(ve,G,z),V.add(ve)}),w=_.pop(),V},this.compileAsync=function(T,U,G=null){const V=this.compile(T,U,G);return new Promise(z=>{function ve(){if(V.forEach(function(Se){H.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){z(T);return}setTimeout(ve,10)}et.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Gc=null;function XE(T){Gc&&Gc(T)}function vg(){Or.stop()}function _g(){Or.start()}const Or=new NE;Or.setAnimationLoop(XE),typeof self<"u"&&Or.setContext(self),this.setAnimationLoop=function(T){Gc=T,Ee.setAnimationLoop(T),T===null?Or.stop():Or.start()},Ee.addEventListener("sessionstart",vg),Ee.addEventListener("sessionend",_g),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(T,U);const G=Ee.enabled===!0&&Ee.isPresenting===!0,V=A!==null&&(L===null||G)&&A.begin(b,L);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(U),U=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,U,L),w=fe.get(T,_.length),w.init(U),w.state.textureUnits=q.getTextureUnits(),_.push(w),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Dt,yi,U.reversedDepth),Ke=this.localClippingEnabled,Qe=be.init(this.clippingPlanes,Ke),E=pe.get(T,C.length),E.init(),C.push(E),Ee.enabled===!0&&Ee.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Wc(Se,U,-1/0,b.sortObjects)}Wc(T,U,0,b.sortObjects),E.finish(),b.sortObjects===!0&&E.sort(Ne,Oe,U.reversedDepth),St=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,St&&Be.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&be.beginShadows();const z=w.state.shadowsArray;if(Le.render(z,T,U),Qe===!0&&be.endShadows(),(V&&A.hasRenderPass())===!1){const Se=E.opaque,ge=E.transmissive;if(w.setupLights(),U.isArrayCamera){const Te=U.cameras;if(ge.length>0)for(let Ce=0,ke=Te.length;Ce<ke;Ce++){const Ge=Te[Ce];yg(Se,ge,T,Ge)}St&&Be.render(T);for(let Ce=0,ke=Te.length;Ce<ke;Ce++){const Ge=Te[Ce];xg(E,T,Ge,Ge.viewport)}}else ge.length>0&&yg(Se,ge,T,U),St&&Be.render(T),xg(E,T,U)}L!==null&&k===0&&(q.updateMultisampleRenderTarget(L),q.updateRenderTargetMipmap(L)),V&&A.end(b),T.isScene===!0&&T.onAfterRender(b,T,U),_e.resetDefaultState(),W=-1,j=null,_.pop(),_.length>0?(w=_[_.length-1],q.setTextureUnits(w.state.textureUnits),Qe===!0&&be.setGlobalState(b.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?E=C[C.length-1]:E=null,N!==null&&N.renderEnd()};function Wc(T,U,G,V){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||rt.intersectsSprite(T)){V&&Ht.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Dt);const Se=Q.update(T),ge=T.material;ge.visible&&E.push(T,Se,ge,G,Ht.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||rt.intersectsObject(T))){const Se=Q.update(T),ge=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ht.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ht.copy(Se.boundingSphere.center)),Ht.applyMatrix4(T.matrixWorld).applyMatrix4(Dt)),Array.isArray(ge)){const Te=Se.groups;for(let Ce=0,ke=Te.length;Ce<ke;Ce++){const Ge=Te[Ce],Re=ge[Ge.materialIndex];Re&&Re.visible&&E.push(T,Se,Re,G,Ht.z,Ge)}}else ge.visible&&E.push(T,Se,ge,G,Ht.z,null)}}const ve=T.children;for(let Se=0,ge=ve.length;Se<ge;Se++)Wc(ve[Se],U,G,V)}function xg(T,U,G,V){const{opaque:z,transmissive:ve,transparent:Se}=T;w.setupLightsView(G),Qe===!0&&be.setGlobalState(b.clippingPlanes,G),V&&M.viewport(te.copy(V)),z.length>0&&vl(z,U,G),ve.length>0&&vl(ve,U,G),Se.length>0&&vl(Se,U,G),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function yg(T,U,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[V.id]===void 0){const Re=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[V.id]=new Ai(1,1,{generateMipmaps:!0,type:Re?ji:Pn,minFilter:ts,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const ve=w.state.transmissionRenderTarget[V.id],Se=V.viewport||te;ve.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const ge=b.getRenderTarget(),Te=b.getActiveCubeFace(),Ce=b.getActiveMipmapLevel();b.setRenderTarget(ve),b.getClearColor(He),Fe=b.getClearAlpha(),Fe<1&&b.setClearColor(16777215,.5),b.clear(),St&&Be.render(G);const ke=b.toneMapping;b.toneMapping=wi;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),w.setupLightsView(V),Qe===!0&&be.setGlobalState(b.clippingPlanes,V),vl(T,G,V),q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve),et.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let it=0,Ct=U.length;it<Ct;it++){const Et=U[it],{object:st,geometry:Qt,material:xe,group:Tn}=Et;if(xe.side===Oi&&st.layers.test(V.layers)){const Ze=xe.side;xe.side=pn,xe.needsUpdate=!0,Sg(st,G,V,Qt,xe,Tn),xe.side=Ze,xe.needsUpdate=!0,Re=!0}}Re===!0&&(q.updateMultisampleRenderTarget(ve),q.updateRenderTargetMipmap(ve))}b.setRenderTarget(ge,Te,Ce),b.setClearColor(He,Fe),Ge!==void 0&&(V.viewport=Ge),b.toneMapping=ke}function vl(T,U,G){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,ve=T.length;z<ve;z++){const Se=T[z],{object:ge,geometry:Te,group:Ce}=Se;let ke=Se.material;ke.allowOverride===!0&&V!==null&&(ke=V),ge.layers.test(G.layers)&&Sg(ge,U,G,Te,ke,Ce)}}function Sg(T,U,G,V,z,ve){T.onBeforeRender(b,U,G,V,z,ve),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),z.onBeforeRender(b,U,G,V,T,ve),z.transparent===!0&&z.side===Oi&&z.forceSinglePass===!1?(z.side=pn,z.needsUpdate=!0,b.renderBufferDirect(G,U,V,z,T,ve),z.side=Dr,z.needsUpdate=!0,b.renderBufferDirect(G,U,V,z,T,ve),z.side=Oi):b.renderBufferDirect(G,U,V,z,T,ve),T.onAfterRender(b,U,G,V,z,ve)}function _l(T,U,G){U.isScene!==!0&&(U=$t);const V=H.get(T),z=w.state.lights,ve=w.state.shadowsArray,Se=z.state.version,ge=ce.getParameters(T,z.state,ve,U,G,w.state.lightProbeGridArray),Te=ce.getProgramCacheKey(ge);let Ce=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const ke=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=se.get(T.envMap||V.environment,ke),V.envMapRotation=V.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",di),Ce=new Map,V.programs=Ce);let Ge=Ce.get(Te);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Se)return Eg(T,ge),Ge}else ge.uniforms=ce.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,G,ge),T.onBeforeCompile(ge,b),Ge=ce.acquireProgram(ge,Te),Ce.set(Te,Ge),V.uniforms=ge.uniforms;const Re=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=be.uniform),Eg(T,ge),V.needsLights=KE(T),V.lightsStateVersion=Se,V.needsLights&&(Re.ambientLightColor.value=z.state.ambient,Re.lightProbe.value=z.state.probe,Re.directionalLights.value=z.state.directional,Re.directionalLightShadows.value=z.state.directionalShadow,Re.spotLights.value=z.state.spot,Re.spotLightShadows.value=z.state.spotShadow,Re.rectAreaLights.value=z.state.rectArea,Re.ltc_1.value=z.state.rectAreaLTC1,Re.ltc_2.value=z.state.rectAreaLTC2,Re.pointLights.value=z.state.point,Re.pointLightShadows.value=z.state.pointShadow,Re.hemisphereLights.value=z.state.hemi,Re.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Re.spotLightMatrix.value=z.state.spotLightMatrix,Re.spotLightMap.value=z.state.spotLightMap,Re.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=w.state.lightProbeGridArray.length>0,V.currentProgram=Ge,V.uniformsList=null,Ge}function Mg(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=Lu.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Eg(T,U){const G=H.get(T);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function YE(T,U){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(U.matrixWorld);for(let G=0,V=T.length;G<V;G++){const z=T[G];if(z.texture!==null&&z.boundingBox.containsPoint(x))return z}return null}function $E(T,U,G,V,z){U.isScene!==!0&&(U=$t),q.resetTextureUnits();const ve=U.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,ge=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qe.workingColorSpace,Te=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Ce=se.get(V.envMap||Se,Te),ke=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ge=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Re=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,Ct=!!G.morphAttributes.color;let Et=wi;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=b.toneMapping);const st=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Qt=st!==void 0?st.length:0,xe=H.get(V),Tn=w.state.lights;if(Qe===!0&&(Ke===!0||T!==j)){const lt=T===j&&V.id===W;be.setState(V,T,lt)}let Ze=!1;V.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==Tn.state.version||xe.outputColorSpace!==ge||z.isBatchedMesh&&xe.batching===!1||!z.isBatchedMesh&&xe.batching===!0||z.isBatchedMesh&&xe.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&xe.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&xe.instancing===!1||!z.isInstancedMesh&&xe.instancing===!0||z.isSkinnedMesh&&xe.skinning===!1||!z.isSkinnedMesh&&xe.skinning===!0||z.isInstancedMesh&&xe.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&xe.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&xe.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&xe.instancingMorph===!1&&z.morphTexture!==null||xe.envMap!==Ce||V.fog===!0&&xe.fog!==ve||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==be.numPlanes||xe.numIntersection!==be.numIntersection)||xe.vertexAlphas!==ke||xe.vertexTangents!==Ge||xe.morphTargets!==Re||xe.morphNormals!==it||xe.morphColors!==Ct||xe.toneMapping!==Et||xe.morphTargetsCount!==Qt||!!xe.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,xe.__version=V.version);let Bn=xe.currentProgram;Ze===!0&&(Bn=_l(V,U,z),N&&V.isNodeMaterial&&N.onUpdateProgram(V,Bn,xe));let hi=!1,tr=!1,Ss=!1;const ot=Bn.getUniforms(),Rt=xe.uniforms;if(M.useProgram(Bn.program)&&(hi=!0,tr=!0,Ss=!0),V.id!==W&&(W=V.id,tr=!0),xe.needsLights){const lt=YE(w.state.lightProbeGridArray,z);xe.lightProbeGrid!==lt&&(xe.lightProbeGrid=lt,tr=!0)}if(hi||j!==T){M.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ot.setValue(I,"projectionMatrix",T.projectionMatrix),ot.setValue(I,"viewMatrix",T.matrixWorldInverse);const ir=ot.map.cameraPosition;ir!==void 0&&ir.setValue(I,Ft.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),j!==T&&(j=T,tr=!0,Ss=!0)}if(xe.needsLights&&(Tn.state.directionalShadowMap.length>0&&ot.setValue(I,"directionalShadowMap",Tn.state.directionalShadowMap,q),Tn.state.spotShadowMap.length>0&&ot.setValue(I,"spotShadowMap",Tn.state.spotShadowMap,q),Tn.state.pointShadowMap.length>0&&ot.setValue(I,"pointShadowMap",Tn.state.pointShadowMap,q)),z.isSkinnedMesh){ot.setOptional(I,z,"bindMatrix"),ot.setOptional(I,z,"bindMatrixInverse");const lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(I,"boneTexture",lt.boneTexture,q))}z.isBatchedMesh&&(ot.setOptional(I,z,"batchingTexture"),ot.setValue(I,"batchingTexture",z._matricesTexture,q),ot.setOptional(I,z,"batchingIdTexture"),ot.setValue(I,"batchingIdTexture",z._indirectTexture,q),ot.setOptional(I,z,"batchingColorTexture"),z._colorsTexture!==null&&ot.setValue(I,"batchingColorTexture",z._colorsTexture,q));const nr=G.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&D.update(z,G,Bn),(tr||xe.receiveShadow!==z.receiveShadow)&&(xe.receiveShadow=z.receiveShadow,ot.setValue(I,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=qN()),tr){if(ot.setValue(I,"toneMappingExposure",b.toneMappingExposure),xe.needsLights&&qE(Rt,Ss),ve&&V.fog===!0&&Ae.refreshFogUniforms(Rt,ve),Ae.refreshMaterialUniforms(Rt,V,ie,ae,w.state.transmissionRenderTarget[T.id]),xe.needsLights&&xe.lightProbeGrid){const lt=xe.lightProbeGrid;Rt.probesSH.value=lt.texture,Rt.probesMin.value.copy(lt.boundingBox.min),Rt.probesMax.value.copy(lt.boundingBox.max),Rt.probesResolution.value.copy(lt.resolution)}Lu.upload(I,Mg(xe),Rt,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Lu.upload(I,Mg(xe),Rt,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(I,"center",z.center),ot.setValue(I,"modelViewMatrix",z.modelViewMatrix),ot.setValue(I,"normalMatrix",z.normalMatrix),ot.setValue(I,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){const lt=V.uniformsGroups;for(let ir=0,Ms=lt.length;ir<Ms;ir++){const Tg=lt[ir];ee.update(Tg,Bn),ee.bind(Tg,Bn)}}return Bn}function qE(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function KE(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,U,G){const V=H.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),H.get(T.texture).__webglTexture=U,H.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,U){const G=H.get(T);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,G=0){L=T,Y=U,k=G;let V=null,z=!1,ve=!1;if(T){const ge=H.get(T);if(ge.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(I.FRAMEBUFFER,ge.__webglFramebuffer),te.copy(T.viewport),re.copy(T.scissor),ze=T.scissorTest,M.viewport(te),M.scissor(re),M.setScissorTest(ze),W=-1;return}else if(ge.__webglFramebuffer===void 0)q.setupRenderTarget(T);else if(ge.__hasExternalTextures)q.rebindTextures(T,H.get(T.texture).__webglTexture,H.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ke=T.depthTexture;if(ge.__boundDepthTexture!==ke){if(ke!==null&&H.has(ke)&&(T.width!==ke.image.width||T.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(T)}}const Te=T.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ve=!0);const Ce=H.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[U])?V=Ce[U][G]:V=Ce[U],z=!0):T.samples>0&&q.useMultisampledRTT(T)===!1?V=H.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?V=Ce[G]:V=Ce,te.copy(T.viewport),re.copy(T.scissor),ze=T.scissorTest}else te.copy(Pe).multiplyScalar(ie).floor(),re.copy(At).multiplyScalar(ie).floor(),ze=$e;if(G!==0&&(V=X),M.bindFramebuffer(I.FRAMEBUFFER,V)&&M.drawBuffers(T,V),M.viewport(te),M.scissor(re),M.setScissorTest(ze),z){const ge=H.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,ge.__webglTexture,G)}else if(ve){const ge=U;for(let Te=0;Te<T.textures.length;Te++){const Ce=H.get(T.textures[Te]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Te,Ce.__webglTexture,G,ge)}}else if(T!==null&&G!==0){const ge=H.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ge.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(T,U,G,V,z,ve,Se,ge=0){if(!(T&&T.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){M.bindFramebuffer(I.FRAMEBUFFER,Te);try{const Ce=T.textures[ge],ke=Ce.format,Ge=Ce.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(ke)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-V&&G>=0&&G<=T.height-z&&I.readPixels(U,G,V,z,de.convert(ke),de.convert(Ge),ve)}finally{const Ce=L!==null?H.get(L).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,U,G,V,z,ve,Se,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=H.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te)if(U>=0&&U<=T.width-V&&G>=0&&G<=T.height-z){M.bindFramebuffer(I.FRAMEBUFFER,Te);const Ce=T.textures[ge],ke=Ce.format,Ge=Ce.type;if(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ge),!R.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Re=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.bufferData(I.PIXEL_PACK_BUFFER,ve.byteLength,I.STREAM_READ),I.readPixels(U,G,V,z,de.convert(ke),de.convert(Ge),0);const it=L!==null?H.get(L).__webglFramebuffer:null;M.bindFramebuffer(I.FRAMEBUFFER,it);const Ct=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await LP(I,Ct,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Re),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ve),I.deleteBuffer(Re),I.deleteSync(Ct),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,U=null,G=0){const V=Math.pow(2,-G),z=Math.floor(T.image.width*V),ve=Math.floor(T.image.height*V),Se=U!==null?U.x:0,ge=U!==null?U.y:0;q.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,G,0,0,Se,ge,z,ve),M.unbindTexture()},this.copyTextureToTexture=function(T,U,G=null,V=null,z=0,ve=0){let Se,ge,Te,Ce,ke,Ge,Re,it,Ct;const Et=T.isCompressedTexture?T.mipmaps[ve]:T.image;if(G!==null)Se=G.max.x-G.min.x,ge=G.max.y-G.min.y,Te=G.isBox3?G.max.z-G.min.z:1,Ce=G.min.x,ke=G.min.y,Ge=G.isBox3?G.min.z:0;else{const Rt=Math.pow(2,-z);Se=Math.floor(Et.width*Rt),ge=Math.floor(Et.height*Rt),T.isDataArrayTexture?Te=Et.depth:T.isData3DTexture?Te=Math.floor(Et.depth*Rt):Te=1,Ce=0,ke=0,Ge=0}V!==null?(Re=V.x,it=V.y,Ct=V.z):(Re=0,it=0,Ct=0);const st=de.convert(U.format),Qt=de.convert(U.type);let xe;U.isData3DTexture?(q.setTexture3D(U,0),xe=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(q.setTexture2DArray(U,0),xe=I.TEXTURE_2D_ARRAY):(q.setTexture2D(U,0),xe=I.TEXTURE_2D),M.activeTexture(I.TEXTURE0),M.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Tn=M.getParameter(I.UNPACK_ROW_LENGTH),Ze=M.getParameter(I.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(I.UNPACK_SKIP_PIXELS),hi=M.getParameter(I.UNPACK_SKIP_ROWS),tr=M.getParameter(I.UNPACK_SKIP_IMAGES);M.pixelStorei(I.UNPACK_ROW_LENGTH,Et.width),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Et.height),M.pixelStorei(I.UNPACK_SKIP_PIXELS,Ce),M.pixelStorei(I.UNPACK_SKIP_ROWS,ke),M.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Ss=T.isDataArrayTexture||T.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(T.isDepthTexture){const Rt=H.get(T),nr=H.get(U),lt=H.get(Rt.__renderTarget),ir=H.get(nr.__renderTarget);M.bindFramebuffer(I.READ_FRAMEBUFFER,lt.__webglFramebuffer),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Ms=0;Ms<Te;Ms++)Ss&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(T).__webglTexture,z,Ge+Ms),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,H.get(U).__webglTexture,ve,Ct+Ms)),I.blitFramebuffer(Ce,ke,Se,ge,Re,it,Se,ge,I.DEPTH_BUFFER_BIT,I.NEAREST);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(z!==0||T.isRenderTargetTexture||H.has(T)){const Rt=H.get(T),nr=H.get(U);M.bindFramebuffer(I.READ_FRAMEBUFFER,$),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,B);for(let lt=0;lt<Te;lt++)Ss?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Rt.__webglTexture,z,Ge+lt):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,z),ot?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,nr.__webglTexture,ve,Ct+lt):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,nr.__webglTexture,ve),z!==0?I.blitFramebuffer(Ce,ke,Se,ge,Re,it,Se,ge,I.COLOR_BUFFER_BIT,I.NEAREST):ot?I.copyTexSubImage3D(xe,ve,Re,it,Ct+lt,Ce,ke,Se,ge):I.copyTexSubImage2D(xe,ve,Re,it,Ce,ke,Se,ge);M.bindFramebuffer(I.READ_FRAMEBUFFER,null),M.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else ot?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(xe,ve,Re,it,Ct,Se,ge,Te,st,Qt,Et.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(xe,ve,Re,it,Ct,Se,ge,Te,st,Et.data):I.texSubImage3D(xe,ve,Re,it,Ct,Se,ge,Te,st,Qt,Et):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ve,Re,it,Se,ge,st,Qt,Et.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ve,Re,it,Et.width,Et.height,st,Et.data):I.texSubImage2D(I.TEXTURE_2D,ve,Re,it,Se,ge,st,Qt,Et);M.pixelStorei(I.UNPACK_ROW_LENGTH,Tn),M.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ze),M.pixelStorei(I.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(I.UNPACK_SKIP_ROWS,hi),M.pixelStorei(I.UNPACK_SKIP_IMAGES,tr),ve===0&&U.generateMipmaps&&I.generateMipmap(xe),M.unbindTexture()},this.initRenderTarget=function(T){H.get(T).__webglFramebuffer===void 0&&q.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?q.setTextureCube(T,0):T.isData3DTexture?q.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?q.setTexture2DArray(T,0):q.setTexture2D(T,0),M.unbindTexture()},this.resetState=function(){Y=0,k=0,L=null,M.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}class ZN extends mE{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Fo;e.deleteAttribute("uv");const n=new Pa({side:pn}),i=new Pa,r=new Z3(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Pt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new e3(e,i,6),a=new jt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Pt(e,Vs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const u=new Pt(e,Vs(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const c=new Pt(e,Vs(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const d=new Pt(e,Vs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Pt(e,Vs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Pt(e,Vs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Vs(t){return new H3({color:0,emissive:16777215,emissiveIntensity:t})}function jN(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")??t.getContext("webgl"))}catch{return!1}}const ii=1.22;function ax(t){if(t.type==="polygon")return new pc(ii,t.sides);if(t.type==="lobed"){const e=new wE,n=360;for(let s=0;s<=n;s++){const o=s/n*Math.PI*2,a=ii*(1-t.depth+t.depth*Math.abs(Math.sin(t.lobes/2*o))),l=a*Math.cos(o),u=a*Math.sin(o);s===0?e.moveTo(l,u):e.lineTo(l,u)}const i=new lg(e,64),r=i.attributes.uv;for(let s=0;s<r.count;s++)r.setXY(s,r.getX(s)/(2*ii)+.5,r.getY(s)/(2*ii)+.5);return i}return new pc(ii,128)}function JN(t){return t.type==="polygon"?new Aa(ii*.965,ii*.965,.14,t.sides,1,!0):t.type==="lobed"?new Aa(ii*.885,ii*.885,.14,96,1,!0):new Aa(ii*.99,ii*.99,.14,128,1,!0)}function QN(){const t=new Uint8Array([90,160,235]),e=new rg(t,t.length,1,kc);return e.minFilter=kt,e.magFilter=kt,e.generateMipmaps=!1,e.needsUpdate=!0,e}function eU({art:t,flipped:e,mode:n="pbr",className:i}){const r=oe.useRef(null),s=oe.useRef(0),o=oe.useRef({from:0,to:0,t0:-1}),a=e!==void 0;return oe.useEffect(()=>{a&&(o.current={from:o.current.to,to:e?Math.PI:0,t0:performance.now()},s.current=o.current.to)},[e,a]),oe.useEffect(()=>{const l=r.current;let u=null;try{const c=new KN({canvas:l,antialias:!0,alpha:!0});c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.toneMapping=qm,c.toneMappingExposure=.95;const d=new mE,f=new bn(32,1,.1,50);f.position.set(0,0,4.35);const p=new mp(c),m=p.fromScene(new ZN,.06).texture;d.environment=m;const S=new q3,g=He=>{const Fe=S.load(He);return Fe.anisotropy=c.capabilities.getMaxAnisotropy(),Fe},h=g(t.flat);h.colorSpace=Rn;const v=g(t.normal),y=n==="toon"?QN():null,x=ax(t.shape),E=ax(t.shape),w=JN(t.shape),C=n==="pbr"?new Pa({map:h,normalMap:v,normalScale:new ye(1.6,1.6),metalness:.82,roughness:.52,envMapIntensity:.5}):new ad({map:h,normalMap:v,normalScale:new ye(1.5,1.5),gradientMap:y}),_=5917232,A=n==="pbr"?new Pa({color:_,metalness:.9,roughness:.42,envMapIntensity:.5}):new ad({color:_,gradientMap:y}),b=7035454,P=n==="pbr"?new Pa({color:b,metalness:.72,roughness:.5,envMapIntensity:.28}):new ad({color:b,gradientMap:y}),N=new Pt(x,C),X=new Pt(w,A);X.rotation.x=Math.PI/2;const $=new Pt(E,P);$.rotation.y=Math.PI,$.position.z=.071;const B=new ca;B.add(N,X,$),d.add(B);const Y=new F_(16770756,n==="pbr"?1.15:1.5);Y.position.set(-2,2.4,2.6),d.add(Y);const k=new F_(10466504,n==="pbr"?.22:.5);k.position.set(2.4,-1.2,1.6),d.add(k);const L={tiltX:0,tiltY:0,pointerX:0,pointerY:0},W=He=>{L.pointerX=He.clientX/window.innerWidth*2-1,L.pointerY=He.clientY/window.innerHeight*2-1},j=()=>{a||(o.current={from:s.current,to:s.current===0?Math.PI:0,t0:performance.now()},s.current=o.current.to)};window.addEventListener("pointermove",W),a||l.addEventListener("click",j);const te=()=>{const He=l.clientWidth,Fe=l.clientHeight;c.setSize(He,Fe,!1),f.aspect=He/Fe,f.updateProjectionMatrix()};te(),window.addEventListener("resize",te);let re=0;const ze=()=>{const Fe=1-(1-Math.min(1,(performance.now()-o.current.t0)/650))**3,Z=o.current.from+(o.current.to-o.current.from)*Fe;L.tiltX+=(L.pointerY*-.16-L.tiltX)*.06,L.tiltY+=(L.pointerX*.2-L.tiltY)*.06,B.rotation.y=Z+L.tiltY,B.rotation.x=L.tiltX,Y.position.x=-2+L.pointerX*1.6,Y.position.y=2.4-L.pointerY*1.2,c.render(d,f),re=requestAnimationFrame(ze)};ze(),u=()=>{cancelAnimationFrame(re),window.removeEventListener("pointermove",W),window.removeEventListener("resize",te),a||l.removeEventListener("click",j),p.dispose(),h.dispose(),v.dispose(),y==null||y.dispose(),x.dispose(),E.dispose(),w.dispose(),C.dispose(),A.dispose(),P.dispose(),m.dispose(),c.dispose()}}catch(c){console.error("Mirror3D 初始化失败:",c)}return()=>u==null?void 0:u()},[t,n,a]),he.jsx("canvas",{ref:r,className:i})}function tU({mirror:t,flipped:e}){return he.jsx("div",{className:"mirror-perspective",children:he.jsxs(fs.div,{className:"mirror-flip",animate:{rotateY:e?180:0},transition:{duration:.65,ease:[.4,0,.2,1]},children:[he.jsx("img",{className:"mirror-face",src:t.backImage,alt:`${t.dynasty} · ${t.name}（镜背）`,draggable:!1}),he.jsx("img",{className:"mirror-face mirror-face-front",src:t.frontImage,alt:`${t.dynasty} · ${t.name}（镜面）`,draggable:!1})]})})}function nU({hotspot:t,index:e,onOpen:n}){return he.jsx(fs.button,{type:"button",className:"hotspot",style:{left:`${t.x}%`,top:`${t.y}%`},initial:{opacity:0,scale:.6,x:"-50%",y:"-50%"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.6,x:"-50%",y:"-50%"},transition:{duration:.5,delay:e*.15,ease:"easeOut"},onClick:i=>{i.stopPropagation(),n()},"aria-label":t.title,children:he.jsx("span",{className:"hotspot-core"})})}const lx=70,ux=350,iU=1600,rU={enter:t=>({y:t>0?240:-240,opacity:0,scale:.96}),center:{y:0,opacity:1,scale:1},exit:t=>({y:t>0?-240:240,opacity:0,scale:.96})};function sU({mirror:t,direction:e,onSwitch:n,onHotspotOpen:i}){const[r,s]=oe.useState(!1),[o,a]=oe.useState(!1),u=oe.useMemo(()=>jN(),[])&&!!t.art3d;oe.useEffect(()=>{if(a(!1),r)return;const f=setTimeout(()=>a(!0),iU);return()=>clearTimeout(f)},[t.id,r]);const c=f=>{var m;const p=f==null?void 0:f.target;(m=p==null?void 0:p.closest)!=null&&m.call(p,".hotspot")||s(S=>!S)},d=(f,p)=>{const{offset:m,velocity:S}=p;m.y<-lx||S.y<-ux?n(1):(m.y>lx||S.y>ux)&&n(-1)};return he.jsxs("div",{className:"mirror-stage",children:[he.jsx(nc,{custom:e,initial:!1,mode:"popLayout",children:he.jsx(fs.div,{className:"mirror-slide",custom:e,variants:rU,initial:"enter",animate:"center",exit:"exit",transition:{duration:.45,ease:[.32,.72,0,1]},drag:"y",dragConstraints:{top:0,bottom:0},dragElastic:.35,onDragEnd:d,onTap:c,children:u&&t.art3d?he.jsxs("div",{className:"mirror-3d-wrap",children:[he.jsx(eU,{art:t.art3d,flipped:r}),!r&&he.jsx("div",{className:"hotspot-layer",children:he.jsx(nc,{children:o&&t.hotspots.map((f,p)=>he.jsx(nU,{hotspot:f,index:p,onOpen:()=>i(f)},f.title))})})]}):he.jsx(tU,{mirror:t,flipped:r})},t.id)}),he.jsxs("div",{className:"stage-nav",children:[he.jsx("button",{type:"button",className:"nav-btn",onClick:()=>n(-1),"aria-label":"上一个朝代",children:"↑"}),he.jsx("button",{type:"button",className:"nav-btn",onClick:()=>n(1),"aria-label":"下一个朝代",children:"↓"})]})]})}function oU({content:t,onClose:e}){return he.jsx(nc,{children:t&&he.jsxs(he.Fragment,{children:[he.jsx(fs.div,{className:"sheet-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},onClick:e}),he.jsxs(fs.div,{className:"sheet",role:"dialog","aria-label":t.title,initial:{y:"100%",x:"-50%"},animate:{y:0,x:"-50%"},exit:{y:"100%",x:"-50%"},transition:{duration:.32,ease:[.32,.72,0,1]},children:[he.jsx("div",{className:"sheet-handle"}),t.imageUrl?he.jsxs("figure",{className:"ref-figure",children:[he.jsx("img",{src:t.imageUrl,alt:t.imageAlt??t.title}),he.jsx("figcaption",{children:t.imageAlt??t.title})]}):t.isReference&&he.jsx("div",{className:"ref-placeholder",children:he.jsx("span",{children:"史料图片整理中 · 待补充"})}),he.jsx("h2",{className:"sheet-title",children:t.title}),he.jsx("p",{className:"sheet-desc",children:t.description}),t.source&&he.jsxs("p",{className:"sheet-source",children:["图片来源：",t.sourceUrl?he.jsx("a",{href:t.sourceUrl,target:"_blank",rel:"noreferrer",children:t.source}):t.source]}),he.jsx("button",{type:"button",className:"sheet-close",onClick:e,children:"关闭"})]})]})})}const aU=650,lU=900,uU=24,cU={enter:t=>({y:t>0?18:-18,opacity:0}),center:{y:0,opacity:1},exit:t=>({y:t>0?-14:14,opacity:0})};function fU(){const[t,e]=oe.useState(0),[n,i]=oe.useState(1),[r,s]=oe.useState(null),o=oe.useRef(0),a=oe.useCallback(c=>{const d=Date.now();d-o.current<aU||(o.current=d,s(null),i(c),e(f=>(f+c+es.length)%es.length))},[]);oe.useEffect(()=>{let c=0;const d=p=>{const m=Date.now();Math.abs(p.deltaY)<uU||m-c<lU||(c=m,a(p.deltaY>0?1:-1))},f=p=>{p.key==="ArrowDown"?a(1):p.key==="ArrowUp"&&a(-1)};return window.addEventListener("wheel",d,{passive:!0}),window.addEventListener("keydown",f),()=>{window.removeEventListener("wheel",d),window.removeEventListener("keydown",f)}},[a]);const l=es[t],u=(()=>{if(!r)return null;if(r.type==="hotspot")return{title:r.hotspot.title,description:r.hotspot.description};const c=l.reference;return c?{title:c.title,description:c.detail,imageUrl:c.imageUrl,imageAlt:`${l.name} 馆藏实物参考`,source:c.source,sourceUrl:c.sourceUrl,isReference:!0}:null})();return he.jsxs("div",{className:"app",children:[he.jsx(fs.div,{className:"bg-tint",animate:{backgroundColor:l.tint},transition:{duration:.9}}),he.jsxs("header",{className:"app-header",children:[he.jsx("h1",{className:"app-title",children:"照见千年"}),he.jsx("p",{className:"app-subtitle",children:"从一面铜镜，看见不同时代的审美"})]}),he.jsx(sU,{mirror:l,direction:n,onSwitch:a,onHotspotOpen:c=>s({type:"hotspot",hotspot:c})}),he.jsxs("footer",{className:"app-footer",children:[he.jsx(nc,{mode:"wait",custom:n,initial:!1,children:he.jsxs(fs.div,{className:"footer-info",custom:n,variants:cU,initial:"enter",animate:"center",exit:"exit",transition:{duration:.18},children:[he.jsx("div",{className:"dynasty-name",children:l.dynasty}),he.jsx("div",{className:"mirror-name",children:l.name}),he.jsx("div",{className:"divider"}),he.jsx("p",{className:"mirror-desc",children:l.shortDescription})]},l.id)}),l.reference&&he.jsx("button",{type:"button",className:"ref-entry",onClick:()=>s({type:"reference"}),children:"史实资料"}),he.jsx("div",{className:"dynasty-dots",children:es.map(c=>he.jsx("span",{className:c.id===l.id?"active":void 0},c.id))}),he.jsx("p",{className:"hint",children:"上下滑动切换朝代 · 点击铜镜翻面"})]}),he.jsx(oU,{content:u,onClose:()=>s(null)})]})}function dU(){const[t,e]=oe.useState(0),[n,i]=oe.useState([]),[r,s]=oe.useState(!1),o=es[t];oe.useEffect(()=>{i(es[t].hotspots.map(d=>({...d})))},[t]);const a=oe.useCallback(d=>{const f=d.currentTarget.getBoundingClientRect(),p=Number(((d.clientX-f.left)/f.width*100).toFixed(1)),m=Number(((d.clientY-f.top)/f.height*100).toFixed(1));i(S=>[...S,{x:p,y:m,title:`热点${S.length+1}`,description:"待填写"}])},[]),l=d=>i(f=>f.filter((p,m)=>m!==d)),u=JSON.stringify(n.map(d=>({x:d.x,y:d.y,title:d.title,description:d.description})),null,2),c=async()=>{try{await navigator.clipboard.writeText(u),s(!0),setTimeout(()=>s(!1),1500)}catch{}};return he.jsxs("div",{className:"cal-root",children:[he.jsxs("header",{className:"cal-bar",children:[he.jsx("div",{className:"cal-tabs",children:es.map((d,f)=>he.jsx("button",{type:"button",className:f===t?"active":void 0,onClick:()=>e(f),children:d.dynasty},d.id))}),he.jsx("span",{className:"cal-hint",children:"点击图片加点 · 点圆点删除"}),he.jsx("button",{type:"button",className:"cal-copy",onClick:c,children:r?"已复制 ✓":"复制 JSON"})]}),he.jsxs("div",{className:"cal-img-wrap",onClick:a,children:[he.jsx("img",{src:o.backImage,alt:o.name,draggable:!1}),n.map((d,f)=>he.jsx("button",{type:"button",className:"cal-point",style:{left:`${d.x}%`,top:`${d.y}%`},onClick:p=>{p.stopPropagation(),l(f)},title:`${d.title}（点击删除）`,children:f+1},`${d.x},${d.y},${f}`))]}),he.jsx("pre",{className:"cal-json",children:`// ${o.dynasty} · ${o.name} → mirrors.ts hotspots
${u}`})]})}const HE=new URLSearchParams(window.location.search),hU=HE.has("calibrate"),gd=MS(document.getElementById("root"));hU?gd.render(he.jsx(dU,{})):HE.has("poc3d")?JE(async()=>{const{default:t}=await import("./Mirror3DPoc-BUw0xErA.js");return{default:t}},[],import.meta.url).then(({default:t})=>{gd.render(he.jsx(t,{}))}):gd.render(he.jsx(oe.StrictMode,{children:he.jsx(fU,{})}));export{eU as M,he as j,es as m,oe as r};
