import{r as a,q as u,j as i,F as h,a as e}from"./app-ca96d5b2.js";import{X as f}from"./x-mark-icon-db2887fc.js";import{t as r}from"./transition-9319ce3a.js";import{_ as d}from"./dialog-5da5b32f.js";import"./open-closed-6718804b.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";function F({data:t}){var m,c;const[p,n]=a.useState(!1);u();const[s,l]=a.useState(0),o=a.useRef(null);return i(h,{children:[e("button",{onClick:()=>n(!0),children:t==null?void 0:t.discription}),e(r.Root,{show:p,as:a.Fragment,children:i(d,{as:"div",className:"relative z-10",initialFocus:o,onClose:n,children:[e(r.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e("div",{className:"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0",children:e(r.Child,{as:a.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:i(d.Panel,{className:"",children:[e("div",{className:"bg-white",children:e("div",{className:"sm:flex sm:items-start",children:i("div",{className:"mt-3 text-center  sm:mt-0 sm:text-left",children:[e("button",{onClick:()=>n(!1),className:"absolute p-3 bg-red-500 text-white",children:e(f,{})}),(m=t.upload_image[s])!=null&&m.file_name?e("img",{src:"/storage/images/"+((c=t.upload_image[s])==null?void 0:c.file_name),className:"h-[80vh]"}):e("div",{className:"w-96 text-center h-96 flex items-center justify-center",children:"No Images"})]})})}),i("div",{className:"bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6",children:[e("button",{type:"button",className:"inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto",onClick:()=>l(s>=t.upload_image.length-1?0:s+1),children:"Next"}),e("button",{type:"button",className:"mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto",onClick:()=>l(s<=0?0:s-1),ref:o,children:"Back"})]})]})})})})]})})]})}export{F as default};