import{r as a,q as B,u as l,h as v,D as w,j as c,a as e}from"./app-c2839df9.js";import{A as L}from"./administrator-layout-cfcdefb1.js";import"./moment-5b62c3c2.js";import{c as g}from"./selecta-services-b2c4ac81.js";import{S as D}from"./skeleton-loader-1d727924.js";import{S as N}from"./search-e5b8ce4c.js";import _ from"./sidebar-branches-aed566c3.js";import{B as j}from"./bread-crumbs-cbe8aa2d.js";import C from"./tab-01dbc665.js";import E from"./branch-selecta-records-table-d0c89aef.js";import R from"./branch-selecta-search-date-b5dbbb5f.js";import{u as k}from"./useDispatch-1f3c838a.js";import"./squire-icon-4656697c.js";import"./store-icon-4ec72365.js";import"./branches-services-1fda892f.js";import"./open-closed-b627581f.js";import"./keyboard-73319d4a.js";import"./use-resolve-button-type-52602bbc.js";import"./iconBase-680f2092.js";import"./branch-select-edit-record-41e24d00.js";import"./pencil-icon-753c20b9.js";import"./loading-icon-99421445.js";import"./x-mark-icon-bc82a553.js";import"./input-0730b90a.js";import"./transition-1dd7a506.js";import"./dialog-422d2b44.js";import"./hidden-bf05bc26.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};
