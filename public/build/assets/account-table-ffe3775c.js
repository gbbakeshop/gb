import{a as e,F as r,j as a,d as c}from"./app-841358f4.js";import{E as s}from"./eyes-icon-83d7a4ec.js";import n from"./branch-account-delete-2a05fa3c.js";import"./trash-icon-0adf2eff.js";import"./sweetalert2.all-83a6cb79.js";import"./account-services-a49f304f.js";import"./useDispatch-d62d19bf.js";function u({data:i}){return e(r,{children:e("div",{className:"my-6",children:a("table",{className:"min-w-max w-full table-auto",children:[e("thead",{children:e("tr",{className:"text-gray-600 uppercase text-sm leading-normal",children:[{title:"Name"},{title:"Branch"},{title:"Position"},{title:"Email"},{title:"Actions"}].map((t,l)=>e("th",{className:"py-3 px-6 text-left",children:t.title},l))})}),e("tbody",{className:"text-gray-600 text-sm font-light",children:i.map((t,l)=>a("tr",{className:"border-b border-red-200 hover:bg-red-100",children:[e("td",{className:"py-3 px-6 text-left whitespace-nowrap",children:a("div",{className:"flex items-center",children:[e("div",{className:"mr-2",children:e("img",{className:"w-6 h-6 rounded-full",src:"https://randomuser.me/api/portraits/men/1.jpg"})}),e("span",{className:"font-medium",children:t.name})]})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex items-center",children:e("span",{children:t.get_branch.branch_name})})}),e("td",{className:"py-3 px-6 text-left",children:e("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:t.position})}),e("td",{className:"py-3 px-6 text-left",children:e("div",{className:"flex",children:t.email})}),e("td",{className:"py-3 px-6 text-left",children:a("div",{className:"flex",children:[e("div",{className:"w-4 mr-6 text-blue-500",children:e(c,{href:route("account_settings",{branchid:t.branchid,userid:t.id}),children:e(s,{})})}),e("div",{className:"w-4 text-red-500",children:e(n,{id:t.id})})]})})]},l))})]})})})}export{u as default};