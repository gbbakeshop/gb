import{r,q as b,u as w,j as s,a as t}from"./app-586d90fb.js";import{A as x}from"./administrator-layout-53428616.js";import L from"./branch-bread-report-table-b681cd3a.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-67e8fc73.js";import{S as j}from"./skeleton-loader-dc25b710.js";import{S as v}from"./search-ef49cdf6.js";import D from"./sidebar-branches-393135a4.js";import{B as E}from"./bread-crumbs-86889bdb.js";import"./squire-icon-85bf4a31.js";import"./useDispatch-c98b54d7.js";import"./store-icon-86b4696d.js";import"./branches-services-30c36a33.js";import"./moment-06380e4c.js";import"./move-to-sales-report-form-c10e97e4.js";import"./x-mark-icon-4a8cce95.js";import"./input-c13e6338.js";import"./move-icon-c0a4216b.js";import"./exclamation-icon-f35a24e0.js";import"./transition-9c9359e9.js";import"./open-closed-e40102d7.js";import"./dialog-6cf9a2f4.js";import"./keyboard-e17f178d.js";import"./hidden-e2b81170.js";import"./branch-bread-report-edit-1b07b9e5.js";import"./pencil-icon-30bff870.js";import"./clock-icon-ca8cdb6e.js";import"./iconBase-5c7712ee.js";import"./index.esm-ed4776cc.js";import"./use-resolve-button-type-b1acdffe.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};
