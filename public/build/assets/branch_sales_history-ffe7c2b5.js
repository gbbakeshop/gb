import{r as o,q as S,u as e,m as b,z as y,j as L,a as r}from"./app-181e2f4e.js";import{B}from"./branch-layout-a99091d4.js";import"./moment-723d030c.js";import H from"./production-tabs-b6f97dee.js";import{S as g}from"./skeleton-loader-04050284.js";import w from"./branch-history-table-fec324da.js";import x from"./branch-search-history-eced8f35.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-df4ea516.js";import"./squire-icon-a58bdbb6.js";import"./store-icon-b58637df.js";import"./branches-services-8c69374c.js";import"./database-icon-339b0bc0.js";import"./calendar-icon-dcd19ec1.js";import"./clock-icon-650019ea.js";import"./iconBase-95a3beea.js";import"./index.esm-99d74598.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};
