import{u as d,r as e,j as s,a as t}from"./app-bc6632bd.js";import{A as S}from"./administrator-layout-4dcdce99.js";import{g as h}from"./account-services-697ee088.js";import w from"./accounts-table-9c7de37b.js";import{S as x}from"./skeleton-loader-fbd15785.js";import{S as b}from"./search-6e9fd3c8.js";import g from"./sidebar-controls-2c83481f.js";import A from"./account-tabs-6cbebb68.js";import"./squire-icon-7116d378.js";import"./useDispatch-4e45fd31.js";import"./store-icon-237e38d0.js";import"./branches-services-69a36442.js";import"./eyes-icon-0119478a.js";import"./delete-account-a9231e40.js";import"./trash-icon-839aa6f3.js";import"./sweetalert2.all-40f8fc90.js";import"./account-icons-778632f3.js";import"./database-icon-50972c7d.js";function J(L){const{refresh:m}=d(o=>o.app),[a,i]=e.useState([]),[c,n]=e.useState(!0),[p,l]=e.useState([]),[r,f]=e.useState("");return e.useEffect(()=>{h().then(o=>{i(o),n(!1)})},[m]),e.useEffect(()=>{const o=a.filter(u=>u.name.toLowerCase().includes(r.toLowerCase()));l(o)},[r]),s(S,{children:[t(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(A,{})}),t(b,{search:r,setSearch:f}),t("br",{}),c?t(x,{}):t(w,{data:r==""?a:p})]})]})}export{J as default};
