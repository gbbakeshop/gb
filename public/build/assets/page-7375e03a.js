import{r as t,q as S,u as w,j as s,a}from"./app-fc9452ec.js";import{A as x}from"./administrator-layout-b1b91844.js";import b from"./branch-raw-materials-table-49cc48d2.js";import{g}from"./raw-materials-services-9298c04c.js";import{S as B}from"./skeleton-loader-93a93307.js";import{S as L}from"./search-1a3e8bc7.js";import _ from"./sidebar-branches-4488c20a.js";import{B as j}from"./bread-crumbs-0d9221cc.js";import"./squire-icon-29c0155f.js";import"./useDispatch-6304ffde.js";import"./store-icon-ce9eae4c.js";import"./branches-services-06a9e6d8.js";import"./moment-19d44035.js";import"./branch-raw-materials-update-form-e0086dc6.js";import"./x-mark-icon-b1a5bf89.js";import"./input-664844c7.js";import"./pencil-icon-981298f4.js";import"./transition-56fa63ed.js";import"./open-closed-99cca602.js";import"./dialog-46924d1a.js";import"./keyboard-a6f31502.js";import"./hidden-55a5c1a4.js";import"./use-resolve-button-type-61ccdd32.js";import"./iconBase-0f8b1903.js";function X(v){const[o,i]=t.useState([]),[m,p]=t.useState(!0),{url:c}=S(),n=c.split("/")[2],{refresh:l}=w(r=>r.app),[f,u]=t.useState([]),[e,d]=t.useState("");return t.useEffect(()=>{const r=o.filter(h=>h.raw_materials.toLowerCase().includes(e.toLowerCase()));u(r)},[e]),t.useEffect(()=>{g(n).then(r=>{i(r),p(!1)})},[l]),s(x,{children:[a(_,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[a(j,{}),a(L,{search:e,setSearch:d}),m?a(B,{}):a(b,{data:e==""?o:f})]})]})}export{X as default};
