import{r,q as x,u as c,h as y,D as B,j as i,a as e}from"./app-ca96d5b2.js";import{B as D}from"./branch-layout-221c667b.js";import"./moment-be919951.js";import{b as L}from"./selecta-services-020eef0a.js";import{S as g}from"./skeleton-loader-7949f6a7.js";import v from"./selecta-tabs-7d762b49.js";import{B as w}from"./bread-crumbs-587af919.js";import H from"./branch-selecta-history-table-5b4bba53.js";import N from"./branch-selecta-search-date-history-1e71f86e.js";import{u as _}from"./useDispatch-1c9b41c0.js";import"./squire-icon-c4525b4e.js";import"./store-icon-402414b9.js";import"./branches-services-cf1998c6.js";import"./database-icon-37e7d390.js";import"./calendar-icon-74d5c9a7.js";import"./iconBase-e05136ac.js";function U(o){const{auth:a}=o,n=a.user.branchid,[h,j]=r.useState([]);x();const[m,d]=r.useState(!0),[u,p]=r.useState([]),{refresh:l}=c(t=>t.app),{history:f}=c(t=>t.branchSelecta),[s,C]=r.useState(""),b=_();return r.useEffect(()=>{L({date:y().format("L"),branchid:n}).then(t=>{b(B(t)),d(!1)})},[l]),r.useEffect(()=>{const t=h.filter(S=>S.product_name.toLowerCase().includes(s.toLowerCase()));p(t)},[s]),i(D,{position:a.user.position,branchid:a.user.branchid,children:[e(w,{branchid:a.user.branchid}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(N,{branchid:a.user.branchid})}),e("div",{className:"flex-1"})]}),e(v,{branchid:a.user.branchid}),m?e(g,{}):e(H,{userid:o.auth.user.id,data:s==""?f:u})]})}export{U as default};
