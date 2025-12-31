import{d as z,b as y,g as N,o as h,w as B,k as b,c as k,u as o,F as S,z as _,l as C,t as w,r as a}from"./iframe-m8dtQMyq.js";import{_ as q,a as E,b as M,c as $}from"./PaginationPrevious-DxORcuEJ.js";import"./preload-helper-PPVm8Dsz.js";const n=z({__name:"PaginationBar",props:{pageNo:{},pageSize:{}},emits:["page-change"],setup(e,{emit:s}){const t=e,v=s,f=y(()=>Math.max(t.pageSize,1)),p=y(()=>Math.floor((t.pageNo-1)/10)*10+1),P=y(()=>Math.min(p.value+9,f.value));return(V,r)=>(h(),N(o($),null,{default:B(()=>[b(o(q),{disabled:e.pageNo===1,onClick:r[0]||(r[0]=g=>v("page-change",Math.max(p.value-1,1)))},null,8,["disabled"]),(h(!0),k(S,null,_(P.value-p.value+1,g=>(h(),N(o(E),{key:g,"is-current":e.pageNo===g+p.value-1,onClick:D=>v("page-change",g+p.value-1)},{default:B(()=>[C(w(g+p.value-1),1)]),_:2},1032,["is-current","onClick"]))),128)),b(o(M),{disabled:e.pageNo===f.value,onClick:r[1]||(r[1]=g=>v("page-change",Math.min(P.value+1,f.value)))},null,8,["disabled"])]),_:1}))}});n.__docgenInfo={exportName:"default",displayName:"PaginationBar",type:1,props:[{name:"pageNo",global:!1,description:"현재 페이지 번호",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"pageSize",global:!1,description:"총 페이지 수",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"page-change",description:"",tags:[],type:"[page: number]",signature:'(event: "page-change", page: number): void',declarations:[],schema:["number"]}],slots:[],exposed:[{name:"pageNo",type:"number",description:"현재 페이지 번호",declarations:[],schema:"number"},{name:"pageSize",type:"number",description:"총 페이지 수",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/pagination-bar/PaginationBar.vue"};const I={title:"Shared/UI/PaginationBar",component:n,parameters:{layout:"centered",docs:{description:{component:`
### 페이지네이션 바 컴포넌트

PaginationBar 컴포넌트는 페이지네이션 기능을 제공하는 고수준 컴포넌트입니다.
10개씩 페이지를 그룹화하여 표시하며, 첫/마지막 페이지 이동 및 이전/다음 페이지 이동 기능을 제공합니다.

## 주요 기능

- **10개 단위 그룹화**: 페이지를 10개씩 그룹화하여 표시 (1-10, 11-20, ...)
- **이전/다음 그룹 이동**: 현재 그룹의 이전/다음 그룹으로 이동
- **현재 페이지 강조**: 현재 페이지를 시각적으로 강조
- **자동 비활성화**: 첫 페이지에서는 이전 버튼 비활성화, 마지막 페이지에서는 다음 버튼 비활성화
- **반응형 이벤트**: \`page-change\` 이벤트로 페이지 변경 감지

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import { PaginationBar } from '@/shared/ui/pagination-bar';

const pageNo = ref(1);

const handlePageChange = (page) => {
  pageNo.value = page;
  // 데이터 로딩 등 추가 처리
};
<\/script>

<template>
  <PaginationBar
    :page-no="pageNo"
    :page-size="50"
    @page-change="handlePageChange"
  />
</template>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{pageNo:{control:{type:"number",min:1},description:"현재 페이지 번호",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},pageSize:{control:{type:"number",min:1},description:"총 페이지 수",table:{type:{summary:"number"},defaultValue:{summary:"1"}}}}},i={parameters:{docs:{description:{story:`
다양한 페이지 수에 따른 PaginationBar의 동작을 보여주는 예시입니다.
각 예시는 독립적으로 페이지를 변경할 수 있습니다.

- **5페이지**: 간단한 페이지네이션
- **15페이지**: 두 그룹으로 나뉜 페이지네이션 (1-10, 11-15)
- **2000페이지**: 많은 페이지를 가진 페이지네이션
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),s=a(1),t=a(1);return{page1:e,page2:s,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 5페이지 - 현재 페이지: {{ page1 }}
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="5"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 15페이지 - 현재 페이지: {{ page2 }}
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="15"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 2000페이지 - 현재 페이지: {{ page3 }}
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="2000"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})},c={parameters:{docs:{description:{story:`
페이지가 적을 때의 동작입니다. 총 3페이지만 있는 경우입니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{pageNo:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 3
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="3"
          @page-change="(page) => pageNo = page"
        />
      </div>
    `})},l={parameters:{docs:{description:{story:`
정확히 10페이지가 있는 경우입니다. 한 그룹에 모든 페이지가 표시됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{pageNo:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 10
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="10"
          @page-change="(page) => pageNo = page"
        />
      </div>
    `})},d={parameters:{docs:{description:{story:`
여러 그룹으로 나뉜 페이지네이션입니다. 총 25페이지가 있어 3개 그룹으로 나뉩니다.
이전/다음 버튼을 클릭하면 10개 단위로 그룹이 변경됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{pageNo:a(15)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 25
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="25"
          @page-change="(page) => pageNo = page"
        />
      </div>
    `})},m={parameters:{docs:{description:{story:`
많은 페이지를 가진 데이터셋입니다. 100페이지가 있으며, 10개씩 그룹화되어 표시됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{pageNo:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 100
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="100"
          @page-change="(page) => pageNo = page"
        />
      </div>
    `})},x={parameters:{docs:{description:{story:`
다양한 시작 페이지에서의 PaginationBar 동작을 보여줍니다.
첫 페이지, 중간 페이지, 마지막 페이지에서 시작하는 예시입니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),s=a(15),t=a(50);return{page1:e,page2:s,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            첫 페이지 시작 - 현재: {{ page1 }} / 50
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="50"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            중간 페이지 시작 - 현재: {{ page2 }} / 50
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="50"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            마지막 페이지 시작 - 현재: {{ page3 }} / 50
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="50"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})},u={parameters:{docs:{description:{story:`
엣지 케이스를 보여주는 예시입니다.
- 1페이지만 있는 경우
- 11페이지 (두 번째 그룹이 1개만 있는 경우)
- 21페이지 (세 번째 그룹이 1개만 있는 경우)
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),s=a(11),t=a(21);return{page1:e,page2:s,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            1페이지만 있는 경우 - 현재: {{ page1 }} / 1
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="1"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            11페이지 (두 번째 그룹이 1개) - 현재: {{ page2 }} / 11
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="11"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            21페이지 (세 번째 그룹이 1개) - 현재: {{ page3 }} / 21
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="21"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
다양한 페이지 수에 따른 PaginationBar의 동작을 보여주는 예시입니다.
각 예시는 독립적으로 페이지를 변경할 수 있습니다.

- **5페이지**: 간단한 페이지네이션
- **15페이지**: 두 그룹으로 나뉜 페이지네이션 (1-10, 11-15)
- **2000페이지**: 많은 페이지를 가진 페이지네이션
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const page1 = ref(1);
      const page2 = ref(1);
      const page3 = ref(1);
      return {
        page1,
        page2,
        page3
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 5페이지 - 현재 페이지: {{ page1 }}
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="5"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 15페이지 - 현재 페이지: {{ page2 }}
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="15"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 2000페이지 - 현재 페이지: {{ page3 }}
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="2000"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
페이지가 적을 때의 동작입니다. 총 3페이지만 있는 경우입니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const pageNo = ref(1);
      return {
        pageNo
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 3
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="3"
          @page-change="(page) => pageNo = page"
        />
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
정확히 10페이지가 있는 경우입니다. 한 그룹에 모든 페이지가 표시됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const pageNo = ref(1);
      return {
        pageNo
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 10
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="10"
          @page-change="(page) => pageNo = page"
        />
      </div>
    \`
  })
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
여러 그룹으로 나뉜 페이지네이션입니다. 총 25페이지가 있어 3개 그룹으로 나뉩니다.
이전/다음 버튼을 클릭하면 10개 단위로 그룹이 변경됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const pageNo = ref(15);
      return {
        pageNo
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 25
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="25"
          @page-change="(page) => pageNo = page"
        />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
많은 페이지를 가진 데이터셋입니다. 100페이지가 있으며, 10개씩 그룹화되어 표시됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const pageNo = ref(1);
      return {
        pageNo
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ pageNo }} / 100
        </div>
        <PaginationBar
          :page-no="pageNo"
          :page-size="100"
          @page-change="(page) => pageNo = page"
        />
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
다양한 시작 페이지에서의 PaginationBar 동작을 보여줍니다.
첫 페이지, 중간 페이지, 마지막 페이지에서 시작하는 예시입니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const page1 = ref(1);
      const page2 = ref(15);
      const page3 = ref(50);
      return {
        page1,
        page2,
        page3
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            첫 페이지 시작 - 현재: {{ page1 }} / 50
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="50"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            중간 페이지 시작 - 현재: {{ page2 }} / 50
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="50"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            마지막 페이지 시작 - 현재: {{ page3 }} / 50
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="50"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
엣지 케이스를 보여주는 예시입니다.
- 1페이지만 있는 경우
- 11페이지 (두 번째 그룹이 1개만 있는 경우)
- 21페이지 (세 번째 그룹이 1개만 있는 경우)
        \`
      }
    }
  },
  render: () => ({
    components: {
      PaginationBar
    },
    setup() {
      const page1 = ref(1);
      const page2 = ref(11);
      const page3 = ref(21);
      return {
        page1,
        page2,
        page3
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            1페이지만 있는 경우 - 현재: {{ page1 }} / 1
          </div>
          <PaginationBar
            :page-no="page1"
            :page-size="1"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            11페이지 (두 번째 그룹이 1개) - 현재: {{ page2 }} / 11
          </div>
          <PaginationBar
            :page-no="page2"
            :page-size="11"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            21페이지 (세 번째 그룹이 1개) - 현재: {{ page3 }} / 21
          </div>
          <PaginationBar
            :page-no="page3"
            :page-size="21"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};const L=["Examples","FewPages","TenPages","MultipleGroups","LargeDataset","StartingAtDifferentPages","EdgeCases"];export{u as EdgeCases,i as Examples,c as FewPages,m as LargeDataset,d as MultipleGroups,x as StartingAtDifferentPages,l as TenPages,L as __namedExportsOrder,I as default};
