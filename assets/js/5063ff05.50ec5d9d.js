"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[1445],{30876:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(2784);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7896),i=(n(2784),n(30876));const a={sidebar_position:2,sidebar_title:"React",title:"React"},o=void 0,s={unversionedId:"installation/react",id:"installation/react",title:"React",description:"Current beta release of ix has some limitations, please check this.",source:"@site/docs/installation/react.md",sourceDirName:"installation",slug:"/installation/react",permalink:"/docs/installation/react",draft:!1,editUrl:"https://www.github.com/siemens/ix/edit/main/packages/documentation/docs/installation/react.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_title:"React",title:"React"},sidebar:"mySidebar",previous:{title:"Angular",permalink:"/docs/installation/angular"},next:{title:"Javascript",permalink:"/docs/installation/javascript"}},l={},c=[{value:"Installation of dependencies",id:"installation-of-dependencies",level:3},{value:"Import styles",id:"import-styles",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Current ",(0,i.kt)("strong",{parentName:"p"},"beta release")," of ",(0,i.kt)("em",{parentName:"p"},"ix")," has some limitations, please check ",(0,i.kt)("a",{parentName:"p",href:"./limitation"},"this"),".")),(0,i.kt)("h3",{id:"installation-of-dependencies"},"Installation of dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/ix-react")," (or a beta release ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/ix-react@next"),") and ",(0,i.kt)("inlineCode",{parentName:"li"},"@siemens/ix-icons"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"npm i -S @siemens/ix-react@latest\nnpm i -S @siemens/ix-icons@latest\n")),(0,i.kt)("h3",{id:"import-styles"},"Import styles"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-css"},"@import '../node_modules/@siemens/ix-icons/dist/css/ix-icons.css';\n@import '../node_modules/@siemens/ix/dist/siemens-ix/siemens-ix.css';\n")))}m.isMDXComponent=!0}}]);