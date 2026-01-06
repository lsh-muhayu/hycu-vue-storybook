import{q as c,d as B,b as p,e as d,l as L,c as C,o as x,i as f,n as g}from"./iframe-BdIRL-TT.js";import{D as y}from"./download-DAk3y5oH.js";import"./preload-helper-PPVm8Dsz.js";const v=c("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);const h=c("external-link",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);const D=c("refresh-ccw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]),b=L(d("inline-flex items-center justify-center gap-1 transition-colors outline-none","not-disabled:cursor-pointer not-disabled:hover:underline not-disabled:focus-visible:underline",'disabled:opacity-50 not-[aria-busy="true"]:disabled:cursor-not-allowed',"aria-busy:cursor-progress"),{variants:{color:{primary:"text-primary focus-visible:text-primary-dark hover:text-primary-dark",secondary:"text-secondary hover:text-gray-800 focus-visible:text-gray-800",success:"text-success hover:text-green-800 focus-visible:text-green-800",warning:"text-warning hover:text-yellow-800 focus-visible:text-yellow-800",danger:"text-danger hover:text-red-800 focus-visible:text-red-800",info:"text-info hover:text-blue-800 focus-visible:text-blue-800"},size:{xs:"text-xs",sm:"text-sm"}},defaultVariants:{color:"primary",size:"sm"}}),n=B({__name:"LinkButton",props:{color:{default:"primary"},size:{default:"sm"},class:{default:""}},setup(u){const l=u,k=p(()=>d(b({color:l.color,size:l.size}),l.class));return(m,z)=>(x(),C("button",{class:g(k.value)},[f(m.$slots,"default")],2))}});n.__docgenInfo={exportName:"default",displayName:"LinkButton",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"size",global:!1,description:"",tags:[],required:!1,type:'"sm" | "xs"',declarations:[],schema:{kind:"enum",type:'"sm" | "xs"',schema:['"sm"','"xs"']},default:'"sm"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "warning" | "danger" | "info"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "info"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"info"']},default:'"primary"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"size",type:'"sm" | "xs"',description:"",declarations:[],schema:{kind:"enum",type:'"sm" | "xs"',schema:['"sm"','"xs"']}},{name:"color",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "info"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "warning" | "danger" | "info"',schema:['"success"','"primary"','"secondary"','"warning"','"danger"','"info"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/link-button/LinkButton.vue"};const E={title:"Shared/UI/LinkButton",component:n,parameters:{layout:"centered",docs:{description:{component:`
### 링크처럼 보이는 버튼 컴포넌트

LinkButton 컴포넌트는 버튼처럼 클릭 가능하지만 링크처럼 보이는 UI 요소입니다. 
텍스트 링크 스타일을 유지하면서 버튼의 기능을 제공합니다.

## 주요 기능

- **여러 색상 옵션**: \`primary\`, \`secondary\`, \`danger\`, \`success\`, \`warning\`, \`info\` 색상 지원
- **크기 옵션**: \`xs\` (초소형), \`sm\` (작은 크기) 두 가지 크기 지원
- **호버 효과**: 마우스 오버 시 밑줄 표시 및 색상 변경
- **버튼 기능**: 버튼 요소로 구현되어 클릭 이벤트 처리 가능
- **간결한 디자인**: 텍스트 링크 스타일로 깔끔한 UI 제공

## 사용 예시

\`\`\`vue
<LinkButton color="primary" @click="() => console.log('clicked')">
  링크 버튼
</LinkButton>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning","info"],description:"링크 버튼의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info'"},defaultValue:{summary:"'primary'"}}},size:{control:"select",options:["xs","sm"],description:"링크 버튼의 크기",table:{type:{summary:"'xs' | 'sm'"},defaultValue:{summary:"'sm'"}}}}},t={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, disabled 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 삭제나 위험한 작업에 사용, `success`는 성공적인 작업에 사용).\n- **Size**: 링크 버튼의 크기를 조정합니다. `xs`는 초소형, `sm`은 작은 크기입니다.\n- **Disabled**: `true`로 설정하면 링크 버튼이 비활성화됩니다.\n        "}}},args:{color:"primary",size:"sm"},render:u=>({components:{LinkButton:n},setup(){return{args:u}},template:'<LinkButton v-bind="args">LinkButton</LinkButton>'})},o={render:()=>({components:{LinkButton:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">All Colors</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary">Primary Link</LinkButton>
            <LinkButton color="secondary">Secondary Link</LinkButton>
            <LinkButton color="danger">Danger Link</LinkButton>
            <LinkButton color="success">Success Link</LinkButton>
            <LinkButton color="warning">Warning Link</LinkButton>
            <LinkButton color="info">Info Link</LinkButton>
          </div>
        </div>
      </div>
    `})},e={render:()=>({components:{LinkButton:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Extra Small Size (xs)</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="secondary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="danger" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="success" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="warning" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="info" size="xs">Extra Small Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary" size="sm">Small Link</LinkButton>
            <LinkButton color="secondary" size="sm">Small Link</LinkButton>
            <LinkButton color="danger" size="sm">Small Link</LinkButton>
            <LinkButton color="success" size="sm">Small Link</LinkButton>
            <LinkButton color="warning" size="sm">Small Link</LinkButton>
            <LinkButton color="info" size="sm">Small Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Size Comparison</h3>
          <div class="flex flex-wrap items-center gap-4">
            <LinkButton color="primary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="primary" size="sm">Small Link</LinkButton>
          </div>
        </div>
      </div>
    `})},s={render:()=>({components:{LinkButton:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <LinkButton color="primary">Normal Link</LinkButton>
            <LinkButton color="secondary">Normal Link</LinkButton>
            <LinkButton color="danger">Normal Link</LinkButton>
            <LinkButton color="info">Normal Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <LinkButton color="primary" disabled>Disabled Link</LinkButton>
            <LinkButton color="secondary" disabled>Disabled Link</LinkButton>
            <LinkButton color="danger" disabled>Disabled Link</LinkButton>
            <LinkButton color="info" disabled>Disabled Link</LinkButton>
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{LinkButton:n,ExternalLinkIcon:h,ArrowRightIcon:v,DownloadIcon:y},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">With Icons</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary">
              <ExternalLinkIcon class="size-4" />
              <span>외부 링크</span>
            </LinkButton>
            <LinkButton color="secondary">
              <span>더 보기</span>
              <ArrowRightIcon class="size-4" />
            </LinkButton>
            <LinkButton color="success">
              <DownloadIcon class="size-4" />
              <span>다운로드</span>
            </LinkButton>
          </div>
        </div>
      </div>
    `})},a={render:()=>({components:{LinkButton:n,RefreshCcwIcon:D},template:`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <LinkButton color="primary" size="xs">수정</LinkButton>
          <LinkButton color="danger" size="xs">삭제</LinkButton>
        </div>
        <div class="flex gap-4">
          <LinkButton color="primary" size="sm">상세보기</LinkButton>
          <LinkButton color="info" size="sm">수정</LinkButton>
          <LinkButton color="success" size="sm">복사</LinkButton>
          <LinkButton color="danger" size="sm">삭제</LinkButton>
        </div>
        <div class="flex gap-4">
          <LinkButton color="primary" size="xs">
            <RefreshCcwIcon class="size-3" />
            <span>기관계 시스템에서 다시 불러오기</span>
          </LinkButton>
        </div>
        <div class="flex gap-2">
          <LinkButton color="secondary" size="xs">↑</LinkButton>
          <LinkButton color="secondary" size="xs">↓</LinkButton>
          <LinkButton color="danger" size="xs">삭제</LinkButton>
        </div>
      </div>
    `})},r={parameters:{docs:{description:{story:`
\`class\` prop을 사용하여 LinkButton 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

## 사용 팁

- \`class\` prop을 통해 추가적인 Tailwind CSS 클래스를 적용할 수 있습니다.
- 폰트 굵기, 간격, 그림자 등 다양한 스타일을 커스터마이징할 수 있습니다.
        `}}},render:()=>({components:{LinkButton:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Custom Styling</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="info" class="font-bold">
              Bold Link
            </LinkButton>
            <LinkButton color="warning" class="text-purple hover:text-purple-800 focus-visible:text-purple-dark underline decoration-2">
              보라색 링크
            </LinkButton>
            <LinkButton color="primary" class="tracking-wider">
              Wide Spacing
            </LinkButton>
            <LinkButton color="danger" class="uppercase">
              Uppercase Link
            </LinkButton>
            <LinkButton color="success" class="italic">
              Italic Link
            </LinkButton>
            <LinkButton color="secondary" class="font-semibold">
              Semibold Link
            </LinkButton>
          </div>
        </div>
      </div>
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 LinkButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, disabled 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 링크 버튼의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 삭제나 위험한 작업에 사용, \\\`success\\\`는 성공적인 작업에 사용).
- **Size**: 링크 버튼의 크기를 조정합니다. \\\`xs\\\`는 초소형, \\\`sm\\\`은 작은 크기입니다.
- **Disabled**: \\\`true\\\`로 설정하면 링크 버튼이 비활성화됩니다.
        \`
      }
    }
  },
  args: {
    color: 'primary',
    size: 'sm'
  },
  render: (args: LinkButtonProps) => ({
    components: {
      LinkButton
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: '<LinkButton v-bind="args">LinkButton</LinkButton>'
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkButton
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">All Colors</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary">Primary Link</LinkButton>
            <LinkButton color="secondary">Secondary Link</LinkButton>
            <LinkButton color="danger">Danger Link</LinkButton>
            <LinkButton color="success">Success Link</LinkButton>
            <LinkButton color="warning">Warning Link</LinkButton>
            <LinkButton color="info">Info Link</LinkButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkButton
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Extra Small Size (xs)</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="secondary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="danger" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="success" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="warning" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="info" size="xs">Extra Small Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small Size (sm)</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary" size="sm">Small Link</LinkButton>
            <LinkButton color="secondary" size="sm">Small Link</LinkButton>
            <LinkButton color="danger" size="sm">Small Link</LinkButton>
            <LinkButton color="success" size="sm">Small Link</LinkButton>
            <LinkButton color="warning" size="sm">Small Link</LinkButton>
            <LinkButton color="info" size="sm">Small Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Size Comparison</h3>
          <div class="flex flex-wrap items-center gap-4">
            <LinkButton color="primary" size="xs">Extra Small Link</LinkButton>
            <LinkButton color="primary" size="sm">Small Link</LinkButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkButton
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <LinkButton color="primary">Normal Link</LinkButton>
            <LinkButton color="secondary">Normal Link</LinkButton>
            <LinkButton color="danger">Normal Link</LinkButton>
            <LinkButton color="info">Normal Link</LinkButton>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <LinkButton color="primary" disabled>Disabled Link</LinkButton>
            <LinkButton color="secondary" disabled>Disabled Link</LinkButton>
            <LinkButton color="danger" disabled>Disabled Link</LinkButton>
            <LinkButton color="info" disabled>Disabled Link</LinkButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkButton,
      ExternalLinkIcon,
      ArrowRightIcon,
      DownloadIcon
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">With Icons</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="primary">
              <ExternalLinkIcon class="size-4" />
              <span>외부 링크</span>
            </LinkButton>
            <LinkButton color="secondary">
              <span>더 보기</span>
              <ArrowRightIcon class="size-4" />
            </LinkButton>
            <LinkButton color="success">
              <DownloadIcon class="size-4" />
              <span>다운로드</span>
            </LinkButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      LinkButton,
      RefreshCcwIcon
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <LinkButton color="primary" size="xs">수정</LinkButton>
          <LinkButton color="danger" size="xs">삭제</LinkButton>
        </div>
        <div class="flex gap-4">
          <LinkButton color="primary" size="sm">상세보기</LinkButton>
          <LinkButton color="info" size="sm">수정</LinkButton>
          <LinkButton color="success" size="sm">복사</LinkButton>
          <LinkButton color="danger" size="sm">삭제</LinkButton>
        </div>
        <div class="flex gap-4">
          <LinkButton color="primary" size="xs">
            <RefreshCcwIcon class="size-3" />
            <span>기관계 시스템에서 다시 불러오기</span>
          </LinkButton>
        </div>
        <div class="flex gap-2">
          <LinkButton color="secondary" size="xs">↑</LinkButton>
          <LinkButton color="secondary" size="xs">↓</LinkButton>
          <LinkButton color="danger" size="xs">삭제</LinkButton>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
\\\`class\\\` prop을 사용하여 LinkButton 컴포넌트에 커스텀 스타일을 적용할 수 있습니다.

## 사용 팁

- \\\`class\\\` prop을 통해 추가적인 Tailwind CSS 클래스를 적용할 수 있습니다.
- 폰트 굵기, 간격, 그림자 등 다양한 스타일을 커스터마이징할 수 있습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      LinkButton
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Custom Styling</h3>
          <div class="flex flex-wrap gap-4">
            <LinkButton color="info" class="font-bold">
              Bold Link
            </LinkButton>
            <LinkButton color="warning" class="text-purple hover:text-purple-800 focus-visible:text-purple-dark underline decoration-2">
              보라색 링크
            </LinkButton>
            <LinkButton color="primary" class="tracking-wider">
              Wide Spacing
            </LinkButton>
            <LinkButton color="danger" class="uppercase">
              Uppercase Link
            </LinkButton>
            <LinkButton color="success" class="italic">
              Italic Link
            </LinkButton>
            <LinkButton color="secondary" class="font-semibold">
              Semibold Link
            </LinkButton>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const I=["Playground","Colors","Sizes","States","WithIcons","Examples","CustomStyling"];export{o as Colors,r as CustomStyling,a as Examples,t as Playground,e as Sizes,s as States,i as WithIcons,I as __namedExportsOrder,E as default};
