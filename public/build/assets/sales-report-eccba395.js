import{r,u as i,q as x,m as L,B as g,j as m,a as t}from"./app-ce493363.js";import{B}from"./branch-layout-085ef5ba.js";import R from"./branch-sales-report-table-0c57a44a.js";import{a as v}from"./records-services-8c083049.js";import w from"./production-tabs-5c79e7da.js";import{S as C}from"./skeleton-loader-0b7c2420.js";import{S as N}from"./search-b87769b8.js";import j from"./branch-sales-report-search-date-a7e89f7a.js";import{u as D}from"./useDispatch-d59e05e8.js";import"./squire-icon-3e532900.js";import"./store-icon-0ac78f10.js";import"./branches-services-be7628ca.js";import"./database-icon-aa0a9a5b.js";import"./calendar-icon-b71d25a4.js";import"./moment-86546afa.js";import"./branch-sales-report-edit-87014eab.js";import"./x-mark-icon-52d3c60b.js";import"./input-71d6f7cf.js";import"./pencil-icon-f6ce86d0.js";import"./transition-1be57896.js";import"./open-closed-fb90bc4c.js";import"./dialog-b8edea36.js";import"./keyboard-23fd2432.js";import"./hidden-882c8970.js";import"./clock-icon-fc395993.js";import"./iconBase-7d681c32.js";import"./index.esm-6366304e.js";import"./index.esm-ddb236a3.js";function et(p){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=p,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),m(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),m("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{et as default};
