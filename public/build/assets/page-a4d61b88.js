import{r as e,u as i,q as d,j as t,a as r,F as h}from"./app-baeea996.js";import{A as f}from"./administrator-layout-0ea72fbf.js";import{S as u}from"./skeleton-loader-600177c1.js";import x from"./sidebar-branches-ef7621c7.js";import{B as S}from"./bread-crumbs-661b522e.js";import{BranchLineChart as g}from"./branch-line-chart-02ef633c.js";import{BranchBarChart as B}from"./branch-bar-chart-f59c934f.js";import v from"./branch-analytics-search-8d569680.js";import{h as b}from"./records-services-66a159ca.js";import w from"./sales-chart-7ff80f45.js";import"./squire-icon-44d10775.js";import"./useDispatch-f96b2346.js";import"./store-icon-c68b2ecd.js";import"./branches-services-c3d09aea.js";import"./open-closed-b7c1ccd9.js";import"./keyboard-f8cbc153.js";import"./use-resolve-button-type-dfd4156d.js";import"./iconBase-f12f8e90.js";import"./index-2834bc9f.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(f,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(h,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};
