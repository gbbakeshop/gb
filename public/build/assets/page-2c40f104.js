import{r,q as b,u as w,j as i,a as t}from"./app-08d5fdd9.js";import{A as x}from"./administrator-layout-b2a89450.js";import k from"./branch-bakers-report-table-ccdf6f99.js";import{a as L}from"./records-services-8c083049.js";import g from"./branch-bakers-report-tabs-ad9b3847.js";import{S as C}from"./skeleton-loader-6937505f.js";import{S as j}from"./search-04688f00.js";import v from"./sidebar-branches-54d4e9f3.js";import{B as D}from"./bread-crumbs-4632d0d7.js";import"./squire-icon-36f89341.js";import"./useDispatch-c969bf2e.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./moment-fe6c6ad3.js";import"./branch-bakers-report-edit-13babe1b.js";import"./x-mark-icon-f599ee92.js";import"./input-e80c4358.js";import"./pencil-icon-8141edde.js";import"./transition-848bb259.js";import"./open-closed-7b339eda.js";import"./dialog-44d4e03b.js";import"./keyboard-af8c721b.js";import"./hidden-419a8fc1.js";import"./move-to-bread-report-form-82607849.js";import"./move-icon-2f82e175.js";import"./move-to-another-branch-d17e2d3d.js";import"./clock-icon-82a0dbb1.js";import"./iconBase-854383f2.js";import"./index.esm-f6b76d60.js";import"./use-resolve-button-type-0cbd914c.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};