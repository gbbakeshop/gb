import{r as t,u as d,j as s,a as r}from"./app-586d90fb.js";import{A as w}from"./administrator-layout-53428616.js";import{a as S}from"./raw-materials-services-ae2d842e.js";import h from"./raw-materials-table-23d07eb9.js";import{S as x}from"./skeleton-loader-dc25b710.js";import C from"./raw-materials-tabs-8b797286.js";import{S as L}from"./search-ef49cdf6.js";import g from"./sidebar-controls-0bc48266.js";import"./squire-icon-85bf4a31.js";import"./useDispatch-c98b54d7.js";import"./store-icon-86b4696d.js";import"./branches-services-30c36a33.js";import"./moment-06380e4c.js";import"./raw-materials-form-c9b09ed9.js";import"./x-mark-icon-4a8cce95.js";import"./input-c13e6338.js";import"./ingredients-services-98518c56.js";import"./transition-9c9359e9.js";import"./open-closed-e40102d7.js";import"./dialog-6cf9a2f4.js";import"./keyboard-e17f178d.js";import"./hidden-e2b81170.js";import"./raw-materials-edit-c2723444.js";import"./pencil-icon-30bff870.js";import"./raw-materials-delete-0d228852.js";import"./trash-icon-7c93effa.js";import"./sweetalert2.all-0e27aa49.js";import"./raw-materials-create-c4b31368.js";import"./raw-materials-add-fc24e10f.js";import"./plus-icon-7e265da9.js";import"./index.esm-1343682d.js";import"./iconBase-5c7712ee.js";import"./index.esm-ed4776cc.js";import"./account-icons-04d21cd3.js";function at(_){const[e,p]=t.useState([]),[l,n]=t.useState(!0),{refresh:i}=d(o=>o.app),[f,c]=t.useState([]),[a,m]=t.useState("");return t.useEffect(()=>{const o=e.filter(u=>u.raw_materials.toLowerCase().includes(a.toLowerCase()));c(o)},[a,i]),t.useEffect(()=>{S().then(o=>{p(o),m(""),n(!1)})},[i]),s(w,{children:[r(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r("br",{}),r(L,{search:a,setSearch:m}),l?r(x,{}):r(h,{data:a==""?e:f})]})]})}export{at as default};
