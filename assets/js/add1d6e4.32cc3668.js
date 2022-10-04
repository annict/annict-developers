"use strict";(self.webpackChunkannict_developers=self.webpackChunkannict_developers||[]).push([[9912],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,m=d(t,["components","mdxType","originalType","parentName"]),g=p(a),k=r,u=g["".concat(o,".").concat(k)]||g[k]||s[k]||i;return a?n.createElement(u,l(l({ref:e},m),{},{components:a})):n.createElement(u,l({ref:e},m))}));function k(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=g;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d.mdxType="string"==typeof t?t:r,l[1]=d;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7331:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>d,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1500,slug:"/rest-api/v1/reviews"},l="\u4f5c\u54c1\u3078\u306e\u8a18\u9332",d={unversionedId:"rest-api-v1/reviews",id:"rest-api-v1/reviews",title:"\u4f5c\u54c1\u3078\u306e\u8a18\u9332",description:"GET /v1/reviews",source:"@site/docs/rest-api-v1/reviews.md",sourceDirName:"rest-api-v1",slug:"/rest-api/v1/reviews",permalink:"/docs/rest-api/v1/reviews",draft:!1,editUrl:"https://github.com/kiraka/annict-developers/edit/main/docs/rest-api-v1/reviews.md",tags:[],version:"current",sidebarPosition:1500,frontMatter:{sidebar_position:1500,slug:"/rest-api/v1/reviews"},sidebar:"tutorialSidebar",previous:{title:"\u30a8\u30d4\u30bd\u30fc\u30c9\u3078\u306e\u8a18\u9332",permalink:"/docs/rest-api/v1/records"},next:{title:"\u30a2\u30af\u30c6\u30a3\u30d3\u30c6\u30a3",permalink:"/docs/rest-api/v1/activities"}},o={},p=[{value:"GET /v1/reviews",id:"get-v1reviews",level:2},{value:"\u30d5\u30a3\u30fc\u30eb\u30c9",id:"\u30d5\u30a3\u30fc\u30eb\u30c9",level:3},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",level:3},{value:"POST /v1/me/reviews",id:"post-v1mereviews",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1",level:3},{value:"PATCH /v1/me/reviews/:id",id:"patch-v1mereviewsid",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-2",level:3},{value:"DELETE /v1/me/reviews/:id",id:"delete-v1mereviewsid",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf",id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3",level:3},{value:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b",id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-3",level:3}],m={toc:p};function s(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4f5c\u54c1\u3078\u306e\u8a18\u9332"},"\u4f5c\u54c1\u3078\u306e\u8a18\u9332"),(0,r.kt)("h2",{id:"get-v1reviews"},"GET /v1/reviews"),(0,r.kt)("p",null,"\u4f5c\u54c1\u3078\u306e\u8a18\u9332 (\u30ec\u30d3\u30e5\u30fc) \u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("h3",{id:"\u30d5\u30a3\u30fc\u30eb\u30c9"},"\u30d5\u30a3\u30fc\u30eb\u30c9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fcID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u975e\u63a8\u5968]")," \u30ec\u30d3\u30e5\u30fc\u30bf\u30a4\u30c8\u30eb")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u611f\u60f3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_animation_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u3068\u304d\u306b\u4ed8\u3051\u3089\u308c\u305f\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u4f5c\u753b)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u306e4\u7a2e\u985e\u306e\u3046\u30611\u3064\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_music_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u3068\u304d\u306b\u4ed8\u3051\u3089\u308c\u305f\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u97f3\u697d)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u306e4\u7a2e\u985e\u306e\u3046\u30611\u3064\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_story_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u3068\u304d\u306b\u4ed8\u3051\u3089\u308c\u305f\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30b9\u30c8\u30fc\u30ea\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u306e4\u7a2e\u985e\u306e\u3046\u30611\u3064\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_character_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u3068\u304d\u306b\u4ed8\u3051\u3089\u308c\u305f\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30ad\u30e3\u30e9\u30af\u30bf\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u306e4\u7a2e\u985e\u306e\u3046\u30611\u3064\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_overall_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3057\u305f\u3068\u304d\u306b\u4ed8\u3051\u3089\u308c\u305f\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u5168\u4f53)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u306e4\u7a2e\u985e\u306e\u3046\u30611\u3064\u304c\u5165\u3063\u3066\u3044\u307e\u3059\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"likes_count"),(0,r.kt)("td",{parentName:"tr",align:null},"Like\u3055\u308c\u305f\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"impressions_count"),(0,r.kt)("td",{parentName:"tr",align:null},"PV\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"created_at"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u304c\u6295\u7a3f\u3055\u308c\u305f\u65e5\u6642")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"modified_at"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u304c\u7de8\u96c6\u3055\u308c\u305f\u65e5\u6642")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u30ec\u30d3\u30e5\u30fc\u3092\u6295\u7a3f\u3057\u305f\u5229\u7528\u8005\u306e\u60c5\u5831")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"work"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3053\u306e\u30ec\u30d3\u30e5\u30fc\u304c\u7d10\u3065\u304f\u4f5c\u54c1\u60c5\u5831\u3002\u53d6\u5f97\u3067\u304d\u308b\u30d5\u30a3\u30fc\u30eb\u30c9\u306f ",(0,r.kt)("a",{parentName:"td",href:"/docs/rest-api/v1/works"},"\u4f5c\u54c1")," \u3068\u540c\u3058\u3067\u3059\u3002")))),(0,r.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fields"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30b9\u30dd\u30f3\u30b9\u30dc\u30c7\u30a3\u306b\u542b\u307e\u308c\u308b\u30c7\u30fc\u30bf\u306e\u30d5\u30a3\u30fc\u30eb\u30c9\u3092\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"fields=id,title")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter_ids"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3092\u30ec\u30d3\u30e5\u30fcID\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"filter_ids=1,2,3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter_work_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3092\u4f5c\u54c1ID\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"filter_work_id=1111")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filter_has_review_body"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3092\u611f\u60f3\u306e\u3042\u308b\u306a\u3057\u3067\u7d5e\u308a\u8fbc\u307f\u307e\u3059\u3002\u611f\u60f3\u4ed8\u304d\u306e\u30ec\u30d3\u30e5\u30fc\u306e\u307f\u306b\u7d5e\u308a\u8fbc\u3080\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u3092\u3001\u611f\u60f3\u306e\u7121\u3044\u8a18\u9332\u306e\u307f\u306b\u7d5e\u308a\u8fbc\u3080\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"filter_has_review_body=true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"page"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30da\u30fc\u30b8\u6570\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"page=2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"per_page"),(0,r.kt)("td",{parentName:"tr",align:null},"1\u30da\u30fc\u30b8\u306b\u4f55\u4ef6\u53d6\u5f97\u3059\u308b\u304b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"25")," \u4ef6\u3067\u3001",(0,r.kt)("inlineCode",{parentName:"td"},"50")," \u4ef6\u307e\u3067\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"per_page=30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort_id"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3092\u30ec\u30d3\u30e5\u30fcID\u3067\u4e26\u3073\u66ff\u3048\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"asc")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"desc")," \u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"sort_id=desc")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sort_likes_count"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30d3\u30e5\u30fc\u3092Like\u3055\u308c\u305f\u6570\u3067\u4e26\u3073\u66ff\u3048\u307e\u3059\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"asc")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"desc")," \u304c\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"sort_likes_count=desc")))),(0,r.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ curl -X GET https://api.annict.com/v1/reviews?filter_work_id=3994&access_token=(access_token)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reviews": [\n        {\n            "id": 594,\n            "title": "\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e",\n            "body": "\u307f\u3093\u306a\u304b\u308f\u3044\u3044",\n            "rating_animation_state": "good",\n            "rating_music_state": "good",\n            "rating_story_state": "good",\n            "rating_character_state": "great",\n            "rating_overall_state": "great",\n            "likes_count": 0,\n            "impressions_count": 1,\n            "modified_at": null,\n            "created_at": "2017-06-24T18:51:35.075Z",\n            "user": {\n                "id": 2,\n                "username": "shimbaco",\n                "name": "Koji Shimba",\n                "description": "\u30a2\u30cb\u30e1\u597d\u304d\u304c\u9ad8\u3058\u3066\u3053\u306e\u30b5\u30fc\u30d3\u30b9\u3092\u4f5c\u308a\u307e\u3057\u305f\u3002\u8056\u5730\u5de1\u793c\u3092\u5e74\u306b\u6570\u56de\u3057\u3066\u3044\u307e\u3059\u3002",\n                "url": "http://shimba.co",\n                "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",\n                "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",\n                "records_count": 1906,\n                "created_at": "2014-03-02T15:38:40.000Z"\n            },\n            "work": {\n                "id": 3994,\n                "title": "\u3054\u6ce8\u6587\u306f\u3046\u3055\u304e\u3067\u3059\u304b\uff1f",\n                "title_kana": "\u3054\u3061\u3085\u3046\u3082\u3093\u306f\u3046\u3055\u304e\u3067\u3059\u304b",\n                "media": "tv",\n                "media_text": "TV",\n                "released_on": "2014-04-10",\n                "released_on_about": "",\n                "official_site_url": "http://www.gochiusa.com/",\n                "wikipedia_url": "http://ja.wikipedia.org/wiki/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F#.E3.83.86.E3.83.AC.E3.83.93.E3.82.A2.E3.83.8B.E3.83.A1",\n                "twitter_username": "usagi_anime",\n                "twitter_hashtag": "gochiusa",\n                "images": {\n                    "recommended_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n                    "facebook": {\n                        "og_image_url": ""\n                    },\n                    "twitter": {\n                        "mini_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=mini",\n                        "normal_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=normal",\n                        "bigger_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n                        "original_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=original",\n                        "image_url": ""\n                    }\n                },\n                "episodes_count": 12,\n                "watchers_count": 1463,\n                "season_name": "2014-spring",\n                "season_name_text": "2014\u5e74\u6625"\n            }\n        },\n        ...\n    ],\n    "total_count": 6,\n    "next_page": null,\n    "prev_page": null\n}\n')),(0,r.kt)("h2",{id:"post-v1mereviews"},"POST /v1/me/reviews"),(0,r.kt)("p",null,"\u4f5c\u54c1\u3078\u306e\u30ec\u30d3\u30e5\u30fc\u304c\u6295\u7a3f\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"strong"},"write")," \u30b9\u30b3\u30fc\u30d7\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-1"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"work_id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u5fc5\u9808]")," \u4f5c\u54c1ID"),(0,r.kt)("td",{parentName:"tr",align:null},"3994")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u975e\u63a8\u5968]")," \u30bf\u30a4\u30c8\u30eb\u3002\u73fe\u5728\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u306f\u611f\u60f3\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u5fc5\u9808]")," \u611f\u60f3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u50d5\u306f\u3001\u30ea\u30bc\u3061\u3083\u3093\uff01\u25ef\uff08 \xb4\u2200\uff40 \uff09\u25ef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_animation_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u6620\u50cf)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_music_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u97f3\u697d)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_story_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30b9\u30c8\u30fc\u30ea\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_character_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30ad\u30e3\u30e9\u30af\u30bf\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_overall_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u5168\u4f53)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_twitter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u3092Twitter\u306b\u30b7\u30a7\u30a2\u3059\u308b\u304b\u3069\u3046\u304b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (\u30b7\u30a7\u30a2\u3057\u306a\u3044) \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_facebook"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u3092Facebook\u306b\u30b7\u30a7\u30a2\u3059\u308b\u304b\u3069\u3046\u304b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (\u30b7\u30a7\u30a2\u3057\u306a\u3044) \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-1"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X POST "https://api.annict.com/v1/me/reviews?work_id=3994&title=\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e&body=\u307f\u3093\u306a\u304b\u308f\u3044\u3044&rating_animation_state=good&rating_music_state=good&rating_story_state=good&rating_character_state=great&rating_overall_state=great&access_token=(access_token)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 595,\n    "title": "",\n    "body": "\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e\\n\\n\u307f\u3093\u306a\u304b\u308f\u3044\u3044",\n    "rating_animation_state": "good",\n    "rating_music_state": "good",\n    "rating_story_state": "good",\n    "rating_character_state": "great",\n    "rating_overall_state": "great",\n    "likes_count": 0,\n    "impressions_count": 0,\n    "modified_at": null,\n    "created_at": "2017-06-24T18:59:57.192Z",\n    "user": {\n        "id": 2,\n        "username": "shimbaco",\n        "name": "Koji Shimba",\n        "description": "",\n        "url": null,\n        "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",\n        "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",\n        "records_count": 123,\n        "created_at": "2016-05-03T19:06:59.929Z"\n    },\n    "work": {\n        "id": 3994,\n        "title": "\u3054\u6ce8\u6587\u306f\u3046\u3055\u304e\u3067\u3059\u304b\uff1f",\n        "title_kana": "\u3054\u3061\u3085\u3046\u3082\u3093\u306f\u3046\u3055\u304e\u3067\u3059\u304b",\n        "media": "tv",\n        "media_text": "TV",\n        "released_on": "2014-04-10",\n        "released_on_about": "",\n        "official_site_url": "http://www.gochiusa.com/",\n        "wikipedia_url": "http://ja.wikipedia.org/wiki/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F#.E3.83.86.E3.83.AC.E3.83.93.E3.82.A2.E3.83.8B.E3.83.A1",\n        "twitter_username": "usagi_anime",\n        "twitter_hashtag": "gochiusa",\n        "images": {\n            "recommended_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n            "facebook": {\n                "og_image_url": ""\n            },\n            "twitter": {\n                "mini_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=mini",\n                "normal_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=normal",\n                "bigger_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n                "original_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=original",\n                "image_url": ""\n            }\n        },\n        "episodes_count": 12,\n        "watchers_count": 1463,\n        "season_name": "2014-spring",\n        "season_name_text": "2014\u5e74\u6625"\n    }\n}\n')),(0,r.kt)("h2",{id:"patch-v1mereviewsid"},"PATCH /v1/me/reviews/:id"),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u30ec\u30d3\u30e5\u30fc\u3092\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"strong"},"write")," \u30b9\u30b3\u30fc\u30d7\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-2"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u5fc5\u9808]")," \u8a18\u9332ID"),(0,r.kt)("td",{parentName:"tr",align:null},"1016")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u975e\u63a8\u5968]")," \u30bf\u30a4\u30c8\u30eb\u3002\u73fe\u5728\u3053\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u5165\u529b\u3055\u308c\u305f\u6587\u5b57\u5217\u306f\u611f\u60f3\u306b\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"body"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u5fc5\u9808]")," \u611f\u60f3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u50d5\u306f\u3001\u30ea\u30bc\u3061\u3083\u3093\uff01\u25ef\uff08 \xb4\u2200\uff40 \uff09\u25ef")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_animation_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u6620\u50cf)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_music_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u97f3\u697d)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_story_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30b9\u30c8\u30fc\u30ea\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_character_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u30ad\u30e3\u30e9\u30af\u30bf\u30fc)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rating_overall_state"),(0,r.kt)("td",{parentName:"tr",align:null},"\u30ec\u30fc\u30c6\u30a3\u30f3\u30b0 (\u5168\u4f53)\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"bad")," ",(0,r.kt)("inlineCode",{parentName:"td"},"average")," ",(0,r.kt)("inlineCode",{parentName:"td"},"good")," ",(0,r.kt)("inlineCode",{parentName:"td"},"great")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"great")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_twitter"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u3092Twitter\u306b\u30b7\u30a7\u30a2\u3059\u308b\u304b\u3069\u3046\u304b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (\u30b7\u30a7\u30a2\u3057\u306a\u3044) \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"share_facebook"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8a18\u9332\u3092Facebook\u306b\u30b7\u30a7\u30a2\u3059\u308b\u304b\u3069\u3046\u304b\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u307e\u305f\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," \u304c\u5165\u529b\u3067\u304d\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u304b\u3063\u305f\u3068\u304d\u306f ",(0,r.kt)("inlineCode",{parentName:"td"},"false")," (\u30b7\u30a7\u30a2\u3057\u306a\u3044) \u306b\u306a\u308a\u307e\u3059\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"true")))),(0,r.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-2"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X PATCH "https://api.annict.com/v1/me/reviews/595?body=\u307f\u3093\u306a\u304b\u308f\u3044\u3044\uff01\uff01&rating_animation_state=good&rating_music_state=good&rating_story_state=good&rating_character_state=great&rating_overall_state=great&access_token=(access_token)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 595,\n    "title": "\u3042\u3041^\uff5e\u5fc3\u304c\u3074\u3087\u3093\u3074\u3087\u3093\u3059\u308b\u3093\u3058\u3083\u3041^\uff5e",\n    "body": "\u307f\u3093\u306a\u304b\u308f\u3044\u3044\uff01\uff01",\n    "rating_animation_state": "good",\n    "rating_music_state": "good",\n    "rating_story_state": "good",\n    "rating_character_state": "great",\n    "rating_overall_state": "great",\n    "likes_count": 0,\n    "impressions_count": 1,\n    "modified_at": "2017-06-24T19:07:46.257Z",\n    "created_at": "2017-06-24T18:59:57.192Z",\n    "user": {\n        "id": 2,\n        "username": "shimbaco",\n        "name": "Koji Shimba",\n        "description": "",\n        "url": null,\n        "avatar_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_avatars/master/d8af7adc8122c96ba7639218fd8b5ede332d42f2.jpg?1431357292",\n        "background_image_url": "https://api-assets.annict.com/paperclip/profiles/1/tombo_background_images/master/ee15d577fb2f2d61bdaf700cfab894b286a5762d.jpg?1486753229",\n        "records_count": 123,\n        "created_at": "2016-05-03T19:06:59.929Z"\n    },\n    "work": {\n        "id": 3994,\n        "title": "\u3054\u6ce8\u6587\u306f\u3046\u3055\u304e\u3067\u3059\u304b\uff1f",\n        "title_kana": "\u3054\u3061\u3085\u3046\u3082\u3093\u306f\u3046\u3055\u304e\u3067\u3059\u304b",\n        "media": "tv",\n        "media_text": "TV",\n        "released_on": "2014-04-10",\n        "released_on_about": "",\n        "official_site_url": "http://www.gochiusa.com/",\n        "wikipedia_url": "http://ja.wikipedia.org/wiki/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F#.E3.83.86.E3.83.AC.E3.83.93.E3.82.A2.E3.83.8B.E3.83.A1",\n        "twitter_username": "usagi_anime",\n        "twitter_hashtag": "gochiusa",\n        "images": {\n            "recommended_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n            "facebook": {\n                "og_image_url": ""\n            },\n            "twitter": {\n                "mini_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=mini",\n                "normal_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=normal",\n                "bigger_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=bigger",\n                "original_avatar_url": "https://twitter.com/usagi_anime/profile_image?size=original",\n                "image_url": ""\n            }\n        },\n        "episodes_count": 12,\n        "watchers_count": 1463,\n        "season_name": "2014-spring",\n        "season_name_text": "2014\u5e74\u6625"\n    }\n}\n')),(0,r.kt)("h2",{id:"delete-v1mereviewsid"},"DELETE /v1/me/reviews/:id"),(0,r.kt)("p",null,"\u4f5c\u6210\u3057\u305f\u30ec\u30d3\u30e5\u30fc\u3092\u524a\u9664\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u3053\u306e\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u306f ",(0,r.kt)("inlineCode",{parentName:"strong"},"write")," \u30b9\u30b3\u30fc\u30d7\u304c\u5fc5\u8981\u306b\u306a\u308a\u307e\u3059\u3002")),(0,r.kt)("h3",{id:"\u30d1\u30e9\u30e1\u30fc\u30bf-3"},"\u30d1\u30e9\u30e1\u30fc\u30bf"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u524d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6982\u8981"),(0,r.kt)("th",{parentName:"tr",align:null},"\u30c7\u30fc\u30bf\u4f8b"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"[\u5fc5\u9808]")," \u8a18\u9332ID"),(0,r.kt)("td",{parentName:"tr",align:null},"595")))),(0,r.kt)("h3",{id:"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b-3"},"\u30ea\u30af\u30a8\u30b9\u30c8\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ curl -X DELETE "https://api.annict.com/v1/me/reviews/595?access_token=(access_token)"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 204 No Content\n")))}s.isMDXComponent=!0}}]);