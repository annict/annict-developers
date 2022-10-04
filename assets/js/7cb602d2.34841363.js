"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[4890],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),d=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=d(t),h=o,b=f["".concat(i,".").concat(h)]||f[h]||p[h]||r;return t?a.createElement(b,c(c({ref:n},s),{},{components:t})):a.createElement(b,c({ref:n},s))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=f;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var d=2;d<r;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9371:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>h,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=t(7462),o=t(7294),r=t(3905);const c={id:"channel-connection",title:"ChannelConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"graphql-api/beta/reference/objects/channel-connection",id:"graphql-api/beta/reference/objects/channel-connection",title:"ChannelConnection",description:"The connection type for Channel.",source:"@site/docs/graphql-api/beta/reference/objects/channel-connection.mdx",sourceDirName:"graphql-api/beta/reference/objects",slug:"/graphql-api/beta/reference/objects/channel-connection",permalink:"/docs/graphql-api/beta/reference/objects/channel-connection",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/objects/channel-connection.mdx",tags:[],version:"current",frontMatter:{id:"channel-connection",title:"ChannelConnection",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"Cast",permalink:"/docs/graphql-api/beta/reference/objects/cast"},next:{title:"ChannelEdge",permalink:"/docs/graphql-api/beta/reference/objects/channel-edge"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ChannelConnection.<b>edges</b></code><Bullet /><code>[ChannelEdge]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-channelconnectionbedgesbcodechanneledge--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChannelConnection.<b>nodes</b></code><Bullet /><code>[Channel]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-channelconnectionbnodesbcodechannel--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ChannelConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-channelconnectionbpageinfobcodepageinfo--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),h=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{class:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:f,Badge:h};function g(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The connection type for Channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ChannelConnection {\n  edges: [ChannelEdge]\n  nodes: [Channel]\n  pageInfo: PageInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-channelconnectionbedgesbcodechanneledge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChannelConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/channel-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[ChannelEdge]"))," ",(0,r.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A list of edges.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-channelconnectionbnodesbcodechannel--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChannelConnection.",(0,r.kt)("b",null,"nodes"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/channel"},(0,r.kt)("inlineCode",{parentName:"a"},"[Channel]"))," ",(0,r.kt)(h,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"A list of nodes.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-channelconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ChannelConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(h,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information to aid in pagination.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/graphql-api/beta/reference/objects/channel-group"},(0,r.kt)("inlineCode",{parentName:"a"},"ChannelGroup")),"  ",(0,r.kt)(h,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);