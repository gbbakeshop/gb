import{r as t,q as S,u as w,j as s,a}from"./app-b2227ccf.js";import{A as x}from"./administrator-layout-7d244d4e.js";import b from"./branch-raw-materials-table-fd8f0ecf.js";import{g}from"./raw-materials-services-7fb7c7a1.js";import{S as B}from"./skeleton-loader-67a23449.js";import{S as L}from"./search-7dcee729.js";import _ from"./sidebar-branches-077d58d9.js";import{B as j}from"./bread-crumbs-98085cb7.js";import"./squire-icon-96ff74c8.js";import"./useDispatch-036a067f.js";import"./store-icon-5c10a55b.js";import"./branches-services-2c9e0b68.js";import"./moment-0fe98ddc.js";import"./branch-raw-materials-update-form-ab070fe4.js";import"./x-mark-icon-364cd7fe.js";import"./input-18bcb6f8.js";import"./pencil-icon-846d21c7.js";import"./transition-3d2fd76a.js";import"./open-closed-3b6062ed.js";import"./dialog-14532e0a.js";import"./keyboard-2daaab9e.js";import"./hidden-7444e4e3.js";import"./use-resolve-button-type-cd45761d.js";import"./iconBase-d069815b.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
