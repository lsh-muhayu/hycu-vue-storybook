import{d as y,H as E,e as w,f as _,g as V,J as F,L as k,M as S,o as h,c as A,A as N,r as i,a as u,y as p,t as C,x as b,K as D}from"./iframe-pcq-uNRx.js";import{_ as L}from"./Label-BRBGBvip.js";import{_ as g}from"./Button-DF-y4dr6.js";import"./preload-helper-PPVm8Dsz.js";const U=["invalid"],M=V(["h-10 rounded border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 transition-all placeholder:text-gray-400","not-read-only:focus:border-primary not-read-only:focus:shadow-[0_0_0_3px_rgba(106,0,40,0.1)] focus-visible:outline-none","disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70","read-only:bg-gray-50"],{variants:{invalid:{true:"border-danger text-danger not-read-only:focus:border-danger not-read-only:focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"}}}),l=y({__name:"Input",props:E({class:{default:""},invalid:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(d){const a=d,n=w(()=>_(M({invalid:a.invalid}),a.class)),t=F(d,"modelValue");return(o,r)=>k((h(),A("input",N(o.$attrs,{"onUpdate:modelValue":r[0]||(r[0]=B=>t.value=B),class:n.value,invalid:d.invalid}),null,16,U)),[[S,t.value]])}});l.__docgenInfo={exportName:"default",displayName:"Input",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input/Input.vue"]};const P={class:"flex flex-col gap-6"},T={class:"flex flex-col gap-4"},R={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},$={class:"flex flex-col gap-2"},O={class:"text-xs text-gray-500"},q={class:"flex flex-col gap-2"},H={class:"text-xs text-gray-500"},J={class:"flex flex-col gap-2"},K={class:"text-xs text-gray-500"},j={class:"flex flex-col gap-2"},z={class:"text-xs text-gray-500"},G={class:"flex gap-2"},I=y({__name:"Controlled.stories",setup(d){const a=i("홍길동"),n=i(""),t=i(""),o=i("010-1234-5678"),r=()=>{a.value="",n.value="",t.value="",o.value=""},B=()=>{a.value="홍길동",n.value="hong@example.com",t.value="password123",o.value="010-1234-5678"};return(Q,e)=>(h(),A("div",P,[u("div",T,[e[10]||(e[10]=u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),u("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 입력 필드의 상태를 제어합니다. 입력 필드에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")],-1)),u("div",R,[u("div",$,[e[4]||(e[4]=u("label",{for:"controlled-name",class:"text-sm font-medium text-gray-700"},"이름",-1)),p(l,{id:"controlled-name",modelValue:a.value,"onUpdate:modelValue":e[0]||(e[0]=s=>a.value=s),type:"text",placeholder:"이름을 입력하세요"},null,8,["modelValue"]),u("span",O," 현재 값: "+C(a.value||"(비어있음)")+" (초기값: 홍길동) ",1)]),u("div",q,[e[5]||(e[5]=u("label",{for:"controlled-email",class:"text-sm font-medium text-gray-700"},"이메일",-1)),p(l,{id:"controlled-email",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=s=>n.value=s),type:"email",placeholder:"example@email.com"},null,8,["modelValue"]),u("span",H,"현재 값: "+C(n.value||"(비어있음)"),1)]),u("div",J,[e[6]||(e[6]=u("label",{for:"controlled-password",class:"text-sm font-medium text-gray-700"},"비밀번호",-1)),p(l,{id:"controlled-password",modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=s=>t.value=s),type:"password",placeholder:"비밀번호를 입력하세요"},null,8,["modelValue"]),u("span",K,"현재 값: "+C(t.value||"(비어있음)"),1)]),u("div",j,[e[7]||(e[7]=u("label",{for:"controlled-phone",class:"text-sm font-medium text-gray-700"},"전화번호",-1)),p(l,{id:"controlled-phone",modelValue:o.value,"onUpdate:modelValue":e[3]||(e[3]=s=>o.value=s),type:"tel",placeholder:"010-1234-5678"},null,8,["modelValue"]),u("span",z," 현재 값: "+C(o.value||"(비어있음)")+" (초기값: 010-1234-5678) ",1)])]),u("div",G,[p(g,{onClick:B},{default:b(()=>[...e[8]||(e[8]=[D(" 값 채우기 ",-1)])]),_:1}),p(g,{color:"secondary",onClick:r},{default:b(()=>[...e[9]||(e[9]=[D(" 초기화 ",-1)])]),_:1})]),e[11]||(e[11]=u("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[u("p",{class:"text-xs text-blue-800"},[u("strong",null,"참고:"),D(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. 입력 필드에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")])],-1))])]))}});I.__docgenInfo={exportName:"default",displayName:"Controlled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input/Controlled.stories.vue"]};const ee={title:"Shared/UI/Input",component:l,parameters:{layout:"centered",docs:{description:{component:'\n### 입력 필드 컴포넌트\n\nInput 컴포넌트는 폼에서 텍스트 입력을 받기 위한 컴포넌트입니다.\n표준 HTML input 요소의 모든 속성을 지원하며, 다양한 상태와 타입을 지원합니다.\n\n## 주요 기능\n\n- **다양한 타입 지원**: `text`, `email`, `password`, `number`, `tel`, `url` 등 모든 input type 지원\n- **상태 관리**: `disabled`, `readOnly` 상태 지원\n- **유효성 검사**: `invalid` prop을 통해 유효하지 않은 입력을 시각적으로 표시\n- **플레이스홀더**: `placeholder`를 통한 사용자 가이드 제공\n- **커스터마이징**: `class`를 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```vue\n<Input type="email" placeholder="example@email.com" />\n<Input type="text" placeholder="이름을 입력하세요" />\n<Input type="password" disabled />\n<Input type="email" placeholder="example@email.com" :invalid="true" />\n```\n        '}}},tags:["autodocs"]},c={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \`true\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},render:d=>({components:{Input:l},setup(){return{args:d}},template:'<Input v-bind="args" type="text" placeholder="텍스트를 입력하세요" />'})},m={render:()=>({components:{Input:l},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 입력 필드</h3>
          <div class="flex flex-col gap-2">
            <Input type="text" placeholder="이름을 입력하세요" />
            <Input type="email" placeholder="example@email.com" />
            <Input type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      </div>
    `})},f={render:()=>({components:{Input:l,Label:L},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 입력 타입</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="input-text">텍스트</Label>
              <Input id="input-text" type="text" placeholder="텍스트를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-email">이메일</Label>
              <Input id="input-email" type="email" placeholder="example@email.com" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-password">비밀번호</Label>
              <Input id="input-password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-number">숫자</Label>
              <Input id="input-number" type="number" placeholder="숫자를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-tel">전화번호</Label>
              <Input id="input-tel" type="tel" placeholder="010-1234-5678" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-url">URL</Label>
              <Input id="input-url" type="url" placeholder="https://example.com" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-search">검색</Label>
              <Input id="input-search" type="search" placeholder="검색어를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="date-search">날짜</Label>
              <Input id="date-search" type="date" placeholder="날짜를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="time-search">시간</Label>
              <Input id="time-search" type="time" placeholder="시간을 입력하세요" />
            </div>
          </div>
        </div>
      </div>
    `})},x={render:()=>({components:{Input:l,Label:L},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="input-normal">일반</Label>
              <Input id="input-normal" type="text" placeholder="일반 입력 필드" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-disabled">비활성화</Label>
              <Input id="input-disabled" type="text" placeholder="비활성화된 입력 필드" disabled />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-readonly">읽기 전용</Label>
              <Input id="input-readonly" type="text" placeholder="읽기 전용 입력 필드" readonly />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid">유효하지 않은 입력</Label>
              <Input id="input-invalid" type="text" placeholder="유효하지 않은 입력 필드" :invalid="true" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-password">유효하지 않은 비밀번호</Label>
              <Input
                id="input-invalid-password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                :invalid="true"
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-date">유효하지 않은 날짜</Label>
              <Input id="input-invalid-date" type="date" :invalid="true" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-time">유효하지 않은 시간</Label>
              <Input id="input-invalid-time" type="time" :invalid="true" />
            </div>
          </div>
        </div>
      </div>
    `})},v={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import Input from './Input.vue';

const value = ref('');
<\/script>

<template>
  <Input v-model="value" type="text" placeholder="입력하세요" />
  <p>현재 값: {{ value }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:I},template:"<ControlledExample />"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \\\`true\\\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        \`
      }
    }
  },
  render: (args: InputProps) => ({
    components: {
      Input
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: '<Input v-bind="args" type="text" placeholder="텍스트를 입력하세요" />'
  })
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 입력 필드</h3>
          <div class="flex flex-col gap-2">
            <Input type="text" placeholder="이름을 입력하세요" />
            <Input type="email" placeholder="example@email.com" />
            <Input type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input,
      Label
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 입력 타입</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="input-text">텍스트</Label>
              <Input id="input-text" type="text" placeholder="텍스트를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-email">이메일</Label>
              <Input id="input-email" type="email" placeholder="example@email.com" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-password">비밀번호</Label>
              <Input id="input-password" type="password" placeholder="비밀번호를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-number">숫자</Label>
              <Input id="input-number" type="number" placeholder="숫자를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-tel">전화번호</Label>
              <Input id="input-tel" type="tel" placeholder="010-1234-5678" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-url">URL</Label>
              <Input id="input-url" type="url" placeholder="https://example.com" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-search">검색</Label>
              <Input id="input-search" type="search" placeholder="검색어를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="date-search">날짜</Label>
              <Input id="date-search" type="date" placeholder="날짜를 입력하세요" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="time-search">시간</Label>
              <Input id="time-search" type="time" placeholder="시간을 입력하세요" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Input,
      Label
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="input-normal">일반</Label>
              <Input id="input-normal" type="text" placeholder="일반 입력 필드" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-disabled">비활성화</Label>
              <Input id="input-disabled" type="text" placeholder="비활성화된 입력 필드" disabled />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-readonly">읽기 전용</Label>
              <Input id="input-readonly" type="text" placeholder="읽기 전용 입력 필드" readonly />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid">유효하지 않은 입력</Label>
              <Input id="input-invalid" type="text" placeholder="유효하지 않은 입력 필드" :invalid="true" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-password">유효하지 않은 비밀번호</Label>
              <Input
                id="input-invalid-password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                :invalid="true"
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-date">유효하지 않은 날짜</Label>
              <Input id="input-invalid-date" type="date" :invalid="true" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="input-invalid-time">유효하지 않은 시간</Label>
              <Input id="input-invalid-time" type="time" :invalid="true" />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import Input from './Input.vue';

const value = ref('');
<\/script>

<template>
  <Input v-model="value" type="text" placeholder="입력하세요" />
  <p>현재 값: {{ value }}</p>
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
    template: '<ControlledExample />'
  })
}`,...v.parameters?.docs?.source}}};const ue=["Playground","Basic","Types","States","Controlled"];export{m as Basic,v as Controlled,c as Playground,x as States,f as Types,ue as __namedExportsOrder,ee as default};
