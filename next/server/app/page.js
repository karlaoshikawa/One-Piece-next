(()=>{var e={};e.id=931,e.ids=[931],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},5693:(e,t,a)=>{"use strict";a.r(t),a.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>d,pages:()=>u,routeModule:()=>m,tree:()=>p});var i=a(3137),r=a(4647),n=a(4183),s=a.n(n),o=a(1775),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);a.d(t,l);let c=i.AppPageRouteModule,p=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(a.bind(a,9293)),"/Users/karlaoshikawa/estudos/OnePiece-next/one-piece-next/src/app/page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(a.bind(a,9197)),"/Users/karlaoshikawa/estudos/OnePiece-next/one-piece-next/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(a.t.bind(a,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(a.bind(a,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],u=["/Users/karlaoshikawa/estudos/OnePiece-next/one-piece-next/src/app/page.tsx"],d="/page",x={require:a,loadChunk:()=>Promise.resolve()},m=new c({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},8160:(e,t,a)=>{Promise.resolve().then(a.bind(a,4477))},4477:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>HeroesList});var i=a(80),r=a(1440),n=a.n(r),s=a(1691),o=a(8565),l=a.n(o),c=a(3362),p=a.n(c),u=a(139);function HeroesList({tripulation:e}){return(0,i.jsxs)(i.Fragment,{children:[i.jsx(s.E.h1,{className:`${p().className} ${l().title}`,initial:{opacity:0},animate:{opacity:1},transition:{delay:2,duration:2},children:"PIRATAS"}),i.jsx(s.E.section,{className:l().tripulation,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{duration:2},children:e.map(e=>i.jsx(s.E.div,{className:`${l().imageContainer} ${l().caracterHeight}`,whileHover:{scale:1.8},whileTap:{scale:.8},transition:{duration:.8},children:i.jsx(n(),{href:`/tripulation/${e.id}`,children:i.jsx(u.Z,{caracter:e})})},e.id))})]})}},8565:e=>{e.exports={tripulation:"tripulationlist_tripulation__abhDu",imageContainer:"tripulationlist_imageContainer__cBwsi",caracterHeight:"tripulationlist_caracterHeight__FqEJ6",title:"tripulationlist_title__gxLj8"}},1037:e=>{e.exports={main:"page_main__akH3E"}},9293:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Home});var i=a(8144),r=a(1037),n=a.n(r),s=a(7536);let o=(0,s.createProxy)(String.raw`/Users/karlaoshikawa/estudos/OnePiece-next/one-piece-next/src/app/components/TripulationList/index.tsx`),{__esModule:l,$$typeof:c}=o,p=o.default;async function getTripulationData(){let e=await fetch("https://652bac64d0d1df5273ee97c2.mockapi.io/api/tripulation");if(!e.ok)throw Error("Falha ao buscar a Tripulacao do One Piece");return e.json()}async function Home(){let e=await getTripulationData();return console.log(e),i.jsx("main",{className:n().main,children:i.jsx(p,{tripulation:e})})}},1440:(e,t,a)=>{e.exports=a(1297)}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[136,506,687,237,728],()=>__webpack_exec__(5693));module.exports=a})();