import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-ef09a1a0.js";import{A as L}from"./administrator-layout-66ad0b35.js";import g from"./branch-sales-report-table-2e591bf1.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-c933a524.js";import{S as R}from"./skeleton-loader-8c8f6e8c.js";import{S as j}from"./search-b3d3565c.js";import k from"./sidebar-branches-109edc8d.js";import{B as D}from"./bread-crumbs-e2cbb5ce.js";import E from"./branch-sales-report-search-date-5708ec9c.js";import{u as P}from"./useDispatch-7c2ffa76.js";import"./squire-icon-26ab316c.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./moment-0d1b12e8.js";import"./branch-sales-report-edit-65a52912.js";import"./x-mark-icon-d16dc334.js";import"./input-b4cacb1d.js";import"./pencil-icon-9847225a.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";import"./clock-icon-31a2d2c9.js";import"./iconBase-7c7c9ea7.js";import"./index.esm-b11b9fec.js";import"./use-resolve-button-type-ae400b2a.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
