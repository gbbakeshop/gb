import{r,q as h,u as d,j as a,a as e}from"./app-baeea996.js";import{A as S}from"./administrator-layout-0ea72fbf.js";import w from"./account-table-3edec9b1.js";import{S as x}from"./search-e096ff1e.js";import b from"./sidebar-branches-ef7621c7.js";import{B as A}from"./bread-crumbs-661b522e.js";import{c as B}from"./account-services-11871d54.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./eyes-icon-5ff8bb9b.js";import"./branch-account-delete-f1e49a96.js";import"./trash-icon-5baa8650.js";import"./sweetalert2.all-d3c11821.js";import"./open-closed-b7c1ccd9.js";import"./keyboard-f8cbc153.js";import"./use-resolve-button-type-dfd4156d.js";import"./iconBase-f12f8e90.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};