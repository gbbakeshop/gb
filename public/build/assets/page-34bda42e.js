import{r as t,q as b,u as w,j as p,a as r}from"./app-ca96d5b2.js";import{A as x}from"./administrator-layout-139bd827.js";import B from"./branch-selecta-table-da1a47e6.js";import{g}from"./selecta-services-020eef0a.js";import{S as L}from"./skeleton-loader-7949f6a7.js";import{S as j}from"./search-1e564179.js";import v from"./sidebar-branches-4ff80db7.js";import{B as C}from"./bread-crumbs-587af919.js";import D from"./tab-bf317997.js";import"./squire-icon-c4525b4e.js";import"./useDispatch-1c9b41c0.js";import"./store-icon-402414b9.js";import"./branches-services-cf1998c6.js";import"./moment-be919951.js";import"./branch-selecta-remaining-form-ee90c8cd.js";import"./database-icon-37e7d390.js";import"./loading-icon-7bf74983.js";import"./transition-9319ce3a.js";import"./open-closed-6718804b.js";import"./dialog-5da5b32f.js";import"./keyboard-07215bfb.js";import"./hidden-e4e23556.js";import"./branch-selecta-edit-form-55b36fcc.js";import"./pencil-icon-7668261c.js";import"./exclamation-icon-6dd86bb6.js";import"./check-icon-1ec419d1.js";import"./use-resolve-button-type-a57752a3.js";import"./iconBase-e05136ac.js";function rt(a){const[s,c]=t.useState([]),{url:n}=b(),i=n.split("/")[2],[u,l]=t.useState(!0),[f,d]=t.useState([]),[o,h]=t.useState(""),{refresh:m}=w(e=>e.app);return t.useEffect(()=>{g(i).then(e=>{c(e),l(!1)})},[m]),t.useEffect(()=>{const e=s.filter(S=>S.product_name.toLowerCase().includes(o.toLowerCase()));d(e)},[o,m]),p(x,{children:[r(v,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r(j,{search:o,setSearch:h}),r(D,{branchid:i}),u?r(L,{}):r(B,{position:a.auth.user.position,userid:a.auth.user.id,data:o==""?s:f})]})]})}export{rt as default};
