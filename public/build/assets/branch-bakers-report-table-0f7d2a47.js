import{r as f,j as o,a as t}from"./app-6a556eca.js";import{m as u}from"./moment-161161c4.js";import N from"./branch-bakers-report-edit-7cba7392.js";import b from"./move-to-bread-report-form-f45b45d8.js";import y from"./move-to-another-branch-92ad2358.js";import"./x-mark-icon-3f5f36c0.js";import"./input-ba465b71.js";import"./records-services-8c083049.js";import"./pencil-icon-28723d97.js";import"./useDispatch-c038fac8.js";import"./transition-7ef188d1.js";import"./open-closed-cdb87e80.js";import"./dialog-9d8839d5.js";import"./keyboard-f966a89e.js";import"./hidden-11b9d246.js";import"./move-icon-1783e0e9.js";import"./branches-services-ab741d85.js";function D({account:s,data:d,branchid:n}){const[a,m]=f.useState([]);function l(e){return a.find(i=>i===e)}function c(e){if(l(e)==null)m([...a,e]);else{const h=a.filter(x=>x!==e);m(h)}}const r=s.position,p=[{title:"Name of Bread"},{title:"New Production"},{title:"Date Created"},r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"&&{title:"Actions"}];return o("div",{className:" my-6 p-4",children:[a.length!==0&&t(y,{branchid:n,setSelected:m,selected:a}),o("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:p.map((e,i)=>t("th",{className:"py-3 px-6 text-left",children:e.title},i))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:d==null?void 0:d.map((e,i)=>o("tr",{className:`${l(e.id)==null?" border-b border-slate-200 ":"bg-gray-100 border-l-2 border-red-500"} border-gray-200 hover:bg-gray-100`,children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:o("div",{className:"flex items-center",children:[t("div",{className:"mr-2",children:r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"?t("input",{checked:l(e.id)!=null,onClick:()=>c(e.id),type:"checkbox",className:`${l(e.id)==null?"":"border-red-500 border bg-red-500 text-red-500"}  form-checkbox`}):null}),t("span",{className:"font-medium",children:e.bread_name})]})}),t("td",{className:"py-3 px-6 text-left",children:t("div",{className:"flex items-center",children:e.new_production})}),t("td",{className:"py-3 px-6 text-left",children:u(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:r=="Sales Lady"||r=="Cashier"||r=="Supervisor"||r=="admin"?o("div",{className:"flex",children:[t(N,{account:s,data:e}),t(b,{account:s,branchid:n,data:e})]}):null})]},i))})]})]})}export{D as default};