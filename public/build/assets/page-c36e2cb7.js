import{q as a,j as o,a as r}from"./app-17fabe6c.js";import{A as e}from"./administrator-layout-190befc9.js";import n from"./sidebar-branches-182efb02.js";import{B as p}from"./bread-crumbs-f3242ea2.js";import s from"./attendance-table-52a93ca9.js";import"./squire-icon-6d5a8750.js";import"./useDispatch-946d0582.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./open-closed-969ad825.js";import"./keyboard-adbd37b7.js";import"./use-resolve-button-type-84fc6829.js";import"./iconBase-9f6c11a0.js";import"./loading-icon-997561fc.js";import"./calendar-icon-2e8ac84e.js";import"./check-icon-2015e2b3.js";import"./exclamation-icon-0f193bd2.js";import"./attendance-services-5dc6dcf1.js";function P(t){const{url:i}=a(),m=i.split("/")[2];return o(e,{children:[r(n,{}),o("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(p,{}),r(s,{branchid:t.auth.user.position=="admin"?m:t.auth.user.branchid})]})]})}export{P as default};