import"./iframe-Dx8sBTGH.js";import{c as a,_ as i,b as t,a as e}from"./PaginationPrevious-Bg9PkhNE.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Shared/UI/Pagination",component:a,parameters:{layout:"centered",docs:{description:{component:`
### 페이지네이션 컴포넌트

Pagination 컴포넌트는 여러 페이지로 나누어진 콘텐츠를 탐색하는 데 사용됩니다.
사용자가 페이지 간 이동을 쉽게 할 수 있도록 직관적인 UI를 제공합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Pagination\`, \`PaginationItem\`, \`PaginationNext\`, \`PaginationPrevious\`로 구성
- **현재 페이지 표시**: 활성 페이지가 시각적으로 강조되어 사용자가 현재 위치를 쉽게 파악 가능
- **호버 효과**: 페이지 번호에 마우스를 올리면 Primary 색상으로 변경되어 클릭 가능성 표시
- **접근성 지원**: \`aria-current\`와 \`aria-label\` 속성으로 스크린 리더 지원
- **디자인 시스템 준수**: HTML 컴포넌트 가이드의 Pagination 디자인 적용
- **커스터마이징**: \`class\`를 통해 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<Pagination>
  <PaginationPrevious />
  <PaginationItem :is-current="currentPage === 1">1</PaginationItem>
  <PaginationItem :is-current="currentPage === 2">2</PaginationItem>
  <PaginationItem :is-current="currentPage === 3">3</PaginationItem>
  <PaginationNext />
</Pagination>
\`\`\`
        `}}},tags:["autodocs"]},n={parameters:{docs:{description:{story:`
기본 페이지네이션입니다. 이전/다음 버튼과 페이지 번호를 포함합니다.
        `}}},render:()=>({components:{Pagination:a,PaginationItem:e,PaginationNext:t,PaginationPrevious:i},template:`
      <Pagination>
        <PaginationPrevious />
        <PaginationItem>1</PaginationItem>
        <PaginationItem :is-current="true">2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <PaginationItem>6</PaginationItem>
        <PaginationItem :disabled="true">7</PaginationItem>
        <PaginationItem>8</PaginationItem>
        <PaginationItem>9</PaginationItem>
        <PaginationNext />
      </Pagination>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
기본 페이지네이션입니다. 이전/다음 버튼과 페이지 번호를 포함합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Pagination,
      PaginationItem,
      PaginationNext,
      PaginationPrevious
    },
    template: /*html*/\`
      <Pagination>
        <PaginationPrevious />
        <PaginationItem>1</PaginationItem>
        <PaginationItem :is-current="true">2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>4</PaginationItem>
        <PaginationItem>5</PaginationItem>
        <PaginationItem>6</PaginationItem>
        <PaginationItem :disabled="true">7</PaginationItem>
        <PaginationItem>8</PaginationItem>
        <PaginationItem>9</PaginationItem>
        <PaginationNext />
      </Pagination>
    \`
  })
}`,...n.parameters?.docs?.source}}};const r=["Basic"];export{n as Basic,r as __namedExportsOrder,m as default};
