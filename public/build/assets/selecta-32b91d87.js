import{r,q as S,u as b,j as g,a as e}from"./app-aa9f61b4.js";import{B}from"./branch-layout-9eeae0c3.js";import L from"./branch-selecta-table-81718d92.js";import{g as w}from"./selecta-services-e91da208.js";import{S as x}from"./skeleton-loader-46a5492b.js";import{S as j}from"./search-87937855.js";import C from"./selecta-tabs-1530f54a.js";import{B as D}from"./bread-crumbs-b0c0d1f1.js";import"./squire-icon-c99a134b.js";import"./useDispatch-ba3056c1.js";import"./store-icon-0378f152.js";import"./branches-services-9eae1888.js";import"./database-icon-153f841c.js";import"./calendar-icon-fef0a945.js";import"./moment-08c1acf8.js";import"./branch-selecta-remaining-form-1bc405fc.js";import"./loading-icon-35598476.js";import"./transition-818a34c5.js";import"./open-closed-77f359ac.js";import"./dialog-16765613.js";import"./keyboard-1a2a3d06.js";import"./hidden-879eb808.js";import"./branch-selecta-edit-form-7fec5fe1.js";import"./pencil-icon-2db5b631.js";import"./exclamation-icon-ff9e782c.js";import"./check-icon-e54085ee.js";import"./iconBase-c507104e.js";function $(m){const{auth:t}=m,p=t.user.branchid,[s,n]=r.useState([]);S();const[c,u]=r.useState(!0),[d,h]=r.useState([]),[a,f]=r.useState(""),{refresh:i}=b(o=>o.app);return r.useEffect(()=>{w(p).then(o=>{n(o),u(!1)})},[i]),r.useEffect(()=>{const o=s.filter(l=>l.product_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a,i]),g(B,{position:t.user.position,branchid:t.user.branchid,children:[e(D,{branchid:t.user.branchid}),e(j,{search:a,setSearch:f}),e(C,{branchid:t.user.branchid}),c?e(x,{}):e(L,{position:t.user.position,userid:t.user.id,data:a==""?s:d})]})}export{$ as default};
