import{a as o,j as t}from"./app-08d5fdd9.js";import{B as s}from"./branch-layout-758f73cf.js";import{B as a}from"./bread-crumbs-4632d0d7.js";import e from"./account-profile-db88bee6.js";import n from"./edit-form-07d0efbe.js";import m from"./account-settings-tab-6bb84b3e.js";import"./squire-icon-36f89341.js";import"./useDispatch-c969bf2e.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./database-icon-bacfd180.js";import"./calendar-icon-04fb4db3.js";import"./iconBase-854383f2.js";import"./account-services-fa452683.js";function A(i){const{auth:r}=i;return o(s,{position:r.user.position,branchid:r.user.branchid,children:t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(a,{branchid:r.user.branchid}),o(e,{id:r.user.id}),o(m,{branch:r.user.branchid,id:r.user.id}),o(n,{positions:r.user.position,data:r.user})]})})}export{A as default};