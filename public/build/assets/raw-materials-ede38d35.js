import{r as t,q as S,u as w,j as b,a as e}from"./app-d4e5b7bf.js";import{B as g}from"./branch-layout-42c2b0ad.js";import L from"./branch-raw-materials-table-e0caa832.js";import{g as x}from"./raw-materials-services-7d500ab0.js";import{S as _}from"./skeleton-loader-cd91ed6a.js";import{S as j}from"./search-0a38c6f0.js";import"./squire-icon-b2706042.js";import"./useDispatch-869691c4.js";import"./store-icon-0d0f4826.js";import"./branches-services-103751ab.js";import"./database-icon-9fb52dc0.js";import"./calendar-icon-d729a51b.js";import"./moment-147a27ee.js";import"./branch-raw-materials-update-form-30c26512.js";import"./x-mark-icon-ad71e7bd.js";import"./input-2933d61e.js";import"./pencil-icon-122c83e4.js";import"./transition-9c70f095.js";import"./open-closed-8edc26e7.js";import"./dialog-848df83d.js";import"./keyboard-520f8101.js";import"./hidden-5d53ce1c.js";function Q(i){const{auth:a}=i,m=a.user.branchid,[s,n]=t.useState([]),[p,c]=t.useState(!0);S();const{refresh:u}=w(r=>r.app),[f,h]=t.useState([]),[o,l]=t.useState("");return t.useEffect(()=>{x(m).then(r=>{n(r),c(!1)})},[u]),t.useEffect(()=>{const r=s.filter(d=>d.raw_materials.toLowerCase().includes(o.toLowerCase()));h(r)},[o]),b(g,{position:a.user.position,branchid:a.user.branchid,children:[e(j,{search:o,setSearch:l}),p?e(_,{}):e(L,{position:a.user.position,data:o==""?s:f})]})}export{Q as default};
