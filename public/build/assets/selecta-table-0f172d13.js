import{r as o,j as a,a as e}from"./app-5d5d4b45.js";import{m as c}from"./moment-fc772d1c.js";import d from"./create-selecta-form-772d4516.js";import s from"./delete-selecta-eef225c2.js";import n from"./update-select-form-0cfa39d5.js";import"./x-mark-icon-fbf8a4fc.js";import"./input-0b839463.js";import"./loading-icon-a35312b2.js";import"./selecta-services-e84d3b7f.js";import"./useDispatch-0c99af86.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./trash-icon-6c6a8ea5.js";import"./sweetalert2.all-2aef531b.js";import"./pencil-icon-072e5607.js";function D({data:l}){const[i,p]=o.useState([]);function m(t){return i.find(r=>r===t)}return a("div",{className:"my-6 p-4",children:[e(d,{}),a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Product"},{title:"Price"},{title:"Created At"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l.map((t,r)=>a("tr",{className:`${m(t.id)==null?" border-b border-slate-200 ":"bg-red-100 border-l-2 border-red-500"} border-red-200 hover:bg-red-100`,children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.product_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.price})}),e("td",{className:"py-3 px-6 text-left",children:c(t.created_at).format("LLLL")}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"text-blue-500 w-4 mr-6 transform hover:text-blue-500 hover:scale-110",children:e(n,{data:t})}),e("div",{className:"text-red-500 w-4 mr-2 transform hover:text-red-500 hover:scale-110",children:e(s,{id:t.id})})]})})]},r))})]})]})}export{D as default};