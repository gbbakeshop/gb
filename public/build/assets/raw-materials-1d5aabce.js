import{r as t,q as S,u as w,j as b,a as e}from"./app-5900872d.js";import{B as g}from"./branch-layout-2bd3daa1.js";import L from"./branch-raw-materials-table-114a1755.js";import{g as x}from"./raw-materials-services-05b554af.js";import{S as _}from"./skeleton-loader-85108e85.js";import{S as j}from"./search-793c1310.js";import"./squire-icon-badb1f6c.js";import"./useDispatch-15c9b9b4.js";import"./store-icon-c1f4360f.js";import"./branches-services-fe7e1245.js";import"./database-icon-6505655a.js";import"./calendar-icon-f73bde02.js";import"./moment-1b7aa314.js";import"./branch-raw-materials-update-form-f803b748.js";import"./x-mark-icon-c2db9d9f.js";import"./input-3dbed893.js";import"./pencil-icon-9d730d49.js";import"./transition-17b6df8c.js";import"./open-closed-efc52a04.js";import"./dialog-75a36335.js";import"./keyboard-743c1f9c.js";import"./hidden-130a8b57.js";function Q(i){const{auth:a}=i,m=a.user.branchid,[s,n]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(m).then(r=>{n(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{Q as default};
