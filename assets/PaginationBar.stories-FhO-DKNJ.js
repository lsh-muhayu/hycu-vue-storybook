import{d as _,b as P,g as B,o as y,w as b,k,c as C,u as p,F as S,z as w,l as q,t as N,r as a}from"./iframe-DctnOEI0.js";import{_ as E,a as M,b as $,c as V}from"./PaginationPrevious-Biowkv1v.js";import"./preload-helper-PPVm8Dsz.js";const n=_({__name:"PaginationBar",props:{currentPage:{},totalPages:{}},emits:["page-change"],setup(e,{emit:r}){const t=e,v=r,f=P(()=>Math.max(t.totalPages,1)),s=P(()=>Math.floor((t.currentPage-1)/10)*10+1),h=P(()=>Math.min(s.value+9,f.value));return(D,c)=>(y(),B(p(V),null,{default:b(()=>[k(p(E),{disabled:e.currentPage===1,onClick:c[0]||(c[0]=g=>v("page-change",Math.max(s.value-1,1)))},null,8,["disabled"]),(y(!0),C(S,null,w(h.value-s.value+1,g=>(y(),B(p(M),{key:g,"is-current":e.currentPage===g+s.value-1,onClick:F=>v("page-change",g+s.value-1)},{default:b(()=>[q(N(g+s.value-1),1)]),_:2},1032,["is-current","onClick"]))),128)),k(p($),{disabled:e.currentPage===f.value,onClick:c[1]||(c[1]=g=>v("page-change",Math.min(h.value+1,f.value)))},null,8,["disabled"])]),_:1}))}});n.__docgenInfo={exportName:"default",displayName:"PaginationBar",type:1,props:[{name:"currentPage",global:!1,description:"현재 페이지 번호",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"totalPages",global:!1,description:"총 페이지 수",tags:[],required:!0,type:"number",declarations:[],schema:"number"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"page-change",description:"",tags:[],type:"[page: number]",signature:'(event: "page-change", page: number): void',declarations:[],schema:["number"]}],slots:[],exposed:[{name:"currentPage",type:"number",description:"현재 페이지 번호",declarations:[],schema:"number"},{name:"totalPages",type:"number",description:"총 페이지 수",declarations:[],schema:"number"}],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/pagination-bar/PaginationBar.vue"};const L={title:"Shared/UI/PaginationBar",component:n,parameters:{layout:"centered",docs:{description:{component:`
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

const currentPage = ref(1);

const handlePageChange = (page) => {
  currentPage.value = page;
  // 데이터 로딩 등 추가 처리
};
<\/script>

<template>
  <PaginationBar
    :current-page="currentPage"
    :total-pages="50"
    @page-change="handlePageChange"
  />
</template>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{currentPage:{control:{type:"number",min:1},description:"현재 페이지 번호",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},totalPages:{control:{type:"number",min:1},description:"총 페이지 수",table:{type:{summary:"number"},defaultValue:{summary:"1"}}}}},o={parameters:{docs:{description:{story:`
다양한 페이지 수에 따른 PaginationBar의 동작을 보여주는 예시입니다.
각 예시는 독립적으로 페이지를 변경할 수 있습니다.

- **5페이지**: 간단한 페이지네이션
- **15페이지**: 두 그룹으로 나뉜 페이지네이션 (1-10, 11-15)
- **2000페이지**: 많은 페이지를 가진 페이지네이션
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),r=a(1),t=a(1);return{page1:e,page2:r,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 5페이지 - 현재 페이지: {{ page1 }}
          </div>
          <PaginationBar
            :current-page="page1"
            :total-pages="5"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 15페이지 - 현재 페이지: {{ page2 }}
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="15"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 2000페이지 - 현재 페이지: {{ page3 }}
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="2000"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})},i={parameters:{docs:{description:{story:`
페이지가 적을 때의 동작입니다. 총 3페이지만 있는 경우입니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{currentPage:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 3
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="3"
          @page-change="(page) => currentPage = page"
        />
      </div>
    `})},l={parameters:{docs:{description:{story:`
정확히 10페이지가 있는 경우입니다. 한 그룹에 모든 페이지가 표시됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{currentPage:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 10
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="10"
          @page-change="(page) => currentPage = page"
        />
      </div>
    `})},d={parameters:{docs:{description:{story:`
여러 그룹으로 나뉜 페이지네이션입니다. 총 25페이지가 있어 3개 그룹으로 나뉩니다.
이전/다음 버튼을 클릭하면 10개 단위로 그룹이 변경됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{currentPage:a(15)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 25
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="25"
          @page-change="(page) => currentPage = page"
        />
      </div>
    `})},u={parameters:{docs:{description:{story:`
많은 페이지를 가진 데이터셋입니다. 100페이지가 있으며, 10개씩 그룹화되어 표시됩니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){return{currentPage:a(1)}},template:`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 100
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="100"
          @page-change="(page) => currentPage = page"
        />
      </div>
    `})},m={parameters:{docs:{description:{story:`
다양한 시작 페이지에서의 PaginationBar 동작을 보여줍니다.
첫 페이지, 중간 페이지, 마지막 페이지에서 시작하는 예시입니다.
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),r=a(15),t=a(50);return{page1:e,page2:r,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            첫 페이지 시작 - 현재: {{ page1 }} / 50
          </div>
          <PaginationBar
            :current-page="page1"
            :total-pages="50"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            중간 페이지 시작 - 현재: {{ page2 }} / 50
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="50"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            마지막 페이지 시작 - 현재: {{ page3 }} / 50
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="50"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})},x={parameters:{docs:{description:{story:`
엣지 케이스를 보여주는 예시입니다.
- 1페이지만 있는 경우
- 11페이지 (두 번째 그룹이 1개만 있는 경우)
- 21페이지 (세 번째 그룹이 1개만 있는 경우)
        `}}},render:()=>({components:{PaginationBar:n},setup(){const e=a(1),r=a(11),t=a(21);return{page1:e,page2:r,page3:t}},template:`
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            1페이지만 있는 경우 - 현재: {{ page1 }} / 1
          </div>
          <PaginationBar
            :current-page="page1"
            :total-pages="1"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            11페이지 (두 번째 그룹이 1개) - 현재: {{ page2 }} / 11
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="11"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            21페이지 (세 번째 그룹이 1개) - 현재: {{ page3 }} / 21
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="21"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
            :current-page="page1"
            :total-pages="5"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 15페이지 - 현재 페이지: {{ page2 }}
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="15"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            총 2000페이지 - 현재 페이지: {{ page3 }}
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="2000"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
      const currentPage = ref(1);
      return {
        currentPage
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 3
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="3"
          @page-change="(page) => currentPage = page"
        />
      </div>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
      const currentPage = ref(1);
      return {
        currentPage
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 10
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="10"
          @page-change="(page) => currentPage = page"
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
      const currentPage = ref(15);
      return {
        currentPage
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 25
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="25"
          @page-change="(page) => currentPage = page"
        />
      </div>
    \`
  })
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
      const currentPage = ref(1);
      return {
        currentPage
      };
    },
    template: /*html*/\`
      <div class="flex flex-col gap-4">
        <div class="text-center text-sm text-gray-600">
          현재 페이지: {{ currentPage }} / 100
        </div>
        <PaginationBar
          :current-page="currentPage"
          :total-pages="100"
          @page-change="(page) => currentPage = page"
        />
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
            :current-page="page1"
            :total-pages="50"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            중간 페이지 시작 - 현재: {{ page2 }} / 50
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="50"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            마지막 페이지 시작 - 현재: {{ page3 }} / 50
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="50"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
            :current-page="page1"
            :total-pages="1"
            @page-change="(page) => page1 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            11페이지 (두 번째 그룹이 1개) - 현재: {{ page2 }} / 11
          </div>
          <PaginationBar
            :current-page="page2"
            :total-pages="11"
            @page-change="(page) => page2 = page"
          />
        </div>
        
        <div class="flex flex-col gap-2">
          <div class="text-center text-sm text-gray-600">
            21페이지 (세 번째 그룹이 1개) - 현재: {{ page3 }} / 21
          </div>
          <PaginationBar
            :current-page="page3"
            :total-pages="21"
            @page-change="(page) => page3 = page"
          />
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};const O=["Examples","FewPages","TenPages","MultipleGroups","LargeDataset","StartingAtDifferentPages","EdgeCases"];export{x as EdgeCases,o as Examples,i as FewPages,u as LargeDataset,d as MultipleGroups,m as StartingAtDifferentPages,l as TenPages,O as __namedExportsOrder,L as default};
