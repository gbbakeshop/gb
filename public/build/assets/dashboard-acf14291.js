import{r as i,u as h,q as d,j as c,a}from"./app-e55071d8.js";import"./Dropdown-2e92ab93.js";import{B as l}from"./branch-layout-bc13f132.js";import u from"./branch-analytics-search-bb7a3cf9.js";import{BranchLineChart as f}from"./branch-line-chart-d4096ac1.js";import{BranchBarChart as x}from"./branch-bar-chart-945ef743.js";import{f as b}from"./records-services-8c083049.js";import"./transition-1dac5c7d.js";import"./open-closed-4938115a.js";import"./squire-icon-1687528a.js";import"./useDispatch-75563152.js";import"./store-icon-2103ef62.js";import"./branches-services-37881555.js";import"./database-icon-4779e807.js";import"./calendar-icon-be284948.js";import"./index-f7127059.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};
