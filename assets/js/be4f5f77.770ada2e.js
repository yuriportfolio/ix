"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[64702,72039,3539,25641,4167,84923,53232,37321,41730,88386,1850],{30876:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||r;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(37949),i=n(90077),r=n(37614),o=n(2784),l=n(90943);function s(e){const t=(0,r.Z)(),[n]=(0,o.useState)(!1),s=(0,i.Z)("/"),[p,m]=(0,o.useState)(""),[c,d]=(0,o.useState)((0,l.V)(t)),{preferredVersion:u}=(0,a.J)();return(0,o.useEffect)((()=>{const t=null==u?void 0:u.name;m(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==u?void 0:u.name,e.name]),(0,o.useLayoutEffect)((()=>{const e=()=>{let e=(0,l.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),d(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),o.createElement(o.Fragment,null,n?o.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==u?void 0:u.name):o.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:c}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>P});var a,i=n(7267),r=n(90077),o=n(55061),l=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...i}=e;return l.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},i),t?l.createElement("title",{id:n},t):null,a||(a=l.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var m;function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}const d=e=>{let{title:t,titleId:n,...a}=e;return l.createElement("svg",c({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},a),t?l.createElement("title",{id:n},t):null,m||(m=l.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var u=n(77942);let g;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(g||(g={}));var v=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],f={clickToLoad:function(e){return y("ctl",e)},devToolsHeight:function(e){return h("devtoolsheight",e)},forceEmbedLayout:function(e){return y("embed",e)},hideDevTools:function(e){return y("hidedevtools",e)},hideExplorer:function(e){return y("hideExplorer",e)},hideNavigation:function(e){return y("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return h("terminalHeight",e)},theme:function(e){return N("theme",["light","dark"],e)},view:function(e){return N("view",["preview","editor"],e)}};function k(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&f.hasOwnProperty(t)?f[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function y(e,t){return!0===t?e+"=1":""}function h(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function N(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function x(e,t){return""+b(t)+e+k(t)}function b(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function w(e){return e&&!1===e.newWindow?"_self":"_blank"}function C(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function T(e){if(!v.includes(e.template)){var t=v.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,a=document.createElement("form");return a.method="POST",a.setAttribute("style","display:none!important;"),a.appendChild(C("project[title]",e.title)),a.appendChild(C("project[description]",e.description)),a.appendChild(C("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):a.appendChild(C("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&a.appendChild(C("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&a.appendChild(C("project[files]["+t+"]",e.files[t]))})),a}var E=function(e,t){!function(e,t){var n=T(e);n.action=x("/run",t),n.target=w(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const I="https://github.com/siemens/ix/tree/main/packages";function _(e){let{name:t,framework:n}=e;const a=function(e){let{name:t,framework:n}=e;return n===g.ANGULAR?`${I}/angular-test-app/src/preview-examples/${t}.ts`:n===g.JAVASCRIPT?`${I}/html-test-app/src/preview-examples/${t}.html`:n===g.REACT?`${I}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(a,"_blank")}async function M(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function O(e){let{name:t,framework:n,files:a,baseUrl:i}=e;const r=await async function(e,t,n){const a=[];return(await M(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{a.push({filename:n[t],sourceCode:e})})),a}(i,n,a);return n===g.REACT?async function(e,t){const[n,a,i,r,o]=await M([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[l]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),E({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":a,"src/index.tsx":i,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${l.filename.substring(0,l.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":r,"tsconfig.json":o,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${l.filename}`})}(i,r):n===g.ANGULAR?async function(e,t,n){const[a,i,r,o,l,s,p,m,c,d,u]=await M([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),g=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&g.push(t)}));const v=`\n    ${g.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${g.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,f={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;f[`src/app/${t}`]=n})),E({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":v,"src/app/app.component.css":a,"src/app/app.component.html":i,"src/app/app.component.ts":r,"src/app/app.module.ts":o,"src/index.html":l,"src/main.ts":s,"src/styles.css":p,"angular.json":m,"package.json":c,"tsconfig.app.json":d,"tsconfig.json":u,...f}},{openFile:`src/app/${t}.ts`})}(i,t,r):n===g.JAVASCRIPT?async function(e,t){const[n,a,i,r]=await M([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[o,...l]=t,s={};l.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),E({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",o.sourceCode),"src/main.js":a,"package.json":i,"vite.config.ts":r}},{openFile:["src/index.html"]})}(i,r):void 0}function A(e){let{name:t,framework:n}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>_({name:t,framework:n})},l.createElement(p,null))}function D(e){let{name:t,files:n,framework:a,baseUrl:i}=e;return l.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>O({name:t,files:n,framework:a,baseUrl:i})},l.createElement(d,null))}function j(e){const[t,n]=(0,l.useState)(e.files[0].filename);return l.createElement(l.Fragment,null,l.createElement(o.Vp,null,e.files.map((e=>{e.node;return l.createElement(o.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const a=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return a?l.createElement(a,null):null}())}function P(e){let{name:t,height:n,noMargin:a,theme:s,frameworks:p,availableFrameworks:m}=e;const{pathname:c}=(0,i.TH)(),d=(0,r.Z)("/"),[v,f]=(0,l.useState)(!0),[k,y]=(0,l.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||g.PREVIEW}(m)),[h,N]=(0,l.useState)();(0,l.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(c+t)),[t,c]);(0,l.useEffect)((()=>{const e={};Object.keys(p).forEach((n=>{if("function"==typeof p[n]){let a=t;n===g.REACT&&(a=a.concat(".tsx")),n===g.JAVASCRIPT&&(a=a.concat(".html")),n===g.ANGULAR&&(a=a.concat(".ts")),e[n]=[{filename:a,node:p[n]({})}]}"object"==typeof p[n]&&(e[n]||(e[n]=[]),Object.keys(p[n]).forEach((t=>{e[n].push({filename:t,node:p[n][t]})})))})),N(e)}),[p,N]);const x=e=>{y(e)};function b(e){return e===g.PREVIEW||(!m||(0===m.length||m.includes(e)))}return l.createElement("div",{className:"Playground"},v?l.createElement(l.Fragment,null,l.createElement("div",{className:"Playground__Toolbar Location__Bottom"},l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==g.PREVIEW,onClick:()=>x(g.PREVIEW)},"Preview"),b(g.ANGULAR)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==g.ANGULAR,onClick:()=>x(g.ANGULAR)},"Angular"):null,b(g.REACT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==g.REACT,onClick:()=>x(g.REACT)},"React"):null,b(g.JAVASCRIPT)?l.createElement(o._h,{className:"Playground__Framework__Button",ghost:k!==g.JAVASCRIPT,onClick:()=>x(g.JAVASCRIPT)},"JavaScript"):null,l.createElement("div",{className:"Playground__Toolbar__Actions"},k!==g.PREVIEW?l.createElement(l.Fragment,null,l.createElement(A,{name:t,framework:k}),l.createElement(D,{name:t,framework:k,baseUrl:d,files:h?k===g.PREVIEW?[]:h[k].map((e=>e.filename)):[]})):null)),function(){if(k===g.PREVIEW)return l.createElement(u.Z,{name:t,height:n,noMargin:a,theme:s});if(!h||!h[k])return null;if(1===h[k].length){const[{node:e}]=h[k];return e}return l.createElement(j,{files:h[k]})}()):null)}},49841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/ix-map-navigation-overlay/events",id:"auto-generated/ix-map-navigation-overlay/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-map-navigation-overlay/events.md",sourceDirName:"auto-generated/ix-map-navigation-overlay",slug:"/auto-generated/ix-map-navigation-overlay/events",permalink:"/docs/auto-generated/ix-map-navigation-overlay/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-map-navigation-overlay/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"closeClick"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Event closed"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"any"))))))}c.isMDXComponent=!0},72232:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/ix-map-navigation-overlay/props",id:"auto-generated/ix-map-navigation-overlay/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-map-navigation-overlay/props.md",sourceDirName:"auto-generated/ix-map-navigation-overlay",slug:"/auto-generated/ix-map-navigation-overlay/props",permalink:"/docs/auto-generated/ix-map-navigation-overlay/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-map-navigation-overlay/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"color"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Color of icon"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"color")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"icon"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Icon of overlay"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"icon")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Title of overlay"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0},78755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/ix-map-navigation/events",id:"auto-generated/ix-map-navigation/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-map-navigation/events.md",sourceDirName:"auto-generated/ix-map-navigation",slug:"/auto-generated/ix-map-navigation/events",permalink:"/docs/auto-generated/ix-map-navigation/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-map-navigation/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"contextMenuClick"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Context menu clicked"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"void"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"navigationToggled"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Navigation toggled"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))))))}c.isMDXComponent=!0},32563:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/ix-map-navigation/props",id:"auto-generated/ix-map-navigation/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-map-navigation/props.md",sourceDirName:"auto-generated/ix-map-navigation",slug:"/auto-generated/ix-map-navigation/props",permalink:"/docs/auto-generated/ix-map-navigation/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-map-navigation/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"applicationName"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Application name"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"application-name")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hideContextMenu"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Hide the sidebar context menu button when set to true"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"hide-context-menu")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"navigationTitle"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{className:"Api__Table"},(0,i.kt)("div",null,"Navigation title"),(0,i.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"navigation-title")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))))}c.isMDXComponent=!0},95539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/angular/map-navigation-overlay.ts",id:"auto-generated/previews/angular/map-navigation-overlay.ts",title:"map-navigation-overlay.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/map-navigation-overlay.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/map-navigation-overlay.ts",permalink:"/docs/auto-generated/previews/angular/map-navigation-overlay.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/map-navigation-overlay.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-map-navigation\n      application-name="Test Application"\n      navigation-title="Some other content"\n    >\n      <div class="placeholder-logo" slot="logo"></div>\n      <ix-menu>\n        <ix-menu-item>Item 1</ix-menu-item>\n        <ix-menu-item>Item 2</ix-menu-item>\n        <ix-menu-item>Item 3</ix-menu-item>\n      </ix-menu>\n      <div slot="sidebar-content">Sidebar content</div>\n      <ix-button (click)="showOverlay = true">Show overlay</ix-button>\n      <ix-map-navigation-overlay\n        *ngIf="showOverlay"\n        name="Custom overlay title"\n        icon="bulb"\n        slot="overlay"\n        (closeClick)="showOverlay = false"\n      ></ix-map-navigation-overlay>\n    </ix-map-navigation>\n  `,\n})\nexport default class MapNavigationOverlay {\n  showOverlay = true;\n}\n')))}c.isMDXComponent=!0},85537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/angular/map-navigation.ts",id:"auto-generated/previews/angular/map-navigation.ts",title:"map-navigation.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/map-navigation.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/map-navigation.ts",permalink:"/docs/auto-generated/previews/angular/map-navigation.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/map-navigation.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `\n    <ix-map-navigation\n      application-name="Test Application"\n      navigation-title="Some other content"\n    >\n      <div class="placeholder-logo" slot="logo"></div>\n      <ix-menu>\n        <ix-menu-item>Item 1</ix-menu-item>\n        <ix-menu-item>Item 2</ix-menu-item>\n        <ix-menu-item>Item 3</ix-menu-item>\n      </ix-menu>\n      <div slot="sidebar-content">Sidebar content</div>\n      <div>Content</div>\n    </ix-map-navigation>\n  `,\n})\nexport default class MapNavigation {}\n')))}c.isMDXComponent=!0},52514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/react/map-navigation-overlay",id:"auto-generated/previews/react/map-navigation-overlay",title:"map-navigation-overlay",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/map-navigation-overlay.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/map-navigation-overlay",permalink:"/docs/auto-generated/previews/react/map-navigation-overlay",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/map-navigation-overlay.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  IxButton,\n  IxMapNavigation,\n  IxMapNavigationOverlay,\n  IxMenu,\n  IxMenuItem,\n} from \'@siemens/ix-react\';\nimport React, { useState } from \'react\';\n\nexport default () => {\n  const [overlay, setOverlay] = useState(false);\n\n  function openOverlay() {\n    setOverlay(true);\n  }\n\n  function closeOverlay() {\n    setOverlay(false);\n  }\n\n  return (\n    <IxMapNavigation>\n      <div className="placeholder-logo" slot="logo"></div>\n      <IxMenu>\n        <IxMenuItem>Item 1</IxMenuItem>\n        <IxMenuItem>Item 2</IxMenuItem>\n        <IxMenuItem>Item 3</IxMenuItem>\n      </IxMenu>\n      <IxButton\n        onClick={() => {\n          openOverlay();\n        }}\n      >\n        Open overlay\n      </IxButton>\n      <div>\n        {overlay ? (\n          <IxMapNavigationOverlay\n            name="Custom overlay title"\n            icon="bulb"\n            onCloseClick={() => closeOverlay()}\n          >\n            Lorem ipsum\n          </IxMapNavigationOverlay>\n        ) : null}\n      </div>\n    </IxMapNavigation>\n  );\n};\n')))}c.isMDXComponent=!0},66790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/react/map-navigation",id:"auto-generated/previews/react/map-navigation",title:"map-navigation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/map-navigation.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/map-navigation",permalink:"/docs/auto-generated/previews/react/map-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/map-navigation.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { IxMapNavigation, IxMenu, IxMenuItem } from \'@siemens/ix-react\';\nimport React from \'react\';\n\nexport default () => {\n  return (\n    <IxMapNavigation\n      applicationName="Test Application"\n      navigationTitle="Some other content"\n    >\n      <div className="placeholder-logo" slot="logo"></div>\n      <IxMenu>\n        <IxMenuItem>Item 1</IxMenuItem>\n        <IxMenuItem>Item 2</IxMenuItem>\n        <IxMenuItem>Item 3</IxMenuItem>\n      </IxMenu>\n      <div slot="sidebar-content">Sidebar content</div>\n      <div>Content</div>\n    </IxMapNavigation>\n  );\n};\n')))}c.isMDXComponent=!0},74691:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/map-navigation-overlay",id:"auto-generated/previews/web-component/map-navigation-overlay",title:"map-navigation-overlay",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/map-navigation-overlay.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/map-navigation-overlay",permalink:"/docs/auto-generated/previews/web-component/map-navigation-overlay",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/map-navigation-overlay.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},"<ix-map-navigation\n  application-name=\"Test Application\"\n  navigation-title=\"Some other content\"\n>\n  <div class=\"placeholder-logo\" slot=\"logo\"></div>\n\n  <ix-menu>\n    <ix-menu-item>Item 1</ix-menu-item>\n  </ix-menu>\n  <ix-button id=\"btn-open-overlay\">Open overlay</ix-button>\n</ix-map-navigation>\n\n<script type=\"module\">\n  const mapNav = document.querySelector('ix-map-navigation');\n  const buttonOpenOverlay = document.getElementById('btn-open-overlay');\n\n  buttonOpenOverlay.addEventListener('click', () => {\n    const overlay = document.createElement('ix-map-navigation-overlay');\n    overlay.slot = 'overlay';\n    overlay.name = 'Custom overlay';\n    overlay.icon = 'bulb';\n    mapNav.appendChild(overlay);\n\n    overlay.addEventListener('closeClick', (e) => {\n      overlay.parentNode.removeChild(overlay);\n    });\n  });\n<\/script>\n")))}c.isMDXComponent=!0},54131:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(7896),i=(n(2784),n(30876));const r={},o=void 0,l={unversionedId:"auto-generated/previews/web-component/map-navigation",id:"auto-generated/previews/web-component/map-navigation",title:"map-navigation",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/map-navigation.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/map-navigation",permalink:"/docs/auto-generated/previews/web-component/map-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/map-navigation.md",tags:[],version:"current",frontMatter:{}},s={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<ix-map-navigation\n  application-name="Test Application"\n  navigation-title="Some other content"\n>\n  <div class="placeholder-logo" slot="logo"></div>\n  <ix-menu>\n    <ix-menu-item>Item 1</ix-menu-item>\n    <ix-menu-item>Item 2</ix-menu-item>\n    <ix-menu-item>Item 3</ix-menu-item>\n  </ix-menu>\n  <div slot="sidebar-content">Sidebar content</div>\n  <div>Content</div>\n</ix-map-navigation>\n')))}c.isMDXComponent=!0},54358:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>v,default:()=>N,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var a=n(7896),i=(n(2784),n(30876)),r=n(30024),o=n(32563),l=n(78755),s=(n(72232),n(49841),n(54131)),p=n(66790),m=n(85537),c=n(74691),d=n(52514),u=n(95539);const g={sidebar_position:6,title:"Map Navigation"},v=void 0,f={unversionedId:"controls/navigation/map-navigation",id:"controls/navigation/map-navigation",title:"Map Navigation",description:"Usage",source:"@site/docs/controls/navigation/map-navigation.md",sourceDirName:"controls/navigation",slug:"/controls/navigation/map-navigation",permalink:"/docs/controls/navigation/map-navigation",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/navigation/map-navigation.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Map Navigation"},sidebar:"mySidebar",previous:{title:"Settings",permalink:"/docs/controls/navigation/settings"},next:{title:"Popover news",permalink:"/docs/controls/navigation/popover-news"}},k={},y=[{value:"Usage",id:"usage",level:2},{value:"Custom overlay",id:"custom-overlay",level:2},{value:"Properties (ix-map-navigation)",id:"properties-ix-map-navigation",level:2},{value:"Props",id:"props",level:4},{value:"Events",id:"events",level:4}],h={toc:y};function N(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(r.Z,{name:"map-navigation",height:"35rem",noMargin:!0,hideInitalCodePreview:!0,frameworks:{react:p.default,angular:m.default,javascript:s.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"custom-overlay"},"Custom overlay"),(0,i.kt)(r.Z,{name:"map-navigation-overlay",height:"35rem",noMargin:!0,hideInitalCodePreview:!0,frameworks:{react:d.default,angular:u.default,javascript:c.default},mdxType:"Playground"}),(0,i.kt)("h2",{id:"properties-ix-map-navigation"},"Properties (ix-map-navigation)"),(0,i.kt)("h4",{id:"props"},"Props"),(0,i.kt)(o.default,{mdxType:"Props"}),(0,i.kt)("h4",{id:"events"},"Events"),(0,i.kt)(l.default,{mdxType:"Events"}))}N.isMDXComponent=!0}}]);