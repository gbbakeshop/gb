import{r as t,q as S,u as w,j as s,a}from"./app-ca96d5b2.js";import{A as x}from"./administrator-layout-139bd827.js";import b from"./branch-raw-materials-table-d328c58b.js";import{g}from"./raw-materials-services-f9f6362e.js";import{S as B}from"./skeleton-loader-7949f6a7.js";import{S as L}from"./search-1e564179.js";import _ from"./sidebar-branches-4ff80db7.js";import{B as j}from"./bread-crumbs-587af919.js";import"./squire-icon-c4525b4e.js";import"./useDispatch-1c9b41c0.js";import"./store-icon-402414b9.js";import"./branches-services-cf1998c6.js";import"./moment-be919951.js";import"./branch-raw-materials-update-form-8666f8ab.js";import"./x-mark-icon-db2887fc.js";import"./input-87176cbc.js";import"./pencil-icon-7668261c.js";import"./transition-9319ce3a.js";import"./open-closed-6718804b.js";import"./dialog-5da5b32f.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";import"./use-resolve-button-type-a57752a3.js";import"./iconBase-e05136ac.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
