import{i as pe,p as me,F as Y,j as ne,r as E,w as S,k as le,b as y,l as Ce,q as he,s as ve,d as k,v as Be,x as q,C as De,m as I,y as ke,z as Ae,A as Ee,B as _e,e as _,o as h,D as V,g as u,u as p,f as H,c as L,E as re,G as $e,H as we,I as Ve,J as Se,K as Ie,L as Ne,a as c,t as J,h as w}from"./iframe-XjVVtd_c.js";import{c as qe,a as ze}from"./cn-CwZzh8fo.js";import{c as xe}from"./createLucideIcon-BBlLr-Sn.js";import"./preload-helper-PPVm8Dsz.js";const Fe=xe("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Oe=xe("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function oe(a){return typeof a=="string"?`'${a}'`:new Me().serialize(a)}const Me=(function(){class a{#e=new Map;compare(e,n){const l=typeof e,s=typeof n;return l==="string"&&s==="string"?e.localeCompare(n):l==="number"&&s==="number"?e-n:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(n,!0))}serialize(e,n){if(e===null)return"null";switch(typeof e){case"string":return n?e:`'${e}'`;case"bigint":return`${e}n`;case"object":return this.$object(e);case"function":return this.$function(e)}return String(e)}serializeObject(e){const n=Object.prototype.toString.call(e);if(n!=="[object Object]")return this.serializeBuiltInType(n.length<10?`unknown:${n}`:n.slice(8,-1),e);const l=e.constructor,s=l===Object||l===void 0?"":l.name;if(s!==""&&globalThis[s]===l)return this.serializeBuiltInType(s,e);if(typeof e.toJSON=="function"){const r=e.toJSON();return s+(r!==null&&typeof r=="object"?this.$object(r):`(${this.serialize(r)})`)}return this.serializeObjectEntries(s,Object.entries(e))}serializeBuiltInType(e,n){const l=this["$"+e];if(l)return l.call(this,n);if(typeof n?.entries=="function")return this.serializeObjectEntries(e,n.entries());throw new Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,n){const l=Array.from(n).sort((r,o)=>this.compare(r[0],o[0]));let s=`${e}{`;for(let r=0;r<l.length;r++){const[o,v]=l[r];s+=`${this.serialize(o,!0)}:${this.serialize(v)}`,r<l.length-1&&(s+=",")}return s+"}"}$object(e){let n=this.#e.get(e);return n===void 0&&(this.#e.set(e,`#${this.#e.size}`),n=this.serializeObject(e),this.#e.set(e,n)),n}$function(e){const n=Function.prototype.toString.call(e);return n.slice(-15)==="[native code] }"?`${e.name||""}()[native]`:`${e.name}(${e.length})${n.replace(/\s*\n\s*/g,"")}`}$Array(e){let n="[";for(let l=0;l<e.length;l++)n+=this.serialize(e[l]),l<e.length-1&&(n+=",");return n+"]"}$Date(e){try{return`Date(${e.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(",")}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((n,l)=>this.compare(n,l)))}`}$Map(e){return this.serializeObjectEntries("Map",e.entries())}}for(const t of["Error","RegExp","URL"])a.prototype["$"+t]=function(e){return`${t}(${e})`};for(const t of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])a.prototype["$"+t]=function(e){return`${t}[${e.join(",")}]`};for(const t of["BigInt64Array","BigUint64Array"])a.prototype["$"+t]=function(e){return`${t}[${e.join("n,")}${e.length>0?"n":""}]`};return a})();function Q(a,t){return a===t||oe(a)===oe(t)}function se(a,t){const e=typeof a=="string"&&!t?`${a}Context`:t,n=Symbol(e);return[r=>{const o=pe(n,r);if(o||o===null)return o;throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a)?`one of the following components: ${a.join(", ")}`:`\`${a}\``}`)},r=>(me(n,r),r)]}function ie(){let a=document.activeElement;if(a==null)return null;for(;a!=null&&a.shadowRoot!=null&&a.shadowRoot.activeElement!=null;)a=a.shadowRoot.activeElement;return a}function X(a){return a==null}function de(a,t){return X(a)?!1:Array.isArray(a)?a.some(e=>Q(e,t)):Q(a,t)}function ue(a){return a?a.flatMap(t=>t.type===Y?ue(t.children):[t]):[]}const ge=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ue=a=>typeof a<"u",Te=ge?window:void 0;function W(a){var t;const e=Ce(a);return(t=e?.$el)!=null?t:e}function je(a){return JSON.parse(JSON.stringify(a))}function Re(a,t,e,n={}){var l,s,r;const{clone:o=!1,passive:v=!1,eventName:i,deep:d=!1,defaultValue:m,shouldEmit:x}=n,f=ne(),B=e||f?.emit||((l=f?.$emit)==null?void 0:l.bind(f))||((r=(s=f?.proxy)==null?void 0:s.$emit)==null?void 0:r.bind(f?.proxy));let A=i;A=A||`update:${t.toString()}`;const C=b=>o?typeof o=="function"?o(b):je(b):b,D=()=>Ue(a[t])?C(a[t]):m,N=b=>{x?x(b)&&B(A,b):B(A,b)};if(v){const b=D(),$=E(b);let z=!1;return S(()=>a[t],F=>{z||(z=!0,$.value=C(F),le(()=>z=!1))}),S($,F=>{!z&&(F!==a[t]||d)&&N(F)},{deep:d}),$}else return y({get(){return D()},set(b){N(b)}})}function Pe(a){return y(()=>Ce(a)?!!W(a)?.closest("form"):!0)}function ye(){const a=ne(),t=E(),e=y(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:W(t)),n=Object.assign({},a.exposed),l={};for(const r in a.props)Object.defineProperty(l,r,{enumerable:!0,configurable:!0,get:()=>a.props[r]});if(Object.keys(n).length>0)for(const r in n)Object.defineProperty(l,r,{enumerable:!0,configurable:!0,get:()=>n[r]});Object.defineProperty(l,"$el",{enumerable:!0,configurable:!0,get:()=>a.vnode.el}),a.exposed=l;function s(r){t.value=r,r&&(Object.defineProperty(l,"$el",{enumerable:!0,configurable:!0,get:()=>r instanceof Element?r:r.$el}),a.exposed=l)}return{forwardRef:s,currentRef:t,currentElement:e}}function Le(a,t="reka"){return`${t}-${he?.()}`}function Ke(a,t){const e=E(a);function n(s){return t[e.value][s]??e.value}return{state:e,dispatch:s=>{e.value=n(s)}}}function He(a,t){const e=E({}),n=E("none"),l=E(a),s=a.value?"mounted":"unmounted";let r;const o=t.value?.ownerDocument.defaultView??Te,{state:v,dispatch:i}=Ke(s,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),d=C=>{if(ge){const D=new CustomEvent(C,{bubbles:!1,cancelable:!1});t.value?.dispatchEvent(D)}};S(a,async(C,D)=>{const N=D!==C;if(await le(),N){const b=n.value,$=O(t.value);C?(i("MOUNT"),d("enter"),$==="none"&&d("after-enter")):$==="none"||$==="undefined"||e.value?.display==="none"?(i("UNMOUNT"),d("leave"),d("after-leave")):D&&b!==$?(i("ANIMATION_OUT"),d("leave")):(i("UNMOUNT"),d("after-leave"))}},{immediate:!0});const m=C=>{const D=O(t.value),N=D.includes(CSS.escape(C.animationName)),b=v.value==="mounted"?"enter":"leave";if(C.target===t.value&&N&&(d(`after-${b}`),i("ANIMATION_END"),!l.value)){const $=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",r=o?.setTimeout(()=>{t.value?.style.animationFillMode==="forwards"&&(t.value.style.animationFillMode=$)})}C.target===t.value&&D==="none"&&i("ANIMATION_END")},x=C=>{C.target===t.value&&(n.value=O(t.value))},f=S(t,(C,D)=>{C?(e.value=getComputedStyle(C),C.addEventListener("animationstart",x),C.addEventListener("animationcancel",m),C.addEventListener("animationend",m)):(i("ANIMATION_END"),r!==void 0&&o?.clearTimeout(r),D?.removeEventListener("animationstart",x),D?.removeEventListener("animationcancel",m),D?.removeEventListener("animationend",m))},{immediate:!0}),B=S(v,()=>{const C=O(t.value);n.value=v.value==="mounted"?C:"none"});return ve(()=>{f(),B()}),{isPresent:y(()=>["mounted","unmountSuspended"].includes(v.value))}}function O(a){return a&&getComputedStyle(a).animationName||"none"}var We=k({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(a,{slots:t,expose:e}){const{present:n,forceMount:l}=Be(a),s=E(),{isPresent:r}=He(n,s);e({present:r});let o=t.default({present:r.value});o=ue(o||[]);const v=ne();if(o&&o?.length>1){const i=v?.parent?.type.name?`<${v.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${i}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}return()=>l.value||n.value||r.value?q(t.default({present:r.value})[0],{ref:i=>{const d=W(i);return typeof d?.hasAttribute>"u"||(d?.hasAttribute("data-reka-popper-content-wrapper")?s.value=d.firstElementChild:s.value=d),d}}):null}});const Z=k({name:"PrimitiveSlot",inheritAttrs:!1,setup(a,{attrs:t,slots:e}){return()=>{if(!e.default)return null;const n=ue(e.default()),l=n.findIndex(v=>v.type!==De);if(l===-1)return n;const s=n[l];delete s.props?.ref;const r=s.props?I(t,s.props):t,o=ke({...s,props:{}},r);return n.length===1?o:(n[l]=o,n)}}}),Ge=["area","img","input"],G=k({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(a,{attrs:t,slots:e}){const n=a.asChild?"template":a.as;return typeof n=="string"&&Ge.includes(n)?()=>q(n,t):n!=="template"?()=>q(a.as,t,{default:e.default}):()=>q(Z,t,{default:e.default})}});function ee(){const a=E(),t=y(()=>["#text","#comment"].includes(a.value?.$el.nodeName)?a.value?.$el.nextElementSibling:W(a));return{primitiveElement:a,currentElement:t}}const ce="data-reka-collection-item";function Je(a={}){const{key:t="",isProvider:e=!1}=a,n=`${t}CollectionProvider`;let l;if(e){const d=E(new Map);l={collectionRef:E(),itemMap:d},me(n,l)}else l=pe(n);const s=(d=!1)=>{const m=l.collectionRef.value;if(!m)return[];const x=Array.from(m.querySelectorAll(`[${ce}]`)),B=Array.from(l.itemMap.value.values()).sort((A,C)=>x.indexOf(A.ref)-x.indexOf(C.ref));return d?B:B.filter(A=>A.ref.dataset.disabled!=="")},r=k({name:"CollectionSlot",setup(d,{slots:m}){const{primitiveElement:x,currentElement:f}=ee();return S(f,()=>{l.collectionRef.value=f.value}),()=>q(Z,{ref:x},m)}}),o=k({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(d,{slots:m,attrs:x}){const{primitiveElement:f,currentElement:B}=ee();return Ae(A=>{if(B.value){const C=Ee(B.value);l.itemMap.value.set(C,{ref:B.value,value:d.value}),A(()=>l.itemMap.value.delete(C))}}),()=>q(Z,{...x,[ce]:"",ref:f},m)}}),v=y(()=>Array.from(l.itemMap.value.values())),i=y(()=>l.itemMap.value.size);return{getItems:s,reactiveItems:v,itemMapSize:i,CollectionSlot:r,CollectionItem:o}}const Ye={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Qe(a,t){return t!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Xe(a,t,e){const n=Qe(a.key,e);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(n))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(n)))return Ye[n]}function Ze(a,t=!1){const e=ie();for(const n of a)if(n===e||(n.focus({preventScroll:t}),ie()!==e))return}function et(a,t){return a.map((e,n)=>a[(t+n)%a.length])}const[tt]=se("RovingFocusGroup");var at=k({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const t=a,e=tt(),n=Le(),l=y(()=>t.tabStopId||n),s=y(()=>e.currentTabStopId.value===l.value),{getItems:r,CollectionItem:o}=Je();_e(()=>{t.focusable&&e.onFocusableItemAdd()}),ve(()=>{t.focusable&&e.onFocusableItemRemove()});function v(i){if(i.key==="Tab"&&i.shiftKey){e.onItemShiftTab();return}if(i.target!==i.currentTarget)return;const d=Xe(i,e.orientation.value,e.dir.value);if(d!==void 0){if(i.metaKey||i.ctrlKey||i.altKey||!t.allowShiftKey&&i.shiftKey)return;i.preventDefault();let m=[...r().map(x=>x.ref).filter(x=>x.dataset.disabled!=="")];if(d==="last")m.reverse();else if(d==="prev"||d==="next"){d==="prev"&&m.reverse();const x=m.indexOf(i.currentTarget);m=e.loop.value?et(m,x+1):m.slice(x+1)}le(()=>Ze(m))}}return(i,d)=>(h(),_(p(o),null,{default:V(()=>[u(p(G),{tabindex:s.value?0:-1,"data-orientation":p(e).orientation.value,"data-active":i.active?"":void 0,"data-disabled":i.focusable?void 0:"",as:i.as,"as-child":i.asChild,onMousedown:d[0]||(d[0]=m=>{i.focusable?p(e).onItemFocus(l.value):m.preventDefault()}),onFocus:d[1]||(d[1]=m=>p(e).onItemFocus(l.value)),onKeydown:v},{default:V(()=>[H(i.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),nt=at,lt=k({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){return(t,e)=>(h(),_(p(G),{as:t.as,"as-child":t.asChild,"aria-hidden":t.feature==="focusable"?"true":void 0,"data-hidden":t.feature==="fully-hidden"?"":void 0,tabindex:t.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:V(()=>[H(t.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),rt=lt,st=k({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(a){const t=a,{primitiveElement:e,currentElement:n}=ee(),l=y(()=>t.checked??t.value);return S(l,(s,r)=>{if(!n.value)return;const o=n.value,v=window.HTMLInputElement.prototype,d=Object.getOwnPropertyDescriptor(v,"value").set;if(d&&s!==r){const m=new Event("input",{bubbles:!0}),x=new Event("change",{bubbles:!0});d.call(o,s),o.dispatchEvent(m),o.dispatchEvent(x)}}),(s,r)=>(h(),_(rt,I({ref_key:"primitiveElement",ref:e},{...t,...s.$attrs},{as:"input"}),null,16))}}),fe=st,ut=k({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(a){const t=a,e=y(()=>typeof t.value=="object"&&Array.isArray(t.value)&&t.value.length===0&&t.required),n=y(()=>typeof t.value=="string"||typeof t.value=="number"||typeof t.value=="boolean"||t.value===null||t.value===void 0?[{name:t.name,value:t.value}]:typeof t.value=="object"&&Array.isArray(t.value)?t.value.flatMap((l,s)=>typeof l=="object"?Object.entries(l).map(([r,o])=>({name:`${t.name}[${s}][${r}]`,value:o})):{name:`${t.name}[${s}]`,value:l}):t.value!==null&&typeof t.value=="object"&&!Array.isArray(t.value)?Object.entries(t.value).map(([l,s])=>({name:`${t.name}[${l}]`,value:s})):[]);return(l,s)=>(h(),L(Y,null,[re(" We render single input if it's required "),e.value?(h(),_(fe,I({key:l.name},{...t,...l.$attrs},{name:l.name,value:l.value}),null,16,["name","value"])):(h(!0),L(Y,{key:1},$e(n.value,r=>(h(),_(fe,I({key:r.name},{ref_for:!0},{...t,...l.$attrs},{name:r.name,value:r.value}),null,16,["name","value"]))),128))],2112))}}),ot=ut;const[it]=se("CheckboxGroupRoot");function K(a){return a==="indeterminate"}function be(a){return K(a)?"indeterminate":a?"checked":"unchecked"}const[dt,ct]=se("CheckboxRoot");var ft=k({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:[Boolean,String],required:!1},modelValue:{type:[Boolean,String,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,n=t,{forwardRef:l,currentElement:s}=ye(),r=it(null),o=Re(e,"modelValue",n,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),v=y(()=>r?.disabled.value||e.disabled),i=y(()=>X(r?.modelValue.value)?o.value==="indeterminate"?"indeterminate":o.value:de(r.modelValue.value,e.value));function d(){if(X(r?.modelValue.value))o.value=K(o.value)?!0:!o.value;else{const f=[...r.modelValue.value||[]];if(de(f,e.value)){const B=f.findIndex(A=>Q(A,e.value));f.splice(B,1)}else f.push(e.value);r.modelValue.value=f}}const m=Pe(s),x=y(()=>e.id&&s.value?document.querySelector(`[for="${e.id}"]`)?.innerText:void 0);return ct({disabled:v,state:i}),(f,B)=>(h(),_(Se(p(r)?.rovingFocus.value?p(nt):p(G)),I(f.$attrs,{id:f.id,ref:p(l),role:"checkbox","as-child":f.asChild,as:f.as,type:f.as==="button"?"button":void 0,"aria-checked":p(K)(i.value)?"mixed":i.value,"aria-required":f.required,"aria-label":f.$attrs["aria-label"]||x.value,"data-state":p(be)(i.value),"data-disabled":v.value?"":void 0,disabled:v.value,focusable:p(r)?.rovingFocus.value?!v.value:void 0,onKeydown:we(Ve(()=>{},["prevent"]),["enter"]),onClick:d}),{default:V(()=>[H(f.$slots,"default",{modelValue:p(o),state:i.value}),p(m)&&f.name&&!p(r)?(h(),_(p(ot),{key:0,type:"checkbox",checked:!!i.value,name:f.name,value:f.value,disabled:v.value,required:f.required},null,8,["checked","name","value","disabled","required"])):re("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"]))}}),pt=ft,mt=k({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const{forwardRef:t}=ye(),e=dt();return(n,l)=>(h(),_(p(We),{present:n.forceMount||p(K)(p(e).state.value)||p(e).state.value===!0},{default:V(()=>[u(p(G),I({ref:p(t),"data-state":p(be)(p(e).state.value),"data-disabled":p(e).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":n.asChild,as:n.as},n.$attrs),{default:V(()=>[H(n.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),Ct=mt;const vt=ze(["border-gray-2 size-4 shrink-0 cursor-pointer rounded-[3px] border shadow-xs transition-all outline-none","not-disabled:hover:border-gray-1","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-gray-2 focus-visible:ring","data-[state=checked]:border-transparent","data-[state=indeterminate]:border-transparent","not-disabled:hover:data-[state=checked]:border-transparent","not-disabled:hover:data-[state=indeterminate]:border-transparent","data-[invalid=true]:border-danger","data-[invalid=true]:focus-visible:ring-danger","data-[invalid=true]:hover:border-danger","data-[invalid=true]:data-[state=checked]:border-danger data-[invalid=true]:data-[state=checked]:bg-danger","data-[invalid=true]:data-[state=checked]:hover:bg-danger data-[invalid=true]:data-[state=checked]:hover:border-danger","data-[invalid=true]:data-[state=indeterminate]:border-danger data-[invalid=true]:data-[state=indeterminate]:bg-danger","data-[invalid=true]:data-[state=indeterminate]:hover:bg-danger data-[invalid=true]:data-[state=indeterminate]:hover:border-danger"],{variants:{color:{primary:["data-[state=checked]:bg-primary data-[state=checked]:border-primary","data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary","not-disabled:hover:data-[state=checked]:bg-primary-dark not-disabled:hover:data-[state=checked]:border-primary-dark","not-disabled:hover:data-[state=indeterminate]:bg-primary-dark not-disabled:hover:data-[state=indeterminate]:border-primary-dark","data-[state=checked]:focus-visible:ring-primary","data-[state=indeterminate]:focus-visible:ring-primary"],secondary:["data-[state=checked]:bg-gray-200","data-[state=checked]:border-gray-200","data-[state=indeterminate]:bg-gray-200","data-[state=indeterminate]:border-gray-200","not-disabled:hover:data-[state=checked]:bg-gray-300","not-disabled:hover:data-[state=checked]:border-gray-300","not-disabled:hover:data-[state=indeterminate]:bg-gray-300","not-disabled:hover:data-[state=indeterminate]:border-gray-300","data-[state=checked]:focus-visible:ring-gray-200","data-[state=indeterminate]:focus-visible:ring-gray-200"],danger:["data-[state=checked]:bg-danger data-[state=checked]:border-danger","data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger","not-disabled:hover:data-[state=checked]:border-danger","not-disabled:hover:data-[state=indeterminate]:border-danger","data-[state=checked]:focus-visible:ring-danger","data-[state=indeterminate]:focus-visible:ring-danger"],success:["data-[state=checked]:bg-success data-[state=checked]:border-success","data-[state=indeterminate]:bg-success data-[state=indeterminate]:border-success","data-[state=checked]:focus-visible:ring-success","data-[state=indeterminate]:focus-visible:ring-success"],warning:["data-[state=checked]:bg-warning data-[state=checked]:border-warning","data-[state=indeterminate]:bg-warning data-[state=indeterminate]:border-warning","data-[state=checked]:focus-visible:ring-warning","data-[state=indeterminate]:focus-visible:ring-warning"]}},defaultVariants:{color:"primary"}}),g=k({__name:"Checkbox",props:Ie({color:{default:"primary"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},class:{default:""},defaultValue:{default:!1}},{modelValue:{default:void 0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=a,e=Ne(a,"modelValue"),n=y(()=>e.value??t.defaultValue??!1),l=y(()=>qe(vt({color:t.color}),t.class));return(s,r)=>(h(),_(p(pt),I(s.$attrs,{modelValue:e.value,"onUpdate:modelValue":r[0]||(r[0]=o=>e.value=o),"default-value":a.defaultValue,disabled:a.disabled,"data-invalid":a.invalid,class:l.value}),{default:V(()=>[u(p(Ct),{class:"flex items-center justify-center rounded-xs text-white"},{default:V(()=>[n.value==="indeterminate"?(h(),_(p(Oe),{key:0,class:"h-[80%] w-[80%]","stroke-width":"3"})):n.value===!0?(h(),_(p(Fe),{key:1,class:"h-[80%] w-[80%]","stroke-width":"3"})):re("",!0)]),_:1})]),_:1},16,["modelValue","default-value","disabled","data-invalid","class"]))}});g.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'primary'"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultValue",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Checkbox.vue"]};const xt={class:"flex flex-col gap-6"},gt={class:"flex flex-col gap-4"},yt={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},bt={class:"flex items-center gap-3"},ht={class:"flex flex-col"},Bt={class:"text-xs text-gray-500"},Dt={class:"flex items-center gap-3"},kt={class:"flex flex-col"},At={class:"text-xs text-gray-500"},Et={class:"flex items-center gap-3"},_t={class:"flex flex-col"},$t={class:"text-xs text-gray-500"},te=k({__name:"Controlled.stories",setup(a){const t=E(!1),e=E(!0),n=E("indeterminate"),l=()=>{t.value=!t.value,e.value=!e.value,n.value=n.value==="indeterminate"?!1:"indeterminate"};return(s,r)=>(h(),L("div",xt,[c("div",gt,[r[6]||(r[6]=c("div",{class:"flex flex-col gap-2"},[c("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),c("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 상태를 제어합니다. 체크박스를 클릭하면 상태가 변경되고, 부모에서 상태를 변경하면 체크박스가 즉시 반영됩니다. ")],-1)),c("div",yt,[c("div",bt,[u(g,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=o=>t.value=o)},null,8,["modelValue"]),c("div",ht,[r[3]||(r[3]=c("span",{class:"text-sm text-gray-700"},"체크박스 1",-1)),c("span",Bt,"현재 상태: "+J(String(t.value)),1)])]),c("div",Dt,[u(g,{modelValue:e.value,"onUpdate:modelValue":r[1]||(r[1]=o=>e.value=o)},null,8,["modelValue"]),c("div",kt,[r[4]||(r[4]=c("span",{class:"text-sm text-gray-700"},"체크박스 2",-1)),c("span",At,"현재 상태: "+J(String(e.value)),1)])]),c("div",Et,[u(g,{modelValue:n.value,"onUpdate:modelValue":r[2]||(r[2]=o=>n.value=o)},null,8,["modelValue"]),c("div",_t,[r[5]||(r[5]=c("span",{class:"text-sm text-gray-700"},"체크박스 3 (Indeterminate)",-1)),c("span",$t,"현재 상태: "+J(String(n.value)),1)])])]),c("div",{class:"flex gap-2"},[c("button",{class:"bg-primary hover:bg-primary-dark rounded px-3 py-1.5 text-xs font-medium text-white transition-colors",onClick:l}," 부모에서 상태 변경 ")])])]))}});te.__docgenInfo={exportName:"default",displayName:"Controlled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Controlled.stories.vue"]};const wt={class:"flex flex-col gap-6"},Vt={class:"flex flex-col gap-4"},St={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},It={class:"flex items-center gap-3"},Nt={class:"flex items-center gap-3"},qt={class:"flex items-center gap-3"},ae=k({__name:"Uncontrolled.stories",setup(a){return(t,e)=>(h(),L("div",wt,[c("div",Vt,[e[3]||(e[3]=c("div",{class:"flex flex-col gap-2"},[c("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),c("p",{class:"text-xs text-gray-500"}," 각 체크박스가 자체적으로 상태를 관리합니다. 부모는 초기값(`defaultValue`)만 설정하며, 이후 상태 변경은 컴포넌트 내부에서 처리됩니다. ")],-1)),c("div",St,[c("div",It,[u(g,{"default-value":!1}),e[0]||(e[0]=c("div",{class:"flex flex-col"},[c("span",{class:"text-sm text-gray-700"},"체크박스 1"),c("span",{class:"text-xs text-gray-500"},"초기값: false (자체 상태 관리)")],-1))]),c("div",Nt,[u(g,{"default-value":!0}),e[1]||(e[1]=c("div",{class:"flex flex-col"},[c("span",{class:"text-sm text-gray-700"},"체크박스 2"),c("span",{class:"text-xs text-gray-500"},"초기값: true (자체 상태 관리)")],-1))]),c("div",qt,[u(g,{"default-value":"indeterminate"}),e[2]||(e[2]=c("div",{class:"flex flex-col"},[c("span",{class:"text-sm text-gray-700"},"체크박스 3"),c("span",{class:"text-xs text-gray-500"},"초기값: indeterminate (자체 상태 관리)")],-1))])]),e[4]||(e[4]=c("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[c("p",{class:"text-xs text-blue-800"},[c("strong",null,"참고:"),w(" 비제어 컴포넌트는 자체적으로 상태를 관리하므로, 부모 컴포넌트에서 상태를 직접 변경할 수 없습니다. 폼 제출 시에는 ref를 통해 현재 값을 가져올 수 있습니다. ")])],-1))])]))}});ae.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Uncontrolled.stories.vue"]};const Ut={title:"Shared/UI/Checkbox",component:g,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\n체크박스 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다. 다양한 색상 및 상태를 지원합니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Checkbox defaultValue={true} color="primary" />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultValue:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값 (비제어 컴포넌트)",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}}}},M={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 위험한 작업에 사용, `success`는 성공 상태에 사용).\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultValue**: 체크박스의 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}},args:{color:"primary",invalid:!1,disabled:!1,defaultValue:!1},render:a=>({components:{Checkbox:g},setup(){return()=>u(g,a,null)}})},U={render:()=>({components:{Checkbox:g},setup(){const a=["primary","secondary","danger","success","warning"],t=["Primary","Secondary","Danger","Success","Warning"];return()=>u("div",{class:"flex flex-col gap-6"},[u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("Unchecked")]),u("div",{class:"flex gap-4"},[a.map((e,n)=>u("div",{key:e,class:"flex flex-col items-center gap-2"},[u(g,{color:e,defaultValue:!1},null),u("span",{class:"text-xs text-gray-600"},[t[n]])]))])]),u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("Checked")]),u("div",{class:"flex gap-4"},[a.map((e,n)=>u("div",{key:e,class:"flex flex-col items-center gap-2"},[u(g,{color:e,defaultValue:!0},null),u("span",{class:"text-xs text-gray-600"},[t[n]])]))])]),u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("Indeterminate")]),u("div",{class:"flex gap-4"},[a.map((e,n)=>u("div",{key:e,class:"flex flex-col items-center gap-2"},[u(g,{color:e,defaultValue:"indeterminate"},null),u("span",{class:"text-xs text-gray-600"},[t[n]])]))])])])}})},T={render:()=>({components:{Checkbox:g},setup(){const a=["primary","secondary","danger","success","warning"],t=[{value:!1,label:"Unchecked"},{value:!0,label:"Checked"},{value:"indeterminate",label:"Indeterminate"}];return()=>u("div",{class:"flex flex-col gap-6"},[u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("기본 상태 (Normal State)")]),u("div",{class:"flex flex-col gap-3"},[t.map(e=>u("div",{key:e.label,class:"flex gap-4"},[a.map(n=>u("div",{key:`${e.label}-${n}`,class:"flex flex-col items-center gap-2"},[u(g,{color:n,defaultValue:e.value},null)]))]))])]),u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("Disabled 상태")]),u("div",{class:"flex flex-col gap-3"},[t.map(e=>u("div",{key:e.label,class:"flex gap-4"},[a.map(n=>u("div",{key:`${e.label}-${n}`,class:"flex flex-col items-center gap-2"},[u(g,{color:n,defaultValue:e.value,disabled:!0},null)]))]))])]),u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("Invalid 상태")]),u("div",{class:"flex flex-col gap-3"},[t.map(e=>u("div",{key:e.label,class:"flex gap-4"},[a.map(n=>u("div",{key:`${e.label}-${n}`,class:"flex flex-col items-center gap-2"},[u(g,{color:n,defaultValue:e.value,invalid:!0},null)]))]))])])])}})},j={render:()=>({components:{Checkbox:g},setup(){const a=[{size:3,px:12},{size:4,px:16},{size:5,px:20},{size:6,px:24},{size:8,px:32},{size:10,px:40}],t=["primary","secondary","danger","success","warning"],e=["Primary","Secondary","Danger","Success","Warning"],n=[{value:!1,label:"Unchecked"},{value:!0,label:"Checked"},{value:"indeterminate",label:"Indeterminate"}];return()=>u("div",{class:"flex flex-col gap-6"},[n.map(l=>u("div",{key:l.label,class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[l.label]),u("div",{class:"flex gap-4"},[a.map(s=>u("div",{key:s.size,class:"flex flex-col items-center gap-2"},[u(g,{defaultValue:l.value,class:`size-${s.size}`,style:{width:`${s.px}px`,height:`${s.px}px`,minWidth:`${s.px}px`,minHeight:`${s.px}px`}},null),u("span",{class:"text-xs text-gray-600"},[s.size,w(" ("),s.px,w("px)")])]))])])),u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[w("모든 색상 (size-6)")]),u("div",{class:"flex gap-4"},[t.map((l,s)=>u("div",{key:l,class:"flex flex-col items-center gap-2"},[u(g,{color:l,defaultValue:!0,class:"size-6"},null),u("span",{class:"text-xs text-gray-600"},[e[s]])]))])])])}})},R={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:te},setup(){return()=>u(te,null,null)}})},P={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{UncontrolledExample:ae},setup(){return()=>u(ae,null,null)}})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
      return () => <Checkbox {...args} />;
    }
  })
}`,...M.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const colors = ['primary', 'secondary', 'danger', 'success', 'warning'] as const;
      const colorLabels = ['Primary', 'Secondary', 'Danger', 'Success', 'Warning'];
      return () => <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
            <div class="flex gap-4">
              {colors.map((color, index) => <div key={color} class="flex flex-col items-center gap-2">
                  <Checkbox color={color} defaultValue={false} />
                  <span class="text-xs text-gray-600">{colorLabels[index]}</span>
                </div>)}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
            <div class="flex gap-4">
              {colors.map((color, index) => <div key={color} class="flex flex-col items-center gap-2">
                  <Checkbox color={color} defaultValue={true} />
                  <span class="text-xs text-gray-600">{colorLabels[index]}</span>
                </div>)}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
            <div class="flex gap-4">
              {colors.map((color, index) => <div key={color} class="flex flex-col items-center gap-2">
                  <Checkbox color={color} defaultValue="indeterminate" />
                  <span class="text-xs text-gray-600">{colorLabels[index]}</span>
                </div>)}
            </div>
          </div>
        </div>;
    }
  })
}`,...U.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const colors = ['primary', 'secondary', 'danger', 'success', 'warning'] as const;
      const states = [{
        value: false,
        label: 'Unchecked'
      }, {
        value: true,
        label: 'Checked'
      }, {
        value: 'indeterminate' as const,
        label: 'Indeterminate'
      }];
      return () => <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">기본 상태 (Normal State)</h3>
            <div class="flex flex-col gap-3">
              {states.map(state => <div key={state.label} class="flex gap-4">
                  {colors.map(color => <div key={\`\${state.label}-\${color}\`} class="flex flex-col items-center gap-2">
                      <Checkbox color={color} defaultValue={state.value} />
                    </div>)}
                </div>)}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Disabled 상태</h3>
            <div class="flex flex-col gap-3">
              {states.map(state => <div key={state.label} class="flex gap-4">
                  {colors.map(color => <div key={\`\${state.label}-\${color}\`} class="flex flex-col items-center gap-2">
                      <Checkbox color={color} defaultValue={state.value} disabled />
                    </div>)}
                </div>)}
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Invalid 상태</h3>
            <div class="flex flex-col gap-3">
              {states.map(state => <div key={state.label} class="flex gap-4">
                  {colors.map(color => <div key={\`\${state.label}-\${color}\`} class="flex flex-col items-center gap-2">
                      <Checkbox color={color} defaultValue={state.value} invalid />
                    </div>)}
                </div>)}
            </div>
          </div>
        </div>;
    }
  })
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    setup() {
      const sizes = [{
        size: 3,
        px: 12
      }, {
        size: 4,
        px: 16
      }, {
        size: 5,
        px: 20
      }, {
        size: 6,
        px: 24
      }, {
        size: 8,
        px: 32
      }, {
        size: 10,
        px: 40
      }];
      const colors = ['primary', 'secondary', 'danger', 'success', 'warning'] as const;
      const colorLabels = ['Primary', 'Secondary', 'Danger', 'Success', 'Warning'];
      const states = [{
        value: false,
        label: 'Unchecked'
      }, {
        value: true,
        label: 'Checked'
      }, {
        value: 'indeterminate' as const,
        label: 'Indeterminate'
      }];
      return () => <div class="flex flex-col gap-6">
          {states.map(state => <div key={state.label} class="flex flex-col gap-2">
              <h3 class="text-sm font-semibold text-gray-700">{state.label}</h3>
              <div class="flex gap-4">
                {sizes.map(sizeInfo => <div key={sizeInfo.size} class="flex flex-col items-center gap-2">
                    <Checkbox defaultValue={state.value} class={\`size-\${sizeInfo.size}\`} style={{
                width: \`\${sizeInfo.px}px\`,
                height: \`\${sizeInfo.px}px\`,
                minWidth: \`\${sizeInfo.px}px\`,
                minHeight: \`\${sizeInfo.px}px\`
              }} />
                    <span class="text-xs text-gray-600">
                      {sizeInfo.size} ({sizeInfo.px}px)
                    </span>
                  </div>)}
              </div>
            </div>)}
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">모든 색상 (size-6)</h3>
            <div class="flex gap-4">
              {colors.map((color, index) => <div key={color} class="flex flex-col items-center gap-2">
                  <Checkbox color={color} defaultValue={true} class="size-6" />
                  <span class="text-xs text-gray-600">{colorLabels[index]}</span>
                </div>)}
            </div>
          </div>
        </div>;
    }
  })
}`,...j.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
    setup() {
      return () => <ControlledExample />;
    }
  })
}`,...R.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
    setup() {
      return () => <UncontrolledExample />;
    }
  })
}`,...P.parameters?.docs?.source}}};const Tt=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{U as Colors,R as Controlled,M as Playground,j as Sizes,T as States,P as Uncontrolled,Tt as __namedExportsOrder,Ut as default};
