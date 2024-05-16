exports.id=135,exports.ids=[135],exports.modules={1568:e=>{e.exports={style:{fontFamily:"'__Quicksand_2ffc80', '__Quicksand_Fallback_2ffc80'",fontStyle:"normal"},className:"__className_2ffc80"}},569:(e,t,r)=>{"use strict";r.d(t,{M:()=>AnimatePresence});var n=r(9885),s=r(381);function useIsMounted(){let e=(0,n.useRef)(!1);return(0,s.L)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}var i=r(9195),l=r(9386),o=r(4349);let PopChildMeasure=class PopChildMeasure extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}};function PopChild({children:e,isPresent:t}){let r=(0,n.useId)(),s=(0,n.useRef)(null),i=(0,n.useRef)({width:0,height:0,top:0,left:0});return(0,n.useInsertionEffect)(()=>{let{width:e,height:n,top:l,left:o}=i.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=r;let u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${l}px !important;
            left: ${o}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),n.createElement(PopChildMeasure,{isPresent:t,childRef:s,sizeRef:i},n.cloneElement(e,{ref:s}))}let PresenceChild=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:i,presenceAffectsLayout:u,mode:c})=>{let a=(0,o.h)(newChildrenMap),d=(0,n.useId)(),f=(0,n.useMemo)(()=>({id:d,initial:t,isPresent:r,custom:i,onExitComplete:e=>{for(let t of(a.set(e,!0),a.values()))if(!t)return;s&&s()},register:e=>(a.set(e,!1),()=>a.delete(e))}),u?void 0:[r]);return(0,n.useMemo)(()=>{a.forEach((e,t)=>a.set(t,!1))},[r]),n.useEffect(()=>{r||a.size||!s||s()},[r]),"popLayout"===c&&(e=n.createElement(PopChild,{isPresent:r},e)),n.createElement(l.O.Provider,{value:f},e)};function newChildrenMap(){return new Map}var u=r(8549),c=r(7279);let getChildKey=e=>e.key||"",AnimatePresence=({children:e,custom:t,initial:r=!0,onExitComplete:l,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:d="sync"})=>{var f;(0,c.k)(!o,"Replace exitBeforeEnter with mode='wait'");let p=(0,n.useContext)(u.p).forceRender||function(){let e=useIsMounted(),[t,r]=(0,n.useState)(0),s=(0,n.useCallback)(()=>{e.current&&r(t+1)},[t]),l=(0,n.useCallback)(()=>i.Wi.postRender(s),[s]);return[l,t]}()[0],h=useIsMounted(),m=function(e){let t=[];return n.Children.forEach(e,e=>{(0,n.isValidElement)(e)&&t.push(e)}),t}(e),C=m,y=(0,n.useRef)(new Map).current,E=(0,n.useRef)(C),P=(0,n.useRef)(new Map).current,g=(0,n.useRef)(!0);if((0,s.L)(()=>{g.current=!1,function(e,t){e.forEach(e=>{let r=getChildKey(e);t.set(r,e)})}(m,P),E.current=C}),f=()=>{g.current=!0,P.clear(),y.clear()},(0,n.useEffect)(()=>()=>f(),[]),g.current)return n.createElement(n.Fragment,null,C.map(e=>n.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,initial:!!r&&void 0,presenceAffectsLayout:a,mode:d},e)));C=[...C];let x=E.current.map(getChildKey),R=m.map(getChildKey),M=x.length;for(let e=0;e<M;e++){let t=x[e];-1!==R.indexOf(t)||y.has(t)||y.set(t,void 0)}return"wait"===d&&y.size&&(C=[]),y.forEach((e,r)=>{if(-1!==R.indexOf(r))return;let s=P.get(r);if(!s)return;let i=x.indexOf(r),o=e;o||(o=n.createElement(PresenceChild,{key:getChildKey(s),isPresent:!1,onExitComplete:()=>{P.delete(r),y.delete(r);let e=E.current.findIndex(e=>e.key===r);if(E.current.splice(e,1),!y.size){if(E.current=m,!1===h.current)return;p(),l&&l()}},custom:t,presenceAffectsLayout:a,mode:d},s),y.set(r,o)),C.splice(i,0,o)}),C=C.map(e=>{let t=e.key;return y.has(t)?e:n.createElement(PresenceChild,{key:getChildKey(e),isPresent:!0,presenceAffectsLayout:a,mode:d},e)}),n.createElement(n.Fragment,null,y.size?C:C.map(e=>(0,n.cloneElement)(e)))}}};