import{r as o,j as a,a as e}from"./app-a4610531.js";import{m as c}from"./moment-590f3566.js";import d from"./create-selecta-form-08a183ef.js";import s from"./delete-selecta-ec1dec07.js";import n from"./update-select-form-ef073553.js";import"./x-mark-icon-bce11f14.js";import"./input-647c8c23.js";import"./loading-icon-e88778b3.js";import"./selecta-services-9135a8b1.js";import"./useDispatch-669033fe.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./dialog-97bd931e.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";import"./trash-icon-dd58e6de.js";import"./sweetalert2.all-f2892571.js";import"./pencil-icon-4fdb6bf8.js";function D({data:l}){const[i,p]=o.useState([]);function m(t){return i.find(r=>r===t)}return a("div",{className:"my-6 p-4",children:[e(d,{}),a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Product"},{title:"Price"},{title:"Created At"},{title:"Actions"}].map((t,r)=>e("th",{className:"py-3 px-6 text-left",children:t.title},r))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:l.map((t,r)=>a("tr",{className:`${m(t.id)==null?" border-b border-slate-200 ":"bg-red-100 border-l-2 border-red-500"} border-red-200 hover:bg-red-100`,children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.product_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.price})}),e("td",{className:"py-3 px-6 text-left",children:c(t.created_at).format("LLLL")}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"text-blue-500 w-4 mr-6 transform hover:text-blue-500 hover:scale-110",children:e(n,{data:t})}),e("div",{className:"text-red-500 w-4 mr-2 transform hover:text-red-500 hover:scale-110",children:e(s,{id:t.id})})]})})]},r))})]})]})}export{D as default};