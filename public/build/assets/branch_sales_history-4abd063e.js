import{r as o,q as S,u as e,m as b,z as y,j as L,a as r}from"./app-e55071d8.js";import{B}from"./branch-layout-bc13f132.js";import"./moment-847c882c.js";import H from"./production-tabs-ea304db3.js";import{S as g}from"./skeleton-loader-b90cce2b.js";import w from"./branch-history-table-8615c200.js";import x from"./branch-search-history-a8f0c404.js";import{a as D}from"./history-services-2b7776b0.js";import{u as j}from"./useDispatch-75563152.js";import"./squire-icon-1687528a.js";import"./store-icon-2103ef62.js";import"./branches-services-37881555.js";import"./database-icon-4779e807.js";import"./calendar-icon-be284948.js";import"./clock-icon-39d668db.js";import"./iconBase-5ad5fabe.js";import"./index.esm-0cadbb50.js";function R(i){const[n,C]=o.useState([]),c=j(),{auth:s}=i,[m,p]=o.useState(!0);S();const{history:u}=e(t=>t.branchHistory),{refresh:h}=e(t=>t.app),[f,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{D(b().format("L")).then(t=>{c(y(t)),p(!1)})},[h]),o.useEffect(()=>{const t=n.filter(l=>l.bread_name.toLowerCase().includes(a.toLowerCase()));d(t)},[a]),L(B,{position:s.user.position,branchid:s.user.branchid,children:[r(H,{position:s.user.position}),r("br",{}),r(x,{}),m?r(g,{}):r(w,{account:s.user,data:a==""?u:f})]})}export{R as default};
