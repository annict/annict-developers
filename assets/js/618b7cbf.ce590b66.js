"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[5929],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),b=o,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={slug:"2019-02-09-syobocal-tid",title:"API\u3067\u300c\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",authors:["shimbaco"]},i=void 0,c={permalink:"/blog/2019-02-09-syobocal-tid",editUrl:"https://github.com/kiraka/annict-developers/edit/main/blog/blog/2019-02-09-syobocal-tid/index.mdx",source:"@site/blog/2019-02-09-syobocal-tid/index.mdx",title:"API\u3067\u300c\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",description:"\u306a\u305c\u4eca\u307e\u3067\u53d6\u5f97\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u3044\u3046\u611f\u3058\u3067\u3059\u304c\u3001\u4f5c\u54c1\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3068\u304d\u306b\u300c\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002REST API\u3067\u306f syobocal_tid \u3067\u3001GraphQL API\u3067\u306f syobocalTid \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u540d\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",date:"2019-02-09T00:00:00.000Z",formattedDate:"February 9, 2019",tags:[],readingTime:.66,hasTruncateMarker:!1,authors:[{name:"Shimba, Koji",title:"Creator of Annict",url:"https://github.com/shimbaco",imageURL:"https://github.com/shimbaco.png",key:"shimbaco"}],frontMatter:{slug:"2019-02-09-syobocal-tid",title:"API\u3067\u300c\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",authors:["shimbaco"]},prevItem:{title:"GraphQL API\u3067\u4f5c\u54c1\u306b\u7d10\u3065\u304f\u30b7\u30ea\u30fc\u30ba\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f",permalink:"/blog/2019-04-14-series-list"},nextItem:{title:"API\u306b\u4eba\u7269/\u56e3\u4f53/\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306a\u3069\u306e\u60c5\u5831\u304c\u53d6\u5f97\u3067\u304d\u308b\u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3057\u305f",permalink:"/blog/2019-01-13-api-update"}},l={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u306a\u305c\u4eca\u307e\u3067\u53d6\u5f97\u3067\u304d\u306a\u304b\u3063\u305f\u3068\u3044\u3046\u611f\u3058\u3067\u3059\u304c\u3001\u4f5c\u54c1\u60c5\u5831\u3092\u53d6\u5f97\u3059\u308b\u3068\u304d\u306b\u300c",(0,o.kt)("a",{parentName:"p",href:"http://cal.syoboi.jp"},"\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc"),"\u300d\u306e\u30bf\u30a4\u30c8\u30ebID (TID) \u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3057\u305f\u3002REST API\u3067\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"syobocal_tid")," \u3067\u3001GraphQL API\u3067\u306f ",(0,o.kt)("inlineCode",{parentName:"p"},"syobocalTid")," \u3068\u3044\u3046\u30d7\u30ed\u30d1\u30c6\u30a3\u540d\u3067\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002"),(0,o.kt)("p",null,"REST API\u306e\u8a73\u7d30\u306f",(0,o.kt)("a",{parentName:"p",href:"https://docs.annict.com/ja/api/v1/works.html"},"Annict Docs"),"\u3092\u3001GraphQL API\u306e\u8a73\u7d30\u306f",(0,o.kt)("a",{href:"/docs/graphql-api/beta/reference/",target:"_blank"},"\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9"),"\u304b\u3089\u3054\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,o.kt)("p",null,"\u3057\u3087\u307c\u3044\u30ab\u30ec\u30f3\u30c0\u30fc\u3068\u9023\u643a\u3057\u3084\u3059\u304f\u306a\u3063\u305f\u6c17\u304c\u3059\u308bAnnict\u3092\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3057\u307e\u3059\u3002"))}u.isMDXComponent=!0}}]);