import{r as a,q as B,u as l,h as v,D as w,j as c,a as e}from"./app-7fb59a5e.js";import{A as L}from"./administrator-layout-80c5bc93.js";import"./moment-ede8cb49.js";import{c as g}from"./selecta-services-539db072.js";import{S as D}from"./skeleton-loader-47b36d8d.js";import{S as N}from"./search-c63ec135.js";import _ from"./sidebar-branches-167ea279.js";import{B as j}from"./bread-crumbs-f4bc55a8.js";import C from"./tab-9a408ebc.js";import E from"./branch-selecta-records-table-8204c96e.js";import R from"./branch-selecta-search-date-4be26a1b.js";import{u as k}from"./useDispatch-19790469.js";import"./squire-icon-86b3867b.js";import"./store-icon-33da30d0.js";import"./branches-services-3c08282d.js";import"./open-closed-88cf6580.js";import"./keyboard-d78ca1c4.js";import"./use-resolve-button-type-a8c5fdbb.js";import"./iconBase-9c94283f.js";import"./branch-select-edit-record-41f06a0b.js";import"./pencil-icon-743d10de.js";import"./loading-icon-2c622ed6.js";import"./x-mark-icon-1f890bca.js";import"./input-2729d313.js";import"./transition-46023121.js";import"./dialog-53ad0003.js";import"./hidden-e6878c7b.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};
