import{r,q as x,u as c,m as y,C as B,j as i,a as e}from"./app-08d5fdd9.js";import{B as L}from"./branch-layout-758f73cf.js";import"./moment-fe6c6ad3.js";import{b as D}from"./selecta-services-48840473.js";import{S as g}from"./skeleton-loader-6937505f.js";import v from"./selecta-tabs-670ed7a7.js";import{B as w}from"./bread-crumbs-4632d0d7.js";import C from"./branch-selecta-history-table-72005a76.js";import H from"./branch-selecta-search-date-history-349ed6a7.js";import{u as N}from"./useDispatch-c969bf2e.js";import"./squire-icon-36f89341.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./database-icon-bacfd180.js";import"./calendar-icon-04fb4db3.js";import"./iconBase-854383f2.js";function U(o){const{auth:a}=o,n=a.user.branchid,[m,_]=r.useState([]);x();const[h,d]=r.useState(!0),[u,p]=r.useState([]),{refresh:l}=c(t=>t.app),{history:f}=c(t=>t.branchSelecta),[s,j]=r.useState(""),b=N();return r.useEffect(()=>{D({date:y().format("L"),branchid:n}).then(t=>{b(B(t)),d(!1)})},[l]),r.useEffect(()=>{const t=m.filter(S=>S.product_name.toLowerCase().includes(s.toLowerCase()));p(t)},[s]),i(L,{position:a.user.position,branchid:a.user.branchid,children:[e(w,{branchid:a.user.branchid}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:a.user.branchid})}),e("div",{className:"flex-1"})]}),e(v,{branchid:a.user.branchid}),h?e(g,{}):e(C,{userid:o.auth.user.id,data:s==""?f:u})]})}export{U as default};