import{r,q as x,u as c,h as y,D as B,j as i,a as e}from"./app-82567c3a.js";import{B as D}from"./branch-layout-0f7da0c0.js";import"./moment-bfc19645.js";import{b as L}from"./selecta-services-ccc8a27b.js";import{S as g}from"./skeleton-loader-eb22bc65.js";import v from"./selecta-tabs-18a18354.js";import{B as w}from"./bread-crumbs-90ae982a.js";import H from"./branch-selecta-history-table-922c1f82.js";import N from"./branch-selecta-search-date-history-c8b43030.js";import{u as _}from"./useDispatch-be7aef64.js";import"./squire-icon-99b4d3f5.js";import"./store-icon-2c77a349.js";import"./branches-services-ff40547c.js";import"./database-icon-ed03ccce.js";import"./calendar-icon-e85200c8.js";import"./iconBase-d2c8648f.js";function U(o){const{auth:a}=o,n=a.user.branchid,[h,j]=r.useState([]);x();const[m,d]=r.useState(!0),[u,p]=r.useState([]),{refresh:l}=c(t=>t.app),{history:f}=c(t=>t.branchSelecta),[s,C]=r.useState(""),b=_();return r.useEffect(()=>{L({date:y().format("L"),branchid:n}).then(t=>{b(B(t)),d(!1)})},[l]),r.useEffect(()=>{const t=h.filter(S=>S.product_name.toLowerCase().includes(s.toLowerCase()));p(t)},[s]),i(D,{position:a.user.position,branchid:a.user.branchid,children:[e(w,{branchid:a.user.branchid}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(N,{branchid:a.user.branchid})}),e("div",{className:"flex-1"})]}),e(v,{branchid:a.user.branchid}),m?e(g,{}):e(H,{userid:o.auth.user.id,data:s==""?f:u})]})}export{U as default};
