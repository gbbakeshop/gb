import{r as i,u as h,q as d,j as c,a}from"./app-baeea996.js";import"./Dropdown-6ef51713.js";import{B as l}from"./branch-layout-2cc7663c.js";import u from"./branch-analytics-search-8d569680.js";import{BranchLineChart as f}from"./branch-line-chart-02ef633c.js";import{BranchBarChart as x}from"./branch-bar-chart-f59c934f.js";import{h as b}from"./records-services-66a159ca.js";import"./transition-ae95bb23.js";import"./open-closed-b7c1ccd9.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./database-icon-36bfb4cd.js";import"./calendar-icon-b9a5b511.js";import"./index-2834bc9f.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};
