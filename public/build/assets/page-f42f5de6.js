import{r,q as b,u as w,j as i,a as t}from"./app-baeea996.js";import{A as x}from"./administrator-layout-0ea72fbf.js";import k from"./branch-bakers-report-table-1f7bed47.js";import{a as L}from"./records-services-66a159ca.js";import g from"./branch-bakers-report-tabs-427669fa.js";import{S as C}from"./skeleton-loader-600177c1.js";import{S as j}from"./search-e096ff1e.js";import v from"./sidebar-branches-ef7621c7.js";import{B as D}from"./bread-crumbs-661b522e.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./moment-a0b0eb24.js";import"./branch-bakers-report-edit-1a837da7.js";import"./x-mark-icon-3ab79267.js";import"./input-0144ebb9.js";import"./pencil-icon-f2299e75.js";import"./transition-ae95bb23.js";import"./open-closed-b7c1ccd9.js";import"./dialog-1f85104b.js";import"./keyboard-f8cbc153.js";import"./hidden-6dd5c8a8.js";import"./move-to-bread-report-form-72f71e52.js";import"./move-icon-b6f131fe.js";import"./move-to-another-branch-89655994.js";import"./clock-icon-2b0c7f96.js";import"./iconBase-f12f8e90.js";import"./index.esm-8a17ef8e.js";import"./use-resolve-button-type-dfd4156d.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
