import{r as m,a as e,j as i}from"./app-ef09a1a0.js";import s from"./recipes-add-ingredients-780042d3.js";import c from"./recipes-show-ingredients-f453a3ef.js";import n from"./recipes-delete-ingredients-e2dc7015.js";import"./ingredients-services-8f27a82b.js";import"./x-mark-icon-d16dc334.js";import"./pencil-icon-9847225a.js";import"./useDispatch-7c2ffa76.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";import"./eyes-icon-73cdf1b0.js";import"./trash-icon-42c2df4b.js";import"./recipes-services-811a5ca1.js";import"./sweetalert2.all-fa9e0ac6.js";function B({data:r}){return m.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Target"},{title:"Status"},{title:"Actions"}].map((t,l)=>e("th",{className:"py-3 px-6 text-left",children:t.title},l))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,l)=>i("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("div",{className:"grid grid-rows-2 grid-flow-col gap-1",children:t==null?void 0:t.selected_breads.map((a,d)=>e("div",{className:"flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:a.bread_name},d))})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.target??0})}),e("td",{className:"py-3 px-6 text-left",children:e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Baker"})}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e("div",{className:"w-4 mr-6 ",children:t.raw_materials==null?e(c,{data:t}):"YES RM"}),e("div",{className:"w-4 mr-6  ",children:e(s,{data:t})}),e("div",{className:"w-4 ",children:e(n,{id:t.id})})]})})]},l))})]})})}export{B as default};