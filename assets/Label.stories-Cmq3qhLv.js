import{r as o}from"./iframe-CKRjvMa9.js";import{_ as e}from"./Label-CnjAdMtP.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Shared/UI/Label",component:e,parameters:{layout:"centered",controls:{include:["required"]},docs:{description:{component:`
### 폼 요소를 위한 라벨 컴포넌트

Label 컴포넌트는 폼의 입력 필드와 함께 사용되는 라벨을 표시하는 데 사용됩니다. 필수 입력 필드를 표시하기 위한 required 속성을 지원합니다.

## 주요 기능

- **필수 필드 표시**: \`required\` 속성을 통해 필수 입력 필드를 시각적으로 표시
- **HTML 속성 지원**: \`for\`, \`id\`, \`form\` 등 모든 HTML label 속성 지원
- **커스텀 스타일링**: \`class\` prop을 통해 스타일 커스터마이징 가능
- **접근성 지원**: HTML label 요소의 기본 접근성 기능 활용

## 사용 예시

\`\`\`vue
<Label for="email" required>이메일</Label>
<input id="email" type="email" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"필수 입력 필드 여부. true일 경우 빨간색 별표(*)가 표시됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},class:{control:"text",description:"추가 CSS 클래스",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},r={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 required, class, for 등의 속성을 변경해보세요.
        `}}},args:{required:!1,class:""},render:u=>({components:{Label:e},setup(){return{args:u}},template:'<Label :required="args.required" :class="args.class">라벨 텍스트</Label>'})},a={render:()=>({components:{Label:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
            <p class="text-xs text-gray-500">
              Label 컴포넌트의 기본 사용 예시입니다. 텍스트를 표시하고 필요시 required 속성을
              추가할 수 있습니다.
            </p>
          </div>
          <div class="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
            <div class="flex flex-col gap-2">
              <Label>기본 라벨</Label>
              <Label class="text-blue-600">커스텀 스타일 라벨</Label>
              <Label id="label-1">ID가 있는 라벨</Label>
            </div>
          </div>
        </div>
      </div>
    `})},l={render:()=>({components:{Label:e},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Required 속성</h3>
            <p class="text-xs text-gray-500">
              required 속성을 사용하면 라벨 옆에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에
              사용하세요.
            </p>
          </div>
          <div class="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
            <div class="flex flex-col gap-2">
              <Label required>필수 입력 필드</Label>
              <Label required class="text-lg">큰 텍스트 필수 라벨</Label>
              <Label required id="required-label">ID가 있는 필수 라벨</Label>
            </div>
          </div>
        </div>
      </div>
    `})},n={render:()=>({components:{Label:e},setup(){const u=o({name:"",email:"",phone:""});return{formData:u,handleSubmit:s=>{s.preventDefault(),alert(`제출된 데이터: ${JSON.stringify(u.value,null,2)}`)}}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Form과 함께 사용</h3>
            <p class="text-xs text-gray-500">
              Label 컴포넌트를 form 요소와 함께 사용하는 예시입니다. for 속성을 사용하여 input과
              연결할 수 있습니다.
            </p>
          </div>
          <div class="rounded-lg border border-gray-200 p-4">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <Label for="name" required>이름</Label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  required
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="email" required>이메일</Label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="phone">전화번호 (선택)</Label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                class="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                제출
              </button>
            </form>
          </div>
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p class="text-xs text-blue-800">
              <strong>참고:</strong> Label의 <code>for</code> 속성과 input의 <code>id</code>
              속성을 일치시키면, 라벨을 클릭했을 때 해당 input에 자동으로 포커스가 이동합니다.
            </p>
          </div>
        </div>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 required, class, for 등의 속성을 변경해보세요.
        \`
      }
    }
  },
  args: {
    required: false,
    class: ''
  },
  render: (args: LabelProps) => ({
    components: {
      Label
    },
    setup() {
      return {
        args
      };
    },
    template: '<Label :required="args.required" :class="args.class">라벨 텍스트</Label>'
  })
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
            <p class="text-xs text-gray-500">
              Label 컴포넌트의 기본 사용 예시입니다. 텍스트를 표시하고 필요시 required 속성을
              추가할 수 있습니다.
            </p>
          </div>
          <div class="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
            <div class="flex flex-col gap-2">
              <Label>기본 라벨</Label>
              <Label class="text-blue-600">커스텀 스타일 라벨</Label>
              <Label id="label-1">ID가 있는 라벨</Label>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Required 속성</h3>
            <p class="text-xs text-gray-500">
              required 속성을 사용하면 라벨 옆에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에
              사용하세요.
            </p>
          </div>
          <div class="flex flex-col gap-4 rounded-lg border border-gray-200 p-4">
            <div class="flex flex-col gap-2">
              <Label required>필수 입력 필드</Label>
              <Label required class="text-lg">큰 텍스트 필수 라벨</Label>
              <Label required id="required-label">ID가 있는 필수 라벨</Label>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    setup() {
      const formData = ref({
        name: '',
        email: '',
        phone: ''
      });
      const handleSubmit = (e: Event) => {
        e.preventDefault();
        alert(\`제출된 데이터: \${JSON.stringify(formData.value, null, 2)}\`);
      };
      return {
        formData,
        handleSubmit
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col gap-2">
            <h3 class="text-sm font-semibold text-gray-700">Form과 함께 사용</h3>
            <p class="text-xs text-gray-500">
              Label 컴포넌트를 form 요소와 함께 사용하는 예시입니다. for 속성을 사용하여 input과
              연결할 수 있습니다.
            </p>
          </div>
          <div class="rounded-lg border border-gray-200 p-4">
            <form @submit.prevent="handleSubmit" class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <Label for="name" required>이름</Label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  placeholder="이름을 입력하세요"
                  required
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="email" required>이메일</Label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  placeholder="이메일을 입력하세요"
                  required
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <div class="flex flex-col gap-2">
                <Label for="phone">전화번호 (선택)</Label>
                <input
                  id="phone"
                  v-model="formData.phone"
                  type="tel"
                  placeholder="전화번호를 입력하세요"
                  class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                class="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-sm font-medium text-white transition-colors"
              >
                제출
              </button>
            </form>
          </div>
          <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
            <p class="text-xs text-blue-800">
              <strong>참고:</strong> Label의 <code>for</code> 속성과 input의 <code>id</code>
              속성을 일치시키면, 라벨을 클릭했을 때 해당 input에 자동으로 포커스가 이동합니다.
            </p>
          </div>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};const p=["Playground","Basic","Required","WithForm"];export{a as Basic,r as Playground,l as Required,n as WithForm,p as __namedExportsOrder,c as default};
