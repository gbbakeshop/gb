import{r,q as b,u as w,j as i,a as t}from"./app-6b36097a.js";import{A as x}from"./administrator-layout-20207340.js";import k from"./branch-bakers-report-table-feaf46c9.js";import{a as L}from"./records-services-66a159ca.js";import g from"./branch-bakers-report-tabs-0d691946.js";import{S as C}from"./skeleton-loader-5ceeb466.js";import{S as j}from"./search-390caaa6.js";import v from"./sidebar-branches-938a78d2.js";import{B as D}from"./bread-crumbs-21532062.js";import"./squire-icon-5d8c033d.js";import"./useDispatch-b10f62f9.js";import"./store-icon-a7c9a3d9.js";import"./branches-services-44a2a740.js";import"./moment-30bd80f5.js";import"./branch-bakers-report-edit-7d29aca3.js";import"./x-mark-icon-4410d174.js";import"./input-1e32f492.js";import"./pencil-icon-b2284e31.js";import"./transition-dac551d1.js";import"./open-closed-9d6bac94.js";import"./dialog-226d2b97.js";import"./keyboard-c53aabe5.js";import"./hidden-b581b529.js";import"./move-to-bread-report-form-0c29f3d4.js";import"./move-icon-294da0c4.js";import"./move-to-another-branch-7369cf33.js";import"./clock-icon-a9f59d2d.js";import"./iconBase-634c6585.js";import"./index.esm-79b0dc8c.js";import"./use-resolve-button-type-a7cf201f.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
