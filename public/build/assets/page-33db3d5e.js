import{r as e,q as x,u as C,j as c,a as o}from"./app-3270b1e1.js";import{A as L}from"./administrator-layout-06d4fe60.js";import{g as _}from"./recipes-services-49cc2170.js";import b from"./recipes-table-6b0949c3.js";import{S as v}from"./skeleton-loader-e1db6641.js";import D from"./recipes-tabs-d488aa42.js";import{S as E}from"./search-c39ad9f8.js";import R from"./sidebar-controls-dab705b5.js";import"./squire-icon-27e7fa65.js";import"./useDispatch-78183413.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./recipes-add-ingredients-ff73bb41.js";import"./ingredients-services-f6401d1a.js";import"./x-mark-icon-e5a79486.js";import"./pencil-icon-dcb65891.js";import"./transition-264e0c27.js";import"./open-closed-12324eb0.js";import"./dialog-a21274b5.js";import"./keyboard-12670607.js";import"./hidden-884e9ad3.js";import"./recipes-show-ingredients-3ad0a057.js";import"./eyes-icon-53b8e0bc.js";import"./recipes-delete-ingredients-22475df7.js";import"./trash-icon-68abe038.js";import"./sweetalert2.all-ac4047b1.js";import"./index.esm-15f9d0e5.js";import"./iconBase-174ddca8.js";import"./index.esm-3d289825.js";import"./account-icons-6648d1c0.js";function st(A){const[t,n]=e.useState([]),[l,f]=e.useState(!0),[u,d]=e.useState([]),[s,S]=e.useState(""),{url:h}=x(),g=h.split("/")[3],{refresh:w}=C(r=>r.app);return e.useEffect(()=>{_().then(r=>{n(r),f(!1)})},[w]),e.useEffect(()=>{const r=t==null?void 0:t.map(a=>{var p;return(p=a==null?void 0:a.selected_breads)==null?void 0:p.filter(i=>{var m;return(m=i==null?void 0:i.bread_name)==null?void 0:m.toLowerCase().includes(s.toLowerCase())})});d(t.map((a,p)=>({...a,selected_breads:r[p]})))},[s,t]),c(L,{children:[o(R,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o(D,{page:g}),o("br",{}),o(E,{search:s,setSearch:S}),l?o(v,{}):o(b,{data:s==""?t:u})]})]})}export{st as default};
