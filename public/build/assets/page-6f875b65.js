import{r as t,u as d,j as s,a as o}from"./app-3270b1e1.js";import{A as S}from"./administrator-layout-06d4fe60.js";import h from"./bread-table-3c29c33c.js";import{g as w}from"./breads-services-d2fedcad.js";import{S as x}from"./skeleton-loader-e1db6641.js";import{S as b}from"./search-c39ad9f8.js";import g from"./sidebar-controls-dab705b5.js";import"./squire-icon-27e7fa65.js";import"./useDispatch-78183413.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./moment-e0b116a3.js";import"./bread-create-form-6d31dd71.js";import"./x-mark-icon-e5a79486.js";import"./input-f1101168.js";import"./transition-264e0c27.js";import"./open-closed-12324eb0.js";import"./dialog-a21274b5.js";import"./keyboard-12670607.js";import"./hidden-884e9ad3.js";import"./bread-edit-form-67d62b0e.js";import"./pencil-icon-dcb65891.js";import"./loading-icon-6189bac8.js";import"./bread-delete-89a0de4d.js";import"./sweetalert2.all-ac4047b1.js";import"./recipes-services-49cc2170.js";import"./loading-icon-8bc75c05.js";import"./trash-icon-68abe038.js";import"./account-icons-6648d1c0.js";function Y(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[e,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(e.toLowerCase()));p(r)},[e]),s(S,{children:[o(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(b,{search:e,setSearch:n}),o("br",{}),c?o(x,{}):o(h,{data:e==""?a:m})]})]})}export{Y as default};
