import{r as t,u as d,j as i,a as r}from"./app-bc6632bd.js";import{A as S}from"./administrator-layout-4dcdce99.js";import{i as h}from"./selecta-services-cb8fc3d5.js";import w from"./selecta-table-7397eec6.js";import{S as x}from"./skeleton-loader-fbd15785.js";import{S as L}from"./search-6e9fd3c8.js";import g from"./sidebar-controls-2c83481f.js";import"./squire-icon-7116d378.js";import"./useDispatch-4e45fd31.js";import"./store-icon-237e38d0.js";import"./branches-services-69a36442.js";import"./moment-e5207fc6.js";import"./create-selecta-form-b33c2c14.js";import"./x-mark-icon-cdc6c04e.js";import"./input-2d87672b.js";import"./loading-icon-aee5dbdf.js";import"./transition-6f84ebeb.js";import"./open-closed-a8e1af49.js";import"./dialog-21b5deee.js";import"./keyboard-93ef877a.js";import"./hidden-a8bb1d4e.js";import"./delete-selecta-2ff06138.js";import"./trash-icon-839aa6f3.js";import"./sweetalert2.all-40f8fc90.js";import"./update-select-form-722b97fa.js";import"./pencil-icon-aff147e4.js";import"./account-icons-778632f3.js";function W(C){const[a,m]=t.useState([]),[p,c]=t.useState(!0),[l,n]=t.useState([]),[e,f]=t.useState(""),{refresh:s}=d(o=>o.app);return t.useEffect(()=>{h().then(o=>{m(o),c(!1)})},[s]),t.useEffect(()=>{const o=a.filter(u=>u.product_name.toLowerCase().includes(e.toLowerCase()));n(o)},[e,s]),i(S,{children:[r(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(L,{search:e,setSearch:f}),p?r(x,{}):r(w,{data:e==""?a:l})]})]})}export{W as default};