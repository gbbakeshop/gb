import{r as t,q as b,u as i,m as v,B as w,j as a,a as r}from"./app-d4e5b7bf.js";import{A as L}from"./administrator-layout-7ab5d1df.js";import g from"./branch-sales-report-table-4ca847db.js";import{a as N}from"./records-services-8c083049.js";import C from"./branch-sales-report-tabs-77959a8c.js";import{S as R}from"./skeleton-loader-cd91ed6a.js";import{S as j}from"./search-0a38c6f0.js";import k from"./sidebar-branches-21dd9e47.js";import{B as D}from"./bread-crumbs-5cd46dbc.js";import E from"./branch-sales-report-search-date-1b959b8d.js";import{u as P}from"./useDispatch-869691c4.js";import"./squire-icon-b2706042.js";import"./store-icon-0d0f4826.js";import"./branches-services-103751ab.js";import"./moment-147a27ee.js";import"./branch-sales-report-edit-bd5084dc.js";import"./x-mark-icon-ad71e7bd.js";import"./input-2933d61e.js";import"./pencil-icon-122c83e4.js";import"./transition-9c70f095.js";import"./open-closed-8edc26e7.js";import"./dialog-848df83d.js";import"./keyboard-520f8101.js";import"./hidden-5d53ce1c.js";import"./clock-icon-c8508185.js";import"./iconBase-91368fa6.js";import"./index.esm-395df063.js";import"./use-resolve-button-type-15dc6a1a.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
