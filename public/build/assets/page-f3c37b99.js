import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-17fabe6c.js";import{A as L}from"./administrator-layout-190befc9.js";import g from"./branch-sales-report-table-7adb15ec.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-070c5a48.js";import{S as R}from"./skeleton-loader-7580b150.js";import{S as j}from"./search-5afa0a04.js";import k from"./sidebar-branches-182efb02.js";import{B as D}from"./bread-crumbs-f3242ea2.js";import E from"./branch-sales-report-search-date-15dcead5.js";import{u as P}from"./useDispatch-946d0582.js";import"./squire-icon-6d5a8750.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./moment-2453cc80.js";import"./branch-sales-report-edit-6126de91.js";import"./x-mark-icon-a7739838.js";import"./input-f670405a.js";import"./pencil-icon-e87d2592.js";import"./transition-e0881b81.js";import"./open-closed-969ad825.js";import"./dialog-a479cd53.js";import"./keyboard-adbd37b7.js";import"./hidden-0579742e.js";import"./clock-icon-0b05de90.js";import"./iconBase-9f6c11a0.js";import"./index.esm-cfc065a9.js";import"./use-resolve-button-type-84fc6829.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
