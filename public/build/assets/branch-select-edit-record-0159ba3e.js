import{r as t,j as a,F as b,a as e,c as m,m as N,i as w}from"./app-a4610531.js";import{P as F}from"./pencil-icon-4fdb6bf8.js";import{d as T}from"./selecta-services-9135a8b1.js";import{L as C}from"./loading-icon-e88778b3.js";import{X as D}from"./x-mark-icon-bce11f14.js";import{I as R}from"./input-647c8c23.js";import{u as S}from"./useDispatch-669033fe.js";import{t as o}from"./transition-29879d40.js";import{_ as s}from"./dialog-97bd931e.js";import"./open-closed-db19f7e7.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";function B({data:n,userid:u}){const[f,r]=t.useState(!1),[p,l]=t.useState(!1);t.useState(0);const i=S();t.useRef(null);const c=t.useRef();function h(){return{status:"loading",message:"Loading..."}}function x(v){v.preventDefault(),i(m(h())),l(!0);const d=new FormData(c.current),y={id:n.id,userid:u,product_name:n.selecta.product_name,quantity:d.get("quantity"),sales:d.get("quantity")*n.price,date:N().format("L")};T(y).then(g=>{r(!1),l(!1),i(w()),i(m(g))})}return a(b,{children:[e("button",{onClick:()=>r(!0),children:e(F,{})}),e(o.Root,{show:f,as:t.Fragment,children:a(s,{as:"div",className:"relative z-10",onClose:r,children:[e(o.Child,{as:t.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(o.Child,{as:t.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:a(s.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(o.Child,{as:t.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:a("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>r(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"Close panel"}),e(D,{className:"h-6 w-6","aria-hidden":"true"})]})})}),a("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:e(s.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"EDIT RECORDS"})}),e("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:a("form",{name:"form",ref:c,onSubmit:x,className:"flex flex-col h-full w-full",children:[e("div",{className:"flex-1",children:e(R,{name:"quantity",data:n.quantity,title:"quantity- Price:("+n.price+")",placeholder:"Enter Quantity",type:"number"})}),e("div",{className:"flex-none",children:p?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:e(C,{})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"UPDATE"})})]})})]})]})})})})})]})})]})}export{B as default};