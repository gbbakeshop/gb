import{r as i,u as h,q as d,j as c,a}from"./app-a4610531.js";import"./Dropdown-5ff2ce84.js";import{B as l}from"./branch-layout-39110aa1.js";import u from"./branch-analytics-search-8355178a.js";import{BranchLineChart as f}from"./branch-line-chart-bc8e76c5.js";import{BranchBarChart as x}from"./branch-bar-chart-aa306c93.js";import{f as b}from"./records-services-8c083049.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./squire-icon-6fcda0ed.js";import"./useDispatch-669033fe.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./database-icon-5c05cb9e.js";import"./calendar-icon-14b24c3e.js";import"./index-575646c9.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};
