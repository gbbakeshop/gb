import{r as a,q as B,u as l,m as v,D as w,j as c,a as e}from"./app-ef09a1a0.js";import{A as L}from"./administrator-layout-66ad0b35.js";import"./moment-0d1b12e8.js";import{c as g}from"./selecta-services-1e67ee1b.js";import{S as D}from"./skeleton-loader-8c8f6e8c.js";import{S as N}from"./search-b3d3565c.js";import _ from"./sidebar-branches-109edc8d.js";import{B as j}from"./bread-crumbs-e2cbb5ce.js";import C from"./tab-bb0144a8.js";import E from"./branch-selecta-records-table-729e7895.js";import R from"./branch-selecta-search-date-8cb8034f.js";import{u as k}from"./useDispatch-7c2ffa76.js";import"./squire-icon-26ab316c.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./open-closed-3ca08ed2.js";import"./keyboard-9cab4daa.js";import"./use-resolve-button-type-ae400b2a.js";import"./iconBase-7c7c9ea7.js";import"./branch-select-edit-record-52817433.js";import"./pencil-icon-9847225a.js";import"./loading-icon-7af66374.js";import"./x-mark-icon-d16dc334.js";import"./input-b4cacb1d.js";import"./transition-8e4a6e29.js";import"./dialog-be297189.js";import"./hidden-856ef68b.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};