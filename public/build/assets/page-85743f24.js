import{r,q as b,u as w,j as i,a as t}from"./app-c2839df9.js";import{A as x}from"./administrator-layout-cfcdefb1.js";import k from"./branch-bakers-report-table-64affd66.js";import{a as L}from"./records-services-66a159ca.js";import g from"./branch-bakers-report-tabs-d70e57ff.js";import{S as C}from"./skeleton-loader-1d727924.js";import{S as j}from"./search-e5b8ce4c.js";import v from"./sidebar-branches-aed566c3.js";import{B as D}from"./bread-crumbs-cbe8aa2d.js";import"./squire-icon-4656697c.js";import"./useDispatch-1f3c838a.js";import"./store-icon-4ec72365.js";import"./branches-services-1fda892f.js";import"./moment-5b62c3c2.js";import"./branch-bakers-report-edit-141c239f.js";import"./x-mark-icon-bc82a553.js";import"./input-0730b90a.js";import"./pencil-icon-753c20b9.js";import"./transition-1dd7a506.js";import"./open-closed-b627581f.js";import"./dialog-422d2b44.js";import"./keyboard-73319d4a.js";import"./hidden-bf05bc26.js";import"./move-to-bread-report-form-efbeb1de.js";import"./move-icon-a77b802b.js";import"./move-to-another-branch-877ff114.js";import"./clock-icon-6a82f67f.js";import"./iconBase-680f2092.js";import"./index.esm-12163295.js";import"./use-resolve-button-type-52602bbc.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
