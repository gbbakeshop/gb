import{r as s,u,t as L,v as N,a as r,j as p,F as B}from"./app-17fabe6c.js";import{B as D}from"./branch-layout-d193ad21.js";import{B as _}from"./bread-crumbs-f3242ea2.js";import{g as F}from"./create-expenses-7543760d.js";import{a as T}from"./credits-services-11fb2b09.js";import{S as k}from"./skeleton-loader-7580b150.js";import y from"./sales-chart-77e4a23b.js";import A from"./branch-search-expenses-45af01e6.js";import q from"./credits-charge-table-7b8e9516.js";import z from"./branch-expenses-table-bf2790de.js";import G from"./domination-929335c6.js";import{u as H}from"./useDispatch-946d0582.js";import"./squire-icon-6d5a8750.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./database-icon-e713a6fe.js";import"./calendar-icon-2e8ac84e.js";import"./iconBase-9f6c11a0.js";import"./x-mark-icon-a7739838.js";import"./account-services-4fa7e09c.js";import"./transition-e0881b81.js";import"./open-closed-969ad825.js";import"./dialog-a479cd53.js";import"./keyboard-adbd37b7.js";import"./hidden-0579742e.js";import"./records-services-8c083049.js";import"./create-charge-credit-e9711f02.js";import"./show-receipts-7b1d53c6.js";function ur(f){const{auth:a}=f,d=H(),[w,g]=s.useState(!0),h=a.user.branchid,{refresh:l}=u(e=>e.app),{expenses:i,charges:n,date:m}=u(e=>e.branchExpenses),[b,S]=s.useState([]),[x,v]=s.useState([]),[c,I]=s.useState(""),[C,J]=s.useState("");return s.useEffect(()=>{T(h,m).then(e=>{d(L(e)),g(!1)}),F(h,m).then(e=>{d(N(e))})},[l,m]),s.useEffect(()=>{const e=n==null?void 0:n.filter(t=>{var o;return(o=t==null?void 0:t.bread_name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())}),E=i==null?void 0:i.filter(t=>{var o;return(o=t==null?void 0:t.name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())});S(e),v(E)},[c,l]),r(D,{position:a.user.position,branchid:a.user.branchid,children:p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(_,{branchid:a.user.branchid}),w?r(k,{}):p(B,{children:[r(y,{branchid:a.user.branchid}),r(A,{}),p("div",{className:"grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5",children:[r("div",{className:"col-span-2 h-auto w-auto ",children:r(q,{branchid:a.user.branchid,data:c==""?n:b})}),r("div",{className:"row-span-2 col-span-2 h-auto w-auto ",children:r(z,{branchid:a.user.branchid,data:C==""?i:x})}),r("div",{className:"row-span-3 h-auto w-auto",children:r(G,{branchid:a.user.branchid})})]})]})]})})}export{ur as default};