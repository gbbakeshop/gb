import{r as o,q as c,a as t,j as m}from"./app-ca96d5b2.js";import{B as n}from"./bread-crumbs-587af919.js";import"./squire-icon-c4525b4e.js";import p from"./account-profile-1da0e7aa.js";import{B as u}from"./branch-layout-221c667b.js";import d from"./attendance-table-50efae8f.js";import l from"./account-settings-tab-affd8c01.js";import"./iconBase-e05136ac.js";import"./branches-services-cf1998c6.js";import"./useDispatch-1c9b41c0.js";import"./account-services-dd4dfcbf.js";import"./store-icon-402414b9.js";import"./database-icon-37e7d390.js";import"./calendar-icon-74d5c9a7.js";import"./check-icon-1ec419d1.js";import"./exclamation-icon-6dd86bb6.js";import"./loading-icon-7bf74983.js";import"./attendance-services-ced0fd03.js";import"./sweetalert2.all-0245363f.js";function z(e){const{auth:r}=e;o.useState([]);const{url:i}=c();o.useState("production"),o.useState(!0);const a=i.split("/")[4]??r.user.id,s=(i.split("/")[4],r.user.branchid);return t(u,{children:m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(n,{branchid:r.user.branchid}),t(p,{id:r.user.id}),t(l,{branch:r.user.branchid,id:r.user.id}),t(d,{branchid:s,userid:a})]})})}export{z as default};
