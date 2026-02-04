import{d as S,c as r,X as b,a2 as A,e as T,o as v,i as E,f as F,g as w,n as D,u as B,a as h,j as P,t as k,r as u}from"./iframe-CKRjvMa9.js";import{C as N}from"./check-BvT-okyq.js";import"./preload-helper-PPVm8Dsz.js";const n=S({__name:"StatusText",props:{text:{},placeholder:{},asyncStatus:{},invalid:{type:Boolean,default:!1},class:{default:""}},setup(t){const e=t,s=r(()=>e.asyncStatus==="pending"?"loading":e.asyncStatus==="error"||e.invalid?"error":e.asyncStatus==="success"?"success":"idle"),d=r(()=>{switch(s.value){case"loading":return A;case"success":return N;case"error":return b;default:return null}}),l=r(()=>{if(!e.text)return"text-gray-400";switch(s.value){case"loading":return"text-gray-500";case"success":return"text-success";case"error":return"text-danger";default:return"text-gray-900"}}),a=r(()=>e.text||e.placeholder);return(i,V)=>(v(),T("div",{class:D(B(h)("flex items-center gap-2",l.value,e.class))},[d.value&&t.text?(v(),E(P(d.value),{key:0,class:D(B(h)("size-4",s.value==="loading"&&"animate-spin"))},null,8,["class"])):F("",!0),w("span",null,k(a.value),1)],2))}});n.__docgenInfo={exportName:"default",displayName:"StatusText",type:1,props:[{name:"invalid",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"text",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"placeholder",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"asyncStatus",global:!1,description:"",tags:[],required:!1,type:'"error" | "idle" | "pending" | "success"',declarations:[],schema:{kind:"enum",type:'"error" | "idle" | "pending" | "success"',schema:['"error"','"idle"','"pending"','"success"']}}],events:[],slots:[],exposed:[{name:"invalid",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"text",type:"string",description:"",declarations:[],schema:"string"},{name:"placeholder",type:"string",description:"",declarations:[],schema:"string"},{name:"asyncStatus",type:'"error" | "idle" | "pending" | "success"',description:"",declarations:[],schema:{kind:"enum",type:'"error" | "idle" | "pending" | "success"',schema:['"error"','"idle"','"pending"','"success"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/status-text/StatusText.vue"};const q={title:"Shared/UI/StatusText",component:n,parameters:{layout:"centered",controls:{include:["text","asyncStatus","invalid","placeholder"]},docs:{description:{component:`
### 상태에 따른 텍스트 표시 컴포넌트

StatusText는 비동기 작업(API 호출 등)과 폼 검증 상태를 시각적으로 표시하는 컴포넌트입니다.
파일 업로드, 데이터 저장, 동기화 등 다양한 상황에서 사용할 수 있습니다.

## 주요 기능

- **비동기 상태 표시**: API 호출의 loading, success, error 상태를 아이콘과 색상으로 표시
- **폼 검증 상태**: invalid prop으로 유효하지 않은 입력 표시
- **우선순위 처리**: asyncStatus가 validationStatus보다 우선 (loading > error > invalid > success)
- **Empty 상태**: text가 없을 때 placeholder 표시
- **범용성**: 파일 업로드뿐 아니라 다양한 상태 표시에 사용 가능

## 사용 예시

\`\`\`vue
<!-- 파일 업로드 상태 -->
<StatusText
  :text="fileName"
  :async-status="uploadMutation.status.value"
  :invalid="!isValid"
/>

<!-- API 저장 상태 -->
<StatusText
  text="변경사항 저장됨"
  async-status="success"
/>

<!-- Empty 상태 -->
<StatusText :text="undefined" placeholder="파일을 선택하세요" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"표시할 텍스트 (없으면 placeholder 표시)",table:{type:{summary:"string | undefined"}}},asyncStatus:{control:"select",options:["idle","pending","error","success",void 0],description:"TanStack Query의 status와 호환되는 비동기 작업 상태",table:{type:{summary:"'idle' | 'pending' | 'error' | 'success'"}}},invalid:{control:"boolean",description:"폼 검증 실패 여부 (true일 때 error 스타일 적용)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},placeholder:{control:"text",description:"text가 없을 때 표시할 placeholder",table:{type:{summary:"string"},defaultValue:{summary:"'선택된 파일 없음'"}}},class:{control:"text",description:"추가 CSS 클래스",table:{type:{summary:"string"}}}}},c={parameters:{controls:{disable:!1},docs:{description:{story:`
이 스토리에서는 StatusText 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 text, asyncStatus, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **asyncStatus**: 'pending'은 로딩 중, 'success'는 성공, 'error'는 실패를 나타냅니다.
- **invalid**: asyncStatus가 없을 때 폼 검증 실패를 표시합니다.
- **우선순위**: asyncStatus가 invalid보다 우선합니다.
        `}}},args:{text:"example.pdf",asyncStatus:void 0,invalid:!1},render:t=>({components:{StatusText:n},setup(){return{args:t}},template:'<StatusText v-bind="args" />'})},o={name:"비동기 작업 상태",render:()=>({components:{StatusText:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Idle (대기)</h3>
          <StatusText text="document.pdf" async-status="idle" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Pending (로딩 중)</h3>
          <StatusText text="document.pdf" async-status="pending" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Success (성공)</h3>
          <StatusText text="document.pdf" async-status="success" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Error (실패)</h3>
          <StatusText text="document.pdf" async-status="error" />
        </div>
      </div>
    `})},C={name:"폼 검증 상태",render:()=>({components:{StatusText:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Valid (유효)</h3>
          <StatusText text="valid-file.pdf" :invalid="false" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid (유효하지 않음)</h3>
          <StatusText text="invalid-file.exe" :invalid="true" />
        </div>
      </div>
    `})},p={name:"Empty 상태 (Placeholder)",render:()=>({components:{StatusText:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 Placeholder</h3>
          <StatusText :text="undefined" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">커스텀 Placeholder</h3>
          <StatusText :text="undefined" placeholder="파일을 선택하세요" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">빈 문자열</h3>
          <StatusText text="" placeholder="내용이 없습니다" />
        </div>
      </div>
    `})},x={name:"우선순위 데모",parameters:{docs:{description:{story:`
StatusText는 다음과 같은 우선순위로 상태를 표시합니다:

1. **asyncStatus === 'pending'** → loading (회색, 회전 아이콘)
2. **asyncStatus === 'error'** → error (빨간색, X 아이콘)
3. **invalid === true** → error (빨간색, X 아이콘)
4. **asyncStatus === 'success'** → success (초록색, 체크 아이콘)
5. 그 외 → idle (기본 색상, 아이콘 없음)

이 우선순위 덕분에 비동기 작업 중에는 로딩 상태가 표시되고,
작업이 완료된 후에 폼 검증 상태가 표시됩니다.
        `}}},render:()=>({components:{StatusText:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">1. Pending (최우선)</h3>
          <p class="text-xs text-gray-500">asyncStatus='pending', invalid=true</p>
          <StatusText text="uploading.pdf" async-status="pending" :invalid="true" />
          <p class="text-xs text-gray-600">→ Loading 상태 표시 (invalid 무시)</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">2. Async Error</h3>
          <p class="text-xs text-gray-500">asyncStatus='error', invalid=false</p>
          <StatusText text="failed.pdf" async-status="error" :invalid="false" />
          <p class="text-xs text-gray-600">→ Error 상태 표시</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">3. Validation Error</h3>
          <p class="text-xs text-gray-500">asyncStatus='success', invalid=true</p>
          <StatusText text="invalid.exe" async-status="success" :invalid="true" />
          <p class="text-xs text-gray-600">→ Invalid 우선 (Error 상태 표시)</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">4. Success</h3>
          <p class="text-xs text-gray-500">asyncStatus='success', invalid=false</p>
          <StatusText text="success.pdf" async-status="success" :invalid="false" />
          <p class="text-xs text-gray-600">→ Success 상태 표시</p>
        </div>
      </div>
    `})},m={name:"파일 업로드 시뮬레이션",parameters:{docs:{description:{story:`
실제 파일 업로드 시나리오를 시뮬레이션합니다.
"파일 업로드" 버튼을 클릭하면 다음 순서로 상태가 변경됩니다:

1. **Empty** → placeholder 표시
2. **Pending** → 로딩 중 (회색, 회전 아이콘)
3. **Success** → 업로드 완료 (초록색, 체크 아이콘)

"업로드 실패" 버튼을 클릭하면 에러 상태를 확인할 수 있습니다.
        `}}},render:()=>({components:{StatusText:n},setup(){const t=u(void 0),e=u("idle");return{fileName:t,asyncStatus:e,simulateUpload:async(l=!1)=>{t.value="thesis-document.pdf",e.value="pending",await new Promise(a=>setTimeout(a,2e3)),l?e.value="error":e.value="success"},reset:()=>{t.value=void 0,e.value="idle"}}},template:`
      <div class="flex flex-col items-center gap-4 w-96">
        <div class="w-full rounded border border-gray-300 bg-white px-3 py-2">
          <StatusText
            :text="fileName"
            :async-status="asyncStatus"
            placeholder="파일을 업로드하세요"
          />
        </div>
        
        <div class="flex gap-2">
          <button
            @click="simulateUpload(false)"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            파일 업로드
          </button>
          <button
            @click="simulateUpload(true)"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            업로드 실패
          </button>
          <button
            @click="reset"
            class="rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            초기화
          </button>
        </div>
        
        <div class="text-xs text-gray-500">
          <p>현재 상태: <strong>{{ asyncStatus }}</strong></p>
          <p>파일명: <strong>{{ fileName || 'null' }}</strong></p>
        </div>
      </div>
    `})},f={name:"폼 검증 시나리오",parameters:{docs:{description:{story:`
파일 업로드 후 폼 검증이 실행되는 시나리오입니다.

1. 파일 업로드 (pending)
2. 업로드 완료 (success)
3. 파일 타입 검증 실패 (invalid)

이 시나리오에서 asyncStatus가 'success'이지만 invalid=true이므로
error 상태가 표시됩니다 (우선순위 규칙에 따라).
        `}}},render:()=>({components:{StatusText:n},setup(){const t=u(void 0),e=u("idle"),s=u(!1);return{fileName:t,asyncStatus:e,invalid:s,uploadValidFile:async()=>{t.value="valid-document.pdf",e.value="pending",s.value=!1,await new Promise(i=>setTimeout(i,1500)),e.value="success",s.value=!1},uploadInvalidFile:async()=>{t.value="invalid-document.exe",e.value="pending",s.value=!1,await new Promise(i=>setTimeout(i,1500)),e.value="success",s.value=!0},reset:()=>{t.value=void 0,e.value="idle",s.value=!1}}},template:`
      <div class="flex flex-col items-center gap-4 w-96">
        <div class="w-full rounded border border-gray-300 bg-white px-3 py-2">
          <StatusText
            :text="fileName"
            :async-status="asyncStatus"
            :invalid="invalid"
            placeholder="PDF 파일만 업로드 가능"
          />
        </div>
        
        <div class="flex gap-2">
          <button
            @click="uploadValidFile"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            유효한 파일 (.pdf)
          </button>
          <button
            @click="uploadInvalidFile"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 disabled:opacity-50"
          >
            유효하지 않은 파일 (.exe)
          </button>
          <button
            @click="reset"
            class="rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            초기화
          </button>
        </div>
        
        <div class="text-xs text-gray-500">
          <p>Async Status: <strong>{{ asyncStatus }}</strong></p>
          <p>Invalid: <strong>{{ invalid }}</strong></p>
          <p>파일명: <strong>{{ fileName || 'null' }}</strong></p>
        </div>
      </div>
    `})},g={name:"커스텀 스타일링",render:()=>({components:{StatusText:n},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스타일</h3>
          <StatusText text="document.pdf" async-status="success" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">작은 크기 (text-sm)</h3>
          <StatusText text="document.pdf" async-status="success" class="text-sm" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">굵은 글씨 (font-medium)</h3>
          <StatusText text="document.pdf" async-status="success" class="font-medium" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">작은 크기 + 굵은 글씨</h3>
          <StatusText text="document.pdf" async-status="success" class="text-sm font-medium" />
        </div>
      </div>
    `})},y={name:"실제 사용 예시",parameters:{docs:{description:{story:`
학위 논문 제출 폼에서 StatusText를 사용하는 실제 예시입니다.
파일 업로드 버튼과 함께 사용하여 업로드 상태를 표시합니다.
        `}}},render:()=>({components:{StatusText:n},setup(){const t=u(void 0),e=u("idle"),s=u(!1);return{fileName:t,asyncStatus:e,invalid:s,handleFileUpload:async()=>{const l=["thesis.pdf","thesis.exe","thesis.docx"],a=l[Math.floor(Math.random()*l.length)];t.value=a,e.value="pending",s.value=!1,await new Promise(i=>setTimeout(i,1500)),e.value="success",a&&!a.endsWith(".pdf")&&(s.value=!0)}}},template:`
      <div class="flex flex-col gap-4 w-96">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-semibold text-gray-700">
            파일 업로드 <span class="text-red-500">*</span>
          </label>
          <div class="flex items-center gap-3">
            <button
              @click="handleFileUpload"
              :disabled="asyncStatus === 'pending'"
              class="shrink-0 rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              파일 선택
            </button>
            <div class="grow rounded border border-gray-300 bg-white px-3 py-2">
              <StatusText
                :text="fileName"
                :async-status="asyncStatus"
                :invalid="invalid"
              />
            </div>
          </div>
          <span class="text-sm text-gray-500">PDF만 업로드 가능. 최대 30MB</span>
        </div>
        
        <p v-if="invalid" class="text-sm text-red-600">
          PDF 파일만 업로드할 수 있습니다.
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
이 스토리에서는 StatusText 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 text, asyncStatus, invalid 등의 속성을 변경해보세요.

## 사용 팁

- **asyncStatus**: 'pending'은 로딩 중, 'success'는 성공, 'error'는 실패를 나타냅니다.
- **invalid**: asyncStatus가 없을 때 폼 검증 실패를 표시합니다.
- **우선순위**: asyncStatus가 invalid보다 우선합니다.
        \`
      }
    }
  },
  args: {
    text: 'example.pdf',
    asyncStatus: undefined,
    invalid: false
  },
  render: (args: StatusTextProps) => ({
    components: {
      StatusText
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: '<StatusText v-bind="args" />'
  })
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '비동기 작업 상태',
  render: () => ({
    components: {
      StatusText
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Idle (대기)</h3>
          <StatusText text="document.pdf" async-status="idle" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Pending (로딩 중)</h3>
          <StatusText text="document.pdf" async-status="pending" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Success (성공)</h3>
          <StatusText text="document.pdf" async-status="success" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Error (실패)</h3>
          <StatusText text="document.pdf" async-status="error" />
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '폼 검증 상태',
  render: () => ({
    components: {
      StatusText
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Valid (유효)</h3>
          <StatusText text="valid-file.pdf" :invalid="false" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid (유효하지 않음)</h3>
          <StatusText text="invalid-file.exe" :invalid="true" />
        </div>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Empty 상태 (Placeholder)',
  render: () => ({
    components: {
      StatusText
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 Placeholder</h3>
          <StatusText :text="undefined" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">커스텀 Placeholder</h3>
          <StatusText :text="undefined" placeholder="파일을 선택하세요" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">빈 문자열</h3>
          <StatusText text="" placeholder="내용이 없습니다" />
        </div>
      </div>
    \`
  })
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '우선순위 데모',
  parameters: {
    docs: {
      description: {
        story: \`
StatusText는 다음과 같은 우선순위로 상태를 표시합니다:

1. **asyncStatus === 'pending'** → loading (회색, 회전 아이콘)
2. **asyncStatus === 'error'** → error (빨간색, X 아이콘)
3. **invalid === true** → error (빨간색, X 아이콘)
4. **asyncStatus === 'success'** → success (초록색, 체크 아이콘)
5. 그 외 → idle (기본 색상, 아이콘 없음)

이 우선순위 덕분에 비동기 작업 중에는 로딩 상태가 표시되고,
작업이 완료된 후에 폼 검증 상태가 표시됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      StatusText
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">1. Pending (최우선)</h3>
          <p class="text-xs text-gray-500">asyncStatus='pending', invalid=true</p>
          <StatusText text="uploading.pdf" async-status="pending" :invalid="true" />
          <p class="text-xs text-gray-600">→ Loading 상태 표시 (invalid 무시)</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">2. Async Error</h3>
          <p class="text-xs text-gray-500">asyncStatus='error', invalid=false</p>
          <StatusText text="failed.pdf" async-status="error" :invalid="false" />
          <p class="text-xs text-gray-600">→ Error 상태 표시</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">3. Validation Error</h3>
          <p class="text-xs text-gray-500">asyncStatus='success', invalid=true</p>
          <StatusText text="invalid.exe" async-status="success" :invalid="true" />
          <p class="text-xs text-gray-600">→ Invalid 우선 (Error 상태 표시)</p>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">4. Success</h3>
          <p class="text-xs text-gray-500">asyncStatus='success', invalid=false</p>
          <StatusText text="success.pdf" async-status="success" :invalid="false" />
          <p class="text-xs text-gray-600">→ Success 상태 표시</p>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '파일 업로드 시뮬레이션',
  parameters: {
    docs: {
      description: {
        story: \`
실제 파일 업로드 시나리오를 시뮬레이션합니다.
"파일 업로드" 버튼을 클릭하면 다음 순서로 상태가 변경됩니다:

1. **Empty** → placeholder 표시
2. **Pending** → 로딩 중 (회색, 회전 아이콘)
3. **Success** → 업로드 완료 (초록색, 체크 아이콘)

"업로드 실패" 버튼을 클릭하면 에러 상태를 확인할 수 있습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      StatusText
    },
    setup() {
      const fileName = ref<string | undefined>(undefined);
      const asyncStatus = ref<'idle' | 'pending' | 'success' | 'error'>('idle');
      const simulateUpload = async (shouldFail = false) => {
        fileName.value = 'thesis-document.pdf';
        asyncStatus.value = 'pending';
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (shouldFail) {
          asyncStatus.value = 'error';
        } else {
          asyncStatus.value = 'success';
        }
      };
      const reset = () => {
        fileName.value = undefined;
        asyncStatus.value = 'idle';
      };
      return {
        fileName,
        asyncStatus,
        simulateUpload,
        reset
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col items-center gap-4 w-96">
        <div class="w-full rounded border border-gray-300 bg-white px-3 py-2">
          <StatusText
            :text="fileName"
            :async-status="asyncStatus"
            placeholder="파일을 업로드하세요"
          />
        </div>
        
        <div class="flex gap-2">
          <button
            @click="simulateUpload(false)"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
          >
            파일 업로드
          </button>
          <button
            @click="simulateUpload(true)"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:opacity-50"
          >
            업로드 실패
          </button>
          <button
            @click="reset"
            class="rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            초기화
          </button>
        </div>
        
        <div class="text-xs text-gray-500">
          <p>현재 상태: <strong>{{ asyncStatus }}</strong></p>
          <p>파일명: <strong>{{ fileName || 'null' }}</strong></p>
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '폼 검증 시나리오',
  parameters: {
    docs: {
      description: {
        story: \`
파일 업로드 후 폼 검증이 실행되는 시나리오입니다.

1. 파일 업로드 (pending)
2. 업로드 완료 (success)
3. 파일 타입 검증 실패 (invalid)

이 시나리오에서 asyncStatus가 'success'이지만 invalid=true이므로
error 상태가 표시됩니다 (우선순위 규칙에 따라).
        \`
      }
    }
  },
  render: () => ({
    components: {
      StatusText
    },
    setup() {
      const fileName = ref<string | undefined>(undefined);
      const asyncStatus = ref<'idle' | 'pending' | 'success' | 'error'>('idle');
      const invalid = ref(false);
      const uploadValidFile = async () => {
        fileName.value = 'valid-document.pdf';
        asyncStatus.value = 'pending';
        invalid.value = false;
        await new Promise(resolve => setTimeout(resolve, 1500));
        asyncStatus.value = 'success';
        invalid.value = false;
      };
      const uploadInvalidFile = async () => {
        fileName.value = 'invalid-document.exe';
        asyncStatus.value = 'pending';
        invalid.value = false;
        await new Promise(resolve => setTimeout(resolve, 1500));
        asyncStatus.value = 'success';
        // 업로드는 성공했지만 파일 타입이 유효하지 않음
        invalid.value = true;
      };
      const reset = () => {
        fileName.value = undefined;
        asyncStatus.value = 'idle';
        invalid.value = false;
      };
      return {
        fileName,
        asyncStatus,
        invalid,
        uploadValidFile,
        uploadInvalidFile,
        reset
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col items-center gap-4 w-96">
        <div class="w-full rounded border border-gray-300 bg-white px-3 py-2">
          <StatusText
            :text="fileName"
            :async-status="asyncStatus"
            :invalid="invalid"
            placeholder="PDF 파일만 업로드 가능"
          />
        </div>
        
        <div class="flex gap-2">
          <button
            @click="uploadValidFile"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 disabled:opacity-50"
          >
            유효한 파일 (.pdf)
          </button>
          <button
            @click="uploadInvalidFile"
            :disabled="asyncStatus === 'pending'"
            class="rounded bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700 disabled:opacity-50"
          >
            유효하지 않은 파일 (.exe)
          </button>
          <button
            @click="reset"
            class="rounded bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
          >
            초기화
          </button>
        </div>
        
        <div class="text-xs text-gray-500">
          <p>Async Status: <strong>{{ asyncStatus }}</strong></p>
          <p>Invalid: <strong>{{ invalid }}</strong></p>
          <p>파일명: <strong>{{ fileName || 'null' }}</strong></p>
        </div>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '커스텀 스타일링',
  render: () => ({
    components: {
      StatusText
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 스타일</h3>
          <StatusText text="document.pdf" async-status="success" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">작은 크기 (text-sm)</h3>
          <StatusText text="document.pdf" async-status="success" class="text-sm" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">굵은 글씨 (font-medium)</h3>
          <StatusText text="document.pdf" async-status="success" class="font-medium" />
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">작은 크기 + 굵은 글씨</h3>
          <StatusText text="document.pdf" async-status="success" class="text-sm font-medium" />
        </div>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '실제 사용 예시',
  parameters: {
    docs: {
      description: {
        story: \`
학위 논문 제출 폼에서 StatusText를 사용하는 실제 예시입니다.
파일 업로드 버튼과 함께 사용하여 업로드 상태를 표시합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      StatusText
    },
    setup() {
      const fileName = ref<string | undefined>(undefined);
      const asyncStatus = ref<'idle' | 'pending' | 'success' | 'error'>('idle');
      const invalid = ref(false);
      const handleFileUpload = async () => {
        // 파일 선택 시뮬레이션
        const files = ['thesis.pdf', 'thesis.exe', 'thesis.docx'];
        const selectedFile = files[Math.floor(Math.random() * files.length)];
        fileName.value = selectedFile;
        asyncStatus.value = 'pending';
        invalid.value = false;

        // 업로드 시뮬레이션
        await new Promise(resolve => setTimeout(resolve, 1500));
        asyncStatus.value = 'success';

        // PDF가 아니면 검증 실패
        if (selectedFile && !selectedFile.endsWith('.pdf')) {
          invalid.value = true;
        }
      };
      return {
        fileName,
        asyncStatus,
        invalid,
        handleFileUpload
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
            <button
              @click="handleFileUpload"
              :disabled="asyncStatus === 'pending'"
              class="shrink-0 rounded border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50"
            >
              파일 선택
            </button>
            <div class="grow rounded border border-gray-300 bg-white px-3 py-2">
              <StatusText
                :text="fileName"
                :async-status="asyncStatus"
                :invalid="invalid"
              />
            </div>
          </div>
          <span class="text-sm text-gray-500">PDF만 업로드 가능. 최대 30MB</span>
        </div>
        
        <p v-if="invalid" class="text-sm text-red-600">
          PDF 파일만 업로드할 수 있습니다.
        </p>
      </div>
    \`
  })
}`,...y.parameters?.docs?.source}}};const M=["Playground","AsyncStates","ValidationStates","EmptyState","PriorityDemo","FileUploadSimulation","ValidationScenario","CustomStyling","RealWorldExample"];export{o as AsyncStates,g as CustomStyling,p as EmptyState,m as FileUploadSimulation,c as Playground,x as PriorityDemo,y as RealWorldExample,f as ValidationScenario,C as ValidationStates,M as __namedExportsOrder,q as default};
