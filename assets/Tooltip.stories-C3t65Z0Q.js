import{r as w,y as K,d as g,g as T,o as m,w as f,f as y,c as M,p as B,u as i,b as h,k as A,A as oe,L as V,M as j,H as ne,x as ae,a0 as ie,G as se,B as X,l as re,t as le,N as ue,h as pe,a1 as de,j as ce,e as Ce,I as fe}from"./iframe-m8dtQMyq.js";import{u as G}from"./useForwardPropsEmits-D5t_9RYD.js";import{d as me,l as ge,u as x,P as U,c as Y,m as J,a as ye,b as W}from"./Primitive-D4N1wLbu.js";import{i as he,P as Te,b as ve,D as be,T as Be,a as xe}from"./PopperContent-CLDTRxSp.js";import{r as H}from"./index-NpKMaY7x.js";import{u as De}from"./useId-DDYllO4x.js";import{u as Q}from"./useForwardProps-DMPGBN8H.js";import{P as we}from"./Presence-B1L2nCTI.js";import{V as Ae}from"./VisuallyHidden-fe0brFRu.js";import{_ as P}from"./Button-HzhOak85.js";import{S as ke}from"./star-COVf4FpA.js";import{C as _e,a as Re}from"./circle-x-CypWh5ZC.js";import{C as Ee}from"./circle-alert-CbWVaaqB.js";import"./preload-helper-PPVm8Dsz.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";function qe(t,o){const e=me(!1,300),a=w(null),n=ge();function l(){a.value=null,e.value=!1}function r(p,d){const C=p.currentTarget,s={x:p.clientX,y:p.clientY},u=Pe(s,C.getBoundingClientRect()),c=Oe(s,u),v=Ie(d.getBoundingClientRect()),D=Fe([...c,...v]);a.value=D,e.value=!0}return K(p=>{if(t.value&&o.value){const d=s=>r(s,o.value),C=s=>r(s,t.value);t.value.addEventListener("pointerleave",d),o.value.addEventListener("pointerleave",C),p(()=>{t.value?.removeEventListener("pointerleave",d),o.value?.removeEventListener("pointerleave",C)})}}),K(p=>{if(a.value){const d=C=>{if(!a.value||!(C.target instanceof Element))return;const s=C.target,u={x:C.clientX,y:C.clientY},c=t.value?.contains(s)||o.value?.contains(s),v=!Se(u,a.value),D=!!s.closest("[data-grace-area-trigger]");c?l():(v||D)&&(l(),n.trigger())};t.value?.ownerDocument.addEventListener("pointermove",d),p(()=>t.value?.ownerDocument.removeEventListener("pointermove",d))}}),{isPointerInTransit:e,onPointerExit:n.on}}function Pe(t,o){const e=Math.abs(o.top-t.y),a=Math.abs(o.bottom-t.y),n=Math.abs(o.right-t.x),l=Math.abs(o.left-t.x);switch(Math.min(e,a,n,l)){case l:return"left";case n:return"right";case e:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function Oe(t,o,e=5){const a=[];switch(o){case"top":a.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":a.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":a.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":a.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return a}function Ie(t){const{top:o,right:e,bottom:a,left:n}=t;return[{x:n,y:o},{x:e,y:o},{x:e,y:a},{x:n,y:a}]}function Se(t,o){const{x:e,y:a}=t;let n=!1;for(let l=0,r=o.length-1;l<o.length;r=l++){const p=o[l].x,d=o[l].y,C=o[r].x,s=o[r].y;d>a!=s>a&&e<(C-p)*(a-d)/(s-d)+p&&(n=!n)}return n}function Fe(t){const o=t.slice();return o.sort((e,a)=>e.x<a.x?-1:e.x>a.x?1:e.y<a.y?-1:e.y>a.y?1:0),Ne(o)}function Ne(t){if(t.length<=1)return t.slice();const o=[];for(let a=0;a<t.length;a++){const n=t[a];for(;o.length>=2;){const l=o[o.length-1],r=o[o.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))o.pop();else break}o.push(n)}o.pop();const e=[];for(let a=t.length-1;a>=0;a--){const n=t[a];for(;e.length>=2;){const l=e[e.length-1],r=e[e.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))e.pop();else break}e.push(n)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const Ve={key:0,d:"M0 0L6 6L12 0"},je={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var Le=g({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const o=t;return x(),(e,a)=>(m(),T(i(U),B(o,{width:e.width,height:e.height,viewBox:e.asChild?void 0:"0 0 12 6",preserveAspectRatio:e.asChild?void 0:"none"}),{default:f(()=>[y(e.$slots,"default",{},()=>[e.rounded?(m(),M("path",je)):(m(),M("path",Ve))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),ze=Le;const Me={top:"bottom",right:"left",bottom:"top",left:"right"};var He=g({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const{forwardRef:o}=x(),e=he(),a=h(()=>Me[e.placedSide.value]);return(n,l)=>(m(),M("span",{ref:r=>{i(e).onArrowChange(r)},style:oe({position:"absolute",left:i(e).arrowX?.value?`${i(e).arrowX?.value}px`:void 0,top:i(e).arrowY?.value?`${i(e).arrowY?.value}px`:void 0,[a.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i(e).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i(e).placedSide.value],visibility:i(e).shouldHideArrow.value?"hidden":void 0})},[A(ze,B(n.$attrs,{ref:i(o),style:{display:"block"},as:n.as,"as-child":n.asChild,rounded:n.rounded,width:n.width,height:n.height}),{default:f(()=>[y(n.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),$e=He,Ke=g({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const o=t;return x(),(e,a)=>(m(),T(i($e),V(j(o)),{default:f(()=>[y(e.$slots,"default")]),_:3},16))}}),We=Ke;const[$,Xe]=Y("TooltipProvider");var Ge=g({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(t){const o=t,{delayDuration:e,skipDelayDuration:a,disableHoverableContent:n,disableClosingTrigger:l,ignoreNonKeyboardFocus:r,disabled:p}=ne(o);x();const d=w(!0),C=w(!1),{start:s,stop:u}=J(()=>{d.value=!0},a,{immediate:!1});return Xe({isOpenDelayed:d,delayDuration:e,onOpen(){u(),d.value=!1},onClose(){s()},isPointerInTransitRef:C,disableHoverableContent:n,disableClosingTrigger:l,disabled:p,ignoreNonKeyboardFocus:r}),(c,v)=>y(c.$slots,"default")}}),Ue=Ge;const Z="tooltip.open",[L,Ye]=Y("TooltipRoot");var Je=g({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:o}){const e=t,a=o;x();const n=$(),l=h(()=>e.disableHoverableContent??n.disableHoverableContent.value),r=h(()=>e.disableClosingTrigger??n.disableClosingTrigger.value),p=h(()=>e.disabled??n.disabled.value),d=h(()=>e.delayDuration??n.delayDuration.value),C=h(()=>e.ignoreNonKeyboardFocus??n.ignoreNonKeyboardFocus.value),s=ye(e,"open",a,{defaultValue:e.defaultOpen,passive:e.open===void 0});ae(s,q=>{n.onClose&&(q?(n.onOpen(),document.dispatchEvent(new CustomEvent(Z))):n.onClose())});const u=w(!1),c=w(),v=h(()=>s.value?u.value?"delayed-open":"instant-open":"closed"),{start:D,stop:E}=J(()=>{u.value=!0,s.value=!0},d,{immediate:!1});function b(){E(),u.value=!1,s.value=!0}function z(){E(),s.value=!1}function te(){D()}return Ye({contentId:"",open:s,stateAttribute:v,trigger:c,onTriggerChange(q){c.value=q},onTriggerEnter(){n.isOpenDelayed.value?te():b()},onTriggerLeave(){l.value?z():E()},onOpen:b,onClose:z,disableHoverableContent:l,disableClosingTrigger:r,disabled:p,ignoreNonKeyboardFocus:C}),(q,ut)=>(m(),T(i(Te),null,{default:f(()=>[y(q.$slots,"default",{open:i(s)})]),_:3}))}}),Qe=Je,Ze=g({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:o}){const e=t,a=o,n=L(),{forwardRef:l}=x(),r=ie(),p=h(()=>r.default?.({})),d=h(()=>{if(e.ariaLabel)return e.ariaLabel;let s="";function u(c){typeof c.children=="string"&&c.type!==se?s+=c.children:Array.isArray(c.children)&&c.children.forEach(v=>u(v))}return p.value?.forEach(c=>u(c)),s}),C=h(()=>{const{ariaLabel:s,...u}=e;return u});return X(()=>{W(window,"scroll",s=>{s.target?.contains(n.trigger.value)&&n.onClose()}),W(window,Z,n.onClose)}),(s,u)=>(m(),T(i(be),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:u[0]||(u[0]=c=>a("escapeKeyDown",c)),onPointerDownOutside:u[1]||(u[1]=c=>{i(n).disableClosingTrigger.value&&i(n).trigger.value?.contains(c.target)&&c.preventDefault(),a("pointerDownOutside",c)}),onFocusOutside:u[2]||(u[2]=ue(()=>{},["prevent"])),onDismiss:u[3]||(u[3]=c=>i(n).onClose())},{default:f(()=>[A(i(ve),B({ref:i(l),"data-state":i(n).stateAttribute.value},{...s.$attrs,...C.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:f(()=>[y(s.$slots,"default"),A(i(Ae),{id:i(n).contentId,role:"tooltip"},{default:f(()=>[re(le(d.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),ee=Ze,et=g({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(t){const e=Q(t),{forwardRef:a,currentElement:n}=x(),{trigger:l,onClose:r}=L(),p=$(),{isPointerInTransit:d,onPointerExit:C}=qe(l,n);return p.isPointerInTransitRef=d,C(()=>{r()}),(s,u)=>(m(),T(ee,B({ref:i(a)},i(e)),{default:f(()=>[y(s.$slots,"default")]),_:3},16))}}),tt=et,ot=g({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:o}){const e=t,a=o,n=L(),l=G(e,a),{forwardRef:r}=x();return(p,d)=>(m(),T(i(we),{present:p.forceMount||i(n).open.value},{default:f(()=>[(m(),T(pe(i(n).disableHoverableContent.value?ee:tt),B({ref:i(r)},i(l)),{default:f(()=>[y(p.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),nt=ot,at=g({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const o=t;return(e,a)=>(m(),T(i(Be),V(j(o)),{default:f(()=>[y(e.$slots,"default")]),_:3},16))}}),it=at,st=g({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const o=t,e=L(),a=$();e.contentId||=De(void 0,"reka-tooltip-content");const{forwardRef:n,currentElement:l}=x(),r=w(!1),p=w(!1),d=h(()=>e.disabled.value?{}:{click:E,focus:v,pointermove:u,pointerleave:c,pointerdown:s,blur:D});X(()=>{e.onTriggerChange(l.value)});function C(){setTimeout(()=>{r.value=!1},1)}function s(){e.open&&!e.disableClosingTrigger.value&&e.onClose(),r.value=!0,document.addEventListener("pointerup",C,{once:!0})}function u(b){b.pointerType!=="touch"&&!p.value&&!a.isPointerInTransitRef.value&&(e.onTriggerEnter(),p.value=!0)}function c(){e.onTriggerLeave(),p.value=!1}function v(b){r.value||e.ignoreNonKeyboardFocus.value&&!b.target.matches?.(":focus-visible")||e.onOpen()}function D(){e.onClose()}function E(){e.disableClosingTrigger.value||e.onClose()}return(b,z)=>(m(),T(i(xe),{"as-child":"",reference:b.reference},{default:f(()=>[A(i(U),B({ref:i(n),"aria-describedby":i(e).open.value?i(e).contentId:void 0,"data-state":i(e).stateAttribute.value,as:b.as,"as-child":o.asChild,"data-grace-area-trigger":""},de(d.value)),{default:f(()=>[y(b.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),rt=st;const k=g({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{default:0},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean},skipDelayDuration:{}},emits:["update:open"],setup(t,{emit:o}){const e=t,a=H(e,"open","defaultOpen"),n=H(e,"delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus","skipDelayDuration"),r=G(n,o);return(p,d)=>(m(),T(i(Ue),V(j(i(a))),{default:f(()=>[A(i(Qe),B({"data-slot":"tooltip"},i(r)),{default:f(C=>[y(p.$slots,"default",V(j(C)))]),_:3},16)]),_:3},16))}});k.__docgenInfo={exportName:"default",displayName:"TooltipRoot",type:1,props:[{name:"delayDuration",global:!1,description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",tags:[{name:"defaultValue",text:"700"}],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"disabled",global:!1,description:"When `true`, disable tooltip",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"defaultOpen",global:!1,description:`The open state of the tooltip when it is initially rendered.
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
browser tabs or closing a dialog.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",type:"number",description:"How much time a user has to enter another trigger without incurring a delay again.",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipRoot.vue"};const _=g({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(t){const o=t;return(e,a)=>(m(),T(i(rt),B({"data-slot":"tooltip-trigger"},o),{default:f(()=>[y(e.$slots,"default")]),_:3},16))}});_.__docgenInfo={exportName:"default",displayName:"TooltipTrigger",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"reference",global:!1,description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"reference",type:"ReferenceElement",description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipTrigger.vue"};const lt=Ce(["animate-in z-tooltip bg-gray-0 w-fit rounded-md border-transparent p-3 text-xs text-white","fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]),R=g({inheritAttrs:!1,__name:"TooltipContent",props:{class:{default:""},forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(t){const o=t,e=H(o,"class"),a=Q(e),n=h(()=>ce(lt(),o.class));return(l,r)=>(m(),T(i(it),null,{default:f(()=>[A(i(nt),B({"data-slot":"tooltip-content"},{...i(a),...l.$attrs},{class:n.value}),{default:f(()=>[y(l.$slots,"default"),A(i(We),{class:"z-tooltip size-1.5 w-3.5 rounded-xs"})]),_:3},16,["class"])]),_:3}))}});R.__docgenInfo={exportName:"default",displayName:"TooltipContent",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"align",global:!1,description:`The preferred alignment against the trigger.
May change when collisions occur.`,tags:[{name:"defaultValue",text:'"center"'}],required:!1,type:'"center" | "start" | "end"',declarations:[],schema:{kind:"enum",type:'"center" | "start" | "end"',schema:['"center"','"start"','"end"']}},{name:"collisionBoundary",global:!1,description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,tags:[{name:"defaultValue",text:"[]"}],required:!1,type:"Element | Element[]",declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,tags:[{name:"defaultValue",text:'"top"'}],required:!1,type:'"top" | "right" | "bottom" | "left"',declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"alignOffset",global:!1,description:"An offset in pixels from the `start` or `end` alignment options.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"avoidCollisions",global:!1,description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",global:!1,description:`The distance in pixels from the boundary edges where collision
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
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"align",type:'"center" | "start" | "end"',description:`The preferred alignment against the trigger.
May change when collisions occur.`,declarations:[],schema:{kind:"enum",type:'"center" | "start" | "end"',schema:['"center"','"start"','"end"']}},{name:"collisionBoundary",type:"Element | Element[]",description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"side",type:'"top" | "right" | "bottom" | "left"',description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"alignOffset",type:"number",description:"An offset in pixels from the `start` or `end` alignment options.",declarations:[],schema:"number"},{name:"avoidCollisions",type:"boolean",description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",type:"number",description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,declarations:[],schema:"number"},{name:"sticky",type:'"always" | "partial"',description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",type:"boolean",description:"Whether to hide the content when the trigger becomes fully occluded.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",type:'"fixed" | "absolute"',description:"The type of CSS position property to use.",declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",type:'"always" | "optimized"',description:"Strategy to update the position of the floating element on every animation frame.",declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"ariaLabel",type:"string",description:`By default, screenreaders will announce the content inside
the component. If this is not descriptive enough, or you have
content that cannot be announced, use aria-label as a more
descriptive label.`,declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipContent.vue"};const wt={title:"Shared/UI/Tooltip",component:k,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},O={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
        `}}},args:{defaultOpen:!1},render:t=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P},setup(){return{args:t}},template:`
      <TooltipRoot v-bind="args">
        <TooltipTrigger>
          <Button>호버하세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          이것은 툴팁 메시지입니다
        </TooltipContent>
      </TooltipRoot>
    `})},I={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P},template:`
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
    `})},S={parameters:{docs:{description:{story:`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다.
        `}}},render:()=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P},template:`
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
    `})},F={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P},template:`
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
    `})},N={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
툴팁 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P,CheckCircleIcon:Re,AlertCircleIcon:Ee,XCircleIcon:_e,InfoIcon:fe,StarIcon:ke},template:`
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
    `})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};const At=["Playground","Positions","LongText","DelayDuration","WithRichContent"];export{F as DelayDuration,S as LongText,O as Playground,I as Positions,N as WithRichContent,At as __namedExportsOrder,wt as default};
