import{r as t,q as b,u as w,j as p,a as r}from"./app-3270b1e1.js";import{A as x}from"./administrator-layout-06d4fe60.js";import B from"./branch-selecta-table-f10915d2.js";import{g}from"./selecta-services-181f092a.js";import{S as L}from"./skeleton-loader-e1db6641.js";import{S as j}from"./search-c39ad9f8.js";import v from"./sidebar-branches-bba14823.js";import{B as C}from"./bread-crumbs-0023ceea.js";import D from"./tab-bb3845dd.js";import"./squire-icon-27e7fa65.js";import"./useDispatch-78183413.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./moment-e0b116a3.js";import"./branch-selecta-remaining-form-28084a28.js";import"./database-icon-49e0a479.js";import"./loading-icon-6189bac8.js";import"./transition-264e0c27.js";import"./open-closed-12324eb0.js";import"./dialog-a21274b5.js";import"./keyboard-12670607.js";import"./hidden-884e9ad3.js";import"./branch-selecta-edit-form-4b8eba80.js";import"./pencil-icon-dcb65891.js";import"./exclamation-icon-18ae7d0f.js";import"./check-icon-01b83a43.js";import"./use-resolve-button-type-475870bd.js";import"./iconBase-174ddca8.js";function rt(a){const[s,c]=t.useState([]),{url:n}=b(),i=n.split("/")[2],[u,l]=t.useState(!0),[f,d]=t.useState([]),[o,h]=t.useState(""),{refresh:m}=w(e=>e.app);return t.useEffect(()=>{g(i).then(e=>{c(e),l(!1)})},[m]),t.useEffect(()=>{const e=s.filter(S=>S.product_name.toLowerCase().includes(o.toLowerCase()));d(e)},[o,m]),p(x,{children:[r(v,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(C,{}),r(j,{search:o,setSearch:h}),r(D,{branchid:i}),u?r(L,{}):r(B,{position:a.auth.user.position,userid:a.auth.user.id,data:o==""?s:f})]})]})}export{rt as default};
