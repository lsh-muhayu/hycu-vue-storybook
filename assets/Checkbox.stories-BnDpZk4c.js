import{b as L,d as h,e as g,i as f,o,w as C,h as F,j as I,u as s,m as q,k as H,l as J,p as Q,q as u,s as X,v as Y,f as Z,g as ee,r as V,c as R,a as e,t as E,x as ae}from"./iframe-CDjrE9_A.js";import{c as N,u as U,a as le,P as $,b as te}from"./Primitive-CUZFHUWj.js";import{i as _,u as se,V as ne,R as ie}from"./VisuallyHiddenInput-Z9UKf9cr.js";import{C as de}from"./check-zkHLO5M0.js";import"./preload-helper-PPVm8Dsz.js";import"./useId-CWTJgYP8.js";import"./getActiveElement-FUKBWQwh.js";import"./useDirection-B6dAivcB.js";import"./VisuallyHidden-pTAlNIZ8.js";const ce=L("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);function z(t){return t==null}function P(t,i){return z(t)?!1:Array.isArray(t)?t.some(a=>_(a,i)):_(t,i)}const[re]=N("CheckboxGroupRoot");function A(t){return t==="indeterminate"}function M(t){return A(t)?"indeterminate":t?"checked":"unchecked"}const[oe,ue]=N("CheckboxRoot");var xe=h({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:[Boolean,String],required:!1},modelValue:{type:[Boolean,String,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(t,{emit:i}){const a=t,d=i,{forwardRef:x,currentElement:v}=U(),l=re(null),c=le(a,"modelValue",d,{defaultValue:a.defaultValue,passive:a.modelValue===void 0}),m=g(()=>l?.disabled.value||a.disabled),p=g(()=>z(l?.modelValue.value)?c.value==="indeterminate"?"indeterminate":c.value:P(l.modelValue.value,a.value));function W(){if(z(l?.modelValue.value))c.value=A(c.value)?!0:!c.value;else{const n=[...l.modelValue.value||[]];if(P(n,a.value)){const S=n.findIndex(T=>_(T,a.value));n.splice(S,1)}else n.push(a.value);l.modelValue.value=n}}const j=se(v),G=g(()=>a.id&&v.value?document.querySelector(`[for="${a.id}"]`)?.innerText:void 0);return ue({disabled:m,state:p}),(n,S)=>(o(),f(Q(s(l)?.rovingFocus.value?s(ie):s($)),q(n.$attrs,{id:n.id,ref:s(x),role:"checkbox","as-child":n.asChild,as:n.as,type:n.as==="button"?"button":void 0,"aria-checked":s(A)(p.value)?"mixed":p.value,"aria-required":n.required,"aria-label":n.$attrs["aria-label"]||G.value,"data-state":s(M)(p.value),"data-disabled":m.value?"":void 0,disabled:m.value,focusable:s(l)?.rovingFocus.value?!m.value:void 0,onKeydown:H(J(()=>{},["prevent"]),["enter"]),onClick:W}),{default:C(()=>[F(n.$slots,"default",{modelValue:s(c),state:p.value}),s(j)&&n.name&&!s(l)?(o(),f(s(ne),{key:0,type:"checkbox",checked:!!p.value,name:n.name,value:n.value,disabled:m.value,required:n.required},null,8,["checked","name","value","disabled","required"])):I("v-if",!0)]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"]))}}),pe=xe,fe=h({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(t){const{forwardRef:i}=U(),a=oe();return(d,x)=>(o(),f(s(te),{present:d.forceMount||s(A)(s(a).state.value)||s(a).state.value===!0},{default:C(()=>[u(s($),q({ref:s(i),"data-state":s(M)(s(a).state.value),"data-disabled":s(a).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":d.asChild,as:d.as},d.$attrs),{default:C(()=>[F(d.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),ve=fe;const me=ee(["border-gray-2 size-4 shrink-0 cursor-pointer rounded-[3px] border shadow-xs transition-all outline-none","not-disabled:hover:border-gray-1","disabled:cursor-not-allowed disabled:opacity-50","focus-visible:ring-gray-2 focus-visible:ring","data-[state=checked]:border-transparent","data-[state=indeterminate]:border-transparent","not-disabled:hover:data-[state=checked]:border-transparent","not-disabled:hover:data-[state=indeterminate]:border-transparent","data-[invalid=true]:border-danger","data-[invalid=true]:focus-visible:ring-danger","data-[invalid=true]:hover:border-danger","data-[invalid=true]:data-[state=checked]:border-danger data-[invalid=true]:data-[state=checked]:bg-danger","data-[invalid=true]:data-[state=checked]:hover:bg-danger data-[invalid=true]:data-[state=checked]:hover:border-danger","data-[invalid=true]:data-[state=indeterminate]:border-danger data-[invalid=true]:data-[state=indeterminate]:bg-danger","data-[invalid=true]:data-[state=indeterminate]:hover:bg-danger data-[invalid=true]:data-[state=indeterminate]:hover:border-danger"],{variants:{color:{primary:["data-[state=checked]:bg-primary data-[state=checked]:border-primary","data-[state=indeterminate]:bg-primary data-[state=indeterminate]:border-primary","not-disabled:hover:data-[state=checked]:bg-primary-dark not-disabled:hover:data-[state=checked]:border-primary-dark","not-disabled:hover:data-[state=indeterminate]:bg-primary-dark not-disabled:hover:data-[state=indeterminate]:border-primary-dark","data-[state=checked]:focus-visible:ring-primary","data-[state=indeterminate]:focus-visible:ring-primary"],secondary:["data-[state=checked]:bg-gray-200","data-[state=checked]:border-gray-200","data-[state=indeterminate]:bg-gray-200","data-[state=indeterminate]:border-gray-200","not-disabled:hover:data-[state=checked]:bg-gray-300","not-disabled:hover:data-[state=checked]:border-gray-300","not-disabled:hover:data-[state=indeterminate]:bg-gray-300","not-disabled:hover:data-[state=indeterminate]:border-gray-300","data-[state=checked]:focus-visible:ring-gray-200","data-[state=indeterminate]:focus-visible:ring-gray-200"],danger:["data-[state=checked]:bg-danger data-[state=checked]:border-danger","data-[state=indeterminate]:bg-danger data-[state=indeterminate]:border-danger","not-disabled:hover:data-[state=checked]:border-danger","not-disabled:hover:data-[state=indeterminate]:border-danger","data-[state=checked]:focus-visible:ring-danger","data-[state=indeterminate]:focus-visible:ring-danger"],success:["data-[state=checked]:bg-success data-[state=checked]:border-success","data-[state=indeterminate]:bg-success data-[state=indeterminate]:border-success","data-[state=checked]:focus-visible:ring-success","data-[state=indeterminate]:focus-visible:ring-success"],warning:["data-[state=checked]:bg-warning data-[state=checked]:border-warning","data-[state=indeterminate]:bg-warning data-[state=indeterminate]:border-warning","data-[state=checked]:focus-visible:ring-warning","data-[state=indeterminate]:focus-visible:ring-warning"]}},defaultVariants:{color:"primary"}}),r=h({__name:"Checkbox",props:X({color:{default:"primary"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},class:{default:""},defaultValue:{default:!1}},{modelValue:{default:void 0},modelModifiers:{}}),emits:["update:modelValue"],setup(t){const i=t,a=Y(t,"modelValue"),d=g(()=>a.value??i.defaultValue??!1),x=g(()=>Z(me({color:i.color}),i.class));return(v,l)=>(o(),f(s(pe),q(v.$attrs,{modelValue:a.value,"onUpdate:modelValue":l[0]||(l[0]=c=>a.value=c),"default-value":t.defaultValue,disabled:t.disabled,"data-invalid":t.invalid,class:x.value}),{default:C(()=>[u(s(ve),{class:"flex items-center justify-center rounded-xs text-white"},{default:C(()=>[d.value==="indeterminate"?(o(),f(s(ce),{key:0,class:"h-[80%] w-[80%]","stroke-width":"3"})):d.value===!0?(o(),f(s(de),{key:1,class:"h-[80%] w-[80%]","stroke-width":"3"})):I("",!0)]),_:1})]),_:1},16,["modelValue","default-value","disabled","data-invalid","class"]))}});r.__docgenInfo={exportName:"default",displayName:"Checkbox",type:1,props:[{name:"invalid",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"disabled",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"defaultValue",global:!1,description:"",tags:[],required:!1,type:'boolean | "indeterminate"',declarations:[],schema:{kind:"enum",type:'boolean | "indeterminate"',schema:["false","true",'"indeterminate"']},default:"false"},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "warning" | "danger"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"']},default:'"primary"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:'boolean | "indeterminate"',declarations:[],schema:{kind:"enum",type:'boolean | "indeterminate"',schema:["false","true",'"indeterminate"']},default:"undefined"}],events:[{name:"update:modelValue",description:"",tags:[],type:'[value: boolean | "indeterminate"]',signature:'(event: "update:modelValue", value: boolean | "indeterminate"): void',declarations:[],schema:[{kind:"enum",type:'boolean | "indeterminate"',schema:["false","true",'"indeterminate"']}]}],slots:[],exposed:[{name:"invalid",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultValue",type:'boolean | "indeterminate"',description:"",declarations:[],schema:{kind:"enum",type:'boolean | "indeterminate"',schema:["false","true",'"indeterminate"']}},{name:"color",type:'"success" | "primary" | "secondary" | "warning" | "danger"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"']}},{name:"modelValue",type:'boolean | "indeterminate"',description:"",declarations:[],schema:{kind:"enum",type:'boolean | "indeterminate"',schema:["false","true",'"indeterminate"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/Checkbox.vue"};const ge={class:"flex flex-col gap-6"},Ce={class:"flex flex-col gap-4"},he={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},be={class:"flex items-center gap-3"},ye={class:"flex flex-col"},ke={class:"text-xs text-gray-500"},Be={class:"flex items-center gap-3"},De={class:"flex flex-col"},we={class:"text-xs text-gray-500"},Ae={class:"flex items-center gap-3"},Ve={class:"flex flex-col"},Ee={class:"text-xs text-gray-500"},K=h({__name:"Controlled.stories",setup(t){const i=V(!1),a=V(!0),d=V("indeterminate"),x=()=>{i.value=!i.value,a.value=!a.value,d.value=d.value==="indeterminate"?!1:"indeterminate"};return(v,l)=>(o(),R("div",ge,[e("div",Ce,[l[6]||(l[6]=e("div",{class:"flex flex-col gap-2"},[e("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),e("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 상태를 제어합니다. 체크박스를 클릭하면 상태가 변경되고, 부모에서 상태를 변경하면 체크박스가 즉시 반영됩니다. ")],-1)),e("div",he,[e("div",be,[u(r,{modelValue:i.value,"onUpdate:modelValue":l[0]||(l[0]=c=>i.value=c)},null,8,["modelValue"]),e("div",ye,[l[3]||(l[3]=e("span",{class:"text-sm text-gray-700"},"체크박스 1",-1)),e("span",ke,"현재 상태: "+E(String(i.value)),1)])]),e("div",Be,[u(r,{modelValue:a.value,"onUpdate:modelValue":l[1]||(l[1]=c=>a.value=c)},null,8,["modelValue"]),e("div",De,[l[4]||(l[4]=e("span",{class:"text-sm text-gray-700"},"체크박스 2",-1)),e("span",we,"현재 상태: "+E(String(a.value)),1)])]),e("div",Ae,[u(r,{modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=c=>d.value=c)},null,8,["modelValue"]),e("div",Ve,[l[5]||(l[5]=e("span",{class:"text-sm text-gray-700"},"체크박스 3 (Indeterminate)",-1)),e("span",Ee,"현재 상태: "+E(String(d.value)),1)])])]),e("div",{class:"flex gap-2"},[e("button",{class:"bg-primary hover:bg-primary-dark rounded px-3 py-1.5 text-xs font-medium text-white transition-colors",onClick:x}," 부모에서 상태 변경 ")])])]))}});K.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/stories/Controlled.stories.vue"};const _e={class:"flex flex-col gap-6"},ze={class:"flex flex-col gap-4"},qe={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},Se={class:"flex items-center gap-3"},Pe={class:"flex items-center gap-3"},Fe={class:"flex items-center gap-3"},O=h({__name:"Uncontrolled.stories",setup(t){return(i,a)=>(o(),R("div",_e,[e("div",ze,[a[3]||(a[3]=e("div",{class:"flex flex-col gap-2"},[e("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),e("p",{class:"text-xs text-gray-500"}," 각 체크박스가 자체적으로 상태를 관리합니다. 부모는 초기값(`defaultValue`)만 설정하며, 이후 상태 변경은 컴포넌트 내부에서 처리됩니다. ")],-1)),e("div",qe,[e("div",Se,[u(r,{"default-value":!1}),a[0]||(a[0]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 1"),e("span",{class:"text-xs text-gray-500"},"초기값: false (자체 상태 관리)")],-1))]),e("div",Pe,[u(r,{"default-value":!0}),a[1]||(a[1]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 2"),e("span",{class:"text-xs text-gray-500"},"초기값: true (자체 상태 관리)")],-1))]),e("div",Fe,[u(r,{"default-value":"indeterminate"}),a[2]||(a[2]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 3"),e("span",{class:"text-xs text-gray-500"},"초기값: indeterminate (자체 상태 관리)")],-1))])]),a[4]||(a[4]=e("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[e("p",{class:"text-xs text-blue-800"},[e("strong",null,"참고:"),ae(" 비제어 컴포넌트는 자체적으로 상태를 관리하므로, 부모 컴포넌트에서 상태를 직접 변경할 수 없습니다. 폼 제출 시에는 ref를 통해 현재 값을 가져올 수 있습니다. ")])],-1))])]))}});O.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/stories/Uncontrolled.stories.vue"};const je={title:"Shared/UI/Checkbox",component:r,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\n체크박스 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다. 다양한 색상 및 상태를 지원합니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Checkbox defaultValue={true} color="primary" />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultValue:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값 (비제어 컴포넌트)",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}}}},b={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 위험한 작업에 사용, `success`는 성공 상태에 사용).\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultValue**: 체크박스의 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}},args:{color:"primary",invalid:!1,disabled:!1,defaultValue:!1},render:t=>({components:{Checkbox:r},setup(){return{args:t}},template:'<Checkbox v-bind="args" />'})},y={render:()=>({components:{Checkbox:r},template:`
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
    `})},k={render:()=>({components:{Checkbox:r},template:`
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
    `})},B={render:()=>({components:{Checkbox:r},template:`
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
    `})},D={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:K},template:"<ControlledExample />"})},w={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{UncontrolledExample:O},template:"<UncontrolledExample />"})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const Ge=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{y as Colors,D as Controlled,b as Playground,B as Sizes,k as States,w as Uncontrolled,Ge as __namedExportsOrder,je as default};
