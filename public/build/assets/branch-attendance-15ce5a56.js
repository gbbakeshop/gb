import{q as a,a as t,j as n}from"./app-0b22afbf.js";import{B as e}from"./bread-crumbs-a85f29e5.js";import"./squire-icon-336babdd.js";import m from"./attendance-table-96d07a39.js";import{B as s}from"./branch-layout-1886afcd.js";import"./iconBase-31a3515d.js";import"./branches-services-57d80806.js";import"./useDispatch-940e11a0.js";import"./loading-icon-2295a6b4.js";import"./calendar-icon-c1b7d0f6.js";import"./check-icon-3c1f9754.js";import"./exclamation-icon-ef88f530.js";import"./attendance-services-6370a390.js";import"./store-icon-75b6b186.js";import"./database-icon-612ad8d6.js";function q(r){const{url:o}=a(),i=o.split("/")[2];return t(s,{position:r.auth.user.position,branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid,children:n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(e,{}),t(m,{branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid})]})})}export{q as default};
