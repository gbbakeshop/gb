import{r as a,q as B,u as l,m as v,D as w,j as c,a as e}from"./app-841358f4.js";import{A as L}from"./administrator-layout-32ba1782.js";import"./moment-c86f278d.js";import{c as g}from"./selecta-services-dbd913e8.js";import{S as D}from"./skeleton-loader-0b81c869.js";import{S as N}from"./search-7aba1ad9.js";import _ from"./sidebar-branches-217effad.js";import{B as j}from"./bread-crumbs-b2825b32.js";import C from"./tab-38e4fed4.js";import E from"./branch-selecta-records-table-d07f157c.js";import R from"./branch-selecta-search-date-174416f2.js";import{u as k}from"./useDispatch-d62d19bf.js";import"./squire-icon-27819e73.js";import"./store-icon-f2103ad0.js";import"./branches-services-33435438.js";import"./open-closed-ca7b03fb.js";import"./keyboard-6b473b2b.js";import"./use-resolve-button-type-1cff9754.js";import"./iconBase-f4adef3c.js";import"./branch-select-edit-record-4ba0eb1c.js";import"./pencil-icon-69fcd3a5.js";import"./loading-icon-469feb80.js";import"./x-mark-icon-17e8208d.js";import"./input-a6715f66.js";import"./transition-986adeed.js";import"./dialog-6430dbe0.js";import"./hidden-bf2f5385.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};
