import{r as o,q as S,u as e,m as b,z as y,j as L,a as r}from"./app-f101d39f.js";import{B}from"./branch-layout-3f37e452.js";import"./moment-3ed58f87.js";import H from"./production-tabs-82974a30.js";import{S as g}from"./skeleton-loader-6a7e536a.js";import w from"./branch-history-table-dd4223c5.js";import x from"./branch-search-history-2e55f200.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-503ed058.js";import"./squire-icon-56201442.js";import"./store-icon-7b2fb89c.js";import"./branches-services-0ff0a163.js";import"./database-icon-2f2f30a2.js";import"./calendar-icon-e7846d78.js";import"./clock-icon-f85c11f1.js";import"./iconBase-8bb8e750.js";import"./index.esm-cbdae696.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};
