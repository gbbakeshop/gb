import{r as e,u as i,q as d,j as t,a as r,F as f}from"./app-5900872d.js";import{A as h}from"./administrator-layout-c9cd033b.js";import{S as u}from"./skeleton-loader-85108e85.js";import x from"./sidebar-branches-3dd1a39a.js";import{B as S}from"./bread-crumbs-d94c3f8e.js";import{BranchLineChart as g}from"./branch-line-chart-c0184bc6.js";import{BranchBarChart as B}from"./branch-bar-chart-b6536000.js";import v from"./branch-analytics-search-1dc476ef.js";import{f as b}from"./records-services-8c083049.js";import w from"./sales-chart-4c672162.js";import"./squire-icon-badb1f6c.js";import"./useDispatch-15c9b9b4.js";import"./store-icon-c1f4360f.js";import"./branches-services-fe7e1245.js";import"./open-closed-efc52a04.js";import"./keyboard-743c1f9c.js";import"./use-resolve-button-type-93a57146.js";import"./iconBase-5f07f12e.js";import"./index-ba7707ad.js";function O(A){const[s,c]=e.useState({sales:[],charges:[],expenses:[]}),{period:o}=i(a=>a.branchAnalytics),[m,n]=e.useState(!0),{url:l}=d(),p=l.split("/")[2];return i(a=>a.app),e.useState([]),e.useState(""),e.useEffect(()=>{b(o,p).then(a=>{console.log("data",a),c({...s,sales:a.records,charges:a.charges,expenses:a.expenses})})},[o]),e.useEffect(()=>{n(!1)},[]),t(h,{children:[r(x,{}),t("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(S,{}),m?r(u,{}):t(f,{children:[r(v,{}),r("div",{className:"w-full mt-8",children:r(w,{})}),t("div",{className:"flex",children:[r("div",{className:"w-1/2",children:r(g,{datas:s})}),r("div",{className:"w-1/2",children:r(B,{datas:s})})]})]})]})]})}export{O as default};
