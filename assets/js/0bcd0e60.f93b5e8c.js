"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[4239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),f=l(n),b=o,g=f["".concat(s,".").concat(b)]||f[b]||p[b]||a;return n?r.createElement(g,c(c({ref:t},d),{},{components:n})):r.createElement(g,c({ref:t},d))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9987:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(7462),o=n(7294),a=n(3905);const c={id:"series-connection",title:"SeriesConnection",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql-api/beta/reference/objects/series-connection",id:"graphql-api/beta/reference/objects/series-connection",title:"SeriesConnection",description:"The connection type for Series.",source:"@site/docs/graphql-api/beta/reference/objects/series-connection.mdx",sourceDirName:"graphql-api/beta/reference/objects",slug:"/graphql-api/beta/reference/objects/series-connection",permalink:"/docs/graphql-api/beta/reference/objects/series-connection",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/objects/series-connection.mdx",tags:[],version:"current",frontMatter:{id:"series-connection",title:"SeriesConnection",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Review",permalink:"/docs/graphql-api/beta/reference/objects/review"},next:{title:"SeriesEdge",permalink:"/docs/graphql-api/beta/reference/objects/series-edge"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SeriesConnection.<b>edges</b></code><Bullet /><code>[SeriesEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-seriesconnectionbedgesbcodeseriesedge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SeriesConnection.<b>nodes</b></code><Bullet /><code>[Series]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-seriesconnectionbnodesbcodeseries--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SeriesConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-seriesconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{class:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:p,SpecifiedBy:f,Badge:b};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The connection type for Series."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SeriesConnection {\n  edges: [SeriesEdge]\n  nodes: [Series]\n  pageInfo: PageInfo!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-seriesconnectionbedgesbcodeseriesedge--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SeriesConnection.",(0,a.kt)("b",null,"edges"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/series-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[SeriesEdge]"))," ",(0,a.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A list of edges.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-seriesconnectionbnodesbcodeseries--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SeriesConnection.",(0,a.kt)("b",null,"nodes"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/series"},(0,a.kt)("inlineCode",{parentName:"a"},"[Series]"))," ",(0,a.kt)(b,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,a.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"A list of nodes.")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-seriesconnectionbpageinfobcodepageinfo--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SeriesConnection.",(0,a.kt)("b",null,"pageInfo"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,a.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/graphql-api/beta/reference/objects/work"},(0,a.kt)("inlineCode",{parentName:"a"},"Work")),"  ",(0,a.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);