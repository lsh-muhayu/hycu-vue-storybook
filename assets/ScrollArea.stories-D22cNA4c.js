import{r as m}from"./iframe-m8dtQMyq.js";import{_ as r}from"./ScrollArea-C8lGzqbn.js";import{_ as v}from"./ScrollAreaAutoSize-CNGiwEFP.js";import{_ as u}from"./Button-HzhOak85.js";import"./preload-helper-PPVm8Dsz.js";import"./Primitive-D4N1wLbu.js";import"./useDirection-C94-6zlN.js";import"./Presence-B1L2nCTI.js";import"./index-NpKMaY7x.js";import"./useForwardProps-DMPGBN8H.js";const _={title:"Shared/UI/ScrollArea",component:r,parameters:{layout:"centered",docs:{description:{component:`
### 스크롤 영역 컴포넌트

ScrollArea 컴포넌트는 긴 콘텐츠를 스크롤 가능한 영역으로 표시하기 위한 컴포넌트입니다.
Reka UI의 ScrollArea를 기반으로 하며, 세로 및 가로 스크롤바를 선택적으로 표시할 수 있습니다.

## 주요 기능

- **세로 스크롤**: \`showVertical\` prop을 통해 세로 스크롤바 표시 여부 제어
- **가로 스크롤**: \`showHorizontal\` prop을 통해 가로 스크롤바 표시 여부 제어
- **자동 크기 조절**: \`ScrollAreaAutoSize\` 컴포넌트를 통한 자동 크기 조절
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<ScrollArea class="h-64 w-80">
  <div>긴 콘텐츠...</div>
</ScrollArea>

<ScrollArea class="h-64 w-80" :show-vertical="true" :show-horizontal="true">
  <div>양방향 스크롤 콘텐츠...</div>
</ScrollArea>

<ScrollAreaAutoSize class="h-64 w-80">
  <div>자동 크기 조절 콘텐츠...</div>
</ScrollAreaAutoSize>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"세로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"가로 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},x=Array.from({length:50},(e,s)=>`문단 ${s+1}: 이것은 긴 텍스트 콘텐츠입니다. 스크롤이 필요한 긴 내용을 보여주기 위한 예시입니다. 각 문단은 충분한 길이를 가지고 있어 스크롤 영역의 동작을 확인할 수 있습니다.`).join(`

`),g=Array.from({length:30},(e,s)=>`항목 ${s+1}`),a={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \`true\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \`true\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        `}}},args:{showVertical:!0,showHorizontal:!0},render:e=>({components:{ScrollArea:r},setup(){return{args:e}},template:`
      <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" v-bind="args">
        <div class="min-w-[800px] pr-4 pb-4">
          <p class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 콘텐츠</p>
          <div class="space-y-4">
            <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                항목 {{ i }}-{{ j }}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    `})},l={render:()=>({components:{ScrollArea:r},setup(){return{longText:x}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스크롤 영역</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">긴 텍스트 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},n={render:()=>({components:{ScrollArea:r},setup(){return{longText:x}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">세로 스크롤 (기본)</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" :show-vertical="true">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">세로로 스크롤 가능한 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},t={render:()=>({components:{ScrollArea:r},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">가로 스크롤</h3>
          <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4" :show-horizontal="true">
            <div class="pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">가로로 스크롤 가능한 콘텐츠</p>
              <div class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                <div v-for="i in 20" :key="i" class="min-w-[200px] rounded bg-gray-100 p-4">
                  넓은 콘텐츠 박스 {{ i }}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},o={render:()=>({components:{ScrollArea:r},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">양방향 스크롤</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="true"
            :show-horizontal="true"
          >
            <div class="pr-4 pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">
                세로와 가로 모두 스크롤 가능한 콘텐츠
              </p>
              <div class="space-y-4">
                <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                  <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                    항목 {{ i }}-{{ j }}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},c={render:()=>({components:{ScrollArea:r},setup(){return{longList:g}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">리스트 콘텐츠</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300">
            <div class="p-2">
              <ul class="space-y-1">
                <li
                  v-for="(item, index) in longList"
                  :key="index"
                  class="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},i={render:()=>({components:{ScrollAreaAutoSize:v,Button:u},setup(){const e=m(3);return{count:e,lorem:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!",decreaseCount:()=>{e.value=Math.max(0,e.value-1)},increaseCount:()=>{e.value=Math.min(10,e.value+1)}}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">자동 크기 조절</h3>
          <ScrollAreaAutoSize class="max-h-[300px] max-w-[400px] rounded border border-gray-300">
            <div class="p-4">
              <p v-for="i in count" :key="i" class="mb-4 text-sm text-gray-600">
                {{ lorem }}
              </p>
            </div>
          </ScrollAreaAutoSize>
        </div>
        <div class="flex justify-center gap-2">
          <Button
            color="danger"
            variant="filled"
            size="md"
            @click="decreaseCount"
            :disabled="count === 0"
          >
            문단 제거
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="md"
            @click="increaseCount"
            :disabled="count === 10"
          >
            문단 추가
          </Button>
        </div>
      </div>
    `})},d={render:()=>({components:{ScrollArea:r},setup(){return{longText:x}},template:`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스크롤바 없음</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="false"
            :show-horizontal="false"
          >
            <div class="pr-4">
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    `})},p={render:()=>({components:{ScrollArea:r},setup(){return{longText:x}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 크기</h3>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">작은 크기 (h-32)</p>
              <ScrollArea class="h-32 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">중간 크기 (h-48)</p>
              <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">큰 크기 (h-64)</p>
              <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 ScrollArea 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 showVertical, showHorizontal 등의 속성을 변경해보세요.

## 사용 팁

- **ShowVertical**: \\\`true\\\`로 설정하면 세로 스크롤바가 표시됩니다. (기본값: true)
- **ShowHorizontal**: \\\`true\\\`로 설정하면 가로 스크롤바가 표시됩니다. (기본값: false)
- 스크롤바는 콘텐츠가 영역을 넘어갈 때만 표시됩니다.
        \`
      }
    }
  },
  args: {
    showVertical: true,
    showHorizontal: true
  },
  render: args => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
      <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" v-bind="args">
        <div class="min-w-[800px] pr-4 pb-4">
          <p class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 콘텐츠</p>
          <div class="space-y-4">
            <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
              <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                항목 {{ i }}-{{ j }}
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    \`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스크롤 영역</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">긴 텍스트 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">세로 스크롤 (기본)</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4" :show-vertical="true">
            <div class="pr-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">세로로 스크롤 가능한 콘텐츠</p>
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">가로 스크롤</h3>
          <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4" :show-horizontal="true">
            <div class="pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">가로로 스크롤 가능한 콘텐츠</p>
              <div class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                <div v-for="i in 20" :key="i" class="min-w-[200px] rounded bg-gray-100 p-4">
                  넓은 콘텐츠 박스 {{ i }}
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">양방향 스크롤</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="true"
            :show-horizontal="true"
          >
            <div class="pr-4 pb-4">
              <p class="mb-4 text-sm font-semibold text-gray-700">
                세로와 가로 모두 스크롤 가능한 콘텐츠
              </p>
              <div class="space-y-4">
                <div v-for="i in 10" :key="i" class="flex gap-4 text-sm whitespace-nowrap text-gray-600">
                  <div v-for="j in 15" :key="j" class="min-w-[150px] rounded bg-gray-100 p-2">
                    항목 {{ i }}-{{ j }}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longList
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">리스트 콘텐츠</h3>
          <ScrollArea class="h-64 w-80 rounded border border-gray-300">
            <div class="p-2">
              <ul class="space-y-1">
                <li
                  v-for="(item, index) in longList"
                  :key="index"
                  class="rounded px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100"
                >
                  {{ item }}
                </li>
              </ul>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollAreaAutoSize,
      Button
    },
    setup() {
      const count = ref(3);
      const lorem = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';
      const decreaseCount = () => {
        count.value = Math.max(0, count.value - 1);
      };
      const increaseCount = () => {
        count.value = Math.min(10, count.value + 1);
      };
      return {
        count,
        lorem,
        decreaseCount,
        increaseCount
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">자동 크기 조절</h3>
          <ScrollAreaAutoSize class="max-h-[300px] max-w-[400px] rounded border border-gray-300">
            <div class="p-4">
              <p v-for="i in count" :key="i" class="mb-4 text-sm text-gray-600">
                {{ lorem }}
              </p>
            </div>
          </ScrollAreaAutoSize>
        </div>
        <div class="flex justify-center gap-2">
          <Button
            color="danger"
            variant="filled"
            size="md"
            @click="decreaseCount"
            :disabled="count === 0"
          >
            문단 제거
          </Button>
          <Button
            color="primary"
            variant="filled"
            size="md"
            @click="increaseCount"
            :disabled="count === 10"
          >
            문단 추가
          </Button>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">스크롤바 없음</h3>
          <ScrollArea
            class="h-64 w-80 rounded border border-gray-300 p-4"
            :show-vertical="false"
            :show-horizontal="false"
          >
            <div class="pr-4">
              <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
            </div>
          </ScrollArea>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ScrollArea
    },
    setup() {
      return {
        longText
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 크기</h3>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">작은 크기 (h-32)</p>
              <ScrollArea class="h-32 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">중간 크기 (h-48)</p>
              <ScrollArea class="h-48 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
            <div class="flex flex-col gap-1">
              <p class="text-xs text-gray-500">큰 크기 (h-64)</p>
              <ScrollArea class="h-64 w-80 rounded border border-gray-300 p-4">
                <div class="pr-4">
                  <div class="space-y-2 text-sm text-gray-600 whitespace-pre-line">{{ longText }}</div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};const C=["Playground","Basic","Vertical","Horizontal","Both","List","Autosize","NoScrollbars","DifferentSizes"];export{i as Autosize,l as Basic,o as Both,p as DifferentSizes,t as Horizontal,c as List,d as NoScrollbars,a as Playground,n as Vertical,C as __namedExportsOrder,_ as default};
