import{r as s,a as t,j as r}from"./app-a4610531.js";import{m}from"./moment-590f3566.js";import n from"./branch-raw-materials-update-form-3114184c.js";import"./x-mark-icon-bce11f14.js";import"./input-647c8c23.js";import"./raw-materials-services-4349b854.js";import"./pencil-icon-4fdb6bf8.js";import"./useDispatch-669033fe.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./dialog-97bd931e.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";function v({data:a,position:i}){return s.useState([]),t("div",{className:"my-6",children:r("table",{className:"min-w-max w-full table-auto",children:[t("thead",{children:t("tr",{className:" text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name of Raw Materials"},{title:"Bind"},{title:"Quantity"},{title:"Status"},{title:"Created At"},!i&&{title:"Actions"}].map((e,l)=>t("th",{className:"py-3 px-6 text-left",children:e.title},l))})}),t("tbody",{className:"text-gray-600 text-sm font-light",children:a==null?void 0:a.map((e,l)=>r("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[t("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:t("div",{className:"flex items-center",children:e.raw_materials})}),t("td",{className:"py-3 px-6 text-left",children:e.bind}),r("td",{className:"py-3 px-6 text-left",children:[e.quantity,"kg"]}),t("td",{className:"py-3 px-6 text-left",children:e.warning<e.quantity?t("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:"Good"}):t("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:"Low Supplies"})}),t("td",{className:"py-3 px-6 text-left",children:m(e.created_at).format("LLLL")}),t("td",{className:"py-3 px-6 text-left",children:t("div",{className:"flex",children:!i&&t(n,{data:e})})})]},l))})]})})}export{v as default};