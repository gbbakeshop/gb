import{r as s,u as f,t as N,v as D,a as r,j as d,F as _}from"./app-6cae0a58.js";import{B}from"./branch-layout-7604898c.js";import{g as T}from"./create-expenses-e2a52595.js";import{a as F}from"./credits-services-f4e34dda.js";import{S as k}from"./skeleton-loader-61a00dfa.js";import y from"./sales-chart-5c19ab08.js";import A from"./branch-search-expenses-3dc1dae4.js";import P from"./credits-charge-table-74b74450.js";import q from"./branch-expenses-table-f0417ae4.js";import z from"./domination-133ffd74.js";import G from"./production-tabs-58b7257a.js";import{u as H}from"./useDispatch-eacdcff1.js";import"./squire-icon-d9baa53a.js";import"./store-icon-32832439.js";import"./branches-services-e4f970f6.js";import"./database-icon-a5959886.js";import"./calendar-icon-2046e830.js";import"./x-mark-icon-3413cb75.js";import"./account-services-8a74b7f6.js";import"./transition-6536be7d.js";import"./open-closed-e0542ca9.js";import"./dialog-4c31c2f3.js";import"./keyboard-29ff5ffd.js";import"./hidden-618e4bf4.js";import"./records-services-7b0243e7.js";import"./create-charge-credit-7c92c8df.js";import"./show-receipts-a5bd9ef3.js";import"./clock-icon-8314b5cd.js";import"./iconBase-1fca0aba.js";import"./index.esm-c1fe66ea.js";function gr(w){const{auth:e}=w,h=H(),[g,b]=s.useState(!0),u=e.user.branchid,{refresh:l}=f(t=>t.app),{expenses:i,charges:n,date:m,meridiem:p}=f(t=>t.branchExpenses),[S,x]=s.useState([]),[v,C]=s.useState([]),[c,I]=s.useState(""),[E,J]=s.useState("");return s.useEffect(()=>{F(u,m,p).then(t=>{h(N(t)),b(!1)}),T(u,m,p).then(t=>{h(D(t))})},[l,m,p]),s.useEffect(()=>{const t=n==null?void 0:n.filter(a=>{var o;return(o=a==null?void 0:a.bread_name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())}),L=i==null?void 0:i.filter(a=>{var o;return(o=a==null?void 0:a.name)==null?void 0:o.toLowerCase().includes(c.toLowerCase())});x(t),C(L)},[c,l]),r(B,{position:e.user.position,branchid:e.user.branchid,children:d("div",{className:"flex flex-col w-full overflow-auto h-screen",children:[r(G,{position:e.user.position}),r("br",{})," ",r("br",{}),g?r(k,{}):d(_,{children:[r(y,{branchid:e.user.branchid}),r(A,{}),d("div",{className:"grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5",children:[r("div",{className:"col-span-2 h-auto w-auto ",children:r(P,{branchid:e.user.branchid,data:c==""?n:S})}),r("div",{className:"row-span-2 col-span-2 h-auto w-auto ",children:r(q,{branchid:e.user.branchid,data:E==""?i:v})}),r("div",{className:"row-span-3 h-auto w-auto",children:r(z,{position:e.user.position,branchid:e.user.branchid})})]})]})]})})}export{gr as default};
