import{r as t,u as d,j as i,a as r}from"./app-17fabe6c.js";import{A as S}from"./administrator-layout-190befc9.js";import{i as h}from"./selecta-services-8dcf96ef.js";import w from"./selecta-table-0ff4ef5f.js";import{S as x}from"./skeleton-loader-7580b150.js";import{S as L}from"./search-5afa0a04.js";import g from"./sidebar-controls-b8ec7df1.js";import"./squire-icon-6d5a8750.js";import"./useDispatch-946d0582.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./moment-2453cc80.js";import"./create-selecta-form-1f402591.js";import"./x-mark-icon-a7739838.js";import"./input-f670405a.js";import"./loading-icon-c566f5ca.js";import"./transition-e0881b81.js";import"./open-closed-969ad825.js";import"./dialog-a479cd53.js";import"./keyboard-adbd37b7.js";import"./hidden-0579742e.js";import"./delete-selecta-be33328c.js";import"./trash-icon-f2eb3218.js";import"./sweetalert2.all-bca58354.js";import"./update-select-form-f2e1a306.js";import"./pencil-icon-e87d2592.js";import"./account-icons-5827fd52.js";import"./list-icon-0bad0adf.js";function X(C){const[a,m]=t.useState([]),[p,c]=t.useState(!0),[l,n]=t.useState([]),[e,f]=t.useState(""),{refresh:s}=d(o=>o.app);return t.useEffect(()=>{h().then(o=>{m(o),c(!1)})},[s]),t.useEffect(()=>{const o=a.filter(u=>u.product_name.toLowerCase().includes(e.toLowerCase()));n(o)},[e,s]),i(S,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(L,{search:e,setSearch:f}),p?r(x,{}):r(w,{data:e==""?a:l})]})]})}export{X as default};
