import{q as T,d as D,b as V,f as x,o as y,w as z,i as B,h as q,u as e,m as R,e as P,l as F,X as S,r as d}from"./iframe-BrwdgWNH.js";import{u as _}from"./useForwardPropsEmits-D-SGV_la.js";import{u as O}from"./useFormControl-BwiMq_y_.js";import{c as I,u as X,a as M,P as j}from"./Primitive-xu5kLuog.js";import{V as N}from"./VisuallyHiddenInput-CTQYC-tY.js";import{r as H}from"./index-DQNKFMHc.js";import{S as U}from"./settings-jl44R-8S.js";import{U as L}from"./user-BKndYf_c.js";import{H as W}from"./heart-BvNQb0po.js";import{S as w}from"./star-CsiNIllI.js";import{C as G}from"./check-Cl-NyM8V.js";import"./preload-helper-PPVm8Dsz.js";import"./usePrimitiveElement-CUVAF7pM.js";import"./VisuallyHidden-BSj_zWt9.js";const A=T("tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]),[J]=I("ToggleGroupRoot");var K=D({__name:"Toggle",props:{defaultValue:{type:Boolean,required:!1},modelValue:{type:[Boolean,null],required:!1,default:void 0},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(n,{emit:l}){const s=n,o=l,{forwardRef:f,currentElement:g}=X(),v=J(null),t=M(s,"modelValue",o,{defaultValue:s.defaultValue,passive:s.modelValue===void 0});function k(){t.value=!t.value}const b=V(()=>t.value?"on":"off"),E=O(g);return(a,Y)=>(y(),x(e(j),{ref:e(f),type:a.as==="button"?"button":void 0,"as-child":s.asChild,as:a.as,"aria-pressed":e(t),"data-state":b.value,"data-disabled":a.disabled?"":void 0,disabled:a.disabled,onClick:k},{default:z(()=>[B(a.$slots,"default",{modelValue:e(t),disabled:a.disabled,pressed:e(t),state:b.value}),e(E)&&a.name&&!e(v)?(y(),x(N,{key:0,type:"checkbox",name:a.name,value:e(t),required:a.required},null,8,["name","value","required"])):q("v-if",!0)]),_:3},8,["type","as-child","as","aria-pressed","data-state","data-disabled","disabled"]))}}),$=K;const Q=F(["inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-full","text-secondary border border-gray-300 font-medium transition-all","disabled:hover:text-secondary disabled:cursor-not-allowed disabled:opacity-50","not-disabled:hover:border-primary hover:text-primary","focus-visible:outline-primary focus-visible:text-primary","data-[state=on]:border-primary data-[state=on]:bg-primary data-[state=on]:text-white"],{variants:{size:{sm:"px-3 py-1 text-xs",md:"px-4 py-1.5 text-sm",lg:"px-5 py-2 text-base"}},defaultVariants:{size:"md"}}),i=D({__name:"Chip",props:{class:{default:""},size:{default:"md"},defaultValue:{type:Boolean},modelValue:{type:[Boolean,null]},disabled:{type:Boolean},asChild:{type:Boolean},as:{},name:{},required:{type:Boolean}},emits:["update:modelValue"],setup(n,{emit:l}){const s=n,o=l,f=H(s,"class","size"),g=_(f,o);return(v,t)=>(y(),x(e($),R(e(g),{class:e(P)(e(Q)({size:s.size}),s.class)}),{default:z(()=>[B(v.$slots,"default")]),_:3},16,["class"]))}});i.__docgenInfo={exportName:"default",displayName:"Chip",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "sm" | "lg"',declarations:[],schema:{kind:"enum",type:'"md" | "sm" | "lg"',schema:['"md"','"sm"','"lg"']},default:'"md"'},{name:"name",global:!1,description:"The name of the field. Submitted with its owning form as part of a name/value pair.",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"required",global:!1,description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",global:!1,description:"When `true`, prevents the user from interacting with the toggle.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"modelValue",global:!1,description:"The controlled pressed state of the toggle. Can be bind as `v-model`.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultValue",global:!1,description:"The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"md" | "sm" | "lg"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "sm" | "lg"',schema:['"md"','"sm"','"lg"']}},{name:"name",type:"string",description:"The name of the field. Submitted with its owning form as part of a name/value pair.",declarations:[],schema:"string"},{name:"required",type:"boolean",description:"When `true`, indicates that the user must set the value before the owning form can be submitted.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"disabled",type:"boolean",description:"When `true`, prevents the user from interacting with the toggle.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"modelValue",type:"boolean",description:"The controlled pressed state of the toggle. Can be bind as `v-model`.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"defaultValue",type:"boolean",description:"The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/chip/Chip.vue"};const Ce={title:"Shared/UI/Chip",component:i,parameters:{layout:"centered",docs:{description:{component:`
### 선택 가능한 칩 컴포넌트

Chip 컴포넌트는 토글 가능한 칩 UI를 제공합니다. 사용자가 클릭하여 선택하거나 해제할 수 있으며, 필터링이나 태그 선택에 유용합니다.

## 주요 기능

- **토글 기능**: 클릭하여 선택/해제 가능
- **세 가지 크기**: \`sm\` (작은 크기), \`md\` (중간 크기), \`lg\` (큰 크기)
- **상태 관리**: \`v-model\`을 통한 선택 상태 관리
- **아이콘 지원**: 텍스트와 함께 아이콘 사용 가능

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import Chip from './Chip.vue';

const selected = ref(false);
<\/script>

<template>
  <Chip v-model="selected" size="md">
    선택 가능한 칩
  </Chip>
</template>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{}},p={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Chip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 size, disabled 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Size**: 칩의 크기를 조정합니다. `sm`은 작은 크기, `md`는 중간 크기, `lg`는 큰 크기입니다.\n- **Disabled**: `true`로 설정하면 칩이 비활성화되어 선택할 수 없습니다.\n        "}}},render:()=>({components:{Chip:i},template:'<Chip size="md">Chip</Chip>'})},r={render:()=>({components:{Chip:i},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 칩</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>React</Chip>
            <Chip>Vue</Chip>
            <Chip>Angular</Chip>
            <Chip>Svelte</Chip>
            <Chip>Next.js</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">프로그래밍 언어</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Python</Chip>
            <Chip>Go</Chip>
            <Chip>Rust</Chip>
          </div>
        </div>
      </div>
    `})},u={render:()=>({components:{Chip:i},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="sm">Small Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium Size (md)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">Medium Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large Size (lg)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="lg">Large Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Size Comparison</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{Chip:i,Check:G,Star:w,Heart:W,User:L,Settings:U,Tag:A,X:S},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 함께</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Check class="size-4" />
              완료
            </Chip>
            <Chip size="md">
              <Star class="size-4" />
              즐겨찾기
            </Chip>
            <Chip size="md">
              <Heart class="size-4" />
              좋아요
            </Chip>
            <Chip size="md">
              <User class="size-4" />
              프로필
            </Chip>
            <Chip size="md">
              <Settings class="size-4" />
              설정
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘만</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Tag class="size-4" />
              태그
            </Chip>
            <Chip size="md">
              <Star class="size-4" />
              중요
            </Chip>
            <Chip size="md">
              <Heart class="size-4" />
              관심
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">삭제 버튼 포함</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Tag class="size-3.5" />
              React
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              Vue
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              TypeScript
              <X class="size-3.5" />
            </Chip>
          </div>
        </div>
      </div>
    `})},C={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. \`v-model\`을 통해 칩의 선택 상태를 제어합니다.

## 특징

- 클릭하여 선택/해제 가능
- 선택된 칩은 primary 색상으로 강조 표시
- 여러 칩을 독립적으로 선택 가능
- \`v-model\`을 통한 상태 관리
        `}}},render:()=>({components:{Chip:i},setup(){const n=d(!1),l=d(!0),s=d(!1),o=d(!1);return{selected1:n,selected2:l,selected3:s,selected4:o}},template:`
      <div class="flex flex-col gap-6 w-[500px]">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Interactive Chips</h3>
          <div class="flex flex-wrap gap-3">
            <Chip v-model="selected1">React</Chip>
            <Chip v-model="selected2">Vue</Chip>
            <Chip v-model="selected3">Angular</Chip>
            <Chip v-model="selected4">Svelte</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">선택 상태</h3>
          <div class="text-sm text-gray-600">
            <div>React: {{ selected1 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Vue: {{ selected2 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Angular: {{ selected3 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Svelte: {{ selected4 ? '선택됨' : '선택 안 됨' }}</div>
          </div>
        </div>
      </div>
    `})},m={render:()=>({components:{Chip:i},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal State</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>Normal</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled State</h3>
          <div class="flex flex-wrap gap-3">
            <Chip disabled>Disabled</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Pressed State (Click to toggle)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip :default-value="true">Pressed</Chip>
          </div>
        </div>
      </div>
    `})},h={render:()=>({components:{Chip:i,Tag:A,X:S,Star:w},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">예시</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="sm">전체 15명</Chip>
            <Chip size="sm">석사 8명</Chip>
            <Chip size="sm">박사 7명</Chip>
            <Chip size="sm">통합 2명</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">카테고리 필터</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="md">전체</Chip>
            <Chip size="md">프론트엔드</Chip>
            <Chip size="md">백엔드</Chip>
            <Chip size="md">데이터베이스</Chip>
            <Chip size="md">인프라</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">삭제 가능한 태그</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="md">
              <Tag class="size-3.5" />
              디자인
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              개발
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              마케팅
              <X class="size-3.5" />
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">상태 칩</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="lg">
              <Star class="size-4" />
              즐겨찾기
            </Chip>
            <Chip size="lg">진행중</Chip>
            <Chip size="lg">완료</Chip>
            <Chip size="lg">보류</Chip>
          </div>
        </div>
      </div>
    `})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Chip 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 size, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Size**: 칩의 크기를 조정합니다. \\\`sm\\\`은 작은 크기, \\\`md\\\`는 중간 크기, \\\`lg\\\`는 큰 크기입니다.
- **Disabled**: \\\`true\\\`로 설정하면 칩이 비활성화되어 선택할 수 없습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Chip
    },
    /*html*/
    template: '<Chip size="md">Chip</Chip>'
  })
}`,...p.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 칩</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>React</Chip>
            <Chip>Vue</Chip>
            <Chip>Angular</Chip>
            <Chip>Svelte</Chip>
            <Chip>Next.js</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">프로그래밍 언어</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>JavaScript</Chip>
            <Chip>TypeScript</Chip>
            <Chip>Python</Chip>
            <Chip>Go</Chip>
            <Chip>Rust</Chip>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="sm">Small Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium Size (md)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">Medium Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large Size (lg)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="lg">Large Chip</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Size Comparison</h3>
          <div class="flex flex-wrap items-center gap-3">
            <Chip size="sm">Small</Chip>
            <Chip size="md">Medium</Chip>
            <Chip size="lg">Large</Chip>
          </div>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip,
      Check,
      Star,
      Heart,
      User,
      Settings,
      Tag,
      X
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 함께</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Check class="size-4" />
              완료
            </Chip>
            <Chip size="md">
              <Star class="size-4" />
              즐겨찾기
            </Chip>
            <Chip size="md">
              <Heart class="size-4" />
              좋아요
            </Chip>
            <Chip size="md">
              <User class="size-4" />
              프로필
            </Chip>
            <Chip size="md">
              <Settings class="size-4" />
              설정
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘만</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Tag class="size-4" />
              태그
            </Chip>
            <Chip size="md">
              <Star class="size-4" />
              중요
            </Chip>
            <Chip size="md">
              <Heart class="size-4" />
              관심
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">삭제 버튼 포함</h3>
          <div class="flex flex-wrap gap-3">
            <Chip size="md">
              <Tag class="size-3.5" />
              React
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              Vue
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              TypeScript
              <X class="size-3.5" />
            </Chip>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. \\\`v-model\\\`을 통해 칩의 선택 상태를 제어합니다.

## 특징

- 클릭하여 선택/해제 가능
- 선택된 칩은 primary 색상으로 강조 표시
- 여러 칩을 독립적으로 선택 가능
- \\\`v-model\\\`을 통한 상태 관리
        \`
      }
    }
  },
  render: () => ({
    components: {
      Chip
    },
    setup() {
      const selected1 = ref(false);
      const selected2 = ref(true);
      const selected3 = ref(false);
      const selected4 = ref(false);
      return {
        selected1,
        selected2,
        selected3,
        selected4
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6 w-[500px]">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Interactive Chips</h3>
          <div class="flex flex-wrap gap-3">
            <Chip v-model="selected1">React</Chip>
            <Chip v-model="selected2">Vue</Chip>
            <Chip v-model="selected3">Angular</Chip>
            <Chip v-model="selected4">Svelte</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">선택 상태</h3>
          <div class="text-sm text-gray-600">
            <div>React: {{ selected1 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Vue: {{ selected2 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Angular: {{ selected3 ? '선택됨' : '선택 안 됨' }}</div>
            <div>Svelte: {{ selected4 ? '선택됨' : '선택 안 됨' }}</div>
          </div>
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal State</h3>
          <div class="flex flex-wrap gap-3">
            <Chip>Normal</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled State</h3>
          <div class="flex flex-wrap gap-3">
            <Chip disabled>Disabled</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Pressed State (Click to toggle)</h3>
          <div class="flex flex-wrap gap-3">
            <Chip :default-value="true">Pressed</Chip>
          </div>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Chip,
      Tag,
      X,
      Star
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">예시</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="sm">전체 15명</Chip>
            <Chip size="sm">석사 8명</Chip>
            <Chip size="sm">박사 7명</Chip>
            <Chip size="sm">통합 2명</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">카테고리 필터</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="md">전체</Chip>
            <Chip size="md">프론트엔드</Chip>
            <Chip size="md">백엔드</Chip>
            <Chip size="md">데이터베이스</Chip>
            <Chip size="md">인프라</Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">삭제 가능한 태그</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="md">
              <Tag class="size-3.5" />
              디자인
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              개발
              <X class="size-3.5" />
            </Chip>
            <Chip size="md">
              <Tag class="size-3.5" />
              마케팅
              <X class="size-3.5" />
            </Chip>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">상태 칩</h3>
          <div class="flex flex-wrap gap-2">
            <Chip size="lg">
              <Star class="size-4" />
              즐겨찾기
            </Chip>
            <Chip size="lg">진행중</Chip>
            <Chip size="lg">완료</Chip>
            <Chip size="lg">보류</Chip>
          </div>
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};const me=["Playground","Basic","Sizes","WithIcons","Interactive","States","Examples"];export{r as Basic,h as Examples,C as Interactive,p as Playground,u as Sizes,m as States,c as WithIcons,me as __namedExportsOrder,Ce as default};
