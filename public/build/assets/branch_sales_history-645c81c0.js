import{r as o,q as S,u as e,h as b,z as y,j as L,a as r}from"./app-7fb59a5e.js";import{B}from"./branch-layout-d4b111e9.js";import"./moment-ede8cb49.js";import H from"./production-tabs-49ac3471.js";import{S as g}from"./skeleton-loader-47b36d8d.js";import w from"./branch-history-table-f89622ce.js";import x from"./branch-search-history-d519512d.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-19790469.js";import"./squire-icon-86b3867b.js";import"./store-icon-33da30d0.js";import"./branches-services-3c08282d.js";import"./database-icon-b3fd4f8c.js";import"./calendar-icon-3b3da792.js";import"./clock-icon-58d65d34.js";import"./iconBase-9c94283f.js";import"./index.esm-c08795db.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};
