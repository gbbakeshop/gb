import{r as o,q as v,u as m,h as c,C as w,j as s,a as r}from"./app-ca96d5b2.js";import{A as L}from"./administrator-layout-139bd827.js";import g from"./branch-sales-report-table-c40db010.js";import{a as C}from"./records-services-85a57897.js";import N from"./branch-sales-report-tabs-70fc8e65.js";import{S as R}from"./skeleton-loader-7949f6a7.js";import{S as j}from"./search-1e564179.js";import k from"./sidebar-branches-4ff80db7.js";import{B as A}from"./bread-crumbs-587af919.js";import D from"./branch-sales-report-search-date-367012c8.js";import{u as E}from"./useDispatch-1c9b41c0.js";import"./squire-icon-c4525b4e.js";import"./store-icon-402414b9.js";import"./branches-services-cf1998c6.js";import"./moment-be919951.js";import"./branch-sales-report-edit-c01b0fa9.js";import"./x-mark-icon-db2887fc.js";import"./input-87176cbc.js";import"./pencil-icon-7668261c.js";import"./transition-9319ce3a.js";import"./open-closed-6718804b.js";import"./dialog-5da5b32f.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";import"./clock-icon-3e111853.js";import"./iconBase-e05136ac.js";import"./index.esm-858ba9db.js";import"./use-resolve-button-type-a57752a3.js";function ir(n){const p=E(),{auth:a}=n,[d,l]=o.useState(!0),{url:u}=v(),f=u.split("/")[2],{refresh:h}=m(e=>e.app),[S,x]=o.useState([]),[t,B]=o.useState(""),{records:i}=m(e=>e.salesReport);return o.useEffect(()=>{C({branchid:f,params:"done",date:c().format("L"),userid:a.user.id,meridiem:c().format("A")}).then(e=>{p(w(e.status)),l(!1)})},[h]),o.useEffect(()=>{const e=i.filter(b=>b.bread_name.toLowerCase().includes(t.toLowerCase()));x(e)},[t]),s(L,{children:[r(k,{}),s("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(A,{}),r(N,{}),r("br",{}),s("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(D,{userid:a.user.id})}),r("div",{className:"flex-1",children:r(j,{search:t,setSearch:B})})]}),d?r(R,{}):r(g,{account:a.user,data:t==""?i:S})]})]})}export{ir as default};
