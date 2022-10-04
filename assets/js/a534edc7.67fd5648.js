"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[2745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),s=l(r),f=n,m=s["".concat(p,".").concat(f)]||s[f]||u[f]||o;return r?a.createElement(m,c(c({ref:t},i),{},{components:r})):a.createElement(m,c({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=s;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:n,c[1]=d;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},742:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>p,toc:()=>i});var a=r(7462),n=r(7294),o=r(3905);const c={id:"update-record",title:"updateRecord",hide_table_of_contents:!1},d=void 0,p={unversionedId:"graphql-api/beta/reference/mutations/update-record",id:"graphql-api/beta/reference/mutations/update-record",title:"updateRecord",description:"No description",source:"@site/docs/graphql-api/beta/reference/mutations/update-record.mdx",sourceDirName:"graphql-api/beta/reference/mutations",slug:"/graphql-api/beta/reference/mutations/update-record",permalink:"/docs/graphql-api/beta/reference/mutations/update-record",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/mutations/update-record.mdx",tags:[],version:"current",frontMatter:{id:"update-record",title:"updateRecord",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"deleteReview",permalink:"/docs/graphql-api/beta/reference/mutations/delete-review"},next:{title:"updateReview",permalink:"/docs/graphql-api/beta/reference/mutations/update-review"}},l={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateRecord.<b>input</b></code><Bullet /><code>UpdateRecordInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updaterecordbinputbcodeupdaterecordinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateRecordPayload</code> <Badge class="secondary" text="object"/>',id:"updaterecordpayload-",level:4}],u=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:u,SpecifiedBy:s,Badge:f};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateRecord(\n  input: UpdateRecordInput!\n): UpdateRecordPayload\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updaterecordbinputbcodeupdaterecordinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"updateRecord.",(0,o.kt)("b",null,"input"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/inputs/update-record-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateRecordInput!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Parameters for UpdateRecord")),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"updaterecordpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/update-record-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateRecordPayload"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Autogenerated return type of UpdateRecord")))}y.isMDXComponent=!0}}]);