import{V as Mt,W as Vt,X as $t,e as x,r as R,w as re,q as Ge,i as Ce,z as We,d as P,Y as zt,v as F,o as O,x as D,h as k,u as h,N as Ze,B as Wt,Z as Ht,$ as vt,c as Oe,A as G,M as jt,l as _e,a0 as ce,a1 as Kt,a2 as Xt,a3 as Yt,y as oe,R as Pe,S as ke,Q as Ut,a4 as Gt,a5 as Zt,K as Qt,t as Jt,E as en,G as tn,a6 as nn,f as on,g as an,I as rn}from"./iframe-DpPrTmbX.js";import{u as Qe,r as He}from"./index-DRAGzOk7.js";import{r as sn,h as ln,u as un,i as bt,a as z,o as cn,P as be,j as dn,c as Fe,k as pn,l as xt,b as fn,m as st,d as mn}from"./Primitive-DMMdufjF.js";import{V as gn,u as hn}from"./VisuallyHidden-D7vvitiG.js";import{_ as xe}from"./Button-bP0CTm-1.js";import{S as Cn,a as yn,C as vn,b as bn}from"./star-B6VtJd_8.js";import"./preload-helper-PPVm8Dsz.js";function Tt(e,n,t){const o=t.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:t});n&&o.addEventListener(e,n,{once:!0}),o.dispatchEvent(i)}function xn(e){const n=Mt(),t=n?.type.emits,o={};return t?.length||console.warn(`No emitted event found. Please check component: ${n?.type.__name}`),t?.forEach(i=>{o[Vt($t(i))]=(...a)=>e(i,...a)}),o}function wt(e,n){const t=Qe(e),o=n?xn(n):{};return x(()=>({...t.value,...o}))}function Tn(e,n){const t=sn(!1,300),o=R(null),i=ln();function a(){o.value=null,t.value=!1}function r(s,u){const c=s.currentTarget,l={x:s.clientX,y:s.clientY},d=wn(l,c.getBoundingClientRect()),f=Bn(l,d),m=Dn(u.getBoundingClientRect()),p=En([...f,...m]);o.value=p,t.value=!0}return re(s=>{if(e.value&&n.value){const u=l=>r(l,n.value),c=l=>r(l,e.value);e.value.addEventListener("pointerleave",u),n.value.addEventListener("pointerleave",c),s(()=>{e.value?.removeEventListener("pointerleave",u),n.value?.removeEventListener("pointerleave",c)})}}),re(s=>{if(o.value){const u=c=>{if(!o.value||!(c.target instanceof Element))return;const l=c.target,d={x:c.clientX,y:c.clientY},f=e.value?.contains(l)||n.value?.contains(l),m=!An(d,o.value),p=!!l.closest("[data-grace-area-trigger]");f?a():(m||p)&&(a(),i.trigger())};e.value?.ownerDocument.addEventListener("pointermove",u),s(()=>e.value?.ownerDocument.removeEventListener("pointermove",u))}}),{isPointerInTransit:t,onPointerExit:i.on}}function wn(e,n){const t=Math.abs(n.top-e.y),o=Math.abs(n.bottom-e.y),i=Math.abs(n.right-e.x),a=Math.abs(n.left-e.x);switch(Math.min(t,o,i,a)){case a:return"left";case i:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function Bn(e,n,t=5){const o=[];switch(n){case"top":o.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":o.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":o.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":o.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return o}function Dn(e){const{top:n,right:t,bottom:o,left:i}=e;return[{x:i,y:n},{x:t,y:n},{x:t,y:o},{x:i,y:o}]}function An(e,n){const{x:t,y:o}=e;let i=!1;for(let a=0,r=n.length-1;a<n.length;r=a++){const s=n[a].x,u=n[a].y,c=n[r].x,l=n[r].y;u>o!=l>o&&t<(c-s)*(o-u)/(l-u)+s&&(i=!i)}return i}function En(e){const n=e.slice();return n.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),Rn(n)}function Rn(e){if(e.length<=1)return e.slice();const n=[];for(let o=0;o<e.length;o++){const i=e[o];for(;n.length>=2;){const a=n[n.length-1],r=n[n.length-2];if((a.x-r.x)*(i.y-r.y)>=(a.y-r.y)*(i.x-r.x))n.pop();else break}n.push(i)}n.pop();const t=[];for(let o=e.length-1;o>=0;o--){const i=e[o];for(;t.length>=2;){const a=t[t.length-1],r=t[t.length-2];if((a.x-r.x)*(i.y-r.y)>=(a.y-r.y)*(i.x-r.x))t.pop();else break}t.push(i)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}function _n(e){const n=R(),t=x(()=>n.value?.width??0),o=x(()=>n.value?.height??0);return Ge(()=>{const i=un(e);if(i){n.value={width:i.offsetWidth,height:i.offsetHeight};const a=new ResizeObserver(r=>{if(!Array.isArray(r)||!r.length)return;const s=r[0];let u,c;if("borderBoxSize"in s){const l=s.borderBoxSize,d=Array.isArray(l)?l[0]:l;u=d.inlineSize,c=d.blockSize}else u=i.offsetWidth,c=i.offsetHeight;n.value={width:u,height:c}});return a.observe(i,{box:"border-box"}),()=>a.unobserve(i)}else n.value=void 0}),{width:t,height:o}}const On="dismissableLayer.pointerDownOutside",Pn="dismissableLayer.focusOutside";function Bt(e,n){const t=n.closest("[data-dismissable-layer]"),o=e.dataset.dismissableLayer===""?e:e.querySelector("[data-dismissable-layer]"),i=Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));return!!(t&&(o===t||i.indexOf(o)<i.indexOf(t)))}function kn(e,n,t=!0){const o=n?.value?.ownerDocument??globalThis?.document,i=R(!1),a=R(()=>{});return re(r=>{if(!bt||!Ce(t))return;const s=async c=>{const l=c.target;if(!(!n?.value||!l)){if(Bt(n.value,l)){i.value=!1;return}if(c.target&&!i.value){let f=function(){Tt(On,e,d)};const d={originalEvent:c};c.pointerType==="touch"?(o.removeEventListener("click",a.value),a.value=f,o.addEventListener("click",a.value,{once:!0})):f()}else o.removeEventListener("click",a.value);i.value=!1}},u=window.setTimeout(()=>{o.addEventListener("pointerdown",s)},0);r(()=>{window.clearTimeout(u),o.removeEventListener("pointerdown",s),o.removeEventListener("click",a.value)})}),{onPointerDownCapture:()=>{Ce(t)&&(i.value=!0)}}}function qn(e,n,t=!0){const o=n?.value?.ownerDocument??globalThis?.document,i=R(!1);return re(a=>{if(!bt||!Ce(t))return;const r=async s=>{if(!n?.value)return;await We(),await We();const u=s.target;!n.value||!u||Bt(n.value,u)||s.target&&!i.value&&Tt(Pn,e,{originalEvent:s})};o.addEventListener("focusin",r),a(()=>o.removeEventListener("focusin",r))}),{onFocusCapture:()=>{Ce(t)&&(i.value=!0)},onBlurCapture:()=>{Ce(t)&&(i.value=!1)}}}const J=zt({layersRoot:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set});var Sn=P({__name:"DismissableLayer",props:{disableOutsidePointerEvents:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","dismiss"],setup(e,{emit:n}){const t=e,o=n,{forwardRef:i,currentElement:a}=z(),r=x(()=>a.value?.ownerDocument??globalThis.document),s=x(()=>J.layersRoot),u=x(()=>a.value?Array.from(s.value).indexOf(a.value):-1),c=x(()=>J.layersWithOutsidePointerEventsDisabled.size>0),l=x(()=>{const p=Array.from(s.value),[g]=[...J.layersWithOutsidePointerEventsDisabled].slice(-1),C=p.indexOf(g);return u.value>=C}),d=kn(async p=>{const g=[...J.branches].some(C=>C?.contains(p.target));!l.value||g||(o("pointerDownOutside",p),o("interactOutside",p),await We(),p.defaultPrevented||o("dismiss"))},a),f=qn(p=>{[...J.branches].some(C=>C?.contains(p.target))||(o("focusOutside",p),o("interactOutside",p),p.defaultPrevented||o("dismiss"))},a);cn("Escape",p=>{u.value===s.value.size-1&&(o("escapeKeyDown",p),p.defaultPrevented||o("dismiss"))});let m;return re(p=>{a.value&&(t.disableOutsidePointerEvents&&(J.layersWithOutsidePointerEventsDisabled.size===0&&(m=r.value.body.style.pointerEvents,r.value.body.style.pointerEvents="none"),J.layersWithOutsidePointerEventsDisabled.add(a.value)),s.value.add(a.value),p(()=>{t.disableOutsidePointerEvents&&J.layersWithOutsidePointerEventsDisabled.size===1&&(r.value.body.style.pointerEvents=m)}))}),re(p=>{p(()=>{a.value&&(s.value.delete(a.value),J.layersWithOutsidePointerEventsDisabled.delete(a.value))})}),(p,g)=>(O(),F(h(be),{ref:h(i),"as-child":p.asChild,as:p.as,"data-dismissable-layer":"",style:Ze({pointerEvents:c.value?l.value?"auto":"none":void 0}),onFocusCapture:h(f).onFocusCapture,onBlurCapture:h(f).onBlurCapture,onPointerdownCapture:h(d).onPointerDownCapture},{default:D(()=>[k(p.$slots,"default")]),_:3},8,["as-child","as","style","onFocusCapture","onBlurCapture","onPointerdownCapture"]))}}),Ln=Sn,Fn=P({__name:"Teleport",props:{to:{type:null,required:!1,default:"body"},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const n=dn();return(t,o)=>h(n)||t.forceMount?(O(),F(Ht,{key:0,to:t.to,disabled:t.disabled,defer:t.defer},[k(t.$slots,"default")],8,["to","disabled","defer"])):Wt("v-if",!0)}}),In=Fn;const[Dt,Nn]=Fe("PopperRoot");var Mn=P({inheritAttrs:!1,__name:"PopperRoot",setup(e){const n=R();return Nn({anchor:n,onAnchorChange:t=>n.value=t}),(t,o)=>k(t.$slots,"default")}}),Vn=Mn,$n=P({__name:"PopperAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const n=e,{forwardRef:t,currentElement:o}=z(),i=Dt();return vt(()=>{i.onAnchorChange(n.reference??o.value)}),(a,r)=>(O(),F(h(be),{ref:h(t),as:a.as,"as-child":a.asChild},{default:D(()=>[k(a.$slots,"default")]),_:3},8,["as","as-child"]))}}),zn=$n;const Wn={key:0,d:"M0 0L6 6L12 0"},Hn={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var jn=P({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const n=e;return z(),(t,o)=>(O(),F(h(be),G(n,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:D(()=>[k(t.$slots,"default",{},()=>[t.rounded?(O(),Oe("path",Hn)):(O(),Oe("path",Wn))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),Kn=jn;function Xn(e){return e!==null}function Yn(e){return{name:"transformOrigin",options:e,fn(n){const{placement:t,rects:o,middlewareData:i}=n,r=i.arrow?.centerOffset!==0,s=r?0:e.arrowWidth,u=r?0:e.arrowHeight,[c,l]=je(t),d={start:"0%",center:"50%",end:"100%"}[l],f=(i.arrow?.x??0)+s/2,m=(i.arrow?.y??0)+u/2;let p="",g="";return c==="bottom"?(p=r?d:`${f}px`,g=`${-u}px`):c==="top"?(p=r?d:`${f}px`,g=`${o.floating.height+u}px`):c==="right"?(p=`${-u}px`,g=r?d:`${m}px`):c==="left"&&(p=`${o.floating.width+u}px`,g=r?d:`${m}px`),{data:{x:p,y:g}}}}}function je(e){const[n,t="center"]=e.split("-");return[n,t]}const Un=["top","right","bottom","left"],ie=Math.min,M=Math.max,qe=Math.round,we=Math.floor,Y=e=>({x:e,y:e}),Gn={left:"right",right:"left",bottom:"top",top:"bottom"},Zn={start:"end",end:"start"};function Ke(e,n,t){return M(e,ie(n,t))}function ee(e,n){return typeof e=="function"?e(n):e}function te(e){return e.split("-")[0]}function me(e){return e.split("-")[1]}function Je(e){return e==="x"?"y":"x"}function et(e){return e==="y"?"height":"width"}const Qn=new Set(["top","bottom"]);function X(e){return Qn.has(te(e))?"y":"x"}function tt(e){return Je(X(e))}function Jn(e,n,t){t===void 0&&(t=!1);const o=me(e),i=tt(e),a=et(i);let r=i==="x"?o===(t?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[a]>n.floating[a]&&(r=Se(r)),[r,Se(r)]}function eo(e){const n=Se(e);return[Xe(e),n,Xe(n)]}function Xe(e){return e.replace(/start|end/g,n=>Zn[n])}const lt=["left","right"],ut=["right","left"],to=["top","bottom"],no=["bottom","top"];function oo(e,n,t){switch(e){case"top":case"bottom":return t?n?ut:lt:n?lt:ut;case"left":case"right":return n?to:no;default:return[]}}function io(e,n,t,o){const i=me(e);let a=oo(te(e),t==="start",o);return i&&(a=a.map(r=>r+"-"+i),n&&(a=a.concat(a.map(Xe)))),a}function Se(e){return e.replace(/left|right|bottom|top/g,n=>Gn[n])}function ao(e){return{top:0,right:0,bottom:0,left:0,...e}}function At(e){return typeof e!="number"?ao(e):{top:e,right:e,bottom:e,left:e}}function Le(e){const{x:n,y:t,width:o,height:i}=e;return{width:o,height:i,top:t,left:n,right:n+o,bottom:t+i,x:n,y:t}}function ct(e,n,t){let{reference:o,floating:i}=e;const a=X(n),r=tt(n),s=et(r),u=te(n),c=a==="y",l=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,f=o[s]/2-i[s]/2;let m;switch(u){case"top":m={x:l,y:o.y-i.height};break;case"bottom":m={x:l,y:o.y+o.height};break;case"right":m={x:o.x+o.width,y:d};break;case"left":m={x:o.x-i.width,y:d};break;default:m={x:o.x,y:o.y}}switch(me(n)){case"start":m[r]-=f*(t&&c?-1:1);break;case"end":m[r]+=f*(t&&c?-1:1);break}return m}const ro=async(e,n,t)=>{const{placement:o="bottom",strategy:i="absolute",middleware:a=[],platform:r}=t,s=a.filter(Boolean),u=await(r.isRTL==null?void 0:r.isRTL(n));let c=await r.getElementRects({reference:e,floating:n,strategy:i}),{x:l,y:d}=ct(c,o,u),f=o,m={},p=0;for(let g=0;g<s.length;g++){const{name:C,fn:y}=s[g],{x:b,y:v,data:B,reset:T}=await y({x:l,y:d,initialPlacement:o,placement:f,strategy:i,middlewareData:m,rects:c,platform:r,elements:{reference:e,floating:n}});l=b??l,d=v??d,m={...m,[C]:{...m[C],...B}},T&&p<=50&&(p++,typeof T=="object"&&(T.placement&&(f=T.placement),T.rects&&(c=T.rects===!0?await r.getElementRects({reference:e,floating:n,strategy:i}):T.rects),{x:l,y:d}=ct(c,f,u)),g=-1)}return{x:l,y:d,placement:f,strategy:i,middlewareData:m}};async function ye(e,n){var t;n===void 0&&(n={});const{x:o,y:i,platform:a,rects:r,elements:s,strategy:u}=e,{boundary:c="clippingAncestors",rootBoundary:l="viewport",elementContext:d="floating",altBoundary:f=!1,padding:m=0}=ee(n,e),p=At(m),C=s[f?d==="floating"?"reference":"floating":d],y=Le(await a.getClippingRect({element:(t=await(a.isElement==null?void 0:a.isElement(C)))==null||t?C:C.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(s.floating)),boundary:c,rootBoundary:l,strategy:u})),b=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(a.getOffsetParent==null?void 0:a.getOffsetParent(s.floating)),B=await(a.isElement==null?void 0:a.isElement(v))?await(a.getScale==null?void 0:a.getScale(v))||{x:1,y:1}:{x:1,y:1},T=Le(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:b,offsetParent:v,strategy:u}):b);return{top:(y.top-T.top+p.top)/B.y,bottom:(T.bottom-y.bottom+p.bottom)/B.y,left:(y.left-T.left+p.left)/B.x,right:(T.right-y.right+p.right)/B.x}}const so=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:o,placement:i,rects:a,platform:r,elements:s,middlewareData:u}=n,{element:c,padding:l=0}=ee(e,n)||{};if(c==null)return{};const d=At(l),f={x:t,y:o},m=tt(i),p=et(m),g=await r.getDimensions(c),C=m==="y",y=C?"top":"left",b=C?"bottom":"right",v=C?"clientHeight":"clientWidth",B=a.reference[p]+a.reference[m]-f[m]-a.floating[p],T=f[m]-a.reference[m],_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c));let w=_?_[v]:0;(!w||!await(r.isElement==null?void 0:r.isElement(_)))&&(w=s.floating[v]||a.floating[p]);const A=B/2-T/2,S=w/2-g[p]/2-1,I=ie(d[y],S),K=ie(d[b],S),E=I,$=w-g[p]-K,q=w/2-g[p]/2+A,Q=Ke(E,q,$),W=!u.arrow&&me(i)!=null&&q!==Q&&a.reference[p]/2-(q<E?I:K)-g[p]/2<0,N=W?q<E?q-E:q-$:0;return{[m]:f[m]+N,data:{[m]:Q,centerOffset:q-Q-N,...W&&{alignmentOffset:N}},reset:W}}}),lo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,o;const{placement:i,middlewareData:a,rects:r,initialPlacement:s,platform:u,elements:c}=n,{mainAxis:l=!0,crossAxis:d=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:p="none",flipAlignment:g=!0,...C}=ee(e,n);if((t=a.arrow)!=null&&t.alignmentOffset)return{};const y=te(i),b=X(s),v=te(s)===s,B=await(u.isRTL==null?void 0:u.isRTL(c.floating)),T=f||(v||!g?[Se(s)]:eo(s)),_=p!=="none";!f&&_&&T.push(...io(s,g,p,B));const w=[s,...T],A=await ye(n,C),S=[];let I=((o=a.flip)==null?void 0:o.overflows)||[];if(l&&S.push(A[y]),d){const q=Jn(i,r,B);S.push(A[q[0]],A[q[1]])}if(I=[...I,{placement:i,overflows:S}],!S.every(q=>q<=0)){var K,E;const q=(((K=a.flip)==null?void 0:K.index)||0)+1,Q=w[q];if(Q&&(!(d==="alignment"?b!==X(Q):!1)||I.every(L=>X(L.placement)===b?L.overflows[0]>0:!0)))return{data:{index:q,overflows:I},reset:{placement:Q}};let W=(E=I.filter(N=>N.overflows[0]<=0).sort((N,L)=>N.overflows[1]-L.overflows[1])[0])==null?void 0:E.placement;if(!W)switch(m){case"bestFit":{var $;const N=($=I.filter(L=>{if(_){const ne=X(L.placement);return ne===b||ne==="y"}return!0}).map(L=>[L.placement,L.overflows.filter(ne=>ne>0).reduce((ne,Nt)=>ne+Nt,0)]).sort((L,ne)=>L[1]-ne[1])[0])==null?void 0:$[0];N&&(W=N);break}case"initialPlacement":W=s;break}if(i!==W)return{reset:{placement:W}}}return{}}}};function dt(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function pt(e){return Un.some(n=>e[n]>=0)}const uo=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:o="referenceHidden",...i}=ee(e,n);switch(o){case"referenceHidden":{const a=await ye(n,{...i,elementContext:"reference"}),r=dt(a,t.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:pt(r)}}}case"escaped":{const a=await ye(n,{...i,altBoundary:!0}),r=dt(a,t.floating);return{data:{escapedOffsets:r,escaped:pt(r)}}}default:return{}}}}},Et=new Set(["left","top"]);async function co(e,n){const{placement:t,platform:o,elements:i}=e,a=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=te(t),s=me(t),u=X(t)==="y",c=Et.has(r)?-1:1,l=a&&u?-1:1,d=ee(n,e);let{mainAxis:f,crossAxis:m,alignmentAxis:p}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof p=="number"&&(m=s==="end"?p*-1:p),u?{x:m*l,y:f*c}:{x:f*c,y:m*l}}const po=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,o;const{x:i,y:a,placement:r,middlewareData:s}=n,u=await co(n,e);return r===((t=s.offset)==null?void 0:t.placement)&&(o=s.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:a+u.y,data:{...u,placement:r}}}}},fo=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:o,placement:i}=n,{mainAxis:a=!0,crossAxis:r=!1,limiter:s={fn:C=>{let{x:y,y:b}=C;return{x:y,y:b}}},...u}=ee(e,n),c={x:t,y:o},l=await ye(n,u),d=X(te(i)),f=Je(d);let m=c[f],p=c[d];if(a){const C=f==="y"?"top":"left",y=f==="y"?"bottom":"right",b=m+l[C],v=m-l[y];m=Ke(b,m,v)}if(r){const C=d==="y"?"top":"left",y=d==="y"?"bottom":"right",b=p+l[C],v=p-l[y];p=Ke(b,p,v)}const g=s.fn({...n,[f]:m,[d]:p});return{...g,data:{x:g.x-t,y:g.y-o,enabled:{[f]:a,[d]:r}}}}}},mo=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:o,placement:i,rects:a,middlewareData:r}=n,{offset:s=0,mainAxis:u=!0,crossAxis:c=!0}=ee(e,n),l={x:t,y:o},d=X(i),f=Je(d);let m=l[f],p=l[d];const g=ee(s,n),C=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const v=f==="y"?"height":"width",B=a.reference[f]-a.floating[v]+C.mainAxis,T=a.reference[f]+a.reference[v]-C.mainAxis;m<B?m=B:m>T&&(m=T)}if(c){var y,b;const v=f==="y"?"width":"height",B=Et.has(te(i)),T=a.reference[d]-a.floating[v]+(B&&((y=r.offset)==null?void 0:y[d])||0)+(B?0:C.crossAxis),_=a.reference[d]+a.reference[v]+(B?0:((b=r.offset)==null?void 0:b[d])||0)-(B?C.crossAxis:0);p<T?p=T:p>_&&(p=_)}return{[f]:m,[d]:p}}}},go=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,o;const{placement:i,rects:a,platform:r,elements:s}=n,{apply:u=()=>{},...c}=ee(e,n),l=await ye(n,c),d=te(i),f=me(i),m=X(i)==="y",{width:p,height:g}=a.floating;let C,y;d==="top"||d==="bottom"?(C=d,y=f===(await(r.isRTL==null?void 0:r.isRTL(s.floating))?"start":"end")?"left":"right"):(y=d,C=f==="end"?"top":"bottom");const b=g-l.top-l.bottom,v=p-l.left-l.right,B=ie(g-l[C],b),T=ie(p-l[y],v),_=!n.middlewareData.shift;let w=B,A=T;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(A=v),(o=n.middlewareData.shift)!=null&&o.enabled.y&&(w=b),_&&!f){const I=M(l.left,0),K=M(l.right,0),E=M(l.top,0),$=M(l.bottom,0);m?A=p-2*(I!==0||K!==0?I+K:M(l.left,l.right)):w=g-2*(E!==0||$!==0?E+$:M(l.top,l.bottom))}await u({...n,availableWidth:A,availableHeight:w});const S=await r.getDimensions(s.floating);return p!==S.width||g!==S.height?{reset:{rects:!0}}:{}}}};function Ie(){return typeof window<"u"}function le(e){return nt(e)?(e.nodeName||"").toLowerCase():"#document"}function V(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Z(e){var n;return(n=(nt(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function nt(e){return Ie()?e instanceof Node||e instanceof V(e).Node:!1}function H(e){return Ie()?e instanceof Element||e instanceof V(e).Element:!1}function U(e){return Ie()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function ft(e){return!Ie()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}const ho=new Set(["inline","contents"]);function Te(e){const{overflow:n,overflowX:t,overflowY:o,display:i}=j(e);return/auto|scroll|overlay|hidden|clip/.test(n+o+t)&&!ho.has(i)}const Co=new Set(["table","td","th"]);function yo(e){return Co.has(le(e))}const vo=[":popover-open",":modal"];function Ne(e){return vo.some(n=>{try{return e.matches(n)}catch{return!1}})}const bo=["transform","translate","scale","rotate","perspective"],xo=["transform","translate","scale","rotate","perspective","filter"],To=["paint","layout","strict","content"];function ot(e){const n=it(),t=H(e)?j(e):e;return bo.some(o=>t[o]?t[o]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||xo.some(o=>(t.willChange||"").includes(o))||To.some(o=>(t.contain||"").includes(o))}function wo(e){let n=ae(e);for(;U(n)&&!fe(n);){if(ot(n))return n;if(Ne(n))return null;n=ae(n)}return null}function it(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Bo=new Set(["html","body","#document"]);function fe(e){return Bo.has(le(e))}function j(e){return V(e).getComputedStyle(e)}function Me(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ae(e){if(le(e)==="html")return e;const n=e.assignedSlot||e.parentNode||ft(e)&&e.host||Z(e);return ft(n)?n.host:n}function Rt(e){const n=ae(e);return fe(n)?e.ownerDocument?e.ownerDocument.body:e.body:U(n)&&Te(n)?n:Rt(n)}function ve(e,n,t){var o;n===void 0&&(n=[]),t===void 0&&(t=!0);const i=Rt(e),a=i===((o=e.ownerDocument)==null?void 0:o.body),r=V(i);if(a){const s=Ye(r);return n.concat(r,r.visualViewport||[],Te(i)?i:[],s&&t?ve(s):[])}return n.concat(i,ve(i,[],t))}function Ye(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function _t(e){const n=j(e);let t=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=U(e),a=i?e.offsetWidth:t,r=i?e.offsetHeight:o,s=qe(t)!==a||qe(o)!==r;return s&&(t=a,o=r),{width:t,height:o,$:s}}function at(e){return H(e)?e:e.contextElement}function pe(e){const n=at(e);if(!U(n))return Y(1);const t=n.getBoundingClientRect(),{width:o,height:i,$:a}=_t(n);let r=(a?qe(t.width):t.width)/o,s=(a?qe(t.height):t.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!s||!Number.isFinite(s))&&(s=1),{x:r,y:s}}const Do=Y(0);function Ot(e){const n=V(e);return!it()||!n.visualViewport?Do:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function Ao(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==V(e)?!1:n}function se(e,n,t,o){n===void 0&&(n=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),a=at(e);let r=Y(1);n&&(o?H(o)&&(r=pe(o)):r=pe(e));const s=Ao(a,t,o)?Ot(a):Y(0);let u=(i.left+s.x)/r.x,c=(i.top+s.y)/r.y,l=i.width/r.x,d=i.height/r.y;if(a){const f=V(a),m=o&&H(o)?V(o):o;let p=f,g=Ye(p);for(;g&&o&&m!==p;){const C=pe(g),y=g.getBoundingClientRect(),b=j(g),v=y.left+(g.clientLeft+parseFloat(b.paddingLeft))*C.x,B=y.top+(g.clientTop+parseFloat(b.paddingTop))*C.y;u*=C.x,c*=C.y,l*=C.x,d*=C.y,u+=v,c+=B,p=V(g),g=Ye(p)}}return Le({width:l,height:d,x:u,y:c})}function Ve(e,n){const t=Me(e).scrollLeft;return n?n.left+t:se(Z(e)).left+t}function Pt(e,n){const t=e.getBoundingClientRect(),o=t.left+n.scrollLeft-Ve(e,t),i=t.top+n.scrollTop;return{x:o,y:i}}function Eo(e){let{elements:n,rect:t,offsetParent:o,strategy:i}=e;const a=i==="fixed",r=Z(o),s=n?Ne(n.floating):!1;if(o===r||s&&a)return t;let u={scrollLeft:0,scrollTop:0},c=Y(1);const l=Y(0),d=U(o);if((d||!d&&!a)&&((le(o)!=="body"||Te(r))&&(u=Me(o)),U(o))){const m=se(o);c=pe(o),l.x=m.x+o.clientLeft,l.y=m.y+o.clientTop}const f=r&&!d&&!a?Pt(r,u):Y(0);return{width:t.width*c.x,height:t.height*c.y,x:t.x*c.x-u.scrollLeft*c.x+l.x+f.x,y:t.y*c.y-u.scrollTop*c.y+l.y+f.y}}function Ro(e){return Array.from(e.getClientRects())}function _o(e){const n=Z(e),t=Me(e),o=e.ownerDocument.body,i=M(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),a=M(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let r=-t.scrollLeft+Ve(e);const s=-t.scrollTop;return j(o).direction==="rtl"&&(r+=M(n.clientWidth,o.clientWidth)-i),{width:i,height:a,x:r,y:s}}const mt=25;function Oo(e,n){const t=V(e),o=Z(e),i=t.visualViewport;let a=o.clientWidth,r=o.clientHeight,s=0,u=0;if(i){a=i.width,r=i.height;const l=it();(!l||l&&n==="fixed")&&(s=i.offsetLeft,u=i.offsetTop)}const c=Ve(o);if(c<=0){const l=o.ownerDocument,d=l.body,f=getComputedStyle(d),m=l.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,p=Math.abs(o.clientWidth-d.clientWidth-m);p<=mt&&(a-=p)}else c<=mt&&(a+=c);return{width:a,height:r,x:s,y:u}}const Po=new Set(["absolute","fixed"]);function ko(e,n){const t=se(e,!0,n==="fixed"),o=t.top+e.clientTop,i=t.left+e.clientLeft,a=U(e)?pe(e):Y(1),r=e.clientWidth*a.x,s=e.clientHeight*a.y,u=i*a.x,c=o*a.y;return{width:r,height:s,x:u,y:c}}function gt(e,n,t){let o;if(n==="viewport")o=Oo(e,t);else if(n==="document")o=_o(Z(e));else if(H(n))o=ko(n,t);else{const i=Ot(e);o={x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height}}return Le(o)}function kt(e,n){const t=ae(e);return t===n||!H(t)||fe(t)?!1:j(t).position==="fixed"||kt(t,n)}function qo(e,n){const t=n.get(e);if(t)return t;let o=ve(e,[],!1).filter(s=>H(s)&&le(s)!=="body"),i=null;const a=j(e).position==="fixed";let r=a?ae(e):e;for(;H(r)&&!fe(r);){const s=j(r),u=ot(r);!u&&s.position==="fixed"&&(i=null),(a?!u&&!i:!u&&s.position==="static"&&!!i&&Po.has(i.position)||Te(r)&&!u&&kt(e,r))?o=o.filter(l=>l!==r):i=s,r=ae(r)}return n.set(e,o),o}function So(e){let{element:n,boundary:t,rootBoundary:o,strategy:i}=e;const r=[...t==="clippingAncestors"?Ne(n)?[]:qo(n,this._c):[].concat(t),o],s=r[0],u=r.reduce((c,l)=>{const d=gt(n,l,i);return c.top=M(d.top,c.top),c.right=ie(d.right,c.right),c.bottom=ie(d.bottom,c.bottom),c.left=M(d.left,c.left),c},gt(n,s,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Lo(e){const{width:n,height:t}=_t(e);return{width:n,height:t}}function Fo(e,n,t){const o=U(n),i=Z(n),a=t==="fixed",r=se(e,!0,a,n);let s={scrollLeft:0,scrollTop:0};const u=Y(0);function c(){u.x=Ve(i)}if(o||!o&&!a)if((le(n)!=="body"||Te(i))&&(s=Me(n)),o){const m=se(n,!0,a,n);u.x=m.x+n.clientLeft,u.y=m.y+n.clientTop}else i&&c();a&&!o&&i&&c();const l=i&&!o&&!a?Pt(i,s):Y(0),d=r.left+s.scrollLeft-u.x-l.x,f=r.top+s.scrollTop-u.y-l.y;return{x:d,y:f,width:r.width,height:r.height}}function ze(e){return j(e).position==="static"}function ht(e,n){if(!U(e)||j(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Z(e)===t&&(t=t.ownerDocument.body),t}function qt(e,n){const t=V(e);if(Ne(e))return t;if(!U(e)){let i=ae(e);for(;i&&!fe(i);){if(H(i)&&!ze(i))return i;i=ae(i)}return t}let o=ht(e,n);for(;o&&yo(o)&&ze(o);)o=ht(o,n);return o&&fe(o)&&ze(o)&&!ot(o)?t:o||wo(e)||t}const Io=async function(e){const n=this.getOffsetParent||qt,t=this.getDimensions,o=await t(e.floating);return{reference:Fo(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function No(e){return j(e).direction==="rtl"}const Mo={convertOffsetParentRelativeRectToViewportRelativeRect:Eo,getDocumentElement:Z,getClippingRect:So,getOffsetParent:qt,getElementRects:Io,getClientRects:Ro,getDimensions:Lo,getScale:pe,isElement:H,isRTL:No};function St(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function Vo(e,n){let t=null,o;const i=Z(e);function a(){var s;clearTimeout(o),(s=t)==null||s.disconnect(),t=null}function r(s,u){s===void 0&&(s=!1),u===void 0&&(u=1),a();const c=e.getBoundingClientRect(),{left:l,top:d,width:f,height:m}=c;if(s||n(),!f||!m)return;const p=we(d),g=we(i.clientWidth-(l+f)),C=we(i.clientHeight-(d+m)),y=we(l),v={rootMargin:-p+"px "+-g+"px "+-C+"px "+-y+"px",threshold:M(0,ie(1,u))||1};let B=!0;function T(_){const w=_[0].intersectionRatio;if(w!==u){if(!B)return r();w?r(!1,w):o=setTimeout(()=>{r(!1,1e-7)},1e3)}w===1&&!St(c,e.getBoundingClientRect())&&r(),B=!1}try{t=new IntersectionObserver(T,{...v,root:i.ownerDocument})}catch{t=new IntersectionObserver(T,v)}t.observe(e)}return r(!0),a}function $o(e,n,t,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:s=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,c=at(e),l=i||a?[...c?ve(c):[],...ve(n)]:[];l.forEach(y=>{i&&y.addEventListener("scroll",t,{passive:!0}),a&&y.addEventListener("resize",t)});const d=c&&s?Vo(c,t):null;let f=-1,m=null;r&&(m=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&m&&(m.unobserve(n),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=m)==null||v.observe(n)})),t()}),c&&!u&&m.observe(c),m.observe(n));let p,g=u?se(e):null;u&&C();function C(){const y=se(e);g&&!St(g,y)&&t(),g=y,p=requestAnimationFrame(C)}return t(),()=>{var y;l.forEach(b=>{i&&b.removeEventListener("scroll",t),a&&b.removeEventListener("resize",t)}),d?.(),(y=m)==null||y.disconnect(),m=null,u&&cancelAnimationFrame(p)}}const zo=po,Wo=fo,Ct=lo,Ho=go,jo=uo,Ko=so,Xo=mo,Yo=(e,n,t)=>{const o=new Map,i={platform:Mo,...t},a={...i.platform,_c:o};return ro(e,n,{...i,platform:a})};function Uo(e){return e!=null&&typeof e=="object"&&"$el"in e}function Ue(e){if(Uo(e)){const n=e.$el;return nt(n)&&le(n)==="#comment"?null:n}return e}function de(e){return typeof e=="function"?e():h(e)}function Go(e){return{name:"arrow",options:e,fn(n){const t=Ue(de(e.element));return t==null?{}:Ko({element:t,padding:e.padding}).fn(n)}}}function Lt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function yt(e,n){const t=Lt(e);return Math.round(n*t)/t}function Zo(e,n,t){t===void 0&&(t={});const o=t.whileElementsMounted,i=x(()=>{var w;return(w=de(t.open))!=null?w:!0}),a=x(()=>de(t.middleware)),r=x(()=>{var w;return(w=de(t.placement))!=null?w:"bottom"}),s=x(()=>{var w;return(w=de(t.strategy))!=null?w:"absolute"}),u=x(()=>{var w;return(w=de(t.transform))!=null?w:!0}),c=x(()=>Ue(e.value)),l=x(()=>Ue(n.value)),d=R(0),f=R(0),m=R(s.value),p=R(r.value),g=jt({}),C=R(!1),y=x(()=>{const w={position:m.value,left:"0",top:"0"};if(!l.value)return w;const A=yt(l.value,d.value),S=yt(l.value,f.value);return u.value?{...w,transform:"translate("+A+"px, "+S+"px)",...Lt(l.value)>=1.5&&{willChange:"transform"}}:{position:m.value,left:A+"px",top:S+"px"}});let b;function v(){if(c.value==null||l.value==null)return;const w=i.value;Yo(c.value,l.value,{middleware:a.value,placement:r.value,strategy:s.value}).then(A=>{d.value=A.x,f.value=A.y,m.value=A.strategy,p.value=A.placement,g.value=A.middlewareData,C.value=w!==!1})}function B(){typeof b=="function"&&(b(),b=void 0)}function T(){if(B(),o===void 0){v();return}if(c.value!=null&&l.value!=null){b=o(c.value,l.value,v);return}}function _(){i.value||(C.value=!1)}return _e([a,r,s,i],v,{flush:"sync"}),_e([c,l],T,{flush:"sync"}),_e(i,_,{flush:"sync"}),Kt()&&Xt(B),{x:ce(d),y:ce(f),strategy:ce(m),placement:ce(p),middlewareData:ce(g),isPositioned:ce(C),floatingStyles:y,update:v}}const Qo={side:"bottom",sideOffset:0,sideFlip:!0,align:"center",alignOffset:0,alignFlip:!0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,positionStrategy:"fixed",updatePositionStrategy:"optimized",prioritizePosition:!1},[Jo,ei]=Fe("PopperContent");var ti=P({inheritAttrs:!1,__name:"PopperContent",props:Yt({side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...Qo}),emits:["placed"],setup(e,{emit:n}){const t=e,o=n,i=Dt(),{forwardRef:a,currentElement:r}=z(),s=R(),u=R(),{width:c,height:l}=_n(u),d=x(()=>t.side+(t.align!=="center"?`-${t.align}`:"")),f=x(()=>typeof t.collisionPadding=="number"?t.collisionPadding:{top:0,right:0,bottom:0,left:0,...t.collisionPadding}),m=x(()=>Array.isArray(t.collisionBoundary)?t.collisionBoundary:[t.collisionBoundary]),p=x(()=>({padding:f.value,boundary:m.value.filter(Xn),altBoundary:m.value.length>0})),g=x(()=>({mainAxis:t.sideFlip,crossAxis:t.alignFlip})),C=pn(()=>[zo({mainAxis:t.sideOffset+l.value,alignmentAxis:t.alignOffset}),t.prioritizePosition&&t.avoidCollisions&&Ct({...p.value,...g.value}),t.avoidCollisions&&Wo({mainAxis:!0,crossAxis:!!t.prioritizePosition,limiter:t.sticky==="partial"?Xo():void 0,...p.value}),!t.prioritizePosition&&t.avoidCollisions&&Ct({...p.value,...g.value}),Ho({...p.value,apply:({elements:E,rects:$,availableWidth:q,availableHeight:Q})=>{const{width:W,height:N}=$.reference,L=E.floating.style;L.setProperty("--reka-popper-available-width",`${q}px`),L.setProperty("--reka-popper-available-height",`${Q}px`),L.setProperty("--reka-popper-anchor-width",`${W}px`),L.setProperty("--reka-popper-anchor-height",`${N}px`)}}),u.value&&Go({element:u.value,padding:t.arrowPadding}),Yn({arrowWidth:c.value,arrowHeight:l.value}),t.hideWhenDetached&&jo({strategy:"referenceHidden",...p.value})]),y=x(()=>t.reference??i.anchor.value),{floatingStyles:b,placement:v,isPositioned:B,middlewareData:T}=Zo(y,s,{strategy:t.positionStrategy,placement:d,whileElementsMounted:(...E)=>$o(...E,{layoutShift:!t.disableUpdateOnLayoutShift,animationFrame:t.updatePositionStrategy==="always"}),middleware:C}),_=x(()=>je(v.value)[0]),w=x(()=>je(v.value)[1]);vt(()=>{B.value&&o("placed")});const A=x(()=>T.value.arrow?.centerOffset!==0),S=R("");re(()=>{r.value&&(S.value=window.getComputedStyle(r.value).zIndex)});const I=x(()=>T.value.arrow?.x??0),K=x(()=>T.value.arrow?.y??0);return ei({placedSide:_,onArrowChange:E=>u.value=E,arrowX:I,arrowY:K,shouldHideArrow:A}),(E,$)=>(O(),Oe("div",{ref_key:"floatingRef",ref:s,"data-reka-popper-content-wrapper":"",style:Ze({...h(b),transform:h(B)?h(b).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:S.value,"--reka-popper-transform-origin":[h(T).transformOrigin?.x,h(T).transformOrigin?.y].join(" "),...h(T).hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}})},[oe(h(be),G({ref:h(a)},E.$attrs,{"as-child":t.asChild,as:E.as,"data-side":_.value,"data-align":w.value,style:{animation:h(B)?void 0:"none"}}),{default:D(()=>[k(E.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4))}}),ni=ti;const oi={top:"bottom",right:"left",bottom:"top",left:"right"};var ii=P({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const{forwardRef:n}=z(),t=Jo(),o=x(()=>oi[t.placedSide.value]);return(i,a)=>(O(),Oe("span",{ref:r=>{h(t).onArrowChange(r)},style:Ze({position:"absolute",left:h(t).arrowX?.value?`${h(t).arrowX?.value}px`:void 0,top:h(t).arrowY?.value?`${h(t).arrowY?.value}px`:void 0,[o.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[h(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[h(t).placedSide.value],visibility:h(t).shouldHideArrow.value?"hidden":void 0})},[oe(Kn,G(i.$attrs,{ref:h(n),style:{display:"block"},as:i.as,"as-child":i.asChild,rounded:i.rounded,width:i.width,height:i.height}),{default:D(()=>[k(i.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),ai=ii,ri=P({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const n=e;return z(),(t,o)=>(O(),F(h(ai),Pe(ke(n)),{default:D(()=>[k(t.$slots,"default")]),_:3},16))}}),si=ri;const[rt,li]=Fe("TooltipProvider");var ui=P({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(e){const n=e,{delayDuration:t,skipDelayDuration:o,disableHoverableContent:i,disableClosingTrigger:a,ignoreNonKeyboardFocus:r,disabled:s}=Ut(n);z();const u=R(!0),c=R(!1),{start:l,stop:d}=xt(()=>{u.value=!0},o,{immediate:!1});return li({isOpenDelayed:u,delayDuration:t,onOpen(){d(),u.value=!1},onClose(){l()},isPointerInTransitRef:c,disableHoverableContent:i,disableClosingTrigger:a,disabled:s,ignoreNonKeyboardFocus:r}),(f,m)=>k(f.$slots,"default")}}),ci=ui;const Ft="tooltip.open",[$e,di]=Fe("TooltipRoot");var pi=P({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(e,{emit:n}){const t=e,o=n;z();const i=rt(),a=x(()=>t.disableHoverableContent??i.disableHoverableContent.value),r=x(()=>t.disableClosingTrigger??i.disableClosingTrigger.value),s=x(()=>t.disabled??i.disabled.value),u=x(()=>t.delayDuration??i.delayDuration.value),c=x(()=>t.ignoreNonKeyboardFocus??i.ignoreNonKeyboardFocus.value),l=fn(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0});_e(l,v=>{i.onClose&&(v?(i.onOpen(),document.dispatchEvent(new CustomEvent(Ft))):i.onClose())});const d=R(!1),f=R(),m=x(()=>l.value?d.value?"delayed-open":"instant-open":"closed"),{start:p,stop:g}=xt(()=>{d.value=!0,l.value=!0},u,{immediate:!1});function C(){g(),d.value=!1,l.value=!0}function y(){g(),l.value=!1}function b(){p()}return di({contentId:"",open:l,stateAttribute:m,trigger:f,onTriggerChange(v){f.value=v},onTriggerEnter(){i.isOpenDelayed.value?b():C()},onTriggerLeave(){a.value?y():g()},onOpen:C,onClose:y,disableHoverableContent:a,disableClosingTrigger:r,disabled:s,ignoreNonKeyboardFocus:c}),(v,B)=>(O(),F(h(Vn),null,{default:D(()=>[k(v.$slots,"default",{open:h(l)})]),_:3}))}}),fi=pi,mi=P({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:n}){const t=e,o=n,i=$e(),{forwardRef:a}=z(),r=Gt(),s=x(()=>r.default?.({})),u=x(()=>{if(t.ariaLabel)return t.ariaLabel;let l="";function d(f){typeof f.children=="string"&&f.type!==Zt?l+=f.children:Array.isArray(f.children)&&f.children.forEach(m=>d(m))}return s.value?.forEach(f=>d(f)),l}),c=x(()=>{const{ariaLabel:l,...d}=t;return d});return Ge(()=>{st(window,"scroll",l=>{l.target?.contains(i.trigger.value)&&i.onClose()}),st(window,Ft,i.onClose)}),(l,d)=>(O(),F(h(Ln),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:d[0]||(d[0]=f=>o("escapeKeyDown",f)),onPointerDownOutside:d[1]||(d[1]=f=>{h(i).disableClosingTrigger.value&&h(i).trigger.value?.contains(f.target)&&f.preventDefault(),o("pointerDownOutside",f)}),onFocusOutside:d[2]||(d[2]=en(()=>{},["prevent"])),onDismiss:d[3]||(d[3]=f=>h(i).onClose())},{default:D(()=>[oe(h(ni),G({ref:h(a),"data-state":h(i).stateAttribute.value},{...l.$attrs,...c.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:D(()=>[k(l.$slots,"default"),oe(h(gn),{id:h(i).contentId,role:"tooltip"},{default:D(()=>[Qt(Jt(u.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),It=mi,gi=P({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(e){const t=Qe(e),{forwardRef:o,currentElement:i}=z(),{trigger:a,onClose:r}=$e(),s=rt(),{isPointerInTransit:u,onPointerExit:c}=Tn(a,i);return s.isPointerInTransitRef=u,c(()=>{r()}),(l,d)=>(O(),F(It,G({ref:h(o)},h(t)),{default:D(()=>[k(l.$slots,"default")]),_:3},16))}}),hi=gi,Ci=P({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:n}){const t=e,o=n,i=$e(),a=wt(t,o),{forwardRef:r}=z();return(s,u)=>(O(),F(h(mn),{present:s.forceMount||h(i).open.value},{default:D(()=>[(O(),F(tn(h(i).disableHoverableContent.value?It:hi),G({ref:h(r)},h(a)),{default:D(()=>[k(s.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),yi=Ci,vi=P({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const n=e;return(t,o)=>(O(),F(h(In),Pe(ke(n)),{default:D(()=>[k(t.$slots,"default")]),_:3},16))}}),bi=vi,xi=P({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const n=e,t=$e(),o=rt();t.contentId||=hn(void 0,"reka-tooltip-content");const{forwardRef:i,currentElement:a}=z(),r=R(!1),s=R(!1),u=x(()=>t.disabled.value?{}:{click:g,focus:m,pointermove:d,pointerleave:f,pointerdown:l,blur:p});Ge(()=>{t.onTriggerChange(a.value)});function c(){setTimeout(()=>{r.value=!1},1)}function l(){t.open&&!t.disableClosingTrigger.value&&t.onClose(),r.value=!0,document.addEventListener("pointerup",c,{once:!0})}function d(C){C.pointerType!=="touch"&&!s.value&&!o.isPointerInTransitRef.value&&(t.onTriggerEnter(),s.value=!0)}function f(){t.onTriggerLeave(),s.value=!1}function m(C){r.value||t.ignoreNonKeyboardFocus.value&&!C.target.matches?.(":focus-visible")||t.onOpen()}function p(){t.onClose()}function g(){t.disableClosingTrigger.value||t.onClose()}return(C,y)=>(O(),F(h(zn),{"as-child":"",reference:C.reference},{default:D(()=>[oe(h(be),G({ref:h(i),"aria-describedby":h(t).open.value?h(t).contentId:void 0,"data-state":h(t).stateAttribute.value,as:C.as,"as-child":n.asChild,"data-grace-area-trigger":""},nn(u.value)),{default:D(()=>[k(C.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),Ti=xi;const ue=P({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{default:0},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean},skipDelayDuration:{}},emits:["update:open"],setup(e,{emit:n}){const t=e,o=He(t,"open","defaultOpen"),i=He(t,"delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus","skipDelayDuration"),r=wt(i,n);return(s,u)=>(O(),F(h(ci),Pe(ke(h(o))),{default:D(()=>[oe(h(fi),G({"data-slot":"tooltip"},h(r)),{default:D(c=>[k(s.$slots,"default",Pe(ke(c)))]),_:3},16)]),_:3},16))}});ue.__docgenInfo={exportName:"default",displayName:"TooltipRoot",type:1,props:[{name:"delayDuration",global:!1,description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",tags:[{name:"defaultValue",text:"700"}],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"disabled",global:!1,description:"When `true`, disable tooltip",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",global:!1,description:`The open state of the tooltip when it is initially rendered.
Use when you do not need to control its open state.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",global:!1,description:"The controlled open state of the tooltip.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableHoverableContent",global:!1,description:`Prevents Tooltip.Content from remaining open when hovering.
Disabling this has accessibility consequences. Inherits
from Tooltip.Provider.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableClosingTrigger",global:!1,description:"When `true`, clicking on trigger will not close the content.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ignoreNonKeyboardFocus",global:!1,description:`Prevent the tooltip from opening if the focus did not come from
the keyboard by matching against the \`:focus-visible\` selector.
This is useful if you want to avoid opening it when switching
browser tabs or closing a dialog.`,tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",global:!1,description:"How much time a user has to enter another trigger without incurring a delay again.",tags:[{name:"defaultValue",text:"300"}],required:!1,type:"number",declarations:[],schema:"number"}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{ open: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ open: boolean; }"}}],exposed:[{name:"delayDuration",type:"number",description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",declarations:[],schema:"number"},{name:"disabled",type:"boolean",description:"When `true`, disable tooltip",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",type:"boolean",description:`The open state of the tooltip when it is initially rendered.
Use when you do not need to control its open state.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",type:"boolean",description:"The controlled open state of the tooltip.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableHoverableContent",type:"boolean",description:`Prevents Tooltip.Content from remaining open when hovering.
Disabling this has accessibility consequences. Inherits
from Tooltip.Provider.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableClosingTrigger",type:"boolean",description:"When `true`, clicking on trigger will not close the content.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ignoreNonKeyboardFocus",type:"boolean",description:`Prevent the tooltip from opening if the focus did not come from
the keyboard by matching against the \`:focus-visible\` selector.
This is useful if you want to avoid opening it when switching
browser tabs or closing a dialog.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",type:"number",description:"How much time a user has to enter another trigger without incurring a delay again.",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipRoot.vue"};const ge=P({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(e){const n=e;return(t,o)=>(O(),F(h(Ti),G({"data-slot":"tooltip-trigger"},n),{default:D(()=>[k(t.$slots,"default")]),_:3},16))}});ge.__docgenInfo={exportName:"default",displayName:"TooltipTrigger",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"reference",global:!1,description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"reference",type:"ReferenceElement",description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipTrigger.vue"};const wi=an(["animate-in z-tooltip bg-gray-0 w-fit rounded-md border-transparent p-3 text-xs text-white","fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]),he=P({inheritAttrs:!1,__name:"TooltipContent",props:{class:{default:""},forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(e){const n=e,t=He(n,"class"),o=Qe(t),i=x(()=>on(wi(),n.class));return(a,r)=>(O(),F(h(bi),null,{default:D(()=>[oe(h(yi),G({"data-slot":"tooltip-content"},{...h(o),...a.$attrs},{class:i.value}),{default:D(()=>[k(a.$slots,"default"),oe(h(si),{class:"z-tooltip size-1.5 w-3.5 rounded-xs"})]),_:3},16,["class"])]),_:3}))}});he.__docgenInfo={exportName:"default",displayName:"TooltipContent",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,tags:[{name:"defaultValue",text:'"top"'}],required:!1,type:'"top" | "right" | "bottom" | "left"',declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"align",global:!1,description:`The preferred alignment against the trigger.
May change when collisions occur.`,tags:[{name:"defaultValue",text:'"center"'}],required:!1,type:'"start" | "center" | "end"',declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']}},{name:"alignOffset",global:!1,description:"An offset in pixels from the `start` or `end` alignment options.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"avoidCollisions",global:!1,description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionBoundary",global:!1,description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,tags:[{name:"defaultValue",text:"[]"}],required:!1,type:"Element | Element[]",declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"collisionPadding",global:!1,description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",global:!1,description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"sticky",global:!1,description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,tags:[{name:"defaultValue",text:'"partial"'}],required:!1,type:'"always" | "partial"',declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",global:!1,description:"Whether to hide the content when the trigger becomes fully occluded.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",global:!1,description:"The type of CSS position property to use.",tags:[],required:!1,type:'"fixed" | "absolute"',declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",global:!1,description:"Strategy to update the position of the floating element on every animation frame.",tags:[{name:"defaultValue",text:"'optimized'"}],required:!1,type:'"always" | "optimized"',declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"ariaLabel",global:!1,description:`By default, screenreaders will announce the content inside
the component. If this is not descriptive enough, or you have
content that cannot be announced, use aria-label as a more
descriptive label.`,tags:[{name:"defaultValue",text:"String"}],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"sideOffset",type:"number",description:"The distance in pixels from the trigger.",declarations:[],schema:"number"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"side",type:'"top" | "right" | "bottom" | "left"',description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"align",type:'"start" | "center" | "end"',description:`The preferred alignment against the trigger.
May change when collisions occur.`,declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']}},{name:"alignOffset",type:"number",description:"An offset in pixels from the `start` or `end` alignment options.",declarations:[],schema:"number"},{name:"avoidCollisions",type:"boolean",description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionBoundary",type:"Element | Element[]",description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"collisionPadding",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",type:"number",description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,declarations:[],schema:"number"},{name:"sticky",type:'"always" | "partial"',description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",type:"boolean",description:"Whether to hide the content when the trigger becomes fully occluded.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",type:'"fixed" | "absolute"',description:"The type of CSS position property to use.",declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",type:'"always" | "optimized"',description:"Strategy to update the position of the floating element on every animation frame.",declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"ariaLabel",type:"string",description:`By default, screenreaders will announce the content inside
the component. If this is not descriptive enough, or you have
content that cannot be announced, use aria-label as a more
descriptive label.`,declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipContent.vue"};const Pi={title:"Shared/UI/Tooltip",component:ue,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},Be={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
        `}}},args:{defaultOpen:!1},render:e=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:he,Button:xe},setup(){return{args:e}},template:`
      <TooltipRoot v-bind="args">
        <TooltipTrigger>
          <Button>호버하세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          이것은 툴팁 메시지입니다
        </TooltipContent>
      </TooltipRoot>
    `})},De={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:he,Button:xe},template:`
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
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:he,Button:xe},template:`
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
    `})},Ee={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:he,Button:xe},template:`
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
    `})},Re={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
툴팁 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:ue,TooltipTrigger:ge,TooltipContent:he,Button:xe,CheckCircleIcon:bn,AlertCircleIcon:vn,XCircleIcon:yn,InfoIcon:rn,StarIcon:Cn},template:`
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
    `})};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};De.parameters={...De.parameters,docs:{...De.parameters?.docs,source:{originalSource:`{
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
}`,...De.parameters?.docs?.source}}};Ae.parameters={...Ae.parameters,docs:{...Ae.parameters?.docs,source:{originalSource:`{
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
}`,...Ae.parameters?.docs?.source}}};Ee.parameters={...Ee.parameters,docs:{...Ee.parameters?.docs,source:{originalSource:`{
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
}`,...Ee.parameters?.docs?.source}}};Re.parameters={...Re.parameters,docs:{...Re.parameters?.docs,source:{originalSource:`{
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
}`,...Re.parameters?.docs?.source}}};const ki=["Playground","Positions","LongText","DelayDuration","WithRichContent"];export{Ee as DelayDuration,Ae as LongText,Be as Playground,De as Positions,Re as WithRichContent,ki as __namedExportsOrder,Pi as default};
