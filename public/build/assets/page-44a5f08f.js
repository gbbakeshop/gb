import{r,q as h,u as d,j as a,a as e}from"./app-0b22afbf.js";import{A as S}from"./administrator-layout-a43b6e18.js";import w from"./account-table-3c24d515.js";import{S as x}from"./search-5e7b3218.js";import b from"./sidebar-branches-df23fd1a.js";import{B as A}from"./bread-crumbs-a85f29e5.js";import{c as B}from"./account-services-10268d80.js";import"./squire-icon-336babdd.js";import"./useDispatch-940e11a0.js";import"./store-icon-75b6b186.js";import"./branches-services-57d80806.js";import"./eyes-icon-7d9b3681.js";import"./branch-account-delete-0de979d6.js";import"./trash-icon-8ba567e8.js";import"./sweetalert2.all-64c770a9.js";import"./open-closed-2b0c0a9b.js";import"./keyboard-4b752dc5.js";import"./use-resolve-button-type-222d5699.js";import"./iconBase-31a3515d.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};
