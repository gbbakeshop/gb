import{r,q as b,u as w,j as m,a as t}from"./app-baeea996.js";import{A as x}from"./administrator-layout-0ea72fbf.js";import L from"./branch-bread-report-table-4427d317.js";import{a as g}from"./records-services-66a159ca.js";import C from"./branch-bread-report-tabs-3da3f5da.js";import{S as j}from"./skeleton-loader-600177c1.js";import{S as v}from"./search-e096ff1e.js";import D from"./sidebar-branches-ef7621c7.js";import{B as E}from"./bread-crumbs-661b522e.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./moment-a0b0eb24.js";import"./move-to-sales-report-form-5f0dfb00.js";import"./x-mark-icon-3ab79267.js";import"./input-0144ebb9.js";import"./move-icon-b6f131fe.js";import"./exclamation-icon-0b730c32.js";import"./transition-ae95bb23.js";import"./open-closed-b7c1ccd9.js";import"./dialog-1f85104b.js";import"./keyboard-f8cbc153.js";import"./hidden-6dd5c8a8.js";import"./branch-bread-report-edit-d53504d6.js";import"./pencil-icon-f2299e75.js";import"./create-default-record-2cf8d366.js";import"./breads-services-c3da684a.js";import"./trash-icon-5baa8650.js";import"./loading-icon-275dea68.js";import"./clock-icon-2b0c7f96.js";import"./iconBase-f12f8e90.js";import"./index.esm-8a17ef8e.js";import"./use-resolve-button-type-dfd4156d.js";function pt(i){const[a,p]=r.useState([]),{auth:n}=i,[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:s,params:"bread"}).then(o=>{p(o.status),u(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),m(x,{children:[t(D,{}),m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),c?t(j,{}):t(L,{account:n.user,branchid:s,data:e==""?a:l})]})]})}export{pt as default};
