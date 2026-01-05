import{G as c,H as p,F as d,T as m,d as g,b as f,e as u,l as y,c as h,h as b,u as i,o as M,g as k,a as x,I as v,i as _,n as N}from"./iframe-NOcxhkuc.js";import"./preload-helper-PPVm8Dsz.js";const t=e=>e==null||typeof e=="boolean"?!1:typeof e=="string"||typeof e=="number"?String(e).trim().length>0:Array.isArray(e)?e.some(t):!c(e)||e.type===p?!1:e.type===d?t(e.children):e.type===m?String(e.children??"").trim().length>0:!0,V=e=>{if(!e)return!1;const a=e();return!a||a.length===0?!1:a.some(t)},q=y("flex gap-1 text-sm",{variants:{type:{danger:"text-danger",info:"text-info"}},defaultVariants:{type:"danger"}}),r=g({__name:"Message",props:{type:{default:"danger"},class:{default:""}},setup(e){const a=e,l=f(()=>u(q({type:a.type}),a.class));return(o,C)=>i(V)(o.$slots.default)?(M(),h("div",{key:0,class:N(l.value)},[k(i(v),{class:"relative top-1 size-4 shrink-0 items-start"}),x("span",null,[_(o.$slots,"default")])],2)):b("",!0)}});r.__docgenInfo={exportName:"default",displayName:"Message",type:1,props:[{name:"type",global:!1,description:"",tags:[],required:!1,type:'"danger" | "info"',declarations:[],schema:{kind:"enum",type:'"danger" | "info"',schema:['"danger"','"info"']},default:'"danger"'},{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"type",type:'"danger" | "info"',description:"",declarations:[],schema:{kind:"enum",type:'"danger" | "info"',schema:['"danger"','"info"']}},{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/message/Message.vue"};const I={title:"Shared/UI/Message",component:r,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["danger","info"],description:"메시지 타입",table:{type:{summary:"'danger' | 'info'"},defaultValue:{summary:"'danger'"}}},default:{control:"text",description:"메시지 내용"}}},s={name:"예시",args:{type:"danger",default:"오류가 발생했습니다."}},n={name:"타입별 예시",render:()=>({components:{Message:r},template:`
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
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '예시',
  args: {
    type: 'danger',
    default: '오류가 발생했습니다.'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const R=["Example","Examples"];export{s as Example,n as Examples,R as __namedExportsOrder,I as default};
