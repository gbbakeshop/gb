import{r as t,u as g,q as h,j as a,a as o}from"./app-ce493363.js";import{A as w}from"./administrator-layout-216c3f40.js";import{g as x}from"./ingredients-services-b60aba31.js";import L from"./ingredients-table-46967ecd.js";import{S as b}from"./skeleton-loader-0b7c2420.js";import{S as C}from"./search-b87769b8.js";import j from"./sidebar-controls-e5b29c83.js";import v from"./recipes-tabs-dcf4eb7c.js";import"./squire-icon-3e532900.js";import"./useDispatch-d59e05e8.js";import"./store-icon-0ac78f10.js";import"./branches-services-be7628ca.js";import"./ingredients-show-51a348c4.js";import"./x-mark-icon-52d3c60b.js";import"./eyes-icon-912058e8.js";import"./transition-1be57896.js";import"./open-closed-fb90bc4c.js";import"./dialog-b8edea36.js";import"./keyboard-23fd2432.js";import"./hidden-882c8970.js";import"./ingredients-edit-18c8bcc9.js";import"./pencil-icon-f6ce86d0.js";import"./trash-icon-15dec3ef.js";import"./input-71d6f7cf.js";import"./raw-materials-services-2874092f.js";import"./sweetalert2.all-d564ffc1.js";import"./ingredients-delete-73480ef4.js";import"./account-icons-ea22bc84.js";import"./index.esm-6366304e.js";import"./iconBase-7d681c32.js";function rt(D){const[s,i]=t.useState([]),[m,p]=t.useState(!0),{refresh:n}=g(r=>r.app),[c,l]=t.useState([]),[e,f]=t.useState(""),{url:u}=h(),d=u.split("/")[3];return t.useEffect(()=>{x().then(r=>{i(r.status),p(!1)})},[n]),t.useEffect(()=>{const r=s.filter(S=>S.code.toLowerCase().includes(e.toLowerCase()));l(r)},[e]),a(w,{children:[o(j,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(v,{page:d}),o("br",{}),o(C,{search:e,setSearch:f}),m?o(b,{}):o(L,{data:e==""?s:c})]})]})}export{rt as default};
