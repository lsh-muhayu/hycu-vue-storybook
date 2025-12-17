import{d as D,b as f,c,o as p,f as B,E as m,m as d,g as u,h as e,r as x}from"./iframe-XjVVtd_c.js";import{c as g,a as b}from"./cn-CwZzh8fo.js";import"./preload-helper-PPVm8Dsz.js";const A={key:0,class:"text-danger ml-0.5"},v=b("text-sm font-semibold text-gray-800"),r=D({__name:"Label",props:{required:{type:Boolean,default:!1},class:{}},setup(a){const i=a,C=f(()=>g(v(),i.class));return(n,y)=>(p(),c("label",d(n.$attrs,{class:C.value}),[B(n.$slots,"default"),a.required?(p(),c("span",A,"*")):m("",!0)],16))}});r.__docgenInfo={exportName:"default",displayName:"Label",description:"",tags:{},props:[{name:"required",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"class",required:!1,type:{name:"string"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/label/Label.vue"]};const q={title:"Shared/UI/Label",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{required:{control:"boolean",description:"필수 입력 필드 여부. true일 경우 빨간색 별표(*)가 표시됩니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},class:{control:"text",description:"추가 CSS 클래스",table:{type:{summary:"string"},defaultValue:{summary:"''"}}}}},l={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 Label 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 required, class, for 등의 속성을 변경해보세요.
        `}}},args:{required:!1,class:""},render:a=>({components:{Label:r},setup(){return()=>u(r,a,{default:()=>[e("라벨 텍스트")]})}})},s={render:()=>({components:{Label:r},setup(){return()=>u("div",{class:"flex flex-col gap-6"},[u("div",{class:"flex flex-col gap-4"},[u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[e("기본 사용법")]),u("p",{class:"text-xs text-gray-500"},[e("Label 컴포넌트의 기본 사용 예시입니다. 텍스트를 표시하고 필요시 required 속성을 추가할 수 있습니다.")])]),u("div",{class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},[u("div",{class:"flex flex-col gap-2"},[u(r,null,{default:()=>[e("기본 라벨")]}),u(r,{class:"text-blue-600"},{default:()=>[e("커스텀 스타일 라벨")]}),u(r,{id:"label-1"},{default:()=>[e("ID가 있는 라벨")]})])])])])}})},t={render:()=>({components:{Label:r},setup(){return()=>u("div",{class:"flex flex-col gap-6"},[u("div",{class:"flex flex-col gap-4"},[u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[e("Required 속성")]),u("p",{class:"text-xs text-gray-500"},[e("required 속성을 사용하면 라벨 옆에 빨간색 별표(*)가 표시됩니다. 필수 입력 필드에 사용하세요.")])]),u("div",{class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},[u("div",{class:"flex flex-col gap-2"},[u(r,{required:!0},{default:()=>[e("필수 입력 필드")]}),u(r,{required:!0,class:"text-lg"},{default:()=>[e("큰 텍스트 필수 라벨")]}),u(r,d({required:!0},{id:"required-label"}),{default:()=>[e("ID가 있는 필수 라벨")]})])])])])}})},o={render:()=>({components:{Label:r},setup(){const a=x({name:"",email:"",phone:""}),i=C=>{C.preventDefault(),alert(`제출된 데이터: ${JSON.stringify(a.value,null,2)}`)};return()=>u("div",{class:"flex flex-col gap-6"},[u("div",{class:"flex flex-col gap-4"},[u("div",{class:"flex flex-col gap-2"},[u("h3",{class:"text-sm font-semibold text-gray-700"},[e("Form과 함께 사용")]),u("p",{class:"text-xs text-gray-500"},[e("Label 컴포넌트를 form 요소와 함께 사용하는 예시입니다. for 속성을 사용하여 input과 연결할 수 있습니다.")])]),u("div",{class:"rounded-lg border border-gray-200 p-4"},[u("form",{onSubmit:i,class:"flex flex-col gap-4"},[u("div",{class:"flex flex-col gap-2"},[u(r,d({for:"name"},{required:!0}),{default:()=>[e("이름")]}),u("input",{id:"name",value:a.value.name,onInput:C=>{const n=C.target;a.value.name=n.value},type:"text",placeholder:"이름을 입력하세요",required:!0,class:"focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"},null)]),u("div",{class:"flex flex-col gap-2"},[u(r,d({for:"email"},{required:!0}),{default:()=>[e("이메일")]}),u("input",{id:"email",value:a.value.email,onInput:C=>{const n=C.target;a.value.email=n.value},type:"email",placeholder:"이메일을 입력하세요",required:!0,class:"focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"},null)]),u("div",{class:"flex flex-col gap-2"},[u(r,{for:"phone"},{default:()=>[e("전화번호 (선택)")]}),u("input",{id:"phone",value:a.value.phone,onInput:C=>{const n=C.target;a.value.phone=n.value},type:"tel",placeholder:"전화번호를 입력하세요",class:"focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none"},null)]),u("button",{type:"submit",class:"bg-primary hover:bg-primary-dark rounded px-4 py-2 text-sm font-medium text-white transition-colors"},[e("제출")])])]),u("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[u("p",{class:"text-xs text-blue-800"},[u("strong",null,[e("참고:")]),e(" Label의 "),u("code",null,[e("for")]),e(" 속성과 input의 "),u("code",null,[e("id")])," ",e("속성을 일치시키면, 라벨을 클릭했을 때 해당 input에 자동으로 포커스가 이동합니다.")])])])])}})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      return () => <Label {...args}>라벨 텍스트</Label>;
    }
  })
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    setup() {
      return () => <div class="flex flex-col gap-6">
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
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Label {...{
                id: 'label-1'
              } as any}>ID가 있는 라벨</Label>
              </div>
            </div>
          </div>
        </div>;
    }
  })
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Label
    },
    setup() {
      return () => <div class="flex flex-col gap-6">
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
                <Label required class="text-lg">
                  큰 텍스트 필수 라벨
                </Label>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                <Label required {...{
                id: 'required-label'
              } as any}>
                  ID가 있는 필수 라벨
                </Label>
              </div>
            </div>
          </div>
        </div>;
    }
  })
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
      return () => <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
              <h3 class="text-sm font-semibold text-gray-700">Form과 함께 사용</h3>
              <p class="text-xs text-gray-500">
                Label 컴포넌트를 form 요소와 함께 사용하는 예시입니다. for 속성을 사용하여 input과
                연결할 수 있습니다.
              </p>
            </div>
            <div class="rounded-lg border border-gray-200 p-4">
              <form onSubmit={handleSubmit} class="flex flex-col gap-4">
                <div class="flex flex-col gap-2">
                  <Label {...{
                  for: 'name'
                } as Record<string, unknown>} required>
                    이름
                  </Label>
                  <input id="name" value={formData.value.name} onInput={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  formData.value.name = target.value;
                }} type="text" placeholder="이름을 입력하세요" required class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none" />
                </div>
                <div class="flex flex-col gap-2">
                  <Label {...{
                  for: 'email'
                } as Record<string, unknown>} required>
                    이메일
                  </Label>
                  <input id="email" value={formData.value.email} onInput={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  formData.value.email = target.value;
                }} type="email" placeholder="이메일을 입력하세요" required class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none" />
                </div>
                <div class="flex flex-col gap-2">
                  <Label {...{
                  for: 'phone'
                } as Record<string, unknown>}>전화번호 (선택)</Label>
                  <input id="phone" value={formData.value.phone} onInput={(e: Event) => {
                  const target = e.target as HTMLInputElement;
                  formData.value.phone = target.value;
                }} type="tel" placeholder="전화번호를 입력하세요" class="focus:border-primary focus:ring-primary/20 rounded border border-gray-300 px-3 py-2 text-sm focus:ring-2 focus:outline-none" />
                </div>
                <button type="submit" class="bg-primary hover:bg-primary-dark rounded px-4 py-2 text-sm font-medium text-white transition-colors">
                  제출
                </button>
              </form>
            </div>
            <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p class="text-xs text-blue-800">
                <strong>참고:</strong> Label의 <code>for</code> 속성과 input의 <code>id</code>{' '}
                속성을 일치시키면, 라벨을 클릭했을 때 해당 input에 자동으로 포커스가 이동합니다.
              </p>
            </div>
          </div>
        </div>;
    }
  })
}`,...o.parameters?.docs?.source}}};const F=["Playground","Basic","Required","WithForm"];export{s as Basic,l as Playground,t as Required,o as WithForm,F as __namedExportsOrder,q as default};
