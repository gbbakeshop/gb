import{q as a,a as t,j as n}from"./app-6b36097a.js";import{B as e}from"./bread-crumbs-21532062.js";import"./squire-icon-5d8c033d.js";import m from"./attendance-table-7fd9676e.js";import{B as s}from"./branch-layout-e4af1749.js";import"./iconBase-634c6585.js";import"./branches-services-44a2a740.js";import"./useDispatch-b10f62f9.js";import"./loading-icon-57975970.js";import"./calendar-icon-4815dc4f.js";import"./check-icon-1be169b7.js";import"./exclamation-icon-9f2689f1.js";import"./attendance-services-cf1b90af.js";import"./store-icon-a7c9a3d9.js";import"./database-icon-43191fbc.js";function q(r){const{url:o}=a(),i=o.split("/")[2];return t(s,{position:r.auth.user.position,branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid,children:n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(e,{}),t(m,{branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid})]})})}export{q as default};
