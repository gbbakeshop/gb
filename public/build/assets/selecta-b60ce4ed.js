import{r,q as S,u as b,j as g,a as e}from"./app-baeea996.js";import{B}from"./branch-layout-2cc7663c.js";import L from"./branch-selecta-table-0e24f7f6.js";import{g as w}from"./selecta-services-3e930c1a.js";import{S as x}from"./skeleton-loader-600177c1.js";import{S as j}from"./search-e096ff1e.js";import C from"./selecta-tabs-55804f65.js";import{B as D}from"./bread-crumbs-661b522e.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./database-icon-36bfb4cd.js";import"./calendar-icon-b9a5b511.js";import"./moment-a0b0eb24.js";import"./branch-selecta-remaining-form-0a010d4f.js";import"./loading-icon-275dea68.js";import"./transition-ae95bb23.js";import"./open-closed-b7c1ccd9.js";import"./dialog-1f85104b.js";import"./keyboard-f8cbc153.js";import"./hidden-6dd5c8a8.js";import"./branch-selecta-edit-form-376ed7a0.js";import"./pencil-icon-f2299e75.js";import"./exclamation-icon-0b730c32.js";import"./check-icon-251de77d.js";import"./iconBase-f12f8e90.js";function $(m){const{auth:t}=m,p=t.user.branchid,[s,n]=r.useState([]);S();const[c,u]=r.useState(!0),[d,h]=r.useState([]),[a,f]=r.useState(""),{refresh:i}=b(o=>o.app);return r.useEffect(()=>{w(p).then(o=>{n(o),u(!1)})},[i]),r.useEffect(()=>{const o=s.filter(l=>l.product_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a,i]),g(B,{position:t.user.position,branchid:t.user.branchid,children:[e(D,{branchid:t.user.branchid}),e(j,{search:a,setSearch:f}),e(C,{branchid:t.user.branchid}),c?e(x,{}):e(L,{position:t.user.position,userid:t.user.id,data:a==""?s:d})]})}export{$ as default};