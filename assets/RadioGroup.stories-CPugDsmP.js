import{l as te,d as k,G as M,c as I,i as L,o as y,w as s,k as D,f as W,u as n,m as _,L as K,p as a,r as T,M as se,D as ne,E as re,a as H,b as ie,e as Y,g as t,q as i,t as N}from"./iframe-C6tJOgiQ.js";import{u as le}from"./useForwardPropsEmits-DCkqJ_DF.js";import{a as J,u as $,P as j,c as Q,d as z}from"./Primitive-OrzvqD-q.js";import{u as de}from"./useDirection-CaHATTYr.js";import{u as X}from"./useFormControl-BIt0mlrD.js";import{R as ue}from"./RovingFocusGroup-aanPv62i.js";import{V as Z}from"./VisuallyHiddenInput-kN_bDKPM.js";import{r as ee,u as pe}from"./index-CUkdWtIY.js";import{R as ce}from"./RovingFocusItem-BOWiuxfV.js";import{h as me}from"./handleAndDispatchCustomEvent-ChOKVcqp.js";import{i as fe}from"./ohash.D__AXeF1-C-E83dC9.js";import{P as ve}from"./Presence-BQVPF7Ob.js";import{_ as r}from"./Label-Cz8_g_o6.js";import{_ as U}from"./Button-DlZwUQ15.js";import"./preload-helper-PPVm8Dsz.js";import"./Collection-QF7ncEsy.js";import"./usePrimitiveElement-xgLQeR_A.js";import"./getActiveElement-FUKBWQwh.js";import"./VisuallyHidden-CLLPRKRu.js";import"./useId-BZul0DWv.js";const ge=te("circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]),Ce="radio.select";function be(c,u,e){me(Ce,e,{originalEvent:c,value:u})}var ye=k({__name:"Radio",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},checked:{type:Boolean,required:!1,default:void 0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:checked","select"],setup(c,{emit:u}){const e=c,d=u,m=J(e,"checked",d,{passive:e.checked===void 0}),{value:C}=M(e),{forwardRef:v,currentElement:o}=$(),f=X(o),b=I(()=>e.id&&o.value?document.querySelector(`[for="${e.id}"]`)?.innerText??e.value:void 0);function x(p){e.disabled||be(p,e.value,h=>{d("select",h),!h?.defaultPrevented&&(m.value=!0,f.value&&h.stopPropagation())})}return(p,h)=>(y(),L(n(j),_(p.$attrs,{id:p.id,ref:n(v),role:"radio",type:p.as==="button"?"button":void 0,as:p.as,"aria-checked":n(m),"aria-label":b.value,"as-child":p.asChild,disabled:p.disabled?"":void 0,"data-state":n(m)?"checked":"unchecked","data-disabled":p.disabled?"":void 0,value:n(C),required:p.required,name:p.name,onClick:K(x,["stop"])}),{default:s(()=>[D(p.$slots,"default",{checked:n(m)}),n(f)&&p.name?(y(),L(n(Z),{key:0,type:"radio",tabindex:"-1",value:n(C),checked:!!n(m),name:p.name,disabled:p.disabled,required:p.required},null,8,["value","checked","name","disabled","required"])):W("v-if",!0)]),_:3},16,["id","type","as","aria-checked","aria-label","as-child","disabled","data-state","data-disabled","value","required","name"]))}}),xe=ye;const[he,Re]=Q("RadioGroupRoot");var Ge=k({__name:"RadioGroupRoot",props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(c,{emit:u}){const e=c,d=u,{forwardRef:m,currentElement:C}=$(),v=J(e,"modelValue",d,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),{disabled:o,loop:f,orientation:b,name:x,required:p,dir:h}=M(e),R=de(h),G=X(C);return Re({modelValue:v,changeModelValue:B=>{v.value=B},disabled:o,loop:f,orientation:b,name:x?.value,required:p}),(B,fa)=>(y(),L(n(ue),{"as-child":"",orientation:n(b),dir:n(R),loop:n(f)},{default:s(()=>[a(n(j),{ref:n(m),role:"radiogroup","data-disabled":n(o)?"":void 0,"as-child":B.asChild,as:B.as,"aria-orientation":n(b),"aria-required":n(p),dir:n(R)},{default:s(()=>[D(B.$slots,"default",{modelValue:n(v)}),n(G)&&n(x)?(y(),L(n(Z),{key:0,required:n(p),disabled:n(o),value:n(v),name:n(x)},null,8,["required","disabled","value","name"])):W("v-if",!0)]),_:3},8,["data-disabled","as-child","as","aria-orientation","aria-required","dir"])]),_:3},8,["orientation","dir","loop"]))}}),Be=Ge;const[Le,ke]=Q("RadioGroupItem");var De=k({inheritAttrs:!1,__name:"RadioGroupItem",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["select"],setup(c,{emit:u}){const e=c,d=u,{forwardRef:m,currentElement:C}=$(),v=he(),o=I(()=>v.disabled.value||e.disabled),f=I(()=>v.required.value||e.required),b=I(()=>fe(v.modelValue?.value,e.value));ke({disabled:o,checked:b});const x=T(!1),p=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];z("keydown",R=>{p.includes(R.key)&&(x.value=!0)}),z("keyup",()=>{x.value=!1});function h(){setTimeout(()=>{x.value&&C.value?.click()},0)}return(R,G)=>(y(),L(n(ce),{checked:b.value,disabled:o.value,"as-child":"",focusable:!o.value,active:b.value},{default:s(()=>[a(xe,_({...R.$attrs,...e},{ref:n(m),checked:b.value,required:f.value,disabled:o.value,"onUpdate:checked":G[0]||(G[0]=B=>n(v).changeModelValue(R.value)),onSelect:G[1]||(G[1]=B=>d("select",B)),onKeydown:G[2]||(G[2]=se(K(()=>{},["prevent"]),["enter"])),onFocus:h}),{default:s(()=>[D(R.$slots,"default",{checked:b.value,required:f.value,disabled:o.value})]),_:3},16,["checked","required","disabled"])]),_:3},8,["checked","disabled","focusable","active"]))}}),Ie=De,_e=k({__name:"RadioGroupIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(c){const{forwardRef:u}=$(),e=Le();return(d,m)=>(y(),L(n(ve),{present:d.forceMount||n(e).checked.value},{default:s(()=>[a(n(j),_({ref:n(u),"data-state":n(e).checked.value?"checked":"unchecked","data-disabled":n(e).disabled.value?"":void 0,"as-child":d.asChild,as:d.as},d.$attrs),{default:s(()=>[D(d.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),we=_e;const g=k({__name:"RadioGroup",props:{class:{},modelValue:{},defaultValue:{},disabled:{type:Boolean},orientation:{},dir:{},loop:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(c,{emit:u}){const e=c,d=u,m=ee(e,"class"),C=le(m,d);return(v,o)=>(y(),L(n(Be),_({"data-slot":"radio-group",class:n(H)("grid gap-3",e.class)},n(C)),{default:s(f=>[D(v.$slots,"default",ne(re(f)))]),_:3},16,["class"]))}});g.__docgenInfo={exportName:"default",displayName:"RadioGroup",type:1,props:[{name:"name",global:!1,description:"The name of the field. Submitted with its owning form as part of a name/value pair.",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"dir",global:!1,description:"The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",tags:[],required:!1,type:"Direction",declarations:[],schema:{kind:"enum",type:"Direction",schema:['"ltr"','"rtl"']}},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"orientation",global:!1,description:"The orientation of the component.",tags:[],required:!1,type:"DataOrientation",declarations:[],schema:{kind:"enum",type:"DataOrientation",schema:['"vertical"','"horizontal"']}},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with radio items.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"loop",global:!1,description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",global:!1,description:"The controlled value of the radio item to check. Can be binded as `v-model`.",tags:[],required:!1,type:"AcceptableValue",declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}},{name:"defaultValue",global:!1,description:`The value of the radio item that should be checked when initially rendered.

Use when you do not need to control the state of the radio items.`,tags:[],required:!1,type:"AcceptableValue",declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[payload: string]",signature:'(event: "update:modelValue", payload: string): void',declarations:[],schema:["string"]}],slots:[{name:"default",type:"{ modelValue: AcceptableValue; }",description:"",declarations:[],schema:{kind:"object",type:"{ modelValue: AcceptableValue; }"}}],exposed:[{name:"name",type:"string",description:"The name of the field. Submitted with its owning form as part of a name/value pair.",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"dir",type:"Direction",description:"The reading direction of the combobox when applicable. <br> If omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",declarations:[],schema:{kind:"enum",type:"Direction",schema:['"ltr"','"rtl"']}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"orientation",type:"DataOrientation",description:"The orientation of the component.",declarations:[],schema:{kind:"enum",type:"DataOrientation",schema:['"vertical"','"horizontal"']}},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with radio items.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"loop",type:"boolean",description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modelValue",type:"AcceptableValue",description:"The controlled value of the radio item to check. Can be binded as `v-model`.",declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}},{name:"defaultValue",type:"AcceptableValue",description:`The value of the radio item that should be checked when initially rendered.

Use when you do not need to control the state of the radio items.`,declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/radio-group/RadioGroup.vue"};const Ae=ie(["aspect-square size-4 shrink-0 cursor-pointer rounded-full border-2 border-gray-200 bg-white shadow-xs transition-[color,box-shadow]","outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50"],{variants:{color:{primary:["data-[state=checked]:border-primary","focus-visible:ring-primary/20","[&_[data-slot=radio-group-indicator]_svg]:fill-primary"],secondary:["data-[state=checked]:border-secondary","focus-visible:ring-gray-400/20","[&_[data-slot=radio-group-indicator]_svg]:fill-secondary"],success:["data-[state=checked]:border-success","focus-visible:ring-success/20","[&_[data-slot=radio-group-indicator]_svg]:fill-success"],warning:["data-[state=checked]:border-warning","focus-visible:ring-warning/20","[&_[data-slot=radio-group-indicator]_svg]:fill-warning"],danger:["data-[state=checked]:border-danger","focus-visible:ring-danger/20","[&_[data-slot=radio-group-indicator]_svg]:fill-danger"],tint:["data-[state=checked]:border-primary-tint","focus-visible:ring-primary-tint/20","[&_[data-slot=radio-group-indicator]_svg]:fill-primary-tint"],info:["data-[state=checked]:border-info","focus-visible:ring-info/20","[&_[data-slot=radio-group-indicator]_svg]:fill-info"]}},defaultVariants:{color:"primary"}}),l=k({__name:"RadioGroupItem",props:{class:{default:""},color:{default:"primary"},id:{},value:{},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},setup(c){const u=c,e=ee(u,"class","color"),d=pe(e),m=I(()=>H(Ae({color:u.color}),u.class));return(C,v)=>(y(),L(n(Ie),_({"data-slot":"radio-group-item"},n(d),{class:m.value}),{default:s(()=>[a(n(we),{"data-slot":"radio-group-indicator",class:"relative flex items-center justify-center"},{default:s(()=>[D(C.$slots,"default",{},()=>[a(n(ge),{class:"absolute top-1/2 left-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 stroke-transparent"})])]),_:3})]),_:3},16,["class"]))}});l.__docgenInfo={exportName:"default",displayName:"RadioGroupItem",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "danger" | "warning" | "info" | "tint"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "info" | "tint"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"info"','"tint"']},default:'"primary"'},{name:"value",global:!1,description:"The value given as data when submitted with a `name`.",tags:[],required:!1,type:"AcceptableValue",declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}},{name:"name",global:!1,description:"The name of the field. Submitted with its owning form as part of a name/value pair.",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"id",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the radio item.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"color",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "info" | "tint"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "info" | "tint"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"info"','"tint"']}},{name:"value",type:"AcceptableValue",description:"The value given as data when submitted with a `name`.",declarations:[],schema:{kind:"enum",type:"AcceptableValue",schema:["string","number","bigint","Record<string, any>"]}},{name:"name",type:"string",description:"The name of the field. Submitted with its owning form as part of a name/value pair.",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"id",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the radio item.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/radio-group/RadioGroupItem.vue"};const qe={class:"flex flex-col gap-6"},Ee={class:"flex flex-col gap-4"},Ve={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},Pe={class:"flex flex-col gap-3"},Oe={class:"flex items-center gap-2"},Se={class:"flex items-center gap-2"},Fe={class:"flex items-center gap-2"},Te={class:"flex items-center gap-2"},$e={class:"text-xs text-gray-500"},Ne={class:"flex flex-col gap-3"},je={class:"flex items-center gap-2"},ze={class:"flex items-center gap-2"},Ue={class:"flex items-center gap-2"},Me={class:"text-xs text-gray-500"},We={class:"flex flex-col gap-3"},Ke={class:"flex items-center gap-2"},He={class:"flex items-center gap-2"},Ye={class:"flex items-center gap-2"},Je={class:"text-xs text-gray-500"},Qe={class:"flex gap-2"},ae=k({__name:"Controlled.stories",setup(c){const u=T("card"),e=T("all"),d=T("standard"),m=()=>{u.value="card",e.value="all",d.value="standard"},C=()=>{u.value="paypal",e.value="important",d.value="express"};return(v,o)=>(y(),Y("div",qe,[t("div",Ee,[o[18]||(o[18]=t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),t("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 라디오 그룹의 상태를 제어합니다. 라디오 버튼을 선택하면 상태가 변경되고, 부모에서 상태를 변경하면 라디오 그룹이 즉시 반영됩니다. ")],-1)),t("div",Ve,[t("div",Pe,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...o[3]||(o[3]=[i("결제 방법",-1)])]),_:1}),a(g,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=f=>u.value=f)},{default:s(()=>[t("div",Oe,[a(l,{id:"card",value:"card"}),a(r,{for:"card",class:"cursor-pointer text-sm"},{default:s(()=>[...o[4]||(o[4]=[i(" 신용카드 ",-1)])]),_:1})]),t("div",Se,[a(l,{id:"bank",value:"bank"}),a(r,{for:"bank",class:"cursor-pointer text-sm"},{default:s(()=>[...o[5]||(o[5]=[i(" 계좌이체 ",-1)])]),_:1})]),t("div",Fe,[a(l,{id:"paypal",value:"paypal"}),a(r,{for:"paypal",class:"cursor-pointer text-sm"},{default:s(()=>[...o[6]||(o[6]=[i(" PayPal ",-1)])]),_:1})]),t("div",Te,[a(l,{id:"crypto",value:"crypto"}),a(r,{for:"crypto",class:"cursor-pointer text-sm"},{default:s(()=>[...o[7]||(o[7]=[i(" 암호화폐 ",-1)])]),_:1})])]),_:1},8,["modelValue"]),t("span",$e,"현재 선택: "+N(u.value)+" (초기값: card)",1)]),t("div",Ne,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...o[8]||(o[8]=[i("알림 설정",-1)])]),_:1}),a(g,{modelValue:e.value,"onUpdate:modelValue":o[1]||(o[1]=f=>e.value=f)},{default:s(()=>[t("div",je,[a(l,{id:"all",value:"all"}),a(r,{for:"all",class:"cursor-pointer text-sm"},{default:s(()=>[...o[9]||(o[9]=[i(" 모든 알림 받기 ",-1)])]),_:1})]),t("div",ze,[a(l,{id:"important",value:"important"}),a(r,{for:"important",class:"cursor-pointer text-sm"},{default:s(()=>[...o[10]||(o[10]=[i(" 중요 알림만 받기 ",-1)])]),_:1})]),t("div",Ue,[a(l,{id:"none",value:"none"}),a(r,{for:"none",class:"cursor-pointer text-sm"},{default:s(()=>[...o[11]||(o[11]=[i(" 알림 받지 않기 ",-1)])]),_:1})])]),_:1},8,["modelValue"]),t("span",Me," 현재 선택: "+N(e.value)+" (초기값: all) ",1)]),t("div",We,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...o[12]||(o[12]=[i("배송 방법",-1)])]),_:1}),a(g,{modelValue:d.value,"onUpdate:modelValue":o[2]||(o[2]=f=>d.value=f)},{default:s(()=>[t("div",Ke,[a(l,{id:"standard",value:"standard"}),a(r,{for:"standard",class:"cursor-pointer text-sm"},{default:s(()=>[...o[13]||(o[13]=[i(" 일반 배송 (무료) ",-1)])]),_:1})]),t("div",He,[a(l,{id:"express",value:"express"}),a(r,{for:"express",class:"cursor-pointer text-sm"},{default:s(()=>[...o[14]||(o[14]=[i(" 빠른 배송 (+3,000원) ",-1)])]),_:1})]),t("div",Ye,[a(l,{id:"overnight",value:"overnight"}),a(r,{for:"overnight",class:"cursor-pointer text-sm"},{default:s(()=>[...o[15]||(o[15]=[i(" 당일 배송 (+5,000원) ",-1)])]),_:1})])]),_:1},8,["modelValue"]),t("span",Je," 현재 선택: "+N(d.value)+" (초기값: standard) ",1)])]),t("div",Qe,[a(U,{onClick:C},{default:s(()=>[...o[16]||(o[16]=[i("값 변경",-1)])]),_:1}),a(U,{color:"secondary",onClick:m},{default:s(()=>[...o[17]||(o[17]=[i(" 초기화 ",-1)])]),_:1})]),o[19]||(o[19]=t("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[t("p",{class:"text-xs text-blue-800"},[t("strong",null,"참고:"),i(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. 라디오 버튼을 선택하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 라디오 그룹이 즉시 반영됩니다. ")])],-1))])]))}});ae.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/radio-group/stories/Controlled.stories.vue"};const Xe={class:"flex flex-col gap-6"},Ze={class:"flex flex-col gap-4"},ea={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},aa={class:"flex flex-col gap-3"},oa={class:"flex items-center gap-2"},ta={class:"flex items-center gap-2"},sa={class:"flex items-center gap-2"},na={class:"flex flex-col gap-3"},ra={class:"flex items-center gap-2"},ia={class:"flex items-center gap-2"},la={class:"flex items-center gap-2"},da={class:"flex items-center gap-2"},ua={class:"flex flex-col gap-3"},pa={class:"flex items-center gap-2"},ca={class:"flex items-center gap-2"},ma={class:"flex items-center gap-2"},oe=k({__name:"Uncontrolled.stories",setup(c){return(u,e)=>(y(),Y("div",Xe,[t("div",Ze,[e[13]||(e[13]=t("div",{class:"flex flex-col gap-2"},[t("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),t("p",{class:"text-xs text-gray-500"}," 초기값만 설정하고, 이후 상태는 컴포넌트 내부에서 관리합니다. 부모 컴포넌트는 상태를 추적하지 않습니다. ")],-1)),t("div",ea,[t("div",aa,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...e[0]||(e[0]=[i("선호하는 테마 (기본값: light)",-1)])]),_:1}),a(g,{"default-value":"light"},{default:s(()=>[t("div",oa,[a(l,{id:"light",value:"light"}),a(r,{for:"light",class:"cursor-pointer text-sm"},{default:s(()=>[...e[1]||(e[1]=[i(" 라이트 모드 ",-1)])]),_:1})]),t("div",ta,[a(l,{id:"dark",value:"dark"}),a(r,{for:"dark",class:"cursor-pointer text-sm"},{default:s(()=>[...e[2]||(e[2]=[i(" 다크 모드 ",-1)])]),_:1})]),t("div",sa,[a(l,{id:"auto",value:"auto"}),a(r,{for:"auto",class:"cursor-pointer text-sm"},{default:s(()=>[...e[3]||(e[3]=[i(" 자동 ",-1)])]),_:1})])]),_:1})]),t("div",na,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...e[4]||(e[4]=[i("언어 선택 (기본값: ko)",-1)])]),_:1}),a(g,{"default-value":"ko"},{default:s(()=>[t("div",ra,[a(l,{id:"ko",value:"ko"}),a(r,{for:"ko",class:"cursor-pointer text-sm"},{default:s(()=>[...e[5]||(e[5]=[i(" 한국어 ",-1)])]),_:1})]),t("div",ia,[a(l,{id:"en",value:"en"}),a(r,{for:"en",class:"cursor-pointer text-sm"},{default:s(()=>[...e[6]||(e[6]=[i(" English ",-1)])]),_:1})]),t("div",la,[a(l,{id:"ja",value:"ja"}),a(r,{for:"ja",class:"cursor-pointer text-sm"},{default:s(()=>[...e[7]||(e[7]=[i(" 日本語 ",-1)])]),_:1})]),t("div",da,[a(l,{id:"zh",value:"zh"}),a(r,{for:"zh",class:"cursor-pointer text-sm"},{default:s(()=>[...e[8]||(e[8]=[i(" 中文 ",-1)])]),_:1})])]),_:1})]),t("div",ua,[a(r,{class:"text-sm font-medium text-gray-700"},{default:s(()=>[...e[9]||(e[9]=[i("난이도 (기본값: medium)",-1)])]),_:1}),a(g,{"default-value":"medium"},{default:s(()=>[t("div",pa,[a(l,{id:"easy",value:"easy"}),a(r,{for:"easy",class:"cursor-pointer text-sm"},{default:s(()=>[...e[10]||(e[10]=[i(" 쉬움 ",-1)])]),_:1})]),t("div",ca,[a(l,{id:"medium",value:"medium"}),a(r,{for:"medium",class:"cursor-pointer text-sm"},{default:s(()=>[...e[11]||(e[11]=[i(" 보통 ",-1)])]),_:1})]),t("div",ma,[a(l,{id:"hard",value:"hard"}),a(r,{for:"hard",class:"cursor-pointer text-sm"},{default:s(()=>[...e[12]||(e[12]=[i(" 어려움 ",-1)])]),_:1})])]),_:1})])]),e[14]||(e[14]=t("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[t("p",{class:"text-xs text-blue-800"},[t("strong",null,"참고:"),i(" 비제어 컴포넌트는 \\`default-value\\`로 초기값만 설정합니다. 이후 상태는 컴포넌트 내부에서 관리되며, 부모 컴포넌트는 상태를 추적하지 않습니다. 간단한 폼에 적합합니다. ")])],-1))])]))}});oe.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",type:1,props:[{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/radio-group/stories/Uncontrolled.stories.vue"};const Pa={title:"Shared/UI/RadioGroup",component:g,parameters:{layout:"centered",docs:{description:{component:`
### 단일 선택을 위한 라디오 그룹 컴포넌트

RadioGroup 컴포넌트는 사용자가 여러 옵션 중 하나만 선택할 수 있도록 하는 데 사용됩니다.
체크박스와 달리 하나의 옵션만 선택 가능하며, 주로 상호 배타적인 선택에 사용됩니다.

## 주요 기능

- **단일 선택**: 그룹 내에서 하나의 옵션만 선택 가능
- **키보드 네비게이션**: 화살표 키로 옵션 간 이동 가능
- **유효성 검사**: \`aria-invalid\` 속성으로 에러 상태 표시
- **비활성화 지원**: 개별 아이템 또는 전체 그룹 비활성화 가능
- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원
- **제어/비제어 모드**: \`v-model\` 또는 \`default-value\` 사용 가능

## 사용 예시

\`\`\`vue
<RadioGroup v-model="value">
  <div class="flex items-center gap-2">
    <RadioGroupItem id="option1" value="option1" />
    <Label for="option1">옵션 1</Label>
  </div>
  <div class="flex items-center gap-2">
    <RadioGroupItem id="option2" value="option2" />
    <Label for="option2">옵션 2</Label>
  </div>
</RadioGroup>
\`\`\`
        `}}},tags:["autodocs"]},w={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 RadioGroup 컴포넌트를 인터랙티브하게 테스트할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 속성을 변경해보세요.
        `}}},render:c=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},setup(){return{args:c}},template:`
      <RadioGroup v-bind="args" class="w-80">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-1" value="option1" />
          <Label for="playground-1" class="cursor-pointer">옵션 1</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-2" value="option2" />
          <Label for="playground-2" class="cursor-pointer">옵션 2</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-3" value="option3" />
          <Label for="playground-3" class="cursor-pointer">옵션 3</Label>
        </div>
      </RadioGroup>
    `})},A={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-1" value="option1" />
              <Label for="basic-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-2" value="option2" />
              <Label for="basic-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-3" value="option3" />
              <Label for="basic-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},q={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">설명이 있는 라디오 그룹</h3>
          <RadioGroup default-value="standard">
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-1" value="standard" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-1" class="cursor-pointer font-medium">일반 배송</Label>
                <span class="text-xs text-gray-500">3-5일 소요, 무료</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-2" value="express" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-2" class="cursor-pointer font-medium">빠른 배송</Label>
                <span class="text-xs text-gray-500">1-2일 소요, 3,000원</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-3" value="overnight" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-3" class="cursor-pointer font-medium">당일 배송</Label>
                <span class="text-xs text-gray-500">당일 도착, 5,000원</span>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},E={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex w-full flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Primary (기본)</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="primary-1" value="option1" color="primary" />
              <Label for="primary-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="primary-2" value="option2" color="primary" />
              <Label for="primary-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Secondary</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="secondary-1" value="option1" color="secondary" />
              <Label for="secondary-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="secondary-2" value="option2" color="secondary" />
              <Label for="secondary-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Success</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="success-1" value="option1" color="success" />
              <Label for="success-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="success-2" value="option2" color="success" />
              <Label for="success-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Warning</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="warning-1" value="option1" color="warning" />
              <Label for="warning-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="warning-2" value="option2" color="warning" />
              <Label for="warning-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Danger</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="danger-1" value="option1" color="danger" />
              <Label for="danger-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="danger-2" value="option2" color="danger" />
              <Label for="danger-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Tint</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="tint-1" value="option1" color="tint" />
              <Label for="tint-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="tint-2" value="option2" color="tint" />
              <Label for="tint-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Info</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="info-1" value="option1" color="info" />
              <Label for="info-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="info-2" value="option2" color="info" />
              <Label for="info-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},V={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex w-80 flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">정상 상태</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="normal-1" value="option1" />
              <Label for="normal-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="normal-2" value="option2" />
              <Label for="normal-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">비활성화 상태</h3>
          <RadioGroup default-value="option1" disabled>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="disabled-1" value="option1" />
              <Label for="disabled-1" class="cursor-not-allowed">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="disabled-2" value="option2" />
              <Label for="disabled-2" class="cursor-not-allowed">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">개별 비활성화</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-1" value="option1" />
              <Label for="partial-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-2" value="option2" disabled />
              <Label for="partial-2" class="cursor-not-allowed text-gray-400">옵션 2 (비활성화)</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-3" value="option3" />
              <Label for="partial-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">에러 상태</h3>
          <RadioGroup aria-invalid="true">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="error-1" value="option1" aria-invalid="true" />
              <Label for="error-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="error-2" value="option2" aria-invalid="true" />
              <Label for="error-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
          <span class="text-xs text-danger">옵션을 선택해주세요.</span>
        </div>
      </div>
    `})},P={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">수직 레이아웃 (기본)</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-1" value="option1" />
              <Label for="vertical-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-2" value="option2" />
              <Label for="vertical-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-3" value="option3" />
              <Label for="vertical-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">수평 레이아웃</h3>
          <RadioGroup default-value="option1" class="flex flex-row gap-4">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-1" value="option1" />
              <Label for="horizontal-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-2" value="option2" />
              <Label for="horizontal-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-3" value="option3" />
              <Label for="horizontal-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},O={render:()=>({components:{RadioGroup:g,RadioGroupItem:l,Label:r},template:`
      <div class="flex w-96 flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">결제 방법 선택</h3>
          <RadioGroup default-value="card">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-card" value="card" />
              <Label for="example-card" class="cursor-pointer">신용카드</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-bank" value="bank" />
              <Label for="example-bank" class="cursor-pointer">계좌이체</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-paypal" value="paypal" />
              <Label for="example-paypal" class="cursor-pointer">PayPal</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">알림 설정</h3>
          <RadioGroup default-value="all">
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-all" value="all" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-all" class="cursor-pointer font-medium">모든 알림 받기</Label>
                <span class="text-xs text-gray-500">모든 활동에 대한 알림을 받습니다</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-important" value="important" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-important" class="cursor-pointer font-medium">중요 알림만</Label>
                <span class="text-xs text-gray-500">중요한 활동에 대한 알림만 받습니다</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-none" value="none" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-none" class="cursor-pointer font-medium">알림 받지 않기</Label>
                <span class="text-xs text-gray-500">알림을 받지 않습니다</span>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    `})},S={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 라디오 그룹의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 라디오 그룹이 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import RadioGroup from './RadioGroup.vue';
import RadioGroupItem from './RadioGroupItem.vue';

const value = ref('option1');
<\/script>

<template>
  <RadioGroup v-model="value">
    <RadioGroupItem value="option1" />
    <RadioGroupItem value="option2" />
  </RadioGroup>
  <p>현재 선택: {{ value }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:ae},template:"<ControlledExample />"})},F={parameters:{docs:{description:{story:`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. \`default-value\`로 초기값만 설정하고, 이후 상태는 컴포넌트 내부에서 관리합니다.

## 특징

- 초기값만 설정하고 부모 컴포넌트는 상태를 추적하지 않습니다
- 간단한 폼에 적합합니다
- 상태 관리 오버헤드가 없습니다

## 사용 예시

\`\`\`vue
<RadioGroup default-value="option1">
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</RadioGroup>
\`\`\`
        `}}},render:()=>({components:{UncontrolledExample:oe},template:"<UncontrolledExample />"})};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 RadioGroup 컴포넌트를 인터랙티브하게 테스트할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 속성을 변경해보세요.
        \`
      }
    }
  },
  render: args => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <RadioGroup v-bind="args" class="w-80">
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-1" value="option1" />
          <Label for="playground-1" class="cursor-pointer">옵션 1</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-2" value="option2" />
          <Label for="playground-2" class="cursor-pointer">옵션 2</Label>
        </div>
        <div class="flex items-center gap-2">
          <RadioGroupItem id="playground-3" value="option3" />
          <Label for="playground-3" class="cursor-pointer">옵션 3</Label>
        </div>
      </RadioGroup>
    \`
  })
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-1" value="option1" />
              <Label for="basic-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-2" value="option2" />
              <Label for="basic-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="basic-3" value="option3" />
              <Label for="basic-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">설명이 있는 라디오 그룹</h3>
          <RadioGroup default-value="standard">
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-1" value="standard" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-1" class="cursor-pointer font-medium">일반 배송</Label>
                <span class="text-xs text-gray-500">3-5일 소요, 무료</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-2" value="express" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-2" class="cursor-pointer font-medium">빠른 배송</Label>
                <span class="text-xs text-gray-500">1-2일 소요, 3,000원</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="desc-3" value="overnight" class="mt-1" />
              <div class="flex flex-col">
                <Label for="desc-3" class="cursor-pointer font-medium">당일 배송</Label>
                <span class="text-xs text-gray-500">당일 도착, 5,000원</span>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex w-full flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Primary (기본)</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="primary-1" value="option1" color="primary" />
              <Label for="primary-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="primary-2" value="option2" color="primary" />
              <Label for="primary-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Secondary</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="secondary-1" value="option1" color="secondary" />
              <Label for="secondary-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="secondary-2" value="option2" color="secondary" />
              <Label for="secondary-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Success</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="success-1" value="option1" color="success" />
              <Label for="success-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="success-2" value="option2" color="success" />
              <Label for="success-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Warning</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="warning-1" value="option1" color="warning" />
              <Label for="warning-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="warning-2" value="option2" color="warning" />
              <Label for="warning-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Danger</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="danger-1" value="option1" color="danger" />
              <Label for="danger-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="danger-2" value="option2" color="danger" />
              <Label for="danger-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Tint</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="tint-1" value="option1" color="tint" />
              <Label for="tint-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="tint-2" value="option2" color="tint" />
              <Label for="tint-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">Info</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="info-1" value="option1" color="info" />
              <Label for="info-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="info-2" value="option2" color="info" />
              <Label for="info-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex w-80 flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">정상 상태</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="normal-1" value="option1" />
              <Label for="normal-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="normal-2" value="option2" />
              <Label for="normal-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">비활성화 상태</h3>
          <RadioGroup default-value="option1" disabled>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="disabled-1" value="option1" />
              <Label for="disabled-1" class="cursor-not-allowed">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="disabled-2" value="option2" />
              <Label for="disabled-2" class="cursor-not-allowed">옵션 2</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">개별 비활성화</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-1" value="option1" />
              <Label for="partial-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-2" value="option2" disabled />
              <Label for="partial-2" class="cursor-not-allowed text-gray-400">옵션 2 (비활성화)</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="partial-3" value="option3" />
              <Label for="partial-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">에러 상태</h3>
          <RadioGroup aria-invalid="true">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="error-1" value="option1" aria-invalid="true" />
              <Label for="error-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="error-2" value="option2" aria-invalid="true" />
              <Label for="error-2" class="cursor-pointer">옵션 2</Label>
            </div>
          </RadioGroup>
          <span class="text-xs text-danger">옵션을 선택해주세요.</span>
        </div>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">수직 레이아웃 (기본)</h3>
          <RadioGroup default-value="option1">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-1" value="option1" />
              <Label for="vertical-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-2" value="option2" />
              <Label for="vertical-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="vertical-3" value="option3" />
              <Label for="vertical-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">수평 레이아웃</h3>
          <RadioGroup default-value="option1" class="flex flex-row gap-4">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-1" value="option1" />
              <Label for="horizontal-1" class="cursor-pointer">옵션 1</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-2" value="option2" />
              <Label for="horizontal-2" class="cursor-pointer">옵션 2</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="horizontal-3" value="option3" />
              <Label for="horizontal-3" class="cursor-pointer">옵션 3</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      RadioGroup,
      RadioGroupItem,
      Label
    },
    template: \`
      <div class="flex w-96 flex-col gap-6">
        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">결제 방법 선택</h3>
          <RadioGroup default-value="card">
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-card" value="card" />
              <Label for="example-card" class="cursor-pointer">신용카드</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-bank" value="bank" />
              <Label for="example-bank" class="cursor-pointer">계좌이체</Label>
            </div>
            <div class="flex items-center gap-2">
              <RadioGroupItem id="example-paypal" value="paypal" />
              <Label for="example-paypal" class="cursor-pointer">PayPal</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-700">알림 설정</h3>
          <RadioGroup default-value="all">
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-all" value="all" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-all" class="cursor-pointer font-medium">모든 알림 받기</Label>
                <span class="text-xs text-gray-500">모든 활동에 대한 알림을 받습니다</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-important" value="important" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-important" class="cursor-pointer font-medium">중요 알림만</Label>
                <span class="text-xs text-gray-500">중요한 활동에 대한 알림만 받습니다</span>
              </div>
            </div>
            <div class="flex items-start gap-2">
              <RadioGroupItem id="notify-none" value="none" class="mt-1" />
              <div class="flex flex-col">
                <Label for="notify-none" class="cursor-pointer font-medium">알림 받지 않기</Label>
                <span class="text-xs text-gray-500">알림을 받지 않습니다</span>
              </div>
            </div>
          </RadioGroup>
        </div>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 라디오 그룹의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 라디오 그룹이 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import RadioGroup from './RadioGroup.vue';
import RadioGroupItem from './RadioGroupItem.vue';

const value = ref('option1');
<\/script>

<template>
  <RadioGroup v-model="value">
    <RadioGroupItem value="option1" />
    <RadioGroupItem value="option2" />
  </RadioGroup>
  <p>현재 선택: {{ value }}</p>
</template>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => ({
    components: {
      ControlledExample
    },
    template: '<ControlledExample />'
  })
}`,...S.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. \\\`default-value\\\`로 초기값만 설정하고, 이후 상태는 컴포넌트 내부에서 관리합니다.

## 특징

- 초기값만 설정하고 부모 컴포넌트는 상태를 추적하지 않습니다
- 간단한 폼에 적합합니다
- 상태 관리 오버헤드가 없습니다

## 사용 예시

\\\`\\\`\\\`vue
<RadioGroup default-value="option1">
  <RadioGroupItem value="option1" />
  <RadioGroupItem value="option2" />
</RadioGroup>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => ({
    components: {
      UncontrolledExample
    },
    template: '<UncontrolledExample />'
  })
}`,...F.parameters?.docs?.source}}};const Oa=["Playground","Basic","WithDescriptions","Colors","States","Layouts","Examples","Controlled","Uncontrolled"];export{A as Basic,E as Colors,S as Controlled,O as Examples,P as Layouts,w as Playground,V as States,F as Uncontrolled,q as WithDescriptions,Oa as __namedExportsOrder,Pa as default};
