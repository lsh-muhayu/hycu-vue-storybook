import{r as w,y as K,d as m,i as y,o as f,w as C,k as g,c as M,m as b,u as i,b as h,p as A,A as oe,D as V,E as j,G as ne,x as ae,B as X,q as ie,t as se,L as re,j as le,a6 as ue,e as pe,f as de,I as ce}from"./iframe-BZXk78k-.js";import{u as G}from"./useForwardPropsEmits-1p3a8tFT.js";import{g as Ce,l as fe,m as me,u as B,P as U,c as Y,n as J,a as ge,d as W}from"./Primitive-IFHeOL0I.js";import{i as ye,a as he,b as Te,P as ve}from"./PopperContent-D87jlNvJ.js";import{u as Q,r as H}from"./index-DhfPYRJo.js";import{u as be}from"./useId-BN1PvK4y.js";import{P as Be}from"./Presence-BHUuuzrb.js";import{D as xe,T as De}from"./Teleport-cgTD3qq9.js";import{V as we}from"./VisuallyHidden-DQ9eVcdt.js";import{_ as P}from"./Button-ONAiQhqG.js";import{S as Ae}from"./star-gv89s1U4.js";import{C as ke,a as _e}from"./circle-x-Bi5UffZb.js";import{C as Re}from"./circle-check-big-DXJpVThZ.js";import"./preload-helper-PPVm8Dsz.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";function Ee(t,o){const e=Ce(!1,300);fe(()=>{e.value=!1});const a=w(null),n=me();function l(){a.value=null,e.value=!1}function r(u,d){const p=u.currentTarget,s={x:u.clientX,y:u.clientY},c=qe(s,p.getBoundingClientRect()),T=Pe(s,c),x=Oe(d.getBoundingClientRect()),D=Se([...T,...x]);a.value=D,e.value=!0}return K(u=>{if(t.value&&o.value){const d=s=>r(s,o.value),p=s=>r(s,t.value);t.value.addEventListener("pointerleave",d),o.value.addEventListener("pointerleave",p),u(()=>{t.value?.removeEventListener("pointerleave",d),o.value?.removeEventListener("pointerleave",p)})}}),K(u=>{if(a.value){const d=p=>{if(!a.value||!(p.target instanceof Element))return;const s=p.target,c={x:p.clientX,y:p.clientY},T=t.value?.contains(s)||o.value?.contains(s),x=!Ie(c,a.value),D=!!s.closest("[data-grace-area-trigger]");T?l():(x||D)&&(l(),n.trigger())};t.value?.ownerDocument.addEventListener("pointermove",d),u(()=>t.value?.ownerDocument.removeEventListener("pointermove",d))}}),{isPointerInTransit:e,onPointerExit:n.on}}function qe(t,o){const e=Math.abs(o.top-t.y),a=Math.abs(o.bottom-t.y),n=Math.abs(o.right-t.x),l=Math.abs(o.left-t.x);switch(Math.min(e,a,n,l)){case l:return"left";case n:return"right";case e:return"top";case a:return"bottom";default:throw new Error("unreachable")}}function Pe(t,o,e=5){const a=[];switch(o){case"top":a.push({x:t.x-e,y:t.y+e},{x:t.x+e,y:t.y+e});break;case"bottom":a.push({x:t.x-e,y:t.y-e},{x:t.x+e,y:t.y-e});break;case"left":a.push({x:t.x+e,y:t.y-e},{x:t.x+e,y:t.y+e});break;case"right":a.push({x:t.x-e,y:t.y-e},{x:t.x-e,y:t.y+e});break}return a}function Oe(t){const{top:o,right:e,bottom:a,left:n}=t;return[{x:n,y:o},{x:e,y:o},{x:e,y:a},{x:n,y:a}]}function Ie(t,o){const{x:e,y:a}=t;let n=!1;for(let l=0,r=o.length-1;l<o.length;r=l++){const u=o[l].x,d=o[l].y,p=o[r].x,s=o[r].y;d>a!=s>a&&e<(p-u)*(a-d)/(s-d)+u&&(n=!n)}return n}function Se(t){const o=t.slice();return o.sort((e,a)=>e.x<a.x?-1:e.x>a.x?1:e.y<a.y?-1:e.y>a.y?1:0),Fe(o)}function Fe(t){if(t.length<=1)return t.slice();const o=[];for(let a=0;a<t.length;a++){const n=t[a];for(;o.length>=2;){const l=o[o.length-1],r=o[o.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))o.pop();else break}o.push(n)}o.pop();const e=[];for(let a=t.length-1;a>=0;a--){const n=t[a];for(;e.length>=2;){const l=e[e.length-1],r=e[e.length-2];if((l.x-r.x)*(n.y-r.y)>=(l.y-r.y)*(n.x-r.x))e.pop();else break}e.push(n)}return e.pop(),o.length===1&&e.length===1&&o[0].x===e[0].x&&o[0].y===e[0].y?o:o.concat(e)}const Ne={key:0,d:"M0 0L6 6L12 0"},Ve={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var je=m({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const o=t;return B(),(e,a)=>(f(),y(i(U),b(o,{width:e.width,height:e.height,viewBox:e.asChild?void 0:"0 0 12 6",preserveAspectRatio:e.asChild?void 0:"none"}),{default:C(()=>[g(e.$slots,"default",{},()=>[e.rounded?(f(),M("path",Ve)):(f(),M("path",Ne))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),Le=je;const ze={top:"bottom",right:"left",bottom:"top",left:"right"};var Me=m({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const{forwardRef:o}=B(),e=ye(),a=h(()=>ze[e.placedSide.value]);return(n,l)=>(f(),M("span",{ref:r=>{i(e).onArrowChange(r)},style:oe({position:"absolute",left:i(e).arrowX?.value?`${i(e).arrowX?.value}px`:void 0,top:i(e).arrowY?.value?`${i(e).arrowY?.value}px`:void 0,[a.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i(e).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i(e).placedSide.value],visibility:i(e).shouldHideArrow.value?"hidden":void 0})},[A(Le,b(n.$attrs,{ref:i(o),style:{display:"block"},as:n.as,"as-child":n.asChild,rounded:n.rounded,width:n.width,height:n.height}),{default:C(()=>[g(n.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),He=Me,$e=m({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(t){const o=t;return B(),(e,a)=>(f(),y(i(He),V(j(o)),{default:C(()=>[g(e.$slots,"default")]),_:3},16))}}),Ke=$e;const[$,We]=Y("TooltipProvider");var Xe=m({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(t){const o=t,{delayDuration:e,skipDelayDuration:a,disableHoverableContent:n,disableClosingTrigger:l,ignoreNonKeyboardFocus:r,disabled:u}=ne(o);B();const d=w(!0),p=w(!1),{start:s,stop:c}=J(()=>{d.value=!0},a,{immediate:!1});return We({isOpenDelayed:d,delayDuration:e,onOpen(){c(),d.value=!1},onClose(){s()},isPointerInTransitRef:p,disableHoverableContent:n,disableClosingTrigger:l,disabled:u,ignoreNonKeyboardFocus:r}),(T,x)=>g(T.$slots,"default")}}),Ge=Xe;const Z="tooltip.open",[L,Ue]=Y("TooltipRoot");var Ye=m({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:o}){const e=t,a=o;B();const n=$(),l=h(()=>e.disableHoverableContent??n.disableHoverableContent.value),r=h(()=>e.disableClosingTrigger??n.disableClosingTrigger.value),u=h(()=>e.disabled??n.disabled.value),d=h(()=>e.delayDuration??n.delayDuration.value),p=h(()=>e.ignoreNonKeyboardFocus??n.ignoreNonKeyboardFocus.value),s=ge(e,"open",a,{defaultValue:e.defaultOpen,passive:e.open===void 0});ae(s,q=>{n.onClose&&(q?(n.onOpen(),document.dispatchEvent(new CustomEvent(Z))):n.onClose())});const c=w(!1),T=w(),x=h(()=>s.value?c.value?"delayed-open":"instant-open":"closed"),{start:D,stop:E}=J(()=>{c.value=!0,s.value=!0},d,{immediate:!1});function v(){E(),c.value=!1,s.value=!0}function z(){E(),s.value=!1}function te(){D()}return Ue({contentId:"",open:s,stateAttribute:x,trigger:T,onTriggerChange(q){T.value=q},onTriggerEnter(){n.isOpenDelayed.value?te():v()},onTriggerLeave(){l.value?z():E()},onOpen:v,onClose:z,disableHoverableContent:l,disableClosingTrigger:r,disabled:u,ignoreNonKeyboardFocus:p}),(q,lt)=>(f(),y(i(he),null,{default:C(()=>[g(q.$slots,"default",{open:i(s)})]),_:3}))}}),Je=Ye,Qe=m({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:o}){const e=t,a=o,n=L(),{forwardRef:l,currentElement:r}=B(),u=h(()=>e.ariaLabel||r.value?.textContent),d=h(()=>{const{ariaLabel:p,...s}=e;return s});return X(()=>{W(window,"scroll",p=>{p.target?.contains(n.trigger.value)&&n.onClose()}),W(window,Z,n.onClose)}),(p,s)=>(f(),y(i(xe),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:s[0]||(s[0]=c=>a("escapeKeyDown",c)),onPointerDownOutside:s[1]||(s[1]=c=>{i(n).disableClosingTrigger.value&&i(n).trigger.value?.contains(c.target)&&c.preventDefault(),a("pointerDownOutside",c)}),onFocusOutside:s[2]||(s[2]=re(()=>{},["prevent"])),onDismiss:s[3]||(s[3]=c=>i(n).onClose())},{default:C(()=>[A(i(Te),b({ref:i(l),"data-state":i(n).stateAttribute.value},{...p.$attrs,...d.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:C(()=>[g(p.$slots,"default"),A(i(we),{id:i(n).contentId,role:"tooltip"},{default:C(()=>[ie(se(u.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),ee=Qe,Ze=m({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(t){const e=Q(t),{forwardRef:a,currentElement:n}=B(),{trigger:l,onClose:r}=L(),u=$(),{isPointerInTransit:d,onPointerExit:p}=Ee(l,n);return u.isPointerInTransitRef=d,p(()=>{r()}),(s,c)=>(f(),y(ee,b({ref:i(a)},i(e)),{default:C(()=>[g(s.$slots,"default")]),_:3},16))}}),et=Ze,tt=m({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(t,{emit:o}){const e=t,a=o,n=L(),l=G(e,a),{forwardRef:r}=B();return(u,d)=>(f(),y(i(Be),{present:u.forceMount||i(n).open.value},{default:C(()=>[(f(),y(le(i(n).disableHoverableContent.value?ee:et),b({ref:i(r)},i(l)),{default:C(()=>[g(u.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),ot=tt,nt=m({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const o=t;return(e,a)=>(f(),y(i(De),V(j(o)),{default:C(()=>[g(e.$slots,"default")]),_:3},16))}}),at=nt,it=m({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const o=t,e=L(),a=$();e.contentId||=be(void 0,"reka-tooltip-content");const{forwardRef:n,currentElement:l}=B(),r=w(!1),u=w(!1),d=h(()=>e.disabled.value?{}:{click:E,focus:x,pointermove:c,pointerleave:T,pointerdown:s,blur:D});X(()=>{e.onTriggerChange(l.value)});function p(){setTimeout(()=>{r.value=!1},1)}function s(){e.open&&!e.disableClosingTrigger.value&&e.onClose(),r.value=!0,document.addEventListener("pointerup",p,{once:!0})}function c(v){v.pointerType!=="touch"&&!u.value&&!a.isPointerInTransitRef.value&&(e.onTriggerEnter(),u.value=!0)}function T(){e.onTriggerLeave(),u.value=!1}function x(v){r.value||e.ignoreNonKeyboardFocus.value&&!v.target.matches?.(":focus-visible")||e.onOpen()}function D(){e.onClose()}function E(){e.disableClosingTrigger.value||e.onClose()}return(v,z)=>(f(),y(i(ve),{"as-child":"",reference:v.reference},{default:C(()=>[A(i(U),b({ref:i(n),"aria-describedby":i(e).open.value?i(e).contentId:void 0,"data-state":i(e).stateAttribute.value,as:v.as,"as-child":o.asChild,"data-grace-area-trigger":""},ue(d.value)),{default:C(()=>[g(v.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),st=it;const k=m({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{default:0},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean},skipDelayDuration:{}},emits:["update:open"],setup(t,{emit:o}){const e=t,a=H(e,"open","defaultOpen"),n=H(e,"delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus","skipDelayDuration"),r=G(n,o);return(u,d)=>(f(),y(i(Ge),V(j(i(a))),{default:C(()=>[A(i(Je),b({"data-slot":"tooltip"},i(r)),{default:C(p=>[g(u.$slots,"default",V(j(p)))]),_:3},16)]),_:3},16))}});k.__docgenInfo={exportName:"default",displayName:"TooltipRoot",type:1,props:[{name:"delayDuration",global:!1,description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",tags:[{name:"defaultValue",text:"700"}],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"disabled",global:!1,description:"When `true`, disable tooltip",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"defaultOpen",global:!1,description:`The open state of the tooltip when it is initially rendered.
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
browser tabs or closing a dialog.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",type:"number",description:"How much time a user has to enter another trigger without incurring a delay again.",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipRoot.vue"};const _=m({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(t){const o=t;return(e,a)=>(f(),y(i(st),b({"data-slot":"tooltip-trigger"},o),{default:C(()=>[g(e.$slots,"default")]),_:3},16))}});_.__docgenInfo={exportName:"default",displayName:"TooltipTrigger",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"reference",global:!1,description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"reference",type:"ReferenceElement",description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipTrigger.vue"};const rt=de(["animate-in z-tooltip bg-gray-0 w-fit rounded-md border-transparent p-3 text-xs text-white","fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]),R=m({inheritAttrs:!1,__name:"TooltipContent",props:{class:{default:""},forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(t){const o=t,e=H(o,"class"),a=Q(e),n=h(()=>pe(rt(),o.class));return(l,r)=>(f(),y(i(at),null,{default:C(()=>[A(i(ot),b({"data-slot":"tooltip-content"},{...i(a),...l.$attrs},{class:n.value}),{default:C(()=>[g(l.$slots,"default"),A(i(Ke),{class:"z-tooltip size-1.5 w-3.5 rounded-xs"})]),_:3},16,["class"])]),_:3}))}});R.__docgenInfo={exportName:"default",displayName:"TooltipContent",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"','"template"',{kind:"object",type:"{} & string"},{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
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
        `}}},render:()=>({components:{TooltipRoot:k,TooltipTrigger:_,TooltipContent:R,Button:P,CheckCircleIcon:Re,AlertCircleIcon:_e,XCircleIcon:ke,InfoIcon:ce,StarIcon:Ae},template:`
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
