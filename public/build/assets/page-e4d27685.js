import{r as t,u as d,j as s,a as o}from"./app-08d5fdd9.js";import{A as S}from"./administrator-layout-b2a89450.js";import h from"./bread-table-8d53d788.js";import{g as w}from"./breads-services-16a9315b.js";import{S as x}from"./skeleton-loader-6937505f.js";import{S as b}from"./search-04688f00.js";import g from"./sidebar-controls-1adedf2a.js";import"./squire-icon-36f89341.js";import"./useDispatch-c969bf2e.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./moment-fe6c6ad3.js";import"./bread-create-form-fde7208a.js";import"./x-mark-icon-f599ee92.js";import"./input-e80c4358.js";import"./transition-848bb259.js";import"./open-closed-7b339eda.js";import"./dialog-44d4e03b.js";import"./keyboard-af8c721b.js";import"./hidden-419a8fc1.js";import"./bread-edit-form-c496c337.js";import"./pencil-icon-8141edde.js";import"./loading-icon-d4df88e7.js";import"./bread-delete-4dca01a9.js";import"./sweetalert2.all-e1c49dde.js";import"./recipes-services-fe2185b5.js";import"./loading-icon-4192ed16.js";import"./trash-icon-e0047594.js";import"./account-icons-ee748241.js";function Y(L){const[a,i]=t.useState([]),[m,p]=t.useState([]),[e,n]=t.useState(""),{refresh:l}=d(r=>r.app),[c,f]=t.useState(!0);return t.useEffect(()=>{w().then(r=>{i(r),f(!1)})},[l]),t.useEffect(()=>{const r=a.filter(u=>u.bread_name.toLowerCase().includes(e.toLowerCase()));p(r)},[e]),s(S,{children:[o(g,{}),s("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(b,{search:e,setSearch:n}),o("br",{}),c?o(x,{}):o(h,{data:e==""?a:m})]})]})}export{Y as default};
