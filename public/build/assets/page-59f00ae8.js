import{r,q as b,u as w,j as i,a as t}from"./app-b6df9fca.js";import{A as x}from"./administrator-layout-ecb47308.js";import k from"./branch-bakers-report-table-b6b8da29.js";import{a as L}from"./records-services-85a57897.js";import g from"./branch-bakers-report-tabs-182700f9.js";import{S as C}from"./skeleton-loader-73fe09cd.js";import{S as j}from"./search-863bc847.js";import v from"./sidebar-branches-fa54d601.js";import{B as D}from"./bread-crumbs-52a16533.js";import"./squire-icon-0558eeed.js";import"./useDispatch-e4d7b871.js";import"./store-icon-f98f002d.js";import"./branches-services-774306c6.js";import"./moment-71de0a96.js";import"./branch-bakers-report-edit-4c93315a.js";import"./x-mark-icon-9d7a1a3b.js";import"./input-b4c42b2e.js";import"./pencil-icon-252f764d.js";import"./transition-645251c1.js";import"./open-closed-0b2f3211.js";import"./dialog-ac8079e2.js";import"./keyboard-73f86a78.js";import"./hidden-d86fe9ee.js";import"./move-to-bread-report-form-a78cb325.js";import"./move-icon-3c66e497.js";import"./move-to-another-branch-8f361078.js";import"./clock-icon-76c9978b.js";import"./iconBase-93258ff5.js";import"./index.esm-ee0ef1ad.js";import"./use-resolve-button-type-b4e5b663.js";function at(p){const[a,n]=r.useState([]),[c,u]=r.useState(!0),{url:f}=b(),s=f.split("/")[2],{refresh:m}=w(o=>o.app),[l,d]=r.useState([]),[e,h]=r.useState(""),{auth:S}=p;return r.useEffect(()=>{L({branchid:s,params:"bakers"}).then(o=>{n(o.status),u(!1)})},[m]),r.useEffect(()=>{const o=a.filter(B=>B.bread_name.toLowerCase().includes(e.toLowerCase()));d(o)},[e,m]),i(x,{children:[t(v,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(D,{}),t(g,{}),t("br",{}),t(j,{search:e,setSearch:h}),c?t(C,{}):t(k,{account:S.user,branchid:s,data:e==""?a:l})]})]})}export{at as default};
