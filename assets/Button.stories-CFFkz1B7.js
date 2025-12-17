import{_ as t}from"./Button-Mo7hRNkf.js";import{c as n}from"./createLucideIcon-lnSfYLDN.js";import"./iframe-B49EsqYK.js";import"./preload-helper-PPVm8Dsz.js";import"./cn-CwZzh8fo.js";const s=n("bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);const B=n("circle-pause",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);const m=n("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);const d=n("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]);const v=n("trash-2",[["path",{d:"M10 11v6",key:"nco0om"}],["path",{d:"M14 11v6",key:"outv1u"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6",key:"miytrc"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",key:"e791ji"}]]),y={title:"Shared/UI/Button",component:t,parameters:{layout:"centered",docs:{description:{component:'\n### 사용자 액션을 위한 인터랙티브 버튼 컴포넌트\n\n버튼 컴포넌트는 사용자 인터페이스에서 액션을 트리거하는 데 사용됩니다. 다양한 크기, 색상 및 변형을 지원합니다.\n\n## 주요 기능\n\n- **다양한 사이즈**: `xs`, `sm`, `md`, `lg`, `icon-md`, `icon-sm` 여섯 가지 크기 옵션 제공\n- **여러 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning`, `deepblue` 색상 지원\n- **세 가지 스타일 변형**: `filled` (채워진), `outlined` (테두리), `text` (텍스트) 스타일\n- **로딩 상태 표시**: 비동기 작업 중 로딩 스피너 자동 표시\n- **아이콘 버튼 지원**: 아이콘과 텍스트를 함께 사용 가능\n- **접근성 지원**: `disabled` 상태 및 `aria-busy` 속성으로 접근성 향상\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Button color="primary" variant="filled" size="md">\n  버튼 텍스트\n</Button>\n```\n        '}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","text"],description:"버튼의 스타일 변형",table:{type:{summary:"'filled' | 'outlined' | 'text'"},defaultValue:{summary:"'filled'"}}},color:{control:"select",options:["primary","secondary","danger","success","warning","deepblue"],description:"버튼의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'deepblue'"},defaultValue:{summary:"'primary'"}}},size:{control:"select",options:["xs","sm","md","lg","icon-md","icon-sm"],description:"버튼의 크기",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg' | 'icon-md' | 'icon-sm'"},defaultValue:{summary:"'md'"}}},disabled:{control:"boolean",description:"버튼 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"로딩 상태 여부. 로딩 중일 때는 자동으로 disabled 상태가 됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},o={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Variant**: 버튼의 스타일을 선택합니다. `filled`는 배경이 채워진 스타일, `outlined`는 테두리만 있는 스타일, `text`는 텍스트만 있는 스타일입니다.\n- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업에 사용, `warning`은 경고나 주의가 필요한 작업에 사용).\n- **Size**: 버튼의 크기를 조정합니다. `xs`는 매우 작은 버튼, `sm`는 작은 버튼, `md`는 기본 크기, `lg`는 큰 버튼, `icon-md`와 `icon-sm`는 아이콘 전용 버튼입니다.\n- **Loading**: `true`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.\n        "}}},args:{variant:"filled",color:"primary",size:"md"},render:c=>({components:{Button:t},setup(){return{args:c}},template:'<Button v-bind="args">Button</Button>'})},a={render:()=>({components:{Button:t},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Filled Variant</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="filled" color="secondary">Secondary</Button>
            <Button variant="filled" color="danger">Danger</Button>
            <Button variant="filled" color="success">Success</Button>
            <Button variant="filled" color="warning">Warning</Button>
            <Button variant="filled" color="deepblue">Deep Blue</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Outlined Variant</h3>
          <div class="flex gap-4">
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="danger">Danger</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" color="warning">Warning</Button>
            <Button variant="outlined" color="deepblue">Deep Blue</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Text Variant</h3>
          <div class="flex gap-4">
            <Button variant="text" color="primary">Primary</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant="text" color="danger">Danger</Button>
            <Button variant="text" color="success">Success</Button>
            <Button variant="text" color="warning">Warning</Button>
            <Button variant="text" color="deepblue">Deep Blue</Button>
          </div>
        </div>
      </div>
    `})},l={render:()=>({components:{Button:t,Bell:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">XSmall (xs)</h3>
          <div class="flex gap-4">
            <Button size="xs" variant="filled" color="primary">XSmall Button</Button>
            <Button size="xs" variant="outlined" color="primary">XSmall Button</Button>
            <Button size="xs" variant="text" color="primary">XSmall Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small (sm)</h3>
          <div class="flex gap-4">
            <Button size="sm" variant="filled" color="primary">Small Button</Button>
            <Button size="sm" variant="outlined" color="primary">Small Button</Button>
            <Button size="sm" variant="text" color="primary">Small Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium (md)</h3>
          <div class="flex gap-4">
            <Button size="md" variant="filled" color="primary">Medium Button</Button>
            <Button size="md" variant="outlined" color="primary">Medium Button</Button>
            <Button size="md" variant="text" color="primary">Medium Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large (lg)</h3>
          <div class="flex gap-4">
            <Button size="lg" variant="filled" color="primary">Large Button</Button>
            <Button size="lg" variant="outlined" color="primary">Large Button</Button>
            <Button size="lg" variant="text" color="primary">Large Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Icon Medium (icon-md)</h3>
          <div class="flex gap-4">
            <Button size="icon-md" variant="filled" color="primary">
              <Bell class="size-5" />
            </Button>
            <Button size="icon-md" variant="outlined" color="primary">
              <Bell class="size-5" />
            </Button>
            <Button size="icon-md" variant="text" color="primary">
              <Bell class="size-5" />
            </Button>
          </div>
        </div>
      </div>
    `})},e={render:()=>({components:{Button:t},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary">Normal Button</Button>
            <Button variant="outlined" color="primary">Normal Button</Button>
            <Button variant="text" color="primary">Normal Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" disabled>Disabled Button</Button>
            <Button variant="outlined" color="primary" disabled>Disabled Button</Button>
            <Button variant="text" color="primary" disabled>Disabled Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" loading>Loading Button</Button>
            <Button variant="outlined" color="primary" loading>Loading Button</Button>
            <Button variant="text" color="primary" loading>Loading Button</Button>
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{Button:t,Bell:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading - All Sizes</h3>
          <div class="flex items-center gap-4">
            <Button size="xs" variant="filled" color="primary" loading>XSmall Loading</Button>
            <Button size="sm" variant="filled" color="primary" loading>Small Loading</Button>
            <Button size="md" variant="filled" color="primary" loading>Medium Loading</Button>
            <Button size="lg" variant="filled" color="primary" loading>Large Loading</Button>
            <Button size="icon-md" variant="filled" color="primary" loading>
              <Bell class="size-5" />
            </Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading - All Colors</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" loading>Primary</Button>
            <Button variant="filled" color="secondary" loading>Secondary</Button>
            <Button variant="filled" color="danger" loading>Danger</Button>
            <Button variant="filled" color="success" loading>Success</Button>
            <Button variant="filled" color="warning" loading>Warning</Button>
            <Button variant="filled" color="deepblue" loading>Deep Blue</Button>
          </div>
        </div>
      </div>
    `})},u={render:()=>({components:{Button:t,LogOut:d},template:`
      <div class="flex flex-col gap-6">
        <div class="flex gap-4">
          <Button variant="filled" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
          <Button variant="outlined" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
          <Button variant="text" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
        </div>
      </div>
    `})},r={render:()=>({components:{Button:t,LogOut:d,Download:m,CirclePause:B,Trash2:v,Bell:s},template:`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <Button color="primary" variant="filled">Filled Primary</Button>
          <Button color="primary" variant="outlined">Outlined Primary</Button>
          <Button color="primary" variant="text">Text Primary</Button>
        </div>
        <div class="flex gap-4">
          <Button color="deepblue" variant="filled" size="lg">✅ 승인 (자동 Zoom 생성)</Button>
          <Button color="secondary" variant="outlined" size="lg">거절</Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="outlined" size="lg">취소</Button>
          <Button color="success" variant="filled" size="lg">생성 완료</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="filled" size="md">선택 학생에게 알림 발송</Button>
          <Button color="primary" variant="filled" size="md">첫 지도 계획 추가하기</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="filled" size="md">검색</Button>
          <Button color="secondary" variant="filled" size="md">초기화</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="outlined" size="xs">위원</Button>
          <Button color="success" variant="outlined" size="xs">위원장</Button>
        </div>
        <div class="flex gap-4">
          <Button color="danger" variant="filled" size="md">▶ 재생</Button>
          <Button color="secondary" variant="filled" size="md">⬇ 다운로드</Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="text" size="md">
            <LogOut class="size-4" /> 로그아웃
          </Button>
        </div>
        <div class="flex gap-4">
          <Button color="deepblue" variant="filled" size="md">
            <Download class="size-4" /> 권한 저장
          </Button>
          <Button color="warning" variant="filled" size="md">
            <CirclePause class="size-4" /> 권한 중지
          </Button>
          <Button color="danger" variant="filled" size="md">
            <Trash2 class="size-4" /> 완전 삭제
          </Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="text" size="icon-md">
            <Bell class="size-5" />
          </Button>
        </div>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Button 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 variant, color, size, disabled, loading 등의 속성을 변경해보세요.

## 사용 팁

- **Variant**: 버튼의 스타일을 선택합니다. \\\`filled\\\`는 배경이 채워진 스타일, \\\`outlined\\\`는 테두리만 있는 스타일, \\\`text\\\`는 텍스트만 있는 스타일입니다.
- **Color**: 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제나 위험한 작업에 사용, \\\`warning\\\`은 경고나 주의가 필요한 작업에 사용).
- **Size**: 버튼의 크기를 조정합니다. \\\`xs\\\`는 매우 작은 버튼, \\\`sm\\\`는 작은 버튼, \\\`md\\\`는 기본 크기, \\\`lg\\\`는 큰 버튼, \\\`icon-md\\\`와 \\\`icon-sm\\\`는 아이콘 전용 버튼입니다.
- **Loading**: \\\`true\\\`로 설정하면 버튼이 로딩 상태가 되며 자동으로 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    variant: 'filled',
    color: 'primary',
    size: 'md'
  },
  render: (args: ButtonProps) => ({
    components: {
      Button
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: \`<Button v-bind="args">Button</Button>\`
  })
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Filled Variant</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary">Primary</Button>
            <Button variant="filled" color="secondary">Secondary</Button>
            <Button variant="filled" color="danger">Danger</Button>
            <Button variant="filled" color="success">Success</Button>
            <Button variant="filled" color="warning">Warning</Button>
            <Button variant="filled" color="deepblue">Deep Blue</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Outlined Variant</h3>
          <div class="flex gap-4">
            <Button variant="outlined" color="primary">Primary</Button>
            <Button variant="outlined" color="secondary">Secondary</Button>
            <Button variant="outlined" color="danger">Danger</Button>
            <Button variant="outlined" color="success">Success</Button>
            <Button variant="outlined" color="warning">Warning</Button>
            <Button variant="outlined" color="deepblue">Deep Blue</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Text Variant</h3>
          <div class="flex gap-4">
            <Button variant="text" color="primary">Primary</Button>
            <Button variant="text" color="secondary">Secondary</Button>
            <Button variant="text" color="danger">Danger</Button>
            <Button variant="text" color="success">Success</Button>
            <Button variant="text" color="warning">Warning</Button>
            <Button variant="text" color="deepblue">Deep Blue</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Bell
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">XSmall (xs)</h3>
          <div class="flex gap-4">
            <Button size="xs" variant="filled" color="primary">XSmall Button</Button>
            <Button size="xs" variant="outlined" color="primary">XSmall Button</Button>
            <Button size="xs" variant="text" color="primary">XSmall Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small (sm)</h3>
          <div class="flex gap-4">
            <Button size="sm" variant="filled" color="primary">Small Button</Button>
            <Button size="sm" variant="outlined" color="primary">Small Button</Button>
            <Button size="sm" variant="text" color="primary">Small Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium (md)</h3>
          <div class="flex gap-4">
            <Button size="md" variant="filled" color="primary">Medium Button</Button>
            <Button size="md" variant="outlined" color="primary">Medium Button</Button>
            <Button size="md" variant="text" color="primary">Medium Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large (lg)</h3>
          <div class="flex gap-4">
            <Button size="lg" variant="filled" color="primary">Large Button</Button>
            <Button size="lg" variant="outlined" color="primary">Large Button</Button>
            <Button size="lg" variant="text" color="primary">Large Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Icon Medium (icon-md)</h3>
          <div class="flex gap-4">
            <Button size="icon-md" variant="filled" color="primary">
              <Bell class="size-5" />
            </Button>
            <Button size="icon-md" variant="outlined" color="primary">
              <Bell class="size-5" />
            </Button>
            <Button size="icon-md" variant="text" color="primary">
              <Bell class="size-5" />
            </Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary">Normal Button</Button>
            <Button variant="outlined" color="primary">Normal Button</Button>
            <Button variant="text" color="primary">Normal Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" disabled>Disabled Button</Button>
            <Button variant="outlined" color="primary" disabled>Disabled Button</Button>
            <Button variant="text" color="primary" disabled>Disabled Button</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" loading>Loading Button</Button>
            <Button variant="outlined" color="primary" loading>Loading Button</Button>
            <Button variant="text" color="primary" loading>Loading Button</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      Bell
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading - All Sizes</h3>
          <div class="flex items-center gap-4">
            <Button size="xs" variant="filled" color="primary" loading>XSmall Loading</Button>
            <Button size="sm" variant="filled" color="primary" loading>Small Loading</Button>
            <Button size="md" variant="filled" color="primary" loading>Medium Loading</Button>
            <Button size="lg" variant="filled" color="primary" loading>Large Loading</Button>
            <Button size="icon-md" variant="filled" color="primary" loading>
              <Bell class="size-5" />
            </Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading - All Colors</h3>
          <div class="flex gap-4">
            <Button variant="filled" color="primary" loading>Primary</Button>
            <Button variant="filled" color="secondary" loading>Secondary</Button>
            <Button variant="filled" color="danger" loading>Danger</Button>
            <Button variant="filled" color="success" loading>Success</Button>
            <Button variant="filled" color="warning" loading>Warning</Button>
            <Button variant="filled" color="deepblue" loading>Deep Blue</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      LogOut
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex gap-4">
          <Button variant="filled" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
          <Button variant="outlined" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
          <Button variant="text" color="primary">
            <LogOut class="size-4" />
            로그아웃
          </Button>
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button,
      LogOut,
      Download,
      CirclePause,
      Trash2,
      Bell
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <Button color="primary" variant="filled">Filled Primary</Button>
          <Button color="primary" variant="outlined">Outlined Primary</Button>
          <Button color="primary" variant="text">Text Primary</Button>
        </div>
        <div class="flex gap-4">
          <Button color="deepblue" variant="filled" size="lg">✅ 승인 (자동 Zoom 생성)</Button>
          <Button color="secondary" variant="outlined" size="lg">거절</Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="outlined" size="lg">취소</Button>
          <Button color="success" variant="filled" size="lg">생성 완료</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="filled" size="md">선택 학생에게 알림 발송</Button>
          <Button color="primary" variant="filled" size="md">첫 지도 계획 추가하기</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="filled" size="md">검색</Button>
          <Button color="secondary" variant="filled" size="md">초기화</Button>
        </div>
        <div class="flex gap-4">
          <Button color="primary" variant="outlined" size="xs">위원</Button>
          <Button color="success" variant="outlined" size="xs">위원장</Button>
        </div>
        <div class="flex gap-4">
          <Button color="danger" variant="filled" size="md">▶ 재생</Button>
          <Button color="secondary" variant="filled" size="md">⬇ 다운로드</Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="text" size="md">
            <LogOut class="size-4" /> 로그아웃
          </Button>
        </div>
        <div class="flex gap-4">
          <Button color="deepblue" variant="filled" size="md">
            <Download class="size-4" /> 권한 저장
          </Button>
          <Button color="warning" variant="filled" size="md">
            <CirclePause class="size-4" /> 권한 중지
          </Button>
          <Button color="danger" variant="filled" size="md">
            <Trash2 class="size-4" /> 완전 삭제
          </Button>
        </div>
        <div class="flex gap-4">
          <Button color="secondary" variant="text" size="icon-md">
            <Bell class="size-5" />
          </Button>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const D=["Playground","Variants","Sizes","States","LoadingStates","WithIcons","Examples"];export{r as Examples,i as LoadingStates,o as Playground,l as Sizes,e as States,a as Variants,u as WithIcons,D as __namedExportsOrder,y as default};
