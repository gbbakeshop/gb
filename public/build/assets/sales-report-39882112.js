import{r,u as i,q as x,m as L,B as g,j as m,a as t}from"./app-c469e3d3.js";import{B}from"./branch-layout-3c39fda9.js";import R from"./branch-sales-report-table-0d482a9c.js";import{a as v}from"./records-services-66a159ca.js";import w from"./production-tabs-518bcdc6.js";import{S as C}from"./skeleton-loader-0a429f79.js";import{S as N}from"./search-3dc11d03.js";import j from"./branch-sales-report-search-date-e8ac745c.js";import{u as D}from"./useDispatch-9b73aee7.js";import"./squire-icon-f57118da.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./database-icon-c6cf3fdf.js";import"./calendar-icon-e76276d5.js";import"./moment-06cf66e1.js";import"./branch-sales-report-edit-4989271e.js";import"./x-mark-icon-83a4bcc4.js";import"./input-003dd785.js";import"./pencil-icon-0a43fae8.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./clock-icon-458fa36e.js";import"./iconBase-dd8be0d8.js";import"./index.esm-c7f3fc66.js";function rt(p){r.useState([]);const n=D(),{records:a}=i(o=>o.salesReport),{auth:e}=p,[c,u]=r.useState(!0);x();const d=e.user.branchid,{refresh:l}=i(o=>o.app),[f,h]=r.useState([]),[s,S]=r.useState("");return r.useEffect(()=>{v({branchid:d,params:"done",date:L().format("L")}).then(o=>{n(g(o.status)),u(!1)})},[l]),r.useEffect(()=>{const o=a.filter(b=>b.bread_name.toLowerCase().includes(s.toLowerCase()));h(o)},[s]),m(B,{position:e.user.position,branchid:e.user.branchid,children:[t(w,{position:e.user.position}),t("br",{}),m("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(j,{})}),t("div",{className:"flex-1",children:t(N,{search:s,setSearch:S})})]}),c?t(C,{}):t(R,{account:e.user,data:s==""?a:f})]})}export{rt as default};