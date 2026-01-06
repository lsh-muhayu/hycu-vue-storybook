import{d as I,r as V,b as h,e as q,f as O,o as T,w as i,g as d,n as j,h as L,c as H,i as u,a as M,t as F,m as U,u as K,j as z,k as e}from"./iframe-tjKdkbKh.js";import{u as G}from"./useForwardPropsEmits-DY34lRGB.js";import{_ as J}from"./DialogOverlayKit-CADaThHn.js";import{_ as Q,a as X,b as Y,c as Z,d as ee,e as te,f as ne,g as se}from"./DialogConfirmButton-D8NcQJeY.js";import{r as oe}from"./index-B_8CmmIl.js";import{_ as l}from"./Button-BkTKVJse.js";import"./preload-helper-PPVm8Dsz.js";import"./context-CBPkq1qv.js";import"./useDirection-Bxi-6rvh.js";import"./Primitive-CNkU7qnc.js";import"./getActiveElement-FUKBWQwh.js";import"./Presence-CC0mzDFP.js";import"./useId-DhxLyomN.js";import"./Teleport-DXIJqpd6.js";import"./handleAndDispatchCustomEvent-ChOKVcqp.js";import"./ScrollArea-Ci-4EXwp.js";const le={key:0,class:"flex items-center gap-2"},ae={info:"ℹ️",success:"✅",warning:"⚠️",danger:"🚨",error:"❌"},re={info:"text-blue-600",success:"text-green-600",warning:"text-yellow-600",danger:"text-red-600",error:"text-red-600"},ce={primary:"primary",info:"deepblue",success:"success",warning:"warning",danger:"danger",error:"danger"},$=I({__name:"AlertDialog",props:{theme:{},class:{default:""},overlayControl:{},onClose:{},onConfirm:{},onCancel:{}},emits:["update:open"],setup(o,{emit:s}){const t=o,m=s,p=V(!1),g=oe(t,"class","theme","onClose","onConfirm","onCancel"),y=G(g,m),a=h(()=>t.theme?ae[t.theme]??null:null),r=h(()=>t.theme?re[t.theme]??"":""),P=h(()=>t.theme?ce[t.theme]:void 0),W=c=>{c||t.onClose?.()},N=async()=>{if(t.onConfirm){p.value=!0;try{await t.onConfirm(t.overlayControl)}finally{p.value=!1}}else t.overlayControl.close()},E=async()=>{await t.onCancel?.(t.overlayControl)},R=h(()=>q("w-fit max-w-[630px]",t.class));return(c,ie)=>(T(),O(J,U(K(y),{loading:p.value,"onUpdate:open":W}),{default:i(()=>[d(Q,{"is-close-button":!1,class:j(R.value)},{default:i(()=>[d(X,null,{default:i(()=>[d(Y,{class:j(r.value)},{default:i(()=>[a.value?(T(),H("span",le,[M("span",null,F(a.value),1),u(c.$slots,"title")])):u(c.$slots,"title",{key:1})]),_:3},8,["class"]),c.$slots.description?(T(),O(Z,{key:0},{default:i(()=>[u(c.$slots,"description")]),_:3})):L("",!0)]),_:3}),d(ee,{class:"whitespace-pre-line"},{default:i(()=>[u(c.$slots,"body")]),_:3}),d(te,null,{default:i(()=>[d(ne,{onClick:E},{default:i(()=>[u(c.$slots,"cancel")]),_:3}),d(se,{color:P.value,onClick:N},{default:i(()=>[u(c.$slots,"confirm")]),_:3},8,["color"])]),_:3})]),_:3},8,["class"])]),_:3},16,["loading"]))}});$.__docgenInfo={exportName:"default",displayName:"AlertDialog",type:1,props:[{name:"class",global:!0,description:"DialogContent에 적용할 커스텀 클래스",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"theme",global:!1,description:"Alert 테마 (타이틀 아이콘 및 색상 자동 적용)",tags:[],required:!1,type:"AlertDialogTheme",declarations:[],schema:{kind:"enum",type:"AlertDialogTheme",schema:['"error"','"success"','"primary"','"danger"','"warning"','"info"']}}],events:[],slots:[{name:"title",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"description",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"body",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"cancel",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}},{name:"confirm",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & { title?: (props: {}) => any; } & { title?: (props: {}) => any; } & { description?: (props: {}) => any; } & { body?: (props: {}) => any; } & { ...; } & { ...; }",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & { title?: (props: {}) => any; } & { title?: (props: {}) => any; } & { description?: (props: {}) => any; } & { body?: (props: {}) => any; } & { ...; } & { ...; }"}},{name:"class",type:"string",description:"DialogContent에 적용할 커스텀 클래스",declarations:[],schema:"string"},{name:"theme",type:"AlertDialogTheme",description:"Alert 테마 (타이틀 아이콘 및 색상 자동 적용)",declarations:[],schema:{kind:"enum",type:"AlertDialogTheme",schema:['"error"','"success"','"primary"','"danger"','"warning"','"info"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/alert-dialog/AlertDialog.vue"};const n=(o,s)=>{const{title:t,description:m,body:p,cancel:g,confirm:y}=o,{theme:a,class:r,onClose:P,onConfirm:W,onCancel:N,...E}=s??{};z.open(R=>e($,{...E,theme:a,class:r,onClose:P,onConfirm:W,onCancel:N,overlayControl:R},{...t&&{title:()=>t},...m&&{description:()=>m},...p&&{body:()=>p},...g&&{cancel:()=>g},...y&&{confirm:()=>y}}))};n.__docgenInfo={exportName:"openAlertDialog",displayName:"openAlertDialog",type:2,props:[{name:"title",global:!1,description:"제목",tags:[],required:!1,type:"SlotContent",declarations:[],schema:{kind:"enum",type:"SlotContent",schema:["string","VNode<RendererNode, RendererElement, { [key: string]: any; }>",{kind:"array",type:"VNode<RendererNode, RendererElement, { [key: string]: any; }>[]"}]}},{name:"description",global:!1,description:"설명",tags:[],required:!1,type:"SlotContent",declarations:[],schema:{kind:"enum",type:"SlotContent",schema:["string","VNode<RendererNode, RendererElement, { [key: string]: any; }>",{kind:"array",type:"VNode<RendererNode, RendererElement, { [key: string]: any; }>[]"}]}},{name:"body",global:!1,description:"본문",tags:[],required:!1,type:"SlotContent",declarations:[],schema:{kind:"enum",type:"SlotContent",schema:["string","VNode<RendererNode, RendererElement, { [key: string]: any; }>",{kind:"array",type:"VNode<RendererNode, RendererElement, { [key: string]: any; }>[]"}]}},{name:"cancel",global:!1,description:"취소 버튼 텍스트",tags:[],required:!1,type:"SlotContent",declarations:[],schema:{kind:"enum",type:"SlotContent",schema:["string","VNode<RendererNode, RendererElement, { [key: string]: any; }>",{kind:"array",type:"VNode<RendererNode, RendererElement, { [key: string]: any; }>[]"}]}},{name:"confirm",global:!1,description:"확인 버튼 텍스트",tags:[],required:!1,type:"SlotContent",declarations:[],schema:{kind:"enum",type:"SlotContent",schema:["string","VNode<RendererNode, RendererElement, { [key: string]: any; }>",{kind:"array",type:"VNode<RendererNode, RendererElement, { [key: string]: any; }>[]"}]}}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/alert-dialog/openAlertDialog.ts"};const Se={title:"Shared/UI/AlertDialog",component:$,parameters:{layout:"centered",docs:{description:{component:`
### AlertDialog 컴포넌트

AlertDialog는 사용자에게 중요한 정보를 전달하거나 확인이 필요한 작업을 수행할 때 사용하는 다이얼로그 컴포넌트입니다.

## 주요 기능

- **프로그래매틱 호출**: \`openAlertDialog()\` 함수를 통해 컴포넌트 외부에서 호출 가능
- **VNode 지원**: 제목, 설명, 본문, 버튼 텍스트에 문자열 또는 VNode 사용 가능
- **비동기 처리**: \`onConfirm\` 핸들러에서 Promise를 반환하면 자동으로 로딩 상태 표시
- **핸들러 지원**: \`onClose\`, \`onConfirm\`, \`onCancel\` 핸들러 제공
- **오버레이 제어**: \`overlayControl\`을 통해 다이얼로그 닫기 제어 가능

## 사용 예시

\`\`\`typescript
import { openAlertDialog } from '@/shared/ui/alert-dialog';
import { h } from 'vue';

// 기본 사용
openAlertDialog({
  title: '알림',
  description: '작업이 완료되었습니다.',
  cancel: '취소',
  confirm: '확인',
});

// 핸들러와 함께 사용
openAlertDialog(
  {
    title: '삭제 확인',
    description: '정말 삭제하시겠습니까?',
    body: h('p', '이 작업은 되돌릴 수 없습니다.'),
    cancel: '취소',
    confirm: '삭제',
  },
  {
    onConfirm: async (overlayControl) => {
      // 비동기 작업
      await deleteData();
      overlayControl.close();
    },
    onCancel: (overlayControl) => {
      overlayControl.close();
    },
  },
);
\`\`\`
        `}}},tags:["autodocs"]},f={name:"기본",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"알림",description:"이것은 기본 AlertDialog입니다.",cancel:"취소",confirm:"확인"})}}},template:`
      <Button @click="handleClick">기본 AlertDialog 열기</Button>
    `})},x={name:"본문 내용 포함",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"작업 완료",description:"요청하신 작업이 성공적으로 완료되었습니다.",body:e("div",{class:"space-y-2"},[e("p",{class:"text-gray-700"},"처리된 항목:"),e("ul",{class:"list-disc pl-5 text-sm text-gray-600"},[e("li","파일 업로드 완료"),e("li","데이터 검증 완료"),e("li","저장 완료")])]),cancel:"닫기",confirm:"확인"})}}},template:`
      <Button @click="handleClick">본문 내용이 있는 AlertDialog 열기</Button>
    `})},C={name:"핸들러 포함",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"설정 저장",description:"변경사항을 저장하시겠습니까?",body:e("p",{class:"text-sm text-gray-600"},"저장하지 않으면 변경사항이 손실됩니다."),cancel:"취소",confirm:"저장"},{onClose:()=>{console.log("AlertDialog가 닫혔습니다")},onCancel:s=>{console.log("취소 버튼 클릭됨"),alert("취소되었습니다"),s.close()},onConfirm:s=>{console.log("확인 버튼 클릭됨"),alert("저장되었습니다!"),s.close()}})}}},template:`
      <Button @click="handleClick">핸들러가 있는 AlertDialog 열기</Button>
    `})},k={name:"비동기 처리",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"데이터 전송",description:"서버로 데이터를 전송하시겠습니까?",body:e("div",{class:"text-sm text-gray-600"},[e("p","전송될 데이터: 사용자 정보, 설정 값"),e("p",{class:"mt-2 text-xs text-gray-500"},"※ 확인 버튼을 누르면 로딩 상태를 확인할 수 있습니다.")]),cancel:"취소",confirm:"전송"},{onCancel:s=>{console.log("전송 취소됨"),s.close()},onConfirm:async s=>{console.log("전송 시작..."),await new Promise(t=>setTimeout(t,2e3)),console.log("전송 완료!"),alert("데이터가 성공적으로 전송되었습니다!"),s.close()}})}}},template:`
      <div class="space-y-2">
        <Button @click="handleClick">비동기 처리 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 확인 버튼을 누르면 2초간 로딩 상태가 표시됩니다.</p>
      </div>
    `})},v={name:"경고 스타일",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:e("span",{class:"text-yellow-600 flex items-center gap-2"},[e("span","⚠️"),e("span","경고")]),description:"이 작업은 주의가 필요합니다.",body:e("div",{class:"rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800"},[e("p",{class:"font-semibold"},"주의사항:"),e("ul",{class:"mt-2 list-disc pl-5"},[e("li","이 작업은 실행 후 취소할 수 없습니다"),e("li","관련된 모든 데이터에 영향을 줍니다"),e("li","처리 시간이 다소 걸릴 수 있습니다")])]),cancel:"취소",confirm:"계속 진행"})}}},template:`
      <Button @click="handleClick">경고 AlertDialog 열기</Button>
    `})},b={name:"삭제 확인",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:e("span",{class:"text-red-600 flex items-center gap-2"},[e("span","🗑️"),e("span","삭제 확인")]),description:"이 작업은 되돌릴 수 없습니다.",body:e("div",{class:"space-y-3"},[e("p",{class:"text-gray-700"},"다음 항목이 영구적으로 삭제됩니다:"),e("ul",{class:"list-disc pl-5 text-sm text-gray-600"},[e("li","사용자 프로필 데이터"),e("li","업로드된 모든 파일"),e("li","작성한 게시물 및 댓글"),e("li","활동 기록")]),e("div",{class:"mt-3 rounded-lg bg-red-50 p-3"},[e("p",{class:"text-sm font-semibold text-red-800"},"⚠️ 이 작업은 되돌릴 수 없습니다!")])]),cancel:"취소",confirm:e("span",{class:"font-semibold"},"삭제")},{onCancel:s=>{console.log("삭제 취소됨"),s.close()},onConfirm:async s=>{console.log("삭제 시작..."),await new Promise(t=>setTimeout(t,1500)),console.log("삭제 완료!"),alert("삭제가 완료되었습니다!"),s.close()}})}}},template:`
      <Button @click="handleClick">삭제 확인 AlertDialog 열기</Button>
    `})},B={name:"성공 메시지",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:e("span",{class:"text-green-600 flex items-center gap-2"},[e("span","✅"),e("span","성공")]),description:"작업이 성공적으로 완료되었습니다!",body:e("div",{class:"rounded-lg bg-green-50 p-4"},[e("p",{class:"text-sm text-green-800"},"모든 데이터가 정상적으로 처리되었습니다."),e("p",{class:"mt-2 text-xs text-green-600"},"처리 시간: 2.3초")]),cancel:"닫기",confirm:"확인"})}}},template:`
      <Button @click="handleClick">성공 메시지 AlertDialog 열기</Button>
    `})},D={name:"커스텀 버튼 텍스트",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"로그아웃",description:"정말 로그아웃 하시겠습니까?",body:e("p",{class:"text-sm text-gray-600"},"로그아웃하면 현재 작업 중인 내용이 저장되지 않을 수 있습니다."),cancel:e("span",{class:"text-gray-600"},"아니오, 계속하기"),confirm:e("span",{class:"font-semibold text-red-600"},"예, 로그아웃")})}}},template:`
      <Button @click="handleClick">커스텀 버튼 AlertDialog 열기</Button>
    `})},A={name:"여러 단계",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"첫 번째 단계",description:"첫 번째 확인이 필요합니다.",body:e("p",{class:"text-sm text-gray-600"},"확인 버튼을 누르면 다음 단계로 진행됩니다."),cancel:"취소",confirm:"다음"},{onConfirm:s=>{s.close(),setTimeout(()=>{n({title:"두 번째 단계",description:"두 번째 확인이 필요합니다.",body:e("p",{class:"text-sm text-gray-600"},"확인 버튼을 누르면 작업이 완료됩니다."),cancel:"취소",confirm:"완료"},{onConfirm:t=>{alert("모든 단계가 완료되었습니다!"),t.close()}})},300)}})}}},template:`
      <div class="space-y-2">
        <Button @click="handleClick">여러 단계 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 확인 버튼을 누르면 다음 AlertDialog가 열립니다.</p>
      </div>
    `})},S={name:"긴 내용 (스크롤)",render:()=>({components:{Button:l},setup(){return{handleClick:()=>{n({title:"서비스 이용약관",description:"아래 약관을 확인하시고 동의해주세요.",body:e("div",{class:"space-y-4 text-sm text-gray-700"},[e("section",{},[e("h4",{class:"font-semibold text-gray-900"},"제1조 (목적)"),e("p",{class:"mt-2"},"이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.")]),e("section",{class:"mt-4"},[e("h4",{class:"font-semibold text-gray-900"},"제2조 (정의)"),e("p",{class:"mt-2"},'1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.'),e("p",{class:"mt-1"},'2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.'),e("p",{class:"mt-1"},'3. "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.')]),e("section",{class:"mt-4"},[e("h4",{class:"font-semibold text-gray-900"},"제3조 (약관의 게시와 개정)"),e("p",{class:"mt-2"},"1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다."),e("p",{class:"mt-1"},"2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다."),e("p",{class:"mt-1"},"3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다.")]),e("section",{class:"mt-4"},[e("h4",{class:"font-semibold text-gray-900"},"제4조 (서비스의 제공 및 변경)"),e("p",{class:"mt-2"},"1. 회사는 다음과 같은 서비스를 제공합니다:"),e("ul",{class:"mt-2 list-disc pl-5"},[e("li","정보 제공 서비스"),e("li","커뮤니티 서비스"),e("li","전자상거래 서비스"),e("li","기타 회사가 정하는 서비스")]),e("p",{class:"mt-2"},"2. 회사는 서비스의 내용을 변경할 경우에는 변경사유 및 내용을 명시하여 현행 서비스의 공지사항을 통해 게시합니다.")]),e("section",{class:"mt-4"},[e("h4",{class:"font-semibold text-gray-900"},"제5조 (서비스의 중단)"),e("p",{class:"mt-2"},"1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다."),e("p",{class:"mt-1"},"2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사에 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.")]),e("section",{class:"mt-4"},[e("h4",{class:"font-semibold text-gray-900"},"제6조 (회원가입)"),e("p",{class:"mt-2"},"1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다."),e("p",{class:"mt-1"},"2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.")])]),cancel:"취소",confirm:"동의"},{class:"h-[500px]"})}}},template:`
      <div class="space-y-2">
        <Button @click="handleClick">긴 내용 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 본문이 길어서 스크롤이 생깁니다.</p>
      </div>
    `})},w={name:"모든 테마",render:()=>({components:{Button:l},setup(){return{openPrimary:()=>{n({title:"알림",description:"일반적인 알림 메시지입니다.",cancel:"취소",confirm:"확인"},{theme:"primary"})},openInfo:()=>{n({title:"정보",description:"중요한 정보를 알려드립니다.",cancel:"닫기",confirm:"확인"},{theme:"info"})},openSuccess:()=>{n({title:"성공",description:"작업이 성공적으로 완료되었습니다!",cancel:"닫기",confirm:"확인"},{theme:"success"})},openWarning:()=>{n({title:"경고",description:"이 작업은 주의가 필요합니다.",cancel:"취소",confirm:"계속"},{theme:"warning"})},openDanger:()=>{n({title:"위험",description:"이 작업은 되돌릴 수 없습니다!",cancel:"취소",confirm:"삭제"},{theme:"danger"})},openError:()=>{n({title:"오류",description:"작업 중 오류가 발생했습니다.",cancel:"닫기",confirm:"다시 시도"},{theme:"error"})}}},template:`
      <div class="space-y-6 p-4">
        <div>
          <h2 class="mb-3 text-lg font-bold text-gray-800">AlertDialog 테마별 스타일</h2>
          <p class="text-sm text-gray-600">상황에 맞는 다양한 AlertDialog 테마를 확인할 수 있습니다.</p>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">📋 기본 테마</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openPrimary">
                기본
              </Button>
              <Button @click="openInfo" class="flex items-center justify-center gap-2">
                <span>ℹ️</span>
                <span>정보</span>
              </Button>
              <Button @click="openSuccess" class="flex items-center justify-center gap-2">
                <span>✅</span>
                <span>성공</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">⚠️ 주의 테마</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openWarning" class="flex items-center justify-center gap-2">
                <span>⚠️</span>
                <span>경고</span>
              </Button>
              <Button @click="openDanger" class="flex items-center justify-center gap-2">
                <span>🚨</span>
                <span>위험</span>
              </Button>
              <Button @click="openError" class="flex items-center justify-center gap-2">
                <span>❌</span>
                <span>에러</span>
              </Button>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-800">💡 사용 가이드</p>
          <ul class="list-disc pl-5 text-xs text-gray-700 space-y-1">
            <li><strong>Primary:</strong> 일반적인 알림이나 확인이 필요할 때 (아이콘 없음)</li>
            <li><strong>Info:</strong> 사용자에게 정보를 전달할 때</li>
            <li><strong>Success:</strong> 작업이 성공적으로 완료되었을 때</li>
            <li><strong>Warning:</strong> 주의가 필요한 작업을 진행할 때</li>
            <li><strong>Danger:</strong> 되돌릴 수 없는 위험한 작업을 진행할 때</li>
            <li><strong>Error:</strong> 오류가 발생했을 때</li>
          </ul>
        </div>
      </div>
    `})},_={name:"모든 예시",render:()=>({components:{Button:l},setup(){return{openBasic:()=>{n({title:"알림",description:"이것은 기본 AlertDialog입니다.",cancel:"취소",confirm:"확인"})},openWithBody:()=>{n({title:"작업 완료",description:"요청하신 작업이 성공적으로 완료되었습니다.",body:e("div",{class:"space-y-2"},[e("p",{class:"text-gray-700"},"처리된 항목:"),e("ul",{class:"list-disc pl-5 text-sm text-gray-600"},[e("li","파일 업로드 완료"),e("li","데이터 검증 완료"),e("li","저장 완료")])]),cancel:"닫기",confirm:"확인"},{class:"h-[500px]"})},openWithAsync:()=>{n({title:"데이터 전송",description:"서버로 데이터를 전송하시겠습니까?",cancel:"취소",confirm:"전송"},{onConfirm:async a=>{await new Promise(r=>setTimeout(r,2e3)),alert("전송 완료!"),a.close()}})},openWarning:()=>{n({title:e("span",{class:"text-yellow-600 flex items-center gap-2"},[e("span","⚠️"),e("span","경고")]),description:"이 작업은 주의가 필요합니다.",cancel:"취소",confirm:"계속 진행"})},openDelete:()=>{n({title:e("span",{class:"text-red-600 flex items-center gap-2"},[e("span","🗑️"),e("span","삭제 확인")]),description:"이 작업은 되돌릴 수 없습니다.",cancel:"취소",confirm:"삭제"},{onConfirm:async a=>{await new Promise(r=>setTimeout(r,1500)),alert("삭제 완료!"),a.close()}})},openSuccess:()=>{n({title:e("span",{class:"text-green-600 flex items-center gap-2"},[e("span","✅"),e("span","성공")]),description:"작업이 성공적으로 완료되었습니다!",cancel:"닫기",confirm:"확인"})},openLongContent:()=>{n({title:"긴 내용",description:"본문이 길어서 스크롤이 생깁니다.",body:e("div",{class:"space-y-2"},[...Array.from({length:20},(a,r)=>e("p",{class:"text-sm text-gray-700"},`${r+1}. 긴 내용의 예시입니다. 스크롤을 확인하세요.`))]),cancel:"취소",confirm:"확인"},{class:"h-[500px]"})}}},template:`
      <div class="space-y-6 p-4">
        <div>
          <h2 class="mb-3 text-lg font-bold text-gray-800">AlertDialog 모든 예시</h2>
          <p class="text-sm text-gray-600">다양한 AlertDialog 사용 예시를 확인할 수 있습니다.</p>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">기본 사용법</h3>
            <div class="grid grid-cols-2 gap-2">
              <Button @click="openBasic">기본</Button>
              <Button @click="openWithBody">본문 포함</Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">비동기 처리</h3>
            <Button @click="openWithAsync" class="w-full">비동기 작업</Button>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">다양한 스타일</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openSuccess">✅ 성공</Button>
              <Button @click="openWarning">⚠️ 경고</Button>
              <Button @click="openDelete">🗑️ 삭제</Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">기타</h3>
            <Button @click="openLongContent" class="w-full">📜 긴 내용 (스크롤)</Button>
          </div>
        </div>

        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p class="text-xs text-blue-800">
            <strong>💡 참고:</strong> AlertDialog는 openAlertDialog() 함수를 통해 프로그래매틱하게 열 수 있으며,
            비동기 처리 시 자동으로 로딩 상태를 표시합니다.
          </p>
        </div>
      </div>
    `})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '기본',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '알림',
          description: '이것은 기본 AlertDialog입니다.',
          cancel: '취소',
          confirm: '확인'
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">기본 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '본문 내용 포함',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '작업 완료',
          description: '요청하신 작업이 성공적으로 완료되었습니다.',
          body: h('div', {
            class: 'space-y-2'
          }, [h('p', {
            class: 'text-gray-700'
          }, '처리된 항목:'), h('ul', {
            class: 'list-disc pl-5 text-sm text-gray-600'
          }, [h('li', '파일 업로드 완료'), h('li', '데이터 검증 완료'), h('li', '저장 완료')])]),
          cancel: '닫기',
          confirm: '확인'
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">본문 내용이 있는 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '핸들러 포함',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '설정 저장',
          description: '변경사항을 저장하시겠습니까?',
          body: h('p', {
            class: 'text-sm text-gray-600'
          }, '저장하지 않으면 변경사항이 손실됩니다.'),
          cancel: '취소',
          confirm: '저장'
        }, {
          onClose: () => {
            console.log('AlertDialog가 닫혔습니다');
          },
          onCancel: (overlayControl: OverlayControllerProps) => {
            console.log('취소 버튼 클릭됨');
            alert('취소되었습니다');
            overlayControl.close();
          },
          onConfirm: (overlayControl: OverlayControllerProps) => {
            console.log('확인 버튼 클릭됨');
            alert('저장되었습니다!');
            overlayControl.close();
          }
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">핸들러가 있는 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '비동기 처리',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '데이터 전송',
          description: '서버로 데이터를 전송하시겠습니까?',
          body: h('div', {
            class: 'text-sm text-gray-600'
          }, [h('p', '전송될 데이터: 사용자 정보, 설정 값'), h('p', {
            class: 'mt-2 text-xs text-gray-500'
          }, '※ 확인 버튼을 누르면 로딩 상태를 확인할 수 있습니다.')]),
          cancel: '취소',
          confirm: '전송'
        }, {
          onCancel: (overlayControl: OverlayControllerProps) => {
            console.log('전송 취소됨');
            overlayControl.close();
          },
          onConfirm: async (overlayControl: OverlayControllerProps) => {
            console.log('전송 시작...');
            // 비동기 작업 시뮬레이션 (2초)
            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log('전송 완료!');
            alert('데이터가 성공적으로 전송되었습니다!');
            overlayControl.close();
          }
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <div class="space-y-2">
        <Button @click="handleClick">비동기 처리 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 확인 버튼을 누르면 2초간 로딩 상태가 표시됩니다.</p>
      </div>
    \`
  })
} as unknown as Story`,...k.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '경고 스타일',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-yellow-600 flex items-center gap-2'
          }, [h('span', '⚠️'), h('span', '경고')]),
          description: '이 작업은 주의가 필요합니다.',
          body: h('div', {
            class: 'rounded-lg bg-yellow-50 p-3 text-sm text-yellow-800'
          }, [h('p', {
            class: 'font-semibold'
          }, '주의사항:'), h('ul', {
            class: 'mt-2 list-disc pl-5'
          }, [h('li', '이 작업은 실행 후 취소할 수 없습니다'), h('li', '관련된 모든 데이터에 영향을 줍니다'), h('li', '처리 시간이 다소 걸릴 수 있습니다')])]),
          cancel: '취소',
          confirm: '계속 진행'
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">경고 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '삭제 확인',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-red-600 flex items-center gap-2'
          }, [h('span', '🗑️'), h('span', '삭제 확인')]),
          description: '이 작업은 되돌릴 수 없습니다.',
          body: h('div', {
            class: 'space-y-3'
          }, [h('p', {
            class: 'text-gray-700'
          }, '다음 항목이 영구적으로 삭제됩니다:'), h('ul', {
            class: 'list-disc pl-5 text-sm text-gray-600'
          }, [h('li', '사용자 프로필 데이터'), h('li', '업로드된 모든 파일'), h('li', '작성한 게시물 및 댓글'), h('li', '활동 기록')]), h('div', {
            class: 'mt-3 rounded-lg bg-red-50 p-3'
          }, [h('p', {
            class: 'text-sm font-semibold text-red-800'
          }, '⚠️ 이 작업은 되돌릴 수 없습니다!')])]),
          cancel: '취소',
          confirm: h('span', {
            class: 'font-semibold'
          }, '삭제')
        }, {
          onCancel: (overlayControl: OverlayControllerProps) => {
            console.log('삭제 취소됨');
            overlayControl.close();
          },
          onConfirm: async (overlayControl: OverlayControllerProps) => {
            console.log('삭제 시작...');
            // 삭제 작업 시뮬레이션 (1.5초)
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log('삭제 완료!');
            alert('삭제가 완료되었습니다!');
            overlayControl.close();
          }
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">삭제 확인 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '성공 메시지',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-green-600 flex items-center gap-2'
          }, [h('span', '✅'), h('span', '성공')]),
          description: '작업이 성공적으로 완료되었습니다!',
          body: h('div', {
            class: 'rounded-lg bg-green-50 p-4'
          }, [h('p', {
            class: 'text-sm text-green-800'
          }, '모든 데이터가 정상적으로 처리되었습니다.'), h('p', {
            class: 'mt-2 text-xs text-green-600'
          }, '처리 시간: 2.3초')]),
          cancel: '닫기',
          confirm: '확인'
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">성공 메시지 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...B.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '커스텀 버튼 텍스트',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '로그아웃',
          description: '정말 로그아웃 하시겠습니까?',
          body: h('p', {
            class: 'text-sm text-gray-600'
          }, '로그아웃하면 현재 작업 중인 내용이 저장되지 않을 수 있습니다.'),
          cancel: h('span', {
            class: 'text-gray-600'
          }, '아니오, 계속하기'),
          confirm: h('span', {
            class: 'font-semibold text-red-600'
          }, '예, 로그아웃')
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <Button @click="handleClick">커스텀 버튼 AlertDialog 열기</Button>
    \`
  })
} as unknown as Story`,...D.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '여러 단계',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '첫 번째 단계',
          description: '첫 번째 확인이 필요합니다.',
          body: h('p', {
            class: 'text-sm text-gray-600'
          }, '확인 버튼을 누르면 다음 단계로 진행됩니다.'),
          cancel: '취소',
          confirm: '다음'
        }, {
          onConfirm: (overlayControl: OverlayControllerProps) => {
            overlayControl.close();

            // 두 번째 AlertDialog 열기
            setTimeout(() => {
              openAlertDialog({
                title: '두 번째 단계',
                description: '두 번째 확인이 필요합니다.',
                body: h('p', {
                  class: 'text-sm text-gray-600'
                }, '확인 버튼을 누르면 작업이 완료됩니다.'),
                cancel: '취소',
                confirm: '완료'
              }, {
                onConfirm: (overlayControl: OverlayControllerProps) => {
                  alert('모든 단계가 완료되었습니다!');
                  overlayControl.close();
                }
              });
            }, 300);
          }
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <div class="space-y-2">
        <Button @click="handleClick">여러 단계 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 확인 버튼을 누르면 다음 AlertDialog가 열립니다.</p>
      </div>
    \`
  })
} as unknown as Story`,...A.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '긴 내용 (스크롤)',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const handleClick = () => {
        openAlertDialog({
          title: '서비스 이용약관',
          description: '아래 약관을 확인하시고 동의해주세요.',
          body: h('div', {
            class: 'space-y-4 text-sm text-gray-700'
          }, [h('section', {}, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제1조 (목적)'), h('p', {
            class: 'mt-2'
          }, '이 약관은 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.')]), h('section', {
            class: 'mt-4'
          }, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제2조 (정의)'), h('p', {
            class: 'mt-2'
          }, '1. "서비스"란 회사가 제공하는 모든 서비스를 의미합니다.'), h('p', {
            class: 'mt-1'
          }, '2. "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.'), h('p', {
            class: 'mt-1'
          }, '3. "회원"이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.')]), h('section', {
            class: 'mt-4'
          }, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제3조 (약관의 게시와 개정)'), h('p', {
            class: 'mt-2'
          }, '1. 회사는 본 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기 화면에 게시합니다.'), h('p', {
            class: 'mt-1'
          }, '2. 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 개정할 수 있습니다.'), h('p', {
            class: 'mt-1'
          }, '3. 회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 제1항의 방식에 따라 그 개정약관의 적용일자 7일 전부터 적용일자 전일까지 공지합니다.')]), h('section', {
            class: 'mt-4'
          }, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제4조 (서비스의 제공 및 변경)'), h('p', {
            class: 'mt-2'
          }, '1. 회사는 다음과 같은 서비스를 제공합니다:'), h('ul', {
            class: 'mt-2 list-disc pl-5'
          }, [h('li', '정보 제공 서비스'), h('li', '커뮤니티 서비스'), h('li', '전자상거래 서비스'), h('li', '기타 회사가 정하는 서비스')]), h('p', {
            class: 'mt-2'
          }, '2. 회사는 서비스의 내용을 변경할 경우에는 변경사유 및 내용을 명시하여 현행 서비스의 공지사항을 통해 게시합니다.')]), h('section', {
            class: 'mt-4'
          }, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제5조 (서비스의 중단)'), h('p', {
            class: 'mt-2'
          }, '1. 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.'), h('p', {
            class: 'mt-1'
          }, '2. 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사에 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.')]), h('section', {
            class: 'mt-4'
          }, [h('h4', {
            class: 'font-semibold text-gray-900'
          }, '제6조 (회원가입)'), h('p', {
            class: 'mt-2'
          }, '1. 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.'), h('p', {
            class: 'mt-1'
          }, '2. 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.')])]),
          cancel: '취소',
          confirm: '동의'
        }, {
          class: 'h-[500px]'
        });
      };
      return {
        handleClick
      };
    },
    template: /*html*/\`
      <div class="space-y-2">
        <Button @click="handleClick">긴 내용 AlertDialog 열기</Button>
        <p class="text-xs text-gray-500">※ 본문이 길어서 스크롤이 생깁니다.</p>
      </div>
    \`
  })
} as unknown as Story`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '모든 테마',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const openPrimary = () => {
        openAlertDialog({
          title: '알림',
          description: '일반적인 알림 메시지입니다.',
          cancel: '취소',
          confirm: '확인'
        }, {
          theme: 'primary'
        });
      };
      const openInfo = () => {
        openAlertDialog({
          title: '정보',
          description: '중요한 정보를 알려드립니다.',
          cancel: '닫기',
          confirm: '확인'
        }, {
          theme: 'info'
        });
      };
      const openSuccess = () => {
        openAlertDialog({
          title: '성공',
          description: '작업이 성공적으로 완료되었습니다!',
          cancel: '닫기',
          confirm: '확인'
        }, {
          theme: 'success'
        });
      };
      const openWarning = () => {
        openAlertDialog({
          title: '경고',
          description: '이 작업은 주의가 필요합니다.',
          cancel: '취소',
          confirm: '계속'
        }, {
          theme: 'warning'
        });
      };
      const openDanger = () => {
        openAlertDialog({
          title: '위험',
          description: '이 작업은 되돌릴 수 없습니다!',
          cancel: '취소',
          confirm: '삭제'
        }, {
          theme: 'danger'
        });
      };
      const openError = () => {
        openAlertDialog({
          title: '오류',
          description: '작업 중 오류가 발생했습니다.',
          cancel: '닫기',
          confirm: '다시 시도'
        }, {
          theme: 'error'
        });
      };
      return {
        openPrimary,
        openInfo,
        openSuccess,
        openWarning,
        openDanger,
        openError
      };
    },
    template: /*html*/\`
      <div class="space-y-6 p-4">
        <div>
          <h2 class="mb-3 text-lg font-bold text-gray-800">AlertDialog 테마별 스타일</h2>
          <p class="text-sm text-gray-600">상황에 맞는 다양한 AlertDialog 테마를 확인할 수 있습니다.</p>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">📋 기본 테마</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openPrimary">
                기본
              </Button>
              <Button @click="openInfo" class="flex items-center justify-center gap-2">
                <span>ℹ️</span>
                <span>정보</span>
              </Button>
              <Button @click="openSuccess" class="flex items-center justify-center gap-2">
                <span>✅</span>
                <span>성공</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">⚠️ 주의 테마</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openWarning" class="flex items-center justify-center gap-2">
                <span>⚠️</span>
                <span>경고</span>
              </Button>
              <Button @click="openDanger" class="flex items-center justify-center gap-2">
                <span>🚨</span>
                <span>위험</span>
              </Button>
              <Button @click="openError" class="flex items-center justify-center gap-2">
                <span>❌</span>
                <span>에러</span>
              </Button>
            </div>
          </div>
        </div>

        <div class="rounded-lg border border-gray-200 bg-gray-50 p-4 space-y-2">
          <p class="text-xs font-semibold text-gray-800">💡 사용 가이드</p>
          <ul class="list-disc pl-5 text-xs text-gray-700 space-y-1">
            <li><strong>Primary:</strong> 일반적인 알림이나 확인이 필요할 때 (아이콘 없음)</li>
            <li><strong>Info:</strong> 사용자에게 정보를 전달할 때</li>
            <li><strong>Success:</strong> 작업이 성공적으로 완료되었을 때</li>
            <li><strong>Warning:</strong> 주의가 필요한 작업을 진행할 때</li>
            <li><strong>Danger:</strong> 되돌릴 수 없는 위험한 작업을 진행할 때</li>
            <li><strong>Error:</strong> 오류가 발생했을 때</li>
          </ul>
        </div>
      </div>
    \`
  })
} as unknown as Story`,...w.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  name: '모든 예시',
  render: () => ({
    components: {
      Button
    },
    setup() {
      const openBasic = () => {
        openAlertDialog({
          title: '알림',
          description: '이것은 기본 AlertDialog입니다.',
          cancel: '취소',
          confirm: '확인'
        });
      };
      const openWithBody = () => {
        openAlertDialog({
          title: '작업 완료',
          description: '요청하신 작업이 성공적으로 완료되었습니다.',
          body: h('div', {
            class: 'space-y-2'
          }, [h('p', {
            class: 'text-gray-700'
          }, '처리된 항목:'), h('ul', {
            class: 'list-disc pl-5 text-sm text-gray-600'
          }, [h('li', '파일 업로드 완료'), h('li', '데이터 검증 완료'), h('li', '저장 완료')])]),
          cancel: '닫기',
          confirm: '확인'
        }, {
          class: 'h-[500px]'
        });
      };
      const openWithAsync = () => {
        openAlertDialog({
          title: '데이터 전송',
          description: '서버로 데이터를 전송하시겠습니까?',
          cancel: '취소',
          confirm: '전송'
        }, {
          onConfirm: async (overlayControl: OverlayControllerProps) => {
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('전송 완료!');
            overlayControl.close();
          }
        });
      };
      const openWarning = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-yellow-600 flex items-center gap-2'
          }, [h('span', '⚠️'), h('span', '경고')]),
          description: '이 작업은 주의가 필요합니다.',
          cancel: '취소',
          confirm: '계속 진행'
        });
      };
      const openDelete = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-red-600 flex items-center gap-2'
          }, [h('span', '🗑️'), h('span', '삭제 확인')]),
          description: '이 작업은 되돌릴 수 없습니다.',
          cancel: '취소',
          confirm: '삭제'
        }, {
          onConfirm: async (overlayControl: OverlayControllerProps) => {
            await new Promise(resolve => setTimeout(resolve, 1500));
            alert('삭제 완료!');
            overlayControl.close();
          }
        });
      };
      const openSuccess = () => {
        openAlertDialog({
          title: h('span', {
            class: 'text-green-600 flex items-center gap-2'
          }, [h('span', '✅'), h('span', '성공')]),
          description: '작업이 성공적으로 완료되었습니다!',
          cancel: '닫기',
          confirm: '확인'
        });
      };
      const openLongContent = () => {
        openAlertDialog({
          title: '긴 내용',
          description: '본문이 길어서 스크롤이 생깁니다.',
          body: h('div', {
            class: 'space-y-2'
          }, [...Array.from({
            length: 20
          }, (_, i) => h('p', {
            class: 'text-sm text-gray-700'
          }, \`\${i + 1}. 긴 내용의 예시입니다. 스크롤을 확인하세요.\`))]),
          cancel: '취소',
          confirm: '확인'
        }, {
          class: 'h-[500px]'
        });
      };
      return {
        openBasic,
        openWithBody,
        openWithAsync,
        openWarning,
        openDelete,
        openSuccess,
        openLongContent
      };
    },
    template: /*html*/\`
      <div class="space-y-6 p-4">
        <div>
          <h2 class="mb-3 text-lg font-bold text-gray-800">AlertDialog 모든 예시</h2>
          <p class="text-sm text-gray-600">다양한 AlertDialog 사용 예시를 확인할 수 있습니다.</p>
        </div>

        <div class="space-y-4">
          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">기본 사용법</h3>
            <div class="grid grid-cols-2 gap-2">
              <Button @click="openBasic">기본</Button>
              <Button @click="openWithBody">본문 포함</Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">비동기 처리</h3>
            <Button @click="openWithAsync" class="w-full">비동기 작업</Button>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">다양한 스타일</h3>
            <div class="grid grid-cols-3 gap-2">
              <Button @click="openSuccess">✅ 성공</Button>
              <Button @click="openWarning">⚠️ 경고</Button>
              <Button @click="openDelete">🗑️ 삭제</Button>
            </div>
          </div>

          <div>
            <h3 class="mb-2 text-sm font-semibold text-gray-700">기타</h3>
            <Button @click="openLongContent" class="w-full">📜 긴 내용 (스크롤)</Button>
          </div>
        </div>

        <div class="rounded-lg border border-blue-200 bg-blue-50 p-3">
          <p class="text-xs text-blue-800">
            <strong>💡 참고:</strong> AlertDialog는 openAlertDialog() 함수를 통해 프로그래매틱하게 열 수 있으며,
            비동기 처리 시 자동으로 로딩 상태를 표시합니다.
          </p>
        </div>
      </div>
    \`
  })
} as unknown as Story`,..._.parameters?.docs?.source}}};const we=["Default","WithBody","WithHandlers","WithAsyncHandler","WarningStyle","DeleteConfirmation","SuccessMessage","CustomButtonText","MultiStep","WithLongContent","AllThemes","AllExamples"];export{_ as AllExamples,w as AllThemes,D as CustomButtonText,f as Default,b as DeleteConfirmation,A as MultiStep,B as SuccessMessage,v as WarningStyle,k as WithAsyncHandler,x as WithBody,C as WithHandlers,S as WithLongContent,we as __namedExportsOrder,Se as default};
