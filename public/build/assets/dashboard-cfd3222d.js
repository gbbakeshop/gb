import{r as i,u as h,q as d,j as c,a}from"./app-c469e3d3.js";import"./Dropdown-8aa9fe3f.js";import{B as l}from"./branch-layout-3c39fda9.js";import u from"./branch-analytics-search-e94302b7.js";import{BranchLineChart as f}from"./branch-line-chart-ff81c487.js";import{BranchBarChart as x}from"./branch-bar-chart-cf907c20.js";import{h as b}from"./records-services-66a159ca.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./squire-icon-f57118da.js";import"./useDispatch-9b73aee7.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./database-icon-c6cf3fdf.js";import"./calendar-icon-e76276d5.js";import"./index-a8a81cc0.js";function k(n){const[s,p]=i.useState({sales:[],charges:[],expenses:[]}),{period:e}=h(r=>r.branchAnalytics),{auth:t}=n,{url:o}=d(),m=o.split("/")[2]=="bread-report"?t.user.branchid:o.split("/")[2];return i.useEffect(()=>{b(e,t.user.branchid).then(r=>{p({...s,sales:r.records,charges:r.charges,expenses:r.expenses})})},[e]),c(l,{position:t.user.position,branchid:m,children:[a(u,{}),c("div",{className:"flex",children:[a("div",{className:"w-1/2",children:a(f,{datas:s})}),a("div",{className:"w-1/2",children:a(x,{datas:s})})]})]})}export{k as default};