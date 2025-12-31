import{d as A,r as p,c as L,o as I,a as u,k as t,t as r,w as v,l as x}from"./iframe-BshgsEy_.js";import{_ as l}from"./Input-DmSlm2WN.js";import{_ as D}from"./Button-okQSXxoS.js";import{_ as y}from"./Label-BJ6MYIIn.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uv-kAT5x.js";import"./index-I3Fm_zIz.js";const E={class:"flex flex-col gap-6"},w={class:"flex flex-col gap-4"},_={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},V={class:"flex flex-col gap-2"},k={class:"text-xs text-gray-500"},F={class:"flex flex-col gap-2"},P={class:"text-xs text-gray-500"},R={class:"flex flex-col gap-2"},S={class:"text-xs text-gray-500"},N={class:"flex flex-col gap-2"},T={class:"text-xs text-gray-500"},U={class:"flex gap-2"},b=A({__name:"Controlled.stories",setup(B){const n=p("홍길동"),o=p(""),s=p(""),d=p("010-1234-5678"),g=()=>{n.value="",o.value="",s.value="",d.value=""},h=()=>{n.value="홍길동",o.value="hong@example.com",s.value="password123",d.value="010-1234-5678"};return(q,e)=>(I(),L("div",E,[u("div",w,[e[10]||(e[10]=u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),u("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 입력 필드의 상태를 제어합니다. 입력 필드에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")],-1)),u("div",_,[u("div",V,[e[4]||(e[4]=u("label",{for:"controlled-name",class:"text-sm font-medium text-gray-700"},"이름",-1)),t(l,{id:"controlled-name",modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=a=>n.value=a),type:"text",placeholder:"이름을 입력하세요"},null,8,["modelValue"]),u("span",k," 현재 값: "+r(n.value||"(비어있음)")+" (초기값: 홍길동) ",1)]),u("div",F,[e[5]||(e[5]=u("label",{for:"controlled-email",class:"text-sm font-medium text-gray-700"},"이메일",-1)),t(l,{id:"controlled-email",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=a=>o.value=a),type:"email",placeholder:"example@email.com"},null,8,["modelValue"]),u("span",P,"현재 값: "+r(o.value||"(비어있음)"),1)]),u("div",R,[e[6]||(e[6]=u("label",{for:"controlled-password",class:"text-sm font-medium text-gray-700"},"비밀번호",-1)),t(l,{id:"controlled-password",modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value=a),type:"password",placeholder:"비밀번호를 입력하세요"},null,8,["modelValue"]),u("span",S,"현재 값: "+r(s.value||"(비어있음)"),1)]),u("div",N,[e[7]||(e[7]=u("label",{for:"controlled-phone",class:"text-sm font-medium text-gray-700"},"전화번호",-1)),t(l,{id:"controlled-phone",modelValue:d.value,"onUpdate:modelValue":e[3]||(e[3]=a=>d.value=a),type:"tel",placeholder:"010-1234-5678"},null,8,["modelValue"]),u("span",T," 현재 값: "+r(d.value||"(비어있음)")+" (초기값: 010-1234-5678) ",1)])]),u("div",U,[t(D,{onClick:h},{default:v(()=>[...e[8]||(e[8]=[x(" 값 채우기 ",-1)])]),_:1}),t(D,{color:"secondary",onClick:g},{default:v(()=>[...e[9]||(e[9]=[x(" 초기화 ",-1)])]),_:1})]),e[11]||(e[11]=u("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[u("p",{class:"text-xs text-blue-800"},[u("strong",null,"참고:"),x(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. 입력 필드에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")])],-1))])]))}});b.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input/stories/Controlled.stories.vue"};const G={title:"Shared/UI/Input",component:l,parameters:{layout:"centered",controls:{include:["type","placeholder","disabled","readonly","invalid"]},docs:{description:{component:'\n### 입력 필드 컴포넌트\n\nInput 컴포넌트는 폼에서 텍스트 입력을 받기 위한 컴포넌트입니다.\n표준 HTML input 요소의 모든 속성을 지원하며, 다양한 상태와 타입을 지원합니다.\n\n## 주요 기능\n\n- **다양한 타입 지원**: `text`, `email`, `password`, `number`, `tel`, `url` 등 모든 input type 지원\n- **상태 관리**: `disabled`, `readOnly` 상태 지원\n- **유효성 검사**: `invalid` prop을 통해 유효하지 않은 입력을 시각적으로 표시\n- **플레이스홀더**: `placeholder`를 통한 사용자 가이드 제공\n- **커스터마이징**: `class`를 통해 스타일 커스터마이징 가능\n\n## 사용 예시\n\n```vue\n<Input type="email" placeholder="example@email.com" />\n<Input type="text" placeholder="이름을 입력하세요" />\n<Input type="password" disabled />\n<Input type="email" placeholder="example@email.com" :invalid="true" />\n```\n        '}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","email","password","number","tel","url","search","date","time"],description:"입력 필드의 타입",table:{type:{summary:"string"},defaultValue:{summary:"'text'"}}},placeholder:{control:"text",description:"입력 필드에 표시할 플레이스홀더 텍스트",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"입력 필드 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},i={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Input 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 type, placeholder, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Type**: 입력 필드의 타입을 선택합니다. 각 타입에 맞는 키보드와 유효성 검사가 적용됩니다.
- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Disabled**: \`true\`로 설정하면 입력 필드가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},render:B=>({components:{Input:l},setup(){return{args:B}},template:'<Input v-bind="args" type="text" placeholder="텍스트를 입력하세요" />'})},C={render:()=>({components:{Input:l},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 입력 필드</h3>
          <div class="flex flex-col gap-2">
            <Input type="text" defaultValue="홍길동" placeholder="이름을 입력하세요" />
            <Input type="email" placeholder="example@email.com" />
            <Input type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{Input:l,Label:y},template:`
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
    `})},m={render:()=>({components:{Input:l,Label:y},template:`
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
              <Input id="input-readonly" type="text" placeholder="읽기 전용 입력 필드" readonly defaultValue='읽기 전용 텍스트' />
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
    `})},f={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:b},template:"<ControlledExample />"})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            <Input type="text" defaultValue="홍길동" placeholder="이름을 입력하세요" />
            <Input type="email" placeholder="example@email.com" />
            <Input type="tel" placeholder="010-1234-5678" />
          </div>
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
              <Input id="input-readonly" type="text" placeholder="읽기 전용 입력 필드" readonly defaultValue='읽기 전용 텍스트' />
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
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};const J=["Playground","Basic","Types","States","Controlled"];export{C as Basic,f as Controlled,i as Playground,m as States,c as Types,J as __namedExportsOrder,G as default};
