import{r as t,u as d,j as i,a as r}from"./app-2b2dd7b8.js";import{A as S}from"./administrator-layout-9c4dcc5b.js";import{i as h}from"./selecta-services-fd472504.js";import w from"./selecta-table-596652e2.js";import{S as x}from"./skeleton-loader-b9bb7611.js";import{S as L}from"./search-e3996a59.js";import g from"./sidebar-controls-8d55116f.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./moment-c6236491.js";import"./create-selecta-form-802ccf1e.js";import"./x-mark-icon-a3c2c331.js";import"./input-fc1025c7.js";import"./loading-icon-f8108207.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./delete-selecta-6b1f9b52.js";import"./trash-icon-e03020b4.js";import"./sweetalert2.all-54f7e21d.js";import"./update-select-form-fbdafed1.js";import"./pencil-icon-472973bd.js";import"./account-icons-7f9db8f5.js";function W(C){const[a,m]=t.useState([]),[p,c]=t.useState(!0),[l,n]=t.useState([]),[e,f]=t.useState(""),{refresh:s}=d(o=>o.app);return t.useEffect(()=>{h().then(o=>{m(o),c(!1)})},[s]),t.useEffect(()=>{const o=a.filter(u=>u.product_name.toLowerCase().includes(e.toLowerCase()));n(o)},[e,s]),i(S,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(L,{search:e,setSearch:f}),p?r(x,{}):r(w,{data:e==""?a:l})]})]})}export{W as default};
