import{r as o,j as a,a as e}from"./app-ca96d5b2.js";import{m as c}from"./moment-be919951.js";import d from"./create-selecta-form-27e0d3e9.js";import s from"./delete-selecta-980eeb99.js";import n from"./update-select-form-a0a185b9.js";import"./x-mark-icon-db2887fc.js";import"./input-87176cbc.js";import"./loading-icon-7bf74983.js";import"./selecta-services-020eef0a.js";import"./useDispatch-1c9b41c0.js";import"./transition-9319ce3a.js";import"./open-closed-6718804b.js";import"./dialog-5da5b32f.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";import"./trash-icon-6b99ecda.js";import"./sweetalert2.all-0245363f.js";import"./pencil-icon-7668261c.js";function D({data:l}){const[i,p]=o.useState([]);function m(t){return i.find(r=>r===t)}return a("div",{className:"my-6 p-4",children:[e(d,{}),a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Product"},{title:"Price"},{title:"Created At"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l.map((t,r)=>a("tr",{className:`${m(t.id)==null?" border-b border-slate-200 ":"bg-red-100 border-l-2 border-red-500"} border-red-200 hover:bg-red-100`,children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.product_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.price})}),e("td",{className:"py-3 px-6 text-left",children:c(t.created_at).format("LLLL")}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"text-blue-500 w-4 mr-6 transform hover:text-blue-500 hover:scale-110",children:e(n,{data:t})}),e("div",{className:"text-red-500 w-4 mr-2 transform hover:text-red-500 hover:scale-110",children:e(s,{id:t.id})})]})})]},r))})]})]})}export{D as default};