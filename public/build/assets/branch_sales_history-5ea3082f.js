import{r as o,q as S,u as e,m as b,z as y,j as L,a as r}from"./app-5d5d4b45.js";import{B}from"./branch-layout-9c4c73ea.js";import"./moment-fc772d1c.js";import H from"./production-tabs-0cbac984.js";import{S as g}from"./skeleton-loader-193ae5b2.js";import w from"./branch-history-table-8e3c9974.js";import x from"./branch-search-history-cec3f05d.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-0c99af86.js";import"./squire-icon-1a44855d.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./database-icon-0d7575f4.js";import"./calendar-icon-2f7eb342.js";import"./clock-icon-3f407e69.js";import"./iconBase-5b5b9325.js";import"./index.esm-4f9a8794.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};