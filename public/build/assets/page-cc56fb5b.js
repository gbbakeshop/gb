import{r as t,u as d,j as s,a as o}from"./app-c469e3d3.js";import{A as S}from"./administrator-layout-d307fe66.js";import h from"./bread-table-9c62c6d0.js";import{g as w}from"./breads-services-65f205dc.js";import{S as x}from"./skeleton-loader-0a429f79.js";import{S as b}from"./search-3dc11d03.js";import g from"./sidebar-controls-a86beae4.js";import"./squire-icon-f57118da.js";import"./useDispatch-9b73aee7.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./moment-06cf66e1.js";import"./bread-create-form-c231e353.js";import"./x-mark-icon-83a4bcc4.js";import"./input-003dd785.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./bread-edit-form-1c9a62f8.js";import"./pencil-icon-0a43fae8.js";import"./loading-icon-723c98a9.js";import"./bread-delete-42c1ca4d.js";import"./sweetalert2.all-c0110678.js";import"./recipes-services-283b70b5.js";import"./loading-icon-b678458b.js";import"./trash-icon-aab5b5e8.js";import"./account-icons-bc29927d.js";function Y(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[e,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(e.toLowerCase()));p(r)},[e]),s(S,{children:[o(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(b,{search:e,setSearch:n}),o("br",{}),c?o(x,{}):o(h,{data:e==""?a:m})]})]})}export{Y as default};
