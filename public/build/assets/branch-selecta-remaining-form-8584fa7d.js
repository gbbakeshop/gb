import{r as a,j as s,F as v,a as e,c as p,h as f,i as w}from"./app-6cae0a58.js";import{D as N}from"./database-icon-a5959886.js";import{L as F}from"./loading-icon-6e69eb6e.js";import{u as R}from"./selecta-services-a5ecbe94.js";import{u as k}from"./useDispatch-eacdcff1.js";import{t as o}from"./transition-6536be7d.js";import{_ as m}from"./dialog-4c31c2f3.js";import"./open-closed-e0542ca9.js";import"./keyboard-29ff5ffd.js";import"./hidden-618e4bf4.js";function z({data:n,userid:g}){const[h,i]=a.useState(!1),[c,d]=a.useState(!1),[t,y]=a.useState(null),r=k(),u=a.useRef(null);function x(){return{status:"loading",message:"Loading..."}}function b(){d(!0),r(p(x())),R({id:n.id,userid:g,remaining:t,date:f().format("L"),meridiem:f().format("A")}).then(l=>{i(!1),d(!1),r(w()),r(p(l))})}return s(v,{children:[e("button",{onClick:()=>i(!0),children:e(N,{})}),e(o.Root,{show:h,as:a.Fragment,children:s(m,{as:"div",className:"relative z-10",initialFocus:u,onClose:i,children:[e(o.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e(o.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:s(m.Panel,{className:"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg",children:[e("div",{className:"bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4",children:s("div",{children:[e("div",{className:"text-red-500",children:n.quantity<=t?"Please make sure it would not be surplus.":""}),s("div",{className:"mt-3 text-center sm:mt-0 sm:text-left",children:[e(m.Title,{as:"h3",className:"text-base font-semibold leading-6 text-gray-900",children:n.product_name}),s("div",{className:"mt-2",children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Remaining"}),e("input",{step:"any",defaultValue:n.quantity,required:!0,onInput:l=>y(l.target.value),className:`${t==""||t==null?"border-red-500":""} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`,type:"number",placeholder:"Input remaining"}),t==""&&e("p",{className:"text-red-500 text-xs italic",children:"Please fill out this field."})]})]})]})}),s("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e("button",{type:"button",disabled:c||n.quantity<=t,className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>b(),children:c||n.quantity<=t?e(F,{}):"Submit"}),e("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>i(!1),ref:u,children:"Cancel"})]})]})})})})]})})]})}export{z as default};
