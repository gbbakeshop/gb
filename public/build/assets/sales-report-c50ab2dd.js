import{r as o,u as i,q as L,h as m,C as g,j as p,a as r}from"./app-ca96d5b2.js";import{B as C}from"./branch-layout-221c667b.js";import R from"./branch-sales-report-table-c40db010.js";import{a as v}from"./records-services-85a57897.js";import w from"./production-tabs-eb43b889.js";import{S as B}from"./skeleton-loader-7949f6a7.js";import{S as N}from"./search-1e564179.js";import j from"./branch-sales-report-search-date-367012c8.js";import{u as D}from"./useDispatch-1c9b41c0.js";import"./squire-icon-c4525b4e.js";import"./store-icon-402414b9.js";import"./branches-services-cf1998c6.js";import"./database-icon-37e7d390.js";import"./calendar-icon-74d5c9a7.js";import"./moment-be919951.js";import"./branch-sales-report-edit-c01b0fa9.js";import"./x-mark-icon-db2887fc.js";import"./input-87176cbc.js";import"./pencil-icon-7668261c.js";import"./transition-9319ce3a.js";import"./open-closed-6718804b.js";import"./dialog-5da5b32f.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";import"./clock-icon-3e111853.js";import"./iconBase-e05136ac.js";import"./index.esm-858ba9db.js";function er(n){o.useState([]);const c=D(),{records:a}=i(e=>e.salesReport),{auth:t}=n,[d,u]=o.useState(!0);L();const f=t.user.branchid,{refresh:l}=i(e=>e.app),[h,S]=o.useState([]),[s,b]=o.useState("");return o.useEffect(()=>{v({branchid:f,params:"done",date:m().format("L"),userid:t.user.id,meridiem:m().format("A")}).then(e=>{c(g(e.status)),u(!1)})},[l]),o.useEffect(()=>{const e=a.filter(x=>x.bread_name.toLowerCase().includes(s.toLowerCase()));S(e)},[s]),p(C,{position:t.user.position,branchid:t.user.branchid,children:[r(w,{position:t.user.position}),r("br",{}),p("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(j,{userid:t.user.id})}),r("div",{className:"flex-1",children:r(N,{search:s,setSearch:b})})]}),d?r(B,{}):r(R,{account:t.user,data:s==""?a:h})]})}export{er as default};