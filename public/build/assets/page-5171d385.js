import{r as e,q as f,j as i,a as t}from"./app-17fabe6c.js";import{A as h}from"./administrator-layout-190befc9.js";import b from"./sidebar-branches-182efb02.js";import{B as x}from"./bread-crumbs-f3242ea2.js";import g from"./account-tabs-5460babf.js";import v from"./account-profile-41857532.js";import y from"./account-history-4f8af945.js";import{g as d}from"./history-services-2b7776b0.js";import"./squire-icon-6d5a8750.js";import"./useDispatch-946d0582.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./open-closed-969ad825.js";import"./keyboard-adbd37b7.js";import"./use-resolve-button-type-84fc6829.js";import"./iconBase-9f6c11a0.js";import"./account-services-4fa7e09c.js";function z(m){const{auth:l}=m,[p,a]=e.useState([]),{url:u}=f(),[r,n]=e.useState("production"),[w,o]=e.useState(!0),c=u.split("/")[4]??l.user.id;return e.useEffect(()=>{o(!0),r=="selecta"?d(c,"selecta").then(s=>{a(s),o(!1)}):d(c,"production").then(s=>{a(s),o(!1)})},[r]),i(h,{children:[t(b,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(x,{}),t(v,{}),t(g,{}),i("div",{className:"m-2 ",children:[t("button",{class:`${r=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("production"),children:"Production History"}),t("button",{class:`${r=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("selecta"),children:"Selecta History"})]}),t(y,{data:p})]})]})}export{z as default};