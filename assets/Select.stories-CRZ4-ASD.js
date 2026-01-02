import{r as v}from"./iframe-cOqlqFNJ.js";import{c as e,_ as t,a as l,b as n}from"./SelectItem-DDq-nnv2.js";import{_ as p}from"./Label-BnRhLQW1.js";import"./preload-helper-PPVm8Dsz.js";import"./useForwardPropsEmits-CzoxnxhS.js";import"./index-X9IAtVgT.js";import"./Primitive-BQpNnros.js";import"./useId-B20TyznB.js";import"./Collection-DeG3OMcE.js";import"./usePrimitiveElement-CSKXqVMn.js";import"./PopperContent-BQues9ff.js";import"./Presence-DEPt90td.js";import"./Teleport-DGOJHG8Q.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ScrollArea--kc0YQ8c.js";import"./useDirection-Cb_g9FCC.js";import"./context-DnlA-MXY.js";import"./getActiveElement-FUKBWQwh.js";import"./ScrollAreaAutoSize-DYT6c4DL.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./nullish-CHIgUVhi.js";import"./useFormControl-sKDDr7Qh.js";import"./VisuallyHidden-XbiUExPy.js";import"./useFocusGuards-DWK-ngLc.js";const $={title:"Shared/UI/Select",component:e,parameters:{layout:"centered",docs:{description:{component:`
### 선택 드롭다운 컴포넌트

Select 컴포넌트는 사용자가 여러 옵션 중 하나를 선택할 수 있는 드롭다운 메뉴를 제공합니다.
Reka UI의 Select 프리미티브를 기반으로 구축되었으며, 접근성과 키보드 네비게이션을 완벽하게 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Select\`, \`SelectTrigger\`, \`SelectContent\`, \`SelectItem\`으로 구성
- **접근성 지원**: ARIA 속성 및 키보드 네비게이션 완벽 지원
- **스크롤 지원**: 많은 옵션이 있을 때 자동 스크롤 영역 제공
- **상태 관리**: \`disabled\`, \`invalid\`, \`readOnly\` 상태 지원
- **커스터마이징**: \`class\`를 통해 각 부분의 스타일 커스터마이징 가능
- **제어 가능**: \`v-model:modelValue\`를 통한 제어 컴포넌트 지원
- **비제어 가능**: \`defaultValue\`를 통한 비제어 컴포넌트 지원
- **아이콘**: 우측에 자동으로 아래 방향 아이콘 표시
- **플레이스홀더**: \`placeholder\` prop을 통해 선택 전 안내 텍스트 표시

## 사용 예시

\`\`\`vue
<template>
  <Select v-model:modelValue="selected">
    <SelectTrigger placeholder="옵션을 선택하세요" />
    <SelectContent>
      <SelectItem value="option1">옵션 1</SelectItem>
      <SelectItem value="option2">옵션 2</SelectItem>
      <SelectItem value="option3">옵션 3</SelectItem>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/shared/ui/select';

const selected = ref('');
<\/script>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Select 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"선택 전에 표시할 플레이스홀더 텍스트 (SelectTrigger에 전달)",table:{type:{summary:"string"}}},invalid:{control:"boolean",description:"유효하지 않은 입력 여부 (빨간색 테두리 및 텍스트 표시, SelectTrigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},readOnly:{control:"boolean",description:"읽기 전용 여부 (회색 배경 표시, SelectTrigger에 전달)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},c={render:g=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},setup(){return{args:g}},template:`
      <div class="w-80">
        <Select :disabled="args.disabled">
          <SelectTrigger
            class="w-full text-left"
            :placeholder="args.placeholder"
            :invalid="args.invalid"
            :read-only="args.readOnly"
          />
          <SelectContent>
            <SelectItem value="option1">옵션 1</SelectItem>
            <SelectItem value="option2">옵션 2</SelectItem>
            <SelectItem value="option3">옵션 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    `}),parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 선택 전에 표시할 안내 텍스트를 설정합니다. Trigger에 표시되는 플레이스홀더 텍스트가 변경됩니다.
- **Disabled**: \`true\`로 설정하면 Select가 비활성화되어 선택할 수 없습니다. Trigger가 회색으로 표시되고 클릭할 수 없게 됩니다.
- **Invalid**: \`true\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다. Trigger의 테두리와 텍스트가 빨간색으로 변경됩니다.
- **ReadOnly**: \`true\`로 설정하면 읽기 전용 상태임을 나타내는 회색 배경이 표시됩니다. Trigger의 배경이 회색으로 변경됩니다.
        `}}},args:{disabled:!1,placeholder:"옵션을 선택하세요",invalid:!1,readOnly:!1}},a={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 Select</h3>
          <Select>
            <SelectTrigger
              class="w-full text-left"
              placeholder="옵션을 선택하세요"
            />
            <SelectContent>
              <SelectItem value="option1">옵션 1</SelectItem>
              <SelectItem value="option2">옵션 2</SelectItem>
              <SelectItem value="option3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    `})},o={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t,Label:p},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Label과 함께 사용</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="select-basic">기본 선택</Label>
              <Select>
                <SelectTrigger
                  id="select-basic"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-required" required>
                필수 선택
              </Label>
              <Select>
                <SelectTrigger
                  id="select-required"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    `})},s={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본값이 있는 Select</h3>
          <Select default-value="option2">
            <SelectTrigger
              class="w-full text-left"
              placeholder="옵션을 선택하세요"
            />
            <SelectContent>
              <SelectItem value="option1">옵션 1</SelectItem>
              <SelectItem value="option2">옵션 2</SelectItem>
              <SelectItem value="option3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    `})},r={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t,Label:p},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="select-normal">일반</Label>
              <Select>
                <SelectTrigger
                  id="select-normal"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-disabled">비활성화</Label>
              <Select disabled>
                <SelectTrigger
                  id="select-disabled"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-invalid">유효하지 않은 입력</Label>
              <Select>
                <SelectTrigger
                  id="select-invalid"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                  invalid
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-readonly">읽기 전용</Label>
              <Select>
                <SelectTrigger
                  id="select-readonly"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                  read-only
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이템 상태</h3>
          <Select default-value="option2">
            <SelectTrigger
              class="w-full text-left"
              placeholder="상태를 확인하세요"
            />
            <SelectContent>
              <SelectItem value="option1">일반 아이템</SelectItem>
              <SelectItem value="option2">선택된 아이템 (checked)</SelectItem>
              <SelectItem value="option3" disabled>
                비활성화된 아이템
              </SelectItem>
              <SelectItem value="option4">일반 아이템</SelectItem>
            </SelectContent>
          </Select>
          <p class="text-xs text-gray-500">
            • hover: 연한 파랑 배경과 파랑 텍스트
            <br />• checked: 진한 파랑 배경과 흰색 텍스트
            <br />• disabled: 투명도 60%로 표시
          </p>
        </div>
      </div>
    `})},S={parameters:{docs:{description:{story:`
이 스토리는 많은 옵션이 있는 Select 컴포넌트를 보여줍니다.

**maxHeight 설정**: Content의 \`maxHeight\` prop을 \`screen\`으로 설정하면, 드롭다운이 화면에서 보일 수 있는 만큼 최대한 늘어납니다. 화면 하단에 가까워지면 자동으로 높이가 조절되어 모든 옵션이 화면 안에 표시되도록 합니다.

- number(기본: 300): 최대 ~px까지 표시
- screen: 사용 가능한 공간에 맞춰 높이 자동 조절
- 스크롤: 옵션이 많을 경우 자동으로 스크롤바 표시
        `}}},render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">많은 옵션이 있는 Select</h3>
          <Select>
            <SelectTrigger
              class="w-full text-left"
              placeholder="국가를 선택하세요"
            />
            <SelectContent max-height="screen">
              <SelectItem v-for="i in 100" :key="i" :value="'option' + i">
                옵션 {{ i }}
              </SelectItem>
            </SelectContent>
          </Select>
          <p class="text-xs text-gray-500">
            <strong>maxHeight="screen"</strong>으로 설정되어 화면에서 보일 수 있는 만큼
            최대한 늘어납니다.
          </p>
        </div>
      </div>
    `})},m={parameters:{docs:{description:{story:`
이 스토리는 AutoSize 기능을 통해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 것을 보여줍니다.

**AutoSize 동작 방식**:
- ScrollAreaAutoSize를 사용하여 콘텐츠 크기에 따라 자동으로 높이가 조절됩니다.
- 아이템이 적을 때: Content가 아이템에 맞춰 작게 표시됩니다.
- 아이템이 많을 때: Content가 maxHeight까지 늘어나고, 그 이상은 스크롤바가 표시됩니다.

**장점**:
- 아이템이 적을 때 불필요한 공간을 차지하지 않습니다.
- 아이템이 많을 때는 maxHeight까지 늘어나 최대한 많은 옵션을 한 번에 보여줍니다.
- 사용자 경험이 향상됩니다.
        `}}},render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t,Label:p},template:`
      <div class="flex w-full flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">AutoSize 기능 비교</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <h4 class="text-xs font-medium text-gray-600">아이템이 적을 때 (3개)</h4>
              <Select>
                <SelectTrigger
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent :max-height="300">
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
              <p class="text-xs text-gray-500">
                Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다.
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-xs font-medium text-gray-600">아이템이 많을 때 (20개)</h4>
              <Select>
                <SelectTrigger
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent :max-height="300">
                  <SelectItem v-for="i in 20" :key="i" :value="'option' + i">
                    옵션 {{ i }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <p class="text-xs text-gray-500">
                Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">실제 사용 예시</h3>
          <div class="flex flex-col gap-2">
            <Label for="autosize-select">동적 크기 조절 Select</Label>
            <Select>
              <SelectTrigger
                id="autosize-select"
                class="w-full text-left"
                placeholder="옵션을 선택하세요"
              />
              <SelectContent :max-height="300">
                <SelectItem value="item1">첫 번째 항목</SelectItem>
                <SelectItem value="item2">두 번째 항목</SelectItem>
                <SelectItem value="item3">세 번째 항목</SelectItem>
                <SelectItem value="item4">네 번째 항목</SelectItem>
                <SelectItem value="item5">다섯 번째 항목</SelectItem>
              </SelectContent>
            </Select>
            <p class="text-xs text-gray-500">
              위 예시는 5개의 아이템만 있어 Content가 작게 표시됩니다. 아이템을 더 추가하면
              maxHeight까지 늘어납니다.
            </p>
          </div>
        </div>
      </div>
    `})},d={render:()=>({components:{Select:e,SelectTrigger:n,SelectContent:l,SelectItem:t},setup(){return{value:v("option1")}},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">제어 컴포넌트</h3>
          <div class="flex flex-col gap-2">
            <Select v-model:model-value="value">
              <SelectTrigger
                class="w-full text-left"
                placeholder="옵션을 선택하세요"
              />
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
                <SelectItem value="option3">옵션 3</SelectItem>
              </SelectContent>
            </Select>
            <p class="text-sm text-gray-600">선택된 값: {{ value }}</p>
          </div>
        </div>
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
      <div class="w-80">
        <Select :disabled="args.disabled">
          <SelectTrigger
            class="w-full text-left"
            :placeholder="args.placeholder"
            :invalid="args.invalid"
            :read-only="args.readOnly"
          />
          <SelectContent>
            <SelectItem value="option1">옵션 1</SelectItem>
            <SelectItem value="option2">옵션 2</SelectItem>
            <SelectItem value="option3">옵션 3</SelectItem>
          </SelectContent>
        </Select>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Select 컴포넌트의 UI 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 placeholder, disabled, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **Placeholder**: 선택 전에 표시할 안내 텍스트를 설정합니다. Trigger에 표시되는 플레이스홀더 텍스트가 변경됩니다.
- **Disabled**: \\\`true\\\`로 설정하면 Select가 비활성화되어 선택할 수 없습니다. Trigger가 회색으로 표시되고 클릭할 수 없게 됩니다.
- **Invalid**: \\\`true\\\`로 설정하면 유효하지 않은 입력임을 나타내는 빨간색 테두리와 텍스트가 표시됩니다. Trigger의 테두리와 텍스트가 빨간색으로 변경됩니다.
- **ReadOnly**: \\\`true\\\`로 설정하면 읽기 전용 상태임을 나타내는 회색 배경이 표시됩니다. Trigger의 배경이 회색으로 변경됩니다.
        \`
      }
    }
  },
  args: {
    disabled: false,
    placeholder: '옵션을 선택하세요',
    invalid: false,
    readOnly: false
  } as Record<string, unknown>
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 Select</h3>
          <Select>
            <SelectTrigger
              class="w-full text-left"
              placeholder="옵션을 선택하세요"
            />
            <SelectContent>
              <SelectItem value="option1">옵션 1</SelectItem>
              <SelectItem value="option2">옵션 2</SelectItem>
              <SelectItem value="option3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      Label
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Label과 함께 사용</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="select-basic">기본 선택</Label>
              <Select>
                <SelectTrigger
                  id="select-basic"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-required" required>
                필수 선택
              </Label>
              <Select>
                <SelectTrigger
                  id="select-required"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본값이 있는 Select</h3>
          <Select default-value="option2">
            <SelectTrigger
              class="w-full text-left"
              placeholder="옵션을 선택하세요"
            />
            <SelectContent>
              <SelectItem value="option1">옵션 1</SelectItem>
              <SelectItem value="option2">옵션 2</SelectItem>
              <SelectItem value="option3">옵션 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      Label
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 상태</h3>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-1">
              <Label for="select-normal">일반</Label>
              <Select>
                <SelectTrigger
                  id="select-normal"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-disabled">비활성화</Label>
              <Select disabled>
                <SelectTrigger
                  id="select-disabled"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-invalid">유효하지 않은 입력</Label>
              <Select>
                <SelectTrigger
                  id="select-invalid"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                  invalid
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div class="flex flex-col gap-1">
              <Label for="select-readonly">읽기 전용</Label>
              <Select>
                <SelectTrigger
                  id="select-readonly"
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                  read-only
                />
                <SelectContent>
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이템 상태</h3>
          <Select default-value="option2">
            <SelectTrigger
              class="w-full text-left"
              placeholder="상태를 확인하세요"
            />
            <SelectContent>
              <SelectItem value="option1">일반 아이템</SelectItem>
              <SelectItem value="option2">선택된 아이템 (checked)</SelectItem>
              <SelectItem value="option3" disabled>
                비활성화된 아이템
              </SelectItem>
              <SelectItem value="option4">일반 아이템</SelectItem>
            </SelectContent>
          </Select>
          <p class="text-xs text-gray-500">
            • hover: 연한 파랑 배경과 파랑 텍스트
            <br />• checked: 진한 파랑 배경과 흰색 텍스트
            <br />• disabled: 투명도 60%로 표시
          </p>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 옵션이 있는 Select 컴포넌트를 보여줍니다.

**maxHeight 설정**: Content의 \\\`maxHeight\\\` prop을 \\\`screen\\\`으로 설정하면, 드롭다운이 화면에서 보일 수 있는 만큼 최대한 늘어납니다. 화면 하단에 가까워지면 자동으로 높이가 조절되어 모든 옵션이 화면 안에 표시되도록 합니다.

- number(기본: 300): 최대 ~px까지 표시
- screen: 사용 가능한 공간에 맞춰 높이 자동 조절
- 스크롤: 옵션이 많을 경우 자동으로 스크롤바 표시
        \`
      }
    }
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">많은 옵션이 있는 Select</h3>
          <Select>
            <SelectTrigger
              class="w-full text-left"
              placeholder="국가를 선택하세요"
            />
            <SelectContent max-height="screen">
              <SelectItem v-for="i in 100" :key="i" :value="'option' + i">
                옵션 {{ i }}
              </SelectItem>
            </SelectContent>
          </Select>
          <p class="text-xs text-gray-500">
            <strong>maxHeight="screen"</strong>으로 설정되어 화면에서 보일 수 있는 만큼
            최대한 늘어납니다.
          </p>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 AutoSize 기능을 통해 아이템 수에 따라 Content 크기가 가변적으로 달라지는 것을 보여줍니다.

**AutoSize 동작 방식**:
- ScrollAreaAutoSize를 사용하여 콘텐츠 크기에 따라 자동으로 높이가 조절됩니다.
- 아이템이 적을 때: Content가 아이템에 맞춰 작게 표시됩니다.
- 아이템이 많을 때: Content가 maxHeight까지 늘어나고, 그 이상은 스크롤바가 표시됩니다.

**장점**:
- 아이템이 적을 때 불필요한 공간을 차지하지 않습니다.
- 아이템이 많을 때는 maxHeight까지 늘어나 최대한 많은 옵션을 한 번에 보여줍니다.
- 사용자 경험이 향상됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem,
      Label
    },
    template: /*html*/\`
      <div class="flex w-full flex-col gap-8">
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">AutoSize 기능 비교</h3>
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div class="flex flex-col gap-2">
              <h4 class="text-xs font-medium text-gray-600">아이템이 적을 때 (3개)</h4>
              <Select>
                <SelectTrigger
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent :max-height="300">
                  <SelectItem value="option1">옵션 1</SelectItem>
                  <SelectItem value="option2">옵션 2</SelectItem>
                  <SelectItem value="option3">옵션 3</SelectItem>
                </SelectContent>
              </Select>
              <p class="text-xs text-gray-500">
                Content가 아이템에 맞춰 작게 표시됩니다. 스크롤바가 나타나지 않습니다.
              </p>
            </div>
            <div class="flex flex-col gap-2">
              <h4 class="text-xs font-medium text-gray-600">아이템이 많을 때 (20개)</h4>
              <Select>
                <SelectTrigger
                  class="w-full text-left"
                  placeholder="옵션을 선택하세요"
                />
                <SelectContent :max-height="300">
                  <SelectItem v-for="i in 20" :key="i" :value="'option' + i">
                    옵션 {{ i }}
                  </SelectItem>
                </SelectContent>
              </Select>
              <p class="text-xs text-gray-500">
                Content가 maxHeight(300px)까지 늘어나고, 스크롤바가 표시됩니다.
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-gray-700">실제 사용 예시</h3>
          <div class="flex flex-col gap-2">
            <Label for="autosize-select">동적 크기 조절 Select</Label>
            <Select>
              <SelectTrigger
                id="autosize-select"
                class="w-full text-left"
                placeholder="옵션을 선택하세요"
              />
              <SelectContent :max-height="300">
                <SelectItem value="item1">첫 번째 항목</SelectItem>
                <SelectItem value="item2">두 번째 항목</SelectItem>
                <SelectItem value="item3">세 번째 항목</SelectItem>
                <SelectItem value="item4">네 번째 항목</SelectItem>
                <SelectItem value="item5">다섯 번째 항목</SelectItem>
              </SelectContent>
            </Select>
            <p class="text-xs text-gray-500">
              위 예시는 5개의 아이템만 있어 Content가 작게 표시됩니다. 아이템을 더 추가하면
              maxHeight까지 늘어납니다.
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    setup() {
      const value = ref<string>('option1');
      return {
        value
      };
    },
    template: /*html*/\`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">제어 컴포넌트</h3>
          <div class="flex flex-col gap-2">
            <Select v-model:model-value="value">
              <SelectTrigger
                class="w-full text-left"
                placeholder="옵션을 선택하세요"
              />
              <SelectContent>
                <SelectItem value="option1">옵션 1</SelectItem>
                <SelectItem value="option2">옵션 2</SelectItem>
                <SelectItem value="option3">옵션 3</SelectItem>
              </SelectContent>
            </Select>
            <p class="text-sm text-gray-600">선택된 값: {{ value }}</p>
          </div>
        </div>
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};const B=["Playground","Basic","WithLabel","WithDefaultValue","States","ItemStates","MaxHeight","AutoSize","Controlled"];export{m as AutoSize,a as Basic,d as Controlled,i as ItemStates,S as MaxHeight,c as Playground,r as States,s as WithDefaultValue,o as WithLabel,B as __namedExportsOrder,$ as default};
