import{r as t,q as S,u as w,j as s,a}from"./app-ef09a1a0.js";import{A as x}from"./administrator-layout-66ad0b35.js";import b from"./branch-raw-materials-table-9e4e7c5a.js";import{g}from"./raw-materials-services-4f63509c.js";import{S as B}from"./skeleton-loader-8c8f6e8c.js";import{S as L}from"./search-b3d3565c.js";import _ from"./sidebar-branches-109edc8d.js";import{B as j}from"./bread-crumbs-e2cbb5ce.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./moment-0d1b12e8.js";import"./branch-raw-materials-update-form-e65f5bd4.js";import"./x-mark-icon-d16dc334.js";import"./input-b4cacb1d.js";import"./pencil-icon-9847225a.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";import"./use-resolve-button-type-ae400b2a.js";import"./iconBase-7c7c9ea7.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};