import{r as o,q as l,u as f,j as b,a}from"./app-7fb59a5e.js";import{B as g}from"./branch-layout-d4b111e9.js";import S from"./bread-table-2622bee0.js";import{g as B}from"./recipes-services-974eb54a.js";import _ from"./production-tabs-49ac3471.js";import{S as x}from"./skeleton-loader-47b36d8d.js";import{g as P}from"./raw-materials-services-6f6540a5.js";import"./squire-icon-86b3867b.js";import"./useDispatch-19790469.js";import"./store-icon-33da30d0.js";import"./branches-services-3c08282d.js";import"./database-icon-b3fd4f8c.js";import"./calendar-icon-3b3da792.js";import"./create-production-form-b4d80b87.js";import"./x-mark-icon-1f890bca.js";import"./plus-icon-e262b8df.js";import"./ingredients-services-b7ab281b.js";import"./records-services-66a159ca.js";import"./transition-46023121.js";import"./open-closed-88cf6580.js";import"./dialog-53ad0003.js";import"./keyboard-d78ca1c4.js";import"./hidden-e6878c7b.js";import"./clock-icon-58d65d34.js";import"./iconBase-9c94283f.js";import"./index.esm-c08795db.js";function W(p){const{auth:t}=p,[i,n]=o.useState([]),[m,c]=o.useState([]),[u,d]=o.useState(!0),{url:e}=l(),s=e.split("/")[2]=="bread-production"?t.user.branchid:e.split("/")[2],{refresh:h}=f(r=>r.app);return o.useEffect(()=>{B().then(r=>{n(r),d(!1)}),P(s).then(r=>{c(r)})},[h]),b(g,{position:t.user.position,branchid:t.user.branchid,children:[a(_,{position:t.user.position,branchid:t.user.branchid}),u?a(x,{}):a(S,{account:t.user,branchid:s,data2:m,data:i.length==0?[]:i})]})}export{W as default};