import{r as a,q as B,u as l,m as v,D as w,j as c,a as e}from"./app-48d131cf.js";import{A as L}from"./administrator-layout-a68bdcc5.js";import"./moment-6bf03832.js";import{c as g}from"./selecta-services-0b88fec2.js";import{S as D}from"./skeleton-loader-19851f4e.js";import{S as N}from"./search-5446d844.js";import _ from"./sidebar-branches-c30cbb8c.js";import{B as j}from"./bread-crumbs-ff0c0b09.js";import C from"./tab-f10fb593.js";import E from"./branch-selecta-records-table-c3e57ee5.js";import R from"./branch-selecta-search-date-f8384088.js";import{u as k}from"./useDispatch-2c748c8b.js";import"./squire-icon-2621064c.js";import"./store-icon-c9b1951a.js";import"./branches-services-3635ee7c.js";import"./open-closed-70a2f03f.js";import"./keyboard-e08b4459.js";import"./use-resolve-button-type-f562d3a6.js";import"./iconBase-884d437c.js";import"./branch-select-edit-record-0d2583f0.js";import"./pencil-icon-5e611c4e.js";import"./loading-icon-6c6cf9cf.js";import"./x-mark-icon-32c359c7.js";import"./input-4b0b98d4.js";import"./transition-e0706a92.js";import"./dialog-5e980aa6.js";import"./hidden-b79b275f.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};
