"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[5710],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),d=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(i.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=d(t),m=a,u=g["".concat(i,".").concat(m)]||g[m]||s[m]||o;return t?n.createElement(u,l(l({ref:r},p),{},{components:t})):n.createElement(u,l({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=g;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=t[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9432:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>g,assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=t(7462),a=t(7294),o=t(3905);const l={id:"program-edge",title:"ProgramEdge",hide_table_of_contents:!1},c=void 0,i={unversionedId:"graphql-api/beta/reference/objects/program-edge",id:"graphql-api/beta/reference/objects/program-edge",title:"ProgramEdge",description:"An edge in a connection.",source:"@site/docs/graphql-api/beta/reference/objects/program-edge.mdx",sourceDirName:"graphql-api/beta/reference/objects",slug:"/graphql-api/beta/reference/objects/program-edge",permalink:"/docs/graphql-api/beta/reference/objects/program-edge",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/objects/program-edge.mdx",tags:[],version:"current",frontMatter:{id:"program-edge",title:"ProgramEdge",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"ProgramConnection",permalink:"/docs/graphql-api/beta/reference/objects/program-connection"},next:{title:"Program",permalink:"/docs/graphql-api/beta/reference/objects/program"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProgramEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-programedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProgramEdge.<b>node</b></code><Bullet /><code>Program</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-programedgebnodebcodeprogram-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:s,SpecifiedBy:g,Badge:m};function f(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"An edge in a connection."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProgramEdge {\n  cursor: String!\n  node: Program\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-programedgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProgramEdge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A cursor for use in pagination.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-programedgebnodebcodeprogram-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProgramEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/program"},(0,o.kt)("inlineCode",{parentName:"a"},"Program"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The item at the end of the edge.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/graphql-api/beta/reference/objects/program-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"ProgramConnection")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);