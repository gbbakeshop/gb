import{r as i,u as h,q as d,j as c,a}from"./app-b6df9fca.js";import"./Dropdown-d98c8a8a.js";import{B as l}from"./branch-layout-4894a59b.js";import u from"./branch-analytics-search-35bc66ee.js";import{BranchLineChart as f}from"./branch-line-chart-fbed36a7.js";import{BranchBarChart as x}from"./branch-bar-chart-c04f748a.js";import{h as b}from"./records-services-85a57897.js";import"./transition-645251c1.js";import"./open-closed-0b2f3211.js";import"./squire-icon-0558eeed.js";import"./useDispatch-e4d7b871.js";import"./store-icon-f98f002d.js";import"./branches-services-774306c6.js";import"./database-icon-ad3669cc.js";import"./calendar-icon-651865b9.js";import"./index-44c0cc79.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};
