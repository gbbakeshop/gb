import{r as a,q as B,u as l,m as v,D as w,j as c,a as e}from"./app-f57cbcb1.js";import{A as L}from"./administrator-layout-05888967.js";import"./moment-f0997f7d.js";import{c as g}from"./selecta-services-2c12fb41.js";import{S as D}from"./skeleton-loader-429243f6.js";import{S as N}from"./search-fef4fc62.js";import _ from"./sidebar-branches-07628526.js";import{B as j}from"./bread-crumbs-639d1a7a.js";import C from"./tab-8ca112d8.js";import E from"./branch-selecta-records-table-b15b93ff.js";import R from"./branch-selecta-search-date-76db4b25.js";import{u as k}from"./useDispatch-3704c1b3.js";import"./squire-icon-4b8888d9.js";import"./store-icon-66b223c1.js";import"./branches-services-bd4eb4ba.js";import"./open-closed-bd663fc5.js";import"./keyboard-f48aff64.js";import"./use-resolve-button-type-8cfa5a01.js";import"./iconBase-26769fc1.js";import"./branch-select-edit-record-f74ae926.js";import"./pencil-icon-2de7c05e.js";import"./loading-icon-98deb104.js";import"./x-mark-icon-8867baed.js";import"./input-5cb29f9a.js";import"./transition-c93cd203.js";import"./dialog-590e4a9d.js";import"./hidden-a075f39d.js";function se(o){a.useState([]);const{url:p}=B(),s=o.auth.user.position=="admin"?p.split("/")[2]:o.auth.user.branchid,[d,u]=a.useState(!0),[f,h]=a.useState([]),[r,S]=a.useState(""),{refresh:i}=l(t=>t.app),{records:m}=l(t=>t.branchSelecta),x=k();return a.useEffect(()=>{g({date:v().format("L"),branchid:s}).then(t=>{x(w(t)),u(!1)})},[i]),a.useEffect(()=>{const t=m.filter(b=>{var n;return(n=b.selecta.product_name)==null?void 0:n.toLowerCase().includes(r==null?void 0:r.toLowerCase())});h(t)},[r,i]),c(L,{children:[e(_,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(j,{}),c("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(R,{branchid:s})}),e("div",{className:"flex-1",children:e(N,{search:r,setSearch:S})})]}),e(C,{branchid:s}),d?e(D,{}):e(E,{userid:o.auth.user.id,data:r==""?m:f})]})]})}export{se as default};
