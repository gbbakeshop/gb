import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-5900872d.js";import{A as L}from"./administrator-layout-c9cd033b.js";import g from"./branch-sales-report-table-c9cd4dab.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-f1d23e62.js";import{S as R}from"./skeleton-loader-85108e85.js";import{S as j}from"./search-793c1310.js";import k from"./sidebar-branches-3dd1a39a.js";import{B as D}from"./bread-crumbs-d94c3f8e.js";import E from"./branch-sales-report-search-date-8e319131.js";import{u as P}from"./useDispatch-15c9b9b4.js";import"./squire-icon-badb1f6c.js";import"./store-icon-c1f4360f.js";import"./branches-services-fe7e1245.js";import"./moment-1b7aa314.js";import"./branch-sales-report-edit-95a3991f.js";import"./x-mark-icon-c2db9d9f.js";import"./input-3dbed893.js";import"./pencil-icon-9d730d49.js";import"./transition-17b6df8c.js";import"./open-closed-efc52a04.js";import"./dialog-75a36335.js";import"./keyboard-743c1f9c.js";import"./hidden-130a8b57.js";import"./clock-icon-80172c37.js";import"./iconBase-5f07f12e.js";import"./index.esm-d6f5d9a3.js";import"./use-resolve-button-type-93a57146.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
