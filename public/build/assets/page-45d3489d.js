import{r as t,q as b,u as w,j as p,a as r}from"./app-c469e3d3.js";import{A as x}from"./administrator-layout-d307fe66.js";import B from"./branch-selecta-table-345d7ec6.js";import{g}from"./selecta-services-a8eeed4d.js";import{S as L}from"./skeleton-loader-0a429f79.js";import{S as j}from"./search-3dc11d03.js";import v from"./sidebar-branches-4eac1573.js";import{B as C}from"./bread-crumbs-d662e9bc.js";import D from"./tab-e791aa86.js";import"./squire-icon-f57118da.js";import"./useDispatch-9b73aee7.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./moment-06cf66e1.js";import"./branch-selecta-remaining-form-e2774ace.js";import"./database-icon-c6cf3fdf.js";import"./loading-icon-723c98a9.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./branch-selecta-edit-form-3a78ce7c.js";import"./pencil-icon-0a43fae8.js";import"./exclamation-icon-e7ac0547.js";import"./check-icon-761bf961.js";import"./use-resolve-button-type-0a5aa6bc.js";import"./iconBase-dd8be0d8.js";function rt(a){const[s,c]=t.useState([]),{url:n}=b(),i=n.split("/")[2],[u,l]=t.useState(!0),[f,d]=t.useState([]),[o,h]=t.useState(""),{refresh:m}=w(e=>e.app);return t.useEffect(()=>{g(i).then(e=>{c(e),l(!1)})},[m]),t.useEffect(()=>{const e=s.filter(S=>S.product_name.toLowerCase().includes(o.toLowerCase()));d(e)},[o,m]),p(x,{children:[r(v,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r(j,{search:o,setSearch:h}),r(D,{branchid:i}),u?r(L,{}):r(B,{position:a.auth.user.position,userid:a.auth.user.id,data:o==""?s:f})]})]})}export{rt as default};