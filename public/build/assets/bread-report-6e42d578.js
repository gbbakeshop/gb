import{r as t,u as S,q as B,j as L,a as e}from"./app-aa9f61b4.js";import{B as g}from"./branch-layout-9eeae0c3.js";import w from"./branch-bread-report-table-4727daff.js";import{a as x}from"./records-services-8c083049.js";import C from"./production-tabs-a7a89a3e.js";import{S as j}from"./skeleton-loader-46a5492b.js";import{S as D}from"./search-87937855.js";import"./squire-icon-c99a134b.js";import"./useDispatch-ba3056c1.js";import"./store-icon-0378f152.js";import"./branches-services-9eae1888.js";import"./database-icon-153f841c.js";import"./calendar-icon-fef0a945.js";import"./moment-08c1acf8.js";import"./move-to-sales-report-form-79867dc5.js";import"./x-mark-icon-cfd357f2.js";import"./input-337b756c.js";import"./move-icon-aa94450b.js";import"./exclamation-icon-ff9e782c.js";import"./transition-818a34c5.js";import"./open-closed-77f359ac.js";import"./dialog-16765613.js";import"./keyboard-1a2a3d06.js";import"./hidden-879eb808.js";import"./branch-bread-report-edit-3a9ce508.js";import"./pencil-icon-2db5b631.js";import"./clock-icon-df6ebcbb.js";import"./iconBase-c507104e.js";import"./index.esm-65423370.js";function rt(p){const[s,m]=t.useState([]),{auth:r}=p,[n,c]=t.useState(!0),{refresh:u}=S(o=>o.app),[d,f]=t.useState([]),[a,h]=t.useState(""),{url:i}=B(),l=i.split("/")[2]=="bread-report"?r.user.branchid:i.split("/")[2];return t.useEffect(()=>{x({branchid:l,params:"bread"}).then(o=>{m(o.status),c(!1)})},[u]),t.useEffect(()=>{const o=s.filter(b=>b.bread_name.toLowerCase().includes(a.toLowerCase()));f(o)},[a]),L(g,{position:r.user.position,branchid:r.user.branchid,children:[e(C,{position:r.user.position}),e("br",{}),e(D,{search:a,setSearch:h}),n?e(j,{}):e(w,{account:r.user,data:a==""?s:d})]})}export{rt as default};
