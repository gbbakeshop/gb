import{r as o,q as l,u as f,j as b,a}from"./app-3270b1e1.js";import{B as g}from"./branch-layout-1d9d8208.js";import S from"./bread-table-b6e5bb9f.js";import{g as B}from"./recipes-services-49cc2170.js";import _ from"./production-tabs-b68ee748.js";import{S as x}from"./skeleton-loader-e1db6641.js";import{g as P}from"./raw-materials-services-509a8228.js";import"./squire-icon-27e7fa65.js";import"./useDispatch-78183413.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./database-icon-49e0a479.js";import"./calendar-icon-2e786995.js";import"./create-production-form-f6c8893d.js";import"./x-mark-icon-e5a79486.js";import"./plus-icon-add6fa3a.js";import"./ingredients-services-f6401d1a.js";import"./records-services-8c083049.js";import"./transition-264e0c27.js";import"./open-closed-12324eb0.js";import"./dialog-a21274b5.js";import"./keyboard-12670607.js";import"./hidden-884e9ad3.js";import"./clock-icon-74a0ce91.js";import"./iconBase-174ddca8.js";import"./index.esm-3d289825.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};
