"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[6246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||s[u]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={slug:"2022-10-05-node-fields-have-been-deprecated",title:"GraphQL API\u306e\u4e00\u90e8\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u63a8\u5968\u306b\u3057\u307e\u3057\u305f",authors:["shimbaco"]},i=void 0,p={permalink:"/blog/2022-10-05-node-fields-have-been-deprecated",editUrl:"https://github.com/kiraka/annict-developers/edit/main/blog/blog/2022-10-05-node-fields-have-been-deprecated/index.mdx",source:"@site/blog/2022-10-05-node-fields-have-been-deprecated/index.mdx",title:"GraphQL API\u306e\u4e00\u90e8\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u63a8\u5968\u306b\u3057\u307e\u3057\u305f",description:"ActivityEdge.node \u3068",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[],readingTime:1.47,hasTruncateMarker:!1,authors:[{name:"Shimba, Koji",title:"Creator of Annict",url:"https://github.com/shimbaco",imageURL:"https://github.com/shimbaco.png",key:"shimbaco"}],frontMatter:{slug:"2022-10-05-node-fields-have-been-deprecated",title:"GraphQL API\u306e\u4e00\u90e8\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u975e\u63a8\u5968\u306b\u3057\u307e\u3057\u305f",authors:["shimbaco"]},nextItem:{title:"GraphQL API\u307e\u308f\u308a\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u66f4\u65b0\u3057\u307e\u3057\u305f",permalink:"/blog/2022-10-04-update-graphql-api-document"}},c={authorsImageUrls:[void 0]},l=[],d={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developers.annict.com/docs/graphql-api/beta/reference/objects/activity-edge"},"ActivityEdge.node")," \u3068\n",(0,a.kt)("a",{parentName:"p",href:"https://developers.annict.com/docs/graphql-api/beta/reference/objects/series-work-edge"},"SeriesWorkEdge.node"),"\n\u3068\u3044\u3046\u30d5\u30a3\u30fc\u30eb\u30c9 (\u4ee5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},".node")," \u3068\u8868\u8a18\u3057\u307e\u3059) \u304c\u3042\u308b\u3093\u3067\u3059\u304c\u3001\u5b9f\u88c5\u3092\u9593\u9055\u3063\u3066\u3044\u305f\u3088\u3046\u3067\u3001\u3059\u3067\u306b\u5b58\u5728\u3059\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4e0a\u66f8\u304d\u3059\u308b\u3088\u3046\u306a\u3053\u3068\u3092\u3057\u3066\u3057\u307e\u3063\u3066\u3044\u307e\u3057\u305f\u3002"),(0,a.kt)("p",null,"\u305d\u308c\u304c\u539f\u56e0\u3067GraphQL API\u306e\u5b9f\u88c5\u3067\u4f7f\u7528\u3057\u3066\u3044\u308b ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rmosolgo/graphql-ruby"},"graphql")," \u3068\u3044\u3046\u30e9\u30a4\u30d6\u30e9\u30ea\u306e\n\u30a2\u30c3\u30d7\u30c7\u30fc\u30c8\u304c\u96e3\u3057\u3044\u72b6\u614b\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u3092\u975e\u63a8\u5968\u3068\u3057\u3001\u4ee3\u308f\u308a\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},"ActivityEdge.item")," \u3068 ",(0,a.kt)("inlineCode",{parentName:"p"},"SeriesWorkEdge.item")," \u3068\u3044\u3046\u30d5\u30a3\u30fc\u30eb\u30c9 (\u4ee5\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},".item")," \u3068\u8868\u8a18\u3057\u307e\u3059) \u3092\u7528\u610f\u3057\u307e\u3057\u305f\u3002\n\u3053\u308c\u3089\u306f\u73fe\u72b6\u306e ",(0,a.kt)("inlineCode",{parentName:"p"},".node")," \u3068\u540c\u3058\u5024\u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u3066\u3044\u307e\u3059\u3002"),(0,a.kt)("p",null,"\u3082\u3057 ",(0,a.kt)("inlineCode",{parentName:"p"},".node")," \u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u5358\u7d14\u306b ",(0,a.kt)("inlineCode",{parentName:"p"},".item")," \u306b\u66f8\u304d\u63db\u3048\u308b\u3060\u3051\u3067\u554f\u984c\u306a\u3044\u306f\u305a\u3067\u3059\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},".node")," \u306f1\u30f6\u6708\u5f8c\u306e11\u67085\u65e5\u4ee5\u964d\u306b\u4e0a\u66f8\u304d\u3092\u3057\u3066\u3044\u306a\u3044\u3068\u304d\u306e\u5024\u3092\u8fd4\u3059\u3088\u3046\u306b\u3057\u307e\u3059\u3002"),"\n\u3082\u3057\u3053\u308c\u3089\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u4f7f\u3063\u3066\u3044\u308b\u5834\u5408\u306f\u3001\u304a\u624b\u6570\u3067\u3059\u304c\u305d\u308c\u307e\u3067\u306b\u66f8\u304d\u63db\u3048\u3092\u304a\u9858\u3044\u3057\u307e\u3059\u3002"),(0,a.kt)("p",null,"GraphQL API\u306e\u30b9\u30ad\u30fc\u30de\u3092\u6574\u7406\u3057\u305f\u3044Annict\u3092\u3088\u308d\u3057\u304f\u304a\u9858\u3044\u3057\u307e\u3059\u3002"))}s.isMDXComponent=!0}}]);