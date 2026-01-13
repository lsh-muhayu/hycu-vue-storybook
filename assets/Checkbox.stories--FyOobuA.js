import{_ as s}from"./Checkbox-oI6MA9gU.js";import{d as C,r as v,c as g,o as h,a as e,l as n,t as m,m as B}from"./iframe-CgXrqKC9.js";import"./useForwardPropsEmits-Djr-TEmx.js";import"./index-CzYMvuKc.js";import"./Primitive-BDokZAOe.js";import"./nullish-CHIgUVhi.js";import"./ohash.D__AXeF1-C-E83dC9.js";import"./useFormControl-w8odt80l.js";import"./RovingFocusItem-eMYp3u-8.js";import"./useId-Crhis9Iy.js";import"./Collection-DyuPz1aO.js";import"./usePrimitiveElement-B7BF9UCU.js";import"./RovingFocusGroup-dNtiwLKI.js";import"./useDirection-DpoTRxX3.js";import"./getActiveElement-FUKBWQwh.js";import"./VisuallyHiddenInput-CFQ6j4sZ.js";import"./VisuallyHidden-lJzdlc32.js";import"./Presence-DtwRCaVs.js";import"./check-B_GoiCJV.js";import"./preload-helper-PPVm8Dsz.js";const D={class:"flex flex-col gap-6"},w={class:"flex flex-col gap-4"},A={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},E={class:"flex items-center gap-3"},z={class:"flex flex-col"},_={class:"text-xs text-gray-500"},V={class:"flex items-center gap-3"},S={class:"flex flex-col"},P={class:"text-xs text-gray-500"},F={class:"flex items-center gap-3"},U={class:"flex flex-col"},I={class:"text-xs text-gray-500"},y=C({__name:"Controlled.stories",setup(f){const t=v(!1),l=v(!0),i=v("indeterminate"),k=()=>{t.value=!t.value,l.value=!l.value,i.value=i.value==="indeterminate"?!1:"indeterminate"};return(K,a)=>(h(),g("div",D,[e("div",w,[a[6]||(a[6]=e("div",{class:"flex flex-col gap-2"},[e("h3",{class:"text-sm font-semibold text-gray-700"},"제어 컴포넌트 예시"),e("p",{class:"text-xs text-gray-500"}," 부모 컴포넌트가 v-model을 통해 상태를 제어합니다. 체크박스를 클릭하면 상태가 변경되고, 부모에서 상태를 변경하면 체크박스가 즉시 반영됩니다. ")],-1)),e("div",A,[e("div",E,[n(s,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=c=>t.value=c)},null,8,["modelValue"]),e("div",z,[a[3]||(a[3]=e("span",{class:"text-sm text-gray-700"},"체크박스 1",-1)),e("span",_,"현재 상태: "+m(String(t.value)),1)])]),e("div",V,[n(s,{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=c=>l.value=c)},null,8,["modelValue"]),e("div",S,[a[4]||(a[4]=e("span",{class:"text-sm text-gray-700"},"체크박스 2",-1)),e("span",P,"현재 상태: "+m(String(l.value)),1)])]),e("div",F,[n(s,{modelValue:i.value,"onUpdate:modelValue":a[2]||(a[2]=c=>i.value=c)},null,8,["modelValue"]),e("div",U,[a[5]||(a[5]=e("span",{class:"text-sm text-gray-700"},"체크박스 3 (Indeterminate)",-1)),e("span",I,"현재 상태: "+m(String(i.value)),1)])])]),e("div",{class:"flex gap-2"},[e("button",{class:"bg-primary hover:bg-primary-dark rounded px-3 py-1.5 text-xs font-medium text-white transition-colors",onClick:k}," 부모에서 상태 변경 ")])])]))}});y.__docgenInfo={exportName:"default",displayName:"Controlled.stories",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/stories/Controlled.stories.vue"};const N={class:"flex flex-col gap-6"},q={class:"flex flex-col gap-4"},R={class:"flex flex-col gap-4 rounded-lg border border-gray-200 p-4"},W={class:"flex items-center gap-3"},$={class:"flex items-center gap-3"},O={class:"flex items-center gap-3"},b=C({__name:"Uncontrolled.stories",setup(f){return(t,l)=>(h(),g("div",N,[e("div",q,[l[3]||(l[3]=e("div",{class:"flex flex-col gap-2"},[e("h3",{class:"text-sm font-semibold text-gray-700"},"비제어 컴포넌트 예시"),e("p",{class:"text-xs text-gray-500"}," 각 체크박스가 자체적으로 상태를 관리합니다. 부모는 초기값(`defaultValue`)만 설정하며, 이후 상태 변경은 컴포넌트 내부에서 처리됩니다. ")],-1)),e("div",R,[e("div",W,[n(s,{"default-value":!1}),l[0]||(l[0]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 1"),e("span",{class:"text-xs text-gray-500"},"초기값: false (자체 상태 관리)")],-1))]),e("div",$,[n(s,{"default-value":!0}),l[1]||(l[1]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 2"),e("span",{class:"text-xs text-gray-500"},"초기값: true (자체 상태 관리)")],-1))]),e("div",O,[n(s,{"default-value":"indeterminate"}),l[2]||(l[2]=e("div",{class:"flex flex-col"},[e("span",{class:"text-sm text-gray-700"},"체크박스 3"),e("span",{class:"text-xs text-gray-500"},"초기값: indeterminate (자체 상태 관리)")],-1))])]),l[4]||(l[4]=e("div",{class:"rounded-lg border border-blue-200 bg-blue-50 p-3"},[e("p",{class:"text-xs text-blue-800"},[e("strong",null,"참고:"),B(" 비제어 컴포넌트는 자체적으로 상태를 관리하므로, 부모 컴포넌트에서 상태를 직접 변경할 수 없습니다. 폼 제출 시에는 ref를 통해 현재 값을 가져올 수 있습니다. ")])],-1))])]))}});b.__docgenInfo={exportName:"default",displayName:"Uncontrolled.stories",type:1,props:[{name:"class",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"key",global:!1,description:"",tags:[],required:!1,type:"PropertyKey",declarations:[],schema:{kind:"enum",type:"PropertyKey",schema:["string","number","symbol"]}},{name:"ref",global:!1,description:"",tags:[],required:!1,type:"VNodeRef",declarations:[],schema:{kind:"enum",type:"VNodeRef",schema:["string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any>, refs: Record<...>): void"}]}},{name:"ref_for",global:!1,description:"",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"ref_key",global:!1,description:"",tags:[],required:!1,type:"string",declarations:[],schema:"string"},{name:"style",global:!1,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/github-runner/_work/ck-tms-hycu/ck-tms-hycu/frontend/src/shared/ui/checkbox/stories/Uncontrolled.stories.vue"};const oe={title:"Shared/UI/Checkbox",component:s,parameters:{layout:"centered",controls:{include:["color","invalid","disabled","defaultValue"]},docs:{description:{component:'\n### 사용자 선택을 위한 체크박스 컴포넌트\n\n체크박스 컴포넌트는 사용자가 하나 이상의 옵션을 선택할 수 있도록 하는 데 사용됩니다. 다양한 색상 및 상태를 지원합니다.\n\n## 주요 기능\n\n- **다양한 색상 옵션**: `primary`, `secondary`, `danger`, `success`, `warning` 색상 지원\n- **세 가지 상태**: `checked` (선택됨), `unchecked` (선택 안 됨), `indeterminate` (부분 선택)\n- **유효성 검사**: `invalid` prop을 통해 에러 상태 표시\n- **비활성화 지원**: `disabled` prop으로 비활성화 상태 제공\n- **접근성 지원**: 키보드 포커스 및 스크린 리더 지원\n- **포커스 관리**: 키보드 포커스 시 시각적 피드백 제공\n\n## 사용 예시\n\n```vue\n<Checkbox defaultValue={true} color="primary" />\n```\n        '}}},tags:["autodocs"],argTypes:{color:{control:"select",options:["primary","secondary","danger","success","warning"],description:"체크박스의 색상",table:{type:{summary:"'primary' | 'secondary' | 'danger' | 'success' | 'warning'"},defaultValue:{summary:"'primary'"}}},invalid:{control:"boolean",description:"유효하지 않은 상태 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},disabled:{control:"boolean",description:"체크박스 비활성화 여부",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultValue:{control:"select",options:[!1,!0,"indeterminate"],description:"체크박스의 초기값 (비제어 컴포넌트)",table:{type:{summary:'boolean | "indeterminate"'},defaultValue:{summary:"false"}}}}},d={parameters:{controls:{disable:!1},docs:{description:{story:"\n이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.\n오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.\n\n## 사용 팁\n\n- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: `danger`는 위험한 작업에 사용, `success`는 성공 상태에 사용).\n- **Invalid**: `true`로 설정하면 체크박스가 에러 상태로 표시됩니다.\n- **Disabled**: `true`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.\n- **DefaultValue**: 체크박스의 초기값을 설정합니다. `true`는 체크됨, `false`는 체크 안 됨, `indeterminate`는 부분 선택 상태입니다.\n        "}}},args:{color:"primary",invalid:!1,disabled:!1,defaultValue:!1},render:f=>({components:{Checkbox:s},setup(){return{args:f}},template:'<Checkbox v-bind="args" />'})},o={render:()=>({components:{Checkbox:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="false" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="false" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="false" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="false" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="false" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    `})},x={render:()=>({components:{Checkbox:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 상태 (Normal State)</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" disabled />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" invalid />
              </div>
            </div>
          </div>
        </div>
      </div>
    `})},r={render:()=>({components:{Checkbox:s},template:`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">모든 색상 (size-6)</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    `})},u={parameters:{docs:{description:{story:`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \`v-model\`을 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \`v-model\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const checked = ref(false);
<\/script>

<template>
  <Checkbox v-model="checked" />
  <p>현재 상태: {{ checked }}</p>
</template>
\`\`\`
        `}}},render:()=>({components:{ControlledExample:y},template:"<ControlledExample />"})},p={parameters:{docs:{description:{story:`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\`defaultValue\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\`defaultValue\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다

## 사용 예시

\`\`\`vue
<template>
  <Checkbox defaultValue={true} />
  <Checkbox defaultValue={false} />
  <Checkbox defaultValue="indeterminate" />
</template>
\`\`\`
        `}}},render:()=>({components:{UncontrolledExample:b},template:"<UncontrolledExample />"})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: false
    },
    docs: {
      description: {
        story: \`
이 스토리에서는 Checkbox 컴포넌트의 모든 속성을 인터랙티브하게 조정할 수 있습니다.
오른쪽 컨트롤 패널을 사용하여 color, invalid, disabled, defaultValue 등의 속성을 변경해보세요.

## 사용 팁

- **Color**: 체크박스의 색상을 선택합니다. 각 색상은 의미에 따라 사용하세요 (예: \\\`danger\\\`는 위험한 작업에 사용, \\\`success\\\`는 성공 상태에 사용).
- **Invalid**: \\\`true\\\`로 설정하면 체크박스가 에러 상태로 표시됩니다.
- **Disabled**: \\\`true\\\`로 설정하면 체크박스가 비활성화되어 클릭할 수 없습니다.
- **DefaultValue**: 체크박스의 초기값을 설정합니다. \\\`true\\\`는 체크됨, \\\`false\\\`는 체크 안 됨, \\\`indeterminate\\\`는 부분 선택 상태입니다.
        \`
      }
    }
  },
  args: {
    color: 'primary',
    invalid: false,
    disabled: false,
    defaultValue: false
  },
  render: (args: CheckboxProps) => ({
    components: {
      Checkbox
    },
    setup() {
      return {
        args
      };
    },
    /*html*/
    template: \`<Checkbox v-bind="args" />\`
  })
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="false" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="false" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="false" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="false" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="false" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" default-value="indeterminate" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">기본 상태 (Normal State)</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Disabled 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" disabled />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" disabled />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" disabled />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Invalid 상태</h3>
          <div class="flex flex-col gap-3">
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="false" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="false" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" :default-value="true" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" :default-value="true" invalid />
              </div>
            </div>
            <div class="flex gap-4">
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="primary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="secondary" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="danger" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="success" default-value="indeterminate" invalid />
              </div>
              <div class="flex flex-col items-center gap-2">
                <Checkbox color="warning" default-value="indeterminate" invalid />
              </div>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...x.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => ({
    components: {
      Checkbox
    },
    /*html*/
    template: \`
      <div class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Unchecked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="false" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Checked</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox :default-value="true" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">Indeterminate</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-3" style="width: 12px; height: 12px; min-width: 12px; min-height: 12px;" />
              <span class="text-xs text-gray-600">3 (12px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-4" style="width: 16px; height: 16px; min-width: 16px; min-height: 16px;" />
              <span class="text-xs text-gray-600">4 (16px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-5" style="width: 20px; height: 20px; min-width: 20px; min-height: 20px;" />
              <span class="text-xs text-gray-600">5 (20px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-6" style="width: 24px; height: 24px; min-width: 24px; min-height: 24px;" />
              <span class="text-xs text-gray-600">6 (24px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-8" style="width: 32px; height: 32px; min-width: 32px; min-height: 32px;" />
              <span class="text-xs text-gray-600">8 (32px)</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox default-value="indeterminate" class="size-10" style="width: 40px; height: 40px; min-width: 40px; min-height: 40px;" />
              <span class="text-xs text-gray-600">10 (40px)</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <h3 class="text-sm font-semibold text-gray-700">모든 색상 (size-6)</h3>
          <div class="flex gap-4">
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="primary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Primary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="secondary" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Secondary</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="danger" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Danger</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="success" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Success</span>
            </div>
            <div class="flex flex-col items-center gap-2">
              <Checkbox color="warning" :default-value="true" class="size-6" />
              <span class="text-xs text-gray-600">Warning</span>
            </div>
          </div>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
제어 컴포넌트(Controlled Component) 방식입니다. 부모 컴포넌트가 \\\`v-model\\\`을 통해 체크박스의 상태를 완전히 제어합니다.

## 특징

- 부모 컴포넌트가 상태를 소유하고 관리합니다
- 상태 변경은 \\\`v-model\\\`을 통해 부모로 전달됩니다
- 부모가 상태를 변경하면 체크박스가 즉시 반영됩니다
- 폼 라이브러리나 복잡한 상태 관리가 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<script setup>
import { ref } from 'vue';
import Checkbox from './Checkbox.vue';

const checked = ref(false);
<\/script>

<template>
  <Checkbox v-model="checked" />
  <p>현재 상태: {{ checked }}</p>
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
    template: \`<ControlledExample />\`
  })
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: \`
비제어 컴포넌트(Uncontrolled Component) 방식입니다. 컴포넌트가 자체적으로 상태를 관리하며, 부모는 초기값(\\\`defaultValue\\\`)만 설정합니다.

## 특징

- 컴포넌트가 자체적으로 상태를 관리합니다
- 부모는 초기값(\\\`defaultValue\\\`)만 설정합니다
- 상태 변경은 컴포넌트 내부에서 처리됩니다
- 간단한 사용 사례나 폼 제출 시 값만 필요한 경우에 적합합니다

## 사용 예시

\\\`\\\`\\\`vue
<template>
  <Checkbox defaultValue={true} />
  <Checkbox defaultValue={false} />
  <Checkbox defaultValue="indeterminate" />
</template>
\\\`\\\`\\\`
        \`
      }
    }
  },
  render: () => ({
    components: {
      UncontrolledExample
    },
    /*html*/
    template: \`<UncontrolledExample />\`
  })
}`,...p.parameters?.docs?.source}}};const xe=["Playground","Colors","States","Sizes","Controlled","Uncontrolled"];export{o as Colors,u as Controlled,d as Playground,r as Sizes,x as States,p as Uncontrolled,xe as __namedExportsOrder,oe as default};
