import{r,q as h,u as d,j as a,a as e}from"./app-3270b1e1.js";import{A as S}from"./administrator-layout-06d4fe60.js";import w from"./account-table-7ee1dbc0.js";import{S as x}from"./search-c39ad9f8.js";import b from"./sidebar-branches-bba14823.js";import{B as A}from"./bread-crumbs-0023ceea.js";import{c as B}from"./account-services-6ca79237.js";import"./squire-icon-27e7fa65.js";import"./useDispatch-78183413.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./eyes-icon-53b8e0bc.js";import"./branch-account-delete-197e84d4.js";import"./trash-icon-68abe038.js";import"./sweetalert2.all-ac4047b1.js";import"./open-closed-12324eb0.js";import"./keyboard-12670607.js";import"./use-resolve-button-type-475870bd.js";import"./iconBase-174ddca8.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};
