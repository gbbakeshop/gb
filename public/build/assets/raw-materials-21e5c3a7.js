import{r as t,q as S,u as w,j as b,a as e}from"./app-f101d39f.js";import{B as g}from"./branch-layout-3f37e452.js";import L from"./branch-raw-materials-table-0b0f2d60.js";import{g as x}from"./raw-materials-services-3e76afbc.js";import{S as _}from"./skeleton-loader-6a7e536a.js";import{S as j}from"./search-fd02faca.js";import"./squire-icon-56201442.js";import"./useDispatch-503ed058.js";import"./store-icon-7b2fb89c.js";import"./branches-services-0ff0a163.js";import"./database-icon-2f2f30a2.js";import"./calendar-icon-e7846d78.js";import"./moment-3ed58f87.js";import"./branch-raw-materials-update-form-bfe9d15f.js";import"./x-mark-icon-d091796b.js";import"./input-514f2569.js";import"./pencil-icon-992e8eec.js";import"./transition-3d1135dd.js";import"./open-closed-70067b4f.js";import"./dialog-2c7a9974.js";import"./keyboard-a96c9ef8.js";import"./hidden-86be31c3.js";function Q(i){const{auth:a}=i,m=a.user.branchid,[s,n]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(m).then(r=>{n(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{Q as default};