import{r as o,q as l,u as f,j as b,a}from"./app-c2839df9.js";import{B as g}from"./branch-layout-f70b74ab.js";import S from"./bread-table-4d065e45.js";import{g as B}from"./recipes-services-e7b2d0d4.js";import _ from"./production-tabs-6beeb06c.js";import{S as x}from"./skeleton-loader-1d727924.js";import{g as P}from"./raw-materials-services-b49eeea6.js";import"./squire-icon-4656697c.js";import"./useDispatch-1f3c838a.js";import"./store-icon-4ec72365.js";import"./branches-services-1fda892f.js";import"./database-icon-d27a9405.js";import"./calendar-icon-daa99dfd.js";import"./create-production-form-e362db1a.js";import"./x-mark-icon-bc82a553.js";import"./plus-icon-13fd1b1d.js";import"./ingredients-services-a375c067.js";import"./records-services-66a159ca.js";import"./transition-1dd7a506.js";import"./open-closed-b627581f.js";import"./dialog-422d2b44.js";import"./keyboard-73319d4a.js";import"./hidden-bf05bc26.js";import"./clock-icon-6a82f67f.js";import"./iconBase-680f2092.js";import"./index.esm-12163295.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};
