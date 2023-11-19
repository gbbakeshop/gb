import{r as o,j as r,a as t}from"./app-2b2dd7b8.js";import{m as h}from"./moment-c6236491.js";import N from"./raw-materials-form-3e2e2d32.js";import u from"./raw-materials-edit-01356c67.js";import b from"./raw-materials-delete-e8600f49.js";import g from"./raw-materials-create-8958a8e4.js";import w from"./raw-materials-add-212056d1.js";import{g as y}from"./ingredients-services-c111c7fd.js";import"./x-mark-icon-a3c2c331.js";import"./input-fc1025c7.js";import"./useDispatch-b2dba95a.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./pencil-icon-472973bd.js";import"./raw-materials-services-13aa9ebd.js";import"./trash-icon-e03020b4.js";import"./sweetalert2.all-54f7e21d.js";import"./plus-icon-d6294a62.js";function K({data:l}){const[a,m]=o.useState([]),[d,c]=o.useState([]);function s(e){return a.find(i=>i===e)}o.useEffect(()=>{y().then(e=>{c(e.status)})},[]);function n(e){if(s(e)==null)m([...a,e]);else{const f=a.filter(x=>x!==e);m(f)}}const p=[{title:"Name of Raw Materials"},{title:"Bind"},{title:"Created At"},{title:"Actions"}];return r("div",{className:" my-6",children:[r("div",{className:"flex flex-row w-full p-4",children:[t("div",{className:"flex-1",children:a.length!==0&&t(N,{selected:a,data:l})}),t("div",{className:"flex-none",children:t(g,{})})]}),r("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:p.map((e,i)=>t("th",{className:"py-3 px-6 text-left",children:e.title},i))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:l==null?void 0:l.map((e,i)=>r("tr",{className:`${s(e.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} border-gray-200 hover:bg-gray-100`,children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:r("div",{className:"flex items-center",children:[t("div",{className:"mr-2",children:t("input",{onClick:()=>n(e.id),type:"checkbox",className:`${s(e.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox`})}),t("span",{className:"font-medium",children:e.raw_materials})]})}),t("td",{className:"py-3 px-6 text-left",children:e.bind}),t("td",{className:"py-3 px-6 text-left",children:h(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:r("div",{className:"flex",children:[t(w,{ingredients:d,selectedid:e.id,data:e}),t(u,{data:e}),t(b,{data:e})]})})]},i))})]})]})}export{K as default};