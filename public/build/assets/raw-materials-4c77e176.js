import{r as t,q as S,u as w,j as b,a as e}from"./app-c694dd7d.js";import{B as g}from"./branch-layout-231f47a5.js";import L from"./branch-raw-materials-table-9d9fdd30.js";import{g as x}from"./raw-materials-services-b6c85527.js";import{S as _}from"./skeleton-loader-f50906db.js";import{S as j}from"./search-4c81b6d3.js";import"./squire-icon-a33269c2.js";import"./useDispatch-7cb910a2.js";import"./store-icon-174d820f.js";import"./branches-services-2a890fb1.js";import"./database-icon-25fe13bd.js";import"./calendar-icon-967d3f57.js";import"./moment-ce545dde.js";import"./branch-raw-materials-update-form-fcec0d34.js";import"./x-mark-icon-4d38d41b.js";import"./input-7d1f2be6.js";import"./pencil-icon-48817387.js";import"./transition-e38f4f9d.js";import"./open-closed-88d5fb0c.js";import"./dialog-ef9a592d.js";import"./keyboard-58d01a42.js";import"./hidden-42c8e459.js";function Q(i){const{auth:a}=i,m=a.user.branchid,[s,n]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(m).then(r=>{n(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{Q as default};
