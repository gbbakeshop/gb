import{r as o,j as r,a as t}from"./app-7fb59a5e.js";import{m as h}from"./moment-ede8cb49.js";import N from"./raw-materials-form-3b7afae3.js";import u from"./raw-materials-edit-75832f47.js";import b from"./raw-materials-delete-ccb70dcb.js";import g from"./raw-materials-create-30bc516e.js";import w from"./raw-materials-add-3bf827e0.js";import{g as y}from"./ingredients-services-b7ab281b.js";import"./x-mark-icon-1f890bca.js";import"./input-2729d313.js";import"./useDispatch-19790469.js";import"./transition-46023121.js";import"./open-closed-88cf6580.js";import"./dialog-53ad0003.js";import"./keyboard-d78ca1c4.js";import"./hidden-e6878c7b.js";import"./pencil-icon-743d10de.js";import"./raw-materials-services-6f6540a5.js";import"./trash-icon-7fce7687.js";import"./sweetalert2.all-9737a668.js";import"./plus-icon-e262b8df.js";function K({data:l}){const[a,m]=o.useState([]),[d,c]=o.useState([]);function s(e){return a.find(i=>i===e)}o.useEffect(()=>{y().then(e=>{c(e.status)})},[]);function n(e){if(s(e)==null)m([...a,e]);else{const f=a.filter(x=>x!==e);m(f)}}const p=[{title:"Name of Raw Materials"},{title:"Bind"},{title:"Created At"},{title:"Actions"}];return r("div",{className:" my-6",children:[r("div",{className:"flex flex-row w-full p-4",children:[t("div",{className:"flex-1",children:a.length!==0&&t(N,{selected:a,data:l})}),t("div",{className:"flex-none",children:t(g,{})})]}),r("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:p.map((e,i)=>t("th",{className:"py-3 px-6 text-left",children:e.title},i))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:l==null?void 0:l.map((e,i)=>r("tr",{className:`${s(e.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} border-gray-200 hover:bg-gray-100`,children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:r("div",{className:"flex items-center",children:[t("div",{className:"mr-2",children:t("input",{onClick:()=>n(e.id),type:"checkbox",className:`${s(e.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox`})}),t("span",{className:"font-medium",children:e.raw_materials})]})}),t("td",{className:"py-3 px-6 text-left",children:e.bind}),t("td",{className:"py-3 px-6 text-left",children:h(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:r("div",{className:"flex",children:[t(w,{ingredients:d,selectedid:e.id,data:e}),t(u,{data:e}),t(b,{data:e})]})})]},i))})]})]})}export{K as default};