import{r,q as b,u as w,j as i,a as t}from"./app-b2227ccf.js";import{A as x}from"./administrator-layout-7d244d4e.js";import k from"./branch-bakers-report-table-0d8e105c.js";import{a as L}from"./records-services-8c083049.js";import g from"./branch-bakers-report-tabs-62dcaadb.js";import{S as C}from"./skeleton-loader-67a23449.js";import{S as j}from"./search-7dcee729.js";import v from"./sidebar-branches-077d58d9.js";import{B as D}from"./bread-crumbs-98085cb7.js";import"./squire-icon-96ff74c8.js";import"./useDispatch-036a067f.js";import"./store-icon-5c10a55b.js";import"./branches-services-2c9e0b68.js";import"./moment-0fe98ddc.js";import"./branch-bakers-report-edit-dd433b01.js";import"./x-mark-icon-364cd7fe.js";import"./input-18bcb6f8.js";import"./pencil-icon-846d21c7.js";import"./transition-3d2fd76a.js";import"./open-closed-3b6062ed.js";import"./dialog-14532e0a.js";import"./keyboard-2daaab9e.js";import"./hidden-7444e4e3.js";import"./move-to-bread-report-form-c9de3e52.js";import"./move-icon-6bc172e7.js";import"./move-to-another-branch-818b0a6c.js";import"./clock-icon-9a957005.js";import"./iconBase-d069815b.js";import"./index.esm-606822bb.js";import"./use-resolve-button-type-cd45761d.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
