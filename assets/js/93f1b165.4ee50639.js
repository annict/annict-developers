"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[3192],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var l=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,l,a=function(e,t){if(null==e)return{};var r,l,a={},n=Object.keys(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)r=n[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=l.createContext({}),i=function(e){var t=l.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return l.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},u=l.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||n;return r?l.createElement(b,o(o({ref:t},s),{},{components:r})):l.createElement(b,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var i=2;i<n;i++)o[i]=r[i];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9301:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var l=r(7462),a=r(7294),n=r(3905);const o={id:"multiple-record",title:"MultipleRecord",hide_table_of_contents:!1},c=void 0,d={unversionedId:"graphql-api/beta/reference/objects/multiple-record",id:"graphql-api/beta/reference/objects/multiple-record",title:"MultipleRecord",description:"No description",source:"@site/docs/graphql-api/beta/reference/objects/multiple-record.mdx",sourceDirName:"graphql-api/beta/reference/objects",slug:"/graphql-api/beta/reference/objects/multiple-record",permalink:"/docs/graphql-api/beta/reference/objects/multiple-record",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/objects/multiple-record.mdx",tags:[],version:"current",frontMatter:{id:"multiple-record",title:"MultipleRecord",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"LibraryEntry",permalink:"/docs/graphql-api/beta/reference/objects/library-entry"},next:{title:"OrganizationConnection",permalink:"/docs/graphql-api/beta/reference/objects/organization-connection"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>annictId</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordbannictidbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>records</b></code><Bullet /><code>RecordConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-multiplerecordbrecordsbcoderecordconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.records.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordrecordsbbeforebcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.records.<b>first</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordrecordsbfirstbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.records.<b>last</b></code><Bullet /><code>Int</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-multiplerecordrecordsblastbcodeint-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>user</b></code><Bullet /><code>User!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-multiplerecordbuserbcodeuser--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MultipleRecord.<b>work</b></code><Bullet /><code>Work!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-multiplerecordbworkbcodework--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Node</code> <Badge class="secondary" text="interface"/>',id:"node-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(a.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,n.kt)(a.Fragment,null,(0,n.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:u,Badge:m};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,l.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type MultipleRecord implements Node {\n  annictId: Int!\n  createdAt: DateTime!\n  id: ID!\n  records(\n  after: String\n  before: String\n  first: Int\n  last: Int\n): RecordConnection\n  user: User!\n  work: Work!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbannictidbcodeint--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"annictId"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbcreatedatbcodedatetime--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"createdAt"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/scalars/date-time"},(0,n.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbidbcodeid--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"id"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/scalars/id"},(0,n.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbrecordsbcoderecordconnection-"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"records"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/record-connection"},(0,n.kt)("inlineCode",{parentName:"a"},"RecordConnection"))," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-multiplerecordrecordsbafterbcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.records.",(0,n.kt)("b",null,"after"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/graphql-api/beta/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come after the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-multiplerecordrecordsbbeforebcodestring-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.records.",(0,n.kt)("b",null,"before"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/graphql-api/beta/reference/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the elements in the list that come before the specified cursor.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-multiplerecordrecordsbfirstbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.records.",(0,n.kt)("b",null,"first"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/graphql-api/beta/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the first ",(0,n.kt)("em",{parentName:"p"},"n")," elements from the list.")),(0,n.kt)("h5",{id:"code-style-fontweight-normal-multiplerecordrecordsblastbcodeint-"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.records.",(0,n.kt)("b",null,"last"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h5",href:"/docs/graphql-api/beta/reference/scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int"))," ",(0,n.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Returns the last ",(0,n.kt)("em",{parentName:"p"},"n")," elements from the list.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbuserbcodeuser--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"user"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/user"},(0,n.kt)("inlineCode",{parentName:"a"},"User!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-multiplerecordbworkbcodework--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"MultipleRecord.",(0,n.kt)("b",null,"work"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/work"},(0,n.kt)("inlineCode",{parentName:"a"},"Work!"))," ",(0,n.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h3",{id:"interfaces"},"Interfaces"),(0,n.kt)("h4",{id:"node-"},(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/interfaces/node"},(0,n.kt)("inlineCode",{parentName:"a"},"Node"))," ",(0,n.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"An object with an ID.")),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/graphql-api/beta/reference/unions/activity-item"},(0,n.kt)("inlineCode",{parentName:"a"},"ActivityItem")),"  ",(0,n.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);