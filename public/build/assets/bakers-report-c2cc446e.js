import{r as t,q as b,u as k,j as B,a as e}from"./app-6a556eca.js";import{B as L}from"./branch-layout-572fce84.js";import g from"./branch-bakers-report-table-0f7d2a47.js";import w from"./production-tabs-aa6ae8a9.js";import{S as x}from"./skeleton-loader-e1bfafe6.js";import{a as C}from"./records-services-8c083049.js";import{S as j}from"./search-9e32b151.js";import"./squire-icon-0d73afe5.js";import"./useDispatch-c038fac8.js";import"./store-icon-525bb67d.js";import"./branches-services-ab741d85.js";import"./database-icon-b104ce28.js";import"./calendar-icon-880fa9f9.js";import"./moment-161161c4.js";import"./branch-bakers-report-edit-7cba7392.js";import"./x-mark-icon-3f5f36c0.js";import"./input-ba465b71.js";import"./pencil-icon-28723d97.js";import"./transition-7ef188d1.js";import"./open-closed-cdb87e80.js";import"./dialog-9d8839d5.js";import"./keyboard-f966a89e.js";import"./hidden-11b9d246.js";import"./move-to-bread-report-form-f45b45d8.js";import"./move-icon-1783e0e9.js";import"./move-to-another-branch-92ad2358.js";import"./clock-icon-a40f6918.js";import"./iconBase-0773d4d8.js";import"./index.esm-cc929866.js";function rt(m){const{auth:r}=m,[s,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?r.user.branchid:i.split("/")[2],{refresh:f}=k(o=>o.app),[d,h]=t.useState([]),[a,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[f]),t.useEffect(()=>{const o=s.filter(S=>S.bread_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a]),B(L,{position:r.user.position,branchid:r.user.branchid,children:[e(w,{position:r.user.position}),e("br",{}),e(j,{search:a,setSearch:l}),c?e(x,{}):e(g,{account:r.user,branchid:p,data:a==""?s:d})]})}export{rt as default};
