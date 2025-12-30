import{r as c}from"./iframe-VtXMINnB.js";import"./preload-helper-PPVm8Dsz.js";const C={title:"Design System/Colors",parameters:{layout:"padded",docs:{description:{component:`
### 코어 색상 팔레트

프로젝트에서 사용하는 핵심 색상들을 확인할 수 있습니다. 각 색상 박스를 클릭하면 색상 코드가 클립보드에 복사됩니다.

## 주요 색상

- **Primary**: 메인 브랜드 색상 (#6a0028)
- **Secondary**: 보조 색상 (#6b7280)
- **Success**: 성공 상태 표시 (#2e7d32)
- **Warning**: 경고 상태 표시 (#f59e0b)
- **Danger**: 위험/오류 상태 표시 (#ef4444)
- **Info**: 정보 표시 (#0288d1)
        `}}},tags:["autodocs"]},m=[{name:"Primary",value:"#6a0028",description:"메인 브랜드 색상"},{name:"Secondary",value:"#6b7280",description:"보조 색상"},{name:"Success",value:"#2e7d32",description:"성공 상태 표시"},{name:"Warning",value:"#f59e0b",description:"경고 상태 표시"},{name:"Danger",value:"#ef4444",description:"위험/오류 상태 표시"},{name:"Info",value:"#0288d1",description:"정보 표시"}],u=[{name:"Primary Dark",value:"#4a001c",description:"Primary 어두운 색상"},{name:"Primary Light",value:"#8a0034",description:"Primary 밝은 색상"},{name:"Primary Tint",value:"#fce4ec",description:"Primary 틴트 색상"},{name:"Accent Warm",value:"#faf6f1",description:"따뜻한 악센트 색상"},{name:"Purple",value:"#5b28be",description:"보라색"},{name:"Green",value:"#3cb526",description:"초록색"},{name:"Deep Blue",value:"#2f35b7",description:"진한 파란색"}],p=[{name:"Gray 0",value:"#111111",description:"가장 어두운 회색"},{name:"Gray 1",value:"#333333",description:"어두운 회색"},{name:"Gray 2",value:"#999999",description:"중간 회색"},{name:"Gray 3",value:"#cccccc",description:"밝은 회색"},{name:"Gray 4",value:"#e5e5e5",description:"가장 밝은 회색"}],n=i=>({setup(){const a=c(null),t=c(!1);return{colors:i,copiedColor:a,showToast:t,copyToClipboard:async(s,l)=>{try{await navigator.clipboard.writeText(s),a.value=l,t.value=!0,setTimeout(()=>{t.value=!1,setTimeout(()=>{a.value=null},200)},2e3)}catch(d){console.error("클립보드 복사 실패:",d)}},getColorStyle:s=>({backgroundColor:s,width:"6rem",height:"6rem"})}},template:`
    <div class="relative">
      <div class="flex gap-2">
        <div
          v-for="color in colors"
          :key="color.name"
          class="group relative flex flex-col cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
          @click="copyToClipboard(color.value, color.name)"
        >
          <div
            :style="{ 'background-color': color.value, width: '6rem', height: '6rem' }"
            class="rounded-lg shadow-lg border-2 border-gray-300 transition-all duration-300 ease-in-out group-hover:shadow-xl group-hover:border-gray-400"
          ></div>
          <div class="mt-4 text-center">
            <div class="text-base font-semibold text-gray-900">{{ color.name }}</div>
            <div class="text-sm text-gray-600 mt-2 font-mono font-medium">{{ color.value }}</div>
            <div class="text-xs text-gray-500 mt-1">{{ color.description }}</div>
          </div>
          <div
            v-if="copiedColor === color.name && showToast"
            class="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded shadow-lg whitespace-nowrap transition-opacity duration-200"
            style="z-index: 10;"
          >
            복사됨!
          </div>
        </div>
      </div>
    </div>
  `}),e={render:()=>n(m)},r={render:()=>n(u)},o={render:()=>n(p)};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => renderColorPalette(colors)
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => renderColorPalette(secondaryColors)
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => renderColorPalette(grayscaleColors)
}`,...o.parameters?.docs?.source}}};const b=["CoreColors","SecondaryColors","Grayscale"];export{e as CoreColors,o as Grayscale,r as SecondaryColors,b as __namedExportsOrder,C as default};
