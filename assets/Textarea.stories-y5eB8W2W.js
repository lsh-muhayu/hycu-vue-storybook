import{_ as l}from"./Textarea-B6WELKfM.js";import{_ as m}from"./Label-DnDZvjkn.js";import{d as g,r as x,c as A,o as h,a,g as u,w as C,s as t,t as B}from"./iframe-NOcxhkuc.js";import{_ as D}from"./Button-Brug0h9z.js";import"./index-Diaiq7FM.js";import"./index-BvpE8Ksx.js";import"./preload-helper-PPVm8Dsz.js";const E={class:"flex flex-col gap-6"},T={class:"flex flex-col gap-4"},_={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},w={class:"flex flex-col gap-2"},k={class:"text-xs text-gray-500"},L={class:"flex flex-col gap-2"},V={class:"text-xs text-gray-500"},F={class:"flex flex-col gap-2"},R={class:"text-xs text-gray-500"},q={class:"flex gap-2"},v=g({__name:"Controlled.stories",setup(f){const r=x("이것은 초기 설명입니다."),o=x(""),n=x(""),y=()=>{r.value="",o.value="",n.value=""},b=()=>{r.value="이것은 제어 컴포넌트 예시입니다. 부모 컴포넌트가 v-model을 통해 상태를 제어합니다.",o.value="좋은 제품입니다. 사용하기 편리하고 기능이 다양합니다.",n.value=`추가로 개선할 점:
1. 성능 최적화
2. UI 개선
3. 접근성 향상`};return(P,e)=>(h(),A("div",E,[a("div",T,[e[8]||(e[8]=a("div",{class:"flex flex-col gap-2"},[a("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),a("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 textarea의 상태를 제어합니다. textarea에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 textarea가 즉시 반영됩니다. ")],-1)),a("div",_,[a("div",w,[u(m,{required:"",for:"controlled-description",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[3]||(e[3]=[t("설명",-1)])]),_:1}),u(l,{id:"controlled-description",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=s=>r.value=s),placeholder:"설명을 입력하세요",rows:3},null,8,["modelValue"]),a("span",k," 현재 값: "+B(r.value||"(비어있음)")+" (초기값: 이것은 초기 설명입니다.) ",1)]),a("div",L,[u(m,{required:"",for:"controlled-feedback",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[4]||(e[4]=[t("피드백",-1)])]),_:1}),u(l,{id:"controlled-feedback",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=s=>o.value=s),placeholder:"피드백을 입력하세요",rows:4},null,8,["modelValue"]),a("span",V,"현재 값: "+B(o.value||"(비어있음)"),1)]),a("div",F,[u(m,{for:"controlled-notes",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[5]||(e[5]=[t("메모",-1)])]),_:1}),u(l,{id:"controlled-notes",modelValue:n.value,"onUpdate:modelValue":e[2]||(e[2]=s=>n.value=s),placeholder:"메모를 입력하세요",rows:5},null,8,["modelValue"]),a("span",R,"현재 값: "+B(n.value||"(비어있음)"),1)])]),a("div",q,[u(D,{onClick:b},{default:C(()=>[...e[6]||(e[6]=[t(" 값 채우기 ",-1)])]),_:1}),u(D,{color:"secondary",onClick:y},{default:C(()=>[...e[7]||(e[7]=[t(" 초기화 ",-1)])]),_:1})]),e[9]||(e[9]=a("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[a("p",{class:"text-xs text-blue-800"},[a("strong",null,"참고:"),t(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. textarea에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 textarea가 즉시 반영됩니다. ")])],-1))])]))}});v.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/textarea/stories/Controlled.stories.vue"};const H={title:"Shared/UI/Textarea",component:l,parameters:{layout:"centered",controls:{include:["placeholder","rows","cols","disabled","readonly","invalid"]},docs:{description:{component:`
### 여러 줄 텍스트 입력 컴포넌트

Textarea 컴포넌트는 폼에서 여러 줄의 텍스트 입력을 받기 위한 컴포넌트입니다.
표준 HTML textarea 요소의 모든 속성을 지원하며, 다양한 상태를 지원합니다.

## 주요 기능

- **여러 줄 입력**: 긴 텍스트나 여러 줄의 내용을 입력할 수 있습니다
- **상태 관리**: \`disabled\`, \`readOnly\` 상태 지원
- **유효성 검사**: \`invalid\` prop을 통해 유효하지 않은 입력을 시각적으로 표시
- **플레이스홀더**: \`placeholder\`를 통한 사용자 가이드 제공
- **크기 조절**: \`rows\`, \`cols\` 속성으로 크기 조절 가능
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<Textarea placeholder="내용을 입력하세요" />
<Textarea :rows="5" placeholder="여러 줄 입력" />
<Textarea disabled />
<Textarea :invalid="true" placeholder="유효하지 않은 입력" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"텍스트 영역에 표시할 플레이스홀더 텍스트",table:{type:{summary:"string"}}},rows:{control:"number",description:"텍스트 영역의 행 수",table:{type:{summary:"number"},defaultValue:{summary:"2"}}},cols:{control:"number",description:"텍스트 영역의 열 수",table:{type:{summary:"number"}}},disabled:{control:"boolean",description:"텍스트 영역 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readonly:{control:"boolean",description:"읽기 전용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},d={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Rows**: textarea의 기본 높이를 설정합니다.
- **Disabled**: \`true\`로 설정하면 textarea가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},render:f=>({components:{Textarea:l},setup(){return{args:f}},template:'<Textarea v-bind="args" placeholder="내용을 입력하세요" />'})},i={render:()=>({components:{Textarea:l},template:`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <div class="flex flex-col gap-2">
            <Textarea placeholder="내용을 입력하세요" />
            <Textarea placeholder="여러 줄 입력이 가능합니다" :rows="5" />
            <Textarea placeholder="더 긴 텍스트 입력" :rows="10" />
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{Textarea:l,Label:m},template:`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="textarea-normal">일반</Label>
              <Textarea id="textarea-normal" placeholder="일반 textarea" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-disabled">비활성화</Label>
              <Textarea
                id="textarea-disabled"
                placeholder="비활성화된 textarea"
                disabled
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-readonly">읽기 전용</Label>
              <Textarea
                id="textarea-readonly"
                placeholder="읽기 전용 textarea"
                readonly
                value="이 텍스트는 읽기 전용입니다."
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-invalid">유효하지 않은 입력</Label>
              <Textarea
                id="textarea-invalid"
                placeholder="유효하지 않은 입력"
                :invalid="true"
              />
            </div>
          </div>
        </div>
      </div>
    `})},p={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 textarea의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 textarea가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import Textarea from './Textarea.vue';

const value = ref('');
<\/script>

<template>
  <Textarea v-model="value" placeholder="내용을 입력하세요" />
  <p>현재 값: {{ value }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:v},template:"<ControlledExample />"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Rows**: textarea의 기본 높이를 설정합니다.
- **Disabled**: \\\`true\\\`로 설정하면 textarea가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        \`
      }
    }
  },
  render: args => ({
    components: {
      Textarea
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: '<Textarea v-bind="args" placeholder="내용을 입력하세요" />'
  })
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <div class="flex flex-col gap-2">
            <Textarea placeholder="내용을 입력하세요" />
            <Textarea placeholder="여러 줄 입력이 가능합니다" :rows="5" />
            <Textarea placeholder="더 긴 텍스트 입력" :rows="10" />
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Textarea,
      Label
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="textarea-normal">일반</Label>
              <Textarea id="textarea-normal" placeholder="일반 textarea" />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-disabled">비활성화</Label>
              <Textarea
                id="textarea-disabled"
                placeholder="비활성화된 textarea"
                disabled
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-readonly">읽기 전용</Label>
              <Textarea
                id="textarea-readonly"
                placeholder="읽기 전용 textarea"
                readonly
                value="이 텍스트는 읽기 전용입니다."
              />
            </div>
            <div class="flex flex-col gap-1">
              <Label for="textarea-invalid">유효하지 않은 입력</Label>
              <Textarea
                id="textarea-invalid"
                placeholder="유효하지 않은 입력"
                :invalid="true"
              />
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 textarea의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 textarea가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import Textarea from './Textarea.vue';

const value = ref('');
<\/script>

<template>
  <Textarea v-model="value" placeholder="내용을 입력하세요" />
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
}`,...p.parameters?.docs?.source}}};const M=["Playground","Basic","States","Controlled"];export{i as Basic,p as Controlled,d as Playground,c as States,M as __namedExportsOrder,H as default};
