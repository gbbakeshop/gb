import{r as m,a as e,j as i}from"./app-c469e3d3.js";import s from"./recipes-add-ingredients-0f5403f4.js";import c from"./recipes-show-ingredients-30869fde.js";import n from"./recipes-delete-ingredients-bec481d7.js";import"./ingredients-services-4d748df8.js";import"./x-mark-icon-83a4bcc4.js";import"./pencil-icon-0a43fae8.js";import"./useDispatch-9b73aee7.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./eyes-icon-40e2d239.js";import"./trash-icon-aab5b5e8.js";import"./recipes-services-283b70b5.js";import"./sweetalert2.all-c0110678.js";function B({data:r}){return m.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Target"},{title:"Status"},{title:"Actions"}].map((t,l)=>e("th",{className:"py-3 px-6 text-left",children:t.title},l))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,l)=>i("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("div",{className:"grid grid-rows-2 grid-flow-col gap-1",children:t==null?void 0:t.selected_breads.map((a,d)=>e("div",{className:"flex-auto text-xs inline-flex items-center font-bold leading-sm  px-3 py-1 bg-red-50 border border-red-50 text-red-500 rounded",children:a.bread_name},d))})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.target??0})}),e("td",{className:"py-3 px-6 text-left",children:e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Baker"})}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e("div",{className:"w-4 mr-6 ",children:t.raw_materials==null?e(c,{data:t}):"YES RM"}),e("div",{className:"w-4 mr-6  ",children:e(s,{data:t})}),e("div",{className:"w-4 ",children:e(n,{id:t.id})})]})})]},l))})]})})}export{B as default};