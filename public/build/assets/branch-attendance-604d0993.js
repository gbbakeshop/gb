import{q as a,a as t,j as n}from"./app-ef09a1a0.js";import{B as e}from"./bread-crumbs-e2cbb5ce.js";import"./squire-icon-26ab316c.js";import m from"./attendance-table-ca729ebf.js";import{B as s}from"./branch-layout-54ee40b1.js";import"./iconBase-7c7c9ea7.js";import"./branches-services-55444a51.js";import"./useDispatch-7c2ffa76.js";import"./loading-icon-850fac8f.js";import"./calendar-icon-2a3ae62d.js";import"./check-icon-6b6954db.js";import"./exclamation-icon-dd46762c.js";import"./attendance-services-d881d64b.js";import"./store-icon-7316d7ee.js";import"./database-icon-b3b189b7.js";function q(r){const{url:o}=a(),i=o.split("/")[2];return t(s,{position:r.auth.user.position,branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid,children:n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(e,{}),t(m,{branchid:r.auth.user.position=="admin"?i:r.auth.user.branchid})]})})}export{q as default};