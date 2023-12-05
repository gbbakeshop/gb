import{r as n,q as L,j as r,F as S,a as e,c as y,h as v,i as D}from"./app-b6df9fca.js";import{X as w}from"./x-mark-icon-9d7a1a3b.js";import{c as M}from"./account-services-8f376e65.js";import{u as R}from"./useDispatch-e4d7b871.js";import{t as m}from"./transition-645251c1.js";import{_ as g}from"./dialog-ac8079e2.js";async function q(l){return(await axios.post("/api/create_expenses",l,{headers:{"Content-Type":"multipart/form-data"}})).data}async function A(l,c,p,i){return(await axios.post("/api/get_branch_expenses",{date:c,id:l,meridiem:p,userid:i})).data.status}function E({branchid:l,userid:c}){const[p,i]=n.useState(!1),u=n.useRef(),{url:N}=L(),x=l??N.split("/")[2],[d,f]=n.useState([]),[O,C]=n.useState([]),[k,b]=n.useState(!1),h=R();function F(){return{status:"loading",message:"Loading..."}}async function j(s){s.preventDefault();const t=new FormData(u.current);b(!0),h(y(F()));const a=new FormData;for(let o=0;o<d.length;o++)a.append("images[]",d[o]);a.append("branchid",x),a.append("name",t.get("name")),a.append("quantity",t.get("quantity")),a.append("userid",c),a.append("amount",t.get("amount")),a.append("discription",t.get("discription")),a.append("date",v().format("L")),a.append("meridiem",v().format("A")),q(a).then(o=>{console.log(o.data),o.status=="success"&&setTimeout(()=>{b(!1),i(!1),f([]),h(D()),h(y(o)),u.current.reset()},1e3)})}n.useEffect(()=>{M(x).then(s=>{C(s)})},[]);const _=s=>{const t={...d};for(const a of s.target.files){const o=URL.createObjectURL(a);t[o]=a}f(Object.values(t))},T=s=>{const t=[...d];t.splice(s,1),f(t)};return r(S,{children:[e("button",{onClick:()=>i(!0),className:"focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-red-700 hover:bg-red-600 focus:outline-none rounded",children:e("p",{className:"text-sm font-medium leading-none text-white",children:"Create Expenses"})}),e(m.Root,{show:p,as:n.Fragment,children:r(g,{as:"div",className:"relative z-10",onClose:i,children:[e(m.Child,{as:n.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(m.Child,{as:n.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:r(g.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(m.Child,{as:n.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:r("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>i(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"Close panel"}),e(w,{className:"h-6 w-6","aria-hidden":"true"})]})})}),r("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:e(g.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"Create Expenses"})}),e("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:r("form",{encType:"multipart/form-data",name:"form",ref:u,onSubmit:j,className:"flex flex-col h-full w-full",children:[r("div",{className:"flex-1",children:[e("div",{className:"flex mb-2 items-center justify-center w-full",children:r("label",{for:"dropzone-file",className:"flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600",children:[r("div",{className:"flex flex-col items-center justify-center pt-5 pb-6",children:[e("svg",{className:"w-8 h-8 mb-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 16",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"})}),r("p",{className:"mb-2 text-sm text-gray-500 dark:text-gray-400",children:[e("span",{className:"font-semibold",children:"Click to upload"})," ","or drag and drop"]}),e("p",{className:"text-xs text-gray-500 dark:text-gray-400",children:"SVG, PNG, JPG or GIF (MAX. 800x400px)"})]}),e("input",{id:"dropzone-file",multiple:!0,accept:"image/*",onChange:_,type:"file",className:"hidden"})]})}),d.map((s,t)=>e("div",{className:"rounded-md bg-[#F5F7FB] py-4 px-8 my-3",children:r("div",{className:"flex items-center justify-between",children:[e("img",{src:URL.createObjectURL(s),width:60,height:50,alt:""}),e("span",{className:"truncate pr-3 text-base font-medium text-[#07074D]",children:"banner-design.png"}),e("a",{onClick:()=>T(t),className:"text-[#07074D]",children:e(w,{})})]})},t)),e("input",{id:"name",name:"name",type:"text",placeholder:"Name of supplier",required:!0,className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}),e("input",{id:"quantity",name:"quantity",type:"number",placeholder:"Quantity of supplier",required:!0,className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}),e("input",{id:"amount",name:"amount",type:"number",placeholder:"Input amount",required:!0,className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"}),e("textarea",{name:"discription",placeholder:"Write your description",className:"border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border-2  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"})]}),k?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:r("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:"SUBMIT"})]})})]})]})})})})})]})})]})}const X=Object.freeze(Object.defineProperty({__proto__:null,default:E},Symbol.toStringTag,{value:"Module"}));export{E as C,X as c,A as g};
