(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(3205)}])},3809:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"actionAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8267:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"createAsyncLocalStorage",{enumerable:!0,get:function(){return i}});let r=Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");class n{disable(){throw r}getStore(){}run(){throw r}exit(){throw r}enterWith(){throw r}}let o=globalThis.AsyncLocalStorage;function i(){return o?new o:new n}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1770:function(e,t,r){"use strict";function n(e){}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"clientHookInServerComponentError",{enumerable:!0,get:function(){return n}}),r(8754),r(7294),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6612:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return p},useSearchParams:function(){return m},usePathname:function(){return g},ServerInsertedHTMLContext:function(){return u.ServerInsertedHTMLContext},useServerInsertedHTML:function(){return u.useServerInsertedHTML},useRouter:function(){return v},useParams:function(){return x},useSelectedLayoutSegments:function(){return b},useSelectedLayoutSegment:function(){return y},redirect:function(){return s.redirect},permanentRedirect:function(){return s.permanentRedirect},RedirectType:function(){return s.RedirectType},notFound:function(){return d.notFound}});let n=r(7294),o=r(6216),i=r(349),l=r(1770),c=r(8865),a=r(5160),u=r(594),s=r(7573),d=r(9249),f=Symbol("internal for urlsearchparams readonly");function h(){return Error("ReadonlyURLSearchParams cannot be modified")}class p{[Symbol.iterator](){return this[f][Symbol.iterator]()}append(){throw h()}delete(){throw h()}set(){throw h()}sort(){throw h()}constructor(e){this[f]=e,this.entries=e.entries.bind(e),this.forEach=e.forEach.bind(e),this.get=e.get.bind(e),this.getAll=e.getAll.bind(e),this.has=e.has.bind(e),this.keys=e.keys.bind(e),this.values=e.values.bind(e),this.toString=e.toString.bind(e),this.size=e.size}}function m(){(0,l.clientHookInServerComponentError)("useSearchParams");let e=(0,n.useContext)(i.SearchParamsContext);return(0,n.useMemo)(()=>e?new p(e):null,[e])}function g(){return(0,l.clientHookInServerComponentError)("usePathname"),(0,n.useContext)(i.PathnameContext)}function v(){(0,l.clientHookInServerComponentError)("useRouter");let e=(0,n.useContext)(o.AppRouterContext);if(null===e)throw Error("invariant expected app router to be mounted");return e}function x(){(0,l.clientHookInServerComponentError)("useParams");let e=(0,n.useContext)(o.GlobalLayoutRouterContext),t=(0,n.useContext)(i.PathParamsContext);return(0,n.useMemo)(()=>(null==e?void 0:e.tree)?function e(t,r){for(let n of(void 0===r&&(r={}),Object.values(t[1]))){let t=n[0],o=Array.isArray(t),i=o?t[1]:t;!i||i.startsWith(a.PAGE_SEGMENT_KEY)||(o&&("c"===t[2]||"oc"===t[2])?r[t[0]]=t[1].split("/"):o&&(r[t[0]]=t[1]),r=e(n,r))}return r}(e.tree):t,[null==e?void 0:e.tree,t])}function b(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegments");let{tree:t}=(0,n.useContext)(o.LayoutRouterContext);return function e(t,r,n,o){let i;if(void 0===n&&(n=!0),void 0===o&&(o=[]),n)i=t[1][r];else{var l;let e=t[1];i=null!=(l=e.children)?l:Object.values(e)[0]}if(!i)return o;let u=i[0],s=(0,c.getSegmentValue)(u);return!s||s.startsWith(a.PAGE_SEGMENT_KEY)?o:(o.push(s),e(i,r,!1,o))}(t,e)}function y(e){void 0===e&&(e="children"),(0,l.clientHookInServerComponentError)("useSelectedLayoutSegment");let t=b(e);return 0===t.length?null:t[0]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9249:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{notFound:function(){return n},isNotFoundError:function(){return o}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function o(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2445:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),(n=r||(r={}))[n.SeeOther=303]="SeeOther",n[n.TemporaryRedirect=307]="TemporaryRedirect",n[n.PermanentRedirect=308]="PermanentRedirect",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7573:function(e,t,r){"use strict";var n,o;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return u},redirect:function(){return s},permanentRedirect:function(){return d},isRedirectError:function(){return f},getURLFromRedirectError:function(){return h},getRedirectTypeFromError:function(){return p},getRedirectStatusCodeFromError:function(){return m}});let i=r(7714),l=r(3809),c=r(2445),a="NEXT_REDIRECT";function u(e,t,r){void 0===r&&(r=c.RedirectStatusCode.TemporaryRedirect);let n=Error(a);n.digest=a+";"+t+";"+e+";"+r+";";let o=i.requestAsyncStorage.getStore();return o&&(n.mutableCookies=o.mutableCookies),n}function s(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?c.RedirectStatusCode.SeeOther:c.RedirectStatusCode.TemporaryRedirect)}function d(e,t){void 0===t&&(t="replace");let r=l.actionAsyncStorage.getStore();throw u(e,t,(null==r?void 0:r.isAction)?c.RedirectStatusCode.SeeOther:c.RedirectStatusCode.PermanentRedirect)}function f(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,o]=e.digest.split(";",4),i=Number(o);return t===a&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(i)&&i in c.RedirectStatusCode}function h(e){return f(e)?e.digest.split(";",3)[2]:null}function p(e){if(!f(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!f(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(o=n||(n={})).push="push",o.replace="replace",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7714:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"requestAsyncStorage",{enumerable:!0,get:function(){return n}});let n=(0,r(8267).createAsyncLocalStorage)();("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8865:function(e,t){"use strict";function r(e){return Array.isArray(e)?e[1]:e}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getSegmentValue",{enumerable:!0,get:function(){return r}}),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3412:function(e,t){"use strict";var r,n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{PrefetchKind:function(){return r},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return i},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return c},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return u},ACTION_SERVER_ACTION:function(){return s},isThenable:function(){return d}});let o="refresh",i="navigate",l="restore",c="server-patch",a="prefetch",u="fast-refresh",s="server-action";function d(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6504:function(e,t,r){"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(282),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3480:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return y}});let n=r(8754),o=r(5893),i=n._(r(7294)),l=r(7950),c=r(7387),a=r(6982),u=r(6921),s=r(7727),d=r(1973),f=r(6216),h=r(1722),p=r(6504),m=r(634),g=r(3412),v=new Set;function x(e,t,r,n,o,i){if(i||(0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(v.has(o))return;v.add(o)}Promise.resolve(i?e.prefetch(t,o):e.prefetch(t,r,n)).catch(e=>{})}}function b(e){return"string"==typeof e?e:(0,a.formatUrl)(e)}let y=i.default.forwardRef(function(e,t){let r,n;let{href:a,as:v,children:y,prefetch:j=null,passHref:w,replace:_,shallow:O,scroll:k,locale:C,onClick:M,onMouseEnter:P,onTouchStart:S,legacyBehavior:L=!1,...N}=e;r=y,L&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let E=i.default.useContext(d.RouterContext),R=i.default.useContext(f.AppRouterContext),A=null!=E?E:R,T=!E,z=!1!==j,H=null===j?g.PrefetchKind.AUTO:g.PrefetchKind.FULL,{href:I,as:Z}=i.default.useMemo(()=>{if(!E){let e=b(a);return{href:e,as:v?b(v):e}}let[e,t]=(0,l.resolveHref)(E,a,!0);return{href:e,as:v?(0,l.resolveHref)(E,v):t||e}},[E,a,v]),U=i.default.useRef(I),B=i.default.useRef(Z);L&&(n=i.default.Children.only(r));let V=L?n&&"object"==typeof n&&n.ref:t,[F,D,K]=(0,h.useIntersection)({rootMargin:"200px"}),W=i.default.useCallback(e=>{(B.current!==Z||U.current!==I)&&(K(),B.current=Z,U.current=I),F(e),V&&("function"==typeof V?V(e):"object"==typeof V&&(V.current=e))},[Z,V,I,K,F]);i.default.useEffect(()=>{A&&D&&z&&x(A,I,Z,{locale:C},{kind:H},T)},[Z,I,D,C,z,null==E?void 0:E.locale,A,T,H]);let G={ref:W,onClick(e){L||"function"!=typeof M||M(e),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,n,o,l,a,u,s){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!s&&!(0,c.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:l,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})};s?i.default.startTransition(f):f()}(e,A,I,Z,_,O,k,C,T)},onMouseEnter(e){L||"function"!=typeof P||P(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),A&&(z||!T)&&x(A,I,Z,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:H},T)},onTouchStart(e){L||"function"!=typeof S||S(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),A&&(z||!T)&&x(A,I,Z,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:H},T)}};if((0,u.isAbsoluteUrl)(Z))G.href=Z;else if(!L||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==C?C:null==E?void 0:E.locale,t=(null==E?void 0:E.isLocaleDomain)&&(0,p.getDomainLocale)(Z,e,null==E?void 0:E.locales,null==E?void 0:E.domainLocales);G.href=t||(0,m.addBasePath)((0,s.addLocale)(Z,e,null==E?void 0:E.defaultLocale))}return L?i.default.cloneElement(n,G):(0,o.jsx)("a",{...N,...G,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return a}});let n=r(7294),o=r(9126),i="function"==typeof IntersectionObserver,l=new Map,c=[];function a(e){let{rootRef:t,rootMargin:r,disabled:a}=e,u=a||!i,[s,d]=(0,n.useState)(!1),f=(0,n.useRef)(null),h=(0,n.useCallback)(e=>{f.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(u||s)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=c.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=l.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),l.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),l.delete(n);let e=c.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>d(!0));return()=>(0,o.cancelIdleCallback)(e)}},[u,r,t,s,f.current]),[h,s,(0,n.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},594:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ServerInsertedHTMLContext:function(){return o},useServerInsertedHTML:function(){return i}});let n=r(1757)._(r(7294)),o=n.default.createContext(null);function i(e){let t=(0,n.useContext)(o);t&&t(e)}},7932:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(5893),o=r(7294),i=r(3935),l=r(5054);function c(e){return(0,l.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"},child:[]}]})(e)}function a(e){let[t,r]=(0,o.useState)(null),[l,a]=(0,o.useState)(""),u=(0,o.useRef)(null);if((0,o.useEffect)(()=>{e.pm.setChildren=(e,t)=>{r(e),a(t)}},[]),!t)return(0,n.jsx)("div",{});let s=(0,n.jsx)("div",{ref:u,className:"h-screen w-screen fixed bg-[#00000070] top-0 left-0 flex items-center justify-center z-[999]",onClick:t=>{null!=u&&t.target==u.current&&e.pm.dismissOnOutsideClick&&e.pm.hide()},children:(0,n.jsx)("div",{className:"flex flex-col justify-center max-h-screen",children:(0,n.jsxs)("div",{className:"w-full overflow-y-auto flex flex-col p-4 m-auto bg-white rounded-md shadow-xl lg:max-w-xl",children:[(0,n.jsxs)("div",{className:"flex justify-end",children:[(0,n.jsx)("div",{className:"grow flex justify-center font-GraphikBold",children:l}),(0,n.jsx)(c,{className:"w-[20px] h-[20px] cursor-pointer",onClick:()=>e.pm.hide()})]}),(0,n.jsx)("div",{children:t})]})})});return(0,i.createPortal)(s,document.body)}class u{show(e,t){this.setChildren(e,t)}hide(){this.setChildren(null)}constructor(){this.popup=(0,n.jsx)(a,{pm:this}),this.dismissOnOutsideClick=!1}}var s=new u},3205:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return k}});var n=r(5893);r(1664);var o=r(7294),i=r(5054);function l(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function c(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function a(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}function u(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}var s=r(9110),d=()=>(0,n.jsx)("div",{children:(0,n.jsx)("a",{href:s.Z.whatsAppUrl,target:"_blank",children:(0,n.jsx)("div",{className:" fixed cursor-pointer right-4 bottom-4 size-12 rounded-full grid place-items-center bg-[#53EC66] text-white",children:(0,n.jsx)(u,{size:30})})})});function f(e){return(0,i.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z"},child:[]}]})(e)}var h=r(6204),p=r(9332);function m(e){return e.endsWith(".html")?e.substring(0,e.length-5):e}function g(){let[e,t]=(0,o.useState)(!1),r=(0,p.usePathname)(),i=[{title:"Home",path:"/",isActive:"/"===r},{title:"About Us",path:s.Z.aboutLink,isActive:r===m(s.Z.aboutLink)},{title:"Webinar",path:s.Z.webinarLink,isActive:r===m(s.Z.webinarLink)},{title:"Blog",path:s.Z.blogLink,isActive:r.includes(m(s.Z.blogLink))},{title:"Contact Us",path:s.Z.contactLink,isActive:r===m(s.Z.contactLink)}];return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"bg-[#4F5DF5] w-full py-2",children:(0,n.jsxs)("div",{className:"flex justify-between items-center text-white"+s.Z.container,children:[(0,n.jsxs)("div",{className:"flex justify-start items-center gap-1 text-base",children:[" ",(0,n.jsx)(f,{}),(0,n.jsx)("a",{href:"mailto:info@thoughtglow.com",children:"info@thoughtglow.com"})]}),(0,n.jsxs)("div",{className:"flex justify-start items-center gap-5",children:[(0,n.jsx)("a",{href:s.Z.facebookUrl,target:"_blank",children:(0,n.jsx)(h.tBk,{})}),(0,n.jsx)("a",{href:s.Z.instagramUrl,target:"_blank",children:(0,n.jsx)(l,{})}),(0,n.jsx)("a",{href:s.Z.twitterUrl,target:"_blank",children:(0,n.jsx)(a,{})}),(0,n.jsx)("a",{href:s.Z.linkedInUrl,target:"_blank",children:(0,n.jsx)(c,{})})]})]})}),(0,n.jsx)("nav",{className:"sticky top-0 z-50",children:(0,n.jsx)("div",{style:{boxShadow:" rgba(0, 0, 0, 0.35) 0px 0px 1px"},className:"bg-white border-b w-full md:text-sm ",children:(0,n.jsxs)("div",{className:"items-center px-4 container mx-auto md:flex md:px-8",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between py-3 md:block",children:[(0,n.jsx)("a",{href:"/",children:(0,n.jsx)("img",{src:"/images/thoughtglow-full.png",width:100,height:50,alt:"Float UI logo"})}),(0,n.jsx)("div",{className:"md:hidden",children:(0,n.jsx)("button",{className:"text-gray-500 hover:text-gray-800",onClick:()=>t(!e),children:e?(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",viewBox:"0 0 20 20",fill:"currentColor",children:(0,n.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}):(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})})})]}),(0,n.jsx)("div",{className:"flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ".concat(e?"block":"hidden"),children:(0,n.jsxs)("ul",{className:"justify-end items-center font-medium space-y-4 md:flex md:space-x-10 md:space-y-0",children:[i.map((r,o)=>(0,n.jsx)("li",{className:"text-gray-700 text-md font-bold hover:text-indigo-600",onClick:()=>{t(!e)},children:(0,n.jsx)("a",{href:r.path,className:"".concat(r.isActive?"text-indigo-600":""," "),children:r.title})},o)),(0,n.jsx)("div",{className:" items-center gap-x-6 md:flex md:space-y-0",children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://learn.thoughtglow.com/login/index.php",target:"_blank",className:"block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-md shadow md:inline",children:"My Account"})})})]})})]})})})]})}var v=r(8318),x=r(80);function b(){return(0,n.jsx)("footer",{className:"bg-[#f7f6fe]",children:(0,n.jsxs)("div",{className:"grid md:grid-cols-3 items-center justify-between py-5"+s.Z.container,children:[(0,n.jsxs)("div",{className:"flex flex-col gap-4 justify-center  ",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mt-2",children:"Contact Us"}),(0,n.jsxs)("div",{className:" p-2 flex gap-5 flex-col",children:[(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(v.D49,{})," ",(0,n.jsx)("p",{children:"HSR Layout,Bangalore, India"})," "]}),(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(h.xpo,{})," ",(0,n.jsx)("a",{href:s.Z.whatsAppUrl,target:"_blank",children:(0,n.jsx)("p",{className:"hover:text-link-color",children:"+91 7494984047"})})]}),(0,n.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,n.jsx)(x.ixJ,{})," ",(0,n.jsx)("a",{href:"mailto:info@thoughtglow.com",children:(0,n.jsx)("p",{className:"hover:text-link-color",children:"info@thoughtglow.com"})})]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col gap-4 justify-center items-baseline",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mt-2",children:"Quick Links"}),(0,n.jsxs)("div",{className:"p-2 flex gap-3 flex-col",children:[(0,n.jsx)("a",{href:"/",children:"Home"}),(0,n.jsx)("a",{href:s.Z.blogLink,children:"Blog"}),(0,n.jsx)("a",{href:s.Z.aboutLink,children:"About Us"}),(0,n.jsx)("a",{href:s.Z.webinarLink,children:"Webinar"})]})]}),(0,n.jsxs)("div",{className:"flex flex-col  gap-4 justify-end items-baseline",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold mt-2",children:"Information"}),(0,n.jsxs)("div",{className:"p-2 flex gap-3 flex-col",children:[(0,n.jsx)("a",{href:s.Z.contactLink,children:(0,n.jsx)("p",{children:"Contact Us"})}),(0,n.jsx)("a",{href:s.Z.faqsLink,children:(0,n.jsx)("p",{children:"FAQ's"})}),(0,n.jsx)("a",{href:s.Z.privacyLink,children:(0,n.jsx)("p",{children:"Privacy Policy"})}),(0,n.jsx)("a",{href:s.Z.termsLink,children:(0,n.jsx)("p",{children:"Terms and Conditions"})})]})]})]})})}var y=r(9008),j=r.n(y),w=r(7932);function _(e){let{children:t}=e;return(0,n.jsxs)("div",{className:"w-full min-h-screen",children:[(0,n.jsx)(j(),{children:(0,n.jsx)("title",{children:"Thought Glow"})}),(0,n.jsx)(g,{}),(0,n.jsx)("div",{children:t}),(0,n.jsx)(b,{}),w.Z.popup]})}function O(e){let{children:t}=e;return(0,n.jsxs)(_,{children:[(0,n.jsx)("div",{style:{scrollBehavior:"smooth"},children:(0,n.jsx)("div",{children:t})}),(0,n.jsx)(d,{})]})}function k(e){let{Component:t,pageProps:r}=e,o=t.layout?t.layout:O;return(0,n.jsx)(o,{children:(0,n.jsx)(t,{...r})})}r(9166),r(4900)},321:function(e,t,r){"use strict";function n(e){return e+".html"}r.d(t,{Z:function(){return n}})},9110:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var n=r(321);let o={whatsAppUrl:"https://api.whatsapp.com/send?phone=917494984047&text=Hi",facebookUrl:"https://www.facebook.com/thethglow",twitterUrl:"https://twitter.com/thethglow",instagramUrl:"https://www.instagram.com/thethglow/",linkedInUrl:"https://www.linkedin.com/company/thethglow",apiBackend:"https://api.thoughtglows.com/tgapi/v1",aboutLink:(0,n.Z)("/about"),webinarLink:(0,n.Z)("/webinar"),contactLink:(0,n.Z)("/contact"),blogLink:(0,n.Z)("/blog"),faqsLink:(0,n.Z)("/faqs"),termsLink:(0,n.Z)("/legal/terms"),privacyLink:(0,n.Z)("/legal/privacy"),thanksLink:(0,n.Z)("/thanks-for-registering"),registerLink:(0,n.Z)("/register/checkout"),paidRegisterLink:(0,n.Z)("/register/checkout"),myAccountLink:"https://learn.thoughtglow.com",container:" container mx-auto px-4 md:px-8 "},i=()=>{let e=Math.floor(Date.now()/1e3)+"",t="";for(let r=0;r<e.length;r++)t+=""+Math.floor(10*Math.random())+Math.floor(10*Math.random())+e.charAt(r);for(let e=0;e<5;e++)t+=""+Math.floor(10*Math.random())+Math.floor(10*Math.random());return t};t.Z=o},9166:function(){},4900:function(){},9008:function(e,t,r){e.exports=r(6665)},1664:function(e,t,r){r(3480)},9332:function(e,t,r){e.exports=r(6612)},6204:function(e,t,r){"use strict";r.d(t,{ETl:function(){return c},H_v:function(){return l},tBk:function(){return o},xpo:function(){return i}});var n=r(5054);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"},child:[]}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function l(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"},child:[]}]})(e)}function c(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"},child:[]}]})(e)}},8318:function(e,t,r){"use strict";r.d(t,{D49:function(){return i},UXH:function(){return o}});var n=r(5054);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 32C167.67 32 96 96.51 96 176c0 128 160 304 160 304s160-176 160-304c0-79.49-71.67-144-160-144zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"},child:[]}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"circle",attr:{cx:"256",cy:"192",r:"32"},child:[]},{tag:"path",attr:{d:"M256 32c-88.22 0-160 68.65-160 153 0 40.17 18.31 93.59 54.42 158.78 29 52.34 62.55 99.67 80 123.22a31.75 31.75 0 0 0 51.22 0c17.42-23.55 51-70.88 80-123.22C397.69 278.61 416 225.19 416 185c0-84.35-71.78-153-160-153zm0 224a64 64 0 1 1 64-64 64.07 64.07 0 0 1-64 64z"},child:[]}]})(e)}},5054:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),l=["attr","size","title"];function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach(function(t){var n,o;n=t,o=r[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e){return t=>n.createElement(d,c({attr:u({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,u({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:o,size:i,title:a}=e,s=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,l),d=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,s,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),a&&n.createElement("title",null,a),e.children)};return void 0!==i?n.createElement(i.Consumer,null,e=>t(e)):t(o)}},80:function(e,t,r){"use strict";r.d(t,{F8X:function(){return i},ixJ:function(){return o}});var n=r(5054);function o(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}function i(e){return(0,n.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"},child:[]}]})(e)}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(1118),t(3035)}),_N_E=e.O()}]);