import{r,q as h,u as d,j as a,a as e}from"./app-6b36097a.js";import{A as S}from"./administrator-layout-20207340.js";import w from"./account-table-06a65f24.js";import{S as x}from"./search-390caaa6.js";import b from"./sidebar-branches-938a78d2.js";import{B as A}from"./bread-crumbs-21532062.js";import{c as B}from"./account-services-5bf8b595.js";import"./squire-icon-5d8c033d.js";import"./useDispatch-b10f62f9.js";import"./store-icon-a7c9a3d9.js";import"./branches-services-44a2a740.js";import"./eyes-icon-c39febc8.js";import"./branch-account-delete-2d1c305c.js";import"./trash-icon-a40352db.js";import"./sweetalert2.all-26dce3c8.js";import"./open-closed-9d6bac94.js";import"./keyboard-c53aabe5.js";import"./use-resolve-button-type-a7cf201f.js";import"./iconBase-634c6585.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};
