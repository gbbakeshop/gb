import{r as t,q as b,u as k,j as B,a as e}from"./app-2b2dd7b8.js";import{B as L}from"./branch-layout-4740e7e9.js";import g from"./branch-bakers-report-table-78539498.js";import w from"./production-tabs-4ca23d4e.js";import{S as x}from"./skeleton-loader-b9bb7611.js";import{a as C}from"./records-services-8c083049.js";import{S as j}from"./search-e3996a59.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./database-icon-39f04098.js";import"./calendar-icon-bed7f50c.js";import"./moment-c6236491.js";import"./branch-bakers-report-edit-b450537a.js";import"./x-mark-icon-a3c2c331.js";import"./input-fc1025c7.js";import"./pencil-icon-472973bd.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./move-to-bread-report-form-3bb06ef1.js";import"./move-icon-eb119ce5.js";import"./move-to-another-branch-ca2ef799.js";import"./clock-icon-5e975338.js";import"./iconBase-f989216d.js";import"./index.esm-cca27195.js";function rt(m){const{auth:r}=m,[s,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?r.user.branchid:i.split("/")[2],{refresh:f}=k(o=>o.app),[d,h]=t.useState([]),[a,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[f]),t.useEffect(()=>{const o=s.filter(S=>S.bread_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a]),B(L,{position:r.user.position,branchid:r.user.branchid,children:[e(w,{position:r.user.position}),e("br",{}),e(j,{search:a,setSearch:l}),c?e(x,{}):e(g,{account:r.user,branchid:p,data:a==""?s:d})]})}export{rt as default};