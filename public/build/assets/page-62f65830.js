import{r,q as b,u as w,j as s,a as t}from"./app-08d5fdd9.js";import{A as x}from"./administrator-layout-b2a89450.js";import L from"./branch-bread-report-table-92c38e4a.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-59491aae.js";import{S as j}from"./skeleton-loader-6937505f.js";import{S as v}from"./search-04688f00.js";import D from"./sidebar-branches-54d4e9f3.js";import{B as E}from"./bread-crumbs-4632d0d7.js";import"./squire-icon-36f89341.js";import"./useDispatch-c969bf2e.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./moment-fe6c6ad3.js";import"./move-to-sales-report-form-f373a953.js";import"./x-mark-icon-f599ee92.js";import"./input-e80c4358.js";import"./move-icon-2f82e175.js";import"./exclamation-icon-88a0dbaa.js";import"./transition-848bb259.js";import"./open-closed-7b339eda.js";import"./dialog-44d4e03b.js";import"./keyboard-af8c721b.js";import"./hidden-419a8fc1.js";import"./branch-bread-report-edit-8295be19.js";import"./pencil-icon-8141edde.js";import"./clock-icon-82a0dbb1.js";import"./iconBase-854383f2.js";import"./index.esm-f6b76d60.js";import"./use-resolve-button-type-0cbd914c.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};