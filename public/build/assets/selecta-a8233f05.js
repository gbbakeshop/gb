import{r,q as S,u as b,j as g,a as e}from"./app-c694dd7d.js";import{B}from"./branch-layout-231f47a5.js";import L from"./branch-selecta-table-495bce72.js";import{g as w}from"./selecta-services-4d3ea835.js";import{S as x}from"./skeleton-loader-f50906db.js";import{S as j}from"./search-4c81b6d3.js";import C from"./selecta-tabs-4e1c76dd.js";import{B as D}from"./bread-crumbs-def688da.js";import"./squire-icon-a33269c2.js";import"./useDispatch-7cb910a2.js";import"./store-icon-174d820f.js";import"./branches-services-2a890fb1.js";import"./database-icon-25fe13bd.js";import"./calendar-icon-967d3f57.js";import"./moment-ce545dde.js";import"./branch-selecta-remaining-form-f8031b5a.js";import"./loading-icon-60fbe0fc.js";import"./transition-e38f4f9d.js";import"./open-closed-88d5fb0c.js";import"./dialog-ef9a592d.js";import"./keyboard-58d01a42.js";import"./hidden-42c8e459.js";import"./branch-selecta-edit-form-9db5b627.js";import"./pencil-icon-48817387.js";import"./exclamation-icon-94d5412f.js";import"./check-icon-f913ddbb.js";import"./iconBase-f4bcd778.js";function $(m){const{auth:t}=m,p=t.user.branchid,[s,n]=r.useState([]);S();const[c,u]=r.useState(!0),[d,h]=r.useState([]),[a,f]=r.useState(""),{refresh:i}=b(o=>o.app);return r.useEffect(()=>{w(p).then(o=>{n(o),u(!1)})},[i]),r.useEffect(()=>{const o=s.filter(l=>l.product_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a,i]),g(B,{position:t.user.position,branchid:t.user.branchid,children:[e(D,{branchid:t.user.branchid}),e(j,{search:a,setSearch:f}),e(C,{branchid:t.user.branchid}),c?e(x,{}):e(L,{position:t.user.position,userid:t.user.id,data:a==""?s:d})]})}export{$ as default};
