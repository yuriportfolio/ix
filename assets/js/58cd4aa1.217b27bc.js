"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[68379,55131,66341,11017,9437,12285,70017,24088,14358,6091,17905],{30876:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2784);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,w=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(w,l(l({ref:t},c),{},{components:n})):r.createElement(w,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77942:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(37949),a=n(90077),o=n(37614),l=n(2784),i=n(90943);function s(e){const t=(0,o.Z)(),[n]=(0,l.useState)(!1),s=(0,a.Z)("/"),[p,c]=(0,l.useState)(""),[d,u]=(0,l.useState)((0,i.V)(t)),{preferredVersion:m}=(0,r.J)();return(0,l.useEffect)((()=>{const t=null==m?void 0:m.name;c(void 0===t||"current"===t?s+`webcomponent-examples/dist/preview-examples/${e.name}.html`:s+`versioned_examples/version-${t}/webcomponent-examples/dist/preview-examples/${e.name}.html`)}),[s,null==m?void 0:m.name,e.name]),(0,l.useLayoutEffect)((()=>{const e=()=>{let e=(0,i.V)(t);document.body.classList.forEach((t=>{t.includes("theme-")&&(e=t)})),u(e)},n=new MutationObserver((()=>e()));return n.observe(document.body,{attributeFilter:["class"],attributes:!0}),e(),()=>{n.disconnect()}}),[]),l.createElement(l.Fragment,null,n?l.createElement("span",null,"No component preview found for ",e.name," in version"," ",null==m?void 0:m.name):l.createElement("iframe",{src:`${p}?theme=${e.theme?e.theme:d}${e.noMargin?"&no-margin=true":""}`,style:{width:"100%",height:`${e.height}`}}))}},30024:(e,t,n)=>{n.d(t,{Z:()=>j});var r,a=n(7267),o=n(90077),l=n(55061),i=n(2784);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}const p=e=>{let{title:t,titleId:n,...a}=e;return i.createElement("svg",s({style:{transform:"scale(2)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 12 12",fill:"none",role:"img","aria-labelledby":n},a),t?i.createElement("title",{id:n},t):null,r||(r=i.createElement("path",{d:"M6 0C2.687 0 0 2.756 0 6.153c0 2.718 1.72 5.022 4.104 5.836.037.008.07.011.101.011.223 0 .308-.163.308-.305 0-.148-.005-.533-.008-1.048-.225.051-.426.073-.605.073-1.154 0-1.417-.898-1.417-.898-.273-.71-.667-.9-.667-.9-.522-.367-.003-.377.038-.377h.002c.603.053.919.637.919.637.3.525.702.672 1.06.672.282 0 .536-.09.686-.16.054-.397.21-.667.38-.823-1.33-.155-2.731-.683-2.731-3.04 0-.672.233-1.221.616-1.65-.062-.155-.268-.782.059-1.628 0 0 .042-.014.134-.014.217 0 .707.083 1.516.646a5.62 5.62 0 0 1 1.502-.206c.51.002 1.024.07 1.503.206.809-.563 1.3-.646 1.516-.646a.5.5 0 0 1 .134.014c.327.846.12 1.473.059 1.628.383.431.616.98.616 1.65 0 2.363-1.404 2.882-2.74 3.035.214.19.407.565.407 1.139 0 .822-.008 1.486-.008 1.687 0 .145.083.308.305.308a.52.52 0 0 0 .107-.01C10.283 11.174 12 8.868 12 6.152 12 2.756 9.313 0 6 0Z",fill:"#73849A"})))};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}const u=e=>{let{title:t,titleId:n,...r}=e;return i.createElement("svg",d({style:{transform:"scale(1.5)"},"aria-hidden":"true",width:16,height:16,viewBox:"0 0 10 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},r),t?i.createElement("title",{id:n},t):null,c||(c=i.createElement("path",{d:"M5.538 5.917 7.53 1 1 8.018h3.426l-2 4.982L9 5.917H5.538Z",stroke:"#73849A",strokeLinejoin:"round"})))};var m=n(77942);let w;!function(e){e.ANGULAR="angular",e.REACT="react",e.JAVASCRIPT="javascript",e.PREVIEW="preview"}(w||(w={}));var f=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],k={clickToLoad:function(e){return v("ctl",e)},devToolsHeight:function(e){return x("devtoolsheight",e)},forceEmbedLayout:function(e){return v("embed",e)},hideDevTools:function(e){return v("hidedevtools",e)},hideExplorer:function(e){return v("hideExplorer",e)},hideNavigation:function(e){return v("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return x("terminalHeight",e)},theme:function(e){return N("theme",["light","dark"],e)},view:function(e){return N("view",["preview","editor"],e)}};function g(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&k.hasOwnProperty(t)?k[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function v(e,t){return!0===t?e+"=1":""}function x(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function N(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function h(e,t){return""+b(t)+e+g(t)}function b(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function y(e){return e&&!1===e.newWindow?"_self":"_blank"}function S(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function _(e){if(!f.includes(e.template)){var t=f.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(S("project[title]",e.title)),r.appendChild(S("project[description]",e.description)),r.appendChild(S("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(S("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(S("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(S("project[files]["+t+"]",e.files[t]))})),r}var T=function(e,t){!function(e,t){var n=_(e);n.action=h("/run",t),n.target=y(t),document.body.appendChild(n),n.submit(),document.body.removeChild(n)}(e,t)};const C="https://github.com/siemens/ix/tree/main/packages";function E(e){let{name:t,framework:n}=e;const r=function(e){let{name:t,framework:n}=e;return n===w.ANGULAR?`${C}/angular-test-app/src/preview-examples/${t}.ts`:n===w.JAVASCRIPT?`${C}/html-test-app/src/preview-examples/${t}.html`:n===w.REACT?`${C}/react-test-app/src/preview-examples/${t}.tsx`:void 0}({framework:n,name:t});window.open(r,"_blank")}async function A(e){const t=await Promise.all(e.map((e=>fetch(e))));return Promise.all(t.map((e=>e.text())))}async function I(e){let{name:t,framework:n,files:r,baseUrl:a}=e;const o=await async function(e,t,n){const r=[];return(await A(n.map((n=>`${e}auto-generated/previews/${t}/${n}.txt`)))).forEach(((e,t)=>{r.push({filename:n[t],sourceCode:e})})),r}(a,n,r);return n===w.REACT?async function(e,t){const[n,r,a,o,l]=await A([`${e}code-runtime/react/App.tsx`,`${e}code-runtime/react/index.html`,`${e}code-runtime/react/index.tsx`,`${e}code-runtime/react/package.json`,`${e}code-runtime/react/tsconfig.json`]),[i]=t,s={};t.forEach((e=>{let{filename:t,sourceCode:n}=e;s[`src/${t}`]=n})),T({template:"node",title:"iX React App",description:"iX react playground",files:{...s,"public/index.html":r,"src/index.tsx":a,"src/App.tsx":n.replace(/\/\/@_IMPORT_COMPONENT/gms,`import Example from './${i.filename.substring(0,i.filename.lastIndexOf("."))}'\n`).replace(/\{\/\* @_RENDER_COMPONENT \*\/\}/gms,"\n<Example />\n"),"package.json":o,"tsconfig.json":l,".stackblitzrc":'{\n        "startCommand": "yarn run start"\n      }'}},{openFile:`src/${i.filename}`})}(a,o):n===w.ANGULAR?async function(e,t,n){const[r,a,o,l,i,s,p,c,d,u,m]=await A([`${e}code-runtime/angular/src/app/app.component.css`,`${e}code-runtime/angular/src/app/app.component.html`,`${e}code-runtime/angular/src/app/app.component.ts`,`${e}code-runtime/angular/src/app/app.module.ts`,`${e}code-runtime/angular/src/index.html`,`${e}code-runtime/angular/src/main.ts`,`${e}code-runtime/angular/src/styles.css`,`${e}code-runtime/angular/angular.json`,`${e}code-runtime/angular/package.json`,`${e}code-runtime/angular/tsconfig.app.json`,`${e}code-runtime/angular/tsconfig.json`]),w=[];n.forEach((e=>{let{filename:t,sourceCode:n}=e;/@Component/gms.test(n)&&w.push(t)}));const f=`\n    ${w.map(((e,t)=>`import COMPONENT_${t} from './${e.substring(0,e.lastIndexOf("."))}'`))}\n\n    export const DECLARE = [\n      //@__DELCARE__COMPONENTS\n      ${w.map(((e,t)=>`COMPONENT_${t},`))}\n    ];\n  `,k={};n.forEach((e=>{let{filename:t,sourceCode:n}=e;k[`src/app/${t}`]=n})),T({template:"node",title:"iX angular app",description:"iX angular playground",files:{"src/app/declare-component.ts":f,"src/app/app.component.css":r,"src/app/app.component.html":a,"src/app/app.component.ts":o,"src/app/app.module.ts":l,"src/index.html":i,"src/main.ts":s,"src/styles.css":p,"angular.json":c,"package.json":d,"tsconfig.app.json":u,"tsconfig.json":m,...k}},{openFile:`src/app/${t}.ts`})}(a,t,o):n===w.JAVASCRIPT?async function(e,t){const[n,r,a,o]=await A([`${e}code-runtime/html/src/index.html`,`${e}code-runtime/html/src/main.js`,`${e}code-runtime/html/package.json`,`${e}code-runtime/html/vite.config.ts`]),[l,...i]=t,s={};i.forEach((e=>{s[`src/${e.filename}`]=e.sourceCode})),T({template:"node",title:"iX html app",description:"iX html playground",files:{...s,"src/index.html":n.replace("\x3c!-- IX_INJECT_SOURCE_CODE --\x3e",l.sourceCode),"src/main.js":r,"package.json":a,"vite.config.ts":o}},{openFile:["src/index.html"]})}(a,o):void 0}function D(e){let{name:t,framework:n}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>E({name:t,framework:n})},i.createElement(p,null))}function P(e){let{name:t,files:n,framework:r,baseUrl:a}=e;return i.createElement("button",{className:"btn-icon-s btn btn-invisible-primary btn-icon btn-oval",onClick:()=>I({name:t,files:n,framework:r,baseUrl:a})},i.createElement(u,null))}function M(e){const[t,n]=(0,i.useState)(e.files[0].filename);return i.createElement(i.Fragment,null,i.createElement(l.Vp,null,e.files.map((e=>{e.node;return i.createElement(l.t3,{key:e.filename,onClick:()=>{return t=e.filename,n(t);var t}},e.filename)}))),function(){var n;const r=null==(n=e.files.find((e=>e.filename===t)))?void 0:n.node;return r?i.createElement(r,null):null}())}function j(e){let{name:t,height:n,noMargin:r,theme:s,frameworks:p,availableFrameworks:c}=e;const{pathname:d}=(0,a.TH)(),u=(0,o.Z)("/"),[f,k]=(0,i.useState)(!0),[g,v]=(0,i.useState)(function(e){return e&&(0!==e.length?e[0]:void 0)||w.PREVIEW}(c)),[x,N]=(0,i.useState)();(0,i.useMemo)((()=>function(e){return`docusaurus.playground${e.replace(/\//g,".")}`}(d+t)),[t,d]);(0,i.useEffect)((()=>{const e={};Object.keys(p).forEach((n=>{if("function"==typeof p[n]){let r=t;n===w.REACT&&(r=r.concat(".tsx")),n===w.JAVASCRIPT&&(r=r.concat(".html")),n===w.ANGULAR&&(r=r.concat(".ts")),e[n]=[{filename:r,node:p[n]({})}]}"object"==typeof p[n]&&(e[n]||(e[n]=[]),Object.keys(p[n]).forEach((t=>{e[n].push({filename:t,node:p[n][t]})})))})),N(e)}),[p,N]);const h=e=>{v(e)};function b(e){return e===w.PREVIEW||(!c||(0===c.length||c.includes(e)))}return i.createElement("div",{className:"Playground"},f?i.createElement(i.Fragment,null,i.createElement("div",{className:"Playground__Toolbar Location__Bottom"},i.createElement(l._h,{className:"Playground__Framework__Button",ghost:g!==w.PREVIEW,onClick:()=>h(w.PREVIEW)},"Preview"),b(w.ANGULAR)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:g!==w.ANGULAR,onClick:()=>h(w.ANGULAR)},"Angular"):null,b(w.REACT)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:g!==w.REACT,onClick:()=>h(w.REACT)},"React"):null,b(w.JAVASCRIPT)?i.createElement(l._h,{className:"Playground__Framework__Button",ghost:g!==w.JAVASCRIPT,onClick:()=>h(w.JAVASCRIPT)},"JavaScript"):null,i.createElement("div",{className:"Playground__Toolbar__Actions"},g!==w.PREVIEW?i.createElement(i.Fragment,null,i.createElement(D,{name:t,framework:g}),i.createElement(P,{name:t,framework:g,baseUrl:u,files:x?g===w.PREVIEW?[]:x[g].map((e=>e.filename)):[]})):null)),function(){if(g===w.PREVIEW)return i.createElement(m.Z,{name:t,height:n,noMargin:r,theme:s});if(!x||!x[g])return null;if(1===x[g].length){const[{node:e}]=x[g];return e}return i.createElement(M,{files:x[g]})}()):null)}},83588:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-step/events",id:"auto-generated/ix-workflow-step/events",title:"events",description:"No events available for this component.",source:"@site/docs/auto-generated/ix-workflow-step/events.md",sourceDirName:"auto-generated/ix-workflow-step",slug:"/auto-generated/ix-workflow-step/events",permalink:"/docs/auto-generated/ix-workflow-step/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-step/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No events available for this component."))}d.isMDXComponent=!0},67583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-step/props",id:"auto-generated/ix-workflow-step/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-workflow-step/props.md",sourceDirName:"auto-generated/ix-workflow-step",slug:"/auto-generated/ix-workflow-step/props",permalink:"/docs/auto-generated/ix-workflow-step/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-step/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clickable"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Activate navigation click"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clickable")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disabled"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Set disabled"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"disabled")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"position"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Activate navigation click"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"position")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"first" \uff5c "last" \uff5c "undefined"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'undefined'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selected"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Set selected"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"selected")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"status"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Set status"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"status")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"done" \uff5c "error" \uff5c "open" \uff5c "success" \uff5c "warning"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"'open'"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vertical"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Select orientation"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vertical")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))))}d.isMDXComponent=!0},47902:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-steps/events",id:"auto-generated/ix-workflow-steps/events",title:"events",description:"| Name       | Description                   | Type        |",source:"@site/docs/auto-generated/ix-workflow-steps/events.md",sourceDirName:"auto-generated/ix-workflow-steps",slug:"/auto-generated/ix-workflow-steps/events",permalink:"/docs/auto-generated/ix-workflow-steps/events",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-steps/events.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"stepSelected"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"On step selected event"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number"))))))}d.isMDXComponent=!0},36795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/ix-workflow-steps/props",id:"auto-generated/ix-workflow-steps/props",title:"props",description:"| Name       | Description                   | Attribute        | Type                                      | Default             |",source:"@site/docs/auto-generated/ix-workflow-steps/props.md",sourceDirName:"auto-generated/ix-workflow-steps",slug:"/auto-generated/ix-workflow-steps/props",permalink:"/docs/auto-generated/ix-workflow-steps/props",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/ix-workflow-steps/props.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"clickable"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Activate navigation click"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"clickable")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"linear"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Select linear mode"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"linear")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selectedIndex"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Activate navigation click"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"selected-index")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"0"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"vertical"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{className:"Api__Table"},(0,a.kt)("div",null,"Select orientation"),(0,a.kt)("div",{className:"Api__Table Docs__Tags"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"vertical")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"boolean")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"false"))))))}d.isMDXComponent=!0},67514:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/angular/workflow-vertical.ts",id:"auto-generated/previews/angular/workflow-vertical.ts",title:"workflow-vertical.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/workflow-vertical.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/workflow-vertical.ts",permalink:"/docs/auto-generated/previews/angular/workflow-vertical.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/workflow-vertical.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-workflow-steps vertical>\n    <ix-workflow-step status="done">Step 1</ix-workflow-step>\n    <ix-workflow-step status="success">Step 2</ix-workflow-step>\n    <ix-workflow-step status="open">Step 3</ix-workflow-step>\n    <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n    <ix-workflow-step status="error">Step 5</ix-workflow-step>\n    <ix-workflow-step disabled>Step 6</ix-workflow-step>\n  </ix-workflow-steps>`,\n})\nexport default class WorkflowVertical {}\n')))}d.isMDXComponent=!0},12372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/angular/workflow.ts",id:"auto-generated/previews/angular/workflow.ts",title:"workflow.ts",description:"\x3c!--",source:"@site/docs/auto-generated/previews/angular/workflow.ts.md",sourceDirName:"auto-generated/previews/angular",slug:"/auto-generated/previews/angular/workflow.ts",permalink:"/docs/auto-generated/previews/angular/workflow.ts",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/angular/workflow.ts.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Component } from \'@angular/core\';\n\n@Component({\n  selector: \'app-example\',\n  template: `<ix-workflow-steps>\n    <ix-workflow-step status="done">Step 1</ix-workflow-step>\n    <ix-workflow-step status="success">Step 2</ix-workflow-step>\n    <ix-workflow-step status="open">Step 3</ix-workflow-step>\n    <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n    <ix-workflow-step status="error">Step 5</ix-workflow-step>\n    <ix-workflow-step disabled>Step 6</ix-workflow-step>\n  </ix-workflow-steps>`,\n})\nexport default class Workflow {}\n')))}d.isMDXComponent=!0},258:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/react/workflow-vertical",id:"auto-generated/previews/react/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/workflow-vertical.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/workflow-vertical",permalink:"/docs/auto-generated/previews/react/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxWorkflowStep, IxWorkflowSteps } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport default () => {\n  return (\n    <IxWorkflowSteps vertical>\n      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>\n      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>\n      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>\n      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>\n      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>\n      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>\n    </IxWorkflowSteps>\n  );\n};\n')))}d.isMDXComponent=!0},13281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/react/workflow",id:"auto-generated/previews/react/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/react/workflow.md",sourceDirName:"auto-generated/previews/react",slug:"/auto-generated/previews/react/workflow",permalink:"/docs/auto-generated/previews/react/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/react/workflow.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'/*\n * SPDX-FileCopyrightText: 2022 Siemens AG\n *\n * SPDX-License-Identifier: MIT\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nimport { IxWorkflowStep, IxWorkflowSteps } from \'@siemens/ix-react\';\nimport React from \'react\';\nexport default () => {\n  return (\n    <IxWorkflowSteps>\n      <IxWorkflowStep status="done">Step 1</IxWorkflowStep>\n      <IxWorkflowStep status="success">Step 2</IxWorkflowStep>\n      <IxWorkflowStep status="open">Step 3</IxWorkflowStep>\n      <IxWorkflowStep status="warning">Step 4</IxWorkflowStep>\n      <IxWorkflowStep status="error">Step 5</IxWorkflowStep>\n      <IxWorkflowStep disabled>Step 6</IxWorkflowStep>\n    </IxWorkflowSteps>\n  );\n};\n')))}d.isMDXComponent=!0},17669:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/web-component/workflow-vertical",id:"auto-generated/previews/web-component/workflow-vertical",title:"workflow-vertical",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/workflow-vertical.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/workflow-vertical",permalink:"/docs/auto-generated/previews/web-component/workflow-vertical",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/workflow-vertical.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-workflow-steps vertical>\n  <ix-workflow-step status="done">Step 1</ix-workflow-step>\n  <ix-workflow-step status="success">Step 2</ix-workflow-step>\n  <ix-workflow-step status="open">Step 3</ix-workflow-step>\n  <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n  <ix-workflow-step status="error">Step 5</ix-workflow-step>\n  <ix-workflow-step disabled>Step 6</ix-workflow-step>\n</ix-workflow-steps>\n')))}d.isMDXComponent=!0},67628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(7896),a=(n(2784),n(30876));const o={},l=void 0,i={unversionedId:"auto-generated/previews/web-component/workflow",id:"auto-generated/previews/web-component/workflow",title:"workflow",description:"\x3c!--",source:"@site/docs/auto-generated/previews/web-component/workflow.md",sourceDirName:"auto-generated/previews/web-component",slug:"/auto-generated/previews/web-component/workflow",permalink:"/docs/auto-generated/previews/web-component/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/auto-generated/previews/web-component/workflow.md",tags:[],version:"current",frontMatter:{}},s={},p=[],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<ix-workflow-steps>\n  <ix-workflow-step status="done">Step 1</ix-workflow-step>\n  <ix-workflow-step status="success">Step 2</ix-workflow-step>\n  <ix-workflow-step status="open">Step 3</ix-workflow-step>\n  <ix-workflow-step status="warning">Step 4</ix-workflow-step>\n  <ix-workflow-step status="error">Step 5</ix-workflow-step>\n  <ix-workflow-step disabled>Step 6</ix-workflow-step>\n</ix-workflow-steps>\n')))}d.isMDXComponent=!0},59486:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>b,frontMatter:()=>k,metadata:()=>v,toc:()=>N});var r=n(7896),a=(n(2784),n(30876)),o=n(30024),l=n(67583),i=n(83588),s=n(36795),p=n(47902),c=n(67628),d=n(13281),u=n(12372),m=n(17669),w=n(258),f=n(67514);const k={},g="Workflow",v={unversionedId:"controls/workflow",id:"controls/workflow",title:"Workflow",description:"Usage",source:"@site/docs/controls/workflow.md",sourceDirName:"controls",slug:"/controls/workflow",permalink:"/docs/controls/workflow",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/controls/workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Form validation",permalink:"/docs/controls/validation"}},x={},N=[{value:"Usage",id:"usage",level:2},{value:"Vertical",id:"vertical",level:3},{value:"Properties ix-workflow-steps",id:"properties-ix-workflow-steps",level:2},{value:"Props",id:"props",level:3},{value:"Events",id:"events",level:3},{value:"Properties ix-workflow-step",id:"properties-ix-workflow-step",level:2},{value:"Props",id:"props-1",level:3},{value:"Events",id:"events-1",level:3}],h={toc:N};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"workflow"},"Workflow"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)(o.Z,{name:"workflow",frameworks:{react:d.default,angular:u.default,javascript:c.default},mdxType:"Playground"}),(0,a.kt)("h3",{id:"vertical"},"Vertical"),(0,a.kt)(o.Z,{name:"workflow-vertical",height:"27rem",hideInitalCodePreview:!0,frameworks:{react:w.default,angular:f.default,javascript:m.default},mdxType:"Playground"}),(0,a.kt)("h2",{id:"properties-ix-workflow-steps"},"Properties ix-workflow-steps"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(s.default,{mdxType:"WorkflowStepsProps"}),(0,a.kt)("h3",{id:"events"},"Events"),(0,a.kt)(p.default,{mdxType:"WorkflowStepsEvents"}),(0,a.kt)("h2",{id:"properties-ix-workflow-step"},"Properties ix-workflow-step"),(0,a.kt)("h3",{id:"props-1"},"Props"),(0,a.kt)(l.default,{mdxType:"WorkflowStepProps"}),(0,a.kt)("h3",{id:"events-1"},"Events"),(0,a.kt)(i.default,{mdxType:"WorkflowStepEvents"}))}b.isMDXComponent=!0}}]);