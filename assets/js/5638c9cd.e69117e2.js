"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[190],{2437:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>t});var s=r(4848),d=r(8453);const o={},i="BoundsUnificator",c={id:"tools/BoundsUnificator",title:"BoundsUnificator",description:"- SkinnedMeshRenderer \u306e Bounds \u3092\u7d71\u4e00\u3057\u3001RootBone \u3084 AnchorOverride \u3092\u63c3\u3048\u308b Unity \u62e1\u5f35\u30c4\u30fc\u30eb\u3067\u3059\u3002",source:"@site/docs/tools/BoundsUnificator.md",sourceDirName:"tools",slug:"/tools/BoundsUnificator",permalink:"/vpm-repos/docs/tools/BoundsUnificator",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:172352627e4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BakeKillerFinder\u6539\u4e8c",permalink:"/vpm-repos/docs/tools/BakeKillerFinder"},next:{title:"HierarchyHelper",permalink:"/vpm-repos/docs/tools/HierarchyHelper"}},l={},t=[{value:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f",id:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u624b\u52d5\u3067\u8a2d\u5b9a\u3059\u308b",id:"manual",level:3},{value:"\u81ea\u52d5\u3067\u8a2d\u5b9a\u3059\u308b (NDMF\u4f75\u7528)",id:"auto",level:3},{value:"\u7d30\u304b\u3044\u4ed5\u69d8",id:"\u7d30\u304b\u3044\u4ed5\u69d8",level:2},{value:"Calculate Bounds \u306e\u8a08\u7b97\u306b\u3064\u3044\u3066",id:"calculate-bounds-\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066",level:3},{value:"RootBone \u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",id:"rootbone-\u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",level:3},{value:"AnchorOverride \u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",id:"anchoroverride-\u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",level:3},{value:"\u30dc\u30fc\u30f3\u3092\u6301\u305f\u306a\u3044 SkinnedMeshRenderer \u306e\u6271\u3044\u306b\u3064\u3044\u3066",id:"\u30dc\u30fc\u30f3\u3092\u6301\u305f\u306a\u3044-skinnedmeshrenderer-\u306e\u6271\u3044\u306b\u3064\u3044\u3066",level:3}];function h(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",section:"section",sup:"sup",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"boundsunificator",children:"BoundsUnificator"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["SkinnedMeshRenderer \u306e Bounds \u3092\u7d71\u4e00\u3057\u3001",(0,s.jsx)(n.code,{children:"RootBone"})," \u3084 ",(0,s.jsx)(n.code,{children:"AnchorOverride"})," \u3092\u63c3\u3048\u308b Unity \u62e1\u5f35\u30c4\u30fc\u30eb\u3067\u3059\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b",children:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f"}),"\n",(0,s.jsxs)(n.p,{children:["\u8907\u6570\u30e1\u30c3\u30b7\u30e5\u306e\u8a2d\u5b9a ",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-1",id:"user-content-fnref-1","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})})," \u3092\u7d71\u4e00\u3057\u3001\u30e9\u30a4\u30c8\u304b\u3089\u306e\u5f71\u97ff\u304c\u3067\u304d\u308b\u3060\u3051\u5747\u4e00\u306b\u306a\u308b\u3088\u3046\u8a2d\u5b9a\u3057\u307e\u3059\u3002",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Bounds"})," \u8a2d\u5b9a\u306e\u30df\u30b9\u3067\u5909\u306b\u30ab\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3057\u307e\u3046\u30e1\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3001",(0,s.jsx)(n.code,{children:"Bounds"})," \u3092\u30ea\u30bb\u30c3\u30c8\u3057\u3066\u6b63\u3057\u304f\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,s.jsx)(n.h3,{id:"manual",children:"\u624b\u52d5\u3067\u8a2d\u5b9a\u3059\u308b"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Tools"})," \u2192 ",(0,s.jsx)(n.code,{children:"whiteflare"})," \u2192 ",(0,s.jsx)(n.code,{children:"Bounds Unificator"})," \u304b\u3089\u958b\u304f\u3068\u3001\u3053\u3093\u306a\u30a6\u30a3\u30f3\u30c9\u30a6\u304c\u51fa\u3066\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:r(4576).A+"",width:"595",height:"405"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Root Object"})," \u306b\u30a2\u30d0\u30bf\u30fc\u306e\u30eb\u30fc\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u306e\u914d\u4e0b\u304b\u3089 SkinnedMeshRenderer \u7b49\u3092\u691c\u7d22\u3057\u307e\u3059\u3002VRC_AvatarDescriptor \u304c\u4ed8\u3044\u3066\u3044\u306a\u304f\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8a2d\u5b9a\u3059\u308b\u3068 ",(0,s.jsx)(n.code,{children:"SkinnedMeshRenderer"}),", ",(0,s.jsx)(n.code,{children:"MeshRenderer"}),", ",(0,s.jsx)(n.code,{children:"RootBone (Hip)"}),", ",(0,s.jsx)(n.code,{children:"AnchorOverride"})," \u304c\u691c\u7d22\u3055\u308c\u3066\u3001\u81ea\u52d5\u3067\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u81ea\u52d5\u5272\u308a\u5f53\u3066\u306e\u5f8c\u306b\u3001\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u3066\u3082\u554f\u984c\u3042\u308a\u307e\u305b\u3093\u3002\u4e0d\u90fd\u5408\u304c\u3042\u308b\u5834\u5408\u306f\u3053\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u5dee\u3057\u66ff\u3048\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Calculate Bounds"})," \u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001SkinnedMeshRenderer \u304b\u3089 AABB \u3092\u81ea\u52d5\u3067\u8a08\u7b97\u3057\u3066 ",(0,s.jsx)(n.code,{children:"Bounds"})," \u306b\u8a2d\u5b9a\u3057\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8a08\u7b97\u3055\u308c\u305f\u5024\u3092\u5f8c\u304b\u3089\u5909\u66f4\u3057\u3066\u3082\u69cb\u3044\u307e\u305b\u3093\u3002\u30dc\u30bf\u30f3\u3092\u62bc\u3055\u305a\u306b\u3059\u3079\u3066\u624b\u52d5\u3067\u5165\u308c\u3066\u3082\u826f\u3044\u3067\u3059\u3002\u5fae\u8abf\u6574\u306f\u3053\u306e\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Apply Bounds To Renderer"})," \u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u30a6\u30a3\u30f3\u30c9\u30a6\u5185\u306e\u8a2d\u5b9a\u5185\u5bb9\u3092\u3082\u3068\u306b SkinnedMeshRenderer \u3068 MeshRenderer \u3092\u66f8\u304d\u63db\u3048\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u554f\u984c\u304c\u3042\u308b\u5834\u5408\u306f Undo (CTRL+Z) \u3057\u3066\u5143\u306b\u623b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Apply Bounds To Renderer"})," \u306e\u5f8c\u3001\u767d\u67a0 (SkinnedMeshRenderer \u306e Bounds) \u304c\u30a2\u30d0\u30bf\u30fc\u3092\u5305\u3093\u3067\u3044\u308b\u304b\u3069\u3046\u304b",(0,s.jsx)(n.sup,{children:(0,s.jsx)(n.a,{href:"#user-content-fn-2",id:"user-content-fnref-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"\u7d50\u679c\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:r(9611).A+"",width:"787",height:"763"})}),"\n",(0,s.jsx)(n.h3,{id:"auto",children:"\u81ea\u52d5\u3067\u8a2d\u5b9a\u3059\u308b (NDMF\u4f75\u7528)"}),"\n",(0,s.jsxs)(n.p,{children:["VRCSDK3 Avatar \u306e\u30eb\u30fc\u30c8\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b ",(0,s.jsx)(n.code,{children:"Add Component"})," \u304b\u3089 ",(0,s.jsx)(n.code,{children:"[BU] Set Anchor And Bounds"})," \u3092\u8ffd\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Image",src:r(4258).A+"",width:"445",height:"148"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://modular-avatar.nadena.dev/ja",children:"Non-Destructive Modular Framework"})," \u3092\u7528\u3044\u3066\u3001\u30a2\u30d0\u30bf\u30fc\u30d3\u30eb\u30c9\u6642\u306b\u81ea\u52d5\u7684\u306b AnchorOverride/RootBone/Bounds \u3092\u8abf\u6574\u3057\u307e\u3059\u3002\n\u8a08\u7b97\u65b9\u6cd5\u306f ",(0,s.jsx)(n.code,{children:"Skinned Vertex"})," \u304c\u7528\u3044\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u7d30\u304b\u3044\u4ed5\u69d8",children:"\u7d30\u304b\u3044\u4ed5\u69d8"}),"\n",(0,s.jsx)(n.h3,{id:"calculate-bounds-\u306e\u8a08\u7b97\u306b\u3064\u3044\u3066",children:"Calculate Bounds \u306e\u8a08\u7b97\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u8a08\u7b97\u65b9\u6cd5\u306f Calc Method \u304b\u3089\u9078\u3076\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Skinned Vertex"})," : \u30dc\u30fc\u30f3\u3092\u53cd\u6620\u3057\u305f\u5f8c\u306e\u30e1\u30c3\u30b7\u30e5\u9802\u70b9\u5ea7\u6a19\u3092\u3082\u3068\u306b AABB \u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Prefab Value"})," : \u30d7\u30ec\u30cf\u30d6(\u591a\u304f\u306fFBX\u81ea\u4f53)\u306e\u306a\u304b\u306e SkinnedMeshRenderer \u306b\u8a2d\u5b9a\u3055\u308c\u305f Bounds \u3092\u3082\u3068\u306b AABB \u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Current Value Only"})," : \u30d7\u30ec\u30cf\u30d6\u5916\u306b\u3066\u73fe\u5728\u8a2d\u5b9a\u3055\u308c\u305f Bounds \u3092\u3082\u3068\u306b\u8a08\u7b97\u3057\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Bone Transform"})," : \u30dc\u30fc\u30f3\u306e\u6839\u5143\u5ea7\u6a19\u3092\u3082\u3068\u306b AABB \u3092\u8a08\u7b97\u3057\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Bounds \u306e\u5024\u306f\u3001\u81ea\u52d5\u8a08\u7b97\u3067\u306f\u30ad\u30ea\u3088\u304f 0.01 \u5358\u4f4d\u306b\u306a\u308b\u306f\u305a\u3067\u3059\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"rootbone-\u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",children:"RootBone \u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RootBone (Hip)"})," \u306b\u306f\u3001\u4ee5\u4e0b\u306e\u9806\u3067\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u691c\u7d22\u3057\u3066\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u3082\u306e\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Humanoid \u30ea\u30b0\u306e Hips"}),"\n",(0,s.jsxs)(n.li,{children:["\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"Root Object"})," \u304c\u305d\u306e\u307e\u307e\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"anchoroverride-\u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066",children:"AnchorOverride \u306e\u81ea\u52d5\u691c\u7d22\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"RootBone (Hip)"})," \u306b\u306f\u3001\u4ee5\u4e0b\u306e\u9806\u3067\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u691c\u7d22\u3057\u3066\u6700\u521d\u306b\u898b\u3064\u304b\u3063\u305f\u3082\u306e\u304c\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002","\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AnchorTarget"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (\u30ec\u30bf\u30fc\u30b1\u30fc\u30b9\u4e0d\u554f\u3001\u7a7a\u767d\u6587\u5b57\u306f\u7121\u8996)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"AnchorOverride"})," \u3068\u3044\u3046\u540d\u524d\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8 (\u30ec\u30bf\u30fc\u30b1\u30fc\u30b9\u4e0d\u554f\u3001\u7a7a\u767d\u6587\u5b57\u306f\u7121\u8996)"]}),"\n",(0,s.jsx)(n.li,{children:"Humanoid \u30ea\u30b0\u306e Chest"}),"\n",(0,s.jsxs)(n.li,{children:["\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u3001",(0,s.jsx)(n.code,{children:"Root Object"})," \u304c\u305d\u306e\u307e\u307e\u8a2d\u5b9a\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u30dc\u30fc\u30f3\u3092\u6301\u305f\u306a\u3044-skinnedmeshrenderer-\u306e\u6271\u3044\u306b\u3064\u3044\u3066",children:"\u30dc\u30fc\u30f3\u3092\u6301\u305f\u306a\u3044 SkinnedMeshRenderer \u306e\u6271\u3044\u306b\u3064\u3044\u3066"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u30dc\u30fc\u30f3\u3067\u52d5\u304b\u306a\u3044 SkinnedMeshRenderer \u306f\u3001MeshRenderer \u3068\u540c\u3058\u304f AnchorOverride \u306e\u7d71\u4e00\u3060\u3051\u3059\u308b\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n"]}),"\n","\n",(0,s.jsxs)(n.section,{"data-footnotes":!0,className:"footnotes",children:[(0,s.jsx)(n.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{id:"user-content-fn-1",children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Bounds"})," \u3068 ",(0,s.jsx)(n.code,{children:"RootBone"})," \u3068 ",(0,s.jsx)(n.code,{children:"AnchorOverride"})," \u3092\u5909\u66f4\u3057\u307e\u3059 ",(0,s.jsx)(n.a,{href:"#user-content-fnref-1","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{id:"user-content-fn-2",children:["\n",(0,s.jsxs)(n.p,{children:["\u30e1\u30c3\u30b7\u30e5\u304c Bounds \u304b\u3089\u306f\u307f\u51fa\u3057\u3066\u3044\u3066\u3082\u554f\u984c\u306a\u3044\u306e\u3067\u3059\u304c\u3001\u3042\u307e\u308a\u306b\u639b\u3051\u96e2\u308c\u305f\u5834\u6240\u306b Bounds \u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30ab\u30ea\u30f3\u30b0\u304c\u50cd\u3044\u3066\u30e1\u30c3\u30b7\u30e5\u304c\u6d88\u3048\u3066\u3057\u307e\u3046\u306a\u3069\u306e\u554f\u984c\u304c\u51fa\u3066\u304d\u307e\u3059\u3002 ",(0,s.jsx)(n.a,{href:"#user-content-fnref-2","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"\u21a9"})]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4576:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/BoundsUnificator-01-445a87c79ee1a4812edab7c881cd4a7e.png"},9611:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/BoundsUnificator-02-e162dd3d6918f2158adca996715360ba.png"},4258:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/BoundsUnificator-03-c67e9bfa9b02b6c33e237cfcd2eff54d.png"},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(6540);const d={},o=s.createContext(d);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);