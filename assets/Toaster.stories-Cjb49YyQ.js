import{_ as h,$ as u}from"./iframe-VtXMINnB.js";import{_ as o}from"./Button-DbvcNLhT.js";import"./preload-helper-PPVm8Dsz.js";const f={title:"Shared/UI/Toaster",component:h,parameters:{layout:"centered",docs:{description:{component:`
### 토스트 알림 컴포넌트

Toaster 컴포넌트는 사용자에게 알림 메시지를 표시하기 위한 컴포넌트입니다.
vue-sonner를 기반으로 하며, 다양한 타입의 토스트(성공, 에러, 경고, 정보)를 지원합니다.

## 주요 기능

- **다양한 타입**: \`success\`, \`error\`, \`warning\`, \`info\` 타입 지원
- **커스텀 아이콘**: 각 타입별로 커스텀 아이콘 사용
- **자동 닫기**: 설정 가능한 자동 닫기 시간
- **위치 조절**: 화면의 다양한 위치에 토스트 표시 가능
- **액션 버튼**: 토스트에 액션 버튼 추가 가능

## 사용 예시

\`\`\`vue
<script setup>
import { toast } from 'vue-sonner';
<\/script>

<template>
  <div>
    <button @click="toast.success('성공 메시지')">성공 토스트</button>
  </div>
</template>
\`\`\`
        `}}},tags:["autodocs"]},e={parameters:{docs:{description:{story:`
이 스토리에서는 다양한 타입의 토스트를 테스트할 수 있습니다.
각 버튼을 클릭하여 해당 타입의 토스트를 확인해보세요.
        `}}},render:()=>({components:{Button:o},setup(){return{showSuccess:()=>{u.success("작업이 성공적으로 완료되었습니다!")},showError:()=>{u.error("오류가 발생했습니다. 다시 시도해주세요.")},showWarning:()=>{u.warning("주의가 필요한 작업입니다.")},showInfo:()=>{u.info("안내 메시지입니다.")},showLoading:()=>{u.loading("처리 중입니다..."),setTimeout(()=>{u.success("처리가 완료되었습니다!")},2e3)},showPromise:()=>{const l=new Promise(D=>{setTimeout(()=>D({data:"성공!"}),2e3)});u.promise(l,{loading:"데이터를 불러오는 중...",success:"데이터를 성공적으로 불러왔습니다!",error:"데이터를 불러오는데 실패했습니다."})},showWithAction:()=>{u.success("파일이 삭제되었습니다.",{action:{label:"실행 취소",onClick:()=>u.info("실행 취소되었습니다.")}})},showLongMessage:()=>{u.success("이것은 매우 긴 메시지입니다. 토스트가 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다.")}}},template:`
      <div class="flex flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">토스트 타입</h3>
          <div class="flex flex-wrap gap-2">
            <Button @click="showSuccess">성공 토스트</Button>
            <Button color="danger" @click="showError">에러 토스트</Button>
            <Button color="warning" @click="showWarning">경고 토스트</Button>
            <Button color="secondary" @click="showInfo">정보 토스트</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">특수 기능</h3>
          <div class="flex flex-wrap gap-2">
            <Button @click="showLoading">로딩 토스트</Button>
            <Button @click="showPromise">Promise 토스트</Button>
            <Button @click="showWithAction">액션 버튼</Button>
            <Button @click="showLongMessage">긴 메시지</Button>
          </div>
        </div>
      </div>
    `})},c={render:()=>({components:{Button:o},setup(){return{showSuccess:()=>u.success("작업이 성공적으로 완료되었습니다!"),showError:()=>u.error("오류가 발생했습니다."),showWarning:()=>u.warning("주의가 필요한 작업입니다."),showInfo:()=>u.info("안내 메시지입니다.")}},template:`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 토스트 타입</h3>
          <p class="text-xs text-gray-500">
            각 버튼을 클릭하여 해당 타입의 토스트를 확인할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showSuccess">성공 토스트</Button>
            <Button color="danger" @click="showError">에러 토스트</Button>
            <Button color="warning" @click="showWarning">경고 토스트</Button>
            <Button color="secondary" @click="showInfo">정보 토스트</Button>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{Button:o},setup(){return{showWithUndo:()=>{u.success("파일이 삭제되었습니다.",{action:{label:"실행 취소",onClick:()=>u.info("실행 취소되었습니다.")}})},showWithRetry:()=>{u.error("네트워크 오류가 발생했습니다.",{action:{label:"다시 시도",onClick:()=>{u.loading("다시 시도 중..."),setTimeout(()=>{u.success("성공적으로 연결되었습니다!")},1500)}}})},showWithMultipleActions:()=>{u.warning("변경사항이 저장되지 않았습니다.",{action:{label:"저장",onClick:()=>u.success("저장되었습니다.")},cancel:{label:"취소",onClick:()=>u.info("취소되었습니다.")}})}}},template:`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">액션 버튼이 있는 토스트</h3>
          <p class="text-xs text-gray-500">
            토스트에 액션 버튼을 추가하여 사용자가 추가 작업을 수행할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showWithUndo">실행 취소 버튼</Button>
            <Button color="danger" @click="showWithRetry">다시 시도 버튼</Button>
            <Button color="warning" @click="showWithMultipleActions">저장/취소 버튼</Button>
          </div>
        </div>
      </div>
    `})},B={render:()=>({components:{Button:o},setup(){return{showSuccessPromise:()=>{const n=new Promise(C=>{setTimeout(()=>C({data:"성공!"}),2e3)});u.promise(n,{loading:"데이터를 불러오는 중...",success:"데이터를 성공적으로 불러왔습니다!",error:"데이터를 불러오는데 실패했습니다."})},showErrorPromise:()=>{const n=new Promise((C,a)=>{setTimeout(()=>a(new Error("오류 발생")),2e3)});u.promise(n,{loading:"작업을 처리하는 중...",success:"작업이 완료되었습니다!",error:"작업 처리 중 오류가 발생했습니다."})}}},template:`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Promise 토스트</h3>
          <p class="text-xs text-gray-500">
            비동기 작업의 상태를 자동으로 표시하는 Promise 토스트입니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showSuccessPromise">성공 Promise</Button>
            <Button color="danger" @click="showErrorPromise">실패 Promise</Button>
          </div>
        </div>
      </div>
    `})},i={render:()=>({components:{Button:o},setup(){return{showShort:()=>{u.success("짧은 시간 동안 표시됩니다.",{duration:1e3})},showLong:()=>{u.info("긴 시간 동안 표시됩니다.",{duration:5e3})},showInfinite:()=>{u.warning("수동으로 닫을 때까지 표시됩니다.",{duration:1/0})}}},template:`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">커스텀 지속 시간</h3>
          <p class="text-xs text-gray-500">
            토스트의 표시 시간을 커스터마이징할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showShort">짧은 시간 (1초)</Button>
            <Button color="secondary" @click="showLong">긴 시간 (5초)</Button>
            <Button color="warning" @click="showInfinite">무한 (수동 닫기)</Button>
          </div>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리에서는 다양한 타입의 토스트를 테스트할 수 있습니다.
각 버튼을 클릭하여 해당 타입의 토스트를 확인해보세요.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showSuccess = () => {
        toast.success('작업이 성공적으로 완료되었습니다!');
      };
      const showError = () => {
        toast.error('오류가 발생했습니다. 다시 시도해주세요.');
      };
      const showWarning = () => {
        toast.warning('주의가 필요한 작업입니다.');
      };
      const showInfo = () => {
        toast.info('안내 메시지입니다.');
      };
      const showLoading = () => {
        toast.loading('처리 중입니다...');
        setTimeout(() => {
          toast.success('처리가 완료되었습니다!');
        }, 2000);
      };
      const showPromise = () => {
        const promise = new Promise(resolve => {
          setTimeout(() => resolve({
            data: '성공!'
          }), 2000);
        });
        toast.promise(promise, {
          loading: '데이터를 불러오는 중...',
          success: '데이터를 성공적으로 불러왔습니다!',
          error: '데이터를 불러오는데 실패했습니다.'
        });
      };
      const showWithAction = () => {
        toast.success('파일이 삭제되었습니다.', {
          action: {
            label: '실행 취소',
            onClick: () => toast.info('실행 취소되었습니다.')
          }
        });
      };
      const showLongMessage = () => {
        toast.success('이것은 매우 긴 메시지입니다. 토스트가 긴 텍스트를 어떻게 처리하는지 확인할 수 있습니다.');
      };
      return {
        showSuccess,
        showError,
        showWarning,
        showInfo,
        showLoading,
        showPromise,
        showWithAction,
        showLongMessage
      };
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">토스트 타입</h3>
          <div class="flex flex-wrap gap-2">
            <Button @click="showSuccess">성공 토스트</Button>
            <Button color="danger" @click="showError">에러 토스트</Button>
            <Button color="warning" @click="showWarning">경고 토스트</Button>
            <Button color="secondary" @click="showInfo">정보 토스트</Button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">특수 기능</h3>
          <div class="flex flex-wrap gap-2">
            <Button @click="showLoading">로딩 토스트</Button>
            <Button @click="showPromise">Promise 토스트</Button>
            <Button @click="showWithAction">액션 버튼</Button>
            <Button @click="showLongMessage">긴 메시지</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...e.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showSuccess = () => toast.success('작업이 성공적으로 완료되었습니다!');
      const showError = () => toast.error('오류가 발생했습니다.');
      const showWarning = () => toast.warning('주의가 필요한 작업입니다.');
      const showInfo = () => toast.info('안내 메시지입니다.');
      return {
        showSuccess,
        showError,
        showWarning,
        showInfo
      };
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">다양한 토스트 타입</h3>
          <p class="text-xs text-gray-500">
            각 버튼을 클릭하여 해당 타입의 토스트를 확인할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showSuccess">성공 토스트</Button>
            <Button color="danger" @click="showError">에러 토스트</Button>
            <Button color="warning" @click="showWarning">경고 토스트</Button>
            <Button color="secondary" @click="showInfo">정보 토스트</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showWithUndo = () => {
        toast.success('파일이 삭제되었습니다.', {
          action: {
            label: '실행 취소',
            onClick: () => toast.info('실행 취소되었습니다.')
          }
        });
      };
      const showWithRetry = () => {
        toast.error('네트워크 오류가 발생했습니다.', {
          action: {
            label: '다시 시도',
            onClick: () => {
              toast.loading('다시 시도 중...');
              setTimeout(() => {
                toast.success('성공적으로 연결되었습니다!');
              }, 1500);
            }
          }
        });
      };
      const showWithMultipleActions = () => {
        toast.warning('변경사항이 저장되지 않았습니다.', {
          action: {
            label: '저장',
            onClick: () => toast.success('저장되었습니다.')
          },
          cancel: {
            label: '취소',
            onClick: () => toast.info('취소되었습니다.')
          }
        });
      };
      return {
        showWithUndo,
        showWithRetry,
        showWithMultipleActions
      };
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">액션 버튼이 있는 토스트</h3>
          <p class="text-xs text-gray-500">
            토스트에 액션 버튼을 추가하여 사용자가 추가 작업을 수행할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showWithUndo">실행 취소 버튼</Button>
            <Button color="danger" @click="showWithRetry">다시 시도 버튼</Button>
            <Button color="warning" @click="showWithMultipleActions">저장/취소 버튼</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showSuccessPromise = () => {
        const promise = new Promise(resolve => {
          setTimeout(() => resolve({
            data: '성공!'
          }), 2000);
        });
        toast.promise(promise, {
          loading: '데이터를 불러오는 중...',
          success: '데이터를 성공적으로 불러왔습니다!',
          error: '데이터를 불러오는데 실패했습니다.'
        });
      };
      const showErrorPromise = () => {
        const promise = new Promise((_resolve, reject) => {
          setTimeout(() => reject(new Error('오류 발생')), 2000);
        });
        toast.promise(promise, {
          loading: '작업을 처리하는 중...',
          success: '작업이 완료되었습니다!',
          error: '작업 처리 중 오류가 발생했습니다.'
        });
      };
      return {
        showSuccessPromise,
        showErrorPromise
      };
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Promise 토스트</h3>
          <p class="text-xs text-gray-500">
            비동기 작업의 상태를 자동으로 표시하는 Promise 토스트입니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showSuccessPromise">성공 Promise</Button>
            <Button color="danger" @click="showErrorPromise">실패 Promise</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Button
    },
    setup() {
      const showShort = () => {
        toast.success('짧은 시간 동안 표시됩니다.', {
          duration: 1000
        });
      };
      const showLong = () => {
        toast.info('긴 시간 동안 표시됩니다.', {
          duration: 5000
        });
      };
      const showInfinite = () => {
        toast.warning('수동으로 닫을 때까지 표시됩니다.', {
          duration: Infinity
        });
      };
      return {
        showShort,
        showLong,
        showInfinite
      };
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">커스텀 지속 시간</h3>
          <p class="text-xs text-gray-500">
            토스트의 표시 시간을 커스터마이징할 수 있습니다.
          </p>
          <div class="flex flex-col gap-2">
            <Button @click="showShort">짧은 시간 (1초)</Button>
            <Button color="secondary" @click="showLong">긴 시간 (5초)</Button>
            <Button color="warning" @click="showInfinite">무한 (수동 닫기)</Button>
          </div>
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};const x=["Playground","Types","WithActions","PromiseToast","CustomDuration"];export{i as CustomDuration,e as Playground,B as PromiseToast,c as Types,r as WithActions,x as __namedExportsOrder,f as default};
