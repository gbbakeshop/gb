import{r as f,j as o,a as t}from"./app-c469e3d3.js";import{m as u}from"./moment-06cf66e1.js";import N from"./branch-bakers-report-edit-6a7a8f73.js";import b from"./move-to-bread-report-form-28baa6c5.js";import y from"./move-to-another-branch-dd69e7af.js";import"./x-mark-icon-83a4bcc4.js";import"./input-003dd785.js";import"./records-services-66a159ca.js";import"./pencil-icon-0a43fae8.js";import"./useDispatch-9b73aee7.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./move-icon-3a3956a3.js";import"./branches-services-54618143.js";function D({account:s,data:d,branchid:n}){const[a,m]=f.useState([]);function l(e){return a.find(i=>i===e)}function c(e){if(l(e)==null)m([...a,e]);else{const h=a.filter(x=>x!==e);m(h)}}const r=s.position,p=[{title:"Name of Bread"},{title:"New Production"},{title:"Date Created"},r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"&&{title:"Actions"}];return o("div",{className:" my-6 p-4",children:[a.length!==0&&t(y,{branchid:n,setSelected:m,selected:a}),o("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:p.map((e,i)=>t("th",{className:"py-3 px-6 text-left",children:e.title},i))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:d==null?void 0:d.map((e,i)=>o("tr",{className:`${l(e.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} border-gray-200 hover:bg-gray-100`,children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:o("div",{className:"flex items-center",children:[t("div",{className:"mr-2",children:r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"?t("input",{checked:l(e.id)!=null,onClick:()=>c(e.id),type:"checkbox",className:`${l(e.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox`}):null}),t("span",{className:"font-medium",children:e.bread_name})]})}),t("td",{className:"py-3 px-6 text-left",children:t("div",{className:"flex items-center",children:e.new_production})}),t("td",{className:"py-3 px-6 text-left",children:u(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"?o("div",{className:"flex",children:[t(N,{account:s,data:e}),t(b,{account:s,branchid:n,data:e})]}):null})]},i))})]})]})}export{D as default};
