import{r as t,q as p,j as i,F as u,a as e}from"./app-586d90fb.js";import{X as h}from"./x-mark-icon-4a8cce95.js";import{t as n}from"./transition-9c9359e9.js";import{_ as c}from"./dialog-6cf9a2f4.js";import"./open-closed-e40102d7.js";import"./keyboard-e17f178d.js";import"./hidden-e2b81170.js";function N({data:s}){var m;const[d,r]=t.useState(!1);p();const[a,l]=t.useState(0),o=t.useRef(null);return i(u,{children:[e("button",{onClick:()=>r(!0),children:s==null?void 0:s.discription}),e(n.Root,{show:d,as:t.Fragment,children:i(c,{as:"div",className:"relative z-10",initialFocus:o,onClose:r,children:[e(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:i(c.Panel,{className:"",children:[e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:i("div",{className:"mt-3 text-center  sm:mt-0 sm:text-left",children:[e("button",{onClick:()=>r(!1),className:"absolute p-3 bg-red-500 text-white",children:e(h,{})}),e("img",{src:"/storage/images/"+((m=s.upload_image[a])==null?void 0:m.file_name),className:"h-[80vh]"})]})})}),i("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>l(a>=s.upload_image.length-1?0:a+1),children:"Next"}),e("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>l(a<=0?0:a-1),ref:o,children:"Back"})]})]})})})})]})})]})}export{N as default};
