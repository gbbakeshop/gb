import{r as l,j as r,F as u,a as e,c as q,h as L,y as U,i as Z}from"./app-ca96d5b2.js";import{X}from"./x-mark-icon-db2887fc.js";import{P as z}from"./plus-icon-d0501b64.js";import{g as H}from"./ingredients-services-86c5f7ec.js";import{c as J}from"./records-services-85a57897.js";import{u as W}from"./useDispatch-1c9b41c0.js";import{t as N}from"./transition-9319ce3a.js";import{_ as F}from"./dialog-5da5b32f.js";import"./open-closed-6718804b.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";function de({data:a,branchid:k,account:D,data2:_}){var P;const[R,b]=l.useState(!1),y=l.useRef(),[G,S]=l.useState([]),[g,E]=l.useState(0),[f,O]=l.useState(0),[n,$]=l.useState(1),[A,v]=l.useState(!1),[T,C]=l.useState(!1),h=W();(P=a==null?void 0:a.selected_ingredients)==null||P.map(t=>parseInt(t.raw_materials_id));function j(){return{status:"loading",message:"Loading..."}}const x=a.selected_ingredients.map((t,s)=>({...t,raw_materials_id:parseInt(t.raw_materials_id),raw_materials:t.raw_materials,grams:parseInt(t.quantity)})),w=_.length==0?[]:x.map((t,s)=>({bind:_.find(i=>i.raw_materials_id==t.raw_materials_id).bind,branchid:t.branchid,raw_materials_id:x.find(i=>i.raw_materials_id==t.raw_materials_id).raw_materials_id,quantity:_.find(i=>i.raw_materials_id==t.raw_materials_id).quantity,raw_materials:x.find(i=>i.raw_materials_id==t.raw_materials_id).raw_materials,grams:x.find(i=>i.raw_materials_id==x[s].raw_materials_id).grams}));l.useEffect(()=>{const t=w==null?void 0:w.map(s=>s.quantity-s.grams*n/1e3<=0);t&&(t!=null&&t.includes(!0)||parseInt(f)!==a.target*n?C(!0):C(!1))},[n,f]),l.useEffect(()=>{H().then(t=>{S(t.status)})},[]);function B(t){const s=new FormData(y.current),p=(a==null?void 0:a.selected_breads.map((o,d)=>({quantity:s.get(`quantity_${d}`)}))).map(o=>parseInt(o.quantity)).reduce(function(o,d){return o+d});E(p)}function M(t){const s=new FormData(y.current),p=(a==null?void 0:a.selected_breads.map((o,d)=>({target:s.get(`target_${d}`)}))).map(o=>parseInt(o.target)).reduce(function(o,d){return o+d});O(p)}async function V(t){t.preventDefault(),h(q(j()));const s=new FormData(y.current);if(v(!0),n>0){const i={quantity:n,branchid:k,account:D,data:a},p=a==null?void 0:a.selected_breads.map((c,m)=>({quantity:parseInt(s.get(`quantity_${m}`))})),o=a==null?void 0:a.selected_breads.map((c,m)=>({targetPerBread:parseInt(s.get(`target_${m}`))})),d=a.target*n,I=p.map(c=>parseInt(c.quantity)).reduce(function(c,m){return c+m}),Q=I<d?d-I:0,K={...i,date:L().format("L"),charge:Q,data:{...i.data,selected_breads:i.data.selected_breads.map((c,m)=>({...c,...p[m],...o[m]}))},created:JSON.stringify(i.data.selected_breads.map((c,m)=>({...c,...p[m]})))};setTimeout(async()=>{const c=await J(K);b(!1),h(q(c)),setTimeout(()=>{v(!1),h(U(!1)),h(Z()),h(q([]))},2e3)},1e3)}else v(!1),alert("Insufficient Quantity")}return r(u,{children:[r("button",{className:"font-medium flex text-blue-500",onClick:()=>b(!0),children:[e(z,{})," CREATE PRODUCTION"]}),e(N.Root,{show:R,as:l.Fragment,children:r(F,{as:"div",className:"relative z-10",onClose:b,children:[e(N.Child,{as:l.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity"})}),e("div",{className:"fixed inset-0 overflow-hidden",children:e("div",{className:"absolute inset-0 overflow-hidden",children:e("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e(N.Child,{as:l.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:r(F.Panel,{className:"pointer-events-auto relative w-screen max-w-md",children:[e(N.Child,{as:l.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4",children:r("button",{type:"button",className:"relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",onClick:()=>b(!1),children:[e("span",{className:"absolute -inset-2.5"}),e("span",{className:"sr-only",children:"Close panel"}),e(X,{className:"h-6 w-6","aria-hidden":"true"})]})})}),r("div",{className:"flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl",children:[e("div",{className:"px-4 sm:px-6",children:e(F.Title,{className:"text-base font-semibold leading-6 text-gray-900",children:"CREATE PRODUCTION"})}),r("div",{className:"relative mt-6 flex-1 px-4 sm:px-6",children:[e("div",{className:"text-red-500",children:f!==a.target*n?"Note: target pieces and target per bread must be equal.":""}),r("div",{className:"grid grid-rows-1 grid-flow-col gap-1 text-lg font-semibold",children:["Charge (",a.target*n<(isNaN(g)?0:g)?0:a.target*n-(isNaN(g)?0:g),")",e("br",{}),"Target Pieces (",a.target*n,")",e("br",{}),"Target Pieces Per Bread (",isNaN(f)?0:f,")",e("br",{}),"Actual Target (",isNaN(g)?0:g,")"]}),r("form",{name:"form",ref:y,onSubmit:V,className:"flex flex-col h-full ",children:[r("div",{className:"flex-1",children:[r(u,{children:[e("div",{className:"flex flex-col gap-1",children:a==null?void 0:a.selected_breads.map((t,s)=>r("div",{className:"flex-1",children:[t.bread_name,r("div",{className:"flex gap-x-4",children:[r("div",{children:["Target Pieces",e("input",{name:`target_${s}`,defaultValue:0,onInput:i=>M(i.target.value),required:!0,className:"appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"number",placeholder:"Target Pieces"})]}),r("div",{children:["Actual Pieces",e("input",{name:`quantity_${s}`,defaultValue:0,required:!0,onInput:i=>B(i.target.value),className:"appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white",type:"number",placeholder:"Actual Pieces"})]})]})]},s))}),(a==null?void 0:a.selected_ingredients.length)==0?e("h5",{className:" text-base font-semibold text-red-500 dark:text-red-400",children:"No Ingredients designated!"}):e("div",{className:"grid grid-rows-1 grid-flow-col gap-1",children:e("div",{className:"flex flex-col",children:r("div",{className:"overflow-x-auto sm:mx-0.5 lg:mx-0.5",children:[e("div",{className:"px-1",children:r("div",{children:[e("label",{className:"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2",children:"Quantity"}),e("input",{defaultValue:1,required:!0,onInput:t=>$(t.target.value),className:`${n==""||n==null?"border-red-500":""} appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white`,type:"number",placeholder:"Number"})]})}),e("div",{className:"inline-block min-w-full",children:e("div",{className:"overflow-hidden",children:r("table",{className:"min-w-full",children:[e("thead",{className:"bg-white border-b",children:r("tr",{children:[e("th",{className:"text-sm font-medium text-gray-900 px-2 py-4 text-left",children:"Raw Materials"}),e("th",{className:"text-sm font-medium text-gray-900 px-2 py-4 text-left",children:"Bind"}),e("th",{className:"text-sm font-medium text-gray-900 px-2 py-4 text-left",children:"Current Remaining"}),e("th",{className:"text-sm font-medium text-gray-900 px-2 py-4 text-left",children:"Calculation"})]})}),e("tbody",{children:w.map((t,s)=>r("tr",{className:"bg-gray-100 border-b",children:[e("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:t.raw_materials}),e("td",{className:"text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap",children:t.bind=="Kilo"?r(u,{children:[t.grams*n/1e3,"kg"]}):r(u,{children:[t.grams*n,"pcs"]})}),e("td",{className:"text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap",children:t.bind=="Kilo"?r(u,{children:[t.quantity.toFixed(2),"kg"]}):r(u,{children:[t.quantity,"pcs"]})}),e("td",{className:"text-sm text-gray-900 font-light px-2 py-4 whitespace-nowrap",children:t.bind=="Kilo"?(t.quantity-t.grams*n/1e3).toFixed(2)<=0?r("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:[(t.quantity-t.grams*n/1e3).toFixed(2),"kg"]}):r("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:[(t.quantity-t.grams*n/1e3).toFixed(2),"kg"]}):e(u,{children:t.quantity-t.grams*n<=20?e(u,{children:r("span",{className:"bg-purple-200 text-red-600 py-1 px-3 rounded-full text-xs",children:[t.quantity-t.grams*n,"pcs"]})}):r("span",{className:"bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs",children:[t.quantity-t.grams*n,"pcs"]})})})]},s))})]})})})]})})})]}),e("br",{})]}),A?e("button",{disabled:!0,className:"flex-none w-full items-center align-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:e("center",{children:r("svg",{"aria-hidden":"true",className:"align-center justify-center w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-red-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),e("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]})})}):e("button",{disabled:T,className:"flex-none w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0",children:T?"No Supplies":"CREATE NEW PRODUCTION"}),e("br",{})]})]})]})]})})})})})]})})]})}export{de as default};