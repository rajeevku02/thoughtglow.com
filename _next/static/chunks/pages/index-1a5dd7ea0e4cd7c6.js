(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(9267)}])},3686:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let r=i(8754),o=i(1757),n=i(5893),l=o._(i(7294)),s=r._(i(3935)),a=r._(i(6665)),u=i(1908),d=i(4706),c=i(5670);i(1558);let f=i(1973),g=r._(i(3293)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function p(e,t,i,r,o,n){let l=null==e?void 0:e.src;e&&e["data-loaded-src"]!==l&&(e["data-loaded-src"]=l,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function h(e){let[t,i]=l.version.split(".",2),r=parseInt(t,10),o=parseInt(i,10);return r>18||18===r&&o>=3?{fetchPriority:e}:{fetchpriority:e}}let w=(0,l.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:o,height:s,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:g,loading:m,unoptimized:w,fill:y,onLoadRef:v,onLoadingCompleteRef:b,setBlurComplete:x,setShowAltText:j,onLoad:_,onError:S,...C}=e;return(0,n.jsx)("img",{...C,...h(f),loading:m,width:a,height:s,decoding:u,"data-nimg":y?"fill":"1",className:d,style:c,sizes:o,srcSet:r,src:i,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(S&&(e.src=e.src),e.complete&&p(e,g,v,b,x,w))},[i,g,v,b,x,S,w,t]),onLoad:e=>{p(e.currentTarget,g,v,b,x,w)},onError:e=>{j(!0),"empty"!==g&&x(!0),S&&S(e)}})});function y(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...h(i.fetchPriority)};return t&&s.default.preload?(s.default.preload(i.src,r),null):(0,n.jsx)(a.default,{children:(0,n.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let i=(0,l.useContext)(f.RouterContext),r=(0,l.useContext)(c.ImageConfigContext),o=(0,l.useMemo)(()=>{let e=m||r||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:i}},[r]),{onLoad:s,onLoadingComplete:a}=e,p=(0,l.useRef)(s);(0,l.useEffect)(()=>{p.current=s},[s]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[v,b]=(0,l.useState)(!1),[x,j]=(0,l.useState)(!1),{props:_,meta:S}=(0,u.getImgProps)(e,{defaultLoader:g.default,imgConf:o,blurComplete:v,showAltText:x});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(w,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:p,onLoadingCompleteRef:h,setBlurComplete:b,setShowAltText:j,ref:t}),S.priority?(0,n.jsx)(y,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),i(1558);let r=i(7386),o=i(4706);function n(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var i;let s,a,u,{src:d,sizes:c,unoptimized:f=!1,priority:g=!1,loading:m,className:p,quality:h,width:w,height:y,fill:v=!1,style:b,onLoad:x,onLoadingComplete:j,placeholder:_="empty",blurDataURL:S,fetchPriority:C,layout:P,objectFit:z,objectPosition:E,lazyBoundary:k,lazyRoot:N,...O}=e,{imgConf:I,showAltText:R,blurComplete:M,defaultLoader:A}=t,G=I||o.imageConfigDefault;if("allSizes"in G)s=G;else{let e=[...G.deviceSizes,...G.imageSizes].sort((e,t)=>e-t),t=G.deviceSizes.sort((e,t)=>e-t);s={...G,allSizes:e,deviceSizes:t}}let B=O.loader||A;delete O.loader,delete O.srcSet;let D="__next_img_default"in B;if(D){if("custom"===s.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=B;B=t=>{let{config:i,...r}=t;return e(r)}}if(P){"fill"===P&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[P];e&&(b={...b,...e});let t={responsive:"100vw",fill:"100vw"}[P];t&&!c&&(c=t)}let L="",F=l(w),T=l(y);if("object"==typeof(i=d)&&(n(i)||void 0!==i.src)){let e=n(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,S=S||e.blurDataURL,L=e.src,!v){if(F||T){if(F&&!T){let t=F/e.width;T=Math.round(e.height*t)}else if(!F&&T){let t=T/e.height;F=Math.round(e.width*t)}}else F=e.width,T=e.height}}let W=!g&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:L)||d.startsWith("data:")||d.startsWith("blob:"))&&(f=!0,W=!1),s.unoptimized&&(f=!0),D&&d.endsWith(".svg")&&!s.dangerouslyAllowSVG&&(f=!0),g&&(C="high");let J=l(h),U=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:E}:{},R?{}:{color:"transparent"},b),V=M||"empty"===_?null:"blur"===_?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:F,heightInt:T,blurWidth:a,blurHeight:u,blurDataURL:S||"",objectFit:U.objectFit})+'")':'url("'+_+'")',Y=V?{backgroundSize:U.objectFit||"cover",backgroundPosition:U.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},q=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:l,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,r)=>s({config:t,src:i,quality:n,width:e})+" "+("w"===u?e:r+1)+u).join(", "),src:s({config:t,src:i,quality:n,width:a[d]})}}({config:s,src:d,unoptimized:f,width:F,quality:J,sizes:c,loader:B});return{props:{...O,loading:W?"lazy":m,fetchPriority:C,width:F,height:T,decoding:"async",className:p,style:{...U,...Y},sizes:q.sizes,srcSet:q.srcSet,src:q.src},meta:{unoptimized:f,priority:g,placeholder:_,fill:v}}}},7386:function(e,t){"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:l}=e,s=r?40*r:t,a=o?40*o:i,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},7481:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{getImageProps:function(){return s},default:function(){return a}});let r=i(8754),o=i(1908),n=i(3686),l=r._(i(3293)),s=e=>{let{props:t}=(0,o.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}},a=n.Image},3293:function(e,t){"use strict";function i(e){let{config:t,src:i,width:r,quality:o}=e;return t.path+"?url="+encodeURIComponent(i)+"&w="+r+"&q="+(o||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},9267:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return o}});var r=i(5893);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{className:"text-black font-semibold lg:text-4xl text-2xl text-center leading-relaxed w-full lg:w-8/12 mx-auto font-GraphikBold",children:"Unlock Your Potential with Thought Glow Community!"}),(0,r.jsx)("div",{className:"mt-20",children:(0,r.jsx)("div",{className:"global-container",children:(0,r.jsxs)("div",{className:"grid lg:grid-cols-2 gap-5 lg:gap-20 my-10 items-center ",children:[(0,r.jsxs)("div",{className:"space-y-2 lg:space-y-5 lg:order-3",children:[(0,r.jsx)("h1",{className:"font-GraphikBold text-xl",children:"Join Our Community"}),(0,r.jsx)("p",{children:"Are you ready to embark on a transformative learning journey? Look no further! Thought Glow Community is your gateway to a world of knowledge, collaboration, and growth. Join our community and keep connected with others like you."}),(0,r.jsx)("div",{className:"text-center pt-4",children:(0,r.jsx)("button",{type:"button",onClick:()=>{window.location.href="https://community.thoughtglow.com"},className:"text-white bg-sky-500 rounded-lg text-xl px-5 py-2.5 me-2 mb-2",children:"Access Community Portal"})})]}),(0,r.jsx)("img",{src:"/assets/images/community.png",alt:"",className:"w-full lg:order-4"})]})})})]})}i(5675)},5675:function(e,t,i){i(7481)}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);