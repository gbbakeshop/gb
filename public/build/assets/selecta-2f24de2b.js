import{r,q as S,u as b,j as g,a as e}from"./app-5d5d4b45.js";import{B}from"./branch-layout-9c4c73ea.js";import L from"./branch-selecta-table-eccc70e7.js";import{g as w}from"./selecta-services-e84d3b7f.js";import{S as x}from"./skeleton-loader-193ae5b2.js";import{S as j}from"./search-eef54f62.js";import C from"./selecta-tabs-92197f21.js";import{B as D}from"./bread-crumbs-e627284e.js";import"./squire-icon-1a44855d.js";import"./useDispatch-0c99af86.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./database-icon-0d7575f4.js";import"./calendar-icon-2f7eb342.js";import"./moment-fc772d1c.js";import"./branch-selecta-remaining-form-00a24c09.js";import"./loading-icon-a35312b2.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./branch-selecta-edit-form-90a65cd0.js";import"./pencil-icon-072e5607.js";import"./exclamation-icon-7d29b3ab.js";import"./check-icon-12f69a0f.js";import"./iconBase-5b5b9325.js";function $(m){const{auth:t}=m,p=t.user.branchid,[s,n]=r.useState([]);S();const[c,u]=r.useState(!0),[d,h]=r.useState([]),[a,f]=r.useState(""),{refresh:i}=b(o=>o.app);return r.useEffect(()=>{w(p).then(o=>{n(o),u(!1)})},[i]),r.useEffect(()=>{const o=s.filter(l=>l.product_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a,i]),g(B,{position:t.user.position,branchid:t.user.branchid,children:[e(D,{branchid:t.user.branchid}),e(j,{search:a,setSearch:f}),e(C,{branchid:t.user.branchid}),c?e(x,{}):e(L,{position:t.user.position,userid:t.user.id,data:a==""?s:d})]})}export{$ as default};
