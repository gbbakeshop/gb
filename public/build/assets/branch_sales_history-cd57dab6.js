import{r as o,q as S,u as e,m as b,z as y,j as L,a as r}from"./app-3270b1e1.js";import{B}from"./branch-layout-1d9d8208.js";import"./moment-e0b116a3.js";import H from"./production-tabs-b68ee748.js";import{S as g}from"./skeleton-loader-e1db6641.js";import w from"./branch-history-table-a6ccc1cb.js";import x from"./branch-search-history-56aba4a4.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-78183413.js";import"./squire-icon-27e7fa65.js";import"./store-icon-684e4b98.js";import"./branches-services-f4d157e6.js";import"./database-icon-49e0a479.js";import"./calendar-icon-2e786995.js";import"./clock-icon-74a0ce91.js";import"./iconBase-174ddca8.js";import"./index.esm-3d289825.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};
