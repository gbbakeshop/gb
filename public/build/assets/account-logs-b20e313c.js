import{r as o,q as f,a as r,j as u}from"./app-5d5d4b45.js";import{B as b}from"./branch-layout-9c4c73ea.js";import{B as x}from"./bread-crumbs-e627284e.js";import g from"./account-profile-d48805e0.js";import v from"./account-settings-tab-fd0b4105.js";import{g as p}from"./history-services-2b7776b0.js";import y from"./account-history-659e2c20.js";import w from"./account-history2-a79e8028.js";import{S as B}from"./skeleton-loader-193ae5b2.js";import"./squire-icon-1a44855d.js";import"./useDispatch-0c99af86.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./database-icon-0d7575f4.js";import"./calendar-icon-2f7eb342.js";import"./iconBase-5b5b9325.js";import"./account-services-5a555612.js";function G(l){const{auth:t}=l,[n,c]=o.useState([]),{url:m}=f(),a=m.split("/")[4]??t.user.id,[h,i]=o.useState(!0),[e,d]=o.useState("production");return o.useEffect(()=>{i(!0),e=="selecta"?p(a,"selecta").then(s=>{c(s),i(!1)}):p(a,"production").then(s=>{c(s),i(!1)})},[e]),r(b,{position:t.user.position,branchid:t.user.branchid,children:u("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(x,{branchid:t.user.branchid}),r(g,{id:t.user.id}),r(v,{branch:t.user.branchid,id:t.user.id}),u("div",{className:"m-2 ",children:[r("button",{class:`${e=="production"?"bg-red-500 text-white":""} mr-4 hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("production"),children:"Production History"}),r("button",{class:`${e=="selecta"?"bg-red-500 text-white":""} hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded`,onClick:()=>d("selecta"),children:"Selecta History"})]}),h?r(B,{}):e=="production"?r(y,{data:n}):r(w,{data:n})]})})}export{G as default};