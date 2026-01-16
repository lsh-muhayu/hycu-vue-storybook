import{l as J,d as f,i as y,o as m,w as r,k as h,D as R,E as V,u as e,r as x,B as $e,G as ve,H as Dn,x as Cn,J as Ke,p as u,m as M,K as Q,L as Ce,b as N,y as xn,s as ze,M as kn,e as z,a as D,c as _n,n as In,q as _,C as qn,h as Sn}from"./iframe-BQJpkvah.js";import{u as F,a as ke}from"./useForwardPropsEmits-C5er4Eni.js";import{b as On,d as Le,a as oe,c as Z,u as S,P as ae,r as _e}from"./Primitive-BNbnNruP.js";import{u as Ue}from"./useDirection-DFl6iXcX.js";import{P as Bn,a as Ge,b as Pn,c as Tn}from"./PopperContent-D_7ox7pc.js";import{u as U,r as H}from"./index-DmPNuXZK.js";import{u as Me}from"./useId-DQDpzDz2.js";import{P as Ie}from"./Presence-TtwiJbHr.js";import{u as Rn,g as We,F as En,i as Vn,a as Fn,L as jn,f as An,b as re,S as Nn,I as Ln,c as qe,d as xe,e as $n,h as Kn,j as zn,k as Un}from"./context-CEPdeJYO.js";import{g as Gn}from"./getActiveElement-FUKBWQwh.js";import{u as Wn}from"./useFocusGuards-Cm4AqInk.js";import{u as Hn}from"./useTypeahead-B4eJUqyQ.js";import{D as Xn,T as Yn}from"./Teleport-nnknodv1.js";import{R as Qn}from"./RovingFocusGroup-IXl2k1nP.js";import{u as Jn}from"./Collection-CvZ-411F.js";import{C as He}from"./check-BApextaQ.js";import{_ as B}from"./Button-Dttr6WYb.js";import{a as Zn,b as et,c as nt,l as tt,d as ot,e as at,f as rt,g as st,h as it,j as dt}from"./AlertDialog-BZbBmAhF.js";import{T as X,L as Xe}from"./trash-2-B6vbid7e.js";import{S as Ye}from"./settings-D4vgzyjh.js";import{U as Qe}from"./user-CEG94Rwn.js";import{F as lt}from"./file-Di1vEYeJ.js";import{D as Je}from"./download-BXuB1344.js";import"./preload-helper-PPVm8Dsz.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./usePrimitiveElement-2VTNHPU-.js";import"./hasRenderableSlot-DucsubCA.js";import"./ScrollArea-CoCHksOo.js";const pt=J("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);const A=J("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);const Ze=J("ellipsis-vertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);const Se=J("folder",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);const en=J("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);const nn=J("share",[["path",{d:"M12 2v13",key:"1km8f5"}],["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}]]);const Y=J("square-pen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]),ut=["INPUT","TEXTAREA"];function ct(t,o,n,i={}){if(!o||i.enableIgnoredElement&&ut.includes(o.nodeName))return null;const{arrowKeyOptions:s="both",attributeName:a="[data-reka-collection-item]",itemsArray:d=[],loop:l=!0,dir:p="ltr",preventScroll:v=!0,focus:b=!1}=i,[g,w,I,j,G,W]=[t.key==="ArrowRight",t.key==="ArrowLeft",t.key==="ArrowUp",t.key==="ArrowDown",t.key==="Home",t.key==="End"],L=I||j,$=g||w;if(!G&&!W&&(!L&&!$||s==="vertical"&&$||s==="horizontal"&&L))return null;const te=n?Array.from(n.querySelectorAll(a)):d;if(!te.length)return null;v&&t.preventDefault();let K=null;return $||L?K=tn(te,o,{goForward:L?j:p==="ltr"?g:w,loop:l}):G?K=te.at(0)||null:W&&(K=te.at(-1)||null),b&&K?.focus(),K}function tn(t,o,n,i=t.length){if(--i===0)return null;const s=t.indexOf(o),a=n.goForward?s+1:s-1;if(!n.loop&&(a<0||a>=t.length))return null;const d=(a+t.length)%t.length,l=t[d];return l?l.hasAttribute("disabled")&&l.getAttribute("disabled")!=="false"?tn(t,l,n,i):l:null}var mt=f({__name:"MenuAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return(n,i)=>(m(),y(e(Bn),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),on=mt;function yt(){const t=x(!1);return $e(()=>{Le("keydown",()=>{t.value=!0},{capture:!0,passive:!0}),Le(["pointerdown","pointermove"],()=>{t.value=!1},{capture:!0,passive:!0})}),t}const ft=On(yt),[ee,an]=Z(["MenuRoot","MenuSub"],"MenuContext"),[se,gt]=Z("MenuRoot");var ht=f({__name:"MenuRoot",props:{open:{type:Boolean,required:!1,default:!1},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(t,{emit:o}){const n=t,i=o,{modal:s,dir:a}=ve(n),d=Ue(a),l=oe(n,"open",i),p=x(),v=ft();return an({open:l,onOpenChange:b=>{l.value=b},content:p,onContentChange:b=>{p.value=b}}),gt({onClose:()=>{l.value=!1},isUsingKeyboardRef:v,dir:d,modal:s}),(b,g)=>(m(),y(e(Ge),null,{default:r(()=>[h(b.$slots,"default")]),_:3}))}}),wt=ht;const[Oe,bt]=Z("MenuContent");var vt=f({__name:"MenuContentImpl",props:Dn({loop:{type:Boolean,required:!1},disableOutsidePointerEvents:{type:Boolean,required:!1},disableOutsideScroll:{type:Boolean,required:!1},trapFocus:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...Tn}),emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus","dismiss"],setup(t,{emit:o}){const n=t,i=o,s=ee(),a=se(),{trapFocus:d,disableOutsidePointerEvents:l,loop:p}=ve(n);Wn(),Rn(l.value);const v=x(""),b=x(0),g=x(0),w=x(null),I=x("right"),j=x(0),G=x(null),W=x(),{forwardRef:L,currentElement:$}=S(),{handleTypeaheadSearch:te}=Hn();Cn($,c=>{s.onContentChange(c)}),Ke(()=>{window.clearTimeout(b.value)});function K(c){return I.value===w.value?.side&&Vn(c,w.value?.area)}async function Fe(c){i("openAutoFocus",c),!c.defaultPrevented&&(c.preventDefault(),$.value?.focus({preventScroll:!0}))}function hn(c){if(c.defaultPrevented)return;const q=c.target.closest("[data-reka-menu-content]")===c.currentTarget,De=c.ctrlKey||c.altKey||c.metaKey,vn=c.key.length===1,je=ct(c,Gn(),$.value,{loop:p.value,arrowKeyOptions:"vertical",dir:a?.dir.value,focus:!0,attributeName:"[data-reka-collection-item]:not([data-disabled])"});if(je)return je?.focus();if(c.code==="Space")return;const Ae=W.value?.getItems()??[];if(q&&(c.key==="Tab"&&c.preventDefault(),!De&&vn&&te(c.key,Ae)),c.target!==$.value||!Fn.includes(c.key))return;c.preventDefault();const Ne=[...Ae.map(Mn=>Mn.ref)];jn.includes(c.key)&&Ne.reverse(),An(Ne)}function wn(c){c?.currentTarget?.contains?.(c.target)||(window.clearTimeout(b.value),v.value="")}function bn(c){if(!re(c))return;const k=c.target,q=j.value!==c.clientX;if(c?.currentTarget?.contains(k)&&q){const De=c.clientX>j.value?"right":"left";I.value=De,j.value=c.clientX}}return bt({onItemEnter:c=>!!K(c),onItemLeave:c=>{K(c)||($.value?.focus(),G.value=null)},onTriggerLeave:c=>!!K(c),searchRef:v,pointerGraceTimerRef:g,onPointerGraceIntentChange:c=>{w.value=c}}),(c,k)=>(m(),y(e(En),{"as-child":"",trapped:e(d),onMountAutoFocus:Fe,onUnmountAutoFocus:k[7]||(k[7]=q=>i("closeAutoFocus",q))},{default:r(()=>[u(e(Xn),{"as-child":"","disable-outside-pointer-events":e(l),onEscapeKeyDown:k[2]||(k[2]=q=>i("escapeKeyDown",q)),onPointerDownOutside:k[3]||(k[3]=q=>i("pointerDownOutside",q)),onFocusOutside:k[4]||(k[4]=q=>i("focusOutside",q)),onInteractOutside:k[5]||(k[5]=q=>i("interactOutside",q)),onDismiss:k[6]||(k[6]=q=>i("dismiss"))},{default:r(()=>[u(e(Qn),{ref_key:"rovingFocusGroupRef",ref:W,"current-tab-stop-id":G.value,"onUpdate:currentTabStopId":k[0]||(k[0]=q=>G.value=q),"as-child":"",orientation:"vertical",dir:e(a).dir.value,loop:e(p),onEntryFocus:k[1]||(k[1]=q=>{i("entryFocus",q),e(a).isUsingKeyboardRef.value||q.preventDefault()})},{default:r(()=>[u(e(Pn),{ref:e(L),role:"menu",as:c.as,"as-child":c.asChild,"aria-orientation":"vertical","data-reka-menu-content":"","data-state":e(We)(e(s).open.value),dir:e(a).dir.value,side:c.side,"side-offset":c.sideOffset,align:c.align,"align-offset":c.alignOffset,"avoid-collisions":c.avoidCollisions,"collision-boundary":c.collisionBoundary,"collision-padding":c.collisionPadding,"arrow-padding":c.arrowPadding,"prioritize-position":c.prioritizePosition,"position-strategy":c.positionStrategy,"update-position-strategy":c.updatePositionStrategy,sticky:c.sticky,"hide-when-detached":c.hideWhenDetached,reference:c.reference,onKeydown:hn,onBlur:wn,onPointermove:bn},{default:r(()=>[h(c.$slots,"default")]),_:3},8,["as","as-child","data-state","dir","side","side-offset","align","align-offset","avoid-collisions","collision-boundary","collision-padding","arrow-padding","prioritize-position","position-strategy","update-position-strategy","sticky","hide-when-detached","reference"])]),_:3},8,["current-tab-stop-id","dir","loop"])]),_:3},8,["disable-outside-pointer-events"])]),_:3},8,["trapped"]))}}),Be=vt,Mt=f({inheritAttrs:!1,__name:"MenuItemImpl",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t,n=Oe(),{forwardRef:i}=S(),{CollectionItem:s}=Jn(),a=x(!1);async function d(p){p.defaultPrevented||re(p)&&(o.disabled?n.onItemLeave(p):n.onItemEnter(p)||p.currentTarget?.focus({preventScroll:!0}))}async function l(p){await Q(),!p.defaultPrevented&&re(p)&&n.onItemLeave(p)}return(p,v)=>(m(),y(e(s),{value:{textValue:p.textValue}},{default:r(()=>[u(e(ae),M({ref:e(i),role:"menuitem",tabindex:"-1"},p.$attrs,{as:p.as,"as-child":p.asChild,"aria-disabled":p.disabled||void 0,"data-disabled":p.disabled?"":void 0,"data-highlighted":a.value?"":void 0,onPointermove:d,onPointerleave:l,onFocus:v[0]||(v[0]=async b=>{await Q(),!(b.defaultPrevented||p.disabled)&&(a.value=!0)}),onBlur:v[1]||(v[1]=async b=>{await Q(),!b.defaultPrevented&&(a.value=!1)})}),{default:r(()=>[h(p.$slots,"default")]),_:3},16,["as","as-child","aria-disabled","data-disabled","data-highlighted"])]),_:3},8,["value"]))}}),rn=Mt,Dt=f({__name:"MenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:o}){const n=t,i=o,{forwardRef:s,currentElement:a}=S(),d=se(),l=Oe(),p=x(!1);async function v(){const b=a.value;if(!n.disabled&&b){const g=new CustomEvent(Ln,{bubbles:!0,cancelable:!0});i("select",g),await Q(),g.defaultPrevented?p.value=!1:d.onClose()}}return(b,g)=>(m(),y(rn,M(n,{ref:e(s),onClick:v,onPointerdown:g[0]||(g[0]=()=>{p.value=!0}),onPointerup:g[1]||(g[1]=async w=>{await Q(),!w.defaultPrevented&&(p.value||w.currentTarget?.click())}),onKeydown:g[2]||(g[2]=async w=>{const I=e(l).searchRef.value!=="";b.disabled||I&&w.key===" "||e(Nn).includes(w.key)&&(w.currentTarget.click(),w.preventDefault())})}),{default:r(()=>[h(b.$slots,"default")]),_:3},16))}}),Pe=Dt;const[Ct,sn]=Z(["MenuCheckboxItem","MenuRadioItem"],"MenuItemIndicatorContext");var xt=f({__name:"MenuItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const o=Ct({modelValue:x(!1)});return(n,i)=>(m(),y(e(Ie),{present:n.forceMount||e(xe)(e(o).modelValue.value)||e(o).modelValue.value===!0},{default:r(()=>[u(e(ae),{as:n.as,"as-child":n.asChild,"data-state":e(qe)(e(o).modelValue.value)},{default:r(()=>[h(n.$slots,"default")]),_:3},8,["as","as-child","data-state"])]),_:3},8,["present"]))}}),kt=xt,_t=f({__name:"MenuCheckboxItem",props:{modelValue:{type:[Boolean,String],required:!1,default:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select","update:modelValue"],setup(t,{emit:o}){const n=t,i=o,s=_e(n,["modelValue"]),a=U(s),d=oe(n,"modelValue",i);return sn({modelValue:d}),(l,p)=>(m(),y(Pe,M({role:"menuitemcheckbox"},e(a),{"aria-checked":e(xe)(e(d))?"mixed":e(d),"data-state":e(qe)(e(d)),onSelect:p[0]||(p[0]=async v=>{i("select",v),e(xe)(e(d))?d.value=!0:d.value=!e(d)})}),{default:r(()=>[h(l.$slots,"default",{modelValue:e(d)})]),_:3},16,["aria-checked","data-state"]))}}),It=_t,qt=f({__name:"MenuRootContentModal",props:{loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:o}){const n=t,i=o,s=F(n,i),a=ee(),{forwardRef:d,currentElement:l}=S();return $n(l),(p,v)=>(m(),y(Be,M(e(s),{ref:e(d),"trap-focus":e(a).open.value,"disable-outside-pointer-events":e(a).open.value,"disable-outside-scroll":!0,onDismiss:v[0]||(v[0]=b=>e(a).onOpenChange(!1)),onFocusOutside:v[1]||(v[1]=Ce(b=>i("focusOutside",b),["prevent"]))}),{default:r(()=>[h(p.$slots,"default")]),_:3},16,["trap-focus","disable-outside-pointer-events"]))}}),St=qt,Ot=f({__name:"MenuRootContentNonModal",props:{loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:o}){const s=F(t,o),a=ee();return(d,l)=>(m(),y(Be,M(e(s),{"trap-focus":!1,"disable-outside-pointer-events":!1,"disable-outside-scroll":!1,onDismiss:l[0]||(l[0]=p=>e(a).onOpenChange(!1))}),{default:r(()=>[h(d.$slots,"default")]),_:3},16))}}),Bt=Ot,Pt=f({__name:"MenuContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:o}){const s=F(t,o),a=ee(),d=se();return(l,p)=>(m(),y(e(Ie),{present:l.forceMount||e(a).open.value},{default:r(()=>[e(d).modal.value?(m(),y(St,R(M({key:0},{...l.$attrs,...e(s)})),{default:r(()=>[h(l.$slots,"default")]),_:3},16)):(m(),y(Bt,R(M({key:1},{...l.$attrs,...e(s)})),{default:r(()=>[h(l.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Tt=Pt,Rt=f({__name:"MenuGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return(n,i)=>(m(),y(e(ae),M({role:"group"},o),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),dn=Rt,Et=f({__name:"MenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"div"}},setup(t){const o=t;return(n,i)=>(m(),y(e(ae),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),Vt=Et,Ft=f({__name:"MenuPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const o=t;return(n,i)=>(m(),y(e(Yn),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),jt=Ft;const[At,Nt]=Z("MenuRadioGroup");var Lt=f({__name:"MenuRadioGroup",props:{modelValue:{type:String,required:!1,default:""},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,i=o,s=_e(n,["modelValue"]),a=U(s),d=oe(n,"modelValue",i);return Nt({modelValue:d,onValueChange:l=>{d.value=l}}),(l,p)=>(m(),y(dn,R(V(e(a))),{default:r(()=>[h(l.$slots,"default",{modelValue:e(d)})]),_:3},16))}}),$t=Lt,Kt=f({__name:"MenuRadioItem",props:{value:{type:String,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:o}){const n=t,i=o,s=_e(n,["value"]),a=U(s),{value:d}=ve(n),l=At(),p=N(()=>l.modelValue.value===d?.value);return sn({modelValue:p}),(v,b)=>(m(),y(Pe,M({role:"menuitemradio"},e(a),{"aria-checked":p.value,"data-state":e(qe)(p.value),onSelect:b[0]||(b[0]=async g=>{i("select",g),e(l).onValueChange(e(d))})}),{default:r(()=>[h(v.$slots,"default")]),_:3},16,["aria-checked","data-state"]))}}),zt=Kt,Ut=f({__name:"MenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return(n,i)=>(m(),y(e(ae),M(o,{role:"separator","aria-orientation":"horizontal"}),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),Gt=Ut;const[ln,Wt]=Z("MenuSub");var Ht=f({__name:"MenuSub",props:{open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:o}){const n=t,s=oe(n,"open",o,{defaultValue:!1,passive:n.open===void 0}),a=ee(),d=x(),l=x();return xn(p=>{a?.open.value===!1&&(s.value=!1),p(()=>s.value=!1)}),an({open:s,onOpenChange:p=>{s.value=p},content:l,onContentChange:p=>{l.value=p}}),Wt({triggerId:"",contentId:"",trigger:d,onTriggerChange:p=>{d.value=p}}),(p,v)=>(m(),y(e(Ge),null,{default:r(()=>[h(p.$slots,"default")]),_:3}))}}),Xt=Ht,Yt=f({__name:"MenuSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1,default:!0},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:o}){const s=F(t,o),a=ee(),d=se(),l=ln(),{forwardRef:p,currentElement:v}=S();return l.contentId||=Me(void 0,"reka-menu-sub-content"),(b,g)=>(m(),y(e(Ie),{present:b.forceMount||e(a).open.value},{default:r(()=>[u(Be,M(e(s),{id:e(l).contentId,ref:e(p),"aria-labelledby":e(l).triggerId,align:"start",side:e(d).dir.value==="rtl"?"left":"right","disable-outside-pointer-events":!1,"disable-outside-scroll":!1,"trap-focus":!1,onOpenAutoFocus:g[0]||(g[0]=Ce(w=>{e(d).isUsingKeyboardRef.value&&e(v)?.focus()},["prevent"])),onCloseAutoFocus:g[1]||(g[1]=Ce(()=>{},["prevent"])),onFocusOutside:g[2]||(g[2]=w=>{w.defaultPrevented||w.target!==e(l).trigger.value&&e(a).onOpenChange(!1)}),onEscapeKeyDown:g[3]||(g[3]=w=>{e(d).onClose(),w.preventDefault()}),onKeydown:g[4]||(g[4]=w=>{const I=w.currentTarget?.contains(w.target),j=e(Kn)[e(d).dir.value].includes(w.key);I&&j&&(e(a).onOpenChange(!1),e(l).trigger.value?.focus(),w.preventDefault())})}),{default:r(()=>[h(b.$slots,"default")]),_:3},16,["id","aria-labelledby","side"])]),_:3},8,["present"]))}}),Qt=Yt,Jt=f({__name:"MenuSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t,n=ee(),i=se(),s=ln(),a=Oe(),d=x(null);s.triggerId||=Me(void 0,"reka-menu-sub-trigger");function l(){d.value&&window.clearTimeout(d.value),d.value=null}Ke(()=>{l()});function p(g){!re(g)||a.onItemEnter(g)||!o.disabled&&!n.open.value&&!d.value&&(a.onPointerGraceIntentChange(null),d.value=window.setTimeout(()=>{n.onOpenChange(!0),l()},100))}async function v(g){if(!re(g))return;l();const w=n.content.value?.getBoundingClientRect();if(w?.width){const I=n.content.value?.dataset.side,j=I==="right",G=j?-5:5,W=w[j?"left":"right"],L=w[j?"right":"left"];a.onPointerGraceIntentChange({area:[{x:g.clientX+G,y:g.clientY},{x:W,y:w.top},{x:L,y:w.top},{x:L,y:w.bottom},{x:W,y:w.bottom}],side:I}),window.clearTimeout(a.pointerGraceTimerRef.value),a.pointerGraceTimerRef.value=window.setTimeout(()=>a.onPointerGraceIntentChange(null),300)}else{if(a.onTriggerLeave(g))return;a.onPointerGraceIntentChange(null)}}async function b(g){const w=a.searchRef.value!=="";o.disabled||w&&g.key===" "||zn[i.dir.value].includes(g.key)&&(n.onOpenChange(!0),await Q(),n.content.value?.focus(),g.preventDefault())}return(g,w)=>(m(),y(on,{"as-child":""},{default:r(()=>[u(rn,M(o,{id:e(s).triggerId,ref:I=>{e(s)?.onTriggerChange(I?.$el)},"aria-haspopup":"menu","aria-expanded":e(n).open.value,"aria-controls":e(s).contentId,"data-state":e(We)(e(n).open.value),onClick:w[0]||(w[0]=async I=>{o.disabled||I.defaultPrevented||(I.currentTarget.focus(),e(n).open.value||e(n).onOpenChange(!0))}),onPointermove:p,onPointerleave:v,onKeydown:b}),{default:r(()=>[h(g.$slots,"default")]),_:3},16,["id","aria-expanded","aria-controls","data-state"])]),_:3}))}}),Zt=Jt,eo=f({__name:"DropdownMenuCheckboxItem",props:{modelValue:{type:[Boolean,String],required:!1},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select","update:modelValue"],setup(t,{emit:o}){const n=t,s=ke(o);return S(),(a,d)=>(m(),y(e(It),R(V({...n,...e(s)})),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),no=eo;const[pn,to]=Z("DropdownMenuRoot");var oo=f({__name:"DropdownMenuRoot",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0},dir:{type:String,required:!1},modal:{type:Boolean,required:!1,default:!0}},emits:["update:open"],setup(t,{emit:o}){const n=t,i=o;S();const s=oe(n,"open",i,{defaultValue:n.defaultOpen,passive:n.open===void 0}),a=x(),{modal:d,dir:l}=ve(n),p=Ue(l);return to({open:s,onOpenChange:v=>{s.value=v},onOpenToggle:()=>{s.value=!s.value},triggerId:"",triggerElement:a,contentId:"",modal:d,dir:p}),(v,b)=>(m(),y(e(wt),{open:e(s),"onUpdate:open":b[0]||(b[0]=g=>ze(s)?s.value=g:null),dir:e(p),modal:e(d)},{default:r(()=>[h(v.$slots,"default",{open:e(s)})]),_:3},8,["open","dir","modal"]))}}),ao=oo,ro=f({__name:"DropdownMenuContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","closeAutoFocus"],setup(t,{emit:o}){const s=F(t,o);S();const a=pn(),d=x(!1);function l(p){p.defaultPrevented||(d.value||setTimeout(()=>{a.triggerElement.value?.focus()},0),d.value=!1,p.preventDefault())}return a.contentId||=Me(void 0,"reka-dropdown-menu-content"),(p,v)=>(m(),y(e(Tt),M(e(s),{id:e(a).contentId,"aria-labelledby":e(a)?.triggerId,style:{"--reka-dropdown-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-dropdown-menu-content-available-width":"var(--reka-popper-available-width)","--reka-dropdown-menu-content-available-height":"var(--reka-popper-available-height)","--reka-dropdown-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-dropdown-menu-trigger-height":"var(--reka-popper-anchor-height)"},onCloseAutoFocus:l,onInteractOutside:v[0]||(v[0]=b=>{if(b.defaultPrevented)return;const g=b.detail.originalEvent,w=g.button===0&&g.ctrlKey===!0,I=g.button===2||w;(!e(a).modal.value||I)&&(d.value=!0),e(a).triggerElement.value?.contains(b.target)&&b.preventDefault()})}),{default:r(()=>[h(p.$slots,"default")]),_:3},16,["id","aria-labelledby"]))}}),so=ro,io=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return S(),(n,i)=>(m(),y(e(dn),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),lo=io,po=f({__name:"DropdownMenuItem",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:o}){const n=t,s=ke(o);return S(),(a,d)=>(m(),y(e(Pe),R(V({...n,...e(s)})),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),uo=po,co=f({__name:"DropdownMenuItemIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return S(),(n,i)=>(m(),y(e(kt),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),un=co,mo=f({__name:"DropdownMenuLabel",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return S(),(n,i)=>(m(),y(e(Vt),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),yo=mo,fo=f({__name:"DropdownMenuPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(t){const o=t;return(n,i)=>(m(),y(e(jt),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),go=fo,ho=f({__name:"DropdownMenuRadioGroup",props:{modelValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["update:modelValue"],setup(t,{emit:o}){const n=t,s=ke(o);return S(),(a,d)=>(m(),y(e($t),R(V({...n,...e(s)})),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),wo=ho,bo=f({__name:"DropdownMenuRadioItem",props:{value:{type:String,required:!0},disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["select"],setup(t,{emit:o}){const s=F(t,o);return S(),(a,d)=>(m(),y(e(zt),R(V(e(s))),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),vo=bo,Mo=f({__name:"DropdownMenuSeparator",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return S(),(n,i)=>(m(),y(e(Gt),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),Do=Mo,Co=f({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean,required:!1},open:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(t,{emit:o}){const n=t,s=oe(n,"open",o,{passive:n.open===void 0,defaultValue:n.defaultOpen??!1});return S(),(a,d)=>(m(),y(e(Xt),{open:e(s),"onUpdate:open":d[0]||(d[0]=l=>ze(s)?s.value=l:null)},{default:r(()=>[h(a.$slots,"default",{open:e(s)})]),_:3},8,["open"]))}}),xo=Co,ko=f({__name:"DropdownMenuSubContent",props:{forceMount:{type:Boolean,required:!1},loop:{type:Boolean,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},emits:["escapeKeyDown","pointerDownOutside","focusOutside","interactOutside","entryFocus","openAutoFocus","closeAutoFocus"],setup(t,{emit:o}){const s=F(t,o);return S(),(a,d)=>(m(),y(e(Qt),M(e(s),{style:{"--reka-dropdown-menu-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-dropdown-menu-content-available-width":"var(--reka-popper-available-width)","--reka-dropdown-menu-content-available-height":"var(--reka-popper-available-height)","--reka-dropdown-menu-trigger-width":"var(--reka-popper-anchor-width)","--reka-dropdown-menu-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}}),_o=ko,Io=f({__name:"DropdownMenuSubTrigger",props:{disabled:{type:Boolean,required:!1},textValue:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(t){const o=t;return S(),(n,i)=>(m(),y(e(Zt),R(V(o)),{default:r(()=>[h(n.$slots,"default")]),_:3},16))}}),qo=Io,So=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(t){const o=t,n=pn(),{forwardRef:i,currentElement:s}=S();return $e(()=>{n.triggerElement=s}),n.triggerId||=Me(void 0,"reka-dropdown-menu-trigger"),(a,d)=>(m(),y(e(on),{"as-child":""},{default:r(()=>[u(e(ae),{id:e(n).triggerId,ref:e(i),type:a.as==="button"?"button":void 0,"as-child":o.asChild,as:a.as,"aria-haspopup":"menu","aria-expanded":e(n).open.value,"aria-controls":e(n).open.value?e(n).contentId:void 0,"data-disabled":a.disabled?"":void 0,disabled:a.disabled,"data-state":e(n).open.value?"open":"closed",onClick:d[0]||(d[0]=async l=>{!a.disabled&&l.button===0&&l.ctrlKey===!1&&(e(n)?.onOpenToggle(),await Q(),e(n).open.value&&l.preventDefault())}),onKeydown:d[1]||(d[1]=kn(l=>{a.disabled||(["Enter"," "].includes(l.key)&&e(n).onOpenToggle(),l.key==="ArrowDown"&&e(n).onOpenChange(!0),["Enter"," ","ArrowDown"].includes(l.key)&&l.preventDefault())},["enter","space","arrow-down"]))},{default:r(()=>[h(a.$slots,"default")]),_:3},8,["id","type","as-child","as","aria-expanded","aria-controls","data-disabled","disabled","data-state"])]),_:3}))}}),Oo=So;const O=f({__name:"DropdownMenu",props:{defaultOpen:{type:Boolean},open:{type:Boolean},dir:{},modal:{type:Boolean}},emits:["update:open"],setup(t,{emit:o}){const s=F(t,o);return(a,d)=>(m(),y(e(ao),M(e(s),{"data-slot":"dropdown-menu"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}});O.__docgenInfo={exportName:"default",displayName:"DropdownMenu",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"dir",global:!1,description:"The reading direction of the combobox when applicable.\n\nIf omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",tags:[],required:!1,type:"Direction$4",declarations:[],schema:{kind:"enum",type:"Direction$4",schema:['"ltr"','"rtl"']}},{name:"defaultOpen",global:!1,description:"The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",global:!1,description:"The controlled open state of the menu. Can be used as `v-model:open`.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",global:!1,description:"The modality of the dropdown menu.\n\nWhen set to `true`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:open",description:"",tags:[],type:"[payload: boolean]",signature:'(event: "update:open", payload: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"dir",type:"Direction$4",description:"The reading direction of the combobox when applicable.\n\nIf omitted, inherits globally from `ConfigProvider` or assumes LTR (left-to-right) reading mode.",declarations:[],schema:{kind:"enum",type:"Direction$4",schema:['"ltr"','"rtl"']}},{name:"defaultOpen",type:"boolean",description:"The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",type:"boolean",description:"The controlled open state of the menu. Can be used as `v-model:open`.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"modal",type:"boolean",description:"The modality of the dropdown menu.\n\nWhen set to `true`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenu.vue"};const P=f({__name:"DropdownMenuTrigger",props:{disabled:{type:Boolean},asChild:{type:Boolean},as:{}},setup(t){const n=U(t);return(i,s)=>(m(),y(e(Oo),M(e(n),{"data-slot":"dropdown-menu-trigger"}),{default:r(()=>[h(i.$slots,"default")]),_:3},16))}});P.__docgenInfo={exportName:"default",displayName:"DropdownMenuTrigger",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with item",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with item",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuTrigger.vue"};const T=f({inheritAttrs:!1,__name:"DropdownMenuContent",props:{class:{default:""},container:{default:void 0},forceMount:{type:Boolean},loop:{type:Boolean},side:{},sideOffset:{default:4},sideFlip:{type:Boolean},align:{},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{default:void 0},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class","container","collisionBoundary"),i=F(n),{container:s,collisionBoundary:a,collisionPadding:d}=Un({collisionBoundary:o.collisionBoundary,container:o.container}),l=N(()=>z("z-dropdown overflow-x-hidden overflow-y-auto rounded-md border border-gray-200 bg-white p-2 shadow-md","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2","data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2","max-h-[var(--reka-dropdown-menu-content-available-height)] origin-[var(--reka-dropdown-menu-content-transform-origin)]",o.class));return(p,v)=>(m(),y(e(go),{to:e(s)},{default:r(()=>[u(e(so),M({...e(i),...p.$attrs},{class:l.value,"collision-boundary":e(a),"collision-padding":e(d),"data-slot":"dropdown-menu-content"}),{default:r(()=>[h(p.$slots,"default")]),_:3},16,["class","collision-boundary","collision-padding"])]),_:3},8,["to"]))}});T.__docgenInfo={exportName:"default",displayName:"DropdownMenuContent",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"collisionBoundary",global:!1,description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,tags:[{name:"defaultValue",text:"[]"}],required:!1,type:"Element | Element[]",declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]},default:"undefined"},{name:"container",global:!1,description:"",tags:[],required:!1,type:"string | HTMLElement",declarations:[],schema:{kind:"enum",type:"string | HTMLElement",schema:["string",{kind:"object",type:"HTMLElement"}]},default:"undefined"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,tags:[{name:"defaultValue",text:'"top"'}],required:!1,type:'"top" | "right" | "bottom" | "left"',declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"sideFlip",global:!1,description:"Flip to the opposite side when colliding with boundary.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"align",global:!1,description:`The preferred alignment against the trigger.
May change when collisions occur.`,tags:[{name:"defaultValue",text:'"center"'}],required:!1,type:'"start" | "center" | "end"',declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']}},{name:"alignOffset",global:!1,description:"An offset in pixels from the `start` or `end` alignment options.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"alignFlip",global:!1,description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",global:!1,description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",global:!1,description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",global:!1,description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"sticky",global:!1,description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,tags:[{name:"defaultValue",text:'"partial"'}],required:!1,type:'"always" | "partial"',declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",global:!1,description:"Whether to hide the content when the trigger becomes fully occluded.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",global:!1,description:"The type of CSS position property to use.",tags:[],required:!1,type:'"fixed" | "absolute"',declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",global:!1,description:"Strategy to update the position of the floating element on every animation frame.",tags:[{name:"defaultValue",text:"'optimized'"}],required:!1,type:'"always" | "optimized"',declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",global:!1,description:"Whether to disable the update position for the content when the layout shifted.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",global:!1,description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",global:!1,description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}},{name:"loop",global:!1,description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"sideOffset",type:"number",description:"The distance in pixels from the trigger.",declarations:[],schema:"number"},{name:"collisionBoundary",type:"Element | Element[]",description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"container",type:"string | HTMLElement",description:"",declarations:[],schema:{kind:"enum",type:"string | HTMLElement",schema:["string",{kind:"object",type:"HTMLElement"}]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"side",type:'"top" | "right" | "bottom" | "left"',description:`The preferred side of the trigger to render against when open.
Will be reversed when collisions occur and avoidCollisions
is enabled.`,declarations:[],schema:{kind:"enum",type:'"top" | "right" | "bottom" | "left"',schema:['"top"','"right"','"bottom"','"left"']}},{name:"sideFlip",type:"boolean",description:"Flip to the opposite side when colliding with boundary.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"align",type:'"start" | "center" | "end"',description:`The preferred alignment against the trigger.
May change when collisions occur.`,declarations:[],schema:{kind:"enum",type:'"start" | "center" | "end"',schema:['"start"','"center"','"end"']}},{name:"alignOffset",type:"number",description:"An offset in pixels from the `start` or `end` alignment options.",declarations:[],schema:"number"},{name:"alignFlip",type:"boolean",description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",type:"boolean",description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionPadding",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",type:"number",description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,declarations:[],schema:"number"},{name:"sticky",type:'"always" | "partial"',description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",type:"boolean",description:"Whether to hide the content when the trigger becomes fully occluded.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",type:'"fixed" | "absolute"',description:"The type of CSS position property to use.",declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",type:'"always" | "optimized"',description:"Strategy to update the position of the floating element on every animation frame.",declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",type:"boolean",description:"Whether to disable the update position for the content when the layout shifted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",type:"boolean",description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",type:"ReferenceElement",description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}},{name:"loop",type:"boolean",description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuContent.vue"};const cn=f({__name:"DropdownMenuGroup",props:{asChild:{type:Boolean},as:{}},setup(t){const n=U(t);return(i,s)=>(m(),y(e(lo),M(e(n),{"data-slot":"dropdown-menu-group"}),{default:r(()=>[h(i.$slots,"default")]),_:3},16))}});cn.__docgenInfo={exportName:"default",displayName:"DropdownMenuGroup",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuGroup.vue"};const C=f({__name:"DropdownMenuItem",props:{class:{default:""},inset:{type:Boolean,default:!1},variant:{default:"default"},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class","inset","variant"),i=U(n),s=N(()=>z("relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50",o.variant==="destructive"&&"text-danger data-highlighted:bg-danger/10 data-highlighted:text-danger",o.variant==="destructive"&&"[&_svg]:text-danger",'[&_svg:not([class*="text-"])]:text-muted-foreground',o.inset&&"pl-8",'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',o.class));return(a,d)=>(m(),y(e(uo),M(e(i),{class:s.value,"data-inset":t.inset,"data-variant":t.variant,"data-slot":"dropdown-menu-item"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16,["class","data-inset","data-variant"]))}});C.__docgenInfo={exportName:"default",displayName:"DropdownMenuItem",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"default" | "destructive"',declarations:[],schema:{kind:"enum",type:'"default" | "destructive"',schema:['"default"','"destructive"']},default:'"default"'},{name:"inset",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the item.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",global:!1,description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:'"default" | "destructive"',description:"",declarations:[],schema:{kind:"enum",type:'"default" | "destructive"',schema:['"default"','"destructive"']}},{name:"inset",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the item.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",type:"string",description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuItem.vue"};const Bo={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},mn=f({__name:"DropdownMenuCheckboxItem",props:{class:{default:""},modelValue:{type:[Boolean,String]},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select","update:modelValue"],setup(t,{emit:o}){const n=t,i=o,s=H(n,"class"),a=F(s,i),d=N(()=>z("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm text-gray-900 outline-hidden data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50",'select-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',n.class));return(l,p)=>(m(),y(e(no),M(e(a),{class:d.value,"data-slot":"dropdown-menu-checkbox-item"}),{default:r(()=>[D("span",Bo,[u(e(un),null,{default:r(()=>[u(e(He),{class:"size-4"})]),_:1})]),h(l.$slots,"default")]),_:3},16,["class"]))}});mn.__docgenInfo={exportName:"default",displayName:"DropdownMenuCheckboxItem",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the item.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",global:!1,description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"modelValue",global:!1,description:"The controlled checked state of the item. Can be used as `v-model`.",tags:[],required:!1,type:"CheckedState$1",declarations:[],schema:{kind:"enum",type:"CheckedState$1",schema:["false","true",'"indeterminate"']}}],events:[{name:"select",description:"",tags:[],type:"[event: Event]",signature:'(event: "select", event: Event): void',declarations:[],schema:[{kind:"object",type:"Event"}]},{name:"update:modelValue",description:"",tags:[],type:"[payload: boolean]",signature:'(event: "update:modelValue", payload: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the item.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",type:"string",description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",declarations:[],schema:"string"},{name:"modelValue",type:"CheckedState$1",description:"The controlled checked state of the item. Can be used as `v-model`.",declarations:[],schema:{kind:"enum",type:"CheckedState$1",schema:["false","true",'"indeterminate"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuCheckboxItem.vue"};const yn=f({__name:"DropdownMenuRadioGroup",props:{modelValue:{},asChild:{type:Boolean},as:{}},emits:["update:modelValue"],setup(t,{emit:o}){const s=F(t,o);return(a,d)=>(m(),y(e(wo),M(e(s),{"data-slot":"dropdown-menu-radio-group"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}});yn.__docgenInfo={exportName:"default",displayName:"DropdownMenuRadioGroup",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"modelValue",global:!1,description:"The value of the selected item in the group.",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[payload: string]",signature:'(event: "update:modelValue", payload: string): void',declarations:[],schema:["string"]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"modelValue",type:"string",description:"The value of the selected item in the group.",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuRadioGroup.vue"};const Po={class:"pointer-events-none absolute left-2 flex size-3.5 items-center justify-center"},fn=f({__name:"DropdownMenuRadioItem",props:{class:{default:""},value:{},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},emits:["select"],setup(t,{emit:o}){const n=t,i=o,s=H(n,"class"),a=F(s,i),d=N(()=>z("relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100","data-disabled:cursor-not-allowed data-disabled:opacity-50",'[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',n.class));return(l,p)=>(m(),y(e(vo),M(e(a),{class:d.value,"data-slot":"dropdown-menu-radio-item"}),{default:r(()=>[D("span",Po,[u(e(un),null,{default:r(()=>[u(e(He),{class:"size-4"})]),_:1})]),h(l.$slots,"default")]),_:3},16,["class"]))}});fn.__docgenInfo={exportName:"default",displayName:"DropdownMenuRadioItem",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"value",global:!1,description:"The unique value of the item.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the item.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"textValue",global:!1,description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"select",description:"",tags:[],type:"[event: Event]",signature:'(event: "select", event: Event): void',declarations:[],schema:[{kind:"object",type:"Event"}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"value",type:"string",description:"The unique value of the item.",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the item.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",type:"string",description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuRadioItem.vue"};const ne=f({__name:"DropdownMenuLabel",props:{class:{default:""},inset:{type:Boolean,default:!1},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class","inset"),i=U(n),s=N(()=>z("px-2 py-1.5 text-sm text-gray-900",o.inset&&"pl-8",o.class));return(a,d)=>(m(),y(e(yo),M(e(i),{class:s.value,"data-inset":t.inset,"data-slot":"dropdown-menu-label"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16,["class","data-inset"]))}});ne.__docgenInfo={exportName:"default",displayName:"DropdownMenuLabel",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"inset",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"inset",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuLabel.vue"};const E=f({__name:"DropdownMenuSeparator",props:{class:{default:""},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class"),i=U(n),s=N(()=>z("mx-1 my-1 h-px bg-gray-200",o.class));return(a,d)=>(m(),y(e(Do),M(e(i),{class:s.value,"data-slot":"dropdown-menu-separator"}),null,16,["class"]))}});E.__docgenInfo={exportName:"default",displayName:"DropdownMenuSeparator",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuSeparator.vue"};const Te=f({__name:"DropdownMenuShortcut",props:{class:{default:""}},setup(t){const o=t,n=N(()=>z("ml-auto tracking-widest",o.class));return(i,s)=>(m(),_n("span",{class:In(n.value),"data-slot":"dropdown-menu-shortcut"},[h(i.$slots,"default")],2))}});Te.__docgenInfo={exportName:"default",displayName:"DropdownMenuShortcut",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuShortcut.vue"};const Re=f({__name:"DropdownMenuSub",props:{defaultOpen:{type:Boolean},open:{type:Boolean}},emits:["update:open"],setup(t,{emit:o}){const s=F(t,o);return(a,d)=>(m(),y(e(xo),M(e(s),{"data-slot":"dropdown-menu-sub"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16))}});Re.__docgenInfo={exportName:"default",displayName:"DropdownMenuSub",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"defaultOpen",global:!1,description:"The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",global:!1,description:"The controlled open state of the menu. Can be used as `v-model:open`.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:open",description:"",tags:[],type:"[payload: boolean]",signature:'(event: "update:open", payload: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"defaultOpen",type:"boolean",description:"The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",type:"boolean",description:"The controlled open state of the menu. Can be used as `v-model:open`.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuSub.vue"};const Ee=f({__name:"DropdownMenuSubTrigger",props:{class:{default:""},inset:{type:Boolean,default:!1},disabled:{type:Boolean},textValue:{},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class","inset"),i=U(n),s=N(()=>z("flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-gray-900 outline-hidden select-none data-highlighted:bg-gray-100",o.inset&&"pl-8",'[&_svg:not([class*="text-"])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*="size-"])]:size-4',o.class));return(a,d)=>(m(),y(e(qo),M(e(i),{class:s.value,"data-inset":t.inset,"data-slot":"dropdown-menu-sub-trigger"}),{default:r(()=>[h(a.$slots,"default"),u(e(pt),{class:"ml-auto size-4"})]),_:3},16,["class","data-inset"]))}});Ee.__docgenInfo={exportName:"default",displayName:"DropdownMenuSubTrigger",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"inset",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the item.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",global:!1,description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"inset",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the item.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"textValue",type:"string",description:"Optional text used for typeahead purposes. By default the typeahead behavior will use the `.textContent` of the item. <br>\n Use this when the content is complex, or you have non-textual content inside.",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuSubTrigger.vue"};const Ve=f({__name:"DropdownMenuSubContent",props:{class:{default:""},forceMount:{type:Boolean},loop:{type:Boolean},sideOffset:{},sideFlip:{type:Boolean},alignOffset:{},alignFlip:{type:Boolean},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{},disableUpdateOnLayoutShift:{type:Boolean},prioritizePosition:{type:Boolean},reference:{},asChild:{type:Boolean},as:{}},setup(t){const o=t,n=H(o,"class"),i=F(n),s=N(()=>z("z-dropdown overflow-hidden rounded-md border border-gray-200 bg-white p-2 shadow-lg","data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0","data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2","data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[var(--reka-dropdown-menu-content-transform-origin)]",o.class));return(a,d)=>(m(),y(e(_o),M(e(i),{class:s.value,"data-slot":"dropdown-menu-sub-content"}),{default:r(()=>[h(a.$slots,"default")]),_:3},16,["class"]))}});Ve.__docgenInfo={exportName:"default",displayName:"DropdownMenuSubContent",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"sideFlip",global:!1,description:"Flip to the opposite side when colliding with boundary.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"alignOffset",global:!1,description:"An offset in pixels from the `start` or `end` alignment options.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"alignFlip",global:!1,description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",global:!1,description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",tags:[{name:"defaultValue",text:"true"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionBoundary",global:!1,description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,tags:[{name:"defaultValue",text:"[]"}],required:!1,type:"Element | Element[]",declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"collisionPadding",global:!1,description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",global:!1,description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number"},{name:"sticky",global:!1,description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,tags:[{name:"defaultValue",text:'"partial"'}],required:!1,type:'"always" | "partial"',declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",global:!1,description:"Whether to hide the content when the trigger becomes fully occluded.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",global:!1,description:"The type of CSS position property to use.",tags:[],required:!1,type:'"fixed" | "absolute"',declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",global:!1,description:"Strategy to update the position of the floating element on every animation frame.",tags:[{name:"defaultValue",text:"'optimized'"}],required:!1,type:'"always" | "optimized"',declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",global:!1,description:"Whether to disable the update position for the content when the layout shifted.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",global:!1,description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",global:!1,description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}},{name:"loop",global:!1,description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"sideOffset",type:"number",description:"The distance in pixels from the trigger.",declarations:[],schema:"number"},{name:"sideFlip",type:"boolean",description:"Flip to the opposite side when colliding with boundary.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"alignOffset",type:"number",description:"An offset in pixels from the `start` or `end` alignment options.",declarations:[],schema:"number"},{name:"alignFlip",type:"boolean",description:"Flip alignment when colliding with boundary.\nMay only occur when `prioritizePosition` is true.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"avoidCollisions",type:"boolean",description:"When `true`, overrides the side and align preferences\nto prevent collisions with boundary edges.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"collisionBoundary",type:"Element | Element[]",description:`The element used as the collision boundary. By default
this is the viewport, though you can provide additional
element(s) to be included in this check.`,declarations:[],schema:{kind:"enum",type:"Element | Element[]",schema:[{kind:"object",type:"Element"},{kind:"array",type:"Element[]"}]}},{name:"collisionPadding",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',description:`The distance in pixels from the boundary edges where collision
detection should occur. Accepts a number (same for all sides),
or a partial padding object, for example: { top: 20, left: 20 }.`,declarations:[],schema:{kind:"enum",type:'number | Partial<Record<"top" | "right" | "bottom" | "left", number>>',schema:["number",'Partial<Record<"top" | "right" | "bottom" | "left", number>>']}},{name:"arrowPadding",type:"number",description:`The padding between the arrow and the edges of the content.
If your content has border-radius, this will prevent it from
overflowing the corners.`,declarations:[],schema:"number"},{name:"sticky",type:'"always" | "partial"',description:`The sticky behavior on the align axis. \`partial\` will keep the
content in the boundary as long as the trigger is at least partially
in the boundary whilst "always" will keep the content in the boundary
regardless.`,declarations:[],schema:{kind:"enum",type:'"always" | "partial"',schema:['"always"','"partial"']}},{name:"hideWhenDetached",type:"boolean",description:"Whether to hide the content when the trigger becomes fully occluded.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"positionStrategy",type:'"fixed" | "absolute"',description:"The type of CSS position property to use.",declarations:[],schema:{kind:"enum",type:'"fixed" | "absolute"',schema:['"fixed"','"absolute"']}},{name:"updatePositionStrategy",type:'"always" | "optimized"',description:"Strategy to update the position of the floating element on every animation frame.",declarations:[],schema:{kind:"enum",type:'"always" | "optimized"',schema:['"always"','"optimized"']}},{name:"disableUpdateOnLayoutShift",type:"boolean",description:"Whether to disable the update position for the content when the layout shifted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"prioritizePosition",type:"boolean",description:`Force content to be position within the viewport.

Might overlap the reference element, which may not be desired.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"reference",type:"ReferenceElement",description:`The custom element or virtual element that will be set as the reference
to position the floating element.

If provided, it will replace the default anchor element.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}},{name:"loop",type:"boolean",description:"When `true`, keyboard navigation will loop from last item to first, and vice versa.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/DropdownMenuSubContent.vue"};const To={class:"flex flex-col gap-4"},Ro={class:"flex flex-wrap gap-4"},Eo={class:"mt-4 flex flex-wrap gap-4"},gn=f({__name:"DropdownMenuInsideDialogExample",props:{overlayControl:{}},setup(t){return(o,n)=>(m(),y(dt,{"overlay-control":t.overlayControl},{default:r(()=>[u(Zn,{class:"h-[500px] w-[600px]"},{default:r(()=>[u(et,null,{default:r(()=>[u(nt,null,{default:r(()=>[...n[0]||(n[0]=[_("Dialog 내부의 DropdownMenu",-1)])]),_:1}),u(tt,null,{default:r(()=>[...n[1]||(n[1]=[_(" Dialog 내부에서 DropdownMenu를 사용하면 DialogBody 영역을 벗어나지 않도록 자동으로 위치가 조정됩니다. ",-1)])]),_:1})]),_:1}),u(ot,null,{default:r(()=>[D("div",To,[n[18]||(n[18]=D("p",{class:"text-gray-700"}," 아래 버튼들을 클릭하면 DropdownMenu가 열립니다. DropdownMenu는 DialogBody 영역을 벗어나지 않습니다. ",-1)),n[19]||(n[19]=D("p",{class:"text-gray-700"}," 아래 버튼들을 클릭하면 DropdownMenu가 열립니다. DropdownMenu는 DialogBody 영역을 벗어나지 않습니다. ",-1)),n[20]||(n[20]=D("p",{class:"text-gray-700"}," 아래 버튼들을 클릭하면 DropdownMenu가 열립니다. DropdownMenu는 DialogBody 영역을 벗어나지 않습니다. ",-1)),D("div",Ro,[u(e(O),null,{default:r(()=>[u(e(P),{"as-child":""},{default:r(()=>[u(e(B),{variant:"filled",color:"primary",size:"sm"},{default:r(()=>[...n[2]||(n[2]=[_(" 상단 좌측 ",-1)])]),_:1})]),_:1}),u(e(T),{class:"w-56"},{default:r(()=>[u(e(C),null,{default:r(()=>[u(e(Y)),n[3]||(n[3]=_(" 편집 ",-1))]),_:1}),u(e(C),null,{default:r(()=>[u(e(A)),n[4]||(n[4]=_(" 복사 ",-1))]),_:1}),u(e(E)),u(e(C),{variant:"destructive"},{default:r(()=>[u(e(X)),n[5]||(n[5]=_(" 삭제 ",-1))]),_:1})]),_:1})]),_:1}),u(e(O),null,{default:r(()=>[u(e(P),{"as-child":""},{default:r(()=>[u(e(B),{variant:"outlined",color:"secondary",size:"sm"},{default:r(()=>[...n[6]||(n[6]=[_(" 상단 우측 ",-1)])]),_:1})]),_:1}),u(e(T),{class:"w-56",side:"right"},{default:r(()=>[u(e(C),null,{default:r(()=>[u(e(Y)),n[7]||(n[7]=_(" 편집 ",-1))]),_:1}),u(e(C),null,{default:r(()=>[u(e(A)),n[8]||(n[8]=_(" 복사 ",-1))]),_:1}),u(e(E)),u(e(C),{variant:"destructive"},{default:r(()=>[u(e(X)),n[9]||(n[9]=_(" 삭제 ",-1))]),_:1})]),_:1})]),_:1})]),D("div",Eo,[u(e(O),null,{default:r(()=>[u(e(P),{"as-child":""},{default:r(()=>[u(e(B),{variant:"filled",color:"primary",size:"sm"},{default:r(()=>[...n[10]||(n[10]=[_(" 하단 좌측 ",-1)])]),_:1})]),_:1}),u(e(T),{class:"w-56"},{default:r(()=>[u(e(C),null,{default:r(()=>[u(e(Y)),n[11]||(n[11]=_(" 편집 ",-1))]),_:1}),u(e(C),null,{default:r(()=>[u(e(A)),n[12]||(n[12]=_(" 복사 ",-1))]),_:1}),u(e(E)),u(e(C),{variant:"destructive"},{default:r(()=>[u(e(X)),n[13]||(n[13]=_(" 삭제 ",-1))]),_:1})]),_:1})]),_:1}),u(e(O),null,{default:r(()=>[u(e(P),{"as-child":""},{default:r(()=>[u(e(B),{variant:"outlined",color:"secondary",size:"sm"},{default:r(()=>[...n[14]||(n[14]=[_(" 하단 우측 ",-1)])]),_:1})]),_:1}),u(e(T),{class:"w-56",side:"right"},{default:r(()=>[u(e(C),null,{default:r(()=>[u(e(Y)),n[15]||(n[15]=_(" 편집 ",-1))]),_:1}),u(e(C),null,{default:r(()=>[u(e(A)),n[16]||(n[16]=_(" 복사 ",-1))]),_:1}),u(e(E)),u(e(C),{variant:"destructive"},{default:r(()=>[u(e(X)),n[17]||(n[17]=_(" 삭제 ",-1))]),_:1})]),_:1})]),_:1})]),n[21]||(n[21]=D("div",{class:"space-y-4"},[D("div",{class:"rounded-md border border-gray-200 bg-gray-50 p-4"},[D("h3",{class:"mb-2 font-semibold text-gray-900"},"CollisionBoundary 동작 방식"),D("p",{class:"text-sm text-gray-600"}," DropdownMenuContent는 DialogBody 요소를 자동으로 감지하여 collisionBoundary로 설정합니다. 이를 통해 메뉴가 Dialog 영역을 벗어나지 않도록 자동으로 위치가 조정됩니다. ")]),D("div",{class:"rounded-md border border-gray-200 bg-gray-50 p-4"},[D("h3",{class:"mb-2 font-semibold text-gray-900"},"자동 위치 조정"),D("p",{class:"text-sm text-gray-600"}," Dialog의 경계 근처에서 DropdownMenu를 열면, 메뉴가 자동으로 반대편으로 열리거나 크기가 조정되어 항상 보이는 영역 내에 유지됩니다. ")]),D("div",{class:"rounded-md border border-gray-200 bg-gray-50 p-4"},[D("h3",{class:"mb-2 font-semibold text-gray-900"},"스크롤 가능한 영역"),D("p",{class:"text-sm text-gray-600"}," DialogBody가 스크롤 가능한 경우에도 DropdownMenu는 정상적으로 작동합니다. 스크롤 시 메뉴의 위치도 함께 업데이트됩니다. ")]),D("div",{class:"rounded-md border border-gray-200 bg-gray-50 p-4"},[D("h3",{class:"mb-2 font-semibold text-gray-900"},"다양한 메뉴 옵션"),D("p",{class:"text-sm text-gray-600"}," DropdownMenu는 기본 아이템뿐만 아니라 체크박스 아이템, 라디오 아이템, 서브메뉴 등 다양한 옵션을 지원합니다. ")]),D("div",{class:"rounded-md border border-gray-200 bg-gray-50 p-4"},[D("h3",{class:"mb-2 font-semibold text-gray-900"},"접근성 지원"),D("p",{class:"text-sm text-gray-600"}," 키보드 네비게이션(화살표 키, Enter, Escape 등)과 스크린 리더를 완벽하게 지원합니다. ARIA 속성이 자동으로 추가됩니다. ")])],-1))])]),_:1}),u(at,null,{default:r(()=>[u(rt,null,{default:r(()=>[...n[22]||(n[22]=[_("취소",-1)])]),_:1}),u(st,null,{default:r(()=>[u(it,null,{default:r(()=>[...n[23]||(n[23]=[_("확인",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["overlay-control"]))}});gn.__docgenInfo={exportName:"default",displayName:"DropdownMenuInsideDialogExample",type:1,props:[{name:"overlayControl",global:!1,description:"",tags:[],required:!0,type:"OverlayControllerProps",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"overlayControl",type:"OverlayControllerProps",description:"",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dropdown-menu/stories/DropdownMenuInsideDialogExample.vue"};const ua={title:"Shared/UI/DropdownMenu",component:O,parameters:{layout:"centered",docs:{description:{component:`
### 드롭다운 메뉴 컴포넌트

DropdownMenu 컴포넌트는 버튼이나 트리거 요소를 클릭하면 나타나는 메뉴를 제공합니다.
Reka UI의 DropdownMenu 프리미티브를 기반으로 구현되었습니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`DropdownMenu\`, \`DropdownMenuTrigger\`, \`DropdownMenuContent\`, \`DropdownMenuItem\` 등으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **다양한 아이템 타입**: Item, CheckboxItem, RadioItem, SubMenu 등 지원
- **구분선 및 라벨**: \`DropdownMenuSeparator\`, \`DropdownMenuLabel\`로 메뉴 구조화
- **단축키 표시**: \`DropdownMenuShortcut\`을 통해 키보드 단축키 표시 가능
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능
- **variant 지원**: \`destructive\` variant를 통해 위험한 액션 강조 가능

## 사용 예시

\`\`\`vue
<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <Button>메뉴 열기</Button>
    </DropdownMenuTrigger>
    <DropdownMenuContent>
      <DropdownMenuItem>항목 1</DropdownMenuItem>
      <DropdownMenuItem>항목 2</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
\`\`\`
        `}}},tags:["autodocs"]},ie={name:"기본 메뉴",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,Button:B},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 드롭다운 메뉴</h3>
          <p class="text-xs text-gray-500">버튼을 클릭하면 드롭다운 메뉴가 표시됩니다.</p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},de={name:"아이콘과 함께",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuSeparator:E,Button:B,EditIcon:Y,CopyIcon:A,Trash2Icon:X,MoreVerticalIcon:Ze},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 함께 사용</h3>
          <p class="text-xs text-gray-500">
            메뉴 항목에 아이콘을 추가하여 시각적으로 구분할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <EditIcon />
                  편집
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},le={name:"단축키 표시",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuSeparator:E,DropdownMenuShortcut:Te,Button:B,PlusIcon:en,FolderIcon:Se,CopyIcon:A},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">단축키 표시</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuShortcut을 사용하여 키보드 단축키를 표시할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">파일 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <PlusIcon />
                  새 파일
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FolderIcon />
                  폴더 열기
                  <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  붙여넣기
                  <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},pe={name:"라벨과 구분선",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuLabel:ne,DropdownMenuSeparator:E,Button:B,UserIcon:Qe,SettingsIcon:Ye,LogOutIcon:Xe},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">라벨과 구분선</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuLabel과 DropdownMenuSeparator를 사용하여 메뉴를 구조화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuLabel class="text-gray-1 text-sm">내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  프로필
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  설정
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},ue={name:"그룹화",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuLabel:ne,DropdownMenuGroup:cn,DropdownMenuSeparator:E,Button:B,FileIcon:lt,FolderIcon:Se,EditIcon:Y,CopyIcon:A},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">그룹화</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuGroup을 사용하여 관련된 메뉴 항목을 그룹화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">그룹화된 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>파일</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <FileIcon />
                    새 파일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderIcon />
                    폴더 열기
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>편집</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <EditIcon />
                    편집
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    복사
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},ce={name:"체크박스 아이템",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuCheckboxItem:mn,DropdownMenuLabel:ne,DropdownMenuSeparator:E,Button:B},setup(){const t=x(!0),o=x(!1),n=x(!1);return{showStatusBar:t,showActivityBar:o,showPanel:n}},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outlined" color="secondary">체크박스 메뉴</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>표시 옵션</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model="showStatusBar">
            상태 표시줄
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showActivityBar" :disabled="true">
            활동 표시줄
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showPanel">
            패널
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    `})},me={name:"라디오 아이템",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuRadioGroup:yn,DropdownMenuRadioItem:fn,DropdownMenuLabel:ne,DropdownMenuSeparator:E,Button:B},setup(){return{position:x("bottom")}},template:`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outlined" color="secondary">라디오 메뉴</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>위치</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">위</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">아래</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">왼쪽</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">오른쪽</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    `})},ye={name:"서브메뉴",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuSeparator:E,DropdownMenuSub:Re,DropdownMenuSubTrigger:Ee,DropdownMenuSubContent:Ve,Button:B,PlusIcon:en,FolderIcon:Se,ShareIcon:nn,CopyIcon:A,DownloadIcon:Je,Trash2Icon:X},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">서브메뉴</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuSub를 사용하여 중첩된 메뉴를 만들 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">서브메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <PlusIcon />
                  새로 만들기
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FolderIcon />
                  열기
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ShareIcon />
                    공유
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <CopyIcon />
                      링크 복사
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DownloadIcon />
                      다운로드
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>더보기...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},fe={name:"비활성화 항목",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuSeparator:E,Button:B},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">비활성화된 항목</h3>
          <p class="text-xs text-gray-500">
            disabled prop을 사용하여 메뉴 항목을 비활성화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>활성화된 항목</DropdownMenuItem>
                <DropdownMenuItem :disabled="true">비활성화된 항목</DropdownMenuItem>
                <DropdownMenuItem>활성화된 항목</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem :disabled="true">비활성화된 항목</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},ge={name:"위험한 액션",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuSeparator:E,Button:B,EditIcon:Y,CopyIcon:A,Trash2Icon:X,MoreVerticalIcon:Ze},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">위험한 액션</h3>
          <p class="text-xs text-gray-500">
            variant="destructive"를 사용하여 위험한 액션을 강조할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <EditIcon />
                  편집
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},he={name:"Inset 항목",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuLabel:ne,Button:B},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inset 항목</h3>
          <p class="text-xs text-gray-500">
            inset prop을 사용하여 메뉴 항목을 들여쓰기할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">Inset 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>일반 항목</DropdownMenuItem>
                <DropdownMenuItem :inset="true">들여쓰기된 항목</DropdownMenuItem>
                <DropdownMenuLabel :inset="true">들여쓰기된 라벨</DropdownMenuLabel>
                <DropdownMenuItem :inset="true">들여쓰기된 항목 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},we={name:"복합 예시",render:()=>({components:{DropdownMenu:O,DropdownMenuTrigger:P,DropdownMenuContent:T,DropdownMenuItem:C,DropdownMenuLabel:ne,DropdownMenuSeparator:E,DropdownMenuShortcut:Te,DropdownMenuSub:Re,DropdownMenuSubTrigger:Ee,DropdownMenuSubContent:Ve,Button:B,UserIcon:Qe,SettingsIcon:Ye,ShareIcon:nn,CopyIcon:A,DownloadIcon:Je,LogOutIcon:Xe},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">복합 예시</h3>
          <p class="text-xs text-gray-500">다양한 기능을 조합한 실제 사용 예시입니다.</p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">
                  <UserIcon />
                  사용자 메뉴
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  프로필
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  설정
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ShareIcon />
                    공유 옵션
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <CopyIcon />
                      링크 복사
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DownloadIcon />
                      다운로드
                    </DropdownMenuItem>
                    <DropdownMenuItem :disabled="true">소셜 미디어 (준비중)</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOutIcon />
                  로그아웃
                  <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    `})},be={name:"다이얼로그 내부",parameters:{docs:{description:{story:`
Dialog 내부에서 DropdownMenu를 사용할 때, DropdownMenuContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 DropdownMenu가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: DropdownMenuContent가 렌더링된 가장 가까운 부모에서 \`data-slot="dialog-body"\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.

**주요 동작**:
- DropdownMenu가 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 DropdownMenu를 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
- 서브메뉴도 DialogBody 영역을 벗어나지 않음
        `}}},render:()=>({components:{Button:B},setup(){return{handleOpen:()=>{qn.open(o=>Sn(gn,{overlayControl:o}))}}},template:`
      <Button @click="handleOpen">Dialog 열기 (DropdownMenu 포함)</Button>
    `})};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
  name: '기본 메뉴',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      Button
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 드롭다운 메뉴</h3>
          <p class="text-xs text-gray-500">버튼을 클릭하면 드롭다운 메뉴가 표시됩니다.</p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>프로필</DropdownMenuItem>
                <DropdownMenuItem>설정</DropdownMenuItem>
                <DropdownMenuItem>로그아웃</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...ie.parameters?.docs?.source}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
  name: '아이콘과 함께',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      Button,
      EditIcon,
      CopyIcon,
      Trash2Icon,
      MoreVerticalIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 함께 사용</h3>
          <p class="text-xs text-gray-500">
            메뉴 항목에 아이콘을 추가하여 시각적으로 구분할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <EditIcon />
                  편집
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...de.parameters?.docs?.source}}};le.parameters={...le.parameters,docs:{...le.parameters?.docs,source:{originalSource:`{
  name: '단축키 표시',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      Button,
      PlusIcon,
      FolderIcon,
      CopyIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">단축키 표시</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuShortcut을 사용하여 키보드 단축키를 표시할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">파일 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <PlusIcon />
                  새 파일
                  <DropdownMenuShortcut>⌘N</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FolderIcon />
                  폴더 열기
                  <DropdownMenuShortcut>⌘O</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                  <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  붙여넣기
                  <DropdownMenuShortcut>⌘V</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...le.parameters?.docs?.source}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
  name: '라벨과 구분선',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button,
      UserIcon,
      SettingsIcon,
      LogOutIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">라벨과 구분선</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuLabel과 DropdownMenuSeparator를 사용하여 메뉴를 구조화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuLabel class="text-gray-1 text-sm">내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  프로필
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  설정
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon />
                  로그아웃
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...pe.parameters?.docs?.source}}};ue.parameters={...ue.parameters,docs:{...ue.parameters?.docs,source:{originalSource:`{
  name: '그룹화',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuGroup,
      DropdownMenuSeparator,
      Button,
      FileIcon,
      FolderIcon,
      EditIcon,
      CopyIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">그룹화</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuGroup을 사용하여 관련된 메뉴 항목을 그룹화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">그룹화된 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>파일</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <FileIcon />
                    새 파일
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <FolderIcon />
                    폴더 열기
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuLabel>편집</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <EditIcon />
                    편집
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <CopyIcon />
                    복사
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...ue.parameters?.docs?.source}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
  name: '체크박스 아이템',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuCheckboxItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button
    },
    setup() {
      const showStatusBar = ref(true);
      const showActivityBar = ref(false);
      const showPanel = ref(false);
      return {
        showStatusBar,
        showActivityBar,
        showPanel
      };
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outlined" color="secondary">체크박스 메뉴</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>표시 옵션</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuCheckboxItem v-model="showStatusBar">
            상태 표시줄
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showActivityBar" :disabled="true">
            활동 표시줄
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem v-model="showPanel">
            패널
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...ce.parameters?.docs?.source}}};me.parameters={...me.parameters,docs:{...me.parameters?.docs,source:{originalSource:`{
  name: '라디오 아이템',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuRadioGroup,
      DropdownMenuRadioItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      Button
    },
    setup() {
      const position = ref('bottom');
      return {
        position
      };
    },
    template: \`
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="outlined" color="secondary">라디오 메뉴</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56">
          <DropdownMenuLabel>위치</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuRadioGroup v-model="position">
            <DropdownMenuRadioItem value="top">위</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="bottom">아래</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="left">왼쪽</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="right">오른쪽</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    \`
  })
}`,...me.parameters?.docs?.source}}};ye.parameters={...ye.parameters,docs:{...ye.parameters?.docs,source:{originalSource:`{
  name: '서브메뉴',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
      Button,
      PlusIcon,
      FolderIcon,
      ShareIcon,
      CopyIcon,
      DownloadIcon,
      Trash2Icon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">서브메뉴</h3>
          <p class="text-xs text-gray-500">
            DropdownMenuSub를 사용하여 중첩된 메뉴를 만들 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">서브메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <PlusIcon />
                  새로 만들기
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FolderIcon />
                  열기
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ShareIcon />
                    공유
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <CopyIcon />
                      링크 복사
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DownloadIcon />
                      다운로드
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>더보기...</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...ye.parameters?.docs?.source}}};fe.parameters={...fe.parameters,docs:{...fe.parameters?.docs,source:{originalSource:`{
  name: '비활성화 항목',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      Button
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">비활성화된 항목</h3>
          <p class="text-xs text-gray-500">
            disabled prop을 사용하여 메뉴 항목을 비활성화할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">메뉴 열기</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>활성화된 항목</DropdownMenuItem>
                <DropdownMenuItem :disabled="true">비활성화된 항목</DropdownMenuItem>
                <DropdownMenuItem>활성화된 항목</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem :disabled="true">비활성화된 항목</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...fe.parameters?.docs?.source}}};ge.parameters={...ge.parameters,docs:{...ge.parameters?.docs,source:{originalSource:`{
  name: '위험한 액션',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuSeparator,
      Button,
      EditIcon,
      CopyIcon,
      Trash2Icon,
      MoreVerticalIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">위험한 액션</h3>
          <p class="text-xs text-gray-500">
            variant="destructive"를 사용하여 위험한 액션을 강조할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="outlined" color="secondary">
                  <MoreVerticalIcon />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>
                  <EditIcon />
                  편집
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CopyIcon />
                  복사
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <Trash2Icon />
                  삭제
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...ge.parameters?.docs?.source}}};he.parameters={...he.parameters,docs:{...he.parameters?.docs,source:{originalSource:`{
  name: 'Inset 항목',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      Button
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inset 항목</h3>
          <p class="text-xs text-gray-500">
            inset prop을 사용하여 메뉴 항목을 들여쓰기할 수 있습니다.
          </p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">Inset 메뉴</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuItem>일반 항목</DropdownMenuItem>
                <DropdownMenuItem :inset="true">들여쓰기된 항목</DropdownMenuItem>
                <DropdownMenuLabel :inset="true">들여쓰기된 라벨</DropdownMenuLabel>
                <DropdownMenuItem :inset="true">들여쓰기된 항목 2</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...he.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
  name: '복합 예시',
  render: () => ({
    components: {
      DropdownMenu,
      DropdownMenuTrigger,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuLabel,
      DropdownMenuSeparator,
      DropdownMenuShortcut,
      DropdownMenuSub,
      DropdownMenuSubTrigger,
      DropdownMenuSubContent,
      Button,
      UserIcon,
      SettingsIcon,
      ShareIcon,
      CopyIcon,
      DownloadIcon,
      LogOutIcon
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">복합 예시</h3>
          <p class="text-xs text-gray-500">다양한 기능을 조합한 실제 사용 예시입니다.</p>
          <div class="flex gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button variant="filled" color="primary">
                  <UserIcon />
                  사용자 메뉴
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent class="w-56">
                <DropdownMenuLabel>내 계정</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <UserIcon />
                  프로필
                  <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon />
                  설정
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <ShareIcon />
                    공유 옵션
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>
                      <CopyIcon />
                      링크 복사
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <DownloadIcon />
                      다운로드
                    </DropdownMenuItem>
                    <DropdownMenuItem :disabled="true">소셜 미디어 (준비중)</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem variant="destructive">
                  <LogOutIcon />
                  로그아웃
                  <DropdownMenuShortcut>⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    \`
  })
}`,...we.parameters?.docs?.source}}};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
  name: '다이얼로그 내부',
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에서 DropdownMenu를 사용할 때, DropdownMenuContent는 자동으로 DialogBody를 collisionBoundary로 인식합니다.
이를 통해 DropdownMenu가 Dialog 영역을 벗어나지 않도록 합니다.

**자동 collisionBoundary 감지**: DropdownMenuContent가 렌더링된 가장 가까운 부모에서 \\\`data-slot="dialog-body"\\\`를 가진 요소를 찾아 collisionBoundary로 설정합니다.

**주요 동작**:
- DropdownMenu가 DialogBody 영역을 벗어나지 않도록 자동 위치 조정
- Dialog의 경계 근처에 있는 버튼에 DropdownMenu를 표시해도 Dialog 밖으로 나가지 않음
- 스크롤 가능한 DialogBody 내부에서도 정상 동작
- 서브메뉴도 DialogBody 영역을 벗어나지 않음
        \`
      }
    }
  },
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleOpen = () => {
        overlay.open(overlayControl => h(DropdownMenuInsideDialogExample, {
          overlayControl
        }));
      };
      return {
        handleOpen
      };
    },
    template: \`
      <Button @click="handleOpen">Dialog 열기 (DropdownMenu 포함)</Button>
    \`
  })
}`,...be.parameters?.docs?.source}}};const ca=["BasicMenu","WithIcons","WithShortcuts","WithLabelsAndSeparators","WithGroups","CheckboxItems","RadioItems","WithSubMenu","DisabledItems","DestructiveVariant","InsetItems","ComplexExample","InsideDialog"];export{ie as BasicMenu,ce as CheckboxItems,we as ComplexExample,ge as DestructiveVariant,fe as DisabledItems,he as InsetItems,be as InsideDialog,me as RadioItems,ue as WithGroups,de as WithIcons,pe as WithLabelsAndSeparators,le as WithShortcuts,ye as WithSubMenu,ca as __namedExportsOrder,ua as default};
