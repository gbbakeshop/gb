import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-f101d39f.js";import{A as L}from"./administrator-layout-54b73559.js";import g from"./branch-sales-report-table-0afc3fd2.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-59b45711.js";import{S as R}from"./skeleton-loader-6a7e536a.js";import{S as j}from"./search-fd02faca.js";import k from"./sidebar-branches-f25f28a0.js";import{B as D}from"./bread-crumbs-0a3cb73c.js";import E from"./branch-sales-report-search-date-b291927b.js";import{u as P}from"./useDispatch-503ed058.js";import"./squire-icon-56201442.js";import"./store-icon-7b2fb89c.js";import"./branches-services-0ff0a163.js";import"./moment-3ed58f87.js";import"./branch-sales-report-edit-510740e1.js";import"./x-mark-icon-d091796b.js";import"./input-514f2569.js";import"./pencil-icon-992e8eec.js";import"./transition-3d1135dd.js";import"./open-closed-70067b4f.js";import"./dialog-2c7a9974.js";import"./keyboard-a96c9ef8.js";import"./hidden-86be31c3.js";import"./clock-icon-f85c11f1.js";import"./iconBase-8bb8e750.js";import"./index.esm-cbdae696.js";import"./use-resolve-button-type-a405b0cf.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
