import{r as t,u as S,q as B,j as L,a as e}from"./app-5d5d4b45.js";import{B as g}from"./branch-layout-9c4c73ea.js";import w from"./branch-bread-report-table-0560f091.js";import{a as x}from"./records-services-8c083049.js";import C from"./production-tabs-0cbac984.js";import{S as j}from"./skeleton-loader-193ae5b2.js";import{S as D}from"./search-eef54f62.js";import"./squire-icon-1a44855d.js";import"./useDispatch-0c99af86.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./database-icon-0d7575f4.js";import"./calendar-icon-2f7eb342.js";import"./moment-fc772d1c.js";import"./move-to-sales-report-form-f5403f35.js";import"./x-mark-icon-fbf8a4fc.js";import"./input-0b839463.js";import"./move-icon-c4dbb535.js";import"./exclamation-icon-7d29b3ab.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./branch-bread-report-edit-c04f46de.js";import"./pencil-icon-072e5607.js";import"./clock-icon-3f407e69.js";import"./iconBase-5b5b9325.js";import"./index.esm-4f9a8794.js";function rt(p){const[s,m]=t.useState([]),{auth:r}=p,[n,c]=t.useState(!0),{refresh:u}=S(o=>o.app),[d,f]=t.useState([]),[a,h]=t.useState(""),{url:i}=B(),l=i.split("/")[2]=="bread-report"?r.user.branchid:i.split("/")[2];return t.useEffect(()=>{x({branchid:l,params:"bread"}).then(o=>{m(o.status),c(!1)})},[u]),t.useEffect(()=>{const o=s.filter(b=>b.bread_name.toLowerCase().includes(a.toLowerCase()));f(o)},[a]),L(g,{position:r.user.position,branchid:r.user.branchid,children:[e(C,{position:r.user.position}),e("br",{}),e(D,{search:a,setSearch:h}),n?e(j,{}):e(w,{account:r.user,data:a==""?s:d})]})}export{rt as default};
