import{r as o,q as l,u as f,j as b,a}from"./app-5ca2c22d.js";import{B as g}from"./branch-layout-2e91d8d5.js";import S from"./bread-table-05234dc6.js";import{g as B}from"./recipes-services-0ce62ed7.js";import _ from"./production-tabs-362f35c4.js";import{S as x}from"./skeleton-loader-50443b5f.js";import{g as P}from"./raw-materials-services-7699e927.js";import"./squire-icon-d731efa4.js";import"./useDispatch-7400a40b.js";import"./store-icon-f54f9931.js";import"./branches-services-76a4b6cd.js";import"./database-icon-17a81738.js";import"./calendar-icon-46f098f6.js";import"./create-production-form-95c0d50a.js";import"./x-mark-icon-ff34a183.js";import"./plus-icon-e77818ca.js";import"./ingredients-services-b2058bbf.js";import"./records-services-8c083049.js";import"./transition-7bedf571.js";import"./open-closed-0307cadb.js";import"./dialog-3e1c936a.js";import"./keyboard-56fe7772.js";import"./hidden-9c42630f.js";import"./clock-icon-8181d790.js";import"./iconBase-fae5cc8e.js";import"./index.esm-30992858.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};
