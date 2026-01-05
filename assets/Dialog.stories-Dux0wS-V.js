import{d as S,C as R,f as F,o as I,w as a,i as L,m as q,u as t,b as E,e as V,g as l,s as w,a as N,r as y,j,k as K}from"./iframe-wQXNwKp8.js";import{i as W,_ as i,a as r,b as s,d as g,e as d,f as c,h as u,g as p,j as m,c as _}from"./DialogConfirmButton-DcNtnpr_.js";import{r as M,u as z}from"./index-BL19ASYD.js";import{u as A,P as Z}from"./Primitive-CdtU2Bb9.js";import{u as G}from"./useId-Dq6X0MGr.js";import{b as U,_ as f}from"./Button-CaHC-mbm.js";import{_ as J}from"./Label-CJEPNheA.js";import{_ as Q}from"./Input-CcsZX0AL.js";import{_ as X}from"./Textarea-PZop4IGH.js";import{_ as Y}from"./Checkbox-BLBWXaNy.js";import{_ as ee,a as oe,b as ne,c as ae}from"./SelectItem-DEGU0jA0.js";import{_ as te}from"./DialogOverlayKit-Dw_8Ps6B.js";import"./preload-helper-PPVm8Dsz.js";import"./useForwardPropsEmits-DsQBQ9GW.js";import"./context-AiQZTzFq.js";import"./useDirection-CfVJfeiS.js";import"./getActiveElement-FUKBWQwh.js";import"./Presence-CytVwZDL.js";import"./Teleport-DZ60BjQT.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ScrollArea-Dju_3LPq.js";import"./index-BcX7pRxP.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-DpYVeQGg.js";import"./RovingFocusItem-Mshfp1XU.js";import"./Collection-moN3PTrv.js";import"./usePrimitiveElement-Dgn9uO-o.js";import"./VisuallyHiddenInput-B__Vbp0x.js";import"./VisuallyHidden-tmaojDRM.js";import"./check-Btsl8iYY.js";import"./PopperContent-CyBQgRmH.js";import"./ScrollAreaAutoSize-Dk-HLgfe.js";import"./useFocusGuards-CJIdPsGS.js";var le=S({__name:"DialogTrigger",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"}},setup(o){const n=o,e=W(),{forwardRef:D,currentElement:O}=A();return e.contentId||=G(void 0,"reka-dialog-content"),R(()=>{e.triggerElement.value=O.value}),(C,$)=>(I(),F(t(Z),q(n,{ref:t(D),type:C.as==="button"?"button":void 0,"aria-haspopup":"dialog","aria-expanded":t(e).open.value||!1,"aria-controls":t(e).open.value?t(e).contentId:void 0,"data-state":t(e).open.value?"open":"closed",onClick:t(e).onOpenToggle}),{default:a(()=>[L(C.$slots,"default")]),_:3},16,["type","aria-expanded","aria-controls","data-state","onClick"]))}}),ie=le;const H=S({__name:"DialogTrigger",props:{class:{},asChild:{type:Boolean},as:{},variant:{default:"filled"},color:{default:"primary"},size:{default:"md"}},setup(o){const n=o,e=M(n,"variant","color","size"),D=z(e),O=E(()=>V(U({variant:n.variant,color:n.color,size:n.size}),n.class));return(C,$)=>(I(),F(t(ie),q(t(D),{class:O.value}),{default:a(()=>[L(C.$slots,"default")]),_:3},16,["class"]))}});H.__docgenInfo={exportName:"default",displayName:"DialogTrigger",type:1,props:[{name:"size",global:!1,description:"",tags:[],required:!1,type:'"sm" | "md" | "lg" | "xs" | "icon-md" | "icon-sm"',declarations:[],schema:{kind:"enum",type:'"sm" | "md" | "lg" | "xs" | "icon-md" | "icon-sm"',schema:['"sm"','"md"','"lg"','"xs"','"icon-md"','"icon-sm"']},default:'"md"'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"text" | "filled" | "outlined"',declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']},default:'"filled"'},{name:"color",global:!1,description:"",tags:[],required:!1,type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"deepblue"']},default:'"primary"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"asChild",global:!1,description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",global:!1,description:"The element or component this component should render as. Can be overwritten by `asChild`.",tags:[{name:"defaultValue",text:'"div"'}],required:!1,type:"AsTag | Component",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"sm" | "md" | "lg" | "xs" | "icon-md" | "icon-sm"',description:"",declarations:[],schema:{kind:"enum",type:'"sm" | "md" | "lg" | "xs" | "icon-md" | "icon-sm"',schema:['"sm"','"md"','"lg"','"xs"','"icon-md"','"icon-sm"']}},{name:"variant",type:'"text" | "filled" | "outlined"',description:"",declarations:[],schema:{kind:"enum",type:'"text" | "filled" | "outlined"',schema:['"text"','"filled"','"outlined"']}},{name:"color",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "primary" | "secondary" | "danger" | "warning" | "deepblue"',schema:['"success"','"primary"','"secondary"','"danger"','"warning"','"deepblue"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"asChild",type:"boolean",description:`Change the default rendered element for the one passed as a child, merging their props and behavior.

Read our [Composition](https://www.reka-ui.com/docs/guides/composition) guide for more details.`,declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"as",type:"AsTag | Component",description:"The element or component this component should render as. Can be overwritten by `asChild`.",declarations:[],schema:{kind:"enum",type:"AsTag | Component",schema:['"svg"','"input"',{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Data; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"},'"template"','"a"','"button"','"div"','"form"','"h2"','"h3"','"img"','"label"','"li"','"nav"','"ol"','"p"','"span"','"ul"',{kind:"object",type:"{} & string"}]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/DialogTrigger.vue"};const P=S({__name:"DialogOverlayKitExample",props:{overlayControl:{}},setup(o){return(n,e)=>(I(),F(te,{"overlay-control":o.overlayControl},{default:a(()=>[l(i,null,{default:a(()=>[l(r,null,{default:a(()=>[l(s,null,{default:a(()=>[...e[0]||(e[0]=[w("기본 다이얼로그",-1)])]),_:1})]),_:1}),l(g,null,{default:a(()=>[...e[1]||(e[1]=[N("p",{class:"text-gray-700"}," 다이얼로그 내용이 여기에 표시됩니다. 이 영역은 스크롤 가능합니다. ",-1)])]),_:1}),l(d,null,{default:a(()=>[l(c,null,{default:a(()=>[...e[2]||(e[2]=[w("취소",-1)])]),_:1}),l(u,null,{default:a(()=>[l(p,null,{default:a(()=>[...e[3]||(e[3]=[w("확인",-1)])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["overlay-control"]))}});P.__docgenInfo={exportName:"default",displayName:"DialogOverlayKitExample",type:1,props:[{name:"overlayControl",global:!1,description:"",tags:[],required:!0,type:"OverlayControllerProps",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"overlayControl",type:"OverlayControllerProps",description:"",declarations:[],schema:{kind:"array",type:"OverlayControllerProps"}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/dialog/stories/DialogOverlayKitExample.vue"};const je={title:"Shared/UI/Dialog",component:m,parameters:{layout:"centered",docs:{description:{component:`
### 다이얼로그 컴포넌트

Dialog 컴포넌트는 사용자에게 중요한 정보를 표시하거나 확인을 받기 위한 모달 다이얼로그입니다.
Reka UI의 Dialog를 기반으로 하며, Vue 3 Composition API와 함께 사용할 수 있도록 설계되었습니다.

## 주요 기능

- **헤더/바디/푸터 구조**: \`DialogHeader\`, \`DialogBody\`, \`DialogFooter\`를 통한 구조화된 레이아웃
- **로딩 상태**: \`loading\` prop을 통한 로딩 상태 관리
- **닫기 모드**: \`dismissMode\` prop을 통한 닫기 동작 제어 (none/dismiss)
- **확인/취소 버튼**: \`DialogConfirmButton\`, \`DialogCancelButton\`을 통한 편리한 버튼 제공
- **스크롤 가능한 바디**: \`DialogBody\`는 자동으로 스크롤 영역을 제공

## 사용 예시

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
        <DialogClose>
          <DialogConfirmButton>확인</DialogConfirmButton>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false);
const loading = ref(false);
<\/script>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{loading:{control:"boolean",description:"Dialog의 로딩 상태",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},dismissMode:{control:"select",options:["none","dismiss"],description:"Dialog의 닫기 동작 모드",table:{type:{summary:"'none' | 'dismiss'"},defaultValue:{summary:"'none'"}}}}},b={render:o=>({components:{Dialog:m,DialogTrigger:H,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogDescription:_,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:u},setup(){return{args:o}},template:`
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
    `})},h={render:()=>({components:{Dialog:m,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:u,Button:f},setup(){return{isOpen:y(!1)}},template:`
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},B={render:()=>({components:{Button:f},setup(){return{handleOpen:()=>{j.open(n=>K(P,{overlayControl:n}))}}},template:`
      <Button @click="handleOpen">다이얼로그 열기</Button>
    `})},v={render:()=>({components:{Dialog:m,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogDescription:_,DialogCancelButton:c,DialogConfirmButton:p,Button:f},setup(){const o=y(!1),n=y(!1);return{isOpen:o,loading:n,handleConfirm:async()=>{n.value=!0,await new Promise(D=>setTimeout(D,2e3)),n.value=!1,o.value=!1}}},template:`
      <div>
        <Button @click="isOpen = true">로딩 다이얼로그 열기</Button>
        <Dialog v-model:open="isOpen" :loading="loading" dismiss-mode="dismiss">
          <DialogContent>
            <DialogHeader>
              <DialogTitle>로딩 상태 다이얼로그</DialogTitle>
              <DialogDescription>로딩 중일 때는 다이얼로그를 닫을 수 없습니다.</DialogDescription>
            </DialogHeader>
            <DialogBody>
              <p class="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              <p v-if="loading" class="text-gray-700">로딩 중입니다...</p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton @click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},x={parameters:{docs:{description:{story:`
스크롤이 생기게 하려면 **DialogContent에 height을 반드시 설정**해야 합니다.
Content에 높이가 설정되지 않으면 내용이 길어져도 스크롤이 생기지 않습니다.

이 예시에서는 \`class="h-[500px]"\`를 사용하여 Content의 높이를 500px로 제한하고 있습니다.
        `}}},render:()=>({components:{Dialog:m,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogDescription:_,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:u,Button:f},setup(){return{isOpen:y(!1)}},template:`
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},k={parameters:{docs:{description:{story:`
가로 스크롤이 생기게 하려면 **DialogContent에 width을 제한**하고, **Body 내부에 가로로 넓은 콘텐츠**가 있어야 합니다.

이 예시에서는 \`class="w-[400px]"\`를 사용하여 Content의 너비를 400px로 제한하고, 넓은 테이블을 포함하여 가로 스크롤이 발생하도록 했습니다.
        `}}},render:()=>({components:{Dialog:m,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogDescription:_,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:u,Button:f},setup(){return{isOpen:y(!1)}},template:`
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    `})},T={render:()=>({components:{Dialog:m,DialogTrigger:H,DialogContent:i,DialogHeader:r,DialogBody:g,DialogFooter:d,DialogTitle:s,DialogCancelButton:c,DialogConfirmButton:p,DialogClose:u,Label:J,Input:Q,Textarea:X,Checkbox:Y,Select:ae,SelectTrigger:ne,SelectContent:oe,SelectItem:ee},template:`
      <Dialog>
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
            <DialogClose>
              <DialogConfirmButton class="w-full">저장</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    `})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
      DialogConfirmButton,
      DialogClose
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
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...h.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      const handleConfirm = async () => {
        loading.value = true;
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
        isOpen.value = false;
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
              <p class="text-gray-700">
                로딩 상태가 활성화되면 배경 클릭이나 ESC 키로 다이얼로그를 닫을 수 없습니다.
              </p>
              <p v-if="loading" class="text-gray-700">로딩 중입니다...</p>
            </DialogBody>
            <DialogFooter>
              <DialogCancelButton>취소</DialogCancelButton>
              <DialogConfirmButton @click="handleConfirm">
                확인
              </DialogConfirmButton>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
              <DialogClose>
                <DialogConfirmButton>확인</DialogConfirmButton>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
      <Dialog>
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
            <DialogClose>
              <DialogConfirmButton class="w-full">저장</DialogConfirmButton>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    \`
  })
}`,...T.parameters?.docs?.source}}};const Ke=["Default","WithVModel","WithOverlayKit","WithLoading","WithLongContent","WithHorizontalScroll","ThesisGuidancePlanForm"];export{b as Default,T as ThesisGuidancePlanForm,k as WithHorizontalScroll,v as WithLoading,x as WithLongContent,B as WithOverlayKit,h as WithVModel,Ke as __namedExportsOrder,je as default};
