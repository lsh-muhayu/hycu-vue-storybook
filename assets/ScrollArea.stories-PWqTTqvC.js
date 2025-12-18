import{r as g,e as C,M as ye,N as we,O as _e,d as w,P as R,n as x,o as b,q as m,v as S,Q as F,u as s,k as L,s as V,y as A,l as U,w as ne,j as Ae,z as re,c as de,a as ue,J as Ce,F as ze,R as ee,S as se,f as Pe,H as pe,T as Te,U as ke}from"./iframe-D0s_mCcR.js";import{c as G,a as z,P as H,e as ve,f as X,d as le,g as Ee,w as Be}from"./Primitive-VoFJU5Lf.js";import{_ as Ve}from"./Button-B6sjuPYF.js";import"./preload-helper-PPVm8Dsz.js";function Le(r,e=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY){return Math.min(t,Math.max(e,r))}const[fe]=G("ConfigProvider");function Re(r){const e=fe({dir:g("ltr")});return C(()=>r?.value||e.dir?.value||"ltr")}function He(r){const e=ye(),t=Object.keys(e?.type.props??{}).reduce((o,a)=>{const n=(e?.type.props[a]).default;return n!==void 0&&(o[a]=n),o},{}),l=we(r);return C(()=>{const o={},a=e?.vnode.props??{};return Object.keys(a).forEach(n=>{o[_e(n)]=a[n]}),Object.keys({...t,...o}).reduce((n,c)=>(l.value[c]!==void 0&&(n[c]=l.value[c]),n),{})})}function $e(r){const e=fe({nonce:g()});return C(()=>r?.value||e.nonce?.value)}const[k,qe]=G("ScrollAreaRoot");var De=w({__name:"ScrollAreaRoot",props:{type:{type:String,required:!1,default:"hover"},dir:{type:String,required:!1},scrollHideDelay:{type:Number,required:!1,default:600},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r,{expose:e}){const t=r,l=g(0),o=g(0),a=g(),n=g(),c=g(),d=g(),u=g(!1),v=g(!1),{type:_,dir:h,scrollHideDelay:y}=R(t),T=Re(h);function E(){a.value?.scrollTo({top:0})}function B(){a.value?.scrollTo({top:0,left:0})}e({viewport:a,scrollTop:E,scrollTopLeft:B});const{forwardRef:i,currentElement:f}=z();return qe({type:_,dir:T,scrollHideDelay:y,scrollArea:f,viewport:a,onViewportChange:p=>{a.value=p||void 0},content:n,onContentChange:p=>{n.value=p},scrollbarX:c,scrollbarXEnabled:u,scrollbarY:d,scrollbarYEnabled:v,onScrollbarXChange:p=>{c.value=p||void 0},onScrollbarYChange:p=>{d.value=p||void 0},onScrollbarXEnabledChange:p=>{u.value=p},onScrollbarYEnabledChange:p=>{v.value=p},onCornerWidthChange:p=>{l.value=p},onCornerHeightChange:p=>{o.value=p}}),(p,ae)=>(b(),x(s(H),{ref:s(i),"as-child":t.asChild,as:p.as,dir:s(T),style:F({position:"relative","--reka-scroll-area-corner-width":`${l.value}px`,"--reka-scroll-area-corner-height":`${o.value}px`})},{default:m(()=>[S(p.$slots,"default")]),_:3},8,["as-child","as","dir","style"]))}}),Ne=De;function me(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const l=(e[1]-e[0])/(r[1]-r[0]);return e[0]+l*(t-r[0])}}function K(r){const e=he(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=(r.scrollbar.size-t)*e;return Math.max(l,18)}function he(r,e){const t=r/e;return Number.isNaN(t)?0:t}function Ie(r,e=()=>{}){let t={left:r.scrollLeft,top:r.scrollTop},l=0;return(function o(){const a={left:r.scrollLeft,top:r.scrollTop},n=t.left!==a.left,c=t.top!==a.top;(n||c)&&e(),t=a,l=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(l)}function ce(r,e,t="ltr"){const l=K(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=e.scrollbar.size-o,n=e.content-e.viewport,c=a-l,d=t==="ltr"?[0,n]:[n*-1,0],u=Le(r,d[0],d[1]);return me([0,n],[0,c])(u)}function $(r){return r?Number.parseInt(r,10):0}function Oe(r,e,t,l="ltr"){const o=K(t),a=o/2,n=e||a,c=o-n,d=t.scrollbar.paddingStart+n,u=t.scrollbar.size-t.scrollbar.paddingEnd-c,v=t.content-t.viewport,_=l==="ltr"?[0,v]:[v*-1,0];return me([d,u],_)(r)}function ie(r,e){return r>0&&r<e}var Me=w({__name:"ScrollAreaScrollbarX",setup(r){const e=k(),t=Q(),{forwardRef:l,currentElement:o}=z();L(()=>{o.value&&e.onScrollbarXChange(o.value)});const a=C(()=>t.sizes.value);return(n,c)=>(b(),x(be,{ref:s(l),"is-horizontal":!0,"data-orientation":"horizontal",style:F({bottom:0,left:s(e).dir.value==="rtl"?"var(--reka-scroll-area-corner-width)":0,right:s(e).dir.value==="ltr"?"var(--reka-scroll-area-corner-width)":0,"--reka-scroll-area-thumb-width":a.value?`${s(K)(a.value)}px`:void 0}),onOnDragScroll:c[0]||(c[0]=d=>s(t).onDragScroll(d.x))},{default:m(()=>[S(n.$slots,"default")]),_:3},8,["style"]))}}),je=Me,Ye=w({__name:"ScrollAreaScrollbarY",setup(r){const e=k(),t=Q(),{forwardRef:l,currentElement:o}=z();L(()=>{o.value&&e.onScrollbarYChange(o.value)});const a=C(()=>t.sizes.value);return(n,c)=>(b(),x(be,{ref:s(l),"is-horizontal":!1,"data-orientation":"vertical",style:F({top:0,right:s(e).dir.value==="ltr"?0:void 0,left:s(e).dir.value==="rtl"?0:void 0,bottom:"var(--reka-scroll-area-corner-height)","--reka-scroll-area-thumb-height":a.value?`${s(K)(a.value)}px`:void 0}),onOnDragScroll:c[0]||(c[0]=d=>s(t).onDragScroll(d.y))},{default:m(()=>[S(n.$slots,"default")]),_:3},8,["style"]))}}),We=Ye,Xe=w({__name:"ScrollAreaScrollbarAuto",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=k(),t=J(),{forwardRef:l}=z(),o=g(!1),a=ve(()=>{if(e.viewport.value){const n=e.viewport.value.offsetWidth<e.viewport.value.scrollWidth,c=e.viewport.value.offsetHeight<e.viewport.value.scrollHeight;o.value=t.isHorizontal.value?n:c}},10);return L(()=>a()),X(e.viewport,a),X(e.content,a),(n,c)=>(b(),x(s(le),{present:n.forceMount||o.value},{default:m(()=>[V(oe,A(n.$attrs,{ref:s(l),"data-state":o.value?"visible":"hidden"}),{default:m(()=>[S(n.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),ge=Xe,Fe=w({inheritAttrs:!1,__name:"ScrollAreaScrollbarHover",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=k(),{forwardRef:t}=z();let l;const o=g(!1);function a(){window.clearTimeout(l),o.value=!0}function n(){l=window.setTimeout(()=>{o.value=!1},e.scrollHideDelay.value)}return L(()=>{const c=e.scrollArea.value;c&&(c.addEventListener("pointerenter",a),c.addEventListener("pointerleave",n))}),U(()=>{const c=e.scrollArea.value;c&&(window.clearTimeout(l),c.removeEventListener("pointerenter",a),c.removeEventListener("pointerleave",n))}),(c,d)=>(b(),x(s(le),{present:c.forceMount||o.value},{default:m(()=>[V(ge,A(c.$attrs,{ref:s(t),"data-state":o.value?"visible":"hidden"}),{default:m(()=>[S(c.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),Ue=Fe,Ge=w({__name:"ScrollAreaScrollbarScroll",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=k(),t=J(),{forwardRef:l}=z(),{state:o,dispatch:a}=Ee("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}}),n=C(()=>o.value!=="hidden");ne(d=>{if(o.value==="idle"){const u=window.setTimeout(()=>a("HIDE"),e.scrollHideDelay.value);d(()=>{window.clearTimeout(u)})}});const c=ve(()=>a("SCROLL_END"),100);return ne(d=>{const u=e.viewport.value,v=t.isHorizontal.value?"scrollLeft":"scrollTop";if(u){let _=u[v];const h=()=>{const y=u[v];_!==y&&(a("SCROLL"),c()),_=y};u.addEventListener("scroll",h),d(()=>{u.removeEventListener("scroll",h)})}}),(d,u)=>(b(),x(s(le),{present:d.forceMount||n.value},{default:m(()=>[V(oe,A(d.$attrs,{ref:s(l),"data-state":n.value?"visible":"hidden"}),{default:m(()=>[S(d.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),Ke=Ge;const[J,Je]=G("ScrollAreaScrollbar");var Qe=w({inheritAttrs:!1,__name:"ScrollAreaScrollbar",props:{orientation:{type:String,required:!1,default:"vertical"},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(r){const e=r,{forwardRef:t}=z(),l=k(),o=C(()=>e.orientation==="horizontal");Ae(o,()=>{o.value?l.onScrollbarXEnabledChange(!0):l.onScrollbarYEnabledChange(!0)},{immediate:!0}),U(()=>{l.onScrollbarXEnabledChange(!1),l.onScrollbarYEnabledChange(!1)});const{orientation:a,forceMount:n,asChild:c,as:d}=R(e);return Je({orientation:a,forceMount:n,isHorizontal:o,as:d,asChild:c}),(u,v)=>s(l).type.value==="hover"?(b(),x(Ue,A({key:0},u.$attrs,{ref:s(t),"force-mount":s(n)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):s(l).type.value==="scroll"?(b(),x(Ke,A({key:1},u.$attrs,{ref:s(t),"force-mount":s(n)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):s(l).type.value==="auto"?(b(),x(ge,A({key:2},u.$attrs,{ref:s(t),"force-mount":s(n)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):s(l).type.value==="always"?(b(),x(oe,A({key:3},u.$attrs,{ref:s(t),"data-state":"visible"}),{default:m(()=>[S(u.$slots,"default")]),_:3},16)):re("v-if",!0)}}),Ze=Qe;const[Q,er]=G("ScrollAreaScrollbarVisible");var rr=w({__name:"ScrollAreaScrollbarVisible",setup(r){const e=k(),t=J(),{forwardRef:l}=z(),o=g({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),a=C(()=>{const i=he(o.value.viewport,o.value.content);return i>0&&i<1}),n=g(),c=g(0);function d(i,f){if(y.value){const p=e.viewport.value.scrollLeft+i.deltaY;e.viewport.value.scrollLeft=p,ie(p,f)&&i.preventDefault()}else{const p=e.viewport.value.scrollTop+i.deltaY;e.viewport.value.scrollTop=p,ie(p,f)&&i.preventDefault()}}function u(i,f){y.value?c.value=f.x:c.value=f.y}function v(i){c.value=0}function _(i){o.value=i}function h(i,f){return Oe(i,c.value,o.value,f)}const y=C(()=>t.isHorizontal.value);function T(i){y.value?e.viewport.value.scrollLeft=h(i,e.dir.value):e.viewport.value.scrollTop=h(i)}function E(){if(y.value){if(e.viewport.value&&n.value){const i=e.viewport.value.scrollLeft,f=ce(i,o.value,e.dir.value);n.value.style.transform=`translate3d(${f}px, 0, 0)`}}else if(e.viewport.value&&n.value){const i=e.viewport.value.scrollTop,f=ce(i,o.value);n.value.style.transform=`translate3d(0, ${f}px, 0)`}}function B(i){n.value=i}return er({sizes:o,hasThumb:a,handleWheelScroll:d,handleThumbDown:u,handleThumbUp:v,handleSizeChange:_,onThumbPositionChange:E,onThumbChange:B,onDragScroll:T}),(i,f)=>y.value?(b(),x(je,A({key:0},i.$attrs,{ref:s(l)}),{default:m(()=>[S(i.$slots,"default")]),_:3},16)):(b(),x(We,A({key:1},i.$attrs,{ref:s(l)}),{default:m(()=>[S(i.$slots,"default")]),_:3},16))}}),oe=rr,tr=w({__name:"ScrollAreaScrollbarImpl",props:{isHorizontal:{type:Boolean,required:!0}},emits:["onDragScroll","onWheelScroll","onThumbPointerDown"],setup(r,{emit:e}){const t=r,l=e,o=k(),a=Q(),n=J(),{forwardRef:c,currentElement:d}=z(),u=g(""),v=g();function _(i){if(v.value){const f=i.clientX-v.value?.left,p=i.clientY-v.value?.top;l("onDragScroll",{x:f,y:p})}}function h(i){i.button===0&&(i.target.setPointerCapture(i.pointerId),v.value=d.value.getBoundingClientRect(),u.value=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",o.viewport&&(o.viewport.value.style.scrollBehavior="auto"),_(i))}function y(i){_(i)}function T(i){const f=i.target;f.hasPointerCapture(i.pointerId)&&f.releasePointerCapture(i.pointerId),document.body.style.webkitUserSelect=u.value,o.viewport&&(o.viewport.value.style.scrollBehavior=""),v.value=void 0}function E(i){const f=i.target,p=d.value?.contains(f),ae=a.sizes.value.content-a.sizes.value.viewport;p&&a.handleWheelScroll(i,ae)}L(()=>{document.addEventListener("wheel",E,{passive:!1})}),U(()=>{document.removeEventListener("wheel",E)});function B(){d.value&&(t.isHorizontal?a.handleSizeChange({content:o.viewport.value?.scrollWidth??0,viewport:o.viewport.value?.offsetWidth??0,scrollbar:{size:d.value.clientWidth??0,paddingStart:$(getComputedStyle(d.value).paddingLeft),paddingEnd:$(getComputedStyle(d.value).paddingRight)}}):a.handleSizeChange({content:o.viewport.value?.scrollHeight??0,viewport:o.viewport.value?.offsetHeight??0,scrollbar:{size:d.value?.clientHeight??0,paddingStart:$(getComputedStyle(d.value).paddingTop),paddingEnd:$(getComputedStyle(d.value).paddingBottom)}}),a.onThumbPositionChange())}return X(d,B),X(o.content,B),(i,f)=>(b(),x(s(H),{ref:s(c),style:{position:"absolute"},"data-scrollbarimpl":"",as:s(n).as.value,"as-child":s(n).asChild.value,onPointerdown:h,onPointermove:y,onPointerup:T},{default:m(()=>[S(i.$slots,"default")]),_:3},8,["as","as-child"]))}}),be=tr,lr=w({__name:"ScrollAreaThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const e=r,t=k(),l=Q();function o(h){const T=h.target.getBoundingClientRect(),E=h.clientX-T.left,B=h.clientY-T.top;l.handleThumbDown(h,{x:E,y:B})}function a(h){l.handleThumbUp(h)}const{forwardRef:n,currentElement:c}=z(),d=g(),u=C(()=>t.viewport.value);function v(){if(!d.value){const h=Ie(u.value,l.onThumbPositionChange);d.value=h,l.onThumbPositionChange()}}const _=C(()=>l.sizes.value);return Be(_,()=>{l.onThumbChange(c.value),u.value&&(l.onThumbPositionChange(),u.value.addEventListener("scroll",v))}),U(()=>{u.value.removeEventListener("scroll",v),t.viewport.value?.removeEventListener("scroll",v)}),(h,y)=>(b(),x(s(H),{ref:s(n),"data-state":s(l).hasThumb?"visible":"hidden",style:{width:"var(--reka-scroll-area-thumb-width)",height:"var(--reka-scroll-area-thumb-height)"},"as-child":e.asChild,as:h.as,onPointerdown:o,onPointerup:a},{default:m(()=>[S(h.$slots,"default")]),_:3},8,["data-state","as-child","as"]))}}),or=lr,ar=w({inheritAttrs:!1,__name:"ScrollAreaViewport",props:{nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r,{expose:e}){const t=r,{nonce:l}=R(t),o=$e(l),a=k(),n=g();L(()=>{a.onViewportChange(n.value),a.onContentChange(d.value)}),e({viewportElement:n});const{forwardRef:c,currentElement:d}=z();return(u,v)=>(b(),de(ze,null,[ue("div",A({ref_key:"viewportElement",ref:n,"data-reka-scroll-area-viewport":"",style:{overflowX:s(a).scrollbarXEnabled.value?"scroll":"hidden",overflowY:s(a).scrollbarYEnabled.value?"scroll":"hidden"}},u.$attrs,{tabindex:0}),[V(s(H),{ref:s(c),style:F({minWidth:s(a).scrollbarXEnabled.value?"fit-content":void 0}),"as-child":t.asChild,as:u.as},{default:m(()=>[S(u.$slots,"default")]),_:3},8,["style","as-child","as"])],16),V(s(H),{as:"style",nonce:s(o)},{default:m(()=>v[0]||(v[0]=[Ce(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])),_:1,__:[0]},8,["nonce"])],64))}}),nr=ar;typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;function sr(r){return ee(r)?se(new Proxy({},{get(e,t,l){return s(Reflect.get(r.value,t,l))},set(e,t,l){return ee(r.value[t])&&!ee(l)?r.value[t].value=l:r.value[t]=l,!0},deleteProperty(e,t){return Reflect.deleteProperty(r.value,t)},has(e,t){return Reflect.has(r.value,t)},ownKeys(){return Object.keys(r.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}})):se(r)}function cr(r){return sr(C(r))}function xe(r,...e){const t=e.flat(),l=t[0];return cr(()=>Object.fromEntries(typeof l=="function"?Object.entries(R(r)).filter(([o,a])=>!l(Pe(a),o)):Object.entries(R(r)).filter(o=>!t.includes(o[0]))))}const te=w({__name:"ScrollAreaScrollBar",props:{class:{},orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(r){const e=r,t=xe(e,"class");return(l,o)=>(b(),x(s(Ze),A(s(t),{class:s(pe)("flex touch-none bg-gray-100/50 p-px transition-colors select-none",e.orientation==="vertical"&&"h-full w-2 border-l border-l-transparent",e.orientation==="horizontal"&&"h-2 flex-col border-t border-t-transparent",e.class),orientation:e.orientation}),{default:m(()=>[V(s(or),{class:"relative flex-1 rounded-full bg-gray-300"})]),_:1},16,["class","orientation"]))}});te.__docgenInfo={exportName:"default",displayName:"ScrollAreaScrollBar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"}},{name:"orientation",defaultValue:{func:!1,value:"'vertical'"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollAreaScrollBar.vue"]};const P=w({__name:"ScrollArea",props:{showVertical:{type:Boolean,default:!0},showHorizontal:{type:Boolean,default:!1},class:{},type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{}},setup(r){const e=r,t=xe(e,"class");return(l,o)=>(b(),x(s(Ne),A(s(t),{class:s(pe)("relative",e.class)}),{default:m(()=>[V(s(nr),{class:"size-full min-h-0 rounded-[inherit] outline-none"},{default:m(()=>[S(l.$slots,"default")]),_:3}),r.showVertical?(b(),x(te,{key:0,orientation:"vertical"})):re("",!0),r.showHorizontal?(b(),x(te,{key:1,orientation:"horizontal"})):re("",!0)]),_:3},16,["class"]))}});P.__docgenInfo={exportName:"default",displayName:"ScrollArea",description:"",tags:{},props:[{name:"showVertical",description:"세로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showHorizontal",description:"가로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollArea.vue"]};const ir={class:"flex overflow-auto"},dr={class:"flex shrink grow basis-[0%] flex-col"},Se=w({inheritAttrs:!1,__name:"ScrollAreaAutoSize",props:{showVertical:{type:Boolean},showHorizontal:{type:Boolean},class:{},type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{}},setup(r){const t=He(r);return(l,o)=>(b(),de("div",ir,[ue("div",dr,[V(P,Te(ke({...l.$attrs,...s(t)})),{default:m(()=>[S(l.$slots,"default")]),_:3},16)])]))}});Se.__docgenInfo={exportName:"default",displayName:"ScrollAreaAutoSize",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"}},{name:"showHorizontal",description:"가로 스크롤바 표시 여부",required:!1,type:{name:"boolean"}},{name:"showVertical",description:"세로 스크롤바 표시 여부",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollAreaAutoSize.vue"]};const hr={title:"Shared/UI/ScrollArea",component:P,parameters:{layout:"centered",docs:{description:{component:`
### 스크롤 영역 컴포넌트

ScrollArea 컴포넌트는 긴 콘텐츠를 스크롤 가능한 영역으로 표시하기 위한 컴포넌트입니다.
Reka UI의 ScrollArea를 기반으로 하며, 세로 및 가로 스크롤바를 선택적으로 표시할 수 있습니다.

## 주요 기능

- **세로 스크롤**: \`showVertical\` prop을 통해 세로 스크롤바 표시 여부 제어
- **가로 스크롤**: \`showHorizontal\` prop을 통해 가로 스크롤바 표시 여부 제어
- **자동 크기 조절**: \`ScrollAreaAutoSize\` 컴포넌트를 통한 자동 크기 조절
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<ScrollArea class="h-64 w-80">
  <div>긴 콘텐츠...</div>
</ScrollArea>

<ScrollArea class="h-64 w-80" :show-vertical="true" :show-horizontal="true">
  <div>양방향 스크롤 콘텐츠...</div>
</ScrollArea>

<ScrollAreaAutoSize class="h-64 w-80">
  <div>자동 크기 조절 콘텐츠...</div>
</ScrollAreaAutoSize>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"세로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"가로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},Z=Array.from({length:50},(r,e)=>`문단 ${e+1}: 이것은 긴 텍스트 콘텐츠입니다. 스크롤이 필요한 긴 내용을 보여주기 위한 예시입니다. 각 문단은 충분한 길이를 가지고 있어 스크롤 영역의 동작을 확인할 수 있습니다.`).join(`

`),ur=Array.from({length:30},(r,e)=>`항목 ${e+1}`),q={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \`true\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \`true\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        `}}},args:{showVertical:!0,showHorizontal:!0},render:r=>({components:{ScrollArea:P},setup(){return{args:r}},template:`
      <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" v-bind="args">
        <div class="min-w-[800px] pr-4 pb-4">
          <p class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 콘텐츠</p>
          <div class="space-y-4">
            <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                항목 {{ i }}-{{ j }}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    `})},D={render:()=>({components:{ScrollArea:P},setup(){return{longText:Z}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스크롤 영역</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">긴 텍스트 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},N={render:()=>({components:{ScrollArea:P},setup(){return{longText:Z}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">세로 스크롤 (기본)</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" :show-vertical="true">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">세로로 스크롤 가능한 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},I={render:()=>({components:{ScrollArea:P},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">가로 스크롤</h3>
          <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4" :show-horizontal="true">
            <div class="pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">가로로 스크롤 가능한 콘텐츠</p>
              <div class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                <div v-for="i in 20" :key="i" class="min-w-[200px] rounded bg-gray-100 p-4">
                  넓은 콘텐츠 박스 {{ i }}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},O={render:()=>({components:{ScrollArea:P},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">양방향 스크롤</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="true"
            :show-horizontal="true"
          >
            <div class="pr-4 pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">
                세로와 가로 모두 스크롤 가능한 콘텐츠
              </p>
              <div class="space-y-4">
                <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                  <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                    항목 {{ i }}-{{ j }}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},M={render:()=>({components:{ScrollArea:P},setup(){return{longList:ur}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">리스트 콘텐츠</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300">
            <div class="p-2">
              <ul class="space-y-1">
                <li
                  v-for="(item, index) in longList"
                  :key="index"
                  class="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},j={render:()=>({components:{ScrollAreaAutoSize:Se,Button:Ve},setup(){const r=g(3);return{count:r,lorem:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!",decreaseCount:()=>{r.value=Math.max(0,r.value-1)},increaseCount:()=>{r.value=Math.min(10,r.value+1)}}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">자동 크기 조절</h3>
          <ScrollAreaAutoSize class="max-h-[300px] max-w-[400px] rounded border border-gray-300">
            <div class="p-4">
              <p v-for="i in count" :key="i" class="mb-4 text-sm text-gray-600">
                {{ lorem }}
              </p>
            </div>
          </ScrollAreaAutoSize>
        </div>
        <div class="flex justify-center gap-2">
          <Button
            color="danger"
            variant="filled"
            size="md"
            @click="decreaseCount"
            :disabled="count === 0"
          >
            문단 제거
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="md"
            @click="increaseCount"
            :disabled="count === 10"
          >
            문단 추가
          </Button>
        </div>
      </div>
    `})},Y={render:()=>({components:{ScrollArea:P},setup(){return{longText:Z}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스크롤바 없음</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="false"
            :show-horizontal="false"
          >
            <div class="pr-4">
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},W={render:()=>({components:{ScrollArea:P},setup(){return{longText:Z}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 크기</h3>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">작은 크기 (h-32)</p>
              <ScrollArea class="h-32 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">중간 크기 (h-48)</p>
              <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">큰 크기 (h-64)</p>
              <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    `})};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \\\`true\\\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \\\`true\\\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        \`
      }
    }
  },
  args: {
    showVertical: true,
    showHorizontal: true
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
      <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" v-bind="args">
        <div class="min-w-[800px] pr-4 pb-4">
          <p class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 콘텐츠</p>
          <div class="space-y-4">
            <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                항목 {{ i }}-{{ j }}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    \`
  })
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스크롤 영역</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">긴 텍스트 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">세로 스크롤 (기본)</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" :show-vertical="true">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">세로로 스크롤 가능한 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...N.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">가로 스크롤</h3>
          <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4" :show-horizontal="true">
            <div class="pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">가로로 스크롤 가능한 콘텐츠</p>
              <div class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                <div v-for="i in 20" :key="i" class="min-w-[200px] rounded bg-gray-100 p-4">
                  넓은 콘텐츠 박스 {{ i }}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">양방향 스크롤</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="true"
            :show-horizontal="true"
          >
            <div class="pr-4 pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">
                세로와 가로 모두 스크롤 가능한 콘텐츠
              </p>
              <div class="space-y-4">
                <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                  <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                    항목 {{ i }}-{{ j }}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longList
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">리스트 콘텐츠</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300">
            <div class="p-2">
              <ul class="space-y-1">
                <li
                  v-for="(item, index) in longList"
                  :key="index"
                  class="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollAreaAutoSize,
      Button
    },
    setup() {
      const count = ref(3);
      const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';
      const decreaseCount = () => {
        count.value = Math.max(0, count.value - 1);
      };
      const increaseCount = () => {
        count.value = Math.min(10, count.value + 1);
      };
      return {
        count,
        lorem,
        decreaseCount,
        increaseCount
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">자동 크기 조절</h3>
          <ScrollAreaAutoSize class="max-h-[300px] max-w-[400px] rounded border border-gray-300">
            <div class="p-4">
              <p v-for="i in count" :key="i" class="mb-4 text-sm text-gray-600">
                {{ lorem }}
              </p>
            </div>
          </ScrollAreaAutoSize>
        </div>
        <div class="flex justify-center gap-2">
          <Button
            color="danger"
            variant="filled"
            size="md"
            @click="decreaseCount"
            :disabled="count === 0"
          >
            문단 제거
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="md"
            @click="increaseCount"
            :disabled="count === 10"
          >
            문단 추가
          </Button>
        </div>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스크롤바 없음</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="false"
            :show-horizontal="false"
          >
            <div class="pr-4">
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...Y.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 크기</h3>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">작은 크기 (h-32)</p>
              <ScrollArea class="h-32 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">중간 크기 (h-48)</p>
              <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">큰 크기 (h-64)</p>
              <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...W.parameters?.docs?.source}}};const gr=["Playground","Basic","Vertical","Horizontal","Both","List","Autosize","NoScrollbars","DifferentSizes"];export{j as Autosize,D as Basic,O as Both,W as DifferentSizes,I as Horizontal,M as List,Y as NoScrollbars,q as Playground,N as Vertical,gr as __namedExportsOrder,hr as default};
