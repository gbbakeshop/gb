import{r,q as b,u as w,j as s,a as t}from"./app-181e2f4e.js";import{A as x}from"./administrator-layout-2b29f9ab.js";import L from"./branch-bread-report-table-05ccc4a1.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-32019f70.js";import{S as j}from"./skeleton-loader-04050284.js";import{S as v}from"./search-de8dbd4c.js";import D from"./sidebar-branches-4feb4fcf.js";import{B as E}from"./bread-crumbs-a7d09478.js";import"./squire-icon-a58bdbb6.js";import"./useDispatch-df4ea516.js";import"./store-icon-b58637df.js";import"./branches-services-8c69374c.js";import"./moment-723d030c.js";import"./move-to-sales-report-form-3c61dd42.js";import"./x-mark-icon-a4d68331.js";import"./input-73fd6c1c.js";import"./move-icon-5ba68f3c.js";import"./exclamation-icon-a3f21c6e.js";import"./transition-67a192b7.js";import"./open-closed-9e6f7b2c.js";import"./dialog-8f79c1f0.js";import"./keyboard-79fe27eb.js";import"./hidden-d0d9b1ac.js";import"./branch-bread-report-edit-a97cbfab.js";import"./pencil-icon-c9b6bfd9.js";import"./clock-icon-650019ea.js";import"./iconBase-95a3beea.js";import"./index.esm-99d74598.js";import"./use-resolve-button-type-8703a6e0.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};
