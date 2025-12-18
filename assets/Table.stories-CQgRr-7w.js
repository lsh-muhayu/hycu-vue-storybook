import{d as p,e as H,f as C,v as S,o as T,x as F,a as q,B as I,A as i,h as w,u as r,c as h,y as A,n as j}from"./iframe-pcq-uNRx.js";import{r as f,u as y}from"./index-CbAhLYtK.js";import{b as U,_ as E}from"./ScrollAreaAutoSize-CU6WQrb8.js";import"./preload-helper-PPVm8Dsz.js";import"./Primitive-BhW1i0KW.js";const t=p({inheritAttrs:!1,__name:"Table",props:{class:{default:""},showVertical:{type:Boolean,default:!0},showHorizontal:{type:Boolean,default:!0},type:{default:"auto"},dir:{},scrollHideDelay:{},asChild:{type:Boolean},as:{}},setup(s){const e=s,a=f(e,"class","showHorizontal","showVertical"),l=y(a),n=H(()=>C("isolate h-full overflow-hidden rounded bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]",e.class));return(b,x)=>(T(),S(r(E),i(r(l),{"show-horizontal":!1,"show-vertical":!1,class:n.value}),{default:F(()=>[q("table",i(b.$attrs,{class:"h-full w-full border-collapse"}),[w(b.$slots,"default")],16),s.showVertical?(T(),S(r(U),{key:0,orientation:"vertical",class:"z-popover"})):I("",!0),s.showHorizontal?(T(),S(r(U),{key:1,orientation:"horizontal",class:"z-popover"})):I("",!0)]),_:3},16,["class"]))}});t.__docgenInfo={exportName:"default",displayName:"Table",description:"",tags:{},props:[{name:"showHorizontal",description:"가로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"showVertical",description:"세로 스크롤바 표시 여부",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"type",defaultValue:{func:!1,value:"'auto'"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/Table.vue"]};const d=p({__name:"TableHeader",props:{class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("z-thead sticky top-0 bg-gray-50","after:bg-primary after:absolute after:right-0 after:bottom-0 after:left-0 after:h-0.5 after:content-['']","[&_tr]:hover:bg-inherit [&_tr]:data-[selected=true]:bg-inherit",e.class));return(b,x)=>(T(),h("thead",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});d.__docgenInfo={exportName:"default",displayName:"TableHeader",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableHeader.vue"]};const c=p({__name:"TableBody",props:{class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("isolate bg-white",e.class));return(b,x)=>(T(),h("tbody",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});c.__docgenInfo={exportName:"default",displayName:"TableBody",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableBody.vue"]};const D=p({__name:"TableFooter",props:{class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("border-t border-gray-200 bg-white","[&_tr]:hover:bg-inherit [&_tr]:data-[selected=true]:bg-inherit",e.class));return(b,x)=>(T(),h("tfoot",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});D.__docgenInfo={exportName:"default",displayName:"TableFooter",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableFooter.vue"]};const o=p({__name:"TableRow",props:{"data-selected":{type:Boolean,default:void 0},"data-disabled":{type:Boolean,default:void 0},class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("bg-white transition-all duration-200 hover:bg-gray-50","data-[selected=true]:bg-gray-50","data-[disabled=true]:bg-white data-[disabled=true]:opacity-50",e.class));return(b,x)=>(T(),h("tr",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});o.__docgenInfo={exportName:"default",displayName:"TableRow",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableRow.vue"]};const u=p({__name:"TableHead",props:{class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("bg-slate-50 px-3 py-4 text-center text-sm font-bold text-gray-900",e.class));return(b,x)=>(T(),h("th",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});u.__docgenInfo={exportName:"default",displayName:"TableHead",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableHead.vue"]};const m=p({__name:"TableCell",props:{class:{default:""}},setup(s){const e=s,a=f(e,"class"),l=y(a),n=H(()=>C("border-b border-gray-200 px-3 py-4 text-center text-sm text-gray-600",e.class));return(b,x)=>(T(),h("td",i(r(l),{class:n.value}),[w(b.$slots,"default")],16))}});m.__docgenInfo={exportName:"default",displayName:"TableCell",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableCell.vue"]};const P=p({__name:"TableCenterRow",props:{class:{default:""}},setup(s){const e=s,a=H(()=>C("absolute top-[calc(50%+1rem)] left-[50%] translate-x-[-50%] translate-y-[-50%] hover:bg-transparent",e.class));return(l,n)=>(T(),S(r(o),{class:j(a.value)},{default:F(()=>[A(r(m),{class:"border-none text-center"},{default:F(()=>[w(l.$slots,"default")]),_:3})]),_:3},8,["class"]))}});P.__docgenInfo={exportName:"default",displayName:"TableCenterRow",description:"",tags:{},props:[{name:"class",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],slots:[{name:"default"}],sourceFiles:["/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/table/TableCenterRow.vue"]};const K={title:"Shared/UI/Table",component:t,parameters:{layout:"padded",docs:{description:{component:`
### 테이블 컴포넌트

Table 컴포넌트는 구조화된 데이터를 행과 열로 표시하는 컴포넌트입니다.
ScrollArea를 기반으로 구축되어 많은 데이터가 있을 때 자동 스크롤을 지원합니다.

## 주요 기능

- **복합 컴포넌트 구조**: \`Table\`, \`TableHeader\`, \`TableBody\`, \`TableFooter\`, \`TableRow\`, \`TableHead\`, \`TableCell\`, \`TableCenterRow\`로 구성
- **스크롤 지원**: 많은 데이터가 있을 때 수직/수평 스크롤 자동 지원
- **Sticky 헤더**: 헤더가 상단에 고정되어 스크롤 시에도 항상 보임
- **호버 효과**: 행에 마우스를 올리면 배경색이 변경되어 가독성 향상
- **빈 상태 지원**: \`TableCenterRow\`를 사용하여 빈 상태, 로딩, 에러 등의 피드백 표시
- **커스터마이징**: \`class\`를 통해 각 부분의 스타일 커스터마이징 가능

## 사용 예시

\`\`\`vue
<Table>
  <TableHeader>
    <TableRow>
      <TableHead>이름</TableHead>
      <TableHead>이메일</TableHead>
      <TableHead>역할</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell>홍길동</TableCell>
      <TableCell>hong@example.com</TableCell>
      <TableCell>관리자</TableCell>
    </TableRow>
  </TableBody>
</Table>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{showVertical:{control:"boolean",description:"수직 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},showHorizontal:{control:"boolean",description:"수평 스크롤바 표시 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},z=[{id:1,name:"홍길동",email:"hong@example.com",role:"관리자",status:"활성"},{id:2,name:"김철수",email:"kim@example.com",role:"사용자",status:"활성"},{id:3,name:"이영희",email:"lee@example.com",role:"사용자",status:"비활성"},{id:4,name:"박민수",email:"park@example.com",role:"관리자",status:"활성"},{id:5,name:"정수진",email:"jung@example.com",role:"사용자",status:"활성"}],g={render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{sampleUsers:z}},template:`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">기본 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `})},R={render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableFooter:D,TableRow:o,TableHead:u,TableCell:m},template:`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">Footer가 있는 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>항목</TableHead>
              <TableHead>수량</TableHead>
              <TableHead>단가</TableHead>
              <TableHead>합계</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>상품 A</TableCell>
              <TableCell>10</TableCell>
              <TableCell>1,000원</TableCell>
              <TableCell>10,000원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상품 B</TableCell>
              <TableCell>5</TableCell>
              <TableCell>2,000원</TableCell>
              <TableCell>10,000원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상품 C</TableCell>
              <TableCell>3</TableCell>
              <TableCell>3,000원</TableCell>
              <TableCell>9,000원</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colspan="3" class="text-right font-semibold">
                총합계
              </TableCell>
              <TableCell class="font-semibold">29,000원</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    `})},v={parameters:{docs:{description:{story:`
이 스토리는 많은 데이터가 있는 테이블을 보여줍니다.
테이블이 컨테이너 높이를 초과하면 자동으로 스크롤바가 표시됩니다.
헤더는 sticky로 고정되어 있어 스크롤 시에도 항상 보입니다.
        `}}},render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{users:Array.from({length:50}).map((e,a)=>({id:a,name:`사용자 ${a+1}`,email:`user${a+1}@example.com`,role:a%3===0?"관리자":"사용자",status:a%2===0?"활성":"비활성",joinDate:`2024-01-${a%30+1}`}))}},template:`
      <div class="h-96 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>가입일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>{{ user.id + 1 }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>{{ user.joinDate }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `})},_={parameters:{docs:{description:{story:`
이 스토리는 빈 상태를 보여주는 테이블을 보여줍니다.
\`TableCenterRow\`를 사용하여 테이블 중앙에 메시지를 표시할 수 있습니다.
로딩, 에러, 빈 데이터 등의 피드백을 표시하는 데 유용합니다.
        `}}},render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCenterRow:P},template:`
      <div class="relative h-64 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">빈 상태 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCenterRow>
              <div class="flex flex-col items-center gap-2">
                <p class="text-sm text-gray-500">데이터가 없습니다</p>
                <p class="text-xs text-gray-400">새로운 데이터를 추가해보세요</p>
              </div>
            </TableCenterRow>
          </TableBody>
        </Table>
      </div>
    `})},B={render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCenterRow:P},template:`
      <div class="relative h-64 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">로딩 상태 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCenterRow>
              <div class="flex items-center gap-2">
                <div class="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                <p class="text-sm text-gray-500">로딩 중...</p>
              </div>
            </TableCenterRow>
          </TableBody>
        </Table>
      </div>
    `})},k={render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{sampleUsers:z}},template:`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">커스텀 스타일 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-1/4">이름</TableHead>
              <TableHead class="w-1/2">이메일</TableHead>
              <TableHead class="w-1/4 text-center">역할</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell class="font-medium">{{ user.name }}</TableCell>
              <TableCell class="text-gray-600">{{ user.email }}</TableCell>
              <TableCell class="text-center">
                <span
                  :class="[
                    'inline-flex rounded-full px-2 py-1 text-xs font-medium',
                    user.role === '관리자'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  ]"
                >
                  {{ user.role }}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `})},V={parameters:{docs:{description:{story:`
이 스토리는 많은 열이 있는 넓은 테이블을 보여줍니다.
테이블이 컨테이너 너비를 초과하면 수평 스크롤바가 자동으로 표시됩니다.
        `}}},render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{sampleUsers:z}},template:`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">넓은 테이블 (수평 스크롤)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>전화번호</TableHead>
              <TableHead>부서</TableHead>
              <TableHead>직급</TableHead>
              <TableHead>입사일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>마지막 로그인</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.id }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>개발팀</TableCell>
              <TableCell>선임</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>2024-01-20 14:30</TableCell>
              <TableCell>
                <button class="text-blue-600 hover:underline">수정</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `})},$={parameters:{docs:{description:{story:`
이 스토리는 가로로 매우 긴 테이블을 보여줍니다.
테이블이 컨테이너 너비를 크게 초과하여 수평 스크롤이 필수적으로 발생합니다.
많은 열과 긴 텍스트를 포함하여 실제 사용 시나리오를 시뮬레이션합니다.
        `}}},render:()=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{sampleUsers:z}},template:`
      <div class="w-full max-w-2xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">가로 스크롤 테이블 (매우 넓음)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="min-w-[100px]">ID</TableHead>
              <TableHead class="min-w-[150px]">이름</TableHead>
              <TableHead class="min-w-[200px]">이메일 주소</TableHead>
              <TableHead class="min-w-[150px]">전화번호</TableHead>
              <TableHead class="min-w-[200px]">부서명</TableHead>
              <TableHead class="min-w-[120px]">직급</TableHead>
              <TableHead class="min-w-[150px]">입사일</TableHead>
              <TableHead class="min-w-[100px]">상태</TableHead>
              <TableHead class="min-w-[180px]">마지막 로그인 시간</TableHead>
              <TableHead class="min-w-[200px]">주소 (상세 주소 포함)</TableHead>
              <TableHead class="min-w-[150px]">비고 및 특이사항</TableHead>
              <TableHead class="min-w-[120px]">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.id }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>소프트웨어 개발팀</TableCell>
              <TableCell>선임 개발자</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>2024-01-20 14:30:25</TableCell>
              <TableCell>서울특별시 강남구 테헤란로 123길 45, 101동 101호</TableCell>
              <TableCell>정기 점검 완료, 추가 교육 필요</TableCell>
              <TableCell>
                <button class="text-blue-600 hover:underline">수정</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `})},N={render:s=>({components:{Table:t,TableHeader:d,TableBody:c,TableRow:o,TableHead:u,TableCell:m},setup(){return{users:Array.from({length:20}).map((a,l)=>({id:l,name:`사용자 ${l+1}`,email:`user${l+1}@example.com`,role:l%3===0?"관리자":"사용자",status:l%2===0?"활성":"비활성"})),args:s}},template:`
      <div class="h-96 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">인터랙티브 플레이그라운드</h3>
        <Table :show-vertical="args.showVertical" :show-horizontal="args.showHorizontal">
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    `}),parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Table 컴포넌트의 스크롤 관련 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 `showVertical`, `showHorizontal` 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Show Vertical**: `false`로 설정하면 수직 스크롤바가 표시되지 않습니다.\n- **Show Horizontal**: `false`로 설정하면 수평 스크롤바가 표시되지 않습니다.\n        "}}},args:{showVertical:!0,showHorizontal:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      return {
        sampleUsers
      };
    },
    template: /*html*/\`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">기본 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...g.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableFooter,
      TableRow,
      TableHead,
      TableCell
    },
    template: /*html*/\`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">Footer가 있는 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>항목</TableHead>
              <TableHead>수량</TableHead>
              <TableHead>단가</TableHead>
              <TableHead>합계</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>상품 A</TableCell>
              <TableCell>10</TableCell>
              <TableCell>1,000원</TableCell>
              <TableCell>10,000원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상품 B</TableCell>
              <TableCell>5</TableCell>
              <TableCell>2,000원</TableCell>
              <TableCell>10,000원</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>상품 C</TableCell>
              <TableCell>3</TableCell>
              <TableCell>3,000원</TableCell>
              <TableCell>9,000원</TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colspan="3" class="text-right font-semibold">
                총합계
              </TableCell>
              <TableCell class="font-semibold">29,000원</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    \`
  })
}`,...R.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 데이터가 있는 테이블을 보여줍니다.
테이블이 컨테이너 높이를 초과하면 자동으로 스크롤바가 표시됩니다.
헤더는 sticky로 고정되어 있어 스크롤 시에도 항상 보입니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      const users = Array.from({
        length: 50
      }).map((_, index) => ({
        id: index,
        name: \`사용자 \${index + 1}\`,
        email: \`user\${index + 1}@example.com\`,
        role: index % 3 === 0 ? '관리자' : '사용자',
        status: index % 2 === 0 ? '활성' : '비활성',
        joinDate: \`2024-01-\${index % 30 + 1}\`
      }));
      return {
        users
      };
    },
    template: /*html*/\`
      <div class="h-96 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">스크롤 가능한 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>가입일</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>{{ user.id + 1 }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>{{ user.joinDate }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...v.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 빈 상태를 보여주는 테이블을 보여줍니다.
\\\`TableCenterRow\\\`를 사용하여 테이블 중앙에 메시지를 표시할 수 있습니다.
로딩, 에러, 빈 데이터 등의 피드백을 표시하는 데 유용합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCenterRow
    },
    template: /*html*/\`
      <div class="relative h-64 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">빈 상태 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCenterRow>
              <div class="flex flex-col items-center gap-2">
                <p class="text-sm text-gray-500">데이터가 없습니다</p>
                <p class="text-xs text-gray-400">새로운 데이터를 추가해보세요</p>
              </div>
            </TableCenterRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,..._.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCenterRow
    },
    template: /*html*/\`
      <div class="relative h-64 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">로딩 상태 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableCenterRow>
              <div class="flex items-center gap-2">
                <div class="h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600"></div>
                <p class="text-sm text-gray-500">로딩 중...</p>
              </div>
            </TableCenterRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...B.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      return {
        sampleUsers
      };
    },
    template: /*html*/\`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">커스텀 스타일 테이블</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-1/4">이름</TableHead>
              <TableHead class="w-1/2">이메일</TableHead>
              <TableHead class="w-1/4 text-center">역할</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell class="font-medium">{{ user.name }}</TableCell>
              <TableCell class="text-gray-600">{{ user.email }}</TableCell>
              <TableCell class="text-center">
                <span
                  :class="[
                    'inline-flex rounded-full px-2 py-1 text-xs font-medium',
                    user.role === '관리자'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-gray-100 text-gray-800'
                  ]"
                >
                  {{ user.role }}
                </span>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...k.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 많은 열이 있는 넓은 테이블을 보여줍니다.
테이블이 컨테이너 너비를 초과하면 수평 스크롤바가 자동으로 표시됩니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      return {
        sampleUsers
      };
    },
    template: /*html*/\`
      <div class="w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">넓은 테이블 (수평 스크롤)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>전화번호</TableHead>
              <TableHead>부서</TableHead>
              <TableHead>직급</TableHead>
              <TableHead>입사일</TableHead>
              <TableHead>상태</TableHead>
              <TableHead>마지막 로그인</TableHead>
              <TableHead>작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.id }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>개발팀</TableCell>
              <TableCell>선임</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>2024-01-20 14:30</TableCell>
              <TableCell>
                <button class="text-blue-600 hover:underline">수정</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...V.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
이 스토리는 가로로 매우 긴 테이블을 보여줍니다.
테이블이 컨테이너 너비를 크게 초과하여 수평 스크롤이 필수적으로 발생합니다.
많은 열과 긴 텍스트를 포함하여 실제 사용 시나리오를 시뮬레이션합니다.
        \`
      }
    }
  },
  render: () => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      return {
        sampleUsers
      };
    },
    template: /*html*/\`
      <div class="w-full max-w-2xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">가로 스크롤 테이블 (매우 넓음)</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="min-w-[100px]">ID</TableHead>
              <TableHead class="min-w-[150px]">이름</TableHead>
              <TableHead class="min-w-[200px]">이메일 주소</TableHead>
              <TableHead class="min-w-[150px]">전화번호</TableHead>
              <TableHead class="min-w-[200px]">부서명</TableHead>
              <TableHead class="min-w-[120px]">직급</TableHead>
              <TableHead class="min-w-[150px]">입사일</TableHead>
              <TableHead class="min-w-[100px]">상태</TableHead>
              <TableHead class="min-w-[180px]">마지막 로그인 시간</TableHead>
              <TableHead class="min-w-[200px]">주소 (상세 주소 포함)</TableHead>
              <TableHead class="min-w-[150px]">비고 및 특이사항</TableHead>
              <TableHead class="min-w-[120px]">작업</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in sampleUsers" :key="user.id">
              <TableCell>{{ user.id }}</TableCell>
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>010-1234-5678</TableCell>
              <TableCell>소프트웨어 개발팀</TableCell>
              <TableCell>선임 개발자</TableCell>
              <TableCell>2024-01-15</TableCell>
              <TableCell>{{ user.status }}</TableCell>
              <TableCell>2024-01-20 14:30:25</TableCell>
              <TableCell>서울특별시 강남구 테헤란로 123길 45, 101동 101호</TableCell>
              <TableCell>정기 점검 완료, 추가 교육 필요</TableCell>
              <TableCell>
                <button class="text-blue-600 hover:underline">수정</button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  })
}`,...$.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => ({
    components: {
      Table,
      TableHeader,
      TableBody,
      TableRow,
      TableHead,
      TableCell
    },
    setup() {
      const users = Array.from({
        length: 20
      }).map((_, index) => ({
        id: index,
        name: \`사용자 \${index + 1}\`,
        email: \`user\${index + 1}@example.com\`,
        role: index % 3 === 0 ? '관리자' : '사용자',
        status: index % 2 === 0 ? '활성' : '비활성'
      }));
      return {
        users,
        args
      };
    },
    template: /*html*/\`
      <div class="h-96 w-full max-w-4xl">
        <h3 class="mb-4 text-sm font-semibold text-gray-700">인터랙티브 플레이그라운드</h3>
        <Table :show-vertical="args.showVertical" :show-horizontal="args.showHorizontal">
          <TableHeader>
            <TableRow>
              <TableHead>이름</TableHead>
              <TableHead>이메일</TableHead>
              <TableHead>역할</TableHead>
              <TableHead>상태</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell>{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>{{ user.role }}</TableCell>
              <TableCell>{{ user.status }}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    \`
  }),
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Table 컴포넌트의 스크롤 관련 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 \\\`showVertical\\\`, \\\`showHorizontal\\\` 속성을 변경해보세요.

## 사용 팁

- **Show Vertical**: \\\`false\\\`로 설정하면 수직 스크롤바가 표시되지 않습니다.
- **Show Horizontal**: \\\`false\\\`로 설정하면 수평 스크롤바가 표시되지 않습니다.
        \`
      }
    }
  },
  args: {
    showVertical: true,
    showHorizontal: true
  } as Record<string, unknown>
}`,...N.parameters?.docs?.source}}};const M=["Basic","WithFooter","Scrollable","EmptyState","LoadingState","CustomStyles","WideTable","HorizontalScroll","Playground"];export{g as Basic,k as CustomStyles,_ as EmptyState,$ as HorizontalScroll,B as LoadingState,N as Playground,v as Scrollable,V as WideTable,R as WithFooter,M as __namedExportsOrder,K as default};
