"use strict";(self.webpackChunkhomepage=self.webpackChunkhomepage||[]).push([[854],{9760:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var i=s(4848),t=s(8453);const l={},r=void 0,d={id:"unlitwf/Material-Tools-Manual",title:"Material-Tools-Manual",description:"UnlitWF \u306b\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8a2d\u5b9a\u30fb\u8abf\u6574\u3092\u884c\u3046 Unity \u62e1\u5f35\u30c4\u30fc\u30eb\u304c\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\u3002",source:"@site/docs/unlitwf/Material-Tools-Manual.md",sourceDirName:"unlitwf",slug:"/unlitwf/Material-Tools-Manual",permalink:"/vpm-repos/docs/unlitwf/Material-Tools-Manual",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714740694e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UnlitWF/Water Manual",permalink:"/vpm-repos/docs/unlitwf/Water-Manual"},next:{title:"UnToon Redistribution \u518d\u914d\u5e03\u306b\u3064\u3044\u3066",permalink:"/vpm-repos/docs/unlitwf/Redistribution"}},h={},c=[{value:"\u5404\u30c4\u30fc\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",id:"\u5404\u30c4\u30fc\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",level:2},{value:"\u30de\u30c6\u30ea\u30a2\u30eb\u5909\u63db\u7cfb\u30c4\u30fc\u30eb",id:"\u30de\u30c6\u30ea\u30a2\u30eb\u5909\u63db\u7cfb\u30c4\u30fc\u30eb",level:2},{value:"Convert UnlitWF material / UnlitWF\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5909\u63db\u3059\u308b",id:"ConvertWFMaterial",level:3},{value:"Change Mobile shader / \u30e2\u30d0\u30a4\u30eb\u5411\u3051\u30b7\u30a7\u30fc\u30c0\u306b\u5909\u63db\u3059\u308b",id:"ChangeMobileShader",level:3},{value:"Switch DebugView Shader / DebugView\u30b7\u30a7\u30fc\u30c0\u306b\u5207\u308a\u66ff\u3048\u308b",id:"SwitchDebugView",level:3},{value:"\u30de\u30c6\u30ea\u30a2\u30eb\u7de8\u96c6\u7cfb\u30c4\u30fc\u30eb",id:"\u30de\u30c6\u30ea\u30a2\u30eb\u7de8\u96c6\u7cfb\u30c4\u30fc\u30eb",level:2},{value:"CleanUp material property / \u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30af\u30ea\u30f3\u30ca\u30c3\u30d7",id:"CleanUp",level:3},{value:"Copy material property / \u30de\u30c6\u30ea\u30a2\u30eb\u8a2d\u5b9a\u5024\u306e\u30b3\u30d4\u30fc",id:"CopyProperty",level:3},{value:"Reset material property / \u30de\u30c6\u30ea\u30a2\u30eb\u8a2d\u5b9a\u5024\u306e\u30ea\u30bb\u30c3\u30c8",id:"ResetProperty",level:3},{value:"Migration material / \u30de\u30c6\u30ea\u30a2\u30eb\u3092\u6700\u65b0\u306b\u5909\u63db\u3059\u308b",id:"Migration",level:3}];function o(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"UnlitWF \u306b\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u8a2d\u5b9a\u30fb\u8abf\u6574\u3092\u884c\u3046 Unity \u62e1\u5f35\u30c4\u30fc\u30eb\u304c\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"\u5404\u30c4\u30fc\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5",children:"\u5404\u30c4\u30fc\u30eb\u306e\u8d77\u52d5\u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:["\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066 ",(0,i.jsx)(n.code,{children:"UnlitWF Material Tools"})," \u304b\u3089\u5404\u30c4\u30fc\u30eb\u3092\u8d77\u52d5\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(652).A+"",width:"914",height:"227"})}),"\n",(0,i.jsxs)(n.p,{children:["\u306a\u304a\u3001\u30e1\u30cb\u30e5\u30fc\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u82f1\u8a9e\u8868\u8a18\u3067\u3059\u3002\u65e5\u672c\u8a9e\u8868\u8a18\u306b\u306fUnity\u30e1\u30cb\u30e5\u30fc\u306e ",(0,i.jsx)(n.code,{children:"Tools"})," \u2192 ",(0,i.jsx)(n.code,{children:"UnlitWF"})," \u2192 ",(0,i.jsx)(n.code,{children:"\u30e1\u30cb\u30e5\u30fc\u306e\u8a00\u8a9e\u3092\u65e5\u672c\u8a9e\u306b\u3059\u308b"})," \u304b\u3089\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(9127).A+"",width:"474",height:"223"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30de\u30c6\u30ea\u30a2\u30eb\u5909\u63db\u7cfb\u30c4\u30fc\u30eb",children:"\u30de\u30c6\u30ea\u30a2\u30eb\u5909\u63db\u7cfb\u30c4\u30fc\u30eb"}),"\n",(0,i.jsx)(n.h3,{id:"ConvertWFMaterial",children:"Convert UnlitWF material / UnlitWF\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5909\u63db\u3059\u308b"}),"\n",(0,i.jsxs)(n.p,{children:["UnlitWF/UnToon \u306e\u30b7\u30a7\u30fc\u30c0 ",(0,i.jsx)(n.strong,{children:"\u3067\u306f\u306a\u3044"})," \u30b7\u30a7\u30fc\u30c0\u3092\u7528\u3044\u3066\u3044\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u3001UnlitWF/UnToon \u306e\u30b7\u30a7\u30fc\u30c0\u306b\u5207\u308a\u66ff\u3048\u307e\u3059\u3002\u65e2\u306b UnlitWF \u306e\u30b7\u30a7\u30fc\u30c0\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002\n\u4ed6\u30b7\u30a7\u30fc\u30c0\u304b\u3089\u306e\u4e00\u62ec\u5909\u66f4\u3084\u3001InternalErrorShader \u304b\u3089\u306e\u5fa9\u65e7\u306b\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(3096).A+"",width:"978",height:"201"})}),"\n",(0,i.jsx)(n.p,{children:"1\u3064\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u8907\u6570\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3001\u3042\u308b\u3044\u306fProject\u30a6\u30a3\u30f3\u30c9\u30a6\u5185\u306e\u30d5\u30a9\u30eb\u30c0\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066\u5909\u66f4\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["InternalErrorShader\u306e\u307f","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u30a8\u30e9\u30fc\u3092\u8d77\u3053\u3057\u3066\u3044\u308b\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u307fUnlitWF\u30b7\u30a7\u30fc\u30c0\u306b\u5909\u66f4\u3057\u307e\u3059"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u30d3\u30eb\u30c8\u30a4\u30f3\u30b7\u30a7\u30fc\u30c0\u4ee5\u5916","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Unity\u30d3\u30eb\u30c8\u30a4\u30f3\u30b7\u30a7\u30fc\u30c0\u3067\u306f\u306a\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u3064\u3044\u3066UnlitWF\u30b7\u30a7\u30fc\u30c0\u306b\u5909\u66f4\u3057\u307e\u3059"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5168\u3066\u306e\u30de\u30c6\u30ea\u30a2\u30eb","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u5168\u3066\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092UnlitWF\u30b7\u30a7\u30fc\u30c0\u306b\u5909\u66f4\u3057\u307e\u3059"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"ChangeMobileShader",children:"Change Mobile shader / \u30e2\u30d0\u30a4\u30eb\u5411\u3051\u30b7\u30a7\u30fc\u30c0\u306b\u5909\u63db\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u4f7f\u308f\u308c\u3066\u3044\u308b\u30b7\u30a7\u30fc\u30c0\u304c VRC Quest (\u30ef\u30fc\u30eb\u30c9) \u3067\u52d5\u4f5c\u3057\u306a\u3044\u30b7\u30a7\u30fc\u30c0\u3067\u3042\u308b\u5834\u5408\u306f\u3001VRC Quest \u3067\u3082\u52d5\u4f5c\u3059\u308b\u30b7\u30a7\u30fc\u30c0\u306b\u4e00\u62ec\u5909\u66f4\u3057\u307e\u3059\u3002\n\u65e2\u306b VRC Quest \u3067\u52d5\u4f5c\u3059\u308b\u30b7\u30a7\u30fc\u30c0\u306e\u5834\u5408\u3001\u304a\u3088\u3073\u30de\u30c6\u30ea\u30a2\u30eb\u304c UnlitWF \u306e\u30b7\u30a7\u30fc\u30c0\u3067\u306f\u306a\u3044\u5834\u5408\u306f\u4f55\u3082\u3057\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"SwitchDebugView",children:"Switch DebugView Shader / DebugView\u30b7\u30a7\u30fc\u30c0\u306b\u5207\u308a\u66ff\u3048\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4e00\u6642\u7684\u306b\u30c7\u30d0\u30c3\u30b0\u7528\u30b7\u30a7\u30fc\u30c0\u3078\u5909\u66f4\u3057\u307e\u3059\u3002\u306a\u304a\u3001\u3053\u306e\u6a5f\u80fd\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u30e1\u30cb\u30e5\u30fc(Inspector\u306e\u6b6f\u8eca\u30de\u30fc\u30af)\u304b\u3089\u3082\u547c\u3073\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(1438).A+"",width:"385",height:"389"})}),"\n",(0,i.jsx)(n.p,{children:"DebugView \u3067\u306f UV \u3084\u6cd5\u7dda\u306a\u3069\u69d8\u3005\u306a\u6570\u5024\u3092\u53ef\u8996\u5316\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(3905).A+"",width:"735",height:"496"})}),"\n",(0,i.jsxs)(n.p,{children:["\u30b7\u30a7\u30fc\u30c0\u3092\u5143\u306b\u623b\u3059\u3068\u304d\u306b\u306f ",(0,i.jsx)(n.code,{children:"Switch Prev Shader"})," \u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u5143\u306e\u30b7\u30a7\u30fc\u30c0\u3078\u3068\u5207\u308a\u66ff\u308f\u308a\u307e\u3059\u3002\n\u5143\u306e\u30b7\u30a7\u30fc\u30c0\u306f UnlitWF/UnToon \u3060\u3051\u3067\u306a\u304f\u3001StandardShader \u3084\u4ed6\u30b7\u30a7\u30fc\u30c0\u304b\u3089\u3082\u5207\u308a\u66ff\u3048\u30fb\u5207\u308a\u623b\u3057\u53ef\u80fd\u3067\u3059\u3002\u3054\u6d3b\u7528\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(7608).A+"",width:"345",height:"214"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30de\u30c6\u30ea\u30a2\u30eb\u7de8\u96c6\u7cfb\u30c4\u30fc\u30eb",children:"\u30de\u30c6\u30ea\u30a2\u30eb\u7de8\u96c6\u7cfb\u30c4\u30fc\u30eb"}),"\n",(0,i.jsx)(n.h3,{id:"CleanUp",children:"CleanUp material property / \u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30af\u30ea\u30f3\u30ca\u30c3\u30d7"}),"\n",(0,i.jsx)(n.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u5185\u306e\u672a\u4f7f\u7528\u306e\u8a2d\u5b9a\u3092\u6d88\u53bb\u3057\u307e\u3059\u3002\u4e0d\u8981\u306a\u30c6\u30af\u30b9\u30c1\u30e3\u53c2\u7167\u3084\u7121\u52b9\u5316\u3055\u308c\u305f\u6a5f\u80fd\u306a\u3069\u306e\u30af\u30ea\u30fc\u30f3\u30ca\u30c3\u30d7\u306b\u3054\u5229\u7528\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(819).A+"",width:"479",height:"485"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u308c\u3068\u540c\u3058\u6a5f\u80fd\u304c\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e Inspector \u6700\u4e0b\u90e8\u304b\u3089\u3082\u5229\u7528\u3067\u304d\u307e\u3059\u3002",(0,i.jsx)(n.code,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u304b\u3089\u4e0d\u8981\u30c7\u30fc\u30bf\u3092\u524a\u9664"})," \u3092\u9078\u629e\u3057\u3066\u30af\u30ea\u30fc\u30f3\u30ca\u30c3\u30d7\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(9242).A+"",width:"364",height:"129"})}),"\n",(0,i.jsx)(n.p,{children:"\u306a\u304a\u3001VRRCSDK3_Avatar \u306b\u3066\u30a2\u30d0\u30bf\u30fc\u3092\u30d3\u30eb\u30c9\u3059\u308b\u969b\u306f\u3001\u30a2\u30d0\u30bf\u30fc\u306b\u4f7f\u7528\u3055\u308c\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u81ea\u52d5\u3067\u30af\u30ea\u30f3\u30ca\u30c3\u30d7\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.h3,{id:"CopyProperty",children:"Copy material property / \u30de\u30c6\u30ea\u30a2\u30eb\u8a2d\u5b9a\u5024\u306e\u30b3\u30d4\u30fc"}),"\n",(0,i.jsx)(n.p,{children:"\u30b3\u30d4\u30fc\u5143\u30de\u30c6\u30ea\u30a2\u30eb\u304b\u3089\u30b3\u30d4\u30fc\u5148\u30de\u30c6\u30ea\u30a2\u30eb\u3078\u3001\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u3092\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002\u30b3\u30d4\u30fc\u7bc4\u56f2\u306f\u6a5f\u80fd\u3054\u3068\u306b\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\u7570\u306a\u308b\u30b7\u30a7\u30fc\u30c0\u9593\u306e\u5024\u306e\u30b3\u30d4\u30fc\u3082\u53ef\u80fd\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(3101).A+"",width:"480",height:"504"})}),"\n",(0,i.jsx)(n.h3,{id:"ResetProperty",children:"Reset material property / \u30de\u30c6\u30ea\u30a2\u30eb\u8a2d\u5b9a\u5024\u306e\u30ea\u30bb\u30c3\u30c8"}),"\n",(0,i.jsx)(n.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u3092\u521d\u671f\u5316\u3059\u308b\u969b\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(596).A+"",width:"479",height:"445"})}),"\n",(0,i.jsx)(n.h3,{id:"Migration",children:"Migration material / \u30de\u30c6\u30ea\u30a2\u30eb\u3092\u6700\u65b0\u306b\u5909\u63db\u3059\u308b"}),"\n",(0,i.jsx)(n.p,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e UnlitWF/UnToon \u3067\u4f5c\u6210\u3055\u308c\u3066\u3044\u305f\u5834\u5408\u306b\u3001\u65b0\u3057\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3078\u3068\u30de\u30a4\u30b0\u30ec\u30fc\u30b7\u30e7\u30f3\u3057\u307e\u3059\u3002\n\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u5024\u304c\u4fdd\u5b58\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u5909\u66f4\u3055\u308c\u307e\u305b\u3093\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(3642).A+"",width:"481",height:"418"})}),"\n",(0,i.jsxs)(n.p,{children:["\u3053\u306e\u30c4\u30fc\u30eb\u3067\u884c\u3046\u5909\u66f4\u306f\u3001\u30b7\u30a7\u30fc\u30c0\u306e\u30a4\u30f3\u30b9\u30da\u30af\u30bf\u3067\u300c\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u3067\u4f5c\u6210\u3055\u308c\u305f\u3088\u3046\u3067\u3059\u3002\u6700\u65b0\u7248\u306b\u5909\u63db\u3057\u307e\u3059\u304b\uff1f\u300d\u306b ",(0,i.jsx)(n.strong,{children:"Fix Now"})," \u3057\u305f\u5834\u5408\u3068\u540c\u3058\u5909\u66f4\u3067\u3059\u3002\u3053\u306e\u30c4\u30fc\u30eb\u3067\u306f\u8907\u6570\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4e00\u62ec\u9078\u629e\u3057\u3066\u5909\u66f4\u3059\u308b\u305f\u3081\u306b\u7528\u610f\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Image",src:s(8851).A+"",width:"340",height:"223"})})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},652:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-01-d03318c22561adcf2bedf258b3ba2ed3.png"},9127:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-02-033c60f75594bd639a4e871f8922bff0.png"},1438:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-03-7c71771044b457a211bbc72ca6b3657f.png"},3905:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-04-c248bd482271a034c114e2f95b52096d.png"},7608:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-05-823eab42fd468ed46dfa0f0471d6956e.png"},819:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-06-3d885da4231b8225a9cfaf600fdeea38.png"},9242:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},3101:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-08-51210ab4e57b5906bf055b94634fcae9.png"},596:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-09-a24d2e843ef35f4203c3c3cb557951d3.png"},3642:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-10-69527e7cd4d295f6ef9d57136fa7033a.png"},8851:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-11-55743d3e6743cd09641ef7253d6bf93d.png"},3096:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/tools-12-282fea05851dd583f10859a579930e7f.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var i=s(6540);const t={},l=i.createContext(t);function r(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);