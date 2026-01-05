import{d,b as t,l as A,I as p,c as m,o as s,a as D,i as f,f as g,p as v,n as y}from"./iframe-wQXNwKp8.js";import{C as E}from"./circle-alert-B4oJC1jh.js";import{C as x}from"./check-Btsl8iYY.js";import"./preload-helper-PPVm8Dsz.js";const h={class:"flex justify-center pt-0.5"},b=A("flex w-full gap-3 rounded-md border px-5 py-4 font-medium",{variants:{variant:{success:"bg-green/10 text-success border-success/50",danger:"bg-danger/10 border-danger/50 text-red-900",info:"bg-info/10 text-info border-info/50"}},defaultVariants:{variant:"success"}}),u=d({__name:"Alert",props:{variant:{default:"success"},class:{}},setup(o){const a=o,l=t(()=>b({variant:a.variant})),c={success:x,danger:E,info:p},i=t(()=>c[a.variant]);return(B,k)=>(s(),m("div",{class:y(l.value)},[D("div",h,[(s(),g(v(i.value),{class:"size-5"}))]),f(B.$slots,"default")],2))}});u.__docgenInfo={exportName:"default",displayName:"Alert",type:1,props:[{name:"variant",global:!1,description:"",tags:[],required:!1,type:'"success" | "danger" | "info"',declarations:[],schema:{kind:"enum",type:'"success" | "danger" | "info"',schema:['"success"','"danger"','"info"']},default:'"success"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"variant",type:'"success" | "danger" | "info"',description:"",declarations:[],schema:{kind:"enum",type:'"success" | "danger" | "info"',schema:['"success"','"danger"','"info"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/alert/Alert.vue"};const V={title:"Shared/UI/Alert",component:u,parameters:{layout:"centered",docs:{description:{component:`
### 알림 메시지 컴포넌트

Alert 컴포넌트는 사용자에게 중요한 정보를 전달하는 알림 메시지를 표시합니다.

## 주요 기능

- **세 가지 타입**: \`success\` (성공), \`danger\` (위험), \`info\` (정보)
- **아이콘 자동 표시**: 각 타입에 맞는 아이콘이 자동으로 표시됩니다
- **유연한 콘텐츠**: 슬롯을 통해 자유로운 메시지 표시

## 사용 예시

\`\`\`vue
<Alert variant="success">
  저장이 완료되었습니다.
</Alert>
\`\`\`
        `}}},tags:["autodocs"]},e={render:()=>({components:{Alert:u},template:"<Alert>성공적으로 저장되었습니다.</Alert>"})},C={render:()=>({components:{Alert:u},template:`
      <div class="flex flex-col gap-4 w-[500px]">
        <Alert variant="success">
          작업이 성공적으로 완료되었습니다.
        </Alert>
        <Alert variant="danger">
          오류가 발생했습니다. 다시 시도해주세요.
        </Alert>
        <Alert variant="info">
          새로운 업데이트가 있습니다.
        </Alert>
      </div>
    `})},n={render:()=>({components:{Alert:u},template:`
      <div class="flex flex-col gap-4 w-[600px]">
        <Alert variant="success">
          논문 심사가 성공적으로 완료되었습니다. 심사위원들의 검토 결과 모든 항목에서 적합 판정을 받았으며, 다음 단계로 진행하실 수 있습니다. 자세한 내용은 이메일을 확인해주세요.
        </Alert>
        <Alert variant="danger">
          업로드하신 파일에서 오류가 발견되었습니다. 파일 형식이 올바르지 않거나 필수 항목이 누락되었을 수 있습니다. 파일을 다시 확인하신 후 재업로드 해주시기 바랍니다. 문제가 계속되면 관리자에게 문의하세요.
        </Alert>
        <Alert variant="info">
          시스템 정기 점검이 2024년 1월 15일 오전 2시부터 오전 6시까지 진행될 예정입니다. 점검 시간 동안 일부 서비스 이용이 제한될 수 있습니다. 양해 부탁드립니다.
        </Alert>
      </div>
    `})},r={render:()=>({components:{Alert:u},template:`
      <div class="flex flex-col gap-4 w-[600px]">
        <Alert variant="success">
          심사가 승인되었습니다.
        </Alert>
        <Alert variant="danger">
          필수 항목을 모두 입력해주세요.
        </Alert>
        <Alert variant="info">
          제출 기한이 7일 남았습니다.
        </Alert>
        <Alert variant="success">
          파일 업로드가 완료되었습니다.
        </Alert>
        <Alert variant="danger">
          권한이 없습니다. 관리자에게 문의하세요.
        </Alert>
        <Alert variant="info">
          시스템 점검이 예정되어 있습니다.
        </Alert>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    template: \`<Alert>성공적으로 저장되었습니다.</Alert>\`
  })
}`,...e.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4 w-[500px]">
        <Alert variant="success">
          작업이 성공적으로 완료되었습니다.
        </Alert>
        <Alert variant="danger">
          오류가 발생했습니다. 다시 시도해주세요.
        </Alert>
        <Alert variant="info">
          새로운 업데이트가 있습니다.
        </Alert>
      </div>
    \`
  })
}`,...C.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4 w-[600px]">
        <Alert variant="success">
          논문 심사가 성공적으로 완료되었습니다. 심사위원들의 검토 결과 모든 항목에서 적합 판정을 받았으며, 다음 단계로 진행하실 수 있습니다. 자세한 내용은 이메일을 확인해주세요.
        </Alert>
        <Alert variant="danger">
          업로드하신 파일에서 오류가 발견되었습니다. 파일 형식이 올바르지 않거나 필수 항목이 누락되었을 수 있습니다. 파일을 다시 확인하신 후 재업로드 해주시기 바랍니다. 문제가 계속되면 관리자에게 문의하세요.
        </Alert>
        <Alert variant="info">
          시스템 정기 점검이 2024년 1월 15일 오전 2시부터 오전 6시까지 진행될 예정입니다. 점검 시간 동안 일부 서비스 이용이 제한될 수 있습니다. 양해 부탁드립니다.
        </Alert>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Alert
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-4 w-[600px]">
        <Alert variant="success">
          심사가 승인되었습니다.
        </Alert>
        <Alert variant="danger">
          필수 항목을 모두 입력해주세요.
        </Alert>
        <Alert variant="info">
          제출 기한이 7일 남았습니다.
        </Alert>
        <Alert variant="success">
          파일 업로드가 완료되었습니다.
        </Alert>
        <Alert variant="danger">
          권한이 없습니다. 관리자에게 문의하세요.
        </Alert>
        <Alert variant="info">
          시스템 점검이 예정되어 있습니다.
        </Alert>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const N=["Playground","Variants","LongText","Examples"];export{r as Examples,n as LongText,e as Playground,C as Variants,N as __namedExportsOrder,V as default};
