import{r,u as i,q as x,m as L,B as g,j as m,a as t}from"./app-6a556eca.js";import{B}from"./branch-layout-572fce84.js";import R from"./branch-sales-report-table-0d9e4bd9.js";import{a as v}from"./records-services-8c083049.js";import w from"./production-tabs-aa6ae8a9.js";import{S as C}from"./skeleton-loader-e1bfafe6.js";import{S as N}from"./search-9e32b151.js";import j from"./branch-sales-report-search-date-207de5d5.js";import{u as D}from"./useDispatch-c038fac8.js";import"./squire-icon-0d73afe5.js";import"./store-icon-525bb67d.js";import"./branches-services-ab741d85.js";import"./database-icon-b104ce28.js";import"./calendar-icon-880fa9f9.js";import"./moment-161161c4.js";import"./branch-sales-report-edit-35dd4f21.js";import"./x-mark-icon-3f5f36c0.js";import"./input-ba465b71.js";import"./pencil-icon-28723d97.js";import"./transition-7ef188d1.js";import"./open-closed-cdb87e80.js";import"./dialog-9d8839d5.js";import"./keyboard-f966a89e.js";import"./hidden-11b9d246.js";import"./clock-icon-a40f6918.js";import"./iconBase-0773d4d8.js";import"./index.esm-cc929866.js";function rt(p){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=p,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),m(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),m("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{rt as default};