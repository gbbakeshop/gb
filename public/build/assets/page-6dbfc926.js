import{r as t,q as b,u as w,j as p,a as r}from"./app-2b2dd7b8.js";import{A as x}from"./administrator-layout-9c4dcc5b.js";import B from"./branch-selecta-table-c325c4dd.js";import{g}from"./selecta-services-fd472504.js";import{S as L}from"./skeleton-loader-b9bb7611.js";import{S as j}from"./search-e3996a59.js";import v from"./sidebar-branches-0ccea373.js";import{B as C}from"./bread-crumbs-8eebd306.js";import D from"./tab-6a124836.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./moment-c6236491.js";import"./branch-selecta-remaining-form-1256afed.js";import"./database-icon-39f04098.js";import"./loading-icon-f8108207.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./branch-selecta-edit-form-401d60de.js";import"./pencil-icon-472973bd.js";import"./exclamation-icon-d6bae875.js";import"./check-icon-eeaf9c8a.js";import"./use-resolve-button-type-c4a04515.js";import"./iconBase-f989216d.js";function rt(a){const[s,c]=t.useState([]),{url:n}=b(),i=n.split("/")[2],[u,l]=t.useState(!0),[f,d]=t.useState([]),[o,h]=t.useState(""),{refresh:m}=w(e=>e.app);return t.useEffect(()=>{g(i).then(e=>{c(e),l(!1)})},[m]),t.useEffect(()=>{const e=s.filter(S=>S.product_name.toLowerCase().includes(o.toLowerCase()));d(e)},[o,m]),p(x,{children:[r(v,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r(j,{search:o,setSearch:h}),r(D,{branchid:i}),u?r(L,{}):r(B,{position:a.auth.user.position,userid:a.auth.user.id,data:o==""?s:f})]})]})}export{rt as default};
