import{r as o,q as l,u as f,j as b,a}from"./app-a4610531.js";import{B as g}from"./branch-layout-39110aa1.js";import S from"./bread-table-36e3dd70.js";import{g as B}from"./recipes-services-3a36e78d.js";import _ from"./production-tabs-551949ad.js";import{S as x}from"./skeleton-loader-6b29079c.js";import{g as P}from"./raw-materials-services-4349b854.js";import"./squire-icon-6fcda0ed.js";import"./useDispatch-669033fe.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./database-icon-5c05cb9e.js";import"./calendar-icon-14b24c3e.js";import"./create-production-form-130de98c.js";import"./x-mark-icon-bce11f14.js";import"./plus-icon-0be9cd7f.js";import"./ingredients-services-17c691c8.js";import"./records-services-8c083049.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./dialog-97bd931e.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";import"./clock-icon-443d1948.js";import"./iconBase-ad0eb347.js";import"./index.esm-9fcd241c.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};
