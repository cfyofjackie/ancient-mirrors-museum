(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const pT="modulepreload",mT=function(t,e){return new URL(t,e).href},Lg={},gT=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=mT(u,i),u in Lg)return;Lg[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!i)for(let m=o.length-1;m>=0;m--){const S=o[m];if(S.href===u&&(!c||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":pT,c||(p.as="script"),p.crossOrigin="",p.href=u,l&&p.setAttribute("nonce",l),document.head.appendChild(p),c)return new Promise((m,S)=>{p.addEventListener("load",m),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};var _x={exports:{}},yc={},xx={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ul=Symbol.for("react.element"),vT=Symbol.for("react.portal"),_T=Symbol.for("react.fragment"),xT=Symbol.for("react.strict_mode"),yT=Symbol.for("react.profiler"),ST=Symbol.for("react.provider"),MT=Symbol.for("react.context"),ET=Symbol.for("react.forward_ref"),TT=Symbol.for("react.suspense"),wT=Symbol.for("react.memo"),AT=Symbol.for("react.lazy"),Dg=Symbol.iterator;function CT(t){return t===null||typeof t!="object"?null:(t=Dg&&t[Dg]||t["@@iterator"],typeof t=="function"?t:null)}var yx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Sx=Object.assign,Mx={};function Do(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||yx}Do.prototype.isReactComponent={};Do.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Do.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ex(){}Ex.prototype=Do.prototype;function wp(t,e,n){this.props=t,this.context=e,this.refs=Mx,this.updater=n||yx}var Ap=wp.prototype=new Ex;Ap.constructor=wp;Sx(Ap,Do.prototype);Ap.isPureReactComponent=!0;var Ig=Array.isArray,Tx=Object.prototype.hasOwnProperty,Cp={current:null},wx={key:!0,ref:!0,__self:!0,__source:!0};function Ax(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tx.call(e,i)&&!wx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ul,type:t,key:s,ref:o,props:r,_owner:Cp.current}}function RT(t,e){return{$$typeof:ul,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ul}function bT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ng=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?bT(""+t.key):e.toString(36)}function mu(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ul:case vT:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Qc(o,0):i,Ig(r)?(n="",t!=null&&(n=t.replace(Ng,"$&/")+"/"),mu(r,e,n,"",function(u){return u})):r!=null&&(Rp(r)&&(r=RT(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ng,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Qc(s,a);o+=mu(s,e,n,l,r)}else if(l=CT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Qc(s,a++),o+=mu(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sl(t,e,n){if(t==null)return t;var i=[],r=0;return mu(t,i,"","",function(s){return e.call(n,s,r++)}),i}function PT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var mn={current:null},gu={transition:null},LT={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:gu,ReactCurrentOwner:Cp};function Cx(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:Sl,forEach:function(t,e,n){Sl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Sl(t,function(){e++}),e},toArray:function(t){return Sl(t,function(e){return e})||[]},only:function(t){if(!Rp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Do;Ye.Fragment=_T;Ye.Profiler=yT;Ye.PureComponent=wp;Ye.StrictMode=xT;Ye.Suspense=TT;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LT;Ye.act=Cx;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Sx({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Cp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tx.call(e,l)&&!wx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ul,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:MT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ST,_context:t},t.Consumer=t};Ye.createElement=Ax;Ye.createFactory=function(t){var e=Ax.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:ET,render:t}};Ye.isValidElement=Rp;Ye.lazy=function(t){return{$$typeof:AT,_payload:{_status:-1,_result:t},_init:PT}};Ye.memo=function(t,e){return{$$typeof:wT,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=gu.transition;gu.transition={};try{t()}finally{gu.transition=e}};Ye.unstable_act=Cx;Ye.useCallback=function(t,e){return mn.current.useCallback(t,e)};Ye.useContext=function(t){return mn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return mn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return mn.current.useEffect(t,e)};Ye.useId=function(){return mn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return mn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return mn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return mn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return mn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return mn.current.useReducer(t,e,n)};Ye.useRef=function(t){return mn.current.useRef(t)};Ye.useState=function(t){return mn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return mn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return mn.current.useTransition()};Ye.version="18.3.1";xx.exports=Ye;var se=xx.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=se,IT=Symbol.for("react.element"),NT=Symbol.for("react.fragment"),UT=Object.prototype.hasOwnProperty,FT=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OT={key:!0,ref:!0,__self:!0,__source:!0};function Rx(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)UT.call(e,i)&&!OT.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:IT,type:t,key:s,ref:o,props:r,_owner:FT.current}}yc.Fragment=NT;yc.jsx=Rx;yc.jsxs=Rx;_x.exports=yc;var ge=_x.exports,bx={exports:{}},Fn={},Px={exports:{}},Lx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,X){var j=L.length;L.push(X);e:for(;0<j;){var ne=j-1>>>1,oe=L[ne];if(0<r(oe,X))L[ne]=X,L[j]=oe,j=ne;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var X=L[0],j=L.pop();if(j!==X){L[0]=j;e:for(var ne=0,oe=L.length,ve=oe>>>1;ne<ve;){var Le=2*(ne+1)-1,Ie=L[Le],q=Le+1,ie=L[q];if(0>r(Ie,j))q<oe&&0>r(ie,Ie)?(L[ne]=ie,L[q]=j,ne=q):(L[ne]=Ie,L[Le]=j,ne=Le);else if(q<oe&&0>r(ie,j))L[ne]=ie,L[q]=j,ne=q;else break e}}return X}function r(L,X){var j=L.sortIndex-X.sortIndex;return j!==0?j:L.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,p=!1,m=!1,S=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(L){for(var X=n(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=L)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=n(u)}}function _(L){if(S=!1,y(L),!m)if(n(l)!==null)m=!0,Y(T);else{var X=n(u);X!==null&&O(_,X.startTime-L)}}function T(L,X){m=!1,S&&(S=!1,h(x),x=-1),p=!0;var j=f;try{for(y(X),d=n(l);d!==null&&(!(d.expirationTime>X)||L&&!P());){var ne=d.callback;if(typeof ne=="function"){d.callback=null,f=d.priorityLevel;var oe=ne(d.expirationTime<=X);X=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),y(X)}else i(l);d=n(l)}if(d!==null)var ve=!0;else{var Le=n(u);Le!==null&&O(_,Le.startTime-X),ve=!1}return ve}finally{d=null,f=j,p=!1}}var E=!1,C=null,x=-1,A=5,b=-1;function P(){return!(t.unstable_now()-b<A)}function D(){if(C!==null){var L=t.unstable_now();b=L;var X=!0;try{X=C(!0,L)}finally{X?H():(E=!1,C=null)}}else E=!1}var H;if(typeof v=="function")H=function(){v(D)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,k=$.port2;$.port1.onmessage=D,H=function(){k.postMessage(null)}}else H=function(){g(D,0)};function Y(L){C=L,E||(E=!0,H())}function O(L,X){x=g(function(){L(t.unstable_now())},X)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||p||(m=!0,Y(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var X=3;break;default:X=f}var j=f;f=X;try{return L()}finally{f=j}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,X){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var j=f;f=L;try{return X()}finally{f=j}},t.unstable_scheduleCallback=function(L,X,j){var ne=t.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ne+j:ne):j=ne,L){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=j+oe,L={id:c++,callback:X,priorityLevel:L,startTime:j,expirationTime:oe,sortIndex:-1},j>ne?(L.sortIndex=j,e(u,L),n(l)===null&&L===n(u)&&(S?(h(x),x=-1):S=!0,O(_,j-ne))):(L.sortIndex=oe,e(l,L),m||p||(m=!0,Y(T))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var X=f;return function(){var j=f;f=X;try{return L.apply(this,arguments)}finally{f=j}}}})(Lx);Px.exports=Lx;var BT=Px.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kT=se,Nn=BT;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dx=new Set,Na={};function ms(t,e){mo(t,e),mo(t+"Capture",e)}function mo(t,e){for(Na[t]=e,t=0;t<e.length;t++)Dx.add(e[t])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wd=Object.prototype.hasOwnProperty,VT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ug={},Fg={};function zT(t){return wd.call(Fg,t)?!0:wd.call(Ug,t)?!1:VT.test(t)?Fg[t]=!0:(Ug[t]=!0,!1)}function HT(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function GT(t,e,n,i){if(e===null||typeof e>"u"||HT(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Jt[t]=new gn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Jt[e]=new gn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Jt[t]=new gn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Jt[t]=new gn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Jt[t]=new gn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Jt[t]=new gn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Jt[t]=new gn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Jt[t]=new gn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Jt[t]=new gn(t,5,!1,t.toLowerCase(),null,!1,!1)});var bp=/[\-:]([a-z])/g;function Pp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(bp,Pp);Jt[e]=new gn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(bp,Pp);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(bp,Pp);Jt[e]=new gn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!1,!1)});Jt.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Jt[t]=new gn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lp(t,e,n,i){var r=Jt.hasOwnProperty(e)?Jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(GT(e,n,r,i)&&(n=null),i||r===null?zT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var er=kT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),Hs=Symbol.for("react.portal"),Gs=Symbol.for("react.fragment"),Dp=Symbol.for("react.strict_mode"),Ad=Symbol.for("react.profiler"),Ix=Symbol.for("react.provider"),Nx=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Cd=Symbol.for("react.suspense"),Rd=Symbol.for("react.suspense_list"),Np=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),Ux=Symbol.for("react.offscreen"),Og=Symbol.iterator;function zo(t){return t===null||typeof t!="object"?null:(t=Og&&t[Og]||t["@@iterator"],typeof t=="function"?t:null)}var yt=Object.assign,ef;function sa(t){if(ef===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ef=e&&e[1]||""}return`
`+ef+t}var tf=!1;function nf(t,e){if(!t||tf)return"";tf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{tf=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?sa(t):""}function WT(t){switch(t.tag){case 5:return sa(t.type);case 16:return sa("Lazy");case 13:return sa("Suspense");case 19:return sa("SuspenseList");case 0:case 2:case 15:return t=nf(t.type,!1),t;case 11:return t=nf(t.type.render,!1),t;case 1:return t=nf(t.type,!0),t;default:return""}}function bd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Gs:return"Fragment";case Hs:return"Portal";case Ad:return"Profiler";case Dp:return"StrictMode";case Cd:return"Suspense";case Rd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Nx:return(t.displayName||"Context")+".Consumer";case Ix:return(t._context.displayName||"Context")+".Provider";case Ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Np:return e=t.displayName||null,e!==null?e:bd(t.type)||"Memo";case dr:e=t._payload,t=t._init;try{return bd(t(e))}catch{}}return null}function XT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bd(e);case 8:return e===Dp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fx(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function YT(t){var e=Fx(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function El(t){t._valueTracker||(t._valueTracker=YT(t))}function Ox(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Fx(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Fu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pd(t,e){var n=e.checked;return yt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=br(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bx(t,e){e=e.checked,e!=null&&Lp(t,"checked",e,!1)}function Ld(t,e){Bx(t,e);var n=br(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dd(t,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function kg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dd(t,e,n){(e!=="number"||Fu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function so(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+br(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Id(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return yt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(oa(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:br(n)}}function kx(t,e){var n=br(e.value),i=br(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function zg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Vx(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Vx(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Tl,zx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ga={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$T=["Webkit","ms","Moz","O"];Object.keys(ga).forEach(function(t){$T.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ga[e]=ga[t]})});function Hx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ga.hasOwnProperty(t)&&ga[t]?(""+e).trim():e+"px"}function Gx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Hx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var qT=yt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ud(t,e){if(e){if(qT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function Fd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Od=null;function Up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bd=null,oo=null,ao=null;function Hg(t){if(t=dl(t)){if(typeof Bd!="function")throw Error(re(280));var e=t.stateNode;e&&(e=wc(e),Bd(t.stateNode,t.type,e))}}function Wx(t){oo?ao?ao.push(t):ao=[t]:oo=t}function Xx(){if(oo){var t=oo,e=ao;if(ao=oo=null,Hg(t),e)for(t=0;t<e.length;t++)Hg(e[t])}}function Yx(t,e){return t(e)}function $x(){}var rf=!1;function qx(t,e,n){if(rf)return t(e,n);rf=!0;try{return Yx(t,e,n)}finally{rf=!1,(oo!==null||ao!==null)&&($x(),Xx())}}function Fa(t,e){var n=t.stateNode;if(n===null)return null;var i=wc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var kd=!1;if(Yi)try{var Ho={};Object.defineProperty(Ho,"passive",{get:function(){kd=!0}}),window.addEventListener("test",Ho,Ho),window.removeEventListener("test",Ho,Ho)}catch{kd=!1}function KT(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var va=!1,Ou=null,Bu=!1,Vd=null,ZT={onError:function(t){va=!0,Ou=t}};function jT(t,e,n,i,r,s,o,a,l){va=!1,Ou=null,KT.apply(ZT,arguments)}function JT(t,e,n,i,r,s,o,a,l){if(jT.apply(this,arguments),va){if(va){var u=Ou;va=!1,Ou=null}else throw Error(re(198));Bu||(Bu=!0,Vd=u)}}function gs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Kx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gg(t){if(gs(t)!==t)throw Error(re(188))}function QT(t){var e=t.alternate;if(!e){if(e=gs(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gg(r),t;if(s===i)return Gg(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Zx(t){return t=QT(t),t!==null?jx(t):null}function jx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jx(t);if(e!==null)return e;t=t.sibling}return null}var Jx=Nn.unstable_scheduleCallback,Wg=Nn.unstable_cancelCallback,ew=Nn.unstable_shouldYield,tw=Nn.unstable_requestPaint,Lt=Nn.unstable_now,nw=Nn.unstable_getCurrentPriorityLevel,Fp=Nn.unstable_ImmediatePriority,Qx=Nn.unstable_UserBlockingPriority,ku=Nn.unstable_NormalPriority,iw=Nn.unstable_LowPriority,ey=Nn.unstable_IdlePriority,Sc=null,Si=null;function rw(t){if(Si&&typeof Si.onCommitFiberRoot=="function")try{Si.onCommitFiberRoot(Sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:aw,sw=Math.log,ow=Math.LN2;function aw(t){return t>>>=0,t===0?32:31-(sw(t)/ow|0)|0}var wl=64,Al=4194304;function aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Vu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=aa(a):(s&=o,s!==0&&(i=aa(s)))}else o=n&~r,o!==0?i=aa(o):s!==0&&(i=aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function lw(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uw(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=lw(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function zd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ty(){var t=wl;return wl<<=1,!(wl&4194240)&&(wl=64),t}function sf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function cl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function cw(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Op(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function ny(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var iy,Bp,ry,sy,oy,Hd=!1,Cl=[],Sr=null,Mr=null,Er=null,Oa=new Map,Ba=new Map,pr=[],fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xg(t,e){switch(t){case"focusin":case"focusout":Sr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":Oa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ba.delete(e.pointerId)}}function Go(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=dl(e),e!==null&&Bp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function dw(t,e,n,i,r){switch(e){case"focusin":return Sr=Go(Sr,t,e,n,i,r),!0;case"dragenter":return Mr=Go(Mr,t,e,n,i,r),!0;case"mouseover":return Er=Go(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Oa.set(s,Go(Oa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ba.set(s,Go(Ba.get(s)||null,t,e,n,i,r)),!0}return!1}function ay(t){var e=jr(t.target);if(e!==null){var n=gs(e);if(n!==null){if(e=n.tag,e===13){if(e=Kx(n),e!==null){t.blockedOn=e,oy(t.priority,function(){ry(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Od=i,n.target.dispatchEvent(i),Od=null}else return e=dl(n),e!==null&&Bp(e),t.blockedOn=n,!1;e.shift()}return!0}function Yg(t,e,n){vu(t)&&n.delete(e)}function hw(){Hd=!1,Sr!==null&&vu(Sr)&&(Sr=null),Mr!==null&&vu(Mr)&&(Mr=null),Er!==null&&vu(Er)&&(Er=null),Oa.forEach(Yg),Ba.forEach(Yg)}function Wo(t,e){t.blockedOn===e&&(t.blockedOn=null,Hd||(Hd=!0,Nn.unstable_scheduleCallback(Nn.unstable_NormalPriority,hw)))}function ka(t){function e(r){return Wo(r,t)}if(0<Cl.length){Wo(Cl[0],t);for(var n=1;n<Cl.length;n++){var i=Cl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Sr!==null&&Wo(Sr,t),Mr!==null&&Wo(Mr,t),Er!==null&&Wo(Er,t),Oa.forEach(e),Ba.forEach(e),n=0;n<pr.length;n++)i=pr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<pr.length&&(n=pr[0],n.blockedOn===null);)ay(n),n.blockedOn===null&&pr.shift()}var lo=er.ReactCurrentBatchConfig,zu=!0;function pw(t,e,n,i){var r=nt,s=lo.transition;lo.transition=null;try{nt=1,kp(t,e,n,i)}finally{nt=r,lo.transition=s}}function mw(t,e,n,i){var r=nt,s=lo.transition;lo.transition=null;try{nt=4,kp(t,e,n,i)}finally{nt=r,lo.transition=s}}function kp(t,e,n,i){if(zu){var r=Gd(t,e,n,i);if(r===null)mf(t,e,i,Hu,n),Xg(t,i);else if(dw(r,t,e,n,i))i.stopPropagation();else if(Xg(t,i),e&4&&-1<fw.indexOf(t)){for(;r!==null;){var s=dl(r);if(s!==null&&iy(s),s=Gd(t,e,n,i),s===null&&mf(t,e,i,Hu,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else mf(t,e,i,null,n)}}var Hu=null;function Gd(t,e,n,i){if(Hu=null,t=Up(i),t=jr(t),t!==null)if(e=gs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Kx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Hu=t,null}function ly(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nw()){case Fp:return 1;case Qx:return 4;case ku:case iw:return 16;case ey:return 536870912;default:return 16}default:return 16}}var _r=null,Vp=null,_u=null;function uy(){if(_u)return _u;var t,e=Vp,n=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return _u=r.slice(t,1<i?1-i:void 0)}function xu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Rl(){return!0}function $g(){return!1}function On(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:$g,this.isPropagationStopped=$g,this}return yt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zp=On(Io),fl=yt({},Io,{view:0,detail:0}),gw=On(fl),of,af,Xo,Mc=yt({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Xo&&(Xo&&t.type==="mousemove"?(of=t.screenX-Xo.screenX,af=t.screenY-Xo.screenY):af=of=0,Xo=t),of)},movementY:function(t){return"movementY"in t?t.movementY:af}}),qg=On(Mc),vw=yt({},Mc,{dataTransfer:0}),_w=On(vw),xw=yt({},fl,{relatedTarget:0}),lf=On(xw),yw=yt({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),Sw=On(yw),Mw=yt({},Io,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ew=On(Mw),Tw=yt({},Io,{data:0}),Kg=On(Tw),ww={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Aw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rw(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Cw[t])?!!e[t]:!1}function Hp(){return Rw}var bw=yt({},fl,{key:function(t){if(t.key){var e=ww[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=xu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Aw[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hp,charCode:function(t){return t.type==="keypress"?xu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pw=On(bw),Lw=yt({},Mc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=On(Lw),Dw=yt({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hp}),Iw=On(Dw),Nw=yt({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),Uw=On(Nw),Fw=yt({},Mc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Ow=On(Fw),Bw=[9,13,27,32],Gp=Yi&&"CompositionEvent"in window,_a=null;Yi&&"documentMode"in document&&(_a=document.documentMode);var kw=Yi&&"TextEvent"in window&&!_a,cy=Yi&&(!Gp||_a&&8<_a&&11>=_a),jg=" ",Jg=!1;function fy(t,e){switch(t){case"keyup":return Bw.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ws=!1;function Vw(t,e){switch(t){case"compositionend":return dy(e);case"keypress":return e.which!==32?null:(Jg=!0,jg);case"textInput":return t=e.data,t===jg&&Jg?null:t;default:return null}}function zw(t,e){if(Ws)return t==="compositionend"||!Gp&&fy(t,e)?(t=uy(),_u=Vp=_r=null,Ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return cy&&e.locale!=="ko"?null:e.data;default:return null}}var Hw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Hw[t.type]:e==="textarea"}function hy(t,e,n,i){Wx(i),e=Gu(e,"onChange"),0<e.length&&(n=new zp("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xa=null,Va=null;function Gw(t){Ty(t,0)}function Ec(t){var e=$s(t);if(Ox(e))return t}function Ww(t,e){if(t==="change")return e}var py=!1;if(Yi){var uf;if(Yi){var cf="oninput"in document;if(!cf){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),cf=typeof e0.oninput=="function"}uf=cf}else uf=!1;py=uf&&(!document.documentMode||9<document.documentMode)}function t0(){xa&&(xa.detachEvent("onpropertychange",my),Va=xa=null)}function my(t){if(t.propertyName==="value"&&Ec(Va)){var e=[];hy(e,Va,t,Up(t)),qx(Gw,e)}}function Xw(t,e,n){t==="focusin"?(t0(),xa=e,Va=n,xa.attachEvent("onpropertychange",my)):t==="focusout"&&t0()}function Yw(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ec(Va)}function $w(t,e){if(t==="click")return Ec(e)}function qw(t,e){if(t==="input"||t==="change")return Ec(e)}function Kw(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ci=typeof Object.is=="function"?Object.is:Kw;function za(t,e){if(ci(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wd.call(e,r)||!ci(t[r],e[r]))return!1}return!0}function n0(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function i0(t,e){var n=n0(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n0(n)}}function gy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vy(){for(var t=window,e=Fu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Fu(t.document)}return e}function Wp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Zw(t){var e=vy(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gy(n.ownerDocument.documentElement,n)){if(i!==null&&Wp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=i0(n,s);var o=i0(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var jw=Yi&&"documentMode"in document&&11>=document.documentMode,Xs=null,Wd=null,ya=null,Xd=!1;function r0(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xd||Xs==null||Xs!==Fu(i)||(i=Xs,"selectionStart"in i&&Wp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ya&&za(ya,i)||(ya=i,i=Gu(Wd,"onSelect"),0<i.length&&(e=new zp("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Xs)))}function bl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ys={animationend:bl("Animation","AnimationEnd"),animationiteration:bl("Animation","AnimationIteration"),animationstart:bl("Animation","AnimationStart"),transitionend:bl("Transition","TransitionEnd")},ff={},_y={};Yi&&(_y=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function Tc(t){if(ff[t])return ff[t];if(!Ys[t])return t;var e=Ys[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _y)return ff[t]=e[n];return t}var xy=Tc("animationend"),yy=Tc("animationiteration"),Sy=Tc("animationstart"),My=Tc("transitionend"),Ey=new Map,s0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(t,e){Ey.set(t,e),ms(e,[t])}for(var df=0;df<s0.length;df++){var hf=s0[df],Jw=hf.toLowerCase(),Qw=hf[0].toUpperCase()+hf.slice(1);Nr(Jw,"on"+Qw)}Nr(xy,"onAnimationEnd");Nr(yy,"onAnimationIteration");Nr(Sy,"onAnimationStart");Nr("dblclick","onDoubleClick");Nr("focusin","onFocus");Nr("focusout","onBlur");Nr(My,"onTransitionEnd");mo("onMouseEnter",["mouseout","mouseover"]);mo("onMouseLeave",["mouseout","mouseover"]);mo("onPointerEnter",["pointerout","pointerover"]);mo("onPointerLeave",["pointerout","pointerover"]);ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var la="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(la));function o0(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,JT(i,e,void 0,t),t.currentTarget=null}function Ty(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;o0(r,a,u),s=l}}}if(Bu)throw t=Vd,Bu=!1,Vd=null,t}function ft(t,e){var n=e[Zd];n===void 0&&(n=e[Zd]=new Set);var i=t+"__bubble";n.has(i)||(wy(e,t,2,!1),n.add(i))}function pf(t,e,n){var i=0;e&&(i|=4),wy(n,t,i,e)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function Ha(t){if(!t[Pl]){t[Pl]=!0,Dx.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||pf(n,!1,t),pf(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pl]||(e[Pl]=!0,pf("selectionchange",!1,e))}}function wy(t,e,n,i){switch(ly(e)){case 1:var r=pw;break;case 4:r=mw;break;default:r=kp}n=r.bind(null,e,n,t),r=void 0,!kd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function mf(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=jr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}qx(function(){var u=s,c=Up(n),d=[];e:{var f=Ey.get(t);if(f!==void 0){var p=zp,m=t;switch(t){case"keypress":if(xu(n)===0)break e;case"keydown":case"keyup":p=Pw;break;case"focusin":m="focus",p=lf;break;case"focusout":m="blur",p=lf;break;case"beforeblur":case"afterblur":p=lf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=qg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=_w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Iw;break;case xy:case yy:case Sy:p=Sw;break;case My:p=Uw;break;case"scroll":p=gw;break;case"wheel":p=Ow;break;case"copy":case"cut":case"paste":p=Ew;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zg}var S=(e&4)!==0,g=!S&&t==="scroll",h=S?f!==null?f+"Capture":null:f;S=[];for(var v=u,y;v!==null;){y=v;var _=y.stateNode;if(y.tag===5&&_!==null&&(y=_,h!==null&&(_=Fa(v,h),_!=null&&S.push(Ga(v,_,y)))),g)break;v=v.return}0<S.length&&(f=new p(f,m,null,n,c),d.push({event:f,listeners:S}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",f&&n!==Od&&(m=n.relatedTarget||n.fromElement)&&(jr(m)||m[$i]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(m=n.relatedTarget||n.toElement,p=u,m=m?jr(m):null,m!==null&&(g=gs(m),m!==g||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(S=qg,_="onMouseLeave",h="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Zg,_="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?f:$s(p),y=m==null?f:$s(m),f=new S(_,v+"leave",p,n,c),f.target=g,f.relatedTarget=y,_=null,jr(c)===u&&(S=new S(h,v+"enter",m,n,c),S.target=y,S.relatedTarget=g,_=S),g=_,p&&m)t:{for(S=p,h=m,v=0,y=S;y;y=Es(y))v++;for(y=0,_=h;_;_=Es(_))y++;for(;0<v-y;)S=Es(S),v--;for(;0<y-v;)h=Es(h),y--;for(;v--;){if(S===h||h!==null&&S===h.alternate)break t;S=Es(S),h=Es(h)}S=null}else S=null;p!==null&&a0(d,f,p,S,!1),m!==null&&g!==null&&a0(d,g,m,S,!0)}}e:{if(f=u?$s(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=Ww;else if(Qg(f))if(py)T=qw;else{T=Yw;var E=Xw}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=$w);if(T&&(T=T(t,u))){hy(d,T,n,c);break e}E&&E(t,f,u),t==="focusout"&&(E=f._wrapperState)&&E.controlled&&f.type==="number"&&Dd(f,"number",f.value)}switch(E=u?$s(u):window,t){case"focusin":(Qg(E)||E.contentEditable==="true")&&(Xs=E,Wd=u,ya=null);break;case"focusout":ya=Wd=Xs=null;break;case"mousedown":Xd=!0;break;case"contextmenu":case"mouseup":case"dragend":Xd=!1,r0(d,n,c);break;case"selectionchange":if(jw)break;case"keydown":case"keyup":r0(d,n,c)}var C;if(Gp)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Ws?fy(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(cy&&n.locale!=="ko"&&(Ws||x!=="onCompositionStart"?x==="onCompositionEnd"&&Ws&&(C=uy()):(_r=c,Vp="value"in _r?_r.value:_r.textContent,Ws=!0)),E=Gu(u,x),0<E.length&&(x=new Kg(x,t,null,n,c),d.push({event:x,listeners:E}),C?x.data=C:(C=dy(n),C!==null&&(x.data=C)))),(C=kw?Vw(t,n):zw(t,n))&&(u=Gu(u,"onBeforeInput"),0<u.length&&(c=new Kg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=C))}Ty(d,e)})}function Ga(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Gu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(t,n),s!=null&&i.unshift(Ga(t,s,r)),s=Fa(t,e),s!=null&&i.push(Ga(t,s,r))),t=t.return}return i}function Es(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function a0(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Fa(n,s),l!=null&&o.unshift(Ga(n,l,a))):r||(l=Fa(n,s),l!=null&&o.push(Ga(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function l0(t){return(typeof t=="string"?t:""+t).replace(t1,`
`).replace(n1,"")}function Ll(t,e,n){if(e=l0(e),l0(t)!==e&&n)throw Error(re(425))}function Wu(){}var Yd=null,$d=null;function qd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kd=typeof setTimeout=="function"?setTimeout:void 0,i1=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,r1=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(t){return u0.resolve(null).then(t).catch(s1)}:Kd;function s1(t){setTimeout(function(){throw t})}function gf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ka(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ka(e)}function Tr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function c0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var No=Math.random().toString(36).slice(2),xi="__reactFiber$"+No,Wa="__reactProps$"+No,$i="__reactContainer$"+No,Zd="__reactEvents$"+No,o1="__reactListeners$"+No,a1="__reactHandles$"+No;function jr(t){var e=t[xi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[xi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=c0(t);t!==null;){if(n=t[xi])return n;t=c0(t)}return e}t=n,n=t.parentNode}return null}function dl(t){return t=t[xi]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function wc(t){return t[Wa]||null}var jd=[],qs=-1;function Ur(t){return{current:t}}function dt(t){0>qs||(t.current=jd[qs],jd[qs]=null,qs--)}function ut(t,e){qs++,jd[qs]=t.current,t.current=e}var Pr={},un=Ur(Pr),Sn=Ur(!1),os=Pr;function go(t,e){var n=t.type.contextTypes;if(!n)return Pr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function Mn(t){return t=t.childContextTypes,t!=null}function Xu(){dt(Sn),dt(un)}function f0(t,e,n){if(un.current!==Pr)throw Error(re(168));ut(un,e),ut(Sn,n)}function Ay(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,XT(t)||"Unknown",r));return yt({},n,i)}function Yu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,os=un.current,ut(un,t),ut(Sn,Sn.current),!0}function d0(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Ay(t,e,os),i.__reactInternalMemoizedMergedChildContext=t,dt(Sn),dt(un),ut(un,t)):dt(Sn),ut(Sn,n)}var Bi=null,Ac=!1,vf=!1;function Cy(t){Bi===null?Bi=[t]:Bi.push(t)}function l1(t){Ac=!0,Cy(t)}function Fr(){if(!vf&&Bi!==null){vf=!0;var t=0,e=nt;try{var n=Bi;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Bi=null,Ac=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(t+1)),Jx(Fp,Fr),r}finally{nt=e,vf=!1}}return null}var Ks=[],Zs=0,$u=null,qu=0,Hn=[],Gn=0,as=null,Vi=1,zi="";function Wr(t,e){Ks[Zs++]=qu,Ks[Zs++]=$u,$u=t,qu=e}function Ry(t,e,n){Hn[Gn++]=Vi,Hn[Gn++]=zi,Hn[Gn++]=as,as=t;var i=Vi;t=zi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-ai(e)+r|n<<r|i,zi=s+t}else Vi=1<<s|n<<r|i,zi=t}function Xp(t){t.return!==null&&(Wr(t,1),Ry(t,1,0))}function Yp(t){for(;t===$u;)$u=Ks[--Zs],Ks[Zs]=null,qu=Ks[--Zs],Ks[Zs]=null;for(;t===as;)as=Hn[--Gn],Hn[Gn]=null,zi=Hn[--Gn],Hn[Gn]=null,Vi=Hn[--Gn],Hn[Gn]=null}var Dn=null,Ln=null,pt=!1,ni=null;function by(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function h0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=Tr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Dn=t,Ln=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=as!==null?{id:Vi,overflow:zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Dn=t,Ln=null,!0):!1;default:return!1}}function Jd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(pt){var e=Ln;if(e){var n=e;if(!h0(t,e)){if(Jd(t))throw Error(re(418));e=Tr(n.nextSibling);var i=Dn;e&&h0(t,e)?by(i,n):(t.flags=t.flags&-4097|2,pt=!1,Dn=t)}}else{if(Jd(t))throw Error(re(418));t.flags=t.flags&-4097|2,pt=!1,Dn=t}}}function p0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Dn=t}function Dl(t){if(t!==Dn)return!1;if(!pt)return p0(t),pt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qd(t.type,t.memoizedProps)),e&&(e=Ln)){if(Jd(t))throw Py(),Error(re(418));for(;e;)by(t,e),e=Tr(e.nextSibling)}if(p0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ln=Tr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ln=null}}else Ln=Dn?Tr(t.stateNode.nextSibling):null;return!0}function Py(){for(var t=Ln;t;)t=Tr(t.nextSibling)}function vo(){Ln=Dn=null,pt=!1}function $p(t){ni===null?ni=[t]:ni.push(t)}var u1=er.ReactCurrentBatchConfig;function Yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Il(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function m0(t){var e=t._init;return e(t._payload)}function Ly(t){function e(h,v){if(t){var y=h.deletions;y===null?(h.deletions=[v],h.flags|=16):y.push(v)}}function n(h,v){if(!t)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Rr(h,v),h.index=0,h.sibling=null,h}function s(h,v,y){return h.index=y,t?(y=h.alternate,y!==null?(y=y.index,y<v?(h.flags|=2,v):y):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,v,y,_){return v===null||v.tag!==6?(v=Tf(y,h.mode,_),v.return=h,v):(v=r(v,y),v.return=h,v)}function l(h,v,y,_){var T=y.type;return T===Gs?c(h,v,y.props.children,_,y.key):v!==null&&(v.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&m0(T)===v.type)?(_=r(v,y.props),_.ref=Yo(h,v,y),_.return=h,_):(_=Au(y.type,y.key,y.props,null,h.mode,_),_.ref=Yo(h,v,y),_.return=h,_)}function u(h,v,y,_){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=wf(y,h.mode,_),v.return=h,v):(v=r(v,y.children||[]),v.return=h,v)}function c(h,v,y,_,T){return v===null||v.tag!==7?(v=rs(y,h.mode,_,T),v.return=h,v):(v=r(v,y),v.return=h,v)}function d(h,v,y){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Tf(""+v,h.mode,y),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ml:return y=Au(v.type,v.key,v.props,null,h.mode,y),y.ref=Yo(h,null,v),y.return=h,y;case Hs:return v=wf(v,h.mode,y),v.return=h,v;case dr:var _=v._init;return d(h,_(v._payload),y)}if(oa(v)||zo(v))return v=rs(v,h.mode,y,null),v.return=h,v;Il(h,v)}return null}function f(h,v,y,_){var T=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(h,v,""+y,_);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:return y.key===T?l(h,v,y,_):null;case Hs:return y.key===T?u(h,v,y,_):null;case dr:return T=y._init,f(h,v,T(y._payload),_)}if(oa(y)||zo(y))return T!==null?null:c(h,v,y,_,null);Il(h,y)}return null}function p(h,v,y,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return h=h.get(y)||null,a(v,h,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ml:return h=h.get(_.key===null?y:_.key)||null,l(v,h,_,T);case Hs:return h=h.get(_.key===null?y:_.key)||null,u(v,h,_,T);case dr:var E=_._init;return p(h,v,y,E(_._payload),T)}if(oa(_)||zo(_))return h=h.get(y)||null,c(v,h,_,T,null);Il(v,_)}return null}function m(h,v,y,_){for(var T=null,E=null,C=v,x=v=0,A=null;C!==null&&x<y.length;x++){C.index>x?(A=C,C=null):A=C.sibling;var b=f(h,C,y[x],_);if(b===null){C===null&&(C=A);break}t&&C&&b.alternate===null&&e(h,C),v=s(b,v,x),E===null?T=b:E.sibling=b,E=b,C=A}if(x===y.length)return n(h,C),pt&&Wr(h,x),T;if(C===null){for(;x<y.length;x++)C=d(h,y[x],_),C!==null&&(v=s(C,v,x),E===null?T=C:E.sibling=C,E=C);return pt&&Wr(h,x),T}for(C=i(h,C);x<y.length;x++)A=p(C,h,x,y[x],_),A!==null&&(t&&A.alternate!==null&&C.delete(A.key===null?x:A.key),v=s(A,v,x),E===null?T=A:E.sibling=A,E=A);return t&&C.forEach(function(P){return e(h,P)}),pt&&Wr(h,x),T}function S(h,v,y,_){var T=zo(y);if(typeof T!="function")throw Error(re(150));if(y=T.call(y),y==null)throw Error(re(151));for(var E=T=null,C=v,x=v=0,A=null,b=y.next();C!==null&&!b.done;x++,b=y.next()){C.index>x?(A=C,C=null):A=C.sibling;var P=f(h,C,b.value,_);if(P===null){C===null&&(C=A);break}t&&C&&P.alternate===null&&e(h,C),v=s(P,v,x),E===null?T=P:E.sibling=P,E=P,C=A}if(b.done)return n(h,C),pt&&Wr(h,x),T;if(C===null){for(;!b.done;x++,b=y.next())b=d(h,b.value,_),b!==null&&(v=s(b,v,x),E===null?T=b:E.sibling=b,E=b);return pt&&Wr(h,x),T}for(C=i(h,C);!b.done;x++,b=y.next())b=p(C,h,x,b.value,_),b!==null&&(t&&b.alternate!==null&&C.delete(b.key===null?x:b.key),v=s(b,v,x),E===null?T=b:E.sibling=b,E=b);return t&&C.forEach(function(D){return e(h,D)}),pt&&Wr(h,x),T}function g(h,v,y,_){if(typeof y=="object"&&y!==null&&y.type===Gs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ml:e:{for(var T=y.key,E=v;E!==null;){if(E.key===T){if(T=y.type,T===Gs){if(E.tag===7){n(h,E.sibling),v=r(E,y.props.children),v.return=h,h=v;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===dr&&m0(T)===E.type){n(h,E.sibling),v=r(E,y.props),v.ref=Yo(h,E,y),v.return=h,h=v;break e}n(h,E);break}else e(h,E);E=E.sibling}y.type===Gs?(v=rs(y.props.children,h.mode,_,y.key),v.return=h,h=v):(_=Au(y.type,y.key,y.props,null,h.mode,_),_.ref=Yo(h,v,y),_.return=h,h=_)}return o(h);case Hs:e:{for(E=y.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(h,v.sibling),v=r(v,y.children||[]),v.return=h,h=v;break e}else{n(h,v);break}else e(h,v);v=v.sibling}v=wf(y,h.mode,_),v.return=h,h=v}return o(h);case dr:return E=y._init,g(h,v,E(y._payload),_)}if(oa(y))return m(h,v,y,_);if(zo(y))return S(h,v,y,_);Il(h,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,v!==null&&v.tag===6?(n(h,v.sibling),v=r(v,y),v.return=h,h=v):(n(h,v),v=Tf(y,h.mode,_),v.return=h,h=v),o(h)):n(h,v)}return g}var _o=Ly(!0),Dy=Ly(!1),Ku=Ur(null),Zu=null,js=null,qp=null;function Kp(){qp=js=Zu=null}function Zp(t){var e=Ku.current;dt(Ku),t._currentValue=e}function eh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function uo(t,e){Zu=t,qp=js=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yn=!0),t.firstContext=null)}function Yn(t){var e=t._currentValue;if(qp!==t)if(t={context:t,memoizedValue:e,next:null},js===null){if(Zu===null)throw Error(re(308));js=t,Zu.dependencies={lanes:0,firstContext:t}}else js=js.next=t;return e}var Jr=null;function jp(t){Jr===null?Jr=[t]:Jr.push(t)}function Iy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,jp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var hr=!1;function Jp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ny(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,jp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function yu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Op(t,n)}}function g0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ju(t,e,n,i){var r=t.updateQueue;hr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,p=a.eventTime;if((i&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,S=a;switch(f=e,p=n,S.tag){case 1:if(m=S.payload,typeof m=="function"){d=m.call(p,d,f);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=S.payload,f=typeof m=="function"?m.call(p,d,f):m,f==null)break e;d=yt({},d,f);break e;case 2:hr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else p={eventTime:p,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);us|=o,t.lanes=o,t.memoizedState=d}}function v0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var hl={},Mi=Ur(hl),Xa=Ur(hl),Ya=Ur(hl);function Qr(t){if(t===hl)throw Error(re(174));return t}function Qp(t,e){switch(ut(Ya,e),ut(Xa,t),ut(Mi,hl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nd(e,t)}dt(Mi),ut(Mi,e)}function xo(){dt(Mi),dt(Xa),dt(Ya)}function Uy(t){Qr(Ya.current);var e=Qr(Mi.current),n=Nd(e,t.type);e!==n&&(ut(Xa,t),ut(Mi,n))}function em(t){Xa.current===t&&(dt(Mi),dt(Xa))}var gt=Ur(0);function Ju(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _f=[];function tm(){for(var t=0;t<_f.length;t++)_f[t]._workInProgressVersionPrimary=null;_f.length=0}var Su=er.ReactCurrentDispatcher,xf=er.ReactCurrentBatchConfig,ls=0,xt=null,Ot=null,Wt=null,Qu=!1,Sa=!1,$a=0,c1=0;function en(){throw Error(re(321))}function nm(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ci(t[n],e[n]))return!1;return!0}function im(t,e,n,i,r,s){if(ls=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Su.current=t===null||t.memoizedState===null?p1:m1,t=n(i,r),Sa){s=0;do{if(Sa=!1,$a=0,25<=s)throw Error(re(301));s+=1,Wt=Ot=null,e.updateQueue=null,Su.current=g1,t=n(i,r)}while(Sa)}if(Su.current=ec,e=Ot!==null&&Ot.next!==null,ls=0,Wt=Ot=xt=null,Qu=!1,e)throw Error(re(300));return t}function rm(){var t=$a!==0;return $a=0,t}function vi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Wt===null?xt.memoizedState=Wt=t:Wt=Wt.next=t,Wt}function $n(){if(Ot===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ot.next;var e=Wt===null?xt.memoizedState:Wt.next;if(e!==null)Wt=e,Ot=t;else{if(t===null)throw Error(re(310));Ot=t,t={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},Wt===null?xt.memoizedState=Wt=t:Wt=Wt.next=t}return Wt}function qa(t,e){return typeof e=="function"?e(t):e}function yf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Ot,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ls&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,xt.lanes|=c,us|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(yn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,us|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Sf(t){var e=$n(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(yn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Fy(){}function Oy(t,e){var n=xt,i=$n(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,yn=!0),i=i.queue,sm(Vy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Wt!==null&&Wt.memoizedState.tag&1){if(n.flags|=2048,Ka(9,ky.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(re(349));ls&30||By(n,e,r)}return r}function By(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function ky(t,e,n,i){e.value=n,e.getSnapshot=i,zy(e)&&Hy(t)}function Vy(t,e,n){return n(function(){zy(e)&&Hy(t)})}function zy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ci(t,n)}catch{return!0}}function Hy(t){var e=qi(t,1);e!==null&&li(e,t,1,-1)}function _0(t){var e=vi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qa,lastRenderedState:t},e.queue=t,t=t.dispatch=h1.bind(null,xt,t),[e.memoizedState,t]}function Ka(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Gy(){return $n().memoizedState}function Mu(t,e,n,i){var r=vi();xt.flags|=t,r.memoizedState=Ka(1|e,n,void 0,i===void 0?null:i)}function Cc(t,e,n,i){var r=$n();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&nm(i,o.deps)){r.memoizedState=Ka(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Ka(1|e,n,s,i)}function x0(t,e){return Mu(8390656,8,t,e)}function sm(t,e){return Cc(2048,8,t,e)}function Wy(t,e){return Cc(4,2,t,e)}function Xy(t,e){return Cc(4,4,t,e)}function Yy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $y(t,e,n){return n=n!=null?n.concat([t]):null,Cc(4,4,Yy.bind(null,e,t),n)}function om(){}function qy(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nm(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ky(t,e){var n=$n();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&nm(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zy(t,e,n){return ls&21?(ci(n,e)||(n=ty(),xt.lanes|=n,us|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yn=!0),t.memoizedState=n)}function f1(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=xf.transition;xf.transition={};try{t(!1),e()}finally{nt=n,xf.transition=i}}function jy(){return $n().memoizedState}function d1(t,e,n){var i=Cr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jy(t))Qy(e,n);else if(n=Iy(t,e,n,i),n!==null){var r=dn();li(n,t,i,r),eS(n,e,i)}}function h1(t,e,n){var i=Cr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jy(t))Qy(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,jp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Iy(t,e,r,i),n!==null&&(r=dn(),li(n,t,i,r),eS(n,e,i))}}function Jy(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function Qy(t,e){Sa=Qu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function eS(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Op(t,n)}}var ec={readContext:Yn,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useInsertionEffect:en,useLayoutEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useMutableSource:en,useSyncExternalStore:en,useId:en,unstable_isNewReconciler:!1},p1={readContext:Yn,useCallback:function(t,e){return vi().memoizedState=[t,e===void 0?null:e],t},useContext:Yn,useEffect:x0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Mu(4194308,4,Yy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Mu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Mu(4,2,t,e)},useMemo:function(t,e){var n=vi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=vi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=d1.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=vi();return t={current:t},e.memoizedState=t},useState:_0,useDebugValue:om,useDeferredValue:function(t){return vi().memoizedState=t},useTransition:function(){var t=_0(!1),e=t[0];return t=f1.bind(null,t[1]),vi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=vi();if(pt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Yt===null)throw Error(re(349));ls&30||By(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,x0(Vy.bind(null,i,s,t),[t]),i.flags|=2048,Ka(9,ky.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=vi(),e=Yt.identifierPrefix;if(pt){var n=zi,i=Vi;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$a++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=c1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},m1={readContext:Yn,useCallback:qy,useContext:Yn,useEffect:sm,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:Ky,useReducer:yf,useRef:Gy,useState:function(){return yf(qa)},useDebugValue:om,useDeferredValue:function(t){var e=$n();return Zy(e,Ot.memoizedState,t)},useTransition:function(){var t=yf(qa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:Oy,useId:jy,unstable_isNewReconciler:!1},g1={readContext:Yn,useCallback:qy,useContext:Yn,useEffect:sm,useImperativeHandle:$y,useInsertionEffect:Wy,useLayoutEffect:Xy,useMemo:Ky,useReducer:Sf,useRef:Gy,useState:function(){return Sf(qa)},useDebugValue:om,useDeferredValue:function(t){var e=$n();return Ot===null?e.memoizedState=t:Zy(e,Ot.memoizedState,t)},useTransition:function(){var t=Sf(qa)[0],e=$n().memoizedState;return[t,e]},useMutableSource:Fy,useSyncExternalStore:Oy,useId:jy,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=yt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function th(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:yt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rc={isMounted:function(t){return(t=t._reactInternals)?gs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Cr(t),s=Gi(i,r);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(li(e,t,r,i),yu(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=dn(),r=Cr(t),s=Gi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,r),e!==null&&(li(e,t,r,i),yu(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=dn(),i=Cr(t),r=Gi(n,i);r.tag=2,e!=null&&(r.callback=e),e=wr(t,r,i),e!==null&&(li(e,t,i,n),yu(e,t,i))}};function y0(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!za(n,i)||!za(r,s):!0}function tS(t,e,n){var i=!1,r=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=Yn(s):(r=Mn(e)?os:un.current,i=e.contextTypes,s=(i=i!=null)?go(t,r):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function S0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rc.enqueueReplaceState(e,e.state,null)}function nh(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Jp(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Yn(s):(s=Mn(e)?os:un.current,r.context=go(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(th(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rc.enqueueReplaceState(r,r.state,null),ju(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e){try{var n="",i=e;do n+=WT(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Mf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ih(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var v1=typeof WeakMap=="function"?WeakMap:Map;function nS(t,e,n){n=Gi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){nc||(nc=!0,hh=i),ih(t,e)},n}function iS(t,e,n){n=Gi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ih(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ih(t,e),typeof i!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function M0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new v1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=L1.bind(null,t,e,n),e.then(t,t))}function E0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function T0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Gi(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var _1=er.ReactCurrentOwner,yn=!1;function fn(t,e,n,i){e.child=t===null?Dy(e,null,n,i):_o(e,t.child,n,i)}function w0(t,e,n,i,r){n=n.render;var s=e.ref;return uo(e,r),i=im(t,e,n,i,s,r),n=rm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&n&&Xp(e),e.flags|=1,fn(t,e,i,r),e.child)}function A0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!pm(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,rS(t,e,s,i,r)):(t=Au(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:za,n(o,i)&&t.ref===e.ref)return Ki(t,e,r)}return e.flags|=1,t=Rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function rS(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(za(s,i)&&t.ref===e.ref)if(yn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(yn=!0);else return e.lanes=t.lanes,Ki(t,e,r)}return rh(t,e,n,i,r)}function sS(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(Qs,Cn),Cn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(Qs,Cn),Cn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(Qs,Cn),Cn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(Qs,Cn),Cn|=i;return fn(t,e,r,n),e.child}function oS(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function rh(t,e,n,i,r){var s=Mn(n)?os:un.current;return s=go(e,s),uo(e,r),n=im(t,e,n,i,s,r),i=rm(),t!==null&&!yn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ki(t,e,r)):(pt&&i&&Xp(e),e.flags|=1,fn(t,e,n,r),e.child)}function C0(t,e,n,i,r){if(Mn(n)){var s=!0;Yu(e)}else s=!1;if(uo(e,r),e.stateNode===null)Eu(t,e),tS(e,n,i),nh(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Yn(u):(u=Mn(n)?os:un.current,u=go(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&S0(e,o,i,u),hr=!1;var f=e.memoizedState;o.state=f,ju(e,i,o,r),l=e.memoizedState,a!==i||f!==l||Sn.current||hr?(typeof c=="function"&&(th(e,n,c,i),l=e.memoizedState),(a=hr||y0(e,n,a,i,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Ny(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ei(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Yn(l):(l=Mn(n)?os:un.current,l=go(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&S0(e,o,i,l),hr=!1,f=e.memoizedState,o.state=f,ju(e,i,o,r);var m=e.memoizedState;a!==d||f!==m||Sn.current||hr?(typeof p=="function"&&(th(e,n,p,i),m=e.memoizedState),(u=hr||y0(e,n,u,i,f,m,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return sh(t,e,n,i,s,r)}function sh(t,e,n,i,r,s){oS(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&d0(e,n,!1),Ki(t,e,s);i=e.stateNode,_1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=_o(e,t.child,null,s),e.child=_o(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&d0(e,n,!0),e.child}function aS(t){var e=t.stateNode;e.pendingContext?f0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&f0(t,e.context,!1),Qp(t,e.containerInfo)}function R0(t,e,n,i,r){return vo(),$p(r),e.flags|=256,fn(t,e,n,i),e.child}var oh={dehydrated:null,treeContext:null,retryLane:0};function ah(t){return{baseLanes:t,cachePool:null,transitions:null}}function lS(t,e,n){var i=e.pendingProps,r=gt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(gt,r&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lc(o,i,0,null),t=rs(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ah(n),e.memoizedState=oh,t):am(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return x1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Rr(a,s):(s=rs(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ah(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oh,i}return s=t.child,t=s.sibling,i=Rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function am(t,e){return e=Lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Nl(t,e,n,i){return i!==null&&$p(i),_o(e,t.child,null,n),t=am(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function x1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Mf(Error(re(422))),Nl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Lc({mode:"visible",children:i.children},r,0,null),s=rs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&_o(e,t.child,null,o),e.child.memoizedState=ah(o),e.memoizedState=oh,s);if(!(e.mode&1))return Nl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Mf(s,i,void 0),Nl(t,e,o,i)}if(a=(o&t.childLanes)!==0,yn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(t,r),li(i,t,r,-1))}return hm(),i=Mf(Error(re(421))),Nl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=D1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Ln=Tr(r.nextSibling),Dn=e,pt=!0,ni=null,t!==null&&(Hn[Gn++]=Vi,Hn[Gn++]=zi,Hn[Gn++]=as,Vi=t.id,zi=t.overflow,as=e),e=am(e,i.children),e.flags|=4096,e)}function b0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),eh(t.return,e,n)}function Ef(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function uS(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,n,e);else if(t.tag===19)b0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ju(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ef(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ju(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ef(e,!0,n,null,s);break;case"together":Ef(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Eu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ki(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),us|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function y1(t,e,n){switch(e.tag){case 3:aS(e),vo();break;case 5:Uy(e);break;case 1:Mn(e.type)&&Yu(e);break;case 4:Qp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Ku,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?lS(t,e,n):(ut(gt,gt.current&1),t=Ki(t,e,n),t!==null?t.sibling:null);ut(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return uS(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,sS(t,e,n)}return Ki(t,e,n)}var cS,lh,fS,dS;cS=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lh=function(){};fS=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(Mi.current);var s=null;switch(n){case"input":r=Pd(t,r),i=Pd(t,i),s=[];break;case"select":r=yt({},r,{value:void 0}),i=yt({},i,{value:void 0}),s=[];break;case"textarea":r=Id(t,r),i=Id(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Wu)}Ud(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Na.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Na.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ft("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};dS=function(t,e,n,i){n!==i&&(e.flags|=4)};function $o(t,e){if(!pt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function tn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function S1(t,e,n){var i=e.pendingProps;switch(Yp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(e),null;case 1:return Mn(e.type)&&Xu(),tn(e),null;case 3:return i=e.stateNode,xo(),dt(Sn),dt(un),tm(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Dl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(gh(ni),ni=null))),lh(t,e),tn(e),null;case 5:em(e);var r=Qr(Ya.current);if(n=e.type,t!==null&&e.stateNode!=null)fS(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return tn(e),null}if(t=Qr(Mi.current),Dl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[xi]=e,i[Wa]=s,t=(e.mode&1)!==0,n){case"dialog":ft("cancel",i),ft("close",i);break;case"iframe":case"object":case"embed":ft("load",i);break;case"video":case"audio":for(r=0;r<la.length;r++)ft(la[r],i);break;case"source":ft("error",i);break;case"img":case"image":case"link":ft("error",i),ft("load",i);break;case"details":ft("toggle",i);break;case"input":Bg(i,s),ft("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ft("invalid",i);break;case"textarea":Vg(i,s),ft("invalid",i)}Ud(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,t),r=["children",""+a]):Na.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ft("scroll",i)}switch(n){case"input":El(i),kg(i,s,!0);break;case"textarea":El(i),zg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Wu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Vx(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[xi]=e,t[Wa]=i,cS(t,e,!1,!1),e.stateNode=t;e:{switch(o=Fd(n,i),n){case"dialog":ft("cancel",t),ft("close",t),r=i;break;case"iframe":case"object":case"embed":ft("load",t),r=i;break;case"video":case"audio":for(r=0;r<la.length;r++)ft(la[r],t);r=i;break;case"source":ft("error",t),r=i;break;case"img":case"image":case"link":ft("error",t),ft("load",t),r=i;break;case"details":ft("toggle",t),r=i;break;case"input":Bg(t,i),r=Pd(t,i),ft("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=yt({},i,{value:void 0}),ft("invalid",t);break;case"textarea":Vg(t,i),r=Id(t,i),ft("invalid",t);break;default:r=i}Ud(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Gx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&zx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ua(t,l):typeof l=="number"&&Ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Na.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ft("scroll",t):l!=null&&Lp(t,s,l,o))}switch(n){case"input":El(t),kg(t,i,!1);break;case"textarea":El(t),zg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+br(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?so(t,!!i.multiple,s,!1):i.defaultValue!=null&&so(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Wu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return tn(e),null;case 6:if(t&&e.stateNode!=null)dS(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Qr(Ya.current),Qr(Mi.current),Dl(e)){if(i=e.stateNode,n=e.memoizedProps,i[xi]=e,(s=i.nodeValue!==n)&&(t=Dn,t!==null))switch(t.tag){case 3:Ll(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[xi]=e,e.stateNode=i}return tn(e),null;case 13:if(dt(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pt&&Ln!==null&&e.mode&1&&!(e.flags&128))Py(),vo(),e.flags|=98560,s=!1;else if(s=Dl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[xi]=e}else vo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;tn(e),s=!1}else ni!==null&&(gh(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Bt===0&&(Bt=3):hm())),e.updateQueue!==null&&(e.flags|=4),tn(e),null);case 4:return xo(),lh(t,e),t===null&&Ha(e.stateNode.containerInfo),tn(e),null;case 10:return Zp(e.type._context),tn(e),null;case 17:return Mn(e.type)&&Xu(),tn(e),null;case 19:if(dt(gt),s=e.memoizedState,s===null)return tn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$o(s,!1);else{if(Bt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ju(t),o!==null){for(e.flags|=128,$o(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(gt,gt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>So&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ju(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pt)return tn(e),null}else 2*Lt()-s.renderingStartTime>So&&n!==1073741824&&(e.flags|=128,i=!0,$o(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=gt.current,ut(gt,i?n&1|2:n&1),e):(tn(e),null);case 22:case 23:return dm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Cn&1073741824&&(tn(e),e.subtreeFlags&6&&(e.flags|=8192)):tn(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function M1(t,e){switch(Yp(e),e.tag){case 1:return Mn(e.type)&&Xu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return xo(),dt(Sn),dt(un),tm(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return em(e),null;case 13:if(dt(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return dt(gt),null;case 4:return xo(),null;case 10:return Zp(e.type._context),null;case 22:case 23:return dm(),null;case 24:return null;default:return null}}var Ul=!1,on=!1,E1=typeof WeakSet=="function"?WeakSet:Set,Me=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function uh(t,e,n){try{n()}catch(i){At(t,e,i)}}var P0=!1;function T1(t,e){if(Yd=zu,t=vy(),Wp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===t)break t;if(f===n&&++u===r&&(a=o),f===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},zu=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var S=m.memoizedProps,g=m.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?S:ei(e.type,S),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(_){At(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return m=P0,P0=!1,m}function Ma(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&uh(e,n,s)}r=r.next}while(r!==i)}}function bc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ch(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function hS(t){var e=t.alternate;e!==null&&(t.alternate=null,hS(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[xi],delete e[Wa],delete e[Zd],delete e[o1],delete e[a1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function pS(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||pS(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Wu));else if(i!==4&&(t=t.child,t!==null))for(fh(t,e,n),t=t.sibling;t!==null;)fh(t,e,n),t=t.sibling}function dh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(dh(t,e,n),t=t.sibling;t!==null;)dh(t,e,n),t=t.sibling}var Kt=null,ti=!1;function rr(t,e,n){for(n=n.child;n!==null;)mS(t,e,n),n=n.sibling}function mS(t,e,n){if(Si&&typeof Si.onCommitFiberUnmount=="function")try{Si.onCommitFiberUnmount(Sc,n)}catch{}switch(n.tag){case 5:on||Js(n,e);case 6:var i=Kt,r=ti;Kt=null,rr(t,e,n),Kt=i,ti=r,Kt!==null&&(ti?(t=Kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Kt.removeChild(n.stateNode));break;case 18:Kt!==null&&(ti?(t=Kt,n=n.stateNode,t.nodeType===8?gf(t.parentNode,n):t.nodeType===1&&gf(t,n),ka(t)):gf(Kt,n.stateNode));break;case 4:i=Kt,r=ti,Kt=n.stateNode.containerInfo,ti=!0,rr(t,e,n),Kt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!on&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&uh(n,e,o),r=r.next}while(r!==i)}rr(t,e,n);break;case 1:if(!on&&(Js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}rr(t,e,n);break;case 21:rr(t,e,n);break;case 22:n.mode&1?(on=(i=on)||n.memoizedState!==null,rr(t,e,n),on=i):rr(t,e,n);break;default:rr(t,e,n)}}function D0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(i){var r=I1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Kn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Kt=a.stateNode,ti=!1;break e;case 3:Kt=a.stateNode.containerInfo,ti=!0;break e;case 4:Kt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(Kt===null)throw Error(re(160));mS(s,o,r),Kt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){At(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gS(e,t),e=e.sibling}function gS(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Kn(e,t),pi(t),i&4){try{Ma(3,t,t.return),bc(3,t)}catch(S){At(t,t.return,S)}try{Ma(5,t,t.return)}catch(S){At(t,t.return,S)}}break;case 1:Kn(e,t),pi(t),i&512&&n!==null&&Js(n,n.return);break;case 5:if(Kn(e,t),pi(t),i&512&&n!==null&&Js(n,n.return),t.flags&32){var r=t.stateNode;try{Ua(r,"")}catch(S){At(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bx(r,s),Fd(a,o);var u=Fd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Gx(r,d):c==="dangerouslySetInnerHTML"?zx(r,d):c==="children"?Ua(r,d):Lp(r,c,d,u)}switch(a){case"input":Ld(r,s);break;case"textarea":kx(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?so(r,!!s.multiple,p,!1):f!==!!s.multiple&&(s.defaultValue!=null?so(r,!!s.multiple,s.defaultValue,!0):so(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(S){At(t,t.return,S)}}break;case 6:if(Kn(e,t),pi(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){At(t,t.return,S)}}break;case 3:if(Kn(e,t),pi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ka(e.containerInfo)}catch(S){At(t,t.return,S)}break;case 4:Kn(e,t),pi(t);break;case 13:Kn(e,t),pi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(cm=Lt())),i&4&&D0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(on=(u=on)||c,Kn(e,t),on=u):Kn(e,t),pi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Me=t,c=t.child;c!==null;){for(d=Me=c;Me!==null;){switch(f=Me,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ma(4,f,f.return);break;case 1:Js(f,f.return);var m=f.stateNode;if(typeof m.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(S){At(i,n,S)}}break;case 5:Js(f,f.return);break;case 22:if(f.memoizedState!==null){N0(d);continue}}p!==null?(p.return=f,Me=p):N0(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Hx("display",o))}catch(S){At(t,t.return,S)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(S){At(t,t.return,S)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,t),pi(t),i&4&&D0(t);break;case 21:break;default:Kn(e,t),pi(t)}}function pi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(pS(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ua(r,""),i.flags&=-33);var s=L0(t);dh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=L0(t);fh(t,a,o);break;default:throw Error(re(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function w1(t,e,n){Me=t,vS(t)}function vS(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ul;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||on;a=Ul;var u=on;if(Ul=o,(on=l)&&!u)for(Me=r;Me!==null;)o=Me,l=o.child,o.tag===22&&o.memoizedState!==null?U0(r):l!==null?(l.return=o,Me=l):U0(r);for(;s!==null;)Me=s,vS(s),s=s.sibling;Me=r,Ul=a,on=u}I0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):I0(t)}}function I0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:on||bc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!on)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&v0(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}v0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ka(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}on||e.flags&512&&ch(e)}catch(f){At(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function N0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function U0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{bc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{ch(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{ch(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){Me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Me=a;break}Me=e.return}}var A1=Math.ceil,tc=er.ReactCurrentDispatcher,lm=er.ReactCurrentOwner,Xn=er.ReactCurrentBatchConfig,Je=0,Yt=null,Ut=null,jt=0,Cn=0,Qs=Ur(0),Bt=0,Za=null,us=0,Pc=0,um=0,Ea=null,xn=null,cm=0,So=1/0,Oi=null,nc=!1,hh=null,Ar=null,Fl=!1,xr=null,ic=0,Ta=0,ph=null,Tu=-1,wu=0;function dn(){return Je&6?Lt():Tu!==-1?Tu:Tu=Lt()}function Cr(t){return t.mode&1?Je&2&&jt!==0?jt&-jt:u1.transition!==null?(wu===0&&(wu=ty()),wu):(t=nt,t!==0||(t=window.event,t=t===void 0?16:ly(t.type)),t):1}function li(t,e,n,i){if(50<Ta)throw Ta=0,ph=null,Error(re(185));cl(t,n,i),(!(Je&2)||t!==Yt)&&(t===Yt&&(!(Je&2)&&(Pc|=n),Bt===4&&mr(t,jt)),En(t,i),n===1&&Je===0&&!(e.mode&1)&&(So=Lt()+500,Ac&&Fr()))}function En(t,e){var n=t.callbackNode;uw(t,e);var i=Vu(t,t===Yt?jt:0);if(i===0)n!==null&&Wg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wg(n),e===1)t.tag===0?l1(F0.bind(null,t)):Cy(F0.bind(null,t)),r1(function(){!(Je&6)&&Fr()}),n=null;else{switch(ny(i)){case 1:n=Fp;break;case 4:n=Qx;break;case 16:n=ku;break;case 536870912:n=ey;break;default:n=ku}n=wS(n,_S.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _S(t,e){if(Tu=-1,wu=0,Je&6)throw Error(re(327));var n=t.callbackNode;if(co()&&t.callbackNode!==n)return null;var i=Vu(t,t===Yt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=rc(t,i);else{e=i;var r=Je;Je|=2;var s=yS();(Yt!==t||jt!==e)&&(Oi=null,So=Lt()+500,is(t,e));do try{b1();break}catch(a){xS(t,a)}while(!0);Kp(),tc.current=s,Je=r,Ut!==null?e=0:(Yt=null,jt=0,e=Bt)}if(e!==0){if(e===2&&(r=zd(t),r!==0&&(i=r,e=mh(t,r))),e===1)throw n=Za,is(t,0),mr(t,i),En(t,Lt()),n;if(e===6)mr(t,i);else{if(r=t.current.alternate,!(i&30)&&!C1(r)&&(e=rc(t,i),e===2&&(s=zd(t),s!==0&&(i=s,e=mh(t,s))),e===1))throw n=Za,is(t,0),mr(t,i),En(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Xr(t,xn,Oi);break;case 3:if(mr(t,i),(i&130023424)===i&&(e=cm+500-Lt(),10<e)){if(Vu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){dn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Kd(Xr.bind(null,t,xn,Oi),e);break}Xr(t,xn,Oi);break;case 4:if(mr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*A1(i/1960))-i,10<i){t.timeoutHandle=Kd(Xr.bind(null,t,xn,Oi),i);break}Xr(t,xn,Oi);break;case 5:Xr(t,xn,Oi);break;default:throw Error(re(329))}}}return En(t,Lt()),t.callbackNode===n?_S.bind(null,t):null}function mh(t,e){var n=Ea;return t.current.memoizedState.isDehydrated&&(is(t,e).flags|=256),t=rc(t,e),t!==2&&(e=xn,xn=n,e!==null&&gh(e)),t}function gh(t){xn===null?xn=t:xn.push.apply(xn,t)}function C1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function mr(t,e){for(e&=~um,e&=~Pc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function F0(t){if(Je&6)throw Error(re(327));co();var e=Vu(t,0);if(!(e&1))return En(t,Lt()),null;var n=rc(t,e);if(t.tag!==0&&n===2){var i=zd(t);i!==0&&(e=i,n=mh(t,i))}if(n===1)throw n=Za,is(t,0),mr(t,e),En(t,Lt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Xr(t,xn,Oi),En(t,Lt()),null}function fm(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(So=Lt()+500,Ac&&Fr())}}function cs(t){xr!==null&&xr.tag===0&&!(Je&6)&&co();var e=Je;Je|=1;var n=Xn.transition,i=nt;try{if(Xn.transition=null,nt=1,t)return t()}finally{nt=i,Xn.transition=n,Je=e,!(Je&6)&&Fr()}}function dm(){Cn=Qs.current,dt(Qs)}function is(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,i1(n)),Ut!==null)for(n=Ut.return;n!==null;){var i=n;switch(Yp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Xu();break;case 3:xo(),dt(Sn),dt(un),tm();break;case 5:em(i);break;case 4:xo();break;case 13:dt(gt);break;case 19:dt(gt);break;case 10:Zp(i.type._context);break;case 22:case 23:dm()}n=n.return}if(Yt=t,Ut=t=Rr(t.current,null),jt=Cn=e,Bt=0,Za=null,um=Pc=us=0,xn=Ea=null,Jr!==null){for(e=0;e<Jr.length;e++)if(n=Jr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Jr=null}return t}function xS(t,e){do{var n=Ut;try{if(Kp(),Su.current=ec,Qu){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Qu=!1}if(ls=0,Wt=Ot=xt=null,Sa=!1,$a=0,lm.current=null,n===null||n.return===null){Bt=1,Za=e,Ut=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=E0(o);if(p!==null){p.flags&=-257,T0(p,o,a,s,e),p.mode&1&&M0(s,u,e),e=p,l=u;var m=e.updateQueue;if(m===null){var S=new Set;S.add(l),e.updateQueue=S}else m.add(l);break e}else{if(!(e&1)){M0(s,u,e),hm();break e}l=Error(re(426))}}else if(pt&&a.mode&1){var g=E0(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),T0(g,o,a,s,e),$p(yo(l,a));break e}}s=l=yo(l,a),Bt!==4&&(Bt=2),Ea===null?Ea=[s]:Ea.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=nS(s,l,e);g0(s,h);break e;case 1:a=l;var v=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ar===null||!Ar.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=iS(s,a,e);g0(s,_);break e}}s=s.return}while(s!==null)}MS(n)}catch(T){e=T,Ut===n&&n!==null&&(Ut=n=n.return);continue}break}while(!0)}function yS(){var t=tc.current;return tc.current=ec,t===null?ec:t}function hm(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),Yt===null||!(us&268435455)&&!(Pc&268435455)||mr(Yt,jt)}function rc(t,e){var n=Je;Je|=2;var i=yS();(Yt!==t||jt!==e)&&(Oi=null,is(t,e));do try{R1();break}catch(r){xS(t,r)}while(!0);if(Kp(),Je=n,tc.current=i,Ut!==null)throw Error(re(261));return Yt=null,jt=0,Bt}function R1(){for(;Ut!==null;)SS(Ut)}function b1(){for(;Ut!==null&&!ew();)SS(Ut)}function SS(t){var e=TS(t.alternate,t,Cn);t.memoizedProps=t.pendingProps,e===null?MS(t):Ut=e,lm.current=null}function MS(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=M1(n,e),n!==null){n.flags&=32767,Ut=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Bt=6,Ut=null;return}}else if(n=S1(n,e,Cn),n!==null){Ut=n;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=t}while(e!==null);Bt===0&&(Bt=5)}function Xr(t,e,n){var i=nt,r=Xn.transition;try{Xn.transition=null,nt=1,P1(t,e,n,i)}finally{Xn.transition=r,nt=i}return null}function P1(t,e,n,i){do co();while(xr!==null);if(Je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(cw(t,s),t===Yt&&(Ut=Yt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Fl||(Fl=!0,wS(ku,function(){return co(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var o=nt;nt=1;var a=Je;Je|=4,lm.current=null,T1(t,n),gS(n,t),Zw($d),zu=!!Yd,$d=Yd=null,t.current=n,w1(n),tw(),Je=a,nt=o,Xn.transition=s}else t.current=n;if(Fl&&(Fl=!1,xr=t,ic=r),s=t.pendingLanes,s===0&&(Ar=null),rw(n.stateNode),En(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(nc)throw nc=!1,t=hh,hh=null,t;return ic&1&&t.tag!==0&&co(),s=t.pendingLanes,s&1?t===ph?Ta++:(Ta=0,ph=t):Ta=0,Fr(),null}function co(){if(xr!==null){var t=ny(ic),e=Xn.transition,n=nt;try{if(Xn.transition=null,nt=16>t?16:t,xr===null)var i=!1;else{if(t=xr,xr=null,ic=0,Je&6)throw Error(re(331));var r=Je;for(Je|=4,Me=t.current;Me!==null;){var s=Me,o=s.child;if(Me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Me=u;Me!==null;){var c=Me;switch(c.tag){case 0:case 11:case 15:Ma(8,c,s)}var d=c.child;if(d!==null)d.return=c,Me=d;else for(;Me!==null;){c=Me;var f=c.sibling,p=c.return;if(hS(c),c===u){Me=null;break}if(f!==null){f.return=p,Me=f;break}Me=p}}}var m=s.alternate;if(m!==null){var S=m.child;if(S!==null){m.child=null;do{var g=S.sibling;S.sibling=null,S=g}while(S!==null)}}Me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Me=o;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ma(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Me=h;break e}Me=s.return}}var v=t.current;for(Me=v;Me!==null;){o=Me;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,Me=y;else e:for(o=v;Me!==null;){if(a=Me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:bc(9,a)}}catch(T){At(a,a.return,T)}if(a===o){Me=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,Me=_;break e}Me=a.return}}if(Je=r,Fr(),Si&&typeof Si.onPostCommitFiberRoot=="function")try{Si.onPostCommitFiberRoot(Sc,t)}catch{}i=!0}return i}finally{nt=n,Xn.transition=e}}return!1}function O0(t,e,n){e=yo(n,e),e=nS(t,e,1),t=wr(t,e,1),e=dn(),t!==null&&(cl(t,1,e),En(t,e))}function At(t,e,n){if(t.tag===3)O0(t,t,n);else for(;e!==null;){if(e.tag===3){O0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ar===null||!Ar.has(i))){t=yo(n,t),t=iS(e,t,1),e=wr(e,t,1),t=dn(),e!==null&&(cl(e,1,t),En(e,t));break}}e=e.return}}function L1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=dn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(jt&n)===n&&(Bt===4||Bt===3&&(jt&130023424)===jt&&500>Lt()-cm?is(t,0):um|=n),En(t,e)}function ES(t,e){e===0&&(t.mode&1?(e=Al,Al<<=1,!(Al&130023424)&&(Al=4194304)):e=1);var n=dn();t=qi(t,e),t!==null&&(cl(t,e,n),En(t,n))}function D1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ES(t,n)}function I1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),ES(t,n)}var TS;TS=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Sn.current)yn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yn=!1,y1(t,e,n);yn=!!(t.flags&131072)}else yn=!1,pt&&e.flags&1048576&&Ry(e,qu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Eu(t,e),t=e.pendingProps;var r=go(e,un.current);uo(e,n),r=im(null,e,i,t,r,n);var s=rm();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mn(i)?(s=!0,Yu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Jp(e),r.updater=Rc,e.stateNode=r,r._reactInternals=e,nh(e,i,t,n),e=sh(null,e,i,!0,s,n)):(e.tag=0,pt&&s&&Xp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Eu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=U1(i),t=ei(i,t),r){case 0:e=rh(null,e,i,t,n);break e;case 1:e=C0(null,e,i,t,n);break e;case 11:e=w0(null,e,i,t,n);break e;case 14:e=A0(null,e,i,ei(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),rh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),C0(t,e,i,r,n);case 3:e:{if(aS(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ny(t,e),ju(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=yo(Error(re(423)),e),e=R0(t,e,i,n,r);break e}else if(i!==r){r=yo(Error(re(424)),e),e=R0(t,e,i,n,r);break e}else for(Ln=Tr(e.stateNode.containerInfo.firstChild),Dn=e,pt=!0,ni=null,n=Dy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vo(),i===r){e=Ki(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return Uy(e),t===null&&Qd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,qd(i,r)?o=null:s!==null&&qd(i,s)&&(e.flags|=32),oS(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return lS(t,e,n);case 4:return Qp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=_o(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),w0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Ku,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!Sn.current){e=Ki(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Gi(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),eh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),eh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,uo(e,n),r=Yn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),A0(t,e,i,r,n);case 15:return rS(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Eu(t,e),e.tag=1,Mn(i)?(t=!0,Yu(e)):t=!1,uo(e,n),tS(e,i,r),nh(e,i,r,n),sh(null,e,i,!0,t,n);case 19:return uS(t,e,n);case 22:return sS(t,e,n)}throw Error(re(156,e.tag))};function wS(t,e){return Jx(t,e)}function N1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new N1(t,e,n,i)}function pm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function U1(t){if(typeof t=="function")return pm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ip)return 11;if(t===Np)return 14}return 2}function Rr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Au(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")pm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Gs:return rs(n.children,r,s,e);case Dp:o=8,r|=8;break;case Ad:return t=Wn(12,n,e,r|2),t.elementType=Ad,t.lanes=s,t;case Cd:return t=Wn(13,n,e,r),t.elementType=Cd,t.lanes=s,t;case Rd:return t=Wn(19,n,e,r),t.elementType=Rd,t.lanes=s,t;case Ux:return Lc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ix:o=10;break e;case Nx:o=9;break e;case Ip:o=11;break e;case Np:o=14;break e;case dr:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function rs(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Lc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=Ux,t.lanes=n,t.stateNode={isHidden:!1},t}function Tf(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function wf(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function F1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=sf(0),this.expirationTimes=sf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=sf(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function mm(t,e,n,i,r,s,o,a,l){return t=new F1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Jp(s),t}function O1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function AS(t){if(!t)return Pr;t=t._reactInternals;e:{if(gs(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(Mn(n))return Ay(t,n,e)}return e}function CS(t,e,n,i,r,s,o,a,l){return t=mm(n,i,!0,t,r,s,o,a,l),t.context=AS(null),n=t.current,i=dn(),r=Cr(n),s=Gi(i,r),s.callback=e??null,wr(n,s,r),t.current.lanes=r,cl(t,r,i),En(t,i),t}function Dc(t,e,n,i){var r=e.current,s=dn(),o=Cr(r);return n=AS(n),e.context===null?e.context=n:e.pendingContext=n,e=Gi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=wr(r,e,o),t!==null&&(li(t,r,o,s),yu(t,r,o)),o}function sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function B0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function gm(t,e){B0(t,e),(t=t.alternate)&&B0(t,e)}function B1(){return null}var RS=typeof reportError=="function"?reportError:function(t){console.error(t)};function vm(t){this._internalRoot=t}Ic.prototype.render=vm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Dc(t,e,null,null)};Ic.prototype.unmount=vm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;cs(function(){Dc(null,t,null,null)}),e[$i]=null}};function Ic(t){this._internalRoot=t}Ic.prototype.unstable_scheduleHydration=function(t){if(t){var e=sy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pr.length&&e!==0&&e<pr[n].priority;n++);pr.splice(n,0,t),n===0&&ay(t)}};function _m(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function k0(){}function k1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=sc(o);s.call(u)}}var o=CS(e,i,t,0,null,!1,!1,"",k0);return t._reactRootContainer=o,t[$i]=o.current,Ha(t.nodeType===8?t.parentNode:t),cs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=sc(l);a.call(u)}}var l=mm(t,0,!1,null,null,!1,!1,"",k0);return t._reactRootContainer=l,t[$i]=l.current,Ha(t.nodeType===8?t.parentNode:t),cs(function(){Dc(e,l,n,i)}),l}function Uc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=sc(o);a.call(l)}}Dc(e,o,t,r)}else o=k1(n,e,t,r,i);return sc(o)}iy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=aa(e.pendingLanes);n!==0&&(Op(e,n|1),En(e,Lt()),!(Je&6)&&(So=Lt()+500,Fr()))}break;case 13:cs(function(){var i=qi(t,1);if(i!==null){var r=dn();li(i,t,1,r)}}),gm(t,1)}};Bp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=dn();li(e,t,134217728,n)}gm(t,134217728)}};ry=function(t){if(t.tag===13){var e=Cr(t),n=qi(t,e);if(n!==null){var i=dn();li(n,t,e,i)}gm(t,e)}};sy=function(){return nt};oy=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};Bd=function(t,e,n){switch(e){case"input":if(Ld(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wc(i);if(!r)throw Error(re(90));Ox(i),Ld(i,r)}}}break;case"textarea":kx(t,n);break;case"select":e=n.value,e!=null&&so(t,!!n.multiple,e,!1)}};Yx=fm;$x=cs;var V1={usingClientEntryPoint:!1,Events:[dl,$s,wc,Wx,Xx,fm]},qo={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},z1={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zx(t),t===null?null:t.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||B1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ol=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ol.isDisabled&&Ol.supportsFiber)try{Sc=Ol.inject(z1),Si=Ol}catch{}}Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V1;Fn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_m(e))throw Error(re(200));return O1(t,e,null,n)};Fn.createRoot=function(t,e){if(!_m(t))throw Error(re(299));var n=!1,i="",r=RS;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=mm(t,1,!1,null,null,n,!1,i,r),t[$i]=e.current,Ha(t.nodeType===8?t.parentNode:t),new vm(e)};Fn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Zx(e),t=t===null?null:t.stateNode,t};Fn.flushSync=function(t){return cs(t)};Fn.hydrate=function(t,e,n){if(!Nc(e))throw Error(re(200));return Uc(null,t,e,!0,n)};Fn.hydrateRoot=function(t,e,n){if(!_m(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=RS;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=CS(e,null,t,1,n??null,r,!1,s,o),t[$i]=e.current,Ha(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Ic(e)};Fn.render=function(t,e,n){if(!Nc(e))throw Error(re(200));return Uc(null,t,e,!1,n)};Fn.unmountComponentAtNode=function(t){if(!Nc(t))throw Error(re(40));return t._reactRootContainer?(cs(function(){Uc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Fn.unstable_batchedUpdates=fm;Fn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Uc(t,e,n,!1,i)};Fn.version="18.3.1-next-f1338f8080-20240426";function bS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bS)}catch(t){console.error(t)}}bS(),bx.exports=Fn;var H1=bx.exports,PS,V0=H1;PS=V0.createRoot,V0.hydrateRoot;const xm=se.createContext({});function Fc(t){const e=se.useRef(null);return e.current===null&&(e.current=t()),e.current}const Oc=se.createContext(null),Bc=se.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});class G1 extends se.Component{getSnapshotBeforeUpdate(e){const n=this.props.childRef.current;if(n&&e.isPresent&&!this.props.isPresent){const i=this.props.sizeRef.current;i.height=n.offsetHeight||0,i.width=n.offsetWidth||0,i.top=n.offsetTop,i.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function W1({children:t,isPresent:e}){const n=se.useId(),i=se.useRef(null),r=se.useRef({width:0,height:0,top:0,left:0}),{nonce:s}=se.useContext(Bc);return se.useInsertionEffect(()=>{const{width:o,height:a,top:l,left:u}=r.current;if(e||!i.current||!o||!a)return;i.current.dataset.motionPopId=n;const c=document.createElement("style");return s&&(c.nonce=s),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${a}px !important;
            top: ${l}px !important;
            left: ${u}px !important;
          }
        `),()=>{document.head.removeChild(c)}},[e]),ge.jsx(G1,{isPresent:e,childRef:i,sizeRef:r,children:se.cloneElement(t,{ref:i})})}const X1=({children:t,initial:e,isPresent:n,onExitComplete:i,custom:r,presenceAffectsLayout:s,mode:o})=>{const a=Fc(Y1),l=se.useId(),u=se.useCallback(d=>{a.set(d,!0);for(const f of a.values())if(!f)return;i&&i()},[a,i]),c=se.useMemo(()=>({id:l,initial:e,isPresent:n,custom:r,onExitComplete:u,register:d=>(a.set(d,!1),()=>a.delete(d))}),s?[Math.random(),u]:[n,u]);return se.useMemo(()=>{a.forEach((d,f)=>a.set(f,!1))},[n]),se.useEffect(()=>{!n&&!a.size&&i&&i()},[n]),o==="popLayout"&&(t=ge.jsx(W1,{isPresent:n,children:t})),ge.jsx(Oc.Provider,{value:c,children:t})};function Y1(){return new Map}function LS(t=!0){const e=se.useContext(Oc);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=se.useId();se.useEffect(()=>{t&&r(s)},[t]);const o=se.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const Bl=t=>t.key||"";function z0(t){const e=[];return se.Children.forEach(t,n=>{se.isValidElement(n)&&e.push(n)}),e}const ym=typeof window<"u",DS=ym?se.useLayoutEffect:se.useEffect,IS=({children:t,custom:e,initial:n=!0,onExitComplete:i,presenceAffectsLayout:r=!0,mode:s="sync",propagate:o=!1})=>{const[a,l]=LS(o),u=se.useMemo(()=>z0(t),[t]),c=o&&!a?[]:u.map(Bl),d=se.useRef(!0),f=se.useRef(u),p=Fc(()=>new Map),[m,S]=se.useState(u),[g,h]=se.useState(u);DS(()=>{d.current=!1,f.current=u;for(let _=0;_<g.length;_++){const T=Bl(g[_]);c.includes(T)?p.delete(T):p.get(T)!==!0&&p.set(T,!1)}},[g,c.length,c.join("-")]);const v=[];if(u!==m){let _=[...u];for(let T=0;T<g.length;T++){const E=g[T],C=Bl(E);c.includes(C)||(_.splice(T,0,E),v.push(E))}s==="wait"&&v.length&&(_=v),h(z0(_)),S(u);return}const{forceRender:y}=se.useContext(xm);return ge.jsx(ge.Fragment,{children:g.map(_=>{const T=Bl(_),E=o&&!a?!1:u===g||c.includes(T),C=()=>{if(p.has(T))p.set(T,!0);else return;let x=!0;p.forEach(A=>{A||(x=!1)}),x&&(y==null||y(),h(f.current),o&&(l==null||l()),i&&i())};return ge.jsx(X1,{isPresent:E,initial:!d.current||n?void 0:!1,custom:E?void 0:e,presenceAffectsLayout:r,mode:s,onExitComplete:E?void 0:C,children:_},T)})})},In=t=>t;let NS=In;function Sm(t){let e;return()=>(e===void 0&&(e=t()),e)}const fs=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i},Ei=t=>t*1e3,Ti=t=>t/1e3,$1={useManualTiming:!1};function q1(t){let e=new Set,n=new Set,i=!1,r=!1;const s=new WeakSet;let o={delta:0,timestamp:0,isProcessing:!1};function a(u){s.has(u)&&(l.schedule(u),t()),u(o)}const l={schedule:(u,c=!1,d=!1)=>{const p=d&&i?e:n;return c&&s.add(u),p.has(u)||p.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(o=u,i){r=!0;return}i=!0,[e,n]=[n,e],e.forEach(a),e.clear(),i=!1,r&&(r=!1,l.process(u))}};return l}const kl=["read","resolveKeyframes","update","preRender","render","postRender"],K1=40;function US(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=kl.reduce((h,v)=>(h[v]=q1(s),h),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:d,postRender:f}=o,p=()=>{const h=performance.now();n=!1,r.delta=i?1e3/60:Math.max(Math.min(h-r.timestamp,K1),1),r.timestamp=h,r.isProcessing=!0,a.process(r),l.process(r),u.process(r),c.process(r),d.process(r),f.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(p))},m=()=>{n=!0,i=!0,r.isProcessing||t(p)};return{schedule:kl.reduce((h,v)=>{const y=o[v];return h[v]=(_,T=!1,E=!1)=>(n||m(),y.schedule(_,T,E)),h},{}),cancel:h=>{for(let v=0;v<kl.length;v++)o[kl[v]].cancel(h)},state:r,steps:o}}const{schedule:ht,cancel:Lr,state:Zt,steps:Af}=US(typeof requestAnimationFrame<"u"?requestAnimationFrame:In,!0),FS=se.createContext({strict:!1}),H0={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Mo={};for(const t in H0)Mo[t]={isEnabled:e=>H0[t].some(n=>!!e[n])};function Z1(t){for(const e in t)Mo[e]={...Mo[e],...t[e]}}const j1=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function oc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||j1.has(t)}let OS=t=>!oc(t);function J1(t){t&&(OS=e=>e.startsWith("on")?!oc(e):t(e))}try{J1(require("@emotion/is-prop-valid").default)}catch{}function Q1(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(OS(r)||n===!0&&oc(r)||!e&&!oc(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}function eA(t){if(typeof Proxy>"u")return t;const e=new Map,n=(...i)=>t(...i);return new Proxy(n,{get:(i,r)=>r==="create"?t:(e.has(r)||e.set(r,t(r)),e.get(r))})}const kc=se.createContext({});function ja(t){return typeof t=="string"||Array.isArray(t)}function Vc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}const Mm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Em=["initial",...Mm];function zc(t){return Vc(t.animate)||Em.some(e=>ja(t[e]))}function BS(t){return!!(zc(t)||t.variants)}function tA(t,e){if(zc(t)){const{initial:n,animate:i}=t;return{initial:n===!1||ja(n)?n:void 0,animate:ja(i)?i:void 0}}return t.inherit!==!1?e:{}}function nA(t){const{initial:e,animate:n}=tA(t,se.useContext(kc));return se.useMemo(()=>({initial:e,animate:n}),[G0(e),G0(n)])}function G0(t){return Array.isArray(t)?t.join(" "):t}const iA=Symbol.for("motionComponentSymbol");function eo(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function rA(t,e,n){return se.useCallback(i=>{i&&t.onMount&&t.onMount(i),e&&(i?e.mount(i):e.unmount()),n&&(typeof n=="function"?n(i):eo(n)&&(n.current=i))},[e])}const Tm=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),sA="framerAppearId",kS="data-"+Tm(sA),{schedule:wm}=US(queueMicrotask,!1),VS=se.createContext({});function oA(t,e,n,i,r){var s,o;const{visualElement:a}=se.useContext(kc),l=se.useContext(FS),u=se.useContext(Oc),c=se.useContext(Bc).reducedMotion,d=se.useRef(null);i=i||l.renderer,!d.current&&i&&(d.current=i(t,{visualState:e,parent:a,props:n,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:c}));const f=d.current,p=se.useContext(VS);f&&!f.projection&&r&&(f.type==="html"||f.type==="svg")&&aA(d.current,n,r,p);const m=se.useRef(!1);se.useInsertionEffect(()=>{f&&m.current&&f.update(n,u)});const S=n[kS],g=se.useRef(!!S&&!(!((s=window.MotionHandoffIsComplete)===null||s===void 0)&&s.call(window,S))&&((o=window.MotionHasOptimisedAnimation)===null||o===void 0?void 0:o.call(window,S)));return DS(()=>{f&&(m.current=!0,window.MotionIsMounted=!0,f.updateFeatures(),wm.render(f.render),g.current&&f.animationState&&f.animationState.animateChanges())}),se.useEffect(()=>{f&&(!g.current&&f.animationState&&f.animationState.animateChanges(),g.current&&(queueMicrotask(()=>{var h;(h=window.MotionHandoffMarkAsComplete)===null||h===void 0||h.call(window,S)}),g.current=!1))}),f}function aA(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:zS(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&eo(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}function zS(t){if(t)return t.options.allowProjection!==!1?t.projection:zS(t.parent)}function lA({preloadedFeatures:t,createVisualElement:e,useRender:n,useVisualState:i,Component:r}){var s,o;t&&Z1(t);function a(u,c){let d;const f={...se.useContext(Bc),...u,layoutId:uA(u)},{isStatic:p}=f,m=nA(u),S=i(u,p);if(!p&&ym){cA();const g=fA(f);d=g.MeasureLayout,m.visualElement=oA(r,S,f,e,g.ProjectionNode)}return ge.jsxs(kc.Provider,{value:m,children:[d&&m.visualElement?ge.jsx(d,{visualElement:m.visualElement,...f}):null,n(r,u,rA(S,m.visualElement,c),S,p,m.visualElement)]})}a.displayName=`motion.${typeof r=="string"?r:`create(${(o=(s=r.displayName)!==null&&s!==void 0?s:r.name)!==null&&o!==void 0?o:""})`}`;const l=se.forwardRef(a);return l[iA]=r,l}function uA({layoutId:t}){const e=se.useContext(xm).id;return e&&t!==void 0?e+"-"+t:t}function cA(t,e){se.useContext(FS).strict}function fA(t){const{drag:e,layout:n}=Mo;if(!e&&!n)return{};const i={...e,...n};return{MeasureLayout:e!=null&&e.isEnabled(t)||n!=null&&n.isEnabled(t)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}const dA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Am(t){return typeof t!="string"||t.includes("-")?!1:!!(dA.indexOf(t)>-1||/[A-Z]/u.test(t))}function W0(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Cm(t,e,n,i){if(typeof e=="function"){const[r,s]=W0(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=W0(i);e=e(n!==void 0?n:t.custom,r,s)}return e}const vh=t=>Array.isArray(t),hA=t=>!!(t&&typeof t=="object"&&t.mix&&t.toValue),pA=t=>vh(t)?t[t.length-1]||0:t,Xt=t=>!!(t&&t.getVelocity);function Cu(t){const e=Xt(t)?t.get():t;return hA(e)?e.toValue():e}function mA({scrapeMotionValuesFromProps:t,createRenderState:e,onUpdate:n},i,r,s){const o={latestValues:gA(i,r,s,t),renderState:e()};return n&&(o.onMount=a=>n({props:i,current:a,...o}),o.onUpdate=a=>n(a)),o}const HS=t=>(e,n)=>{const i=se.useContext(kc),r=se.useContext(Oc),s=()=>mA(t,e,i,r);return n?s():Fc(s)};function gA(t,e,n,i){const r={},s=i(t,{});for(const f in s)r[f]=Cu(s[f]);let{initial:o,animate:a}=t;const l=zc(t),u=BS(t);e&&u&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let c=n?n.initial===!1:!1;c=c||o===!1;const d=c?a:o;if(d&&typeof d!="boolean"&&!Vc(d)){const f=Array.isArray(d)?d:[d];for(let p=0;p<f.length;p++){const m=Cm(t,f[p]);if(m){const{transitionEnd:S,transition:g,...h}=m;for(const v in h){let y=h[v];if(Array.isArray(y)){const _=c?y.length-1:0;y=y[_]}y!==null&&(r[v]=y)}for(const v in S)r[v]=S[v]}}}return r}const Uo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vs=new Set(Uo),GS=t=>e=>typeof e=="string"&&e.startsWith(t),WS=GS("--"),vA=GS("var(--"),Rm=t=>vA(t)?_A.test(t.split("/*")[0].trim()):!1,_A=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,XS=(t,e)=>e&&typeof t=="number"?e.transform(t):t,Zi=(t,e,n)=>n>e?e:n<t?t:n,Fo={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ja={...Fo,transform:t=>Zi(0,1,t)},Vl={...Fo,default:1},pl=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),fr=pl("deg"),wi=pl("%"),Fe=pl("px"),xA=pl("vh"),yA=pl("vw"),X0={...wi,parse:t=>wi.parse(t)/100,transform:t=>wi.transform(t*100)},SA={borderWidth:Fe,borderTopWidth:Fe,borderRightWidth:Fe,borderBottomWidth:Fe,borderLeftWidth:Fe,borderRadius:Fe,radius:Fe,borderTopLeftRadius:Fe,borderTopRightRadius:Fe,borderBottomRightRadius:Fe,borderBottomLeftRadius:Fe,width:Fe,maxWidth:Fe,height:Fe,maxHeight:Fe,top:Fe,right:Fe,bottom:Fe,left:Fe,padding:Fe,paddingTop:Fe,paddingRight:Fe,paddingBottom:Fe,paddingLeft:Fe,margin:Fe,marginTop:Fe,marginRight:Fe,marginBottom:Fe,marginLeft:Fe,backgroundPositionX:Fe,backgroundPositionY:Fe},MA={rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scale:Vl,scaleX:Vl,scaleY:Vl,scaleZ:Vl,skew:fr,skewX:fr,skewY:fr,distance:Fe,translateX:Fe,translateY:Fe,translateZ:Fe,x:Fe,y:Fe,z:Fe,perspective:Fe,transformPerspective:Fe,opacity:Ja,originX:X0,originY:X0,originZ:Fe},Y0={...Fo,transform:Math.round},bm={...SA,...MA,zIndex:Y0,size:Fe,fillOpacity:Ja,strokeOpacity:Ja,numOctaves:Y0},EA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},TA=Uo.length;function wA(t,e,n){let i="",r=!0;for(let s=0;s<TA;s++){const o=Uo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number"?l=a===(o.startsWith("scale")?1:0):l=parseFloat(a)===0,!l||n){const u=XS(a,bm[o]);if(!l){r=!1;const c=EA[o]||o;i+=`${c}(${u}) `}n&&(e[o]=u)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Pm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const u=e[l];if(vs.has(l)){o=!0;continue}else if(WS(l)){r[l]=u;continue}else{const c=XS(u,bm[l]);l.startsWith("origin")?(a=!0,s[l]=c):i[l]=c}}if(e.transform||(o||n?i.transform=wA(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:u="50%",originZ:c=0}=s;i.transformOrigin=`${l} ${u} ${c}`}}const AA={offset:"stroke-dashoffset",array:"stroke-dasharray"},CA={offset:"strokeDashoffset",array:"strokeDasharray"};function RA(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?AA:CA;t[s.offset]=Fe.transform(-i);const o=Fe.transform(e),a=Fe.transform(n);t[s.array]=`${o} ${a}`}function $0(t,e,n){return typeof t=="string"?t:Fe.transform(e+n*t)}function bA(t,e,n){const i=$0(e,t.x,t.width),r=$0(n,t.y,t.height);return`${i} ${r}`}function Lm(t,{attrX:e,attrY:n,attrScale:i,originX:r,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,d){if(Pm(t,u,d),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:f,style:p,dimensions:m}=t;f.transform&&(m&&(p.transform=f.transform),delete f.transform),m&&(r!==void 0||s!==void 0||p.transform)&&(p.transformOrigin=bA(m,r!==void 0?r:.5,s!==void 0?s:.5)),e!==void 0&&(f.x=e),n!==void 0&&(f.y=n),i!==void 0&&(f.scale=i),o!==void 0&&RA(f,o,a,l,!1)}const Dm=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),YS=()=>({...Dm(),attrs:{}}),Im=t=>typeof t=="string"&&t.toLowerCase()==="svg";function $S(t,{style:e,vars:n},i,r){Object.assign(t.style,e,r&&r.getProjectionStyles(i));for(const s in n)t.style.setProperty(s,n[s])}const qS=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function KS(t,e,n,i){$S(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(qS.has(r)?r:Tm(r),e.attrs[r])}const ac={};function PA(t){Object.assign(ac,t)}function ZS(t,{layout:e,layoutId:n}){return vs.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!ac[t]||t==="opacity")}function Nm(t,e,n){var i;const{style:r}=t,s={};for(const o in r)(Xt(r[o])||e.style&&Xt(e.style[o])||ZS(o,t)||((i=n==null?void 0:n.getValue(o))===null||i===void 0?void 0:i.liveStyle)!==void 0)&&(s[o]=r[o]);return s}function jS(t,e,n){const i=Nm(t,e,n);for(const r in t)if(Xt(t[r])||Xt(e[r])){const s=Uo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}function LA(t,e){try{e.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const q0=["x","y","width","height","cx","cy","r"],DA={useVisualState:HS({scrapeMotionValuesFromProps:jS,createRenderState:YS,onUpdate:({props:t,prevProps:e,current:n,renderState:i,latestValues:r})=>{if(!n)return;let s=!!t.drag;if(!s){for(const a in r)if(vs.has(a)){s=!0;break}}if(!s)return;let o=!e;if(e)for(let a=0;a<q0.length;a++){const l=q0[a];t[l]!==e[l]&&(o=!0)}o&&ht.read(()=>{LA(n,i),ht.render(()=>{Lm(i,r,Im(n.tagName),t.transformTemplate),KS(n,i)})})}})},IA={useVisualState:HS({scrapeMotionValuesFromProps:Nm,createRenderState:Dm})};function JS(t,e,n){for(const i in e)!Xt(e[i])&&!ZS(i,n)&&(t[i]=e[i])}function NA({transformTemplate:t},e){return se.useMemo(()=>{const n=Dm();return Pm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function UA(t,e){const n=t.style||{},i={};return JS(i,n,t),Object.assign(i,NA(t,e)),i}function FA(t,e){const n={},i=UA(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}function OA(t,e,n,i){const r=se.useMemo(()=>{const s=YS();return Lm(s,e,Im(i),t.transformTemplate),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};JS(s,t.style,t),r.style={...s,...r.style}}return r}function BA(t=!1){return(n,i,r,{latestValues:s},o)=>{const l=(Am(n)?OA:FA)(i,s,o,n),u=Q1(i,typeof n=="string",t),c=n!==se.Fragment?{...u,...l,ref:r}:{},{children:d}=i,f=se.useMemo(()=>Xt(d)?d.get():d,[d]);return se.createElement(n,{...c,children:f})}}function kA(t,e){return function(i,{forwardMotionProps:r}={forwardMotionProps:!1}){const o={...Am(i)?DA:IA,preloadedFeatures:t,useRender:BA(r),createVisualElement:e,Component:i};return lA(o)}}function QS(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}function Hc(t,e,n){const i=t.getProps();return Cm(i,e,n!==void 0?n:i.custom,t)}const VA=Sm(()=>window.ScrollTimeline!==void 0);class zA{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,n){for(let i=0;i<this.animations.length;i++)this.animations[i][e]=n}attachTimeline(e,n){const i=this.animations.map(r=>{if(VA()&&r.attachTimeline)return r.attachTimeline(e);if(typeof n=="function")return n(r)});return()=>{i.forEach((r,s)=>{r&&r(),this.animations[s].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let n=0;n<this.animations.length;n++)e=Math.max(e,this.animations[n].duration);return e}runAll(e){this.animations.forEach(n=>n[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eM extends zA{then(e,n){return Promise.all(this.animations).then(e).catch(n)}}function Um(t,e){return t?t[e]||t.default||t:void 0}const lc=2e4;function Fm(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<lc;)e+=n,i=t.next(e);return e>=lc?1/0:e}function HA(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Fm(i),lc);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Ti(r)}}function Gc(t){return typeof t=="function"}function K0(t,e){t.timeline=e,t.onfinish=null}const Om=t=>Array.isArray(t)&&typeof t[0]=="number",GA={linearEasing:void 0};function WA(t,e){const n=Sm(t);return()=>{var i;return(i=GA[e])!==null&&i!==void 0?i:n()}}const uc=WA(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),tM=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=t(fs(0,r-1,s))+", ";return`linear(${i.substring(0,i.length-2)})`};function nM(t){return!!(typeof t=="function"&&uc()||!t||typeof t=="string"&&(t in _h||uc())||Om(t)||Array.isArray(t)&&t.every(nM))}const ua=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,_h={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ua([0,.65,.55,1]),circOut:ua([.55,0,1,.45]),backIn:ua([.31,.01,.66,-.59]),backOut:ua([.33,1.53,.69,.99])};function iM(t,e){if(t)return typeof t=="function"&&uc()?tM(t,e):Om(t)?ua(t):Array.isArray(t)?t.map(n=>iM(n,e)||_h.easeOut):_h[t]}const Qn={x:!1,y:!1};function rM(){return Qn.x||Qn.y}function sM(t,e,n){var i;if(t instanceof Element)return[t];if(typeof t=="string"){let r=document;const s=(i=n==null?void 0:n[t])!==null&&i!==void 0?i:r.querySelectorAll(t);return s?Array.from(s):[]}return Array.from(t)}function oM(t,e){const n=sM(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function Z0(t){return e=>{e.pointerType==="touch"||rM()||t(e)}}function XA(t,e,n={}){const[i,r,s]=oM(t,n),o=Z0(a=>{const{target:l}=a,u=e(a);if(typeof u!="function"||!l)return;const c=Z0(d=>{u(d),l.removeEventListener("pointerleave",c)});l.addEventListener("pointerleave",c,r)});return i.forEach(a=>{a.addEventListener("pointerenter",o,r)}),s}const aM=(t,e)=>e?t===e?!0:aM(t,e.parentElement):!1,Bm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,YA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function $A(t){return YA.has(t.tagName)||t.tabIndex!==-1}const ca=new WeakSet;function j0(t){return e=>{e.key==="Enter"&&t(e)}}function Cf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const qA=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=j0(()=>{if(ca.has(n))return;Cf(n,"down");const r=j0(()=>{Cf(n,"up")}),s=()=>Cf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function J0(t){return Bm(t)&&!rM()}function KA(t,e,n={}){const[i,r,s]=oM(t,n),o=a=>{const l=a.currentTarget;if(!J0(a)||ca.has(l))return;ca.add(l);const u=e(a),c=(p,m)=>{window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",f),!(!J0(p)||!ca.has(l))&&(ca.delete(l),typeof u=="function"&&u(p,{success:m}))},d=p=>{c(p,n.useGlobalTarget||aM(l,p.target))},f=p=>{c(p,!1)};window.addEventListener("pointerup",d,r),window.addEventListener("pointercancel",f,r)};return i.forEach(a=>{!$A(a)&&a.getAttribute("tabindex")===null&&(a.tabIndex=0),(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),a.addEventListener("focus",u=>qA(u,r),r)}),s}function ZA(t){return t==="x"||t==="y"?Qn[t]?null:(Qn[t]=!0,()=>{Qn[t]=!1}):Qn.x||Qn.y?null:(Qn.x=Qn.y=!0,()=>{Qn.x=Qn.y=!1})}const lM=new Set(["width","height","top","left","right","bottom",...Uo]);let Ru;function jA(){Ru=void 0}const Ai={now:()=>(Ru===void 0&&Ai.set(Zt.isProcessing||$1.useManualTiming?Zt.timestamp:performance.now()),Ru),set:t=>{Ru=t,queueMicrotask(jA)}};function km(t,e){t.indexOf(e)===-1&&t.push(e)}function Wc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}class Vm{constructor(){this.subscriptions=[]}add(e){return km(this.subscriptions,e),()=>Wc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function uM(t,e){return e?t*(1e3/e):0}const Q0=30,JA=t=>!isNaN(parseFloat(t));class QA{constructor(e,n={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(i,r=!0)=>{const s=Ai.now();this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=Ai.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=JA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Vm);const i=this.events[e].add(n);return e==="change"?()=>{i(),ht.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e,n=!0){!n||!this.passiveEffect?this.updateAndNotify(e,n):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ai.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Q0)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Q0);return uM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Eo(t,e){return new QA(t,e)}function eC(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,Eo(n))}function tC(t,e){const n=Hc(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=pA(s[o]);eC(t,o,a)}}function nC(t){return!!(Xt(t)&&t.add)}function xh(t,e){const n=t.getValue("willChange");if(nC(n))return n.add(e)}function cM(t){return t.props[kS]}const fM=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,iC=1e-7,rC=12;function sC(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=fM(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>iC&&++a<rC);return o}function ml(t,e,n,i){if(t===e&&n===i)return In;const r=s=>sC(s,0,1,t,n);return s=>s===0||s===1?s:fM(r(s),e,i)}const dM=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,hM=t=>e=>1-t(1-e),pM=ml(.33,1.53,.69,.99),zm=hM(pM),mM=dM(zm),gM=t=>(t*=2)<1?.5*zm(t):.5*(2-Math.pow(2,-10*(t-1))),Hm=t=>1-Math.sin(Math.acos(t)),vM=hM(Hm),_M=dM(Hm),xM=t=>/^0[^.\s]+$/u.test(t);function oC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||xM(t):!0}const wa=t=>Math.round(t*1e5)/1e5,Gm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function aC(t){return t==null}const lC=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Wm=(t,e)=>n=>!!(typeof n=="string"&&lC.test(n)&&n.startsWith(t)||e&&!aC(n)&&Object.prototype.hasOwnProperty.call(n,e)),yM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Gm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},uC=t=>Zi(0,255,t),Rf={...Fo,transform:t=>Math.round(uC(t))},es={test:Wm("rgb","red"),parse:yM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Rf.transform(t)+", "+Rf.transform(e)+", "+Rf.transform(n)+", "+wa(Ja.transform(i))+")"};function cC(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const yh={test:Wm("#"),parse:cC,transform:es.transform},to={test:Wm("hsl","hue"),parse:yM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+wi.transform(wa(e))+", "+wi.transform(wa(n))+", "+wa(Ja.transform(i))+")"},sn={test:t=>es.test(t)||yh.test(t)||to.test(t),parse:t=>es.test(t)?es.parse(t):to.test(t)?to.parse(t):yh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?es.transform(t):to.transform(t)},fC=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function dC(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Gm))===null||e===void 0?void 0:e.length)||0)+(((n=t.match(fC))===null||n===void 0?void 0:n.length)||0)>0}const SM="number",MM="color",hC="var",pC="var(",ev="${}",mC=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Qa(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(mC,l=>(sn.test(l)?(i.color.push(s),r.push(MM),n.push(sn.parse(l))):l.startsWith(pC)?(i.var.push(s),r.push(hC),n.push(l)):(i.number.push(s),r.push(SM),n.push(parseFloat(l))),++s,ev)).split(ev);return{values:n,split:a,indexes:i,types:r}}function EM(t){return Qa(t).values}function TM(t){const{split:e,types:n}=Qa(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===SM?s+=wa(r[o]):a===MM?s+=sn.transform(r[o]):s+=r[o]}return s}}const gC=t=>typeof t=="number"?0:t;function vC(t){const e=EM(t);return TM(t)(e.map(gC))}const Dr={test:dC,parse:EM,createTransformer:TM,getAnimatableNone:vC},_C=new Set(["brightness","contrast","saturate","opacity"]);function xC(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Gm)||[];if(!i)return t;const r=n.replace(i,"");let s=_C.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const yC=/\b([a-z-]*)\(.*?\)/gu,Sh={...Dr,getAnimatableNone:t=>{const e=t.match(yC);return e?e.map(xC).join(" "):t}},SC={...bm,color:sn,backgroundColor:sn,outlineColor:sn,fill:sn,stroke:sn,borderColor:sn,borderTopColor:sn,borderRightColor:sn,borderBottomColor:sn,borderLeftColor:sn,filter:Sh,WebkitFilter:Sh},Xm=t=>SC[t];function wM(t,e){let n=Xm(t);return n!==Sh&&(n=Dr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const MC=new Set(["auto","none","0"]);function EC(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!MC.has(s)&&Qa(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=wM(n,r)}const tv=t=>t===Fo||t===Fe,nv=(t,e)=>parseFloat(t.split(", ")[e]),iv=(t,e)=>(n,{transform:i})=>{if(i==="none"||!i)return 0;const r=i.match(/^matrix3d\((.+)\)$/u);if(r)return nv(r[1],e);{const s=i.match(/^matrix\((.+)\)$/u);return s?nv(s[1],t):0}},TC=new Set(["x","y","z"]),wC=Uo.filter(t=>!TC.has(t));function AC(t){const e=[];return wC.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const To={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:iv(4,13),y:iv(5,14)};To.translateX=To.x;To.translateY=To.y;const ss=new Set;let Mh=!1,Eh=!1;function AM(){if(Eh){const t=Array.from(ss).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=AC(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))===null||a===void 0||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Eh=!1,Mh=!1,ss.forEach(t=>t.complete()),ss.clear()}function CM(){ss.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Eh=!0)})}function CC(){CM(),AM()}class Ym{constructor(e,n,i,r,s,o=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.isScheduled=!0,this.isAsync?(ss.add(this),Mh||(Mh=!0,ht.read(CM),ht.resolveKeyframes(AM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;for(let s=0;s<e.length;s++)if(e[s]===null)if(s===0){const o=r==null?void 0:r.get(),a=e[e.length-1];if(o!==void 0)e[0]=o;else if(i&&n){const l=i.readValue(n,a);l!=null&&(e[0]=l)}e[0]===void 0&&(e[0]=a),r&&o===void 0&&r.set(e[0])}else e[s]=e[s-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),ss.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,ss.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const RM=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),RC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function bC(t){const e=RC.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function bM(t,e,n=1){const[i,r]=bC(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return RM(o)?parseFloat(o):o}return Rm(r)?bM(r,e,n+1):r}const PM=t=>e=>e.test(t),PC={test:t=>t==="auto",parse:t=>t},LM=[Fo,Fe,wi,fr,yA,xA,PC],rv=t=>LM.find(PM(t));class DM extends Ym{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let l=0;l<e.length;l++){let u=e[l];if(typeof u=="string"&&(u=u.trim(),Rm(u))){const c=bM(u,n.current);c!==void 0&&(e[l]=c),l===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!lM.has(i)||e.length!==2)return;const[r,s]=e,o=rv(r),a=rv(s);if(o!==a)if(tv(o)&&tv(a))for(let l=0;l<e.length;l++){const u=e[l];typeof u=="string"&&(e[l]=parseFloat(u))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)oC(e[r])&&i.push(r);i.length&&EC(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=To[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var e;const{element:n,name:i,unresolvedKeyframes:r}=this;if(!n||!n.current)return;const s=n.getValue(i);s&&s.jump(this.measuredOrigin,!1);const o=r.length-1,a=r[o];r[o]=To[i](n.measureViewportBox(),window.getComputedStyle(n.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([l,u])=>{n.getValue(l).set(u)}),this.resolveNoneKeyframes()}}const sv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Dr.test(t)||t==="0")&&!t.startsWith("url("));function LC(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function DC(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=sv(r,e),a=sv(s,e);return!o||!a?!1:LC(t)||(n==="spring"||Gc(n))&&i}const IC=t=>t!==null;function Xc(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(IC),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return!s||i===void 0?r[s]:i}const NC=40;class IM{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",...a}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ai.now(),this.options={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,...a},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>NC?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&CC(),this._resolved}onKeyframesResolved(e,n){this.resolvedAt=Ai.now(),this.hasAttemptedResolve=!0;const{name:i,type:r,velocity:s,delay:o,onComplete:a,onUpdate:l,isGenerator:u}=this.options;if(!u&&!DC(e,i,r,s))if(o)this.options.duration=0;else{l&&l(Xc(e,this.options,n)),a&&a(),this.resolveFinishedPromise();return}const c=this.initPlayback(e,n);c!==!1&&(this._resolved={keyframes:e,finalKeyframe:n,...c},this.onPostResolved())}onPostResolved(){}then(e,n){return this.currentFinishedPromise.then(e,n)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const mt=(t,e,n)=>t+(e-t)*n;function bf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function UC({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=bf(l,a,t+1/3),s=bf(l,a,t),o=bf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function cc(t,e){return n=>n>0?e:t}const Pf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},FC=[yh,es,to],OC=t=>FC.find(e=>e.test(t));function ov(t){const e=OC(t);if(!e)return!1;let n=e.parse(t);return e===to&&(n=UC(n)),n}const av=(t,e)=>{const n=ov(t),i=ov(e);if(!n||!i)return cc(t,e);const r={...n};return s=>(r.red=Pf(n.red,i.red,s),r.green=Pf(n.green,i.green,s),r.blue=Pf(n.blue,i.blue,s),r.alpha=mt(n.alpha,i.alpha,s),es.transform(r))},BC=(t,e)=>n=>e(t(n)),gl=(...t)=>t.reduce(BC),Th=new Set(["none","hidden"]);function kC(t,e){return Th.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function VC(t,e){return n=>mt(t,e,n)}function $m(t){return typeof t=="number"?VC:typeof t=="string"?Rm(t)?cc:sn.test(t)?av:GC:Array.isArray(t)?NM:typeof t=="object"?sn.test(t)?av:zC:cc}function NM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>$m(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function zC(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=$m(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function HC(t,e){var n;const i=[],r={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){const o=e.types[s],a=t.indexes[o][r[o]],l=(n=t.values[a])!==null&&n!==void 0?n:0;i[s]=l,r[o]++}return i}const GC=(t,e)=>{const n=Dr.createTransformer(e),i=Qa(t),r=Qa(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Th.has(t)&&!r.values.length||Th.has(e)&&!i.values.length?kC(t,e):gl(NM(HC(i,r),r.values),n):cc(t,e)};function UM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?mt(t,e,n):$m(t)(t,e)}const WC=5;function FM(t,e,n){const i=Math.max(e-WC,0);return uM(n-t(i),e-i)}const wt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Lf=.001;function XC({duration:t=wt.duration,bounce:e=wt.bounce,velocity:n=wt.velocity,mass:i=wt.mass}){let r,s,o=1-e;o=Zi(wt.minDamping,wt.maxDamping,o),t=Zi(wt.minDuration,wt.maxDuration,Ti(t)),o<1?(r=u=>{const c=u*o,d=c*t,f=c-n,p=wh(u,o),m=Math.exp(-d);return Lf-f/p*m},s=u=>{const d=u*o*t,f=d*n+n,p=Math.pow(o,2)*Math.pow(u,2)*t,m=Math.exp(-d),S=wh(Math.pow(u,2),o);return(-r(u)+Lf>0?-1:1)*((f-p)*m)/S}):(r=u=>{const c=Math.exp(-u*t),d=(u-n)*t+1;return-Lf+c*d},s=u=>{const c=Math.exp(-u*t),d=(n-u)*(t*t);return c*d});const a=5/t,l=$C(r,s,a);if(t=Ei(t),isNaN(l))return{stiffness:wt.stiffness,damping:wt.damping,duration:t};{const u=Math.pow(l,2)*i;return{stiffness:u,damping:o*2*Math.sqrt(i*u),duration:t}}}const YC=12;function $C(t,e,n){let i=n;for(let r=1;r<YC;r++)i=i-t(i)/e(i);return i}function wh(t,e){return t*Math.sqrt(1-e*e)}const qC=["duration","bounce"],KC=["stiffness","damping","mass"];function lv(t,e){return e.some(n=>t[n]!==void 0)}function ZC(t){let e={velocity:wt.velocity,stiffness:wt.stiffness,damping:wt.damping,mass:wt.mass,isResolvedFromDuration:!1,...t};if(!lv(t,KC)&&lv(t,qC))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*Zi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:wt.mass,stiffness:r,damping:s}}else{const n=XC(t);e={...e,...n,mass:wt.mass},e.isResolvedFromDuration=!0}return e}function qm(t=wt.visualDuration,e=wt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:d,velocity:f,isResolvedFromDuration:p}=ZC({...n,velocity:-Ti(n.velocity||0)}),m=f||0,S=u/(2*Math.sqrt(l*c)),g=o-s,h=Ti(Math.sqrt(l/c)),v=Math.abs(g)<5;i||(i=v?wt.restSpeed.granular:wt.restSpeed.default),r||(r=v?wt.restDelta.granular:wt.restDelta.default);let y;if(S<1){const T=wh(h,S);y=E=>{const C=Math.exp(-S*h*E);return o-C*((m+S*h*g)/T*Math.sin(T*E)+g*Math.cos(T*E))}}else if(S===1)y=T=>o-Math.exp(-h*T)*(g+(m+h*g)*T);else{const T=h*Math.sqrt(S*S-1);y=E=>{const C=Math.exp(-S*h*E),x=Math.min(T*E,300);return o-C*((m+S*h*g)*Math.sinh(x)+T*g*Math.cosh(x))/T}}const _={calculatedDuration:p&&d||null,next:T=>{const E=y(T);if(p)a.done=T>=d;else{let C=0;S<1&&(C=T===0?Ei(m):FM(y,T,E));const x=Math.abs(C)<=i,A=Math.abs(o-E)<=r;a.done=x&&A}return a.value=a.done?o:E,a},toString:()=>{const T=Math.min(Fm(_),lc),E=tM(C=>_.next(T*C).value,T,30);return T+"ms "+E}};return _}function uv({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){const d=t[0],f={done:!1,value:d},p=x=>a!==void 0&&x<a||l!==void 0&&x>l,m=x=>a===void 0?l:l===void 0||Math.abs(a-x)<Math.abs(l-x)?a:l;let S=n*e;const g=d+S,h=o===void 0?g:o(g);h!==g&&(S=h-d);const v=x=>-S*Math.exp(-x/i),y=x=>h+v(x),_=x=>{const A=v(x),b=y(x);f.done=Math.abs(A)<=u,f.value=f.done?h:b};let T,E;const C=x=>{p(f.value)&&(T=x,E=qm({keyframes:[f.value,m(f.value)],velocity:FM(y,x,f.value),damping:r,stiffness:s,restDelta:u,restSpeed:c}))};return C(0),{calculatedDuration:null,next:x=>{let A=!1;return!E&&T===void 0&&(A=!0,_(x),C(x)),T!==void 0&&x>=T?E.next(x-T):(!A&&_(x),f)}}}const jC=ml(.42,0,1,1),JC=ml(0,0,.58,1),OM=ml(.42,0,.58,1),BM=t=>Array.isArray(t)&&typeof t[0]!="number",QC={linear:In,easeIn:jC,easeInOut:OM,easeOut:JC,circIn:Hm,circInOut:_M,circOut:vM,backIn:zm,backInOut:mM,backOut:pM,anticipate:gM},cv=t=>{if(Om(t)){NS(t.length===4);const[e,n,i,r]=t;return ml(e,n,i,r)}else if(typeof t=="string")return QC[t];return t};function eR(t,e,n){const i=[],r=n||UM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||In:e;a=gl(l,a)}i.push(a)}return i}function tR(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(NS(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=eR(e,i,r),l=a.length,u=c=>{if(o&&c<t[0])return e[0];let d=0;if(l>1)for(;d<t.length-2&&!(c<t[d+1]);d++);const f=fs(t[d],t[d+1],c);return a[d](f)};return n?c=>u(Zi(t[0],t[s-1],c)):u}function kM(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=fs(0,e,i);t.push(mt(n,1,r))}}function VM(t){const e=[0];return kM(e,t.length-1),e}function nR(t,e){return t.map(n=>n*e)}function iR(t,e){return t.map(()=>e||OM).splice(0,t.length-1)}function fc({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=BM(i)?i.map(cv):cv(i),s={done:!1,value:e[0]},o=nR(n&&n.length===e.length?n:VM(e),t),a=tR(o,e,{ease:Array.isArray(r)?r:iR(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const rR=t=>{const e=({timestamp:n})=>t(n);return{start:()=>ht.update(e,!0),stop:()=>Lr(e),now:()=>Zt.isProcessing?Zt.timestamp:Ai.now()}},sR={decay:uv,inertia:uv,tween:fc,keyframes:fc,spring:qm},oR=t=>t/100;class Km extends IM{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:l}=this.options;l&&l()};const{name:n,motionValue:i,element:r,keyframes:s}=this.options,o=(r==null?void 0:r.KeyframeResolver)||Ym,a=(l,u)=>this.onKeyframesResolved(l,u);this.resolver=new o(s,a,n,i,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:n="keyframes",repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=this.options,a=Gc(n)?n:sR[n]||fc;let l,u;a!==fc&&typeof e[0]!="number"&&(l=gl(oR,UM(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});s==="mirror"&&(u=a({...this.options,keyframes:[...e].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Fm(c));const{calculatedDuration:d}=c,f=d+r,p=f*(i+1)-r;return{generator:c,mirroredGenerator:u,mapPercentToKeyframes:l,calculatedDuration:d,resolvedDuration:f,totalDuration:p}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,n=!1){const{resolved:i}=this;if(!i){const{keyframes:x}=this.options;return{done:!0,value:x[x.length-1]}}const{finalKeyframe:r,generator:s,mirroredGenerator:o,mapPercentToKeyframes:a,keyframes:l,calculatedDuration:u,totalDuration:c,resolvedDuration:d}=i;if(this.startTime===null)return s.next(0);const{delay:f,repeat:p,repeatType:m,repeatDelay:S,onUpdate:g}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),n?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const h=this.currentTime-f*(this.speed>=0?1:-1),v=this.speed>=0?h<0:h>c;this.currentTime=Math.max(h,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=c);let y=this.currentTime,_=s;if(p){const x=Math.min(this.currentTime,c)/d;let A=Math.floor(x),b=x%1;!b&&x>=1&&(b=1),b===1&&A--,A=Math.min(A,p+1),!!(A%2)&&(m==="reverse"?(b=1-b,S&&(b-=S/d)):m==="mirror"&&(_=o)),y=Zi(0,1,b)*d}const T=v?{done:!1,value:l[0]}:_.next(y);a&&(T.value=a(T.value));let{done:E}=T;!v&&u!==null&&(E=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&E);return C&&r!==void 0&&(T.value=Xc(l,this.options,r)),g&&g(T.value),C&&this.finish(),T}get duration(){const{resolved:e}=this;return e?Ti(e.calculatedDuration):0}get time(){return Ti(this.currentTime)}set time(e){e=Ei(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Ti(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=rR,onPlay:n,startTime:i}=this.options;this.driver||(this.driver=e(s=>this.tick(s))),n&&n();const r=this.driver.now();this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=r):this.startTime=i??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const aR=new Set(["opacity","clipPath","filter","transform"]);function lR(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeInOut",times:l}={}){const u={[e]:n};l&&(u.offset=l);const c=iM(a,r);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:r,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"})}const uR=Sm(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),dc=10,cR=2e4;function fR(t){return Gc(t.type)||t.type==="spring"||!nM(t.ease)}function dR(t,e){const n=new Km({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0});let i={done:!1,value:t[0]};const r=[];let s=0;for(;!i.done&&s<cR;)i=n.sample(s),r.push(i.value),s+=dc;return{times:void 0,keyframes:r,duration:s-dc,ease:"linear"}}const zM={anticipate:gM,backInOut:mM,circInOut:_M};function hR(t){return t in zM}class fv extends IM{constructor(e){super(e);const{name:n,motionValue:i,element:r,keyframes:s}=this.options;this.resolver=new DM(s,(o,a)=>this.onKeyframesResolved(o,a),n,i,r),this.resolver.scheduleResolve()}initPlayback(e,n){let{duration:i=300,times:r,ease:s,type:o,motionValue:a,name:l,startTime:u}=this.options;if(!a.owner||!a.owner.current)return!1;if(typeof s=="string"&&uc()&&hR(s)&&(s=zM[s]),fR(this.options)){const{onComplete:d,onUpdate:f,motionValue:p,element:m,...S}=this.options,g=dR(e,S);e=g.keyframes,e.length===1&&(e[1]=e[0]),i=g.duration,r=g.times,s=g.ease,o="keyframes"}const c=lR(a.owner.current,l,e,{...this.options,duration:i,times:r,ease:s});return c.startTime=u??this.calcStartTime(),this.pendingTimeline?(K0(c,this.pendingTimeline),this.pendingTimeline=void 0):c.onfinish=()=>{const{onComplete:d}=this.options;a.set(Xc(e,this.options,n)),d&&d(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:i,times:r,type:o,ease:s,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:n}=e;return Ti(n)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:n}=e;return Ti(n.currentTime||0)}set time(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.currentTime=Ei(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:n}=e;return n.playbackRate}set speed(e){const{resolved:n}=this;if(!n)return;const{animation:i}=n;i.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:n}=e;return n.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:n}=e;return n.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:n}=this;if(!n)return In;const{animation:i}=n;K0(i,e)}return In}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.playState==="finished"&&this.updateFinishedPromise(),n.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:n}=e;n.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:n,keyframes:i,duration:r,type:s,ease:o,times:a}=e;if(n.playState==="idle"||n.playState==="finished")return;if(this.time){const{motionValue:u,onUpdate:c,onComplete:d,element:f,...p}=this.options,m=new Km({...p,keyframes:i,duration:r,type:s,ease:o,times:a,isGenerator:!0}),S=Ei(this.time);u.setWithVelocity(m.sample(S-dc).value,m.sample(S).value,dc)}const{onStop:l}=this.options;l&&l(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:n,name:i,repeatDelay:r,repeatType:s,damping:o,type:a}=e;if(!n||!n.owner||!(n.owner.current instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:u}=n.owner.getProps();return uR()&&i&&aR.has(i)&&!l&&!u&&!r&&s!=="mirror"&&o!==0&&a!=="inertia"}}const pR={type:"spring",stiffness:500,damping:25,restSpeed:10},mR=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),gR={type:"keyframes",duration:.8},vR={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_R=(t,{keyframes:e})=>e.length>2?gR:vs.has(t)?t.startsWith("scale")?mR(e[1]):pR:vR;function xR({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}const Zm=(t,e,n,i={},r,s)=>o=>{const a=Um(i,t)||{},l=a.delay||i.delay||0;let{elapsed:u=0}=i;u=u-Ei(l);let c={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-u,onUpdate:f=>{e.set(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};xR(a)||(c={...c,..._R(t,c)}),c.duration&&(c.duration=Ei(c.duration)),c.repeatDelay&&(c.repeatDelay=Ei(c.repeatDelay)),c.from!==void 0&&(c.keyframes[0]=c.from);let d=!1;if((c.type===!1||c.duration===0&&!c.repeatDelay)&&(c.duration=0,c.delay===0&&(d=!0)),d&&!s&&e.get()!==void 0){const f=Xc(c.keyframes,a);if(f!==void 0)return ht.update(()=>{c.onUpdate(f),c.onComplete()}),new eM([])}return!s&&fv.supports(c)?new fv(c):new Km(c)};function yR({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function jm(t,e,{delay:n=0,transitionOverride:i,type:r}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);const u=[],c=r&&t.animationState&&t.animationState.getState()[r];for(const d in l){const f=t.getValue(d,(s=t.latestValues[d])!==null&&s!==void 0?s:null),p=l[d];if(p===void 0||c&&yR(c,d))continue;const m={delay:n,...Um(o||{},d)};let S=!1;if(window.MotionHandoffAnimation){const h=cM(t);if(h){const v=window.MotionHandoffAnimation(h,d,ht);v!==null&&(m.startTime=v,S=!0)}}xh(t,d),f.start(Zm(d,f,p,t.shouldReduceMotion&&lM.has(d)?{type:!1}:m,t,S));const g=f.animation;g&&u.push(g)}return a&&Promise.all(u).then(()=>{ht.update(()=>{a&&tC(t,a)})}),u}function Ah(t,e,n={}){var i;const r=Hc(t,e,n.type==="exit"?(i=t.presenceContext)===null||i===void 0?void 0:i.custom:void 0);let{transition:s=t.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const o=r?()=>Promise.all(jm(t,r,n)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=s;return SR(t,e,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,c]=l==="beforeChildren"?[o,a]:[a,o];return u().then(()=>c())}else return Promise.all([o(),a(n.delay)])}function SR(t,e,n=0,i=0,r=1,s){const o=[],a=(t.variantChildren.size-1)*i,l=r===1?(u=0)=>u*i:(u=0)=>a-u*i;return Array.from(t.variantChildren).sort(MR).forEach((u,c)=>{u.notify("AnimationStart",e),o.push(Ah(u,e,{...s,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",e)))}),Promise.all(o)}function MR(t,e){return t.sortNodePosition(e)}function ER(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>Ah(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=Ah(t,e,n);else{const r=typeof e=="function"?Hc(t,e,n.custom):e;i=Promise.all(jm(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const TR=Em.length;function HM(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?HM(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<TR;n++){const i=Em[n],r=t.props[i];(ja(r)||r===!1)&&(e[i]=r)}return e}const wR=[...Mm].reverse(),AR=Mm.length;function CR(t){return e=>Promise.all(e.map(({animation:n,options:i})=>ER(t,n,i)))}function RR(t){let e=CR(t),n=dv(),i=!0;const r=l=>(u,c)=>{var d;const f=Hc(t,c,l==="exit"?(d=t.presenceContext)===null||d===void 0?void 0:d.custom:void 0);if(f){const{transition:p,transitionEnd:m,...S}=f;u={...u,...S,...m}}return u};function s(l){e=l(t)}function o(l){const{props:u}=t,c=HM(t.parent)||{},d=[],f=new Set;let p={},m=1/0;for(let g=0;g<AR;g++){const h=wR[g],v=n[h],y=u[h]!==void 0?u[h]:c[h],_=ja(y),T=h===l?v.isActive:null;T===!1&&(m=g);let E=y===c[h]&&y!==u[h]&&_;if(E&&i&&t.manuallyAnimateOnMount&&(E=!1),v.protectedKeys={...p},!v.isActive&&T===null||!y&&!v.prevProp||Vc(y)||typeof y=="boolean")continue;const C=bR(v.prevProp,y);let x=C||h===l&&v.isActive&&!E&&_||g>m&&_,A=!1;const b=Array.isArray(y)?y:[y];let P=b.reduce(r(h),{});T===!1&&(P={});const{prevResolvedValues:D={}}=v,H={...D,...P},$=O=>{x=!0,f.has(O)&&(A=!0,f.delete(O)),v.needsAnimating[O]=!0;const L=t.getValue(O);L&&(L.liveStyle=!1)};for(const O in H){const L=P[O],X=D[O];if(p.hasOwnProperty(O))continue;let j=!1;vh(L)&&vh(X)?j=!QS(L,X):j=L!==X,j?L!=null?$(O):f.add(O):L!==void 0&&f.has(O)?$(O):v.protectedKeys[O]=!0}v.prevProp=y,v.prevResolvedValues=P,v.isActive&&(p={...p,...P}),i&&t.blockInitialAnimation&&(x=!1),x&&(!(E&&C)||A)&&d.push(...b.map(O=>({animation:O,options:{type:h}})))}if(f.size){const g={};f.forEach(h=>{const v=t.getBaseTarget(h),y=t.getValue(h);y&&(y.liveStyle=!0),g[h]=v??null}),d.push({animation:g})}let S=!!d.length;return i&&(u.initial===!1||u.initial===u.animate)&&!t.manuallyAnimateOnMount&&(S=!1),i=!1,S?e(d):Promise.resolve()}function a(l,u){var c;if(n[l].isActive===u)return Promise.resolve();(c=t.variantChildren)===null||c===void 0||c.forEach(f=>{var p;return(p=f.animationState)===null||p===void 0?void 0:p.setActive(l,u)}),n[l].isActive=u;const d=o(l);for(const f in n)n[f].protectedKeys={};return d}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=dv(),i=!0}}}function bR(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!QS(e,t):!1}function kr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function dv(){return{animate:kr(!0),whileInView:kr(),whileHover:kr(),whileTap:kr(),whileDrag:kr(),whileFocus:kr(),exit:kr()}}class Or{constructor(e){this.isMounted=!1,this.node=e}update(){}}class PR extends Or{constructor(e){super(e),e.animationState||(e.animationState=RR(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Vc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let LR=0;class DR extends Or{constructor(){super(...arguments),this.id=LR++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>n(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const IR={animation:{Feature:PR},exit:{Feature:DR}};function el(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}function vl(t){return{point:{x:t.pageX,y:t.pageY}}}const NR=t=>e=>Bm(e)&&t(e,vl(e));function Aa(t,e,n,i){return el(t,e,NR(n),i)}const hv=(t,e)=>Math.abs(t-e);function UR(t,e){const n=hv(t.x,e.x),i=hv(t.y,e.y);return Math.sqrt(n**2+i**2)}class GM{constructor(e,n,{transformPagePoint:i,contextWindow:r,dragSnapToOrigin:s=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const d=If(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=UR(d.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:m}=d,{timestamp:S}=Zt;this.history.push({...m,timestamp:S});const{onStart:g,onMove:h}=this.handlers;f||(g&&g(this.lastMoveEvent,d),this.startEvent=this.lastMoveEvent),h&&h(this.lastMoveEvent,d)},this.handlePointerMove=(d,f)=>{this.lastMoveEvent=d,this.lastMoveEventInfo=Df(f,this.transformPagePoint),ht.update(this.updatePoint,!0)},this.handlePointerUp=(d,f)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:S}=this.handlers;if(this.dragSnapToOrigin&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=If(d.type==="pointercancel"?this.lastMoveEventInfo:Df(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(d,g),m&&m(d,g)},!Bm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.contextWindow=r||window;const o=vl(e),a=Df(o,this.transformPagePoint),{point:l}=a,{timestamp:u}=Zt;this.history=[{...l,timestamp:u}];const{onSessionStart:c}=n;c&&c(e,If(a,this.history)),this.removeListeners=gl(Aa(this.contextWindow,"pointermove",this.handlePointerMove),Aa(this.contextWindow,"pointerup",this.handlePointerUp),Aa(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Lr(this.updatePoint)}}function Df(t,e){return e?{point:e(t.point)}:t}function pv(t,e){return{x:t.x-e.x,y:t.y-e.y}}function If({point:t},e){return{point:t,delta:pv(t,WM(e)),offset:pv(t,FR(e)),velocity:OR(e,.1)}}function FR(t){return t[0]}function WM(t){return t[t.length-1]}function OR(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=WM(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>Ei(e)));)n--;if(!i)return{x:0,y:0};const s=Ti(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}const XM=1e-4,BR=1-XM,kR=1+XM,YM=.01,VR=0-YM,zR=0+YM;function Un(t){return t.max-t.min}function HR(t,e,n){return Math.abs(t-e)<=n}function mv(t,e,n,i=.5){t.origin=i,t.originPoint=mt(e.min,e.max,t.origin),t.scale=Un(n)/Un(e),t.translate=mt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=BR&&t.scale<=kR||isNaN(t.scale))&&(t.scale=1),(t.translate>=VR&&t.translate<=zR||isNaN(t.translate))&&(t.translate=0)}function Ca(t,e,n,i){mv(t.x,e.x,n.x,i?i.originX:void 0),mv(t.y,e.y,n.y,i?i.originY:void 0)}function gv(t,e,n){t.min=n.min+e.min,t.max=t.min+Un(e)}function GR(t,e,n){gv(t.x,e.x,n.x),gv(t.y,e.y,n.y)}function vv(t,e,n){t.min=e.min-n.min,t.max=t.min+Un(e)}function Ra(t,e,n){vv(t.x,e.x,n.x),vv(t.y,e.y,n.y)}function WR(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?mt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?mt(n,t,i.max):Math.min(t,n)),t}function _v(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function XR(t,{top:e,left:n,bottom:i,right:r}){return{x:_v(t.x,n,r),y:_v(t.y,e,i)}}function xv(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function YR(t,e){return{x:xv(t.x,e.x),y:xv(t.y,e.y)}}function $R(t,e){let n=.5;const i=Un(t),r=Un(e);return r>i?n=fs(e.min,e.max-i,t.min):i>r&&(n=fs(t.min,t.max-r,e.min)),Zi(0,1,n)}function qR(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const Ch=.35;function KR(t=Ch){return t===!1?t=0:t===!0&&(t=Ch),{x:yv(t,"left","right"),y:yv(t,"top","bottom")}}function yv(t,e,n){return{min:Sv(t,e),max:Sv(t,n)}}function Sv(t,e){return typeof t=="number"?t:t[e]||0}const Mv=()=>({translate:0,scale:1,origin:0,originPoint:0}),no=()=>({x:Mv(),y:Mv()}),Ev=()=>({min:0,max:0}),Tt=()=>({x:Ev(),y:Ev()});function zn(t){return[t("x"),t("y")]}function $M({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function ZR({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function jR(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function Nf(t){return t===void 0||t===1}function Rh({scale:t,scaleX:e,scaleY:n}){return!Nf(t)||!Nf(e)||!Nf(n)}function Yr(t){return Rh(t)||qM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function qM(t){return Tv(t.x)||Tv(t.y)}function Tv(t){return t&&t!=="0%"}function hc(t,e,n){const i=t-n,r=e*i;return n+r}function wv(t,e,n,i,r){return r!==void 0&&(t=hc(t,r,i)),hc(t,n,i)+e}function bh(t,e=0,n=1,i,r){t.min=wv(t.min,e,n,i,r),t.max=wv(t.max,e,n,i,r)}function KM(t,{x:e,y:n}){bh(t.x,e.translate,e.scale,e.originPoint),bh(t.y,n.translate,n.scale,n.originPoint)}const Av=.999999999999,Cv=1.0000000000001;function JR(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&ro(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,KM(t,o)),i&&Yr(s.latestValues)&&ro(t,s.latestValues))}e.x<Cv&&e.x>Av&&(e.x=1),e.y<Cv&&e.y>Av&&(e.y=1)}function io(t,e){t.min=t.min+e,t.max=t.max+e}function Rv(t,e,n,i,r=.5){const s=mt(t.min,t.max,r);bh(t,e,n,s,i)}function ro(t,e){Rv(t.x,e.x,e.scaleX,e.scale,e.originX),Rv(t.y,e.y,e.scaleY,e.scale,e.originY)}function ZM(t,e){return $M(jR(t.getBoundingClientRect(),e))}function QR(t,e,n){const i=ZM(t,n),{scroll:r}=e;return r&&(io(i.x,r.offset.x),io(i.y,r.offset.y)),i}const jM=({current:t})=>t?t.ownerDocument.defaultView:null,eb=new WeakMap;class tb{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Tt(),this.visualElement=e}start(e,{snapToCursor:n=!1}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const r=c=>{const{dragSnapToOrigin:d}=this.getProps();d?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(vl(c).point)},s=(c,d)=>{const{drag:f,dragPropagation:p,onDragStart:m}=this.getProps();if(f&&!p&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ZA(f),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zn(g=>{let h=this.getAxisMotionValue(g).get()||0;if(wi.test(h)){const{projection:v}=this.visualElement;if(v&&v.layout){const y=v.layout.layoutBox[g];y&&(h=Un(y)*(parseFloat(h)/100))}}this.originPoint[g]=h}),m&&ht.postRender(()=>m(c,d)),xh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},o=(c,d)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:m,onDrag:S}=this.getProps();if(!f&&!this.openDragLock)return;const{offset:g}=d;if(p&&this.currentDirection===null){this.currentDirection=nb(g),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",d.point,g),this.updateAxis("y",d.point,g),this.visualElement.render(),S&&S(c,d)},a=(c,d)=>this.stop(c,d),l=()=>zn(c=>{var d;return this.getAnimationState(c)==="paused"&&((d=this.getAxisMotionValue(c).animation)===null||d===void 0?void 0:d.play())}),{dragSnapToOrigin:u}=this.getProps();this.panSession=new GM(e,{onSessionStart:r,onStart:s,onMove:o,onSessionEnd:a,resumeAnimation:l},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:u,contextWindow:jM(this.visualElement)})}stop(e,n){const i=this.isDragging;if(this.cancel(),!i)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:s}=this.getProps();s&&ht.postRender(()=>s(e,n))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!zl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=WR(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var e;const{dragConstraints:n,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,s=this.constraints;n&&eo(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=XR(r.layoutBox,n):this.constraints=!1,this.elastic=KR(i),s!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&zn(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=qR(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!eo(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=QR(i,r.root,this.visualElement.getTransformPagePoint());let o=YR(r.layout.layoutBox,s);if(n){const a=n(ZR(o));this.hasMutatedConstraints=!!a,a&&(o=$M(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},u=zn(c=>{if(!zl(c,n,this.currentDirection))return;let d=l&&l[c]||{};o&&(d={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:i?e[c]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...d};return this.startAxisValueAnimation(c,m)});return Promise.all(u).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return xh(this.visualElement,e),i.start(Zm(e,i,0,n,this.visualElement,!1))}stopAnimation(){zn(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){zn(e=>{var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(e){var n;return(n=this.getAxisMotionValue(e).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){zn(n=>{const{drag:i}=this.getProps();if(!zl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n];s.set(e[n]-mt(o,a,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!eo(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};zn(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=$R({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.resolveConstraints(),zn(o=>{if(!zl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:u}=this.constraints[o];a.set(mt(l,u,r[o]))})}addListeners(){if(!this.visualElement.current)return;eb.set(this.visualElement,this);const e=this.visualElement.current,n=Aa(e,"pointerdown",l=>{const{drag:u,dragListener:c=!0}=this.getProps();u&&c&&this.start(l)}),i=()=>{const{dragConstraints:l}=this.getProps();eo(l)&&l.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,s=r.addEventListener("measure",i);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),ht.read(i);const o=el(window,"resize",()=>this.scalePositionWithinConstraints()),a=r.addEventListener("didUpdate",({delta:l,hasLayoutChanged:u})=>{this.isDragging&&u&&(zn(c=>{const d=this.getAxisMotionValue(c);d&&(this.originPoint[c]+=l[c].translate,d.set(d.get()+l[c].translate))}),this.visualElement.render())});return()=>{o(),n(),s(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=Ch,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function zl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function nb(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class ib extends Or{constructor(e){super(e),this.removeGroupControls=In,this.removeListeners=In,this.controls=new tb(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||In}unmount(){this.removeGroupControls(),this.removeListeners()}}const bv=t=>(e,n)=>{t&&ht.postRender(()=>t(e,n))};class rb extends Or{constructor(){super(...arguments),this.removePointerDownListener=In}onPointerDown(e){this.session=new GM(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:jM(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:bv(e),onStart:bv(n),onMove:i,onEnd:(s,o)=>{delete this.session,r&&ht.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=Aa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Pv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ko={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Fe.test(t))t=parseFloat(t);else return t;const n=Pv(t,e.target.x),i=Pv(t,e.target.y);return`${n}% ${i}%`}},sb={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Dr.parse(t);if(r.length>5)return i;const s=Dr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const u=mt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=u),typeof r[3+o]=="number"&&(r[3+o]/=u),s(r)}};class ob extends se.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;PA(ab),s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,o=i.projection;return o&&(o.isPresent=s,r||e.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||ht.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),wm.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function JM(t){const[e,n]=LS(),i=se.useContext(xm);return ge.jsx(ob,{...t,layoutGroup:i,switchLayoutGroup:se.useContext(VS),isPresent:e,safeToRemove:n})}const ab={borderRadius:{...Ko,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ko,borderTopRightRadius:Ko,borderBottomLeftRadius:Ko,borderBottomRightRadius:Ko,boxShadow:sb};function QM(t,e,n){const i=Xt(t)?t:Eo(t);return i.start(Zm("",i,e,n)),i.animation}function eE(t){return t instanceof SVGElement&&t.tagName!=="svg"}const lb=(t,e)=>t.depth-e.depth;class ub{constructor(){this.children=[],this.isDirty=!1}add(e){km(this.children,e),this.isDirty=!0}remove(e){Wc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lb),this.isDirty=!1,this.children.forEach(e)}}function cb(t,e){const n=Ai.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(Lr(i),t(s-e))};return ht.read(i,!0),()=>Lr(i)}const tE=["TopLeft","TopRight","BottomLeft","BottomRight"],fb=tE.length,Lv=t=>typeof t=="string"?parseFloat(t):t,Dv=t=>typeof t=="number"||Fe.test(t);function db(t,e,n,i,r,s){r?(t.opacity=mt(0,n.opacity!==void 0?n.opacity:1,hb(i)),t.opacityExit=mt(e.opacity!==void 0?e.opacity:1,0,pb(i))):s&&(t.opacity=mt(e.opacity!==void 0?e.opacity:1,n.opacity!==void 0?n.opacity:1,i));for(let o=0;o<fb;o++){const a=`border${tE[o]}Radius`;let l=Iv(e,a),u=Iv(n,a);if(l===void 0&&u===void 0)continue;l||(l=0),u||(u=0),l===0||u===0||Dv(l)===Dv(u)?(t[a]=Math.max(mt(Lv(l),Lv(u),i),0),(wi.test(u)||wi.test(l))&&(t[a]+="%")):t[a]=u}(e.rotate||n.rotate)&&(t.rotate=mt(e.rotate||0,n.rotate||0,i))}function Iv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const hb=nE(0,.5,vM),pb=nE(.5,.95,In);function nE(t,e,n){return i=>i<t?0:i>e?1:n(fs(t,e,i))}function Nv(t,e){t.min=e.min,t.max=e.max}function kn(t,e){Nv(t.x,e.x),Nv(t.y,e.y)}function Uv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}function Fv(t,e,n,i,r){return t-=e,t=hc(t,1/n,i),r!==void 0&&(t=hc(t,1/r,i)),t}function mb(t,e=0,n=1,i=.5,r,s=t,o=t){if(wi.test(e)&&(e=parseFloat(e),e=mt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=mt(s.min,s.max,i);t===s&&(a-=e),t.min=Fv(t.min,e,n,a,r),t.max=Fv(t.max,e,n,a,r)}function Ov(t,e,[n,i,r],s,o){mb(t,e[n],e[i],e[r],e.scale,s,o)}const gb=["x","scaleX","originX"],vb=["y","scaleY","originY"];function Bv(t,e,n,i){Ov(t.x,e,gb,n?n.x:void 0,i?i.x:void 0),Ov(t.y,e,vb,n?n.y:void 0,i?i.y:void 0)}function kv(t){return t.translate===0&&t.scale===1}function iE(t){return kv(t.x)&&kv(t.y)}function Vv(t,e){return t.min===e.min&&t.max===e.max}function _b(t,e){return Vv(t.x,e.x)&&Vv(t.y,e.y)}function zv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function rE(t,e){return zv(t.x,e.x)&&zv(t.y,e.y)}function Hv(t){return Un(t.x)/Un(t.y)}function Gv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}class xb{constructor(){this.members=[]}add(e){km(this.members,e),e.scheduleRender()}remove(e){if(Wc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender(),e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;r===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function yb(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:u,rotate:c,rotateX:d,rotateY:f,skewX:p,skewY:m}=n;u&&(i=`perspective(${u}px) ${i}`),c&&(i+=`rotate(${c}deg) `),d&&(i+=`rotateX(${d}deg) `),f&&(i+=`rotateY(${f}deg) `),p&&(i+=`skewX(${p}deg) `),m&&(i+=`skewY(${m}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const $r={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},fa=typeof window<"u"&&window.MotionDebug!==void 0,Uf=["","X","Y","Z"],Sb={visibility:"hidden"},Wv=1e3;let Mb=0;function Ff(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function sE(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=cM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",ht,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&sE(i)}function oE({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=Mb++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,fa&&($r.totalNodes=$r.resolvedTargetDeltas=$r.recalculatedProjection=0),this.nodes.forEach(wb),this.nodes.forEach(Pb),this.nodes.forEach(Lb),this.nodes.forEach(Ab),fa&&window.MotionDebug.record($r)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new ub)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Vm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,a=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=eE(o),this.instance=o;const{layoutId:l,layout:u,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),a&&(u||l)&&(this.isLayoutDirty=!0),t){let d;const f=()=>this.root.updateBlockedByResize=!1;t(o,()=>{this.root.updateBlockedByResize=!0,d&&d(),d=cb(f,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(Yv))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&c&&(l||u)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||c.getDefaultTransition()||Fb,{onLayoutAnimationStart:g,onLayoutAnimationComplete:h}=c.getProps(),v=!this.targetLayout||!rE(this.targetLayout,m)||p,y=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||y||f&&(v||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(d,y);const _={...Um(S,"layout"),onPlay:g,onComplete:h};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_)}else f||Yv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Lr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Db),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&sE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let c=0;c<this.path.length;c++){const d=this.path[c];d.shouldResetTransform=!0,d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Xv);return}this.isUpdating||this.nodes.forEach(Rb),this.isUpdating=!1,this.nodes.forEach(bb),this.nodes.forEach(Eb),this.nodes.forEach(Tb),this.clearAllSnapshots();const a=Ai.now();Zt.delta=Zi(0,1e3/60,a-Zt.timestamp),Zt.timestamp=a,Zt.isProcessing=!0,Af.update.process(Zt),Af.preRender.process(Zt),Af.render.process(Zt),Zt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,wm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Cb),this.sharedNodes.forEach(Ib)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ht.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ht.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Tt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!iE(this.projectionDelta),l=this.getTransformTemplate(),u=l?l(this.latestValues,""):void 0,c=u!==this.prevTransformTemplateValue;o&&(a||Yr(this.latestValues)||c)&&(r(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),Ob(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var o;const{visualElement:a}=this.options;if(!a)return Tt();const l=a.measureViewportBox();if(!(((o=this.scroll)===null||o===void 0?void 0:o.wasRoot)||this.path.some(Bb))){const{scroll:c}=this.root;c&&(io(l.x,c.offset.x),io(l.y,c.offset.y))}return l}removeElementScroll(o){var a;const l=Tt();if(kn(l,o),!((a=this.scroll)===null||a===void 0)&&a.wasRoot)return l;for(let u=0;u<this.path.length;u++){const c=this.path[u],{scroll:d,options:f}=c;c!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&kn(l,o),io(l.x,d.offset.x),io(l.y,d.offset.y))}return l}applyTransform(o,a=!1){const l=Tt();kn(l,o);for(let u=0;u<this.path.length;u++){const c=this.path[u];!a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&ro(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Yr(c.latestValues)&&ro(l,c.latestValues)}return Yr(this.latestValues)&&ro(l,this.latestValues),l}removeTransform(o){const a=Tt();kn(a,o);for(let l=0;l<this.path.length;l++){const u=this.path[l];if(!u.instance||!Yr(u.latestValues))continue;Rh(u.latestValues)&&u.updateSnapshot();const c=Tt(),d=u.measurePageBox();kn(c,d),Bv(a,u.latestValues,u.snapshot?u.snapshot.layoutBox:void 0,c)}return Yr(this.latestValues)&&Bv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Zt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var a;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const u=!!this.resumingFrom||this!==l;if(!(o||u&&this.isSharedProjectionDirty||this.isProjectionDirty||!((a=this.parent)===null||a===void 0)&&a.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:f}=this.options;if(!(!this.layout||!(d||f))){if(this.resolvedRelativeTargetAt=Zt.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tt(),this.relativeTargetOrigin=Tt(),Ra(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Tt(),this.targetWithTransforms=Tt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),GR(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):kn(this.target,this.layout.layoutBox),KM(this.target,this.targetDelta)):kn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Tt(),this.relativeTargetOrigin=Tt(),Ra(this.relativeTargetOrigin,this.target,p.target),kn(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}fa&&$r.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rh(this.parent.latestValues)||qM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let u=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(u=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(u=!1),this.resolvedRelativeTargetAt===Zt.timestamp&&(u=!1),u)return;const{layout:c,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||d))return;kn(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;JR(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=Tt());const{target:m}=a;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Uv(this.prevProjectionDelta.x,this.projectionDelta.x),Uv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ca(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==f||this.treeScale.y!==p||!Gv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Gv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),fa&&$r.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)===null||a===void 0||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=no(),this.projectionDelta=no(),this.projectionDeltaWithTransform=no()}setAnimationOrigin(o,a=!1){const l=this.snapshot,u=l?l.latestValues:{},c={...this.latestValues},d=no();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const f=Tt(),p=l?l.source:void 0,m=this.layout?this.layout.source:void 0,S=p!==m,g=this.getStack(),h=!g||g.members.length<=1,v=!!(S&&!h&&this.options.crossfade===!0&&!this.path.some(Ub));this.animationProgress=0;let y;this.mixTargetDelta=_=>{const T=_/1e3;$v(d.x,o.x,T),$v(d.y,o.y,T),this.setTargetDelta(d),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Ra(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),Nb(this.relativeTarget,this.relativeTargetOrigin,f,T),y&&_b(this.relativeTarget,y)&&(this.isProjectionDirty=!1),y||(y=Tt()),kn(y,this.relativeTarget)),S&&(this.animationValues=c,db(c,u,this.latestValues,T,v,h)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=T},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Lr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ht.update(()=>{bu.hasAnimatedSinceResize=!0,this.currentAnimation=QM(0,Wv,{...o,onUpdate:a=>{this.mixTargetDelta(a),o.onUpdate&&o.onUpdate(a)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Wv),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:u,latestValues:c}=o;if(!(!a||!l||!u)){if(this!==o&&this.layout&&u&&aE(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Tt();const d=Un(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+d;const f=Un(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+f}kn(a,l),ro(a,c),Ca(this.projectionDeltaWithTransform,this.layoutCorrected,a,c)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new xb),this.sharedNodes.get(o).add(a);const u=a.options.initialPromotionConfig;a.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:a}=this.options;return a?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:a}=this.options;return a?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const u={};l.z&&Ff("z",o,u,this.animationValues);for(let c=0;c<Uf.length;c++)Ff(`rotate${Uf[c]}`,o,u,this.animationValues),Ff(`skew${Uf[c]}`,o,u,this.animationValues);o.render();for(const c in u)o.setStaticValue(c,u[c]),this.animationValues&&(this.animationValues[c]=u[c]);o.scheduleRender()}getProjectionStyles(o){var a,l;if(!this.instance||this.isSVG)return;if(!this.isVisible)return Sb;const u={visibility:""},c=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,u.opacity="",u.pointerEvents=Cu(o==null?void 0:o.pointerEvents)||"",u.transform=c?c(this.latestValues,""):"none",u;const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){const S={};return this.options.layoutId&&(S.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,S.pointerEvents=Cu(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!Yr(this.latestValues)&&(S.transform=c?c({},""):"none",this.hasProjected=!1),S}const f=d.animationValues||d.latestValues;this.applyTransformsToTarget(),u.transform=yb(this.projectionDeltaWithTransform,this.treeScale,f),c&&(u.transform=c(f,u.transform));const{x:p,y:m}=this.projectionDelta;u.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,d.animationValues?u.opacity=d===this?(l=(a=f.opacity)!==null&&a!==void 0?a:this.latestValues.opacity)!==null&&l!==void 0?l:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:u.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const S in ac){if(f[S]===void 0)continue;const{correct:g,applyTo:h}=ac[S],v=u.transform==="none"?f[S]:g(f[S],d);if(h){const y=h.length;for(let _=0;_<y;_++)u[h[_]]=v}else u[S]=v}return this.options.layoutId&&(u.pointerEvents=d===this?Cu(o==null?void 0:o.pointerEvents)||"":"none"),u}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)===null||a===void 0?void 0:a.stop()}),this.root.nodes.forEach(Xv),this.root.sharedNodes.clear()}}}function Eb(t){t.updateLayout()}function Tb(t){var e;const n=((e=t.resumeFrom)===null||e===void 0?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&n&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=n.source!==t.layout.source;s==="size"?zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Un(f);f.min=i[d].min,f.max=f.min+p}):aE(s,n.layoutBox,i)&&zn(d=>{const f=o?n.measuredBox[d]:n.layoutBox[d],p=Un(i[d]);f.max=f.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[d].max=t.relativeTarget[d].min+p)});const a=no();Ca(a,i,n.layoutBox);const l=no();o?Ca(l,t.applyTransform(r,!0),n.measuredBox):Ca(l,i,n.layoutBox);const u=!iE(a);let c=!1;if(!t.resumeFrom){const d=t.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:p}=d;if(f&&p){const m=Tt();Ra(m,n.layoutBox,f.layoutBox);const S=Tt();Ra(S,i,p.layoutBox),rE(m,S)||(c=!0),d.options.layoutRoot&&(t.relativeTarget=S,t.relativeTargetOrigin=m,t.relativeParent=d)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:n,delta:l,layoutDelta:a,hasLayoutChanged:u,hasRelativeTargetChanged:c})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function wb(t){fa&&$r.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function Ab(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function Cb(t){t.clearSnapshot()}function Xv(t){t.clearMeasurements()}function Rb(t){t.isLayoutDirty=!1}function bb(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Yv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function Pb(t){t.resolveTargetDelta()}function Lb(t){t.calcProjection()}function Db(t){t.resetSkewAndRotation()}function Ib(t){t.removeLeadSnapshot()}function $v(t,e,n){t.translate=mt(e.translate,0,n),t.scale=mt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function qv(t,e,n,i){t.min=mt(e.min,n.min,i),t.max=mt(e.max,n.max,i)}function Nb(t,e,n,i){qv(t.x,e.x,n.x,i),qv(t.y,e.y,n.y,i)}function Ub(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const Fb={duration:.45,ease:[.4,0,.1,1]},Kv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Zv=Kv("applewebkit/")&&!Kv("chrome/")?Math.round:In;function jv(t){t.min=Zv(t.min),t.max=Zv(t.max)}function Ob(t){jv(t.x),jv(t.y)}function aE(t,e,n){return t==="position"||t==="preserve-aspect"&&!HR(Hv(e),Hv(n),.2)}function Bb(t){var e;return t!==t.root&&((e=t.scroll)===null||e===void 0?void 0:e.wasRoot)}const kb=oE({attachResizeListener:(t,e)=>el(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Of={current:void 0},lE=oE({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Of.current){const t=new kb({});t.mount(window),t.setOptions({layoutScroll:!0}),Of.current=t}return Of.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Vb={pan:{Feature:rb},drag:{Feature:ib,ProjectionNode:lE,MeasureLayout:JM}};function Jv(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&ht.postRender(()=>s(e,vl(e)))}class zb extends Or{mount(){const{current:e}=this.node;e&&(this.unmount=XA(e,n=>(Jv(this.node,n,"Start"),i=>Jv(this.node,i,"End"))))}unmount(){}}class Hb extends Or{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=gl(el(this.node.current,"focus",()=>this.onFocus()),el(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Qv(t,e,n){const{props:i}=t;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&ht.postRender(()=>s(e,vl(e)))}class Gb extends Or{mount(){const{current:e}=this.node;e&&(this.unmount=KA(e,n=>(Qv(this.node,n,"Start"),(i,{success:r})=>Qv(this.node,i,r?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Ph=new WeakMap,Bf=new WeakMap,Wb=t=>{const e=Ph.get(t.target);e&&e(t)},Xb=t=>{t.forEach(Wb)};function Yb({root:t,...e}){const n=t||document;Bf.has(n)||Bf.set(n,{});const i=Bf.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(Xb,{root:t,...e})),i[r]}function $b(t,e,n){const i=Yb(e);return Ph.set(t,n),i.observe(t),()=>{Ph.delete(t),i.unobserve(t)}}const qb={some:0,all:1};class Kb extends Or{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:qb[r]},a=l=>{const{isIntersecting:u}=l;if(this.isInView===u||(this.isInView=u,s&&!u&&this.hasEnteredView))return;u&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",u);const{onViewportEnter:c,onViewportLeave:d}=this.node.getProps(),f=u?c:d;f&&f(l)};return $b(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(Zb(e,n))&&this.startObserver()}unmount(){}}function Zb({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const jb={inView:{Feature:Kb},tap:{Feature:Gb},focus:{Feature:Hb},hover:{Feature:zb}},Jb={layout:{ProjectionNode:lE,MeasureLayout:JM}},Lh={current:null},uE={current:!1};function Qb(){if(uE.current=!0,!!ym)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>Lh.current=t.matches;t.addListener(e),e()}else Lh.current=!1}const eP=[...LM,sn,Dr],tP=t=>eP.find(PM(t)),wo=new WeakMap;function nP(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Xt(r))t.addValue(i,r);else if(Xt(s))t.addValue(i,Eo(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,Eo(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const e_=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class cE{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,blockInitialAnimation:s,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Ym,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=Ai.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,ht.render(this.render,!1,!0))};const{latestValues:l,renderState:u,onUpdate:c}=o;this.onUpdate=c,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=u,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.blockInitialAnimation=!!s,this.isControllingVariants=zc(n),this.isVariantNode=BS(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in f){const m=f[p];l[p]!==void 0&&Xt(m)&&m.set(l[p],!1)}}mount(e){this.current=e,wo.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,i)=>this.bindToMotionValue(i,n)),uE.current||Qb(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Lh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){wo.delete(this.current),this.projection&&this.projection.unmount(),Lr(this.notifyUpdate),Lr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const n=this.features[e];n&&(n.unmount(),n.isMounted=!1)}this.current=null}bindToMotionValue(e,n){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const i=vs.has(e),r=n.on("change",a=>{this.latestValues[e]=a,this.props.onUpdate&&ht.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0)}),s=n.on("renderRequest",this.scheduleRender);let o;window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s(),o&&o(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Mo){const n=Mo[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Tt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<e_.length;i++){const r=e_[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=nP(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=Eo(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){var i;let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(i=this.getBaseTargetFromProps(this.props,e))!==null&&i!==void 0?i:this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(RM(r)||xM(r))?r=parseFloat(r):!tP(r)&&Dr.test(n)&&(r=wM(e,n)),this.setBaseTarget(e,Xt(r)?r.get():r)),Xt(r)?r.get():r}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var n;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const o=Cm(this.props,i,(n=this.presenceContext)===null||n===void 0?void 0:n.custom);o&&(r=o[e])}if(i&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,e);return s!==void 0&&!Xt(s)?s:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Vm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}}class fE extends cE{constructor(){super(...arguments),this.KeyframeResolver=DM}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){return e.style?e.style[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}function iP(t){return window.getComputedStyle(t)}class dE extends fE{constructor(){super(...arguments),this.type="html",this.renderInstance=$S}readValueFromInstance(e,n){if(vs.has(n)){const i=Xm(n);return i&&i.default||0}else{const i=iP(e),r=(WS(n)?i.getPropertyValue(n):i[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(e,{transformPagePoint:n}){return ZM(e,n)}build(e,n,i){Pm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return Nm(e,n,i)}}class hE extends fE{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Tt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(vs.has(n)){const i=Xm(n);return i&&i.default||0}return n=qS.has(n)?n:Tm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return jS(e,n,i)}build(e,n,i){Lm(e,n,this.isSVGTag,i.transformTemplate)}renderInstance(e,n,i,r){KS(e,n,i,r)}mount(e){this.isSVGTag=Im(e.tagName),super.mount(e)}}const rP=(t,e)=>Am(t)?new hE(e):new dE(e,{allowProjection:t!==se.Fragment}),sP=kA({...IR,...jb,...Vb,...Jb},rP),Ao=eA(sP);function oP(t){const e=Fc(()=>Eo(t)),{isStatic:n}=se.useContext(Bc);if(n){const[,i]=se.useState(t);se.useEffect(()=>e.on("change",i),[])}return e}const aP=(t,e,n)=>{const i=e-t;return((n-t)%i+i)%i+t};function pE(t,e){return BM(t)?t[aP(0,t.length,e)]:t}function Jm(t){return typeof t=="object"&&!Array.isArray(t)}function mE(t,e,n,i){return typeof t=="string"&&Jm(e)?sM(t,n,i):t instanceof NodeList?Array.from(t):Array.isArray(t)?t:[t]}function lP(t,e,n){return t*(e+1)}function t_(t,e,n,i){var r;return typeof e=="number"?e:e.startsWith("-")||e.startsWith("+")?Math.max(0,t+parseFloat(e)):e==="<"?n:(r=i.get(e))!==null&&r!==void 0?r:t}function uP(t,e,n){for(let i=0;i<t.length;i++){const r=t[i];r.at>e&&r.at<n&&(Wc(t,r),i--)}}function cP(t,e,n,i,r,s){uP(t,r,s);for(let o=0;o<e.length;o++)t.push({value:e[o],at:mt(r,s,i[o]),easing:pE(n,o)})}function fP(t,e){for(let n=0;n<t.length;n++)t[n]=t[n]/(e+1)}function dP(t,e){return t.at===e.at?t.value===null?1:e.value===null?-1:0:t.at-e.at}const hP="easeInOut";function pP(t,{defaultTransition:e={},...n}={},i,r){const s=e.duration||.3,o=new Map,a=new Map,l={},u=new Map;let c=0,d=0,f=0;for(let p=0;p<t.length;p++){const m=t[p];if(typeof m=="string"){u.set(m,d);continue}else if(!Array.isArray(m)){u.set(m.name,t_(d,m.at,c,u));continue}let[S,g,h={}]=m;h.at!==void 0&&(d=t_(d,h.at,c,u));let v=0;const y=(_,T,E,C=0,x=0)=>{const A=mP(_),{delay:b=0,times:P=VM(A),type:D="keyframes",repeat:H,repeatType:$,repeatDelay:k=0,...Y}=T;let{ease:O=e.ease||"easeOut",duration:L}=T;const X=typeof b=="function"?b(C,x):b,j=A.length,ne=Gc(D)?D:r==null?void 0:r[D];if(j<=2&&ne){let Ie=100;if(j===2&&_P(A)){const te=A[1]-A[0];Ie=Math.abs(te)}const q={...Y};L!==void 0&&(q.duration=Ei(L));const ie=HA(q,Ie,ne);O=ie.ease,L=ie.duration}L??(L=s);const oe=d+X;P.length===1&&P[0]===0&&(P[1]=1);const ve=P.length-A.length;if(ve>0&&kM(P,ve),A.length===1&&A.unshift(null),H){L=lP(L,H);const Ie=[...A],q=[...P];O=Array.isArray(O)?[...O]:[O];const ie=[...O];for(let te=0;te<H;te++){A.push(...Ie);for(let De=0;De<Ie.length;De++)P.push(q[De]+(te+1)),O.push(De===0?"linear":pE(ie,De-1))}fP(P,H)}const Le=oe+L;cP(E,A,O,P,oe,Le),v=Math.max(X+L,v),f=Math.max(Le,f)};if(Xt(S)){const _=n_(S,a);y(g,h,i_("default",_))}else{const _=mE(S,g,i,l),T=_.length;for(let E=0;E<T;E++){g=g,h=h;const C=_[E],x=n_(C,a);for(const A in g)y(g[A],gP(h,A),i_(A,x),E,T)}}c=d,d+=v}return a.forEach((p,m)=>{for(const S in p){const g=p[S];g.sort(dP);const h=[],v=[],y=[];for(let T=0;T<g.length;T++){const{at:E,value:C,easing:x}=g[T];h.push(C),v.push(fs(0,f,E)),y.push(x||"easeOut")}v[0]!==0&&(v.unshift(0),h.unshift(h[0]),y.unshift(hP)),v[v.length-1]!==1&&(v.push(1),h.push(null)),o.has(m)||o.set(m,{keyframes:{},transition:{}});const _=o.get(m);_.keyframes[S]=h,_.transition[S]={...e,duration:f,ease:y,times:v,...n}}}),o}function n_(t,e){return!e.has(t)&&e.set(t,{}),e.get(t)}function i_(t,e){return e[t]||(e[t]=[]),e[t]}function mP(t){return Array.isArray(t)?t:[t]}function gP(t,e){return t&&t[e]?{...t,...t[e]}:{...t}}const vP=t=>typeof t=="number",_P=t=>t.every(vP);function xP(t,e){return t in e}class yP extends cE{constructor(){super(...arguments),this.type="object"}readValueFromInstance(e,n){if(xP(n,e)){const i=e[n];if(typeof i=="string"||typeof i=="number")return i}}getBaseTargetFromProps(){}removeValueFromRenderState(e,n){delete n.output[e]}measureInstanceViewportBox(){return Tt()}build(e,n){Object.assign(e.output,n)}renderInstance(e,{output:n}){Object.assign(e,n)}sortInstanceNodePosition(){return 0}}function SP(t){const e={presenceContext:null,props:{},visualState:{renderState:{transform:{},transformOrigin:{},style:{},vars:{},attrs:{}},latestValues:{}}},n=eE(t)?new hE(e):new dE(e);n.mount(t),wo.set(t,n)}function MP(t){const e={presenceContext:null,props:{},visualState:{renderState:{output:{}},latestValues:{}}},n=new yP(e);n.mount(t),wo.set(t,n)}function EP(t,e){return Xt(t)||typeof t=="number"||typeof t=="string"&&!Jm(e)}function gE(t,e,n,i){const r=[];if(EP(t,e))r.push(QM(t,Jm(e)&&e.default||e,n&&(n.default||n)));else{const s=mE(t,e,i),o=s.length;for(let a=0;a<o;a++){const l=s[a],u=l instanceof Element?SP:MP;wo.has(l)||u(l);const c=wo.get(l),d={...n};"delay"in d&&typeof d.delay=="function"&&(d.delay=d.delay(a,o)),r.push(...jm(c,{...e,transition:d},{}))}}return r}function TP(t,e,n){const i=[];return pP(t,e,n,{spring:qm}).forEach(({keyframes:s,transition:o},a)=>{i.push(...gE(a,s,o))}),i}function wP(t){return Array.isArray(t)&&t.some(Array.isArray)}function AP(t){function e(n,i,r){let s=[];return wP(n)?s=TP(n,i,t):s=gE(n,i,r,t),new eM(s)}return e}const Hl=AP(),gr=[{id:"han",dynasty:"汉",name:"四神博局纹镜",shortDescription:"汉代铜镜规矩方正，博局纹与四神纹样讲求对称，映照出汉人眼中的天地秩序。",tint:"#8a6a4f",frontImage:"mirrors/han/front.webp",backImage:"mirrors/han/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"镜钮居中，可穿绶带持握或悬挂，是铜镜最稳定的结构核心。"},{x:50,y:26,title:"博局纹",description:"博局纹又称 TLV 纹，源自六博棋盘，与四神方位相配，寓意法天象地。"}],reference:{title:"四神博局式青铜镜",detail:"东汉至西汉末（公元 9–100 年），青铜，直径 19 厘米。镜背是一幅宇宙图式：同心圆环与云气纹象征天，钮座方框象征地，四神居天地之间。",imageUrl:"references/han.webp",source:"克利夫兰艺术博物馆（CC0）",sourceUrl:"https://clevelandart.org/art/1995.301"},art3d:{flat:"poc3d/han/sishou.flat.webp",normal:"poc3d/han/sishou.normal.webp",shape:{type:"circle"}}},{id:"tang",dynasty:"唐",name:"海兽葡萄纹镜",shortDescription:"唐代铜镜装饰华丽奔放，海兽与葡萄蔓枝交织成饱满的浮雕，映出盛世的雍容气度。",tint:"#a8823f",frontImage:"mirrors/tang/front.webp",backImage:"mirrors/tang/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"高浮雕纹样在镜钮四周层层铺开，唐镜以厚重的手感与华贵的纹饰著称。"},{x:44,y:36,title:"海兽葡萄纹",description:"葡萄蔓枝缠绕、瑞兽穿行其间，是唐代铜镜最具代表性的纹饰组合。"}],reference:{title:"瑞兽葡萄镜",detail:"唐中期（7 世纪中叶），青铜，直径仅 8.2 厘米。瑞兽与葡萄蔓枝以高浮雕在方寸之间层层铺展，是盛唐华丽审美的缩影。",imageUrl:"references/tang.webp",source:"克利夫兰艺术博物馆（CC0）",sourceUrl:"https://clevelandart.org/art/1995.356"},art3d:{flat:"poc3d/tang/octagon.flat.webp",normal:"poc3d/tang/octagon.normal.webp",shape:{type:"polygon",sides:8}}},{id:"song",dynasty:"宋",name:"湖州石家铭文镜",shortDescription:"宋代铜镜趋于素雅，纹饰退位给铭文，一句「湖州真石家念二叔照子」，透出市井商业的烟火气。",tint:"#6f7a72",frontImage:"mirrors/song/front.webp",backImage:"mirrors/song/back.webp",hotspots:[{x:50,y:30,title:"商标铭文",description:"铸镜匠号的商标式铭文是宋镜的标志——制镜成了品牌生意，审美从神怪纹样转向务实素雅。"}],reference:{title:"湖州石家镜 · 馆藏实物图待补",detail:"宋代湖州石家铸镜盛极一时，镜背多铸「湖州真石家念二叔照子」等商标式铭文，是古代早期品牌意识的实物例证。"},art3d:{flat:"poc3d/song/kuihua.flat.webp",normal:"poc3d/song/kuihua.normal.webp",shape:{type:"lobed",lobes:8,depth:.11}}},{id:"ming",dynasty:"明",name:"五子登科镜",shortDescription:"明代铜镜仿古与吉祥铭文并行，一句「五子登科」，照见的是寻常人家的朴素祈愿。",tint:"#7d5450",frontImage:"mirrors/ming/front.webp",backImage:"mirrors/ming/back.webp",hotspots:[{x:50,y:50,title:"中央镜钮",description:"明镜钮制多承古法，形制上可见对汉唐旧式的追摹。"},{x:50,y:28,title:"吉祥铭文",description:"「五子登科」四字直白吉庆，铜镜从文人之雅走向寻常人家的祝福。"}],reference:{title:"五子登科镜 · 馆藏实物图待补",detail:"「五子登科」吉祥铭文镜流行于明代，多为圆形圆钮，铭文环钮而铸，寄托科举登第、多子多福的朴素愿望。"},art3d:{flat:"poc3d/ming/wuzidengke.flat.webp",normal:"poc3d/ming/wuzidengke.normal.webp",shape:{type:"circle"}}}];/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qm="185",CP=0,r_=1,RP=2,Pu=1,bP=2,da=3,Ir=0,hn=1,ki=2,Wi=0,fo=1,s_=2,o_=3,a_=4,PP=5,Kr=100,LP=101,DP=102,IP=103,NP=104,UP=200,FP=201,OP=202,BP=203,Dh=204,Ih=205,kP=206,VP=207,zP=208,HP=209,GP=210,WP=211,XP=212,YP=213,$P=214,Nh=0,Uh=1,Fh=2,Co=3,Oh=4,Bh=5,kh=6,Vh=7,eg=0,qP=1,KP=2,Ci=0,vE=1,_E=2,xE=3,tg=4,yE=5,SE=6,ME=7,EE=300,ds=301,Ro=302,kf=303,Vf=304,Yc=306,zh=1e3,Hi=1001,Hh=1002,kt=1003,ZP=1004,Gl=1005,an=1006,zf=1007,ts=1008,Pn=1009,TE=1010,wE=1011,tl=1012,ng=1013,bi=1014,si=1015,ji=1016,ig=1017,rg=1018,nl=1020,AE=35902,CE=35899,RE=1021,bE=1022,oi=1023,Ji=1026,ns=1027,$c=1028,sg=1029,hs=1030,og=1031,ag=1033,Lu=33776,Du=33777,Iu=33778,Nu=33779,Gh=35840,Wh=35841,Xh=35842,Yh=35843,$h=36196,qh=37492,Kh=37496,Zh=37488,jh=37489,pc=37490,Jh=37491,Qh=37808,ep=37809,tp=37810,np=37811,ip=37812,rp=37813,sp=37814,op=37815,ap=37816,lp=37817,up=37818,cp=37819,fp=37820,dp=37821,hp=36492,pp=36494,mp=36495,gp=36283,vp=36284,mc=36285,_p=36286,jP=3200,il=0,JP=1,vr="",Rn="srgb",gc="srgb-linear",vc="linear",tt="srgb",Ts=7680,l_=519,QP=512,e3=513,t3=514,lg=515,n3=516,i3=517,ug=518,r3=519,u_=35044,c_="300 es",yi=2e3,rl=2001;function s3(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function o3(){const t=sl("canvas");return t.style.display="block",t}const f_={};function d_(...t){const e="THREE."+t.shift();console.log(e,...t)}function PE(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Oe(...t){t=PE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function je(...t){t=PE(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ho(...t){const e=t.join(" ");e in f_||(f_[e]=!0,Oe(...t))}function a3(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const l3={[Nh]:Uh,[Fh]:kh,[Oh]:Vh,[Co]:Bh,[Uh]:Nh,[kh]:Fh,[Vh]:Oh,[Bh]:Co};class _s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hf=Math.PI/180,xp=180/Math.PI;function Oo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function We(t,e,n){return Math.max(e,Math.min(n,t))}function u3(t,e){return(t%e+e)%e}function Gf(t,e,n){return(1-n)*t+n*e}function Zo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _n(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const vg=class vg{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vg.prototype.isVector2=!0;let Ee=vg;class Bo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3],f=s[o+0],p=s[o+1],m=s[o+2],S=s[o+3];if(d!==S||l!==f||u!==p||c!==m){let g=l*f+u*p+c*m+d*S;g<0&&(f=-f,p=-p,m=-m,S=-S,g=-g);let h=1-a;if(g<.9995){const v=Math.acos(g),y=Math.sin(v);h=Math.sin(h*v)/y,a=Math.sin(a*v)/y,l=l*h+f*a,u=u*h+p*a,c=c*h+m*a,d=d*h+S*a}else{l=l*h+f*a,u=u*h+p*a,c=c*h+m*a,d=d*h+S*a;const v=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=v,u*=v,c*=v,d*=v}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],f=s[o+1],p=s[o+2],m=s[o+3];return e[n]=a*m+c*d+l*p-u*f,e[n+1]=l*m+c*f+u*d-a*p,e[n+2]=u*m+c*p+a*f-l*d,e[n+3]=c*m-a*d-l*f-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"YXZ":this._x=f*c*d+u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"ZXY":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d-f*p*m;break;case"ZYX":this._x=f*c*d-u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d+f*p*m;break;case"YZX":this._x=f*c*d+u*p*m,this._y=u*p*d+f*c*m,this._z=u*c*m-f*p*d,this._w=u*c*d-f*p*m;break;case"XZY":this._x=f*c*d-u*p*m,this._y=u*p*d-f*c*m,this._z=u*c*m+f*p*d,this._w=u*c*d+f*p*m;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const u=Math.acos(a),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _g=class _g{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(h_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(h_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(We(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_g.prototype.isVector3=!0;let F=_g;const Wf=new F,h_=new Bo,xg=class xg{constructor(e,n,i,r,s,o,a,l,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],f=i[2],p=i[5],m=i[8],S=r[0],g=r[3],h=r[6],v=r[1],y=r[4],_=r[7],T=r[2],E=r[5],C=r[8];return s[0]=o*S+a*v+l*T,s[3]=o*g+a*y+l*E,s[6]=o*h+a*_+l*C,s[1]=u*S+c*v+d*T,s[4]=u*g+c*y+d*E,s[7]=u*h+c*_+d*C,s[2]=f*S+p*v+m*T,s[5]=f*g+p*y+m*E,s[8]=f*h+p*_+m*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,f=a*l-c*s,p=u*s-o*l,m=n*d+i*f+r*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/m;return e[0]=d*S,e[1]=(r*u-c*i)*S,e[2]=(a*i-r*o)*S,e[3]=f*S,e[4]=(c*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-u*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return ho("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xf.makeScale(e,n)),this}rotate(e){return ho("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xf.makeRotation(-e)),this}translate(e,n){return ho("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};xg.prototype.isMatrix3=!0;let Be=xg;const Xf=new Be,p_=new Be().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),m_=new Be().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function c3(){const t={enabled:!0,workingColorSpace:gc,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===tt&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===tt&&(r.r=po(r.r),r.g=po(r.g),r.b=po(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===vr?vc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ho("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ho("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[gc]:{primaries:e,whitePoint:i,transfer:vc,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:tt,toXYZ:p_,fromXYZ:m_,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const qe=c3();function Xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function po(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ws;class f3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ws===void 0&&(ws=sl("canvas")),ws.width=e.width,ws.height=e.height;const r=ws.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ws}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Xi(n[i]/255)*255):n[i]=Xi(n[i]);return{data:n,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let d3=0;class cg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:d3++}),this.uuid=Oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Yf(r[o].image)):s.push(Yf(r[o]))}else s=Yf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Yf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?f3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}let h3=0;const $f=new F;class ln extends _s{constructor(e=ln.DEFAULT_IMAGE,n=ln.DEFAULT_MAPPING,i=Hi,r=Hi,s=an,o=ts,a=oi,l=Pn,u=ln.DEFAULT_ANISOTROPY,c=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h3++}),this.uuid=Oo(),this.name="",this.source=new cg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize($f).x}get height(){return this.source.getSize($f).y}get depth(){return this.source.getSize($f).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==EE)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=EE;ln.DEFAULT_ANISOTROPY=1;const yg=class yg{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],f=l[1],p=l[5],m=l[9],S=l[2],g=l[6],h=l[10];if(Math.abs(c-f)<.01&&Math.abs(d-S)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+f)<.1&&Math.abs(d+S)<.1&&Math.abs(m+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,_=(p+1)/2,T=(h+1)/2,E=(c+f)/4,C=(d+S)/4,x=(m+g)/4;return y>_&&y>T?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=E/i,s=C/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=E/r,s=x/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=C/s,r=x/s),this.set(i,r,s,n),this}let v=Math.sqrt((g-m)*(g-m)+(d-S)*(d-S)+(f-c)*(f-c));return Math.abs(v)<.001&&(v=1),this.x=(g-m)/v,this.y=(d-S)/v,this.z=(f-c)/v,this.w=Math.acos((u+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=We(this.x,e.x,n.x),this.y=We(this.y,e.y,n.y),this.z=We(this.z,e.z,n.z),this.w=We(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=We(this.x,e,n),this.y=We(this.y,e,n),this.z=We(this.z,e,n),this.w=We(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(We(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yg.prototype.isVector4=!0;let vt=yg;class p3 extends _s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new vt(0,0,e,n),this.scissorTest=!1,this.viewport=new vt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new ln(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new cg(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ri extends p3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class LE extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class m3 extends ln{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=kt,this.minFilter=kt,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const xc=class xc{constructor(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g)}set(e,n,i,r,s,o,a,l,u,c,d,f,p,m,S,g){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=d,h[14]=f,h[3]=p,h[7]=m,h[11]=S,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/As.setFromMatrixColumn(e,0).length(),s=1/As.setFromMatrixColumn(e,1).length(),o=1/As.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*c,p=o*d,m=a*c,S=a*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+m*u,n[5]=f-S*u,n[9]=-a*l,n[2]=S-f*u,n[6]=m+p*u,n[10]=o*l}else if(e.order==="YXZ"){const f=l*c,p=l*d,m=u*c,S=u*d;n[0]=f+S*a,n[4]=m*a-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-a,n[2]=p*a-m,n[6]=S+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*c,p=l*d,m=u*c,S=u*d;n[0]=f-S*a,n[4]=-o*d,n[8]=m+p*a,n[1]=p+m*a,n[5]=o*c,n[9]=S-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*c,p=o*d,m=a*c,S=a*d;n[0]=l*c,n[4]=m*u-p,n[8]=f*u+S,n[1]=l*d,n[5]=S*u+f,n[9]=p*u-m,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*u,m=a*l,S=a*u;n[0]=l*c,n[4]=S-f*d,n[8]=m*d+p,n[1]=d,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*d+m,n[10]=f-S*d}else if(e.order==="XZY"){const f=o*l,p=o*u,m=a*l,S=a*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=f*d+S,n[5]=o*c,n[9]=p*d-m,n[2]=m*d-p,n[6]=a*c,n[10]=S*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(g3,e,v3)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),sr.crossVectors(i,wn),sr.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),sr.crossVectors(i,wn)),sr.normalize(),Wl.crossVectors(wn,sr),r[0]=sr.x,r[4]=Wl.x,r[8]=wn.x,r[1]=sr.y,r[5]=Wl.y,r[9]=wn.y,r[2]=sr.z,r[6]=Wl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],f=i[9],p=i[13],m=i[2],S=i[6],g=i[10],h=i[14],v=i[3],y=i[7],_=i[11],T=i[15],E=r[0],C=r[4],x=r[8],A=r[12],b=r[1],P=r[5],D=r[9],H=r[13],$=r[2],k=r[6],Y=r[10],O=r[14],L=r[3],X=r[7],j=r[11],ne=r[15];return s[0]=o*E+a*b+l*$+u*L,s[4]=o*C+a*P+l*k+u*X,s[8]=o*x+a*D+l*Y+u*j,s[12]=o*A+a*H+l*O+u*ne,s[1]=c*E+d*b+f*$+p*L,s[5]=c*C+d*P+f*k+p*X,s[9]=c*x+d*D+f*Y+p*j,s[13]=c*A+d*H+f*O+p*ne,s[2]=m*E+S*b+g*$+h*L,s[6]=m*C+S*P+g*k+h*X,s[10]=m*x+S*D+g*Y+h*j,s[14]=m*A+S*H+g*O+h*ne,s[3]=v*E+y*b+_*$+T*L,s[7]=v*C+y*P+_*k+T*X,s[11]=v*x+y*D+_*Y+T*j,s[15]=v*A+y*H+_*O+T*ne,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],f=e[10],p=e[14],m=e[3],S=e[7],g=e[11],h=e[15],v=l*p-u*f,y=a*p-u*d,_=a*f-l*d,T=o*p-u*c,E=o*f-l*c,C=o*d-a*c;return n*(S*v-g*y+h*_)-i*(m*v-g*T+h*E)+r*(m*y-S*T+h*C)-s*(m*_-S*E+g*C)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],o=e[5],a=e[9],l=e[2],u=e[6],c=e[10];return n*(o*c-a*u)-i*(s*c-a*l)+r*(s*u-o*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],f=e[10],p=e[11],m=e[12],S=e[13],g=e[14],h=e[15],v=n*a-i*o,y=n*l-r*o,_=n*u-s*o,T=i*l-r*a,E=i*u-s*a,C=r*u-s*l,x=c*S-d*m,A=c*g-f*m,b=c*h-p*m,P=d*g-f*S,D=d*h-p*S,H=f*h-p*g,$=v*H-y*D+_*P+T*b-E*A+C*x;if($===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/$;return e[0]=(a*H-l*D+u*P)*k,e[1]=(r*D-i*H-s*P)*k,e[2]=(S*C-g*E+h*T)*k,e[3]=(f*E-d*C-p*T)*k,e[4]=(l*b-o*H-u*A)*k,e[5]=(n*H-r*b+s*A)*k,e[6]=(g*_-m*C-h*y)*k,e[7]=(c*C-f*_+p*y)*k,e[8]=(o*D-a*b+u*x)*k,e[9]=(i*b-n*D-s*x)*k,e[10]=(m*E-S*_+h*v)*k,e[11]=(d*_-c*E-p*v)*k,e[12]=(a*A-o*P-l*x)*k,e[13]=(n*P-i*A+r*x)*k,e[14]=(S*y-m*T-g*v)*k,e[15]=(c*T-d*y+f*v)*k,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,d=a+a,f=s*u,p=s*c,m=s*d,S=o*c,g=o*d,h=a*d,v=l*u,y=l*c,_=l*d,T=i.x,E=i.y,C=i.z;return r[0]=(1-(S+h))*T,r[1]=(p+_)*T,r[2]=(m-y)*T,r[3]=0,r[4]=(p-_)*E,r[5]=(1-(f+h))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(m+y)*C,r[9]=(g-v)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let o=As.set(r[0],r[1],r[2]).length();const a=As.set(r[4],r[5],r[6]).length(),l=As.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Zn.copy(this);const u=1/o,c=1/a,d=1/l;return Zn.elements[0]*=u,Zn.elements[1]*=u,Zn.elements[2]*=u,Zn.elements[4]*=c,Zn.elements[5]*=c,Zn.elements[6]*=c,Zn.elements[8]*=d,Zn.elements[9]*=d,Zn.elements[10]*=d,n.setFromRotationMatrix(Zn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,S;if(l)m=s/(o-s),S=o*s/(o-s);else if(a===yi)m=-(o+s)/(o-s),S=-2*o*s/(o-s);else if(a===rl)m=-o/(o-s),S=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=f,u[12]=0,u[1]=0,u[5]=d,u[9]=p,u[13]=0,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=yi,l=!1){const u=this.elements,c=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let m,S;if(l)m=1/(o-s),S=o/(o-s);else if(a===yi)m=-2/(o-s),S=-(o+s)/(o-s);else if(a===rl)m=-1/(o-s),S=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=c,u[4]=0,u[8]=0,u[12]=f,u[1]=0,u[5]=d,u[9]=0,u[13]=p,u[2]=0,u[6]=0,u[10]=m,u[14]=S,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};xc.prototype.isMatrix4=!0;let ct=xc;const As=new F,Zn=new ct,g3=new F(0,0,0),v3=new F(1,1,1),sr=new F,Wl=new F,wn=new F,g_=new ct,v_=new Bo;class Qi{constructor(e=0,n=0,i=0,r=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-We(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(We(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return v_.setFromEuler(this),this.setFromQuaternion(v_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class DE{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _3=0;const __=new F,Cs=new Bo,Di=new ct,Xl=new F,jo=new F,x3=new F,y3=new Bo,x_=new F(1,0,0),y_=new F(0,1,0),S_=new F(0,0,1),M_={type:"added"},S3={type:"removed"},Rs={type:"childadded",child:null},qf={type:"childremoved",child:null};class pn extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_3++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new F,n=new Qi,i=new Bo,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Be}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new DE,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(e,n){return Cs.setFromAxisAngle(e,n),this.quaternion.premultiply(Cs),this}rotateX(e){return this.rotateOnAxis(x_,e)}rotateY(e){return this.rotateOnAxis(y_,e)}rotateZ(e){return this.rotateOnAxis(S_,e)}translateOnAxis(e,n){return __.copy(e).applyQuaternion(this.quaternion),this.position.add(__.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(x_,e)}translateY(e){return this.translateOnAxis(y_,e)}translateZ(e){return this.translateOnAxis(S_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Xl.copy(e):Xl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(jo,Xl,this.up):Di.lookAt(Xl,jo,this.up),this.quaternion.setFromRotationMatrix(Di),r&&(Di.extractRotation(r.matrixWorld),Cs.setFromRotationMatrix(Di),this.quaternion.premultiply(Cs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(S3),qf.child=e,this.dispatchEvent(qf),qf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),Rs.child=e,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,x3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,y3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new F(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ha extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const M3={type:"move"};class Kf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ha,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ha,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ha,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const S of e.hand.values()){const g=n.getJointPose(S,i),h=this._getHandJoint(u,S);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],f=c.position.distanceTo(d.position),p=.02,m=.005;u.inputState.pinching&&f>p+m?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&f<=p-m&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M3)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ha;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const IE={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Zf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=qe.workingColorSpace){if(e=u3(e,1),n=We(n,0,1),i=We(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Oe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=IE[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return qe.workingToColorSpace(rn.copy(this),e),Math.round(We(rn.r*255,0,255))*65536+Math.round(We(rn.g*255,0,255))*256+Math.round(We(rn.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=qe.workingColorSpace){qe.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=qe.workingColorSpace){return qe.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=Rn){qe.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+n,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(or),e.getHSL(Yl);const i=Gf(or.h,Yl.h,n),r=Gf(or.s,Yl.s,n),s=Gf(or.l,Yl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new Xe;Xe.NAMES=IE;class NE extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new F,Ii=new F,jf=new F,Ni=new F,bs=new F,Ps=new F,E_=new F,Jf=new F,Qf=new F,ed=new F,td=new vt,nd=new vt,id=new vt;class ri{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),Ii.subVectors(i,n),jf.subVectors(e,n);const o=jn.dot(jn),a=jn.dot(Ii),l=jn.dot(jf),u=Ii.dot(Ii),c=Ii.dot(jf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(u*l-a*c)*f,m=(o*c-a*l)*f;return s.set(1-p-m,m,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,n),nd.fromBufferAttribute(e,i),id.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(td,s.x),o.addScaledVector(nd,s.y),o.addScaledVector(id,s.z),o}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),Ii.subVectors(e,n),jn.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),jn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;bs.subVectors(r,i),Ps.subVectors(s,i),Jf.subVectors(e,i);const l=bs.dot(Jf),u=Ps.dot(Jf);if(l<=0&&u<=0)return n.copy(i);Qf.subVectors(e,r);const c=bs.dot(Qf),d=Ps.dot(Qf);if(c>=0&&d<=c)return n.copy(r);const f=l*d-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(bs,o);ed.subVectors(e,s);const p=bs.dot(ed),m=Ps.dot(ed);if(m>=0&&p<=m)return n.copy(s);const S=p*u-l*m;if(S<=0&&u>=0&&m<=0)return a=u/(u-m),n.copy(i).addScaledVector(Ps,a);const g=c*m-p*d;if(g<=0&&d-c>=0&&p-m>=0)return E_.subVectors(s,r),a=(d-c)/(d-c+(p-m)),n.copy(r).addScaledVector(E_,a);const h=1/(g+S+f);return o=S*h,a=f*h,n.copy(i).addScaledVector(bs,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xs{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Jn):Jn.fromBufferAttribute(s,o),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$l.copy(i.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),ql.subVectors(this.max,Jo),Ls.subVectors(e.a,Jo),Ds.subVectors(e.b,Jo),Is.subVectors(e.c,Jo),ar.subVectors(Ds,Ls),lr.subVectors(Is,Ds),Vr.subVectors(Ls,Is);let n=[0,-ar.z,ar.y,0,-lr.z,lr.y,0,-Vr.z,Vr.y,ar.z,0,-ar.x,lr.z,0,-lr.x,Vr.z,0,-Vr.x,-ar.y,ar.x,0,-lr.y,lr.x,0,-Vr.y,Vr.x,0];return!rd(n,Ls,Ds,Is,ql)||(n=[1,0,0,0,1,0,0,0,1],!rd(n,Ls,Ds,Is,ql))?!1:(Kl.crossVectors(ar,lr),n=[Kl.x,Kl.y,Kl.z],rd(n,Ls,Ds,Is,ql))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new F,new F,new F,new F,new F,new F,new F,new F],Jn=new F,$l=new xs,Ls=new F,Ds=new F,Is=new F,ar=new F,lr=new F,Vr=new F,Jo=new F,ql=new F,Kl=new F,zr=new F;function rd(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){zr.fromArray(t,s);const a=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=n.dot(zr),c=i.dot(zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Nt=new F,Zl=new Ee;let E3=0;class ui extends _s{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:E3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=u_,this.updateRanges=[],this.gpuType=si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Zl.fromBufferAttribute(this,n),Zl.applyMatrix3(e),this.setXY(n,Zl.x,Zl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Zo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_n(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Zo(n,this.array)),n}setX(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Zo(n,this.array)),n}setY(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Zo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Zo(n,this.array)),n}setW(e,n){return this.normalized&&(n=_n(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=_n(n,this.array),i=_n(i,this.array),r=_n(r,this.array),s=_n(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==u_&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class UE extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class FE extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}const T3=new xs,Qo=new F,sd=new F;class _l{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):T3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const n=Qo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(sd)),this.expandByPoint(Qo.copy(e.center).sub(sd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let w3=0;const Vn=new ct,od=new pn,Ns=new F,An=new xs,ea=new xs,Gt=new F;class qn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:w3++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(s3(e)?FE:UE)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,n,i){return Vn.makeTranslation(e,n,i),this.applyMatrix4(Vn),this}scale(e,n,i){return Vn.makeScale(e,n,i),this.applyMatrix4(Vn),this}lookAt(e){return od.lookAt(e),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ns).negate(),this.translate(Ns.x,Ns.y,Ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];An.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,An.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,An.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(An.min),this.boundingBox.expandByPoint(An.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _l);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(An.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(An.min,ea.min),An.expandByPoint(Gt),Gt.addVectors(An.max,ea.max),An.expandByPoint(Gt)):(An.expandByPoint(ea.min),An.expandByPoint(ea.max))}An.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Gt.fromBufferAttribute(a,u),l&&(Ns.fromBufferAttribute(e,u),Gt.add(Ns)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new ui(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));const a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new F,l[x]=new F;const u=new F,c=new F,d=new F,f=new Ee,p=new Ee,m=new Ee,S=new F,g=new F;function h(x,A,b){u.fromBufferAttribute(i,x),c.fromBufferAttribute(i,A),d.fromBufferAttribute(i,b),f.fromBufferAttribute(s,x),p.fromBufferAttribute(s,A),m.fromBufferAttribute(s,b),c.sub(u),d.sub(u),p.sub(f),m.sub(f);const P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(S.copy(c).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(P),g.copy(d).multiplyScalar(p.x).addScaledVector(c,-m.x).multiplyScalar(P),a[x].add(S),a[A].add(S),a[b].add(S),l[x].add(g),l[A].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let x=0,A=v.length;x<A;++x){const b=v[x],P=b.start,D=b.count;for(let H=P,$=P+D;H<$;H+=3)h(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new F,_=new F,T=new F,E=new F;function C(x){T.fromBufferAttribute(r,x),E.copy(T);const A=a[x];y.copy(A),y.sub(T.multiplyScalar(T.dot(A))).normalize(),_.crossVectors(E,A);const P=_.dot(l[x])<0?-1:1;o.setXYZW(x,y.x,y.y,y.z,P)}for(let x=0,A=v.length;x<A;++x){const b=v[x],P=b.start,D=b.count;for(let H=P,$=P+D;H<$;H+=3)C(e.getX(H+0)),C(e.getX(H+1)),C(e.getX(H+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,o=new F,a=new F,l=new F,u=new F,c=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),S=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,g),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,f=new u.constructor(l.length*c);let p=0,m=0;for(let S=0,g=l.length;S<g;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*c;for(let h=0;h<c;h++)f[m++]=u[p++]}return new ui(f,c,d)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new qn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const f=u[c],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,f=u.length;d<f;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let f=0,p=d.length;f<p;f++)c.push(d[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let A3=0;class ys extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:A3++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=fo,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dh,this.blendDst=Ih,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Co,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=l_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Oe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dh&&(i.blendSrc=this.blendSrc),this.blendDst!==Ih&&(i.blendDst=this.blendDst),this.blendEquation!==Kr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Co&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==l_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ee().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ee().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Fi=new F,ad=new F,jl=new F,ur=new F,ld=new F,Jl=new F,ud=new F;class C3{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ad.copy(e).add(n).multiplyScalar(.5),jl.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(ad);const s=e.distanceTo(n)*.5,o=-this.direction.dot(jl),a=ur.dot(this.direction),l=-ur.dot(jl),u=ur.lengthSq(),c=Math.abs(1-o*o);let d,f,p,m;if(c>0)if(d=o*l-a,f=o*a-l,m=s*c,d>=0)if(f>=-m)if(f<=m){const S=1/c;d*=S,f*=S,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+u}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;else f<=-m?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u):f<=m?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+u);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ad).addScaledVector(jl,f),p}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),r=Fi.dot(Fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,f=this.origin;return u>=0?(i=(e.min.x-f.x)*u,r=(e.max.x-f.x)*u):(i=(e.max.x-f.x)*u,r=(e.min.x-f.x)*u),c>=0?(s=(e.min.y-f.y)*c,o=(e.max.y-f.y)*c):(s=(e.max.y-f.y)*c,o=(e.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,r,s){ld.subVectors(n,e),Jl.subVectors(i,e),ud.crossVectors(ld,Jl);let o=this.direction.dot(ud),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Jl.crossVectors(ur,Jl));if(l<0)return null;const u=a*this.direction.dot(ld.cross(ur));if(u<0||l+u>o)return null;const c=-a*ur.dot(ud);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class OE extends ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const T_=new ct,Hr=new C3,Ql=new _l,w_=new F,eu=new F,tu=new F,nu=new F,cd=new F,iu=new F,A_=new F,ru=new F;class Pt extends pn{constructor(e=new qn,n=new OE){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){iu.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(cd.fromBufferAttribute(d,e),o?iu.addScaledVector(cd,c):iu.addScaledVector(cd.sub(n),c))}n.add(iu)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Hr.copy(e.ray).recast(e.near),!(Ql.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Ql,w_)===null||Hr.origin.distanceToSquared(w_)>(e.far-e.near)**2))&&(T_.copy(s).invert(),Hr.copy(e.ray).applyMatrix4(T_),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Hr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,S=f.length;m<S;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){const E=a.getX(_),C=a.getX(_+1),x=a.getX(_+2);r=su(this,h,e,i,u,c,d,E,C,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=a.getX(g),y=a.getX(g+1),_=a.getX(g+2);r=su(this,o,e,i,u,c,d,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,S=f.length;m<S;m++){const g=f[m],h=o[g.materialIndex],v=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=v,T=y;_<T;_+=3){const E=_,C=_+1,x=_+2;r=su(this,h,e,i,u,c,d,E,C,x),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const m=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let g=m,h=S;g<h;g+=3){const v=g,y=g+1,_=g+2;r=su(this,o,e,i,u,c,d,v,y,_),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function R3(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ir,a),l===null)return null;ru.copy(a),ru.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(ru);return u<n.near||u>n.far?null:{distance:u,point:ru.clone(),object:t}}function su(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,eu),t.getVertexPosition(l,tu),t.getVertexPosition(u,nu);const c=R3(t,e,n,i,eu,tu,nu,A_);if(c){const d=new F;ri.getBarycoord(A_,eu,tu,nu,d),r&&(c.uv=ri.getInterpolatedAttribute(r,a,l,u,d,new Ee)),s&&(c.uv1=ri.getInterpolatedAttribute(s,a,l,u,d,new Ee)),o&&(c.normal=ri.getInterpolatedAttribute(o,a,l,u,d,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new F,materialIndex:0};ri.getNormal(eu,tu,nu,f.normal),c.face=f,c.barycoord=d}return c}class fg extends ln{constructor(e=null,n=1,i=1,r,s,o,a,l,u=kt,c=kt,d,f){super(null,o,a,l,u,c,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class C_ extends ui{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Us=new ct,R_=new ct,ou=[],b_=new xs,b3=new ct,ta=new Pt,na=new _l;class P3 extends Pt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new C_(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,b3)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new xs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Us),b_.copy(e.boundingBox).applyMatrix4(Us),this.boundingBox.union(b_)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new _l),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Us),na.copy(e.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(na)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ta.geometry=this.geometry,ta.material=this.material,ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),na.copy(this.boundingSphere),na.applyMatrix4(i),e.ray.intersectsSphere(na)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Us),R_.multiplyMatrices(i,Us),ta.matrixWorld=R_,ta.raycast(e,ou);for(let o=0,a=ou.length;o<a;o++){const l=ou[o];l.instanceId=s,l.object=this,n.push(l)}ou.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new C_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fg(new Float32Array(r*this.count),r,this.count,$c,si));const s=this.morphTexture.source.data.data;let o=0;for(let u=0;u<i.length;u++)o+=i[u];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;return s[l]=a,s.set(i,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fd=new F,L3=new F,D3=new Be;class qr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fd.subVectors(i,n).cross(L3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(fd),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(o<0||o>1)?null:n.copy(e.start).addScaledVector(r,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||D3.getNormalMatrix(e),r=this.coplanarPoint(fd).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new _l,I3=new Ee(.5,.5),au=new F;class dg{constructor(e=new qr,n=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=yi,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],u=s[3],c=s[4],d=s[5],f=s[6],p=s[7],m=s[8],S=s[9],g=s[10],h=s[11],v=s[12],y=s[13],_=s[14],T=s[15];if(r[0].setComponents(u-o,p-c,h-m,T-v).normalize(),r[1].setComponents(u+o,p+c,h+m,T+v).normalize(),r[2].setComponents(u+a,p+d,h+S,T+y).normalize(),r[3].setComponents(u-a,p-d,h-S,T-y).normalize(),i)r[4].setComponents(l,f,g,_).normalize(),r[5].setComponents(u-l,p-f,h-g,T-_).normalize();else if(r[4].setComponents(u-l,p-f,h-g,T-_).normalize(),n===yi)r[5].setComponents(u+l,p+f,h+g,T+_).normalize();else if(n===rl)r[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){Gr.center.set(0,0,0);const n=I3.distanceTo(e.center);return Gr.radius=.7071067811865476+n,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(au.x=r.normal.x>0?e.max.x:e.min.x,au.y=r.normal.y>0?e.max.y:e.min.y,au.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BE extends ln{constructor(e=[],n=ds,i,r,s,o,a,l,u,c){super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bo extends ln{constructor(e,n,i=bi,r,s,o,a=kt,l=kt,u,c=Ji,d=1){if(c!==Ji&&c!==ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cg(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class N3 extends bo{constructor(e,n=bi,i=ds,r,s,o=kt,a=kt,l,u=Ji){const c={width:e,height:e,depth:1},d=[c,c,c,c,c,c];super(e,e,n,i,r,s,o,a,l,u),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kE extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ko extends qn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let f=0,p=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(d,2));function m(S,g,h,v,y,_,T,E,C,x,A){const b=_/C,P=T/x,D=_/2,H=T/2,$=E/2,k=C+1,Y=x+1;let O=0,L=0;const X=new F;for(let j=0;j<Y;j++){const ne=j*P-H;for(let oe=0;oe<k;oe++){const ve=oe*b-D;X[S]=ve*v,X[g]=ne*y,X[h]=$,u.push(X.x,X.y,X.z),X[S]=0,X[g]=0,X[h]=E>0?1:-1,c.push(X.x,X.y,X.z),d.push(oe/C),d.push(1-j/x),O+=1}}for(let j=0;j<x;j++)for(let ne=0;ne<C;ne++){const oe=f+ne+k*j,ve=f+ne+k*(j+1),Le=f+(ne+1)+k*(j+1),Ie=f+(ne+1)+k*j;l.push(oe,ve,Ie),l.push(ve,Le,Ie),L+=6}a.addGroup(p,L,A),p+=L,f+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class _c extends qn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],u=new F,c=new Ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){const p=i+d/n*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[f]/e+1)/2,c.y=(o[f+1]/e+1)/2,l.push(c.x,c.y)}for(let d=1;d<=n;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _c(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ba extends qn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const u=this;r=Math.floor(r),s=Math.floor(s);const c=[],d=[],f=[],p=[];let m=0;const S=[],g=i/2;let h=0;v(),o===!1&&(e>0&&y(!0),n>0&&y(!1)),this.setIndex(c),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(p,2));function v(){const _=new F,T=new F;let E=0;const C=(n-e)/i;for(let x=0;x<=s;x++){const A=[],b=x/s,P=b*(n-e)+e;for(let D=0;D<=r;D++){const H=D/r,$=H*l+a,k=Math.sin($),Y=Math.cos($);T.x=P*k,T.y=-b*i+g,T.z=P*Y,d.push(T.x,T.y,T.z),_.set(k,C,Y).normalize(),f.push(_.x,_.y,_.z),p.push(H,1-b),A.push(m++)}S.push(A)}for(let x=0;x<r;x++)for(let A=0;A<s;A++){const b=S[A][x],P=S[A+1][x],D=S[A+1][x+1],H=S[A][x+1];(e>0||A!==0)&&(c.push(b,P,H),E+=3),(n>0||A!==s-1)&&(c.push(P,D,H),E+=3)}u.addGroup(h,E,0),h+=E}function y(_){const T=m,E=new Ee,C=new F;let x=0;const A=_===!0?e:n,b=_===!0?1:-1;for(let D=1;D<=r;D++)d.push(0,g*b,0),f.push(0,b,0),p.push(.5,.5),m++;const P=m;for(let D=0;D<=r;D++){const $=D/r*l+a,k=Math.cos($),Y=Math.sin($);C.x=A*Y,C.y=g*b,C.z=A*k,d.push(C.x,C.y,C.z),f.push(0,b,0),E.x=k*.5+.5,E.y=Y*.5*b+.5,p.push(E.x,E.y),m++}for(let D=0;D<r;D++){const H=T+D,$=P+D;_===!0?c.push($,$+1,H):c.push($+1,$,H),x+=3}u.addGroup(h,x,_===!0?1:2),h+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Li{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],f=i[r+1]-c,p=(o-c)/f;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new Ee:new F);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new F,r=[],s=[],o=[],a=new F,l=new ct;for(let p=0;p<=e;p++){const m=p/e;r[p]=this.getTangentAt(m,new F)}s[0]=new F,o[0]=new F;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),f<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(We(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,m))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(We(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(r[m],p*m)),o[m].crossVectors(r[m],s[m])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class hg extends Li{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new Ee){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=u-this.aY;l=f*c-p*d+this.aX,u=f*d+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class U3 extends hg{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pg(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,d){let f=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+d)+(l-a)/d;f*=c,p*=c,r(o,a,f,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const P_=new F,L_=new F,dd=new pg,hd=new pg,pd=new pg;class F3 extends Li{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new F){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(L_.subVectors(r[0],r[1]).add(r[0]),u=L_);const d=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(P_.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=P_),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let m=Math.pow(u.distanceToSquared(d),p),S=Math.pow(d.distanceToSquared(f),p),g=Math.pow(f.distanceToSquared(c),p);S<1e-4&&(S=1),m<1e-4&&(m=S),g<1e-4&&(g=S),dd.initNonuniformCatmullRom(u.x,d.x,f.x,c.x,m,S,g),hd.initNonuniformCatmullRom(u.y,d.y,f.y,c.y,m,S,g),pd.initNonuniformCatmullRom(u.z,d.z,f.z,c.z,m,S,g)}else this.curveType==="catmullrom"&&(dd.initCatmullRom(u.x,d.x,f.x,c.x,this.tension),hd.initCatmullRom(u.y,d.y,f.y,c.y,this.tension),pd.initCatmullRom(u.z,d.z,f.z,c.z,this.tension));return i.set(dd.calc(l),hd.calc(l),pd.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new F().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function D_(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function O3(t,e){const n=1-t;return n*n*e}function B3(t,e){return 2*(1-t)*t*e}function k3(t,e){return t*t*e}function Pa(t,e,n,i){return O3(t,e)+B3(t,n)+k3(t,i)}function V3(t,e){const n=1-t;return n*n*n*e}function z3(t,e){const n=1-t;return 3*n*n*t*e}function H3(t,e){return 3*(1-t)*t*t*e}function G3(t,e){return t*t*t*e}function La(t,e,n,i,r){return V3(t,e)+z3(t,n)+H3(t,i)+G3(t,r)}class VE extends Li{constructor(e=new Ee,n=new Ee,i=new Ee,r=new Ee){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(La(e,r.x,s.x,o.x,a.x),La(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class W3 extends Li{constructor(e=new F,n=new F,i=new F,r=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(La(e,r.x,s.x,o.x,a.x),La(e,r.y,s.y,o.y,a.y),La(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zE extends Li{constructor(e=new Ee,n=new Ee){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new Ee){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new Ee){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class X3 extends Li{constructor(e=new F,n=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new F){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new F){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HE extends Li{constructor(e=new Ee,n=new Ee,i=new Ee){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new Ee){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Pa(e,r.x,s.x,o.x),Pa(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y3 extends Li{constructor(e=new F,n=new F,i=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new F){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Pa(e,r.x,s.x,o.x),Pa(e,r.y,s.y,o.y),Pa(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GE extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new Ee){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],d=r[o>r.length-3?r.length-1:o+2];return i.set(D_(a,l.x,u.x,c.x,d.x),D_(a,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new Ee().fromArray(r))}return this}}var I_=Object.freeze({__proto__:null,ArcCurve:U3,CatmullRomCurve3:F3,CubicBezierCurve:VE,CubicBezierCurve3:W3,EllipseCurve:hg,LineCurve:zE,LineCurve3:X3,QuadraticBezierCurve:HE,QuadraticBezierCurve3:Y3,SplineCurve:GE});class $3 extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new I_[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new I_[r.type]().fromJSON(r))}return this}}class N_ extends $3{constructor(e){super(),this.type="Path",this.currentPoint=new Ee,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new zE(this.currentPoint.clone(),new Ee(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new HE(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new VE(this.currentPoint.clone(),new Ee(e,n),new Ee(i,r),new Ee(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new GE(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new hg(e,n,i,r,s,o,a,l);if(this.curves.length>0){const d=u.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class WE extends N_{constructor(e){super(e),this.uuid=Oo(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new N_().fromJSON(r))}return this}}function q3(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=XE(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u;if(i&&(s=Q3(t,e,s,n)),t.length>80*n){a=t[0],l=t[1];let c=a,d=l;for(let f=n;f<r;f+=n){const p=t[f],m=t[f+1];p<a&&(a=p),m<l&&(l=m),p>c&&(c=p),m>d&&(d=m)}u=Math.max(c-a,d-l),u=u!==0?32767/u:0}return ol(s,o,n,a,l,u,0),o}function XE(t,e,n,i,r){let s;if(r===cL(t,e,n,i)>0)for(let o=e;o<n;o+=i)s=U_(o/i|0,t[o],t[o+1],s);else for(let o=n-i;o>=e;o-=i)s=U_(o/i|0,t[o],t[o+1],s);return s&&Po(s,s.next)&&(ll(s),s=s.next),s}function ps(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Po(n,n.next)||_t(n.prev,n,n.next)===0)){if(ll(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ol(t,e,n,i,r,s,o){if(!t)return;!o&&s&&rL(t,i,r,s);let a=t;for(;t.prev!==t.next;){const l=t.prev,u=t.next;if(s?Z3(t,i,r,s):K3(t)){e.push(l.i,t.i,u.i),ll(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=j3(ps(t),e),ol(t,e,n,i,r,s,2)):o===2&&J3(t,e,n,i,r,s):ol(ps(t),e,n,i,r,s,1);break}}}function K3(t){const e=t.prev,n=t,i=t.next;if(_t(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=Math.min(r,s,o),d=Math.min(a,l,u),f=Math.max(r,s,o),p=Math.max(a,l,u);let m=i.next;for(;m!==e;){if(m.x>=c&&m.x<=f&&m.y>=d&&m.y<=p&&pa(r,a,s,l,o,u,m.x,m.y)&&_t(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Z3(t,e,n,i){const r=t.prev,s=t,o=t.next;if(_t(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,d=s.y,f=o.y,p=Math.min(a,l,u),m=Math.min(c,d,f),S=Math.max(a,l,u),g=Math.max(c,d,f),h=yp(p,m,e,n,i),v=yp(S,g,e,n,i);let y=t.prevZ,_=t.nextZ;for(;y&&y.z>=h&&_&&_.z<=v;){if(y.x>=p&&y.x<=S&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&pa(a,c,l,d,u,f,y.x,y.y)&&_t(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=p&&_.x<=S&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&pa(a,c,l,d,u,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=h;){if(y.x>=p&&y.x<=S&&y.y>=m&&y.y<=g&&y!==r&&y!==o&&pa(a,c,l,d,u,f,y.x,y.y)&&_t(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=p&&_.x<=S&&_.y>=m&&_.y<=g&&_!==r&&_!==o&&pa(a,c,l,d,u,f,_.x,_.y)&&_t(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function j3(t,e){let n=t;do{const i=n.prev,r=n.next.next;!Po(i,r)&&$E(i,n,n.next,r)&&al(i,r)&&al(r,i)&&(e.push(i.i,n.i,r.i),ll(n),ll(n.next),n=t=r),n=n.next}while(n!==t);return ps(n)}function J3(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&aL(o,a)){let l=qE(o,a);o=ps(o,o.next),l=ps(l,l.next),ol(o,e,n,i,r,s,0),ol(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function Q3(t,e,n,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=XE(t,a,l,i,!1);u===u.next&&(u.steiner=!0),r.push(oL(u))}r.sort(eL);for(let s=0;s<r.length;s++)n=tL(r[s],n);return n}function eL(t,e){let n=t.x-e.x;if(n===0&&(n=t.y-e.y,n===0)){const i=(t.next.y-t.y)/(t.next.x-t.x),r=(e.next.y-e.y)/(e.next.x-e.x);n=i-r}return n}function tL(t,e){const n=nL(t,e);if(!n)return e;const i=qE(n,t);return ps(i,i.next),ps(n,n.next)}function nL(t,e){let n=e;const i=t.x,r=t.y;let s=-1/0,o;if(Po(t,n))return n;do{if(Po(t,n.next))return n.next;if(r<=n.y&&r>=n.next.y&&n.next.y!==n.y){const d=n.x+(r-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(d<=i&&d>s&&(s=d,o=n.x<n.next.x?n:n.next,d===i))return o}n=n.next}while(n!==e);if(!o)return null;const a=o,l=o.x,u=o.y;let c=1/0;n=o;do{if(i>=n.x&&n.x>=l&&i!==n.x&&YE(r<u?i:s,r,l,u,r<u?s:i,r,n.x,n.y)){const d=Math.abs(r-n.y)/(i-n.x);al(n,t)&&(d<c||d===c&&(n.x>o.x||n.x===o.x&&iL(o,n)))&&(o=n,c=d)}n=n.next}while(n!==a);return o}function iL(t,e){return _t(t.prev,t,e.prev)<0&&_t(e.next,t,t.next)<0}function rL(t,e,n,i){let r=t;do r.z===0&&(r.z=yp(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,sL(r)}function sL(t){let e,n=1;do{let i=t,r;t=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<n&&(a++,o=o.nextZ,!!o);u++);let l=n;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;i=o}s.nextZ=null,n*=2}while(e>1);return t}function yp(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function oL(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function YE(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function pa(t,e,n,i,r,s,o,a){return!(t===o&&e===a)&&YE(t,e,n,i,r,s,o,a)}function aL(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!lL(t,e)&&(al(t,e)&&al(e,t)&&uL(t,e)&&(_t(t.prev,t,e.prev)||_t(t,e.prev,e))||Po(t,e)&&_t(t.prev,t,t.next)>0&&_t(e.prev,e,e.next)>0)}function _t(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Po(t,e){return t.x===e.x&&t.y===e.y}function $E(t,e,n,i){const r=uu(_t(t,e,n)),s=uu(_t(t,e,i)),o=uu(_t(n,i,t)),a=uu(_t(n,i,e));return!!(r!==s&&o!==a||r===0&&lu(t,n,e)||s===0&&lu(t,i,e)||o===0&&lu(n,t,i)||a===0&&lu(n,e,i))}function lu(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function uu(t){return t>0?1:t<0?-1:0}function lL(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&$E(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function al(t,e){return _t(t.prev,t,t.next)<0?_t(t,e,t.next)>=0&&_t(t,t.prev,e)>=0:_t(t,e,t.prev)<0||_t(t,t.next,e)<0}function uL(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function qE(t,e){const n=Sp(t.i,t.x,t.y),i=Sp(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function U_(t,e,n,i){const r=Sp(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function ll(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function Sp(t,e,n){return{i:t,x:e,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cL(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class fL{static triangulate(e,n,i=2){return q3(e,n,i)}}class Da{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Da.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];F_(e),O_(i,e);let o=e.length;n.forEach(F_);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,O_(i,n[l]);const a=fL.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function F_(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function O_(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class qc extends qn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,f=n/l,p=[],m=[],S=[],g=[];for(let h=0;h<c;h++){const v=h*f-o;for(let y=0;y<u;y++){const _=y*d-s;m.push(_,-v,0),S.push(0,0,1),g.push(y/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const y=v+u*h,_=v+u*(h+1),T=v+1+u*(h+1),E=v+1+u*h;p.push(y,_,E),p.push(_,T,E)}this.setIndex(p),this.setAttribute("position",new $t(m,3)),this.setAttribute("normal",new $t(S,3)),this.setAttribute("uv",new $t(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.width,e.height,e.widthSegments,e.heightSegments)}}class mg extends qn{constructor(e=new WE([new Ee(0,.5),new Ee(-.5,-.5),new Ee(.5,-.5)]),n=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:n};const i=[],r=[],s=[],o=[];let a=0,l=0;if(Array.isArray(e)===!1)u(e);else for(let c=0;c<e.length;c++)u(e[c]),this.addGroup(a,l,c),a+=l,l=0;this.setIndex(i),this.setAttribute("position",new $t(r,3)),this.setAttribute("normal",new $t(s,3)),this.setAttribute("uv",new $t(o,2));function u(c){const d=r.length/3,f=c.extractPoints(n);let p=f.shape;const m=f.holes;Da.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,h=m.length;g<h;g++){const v=m[g];Da.isClockWise(v)===!0&&(m[g]=v.reverse())}const S=Da.triangulateShape(p,m);for(let g=0,h=m.length;g<h;g++){const v=m[g];p=p.concat(v)}for(let g=0,h=p.length;g<h;g++){const v=p[g];r.push(v.x,v.y,0),s.push(0,0,1),o.push(v.x,v.y)}for(let g=0,h=S.length;g<h;g++){const v=S[g],y=v[0]+d,_=v[1]+d,T=v[2]+d;i.push(y,_,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes;return dL(n,e)}static fromJSON(e,n){const i=[];for(let r=0,s=e.shapes.length;r<s;r++){const o=n[e.shapes[r]];i.push(o)}return new mg(i,e.curveSegments)}}function dL(t,e){if(e.shapes=[],Array.isArray(t))for(let n=0,i=t.length;n<i;n++){const r=t[n];e.shapes.push(r.uuid)}else e.shapes.push(t.uuid);return e}function Lo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(B_(r))r.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(B_(r[0])){const s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Lo(t[n]);for(const r in i)e[r]=i[r]}return e}function B_(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function hL(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function KE(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const pL={clone:Lo,merge:cn};var mL=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gL=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pi extends ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mL,this.fragmentShader=gL,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=hL(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Xe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ee().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Be().fromArray(r.value);break;case"m4":this.uniforms[i].value=new ct().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vL extends Pi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ia extends ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class md extends ys{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Xe(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class _L extends ys{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=il,this.normalScale=new Ee(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=eg,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xL extends ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yL extends ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gd={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(k_(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!k_(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};function k_(t){try{const e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class SL{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,f=u.length;d<f;d+=2){const p=u[d],m=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ML=new SL;class gg{constructor(e){this.manager=e!==void 0?e:ML,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}gg.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fs=new WeakMap;class EL extends gg{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gd.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0);else{let d=Fs.get(o);d===void 0&&(d=[],Fs.set(o,d)),d.push({onLoad:n,onError:r})}return o}const a=sl("img");function l(){c(),n&&n(this);const d=Fs.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Fs.delete(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),gd.remove(`image:${e}`);const f=Fs.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onError&&m.onError(d)}Fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),gd.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class TL extends gg{constructor(e){super(e)}load(e,n,i,r){const s=new ln,o=new EL(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class wL extends pn{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const vd=new ct,V_=new F,z_=new F;class AL{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ee(512,512),this.mapType=Pn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dg,this._frameExtents=new Ee(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;V_.setFromMatrixPosition(e.matrixWorld),n.position.copy(V_),z_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(z_),n.updateMatrixWorld(),vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===rl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(vd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cu=new F,fu=new Bo,mi=new F;class ZE extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cu,fu,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,fu,mi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(cu,fu,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cu,fu,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const cr=new F,H_=new Ee,G_=new Ee;class bn extends ZE{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(Hf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,n){return this.getViewBounds(e,H_,G_),n.subVectors(G_,H_)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Hf*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class CL extends AL{constructor(){super(new bn(90,1,.5,500)),this.isPointLightShadow=!0}}class RL extends wL{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new CL}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class jE extends ZE{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Os=-90,Bs=1;class bL extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new bn(Os,Bs,e,n);r.layers=this.layers,this.add(r);const s=new bn(Os,Bs,e,n);s.layers=this.layers,this.add(s);const o=new bn(Os,Bs,e,n);o.layers=this.layers,this.add(o);const a=new bn(Os,Bs,e,n);a.layers=this.layers,this.add(a);const l=new bn(Os,Bs,e,n);l.layers=this.layers,this.add(l);const u=new bn(Os,Bs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===yi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===rl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(d,f,p),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class PL extends bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Sg=class Sg{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};Sg.prototype.isMatrix2=!0;let W_=Sg;function X_(t,e,n,i){const r=LL(i);switch(n){case RE:return t*e;case $c:return t*e/r.components*r.byteLength;case sg:return t*e/r.components*r.byteLength;case hs:return t*e*2/r.components*r.byteLength;case og:return t*e*2/r.components*r.byteLength;case bE:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case ag:return t*e*4/r.components*r.byteLength;case Lu:case Du:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Iu:case Nu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wh:case Yh:return Math.max(t,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(t,8)*Math.max(e,8)/2;case $h:case qh:case Zh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Kh:case pc:case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case rp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case sp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case op:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ap:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case up:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case hp:case pp:case mp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gp:case vp:return Math.ceil(t/4)*Math.ceil(e/4)*8;case mc:case _p:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LL(t){switch(t){case Pn:case TE:return{byteLength:1,components:1};case tl:case wE:case ji:return{byteLength:2,components:1};case ig:case rg:return{byteLength:2,components:4};case bi:case ng:case si:return{byteLength:4,components:1};case AE:case CE:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qm}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function JE(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function DL(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,d=u.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)p=t.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,u){const c=l.array,d=l.updateRanges;if(t.bindBuffer(u,a),d.length===0)t.bufferSubData(u,0,c);else{d.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<d.length;p++){const m=d[f],S=d[p];S.start<=m.start+m.count+1?m.count=Math.max(m.count,S.start+S.count-m.start):(++f,d[f]=S)}d.length=f+1;for(let p=0,m=d.length;p<m;p++){const S=d[p];t.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}var IL=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NL=`#ifdef USE_ALPHAHASH
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
#endif`,UL=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,FL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OL=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,BL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kL=`#ifdef USE_AOMAP
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
#endif`,VL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zL=`#ifdef USE_BATCHING
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
#endif`,HL=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,GL=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,XL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,YL=`#ifdef USE_IRIDESCENCE
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
#endif`,$L=`#ifdef USE_BUMPMAP
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
#endif`,qL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,QL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,e2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,t2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,n2=`#define PI 3.141592653589793
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
} // validated`,i2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,r2=`vec3 transformedNormal = objectNormal;
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
#endif`,s2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,o2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,a2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,l2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u2="gl_FragColor = linearToOutputTexel( gl_FragColor );",c2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f2=`#ifdef USE_ENVMAP
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
#endif`,d2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,h2=`#ifdef USE_ENVMAP
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
#endif`,p2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,m2=`#ifdef USE_ENVMAP
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
#endif`,g2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,v2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,x2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,y2=`#ifdef USE_GRADIENTMAP
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
}`,S2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,M2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,E2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,w2=`#ifdef USE_ENVMAP
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
#endif`,A2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,P2=`PhysicalMaterial material;
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
#endif`,L2=`uniform sampler2D dfgLUT;
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
}`,D2=`
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
#endif`,I2=`#if defined( RE_IndirectDiffuse )
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
#endif`,N2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,U2=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,F2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,V2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G2=`#if defined( USE_POINTS_UV )
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
#endif`,W2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,q2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K2=`#ifdef USE_MORPHTARGETS
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
#endif`,Z2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,j2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,J2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,nD=`#ifdef USE_NORMALMAP
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
#endif`,iD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_D=`float getShadowMask() {
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
}`,xD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yD=`#ifdef USE_SKINNING
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
#endif`,SD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MD=`#ifdef USE_SKINNING
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
#endif`,ED=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,CD=`#ifdef USE_TRANSMISSION
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
#endif`,RD=`#ifdef USE_TRANSMISSION
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
#endif`,bD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ID=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ND=`uniform sampler2D t2D;
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
}`,UD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kD=`#include <common>
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
}`,VD=`#if DEPTH_PACKING == 3200
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
}`,zD=`#define DISTANCE
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
}`,HD=`#define DISTANCE
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
}`,GD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XD=`uniform float scale;
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
}`,YD=`uniform vec3 diffuse;
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
}`,$D=`#include <common>
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
}`,qD=`uniform vec3 diffuse;
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
}`,KD=`#define LAMBERT
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
}`,ZD=`#define LAMBERT
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
}`,jD=`#define MATCAP
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
}`,JD=`#define MATCAP
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
}`,QD=`#define NORMAL
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
}`,eI=`#define NORMAL
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
}`,tI=`#define PHONG
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
}`,nI=`#define PHONG
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
}`,iI=`#define STANDARD
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
}`,rI=`#define STANDARD
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
}`,sI=`#define TOON
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
}`,oI=`#define TOON
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
}`,aI=`uniform float size;
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
}`,lI=`uniform vec3 diffuse;
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
}`,uI=`#include <common>
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
}`,cI=`uniform vec3 color;
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
}`,fI=`uniform float rotation;
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
}`,dI=`uniform vec3 diffuse;
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
}`,He={alphahash_fragment:IL,alphahash_pars_fragment:NL,alphamap_fragment:UL,alphamap_pars_fragment:FL,alphatest_fragment:OL,alphatest_pars_fragment:BL,aomap_fragment:kL,aomap_pars_fragment:VL,batching_pars_vertex:zL,batching_vertex:HL,begin_vertex:GL,beginnormal_vertex:WL,bsdfs:XL,iridescence_fragment:YL,bumpmap_pars_fragment:$L,clipping_planes_fragment:qL,clipping_planes_pars_fragment:KL,clipping_planes_pars_vertex:ZL,clipping_planes_vertex:jL,color_fragment:JL,color_pars_fragment:QL,color_pars_vertex:e2,color_vertex:t2,common:n2,cube_uv_reflection_fragment:i2,defaultnormal_vertex:r2,displacementmap_pars_vertex:s2,displacementmap_vertex:o2,emissivemap_fragment:a2,emissivemap_pars_fragment:l2,colorspace_fragment:u2,colorspace_pars_fragment:c2,envmap_fragment:f2,envmap_common_pars_fragment:d2,envmap_pars_fragment:h2,envmap_pars_vertex:p2,envmap_physical_pars_fragment:w2,envmap_vertex:m2,fog_vertex:g2,fog_pars_vertex:v2,fog_fragment:_2,fog_pars_fragment:x2,gradientmap_pars_fragment:y2,lightmap_pars_fragment:S2,lights_lambert_fragment:M2,lights_lambert_pars_fragment:E2,lights_pars_begin:T2,lights_toon_fragment:A2,lights_toon_pars_fragment:C2,lights_phong_fragment:R2,lights_phong_pars_fragment:b2,lights_physical_fragment:P2,lights_physical_pars_fragment:L2,lights_fragment_begin:D2,lights_fragment_maps:I2,lights_fragment_end:N2,lightprobes_pars_fragment:U2,logdepthbuf_fragment:F2,logdepthbuf_pars_fragment:O2,logdepthbuf_pars_vertex:B2,logdepthbuf_vertex:k2,map_fragment:V2,map_pars_fragment:z2,map_particle_fragment:H2,map_particle_pars_fragment:G2,metalnessmap_fragment:W2,metalnessmap_pars_fragment:X2,morphinstance_vertex:Y2,morphcolor_vertex:$2,morphnormal_vertex:q2,morphtarget_pars_vertex:K2,morphtarget_vertex:Z2,normal_fragment_begin:j2,normal_fragment_maps:J2,normal_pars_fragment:Q2,normal_pars_vertex:eD,normal_vertex:tD,normalmap_pars_fragment:nD,clearcoat_normal_fragment_begin:iD,clearcoat_normal_fragment_maps:rD,clearcoat_pars_fragment:sD,iridescence_pars_fragment:oD,opaque_fragment:aD,packing:lD,premultiplied_alpha_fragment:uD,project_vertex:cD,dithering_fragment:fD,dithering_pars_fragment:dD,roughnessmap_fragment:hD,roughnessmap_pars_fragment:pD,shadowmap_pars_fragment:mD,shadowmap_pars_vertex:gD,shadowmap_vertex:vD,shadowmask_pars_fragment:_D,skinbase_vertex:xD,skinning_pars_vertex:yD,skinning_vertex:SD,skinnormal_vertex:MD,specularmap_fragment:ED,specularmap_pars_fragment:TD,tonemapping_fragment:wD,tonemapping_pars_fragment:AD,transmission_fragment:CD,transmission_pars_fragment:RD,uv_pars_fragment:bD,uv_pars_vertex:PD,uv_vertex:LD,worldpos_vertex:DD,background_vert:ID,background_frag:ND,backgroundCube_vert:UD,backgroundCube_frag:FD,cube_vert:OD,cube_frag:BD,depth_vert:kD,depth_frag:VD,distance_vert:zD,distance_frag:HD,equirect_vert:GD,equirect_frag:WD,linedashed_vert:XD,linedashed_frag:YD,meshbasic_vert:$D,meshbasic_frag:qD,meshlambert_vert:KD,meshlambert_frag:ZD,meshmatcap_vert:jD,meshmatcap_frag:JD,meshnormal_vert:QD,meshnormal_frag:eI,meshphong_vert:tI,meshphong_frag:nI,meshphysical_vert:iI,meshphysical_frag:rI,meshtoon_vert:sI,meshtoon_frag:oI,points_vert:aI,points_frag:lI,shadow_vert:uI,shadow_frag:cI,sprite_vert:fI,sprite_frag:dI},pe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},envMapRotation:{value:new Be},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},_i={basic:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:cn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:cn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:cn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:cn([pe.points,pe.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:cn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:cn([pe.common,pe.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:cn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:cn([pe.sprite,pe.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Be}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:cn([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:cn([pe.lights,pe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};_i.physical={uniforms:cn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const du={r:0,b:0,g:0},hI=new ct,QE=new Be;QE.set(-1,0,0,0,1,0,0,0,1);function pI(t,e,n,i,r,s){const o=new Xe(0);let a=r===!0?0:1,l,u,c=null,d=0,f=null;function p(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const _=v.backgroundBlurriness>0;y=e.get(y,_)}return y}function m(v){let y=!1;const _=p(v);_===null?g(o,a):_&&_.isColor&&(g(_,1),y=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function S(v,y){const _=p(y);_&&(_.isCubeTexture||_.mapping===Yc)?(u===void 0&&(u=new Pt(new ko(1,1,1),new Pi({name:"BackgroundCubeMaterial",uniforms:Lo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hI.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(QE),u.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,(c!==_||d!==_.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,c=_,d=_.version,f=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Pt(new qc(2,2),new Pi({name:"BackgroundMaterial",uniforms:Lo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qe.getTransfer(_.colorSpace)!==tt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||d!==_.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,c=_,d=_.version,f=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,y){v.getRGB(du,KE(t)),n.buffers.color.setClear(du.r,du.g,du.b,y,s)}function h(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,g(o,a)},render:m,addToRenderList:S,dispose:h}}function mI(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(P,D,H,$,k){let Y=!1;const O=d(P,$,H,D);s!==O&&(s=O,u(s.object)),Y=p(P,$,H,k),Y&&m(P,$,H,k),k!==null&&e.update(k,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,_(P,D,H,$),k!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return t.createVertexArray()}function u(P){return t.bindVertexArray(P)}function c(P){return t.deleteVertexArray(P)}function d(P,D,H,$){const k=$.wireframe===!0;let Y=i[D.id];Y===void 0&&(Y={},i[D.id]=Y);const O=P.isInstancedMesh===!0?P.id:0;let L=Y[O];L===void 0&&(L={},Y[O]=L);let X=L[H.id];X===void 0&&(X={},L[H.id]=X);let j=X[k];return j===void 0&&(j=f(l()),X[k]=j),j}function f(P){const D=[],H=[],$=[];for(let k=0;k<n;k++)D[k]=0,H[k]=0,$[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:$,object:P,attributes:{},index:null}}function p(P,D,H,$){const k=s.attributes,Y=D.attributes;let O=0;const L=H.getAttributes();for(const X in L)if(L[X].location>=0){const ne=k[X];let oe=Y[X];if(oe===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(oe=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(oe=P.instanceColor)),ne===void 0||ne.attribute!==oe||oe&&ne.data!==oe.data)return!0;O++}return s.attributesNum!==O||s.index!==$}function m(P,D,H,$){const k={},Y=D.attributes;let O=0;const L=H.getAttributes();for(const X in L)if(L[X].location>=0){let ne=Y[X];ne===void 0&&(X==="instanceMatrix"&&P.instanceMatrix&&(ne=P.instanceMatrix),X==="instanceColor"&&P.instanceColor&&(ne=P.instanceColor));const oe={};oe.attribute=ne,ne&&ne.data&&(oe.data=ne.data),k[X]=oe,O++}s.attributes=k,s.attributesNum=O,s.index=$}function S(){const P=s.newAttributes;for(let D=0,H=P.length;D<H;D++)P[D]=0}function g(P){h(P,0)}function h(P,D){const H=s.newAttributes,$=s.enabledAttributes,k=s.attributeDivisors;H[P]=1,$[P]===0&&(t.enableVertexAttribArray(P),$[P]=1),k[P]!==D&&(t.vertexAttribDivisor(P,D),k[P]=D)}function v(){const P=s.newAttributes,D=s.enabledAttributes;for(let H=0,$=D.length;H<$;H++)D[H]!==P[H]&&(t.disableVertexAttribArray(H),D[H]=0)}function y(P,D,H,$,k,Y,O){O===!0?t.vertexAttribIPointer(P,D,H,k,Y):t.vertexAttribPointer(P,D,H,$,k,Y)}function _(P,D,H,$){S();const k=$.attributes,Y=H.getAttributes(),O=D.defaultAttributeValues;for(const L in Y){const X=Y[L];if(X.location>=0){let j=k[L];if(j===void 0&&(L==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),L==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){const ne=j.normalized,oe=j.itemSize,ve=e.get(j);if(ve===void 0)continue;const Le=ve.buffer,Ie=ve.type,q=ve.bytesPerElement,ie=Ie===t.INT||Ie===t.UNSIGNED_INT||j.gpuType===ng;if(j.isInterleavedBufferAttribute){const te=j.data,De=te.stride,ke=j.offset;if(te.isInstancedInterleavedBuffer){for(let Ne=0;Ne<X.locationSize;Ne++)h(X.location+Ne,te.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let Ne=0;Ne<X.locationSize;Ne++)g(X.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let Ne=0;Ne<X.locationSize;Ne++)y(X.location+Ne,oe/X.locationSize,Ie,ne,De*q,(ke+oe/X.locationSize*Ne)*q,ie)}else{if(j.isInstancedBufferAttribute){for(let te=0;te<X.locationSize;te++)h(X.location+te,j.meshPerAttribute);P.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let te=0;te<X.locationSize;te++)g(X.location+te);t.bindBuffer(t.ARRAY_BUFFER,Le);for(let te=0;te<X.locationSize;te++)y(X.location+te,oe/X.locationSize,Ie,ne,oe*q,oe/X.locationSize*te*q,ie)}}else if(O!==void 0){const ne=O[L];if(ne!==void 0)switch(ne.length){case 2:t.vertexAttrib2fv(X.location,ne);break;case 3:t.vertexAttrib3fv(X.location,ne);break;case 4:t.vertexAttrib4fv(X.location,ne);break;default:t.vertexAttrib1fv(X.location,ne)}}}}v()}function T(){A();for(const P in i){const D=i[P];for(const H in D){const $=D[H];for(const k in $){const Y=$[k];for(const O in Y)c(Y[O].object),delete Y[O];delete $[k]}}delete i[P]}}function E(P){if(i[P.id]===void 0)return;const D=i[P.id];for(const H in D){const $=D[H];for(const k in $){const Y=$[k];for(const O in Y)c(Y[O].object),delete Y[O];delete $[k]}}delete i[P.id]}function C(P){for(const D in i){const H=i[D];for(const $ in H){const k=H[$];if(k[P.id]===void 0)continue;const Y=k[P.id];for(const O in Y)c(Y[O].object),delete Y[O];delete k[P.id]}}}function x(P){for(const D in i){const H=i[D],$=P.isInstancedMesh===!0?P.id:0,k=H[$];if(k!==void 0){for(const Y in k){const O=k[Y];for(const L in O)c(O[L].object),delete O[L];delete k[Y]}delete H[$],Object.keys(H).length===0&&delete i[D]}}}function A(){b(),o=!0,s!==r&&(s=r,u(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:g,disableUnusedAttributes:v}}function gI(t,e,n){let i;function r(l){i=l}function s(l,u){t.drawArrays(i,l,u),n.update(u,i,1)}function o(l,u,c){c!==0&&(t.drawArraysInstanced(i,l,u,c),n.update(u,i,c))}function a(l,u,c){if(c===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,c);let f=0;for(let p=0;p<c;p++)f+=u[p];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function vI(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==oi&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const x=C===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Pn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==si&&!x)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Oe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:S,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:T,samples:E}}function _I(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new qr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=c(d,f,0)},this.setState=function(d,f,p){const m=d.clippingPlanes,S=d.clipIntersection,g=d.clipShadows,h=t.get(d);if(!r||m===null||m.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,y=v*4;let _=h.clippingState||null;l.value=_,_=c(m,f,y,p);for(let T=0;T!==y;++T)_[T]=n[T];h.clippingState=_,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,f,p,m){const S=d!==null?d.length:0;let g=null;if(S!==0){if(g=l.value,m!==!0||g===null){const h=p+S*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let y=0,_=p;y!==S;++y,_+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(g,_),g[_+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,g}}const yr=4,Y_=[.125,.215,.35,.446,.526,.582],Zr=20,xI=256,ia=new jE,$_=new Xe;let _d=null,xd=0,yd=0,Sd=!1;const yI=new F;class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=yI}=s;_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Z_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=K_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,xd,yd),this._renderer.xr.enabled=Sd,e.scissorTest=!1,ks(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ds||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),yd=this._renderer.getActiveMipmapLevel(),Sd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:ji,format:oi,colorSpace:gc,depthBuffer:!1},r=q_(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=q_(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SI(s)),this._blurMaterial=EI(s,e,n),this._ggxMaterial=MI(s,e,n)}return r}_compileMaterial(e){const n=new Pt(new qn,e);this._renderer.compile(n,ia)}_sceneToCubeUV(e,n,i,r,s){const l=new bn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor($_),d.toneMapping=Ci,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new ko,new OE({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const S=this._backgroundBox,g=S.material;let h=!1;const v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,h=!0):(g.color.copy($_),h=!0);for(let y=0;y<6;y++){const _=y%3;_===0?(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[y],s.y,s.z)):_===1?(l.up.set(0,0,u[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[y],s.z)):(l.up.set(0,u[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[y]));const T=this._cubeSize;ks(r,_*T,y>2?T:0,T,T),d.setRenderTarget(r),h&&d.render(S,l),d.render(e,l)}d.toneMapping=p,d.autoClear=f,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ds||e.mapping===Ro;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Z_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=K_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ks(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ia)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),d=Math.sqrt(u*u-c*c),f=0+u*1.25,p=d*f,{_lodMax:m}=this,S=this._sizeLods[i],g=3*S*(i>m-yr?i-m+yr:0),h=4*(this._cubeSize-S);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-n,ks(s,g,h,3*S,2*S),r.setRenderTarget(s),r.render(a,ia),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-i,ks(e,g,h,3*S,2*S),r.setRenderTarget(e),r.render(a,ia)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&je("blur direction must be either latitudinal or longitudinal!");const c=3,d=this._lodMeshes[r];d.material=u;const f=u.uniforms,p=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),S=s/m,g=isFinite(s)?1+Math.floor(c*S):Zr;g>Zr&&Oe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Zr}`);const h=[];let v=0;for(let C=0;C<Zr;++C){const x=C/S,A=Math.exp(-x*x/2);h.push(A),C===0?v+=A:C<g&&(v+=2*A)}for(let C=0;C<h.length;C++)h[C]=h[C]/v;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=m,f.mipInt.value=y-i;const _=this._sizeLods[r],T=3*_*(r>y-yr?r-y+yr:0),E=4*(this._cubeSize-_);ks(n,T,E,3*_,2*_),l.setRenderTarget(n),l.render(d,ia)}}function SI(t){const e=[],n=[],i=[];let r=t;const s=t-yr+1+Y_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-yr?l=Y_[o-t+yr-1]:o===0&&(l=0),n.push(l);const u=1/(a-2),c=-u,d=1+u,f=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,m=6,S=3,g=2,h=1,v=new Float32Array(S*m*p),y=new Float32Array(g*m*p),_=new Float32Array(h*m*p);for(let E=0;E<p;E++){const C=E%3*2/3-1,x=E>2?0:-1,A=[C,x,0,C+2/3,x,0,C+2/3,x+1,0,C,x,0,C+2/3,x+1,0,C,x+1,0];v.set(A,S*m*E),y.set(f,g*m*E);const b=[E,E,E,E,E,E];_.set(b,h*m*E)}const T=new qn;T.setAttribute("position",new ui(v,S)),T.setAttribute("uv",new ui(y,g)),T.setAttribute("faceIndex",new ui(_,h)),i.push(new Pt(T,null)),r>yr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function q_(t,e,n){const i=new Ri(t,e,n);return i.texture.mapping=Yc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ks(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function MI(t,e,n){return new Pi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xI,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function EI(t,e,n){const i=new Float32Array(Zr),r=new F(0,1,0);return new Pi({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function K_(){return new Pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Kc(),fragmentShader:`

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
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Z_(){return new Pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Kc(){return`

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
	`}class eT extends Ri{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new BE(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ko(5,5,5),s=new Pi({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Wi});s.uniforms.tEquirect.value=n;const o=new Pt(r,s),a=n.minFilter;return n.minFilter===ts&&(n.minFilter=an),new bL(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function TI(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,p=!1){return f==null?null:p?o(f):s(f)}function s(f){if(f&&f.isTexture){const p=f.mapping;if(p===kf||p===Vf)if(e.has(f)){const m=e.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const S=new eT(m.height);return S.fromEquirectangularTexture(t,f),e.set(f,S),f.addEventListener("dispose",u),a(S.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const p=f.mapping,m=p===kf||p===Vf,S=p===ds||p===Ro;if(m||S){let g=n.get(f);const h=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==h)return i===null&&(i=new Mp(t)),g=m?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const v=f.image;return m&&v&&v.height>0||S&&v&&l(v)?(i===null&&(i=new Mp(t)),g=m?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",c),g.texture):null}}}return f}function a(f,p){return p===kf?f.mapping=ds:p===Vf&&(f.mapping=Ro),f}function l(f){let p=0;const m=6;for(let S=0;S<m;S++)f[S]!==void 0&&p++;return p===m}function u(f){const p=f.target;p.removeEventListener("dispose",u);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=n.get(p);m!==void 0&&(n.delete(p),m.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function wI(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ho("WebGLRenderer: "+i+" extension not supported."),r}}}function AI(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function u(d){const f=[],p=d.index,m=d.attributes.position;let S=0;if(m===void 0)return;if(p!==null){const v=p.array;S=p.version;for(let y=0,_=v.length;y<_;y+=3){const T=v[y+0],E=v[y+1],C=v[y+2];f.push(T,E,E,C,C,T)}}else{const v=m.array;S=m.version;for(let y=0,_=v.length/3-1;y<_;y+=3){const T=y+0,E=y+1,C=y+2;f.push(T,E,E,C,C,T)}}const g=new(m.count>=65535?FE:UE)(f,1);g.version=S;const h=s.get(d);h&&e.remove(h),s.set(d,g)}function c(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function CI(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*o),n.update(f,i,1)}function u(d,f,p){p!==0&&(t.drawElementsInstanced(i,f,s,d*o,p),n.update(f,i,p))}function c(d,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,p);let S=0;for(let g=0;g<p;g++)S+=f[g];n.update(S,i,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c}function RI(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:je("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function bI(t,e,n){const i=new WeakMap,r=new vt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let A=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",A)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,S=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),m===!0&&(y=2),S===!0&&(y=3);let _=a.attributes.position.count*y,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const E=new Float32Array(_*T*4*d),C=new LE(E,_,T,d);C.type=si,C.needsUpdate=!0;const x=y*4;for(let b=0;b<d;b++){const P=g[b],D=h[b],H=v[b],$=_*T*4*b;for(let k=0;k<P.count;k++){const Y=k*x;p===!0&&(r.fromBufferAttribute(P,k),E[$+Y+0]=r.x,E[$+Y+1]=r.y,E[$+Y+2]=r.z,E[$+Y+3]=0),m===!0&&(r.fromBufferAttribute(D,k),E[$+Y+4]=r.x,E[$+Y+5]=r.y,E[$+Y+6]=r.z,E[$+Y+7]=0),S===!0&&(r.fromBufferAttribute(H,k),E[$+Y+8]=r.x,E[$+Y+9]=r.y,E[$+Y+10]=r.z,E[$+Y+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new Ee(_,T)},i.set(a,f),a.addEventListener("dispose",A)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let S=0;S<u.length;S++)p+=u[S];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",m),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function PI(t,e,n,i,r){let s=new WeakMap;function o(u){const c=r.render.frame,d=u.geometry,f=e.get(u,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),s.get(u)!==c&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,c))),u.isSkinnedMesh){const p=u.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return f}function a(){s=new WeakMap}function l(u){const c=u.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:o,dispose:a}}const LI={[vE]:"LINEAR_TONE_MAPPING",[_E]:"REINHARD_TONE_MAPPING",[xE]:"CINEON_TONE_MAPPING",[tg]:"ACES_FILMIC_TONE_MAPPING",[SE]:"AGX_TONE_MAPPING",[ME]:"NEUTRAL_TONE_MAPPING",[yE]:"CUSTOM_TONE_MAPPING"};function DI(t,e,n,i,r,s){const o=new Ri(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,depthTexture:r?new bo(e,n):void 0}),a=new Ri(e,n,{type:ji,depthBuffer:!1,stencilBuffer:!1}),l=new qn;l.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new $t([0,2,0,0,2,0],2));const u=new vL({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(l,u),d=new jE(-1,1,1,-1,0,1);let f=null,p=null,m=!1,S,g=null,h=[],v=!1;this.setSize=function(y,_){o.setSize(y,_),a.setSize(y,_);for(let T=0;T<h.length;T++){const E=h[T];E.setSize&&E.setSize(y,_)}},this.setEffects=function(y){h=y,v=h.length>0&&h[0].isRenderPass===!0;const _=o.width,T=o.height;for(let E=0;E<h.length;E++){const C=h[E];C.setSize&&C.setSize(_,T)}},this.begin=function(y,_){if(m||y.toneMapping===Ci&&h.length===0)return!1;if(g=_,_!==null){const T=_.width,E=_.height;(o.width!==T||o.height!==E)&&this.setSize(T,E)}return v===!1&&y.setRenderTarget(o),S=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return v},this.end=function(y,_){y.toneMapping=S,m=!0;let T=o,E=a;for(let C=0;C<h.length;C++){const x=h[C];if(x.enabled!==!1&&(x.render(y,E,T,_),x.needsSwap!==!1)){const A=T;T=E,E=A}}if(f!==y.outputColorSpace||p!==y.toneMapping){f=y.outputColorSpace,p=y.toneMapping,u.defines={},qe.getTransfer(f)===tt&&(u.defines.SRGB_TRANSFER="");const C=LI[p];C&&(u.defines[C]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(g),y.render(c,d),g=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.depthTexture&&o.depthTexture.dispose(),o.dispose(),a.dispose(),l.dispose(),u.dispose()}}const tT=new ln,Ep=new bo(1,1),nT=new LE,iT=new m3,rT=new BE,j_=[],J_=[],Q_=new Float32Array(16),ex=new Float32Array(9),tx=new Float32Array(4);function Vo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=j_[r];if(s===void 0&&(s=new Float32Array(r),j_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Vt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zc(t,e){let n=J_[e];n===void 0&&(n=new Int32Array(e),J_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function II(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function UI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Vt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function FI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function OI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;tx.set(i),t.uniformMatrix2fv(this.addr,!1,tx),zt(n,i)}}function BI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;ex.set(i),t.uniformMatrix3fv(this.addr,!1,ex),zt(n,i)}}function kI(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Vt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Vt(n,i))return;Q_.set(i),t.uniformMatrix4fv(this.addr,!1,Q_),zt(n,i)}}function VI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function HI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function GI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function WI(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function XI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Vt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function YI(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Vt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function $I(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Vt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function qI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Ep.compareFunction=n.isReversedDepthBuffer()?ug:lg,s=Ep):s=tT,n.setTexture2D(e||s,r)}function KI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||iT,r)}function ZI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||rT,r)}function jI(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||nT,r)}function JI(t){switch(t){case 5126:return II;case 35664:return NI;case 35665:return UI;case 35666:return FI;case 35674:return OI;case 35675:return BI;case 35676:return kI;case 5124:case 35670:return VI;case 35667:case 35671:return zI;case 35668:case 35672:return HI;case 35669:case 35673:return GI;case 5125:return WI;case 36294:return XI;case 36295:return YI;case 36296:return $I;case 35678:case 36198:case 36298:case 36306:case 35682:return qI;case 35679:case 36299:case 36307:return KI;case 35680:case 36300:case 36308:case 36293:return ZI;case 36289:case 36303:case 36311:case 36292:return jI}}function QI(t,e){t.uniform1fv(this.addr,e)}function eN(t,e){const n=Vo(e,this.size,2);t.uniform2fv(this.addr,n)}function tN(t,e){const n=Vo(e,this.size,3);t.uniform3fv(this.addr,n)}function nN(t,e){const n=Vo(e,this.size,4);t.uniform4fv(this.addr,n)}function iN(t,e){const n=Vo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function rN(t,e){const n=Vo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function sN(t,e){const n=Vo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oN(t,e){t.uniform1iv(this.addr,e)}function aN(t,e){t.uniform2iv(this.addr,e)}function lN(t,e){t.uniform3iv(this.addr,e)}function uN(t,e){t.uniform4iv(this.addr,e)}function cN(t,e){t.uniform1uiv(this.addr,e)}function fN(t,e){t.uniform2uiv(this.addr,e)}function dN(t,e){t.uniform3uiv(this.addr,e)}function hN(t,e){t.uniform4uiv(this.addr,e)}function pN(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Ep:o=tT;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function mN(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||iT,s[o])}function gN(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||rT,s[o])}function vN(t,e,n){const i=this.cache,r=e.length,s=Zc(n,r);Vt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||nT,s[o])}function _N(t){switch(t){case 5126:return QI;case 35664:return eN;case 35665:return tN;case 35666:return nN;case 35674:return iN;case 35675:return rN;case 35676:return sN;case 5124:case 35670:return oN;case 35667:case 35671:return aN;case 35668:case 35672:return lN;case 35669:case 35673:return uN;case 5125:return cN;case 36294:return fN;case 36295:return dN;case 36296:return hN;case 35678:case 36198:case 36298:case 36306:case 35682:return pN;case 35679:case 36299:case 36307:return mN;case 35680:case 36300:case 36308:case 36293:return gN;case 36289:case 36303:case 36311:case 36292:return vN}}class xN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=JI(n.type)}}class yN{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_N(n.type)}}class SN{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function nx(t,e){t.seq.push(e),t.map[e.id]=e}function MN(t,e,n){const i=t.name,r=i.length;for(Md.lastIndex=0;;){const s=Md.exec(i),o=Md.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){nx(n,u===void 0?new xN(a,t,e):new yN(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new SN(a),nx(n,d)),n=d}}}class Uu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);MN(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function ix(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const EN=37297;let TN=0;function wN(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const rx=new Be;function AN(t){qe._getMatrix(rx,qe.workingColorSpace,t);const e=`mat3( ${rx.elements.map(n=>n.toFixed(4))} )`;switch(qe.getTransfer(t)){case vc:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sx(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+wN(t.getShaderSource(e),a)}else return s}function CN(t,e){const n=AN(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const RN={[vE]:"Linear",[_E]:"Reinhard",[xE]:"Cineon",[tg]:"ACESFilmic",[SE]:"AgX",[ME]:"Neutral",[yE]:"Custom"};function bN(t,e){const n=RN[e];return n===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hu=new F;function PN(){qe.getLuminanceCoefficients(hu);const t=hu.x.toFixed(4),e=hu.y.toFixed(4),n=hu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function LN(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function DN(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function IN(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ma(t){return t!==""}function ox(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NN=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(t){return t.replace(NN,FN)}const UN=new Map;function FN(t,e){let n=He[e];if(n===void 0){const i=UN.get(e);if(i!==void 0)n=He[i],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Tp(n)}const ON=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lx(t){return t.replace(ON,BN)}function BN(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ux(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const kN={[Pu]:"SHADOWMAP_TYPE_PCF",[da]:"SHADOWMAP_TYPE_VSM"};function VN(t){return kN[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zN={[ds]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[Yc]:"ENVMAP_TYPE_CUBE_UV"};function HN(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":zN[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const GN={[Ro]:"ENVMAP_MODE_REFRACTION"};function WN(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":GN[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const XN={[eg]:"ENVMAP_BLENDING_MULTIPLY",[qP]:"ENVMAP_BLENDING_MIX",[KP]:"ENVMAP_BLENDING_ADD"};function YN(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":XN[t.combine]||"ENVMAP_BLENDING_NONE"}function $N(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function qN(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=VN(n),u=HN(n),c=WN(n),d=YN(n),f=$N(n),p=LN(n),m=DN(s),S=r.createProgram();let g,h,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ma).join(`
`),g.length>0&&(g+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ma).join(`
`),h.length>0&&(h+=`
`)):(g=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),h=[ux(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?He.tonemapping_pars_fragment:"",n.toneMapping!==Ci?bN("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,CN("linearToOutputTexel",n.outputColorSpace),PN(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ma).join(`
`)),o=Tp(o),o=ox(o,n),o=ax(o,n),a=Tp(a),a=ox(a,n),a=ax(a,n),o=lx(o),a=lx(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",n.glslVersion===c_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===c_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const y=v+g+o,_=v+h+a,T=ix(r,r.VERTEX_SHADER,y),E=ix(r,r.FRAGMENT_SHADER,_);r.attachShader(S,T),r.attachShader(S,E),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(P){if(t.debug.checkShaderErrors){const D=r.getProgramInfoLog(S)||"",H=r.getShaderInfoLog(T)||"",$=r.getShaderInfoLog(E)||"",k=D.trim(),Y=H.trim(),O=$.trim();let L=!0,X=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,T,E);else{const j=sx(r,T,"vertex"),ne=sx(r,E,"fragment");je("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+k+`
`+j+`
`+ne)}else k!==""?Oe("WebGLProgram: Program Info Log:",k):(Y===""||O==="")&&(X=!1);X&&(P.diagnostics={runnable:L,programLog:k,vertexShader:{log:Y,prefix:g},fragmentShader:{log:O,prefix:h}})}r.deleteShader(T),r.deleteShader(E),x=new Uu(r,S),A=IN(r,S)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let A;this.getAttributes=function(){return A===void 0&&C(this),A};let b=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=r.getProgramParameter(S,EN)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TN++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=T,this.fragmentShader=E,this}let KN=0;class ZN{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new jN(e),n.set(e,i)),i}}class jN{constructor(e){this.id=KN++,this.code=e,this.usedTimes=0}}function JN(t){return t===hs||t===pc||t===mc}function QN(t,e,n,i,r,s){const o=new DE,a=new ZN,l=new Set,u=[],c=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function S(x,A,b,P,D,H){const $=P.fog,k=D.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,O=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,L=e.get(x.envMap||Y,O),X=L&&L.mapping===Yc?L.image.height:null,j=p[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Oe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,oe=ne!==void 0?ne.length:0;let ve=0;k.morphAttributes.position!==void 0&&(ve=1),k.morphAttributes.normal!==void 0&&(ve=2),k.morphAttributes.color!==void 0&&(ve=3);let Le,Ie,q,ie;if(j){const Te=_i[j];Le=Te.vertexShader,Ie=Te.fragmentShader}else{Le=x.vertexShader,Ie=x.fragmentShader;const Te=a.getVertexShaderStage(x),Mt=a.getFragmentShaderStage(x);a.update(x,Te,Mt),q=Te.id,ie=Mt.id}const te=t.getRenderTarget(),De=t.state.buffers.depth.getReversed(),ke=D.isInstancedMesh===!0,Ne=D.isBatchedMesh===!0,Ct=!!x.map,$e=!!x.matcap,rt=!!L,Qe=!!x.aoMap,Ke=!!x.lightMap,Dt=!!x.bumpMap&&x.wireframe===!1,Ft=!!x.normalMap,Ht=!!x.displacementMap,qt=!!x.emissiveMap,St=!!x.metalnessMap,It=!!x.roughnessMap,N=x.anisotropy>0,vn=x.clearcoat>0,et=x.dispersion>0,R=x.iridescence>0,M=x.sheen>0,B=x.transmission>0,G=N&&!!x.anisotropyMap,K=vn&&!!x.clearcoatMap,ae=vn&&!!x.clearcoatNormalMap,ue=vn&&!!x.clearcoatRoughnessMap,Z=R&&!!x.iridescenceMap,Q=R&&!!x.iridescenceThicknessMap,ce=M&&!!x.sheenColorMap,Ce=M&&!!x.sheenRoughnessMap,he=!!x.specularMap,fe=!!x.specularColorMap,Pe=!!x.specularIntensityMap,Ue=B&&!!x.transmissionMap,Ve=B&&!!x.thicknessMap,I=!!x.gradientMap,le=!!x.alphaMap,J=x.alphaTest>0,de=!!x.alphaHash,xe=!!x.extensions;let ee=Ci;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Ae={shaderID:j,shaderType:x.type,shaderName:x.name,vertexShader:Le,fragmentShader:Ie,defines:x.defines,customVertexShaderID:q,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Ne,batchingColor:Ne&&D._colorsTexture!==null,instancing:ke,instancingColor:ke&&D.instanceColor!==null,instancingMorph:ke&&D.morphTexture!==null,outputColorSpace:te===null?t.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:qe.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ct,matcap:$e,envMap:rt,envMapMode:rt&&L.mapping,envMapCubeUVHeight:X,aoMap:Qe,lightMap:Ke,bumpMap:Dt,normalMap:Ft,displacementMap:Ht,emissiveMap:qt,normalMapObjectSpace:Ft&&x.normalMapType===JP,normalMapTangentSpace:Ft&&x.normalMapType===il,packedNormalMap:Ft&&x.normalMapType===il&&JN(x.normalMap.format),metalnessMap:St,roughnessMap:It,anisotropy:N,anisotropyMap:G,clearcoat:vn,clearcoatMap:K,clearcoatNormalMap:ae,clearcoatRoughnessMap:ue,dispersion:et,iridescence:R,iridescenceMap:Z,iridescenceThicknessMap:Q,sheen:M,sheenColorMap:ce,sheenRoughnessMap:Ce,specularMap:he,specularColorMap:fe,specularIntensityMap:Pe,transmission:B,transmissionMap:Ue,thicknessMap:Ve,gradientMap:I,opaque:x.transparent===!1&&x.blending===fo&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:J,alphaHash:de,combine:x.combine,mapUv:Ct&&m(x.map.channel),aoMapUv:Qe&&m(x.aoMap.channel),lightMapUv:Ke&&m(x.lightMap.channel),bumpMapUv:Dt&&m(x.bumpMap.channel),normalMapUv:Ft&&m(x.normalMap.channel),displacementMapUv:Ht&&m(x.displacementMap.channel),emissiveMapUv:qt&&m(x.emissiveMap.channel),metalnessMapUv:St&&m(x.metalnessMap.channel),roughnessMapUv:It&&m(x.roughnessMap.channel),anisotropyMapUv:G&&m(x.anisotropyMap.channel),clearcoatMapUv:K&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(x.sheenRoughnessMap.channel),specularMapUv:he&&m(x.specularMap.channel),specularColorMapUv:fe&&m(x.specularColorMap.channel),specularIntensityMapUv:Pe&&m(x.specularIntensityMap.channel),transmissionMapUv:Ue&&m(x.transmissionMap.channel),thicknessMapUv:Ve&&m(x.thicknessMap.channel),alphaMapUv:le&&m(x.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Ft||N),vertexNormals:!!k.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!k.attributes.uv&&(Ct||le),fog:!!$,useFog:x.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||k.attributes.normal===void 0&&Ft===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:De,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:k.attributes.position!==void 0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ve,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&b.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:Ct&&x.map.isVideoTexture===!0&&qe.getTransfer(x.map.colorSpace)===tt,decodeVideoTextureEmissive:qt&&x.emissiveMap.isVideoTexture===!0&&qe.getTransfer(x.emissiveMap.colorSpace)===tt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ki,flipSided:x.side===hn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&x.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function g(x){const A=[];if(x.shaderID?A.push(x.shaderID):(A.push(x.customVertexShaderID),A.push(x.customFragmentShaderID)),x.defines!==void 0)for(const b in x.defines)A.push(b),A.push(x.defines[b]);return x.isRawShaderMaterial===!1&&(h(A,x),v(A,x),A.push(t.outputColorSpace)),A.push(x.customProgramCacheKey),A.join()}function h(x,A){x.push(A.precision),x.push(A.outputColorSpace),x.push(A.envMapMode),x.push(A.envMapCubeUVHeight),x.push(A.mapUv),x.push(A.alphaMapUv),x.push(A.lightMapUv),x.push(A.aoMapUv),x.push(A.bumpMapUv),x.push(A.normalMapUv),x.push(A.displacementMapUv),x.push(A.emissiveMapUv),x.push(A.metalnessMapUv),x.push(A.roughnessMapUv),x.push(A.anisotropyMapUv),x.push(A.clearcoatMapUv),x.push(A.clearcoatNormalMapUv),x.push(A.clearcoatRoughnessMapUv),x.push(A.iridescenceMapUv),x.push(A.iridescenceThicknessMapUv),x.push(A.sheenColorMapUv),x.push(A.sheenRoughnessMapUv),x.push(A.specularMapUv),x.push(A.specularColorMapUv),x.push(A.specularIntensityMapUv),x.push(A.transmissionMapUv),x.push(A.thicknessMapUv),x.push(A.combine),x.push(A.fogExp2),x.push(A.sizeAttenuation),x.push(A.morphTargetsCount),x.push(A.morphAttributeCount),x.push(A.numDirLights),x.push(A.numPointLights),x.push(A.numSpotLights),x.push(A.numSpotLightMaps),x.push(A.numHemiLights),x.push(A.numRectAreaLights),x.push(A.numDirLightShadows),x.push(A.numPointLightShadows),x.push(A.numSpotLightShadows),x.push(A.numSpotLightShadowsWithMaps),x.push(A.numLightProbes),x.push(A.shadowMapType),x.push(A.toneMapping),x.push(A.numClippingPlanes),x.push(A.numClipIntersection),x.push(A.depthPacking)}function v(x,A){o.disableAll(),A.instancing&&o.enable(0),A.instancingColor&&o.enable(1),A.instancingMorph&&o.enable(2),A.matcap&&o.enable(3),A.envMap&&o.enable(4),A.normalMapObjectSpace&&o.enable(5),A.normalMapTangentSpace&&o.enable(6),A.clearcoat&&o.enable(7),A.iridescence&&o.enable(8),A.alphaTest&&o.enable(9),A.vertexColors&&o.enable(10),A.vertexAlphas&&o.enable(11),A.vertexUv1s&&o.enable(12),A.vertexUv2s&&o.enable(13),A.vertexUv3s&&o.enable(14),A.vertexTangents&&o.enable(15),A.anisotropy&&o.enable(16),A.alphaHash&&o.enable(17),A.batching&&o.enable(18),A.dispersion&&o.enable(19),A.batchingColor&&o.enable(20),A.gradientMap&&o.enable(21),A.packedNormalMap&&o.enable(22),A.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),A.fog&&o.enable(0),A.useFog&&o.enable(1),A.flatShading&&o.enable(2),A.logarithmicDepthBuffer&&o.enable(3),A.reversedDepthBuffer&&o.enable(4),A.skinning&&o.enable(5),A.morphTargets&&o.enable(6),A.morphNormals&&o.enable(7),A.morphColors&&o.enable(8),A.premultipliedAlpha&&o.enable(9),A.shadowMapEnabled&&o.enable(10),A.doubleSided&&o.enable(11),A.flipSided&&o.enable(12),A.useDepthPacking&&o.enable(13),A.dithering&&o.enable(14),A.transmission&&o.enable(15),A.sheen&&o.enable(16),A.opaque&&o.enable(17),A.pointsUvs&&o.enable(18),A.decodeVideoTexture&&o.enable(19),A.decodeVideoTextureEmissive&&o.enable(20),A.alphaToCoverage&&o.enable(21),A.numLightProbeGrids>0&&o.enable(22),A.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function y(x){const A=p[x.type];let b;if(A){const P=_i[A];b=pL.clone(P.uniforms)}else b=x.uniforms;return b}function _(x,A){let b=c.get(A);return b!==void 0?++b.usedTimes:(b=new qN(t,A,x,r),u.push(b),c.set(A,b)),b}function T(x){if(--x.usedTimes===0){const A=u.indexOf(x);u[A]=u[u.length-1],u.pop(),c.delete(x.cacheKey),x.destroy()}}function E(x){a.remove(x)}function C(){a.dispose()}return{getParameters:S,getProgramCacheKey:g,getUniforms:y,acquireProgram:_,releaseProgram:T,releaseShaderCache:E,programs:u,dispose:C}}function eU(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function tU(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function cx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fx(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function a(f,p,m,S,g,h){let v=t[e];return v===void 0?(v={id:f.id,object:f,geometry:p,material:m,materialVariant:o(f),groupOrder:S,renderOrder:f.renderOrder,z:g,group:h},t[e]=v):(v.id=f.id,v.object=f,v.geometry=p,v.material=m,v.materialVariant=o(f),v.groupOrder=S,v.renderOrder=f.renderOrder,v.z=g,v.group=h),e++,v}function l(f,p,m,S,g,h){const v=a(f,p,m,S,g,h);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):n.push(v)}function u(f,p,m,S,g,h){const v=a(f,p,m,S,g,h);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):n.unshift(v)}function c(f,p,m){n.length>1&&n.sort(f||tU),i.length>1&&i.sort(p||cx),r.length>1&&r.sort(p||cx),m&&(n.reverse(),i.reverse(),r.reverse())}function d(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:u,finish:d,sort:c}}function nU(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fx,t.set(i,[o])):r>=s.length?(o=new fx,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function iU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Xe};break;case"SpotLight":n={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function rU(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let sU=0;function oU(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aU(t){const e=new iU,n=rU(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new F);const r=new F,s=new ct,o=new ct;function a(u){let c=0,d=0,f=0;for(let A=0;A<9;A++)i.probe[A].set(0,0,0);let p=0,m=0,S=0,g=0,h=0,v=0,y=0,_=0,T=0,E=0,C=0;u.sort(oU);for(let A=0,b=u.length;A<b;A++){const P=u[A],D=P.color,H=P.intensity,$=P.distance;let k=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===hs?k=P.shadow.map.texture:k=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)c+=D.r*H,d+=D.g*H,f+=D.b*H;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],H);C++}else if(P.isDirectionalLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const O=P.shadow,L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=k,i.directionalShadowMatrix[p]=P.shadow.matrix,v++}i.directional[p]=Y,p++}else if(P.isSpotLight){const Y=e.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(D).multiplyScalar(H),Y.distance=$,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[S]=Y;const O=P.shadow;if(P.map&&(i.spotLightMap[T]=P.map,T++,O.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[S]=O.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=k,_++}S++}else if(P.isRectAreaLight){const Y=e.get(P);Y.color.copy(D).multiplyScalar(H),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=Y,g++}else if(P.isPointLight){const Y=e.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const O=P.shadow,L=n.get(P);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=k,i.pointShadowMatrix[m]=P.shadow.matrix,y++}i.point[m]=Y,m++}else if(P.isHemisphereLight){const Y=e.get(P);Y.skyColor.copy(P.color).multiplyScalar(H),Y.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[h]=Y,h++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==p||x.pointLength!==m||x.spotLength!==S||x.rectAreaLength!==g||x.hemiLength!==h||x.numDirectionalShadows!==v||x.numPointShadows!==y||x.numSpotShadows!==_||x.numSpotMaps!==T||x.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=g,i.point.length=m,i.hemi.length=h,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+T-E,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=C,x.directionalLength=p,x.pointLength=m,x.spotLength=S,x.rectAreaLength=g,x.hemiLength=h,x.numDirectionalShadows=v,x.numPointShadows=y,x.numSpotShadows=_,x.numSpotMaps=T,x.numLightProbes=C,i.version=sU++)}function l(u,c){let d=0,f=0,p=0,m=0,S=0;const g=c.matrixWorldInverse;for(let h=0,v=u.length;h<v;h++){const y=u[h];if(y.isDirectionalLight){const _=i.directional[d];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),d++}else if(y.isSpotLight){const _=i.spot[p];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),o.identity(),s.copy(y.matrixWorld),s.premultiply(g),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),m++}else if(y.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){const _=i.hemi[S];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),S++}}}return{setup:a,setupView:l,state:i}}function dx(t){const e=new aU(t),n=[],i=[],r=[];function s(f){d.camera=f,n.length=0,i.length=0,r.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){r.push(f)}function u(){e.setup(n)}function c(f){e.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:u,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function lU(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dx(t),e.set(r,[a])):s>=o.length?(a=new dx(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const uU=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cU=`uniform sampler2D shadow_pass;
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
}`,fU=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],dU=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],hx=new ct,ra=new F,Ed=new F;function hU(t,e,n){let i=new dg;const r=new Ee,s=new Ee,o=new vt,a=new xL,l=new yL,u={},c=n.maxTextureSize,d={[Ir]:hn,[hn]:Ir,[ki]:ki},f=new Pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:uU,fragmentShader:cU}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new qn;m.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Pt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let h=this.type;this.render=function(E,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;this.type===bP&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Pu);const A=t.getRenderTarget(),b=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),D=t.state;D.setBlending(Wi),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const H=h!==this.type;H&&C.traverse(function($){$.material&&(Array.isArray($.material)?$.material.forEach(k=>k.needsUpdate=!0):$.material.needsUpdate=!0)});for(let $=0,k=E.length;$<k;$++){const Y=E[$],O=Y.shadow;if(O===void 0){Oe("WebGLShadowMap:",Y,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const L=O.getFrameExtents();r.multiply(L),s.copy(O.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/L.x),r.x=s.x*L.x,O.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/L.y),r.y=s.y*L.y,O.mapSize.y=s.y));const X=t.state.buffers.depth.getReversed();if(O.camera._reversedDepth=X,O.map===null||H===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===da){if(Y.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Ri(r.x,r.y,{format:hs,type:ji,minFilter:an,magFilter:an,generateMipmaps:!1}),O.map.texture.name=Y.name+".shadowMap",O.map.depthTexture=new bo(r.x,r.y,si),O.map.depthTexture.name=Y.name+".shadowMapDepth",O.map.depthTexture.format=Ji,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt}else Y.isPointLight?(O.map=new eT(r.x),O.map.depthTexture=new N3(r.x,bi)):(O.map=new Ri(r.x,r.y),O.map.depthTexture=new bo(r.x,r.y,bi)),O.map.depthTexture.name=Y.name+".shadowMap",O.map.depthTexture.format=Ji,this.type===Pu?(O.map.depthTexture.compareFunction=X?ug:lg,O.map.depthTexture.minFilter=an,O.map.depthTexture.magFilter=an):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=kt,O.map.depthTexture.magFilter=kt);O.camera.updateProjectionMatrix()}const j=O.map.isWebGLCubeRenderTarget?6:1;for(let ne=0;ne<j;ne++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,ne),t.clear();else{ne===0&&(t.setRenderTarget(O.map),t.clear());const oe=O.getViewport(ne);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),D.viewport(o)}if(Y.isPointLight){const oe=O.camera,ve=O.matrix,Le=Y.distance||oe.far;Le!==oe.far&&(oe.far=Le,oe.updateProjectionMatrix()),ra.setFromMatrixPosition(Y.matrixWorld),oe.position.copy(ra),Ed.copy(oe.position),Ed.add(fU[ne]),oe.up.copy(dU[ne]),oe.lookAt(Ed),oe.updateMatrixWorld(),ve.makeTranslation(-ra.x,-ra.y,-ra.z),hx.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hx,oe.coordinateSystem,oe.reversedDepth)}else O.updateMatrices(Y);i=O.getFrustum(),_(C,x,O.camera,Y,this.type)}O.isPointLightShadow!==!0&&this.type===da&&v(O,x),O.needsUpdate=!1}h=this.type,g.needsUpdate=!1,t.setRenderTarget(A,b,P)};function v(E,C){const x=e.update(S);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ri(r.x,r.y,{format:hs,type:ji})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(C,null,x,f,S,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(C,null,x,p,S,null)}function y(E,C,x,A){let b=null;const P=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=x.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const D=b.uuid,H=C.uuid;let $=u[D];$===void 0&&($={},u[D]=$);let k=$[H];k===void 0&&(k=b.clone(),$[H]=k,C.addEventListener("dispose",T)),b=k}if(b.visible=C.visible,b.wireframe=C.wireframe,A===da?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:d[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,x.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const D=t.properties.get(b);D.light=x}return b}function _(E,C,x,A,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===da)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);const H=e.update(E),$=E.material;if(Array.isArray($)){const k=H.groups;for(let Y=0,O=k.length;Y<O;Y++){const L=k[Y],X=$[L.materialIndex];if(X&&X.visible){const j=y(E,X,A,b);E.onBeforeShadow(t,E,C,x,H,j,L),t.renderBufferDirect(x,null,H,j,E,L),E.onAfterShadow(t,E,C,x,H,j,L)}}}else if($.visible){const k=y(E,$,A,b);E.onBeforeShadow(t,E,C,x,H,k,null),t.renderBufferDirect(x,null,H,k,E,null),E.onAfterShadow(t,E,C,x,H,k,null)}}const D=E.children;for(let H=0,$=D.length;H<$;H++)_(D[H],C,x,A,b)}function T(E){E.target.removeEventListener("dispose",T);for(const x in u){const A=u[x],b=E.target.uuid;b in A&&(A[b].dispose(),delete A[b])}}}function pU(t,e){function n(){let I=!1;const le=new vt;let J=null;const de=new vt(0,0,0,0);return{setMask:function(xe){J!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),J=xe)},setLocked:function(xe){I=xe},setClear:function(xe,ee,Ae,Te,Mt){Mt===!0&&(xe*=Te,ee*=Te,Ae*=Te),le.set(xe,ee,Ae,Te),de.equals(le)===!1&&(t.clearColor(xe,ee,Ae,Te),de.copy(le))},reset:function(){I=!1,J=null,de.set(-1,0,0,0)}}}function i(){let I=!1,le=!1,J=null,de=null,xe=null;return{setReversed:function(ee){if(le!==ee){const Ae=e.get("EXT_clip_control");ee?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),le=ee;const Te=xe;xe=null,this.setClear(Te)}},getReversed:function(){return le},setTest:function(ee){ee?te(t.DEPTH_TEST):De(t.DEPTH_TEST)},setMask:function(ee){J!==ee&&!I&&(t.depthMask(ee),J=ee)},setFunc:function(ee){if(le&&(ee=l3[ee]),de!==ee){switch(ee){case Nh:t.depthFunc(t.NEVER);break;case Uh:t.depthFunc(t.ALWAYS);break;case Fh:t.depthFunc(t.LESS);break;case Co:t.depthFunc(t.LEQUAL);break;case Oh:t.depthFunc(t.EQUAL);break;case Bh:t.depthFunc(t.GEQUAL);break;case kh:t.depthFunc(t.GREATER);break;case Vh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}de=ee}},setLocked:function(ee){I=ee},setClear:function(ee){xe!==ee&&(xe=ee,le&&(ee=1-ee),t.clearDepth(ee))},reset:function(){I=!1,J=null,de=null,xe=null,le=!1}}}function r(){let I=!1,le=null,J=null,de=null,xe=null,ee=null,Ae=null,Te=null,Mt=null;return{setTest:function(at){I||(at?te(t.STENCIL_TEST):De(t.STENCIL_TEST))},setMask:function(at){le!==at&&!I&&(t.stencilMask(at),le=at)},setFunc:function(at,fi,di){(J!==at||de!==fi||xe!==di)&&(t.stencilFunc(at,fi,di),J=at,de=fi,xe=di)},setOp:function(at,fi,di){(ee!==at||Ae!==fi||Te!==di)&&(t.stencilOp(at,fi,di),ee=at,Ae=fi,Te=di)},setLocked:function(at){I=at},setClear:function(at){Mt!==at&&(t.clearStencil(at),Mt=at)},reset:function(){I=!1,le=null,J=null,de=null,xe=null,ee=null,Ae=null,Te=null,Mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},d={},f={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,_=null,T=null,E=null,C=null,x=new Xe(0,0,0),A=0,b=!1,P=null,D=null,H=null,$=null,k=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,L=0;const X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=L>=1):X.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=L>=2);let j=null,ne={};const oe=t.getParameter(t.SCISSOR_BOX),ve=t.getParameter(t.VIEWPORT),Le=new vt().fromArray(oe),Ie=new vt().fromArray(ve);function q(I,le,J,de){const xe=new Uint8Array(4),ee=t.createTexture();t.bindTexture(I,ee),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ae=0;Ae<J;Ae++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,de,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(le+Ae,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return ee}const ie={};ie[t.TEXTURE_2D]=q(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(t.DEPTH_TEST),o.setFunc(Co),Dt(!1),Ft(r_),te(t.CULL_FACE),Qe(Wi);function te(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function De(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function ke(I,le){return f[I]!==le?(t.bindFramebuffer(I,le),f[I]=le,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=le),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Ne(I,le){let J=m,de=!1;if(I){J=p.get(le),J===void 0&&(J=[],p.set(le,J));const xe=I.textures;if(J.length!==xe.length||J[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Ae=xe.length;ee<Ae;ee++)J[ee]=t.COLOR_ATTACHMENT0+ee;J.length=xe.length,de=!0}}else J[0]!==t.BACK&&(J[0]=t.BACK,de=!0);de&&t.drawBuffers(J)}function Ct(I){return S!==I?(t.useProgram(I),S=I,!0):!1}const $e={[Kr]:t.FUNC_ADD,[LP]:t.FUNC_SUBTRACT,[DP]:t.FUNC_REVERSE_SUBTRACT};$e[IP]=t.MIN,$e[NP]=t.MAX;const rt={[UP]:t.ZERO,[FP]:t.ONE,[OP]:t.SRC_COLOR,[Dh]:t.SRC_ALPHA,[GP]:t.SRC_ALPHA_SATURATE,[zP]:t.DST_COLOR,[kP]:t.DST_ALPHA,[BP]:t.ONE_MINUS_SRC_COLOR,[Ih]:t.ONE_MINUS_SRC_ALPHA,[HP]:t.ONE_MINUS_DST_COLOR,[VP]:t.ONE_MINUS_DST_ALPHA,[WP]:t.CONSTANT_COLOR,[XP]:t.ONE_MINUS_CONSTANT_COLOR,[YP]:t.CONSTANT_ALPHA,[$P]:t.ONE_MINUS_CONSTANT_ALPHA};function Qe(I,le,J,de,xe,ee,Ae,Te,Mt,at){if(I===Wi){g===!0&&(De(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),I!==PP){if(I!==h||at!==b){if((v!==Kr||T!==Kr)&&(t.blendEquation(t.FUNC_ADD),v=Kr,T=Kr),at)switch(I){case fo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case s_:t.blendFunc(t.ONE,t.ONE);break;case o_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case a_:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:je("WebGLState: Invalid blending: ",I);break}else switch(I){case fo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case s_:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case o_:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case a_:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",I);break}y=null,_=null,E=null,C=null,x.set(0,0,0),A=0,h=I,b=at}return}xe=xe||le,ee=ee||J,Ae=Ae||de,(le!==v||xe!==T)&&(t.blendEquationSeparate($e[le],$e[xe]),v=le,T=xe),(J!==y||de!==_||ee!==E||Ae!==C)&&(t.blendFuncSeparate(rt[J],rt[de],rt[ee],rt[Ae]),y=J,_=de,E=ee,C=Ae),(Te.equals(x)===!1||Mt!==A)&&(t.blendColor(Te.r,Te.g,Te.b,Mt),x.copy(Te),A=Mt),h=I,b=!1}function Ke(I,le){I.side===ki?De(t.CULL_FACE):te(t.CULL_FACE);let J=I.side===hn;le&&(J=!J),Dt(J),I.blending===fo&&I.transparent===!1?Qe(Wi):Qe(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const de=I.stencilWrite;a.setTest(de),de&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),qt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):De(t.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(I){P!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),P=I)}function Ft(I){I!==CP?(te(t.CULL_FACE),I!==D&&(I===r_?t.cullFace(t.BACK):I===RP?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):De(t.CULL_FACE),D=I}function Ht(I){I!==H&&(O&&t.lineWidth(I),H=I)}function qt(I,le,J){I?(te(t.POLYGON_OFFSET_FILL),($!==le||k!==J)&&($=le,k=J,o.getReversed()&&(le=-le),t.polygonOffset(le,J))):De(t.POLYGON_OFFSET_FILL)}function St(I){I?te(t.SCISSOR_TEST):De(t.SCISSOR_TEST)}function It(I){I===void 0&&(I=t.TEXTURE0+Y-1),j!==I&&(t.activeTexture(I),j=I)}function N(I,le,J){J===void 0&&(j===null?J=t.TEXTURE0+Y-1:J=j);let de=ne[J];de===void 0&&(de={type:void 0,texture:void 0},ne[J]=de),(de.type!==I||de.texture!==le)&&(j!==J&&(t.activeTexture(J),j=J),t.bindTexture(I,le||ie[I]),de.type=I,de.texture=le)}function vn(){const I=ne[j];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function et(){try{t.compressedTexImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function M(){try{t.texSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function B(){try{t.texSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function G(){try{t.compressedTexSubImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function K(){try{t.compressedTexSubImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function ae(){try{t.texStorage2D(...arguments)}catch(I){je("WebGLState:",I)}}function ue(){try{t.texStorage3D(...arguments)}catch(I){je("WebGLState:",I)}}function Z(){try{t.texImage2D(...arguments)}catch(I){je("WebGLState:",I)}}function Q(){try{t.texImage3D(...arguments)}catch(I){je("WebGLState:",I)}}function ce(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function Ce(I,le){d[I]!==le&&(t.pixelStorei(I,le),d[I]=le)}function he(I){Le.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Le.copy(I))}function fe(I){Ie.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ie.copy(I))}function Pe(I,le){let J=u.get(le);J===void 0&&(J=new WeakMap,u.set(le,J));let de=J.get(I);de===void 0&&(de=t.getUniformBlockIndex(le,I.name),J.set(I,de))}function Ue(I,le){const de=u.get(le).get(I);l.get(le)!==de&&(t.uniformBlockBinding(le,de,I.__bindingPointIndex),l.set(le,de))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),c={},d={},j=null,ne={},f={},p=new WeakMap,m=[],S=null,g=!1,h=null,v=null,y=null,_=null,T=null,E=null,C=null,x=new Xe(0,0,0),A=0,b=!1,P=null,D=null,H=null,$=null,k=null,Le.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:te,disable:De,bindFramebuffer:ke,drawBuffers:Ne,useProgram:Ct,setBlending:Qe,setMaterial:Ke,setFlipSided:Dt,setCullFace:Ft,setLineWidth:Ht,setPolygonOffset:qt,setScissorTest:St,activeTexture:It,bindTexture:N,unbindTexture:vn,compressedTexImage2D:et,compressedTexImage3D:R,texImage2D:Z,texImage3D:Q,pixelStorei:Ce,getParameter:ce,updateUBOMapping:Pe,uniformBlockBinding:Ue,texStorage2D:ae,texStorage3D:ue,texSubImage2D:M,texSubImage3D:B,compressedTexSubImage2D:G,compressedTexSubImage3D:K,scissor:he,viewport:fe,reset:Ve}}function mU(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ee,c=new WeakMap,d=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(R,M){return m?new OffscreenCanvas(R,M):sl("canvas")}function g(R,M,B){let G=1;const K=et(R);if((K.width>B||K.height>B)&&(G=B/Math.max(K.width,K.height)),G<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ae=Math.floor(G*K.width),ue=Math.floor(G*K.height);f===void 0&&(f=S(ae,ue));const Z=M?S(ae,ue):f;return Z.width=ae,Z.height=ue,Z.getContext("2d").drawImage(R,0,0,ae,ue),Oe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ae+"x"+ue+")."),Z}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function h(R){return R.generateMipmaps}function v(R){t.generateMipmap(R)}function y(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(R,M,B,G,K,ae=!1){if(R!==null){if(t[R]!==void 0)return t[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=M;if(M===t.RED&&(B===t.FLOAT&&(Z=t.R32F),B===t.HALF_FLOAT&&(Z=t.R16F),B===t.UNSIGNED_BYTE&&(Z=t.R8),B===t.UNSIGNED_SHORT&&ue&&(Z=ue.R16_EXT),B===t.SHORT&&ue&&(Z=ue.R16_SNORM_EXT)),M===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.R8UI),B===t.UNSIGNED_SHORT&&(Z=t.R16UI),B===t.UNSIGNED_INT&&(Z=t.R32UI),B===t.BYTE&&(Z=t.R8I),B===t.SHORT&&(Z=t.R16I),B===t.INT&&(Z=t.R32I)),M===t.RG&&(B===t.FLOAT&&(Z=t.RG32F),B===t.HALF_FLOAT&&(Z=t.RG16F),B===t.UNSIGNED_BYTE&&(Z=t.RG8),B===t.UNSIGNED_SHORT&&ue&&(Z=ue.RG16_EXT),B===t.SHORT&&ue&&(Z=ue.RG16_SNORM_EXT)),M===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RG8UI),B===t.UNSIGNED_SHORT&&(Z=t.RG16UI),B===t.UNSIGNED_INT&&(Z=t.RG32UI),B===t.BYTE&&(Z=t.RG8I),B===t.SHORT&&(Z=t.RG16I),B===t.INT&&(Z=t.RG32I)),M===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),B===t.UNSIGNED_INT&&(Z=t.RGB32UI),B===t.BYTE&&(Z=t.RGB8I),B===t.SHORT&&(Z=t.RGB16I),B===t.INT&&(Z=t.RGB32I)),M===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),B===t.UNSIGNED_INT&&(Z=t.RGBA32UI),B===t.BYTE&&(Z=t.RGBA8I),B===t.SHORT&&(Z=t.RGBA16I),B===t.INT&&(Z=t.RGBA32I)),M===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGB16_EXT),B===t.SHORT&&ue&&(Z=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),M===t.RGBA){const Q=ae?vc:qe.getTransfer(K);B===t.FLOAT&&(Z=t.RGBA32F),B===t.HALF_FLOAT&&(Z=t.RGBA16F),B===t.UNSIGNED_BYTE&&(Z=Q===tt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&(Z=ue.RGBA16_EXT),B===t.SHORT&&ue&&(Z=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function T(R,M){let B;return R?M===null||M===bi||M===nl?B=t.DEPTH24_STENCIL8:M===si?B=t.DEPTH32F_STENCIL8:M===tl&&(B=t.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===nl?B=t.DEPTH_COMPONENT24:M===si?B=t.DEPTH_COMPONENT32F:M===tl&&(B=t.DEPTH_COMPONENT16),B}function E(R,M){return h(R)===!0||R.isFramebufferTexture&&R.minFilter!==kt&&R.minFilter!==an?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){const M=R.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&c.delete(M),M.isHTMLTexture&&d.delete(M)}function x(R){const M=R.target;M.removeEventListener("dispose",x),P(M)}function A(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,G=p.get(B);if(G){const K=G[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&b(R),Object.keys(G).length===0&&p.delete(B)}i.remove(R)}function b(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const B=R.source,G=p.get(B);delete G[M.__cacheKey],o.memory.textures--}function P(R){const M=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(M.__webglFramebuffer[G]))for(let K=0;K<M.__webglFramebuffer[G].length;K++)t.deleteFramebuffer(M.__webglFramebuffer[G][K]);else t.deleteFramebuffer(M.__webglFramebuffer[G]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[G])}else{if(Array.isArray(M.__webglFramebuffer))for(let G=0;G<M.__webglFramebuffer.length;G++)t.deleteFramebuffer(M.__webglFramebuffer[G]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let G=0;G<M.__webglColorRenderbuffer.length;G++)M.__webglColorRenderbuffer[G]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[G]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let G=0,K=B.length;G<K;G++){const ae=i.get(B[G]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),o.memory.textures--),i.remove(B[G])}i.remove(R)}let D=0;function H(){D=0}function $(){return D}function k(R){D=R}function Y(){const R=D;return R>=r.maxTextures&&Oe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function O(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function L(R,M){const B=i.get(R);if(R.isVideoTexture&&N(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&B.__version!==R.version){const G=R.image;if(G===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{De(B,R,M);return}}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+M)}function X(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){De(B,R,M);return}else R.isExternalTexture&&(B.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+M)}function j(R,M){const B=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){De(B,R,M);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+M)}function ne(R,M){const B=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&B.__version!==R.version){ke(B,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+M)}const oe={[zh]:t.REPEAT,[Hi]:t.CLAMP_TO_EDGE,[Hh]:t.MIRRORED_REPEAT},ve={[kt]:t.NEAREST,[ZP]:t.NEAREST_MIPMAP_NEAREST,[Gl]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[zf]:t.LINEAR_MIPMAP_NEAREST,[ts]:t.LINEAR_MIPMAP_LINEAR},Le={[QP]:t.NEVER,[r3]:t.ALWAYS,[e3]:t.LESS,[lg]:t.LEQUAL,[t3]:t.EQUAL,[ug]:t.GEQUAL,[n3]:t.GREATER,[i3]:t.NOTEQUAL};function Ie(R,M){if(M.type===si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===an||M.magFilter===zf||M.magFilter===Gl||M.magFilter===ts||M.minFilter===an||M.minFilter===zf||M.minFilter===Gl||M.minFilter===ts)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,oe[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,oe[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,oe[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,ve[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Le[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===kt||M.minFilter!==Gl&&M.minFilter!==ts||M.type===si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function q(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));const G=M.source;let K=p.get(G);K===void 0&&(K={},p.set(G,K));const ae=O(M);if(ae!==R.__cacheKey){K[ae]===void 0&&(K[ae]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),K[ae].usedTimes++;const ue=K[R.__cacheKey];ue!==void 0&&(K[R.__cacheKey].usedTimes--,ue.usedTimes===0&&b(M)),R.__cacheKey=ae,R.__webglTexture=K[ae].texture}return B}function ie(R,M,B){return Math.floor(Math.floor(R/B)/M)}function te(R,M,B,G){const ae=R.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,B,G,M.data);else{ae.sort((Ce,he)=>Ce.start-he.start);let ue=0;for(let Ce=1;Ce<ae.length;Ce++){const he=ae[ue],fe=ae[Ce],Pe=he.start+he.count,Ue=ie(fe.start,M.width,4),Ve=ie(he.start,M.width,4);fe.start<=Pe+1&&Ue===Ve&&ie(fe.start+fe.count-1,M.width,4)===Ue?he.count=Math.max(he.count,fe.start+fe.count-he.start):(++ue,ae[ue]=fe)}ae.length=ue+1;const Z=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let Ce=0,he=ae.length;Ce<he;Ce++){const fe=ae[Ce],Pe=Math.floor(fe.start/4),Ue=Math.ceil(fe.count/4),Ve=Pe%M.width,I=Math.floor(Pe/M.width),le=Ue,J=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),n.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ve,I,le,J,B,G,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Z),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function De(R,M,B){let G=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(G=t.TEXTURE_3D);const K=q(R,M),ae=M.source;n.bindTexture(G,R.__webglTexture,t.TEXTURE0+B);const ue=i.get(ae);if(ae.version!==ue.__version||K===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const J=qe.getPrimaries(qe.workingColorSpace),de=M.colorSpace===vr?null:qe.getPrimaries(M.colorSpace),xe=M.colorSpace===vr||J===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let Q=g(M.image,!1,r.maxTextureSize);Q=vn(M,Q);const ce=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let he=_(M.internalFormat,ce,Ce,M.normalized,M.colorSpace,M.isVideoTexture);Ie(G,M);let fe;const Pe=M.mipmaps,Ue=M.isVideoTexture!==!0,Ve=ue.__version===void 0||K===!0,I=ae.dataReady,le=E(M,Q);if(M.isDepthTexture)he=T(M.format===ns,M.type),Ve&&(Ue?n.texStorage2D(t.TEXTURE_2D,1,he,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,he,Q.width,Q.height,0,ce,Ce,null));else if(M.isDataTexture)if(Pe.length>0){Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,Pe[0].width,Pe[0].height);for(let J=0,de=Pe.length;J<de;J++)fe=Pe[J],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,Ce,fe.data);M.generateMipmaps=!1}else Ue?(Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height),I&&te(M,Q,ce,Ce)):n.texImage2D(t.TEXTURE_2D,0,he,Q.width,Q.height,0,ce,Ce,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ue&&Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Pe[0].width,Pe[0].height,Q.depth);for(let J=0,de=Pe.length;J<de;J++)if(fe=Pe[J],M.format!==oi)if(ce!==null)if(Ue){if(I)if(M.layerUpdates.size>0){const xe=X_(fe.width,fe.height,M.format,M.type);for(const ee of M.layerUpdates){const Ae=fe.data.subarray(ee*xe/fe.data.BYTES_PER_ELEMENT,(ee+1)*xe/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,ee,fe.width,fe.height,1,ce,Ae)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,ce,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,Q.depth,0,fe.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,J,0,0,0,fe.width,fe.height,Q.depth,ce,Ce,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,J,he,fe.width,fe.height,Q.depth,0,ce,Ce,fe.data)}else{Ue&&Ve&&n.texStorage2D(t.TEXTURE_2D,le,he,Pe[0].width,Pe[0].height);for(let J=0,de=Pe.length;J<de;J++)fe=Pe[J],M.format!==oi?ce!==null?Ue?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,fe.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,fe.width,fe.height,ce,Ce,fe.data):n.texImage2D(t.TEXTURE_2D,J,he,fe.width,fe.height,0,ce,Ce,fe.data)}else if(M.isDataArrayTexture)if(Ue){if(Ve&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,he,Q.width,Q.height,Q.depth),I)if(M.layerUpdates.size>0){const J=X_(Q.width,Q.height,M.format,M.type);for(const de of M.layerUpdates){const xe=Q.data.subarray(de*J/Q.data.BYTES_PER_ELEMENT,(de+1)*J/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,de,Q.width,Q.height,1,ce,Ce,xe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ce,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,Q.width,Q.height,Q.depth,0,ce,Ce,Q.data);else if(M.isData3DTexture)Ue?(Ve&&n.texStorage3D(t.TEXTURE_3D,le,he,Q.width,Q.height,Q.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,ce,Ce,Q.data)):n.texImage3D(t.TEXTURE_3D,0,he,Q.width,Q.height,Q.depth,0,ce,Ce,Q.data);else if(M.isFramebufferTexture){if(Ve)if(Ue)n.texStorage2D(t.TEXTURE_2D,le,he,Q.width,Q.height);else{let J=Q.width,de=Q.height;for(let xe=0;xe<le;xe++)n.texImage2D(t.TEXTURE_2D,xe,he,J,de,0,ce,Ce,null),J>>=1,de>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const J=t.canvas;if(J.hasAttribute("layoutsubtree")||J.setAttribute("layoutsubtree","true"),Q.parentNode!==J){J.appendChild(Q),d.add(M),J.onpaint=de=>{const xe=de.changedElements;for(const ee of d)xe.includes(ee.image)&&(ee.needsUpdate=!0)},J.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const xe=t.RGBA,ee=t.RGBA,Ae=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,xe,ee,Ae,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ue&&Ve){const J=et(Pe[0]);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}for(let J=0,de=Pe.length;J<de;J++)fe=Pe[J],Ue?I&&n.texSubImage2D(t.TEXTURE_2D,J,0,0,ce,Ce,fe):n.texImage2D(t.TEXTURE_2D,J,he,ce,Ce,fe);M.generateMipmaps=!1}else if(Ue){if(Ve){const J=et(Q);n.texStorage2D(t.TEXTURE_2D,le,he,J.width,J.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Ce,Q)}else n.texImage2D(t.TEXTURE_2D,0,he,ce,Ce,Q);h(M)&&v(G),ue.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ke(R,M,B){if(M.image.length!==6)return;const G=q(R,M),K=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+B);const ae=i.get(K);if(K.version!==ae.__version||G===!0){n.activeTexture(t.TEXTURE0+B);const ue=qe.getPrimaries(qe.workingColorSpace),Z=M.colorSpace===vr?null:qe.getPrimaries(M.colorSpace),Q=M.colorSpace===vr||ue===Z?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const ce=M.isCompressedTexture||M.image[0].isCompressedTexture,Ce=M.image[0]&&M.image[0].isDataTexture,he=[];for(let ee=0;ee<6;ee++)!ce&&!Ce?he[ee]=g(M.image[ee],!0,r.maxCubemapSize):he[ee]=Ce?M.image[ee].image:M.image[ee],he[ee]=vn(M,he[ee]);const fe=he[0],Pe=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type),Ve=_(M.internalFormat,Pe,Ue,M.normalized,M.colorSpace),I=M.isVideoTexture!==!0,le=ae.__version===void 0||G===!0,J=K.dataReady;let de=E(M,fe);Ie(t.TEXTURE_CUBE_MAP,M);let xe;if(ce){I&&le&&n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,fe.width,fe.height);for(let ee=0;ee<6;ee++){xe=he[ee].mipmaps;for(let Ae=0;Ae<xe.length;Ae++){const Te=xe[Ae];M.format!==oi?Pe!==null?I?J&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Te.width,Te.height,Pe,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ve,Te.width,Te.height,0,Te.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,0,0,Te.width,Te.height,Pe,Ue,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae,Ve,Te.width,Te.height,0,Pe,Ue,Te.data)}}}else{if(xe=M.mipmaps,I&&le){xe.length>0&&de++;const ee=et(he[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,de,Ve,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Ce){I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,he[ee].width,he[ee].height,Pe,Ue,he[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,he[ee].width,he[ee].height,0,Pe,Ue,he[ee].data);for(let Ae=0;Ae<xe.length;Ae++){const Mt=xe[Ae].image[ee].image;I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Mt.width,Mt.height,Pe,Ue,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ve,Mt.width,Mt.height,0,Pe,Ue,Mt.data)}}else{I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Pe,Ue,he[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ve,Pe,Ue,he[ee]);for(let Ae=0;Ae<xe.length;Ae++){const Te=xe[Ae];I?J&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,0,0,Pe,Ue,Te.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Ae+1,Ve,Pe,Ue,Te.image[ee])}}}h(M)&&v(t.TEXTURE_CUBE_MAP),ae.__version=K.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ne(R,M,B,G,K,ae){const ue=s.convert(B.format,B.colorSpace),Z=s.convert(B.type),Q=_(B.internalFormat,ue,Z,B.normalized,B.colorSpace),ce=i.get(M),Ce=i.get(B);if(Ce.__renderTarget=M,!ce.__hasExternalTextures){const he=Math.max(1,M.width>>ae),fe=Math.max(1,M.height>>ae);K===t.TEXTURE_3D||K===t.TEXTURE_2D_ARRAY?n.texImage3D(K,ae,Q,he,fe,M.depth,0,ue,Z,null):n.texImage2D(K,ae,Q,he,fe,0,ue,Z,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,K,Ce.__webglTexture,0,St(M)):(K===t.TEXTURE_2D||K>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,K,Ce.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ct(R,M,B){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const G=M.depthTexture,K=G&&G.isDepthTexture?G.type:null,ae=T(M.stencilBuffer,K),ue=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;It(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(M),ae,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(M),ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,R)}else{const G=M.textures;for(let K=0;K<G.length;K++){const ae=G[K],ue=s.convert(ae.format,ae.colorSpace),Z=s.convert(ae.type),Q=_(ae.internalFormat,ue,Z,ae.normalized,ae.colorSpace);It(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,St(M),Q,M.width,M.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,St(M),Q,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Q,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(R,M,B){const G=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=i.get(M.depthTexture);if(K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),G){if(K.__webglInit===void 0&&(K.__webglInit=!0,M.depthTexture.addEventListener("dispose",C)),K.__webglTexture===void 0){K.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,M.depthTexture);const ce=s.convert(M.depthTexture.format),Ce=s.convert(M.depthTexture.type);let he;M.depthTexture.format===Ji?he=t.DEPTH_COMPONENT24:M.depthTexture.format===ns&&(he=t.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,he,M.width,M.height,0,ce,Ce,null)}}else L(M.depthTexture,0);const ae=K.__webglTexture,ue=St(M),Z=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Q=M.depthTexture.format===ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ji)It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Z,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Z,ae,0);else if(M.depthTexture.format===ns)It(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,Z,ae,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Q,Z,ae,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const G=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),G){const K=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,G.removeEventListener("dispose",K)};G.addEventListener("dispose",K),M.__depthDisposeCallback=K}M.__boundDepthTexture=G}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(B)for(let G=0;G<6;G++)$e(M.__webglFramebuffer[G],R,G);else{const G=R.texture.mipmaps;G&&G.length>0?$e(M.__webglFramebuffer[0],R,0):$e(M.__webglFramebuffer,R,0)}else if(B){M.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[G]),M.__webglDepthbuffer[G]===void 0)M.__webglDepthbuffer[G]=t.createRenderbuffer(),Ct(M.__webglDepthbuffer[G],R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}else{const G=R.texture.mipmaps;if(G&&G.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ct(M.__webglDepthbuffer,R,!1);else{const K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,ae)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qe(R,M,B){const G=i.get(R);M!==void 0&&Ne(G.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&rt(R)}function Ke(R){const M=R.texture,B=i.get(R),G=i.get(M);R.addEventListener("dispose",x);const K=R.textures,ae=R.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=M.version,o.memory.textures++),ae){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let Q=0;Q<M.mipmaps.length;Q++)B.__webglFramebuffer[Z][Q]=t.createFramebuffer()}else B.__webglFramebuffer[Z]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<M.mipmaps.length;Z++)B.__webglFramebuffer[Z]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Z=0,Q=K.length;Z<Q;Z++){const ce=i.get(K[Z]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&It(R)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){const Q=K[Z];B.__webglColorRenderbuffer[Z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);const ce=s.convert(Q.format,Q.colorSpace),Ce=s.convert(Q.type),he=_(Q.internalFormat,ce,Ce,Q.normalized,Q.colorSpace,R.isXRRenderTarget===!0),fe=St(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,he,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Z,t.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),Ie(t.TEXTURE_CUBE_MAP,M);for(let Z=0;Z<6;Z++)if(M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ne(B.__webglFramebuffer[Z][Q],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Q);else Ne(B.__webglFramebuffer[Z],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);h(M)&&v(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let Z=0,Q=K.length;Z<Q;Z++){const ce=K[Z],Ce=i.get(ce);let he=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Ce.__webglTexture),Ie(he,ce),Ne(B.__webglFramebuffer,R,ce,t.COLOR_ATTACHMENT0+Z,he,0),h(ce)&&v(he)}n.unbindTexture()}else{let Z=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Z=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,G.__webglTexture),Ie(Z,M),M.mipmaps&&M.mipmaps.length>0)for(let Q=0;Q<M.mipmaps.length;Q++)Ne(B.__webglFramebuffer[Q],R,M,t.COLOR_ATTACHMENT0,Z,Q);else Ne(B.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Z,0);h(M)&&v(Z),n.unbindTexture()}R.depthBuffer&&rt(R)}function Dt(R){const M=R.textures;for(let B=0,G=M.length;B<G;B++){const K=M[B];if(h(K)){const ae=y(R),ue=i.get(K).__webglTexture;n.bindTexture(ae,ue),v(ae),n.unbindTexture()}}}const Ft=[],Ht=[];function qt(R){if(R.samples>0){if(It(R)===!1){const M=R.textures,B=R.width,G=R.height;let K=t.COLOR_BUFFER_BIT;const ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(R),Z=M.length>1;if(Z)for(let ce=0;ce<M.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Q=R.texture.mipmaps;Q&&Q.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=t.STENCIL_BUFFER_BIT)),Z){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Ce=i.get(M[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ce,0)}t.blitFramebuffer(0,0,B,G,0,0,B,G,K,t.NEAREST),l===!0&&(Ft.length=0,Ht.length=0,Ft.push(t.COLOR_ATTACHMENT0+ce),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ft.push(ae),Ht.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ht)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ft))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Z)for(let ce=0;ce<M.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);const Ce=i.get(M[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,Ce,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function St(R){return Math.min(r.maxSamples,R.samples)}function It(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function N(R){const M=o.render.frame;c.get(R)!==M&&(c.set(R,M),R.update())}function vn(R,M){const B=R.colorSpace,G=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gc&&B!==vr&&(qe.getTransfer(B)===tt?(G!==oi||K!==Pn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",B)),M}function et(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Y,this.resetTextureUnits=H,this.getTextureUnits=$,this.setTextureUnits=k,this.setTexture2D=L,this.setTexture2DArray=X,this.setTexture3D=j,this.setTextureCube=ne,this.rebindTextures=Qe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ne,this.useMultisampledRTT=It,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function gU(t,e){function n(i,r=vr){let s;const o=qe.getTransfer(r);if(i===Pn)return t.UNSIGNED_BYTE;if(i===ig)return t.UNSIGNED_SHORT_4_4_4_4;if(i===rg)return t.UNSIGNED_SHORT_5_5_5_1;if(i===AE)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===CE)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===TE)return t.BYTE;if(i===wE)return t.SHORT;if(i===tl)return t.UNSIGNED_SHORT;if(i===ng)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===si)return t.FLOAT;if(i===ji)return t.HALF_FLOAT;if(i===RE)return t.ALPHA;if(i===bE)return t.RGB;if(i===oi)return t.RGBA;if(i===Ji)return t.DEPTH_COMPONENT;if(i===ns)return t.DEPTH_STENCIL;if(i===$c)return t.RED;if(i===sg)return t.RED_INTEGER;if(i===hs)return t.RG;if(i===og)return t.RG_INTEGER;if(i===ag)return t.RGBA_INTEGER;if(i===Lu||i===Du||i===Iu||i===Nu)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lu)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Du)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lu)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Du)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Iu)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Nu)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gh||i===Wh||i===Xh||i===Yh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===$h||i===qh||i===Kh||i===Zh||i===jh||i===pc||i===Jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===$h||i===qh)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Kh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zh)return s.COMPRESSED_R11_EAC;if(i===jh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===pc)return s.COMPRESSED_RG11_EAC;if(i===Jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Qh||i===ep||i===tp||i===np||i===ip||i===rp||i===sp||i===op||i===ap||i===lp||i===up||i===cp||i===fp||i===dp)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Qh)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ep)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===tp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===np)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ip)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===sp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===op)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ap)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===lp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===up)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===dp)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hp||i===pp||i===mp)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hp)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===pp)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===mp)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===vp||i===mc||i===_p)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gp)return s.COMPRESSED_RED_RGTC1_EXT;if(i===vp)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_p)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===nl?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const vU=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_U=`
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

}`;class xU{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new kE(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pi({vertexShader:vU,fragmentShader:_U,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Pt(new qc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yU extends _s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,f=null,p=null,m=null;const S=typeof XRWebGLBinding<"u",g=new xU,h={},v=n.getContextAttributes();let y=null,_=null;const T=[],E=[],C=new Ee;let x=null;const A=new bn;A.viewport=new vt;const b=new bn;b.viewport=new vt;const P=[A,b],D=new PL;let H=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let ie=T[q];return ie===void 0&&(ie=new Kf,T[q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(q){let ie=T[q];return ie===void 0&&(ie=new Kf,T[q]=ie),ie.getGripSpace()},this.getHand=function(q){let ie=T[q];return ie===void 0&&(ie=new Kf,T[q]=ie),ie.getHandSpace()};function k(q){const ie=E.indexOf(q.inputSource);if(ie===-1)return;const te=T[ie];te!==void 0&&(te.update(q.inputSource,q.frame,u||o),te.dispatchEvent({type:q.type,data:q.inputSource}))}function Y(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",O);for(let q=0;q<T.length;q++){const ie=E[q];ie!==null&&(E[q]=null,T[q].disconnect(ie))}H=null,$=null,g.reset();for(const q in h)delete h[q];e.setRenderTarget(y),p=null,f=null,d=null,r=null,_=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(q){u=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&S&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),S&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,De=null,ke=null;v.depth&&(ke=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=v.stencil?ns:Ji,De=v.stencil?nl:bi);const Ne={colorFormat:n.RGBA8,depthFormat:ke,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ne),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ri(f.textureWidth,f.textureHeight,{format:oi,type:Pn,depthTexture:new bo(f.textureWidth,f.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const te={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Ri(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Pn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function O(q){for(let ie=0;ie<q.removed.length;ie++){const te=q.removed[ie],De=E.indexOf(te);De>=0&&(E[De]=null,T[De].disconnect(te))}for(let ie=0;ie<q.added.length;ie++){const te=q.added[ie];let De=E.indexOf(te);if(De===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=E.length){E.push(te),De=Ne;break}else if(E[Ne]===null){E[Ne]=te,De=Ne;break}if(De===-1)break}const ke=T[De];ke&&ke.connect(te)}}const L=new F,X=new F;function j(q,ie,te){L.setFromMatrixPosition(ie.matrixWorld),X.setFromMatrixPosition(te.matrixWorld);const De=L.distanceTo(X),ke=ie.projectionMatrix.elements,Ne=te.projectionMatrix.elements,Ct=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),rt=(ke[9]+1)/ke[5],Qe=(ke[9]-1)/ke[5],Ke=(ke[8]-1)/ke[0],Dt=(Ne[8]+1)/Ne[0],Ft=Ct*Ke,Ht=Ct*Dt,qt=De/(-Ke+Dt),St=qt*-Ke;if(ie.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(St),q.translateZ(qt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ke[10]===-1)q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const It=Ct+qt,N=$e+qt,vn=Ft-St,et=Ht+(De-St),R=rt*$e/N*It,M=Qe*$e/N*It;q.projectionMatrix.makePerspective(vn,et,R,M,It,N),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ne(q,ie){ie===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(ie.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let ie=q.near,te=q.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(te=g.depthFar)),D.near=b.near=A.near=ie,D.far=b.far=A.far=te,(H!==D.near||$!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),H=D.near,$=D.far),D.layers.mask=q.layers.mask|6,A.layers.mask=D.layers.mask&-5,b.layers.mask=D.layers.mask&-3;const De=q.parent,ke=D.cameras;ne(D,De);for(let Ne=0;Ne<ke.length;Ne++)ne(ke[Ne],De);ke.length===2?j(D,A,b):D.projectionMatrix.copy(A.projectionMatrix),oe(q,D,De)};function oe(q,ie,te){te===null?q.matrix.copy(ie.matrixWorld):(q.matrix.copy(te.matrixWorld),q.matrix.invert(),q.matrix.multiply(ie.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(ie.projectionMatrix),q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=xp*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return h[q]};let ve=null;function Le(q,ie){if(c=ie.getViewerPose(u||o),m=ie,c!==null){const te=c.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let De=!1;te.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let $e=0;$e<te.length;$e++){const rt=te[$e];let Qe=null;if(p!==null)Qe=p.getViewport(rt);else{const Dt=d.getViewSubImage(f,rt);Qe=Dt.viewport,$e===0&&(e.setRenderTargetTextures(_,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(_))}let Ke=P[$e];Ke===void 0&&(Ke=new bn,Ke.layers.enable($e),Ke.viewport=new vt,P[$e]=Ke),Ke.matrix.fromArray(rt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(rt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),$e===0&&(D.matrix.copy(Ke.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Ke)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&S){d=i.getBinding();const $e=d.getDepthInformation(te[0]);$e&&$e.isValid&&$e.texture&&g.init($e,r.renderState)}if(ke&&ke.includes("camera-access")&&S){e.state.unbindTexture(),d=i.getBinding();for(let $e=0;$e<te.length;$e++){const rt=te[$e].camera;if(rt){let Qe=h[rt];Qe||(Qe=new kE,h[rt]=Qe);const Ke=d.getCameraImage(rt);Qe.sourceTexture=Ke}}}}for(let te=0;te<T.length;te++){const De=E[te],ke=T[te];De!==null&&ke!==void 0&&ke.update(De,ie,u||o)}ve&&ve(q,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),m=null}const Ie=new JE;Ie.setAnimationLoop(Le),this.setAnimationLoop=function(q){ve=q},this.dispose=function(){}}}const SU=new ct,sT=new Be;sT.set(-1,0,0,0,1,0,0,0,1);function MU(t,e){function n(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,KE(t)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,y,_){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?s(g,h):h.isMeshLambertMaterial?(s(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(g,h),d(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(g,h),f(g,h),h.isMeshPhysicalMaterial&&p(g,h,_)):h.isMeshMatcapMaterial?(s(g,h),m(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),S(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,y):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,n(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===hn&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,n(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===hn&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,n(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,n(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h),y=v.envMap,_=v.envMapRotation;y&&(g.envMap.value=y,g.envMapRotation.value.setFromMatrix4(SU.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(sT),g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap&&(g.lightMap.value=h.lightMap,g.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,g.lightMapTransform)),h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,y){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=y*.5,h.map&&(g.map.value=h.map,n(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,n(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,n(h.alphaMap,g.alphaMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function d(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function f(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,g.roughnessMapTransform)),h.envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&g.clearcoatNormalScale.value.negate())),h.dispersion>0&&(g.dispersion.value=h.dispersion),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(g.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(g.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,h){h.matcap&&(g.matcap.value=h.matcap)}function S(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EU(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,T){const E=T.program;i.uniformBlockBinding(_,E)}function u(_,T){let E=r[_.id];E===void 0&&(g(_),E=c(_),r[_.id]=E,_.addEventListener("dispose",v));const C=T.program;i.updateUBOMapping(_,C);const x=e.render.frame;s[_.id]!==x&&(f(_),s[_.id]=x)}function c(_){const T=d();_.__bindingPointIndex=T;const E=t.createBuffer(),C=_.__size,x=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,C,x),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,E),E}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const T=r[_.id],E=_.uniforms,C=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let x=0,A=E.length;x<A;x++){const b=E[x];if(Array.isArray(b))for(let P=0,D=b.length;P<D;P++)p(b[P],x,P,C);else p(b,x,0,C)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,T,E,C){if(S(_,T,E,C)===!0){const x=_.__offset,A=_.value;if(Array.isArray(A)){let b=0;for(let P=0;P<A.length;P++){const D=A[P],H=h(D);m(D,_.__data,b),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(b+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(A,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,x,_.__data)}}function m(_,T,E){typeof _=="number"||typeof _=="boolean"?T[0]=_:_.isMatrix3?(T[0]=_.elements[0],T[1]=_.elements[1],T[2]=_.elements[2],T[3]=0,T[4]=_.elements[3],T[5]=_.elements[4],T[6]=_.elements[5],T[7]=0,T[8]=_.elements[6],T[9]=_.elements[7],T[10]=_.elements[8],T[11]=0):ArrayBuffer.isView(_)?T.set(new _.constructor(_.buffer,_.byteOffset,T.length)):_.toArray(T,E)}function S(_,T,E,C){const x=_.value,A=T+"_"+E;if(C[A]===void 0)return typeof x=="number"||typeof x=="boolean"?C[A]=x:ArrayBuffer.isView(x)?C[A]=x.slice():C[A]=x.clone(),!0;{const b=C[A];if(typeof x=="number"||typeof x=="boolean"){if(b!==x)return C[A]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(b.equals(x)===!1)return b.copy(x),!0}}return!1}function g(_){const T=_.uniforms;let E=0;const C=16;for(let A=0,b=T.length;A<b;A++){const P=Array.isArray(T[A])?T[A]:[T[A]];for(let D=0,H=P.length;D<H;D++){const $=P[D],k=Array.isArray($.value)?$.value:[$.value];for(let Y=0,O=k.length;Y<O;Y++){const L=k[Y],X=h(L),j=E%C,ne=j%X.boundary,oe=j+ne;E+=ne,oe!==0&&C-oe<X.storage&&(E+=C-oe),$.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=E,E+=X.storage}}}const x=E%C;return x>0&&(E+=C-x),_.__size=E,_.__cache={},this}function h(_){const T={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(T.boundary=4,T.storage=4):_.isVector2?(T.boundary=8,T.storage=8):_.isVector3||_.isColor?(T.boundary=16,T.storage=12):_.isVector4?(T.boundary=16,T.storage=16):_.isMatrix3?(T.boundary=48,T.storage=48):_.isMatrix4?(T.boundary=64,T.storage=64):_.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(T.boundary=16,T.storage=_.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",_),T}function v(_){const T=_.target;T.removeEventListener("dispose",v);const E=o.indexOf(T.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function y(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:y}}const TU=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let gi=null;function wU(){return gi===null&&(gi=new fg(TU,16,16,hs,ji),gi.name="DFG_LUT",gi.minFilter=an,gi.magFilter=an,gi.wrapS=Hi,gi.wrapT=Hi,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}class AU{constructor(e={}){const{canvas:n=o3(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Pn}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const S=p,g=new Set([ag,og,sg]),h=new Set([Pn,bi,tl,nl,ig,rg]),v=new Uint32Array(4),y=new Int32Array(4),_=new F;let T=null,E=null;const C=[],x=[];let A=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1,D=null,H=null,$=null,k=null;this._outputColorSpace=Rn;let Y=0,O=0,L=null,X=-1,j=null;const ne=new vt,oe=new vt;let ve=null;const Le=new Xe(0);let Ie=0,q=n.width,ie=n.height,te=1,De=null,ke=null;const Ne=new vt(0,0,q,ie),Ct=new vt(0,0,q,ie);let $e=!1;const rt=new dg;let Qe=!1,Ke=!1;const Dt=new ct,Ft=new F,Ht=new vt,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let St=!1;function It(){return L===null?te:1}let N=i;function vn(w,U){return n.getContext(w,U)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qm}`),n.addEventListener("webglcontextlost",Mt,!1),n.addEventListener("webglcontextrestored",at,!1),n.addEventListener("webglcontextcreationerror",fi,!1),N===null){const U="webgl2";if(N=vn(U,w),N===null)throw vn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(w){throw je("WebGLRenderer: "+w.message),w}let et,R,M,B,G,K,ae,ue,Z,Q,ce,Ce,he,fe,Pe,Ue,Ve,I,le,J,de,xe,ee;function Ae(){et=new wI(N),et.init(),de=new gU(N,et),R=new vI(N,et,e,de),M=new pU(N,et),R.reversedDepthBuffer&&f&&M.buffers.depth.setReversed(!0),H=N.createFramebuffer(),$=N.createFramebuffer(),k=N.createFramebuffer(),B=new RI(N),G=new eU,K=new mU(N,et,M,G,R,de,B),ae=new TI(b),ue=new DL(N),xe=new mI(N,ue),Z=new AI(N,ue,B,xe),Q=new PI(N,Z,ue,xe,B),I=new bI(N,R,K),Pe=new _I(G),ce=new QN(b,ae,et,R,xe,Pe),Ce=new MU(b,G),he=new nU,fe=new lU(et),Ve=new pI(b,ae,M,Q,m,l),Ue=new hU(b,Q,R),ee=new EU(N,B,R,M),le=new gI(N,et,B),J=new CI(N,et,B),B.programs=ce.programs,b.capabilities=R,b.extensions=et,b.properties=G,b.renderLists=he,b.shadowMap=Ue,b.state=M,b.info=B}Ae(),S!==Pn&&(A=new DI(S,n.width,n.height,a,r,s));const Te=new yU(b,N);this.xr=Te,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=et.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=et.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(w){w!==void 0&&(te=w,this.setSize(q,ie,!1))},this.getSize=function(w){return w.set(q,ie)},this.setSize=function(w,U,W=!0){if(Te.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}q=w,ie=U,n.width=Math.floor(w*te),n.height=Math.floor(U*te),W===!0&&(n.style.width=w+"px",n.style.height=U+"px"),A!==null&&A.setSize(n.width,n.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(q*te,ie*te).floor()},this.setDrawingBufferSize=function(w,U,W){q=w,ie=U,te=W,n.width=Math.floor(w*W),n.height=Math.floor(U*W),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(S===Pn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ne)},this.getViewport=function(w){return w.copy(Ne)},this.setViewport=function(w,U,W,V){w.isVector4?Ne.set(w.x,w.y,w.z,w.w):Ne.set(w,U,W,V),M.viewport(ne.copy(Ne).multiplyScalar(te).round())},this.getScissor=function(w){return w.copy(Ct)},this.setScissor=function(w,U,W,V){w.isVector4?Ct.set(w.x,w.y,w.z,w.w):Ct.set(w,U,W,V),M.scissor(oe.copy(Ct).multiplyScalar(te).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){M.setScissorTest($e=w)},this.setOpaqueSort=function(w){De=w},this.setTransparentSort=function(w){ke=w},this.getClearColor=function(w){return w.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor(...arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,W=!0){let V=0;if(w){let z=!1;if(L!==null){const _e=L.texture.format;z=g.has(_e)}if(z){const _e=L.texture.type,Se=h.has(_e),me=Ve.getClearColor(),we=Ve.getClearAlpha(),Re=me.r,ze=me.g,Ge=me.b;Se?(v[0]=Re,v[1]=ze,v[2]=Ge,v[3]=we,N.clearBufferuiv(N.COLOR,0,v)):(y[0]=Re,y[1]=ze,y[2]=Ge,y[3]=we,N.clearBufferiv(N.COLOR,0,y))}else V|=N.COLOR_BUFFER_BIT}U&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Mt,!1),n.removeEventListener("webglcontextrestored",at,!1),n.removeEventListener("webglcontextcreationerror",fi,!1),Ve.dispose(),he.dispose(),fe.dispose(),G.dispose(),ae.dispose(),Q.dispose(),xe.dispose(),ee.dispose(),ce.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Eg),Te.removeEventListener("sessionend",Tg),Br.stop()};function Mt(w){w.preventDefault(),d_("WebGLRenderer: Context Lost."),P=!0}function at(){d_("WebGLRenderer: Context Restored."),P=!1;const w=B.autoReset,U=Ue.enabled,W=Ue.autoUpdate,V=Ue.needsUpdate,z=Ue.type;Ae(),B.autoReset=w,Ue.enabled=U,Ue.autoUpdate=W,Ue.needsUpdate=V,Ue.type=z}function fi(w){je("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function di(w){const U=w.target;U.removeEventListener("dispose",di),aT(U)}function aT(w){lT(w),G.remove(w)}function lT(w){const U=G.get(w).programs;U!==void 0&&(U.forEach(function(W){ce.releaseProgram(W)}),w.isShaderMaterial&&ce.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,W,V,z,_e){U===null&&(U=qt);const Se=z.isMesh&&z.matrixWorld.determinantAffine()<0,me=fT(w,U,W,V,z);M.setMaterial(V,Se);let we=W.index,Re=1;if(V.wireframe===!0){if(we=Z.getWireframeAttribute(W),we===void 0)return;Re=2}const ze=W.drawRange,Ge=W.attributes.position;let be=ze.start*Re,it=(ze.start+ze.count)*Re;_e!==null&&(be=Math.max(be,_e.start*Re),it=Math.min(it,(_e.start+_e.count)*Re)),we!==null?(be=Math.max(be,0),it=Math.min(it,we.count)):Ge!=null&&(be=Math.max(be,0),it=Math.min(it,Ge.count));const Rt=it-be;if(Rt<0||Rt===1/0)return;xe.setup(z,V,me,W,we);let Et,st=le;if(we!==null&&(Et=ue.get(we),st=J,st.setIndex(Et)),z.isMesh)V.wireframe===!0?(M.setLineWidth(V.wireframeLinewidth*It()),st.setMode(N.LINES)):st.setMode(N.TRIANGLES);else if(z.isLine){let Qt=V.linewidth;Qt===void 0&&(Qt=1),M.setLineWidth(Qt*It()),z.isLineSegments?st.setMode(N.LINES):z.isLineLoop?st.setMode(N.LINE_LOOP):st.setMode(N.LINE_STRIP)}else z.isPoints?st.setMode(N.POINTS):z.isSprite&&st.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(et.get("WEBGL_multi_draw"))st.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Qt=z._multiDrawStarts,ye=z._multiDrawCounts,Tn=z._multiDrawCount,Ze=we?ue.get(we).bytesPerElement:1,Bn=G.get(V).currentProgram.getUniforms();for(let hi=0;hi<Tn;hi++)Bn.setValue(N,"_gl_DrawID",hi),st.render(Qt[hi]/Ze,ye[hi])}else if(z.isInstancedMesh)st.renderInstances(be,Rt,z.count);else if(W.isInstancedBufferGeometry){const Qt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,ye=Math.min(W.instanceCount,Qt);st.renderInstances(be,Rt,ye)}else st.render(be,Rt)};function Mg(w,U,W){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,yl(w,U,W),w.side=Ir,w.needsUpdate=!0,yl(w,U,W),w.side=ki):yl(w,U,W)}this.compile=function(w,U,W=null){W===null&&(W=w),E=fe.get(W),E.init(U),x.push(E),W.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),w!==W&&w.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights();const V=new Set;return w.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const _e=z.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const me=_e[Se];Mg(me,W,z),V.add(me)}else Mg(_e,W,z),V.add(_e)}),E=x.pop(),V},this.compileAsync=function(w,U,W=null){const V=this.compile(w,U,W);return new Promise(z=>{function _e(){if(V.forEach(function(Se){G.get(Se).currentProgram.isReady()&&V.delete(Se)}),V.size===0){z(w);return}setTimeout(_e,10)}et.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let jc=null;function uT(w){jc&&jc(w)}function Eg(){Br.stop()}function Tg(){Br.start()}const Br=new JE;Br.setAnimationLoop(uT),typeof self<"u"&&Br.setContext(self),this.setAnimationLoop=function(w){jc=w,Te.setAnimationLoop(w),w===null?Br.stop():Br.start()},Te.addEventListener("sessionstart",Eg),Te.addEventListener("sessionend",Tg),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(w,U);const W=Te.enabled===!0&&Te.isPresenting===!0,V=A!==null&&(L===null||W)&&A.begin(b,L);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(U),U=Te.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,U,L),E=fe.get(w,x.length),E.init(U),E.state.textureUnits=K.getTextureUnits(),x.push(E),Dt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Dt,yi,U.reversedDepth),Ke=this.localClippingEnabled,Qe=Pe.init(this.clippingPlanes,Ke),T=he.get(w,C.length),T.init(),C.push(T),Te.enabled===!0&&Te.isPresenting===!0){const Se=b.xr.getDepthSensingMesh();Se!==null&&Jc(Se,U,-1/0,b.sortObjects)}Jc(w,U,0,b.sortObjects),T.finish(),b.sortObjects===!0&&T.sort(De,ke,U.reversedDepth),St=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,St&&Ve.addToRenderList(T,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Qe===!0&&Pe.beginShadows();const z=E.state.shadowsArray;if(Ue.render(z,w,U),Qe===!0&&Pe.endShadows(),(V&&A.hasRenderPass())===!1){const Se=T.opaque,me=T.transmissive;if(E.setupLights(),U.isArrayCamera){const we=U.cameras;if(me.length>0)for(let Re=0,ze=we.length;Re<ze;Re++){const Ge=we[Re];Ag(Se,me,w,Ge)}St&&Ve.render(w);for(let Re=0,ze=we.length;Re<ze;Re++){const Ge=we[Re];wg(T,w,Ge,Ge.viewport)}}else me.length>0&&Ag(Se,me,w,U),St&&Ve.render(w),wg(T,w,U)}L!==null&&O===0&&(K.updateMultisampleRenderTarget(L),K.updateRenderTargetMipmap(L)),V&&A.end(b),w.isScene===!0&&w.onAfterRender(b,w,U),xe.resetDefaultState(),X=-1,j=null,x.pop(),x.length>0?(E=x[x.length-1],K.setTextureUnits(E.state.textureUnits),Qe===!0&&Pe.setGlobalState(b.clippingPlanes,E.state.camera)):E=null,C.pop(),C.length>0?T=C[C.length-1]:T=null,D!==null&&D.renderEnd()};function Jc(w,U,W,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)W=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLightProbeGrid)E.pushLightProbeGrid(w);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||rt.intersectsSprite(w)){V&&Ht.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Dt);const Se=Q.update(w),me=w.material;me.visible&&T.push(w,Se,me,W,Ht.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||rt.intersectsObject(w))){const Se=Q.update(w),me=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ht.copy(w.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Ht.copy(Se.boundingSphere.center)),Ht.applyMatrix4(w.matrixWorld).applyMatrix4(Dt)),Array.isArray(me)){const we=Se.groups;for(let Re=0,ze=we.length;Re<ze;Re++){const Ge=we[Re],be=me[Ge.materialIndex];be&&be.visible&&T.push(w,Se,be,W,Ht.z,Ge)}}else me.visible&&T.push(w,Se,me,W,Ht.z,null)}}const _e=w.children;for(let Se=0,me=_e.length;Se<me;Se++)Jc(_e[Se],U,W,V)}function wg(w,U,W,V){const{opaque:z,transmissive:_e,transparent:Se}=w;E.setupLightsView(W),Qe===!0&&Pe.setGlobalState(b.clippingPlanes,W),V&&M.viewport(ne.copy(V)),z.length>0&&xl(z,U,W),_e.length>0&&xl(_e,U,W),Se.length>0&&xl(Se,U,W),M.buffers.depth.setTest(!0),M.buffers.depth.setMask(!0),M.buffers.color.setMask(!0),M.setPolygonOffset(!1)}function Ag(w,U,W,V){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[V.id]===void 0){const be=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[V.id]=new Ri(1,1,{generateMipmaps:!0,type:be?ji:Pn,minFilter:ts,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace})}const _e=E.state.transmissionRenderTarget[V.id],Se=V.viewport||ne;_e.setSize(Se.z*b.transmissionResolutionScale,Se.w*b.transmissionResolutionScale);const me=b.getRenderTarget(),we=b.getActiveCubeFace(),Re=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(Le),Ie=b.getClearAlpha(),Ie<1&&b.setClearColor(16777215,.5),b.clear(),St&&Ve.render(W);const ze=b.toneMapping;b.toneMapping=Ci;const Ge=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),E.setupLightsView(V),Qe===!0&&Pe.setGlobalState(b.clippingPlanes,V),xl(w,W,V),K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e),et.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let it=0,Rt=U.length;it<Rt;it++){const Et=U[it],{object:st,geometry:Qt,material:ye,group:Tn}=Et;if(ye.side===ki&&st.layers.test(V.layers)){const Ze=ye.side;ye.side=hn,ye.needsUpdate=!0,Cg(st,W,V,Qt,ye,Tn),ye.side=Ze,ye.needsUpdate=!0,be=!0}}be===!0&&(K.updateMultisampleRenderTarget(_e),K.updateRenderTargetMipmap(_e))}b.setRenderTarget(me,we,Re),b.setClearColor(Le,Ie),Ge!==void 0&&(V.viewport=Ge),b.toneMapping=ze}function xl(w,U,W){const V=U.isScene===!0?U.overrideMaterial:null;for(let z=0,_e=w.length;z<_e;z++){const Se=w[z],{object:me,geometry:we,group:Re}=Se;let ze=Se.material;ze.allowOverride===!0&&V!==null&&(ze=V),me.layers.test(W.layers)&&Cg(me,U,W,we,ze,Re)}}function Cg(w,U,W,V,z,_e){w.onBeforeRender(b,U,W,V,z,_e),w.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),z.onBeforeRender(b,U,W,V,w,_e),z.transparent===!0&&z.side===ki&&z.forceSinglePass===!1?(z.side=hn,z.needsUpdate=!0,b.renderBufferDirect(W,U,V,z,w,_e),z.side=Ir,z.needsUpdate=!0,b.renderBufferDirect(W,U,V,z,w,_e),z.side=ki):b.renderBufferDirect(W,U,V,z,w,_e),w.onAfterRender(b,U,W,V,z,_e)}function yl(w,U,W){U.isScene!==!0&&(U=qt);const V=G.get(w),z=E.state.lights,_e=E.state.shadowsArray,Se=z.state.version,me=ce.getParameters(w,z.state,_e,U,W,E.state.lightProbeGridArray),we=ce.getProgramCacheKey(me);let Re=V.programs;V.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;const ze=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;V.envMap=ae.get(w.envMap||V.environment,ze),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Re===void 0&&(w.addEventListener("dispose",di),Re=new Map,V.programs=Re);let Ge=Re.get(we);if(Ge!==void 0){if(V.currentProgram===Ge&&V.lightsStateVersion===Se)return bg(w,me),Ge}else me.uniforms=ce.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,W,me),w.onBeforeCompile(me,b),Ge=ce.acquireProgram(me,we),Re.set(we,Ge),V.uniforms=me.uniforms;const be=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(be.clippingPlanes=Pe.uniform),bg(w,me),V.needsLights=hT(w),V.lightsStateVersion=Se,V.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),V.lightProbeGrid=E.state.lightProbeGridArray.length>0,V.currentProgram=Ge,V.uniformsList=null,Ge}function Rg(w){if(w.uniformsList===null){const U=w.currentProgram.getUniforms();w.uniformsList=Uu.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function bg(w,U){const W=G.get(w);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.batchingColor=U.batchingColor,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.instancingMorph=U.instancingMorph,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function cT(w,U){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let W=0,V=w.length;W<V;W++){const z=w[W];if(z.texture!==null&&z.boundingBox.containsPoint(_))return z}return null}function fT(w,U,W,V,z){U.isScene!==!0&&(U=qt),K.resetTextureUnits();const _e=U.fog,Se=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,me=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:qe.workingColorSpace,we=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Re=ae.get(V.envMap||Se,we),ze=V.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),be=!!W.morphAttributes.position,it=!!W.morphAttributes.normal,Rt=!!W.morphAttributes.color;let Et=Ci;V.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Et=b.toneMapping);const st=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Qt=st!==void 0?st.length:0,ye=G.get(V),Tn=E.state.lights;if(Qe===!0&&(Ke===!0||w!==j)){const lt=w===j&&V.id===X;Pe.setState(V,w,lt)}let Ze=!1;V.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==Tn.state.version||ye.outputColorSpace!==me||z.isBatchedMesh&&ye.batching===!1||!z.isBatchedMesh&&ye.batching===!0||z.isBatchedMesh&&ye.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&ye.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&ye.instancing===!1||!z.isInstancedMesh&&ye.instancing===!0||z.isSkinnedMesh&&ye.skinning===!1||!z.isSkinnedMesh&&ye.skinning===!0||z.isInstancedMesh&&ye.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ye.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&ye.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&ye.instancingMorph===!1&&z.morphTexture!==null||ye.envMap!==Re||V.fog===!0&&ye.fog!==_e||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Pe.numPlanes||ye.numIntersection!==Pe.numIntersection)||ye.vertexAlphas!==ze||ye.vertexTangents!==Ge||ye.morphTargets!==be||ye.morphNormals!==it||ye.morphColors!==Rt||ye.toneMapping!==Et||ye.morphTargetsCount!==Qt||!!ye.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,ye.__version=V.version);let Bn=ye.currentProgram;Ze===!0&&(Bn=yl(V,U,z),D&&V.isNodeMaterial&&D.onUpdateProgram(V,Bn,ye));let hi=!1,tr=!1,Ss=!1;const ot=Bn.getUniforms(),bt=ye.uniforms;if(M.useProgram(Bn.program)&&(hi=!0,tr=!0,Ss=!0),V.id!==X&&(X=V.id,tr=!0),ye.needsLights){const lt=cT(E.state.lightProbeGridArray,z);ye.lightProbeGrid!==lt&&(ye.lightProbeGrid=lt,tr=!0)}if(hi||j!==w){M.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),ot.setValue(N,"projectionMatrix",w.projectionMatrix),ot.setValue(N,"viewMatrix",w.matrixWorldInverse);const ir=ot.map.cameraPosition;ir!==void 0&&ir.setValue(N,Ft.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&ot.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&ot.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,tr=!0,Ss=!0)}if(ye.needsLights&&(Tn.state.directionalShadowMap.length>0&&ot.setValue(N,"directionalShadowMap",Tn.state.directionalShadowMap,K),Tn.state.spotShadowMap.length>0&&ot.setValue(N,"spotShadowMap",Tn.state.spotShadowMap,K),Tn.state.pointShadowMap.length>0&&ot.setValue(N,"pointShadowMap",Tn.state.pointShadowMap,K)),z.isSkinnedMesh){ot.setOptional(N,z,"bindMatrix"),ot.setOptional(N,z,"bindMatrixInverse");const lt=z.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),ot.setValue(N,"boneTexture",lt.boneTexture,K))}z.isBatchedMesh&&(ot.setOptional(N,z,"batchingTexture"),ot.setValue(N,"batchingTexture",z._matricesTexture,K),ot.setOptional(N,z,"batchingIdTexture"),ot.setValue(N,"batchingIdTexture",z._indirectTexture,K),ot.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&ot.setValue(N,"batchingColorTexture",z._colorsTexture,K));const nr=W.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&I.update(z,W,Bn),(tr||ye.receiveShadow!==z.receiveShadow)&&(ye.receiveShadow=z.receiveShadow,ot.setValue(N,"receiveShadow",z.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&(bt.envMapIntensity.value=U.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=wU()),tr){if(ot.setValue(N,"toneMappingExposure",b.toneMappingExposure),ye.needsLights&&dT(bt,Ss),_e&&V.fog===!0&&Ce.refreshFogUniforms(bt,_e),Ce.refreshMaterialUniforms(bt,V,te,ie,E.state.transmissionRenderTarget[w.id]),ye.needsLights&&ye.lightProbeGrid){const lt=ye.lightProbeGrid;bt.probesSH.value=lt.texture,bt.probesMin.value.copy(lt.boundingBox.min),bt.probesMax.value.copy(lt.boundingBox.max),bt.probesResolution.value.copy(lt.resolution)}Uu.upload(N,Rg(ye),bt,K)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Uu.upload(N,Rg(ye),bt,K),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&ot.setValue(N,"center",z.center),ot.setValue(N,"modelViewMatrix",z.modelViewMatrix),ot.setValue(N,"normalMatrix",z.normalMatrix),ot.setValue(N,"modelMatrix",z.matrixWorld),V.uniformsGroups!==void 0){const lt=V.uniformsGroups;for(let ir=0,Ms=lt.length;ir<Ms;ir++){const Pg=lt[ir];ee.update(Pg,Bn),ee.bind(Pg,Bn)}}return Bn}function dT(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function hT(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(w,U,W){const V=G.get(w);V.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(w.texture).__webglTexture=U,G.get(w.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:W,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){const W=G.get(w);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,W=0){L=w,Y=U,O=W;let V=null,z=!1,_e=!1;if(w){const me=G.get(w);if(me.__useDefaultFramebuffer!==void 0){M.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),ne.copy(w.viewport),oe.copy(w.scissor),ve=w.scissorTest,M.viewport(ne),M.scissor(oe),M.setScissorTest(ve),X=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(w);else if(me.__hasExternalTextures)K.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(me.__boundDepthTexture!==ze){if(ze!==null&&G.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(w)}}const we=w.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const Re=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Re[U])?V=Re[U][W]:V=Re[U],z=!0):w.samples>0&&K.useMultisampledRTT(w)===!1?V=G.get(w).__webglMultisampledFramebuffer:Array.isArray(Re)?V=Re[W]:V=Re,ne.copy(w.viewport),oe.copy(w.scissor),ve=w.scissorTest}else ne.copy(Ne).multiplyScalar(te).floor(),oe.copy(Ct).multiplyScalar(te).floor(),ve=$e;if(W!==0&&(V=H),M.bindFramebuffer(N.FRAMEBUFFER,V)&&M.drawBuffers(w,V),M.viewport(ne),M.scissor(oe),M.setScissorTest(ve),z){const me=G.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+U,me.__webglTexture,W)}else if(_e){const me=U;for(let we=0;we<w.textures.length;we++){const Re=G.get(w.textures[we]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+we,Re.__webglTexture,W,me)}}else if(w!==null&&W!==0){const me=G.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,W)}X=-1},this.readRenderTargetPixels=function(w,U,W,V,z,_e,Se,me=0){if(!(w&&w.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we){M.bindFramebuffer(N.FRAMEBUFFER,we);try{const Re=w.textures[me],ze=Re.format,Ge=Re.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(ze)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!R.textureTypeReadable(Ge)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&W>=0&&W<=w.height-z&&N.readPixels(U,W,V,z,de.convert(ze),de.convert(Ge),_e)}finally{const Re=L!==null?G.get(L).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(w,U,W,V,z,_e,Se,me=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Se!==void 0&&(we=we[Se]),we)if(U>=0&&U<=w.width-V&&W>=0&&W<=w.height-z){M.bindFramebuffer(N.FRAMEBUFFER,we);const Re=w.textures[me],ze=Re.format,Ge=Re.type;if(w.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!R.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!R.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.bufferData(N.PIXEL_PACK_BUFFER,_e.byteLength,N.STREAM_READ),N.readPixels(U,W,V,z,de.convert(ze),de.convert(Ge),0);const it=L!==null?G.get(L).__webglFramebuffer:null;M.bindFramebuffer(N.FRAMEBUFFER,it);const Rt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await a3(N,Rt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,be),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,_e),N.deleteBuffer(be),N.deleteSync(Rt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,W=0){const V=Math.pow(2,-W),z=Math.floor(w.image.width*V),_e=Math.floor(w.image.height*V),Se=U!==null?U.x:0,me=U!==null?U.y:0;K.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,W,0,0,Se,me,z,_e),M.unbindTexture()},this.copyTextureToTexture=function(w,U,W=null,V=null,z=0,_e=0){let Se,me,we,Re,ze,Ge,be,it,Rt;const Et=w.isCompressedTexture?w.mipmaps[_e]:w.image;if(W!==null)Se=W.max.x-W.min.x,me=W.max.y-W.min.y,we=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,ze=W.min.y,Ge=W.isBox3?W.min.z:0;else{const bt=Math.pow(2,-z);Se=Math.floor(Et.width*bt),me=Math.floor(Et.height*bt),w.isDataArrayTexture?we=Et.depth:w.isData3DTexture?we=Math.floor(Et.depth*bt):we=1,Re=0,ze=0,Ge=0}V!==null?(be=V.x,it=V.y,Rt=V.z):(be=0,it=0,Rt=0);const st=de.convert(U.format),Qt=de.convert(U.type);let ye;U.isData3DTexture?(K.setTexture3D(U,0),ye=N.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),ye=N.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),ye=N.TEXTURE_2D),M.activeTexture(N.TEXTURE0),M.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),M.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),M.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);const Tn=M.getParameter(N.UNPACK_ROW_LENGTH),Ze=M.getParameter(N.UNPACK_IMAGE_HEIGHT),Bn=M.getParameter(N.UNPACK_SKIP_PIXELS),hi=M.getParameter(N.UNPACK_SKIP_ROWS),tr=M.getParameter(N.UNPACK_SKIP_IMAGES);M.pixelStorei(N.UNPACK_ROW_LENGTH,Et.width),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Et.height),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),M.pixelStorei(N.UNPACK_SKIP_ROWS,ze),M.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const Ss=w.isDataArrayTexture||w.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){const bt=G.get(w),nr=G.get(U),lt=G.get(bt.__renderTarget),ir=G.get(nr.__renderTarget);M.bindFramebuffer(N.READ_FRAMEBUFFER,lt.__webglFramebuffer),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,ir.__webglFramebuffer);for(let Ms=0;Ms<we;Ms++)Ss&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(w).__webglTexture,z,Ge+Ms),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,G.get(U).__webglTexture,_e,Rt+Ms)),N.blitFramebuffer(Re,ze,Se,me,be,it,Se,me,N.DEPTH_BUFFER_BIT,N.NEAREST);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||w.isRenderTargetTexture||G.has(w)){const bt=G.get(w),nr=G.get(U);M.bindFramebuffer(N.READ_FRAMEBUFFER,$),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,k);for(let lt=0;lt<we;lt++)Ss?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,z,Ge+lt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,bt.__webglTexture,z),ot?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,nr.__webglTexture,_e,Rt+lt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,nr.__webglTexture,_e),z!==0?N.blitFramebuffer(Re,ze,Se,me,be,it,Se,me,N.COLOR_BUFFER_BIT,N.NEAREST):ot?N.copyTexSubImage3D(ye,_e,be,it,Rt+lt,Re,ze,Se,me):N.copyTexSubImage2D(ye,_e,be,it,Re,ze,Se,me);M.bindFramebuffer(N.READ_FRAMEBUFFER,null),M.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ot?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ye,_e,be,it,Rt,Se,me,we,st,Qt,Et.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,_e,be,it,Rt,Se,me,we,st,Et.data):N.texSubImage3D(ye,_e,be,it,Rt,Se,me,we,st,Qt,Et):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,_e,be,it,Se,me,st,Qt,Et.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,_e,be,it,Et.width,Et.height,st,Et.data):N.texSubImage2D(N.TEXTURE_2D,_e,be,it,Se,me,st,Qt,Et);M.pixelStorei(N.UNPACK_ROW_LENGTH,Tn),M.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),M.pixelStorei(N.UNPACK_SKIP_PIXELS,Bn),M.pixelStorei(N.UNPACK_SKIP_ROWS,hi),M.pixelStorei(N.UNPACK_SKIP_IMAGES,tr),_e===0&&U.generateMipmaps&&N.generateMipmap(ye),M.unbindTexture()},this.initRenderTarget=function(w){G.get(w).__webglFramebuffer===void 0&&K.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?K.setTextureCube(w,0):w.isData3DTexture?K.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?K.setTexture2DArray(w,0):K.setTexture2D(w,0),M.unbindTexture()},this.resetState=function(){Y=0,O=0,L=null,M.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=qe._getUnpackColorSpace()}}class CU extends NE{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new ko;e.deleteAttribute("uv");const n=new Ia({side:hn}),i=new Ia,r=new RL(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Pt(e,n);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new P3(e,i,6),a=new pn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Pt(e,Vs(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const u=new Pt(e,Vs(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const c=new Pt(e,Vs(17));c.position.set(14.904,12.198,-1.832),c.scale.set(.15,4.265,6.331),this.add(c);const d=new Pt(e,Vs(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new Pt(e,Vs(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new Pt(e,Vs(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(const n of e)n.dispose()}}function Vs(t){return new _L({color:0,emissive:16777215,emissiveIntensity:t})}function RU(){try{const t=document.createElement("canvas");return!!(t.getContext("webgl2")??t.getContext("webgl"))}catch{return!1}}const ii=1.22,zs=0,bU=650,PU=450,px=5917232,mx=7035454;function pu(t){if(t.type==="polygon")return new _c(ii,t.sides);if(t.type==="lobed"){const e=new WE,n=360;for(let s=0;s<=n;s++){const o=s/n*Math.PI*2,a=ii*(1-t.depth+t.depth*Math.abs(Math.sin(t.lobes/2*o))),l=a*Math.cos(o),u=a*Math.sin(o);s===0?e.moveTo(l,u):e.lineTo(l,u)}const i=new mg(e,64),r=i.attributes.uv;for(let s=0;s<r.count;s++)r.setXY(s,r.getX(s)/(2*ii)+.5,r.getY(s)/(2*ii)+.5);return i}return new _c(ii,128)}function gx(t){return t.type==="polygon"?new ba(ii*.965,ii*.965,.14,t.sides,1,!0):t.type==="lobed"?new ba(ii*.885,ii*.885,.14,96,1,!0):new ba(ii*.99,ii*.99,.14,128,1,!0)}function LU(){const t=new Uint8Array([90,160,235]),e=new fg(t,t.length,1,$c);return e.minFilter=kt,e.magFilter=kt,e.generateMipmaps=!1,e.needsUpdate=!0,e}function DU({art:t,flipped:e,mode:n="pbr",className:i}){const r=se.useRef(null),s=se.useRef(),o=e!==void 0;return se.useEffect(()=>{var a;o&&((a=s.current)==null||a.setFlipped(!!e))},[e,o]),se.useEffect(()=>{var a;(a=s.current)==null||a.applyArt(t)},[t]),se.useEffect(()=>{var a;(a=s.current)==null||a.applyMode(n)},[n]),se.useEffect(()=>{const a=r.current;let l=null;try{const u=new AU({canvas:a,antialias:!0,alpha:!0,powerPreference:"high-performance"});u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.toneMapping=tg,u.toneMappingExposure=.95;const c=new NE,d=new bn(32,1,.1,50);d.position.set(0,0,4.35);const f=new Mp(u),p=f.fromScene(new CU,.06).texture;c.environment=p;const m=new TL,S=(ve,Le)=>(ve.anisotropy=u.capabilities.getMaxAnisotropy(),Le&&(ve.colorSpace=Rn),ve);let g=pu(t.shape),h=pu(t.shape),v=gx(t.shape);const y={flat:null,normal:null};let _=null;const T=ve=>{ve==="toon"&&!_&&(_=LU());const Le=ve==="toon"?_:void 0,Ie={normalMap:y.normal,normalScale:new Ee(1.55,1.55)};return{back:ve==="pbr"?new Ia({map:y.flat,metalness:.82,roughness:.52,envMapIntensity:.5,...Ie}):new md({map:y.flat,gradientMap:Le,...Ie}),edge:ve==="pbr"?new Ia({color:px,metalness:.9,roughness:.42,envMapIntensity:.5}):new md({color:px,gradientMap:Le}),front:ve==="pbr"?new Ia({color:mx,metalness:.72,roughness:.5,envMapIntensity:.28}):new md({color:mx,gradientMap:Le})}};let E=T(n);const C=new Pt(g,E.back),x=new Pt(v,E.edge);x.rotation.x=Math.PI/2;const A=new Pt(h,E.front);A.rotation.y=Math.PI,A.position.z=.071;const b=new ha;b.add(C,x,A),b.position.y=zs,c.add(b);const P=ve=>{const Le=pu(ve.shape),Ie=pu(ve.shape),q=gx(ve.shape);C.geometry=Le,A.geometry=Ie,x.geometry=q,g.dispose(),h.dispose(),v.dispose(),g=Le,h=Ie,v=q,m.load(ve.flat,ie=>{var te;S(ie,!0),(te=y.flat)==null||te.dispose(),y.flat=ie,E.back.map=ie,E.back.needsUpdate=!0}),m.load(ve.normal,ie=>{var te;S(ie,!1),(te=y.normal)==null||te.dispose(),y.normal=ie})},D={value:0,from:0,to:0,t0:-1},H={value:zs-.3,from:zs-.3,to:zs,t0:performance.now()},$=ve=>{D.from=D.to,D.to=ve?Math.PI:0,D.t0=performance.now()},k=ve=>{P(ve),H.from=zs-.3,H.to=zs,H.t0=performance.now()},Y=ve=>{const Le=[E.back,E.edge,E.front];E=T(ve),C.material=E.back,x.material=E.edge,A.material=E.front,Le.forEach(Ie=>Ie.dispose())};s.current={applyArt:k,applyMode:Y,setFlipped:$},k(t);const O={x:0,y:0,px:0,py:0},L=ve=>{O.px=ve.clientX/window.innerWidth*2-1,O.py=ve.clientY/window.innerHeight*2-1},X=()=>{o||$(D.to===0)};window.addEventListener("pointermove",L),o||a.addEventListener("click",X);const j=()=>{const ve=a.clientWidth,Le=a.clientHeight;u.setSize(ve,Le,!1),d.aspect=ve/Le,d.updateProjectionMatrix()};j(),window.addEventListener("resize",j);let ne=0;const oe=()=>{const ve=performance.now();if(D.t0>=0){const Ie=Math.min(1,(ve-D.t0)/bU);D.value=D.from+(D.to-D.from)*(1-(1-Ie)**3)}const Le=Math.min(1,(ve-H.t0)/PU);H.value=H.from+(H.to-H.from)*(Le>=1?1:1-(1-Le)**3),b.position.y=H.value,O.x+=(O.py*-.12-O.x)*.06,O.y+=(O.px*.16-O.y)*.06,b.rotation.y=D.value+O.y,b.rotation.x=O.x,u.render(c,d),ne=requestAnimationFrame(oe)};oe(),l=()=>{var ve,Le;cancelAnimationFrame(ne),window.removeEventListener("pointermove",L),window.removeEventListener("resize",j),o||a.removeEventListener("click",X),f.dispose(),(ve=y.flat)==null||ve.dispose(),(Le=y.normal)==null||Le.dispose(),_==null||_.dispose(),g.dispose(),h.dispose(),v.dispose(),E.back.dispose(),E.edge.dispose(),E.front.dispose(),p.dispose(),u.dispose()}}catch(u){console.error("Mirror3D 初始化失败:",u)}return()=>l==null?void 0:l()},[o]),ge.jsx("canvas",{ref:r,className:i})}function IU({mirror:t,flipped:e}){return ge.jsx("div",{className:"mirror-perspective",children:ge.jsxs(Ao.div,{className:"mirror-flip",animate:{rotateY:e?180:0},transition:{duration:.65,ease:[.4,0,.2,1]},children:[ge.jsx("img",{className:"mirror-face",src:t.backImage,alt:`${t.dynasty} · ${t.name}（镜背）`,draggable:!1}),ge.jsx("img",{className:"mirror-face mirror-face-front",src:t.frontImage,alt:`${t.dynasty} · ${t.name}（镜面）`,draggable:!1})]})})}function NU({hotspot:t,index:e,onOpen:n}){return ge.jsx(Ao.button,{type:"button",className:"hotspot",style:{left:`${t.x}%`,top:`${t.y}%`},initial:{opacity:0,scale:.6,x:"-50%",y:"-50%"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.6,x:"-50%",y:"-50%"},transition:{duration:.5,delay:e*.15,ease:"easeOut"},onClick:i=>{i.stopPropagation(),n()},"aria-label":t.title,children:ge.jsx("span",{className:"hotspot-core"})})}function UU({mirror:t,flipped:e,showHotspots:n,onHotspotOpen:i,onSwitch:r}){const o=se.useMemo(()=>RU(),[])&&!!t.art3d;return ge.jsxs("div",{className:"mirror-stage",children:[ge.jsx("div",{className:"mirror-slide",children:o&&t.art3d?ge.jsxs("div",{className:"mirror-3d-wrap",children:[ge.jsx(DU,{art:t.art3d,flipped:e}),!e&&ge.jsx("div",{className:"hotspot-layer",children:ge.jsx(IS,{children:n&&t.hotspots.map((a,l)=>ge.jsx(NU,{hotspot:a,index:l,onOpen:()=>i(a)},a.title))})})]}):ge.jsx(IU,{mirror:t,flipped:e})}),ge.jsxs("div",{className:"stage-nav",children:[ge.jsx("button",{type:"button",className:"nav-btn",onClick:()=>r(-1),"aria-label":"上一个朝代",children:"↑"}),ge.jsx("button",{type:"button",className:"nav-btn",onClick:()=>r(1),"aria-label":"下一个朝代",children:"↓"})]})]})}function FU({content:t,onClose:e}){return ge.jsx(IS,{children:t&&ge.jsxs(ge.Fragment,{children:[ge.jsx(Ao.div,{className:"sheet-backdrop",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.25},onClick:e}),ge.jsxs(Ao.div,{className:"sheet",role:"dialog","aria-label":t.title,initial:{y:"100%",x:"-50%"},animate:{y:0,x:"-50%"},exit:{y:"100%",x:"-50%"},transition:{duration:.32,ease:[.32,.72,0,1]},children:[ge.jsx("div",{className:"sheet-handle"}),t.imageUrl?ge.jsxs("figure",{className:"ref-figure",children:[ge.jsx("img",{src:t.imageUrl,alt:t.imageAlt??t.title}),ge.jsx("figcaption",{children:t.imageAlt??t.title})]}):t.isReference&&ge.jsx("div",{className:"ref-placeholder",children:ge.jsx("span",{children:"史料图片整理中 · 待补充"})}),ge.jsx("h2",{className:"sheet-title",children:t.title}),ge.jsx("p",{className:"sheet-desc",children:t.description}),t.source&&ge.jsxs("p",{className:"sheet-source",children:["图片来源：",t.sourceUrl?ge.jsx("a",{href:t.sourceUrl,target:"_blank",rel:"noreferrer",children:t.source}):t.source]}),ge.jsx("button",{type:"button",className:"sheet-close",onClick:e,children:"关闭"})]})]})})}const OU=160,BU=280,vx=84,kU=24,VU=900,zU=1600;function HU(){const[t,e]=se.useState(0),[n,i]=se.useState(null),[r,s]=se.useState(!1),[o,a]=se.useState(!1),l=se.useRef(!1),u=se.useRef(0),c=oP(0),d=se.useCallback(async m=>{if(l.current)return;l.current=!0;const S=++u.current;i(null),s(!1);const g=m===1?-vx:vx;if(await Hl(c,g,{duration:OU/1e3,ease:"easeIn"}),S!==u.current){l.current=!1;return}e(h=>(h+m+gr.length)%gr.length),c.jump(-g),await Hl(c,0,{duration:BU/1e3,ease:[.22,.8,.36,1]}),S===u.current&&(l.current=!1)},[c]);se.useEffect(()=>{let m=0,S=0,g=!1;const h=_=>{const T=_.target;T!=null&&T.closest("button, a, .hotspot, .sheet, .sheet-backdrop")||(c.stop(),u.current++,l.current=!1,m=_.clientY,S=c.get(),g=!0)},v=_=>{g&&c.set(S+(_.clientY-m))},y=_=>{if(!g)return;g=!1;const T=_.clientY-m;if(Math.abs(T)<12){const E=_.target;E!=null&&E.closest(".mirror-3d-wrap")&&!E.closest(".hotspot")&&s(C=>!C),Hl(c,0,{type:"spring",stiffness:520,damping:42});return}T<-70?d(1):T>70?d(-1):Hl(c,0,{type:"spring",stiffness:520,damping:42})};return window.addEventListener("pointerdown",h),window.addEventListener("pointermove",v),window.addEventListener("pointerup",y),window.addEventListener("pointercancel",y),()=>{window.removeEventListener("pointerdown",h),window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",y),window.removeEventListener("pointercancel",y)}},[c,d]),se.useEffect(()=>{let m=0;const S=h=>{const v=Date.now();Math.abs(h.deltaY)<kU||v-m<VU||(m=v,d(h.deltaY>0?1:-1))},g=h=>{h.key==="ArrowDown"?d(1):h.key==="ArrowUp"&&d(-1)};return window.addEventListener("wheel",S,{passive:!0}),window.addEventListener("keydown",g),()=>{window.removeEventListener("wheel",S),window.removeEventListener("keydown",g)}},[d]),se.useEffect(()=>{gr.forEach(m=>{m.art3d&&[m.art3d.flat,m.art3d.normal].forEach(S=>{const g=new Image;g.src=S})})},[]);const f=gr[t];se.useEffect(()=>{if(a(!1),r)return;const m=setTimeout(()=>a(!0),zU);return()=>clearTimeout(m)},[f.id,r]);const p=(()=>{if(!n)return null;if(n.type==="hotspot")return{title:n.hotspot.title,description:n.hotspot.description};const m=f.reference;return m?{title:m.title,description:m.detail,imageUrl:m.imageUrl,imageAlt:`${f.name} 馆藏实物参考`,source:m.source,sourceUrl:m.sourceUrl,isReference:!0}:null})();return ge.jsxs("div",{className:"app",children:[ge.jsx(Ao.div,{className:"bg-tint",animate:{backgroundColor:f.tint},transition:{duration:.9}}),ge.jsxs("header",{className:"app-header",children:[ge.jsx("h1",{className:"app-title",children:"照见千年"}),ge.jsx("p",{className:"app-subtitle",children:"从一面铜镜，看见不同时代的审美"})]}),ge.jsxs(Ao.div,{className:"page",style:{y:c},children:[ge.jsx(UU,{mirror:f,flipped:r,showHotspots:o,onHotspotOpen:m=>i({type:"hotspot",hotspot:m}),onSwitch:d}),ge.jsxs("footer",{className:"app-footer",children:[ge.jsx("div",{className:"dynasty-name",children:f.dynasty}),ge.jsx("div",{className:"mirror-name",children:f.name}),ge.jsx("div",{className:"divider"}),ge.jsx("p",{className:"mirror-desc",children:f.shortDescription}),f.reference&&ge.jsx("button",{type:"button",className:"ref-entry",onClick:()=>i({type:"reference"}),children:"史实资料"}),ge.jsx("div",{className:"dynasty-dots",children:gr.map(m=>ge.jsx("span",{className:m.id===f.id?"active":void 0},m.id))}),ge.jsx("p",{className:"hint",children:"上下滑动切换朝代 · 点击铜镜翻面"})]})]}),ge.jsx(FU,{content:p,onClose:()=>i(null)})]})}function GU(){const[t,e]=se.useState(0),[n,i]=se.useState([]),[r,s]=se.useState(!1),o=gr[t];se.useEffect(()=>{i(gr[t].hotspots.map(d=>({...d})))},[t]);const a=se.useCallback(d=>{const f=d.currentTarget.getBoundingClientRect(),p=Number(((d.clientX-f.left)/f.width*100).toFixed(1)),m=Number(((d.clientY-f.top)/f.height*100).toFixed(1));i(S=>[...S,{x:p,y:m,title:`热点${S.length+1}`,description:"待填写"}])},[]),l=d=>i(f=>f.filter((p,m)=>m!==d)),u=JSON.stringify(n.map(d=>({x:d.x,y:d.y,title:d.title,description:d.description})),null,2),c=async()=>{try{await navigator.clipboard.writeText(u),s(!0),setTimeout(()=>s(!1),1500)}catch{}};return ge.jsxs("div",{className:"cal-root",children:[ge.jsxs("header",{className:"cal-bar",children:[ge.jsx("div",{className:"cal-tabs",children:gr.map((d,f)=>ge.jsx("button",{type:"button",className:f===t?"active":void 0,onClick:()=>e(f),children:d.dynasty},d.id))}),ge.jsx("span",{className:"cal-hint",children:"点击图片加点 · 点圆点删除"}),ge.jsx("button",{type:"button",className:"cal-copy",onClick:c,children:r?"已复制 ✓":"复制 JSON"})]}),ge.jsxs("div",{className:"cal-img-wrap",onClick:a,children:[ge.jsx("img",{src:o.backImage,alt:o.name,draggable:!1}),n.map((d,f)=>ge.jsx("button",{type:"button",className:"cal-point",style:{left:`${d.x}%`,top:`${d.y}%`},onClick:p=>{p.stopPropagation(),l(f)},title:`${d.title}（点击删除）`,children:f+1},`${d.x},${d.y},${f}`))]}),ge.jsx("pre",{className:"cal-json",children:`// ${o.dynasty} · ${o.name} → mirrors.ts hotspots
${u}`})]})}const oT=new URLSearchParams(window.location.search),WU=oT.has("calibrate"),Td=PS(document.getElementById("root"));WU?Td.render(ge.jsx(GU,{})):oT.has("poc3d")?gT(async()=>{const{default:t}=await import("./Mirror3DPoc-BelJg4yi.js");return{default:t}},[],import.meta.url).then(({default:t})=>{Td.render(ge.jsx(t,{}))}):Td.render(ge.jsx(se.StrictMode,{children:ge.jsx(HU,{})}));export{DU as M,ge as j,gr as m,se as r};
