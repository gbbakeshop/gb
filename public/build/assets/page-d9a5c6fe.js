import{r,q as b,u as w,j as i,a as t}from"./app-0b22afbf.js";import{A as x}from"./administrator-layout-a43b6e18.js";import k from"./branch-bakers-report-table-d4d01414.js";import{a as L}from"./records-services-8c083049.js";import g from"./branch-bakers-report-tabs-4fb4622c.js";import{S as C}from"./skeleton-loader-81d1a40c.js";import{S as j}from"./search-5e7b3218.js";import v from"./sidebar-branches-df23fd1a.js";import{B as D}from"./bread-crumbs-a85f29e5.js";import"./squire-icon-336babdd.js";import"./useDispatch-940e11a0.js";import"./store-icon-75b6b186.js";import"./branches-services-57d80806.js";import"./moment-799d275c.js";import"./branch-bakers-report-edit-27a7b54f.js";import"./x-mark-icon-586dce8e.js";import"./input-a8494f3e.js";import"./pencil-icon-d6b86f1e.js";import"./transition-c31a130a.js";import"./open-closed-2b0c0a9b.js";import"./dialog-941ddc7a.js";import"./keyboard-4b752dc5.js";import"./hidden-9d83e123.js";import"./move-to-bread-report-form-b6ccab32.js";import"./move-icon-8e4f3a0f.js";import"./move-to-another-branch-021552f9.js";import"./clock-icon-0a97dfde.js";import"./iconBase-31a3515d.js";import"./index.esm-ee36540c.js";import"./use-resolve-button-type-222d5699.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
