import{r as s,u,t as L,v as N,a as r,j as p,F as B}from"./app-c469e3d3.js";import{B as D}from"./branch-layout-3c39fda9.js";import{B as _}from"./bread-crumbs-d662e9bc.js";import{g as F}from"./create-expenses-b431bac6.js";import{a as T}from"./credits-services-e8828886.js";import{S as k}from"./skeleton-loader-0a429f79.js";import y from"./sales-chart-119316b1.js";import A from"./branch-search-expenses-63de019b.js";import q from"./credits-charge-table-3bf0ba3e.js";import z from"./branch-expenses-table-9a0e9059.js";import G from"./domination-daf202b5.js";import{u as H}from"./useDispatch-9b73aee7.js";import"./squire-icon-f57118da.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./database-icon-c6cf3fdf.js";import"./calendar-icon-e76276d5.js";import"./iconBase-dd8be0d8.js";import"./x-mark-icon-83a4bcc4.js";import"./account-services-76cb36ae.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./records-services-66a159ca.js";import"./create-charge-credit-7f8d60bc.js";import"./show-receipts-2aabf396.js";function ur(f){const{auth:a}=f,d=H(),[w,g]=s.useState(!0),h=a.user.branchid,{refresh:l}=u(e=>e.app),{expenses:i,charges:n,date:m}=u(e=>e.branchExpenses),[b,S]=s.useState([]),[x,v]=s.useState([]),[c,I]=s.useState(""),[C,J]=s.useState("");return s.useEffect(()=>{T(h,m).then(e=>{d(L(e)),g(!1)}),F(h,m).then(e=>{d(N(e))})},[l,m]),s.useEffect(()=>{const e=n==null?void 0:n.filter(t=>{var o;return(o=t==null?void 0:t.bread_name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())}),E=i==null?void 0:i.filter(t=>{var o;return(o=t==null?void 0:t.name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())});S(e),v(E)},[c,l]),r(D,{position:a.user.position,branchid:a.user.branchid,children:p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(_,{branchid:a.user.branchid}),w?r(k,{}):p(B,{children:[r(y,{branchid:a.user.branchid}),r(A,{}),p("div",{className:"grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5",children:[r("div",{className:"col-span-2 h-auto w-auto ",children:r(q,{branchid:a.user.branchid,data:c==""?n:b})}),r("div",{className:"row-span-2 col-span-2 h-auto w-auto ",children:r(z,{branchid:a.user.branchid,data:C==""?i:x})}),r("div",{className:"row-span-3 h-auto w-auto",children:r(G,{branchid:a.user.branchid})})]})]})]})})}export{ur as default};