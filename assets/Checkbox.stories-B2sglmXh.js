import{b as X,e as m,f as ne,g as ie,r as w,i as re,d as b,w as ce,m as de,h as K,j as Z,p as oe,k as ue,l as xe,n as C,o as v,q as B,s as k,u as c,v as U,x as fe,y as A,c as q,z as P,F as H,A as pe,B as ve,C as me,D as ge,E as he,G as Ce,H as be,I as ye,a as i,t as j,J as ke}from"./iframe-D0s_mCcR.js";import{u as ee,S as L,c as N,P as R,a as ae,b as Be,d as De}from"./Primitive-VoFJU5Lf.js";import"./preload-helper-PPVm8Dsz.js";const we=X("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Ae=X("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function W(t){return typeof t=="string"?`'${t}'`:new Ee().serialize(t)}const Ee=(function(){class t{#e=new Map;compare(e,l){const s=typeof e,r=typeof l;return s==="string"&&r==="string"?e.localeCompare(l):s==="number"&&r==="number"?e-l:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(l,!0))}serialize(e,l){if(e===null)return"null";switch(typeof e){case"string":return l?e:`'${e}'`;case"bigint":return`${e}n`;case"object":return this.$object(e);case"function":return this.$function(e)}return String(e)}serializeObject(e){const l=Object.prototype.toString.call(e);if(l!=="[object Object]")return this.serializeBuiltInType(l.length<10?`unknown:${l}`:l.slice(8,-1),e);const s=e.constructor,r=s===Object||s===void 0?"":s.name;if(r!==""&&globalThis[r]===s)return this.serializeBuiltInType(r,e);if(typeof e.toJSON=="function"){const n=e.toJSON();return r+(n!==null&&typeof n=="object"?this.$object(n):`(${this.serialize(n)})`)}return this.serializeObjectEntries(r,Object.entries(e))}serializeBuiltInType(e,l){const s=this["$"+e];if(s)return s.call(this,l);if(typeof l?.entries=="function")return this.serializeObjectEntries(e,l.entries());throw new Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,l){const s=Array.from(l).sort((n,d)=>this.compare(n[0],d[0]));let r=`${e}{`;for(let n=0;n<s.length;n++){const[d,g]=s[n];r+=`${this.serialize(d,!0)}:${this.serialize(g)}`,n<s.length-1&&(r+=",")}return r+"}"}$object(e){let l=this.#e.get(e);return l===void 0&&(this.#e.set(e,`#${this.#e.size}`),l=this.serializeObject(e),this.#e.set(e,l)),l}$function(e){const l=Function.prototype.toString.call(e);return l.slice(-15)==="[native code] }"?`${e.name||""}()[native]`:`${e.name}(${e.length})${l.replace(/\s*\n\s*/g,"")}`}$Array(e){let l="[";for(let s=0;s<e.length;s++)l+=this.serialize(e[s]),s<e.length-1&&(l+=",");return l+"]"}$Date(e){try{return`Date(${e.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(",")}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((l,s)=>this.compare(l,s)))}`}$Map(e){return this.serializeObjectEntries("Map",e.entries())}}for(const a of["Error","RegExp","URL"])t.prototype["$"+a]=function(e){return`${a}(${e})`};for(const a of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])t.prototype["$"+a]=function(e){return`${a}[${e.join(",")}]`};for(const a of["BigInt64Array","BigUint64Array"])t.prototype["$"+a]=function(e){return`${a}[${e.join("n,")}${e.length>0?"n":""}]`};return t})();function M(t,a){return t===a||W(t)===W(a)}function G(){let t=document.activeElement;if(t==null)return null;for(;t!=null&&t.shadowRoot!=null&&t.shadowRoot.activeElement!=null;)t=t.shadowRoot.activeElement;return t}function T(t){return t==null}function J(t,a){return T(t)?!1:Array.isArray(t)?t.some(e=>M(e,a)):M(t,a)}function _e(t){return m(()=>ne(t)?!!ee(t)?.closest("form"):!0)}function Ve(t,a="reka"){return`${a}-${ie?.()}`}function O(){const t=w(),a=m(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:ee(t));return{primitiveElement:t,currentElement:a}}const Y="data-reka-collection-item";function Se(t={}){const{key:a="",isProvider:e=!1}=t,l=`${a}CollectionProvider`;let s;if(e){const x=w(new Map);s={collectionRef:w(),itemMap:x},oe(l,s)}else s=re(l);const r=(x=!1)=>{const f=s.collectionRef.value;if(!f)return[];const p=Array.from(f.querySelectorAll(`[${Y}]`)),y=Array.from(s.itemMap.value.values()).sort((D,E)=>p.indexOf(D.ref)-p.indexOf(E.ref));return x?y:y.filter(D=>D.ref.dataset.disabled!=="")},n=b({name:"CollectionSlot",setup(x,{slots:f}){const{primitiveElement:p,currentElement:u}=O();return Z(u,()=>{s.collectionRef.value=u.value}),()=>K(L,{ref:p},f)}}),d=b({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(x,{slots:f,attrs:p}){const{primitiveElement:u,currentElement:y}=O();return ce(D=>{if(y.value){const E=de(y.value);s.itemMap.value.set(E,{ref:y.value,value:x.value}),D(()=>s.itemMap.value.delete(E))}}),()=>K(L,{...p,[Y]:"",ref:u},f)}}),g=m(()=>Array.from(s.itemMap.value.values())),o=m(()=>s.itemMap.value.size);return{getItems:r,reactiveItems:g,itemMapSize:o,CollectionSlot:n,CollectionItem:d}}const ze={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $e(t,a){return a!=="rtl"?t:t==="ArrowLeft"?"ArrowRight":t==="ArrowRight"?"ArrowLeft":t}function Ie(t,a,e){const l=$e(t.key,e);if(!(a==="vertical"&&["ArrowLeft","ArrowRight"].includes(l))&&!(a==="horizontal"&&["ArrowUp","ArrowDown"].includes(l)))return ze[l]}function qe(t,a=!1){const e=G();for(const l of t)if(l===e||(l.focus({preventScroll:a}),G()!==e))return}function Fe(t,a){return t.map((e,l)=>t[(a+l)%t.length])}const[Ue]=N("RovingFocusGroup");var Re=b({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const a=t,e=Ue(),l=Ve(),s=m(()=>a.tabStopId||l),r=m(()=>e.currentTabStopId.value===s.value),{getItems:n,CollectionItem:d}=Se();ue(()=>{a.focusable&&e.onFocusableItemAdd()}),xe(()=>{a.focusable&&e.onFocusableItemRemove()});function g(o){if(o.key==="Tab"&&o.shiftKey){e.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const x=Ie(o,e.orientation.value,e.dir.value);if(x!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||!a.allowShiftKey&&o.shiftKey)return;o.preventDefault();let f=[...n().map(p=>p.ref).filter(p=>p.dataset.disabled!=="")];if(x==="last")f.reverse();else if(x==="prev"||x==="next"){x==="prev"&&f.reverse();const p=f.indexOf(o.currentTarget);f=e.loop.value?Fe(f,p+1):f.slice(p+1)}fe(()=>qe(f))}}return(o,x)=>(v(),C(c(d),null,{default:B(()=>[k(c(R),{tabindex:r.value?0:-1,"data-orientation":c(e).orientation.value,"data-active":o.active?"":void 0,"data-disabled":o.focusable?void 0:"",as:o.as,"as-child":o.asChild,onMousedown:x[0]||(x[0]=f=>{o.focusable?c(e).onItemFocus(s.value):f.preventDefault()}),onFocus:x[1]||(x[1]=f=>c(e).onItemFocus(s.value)),onKeydown:g},{default:B(()=>[U(o.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),je=Re,Me=b({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){return(a,e)=>(v(),C(c(R),{as:a.as,"as-child":a.asChild,"aria-hidden":a.feature==="focusable"?"true":void 0,"data-hidden":a.feature==="fully-hidden"?"":void 0,tabindex:a.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:B(()=>[U(a.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),Te=Me,Oe=b({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const a=t,{primitiveElement:e,currentElement:l}=O(),s=m(()=>a.checked??a.value);return Z(s,(r,n)=>{if(!l.value)return;const d=l.value,g=window.HTMLInputElement.prototype,x=Object.getOwnPropertyDescriptor(g,"value").set;if(x&&r!==n){const f=new Event("input",{bubbles:!0}),p=new Event("change",{bubbles:!0});x.call(d,r),d.dispatchEvent(f),d.dispatchEvent(p)}}),(r,n)=>(v(),C(Te,A({ref_key:"primitiveElement",ref:e},{...a,...r.$attrs},{as:"input"}),null,16))}}),Q=Oe,Pe=b({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(t){const a=t,e=m(()=>typeof a.value=="object"&&Array.isArray(a.value)&&a.value.length===0&&a.required),l=m(()=>typeof a.value=="string"||typeof a.value=="number"||typeof a.value=="boolean"||a.value===null||a.value===void 0?[{name:a.name,value:a.value}]:typeof a.value=="object"&&Array.isArray(a.value)?a.value.flatMap((s,r)=>typeof s=="object"?Object.entries(s).map(([n,d])=>({name:`${a.name}[${r}][${n}]`,value:d})):{name:`${a.name}[${r}]`,value:s}):a.value!==null&&typeof a.value=="object"&&!Array.isArray(a.value)?Object.entries(a.value).map(([s,r])=>({name:`${a.name}[${s}]`,value:r})):[]);return(s,r)=>(v(),q(H,null,[P(" We render single input if it's required "),e.value?(v(),C(Q,A({key:s.name},{...a,...s.$attrs},{name:s.name,value:s.value}),null,16,["name","value"])):(v(!0),q(H,{key:1},pe(l.value,n=>(v(),C(Q,A({key:n.name},{ref_for:!0},{...a,...s.$attrs},{name:n.name,value:n.value}),null,16,["name","value"]))),128))],2112))}}),Ne=Pe;const[Ke]=N("CheckboxGroupRoot");function F(t){return t==="indeterminate"}function te(t){return F(t)?"indeterminate":t?"checked":"unchecked"}const[He,Le]=N("CheckboxRoot");var We=b({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:[Boolean,String],required:!1},modelValue:{type:[Boolean,String,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(t,{emit:a}){const e=t,l=a,{forwardRef:s,currentElement:r}=ae(),n=Ke(null),d=Be(e,"modelValue",l,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),g=m(()=>n?.disabled.value||e.disabled),o=m(()=>T(n?.modelValue.value)?d.value==="indeterminate"?"indeterminate":d.value:J(n.modelValue.value,e.value));function x(){if(T(n?.modelValue.value))d.value=F(d.value)?!0:!d.value;else{const u=[...n.modelValue.value||[]];if(J(u,e.value)){const y=u.findIndex(D=>M(D,e.value));u.splice(y,1)}else u.push(e.value);n.modelValue.value=u}}const f=_e(r),p=m(()=>e.id&&r.value?document.querySelector(`[for="${e.id}"]`)?.innerText:void 0);return Le({disabled:g,state:o}),(u,y)=>(v(),C(ge(c(n)?.rovingFocus.value?c(je):c(R)),A(u.$attrs,{id:u.id,ref:c(s),role:"checkbox","as-child":u.asChild,as:u.as,type:u.as==="button"?"button":void 0,"aria-checked":c(F)(o.value)?"mixed":o.value,"aria-required":u.required,"aria-label":u.$attrs["aria-label"]||p.value,"data-state":c(te)(o.value),"data-disabled":g.value?"":void 0,disabled:g.value,focusable:c(n)?.rovingFocus.value?!g.value:void 0,onKeydown:ve(me(()=>{},["prevent"]),["enter"]),onClick:x}),{default:B(()=>[U(u.$slots,"default",{modelValue:c(d),state:o.value}),c(f)&&u.name&&!c(n)?(v(),C(c(Ne),{key:0,type:"checkbox",checked:!!o.value,name:u.name,value:u.value,disabled:g.value,required:u.required},null,8,["checked","name","value","disabled","required"])):P("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"]))}}),Ge=We,Je=b({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const{forwardRef:a}=ae(),e=He();return(l,s)=>(v(),C(c(De),{present:l.forceMount||c(F)(c(e).state.value)||c(e).state.value===!0},{default:B(()=>[k(c(R),A({ref:c(a),"data-state":c(te)(c(e).state.value),"data-disabled":c(e).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":l.asChild,as:l.as},l.$attrs),{default:B(()=>[U(l.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),Ye=Je;const Qe=ye(["border-gray-2 size-4 shrink-0 cursor-pointer rounded-[3px] border shadow-xs transition-all outline-none","not-disabled:hover:border-gray-1","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-gray-2 focus-visible:ring","data-[state=checked]:border-transparent","data-[state=indeterminate]:border-transparent","not-disabled:hover:data-[state=checked]:border-transparent","not-disabled:hover:data-[state=indeterminate]:border-transparent","data-[invalid=true]:border-danger","data-[invalid=true]:focus-visible:ring-danger","data-[invalid=true]:hover:border-danger","data-[invalid=true]:data-[state=checked]:border-danger data-[invalid=true]:data-[state=checked]:bg-danger","data-[invalid=true]:data-[state=checked]:hover:bg-danger data-[invalid=true]:data-[state=checked]:hover:border-danger","data-[invalid=true]:data-[state=indeterminate]:border-danger data-[invalid=true]:data-[state=indeterminate]:bg-danger","data-[invalid=true]:data-[state=indeterminate]:hover:bg-danger data-[invalid=true]:data-[state=indeterminate]:hover:border-danger"],{variants:{color:{primary:["data-[state=checked]:bg-primary data-[state=checked]:border-primary","data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary","not-disabled:hover:data-[state=checked]:bg-primary-dark not-disabled:hover:data-[state=checked]:border-primary-dark","not-disabled:hover:data-[state=indeterminate]:bg-primary-dark not-disabled:hover:data-[state=indeterminate]:border-primary-dark","data-[state=checked]:focus-visible:ring-primary","data-[state=indeterminate]:focus-visible:ring-primary"],secondary:["data-[state=checked]:bg-gray-200","data-[state=checked]:border-gray-200","data-[state=indeterminate]:bg-gray-200","data-[state=indeterminate]:border-gray-200","not-disabled:hover:data-[state=checked]:bg-gray-300","not-disabled:hover:data-[state=checked]:border-gray-300","not-disabled:hover:data-[state=indeterminate]:bg-gray-300","not-disabled:hover:data-[state=indeterminate]:border-gray-300","data-[state=checked]:focus-visible:ring-gray-200","data-[state=indeterminate]:focus-visible:ring-gray-200"],danger:["data-[state=checked]:bg-danger data-[state=checked]:border-danger","data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger","not-disabled:hover:data-[state=checked]:border-danger","not-disabled:hover:data-[state=indeterminate]:border-danger","data-[state=checked]:focus-visible:ring-danger","data-[state=indeterminate]:focus-visible:ring-danger"],success:["data-[state=checked]:bg-success data-[state=checked]:border-success","data-[state=indeterminate]:bg-success data-[state=indeterminate]:border-success","data-[state=checked]:focus-visible:ring-success","data-[state=indeterminate]:focus-visible:ring-success"],warning:["data-[state=checked]:bg-warning data-[state=checked]:border-warning","data-[state=indeterminate]:bg-warning data-[state=indeterminate]:border-warning","data-[state=checked]:focus-visible:ring-warning","data-[state=indeterminate]:focus-visible:ring-warning"]}},defaultVariants:{color:"primary"}}),h=b({__name:"Checkbox",props:he({color:{default:"primary"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},class:{default:""},defaultValue:{default:!1}},{modelValue:{default:void 0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const a=t,e=Ce(t,"modelValue"),l=m(()=>e.value??a.defaultValue??!1),s=m(()=>be(Qe({color:a.color}),a.class));return(r,n)=>(v(),C(c(Ge),A(r.$attrs,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=d=>e.value=d),"default-value":t.defaultValue,disabled:t.disabled,"data-invalid":t.invalid,class:s.value}),{default:B(()=>[k(c(Ye),{class:"flex items-center justify-center rounded-xs text-white"},{default:B(()=>[l.value==="indeterminate"?(v(),C(c(Ae),{key:0,class:"h-[80%] w-[80%]","stroke-width":"3"})):l.value===!0?(v(),C(c(we),{key:1,class:"h-[80%] w-[80%]","stroke-width":"3"})):P("",!0)]),_:1})]),_:1},16,["modelValue","default-value","disabled","data-invalid","class"]))}});h.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'primary'"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultValue",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Checkbox.vue"]};const Xe={class:"flex flex-col gap-6"},Ze={class:"flex flex-col gap-4"},ea={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},aa={class:"flex items-center gap-3"},ta={class:"flex flex-col"},la={class:"text-xs text-gray-500"},sa={class:"flex items-center gap-3"},na={class:"flex flex-col"},ia={class:"text-xs text-gray-500"},ra={class:"flex items-center gap-3"},ca={class:"flex flex-col"},da={class:"text-xs text-gray-500"},le=b({__name:"Controlled.stories",setup(t){const a=w(!1),e=w(!0),l=w("indeterminate"),s=()=>{a.value=!a.value,e.value=!e.value,l.value=l.value==="indeterminate"?!1:"indeterminate"};return(r,n)=>(v(),q("div",Xe,[i("div",Ze,[n[6]||(n[6]=i("div",{class:"flex flex-col gap-2"},[i("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),i("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 상태를 제어합니다. 체크박스를 클릭하면 상태가 변경되고, 부모에서 상태를 변경하면 체크박스가 즉시 반영됩니다. ")],-1)),i("div",ea,[i("div",aa,[k(h,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=d=>a.value=d)},null,8,["modelValue"]),i("div",ta,[n[3]||(n[3]=i("span",{class:"text-sm text-gray-700"},"체크박스 1",-1)),i("span",la,"현재 상태: "+j(String(a.value)),1)])]),i("div",sa,[k(h,{modelValue:e.value,"onUpdate:modelValue":n[1]||(n[1]=d=>e.value=d)},null,8,["modelValue"]),i("div",na,[n[4]||(n[4]=i("span",{class:"text-sm text-gray-700"},"체크박스 2",-1)),i("span",ia,"현재 상태: "+j(String(e.value)),1)])]),i("div",ra,[k(h,{modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=d=>l.value=d)},null,8,["modelValue"]),i("div",ca,[n[5]||(n[5]=i("span",{class:"text-sm text-gray-700"},"체크박스 3 (Indeterminate)",-1)),i("span",da,"현재 상태: "+j(String(l.value)),1)])])]),i("div",{class:"flex gap-2"},[i("button",{class:"bg-primary hover:bg-primary-dark rounded px-3 py-1.5 text-xs font-medium text-white transition-colors",onClick:s}," 부모에서 상태 변경 ")])])]))}});le.__docgenInfo={exportName:"default",displayName:"Controlled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Controlled.stories.vue"]};const oa={class:"flex flex-col gap-6"},ua={class:"flex flex-col gap-4"},xa={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},fa={class:"flex items-center gap-3"},pa={class:"flex items-center gap-3"},va={class:"flex items-center gap-3"},se=b({__name:"Uncontrolled.stories",setup(t){return(a,e)=>(v(),q("div",oa,[i("div",ua,[e[3]||(e[3]=i("div",{class:"flex flex-col gap-2"},[i("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),i("p",{class:"text-xs text-gray-500"}," 각 체크박스가 자체적으로 상태를 관리합니다. 부모는 초기값(`defaultValue`)만 설정하며, 이후 상태 변경은 컴포넌트 내부에서 처리됩니다. ")],-1)),i("div",xa,[i("div",fa,[k(h,{"default-value":!1}),e[0]||(e[0]=i("div",{class:"flex flex-col"},[i("span",{class:"text-sm text-gray-700"},"체크박스 1"),i("span",{class:"text-xs text-gray-500"},"초기값: false (자체 상태 관리)")],-1))]),i("div",pa,[k(h,{"default-value":!0}),e[1]||(e[1]=i("div",{class:"flex flex-col"},[i("span",{class:"text-sm text-gray-700"},"체크박스 2"),i("span",{class:"text-xs text-gray-500"},"초기값: true (자체 상태 관리)")],-1))]),i("div",va,[k(h,{"default-value":"indeterminate"}),e[2]||(e[2]=i("div",{class:"flex flex-col"},[i("span",{class:"text-sm text-gray-700"},"체크박스 3"),i("span",{class:"text-xs text-gray-500"},"초기값: indeterminate (자체 상태 관리)")],-1))])]),e[4]||(e[4]=i("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[i("p",{class:"text-xs text-blue-800"},[i("strong",null,"참고:"),ke(" 비제어 컴포넌트는 자체적으로 상태를 관리하므로, 부모 컴포넌트에서 상태를 직접 변경할 수 없습니다. 폼 제출 시에는 ref를 통해 현재 값을 가져올 수 있습니다. ")])],-1))])]))}});se.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Uncontrolled.stories.vue"]};const Ca={title:"Shared/UI/Checkbox",component:h,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\n체크박스 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다. 다양한 색상 및 상태를 지원합니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Checkbox defaultValue={true} color="primary" />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultValue:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값 (비제어 컴포넌트)",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}}}},_={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 위험한 작업에 사용, `success`는 성공 상태에 사용).\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultValue**: 체크박스의 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}},args:{color:"primary",invalid:!1,disabled:!1,defaultValue:!1},render:t=>({components:{Checkbox:h},setup(){return{args:t}},template:'<Checkbox v-bind="args" />'})},V={render:()=>({components:{Checkbox:h},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="false" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="false" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="false" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="false" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="false" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    `})},S={render:()=>({components:{Checkbox:h},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 상태 (Normal State)</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" disabled />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" invalid />
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},z={render:()=>({components:{Checkbox:h},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">모든 색상 (size-6)</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    `})},$={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const checked = ref(false);
<\/script>

<template>
  <Checkbox v-model="checked" />
  <p>현재 상태: {{ checked }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:le},template:"<ControlledExample />"})},I={parameters:{docs:{description:{story:`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\`defaultValue\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\`defaultValue\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<template>
  <Checkbox defaultValue={true} />
  <Checkbox defaultValue={false} />
  <Checkbox defaultValue="indeterminate" />
</template>
\`\`\`
        `}}},render:()=>({components:{UncontrolledExample:se},template:"<UncontrolledExample />"})};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 위험한 작업에 사용, \\\`success\\\`는 성공 상태에 사용).
- **Invalid**: \\\`true\\\`로 설정하면 체크박스가 에러 상태로 표시됩니다.
- **Disabled**: \\\`true\\\`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.
- **DefaultValue**: 체크박스의 초기값을 설정합니다. \\\`true\\\`는 체크됨, \\\`false\\\`는 체크 안 됨, \\\`indeterminate\\\`는 부분 선택 상태입니다.
        \`
      }
    }
  },
  args: {
    color: 'primary',
    invalid: false,
    disabled: false,
    defaultValue: false
  },
  render: (args: CheckboxProps) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: \`<Checkbox v-bind="args" />\`
  })
}`,..._.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="false" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="false" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="false" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="false" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="false" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 상태 (Normal State)</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" disabled />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" invalid />
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">모든 색상 (size-6)</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...z.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const checked = ref(false);
<\/script>

<template>
  <Checkbox v-model="checked" />
  <p>현재 상태: {{ checked }}</p>
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
    /*html*/
    template: \`<ControlledExample />\`
  })
}`,...$.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\\\`defaultValue\\\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\\\`defaultValue\\\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<template>
  <Checkbox defaultValue={true} />
  <Checkbox defaultValue={false} />
  <Checkbox defaultValue="indeterminate" />
</template>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => ({
    components: {
      UncontrolledExample
    },
    /*html*/
    template: \`<UncontrolledExample />\`
  })
}`,...I.parameters?.docs?.source}}};const ba=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{V as Colors,$ as Controlled,_ as Playground,z as Sizes,S as States,I as Uncontrolled,ba as __namedExportsOrder,Ca as default};
