import{r as g,e as E,d as w,N as re,v as x,o as b,x as m,h as S,O as F,u as a,q as L,y as R,A,s as W,w as ae,l as xe,B as Z,c as ce,a as ie,K as Se,F as ye,f as de,P as we,Q as _e}from"./iframe-DwJLYnb3.js";import{c as U,a as C,P as V,e as ue,f as X,d as te,g as Ae,w as Ce}from"./Primitive-C1XSYh85.js";import{r as pe,u as ze}from"./index-Bw5SyBdg.js";import{_ as Te}from"./Button-iYs-YSSD.js";import"./preload-helper-PPVm8Dsz.js";function Ee(r,e=Number.NEGATIVE_INFINITY,t=Number.POSITIVE_INFINITY){return Math.min(t,Math.max(e,r))}const[ve]=U("ConfigProvider");function Pe(r){const e=ve({dir:g("ltr")});return E(()=>r?.value||e.dir?.value||"ltr")}function ke(r){const e=ve({nonce:g()});return E(()=>r?.value||e.nonce?.value)}const[P,Be]=U("ScrollAreaRoot");var Re=w({__name:"ScrollAreaRoot",props:{type:{type:String,required:!1,default:"hover"},dir:{type:String,required:!1},scrollHideDelay:{type:Number,required:!1,default:600},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r,{expose:e}){const t=r,l=g(0),o=g(0),n=g(),c=g(),i=g(),d=g(),u=g(!1),v=g(!1),{type:_,dir:h,scrollHideDelay:y}=re(t),T=Pe(h);function k(){n.value?.scrollTo({top:0})}function B(){n.value?.scrollTo({top:0,left:0})}e({viewport:n,scrollTop:k,scrollTopLeft:B});const{forwardRef:s,currentElement:f}=C();return Be({type:_,dir:T,scrollHideDelay:y,scrollArea:f,viewport:n,onViewportChange:p=>{n.value=p||void 0},content:c,onContentChange:p=>{c.value=p},scrollbarX:i,scrollbarXEnabled:u,scrollbarY:d,scrollbarYEnabled:v,onScrollbarXChange:p=>{i.value=p||void 0},onScrollbarYChange:p=>{d.value=p||void 0},onScrollbarXEnabledChange:p=>{u.value=p},onScrollbarYEnabledChange:p=>{v.value=p},onCornerWidthChange:p=>{l.value=p},onCornerHeightChange:p=>{o.value=p}}),(p,oe)=>(b(),x(a(V),{ref:a(s),"as-child":t.asChild,as:p.as,dir:a(T),style:F({position:"relative","--reka-scroll-area-corner-width":`${l.value}px`,"--reka-scroll-area-corner-height":`${o.value}px`})},{default:m(()=>[S(p.$slots,"default")]),_:3},8,["as-child","as","dir","style"]))}}),Le=Re;function fe(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const l=(e[1]-e[0])/(r[1]-r[0]);return e[0]+l*(t-r[0])}}function G(r){const e=me(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,l=(r.scrollbar.size-t)*e;return Math.max(l,18)}function me(r,e){const t=r/e;return Number.isNaN(t)?0:t}function Ve(r,e=()=>{}){let t={left:r.scrollLeft,top:r.scrollTop},l=0;return(function o(){const n={left:r.scrollLeft,top:r.scrollTop},c=t.left!==n.left,i=t.top!==n.top;(c||i)&&e(),t=n,l=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(l)}function ne(r,e,t="ltr"){const l=G(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=e.scrollbar.size-o,c=e.content-e.viewport,i=n-l,d=t==="ltr"?[0,c]:[c*-1,0],u=Ee(r,d[0],d[1]);return fe([0,c],[0,i])(u)}function H(r){return r?Number.parseInt(r,10):0}function He(r,e,t,l="ltr"){const o=G(t),n=o/2,c=e||n,i=o-c,d=t.scrollbar.paddingStart+c,u=t.scrollbar.size-t.scrollbar.paddingEnd-i,v=t.content-t.viewport,_=l==="ltr"?[0,v]:[v*-1,0];return fe([d,u],_)(r)}function se(r,e){return r>0&&r<e}var $e=w({__name:"ScrollAreaScrollbarX",setup(r){const e=P(),t=Q(),{forwardRef:l,currentElement:o}=C();L(()=>{o.value&&e.onScrollbarXChange(o.value)});const n=E(()=>t.sizes.value);return(c,i)=>(b(),x(ge,{ref:a(l),"is-horizontal":!0,"data-orientation":"horizontal",style:F({bottom:0,left:a(e).dir.value==="rtl"?"var(--reka-scroll-area-corner-width)":0,right:a(e).dir.value==="ltr"?"var(--reka-scroll-area-corner-width)":0,"--reka-scroll-area-thumb-width":n.value?`${a(G)(n.value)}px`:void 0}),onOnDragScroll:i[0]||(i[0]=d=>a(t).onDragScroll(d.x))},{default:m(()=>[S(c.$slots,"default")]),_:3},8,["style"]))}}),qe=$e,Ne=w({__name:"ScrollAreaScrollbarY",setup(r){const e=P(),t=Q(),{forwardRef:l,currentElement:o}=C();L(()=>{o.value&&e.onScrollbarYChange(o.value)});const n=E(()=>t.sizes.value);return(c,i)=>(b(),x(ge,{ref:a(l),"is-horizontal":!1,"data-orientation":"vertical",style:F({top:0,right:a(e).dir.value==="ltr"?0:void 0,left:a(e).dir.value==="rtl"?0:void 0,bottom:"var(--reka-scroll-area-corner-height)","--reka-scroll-area-thumb-height":n.value?`${a(G)(n.value)}px`:void 0}),onOnDragScroll:i[0]||(i[0]=d=>a(t).onDragScroll(d.y))},{default:m(()=>[S(c.$slots,"default")]),_:3},8,["style"]))}}),De=Ne,Ie=w({__name:"ScrollAreaScrollbarAuto",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=P(),t=K(),{forwardRef:l}=C(),o=g(!1),n=ue(()=>{if(e.viewport.value){const c=e.viewport.value.offsetWidth<e.viewport.value.scrollWidth,i=e.viewport.value.offsetHeight<e.viewport.value.scrollHeight;o.value=t.isHorizontal.value?c:i}},10);return L(()=>n()),X(e.viewport,n),X(e.content,n),(c,i)=>(b(),x(a(te),{present:c.forceMount||o.value},{default:m(()=>[R(le,A(c.$attrs,{ref:a(l),"data-state":o.value?"visible":"hidden"}),{default:m(()=>[S(c.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),he=Ie,Oe=w({inheritAttrs:!1,__name:"ScrollAreaScrollbarHover",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=P(),{forwardRef:t}=C();let l;const o=g(!1);function n(){window.clearTimeout(l),o.value=!0}function c(){l=window.setTimeout(()=>{o.value=!1},e.scrollHideDelay.value)}return L(()=>{const i=e.scrollArea.value;i&&(i.addEventListener("pointerenter",n),i.addEventListener("pointerleave",c))}),W(()=>{const i=e.scrollArea.value;i&&(window.clearTimeout(l),i.removeEventListener("pointerenter",n),i.removeEventListener("pointerleave",c))}),(i,d)=>(b(),x(a(te),{present:i.forceMount||o.value},{default:m(()=>[R(he,A(i.$attrs,{ref:a(t),"data-state":o.value?"visible":"hidden"}),{default:m(()=>[S(i.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),Me=Oe,je=w({__name:"ScrollAreaScrollbarScroll",props:{forceMount:{type:Boolean,required:!1}},setup(r){const e=P(),t=K(),{forwardRef:l}=C(),{state:o,dispatch:n}=Ae("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}}),c=E(()=>o.value!=="hidden");ae(d=>{if(o.value==="idle"){const u=window.setTimeout(()=>n("HIDE"),e.scrollHideDelay.value);d(()=>{window.clearTimeout(u)})}});const i=ue(()=>n("SCROLL_END"),100);return ae(d=>{const u=e.viewport.value,v=t.isHorizontal.value?"scrollLeft":"scrollTop";if(u){let _=u[v];const h=()=>{const y=u[v];_!==y&&(n("SCROLL"),i()),_=y};u.addEventListener("scroll",h),d(()=>{u.removeEventListener("scroll",h)})}}),(d,u)=>(b(),x(a(te),{present:d.forceMount||c.value},{default:m(()=>[R(le,A(d.$attrs,{ref:a(l),"data-state":c.value?"visible":"hidden"}),{default:m(()=>[S(d.$slots,"default")]),_:3},16,["data-state"])]),_:3},8,["present"]))}}),Ye=je;const[K,Xe]=U("ScrollAreaScrollbar");var Fe=w({inheritAttrs:!1,__name:"ScrollAreaScrollbar",props:{orientation:{type:String,required:!1,default:"vertical"},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(r){const e=r,{forwardRef:t}=C(),l=P(),o=E(()=>e.orientation==="horizontal");xe(o,()=>{o.value?l.onScrollbarXEnabledChange(!0):l.onScrollbarYEnabledChange(!0)},{immediate:!0}),W(()=>{l.onScrollbarXEnabledChange(!1),l.onScrollbarYEnabledChange(!1)});const{orientation:n,forceMount:c,asChild:i,as:d}=re(e);return Xe({orientation:n,forceMount:c,isHorizontal:o,as:d,asChild:i}),(u,v)=>a(l).type.value==="hover"?(b(),x(Me,A({key:0},u.$attrs,{ref:a(t),"force-mount":a(c)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):a(l).type.value==="scroll"?(b(),x(Ye,A({key:1},u.$attrs,{ref:a(t),"force-mount":a(c)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):a(l).type.value==="auto"?(b(),x(he,A({key:2},u.$attrs,{ref:a(t),"force-mount":a(c)}),{default:m(()=>[S(u.$slots,"default")]),_:3},16,["force-mount"])):a(l).type.value==="always"?(b(),x(le,A({key:3},u.$attrs,{ref:a(t),"data-state":"visible"}),{default:m(()=>[S(u.$slots,"default")]),_:3},16)):Z("v-if",!0)}}),We=Fe;const[Q,Ue]=U("ScrollAreaScrollbarVisible");var Ge=w({__name:"ScrollAreaScrollbarVisible",setup(r){const e=P(),t=K(),{forwardRef:l}=C(),o=g({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),n=E(()=>{const s=me(o.value.viewport,o.value.content);return s>0&&s<1}),c=g(),i=g(0);function d(s,f){if(y.value){const p=e.viewport.value.scrollLeft+s.deltaY;e.viewport.value.scrollLeft=p,se(p,f)&&s.preventDefault()}else{const p=e.viewport.value.scrollTop+s.deltaY;e.viewport.value.scrollTop=p,se(p,f)&&s.preventDefault()}}function u(s,f){y.value?i.value=f.x:i.value=f.y}function v(s){i.value=0}function _(s){o.value=s}function h(s,f){return He(s,i.value,o.value,f)}const y=E(()=>t.isHorizontal.value);function T(s){y.value?e.viewport.value.scrollLeft=h(s,e.dir.value):e.viewport.value.scrollTop=h(s)}function k(){if(y.value){if(e.viewport.value&&c.value){const s=e.viewport.value.scrollLeft,f=ne(s,o.value,e.dir.value);c.value.style.transform=`translate3d(${f}px, 0, 0)`}}else if(e.viewport.value&&c.value){const s=e.viewport.value.scrollTop,f=ne(s,o.value);c.value.style.transform=`translate3d(0, ${f}px, 0)`}}function B(s){c.value=s}return Ue({sizes:o,hasThumb:n,handleWheelScroll:d,handleThumbDown:u,handleThumbUp:v,handleSizeChange:_,onThumbPositionChange:k,onThumbChange:B,onDragScroll:T}),(s,f)=>y.value?(b(),x(qe,A({key:0},s.$attrs,{ref:a(l)}),{default:m(()=>[S(s.$slots,"default")]),_:3},16)):(b(),x(De,A({key:1},s.$attrs,{ref:a(l)}),{default:m(()=>[S(s.$slots,"default")]),_:3},16))}}),le=Ge,Ke=w({__name:"ScrollAreaScrollbarImpl",props:{isHorizontal:{type:Boolean,required:!0}},emits:["onDragScroll","onWheelScroll","onThumbPointerDown"],setup(r,{emit:e}){const t=r,l=e,o=P(),n=Q(),c=K(),{forwardRef:i,currentElement:d}=C(),u=g(""),v=g();function _(s){if(v.value){const f=s.clientX-v.value?.left,p=s.clientY-v.value?.top;l("onDragScroll",{x:f,y:p})}}function h(s){s.button===0&&(s.target.setPointerCapture(s.pointerId),v.value=d.value.getBoundingClientRect(),u.value=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",o.viewport&&(o.viewport.value.style.scrollBehavior="auto"),_(s))}function y(s){_(s)}function T(s){const f=s.target;f.hasPointerCapture(s.pointerId)&&f.releasePointerCapture(s.pointerId),document.body.style.webkitUserSelect=u.value,o.viewport&&(o.viewport.value.style.scrollBehavior=""),v.value=void 0}function k(s){const f=s.target,p=d.value?.contains(f),oe=n.sizes.value.content-n.sizes.value.viewport;p&&n.handleWheelScroll(s,oe)}L(()=>{document.addEventListener("wheel",k,{passive:!1})}),W(()=>{document.removeEventListener("wheel",k)});function B(){d.value&&(t.isHorizontal?n.handleSizeChange({content:o.viewport.value?.scrollWidth??0,viewport:o.viewport.value?.offsetWidth??0,scrollbar:{size:d.value.clientWidth??0,paddingStart:H(getComputedStyle(d.value).paddingLeft),paddingEnd:H(getComputedStyle(d.value).paddingRight)}}):n.handleSizeChange({content:o.viewport.value?.scrollHeight??0,viewport:o.viewport.value?.offsetHeight??0,scrollbar:{size:d.value?.clientHeight??0,paddingStart:H(getComputedStyle(d.value).paddingTop),paddingEnd:H(getComputedStyle(d.value).paddingBottom)}}),n.onThumbPositionChange())}return X(d,B),X(o.content,B),(s,f)=>(b(),x(a(V),{ref:a(i),style:{position:"absolute"},"data-scrollbarimpl":"",as:a(c).as.value,"as-child":a(c).asChild.value,onPointerdown:h,onPointermove:y,onPointerup:T},{default:m(()=>[S(s.$slots,"default")]),_:3},8,["as","as-child"]))}}),ge=Ke,Qe=w({__name:"ScrollAreaThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r){const e=r,t=P(),l=Q();function o(h){const T=h.target.getBoundingClientRect(),k=h.clientX-T.left,B=h.clientY-T.top;l.handleThumbDown(h,{x:k,y:B})}function n(h){l.handleThumbUp(h)}const{forwardRef:c,currentElement:i}=C(),d=g(),u=E(()=>t.viewport.value);function v(){if(!d.value){const h=Ve(u.value,l.onThumbPositionChange);d.value=h,l.onThumbPositionChange()}}const _=E(()=>l.sizes.value);return Ce(_,()=>{l.onThumbChange(i.value),u.value&&(l.onThumbPositionChange(),u.value.addEventListener("scroll",v))}),W(()=>{u.value.removeEventListener("scroll",v),t.viewport.value?.removeEventListener("scroll",v)}),(h,y)=>(b(),x(a(V),{ref:a(c),"data-state":a(l).hasThumb?"visible":"hidden",style:{width:"var(--reka-scroll-area-thumb-width)",height:"var(--reka-scroll-area-thumb-height)"},"as-child":e.asChild,as:h.as,onPointerdown:o,onPointerup:n},{default:m(()=>[S(h.$slots,"default")]),_:3},8,["data-state","as-child","as"]))}}),Je=Qe,Ze=w({inheritAttrs:!1,__name:"ScrollAreaViewport",props:{nonce:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(r,{expose:e}){const t=r,{nonce:l}=re(t),o=ke(l),n=P(),c=g();L(()=>{n.onViewportChange(c.value),n.onContentChange(d.value)}),e({viewportElement:c});const{forwardRef:i,currentElement:d}=C();return(u,v)=>(b(),ce(ye,null,[ie("div",A({ref_key:"viewportElement",ref:c,"data-reka-scroll-area-viewport":"",style:{overflowX:a(n).scrollbarXEnabled.value?"scroll":"hidden",overflowY:a(n).scrollbarYEnabled.value?"scroll":"hidden"}},u.$attrs,{tabindex:0}),[R(a(V),{ref:a(i),style:F({minWidth:a(n).scrollbarXEnabled.value?"fit-content":void 0}),"as-child":t.asChild,as:u.as},{default:m(()=>[S(u.$slots,"default")]),_:3},8,["style","as-child","as"])],16),R(a(V),{as:"style",nonce:a(o)},{default:m(()=>v[0]||(v[0]=[Se(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-scroll-area-viewport] { scrollbar-width:none; -ms-overflow-style:none; -webkit-overflow-scrolling:touch; } [data-reka-scroll-area-viewport]::-webkit-scrollbar { display:none; } ")])),_:1,__:[0]},8,["nonce"])],64))}}),er=Ze;const ee=w({__name:"ScrollAreaScrollBar",props:{class:{},orientation:{default:"vertical"},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(r){const e=r,t=pe(e,"class");return(l,o)=>(b(),x(a(We),A(a(t),{class:a(de)("flex touch-none bg-gray-100/50 p-px transition-colors select-none",e.orientation==="vertical"&&"h-full w-2 border-l border-l-transparent",e.orientation==="horizontal"&&"h-2 flex-col border-t border-t-transparent",e.class),orientation:e.orientation}),{default:m(()=>[R(a(Je),{class:"relative flex-1 rounded-full bg-gray-300"})]),_:1},16,["class","orientation"]))}});ee.__docgenInfo={exportName:"default",displayName:"ScrollAreaScrollBar",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"}},{name:"orientation",defaultValue:{func:!1,value:"'vertical'"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollAreaScrollBar.vue"]};const z=w({__name:"ScrollArea",props:{showVertical:{type:Boolean,default:!0},showHorizontal:{type:Boolean,default:!1},class:{},type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{}},setup(r){const e=r,t=pe(e,"class");return(l,o)=>(b(),x(a(Le),A(a(t),{class:a(de)("relative",e.class)}),{default:m(()=>[R(a(er),{class:"size-full min-h-0 rounded-[inherit] outline-none"},{default:m(()=>[S(l.$slots,"default")]),_:3}),r.showVertical?(b(),x(ee,{key:0,orientation:"vertical"})):Z("",!0),r.showHorizontal?(b(),x(ee,{key:1,orientation:"horizontal"})):Z("",!0)]),_:3},16,["class"]))}});z.__docgenInfo={exportName:"default",displayName:"ScrollArea",description:"",tags:{},props:[{name:"showVertical",description:"세로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showHorizontal",description:"가로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollArea.vue"]};const rr={class:"flex overflow-auto"},tr={class:"flex shrink grow basis-[0%] flex-col"},be=w({inheritAttrs:!1,__name:"ScrollAreaAutoSize",props:{showVertical:{type:Boolean},showHorizontal:{type:Boolean},class:{},type:{},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{}},setup(r){const t=ze(r);return(l,o)=>(b(),ce("div",rr,[ie("div",tr,[R(z,we(_e({...l.$attrs,...a(t)})),{default:m(()=>[S(l.$slots,"default")]),_:3},16)])]))}});be.__docgenInfo={exportName:"default",displayName:"ScrollAreaAutoSize",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"}},{name:"showHorizontal",description:"가로 스크롤바 표시 여부",required:!1,type:{name:"boolean"}},{name:"showVertical",description:"세로 스크롤바 표시 여부",required:!1,type:{name:"boolean"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/scroll-area/ScrollAreaAutoSize.vue"]};const ir={title:"Shared/UI/ScrollArea",component:z,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"세로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"가로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},J=Array.from({length:50},(r,e)=>`문단 ${e+1}: 이것은 긴 텍스트 콘텐츠입니다. 스크롤이 필요한 긴 내용을 보여주기 위한 예시입니다. 각 문단은 충분한 길이를 가지고 있어 스크롤 영역의 동작을 확인할 수 있습니다.`).join(`

`),lr=Array.from({length:30},(r,e)=>`항목 ${e+1}`),$={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \`true\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \`true\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        `}}},args:{showVertical:!0,showHorizontal:!0},render:r=>({components:{ScrollArea:z},setup(){return{args:r}},template:`
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
    `})},q={render:()=>({components:{ScrollArea:z},setup(){return{longText:J}},template:`
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
    `})},N={render:()=>({components:{ScrollArea:z},setup(){return{longText:J}},template:`
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
    `})},D={render:()=>({components:{ScrollArea:z},template:`
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
    `})},I={render:()=>({components:{ScrollArea:z},template:`
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
    `})},O={render:()=>({components:{ScrollArea:z},setup(){return{longList:lr}},template:`
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
    `})},M={render:()=>({components:{ScrollAreaAutoSize:be,Button:Te},setup(){const r=g(3);return{count:r,lorem:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!",decreaseCount:()=>{r.value=Math.max(0,r.value-1)},increaseCount:()=>{r.value=Math.min(10,r.value+1)}}},template:`
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
    `})},j={render:()=>({components:{ScrollArea:z},setup(){return{longText:J}},template:`
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
    `})},Y={render:()=>({components:{ScrollArea:z},setup(){return{longText:J}},template:`
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
    `})};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}};const dr=["Playground","Basic","Vertical","Horizontal","Both","List","Autosize","NoScrollbars","DifferentSizes"];export{M as Autosize,q as Basic,I as Both,Y as DifferentSizes,D as Horizontal,O as List,j as NoScrollbars,$ as Playground,N as Vertical,dr as __namedExportsOrder,ir as default};
