import{r,u as i,q as x,m as L,B as g,j as m,a as t}from"./app-bc6632bd.js";import{B}from"./branch-layout-39a87b7b.js";import R from"./branch-sales-report-table-5623c832.js";import{a as v}from"./records-services-8c083049.js";import w from"./production-tabs-3efff735.js";import{S as C}from"./skeleton-loader-fbd15785.js";import{S as N}from"./search-6e9fd3c8.js";import j from"./branch-sales-report-search-date-ac46cf23.js";import{u as D}from"./useDispatch-4e45fd31.js";import"./squire-icon-7116d378.js";import"./store-icon-237e38d0.js";import"./branches-services-69a36442.js";import"./database-icon-50972c7d.js";import"./calendar-icon-b78989b0.js";import"./moment-e5207fc6.js";import"./branch-sales-report-edit-a00f7b2b.js";import"./x-mark-icon-cdc6c04e.js";import"./input-2d87672b.js";import"./pencil-icon-aff147e4.js";import"./transition-6f84ebeb.js";import"./open-closed-a8e1af49.js";import"./dialog-21b5deee.js";import"./keyboard-93ef877a.js";import"./hidden-a8bb1d4e.js";import"./clock-icon-7ffb2400.js";import"./iconBase-c82b3fde.js";import"./index.esm-86a18407.js";import"./index.esm-66d82e41.js";function et(p){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=p,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),m(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),m("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{et as default};