import{r,q as b,u as w,j as s,a as t}from"./app-aa9f61b4.js";import{A as x}from"./administrator-layout-f25b0183.js";import L from"./branch-bread-report-table-4727daff.js";import{a as g}from"./records-services-8c083049.js";import C from"./branch-bread-report-tabs-85bbfcdc.js";import{S as j}from"./skeleton-loader-46a5492b.js";import{S as v}from"./search-87937855.js";import D from"./sidebar-branches-8035972c.js";import{B as E}from"./bread-crumbs-b0c0d1f1.js";import"./squire-icon-c99a134b.js";import"./useDispatch-ba3056c1.js";import"./store-icon-0378f152.js";import"./branches-services-9eae1888.js";import"./moment-08c1acf8.js";import"./move-to-sales-report-form-79867dc5.js";import"./x-mark-icon-cfd357f2.js";import"./input-337b756c.js";import"./move-icon-aa94450b.js";import"./exclamation-icon-ff9e782c.js";import"./transition-818a34c5.js";import"./open-closed-77f359ac.js";import"./dialog-16765613.js";import"./keyboard-1a2a3d06.js";import"./hidden-879eb808.js";import"./branch-bread-report-edit-3a9ce508.js";import"./pencil-icon-2db5b631.js";import"./clock-icon-df6ebcbb.js";import"./iconBase-c507104e.js";import"./index.esm-65423370.js";import"./use-resolve-button-type-d74162cf.js";function at(m){const[a,i]=r.useState([]),{auth:p}=m,[n,c]=r.useState(!0),{url:u}=b(),f=u.split("/")[2],{refresh:d}=w(o=>o.app),[l,h]=r.useState([]),[e,S]=r.useState("");return r.useEffect(()=>{g({branchid:f,params:"bread"}).then(o=>{i(o.status),c(!1)})},[d]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));h(o)},[e]),s(x,{children:[t(D,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(E,{}),t(C,{}),t("br",{}),t(v,{search:e,setSearch:S}),n?t(j,{}):t(L,{account:p.user,data:e==""?a:l})]})]})}export{at as default};
