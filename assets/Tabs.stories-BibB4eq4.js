import{q as I,d as b,J as P,r as L,f as C,o as g,w as d,i as y,u as e,b as c,C as z,g as V,B as j,h as $,Q as U,O as K,e as E,l as O,M as H,N as W,m as _}from"./iframe-wQXNwKp8.js";import{u as G}from"./useForwardPropsEmits-DsQBQ9GW.js";import{u as R,a as J,c as Q,P as q}from"./Primitive-CdtU2Bb9.js";import{u as X}from"./useDirection-CfVJfeiS.js";import{u as Y}from"./useId-Dq6X0MGr.js";import{r as F,u as Z}from"./index-BL19ASYD.js";import{a as ee,R as te}from"./RovingFocusItem-Mshfp1XU.js";import{P as ae}from"./Presence-CytVwZDL.js";import{B as ne}from"./bell-BjXQZAuD.js";import{S as se}from"./settings-CIyIpHeX.js";import{U as oe}from"./user-Cm_7lUCv.js";import"./preload-helper-PPVm8Dsz.js";import"./Collection-moN3PTrv.js";import"./usePrimitiveElement-Dgn9uO-o.js";import"./getActiveElement-FUKBWQwh.js";const re=I("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]),[S,ie]=Q("TabsRoot");var ue=b({__name:"TabsRoot",props:{defaultValue:{type:null,required:!1},orientation:{type:String,required:!1,default:"horizontal"},dir:{type:String,required:!1},activationMode:{type:String,required:!1,default:"automatic"},modelValue:{type:null,required:!1},unmountOnHide:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(n,{emit:t}){const o=n,a=t,{orientation:i,unmountOnHide:u,dir:r}=P(o),s=X(r);R();const l=J(o,"modelValue",a,{defaultValue:o.defaultValue,passive:o.modelValue===void 0}),p=L();return ie({modelValue:l,changeModelValue:m=>{l.value=m},orientation:i,dir:s,unmountOnHide:u,activationMode:o.activationMode,baseId:Y(void 0,"reka-tabs"),tabsList:p}),(m,ve)=>(g(),C(e(q),{dir:e(s),"data-orientation":e(i),"as-child":m.asChild,as:m.as},{default:d(()=>[y(m.$slots,"default",{modelValue:e(l)})]),_:3},8,["dir","data-orientation","as-child","as"]))}}),le=ue;function M(n,t){return`${n}-trigger-${t}`}function N(n,t){return`${n}-content-${t}`}var de=b({__name:"TabsContent",props:{value:{type:[String,Number],required:!0},forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const t=n,{forwardRef:o}=R(),a=S(),i=c(()=>M(a.baseId,t.value)),u=c(()=>N(a.baseId,t.value)),r=c(()=>t.value===a.modelValue.value),s=L(r.value);return z(()=>{requestAnimationFrame(()=>{s.value=!1})}),(l,p)=>(g(),C(e(ae),{present:l.forceMount||r.value,"force-mount":""},{default:d(({present:m})=>[V(e(q),{id:u.value,ref:e(o),"as-child":l.asChild,as:l.as,role:"tabpanel","data-state":r.value?"active":"inactive","data-orientation":e(a).orientation.value,"aria-labelledby":i.value,hidden:!m,tabindex:"0",style:j({animationDuration:s.value?"0s":void 0})},{default:d(()=>[!e(a).unmountOnHide.value||m?y(l.$slots,"default",{key:0}):$("v-if",!0)]),_:2},1032,["id","as-child","as","data-state","data-orientation","aria-labelledby","hidden","style"])]),_:3},8,["present"]))}}),pe=de,ce=b({__name:"TabsList",props:{loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(n){const t=n,{loop:o}=P(t),{forwardRef:a,currentElement:i}=R(),u=S();return u.tabsList=i,(r,s)=>(g(),C(e(ee),{"as-child":"",orientation:e(u).orientation.value,dir:e(u).dir.value,loop:e(o)},{default:d(()=>[V(e(q),{ref:e(a),role:"tablist","as-child":r.asChild,as:r.as,"aria-orientation":e(u).orientation.value},{default:d(()=>[y(r.$slots,"default")]),_:3},8,["as-child","as","aria-orientation"])]),_:3},8,["orientation","dir","loop"]))}}),me=ce,be=b({__name:"TabsTrigger",props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const t=n,{forwardRef:o}=R(),a=S(),i=c(()=>M(a.baseId,t.value)),u=c(()=>N(a.baseId,t.value)),r=c(()=>t.value===a.modelValue.value);return(s,l)=>(g(),C(e(te),{"as-child":"",focusable:!s.disabled,active:r.value},{default:d(()=>[V(e(q),{id:i.value,ref:e(o),role:"tab",type:s.as==="button"?"button":void 0,as:s.as,"as-child":s.asChild,"aria-selected":r.value?"true":"false","aria-controls":u.value,"data-state":r.value?"active":"inactive",disabled:s.disabled,"data-disabled":s.disabled?"":void 0,"data-orientation":e(a).orientation.value,onMousedown:l[0]||(l[0]=K(p=>{!s.disabled&&p.ctrlKey===!1?e(a).changeModelValue(s.value):p.preventDefault()},["left"])),onKeydown:l[1]||(l[1]=U(p=>e(a).changeModelValue(s.value),["enter","space"])),onFocus:l[2]||(l[2]=()=>{const p=e(a).activationMode!=="manual";!r.value&&!s.disabled&&p&&e(a).changeModelValue(s.value)})},{default:d(()=>[y(s.$slots,"default")]),_:3},8,["id","type","as","as-child","aria-selected","aria-controls","data-state","disabled","data-disabled","data-orientation"])]),_:3},8,["focusable","active"]))}}),Ce=be;const ge=O("flex flex-col gap-2"),h=b({__name:"Tabs",props:{class:{},defaultValue:{},orientation:{},dir:{},activationMode:{},modelValue:{},unmountOnHide:{type:Boolean},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(n,{emit:t}){const o=n,a=t,i=c(()=>E(ge(),o.class)),u=F(o,"class"),r=G(u,a);return(s,l)=>(g(),C(e(le),_({"data-slot":"tabs"},e(r),{class:i.value}),{default:d(p=>[y(s.$slots,"default",H(W(p)))]),_:3},16,["class"]))}});h.__docgenInfo={exportName:"default",displayName:"Tabs",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"dir",global:!1,description:"The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",tags:[],required:!1,type:"Direction",declarations:[],schema:{kind:"enum",type:"Direction",schema:['"ltr"','"rtl"']}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"orientation",global:!1,description:`The orientation the tabs are laid out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)`,tags:[{name:"defaultValue",text:"horizontal"}],required:!1,type:"DataOrientation",declarations:[],schema:{kind:"enum",type:"DataOrientation",schema:['"vertical"','"horizontal"']}},{name:"defaultValue",global:!1,description:"The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs",tags:[],required:!1,type:"StringOrNumber",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"modelValue",global:!1,description:"The controlled value of the tab to activate. Can be bind as `v-model`.",tags:[],required:!1,type:"StringOrNumber",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"activationMode",global:!1,description:"Whether a tab is activated automatically (on focus) or manually (on click).",tags:[{name:"defaultValue",text:"automatic"}],required:!1,type:'"automatic" | "manual"',declarations:[],schema:{kind:"enum",type:'"automatic" | "manual"',schema:['"automatic"','"manual"']}},{name:"unmountOnHide",global:!1,description:"When `true`, the element will be unmounted on closed state.",tags:[{name:"defaultValue",text:"`true`"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[payload: StringOrNumber]",signature:'(event: "update:modelValue", payload: StringOrNumber): void',declarations:[],schema:[{kind:"enum",type:"StringOrNumber",schema:["string","number"]}]}],slots:[{name:"default",type:"{ modelValue: StringOrNumber; }",description:"",declarations:[],schema:{kind:"object",type:"{ modelValue: StringOrNumber; }"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"dir",type:"Direction",description:"The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",declarations:[],schema:{kind:"enum",type:"Direction",schema:['"ltr"','"rtl"']}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"orientation",type:"DataOrientation",description:`The orientation the tabs are laid out.
Mainly so arrow navigation is done accordingly (left & right vs. up & down)`,declarations:[],schema:{kind:"enum",type:"DataOrientation",schema:['"vertical"','"horizontal"']}},{name:"defaultValue",type:"StringOrNumber",description:"The value of the tab that should be active when initially rendered. Use when you do not need to control the state of the tabs",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"modelValue",type:"StringOrNumber",description:"The controlled value of the tab to activate. Can be bind as `v-model`.",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"activationMode",type:'"automatic" | "manual"',description:"Whether a tab is activated automatically (on focus) or manually (on click).",declarations:[],schema:{kind:"enum",type:'"automatic" | "manual"',schema:['"automatic"','"manual"']}},{name:"unmountOnHide",type:"boolean",description:"When `true`, the element will be unmounted on closed state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tabs/Tabs.vue"};const ye=O(["inline-flex w-fit items-center justify-center border-b-2 border-gray-300"]),T=b({__name:"TabList",props:{class:{},loop:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const t=n,o=F(t,"class"),a=c(()=>E(ye(),t.class));return(i,u)=>(g(),C(e(me),_({"data-slot":"tabs-list"},e(o),{class:a.value}),{default:d(()=>[y(i.$slots,"default")]),_:3},16,["class"]))}});T.__docgenInfo={exportName:"default",displayName:"TabList",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"loop",global:!1,description:"When `true`, keyboard navigation will loop from last tab to first, and vice versa.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"loop",type:"boolean",description:"When `true`, keyboard navigation will loop from last tab to first, and vice versa.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tabs/TabList.vue"};const he=O(["not-disabled:hover:text-primary text-secondary text-sm font-bold whitespace-nowrap focus-visible:outline-none","relative -mb-[2px] inline-flex h-full items-center justify-center gap-1.5 px-6 py-3","data-[state=active]:border-primary data-[state=active]:text-primary border-b-2 border-transparent transition-[color,box-shadow,border-color]","cursor-pointer disabled:cursor-not-allowed disabled:opacity-50","[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"]),v=b({__name:"TabsTrigger",props:{class:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const t=n,o=F(t,"class"),a=c(()=>E(he(),t.class)),i=Z(o);return(u,r)=>(g(),C(e(Ce),_({"data-slot":"tabs-trigger",class:a.value},e(i)),{default:d(()=>[y(u.$slots,"default")]),_:3},16,["class"]))}});v.__docgenInfo={exportName:"default",displayName:"TabsTrigger",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"A unique value that associates the trigger with a content.",tags:[],required:!0,type:"StringOrNumber",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the tab.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"value",type:"StringOrNumber",description:"A unique value that associates the trigger with a content.",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the tab.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tabs/TabsTrigger.vue"};const Te=O("flex-1 outline-none"),f=b({__name:"TabsContent",props:{class:{},value:{},forceMount:{type:Boolean},asChild:{type:Boolean},as:{}},setup(n){const t=n,o=F(t,"class"),a=c(()=>E(Te(),t.class));return(i,u)=>(g(),C(e(pe),_({"data-slot":"tabs-content",class:a.value},e(o)),{default:d(()=>[y(i.$slots,"default")]),_:3},16,["class"]))}});f.__docgenInfo={exportName:"default",displayName:"TabsContent",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"value",global:!1,description:"A unique value that associates the content with a trigger.",tags:[],required:!0,type:"StringOrNumber",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"value",type:"StringOrNumber",description:"A unique value that associates the content with a trigger.",declarations:[],schema:{kind:"enum",type:"StringOrNumber",schema:["string","number"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tabs/TabsContent.vue"};const Pe={title:"Shared/UI/Tabs",component:h,parameters:{layout:"centered",docs:{description:{component:`
### 콘텐츠를 탭으로 구분하는 컴포넌트

Tabs 컴포넌트는 여러 콘텐츠 영역을 탭으로 구분하여 표시하는 데 사용됩니다. 
사용자가 탭을 클릭하면 해당 콘텐츠가 표시됩니다.

## 주요 기능

- **접근성 지원**: ARIA 속성을 통한 스크린 리더 지원
- **키보드 네비게이션**: 화살표 키로 탭 간 이동 가능
- **상태 관리**: 선택된 탭의 상태를 자동으로 관리
- **유연한 레이아웃**: 수평 및 수직 레이아웃 지원
- **커스터마이징**: 스타일 및 구조를 자유롭게 커스터마이징 가능

## 구성 요소

- **Tabs**: 탭 컴포넌트의 루트 컨테이너
- **TabList**: 탭 트리거들을 감싸는 컨테이너
- **TabsTrigger**: 각각의 탭 버튼
- **TabsContent**: 탭에 해당하는 콘텐츠 영역

## 사용 예시

\`\`\`vue
<Tabs default-value="tab1">
  <TabList>
    <TabsTrigger value="tab1">탭 1</TabsTrigger>
    <TabsTrigger value="tab2">탭 2</TabsTrigger>
  </TabList>
  <TabsContent value="tab1">탭 1의 콘텐츠</TabsContent>
  <TabsContent value="tab2">탭 2의 콘텐츠</TabsContent>
</Tabs>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{defaultValue:{control:"text",description:"기본으로 선택될 탭의 value",table:{type:{summary:"string"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"탭의 방향 (수평 또는 수직)",table:{type:{summary:"'horizontal' | 'vertical'"},defaultValue:{summary:"'horizontal'"}}}}},x={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tabs 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue, orientation 등의 속성을 변경해보세요.

## 사용 팁

- **DefaultValue**: 페이지 로드 시 기본으로 선택될 탭을 지정합니다.
- **Orientation**: 탭의 방향을 수평(horizontal) 또는 수직(vertical)으로 설정합니다.
        `}}},args:{defaultValue:"account",orientation:"horizontal"},render:n=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f},setup(){return{args:n}},template:`
      <div class="w-[500px]">
        <Tabs v-bind="args">
          <TabList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
            <TabsTrigger value="notifications">알림</TabsTrigger>
          </TabList>
          <TabsContent value="account" class="p-4">
            <h3 class="text-lg font-semibold mb-2">계정 설정</h3>
            <p class="text-sm text-gray-600">여기에서 계정 정보를 관리할 수 있습니다.</p>
          </TabsContent>
          <TabsContent value="password" class="p-4">
            <h3 class="text-lg font-semibold mb-2">비밀번호 변경</h3>
            <p class="text-sm text-gray-600">비밀번호를 안전하게 변경하세요.</p>
          </TabsContent>
          <TabsContent value="notifications" class="p-4">
            <h3 class="text-lg font-semibold mb-2">알림 설정</h3>
            <p class="text-sm text-gray-600">알림 수신 방법을 설정할 수 있습니다.</p>
          </TabsContent>
        </Tabs>
      </div>
    `})},B={render:()=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f},template:`
      <div class="w-[500px]">
        <Tabs default-value="tab1">
          <TabList>
            <TabsTrigger value="tab1">탭 1</TabsTrigger>
            <TabsTrigger value="tab2">탭 2</TabsTrigger>
            <TabsTrigger value="tab3">탭 3</TabsTrigger>
          </TabList>
          <TabsContent value="tab1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">첫 번째 탭</h3>
            <p class="text-sm text-gray-600">
              첫 번째 탭의 콘텐츠입니다. 여기에 원하는 내용을 추가할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="tab2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">두 번째 탭</h3>
            <p class="text-sm text-gray-600">
              두 번째 탭의 콘텐츠입니다. 각 탭은 독립적인 콘텐츠를 가질 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="tab3" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">세 번째 탭</h3>
            <p class="text-sm text-gray-600">
              세 번째 탭의 콘텐츠입니다. 탭의 개수는 자유롭게 조절할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    `})},D={render:()=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f,User:oe,Settings:se,Bell:ne,FileText:re},template:`
      <div class="w-[600px]">
        <Tabs default-value="profile">
          <TabList>
            <TabsTrigger value="profile">
              <User class="size-4" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings class="size-4" />
              설정
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell class="size-4" />
              알림
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText class="size-4" />
              문서
            </TabsTrigger>
          </TabList>
          <TabsContent value="profile" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <User class="size-5" />
              프로필 정보
            </h3>
            <p class="text-sm text-gray-600">
              사용자 프로필 정보를 확인하고 수정할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="settings" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <Settings class="size-5" />
              설정
            </h3>
            <p class="text-sm text-gray-600">
              애플리케이션의 다양한 설정을 변경할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="notifications" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <Bell class="size-5" />
              알림 센터
            </h3>
            <p class="text-sm text-gray-600">
              최근 알림을 확인하고 알림 설정을 관리할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="documents" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <FileText class="size-5" />
              문서 관리
            </h3>
            <p class="text-sm text-gray-600">
              업로드된 문서를 확인하고 관리할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    `})},k={render:()=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f},template:`
      <div class="w-[600px]">
        <Tabs default-value="overview">
          <TabList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="reports">보고서</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabList>
          <TabsContent value="overview" class="p-6 bg-blue-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-blue-900 mb-3">대시보드 개요</h3>
            <p class="text-sm text-blue-700 mb-4">
              주요 지표와 현황을 한눈에 확인할 수 있습니다.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">총 사용자</div>
                <div class="text-2xl font-bold text-gray-900">1,234</div>
              </div>
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">활성 세션</div>
                <div class="text-2xl font-bold text-gray-900">856</div>
              </div>
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">전환율</div>
                <div class="text-2xl font-bold text-gray-900">4.2%</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analytics" class="p-6 bg-green-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-green-900 mb-3">분석 데이터</h3>
            <p class="text-sm text-green-700">
              상세한 분석 데이터를 확인하고 인사이트를 얻으세요.
            </p>
          </TabsContent>
          <TabsContent value="reports" class="p-6 bg-purple-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-purple-900 mb-3">보고서</h3>
            <p class="text-sm text-purple-700">
              다양한 형태의 보고서를 생성하고 다운로드할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="settings" class="p-6 bg-gray-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-gray-900 mb-3">설정</h3>
            <p class="text-sm text-gray-700">
              대시보드의 다양한 옵션을 설정할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    `})},w={render:()=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f},template:`
      <div class="w-[700px]">
        <Tabs default-value="week1">
          <TabList>
            <TabsTrigger value="week1">1주차</TabsTrigger>
            <TabsTrigger value="week2">2주차</TabsTrigger>
            <TabsTrigger value="week3">3주차</TabsTrigger>
            <TabsTrigger value="week4">4주차</TabsTrigger>
            <TabsTrigger value="week5">5주차</TabsTrigger>
            <TabsTrigger value="week6">6주차</TabsTrigger>
            <TabsTrigger value="week7">7주차</TabsTrigger>
            <TabsTrigger value="week8">8주차</TabsTrigger>
          </TabList>
          <TabsContent value="week1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">1주차 학습 내용</h3>
            <p class="text-sm text-gray-600">React 기초: 컴포넌트와 Props</p>
          </TabsContent>
          <TabsContent value="week2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">2주차 학습 내용</h3>
            <p class="text-sm text-gray-600">State와 생명주기</p>
          </TabsContent>
          <TabsContent value="week3" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">3주차 학습 내용</h3>
            <p class="text-sm text-gray-600">이벤트 처리</p>
          </TabsContent>
          <TabsContent value="week4" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">4주차 학습 내용</h3>
            <p class="text-sm text-gray-600">조건부 렌더링</p>
          </TabsContent>
          <TabsContent value="week5" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">5주차 학습 내용</h3>
            <p class="text-sm text-gray-600">리스트와 Key</p>
          </TabsContent>
          <TabsContent value="week6" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">6주차 학습 내용</h3>
            <p class="text-sm text-gray-600">폼 다루기</p>
          </TabsContent>
          <TabsContent value="week7" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">7주차 학습 내용</h3>
            <p class="text-sm text-gray-600">합성 vs 상속</p>
          </TabsContent>
          <TabsContent value="week8" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">8주차 학습 내용</h3>
            <p class="text-sm text-gray-600">Hooks 소개</p>
          </TabsContent>
        </Tabs>
      </div>
    `})},A={render:()=>({components:{Tabs:h,TabList:T,TabsTrigger:v,TabsContent:f},template:`
      <div class="w-[500px]">
        <Tabs default-value="available1">
          <TabList>
            <TabsTrigger value="available1">사용 가능</TabsTrigger>
            <TabsTrigger value="disabled" disabled>비활성화됨</TabsTrigger>
            <TabsTrigger value="available2">사용 가능</TabsTrigger>
          </TabList>
          <TabsContent value="available1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">첫 번째 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭은 정상적으로 사용 가능합니다.
            </p>
          </TabsContent>
          <TabsContent value="disabled" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">비활성화된 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭은 비활성화되어 있어 접근할 수 없습니다.
            </p>
          </TabsContent>
          <TabsContent value="available2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">세 번째 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭도 정상적으로 사용 가능합니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    `})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Tabs 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 defaultValue, orientation 등의 속성을 변경해보세요.

## 사용 팁

- **DefaultValue**: 페이지 로드 시 기본으로 선택될 탭을 지정합니다.
- **Orientation**: 탭의 방향을 수평(horizontal) 또는 수직(vertical)으로 설정합니다.
        \`
      }
    }
  },
  args: {
    defaultValue: 'account',
    orientation: 'horizontal'
  },
  render: args => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: \`
      <div class="w-[500px]">
        <Tabs v-bind="args">
          <TabList>
            <TabsTrigger value="account">계정</TabsTrigger>
            <TabsTrigger value="password">비밀번호</TabsTrigger>
            <TabsTrigger value="notifications">알림</TabsTrigger>
          </TabList>
          <TabsContent value="account" class="p-4">
            <h3 class="text-lg font-semibold mb-2">계정 설정</h3>
            <p class="text-sm text-gray-600">여기에서 계정 정보를 관리할 수 있습니다.</p>
          </TabsContent>
          <TabsContent value="password" class="p-4">
            <h3 class="text-lg font-semibold mb-2">비밀번호 변경</h3>
            <p class="text-sm text-gray-600">비밀번호를 안전하게 변경하세요.</p>
          </TabsContent>
          <TabsContent value="notifications" class="p-4">
            <h3 class="text-lg font-semibold mb-2">알림 설정</h3>
            <p class="text-sm text-gray-600">알림 수신 방법을 설정할 수 있습니다.</p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent
    },
    /*html*/
    template: \`
      <div class="w-[500px]">
        <Tabs default-value="tab1">
          <TabList>
            <TabsTrigger value="tab1">탭 1</TabsTrigger>
            <TabsTrigger value="tab2">탭 2</TabsTrigger>
            <TabsTrigger value="tab3">탭 3</TabsTrigger>
          </TabList>
          <TabsContent value="tab1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">첫 번째 탭</h3>
            <p class="text-sm text-gray-600">
              첫 번째 탭의 콘텐츠입니다. 여기에 원하는 내용을 추가할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="tab2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">두 번째 탭</h3>
            <p class="text-sm text-gray-600">
              두 번째 탭의 콘텐츠입니다. 각 탭은 독립적인 콘텐츠를 가질 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="tab3" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">세 번째 탭</h3>
            <p class="text-sm text-gray-600">
              세 번째 탭의 콘텐츠입니다. 탭의 개수는 자유롭게 조절할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent,
      User,
      Settings,
      Bell,
      FileText
    },
    /*html*/
    template: \`
      <div class="w-[600px]">
        <Tabs default-value="profile">
          <TabList>
            <TabsTrigger value="profile">
              <User class="size-4" />
              프로필
            </TabsTrigger>
            <TabsTrigger value="settings">
              <Settings class="size-4" />
              설정
            </TabsTrigger>
            <TabsTrigger value="notifications">
              <Bell class="size-4" />
              알림
            </TabsTrigger>
            <TabsTrigger value="documents">
              <FileText class="size-4" />
              문서
            </TabsTrigger>
          </TabList>
          <TabsContent value="profile" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <User class="size-5" />
              프로필 정보
            </h3>
            <p class="text-sm text-gray-600">
              사용자 프로필 정보를 확인하고 수정할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="settings" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <Settings class="size-5" />
              설정
            </h3>
            <p class="text-sm text-gray-600">
              애플리케이션의 다양한 설정을 변경할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="notifications" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <Bell class="size-5" />
              알림 센터
            </h3>
            <p class="text-sm text-gray-600">
              최근 알림을 확인하고 알림 설정을 관리할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="documents" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2 flex items-center gap-2">
              <FileText class="size-5" />
              문서 관리
            </h3>
            <p class="text-sm text-gray-600">
              업로드된 문서를 확인하고 관리할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent
    },
    /*html*/
    template: \`
      <div class="w-[600px]">
        <Tabs default-value="overview">
          <TabList>
            <TabsTrigger value="overview">개요</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
            <TabsTrigger value="reports">보고서</TabsTrigger>
            <TabsTrigger value="settings">설정</TabsTrigger>
          </TabList>
          <TabsContent value="overview" class="p-6 bg-blue-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-blue-900 mb-3">대시보드 개요</h3>
            <p class="text-sm text-blue-700 mb-4">
              주요 지표와 현황을 한눈에 확인할 수 있습니다.
            </p>
            <div class="grid grid-cols-3 gap-4">
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">총 사용자</div>
                <div class="text-2xl font-bold text-gray-900">1,234</div>
              </div>
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">활성 세션</div>
                <div class="text-2xl font-bold text-gray-900">856</div>
              </div>
              <div class="p-3 bg-white rounded-md shadow-sm">
                <div class="text-xs text-gray-500">전환율</div>
                <div class="text-2xl font-bold text-gray-900">4.2%</div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="analytics" class="p-6 bg-green-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-green-900 mb-3">분석 데이터</h3>
            <p class="text-sm text-green-700">
              상세한 분석 데이터를 확인하고 인사이트를 얻으세요.
            </p>
          </TabsContent>
          <TabsContent value="reports" class="p-6 bg-purple-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-purple-900 mb-3">보고서</h3>
            <p class="text-sm text-purple-700">
              다양한 형태의 보고서를 생성하고 다운로드할 수 있습니다.
            </p>
          </TabsContent>
          <TabsContent value="settings" class="p-6 bg-gray-50 rounded-lg mt-2">
            <h3 class="text-xl font-bold text-gray-900 mb-3">설정</h3>
            <p class="text-sm text-gray-700">
              대시보드의 다양한 옵션을 설정할 수 있습니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent
    },
    /*html*/
    template: \`
      <div class="w-[700px]">
        <Tabs default-value="week1">
          <TabList>
            <TabsTrigger value="week1">1주차</TabsTrigger>
            <TabsTrigger value="week2">2주차</TabsTrigger>
            <TabsTrigger value="week3">3주차</TabsTrigger>
            <TabsTrigger value="week4">4주차</TabsTrigger>
            <TabsTrigger value="week5">5주차</TabsTrigger>
            <TabsTrigger value="week6">6주차</TabsTrigger>
            <TabsTrigger value="week7">7주차</TabsTrigger>
            <TabsTrigger value="week8">8주차</TabsTrigger>
          </TabList>
          <TabsContent value="week1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">1주차 학습 내용</h3>
            <p class="text-sm text-gray-600">React 기초: 컴포넌트와 Props</p>
          </TabsContent>
          <TabsContent value="week2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">2주차 학습 내용</h3>
            <p class="text-sm text-gray-600">State와 생명주기</p>
          </TabsContent>
          <TabsContent value="week3" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">3주차 학습 내용</h3>
            <p class="text-sm text-gray-600">이벤트 처리</p>
          </TabsContent>
          <TabsContent value="week4" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">4주차 학습 내용</h3>
            <p class="text-sm text-gray-600">조건부 렌더링</p>
          </TabsContent>
          <TabsContent value="week5" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">5주차 학습 내용</h3>
            <p class="text-sm text-gray-600">리스트와 Key</p>
          </TabsContent>
          <TabsContent value="week6" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">6주차 학습 내용</h3>
            <p class="text-sm text-gray-600">폼 다루기</p>
          </TabsContent>
          <TabsContent value="week7" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">7주차 학습 내용</h3>
            <p class="text-sm text-gray-600">합성 vs 상속</p>
          </TabsContent>
          <TabsContent value="week8" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">8주차 학습 내용</h3>
            <p class="text-sm text-gray-600">Hooks 소개</p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Tabs,
      TabList,
      TabsTrigger,
      TabsContent
    },
    /*html*/
    template: \`
      <div class="w-[500px]">
        <Tabs default-value="available1">
          <TabList>
            <TabsTrigger value="available1">사용 가능</TabsTrigger>
            <TabsTrigger value="disabled" disabled>비활성화됨</TabsTrigger>
            <TabsTrigger value="available2">사용 가능</TabsTrigger>
          </TabList>
          <TabsContent value="available1" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">첫 번째 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭은 정상적으로 사용 가능합니다.
            </p>
          </TabsContent>
          <TabsContent value="disabled" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">비활성화된 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭은 비활성화되어 있어 접근할 수 없습니다.
            </p>
          </TabsContent>
          <TabsContent value="available2" class="p-4 border border-gray-200 rounded-md mt-2">
            <h3 class="text-lg font-semibold mb-2">세 번째 탭</h3>
            <p class="text-sm text-gray-600">
              이 탭도 정상적으로 사용 가능합니다.
            </p>
          </TabsContent>
        </Tabs>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};const Le=["Playground","Basic","WithIcons","Styled","ManyTabs","Disabled"];export{B as Basic,A as Disabled,w as ManyTabs,x as Playground,k as Styled,D as WithIcons,Le as __namedExportsOrder,Pe as default};
