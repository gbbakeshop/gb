import{r,q as x,u as c,m as y,C as B,j as i,a as e}from"./app-a4610531.js";import{B as L}from"./branch-layout-39110aa1.js";import"./moment-590f3566.js";import{b as D}from"./selecta-services-9135a8b1.js";import{S as g}from"./skeleton-loader-6b29079c.js";import v from"./selecta-tabs-38c27b7c.js";import{B as w}from"./bread-crumbs-38045d93.js";import C from"./branch-selecta-history-table-4a69c1bf.js";import H from"./branch-selecta-search-date-history-38b054b2.js";import{u as N}from"./useDispatch-669033fe.js";import"./squire-icon-6fcda0ed.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./database-icon-5c05cb9e.js";import"./calendar-icon-14b24c3e.js";import"./iconBase-ad0eb347.js";function U(o){const{auth:a}=o,n=a.user.branchid,[m,_]=r.useState([]);x();const[h,d]=r.useState(!0),[u,p]=r.useState([]),{refresh:l}=c(t=>t.app),{history:f}=c(t=>t.branchSelecta),[s,j]=r.useState(""),b=N();return r.useEffect(()=>{D({date:y().format("L"),branchid:n}).then(t=>{b(B(t)),d(!1)})},[l]),r.useEffect(()=>{const t=m.filter(S=>S.product_name.toLowerCase().includes(s.toLowerCase()));p(t)},[s]),i(L,{position:a.user.position,branchid:a.user.branchid,children:[e(w,{branchid:a.user.branchid}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:a.user.branchid})}),e("div",{className:"flex-1"})]}),e(v,{branchid:a.user.branchid}),h?e(g,{}):e(C,{userid:o.auth.user.id,data:s==""?f:u})]})}export{U as default};
