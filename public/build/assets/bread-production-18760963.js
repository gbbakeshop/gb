import{r as o,q as l,u as f,j as b,a}from"./app-5d5d4b45.js";import{B as g}from"./branch-layout-9c4c73ea.js";import S from"./bread-table-53f8ca11.js";import{g as B}from"./recipes-services-fcb28bc5.js";import _ from"./production-tabs-0cbac984.js";import{S as x}from"./skeleton-loader-193ae5b2.js";import{g as P}from"./raw-materials-services-2eb90c3f.js";import"./squire-icon-1a44855d.js";import"./useDispatch-0c99af86.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./database-icon-0d7575f4.js";import"./calendar-icon-2f7eb342.js";import"./create-production-form-a035a2e4.js";import"./x-mark-icon-fbf8a4fc.js";import"./plus-icon-c319a032.js";import"./ingredients-services-72ce9016.js";import"./records-services-8c083049.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./clock-icon-3f407e69.js";import"./iconBase-5b5b9325.js";import"./index.esm-4f9a8794.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};