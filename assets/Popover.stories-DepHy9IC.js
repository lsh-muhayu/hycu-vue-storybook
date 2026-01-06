import{d as v,G as le,r as y,f as m,o as g,w as d,i as f,u as e,R as pe,J as de,D,E as w,g as z,m as B,L as V,C as ce,p as ue,b as me,e as ge,I as W}from"./iframe-tjKdkbKh.js";import{u as M}from"./useForwardPropsEmits-DY34lRGB.js";import{a as fe,c as ve,u as R,r as ye,P as $}from"./Primitive-CNkU7qnc.js";import{a as he,P as U,b as Pe}from"./PopperContent-eVBCai-6.js";import{u as N,r as be}from"./index-B_8CmmIl.js";import{u as L}from"./useId-DhxLyomN.js";import{P as xe}from"./Presence-CC0mzDFP.js";import{F as Ce,u as Be,e as ke,k as De}from"./context-CBPkq1qv.js";import{u as we}from"./useFocusGuards-D8BR6srG.js";import{D as Re,T as Te}from"./Teleport-DXIJqpd6.js";import{_ as x}from"./Button-BkTKVJse.js";import{h as H,g as K,f as G,c as J,b as Q,e as X,d as Y,a as Z,_ as ee,j as oe}from"./DialogConfirmButton-D8NcQJeY.js";import{_ as _e}from"./Checkbox-DQIWi8jo.js";import{S as te}from"./settings-B96hhJFe.js";import{U as qe}from"./user-DFzViUwm.js";import"./preload-helper-PPVm8Dsz.js";import"./useDirection-Bxi-6rvh.js";import"./getActiveElement-FUKBWQwh.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ScrollArea-Ci-4EXwp.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-C8XO6f9m.js";import"./RovingFocusItem-Df2d2dHT.js";import"./Collection-CgfLJrad.js";import"./usePrimitiveElement-IKPCnkqt.js";import"./RovingFocusGroup-CbYCrbUo.js";import"./VisuallyHiddenInput-0nzp1gaR.js";import"./VisuallyHidden-B4yxYVRe.js";import"./check-BO9C1y_-.js";const[k,Oe]=ve("PopoverRoot");var Ee=v({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},modal:{type:Boolean,required:!1,default:!1}},emits:["update:open"],setup(n,{emit:a}){const o=n,t=a,{modal:i}=le(o),r=fe(o,"open",t,{defaultValue:o.defaultOpen,passive:o.open===void 0}),p=y(),u=y(!1);return Oe({contentId:"",triggerId:"",modal:i,open:r,onOpenChange:s=>{r.value=s},onOpenToggle:()=>{r.value=!r.value},triggerElement:p,hasCustomAnchor:u}),(s,l)=>(g(),m(e(he),null,{default:d(()=>[f(s.$slots,"default",{open:e(r),close:()=>r.value=!1})]),_:3}))}}),Se=Ee,Ae=v({__name:"PopoverAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const a=n;R();const o=k();return pe(()=>{o.hasCustomAnchor.value=!0}),de(()=>{o.hasCustomAnchor.value=!1}),(t,i)=>(g(),m(e(U),D(w(a)),{default:d(()=>[f(t.$slots,"default")]),_:3},16))}}),Fe=Ae,Ie=v({__name:"PopoverContentImpl",props:{trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:a}){const o=n,t=a,i=N(ye(o,"trapFocus","disableOutsidePointerEvents")),{forwardRef:r}=R(),p=k();return we(),(u,s)=>(g(),m(e(Ce),{"as-child":"",loop:"",trapped:u.trapFocus,onMountAutoFocus:s[5]||(s[5]=l=>t("openAutoFocus",l)),onUnmountAutoFocus:s[6]||(s[6]=l=>t("closeAutoFocus",l))},{default:d(()=>[z(e(Re),{"as-child":"","disable-outside-pointer-events":u.disableOutsidePointerEvents,onPointerDownOutside:s[0]||(s[0]=l=>t("pointerDownOutside",l)),onInteractOutside:s[1]||(s[1]=l=>t("interactOutside",l)),onEscapeKeyDown:s[2]||(s[2]=l=>t("escapeKeyDown",l)),onFocusOutside:s[3]||(s[3]=l=>t("focusOutside",l)),onDismiss:s[4]||(s[4]=l=>e(p).onOpenChange(!1))},{default:d(()=>[z(e(Pe),B(e(i),{id:e(p).contentId,ref:e(r),"data-state":e(p).open.value?"open":"closed","aria-labelledby":e(p).triggerId,style:{"--reka-popover-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-popover-content-available-width":"var(--reka-popper-available-width)","--reka-popover-content-available-height":"var(--reka-popper-available-height)","--reka-popover-trigger-width":"var(--reka-popper-anchor-width)","--reka-popover-trigger-height":"var(--reka-popper-anchor-height)"},role:"dialog"}),{default:d(()=>[f(u.$slots,"default")]),_:3},16,["id","data-state","aria-labelledby"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),ne=Ie,je=v({__name:"PopoverContentModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:a}){const o=n,t=a,i=k(),r=y(!1);Be(!0);const p=M(o,t),{forwardRef:u,currentElement:s}=R();return ke(s),(l,c)=>(g(),m(ne,B(e(p),{ref:e(u),"trap-focus":e(i).open.value,"disable-outside-pointer-events":"",onCloseAutoFocus:c[0]||(c[0]=V(C=>{t("closeAutoFocus",C),r.value||e(i).triggerElement.value?.focus()},["prevent"])),onPointerDownOutside:c[1]||(c[1]=C=>{t("pointerDownOutside",C);const T=C.detail.originalEvent,se=T.button===0&&T.ctrlKey===!0,ie=T.button===2||se;r.value=ie}),onFocusOutside:c[2]||(c[2]=V(()=>{},["prevent"]))}),{default:d(()=>[f(l.$slots,"default")]),_:3},16,["trap-focus"]))}}),ze=je,Me=v({__name:"PopoverContentNonModal",props:{side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:a}){const o=n,t=a,i=k(),r=y(!1),p=y(!1),u=M(o,t);return(s,l)=>(g(),m(ne,B(e(u),{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:l[0]||(l[0]=c=>{t("closeAutoFocus",c),c.defaultPrevented||(r.value||e(i).triggerElement.value?.focus(),c.preventDefault()),r.value=!1,p.value=!1}),onInteractOutside:l[1]||(l[1]=async c=>{t("interactOutside",c),c.defaultPrevented||(r.value=!0,c.detail.originalEvent.type==="pointerdown"&&(p.value=!0));const C=c.target;e(i).triggerElement.value?.contains(C)&&c.preventDefault(),c.detail.originalEvent.type==="focusin"&&p.value&&c.preventDefault()})}),{default:d(()=>[f(s.$slots,"default")]),_:3},16))}}),Ne=Me,Ve=v({__name:"PopoverContent",props:{forceMount:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(n,{emit:a}){const o=n,t=a,i=k(),r=M(o,t),{forwardRef:p}=R();return i.contentId||=L(void 0,"reka-popover-content"),(u,s)=>(g(),m(e(xe),{present:u.forceMount||e(i).open.value},{default:d(()=>[e(i).modal.value?(g(),m(ze,B({key:0},e(r),{ref:e(p)}),{default:d(()=>[f(u.$slots,"default")]),_:3},16)):(g(),m(Ne,B({key:1},e(r),{ref:e(p)}),{default:d(()=>[f(u.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),$e=Ve,We=v({__name:"PopoverPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(n){const a=n;return(o,t)=>(g(),m(e(Te),D(w(a)),{default:d(()=>[f(o.$slots,"default")]),_:3},16))}}),Ue=We,Le=v({__name:"PopoverTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const a=n,o=k(),{forwardRef:t,currentElement:i}=R();return o.triggerId||=L(void 0,"reka-popover-trigger"),ce(()=>{o.triggerElement.value=i.value}),(r,p)=>(g(),m(ue(e(o).hasCustomAnchor.value?e($):e(U)),{"as-child":""},{default:d(()=>[z(e($),{id:e(o).triggerId,ref:e(t),type:r.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":e(o).open.value,"aria-controls":e(o).contentId,"data-state":e(o).open.value?"open":"closed",as:r.as,"as-child":a.asChild,onClick:e(o).onOpenToggle},{default:d(()=>[f(r.$slots,"default")]),_:3},8,["id","type","aria-expanded","aria-controls","data-state","as","as-child","onClick"])]),_:3}))}}),He=Le;const h=v({__name:"PopoverRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(n,{emit:a}){const i=M(n,a);return(r,p)=>(g(),m(e(Se),D(w(e(i))),{default:d(()=>[f(r.$slots,"default")]),_:3},16))}});h.__docgenInfo={exportName:"default",displayName:"PopoverRoot",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"defaultOpen",global:!1,description:"The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",global:!1,description:"The controlled open state of the popover.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",global:!1,description:"The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"defaultOpen",type:"boolean",description:"The open state of the popover when it is initially rendered. Use when you do not need to control its open state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",type:"boolean",description:"The controlled open state of the popover.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",type:"boolean",description:"The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/popover/PopoverRoot.vue"};const P=v({inheritAttrs:!1,__name:"PopoverTrigger",props:{asChild:{type:Boolean},as:{}},setup(n){const o=N(n);return(t,i)=>(g(),m(e(He),D(w(e(o))),{default:d(()=>[f(t.$slots,"default")]),_:3},16))}});P.__docgenInfo={exportName:"default",displayName:"PopoverTrigger",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/popover/PopoverTrigger.vue"};const b=v({inheritAttrs:!1,__name:"PopoverContent",props:{class:{default:""},container:{default:void 0},collisionBoundary:{default:void 0},forceMount:{type:Boolean},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{default:"center"},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{},disableOutsidePointerEvents:{type:Boolean}},setup(n){const a=n,o=be(a,"class","container","collisionBoundary"),t=N(o),{container:i,collisionBoundary:r,collisionPadding:p}=De({collisionBoundary:a.collisionBoundary,container:a.container}),u=me(()=>ge("w-full min-w-72 p-4","origin-(--radix-popover-content-transform-origin) rounded-md border border-gray-50 bg-white shadow-md outline-none","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",a.class));return(s,l)=>(g(),m(e(Ue),{to:e(i)},{default:d(()=>[z(e($e),B({...e(t),...s.$attrs},{class:u.value,"collision-boundary":e(r),"collision-padding":e(p)}),{default:d(()=>[f(s.$slots,"default")]),_:3},16,["class","collision-boundary","collision-padding"])]),_:3},8,["to"]))}});b.__docgenInfo={exportName:"default",displayName:"PopoverContent",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"align",global:!1,description:`The preferred alignment against the trigger.
May change when collisions occur.`,tags:[{name:"defaultValue",text:'"center"'}],required:!1,type:'"start" | "center" | "end"',declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']},default:'"center"'},{name:"collisionBoundary",global:!1,description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,tags:[{name:"defaultValue",text:"[]"}],required:!1,type:"Element | Element[]",declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]},default:"undefined"},{name:"container",global:!1,description:"",tags:[],required:!1,type:"string | HTMLElement",declarations:[],schema:{kind:"enum",type:"string | HTMLElement",schema:["string",{kind:"object",type:"HTMLElement"}]},default:"undefined"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableOutsidePointerEvents",global:!1,description:"When `true`, hover/focus/click interactions will be disabled on elements outside\nthe `DismissableLayer`. Users will need to click twice on outside elements to\ninteract with them: once to close the `DismissableLayer`, and again to trigger the element.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,tags:[{name:"defaultValue",text:'"top"'}],required:!1,type:'"top" | "right" | "bottom" | "left"',declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"sideFlip",global:!1,description:"Flip to the opposite side when colliding with boundary.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"alignOffset",global:!1,description:"An offset in pixels from the `start` or `end` alignment options.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"alignFlip",global:!1,description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",global:!1,description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",global:!1,description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",global:!1,description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"sticky",global:!1,description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,tags:[{name:"defaultValue",text:'"partial"'}],required:!1,type:'"always" | "partial"',declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",global:!1,description:"Whether to hide the content when the trigger becomes fully occluded.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",global:!1,description:"The type of CSS position property to use.",tags:[],required:!1,type:'"fixed" | "absolute"',declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",global:!1,description:"Strategy to update the position of the floating element on every animation frame.",tags:[{name:"defaultValue",text:"'optimized'"}],required:!1,type:'"always" | "optimized"',declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",global:!1,description:"Whether to disable the update position for the content when the layout shifted.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",global:!1,description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",global:!1,description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"sideOffset",type:"number",description:"The distance in pixels from the trigger.",declarations:[],schema:"number"},{name:"align",type:'"start" | "center" | "end"',description:`The preferred alignment against the trigger.
May change when collisions occur.`,declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']}},{name:"collisionBoundary",type:"Element | Element[]",description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"container",type:"string | HTMLElement",description:"",declarations:[],schema:{kind:"enum",type:"string | HTMLElement",schema:["string",{kind:"object",type:"HTMLElement"}]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableOutsidePointerEvents",type:"boolean",description:"When `true`, hover/focus/click interactions will be disabled on elements outside\nthe `DismissableLayer`. Users will need to click twice on outside elements to\ninteract with them: once to close the `DismissableLayer`, and again to trigger the element.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"side",type:'"top" | "right" | "bottom" | "left"',description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"sideFlip",type:"boolean",description:"Flip to the opposite side when colliding with boundary.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"alignOffset",type:"number",description:"An offset in pixels from the `start` or `end` alignment options.",declarations:[],schema:"number"},{name:"alignFlip",type:"boolean",description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",type:"boolean",description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",type:"number",description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,declarations:[],schema:"number"},{name:"sticky",type:'"always" | "partial"',description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",type:"boolean",description:"Whether to hide the content when the trigger becomes fully occluded.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",type:'"fixed" | "absolute"',description:"The type of CSS position property to use.",declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",type:'"always" | "optimized"',description:"Strategy to update the position of the floating element on every animation frame.",declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",type:"boolean",description:"Whether to disable the update position for the content when the layout shifted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",type:"boolean",description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",type:"ReferenceElement",description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/popover/PopoverContent.vue"};const ae=v({inheritAttrs:!1,__name:"PopoverAnchor",props:{reference:{},asChild:{type:Boolean},as:{}},setup(n){const o=N(n);return(t,i)=>(g(),m(e(Fe),D(w(e(o))),{default:d(()=>[f(t.$slots,"default")]),_:3},16))}});ae.__docgenInfo={exportName:"default",displayName:"PopoverAnchor",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"reference",global:!1,description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"reference",type:"ReferenceElement",description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/popover/PopoverAnchor.vue"};const re=v({inheritAttrs:!1,__name:"Popover",setup(n){return(a,o)=>(g(),m(h,null,{default:d(()=>[f(a.$slots,"default")]),_:3}))}});re.__docgenInfo={exportName:"default",displayName:"Popover",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/popover/Popover.vue"};const ko={title:"Shared/UI/Popover",component:re,parameters:{layout:"centered",docs:{description:{component:`
### 팝오버 컴포넌트

Popover 컴포넌트는 트리거 요소 근처에 표시되는 작은 오버레이입니다.
Reka UI의 Popover 프리미티브를 기반으로 구축되었으며, 접근성과 키보드 네비게이션을 완벽하게 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Popover\`, \`PopoverTrigger\`, \`PopoverContent\`, \`PopoverAnchor\`로 구성
- **위치 조정**: \`side\`와 \`align\` prop을 통해 팝오버 위치 제어
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **충돌 감지**: 화면 경계나 다른 요소와의 충돌 시 자동으로 위치 조정
- **Dialog 내부 사용**: Dialog 내부에서 사용 시 collisionBoundary를 자동으로 DialogBody로 제한
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<template>
  <Popover>
    <PopoverTrigger>
      <Button>팝오버 열기</Button>
    </PopoverTrigger>
    <PopoverContent>
      <p>팝오버 내용</p>
    </PopoverContent>
  </Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverTrigger, PopoverContent } from '@/shared/ui/popover';
import { Button } from '@/shared/ui/button';
<\/script>
\`\`\`
        `}}},tags:["autodocs"]},_={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x},template:`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>팝오버 열기</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold">팝오버 제목</h4>
            <p class="text-sm text-gray-600">이것은 기본 팝오버입니다.</p>
          </div>
        </PopoverContent>
      </PopoverRoot>
    `})},q={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x,Info:W},template:`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>상세 정보 보기</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <Info class="size-5 text-blue-500" />
              <h4 class="font-semibold">정보 팝오버</h4>
            </div>
            <p class="text-sm text-gray-600">
              이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수 있습니다.
            </p>
            <div class="flex gap-2">
              <Button size="sm" variant="filled" color="primary">확인</Button>
              <Button size="sm" variant="outlined" color="secondary">취소</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverRoot>
    `})},O={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">Side 위치</h3>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <PopoverRoot>
              <PopoverTrigger>
                <Button>위 (top)</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                <p class="text-sm">위쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>오른쪽 (right)</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                <p class="text-sm">오른쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>아래 (bottom)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <p class="text-sm">아래쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>왼쪽 (left)</Button>
              </PopoverTrigger>
              <PopoverContent side="left">
                <p class="text-sm">왼쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
          </div>
        </div>
        
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">Align 정렬</h3>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <PopoverRoot>
              <PopoverTrigger>
                <Button>시작 (start)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="start">
                <p class="text-sm">시작 정렬</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>중앙 (center)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="center">
                <p class="text-sm">중앙 정렬</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>끝 (end)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end">
                <p class="text-sm">끝 정렬</p>
              </PopoverContent>
            </PopoverRoot>
          </div>
        </div>
      </div>
    `})},E={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,PopoverAnchor:ae,Button:x},template:`
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-700">Anchor를 사용한 팝오버</h3>
        <div class="flex items-center gap-4">
          <PopoverRoot>
            <PopoverTrigger>
              <Button>트리거 버튼</Button>
            </PopoverTrigger>
            <PopoverAnchor>
              <div class="rounded-md border-2 border-dashed border-blue-300 p-4">
                <p class="text-sm text-gray-600">이 영역이 Anchor입니다</p>
              </div>
            </PopoverAnchor>
            <PopoverContent>
              <p class="text-sm">이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다.</p>
            </PopoverContent>
          </PopoverRoot>
        </div>
      </div>
    `})},S={parameters:{docs:{description:{story:`
Dialog 내부에서 Popover를 사용할 때, PopoverContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 Popover가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: PopoverContent가 렌더링된 가장 가까운 부모에서 \`data-slot="dialog-body"\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.
        `}}},render:()=>({components:{Dialog:oe,DialogContent:ee,DialogHeader:Z,DialogBody:Y,DialogFooter:X,DialogTitle:Q,DialogDescription:J,DialogCancelButton:G,DialogConfirmButton:K,DialogClose:H,Button:x,PopoverRoot:h,PopoverTrigger:P,PopoverContent:b},setup(){return{isOpen:y(!1)}},template:`
      <div>
        <Button @click="isOpen = true">Dialog 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px] w-[600px]">
            <DialogHeader>
              <DialogTitle>Dialog 내부의 Popover</DialogTitle>
              <DialogDescription>
                이 Dialog 내부에서 Popover를 사용하면 자동으로 DialogBody를 collisionBoundary로 인식합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="flex flex-col gap-4">
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않습니다.
                </p>
                <div class="flex gap-4">
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>팝오버 열기 (위)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="top">
                      <div class="flex flex-col gap-2">
                        <h4 class="font-semibold">Dialog 내부 팝오버</h4>
                        <p class="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>팝오버 열기 (아래)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom">
                      <div class="flex flex-col gap-2">
                        <h4 class="font-semibold">Dialog 내부 팝오버</h4>
                        <p class="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                </div>
                <div class="mt-8 flex flex-col gap-2">
                  <p class="text-sm text-gray-600">
                    스크롤을 내려서 더 많은 내용을 확인해보세요.
                  </p>
                  <p v-for="i in 20" :key="i" class="text-sm text-gray-500">
                    추가 콘텐츠 {{ i }}
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},A={parameters:{docs:{description:{story:`
Dialog 내부에서 Popover의 콘텐츠가 매우 길 때의 동작을 확인할 수 있습니다.
Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정하며, 필요시 스크롤이 가능합니다.

**주요 동작**:
- Popover의 높이가 DialogBody를 초과하면 자동으로 위치 조정
- Popover 내부에 스크롤이 필요한 경우 자동으로 처리
- collisionBoundary가 DialogBody로 설정되어 Dialog 영역을 벗어나지 않음
        `}}},render:()=>({components:{Dialog:oe,DialogContent:ee,DialogHeader:Z,DialogBody:Y,DialogFooter:X,DialogTitle:Q,DialogDescription:J,DialogCancelButton:G,DialogConfirmButton:K,DialogClose:H,Button:x,PopoverRoot:h,PopoverTrigger:P,PopoverContent:b},setup(){return{isOpen:y(!1)}},template:`
      <div>
        <Button @click="isOpen = true">Dialog 열기 (긴 콘텐츠 Popover)</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px] w-[600px]">
            <DialogHeader>
              <DialogTitle>긴 콘텐츠가 있는 Popover</DialogTitle>
              <DialogDescription>
                Dialog 내부에서 Popover의 콘텐츠가 매우 길 때 어떻게 동작하는지 확인할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="flex flex-col gap-4">
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 매우 긴 콘텐츠를 가진 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다.
                </p>
                <div class="flex flex-wrap gap-4">
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (위)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="top" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (아래)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (오른쪽)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="right" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                </div>
                <div class="mt-4 flex flex-col gap-2">
                  <p class="text-sm font-medium text-gray-700">DialogBody 내부 콘텐츠</p>
                  <p class="text-sm text-gray-600">
                    DialogBody 내부에 충분한 콘텐츠가 있어도 Popover는 영역을 벗어나지 않습니다.
                  </p>
                  <p v-for="i in 10" :key="i" class="text-sm text-gray-500">
                    추가 콘텐츠 {{ i }} - DialogBody 내부의 스크롤 가능한 영역입니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},F={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x},setup(){return{open:y(!1)}},template:`
      <div class="flex flex-col gap-4">
        <PopoverRoot v-model:open="open">
          <PopoverTrigger>
            <Button>제어된 팝오버</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div class="flex flex-col gap-2">
              <h4 class="font-semibold">제어 컴포넌트</h4>
              <p class="text-sm text-gray-600">
                이 팝오버는 외부에서 상태를 제어할 수 있습니다.
              </p>
              <Button size="sm" @click="open = false">닫기</Button>
            </div>
          </PopoverContent>
        </PopoverRoot>
        <p class="text-sm text-gray-600">열림 상태: {{ open ? '열림' : '닫힘' }}</p>
      </div>
    `})},I={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x,Checkbox:_e,Settings:te},setup(){const n=y(!1),a=y(!0),o=y(!1);return{notificationEnabled:n,emailEnabled:a,pushEnabled:o}},template:`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>설정 열기</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Settings class="size-5 text-gray-500" />
              <h4 class="font-semibold">설정</h4>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-sm">알림 받기</span>
                <Checkbox v-model:checked="notificationEnabled" />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">이메일 알림</span>
                <Checkbox v-model:checked="emailEnabled" />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">푸시 알림</span>
                <Checkbox v-model:checked="pushEnabled" />
              </div>
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="filled" color="primary" class="flex-1">저장</Button>
              <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverRoot>
    `})},j={render:()=>({components:{PopoverRoot:h,PopoverTrigger:P,PopoverContent:b,Button:x,User:qe,Settings:te,Info:W},template:`
      <div class="flex flex-col gap-6">
        <h3 class="text-sm font-semibold text-gray-700">여러 개의 팝오버</h3>
        <div class="flex flex-wrap gap-4">
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="primary">
                <User class="size-4" />
                사용자 정보
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">사용자 정보</h4>
                <p class="text-sm text-gray-600">이름: 홍길동</p>
                <p class="text-sm text-gray-600">이메일: hong@example.com</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
          
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="secondary">
                <Settings class="size-4" />
                설정
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">설정</h4>
                <p class="text-sm text-gray-600">다양한 설정 옵션을 확인할 수 있습니다.</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
          
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="success">
                <Info class="size-4" />
                정보
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">정보</h4>
                <p class="text-sm text-gray-600">추가 정보를 확인할 수 있습니다.</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
        </div>
      </div>
    `})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button
    },
    template: \`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>팝오버 열기</Button>
        </PopoverTrigger>
        <PopoverContent>
          <div class="flex flex-col gap-2">
            <h4 class="font-semibold">팝오버 제목</h4>
            <p class="text-sm text-gray-600">이것은 기본 팝오버입니다.</p>
          </div>
        </PopoverContent>
      </PopoverRoot>
    \`
  })
}`,..._.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button,
      Info
    },
    template: \`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>상세 정보 보기</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <Info class="size-5 text-blue-500" />
              <h4 class="font-semibold">정보 팝오버</h4>
            </div>
            <p class="text-sm text-gray-600">
              이 팝오버는 더 많은 정보를 표시할 수 있습니다. 여러 줄의 텍스트와 아이콘을 포함할 수 있습니다.
            </p>
            <div class="flex gap-2">
              <Button size="sm" variant="filled" color="primary">확인</Button>
              <Button size="sm" variant="outlined" color="secondary">취소</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverRoot>
    \`
  })
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button
    },
    template: \`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">Side 위치</h3>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <PopoverRoot>
              <PopoverTrigger>
                <Button>위 (top)</Button>
              </PopoverTrigger>
              <PopoverContent side="top">
                <p class="text-sm">위쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>오른쪽 (right)</Button>
              </PopoverTrigger>
              <PopoverContent side="right">
                <p class="text-sm">오른쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>아래 (bottom)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom">
                <p class="text-sm">아래쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>왼쪽 (left)</Button>
              </PopoverTrigger>
              <PopoverContent side="left">
                <p class="text-sm">왼쪽에 표시되는 팝오버</p>
              </PopoverContent>
            </PopoverRoot>
          </div>
        </div>
        
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">Align 정렬</h3>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <PopoverRoot>
              <PopoverTrigger>
                <Button>시작 (start)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="start">
                <p class="text-sm">시작 정렬</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>중앙 (center)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="center">
                <p class="text-sm">중앙 정렬</p>
              </PopoverContent>
            </PopoverRoot>
            
            <PopoverRoot>
              <PopoverTrigger>
                <Button>끝 (end)</Button>
              </PopoverTrigger>
              <PopoverContent side="bottom" align="end">
                <p class="text-sm">끝 정렬</p>
              </PopoverContent>
            </PopoverRoot>
          </div>
        </div>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      PopoverAnchor,
      Button
    },
    template: \`
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-gray-700">Anchor를 사용한 팝오버</h3>
        <div class="flex items-center gap-4">
          <PopoverRoot>
            <PopoverTrigger>
              <Button>트리거 버튼</Button>
            </PopoverTrigger>
            <PopoverAnchor>
              <div class="rounded-md border-2 border-dashed border-blue-300 p-4">
                <p class="text-sm text-gray-600">이 영역이 Anchor입니다</p>
              </div>
            </PopoverAnchor>
            <PopoverContent>
              <p class="text-sm">이 팝오버는 Anchor 영역을 기준으로 위치가 결정됩니다.</p>
            </PopoverContent>
          </PopoverRoot>
        </div>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 Popover를 사용할 때, PopoverContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 Popover가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: PopoverContent가 렌더링된 가장 가까운 부모에서 \\\`data-slot="dialog-body"\\\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button,
      PopoverRoot,
      PopoverTrigger,
      PopoverContent
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: \`
      <div>
        <Button @click="isOpen = true">Dialog 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px] w-[600px]">
            <DialogHeader>
              <DialogTitle>Dialog 내부의 Popover</DialogTitle>
              <DialogDescription>
                이 Dialog 내부에서 Popover를 사용하면 자동으로 DialogBody를 collisionBoundary로 인식합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="flex flex-col gap-4">
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않습니다.
                </p>
                <div class="flex gap-4">
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>팝오버 열기 (위)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="top">
                      <div class="flex flex-col gap-2">
                        <h4 class="font-semibold">Dialog 내부 팝오버</h4>
                        <p class="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>팝오버 열기 (아래)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom">
                      <div class="flex flex-col gap-2">
                        <h4 class="font-semibold">Dialog 내부 팝오버</h4>
                        <p class="text-sm text-gray-600">
                          이 팝오버는 DialogBody 영역을 벗어나지 않습니다.
                        </p>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                </div>
                <div class="mt-8 flex flex-col gap-2">
                  <p class="text-sm text-gray-600">
                    스크롤을 내려서 더 많은 내용을 확인해보세요.
                  </p>
                  <p v-for="i in 20" :key="i" class="text-sm text-gray-500">
                    추가 콘텐츠 {{ i }}
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 Popover의 콘텐츠가 매우 길 때의 동작을 확인할 수 있습니다.
Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정하며, 필요시 스크롤이 가능합니다.

**주요 동작**:
- Popover의 높이가 DialogBody를 초과하면 자동으로 위치 조정
- Popover 내부에 스크롤이 필요한 경우 자동으로 처리
- collisionBoundary가 DialogBody로 설정되어 Dialog 영역을 벗어나지 않음
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button,
      PopoverRoot,
      PopoverTrigger,
      PopoverContent
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: \`
      <div>
        <Button @click="isOpen = true">Dialog 열기 (긴 콘텐츠 Popover)</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px] w-[600px]">
            <DialogHeader>
              <DialogTitle>긴 콘텐츠가 있는 Popover</DialogTitle>
              <DialogDescription>
                Dialog 내부에서 Popover의 콘텐츠가 매우 길 때 어떻게 동작하는지 확인할 수 있습니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="flex flex-col gap-4">
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 매우 긴 콘텐츠를 가진 Popover가 열립니다. Popover는 DialogBody 영역을 벗어나지 않도록 자동으로 위치를 조정합니다.
                </p>
                <div class="flex flex-wrap gap-4">
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (위)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="top" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (아래)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="bottom" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                  
                  <PopoverRoot>
                    <PopoverTrigger>
                      <Button>긴 콘텐츠 팝오버 (오른쪽)</Button>
                    </PopoverTrigger>
                    <PopoverContent side="right" class="max-h-[400px] w-80">
                      <div class="flex flex-col gap-3">
                        <h4 class="font-semibold">매우 긴 콘텐츠</h4>
                        <div class="flex flex-col gap-2 overflow-y-auto">
                          <div v-for="i in 50" :key="i" class="rounded border border-gray-200 p-2">
                            <p class="text-sm font-medium">항목 {{ i }}</p>
                            <p class="text-xs text-gray-600">
                              이것은 매우 긴 콘텐츠입니다. Popover의 높이가 DialogBody를 초과하면 자동으로 위치가 조정되고, 필요시 스크롤이 가능합니다.
                            </p>
                          </div>
                        </div>
                        <div class="flex gap-2 border-t border-gray-200 pt-2">
                          <Button size="sm" variant="filled" color="primary" class="flex-1">확인</Button>
                          <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </PopoverRoot>
                </div>
                <div class="mt-4 flex flex-col gap-2">
                  <p class="text-sm font-medium text-gray-700">DialogBody 내부 콘텐츠</p>
                  <p class="text-sm text-gray-600">
                    DialogBody 내부에 충분한 콘텐츠가 있어도 Popover는 영역을 벗어나지 않습니다.
                  </p>
                  <p v-for="i in 10" :key="i" class="text-sm text-gray-500">
                    추가 콘텐츠 {{ i }} - DialogBody 내부의 스크롤 가능한 영역입니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button
    },
    setup() {
      const open = ref(false);
      return {
        open
      };
    },
    template: \`
      <div class="flex flex-col gap-4">
        <PopoverRoot v-model:open="open">
          <PopoverTrigger>
            <Button>제어된 팝오버</Button>
          </PopoverTrigger>
          <PopoverContent>
            <div class="flex flex-col gap-2">
              <h4 class="font-semibold">제어 컴포넌트</h4>
              <p class="text-sm text-gray-600">
                이 팝오버는 외부에서 상태를 제어할 수 있습니다.
              </p>
              <Button size="sm" @click="open = false">닫기</Button>
            </div>
          </PopoverContent>
        </PopoverRoot>
        <p class="text-sm text-gray-600">열림 상태: {{ open ? '열림' : '닫힘' }}</p>
      </div>
    \`
  })
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button,
      Checkbox,
      Settings
    },
    setup() {
      const notificationEnabled = ref(false);
      const emailEnabled = ref(true);
      const pushEnabled = ref(false);
      return {
        notificationEnabled,
        emailEnabled,
        pushEnabled
      };
    },
    template: \`
      <PopoverRoot>
        <PopoverTrigger>
          <Button>설정 열기</Button>
        </PopoverTrigger>
        <PopoverContent class="w-80">
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <Settings class="size-5 text-gray-500" />
              <h4 class="font-semibold">설정</h4>
            </div>
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-sm">알림 받기</span>
                <Checkbox v-model:checked="notificationEnabled" />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">이메일 알림</span>
                <Checkbox v-model:checked="emailEnabled" />
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm">푸시 알림</span>
                <Checkbox v-model:checked="pushEnabled" />
              </div>
            </div>
            <div class="flex gap-2">
              <Button size="sm" variant="filled" color="primary" class="flex-1">저장</Button>
              <Button size="sm" variant="outlined" color="secondary" class="flex-1">취소</Button>
            </div>
          </div>
        </PopoverContent>
      </PopoverRoot>
    \`
  })
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      PopoverRoot,
      PopoverTrigger,
      PopoverContent,
      Button,
      User,
      Settings,
      Info
    },
    template: \`
      <div class="flex flex-col gap-6">
        <h3 class="text-sm font-semibold text-gray-700">여러 개의 팝오버</h3>
        <div class="flex flex-wrap gap-4">
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="primary">
                <User class="size-4" />
                사용자 정보
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">사용자 정보</h4>
                <p class="text-sm text-gray-600">이름: 홍길동</p>
                <p class="text-sm text-gray-600">이메일: hong@example.com</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
          
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="secondary">
                <Settings class="size-4" />
                설정
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">설정</h4>
                <p class="text-sm text-gray-600">다양한 설정 옵션을 확인할 수 있습니다.</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
          
          <PopoverRoot>
            <PopoverTrigger>
              <Button variant="outlined" color="success">
                <Info class="size-4" />
                정보
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div class="flex flex-col gap-2">
                <h4 class="font-semibold">정보</h4>
                <p class="text-sm text-gray-600">추가 정보를 확인할 수 있습니다.</p>
              </div>
            </PopoverContent>
          </PopoverRoot>
        </div>
      </div>
    \`
  })
}`,...j.parameters?.docs?.source}}};const Do=["Basic","WithRichContent","Positions","WithAnchor","InDialog","InDialogWithLongContent","Controlled","WithForm","MultiplePopovers"];export{_ as Basic,F as Controlled,S as InDialog,A as InDialogWithLongContent,j as MultiplePopovers,O as Positions,E as WithAnchor,I as WithForm,q as WithRichContent,Do as __namedExportsOrder,ko as default};
