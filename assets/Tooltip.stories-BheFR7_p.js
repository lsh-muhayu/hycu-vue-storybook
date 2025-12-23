import{r as E,C as Ve,e as B,L as Xe,d as S,h as F,Y as mt,i as V,o as O,w as R,u as C,c as Ae,m as G,A as qt,B as De,Z as le,$ as St,a0 as Ft,a1 as It,q as ne,E as gt,M as Re,N as _e,J as Lt,a2 as Nt,a3 as Mt,x as Vt,t as $t,l as zt,p as Ht,a4 as Wt,f as jt,g as Kt,I as Xt}from"./iframe-g1OyoVNp.js";import{a as Ct}from"./useForwardPropsEmits-D2o94REE.js";import{r as Yt,m as Ut,g as Gt,c as Pe,u as j,P as qe,n as Zt,o as ht,a as Jt,f as nt,b as Qt}from"./Primitive-Crv9Vuff.js";import{r as $e}from"./index-Cbbk3MOw.js";import{u as en}from"./useId-BXecDKyx.js";import{u as yt}from"./useForwardProps-CBu_UAql.js";import{D as tn,T as nn}from"./Teleport-CzGtg8n4.js";import{V as on}from"./VisuallyHidden-D484b0it.js";import{_ as he}from"./Button-Z6al3wqi.js";import{S as an,a as rn,C as sn,b as ln}from"./star-CJQSNoX-.js";import"./preload-helper-PPVm8Dsz.js";function un(e,n){const t=Yt(!1,300),o=E(null),i=Ut();function r(){o.value=null,t.value=!1}function a(l,u){const d=l.currentTarget,s={x:l.clientX,y:l.clientY},c=cn(s,d.getBoundingClientRect()),f=dn(s,c),p=pn(u.getBoundingClientRect()),m=mn([...f,...p]);o.value=m,t.value=!0}return Ve(l=>{if(e.value&&n.value){const u=s=>a(s,n.value),d=s=>a(s,e.value);e.value.addEventListener("pointerleave",u),n.value.addEventListener("pointerleave",d),l(()=>{e.value?.removeEventListener("pointerleave",u),n.value?.removeEventListener("pointerleave",d)})}}),Ve(l=>{if(o.value){const u=d=>{if(!o.value||!(d.target instanceof Element))return;const s=d.target,c={x:d.clientX,y:d.clientY},f=e.value?.contains(s)||n.value?.contains(s),p=!fn(c,o.value),m=!!s.closest("[data-grace-area-trigger]");f?r():(p||m)&&(r(),i.trigger())};e.value?.ownerDocument.addEventListener("pointermove",u),l(()=>e.value?.ownerDocument.removeEventListener("pointermove",u))}}),{isPointerInTransit:t,onPointerExit:i.on}}function cn(e,n){const t=Math.abs(n.top-e.y),o=Math.abs(n.bottom-e.y),i=Math.abs(n.right-e.x),r=Math.abs(n.left-e.x);switch(Math.min(t,o,i,r)){case r:return"left";case i:return"right";case t:return"top";case o:return"bottom";default:throw new Error("unreachable")}}function dn(e,n,t=5){const o=[];switch(n){case"top":o.push({x:e.x-t,y:e.y+t},{x:e.x+t,y:e.y+t});break;case"bottom":o.push({x:e.x-t,y:e.y-t},{x:e.x+t,y:e.y-t});break;case"left":o.push({x:e.x+t,y:e.y-t},{x:e.x+t,y:e.y+t});break;case"right":o.push({x:e.x-t,y:e.y-t},{x:e.x-t,y:e.y+t});break}return o}function pn(e){const{top:n,right:t,bottom:o,left:i}=e;return[{x:i,y:n},{x:t,y:n},{x:t,y:o},{x:i,y:o}]}function fn(e,n){const{x:t,y:o}=e;let i=!1;for(let r=0,a=n.length-1;r<n.length;a=r++){const l=n[r].x,u=n[r].y,d=n[a].x,s=n[a].y;u>o!=s>o&&t<(d-l)*(o-u)/(s-u)+l&&(i=!i)}return i}function mn(e){const n=e.slice();return n.sort((t,o)=>t.x<o.x?-1:t.x>o.x?1:t.y<o.y?-1:t.y>o.y?1:0),gn(n)}function gn(e){if(e.length<=1)return e.slice();const n=[];for(let o=0;o<e.length;o++){const i=e[o];for(;n.length>=2;){const r=n[n.length-1],a=n[n.length-2];if((r.x-a.x)*(i.y-a.y)>=(r.y-a.y)*(i.x-a.x))n.pop();else break}n.push(i)}n.pop();const t=[];for(let o=e.length-1;o>=0;o--){const i=e[o];for(;t.length>=2;){const r=t[t.length-1],a=t[t.length-2];if((r.x-a.x)*(i.y-a.y)>=(r.y-a.y)*(i.x-a.x))t.pop();else break}t.push(i)}return t.pop(),n.length===1&&t.length===1&&n[0].x===t[0].x&&n[0].y===t[0].y?n:n.concat(t)}function Cn(e){const n=E(),t=B(()=>n.value?.width??0),o=B(()=>n.value?.height??0);return Xe(()=>{const i=Gt(e);if(i){n.value={width:i.offsetWidth,height:i.offsetHeight};const r=new ResizeObserver(a=>{if(!Array.isArray(a)||!a.length)return;const l=a[0];let u,d;if("borderBoxSize"in l){const s=l.borderBoxSize,c=Array.isArray(s)?s[0]:s;u=c.inlineSize,d=c.blockSize}else u=i.offsetWidth,d=i.offsetHeight;n.value={width:u,height:d}});return r.observe(i,{box:"border-box"}),()=>r.unobserve(i)}else n.value=void 0}),{width:t,height:o}}const[vt,hn]=Pe("PopperRoot");var yn=S({inheritAttrs:!1,__name:"PopperRoot",setup(e){const n=E();return hn({anchor:n,onAnchorChange:t=>n.value=t}),(t,o)=>F(t.$slots,"default")}}),vn=yn,bn=S({__name:"PopperAnchor",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},setup(e){const n=e,{forwardRef:t,currentElement:o}=j(),i=vt();return mt(()=>{i.onAnchorChange(n.reference??o.value)}),(r,a)=>(O(),V(C(qe),{ref:C(t),as:r.as,"as-child":r.asChild},{default:R(()=>[F(r.$slots,"default")]),_:3},8,["as","as-child"]))}}),xn=bn;const Tn={key:0,d:"M0 0L6 6L12 0"},wn={key:1,d:"M0 0L4.58579 4.58579C5.36683 5.36683 6.63316 5.36684 7.41421 4.58579L12 0"};var Bn=S({__name:"Arrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const n=e;return j(),(t,o)=>(O(),V(C(qe),G(n,{width:t.width,height:t.height,viewBox:t.asChild?void 0:"0 0 12 6",preserveAspectRatio:t.asChild?void 0:"none"}),{default:R(()=>[F(t.$slots,"default",{},()=>[t.rounded?(O(),Ae("path",wn)):(O(),Ae("path",Tn))])]),_:3},16,["width","height","viewBox","preserveAspectRatio"]))}}),Dn=Bn;function An(e){return e!==null}function Rn(e){return{name:"transformOrigin",options:e,fn(n){const{placement:t,rects:o,middlewareData:i}=n,a=i.arrow?.centerOffset!==0,l=a?0:e.arrowWidth,u=a?0:e.arrowHeight,[d,s]=ze(t),c={start:"0%",center:"50%",end:"100%"}[s],f=(i.arrow?.x??0)+l/2,p=(i.arrow?.y??0)+u/2;let m="",g="";return d==="bottom"?(m=a?c:`${f}px`,g=`${-u}px`):d==="top"?(m=a?c:`${f}px`,g=`${o.floating.height+u}px`):d==="right"?(m=`${-u}px`,g=a?c:`${p}px`):d==="left"&&(m=`${o.floating.width+u}px`,g=a?c:`${p}px`),{data:{x:m,y:g}}}}}function ze(e){const[n,t="center"]=e.split("-");return[n,t]}const _n=["top","right","bottom","left"],oe=Math.min,N=Math.max,ke=Math.round,ve=Math.floor,Y=e=>({x:e,y:e}),kn={left:"right",right:"left",bottom:"top",top:"bottom"},En={start:"end",end:"start"};function He(e,n,t){return N(e,oe(n,t))}function Q(e,n){return typeof e=="function"?e(n):e}function ee(e){return e.split("-")[0]}function pe(e){return e.split("-")[1]}function Ye(e){return e==="x"?"y":"x"}function Ue(e){return e==="y"?"height":"width"}const On=new Set(["top","bottom"]);function X(e){return On.has(ee(e))?"y":"x"}function Ge(e){return Ye(X(e))}function Pn(e,n,t){t===void 0&&(t=!1);const o=pe(e),i=Ge(e),r=Ue(i);let a=i==="x"?o===(t?"end":"start")?"right":"left":o==="start"?"bottom":"top";return n.reference[r]>n.floating[r]&&(a=Ee(a)),[a,Ee(a)]}function qn(e){const n=Ee(e);return[We(e),n,We(n)]}function We(e){return e.replace(/start|end/g,n=>En[n])}const ot=["left","right"],it=["right","left"],Sn=["top","bottom"],Fn=["bottom","top"];function In(e,n,t){switch(e){case"top":case"bottom":return t?n?it:ot:n?ot:it;case"left":case"right":return n?Sn:Fn;default:return[]}}function Ln(e,n,t,o){const i=pe(e);let r=In(ee(e),t==="start",o);return i&&(r=r.map(a=>a+"-"+i),n&&(r=r.concat(r.map(We)))),r}function Ee(e){return e.replace(/left|right|bottom|top/g,n=>kn[n])}function Nn(e){return{top:0,right:0,bottom:0,left:0,...e}}function bt(e){return typeof e!="number"?Nn(e):{top:e,right:e,bottom:e,left:e}}function Oe(e){const{x:n,y:t,width:o,height:i}=e;return{width:o,height:i,top:t,left:n,right:n+o,bottom:t+i,x:n,y:t}}function at(e,n,t){let{reference:o,floating:i}=e;const r=X(n),a=Ge(n),l=Ue(a),u=ee(n),d=r==="y",s=o.x+o.width/2-i.width/2,c=o.y+o.height/2-i.height/2,f=o[l]/2-i[l]/2;let p;switch(u){case"top":p={x:s,y:o.y-i.height};break;case"bottom":p={x:s,y:o.y+o.height};break;case"right":p={x:o.x+o.width,y:c};break;case"left":p={x:o.x-i.width,y:c};break;default:p={x:o.x,y:o.y}}switch(pe(n)){case"start":p[a]-=f*(t&&d?-1:1);break;case"end":p[a]+=f*(t&&d?-1:1);break}return p}const Mn=async(e,n,t)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:a}=t,l=r.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(n));let d=await a.getElementRects({reference:e,floating:n,strategy:i}),{x:s,y:c}=at(d,o,u),f=o,p={},m=0;for(let g=0;g<l.length;g++){const{name:h,fn:y}=l[g],{x:b,y:v,data:w,reset:x}=await y({x:s,y:c,initialPlacement:o,placement:f,strategy:i,middlewareData:p,rects:d,platform:a,elements:{reference:e,floating:n}});s=b??s,c=v??c,p={...p,[h]:{...p[h],...w}},x&&m<=50&&(m++,typeof x=="object"&&(x.placement&&(f=x.placement),x.rects&&(d=x.rects===!0?await a.getElementRects({reference:e,floating:n,strategy:i}):x.rects),{x:s,y:c}=at(d,f,u)),g=-1)}return{x:s,y:c,placement:f,strategy:i,middlewareData:p}};async function ge(e,n){var t;n===void 0&&(n={});const{x:o,y:i,platform:r,rects:a,elements:l,strategy:u}=e,{boundary:d="clippingAncestors",rootBoundary:s="viewport",elementContext:c="floating",altBoundary:f=!1,padding:p=0}=Q(n,e),m=bt(p),h=l[f?c==="floating"?"reference":"floating":c],y=Oe(await r.getClippingRect({element:(t=await(r.isElement==null?void 0:r.isElement(h)))==null||t?h:h.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:d,rootBoundary:s,strategy:u})),b=c==="floating"?{x:o,y:i,width:a.floating.width,height:a.floating.height}:a.reference,v=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),w=await(r.isElement==null?void 0:r.isElement(v))?await(r.getScale==null?void 0:r.getScale(v))||{x:1,y:1}:{x:1,y:1},x=Oe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:b,offsetParent:v,strategy:u}):b);return{top:(y.top-x.top+m.top)/w.y,bottom:(x.bottom-y.bottom+m.bottom)/w.y,left:(y.left-x.left+m.left)/w.x,right:(x.right-y.right+m.right)/w.x}}const Vn=e=>({name:"arrow",options:e,async fn(n){const{x:t,y:o,placement:i,rects:r,platform:a,elements:l,middlewareData:u}=n,{element:d,padding:s=0}=Q(e,n)||{};if(d==null)return{};const c=bt(s),f={x:t,y:o},p=Ge(i),m=Ue(p),g=await a.getDimensions(d),h=p==="y",y=h?"top":"left",b=h?"bottom":"right",v=h?"clientHeight":"clientWidth",w=r.reference[m]+r.reference[p]-f[p]-r.floating[m],x=f[p]-r.reference[p],_=await(a.getOffsetParent==null?void 0:a.getOffsetParent(d));let T=_?_[v]:0;(!T||!await(a.isElement==null?void 0:a.isElement(_)))&&(T=l.floating[v]||r.floating[m]);const D=w/2-x/2,P=T/2-g[m]/2-1,I=oe(c[y],P),K=oe(c[b],P),A=I,$=T-g[m]-K,k=T/2-g[m]/2+D,J=He(A,k,$),z=!u.arrow&&pe(i)!=null&&k!==J&&r.reference[m]/2-(k<A?I:K)-g[m]/2<0,L=z?k<A?k-A:k-$:0;return{[p]:f[p]+L,data:{[p]:J,centerOffset:k-J-L,...z&&{alignmentOffset:L}},reset:z}}}),$n=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(n){var t,o;const{placement:i,middlewareData:r,rects:a,initialPlacement:l,platform:u,elements:d}=n,{mainAxis:s=!0,crossAxis:c=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:g=!0,...h}=Q(e,n);if((t=r.arrow)!=null&&t.alignmentOffset)return{};const y=ee(i),b=X(l),v=ee(l)===l,w=await(u.isRTL==null?void 0:u.isRTL(d.floating)),x=f||(v||!g?[Ee(l)]:qn(l)),_=m!=="none";!f&&_&&x.push(...Ln(l,g,m,w));const T=[l,...x],D=await ge(n,h),P=[];let I=((o=r.flip)==null?void 0:o.overflows)||[];if(s&&P.push(D[y]),c){const k=Pn(i,a,w);P.push(D[k[0]],D[k[1]])}if(I=[...I,{placement:i,overflows:P}],!P.every(k=>k<=0)){var K,A;const k=(((K=r.flip)==null?void 0:K.index)||0)+1,J=T[k];if(J&&(!(c==="alignment"?b!==X(J):!1)||I.every(q=>X(q.placement)===b?q.overflows[0]>0:!0)))return{data:{index:k,overflows:I},reset:{placement:J}};let z=(A=I.filter(L=>L.overflows[0]<=0).sort((L,q)=>L.overflows[1]-q.overflows[1])[0])==null?void 0:A.placement;if(!z)switch(p){case"bestFit":{var $;const L=($=I.filter(q=>{if(_){const te=X(q.placement);return te===b||te==="y"}return!0}).map(q=>[q.placement,q.overflows.filter(te=>te>0).reduce((te,Pt)=>te+Pt,0)]).sort((q,te)=>q[1]-te[1])[0])==null?void 0:$[0];L&&(z=L);break}case"initialPlacement":z=l;break}if(i!==z)return{reset:{placement:z}}}return{}}}};function rt(e,n){return{top:e.top-n.height,right:e.right-n.width,bottom:e.bottom-n.height,left:e.left-n.width}}function st(e){return _n.some(n=>e[n]>=0)}const zn=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(n){const{rects:t}=n,{strategy:o="referenceHidden",...i}=Q(e,n);switch(o){case"referenceHidden":{const r=await ge(n,{...i,elementContext:"reference"}),a=rt(r,t.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:st(a)}}}case"escaped":{const r=await ge(n,{...i,altBoundary:!0}),a=rt(r,t.floating);return{data:{escapedOffsets:a,escaped:st(a)}}}default:return{}}}}},xt=new Set(["left","top"]);async function Hn(e,n){const{placement:t,platform:o,elements:i}=e,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),a=ee(t),l=pe(t),u=X(t)==="y",d=xt.has(a)?-1:1,s=r&&u?-1:1,c=Q(n,e);let{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof c=="number"?{mainAxis:c,crossAxis:0,alignmentAxis:null}:{mainAxis:c.mainAxis||0,crossAxis:c.crossAxis||0,alignmentAxis:c.alignmentAxis};return l&&typeof m=="number"&&(p=l==="end"?m*-1:m),u?{x:p*s,y:f*d}:{x:f*d,y:p*s}}const Wn=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(n){var t,o;const{x:i,y:r,placement:a,middlewareData:l}=n,u=await Hn(n,e);return a===((t=l.offset)==null?void 0:t.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+u.x,y:r+u.y,data:{...u,placement:a}}}}},jn=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(n){const{x:t,y:o,placement:i}=n,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:h=>{let{x:y,y:b}=h;return{x:y,y:b}}},...u}=Q(e,n),d={x:t,y:o},s=await ge(n,u),c=X(ee(i)),f=Ye(c);let p=d[f],m=d[c];if(r){const h=f==="y"?"top":"left",y=f==="y"?"bottom":"right",b=p+s[h],v=p-s[y];p=He(b,p,v)}if(a){const h=c==="y"?"top":"left",y=c==="y"?"bottom":"right",b=m+s[h],v=m-s[y];m=He(b,m,v)}const g=l.fn({...n,[f]:p,[c]:m});return{...g,data:{x:g.x-t,y:g.y-o,enabled:{[f]:r,[c]:a}}}}}},Kn=function(e){return e===void 0&&(e={}),{options:e,fn(n){const{x:t,y:o,placement:i,rects:r,middlewareData:a}=n,{offset:l=0,mainAxis:u=!0,crossAxis:d=!0}=Q(e,n),s={x:t,y:o},c=X(i),f=Ye(c);let p=s[f],m=s[c];const g=Q(l,n),h=typeof g=="number"?{mainAxis:g,crossAxis:0}:{mainAxis:0,crossAxis:0,...g};if(u){const v=f==="y"?"height":"width",w=r.reference[f]-r.floating[v]+h.mainAxis,x=r.reference[f]+r.reference[v]-h.mainAxis;p<w?p=w:p>x&&(p=x)}if(d){var y,b;const v=f==="y"?"width":"height",w=xt.has(ee(i)),x=r.reference[c]-r.floating[v]+(w&&((y=a.offset)==null?void 0:y[c])||0)+(w?0:h.crossAxis),_=r.reference[c]+r.reference[v]+(w?0:((b=a.offset)==null?void 0:b[c])||0)-(w?h.crossAxis:0);m<x?m=x:m>_&&(m=_)}return{[f]:p,[c]:m}}}},Xn=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(n){var t,o;const{placement:i,rects:r,platform:a,elements:l}=n,{apply:u=()=>{},...d}=Q(e,n),s=await ge(n,d),c=ee(i),f=pe(i),p=X(i)==="y",{width:m,height:g}=r.floating;let h,y;c==="top"||c==="bottom"?(h=c,y=f===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(y=c,h=f==="end"?"top":"bottom");const b=g-s.top-s.bottom,v=m-s.left-s.right,w=oe(g-s[h],b),x=oe(m-s[y],v),_=!n.middlewareData.shift;let T=w,D=x;if((t=n.middlewareData.shift)!=null&&t.enabled.x&&(D=v),(o=n.middlewareData.shift)!=null&&o.enabled.y&&(T=b),_&&!f){const I=N(s.left,0),K=N(s.right,0),A=N(s.top,0),$=N(s.bottom,0);p?D=m-2*(I!==0||K!==0?I+K:N(s.left,s.right)):T=g-2*(A!==0||$!==0?A+$:N(s.top,s.bottom))}await u({...n,availableWidth:D,availableHeight:T});const P=await a.getDimensions(l.floating);return m!==P.width||g!==P.height?{reset:{rects:!0}}:{}}}};function Se(){return typeof window<"u"}function re(e){return Ze(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var n;return(e==null||(n=e.ownerDocument)==null?void 0:n.defaultView)||window}function Z(e){var n;return(n=(Ze(e)?e.ownerDocument:e.document)||window.document)==null?void 0:n.documentElement}function Ze(e){return Se()?e instanceof Node||e instanceof M(e).Node:!1}function H(e){return Se()?e instanceof Element||e instanceof M(e).Element:!1}function U(e){return Se()?e instanceof HTMLElement||e instanceof M(e).HTMLElement:!1}function lt(e){return!Se()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}const Yn=new Set(["inline","contents"]);function ye(e){const{overflow:n,overflowX:t,overflowY:o,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(n+o+t)&&!Yn.has(i)}const Un=new Set(["table","td","th"]);function Gn(e){return Un.has(re(e))}const Zn=[":popover-open",":modal"];function Fe(e){return Zn.some(n=>{try{return e.matches(n)}catch{return!1}})}const Jn=["transform","translate","scale","rotate","perspective"],Qn=["transform","translate","scale","rotate","perspective","filter"],eo=["paint","layout","strict","content"];function Je(e){const n=Qe(),t=H(e)?W(e):e;return Jn.some(o=>t[o]?t[o]!=="none":!1)||(t.containerType?t.containerType!=="normal":!1)||!n&&(t.backdropFilter?t.backdropFilter!=="none":!1)||!n&&(t.filter?t.filter!=="none":!1)||Qn.some(o=>(t.willChange||"").includes(o))||eo.some(o=>(t.contain||"").includes(o))}function to(e){let n=ie(e);for(;U(n)&&!de(n);){if(Je(n))return n;if(Fe(n))return null;n=ie(n)}return null}function Qe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const no=new Set(["html","body","#document"]);function de(e){return no.has(re(e))}function W(e){return M(e).getComputedStyle(e)}function Ie(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ie(e){if(re(e)==="html")return e;const n=e.assignedSlot||e.parentNode||lt(e)&&e.host||Z(e);return lt(n)?n.host:n}function Tt(e){const n=ie(e);return de(n)?e.ownerDocument?e.ownerDocument.body:e.body:U(n)&&ye(n)?n:Tt(n)}function Ce(e,n,t){var o;n===void 0&&(n=[]),t===void 0&&(t=!0);const i=Tt(e),r=i===((o=e.ownerDocument)==null?void 0:o.body),a=M(i);if(r){const l=je(a);return n.concat(a,a.visualViewport||[],ye(i)?i:[],l&&t?Ce(l):[])}return n.concat(i,Ce(i,[],t))}function je(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function wt(e){const n=W(e);let t=parseFloat(n.width)||0,o=parseFloat(n.height)||0;const i=U(e),r=i?e.offsetWidth:t,a=i?e.offsetHeight:o,l=ke(t)!==r||ke(o)!==a;return l&&(t=r,o=a),{width:t,height:o,$:l}}function et(e){return H(e)?e:e.contextElement}function ce(e){const n=et(e);if(!U(n))return Y(1);const t=n.getBoundingClientRect(),{width:o,height:i,$:r}=wt(n);let a=(r?ke(t.width):t.width)/o,l=(r?ke(t.height):t.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const oo=Y(0);function Bt(e){const n=M(e);return!Qe()||!n.visualViewport?oo:{x:n.visualViewport.offsetLeft,y:n.visualViewport.offsetTop}}function io(e,n,t){return n===void 0&&(n=!1),!t||n&&t!==M(e)?!1:n}function ae(e,n,t,o){n===void 0&&(n=!1),t===void 0&&(t=!1);const i=e.getBoundingClientRect(),r=et(e);let a=Y(1);n&&(o?H(o)&&(a=ce(o)):a=ce(e));const l=io(r,t,o)?Bt(r):Y(0);let u=(i.left+l.x)/a.x,d=(i.top+l.y)/a.y,s=i.width/a.x,c=i.height/a.y;if(r){const f=M(r),p=o&&H(o)?M(o):o;let m=f,g=je(m);for(;g&&o&&p!==m;){const h=ce(g),y=g.getBoundingClientRect(),b=W(g),v=y.left+(g.clientLeft+parseFloat(b.paddingLeft))*h.x,w=y.top+(g.clientTop+parseFloat(b.paddingTop))*h.y;u*=h.x,d*=h.y,s*=h.x,c*=h.y,u+=v,d+=w,m=M(g),g=je(m)}}return Oe({width:s,height:c,x:u,y:d})}function Le(e,n){const t=Ie(e).scrollLeft;return n?n.left+t:ae(Z(e)).left+t}function Dt(e,n){const t=e.getBoundingClientRect(),o=t.left+n.scrollLeft-Le(e,t),i=t.top+n.scrollTop;return{x:o,y:i}}function ao(e){let{elements:n,rect:t,offsetParent:o,strategy:i}=e;const r=i==="fixed",a=Z(o),l=n?Fe(n.floating):!1;if(o===a||l&&r)return t;let u={scrollLeft:0,scrollTop:0},d=Y(1);const s=Y(0),c=U(o);if((c||!c&&!r)&&((re(o)!=="body"||ye(a))&&(u=Ie(o)),U(o))){const p=ae(o);d=ce(o),s.x=p.x+o.clientLeft,s.y=p.y+o.clientTop}const f=a&&!c&&!r?Dt(a,u):Y(0);return{width:t.width*d.x,height:t.height*d.y,x:t.x*d.x-u.scrollLeft*d.x+s.x+f.x,y:t.y*d.y-u.scrollTop*d.y+s.y+f.y}}function ro(e){return Array.from(e.getClientRects())}function so(e){const n=Z(e),t=Ie(e),o=e.ownerDocument.body,i=N(n.scrollWidth,n.clientWidth,o.scrollWidth,o.clientWidth),r=N(n.scrollHeight,n.clientHeight,o.scrollHeight,o.clientHeight);let a=-t.scrollLeft+Le(e);const l=-t.scrollTop;return W(o).direction==="rtl"&&(a+=N(n.clientWidth,o.clientWidth)-i),{width:i,height:r,x:a,y:l}}const ut=25;function lo(e,n){const t=M(e),o=Z(e),i=t.visualViewport;let r=o.clientWidth,a=o.clientHeight,l=0,u=0;if(i){r=i.width,a=i.height;const s=Qe();(!s||s&&n==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}const d=Le(o);if(d<=0){const s=o.ownerDocument,c=s.body,f=getComputedStyle(c),p=s.compatMode==="CSS1Compat"&&parseFloat(f.marginLeft)+parseFloat(f.marginRight)||0,m=Math.abs(o.clientWidth-c.clientWidth-p);m<=ut&&(r-=m)}else d<=ut&&(r+=d);return{width:r,height:a,x:l,y:u}}const uo=new Set(["absolute","fixed"]);function co(e,n){const t=ae(e,!0,n==="fixed"),o=t.top+e.clientTop,i=t.left+e.clientLeft,r=U(e)?ce(e):Y(1),a=e.clientWidth*r.x,l=e.clientHeight*r.y,u=i*r.x,d=o*r.y;return{width:a,height:l,x:u,y:d}}function ct(e,n,t){let o;if(n==="viewport")o=lo(e,t);else if(n==="document")o=so(Z(e));else if(H(n))o=co(n,t);else{const i=Bt(e);o={x:n.x-i.x,y:n.y-i.y,width:n.width,height:n.height}}return Oe(o)}function At(e,n){const t=ie(e);return t===n||!H(t)||de(t)?!1:W(t).position==="fixed"||At(t,n)}function po(e,n){const t=n.get(e);if(t)return t;let o=Ce(e,[],!1).filter(l=>H(l)&&re(l)!=="body"),i=null;const r=W(e).position==="fixed";let a=r?ie(e):e;for(;H(a)&&!de(a);){const l=W(a),u=Je(a);!u&&l.position==="fixed"&&(i=null),(r?!u&&!i:!u&&l.position==="static"&&!!i&&uo.has(i.position)||ye(a)&&!u&&At(e,a))?o=o.filter(s=>s!==a):i=l,a=ie(a)}return n.set(e,o),o}function fo(e){let{element:n,boundary:t,rootBoundary:o,strategy:i}=e;const a=[...t==="clippingAncestors"?Fe(n)?[]:po(n,this._c):[].concat(t),o],l=a[0],u=a.reduce((d,s)=>{const c=ct(n,s,i);return d.top=N(c.top,d.top),d.right=oe(c.right,d.right),d.bottom=oe(c.bottom,d.bottom),d.left=N(c.left,d.left),d},ct(n,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function mo(e){const{width:n,height:t}=wt(e);return{width:n,height:t}}function go(e,n,t){const o=U(n),i=Z(n),r=t==="fixed",a=ae(e,!0,r,n);let l={scrollLeft:0,scrollTop:0};const u=Y(0);function d(){u.x=Le(i)}if(o||!o&&!r)if((re(n)!=="body"||ye(i))&&(l=Ie(n)),o){const p=ae(n,!0,r,n);u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}else i&&d();r&&!o&&i&&d();const s=i&&!o&&!r?Dt(i,l):Y(0),c=a.left+l.scrollLeft-u.x-s.x,f=a.top+l.scrollTop-u.y-s.y;return{x:c,y:f,width:a.width,height:a.height}}function Me(e){return W(e).position==="static"}function dt(e,n){if(!U(e)||W(e).position==="fixed")return null;if(n)return n(e);let t=e.offsetParent;return Z(e)===t&&(t=t.ownerDocument.body),t}function Rt(e,n){const t=M(e);if(Fe(e))return t;if(!U(e)){let i=ie(e);for(;i&&!de(i);){if(H(i)&&!Me(i))return i;i=ie(i)}return t}let o=dt(e,n);for(;o&&Gn(o)&&Me(o);)o=dt(o,n);return o&&de(o)&&Me(o)&&!Je(o)?t:o||to(e)||t}const Co=async function(e){const n=this.getOffsetParent||Rt,t=this.getDimensions,o=await t(e.floating);return{reference:go(e.reference,await n(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ho(e){return W(e).direction==="rtl"}const yo={convertOffsetParentRelativeRectToViewportRelativeRect:ao,getDocumentElement:Z,getClippingRect:fo,getOffsetParent:Rt,getElementRects:Co,getClientRects:ro,getDimensions:mo,getScale:ce,isElement:H,isRTL:ho};function _t(e,n){return e.x===n.x&&e.y===n.y&&e.width===n.width&&e.height===n.height}function vo(e,n){let t=null,o;const i=Z(e);function r(){var l;clearTimeout(o),(l=t)==null||l.disconnect(),t=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),r();const d=e.getBoundingClientRect(),{left:s,top:c,width:f,height:p}=d;if(l||n(),!f||!p)return;const m=ve(c),g=ve(i.clientWidth-(s+f)),h=ve(i.clientHeight-(c+p)),y=ve(s),v={rootMargin:-m+"px "+-g+"px "+-h+"px "+-y+"px",threshold:N(0,oe(1,u))||1};let w=!0;function x(_){const T=_[0].intersectionRatio;if(T!==u){if(!w)return a();T?a(!1,T):o=setTimeout(()=>{a(!1,1e-7)},1e3)}T===1&&!_t(d,e.getBoundingClientRect())&&a(),w=!1}try{t=new IntersectionObserver(x,{...v,root:i.ownerDocument})}catch{t=new IntersectionObserver(x,v)}t.observe(e)}return a(!0),r}function bo(e,n,t,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=o,d=et(e),s=i||r?[...d?Ce(d):[],...Ce(n)]:[];s.forEach(y=>{i&&y.addEventListener("scroll",t,{passive:!0}),r&&y.addEventListener("resize",t)});const c=d&&l?vo(d,t):null;let f=-1,p=null;a&&(p=new ResizeObserver(y=>{let[b]=y;b&&b.target===d&&p&&(p.unobserve(n),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var v;(v=p)==null||v.observe(n)})),t()}),d&&!u&&p.observe(d),p.observe(n));let m,g=u?ae(e):null;u&&h();function h(){const y=ae(e);g&&!_t(g,y)&&t(),g=y,m=requestAnimationFrame(h)}return t(),()=>{var y;s.forEach(b=>{i&&b.removeEventListener("scroll",t),r&&b.removeEventListener("resize",t)}),c?.(),(y=p)==null||y.disconnect(),p=null,u&&cancelAnimationFrame(m)}}const xo=Wn,To=jn,pt=$n,wo=Xn,Bo=zn,Do=Vn,Ao=Kn,Ro=(e,n,t)=>{const o=new Map,i={platform:yo,...t},r={...i.platform,_c:o};return Mn(e,n,{...i,platform:r})};function _o(e){return e!=null&&typeof e=="object"&&"$el"in e}function Ke(e){if(_o(e)){const n=e.$el;return Ze(n)&&re(n)==="#comment"?null:n}return e}function ue(e){return typeof e=="function"?e():C(e)}function ko(e){return{name:"arrow",options:e,fn(n){const t=Ke(ue(e.element));return t==null?{}:Do({element:t,padding:e.padding}).fn(n)}}}function kt(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function ft(e,n){const t=kt(e);return Math.round(n*t)/t}function Eo(e,n,t){t===void 0&&(t={});const o=t.whileElementsMounted,i=B(()=>{var T;return(T=ue(t.open))!=null?T:!0}),r=B(()=>ue(t.middleware)),a=B(()=>{var T;return(T=ue(t.placement))!=null?T:"bottom"}),l=B(()=>{var T;return(T=ue(t.strategy))!=null?T:"absolute"}),u=B(()=>{var T;return(T=ue(t.transform))!=null?T:!0}),d=B(()=>Ke(e.value)),s=B(()=>Ke(n.value)),c=E(0),f=E(0),p=E(l.value),m=E(a.value),g=qt({}),h=E(!1),y=B(()=>{const T={position:p.value,left:"0",top:"0"};if(!s.value)return T;const D=ft(s.value,c.value),P=ft(s.value,f.value);return u.value?{...T,transform:"translate("+D+"px, "+P+"px)",...kt(s.value)>=1.5&&{willChange:"transform"}}:{position:p.value,left:D+"px",top:P+"px"}});let b;function v(){if(d.value==null||s.value==null)return;const T=i.value;Ro(d.value,s.value,{middleware:r.value,placement:a.value,strategy:l.value}).then(D=>{c.value=D.x,f.value=D.y,p.value=D.strategy,m.value=D.placement,g.value=D.middlewareData,h.value=T!==!1})}function w(){typeof b=="function"&&(b(),b=void 0)}function x(){if(w(),o===void 0){v();return}if(d.value!=null&&s.value!=null){b=o(d.value,s.value,v);return}}function _(){i.value||(h.value=!1)}return De([r,a,l,i],v,{flush:"sync"}),De([d,s],x,{flush:"sync"}),De(i,_,{flush:"sync"}),St()&&Ft(w),{x:le(c),y:le(f),strategy:le(p),placement:le(m),middlewareData:le(g),isPositioned:le(h),floatingStyles:y,update:v}}const Oo={side:"bottom",sideOffset:0,sideFlip:!0,align:"center",alignOffset:0,alignFlip:!0,arrowPadding:0,avoidCollisions:!0,collisionBoundary:()=>[],collisionPadding:0,sticky:"partial",hideWhenDetached:!1,positionStrategy:"fixed",updatePositionStrategy:"optimized",prioritizePosition:!1},[Po,qo]=Pe("PopperContent");var So=S({inheritAttrs:!1,__name:"PopperContent",props:It({side:{type:null,required:!1},sideOffset:{type:Number,required:!1},sideFlip:{type:Boolean,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},alignFlip:{type:Boolean,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1},disableUpdateOnLayoutShift:{type:Boolean,required:!1},prioritizePosition:{type:Boolean,required:!1},reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1}},{...Oo}),emits:["placed"],setup(e,{emit:n}){const t=e,o=n,i=vt(),{forwardRef:r,currentElement:a}=j(),l=E(),u=E(),{width:d,height:s}=Cn(u),c=B(()=>t.side+(t.align!=="center"?`-${t.align}`:"")),f=B(()=>typeof t.collisionPadding=="number"?t.collisionPadding:{top:0,right:0,bottom:0,left:0,...t.collisionPadding}),p=B(()=>Array.isArray(t.collisionBoundary)?t.collisionBoundary:[t.collisionBoundary]),m=B(()=>({padding:f.value,boundary:p.value.filter(An),altBoundary:p.value.length>0})),g=B(()=>({mainAxis:t.sideFlip,crossAxis:t.alignFlip})),h=Zt(()=>[xo({mainAxis:t.sideOffset+s.value,alignmentAxis:t.alignOffset}),t.prioritizePosition&&t.avoidCollisions&&pt({...m.value,...g.value}),t.avoidCollisions&&To({mainAxis:!0,crossAxis:!!t.prioritizePosition,limiter:t.sticky==="partial"?Ao():void 0,...m.value}),!t.prioritizePosition&&t.avoidCollisions&&pt({...m.value,...g.value}),wo({...m.value,apply:({elements:A,rects:$,availableWidth:k,availableHeight:J})=>{const{width:z,height:L}=$.reference,q=A.floating.style;q.setProperty("--reka-popper-available-width",`${k}px`),q.setProperty("--reka-popper-available-height",`${J}px`),q.setProperty("--reka-popper-anchor-width",`${z}px`),q.setProperty("--reka-popper-anchor-height",`${L}px`)}}),u.value&&ko({element:u.value,padding:t.arrowPadding}),Rn({arrowWidth:d.value,arrowHeight:s.value}),t.hideWhenDetached&&Bo({strategy:"referenceHidden",...m.value})]),y=B(()=>t.reference??i.anchor.value),{floatingStyles:b,placement:v,isPositioned:w,middlewareData:x}=Eo(y,l,{strategy:t.positionStrategy,placement:c,whileElementsMounted:(...A)=>bo(...A,{layoutShift:!t.disableUpdateOnLayoutShift,animationFrame:t.updatePositionStrategy==="always"}),middleware:h}),_=B(()=>ze(v.value)[0]),T=B(()=>ze(v.value)[1]);mt(()=>{w.value&&o("placed")});const D=B(()=>x.value.arrow?.centerOffset!==0),P=E("");Ve(()=>{a.value&&(P.value=window.getComputedStyle(a.value).zIndex)});const I=B(()=>x.value.arrow?.x??0),K=B(()=>x.value.arrow?.y??0);return qo({placedSide:_,onArrowChange:A=>u.value=A,arrowX:I,arrowY:K,shouldHideArrow:D}),(A,$)=>(O(),Ae("div",{ref_key:"floatingRef",ref:l,"data-reka-popper-content-wrapper":"",style:gt({...C(b),transform:C(w)?C(b).transform:"translate(0, -200%)",minWidth:"max-content",zIndex:P.value,"--reka-popper-transform-origin":[C(x).transformOrigin?.x,C(x).transformOrigin?.y].join(" "),...C(x).hide?.referenceHidden&&{visibility:"hidden",pointerEvents:"none"}})},[ne(C(qe),G({ref:C(r)},A.$attrs,{"as-child":t.asChild,as:A.as,"data-side":_.value,"data-align":T.value,style:{animation:C(w)?void 0:"none"}}),{default:R(()=>[F(A.$slots,"default")]),_:3},16,["as-child","as","data-side","data-align","style"])],4))}}),Fo=So;const Io={top:"bottom",right:"left",bottom:"top",left:"right"};var Lo=S({inheritAttrs:!1,__name:"PopperArrow",props:{width:{type:Number,required:!1},height:{type:Number,required:!1},rounded:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const{forwardRef:n}=j(),t=Po(),o=B(()=>Io[t.placedSide.value]);return(i,r)=>(O(),Ae("span",{ref:a=>{C(t).onArrowChange(a)},style:gt({position:"absolute",left:C(t).arrowX?.value?`${C(t).arrowX?.value}px`:void 0,top:C(t).arrowY?.value?`${C(t).arrowY?.value}px`:void 0,[o.value]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[C(t).placedSide.value],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[C(t).placedSide.value],visibility:C(t).shouldHideArrow.value?"hidden":void 0})},[ne(Dn,G(i.$attrs,{ref:C(n),style:{display:"block"},as:i.as,"as-child":i.asChild,rounded:i.rounded,width:i.width,height:i.height}),{default:R(()=>[F(i.$slots,"default")]),_:3},16,["as","as-child","rounded","width","height"])],4))}}),No=Lo,Mo=S({__name:"TooltipArrow",props:{width:{type:Number,required:!1,default:10},height:{type:Number,required:!1,default:5},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"svg"}},setup(e){const n=e;return j(),(t,o)=>(O(),V(C(No),Re(_e(n)),{default:R(()=>[F(t.$slots,"default")]),_:3},16))}}),Vo=Mo;const[tt,$o]=Pe("TooltipProvider");var zo=S({inheritAttrs:!1,__name:"TooltipProvider",props:{delayDuration:{type:Number,required:!1,default:700},skipDelayDuration:{type:Number,required:!1,default:300},disableHoverableContent:{type:Boolean,required:!1,default:!1},disableClosingTrigger:{type:Boolean,required:!1},disabled:{type:Boolean,required:!1},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:!1}},setup(e){const n=e,{delayDuration:t,skipDelayDuration:o,disableHoverableContent:i,disableClosingTrigger:r,ignoreNonKeyboardFocus:a,disabled:l}=Lt(n);j();const u=E(!0),d=E(!1),{start:s,stop:c}=ht(()=>{u.value=!0},o,{immediate:!1});return $o({isOpenDelayed:u,delayDuration:t,onOpen(){c(),u.value=!1},onClose(){s()},isPointerInTransitRef:d,disableHoverableContent:i,disableClosingTrigger:r,disabled:l,ignoreNonKeyboardFocus:a}),(f,p)=>F(f.$slots,"default")}}),Ho=zo;const Et="tooltip.open",[Ne,Wo]=Pe("TooltipRoot");var jo=S({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:void 0},delayDuration:{type:Number,required:!1,default:void 0},disableHoverableContent:{type:Boolean,required:!1,default:void 0},disableClosingTrigger:{type:Boolean,required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:void 0},ignoreNonKeyboardFocus:{type:Boolean,required:!1,default:void 0}},emits:["update:open"],setup(e,{emit:n}){const t=e,o=n;j();const i=tt(),r=B(()=>t.disableHoverableContent??i.disableHoverableContent.value),a=B(()=>t.disableClosingTrigger??i.disableClosingTrigger.value),l=B(()=>t.disabled??i.disabled.value),u=B(()=>t.delayDuration??i.delayDuration.value),d=B(()=>t.ignoreNonKeyboardFocus??i.ignoreNonKeyboardFocus.value),s=Jt(t,"open",o,{defaultValue:t.defaultOpen,passive:t.open===void 0});De(s,v=>{i.onClose&&(v?(i.onOpen(),document.dispatchEvent(new CustomEvent(Et))):i.onClose())});const c=E(!1),f=E(),p=B(()=>s.value?c.value?"delayed-open":"instant-open":"closed"),{start:m,stop:g}=ht(()=>{c.value=!0,s.value=!0},u,{immediate:!1});function h(){g(),c.value=!1,s.value=!0}function y(){g(),s.value=!1}function b(){m()}return Wo({contentId:"",open:s,stateAttribute:p,trigger:f,onTriggerChange(v){f.value=v},onTriggerEnter(){i.isOpenDelayed.value?b():h()},onTriggerLeave(){r.value?y():g()},onOpen:h,onClose:y,disableHoverableContent:r,disableClosingTrigger:a,disabled:l,ignoreNonKeyboardFocus:d}),(v,w)=>(O(),V(C(vn),null,{default:R(()=>[F(v.$slots,"default",{open:C(s)})]),_:3}))}}),Ko=jo,Xo=S({__name:"TooltipContentImpl",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1,default:0},align:{type:null,required:!1,default:"center"},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1,default:!0},collisionBoundary:{type:null,required:!1,default:()=>[]},collisionPadding:{type:[Number,Object],required:!1,default:0},arrowPadding:{type:Number,required:!1,default:0},sticky:{type:String,required:!1,default:"partial"},hideWhenDetached:{type:Boolean,required:!1,default:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:n}){const t=e,o=n,i=Ne(),{forwardRef:r}=j(),a=Nt(),l=B(()=>a.default?.({})),u=B(()=>{if(t.ariaLabel)return t.ariaLabel;let s="";function c(f){typeof f.children=="string"&&f.type!==Mt?s+=f.children:Array.isArray(f.children)&&f.children.forEach(p=>c(p))}return l.value?.forEach(f=>c(f)),s}),d=B(()=>{const{ariaLabel:s,...c}=t;return c});return Xe(()=>{nt(window,"scroll",s=>{s.target?.contains(i.trigger.value)&&i.onClose()}),nt(window,Et,i.onClose)}),(s,c)=>(O(),V(C(tn),{"as-child":"","disable-outside-pointer-events":!1,onEscapeKeyDown:c[0]||(c[0]=f=>o("escapeKeyDown",f)),onPointerDownOutside:c[1]||(c[1]=f=>{C(i).disableClosingTrigger.value&&C(i).trigger.value?.contains(f.target)&&f.preventDefault(),o("pointerDownOutside",f)}),onFocusOutside:c[2]||(c[2]=zt(()=>{},["prevent"])),onDismiss:c[3]||(c[3]=f=>C(i).onClose())},{default:R(()=>[ne(C(Fo),G({ref:C(r),"data-state":C(i).stateAttribute.value},{...s.$attrs,...d.value},{style:{"--reka-tooltip-content-transform-origin":"var(--reka-popper-transform-origin)","--reka-tooltip-content-available-width":"var(--reka-popper-available-width)","--reka-tooltip-content-available-height":"var(--reka-popper-available-height)","--reka-tooltip-trigger-width":"var(--reka-popper-anchor-width)","--reka-tooltip-trigger-height":"var(--reka-popper-anchor-height)"}}),{default:R(()=>[F(s.$slots,"default"),ne(C(on),{id:C(i).contentId,role:"tooltip"},{default:R(()=>[Vt($t(u.value),1)]),_:1},8,["id"])]),_:3},16,["data-state"])]),_:3}))}}),Ot=Xo,Yo=S({__name:"TooltipContentHoverable",props:{ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},setup(e){const t=yt(e),{forwardRef:o,currentElement:i}=j(),{trigger:r,onClose:a}=Ne(),l=tt(),{isPointerInTransit:u,onPointerExit:d}=un(r,i);return l.isPointerInTransitRef=u,d(()=>{a()}),(s,c)=>(O(),V(Ot,G({ref:C(o)},C(t)),{default:R(()=>[F(s.$slots,"default")]),_:3},16))}}),Uo=Yo,Go=S({__name:"TooltipContent",props:{forceMount:{type:Boolean,required:!1},ariaLabel:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},side:{type:null,required:!1,default:"top"},sideOffset:{type:Number,required:!1},align:{type:null,required:!1},alignOffset:{type:Number,required:!1},avoidCollisions:{type:Boolean,required:!1},collisionBoundary:{type:null,required:!1},collisionPadding:{type:[Number,Object],required:!1},arrowPadding:{type:Number,required:!1},sticky:{type:String,required:!1},hideWhenDetached:{type:Boolean,required:!1},positionStrategy:{type:String,required:!1},updatePositionStrategy:{type:String,required:!1}},emits:["escapeKeyDown","pointerDownOutside"],setup(e,{emit:n}){const t=e,o=n,i=Ne(),r=Ct(t,o),{forwardRef:a}=j();return(l,u)=>(O(),V(C(Qt),{present:l.forceMount||C(i).open.value},{default:R(()=>[(O(),V(Ht(C(i).disableHoverableContent.value?Ot:Uo),G({ref:C(a)},C(r)),{default:R(()=>[F(l.$slots,"default")]),_:3},16))]),_:3},8,["present"]))}}),Zo=Go,Jo=S({__name:"TooltipPortal",props:{to:{type:null,required:!1},disabled:{type:Boolean,required:!1},defer:{type:Boolean,required:!1},forceMount:{type:Boolean,required:!1}},setup(e){const n=e;return(t,o)=>(O(),V(C(nn),Re(_e(n)),{default:R(()=>[F(t.$slots,"default")]),_:3},16))}}),Qo=Jo,ei=S({__name:"TooltipTrigger",props:{reference:{type:null,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(e){const n=e,t=Ne(),o=tt();t.contentId||=en(void 0,"reka-tooltip-content");const{forwardRef:i,currentElement:r}=j(),a=E(!1),l=E(!1),u=B(()=>t.disabled.value?{}:{click:g,focus:p,pointermove:c,pointerleave:f,pointerdown:s,blur:m});Xe(()=>{t.onTriggerChange(r.value)});function d(){setTimeout(()=>{a.value=!1},1)}function s(){t.open&&!t.disableClosingTrigger.value&&t.onClose(),a.value=!0,document.addEventListener("pointerup",d,{once:!0})}function c(h){h.pointerType!=="touch"&&!l.value&&!o.isPointerInTransitRef.value&&(t.onTriggerEnter(),l.value=!0)}function f(){t.onTriggerLeave(),l.value=!1}function p(h){a.value||t.ignoreNonKeyboardFocus.value&&!h.target.matches?.(":focus-visible")||t.onOpen()}function m(){t.onClose()}function g(){t.disableClosingTrigger.value||t.onClose()}return(h,y)=>(O(),V(C(xn),{"as-child":"",reference:h.reference},{default:R(()=>[ne(C(qe),G({ref:C(i),"aria-describedby":C(t).open.value?C(t).contentId:void 0,"data-state":C(t).stateAttribute.value,as:h.as,"as-child":n.asChild,"data-grace-area-trigger":""},Wt(u.value)),{default:R(()=>[F(h.$slots,"default")]),_:3},16,["aria-describedby","data-state","as","as-child"])]),_:3},8,["reference"]))}}),ti=ei;const se=S({__name:"TooltipRoot",props:{defaultOpen:{type:Boolean},open:{type:Boolean},delayDuration:{default:0},disableHoverableContent:{type:Boolean},disableClosingTrigger:{type:Boolean},disabled:{type:Boolean},ignoreNonKeyboardFocus:{type:Boolean},skipDelayDuration:{}},emits:["update:open"],setup(e,{emit:n}){const t=e,o=$e(t,"open","defaultOpen"),i=$e(t,"delayDuration","disableHoverableContent","disableClosingTrigger","disabled","ignoreNonKeyboardFocus","skipDelayDuration"),a=Ct(i,n);return(l,u)=>(O(),V(C(Ho),Re(_e(C(o))),{default:R(()=>[ne(C(Ko),G({"data-slot":"tooltip"},C(a)),{default:R(d=>[F(l.$slots,"default",Re(_e(d)))]),_:3},16)]),_:3},16))}});se.__docgenInfo={exportName:"default",displayName:"TooltipRoot",type:1,props:[{name:"delayDuration",global:!1,description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",tags:[{name:"defaultValue",text:"700"}],required:!1,type:"number",declarations:[],schema:"number",default:"0"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"disabled",global:!1,description:"When `true`, disable tooltip",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"open",global:!1,description:"The controlled open state of the tooltip.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",global:!1,description:`The open state of the tooltip when it is initially rendered.
Use when you do not need to control its open state.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableHoverableContent",global:!1,description:`Prevents Tooltip.Content from remaining open when hovering.
Disabling this has accessibility consequences. Inherits
from Tooltip.Provider.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableClosingTrigger",global:!1,description:"When `true`, clicking on trigger will not close the content.",tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ignoreNonKeyboardFocus",global:!1,description:`Prevent the tooltip from opening if the focus did not come from
the keyboard by matching against the \`:focus-visible\` selector.
This is useful if you want to avoid opening it when switching
browser tabs or closing a dialog.`,tags:[{name:"defaultValue",text:"false"}],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",global:!1,description:"How much time a user has to enter another trigger without incurring a delay again.",tags:[{name:"defaultValue",text:"300"}],required:!1,type:"number",declarations:[],schema:"number"}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{ open: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ open: boolean; }"}}],exposed:[{name:"delayDuration",type:"number",description:"Override the duration given to the `Provider` to customise\nthe open delay for a specific tooltip.",declarations:[],schema:"number"},{name:"disabled",type:"boolean",description:"When `true`, disable tooltip",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"open",type:"boolean",description:"The controlled open state of the tooltip.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultOpen",type:"boolean",description:`The open state of the tooltip when it is initially rendered.
Use when you do not need to control its open state.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableHoverableContent",type:"boolean",description:`Prevents Tooltip.Content from remaining open when hovering.
Disabling this has accessibility consequences. Inherits
from Tooltip.Provider.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disableClosingTrigger",type:"boolean",description:"When `true`, clicking on trigger will not close the content.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ignoreNonKeyboardFocus",type:"boolean",description:`Prevent the tooltip from opening if the focus did not come from
the keyboard by matching against the \`:focus-visible\` selector.
This is useful if you want to avoid opening it when switching
browser tabs or closing a dialog.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"skipDelayDuration",type:"number",description:"How much time a user has to enter another trigger without incurring a delay again.",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipRoot.vue"};const fe=S({__name:"TooltipTrigger",props:{reference:{},asChild:{type:Boolean},as:{}},setup(e){const n=e;return(t,o)=>(O(),V(C(ti),G({"data-slot":"tooltip-trigger"},n),{default:R(()=>[F(t.$slots,"default")]),_:3},16))}});fe.__docgenInfo={exportName:"default",displayName:"TooltipTrigger",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"reference",global:!1,description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,tags:[],required:!1,type:"ReferenceElement",declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"reference",type:"ReferenceElement",description:`The reference (or anchor) element that is being referred to for positioning.

If not provided will use the current component as anchor.`,declarations:[],schema:{kind:"enum",type:"ReferenceElement",schema:[{kind:"object",type:"Element"},{kind:"object",type:"VirtualElement"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipTrigger.vue"};const ni=Kt(["animate-in z-tooltip bg-gray-0 w-fit rounded-md border-transparent p-3 text-xs text-white","fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0"]),me=S({inheritAttrs:!1,__name:"TooltipContent",props:{class:{default:""},forceMount:{type:Boolean},ariaLabel:{},asChild:{type:Boolean},as:{},side:{},sideOffset:{default:4},align:{},alignOffset:{},avoidCollisions:{type:Boolean},collisionBoundary:{},collisionPadding:{},arrowPadding:{},sticky:{},hideWhenDetached:{type:Boolean},positionStrategy:{},updatePositionStrategy:{}},setup(e){const n=e,t=$e(n,"class"),o=yt(t),i=B(()=>jt(ni(),n.class));return(r,a)=>(O(),V(C(Qo),null,{default:R(()=>[ne(C(Zo),G({"data-slot":"tooltip-content"},{...C(o),...r.$attrs},{class:i.value}),{default:R(()=>[F(r.$slots,"default"),ne(C(Vo),{class:"z-tooltip size-1.5 w-3.5 rounded-xs"})]),_:3},16,["class"])]),_:3}))}});me.__docgenInfo={exportName:"default",displayName:"TooltipContent",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"sideOffset",global:!1,description:"The distance in pixels from the trigger.",tags:[{name:"defaultValue",text:"0"}],required:!1,type:"number",declarations:[],schema:"number",default:"4"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"forceMount",global:!1,description:`Used to force mounting when more control is needed. Useful when
controlling animation with Vue animation libraries.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"side",global:!1,description:`The preferred side of the trigger to render against when open.
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

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"forceMount",type:"boolean",description:`Used to force mounting when more control is needed. Useful when
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
descriptive label.`,declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/tooltip/TooltipContent.vue"};const mi={title:"Shared/UI/Tooltip",component:se,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"툴팁의 열림 상태를 제어합니다",table:{type:{summary:"boolean"},defaultValue:{summary:"undefined"}}},defaultOpen:{control:"boolean",description:"툴팁의 초기 열림 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},be={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Tooltip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 open, defaultOpen 등의 속성을 변경해보세요.

## 사용 팁

- **Open**: 툴팁의 열림 상태를 수동으로 제어합니다.
- **DefaultOpen**: 초기 렌더링 시 툴팁이 열려있는 상태로 시작합니다.
        `}}},args:{defaultOpen:!1},render:e=>({components:{TooltipRoot:se,TooltipTrigger:fe,TooltipContent:me,Button:he},setup(){return{args:e}},template:`
      <TooltipRoot v-bind="args">
        <TooltipTrigger>
          <Button>호버하세요</Button>
        </TooltipTrigger>
        <TooltipContent>
          이것은 툴팁 메시지입니다
        </TooltipContent>
      </TooltipRoot>
    `})},xe={parameters:{docs:{description:{story:`
툴팁은 트리거 요소를 기준으로 네 가지 위치에 표시될 수 있습니다.
화면 밖으로 나가지 않도록 자동으로 위치가 조정됩니다.
        `}}},render:()=>({components:{TooltipRoot:se,TooltipTrigger:fe,TooltipContent:me,Button:he},template:`
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
    `})},Te={parameters:{docs:{description:{story:`
긴 텍스트가 포함된 툴팁 예시입니다.
툴팁은 자동으로 텍스트를 줄바꿈하여 표시합니다.
        `}}},render:()=>({components:{TooltipRoot:se,TooltipTrigger:fe,TooltipContent:me,Button:he},template:`
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
    `})},we={parameters:{docs:{description:{story:`
\`delayDuration\` 속성을 사용하여 툴팁이 표시되기까지의 지연 시간을 설정할 수 있습니다.
기본값은 0ms이며, 밀리초 단위로 설정할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:se,TooltipTrigger:fe,TooltipContent:me,Button:he},template:`
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
    `})},Be={parameters:{docs:{description:{story:`
툴팁 컨텐츠 내에 아이콘이나 스타일이 적용된 텍스트를 사용하는 예시입니다.
툴팁 내부에 다양한 요소를 배치하여 더 풍부한 정보를 제공할 수 있습니다.
        `}}},render:()=>({components:{TooltipRoot:se,TooltipTrigger:fe,TooltipContent:me,Button:he,CheckCircleIcon:ln,AlertCircleIcon:sn,XCircleIcon:rn,InfoIcon:Xt,StarIcon:an},template:`
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
    `})};be.parameters={...be.parameters,docs:{...be.parameters?.docs,source:{originalSource:`{
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
}`,...be.parameters?.docs?.source}}};xe.parameters={...xe.parameters,docs:{...xe.parameters?.docs,source:{originalSource:`{
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
}`,...xe.parameters?.docs?.source}}};Te.parameters={...Te.parameters,docs:{...Te.parameters?.docs,source:{originalSource:`{
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
}`,...Te.parameters?.docs?.source}}};we.parameters={...we.parameters,docs:{...we.parameters?.docs,source:{originalSource:`{
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
}`,...we.parameters?.docs?.source}}};Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}};const gi=["Playground","Positions","LongText","DelayDuration","WithRichContent"];export{we as DelayDuration,Te as LongText,be as Playground,xe as Positions,Be as WithRichContent,gi as __namedExportsOrder,mi as default};
