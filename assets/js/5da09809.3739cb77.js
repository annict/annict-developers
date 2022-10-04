"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[5170],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=n.createContext({}),s=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(d.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(d,".").concat(f)]||u[f]||p[f]||i;return t?n.createElement(m,a(a({ref:r},c),{},{components:t})):n.createElement(m,a({ref:r},c))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6605:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var n=t(7462),o=t(7294),i=t(3905);const a={id:"series-work-order",title:"SeriesWorkOrder",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql-api/beta/reference/inputs/series-work-order",id:"graphql-api/beta/reference/inputs/series-work-order",title:"SeriesWorkOrder",description:"No description",source:"@site/docs/graphql-api/beta/reference/inputs/series-work-order.mdx",sourceDirName:"graphql-api/beta/reference/inputs",slug:"/graphql-api/beta/reference/inputs/series-work-order",permalink:"/docs/graphql-api/beta/reference/inputs/series-work-order",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/graphql-api/beta/reference/inputs/series-work-order.mdx",tags:[],version:"current",frontMatter:{id:"series-work-order",title:"SeriesWorkOrder",hide_table_of_contents:!1},sidebar:"tutorialSidebar",previous:{title:"ReviewOrder",permalink:"/docs/graphql-api/beta/reference/inputs/review-order"},next:{title:"StaffOrder",permalink:"/docs/graphql-api/beta/reference/inputs/staff-order"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SeriesWorkOrder.<b>direction</b></code><Bullet /><code>OrderDirection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-seriesworkorderbdirectionbcodeorderdirection--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SeriesWorkOrder.<b>field</b></code><Bullet /><code>SeriesWorkOrderField!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-seriesworkorderbfieldbcodeseriesworkorderfield--",level:4}],p=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{class:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:p,SpecifiedBy:u,Badge:f};function k(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input SeriesWorkOrder {\n  direction: OrderDirection!\n  field: SeriesWorkOrderField!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-seriesworkorderbdirectionbcodeorderdirection--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SeriesWorkOrder.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/enums/order-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderDirection!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-seriesworkorderbfieldbcodeseriesworkorderfield--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SeriesWorkOrder.",(0,i.kt)("b",null,"field"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql-api/beta/reference/enums/series-work-order-field"},(0,i.kt)("inlineCode",{parentName:"a"},"SeriesWorkOrderField!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}k.isMDXComponent=!0}}]);