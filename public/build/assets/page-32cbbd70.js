import{r as t,u as g,q as h,j as a,a as o}from"./app-2b2dd7b8.js";import{g as w}from"./ingredients-services-c111c7fd.js";import{A as x}from"./administrator-layout-9c4dcc5b.js";import L from"./ingredients-table-66a8b309.js";import{S as b}from"./skeleton-loader-b9bb7611.js";import{S as C}from"./search-e3996a59.js";import j from"./sidebar-controls-8d55116f.js";import v from"./recipes-tabs-6fc6ffed.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./ingredients-show-f90bf388.js";import"./x-mark-icon-a3c2c331.js";import"./eyes-icon-535472df.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./ingredients-edit-a944fadc.js";import"./pencil-icon-472973bd.js";import"./trash-icon-e03020b4.js";import"./input-fc1025c7.js";import"./raw-materials-services-13aa9ebd.js";import"./sweetalert2.all-54f7e21d.js";import"./ingredients-delete-1cfbd130.js";import"./account-icons-7f9db8f5.js";import"./index.esm-cca27195.js";import"./iconBase-f989216d.js";function rt(D){const[s,i]=t.useState([]),[m,p]=t.useState(!0),{refresh:n}=g(r=>r.app),[c,l]=t.useState([]),[e,f]=t.useState(""),{url:u}=h(),d=u.split("/")[3];return t.useEffect(()=>{w().then(r=>{i(r.status),p(!1)})},[n]),t.useEffect(()=>{const r=s.filter(S=>S.code.toLowerCase().includes(e.toLowerCase()));l(r)},[e,s]),a(x,{children:[o(j,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(v,{page:d}),o("br",{}),o(C,{search:e,setSearch:f}),m?o(b,{}):o(L,{data:e==""?s:c})]})]})}export{rt as default};
