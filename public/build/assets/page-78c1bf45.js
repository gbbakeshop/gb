import{r,q as h,u as d,j as a,a as e}from"./app-6a556eca.js";import{A as S}from"./administrator-layout-0e3e0f86.js";import w from"./account-table-dd5cd4db.js";import{S as x}from"./search-9e32b151.js";import b from"./sidebar-branches-c8613aad.js";import{B as A}from"./bread-crumbs-19da06f6.js";import{c as B}from"./account-services-846bd37e.js";import"./squire-icon-0d73afe5.js";import"./useDispatch-c038fac8.js";import"./store-icon-525bb67d.js";import"./branches-services-ab741d85.js";import"./eyes-icon-920905f1.js";import"./branch-account-delete-e4ce7e55.js";import"./trash-icon-aa032a00.js";import"./sweetalert2.all-df215551.js";import"./open-closed-cdb87e80.js";import"./keyboard-f966a89e.js";import"./use-resolve-button-type-73b6d5de.js";import"./iconBase-0773d4d8.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};