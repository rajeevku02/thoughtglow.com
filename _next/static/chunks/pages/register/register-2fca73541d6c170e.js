(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[685],{5094:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/register/register",function(){return l(8475)}])},5755:function(e,t,l){"use strict";l.d(t,{Z:function(){return n}});var r=l(5893),s=l(9008),a=l.n(s),i=l(7932);function n(e){let{children:t}=e;return(0,r.jsxs)("div",{className:"w-full min-h-screen global-layout font-Graphik",children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"Thought Glow"}),(0,r.jsx)("script",{src:"https://checkout.razorpay.com/v1/checkout.js"})]}),(0,r.jsx)("div",{children:t}),i.Z.popup]})}},8475:function(e,t,l){"use strict";l.r(t);var r=l(5893),s=l(7294),a=l(5755),i=l(7932),n=l(9110);let o=n.Z.apiBackend+"/forms/reg",c="pweb",m=e=>{for(let t of document.cookie.split(";"))if(t.trim().startsWith(e)){let e=t.split("=");if(e.length>1)return e[1].trim()}return""};function d(e,t){let l=(0,r.jsxs)("div",{className:"flex flex-col items-center min-w-32",children:[(0,r.jsx)("span",{className:"mt-1",children:t}),(0,r.jsx)("button",{className:"mt-4 px-2 text-white text-lg bg-sky-500 hover:bg-sky-600 tracking-wider rounded",onClick:()=>{i.Z.hide()},children:"OK"})]});i.Z.show(l,e)}function h(){let[e,t]=(0,s.useState)(0),[l,a]=(0,s.useState)(""),[i,o]=(0,s.useState)(""),[c,m]=(0,s.useState)(""),[d,h]=(0,s.useState)(""),g=()=>{window.location.replace(n.Z.thanksLink)};return 0==e?(0,r.jsx)(x,{setName:a,setEmail:o,setPhone:m,next:()=>{t(e=>e+1)}}):1==e?(0,r.jsx)(u,{name:l,email:i,phone:c,setKey:h,next:g,back:()=>{t(e=>e>0?e-1:0)}}):2==e?(0,r.jsx)(p,{regKey:d,next:g}):(0,r.jsx)("div",{})}function x(e){let{setName:t,setEmail:l,setPhone:a,next:i}=e,[h,x]=(0,s.useState)(!1),u=()=>{x(!1)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("form",{className:"max-w-[42rem] w-full mt-4 p-4 md:p-6 lg:p-10 bg-white rounded shadow-xl flex flex-col",onSubmit:e=>{if(e.preventDefault(),h)return;x(!0);let r={type:"request_otp",form_id:c,name:e.target.elements.name.value,email:e.target.elements.email.value,phone:e.target.elements.phone.value,fbc:m("_fbc"),fbp:m("_fbp")};if(!r.name||!r.email||!r.phone){d("Error","Please set the fields"),u();return}t(r.name),l(r.email),a(r.phone),fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{200==e.status?i():u()}).catch(()=>{u()})},children:[(0,r.jsxs)("div",{className:"mt-2 mb-3 flex flex-row items-center",children:[(0,r.jsx)("a",{href:n.Z.webinarLink,children:(0,r.jsx)("img",{alt:"Thought Glow",className:"w-16 h-16",src:"/images/thoughtglow-512.png"})}),(0,r.jsx)("span",{className:"ml-2 text-2xl",children:"Thought Glow"})]}),(0,r.jsx)("p",{className:"text-gray-800 text-lg mb-1",children:"Registration: Programming Career Live Session"}),(0,r.jsx)("p",{className:"text-xs mb-4 text-gray-400",children:"Please provide valid email and 10 digit mobile number. We will send OTP on both, you will have to enter both OTP in the next step"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-00",htmlFor:"name",children:"Name"}),(0,r.jsx)("input",{className:"w-full px-2 py-1 text-gray-700 border-2 rounded",id:"name",name:"name",type:"text",required:!0,placeholder:"Your Name","aria-label":"Name"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",htmlFor:"email",children:"Email"}),(0,r.jsx)("input",{className:"w-full px-2  py-1 text-gray-700 border-2 rounded",id:"email",name:"email",type:"email",required:!0,placeholder:"Your Email","aria-label":"Email"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",htmlFor:"phone",children:"Mobile"}),(0,r.jsx)("input",{className:"w-full px-2  py-1 text-gray-700 border-2 rounded",id:"phone",name:"phone",type:"tel",required:!0,placeholder:"Your Mobile Number",pattern:"[0-9]{10}","aria-label":"Phone"})]}),(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)("button",{className:"px-4 py-1 text-white text-lg bg-sky-500 hover:bg-sky-600 tracking-wider rounded",type:"submit",children:h?"Wait..":"Next"})})]})})})}function u(e){let{name:t,email:l,phone:a,setKey:i,next:h,back:x}=e,[u,p]=(0,s.useState)(!1),g=()=>{p(!1)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("form",{className:"max-w-[42rem] w-full mt-4 p-4 md:p-6 lg:p-10 bg-white rounded shadow-xl flex flex-col",onSubmit:e=>{if(e.preventDefault(),u)return;p(!0);let r={type:"submit_otp",form_id:c,name:t,email:l,phone:a,phone_code:e.target.elements.phone_otp.value,email_code:e.target.elements.email_otp.value,fbc:m("_fbc"),fbp:m("_fbp")};if(!r.phone_code||!r.email_code){d("Error","Please set the fields"),g();return}fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{200==e.status?e.json().then(e=>{i(e.key),h()}).catch(()=>{g()}):(d("Error","Invalid OTP"),g())}).catch(()=>{g()})},children:[(0,r.jsxs)("div",{className:"mt-2 mb-3 flex flex-row items-center",children:[(0,r.jsx)("a",{href:n.Z.webinarLink,children:(0,r.jsx)("img",{alt:"Thought Glow",className:"w-16 h-16",src:"/images/thoughtglow-512.png"})}),(0,r.jsx)("span",{className:"ml-2 text-2xl",children:"Thought Glow"})]}),(0,r.jsx)("p",{className:"text-gray-800 text-lg mb-1",children:"Registration: Programming Career Live Session"}),(0,r.jsx)("p",{className:"text-xs mb-4 text-gray-400",children:"Please enter the OTP received in email and SMS"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-00",htmlFor:"email_otp",children:"Email OTP"}),(0,r.jsx)("input",{className:"w-full px-2 py-1 text-gray-700 border-2 rounded",id:"email_otp",name:"email_otp",type:"text",required:!0,placeholder:"Enter Email OTP","aria-label":"Email OTP"})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",htmlFor:"phone_otp",children:"Mobile OTP"}),(0,r.jsx)("input",{className:"w-full px-2  py-1 text-gray-700 border-2 rounded",id:"phone_otp",name:"phone_otp",type:"text",required:!0,placeholder:"Enter Mobile OTP","aria-label":"Mobile OTP"})]}),(0,r.jsxs)("div",{className:"mt-6",children:[(0,r.jsx)("button",{className:"px-4 py-1 text-white text-lg bg-sky-500 hover:bg-sky-600 mr-6 mb-1 tracking-wider rounded",type:"button",onClick:x,children:"Back"}),(0,r.jsx)("button",{className:"px-4 py-1 text-white text-lg bg-sky-500 hover:bg-sky-600 tracking-wider rounded",type:"submit",children:u?"Wait..":"Next"})]})]})})})}function p(e){let{regKey:t,next:l,back:a}=e,[i,h]=(0,s.useState)(!1),x=()=>{h(!1)};return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"flex justify-center",children:(0,r.jsxs)("form",{className:"max-w-[42rem] w-full mt-4 p-4 md:p-6 lg:p-10 bg-white rounded shadow-xl flex flex-col",onSubmit:e=>{if(e.preventDefault(),i)return;h(!0);let r={form_id:c,key:t,profession:e.target.elements.profession.value,linkedin:e.target.elements.linkedin.value,fbc:m("_fbc"),fbp:m("_fbp")};if(!r.profession||!r.linkedin){d("Error","Please set the fields"),x();return}if(!function(e){let t;try{t=new URL(e)}catch(e){return!1}return!(0>t.hostname.indexOf("linkedin.com"))&&!(t.pathname.length<2)&&("http:"===t.protocol||"https:"===t.protocol)}(r.linkedin)){d("Error","Please enter a valid linkedin profile"),x();return}fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}).then(e=>{200==e.status?l():x()}).catch(()=>{x()})},children:[(0,r.jsxs)("div",{className:"mt-2 mb-3 flex flex-row items-center",children:[(0,r.jsx)("a",{href:n.Z.webinarLink,children:(0,r.jsx)("img",{alt:"Thought Glow",className:"w-16 h-16",src:"/images/thoughtglow-512.png"})}),(0,r.jsx)("span",{className:"ml-2 text-2xl",children:"Thought Glow"})]}),(0,r.jsx)("p",{className:"text-gray-800 text-lg mb-1",children:"Registration: Programming Career Live Session"}),(0,r.jsx)("p",{className:"text-xs mb-4 text-gray-400",children:"Please complete the registration"}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-00",htmlFor:"profession",children:"Profession"}),(0,r.jsxs)("select",{id:"profession",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",children:[(0,r.jsx)("option",{value:"working",children:"Working Professional"}),(0,r.jsx)("option",{value:"student",children:"Student"}),(0,r.jsx)("option",{value:"other",children:"Other"})]})]}),(0,r.jsxs)("div",{className:"mt-4",children:[(0,r.jsx)("label",{className:"block text-sm text-gray-600",htmlFor:"linkedin",children:"Linkedin Profile"}),(0,r.jsx)("input",{className:"w-full px-2  py-1 text-gray-700 border-2 rounded",id:"linkedin",name:"linkedin",type:"text",required:!0,placeholder:"Your Linkedin Profile","aria-label":"Your Linkedin Profile"})]}),(0,r.jsx)("div",{className:"mt-6",children:(0,r.jsx)("button",{className:"px-4 py-1 text-white text-lg bg-sky-500 hover:bg-sky-600 tracking-wider rounded",type:"submit",children:i?"Wait..":"Submit"})})]})})})}h.layout=a.Z,t.default=h}},function(e){e.O(0,[888,774,179],function(){return e(e.s=5094)}),_N_E=e.O()}]);