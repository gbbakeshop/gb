import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-a4610531.js";import{A as L}from"./administrator-layout-6ba47809.js";import g from"./branch-sales-report-table-8b6786d4.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-5dffc75a.js";import{S as R}from"./skeleton-loader-6b29079c.js";import{S as j}from"./search-2ecb489f.js";import k from"./sidebar-branches-bd016303.js";import{B as D}from"./bread-crumbs-38045d93.js";import E from"./branch-sales-report-search-date-829b6095.js";import{u as P}from"./useDispatch-669033fe.js";import"./squire-icon-6fcda0ed.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./moment-590f3566.js";import"./branch-sales-report-edit-f958d1ad.js";import"./x-mark-icon-bce11f14.js";import"./input-647c8c23.js";import"./pencil-icon-4fdb6bf8.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./dialog-97bd931e.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";import"./clock-icon-443d1948.js";import"./iconBase-ad0eb347.js";import"./index.esm-9fcd241c.js";import"./use-resolve-button-type-bb7c502d.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
