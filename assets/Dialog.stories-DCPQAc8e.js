import{e as B,r as D,B as he,G as be,H as De,d as h,J as Me,h as y,u as s,i as b,o as f,w as g,m as v,K as Se,C as pe,L as le,q as E,j as ve,M as Ce,N as _e,O as Ae,P as ke,f as F,n as z,Q as se,X as $e,c as de}from"./iframe-g1OyoVNp.js";import{u as ce,a as Be}from"./useForwardPropsEmits-D2o94REE.js";import{d as He,t as Ke,i as we,e as me,f as Ve,g as Le,a as je,c as ze,u as x,P as S,h as We,b as xe}from"./Primitive-Crv9Vuff.js";import{r as W}from"./index-Cbbk3MOw.js";import{u as ue}from"./useForwardProps-CBu_UAql.js";import{u as re}from"./useId-BXecDKyx.js";import{b as Ue,_ as R}from"./Button-Z6al3wqi.js";import{g as T}from"./getActiveElement-FUKBWQwh.js";import{D as Xe,T as Ye}from"./Teleport-CzGtg8n4.js";import{i as Ge}from"./useDirection-DLWXcg7w.js";import{_ as Je}from"./ScrollArea-DZJJMe_k.js";import"./preload-helper-PPVm8Dsz.js";function te(e){if(e===null||typeof e!="object")return!1;const t=Object.getPrototypeOf(e);return t!==null&&t!==Object.prototype&&Object.getPrototypeOf(t)!==null||Symbol.iterator in e?!1:Symbol.toStringTag in e?Object.prototype.toString.call(e)==="[object Module]":!0}function ie(e,t,n=".",a){if(!te(t))return ie(e,{},n,a);const o=Object.assign({},t);for(const r in e){if(r==="__proto__"||r==="constructor")continue;const i=e[r];i!=null&&(a&&a(o,r,i,n)||(Array.isArray(i)&&Array.isArray(o[r])?o[r]=[...i,...o[r]]:te(i)&&te(o[r])?o[r]=ie(i,o[r],(n?`${n}.`:"")+r.toString(),a):o[r]=i))}return o}function Qe(e){return(...t)=>t.reduce((n,a)=>ie(n,a,"",e),{})}const Ze=Qe(),et=He(()=>{const e=D(new Map),t=D(),n=B(()=>{for(const i of e.value.values())if(i)return!0;return!1}),a=Ge({scrollBody:D(!0)});let o=null;const r=()=>{document.body.style.paddingRight="",document.body.style.marginRight="",document.body.style.pointerEvents="",document.documentElement.style.removeProperty("--scrollbar-width"),document.body.style.overflow=t.value??"",me&&o?.(),t.value=void 0};return he(n,(i,p)=>{if(!we)return;if(!i){p&&r();return}t.value===void 0&&(t.value=document.body.style.overflow);const c=window.innerWidth-document.documentElement.clientWidth,u={padding:c,margin:0},d=a.scrollBody?.value?typeof a.scrollBody.value=="object"?Ze({padding:a.scrollBody.value.padding===!0?c:a.scrollBody.value.padding,margin:a.scrollBody.value.margin===!0?c:a.scrollBody.value.margin},u):u:{padding:0,margin:0};c>0&&(document.body.style.paddingRight=typeof d.padding=="number"?`${d.padding}px`:String(d.padding),document.body.style.marginRight=typeof d.margin=="number"?`${d.margin}px`:String(d.margin),document.documentElement.style.setProperty("--scrollbar-width",`${c}px`),document.body.style.overflow="hidden"),me&&(o=Ve(document,"touchmove",l=>nt(l),{passive:!1})),be(()=>{document.body.style.pointerEvents="none",document.body.style.overflow="hidden"})},{immediate:!0,flush:"sync"}),e});function tt(e){const t=Math.random().toString(36).substring(2,7),n=et();n.value.set(t,e);const a=B({get:()=>n.value.get(t)??!1,set:o=>n.value.set(t,o)});return Ke(()=>{n.value.delete(t)}),a}function Oe(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!(n instanceof Element)||n.tagName==="BODY"?!1:Oe(n)}}function nt(e){const t=e||window.event,n=t.target;return n instanceof Element&&Oe(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.cancelable&&t.preventDefault(),!1)}var at=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},M=new WeakMap,X=new WeakMap,Y={},ne=0,qe=function(e){return e&&(e.host||qe(e.parentNode))},ot=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=qe(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},st=function(e,t,n,a){var o=ot(t,Array.isArray(e)?e:[e]);Y[n]||(Y[n]=new WeakMap);var r=Y[n],i=[],p=new Set,c=new Set(o),u=function(l){!l||p.has(l)||(p.add(l),u(l.parentNode))};o.forEach(u);var d=function(l){!l||c.has(l)||Array.prototype.forEach.call(l.children,function(m){if(p.has(m))d(m);else try{var k=m.getAttribute(a),C=k!==null&&k!=="false",_=(M.get(m)||0)+1,w=(r.get(m)||0)+1;M.set(m,_),r.set(m,w),i.push(m),_===1&&C&&X.set(m,!0),w===1&&m.setAttribute(n,"true"),C||m.setAttribute(a,"true")}catch(q){console.error("aria-hidden: cannot operate on ",m,q)}})};return d(t),p.clear(),ne++,function(){i.forEach(function(l){var m=M.get(l)-1,k=r.get(l)-1;M.set(l,m),r.set(l,k),m||(X.has(l)||l.removeAttribute(a),X.delete(l)),k||l.removeAttribute(n)}),ne--,ne||(M=new WeakMap,M=new WeakMap,X=new WeakMap,Y={})}},rt=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),o=at(e);return o?(a.push.apply(a,Array.from(o.querySelectorAll("[aria-live], script"))),st(a,o,n,"aria-hidden")):function(){return null}};function it(e){let t;he(()=>Le(e),n=>{n?t=rt(n):t&&t()}),De(()=>{t&&t()})}const[O,lt]=ze("DialogRoot");var dt=h({inheritAttrs:!1,__name:"DialogRoot",props:{open:{type:Boolean,required:!1,default:void 0},defaultOpen:{type:Boolean,required:!1,default:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(e,{emit:t}){const n=e,o=je(n,"open",t,{defaultValue:n.defaultOpen,passive:n.open===void 0}),r=D(),i=D(),{modal:p}=Me(n);return lt({open:o,modal:p,openModal:()=>{o.value=!0},onOpenChange:c=>{o.value=c},onOpenToggle:()=>{o.value=!o.value},contentId:"",titleId:"",descriptionId:"",triggerElement:r,contentElement:i}),(c,u)=>y(c.$slots,"default",{open:s(o),close:()=>o.value=!1})}}),ct=dt,ut=h({__name:"DialogClose",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e;x();const n=O();return(a,o)=>(f(),b(s(S),v(t,{type:a.as==="button"?"button":void 0,onClick:o[0]||(o[0]=r=>s(n).onOpenChange(!1))}),{default:g(()=>[y(a.$slots,"default")]),_:3},16,["type"]))}}),pt=ut;const mt=We(()=>D([]));function gt(){const e=mt();return{add(t){const n=e.value[0];t!==n&&n?.pause(),e.value=ge(e.value,t),e.value.unshift(t)},remove(t){e.value=ge(e.value,t),e.value[0]?.resume()}}}function ge(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function ft(e){return e.filter(t=>t.tagName!=="A")}const ae="focusScope.autoFocusOnMount",oe="focusScope.autoFocusOnUnmount",fe={bubbles:!1,cancelable:!0};function yt(e,{select:t=!1}={}){const n=T();for(const a of e)if(P(a,{select:t}),T()!==n)return!0}function ht(e){const t=Pe(e),n=ye(t,e),a=ye(t.reverse(),e);return[n,a]}function Pe(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const o=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||o?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ye(e,t){for(const n of e)if(!bt(n,{upTo:t}))return n}function bt(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Dt(e){return e instanceof HTMLInputElement&&"select"in e}function P(e,{select:t=!1}={}){if(e&&e.focus){const n=T();e.focus({preventScroll:!0}),e!==n&&Dt(e)&&t&&e.select()}}var vt=h({__name:"FocusScope",props:{loop:{type:Boolean,required:!1,default:!1},trapped:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["mountAutoFocus","unmountAutoFocus"],setup(e,{emit:t}){const n=e,a=t,{currentRef:o,currentElement:r}=x(),i=D(null),p=gt(),c=Se({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}});pe(d=>{if(!we)return;const l=r.value;if(!n.trapped)return;function m(w){if(c.paused||!l)return;const q=w.target;l.contains(q)?i.value=q:P(i.value,{select:!0})}function k(w){if(c.paused||!l)return;const q=w.relatedTarget;q!==null&&(l.contains(q)||P(i.value,{select:!0}))}function C(w){l.contains(i.value)||P(l)}document.addEventListener("focusin",m),document.addEventListener("focusout",k);const _=new MutationObserver(C);l&&_.observe(l,{childList:!0,subtree:!0}),d(()=>{document.removeEventListener("focusin",m),document.removeEventListener("focusout",k),_.disconnect()})}),pe(async d=>{const l=r.value;if(await be(),!l)return;p.add(c);const m=T();if(!l.contains(m)){const C=new CustomEvent(ae,fe);l.addEventListener(ae,_=>a("mountAutoFocus",_)),l.dispatchEvent(C),C.defaultPrevented||(yt(ft(Pe(l)),{select:!0}),T()===m&&P(l))}d(()=>{l.removeEventListener(ae,w=>a("mountAutoFocus",w));const C=new CustomEvent(oe,fe),_=w=>{a("unmountAutoFocus",w)};l.addEventListener(oe,_),l.dispatchEvent(C),setTimeout(()=>{C.defaultPrevented||P(m??document.body,{select:!0}),l.removeEventListener(oe,_),p.remove(c)},0)})});function u(d){if(!n.loop&&!n.trapped||c.paused)return;const l=d.key==="Tab"&&!d.altKey&&!d.ctrlKey&&!d.metaKey,m=T();if(l&&m){const k=d.currentTarget,[C,_]=ht(k);C&&_?!d.shiftKey&&m===_?(d.preventDefault(),n.loop&&P(C,{select:!0})):d.shiftKey&&m===C&&(d.preventDefault(),n.loop&&P(_,{select:!0})):m===k&&d.preventDefault()}}return(d,l)=>(f(),b(s(S),{ref_key:"currentRef",ref:o,tabindex:"-1","as-child":d.asChild,as:d.as,onKeydown:u},{default:g(()=>[y(d.$slots,"default")]),_:3},8,["as-child","as"]))}}),Ct=vt;function _t(e){return e?"open":"closed"}var kt=h({__name:"DialogContentImpl",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,a=t,o=O(),{forwardRef:r,currentElement:i}=x();return o.titleId||=re(void 0,"reka-dialog-title"),o.descriptionId||=re(void 0,"reka-dialog-description"),le(()=>{o.contentElement=i,T()!==document.body&&(o.triggerElement.value=T())}),(p,c)=>(f(),b(s(Ct),{"as-child":"",loop:"",trapped:n.trapFocus,onMountAutoFocus:c[5]||(c[5]=u=>a("openAutoFocus",u)),onUnmountAutoFocus:c[6]||(c[6]=u=>a("closeAutoFocus",u))},{default:g(()=>[E(s(Xe),v({id:s(o).contentId,ref:s(r),as:p.as,"as-child":p.asChild,"disable-outside-pointer-events":p.disableOutsidePointerEvents,role:"dialog","aria-describedby":s(o).descriptionId,"aria-labelledby":s(o).titleId,"data-state":s(_t)(s(o).open.value)},p.$attrs,{onDismiss:c[0]||(c[0]=u=>s(o).onOpenChange(!1)),onEscapeKeyDown:c[1]||(c[1]=u=>a("escapeKeyDown",u)),onFocusOutside:c[2]||(c[2]=u=>a("focusOutside",u)),onInteractOutside:c[3]||(c[3]=u=>a("interactOutside",u)),onPointerDownOutside:c[4]||(c[4]=u=>a("pointerDownOutside",u))}),{default:g(()=>[y(p.$slots,"default")]),_:3},16,["id","as","as-child","disable-outside-pointer-events","aria-describedby","aria-labelledby","data-state"])]),_:3},8,["trapped"]))}}),Ee=kt,Bt=h({__name:"DialogContentModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,a=t,o=O(),r=ce(a),{forwardRef:i,currentElement:p}=x();return it(p),(c,u)=>(f(),b(Ee,v({...n,...s(r)},{ref:s(i),"trap-focus":s(o).open.value,"disable-outside-pointer-events":!0,onCloseAutoFocus:u[0]||(u[0]=d=>{d.defaultPrevented||(d.preventDefault(),s(o).triggerElement.value?.focus())}),onPointerDownOutside:u[1]||(u[1]=d=>{const l=d.detail.originalEvent,m=l.button===0&&l.ctrlKey===!0;(l.button===2||m)&&d.preventDefault()}),onFocusOutside:u[2]||(u[2]=d=>{d.preventDefault()})}),{default:g(()=>[y(c.$slots,"default")]),_:3},16,["trap-focus"]))}}),wt=Bt,xt=h({__name:"DialogContentNonModal",props:{forceMount:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,o=ce(t);x();const r=O(),i=D(!1),p=D(!1);return(c,u)=>(f(),b(Ee,v({...n,...s(o)},{"trap-focus":!1,"disable-outside-pointer-events":!1,onCloseAutoFocus:u[0]||(u[0]=d=>{d.defaultPrevented||(i.value||s(r).triggerElement.value?.focus(),d.preventDefault()),i.value=!1,p.value=!1}),onInteractOutside:u[1]||(u[1]=d=>{d.defaultPrevented||(i.value=!0,d.detail.originalEvent.type==="pointerdown"&&(p.value=!0));const l=d.target;s(r).triggerElement.value?.contains(l)&&d.preventDefault(),d.detail.originalEvent.type==="focusin"&&p.value&&d.preventDefault()})}),{default:g(()=>[y(c.$slots,"default")]),_:3},16))}}),Ot=xt,qt=h({__name:"DialogContent",props:{forceMount:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","openAutoFocus","closeAutoFocus"],setup(e,{emit:t}){const n=e,a=t,o=O(),r=ce(a),{forwardRef:i}=x();return(p,c)=>(f(),b(s(xe),{present:p.forceMount||s(o).open.value},{default:g(()=>[s(o).modal.value?(f(),b(wt,v({key:0,ref:s(i)},{...n,...s(r),...p.$attrs}),{default:g(()=>[y(p.$slots,"default")]),_:3},16)):(f(),b(Ot,v({key:1,ref:s(i)},{...n,...s(r),...p.$attrs}),{default:g(()=>[y(p.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Pt=qt,Et=h({__name:"DialogDescription",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"p"}},setup(e){const t=e;x();const n=O();return(a,o)=>(f(),b(s(S),v(t,{id:s(n).descriptionId}),{default:g(()=>[y(a.$slots,"default")]),_:3},16,["id"]))}}),Tt=Et,Ft=h({__name:"DialogOverlayImpl",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=O();return tt(!0),x(),(n,a)=>(f(),b(s(S),{as:n.as,"as-child":n.asChild,"data-state":s(t).open.value?"open":"closed",style:{"pointer-events":"auto"}},{default:g(()=>[y(n.$slots,"default")]),_:3},8,["as","as-child","data-state"]))}}),Rt=Ft,Nt=h({__name:"DialogOverlay",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const t=O(),{forwardRef:n}=x();return(a,o)=>s(t)?.modal.value?(f(),b(s(xe),{key:0,present:a.forceMount||s(t).open.value},{default:g(()=>[E(Rt,v(a.$attrs,{ref:s(n),as:a.as,"as-child":a.asChild}),{default:g(()=>[y(a.$slots,"default")]),_:3},16,["as","as-child"])]),_:3},8,["present"])):ve("v-if",!0)}}),It=Nt,Mt=h({__name:"DialogPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const t=e;return(n,a)=>(f(),b(s(Ye),Ce(_e(t)),{default:g(()=>[y(n.$slots,"default")]),_:3},16))}}),St=Mt,At=h({__name:"DialogTitle",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"h2"}},setup(e){const t=e,n=O();return x(),(a,o)=>(f(),b(s(S),v(t,{id:s(n).titleId}),{default:g(()=>[y(a.$slots,"default")]),_:3},16,["id"]))}}),$t=At,Ht=h({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const t=e,n=O(),{forwardRef:a,currentElement:o}=x();return n.contentId||=re(void 0,"reka-dialog-content"),le(()=>{n.triggerElement.value=o.value}),(r,i)=>(f(),b(s(S),v(t,{ref:s(a),type:r.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":s(n).open.value||!1,"aria-controls":s(n).open.value?s(n).contentId:void 0,"data-state":s(n).open.value?"open":"closed",onClick:s(n).onOpenToggle}),{default:g(()=>[y(r.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),Kt=Ht;const Vt=e=>{const t=e,n=Symbol(t);return[r=>(ke(n,r),r),r=>{const i=Ae(n,r);if(!i)throw new Error(`Injection \`${n.toString()}\` not found. Component must be used within ${t}
        }`);return i}]},[Lt,Te]=Vt("DialogContext"),jt=Symbol("DialogBodyContext"),Fe=e=>ke(jt,e);Fe.__docgenInfo={exportName:"provideDialogBodyContext",displayName:"provideDialogBodyContext",type:2,props:[{name:"bodyElement",global:!1,description:"",tags:[],required:!0,type:"Ref<HTMLDivElement, HTMLDivElement>",declarations:[],schema:"Ref<HTMLDivElement, HTMLDivElement>"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/context.ts"};const N=h({__name:"Dialog",props:{loading:{type:Boolean,default:!1},dismissMode:{default:"none"},open:{type:Boolean},defaultOpen:{type:Boolean},modal:{type:Boolean}},emits:["update:open"],setup(e,{emit:t}){const n=e,a=t,o=W(n,"loading","dismissMode"),r=Be(o,a),i=B(()=>n.loading),p=B(()=>n.dismissMode);return Lt({loading:i,dismissMode:p}),(c,u)=>(f(),b(s(ct),Ce(_e(s(r))),{default:g(()=>[y(c.$slots,"default")]),_:3},16))}});N.__docgenInfo={exportName:"default",displayName:"Dialog",type:1,props:[{name:"loading",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"dismissMode",global:!1,description:"",tags:[],required:!1,type:'"none" | "dismiss"',declarations:[],schema:{kind:"enum",type:'"none" | "dismiss"',schema:['"none"','"dismiss"']},default:'"none"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"open",global:!1,description:"The controlled open state of the dialog. Can be binded as `v-model:open`.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",global:!1,description:"The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",global:!1,description:"The modality of the dialog When set to `true`, <br>\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"loading",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"dismissMode",type:'"none" | "dismiss"',description:"",declarations:[],schema:{kind:"enum",type:'"none" | "dismiss"',schema:['"none"','"dismiss"']}},{name:"open",type:"boolean",description:"The controlled open state of the dialog. Can be binded as `v-model:open`.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",type:"boolean",description:"The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",type:"boolean",description:"The modality of the dialog When set to `true`, <br>\ninteraction with outside elements will be disabled and only dialog content will be visible to screen readers.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/Dialog.vue"};const Re=h({__name:"DialogTrigger",props:{class:{},asChild:{type:Boolean},as:{},variant:{default:"filled"},color:{default:"primary"},size:{default:"md"}},setup(e){const t=e,n=W(t,"variant","color","size"),a=ue(n),o=B(()=>F(Ue({variant:t.variant,color:t.color,size:t.size}),t.class));return(r,i)=>(f(),b(s(Kt),v(s(a),{class:o.value}),{default:g(()=>[y(r.$slots,"default")]),_:3},16,["class"]))}});Re.__docgenInfo={exportName:"default",displayName:"DialogTrigger",type:1,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"text" | "filled" | "outlined"',declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']},default:'"filled"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']},default:'"md"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']},default:'"primary"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"variant",type:'"text" | "filled" | "outlined"',description:"",declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']}},{name:"size",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',description:"",declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']}},{name:"color",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogTrigger.vue"};const Ne=h({__name:"DialogPortal",setup(e){return(t,n)=>(f(),b(s(St),null,{default:g(()=>[y(t.$slots,"default")]),_:3}))}});Ne.__docgenInfo={exportName:"default",displayName:"DialogPortal",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogPortal.vue"};const Ie=h({__name:"DialogOverlay",props:{class:{}},setup(e){const t=e,n=B(()=>F("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 z-overlay fixed inset-0 bg-black/50",t.class));return(a,o)=>(f(),b(s(It),{class:z(n.value)},null,8,["class"]))}});Ie.__docgenInfo={exportName:"default",displayName:"DialogOverlay",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogOverlay.vue"};const I=h({__name:"DialogClose",setup(e){return(t,n)=>(f(),b(s(pt),{"as-child":""},{default:g(()=>[y(t.$slots,"default")]),_:3}))}});I.__docgenInfo={exportName:"default",displayName:"DialogClose",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogClose.vue"};const A=h({inheritAttrs:!1,__name:"DialogContent",props:{isCloseButton:{type:Boolean,default:!0},class:{}},setup(e){const t=e,{loading:n,dismissMode:a}=Te();se("overlay-ref"),se("close-ref");const o=i=>{if(n.value){i.preventDefault();return}switch(a.value){case"none":i.preventDefault();return;case"dismiss":return;default:i.preventDefault();return}},r=B(()=>F("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95","fixed top-[50%] left-[50%] flex translate-x-[-50%] translate-y-[-50%]","z-overlay flex-col overflow-hidden bg-white shadow-lg duration-200","rounded border-0 outline-none","max-h-[calc(100%-2rem)] max-w-[calc(100%-2rem)]",t.class));return(i,p)=>(f(),b(Ne,null,{default:g(()=>[E(Ie,{ref:"overlay-ref"},null,512),E(s(Pt),v({class:r.value},i.$attrs,{onEscapeKeyDown:o,onInteractOutside:o}),{default:g(()=>[y(i.$slots,"default"),e.isCloseButton?(f(),b(I,{key:0,ref:"close-ref"},{default:g(()=>[E(R,{variant:"text",color:"secondary",size:"icon-md",class:"z-dialog absolute top-3 right-3 text-gray-500 hover:text-gray-700"},{default:g(()=>[E(s($e),{class:"size-5"})]),_:1})]),_:1},512)):ve("",!0)]),_:3},16,["class"])]),_:3}))}});A.__docgenInfo={exportName:"default",displayName:"DialogContent",type:1,props:[{name:"isCloseButton",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"isCloseButton",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogContent.vue"};const $=h({__name:"DialogHeader",props:{class:{}},setup(e){const t=e,n=B(()=>F("z-dialog relative flex flex-col gap-2 border-b border-gray-200 bg-white px-6 py-5",t.class));return(a,o)=>(f(),de("div",{class:z(n.value)},[y(a.$slots,"default")],2))}});$.__docgenInfo={exportName:"default",displayName:"DialogHeader",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogHeader.vue"};const zt={ref:"body-element",class:"grow overflow-hidden pt-6"},H=h({inheritAttrs:!1,__name:"DialogBody",props:{class:{default:""},showVertical:{type:Boolean,default:!0},showHorizontal:{type:Boolean,default:!0}},setup(e){const t=e,n=W(t,"class"),a=ue(n),o=se("body-element");Fe({bodyElement:o});const r=B(()=>F("h-full pr-6 pb-6 pl-6",t.class));return(i,p)=>(f(),de("div",zt,[E(Je,v({class:r.value},{...i.$attrs,...s(a)}),{default:g(()=>[y(i.$slots,"default")]),_:3},16,["class"])],512))}});H.__docgenInfo={exportName:"default",displayName:"DialogBody",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"showVertical",global:!1,description:"세로 스크롤바 표시 여부",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"showHorizontal",global:!1,description:"가로 스크롤바 표시 여부",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"true"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"showVertical",type:"boolean",description:"세로 스크롤바 표시 여부",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"showHorizontal",type:"boolean",description:"가로 스크롤바 표시 여부",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogBody.vue"};const K=h({__name:"DialogFooter",props:{class:{}},setup(e){const t=e,n=B(()=>F("z-dialog relative flex shrink-0 items-center justify-end gap-3 border-t border-gray-200 bg-gray-50/50 px-6 py-4",t.class));return(a,o)=>(f(),de("div",{class:z(n.value)},[y(a.$slots,"default")],2))}});K.__docgenInfo={exportName:"default",displayName:"DialogFooter",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogFooter.vue"};const V=h({__name:"DialogTitle",props:{class:{}},setup(e){const t=e,n=B(()=>F("text-lg font-bold text-slate-800",t.class));return(a,o)=>(f(),b(s($t),{class:z(n.value)},{default:g(()=>[y(a.$slots,"default")]),_:3},8,["class"]))}});V.__docgenInfo={exportName:"default",displayName:"DialogTitle",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogTitle.vue"};const U=h({__name:"DialogDescription",props:{class:{}},setup(e){const t=e,n=B(()=>F("text-sm text-gray-500",t.class));return(a,o)=>(f(),b(s(Tt),{class:z(n.value)},{default:g(()=>[y(a.$slots,"default")]),_:3},8,["class"]))}});U.__docgenInfo={exportName:"default",displayName:"DialogDescription",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogDescription.vue"};const L=h({inheritAttrs:!1,__name:"DialogCancelButton",props:{variant:{default:"filled"},color:{default:"secondary"},size:{default:"md"},type:{},disabled:{type:Boolean},loading:{type:Boolean},class:{}},setup(e){const n=W(e,"variant","color","size"),a=ue(n);return(o,r)=>(f(),b(I,null,{default:g(()=>[E(R,v({...o.$attrs,...s(a)},{variant:e.variant,color:e.color,size:e.size}),{default:g(()=>[y(o.$slots,"default")]),_:3},16,["variant","color","size"])]),_:3}))}});L.__docgenInfo={exportName:"default",displayName:"DialogCancelButton",type:1,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"text" | "filled" | "outlined"',declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']},default:'"filled"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']},default:'"md"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']},default:'"secondary"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"type",global:!1,description:"",tags:[],required:!1,type:'"reset" | "submit" | "button"',declarations:[],schema:{kind:"enum",type:'"reset" | "submit" | "button"',schema:['"reset"','"submit"','"button"']}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"loading",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"variant",type:'"text" | "filled" | "outlined"',description:"",declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']}},{name:"size",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',description:"",declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']}},{name:"color",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"type",type:'"reset" | "submit" | "button"',description:"",declarations:[],schema:{kind:"enum",type:'"reset" | "submit" | "button"',schema:['"reset"','"submit"','"button"']}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"loading",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogCancelButton.vue"};function Wt(){const e=D(!1),t=Ut();return{loading:e,startLoading:async a=>{try{return e.value=!0,await a}finally{t.value&&(e.value=!1)}}}}function Ut(){const e=D(!1);return le(()=>{e.value=!0}),De(()=>{e.value=!1}),e}const j=h({__name:"DialogConfirmButton",props:{variant:{default:"filled"},color:{default:"primary"},size:{default:"md"},type:{},disabled:{type:Boolean},loading:{type:Boolean,default:!1},class:{}},emits:["click"],setup(e,{emit:t}){const n=e,a=t,o=W(n,"variant","color","size","loading"),r=Be(o,a),{loading:i}=Te(),{loading:p,startLoading:c}=Wt(),u=B(()=>p.value||n.loading||i.value),d=async l=>{await c(Promise.resolve(a("click",l)))};return(l,m)=>(f(),b(R,v(s(r),{variant:e.variant,color:e.color,size:e.size,loading:u.value,onClick:d}),{default:g(()=>[y(l.$slots,"default")]),_:3},16,["variant","color","size","loading"]))}});j.__docgenInfo={exportName:"default",displayName:"DialogConfirmButton",type:1,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"text" | "filled" | "outlined"',declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']},default:'"filled"'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']},default:'"md"'},{name:"loading",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']},default:'"primary"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"type",global:!1,description:"",tags:[],required:!1,type:'"reset" | "submit" | "button"',declarations:[],schema:{kind:"enum",type:'"reset" | "submit" | "button"',schema:['"reset"','"submit"','"button"']}},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"click",description:"",tags:[],type:"[event: MouseEvent]",signature:'(event: "click", event: MouseEvent): void',declarations:[],schema:[{kind:"object",type:"MouseEvent"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"variant",type:'"text" | "filled" | "outlined"',description:"",declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']}},{name:"size",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',description:"",declarations:[],schema:{kind:"enum",type:'"sm" | "xs" | "md" | "lg" | "icon-md" | "icon-sm"',schema:['"sm"','"xs"','"md"','"lg"','"icon-md"','"icon-sm"']}},{name:"loading",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"color",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "deepblue"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"deepblue"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"type",type:'"reset" | "submit" | "button"',description:"",declarations:[],schema:{kind:"enum",type:'"reset" | "submit" | "button"',schema:['"reset"','"submit"','"button"']}},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogConfirmButton.vue"};const rn={title:"Shared/UI/Dialog",component:N,parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
Reka UI의 Dialog를 기반으로 하며, Vue 3 Composition API와 함께 사용할 수 있도록 설계되었습니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`DialogHeader\`, \`DialogBody\`, \`DialogFooter\`를 통한 구조화된 레이아웃
- **로딩 상태**: \`loading\` prop을 통한 로딩 상태 관리
- **닫기 모드**: \`dismissMode\` prop을 통한 닫기 동작 제어 (none/dismiss)
- **확인/취소 버튼**: \`DialogConfirmButton\`, \`DialogCancelButton\`을 통한 편리한 버튼 제공
- **스크롤 가능한 바디**: \`DialogBody\`는 자동으로 스크롤 영역을 제공

## 사용 예시

\`\`\`vue
<template>
  <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
    <DialogTrigger>다이얼로그 열기</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>제목</DialogTitle>
        <DialogDescription>설명</DialogDescription>
      </DialogHeader>
      <DialogBody>
        <p>내용</p>
      </DialogBody>
      <DialogFooter>
        <DialogCancelButton>취소</DialogCancelButton>
        <DialogClose>
          <DialogConfirmButton>확인</DialogConfirmButton>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const loading = ref(false);
<\/script>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Dialog의 로딩 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dismissMode:{control:"select",options:["none","dismiss"],description:"Dialog의 닫기 동작 모드",table:{type:{summary:"'none' | 'dismiss'"},defaultValue:{summary:"'none'"}}}}},G={render:e=>({components:{Dialog:N,DialogTrigger:Re,DialogContent:A,DialogHeader:$,DialogBody:H,DialogFooter:K,DialogTitle:V,DialogDescription:U,DialogCancelButton:L,DialogConfirmButton:j,DialogClose:I},setup(){return{args:e}},template:`
      <Dialog>
        <DialogTrigger>다이얼로그 열기</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Trigger를 사용한 다이얼로그</DialogTitle>
            <DialogDescription>
              DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p class="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogClose>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},J={render:()=>({components:{Dialog:N,DialogContent:A,DialogHeader:$,DialogBody:H,DialogFooter:K,DialogTitle:V,DialogCancelButton:L,DialogConfirmButton:j,DialogClose:I,Button:R},setup(){return{isOpen:D(!1)}},template:`
      <div>
        <Button @click="isOpen = true">다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기본 다이얼로그</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
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
    `})},Q={render:()=>({components:{Dialog:N,DialogContent:A,DialogHeader:$,DialogBody:H,DialogFooter:K,DialogTitle:V,DialogDescription:U,DialogCancelButton:L,DialogConfirmButton:j,Button:R},setup(){const e=D(!1),t=D(!1);return{isOpen:e,loading:t,handleConfirm:async()=>{t.value=!0,await new Promise(a=>setTimeout(a,2e3)),t.value=!1,e.value=!1}}},template:`
      <div>
        <Button @click="isOpen = true">로딩 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로딩 상태 다이얼로그</DialogTitle>
              <DialogDescription>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              <p v-if="loading" class="text-gray-700">로딩 중입니다...</p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton @click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},Z={parameters:{docs:{description:{story:`
스크롤이 생기게 하려면 **DialogContent에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \`class="h-[500px]"\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        `}}},render:()=>({components:{Dialog:N,DialogContent:A,DialogHeader:$,DialogBody:H,DialogFooter:K,DialogTitle:V,DialogDescription:U,DialogCancelButton:L,DialogConfirmButton:j,DialogClose:I,Button:R},setup(){return{isOpen:D(!1)}},template:`
      <div>
        <Button @click="isOpen = true">긴 내용 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px]">
            <DialogHeader>
              <DialogTitle>긴 내용이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p v-for="i in 100" :key="i">
                엄청 길면? {{ i }}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
              </p>
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
    `})},ee={parameters:{docs:{description:{story:`
가로 스크롤이 생기게 하려면 **DialogContent에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \`class="w-[400px]"\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        `}}},render:()=>({components:{Dialog:N,DialogContent:A,DialogHeader:$,DialogBody:H,DialogFooter:K,DialogTitle:V,DialogDescription:U,DialogCancelButton:L,DialogConfirmButton:j,DialogClose:I,Button:R},setup(){return{isOpen:D(!1)}},template:`
      <div>
        <Button @click="isOpen = true">가로 스크롤 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[400px] w-[400px]">
            <DialogHeader>
              <DialogTitle>가로/세로 스크롤이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="min-w-[800px]">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2 text-left">이름</th>
                      <th class="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th class="border border-gray-300 p-2 text-left">전화번호</th>
                      <th class="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th class="border border-gray-300 p-2 text-left">직책</th>
                      <th class="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 10" :key="i">
                      <td class="border border-gray-300 p-2">홍길동{{ i }}</td>
                      <td class="border border-gray-300 p-2">
                        hong.gildong{{ i }}@example.com
                      </td>
                      <td class="border border-gray-300 p-2">010-1234-567{{ i - 1 }}</td>
                      <td class="border border-gray-300 p-2">컴퓨터공학과</td>
                      <td class="border border-gray-300 p-2">교수</td>
                      <td class="border border-gray-300 p-2">활성</td>
                    </tr>
                  </tbody>
                </table>
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
    `})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
      <Dialog>
        <DialogTrigger>다이얼로그 열기</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Trigger를 사용한 다이얼로그</DialogTitle>
            <DialogDescription>
              DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p class="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogClose>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기본 다이얼로그</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
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
}`,...J.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
      Button
    },
    setup() {
      const isOpen = ref(false);
      const loading = ref(false);
      const handleConfirm = async () => {
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
        isOpen.value = false;
      };
      return {
        isOpen,
        loading,
        handleConfirm
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">로딩 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로딩 상태 다이얼로그</DialogTitle>
              <DialogDescription>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              <p v-if="loading" class="text-gray-700">로딩 중입니다...</p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton @click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...Q.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
스크롤이 생기게 하려면 **DialogContent에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \\\`class="h-[500px]"\\\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
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
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">긴 내용 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px]">
            <DialogHeader>
              <DialogTitle>긴 내용이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p v-for="i in 100" :key="i">
                엄청 길면? {{ i }}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
              </p>
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
}`,...Z.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
가로 스크롤이 생기게 하려면 **DialogContent에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \\\`class="w-[400px]"\\\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
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
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">가로 스크롤 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[400px] w-[400px]">
            <DialogHeader>
              <DialogTitle>가로/세로 스크롤이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="min-w-[800px]">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2 text-left">이름</th>
                      <th class="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th class="border border-gray-300 p-2 text-left">전화번호</th>
                      <th class="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th class="border border-gray-300 p-2 text-left">직책</th>
                      <th class="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 10" :key="i">
                      <td class="border border-gray-300 p-2">홍길동{{ i }}</td>
                      <td class="border border-gray-300 p-2">
                        hong.gildong{{ i }}@example.com
                      </td>
                      <td class="border border-gray-300 p-2">010-1234-567{{ i - 1 }}</td>
                      <td class="border border-gray-300 p-2">컴퓨터공학과</td>
                      <td class="border border-gray-300 p-2">교수</td>
                      <td class="border border-gray-300 p-2">활성</td>
                    </tr>
                  </tbody>
                </table>
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
}`,...ee.parameters?.docs?.source}}};const ln=["Default","WithVModel","WithLoading","WithLongContent","WithHorizontalScroll"];export{G as Default,ee as WithHorizontalScroll,Q as WithLoading,Z as WithLongContent,J as WithVModel,ln as __namedExportsOrder,rn as default};
