import{r as o,q as p,j as e,a as r}from"./app-baeea996.js";import{A as c}from"./administrator-layout-0ea72fbf.js";import n from"./sidebar-branches-ef7621c7.js";import{B as u}from"./bread-crumbs-661b522e.js";import d from"./account-tabs-197de40b.js";import l from"./account-profile-0a3ea376.js";import f from"./attendance-table-01cf0591.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./open-closed-b7c1ccd9.js";import"./keyboard-f8cbc153.js";import"./use-resolve-button-type-dfd4156d.js";import"./iconBase-f12f8e90.js";import"./account-services-11871d54.js";import"./calendar-icon-b9a5b511.js";import"./check-icon-251de77d.js";import"./exclamation-icon-0b730c32.js";import"./loading-icon-275dea68.js";import"./attendance-services-77b5e8aa.js";import"./sweetalert2.all-d3c11821.js";function G(m){const{auth:t}=m;o.useState([]);const{url:i}=p();o.useState("production"),o.useState(!0);const s=i.split("/")[4]??t.user.id,a=t.user.position=="admin"?i.split("/")[2]:t.user.branchid;return e(c,{children:[r(n,{}),e("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(u,{}),r(l,{}),r(d,{}),r(f,{branchid:a,userid:s})]})]})}export{G as default};
