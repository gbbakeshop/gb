import{r,q as h,u as d,j as a,a as e}from"./app-48d131cf.js";import{A as S}from"./administrator-layout-a68bdcc5.js";import w from"./account-table-1775502f.js";import{S as x}from"./search-5446d844.js";import b from"./sidebar-branches-c30cbb8c.js";import{B as A}from"./bread-crumbs-ff0c0b09.js";import{c as B}from"./account-services-e04c2c4f.js";import"./squire-icon-2621064c.js";import"./useDispatch-2c748c8b.js";import"./store-icon-c9b1951a.js";import"./branches-services-3635ee7c.js";import"./eyes-icon-763f2517.js";import"./branch-account-delete-d75aa084.js";import"./trash-icon-0520e093.js";import"./sweetalert2.all-4419b8d6.js";import"./open-closed-70a2f03f.js";import"./keyboard-e08b4459.js";import"./use-resolve-button-type-f562d3a6.js";import"./iconBase-884d437c.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};
