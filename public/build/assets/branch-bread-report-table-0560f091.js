import{r as s,a as e,j as i}from"./app-5d5d4b45.js";import"./moment-fc772d1c.js";import n from"./move-to-sales-report-form-f5403f35.js";import c from"./branch-bread-report-edit-c04f46de.js";import"./x-mark-icon-fbf8a4fc.js";import"./input-0b839463.js";import"./records-services-8c083049.js";import"./move-icon-c4dbb535.js";import"./exclamation-icon-7d29b3ab.js";import"./useDispatch-0c99af86.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./pencil-icon-072e5607.js";function S({account:l,data:r}){return s.useState([]),e("div",{className:" my-6",children:i("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Bread"},{title:"Beginning"},{title:"New Production"},{title:"Charges"},{title:"Over"},{title:"Total"},{title:"Status"},{title:"Actions"}].map((t,a)=>e("th",{className:"py-3 px-6 text-left",children:t.title},a))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:r==null?void 0:r.map((t,a)=>i("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:e("div",{className:"flex items-center",children:e("span",{className:"font-medium",children:t.bread_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.beginning??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.new_production??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.charge??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.overs??0})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:t.total??0})}),e("td",{className:"py-3 px-6 text-left",children:t.new_production==0&&t.sellerid==l.id?e("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Done"}):e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Pending"})}),e("td",{className:"py-3 px-6 text-left",children:i("div",{className:"flex",children:[e(c,{account:l,data:t}),e(n,{account:l,data:t})]})})]},a))})]})})}export{S as default};