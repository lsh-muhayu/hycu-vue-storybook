import{d as w,C as N,i as I,o as L,w as t,k as V,m as P,u as i,c as W,a as A,p as m,q as H,g as j,r as a,D as K,h as z}from"./iframe-DlT4buBl.js";import{i as Z,a as l,b as s,c as r,d as g,e as d,f as c,g as C,h as p,j as G,k as D,l as y}from"./AlertDialog-CDCO5ZcR.js";import{r as U,u as X}from"./index-ufL9zV0G.js";import{u as J,P as Q}from"./Primitive-DFsTNm74.js";import{u as Y}from"./useId-C8OaK5DY.js";import{b as ee,_ as f}from"./Button-DztCVT7A.js";import{_ as E}from"./Label-jVReVGhF.js";import{_ as M}from"./Input-BAhCiHvs.js";import{_ as oe}from"./Textarea-DDIDIMxx.js";import{_ as ne}from"./Checkbox-BYoGA8xK.js";import{_ as ae,a as te,b as ie,c as le}from"./SelectItem-BtlTPoE-.js";import"./preload-helper-PPVm8Dsz.js";import"./useForwardPropsEmits-BdoYTxB7.js";import"./hasRenderableSlot-CFen_Ysy.js";import"./context-D3zSeelm.js";import"./useDirection-g-fZHNq-.js";import"./getActiveElement-FUKBWQwh.js";import"./Presence-CNhCXu6D.js";import"./Teleport-BOAcbFSb.js";import"./nullish-CHIgUVhi.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ScrollArea-x7p1LJM5.js";import"./index-DpYNlQT6.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-CrxYzzng.js";import"./RovingFocusItem-BTOrfZBW.js";import"./Collection-BYm47QeV.js";import"./usePrimitiveElement-CS9oFYHw.js";import"./RovingFocusGroup-BB-8sPxy.js";import"./VisuallyHiddenInput-CrV0FcJd.js";import"./VisuallyHidden-BLtOoluO.js";import"./check-C6-FXEKW.js";import"./useTypeahead-C3OBrQAL.js";import"./PopperContent-8QAz6_j_.js";import"./ScrollAreaAutoSize-asAkWjnu.js";import"./useFocusGuards-DNatVZDC.js";var se=w({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(n){const o=n,e=Z(),{forwardRef:u,currentElement:F}=J();return e.contentId||=Y(void 0,"reka-dialog-content"),N(()=>{e.triggerElement.value=F.value}),(B,R)=>(L(),I(i(Q),P(o,{ref:i(u),type:B.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":i(e).open.value||!1,"aria-controls":i(e).open.value?i(e).contentId:void 0,"data-state":i(e).open.value?"open":"closed",onClick:i(e).onOpenToggle}),{default:t(()=>[V(B.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),re=se;const q=w({__name:"DialogTrigger",props:{class:{},asChild:{type:Boolean},as:{},variant:{default:"filled"},color:{default:"primary"},size:{default:"md"}},setup(n){const o=n,e=U(o,"variant","color","size"),u=X(e),F=W(()=>A(ee({variant:o.variant,color:o.color,size:o.size}),o.class));return(B,R)=>(L(),I(i(re),P(i(u),{class:F.value}),{default:t(()=>[V(B.$slots,"default")]),_:3},16,["class"]))}});q.__docgenInfo={exportName:"default",displayName:"DialogTrigger",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | "icon-md" | "icon-sm"',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "icon-md" | "icon-sm"',schema:['"md"','"xs"','"sm"','"lg"','"icon-md"','"icon-sm"']},default:'"md"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"text" | "filled" | "outlined"',declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']},default:'"filled"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"deepblue"']},default:'"primary"'},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"class",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"md" | "xs" | "sm" | "lg" | "icon-md" | "icon-sm"',description:"",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | "icon-md" | "icon-sm"',schema:['"md"','"xs"','"sm"','"lg"','"icon-md"','"icon-sm"']}},{name:"variant",type:'"text" | "filled" | "outlined"',description:"",declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']}},{name:"color",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"deepblue"']}},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}},{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogTrigger.vue"};const $=w({__name:"DialogOverlayKitExample",props:{overlayControl:{}},setup(n){return(o,e)=>(L(),I(G,{"overlay-control":n.overlayControl},{default:t(()=>[m(l,null,{default:t(()=>[m(s,null,{default:t(()=>[m(r,null,{default:t(()=>[...e[0]||(e[0]=[H("기본 다이얼로그",-1)])]),_:1})]),_:1}),m(g,null,{default:t(()=>[...e[1]||(e[1]=[j("p",{class:"text-gray-700"}," 다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다. ",-1)])]),_:1}),m(d,null,{default:t(()=>[m(c,null,{default:t(()=>[...e[2]||(e[2]=[H("취소",-1)])]),_:1}),m(C,null,{default:t(()=>[m(p,null,{default:t(()=>[...e[3]||(e[3]=[H("확인",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["overlay-control"]))}});$.__docgenInfo={exportName:"default",displayName:"DialogOverlayKitExample",type:1,props:[{name:"overlayControl",global:!1,description:"",tags:[],required:!0,type:"OverlayControllerProps",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"overlayControl",type:"OverlayControllerProps",description:"",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/stories/DialogOverlayKitExample.vue"};const Ke={title:"Shared/UI/Dialog",component:D,parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
Reka UI의 Dialog를 기반으로 하며, Vue 3 Composition API와 함께 사용할 수 있도록 설계되었습니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`DialogHeader\`, \`DialogBody\`, \`DialogFooter\`를 통한 구조화된 레이아웃
- **로딩 상태**: \`loading\` prop을 통한 로딩 상태 관리
- **닫기 모드**: \`dismissMode\` prop을 통한 닫기 동작 제어
  - \`none\`: 배경 클릭/ESC로 닫을 수 없음 (기본값)
  - \`dismiss\`: 배경 클릭/ESC로 자유롭게 닫을 수 있음
  - \`confirm\`: 배경 클릭/ESC 시 확인 다이얼로그 표시
- **확인/취소 버튼**: \`DialogConfirmButton\`, \`DialogCancelButton\`을 통한 편리한 버튼 제공
  - \`DialogCancelButton\`: 자동으로 다이얼로그를 닫음 (confirm 체크 포함)
  - \`DialogConfirmButton\`: 클릭 이벤트 처리 후 자동으로 닫힘 (confirm 체크 없음)
- **스크롤 가능한 바디**: \`DialogBody\`는 자동으로 스크롤 영역을 제공
- **커스텀 확인 메시지**: \`DialogContent\`의 \`confirmDialog\` prop으로 확인 메시지 커스터마이징

## 사용 예시

### 기본 사용법

\`\`\`vue
<template>
  <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
    <DialogTrigger>다이얼로그 열기</DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>제목</DialogTitle>
        <DialogDescription>설명</DialogDescription>
      </DialogHeader>
      <DialogBody>
        <p>내용</p>
      </DialogBody>
      <DialogFooter>
        <DialogCancelButton>취소</DialogCancelButton>
        <DialogConfirmButton @click="handleConfirm">확인</DialogConfirmButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const loading = ref(false);

const handleConfirm = async () => {
  // 확인 버튼 클릭 시 처리할 로직
  // 완료 후 자동으로 다이얼로그가 닫힙니다
};
<\/script>
\`\`\`

### Confirm 모드 사용법

\`\`\`vue
<template>
  <Dialog v-model:open="isOpen" dismiss-mode="confirm">
    <DialogContent :confirm-dialog="customConfirmDialog">
      <DialogHeader>
        <DialogTitle>폼 작성</DialogTitle>
      </DialogHeader>
      <DialogBody>
        <Input v-model="formData" />
      </DialogBody>
      <DialogFooter>
        <DialogCancelButton>취소</DialogCancelButton>
        <DialogConfirmButton @click="handleSave">저장</DialogConfirmButton>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const formData = ref('');

// 커스텀 확인 메시지
const customConfirmDialog = {
  title: '정말 나가시겠습니까?',
  body: '작성 중인 내용이 저장되지 않습니다.',
  cancel: '계속 작성',
  confirm: '나가기',
};

const handleSave = async () => {
  // 저장 로직 - 완료 후 자동으로 닫힘 (confirm 체크 없음)
};
<\/script>
\`\`\`

### DialogClose를 사용한 커스텀 닫기 버튼

\`\`\`vue
<DialogFooter>
  <DialogCancelButton>취소</DialogCancelButton>
  <DialogClose>
    <Button variant="filled" color="primary">커스텀 닫기</Button>
  </DialogClose>
</DialogFooter>
\`\`\`

**참고**: \`DialogClose\`는 자식 요소에 자동으로 닫기 동작을 추가합니다. \`dismissMode="confirm"\`일 때는 확인 다이얼로그가 표시됩니다.
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Dialog의 로딩 상태. true일 때 배경 클릭이나 ESC 키로 닫을 수 없습니다.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dismissMode:{control:"select",options:["none","dismiss","confirm"],description:`Dialog의 닫기 동작 모드
- none: 배경 클릭/ESC로 닫을 수 없음 (기본값)
- dismiss: 배경 클릭/ESC로 자유롭게 닫을 수 있음
- confirm: 배경 클릭/ESC 시 확인 다이얼로그 표시

**참고:** DialogContent의 confirmDialog prop으로 확인 메시지를 커스터마이징할 수 있습니다.`,table:{type:{summary:"'none' | 'dismiss' | 'confirm'"},defaultValue:{summary:"'none'"}}}}},v={render:n=>({components:{Dialog:D,DialogTrigger:q,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p},setup(){return{args:n}},template:`
      <Dialog>
        <DialogTrigger>다이얼로그 열기</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Trigger를 사용한 다이얼로그</DialogTitle>
            <DialogDescription>
              DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p class="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogClose>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})},b={render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogCancelButton:c,DialogConfirmButton:p,Button:f},setup(){return{isOpen:a(!1)}},template:`
      <div>
        <Button @click="isOpen = true">다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기본 다이얼로그</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},x={render:()=>({components:{Button:f},setup(){return{handleOpen:()=>{K.open(o=>z($,{overlayControl:o}))}}},template:`
      <Button @click="handleOpen">다이얼로그 열기</Button>
    `})},h={parameters:{docs:{description:{story:`
로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.

**주요 특징:**
- \`loading\` prop이 \`true\`일 때 dismiss 동작이 차단됩니다
- \`DialogConfirmButton\`은 자동으로 로딩 상태를 감지하여 버튼에 로딩 인디케이터를 표시합니다
- 비동기 작업이 완료되면 자동으로 다이얼로그가 닫힙니다
        `}}},render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p,Button:f},setup(){const n=a(!1),o=a(!1);return{isOpen:n,loading:o,handleConfirm:()=>new Promise(u=>{o.value=!0,setTimeout(()=>{o.value=!1,u()},2e3)})}},template:`
      <div>
        <Button @click="isOpen = true">로딩 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로딩 상태 다이얼로그</DialogTitle>
              <DialogDescription>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
                </p>
                <p v-if="loading" class="text-primary font-semibold">
                  ⏳ 로딩 중입니다... (2초 대기)
                </p>
                <div class="rounded-md bg-blue-50 p-3">
                  <p class="text-sm text-blue-800">
                    💡 확인 버튼을 클릭하면 2초간 로딩 상태가 유지되며, 완료 후 자동으로 닫힙니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton :on-click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},T={parameters:{docs:{description:{story:`
스크롤이 생기게 하려면 **DialogContent에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \`class="h-[500px]"\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        `}}},render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:C,Button:f},setup(){return{isOpen:a(!1)}},template:`
      <div>
        <Button @click="isOpen = true">긴 내용 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px]">
            <DialogHeader>
              <DialogTitle>긴 내용이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p v-for="i in 100" :key="i">
                엄청 길면? {{ i }}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},O={parameters:{docs:{description:{story:`
가로 스크롤이 생기게 하려면 **DialogContent에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \`class="w-[400px]"\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        `}}},render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p,Button:f},setup(){return{isOpen:a(!1)}},template:`
      <div>
        <Button @click="isOpen = true">가로 스크롤 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[400px] w-[400px]">
            <DialogHeader>
              <DialogTitle>가로/세로 스크롤이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="min-w-[800px]">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2 text-left">이름</th>
                      <th class="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th class="border border-gray-300 p-2 text-left">전화번호</th>
                      <th class="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th class="border border-gray-300 p-2 text-left">직책</th>
                      <th class="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 10" :key="i">
                      <td class="border border-gray-300 p-2">홍길동{{ i }}</td>
                      <td class="border border-gray-300 p-2">
                        hong.gildong{{ i }}@example.com
                      </td>
                      <td class="border border-gray-300 p-2">010-1234-567{{ i - 1 }}</td>
                      <td class="border border-gray-300 p-2">컴퓨터공학과</td>
                      <td class="border border-gray-300 p-2">교수</td>
                      <td class="border border-gray-300 p-2">활성</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},k={parameters:{docs:{description:{story:`
Dialog의 \`dismissMode\` prop은 배경 클릭이나 ESC 키 입력 시 다이얼로그를 닫는 동작을 제어합니다.

### 옵션

- **none**: 배경 클릭이나 ESC 키로 닫을 수 없습니다. 반드시 Dialog 내부의 버튼을 클릭해야 합니다.
  - 사용 시나리오: 중요한 정보를 반드시 읽어야 하는 경우, 데이터 입력 중 실수로 닫히는 것을 방지

- **dismiss**: 배경 클릭이나 ESC 키로 바로 닫을 수 있습니다.
  - 사용 시나리오: 간단한 정보 표시, 이미지 뷰어, 미리보기 등

- **confirm**: 배경 클릭이나 ESC 키 입력 시 확인 다이얼로그가 표시됩니다.
  - 사용 시나리오: 폼 작성 중 실수로 닫는 것을 방지, 저장되지 않은 변경사항이 있을 때
  - X 버튼이나 취소 버튼을 클릭해도 확인 다이얼로그가 표시됩니다
  - 확인 버튼은 확인 다이얼로그 없이 바로 닫힙니다

각 버튼을 클릭하여 세 가지 모드의 동작을 비교해보세요.
        `}}},render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:C,Button:f,Input:M,Label:E},setup(){const n=a(!1),o=a(!1),e=a(!1),u=a("");return{noneOpen:n,dismissOpen:o,confirmOpen:e,inputValue:u}},template:`
      <div class="flex gap-3">
        <!-- None 버튼 -->
        <Button @click="noneOpen = true" variant="outline">
          None 모드
        </Button>
        <Dialog v-model:open="noneOpen" dismiss-mode="none">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>닫기 제한 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="none"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="none"</code>으로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러도 닫히지 않습니다.
                </p>
                <p class="text-gray-700">
                  반드시 아래의 취소 또는 확인 버튼을 클릭해야 합니다.
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <!-- Dismiss 버튼 -->
        <Button @click="dismissOpen = true" variant="outline">
          Dismiss 모드
        </Button>
        <Dialog v-model:open="dismissOpen" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>자유롭게 닫을 수 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="dismiss"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="dismiss"</code>로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러보세요. 즉시 닫힙니다.
                </p>
                <p class="text-gray-700">
                  물론 아래의 버튼으로도 닫을 수 있습니다.
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <!-- Confirm 버튼 -->
        <Button @click="confirmOpen = true; inputValue = ''" variant="outline">
          Confirm 모드
        </Button>
        <Dialog v-model:open="confirmOpen" dismiss-mode="confirm">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>닫기 전 확인하는 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="confirm"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-4">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="confirm"</code>으로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러보세요. 
                  닫기 전에 확인 다이얼로그가 표시됩니다.
                </p>
                <div class="space-y-2">
                  <Label>입력 테스트</Label>
                  <Input 
                    v-model="inputValue" 
                    placeholder="작성 중인 내용을 보호합니다" 
                  />
                </div>
                <div class="rounded-md bg-blue-50 p-3">
                  <p class="text-sm text-blue-800">
                    💡 취소 버튼은 확인 다이얼로그를 표시하지만, 저장 버튼은 바로 닫힙니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>저장</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},S={parameters:{docs:{description:{story:`
Dialog 내부에 또 다른 Dialog가 있는 중첩 구조에서 내부 Dialog가 \`dismissMode="confirm"\`을 사용하는 예시입니다.

**테스트 시나리오:**
1. "외부 Dialog 열기" 버튼을 클릭하여 외부 Dialog를 엽니다
2. 외부 Dialog 내부의 "내부 Dialog 열기 (Confirm 모드)" 버튼을 클릭합니다
3. 내부 Dialog의 배경을 클릭하거나 ESC 키를 누릅니다
4. AlertDialog가 표시되어 닫을지 확인합니다
5. AlertDialog와 내부 Dialog가 올바르게 닫히는지 확인합니다

이 예시는 중첩된 Dialog 구조에서도 \`dismissMode="confirm"\`이 정상적으로 작동하는지 검증합니다.
        `}}},render:()=>({components:{Dialog:D,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogDescription:y,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:C,Button:f,Input:M,Label:E},setup(){const n=a(!1),o=a(!1),e=a("");return{outerOpen:n,innerOpen:o,innerInputValue:e}},template:`
      <div>
        <Button @click="outerOpen = true">외부 Dialog 열기</Button>
        
        <!-- 외부 Dialog (dismissMode="dismiss") -->
        <Dialog v-model:open="outerOpen" dismiss-mode="dismiss">
          <DialogContent class="w-[600px]">
            <DialogHeader>
              <DialogTitle>외부 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="dismiss" - 자유롭게 닫을 수 있습니다
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-4">
                <p class="text-gray-700">
                  이것은 외부 다이얼로그입니다. 배경 클릭이나 ESC로 자유롭게 닫을 수 있습니다.
                </p>
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 내부 다이얼로그가 열립니다.
                </p>
                <Button @click="innerOpen = true; innerInputValue = ''" variant="outlined">
                  내부 Dialog 열기 (Confirm 모드)
                </Button>
                
                <!-- 내부 Dialog (dismissMode="confirm") -->
                <Dialog v-model:open="innerOpen" dismiss-mode="confirm">
                  <DialogContent class="w-[500px]">
                    <DialogHeader>
                      <DialogTitle>내부 다이얼로그 (중첩)</DialogTitle>
                      <DialogDescription>
                        dismissMode="confirm" - 닫기 전 확인
                      </DialogDescription>
                    </DialogHeader>
                    <DialogBody>
                      <div class="space-y-4">
                        <p class="text-gray-700">
                          이것은 내부 다이얼로그입니다. 
                          <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="confirm"</code>으로 설정되어 있습니다.
                        </p>
                        <p class="text-gray-700">
                          배경을 클릭하거나 ESC 키를 눌러보세요. 
                          닫기 전에 확인 AlertDialog가 표시됩니다.
                        </p>
                        <div class="space-y-2">
                          <Label>작성 중인 내용</Label>
                          <Input 
                            v-model="innerInputValue" 
                            placeholder="여기에 입력한 내용을 보호합니다" 
                          />
                        </div>
                        <div class="rounded-md bg-blue-50 p-3">
                          <p class="text-sm text-blue-800">
                            💡 중첩된 Dialog 구조에서도 confirm 모드가 정상 작동합니다
                          </p>
                        </div>
                      </div>
                    </DialogBody>
                    <DialogFooter>
                      <DialogCancelButton>취소</DialogCancelButton>
                      <DialogConfirmButton>저장</DialogConfirmButton>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>닫기</DialogCancelButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},_={render:()=>({components:{Dialog:D,DialogTrigger:q,DialogContent:l,DialogHeader:s,DialogBody:g,DialogFooter:d,DialogTitle:r,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:C,Label:E,Input:M,Textarea:oe,Checkbox:ne,Select:le,SelectTrigger:ie,SelectContent:te,SelectItem:ae},template:`
      <Dialog dismiss-mode="confirm">
        <DialogTrigger>주차별 논문지도 계획 추가</DialogTrigger>
        <DialogContent class="h-[750px] w-[500px]">
          <DialogHeader>
            <DialogTitle>주차별 논문지도 계획 추가</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <section class="space-y-4">
              <section class="flex gap-4">
                <div class="flex w-full flex-col gap-2">
                  <Label required>주차</Label>
                  <Input type="number" />
                </div>
                <div class="flex w-full flex-col gap-2">
                  <Label required>계획일</Label>
                  <Input type="date" />
                </div>
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>담당교수 선택</Label>
                <div class="space-y-2.5">
                  <div class="flex items-center gap-2">
                    <Checkbox id="advisor-kim" class="peer" />
                    <Label
                      for="advisor-kim"
                      class="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700"
                    >
                      김교수 (주지도교수)
                    </Label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox id="advisor-hong" class="peer" />
                    <Label
                      for="advisor-hong"
                      class="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700"
                    >
                      홍교수 (부지도교수)
                    </Label>
                  </div>
                </div>
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>지도 주제</Label>
                <Input type="text" placeholder="예: 연구방법론 개요" />
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>계획 내용</Label>
                <Textarea class="h-24" placeholder="지도할 내용을 상세히 입력하세요" />
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>지도 방식</Label>
                <Select>
                  <SelectTrigger placeholder="선택하세요" />
                  <SelectContent>
                    <SelectItem value="대면">대면</SelectItem>
                    <SelectItem value="온라인">온라인</SelectItem>
                    <SelectItem value="Zoom">Zoom</SelectItem>
                    <SelectItem value="이메일">이메일</SelectItem>
                    <SelectItem value="전화">전화</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <div class="flex items-start gap-2 rounded-md bg-blue-50 p-3">
                <span class="text-base">💡</span>
                <p class="text-sm text-gray-700">
                  계획을 저장한 후, 실제 지도를 진행하면 '실적입력' 버튼을 클릭하여 실행
                  내용을 기록하세요.
                </p>
              </div>
            </section>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton class="w-full">취소</DialogCancelButton>
            <DialogConfirmButton class="w-full">저장</DialogConfirmButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton
    },
    setup() {
      return {
        args
      };
    },
    template: /*html*/\`
      <Dialog>
        <DialogTrigger>다이얼로그 열기</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Trigger를 사용한 다이얼로그</DialogTitle>
            <DialogDescription>
              DialogTrigger를 사용하여 다이얼로그를 열 수 있습니다.
            </DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p class="text-gray-700">이 다이얼로그는 Trigger 버튼을 클릭하여 열렸습니다.</p>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton>취소</DialogCancelButton>
            <DialogClose>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogCancelButton,
      DialogConfirmButton,
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>기본 다이얼로그</DialogTitle>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다.
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleOpen = () => {
        overlay.open(overlayControl => h(DialogOverlayKitExample, {
          overlayControl
        }));
      };
      return {
        handleOpen
      };
    },
    template: /*html*/\`
      <Button @click="handleOpen">다이얼로그 열기</Button>
    \`
  })
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.

**주요 특징:**
- \\\`loading\\\` prop이 \\\`true\\\`일 때 dismiss 동작이 차단됩니다
- \\\`DialogConfirmButton\\\`은 자동으로 로딩 상태를 감지하여 버튼에 로딩 인디케이터를 표시합니다
- 비동기 작업이 완료되면 자동으로 다이얼로그가 닫힙니다
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      Button
    },
    setup() {
      const isOpen = ref(false);
      const loading = ref(false);
      const handleConfirm = () => {
        return new Promise<void>(resolve => {
          loading.value = true;
          // 2초간 비동기 작업 시뮬레이션
          setTimeout(() => {
            loading.value = false;
            resolve();
          }, 2000);
        });
      };
      return {
        isOpen,
        loading,
        handleConfirm
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">로딩 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로딩 상태 다이얼로그</DialogTitle>
              <DialogDescription>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
                </p>
                <p v-if="loading" class="text-primary font-semibold">
                  ⏳ 로딩 중입니다... (2초 대기)
                </p>
                <div class="rounded-md bg-blue-50 p-3">
                  <p class="text-sm text-blue-800">
                    💡 확인 버튼을 클릭하면 2초간 로딩 상태가 유지되며, 완료 후 자동으로 닫힙니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton :on-click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
스크롤이 생기게 하려면 **DialogContent에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \\\`class="h-[500px]"\\\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">긴 내용 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[500px]">
            <DialogHeader>
              <DialogTitle>긴 내용이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 스크롤이 생길 만큼 긴 내용을 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p v-for="i in 100" :key="i">
                엄청 길면? {{ i }}엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
                엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면? 엄청 길면?
              </p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
가로 스크롤이 생기게 하려면 **DialogContent에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \\\`class="w-[400px]"\\\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      Button
    },
    setup() {
      const isOpen = ref(false);
      return {
        isOpen
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="isOpen = true">가로 스크롤 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen">
          <DialogContent class="h-[400px] w-[400px]">
            <DialogHeader>
              <DialogTitle>가로/세로 스크롤이 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                이 다이얼로그는 Body 영역에 가로 스크롤이 생길 만큼 넓은 콘텐츠를 포함합니다.
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="min-w-[800px]">
                <table class="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr class="bg-gray-100">
                      <th class="border border-gray-300 p-2 text-left">이름</th>
                      <th class="border border-gray-300 p-2 text-left">이메일 주소</th>
                      <th class="border border-gray-300 p-2 text-left">전화번호</th>
                      <th class="border border-gray-300 p-2 text-left">소속 부서</th>
                      <th class="border border-gray-300 p-2 text-left">직책</th>
                      <th class="border border-gray-300 p-2 text-left">상태</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="i in 10" :key="i">
                      <td class="border border-gray-300 p-2">홍길동{{ i }}</td>
                      <td class="border border-gray-300 p-2">
                        hong.gildong{{ i }}@example.com
                      </td>
                      <td class="border border-gray-300 p-2">010-1234-567{{ i - 1 }}</td>
                      <td class="border border-gray-300 p-2">컴퓨터공학과</td>
                      <td class="border border-gray-300 p-2">교수</td>
                      <td class="border border-gray-300 p-2">활성</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...O.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog의 \\\`dismissMode\\\` prop은 배경 클릭이나 ESC 키 입력 시 다이얼로그를 닫는 동작을 제어합니다.

### 옵션

- **none**: 배경 클릭이나 ESC 키로 닫을 수 없습니다. 반드시 Dialog 내부의 버튼을 클릭해야 합니다.
  - 사용 시나리오: 중요한 정보를 반드시 읽어야 하는 경우, 데이터 입력 중 실수로 닫히는 것을 방지

- **dismiss**: 배경 클릭이나 ESC 키로 바로 닫을 수 있습니다.
  - 사용 시나리오: 간단한 정보 표시, 이미지 뷰어, 미리보기 등

- **confirm**: 배경 클릭이나 ESC 키 입력 시 확인 다이얼로그가 표시됩니다.
  - 사용 시나리오: 폼 작성 중 실수로 닫는 것을 방지, 저장되지 않은 변경사항이 있을 때
  - X 버튼이나 취소 버튼을 클릭해도 확인 다이얼로그가 표시됩니다
  - 확인 버튼은 확인 다이얼로그 없이 바로 닫힙니다

각 버튼을 클릭하여 세 가지 모드의 동작을 비교해보세요.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button,
      Input,
      Label
    },
    setup() {
      const noneOpen = ref(false);
      const dismissOpen = ref(false);
      const confirmOpen = ref(false);
      const inputValue = ref('');
      return {
        noneOpen,
        dismissOpen,
        confirmOpen,
        inputValue
      };
    },
    template: /*html*/\`
      <div class="flex gap-3">
        <!-- None 버튼 -->
        <Button @click="noneOpen = true" variant="outline">
          None 모드
        </Button>
        <Dialog v-model:open="noneOpen" dismiss-mode="none">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>닫기 제한 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="none"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="none"</code>으로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러도 닫히지 않습니다.
                </p>
                <p class="text-gray-700">
                  반드시 아래의 취소 또는 확인 버튼을 클릭해야 합니다.
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <!-- Dismiss 버튼 -->
        <Button @click="dismissOpen = true" variant="outline">
          Dismiss 모드
        </Button>
        <Dialog v-model:open="dismissOpen" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>자유롭게 닫을 수 있는 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="dismiss"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-3">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="dismiss"</code>로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러보세요. 즉시 닫힙니다.
                </p>
                <p class="text-gray-700">
                  물론 아래의 버튼으로도 닫을 수 있습니다.
                </p>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>확인</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <!-- Confirm 버튼 -->
        <Button @click="confirmOpen = true; inputValue = ''" variant="outline">
          Confirm 모드
        </Button>
        <Dialog v-model:open="confirmOpen" dismiss-mode="confirm">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>닫기 전 확인하는 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="confirm"
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-4">
                <p class="text-gray-700">
                  이 다이얼로그는 <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="confirm"</code>으로 설정되어 있습니다.
                </p>
                <p class="text-gray-700">
                  배경을 클릭하거나 ESC 키를 눌러보세요. 
                  닫기 전에 확인 다이얼로그가 표시됩니다.
                </p>
                <div class="space-y-2">
                  <Label>입력 테스트</Label>
                  <Input 
                    v-model="inputValue" 
                    placeholder="작성 중인 내용을 보호합니다" 
                  />
                </div>
                <div class="rounded-md bg-blue-50 p-3">
                  <p class="text-sm text-blue-800">
                    💡 취소 버튼은 확인 다이얼로그를 표시하지만, 저장 버튼은 바로 닫힙니다.
                  </p>
                </div>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton>저장</DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
Dialog 내부에 또 다른 Dialog가 있는 중첩 구조에서 내부 Dialog가 \\\`dismissMode="confirm"\\\`을 사용하는 예시입니다.

**테스트 시나리오:**
1. "외부 Dialog 열기" 버튼을 클릭하여 외부 Dialog를 엽니다
2. 외부 Dialog 내부의 "내부 Dialog 열기 (Confirm 모드)" 버튼을 클릭합니다
3. 내부 Dialog의 배경을 클릭하거나 ESC 키를 누릅니다
4. AlertDialog가 표시되어 닫을지 확인합니다
5. AlertDialog와 내부 Dialog가 올바르게 닫히는지 확인합니다

이 예시는 중첩된 Dialog 구조에서도 \\\`dismissMode="confirm"\\\`이 정상적으로 작동하는지 검증합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Dialog,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogDescription,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Button,
      Input,
      Label
    },
    setup() {
      const outerOpen = ref(false);
      const innerOpen = ref(false);
      const innerInputValue = ref('');
      return {
        outerOpen,
        innerOpen,
        innerInputValue
      };
    },
    template: /*html*/\`
      <div>
        <Button @click="outerOpen = true">외부 Dialog 열기</Button>
        
        <!-- 외부 Dialog (dismissMode="dismiss") -->
        <Dialog v-model:open="outerOpen" dismiss-mode="dismiss">
          <DialogContent class="w-[600px]">
            <DialogHeader>
              <DialogTitle>외부 다이얼로그</DialogTitle>
              <DialogDescription>
                dismissMode="dismiss" - 자유롭게 닫을 수 있습니다
              </DialogDescription>
            </DialogHeader>
            <DialogBody>
              <div class="space-y-4">
                <p class="text-gray-700">
                  이것은 외부 다이얼로그입니다. 배경 클릭이나 ESC로 자유롭게 닫을 수 있습니다.
                </p>
                <p class="text-gray-700">
                  아래 버튼을 클릭하면 내부 다이얼로그가 열립니다.
                </p>
                <Button @click="innerOpen = true; innerInputValue = ''" variant="outlined">
                  내부 Dialog 열기 (Confirm 모드)
                </Button>
                
                <!-- 내부 Dialog (dismissMode="confirm") -->
                <Dialog v-model:open="innerOpen" dismiss-mode="confirm">
                  <DialogContent class="w-[500px]">
                    <DialogHeader>
                      <DialogTitle>내부 다이얼로그 (중첩)</DialogTitle>
                      <DialogDescription>
                        dismissMode="confirm" - 닫기 전 확인
                      </DialogDescription>
                    </DialogHeader>
                    <DialogBody>
                      <div class="space-y-4">
                        <p class="text-gray-700">
                          이것은 내부 다이얼로그입니다. 
                          <code class="rounded bg-gray-100 px-1 py-0.5 text-sm">dismissMode="confirm"</code>으로 설정되어 있습니다.
                        </p>
                        <p class="text-gray-700">
                          배경을 클릭하거나 ESC 키를 눌러보세요. 
                          닫기 전에 확인 AlertDialog가 표시됩니다.
                        </p>
                        <div class="space-y-2">
                          <Label>작성 중인 내용</Label>
                          <Input 
                            v-model="innerInputValue" 
                            placeholder="여기에 입력한 내용을 보호합니다" 
                          />
                        </div>
                        <div class="rounded-md bg-blue-50 p-3">
                          <p class="text-sm text-blue-800">
                            💡 중첩된 Dialog 구조에서도 confirm 모드가 정상 작동합니다
                          </p>
                        </div>
                      </div>
                    </DialogBody>
                    <DialogFooter>
                      <DialogCancelButton>취소</DialogCancelButton>
                      <DialogConfirmButton>저장</DialogConfirmButton>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>닫기</DialogCancelButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Dialog,
      DialogTrigger,
      DialogContent,
      DialogHeader,
      DialogBody,
      DialogFooter,
      DialogTitle,
      DialogCancelButton,
      DialogConfirmButton,
      DialogClose,
      Label,
      Input,
      Textarea,
      Checkbox,
      Select,
      SelectTrigger,
      SelectContent,
      SelectItem
    },
    template: /*html*/\`
      <Dialog dismiss-mode="confirm">
        <DialogTrigger>주차별 논문지도 계획 추가</DialogTrigger>
        <DialogContent class="h-[750px] w-[500px]">
          <DialogHeader>
            <DialogTitle>주차별 논문지도 계획 추가</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <section class="space-y-4">
              <section class="flex gap-4">
                <div class="flex w-full flex-col gap-2">
                  <Label required>주차</Label>
                  <Input type="number" />
                </div>
                <div class="flex w-full flex-col gap-2">
                  <Label required>계획일</Label>
                  <Input type="date" />
                </div>
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>담당교수 선택</Label>
                <div class="space-y-2.5">
                  <div class="flex items-center gap-2">
                    <Checkbox id="advisor-kim" class="peer" />
                    <Label
                      for="advisor-kim"
                      class="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700"
                    >
                      김교수 (주지도교수)
                    </Label>
                  </div>
                  <div class="flex items-center gap-2">
                    <Checkbox id="advisor-hong" class="peer" />
                    <Label
                      for="advisor-hong"
                      class="peer-data-[state=checked]:text-primary cursor-pointer text-sm font-medium text-gray-700"
                    >
                      홍교수 (부지도교수)
                    </Label>
                  </div>
                </div>
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>지도 주제</Label>
                <Input type="text" placeholder="예: 연구방법론 개요" />
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>계획 내용</Label>
                <Textarea class="h-24" placeholder="지도할 내용을 상세히 입력하세요" />
              </section>
              <section class="flex w-full flex-col gap-2">
                <Label required>지도 방식</Label>
                <Select>
                  <SelectTrigger placeholder="선택하세요" />
                  <SelectContent>
                    <SelectItem value="대면">대면</SelectItem>
                    <SelectItem value="온라인">온라인</SelectItem>
                    <SelectItem value="Zoom">Zoom</SelectItem>
                    <SelectItem value="이메일">이메일</SelectItem>
                    <SelectItem value="전화">전화</SelectItem>
                  </SelectContent>
                </Select>
              </section>
              <div class="flex items-start gap-2 rounded-md bg-blue-50 p-3">
                <span class="text-base">💡</span>
                <p class="text-sm text-gray-700">
                  계획을 저장한 후, 실제 지도를 진행하면 '실적입력' 버튼을 클릭하여 실행
                  내용을 기록하세요.
                </p>
              </div>
            </section>
          </DialogBody>
          <DialogFooter>
            <DialogCancelButton class="w-full">취소</DialogCancelButton>
            <DialogConfirmButton class="w-full">저장</DialogConfirmButton>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,..._.parameters?.docs?.source}}};const ze=["Default","WithVModel","WithOverlayKit","WithLoading","WithLongContent","WithHorizontalScroll","DismissModes","NestedDialogWithConfirm","ThesisGuidancePlanForm"];export{v as Default,k as DismissModes,S as NestedDialogWithConfirm,_ as ThesisGuidancePlanForm,O as WithHorizontalScroll,h as WithLoading,T as WithLongContent,x as WithOverlayKit,b as WithVModel,ze as __namedExportsOrder,Ke as default};
