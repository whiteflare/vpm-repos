"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[249],{1626:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var t=i(4848),r=i(8453);const l={},s="AvatarCopyUtility",c={id:"tools/AvatarCopyUtility",title:"AvatarCopyUtility",description:"VRChat \u306e\u5404\u30a2\u30d0\u30bf\u30fc\u9593\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002",source:"@site/docs/tools/AvatarCopyUtility.md",sourceDirName:"tools",slug:"/tools/AvatarCopyUtility",permalink:"/vpm-repos/docs/tools/AvatarCopyUtility",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713423964e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AnimEditUtility",permalink:"/vpm-repos/docs/tools/AnimEditUtility"},next:{title:"AvatarTextureTool",permalink:"/vpm-repos/docs/tools/AvatarTextureTool"}},o={},a=[{value:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f",id:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b",level:2},{value:"\u4f7f\u3044\u65b9",id:"\u4f7f\u3044\u65b9",level:2},{value:"\u30ef\u30f3\u30dd\u30a4\u30f3\u30c8\u30a2\u30c9\u30d0\u30a4\u30b9",id:"\u30ef\u30f3\u30dd\u30a4\u30f3\u30c8\u30a2\u30c9\u30d0\u30a4\u30b9",level:3},{value:"\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u8a73\u7d30\u306a\u6319\u52d5",id:"\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u8a73\u7d30\u306a\u6319\u52d5",level:3}];function d(e){const n={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"avatarcopyutility",children:"AvatarCopyUtility"}),"\n",(0,t.jsxs)(n.p,{children:["VRChat \u306e\u5404\u30a2\u30d0\u30bf\u30fc\u9593\u3067\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30b3\u30d4\u30fc\u3059\u308b\u30c4\u30fc\u30eb\u3067\u3059\u3002",(0,t.jsx)(n.br,{}),"\n","\u524d\u63d0\u3068\u3057\u3066 VRCSDK3_Avatar \u304c\u5fc5\u8981\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b",children:"\u4f55\u304c\u3067\u304d\u307e\u3059\u304b\uff1f"}),"\n",(0,t.jsx)(n.p,{children:"VRCPhysBone \u3084 Constraint \u306e\u4e00\u62ec\u30b3\u30d4\u30fc\u304a\u3088\u3073\u53c2\u7167\u306e\u8cbc\u308a\u76f4\u3057\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30d4\u30fc\u53ef\u80fd\u306a\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306f\u4ee5\u4e0b\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Renderer\u7cfb","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SkinnedMeshRenderer"}),"\n",(0,t.jsx)(n.li,{children:"MeshRenderer + MeshFilter"}),"\n",(0,t.jsx)(n.li,{children:"ParticleSystem + ParticleSystemRenderer"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["VRCSDK\u7cfb","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"VRC_AvatarDescriptor"}),"\n",(0,t.jsx)(n.li,{children:"VRCPhysBone"}),"\n",(0,t.jsx)(n.li,{children:"VRCPhysBoneCollider"}),"\n",(0,t.jsx)(n.li,{children:"VRCContactSender"}),"\n",(0,t.jsx)(n.li,{children:"VRCContactReceiver"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Constraint\u7cfb","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"PositionConstraint"}),"\n",(0,t.jsx)(n.li,{children:"RotationConstraint"}),"\n",(0,t.jsx)(n.li,{children:"ScaleConstraint"}),"\n",(0,t.jsx)(n.li,{children:"ParentConstraint"}),"\n",(0,t.jsx)(n.li,{children:"LookAtConstraint"}),"\n",(0,t.jsx)(n.li,{children:"AimConstraint"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u306a\u304a Cloth, DynamicBone \u306e\u30b3\u30d4\u30fc\u306b\u306f\u975e\u5bfe\u5fdc\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u4f7f\u3044\u65b9",children:"\u4f7f\u3044\u65b9"}),"\n",(0,t.jsx)(n.p,{children:"Unity \u306e Menu \u2192 Tools \u2192 whiteflare \u2192 AvatarCopyUtility \u304b\u3089\u30a6\u30a3\u30f3\u30c9\u30a6\u3092\u958b\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Image",src:i(1800).A+"",width:"481",height:"569"})}),"\n",(0,t.jsx)(n.p,{children:"\u30b3\u30d4\u30fc\u5143 Avatar \u304a\u3088\u3073\u30b3\u30d4\u30fc\u5148 Avatar \u3092\u8a2d\u5b9a\u3057\u3001\u30b3\u30d4\u30fc\u5bfe\u8c61\u3092\u9078\u629e\u3001\u300e\u30b3\u30d4\u30fc\u300f\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u3068\u3001\u30b3\u30d4\u30fc\u5143\u304b\u3089\u30b3\u30d4\u30fc\u5148\u306b\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u30b3\u30d4\u30fc\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u30ef\u30f3\u30dd\u30a4\u30f3\u30c8\u30a2\u30c9\u30d0\u30a4\u30b9",children:"\u30ef\u30f3\u30dd\u30a4\u30f3\u30c8\u30a2\u30c9\u30d0\u30a4\u30b9"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u5358\u7d14\u306b\u30b3\u30d4\u30fc\u3059\u308b\u3060\u3051\u3067\u306a\u304f\u3001\u30b3\u30d4\u30fc\u5148\u30a2\u30d0\u30bf\u30fc\u3078\u306e\u53c2\u7167\u306e\u4ed8\u3051\u76f4\u3057\u3082\u884c\u308f\u308c\u307e\u3059\u3002SkinnedMeshRenderer \u306e Bones, RootBone, AnchorOverride \u3092\u306f\u3058\u3081\u3001PhysBone \u306e RootTransform \u306a\u3069\u306a\u3069\u3082\u30b3\u30d4\u30fc\u5148\u306b\u4ed8\u3051\u76f4\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u30b3\u30d4\u30fc\u5143\u30fb\u30b3\u30d4\u30fc\u5148\u306e\u30de\u30c3\u30d4\u30f3\u30b0\u306f\u3001\u30b3\u30d4\u30fc\u5148 Avatar \u3092\u8a2d\u5b9a\u3057\u305f\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u81ea\u52d5\u3067\u884c\u308f\u308c\u3001Bone Mapping \u5074\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GameObject \u306e\u540d\u79f0\u3092\u3082\u3068\u306b\u3001\u985e\u4f3c\u306e GameObject \u304c\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30d4\u30fc\u5143\u30fb\u30b3\u30d4\u30fc\u5148\u306e\u30dc\u30fc\u30f3\u69cb\u9020\u304c\u7570\u306a\u3063\u3066\u3044\u3066\u3082\u985e\u4f3c GameObject \u3092\u30de\u30c3\u30d4\u30f3\u30b0\u3067\u304d\u3066\u3044\u308b\u306a\u3089\u3070\u30b3\u30d4\u30fc\u306b\u554f\u984c\u306f\u3042\u308a\u307e\u305b\u3093\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30b3\u30d4\u30fc\u6642\u3001\u985e\u4f3c GameObject \u306e\u306a\u3044\u30b3\u30d4\u30fc\u5143\u306f\u3001\u30b3\u30d4\u30fc\u5148\u306b GameObject \u3092\u65b0\u898f\u4f5c\u6210\u3057\u307e\u3059\u3002"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u30de\u30c3\u30d4\u30f3\u30b0\u3067\u304d\u305a\u4ed8\u3051\u76f4\u3057\u306b\u5931\u6557\u3057\u3001\u30b3\u30d4\u30fc\u5143\u3078\u306e\u53c2\u7167\u304c\u6b8b\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30d4\u30fc\u6642\u306b Console \u306b\u8b66\u544a\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u8a73\u7d30\u306a\u6319\u52d5",children:"\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u8a73\u7d30\u306a\u6319\u52d5"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["GameObject \u306e\u540d\u79f0\u304c\u4e00\u81f4\u3057\u305f\u5834\u5408\u306b\u3001\u30b3\u30d4\u30fc\u5143\u30fb\u30b3\u30d4\u30fc\u5148\u306e1\u5bfe1\u30de\u30c3\u30d4\u30f3\u30b0\u3068\u3059\u308b\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30de\u30c3\u30d4\u30f3\u30b0\u306f\u300cHips \u914d\u4e0b\u306b\u3042\u308b GameObject \u3069\u3046\u3057\u300d\u300cHips \u5916\u306b\u3042\u308b GameObject \u3069\u3046\u3057\u300d\u3067\u884c\u3044\u3001\u305d\u308c\u3089\u3067\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306f\u300cAvatar \u30eb\u30fc\u30c8\u914d\u4e0b\u306e\u5168\u57df\u300d\u306e3\u6bb5\u968e\u3067\u884c\u3046\u3002"}),"\n",(0,t.jsxs)(n.li,{children:["\u307e\u305a\u306fAvatar\u30eb\u30fc\u30c8\u304b\u3089\u306e\u76f8\u5bfe\u30d1\u30b9\u306b\u3066\u6bd4\u8f03\u3057\u3001\u898b\u3064\u304b\u3089\u306a\u3044\u5834\u5408\u306fGameObject\u306e\u540d\u79f0\u306e\u307f\u3067\u6bd4\u8f03\u3092\u884c\u3046\u3002\u305f\u3060\u3057\u540d\u79f0\u3067\u5bfe\u8c61\u3092\u3072\u3068\u3064\u306b\u7d5e\u308a\u304d\u308c\u306a\u304b\u3063\u305f\u5834\u5408\u306f\u3001\u3055\u3089\u306b\u89aa\u3092\u542b\u3081\u3066\u4e00\u81f4\u3092\u6bd4\u8f03\u3059\u308b\u3002","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u4f8b\u3048\u3070\u30b3\u30d4\u30fc\u5143\u306b ",(0,t.jsx)(n.code,{children:"Avatar/A/B/C"})," \u3068\u3044\u3046GameObject\u304c\u6709\u308b\u5834\u5408\u3001\u30b3\u30d4\u30fc\u5148\u304b\u3089 ",(0,t.jsx)(n.code,{children:"Avatar/A/B/C"}),", ",(0,t.jsx)(n.code,{children:"C"}),", ",(0,t.jsx)(n.code,{children:"B/C"}),", ",(0,t.jsx)(n.code,{children:"A/B/C"})," \u3092\u9806\u306b\u691c\u7d22\u3057\u30011\u5bfe1\u30de\u30c3\u30d4\u30f3\u30b0\u306b\u306a\u308b\u3082\u306e\u3092\u9078\u629e\u3059\u308b\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"\u30de\u30c3\u30d4\u30f3\u30b0\u306e\u6c7a\u307e\u3063\u3066\u3044\u306a\u3044 GameObject \u3092\u30b3\u30d4\u30fc\u3059\u308b\u5834\u5408\u306f\u3001\u30b3\u30d4\u30fc\u5148\u306b GameObject \u3092\u65b0\u898f\u3067\u4f5c\u6210\u3059\u308b\u3002\u305d\u306e\u969b GameObject \u306e\u89aa A \u304c\u30b3\u30d4\u30fc\u5148\u306b\u30de\u30c3\u30d4\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30b3\u30d4\u30fc\u5148\u306e\u89aa A' \u306e\u914d\u4e0b\u306b GameOBject \u3092\u4f5c\u6210\u3059\u308b\u3002"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1800:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/AvatarCopyUtility-01-e0e7fbf531bc1c11bc15c1328f683138.png"},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>c});var t=i(6540);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);