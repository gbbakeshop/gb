import{r as e,u as i,q as d,j as t,a as r,F as f}from"./app-a4610531.js";import{A as h}from"./administrator-layout-6ba47809.js";import{S as u}from"./skeleton-loader-6b29079c.js";import x from"./sidebar-branches-bd016303.js";import{B as S}from"./bread-crumbs-38045d93.js";import{BranchLineChart as g}from"./branch-line-chart-bc8e76c5.js";import{BranchBarChart as B}from"./branch-bar-chart-aa306c93.js";import v from"./branch-analytics-search-8355178a.js";import{f as b}from"./records-services-8c083049.js";import w from"./sales-chart-315104af.js";import"./squire-icon-6fcda0ed.js";import"./useDispatch-669033fe.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./open-closed-db19f7e7.js";import"./keyboard-82747e89.js";import"./use-resolve-button-type-bb7c502d.js";import"./iconBase-ad0eb347.js";import"./index-575646c9.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(h,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(f,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};