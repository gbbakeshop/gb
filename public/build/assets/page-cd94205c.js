import{r as t,q as S,u as w,j as s,a}from"./app-baeea996.js";import{A as x}from"./administrator-layout-0ea72fbf.js";import b from"./branch-raw-materials-table-50e3bcc6.js";import{g}from"./raw-materials-services-41181819.js";import{S as B}from"./skeleton-loader-600177c1.js";import{S as L}from"./search-e096ff1e.js";import _ from"./sidebar-branches-ef7621c7.js";import{B as j}from"./bread-crumbs-661b522e.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./moment-a0b0eb24.js";import"./branch-raw-materials-update-form-71d66bfe.js";import"./x-mark-icon-3ab79267.js";import"./input-0144ebb9.js";import"./pencil-icon-f2299e75.js";import"./transition-ae95bb23.js";import"./open-closed-b7c1ccd9.js";import"./dialog-1f85104b.js";import"./keyboard-f8cbc153.js";import"./hidden-6dd5c8a8.js";import"./use-resolve-button-type-dfd4156d.js";import"./iconBase-f12f8e90.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};