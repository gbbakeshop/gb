import{r,q as x,u as c,m as y,C as B,j as i,a as e}from"./app-f57cbcb1.js";import{B as L}from"./branch-layout-3cf478f8.js";import"./moment-f0997f7d.js";import{b as D}from"./selecta-services-2c12fb41.js";import{S as g}from"./skeleton-loader-429243f6.js";import v from"./selecta-tabs-c04c2d6f.js";import{B as w}from"./bread-crumbs-639d1a7a.js";import C from"./branch-selecta-history-table-e910e73a.js";import H from"./branch-selecta-search-date-history-b601cfe3.js";import{u as N}from"./useDispatch-3704c1b3.js";import"./squire-icon-4b8888d9.js";import"./store-icon-66b223c1.js";import"./branches-services-bd4eb4ba.js";import"./database-icon-69e319af.js";import"./calendar-icon-6872ca1d.js";import"./iconBase-26769fc1.js";function U(o){const{auth:a}=o,n=a.user.branchid,[m,_]=r.useState([]);x();const[h,d]=r.useState(!0),[u,p]=r.useState([]),{refresh:l}=c(t=>t.app),{history:f}=c(t=>t.branchSelecta),[s,j]=r.useState(""),b=N();return r.useEffect(()=>{D({date:y().format("L"),branchid:n}).then(t=>{b(B(t)),d(!1)})},[l]),r.useEffect(()=>{const t=m.filter(S=>S.product_name.toLowerCase().includes(s.toLowerCase()));p(t)},[s]),i(L,{position:a.user.position,branchid:a.user.branchid,children:[e(w,{branchid:a.user.branchid}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:a.user.branchid})}),e("div",{className:"flex-1"})]}),e(v,{branchid:a.user.branchid}),h?e(g,{}):e(C,{userid:o.auth.user.id,data:s==""?f:u})]})}export{U as default};
