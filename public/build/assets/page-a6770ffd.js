import{r as t,q as S,u as w,j as s,a}from"./app-f101d39f.js";import{A as x}from"./administrator-layout-54b73559.js";import b from"./branch-raw-materials-table-0b0f2d60.js";import{g}from"./raw-materials-services-3e76afbc.js";import{S as B}from"./skeleton-loader-6a7e536a.js";import{S as L}from"./search-fd02faca.js";import _ from"./sidebar-branches-f25f28a0.js";import{B as j}from"./bread-crumbs-0a3cb73c.js";import"./squire-icon-56201442.js";import"./useDispatch-503ed058.js";import"./store-icon-7b2fb89c.js";import"./branches-services-0ff0a163.js";import"./moment-3ed58f87.js";import"./branch-raw-materials-update-form-bfe9d15f.js";import"./x-mark-icon-d091796b.js";import"./input-514f2569.js";import"./pencil-icon-992e8eec.js";import"./transition-3d1135dd.js";import"./open-closed-70067b4f.js";import"./dialog-2c7a9974.js";import"./keyboard-a96c9ef8.js";import"./hidden-86be31c3.js";import"./use-resolve-button-type-a405b0cf.js";import"./iconBase-8bb8e750.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
