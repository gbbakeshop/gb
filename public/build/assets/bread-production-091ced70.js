import{r as o,q as l,u as f,j as b,a}from"./app-82567c3a.js";import{B as g}from"./branch-layout-0f7da0c0.js";import S from"./bread-table-7560e355.js";import{g as B}from"./recipes-services-33eff623.js";import _ from"./production-tabs-d003265a.js";import{S as x}from"./skeleton-loader-eb22bc65.js";import{g as P}from"./raw-materials-services-974ac471.js";import"./squire-icon-99b4d3f5.js";import"./useDispatch-be7aef64.js";import"./store-icon-2c77a349.js";import"./branches-services-ff40547c.js";import"./database-icon-ed03ccce.js";import"./calendar-icon-e85200c8.js";import"./create-production-form-8ca1c752.js";import"./x-mark-icon-96afd279.js";import"./plus-icon-c5f7965e.js";import"./ingredients-services-a626c8f3.js";import"./records-services-85a57897.js";import"./transition-52d9ed09.js";import"./open-closed-245e8a1d.js";import"./dialog-4fbfd386.js";import"./keyboard-9010cb57.js";import"./hidden-c3d4a5fe.js";import"./clock-icon-77920630.js";import"./iconBase-d2c8648f.js";import"./index.esm-4030e30b.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};
