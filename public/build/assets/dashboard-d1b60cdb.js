import{r as i,u as h,q as d,j as c,a}from"./app-ef09a1a0.js";import"./Dropdown-5d8692c0.js";import{B as l}from"./branch-layout-54ee40b1.js";import u from"./branch-analytics-search-86ea755f.js";import{BranchLineChart as f}from"./branch-line-chart-ff516d2c.js";import{BranchBarChart as x}from"./branch-bar-chart-71046b49.js";import{f as b}from"./records-services-8c083049.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./database-icon-b3b189b7.js";import"./calendar-icon-2a3ae62d.js";import"./index-e013c046.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};