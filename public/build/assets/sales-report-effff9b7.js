import{r,u as i,q as x,h as L,B as g,j as p,a as t}from"./app-c2839df9.js";import{B}from"./branch-layout-f70b74ab.js";import R from"./branch-sales-report-table-60239175.js";import{a as v}from"./records-services-66a159ca.js";import w from"./production-tabs-6beeb06c.js";import{S as C}from"./skeleton-loader-1d727924.js";import{S as N}from"./search-e5b8ce4c.js";import j from"./branch-sales-report-search-date-e8e03a75.js";import{u as D}from"./useDispatch-1f3c838a.js";import"./squire-icon-4656697c.js";import"./store-icon-4ec72365.js";import"./branches-services-1fda892f.js";import"./database-icon-d27a9405.js";import"./calendar-icon-daa99dfd.js";import"./moment-5b62c3c2.js";import"./branch-sales-report-edit-29b8c9dd.js";import"./x-mark-icon-bc82a553.js";import"./input-0730b90a.js";import"./pencil-icon-753c20b9.js";import"./transition-1dd7a506.js";import"./open-closed-b627581f.js";import"./dialog-422d2b44.js";import"./keyboard-73319d4a.js";import"./hidden-bf05bc26.js";import"./clock-icon-6a82f67f.js";import"./iconBase-680f2092.js";import"./index.esm-12163295.js";function rt(m){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=m,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),p(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),p("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{rt as default};
