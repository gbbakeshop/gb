import{r as t,u as d,j as i,a as r}from"./app-58c232b1.js";import{A as S}from"./administrator-layout-5360fbc3.js";import{i as h}from"./selecta-services-9d66cf6c.js";import w from"./selecta-table-a8dfd0ab.js";import{S as x}from"./skeleton-loader-ea17887d.js";import{S as L}from"./search-95efc144.js";import g from"./sidebar-controls-aae9bda8.js";import"./squire-icon-421251e3.js";import"./useDispatch-e14d11fc.js";import"./store-icon-f0cc5185.js";import"./branches-services-24cd2737.js";import"./moment-d1381db6.js";import"./create-selecta-form-60d4a192.js";import"./x-mark-icon-3c2adc09.js";import"./input-2ec57ae4.js";import"./loading-icon-e7ccef80.js";import"./transition-9e9babe5.js";import"./open-closed-3d9d6bcd.js";import"./dialog-f60f0d29.js";import"./keyboard-f06248a4.js";import"./hidden-3ca31024.js";import"./delete-selecta-e7d95345.js";import"./trash-icon-caca16ce.js";import"./sweetalert2.all-4f68b76b.js";import"./update-select-form-8f9ee8a8.js";import"./pencil-icon-0e765024.js";import"./account-icons-9f3fa17a.js";function W(C){const[a,m]=t.useState([]),[p,c]=t.useState(!0),[l,n]=t.useState([]),[e,f]=t.useState(""),{refresh:s}=d(o=>o.app);return t.useEffect(()=>{h().then(o=>{m(o),c(!1)})},[s]),t.useEffect(()=>{const o=a.filter(u=>u.product_name.toLowerCase().includes(e.toLowerCase()));n(o)},[e,s]),i(S,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(L,{search:e,setSearch:f}),p?r(x,{}):r(w,{data:e==""?a:l})]})]})}export{W as default};
