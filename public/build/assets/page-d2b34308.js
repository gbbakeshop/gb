import{r as t,q as b,u as i,h as v,B as w,j as a,a as r}from"./app-6b36097a.js";import{A as L}from"./administrator-layout-20207340.js";import g from"./branch-sales-report-table-66ca8227.js";import{a as N}from"./records-services-66a159ca.js";import C from"./branch-sales-report-tabs-e91c7c3d.js";import{S as R}from"./skeleton-loader-5ceeb466.js";import{S as j}from"./search-390caaa6.js";import k from"./sidebar-branches-938a78d2.js";import{B as D}from"./bread-crumbs-21532062.js";import E from"./branch-sales-report-search-date-c24f352d.js";import{u as P}from"./useDispatch-b10f62f9.js";import"./squire-icon-5d8c033d.js";import"./store-icon-a7c9a3d9.js";import"./branches-services-44a2a740.js";import"./moment-30bd80f5.js";import"./branch-sales-report-edit-6d3bf91d.js";import"./x-mark-icon-4410d174.js";import"./input-1e32f492.js";import"./pencil-icon-b2284e31.js";import"./transition-dac551d1.js";import"./open-closed-9d6bac94.js";import"./dialog-226d2b97.js";import"./keyboard-c53aabe5.js";import"./hidden-b581b529.js";import"./clock-icon-a9f59d2d.js";import"./iconBase-634c6585.js";import"./index.esm-79b0dc8c.js";import"./use-resolve-button-type-a7cf201f.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
