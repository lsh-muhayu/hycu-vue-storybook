import{d as b,s as T,e as _,f as k,g as w,v as V,S as L,T as q,o as A,c as h,m as F,r as v,a,q as l,w as i,x as s,t as g}from"./iframe-CDjrE9_A.js";import{_ as f}from"./Label-D_kRndr7.js";import{_ as y}from"./Button-Dw8rbyqz.js";import"./preload-helper-PPVm8Dsz.js";const P=w(["w-full rounded border border-gray-300 bg-white px-3 py-2 text-sm font-normal text-gray-900 transition-all placeholder:text-gray-400","not-read-only:focus:border-primary not-read-only:focus:shadow-[0_0_0_3px_rgba(106,0,40,0.1)] focus-visible:outline-none","disabled:cursor-not-allowed disabled:bg-gray-100 disabled:opacity-70","read-only:bg-gray-50"],{variants:{invalid:{true:"border-danger text-danger not-read-only:focus:border-danger not-read-only:focus:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]"}}}),r=b({__name:"Textarea",props:T({class:{default:""},invalid:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(o){const u=o,n=_(()=>k(P({invalid:u.invalid}),u.class)),t=V(o,"modelValue");return(B,C)=>L((A(),h("textarea",F(B.$attrs,{"onUpdate:modelValue":C[0]||(C[0]=D=>t.value=D),class:n.value}),null,16)),[[q,t.value]])}});r.__docgenInfo={exportName:"default",displayName:"Textarea",type:1,props:[{name:"invalid",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"modelValue",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"invalid",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"modelValue",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/textarea/Textarea.vue"};const R={class:"flex flex-col gap-6"},N={class:"flex flex-col gap-4"},S={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},I={class:"flex flex-col gap-2"},O={class:"text-xs text-gray-500"},U={class:"flex flex-col gap-2"},M={class:"text-xs text-gray-500"},K={class:"flex flex-col gap-2"},$={class:"text-xs text-gray-500"},H={class:"flex gap-2"},E=b({__name:"Controlled.stories",setup(o){const u=v("이것은 초기 설명입니다."),n=v(""),t=v(""),B=()=>{u.value="",n.value="",t.value=""},C=()=>{u.value="이것은 제어 컴포넌트 예시입니다. 부모 컴포넌트가 v-model을 통해 상태를 제어합니다.",n.value="좋은 제품입니다. 사용하기 편리하고 기능이 다양합니다.",t.value=`추가로 개선할 점:
1. 성능 최적화
2. UI 개선
3. 접근성 향상`};return(D,e)=>(A(),h("div",R,[a("div",N,[e[8]||(e[8]=a("div",{class:"flex flex-col gap-2"},[a("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),a("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 textarea의 상태를 제어합니다. textarea에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 textarea가 즉시 반영됩니다. ")],-1)),a("div",S,[a("div",I,[l(f,{required:"",for:"controlled-description",class:"text-sm font-medium text-gray-700"},{default:i(()=>[...e[3]||(e[3]=[s("설명",-1)])]),_:1}),l(r,{id:"controlled-description",modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=d=>u.value=d),placeholder:"설명을 입력하세요",rows:3},null,8,["modelValue"]),a("span",O," 현재 값: "+g(u.value||"(비어있음)")+" (초기값: 이것은 초기 설명입니다.) ",1)]),a("div",U,[l(f,{required:"",for:"controlled-feedback",class:"text-sm font-medium text-gray-700"},{default:i(()=>[...e[4]||(e[4]=[s("피드백",-1)])]),_:1}),l(r,{id:"controlled-feedback",modelValue:n.value,"onUpdate:modelValue":e[1]||(e[1]=d=>n.value=d),placeholder:"피드백을 입력하세요",rows:4},null,8,["modelValue"]),a("span",M,"현재 값: "+g(n.value||"(비어있음)"),1)]),a("div",K,[l(f,{for:"controlled-notes",class:"text-sm font-medium text-gray-700"},{default:i(()=>[...e[5]||(e[5]=[s("메모",-1)])]),_:1}),l(r,{id:"controlled-notes",modelValue:t.value,"onUpdate:modelValue":e[2]||(e[2]=d=>t.value=d),placeholder:"메모를 입력하세요",rows:5},null,8,["modelValue"]),a("span",$,"현재 값: "+g(t.value||"(비어있음)"),1)])]),a("div",H,[l(y,{onClick:C},{default:i(()=>[...e[6]||(e[6]=[s(" 값 채우기 ",-1)])]),_:1}),l(y,{color:"secondary",onClick:B},{default:i(()=>[...e[7]||(e[7]=[s(" 초기화 ",-1)])]),_:1})]),e[9]||(e[9]=a("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[a("p",{class:"text-xs text-blue-800"},[a("strong",null,"참고:"),s(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. textarea에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 textarea가 즉시 반영됩니다. ")])],-1))])]))}});E.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/textarea/stories/Controlled.stories.vue"};const Q={title:"Shared/UI/Textarea",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},render:o=>({components:{Textarea:r},setup(){return{args:o}},template:'<Textarea v-bind="args" placeholder="내용을 입력하세요" />'})},p={render:()=>({components:{Textarea:r},template:`
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
    `})},m={render:()=>({components:{Textarea:r,Label:f},template:`
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
    `})},x={parameters:{docs:{description:{story:`
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
        `}}},render:()=>({components:{ControlledExample:E},template:"<ControlledExample />"})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const W=["Playground","Basic","States","Controlled"];export{p as Basic,x as Controlled,c as Playground,m as States,W as __namedExportsOrder,Q as default};
