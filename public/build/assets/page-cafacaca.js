import{r as t,q as b,u as i,h as v,B as w,j as a,a as r}from"./app-7fb59a5e.js";import{A as L}from"./administrator-layout-80c5bc93.js";import g from"./branch-sales-report-table-70c3e34b.js";import{a as N}from"./records-services-66a159ca.js";import C from"./branch-sales-report-tabs-51b31859.js";import{S as R}from"./skeleton-loader-47b36d8d.js";import{S as j}from"./search-c63ec135.js";import k from"./sidebar-branches-167ea279.js";import{B as D}from"./bread-crumbs-f4bc55a8.js";import E from"./branch-sales-report-search-date-bf6d27f6.js";import{u as P}from"./useDispatch-19790469.js";import"./squire-icon-86b3867b.js";import"./store-icon-33da30d0.js";import"./branches-services-3c08282d.js";import"./moment-ede8cb49.js";import"./branch-sales-report-edit-0495d0b8.js";import"./x-mark-icon-1f890bca.js";import"./input-2729d313.js";import"./pencil-icon-743d10de.js";import"./transition-46023121.js";import"./open-closed-88cf6580.js";import"./dialog-53ad0003.js";import"./keyboard-d78ca1c4.js";import"./hidden-e6878c7b.js";import"./clock-icon-58d65d34.js";import"./iconBase-9c94283f.js";import"./index.esm-c08795db.js";import"./use-resolve-button-type-a8c5fdbb.js";function ir(m){const c=P(),{auth:n}=m,[p,l]=t.useState(!0),{url:d}=b(),f=d.split("/")[2],{refresh:u}=i(o=>o.app),[h,S]=t.useState([]),[e,B]=t.useState(""),{records:s}=i(o=>o.salesReport);return t.useEffect(()=>{N({branchid:f,params:"done",date:v().format("L")}).then(o=>{c(w(o.status)),l(!1)})},[u]),t.useEffect(()=>{const o=s.filter(x=>x.bread_name.toLowerCase().includes(e.toLowerCase()));S(o)},[e]),a(L,{children:[r(k,{}),a("div",{className:"flex flex-col h-screen w-[79vw] p-4 overflow-auto",children:[r(D,{}),r(C,{}),r("br",{}),a("div",{className:"flex gap-4",children:[r("div",{className:"flex-none",children:r(E,{})}),r("div",{className:"flex-1",children:r(j,{search:e,setSearch:B})})]}),p?r(R,{}):r(g,{account:n.user,data:e==""?s:h})]})]})}export{ir as default};
