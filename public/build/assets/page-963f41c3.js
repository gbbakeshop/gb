import{r as t,u as d,j as s,a as o}from"./app-2b2dd7b8.js";import{A as S}from"./administrator-layout-9c4dcc5b.js";import h from"./bread-table-06376960.js";import{g as w}from"./breads-services-10373247.js";import{S as x}from"./skeleton-loader-b9bb7611.js";import{S as b}from"./search-e3996a59.js";import g from"./sidebar-controls-8d55116f.js";import"./squire-icon-8920d878.js";import"./useDispatch-b2dba95a.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./moment-c6236491.js";import"./bread-create-form-e210a4e1.js";import"./x-mark-icon-a3c2c331.js";import"./input-fc1025c7.js";import"./transition-ae2e359c.js";import"./open-closed-d4a585f0.js";import"./dialog-9775da17.js";import"./keyboard-fa2556d0.js";import"./hidden-56e543ee.js";import"./bread-edit-form-e77ba042.js";import"./pencil-icon-472973bd.js";import"./loading-icon-f8108207.js";import"./bread-delete-e799999d.js";import"./sweetalert2.all-54f7e21d.js";import"./recipes-services-f440a5c2.js";import"./loading-icon-5f6b423f.js";import"./trash-icon-e03020b4.js";import"./account-icons-7f9db8f5.js";function Y(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[e,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(e.toLowerCase()));p(r)},[e]),s(S,{children:[o(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(b,{search:e,setSearch:n}),o("br",{}),c?o(x,{}):o(h,{data:e==""?a:m})]})]})}export{Y as default};