import{r as o,q as c,a as t,j as m}from"./app-c2839df9.js";import{B as n}from"./bread-crumbs-cbe8aa2d.js";import"./squire-icon-4656697c.js";import p from"./account-profile-58a68ade.js";import{B as u}from"./branch-layout-f70b74ab.js";import d from"./attendance-table-df1587a8.js";import l from"./account-settings-tab-110e474f.js";import"./iconBase-680f2092.js";import"./branches-services-1fda892f.js";import"./useDispatch-1f3c838a.js";import"./account-services-1c07d4c2.js";import"./store-icon-4ec72365.js";import"./database-icon-d27a9405.js";import"./calendar-icon-daa99dfd.js";import"./check-icon-b77f12b6.js";import"./exclamation-icon-3f26ee80.js";import"./loading-icon-99421445.js";import"./attendance-services-49ac3525.js";import"./sweetalert2.all-27f4a6d9.js";function z(e){const{auth:r}=e;o.useState([]);const{url:i}=c();o.useState("production"),o.useState(!0);const a=i.split("/")[4]??r.user.id,s=(i.split("/")[4],r.user.branchid);return t(u,{children:m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(n,{branchid:r.user.branchid}),t(p,{id:r.user.id}),t(l,{branch:r.user.branchid,id:r.user.id}),t(d,{branchid:s,userid:a})]})})}export{z as default};
