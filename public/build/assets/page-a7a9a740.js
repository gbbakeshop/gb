import{r,q as h,u as d,j as a,a as e}from"./app-2b2dd7b8.js";import{A as S}from"./administrator-layout-9c4dcc5b.js";import w from"./account-table-b189d609.js";import{S as x}from"./search-e3996a59.js";import b from"./sidebar-branches-0ccea373.js";import{B as A}from"./bread-crumbs-8eebd306.js";import{c as B}from"./account-services-97543878.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./eyes-icon-535472df.js";import"./branch-account-delete-14743cd9.js";import"./trash-icon-e03020b4.js";import"./sweetalert2.all-54f7e21d.js";import"./open-closed-d4a585f0.js";import"./keyboard-fa2556d0.js";import"./use-resolve-button-type-c4a04515.js";import"./iconBase-f989216d.js";function K(j){const[c,i]=r.useState([]),[o,m]=r.useState(""),{url:n}=h(),p=n.split("/")[2],[s,u]=r.useState([]),{refresh:f}=d(t=>t.app);return r.useEffect(()=>{B(p).then(t=>{u(t)})},[f]),r.useEffect(()=>{const t=s.filter(l=>l.name.toLowerCase().includes(o.toLowerCase()));i(t)},[o]),a(S,{children:[e(b,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(A,{}),e(x,{search:o,setSearch:m}),e(w,{data:o==""?s:c})]})]})}export{K as default};