import{r as o,q as f,a as r,j as u}from"./app-ef09a1a0.js";import{B as b}from"./branch-layout-54ee40b1.js";import{B as x}from"./bread-crumbs-e2cbb5ce.js";import g from"./account-profile-25ab71b5.js";import v from"./account-settings-tab-1c94e2ca.js";import{g as p}from"./history-services-2b7776b0.js";import y from"./account-history-78389e2d.js";import w from"./account-history2-d4b5ef83.js";import{S as B}from"./skeleton-loader-8c8f6e8c.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./database-icon-b3b189b7.js";import"./calendar-icon-2a3ae62d.js";import"./iconBase-7c7c9ea7.js";import"./account-services-e2417ad7.js";function G(l){const{auth:t}=l,[n,c]=o.useState([]),{url:m}=f(),a=m.split("/")[4]??t.user.id,[h,i]=o.useState(!0),[e,d]=o.useState("production");return o.useEffect(()=>{i(!0),e=="selecta"?p(a,"selecta").then(s=>{c(s),i(!1)}):p(a,"production").then(s=>{c(s),i(!1)})},[e]),r(b,{position:t.user.position,branchid:t.user.branchid,children:u("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(x,{branchid:t.user.branchid}),r(g,{id:t.user.id}),r(v,{branch:t.user.branchid,id:t.user.id}),u("div",{className:"m-2 ",children:[r("button",{class:`${e=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("production"),children:"Production History"}),r("button",{class:`${e=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("selecta"),children:"Selecta History"})]}),h?r(B,{}):e=="production"?r(y,{data:n}):r(w,{data:n})]})})}export{G as default};