import{r as e,u as i,q as d,j as t,a as r,F as f}from"./app-aa9f61b4.js";import{A as h}from"./administrator-layout-f25b0183.js";import{S as u}from"./skeleton-loader-46a5492b.js";import x from"./sidebar-branches-8035972c.js";import{B as S}from"./bread-crumbs-b0c0d1f1.js";import{BranchLineChart as g}from"./branch-line-chart-eecc6802.js";import{BranchBarChart as B}from"./branch-bar-chart-0bde65b5.js";import v from"./branch-analytics-search-de91d02c.js";import{f as b}from"./records-services-8c083049.js";import w from"./sales-chart-8f627d33.js";import"./squire-icon-c99a134b.js";import"./useDispatch-ba3056c1.js";import"./store-icon-0378f152.js";import"./branches-services-9eae1888.js";import"./open-closed-77f359ac.js";import"./keyboard-1a2a3d06.js";import"./use-resolve-button-type-d74162cf.js";import"./iconBase-c507104e.js";import"./index-9613f1dd.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(h,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(f,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};
