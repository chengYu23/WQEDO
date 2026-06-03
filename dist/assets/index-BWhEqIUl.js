(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Vy(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var ih={exports:{}},Ao={};var w_;function ky(){if(w_)return Ao;w_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return Ao.Fragment=t,Ao.jsx=i,Ao.jsxs=i,Ao}var D_;function Xy(){return D_||(D_=1,ih.exports=ky()),ih.exports}var I=Xy(),ah={exports:{}},le={};var U_;function jy(){if(U_)return le;U_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),y=Symbol.iterator;function S(L){return L===null||typeof L!="object"?null:(L=y&&L[y]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,M={};function v(L,nt,Mt){this.props=L,this.context=nt,this.refs=M,this.updater=Mt||T}v.prototype.isReactComponent={},v.prototype.setState=function(L,nt){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,nt,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function G(){}G.prototype=v.prototype;function N(L,nt,Mt){this.props=L,this.context=nt,this.refs=M,this.updater=Mt||T}var D=N.prototype=new G;D.constructor=N,A(D,v.prototype),D.isPureReactComponent=!0;var V=Array.isArray;function H(){}var P={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function w(L,nt,Mt){var wt=Mt.ref;return{$$typeof:o,type:L,key:nt,ref:wt!==void 0?wt:null,props:Mt}}function C(L,nt){return w(L.type,nt,L.props)}function z(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function st(L){var nt={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(Mt){return nt[Mt]})}var ot=/\/+/g;function ct(L,nt){return typeof L=="object"&&L!==null&&L.key!=null?st(""+L.key):nt.toString(36)}function ht(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(H,H):(L.status="pending",L.then(function(nt){L.status==="pending"&&(L.status="fulfilled",L.value=nt)},function(nt){L.status==="pending"&&(L.status="rejected",L.reason=nt)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,nt,Mt,wt,J){var xt=typeof L;(xt==="undefined"||xt==="boolean")&&(L=null);var _t=!1;if(L===null)_t=!0;else switch(xt){case"bigint":case"string":case"number":_t=!0;break;case"object":switch(L.$$typeof){case o:case t:_t=!0;break;case g:return _t=L._init,O(_t(L._payload),nt,Mt,wt,J)}}if(_t)return J=J(L),_t=wt===""?"."+ct(L,0):wt,V(J)?(Mt="",_t!=null&&(Mt=_t.replace(ot,"$&/")+"/"),O(J,nt,Mt,"",function(It){return It})):J!=null&&(z(J)&&(J=C(J,Mt+(J.key==null||L&&L.key===J.key?"":(""+J.key).replace(ot,"$&/")+"/")+_t)),nt.push(J)),1;_t=0;var vt=wt===""?".":wt+":";if(V(L))for(var At=0;At<L.length;At++)wt=L[At],xt=vt+ct(wt,At),_t+=O(wt,nt,Mt,xt,J);else if(At=S(L),typeof At=="function")for(L=At.call(L),At=0;!(wt=L.next()).done;)wt=wt.value,xt=vt+ct(wt,At++),_t+=O(wt,nt,Mt,xt,J);else if(xt==="object"){if(typeof L.then=="function")return O(ht(L),nt,Mt,wt,J);throw nt=String(L),Error("Objects are not valid as a React child (found: "+(nt==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":nt)+"). If you meant to render a collection of children, use an array instead.")}return _t}function Z(L,nt,Mt){if(L==null)return L;var wt=[],J=0;return O(L,wt,"","",function(xt){return nt.call(Mt,xt,J++)}),wt}function q(L){if(L._status===-1){var nt=L._result;nt=nt(),nt.then(function(Mt){(L._status===0||L._status===-1)&&(L._status=1,L._result=Mt)},function(Mt){(L._status===0||L._status===-1)&&(L._status=2,L._result=Mt)}),L._status===-1&&(L._status=0,L._result=nt)}if(L._status===1)return L._result.default;throw L._result}var mt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var nt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(nt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Et={map:Z,forEach:function(L,nt,Mt){Z(L,function(){nt.apply(this,arguments)},Mt)},count:function(L){var nt=0;return Z(L,function(){nt++}),nt},toArray:function(L){return Z(L,function(nt){return nt})||[]},only:function(L){if(!z(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return le.Activity=_,le.Children=Et,le.Component=v,le.Fragment=i,le.Profiler=l,le.PureComponent=N,le.StrictMode=s,le.Suspense=m,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,le.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},le.cache=function(L){return function(){return L.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(L,nt,Mt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var wt=A({},L.props),J=L.key;if(nt!=null)for(xt in nt.key!==void 0&&(J=""+nt.key),nt)!j.call(nt,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&nt.ref===void 0||(wt[xt]=nt[xt]);var xt=arguments.length-2;if(xt===1)wt.children=Mt;else if(1<xt){for(var _t=Array(xt),vt=0;vt<xt;vt++)_t[vt]=arguments[vt+2];wt.children=_t}return w(L.type,J,wt)},le.createContext=function(L){return L={$$typeof:h,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:c,_context:L},L},le.createElement=function(L,nt,Mt){var wt,J={},xt=null;if(nt!=null)for(wt in nt.key!==void 0&&(xt=""+nt.key),nt)j.call(nt,wt)&&wt!=="key"&&wt!=="__self"&&wt!=="__source"&&(J[wt]=nt[wt]);var _t=arguments.length-2;if(_t===1)J.children=Mt;else if(1<_t){for(var vt=Array(_t),At=0;At<_t;At++)vt[At]=arguments[At+2];J.children=vt}if(L&&L.defaultProps)for(wt in _t=L.defaultProps,_t)J[wt]===void 0&&(J[wt]=_t[wt]);return w(L,xt,J)},le.createRef=function(){return{current:null}},le.forwardRef=function(L){return{$$typeof:d,render:L}},le.isValidElement=z,le.lazy=function(L){return{$$typeof:g,_payload:{_status:-1,_result:L},_init:q}},le.memo=function(L,nt){return{$$typeof:p,type:L,compare:nt===void 0?null:nt}},le.startTransition=function(L){var nt=P.T,Mt={};P.T=Mt;try{var wt=L(),J=P.S;J!==null&&J(Mt,wt),typeof wt=="object"&&wt!==null&&typeof wt.then=="function"&&wt.then(H,mt)}catch(xt){mt(xt)}finally{nt!==null&&Mt.types!==null&&(nt.types=Mt.types),P.T=nt}},le.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},le.use=function(L){return P.H.use(L)},le.useActionState=function(L,nt,Mt){return P.H.useActionState(L,nt,Mt)},le.useCallback=function(L,nt){return P.H.useCallback(L,nt)},le.useContext=function(L){return P.H.useContext(L)},le.useDebugValue=function(){},le.useDeferredValue=function(L,nt){return P.H.useDeferredValue(L,nt)},le.useEffect=function(L,nt){return P.H.useEffect(L,nt)},le.useEffectEvent=function(L){return P.H.useEffectEvent(L)},le.useId=function(){return P.H.useId()},le.useImperativeHandle=function(L,nt,Mt){return P.H.useImperativeHandle(L,nt,Mt)},le.useInsertionEffect=function(L,nt){return P.H.useInsertionEffect(L,nt)},le.useLayoutEffect=function(L,nt){return P.H.useLayoutEffect(L,nt)},le.useMemo=function(L,nt){return P.H.useMemo(L,nt)},le.useOptimistic=function(L,nt){return P.H.useOptimistic(L,nt)},le.useReducer=function(L,nt,Mt){return P.H.useReducer(L,nt,Mt)},le.useRef=function(L){return P.H.useRef(L)},le.useState=function(L){return P.H.useState(L)},le.useSyncExternalStore=function(L,nt,Mt){return P.H.useSyncExternalStore(L,nt,Mt)},le.useTransition=function(){return P.H.useTransition()},le.version="19.2.6",le}var L_;function Nd(){return L_||(L_=1,ah.exports=jy()),ah.exports}var Ze=Nd();const Wy=Vy(Ze);var sh={exports:{}},Ro={},rh={exports:{}},oh={};var N_;function qy(){return N_||(N_=1,(function(o){function t(O,Z){var q=O.length;O.push(Z);t:for(;0<q;){var mt=q-1>>>1,Et=O[mt];if(0<l(Et,Z))O[mt]=Z,O[q]=Et,q=mt;else break t}}function i(O){return O.length===0?null:O[0]}function s(O){if(O.length===0)return null;var Z=O[0],q=O.pop();if(q!==Z){O[0]=q;t:for(var mt=0,Et=O.length,L=Et>>>1;mt<L;){var nt=2*(mt+1)-1,Mt=O[nt],wt=nt+1,J=O[wt];if(0>l(Mt,q))wt<Et&&0>l(J,Mt)?(O[mt]=J,O[wt]=q,mt=wt):(O[mt]=Mt,O[nt]=q,mt=nt);else if(wt<Et&&0>l(J,q))O[mt]=J,O[wt]=q,mt=wt;else break t}}return Z}function l(O,Z){var q=O.sortIndex-Z.sortIndex;return q!==0?q:O.id-Z.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],g=1,_=null,y=3,S=!1,T=!1,A=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function D(O){for(var Z=i(p);Z!==null;){if(Z.callback===null)s(p);else if(Z.startTime<=O)s(p),Z.sortIndex=Z.expirationTime,t(m,Z);else break;Z=i(p)}}function V(O){if(A=!1,D(O),!T)if(i(m)!==null)T=!0,H||(H=!0,st());else{var Z=i(p);Z!==null&&ht(V,Z.startTime-O)}}var H=!1,P=-1,j=5,w=-1;function C(){return M?!0:!(o.unstable_now()-w<j)}function z(){if(M=!1,H){var O=o.unstable_now();w=O;var Z=!0;try{t:{T=!1,A&&(A=!1,G(P),P=-1),S=!0;var q=y;try{e:{for(D(O),_=i(m);_!==null&&!(_.expirationTime>O&&C());){var mt=_.callback;if(typeof mt=="function"){_.callback=null,y=_.priorityLevel;var Et=mt(_.expirationTime<=O);if(O=o.unstable_now(),typeof Et=="function"){_.callback=Et,D(O),Z=!0;break e}_===i(m)&&s(m),D(O)}else s(m);_=i(m)}if(_!==null)Z=!0;else{var L=i(p);L!==null&&ht(V,L.startTime-O),Z=!1}}break t}finally{_=null,y=q,S=!1}Z=void 0}}finally{Z?st():H=!1}}}var st;if(typeof N=="function")st=function(){N(z)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,ct=ot.port2;ot.port1.onmessage=z,st=function(){ct.postMessage(null)}}else st=function(){v(z,0)};function ht(O,Z){P=v(function(){O(o.unstable_now())},Z)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(O){switch(y){case 1:case 2:case 3:var Z=3;break;default:Z=y}var q=y;y=Z;try{return O()}finally{y=q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(O,Z){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=y;y=O;try{return Z()}finally{y=q}},o.unstable_scheduleCallback=function(O,Z,q){var mt=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?mt+q:mt):q=mt,O){case 1:var Et=-1;break;case 2:Et=250;break;case 5:Et=1073741823;break;case 4:Et=1e4;break;default:Et=5e3}return Et=q+Et,O={id:g++,callback:Z,priorityLevel:O,startTime:q,expirationTime:Et,sortIndex:-1},q>mt?(O.sortIndex=q,t(p,O),i(m)===null&&O===i(p)&&(A?(G(P),P=-1):A=!0,ht(V,q-mt))):(O.sortIndex=Et,t(m,O),T||S||(T=!0,H||(H=!0,st()))),O},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(O){var Z=y;return function(){var q=y;y=Z;try{return O.apply(this,arguments)}finally{y=q}}}})(oh)),oh}var O_;function Yy(){return O_||(O_=1,rh.exports=qy()),rh.exports}var lh={exports:{}},wn={};var P_;function Zy(){if(P_)return wn;P_=1;var o=Nd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:g}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},wn.flushSync=function(m){var p=h.T,g=s.p;try{if(h.T=null,s.p=2,m)return m()}finally{h.T=p,s.p=g,s.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:y,fetchPriority:S}):g==="script"&&s.d.X(m,{crossOrigin:_,integrity:y,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,_=d(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},wn.requestFormReset=function(m){s.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,g){return h.H.useFormState(m,p,g)},wn.useFormStatus=function(){return h.H.useHostTransitionStatus()},wn.version="19.2.6",wn}var z_;function Ky(){if(z_)return lh.exports;z_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),lh.exports=Zy(),lh.exports}var B_;function Qy(){if(B_)return Ro;B_=1;var o=Yy(),t=Nd(),i=Ky();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var x=!1,b=u.child;b;){if(b===a){x=!0,a=u,r=f;break}if(b===r){x=!0,r=u,a=f;break}b=b.sibling}if(!x){for(b=f.child;b;){if(b===a){x=!0,a=f,r=u;break}if(b===r){x=!0,r=f,a=u;break}b=b.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,y=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),N=Symbol.for("react.context"),D=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),z=Symbol.iterator;function st(e){return e===null||typeof e!="object"?null:(e=z&&e[z]||e["@@iterator"],typeof e=="function"?e:null)}var ot=Symbol.for("react.client.reference");function ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ot?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case A:return"Fragment";case v:return"Profiler";case M:return"StrictMode";case V:return"Suspense";case H:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case N:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case D:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ct(e.type)||"Memo";case j:n=e._payload,e=e._init;try{return ct(e(n))}catch{}}return null}var ht=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},mt=[],Et=-1;function L(e){return{current:e}}function nt(e){0>Et||(e.current=mt[Et],mt[Et]=null,Et--)}function Mt(e,n){Et++,mt[Et]=e.current,e.current=n}var wt=L(null),J=L(null),xt=L(null),_t=L(null);function vt(e,n){switch(Mt(xt,n),Mt(J,e),Mt(wt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Jg(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Jg(n),e=$g(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}nt(wt),Mt(wt,e)}function At(){nt(wt),nt(J),nt(xt)}function It(e){e.memoizedState!==null&&Mt(_t,e);var n=wt.current,a=$g(n,e.type);n!==a&&(Mt(J,e),Mt(wt,a))}function ee(e){J.current===e&&(nt(wt),nt(J)),_t.current===e&&(nt(_t),Mo._currentValue=q)}var ie,F;function oe(e){if(ie===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ie=n&&n[1]||"",F=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ie+e+F}var Vt=!1;function he(e,n){if(!e||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var gt=function(){throw Error()};if(Object.defineProperty(gt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(gt,[])}catch(lt){var it=lt}Reflect.construct(e,[],gt)}else{try{gt.call()}catch(lt){it=lt}e.call(gt.prototype)}}else{try{throw Error()}catch(lt){it=lt}(gt=e())&&typeof gt.catch=="function"&&gt.catch(function(){})}}catch(lt){if(lt&&it&&typeof lt.stack=="string")return[lt.stack,it.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),x=f[0],b=f[1];if(x&&b){var B=x.split(`
`),tt=b.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<tt.length&&!tt[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===tt.length)for(r=B.length-1,u=tt.length-1;1<=r&&0<=u&&B[r]!==tt[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==tt[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==tt[u]){var ft=`
`+B[r].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=r&&0<=u);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?oe(a):""}function Zt(e,n){switch(e.tag){case 26:case 27:case 5:return oe(e.type);case 16:return oe("Lazy");case 13:return e.child!==n&&n!==null?oe("Suspense Fallback"):oe("Suspense");case 19:return oe("SuspenseList");case 0:case 15:return he(e.type,!1);case 11:return he(e.type.render,!1);case 1:return he(e.type,!0);case 31:return oe("Activity");default:return""}}function ke(e){try{var n="",a=null;do n+=Zt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ht=Object.prototype.hasOwnProperty,ce=o.unstable_scheduleCallback,$e=o.unstable_cancelCallback,Je=o.unstable_shouldYield,U=o.unstable_requestPaint,E=o.unstable_now,et=o.unstable_getCurrentPriorityLevel,dt=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,ut=o.unstable_NormalPriority,Kt=o.unstable_LowPriority,Dt=o.unstable_IdlePriority,qt=o.log,Yt=o.unstable_setDisableYieldValue,Rt=null,Ut=null;function Qt(e){if(typeof qt=="function"&&Yt(e),Ut&&typeof Ut.setStrictMode=="function")try{Ut.setStrictMode(Rt,e)}catch{}}var Bt=Math.clz32?Math.clz32:X,Nt=Math.log,ue=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Nt(e)/ue|0)|0}var Ct=256,Lt=262144,Ft=4194304;function bt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function yt(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var b=r&134217727;return b!==0?(r=b&~f,r!==0?u=bt(r):(x&=b,x!==0?u=bt(x):a||(a=b&~e,a!==0&&(u=bt(a))))):(b=r&~f,b!==0?u=bt(b):x!==0?u=bt(x):a||(a=r&~e,a!==0&&(u=bt(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Gt(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function re(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Oe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Ae(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ln(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ri(e,n,a,r,u,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=x&~a;0<a;){var ft=31-Bt(a),gt=1<<ft;b[ft]=0,B[ft]=-1;var it=tt[ft];if(it!==null)for(tt[ft]=null,ft=0;ft<it.length;ft++){var lt=it[ft];lt!==null&&(lt.lane&=-536870913)}a&=~gt}r!==0&&Pr(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function Pr(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bt(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ri(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bt(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Rs(e,n){var a=n&-n;return a=(a&42)!==0?1:Cs(a),(a&(e.suspendedLanes|n))!==0?0:a}function Cs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ws(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Wa(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:M_(e.type))}function zr(e,n){var a=Z.p;try{return Z.p=e,n()}finally{Z.p=a}}var Yn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Yn,Mn="__reactProps$"+Yn,ua="__reactContainer$"+Yn,Br="__reactEvents$"+Yn,Kc="__reactListeners$"+Yn,Qc="__reactHandles$"+Yn,Ko="__reactResources$"+Yn,qa="__reactMarker$"+Yn;function R(e){delete e[rn],delete e[Mn],delete e[Br],delete e[Kc],delete e[Qc]}function W(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[ua]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=r_(e);e!==null;){if(a=e[rn])return a;e=r_(e)}return n}e=a,a=e.parentNode}return null}function at(e){if(e=e[rn]||e[ua]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function rt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function K(e){var n=e[Ko];return n||(n=e[Ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function St(e){e[qa]=!0}var Ot=new Set,Xt={};function zt(e,n){Jt(e,n),Jt(e+"Capture",n)}function Jt(e,n){for(Xt[e]=n,e=0;e<n.length;e++)Ot.add(n[e])}var ae=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ge={};function Le(e){return Ht.call(ge,e)?!0:Ht.call($t,e)?!1:ae.test(e)?ge[e]=!0:($t[e]=!0,!1)}function Xe(e,n,a){if(Le(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ne(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function xe(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function jt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function We(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Re(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function En(e){if(!e._valueTracker){var n=We(e)?"checked":"value";e._valueTracker=Re(e,n,""+e[n])}}function Ii(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=We(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ya=/[\n"\\]/g;function Me(e){return e.replace(Ya,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cn(e,n,a,r,u,f,x,b){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+jt(n)):e.value!==""+jt(n)&&(e.value=""+jt(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?dn(e,x,jt(n)):a!=null?dn(e,x,jt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+jt(b):e.removeAttribute("name")}function Nn(e,n,a,r,u,f,x,b){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){En(e);return}a=a!=null?""+jt(a):"",n=n!=null?""+jt(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=b?e.checked:!!r,e.defaultChecked=!!r,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),En(e)}function dn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function nn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+jt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function Ds(e,n,a){if(n!=null&&(n=""+jt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+jt(a):""}function Ci(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ht(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=jt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),En(e)}function Us(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Bv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Kd(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Zd(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Zd(e,f,n[f])}function Jc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qo(e){return Fv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fi(){}var $c=null;function tu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ls=null,Ns=null;function Qd(e){var n=at(e);if(n&&(e=n.stateNode)){var a=e[Mn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Cn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Me(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[Mn]||null;if(!u)throw Error(s(90));Cn(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Ii(r)}break t;case"textarea":Ds(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&nn(e,!!a.multiple,n,!1)}}}var eu=!1;function Jd(e,n,a){if(eu)return e(n,a);eu=!0;try{var r=e(n);return r}finally{if(eu=!1,(Ls!==null||Ns!==null)&&(Il(),Ls&&(n=Ls,e=Ns,Ns=Ls=null,Qd(n),e)))for(n=0;n<e.length;n++)Qd(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var r=a[Mn]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nu=!1;if(Hi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){nu=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{nu=!1}var fa=null,iu=null,Jo=null;function $d(){if(Jo)return Jo;var e,n=iu,a=n.length,r,u="value"in fa?fa.value:fa.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var x=a-e;for(r=1;r<=x&&n[a-r]===u[f-r];r++);return Jo=u.slice(e,1<r?1-r:void 0)}function $o(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tl(){return!0}function tp(){return!1}function Bn(e){function n(a,r,u,f,x){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(f):f[b]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?tl:tp,this.isPropagationStopped=tp,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tl)},persist:function(){},isPersistent:tl}),n}var Za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},el=Bn(Za),Hr=_({},Za,{view:0,detail:0}),Hv=Bn(Hr),au,su,Gr,nl=_({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ou,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gr&&(Gr&&e.type==="mousemove"?(au=e.screenX-Gr.screenX,su=e.screenY-Gr.screenY):su=au=0,Gr=e),au)},movementY:function(e){return"movementY"in e?e.movementY:su}}),ep=Bn(nl),Gv=_({},nl,{dataTransfer:0}),Vv=Bn(Gv),kv=_({},Hr,{relatedTarget:0}),ru=Bn(kv),Xv=_({},Za,{animationName:0,elapsedTime:0,pseudoElement:0}),jv=Bn(Xv),Wv=_({},Za,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qv=Bn(Wv),Yv=_({},Za,{data:0}),np=Bn(Yv),Zv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qv[e])?!!n[e]:!1}function ou(){return Jv}var $v=_({},Hr,{key:function(e){if(e.key){var n=Zv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$o(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ou,charCode:function(e){return e.type==="keypress"?$o(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$o(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tx=Bn($v),ex=_({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ip=Bn(ex),nx=_({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ou}),ix=Bn(nx),ax=_({},Za,{propertyName:0,elapsedTime:0,pseudoElement:0}),sx=Bn(ax),rx=_({},nl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ox=Bn(rx),lx=_({},Za,{newState:0,oldState:0}),cx=Bn(lx),ux=[9,13,27,32],lu=Hi&&"CompositionEvent"in window,Vr=null;Hi&&"documentMode"in document&&(Vr=document.documentMode);var fx=Hi&&"TextEvent"in window&&!Vr,ap=Hi&&(!lu||Vr&&8<Vr&&11>=Vr),sp=" ",rp=!1;function op(e,n){switch(e){case"keyup":return ux.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function lp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Os=!1;function hx(e,n){switch(e){case"compositionend":return lp(n);case"keypress":return n.which!==32?null:(rp=!0,sp);case"textInput":return e=n.data,e===sp&&rp?null:e;default:return null}}function dx(e,n){if(Os)return e==="compositionend"||!lu&&op(e,n)?(e=$d(),Jo=iu=fa=null,Os=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return ap&&n.locale!=="ko"?null:n.data;default:return null}}var px={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function cp(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!px[e.type]:n==="textarea"}function up(e,n,a,r){Ls?Ns?Ns.push(r):Ns=[r]:Ls=r,n=jl(n,"onChange"),0<n.length&&(a=new el("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var kr=null,Xr=null;function mx(e){Wg(e,0)}function il(e){var n=rt(e);if(Ii(n))return e}function fp(e,n){if(e==="change")return n}var hp=!1;if(Hi){var cu;if(Hi){var uu="oninput"in document;if(!uu){var dp=document.createElement("div");dp.setAttribute("oninput","return;"),uu=typeof dp.oninput=="function"}cu=uu}else cu=!1;hp=cu&&(!document.documentMode||9<document.documentMode)}function pp(){kr&&(kr.detachEvent("onpropertychange",mp),Xr=kr=null)}function mp(e){if(e.propertyName==="value"&&il(Xr)){var n=[];up(n,Xr,e,tu(e)),Jd(mx,n)}}function gx(e,n,a){e==="focusin"?(pp(),kr=n,Xr=a,kr.attachEvent("onpropertychange",mp)):e==="focusout"&&pp()}function _x(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return il(Xr)}function vx(e,n){if(e==="click")return il(n)}function xx(e,n){if(e==="input"||e==="change")return il(n)}function yx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Zn=typeof Object.is=="function"?Object.is:yx;function jr(e,n){if(Zn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ht.call(n,u)||!Zn(e[u],n[u]))return!1}return!0}function gp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function _p(e,n){var a=gp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=gp(a)}}function vp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?vp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function xp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function fu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Sx=Hi&&"documentMode"in document&&11>=document.documentMode,Ps=null,hu=null,Wr=null,du=!1;function yp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;du||Ps==null||Ps!==vn(r)||(r=Ps,"selectionStart"in r&&fu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&jr(Wr,r)||(Wr=r,r=jl(hu,"onSelect"),0<r.length&&(n=new el("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ps)))}function Ka(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:Ka("Animation","AnimationEnd"),animationiteration:Ka("Animation","AnimationIteration"),animationstart:Ka("Animation","AnimationStart"),transitionrun:Ka("Transition","TransitionRun"),transitionstart:Ka("Transition","TransitionStart"),transitioncancel:Ka("Transition","TransitionCancel"),transitionend:Ka("Transition","TransitionEnd")},pu={},Sp={};Hi&&(Sp=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Qa(e){if(pu[e])return pu[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Sp)return pu[e]=n[a];return e}var Mp=Qa("animationend"),Ep=Qa("animationiteration"),Tp=Qa("animationstart"),Mx=Qa("transitionrun"),Ex=Qa("transitionstart"),Tx=Qa("transitioncancel"),bp=Qa("transitionend"),Ap=new Map,mu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");mu.push("scrollEnd");function _i(e,n){Ap.set(e,n),zt(n,[e])}var al=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},oi=[],Bs=0,gu=0;function sl(){for(var e=Bs,n=gu=Bs=0;n<e;){var a=oi[n];oi[n++]=null;var r=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var f=oi[n];if(oi[n++]=null,r!==null&&u!==null){var x=r.pending;x===null?u.next=u:(u.next=x.next,x.next=u),r.pending=u}f!==0&&Rp(a,u,f)}}function rl(e,n,a,r){oi[Bs++]=e,oi[Bs++]=n,oi[Bs++]=a,oi[Bs++]=r,gu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function _u(e,n,a,r){return rl(e,n,a,r),ol(e)}function Ja(e,n){return rl(e,null,null,n),ol(e)}function Rp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Bt(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function ol(e){if(50<mo)throw mo=0,Rf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function bx(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(e,n,a,r){return new bx(e,n,a,r)}function vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Cp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function ll(e,n,a,r,u,f){var x=0;if(r=e,typeof e=="function")vu(e)&&(x=1);else if(typeof e=="string")x=Dy(e,a,wt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case w:return e=Kn(31,a,n,u),e.elementType=w,e.lanes=f,e;case A:return $a(a.children,u,f,n);case M:x=8,u|=24;break;case v:return e=Kn(12,a,n,u|2),e.elementType=v,e.lanes=f,e;case V:return e=Kn(13,a,n,u),e.elementType=V,e.lanes=f,e;case H:return e=Kn(19,a,n,u),e.elementType=H,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:x=10;break t;case G:x=9;break t;case D:x=11;break t;case P:x=14;break t;case j:x=16,r=null;break t}x=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Kn(x,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function $a(e,n,a,r){return e=Kn(7,e,r,n),e.lanes=a,e}function xu(e,n,a){return e=Kn(6,e,null,n),e.lanes=a,e}function wp(e){var n=Kn(18,null,null,0);return n.stateNode=e,n}function yu(e,n,a){return n=Kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Dp=new WeakMap;function li(e,n){if(typeof e=="object"&&e!==null){var a=Dp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ke(n)},Dp.set(e,n),n)}return{value:e,source:n,stack:ke(n)}}var Fs=[],Hs=0,cl=null,qr=0,ci=[],ui=0,ha=null,wi=1,Di="";function Vi(e,n){Fs[Hs++]=qr,Fs[Hs++]=cl,cl=e,qr=n}function Up(e,n,a){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=ha,ha=e;var r=wi;e=Di;var u=32-Bt(r)-1;r&=~(1<<u),a+=1;var f=32-Bt(n)+u;if(30<f){var x=u-u%5;f=(r&(1<<x)-1).toString(32),r>>=x,u-=x,wi=1<<32-Bt(n)+u|a<<u|r,Di=f+e}else wi=1<<f|a<<u|r,Di=e}function Su(e){e.return!==null&&(Vi(e,1),Up(e,1,0))}function Mu(e){for(;e===cl;)cl=Fs[--Hs],Fs[Hs]=null,qr=Fs[--Hs],Fs[Hs]=null;for(;e===ha;)ha=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null,wi=ci[--ui],ci[ui]=null}function Lp(e,n){ci[ui++]=wi,ci[ui++]=Di,ci[ui++]=ha,wi=n.id,Di=n.overflow,ha=e}var Tn=null,qe=null,be=!1,da=null,fi=!1,Eu=Error(s(519));function pa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Yr(li(n,e)),Eu}function Np(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[rn]=e,n[Mn]=r,a){case"dialog":Se("cancel",n),Se("close",n);break;case"iframe":case"object":case"embed":Se("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)Se(_o[a],n);break;case"source":Se("error",n);break;case"img":case"image":case"link":Se("error",n),Se("load",n);break;case"details":Se("toggle",n);break;case"input":Se("invalid",n),Nn(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Se("invalid",n);break;case"textarea":Se("invalid",n),Ci(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Kg(n.textContent,a)?(r.popover!=null&&(Se("beforetoggle",n),Se("toggle",n)),r.onScroll!=null&&Se("scroll",n),r.onScrollEnd!=null&&Se("scrollend",n),r.onClick!=null&&(n.onclick=Fi),n=!0):n=!1,n||pa(e,!0)}function Op(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Gs(e){if(e!==Tn)return!1;if(!be)return Op(e),be=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Vf(e.type,e.memoizedProps)),a=!a),a&&qe&&pa(e),Op(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=s_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));qe=s_(e)}else n===27?(n=qe,Ca(e.type)?(e=qf,qf=null,qe=e):qe=n):qe=Tn?di(e.stateNode.nextSibling):null;return!0}function ts(){qe=Tn=null,be=!1}function Tu(){var e=da;return e!==null&&(Gn===null?Gn=e:Gn.push.apply(Gn,e),da=null),e}function Yr(e){da===null?da=[e]:da.push(e)}var bu=L(null),es=null,ki=null;function ma(e,n,a){Mt(bu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=bu.current,nt(bu)}function Au(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Ru(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;t:for(;f!==null;){var b=f;f=u;for(var B=0;B<n.length;B++)if(b.context===n[B]){f.lanes|=a,b=f.alternate,b!==null&&(b.lanes|=a),Au(f.return,a,e),r||(x=null);break t}f=b.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),Au(x,a,e),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===e){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Vs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var b=u.type;Zn(u.pendingProps.value,x.value)||(e!==null?e.push(b):e=[b])}}else if(u===_t.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&Ru(n,e,a,r),n.flags|=262144}function ul(e){for(e=e.firstContext;e!==null;){if(!Zn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ns(e){es=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function bn(e){return Pp(es,e)}function fl(e,n){return es===null&&ns(e),Pp(e,n)}function Pp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var Ax=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Rx=o.unstable_scheduleCallback,Cx=o.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cu(){return{controller:new Ax,data:new Map,refCount:0}}function Zr(e){e.refCount--,e.refCount===0&&Rx(Cx,function(){e.controller.abort()})}var Kr=null,wu=0,ks=0,Xs=null;function wx(e,n){if(Kr===null){var a=Kr=[];wu=0,ks=Nf(),Xs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return wu++,n.then(zp,zp),n}function zp(){if(--wu===0&&Kr!==null){Xs!==null&&(Xs.status="fulfilled");var e=Kr;Kr=null,ks=0,Xs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Dx(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Bp=O.S;O.S=function(e,n){yg=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wx(e,n),Bp!==null&&Bp(e,n)};var is=L(null);function Du(){var e=is.current;return e!==null?e:je.pooledCache}function hl(e,n){n===null?Mt(is,is.current):Mt(is,n.pool)}function Ip(){var e=Du();return e===null?null:{parent:on._currentValue,pool:e}}var js=Error(s(460)),Uu=Error(s(474)),dl=Error(s(542)),pl={then:function(){}};function Fp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Hp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Fi,Fi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e;default:if(typeof n.status=="string")n.then(Fi,Fi);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vp(e),e}throw ss=n,js}}function as(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ss=a,js):a}}var ss=null;function Gp(){if(ss===null)throw Error(s(459));var e=ss;return ss=null,e}function Vp(e){if(e===js||e===dl)throw Error(s(483))}var Ws=null,Qr=0;function ml(e){var n=Qr;return Qr+=1,Ws===null&&(Ws=[]),Hp(Ws,e,n)}function Jr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function gl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function kp(e){function n(Q,k){if(e){var $=Q.deletions;$===null?(Q.deletions=[k],Q.flags|=16):$.push(k)}}function a(Q,k){if(!e)return null;for(;k!==null;)n(Q,k),k=k.sibling;return null}function r(Q){for(var k=new Map;Q!==null;)Q.key!==null?k.set(Q.key,Q):k.set(Q.index,Q),Q=Q.sibling;return k}function u(Q,k){return Q=Gi(Q,k),Q.index=0,Q.sibling=null,Q}function f(Q,k,$){return Q.index=$,e?($=Q.alternate,$!==null?($=$.index,$<k?(Q.flags|=67108866,k):$):(Q.flags|=67108866,k)):(Q.flags|=1048576,k)}function x(Q){return e&&Q.alternate===null&&(Q.flags|=67108866),Q}function b(Q,k,$,pt){return k===null||k.tag!==6?(k=xu($,Q.mode,pt),k.return=Q,k):(k=u(k,$),k.return=Q,k)}function B(Q,k,$,pt){var te=$.type;return te===A?ft(Q,k,$.props.children,pt,$.key):k!==null&&(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&as(te)===k.type)?(k=u(k,$.props),Jr(k,$),k.return=Q,k):(k=ll($.type,$.key,$.props,null,Q.mode,pt),Jr(k,$),k.return=Q,k)}function tt(Q,k,$,pt){return k===null||k.tag!==4||k.stateNode.containerInfo!==$.containerInfo||k.stateNode.implementation!==$.implementation?(k=yu($,Q.mode,pt),k.return=Q,k):(k=u(k,$.children||[]),k.return=Q,k)}function ft(Q,k,$,pt,te){return k===null||k.tag!==7?(k=$a($,Q.mode,pt,te),k.return=Q,k):(k=u(k,$),k.return=Q,k)}function gt(Q,k,$){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return k=xu(""+k,Q.mode,$),k.return=Q,k;if(typeof k=="object"&&k!==null){switch(k.$$typeof){case S:return $=ll(k.type,k.key,k.props,null,Q.mode,$),Jr($,k),$.return=Q,$;case T:return k=yu(k,Q.mode,$),k.return=Q,k;case j:return k=as(k),gt(Q,k,$)}if(ht(k)||st(k))return k=$a(k,Q.mode,$,null),k.return=Q,k;if(typeof k.then=="function")return gt(Q,ml(k),$);if(k.$$typeof===N)return gt(Q,fl(Q,k),$);gl(Q,k)}return null}function it(Q,k,$,pt){var te=k!==null?k.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return te!==null?null:b(Q,k,""+$,pt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case S:return $.key===te?B(Q,k,$,pt):null;case T:return $.key===te?tt(Q,k,$,pt):null;case j:return $=as($),it(Q,k,$,pt)}if(ht($)||st($))return te!==null?null:ft(Q,k,$,pt,null);if(typeof $.then=="function")return it(Q,k,ml($),pt);if($.$$typeof===N)return it(Q,k,fl(Q,$),pt);gl(Q,$)}return null}function lt(Q,k,$,pt,te){if(typeof pt=="string"&&pt!==""||typeof pt=="number"||typeof pt=="bigint")return Q=Q.get($)||null,b(k,Q,""+pt,te);if(typeof pt=="object"&&pt!==null){switch(pt.$$typeof){case S:return Q=Q.get(pt.key===null?$:pt.key)||null,B(k,Q,pt,te);case T:return Q=Q.get(pt.key===null?$:pt.key)||null,tt(k,Q,pt,te);case j:return pt=as(pt),lt(Q,k,$,pt,te)}if(ht(pt)||st(pt))return Q=Q.get($)||null,ft(k,Q,pt,te,null);if(typeof pt.then=="function")return lt(Q,k,$,ml(pt),te);if(pt.$$typeof===N)return lt(Q,k,$,fl(k,pt),te);gl(k,pt)}return null}function kt(Q,k,$,pt){for(var te=null,Ce=null,Wt=k,de=k=0,Te=null;Wt!==null&&de<$.length;de++){Wt.index>de?(Te=Wt,Wt=null):Te=Wt.sibling;var we=it(Q,Wt,$[de],pt);if(we===null){Wt===null&&(Wt=Te);break}e&&Wt&&we.alternate===null&&n(Q,Wt),k=f(we,k,de),Ce===null?te=we:Ce.sibling=we,Ce=we,Wt=Te}if(de===$.length)return a(Q,Wt),be&&Vi(Q,de),te;if(Wt===null){for(;de<$.length;de++)Wt=gt(Q,$[de],pt),Wt!==null&&(k=f(Wt,k,de),Ce===null?te=Wt:Ce.sibling=Wt,Ce=Wt);return be&&Vi(Q,de),te}for(Wt=r(Wt);de<$.length;de++)Te=lt(Wt,Q,de,$[de],pt),Te!==null&&(e&&Te.alternate!==null&&Wt.delete(Te.key===null?de:Te.key),k=f(Te,k,de),Ce===null?te=Te:Ce.sibling=Te,Ce=Te);return e&&Wt.forEach(function(Na){return n(Q,Na)}),be&&Vi(Q,de),te}function ne(Q,k,$,pt){if($==null)throw Error(s(151));for(var te=null,Ce=null,Wt=k,de=k=0,Te=null,we=$.next();Wt!==null&&!we.done;de++,we=$.next()){Wt.index>de?(Te=Wt,Wt=null):Te=Wt.sibling;var Na=it(Q,Wt,we.value,pt);if(Na===null){Wt===null&&(Wt=Te);break}e&&Wt&&Na.alternate===null&&n(Q,Wt),k=f(Na,k,de),Ce===null?te=Na:Ce.sibling=Na,Ce=Na,Wt=Te}if(we.done)return a(Q,Wt),be&&Vi(Q,de),te;if(Wt===null){for(;!we.done;de++,we=$.next())we=gt(Q,we.value,pt),we!==null&&(k=f(we,k,de),Ce===null?te=we:Ce.sibling=we,Ce=we);return be&&Vi(Q,de),te}for(Wt=r(Wt);!we.done;de++,we=$.next())we=lt(Wt,Q,de,we.value,pt),we!==null&&(e&&we.alternate!==null&&Wt.delete(we.key===null?de:we.key),k=f(we,k,de),Ce===null?te=we:Ce.sibling=we,Ce=we);return e&&Wt.forEach(function(Gy){return n(Q,Gy)}),be&&Vi(Q,de),te}function Fe(Q,k,$,pt){if(typeof $=="object"&&$!==null&&$.type===A&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case S:t:{for(var te=$.key;k!==null;){if(k.key===te){if(te=$.type,te===A){if(k.tag===7){a(Q,k.sibling),pt=u(k,$.props.children),pt.return=Q,Q=pt;break t}}else if(k.elementType===te||typeof te=="object"&&te!==null&&te.$$typeof===j&&as(te)===k.type){a(Q,k.sibling),pt=u(k,$.props),Jr(pt,$),pt.return=Q,Q=pt;break t}a(Q,k);break}else n(Q,k);k=k.sibling}$.type===A?(pt=$a($.props.children,Q.mode,pt,$.key),pt.return=Q,Q=pt):(pt=ll($.type,$.key,$.props,null,Q.mode,pt),Jr(pt,$),pt.return=Q,Q=pt)}return x(Q);case T:t:{for(te=$.key;k!==null;){if(k.key===te)if(k.tag===4&&k.stateNode.containerInfo===$.containerInfo&&k.stateNode.implementation===$.implementation){a(Q,k.sibling),pt=u(k,$.children||[]),pt.return=Q,Q=pt;break t}else{a(Q,k);break}else n(Q,k);k=k.sibling}pt=yu($,Q.mode,pt),pt.return=Q,Q=pt}return x(Q);case j:return $=as($),Fe(Q,k,$,pt)}if(ht($))return kt(Q,k,$,pt);if(st($)){if(te=st($),typeof te!="function")throw Error(s(150));return $=te.call($),ne(Q,k,$,pt)}if(typeof $.then=="function")return Fe(Q,k,ml($),pt);if($.$$typeof===N)return Fe(Q,k,fl(Q,$),pt);gl(Q,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,k!==null&&k.tag===6?(a(Q,k.sibling),pt=u(k,$),pt.return=Q,Q=pt):(a(Q,k),pt=xu($,Q.mode,pt),pt.return=Q,Q=pt),x(Q)):a(Q,k)}return function(Q,k,$,pt){try{Qr=0;var te=Fe(Q,k,$,pt);return Ws=null,te}catch(Wt){if(Wt===js||Wt===dl)throw Wt;var Ce=Kn(29,Wt,null,Q.mode);return Ce.lanes=pt,Ce.return=Q,Ce}}}var rs=kp(!0),Xp=kp(!1),ga=!1;function Lu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function va(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ue&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=ol(e),Rp(e,null,a),n}return rl(e,r,n,a),ol(e)}function $r(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ri(e,a)}}function Ou(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Pu=!1;function to(){if(Pu){var e=Xs;if(e!==null)throw e}}function eo(e,n,a,r){Pu=!1;var u=e.updateQueue;ga=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,b=u.shared.pending;if(b!==null){u.shared.pending=null;var B=b,tt=B.next;B.next=null,x===null?f=tt:x.next=tt,x=B;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,b=ft.lastBaseUpdate,b!==x&&(b===null?ft.firstBaseUpdate=tt:b.next=tt,ft.lastBaseUpdate=B))}if(f!==null){var gt=u.baseState;x=0,ft=tt=B=null,b=f;do{var it=b.lane&-536870913,lt=it!==b.lane;if(lt?(Ee&it)===it:(r&it)===it){it!==0&&it===ks&&(Pu=!0),ft!==null&&(ft=ft.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});t:{var kt=e,ne=b;it=n;var Fe=a;switch(ne.tag){case 1:if(kt=ne.payload,typeof kt=="function"){gt=kt.call(Fe,gt,it);break t}gt=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ne.payload,it=typeof kt=="function"?kt.call(Fe,gt,it):kt,it==null)break t;gt=_({},gt,it);break t;case 2:ga=!0}}it=b.callback,it!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=u.callbacks,lt===null?u.callbacks=[it]:lt.push(it))}else lt={lane:it,tag:b.tag,payload:b.payload,callback:b.callback,next:null},ft===null?(tt=ft=lt,B=gt):ft=ft.next=lt,x|=it;if(b=b.next,b===null){if(b=u.shared.pending,b===null)break;lt=b,b=lt.next,lt.next=null,u.lastBaseUpdate=lt,u.shared.pending=null}}while(!0);ft===null&&(B=gt),u.baseState=B,u.firstBaseUpdate=tt,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),Ea|=x,e.lanes=x,e.memoizedState=gt}}function jp(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Wp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)jp(a[e],n)}var qs=L(null),_l=L(0);function qp(e,n){e=$i,Mt(_l,e),Mt(qs,n),$i=e|n.baseLanes}function zu(){Mt(_l,$i),Mt(qs,qs.current)}function Bu(){$i=_l.current,nt(qs),nt(_l)}var Qn=L(null),hi=null;function xa(e){var n=e.alternate;Mt(an,an.current&1),Mt(Qn,e),hi===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(hi=e)}function Iu(e){Mt(an,an.current),Mt(Qn,e),hi===null&&(hi=e)}function Yp(e){e.tag===22?(Mt(an,an.current),Mt(Qn,e),hi===null&&(hi=e)):ya()}function ya(){Mt(an,an.current),Mt(Qn,Qn.current)}function Jn(e){nt(Qn),hi===e&&(hi=null),nt(an)}var an=L(0);function vl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||jf(a)||Wf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ji=0,fe=null,Be=null,ln=null,xl=!1,Ys=!1,os=!1,yl=0,no=0,Zs=null,Ux=0;function tn(){throw Error(s(321))}function Fu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Zn(e[a],n[a]))return!1;return!0}function Hu(e,n,a,r,u,f){return ji=f,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?Um:ef,os=!1,f=a(r,u),os=!1,Ys&&(f=Kp(n,a,r,u)),Zp(e),f}function Zp(e){O.H=so;var n=Be!==null&&Be.next!==null;if(ji=0,ln=Be=fe=null,xl=!1,no=0,Zs=null,n)throw Error(s(300));e===null||cn||(e=e.dependencies,e!==null&&ul(e)&&(cn=!0))}function Kp(e,n,a,r){fe=e;var u=0;do{if(Ys&&(Zs=null),no=0,Ys=!1,25<=u)throw Error(s(301));if(u+=1,ln=Be=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=Lm,f=n(a,r)}while(Ys);return f}function Lx(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?io(n):n,e=e.useState()[0],(Be!==null?Be.memoizedState:null)!==e&&(fe.flags|=1024),n}function Gu(){var e=yl!==0;return yl=0,e}function Vu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function ku(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}ji=0,ln=Be=fe=null,Ys=!1,no=yl=0,Zs=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?fe.memoizedState=ln=e:ln=ln.next=e,ln}function sn(){if(Be===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var n=ln===null?fe.memoizedState:ln.next;if(n!==null)ln=n,Be=e;else{if(e===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},ln===null?fe.memoizedState=ln=e:ln=ln.next=e}return ln}function Sl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function io(e){var n=no;return no+=1,Zs===null&&(Zs=[]),e=Hp(Zs,e,n),n=fe,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?Um:ef),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return io(e);if(e.$$typeof===N)return bn(e)}throw Error(s(438,String(e)))}function Xu(e){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Sl(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function El(e){var n=sn();return ju(n,Be,e)}function ju(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var b=x=null,B=null,tt=n,ft=!1;do{var gt=tt.lane&-536870913;if(gt!==tt.lane?(Ee&gt)===gt:(ji&gt)===gt){var it=tt.revertLane;if(it===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),gt===ks&&(ft=!0);else if((ji&it)===it){tt=tt.next,it===ks&&(ft=!0);continue}else gt={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=gt,x=f):B=B.next=gt,fe.lanes|=it,Ea|=it;gt=tt.action,os&&a(f,gt),f=tt.hasEagerState?tt.eagerState:a(f,gt)}else it={lane:gt,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(b=B=it,x=f):B=B.next=it,fe.lanes|=gt,Ea|=gt;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?x=f:B.next=b,!Zn(f,e.memoizedState)&&(cn=!0,ft&&(a=Xs,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Wu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=e(f,x.action),x=x.next;while(x!==u);Zn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Qp(e,n,a){var r=fe,u=sn(),f=be;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Zn((Be||u).memoizedState,a);if(x&&(u.memoizedState=a,cn=!0),u=u.queue,Zu(tm.bind(null,r,u,e),[e]),u.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(r.flags|=2048,Ks(9,{destroy:void 0},$p.bind(null,r,u,a,n),null),je===null)throw Error(s(349));f||(ji&127)!==0||Jp(r,n,a)}return a}function Jp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=Sl(),fe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $p(e,n,a,r){n.value=a,n.getSnapshot=r,em(n)&&nm(e)}function tm(e,n,a){return a(function(){em(n)&&nm(e)})}function em(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Zn(e,a)}catch{return!0}}function nm(e){var n=Ja(e,2);n!==null&&Vn(n,e,2)}function qu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),os){Qt(!0);try{a()}finally{Qt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function im(e,n,a,r){return e.baseState=a,ju(e,Be,typeof r=="function"?r:Wi)}function Nx(e,n,a,r,u){if(Al(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};O.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,am(n,f)):(f.next=a.next,n.pending=a.next=f)}}function am(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=O.T,x={};O.T=x;try{var b=a(u,r),B=O.S;B!==null&&B(x,b),sm(e,n,b)}catch(tt){Yu(e,n,tt)}finally{f!==null&&x.types!==null&&(f.types=x.types),O.T=f}}else try{f=a(u,r),sm(e,n,f)}catch(tt){Yu(e,n,tt)}}function sm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){rm(e,n,r)},function(r){return Yu(e,n,r)}):rm(e,n,a)}function rm(e,n,a){n.status="fulfilled",n.value=a,om(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,am(e,a)))}function Yu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,om(n),n=n.next;while(n!==r)}e.action=null}function om(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lm(e,n){return n}function cm(e,n){if(be){var a=je.formState;if(a!==null){t:{var r=fe;if(be){if(qe){e:{for(var u=qe,f=fi;u.nodeType!==8;){if(!f){u=null;break e}if(u=di(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){qe=di(u.nextSibling),r=u.data==="F!";break t}}pa(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lm,lastRenderedState:n},a.queue=r,a=Cm.bind(null,fe,r),r.dispatch=a,r=qu(!1),f=tf.bind(null,fe,!1,r.queue),r=On(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=Nx.bind(null,fe,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function um(e){var n=sn();return fm(n,Be,e)}function fm(e,n,a){if(n=ju(e,n,lm)[0],e=El(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=io(n)}catch(x){throw x===js?dl:x}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,Ks(9,{destroy:void 0},Ox.bind(null,u,a),null)),[r,f,e]}function Ox(e,n){e.action=n}function hm(e){var n=sn(),a=Be;if(a!==null)return fm(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ks(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Sl(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dm(){return sn().memoizedState}function Tl(e,n,a,r){var u=On();fe.flags|=e,u.memoizedState=Ks(1|n,{destroy:void 0},a,r===void 0?null:r)}function bl(e,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;Be!==null&&r!==null&&Fu(r,Be.memoizedState.deps)?u.memoizedState=Ks(n,f,a,r):(fe.flags|=e,u.memoizedState=Ks(1|n,f,a,r))}function pm(e,n){Tl(8390656,8,e,n)}function Zu(e,n){bl(2048,8,e,n)}function Px(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Sl(),fe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mm(e){var n=sn().memoizedState;return Px({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gm(e,n){return bl(4,2,e,n)}function _m(e,n){return bl(4,4,e,n)}function vm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xm(e,n,a){a=a!=null?a.concat([e]):null,bl(4,4,vm.bind(null,n,e),a)}function Ku(){}function ym(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Fu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Sm(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Fu(n,r[1]))return r[0];if(r=e(),os){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[r,n],r}function Qu(e,n,a){return a===void 0||(ji&1073741824)!==0&&(Ee&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Mg(),fe.lanes|=e,Ea|=e,a)}function Mm(e,n,a,r){return Zn(a,n)?a:qs.current!==null?(e=Qu(e,a,r),Zn(e,n)||(cn=!0),e):(ji&42)===0||(ji&1073741824)!==0&&(Ee&261930)===0?(cn=!0,e.memoizedState=a):(e=Mg(),fe.lanes|=e,Ea|=e,n)}function Em(e,n,a,r,u){var f=Z.p;Z.p=f!==0&&8>f?f:8;var x=O.T,b={};O.T=b,tf(e,!1,n,a);try{var B=u(),tt=O.S;if(tt!==null&&tt(b,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=Dx(B,r);ao(e,n,ft,ei(e))}else ao(e,n,r,ei(e))}catch(gt){ao(e,n,{then:function(){},status:"rejected",reason:gt},ei())}finally{Z.p=f,x!==null&&b.types!==null&&(x.types=b.types),O.T=x}}function zx(){}function Ju(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=Tm(e).queue;Em(e,u,n,q,a===null?zx:function(){return bm(e),a(r)})}function Tm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bm(e){var n=Tm(e);n.next===null&&(n=e.alternate.memoizedState),ao(e,n.next.queue,{},ei())}function $u(){return bn(Mo)}function Am(){return sn().memoizedState}function Rm(){return sn().memoizedState}function Bx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=_a(a);var r=va(n,e,a);r!==null&&(Vn(r,n,a),$r(r,n,a)),n={cache:Cu()},e.payload=n;return}n=n.return}}function Ix(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Al(e)?wm(n,a):(a=_u(e,n,a,r),a!==null&&(Vn(a,e,r),Dm(a,n,r)))}function Cm(e,n,a){var r=ei();ao(e,n,a,r)}function ao(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Al(e))wm(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,b=f(x,a);if(u.hasEagerState=!0,u.eagerState=b,Zn(b,x))return rl(e,n,u,0),je===null&&sl(),!1}catch{}if(a=_u(e,n,u,r),a!==null)return Vn(a,e,r),Dm(a,n,r),!0}return!1}function tf(e,n,a,r){if(r={lane:2,revertLane:Nf(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Al(e)){if(n)throw Error(s(479))}else n=_u(e,a,r,2),n!==null&&Vn(n,e,2)}function Al(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function wm(e,n){Ys=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dm(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ri(e,a)}}var so={readContext:bn,use:Ml,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};so.useEffectEvent=tn;var Um={readContext:bn,use:Ml,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:bn,useEffect:pm,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Tl(4194308,4,vm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Tl(4194308,4,e,n)},useInsertionEffect:function(e,n){Tl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(os){Qt(!0);try{e()}finally{Qt(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var u=a(n);if(os){Qt(!0);try{a(n)}finally{Qt(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Ix.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=qu(e);var n=e.queue,a=Cm.bind(null,fe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ku,useDeferredValue:function(e,n){var a=On();return Qu(a,e,n)},useTransition:function(){var e=qu(!1);return e=Em.bind(null,fe,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=fe,u=On();if(be){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),je===null)throw Error(s(349));(Ee&127)!==0||Jp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,pm(tm.bind(null,r,f,e),[e]),r.flags|=2048,Ks(9,{destroy:void 0},$p.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=je.identifierPrefix;if(be){var a=Di,r=wi;a=(r&~(1<<32-Bt(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=yl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Ux++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:$u,useFormState:cm,useActionState:cm,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,fe,!0,a),a.dispatch=n,[e,n]},useMemoCache:Xu,useCacheRefresh:function(){return On().memoizedState=Bx.bind(null,fe)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},ef={readContext:bn,use:Ml,useCallback:ym,useContext:bn,useEffect:Zu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:El,useRef:dm,useState:function(){return El(Wi)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=sn();return Mm(a,Be.memoizedState,e,n)},useTransition:function(){var e=El(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:$u,useFormState:um,useActionState:um,useOptimistic:function(e,n){var a=sn();return im(a,Be,e,n)},useMemoCache:Xu,useCacheRefresh:Rm};ef.useEffectEvent=mm;var Lm={readContext:bn,use:Ml,useCallback:ym,useContext:bn,useEffect:Zu,useImperativeHandle:xm,useInsertionEffect:gm,useLayoutEffect:_m,useMemo:Sm,useReducer:Wu,useRef:dm,useState:function(){return Wu(Wi)},useDebugValue:Ku,useDeferredValue:function(e,n){var a=sn();return Be===null?Qu(a,e,n):Mm(a,Be.memoizedState,e,n)},useTransition:function(){var e=Wu(Wi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:io(e),n]},useSyncExternalStore:Qp,useId:Am,useHostTransitionStatus:$u,useFormState:hm,useActionState:hm,useOptimistic:function(e,n){var a=sn();return Be!==null?im(a,Be,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Rm};Lm.useEffectEvent=mm;function nf(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=_a(r);u.payload=n,a!=null&&(u.callback=a),n=va(e,u,r),n!==null&&(Vn(n,e,r),$r(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=_a(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=va(e,u,r),n!==null&&(Vn(n,e,r),$r(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=_a(a);r.tag=2,n!=null&&(r.callback=n),n=va(e,r,a),n!==null&&(Vn(n,e,a),$r(n,e,a))}};function Nm(e,n,a,r,u,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,x):n.prototype&&n.prototype.isPureReactComponent?!jr(a,r)||!jr(u,f):!0}function Om(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function ls(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Pm(e){al(e)}function zm(e){console.error(e)}function Bm(e){al(e)}function Rl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Im(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function sf(e,n,a){return a=_a(a),a.tag=3,a.payload={element:null},a.callback=function(){Rl(e,n)},a}function Fm(e){return e=_a(e),e.tag=3,e}function Hm(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Im(n,a,r)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){Im(n,a,r),typeof u!="function"&&(Ta===null?Ta=new Set([this]):Ta.add(this));var b=r.stack;this.componentDidCatch(r.value,{componentStack:b!==null?b:""})})}function Fx(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?Fl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Df(e,r,u)),!1;case 22:return a.flags|=65536,r===pl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Df(e,r,u)),!1}throw Error(s(435,a.tag))}return Df(e,r,u),Fl(),!1}if(be)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Eu&&(e=Error(s(422),{cause:r}),Yr(li(e,a)))):(r!==Eu&&(n=Error(s(423),{cause:r}),Yr(li(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=li(r,a),u=sf(e.stateNode,r,u),Ou(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=li(f,a),po===null?po=[f]:po.push(f),en!==4&&(en=2),n===null)return!0;r=li(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=sf(a.stateNode,r,e),Ou(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ta===null||!Ta.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Fm(u),Hm(u,e,a,r),Ou(a,u),!1}a=a.return}while(a!==null);return!1}var rf=Error(s(461)),cn=!1;function An(e,n,a,r){n.child=e===null?Xp(n,null,a,r):rs(n,e.child,a,r)}function Gm(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var x={};for(var b in r)b!=="ref"&&(x[b]=r[b])}else x=r;return ns(n),r=Hu(e,n,a,x,f,u),b=Gu(),e!==null&&!cn?(Vu(e,n,u),qi(e,n,u)):(be&&b&&Su(n),n.flags|=1,An(e,n,r,u),n.child)}function Vm(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!vu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,km(e,n,f,r,u)):(e=ll(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!pf(e,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:jr,a(x,r)&&e.ref===n.ref)return qi(e,n,u)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function km(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(jr(f,r)&&e.ref===n.ref)if(cn=!1,n.pendingProps=r=f,pf(e,u))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,qi(e,n,u)}return of(e,n,a,r,u)}function Xm(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return jm(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&hl(n,f!==null?f.cachePool:null),f!==null?qp(n,f):zu(),Yp(n);else return r=n.lanes=536870912,jm(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(hl(n,f.cachePool),qp(n,f),ya(),n.memoizedState=null):(e!==null&&hl(n,null),zu(),ya());return An(e,n,u,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function jm(e,n,a,r,u){var f=Du();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&hl(n,null),zu(),Yp(n),e!==null&&Vs(e,n,r,!0),n.childLanes=u,null}function Cl(e,n){return n=Dl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Wm(e,n,a){return rs(n,e.child,null,a),e=Cl(n,n.pendingProps),e.flags|=2,Jn(n),n.memoizedState=null,e}function Hx(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(be){if(r.mode==="hidden")return e=Cl(n,r),n.lanes=536870912,ro(null,e);if(Iu(n),(e=qe)?(e=a_(e,fi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,qe=null)):e=null,e===null)throw pa(n);return n.lanes=536870912,null}return Cl(n,r)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Iu(n),u)if(n.flags&256)n.flags&=-257,n=Wm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(cn||Vs(e,n,a,!1),u=(a&e.childLanes)!==0,cn||u){if(r=je,r!==null&&(x=Rs(r,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,Ja(e,x),Vn(r,e,x),rf;Fl(),n=Wm(e,n,a)}else e=f.treeContext,qe=di(x.nextSibling),Tn=n,be=!0,da=null,fi=!1,e!==null&&Lp(n,e),n=Cl(n,r),n.flags|=4096;return n}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function wl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,r,u){return ns(n),a=Hu(e,n,a,r,void 0,u),r=Gu(),e!==null&&!cn?(Vu(e,n,u),qi(e,n,u)):(be&&r&&Su(n),n.flags|=1,An(e,n,a,u),n.child)}function qm(e,n,a,r,u,f){return ns(n),n.updateQueue=null,a=Kp(n,r,a,u),Zp(e),r=Gu(),e!==null&&!cn?(Vu(e,n,f),qi(e,n,f)):(be&&r&&Su(n),n.flags|=1,An(e,n,a,f),n.child)}function Ym(e,n,a,r,u){if(ns(n),n.stateNode===null){var f=Is,x=a.contextType;typeof x=="object"&&x!==null&&(f=bn(x)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=af,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Lu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?bn(x):Is,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(nf(n,a,x,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&af.enqueueReplaceState(f,f.state,null),eo(n,r,f,u),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var b=n.memoizedProps,B=ls(a,b);f.props=B;var tt=f.context,ft=a.contextType;x=Is,typeof ft=="object"&&ft!==null&&(x=bn(ft));var gt=a.getDerivedStateFromProps;ft=typeof gt=="function"||typeof f.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(b||tt!==x)&&Om(n,f,r,x),ga=!1;var it=n.memoizedState;f.state=it,eo(n,r,f,u),to(),tt=n.memoizedState,b||it!==tt||ga?(typeof gt=="function"&&(nf(n,a,gt,r),tt=n.memoizedState),(B=ga||Nm(n,a,B,r,it,tt,x))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=tt),f.props=r,f.state=tt,f.context=x,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Nu(e,n),x=n.memoizedProps,ft=ls(a,x),f.props=ft,gt=n.pendingProps,it=f.context,tt=a.contextType,B=Is,typeof tt=="object"&&tt!==null&&(B=bn(tt)),b=a.getDerivedStateFromProps,(tt=typeof b=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==gt||it!==B)&&Om(n,f,r,B),ga=!1,it=n.memoizedState,f.state=it,eo(n,r,f,u),to();var lt=n.memoizedState;x!==gt||it!==lt||ga||e!==null&&e.dependencies!==null&&ul(e.dependencies)?(typeof b=="function"&&(nf(n,a,b,r),lt=n.memoizedState),(ft=ga||Nm(n,a,ft,r,it,lt,B)||e!==null&&e.dependencies!==null&&ul(e.dependencies))?(tt||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,lt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,lt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),f.props=r,f.state=lt,f.context=B,r=ft):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&it===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,wl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=rs(n,e.child,null,u),n.child=rs(n,null,a,u)):An(e,n,a,u),n.memoizedState=f.state,e=n.child):e=qi(e,n,u),e}function Zm(e,n,a,r){return ts(),n.flags|=256,An(e,n,a,r),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:Ip()}}function uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ti),e}function Km(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(u?xa(n):ya(),(e=qe)?(e=a_(e,fi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ha!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=wp(e),a.return=n,n.child=a,Tn=n,qe=null)):e=null,e===null)throw pa(n);return Wf(e)?n.lanes=32:n.lanes=536870912,null}var b=r.children;return r=r.fallback,u?(ya(),u=n.mode,b=Dl({mode:"hidden",children:b},u),r=$a(r,u,a,null),b.return=n,r.return=n,b.sibling=r,n.child=b,r=n.child,r.memoizedState=cf(a),r.childLanes=uf(e,x,a),n.memoizedState=lf,ro(null,r)):(xa(n),ff(n,b))}var B=e.memoizedState;if(B!==null&&(b=B.dehydrated,b!==null)){if(f)n.flags&256?(xa(n),n.flags&=-257,n=hf(e,n,a)):n.memoizedState!==null?(ya(),n.child=e.child,n.flags|=128,n=null):(ya(),b=r.fallback,u=n.mode,r=Dl({mode:"visible",children:r.children},u),b=$a(b,u,a,null),b.flags|=2,r.return=n,b.return=n,r.sibling=b,n.child=r,rs(n,e.child,null,a),r=n.child,r.memoizedState=cf(a),r.childLanes=uf(e,x,a),n.memoizedState=lf,n=ro(null,r));else if(xa(n),Wf(b)){if(x=b.nextSibling&&b.nextSibling.dataset,x)var tt=x.dgst;x=tt,r=Error(s(419)),r.stack="",r.digest=x,Yr({value:r,source:null,stack:null}),n=hf(e,n,a)}else if(cn||Vs(e,n,a,!1),x=(a&e.childLanes)!==0,cn||x){if(x=je,x!==null&&(r=Rs(x,a),r!==0&&r!==B.retryLane))throw B.retryLane=r,Ja(e,r),Vn(x,e,r),rf;jf(b)||Fl(),n=hf(e,n,a)}else jf(b)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,qe=di(b.nextSibling),Tn=n,be=!0,da=null,fi=!1,e!==null&&Lp(n,e),n=ff(n,r.children),n.flags|=4096);return n}return u?(ya(),b=r.fallback,u=n.mode,B=e.child,tt=B.sibling,r=Gi(B,{mode:"hidden",children:r.children}),r.subtreeFlags=B.subtreeFlags&65011712,tt!==null?b=Gi(tt,b):(b=$a(b,u,a,null),b.flags|=2),b.return=n,r.return=n,r.sibling=b,n.child=r,ro(null,r),r=n.child,b=e.child.memoizedState,b===null?b=cf(a):(u=b.cachePool,u!==null?(B=on._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Ip(),b={baseLanes:b.baseLanes|a,cachePool:u}),r.memoizedState=b,r.childLanes=uf(e,x,a),n.memoizedState=lf,ro(e.child,r)):(xa(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function ff(e,n){return n=Dl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Dl(e,n){return e=Kn(22,e,null,n),e.lanes=0,e}function hf(e,n,a){return rs(n,e.child,null,a),e=ff(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Qm(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),Au(e.return,n,a)}function df(e,n,a,r,u,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=r,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function Jm(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var x=an.current,b=(x&2)!==0;if(b?(x=x&1|2,n.flags|=128):x&=1,Mt(an,x),An(e,n,r,a),r=be?qr:0,!b&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Qm(e,a,n);else if(e.tag===19)Qm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&vl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),df(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&vl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}df(n,!0,a,null,f,r);break;case"together":df(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function qi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ea|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ul(e)))}function Gx(e,n,a){switch(n.tag){case 3:vt(n,n.stateNode.containerInfo),ma(n,on,e.memoizedState.cache),ts();break;case 27:case 5:It(n);break;case 4:vt(n,n.stateNode.containerInfo);break;case 10:ma(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Iu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(xa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Km(e,n,a):(xa(n),e=qi(e,n,a),e!==null?e.sibling:null);xa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Jm(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Mt(an,an.current),r)break;return null;case 22:return n.lanes=0,Xm(e,n,a,n.pendingProps);case 24:ma(n,on,e.memoizedState.cache)}return qi(e,n,a)}function $m(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!pf(e,a)&&(n.flags&128)===0)return cn=!1,Gx(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,be&&(n.flags&1048576)!==0&&Up(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=as(n.elementType),n.type=e,typeof e=="function")vu(e)?(r=ls(e,r),n.tag=1,n=Ym(null,n,e,r,a)):(n.tag=0,n=of(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===D){n.tag=11,n=Gm(null,n,e,r,a);break t}else if(u===P){n.tag=14,n=Vm(null,n,e,r,a);break t}}throw n=ct(e)||e,Error(s(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ls(r,n.pendingProps),Ym(e,n,r,u,a);case 3:t:{if(vt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Nu(e,n),eo(n,r,null,a);var x=n.memoizedState;if(r=x.cache,ma(n,on,r),r!==f.cache&&Ru(n,[on],a,!0),to(),r=x.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zm(e,n,r,a);break t}else if(r!==u){u=li(Error(s(424)),n),Yr(u),n=Zm(e,n,r,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,qe=di(e.firstChild),Tn=n,be=!0,da=null,fi=!0,a=Xp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ts(),r===u){n=qi(e,n,a);break t}An(e,n,r,a)}n=n.child}return n;case 26:return wl(e,n),e===null?(a=u_(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,r=Wl(xt.current).createElement(a),r[rn]=n,r[Mn]=e,Rn(r,a,e),St(r),n.stateNode=r):n.memoizedState=u_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return It(n),e===null&&be&&(r=n.stateNode=o_(n.type,n.pendingProps,xt.current),Tn=n,fi=!0,u=qe,Ca(n.type)?(qf=u,qe=di(r.firstChild)):qe=u),An(e,n,n.pendingProps.children,a),wl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&be&&((u=r=qe)&&(r=_y(r,n.type,n.pendingProps,fi),r!==null?(n.stateNode=r,Tn=n,qe=di(r.firstChild),fi=!1,u=!0):u=!1),u||pa(n)),It(n),u=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,r=f.children,Vf(u,f)?r=null:x!==null&&Vf(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=Hu(e,n,Lx,null,null,a),Mo._currentValue=u),wl(e,n),An(e,n,r,a),n.child;case 6:return e===null&&be&&((e=a=qe)&&(a=vy(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,qe=null,e=!0):e=!1),e||pa(n)),null;case 13:return Km(e,n,a);case 4:return vt(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=rs(n,null,r,a):An(e,n,r,a),n.child;case 11:return Gm(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ma(n,n.type,r.value),An(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ns(n),u=bn(u),r=r(u),n.flags|=1,An(e,n,r,a),n.child;case 14:return Vm(e,n,n.type,n.pendingProps,a);case 15:return km(e,n,n.type,n.pendingProps,a);case 19:return Jm(e,n,a);case 31:return Hx(e,n,a);case 22:return Xm(e,n,a,n.pendingProps);case 24:return ns(n),r=bn(on),e===null?(u=Du(),u===null&&(u=je,f=Cu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Lu(n),ma(n,on,u)):((e.lanes&a)!==0&&(Nu(e,n),eo(n,null,null,a),to()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ma(n,on,r)):(r=f.cache,ma(n,on,r),r!==u.cache&&Ru(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function mf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Ag())e.flags|=8192;else throw ss=pl,Uu}else e.flags&=-16777217}function tg(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!m_(n))if(Ag())e.flags|=8192;else throw ss=pl,Uu}function Ul(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Oe():536870912,e.lanes|=n,tr|=n)}function oo(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Vx(e,n,a){var r=n.pendingProps;switch(Mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(n),null;case 1:return Ye(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(on),At(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Gs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tu())),Ye(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Ye(n),tg(n,f)):(Ye(n),mf(n,u,null,r,a))):f?f!==e.memoizedState?(Yi(n),Ye(n),tg(n,f)):(Ye(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Yi(n),Ye(n),mf(n,u,e,r,a)),null;case 27:if(ee(n),a=xt.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}e=wt.current,Gs(n)?Np(n):(e=o_(u,r,a),n.stateNode=e,Yi(n))}return Ye(n),null;case 5:if(ee(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ye(n),null}if(f=wt.current,Gs(n))Np(n);else{var x=Wl(xt.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?x.createElement("select",{is:r.is}):x.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?x.createElement(u,{is:r.is}):x.createElement(u)}}f[rn]=n,f[Mn]=r;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Rn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Yi(n)}}return Ye(n),mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=xt.current,Gs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Kg(e.nodeValue,a)),e||pa(n,!0)}else e=Wl(e).createTextNode(r),e[rn]=n,n.stateNode=e}return Ye(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Gs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),e=!1}else a=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ye(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Gs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[rn]=n}else ts(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ye(n),u=!1}else u=Tu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ul(n,n.updateQueue),Ye(n),null);case 4:return At(),e===null&&Bf(n.stateNode.containerInfo),Ye(n),null;case 10:return Xi(n.type),Ye(n),null;case 19:if(nt(an),r=n.memoizedState,r===null)return Ye(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)oo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=vl(e),f!==null){for(n.flags|=128,oo(r,!1),e=f.updateQueue,n.updateQueue=e,Ul(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Cp(a,e),a=a.sibling;return Mt(an,an.current&1|2),be&&Vi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&E()>zl&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304)}else{if(!u)if(e=vl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Ul(n,e),oo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!be)return Ye(n),null}else 2*E()-r.renderingStartTime>zl&&a!==536870912&&(n.flags|=128,u=!0,oo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=E(),e.sibling=null,a=an.current,Mt(an,u?a&1|2:a&1),be&&Vi(n,r.treeForkCount),e):(Ye(n),null);case 22:case 23:return Jn(n),Bu(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ye(n),n.subtreeFlags&6&&(n.flags|=8192)):Ye(n),a=n.updateQueue,a!==null&&Ul(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&nt(is),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(on),Ye(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function kx(e,n){switch(Mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(on),At(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ee(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));ts()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return nt(an),null;case 4:return At(),null;case 10:return Xi(n.type),null;case 22:case 23:return Jn(n),Bu(),e!==null&&nt(is),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(on),null;case 25:return null;default:return null}}function eg(e,n){switch(Mu(n),n.tag){case 3:Xi(on),At();break;case 26:case 27:case 5:ee(n);break;case 4:At();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:nt(an);break;case 10:Xi(n.type);break;case 22:case 23:Jn(n),Bu(),e!==null&&nt(is);break;case 24:Xi(on)}}function lo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,x=a.inst;r=f(),x.destroy=r}a=a.next}while(a!==u)}}catch(b){ze(n,n.return,b)}}function Sa(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var x=r.inst,b=x.destroy;if(b!==void 0){x.destroy=void 0,u=n;var B=a,tt=b;try{tt()}catch(ft){ze(u,B,ft)}}}r=r.next}while(r!==f)}}catch(ft){ze(n,n.return,ft)}}function ng(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Wp(n,a)}catch(r){ze(e,e.return,r)}}}function ig(e,n,a){a.props=ls(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){ze(e,n,r)}}function co(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){ze(e,n,u)}}function Ui(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ze(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ze(e,n,u)}else a.current=null}function ag(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ze(e,e.return,u)}}function gf(e,n,a){try{var r=e.stateNode;fy(r,e.type,a,n),r[Mn]=n}catch(u){ze(e,e.return,u)}}function sg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ca(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||sg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ca(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Fi));else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(vf(e,n,a),e=e.sibling;e!==null;)vf(e,n,a),e=e.sibling}function Ll(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Ca(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Ll(e,n,a),e=e.sibling;e!==null;)Ll(e,n,a),e=e.sibling}function rg(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,r,a),n[rn]=e,n[Mn]=a}catch(f){ze(e,e.return,f)}}var Zi=!1,un=!1,xf=!1,og=typeof WeakSet=="function"?WeakSet:Set,xn=null;function Xx(e,n){if(e=e.containerInfo,Hf=$l,e=xp(e),fu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,b=-1,B=-1,tt=0,ft=0,gt=e,it=null;e:for(;;){for(var lt;gt!==a||u!==0&&gt.nodeType!==3||(b=x+u),gt!==f||r!==0&&gt.nodeType!==3||(B=x+r),gt.nodeType===3&&(x+=gt.nodeValue.length),(lt=gt.firstChild)!==null;)it=gt,gt=lt;for(;;){if(gt===e)break e;if(it===a&&++tt===u&&(b=x),it===f&&++ft===r&&(B=x),(lt=gt.nextSibling)!==null)break;gt=it,it=gt.parentNode}gt=lt}a=b===-1||B===-1?null:{start:b,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Gf={focusedElem:e,selectionRange:a},$l=!1,xn=n;xn!==null;)if(n=xn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,xn=e;else for(;xn!==null;){switch(n=xn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var kt=ls(a.type,u);e=r.getSnapshotBeforeUpdate(kt,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(ne){ze(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Xf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,xn=e;break}xn=n.return}}function lg(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),r&4&&lo(5,a);break;case 1:if(Qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){ze(a,a.return,x)}else{var u=ls(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){ze(a,a.return,x)}}r&64&&ng(a),r&512&&co(a,a.return);break;case 3:if(Qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Wp(e,n)}catch(x){ze(a,a.return,x)}}break;case 27:n===null&&r&4&&rg(a);case 26:case 5:Qi(e,a),n===null&&r&4&&ag(a),r&512&&co(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),r&4&&fg(e,a);break;case 13:Qi(e,a),r&4&&hg(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=$x.bind(null,a),xy(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||un,u=Zi;var f=un;Zi=r,(un=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=u,un=f}break;case 30:break;default:Qi(e,a)}}function cg(e){var n=e.alternate;n!==null&&(e.alternate=null,cg(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&R(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,In=!1;function Ki(e,n,a){for(a=a.child;a!==null;)ug(e,n,a),a=a.sibling}function ug(e,n,a){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Rt,a)}catch{}switch(a.tag){case 26:un||Ui(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ui(a,n);var r=Ke,u=In;Ca(a.type)&&(Ke=a.stateNode,In=!1),Ki(e,n,a),xo(a.stateNode),Ke=r,In=u;break;case 5:un||Ui(a,n);case 6:if(r=Ke,u=In,Ke=null,Ki(e,n,a),Ke=r,In=u,Ke!==null)if(In)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){ze(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){ze(a,n,f)}break;case 18:Ke!==null&&(In?(e=Ke,n_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),lr(e)):n_(Ke,a.stateNode));break;case 4:r=Ke,u=In,Ke=a.stateNode.containerInfo,In=!0,Ki(e,n,a),Ke=r,In=u;break;case 0:case 11:case 14:case 15:Sa(2,a,n),un||Sa(4,a,n),Ki(e,n,a);break;case 1:un||(Ui(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&ig(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:un=(r=un)||a.memoizedState!==null,Ki(e,n,a),un=r;break;default:Ki(e,n,a)}}function fg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{lr(e)}catch(a){ze(n,n.return,a)}}}function hg(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{lr(e)}catch(a){ze(n,n.return,a)}}function jx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new og),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new og),n;default:throw Error(s(435,e.tag))}}function Nl(e,n){var a=jx(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=ty.bind(null,e,r);r.then(u,u)}})}function Fn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,x=n,b=x;t:for(;b!==null;){switch(b.tag){case 27:if(Ca(b.type)){Ke=b.stateNode,In=!1;break t}break;case 5:Ke=b.stateNode,In=!1;break t;case 3:case 4:Ke=b.stateNode.containerInfo,In=!0;break t}b=b.return}if(Ke===null)throw Error(s(160));ug(f,x,u),Ke=null,In=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)dg(n,e),n=n.sibling}var vi=null;function dg(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Fn(n,e),Hn(e),r&4&&(Sa(3,e,e.return),lo(3,e),Sa(5,e,e.return));break;case 1:Fn(n,e),Hn(e),r&512&&(un||a===null||Ui(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=vi;if(Fn(n,e),Hn(e),r&512&&(un||a===null||Ui(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){t:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;e:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Rn(f,r,a),f[rn]=e,St(f),r=f;break t;case"link":var x=d_("link","href",u).get(r+(a.href||""));if(x){for(var b=0;b<x.length;b++)if(f=x[b],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(b,1);break e}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;case"meta":if(x=d_("meta","content",u).get(r+(a.content||""))){for(b=0;b<x.length;b++)if(f=x[b],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(b,1);break e}}f=u.createElement(r),Rn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[rn]=e,St(f),r=f}e.stateNode=r}else p_(u,e.type,e.stateNode);else e.stateNode=h_(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?p_(u,e.type,e.stateNode):h_(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Fn(n,e),Hn(e),r&512&&(un||a===null||Ui(a,a.return)),a!==null&&r&4&&gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Fn(n,e),Hn(e),r&512&&(un||a===null||Ui(a,a.return)),e.flags&32){u=e.stateNode;try{Us(u,"")}catch(kt){ze(e,e.return,kt)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,gf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(xf=!0);break;case 6:if(Fn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(kt){ze(e,e.return,kt)}}break;case 3:if(Zl=null,u=vi,vi=ql(n.containerInfo),Fn(n,e),vi=u,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{lr(n.containerInfo)}catch(kt){ze(e,e.return,kt)}xf&&(xf=!1,pg(e));break;case 4:r=vi,vi=ql(e.stateNode.containerInfo),Fn(n,e),Hn(e),vi=r;break;case 12:Fn(n,e),Hn(e);break;case 31:Fn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 13:Fn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Pl=E()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 22:u=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=Zi,ft=un;if(Zi=tt||u,un=ft||B,Fn(n,e),un=ft,Zi=tt,Hn(e),r&8192)t:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Zi||un||cs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{b=B.stateNode;var gt=B.memoizedProps.style,it=gt!=null&&gt.hasOwnProperty("display")?gt.display:null;b.style.display=it==null||typeof it=="boolean"?"":(""+it).trim()}}catch(kt){ze(B,B.return,kt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(kt){ze(B,B.return,kt)}}}else if(n.tag===18){if(a===null){B=n;try{var lt=B.stateNode;u?i_(lt,!0):i_(B.stateNode,!1)}catch(kt){ze(B,B.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Nl(e,a))));break;case 19:Fn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 30:break;case 21:break;default:Fn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(sg(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=_f(e);Ll(e,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(Us(x,""),a.flags&=-33);var b=_f(e);Ll(e,b,x);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=_f(e);vf(e,tt,B);break;default:throw Error(s(161))}}catch(ft){ze(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function pg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;pg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)lg(e,n.alternate,n),n=n.sibling}function cs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Sa(4,n,n.return),cs(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ig(n,n.return,a),cs(n);break;case 27:xo(n.stateNode);case 26:case 5:Ui(n,n.return),cs(n);break;case 22:n.memoizedState===null&&cs(n);break;case 30:cs(n);break;default:cs(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),lo(4,f);break;case 1:if(Ji(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(tt){ze(r,r.return,tt)}if(r=f,u=r.updateQueue,u!==null){var b=r.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)jp(B[u],b)}catch(tt){ze(r,r.return,tt)}}a&&x&64&&ng(f),co(f,f.return);break;case 27:rg(f);case 26:case 5:Ji(u,f,a),a&&r===null&&x&4&&ag(f),co(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&x&4&&fg(u,f);break;case 13:Ji(u,f,a),a&&x&4&&hg(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),co(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zr(a))}function Sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e))}function xi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)mg(e,n,a,r),n=n.sibling}function mg(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,r),u&2048&&lo(9,n);break;case 1:xi(e,n,a,r);break;case 3:xi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Zr(e)));break;case 12:if(u&2048){xi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,b=f.onPostCommit;typeof b=="function"&&b(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){ze(n,n.return,B)}}else xi(e,n,a,r);break;case 31:xi(e,n,a,r);break;case 13:xi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,r):uo(e,n):f._visibility&2?xi(e,n,a,r):(f._visibility|=2,Qs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&yf(x,n);break;case 24:xi(e,n,a,r),u&2048&&Sf(n.alternate,n);break;default:xi(e,n,a,r)}}function Qs(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,b=a,B=r,tt=x.flags;switch(x.tag){case 0:case 11:case 15:Qs(f,x,b,B,u),lo(8,x);break;case 23:break;case 22:var ft=x.stateNode;x.memoizedState!==null?ft._visibility&2?Qs(f,x,b,B,u):uo(f,x):(ft._visibility|=2,Qs(f,x,b,B,u)),u&&tt&2048&&yf(x.alternate,x);break;case 24:Qs(f,x,b,B,u),u&&tt&2048&&Sf(x.alternate,x);break;default:Qs(f,x,b,B,u)}n=n.sibling}}function uo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:uo(a,r),u&2048&&yf(r.alternate,r);break;case 24:uo(a,r),u&2048&&Sf(r.alternate,r);break;default:uo(a,r)}n=n.sibling}}var fo=8192;function Js(e,n,a){if(e.subtreeFlags&fo)for(e=e.child;e!==null;)gg(e,n,a),e=e.sibling}function gg(e,n,a){switch(e.tag){case 26:Js(e,n,a),e.flags&fo&&e.memoizedState!==null&&Uy(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Js(e,n,a);break;case 3:case 4:var r=vi;vi=ql(e.stateNode.containerInfo),Js(e,n,a),vi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=fo,fo=16777216,Js(e,n,a),fo=r):Js(e,n,a));break;default:Js(e,n,a)}}function _g(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function ho(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,xg(r,e)}_g(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)vg(e),e=e.sibling}function vg(e){switch(e.tag){case 0:case 11:case 15:ho(e),e.flags&2048&&Sa(9,e,e.return);break;case 3:ho(e);break;case 12:ho(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ol(e)):ho(e);break;default:ho(e)}}function Ol(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];xn=r,xg(r,e)}_g(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Sa(8,n,n.return),Ol(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ol(n));break;default:Ol(n)}e=e.sibling}}function xg(e,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:Sa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Zr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,xn=r;else t:for(a=e;xn!==null;){r=xn;var u=r.sibling,f=r.return;if(cg(r),r===a){xn=null;break t}if(u!==null){u.return=f,xn=u;break t}xn=f}}}var Wx={getCacheForType:function(e){var n=bn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return bn(on).controller.signal}},qx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,je=null,ye=null,Ee=0,Pe=0,$n=null,Ma=!1,$s=!1,Mf=!1,$i=0,en=0,Ea=0,us=0,Ef=0,ti=0,tr=0,po=null,Gn=null,Tf=!1,Pl=0,yg=0,zl=1/0,Bl=null,Ta=null,pn=0,ba=null,er=null,ta=0,bf=0,Af=null,Sg=null,mo=0,Rf=null;function ei(){return(Ue&2)!==0&&Ee!==0?Ee&-Ee:O.T!==null?Nf():Wa()}function Mg(){if(ti===0)if((Ee&536870912)===0||be){var e=Lt;Lt<<=1,(Lt&3932160)===0&&(Lt=262144),ti=e}else ti=536870912;return e=Qn.current,e!==null&&(e.flags|=32),ti}function Vn(e,n,a){(e===je&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)&&(nr(e,0),Aa(e,Ee,ti,!1)),Ln(e,a),((Ue&2)===0||e!==je)&&(e===je&&((Ue&2)===0&&(us|=a),en===4&&Aa(e,Ee,ti,!1)),Li(e))}function Eg(e,n,a){if((Ue&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Gt(e,n),u=r?Kx(e,n):wf(e,n,!0),f=r;do{if(u===0){$s&&!r&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Yx(a)){u=wf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var b=e;u=po;var B=b.current.memoizedState.isDehydrated;if(B&&(nr(b,x).flags|=256),x=wf(b,x,!1),x!==2){if(Mf&&!B){b.errorRecoveryDisabledLanes|=f,us|=f,u=4;break t}f=Gn,Gn=u,f!==null&&(Gn===null?Gn=f:Gn.push.apply(Gn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){nr(e,0),Aa(e,n,0,!0);break}t:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Aa(r,n,ti,!Ma);break t;case 2:Gn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Pl+300-E(),10<u)){if(Aa(r,n,ti,!Ma),yt(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=t_(Tg.bind(null,r,a,Gn,Bl,Tf,n,ti,us,tr,Ma,f,"Throttled",-0,0),u);break t}Tg(r,a,Gn,Bl,Tf,n,ti,us,tr,Ma,f,null,-0,0)}}break}while(!0);Li(e)}function Tg(e,n,a,r,u,f,x,b,B,tt,ft,gt,it,lt){if(e.timeoutHandle=-1,gt=n.subtreeFlags,gt&8192||(gt&16785408)===16785408){gt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fi},gg(n,f,gt);var kt=(f&62914560)===f?Pl-E():(f&4194048)===f?yg-E():0;if(kt=Ly(gt,kt),kt!==null){ta=f,e.cancelPendingCommit=kt(Lg.bind(null,e,n,f,a,r,u,x,b,B,ft,gt,null,it,lt)),Aa(e,f,x,!tt);return}}Lg(e,n,f,a,r,u,x,b,B)}function Yx(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,r){n&=~Ef,n&=~us,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Bt(u),x=1<<f;r[f]=-1,u&=~x}a!==0&&Pr(e,a,n)}function Il(){return(Ue&6)===0?(go(0),!1):!0}function Cf(){if(ye!==null){if(Pe===0)var e=ye.return;else e=ye,ki=es=null,ku(e),Ws=null,Qr=0,e=ye;for(;e!==null;)eg(e.alternate,e),e=e.return;ye=null}}function nr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,py(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,Cf(),je=e,ye=a=Gi(e.current,null),Ee=n,Pe=0,$n=null,Ma=!1,$s=Gt(e,n),Mf=!1,tr=ti=Ef=us=Ea=en=0,Gn=po=null,Tf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Bt(r),f=1<<u;n|=e[u],r&=~f}return $i=n,sl(),a}function bg(e,n){fe=null,O.H=so,n===js||n===dl?(n=Gp(),Pe=3):n===Uu?(n=Gp(),Pe=4):Pe=n===rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,ye===null&&(en=1,Rl(e,li(n,e.current)))}function Ag(){var e=Qn.current;return e===null?!0:(Ee&4194048)===Ee?hi===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?e===hi:!1}function Rg(){var e=O.H;return O.H=so,e===null?so:e}function Cg(){var e=O.A;return O.A=Wx,e}function Fl(){en=4,Ma||(Ee&4194048)!==Ee&&Qn.current!==null||($s=!0),(Ea&134217727)===0&&(us&134217727)===0||je===null||Aa(je,Ee,ti,!1)}function wf(e,n,a){var r=Ue;Ue|=2;var u=Rg(),f=Cg();(je!==e||Ee!==n)&&(Bl=null,nr(e,n)),n=!1;var x=en;t:do try{if(Pe!==0&&ye!==null){var b=ye,B=$n;switch(Pe){case 8:Cf(),x=6;break t;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var tt=Pe;if(Pe=0,$n=null,ir(e,b,B,tt),a&&$s){x=0;break t}break;default:tt=Pe,Pe=0,$n=null,ir(e,b,B,tt)}}Zx(),x=en;break}catch(ft){bg(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ki=es=null,Ue=r,O.H=u,O.A=f,ye===null&&(je=null,Ee=0,sl()),x}function Zx(){for(;ye!==null;)wg(ye)}function Kx(e,n){var a=Ue;Ue|=2;var r=Rg(),u=Cg();je!==e||Ee!==n?(Bl=null,zl=E()+500,nr(e,n)):$s=Gt(e,n);t:do try{if(Pe!==0&&ye!==null){n=ye;var f=$n;e:switch(Pe){case 1:Pe=0,$n=null,ir(e,n,f,1);break;case 2:case 9:if(Fp(f)){Pe=0,$n=null,Dg(n);break}n=function(){Pe!==2&&Pe!==9||je!==e||(Pe=7),Li(e)},f.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Fp(f)?(Pe=0,$n=null,Dg(n)):(Pe=0,$n=null,ir(e,n,f,7));break;case 5:var x=null;switch(ye.tag){case 26:x=ye.memoizedState;case 5:case 27:var b=ye;if(x?m_(x):b.stateNode.complete){Pe=0,$n=null;var B=b.sibling;if(B!==null)ye=B;else{var tt=b.return;tt!==null?(ye=tt,Hl(tt)):ye=null}break e}}Pe=0,$n=null,ir(e,n,f,5);break;case 6:Pe=0,$n=null,ir(e,n,f,6);break;case 8:Cf(),en=6;break t;default:throw Error(s(462))}}Qx();break}catch(ft){bg(e,ft)}while(!0);return ki=es=null,O.H=r,O.A=u,Ue=a,ye!==null?0:(je=null,Ee=0,sl(),en)}function Qx(){for(;ye!==null&&!Je();)wg(ye)}function wg(e){var n=$m(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Hl(e):ye=n}function Dg(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=qm(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=qm(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:ku(n);default:eg(a,n),n=ye=Cp(n,$i),n=$m(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Hl(e):ye=n}function ir(e,n,a,r){ki=es=null,ku(n),Ws=null,Qr=0;var u=n.return;try{if(Fx(e,u,n,a,Ee)){en=1,Rl(e,li(a,e.current)),ye=null;return}}catch(f){if(u!==null)throw ye=u,f;en=1,Rl(e,li(a,e.current)),ye=null;return}n.flags&32768?(be||r===1?e=!0:$s||(Ee&536870912)!==0?e=!1:(Ma=e=!0,(r===2||r===9||r===3||r===6)&&(r=Qn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ug(n,e)):Hl(n)}function Hl(e){var n=e;do{if((n.flags&32768)!==0){Ug(n,Ma);return}e=n.return;var a=Vx(n.alternate,n,$i);if(a!==null){ye=a;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);en===0&&(en=5)}function Ug(e,n){do{var a=kx(e.alternate,e);if(a!==null){a.flags&=32767,ye=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=a}while(e!==null);en=6,ye=null}function Lg(e,n,a,r,u,f,x,b,B){e.cancelPendingCommit=null;do Gl();while(pn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=gu,ri(e,a,f,x,b,B),e===je&&(ye=je=null,Ee=0),er=n,ba=e,ta=a,bf=f,Af=u,Sg=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ey(ut,function(){return Bg(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=O.T,O.T=null,u=Z.p,Z.p=2,x=Ue,Ue|=4;try{Xx(e,n,a)}finally{Ue=x,Z.p=u,O.T=r}}pn=1,Ng(),Og(),Pg()}}function Ng(){if(pn===1){pn=0;var e=ba,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var r=Z.p;Z.p=2;var u=Ue;Ue|=4;try{dg(n,e);var f=Gf,x=xp(e.containerInfo),b=f.focusedElem,B=f.selectionRange;if(x!==b&&b&&b.ownerDocument&&vp(b.ownerDocument.documentElement,b)){if(B!==null&&fu(b)){var tt=B.start,ft=B.end;if(ft===void 0&&(ft=tt),"selectionStart"in b)b.selectionStart=tt,b.selectionEnd=Math.min(ft,b.value.length);else{var gt=b.ownerDocument||document,it=gt&&gt.defaultView||window;if(it.getSelection){var lt=it.getSelection(),kt=b.textContent.length,ne=Math.min(B.start,kt),Fe=B.end===void 0?ne:Math.min(B.end,kt);!lt.extend&&ne>Fe&&(x=Fe,Fe=ne,ne=x);var Q=_p(b,ne),k=_p(b,Fe);if(Q&&k&&(lt.rangeCount!==1||lt.anchorNode!==Q.node||lt.anchorOffset!==Q.offset||lt.focusNode!==k.node||lt.focusOffset!==k.offset)){var $=gt.createRange();$.setStart(Q.node,Q.offset),lt.removeAllRanges(),ne>Fe?(lt.addRange($),lt.extend(k.node,k.offset)):($.setEnd(k.node,k.offset),lt.addRange($))}}}}for(gt=[],lt=b;lt=lt.parentNode;)lt.nodeType===1&&gt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<gt.length;b++){var pt=gt[b];pt.element.scrollLeft=pt.left,pt.element.scrollTop=pt.top}}$l=!!Hf,Gf=Hf=null}finally{Ue=u,Z.p=r,O.T=a}}e.current=n,pn=2}}function Og(){if(pn===2){pn=0;var e=ba,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var r=Z.p;Z.p=2;var u=Ue;Ue|=4;try{lg(e,n.alternate,n)}finally{Ue=u,Z.p=r,O.T=a}}pn=3}}function Pg(){if(pn===4||pn===3){pn=0,U();var e=ba,n=er,a=ta,r=Sg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,er=ba=null,zg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ta=null),ws(a),n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Rt,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=O.T,u=Z.p,Z.p=2,O.T=null;try{for(var f=e.onRecoverableError,x=0;x<r.length;x++){var b=r[x];f(b.value,{componentStack:b.stack})}}finally{O.T=n,Z.p=u}}(ta&3)!==0&&Gl(),Li(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===Rf?mo++:(mo=0,Rf=e):mo=0,go(0)}}function zg(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Zr(n)))}function Gl(){return Ng(),Og(),Pg(),Bg()}function Bg(){if(pn!==5)return!1;var e=ba,n=bf;bf=0;var a=ws(ta),r=O.T,u=Z.p;try{Z.p=32>a?32:a,O.T=null,a=Af,Af=null;var f=ba,x=ta;if(pn=0,er=ba=null,ta=0,(Ue&6)!==0)throw Error(s(331));var b=Ue;if(Ue|=4,vg(f.current),mg(f,f.current,x,a),Ue=b,go(0,!1),Ut&&typeof Ut.onPostCommitFiberRoot=="function")try{Ut.onPostCommitFiberRoot(Rt,f)}catch{}return!0}finally{Z.p=u,O.T=r,zg(e,n)}}function Ig(e,n,a){n=li(a,n),n=sf(e.stateNode,n,2),e=va(e,n,2),e!==null&&(Ln(e,2),Li(e))}function ze(e,n,a){if(e.tag===3)Ig(e,e,a);else for(;n!==null;){if(n.tag===3){Ig(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ta===null||!Ta.has(r))){e=li(a,e),a=Fm(2),r=va(n,a,2),r!==null&&(Hm(a,r,n,e),Ln(r,2),Li(r));break}}n=n.return}}function Df(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new qx;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Mf=!0,u.add(a),e=Jx.bind(null,e,n,a),n.then(e,e))}function Jx(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(Ee&a)===a&&(en===4||en===3&&(Ee&62914560)===Ee&&300>E()-Pl?(Ue&2)===0&&nr(e,0):Ef|=a,tr===Ee&&(tr=0)),Li(e)}function Fg(e,n){n===0&&(n=Oe()),e=Ja(e,n),e!==null&&(Ln(e,n),Li(e))}function $x(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Fg(e,a)}function ty(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Fg(e,a)}function ey(e,n){return ce(e,n)}var Vl=null,ar=null,Uf=!1,kl=!1,Lf=!1,Ra=0;function Li(e){e!==ar&&e.next===null&&(ar===null?Vl=ar=e:ar=ar.next=e),kl=!0,Uf||(Uf=!0,iy())}function go(e,n){if(!Lf&&kl){Lf=!0;do for(var a=!1,r=Vl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var x=r.suspendedLanes,b=r.pingedLanes;f=(1<<31-Bt(42|e)+1)-1,f&=u&~(x&~b),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,kg(r,f))}else f=Ee,f=yt(r,r===je?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Gt(r,f)||(a=!0,kg(r,f));r=r.next}while(a);Lf=!1}}function ny(){Hg()}function Hg(){kl=Uf=!1;var e=0;Ra!==0&&dy()&&(e=Ra);for(var n=E(),a=null,r=Vl;r!==null;){var u=r.next,f=Gg(r,n);f===0?(r.next=null,a===null?Vl=u:a.next=u,u===null&&(ar=a)):(a=r,(e!==0||(f&3)!==0)&&(kl=!0)),r=u}pn!==0&&pn!==5||go(e),Ra!==0&&(Ra=0)}function Gg(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Bt(f),b=1<<x,B=u[x];B===-1?((b&a)===0||(b&r)!==0)&&(u[x]=re(b,n)):B<=n&&(e.expiredLanes|=b),f&=~b}if(n=je,a=Ee,a=yt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Pe===2||Pe===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&$e(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Gt(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&$e(r),ws(a)){case 2:case 8:a=Tt;break;case 32:a=ut;break;case 268435456:a=Dt;break;default:a=ut}return r=Vg.bind(null,e),a=ce(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&$e(r),e.callbackPriority=2,e.callbackNode=null,2}function Vg(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Gl()&&e.callbackNode!==a)return null;var r=Ee;return r=yt(e,e===je?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Eg(e,r,n),Gg(e,E()),e.callbackNode!=null&&e.callbackNode===a?Vg.bind(null,e):null)}function kg(e,n){if(Gl())return null;Eg(e,n,!0)}function iy(){my(function(){(Ue&6)!==0?ce(dt,ny):Hg()})}function Nf(){if(Ra===0){var e=ks;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Ra=e}return Ra}function Xg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Qo(""+e)}function jg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ay(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Xg((u[Mn]||null).action),x=r.submitter;x&&(n=(n=x[Mn]||null)?Xg(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var b=new el("action","action",null,r,u);e.push({event:b,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ra!==0){var B=x?jg(u,x):new FormData(u);Ju(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(b.preventDefault(),B=x?jg(u,x):new FormData(u),Ju(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var Of=0;Of<mu.length;Of++){var Pf=mu[Of],sy=Pf.toLowerCase(),ry=Pf[0].toUpperCase()+Pf.slice(1);_i(sy,"on"+ry)}_i(Mp,"onAnimationEnd"),_i(Ep,"onAnimationIteration"),_i(Tp,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(Mx,"onTransitionRun"),_i(Ex,"onTransitionStart"),_i(Tx,"onTransitionCancel"),_i(bp,"onTransitionEnd"),Jt("onMouseEnter",["mouseout","mouseover"]),Jt("onMouseLeave",["mouseout","mouseover"]),Jt("onPointerEnter",["pointerout","pointerover"]),Jt("onPointerLeave",["pointerout","pointerover"]),zt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),zt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),zt("onBeforeInput",["compositionend","keypress","textInput","paste"]),zt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),zt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Wg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var x=r.length-1;0<=x;x--){var b=r[x],B=b.instance,tt=b.currentTarget;if(b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ft){al(ft)}u.currentTarget=null,f=B}else for(x=0;x<r.length;x++){if(b=r[x],B=b.instance,tt=b.currentTarget,b=b.listener,B!==f&&u.isPropagationStopped())break t;f=b,u.currentTarget=tt;try{f(u)}catch(ft){al(ft)}u.currentTarget=null,f=B}}}}function Se(e,n){var a=n[Br];a===void 0&&(a=n[Br]=new Set);var r=e+"__bubble";a.has(r)||(qg(n,e,2,!1),a.add(r))}function zf(e,n,a){var r=0;n&&(r|=4),qg(a,e,r,n)}var Xl="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[Xl]){e[Xl]=!0,Ot.forEach(function(a){a!=="selectionchange"&&(oy.has(a)||zf(a,!1,e),zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Xl]||(n[Xl]=!0,zf("selectionchange",!1,n))}}function qg(e,n,a,r){switch(M_(n)){case 2:var u=Py;break;case 8:u=zy;break;default:u=Jf}a=u.bind(null,n,a,e),u=void 0,!nu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function If(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var x=r.tag;if(x===3||x===4){var b=r.stateNode.containerInfo;if(b===u)break;if(x===4)for(x=r.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;b!==null;){if(x=W(b),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){r=f=x;continue t}b=b.parentNode}}r=r.return}Jd(function(){var tt=f,ft=tu(a),gt=[];t:{var it=Ap.get(e);if(it!==void 0){var lt=el,kt=e;switch(e){case"keypress":if($o(a)===0)break t;case"keydown":case"keyup":lt=tx;break;case"focusin":kt="focus",lt=ru;break;case"focusout":kt="blur",lt=ru;break;case"beforeblur":case"afterblur":lt=ru;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=ep;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=Vv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=ix;break;case Mp:case Ep:case Tp:lt=jv;break;case bp:lt=sx;break;case"scroll":case"scrollend":lt=Hv;break;case"wheel":lt=ox;break;case"copy":case"cut":case"paste":lt=qv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=ip;break;case"toggle":case"beforetoggle":lt=cx}var ne=(n&4)!==0,Fe=!ne&&(e==="scroll"||e==="scrollend"),Q=ne?it!==null?it+"Capture":null:it;ne=[];for(var k=tt,$;k!==null;){var pt=k;if($=pt.stateNode,pt=pt.tag,pt!==5&&pt!==26&&pt!==27||$===null||Q===null||(pt=Ir(k,Q),pt!=null&&ne.push(vo(k,pt,$))),Fe)break;k=k.return}0<ne.length&&(it=new lt(it,kt,null,a,ft),gt.push({event:it,listeners:ne}))}}if((n&7)===0){t:{if(it=e==="mouseover"||e==="pointerover",lt=e==="mouseout"||e==="pointerout",it&&a!==$c&&(kt=a.relatedTarget||a.fromElement)&&(W(kt)||kt[ua]))break t;if((lt||it)&&(it=ft.window===ft?ft:(it=ft.ownerDocument)?it.defaultView||it.parentWindow:window,lt?(kt=a.relatedTarget||a.toElement,lt=tt,kt=kt?W(kt):null,kt!==null&&(Fe=c(kt),ne=kt.tag,kt!==Fe||ne!==5&&ne!==27&&ne!==6)&&(kt=null)):(lt=null,kt=tt),lt!==kt)){if(ne=ep,pt="onMouseLeave",Q="onMouseEnter",k="mouse",(e==="pointerout"||e==="pointerover")&&(ne=ip,pt="onPointerLeave",Q="onPointerEnter",k="pointer"),Fe=lt==null?it:rt(lt),$=kt==null?it:rt(kt),it=new ne(pt,k+"leave",lt,a,ft),it.target=Fe,it.relatedTarget=$,pt=null,W(ft)===tt&&(ne=new ne(Q,k+"enter",kt,a,ft),ne.target=$,ne.relatedTarget=Fe,pt=ne),Fe=pt,lt&&kt)e:{for(ne=ly,Q=lt,k=kt,$=0,pt=Q;pt;pt=ne(pt))$++;pt=0;for(var te=k;te;te=ne(te))pt++;for(;0<$-pt;)Q=ne(Q),$--;for(;0<pt-$;)k=ne(k),pt--;for(;$--;){if(Q===k||k!==null&&Q===k.alternate){ne=Q;break e}Q=ne(Q),k=ne(k)}ne=null}else ne=null;lt!==null&&Yg(gt,it,lt,ne,!1),kt!==null&&Fe!==null&&Yg(gt,Fe,kt,ne,!0)}}t:{if(it=tt?rt(tt):window,lt=it.nodeName&&it.nodeName.toLowerCase(),lt==="select"||lt==="input"&&it.type==="file")var Ce=fp;else if(cp(it))if(hp)Ce=xx;else{Ce=_x;var Wt=gx}else lt=it.nodeName,!lt||lt.toLowerCase()!=="input"||it.type!=="checkbox"&&it.type!=="radio"?tt&&Jc(tt.elementType)&&(Ce=fp):Ce=vx;if(Ce&&(Ce=Ce(e,tt))){up(gt,Ce,a,ft);break t}Wt&&Wt(e,it,tt),e==="focusout"&&tt&&it.type==="number"&&tt.memoizedProps.value!=null&&dn(it,"number",it.value)}switch(Wt=tt?rt(tt):window,e){case"focusin":(cp(Wt)||Wt.contentEditable==="true")&&(Ps=Wt,hu=tt,Wr=null);break;case"focusout":Wr=hu=Ps=null;break;case"mousedown":du=!0;break;case"contextmenu":case"mouseup":case"dragend":du=!1,yp(gt,a,ft);break;case"selectionchange":if(Sx)break;case"keydown":case"keyup":yp(gt,a,ft)}var de;if(lu)t:{switch(e){case"compositionstart":var Te="onCompositionStart";break t;case"compositionend":Te="onCompositionEnd";break t;case"compositionupdate":Te="onCompositionUpdate";break t}Te=void 0}else Os?op(e,a)&&(Te="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Te="onCompositionStart");Te&&(ap&&a.locale!=="ko"&&(Os||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Os&&(de=$d()):(fa=ft,iu="value"in fa?fa.value:fa.textContent,Os=!0)),Wt=jl(tt,Te),0<Wt.length&&(Te=new np(Te,e,null,a,ft),gt.push({event:Te,listeners:Wt}),de?Te.data=de:(de=lp(a),de!==null&&(Te.data=de)))),(de=fx?hx(e,a):dx(e,a))&&(Te=jl(tt,"onBeforeInput"),0<Te.length&&(Wt=new np("onBeforeInput","beforeinput",null,a,ft),gt.push({event:Wt,listeners:Te}),Wt.data=de)),ay(gt,e,tt,a,ft)}Wg(gt,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function jl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(e,a),u!=null&&r.unshift(vo(e,u,f)),u=Ir(e,n),u!=null&&r.push(vo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function ly(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Yg(e,n,a,r,u){for(var f=n._reactName,x=[];a!==null&&a!==r;){var b=a,B=b.alternate,tt=b.stateNode;if(b=b.tag,B!==null&&B===r)break;b!==5&&b!==26&&b!==27||tt===null||(B=tt,u?(tt=Ir(a,f),tt!=null&&x.unshift(vo(a,tt,B))):u||(tt=Ir(a,f),tt!=null&&x.push(vo(a,tt,B)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var cy=/\r\n?/g,uy=/\u0000|\uFFFD/g;function Zg(e){return(typeof e=="string"?e:""+e).replace(cy,`
`).replace(uy,"")}function Kg(e,n){return n=Zg(n),Zg(e)===n}function Ie(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Us(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Us(e,""+r);break;case"className":Ne(e,"class",r);break;case"tabIndex":Ne(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ne(e,a,r);break;case"style":Kd(e,r,f);break;case"data":if(n!=="object"){Ne(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Qo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(e,n,"name",u.name,u,null),Ie(e,n,"formEncType",u.formEncType,u,null),Ie(e,n,"formMethod",u.formMethod,u,null),Ie(e,n,"formTarget",u.formTarget,u,null)):(Ie(e,n,"encType",u.encType,u,null),Ie(e,n,"method",u.method,u,null),Ie(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Qo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Qo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Se("beforetoggle",e),Se("toggle",e),Xe(e,"popover",r);break;case"xlinkActuate":xe(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":xe(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":xe(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":xe(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":xe(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":xe(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":xe(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":xe(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":xe(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Xe(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iv.get(a)||a,Xe(e,a,r))}}function Ff(e,n,a,r,u,f){switch(a){case"style":Kd(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Us(e,r):(typeof r=="number"||typeof r=="bigint")&&Us(e,""+r);break;case"onScroll":r!=null&&Se("scroll",e);break;case"onScrollEnd":r!=null&&Se("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Fi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break t}a in e?e[a]=r:r===!0?e.setAttribute(a,""):Xe(e,a,r)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Se("error",e),Se("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,f,x,a,null)}}u&&Ie(e,n,"srcSet",a.srcSet,a,null),r&&Ie(e,n,"src",a.src,a,null);return;case"input":Se("invalid",e);var b=f=x=u=null,B=null,tt=null;for(r in a)if(a.hasOwnProperty(r)){var ft=a[r];if(ft!=null)switch(r){case"name":u=ft;break;case"type":x=ft;break;case"checked":B=ft;break;case"defaultChecked":tt=ft;break;case"value":f=ft;break;case"defaultValue":b=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ie(e,n,r,ft,a,null)}}Nn(e,f,b,B,tt,x,u,!1);return;case"select":Se("invalid",e),r=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":f=b;break;case"defaultValue":x=b;break;case"multiple":r=b;default:Ie(e,n,u,b,a,null)}n=f,a=x,e.multiple=!!r,n!=null?nn(e,!!r,n,!1):a!=null&&nn(e,!!r,a,!0);return;case"textarea":Se("invalid",e),f=u=r=null;for(x in a)if(a.hasOwnProperty(x)&&(b=a[x],b!=null))switch(x){case"value":r=b;break;case"defaultValue":u=b;break;case"children":f=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(s(91));break;default:Ie(e,n,x,b,a,null)}Ci(e,r,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(r=a[B],r!=null)&&(B==="selected"?e.selected=r&&typeof r!="function"&&typeof r!="symbol":Ie(e,n,B,r,a,null));return;case"dialog":Se("beforetoggle",e),Se("toggle",e),Se("cancel",e),Se("close",e);break;case"iframe":case"object":Se("load",e);break;case"video":case"audio":for(r=0;r<_o.length;r++)Se(_o[r],e);break;case"image":Se("error",e),Se("load",e);break;case"details":Se("toggle",e);break;case"embed":case"source":case"link":Se("error",e),Se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(r=a[tt],r!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,tt,r,a,null)}return;default:if(Jc(n)){for(ft in a)a.hasOwnProperty(ft)&&(r=a[ft],r!==void 0&&Ff(e,n,ft,r,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(r=a[b],r!=null&&Ie(e,n,b,r,a,null))}function fy(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,b=null,B=null,tt=null,ft=null;for(lt in a){var gt=a[lt];if(a.hasOwnProperty(lt)&&gt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":B=gt;default:r.hasOwnProperty(lt)||Ie(e,n,lt,null,r,gt)}}for(var it in r){var lt=r[it];if(gt=a[it],r.hasOwnProperty(it)&&(lt!=null||gt!=null))switch(it){case"type":f=lt;break;case"name":u=lt;break;case"checked":tt=lt;break;case"defaultChecked":ft=lt;break;case"value":x=lt;break;case"defaultValue":b=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==gt&&Ie(e,n,it,lt,r,gt)}}Cn(e,x,b,B,tt,ft,f,u);return;case"select":lt=x=b=it=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":lt=B;default:r.hasOwnProperty(f)||Ie(e,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":it=f;break;case"defaultValue":b=f;break;case"multiple":x=f;default:f!==B&&Ie(e,n,u,f,r,B)}n=b,a=x,r=lt,it!=null?nn(e,!!a,it,!1):!!r!=!!a&&(n!=null?nn(e,!!a,n,!0):nn(e,!!a,a?[]:"",!1));return;case"textarea":lt=it=null;for(b in a)if(u=a[b],a.hasOwnProperty(b)&&u!=null&&!r.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:Ie(e,n,b,null,r,u)}for(x in r)if(u=r[x],f=a[x],r.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":it=u;break;case"defaultValue":lt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Ie(e,n,x,u,r,f)}Ds(e,it,lt);return;case"option":for(var kt in a)it=a[kt],a.hasOwnProperty(kt)&&it!=null&&!r.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Ie(e,n,kt,null,r,it));for(B in r)it=r[B],lt=a[B],r.hasOwnProperty(B)&&it!==lt&&(it!=null||lt!=null)&&(B==="selected"?e.selected=it&&typeof it!="function"&&typeof it!="symbol":Ie(e,n,B,it,r,lt));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)it=a[ne],a.hasOwnProperty(ne)&&it!=null&&!r.hasOwnProperty(ne)&&Ie(e,n,ne,null,r,it);for(tt in r)if(it=r[tt],lt=a[tt],r.hasOwnProperty(tt)&&it!==lt&&(it!=null||lt!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ie(e,n,tt,it,r,lt)}return;default:if(Jc(n)){for(var Fe in a)it=a[Fe],a.hasOwnProperty(Fe)&&it!==void 0&&!r.hasOwnProperty(Fe)&&Ff(e,n,Fe,void 0,r,it);for(ft in r)it=r[ft],lt=a[ft],!r.hasOwnProperty(ft)||it===lt||it===void 0&&lt===void 0||Ff(e,n,ft,it,r,lt);return}}for(var Q in a)it=a[Q],a.hasOwnProperty(Q)&&it!=null&&!r.hasOwnProperty(Q)&&Ie(e,n,Q,null,r,it);for(gt in r)it=r[gt],lt=a[gt],!r.hasOwnProperty(gt)||it===lt||it==null&&lt==null||Ie(e,n,gt,it,r,lt)}function Qg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function hy(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,x=u.initiatorType,b=u.duration;if(f&&b&&Qg(x)){for(x=0,b=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],tt=B.startTime;if(tt>b)break;var ft=B.transferSize,gt=B.initiatorType;ft&&Qg(gt)&&(B=B.responseEnd,x+=ft*(B<b?1:(b-tt)/(B-tt)))}if(--r,n+=8*(f+x)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Hf=null,Gf=null;function Wl(e){return e.nodeType===9?e:e.ownerDocument}function Jg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $g(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Vf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var kf=null;function dy(){var e=window.event;return e&&e.type==="popstate"?e===kf?!1:(kf=e,!0):(kf=null,!1)}var t_=typeof setTimeout=="function"?setTimeout:void 0,py=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,my=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(e){return e_.resolve(null).then(e).catch(gy)}:t_;function gy(e){setTimeout(function(){throw e})}function Ca(e){return e==="head"}function n_(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),lr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,b=f.nodeName;f[qa]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&xo(e.ownerDocument.body);a=u}while(a);lr(n)}function i_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function Xf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Xf(a),R(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function _y(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[qa])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function vy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function a_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=di(e.nextSibling),e===null))return null;return e}function jf(e){return e.data==="$?"||e.data==="$~"}function Wf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function xy(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var qf=null;function s_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function r_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function o_(e,n,a){switch(n=Wl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);R(e)}var pi=new Map,l_=new Set;function ql(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ea=Z.d;Z.d={f:yy,r:Sy,D:My,C:Ey,L:Ty,m:by,X:Ry,S:Ay,M:Cy};function yy(){var e=ea.f(),n=Il();return e||n}function Sy(e){var n=at(e);n!==null&&n.tag===5&&n.type==="form"?bm(n):ea.r(e)}var sr=typeof document>"u"?null:document;function c_(e,n,a){var r=sr;if(r&&typeof n=="string"&&n){var u=Me(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),l_.has(u)||(l_.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Rn(n,"link",e),St(n),r.head.appendChild(n)))}}function My(e){ea.D(e),c_("dns-prefetch",e,null)}function Ey(e,n){ea.C(e,n),c_("preconnect",e,n)}function Ty(e,n,a){ea.L(e,n,a);var r=sr;if(r&&e&&n){var u='link[rel="preload"][as="'+Me(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Me(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Me(a.imageSizes)+'"]')):u+='[href="'+Me(e)+'"]';var f=u;switch(n){case"style":f=rr(e);break;case"script":f=or(e)}pi.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),pi.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(yo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),Rn(n,"link",e),St(n),r.head.appendChild(n)))}}function by(e,n){ea.m(e,n);var a=sr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Me(r)+'"][href="'+Me(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=or(e)}if(!pi.has(f)&&(e=_({rel:"modulepreload",href:e},n),pi.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),Rn(r,"link",e),St(r),a.head.appendChild(r)}}}function Ay(e,n,a){ea.S(e,n,a);var r=sr;if(r&&e){var u=K(r).hoistableStyles,f=rr(e);n=n||"default";var x=u.get(f);if(!x){var b={loading:0,preload:null};if(x=r.querySelector(yo(f)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=pi.get(f))&&Yf(e,a);var B=x=r.createElement("link");St(B),Rn(B,"link",e),B._p=new Promise(function(tt,ft){B.onload=tt,B.onerror=ft}),B.addEventListener("load",function(){b.loading|=1}),B.addEventListener("error",function(){b.loading|=2}),b.loading|=4,Yl(x,n,r)}x={type:"stylesheet",instance:x,count:1,state:b},u.set(f,x)}}}function Ry(e,n){ea.X(e,n);var a=sr;if(a&&e){var r=K(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(So(u)),f||(e=_({src:e,async:!0},n),(n=pi.get(u))&&Zf(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Cy(e,n){ea.M(e,n);var a=sr;if(a&&e){var r=K(a).hoistableScripts,u=or(e),f=r.get(u);f||(f=a.querySelector(So(u)),f||(e=_({src:e,async:!0,type:"module"},n),(n=pi.get(u))&&Zf(e,n),f=a.createElement("script"),St(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function u_(e,n,a,r){var u=(u=xt.current)?ql(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=rr(a.href),a=K(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=rr(a.href);var f=K(u).hoistableStyles,x=f.get(e);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=u.querySelector(yo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),pi.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(e,a),f||wy(u,e,a,x.state))),n&&r===null)throw Error(s(528,""));return x}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=or(a),a=K(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function rr(e){return'href="'+Me(e)+'"'}function yo(e){return'link[rel="stylesheet"]['+e+"]"}function f_(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function wy(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Rn(n,"link",a),St(n),e.head.appendChild(n))}function or(e){return'[src="'+Me(e)+'"]'}function So(e){return"script[async]"+e}function h_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Me(a.href)+'"]');if(r)return n.instance=r,St(r),r;var u=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),St(r),Rn(r,"style",u),Yl(r,a.precedence,e),n.instance=r;case"stylesheet":u=rr(a.href);var f=e.querySelector(yo(u));if(f)return n.state.loading|=4,n.instance=f,St(f),f;r=f_(a),(u=pi.get(u))&&Yf(r,u),f=(e.ownerDocument||e).createElement("link"),St(f);var x=f;return x._p=new Promise(function(b,B){x.onload=b,x.onerror=B}),Rn(f,"link",r),n.state.loading|=4,Yl(f,a.precedence,e),n.instance=f;case"script":return f=or(a.src),(u=e.querySelector(So(f)))?(n.instance=u,St(u),u):(r=a,(u=pi.get(f))&&(r=_({},a),Zf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),St(u),Rn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Yl(r,a.precedence,e));return n.instance}function Yl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,x=0;x<r.length;x++){var b=r[x];if(b.dataset.precedence===n)f=b;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Yf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Zl=null;function d_(e,n,a){if(Zl===null){var r=new Map,u=Zl=new Map;u.set(a,r)}else u=Zl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[qa]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var b=r.get(x);b?b.push(f):r.set(x,[f])}}return r}function p_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Dy(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function m_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Uy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=rr(r.href),f=n.querySelector(yo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Kl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,St(f);return}f=n.ownerDocument||n,r=f_(r),(u=pi.get(u))&&Yf(r,u),f=f.createElement("link"),St(f);var x=f;x._p=new Promise(function(b,B){x.onload=b,x.onerror=B}),Rn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Kl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Kf=0;function Ly(e,n){return e.stylesheets&&e.count===0&&Jl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Kf===0&&(Kf=62500*hy());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Jl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Jl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ql=null;function Jl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ql=new Map,n.forEach(Ny,e),Ql=null,Kl.call(e))}function Ny(e,n){if(!(n.state.loading&4)){var a=Ql.get(e);if(a)var r=a.get(null);else{a=new Map,Ql.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),r=x)}r&&a.set(null,r)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||r,f===r&&a.set(null,u),a.set(x,u),this.count++,r=Kl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:N,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function Oy(e,n,a,r,u,f,x,b,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function g_(e,n,a,r,u,f,x,b,B,tt,ft,gt){return e=new Oy(e,n,a,x,B,tt,ft,gt,b),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),e.current=f,f.stateNode=e,n=Cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Lu(f),e}function __(e){return e?(e=Is,e):Is}function v_(e,n,a,r,u,f){u=__(u),r.context===null?r.context=u:r.pendingContext=u,r=_a(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=va(e,r,n),a!==null&&(Vn(a,e,n),$r(a,e,n))}function x_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Qf(e,n){x_(e,n),(e=e.alternate)&&x_(e,n)}function y_(e){if(e.tag===13||e.tag===31){var n=Ja(e,67108864);n!==null&&Vn(n,e,67108864),Qf(e,67108864)}}function S_(e){if(e.tag===13||e.tag===31){var n=ei();n=Cs(n);var a=Ja(e,n);a!==null&&Vn(a,e,n),Qf(e,n)}}var $l=!0;function Py(e,n,a,r){var u=O.T;O.T=null;var f=Z.p;try{Z.p=2,Jf(e,n,a,r)}finally{Z.p=f,O.T=u}}function zy(e,n,a,r){var u=O.T;O.T=null;var f=Z.p;try{Z.p=8,Jf(e,n,a,r)}finally{Z.p=f,O.T=u}}function Jf(e,n,a,r){if($l){var u=$f(r);if(u===null)If(e,n,r,tc,a),E_(e,r);else if(Iy(u,e,n,a,r))r.stopPropagation();else if(E_(e,r),n&4&&-1<By.indexOf(e)){for(;u!==null;){var f=at(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var b=f;for(b.pendingLanes|=2,b.entangledLanes|=2;x;){var B=1<<31-Bt(x);b.entanglements[1]|=B,x&=~B}Li(f),(Ue&6)===0&&(zl=E()+500,go(0))}}break;case 31:case 13:b=Ja(f,2),b!==null&&Vn(b,f,2),Il(),Qf(f,2)}if(f=$f(r),f===null&&If(e,n,r,tc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else If(e,n,r,null,a)}}function $f(e){return e=tu(e),th(e)}var tc=null;function th(e){if(tc=null,e=W(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return tc=e,null}function M_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(et()){case dt:return 2;case Tt:return 8;case ut:case Kt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var eh=!1,wa=null,Da=null,Ua=null,Eo=new Map,To=new Map,La=[],By="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function E_(e,n){switch(e){case"focusin":case"focusout":wa=null;break;case"dragenter":case"dragleave":Da=null;break;case"mouseover":case"mouseout":Ua=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function bo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=at(n),n!==null&&y_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function Iy(e,n,a,r,u){switch(n){case"focusin":return wa=bo(wa,e,n,a,r,u),!0;case"dragenter":return Da=bo(Da,e,n,a,r,u),!0;case"mouseover":return Ua=bo(Ua,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,bo(Eo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,To.set(f,bo(To.get(f)||null,e,n,a,r,u)),!0}return!1}function T_(e){var n=W(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,zr(e.priority,function(){S_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){S_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ec(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=$f(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);$c=r,a.target.dispatchEvent(r),$c=null}else return n=at(a),n!==null&&y_(n),e.blockedOn=a,!1;n.shift()}return!0}function b_(e,n,a){ec(e)&&a.delete(n)}function Fy(){eh=!1,wa!==null&&ec(wa)&&(wa=null),Da!==null&&ec(Da)&&(Da=null),Ua!==null&&ec(Ua)&&(Ua=null),Eo.forEach(b_),To.forEach(b_)}function nc(e,n){e.blockedOn===n&&(e.blockedOn=null,eh||(eh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fy)))}var ic=null;function A_(e){ic!==e&&(ic=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===e&&(ic=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(th(r||a)===null)continue;break}var f=at(a);f!==null&&(e.splice(n,3),n-=3,Ju(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function lr(e){function n(B){return nc(B,e)}wa!==null&&nc(wa,e),Da!==null&&nc(Da,e),Ua!==null&&nc(Ua,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<La.length;a++){var r=La[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<La.length&&(a=La[0],a.blockedOn===null);)T_(a),a.blockedOn===null&&La.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],x=u[Mn]||null;if(typeof f=="function")x||A_(a);else if(x){var b=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Mn]||null)b=x.formAction;else if(th(u)!==null)continue}else b=x.action;typeof b=="function"?a[r+1]=b:(a.splice(r,3),r-=3),A_(a)}}}function R_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function nh(e){this._internalRoot=e}ac.prototype.render=nh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();v_(a,r,e,n,null,null)},ac.prototype.unmount=nh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;v_(e.current,2,null,e,null,null),Il(),n[ua]=null}};function ac(e){this._internalRoot=e}ac.prototype.unstable_scheduleHydration=function(e){if(e){var n=Wa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<La.length&&n!==0&&n<La[a].priority;a++);La.splice(a,0,e),a===0&&T_(e)}};var C_=t.version;if(C_!=="19.2.6")throw Error(s(527,C_,"19.2.6"));Z.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var Hy={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Rt=sc.inject(Hy),Ut=sc}catch{}}return Ro.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Pm,f=zm,x=Bm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=g_(e,1,!1,null,null,a,r,null,u,f,x,R_),e[ua]=n.current,Bf(e),new nh(n)},Ro.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Pm,x=zm,b=Bm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=g_(e,1,!0,n,a??null,r,u,B,f,x,b,R_),n.context=__(null),a=n.current,r=ei(),r=Cs(r),u=_a(r),u.callback=null,va(a,u,r),a=r,n.current.lanes=a,Ln(n,a),Li(n),e[ua]=n.current,Bf(e),new ac(n)},Ro.version="19.2.6",Ro}var I_;function Jy(){if(I_)return sh.exports;I_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),sh.exports=Qy(),sh.exports}var $y=Jy();const Od="179",br={ROTATE:0,DOLLY:1,PAN:2},Er={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},tS=0,F_=1,eS=2,ev=1,nS=2,oa=3,Xa=0,Wn=1,Ei=2,Va=0,Ar=1,H_=2,G_=3,V_=4,iS=5,vs=100,aS=101,sS=102,rS=103,oS=104,lS=200,cS=201,uS=202,fS=203,Xh=204,jh=205,hS=206,dS=207,pS=208,mS=209,gS=210,_S=211,vS=212,xS=213,yS=214,Wh=0,qh=1,Yh=2,wr=3,Zh=4,Kh=5,Qh=6,Jh=7,nv=0,SS=1,MS=2,ka=0,ES=1,TS=2,bS=3,AS=4,RS=5,CS=6,wS=7,iv=300,Dr=301,Ur=302,$h=303,td=304,Wc=306,ed=1e3,ys=1001,nd=1002,Ai=1003,DS=1004,rc=1005,Oi=1006,ch=1007,Ss=1008,zi=1009,av=1010,sv=1011,Fo=1012,Pd=1013,Ms=1014,la=1015,Xo=1016,zd=1017,Bd=1018,Ho=1020,rv=35902,ov=1021,lv=1022,bi=1023,Go=1026,Vo=1027,cv=1028,Id=1029,uv=1030,Fd=1031,Hd=1033,Lc=33776,Nc=33777,Oc=33778,Pc=33779,id=35840,ad=35841,sd=35842,rd=35843,od=36196,ld=37492,cd=37496,ud=37808,fd=37809,hd=37810,dd=37811,pd=37812,md=37813,gd=37814,_d=37815,vd=37816,xd=37817,yd=37818,Sd=37819,Md=37820,Ed=37821,zc=36492,Td=36494,bd=36495,fv=36283,Ad=36284,Rd=36285,Cd=36286,US=3200,LS=3201,hv=0,NS=1,Ga="",ai="srgb",Lr="srgb-linear",Gc="linear",He="srgb",cr=7680,k_=519,OS=512,PS=513,zS=514,dv=515,BS=516,IS=517,FS=518,HS=519,X_=35044,j_="300 es",Pi=2e3,Vc=2001;class bs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bc=Math.PI/180,wd=180/Math.PI;function jo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]).toLowerCase()}function ve(o,t,i){return Math.max(t,Math.min(i,o))}function GS(o,t){return(o%t+t)%t}function uh(o,t,i){return(1-i)*o+i*t}function Co(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const VS={DEG2RAD:Bc};class se{constructor(t=0,i=0){se.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,h=this.y-t.y;return this.x=c*s-h*l+t.x,this.y=c*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Es{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,h,d){let m=s[l+0],p=s[l+1],g=s[l+2],_=s[l+3];const y=c[h+0],S=c[h+1],T=c[h+2],A=c[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_;return}if(d===1){t[i+0]=y,t[i+1]=S,t[i+2]=T,t[i+3]=A;return}if(_!==A||m!==y||p!==S||g!==T){let M=1-d;const v=m*y+p*S+g*T+_*A,G=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const V=Math.sqrt(N),H=Math.atan2(V,v*G);M=Math.sin(M*H)/V,d=Math.sin(d*H)/V}const D=d*G;if(m=m*M+y*D,p=p*M+S*D,g=g*M+T*D,_=_*M+A*D,M===1-d){const V=1/Math.sqrt(m*m+p*p+g*g+_*_);m*=V,p*=V,g*=V,_*=V}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=_}static multiplyQuaternionsFlat(t,i,s,l,c,h){const d=s[l],m=s[l+1],p=s[l+2],g=s[l+3],_=c[h],y=c[h+1],S=c[h+2],T=c[h+3];return t[i]=d*T+g*_+m*S-p*y,t[i+1]=m*T+g*y+p*_-d*S,t[i+2]=p*T+g*S+d*y-m*_,t[i+3]=g*T-d*_-m*y-p*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(s/2),g=d(l/2),_=d(c/2),y=m(s/2),S=m(l/2),T=m(c/2);switch(h){case"XYZ":this._x=y*g*_+p*S*T,this._y=p*S*_-y*g*T,this._z=p*g*T+y*S*_,this._w=p*g*_-y*S*T;break;case"YXZ":this._x=y*g*_+p*S*T,this._y=p*S*_-y*g*T,this._z=p*g*T-y*S*_,this._w=p*g*_+y*S*T;break;case"ZXY":this._x=y*g*_-p*S*T,this._y=p*S*_+y*g*T,this._z=p*g*T+y*S*_,this._w=p*g*_-y*S*T;break;case"ZYX":this._x=y*g*_-p*S*T,this._y=p*S*_+y*g*T,this._z=p*g*T-y*S*_,this._w=p*g*_+y*S*T;break;case"YZX":this._x=y*g*_+p*S*T,this._y=p*S*_+y*g*T,this._z=p*g*T-y*S*_,this._w=p*g*_-y*S*T;break;case"XZY":this._x=y*g*_-p*S*T,this._y=p*S*_-y*g*T,this._z=p*g*T+y*S*_,this._w=p*g*_+y*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],m=i[9],p=i[2],g=i[6],_=i[10],y=s+d+_;if(y>0){const S=.5/Math.sqrt(y+1);this._w=.25/S,this._x=(g-m)*S,this._y=(c-p)*S,this._z=(h-l)*S}else if(s>d&&s>_){const S=2*Math.sqrt(1+s-d-_);this._w=(g-m)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+p)/S}else if(d>_){const S=2*Math.sqrt(1+d-s-_);this._w=(c-p)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(m+g)/S}else{const S=2*Math.sqrt(1+_-s-d);this._w=(h-l)/S,this._x=(c+p)/S,this._y=(m+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ve(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,h=t._w,d=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+h*d+l*p-c*m,this._y=l*g+h*m+c*d-s*p,this._z=c*g+h*p+s*m-l*d,this._w=h*g-s*d-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const m=1-d*d;if(m<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,d),_=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=h*_+this._w*y,this._x=s*_+this._x*y,this._y=l*_+this._y*y,this._z=c*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(t=0,i=0,s=0){Y.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(W_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(W_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*s),g=2*(d*i-c*l),_=2*(c*s-h*i);return this.x=i+m*p+h*_-d*g,this.y=s+m*g+d*p-c*_,this.z=l+m*_+c*g-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-c*d,this.y=c*h-s*m,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return fh.copy(this).projectOnVector(t),this.sub(fh)}reflect(t){return this.sub(fh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(ve(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fh=new Y,W_=new Es;class pe{constructor(t,i,s,l,c,h,d,m,p){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p)}set(t,i,s,l,c,h,d,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=h,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],m=s[6],p=s[1],g=s[4],_=s[7],y=s[2],S=s[5],T=s[8],A=l[0],M=l[3],v=l[6],G=l[1],N=l[4],D=l[7],V=l[2],H=l[5],P=l[8];return c[0]=h*A+d*G+m*V,c[3]=h*M+d*N+m*H,c[6]=h*v+d*D+m*P,c[1]=p*A+g*G+_*V,c[4]=p*M+g*N+_*H,c[7]=p*v+g*D+_*P,c[2]=y*A+S*G+T*V,c[5]=y*M+S*N+T*H,c[8]=y*v+S*D+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8];return i*h*g-i*d*p-s*c*g+s*d*m+l*c*p-l*h*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=g*h-d*p,y=d*m-g*c,S=p*c-h*m,T=i*_+s*y+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=_*A,t[1]=(l*p-g*s)*A,t[2]=(d*s-l*h)*A,t[3]=y*A,t[4]=(g*i-l*m)*A,t[5]=(l*c-d*i)*A,t[6]=S*A,t[7]=(s*m-p*i)*A,t[8]=(h*i-s*c)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,h,d){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(hh.makeScale(t,i)),this}rotate(t){return this.premultiply(hh.makeRotation(-t)),this}translate(t,i){return this.premultiply(hh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hh=new pe;function pv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function kc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function kS(){const o=kc("canvas");return o.style.display="block",o}const q_={};function Rr(o){o in q_||(q_[o]=!0,console.warn(o))}function XS(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Y_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Z_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const o={enabled:!0,workingColorSpace:Lr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===He&&(l.r=ca(l.r),l.g=ca(l.g),l.b=ca(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===He&&(l.r=Cr(l.r),l.g=Cr(l.g),l.b=Cr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ga?Gc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Lr]:{primaries:t,whitePoint:s,transfer:Gc,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:t,whitePoint:s,transfer:He,toXYZ:Y_,fromXYZ:Z_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),o}const De=jS();function ca(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Cr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ur;class WS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{ur===void 0&&(ur=kc("canvas")),ur.width=t.width,ur.height=t.height;const l=ur.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=ur}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=kc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ca(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ca(i[s]/255)*255):i[s]=ca(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let qS=0;class Gd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=jo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(dh(l[h].image)):c.push(dh(l[h]))}else c=dh(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function dh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?WS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let YS=0;const ph=new Y;class qn extends bs{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=ys,l=ys,c=Oi,h=Ss,d=bi,m=zi,p=qn.DEFAULT_ANISOTROPY,g=Ga){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=jo(),this.name="",this.source=new Gd(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ph).x}get height(){return this.source.getSize(ph).y}get depth(){return this.source.getSize(ph).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==iv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ed:t.x=t.x-Math.floor(t.x);break;case ys:t.x=t.x<0?0:1;break;case nd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ed:t.y=t.y-Math.floor(t.y);break;case ys:t.y=t.y<0?0:1;break;case nd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=iv;qn.DEFAULT_ANISOTROPY=1;class Ve{constructor(t=0,i=0,s=0,l=1){Ve.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],_=m[8],y=m[1],S=m[5],T=m[9],A=m[2],M=m[6],v=m[10];if(Math.abs(g-y)<.01&&Math.abs(_-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+A)<.1&&Math.abs(T+M)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,D=(S+1)/2,V=(v+1)/2,H=(g+y)/4,P=(_+A)/4,j=(T+M)/4;return N>D&&N>V?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=H/s,c=P/s):D>V?D<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(D),s=H/l,c=j/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=P/c,l=j/c),this.set(s,l,c,i),this}let G=Math.sqrt((M-T)*(M-T)+(_-A)*(_-A)+(y-g)*(y-g));return Math.abs(G)<.001&&(G=1),this.x=(M-T)/G,this.y=(_-A)/G,this.z=(y-g)/G,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=ve(this.x,t.x,i.x),this.y=ve(this.y,t.y,i.y),this.z=ve(this.z,t.z,i.z),this.w=ve(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=ve(this.x,t,i),this.y=ve(this.y,t,i),this.z=ve(this.z,t,i),this.w=ve(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(ve(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZS extends bs{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Ve(0,0,t,i),this.scissorTest=!1,this.viewport=new Ve(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new qn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:Oi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Gd(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends ZS{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class mv extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wo{constructor(t=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(yi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(yi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=yi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,yi):yi.fromBufferAttribute(c,h),yi.applyMatrix4(t.matrixWorld),this.expandByPoint(yi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),oc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(t.matrixWorld),this.union(oc)}const l=t.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yi),yi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wo),lc.subVectors(this.max,wo),fr.subVectors(t.a,wo),hr.subVectors(t.b,wo),dr.subVectors(t.c,wo),Oa.subVectors(hr,fr),Pa.subVectors(dr,hr),fs.subVectors(fr,dr);let i=[0,-Oa.z,Oa.y,0,-Pa.z,Pa.y,0,-fs.z,fs.y,Oa.z,0,-Oa.x,Pa.z,0,-Pa.x,fs.z,0,-fs.x,-Oa.y,Oa.x,0,-Pa.y,Pa.x,0,-fs.y,fs.x,0];return!mh(i,fr,hr,dr,lc)||(i=[1,0,0,0,1,0,0,0,1],!mh(i,fr,hr,dr,lc))?!1:(cc.crossVectors(Oa,Pa),i=[cc.x,cc.y,cc.z],mh(i,fr,hr,dr,lc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],yi=new Y,oc=new Wo,fr=new Y,hr=new Y,dr=new Y,Oa=new Y,Pa=new Y,fs=new Y,wo=new Y,lc=new Y,cc=new Y,hs=new Y;function mh(o,t,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){hs.fromArray(o,c);const d=l.x*Math.abs(hs.x)+l.y*Math.abs(hs.y)+l.z*Math.abs(hs.z),m=t.dot(hs),p=i.dot(hs),g=s.dot(hs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>d)return!1}return!0}const QS=new Wo,Do=new Y,gh=new Y;class qo{constructor(t=new Y,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):QS.setFromPoints(t).getCenter(s);let l=0;for(let c=0,h=t.length;c<h;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Do.subVectors(t,this.center);const i=Do.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Do,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(gh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Do.copy(t.center).add(gh)),this.expandByPoint(Do.copy(t.center).sub(gh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new Y,_h=new Y,uc=new Y,za=new Y,vh=new Y,fc=new Y,xh=new Y;class qc{constructor(t=new Y,i=new Y(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){_h.copy(t).add(i).multiplyScalar(.5),uc.copy(i).sub(t).normalize(),za.copy(this.origin).sub(_h);const c=t.distanceTo(i)*.5,h=-this.direction.dot(uc),d=za.dot(this.direction),m=-za.dot(uc),p=za.lengthSq(),g=Math.abs(1-h*h);let _,y,S,T;if(g>0)if(_=h*m-d,y=h*d-m,T=c*g,_>=0)if(y>=-T)if(y<=T){const A=1/g;_*=A,y*=A,S=_*(_+h*y+2*d)+y*(h*_+y+2*m)+p}else y=c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;else y=-c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;else y<=-T?(_=Math.max(0,-(-h*c+d)),y=_>0?-c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p):y<=T?(_=0,y=Math.min(Math.max(-c,-m),c),S=y*(y+2*m)+p):(_=Math.max(0,-(h*c+d)),y=_>0?c:Math.min(Math.max(-c,-m),c),S=-_*_+y*(y+2*m)+p);else y=h>0?-c:c,_=Math.max(0,-(h*y+d)),S=-_*_+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(_h).addScaledVector(uc,y),S}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,c=t.radius*t.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,m=s+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,h,d,m;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),g>=0?(c=(t.min.y-y.y)*g,h=(t.max.y-y.y)*g):(c=(t.max.y-y.y)*g,h=(t.min.y-y.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),_>=0?(d=(t.min.z-y.z)*_,m=(t.max.z-y.z)*_):(d=(t.max.z-y.z)*_,m=(t.min.z-y.z)*_),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,s,l,c){vh.subVectors(i,t),fc.subVectors(s,t),xh.crossVectors(vh,fc);let h=this.direction.dot(xh),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;za.subVectors(this.origin,t);const m=d*this.direction.dot(fc.crossVectors(za,fc));if(m<0)return null;const p=d*this.direction.dot(vh.cross(za));if(p<0||m+p>h)return null;const g=-d*za.dot(xh);return g<0?null:this.at(g/h,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qe{constructor(t,i,s,l,c,h,d,m,p,g,_,y,S,T,A,M){Qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,h,d,m,p,g,_,y,S,T,A,M)}set(t,i,s,l,c,h,d,m,p,g,_,y,S,T,A,M){const v=this.elements;return v[0]=t,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=g,v[10]=_,v[14]=y,v[3]=S,v[7]=T,v[11]=A,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Qe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/pr.setFromMatrixColumn(t,0).length(),c=1/pr.setFromMatrixColumn(t,1).length(),h=1/pr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,h=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),_=Math.sin(c);if(t.order==="XYZ"){const y=h*g,S=h*_,T=d*g,A=d*_;i[0]=m*g,i[4]=-m*_,i[8]=p,i[1]=S+T*p,i[5]=y-A*p,i[9]=-d*m,i[2]=A-y*p,i[6]=T+S*p,i[10]=h*m}else if(t.order==="YXZ"){const y=m*g,S=m*_,T=p*g,A=p*_;i[0]=y+A*d,i[4]=T*d-S,i[8]=h*p,i[1]=h*_,i[5]=h*g,i[9]=-d,i[2]=S*d-T,i[6]=A+y*d,i[10]=h*m}else if(t.order==="ZXY"){const y=m*g,S=m*_,T=p*g,A=p*_;i[0]=y-A*d,i[4]=-h*_,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*g,i[9]=A-y*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const y=h*g,S=h*_,T=d*g,A=d*_;i[0]=m*g,i[4]=T*p-S,i[8]=y*p+A,i[1]=m*_,i[5]=A*p+y,i[9]=S*p-T,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const y=h*m,S=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=A-y*_,i[8]=T*_+S,i[1]=_,i[5]=h*g,i[9]=-d*g,i[2]=-p*g,i[6]=S*_+T,i[10]=y-A*_}else if(t.order==="XZY"){const y=h*m,S=h*p,T=d*m,A=d*p;i[0]=m*g,i[4]=-_,i[8]=p*g,i[1]=y*_+A,i[5]=h*g,i[9]=S*_-T,i[2]=T*_-S,i[6]=d*g,i[10]=A*_+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JS,t,$S)}lookAt(t,i,s){const l=this.elements;return ni.subVectors(t,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Ba.crossVectors(s,ni),Ba.lengthSq()===0&&(Math.abs(s.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Ba.crossVectors(s,ni)),Ba.normalize(),hc.crossVectors(ni,Ba),l[0]=Ba.x,l[4]=hc.x,l[8]=ni.x,l[1]=Ba.y,l[5]=hc.y,l[9]=ni.y,l[2]=Ba.z,l[6]=hc.z,l[10]=ni.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],m=s[8],p=s[12],g=s[1],_=s[5],y=s[9],S=s[13],T=s[2],A=s[6],M=s[10],v=s[14],G=s[3],N=s[7],D=s[11],V=s[15],H=l[0],P=l[4],j=l[8],w=l[12],C=l[1],z=l[5],st=l[9],ot=l[13],ct=l[2],ht=l[6],O=l[10],Z=l[14],q=l[3],mt=l[7],Et=l[11],L=l[15];return c[0]=h*H+d*C+m*ct+p*q,c[4]=h*P+d*z+m*ht+p*mt,c[8]=h*j+d*st+m*O+p*Et,c[12]=h*w+d*ot+m*Z+p*L,c[1]=g*H+_*C+y*ct+S*q,c[5]=g*P+_*z+y*ht+S*mt,c[9]=g*j+_*st+y*O+S*Et,c[13]=g*w+_*ot+y*Z+S*L,c[2]=T*H+A*C+M*ct+v*q,c[6]=T*P+A*z+M*ht+v*mt,c[10]=T*j+A*st+M*O+v*Et,c[14]=T*w+A*ot+M*Z+v*L,c[3]=G*H+N*C+D*ct+V*q,c[7]=G*P+N*z+D*ht+V*mt,c[11]=G*j+N*st+D*O+V*Et,c[15]=G*w+N*ot+D*Z+V*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],h=t[1],d=t[5],m=t[9],p=t[13],g=t[2],_=t[6],y=t[10],S=t[14],T=t[3],A=t[7],M=t[11],v=t[15];return T*(+c*m*_-l*p*_-c*d*y+s*p*y+l*d*S-s*m*S)+A*(+i*m*S-i*p*y+c*h*y-l*h*S+l*p*g-c*m*g)+M*(+i*p*_-i*d*S-c*h*_+s*h*S+c*d*g-s*p*g)+v*(-l*d*g-i*m*_+i*d*y+l*h*_-s*h*y+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],h=t[4],d=t[5],m=t[6],p=t[7],g=t[8],_=t[9],y=t[10],S=t[11],T=t[12],A=t[13],M=t[14],v=t[15],G=_*M*p-A*y*p+A*m*S-d*M*S-_*m*v+d*y*v,N=T*y*p-g*M*p-T*m*S+h*M*S+g*m*v-h*y*v,D=g*A*p-T*_*p+T*d*S-h*A*S-g*d*v+h*_*v,V=T*_*m-g*A*m-T*d*y+h*A*y+g*d*M-h*_*M,H=i*G+s*N+l*D+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return t[0]=G*P,t[1]=(A*y*c-_*M*c-A*l*S+s*M*S+_*l*v-s*y*v)*P,t[2]=(d*M*c-A*m*c+A*l*p-s*M*p-d*l*v+s*m*v)*P,t[3]=(_*m*c-d*y*c-_*l*p+s*y*p+d*l*S-s*m*S)*P,t[4]=N*P,t[5]=(g*M*c-T*y*c+T*l*S-i*M*S-g*l*v+i*y*v)*P,t[6]=(T*m*c-h*M*c-T*l*p+i*M*p+h*l*v-i*m*v)*P,t[7]=(h*y*c-g*m*c+g*l*p-i*y*p-h*l*S+i*m*S)*P,t[8]=D*P,t[9]=(T*_*c-g*A*c-T*s*S+i*A*S+g*s*v-i*_*v)*P,t[10]=(h*A*c-T*d*c+T*s*p-i*A*p-h*s*v+i*d*v)*P,t[11]=(g*d*c-h*_*c-g*s*p+i*_*p+h*s*S-i*d*S)*P,t[12]=V*P,t[13]=(g*A*l-T*_*l+T*s*y-i*A*y-g*s*M+i*_*M)*P,t[14]=(T*d*l-h*A*l-T*s*m+i*A*m+h*s*M-i*d*M)*P,t[15]=(h*_*l-g*d*l+g*s*m-i*_*m-h*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=t.x,d=t.y,m=t.z,p=c*h,g=c*d;return this.set(p*h+s,p*d-l*m,p*m+l*d,0,p*d+l*m,g*d+s,g*m-l*h,0,p*m-l*d,g*m+l*h,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,h){return this.set(1,s,c,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,m=i._w,p=c+c,g=h+h,_=d+d,y=c*p,S=c*g,T=c*_,A=h*g,M=h*_,v=d*_,G=m*p,N=m*g,D=m*_,V=s.x,H=s.y,P=s.z;return l[0]=(1-(A+v))*V,l[1]=(S+D)*V,l[2]=(T-N)*V,l[3]=0,l[4]=(S-D)*H,l[5]=(1-(y+v))*H,l[6]=(M+G)*H,l[7]=0,l[8]=(T+N)*P,l[9]=(M-G)*P,l[10]=(1-(y+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=pr.set(l[0],l[1],l[2]).length();const h=pr.set(l[4],l[5],l[6]).length(),d=pr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/c,g=1/h,_=1/d;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=_,Si.elements[9]*=_,Si.elements[10]*=_,i.setFromRotationMatrix(Si),s.x=c,s.y=h,s.z=d,this}makePerspective(t,i,s,l,c,h,d=Pi,m=!1){const p=this.elements,g=2*c/(i-t),_=2*c/(s-l),y=(i+t)/(i-t),S=(s+l)/(s-l);let T,A;if(m)T=c/(h-c),A=h*c/(h-c);else if(d===Pi)T=-(h+c)/(h-c),A=-2*h*c/(h-c);else if(d===Vc)T=-h/(h-c),A=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=_,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,h,d=Pi,m=!1){const p=this.elements,g=2/(i-t),_=2/(s-l),y=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,A;if(m)T=1/(h-c),A=h/(h-c);else if(d===Pi)T=-2/(h-c),A=-(h+c)/(h-c);else if(d===Vc)T=-1/(h-c),A=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=_,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=T,p[14]=A,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const pr=new Y,Si=new Qe,JS=new Y(0,0,0),$S=new Y(1,1,1),Ba=new Y,hc=new Y,ni=new Y,K_=new Qe,Q_=new Es;class Bi{constructor(t=0,i=0,s=0,l=Bi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],h=l[4],d=l[8],m=l[1],p=l[5],g=l[9],_=l[2],y=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(ve(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-ve(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(ve(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-ve(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,S),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(ve(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-ve(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return K_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(K_,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Q_.setFromEuler(this),this.setFromQuaternion(Q_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bi.DEFAULT_ORDER="XYZ";class gv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tM=0;const J_=new Y,mr=new Es,aa=new Qe,dc=new Y,Uo=new Y,eM=new Y,nM=new Es,$_=new Y(1,0,0),t0=new Y(0,1,0),e0=new Y(0,0,1),n0={type:"added"},iM={type:"removed"},gr={type:"childadded",child:null},yh={type:"childremoved",child:null};class Sn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=jo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const t=new Y,i=new Bi,s=new Es,l=new Y(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Qe},normalMatrix:{value:new pe}}),this.matrix=new Qe,this.matrixWorld=new Qe,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,i){return mr.setFromAxisAngle(t,i),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis($_,t)}rotateY(t){return this.rotateOnAxis(t0,t)}rotateZ(t){return this.rotateOnAxis(e0,t)}translateOnAxis(t,i){return J_.copy(t).applyQuaternion(this.quaternion),this.position.add(J_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis($_,t)}translateY(t){return this.translateOnAxis(t0,t)}translateZ(t){return this.translateOnAxis(e0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?dc.copy(t):dc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Uo,dc,this.up):aa.lookAt(dc,Uo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),mr.setFromRotationMatrix(aa),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(n0),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(iM),yh.child=t,this.dispatchEvent(yh),yh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(n0),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,eM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,nM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const _=m[p];c(t.shapes,_)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(c(t.materials,this.material[m]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(c(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),g=h(t.images),_=h(t.shapes),y=h(t.skeletons),S=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const m=[];for(const p in d){const g=d[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Sn.DEFAULT_UP=new Y(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new Y,sa=new Y,Sh=new Y,ra=new Y,_r=new Y,vr=new Y,i0=new Y,Mh=new Y,Eh=new Y,Th=new Y,bh=new Ve,Ah=new Ve,Rh=new Ve;class Ti{constructor(t=new Y,i=new Y,s=new Y){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Mi.subVectors(l,i),sa.subVectors(s,i),Sh.subVectors(t,i);const h=Mi.dot(Mi),d=Mi.dot(sa),m=Mi.dot(Sh),p=sa.dot(sa),g=sa.dot(Sh),_=h*p-d*d;if(_===0)return c.set(0,0,0),null;const y=1/_,S=(p*m-d*g)*y,T=(h*g-d*m)*y;return c.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,s,l,c,h,d,m){return this.getBarycoord(t,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(h,ra.y),m.addScaledVector(d,ra.z),m)}static getInterpolatedAttribute(t,i,s,l,c,h){return bh.setScalar(0),Ah.setScalar(0),Rh.setScalar(0),bh.fromBufferAttribute(t,i),Ah.fromBufferAttribute(t,s),Rh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(bh,c.x),h.addScaledVector(Ah,c.y),h.addScaledVector(Rh,c.z),h}static isFrontFacing(t,i,s,l){return Mi.subVectors(s,i),sa.subVectors(t,i),Mi.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Mi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ti.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ti.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ti.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ti.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ti.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let h,d;_r.subVectors(l,s),vr.subVectors(c,s),Mh.subVectors(t,s);const m=_r.dot(Mh),p=vr.dot(Mh);if(m<=0&&p<=0)return i.copy(s);Eh.subVectors(t,l);const g=_r.dot(Eh),_=vr.dot(Eh);if(g>=0&&_<=g)return i.copy(l);const y=m*_-g*p;if(y<=0&&m>=0&&g<=0)return h=m/(m-g),i.copy(s).addScaledVector(_r,h);Th.subVectors(t,c);const S=_r.dot(Th),T=vr.dot(Th);if(T>=0&&S<=T)return i.copy(c);const A=S*p-m*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),i.copy(s).addScaledVector(vr,d);const M=g*T-S*_;if(M<=0&&_-g>=0&&S-T>=0)return i0.subVectors(c,l),d=(_-g)/(_-g+(S-T)),i.copy(l).addScaledVector(i0,d);const v=1/(M+A+y);return h=A*v,d=y*v,i.copy(s).addScaledVector(_r,h).addScaledVector(vr,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const _v={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ia={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Ch(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class _e{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=De.workingColorSpace){return this.r=t,this.g=i,this.b=s,De.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=De.workingColorSpace){if(t=GS(t,1),i=ve(i,0,1),s=ve(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Ch(h,c,t+1/3),this.g=Ch(h,c,t),this.b=Ch(h,c,t-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(t,i=ai){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ai){const s=_v[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ca(t.r),this.g=ca(t.g),this.b=ca(t.b),this}copyLinearToSRGB(t){return this.r=Cr(t.r),this.g=Cr(t.g),this.b=Cr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return De.workingToColorSpace(Un.copy(this),t),Math.round(ve(Un.r*255,0,255))*65536+Math.round(ve(Un.g*255,0,255))*256+Math.round(ve(Un.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let m,p;const g=(d+h)/2;if(d===h)m=0,p=0;else{const _=h-d;switch(p=g<=.5?_/(h+d):_/(2-h-d),h){case s:m=(l-c)/_+(l<c?6:0);break;case l:m=(c-s)/_+2;break;case c:m=(s-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=ai){De.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==ai?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Ia),this.setHSL(Ia.h+t,Ia.s+i,Ia.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Ia),t.getHSL(pc);const s=uh(Ia.h,pc.h,i),l=uh(Ia.s,pc.s,i),c=uh(Ia.l,pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new _e;_e.NAMES=_v;let aM=0;class As extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=jo(),this.name="",this.type="Material",this.blending=Ar,this.side=Xa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xh,this.blendDst=jh,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new _e(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=k_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ar&&(s.blending=this.blending),this.side!==Xa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Xh&&(s.blendSrc=this.blendSrc),this.blendDst!==jh&&(s.blendDst=this.blendDst),this.blendEquation!==vs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==k_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}if(i){const c=l(t.textures),h=l(t.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class vv extends As{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new _e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.combine=nv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new Y,mc=new se;let sM=0;class gi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=X_,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(t),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Co(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=kn(i,this.array),s=kn(s,this.array),l=kn(l,this.array),c=kn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==X_&&(t.usage=this.usage),t}}class xv extends gi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class yv extends gi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class hn extends gi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let rM=0;const mi=new Qe,wh=new Sn,xr=new Y,ii=new Wo,Lo=new Wo,yn=new Y;class zn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=jo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(pv(t)?yv:xv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pe().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mi.makeRotationFromQuaternion(t),this.applyMatrix4(mi),this}rotateX(t){return mi.makeRotationX(t),this.applyMatrix4(mi),this}rotateY(t){return mi.makeRotationY(t),this.applyMatrix4(mi),this}rotateZ(t){return mi.makeRotationZ(t),this.applyMatrix4(mi),this}translate(t,i,s){return mi.makeTranslation(t,i,s),this.applyMatrix4(mi),this}scale(t,i,s){return mi.makeScale(t,i,s),this.applyMatrix4(mi),this}lookAt(t){return wh.lookAt(t),wh.updateMatrix(),this.applyMatrix4(wh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new hn(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const s=this.boundingSphere.center;if(ii.setFromBufferAttribute(t),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];Lo.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ii.min,Lo.min),ii.expandByPoint(yn),yn.addVectors(ii.max,Lo.max),ii.expandByPoint(yn)):(ii.expandByPoint(Lo.min),ii.expandByPoint(Lo.max))}ii.getCenter(s);let l=0;for(let c=0,h=t.count;c<h;c++)yn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(yn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],m=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)yn.fromBufferAttribute(d,p),m&&(xr.fromBufferAttribute(t,p),yn.add(xr)),l=Math.max(l,s.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let j=0;j<s.count;j++)d[j]=new Y,m[j]=new Y;const p=new Y,g=new Y,_=new Y,y=new se,S=new se,T=new se,A=new Y,M=new Y;function v(j,w,C){p.fromBufferAttribute(s,j),g.fromBufferAttribute(s,w),_.fromBufferAttribute(s,C),y.fromBufferAttribute(c,j),S.fromBufferAttribute(c,w),T.fromBufferAttribute(c,C),g.sub(p),_.sub(p),S.sub(y),T.sub(y);const z=1/(S.x*T.y-T.x*S.y);isFinite(z)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(_,-S.y).multiplyScalar(z),M.copy(_).multiplyScalar(S.x).addScaledVector(g,-T.x).multiplyScalar(z),d[j].add(A),d[w].add(A),d[C].add(A),m[j].add(M),m[w].add(M),m[C].add(M))}let G=this.groups;G.length===0&&(G=[{start:0,count:t.count}]);for(let j=0,w=G.length;j<w;++j){const C=G[j],z=C.start,st=C.count;for(let ot=z,ct=z+st;ot<ct;ot+=3)v(t.getX(ot+0),t.getX(ot+1),t.getX(ot+2))}const N=new Y,D=new Y,V=new Y,H=new Y;function P(j){V.fromBufferAttribute(l,j),H.copy(V);const w=d[j];N.copy(w),N.sub(V.multiplyScalar(V.dot(w))).normalize(),D.crossVectors(H,w);const z=D.dot(m[j])<0?-1:1;h.setXYZW(j,N.x,N.y,N.z,z)}for(let j=0,w=G.length;j<w;++j){const C=G[j],z=C.start,st=C.count;for(let ot=z,ct=z+st;ot<ct;ot+=3)P(t.getX(ot+0)),P(t.getX(ot+1)),P(t.getX(ot+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new gi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,S=s.count;y<S;y++)s.setXYZ(y,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,m=new Y,p=new Y,g=new Y,_=new Y;if(t)for(let y=0,S=t.count;y<S;y+=3){const T=t.getX(y+0),A=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,T),c.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),d.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),p.fromBufferAttribute(s,M),d.add(g),m.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let y=0,S=i.count;y<S;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),h.fromBufferAttribute(i,y+2),g.subVectors(h,c),_.subVectors(l,c),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(d,m){const p=d.array,g=d.itemSize,_=d.normalized,y=new p.constructor(m.length*g);let S=0,T=0;for(let A=0,M=m.length;A<M;A++){d.isInterleavedBufferAttribute?S=m[A]*d.data.stride+d.offset:S=m[A]*g;for(let v=0;v<g;v++)y[T++]=p[S++]}return new gi(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new zn,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const c=this.morphAttributes;for(const d in c){const m=[],p=c[d];for(let g=0,_=p.length;g<_;g++){const y=p[g],S=t(y,s);m.push(S)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let _=0,y=p.length;_<y;_++){const S=p[_];g.push(S.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],_=c[p];for(let y=0,S=_.length;y<S;y++)g.push(_[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,g=h.length;p<g;p++){const _=h[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const a0=new Qe,ds=new qc,gc=new qo,s0=new Y,_c=new Y,vc=new Y,xc=new Y,Dh=new Y,yc=new Y,r0=new Y,Sc=new Y;class jn extends Sn{constructor(t=new zn,i=new vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=d[m],_=c[m];g!==0&&(Dh.fromBufferAttribute(_,t),h?yc.addScaledVector(Dh,g):yc.addScaledVector(Dh.sub(i),g))}i.add(yc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(c),ds.copy(t.ray).recast(t.near),!(gc.containsPoint(ds.origin)===!1&&(ds.intersectSphere(gc,s0)===null||ds.origin.distanceToSquared(s0)>(t.far-t.near)**2))&&(a0.copy(c).invert(),ds.copy(t.ray).applyMatrix4(a0),!(s.boundingBox!==null&&ds.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ds)))}_computeIntersections(t,i,s){let l;const c=this.geometry,h=this.material,d=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,_=c.attributes.normal,y=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const M=y[T],v=h[M.materialIndex],G=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let D=G,V=N;D<V;D+=3){const H=d.getX(D),P=d.getX(D+1),j=d.getX(D+2);l=Mc(this,v,t,s,p,g,_,H,P,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,v=A;M<v;M+=3){const G=d.getX(M),N=d.getX(M+1),D=d.getX(M+2);l=Mc(this,h,t,s,p,g,_,G,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let T=0,A=y.length;T<A;T++){const M=y[T],v=h[M.materialIndex],G=Math.max(M.start,S.start),N=Math.min(m.count,Math.min(M.start+M.count,S.start+S.count));for(let D=G,V=N;D<V;D+=3){const H=D,P=D+1,j=D+2;l=Mc(this,v,t,s,p,g,_,H,P,j),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(m.count,S.start+S.count);for(let M=T,v=A;M<v;M+=3){const G=M,N=M+1,D=M+2;l=Mc(this,h,t,s,p,g,_,G,N,D),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function oM(o,t,i,s,l,c,h,d){let m;if(t.side===Wn?m=s.intersectTriangle(h,c,l,!0,d):m=s.intersectTriangle(l,c,h,t.side===Xa,d),m===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(Sc);return p<i.near||p>i.far?null:{distance:p,point:Sc.clone(),object:o}}function Mc(o,t,i,s,l,c,h,d,m,p){o.getVertexPosition(d,_c),o.getVertexPosition(m,vc),o.getVertexPosition(p,xc);const g=oM(o,t,i,s,_c,vc,xc,r0);if(g){const _=new Y;Ti.getBarycoord(r0,_c,vc,xc,_),l&&(g.uv=Ti.getInterpolatedAttribute(l,d,m,p,_,new se)),c&&(g.uv1=Ti.getInterpolatedAttribute(c,d,m,p,_,new se)),h&&(g.normal=Ti.getInterpolatedAttribute(h,d,m,p,_,new Y),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:m,c:p,normal:new Y,materialIndex:0};Ti.getNormal(_c,vc,xc,y.normal),g.face=y,g.barycoord=_}return g}class Yo extends zn{constructor(t=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const m=[],p=[],g=[],_=[];let y=0,S=0;T("z","y","x",-1,-1,s,i,t,h,c,0),T("z","y","x",1,-1,s,i,-t,h,c,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,c,4),T("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new hn(p,3)),this.setAttribute("normal",new hn(g,3)),this.setAttribute("uv",new hn(_,2));function T(A,M,v,G,N,D,V,H,P,j,w){const C=D/P,z=V/j,st=D/2,ot=V/2,ct=H/2,ht=P+1,O=j+1;let Z=0,q=0;const mt=new Y;for(let Et=0;Et<O;Et++){const L=Et*z-ot;for(let nt=0;nt<ht;nt++){const Mt=nt*C-st;mt[A]=Mt*G,mt[M]=L*N,mt[v]=ct,p.push(mt.x,mt.y,mt.z),mt[A]=0,mt[M]=0,mt[v]=H>0?1:-1,g.push(mt.x,mt.y,mt.z),_.push(nt/P),_.push(1-Et/j),Z+=1}}for(let Et=0;Et<j;Et++)for(let L=0;L<P;L++){const nt=y+L+ht*Et,Mt=y+L+ht*(Et+1),wt=y+(L+1)+ht*(Et+1),J=y+(L+1)+ht*Et;m.push(nt,Mt,J),m.push(Mt,wt,J),q+=6}d.addGroup(S,q,w),S+=q,y+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Nr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Pn(o){const t={};for(let i=0;i<o.length;i++){const s=Nr(o[i]);for(const l in s)t[l]=s[l]}return t}function lM(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Sv(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:De.workingColorSpace}const cM={clone:Nr,merge:Pn};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ja extends As{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=fM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Nr(t.uniforms),this.uniformsGroups=lM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Mv extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qe,this.projectionMatrix=new Qe,this.projectionMatrixInverse=new Qe,this.coordinateSystem=Pi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fa=new Y,o0=new se,l0=new se;class si extends Mv{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=wd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wd*2*Math.atan(Math.tan(Bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Fa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z),Fa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Fa.x,Fa.y).multiplyScalar(-t/Fa.z)}getViewSize(t,i){return this.getViewBounds(t,o0,l0),i.subVectors(l0,o0)}setViewOffset(t,i,s,l,c,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Bc*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;c+=h.offsetX*l/m,i-=h.offsetY*s/p,l*=h.width/m,s*=h.height/p}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const yr=-90,Sr=1;class hM extends Sn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(yr,Sr,t,i);l.layers=this.layers,this.add(l);const c=new si(yr,Sr,t,i);c.layers=this.layers,this.add(c);const h=new si(yr,Sr,t,i);h.layers=this.layers,this.add(h);const d=new si(yr,Sr,t,i);d.layers=this.layers,this.add(d);const m=new si(yr,Sr,t,i);m.layers=this.layers,this.add(m);const p=new si(yr,Sr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,m]=i;for(const p of i)this.remove(p);if(t===Pi)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Vc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,m,p,g]=this.children,_=t.getRenderTarget(),y=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(_,y,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Ev extends qn{constructor(t=[],i=Dr,s,l,c,h,d,m,p,g){super(t,i,s,l,c,h,d,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dM extends Ts{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Ev(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Yo(5,5,5),c=new ja({name:"CubemapFromEquirect",uniforms:Nr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:Va});c.uniforms.tEquirect.value=i;const h=new jn(l,c),d=i.minFilter;return i.minFilter===Ss&&(i.minFilter=Oi),new hM(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(c)}}class zo extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pM={type:"move"};class Uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),v=this._getHandJoint(p,A);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),S=.02,T=.005;p.inputState.pinching&&y>S+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=S-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(pM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new zo;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Vd{constructor(t,i=25e-5){this.isFogExp2=!0,this.name="",this.color=new _e(t),this.density=i}clone(){return new Vd(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mM extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bi,this.environmentIntensity=1,this.environmentRotation=new Bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Lh=new Y,gM=new Y,_M=new pe;class Ha{constructor(t=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Lh.subVectors(s,i).cross(gM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Lh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||_M.getNormalMatrix(t),l=this.coplanarPoint(Lh).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new qo,vM=new se(.5,.5),Ec=new Y;class kd{constructor(t=new Ha,i=new Ha,s=new Ha,l=new Ha,c=new Ha,h=new Ha){this.planes=[t,i,s,l,c,h]}set(t,i,s,l,c,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Pi,s=!1){const l=this.planes,c=t.elements,h=c[0],d=c[1],m=c[2],p=c[3],g=c[4],_=c[5],y=c[6],S=c[7],T=c[8],A=c[9],M=c[10],v=c[11],G=c[12],N=c[13],D=c[14],V=c[15];if(l[0].setComponents(p-h,S-g,v-T,V-G).normalize(),l[1].setComponents(p+h,S+g,v+T,V+G).normalize(),l[2].setComponents(p+d,S+_,v+A,V+N).normalize(),l[3].setComponents(p-d,S-_,v-A,V-N).normalize(),s)l[4].setComponents(m,y,M,D).normalize(),l[5].setComponents(p-m,S-y,v-M,V-D).normalize();else if(l[4].setComponents(p-m,S-y,v-M,V-D).normalize(),i===Pi)l[5].setComponents(p+m,S+y,v+M,V+D).normalize();else if(i===Vc)l[5].setComponents(m,y,M,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ps.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(t){ps.center.set(0,0,0);const i=vM.distanceTo(t.center);return ps.radius=.7071067811865476+i,ps.applyMatrix4(t.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ec.x=l.normal.x>0?t.max.x:t.min.x,Ec.y=l.normal.y>0?t.max.y:t.min.y,Ec.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ec)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Tv extends As{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new _e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xc=new Y,jc=new Y,c0=new Qe,No=new qc,Tc=new qo,Nh=new Y,u0=new Y;class xM extends Sn{constructor(t=new zn,i=new Tv){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Xc.fromBufferAttribute(i,l-1),jc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Xc.distanceTo(jc);t.setAttribute("lineDistance",new hn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Tc.copy(s.boundingSphere),Tc.applyMatrix4(l),Tc.radius+=c,t.ray.intersectsSphere(Tc)===!1)return;c0.copy(l).invert(),No.copy(t.ray).applyMatrix4(c0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,g=s.index,y=s.attributes.position;if(g!==null){const S=Math.max(0,h.start),T=Math.min(g.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const v=g.getX(A),G=g.getX(A+1),N=bc(this,t,No,m,v,G,A);N&&i.push(N)}if(this.isLineLoop){const A=g.getX(T-1),M=g.getX(S),v=bc(this,t,No,m,A,M,T-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),T=Math.min(y.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=p){const v=bc(this,t,No,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=bc(this,t,No,m,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function bc(o,t,i,s,l,c,h){const d=o.geometry.attributes.position;if(Xc.fromBufferAttribute(d,l),jc.fromBufferAttribute(d,c),i.distanceSqToSegment(Xc,jc,Nh,u0)>s)return;Nh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Nh);if(!(p<t.near||p>t.far))return{distance:p,point:u0.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const f0=new Y,h0=new Y;class yM extends xM{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)f0.fromBufferAttribute(i,l),h0.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+f0.distanceTo(h0);t.setAttribute("lineDistance",new hn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dd extends As{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new _e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const d0=new Qe,Ud=new qc,Ac=new qo,Rc=new Y;class p0 extends Sn{constructor(t=new zn,i=new Dd){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Ac.copy(s.boundingSphere),Ac.applyMatrix4(l),Ac.radius+=c,t.ray.intersectsSphere(Ac)===!1)return;d0.copy(l).invert(),Ud.copy(t.ray).applyMatrix4(d0);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=s.index,_=s.attributes.position;if(p!==null){const y=Math.max(0,h.start),S=Math.min(p.count,h.start+h.count);for(let T=y,A=S;T<A;T++){const M=p.getX(T);Rc.fromBufferAttribute(_,M),m0(Rc,M,m,l,t,i,this)}}else{const y=Math.max(0,h.start),S=Math.min(_.count,h.start+h.count);for(let T=y,A=S;T<A;T++)Rc.fromBufferAttribute(_,T),m0(Rc,T,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function m0(o,t,i,s,l,c,h){const d=Ud.distanceSqToPoint(o);if(d<i){const m=new Y;Ud.closestPointToPoint(o,m),m.applyMatrix4(s);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class bv extends qn{constructor(t,i,s=Ms,l,c,h,d=Ai,m=Ai,p,g=Go,_=1){if(g!==Go&&g!==Vo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:_};super(y,l,c,h,d,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gd(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Xd extends zn{constructor(t=1,i=32,s=0,l=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:i,thetaStart:s,thetaLength:l},i=Math.max(3,i);const c=[],h=[],d=[],m=[],p=new Y,g=new se;h.push(0,0,0),d.push(0,0,1),m.push(.5,.5);for(let _=0,y=3;_<=i;_++,y+=3){const S=s+_/i*l;p.x=t*Math.cos(S),p.y=t*Math.sin(S),h.push(p.x,p.y,p.z),d.push(0,0,1),g.x=(h[y]/t+1)/2,g.y=(h[y+1]/t+1)/2,m.push(g.x,g.y)}for(let _=1;_<=i;_++)c.push(_,_+1,0);this.setIndex(c),this.setAttribute("position",new hn(h,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xd(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Io extends zn{constructor(t=1,i=1,s=1,l=32,c=1,h=!1,d=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:h,thetaStart:d,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],_=[],y=[],S=[];let T=0;const A=[],M=s/2;let v=0;G(),h===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(y,3)),this.setAttribute("uv",new hn(S,2));function G(){const D=new Y,V=new Y;let H=0;const P=(i-t)/s;for(let j=0;j<=c;j++){const w=[],C=j/c,z=C*(i-t)+t;for(let st=0;st<=l;st++){const ot=st/l,ct=ot*m+d,ht=Math.sin(ct),O=Math.cos(ct);V.x=z*ht,V.y=-C*s+M,V.z=z*O,_.push(V.x,V.y,V.z),D.set(ht,P,O).normalize(),y.push(D.x,D.y,D.z),S.push(ot,1-C),w.push(T++)}A.push(w)}for(let j=0;j<l;j++)for(let w=0;w<c;w++){const C=A[w][j],z=A[w+1][j],st=A[w+1][j+1],ot=A[w][j+1];(t>0||w!==0)&&(g.push(C,z,ot),H+=3),(i>0||w!==c-1)&&(g.push(z,st,ot),H+=3)}p.addGroup(v,H,0),v+=H}function N(D){const V=T,H=new se,P=new Y;let j=0;const w=D===!0?t:i,C=D===!0?1:-1;for(let st=1;st<=l;st++)_.push(0,M*C,0),y.push(0,C,0),S.push(.5,.5),T++;const z=T;for(let st=0;st<=l;st++){const ct=st/l*m+d,ht=Math.cos(ct),O=Math.sin(ct);P.x=w*O,P.y=M*C,P.z=w*ht,_.push(P.x,P.y,P.z),y.push(0,C,0),H.x=ht*.5+.5,H.y=O*.5*C+.5,S.push(H.x,H.y),T++}for(let st=0;st<l;st++){const ot=V+st,ct=z+st;D===!0?g.push(ct,ct+1,ot):g.push(ct+1,ct,ot),j+=3}p.addGroup(v,j,D===!0?1:2),v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Io(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Yc extends zn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,h=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,g=m+1,_=t/d,y=i/m,S=[],T=[],A=[],M=[];for(let v=0;v<g;v++){const G=v*y-h;for(let N=0;N<p;N++){const D=N*_-c;T.push(D,-G,0),A.push(0,0,1),M.push(N/d),M.push(1-v/m)}}for(let v=0;v<m;v++)for(let G=0;G<d;G++){const N=G+p*v,D=G+p*(v+1),V=G+1+p*(v+1),H=G+1+p*v;S.push(N,D,H),S.push(D,V,H)}this.setIndex(S),this.setAttribute("position",new hn(T,3)),this.setAttribute("normal",new hn(A,3)),this.setAttribute("uv",new hn(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yc(t.width,t.height,t.widthSegments,t.heightSegments)}}class jd extends zn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],m=[],p=[],g=new Y,_=new Y,y=new Y;for(let S=0;S<=s;S++)for(let T=0;T<=l;T++){const A=T/l*c,M=S/s*Math.PI*2;_.x=(t+i*Math.cos(M))*Math.cos(A),_.y=(t+i*Math.cos(M))*Math.sin(A),_.z=i*Math.sin(M),d.push(_.x,_.y,_.z),g.x=t*Math.cos(A),g.y=t*Math.sin(A),y.subVectors(_,g).normalize(),m.push(y.x,y.y,y.z),p.push(T/l),p.push(S/s)}for(let S=1;S<=s;S++)for(let T=1;T<=l;T++){const A=(l+1)*S+T-1,M=(l+1)*(S-1)+T-1,v=(l+1)*(S-1)+T,G=(l+1)*S+T;h.push(A,M,G),h.push(M,v,G)}this.setIndex(h),this.setAttribute("position",new hn(d,3)),this.setAttribute("normal",new hn(m,3)),this.setAttribute("uv",new hn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jd(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ic extends As{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new _e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new _e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hv,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class g0 extends Ic{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ve(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new _e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new _e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new _e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class SM extends As{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=US,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class MM extends As{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Wd extends Sn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new _e(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Oh=new Qe,_0=new Y,v0=new Y;class Av{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.mapType=zi,this.map=null,this.mapPass=null,this.matrix=new Qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kd,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;_0.setFromMatrixPosition(t.matrixWorld),i.position.copy(_0),v0.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(v0),i.updateMatrixWorld(),Oh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Oh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Oh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const x0=new Qe,Oo=new Y,Ph=new Y;class EM extends Av{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new se(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new Y(1,0,0),new Y(-1,0,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,1,0),new Y(0,-1,0)],this._cubeUps=[new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,1,0),new Y(0,0,1),new Y(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Oo.setFromMatrixPosition(t.matrixWorld),s.position.copy(Oo),Ph.copy(s.position),Ph.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Ph),s.updateMatrixWorld(),l.makeTranslation(-Oo.x,-Oo.y,-Oo.z),x0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(x0,s.coordinateSystem,s.reversedDepth)}}class TM extends Wd{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new EM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Rv extends Mv{constructor(t=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,h=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,h=c+p*this.view.width,d-=g*this.view.offsetY,m=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class bM extends Av{constructor(){super(new Rv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AM extends Wd{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new bM}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class RM extends Wd{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class CM extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class wM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}class y0{constructor(t=1,i=0,s=0){this.radius=t,this.phi=i,this.theta=s}set(t,i,s){return this.radius=t,this.phi=i,this.theta=s,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ve(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,i,s){return this.radius=Math.sqrt(t*t+i*i+s*s),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,s),this.phi=Math.acos(ve(i/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DM extends yM{constructor(t=10,i=10,s=4473924,l=8947848){s=new _e(s),l=new _e(l);const c=i/2,h=t/i,d=t/2,m=[],p=[];for(let y=0,S=0,T=-d;y<=i;y++,T+=h){m.push(-d,0,T,d,0,T),m.push(T,0,-d,T,0,d);const A=y===c?s:l;A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3,A.toArray(p,S),S+=3}const g=new zn;g.setAttribute("position",new hn(m,3)),g.setAttribute("color",new hn(p,3));const _=new Tv({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class UM extends bs{constructor(t,i=null){super(),this.object=t,this.domElement=i,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function S0(o,t,i,s){const l=LM(s);switch(i){case ov:return o*t;case cv:return o*t/l.components*l.byteLength;case Id:return o*t/l.components*l.byteLength;case uv:return o*t*2/l.components*l.byteLength;case Fd:return o*t*2/l.components*l.byteLength;case lv:return o*t*3/l.components*l.byteLength;case bi:return o*t*4/l.components*l.byteLength;case Hd:return o*t*4/l.components*l.byteLength;case Lc:case Nc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Oc:case Pc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ad:case rd:return Math.max(o,16)*Math.max(t,8)/4;case id:case sd:return Math.max(o,8)*Math.max(t,8)/2;case od:case ld:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case ud:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case fd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case hd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case dd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case pd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case md:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case gd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case _d:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case vd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case xd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case yd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Sd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Md:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Ed:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case zc:case Td:case bd:return Math.ceil(o/4)*Math.ceil(t/4)*16;case fv:case Ad:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Rd:case Cd:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LM(o){switch(o){case zi:case av:return{byteLength:1,components:1};case Fo:case sv:case Xo:return{byteLength:2,components:1};case zd:case Bd:return{byteLength:2,components:4};case Ms:case Pd:case la:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);function Cv(){let o=null,t=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function NM(o){const t=new WeakMap;function i(d,m){const p=d.array,g=d.usage,_=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,g),d.onUploadCallback();let S;if(p instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=o.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=o.SHORT;else if(p instanceof Uint32Array)S=o.UNSIGNED_INT;else if(p instanceof Int32Array)S=o.INT;else if(p instanceof Int8Array)S=o.BYTE;else if(p instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,m,p){const g=m.array,_=m.updateRanges;if(o.bindBuffer(p,d),_.length===0)o.bufferSubData(p,0,g);else{_.sort((S,T)=>S.start-T.start);let y=0;for(let S=1;S<_.length;S++){const T=_[y],A=_[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,_[y]=A)}_.length=y+1;for(let S=0,T=_.length;S<T;S++){const A=_[S];o.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=t.get(d);(!g||g.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:c,update:h}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,FM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HM=`#ifdef USE_AOMAP
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
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VM=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,kM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,XM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qM=`#ifdef USE_IRIDESCENCE
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
#endif`,YM=`#ifdef USE_BUMPMAP
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
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,KM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$M=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iE=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,aE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sE=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uE="gl_FragColor = linearToOutputTexel( gl_FragColor );",fE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pE=`#ifdef USE_ENVMAP
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
#endif`,mE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_E=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SE=`#ifdef USE_GRADIENTMAP
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
}`,ME=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bE=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,AE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,RE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,CE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,LE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NE=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,PE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,HE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kE=`#if defined( USE_POINTS_UV )
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
#endif`,XE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,WE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
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
#endif`,KE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,$E=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nT=`#ifdef USE_NORMALMAP
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
#endif`,iT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_T=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,vT=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,xT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yT=`#ifdef USE_SKINNING
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
#endif`,ST=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MT=`#ifdef USE_SKINNING
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
#endif`,ET=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RT=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,CT=`#ifdef USE_TRANSMISSION
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
#endif`,wT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,OT=`uniform sampler2D t2D;
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
}`,PT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FT=`#include <common>
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
}`,HT=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,GT=`#define DISTANCE
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
}`,VT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jT=`uniform float scale;
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
}`,WT=`uniform vec3 diffuse;
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
}`,qT=`#include <common>
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
}`,YT=`uniform vec3 diffuse;
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
}`,ZT=`#define LAMBERT
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
}`,KT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,QT=`#define MATCAP
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
}`,JT=`#define MATCAP
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
}`,$T=`#define NORMAL
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
}`,tb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eb=`#define PHONG
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
}`,nb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,ib=`#define STANDARD
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
}`,ab=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,sb=`#define TOON
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
}`,rb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,ob=`uniform float size;
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
}`,lb=`uniform vec3 diffuse;
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
}`,cb=`#include <common>
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
}`,ub=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,fb=`uniform float rotation;
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
}`,hb=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:OM,alphahash_pars_fragment:PM,alphamap_fragment:zM,alphamap_pars_fragment:BM,alphatest_fragment:IM,alphatest_pars_fragment:FM,aomap_fragment:HM,aomap_pars_fragment:GM,batching_pars_vertex:VM,batching_vertex:kM,begin_vertex:XM,beginnormal_vertex:jM,bsdfs:WM,iridescence_fragment:qM,bumpmap_pars_fragment:YM,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:KM,clipping_planes_pars_vertex:QM,clipping_planes_vertex:JM,color_fragment:$M,color_pars_fragment:tE,color_pars_vertex:eE,color_vertex:nE,common:iE,cube_uv_reflection_fragment:aE,defaultnormal_vertex:sE,displacementmap_pars_vertex:rE,displacementmap_vertex:oE,emissivemap_fragment:lE,emissivemap_pars_fragment:cE,colorspace_fragment:uE,colorspace_pars_fragment:fE,envmap_fragment:hE,envmap_common_pars_fragment:dE,envmap_pars_fragment:pE,envmap_pars_vertex:mE,envmap_physical_pars_fragment:AE,envmap_vertex:gE,fog_vertex:_E,fog_pars_vertex:vE,fog_fragment:xE,fog_pars_fragment:yE,gradientmap_pars_fragment:SE,lightmap_pars_fragment:ME,lights_lambert_fragment:EE,lights_lambert_pars_fragment:TE,lights_pars_begin:bE,lights_toon_fragment:RE,lights_toon_pars_fragment:CE,lights_phong_fragment:wE,lights_phong_pars_fragment:DE,lights_physical_fragment:UE,lights_physical_pars_fragment:LE,lights_fragment_begin:NE,lights_fragment_maps:OE,lights_fragment_end:PE,logdepthbuf_fragment:zE,logdepthbuf_pars_fragment:BE,logdepthbuf_pars_vertex:IE,logdepthbuf_vertex:FE,map_fragment:HE,map_pars_fragment:GE,map_particle_fragment:VE,map_particle_pars_fragment:kE,metalnessmap_fragment:XE,metalnessmap_pars_fragment:jE,morphinstance_vertex:WE,morphcolor_vertex:qE,morphnormal_vertex:YE,morphtarget_pars_vertex:ZE,morphtarget_vertex:KE,normal_fragment_begin:QE,normal_fragment_maps:JE,normal_pars_fragment:$E,normal_pars_vertex:tT,normal_vertex:eT,normalmap_pars_fragment:nT,clearcoat_normal_fragment_begin:iT,clearcoat_normal_fragment_maps:aT,clearcoat_pars_fragment:sT,iridescence_pars_fragment:rT,opaque_fragment:oT,packing:lT,premultiplied_alpha_fragment:cT,project_vertex:uT,dithering_fragment:fT,dithering_pars_fragment:hT,roughnessmap_fragment:dT,roughnessmap_pars_fragment:pT,shadowmap_pars_fragment:mT,shadowmap_pars_vertex:gT,shadowmap_vertex:_T,shadowmask_pars_fragment:vT,skinbase_vertex:xT,skinning_pars_vertex:yT,skinning_vertex:ST,skinnormal_vertex:MT,specularmap_fragment:ET,specularmap_pars_fragment:TT,tonemapping_fragment:bT,tonemapping_pars_fragment:AT,transmission_fragment:RT,transmission_pars_fragment:CT,uv_pars_fragment:wT,uv_pars_vertex:DT,uv_vertex:UT,worldpos_vertex:LT,background_vert:NT,background_frag:OT,backgroundCube_vert:PT,backgroundCube_frag:zT,cube_vert:BT,cube_frag:IT,depth_vert:FT,depth_frag:HT,distanceRGBA_vert:GT,distanceRGBA_frag:VT,equirect_vert:kT,equirect_frag:XT,linedashed_vert:jT,linedashed_frag:WT,meshbasic_vert:qT,meshbasic_frag:YT,meshlambert_vert:ZT,meshlambert_frag:KT,meshmatcap_vert:QT,meshmatcap_frag:JT,meshnormal_vert:$T,meshnormal_frag:tb,meshphong_vert:eb,meshphong_frag:nb,meshphysical_vert:ib,meshphysical_frag:ab,meshtoon_vert:sb,meshtoon_frag:rb,points_vert:ob,points_frag:lb,shadow_vert:cb,shadow_frag:ub,sprite_vert:fb,sprite_frag:hb},Pt={common:{diffuse:{value:new _e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new _e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new _e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new _e(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new _e(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Pn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new _e(0)},specular:{value:new _e(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Pn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new _e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Pn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new _e(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Pn([Pt.points,Pt.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Pn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Pn([Pt.common,Pt.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Pn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Pn([Pt.sprite,Pt.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Pn([Pt.common,Pt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Pn([Pt.lights,Pt.fog,{color:{value:new _e(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new _e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new _e(0)},specularColor:{value:new _e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const Cc={r:0,b:0,g:0},ms=new Bi,db=new Qe;function pb(o,t,i,s,l,c,h){const d=new _e(0);let m=c===!0?0:1,p,g,_=null,y=0,S=null;function T(N){let D=N.isScene===!0?N.background:null;return D&&D.isTexture&&(D=(N.backgroundBlurriness>0?i:t).get(D)),D}function A(N){let D=!1;const V=T(N);V===null?v(d,m):V&&V.isColor&&(v(V,1),D=!0);const H=o.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,h):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,D){const V=T(D);V&&(V.isCubeTexture||V.mapping===Wc)?(g===void 0&&(g=new jn(new Yo(1,1,1),new ja({name:"BackgroundCubeMaterial",uniforms:Nr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(H,P,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),ms.copy(D.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(db.makeRotationFromEuler(ms)),g.material.toneMapped=De.getTransfer(V.colorSpace)!==He,(_!==V||y!==V.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,_=V,y=V.version,S=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(p===void 0&&(p=new jn(new Yc(2,2),new ja({name:"BackgroundMaterial",uniforms:Nr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Xa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=V,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=De.getTransfer(V.colorSpace)!==He,V.matrixAutoUpdate===!0&&V.updateMatrix(),p.material.uniforms.uvTransform.value.copy(V.matrix),(_!==V||y!==V.version||S!==o.toneMapping)&&(p.material.needsUpdate=!0,_=V,y=V.version,S=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function v(N,D){N.getRGB(Cc,Sv(o)),s.buffers.color.setClear(Cc.r,Cc.g,Cc.b,D,h)}function G(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,D=1){d.set(N),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,v(d,m)},render:A,addToRenderList:M,dispose:G}}function mb(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,h=!1;function d(C,z,st,ot,ct){let ht=!1;const O=_(ot,st,z);c!==O&&(c=O,p(c.object)),ht=S(C,ot,st,ct),ht&&T(C,ot,st,ct),ct!==null&&t.update(ct,o.ELEMENT_ARRAY_BUFFER),(ht||h)&&(h=!1,D(C,z,st,ot),ct!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ct).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function _(C,z,st){const ot=st.wireframe===!0;let ct=s[C.id];ct===void 0&&(ct={},s[C.id]=ct);let ht=ct[z.id];ht===void 0&&(ht={},ct[z.id]=ht);let O=ht[ot];return O===void 0&&(O=y(m()),ht[ot]=O),O}function y(C){const z=[],st=[],ot=[];for(let ct=0;ct<i;ct++)z[ct]=0,st[ct]=0,ot[ct]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:st,attributeDivisors:ot,object:C,attributes:{},index:null}}function S(C,z,st,ot){const ct=c.attributes,ht=z.attributes;let O=0;const Z=st.getAttributes();for(const q in Z)if(Z[q].location>=0){const Et=ct[q];let L=ht[q];if(L===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),Et===void 0||Et.attribute!==L||L&&Et.data!==L.data)return!0;O++}return c.attributesNum!==O||c.index!==ot}function T(C,z,st,ot){const ct={},ht=z.attributes;let O=0;const Z=st.getAttributes();for(const q in Z)if(Z[q].location>=0){let Et=ht[q];Et===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor));const L={};L.attribute=Et,Et&&Et.data&&(L.data=Et.data),ct[q]=L,O++}c.attributes=ct,c.attributesNum=O,c.index=ot}function A(){const C=c.newAttributes;for(let z=0,st=C.length;z<st;z++)C[z]=0}function M(C){v(C,0)}function v(C,z){const st=c.newAttributes,ot=c.enabledAttributes,ct=c.attributeDivisors;st[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),ct[C]!==z&&(o.vertexAttribDivisor(C,z),ct[C]=z)}function G(){const C=c.newAttributes,z=c.enabledAttributes;for(let st=0,ot=z.length;st<ot;st++)z[st]!==C[st]&&(o.disableVertexAttribArray(st),z[st]=0)}function N(C,z,st,ot,ct,ht,O){O===!0?o.vertexAttribIPointer(C,z,st,ct,ht):o.vertexAttribPointer(C,z,st,ot,ct,ht)}function D(C,z,st,ot){A();const ct=ot.attributes,ht=st.getAttributes(),O=z.defaultAttributeValues;for(const Z in ht){const q=ht[Z];if(q.location>=0){let mt=ct[Z];if(mt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(mt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(mt=C.instanceColor)),mt!==void 0){const Et=mt.normalized,L=mt.itemSize,nt=t.get(mt);if(nt===void 0)continue;const Mt=nt.buffer,wt=nt.type,J=nt.bytesPerElement,xt=wt===o.INT||wt===o.UNSIGNED_INT||mt.gpuType===Pd;if(mt.isInterleavedBufferAttribute){const _t=mt.data,vt=_t.stride,At=mt.offset;if(_t.isInstancedInterleavedBuffer){for(let It=0;It<q.locationSize;It++)v(q.location+It,_t.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let It=0;It<q.locationSize;It++)M(q.location+It);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let It=0;It<q.locationSize;It++)N(q.location+It,L/q.locationSize,wt,Et,vt*J,(At+L/q.locationSize*It)*J,xt)}else{if(mt.isInstancedBufferAttribute){for(let _t=0;_t<q.locationSize;_t++)v(q.location+_t,mt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let _t=0;_t<q.locationSize;_t++)M(q.location+_t);o.bindBuffer(o.ARRAY_BUFFER,Mt);for(let _t=0;_t<q.locationSize;_t++)N(q.location+_t,L/q.locationSize,wt,Et,L*J,L/q.locationSize*_t*J,xt)}}else if(O!==void 0){const Et=O[Z];if(Et!==void 0)switch(Et.length){case 2:o.vertexAttrib2fv(q.location,Et);break;case 3:o.vertexAttrib3fv(q.location,Et);break;case 4:o.vertexAttrib4fv(q.location,Et);break;default:o.vertexAttrib1fv(q.location,Et)}}}}G()}function V(){j();for(const C in s){const z=s[C];for(const st in z){const ot=z[st];for(const ct in ot)g(ot[ct].object),delete ot[ct];delete z[st]}delete s[C]}}function H(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const st in z){const ot=z[st];for(const ct in ot)g(ot[ct].object),delete ot[ct];delete z[st]}delete s[C.id]}function P(C){for(const z in s){const st=s[z];if(st[C.id]===void 0)continue;const ot=st[C.id];for(const ct in ot)g(ot[ct].object),delete ot[ct];delete st[C.id]}}function j(){w(),h=!0,c!==l&&(c=l,p(c.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:j,resetDefaultState:w,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:G}}function gb(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function h(p,g,_){_!==0&&(o.drawArraysInstanced(s,p,g,_),i.update(g,s,_))}function d(p,g,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let S=0;for(let T=0;T<_;T++)S+=g[T];i.update(S,s,1)}function m(p,g,_,y){if(_===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<p.length;T++)h(p[T],g[T],y[T]);else{S.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,_);let T=0;for(let A=0;A<_;A++)T+=g[A]*y[A];i.update(T,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function _b(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==bi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const j=P===Xo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==zi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==la&&!j)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),G=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),V=T>0,H=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:y,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:G,maxVaryings:N,maxFragmentUniforms:D,vertexTextures:V,maxSamples:H}}function vb(o){const t=this;let i=null,s=0,l=!1,c=!1;const h=new Ha,d=new pe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const S=_.length!==0||y||s!==0||l;return l=y,s=_.length,S},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,y){i=g(_,y,0)},this.setState=function(_,y,S){const T=_.clippingPlanes,A=_.clipIntersection,M=_.clipShadows,v=o.get(_);if(!l||T===null||T.length===0||c&&!M)c?g(null):p();else{const G=c?0:s,N=G*4;let D=v.clippingState||null;m.value=D,D=g(T,y,N,S);for(let V=0;V!==N;++V)D[V]=i[V];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=G}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(_,y,S,T){const A=_!==null?_.length:0;let M=null;if(A!==0){if(M=m.value,T!==!0||M===null){const v=S+A*4,G=y.matrixWorldInverse;d.getNormalMatrix(G),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,D=S;N!==A;++N,D+=4)h.copy(_[N]).applyMatrix4(G,d),h.normal.toArray(M,D),M[D+3]=h.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function xb(o){let t=new WeakMap;function i(h,d){return d===$h?h.mapping=Dr:d===td&&(h.mapping=Ur),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===$h||d===td)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new dM(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Tr=4,M0=[.125,.215,.35,.446,.526,.582],xs=20,zh=new Rv,E0=new _e;let Bh=null,Ih=0,Fh=0,Hh=!1;const _s=(1+Math.sqrt(5))/2,Mr=1/_s,T0=[new Y(-_s,Mr,0),new Y(_s,Mr,0),new Y(-Mr,0,_s),new Y(Mr,0,_s),new Y(0,_s,-Mr),new Y(0,_s,Mr),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],yb=new Y;class b0{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=yb}=c;Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=C0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=R0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Ih,Fh),this._renderer.xr.enabled=Hh,t.scissorTest=!1,wc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Dr||t.mapping===Ur?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Ih=this._renderer.getActiveCubeFace(),Fh=this._renderer.getActiveMipmapLevel(),Hh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Xo,format:bi,colorSpace:Lr,depthBuffer:!1},l=A0(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=A0(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sb(c)),this._blurMaterial=Mb(c,t,i)}return l}_compileMaterial(t){const i=new jn(this._lodPlanes[0],t);this._renderer.compile(i,zh)}_sceneToCubeUV(t,i,s,l,c){const m=new si(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],_=this._renderer,y=_.autoClear,S=_.toneMapping;_.getClearColor(E0),_.toneMapping=ka,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null));const A=new vv({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),M=new jn(new Yo,A);let v=!1;const G=t.background;G?G.isColor&&(A.color.copy(G),t.background=null,v=!0):(A.color.copy(E0),v=!0);for(let N=0;N<6;N++){const D=N%3;D===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):D===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const V=this._cubeSize;wc(l,D*V,N>2?V:0,V,V),_.setRenderTarget(l),v&&_.render(M,m),_.render(t,m)}M.geometry.dispose(),M.material.dispose(),_.toneMapping=S,_.autoClear=y,t.background=G}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Dr||t.mapping===Ur;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=C0()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=R0());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new jn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const m=this._cubeSize;wc(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(h,zh)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=T0[(l-c-1)%T0.length];this._blur(t,c-1,c,h,d)}i.autoClear=s}_blur(t,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",c),this._halfBlur(h,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new jn(this._lodPlanes[l],p),y=p.uniforms,S=this._sizeLods[s]-1,T=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*xs-1),A=c/T,M=isFinite(c)?1+Math.floor(g*A):xs;M>xs&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${xs}`);const v=[];let G=0;for(let P=0;P<xs;++P){const j=P/A,w=Math.exp(-j*j/2);v.push(w),P===0?G+=w:P<M&&(G+=2*w)}for(let P=0;P<v.length;P++)v[P]=v[P]/G;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=v,y.latitudinal.value=h==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:N}=this;y.dTheta.value=T,y.mipInt.value=N-s;const D=this._sizeLods[l],V=3*D*(l>N-Tr?l-N+Tr:0),H=4*(this._cubeSize-D);wc(i,V,H,3*D,2*D),m.setRenderTarget(i),m.render(_,zh)}}function Sb(o){const t=[],i=[],s=[];let l=o;const c=o-Tr+1+M0.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-Tr?m=M0[h-o+Tr-1]:h===0&&(m=0),s.push(m);const p=1/(d-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,T=6,A=3,M=2,v=1,G=new Float32Array(A*T*S),N=new Float32Array(M*T*S),D=new Float32Array(v*T*S);for(let H=0;H<S;H++){const P=H%3*2/3-1,j=H>2?0:-1,w=[P,j,0,P+2/3,j,0,P+2/3,j+1,0,P,j,0,P+2/3,j+1,0,P,j+1,0];G.set(w,A*T*H),N.set(y,M*T*H);const C=[H,H,H,H,H,H];D.set(C,v*T*H)}const V=new zn;V.setAttribute("position",new gi(G,A)),V.setAttribute("uv",new gi(N,M)),V.setAttribute("faceIndex",new gi(D,v)),t.push(V),l>Tr&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function A0(o,t,i){const s=new Ts(o,t,i);return s.texture.mapping=Wc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function wc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function Mb(o,t,i){const s=new Float32Array(xs),l=new Y(0,1,0);return new ja({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function R0(){return new ja({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qd(),fragmentShader:`

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
		`,blending:Va,depthTest:!1,depthWrite:!1})}function C0(){return new ja({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Va,depthTest:!1,depthWrite:!1})}function qd(){return`

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
	`}function Eb(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===$h||m===td,g=m===Dr||m===Ur;if(p||g){let _=t.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new b0(o)),_=p?i.fromEquirectangular(d,_):i.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return p&&S&&S.height>0||g&&S&&l(S)?(i===null&&(i=new b0(o)),_=p?i.fromEquirectangular(d):i.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,t.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function l(d){let m=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&m++;return m===p}function c(d){const m=d.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function Tb(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Rr("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function bb(o,t,i,s){const l={},c=new WeakMap;function h(_){const y=_.target;y.index!==null&&t.remove(y.index);for(const T in y.attributes)t.remove(y.attributes[T]);y.removeEventListener("dispose",h),delete l[y.id];const S=c.get(y);S&&(t.remove(S),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(_,y){return l[y.id]===!0||(y.addEventListener("dispose",h),l[y.id]=!0,i.memory.geometries++),y}function m(_){const y=_.attributes;for(const S in y)t.update(y[S],o.ARRAY_BUFFER)}function p(_){const y=[],S=_.index,T=_.attributes.position;let A=0;if(S!==null){const G=S.array;A=S.version;for(let N=0,D=G.length;N<D;N+=3){const V=G[N+0],H=G[N+1],P=G[N+2];y.push(V,H,H,P,P,V)}}else if(T!==void 0){const G=T.array;A=T.version;for(let N=0,D=G.length/3-1;N<D;N+=3){const V=N+0,H=N+1,P=N+2;y.push(V,H,H,P,P,V)}}else return;const M=new(pv(y)?yv:xv)(y,1);M.version=A;const v=c.get(_);v&&t.remove(v),c.set(_,M)}function g(_){const y=c.get(_);if(y){const S=_.index;S!==null&&y.version<S.version&&p(_)}else p(_);return c.get(_)}return{get:d,update:m,getWireframeAttribute:g}}function Ab(o,t,i){let s;function l(y){s=y}let c,h;function d(y){c=y.type,h=y.bytesPerElement}function m(y,S){o.drawElements(s,S,c,y*h),i.update(S,s,1)}function p(y,S,T){T!==0&&(o.drawElementsInstanced(s,S,c,y*h,T),i.update(S,s,T))}function g(y,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,y,0,T);let M=0;for(let v=0;v<T;v++)M+=S[v];i.update(M,s,1)}function _(y,S,T,A){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<y.length;v++)p(y[v]/h,S[v],A[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,y,0,A,0,T);let v=0;for(let G=0;G<T;G++)v+=S[G]*A[G];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function Rb(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Cb(o,t,i){const s=new WeakMap,l=new Ve;function c(h,d,m){const p=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let C=function(){j.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],G=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let D=0;T===!0&&(D=1),A===!0&&(D=2),M===!0&&(D=3);let V=d.attributes.position.count*D,H=1;V>t.maxTextureSize&&(H=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const P=new Float32Array(V*H*4*_),j=new mv(P,V,H,_);j.type=la,j.needsUpdate=!0;const w=D*4;for(let z=0;z<_;z++){const st=v[z],ot=G[z],ct=N[z],ht=V*H*4*z;for(let O=0;O<st.count;O++){const Z=O*w;T===!0&&(l.fromBufferAttribute(st,O),P[ht+Z+0]=l.x,P[ht+Z+1]=l.y,P[ht+Z+2]=l.z,P[ht+Z+3]=0),A===!0&&(l.fromBufferAttribute(ot,O),P[ht+Z+4]=l.x,P[ht+Z+5]=l.y,P[ht+Z+6]=l.z,P[ht+Z+7]=0),M===!0&&(l.fromBufferAttribute(ct,O),P[ht+Z+8]=l.x,P[ht+Z+9]=l.y,P[ht+Z+10]=l.z,P[ht+Z+11]=ct.itemSize===4?l.w:1)}}y={count:_,texture:j,size:new se(V,H)},s.set(d,y),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<p.length;M++)T+=p[M];const A=d.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function wb(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,_=t.get(m,g);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return _}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:h}}const wv=new qn,w0=new bv(1,1),Dv=new mv,Uv=new KS,Lv=new Ev,D0=[],U0=[],L0=new Float32Array(16),N0=new Float32Array(9),O0=new Float32Array(4);function Or(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=D0[l];if(c===void 0&&(c=new Float32Array(l),D0[l]=c),t!==0){s.toArray(c,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(c,d)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Zc(o,t){let i=U0[t];i===void 0&&(i=new Int32Array(t),U0[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Db(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Ub(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function Lb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function Nb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function Ob(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;O0.set(s),o.uniformMatrix2fv(this.addr,!1,O0),_n(i,s)}}function Pb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;N0.set(s),o.uniformMatrix3fv(this.addr,!1,N0),_n(i,s)}}function zb(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;L0.set(s),o.uniformMatrix4fv(this.addr,!1,L0),_n(i,s)}}function Bb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Ib(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function Fb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function Hb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function Gb(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function Vb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function kb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function Xb(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function jb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(w0.compareFunction=dv,c=w0):c=wv,i.setTexture2D(t||c,l)}function Wb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||Uv,l)}function qb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||Lv,l)}function Yb(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||Dv,l)}function Zb(o){switch(o){case 5126:return Db;case 35664:return Ub;case 35665:return Lb;case 35666:return Nb;case 35674:return Ob;case 35675:return Pb;case 35676:return zb;case 5124:case 35670:return Bb;case 35667:case 35671:return Ib;case 35668:case 35672:return Fb;case 35669:case 35673:return Hb;case 5125:return Gb;case 36294:return Vb;case 36295:return kb;case 36296:return Xb;case 35678:case 36198:case 36298:case 36306:case 35682:return jb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return qb;case 36289:case 36303:case 36311:case 36292:return Yb}}function Kb(o,t){o.uniform1fv(this.addr,t)}function Qb(o,t){const i=Or(t,this.size,2);o.uniform2fv(this.addr,i)}function Jb(o,t){const i=Or(t,this.size,3);o.uniform3fv(this.addr,i)}function $b(o,t){const i=Or(t,this.size,4);o.uniform4fv(this.addr,i)}function tA(o,t){const i=Or(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function eA(o,t){const i=Or(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function nA(o,t){const i=Or(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function iA(o,t){o.uniform1iv(this.addr,t)}function aA(o,t){o.uniform2iv(this.addr,t)}function sA(o,t){o.uniform3iv(this.addr,t)}function rA(o,t){o.uniform4iv(this.addr,t)}function oA(o,t){o.uniform1uiv(this.addr,t)}function lA(o,t){o.uniform2uiv(this.addr,t)}function cA(o,t){o.uniform3uiv(this.addr,t)}function uA(o,t){o.uniform4uiv(this.addr,t)}function fA(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||wv,c[h])}function hA(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Uv,c[h])}function dA(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Lv,c[h])}function pA(o,t,i){const s=this.cache,l=t.length,c=Zc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Dv,c[h])}function mA(o){switch(o){case 5126:return Kb;case 35664:return Qb;case 35665:return Jb;case 35666:return $b;case 35674:return tA;case 35675:return eA;case 35676:return nA;case 5124:case 35670:return iA;case 35667:case 35671:return aA;case 35668:case 35672:return sA;case 35669:case 35673:return rA;case 5125:return oA;case 36294:return lA;case 36295:return cA;case 36296:return uA;case 35678:case 36198:case 36298:case 36306:case 35682:return fA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return dA;case 36289:case 36303:case 36311:case 36292:return pA}}class gA{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Zb(i.type)}}class _A{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mA(i.type)}}class vA{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Gh=/(\w+)(\])?(\[|\.)?/g;function P0(o,t){o.seq.push(t),o.map[t.id]=t}function xA(o,t,i){const s=o.name,l=s.length;for(Gh.lastIndex=0;;){const c=Gh.exec(s),h=Gh.lastIndex;let d=c[1];const m=c[2]==="]",p=c[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){P0(i,p===void 0?new gA(d,o,t):new _A(d,o,t));break}else{let _=i.map[d];_===void 0&&(_=new vA(d),P0(i,_)),i=_}}}class Fc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),h=t.getUniformLocation(i,c.name);xA(c,h,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function z0(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const yA=37297;let SA=0;function MA(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const B0=new pe;function EA(o){De._getMatrix(B0,De.workingColorSpace,o);const t=`mat3( ${B0.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Gc:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function I0(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+MA(o.getShaderSource(t),d)}else return c}function TA(o,t){const i=EA(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bA(o,t){let i;switch(t){case ES:i="Linear";break;case TS:i="Reinhard";break;case bS:i="Cineon";break;case AS:i="ACESFilmic";break;case CS:i="AgX";break;case wS:i="Neutral";break;case RS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Dc=new Y;function AA(){De.getLuminanceCoefficients(Dc);const o=Dc.x.toFixed(4),t=Dc.y.toFixed(4),i=Dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function CA(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function wA(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Bo(o){return o!==""}function F0(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function H0(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(o){return o.replace(DA,LA)}const UA=new Map;function LA(o,t){let i=me[t];if(i===void 0){const s=UA.get(t);if(s!==void 0)i=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ld(i)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function G0(o){return o.replace(NA,OA)}function OA(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function V0(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function PA(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===nS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===oa&&(t="SHADOWMAP_TYPE_VSM"),t}function zA(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Dr:case Ur:t="ENVMAP_TYPE_CUBE";break;case Wc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function BA(o){let t="ENVMAP_MODE_REFLECTION";return o.envMap&&o.envMapMode===Ur&&(t="ENVMAP_MODE_REFRACTION"),t}function IA(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case nv:t="ENVMAP_BLENDING_MULTIPLY";break;case SS:t="ENVMAP_BLENDING_MIX";break;case MS:t="ENVMAP_BLENDING_ADD";break}return t}function FA(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function HA(o,t,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=PA(i),p=zA(i),g=BA(i),_=IA(i),y=FA(i),S=RA(i),T=CA(c),A=l.createProgram();let M,v,G=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Bo).join(`
`),v.length>0&&(v+=`
`)):(M=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),v=[V0(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==ka?"#define TONE_MAPPING":"",i.toneMapping!==ka?me.tonemapping_pars_fragment:"",i.toneMapping!==ka?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,TA("linearToOutputTexel",i.outputColorSpace),AA(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Bo).join(`
`)),h=Ld(h),h=F0(h,i),h=H0(h,i),d=Ld(d),d=F0(d,i),d=H0(d,i),h=G0(h),d=G0(d),i.isRawShaderMaterial!==!0&&(G=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===j_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===j_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=G+M+h,D=G+v+d,V=z0(l,l.VERTEX_SHADER,N),H=z0(l,l.FRAGMENT_SHADER,D);l.attachShader(A,V),l.attachShader(A,H),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(z){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(A)||"",ot=l.getShaderInfoLog(V)||"",ct=l.getShaderInfoLog(H)||"",ht=st.trim(),O=ot.trim(),Z=ct.trim();let q=!0,mt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,V,H);else{const Et=I0(l,V,"vertex"),L=I0(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+ht+`
`+Et+`
`+L)}else ht!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ht):(O===""||Z==="")&&(mt=!1);mt&&(z.diagnostics={runnable:q,programLog:ht,vertexShader:{log:O,prefix:M},fragmentShader:{log:Z,prefix:v}})}l.deleteShader(V),l.deleteShader(H),j=new Fc(l,A),w=wA(l,A)}let j;this.getUniforms=function(){return j===void 0&&P(this),j};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(A,yA)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=SA++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=V,this.fragmentShader=H,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new kA(t),i.set(t,s)),s}}class kA{constructor(t){this.id=GA++,this.code=t,this.usedTimes=0}}function XA(o,t,i,s,l,c,h){const d=new gv,m=new VA,p=new Set,g=[],_=l.logarithmicDepthBuffer,y=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(w){return p.add(w),w===0?"uv":`uv${w}`}function M(w,C,z,st,ot){const ct=st.fog,ht=ot.geometry,O=w.isMeshStandardMaterial?st.environment:null,Z=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),q=Z&&Z.mapping===Wc?Z.image.height:null,mt=T[w.type];w.precision!==null&&(S=l.getMaxPrecision(w.precision),S!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",S,"instead."));const Et=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,L=Et!==void 0?Et.length:0;let nt=0;ht.morphAttributes.position!==void 0&&(nt=1),ht.morphAttributes.normal!==void 0&&(nt=2),ht.morphAttributes.color!==void 0&&(nt=3);let Mt,wt,J,xt;if(mt){const Ae=Ni[mt];Mt=Ae.vertexShader,wt=Ae.fragmentShader}else Mt=w.vertexShader,wt=w.fragmentShader,m.update(w),J=m.getVertexShaderID(w),xt=m.getFragmentShaderID(w);const _t=o.getRenderTarget(),vt=o.state.buffers.depth.getReversed(),At=ot.isInstancedMesh===!0,It=ot.isBatchedMesh===!0,ee=!!w.map,ie=!!w.matcap,F=!!Z,oe=!!w.aoMap,Vt=!!w.lightMap,he=!!w.bumpMap,Zt=!!w.normalMap,ke=!!w.displacementMap,Ht=!!w.emissiveMap,ce=!!w.metalnessMap,$e=!!w.roughnessMap,Je=w.anisotropy>0,U=w.clearcoat>0,E=w.dispersion>0,et=w.iridescence>0,dt=w.sheen>0,Tt=w.transmission>0,ut=Je&&!!w.anisotropyMap,Kt=U&&!!w.clearcoatMap,Dt=U&&!!w.clearcoatNormalMap,qt=U&&!!w.clearcoatRoughnessMap,Yt=et&&!!w.iridescenceMap,Rt=et&&!!w.iridescenceThicknessMap,Ut=dt&&!!w.sheenColorMap,Qt=dt&&!!w.sheenRoughnessMap,Bt=!!w.specularMap,Nt=!!w.specularColorMap,ue=!!w.specularIntensityMap,X=Tt&&!!w.transmissionMap,Ct=Tt&&!!w.thicknessMap,Lt=!!w.gradientMap,Ft=!!w.alphaMap,bt=w.alphaTest>0,yt=!!w.alphaHash,Gt=!!w.extensions;let re=ka;w.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(re=o.toneMapping);const Oe={shaderID:mt,shaderType:w.type,shaderName:w.name,vertexShader:Mt,fragmentShader:wt,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:xt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:S,batching:It,batchingColor:It&&ot._colorsTexture!==null,instancing:At,instancingColor:At&&ot.instanceColor!==null,instancingMorph:At&&ot.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_t===null?o.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:Lr,alphaToCoverage:!!w.alphaToCoverage,map:ee,matcap:ie,envMap:F,envMapMode:F&&Z.mapping,envMapCubeUVHeight:q,aoMap:oe,lightMap:Vt,bumpMap:he,normalMap:Zt,displacementMap:y&&ke,emissiveMap:Ht,normalMapObjectSpace:Zt&&w.normalMapType===NS,normalMapTangentSpace:Zt&&w.normalMapType===hv,metalnessMap:ce,roughnessMap:$e,anisotropy:Je,anisotropyMap:ut,clearcoat:U,clearcoatMap:Kt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:qt,dispersion:E,iridescence:et,iridescenceMap:Yt,iridescenceThicknessMap:Rt,sheen:dt,sheenColorMap:Ut,sheenRoughnessMap:Qt,specularMap:Bt,specularColorMap:Nt,specularIntensityMap:ue,transmission:Tt,transmissionMap:X,thicknessMap:Ct,gradientMap:Lt,opaque:w.transparent===!1&&w.blending===Ar&&w.alphaToCoverage===!1,alphaMap:Ft,alphaTest:bt,alphaHash:yt,combine:w.combine,mapUv:ee&&A(w.map.channel),aoMapUv:oe&&A(w.aoMap.channel),lightMapUv:Vt&&A(w.lightMap.channel),bumpMapUv:he&&A(w.bumpMap.channel),normalMapUv:Zt&&A(w.normalMap.channel),displacementMapUv:ke&&A(w.displacementMap.channel),emissiveMapUv:Ht&&A(w.emissiveMap.channel),metalnessMapUv:ce&&A(w.metalnessMap.channel),roughnessMapUv:$e&&A(w.roughnessMap.channel),anisotropyMapUv:ut&&A(w.anisotropyMap.channel),clearcoatMapUv:Kt&&A(w.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&A(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qt&&A(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Yt&&A(w.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&A(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&A(w.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&A(w.sheenRoughnessMap.channel),specularMapUv:Bt&&A(w.specularMap.channel),specularColorMapUv:Nt&&A(w.specularColorMap.channel),specularIntensityMapUv:ue&&A(w.specularIntensityMap.channel),transmissionMapUv:X&&A(w.transmissionMap.channel),thicknessMapUv:Ct&&A(w.thicknessMap.channel),alphaMapUv:Ft&&A(w.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(Zt||Je),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ht.attributes.uv&&(ee||Ft),fog:!!ct,useFog:w.fog===!0,fogExp2:!!ct&&ct.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:vt,skinning:ot.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:nt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&z.length>0,shadowMapType:o.shadowMap.type,toneMapping:re,decodeVideoTexture:ee&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===He,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===He,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===Wn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Gt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Gt&&w.extensions.multiDraw===!0||It)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Oe.vertexUv1s=p.has(1),Oe.vertexUv2s=p.has(2),Oe.vertexUv3s=p.has(3),p.clear(),Oe}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const z in w.defines)C.push(z),C.push(w.defines[z]);return w.isRawShaderMaterial===!1&&(G(C,w),N(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function G(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function N(w,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const C=T[w.type];let z;if(C){const st=Ni[C];z=cM.clone(st.uniforms)}else z=w.uniforms;return z}function V(w,C){let z;for(let st=0,ot=g.length;st<ot;st++){const ct=g[st];if(ct.cacheKey===C){z=ct,++z.usedTimes;break}}return z===void 0&&(z=new HA(o,C,w,c),g.push(z)),z}function H(w){if(--w.usedTimes===0){const C=g.indexOf(w);g[C]=g[g.length-1],g.pop(),w.destroy()}}function P(w){m.remove(w)}function j(){m.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:D,acquireProgram:V,releaseProgram:H,releaseShaderCache:P,programs:g,dispose:j}}function jA(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function WA(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function k0(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function X0(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function h(_,y,S,T,A,M){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:y,material:S,groupOrder:T,renderOrder:_.renderOrder,z:A,group:M},o[t]=v):(v.id=_.id,v.object=_,v.geometry=y,v.material=S,v.groupOrder=T,v.renderOrder=_.renderOrder,v.z=A,v.group=M),t++,v}function d(_,y,S,T,A,M){const v=h(_,y,S,T,A,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function m(_,y,S,T,A,M){const v=h(_,y,S,T,A,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,y){i.length>1&&i.sort(_||WA),s.length>1&&s.sort(y||k0),l.length>1&&l.sort(y||k0)}function g(){for(let _=t,y=o.length;_<y;_++){const S=o[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:m,finish:g,sort:p}}function qA(){let o=new WeakMap;function t(s,l){const c=o.get(s);let h;return c===void 0?(h=new X0,o.set(s,[h])):l>=c.length?(h=new X0,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function YA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new Y,color:new _e};break;case"SpotLight":i={position:new Y,direction:new Y,color:new _e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new _e,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new _e,groundColor:new _e};break;case"RectAreaLight":i={color:new _e,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[t.id]=i,i}}}function ZA(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let KA=0;function QA(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function JA(o){const t=new YA,i=ZA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new Y);const l=new Y,c=new Qe,h=new Qe;function d(p){let g=0,_=0,y=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let S=0,T=0,A=0,M=0,v=0,G=0,N=0,D=0,V=0,H=0,P=0;p.sort(QA);for(let w=0,C=p.length;w<C;w++){const z=p[w],st=z.color,ot=z.intensity,ct=z.distance,ht=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=st.r*ot,_+=st.g*ot,y+=st.b*ot;else if(z.isLightProbe){for(let O=0;O<9;O++)s.probe[O].addScaledVector(z.sh.coefficients[O],ot);P++}else if(z.isDirectionalLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Z=z.shadow,q=i.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.directionalShadow[S]=q,s.directionalShadowMap[S]=ht,s.directionalShadowMatrix[S]=z.shadow.matrix,G++}s.directional[S]=O,S++}else if(z.isSpotLight){const O=t.get(z);O.position.setFromMatrixPosition(z.matrixWorld),O.color.copy(st).multiplyScalar(ot),O.distance=ct,O.coneCos=Math.cos(z.angle),O.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),O.decay=z.decay,s.spot[A]=O;const Z=z.shadow;if(z.map&&(s.spotLightMap[V]=z.map,V++,Z.updateMatrices(z),z.castShadow&&H++),s.spotLightMatrix[A]=Z.matrix,z.castShadow){const q=i.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,s.spotShadow[A]=q,s.spotShadowMap[A]=ht,D++}A++}else if(z.isRectAreaLight){const O=t.get(z);O.color.copy(st).multiplyScalar(ot),O.halfWidth.set(z.width*.5,0,0),O.halfHeight.set(0,z.height*.5,0),s.rectArea[M]=O,M++}else if(z.isPointLight){const O=t.get(z);if(O.color.copy(z.color).multiplyScalar(z.intensity),O.distance=z.distance,O.decay=z.decay,z.castShadow){const Z=z.shadow,q=i.get(z);q.shadowIntensity=Z.intensity,q.shadowBias=Z.bias,q.shadowNormalBias=Z.normalBias,q.shadowRadius=Z.radius,q.shadowMapSize=Z.mapSize,q.shadowCameraNear=Z.camera.near,q.shadowCameraFar=Z.camera.far,s.pointShadow[T]=q,s.pointShadowMap[T]=ht,s.pointShadowMatrix[T]=z.shadow.matrix,N++}s.point[T]=O,T++}else if(z.isHemisphereLight){const O=t.get(z);O.skyColor.copy(z.color).multiplyScalar(ot),O.groundColor.copy(z.groundColor).multiplyScalar(ot),s.hemi[v]=O,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;const j=s.hash;(j.directionalLength!==S||j.pointLength!==T||j.spotLength!==A||j.rectAreaLength!==M||j.hemiLength!==v||j.numDirectionalShadows!==G||j.numPointShadows!==N||j.numSpotShadows!==D||j.numSpotMaps!==V||j.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=v,s.directionalShadow.length=G,s.directionalShadowMap.length=G,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=G,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=D+V-H,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,j.directionalLength=S,j.pointLength=T,j.spotLength=A,j.rectAreaLength=M,j.hemiLength=v,j.numDirectionalShadows=G,j.numPointShadows=N,j.numSpotShadows=D,j.numSpotMaps=V,j.numLightProbes=P,s.version=KA++)}function m(p,g){let _=0,y=0,S=0,T=0,A=0;const M=g.matrixWorldInverse;for(let v=0,G=p.length;v<G;v++){const N=p[v];if(N.isDirectionalLight){const D=s.directional[_];D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),_++}else if(N.isSpotLight){const D=s.spot[S];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),D.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const D=s.rectArea[T];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),D.halfWidth.set(N.width*.5,0,0),D.halfHeight.set(0,N.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),T++}else if(N.isPointLight){const D=s.point[y];D.position.setFromMatrixPosition(N.matrixWorld),D.position.applyMatrix4(M),y++}else if(N.isHemisphereLight){const D=s.hemi[A];D.direction.setFromMatrixPosition(N.matrixWorld),D.direction.transformDirection(M),A++}}}return{setup:d,setupView:m,state:s}}function j0(o){const t=new JA(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:c,pushShadow:h}}function $A(o){let t=new WeakMap;function i(l,c=0){const h=t.get(l);let d;return h===void 0?(d=new j0(o),t.set(l,[d])):c>=h.length?(d=new j0(o),h.push(d)):d=h[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n1(o,t,i){let s=new kd;const l=new se,c=new se,h=new Ve,d=new SM({depthPacking:LS}),m=new MM,p={},g=i.maxTextureSize,_={[Xa]:Wn,[Wn]:Xa,[Ei]:Ei},y=new ja({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:t1,fragmentShader:e1}),S=y.clone();S.defines.HORIZONTAL_PASS=1;const T=new zn;T.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new jn(T,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let v=this.type;this.render=function(H,P,j){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),z=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Va),st.buffers.depth.getReversed()?st.buffers.color.setClear(0,0,0,0):st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const ot=v!==oa&&this.type===oa,ct=v===oa&&this.type!==oa;for(let ht=0,O=H.length;ht<O;ht++){const Z=H[ht],q=Z.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const mt=q.getFrameExtents();if(l.multiply(mt),c.copy(q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/mt.x),l.x=c.x*mt.x,q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/mt.y),l.y=c.y*mt.y,q.mapSize.y=c.y)),q.map===null||ot===!0||ct===!0){const L=this.type!==oa?{minFilter:Ai,magFilter:Ai}:{};q.map!==null&&q.map.dispose(),q.map=new Ts(l.x,l.y,L),q.map.texture.name=Z.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Et=q.getViewportCount();for(let L=0;L<Et;L++){const nt=q.getViewport(L);h.set(c.x*nt.x,c.y*nt.y,c.x*nt.z,c.y*nt.w),st.viewport(h),q.updateMatrices(Z,L),s=q.getFrustum(),D(P,j,q.camera,Z,this.type)}q.isPointLightShadow!==!0&&this.type===oa&&G(q,j),q.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(w,C,z)};function G(H,P){const j=t.update(A);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,S.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,S.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Ts(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,o.setRenderTarget(H.mapPass),o.clear(),o.renderBufferDirect(P,null,j,y,A,null),S.uniforms.shadow_pass.value=H.mapPass.texture,S.uniforms.resolution.value=H.mapSize,S.uniforms.radius.value=H.radius,o.setRenderTarget(H.map),o.clear(),o.renderBufferDirect(P,null,j,S,A,null)}function N(H,P,j,w){let C=null;const z=j.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(z!==void 0)C=z;else if(C=j.isPointLight===!0?m:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const st=C.uuid,ot=P.uuid;let ct=p[st];ct===void 0&&(ct={},p[st]=ct);let ht=ct[ot];ht===void 0&&(ht=C.clone(),ct[ot]=ht,P.addEventListener("dispose",V)),C=ht}if(C.visible=P.visible,C.wireframe=P.wireframe,w===oa?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:_[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const st=o.properties.get(C);st.light=j}return C}function D(H,P,j,w,C){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&C===oa)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,H.matrixWorld);const ot=t.update(H),ct=H.material;if(Array.isArray(ct)){const ht=ot.groups;for(let O=0,Z=ht.length;O<Z;O++){const q=ht[O],mt=ct[q.materialIndex];if(mt&&mt.visible){const Et=N(H,mt,w,C);H.onBeforeShadow(o,H,P,j,ot,Et,q),o.renderBufferDirect(j,null,ot,Et,H,q),H.onAfterShadow(o,H,P,j,ot,Et,q)}}}else if(ct.visible){const ht=N(H,ct,w,C);H.onBeforeShadow(o,H,P,j,ot,ht,null),o.renderBufferDirect(j,null,ot,ht,H,null),H.onAfterShadow(o,H,P,j,ot,ht,null)}}const st=H.children;for(let ot=0,ct=st.length;ot<ct;ot++)D(st[ot],P,j,w,C)}function V(H){H.target.removeEventListener("dispose",V);for(const j in p){const w=p[j],C=H.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const i1={[Wh]:qh,[Yh]:Qh,[Zh]:Jh,[wr]:Kh,[qh]:Wh,[Qh]:Yh,[Jh]:Zh,[Kh]:wr};function a1(o,t){function i(){let X=!1;const Ct=new Ve;let Lt=null;const Ft=new Ve(0,0,0,0);return{setMask:function(bt){Lt!==bt&&!X&&(o.colorMask(bt,bt,bt,bt),Lt=bt)},setLocked:function(bt){X=bt},setClear:function(bt,yt,Gt,re,Oe){Oe===!0&&(bt*=re,yt*=re,Gt*=re),Ct.set(bt,yt,Gt,re),Ft.equals(Ct)===!1&&(o.clearColor(bt,yt,Gt,re),Ft.copy(Ct))},reset:function(){X=!1,Lt=null,Ft.set(-1,0,0,0)}}}function s(){let X=!1,Ct=!1,Lt=null,Ft=null,bt=null;return{setReversed:function(yt){if(Ct!==yt){const Gt=t.get("EXT_clip_control");yt?Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.ZERO_TO_ONE_EXT):Gt.clipControlEXT(Gt.LOWER_LEFT_EXT,Gt.NEGATIVE_ONE_TO_ONE_EXT),Ct=yt;const re=bt;bt=null,this.setClear(re)}},getReversed:function(){return Ct},setTest:function(yt){yt?_t(o.DEPTH_TEST):vt(o.DEPTH_TEST)},setMask:function(yt){Lt!==yt&&!X&&(o.depthMask(yt),Lt=yt)},setFunc:function(yt){if(Ct&&(yt=i1[yt]),Ft!==yt){switch(yt){case Wh:o.depthFunc(o.NEVER);break;case qh:o.depthFunc(o.ALWAYS);break;case Yh:o.depthFunc(o.LESS);break;case wr:o.depthFunc(o.LEQUAL);break;case Zh:o.depthFunc(o.EQUAL);break;case Kh:o.depthFunc(o.GEQUAL);break;case Qh:o.depthFunc(o.GREATER);break;case Jh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ft=yt}},setLocked:function(yt){X=yt},setClear:function(yt){bt!==yt&&(Ct&&(yt=1-yt),o.clearDepth(yt),bt=yt)},reset:function(){X=!1,Lt=null,Ft=null,bt=null,Ct=!1}}}function l(){let X=!1,Ct=null,Lt=null,Ft=null,bt=null,yt=null,Gt=null,re=null,Oe=null;return{setTest:function(Ae){X||(Ae?_t(o.STENCIL_TEST):vt(o.STENCIL_TEST))},setMask:function(Ae){Ct!==Ae&&!X&&(o.stencilMask(Ae),Ct=Ae)},setFunc:function(Ae,Ln,ri){(Lt!==Ae||Ft!==Ln||bt!==ri)&&(o.stencilFunc(Ae,Ln,ri),Lt=Ae,Ft=Ln,bt=ri)},setOp:function(Ae,Ln,ri){(yt!==Ae||Gt!==Ln||re!==ri)&&(o.stencilOp(Ae,Ln,ri),yt=Ae,Gt=Ln,re=ri)},setLocked:function(Ae){X=Ae},setClear:function(Ae){Oe!==Ae&&(o.clearStencil(Ae),Oe=Ae)},reset:function(){X=!1,Ct=null,Lt=null,Ft=null,bt=null,yt=null,Gt=null,re=null,Oe=null}}}const c=new i,h=new s,d=new l,m=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,S=[],T=null,A=!1,M=null,v=null,G=null,N=null,D=null,V=null,H=null,P=new _e(0,0,0),j=0,w=!1,C=null,z=null,st=null,ot=null,ct=null;const ht=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,Z=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=Z>=1):q.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=Z>=2);let mt=null,Et={};const L=o.getParameter(o.SCISSOR_BOX),nt=o.getParameter(o.VIEWPORT),Mt=new Ve().fromArray(L),wt=new Ve().fromArray(nt);function J(X,Ct,Lt,Ft){const bt=new Uint8Array(4),yt=o.createTexture();o.bindTexture(X,yt),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Gt=0;Gt<Lt;Gt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,Ft,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Ct+Gt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return yt}const xt={};xt[o.TEXTURE_2D]=J(o.TEXTURE_2D,o.TEXTURE_2D,1),xt[o.TEXTURE_CUBE_MAP]=J(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[o.TEXTURE_2D_ARRAY]=J(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),xt[o.TEXTURE_3D]=J(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),_t(o.DEPTH_TEST),h.setFunc(wr),he(!1),Zt(F_),_t(o.CULL_FACE),oe(Va);function _t(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function vt(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function At(X,Ct){return _[X]!==Ct?(o.bindFramebuffer(X,Ct),_[X]=Ct,X===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=Ct),X===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function It(X,Ct){let Lt=S,Ft=!1;if(X){Lt=y.get(Ct),Lt===void 0&&(Lt=[],y.set(Ct,Lt));const bt=X.textures;if(Lt.length!==bt.length||Lt[0]!==o.COLOR_ATTACHMENT0){for(let yt=0,Gt=bt.length;yt<Gt;yt++)Lt[yt]=o.COLOR_ATTACHMENT0+yt;Lt.length=bt.length,Ft=!0}}else Lt[0]!==o.BACK&&(Lt[0]=o.BACK,Ft=!0);Ft&&o.drawBuffers(Lt)}function ee(X){return T!==X?(o.useProgram(X),T=X,!0):!1}const ie={[vs]:o.FUNC_ADD,[aS]:o.FUNC_SUBTRACT,[sS]:o.FUNC_REVERSE_SUBTRACT};ie[rS]=o.MIN,ie[oS]=o.MAX;const F={[lS]:o.ZERO,[cS]:o.ONE,[uS]:o.SRC_COLOR,[Xh]:o.SRC_ALPHA,[gS]:o.SRC_ALPHA_SATURATE,[pS]:o.DST_COLOR,[hS]:o.DST_ALPHA,[fS]:o.ONE_MINUS_SRC_COLOR,[jh]:o.ONE_MINUS_SRC_ALPHA,[mS]:o.ONE_MINUS_DST_COLOR,[dS]:o.ONE_MINUS_DST_ALPHA,[_S]:o.CONSTANT_COLOR,[vS]:o.ONE_MINUS_CONSTANT_COLOR,[xS]:o.CONSTANT_ALPHA,[yS]:o.ONE_MINUS_CONSTANT_ALPHA};function oe(X,Ct,Lt,Ft,bt,yt,Gt,re,Oe,Ae){if(X===Va){A===!0&&(vt(o.BLEND),A=!1);return}if(A===!1&&(_t(o.BLEND),A=!0),X!==iS){if(X!==M||Ae!==w){if((v!==vs||D!==vs)&&(o.blendEquation(o.FUNC_ADD),v=vs,D=vs),Ae)switch(X){case Ar:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case H_:o.blendFunc(o.ONE,o.ONE);break;case G_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case V_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ar:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case H_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case G_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case V_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}G=null,N=null,V=null,H=null,P.set(0,0,0),j=0,M=X,w=Ae}return}bt=bt||Ct,yt=yt||Lt,Gt=Gt||Ft,(Ct!==v||bt!==D)&&(o.blendEquationSeparate(ie[Ct],ie[bt]),v=Ct,D=bt),(Lt!==G||Ft!==N||yt!==V||Gt!==H)&&(o.blendFuncSeparate(F[Lt],F[Ft],F[yt],F[Gt]),G=Lt,N=Ft,V=yt,H=Gt),(re.equals(P)===!1||Oe!==j)&&(o.blendColor(re.r,re.g,re.b,Oe),P.copy(re),j=Oe),M=X,w=!1}function Vt(X,Ct){X.side===Ei?vt(o.CULL_FACE):_t(o.CULL_FACE);let Lt=X.side===Wn;Ct&&(Lt=!Lt),he(Lt),X.blending===Ar&&X.transparent===!1?oe(Va):oe(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ft=X.stencilWrite;d.setTest(Ft),Ft&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?_t(o.SAMPLE_ALPHA_TO_COVERAGE):vt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function Zt(X){X!==tS?(_t(o.CULL_FACE),X!==z&&(X===F_?o.cullFace(o.BACK):X===eS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):vt(o.CULL_FACE),z=X}function ke(X){X!==st&&(O&&o.lineWidth(X),st=X)}function Ht(X,Ct,Lt){X?(_t(o.POLYGON_OFFSET_FILL),(ot!==Ct||ct!==Lt)&&(o.polygonOffset(Ct,Lt),ot=Ct,ct=Lt)):vt(o.POLYGON_OFFSET_FILL)}function ce(X){X?_t(o.SCISSOR_TEST):vt(o.SCISSOR_TEST)}function $e(X){X===void 0&&(X=o.TEXTURE0+ht-1),mt!==X&&(o.activeTexture(X),mt=X)}function Je(X,Ct,Lt){Lt===void 0&&(mt===null?Lt=o.TEXTURE0+ht-1:Lt=mt);let Ft=Et[Lt];Ft===void 0&&(Ft={type:void 0,texture:void 0},Et[Lt]=Ft),(Ft.type!==X||Ft.texture!==Ct)&&(mt!==Lt&&(o.activeTexture(Lt),mt=Lt),o.bindTexture(X,Ct||xt[X]),Ft.type=X,Ft.texture=Ct)}function U(){const X=Et[mt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function et(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ut(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Rt(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ut(X){Mt.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Mt.copy(X))}function Qt(X){wt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),wt.copy(X))}function Bt(X,Ct){let Lt=p.get(Ct);Lt===void 0&&(Lt=new WeakMap,p.set(Ct,Lt));let Ft=Lt.get(X);Ft===void 0&&(Ft=o.getUniformBlockIndex(Ct,X.name),Lt.set(X,Ft))}function Nt(X,Ct){const Ft=p.get(Ct).get(X);m.get(Ct)!==Ft&&(o.uniformBlockBinding(Ct,Ft,X.__bindingPointIndex),m.set(Ct,Ft))}function ue(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},mt=null,Et={},_={},y=new WeakMap,S=[],T=null,A=!1,M=null,v=null,G=null,N=null,D=null,V=null,H=null,P=new _e(0,0,0),j=0,w=!1,C=null,z=null,st=null,ot=null,ct=null,Mt.set(0,0,o.canvas.width,o.canvas.height),wt.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:_t,disable:vt,bindFramebuffer:At,drawBuffers:It,useProgram:ee,setBlending:oe,setMaterial:Vt,setFlipSided:he,setCullFace:Zt,setLineWidth:ke,setPolygonOffset:Ht,setScissorTest:ce,activeTexture:$e,bindTexture:Je,unbindTexture:U,compressedTexImage2D:E,compressedTexImage3D:et,texImage2D:Yt,texImage3D:Rt,updateUBOMapping:Bt,uniformBlockBinding:Nt,texStorage2D:Dt,texStorage3D:qt,texSubImage2D:dt,texSubImage3D:Tt,compressedTexSubImage2D:ut,compressedTexSubImage3D:Kt,scissor:Ut,viewport:Qt,reset:ue}}function s1(o,t,i,s,l,c,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let _;const y=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(U,E){return S?new OffscreenCanvas(U,E):kc("canvas")}function A(U,E,et){let dt=1;const Tt=Je(U);if((Tt.width>et||Tt.height>et)&&(dt=et/Math.max(Tt.width,Tt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ut=Math.floor(dt*Tt.width),Kt=Math.floor(dt*Tt.height);_===void 0&&(_=T(ut,Kt));const Dt=E?T(ut,Kt):_;return Dt.width=ut,Dt.height=Kt,Dt.getContext("2d").drawImage(U,0,0,ut,Kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Tt.width+"x"+Tt.height+") to ("+ut+"x"+Kt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Tt.width+"x"+Tt.height+")."),U;return U}function M(U){return U.generateMipmaps}function v(U){o.generateMipmap(U)}function G(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(U,E,et,dt,Tt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ut=E;if(E===o.RED&&(et===o.FLOAT&&(ut=o.R32F),et===o.HALF_FLOAT&&(ut=o.R16F),et===o.UNSIGNED_BYTE&&(ut=o.R8)),E===o.RED_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.R8UI),et===o.UNSIGNED_SHORT&&(ut=o.R16UI),et===o.UNSIGNED_INT&&(ut=o.R32UI),et===o.BYTE&&(ut=o.R8I),et===o.SHORT&&(ut=o.R16I),et===o.INT&&(ut=o.R32I)),E===o.RG&&(et===o.FLOAT&&(ut=o.RG32F),et===o.HALF_FLOAT&&(ut=o.RG16F),et===o.UNSIGNED_BYTE&&(ut=o.RG8)),E===o.RG_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RG8UI),et===o.UNSIGNED_SHORT&&(ut=o.RG16UI),et===o.UNSIGNED_INT&&(ut=o.RG32UI),et===o.BYTE&&(ut=o.RG8I),et===o.SHORT&&(ut=o.RG16I),et===o.INT&&(ut=o.RG32I)),E===o.RGB_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGB8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGB16UI),et===o.UNSIGNED_INT&&(ut=o.RGB32UI),et===o.BYTE&&(ut=o.RGB8I),et===o.SHORT&&(ut=o.RGB16I),et===o.INT&&(ut=o.RGB32I)),E===o.RGBA_INTEGER&&(et===o.UNSIGNED_BYTE&&(ut=o.RGBA8UI),et===o.UNSIGNED_SHORT&&(ut=o.RGBA16UI),et===o.UNSIGNED_INT&&(ut=o.RGBA32UI),et===o.BYTE&&(ut=o.RGBA8I),et===o.SHORT&&(ut=o.RGBA16I),et===o.INT&&(ut=o.RGBA32I)),E===o.RGB&&et===o.UNSIGNED_INT_5_9_9_9_REV&&(ut=o.RGB9_E5),E===o.RGBA){const Kt=Tt?Gc:De.getTransfer(dt);et===o.FLOAT&&(ut=o.RGBA32F),et===o.HALF_FLOAT&&(ut=o.RGBA16F),et===o.UNSIGNED_BYTE&&(ut=Kt===He?o.SRGB8_ALPHA8:o.RGBA8),et===o.UNSIGNED_SHORT_4_4_4_4&&(ut=o.RGBA4),et===o.UNSIGNED_SHORT_5_5_5_1&&(ut=o.RGB5_A1)}return(ut===o.R16F||ut===o.R32F||ut===o.RG16F||ut===o.RG32F||ut===o.RGBA16F||ut===o.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function D(U,E){let et;return U?E===null||E===Ms||E===Ho?et=o.DEPTH24_STENCIL8:E===la?et=o.DEPTH32F_STENCIL8:E===Fo&&(et=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ms||E===Ho?et=o.DEPTH_COMPONENT24:E===la?et=o.DEPTH_COMPONENT32F:E===Fo&&(et=o.DEPTH_COMPONENT16),et}function V(U,E){return M(U)===!0||U.isFramebufferTexture&&U.minFilter!==Ai&&U.minFilter!==Oi?Math.log2(Math.max(E.width,E.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?E.mipmaps.length:1}function H(U){const E=U.target;E.removeEventListener("dispose",H),j(E),E.isVideoTexture&&g.delete(E)}function P(U){const E=U.target;E.removeEventListener("dispose",P),C(E)}function j(U){const E=s.get(U);if(E.__webglInit===void 0)return;const et=U.source,dt=y.get(et);if(dt){const Tt=dt[E.__cacheKey];Tt.usedTimes--,Tt.usedTimes===0&&w(U),Object.keys(dt).length===0&&y.delete(et)}s.remove(U)}function w(U){const E=s.get(U);o.deleteTexture(E.__webglTexture);const et=U.source,dt=y.get(et);delete dt[E.__cacheKey],h.memory.textures--}function C(U){const E=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(E.__webglFramebuffer[dt]))for(let Tt=0;Tt<E.__webglFramebuffer[dt].length;Tt++)o.deleteFramebuffer(E.__webglFramebuffer[dt][Tt]);else o.deleteFramebuffer(E.__webglFramebuffer[dt]);E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer[dt])}else{if(Array.isArray(E.__webglFramebuffer))for(let dt=0;dt<E.__webglFramebuffer.length;dt++)o.deleteFramebuffer(E.__webglFramebuffer[dt]);else o.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&o.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&o.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let dt=0;dt<E.__webglColorRenderbuffer.length;dt++)E.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(E.__webglColorRenderbuffer[dt]);E.__webglDepthRenderbuffer&&o.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const et=U.textures;for(let dt=0,Tt=et.length;dt<Tt;dt++){const ut=s.get(et[dt]);ut.__webglTexture&&(o.deleteTexture(ut.__webglTexture),h.memory.textures--),s.remove(et[dt])}s.remove(U)}let z=0;function st(){z=0}function ot(){const U=z;return U>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+l.maxTextures),z+=1,U}function ct(U){const E=[];return E.push(U.wrapS),E.push(U.wrapT),E.push(U.wrapR||0),E.push(U.magFilter),E.push(U.minFilter),E.push(U.anisotropy),E.push(U.internalFormat),E.push(U.format),E.push(U.type),E.push(U.generateMipmaps),E.push(U.premultiplyAlpha),E.push(U.flipY),E.push(U.unpackAlignment),E.push(U.colorSpace),E.join()}function ht(U,E){const et=s.get(U);if(U.isVideoTexture&&ce(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&et.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(et,U,E);return}}else U.isExternalTexture&&(et.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,et.__webglTexture,o.TEXTURE0+E)}function O(U,E){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){xt(et,U,E);return}i.bindTexture(o.TEXTURE_2D_ARRAY,et.__webglTexture,o.TEXTURE0+E)}function Z(U,E){const et=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&et.__version!==U.version){xt(et,U,E);return}i.bindTexture(o.TEXTURE_3D,et.__webglTexture,o.TEXTURE0+E)}function q(U,E){const et=s.get(U);if(U.version>0&&et.__version!==U.version){_t(et,U,E);return}i.bindTexture(o.TEXTURE_CUBE_MAP,et.__webglTexture,o.TEXTURE0+E)}const mt={[ed]:o.REPEAT,[ys]:o.CLAMP_TO_EDGE,[nd]:o.MIRRORED_REPEAT},Et={[Ai]:o.NEAREST,[DS]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[Oi]:o.LINEAR,[ch]:o.LINEAR_MIPMAP_NEAREST,[Ss]:o.LINEAR_MIPMAP_LINEAR},L={[OS]:o.NEVER,[HS]:o.ALWAYS,[PS]:o.LESS,[dv]:o.LEQUAL,[zS]:o.EQUAL,[FS]:o.GEQUAL,[BS]:o.GREATER,[IS]:o.NOTEQUAL};function nt(U,E){if(E.type===la&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Oi||E.magFilter===ch||E.magFilter===rc||E.magFilter===Ss||E.minFilter===Oi||E.minFilter===ch||E.minFilter===rc||E.minFilter===Ss)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,mt[E.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,mt[E.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,mt[E.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,Et[E.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,Et[E.minFilter]),E.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Ai||E.minFilter!==rc&&E.minFilter!==Ss||E.type===la&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const et=t.get("EXT_texture_filter_anisotropic");o.texParameterf(U,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Mt(U,E){let et=!1;U.__webglInit===void 0&&(U.__webglInit=!0,E.addEventListener("dispose",H));const dt=E.source;let Tt=y.get(dt);Tt===void 0&&(Tt={},y.set(dt,Tt));const ut=ct(E);if(ut!==U.__cacheKey){Tt[ut]===void 0&&(Tt[ut]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,et=!0),Tt[ut].usedTimes++;const Kt=Tt[U.__cacheKey];Kt!==void 0&&(Tt[U.__cacheKey].usedTimes--,Kt.usedTimes===0&&w(E)),U.__cacheKey=ut,U.__webglTexture=Tt[ut].texture}return et}function wt(U,E,et){return Math.floor(Math.floor(U/et)/E)}function J(U,E,et,dt){const ut=U.updateRanges;if(ut.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,E.width,E.height,et,dt,E.data);else{ut.sort((Rt,Ut)=>Rt.start-Ut.start);let Kt=0;for(let Rt=1;Rt<ut.length;Rt++){const Ut=ut[Kt],Qt=ut[Rt],Bt=Ut.start+Ut.count,Nt=wt(Qt.start,E.width,4),ue=wt(Ut.start,E.width,4);Qt.start<=Bt+1&&Nt===ue&&wt(Qt.start+Qt.count-1,E.width,4)===Nt?Ut.count=Math.max(Ut.count,Qt.start+Qt.count-Ut.start):(++Kt,ut[Kt]=Qt)}ut.length=Kt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Yt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,E.width);for(let Rt=0,Ut=ut.length;Rt<Ut;Rt++){const Qt=ut[Rt],Bt=Math.floor(Qt.start/4),Nt=Math.ceil(Qt.count/4),ue=Bt%E.width,X=Math.floor(Bt/E.width),Ct=Nt,Lt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ue),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,ue,X,Ct,Lt,et,dt,E.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Yt)}}function xt(U,E,et){let dt=o.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),E.isData3DTexture&&(dt=o.TEXTURE_3D);const Tt=Mt(U,E),ut=E.source;i.bindTexture(dt,U.__webglTexture,o.TEXTURE0+et);const Kt=s.get(ut);if(ut.version!==Kt.__version||Tt===!0){i.activeTexture(o.TEXTURE0+et);const Dt=De.getPrimaries(De.workingColorSpace),qt=E.colorSpace===Ga?null:De.getPrimaries(E.colorSpace),Yt=E.colorSpace===Ga||Dt===qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let Rt=A(E.image,!1,l.maxTextureSize);Rt=$e(E,Rt);const Ut=c.convert(E.format,E.colorSpace),Qt=c.convert(E.type);let Bt=N(E.internalFormat,Ut,Qt,E.colorSpace,E.isVideoTexture);nt(dt,E);let Nt;const ue=E.mipmaps,X=E.isVideoTexture!==!0,Ct=Kt.__version===void 0||Tt===!0,Lt=ut.dataReady,Ft=V(E,Rt);if(E.isDepthTexture)Bt=D(E.format===Vo,E.type),Ct&&(X?i.texStorage2D(o.TEXTURE_2D,1,Bt,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Qt,null));else if(E.isDataTexture)if(ue.length>0){X&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],X?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Qt,Nt.data):i.texImage2D(o.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Ut,Qt,Nt.data);E.generateMipmaps=!1}else X?(Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Rt.width,Rt.height),Lt&&J(E,Rt,Ut,Qt)):i.texImage2D(o.TEXTURE_2D,0,Bt,Rt.width,Rt.height,0,Ut,Qt,Rt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,ue[0].width,ue[0].height,Rt.depth);for(let bt=0,yt=ue.length;bt<yt;bt++)if(Nt=ue[bt],E.format!==bi)if(Ut!==null)if(X){if(Lt)if(E.layerUpdates.size>0){const Gt=S0(Nt.width,Nt.height,E.format,E.type);for(const re of E.layerUpdates){const Oe=Nt.data.subarray(re*Gt/Nt.data.BYTES_PER_ELEMENT,(re+1)*Gt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,re,Nt.width,Nt.height,1,Ut,Oe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Bt,Nt.width,Nt.height,Rt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Lt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Nt.width,Nt.height,Rt.depth,Ut,Qt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Bt,Nt.width,Nt.height,Rt.depth,0,Ut,Qt,Nt.data)}else{X&&Ct&&i.texStorage2D(o.TEXTURE_2D,Ft,Bt,ue[0].width,ue[0].height);for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],E.format!==bi?Ut!==null?X?Lt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Nt.width,Nt.height,Ut,Qt,Nt.data):i.texImage2D(o.TEXTURE_2D,bt,Bt,Nt.width,Nt.height,0,Ut,Qt,Nt.data)}else if(E.isDataArrayTexture)if(X){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ft,Bt,Rt.width,Rt.height,Rt.depth),Lt)if(E.layerUpdates.size>0){const bt=S0(Rt.width,Rt.height,E.format,E.type);for(const yt of E.layerUpdates){const Gt=Rt.data.subarray(yt*bt/Rt.data.BYTES_PER_ELEMENT,(yt+1)*bt/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,yt,Rt.width,Rt.height,1,Ut,Qt,Gt)}E.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Qt,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Qt,Rt.data);else if(E.isData3DTexture)X?(Ct&&i.texStorage3D(o.TEXTURE_3D,Ft,Bt,Rt.width,Rt.height,Rt.depth),Lt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Ut,Qt,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,Bt,Rt.width,Rt.height,Rt.depth,0,Ut,Qt,Rt.data);else if(E.isFramebufferTexture){if(Ct)if(X)i.texStorage2D(o.TEXTURE_2D,Ft,Bt,Rt.width,Rt.height);else{let bt=Rt.width,yt=Rt.height;for(let Gt=0;Gt<Ft;Gt++)i.texImage2D(o.TEXTURE_2D,Gt,Bt,bt,yt,0,Ut,Qt,null),bt>>=1,yt>>=1}}else if(ue.length>0){if(X&&Ct){const bt=Je(ue[0]);i.texStorage2D(o.TEXTURE_2D,Ft,Bt,bt.width,bt.height)}for(let bt=0,yt=ue.length;bt<yt;bt++)Nt=ue[bt],X?Lt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ut,Qt,Nt):i.texImage2D(o.TEXTURE_2D,bt,Bt,Ut,Qt,Nt);E.generateMipmaps=!1}else if(X){if(Ct){const bt=Je(Rt);i.texStorage2D(o.TEXTURE_2D,Ft,Bt,bt.width,bt.height)}Lt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ut,Qt,Rt)}else i.texImage2D(o.TEXTURE_2D,0,Bt,Ut,Qt,Rt);M(E)&&v(dt),Kt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function _t(U,E,et){if(E.image.length!==6)return;const dt=Mt(U,E),Tt=E.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+et);const ut=s.get(Tt);if(Tt.version!==ut.__version||dt===!0){i.activeTexture(o.TEXTURE0+et);const Kt=De.getPrimaries(De.workingColorSpace),Dt=E.colorSpace===Ga?null:De.getPrimaries(E.colorSpace),qt=E.colorSpace===Ga||Kt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,E.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,E.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt);const Yt=E.isCompressedTexture||E.image[0].isCompressedTexture,Rt=E.image[0]&&E.image[0].isDataTexture,Ut=[];for(let yt=0;yt<6;yt++)!Yt&&!Rt?Ut[yt]=A(E.image[yt],!0,l.maxCubemapSize):Ut[yt]=Rt?E.image[yt].image:E.image[yt],Ut[yt]=$e(E,Ut[yt]);const Qt=Ut[0],Bt=c.convert(E.format,E.colorSpace),Nt=c.convert(E.type),ue=N(E.internalFormat,Bt,Nt,E.colorSpace),X=E.isVideoTexture!==!0,Ct=ut.__version===void 0||dt===!0,Lt=Tt.dataReady;let Ft=V(E,Qt);nt(o.TEXTURE_CUBE_MAP,E);let bt;if(Yt){X&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,Qt.width,Qt.height);for(let yt=0;yt<6;yt++){bt=Ut[yt].mipmaps;for(let Gt=0;Gt<bt.length;Gt++){const re=bt[Gt];E.format!==bi?Bt!==null?X?Lt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,0,0,re.width,re.height,Bt,re.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,ue,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,0,0,re.width,re.height,Bt,Nt,re.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt,ue,re.width,re.height,0,Bt,Nt,re.data)}}}else{if(bt=E.mipmaps,X&&Ct){bt.length>0&&Ft++;const yt=Je(Ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ft,ue,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(Rt){X?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Ut[yt].width,Ut[yt].height,Bt,Nt,Ut[yt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ue,Ut[yt].width,Ut[yt].height,0,Bt,Nt,Ut[yt].data);for(let Gt=0;Gt<bt.length;Gt++){const Oe=bt[Gt].image[yt].image;X?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,0,0,Oe.width,Oe.height,Bt,Nt,Oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,ue,Oe.width,Oe.height,0,Bt,Nt,Oe.data)}}else{X?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Bt,Nt,Ut[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ue,Bt,Nt,Ut[yt]);for(let Gt=0;Gt<bt.length;Gt++){const re=bt[Gt];X?Lt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,0,0,Bt,Nt,re.image[yt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+yt,Gt+1,ue,Bt,Nt,re.image[yt])}}}M(E)&&v(o.TEXTURE_CUBE_MAP),ut.__version=Tt.version,E.onUpdate&&E.onUpdate(E)}U.__version=E.version}function vt(U,E,et,dt,Tt,ut){const Kt=c.convert(et.format,et.colorSpace),Dt=c.convert(et.type),qt=N(et.internalFormat,Kt,Dt,et.colorSpace),Yt=s.get(E),Rt=s.get(et);if(Rt.__renderTarget=E,!Yt.__hasExternalTextures){const Ut=Math.max(1,E.width>>ut),Qt=Math.max(1,E.height>>ut);Tt===o.TEXTURE_3D||Tt===o.TEXTURE_2D_ARRAY?i.texImage3D(Tt,ut,qt,Ut,Qt,E.depth,0,Kt,Dt,null):i.texImage2D(Tt,ut,qt,Ut,Qt,0,Kt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Tt,Rt.__webglTexture,0,ke(E)):(Tt===o.TEXTURE_2D||Tt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Tt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Tt,Rt.__webglTexture,ut),i.bindFramebuffer(o.FRAMEBUFFER,null)}function At(U,E,et){if(o.bindRenderbuffer(o.RENDERBUFFER,U),E.depthBuffer){const dt=E.depthTexture,Tt=dt&&dt.isDepthTexture?dt.type:null,ut=D(E.stencilBuffer,Tt),Kt=E.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ke(E);Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ut,E.width,E.height):et?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ut,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,ut,E.width,E.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Kt,o.RENDERBUFFER,U)}else{const dt=E.textures;for(let Tt=0;Tt<dt.length;Tt++){const ut=dt[Tt],Kt=c.convert(ut.format,ut.colorSpace),Dt=c.convert(ut.type),qt=N(ut.internalFormat,Kt,Dt,ut.colorSpace),Yt=ke(E);et&&Ht(E)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,qt,E.width,E.height):Ht(E)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Yt,qt,E.width,E.height):o.renderbufferStorage(o.RENDERBUFFER,qt,E.width,E.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function It(U,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(E.depthTexture);dt.__renderTarget=E,(!dt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ht(E.depthTexture,0);const Tt=dt.__webglTexture,ut=ke(E);if(E.depthTexture.format===Go)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Tt,0);else if(E.depthTexture.format===Vo)Ht(E)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0,ut):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Tt,0);else throw new Error("Unknown depthTexture format")}function ee(U){const E=s.get(U),et=U.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),dt){const Tt=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,dt.removeEventListener("dispose",Tt)};dt.addEventListener("dispose",Tt),E.__depthDisposeCallback=Tt}E.__boundDepthTexture=dt}if(U.depthTexture&&!E.__autoAllocateDepthBuffer){if(et)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?It(E.__webglFramebuffer[0],U):It(E.__webglFramebuffer,U)}else if(et){E.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[dt]),E.__webglDepthbuffer[dt]===void 0)E.__webglDepthbuffer[dt]=o.createRenderbuffer(),At(E.__webglDepthbuffer[dt],U,!1);else{const Tt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ut)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=o.createRenderbuffer(),At(E.__webglDepthbuffer,U,!1);else{const Tt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ut),o.framebufferRenderbuffer(o.FRAMEBUFFER,Tt,o.RENDERBUFFER,ut)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function ie(U,E,et){const dt=s.get(U);E!==void 0&&vt(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),et!==void 0&&ee(U)}function F(U){const E=U.texture,et=s.get(U),dt=s.get(E);U.addEventListener("dispose",P);const Tt=U.textures,ut=U.isWebGLCubeRenderTarget===!0,Kt=Tt.length>1;if(Kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=E.version,h.memory.textures++),ut){et.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer[Dt]=[];for(let qt=0;qt<E.mipmaps.length;qt++)et.__webglFramebuffer[Dt][qt]=o.createFramebuffer()}else et.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){et.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)et.__webglFramebuffer[Dt]=o.createFramebuffer()}else et.__webglFramebuffer=o.createFramebuffer();if(Kt)for(let Dt=0,qt=Tt.length;Dt<qt;Dt++){const Yt=s.get(Tt[Dt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){et.__webglMultisampledFramebuffer=o.createFramebuffer(),et.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,et.__webglMultisampledFramebuffer);for(let Dt=0;Dt<Tt.length;Dt++){const qt=Tt[Dt];et.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt]);const Yt=c.convert(qt.format,qt.colorSpace),Rt=c.convert(qt.type),Ut=N(qt.internalFormat,Yt,Rt,qt.colorSpace,U.isXRRenderTarget===!0),Qt=ke(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,Qt,Ut,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,et.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(et.__webglDepthRenderbuffer=o.createRenderbuffer(),At(et.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ut){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),nt(o.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)vt(et.__webglFramebuffer[Dt][qt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,qt);else vt(et.__webglFramebuffer[Dt],U,E,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Kt){for(let Dt=0,qt=Tt.length;Dt<qt;Dt++){const Yt=Tt[Dt],Rt=s.get(Yt);let Ut=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ut=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,Rt.__webglTexture),nt(Ut,Yt),vt(et.__webglFramebuffer,U,Yt,o.COLOR_ATTACHMENT0+Dt,Ut,0),M(Yt)&&v(Ut)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,dt.__webglTexture),nt(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let qt=0;qt<E.mipmaps.length;qt++)vt(et.__webglFramebuffer[qt],U,E,o.COLOR_ATTACHMENT0,Dt,qt);else vt(et.__webglFramebuffer,U,E,o.COLOR_ATTACHMENT0,Dt,0);M(E)&&v(Dt),i.unbindTexture()}U.depthBuffer&&ee(U)}function oe(U){const E=U.textures;for(let et=0,dt=E.length;et<dt;et++){const Tt=E[et];if(M(Tt)){const ut=G(U),Kt=s.get(Tt).__webglTexture;i.bindTexture(ut,Kt),v(ut),i.unbindTexture()}}}const Vt=[],he=[];function Zt(U){if(U.samples>0){if(Ht(U)===!1){const E=U.textures,et=U.width,dt=U.height;let Tt=o.COLOR_BUFFER_BIT;const ut=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Kt=s.get(U),Dt=E.length>1;if(Dt)for(let Yt=0;Yt<E.length;Yt++)i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer);const qt=U.texture.mipmaps;qt&&qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglFramebuffer);for(let Yt=0;Yt<E.length;Yt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Tt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Tt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Rt=s.get(E[Yt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,et,dt,0,0,et,dt,Tt,o.NEAREST),m===!0&&(Vt.length=0,he.length=0,Vt.push(o.COLOR_ATTACHMENT0+Yt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Vt.push(ut),he.push(ut),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Vt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Yt=0;Yt<E.length;Yt++){i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.RENDERBUFFER,Kt.__webglColorRenderbuffer[Yt]);const Rt=s.get(E[Yt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Yt,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&m){const E=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[E])}}}function ke(U){return Math.min(l.maxSamples,U.samples)}function Ht(U){const E=s.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ce(U){const E=h.render.frame;g.get(U)!==E&&(g.set(U,E),U.update())}function $e(U,E){const et=U.colorSpace,dt=U.format,Tt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||et!==Lr&&et!==Ga&&(De.getTransfer(et)===He?(dt!==bi||Tt!==zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",et)),E}function Je(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(p.width=U.naturalWidth||U.width,p.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(p.width=U.displayWidth,p.height=U.displayHeight):(p.width=U.width,p.height=U.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=st,this.setTexture2D=ht,this.setTexture2DArray=O,this.setTexture3D=Z,this.setTextureCube=q,this.rebindTextures=ie,this.setupRenderTarget=F,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=ee,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=Ht}function r1(o,t){function i(s,l=Ga){let c;const h=De.getTransfer(l);if(s===zi)return o.UNSIGNED_BYTE;if(s===zd)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Bd)return o.UNSIGNED_SHORT_5_5_5_1;if(s===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===av)return o.BYTE;if(s===sv)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===Pd)return o.INT;if(s===Ms)return o.UNSIGNED_INT;if(s===la)return o.FLOAT;if(s===Xo)return o.HALF_FLOAT;if(s===ov)return o.ALPHA;if(s===lv)return o.RGB;if(s===bi)return o.RGBA;if(s===Go)return o.DEPTH_COMPONENT;if(s===Vo)return o.DEPTH_STENCIL;if(s===cv)return o.RED;if(s===Id)return o.RED_INTEGER;if(s===uv)return o.RG;if(s===Fd)return o.RG_INTEGER;if(s===Hd)return o.RGBA_INTEGER;if(s===Lc||s===Nc||s===Oc||s===Pc)if(h===He)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Nc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===id||s===ad||s===sd||s===rd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===id)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===ad)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===sd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===rd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===od||s===ld||s===cd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===od||s===ld)return h===He?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===cd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ud||s===fd||s===hd||s===dd||s===pd||s===md||s===gd||s===_d||s===vd||s===xd||s===yd||s===Sd||s===Md||s===Ed)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===ud)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===dd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_d)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sd)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Md)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ed)return h===He?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===zc||s===Td||s===bd)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===zc)return h===He?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Td)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===fv||s===Ad||s===Rd||s===Cd)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===zc)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Ad)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Cd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ho?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}class Nv extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const o1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
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

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Nv(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ja({vertexShader:o1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jn(new Yc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends bs{constructor(t,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",m=1,p=null,g=null,_=null,y=null,S=null,T=null;const A=new c1,M={},v=i.getContextAttributes();let G=null,N=null;const D=[],V=[],H=new se;let P=null;const j=new si;j.viewport=new Ve;const w=new si;w.viewport=new Ve;const C=[j,w],z=new CM;let st=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let xt=D[J];return xt===void 0&&(xt=new Uh,D[J]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(J){let xt=D[J];return xt===void 0&&(xt=new Uh,D[J]=xt),xt.getGripSpace()},this.getHand=function(J){let xt=D[J];return xt===void 0&&(xt=new Uh,D[J]=xt),xt.getHandSpace()};function ct(J){const xt=V.indexOf(J.inputSource);if(xt===-1)return;const _t=D[xt];_t!==void 0&&(_t.update(J.inputSource,J.frame,p||h),_t.dispatchEvent({type:J.type,data:J.inputSource}))}function ht(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",ht),l.removeEventListener("inputsourceschange",O);for(let J=0;J<D.length;J++){const xt=V[J];xt!==null&&(V[J]=null,D[J].disconnect(xt))}st=null,ot=null,A.reset();for(const J in M)delete M[J];t.setRenderTarget(G),S=null,y=null,_=null,l=null,N=null,wt.stop(),s.isPresenting=!1,t.setPixelRatio(P),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(J){p=J},this.getBaseLayer=function(){return y!==null?y:S},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(G=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",ht),l.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await i.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&(_=new XRWebGLBinding(l,i)),_!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let _t=null,vt=null,At=null;v.depth&&(At=v.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_t=v.stencil?Vo:Go,vt=v.stencil?Ho:Ms);const It={colorFormat:i.RGBA8,depthFormat:At,scaleFactor:c};y=_.createProjectionLayer(It),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),N=new Ts(y.textureWidth,y.textureHeight,{format:bi,type:zi,depthTexture:new bv(y.textureWidth,y.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,_t),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _t={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,_t),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Ts(S.framebufferWidth,S.framebufferHeight,{format:bi,type:zi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),wt.setContext(l),wt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function O(J){for(let xt=0;xt<J.removed.length;xt++){const _t=J.removed[xt],vt=V.indexOf(_t);vt>=0&&(V[vt]=null,D[vt].disconnect(_t))}for(let xt=0;xt<J.added.length;xt++){const _t=J.added[xt];let vt=V.indexOf(_t);if(vt===-1){for(let It=0;It<D.length;It++)if(It>=V.length){V.push(_t),vt=It;break}else if(V[It]===null){V[It]=_t,vt=It;break}if(vt===-1)break}const At=D[vt];At&&At.connect(_t)}}const Z=new Y,q=new Y;function mt(J,xt,_t){Z.setFromMatrixPosition(xt.matrixWorld),q.setFromMatrixPosition(_t.matrixWorld);const vt=Z.distanceTo(q),At=xt.projectionMatrix.elements,It=_t.projectionMatrix.elements,ee=At[14]/(At[10]-1),ie=At[14]/(At[10]+1),F=(At[9]+1)/At[5],oe=(At[9]-1)/At[5],Vt=(At[8]-1)/At[0],he=(It[8]+1)/It[0],Zt=ee*Vt,ke=ee*he,Ht=vt/(-Vt+he),ce=Ht*-Vt;if(xt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ce),J.translateZ(Ht),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(xt.projectionMatrix),J.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const $e=ee+Ht,Je=ie+Ht,U=Zt-ce,E=ke+(vt-ce),et=F*ie/Je*$e,dt=oe*ie/Je*$e;J.projectionMatrix.makePerspective(U,E,et,dt,$e,Je),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Et(J,xt){xt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(xt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let xt=J.near,_t=J.far;A.texture!==null&&(A.depthNear>0&&(xt=A.depthNear),A.depthFar>0&&(_t=A.depthFar)),z.near=w.near=j.near=xt,z.far=w.far=j.far=_t,(st!==z.near||ot!==z.far)&&(l.updateRenderState({depthNear:z.near,depthFar:z.far}),st=z.near,ot=z.far),z.layers.mask=J.layers.mask|6,j.layers.mask=z.layers.mask&3,w.layers.mask=z.layers.mask&5;const vt=J.parent,At=z.cameras;Et(z,vt);for(let It=0;It<At.length;It++)Et(At[It],vt);At.length===2?mt(z,j,w):z.projectionMatrix.copy(j.projectionMatrix),L(J,z,vt)};function L(J,xt,_t){_t===null?J.matrix.copy(xt.matrixWorld):(J.matrix.copy(_t.matrixWorld),J.matrix.invert(),J.matrix.multiply(xt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(xt.projectionMatrix),J.projectionMatrixInverse.copy(xt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=wd*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(y===null&&S===null))return m},this.setFoveation=function(J){m=J,y!==null&&(y.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(z)},this.getCameraTexture=function(J){return M[J]};let nt=null;function Mt(J,xt){if(g=xt.getViewerPose(p||h),T=xt,g!==null){const _t=g.views;S!==null&&(t.setRenderTargetFramebuffer(N,S.framebuffer),t.setRenderTarget(N));let vt=!1;_t.length!==z.cameras.length&&(z.cameras.length=0,vt=!0);for(let ie=0;ie<_t.length;ie++){const F=_t[ie];let oe=null;if(S!==null)oe=S.getViewport(F);else{const he=_.getViewSubImage(y,F);oe=he.viewport,ie===0&&(t.setRenderTargetTextures(N,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(N))}let Vt=C[ie];Vt===void 0&&(Vt=new si,Vt.layers.enable(ie),Vt.viewport=new Ve,C[ie]=Vt),Vt.matrix.fromArray(F.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(F.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(oe.x,oe.y,oe.width,oe.height),ie===0&&(z.matrix.copy(Vt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),vt===!0&&z.cameras.push(Vt)}const At=l.enabledFeatures;if(At&&At.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&_){const ie=_.getDepthInformation(_t[0]);ie&&ie.isValid&&ie.texture&&A.init(ie,l.renderState)}if(At&&At.includes("camera-access")&&(t.state.unbindTexture(),_))for(let ie=0;ie<_t.length;ie++){const F=_t[ie].camera;if(F){let oe=M[F];oe||(oe=new Nv,M[F]=oe);const Vt=_.getCameraImage(F);oe.sourceTexture=Vt}}}for(let _t=0;_t<D.length;_t++){const vt=V[_t],At=D[_t];vt!==null&&At!==void 0&&At.update(vt,xt,p||h)}nt&&nt(J,xt),xt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:xt}),T=null}const wt=new Cv;wt.setAnimationLoop(Mt),this.setAnimationLoop=function(J){nt=J},this.dispose=function(){}}}const gs=new Bi,f1=new Qe;function h1(o,t){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,Sv(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,G,N,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),_(M,v)):v.isMeshPhongMaterial?(c(M,v),g(M,v)):v.isMeshStandardMaterial?(c(M,v),y(M,v),v.isMeshPhysicalMaterial&&S(M,v,D)):v.isMeshMatcapMaterial?(c(M,v),T(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),A(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?m(M,v,G,N):v.isSpriteMaterial?p(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Wn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Wn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const G=t.get(v),N=G.envMap,D=G.envMapRotation;N&&(M.envMap.value=N,gs.copy(D),gs.x*=-1,gs.y*=-1,gs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),M.envMapRotation.value.setFromMatrix4(f1.makeRotationFromEuler(gs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function m(M,v,G,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*G,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function p(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function _(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function y(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,G){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Wn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=G.texture,M.transmissionSamplerSize.value.set(G.width,G.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,v){v.matcap&&(M.matcap.value=v.matcap)}function A(M,v){const G=t.get(v).light;M.referencePosition.value.setFromMatrixPosition(G.matrixWorld),M.nearDistance.value=G.shadow.camera.near,M.farDistance.value=G.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function d1(o,t,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(G,N){const D=N.program;s.uniformBlockBinding(G,D)}function p(G,N){let D=l[G.id];D===void 0&&(T(G),D=g(G),l[G.id]=D,G.addEventListener("dispose",M));const V=N.program;s.updateUBOMapping(G,V);const H=t.render.frame;c[G.id]!==H&&(y(G),c[G.id]=H)}function g(G){const N=_();G.__bindingPointIndex=N;const D=o.createBuffer(),V=G.__size,H=G.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,V,H),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,D),D}function _(){for(let G=0;G<d;G++)if(h.indexOf(G)===-1)return h.push(G),G;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(G){const N=l[G.id],D=G.uniforms,V=G.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let H=0,P=D.length;H<P;H++){const j=Array.isArray(D[H])?D[H]:[D[H]];for(let w=0,C=j.length;w<C;w++){const z=j[w];if(S(z,H,w,V)===!0){const st=z.__offset,ot=Array.isArray(z.value)?z.value:[z.value];let ct=0;for(let ht=0;ht<ot.length;ht++){const O=ot[ht],Z=A(O);typeof O=="number"||typeof O=="boolean"?(z.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,st+ct,z.__data)):O.isMatrix3?(z.__data[0]=O.elements[0],z.__data[1]=O.elements[1],z.__data[2]=O.elements[2],z.__data[3]=0,z.__data[4]=O.elements[3],z.__data[5]=O.elements[4],z.__data[6]=O.elements[5],z.__data[7]=0,z.__data[8]=O.elements[6],z.__data[9]=O.elements[7],z.__data[10]=O.elements[8],z.__data[11]=0):(O.toArray(z.__data,ct),ct+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,z.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(G,N,D,V){const H=G.value,P=N+"_"+D;if(V[P]===void 0)return typeof H=="number"||typeof H=="boolean"?V[P]=H:V[P]=H.clone(),!0;{const j=V[P];if(typeof H=="number"||typeof H=="boolean"){if(j!==H)return V[P]=H,!0}else if(j.equals(H)===!1)return j.copy(H),!0}return!1}function T(G){const N=G.uniforms;let D=0;const V=16;for(let P=0,j=N.length;P<j;P++){const w=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,z=w.length;C<z;C++){const st=w[C],ot=Array.isArray(st.value)?st.value:[st.value];for(let ct=0,ht=ot.length;ct<ht;ct++){const O=ot[ct],Z=A(O),q=D%V,mt=q%Z.boundary,Et=q+mt;D+=mt,Et!==0&&V-Et<Z.storage&&(D+=V-Et),st.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=Z.storage}}}const H=D%V;return H>0&&(D+=V-H),G.__size=D,G.__cache={},this}function A(G){const N={boundary:0,storage:0};return typeof G=="number"||typeof G=="boolean"?(N.boundary=4,N.storage=4):G.isVector2?(N.boundary=8,N.storage=8):G.isVector3||G.isColor?(N.boundary=16,N.storage=12):G.isVector4?(N.boundary=16,N.storage=16):G.isMatrix3?(N.boundary=48,N.storage=48):G.isMatrix4?(N.boundary=64,N.storage=64):G.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",G),N}function M(G){const N=G.target;N.removeEventListener("dispose",M);const D=h.indexOf(N.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const G in l)o.deleteBuffer(l[G]);h=[],l={},c={}}return{bind:m,update:p,dispose:v}}class p1{constructor(t={}){const{canvas:i=kS(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,v=null;const G=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let V=!1;this._outputColorSpace=ai;let H=0,P=0,j=null,w=-1,C=null;const z=new Ve,st=new Ve;let ot=null;const ct=new _e(0);let ht=0,O=i.width,Z=i.height,q=1,mt=null,Et=null;const L=new Ve(0,0,O,Z),nt=new Ve(0,0,O,Z);let Mt=!1;const wt=new kd;let J=!1,xt=!1;const _t=new Qe,vt=new Y,At=new Ve,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ie(){return j===null?q:1}let F=s;function oe(R,W){return i.getContext(R,W)}try{const R={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Od}`),i.addEventListener("webglcontextlost",Lt,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",bt,!1),F===null){const W="webgl2";if(F=oe(W,R),F===null)throw oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Vt,he,Zt,ke,Ht,ce,$e,Je,U,E,et,dt,Tt,ut,Kt,Dt,qt,Yt,Rt,Ut,Qt,Bt,Nt,ue;function X(){Vt=new Tb(F),Vt.init(),Bt=new r1(F,Vt),he=new _b(F,Vt,t,Bt),Zt=new a1(F,Vt),he.reversedDepthBuffer&&y&&Zt.buffers.depth.setReversed(!0),ke=new Rb(F),Ht=new jA,ce=new s1(F,Vt,Zt,Ht,he,Bt,ke),$e=new xb(D),Je=new Eb(D),U=new NM(F),Nt=new mb(F,U),E=new bb(F,U,ke,Nt),et=new wb(F,E,U,ke),Rt=new Cb(F,he,ce),Dt=new vb(Ht),dt=new XA(D,$e,Je,Vt,he,Nt,Dt),Tt=new h1(D,Ht),ut=new qA,Kt=new $A(Vt),Yt=new pb(D,$e,Je,Zt,et,S,m),qt=new n1(D,et,he),ue=new d1(F,ke,he,Zt),Ut=new gb(F,Vt,ke),Qt=new Ab(F,Vt,ke),ke.programs=dt.programs,D.capabilities=he,D.extensions=Vt,D.properties=Ht,D.renderLists=ut,D.shadowMap=qt,D.state=Zt,D.info=ke}X();const Ct=new u1(D,F);this.xr=Ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const R=Vt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Vt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(R){R!==void 0&&(q=R,this.setSize(O,Z,!1))},this.getSize=function(R){return R.set(O,Z)},this.setSize=function(R,W,at=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Z=W,i.width=Math.floor(R*q),i.height=Math.floor(W*q),at===!0&&(i.style.width=R+"px",i.style.height=W+"px"),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(O*q,Z*q).floor()},this.setDrawingBufferSize=function(R,W,at){O=R,Z=W,q=at,i.width=Math.floor(R*at),i.height=Math.floor(W*at),this.setViewport(0,0,R,W)},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(L)},this.setViewport=function(R,W,at,rt){R.isVector4?L.set(R.x,R.y,R.z,R.w):L.set(R,W,at,rt),Zt.viewport(z.copy(L).multiplyScalar(q).round())},this.getScissor=function(R){return R.copy(nt)},this.setScissor=function(R,W,at,rt){R.isVector4?nt.set(R.x,R.y,R.z,R.w):nt.set(R,W,at,rt),Zt.scissor(st.copy(nt).multiplyScalar(q).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(R){Zt.setScissorTest(Mt=R)},this.setOpaqueSort=function(R){mt=R},this.setTransparentSort=function(R){Et=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor(...arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,at=!0){let rt=0;if(R){let K=!1;if(j!==null){const St=j.texture.format;K=St===Hd||St===Fd||St===Id}if(K){const St=j.texture.type,Ot=St===zi||St===Ms||St===Fo||St===Ho||St===zd||St===Bd,Xt=Yt.getClearColor(),zt=Yt.getClearAlpha(),Jt=Xt.r,ae=Xt.g,$t=Xt.b;Ot?(T[0]=Jt,T[1]=ae,T[2]=$t,T[3]=zt,F.clearBufferuiv(F.COLOR,0,T)):(A[0]=Jt,A[1]=ae,A[2]=$t,A[3]=zt,F.clearBufferiv(F.COLOR,0,A))}else rt|=F.COLOR_BUFFER_BIT}W&&(rt|=F.DEPTH_BUFFER_BIT),at&&(rt|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(rt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Lt,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",bt,!1),Yt.dispose(),ut.dispose(),Kt.dispose(),Ht.dispose(),$e.dispose(),Je.dispose(),et.dispose(),Nt.dispose(),ue.dispose(),dt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",ri),Ct.removeEventListener("sessionend",Pr),Ri.stop()};function Lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Ft(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const R=ke.autoReset,W=qt.enabled,at=qt.autoUpdate,rt=qt.needsUpdate,K=qt.type;X(),ke.autoReset=R,qt.enabled=W,qt.autoUpdate=at,qt.needsUpdate=rt,qt.type=K}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function yt(R){const W=R.target;W.removeEventListener("dispose",yt),Gt(W)}function Gt(R){re(R),Ht.remove(R)}function re(R){const W=Ht.get(R).programs;W!==void 0&&(W.forEach(function(at){dt.releaseProgram(at)}),R.isShaderMaterial&&dt.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,at,rt,K,St){W===null&&(W=It);const Ot=K.isMesh&&K.matrixWorld.determinant()<0,Xt=ua(R,W,at,rt,K);Zt.setMaterial(rt,Ot);let zt=at.index,Jt=1;if(rt.wireframe===!0){if(zt=E.getWireframeAttribute(at),zt===void 0)return;Jt=2}const ae=at.drawRange,$t=at.attributes.position;let ge=ae.start*Jt,Le=(ae.start+ae.count)*Jt;St!==null&&(ge=Math.max(ge,St.start*Jt),Le=Math.min(Le,(St.start+St.count)*Jt)),zt!==null?(ge=Math.max(ge,0),Le=Math.min(Le,zt.count)):$t!=null&&(ge=Math.max(ge,0),Le=Math.min(Le,$t.count));const Xe=Le-ge;if(Xe<0||Xe===1/0)return;Nt.setup(K,rt,Xt,at,zt);let Ne,xe=Ut;if(zt!==null&&(Ne=U.get(zt),xe=Qt,xe.setIndex(Ne)),K.isMesh)rt.wireframe===!0?(Zt.setLineWidth(rt.wireframeLinewidth*ie()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(K.isLine){let jt=rt.linewidth;jt===void 0&&(jt=1),Zt.setLineWidth(jt*ie()),K.isLineSegments?xe.setMode(F.LINES):K.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else K.isPoints?xe.setMode(F.POINTS):K.isSprite&&xe.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xe.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(Vt.get("WEBGL_multi_draw"))xe.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const jt=K._multiDrawStarts,We=K._multiDrawCounts,Re=K._multiDrawCount,En=zt?U.get(zt).bytesPerElement:1,Ii=Ht.get(rt).currentProgram.getUniforms();for(let vn=0;vn<Re;vn++)Ii.setValue(F,"_gl_DrawID",vn),xe.render(jt[vn]/En,We[vn])}else if(K.isInstancedMesh)xe.renderInstances(ge,Xe,K.count);else if(at.isInstancedBufferGeometry){const jt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,We=Math.min(at.instanceCount,jt);xe.renderInstances(ge,Xe,We)}else xe.render(ge,Xe)};function Oe(R,W,at){R.transparent===!0&&R.side===Ei&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,Yn(R,W,at),R.side=Xa,R.needsUpdate=!0,Yn(R,W,at),R.side=Ei):Yn(R,W,at)}this.compile=function(R,W,at=null){at===null&&(at=R),v=Kt.get(at),v.init(W),N.push(v),at.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),R!==at&&R.traverseVisible(function(K){K.isLight&&K.layers.test(W.layers)&&(v.pushLight(K),K.castShadow&&v.pushShadow(K))}),v.setupLights();const rt=new Set;return R.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const St=K.material;if(St)if(Array.isArray(St))for(let Ot=0;Ot<St.length;Ot++){const Xt=St[Ot];Oe(Xt,at,K),rt.add(Xt)}else Oe(St,at,K),rt.add(St)}),v=N.pop(),rt},this.compileAsync=function(R,W,at=null){const rt=this.compile(R,W,at);return new Promise(K=>{function St(){if(rt.forEach(function(Ot){Ht.get(Ot).currentProgram.isReady()&&rt.delete(Ot)}),rt.size===0){K(R);return}setTimeout(St,10)}Vt.get("KHR_parallel_shader_compile")!==null?St():setTimeout(St,10)})};let Ae=null;function Ln(R){Ae&&Ae(R)}function ri(){Ri.stop()}function Pr(){Ri.start()}const Ri=new Cv;Ri.setAnimationLoop(Ln),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(R){Ae=R,Ct.setAnimationLoop(R),R===null?Ri.stop():Ri.start()},Ct.addEventListener("sessionstart",ri),Ct.addEventListener("sessionend",Pr),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(W),W=Ct.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,W,j),v=Kt.get(R,N.length),v.init(W),N.push(v),_t.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),wt.setFromProjectionMatrix(_t,Pi,W.reversedDepth),xt=this.localClippingEnabled,J=Dt.init(this.clippingPlanes,xt),M=ut.get(R,G.length),M.init(),G.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){const St=D.xr.getDepthSensingMesh();St!==null&&Rs(St,W,-1/0,D.sortObjects)}Rs(R,W,0,D.sortObjects),M.finish(),D.sortObjects===!0&&M.sort(mt,Et),ee=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,ee&&Yt.addToRenderList(M,R),this.info.render.frame++,J===!0&&Dt.beginShadows();const at=v.state.shadowsArray;qt.render(at,R,W),J===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const rt=M.opaque,K=M.transmissive;if(v.setupLights(),W.isArrayCamera){const St=W.cameras;if(K.length>0)for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const zt=St[Ot];ws(rt,K,R,zt)}ee&&Yt.render(R);for(let Ot=0,Xt=St.length;Ot<Xt;Ot++){const zt=St[Ot];Cs(M,R,zt,zt.viewport)}}else K.length>0&&ws(rt,K,R,W),ee&&Yt.render(R),Cs(M,R,W);j!==null&&P===0&&(ce.updateMultisampleRenderTarget(j),ce.updateRenderTargetMipmap(j)),R.isScene===!0&&R.onAfterRender(D,R,W),Nt.resetDefaultState(),w=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],J===!0&&Dt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,G.pop(),G.length>0?M=G[G.length-1]:M=null};function Rs(R,W,at,rt){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)at=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLight)v.pushLight(R),R.castShadow&&v.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||wt.intersectsSprite(R)){rt&&At.setFromMatrixPosition(R.matrixWorld).applyMatrix4(_t);const Ot=et.update(R),Xt=R.material;Xt.visible&&M.push(R,Ot,Xt,at,At.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||wt.intersectsObject(R))){const Ot=et.update(R),Xt=R.material;if(rt&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),At.copy(R.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),At.copy(Ot.boundingSphere.center)),At.applyMatrix4(R.matrixWorld).applyMatrix4(_t)),Array.isArray(Xt)){const zt=Ot.groups;for(let Jt=0,ae=zt.length;Jt<ae;Jt++){const $t=zt[Jt],ge=Xt[$t.materialIndex];ge&&ge.visible&&M.push(R,Ot,ge,at,At.z,$t)}}else Xt.visible&&M.push(R,Ot,Xt,at,At.z,null)}}const St=R.children;for(let Ot=0,Xt=St.length;Ot<Xt;Ot++)Rs(St[Ot],W,at,rt)}function Cs(R,W,at,rt){const K=R.opaque,St=R.transmissive,Ot=R.transparent;v.setupLightsView(at),J===!0&&Dt.setGlobalState(D.clippingPlanes,at),rt&&Zt.viewport(z.copy(rt)),K.length>0&&Wa(K,W,at),St.length>0&&Wa(St,W,at),Ot.length>0&&Wa(Ot,W,at),Zt.buffers.depth.setTest(!0),Zt.buffers.depth.setMask(!0),Zt.buffers.color.setMask(!0),Zt.setPolygonOffset(!1)}function ws(R,W,at,rt){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[rt.id]===void 0&&(v.state.transmissionRenderTarget[rt.id]=new Ts(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Xo:zi,minFilter:Ss,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const St=v.state.transmissionRenderTarget[rt.id],Ot=rt.viewport||z;St.setSize(Ot.z*D.transmissionResolutionScale,Ot.w*D.transmissionResolutionScale);const Xt=D.getRenderTarget(),zt=D.getActiveCubeFace(),Jt=D.getActiveMipmapLevel();D.setRenderTarget(St),D.getClearColor(ct),ht=D.getClearAlpha(),ht<1&&D.setClearColor(16777215,.5),D.clear(),ee&&Yt.render(at);const ae=D.toneMapping;D.toneMapping=ka;const $t=rt.viewport;if(rt.viewport!==void 0&&(rt.viewport=void 0),v.setupLightsView(rt),J===!0&&Dt.setGlobalState(D.clippingPlanes,rt),Wa(R,at,rt),ce.updateMultisampleRenderTarget(St),ce.updateRenderTargetMipmap(St),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let ge=!1;for(let Le=0,Xe=W.length;Le<Xe;Le++){const Ne=W[Le],xe=Ne.object,jt=Ne.geometry,We=Ne.material,Re=Ne.group;if(We.side===Ei&&xe.layers.test(rt.layers)){const En=We.side;We.side=Wn,We.needsUpdate=!0,zr(xe,at,rt,jt,We,Re),We.side=En,We.needsUpdate=!0,ge=!0}}ge===!0&&(ce.updateMultisampleRenderTarget(St),ce.updateRenderTargetMipmap(St))}D.setRenderTarget(Xt,zt,Jt),D.setClearColor(ct,ht),$t!==void 0&&(rt.viewport=$t),D.toneMapping=ae}function Wa(R,W,at){const rt=W.isScene===!0?W.overrideMaterial:null;for(let K=0,St=R.length;K<St;K++){const Ot=R[K],Xt=Ot.object,zt=Ot.geometry,Jt=Ot.group;let ae=Ot.material;ae.allowOverride===!0&&rt!==null&&(ae=rt),Xt.layers.test(at.layers)&&zr(Xt,W,at,zt,ae,Jt)}}function zr(R,W,at,rt,K,St){R.onBeforeRender(D,W,at,rt,K,St),R.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(D,W,at,rt,R,St),K.transparent===!0&&K.side===Ei&&K.forceSinglePass===!1?(K.side=Wn,K.needsUpdate=!0,D.renderBufferDirect(at,W,rt,K,R,St),K.side=Xa,K.needsUpdate=!0,D.renderBufferDirect(at,W,rt,K,R,St),K.side=Ei):D.renderBufferDirect(at,W,rt,K,R,St),R.onAfterRender(D,W,at,rt,K,St)}function Yn(R,W,at){W.isScene!==!0&&(W=It);const rt=Ht.get(R),K=v.state.lights,St=v.state.shadowsArray,Ot=K.state.version,Xt=dt.getParameters(R,K.state,St,W,at),zt=dt.getProgramCacheKey(Xt);let Jt=rt.programs;rt.environment=R.isMeshStandardMaterial?W.environment:null,rt.fog=W.fog,rt.envMap=(R.isMeshStandardMaterial?Je:$e).get(R.envMap||rt.environment),rt.envMapRotation=rt.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,Jt===void 0&&(R.addEventListener("dispose",yt),Jt=new Map,rt.programs=Jt);let ae=Jt.get(zt);if(ae!==void 0){if(rt.currentProgram===ae&&rt.lightsStateVersion===Ot)return Mn(R,Xt),ae}else Xt.uniforms=dt.getUniforms(R),R.onBeforeCompile(Xt,D),ae=dt.acquireProgram(Xt,zt),Jt.set(zt,ae),rt.uniforms=Xt.uniforms;const $t=rt.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&($t.clippingPlanes=Dt.uniform),Mn(R,Xt),rt.needsLights=Kc(R),rt.lightsStateVersion=Ot,rt.needsLights&&($t.ambientLightColor.value=K.state.ambient,$t.lightProbe.value=K.state.probe,$t.directionalLights.value=K.state.directional,$t.directionalLightShadows.value=K.state.directionalShadow,$t.spotLights.value=K.state.spot,$t.spotLightShadows.value=K.state.spotShadow,$t.rectAreaLights.value=K.state.rectArea,$t.ltc_1.value=K.state.rectAreaLTC1,$t.ltc_2.value=K.state.rectAreaLTC2,$t.pointLights.value=K.state.point,$t.pointLightShadows.value=K.state.pointShadow,$t.hemisphereLights.value=K.state.hemi,$t.directionalShadowMap.value=K.state.directionalShadowMap,$t.directionalShadowMatrix.value=K.state.directionalShadowMatrix,$t.spotShadowMap.value=K.state.spotShadowMap,$t.spotLightMatrix.value=K.state.spotLightMatrix,$t.spotLightMap.value=K.state.spotLightMap,$t.pointShadowMap.value=K.state.pointShadowMap,$t.pointShadowMatrix.value=K.state.pointShadowMatrix),rt.currentProgram=ae,rt.uniformsList=null,ae}function rn(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Fc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Mn(R,W){const at=Ht.get(R);at.outputColorSpace=W.outputColorSpace,at.batching=W.batching,at.batchingColor=W.batchingColor,at.instancing=W.instancing,at.instancingColor=W.instancingColor,at.instancingMorph=W.instancingMorph,at.skinning=W.skinning,at.morphTargets=W.morphTargets,at.morphNormals=W.morphNormals,at.morphColors=W.morphColors,at.morphTargetsCount=W.morphTargetsCount,at.numClippingPlanes=W.numClippingPlanes,at.numIntersection=W.numClipIntersection,at.vertexAlphas=W.vertexAlphas,at.vertexTangents=W.vertexTangents,at.toneMapping=W.toneMapping}function ua(R,W,at,rt,K){W.isScene!==!0&&(W=It),ce.resetTextureUnits();const St=W.fog,Ot=rt.isMeshStandardMaterial?W.environment:null,Xt=j===null?D.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Lr,zt=(rt.isMeshStandardMaterial?Je:$e).get(rt.envMap||Ot),Jt=rt.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ae=!!at.attributes.tangent&&(!!rt.normalMap||rt.anisotropy>0),$t=!!at.morphAttributes.position,ge=!!at.morphAttributes.normal,Le=!!at.morphAttributes.color;let Xe=ka;rt.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Xe=D.toneMapping);const Ne=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,xe=Ne!==void 0?Ne.length:0,jt=Ht.get(rt),We=v.state.lights;if(J===!0&&(xt===!0||R!==C)){const dn=R===C&&rt.id===w;Dt.setState(rt,R,dn)}let Re=!1;rt.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==We.state.version||jt.outputColorSpace!==Xt||K.isBatchedMesh&&jt.batching===!1||!K.isBatchedMesh&&jt.batching===!0||K.isBatchedMesh&&jt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&jt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&jt.instancing===!1||!K.isInstancedMesh&&jt.instancing===!0||K.isSkinnedMesh&&jt.skinning===!1||!K.isSkinnedMesh&&jt.skinning===!0||K.isInstancedMesh&&jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&jt.instancingMorph===!1&&K.morphTexture!==null||jt.envMap!==zt||rt.fog===!0&&jt.fog!==St||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==Dt.numPlanes||jt.numIntersection!==Dt.numIntersection)||jt.vertexAlphas!==Jt||jt.vertexTangents!==ae||jt.morphTargets!==$t||jt.morphNormals!==ge||jt.morphColors!==Le||jt.toneMapping!==Xe||jt.morphTargetsCount!==xe)&&(Re=!0):(Re=!0,jt.__version=rt.version);let En=jt.currentProgram;Re===!0&&(En=Yn(rt,W,K));let Ii=!1,vn=!1,Ya=!1;const Me=En.getUniforms(),Cn=jt.uniforms;if(Zt.useProgram(En.program)&&(Ii=!0,vn=!0,Ya=!0),rt.id!==w&&(w=rt.id,vn=!0),Ii||C!==R){Zt.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Me.setValue(F,"projectionMatrix",R.projectionMatrix),Me.setValue(F,"viewMatrix",R.matrixWorldInverse);const nn=Me.map.cameraPosition;nn!==void 0&&nn.setValue(F,vt.setFromMatrixPosition(R.matrixWorld)),he.logarithmicDepthBuffer&&Me.setValue(F,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(rt.isMeshPhongMaterial||rt.isMeshToonMaterial||rt.isMeshLambertMaterial||rt.isMeshBasicMaterial||rt.isMeshStandardMaterial||rt.isShaderMaterial)&&Me.setValue(F,"isOrthographic",R.isOrthographicCamera===!0),C!==R&&(C=R,vn=!0,Ya=!0)}if(K.isSkinnedMesh){Me.setOptional(F,K,"bindMatrix"),Me.setOptional(F,K,"bindMatrixInverse");const dn=K.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Me.setValue(F,"boneTexture",dn.boneTexture,ce))}K.isBatchedMesh&&(Me.setOptional(F,K,"batchingTexture"),Me.setValue(F,"batchingTexture",K._matricesTexture,ce),Me.setOptional(F,K,"batchingIdTexture"),Me.setValue(F,"batchingIdTexture",K._indirectTexture,ce),Me.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Me.setValue(F,"batchingColorTexture",K._colorsTexture,ce));const Nn=at.morphAttributes;if((Nn.position!==void 0||Nn.normal!==void 0||Nn.color!==void 0)&&Rt.update(K,at,En),(vn||jt.receiveShadow!==K.receiveShadow)&&(jt.receiveShadow=K.receiveShadow,Me.setValue(F,"receiveShadow",K.receiveShadow)),rt.isMeshGouraudMaterial&&rt.envMap!==null&&(Cn.envMap.value=zt,Cn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),rt.isMeshStandardMaterial&&rt.envMap===null&&W.environment!==null&&(Cn.envMapIntensity.value=W.environmentIntensity),vn&&(Me.setValue(F,"toneMappingExposure",D.toneMappingExposure),jt.needsLights&&Br(Cn,Ya),St&&rt.fog===!0&&Tt.refreshFogUniforms(Cn,St),Tt.refreshMaterialUniforms(Cn,rt,q,Z,v.state.transmissionRenderTarget[R.id]),Fc.upload(F,rn(jt),Cn,ce)),rt.isShaderMaterial&&rt.uniformsNeedUpdate===!0&&(Fc.upload(F,rn(jt),Cn,ce),rt.uniformsNeedUpdate=!1),rt.isSpriteMaterial&&Me.setValue(F,"center",K.center),Me.setValue(F,"modelViewMatrix",K.modelViewMatrix),Me.setValue(F,"normalMatrix",K.normalMatrix),Me.setValue(F,"modelMatrix",K.matrixWorld),rt.isShaderMaterial||rt.isRawShaderMaterial){const dn=rt.uniformsGroups;for(let nn=0,Ds=dn.length;nn<Ds;nn++){const Ci=dn[nn];ue.update(Ci,En),ue.bind(Ci,En)}}return En}function Br(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Kc(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(R,W,at){const rt=Ht.get(R);rt.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,rt.__autoAllocateDepthBuffer===!1&&(rt.__useRenderToTexture=!1),Ht.get(R.texture).__webglTexture=W,Ht.get(R.depthTexture).__webglTexture=rt.__autoAllocateDepthBuffer?void 0:at,rt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const at=Ht.get(R);at.__webglFramebuffer=W,at.__useDefaultFramebuffer=W===void 0};const Qc=F.createFramebuffer();this.setRenderTarget=function(R,W=0,at=0){j=R,H=W,P=at;let rt=!0,K=null,St=!1,Ot=!1;if(R){const zt=Ht.get(R);if(zt.__useDefaultFramebuffer!==void 0)Zt.bindFramebuffer(F.FRAMEBUFFER,null),rt=!1;else if(zt.__webglFramebuffer===void 0)ce.setupRenderTarget(R);else if(zt.__hasExternalTextures)ce.rebindTextures(R,Ht.get(R.texture).__webglTexture,Ht.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const $t=R.depthTexture;if(zt.__boundDepthTexture!==$t){if($t!==null&&Ht.has($t)&&(R.width!==$t.image.width||R.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ce.setupDepthRenderbuffer(R)}}const Jt=R.texture;(Jt.isData3DTexture||Jt.isDataArrayTexture||Jt.isCompressedArrayTexture)&&(Ot=!0);const ae=Ht.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ae[W])?K=ae[W][at]:K=ae[W],St=!0):R.samples>0&&ce.useMultisampledRTT(R)===!1?K=Ht.get(R).__webglMultisampledFramebuffer:Array.isArray(ae)?K=ae[at]:K=ae,z.copy(R.viewport),st.copy(R.scissor),ot=R.scissorTest}else z.copy(L).multiplyScalar(q).floor(),st.copy(nt).multiplyScalar(q).floor(),ot=Mt;if(at!==0&&(K=Qc),Zt.bindFramebuffer(F.FRAMEBUFFER,K)&&rt&&Zt.drawBuffers(R,K),Zt.viewport(z),Zt.scissor(st),Zt.setScissorTest(ot),St){const zt=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+W,zt.__webglTexture,at)}else if(Ot){const zt=W;for(let Jt=0;Jt<R.textures.length;Jt++){const ae=Ht.get(R.textures[Jt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Jt,ae.__webglTexture,at,zt)}}else if(R!==null&&at!==0){const zt=Ht.get(R.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zt.__webglTexture,at)}w=-1},this.readRenderTargetPixels=function(R,W,at,rt,K,St,Ot,Xt=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt){Zt.bindFramebuffer(F.FRAMEBUFFER,zt);try{const Jt=R.textures[Xt],ae=Jt.format,$t=Jt.type;if(!he.textureFormatReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-rt&&at>=0&&at<=R.height-K&&(R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xt),F.readPixels(W,at,rt,K,Bt.convert(ae),Bt.convert($t),St))}finally{const Jt=j!==null?Ht.get(j).__webglFramebuffer:null;Zt.bindFramebuffer(F.FRAMEBUFFER,Jt)}}},this.readRenderTargetPixelsAsync=async function(R,W,at,rt,K,St,Ot,Xt=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=Ht.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ot!==void 0&&(zt=zt[Ot]),zt)if(W>=0&&W<=R.width-rt&&at>=0&&at<=R.height-K){Zt.bindFramebuffer(F.FRAMEBUFFER,zt);const Jt=R.textures[Xt],ae=Jt.format,$t=Jt.type;if(!he.textureFormatReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ge=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.bufferData(F.PIXEL_PACK_BUFFER,St.byteLength,F.STREAM_READ),R.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Xt),F.readPixels(W,at,rt,K,Bt.convert(ae),Bt.convert($t),0);const Le=j!==null?Ht.get(j).__webglFramebuffer:null;Zt.bindFramebuffer(F.FRAMEBUFFER,Le);const Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await XS(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ge),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,St),F.deleteBuffer(ge),F.deleteSync(Xe),St}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,at=0){const rt=Math.pow(2,-at),K=Math.floor(R.image.width*rt),St=Math.floor(R.image.height*rt),Ot=W!==null?W.x:0,Xt=W!==null?W.y:0;ce.setTexture2D(R,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,Ot,Xt,K,St),Zt.unbindTexture()};const Ko=F.createFramebuffer(),qa=F.createFramebuffer();this.copyTextureToTexture=function(R,W,at=null,rt=null,K=0,St=null){St===null&&(K!==0?(Rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),St=K,K=0):St=0);let Ot,Xt,zt,Jt,ae,$t,ge,Le,Xe;const Ne=R.isCompressedTexture?R.mipmaps[St]:R.image;if(at!==null)Ot=at.max.x-at.min.x,Xt=at.max.y-at.min.y,zt=at.isBox3?at.max.z-at.min.z:1,Jt=at.min.x,ae=at.min.y,$t=at.isBox3?at.min.z:0;else{const Nn=Math.pow(2,-K);Ot=Math.floor(Ne.width*Nn),Xt=Math.floor(Ne.height*Nn),R.isDataArrayTexture?zt=Ne.depth:R.isData3DTexture?zt=Math.floor(Ne.depth*Nn):zt=1,Jt=0,ae=0,$t=0}rt!==null?(ge=rt.x,Le=rt.y,Xe=rt.z):(ge=0,Le=0,Xe=0);const xe=Bt.convert(W.format),jt=Bt.convert(W.type);let We;W.isData3DTexture?(ce.setTexture3D(W,0),We=F.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(ce.setTexture2DArray(W,0),We=F.TEXTURE_2D_ARRAY):(ce.setTexture2D(W,0),We=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,W.unpackAlignment);const Re=F.getParameter(F.UNPACK_ROW_LENGTH),En=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ii=F.getParameter(F.UNPACK_SKIP_PIXELS),vn=F.getParameter(F.UNPACK_SKIP_ROWS),Ya=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ne.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ne.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Jt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ae),F.pixelStorei(F.UNPACK_SKIP_IMAGES,$t);const Me=R.isDataArrayTexture||R.isData3DTexture,Cn=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const Nn=Ht.get(R),dn=Ht.get(W),nn=Ht.get(Nn.__renderTarget),Ds=Ht.get(dn.__renderTarget);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,nn.__webglFramebuffer),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ds.__webglFramebuffer);for(let Ci=0;Ci<zt;Ci++)Me&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(R).__webglTexture,K,$t+Ci),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.get(W).__webglTexture,St,Xe+Ci)),F.blitFramebuffer(Jt,ae,Ot,Xt,ge,Le,Ot,Xt,F.DEPTH_BUFFER_BIT,F.NEAREST);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||R.isRenderTargetTexture||Ht.has(R)){const Nn=Ht.get(R),dn=Ht.get(W);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,Ko),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,qa);for(let nn=0;nn<zt;nn++)Me?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nn.__webglTexture,K,$t+nn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Nn.__webglTexture,K),Cn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dn.__webglTexture,St,Xe+nn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dn.__webglTexture,St),K!==0?F.blitFramebuffer(Jt,ae,Ot,Xt,ge,Le,Ot,Xt,F.COLOR_BUFFER_BIT,F.NEAREST):Cn?F.copyTexSubImage3D(We,St,ge,Le,Xe+nn,Jt,ae,Ot,Xt):F.copyTexSubImage2D(We,St,ge,Le,Jt,ae,Ot,Xt);Zt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Zt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Cn?R.isDataTexture||R.isData3DTexture?F.texSubImage3D(We,St,ge,Le,Xe,Ot,Xt,zt,xe,jt,Ne.data):W.isCompressedArrayTexture?F.compressedTexSubImage3D(We,St,ge,Le,Xe,Ot,Xt,zt,xe,Ne.data):F.texSubImage3D(We,St,ge,Le,Xe,Ot,Xt,zt,xe,jt,Ne):R.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,St,ge,Le,Ot,Xt,xe,jt,Ne.data):R.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,St,ge,Le,Ne.width,Ne.height,xe,Ne.data):F.texSubImage2D(F.TEXTURE_2D,St,ge,Le,Ot,Xt,xe,jt,Ne);F.pixelStorei(F.UNPACK_ROW_LENGTH,Re),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,En),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ii),F.pixelStorei(F.UNPACK_SKIP_ROWS,vn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ya),St===0&&W.generateMipmaps&&F.generateMipmap(We),Zt.unbindTexture()},this.copyTextureToTexture3D=function(R,W,at=null,rt=null,K=0){return Rr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,W,at,rt,K)},this.initRenderTarget=function(R){Ht.get(R).__webglFramebuffer===void 0&&ce.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ce.setTextureCube(R,0):R.isData3DTexture?ce.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ce.setTexture2DArray(R,0):ce.setTexture2D(R,0),Zt.unbindTexture()},this.resetState=function(){H=0,P=0,j=null,Zt.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(t),i.unpackColorSpace=De._getUnpackColorSpace()}}const W0={type:"change"},Yd={type:"start"},Ov={type:"end"},Uc=new qc,q0=new Ha,m1=Math.cos(70*VS.DEG2RAD),mn=new Y,Xn=2*Math.PI,Ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Vh=1e-6;class g1 extends UM{constructor(t,i=null){super(t,i),this.state=Ge.NONE,this.target=new Y,this.cursor=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:br.ROTATE,MIDDLE:br.DOLLY,RIGHT:br.PAN},this.touches={ONE:Er.ROTATE,TWO:Er.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Y,this._lastQuaternion=new Es,this._lastTargetPosition=new Y,this._quat=new Es().setFromUnitVectors(t.up,new Y(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new y0,this._sphericalDelta=new y0,this._scale=1,this._panOffset=new Y,this._rotateStart=new se,this._rotateEnd=new se,this._rotateDelta=new se,this._panStart=new se,this._panEnd=new se,this._panDelta=new se,this._dollyStart=new se,this._dollyEnd=new se,this._dollyDelta=new se,this._dollyDirection=new Y,this._mouse=new se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v1.bind(this),this._onPointerDown=_1.bind(this),this._onPointerUp=x1.bind(this),this._onContextMenu=A1.bind(this),this._onMouseWheel=M1.bind(this),this._onKeyDown=E1.bind(this),this._onTouchStart=T1.bind(this),this._onTouchMove=b1.bind(this),this._onMouseDown=y1.bind(this),this._onMouseMove=S1.bind(this),this._interceptControlDown=R1.bind(this),this._interceptControlUp=C1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(W0),this.update(),this.state=Ge.NONE}update(t=null){const i=this.object.position;mn.copy(i).sub(this.target),mn.applyQuaternion(this._quat),this._spherical.setFromVector3(mn),this.autoRotate&&this.state===Ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let s=this.minAzimuthAngle,l=this.maxAzimuthAngle;isFinite(s)&&isFinite(l)&&(s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),l<-Math.PI?l+=Xn:l>Math.PI&&(l-=Xn),s<=l?this._spherical.theta=Math.max(s,Math.min(l,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(s+l)/2?Math.max(s,this._spherical.theta):Math.min(l,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let c=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const h=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),c=h!=this._spherical.radius}if(mn.setFromSpherical(this._spherical),mn.applyQuaternion(this._quatInverse),i.copy(this.target).add(mn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let h=null;if(this.object.isPerspectiveCamera){const d=mn.length();h=this._clampDistance(d*this._scale);const m=d-h;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),c=!!m}else if(this.object.isOrthographicCamera){const d=new Y(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),c=m!==this.object.zoom;const p=new Y(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),h=mn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;h!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(h).add(this.object.position):(Uc.origin.copy(this.object.position),Uc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Uc.direction))<m1?this.object.lookAt(this.target):(q0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Uc.intersectPlane(q0,this.target))))}else if(this.object.isOrthographicCamera){const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),h!==this.object.zoom&&(this.object.updateProjectionMatrix(),c=!0)}return this._scale=1,this._performCursorZoom=!1,c||this._lastPosition.distanceToSquared(this.object.position)>Vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Vh||this._lastTargetPosition.distanceToSquared(this.target)>Vh?(this.dispatchEvent(W0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const i=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*i)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,i){mn.setFromMatrixColumn(i,0),mn.multiplyScalar(-t),this._panOffset.add(mn)}_panUp(t,i){this.screenSpacePanning===!0?mn.setFromMatrixColumn(i,1):(mn.setFromMatrixColumn(i,0),mn.crossVectors(this.object.up,mn)),mn.multiplyScalar(t),this._panOffset.add(mn)}_pan(t,i){const s=this.domElement;if(this.object.isPerspectiveCamera){const l=this.object.position;mn.copy(l).sub(this.target);let c=mn.length();c*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*c/s.clientHeight,this.object.matrix),this._panUp(2*i*c/s.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/s.clientWidth,this.object.matrix),this._panUp(i*(this.object.top-this.object.bottom)/this.object.zoom/s.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,i){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const s=this.domElement.getBoundingClientRect(),l=t-s.left,c=i-s.top,h=s.width,d=s.height;this._mouse.x=l/h*2-1,this._mouse.y=-(c/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let i=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),i=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),i=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),i=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),i=!0;break}i&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._rotateStart.set(s,l)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panStart.set(s,l)}}_handleTouchStartDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyStart.set(0,c)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const s=this._getSecondPointerPosition(t),l=.5*(t.pageX+s.x),c=.5*(t.pageY+s.y);this._rotateEnd.set(l,c)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const i=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/i.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/i.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),l=.5*(t.pageY+i.y);this._panEnd.set(s,l)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const i=this._getSecondPointerPosition(t),s=t.pageX-i.x,l=t.pageY-i.y,c=Math.sqrt(s*s+l*l);this._dollyEnd.set(0,c),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const h=(t.pageX+i.x)*.5,d=(t.pageY+i.y)*.5;this._updateZoomParameters(h,d)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId){this._pointers.splice(i,1);return}}_isTrackingPointer(t){for(let i=0;i<this._pointers.length;i++)if(this._pointers[i]==t.pointerId)return!0;return!1}_trackPointer(t){let i=this._pointerPositions[t.pointerId];i===void 0&&(i=new se,this._pointerPositions[t.pointerId]=i),i.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const i=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[i]}_customWheelEvent(t){const i=t.deltaMode,s={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(i){case 1:s.deltaY*=16;break;case 2:s.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(s.deltaY*=10),s}}function _1(o){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(o.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(o)&&(this._addPointer(o),o.pointerType==="touch"?this._onTouchStart(o):this._onMouseDown(o)))}function v1(o){this.enabled!==!1&&(o.pointerType==="touch"?this._onTouchMove(o):this._onMouseMove(o))}function x1(o){switch(this._removePointer(o),this._pointers.length){case 0:this.domElement.releasePointerCapture(o.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ov),this.state=Ge.NONE;break;case 1:const t=this._pointers[0],i=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:i.x,pageY:i.y});break}}function y1(o){let t;switch(o.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case br.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(o),this.state=Ge.DOLLY;break;case br.ROTATE:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}break;case br.PAN:if(o.ctrlKey||o.metaKey||o.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(o),this.state=Ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(o),this.state=Ge.PAN}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Yd)}function S1(o){switch(this.state){case Ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(o);break;case Ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(o);break;case Ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(o);break}}function M1(o){this.enabled===!1||this.enableZoom===!1||this.state!==Ge.NONE||(o.preventDefault(),this.dispatchEvent(Yd),this._handleMouseWheel(this._customWheelEvent(o)),this.dispatchEvent(Ov))}function E1(o){this.enabled!==!1&&this._handleKeyDown(o)}function T1(o){switch(this._trackPointer(o),this._pointers.length){case 1:switch(this.touches.ONE){case Er.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(o),this.state=Ge.TOUCH_ROTATE;break;case Er.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(o),this.state=Ge.TOUCH_PAN;break;default:this.state=Ge.NONE}break;case 2:switch(this.touches.TWO){case Er.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(o),this.state=Ge.TOUCH_DOLLY_PAN;break;case Er.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(o),this.state=Ge.TOUCH_DOLLY_ROTATE;break;default:this.state=Ge.NONE}break;default:this.state=Ge.NONE}this.state!==Ge.NONE&&this.dispatchEvent(Yd)}function b1(o){switch(this._trackPointer(o),this.state){case Ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(o),this.update();break;case Ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(o),this.update();break;case Ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(o),this.update();break;case Ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(o),this.update();break;default:this.state=Ge.NONE}}function A1(o){this.enabled!==!1&&o.preventDefault()}function R1(o){o.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function C1(o){o.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const kh={normal:9427199,iron:14132811,copper:4965815,algae:5809756,chromium:15774264,turbidity:10928762},Y0={normal:8312831,warning:16758531,danger:15087942},Z0=(o,t,i,s=0)=>{const l=new Float32Array(o*3);for(let c=0;c<o;c+=1){const h=Math.random()*Math.PI*2,d=Math.sqrt(Math.random())*t;l[c*3]=Math.cos(h)*d,l[c*3+1]=(Math.random()-.5)*i+s,l[c*3+2]=Math.sin(h)*d}return l};function Pv({data:o,className:t=""}){const i=Ze.useRef(null),s=Ze.useRef({});return Ze.useEffect(()=>{if(!i.current)return;const l=i.current,c=l.clientWidth||640,h=l.clientHeight||420,d=new mM;d.fog=new Vd(14678015,.045);const m=new si(42,c/h,.1,100);m.position.set(3.1,2.35,4.2);const p=new p1({antialias:!0,alpha:!0});p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.setSize(c,h),p.outputColorSpace=ai,l.appendChild(p.domElement);const g=new g1(m,p.domElement);g.enableDamping=!0,g.enablePan=!1,g.minDistance=3.4,g.maxDistance=7.5,g.target.set(0,.2,0),d.add(new RM(14479359,.75));const _=new AM(16777215,1.3);_.position.set(3,4,2),d.add(_);const y=new TM(16758531,2.2,8);y.position.set(-1.9,1.4,1.3),d.add(y);const S=new zo;d.add(S);const T=new g0({color:14678527,transparent:!0,opacity:.22,roughness:.06,metalness:0,transmission:.4,thickness:.45,side:Ei}),A=new jn(new Io(.92,.82,2.7,72,1,!0),T);A.position.y=.08,S.add(A);const M=new jn(new jd(.92,.025,12,80),new Ic({color:15268863,transparent:!0,opacity:.55}));M.rotation.x=Math.PI/2,M.position.y=1.43,S.add(M);const v=M.clone();v.position.y=-1.27,S.add(v);const G=new g0({color:kh.normal,transparent:!0,opacity:.64,roughness:.2,metalness:0,transmission:.16,side:Ei}),N=new jn(new Io(.78,.72,1.72,72),G);N.position.y=-.23,S.add(N);const D=new jn(new Xd(.78,72),new Ic({color:15204351,transparent:!0,opacity:.22}));D.rotation.x=-Math.PI/2,D.position.y=.64,S.add(D);const V=260,H=new zn;H.setAttribute("position",new gi(Z0(V,.68,1.48,-.22),3));const P=new Dd({color:16054237,size:.026,transparent:!0,opacity:.72,depthWrite:!1}),j=new p0(H,P);S.add(j);const w=150,C=new zn;C.setAttribute("position",new gi(Z0(w,.62,.14,-1.1),3));const z=new Dd({color:13283451,size:.04,transparent:!0,opacity:.8,depthWrite:!1}),st=new p0(C,z);S.add(st);const ot=new jn(new Io(1.22,1.35,.12,72),new Ic({color:12577015,roughness:.55,metalness:.08}));ot.position.y=-1.42,S.add(ot);const ct=new DM(5.2,14,4565448,12115434);ct.position.y=-1.5,d.add(ct),s.current={renderer:p,scene:d,camera:m,controls:g,group:S,water:N,surface:D,particles:j,precipitate:st,riskLight:y,particleMaterial:P,precipitateMaterial:z};let ht=0;const O=new wM,Z=()=>{const mt=O.getElapsedTime();g.update(),S.rotation.y=Math.sin(mt*.28)*.08,D.position.y=.64+Math.sin(mt*1.8)*.018,s.current.flashDanger&&(y.intensity=2.4+Math.sin(mt*5.8)*1.2),p.render(d,m),ht=requestAnimationFrame(Z)};Z();const q=new ResizeObserver(([mt])=>{const Et=Math.max(280,mt.contentRect.width),L=Math.max(260,mt.contentRect.height);m.aspect=Et/L,m.updateProjectionMatrix(),p.setSize(Et,L)});return q.observe(l),()=>{cancelAnimationFrame(ht),q.disconnect(),g.dispose(),p.dispose(),l.removeChild(p.domElement),d.traverse(mt=>{mt.geometry&&mt.geometry.dispose(),mt.material&&(Array.isArray(mt.material)?mt.material.forEach(Et=>Et.dispose()):mt.material.dispose())})}},[]),Ze.useEffect(()=>{const l=s.current;if(!l.water)return;const c={pollutionType:"normal",turbidity:.15,precipitate:.1,riskLevel:"normal",...o},h=kh[c.pollutionType]||kh.normal,d=Y0[c.riskLevel]||Y0.normal;l.water.material.color.setHex(h),l.water.material.opacity=.72-Math.min(c.turbidity,.9)*.24,l.surface.material.color.setHex(h),l.surface.material.opacity=.16+Math.min(c.turbidity,1)*.18;const m=Math.max(8,Math.round(260*Math.min(Math.max(c.turbidity,0),1)));l.particles.geometry.setDrawRange(0,m),l.particleMaterial.opacity=.38+Math.min(c.turbidity,1)*.48;const p=Math.max(4,Math.round(150*Math.min(Math.max(c.precipitate,0),1)));l.precipitate.geometry.setDrawRange(0,p),l.precipitateMaterial.opacity=.35+Math.min(c.precipitate,1)*.5,l.riskLight.color.setHex(d),l.riskLight.intensity=c.riskLevel==="normal"?1.2:2.6,l.flashDanger=c.riskLevel==="danger"},[o]),I.jsx("div",{ref:i,className:`water-scene ${t}`,"aria-label":"三维水样污染模拟舱"})}const Hc=[{id:"WQ-2026-001",title:"校园饮用水发黄事件",shortTitle:"饮水发黄",type:"校园饮用水",location:"教学楼一层饮水机",appearance:"浅黄色，轻微金属味",clue:"管道近期维修，清晨首次放水颜色更明显",role:"现场检测员",goal:"判断可能原因，设计初筛检测方案并形成教学模拟报告",riskLabel:"教学模拟需复测",scene:{pollutionType:"iron",turbidity:.42,precipitate:.28,riskLevel:"warning"},recommendedIndicators:["pH","浊度","Fe³⁺","Mn²⁺","硬度","Cl⁻"],suggestedMethods:["pH计","分光光度法","EDTA络合滴定","AgNO₃沉淀滴定"],simulatedData:[{indicator:"pH",value:"6.8",unit:"",status:"正常",explain:"酸碱性未见明显异常"},{indicator:"浊度",value:"4.6",unit:"NTU",status:"可疑",explain:"可能与管道扰动和悬浮颗粒有关"},{indicator:"Fe³⁺",value:"0.58",unit:"mg/L",status:"异常",explain:"与发黄和金属味存在关联"},{indicator:"硬度",value:"238",unit:"mg/L CaCO₃",status:"偏高",explain:"提示结垢风险，需结合管网情况判断"},{indicator:"Cl⁻",value:"78",unit:"mg/L",status:"正常",explain:"暂不支持氯化物异常输入"}]},{id:"WQ-2026-002",title:"河道鱼类异常死亡事件",shortTitle:"河道鱼亡",type:"地表水应急",location:"校园东侧河道中游",appearance:"略浑浊，有轻微刺激性气味",clue:"上游有生活污水排口，前一日降雨后水位上涨",role:"环境检测员",goal:"制定河道水质初筛方案，判断缺氧、有机污染或重金属风险",riskLabel:"教学模拟需扩展检测",scene:{pollutionType:"algae",turbidity:.66,precipitate:.2,riskLevel:"danger"},recommendedIndicators:["pH","DO","NH₄⁺","NO₂⁻","NO₃⁻","COD","Cu²⁺","Pb²⁺","Cr(VI)"],suggestedMethods:["pH计","溶解氧仪","分光光度法","快速检测试剂","仪器分析法"],simulatedData:[{indicator:"pH",value:"6.3",unit:"",status:"可疑",explain:"偏弱酸，需结合上游输入判断"},{indicator:"DO",value:"2.1",unit:"mg/L",status:"异常",explain:"低溶解氧可解释鱼类上浮风险"},{indicator:"NH₄⁺",value:"2.8",unit:"mg/L",status:"异常",explain:"提示含氮污染输入"},{indicator:"COD",value:"42",unit:"mg/L",status:"异常",explain:"提示有机物负荷升高"},{indicator:"Cu²⁺",value:"0.03",unit:"mg/L",status:"正常",explain:"暂不支持铜污染为主因"}]},{id:"WQ-2026-003",title:"实验室废水误排事件",shortTitle:"废水误排",type:"实验室安全",location:"基础化学实验室废液暂存区",appearance:"黄色偏橙，局部有蓝绿色痕迹",clue:"含铜盐和铬酸盐实验刚结束，废液桶标签不清",role:"实验室分析员",goal:"完成未知废水初步鉴别、风险分级和安全处置建议",riskLabel:"教学模拟高风险",scene:{pollutionType:"chromium",turbidity:.35,precipitate:.48,riskLevel:"danger"},recommendedIndicators:["pH","Cu²⁺","Cr(VI)","Cl⁻","电导率","颜色与沉淀"],suggestedMethods:["pH试纸","目视比色法","分光光度法","AgNO₃沉淀滴定","仪器分析法"],simulatedData:[{indicator:"pH",value:"3.2",unit:"",status:"异常",explain:"提示酸性废液风险"},{indicator:"Cr(VI)",value:"0.36",unit:"mg/L",status:"异常",explain:"与黄色外观和强氧化性风险相关"},{indicator:"Cu²⁺",value:"0.72",unit:"mg/L",status:"异常",explain:"与蓝绿色痕迹存在关联"},{indicator:"Cl⁻",value:"142",unit:"mg/L",status:"可疑",explain:"需结合废液来源和空白对照判断"},{indicator:"电导率",value:"2680",unit:"μS/cm",status:"异常",explain:"总离子强度较高"}]},{id:"WQ-2026-004",title:"鱼塘水体浑浊事件",shortTitle:"鱼塘浑浊",type:"农业水体",location:"校外实训基地鱼塘",appearance:"绿色浑浊，表层有少量泡沫",clue:"近期高温，投喂量增加，午后异味较明显",role:"水质监测员",goal:"判断藻类、有机负荷与含氮污染风险，设计复测方案",riskLabel:"教学模拟可疑",scene:{pollutionType:"turbidity",turbidity:.78,precipitate:.18,riskLevel:"warning"},recommendedIndicators:["pH","浊度","DO","NH₄⁺","NO₂⁻","COD","电导率"],suggestedMethods:["pH计","溶解氧仪","比浊分析","分光光度法","快速检测试剂"],simulatedData:[{indicator:"pH",value:"8.4",unit:"",status:"可疑",explain:"藻类光合作用可造成日间pH升高"},{indicator:"浊度",value:"32",unit:"NTU",status:"异常",explain:"与绿色浑浊外观一致"},{indicator:"DO",value:"5.2",unit:"mg/L",status:"可疑",explain:"需晨间复测判断夜间缺氧"},{indicator:"NH₄⁺",value:"1.1",unit:"mg/L",status:"可疑",explain:"可能与投喂和分解有关"},{indicator:"COD",value:"28",unit:"mg/L",status:"可疑",explain:"提示有机负荷升高"}]}],ko=[{name:"pH",meaning:"判断酸碱性和金属溶出条件",method:"pH计",group:"基础指标"},{name:"浊度",meaning:"识别悬浮颗粒和水体混浊程度",method:"比浊分析",group:"基础指标"},{name:"电导率",meaning:"判断总离子强度和盐分输入",method:"电导率仪",group:"基础指标"},{name:"硬度",meaning:"反映Ca²⁺、Mg²⁺含量和结垢风险",method:"EDTA络合滴定",group:"滴定分析"},{name:"Cl⁻",meaning:"判断消毒、盐分或管网污染输入",method:"AgNO₃沉淀滴定",group:"滴定分析"},{name:"Fe³⁺",meaning:"判断水体发黄和金属味可能来源",method:"分光光度法",group:"金属离子"},{name:"Fe²⁺",meaning:"辅助识别还原性铁和管网锈蚀",method:"分光光度法",group:"金属离子"},{name:"Mn²⁺",meaning:"辅助排除地下水或管道锰异常",method:"目视比色法",group:"金属离子"},{name:"Cu²⁺",meaning:"识别铜盐或实验室废水风险",method:"目视比色法",group:"金属离子"},{name:"Pb²⁺",meaning:"识别重金属污染风险",method:"仪器分析法",group:"金属离子"},{name:"Cr(VI)",meaning:"识别铬酸盐和强氧化性废液风险",method:"分光光度法",group:"金属离子"},{name:"NH₄⁺",meaning:"识别含氮污染和有机分解影响",method:"分光光度法",group:"营养盐"},{name:"NO₂⁻",meaning:"判断氮循环异常和亚硝酸盐风险",method:"分光光度法",group:"营养盐"},{name:"NO₃⁻",meaning:"判断硝酸盐输入和氮污染迁移",method:"分光光度法",group:"营养盐"},{name:"COD",meaning:"判断有机污染负荷",method:"COD测定",group:"综合污染"},{name:"DO",meaning:"判断缺氧风险",method:"溶解氧仪",group:"综合污染"}],zv=["pH计","pH试纸","比浊分析","电导率仪","EDTA络合滴定","AgNO₃沉淀滴定","酸碱滴定","分光光度法","目视比色法","离子选择电极法","快速检测试剂","仪器分析法"],w1=["事件阅读","污染假设","指标选择","方法匹配","模拟数据","风险研判","报告复核"],D1=[{id:"home",label:"任务大厅"},{id:"task",label:"交互任务台"},{id:"simulator",label:"3D模拟舱"},{id:"planner",label:"方案工作台"},{id:"report",label:"报告复核"}],U1=[{phase:"hypothesis",label:"诊断假设"},{phase:"indicators",label:"检查指标"},{phase:"methods",label:"检查方法"},{phase:"data",label:"生成数据"},{phase:"risk",label:"风险研判"}],K0={chat:"任务对话反馈",hypothesis:"污染假设诊断",indicators:"指标体系反馈",methods:"方法与质控反馈",data:"教学模拟数据",risk:"风险研判反馈",report:"报告初稿",teacherReview:"教师复核意见",expert:"专业难题解释"},Q0=o=>({role:"assistant",content:`【事件编号】${o.id}
【事件名称】${o.title}
【事件背景】${o.location} 发现水样异常：${o.appearance}。
【初始线索】${o.clue}
【你的身份】${o.role}
【当前任务】先提出污染假设，再说明“现象证据”和“需要验证的指标”。`,provider:"local",phase:"case"}),J0={title:"AI即时反馈",phase:"idle",provider:"local",content:"这里会显示最近一次LLM返回的完整内容。你可以在任何页面点击AI按钮，反馈会直接出现在当前工作区，不再藏到别的页面里。",time:""},$0=async o=>{const t=await fetch("/api/agent",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o)});if(!t.ok)throw new Error(`Agent API ${t.status}`);return t.json()},tv=({phase:o,selectedCase:t,selectedIndicators:i,selectedMethods:s,reasoning:l,reportDraft:c,messages:h,studentMessage:d})=>({phase:o,caseInfo:t,selectedIndicators:i,selectedMethods:s,reasoning:l,reportDraft:c,history:h,studentMessage:d}),Po=()=>new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});function L1(){const[o,t]=Ze.useState("home"),[i,s]=Ze.useState(Hc[0]),[l,c]=Ze.useState(Hc[0].scene),[h,d]=Ze.useState(["pH","浊度"]),[m,p]=Ze.useState({pH:"pH计",浊度:"比浊分析"}),[g,_]=Ze.useState(""),[y,S]=Ze.useState([Q0(Hc[0])]),[T,A]=Ze.useState(""),[M,v]=Ze.useState(""),[G,N]=Ze.useState(""),[D,V]=Ze.useState({ok:!1,llmConfigured:!1,model:"检查中"}),[H,P]=Ze.useState(""),[j,w]=Ze.useState("local"),[C,z]=Ze.useState(J0),[st,ot]=Ze.useState(!1),[ct,ht]=Ze.useState(""),[O,Z]=Ze.useState([{role:"assistant",content:"我可以解释专业难题，例如：为什么EDTA测硬度要控制pH？Fe³⁺分光光度法为什么要做标准曲线？空白样和平行样分别解决什么问题？"}]),q=Ze.useMemo(()=>M?6:C.phase==="risk"||y.some(vt=>vt.phase==="risk")?5:C.phase==="data"||y.some(vt=>vt.phase==="data")?4:Object.keys(m).length>=Math.max(1,h.length)?3:h.length>=3?2:g.trim()?1:0,[C.phase,y,M,g,h.length,m]),mt=Ze.useMemo(()=>{const vt=i.recommendedIndicators.filter(ee=>h.includes(ee)).length,At=h.filter(ee=>m[ee]).length,It=["pH","浊度"].filter(ee=>h.includes(ee)).length;return Math.min(100,Math.round(It*12+vt*9+At*7+(g.trim()?12:0)))},[g,i.recommendedIndicators,h,m]);Ze.useEffect(()=>{fetch("/api/health").then(vt=>vt.json()).then(V).catch(()=>V({ok:!1,llmConfigured:!1,model:"未连接"}))},[]);const Et=vt=>{s(vt),c(vt.scene);const At=["pH","浊度"].filter(ee=>vt.recommendedIndicators.includes(ee)),It=At.length?At:["pH"];d(It),p(Object.fromEntries(It.map(ee=>[ee,ko.find(ie=>ie.name===ee)?.method||"pH计"]))),_(""),v(""),N(""),S([Q0(vt)]),z({...J0,content:`已载入「${vt.title}」。建议先写出污染假设，然后点击“诊断假设”让LLM追问证据。`,time:Po()}),t("task")},L=vt=>{d(At=>{const It=At.includes(vt),ee=It?At.filter(ie=>ie!==vt):[...At,vt];return p(ie=>{if(It){const oe={...ie};return delete oe[vt],oe}const F=ko.find(oe=>oe.name===vt)?.method||zv[0];return{...ie,[vt]:F}}),ee})},nt=(vt,At)=>{p(It=>({...It,[vt]:At}))},Mt=async(vt,At="",It={})=>{P(vt);const ee=At||T.trim(),ie=It.appendToTask??["chat","hypothesis","indicators","methods","data","risk"].includes(vt),F=ee&&ie?[...y,{role:"user",content:ee,phase:vt}]:y;ee&&ie&&(S(F),A("")),z({title:K0[vt]||"AI即时反馈",phase:vt,provider:"loading",content:"正在请求LLM，请稍候...",time:Po()});try{const oe=await $0(tv({phase:vt,selectedCase:i,selectedIndicators:h,selectedMethods:m,reasoning:g,reportDraft:M,messages:F,studentMessage:ee})),Vt=oe.reply||"LLM未返回正文。请检查接口配置，或稍后重试。",he=oe.provider||"unknown";return w(he),z({title:It.title||K0[vt]||"AI即时反馈",phase:vt,provider:he,content:Vt,time:Po()}),ie&&S(Zt=>[...Zt,{role:"assistant",content:Vt,provider:he,phase:vt}]),vt==="data"&&t("simulator"),vt==="report"&&(v(Vt),t("report")),vt==="teacherReview"&&(N(Vt),t("report")),Vt}catch(oe){const Vt=`【接口提示】智能体服务暂时不可用：${oe.message}`;return w("error"),z({title:"接口异常",phase:vt,provider:"error",content:Vt,time:Po()}),ie&&S(he=>[...he,{role:"assistant",content:Vt,provider:"error",phase:vt}]),Vt}finally{P("")}},wt=async()=>{const vt=ct.trim();if(vt){Z(At=>[...At,{role:"user",content:vt}]),ht(""),P("expert");try{const At=await $0(tv({phase:"expert",selectedCase:i,selectedIndicators:h,selectedMethods:m,reasoning:g,reportDraft:M,messages:O,studentMessage:vt})),It=At.reply||"LLM未返回解释内容。";w(At.provider||"unknown"),z({title:"专业难题解释",phase:"expert",provider:At.provider||"unknown",content:It,time:Po()}),Z(ee=>[...ee,{role:"assistant",content:It}])}catch(At){const It=`专业解释暂时不可用：${At.message}`;Z(ee=>[...ee,{role:"assistant",content:It}])}finally{P("")}}},J=()=>Mt("report","请根据当前过程记录生成报告初稿。",{appendToTask:!1}),xt=()=>Mt("teacherReview","请对当前报告进行教师复核评价。",{appendToTask:!1}),_t=()=>{const vt=M||"尚未生成报告。",At=new Blob([vt],{type:"text/markdown;charset=utf-8"}),It=URL.createObjectURL(At),ee=document.createElement("a");ee.href=It,ee.download=`${i.id}-水质检测应急报告.md`,ee.click(),URL.revokeObjectURL(It)};return I.jsxs("div",{className:"app-shell",children:[I.jsxs("header",{className:"topbar",children:[I.jsxs("div",{children:[I.jsx("p",{className:"eyebrow",children:"AI环境分析模拟角色智能体"}),I.jsx("h1",{children:"水质检测应急官"})]}),I.jsx("nav",{className:"tabbar","aria-label":"工作区导航",children:D1.map(vt=>I.jsx("button",{className:o===vt.id?"active":"",onClick:()=>t(vt.id),children:vt.label},vt.id))})]}),I.jsxs("main",{children:[o==="home"&&I.jsx(N1,{selectedCase:i,startCase:Et,sceneData:l,agentFeedback:C}),o==="task"&&I.jsx(O1,{selectedCase:i,messages:y,studentMessage:T,setStudentMessage:A,requestAgent:Mt,loadingPhase:H,selectedIndicators:h,toggleIndicator:L,progressIndex:q,agentFeedback:C}),o==="simulator"&&I.jsx(P1,{selectedCase:i,sceneData:l,setSceneData:c,requestAgent:Mt,loadingPhase:H,agentFeedback:C}),o==="planner"&&I.jsx(z1,{selectedCase:i,selectedIndicators:h,selectedMethods:m,toggleIndicator:L,updateMethod:nt,reasoning:g,setReasoning:_,planScore:mt,requestAgent:Mt,loadingPhase:H,agentFeedback:C}),o==="report"&&I.jsx(B1,{selectedCase:i,reportDraft:M,setReportDraft:v,teacherReview:G,generateReport:J,reviewReport:xt,exportReport:_t,loadingPhase:H,agentFeedback:C})]}),I.jsx("button",{className:"expert-launcher",type:"button",onClick:()=>ot(!0),children:"LLM专家答疑"}),I.jsx(I1,{open:st,onClose:()=>ot(!1),messages:O,question:ct,setQuestion:ht,onSubmit:wt,loading:H==="expert",selectedCase:i})]})}function N1({selectedCase:o,startCase:t,sceneData:i,agentFeedback:s}){return I.jsxs("section",{className:"home-grid",children:[I.jsxs("div",{className:"task-column",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"任务类型"}),I.jsx("strong",{children:"选择水样异常事件"})]}),I.jsx("div",{className:"task-list",children:Hc.map(l=>I.jsxs("button",{className:`task-card ${l.id===o.id?"selected":""}`,onClick:()=>t(l),children:[I.jsx("span",{className:"case-id",children:l.id}),I.jsx("strong",{children:l.title}),I.jsx("small",{children:l.appearance}),I.jsx("span",{className:"risk-chip",children:l.riskLabel})]},l.id))})]}),I.jsxs("div",{className:"command-center",children:[I.jsxs("div",{className:"center-copy",children:[I.jsx("p",{className:"eyebrow",children:"海蓝实验分析台"}),I.jsx("h2",{children:o.title}),I.jsx("p",{children:o.goal}),I.jsxs("div",{className:"quick-stats",children:[I.jsxs("div",{children:[I.jsx("span",{children:"推荐指标"}),I.jsx("strong",{children:o.recommendedIndicators.length})]}),I.jsxs("div",{children:[I.jsx("span",{children:"模拟数据"}),I.jsx("strong",{children:o.simulatedData.length})]}),I.jsxs("div",{children:[I.jsx("span",{children:"案例类型"}),I.jsx("strong",{children:o.type})]})]})]}),I.jsx(Pv,{data:i})]}),I.jsxs("aside",{className:"ai-brief",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"课堂提示"}),I.jsx("strong",{children:"教学模拟提醒"})]}),I.jsxs("ul",{className:"brief-list",children:[I.jsx("li",{children:"请先提出污染假设，再选择检测指标。"}),I.jsx("li",{children:"每个结论都需要对应现场现象或模拟数据。"}),I.jsx("li",{children:"报告用于课程训练，需经学生修改和教师复核。"})]}),I.jsx(Zo,{feedback:s,compact:!0})]})]})}function O1({selectedCase:o,messages:t,studentMessage:i,setStudentMessage:s,requestAgent:l,loadingPhase:c,selectedIndicators:h,toggleIndicator:d,progressIndex:m,agentFeedback:p}){return I.jsxs("section",{className:"task-desk layout-three",children:[I.jsxs("aside",{className:"event-file",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"事件档案"}),I.jsx("strong",{children:o.id})]}),I.jsxs("dl",{children:[I.jsx("dt",{children:"地点"}),I.jsx("dd",{children:o.location}),I.jsx("dt",{children:"水样外观"}),I.jsx("dd",{children:o.appearance}),I.jsx("dt",{children:"初始线索"}),I.jsx("dd",{children:o.clue}),I.jsx("dt",{children:"学生身份"}),I.jsx("dd",{children:o.role}),I.jsx("dt",{children:"任务目标"}),I.jsx("dd",{children:o.goal})]}),I.jsx(F1,{progressIndex:m})]}),I.jsxs("section",{className:"chat-panel",children:[I.jsxs("div",{className:"section-title horizontal",children:[I.jsxs("div",{children:[I.jsx("span",{children:"AI任务对话"}),I.jsx("strong",{children:"输入学生判断后再让LLM追问"})]}),I.jsx("div",{className:"phase-actions",children:U1.map(g=>I.jsx("button",{onClick:()=>l(g.phase),disabled:!!c,children:c===g.phase?"处理中":g.label},g.phase))})]}),I.jsx("div",{className:"messages","aria-live":"polite",children:t.map((g,_)=>I.jsxs("article",{className:`message ${g.role}`,children:[I.jsx("span",{children:g.role==="user"?"现场检测员":g.provider==="llm"?"AI应急官 · LLM":"AI应急官"}),I.jsx("p",{children:g.content})]},`${g.role}-${_}`))}),I.jsxs("form",{className:"composer",onSubmit:g=>{g.preventDefault(),i.trim()&&l("chat")},children:[I.jsx("textarea",{value:i,onChange:g=>s(g.target.value),placeholder:"例如：我认为水样发黄可能与管道锈蚀有关，准备检测Fe³⁺、Fe²⁺、浊度和pH。"}),I.jsx("button",{type:"submit",disabled:!!c||!i.trim(),children:c==="chat"?"发送中":"发送并追问"})]})]}),I.jsxs("aside",{className:"indicator-panel",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"指标选择"}),I.jsxs("strong",{children:[h.length," 项已选"]})]}),I.jsx("div",{className:"indicator-tags compact",children:ko.map(g=>I.jsx("button",{className:h.includes(g.name)?"selected":"",onClick:()=>d(g.name),title:g.meaning,children:g.name},g.name))}),I.jsxs("div",{className:"hint-box",children:[I.jsx("strong",{children:"本案推荐关注"}),I.jsx("p",{children:o.recommendedIndicators.join("、")})]}),I.jsx(Zo,{feedback:p,compact:!0})]})]})}function P1({selectedCase:o,sceneData:t,setSceneData:i,requestAgent:s,loadingPhase:l,agentFeedback:c}){const h=d=>i(m=>({...m,...d}));return I.jsxs("section",{className:"simulator-grid",children:[I.jsxs("div",{className:"simulator-main",children:[I.jsxs("div",{className:"section-title horizontal",children:[I.jsxs("div",{children:[I.jsx("span",{children:"三维水样污染模拟舱"}),I.jsx("strong",{children:o.shortTitle})]}),I.jsxs("div",{className:"phase-actions",children:[I.jsx("button",{onClick:()=>s("data"),disabled:!!l,children:l==="data"?"生成中":"生成模拟数据"}),I.jsx("button",{onClick:()=>s("risk"),disabled:!!l,children:l==="risk"?"研判中":"解释风险"})]})]}),I.jsx(Pv,{data:t,className:"large-scene"})]}),I.jsxs("aside",{className:"control-panel",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"场景参数"}),I.jsx("strong",{children:"数据联动"})]}),I.jsxs("label",{children:["污染类型",I.jsxs("select",{value:t.pollutionType,onChange:d=>h({pollutionType:d.target.value}),children:[I.jsx("option",{value:"normal",children:"normal 正常浅蓝"}),I.jsx("option",{value:"iron",children:"iron 铁污染浅黄"}),I.jsx("option",{value:"copper",children:"copper 铜污染蓝绿"}),I.jsx("option",{value:"algae",children:"algae 藻类绿色"}),I.jsx("option",{value:"chromium",children:"chromium 铬酸盐黄橙"}),I.jsx("option",{value:"turbidity",children:"turbidity 高浊度"})]})]}),I.jsxs("label",{children:["浊度粒子 ",Math.round(t.turbidity*100),"%",I.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.turbidity,onChange:d=>h({turbidity:Number(d.target.value)})})]}),I.jsxs("label",{children:["底部沉淀 ",Math.round(t.precipitate*100),"%",I.jsx("input",{type:"range",min:"0",max:"1",step:"0.01",value:t.precipitate,onChange:d=>h({precipitate:Number(d.target.value)})})]}),I.jsxs("label",{children:["风险光效",I.jsxs("select",{value:t.riskLevel,onChange:d=>h({riskLevel:d.target.value}),children:[I.jsx("option",{value:"normal",children:"normal 正常"}),I.jsx("option",{value:"warning",children:"warning 警戒"}),I.jsx("option",{value:"danger",children:"danger 危险"})]})]}),I.jsxs("div",{className:"data-table",children:[I.jsxs("div",{className:"table-row head",children:[I.jsx("span",{children:"指标"}),I.jsx("span",{children:"检测值"}),I.jsx("span",{children:"判断"})]}),o.simulatedData.map(d=>I.jsxs("div",{className:"table-row",children:[I.jsx("span",{children:d.indicator}),I.jsxs("span",{children:[d.value," ",d.unit]}),I.jsx("span",{children:d.status})]},d.indicator))]}),I.jsx(Zo,{feedback:c,compact:!0})]})]})}function z1({selectedCase:o,selectedIndicators:t,selectedMethods:i,toggleIndicator:s,updateMethod:l,reasoning:c,setReasoning:h,planScore:d,requestAgent:m,loadingPhase:p,agentFeedback:g}){return I.jsxs("section",{className:"planner-grid",children:[I.jsxs("aside",{className:"library-panel",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"指标库"}),I.jsx("strong",{children:"点击加入检测流程"})]}),["基础指标","滴定分析","金属离子","营养盐","综合污染"].map(_=>I.jsxs("div",{className:"indicator-group",children:[I.jsx("h3",{children:_}),I.jsx("div",{className:"indicator-tags",children:ko.filter(y=>y.group===_).map(y=>I.jsx("button",{className:t.includes(y.name)?"selected":"",onClick:()=>s(y.name),children:y.name},y.name))})]},_))]}),I.jsxs("section",{className:"workflow-board",children:[I.jsxs("div",{className:"section-title horizontal",children:[I.jsxs("div",{children:[I.jsx("span",{children:"检测方案设计工作台"}),I.jsxs("strong",{children:["完整性 ",d,"/100"]})]}),I.jsxs("div",{className:"phase-actions",children:[I.jsx("button",{onClick:()=>m("indicators"),disabled:!!p,children:p==="indicators"?"分析中":"检查指标"}),I.jsx("button",{onClick:()=>m("methods"),disabled:!!p,children:p==="methods"?"分析中":"检查方法"})]})]}),I.jsxs("div",{className:"flow-list",children:[t.map((_,y)=>{const S=ko.find(T=>T.name===_);return I.jsxs("article",{className:"flow-item",children:[I.jsx("span",{className:"step-number",children:y+1}),I.jsxs("div",{children:[I.jsx("strong",{children:_}),I.jsx("p",{children:S?.meaning})]}),I.jsxs("select",{value:i[_]||"",onChange:T=>l(_,T.target.value),children:[I.jsx("option",{value:"",children:"选择方法"}),zv.map(T=>I.jsx("option",{value:T,children:T},T))]})]},_)}),!t.length&&I.jsx("p",{className:"empty",children:"请先从左侧选择检测指标。"})]}),I.jsxs("label",{className:"reasoning-box",children:["判断依据与质控设计",I.jsx("textarea",{value:c,onChange:_=>h(_.target.value),placeholder:"写下指标选择依据、方法原理、空白样、平行样、标准曲线或标准溶液标定。LLM会基于这里的内容给反馈。"})]})]}),I.jsxs("aside",{className:"feedback-panel",children:[I.jsxs("div",{className:"section-title",children:[I.jsx("span",{children:"AI即时反馈"}),I.jsx("strong",{children:"当前页可见"})]}),I.jsxs("div",{className:"hint-box",children:[I.jsx("strong",{children:"本案推荐指标"}),I.jsx("p",{children:o.recommendedIndicators.join("、")})]}),I.jsxs("div",{className:"hint-box",children:[I.jsx("strong",{children:"推荐方法"}),I.jsx("p",{children:o.suggestedMethods.join("、")})]}),I.jsxs("div",{className:"score-meter",style:{"--score":`${d}%`},children:[I.jsx("span",{children:"完整性评分"}),I.jsx("strong",{children:d})]}),I.jsx(Zo,{feedback:g,compact:!1})]})]})}function B1({selectedCase:o,reportDraft:t,setReportDraft:i,teacherReview:s,generateReport:l,reviewReport:c,exportReport:h,loadingPhase:d,agentFeedback:m}){return I.jsxs("section",{className:"report-grid",children:[I.jsxs("section",{className:"report-editor",children:[I.jsxs("div",{className:"section-title horizontal",children:[I.jsxs("div",{children:[I.jsx("span",{children:"水质检测应急报告生成台"}),I.jsx("strong",{children:o.id})]}),I.jsxs("div",{className:"phase-actions",children:[I.jsx("button",{onClick:l,disabled:!!d,children:d==="report"?"生成中":"生成报告初稿"}),I.jsx("button",{onClick:h,disabled:!t,children:"导出Markdown"}),I.jsx("button",{onClick:()=>window.print(),disabled:!t,children:"打印/PDF"})]})]}),I.jsx("textarea",{className:"report-text",value:t,onChange:p=>i(p.target.value),placeholder:"点击“生成报告初稿”。生成结果会直接写入这里，同时右侧也会显示最近一次LLM反馈。"})]}),I.jsxs("aside",{className:"teacher-panel",children:[I.jsxs("div",{className:"section-title horizontal",children:[I.jsxs("div",{children:[I.jsx("span",{children:"教师复核助手"}),I.jsx("strong",{children:"100分制评价"})]}),I.jsx("button",{onClick:c,disabled:!!d||!t,children:d==="teacherReview"?"复核中":"AI复核"})]}),I.jsx("div",{className:"review-box",children:s?I.jsx("pre",{children:s}):I.jsx("p",{children:"复核结果会检查污染假设、指标完整性、方法匹配、数据解释、质控与报告规范性。"})}),I.jsx(Zo,{feedback:m,compact:!0})]})]})}function Zo({feedback:o,compact:t=!1}){return I.jsxs("section",{className:`agent-feedback ${t?"compact":""}`,"aria-live":"polite",children:[I.jsxs("div",{className:"agent-feedback-head",children:[I.jsxs("div",{children:[I.jsx("span",{children:o.title}),I.jsx("strong",{children:o.provider==="loading"?"正在生成反馈":"教学反馈"})]}),o.time&&I.jsx("time",{children:o.time})]}),I.jsx("pre",{children:o.content})]})}function I1({open:o,onClose:t,messages:i,question:s,setQuestion:l,onSubmit:c,loading:h,selectedCase:d}){return o?I.jsx("div",{className:"modal-backdrop",role:"dialog","aria-modal":"true","aria-label":"LLM专家答疑弹窗",children:I.jsxs("section",{className:"expert-modal",children:[I.jsxs("header",{children:[I.jsxs("div",{children:[I.jsx("span",{children:"LLM专业难题解释"}),I.jsxs("strong",{children:[d.shortTitle," · 课程助教"]})]}),I.jsx("button",{type:"button",onClick:t,children:"关闭"})]}),I.jsx("div",{className:"expert-body",children:i.map((m,p)=>I.jsxs("article",{className:`expert-message ${m.role}`,children:[I.jsx("span",{children:m.role==="user"?"我":"LLM助教"}),I.jsx("p",{children:m.content})]},`${m.role}-${p}`))}),I.jsxs("form",{className:"expert-composer",onSubmit:m=>{m.preventDefault(),c()},children:[I.jsx("textarea",{value:s,onChange:m=>l(m.target.value),placeholder:"输入专业难题，例如：EDTA络合滴定为什么需要pH=10缓冲溶液？"}),I.jsx("button",{type:"submit",disabled:h||!s.trim(),children:h?"解释中":"提问"})]})]})}):null}function F1({progressIndex:o}){return I.jsx("div",{className:"workflow",children:w1.map((t,i)=>I.jsxs("div",{className:`workflow-step ${i<=o?"done":""}`,children:[I.jsx("span",{children:i+1}),I.jsx("p",{children:t})]},t))})}$y.createRoot(document.getElementById("root")).render(I.jsx(Wy.StrictMode,{children:I.jsx(L1,{})}));
