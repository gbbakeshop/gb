import{r as o,q as p,j as e,a as r}from"./app-ef09a1a0.js";import{A as c}from"./administrator-layout-66ad0b35.js";import n from"./sidebar-branches-109edc8d.js";import{B as u}from"./bread-crumbs-e2cbb5ce.js";import d from"./account-tabs-a564b14d.js";import l from"./account-profile-25ab71b5.js";import f from"./attendance-table-ff168809.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./open-closed-3ca08ed2.js";import"./keyboard-9cab4daa.js";import"./use-resolve-button-type-ae400b2a.js";import"./iconBase-7c7c9ea7.js";import"./account-services-e2417ad7.js";import"./calendar-icon-2a3ae62d.js";import"./check-icon-6b6954db.js";import"./exclamation-icon-dd46762c.js";import"./loading-icon-7af66374.js";import"./attendance-services-d881d64b.js";import"./sweetalert2.all-fa9e0ac6.js";function G(m){const{auth:t}=m;o.useState([]);const{url:i}=p();o.useState("production"),o.useState(!0);const s=i.split("/")[4]??t.user.id,a=t.user.position=="admin"?i.split("/")[2]:t.user.branchid;return e(c,{children:[r(n,{}),e("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(u,{}),r(l,{}),r(d,{}),r(f,{branchid:a,userid:s})]})]})}export{G as default};
