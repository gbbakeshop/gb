import{r as e,q as f,j as i,a as t}from"./app-ef09a1a0.js";import{A as h}from"./administrator-layout-66ad0b35.js";import b from"./sidebar-branches-109edc8d.js";import{B as x}from"./bread-crumbs-e2cbb5ce.js";import g from"./account-tabs-a564b14d.js";import v from"./account-profile-25ab71b5.js";import y from"./account-history-78389e2d.js";import{g as d}from"./history-services-2b7776b0.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./open-closed-3ca08ed2.js";import"./keyboard-9cab4daa.js";import"./use-resolve-button-type-ae400b2a.js";import"./iconBase-7c7c9ea7.js";import"./account-services-e2417ad7.js";function z(m){const{auth:l}=m,[p,a]=e.useState([]),{url:u}=f(),[r,n]=e.useState("production"),[w,o]=e.useState(!0),c=u.split("/")[4]??l.user.id;return e.useEffect(()=>{o(!0),r=="selecta"?d(c,"selecta").then(s=>{a(s),o(!1)}):d(c,"production").then(s=>{a(s),o(!1)})},[r]),i(h,{children:[t(b,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(x,{}),t(v,{}),t(g,{}),i("div",{className:"m-2 ",children:[t("button",{class:`${r=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("production"),children:"Production History"}),t("button",{class:`${r=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>n("selecta"),children:"Selecta History"})]}),t(y,{data:p})]})]})}export{z as default};