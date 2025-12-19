import{V as $t,W as Mt,X as zt,e as x,r as E,w as se,q as Ge,i as ve,z as We,d as P,Y as Ht,v as k,o as O,x as b,h as S,u as m,N as Ze,B as Wt,Z as Vt,$ as yt,c as Oe,A as G,M as Xt,l as Re,a0 as ce,a1 as jt,a2 as Kt,a3 as Yt,y as ne,R as Pe,S as Se,Q as Ut,a4 as Gt,a5 as Zt,K as Qt,t as Jt,E as eo,G as to,a6 as oo,f as no,g as io,I as ro}from"./iframe-B1Ejz58S.js";import{u as Qe,r as Ve}from"./index-DhxrOBYr.js";import{r as so,h as lo,u as ao,i as Tt,a as H,o as uo,P as Te,j as co,c as ke,k as po,l as xt,b as fo,m as lt,d as Co}from"./Primitive-H7cSV8m7.js";import{V as go,u as mo}from"./VisuallyHidden-CKwxkQjE.js";import{_ as xe}from"./Button-CHIR6_Od.js";import{S as vo,a as ho,C as yo,b as To}from"./star-D7QvAJMW.js";import"./preload-helper-PPVm8Dsz.js";function Bt(e,o,t){const n=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});o&&n.addEventListener(e,o,{once:!0}),n.dispatchEvent(i)}function xo(e){const o=$t(),t=o?.type.emits,n={};return t?.length||console.warn(`No emitted event found. Please check component: ${o?.type.__name}`),t?.forEach(i=>{n[Mt(zt(i))]=(...r)=>e(i,...r)}),n}function Dt(e,o){const t=Qe(e),n=o?xo(o):{};return x(()=>({...t.value,...n}))}function Bo(e,o){const t=so(!1,300),n=E(null),i=lo();function r(){n.value=null,t.value=!1}function s(l,u){const c=l.currentTarget,a={x:l.clientX,y:l.clientY},d=Do(a,c.getBoundingClientRect()),f=wo(a,d),C=bo(u.getBoundingClientRect()),p=_o([...f,...C]);n.value=p,t.value=!0}return se(l=>{if(e.value&&o.value){const u=a=>s(a,o.value),c=a=>s(a,e.value);e.value.addEventListener("pointerleave",u),o.value.addEventListener("pointerleave",c),l(()=>{e.value?.removeEventListener("pointerleave",u),o.value?.removeEventListener("pointerleave",c)})}}),se(l=>{if(n.value){const u=c=>{if(!n.value||!(c.target instanceof Element))return;const a=c.target,d={x:c.clientX,y:c.clientY},f=e.value?.contains(a)||o.value?.contains(a),C=!Ao(d,n.value),p=!!a.closest("[data-grace-area-trigger]");f?r():(C||p)&&(r(),i.trigger())};e.value?.ownerDocument.addEventListener("pointermove",u),l(()=>e.value?.ownerDocument.removeEventListener("pointermove",u))}}),{isPointerInTransit:t,onPointerExit:i.on}}function Do(e,o){const t=Math.abs(o.top-e.y),n=Math.abs(o.bottom-e.y),i=Math.abs(o.right-e.x),r=Math.abs(o.left-e.x);switch(Math.min(t,n,i,r)){case r:return"left";case i:return"right";case t:return"top";case n:return"bottom";default:throw new Error("unreachable")}}function wo(e,o,t=5){const n=[];switch(o){case"top":n.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":n.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":n.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":n.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return n}function bo(e){const{top:o,right:t,bottom:n,left:i}=e;return[{x:i,y:o},{x:t,y:o},{x:t,y:n},{x:i,y:n}]}function Ao(e,o){const{x:t,y:n}=e;let i=!1;for(let r=0,s=o.length-1;r<o.length;s=r++){const l=o[r].x,u=o[r].y,c=o[s].x,a=o[s].y;u>n!=a>n&&t<(c-l)*(n-u)/(a-u)+l&&(i=!i)}return i}function _o(e){const o=e.slice();return o.sort((t,n)=>t.x<n.x?-1:t.x>n.x?1:t.y<n.y?-1:t.y>n.y?1:0),Eo(o)}function Eo(e){if(e.length<=1)return e.slice();const o=[];for(let n=0;n<e.length;n++){const i=e[n];for(;o.length>=2;){const r=o[o.length-1],s=o[o.length-2];if((r.x-s.x)*(i.y-s.y)>=(r.y-s.y)*(i.x-s.x))o.pop();else break}o.push(i)}o.pop();const t=[];for(let n=e.length-1;n>=0;n--){const i=e[n];for(;t.length>=2;){const r=t[t.length-1],s=t[t.length-2];if((r.x-s.x)*(i.y-s.y)>=(r.y-s.y)*(i.x-s.x))t.pop();else break}t.push(i)}return t.pop(),o.length===1&&t.length===1&&o[0].x===t[0].x&&o[0].y===t[0].y?o:o.concat(t)}function Ro(e){const o=E(),t=x(()=>o.value?.width??0),n=x(()=>o.value?.height??0);return Ge(()=>{const i=ao(e);if(i){o.value={width:i.offsetWidth,height:i.offsetHeight};const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const l=s[0];let u,c;if("borderBoxSize"in l){const a=l.borderBoxSize,d=Array.isArray(a)?a[0]:a;u=d.inlineSize,c=d.blockSize}else u=i.offsetWidth,c=i.offsetHeight;o.value={width:u,height:c}});return r.observe(i,{box:"border-box"}),()=>r.unobserve(i)}else o.value=void 0}),{width:t,height:n}}const Oo="dismissableLayer.pointerDownOutside",Po="dismissableLayer.focusOutside";function wt(e,o){const t=o.closest("[data-dismissable-layer]"),n=e.dataset.dismissableLayer===""?e:e.querySelector("[data-dismissable-layer]"),i=Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(t&&(n===t||i.indexOf(n)<i.indexOf(t)))}function So(e,o,t=!0){const n=o?.value?.ownerDocument??globalThis?.document,i=E(!1),r=E(()=>{});return se(s=>{if(!Tt||!ve(t))return;const l=async c=>{const a=c.target;if(!(!o?.value||!a)){if(wt(o.value,a)){i.value=!1;return}if(c.target&&!i.value){let f=function(){Bt(Oo,e,d)};const d={originalEvent:c};c.pointerType==="touch"?(n.removeEventListener("click",r.value),r.value=f,n.addEventListener("click",r.value,{once:!0})):f()}else n.removeEventListener("click",r.value);i.value=!1}},u=window.setTimeout(()=>{n.addEventListener("pointerdown",l)},0);s(()=>{window.clearTimeout(u),n.removeEventListener("pointerdown",l),n.removeEventListener("click",r.value)})}),{onPointerDownCapture:()=>{ve(t)&&(i.value=!0)}}}function qo(e,o,t=!0){const n=o?.value?.ownerDocument??globalThis?.document,i=E(!1);return se(r=>{if(!Tt||!ve(t))return;const s=async l=>{if(!o?.value)return;await We(),await We();const u=l.target;!o.value||!u||wt(o.value,u)||l.target&&!i.value&&Bt(Po,e,{originalEvent:l})};n.addEventListener("focusin",s),r(()=>n.removeEventListener("focusin",s))}),{onFocusCapture:()=>{ve(t)&&(i.value=!0)},onBlurCapture:()=>{ve(t)&&(i.value=!1)}}}const J=Ht({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});var Lo=P({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(e,{emit:o}){const t=e,n=o,{forwardRef:i,currentElement:r}=H(),s=x(()=>r.value?.ownerDocument??globalThis.document),l=x(()=>J.layersRoot),u=x(()=>r.value?Array.from(l.value).indexOf(r.value):-1),c=x(()=>J.layersWithOutsidePointerEventsDisabled.size>0),a=x(()=>{const p=Array.from(l.value),[g]=[...J.layersWithOutsidePointerEventsDisabled].slice(-1),v=p.indexOf(g);return u.value>=v}),d=So(async p=>{const g=[...J.branches].some(v=>v?.contains(p.target));!a.value||g||(n("pointerDownOutside",p),n("interactOutside",p),await We(),p.defaultPrevented||n("dismiss"))},r),f=qo(p=>{[...J.branches].some(v=>v?.contains(p.target))||(n("focusOutside",p),n("interactOutside",p),p.defaultPrevented||n("dismiss"))},r);uo("Escape",p=>{u.value===l.value.size-1&&(n("escapeKeyDown",p),p.defaultPrevented||n("dismiss"))});let C;return se(p=>{r.value&&(t.disableOutsidePointerEvents&&(J.layersWithOutsidePointerEventsDisabled.size===0&&(C=s.value.body.style.pointerEvents,s.value.body.style.pointerEvents="none"),J.layersWithOutsidePointerEventsDisabled.add(r.value)),l.value.add(r.value),p(()=>{t.disableOutsidePointerEvents&&J.layersWithOutsidePointerEventsDisabled.size===1&&(s.value.body.style.pointerEvents=C)}))}),se(p=>{p(()=>{r.value&&(l.value.delete(r.value),J.layersWithOutsidePointerEventsDisabled.delete(r.value))})}),(p,g)=>(O(),k(m(Te),{ref:m(i),"as-child":p.asChild,as:p.as,"data-dismissable-layer":"",style:Ze({pointerEvents:c.value?a.value?"auto":"none":void 0}),onFocusCapture:m(f).onFocusCapture,onBlurCapture:m(f).onBlurCapture,onPointerdownCapture:m(d).onPointerDownCapture},{default:b(()=>[S(p.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),Fo=Lo,ko=P({__name:"Teleport",props:{to:{type:null,required:!1,default:"body"},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const o=co();return(t,n)=>m(o)||t.forceMount?(O(),k(Vt,{key:0,to:t.to,disabled:t.disabled,defer:t.defer},[S(t.$slots,"default")],8,["to","disabled","defer"])):Wt("v-if",!0)}}),Io=ko;const[bt,No]=ke("PopperRoot");var $o=P({inheritAttrs:!1,__name:"PopperRoot",setup(e){const o=E();return No({anchor:o,onAnchorChange:t=>o.value=t}),(t,n)=>S(t.$slots,"default")}}),Mo=$o,zo=P({__name:"PopperAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const o=e,{forwardRef:t,currentElement:n}=H(),i=bt();return yt(()=>{i.onAnchorChange(o.reference??n.value)}),(r,s)=>(O(),k(m(Te),{ref:m(t),as:r.as,"as-child":r.asChild},{default:b(()=>[S(r.$slots,"default")]),_:3},8,["as","as-child"]))}}),Ho=zo;const Wo={key:0,d:"M0 0L6 6L12 0"},Vo={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var Xo=P({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const o=e;return H(),(t,n)=>(O(),k(m(Te),G(o,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:b(()=>[S(t.$slots,"default",{},()=>[t.rounded?(O(),Oe("path",Vo)):(O(),Oe("path",Wo))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),jo=Xo;function Ko(e){return e!==null}function Yo(e){return{name:"transformOrigin",options:e,fn(o){const{placement:t,rects:n,middlewareData:i}=o,s=i.arrow?.centerOffset!==0,l=s?0:e.arrowWidth,u=s?0:e.arrowHeight,[c,a]=Xe(t),d={start:"0%",center:"50%",end:"100%"}[a],f=(i.arrow?.x??0)+l/2,C=(i.arrow?.y??0)+u/2;let p="",g="";return c==="bottom"?(p=s?d:`${f}px`,g=`${-u}px`):c==="top"?(p=s?d:`${f}px`,g=`${n.floating.height+u}px`):c==="right"?(p=`${-u}px`,g=s?d:`${C}px`):c==="left"&&(p=`${n.floating.width+u}px`,g=s?d:`${C}px`),{data:{x:p,y:g}}}}}function Xe(e){const[o,t="center"]=e.split("-");return[o,t]}const Uo=["top","right","bottom","left"],ie=Math.min,$=Math.max,qe=Math.round,De=Math.floor,Y=e=>({x:e,y:e}),Go={left:"right",right:"left",bottom:"top",top:"bottom"},Zo={start:"end",end:"start"};function je(e,o,t){return $(e,ie(o,t))}function ee(e,o){return typeof e=="function"?e(o):e}function te(e){return e.split("-")[0]}function Ce(e){return e.split("-")[1]}function Je(e){return e==="x"?"y":"x"}function et(e){return e==="y"?"height":"width"}const Qo=new Set(["top","bottom"]);function K(e){return Qo.has(te(e))?"y":"x"}function tt(e){return Je(K(e))}function Jo(e,o,t){t===void 0&&(t=!1);const n=Ce(e),i=tt(e),r=et(i);let s=i==="x"?n===(t?"end":"start")?"right":"left":n==="start"?"bottom":"top";return o.reference[r]>o.floating[r]&&(s=Le(s)),[s,Le(s)]}function en(e){const o=Le(e);return[Ke(e),o,Ke(o)]}function Ke(e){return e.replace(/start|end/g,o=>Zo[o])}const at=["left","right"],ut=["right","left"],tn=["top","bottom"],on=["bottom","top"];function nn(e,o,t){switch(e){case"top":case"bottom":return t?o?ut:at:o?at:ut;case"left":case"right":return o?tn:on;default:return[]}}function rn(e,o,t,n){const i=Ce(e);let r=nn(te(e),t==="start",n);return i&&(r=r.map(s=>s+"-"+i),o&&(r=r.concat(r.map(Ke)))),r}function Le(e){return e.replace(/left|right|bottom|top/g,o=>Go[o])}function sn(e){return{top:0,right:0,bottom:0,left:0,...e}}function At(e){return typeof e!="number"?sn(e):{top:e,right:e,bottom:e,left:e}}function Fe(e){const{x:o,y:t,width:n,height:i}=e;return{width:n,height:i,top:t,left:o,right:o+n,bottom:t+i,x:o,y:t}}function ct(e,o,t){let{reference:n,floating:i}=e;const r=K(o),s=tt(o),l=et(s),u=te(o),c=r==="y",a=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,f=n[l]/2-i[l]/2;let C;switch(u){case"top":C={x:a,y:n.y-i.height};break;case"bottom":C={x:a,y:n.y+n.height};break;case"right":C={x:n.x+n.width,y:d};break;case"left":C={x:n.x-i.width,y:d};break;default:C={x:n.x,y:n.y}}switch(Ce(o)){case"start":C[s]-=f*(t&&c?-1:1);break;case"end":C[s]+=f*(t&&c?-1:1);break}return C}const ln=async(e,o,t)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=t,l=r.filter(Boolean),u=await(s.isRTL==null?void 0:s.isRTL(o));let c=await s.getElementRects({reference:e,floating:o,strategy:i}),{x:a,y:d}=ct(c,n,u),f=n,C={},p=0;for(let g=0;g<l.length;g++){const{name:v,fn:h}=l[g],{x:T,y,data:w,reset:B}=await h({x:a,y:d,initialPlacement:n,placement:f,strategy:i,middlewareData:C,rects:c,platform:s,elements:{reference:e,floating:o}});a=T??a,d=y??d,C={...C,[v]:{...C[v],...w}},B&&p<=50&&(p++,typeof B=="object"&&(B.placement&&(f=B.placement),B.rects&&(c=B.rects===!0?await s.getElementRects({reference:e,floating:o,strategy:i}):B.rects),{x:a,y:d}=ct(c,f,u)),g=-1)}return{x:a,y:d,placement:f,strategy:i,middlewareData:C}};async function he(e,o){var t;o===void 0&&(o={});const{x:n,y:i,platform:r,rects:s,elements:l,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:a="viewport",elementContext:d="floating",altBoundary:f=!1,padding:C=0}=ee(o,e),p=At(C),v=l[f?d==="floating"?"reference":"floating":d],h=Fe(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(v)))==null||t?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:a,strategy:u})),T=d==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),w=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},B=Fe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:T,offsetParent:y,strategy:u}):T);return{top:(h.top-B.top+p.top)/w.y,bottom:(B.bottom-h.bottom+p.bottom)/w.y,left:(h.left-B.left+p.left)/w.x,right:(B.right-h.right+p.right)/w.x}}const an=e=>({name:"arrow",options:e,async fn(o){const{x:t,y:n,placement:i,rects:r,platform:s,elements:l,middlewareData:u}=o,{element:c,padding:a=0}=ee(e,o)||{};if(c==null)return{};const d=At(a),f={x:t,y:n},C=tt(i),p=et(C),g=await s.getDimensions(c),v=C==="y",h=v?"top":"left",T=v?"bottom":"right",y=v?"clientHeight":"clientWidth",w=r.reference[p]+r.reference[C]-f[C]-r.floating[p],B=f[C]-r.reference[C],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c));let D=R?R[y]:0;(!D||!await(s.isElement==null?void 0:s.isElement(R)))&&(D=l.floating[y]||r.floating[p]);const A=w/2-B/2,L=D/2-g[p]/2-1,I=ie(d[h],L),j=ie(d[T],L),_=I,z=D-g[p]-j,q=D/2-g[p]/2+A,Q=je(_,q,z),W=!u.arrow&&Ce(i)!=null&&q!==Q&&r.reference[p]/2-(q<_?I:j)-g[p]/2<0,N=W?q<_?q-_:q-z:0;return{[C]:f[C]+N,data:{[C]:Q,centerOffset:q-Q-N,...W&&{alignmentOffset:N}},reset:W}}}),un=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(o){var t,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:l,platform:u,elements:c}=o,{mainAxis:a=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:C="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...v}=ee(e,o);if((t=r.arrow)!=null&&t.alignmentOffset)return{};const h=te(i),T=K(l),y=te(l)===l,w=await(u.isRTL==null?void 0:u.isRTL(c.floating)),B=f||(y||!g?[Le(l)]:en(l)),R=p!=="none";!f&&R&&B.push(...rn(l,g,p,w));const D=[l,...B],A=await he(o,v),L=[];let I=((n=r.flip)==null?void 0:n.overflows)||[];if(a&&L.push(A[h]),d){const q=Jo(i,s,w);L.push(A[q[0]],A[q[1]])}if(I=[...I,{placement:i,overflows:L}],!L.every(q=>q<=0)){var j,_;const q=(((j=r.flip)==null?void 0:j.index)||0)+1,Q=D[q];if(Q&&(!(d==="alignment"?T!==K(Q):!1)||I.every(F=>K(F.placement)===T?F.overflows[0]>0:!0)))return{data:{index:q,overflows:I},reset:{placement:Q}};let W=(_=I.filter(N=>N.overflows[0]<=0).sort((N,F)=>N.overflows[1]-F.overflows[1])[0])==null?void 0:_.placement;if(!W)switch(C){case"bestFit":{var z;const N=(z=I.filter(F=>{if(R){const oe=K(F.placement);return oe===T||oe==="y"}return!0}).map(F=>[F.placement,F.overflows.filter(oe=>oe>0).reduce((oe,Nt)=>oe+Nt,0)]).sort((F,oe)=>F[1]-oe[1])[0])==null?void 0:z[0];N&&(W=N);break}case"initialPlacement":W=l;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function dt(e,o){return{top:e.top-o.height,right:e.right-o.width,bottom:e.bottom-o.height,left:e.left-o.width}}function pt(e){return Uo.some(o=>e[o]>=0)}const cn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(o){const{rects:t}=o,{strategy:n="referenceHidden",...i}=ee(e,o);switch(n){case"referenceHidden":{const r=await he(o,{...i,elementContext:"reference"}),s=dt(r,t.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:pt(s)}}}case"escaped":{const r=await he(o,{...i,altBoundary:!0}),s=dt(r,t.floating);return{data:{escapedOffsets:s,escaped:pt(s)}}}default:return{}}}}},_t=new Set(["left","top"]);async function dn(e,o){const{placement:t,platform:n,elements:i}=e,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=te(t),l=Ce(t),u=K(t)==="y",c=_t.has(s)?-1:1,a=r&&u?-1:1,d=ee(o,e);let{mainAxis:f,crossAxis:C,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return l&&typeof p=="number"&&(C=l==="end"?p*-1:p),u?{x:C*a,y:f*c}:{x:f*c,y:C*a}}const pn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(o){var t,n;const{x:i,y:r,placement:s,middlewareData:l}=o,u=await dn(o,e);return s===((t=l.offset)==null?void 0:t.placement)&&(n=l.arrow)!=null&&n.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:s}}}}},fn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(o){const{x:t,y:n,placement:i}=o,{mainAxis:r=!0,crossAxis:s=!1,limiter:l={fn:v=>{let{x:h,y:T}=v;return{x:h,y:T}}},...u}=ee(e,o),c={x:t,y:n},a=await he(o,u),d=K(te(i)),f=Je(d);let C=c[f],p=c[d];if(r){const v=f==="y"?"top":"left",h=f==="y"?"bottom":"right",T=C+a[v],y=C-a[h];C=je(T,C,y)}if(s){const v=d==="y"?"top":"left",h=d==="y"?"bottom":"right",T=p+a[v],y=p-a[h];p=je(T,p,y)}const g=l.fn({...o,[f]:C,[d]:p});return{...g,data:{x:g.x-t,y:g.y-n,enabled:{[f]:r,[d]:s}}}}}},Cn=function(e){return e===void 0&&(e={}),{options:e,fn(o){const{x:t,y:n,placement:i,rects:r,middlewareData:s}=o,{offset:l=0,mainAxis:u=!0,crossAxis:c=!0}=ee(e,o),a={x:t,y:n},d=K(i),f=Je(d);let C=a[f],p=a[d];const g=ee(l,o),v=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const y=f==="y"?"height":"width",w=r.reference[f]-r.floating[y]+v.mainAxis,B=r.reference[f]+r.reference[y]-v.mainAxis;C<w?C=w:C>B&&(C=B)}if(c){var h,T;const y=f==="y"?"width":"height",w=_t.has(te(i)),B=r.reference[d]-r.floating[y]+(w&&((h=s.offset)==null?void 0:h[d])||0)+(w?0:v.crossAxis),R=r.reference[d]+r.reference[y]+(w?0:((T=s.offset)==null?void 0:T[d])||0)-(w?v.crossAxis:0);p<B?p=B:p>R&&(p=R)}return{[f]:C,[d]:p}}}},gn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(o){var t,n;const{placement:i,rects:r,platform:s,elements:l}=o,{apply:u=()=>{},...c}=ee(e,o),a=await he(o,c),d=te(i),f=Ce(i),C=K(i)==="y",{width:p,height:g}=r.floating;let v,h;d==="top"||d==="bottom"?(v=d,h=f===(await(s.isRTL==null?void 0:s.isRTL(l.floating))?"start":"end")?"left":"right"):(h=d,v=f==="end"?"top":"bottom");const T=g-a.top-a.bottom,y=p-a.left-a.right,w=ie(g-a[v],T),B=ie(p-a[h],y),R=!o.middlewareData.shift;let D=w,A=B;if((t=o.middlewareData.shift)!=null&&t.enabled.x&&(A=y),(n=o.middlewareData.shift)!=null&&n.enabled.y&&(D=T),R&&!f){const I=$(a.left,0),j=$(a.right,0),_=$(a.top,0),z=$(a.bottom,0);C?A=p-2*(I!==0||j!==0?I+j:$(a.left,a.right)):D=g-2*(_!==0||z!==0?_+z:$(a.top,a.bottom))}await u({...o,availableWidth:A,availableHeight:D});const L=await s.getDimensions(l.floating);return p!==L.width||g!==L.height?{reset:{rects:!0}}:{}}}};function Ie(){return typeof window<"u"}function ae(e){return ot(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var o;return(e==null||(o=e.ownerDocument)==null?void 0:o.defaultView)||window}function Z(e){var o;return(o=(ot(e)?e.ownerDocument:e.document)||window.document)==null?void 0:o.documentElement}function ot(e){return Ie()?e instanceof Node||e instanceof M(e).Node:!1}function V(e){return Ie()?e instanceof Element||e instanceof M(e).Element:!1}function U(e){return Ie()?e instanceof HTMLElement||e instanceof M(e).HTMLElement:!1}function ft(e){return!Ie()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}const mn=new Set(["inline","contents"]);function Be(e){const{overflow:o,overflowX:t,overflowY:n,display:i}=X(e);return/auto|scroll|overlay|hidden|clip/.test(o+n+t)&&!mn.has(i)}const vn=new Set(["table","td","th"]);function hn(e){return vn.has(ae(e))}const yn=[":popover-open",":modal"];function Ne(e){return yn.some(o=>{try{return e.matches(o)}catch{return!1}})}const Tn=["transform","translate","scale","rotate","perspective"],xn=["transform","translate","scale","rotate","perspective","filter"],Bn=["paint","layout","strict","content"];function nt(e){const o=it(),t=V(e)?X(e):e;return Tn.some(n=>t[n]?t[n]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!o&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!o&&(t.filter?t.filter!=="none":!1)||xn.some(n=>(t.willChange||"").includes(n))||Bn.some(n=>(t.contain||"").includes(n))}function Dn(e){let o=re(e);for(;U(o)&&!fe(o);){if(nt(o))return o;if(Ne(o))return null;o=re(o)}return null}function it(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const wn=new Set(["html","body","#document"]);function fe(e){return wn.has(ae(e))}function X(e){return M(e).getComputedStyle(e)}function $e(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function re(e){if(ae(e)==="html")return e;const o=e.assignedSlot||e.parentNode||ft(e)&&e.host||Z(e);return ft(o)?o.host:o}function Et(e){const o=re(e);return fe(o)?e.ownerDocument?e.ownerDocument.body:e.body:U(o)&&Be(o)?o:Et(o)}function ye(e,o,t){var n;o===void 0&&(o=[]),t===void 0&&(t=!0);const i=Et(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),s=M(i);if(r){const l=Ye(s);return o.concat(s,s.visualViewport||[],Be(i)?i:[],l&&t?ye(l):[])}return o.concat(i,ye(i,[],t))}function Ye(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Rt(e){const o=X(e);let t=parseFloat(o.width)||0,n=parseFloat(o.height)||0;const i=U(e),r=i?e.offsetWidth:t,s=i?e.offsetHeight:n,l=qe(t)!==r||qe(n)!==s;return l&&(t=r,n=s),{width:t,height:n,$:l}}function rt(e){return V(e)?e:e.contextElement}function pe(e){const o=rt(e);if(!U(o))return Y(1);const t=o.getBoundingClientRect(),{width:n,height:i,$:r}=Rt(o);let s=(r?qe(t.width):t.width)/n,l=(r?qe(t.height):t.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const bn=Y(0);function Ot(e){const o=M(e);return!it()||!o.visualViewport?bn:{x:o.visualViewport.offsetLeft,y:o.visualViewport.offsetTop}}function An(e,o,t){return o===void 0&&(o=!1),!t||o&&t!==M(e)?!1:o}function le(e,o,t,n){o===void 0&&(o=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),r=rt(e);let s=Y(1);o&&(n?V(n)&&(s=pe(n)):s=pe(e));const l=An(r,t,n)?Ot(r):Y(0);let u=(i.left+l.x)/s.x,c=(i.top+l.y)/s.y,a=i.width/s.x,d=i.height/s.y;if(r){const f=M(r),C=n&&V(n)?M(n):n;let p=f,g=Ye(p);for(;g&&n&&C!==p;){const v=pe(g),h=g.getBoundingClientRect(),T=X(g),y=h.left+(g.clientLeft+parseFloat(T.paddingLeft))*v.x,w=h.top+(g.clientTop+parseFloat(T.paddingTop))*v.y;u*=v.x,c*=v.y,a*=v.x,d*=v.y,u+=y,c+=w,p=M(g),g=Ye(p)}}return Fe({width:a,height:d,x:u,y:c})}function Me(e,o){const t=$e(e).scrollLeft;return o?o.left+t:le(Z(e)).left+t}function Pt(e,o){const t=e.getBoundingClientRect(),n=t.left+o.scrollLeft-Me(e,t),i=t.top+o.scrollTop;return{x:n,y:i}}function _n(e){let{elements:o,rect:t,offsetParent:n,strategy:i}=e;const r=i==="fixed",s=Z(n),l=o?Ne(o.floating):!1;if(n===s||l&&r)return t;let u={scrollLeft:0,scrollTop:0},c=Y(1);const a=Y(0),d=U(n);if((d||!d&&!r)&&((ae(n)!=="body"||Be(s))&&(u=$e(n)),U(n))){const C=le(n);c=pe(n),a.x=C.x+n.clientLeft,a.y=C.y+n.clientTop}const f=s&&!d&&!r?Pt(s,u):Y(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-u.scrollLeft*c.x+a.x+f.x,y:t.y*c.y-u.scrollTop*c.y+a.y+f.y}}function En(e){return Array.from(e.getClientRects())}function Rn(e){const o=Z(e),t=$e(e),n=e.ownerDocument.body,i=$(o.scrollWidth,o.clientWidth,n.scrollWidth,n.clientWidth),r=$(o.scrollHeight,o.clientHeight,n.scrollHeight,n.clientHeight);let s=-t.scrollLeft+Me(e);const l=-t.scrollTop;return X(n).direction==="rtl"&&(s+=$(o.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:l}}const Ct=25;function On(e,o){const t=M(e),n=Z(e),i=t.visualViewport;let r=n.clientWidth,s=n.clientHeight,l=0,u=0;if(i){r=i.width,s=i.height;const a=it();(!a||a&&o==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}const c=Me(n);if(c<=0){const a=n.ownerDocument,d=a.body,f=getComputedStyle(d),C=a.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,p=Math.abs(n.clientWidth-d.clientWidth-C);p<=Ct&&(r-=p)}else c<=Ct&&(r+=c);return{width:r,height:s,x:l,y:u}}const Pn=new Set(["absolute","fixed"]);function Sn(e,o){const t=le(e,!0,o==="fixed"),n=t.top+e.clientTop,i=t.left+e.clientLeft,r=U(e)?pe(e):Y(1),s=e.clientWidth*r.x,l=e.clientHeight*r.y,u=i*r.x,c=n*r.y;return{width:s,height:l,x:u,y:c}}function gt(e,o,t){let n;if(o==="viewport")n=On(e,t);else if(o==="document")n=Rn(Z(e));else if(V(o))n=Sn(o,t);else{const i=Ot(e);n={x:o.x-i.x,y:o.y-i.y,width:o.width,height:o.height}}return Fe(n)}function St(e,o){const t=re(e);return t===o||!V(t)||fe(t)?!1:X(t).position==="fixed"||St(t,o)}function qn(e,o){const t=o.get(e);if(t)return t;let n=ye(e,[],!1).filter(l=>V(l)&&ae(l)!=="body"),i=null;const r=X(e).position==="fixed";let s=r?re(e):e;for(;V(s)&&!fe(s);){const l=X(s),u=nt(s);!u&&l.position==="fixed"&&(i=null),(r?!u&&!i:!u&&l.position==="static"&&!!i&&Pn.has(i.position)||Be(s)&&!u&&St(e,s))?n=n.filter(a=>a!==s):i=l,s=re(s)}return o.set(e,n),n}function Ln(e){let{element:o,boundary:t,rootBoundary:n,strategy:i}=e;const s=[...t==="clippingAncestors"?Ne(o)?[]:qn(o,this._c):[].concat(t),n],l=s[0],u=s.reduce((c,a)=>{const d=gt(o,a,i);return c.top=$(d.top,c.top),c.right=ie(d.right,c.right),c.bottom=ie(d.bottom,c.bottom),c.left=$(d.left,c.left),c},gt(o,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Fn(e){const{width:o,height:t}=Rt(e);return{width:o,height:t}}function kn(e,o,t){const n=U(o),i=Z(o),r=t==="fixed",s=le(e,!0,r,o);let l={scrollLeft:0,scrollTop:0};const u=Y(0);function c(){u.x=Me(i)}if(n||!n&&!r)if((ae(o)!=="body"||Be(i))&&(l=$e(o)),n){const C=le(o,!0,r,o);u.x=C.x+o.clientLeft,u.y=C.y+o.clientTop}else i&&c();r&&!n&&i&&c();const a=i&&!n&&!r?Pt(i,l):Y(0),d=s.left+l.scrollLeft-u.x-a.x,f=s.top+l.scrollTop-u.y-a.y;return{x:d,y:f,width:s.width,height:s.height}}function He(e){return X(e).position==="static"}function mt(e,o){if(!U(e)||X(e).position==="fixed")return null;if(o)return o(e);let t=e.offsetParent;return Z(e)===t&&(t=t.ownerDocument.body),t}function qt(e,o){const t=M(e);if(Ne(e))return t;if(!U(e)){let i=re(e);for(;i&&!fe(i);){if(V(i)&&!He(i))return i;i=re(i)}return t}let n=mt(e,o);for(;n&&hn(n)&&He(n);)n=mt(n,o);return n&&fe(n)&&He(n)&&!nt(n)?t:n||Dn(e)||t}const In=async function(e){const o=this.getOffsetParent||qt,t=this.getDimensions,n=await t(e.floating);return{reference:kn(e.reference,await o(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Nn(e){return X(e).direction==="rtl"}const $n={convertOffsetParentRelativeRectToViewportRelativeRect:_n,getDocumentElement:Z,getClippingRect:Ln,getOffsetParent:qt,getElementRects:In,getClientRects:En,getDimensions:Fn,getScale:pe,isElement:V,isRTL:Nn};function Lt(e,o){return e.x===o.x&&e.y===o.y&&e.width===o.width&&e.height===o.height}function Mn(e,o){let t=null,n;const i=Z(e);function r(){var l;clearTimeout(n),(l=t)==null||l.disconnect(),t=null}function s(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),r();const c=e.getBoundingClientRect(),{left:a,top:d,width:f,height:C}=c;if(l||o(),!f||!C)return;const p=De(d),g=De(i.clientWidth-(a+f)),v=De(i.clientHeight-(d+C)),h=De(a),y={rootMargin:-p+"px "+-g+"px "+-v+"px "+-h+"px",threshold:$(0,ie(1,u))||1};let w=!0;function B(R){const D=R[0].intersectionRatio;if(D!==u){if(!w)return s();D?s(!1,D):n=setTimeout(()=>{s(!1,1e-7)},1e3)}D===1&&!Lt(c,e.getBoundingClientRect())&&s(),w=!1}try{t=new IntersectionObserver(B,{...y,root:i.ownerDocument})}catch{t=new IntersectionObserver(B,y)}t.observe(e)}return s(!0),r}function zn(e,o,t,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=n,c=rt(e),a=i||r?[...c?ye(c):[],...ye(o)]:[];a.forEach(h=>{i&&h.addEventListener("scroll",t,{passive:!0}),r&&h.addEventListener("resize",t)});const d=c&&l?Mn(c,t):null;let f=-1,C=null;s&&(C=new ResizeObserver(h=>{let[T]=h;T&&T.target===c&&C&&(C.unobserve(o),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var y;(y=C)==null||y.observe(o)})),t()}),c&&!u&&C.observe(c),C.observe(o));let p,g=u?le(e):null;u&&v();function v(){const h=le(e);g&&!Lt(g,h)&&t(),g=h,p=requestAnimationFrame(v)}return t(),()=>{var h;a.forEach(T=>{i&&T.removeEventListener("scroll",t),r&&T.removeEventListener("resize",t)}),d?.(),(h=C)==null||h.disconnect(),C=null,u&&cancelAnimationFrame(p)}}const Hn=pn,Wn=fn,vt=un,Vn=gn,Xn=cn,jn=an,Kn=Cn,Yn=(e,o,t)=>{const n=new Map,i={platform:$n,...t},r={...i.platform,_c:n};return ln(e,o,{...i,platform:r})};function Un(e){return e!=null&&typeof e=="object"&&"$el"in e}function Ue(e){if(Un(e)){const o=e.$el;return ot(o)&&ae(o)==="#comment"?null:o}return e}function de(e){return typeof e=="function"?e():m(e)}function Gn(e){return{name:"arrow",options:e,fn(o){const t=Ue(de(e.element));return t==null?{}:jn({element:t,padding:e.padding}).fn(o)}}}function Ft(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ht(e,o){const t=Ft(e);return Math.round(o*t)/t}function Zn(e,o,t){t===void 0&&(t={});const n=t.whileElementsMounted,i=x(()=>{var D;return(D=de(t.open))!=null?D:!0}),r=x(()=>de(t.middleware)),s=x(()=>{var D;return(D=de(t.placement))!=null?D:"bottom"}),l=x(()=>{var D;return(D=de(t.strategy))!=null?D:"absolute"}),u=x(()=>{var D;return(D=de(t.transform))!=null?D:!0}),c=x(()=>Ue(e.value)),a=x(()=>Ue(o.value)),d=E(0),f=E(0),C=E(l.value),p=E(s.value),g=Xt({}),v=E(!1),h=x(()=>{const D={position:C.value,left:"0",top:"0"};if(!a.value)return D;const A=ht(a.value,d.value),L=ht(a.value,f.value);return u.value?{...D,transform:"translate("+A+"px, "+L+"px)",...Ft(a.value)>=1.5&&{willChange:"transform"}}:{position:C.value,left:A+"px",top:L+"px"}});let T;function y(){if(c.value==null||a.value==null)return;const D=i.value;Yn(c.value,a.value,{middleware:r.value,placement:s.value,strategy:l.value}).then(A=>{d.value=A.x,f.value=A.y,C.value=A.strategy,p.value=A.placement,g.value=A.middlewareData,v.value=D!==!1})}function w(){typeof T=="function"&&(T(),T=void 0)}function B(){if(w(),n===void 0){y();return}if(c.value!=null&&a.value!=null){T=n(c.value,a.value,y);return}}function R(){i.value||(v.value=!1)}return Re([r,s,l,i],y,{flush:"sync"}),Re([c,a],B,{flush:"sync"}),Re(i,R,{flush:"sync"}),jt()&&Kt(w),{x:ce(d),y:ce(f),strategy:ce(C),placement:ce(p),middlewareData:ce(g),isPositioned:ce(v),floatingStyles:h,update:y}}const Qn={side:"bottom",sideOffset:0,sideFlip:!0,align:"center",alignOffset:0,alignFlip:!0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,positionStrategy:"fixed",updatePositionStrategy:"optimized",prioritizePosition:!1},[Jn,ei]=ke("PopperContent");var ti=P({inheritAttrs:!1,__name:"PopperContent",props:Yt({side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...Qn}),emits:["placed"],setup(e,{emit:o}){const t=e,n=o,i=bt(),{forwardRef:r,currentElement:s}=H(),l=E(),u=E(),{width:c,height:a}=Ro(u),d=x(()=>t.side+(t.align!=="center"?`-${t.align}`:"")),f=x(()=>typeof t.collisionPadding=="number"?t.collisionPadding:{top:0,right:0,bottom:0,left:0,...t.collisionPadding}),C=x(()=>Array.isArray(t.collisionBoundary)?t.collisionBoundary:[t.collisionBoundary]),p=x(()=>({padding:f.value,boundary:C.value.filter(Ko),altBoundary:C.value.length>0})),g=x(()=>({mainAxis:t.sideFlip,crossAxis:t.alignFlip})),v=po(()=>[Hn({mainAxis:t.sideOffset+a.value,alignmentAxis:t.alignOffset}),t.prioritizePosition&&t.avoidCollisions&&vt({...p.value,...g.value}),t.avoidCollisions&&Wn({mainAxis:!0,crossAxis:!!t.prioritizePosition,limiter:t.sticky==="partial"?Kn():void 0,...p.value}),!t.prioritizePosition&&t.avoidCollisions&&vt({...p.value,...g.value}),Vn({...p.value,apply:({elements:_,rects:z,availableWidth:q,availableHeight:Q})=>{const{width:W,height:N}=z.reference,F=_.floating.style;F.setProperty("--reka-popper-available-width",`${q}px`),F.setProperty("--reka-popper-available-height",`${Q}px`),F.setProperty("--reka-popper-anchor-width",`${W}px`),F.setProperty("--reka-popper-anchor-height",`${N}px`)}}),u.value&&Gn({element:u.value,padding:t.arrowPadding}),Yo({arrowWidth:c.value,arrowHeight:a.value}),t.hideWhenDetached&&Xn({strategy:"referenceHidden",...p.value})]),h=x(()=>t.reference??i.anchor.value),{floatingStyles:T,placement:y,isPositioned:w,middlewareData:B}=Zn(h,l,{strategy:t.positionStrategy,placement:d,whileElementsMounted:(..._)=>zn(..._,{layoutShift:!t.disableUpdateOnLayoutShift,animationFrame:t.updatePositionStrategy==="always"}),middleware:v}),R=x(()=>Xe(y.value)[0]),D=x(()=>Xe(y.value)[1]);yt(()=>{w.value&&n("placed")});const A=x(()=>B.value.arrow?.centerOffset!==0),L=E("");se(()=>{s.value&&(L.value=window.getComputedStyle(s.value).zIndex)});const I=x(()=>B.value.arrow?.x??0),j=x(()=>B.value.arrow?.y??0);return ei({placedSide:R,onArrowChange:_=>u.value=_,arrowX:I,arrowY:j,shouldHideArrow:A}),(_,z)=>(O(),Oe("div",{ref_key:"floatingRef",ref:l,"data-reka-popper-content-wrapper":"",style:Ze({...m(T),transform:m(w)?m(T).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:L.value,"--reka-popper-transform-origin":[m(B).transformOrigin?.x,m(B).transformOrigin?.y].join(" "),...m(B).hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}})},[ne(m(Te),G({ref:m(r)},_.$attrs,{"as-child":t.asChild,as:_.as,"data-side":R.value,"data-align":D.value,style:{animation:m(w)?void 0:"none"}}),{default:b(()=>[S(_.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4))}}),oi=ti;const ni={top:"bottom",right:"left",bottom:"top",left:"right"};var ii=P({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const{forwardRef:o}=H(),t=Jn(),n=x(()=>ni[t.placedSide.value]);return(i,r)=>(O(),Oe("span",{ref:s=>{m(t).onArrowChange(s)},style:Ze({position:"absolute",left:m(t).arrowX?.value?`${m(t).arrowX?.value}px`:void 0,top:m(t).arrowY?.value?`${m(t).arrowY?.value}px`:void 0,[n.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[m(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[m(t).placedSide.value],visibility:m(t).shouldHideArrow.value?"hidden":void 0})},[ne(jo,G(i.$attrs,{ref:m(o),style:{display:"block"},as:i.as,"as-child":i.asChild,rounded:i.rounded,width:i.width,height:i.height}),{default:b(()=>[S(i.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),ri=ii,si=P({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const o=e;return H(),(t,n)=>(O(),k(m(ri),Pe(Se(o)),{default:b(()=>[S(t.$slots,"default")]),_:3},16))}}),li=si;const[st,ai]=ke("TooltipProvider");var ui=P({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(e){const o=e,{delayDuration:t,skipDelayDuration:n,disableHoverableContent:i,disableClosingTrigger:r,ignoreNonKeyboardFocus:s,disabled:l}=Ut(o);H();const u=E(!0),c=E(!1),{start:a,stop:d}=xt(()=>{u.value=!0},n,{immediate:!1});return ai({isOpenDelayed:u,delayDuration:t,onOpen(){d(),u.value=!1},onClose(){a()},isPointerInTransitRef:c,disableHoverableContent:i,disableClosingTrigger:r,disabled:l,ignoreNonKeyboardFocus:s}),(f,C)=>S(f.$slots,"default")}}),ci=ui;const kt="tooltip.open",[ze,di]=ke("TooltipRoot");var pi=P({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(e,{emit:o}){const t=e,n=o;H();const i=st(),r=x(()=>t.disableHoverableContent??i.disableHoverableContent.value),s=x(()=>t.disableClosingTrigger??i.disableClosingTrigger.value),l=x(()=>t.disabled??i.disabled.value),u=x(()=>t.delayDuration??i.delayDuration.value),c=x(()=>t.ignoreNonKeyboardFocus??i.ignoreNonKeyboardFocus.value),a=fo(t,"open",n,{defaultValue:t.defaultOpen,passive:t.open===void 0});Re(a,y=>{i.onClose&&(y?(i.onOpen(),document.dispatchEvent(new CustomEvent(kt))):i.onClose())});const d=E(!1),f=E(),C=x(()=>a.value?d.value?"delayed-open":"instant-open":"closed"),{start:p,stop:g}=xt(()=>{d.value=!0,a.value=!0},u,{immediate:!1});function v(){g(),d.value=!1,a.value=!0}function h(){g(),a.value=!1}function T(){p()}return di({contentId:"",open:a,stateAttribute:C,trigger:f,onTriggerChange(y){f.value=y},onTriggerEnter(){i.isOpenDelayed.value?T():v()},onTriggerLeave(){r.value?h():g()},onOpen:v,onClose:h,disableHoverableContent:r,disableClosingTrigger:s,disabled:l,ignoreNonKeyboardFocus:c}),(y,w)=>(O(),k(m(Mo),null,{default:b(()=>[S(y.$slots,"default",{open:m(a)})]),_:3}))}}),fi=pi,Ci=P({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:o}){const t=e,n=o,i=ze(),{forwardRef:r}=H(),s=Gt(),l=x(()=>s.default?.({})),u=x(()=>{if(t.ariaLabel)return t.ariaLabel;let a="";function d(f){typeof f.children=="string"&&f.type!==Zt?a+=f.children:Array.isArray(f.children)&&f.children.forEach(C=>d(C))}return l.value?.forEach(f=>d(f)),a}),c=x(()=>{const{ariaLabel:a,...d}=t;return d});return Ge(()=>{lt(window,"scroll",a=>{a.target?.contains(i.trigger.value)&&i.onClose()}),lt(window,kt,i.onClose)}),(a,d)=>(O(),k(m(Fo),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[0]||(d[0]=f=>n("escapeKeyDown",f)),onPointerDownOutside:d[1]||(d[1]=f=>{m(i).disableClosingTrigger.value&&m(i).trigger.value?.contains(f.target)&&f.preventDefault(),n("pointerDownOutside",f)}),onFocusOutside:d[2]||(d[2]=eo(()=>{},["prevent"])),onDismiss:d[3]||(d[3]=f=>m(i).onClose())},{default:b(()=>[ne(m(oi),G({ref:m(r),"data-state":m(i).stateAttribute.value},{...a.$attrs,...c.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:b(()=>[S(a.$slots,"default"),ne(m(go),{id:m(i).contentId,role:"tooltip"},{default:b(()=>[Qt(Jt(u.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),It=Ci,gi=P({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(e){const t=Qe(e),{forwardRef:n,currentElement:i}=H(),{trigger:r,onClose:s}=ze(),l=st(),{isPointerInTransit:u,onPointerExit:c}=Bo(r,i);return l.isPointerInTransitRef=u,c(()=>{s()}),(a,d)=>(O(),k(It,G({ref:m(n)},m(t)),{default:b(()=>[S(a.$slots,"default")]),_:3},16))}}),mi=gi,vi=P({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:o}){const t=e,n=o,i=ze(),r=Dt(t,n),{forwardRef:s}=H();return(l,u)=>(O(),k(m(Co),{present:l.forceMount||m(i).open.value},{default:b(()=>[(O(),k(to(m(i).disableHoverableContent.value?It:mi),G({ref:m(s)},m(r)),{default:b(()=>[S(l.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),hi=vi,yi=P({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const o=e;return(t,n)=>(O(),k(m(Io),Pe(Se(o)),{default:b(()=>[S(t.$slots,"default")]),_:3},16))}}),Ti=yi,xi=P({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const o=e,t=ze(),n=st();t.contentId||=mo(void 0,"reka-tooltip-content");const{forwardRef:i,currentElement:r}=H(),s=E(!1),l=E(!1),u=x(()=>t.disabled.value?{}:{click:g,focus:C,pointermove:d,pointerleave:f,pointerdown:a,blur:p});Ge(()=>{t.onTriggerChange(r.value)});function c(){setTimeout(()=>{s.value=!1},1)}function a(){t.open&&!t.disableClosingTrigger.value&&t.onClose(),s.value=!0,document.addEventListener("pointerup",c,{once:!0})}function d(v){v.pointerType!=="touch"&&!l.value&&!n.isPointerInTransitRef.value&&(t.onTriggerEnter(),l.value=!0)}function f(){t.onTriggerLeave(),l.value=!1}function C(v){s.value||t.ignoreNonKeyboardFocus.value&&!v.target.matches?.(":focus-visible")||t.onOpen()}function p(){t.onClose()}function g(){t.disableClosingTrigger.value||t.onClose()}return(v,h)=>(O(),k(m(Ho),{"as-child":"",reference:v.reference},{default:b(()=>[ne(m(Te),G({ref:m(i),"aria-describedby":m(t).open.value?m(t).contentId:void 0,"data-state":m(t).stateAttribute.value,as:v.as,"as-child":o.asChild,"data-grace-area-trigger":""},oo(u.value)),{default:b(()=>[S(v.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),Bi=xi;const ue=P({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{default:0},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean},skipDelayDuration:{}},emits:["update:open"],setup(e,{emit:o}){const t=e,n=Ve(t,"open","defaultOpen"),i=Ve(t,"delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus","skipDelayDuration"),s=Dt(i,o);return(l,u)=>(O(),k(m(ci),Pe(Se(m(n))),{default:b(()=>[ne(m(fi),G({"data-slot":"tooltip"},m(s)),{default:b(c=>[S(l.$slots,"default",Pe(Se(c)))]),_:3},16)]),_:3},16))}});ue.__docgenInfo={exportName:"default",displayName:"TooltipRoot",description:"",tags:{},props:[{name:"delayDuration",defaultValue:{func:!1,value:"0"}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipRoot.vue"]};const ge=P({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(e){const o=e;return(t,n)=>(O(),k(m(Bi),G({"data-slot":"tooltip-trigger"},o),{default:b(()=>[S(t.$slots,"default")]),_:3},16))}});ge.__docgenInfo={exportName:"default",displayName:"TooltipTrigger",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipTrigger.vue"]};const Di=io(["animate-in z-tooltip bg-gray-0 w-fit rounded-md border-transparent p-3 text-xs text-white","fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]),me=P({inheritAttrs:!1,__name:"TooltipContent",props:{class:{default:""},forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(e){const o=e,t=Ve(o,"class"),n=Qe(t),i=x(()=>no(Di(),o.class));return(r,s)=>(O(),k(m(Ti),null,{default:b(()=>[ne(m(hi),G({"data-slot":"tooltip-content"},{...m(n),...r.$attrs},{class:i.value}),{default:b(()=>[S(r.$slots,"default"),ne(m(li),{class:"z-tooltip size-1.5 w-3.5 rounded-xs"})]),_:3},16,["class"])]),_:3}))}});me.__docgenInfo={exportName:"default",displayName:"TooltipContent",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sideOffset",defaultValue:{func:!1,value:"4"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipContent.vue"]};const Pi={title:"Shared/UI/Tooltip",component:ue,parameters:{layout:"centered",docs:{description:{component:`
### 추가 정보를 제공하는 툴팁 컴포넌트

툴팁 컴포넌트는 사용자가 요소에 마우스를 올리거나 포커스할 때 추가 정보를 표시하는 데 사용됩니다.

## 주요 기능

- **다양한 위치**: \`top\`, \`bottom\`, \`left\`, \`right\` 네 가지 위치 지원
- **자동 위치 조정**: 화면 밖으로 나가지 않도록 자동으로 위치 조정
- **애니메이션**: 부드러운 페이드 인/아웃 애니메이션
- **지연 시간 설정**: \`delayDuration\`으로 표시 지연 시간 조정 가능
- **접근성 지원**: 키보드 포커스 시에도 툴팁 표시

## 사용 예시

\`\`\`vue
<TooltipRoot  >
  <TooltipTrigger>
    <Button>호버하세요</Button>
  </TooltipTrigger>
  <TooltipContent>
    이것은 툴팁 메시지입니다
  </TooltipContent>
</TooltipRoot>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},we={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
        `}}},args:{defaultOpen:!1},render:e=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:me,Button:xe},setup(){return{args:e}},template:`
      <TooltipRoot v-bind="args">
        <TooltipTrigger>
          <Button>호버하세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          이것은 툴팁 메시지입니다
        </TooltipContent>
      </TooltipRoot>
    `})},be={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:me,Button:xe},template:`
      <div class="flex flex-col gap-12 items-center justify-center p-20">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700 text-center">Top</h3>
          <TooltipRoot>
            <TooltipTrigger>
              <Button>위쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              위쪽에 표시되는 툴팁입니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex gap-12 items-center">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700 text-center">Left</h3>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>왼쪽 툴팁</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                왼쪽에 표시되는 툴팁입니다
              </TooltipContent>
            </TooltipRoot>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700 text-center">Right</h3>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>오른쪽 툴팁</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                오른쪽에 표시되는 툴팁입니다
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700 text-center">Bottom</h3>
          <TooltipRoot>
            <TooltipTrigger>
              <Button>아래쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              아래쪽에 표시되는 툴팁입니다
            </TooltipContent>
          </TooltipRoot>
        </div>
      </div>
    `})},Ae={parameters:{docs:{description:{story:`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:me,Button:xe},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">긴 텍스트 툴팁</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>긴 메시지 (줄바꿈 X)</Button>
              </TooltipTrigger>
              <TooltipContent>
                이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다.
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>매우 긴 메시지 (줄바꿈 O)</Button>
              </TooltipTrigger>
              <TooltipContent>
                이것은 정말로 매우 긴 툴팁 메시지입니다. <br />여러 줄에 걸쳐 표시되며, 사용자에게 상세한 정보를 제공할 수 있습니다.<br /> br 태그를 사용하여 줄바꿈을 할 수 있습니다.
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
      </div>
    `})},_e={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:me,Button:xe},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">지연 시간 없음 (0ms)</h3>
          <TooltipRoot :delayDuration="0">
            <TooltipTrigger>
              <Button>즉시 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올리면 즉시 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">500ms 지연</h3>
          <TooltipRoot :delayDuration="500">
            <TooltipTrigger>
              <Button>0.5초 후 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올린 후 0.5초 후에 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">1000ms 지연</h3>
          <TooltipRoot :delayDuration="1000">
            <TooltipTrigger>
              <Button>1초 후 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올린 후 1초 후에 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
      </div>
    `})},Ee={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
툴팁 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:me,Button:xe,CheckCircleIcon:To,AlertCircleIcon:yo,XCircleIcon:ho,InfoIcon:ro,StarIcon:vo},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 텍스트</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>성공 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <CheckCircleIcon class="size-4" />
                  <span>작업이 성공적으로 완료되었습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button color="warning">경고 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <AlertCircleIcon class="size-4" />
                  <span>주의가 필요한 작업입니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button color="danger">에러 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <XCircleIcon class="size-4" />
                  <span>오류가 발생했습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스타일이 적용된 텍스트</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>강조 텍스트</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <span class="font-bold">중요한 정보</span>
                  <span class="text-xs opacity-80">이것은 추가 설명입니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>여러 줄 텍스트</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <span class="font-semibold">제목 텍스트</span>
                  <span class="text-xs">본문 텍스트가 여기에 표시됩니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 스타일 조합</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>
                  <StarIcon class="size-4" />
                  <span>인기 항목</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <StarIcon class="size-4 fill-yellow-400 text-yellow-400" />
                  <div class="flex flex-col">
                    <span class="font-semibold">인기 항목</span>
                    <span class="text-xs opacity-80">많은 사용자가 선택한 항목입니다</span>
                  </div>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>
                  <InfoIcon class="size-4" />
                  <span>정보</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-start gap-2">
                  <InfoIcon class="size-4 mt-0.5" />
                  <div class="flex flex-col gap-1">
                    <span class="font-semibold">추가 정보</span>
                    <span class="text-xs opacity-80">이 기능에 대한 상세한 설명이 여기에 표시됩니다</span>
                  </div>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">복합 컨텐츠</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>상태 정보</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <CheckCircleIcon class="size-4 text-green-500" />
                    <span class="font-semibold">온라인</span>
                  </div>
                  <span class="text-xs opacity-80">마지막 접속: 5분 전</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>알림 정보</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2">
                    <AlertCircleIcon class="size-4 text-yellow-500" />
                    <span class="font-semibold">새 알림</span>
                  </div>
                  <span class="text-xs opacity-80">3개의 읽지 않은 메시지가 있습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
      </div>
    `})};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
        \`
      }
    }
  },
  args: {
    defaultOpen: false
  },
  render: args => ({
    components: {
      TooltipRoot,
      TooltipTrigger,
      TooltipContent,
      Button
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: \`
      <TooltipRoot v-bind="args">
        <TooltipTrigger>
          <Button>호버하세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          이것은 툴팁 메시지입니다
        </TooltipContent>
      </TooltipRoot>
    \`
  })
}`,...we.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      TooltipRoot,
      TooltipTrigger,
      TooltipContent,
      Button
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-12 items-center justify-center p-20">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700 text-center">Top</h3>
          <TooltipRoot>
            <TooltipTrigger>
              <Button>위쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              위쪽에 표시되는 툴팁입니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex gap-12 items-center">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700 text-center">Left</h3>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>왼쪽 툴팁</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                왼쪽에 표시되는 툴팁입니다
              </TooltipContent>
            </TooltipRoot>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700 text-center">Right</h3>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>오른쪽 툴팁</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                오른쪽에 표시되는 툴팁입니다
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700 text-center">Bottom</h3>
          <TooltipRoot>
            <TooltipTrigger>
              <Button>아래쪽 툴팁</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">
              아래쪽에 표시되는 툴팁입니다
            </TooltipContent>
          </TooltipRoot>
        </div>
      </div>
    \`
  })
}`,...be.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      TooltipRoot,
      TooltipTrigger,
      TooltipContent,
      Button
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">긴 텍스트 툴팁</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>긴 메시지 (줄바꿈 X)</Button>
              </TooltipTrigger>
              <TooltipContent>
                이것은 매우 긴 툴팁 메시지입니다. 툴팁이 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다.
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>매우 긴 메시지 (줄바꿈 O)</Button>
              </TooltipTrigger>
              <TooltipContent>
                이것은 정말로 매우 긴 툴팁 메시지입니다. <br />여러 줄에 걸쳐 표시되며, 사용자에게 상세한 정보를 제공할 수 있습니다.<br /> br 태그를 사용하여 줄바꿈을 할 수 있습니다.
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
      </div>
    \`
  })
}`,...Ae.parameters?.docs?.source}}};_e.parameters={..._e.parameters,docs:{..._e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`delayDuration\\\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정할 수 있습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      TooltipRoot,
      TooltipTrigger,
      TooltipContent,
      Button
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">지연 시간 없음 (0ms)</h3>
          <TooltipRoot :delayDuration="0">
            <TooltipTrigger>
              <Button>즉시 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올리면 즉시 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">500ms 지연</h3>
          <TooltipRoot :delayDuration="500">
            <TooltipTrigger>
              <Button>0.5초 후 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올린 후 0.5초 후에 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">1000ms 지연</h3>
          <TooltipRoot :delayDuration="1000">
            <TooltipTrigger>
              <Button>1초 후 표시</Button>
            </TooltipTrigger>
            <TooltipContent>
              마우스를 올린 후 1초 후에 표시됩니다
            </TooltipContent>
          </TooltipRoot>
        </div>
      </div>
    \`
  })
}`,..._e.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
툴팁 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      TooltipRoot,
      TooltipTrigger,
      TooltipContent,
      Button,
      CheckCircleIcon,
      AlertCircleIcon,
      XCircleIcon,
      InfoIcon,
      StarIcon
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 텍스트</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>성공 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <CheckCircleIcon class="size-4" />
                  <span>작업이 성공적으로 완료되었습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button color="warning">경고 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <AlertCircleIcon class="size-4" />
                  <span>주의가 필요한 작업입니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button color="danger">에러 상태</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <XCircleIcon class="size-4" />
                  <span>오류가 발생했습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스타일이 적용된 텍스트</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>강조 텍스트</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <span class="font-bold">중요한 정보</span>
                  <span class="text-xs opacity-80">이것은 추가 설명입니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>여러 줄 텍스트</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <span class="font-semibold">제목 텍스트</span>
                  <span class="text-xs">본문 텍스트가 여기에 표시됩니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 스타일 조합</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>
                  <StarIcon class="size-4" />
                  <span>인기 항목</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-center gap-2">
                  <StarIcon class="size-4 fill-yellow-400 text-yellow-400" />
                  <div class="flex flex-col">
                    <span class="font-semibold">인기 항목</span>
                    <span class="text-xs opacity-80">많은 사용자가 선택한 항목입니다</span>
                  </div>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>
                  <InfoIcon class="size-4" />
                  <span>정보</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex items-start gap-2">
                  <InfoIcon class="size-4 mt-0.5" />
                  <div class="flex flex-col gap-1">
                    <span class="font-semibold">추가 정보</span>
                    <span class="text-xs opacity-80">이 기능에 대한 상세한 설명이 여기에 표시됩니다</span>
                  </div>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">복합 컨텐츠</h3>
          <div class="flex flex-wrap gap-4">
            <TooltipRoot>
              <TooltipTrigger>
                <Button>상태 정보</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-2">
                  <div class="flex items-center gap-2">
                    <CheckCircleIcon class="size-4 text-green-500" />
                    <span class="font-semibold">온라인</span>
                  </div>
                  <span class="text-xs opacity-80">마지막 접속: 5분 전</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
            <TooltipRoot>
              <TooltipTrigger>
                <Button>알림 정보</Button>
              </TooltipTrigger>
              <TooltipContent>
                <div class="flex flex-col gap-1">
                  <div class="flex items-center gap-2">
                    <AlertCircleIcon class="size-4 text-yellow-500" />
                    <span class="font-semibold">새 알림</span>
                  </div>
                  <span class="text-xs opacity-80">3개의 읽지 않은 메시지가 있습니다</span>
                </div>
              </TooltipContent>
            </TooltipRoot>
          </div>
        </div>
      </div>
    \`
  })
}`,...Ee.parameters?.docs?.source}}};const Si=["Playground","Positions","LongText","DelayDuration","WithRichContent"];export{_e as DelayDuration,Ae as LongText,we as Playground,be as Positions,Ee as WithRichContent,Si as __namedExportsOrder,Pi as default};
