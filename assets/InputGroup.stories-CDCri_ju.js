import{b as U,d as x,c as M,o as y,h as O,n as L,u as c,f as q,g as P,e as W,v as j,A as z,r as C,a as e,y as t,x as d,t as G,K as F,X as Y}from"./iframe-Cg9A2K9u.js";import{u as X}from"./useForwardProps-Bp6OZIIi.js";import{_ as Z}from"./Input-BeYKWyir.js";import{r as T}from"./index-RAg1dxvx.js";import{_ as R}from"./Button-ChvNBIlq.js";import{S as f,U as h,M as $}from"./user-_vpFVDRQ.js";import"./preload-helper-PPVm8Dsz.js";const nn=U("eye-off",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);const H=U("eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);const K=U("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),en=P(["group/input-group relative flex w-full items-center rounded border border-gray-300","shadow-xs transition-[color,box-shadow]","h-10 min-w-0 outline-none has-[>textarea]:h-auto","has-[>[data-align=inline-start]]:[&>input]:pl-2","has-[>[data-align=inline-end]]:[&>input]:pr-2","has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3","has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",'has-[[data-slot=input-group-control][data-invalid="true"]]:border-danger','has-[[data-slot=input-group-control][data-invalid="true"]:focus]:shadow-[0_0_0_3px_rgba(239,68,68,0.1)]',"has-[[data-slot=input-group-control]:focus-visible]:border-primary","has-[[data-slot=input-group-control]:focus-visible]:shadow-[0_0_0_3px_rgba(106,0,40,0.1)]","has-[[data-slot=input-group-control]:disabled]:cursor-not-allowed","has-[[data-slot=input-group-control]:disabled]:opacity-70","has-[[data-slot=input-group-control]:disabled:focus]:shadow-none","has-[[data-slot=input-group-control]:disabled:focus]:border-gray-300","has-[[data-slot=input-group-control]:read-only]:bg-gray-50","has-[[data-slot=input-group-control]:read-only]:shadow-none","has-[[data-slot=input-group-control]:read-only]:border-gray-300","has-[[data-slot=input-group-control]:read-only:focus]:shadow-none"]),u=x({__name:"InputGroup",props:{class:{default:""}},setup(I){const o=I;return(l,i)=>(y(),M("div",{"data-slot":"input-group",role:"group",class:L(c(q)(c(en)(),o.class))},[O(l.$slots,"default")],2))}});u.__docgenInfo={exportName:"default",displayName:"InputGroup",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input-group/InputGroup.vue"};const tn=P(["flex-1 border-0 bg-transparent shadow-none not-read-only:focus:shadow-none","disabled:bg-transparent","read-only:bg-transparent"],{variants:{invalid:{true:"text-danger"}}}),a=x({__name:"InputGroupInput",props:{invalid:{type:Boolean},class:{default:""}},setup(I){const o=I,l=T(o,"class"),i=X(l),r=W(()=>q(tn({invalid:o.invalid}),o.class));return(s,g)=>(y(),j(Z,z({...s.$attrs,...c(i)},{"data-slot":"input-group-control","data-invalid":I.invalid,class:r.value}),null,16,["data-invalid","class"]))}});a.__docgenInfo={exportName:"default",displayName:"InputGroupInput",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"invalid",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"invalid",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input-group/InputGroupInput.vue"};const on=["data-align"],un=P(['[&>svg:not([class*="size-])]:size-4 flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-gray-400 select-none','group-has-[[data-slot=input-group-control][data-invalid="true"]]/input-group:text-danger',"group-has-[[data-slot=input-group-control]:disabled]/input-group:opacity-50 group-data-[disabled=true]/input-group:opacity-50"],{variants:{align:{"inline-start":"order-first pl-3 has-[>button]:ml-[-0.45rem]","inline-end":"order-last pr-3 has-[>button]:mr-[-0.45rem]","block-start":"order-first w-full justify-start px-3 pt-3 group-has-[>input]/input-group:pt-2.5 [.border-b]:pb-3","block-end":"order-last w-full justify-start px-3 pb-3 group-has-[>input]/input-group:pb-2.5 [.border-t]:pt-3"}},defaultVariants:{align:"inline-start"}}),p=x({__name:"InputGroupAddon",props:{align:{default:"inline-start"},class:{default:""}},setup(I){const o=I,l=W(()=>q(un({align:o.align}),o.class));function i(r){const s=r.currentTarget,g=r.target;g&&g.closest("button")||s&&s?.parentElement&&s.parentElement?.querySelector("input")?.focus()}return(r,s)=>(y(),M("div",{role:"group","data-slot":"input-group-addon","data-align":o.align,class:L(l.value),onClick:i},[O(r.$slots,"default")],10,on))}});p.__docgenInfo={exportName:"default",displayName:"InputGroupAddon",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'""'},{name:"align",global:!1,description:"",tags:[],required:!1,type:'"inline-start" | "inline-end" | "block-start" | "block-end"',declarations:[],schema:{kind:"enum",type:'"inline-start" | "inline-end" | "block-start" | "block-end"',schema:['"inline-start"','"inline-end"','"block-start"','"block-end"']},default:'"inline-start"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"any",description:"",declarations:[],schema:"any"},{name:"align",type:'"inline-start" | "inline-end" | "block-start" | "block-end"',description:"",declarations:[],schema:{kind:"enum",type:'"inline-start" | "inline-end" | "block-start" | "block-end"',schema:['"inline-start"','"inline-end"','"block-start"','"block-end"']}}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input-group/InputGroupAddon.vue"};const an={class:"flex flex-col gap-6"},rn={class:"flex flex-col gap-4"},pn={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},ln={class:"flex flex-col gap-2"},sn={class:"text-xs text-gray-500"},dn={class:"flex flex-col gap-2"},cn={class:"text-xs text-gray-500"},In={class:"flex flex-col gap-2"},mn={class:"text-xs text-gray-500"},fn={class:"flex flex-col gap-2"},gn={class:"text-xs text-gray-500"},Cn={class:"flex flex-col gap-2"},Gn={class:"text-xs text-gray-500"},hn={class:"flex gap-2"},J=x({__name:"Controlled.stories",setup(I){const o=C("홍길동"),l=C(""),i=C(""),r=C("010-1234-5678"),s=C(""),g=()=>{o.value="",l.value="",i.value="",r.value="",s.value=""},Q=()=>{o.value="홍길동",l.value="hong@example.com",i.value="password123",r.value="010-1234-5678",s.value="검색어 예시"};return(yn,n)=>(y(),M("div",an,[e("div",rn,[n[12]||(n[12]=e("div",{class:"flex flex-col gap-2"},[e("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),e("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 입력 필드의 상태를 제어합니다. 입력 필드에 값을 입력하면 상태가 변경되고, 부모에서 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")],-1)),e("div",pn,[e("div",ln,[n[5]||(n[5]=e("label",{for:"controlled-search",class:"text-sm font-medium text-gray-700"},"검색",-1)),t(u,null,{default:d(()=>[t(p,{align:"inline-start"},{default:d(()=>[t(c(f),{class:"h-4 w-4"})]),_:1}),t(a,{id:"controlled-search",modelValue:s.value,"onUpdate:modelValue":n[0]||(n[0]=m=>s.value=m),type:"text",placeholder:"검색어를 입력하세요"},null,8,["modelValue"])]),_:1}),e("span",sn,"현재 값: "+G(s.value||"(비어있음)"),1)]),e("div",dn,[n[6]||(n[6]=e("label",{for:"controlled-name",class:"text-sm font-medium text-gray-700"},"이름",-1)),t(u,null,{default:d(()=>[t(p,{align:"inline-start"},{default:d(()=>[t(c(h),{class:"h-4 w-4"})]),_:1}),t(a,{id:"controlled-name",modelValue:o.value,"onUpdate:modelValue":n[1]||(n[1]=m=>o.value=m),type:"text",placeholder:"이름을 입력하세요"},null,8,["modelValue"])]),_:1}),e("span",cn," 현재 값: "+G(o.value||"(비어있음)")+" (초기값: 홍길동) ",1)]),e("div",In,[n[7]||(n[7]=e("label",{for:"controlled-email",class:"text-sm font-medium text-gray-700"},"이메일",-1)),t(u,null,{default:d(()=>[t(p,{align:"inline-start"},{default:d(()=>[t(c($),{class:"h-4 w-4"})]),_:1}),t(a,{id:"controlled-email",modelValue:l.value,"onUpdate:modelValue":n[2]||(n[2]=m=>l.value=m),type:"email",placeholder:"example@email.com"},null,8,["modelValue"])]),_:1}),e("span",mn,"현재 값: "+G(l.value||"(비어있음)"),1)]),e("div",fn,[n[8]||(n[8]=e("label",{for:"controlled-password",class:"text-sm font-medium text-gray-700"},"비밀번호",-1)),t(u,null,{default:d(()=>[t(p,{align:"inline-start"},{default:d(()=>[t(c(K),{class:"h-4 w-4"})]),_:1}),t(a,{id:"controlled-password",modelValue:i.value,"onUpdate:modelValue":n[3]||(n[3]=m=>i.value=m),type:"password",placeholder:"비밀번호를 입력하세요"},null,8,["modelValue"])]),_:1}),e("span",gn,"현재 값: "+G(i.value||"(비어있음)"),1)]),e("div",Cn,[n[9]||(n[9]=e("label",{for:"controlled-phone",class:"text-sm font-medium text-gray-700"},"전화번호",-1)),t(u,null,{default:d(()=>[t(p,{align:"inline-start"},{default:d(()=>[t(c(h),{class:"h-4 w-4"})]),_:1}),t(a,{id:"controlled-phone",modelValue:r.value,"onUpdate:modelValue":n[4]||(n[4]=m=>r.value=m),type:"tel",placeholder:"010-1234-5678"},null,8,["modelValue"])]),_:1}),e("span",Gn," 현재 값: "+G(r.value||"(비어있음)")+" (초기값: 010-1234-5678) ",1)])]),e("div",hn,[t(R,{onClick:Q},{default:d(()=>[...n[10]||(n[10]=[F(" 값 채우기 ",-1)])]),_:1}),t(R,{color:"secondary",onClick:g},{default:d(()=>[...n[11]||(n[11]=[F(" 초기화 ",-1)])]),_:1})]),n[13]||(n[13]=e("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[e("p",{class:"text-xs text-blue-800"},[e("strong",null,"참고:"),F(" 제어 컴포넌트는 부모 컴포넌트가 상태를 소유하고 관리합니다. 입력 필드에 값을 입력하면 v-model을 통해 부모로 전달되고, 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다. ")])],-1))])]))}});J.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input-group/stories/Controlled.stories.vue"};const xn=P(""),N=x({__name:"InputGroupButton",props:{variant:{default:"filled"},class:{default:""}},setup(I){const o=I,l=T(o,"class"),i=X(l);return(r,s)=>(y(),j(R,z({...r.$attrs,...c(i)},{size:"xs",class:c(q)(c(xn)(),o.class)}),{default:d(()=>[O(r.$slots,"default")]),_:3},16,["class"]))}});N.__docgenInfo={exportName:"default",displayName:"InputGroupButton",type:1,props:[{name:"class",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string",default:'""'},{name:"variant",global:!1,description:"",tags:[],required:!1,type:"any",declarations:[],schema:"any",default:'"filled"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"class",type:"string",description:"",declarations:[],schema:"string"},{name:"variant",type:"any",description:"",declarations:[],schema:"any"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/input-group/InputGroupButton.vue"};const _n={title:"Shared/UI/InputGroup",component:u,parameters:{layout:"centered",docs:{description:{component:`
### 입력 필드 그룹 컴포넌트

InputGroup 컴포넌트는 입력 필드와 아이콘, 버튼 등을 그룹화하여 일관된 UI를 제공합니다.

## 주요 기능

- **유연한 구성**: Input, Addon, Button을 자유롭게 조합하여 사용
- **다양한 정렬**: Addon의 \`align\` prop으로 위치 조정 가능 (\`inline-start\`, \`inline-end\`, \`block-start\`, \`block-end\`)
- **포커스 상태**: Input에 포커스 시 전체 그룹에 스타일 적용
- **에러 상태**: \`aria-invalid\` 속성으로 에러 상태 표시

## 사용 예시

\`\`\`vue
<InputGroup>
  <InputGroupAddon align="inline-start">
    <SearchIcon class="w-4 h-4" />
  </InputGroupAddon>
  <InputGroupInput placeholder="검색어를 입력하세요" />
</InputGroup>
\`\`\`
        `}}},tags:["autodocs"]},v={parameters:{controls:{disable:!1}},render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,SearchIcon:f},setup(){return{}},template:`
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon class="w-4 h-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="검색어를 입력하세요" />
        </InputGroup>
      </div>
    `})},A={render:()=>({components:{InputGroup:u,InputGroupInput:a},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <InputGroup>
            <InputGroupInput placeholder="입력하세요" />
          </InputGroup>
        </div>
      </div>
    `})},B={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,SearchIcon:f,UserIcon:h,MailIcon:$,LockIcon:K},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘 추가 (왼쪽)</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="검색어를 입력하세요" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <UserIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="사용자 이름" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <MailIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="이메일 주소" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="비밀번호" />
            </InputGroup>
          </div>
        </div>
      </div>
    `})},b={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,XIcon:Y},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘 추가 (오른쪽)</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <XIcon class="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    `})},k={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,InputGroupButton:N,EyeIcon:H,EyeOffIcon:nn},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">버튼 추가</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupInput type="password" placeholder="비밀번호" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <EyeIcon class="w-4 h-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="filled">
                검색
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    `})},w={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,InputGroupButton:N,SearchIcon:f},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 버튼 함께 사용</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="filled">
                검색
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    `})},D={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,SearchIcon:f},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Search Box</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput defaultValue='ddddd' placeholder="검색어를 입력하세요" />
          </InputGroup>
        </div>
      </div>
    `})},_={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,SearchIcon:f,UserIcon:h},template:`
      <div class="flex w-80 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inline Start (기본값)</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput      placeholder="왼쪽에 아이콘" />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inline End</h3>
          <InputGroup>
            <InputGroupInput placeholder="오른쪽에 아이콘" />
            <InputGroupAddon align="inline-end">
              <UserIcon class="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Block Start</h3>
          <InputGroup>
            <InputGroupAddon align="block-start">
              <span class="text-xs">라벨</span>
            </InputGroupAddon>
            <InputGroupInput placeholder="위쪽에 라벨" />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Block End</h3>
          <InputGroup>
            <InputGroupInput placeholder="아래쪽에 라벨" />
            <InputGroupAddon align="block-end">
              <span class="text-xs text-gray-500">도움말 텍스트</span>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    `})},S={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,SearchIcon:f},template:`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">상태별 예시</h3>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">정상 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">에러 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" invalid />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">비활성화 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" disabled />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">읽기 전용 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput defaultValue='읽기 전용 텍스트' readonly />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    `})},E={render:()=>({components:{InputGroup:u,InputGroupInput:a,InputGroupAddon:p,InputGroupButton:N,SearchIcon:f,UserIcon:h,MailIcon:$,LockIcon:K,EyeIcon:H},template:`
      <div class="flex w-96 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">검색 입력</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="검색어를 입력하세요" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="filled">
              검색
            </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">사용자 정보 입력</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <UserIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="사용자 이름" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <MailIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput type="email" placeholder="이메일 주소" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon class="w-4 h-4" /> 
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="비밀번호" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant='text' color='secondary'>
                <EyeIcon class="w-4 h-4" />
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    `})},V={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import InputGroup from './InputGroup.vue';
import InputGroupInput from './InputGroupInput.vue';
import InputGroupAddon from './InputGroupAddon.vue';
import { SearchIcon } from 'lucide-vue-next';

const search = ref('');
<\/script>

<template>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <SearchIcon class="w-4 h-4" />
    </InputGroupAddon>
    <InputGroupInput v-model="search" placeholder="검색어를 입력하세요" />
  </InputGroup>
  <p>현재 값: {{ search }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:J},template:"<ControlledExample />"})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    }
  },
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      SearchIcon
    },
    setup() {
      return {};
    },
    /*html*/
    template: \`
      <div class="w-80">
        <InputGroup>
          <InputGroupAddon align="inline-start">
            <SearchIcon class="w-4 h-4" />
          </InputGroupAddon>
          <InputGroupInput placeholder="검색어를 입력하세요" />
        </InputGroup>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 사용법</h3>
          <InputGroup>
            <InputGroupInput placeholder="입력하세요" />
          </InputGroup>
        </div>
      </div>
    \`
  })
}`,...A.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      SearchIcon,
      UserIcon,
      MailIcon,
      LockIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘 추가 (왼쪽)</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="검색어를 입력하세요" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <UserIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="사용자 이름" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <MailIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="이메일 주소" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="비밀번호" />
            </InputGroup>
          </div>
        </div>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      XIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘 추가 (오른쪽)</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <XIcon class="w-4 h-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    \`
  })
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupButton,
      EyeIcon,
      EyeOffIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">버튼 추가</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupInput type="password" placeholder="비밀번호" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton>
                  <EyeIcon class="w-4 h-4" />
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
            <InputGroup>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="filled">
                검색
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupButton,
      SearchIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">아이콘과 버튼 함께 사용</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <SearchIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="검색어를 입력하세요" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant="filled">
                검색
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    \`
  })
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      SearchIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Search Box</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput defaultValue='ddddd' placeholder="검색어를 입력하세요" />
          </InputGroup>
        </div>
      </div>
    \`
  })
}`,...D.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      SearchIcon,
      UserIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inline Start (기본값)</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput      placeholder="왼쪽에 아이콘" />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Inline End</h3>
          <InputGroup>
            <InputGroupInput placeholder="오른쪽에 아이콘" />
            <InputGroupAddon align="inline-end">
              <UserIcon class="w-4 h-4" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Block Start</h3>
          <InputGroup>
            <InputGroupAddon align="block-start">
              <span class="text-xs">라벨</span>
            </InputGroupAddon>
            <InputGroupInput placeholder="위쪽에 라벨" />
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Block End</h3>
          <InputGroup>
            <InputGroupInput placeholder="아래쪽에 라벨" />
            <InputGroupAddon align="block-end">
              <span class="text-xs text-gray-500">도움말 텍스트</span>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      SearchIcon
    },
    /*html*/
    template: \`
      <div class="flex w-80 flex-col gap-4">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">상태별 예시</h3>
          <div class="flex flex-col gap-3">
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">정상 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">에러 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" invalid />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">비활성화 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput placeholder="검색어를 입력하세요" disabled />
              </InputGroup>
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-xs text-gray-600">읽기 전용 상태</label>
              <InputGroup>
                <InputGroupAddon align="inline-start">
                  <SearchIcon class="w-4 h-4" />
                </InputGroupAddon>
                <InputGroupInput defaultValue='읽기 전용 텍스트' readonly />
              </InputGroup>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...S.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      InputGroup,
      InputGroupInput,
      InputGroupAddon,
      InputGroupButton,
      SearchIcon,
      UserIcon,
      MailIcon,
      LockIcon,
      EyeIcon
    },
    /*html*/
    template: \`
      <div class="flex w-96 flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">검색 입력</h3>
          <InputGroup>
            <InputGroupAddon align="inline-start">
              <SearchIcon class="w-4 h-4" />
            </InputGroupAddon>
            <InputGroupInput placeholder="검색어를 입력하세요" />
            <InputGroupAddon align="inline-end">
              <InputGroupButton variant="filled">
              검색
            </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">사용자 정보 입력</h3>
          <div class="flex flex-col gap-3">
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <UserIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput placeholder="사용자 이름" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <MailIcon class="w-4 h-4" />
              </InputGroupAddon>
              <InputGroupInput type="email" placeholder="이메일 주소" />
            </InputGroup>
            <InputGroup>
              <InputGroupAddon align="inline-start">
                <LockIcon class="w-4 h-4" /> 
              </InputGroupAddon>
              <InputGroupInput type="password" placeholder="비밀번호" />
              <InputGroupAddon align="inline-end">
                <InputGroupButton variant='text' color='secondary'>
                <EyeIcon class="w-4 h-4" />
              </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </div>
    \`
  })
}`,...E.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 입력 필드의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 입력 필드가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import InputGroup from './InputGroup.vue';
import InputGroupInput from './InputGroupInput.vue';
import InputGroupAddon from './InputGroupAddon.vue';
import { SearchIcon } from 'lucide-vue-next';

const search = ref('');
<\/script>

<template>
  <InputGroup>
    <InputGroupAddon align="inline-start">
      <SearchIcon class="w-4 h-4" />
    </InputGroupAddon>
    <InputGroupInput v-model="search" placeholder="검색어를 입력하세요" />
  </InputGroup>
  <p>현재 값: {{ search }}</p>
</template>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => ({
    components: {
      ControlledExample
    },
    /*html*/
    template: '<ControlledExample />'
  })
}`,...V.parameters?.docs?.source}}};const Sn=["Playground","Basic","WithIcon","WithIconEnd","WithButton","WithIconAndButton","SearchBox","DifferentAlignments","States","Examples","Controlled"];export{A as Basic,V as Controlled,_ as DifferentAlignments,E as Examples,v as Playground,D as SearchBox,S as States,k as WithButton,B as WithIcon,w as WithIconAndButton,b as WithIconEnd,Sn as __namedExportsOrder,_n as default};
