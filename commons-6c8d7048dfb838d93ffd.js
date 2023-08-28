(self.webpackChunkkyledot=self.webpackChunkkyledot||[]).push([[351],{6219:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(7294);var a=()=>{let e;"undefined"!=typeof window&&(e=()=>{var e;return null!==(e=localStorage.getItem("theme"))&&void 0!==e?e:window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"});const[t,r]=n.useState(e);n.useEffect((()=>{document.body.dataset.theme=t,localStorage.setItem("theme",t)}),[t]);return[t,()=>{const e="light"===t?"dark":"light";r((t=>e))}]},o=r(3854);var i=()=>{const[e,t]=a();return n.createElement("div",{className:"container",onClick:t},n.createElement("div",{className:"switch ring-4 ring-blue-primary"}),n.createElement("div",{className:"btn-text"},n.createElement("div",{className:"btn-text-icon"},n.createElement(o.q4P,{size:"20",color:"var(--color-text)"})),n.createElement("div",{className:"btn-text-icon"},n.createElement(o.Lac,{size:"20"}))))}},7736:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7294),a=r(1883),o=r(3493),i=r.n(o);var l=()=>{const[e,t]=n.useState(0),r=i()((()=>{t(window.scrollY)}),300);return n.useEffect((()=>(window.addEventListener("scroll",r),()=>{window.removeEventListener("scroll",r)})),[]),e},c=r(8193);var s=()=>{const e=l();return n.createElement(n.Fragment,null,e>=300&&n.createElement("button",{type:"button",className:"fixed bottom-24 right-10 xl:right-[30rem] p-1 border-[1px] border-gray-300 hover:ring-2 rounded-xl bg-white dark:bg-dark-primary dark:border-gray-600 z-10",onClick:()=>window.scrollTo({top:0,behavior:"smooth"})},n.createElement(c.y1n,{size:"32"})))},u=r(6219);var m=e=>{let{location:t,title:r,children:o}=e;const i="/"===t.pathname;let l;return l=i?n.createElement("h1",{className:"main-heading dark:text-white"},n.createElement(a.Link,{to:"/"},r)):n.createElement("div",null,n.createElement("span",{className:"text-[1.728rem]"},"🧑🏻‍🚀 "),n.createElement(a.Link,{className:"header-link-home",to:"/"},r)),window.addEventListener("copy",(e=>{alert("Don't allow copy because of security policy"),e.preventDefault(),e.clipboardData.clearData("Text")})),document.addEventListener("contextmenu",(e=>e.preventDefault())),document.addEventListener("keydown",(e=>{e.preventDefault(),e.returnValue=!1})),n.createElement("div",{className:"global-wrapper","data-is-root-path":i},n.createElement("header",{className:"global-header"},l,n.createElement(u.Z,null)),n.createElement("main",{className:"mb-[4rem]"},o),n.createElement("footer",{className:"border-t-2"},n.createElement("div",{className:"flex justify-between font-semibold relative"},n.createElement("div",{className:"text-sm text-gray-400"}," © 2023 Hyukmin Kwon."),n.createElement("div",{className:"flex gap-4 text-sm"},n.createElement("a",{href:"https://github.com/olhkyle",target:"_blank",rel:"noreferrer",className:"text-gray-500 dark:text-white underline-offset-4 underline hover:text-blue-primary cursor-pointer"},"Github"),n.createElement("a",{href:"https://olhkyle.me",target:"_blank",rel:"noreferrer",className:"text-gray-500 dark:text-white underline-offset-4 underline hover:text-blue-primary cursor-pointer"},"Olhkyle.me"),n.createElement("a",{href:"https://olhkyle.github.io/rss.xml",target:"_blank",rel:"noreferrer",className:"text-blue-primary dark:text-white underline-offset-4 underline hover:text-blue-primary cursor-pointer"},"rss")),n.createElement(s,null))))}},9357:function(e,t,r){"use strict";var n=r(7294),a=r(1883);t.Z=e=>{var t,r,o;let{description:i,title:l,children:c}=e;const{site:s}=(0,a.useStaticQuery)("805692932"),u=i||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,m+" — A blog by Kyle Kwon"),n.createElement("meta",{name:"description",content:u}),n.createElement("meta",{property:"og:title",content:m}),n.createElement("meta",{property:"og:description",content:u}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"linkedin:card",content:"summary"}),n.createElement("meta",{name:"linkedin:creator",content:(null===(r=s.siteMetadata)||void 0===r||null===(o=r.social)||void 0===o?void 0:o.linkedin)||""}),n.createElement("meta",{name:"linkedin:title",content:l}),n.createElement("meta",{name:"linkedin:description",content:u}),n.createElement("meta",{name:"google-site-verification",content:"QqtJyrtBQngvT--l7EEiKSi6MQp1_qz1s_3gzHqiIRk"}),n.createElement("link",{rel:"shortcut icon",href:"../static/favicon.ico"}),n.createElement("link",{rel:"icon",href:"../static/favicon.ico"}),c)}},2705:function(e,t,r){var n=r(5639).Symbol;e.exports=n},4239:function(e,t,r){var n=r(2705),a=r(9607),o=r(2333),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?a(e):o(e)}},7561:function(e,t,r){var n=r(7990),a=/^\s+/;e.exports=function(e){return e?e.slice(0,n(e)+1).replace(a,""):e}},1957:function(e,t,r){var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},9607:function(e,t,r){var n=r(2705),a=Object.prototype,o=a.hasOwnProperty,i=a.toString,l=n?n.toStringTag:void 0;e.exports=function(e){var t=o.call(e,l),r=e[l];try{e[l]=void 0;var n=!0}catch(c){}var a=i.call(e);return n&&(t?e[l]=r:delete e[l]),a}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,r){var n=r(1957),a="object"==typeof self&&self&&self.Object===Object&&self,o=n||a||Function("return this")();e.exports=o},7990:function(e){var t=/\s/;e.exports=function(e){for(var r=e.length;r--&&t.test(e.charAt(r)););return r}},3279:function(e,t,r){var n=r(3218),a=r(7771),o=r(4841),i=Math.max,l=Math.min;e.exports=function(e,t,r){var c,s,u,m,f,d,v=0,p=!1,h=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var r=c,n=s;return c=s=void 0,v=t,m=e.apply(n,r)}function b(e){var r=e-d;return void 0===d||r>=t||r<0||h&&e-v>=u}function E(){var e=a();if(b(e))return x(e);f=setTimeout(E,function(e){var r=t-(e-d);return h?l(r,u-(e-v)):r}(e))}function x(e){return f=void 0,y&&c?g(e):(c=s=void 0,m)}function w(){var e=a(),r=b(e);if(c=arguments,s=this,d=e,r){if(void 0===f)return function(e){return v=e,f=setTimeout(E,t),p?g(e):m}(d);if(h)return clearTimeout(f),f=setTimeout(E,t),g(d)}return void 0===f&&(f=setTimeout(E,t)),m}return t=o(t)||0,n(r)&&(p=!!r.leading,u=(h="maxWait"in r)?i(o(r.maxWait)||0,t):u,y="trailing"in r?!!r.trailing:y),w.cancel=function(){void 0!==f&&clearTimeout(f),v=0,c=d=s=f=void 0},w.flush=function(){return void 0===f?m:x(a())},w}},3218:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,r){var n=r(4239),a=r(7005);e.exports=function(e){return"symbol"==typeof e||a(e)&&"[object Symbol]"==n(e)}},7771:function(e,t,r){var n=r(5639);e.exports=function(){return n.Date.now()}},3493:function(e,t,r){var n=r(3279),a=r(3218);e.exports=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return a(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),n(e,t,{leading:o,maxWait:t,trailing:i})}},4841:function(e,t,r){var n=r(7561),a=r(3218),o=r(3448),i=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=n(e);var r=l.test(e);return r||c.test(e)?s(e.slice(2),r?2:8):i.test(e)?NaN:+e}},4405:function(e,t,r){"use strict";r.d(t,{w_:function(){return s}});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};function c(e){return e&&e.map((function(e,t){return n.createElement(e.tag,i({key:t},e.attr),c(e.child))}))}function s(e){return function(t){return n.createElement(u,i({attr:i({},e.attr)},t),c(e.child))}}function u(e){var t=function(t){var r,a=e.attr,o=e.size,c=e.title,s=l(e,["attr","size","title"]),u=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,s,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(e){return t(e)})):t(a)}}}]);
//# sourceMappingURL=commons-6c8d7048dfb838d93ffd.js.map