import{u as d,r as e,j as s,a as t}from"./app-b6df9fca.js";import{A as S}from"./administrator-layout-ecb47308.js";import{g as h}from"./account-services-8f376e65.js";import w from"./accounts-table-6bec555e.js";import{S as x}from"./skeleton-loader-73fe09cd.js";import{S as b}from"./search-863bc847.js";import g from"./sidebar-controls-d6fa1ecc.js";import A from"./account-tabs-f2c536b9.js";import"./squire-icon-0558eeed.js";import"./useDispatch-e4d7b871.js";import"./store-icon-f98f002d.js";import"./branches-services-774306c6.js";import"./eyes-icon-8f75eb50.js";import"./delete-account-49bf9bfe.js";import"./trash-icon-83b3ed6e.js";import"./sweetalert2.all-b109080a.js";import"./account-icons-414855ae.js";import"./database-icon-ad3669cc.js";function J(L){const{refresh:m}=d(o=>o.app),[a,i]=e.useState([]),[c,n]=e.useState(!0),[p,l]=e.useState([]),[r,f]=e.useState("");return e.useEffect(()=>{h().then(o=>{i(o),n(!1)})},[m]),e.useEffect(()=>{const o=a.filter(u=>u.name.toLowerCase().includes(r.toLowerCase()));l(o)},[r]),s(S,{children:[t(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(A,{})}),t(b,{search:r,setSearch:f}),t("br",{}),c?t(x,{}):t(w,{data:r==""?a:p})]})]})}export{J as default};
