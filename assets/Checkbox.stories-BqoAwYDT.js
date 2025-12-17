import{i as de,p as ue,F as J,h as ee,r as w,w as $,j as te,b as g,k as xe,l as be,q as fe,d as k,s as ye,v as z,C as ke,m as V,x as Be,y as we,z as De,A as Ae,e as A,o as C,B as S,g as _,u as x,f as K,c as R,D as ae,E as Ee,G as _e,H as Se,I as $e,J as Ve,K as Ie,a as d,t as G,L as ze}from"./iframe-Cv36e0vs.js";import{c as Ne,a as qe}from"./cn-CwZzh8fo.js";import{c as pe}from"./createLucideIcon-Bya7RdBG.js";import"./preload-helper-PPVm8Dsz.js";const Fe=pe("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);const Oe=pe("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function ne(a){return typeof a=="string"?`'${a}'`:new Me().serialize(a)}const Me=(function(){class a{#e=new Map;compare(e,l){const n=typeof e,i=typeof l;return n==="string"&&i==="string"?e.localeCompare(l):n==="number"&&i==="number"?e-l:String.prototype.localeCompare.call(this.serialize(e,!0),this.serialize(l,!0))}serialize(e,l){if(e===null)return"null";switch(typeof e){case"string":return l?e:`'${e}'`;case"bigint":return`${e}n`;case"object":return this.$object(e);case"function":return this.$function(e)}return String(e)}serializeObject(e){const l=Object.prototype.toString.call(e);if(l!=="[object Object]")return this.serializeBuiltInType(l.length<10?`unknown:${l}`:l.slice(8,-1),e);const n=e.constructor,i=n===Object||n===void 0?"":n.name;if(i!==""&&globalThis[i]===n)return this.serializeBuiltInType(i,e);if(typeof e.toJSON=="function"){const s=e.toJSON();return i+(s!==null&&typeof s=="object"?this.$object(s):`(${this.serialize(s)})`)}return this.serializeObjectEntries(i,Object.entries(e))}serializeBuiltInType(e,l){const n=this["$"+e];if(n)return n.call(this,l);if(typeof l?.entries=="function")return this.serializeObjectEntries(e,l.entries());throw new Error(`Cannot serialize ${e}`)}serializeObjectEntries(e,l){const n=Array.from(l).sort((s,r)=>this.compare(s[0],r[0]));let i=`${e}{`;for(let s=0;s<n.length;s++){const[r,v]=n[s];i+=`${this.serialize(r,!0)}:${this.serialize(v)}`,s<n.length-1&&(i+=",")}return i+"}"}$object(e){let l=this.#e.get(e);return l===void 0&&(this.#e.set(e,`#${this.#e.size}`),l=this.serializeObject(e),this.#e.set(e,l)),l}$function(e){const l=Function.prototype.toString.call(e);return l.slice(-15)==="[native code] }"?`${e.name||""}()[native]`:`${e.name}(${e.length})${l.replace(/\s*\n\s*/g,"")}`}$Array(e){let l="[";for(let n=0;n<e.length;n++)l+=this.serialize(e[n]),n<e.length-1&&(l+=",");return l+"]"}$Date(e){try{return`Date(${e.toISOString()})`}catch{return"Date(null)"}}$ArrayBuffer(e){return`ArrayBuffer[${new Uint8Array(e).join(",")}]`}$Set(e){return`Set${this.$Array(Array.from(e).sort((l,n)=>this.compare(l,n)))}`}$Map(e){return this.serializeObjectEntries("Map",e.entries())}}for(const t of["Error","RegExp","URL"])a.prototype["$"+t]=function(e){return`${t}(${e})`};for(const t of["Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Uint16Array","Int32Array","Uint32Array","Float32Array","Float64Array"])a.prototype["$"+t]=function(e){return`${t}[${e.join(",")}]`};for(const t of["BigInt64Array","BigUint64Array"])a.prototype["$"+t]=function(e){return`${t}[${e.join("n,")}${e.length>0?"n":""}]`};return a})();function Y(a,t){return a===t||ne(a)===ne(t)}function le(a,t){const e=typeof a=="string"&&!t?`${a}Context`:t,l=Symbol(e);return[s=>{const r=de(l,s);if(r||r===null)return r;throw new Error(`Injection \`${l.toString()}\` not found. Component must be used within ${Array.isArray(a)?`one of the following components: ${a.join(", ")}`:`\`${a}\``}`)},s=>(ue(l,s),s)]}function ie(){let a=document.activeElement;if(a==null)return null;for(;a!=null&&a.shadowRoot!=null&&a.shadowRoot.activeElement!=null;)a=a.shadowRoot.activeElement;return a}function Q(a){return a==null}function re(a,t){return Q(a)?!1:Array.isArray(a)?a.some(e=>Y(e,t)):Y(a,t)}function se(a){return a?a.flatMap(t=>t.type===J?se(t.children):[t]):[]}const ve=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Te=a=>typeof a<"u",Ue=ve?window:void 0;function W(a){var t;const e=xe(a);return(t=e?.$el)!=null?t:e}function je(a){return JSON.parse(JSON.stringify(a))}function Pe(a,t,e,l={}){var n,i,s;const{clone:r=!1,passive:v=!1,eventName:o,deep:c=!1,defaultValue:f,shouldEmit:m}=l,u=ee(),b=e||u?.emit||((n=u?.$emit)==null?void 0:n.bind(u))||((s=(i=u?.proxy)==null?void 0:i.$emit)==null?void 0:s.bind(u?.proxy));let B=o;B=B||`update:${t.toString()}`;const p=h=>r?typeof r=="function"?r(h):je(h):h,y=()=>Te(a[t])?p(a[t]):f,I=h=>{m?m(h)&&b(B,h):b(B,h)};if(v){const h=y(),E=w(h);let N=!1;return $(()=>a[t],q=>{N||(N=!0,E.value=p(q),te(()=>N=!1))}),$(E,q=>{!N&&(q!==a[t]||c)&&I(q)},{deep:c}),E}else return g({get(){return y()},set(h){I(h)}})}function Re(a){return g(()=>xe(a)?!!W(a)?.closest("form"):!0)}function me(){const a=ee(),t=w(),e=g(()=>["#text","#comment"].includes(t.value?.$el.nodeName)?t.value?.$el.nextElementSibling:W(t)),l=Object.assign({},a.exposed),n={};for(const s in a.props)Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>a.props[s]});if(Object.keys(l).length>0)for(const s in l)Object.defineProperty(n,s,{enumerable:!0,configurable:!0,get:()=>l[s]});Object.defineProperty(n,"$el",{enumerable:!0,configurable:!0,get:()=>a.vnode.el}),a.exposed=n;function i(s){t.value=s,s&&(Object.defineProperty(n,"$el",{enumerable:!0,configurable:!0,get:()=>s instanceof Element?s:s.$el}),a.exposed=n)}return{forwardRef:i,currentRef:t,currentElement:e}}function Le(a,t="reka"){return`${t}-${be?.()}`}function Ke(a,t){const e=w(a);function l(i){return t[e.value][i]??e.value}return{state:e,dispatch:i=>{e.value=l(i)}}}function We(a,t){const e=w({}),l=w("none"),n=w(a),i=a.value?"mounted":"unmounted";let s;const r=t.value?.ownerDocument.defaultView??Ue,{state:v,dispatch:o}=Ke(i,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}}),c=p=>{if(ve){const y=new CustomEvent(p,{bubbles:!1,cancelable:!1});t.value?.dispatchEvent(y)}};$(a,async(p,y)=>{const I=y!==p;if(await te(),I){const h=l.value,E=F(t.value);p?(o("MOUNT"),c("enter"),E==="none"&&c("after-enter")):E==="none"||E==="undefined"||e.value?.display==="none"?(o("UNMOUNT"),c("leave"),c("after-leave")):y&&h!==E?(o("ANIMATION_OUT"),c("leave")):(o("UNMOUNT"),c("after-leave"))}},{immediate:!0});const f=p=>{const y=F(t.value),I=y.includes(CSS.escape(p.animationName)),h=v.value==="mounted"?"enter":"leave";if(p.target===t.value&&I&&(c(`after-${h}`),o("ANIMATION_END"),!n.value)){const E=t.value.style.animationFillMode;t.value.style.animationFillMode="forwards",s=r?.setTimeout(()=>{t.value?.style.animationFillMode==="forwards"&&(t.value.style.animationFillMode=E)})}p.target===t.value&&y==="none"&&o("ANIMATION_END")},m=p=>{p.target===t.value&&(l.value=F(t.value))},u=$(t,(p,y)=>{p?(e.value=getComputedStyle(p),p.addEventListener("animationstart",m),p.addEventListener("animationcancel",f),p.addEventListener("animationend",f)):(o("ANIMATION_END"),s!==void 0&&r?.clearTimeout(s),y?.removeEventListener("animationstart",m),y?.removeEventListener("animationcancel",f),y?.removeEventListener("animationend",f))},{immediate:!0}),b=$(v,()=>{const p=F(t.value);l.value=v.value==="mounted"?p:"none"});return fe(()=>{u(),b()}),{isPresent:g(()=>["mounted","unmountSuspended"].includes(v.value))}}function F(a){return a&&getComputedStyle(a).animationName||"none"}var He=k({name:"Presence",props:{present:{type:Boolean,required:!0},forceMount:{type:Boolean}},slots:{},setup(a,{slots:t,expose:e}){const{present:l,forceMount:n}=ye(a),i=w(),{isPresent:s}=We(l,i);e({present:s});let r=t.default({present:s.value});r=se(r||[]);const v=ee();if(r&&r?.length>1){const o=v?.parent?.type.name?`<${v.parent.type.name} />`:"component";throw new Error([`Detected an invalid children for \`${o}\` for  \`Presence\` component.`,"","Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.","You can apply a few solutions:",["Provide a single child element so that `presence` directive attach correctly.","Ensure the first child is an actual element instead of a raw text node or comment node."].map(c=>`  - ${c}`).join(`
`)].join(`
`))}return()=>n.value||l.value||s.value?z(t.default({present:s.value})[0],{ref:o=>{const c=W(o);return typeof c?.hasAttribute>"u"||(c?.hasAttribute("data-reka-popper-content-wrapper")?i.value=c.firstElementChild:i.value=c),c}}):null}});const X=k({name:"PrimitiveSlot",inheritAttrs:!1,setup(a,{attrs:t,slots:e}){return()=>{if(!e.default)return null;const l=se(e.default()),n=l.findIndex(v=>v.type!==ke);if(n===-1)return l;const i=l[n];delete i.props?.ref;const s=i.props?V(t,i.props):t,r=Be({...i,props:{}},s);return l.length===1?r:(l[n]=r,l)}}}),Ge=["area","img","input"],H=k({name:"Primitive",inheritAttrs:!1,props:{asChild:{type:Boolean,default:!1},as:{type:[String,Object],default:"div"}},setup(a,{attrs:t,slots:e}){const l=a.asChild?"template":a.as;return typeof l=="string"&&Ge.includes(l)?()=>z(l,t):l!=="template"?()=>z(a.as,t,{default:e.default}):()=>z(X,t,{default:e.default})}});function Z(){const a=w(),t=g(()=>["#text","#comment"].includes(a.value?.$el.nodeName)?a.value?.$el.nextElementSibling:W(a));return{primitiveElement:a,currentElement:t}}const oe="data-reka-collection-item";function Je(a={}){const{key:t="",isProvider:e=!1}=a,l=`${t}CollectionProvider`;let n;if(e){const c=w(new Map);n={collectionRef:w(),itemMap:c},ue(l,n)}else n=de(l);const i=(c=!1)=>{const f=n.collectionRef.value;if(!f)return[];const m=Array.from(f.querySelectorAll(`[${oe}]`)),b=Array.from(n.itemMap.value.values()).sort((B,p)=>m.indexOf(B.ref)-m.indexOf(p.ref));return c?b:b.filter(B=>B.ref.dataset.disabled!=="")},s=k({name:"CollectionSlot",setup(c,{slots:f}){const{primitiveElement:m,currentElement:u}=Z();return $(u,()=>{n.collectionRef.value=u.value}),()=>z(X,{ref:m},f)}}),r=k({name:"CollectionItem",inheritAttrs:!1,props:{value:{validator:()=>!0}},setup(c,{slots:f,attrs:m}){const{primitiveElement:u,currentElement:b}=Z();return we(B=>{if(b.value){const p=De(b.value);n.itemMap.value.set(p,{ref:b.value,value:c.value}),B(()=>n.itemMap.value.delete(p))}}),()=>z(X,{...m,[oe]:"",ref:u},f)}}),v=g(()=>Array.from(n.itemMap.value.values())),o=g(()=>n.itemMap.value.size);return{getItems:i,reactiveItems:v,itemMapSize:o,CollectionSlot:s,CollectionItem:r}}const Ye={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Qe(a,t){return t!=="rtl"?a:a==="ArrowLeft"?"ArrowRight":a==="ArrowRight"?"ArrowLeft":a}function Xe(a,t,e){const l=Qe(a.key,e);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(l))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(l)))return Ye[l]}function Ze(a,t=!1){const e=ie();for(const l of a)if(l===e||(l.focus({preventScroll:t}),ie()!==e))return}function et(a,t){return a.map((e,l)=>a[(t+l)%a.length])}const[tt]=le("RovingFocusGroup");var at=k({__name:"RovingFocusItem",props:{tabStopId:{type:String,required:!1},focusable:{type:Boolean,required:!1,default:!0},active:{type:Boolean,required:!1},allowShiftKey:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const t=a,e=tt(),l=Le(),n=g(()=>t.tabStopId||l),i=g(()=>e.currentTabStopId.value===n.value),{getItems:s,CollectionItem:r}=Je();Ae(()=>{t.focusable&&e.onFocusableItemAdd()}),fe(()=>{t.focusable&&e.onFocusableItemRemove()});function v(o){if(o.key==="Tab"&&o.shiftKey){e.onItemShiftTab();return}if(o.target!==o.currentTarget)return;const c=Xe(o,e.orientation.value,e.dir.value);if(c!==void 0){if(o.metaKey||o.ctrlKey||o.altKey||!t.allowShiftKey&&o.shiftKey)return;o.preventDefault();let f=[...s().map(m=>m.ref).filter(m=>m.dataset.disabled!=="")];if(c==="last")f.reverse();else if(c==="prev"||c==="next"){c==="prev"&&f.reverse();const m=f.indexOf(o.currentTarget);f=e.loop.value?et(f,m+1):f.slice(m+1)}te(()=>Ze(f))}}return(o,c)=>(C(),A(x(r),null,{default:S(()=>[_(x(H),{tabindex:i.value?0:-1,"data-orientation":x(e).orientation.value,"data-active":o.active?"":void 0,"data-disabled":o.focusable?void 0:"",as:o.as,"as-child":o.asChild,onMousedown:c[0]||(c[0]=f=>{o.focusable?x(e).onItemFocus(n.value):f.preventDefault()}),onFocus:c[1]||(c[1]=f=>x(e).onItemFocus(n.value)),onKeydown:v},{default:S(()=>[K(o.$slots,"default")]),_:3},8,["tabindex","data-orientation","data-active","data-disabled","as","as-child"])]),_:3}))}}),lt=at,st=k({__name:"VisuallyHidden",props:{feature:{type:String,required:!1,default:"focusable"},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){return(t,e)=>(C(),A(x(H),{as:t.as,"as-child":t.asChild,"aria-hidden":t.feature==="focusable"?"true":void 0,"data-hidden":t.feature==="fully-hidden"?"":void 0,tabindex:t.feature==="fully-hidden"?"-1":void 0,style:{position:"absolute",border:0,width:"1px",height:"1px",padding:0,margin:"-1px",overflow:"hidden",clip:"rect(0, 0, 0, 0)",clipPath:"inset(50%)",whiteSpace:"nowrap",wordWrap:"normal",top:"-1px",left:"-1px"}},{default:S(()=>[K(t.$slots,"default")]),_:3},8,["as","as-child","aria-hidden","data-hidden","tabindex"]))}}),nt=st,it=k({inheritAttrs:!1,__name:"VisuallyHiddenInputBubble",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(a){const t=a,{primitiveElement:e,currentElement:l}=Z(),n=g(()=>t.checked??t.value);return $(n,(i,s)=>{if(!l.value)return;const r=l.value,v=window.HTMLInputElement.prototype,c=Object.getOwnPropertyDescriptor(v,"value").set;if(c&&i!==s){const f=new Event("input",{bubbles:!0}),m=new Event("change",{bubbles:!0});c.call(r,i),r.dispatchEvent(f),r.dispatchEvent(m)}}),(i,s)=>(C(),A(nt,V({ref_key:"primitiveElement",ref:e},{...t,...i.$attrs},{as:"input"}),null,16))}}),ce=it,rt=k({inheritAttrs:!1,__name:"VisuallyHiddenInput",props:{name:{type:String,required:!0},value:{type:null,required:!0},checked:{type:Boolean,required:!1,default:void 0},required:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},feature:{type:String,required:!1,default:"fully-hidden"}},setup(a){const t=a,e=g(()=>typeof t.value=="object"&&Array.isArray(t.value)&&t.value.length===0&&t.required),l=g(()=>typeof t.value=="string"||typeof t.value=="number"||typeof t.value=="boolean"||t.value===null||t.value===void 0?[{name:t.name,value:t.value}]:typeof t.value=="object"&&Array.isArray(t.value)?t.value.flatMap((n,i)=>typeof n=="object"?Object.entries(n).map(([s,r])=>({name:`${t.name}[${i}][${s}]`,value:r})):{name:`${t.name}[${i}]`,value:n}):t.value!==null&&typeof t.value=="object"&&!Array.isArray(t.value)?Object.entries(t.value).map(([n,i])=>({name:`${t.name}[${n}]`,value:i})):[]);return(n,i)=>(C(),R(J,null,[ae(" We render single input if it's required "),e.value?(C(),A(ce,V({key:n.name},{...t,...n.$attrs},{name:n.name,value:n.value}),null,16,["name","value"])):(C(!0),R(J,{key:1},Ee(l.value,s=>(C(),A(ce,V({key:s.name},{ref_for:!0},{...t,...n.$attrs},{name:s.name,value:s.value}),null,16,["name","value"]))),128))],2112))}}),ot=rt;const[ct]=le("CheckboxGroupRoot");function L(a){return a==="indeterminate"}function ge(a){return L(a)?"indeterminate":a?"checked":"unchecked"}const[dt,ut]=le("CheckboxRoot");var xt=k({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:[Boolean,String],required:!1},modelValue:{type:[Boolean,String,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,l=t,{forwardRef:n,currentElement:i}=me(),s=ct(null),r=Pe(e,"modelValue",l,{defaultValue:e.defaultValue,passive:e.modelValue===void 0}),v=g(()=>s?.disabled.value||e.disabled),o=g(()=>Q(s?.modelValue.value)?r.value==="indeterminate"?"indeterminate":r.value:re(s.modelValue.value,e.value));function c(){if(Q(s?.modelValue.value))r.value=L(r.value)?!0:!r.value;else{const u=[...s.modelValue.value||[]];if(re(u,e.value)){const b=u.findIndex(B=>Y(B,e.value));u.splice(b,1)}else u.push(e.value);s.modelValue.value=u}}const f=Re(i),m=g(()=>e.id&&i.value?document.querySelector(`[for="${e.id}"]`)?.innerText:void 0);return ut({disabled:v,state:o}),(u,b)=>(C(),A($e(x(s)?.rovingFocus.value?x(lt):x(H)),V(u.$attrs,{id:u.id,ref:x(n),role:"checkbox","as-child":u.asChild,as:u.as,type:u.as==="button"?"button":void 0,"aria-checked":x(L)(o.value)?"mixed":o.value,"aria-required":u.required,"aria-label":u.$attrs["aria-label"]||m.value,"data-state":x(ge)(o.value),"data-disabled":v.value?"":void 0,disabled:v.value,focusable:x(s)?.rovingFocus.value?!v.value:void 0,onKeydown:_e(Se(()=>{},["prevent"]),["enter"]),onClick:c}),{default:S(()=>[K(u.$slots,"default",{modelValue:x(r),state:o.value}),x(f)&&u.name&&!x(s)?(C(),A(x(ot),{key:0,type:"checkbox",checked:!!o.value,name:u.name,value:u.value,disabled:v.value,required:u.required},null,8,["checked","name","value","disabled","required"])):ae("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"]))}}),ft=xt,pt=k({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const{forwardRef:t}=me(),e=dt();return(l,n)=>(C(),A(x(He),{present:l.forceMount||x(L)(x(e).state.value)||x(e).state.value===!0},{default:S(()=>[_(x(H),V({ref:x(t),"data-state":x(ge)(x(e).state.value),"data-disabled":x(e).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":l.asChild,as:l.as},l.$attrs),{default:S(()=>[K(l.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),vt=pt;const mt=qe(["border-gray-2 size-4 shrink-0 cursor-pointer rounded-[3px] border shadow-xs transition-all outline-none","not-disabled:hover:border-gray-1","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-gray-2 focus-visible:ring","data-[state=checked]:border-transparent","data-[state=indeterminate]:border-transparent","not-disabled:hover:data-[state=checked]:border-transparent","not-disabled:hover:data-[state=indeterminate]:border-transparent","data-[invalid=true]:border-danger","data-[invalid=true]:focus-visible:ring-danger","data-[invalid=true]:hover:border-danger","data-[invalid=true]:data-[state=checked]:border-danger data-[invalid=true]:data-[state=checked]:bg-danger","data-[invalid=true]:data-[state=checked]:hover:bg-danger data-[invalid=true]:data-[state=checked]:hover:border-danger","data-[invalid=true]:data-[state=indeterminate]:border-danger data-[invalid=true]:data-[state=indeterminate]:bg-danger","data-[invalid=true]:data-[state=indeterminate]:hover:bg-danger data-[invalid=true]:data-[state=indeterminate]:hover:border-danger"],{variants:{color:{primary:["data-[state=checked]:bg-primary data-[state=checked]:border-primary","data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary","not-disabled:hover:data-[state=checked]:bg-primary-dark not-disabled:hover:data-[state=checked]:border-primary-dark","not-disabled:hover:data-[state=indeterminate]:bg-primary-dark not-disabled:hover:data-[state=indeterminate]:border-primary-dark","data-[state=checked]:focus-visible:ring-primary","data-[state=indeterminate]:focus-visible:ring-primary"],secondary:["data-[state=checked]:bg-gray-200","data-[state=checked]:border-gray-200","data-[state=indeterminate]:bg-gray-200","data-[state=indeterminate]:border-gray-200","not-disabled:hover:data-[state=checked]:bg-gray-300","not-disabled:hover:data-[state=checked]:border-gray-300","not-disabled:hover:data-[state=indeterminate]:bg-gray-300","not-disabled:hover:data-[state=indeterminate]:border-gray-300","data-[state=checked]:focus-visible:ring-gray-200","data-[state=indeterminate]:focus-visible:ring-gray-200"],danger:["data-[state=checked]:bg-danger data-[state=checked]:border-danger","data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger","not-disabled:hover:data-[state=checked]:border-danger","not-disabled:hover:data-[state=indeterminate]:border-danger","data-[state=checked]:focus-visible:ring-danger","data-[state=indeterminate]:focus-visible:ring-danger"],success:["data-[state=checked]:bg-success data-[state=checked]:border-success","data-[state=indeterminate]:bg-success data-[state=indeterminate]:border-success","data-[state=checked]:focus-visible:ring-success","data-[state=indeterminate]:focus-visible:ring-success"],warning:["data-[state=checked]:bg-warning data-[state=checked]:border-warning","data-[state=indeterminate]:bg-warning data-[state=indeterminate]:border-warning","data-[state=checked]:focus-visible:ring-warning","data-[state=indeterminate]:focus-visible:ring-warning"]}},defaultVariants:{color:"primary"}}),D=k({__name:"Checkbox",props:Ve({color:{default:"primary"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},class:{default:""},defaultValue:{default:!1}},{modelValue:{default:void 0},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const t=a,e=Ie(a,"modelValue"),l=g(()=>e.value??t.defaultValue??!1),n=g(()=>Ne(mt({color:t.color}),t.class));return(i,s)=>(C(),A(x(ft),V(i.$attrs,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r),"default-value":a.defaultValue,disabled:a.disabled,"data-invalid":a.invalid,class:n.value}),{default:S(()=>[_(x(vt),{class:"flex items-center justify-center rounded-xs text-white"},{default:S(()=>[l.value==="indeterminate"?(C(),A(x(Oe),{key:0,class:"h-[80%] w-[80%]","stroke-width":"3"})):l.value===!0?(C(),A(x(Fe),{key:1,class:"h-[80%] w-[80%]","stroke-width":"3"})):ae("",!0)]),_:1})]),_:1},16,["modelValue","default-value","disabled","data-invalid","class"]))}});D.__docgenInfo={exportName:"default",displayName:"Checkbox",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"'primary'"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"defaultValue",required:!1,type:{name:"TSIndexedAccessType"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Checkbox.vue"]};const gt={class:"flex flex-col gap-6"},ht={class:"flex flex-col gap-4"},Ct={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},bt={class:"flex items-center gap-3"},yt={class:"flex flex-col"},kt={class:"text-xs text-gray-500"},Bt={class:"flex items-center gap-3"},wt={class:"flex flex-col"},Dt={class:"text-xs text-gray-500"},At={class:"flex items-center gap-3"},Et={class:"flex flex-col"},_t={class:"text-xs text-gray-500"},he=k({__name:"Controlled.stories",setup(a){const t=w(!1),e=w(!0),l=w("indeterminate"),n=()=>{t.value=!t.value,e.value=!e.value,l.value=l.value==="indeterminate"?!1:"indeterminate"};return(i,s)=>(C(),R("div",gt,[d("div",ht,[s[6]||(s[6]=d("div",{class:"flex flex-col gap-2"},[d("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),d("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 상태를 제어합니다. 체크박스를 클릭하면 상태가 변경되고, 부모에서 상태를 변경하면 체크박스가 즉시 반영됩니다. ")],-1)),d("div",Ct,[d("div",bt,[_(D,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r)},null,8,["modelValue"]),d("div",yt,[s[3]||(s[3]=d("span",{class:"text-sm text-gray-700"},"체크박스 1",-1)),d("span",kt,"현재 상태: "+G(String(t.value)),1)])]),d("div",Bt,[_(D,{modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=r=>e.value=r)},null,8,["modelValue"]),d("div",wt,[s[4]||(s[4]=d("span",{class:"text-sm text-gray-700"},"체크박스 2",-1)),d("span",Dt,"현재 상태: "+G(String(e.value)),1)])]),d("div",At,[_(D,{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=r=>l.value=r)},null,8,["modelValue"]),d("div",Et,[s[5]||(s[5]=d("span",{class:"text-sm text-gray-700"},"체크박스 3 (Indeterminate)",-1)),d("span",_t,"현재 상태: "+G(String(l.value)),1)])])]),d("div",{class:"flex gap-2"},[d("button",{class:"bg-primary hover:bg-primary-dark rounded px-3 py-1.5 text-xs font-medium text-white transition-colors",onClick:n}," 부모에서 상태 변경 ")])])]))}});he.__docgenInfo={exportName:"default",displayName:"Controlled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Controlled.stories.vue"]};const St={class:"flex flex-col gap-6"},$t={class:"flex flex-col gap-4"},Vt={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},It={class:"flex items-center gap-3"},zt={class:"flex items-center gap-3"},Nt={class:"flex items-center gap-3"},Ce=k({__name:"Uncontrolled.stories",setup(a){return(t,e)=>(C(),R("div",St,[d("div",$t,[e[3]||(e[3]=d("div",{class:"flex flex-col gap-2"},[d("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),d("p",{class:"text-xs text-gray-500"}," 각 체크박스가 자체적으로 상태를 관리합니다. 부모는 초기값(`defaultValue`)만 설정하며, 이후 상태 변경은 컴포넌트 내부에서 처리됩니다. ")],-1)),d("div",Vt,[d("div",It,[_(D,{"default-value":!1}),e[0]||(e[0]=d("div",{class:"flex flex-col"},[d("span",{class:"text-sm text-gray-700"},"체크박스 1"),d("span",{class:"text-xs text-gray-500"},"초기값: false (자체 상태 관리)")],-1))]),d("div",zt,[_(D,{"default-value":!0}),e[1]||(e[1]=d("div",{class:"flex flex-col"},[d("span",{class:"text-sm text-gray-700"},"체크박스 2"),d("span",{class:"text-xs text-gray-500"},"초기값: true (자체 상태 관리)")],-1))]),d("div",Nt,[_(D,{"default-value":"indeterminate"}),e[2]||(e[2]=d("div",{class:"flex flex-col"},[d("span",{class:"text-sm text-gray-700"},"체크박스 3"),d("span",{class:"text-xs text-gray-500"},"초기값: indeterminate (자체 상태 관리)")],-1))])]),e[4]||(e[4]=d("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[d("p",{class:"text-xs text-blue-800"},[d("strong",null,"참고:"),ze(" 비제어 컴포넌트는 자체적으로 상태를 관리하므로, 부모 컴포넌트에서 상태를 직접 변경할 수 없습니다. 폼 제출 시에는 ref를 통해 현재 값을 가져올 수 있습니다. ")])],-1))])]))}});Ce.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Uncontrolled.stories.vue"]};const Tt={title:"Shared/UI/Checkbox",component:D,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\n체크박스 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다. 다양한 색상 및 상태를 지원합니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Checkbox defaultValue={true} color="primary" />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultValue:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값 (비제어 컴포넌트)",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}}}},O={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 위험한 작업에 사용, `success`는 성공 상태에 사용).\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultValue**: 체크박스의 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}},args:{color:"primary",invalid:!1,disabled:!1,defaultValue:!1},render:a=>({components:{Checkbox:D},setup(){return{args:a}},template:'<Checkbox v-bind="args" />'})},M={render:()=>({components:{Checkbox:D},template:`
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
    `})},T={render:()=>({components:{Checkbox:D},template:`
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
    `})},U={render:()=>({components:{Checkbox:D},template:`
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
    `})},j={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:he},template:"<ControlledExample />"})},P={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{UncontrolledExample:Ce},template:"<UncontrolledExample />"})};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};const Ut=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{M as Colors,j as Controlled,O as Playground,U as Sizes,T as States,P as Uncontrolled,Ut as __namedExportsOrder,Tt as default};
