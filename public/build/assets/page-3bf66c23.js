import{r as e,q as f,j as i,a as t}from"./app-bc6632bd.js";import{A as h}from"./administrator-layout-4dcdce99.js";import b from"./sidebar-branches-ad0a94f9.js";import{B as x}from"./bread-crumbs-56a66a42.js";import g from"./account-tabs-8201c0ab.js";import v from"./account-profile-30954141.js";import y from"./account-history-ea513909.js";import{g as d}from"./history-services-2b7776b0.js";import"./squire-icon-7116d378.js";import"./useDispatch-4e45fd31.js";import"./store-icon-237e38d0.js";import"./branches-services-69a36442.js";import"./open-closed-a8e1af49.js";import"./keyboard-93ef877a.js";import"./use-resolve-button-type-da95df73.js";import"./iconBase-c82b3fde.js";import"./account-services-697ee088.js";function z(m){const{auth:l}=m,[p,a]=e.useState([]),{url:u}=f(),[r,n]=e.useState("production"),[w,o]=e.useState(!0),c=u.split("/")[4]??l.user.id;return e.useEffect(()=>{o(!0),r=="selecta"?d(c,"selecta").then(s=>{a(s),o(!1)}):d(c,"production").then(s=>{a(s),o(!1)})},[r]),i(h,{children:[t(b,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(x,{}),t(v,{}),t(g,{}),i("div",{className:"m-2 ",children:[t("button",{class:`${r=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("production"),children:"Production History"}),t("button",{class:`${r=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("selecta"),children:"Selecta History"})]}),t(y,{data:p})]})]})}export{z as default};