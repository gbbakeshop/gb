import{r as e,u as i,q as d,j as t,a as r,F as f}from"./app-08d5fdd9.js";import{A as h}from"./administrator-layout-b2a89450.js";import{S as u}from"./skeleton-loader-6937505f.js";import x from"./sidebar-branches-54d4e9f3.js";import{B as S}from"./bread-crumbs-4632d0d7.js";import{BranchLineChart as g}from"./branch-line-chart-2be5e6ee.js";import{BranchBarChart as B}from"./branch-bar-chart-90100e9e.js";import v from"./branch-analytics-search-759c1e32.js";import{f as b}from"./records-services-8c083049.js";import w from"./sales-chart-d9c111f7.js";import"./squire-icon-36f89341.js";import"./useDispatch-c969bf2e.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./open-closed-7b339eda.js";import"./keyboard-af8c721b.js";import"./use-resolve-button-type-0cbd914c.js";import"./iconBase-854383f2.js";import"./index-1611bba0.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(h,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(f,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};
