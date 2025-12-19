import{d as b,H as T,e as _,f as w,g as L,J as V,O as F,T as k,o as y,c as E,A as N,r as D,a,y as t,x as C,K as n,t as v}from"./iframe-B1Ejz58S.js";import{_ as m}from"./Label-DF9CAfjF.js";import{_ as A}from"./Button-CHIR6_Od.js";import"./preload-helper-PPVm8Dsz.js";const S=L(["w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 transition-all placeholder:text-gray-400","not-read-only:focus:border-primary not-read-only:focus:shadow-[0_0_0_3px_rgba(106,0,40,0.1)] focus-visible:outline-none","disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70","read-only:bg-gray-50"],{variants:{invalid:{true:"border-danger text-danger not-read-only:focus:border-danger not-read-only:focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"}}}),r=b({__name:"Textarea",props:T({class:{default:""},invalid:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(s){const u=s,o=_(()=>w(S({invalid:u.invalid}),u.class)),l=V(s,"modelValue");return(f,i)=>F((y(),E("textarea",N(f.$attrs,{"onUpdate:modelValue":i[0]||(i[0]=g=>l.value=g),class:o.value}),null,16)),[[k,l.value]])}});r.__docgenInfo={exportName:"default",displayName:"Textarea",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"invalid",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/textarea/Textarea.vue"]};const I={class:"flex flex-col gap-6"},U={class:"flex flex-col gap-4"},M={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},O={class:"flex flex-col gap-2"},P={class:"text-xs text-gray-500"},R={class:"flex flex-col gap-2"},q={class:"text-xs text-gray-500"},$={class:"flex flex-col gap-2"},H={class:"text-xs text-gray-500"},J={class:"flex gap-2"},h=b({__name:"Controlled.stories",setup(s){const u=D("이것은 초기 설명입니다."),o=D(""),l=D(""),f=()=>{u.value="",o.value="",l.value=""},i=()=>{u.value="이것은 제어 컴포넌트 예시입니다. 부모 컴포넌트가 v-model을 통해 상태를 제어합니다.",o.value="좋은 제품입니다. 사용하기 편리하고 기능이 다양합니다.",l.value=`추가로 개선할 점:
1. 성능 최적화
2. UI 개선
3. 접근성 향상`};return(g,e)=>(y(),E("div",I,[a("div",U,[e[8]||(e[8]=a("div",{class:"flex flex-col gap-2"},[a("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),a("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 textarea의 상태를 제어합니다. textarea에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 textarea가 즉시 반영됩니다. ")],-1)),a("div",M,[a("div",O,[t(m,{required:"",for:"controlled-description",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[3]||(e[3]=[n("설명",-1)])]),_:1}),t(r,{id:"controlled-description",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=d=>u.value=d),placeholder:"설명을 입력하세요",rows:3},null,8,["modelValue"]),a("span",P," 현재 값: "+v(u.value||"(비어있음)")+" (초기값: 이것은 초기 설명입니다.) ",1)]),a("div",R,[t(m,{required:"",for:"controlled-feedback",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[4]||(e[4]=[n("피드백",-1)])]),_:1}),t(r,{id:"controlled-feedback",modelValue:o.value,"onUpdate:modelValue":e[1]||(e[1]=d=>o.value=d),placeholder:"피드백을 입력하세요",rows:4},null,8,["modelValue"]),a("span",q,"현재 값: "+v(o.value||"(비어있음)"),1)]),a("div",$,[t(m,{for:"controlled-notes",class:"text-sm font-medium text-gray-700"},{default:C(()=>[...e[5]||(e[5]=[n("메모",-1)])]),_:1}),t(r,{id:"controlled-notes",modelValue:l.value,"onUpdate:modelValue":e[2]||(e[2]=d=>l.value=d),placeholder:"메모를 입력하세요",rows:5},null,8,["modelValue"]),a("span",H,"현재 값: "+v(l.value||"(비어있음)"),1)])]),a("div",J,[t(A,{onClick:i},{default:C(()=>[...e[6]||(e[6]=[n(" 값 채우기 ",-1)])]),_:1}),t(A,{color:"secondary",onClick:f},{default:C(()=>[...e[7]||(e[7]=[n(" 초기화 ",-1)])]),_:1})]),e[9]||(e[9]=a("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[a("p",{class:"text-xs text-blue-800"},[a("strong",null,"참고:"),n(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. textarea에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 textarea가 즉시 반영됩니다. ")])],-1))])]))}});h.__docgenInfo={exportName:"default",displayName:"Controlled.stories",description:"",tags:{},sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/textarea/Controlled.stories.vue"]};const Q={title:"Shared/UI/Textarea",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"]},c={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Textarea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 사용자에게 입력 형식을 안내하는 텍스트를 표시합니다.
- **Rows**: textarea의 기본 높이를 설정합니다.
- **Disabled**: \`true\`로 설정하면 textarea가 비활성화되어 입력할 수 없습니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용이 되어 값은 표시되지만 수정할 수 없습니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다.
        `}}},render:s=>({components:{Textarea:r},setup(){return{args:s}},template:'<Textarea v-bind="args" placeholder="내용을 입력하세요" />'})},x={render:()=>({components:{Textarea:r},template:`
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
    `})},p={render:()=>({components:{Textarea:r,Label:m},template:`
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
    `})},B={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:h},template:"<ControlledExample />"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const W=["Playground","Basic","States","Controlled"];export{x as Basic,B as Controlled,c as Playground,p as States,W as __namedExportsOrder,Q as default};
