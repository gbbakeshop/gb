import{r as t,q as S,u as w,j as s,a}from"./app-ce493363.js";import{A as x}from"./administrator-layout-216c3f40.js";import b from"./branch-raw-materials-table-bbfd5e23.js";import{g}from"./raw-materials-services-2874092f.js";import{S as B}from"./skeleton-loader-0b7c2420.js";import{S as L}from"./search-b87769b8.js";import _ from"./sidebar-branches-3e107df2.js";import{B as j}from"./bread-crumbs-aeac8cf6.js";import"./squire-icon-3e532900.js";import"./useDispatch-d59e05e8.js";import"./store-icon-0ac78f10.js";import"./branches-services-be7628ca.js";import"./moment-86546afa.js";import"./branch-raw-materials-update-form-94cf98cc.js";import"./x-mark-icon-52d3c60b.js";import"./input-71d6f7cf.js";import"./pencil-icon-f6ce86d0.js";import"./transition-1be57896.js";import"./open-closed-fb90bc4c.js";import"./dialog-b8edea36.js";import"./keyboard-23fd2432.js";import"./hidden-882c8970.js";import"./use-resolve-button-type-61b9dde7.js";import"./iconBase-7d681c32.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
