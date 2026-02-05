import{l as U,d as z,O as b,e as E,o as A,g as B,p as F,w as M,u as y,m as L,F as k,r as d}from"./iframe-DDiegOnq.js";import{_ as S}from"./Button-B5uVMYC_.js";import{r as w,u as P}from"./index-h_azGWn-.js";import"./preload-helper-PPVm8Dsz.js";const I=U("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]),_=["accept","multiple","capture"],o=z({inheritAttrs:!1,__name:"FileUploadButton",props:{variant:{default:"outlined"},color:{default:"secondary"},size:{default:"md"},type:{},disabled:{type:Boolean},loading:{type:Boolean},class:{},accept:{},multiple:{},capture:{},onChange:{}},setup(l){const n=b("input"),e=l,t=w(e,"variant","color","size","onChange"),r=P(t),u=()=>{const a=n.value;a&&(a.value="")};return(a,s)=>(A(),E(k,null,[B("input",{ref:"input",type:"file",class:"hidden",accept:e.accept,multiple:e.multiple,capture:e.capture,onChange:s[0]||(s[0]=i=>e.onChange?.(i,{clear:u}))},null,40,_),F(S,L({...a.$attrs,...y(r)},{variant:e.variant,color:e.color,size:e.size,onClick:s[1]||(s[1]=i=>n.value?.click())}),{default:M(()=>[F(y(I),{class:"size-4 shrink-0"}),s[2]||(s[2]=B("span",null,"파일 선택",-1))]),_:1},16,["variant","color","size"])],64))}}),$={title:"Shared/UI/FileUploadButton",component:o,parameters:{layout:"centered",controls:{include:["variant","color","size","disabled","loading","accept","multiple"]},docs:{description:{component:`
### 파일 업로드를 위한 버튼 컴포넌트

FileUploadButton은 파일 선택을 위한 인터페이스를 제공하는 버튼 컴포넌트입니다. 
내부적으로 \`<input type="file">\`을 숨기고, 버튼 클릭 시 파일 선택 다이얼로그를 엽니다.

## 주요 기능

- **파일 타입 제한**: \`accept\` prop으로 허용할 파일 타입 지정
- **다중 파일 선택**: \`multiple\` prop으로 여러 파일 선택 가능
- **로딩 상태**: 파일 업로드 중 로딩 스피너 표시
- **Button 컴포넌트 상속**: Button의 모든 variant, color, size 옵션 사용 가능
- **파일 선택 초기화**: \`clear()\` 함수로 input 값 초기화

## 사용 예시

\`\`\`vue
<FileUploadButton
  accept="image/*"
  @change="(e, { clear }) => {
    const file = e.target.files?.[0];
    if (file) {
      // 파일 처리 로직
    }
    clear(); // input 값 초기화
  }"
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["filled","outlined","text"],description:"버튼의 스타일 변형",table:{type:{summary:"'filled' | 'outlined' | 'text'"},defaultValue:{summary:"'outlined'"}}},color:{control:"select",options:["primary","secondary","danger","success","warning","deepblue"],description:"버튼의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'deepblue'"},defaultValue:{summary:"'secondary'"}}},size:{control:"select",options:["xs","sm","md","lg"],description:"버튼의 크기",table:{type:{summary:"'xs' | 'sm' | 'md' | 'lg'"},defaultValue:{summary:"'md'"}}},disabled:{control:"boolean",description:"버튼 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},loading:{control:"boolean",description:"로딩 상태 여부 (파일 업로드 중)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},accept:{control:"text",description:'허용할 파일 타입 (예: "image/*", ".pdf", ".jpg,.png")',table:{type:{summary:"string"}}},multiple:{control:"boolean",description:"다중 파일 선택 허용 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},c={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 FileUploadButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 variant, color, size, accept 등의 속성을 변경해보세요.

## 사용 팁

- **Accept**: 파일 타입을 제한합니다. 예: \`image/*\` (모든 이미지), \`.pdf\` (PDF만), \`.jpg,.png\` (JPG와 PNG만)
- **Multiple**: 여러 파일을 동시에 선택할 수 있습니다.
- **Loading**: 파일 업로드 중에는 loading을 true로 설정하여 사용자에게 피드백을 제공하세요.
        `}}},args:{variant:"outlined",color:"secondary",size:"md",accept:"*"},render:l=>({components:{FileUploadButton:o},setup(){const n=d("");return{args:l,selectedFile:n,handleChange:t=>{const r=t.target.files?.[0];r&&(n.value=r.name)}}},template:`
      <div class="flex flex-col items-center gap-4">
        <FileUploadButton v-bind="args" @change="handleChange" />
        <p v-if="selectedFile" class="text-sm text-gray-600">
          선택된 파일: <strong>{{ selectedFile }}</strong>
        </p>
      </div>
    `})},p={render:()=>({components:{FileUploadButton:o},setup(){return{handleChange:(n,{clear:e})=>{const t=n.target.files?.[0];t&&alert(`선택된 파일: ${t.name}`),e()}}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Filled Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" @change="handleChange" />
            <FileUploadButton variant="filled" color="secondary" @change="handleChange" />
            <FileUploadButton variant="filled" color="success" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Outlined Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="outlined" color="primary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="secondary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="success" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Text Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="text" color="primary" @change="handleChange" />
            <FileUploadButton variant="text" color="secondary" @change="handleChange" />
            <FileUploadButton variant="text" color="success" @change="handleChange" />
          </div>
        </div>
      </div>
    `})},g={render:()=>({components:{FileUploadButton:o},setup(){return{handleChange:(n,{clear:e})=>{e()}}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">XSmall (xs)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="xs" variant="filled" @change="handleChange" />
            <FileUploadButton size="xs" variant="outlined" @change="handleChange" />
            <FileUploadButton size="xs" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small (sm)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="sm" variant="filled" @change="handleChange" />
            <FileUploadButton size="sm" variant="outlined" @change="handleChange" />
            <FileUploadButton size="sm" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium (md)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="md" variant="filled" @change="handleChange" />
            <FileUploadButton size="md" variant="outlined" @change="handleChange" />
            <FileUploadButton size="md" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large (lg)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="lg" variant="filled" @change="handleChange" />
            <FileUploadButton size="lg" variant="outlined" @change="handleChange" />
            <FileUploadButton size="lg" variant="text" @change="handleChange" />
          </div>
        </div>
      </div>
    `})},C={render:()=>({components:{FileUploadButton:o},setup(){return{handleChange:(n,{clear:e})=>{e()}}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" @change="handleChange" />
            <FileUploadButton variant="text" color="primary" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" disabled @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" disabled @change="handleChange" />
            <FileUploadButton variant="text" color="primary" disabled @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading (파일 업로드 중)</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" loading @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" loading @change="handleChange" />
            <FileUploadButton variant="text" color="primary" loading @change="handleChange" />
          </div>
        </div>
      </div>
    `})},h={render:()=>({components:{FileUploadButton:o},setup(){return{handleChange:(n,{clear:e})=>{const t=n.target.files?.[0];t&&alert(`선택된 파일: ${t.name} (${t.type})`),e()}}},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">이미지 파일만 (image/*)</h3>
          <FileUploadButton accept="image/*" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">PDF 파일만 (.pdf)</h3>
          <FileUploadButton accept=".pdf" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">JPG, PNG만 (.jpg,.png)</h3>
          <FileUploadButton accept=".jpg,.png" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">비디오 파일만 (video/*)</h3>
          <FileUploadButton accept="video/*" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">문서 파일 (.pdf,.doc,.docx)</h3>
          <FileUploadButton accept=".pdf,.doc,.docx" @change="handleChange" />
        </div>
      </div>
    `})},m={render:()=>({components:{FileUploadButton:o},setup(){const l=d([]);return{selectedFiles:l,handleChange:(e,{clear:t})=>{const r=Array.from(e.target.files||[]);l.value=r.map(u=>u.name),t()}}},template:`
      <div class="flex flex-col gap-4">
        <FileUploadButton multiple @change="handleChange" />
        <div v-if="selectedFiles.length > 0" class="flex flex-col gap-2">
          <p class="text-sm font-semibold text-gray-700">선택된 파일 ({{ selectedFiles.length }}개):</p>
          <ul class="list-disc list-inside text-sm text-gray-600">
            <li v-for="(file, index) in selectedFiles" :key="index">{{ file }}</li>
          </ul>
        </div>
      </div>
    `})},f={render:()=>({components:{FileUploadButton:o},setup(){const l=d(!1),n=d(null),e=d(""),t=30*1024*1024;return{isLoading:l,selectedFile:n,error:e,handleChange:async(a,{clear:s})=>{const i=a.target.files?.[0];if(i){if(e.value="",n.value=null,i.size>t){e.value="파일 크기는 30MB를 초과할 수 없습니다.",s();return}l.value=!0;try{await new Promise((x,D)=>{setTimeout(()=>{Math.random()>.5?x(!0):D(new Error("Upload failed"))},2e3)}),n.value={name:i.name,size:i.size}}catch{e.value="파일 업로드에 실패했습니다. 다시 시도해주세요.",s()}finally{l.value=!1}}},formatFileSize:a=>a<1024?a+" B":a<1024*1024?(a/1024).toFixed(2)+" KB":(a/(1024*1024)).toFixed(2)+" MB"}},template:`
      <div class="flex flex-col items-center gap-4 w-96">
        <FileUploadButton
          :loading="isLoading"
          @change="handleChange"
        />

        <!-- 로딩 상태 -->
        <div v-if="isLoading" class="flex items-center gap-2 text-sm font-medium text-gray-500">
          <svg class="size-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>파일 업로드 중...</span>
        </div>

        <!-- 성공 상태 -->
        <div v-if="selectedFile" class="flex items-center gap-2 text-sm font-medium text-green-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})</span>
        </div>

        <!-- 실패 상태 -->
        <div v-if="error" class="flex items-center gap-2 text-sm font-medium text-red-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{{ error }}</span>
        </div>

        <p class="text-xs text-gray-500">
          💡 팁: 업로드는 50% 확률로 성공/실패합니다. 여러 번 시도해보세요!
        </p>
      </div>
    `})},v={name:"실제 사용 예시 (학위 논문 제출)",render:()=>({components:{FileUploadButton:o},setup(){const l=d(!1),n=d(null),e=d(""),t=30*1024*1024;return{isLoading:l,selectedFile:n,error:e,handleChange:async(a,{clear:s})=>{const i=a.target.files?.[0];if(i){if(e.value="",i.size>t){e.value="파일 크기는 30MB를 초과할 수 없습니다.",s();return}l.value=!0,n.value=null;try{await new Promise(x=>setTimeout(x,1500)),n.value={name:i.name,size:i.size}}catch{e.value="파일 업로드에 실패했습니다.",s()}finally{l.value=!1}}},formatFileSize:a=>a<1024?a+" B":a<1024*1024?(a/1024).toFixed(2)+" KB":(a/(1024*1024)).toFixed(2)+" MB"}},template:`
      <div class="flex flex-col gap-4 w-96">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold text-gray-700">
            파일 업로드 <span class="text-red-500">*</span>
          </label>
          <div class="flex items-center gap-3">
            <FileUploadButton
              accept=".pdf"
              :loading="isLoading"
              @change="handleChange"
            />
            <span class="text-sm text-gray-500">
              PDF만 업로드 가능. 최대 30MB
            </span>
          </div>
        </div>

        <div v-if="selectedFile" class="flex items-center gap-2 text-sm font-medium text-green-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})</span>
        </div>

        <p v-if="error" class="text-sm text-red-600">
          {{ error }}
        </p>
      </div>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 FileUploadButton 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 variant, color, size, accept 등의 속성을 변경해보세요.

## 사용 팁

- **Accept**: 파일 타입을 제한합니다. 예: \\\`image/*\\\` (모든 이미지), \\\`.pdf\\\` (PDF만), \\\`.jpg,.png\\\` (JPG와 PNG만)
- **Multiple**: 여러 파일을 동시에 선택할 수 있습니다.
- **Loading**: 파일 업로드 중에는 loading을 true로 설정하여 사용자에게 피드백을 제공하세요.
        \`
      }
    }
  },
  args: {
    variant: 'outlined',
    color: 'secondary',
    size: 'md',
    accept: '*'
  },
  render: (args: FileUploadButtonProps) => ({
    components: {
      FileUploadButton
    },
    setup() {
      const selectedFile = ref<string>('');
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }) => {
        const file = e.target.files?.[0];
        if (file) {
          selectedFile.value = file.name;
        }
      };
      return {
        args,
        selectedFile,
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col items-center gap-4">
        <FileUploadButton v-bind="args" @change="handleChange" />
        <p v-if="selectedFile" class="text-sm text-gray-600">
          선택된 파일: <strong>{{ selectedFile }}</strong>
        </p>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        const file = e.target.files?.[0];
        if (file) {
          alert(\`선택된 파일: \${file.name}\`);
        }
        clear();
      };
      return {
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Filled Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" @change="handleChange" />
            <FileUploadButton variant="filled" color="secondary" @change="handleChange" />
            <FileUploadButton variant="filled" color="success" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Outlined Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="outlined" color="primary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="secondary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="success" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Text Variant</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="text" color="primary" @change="handleChange" />
            <FileUploadButton variant="text" color="secondary" @change="handleChange" />
            <FileUploadButton variant="text" color="success" @change="handleChange" />
          </div>
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        clear();
      };
      return {
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">XSmall (xs)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="xs" variant="filled" @change="handleChange" />
            <FileUploadButton size="xs" variant="outlined" @change="handleChange" />
            <FileUploadButton size="xs" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Small (sm)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="sm" variant="filled" @change="handleChange" />
            <FileUploadButton size="sm" variant="outlined" @change="handleChange" />
            <FileUploadButton size="sm" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Medium (md)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="md" variant="filled" @change="handleChange" />
            <FileUploadButton size="md" variant="outlined" @change="handleChange" />
            <FileUploadButton size="md" variant="text" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Large (lg)</h3>
          <div class="flex gap-4">
            <FileUploadButton size="lg" variant="filled" @change="handleChange" />
            <FileUploadButton size="lg" variant="outlined" @change="handleChange" />
            <FileUploadButton size="lg" variant="text" @change="handleChange" />
          </div>
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        clear();
      };
      return {
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Normal</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" @change="handleChange" />
            <FileUploadButton variant="text" color="primary" @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" disabled @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" disabled @change="handleChange" />
            <FileUploadButton variant="text" color="primary" disabled @change="handleChange" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Loading (파일 업로드 중)</h3>
          <div class="flex gap-4">
            <FileUploadButton variant="filled" color="primary" loading @change="handleChange" />
            <FileUploadButton variant="outlined" color="primary" loading @change="handleChange" />
            <FileUploadButton variant="text" color="primary" loading @change="handleChange" />
          </div>
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        const file = e.target.files?.[0];
        if (file) {
          alert(\`선택된 파일: \${file.name} (\${file.type})\`);
        }
        clear();
      };
      return {
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">이미지 파일만 (image/*)</h3>
          <FileUploadButton accept="image/*" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">PDF 파일만 (.pdf)</h3>
          <FileUploadButton accept=".pdf" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">JPG, PNG만 (.jpg,.png)</h3>
          <FileUploadButton accept=".jpg,.png" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">비디오 파일만 (video/*)</h3>
          <FileUploadButton accept="video/*" @change="handleChange" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">문서 파일 (.pdf,.doc,.docx)</h3>
          <FileUploadButton accept=".pdf,.doc,.docx" @change="handleChange" />
        </div>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const selectedFiles = ref<string[]>([]);
      const handleChange = (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        const files = Array.from(e.target.files || []);
        selectedFiles.value = files.map(f => f.name);
        clear();
      };
      return {
        selectedFiles,
        handleChange
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4">
        <FileUploadButton multiple @change="handleChange" />
        <div v-if="selectedFiles.length > 0" class="flex flex-col gap-2">
          <p class="text-sm font-semibold text-gray-700">선택된 파일 ({{ selectedFiles.length }}개):</p>
          <ul class="list-disc list-inside text-sm text-gray-600">
            <li v-for="(file, index) in selectedFiles" :key="index">{{ file }}</li>
          </ul>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const isLoading = ref(false);
      const selectedFile = ref<{
        name: string;
        size: number;
      } | null>(null);
      const error = ref<string>('');
      const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

      const handleChange = async (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        const file = e.target.files?.[0];
        if (!file) return;
        error.value = '';
        selectedFile.value = null;

        // 파일 크기 검증
        if (file.size > MAX_FILE_SIZE) {
          error.value = '파일 크기는 30MB를 초과할 수 없습니다.';
          clear();
          return;
        }
        isLoading.value = true;
        try {
          // 파일 업로드 시뮬레이션 (2초)
          await new Promise((resolve, reject) => {
            setTimeout(() => {
              // 50% 확률로 성공/실패 시뮬레이션
              if (Math.random() > 0.5) {
                resolve(true);
              } else {
                reject(new Error('Upload failed'));
              }
            }, 2000);
          });
          selectedFile.value = {
            name: file.name,
            size: file.size
          };
        } catch {
          error.value = '파일 업로드에 실패했습니다. 다시 시도해주세요.';
          clear();
        } finally {
          isLoading.value = false;
        }
      };
      const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
      };
      return {
        isLoading,
        selectedFile,
        error,
        handleChange,
        formatFileSize
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col items-center gap-4 w-96">
        <FileUploadButton
          :loading="isLoading"
          @change="handleChange"
        />

        <!-- 로딩 상태 -->
        <div v-if="isLoading" class="flex items-center gap-2 text-sm font-medium text-gray-500">
          <svg class="size-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>파일 업로드 중...</span>
        </div>

        <!-- 성공 상태 -->
        <div v-if="selectedFile" class="flex items-center gap-2 text-sm font-medium text-green-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})</span>
        </div>

        <!-- 실패 상태 -->
        <div v-if="error" class="flex items-center gap-2 text-sm font-medium text-red-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>{{ error }}</span>
        </div>

        <p class="text-xs text-gray-500">
          💡 팁: 업로드는 50% 확률로 성공/실패합니다. 여러 번 시도해보세요!
        </p>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '실제 사용 예시 (학위 논문 제출)',
  render: () => ({
    components: {
      FileUploadButton
    },
    setup() {
      const isLoading = ref(false);
      const selectedFile = ref<{
        name: string;
        size: number;
      } | null>(null);
      const error = ref<string>('');
      const MAX_FILE_SIZE = 30 * 1024 * 1024; // 30MB

      const handleChange = async (e: Event & {
        target: HTMLInputElement;
      }, {
        clear
      }: {
        clear: () => void;
      }) => {
        const file = e.target.files?.[0];
        if (!file) return;
        error.value = '';

        // 파일 크기 검증
        if (file.size > MAX_FILE_SIZE) {
          error.value = '파일 크기는 30MB를 초과할 수 없습니다.';
          clear();
          return;
        }
        isLoading.value = true;
        selectedFile.value = null;
        try {
          // 파일 업로드 시뮬레이션
          await new Promise(resolve => setTimeout(resolve, 1500));
          selectedFile.value = {
            name: file.name,
            size: file.size
          };
        } catch {
          error.value = '파일 업로드에 실패했습니다.';
          clear();
        } finally {
          isLoading.value = false;
        }
      };
      const formatFileSize = (bytes: number) => {
        if (bytes < 1024) return bytes + ' B';
        if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
        return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
      };
      return {
        isLoading,
        selectedFile,
        error,
        handleChange,
        formatFileSize
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4 w-96">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold text-gray-700">
            파일 업로드 <span class="text-red-500">*</span>
          </label>
          <div class="flex items-center gap-3">
            <FileUploadButton
              accept=".pdf"
              :loading="isLoading"
              @change="handleChange"
            />
            <span class="text-sm text-gray-500">
              PDF만 업로드 가능. 최대 30MB
            </span>
          </div>
        </div>

        <div v-if="selectedFile" class="flex items-center gap-2 text-sm font-medium text-green-600">
          <svg class="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          <span>{{ selectedFile.name }} ({{ formatFileSize(selectedFile.size) }})</span>
        </div>

        <p v-if="error" class="text-sm text-red-600">
          {{ error }}
        </p>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};const G=["Playground","Variants","Sizes","States","FileTypes","MultipleFiles","WithLoadingSimulation","RealWorldExample"];export{h as FileTypes,m as MultipleFiles,c as Playground,v as RealWorldExample,g as Sizes,C as States,p as Variants,f as WithLoadingSimulation,G as __namedExportsOrder,$ as default};
