import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-181e2f4e.js";import{A as L}from"./administrator-layout-2b29f9ab.js";import g from"./branch-sales-report-table-7bcf23f6.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-ee5ed044.js";import{S as R}from"./skeleton-loader-04050284.js";import{S as j}from"./search-de8dbd4c.js";import k from"./sidebar-branches-4feb4fcf.js";import{B as D}from"./bread-crumbs-a7d09478.js";import E from"./branch-sales-report-search-date-7c5e6676.js";import{u as P}from"./useDispatch-df4ea516.js";import"./squire-icon-a58bdbb6.js";import"./store-icon-b58637df.js";import"./branches-services-8c69374c.js";import"./moment-723d030c.js";import"./branch-sales-report-edit-3286eafb.js";import"./x-mark-icon-a4d68331.js";import"./input-73fd6c1c.js";import"./pencil-icon-c9b6bfd9.js";import"./transition-67a192b7.js";import"./open-closed-9e6f7b2c.js";import"./dialog-8f79c1f0.js";import"./keyboard-79fe27eb.js";import"./hidden-d0d9b1ac.js";import"./clock-icon-650019ea.js";import"./iconBase-95a3beea.js";import"./index.esm-99d74598.js";import"./use-resolve-button-type-8703a6e0.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
