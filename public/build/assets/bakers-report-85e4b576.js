import{r as t,q as b,u as k,j as B,a as e}from"./app-ef09a1a0.js";import{B as L}from"./branch-layout-54ee40b1.js";import g from"./branch-bakers-report-table-d83e028b.js";import w from"./production-tabs-61f74730.js";import{S as x}from"./skeleton-loader-8c8f6e8c.js";import{a as C}from"./records-services-8c083049.js";import{S as j}from"./search-b3d3565c.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./database-icon-b3b189b7.js";import"./calendar-icon-2a3ae62d.js";import"./moment-0d1b12e8.js";import"./branch-bakers-report-edit-4c038a78.js";import"./x-mark-icon-d16dc334.js";import"./input-b4cacb1d.js";import"./pencil-icon-9847225a.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";import"./move-to-bread-report-form-ec78f66a.js";import"./move-icon-74416c49.js";import"./move-to-another-branch-5ae1dc73.js";import"./clock-icon-31a2d2c9.js";import"./iconBase-7c7c9ea7.js";import"./index.esm-b11b9fec.js";function rt(m){const{auth:r}=m,[s,n]=t.useState([]);t.useState([]);const[c,u]=t.useState(!0),{url:i}=b(),p=i.split("/")[2]=="bakers-report"?r.user.branchid:i.split("/")[2],{refresh:f}=k(o=>o.app),[d,h]=t.useState([]),[a,l]=t.useState("");return t.useEffect(()=>{C({branchid:p,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[f]),t.useEffect(()=>{const o=s.filter(S=>S.bread_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a]),B(L,{position:r.user.position,branchid:r.user.branchid,children:[e(w,{position:r.user.position}),e("br",{}),e(j,{search:a,setSearch:l}),c?e(x,{}):e(g,{account:r.user,branchid:p,data:a==""?s:d})]})}export{rt as default};