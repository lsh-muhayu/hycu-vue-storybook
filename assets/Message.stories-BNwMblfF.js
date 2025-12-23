import{d,e as i,f as c,g as l,c as p,y as m,o as g,i as y,a as f,u,I as h,h as M,n as b}from"./iframe-C4A3u57P.js";import"./preload-helper-PPVm8Dsz.js";const k=l("flex gap-1 text-sm",{variants:{type:{danger:"text-danger",info:"text-info"}},defaultVariants:{type:"danger"}}),s=d({__name:"Message",props:{type:{default:"danger"},class:{default:""}},setup(r){const n=r,o=i(()=>c(k({type:n.type}),n.class));return(t,x)=>t.$slots.default?(g(),p("div",{key:0,class:b(o.value)},[y(u(h),{class:"relative top-1 size-4 shrink-0 items-start"}),f("span",null,[M(t.$slots,"default")])],2)):m("",!0)}});s.__docgenInfo={exportName:"default",displayName:"Message",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"type",global:!1,description:"",tags:[],required:!1,type:'"danger" | "info"',declarations:[],schema:{kind:"enum",type:'"danger" | "info"',schema:['"danger"','"info"']},default:'"danger"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"type",type:'"danger" | "info"',description:"",declarations:[],schema:{kind:"enum",type:'"danger" | "info"',schema:['"danger"','"info"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/message/Message.vue"};const N={title:"Shared/UI/Message",component:s,parameters:{layout:"centered",docs:{description:{component:`
### 메시지 컴포넌트

Message 컴포넌트는 사용자에게 정보나 경고를 표시하기 위한 컴포넌트입니다.
아이콘과 함께 메시지를 표시하며, 타입에 따라 다른 색상으로 표시됩니다.

## 주요 기능

- **타입별 스타일**: \`danger\` (위험/오류), \`info\` (정보) 두 가지 타입 지원
- **아이콘 표시**: Info 아이콘이 자동으로 표시됩니다
- **조건부 렌더링**: \`children\`이 없으면 렌더링되지 않습니다
- **커스터마이징**: \`className\`을 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<Message type="danger">
  오류가 발생했습니다.
</Message>

<Message type="info">
  정보 메시지입니다.
</Message>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["danger","info"],description:"메시지 타입",table:{type:{summary:"'danger' | 'info'"},defaultValue:{summary:"'danger'"}}},default:{control:"text",description:"메시지 내용"}}},e={name:"예시",args:{type:"danger",default:"오류가 발생했습니다."}},a={name:"타입별 예시",render:()=>({components:{Message:s},template:`
      <div class="flex flex-col gap-4">
        <Message type="danger">이 필드는 필수입니다.</Message>
        <Message type="info">
          설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.
          <br />
          danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 <b>파란 색상</b>으로 문구가
          보입니다.
        </Message>
        <Message type="danger">
          메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가
          길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시
          표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.
        </Message>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: '예시',
  args: {
    type: 'danger',
    default: '오류가 발생했습니다.'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '타입별 예시',
  render: () => ({
    components: {
      Message
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <Message type="danger">이 필드는 필수입니다.</Message>
        <Message type="info">
          설명에 대한 내용을 적기 위해서는 type을 info로 설정하여 색상을 변경할 수 있습니다.
          <br />
          danger에서는 빨간 색상으로 문구가 보였던 것과 다르게, info에서는 <b>파란 색상</b>으로 문구가
          보입니다.
        </Message>
        <Message type="danger">
          메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가
          길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시
          표기는 이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.메시지가 길어졌을 시 표기는
          이러합니다.메시지가 길어졌을 시 표기는 이러합니다.
        </Message>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const V=["Example","Examples"];export{e as Example,a as Examples,V as __namedExportsOrder,N as default};
