import{r as o,u as m,m as x,D as B,j as n,a as t}from"./app-f57cbcb1.js";import{B as L}from"./branch-layout-3cf478f8.js";import"./moment-f0997f7d.js";import{c as D}from"./selecta-services-2c12fb41.js";import{S as g}from"./skeleton-loader-429243f6.js";import{S as v}from"./search-fef4fc62.js";import w from"./selecta-tabs-c04c2d6f.js";import{B as N}from"./bread-crumbs-639d1a7a.js";import _ from"./branch-selecta-search-date-76db4b25.js";import j from"./branch-selecta-records-table-b15b93ff.js";import{u as C}from"./useDispatch-3704c1b3.js";import"./squire-icon-4b8888d9.js";import"./store-icon-66b223c1.js";import"./branches-services-bd4eb4ba.js";import"./database-icon-69e319af.js";import"./calendar-icon-6872ca1d.js";import"./iconBase-26769fc1.js";import"./branch-select-edit-record-f74ae926.js";import"./pencil-icon-2de7c05e.js";import"./loading-icon-98deb104.js";import"./x-mark-icon-8867baed.js";import"./input-5cb29f9a.js";import"./transition-c93cd203.js";import"./open-closed-bd663fc5.js";import"./dialog-590e4a9d.js";import"./keyboard-f48aff64.js";import"./hidden-a075f39d.js";function rt(e){const d=e.auth.user.branchid,[h,u]=o.useState(!0),[l,p]=o.useState([]),[a,f]=o.useState(""),{refresh:s}=m(r=>r.app),{records:i}=m(r=>r.branchSelecta),b=C();return o.useEffect(()=>{D({date:x().format("L"),branchid:d}).then(r=>{b(B(r)),u(!1)})},[s]),o.useEffect(()=>{const r=i.filter(S=>{var c;return(c=S.selecta.product_name)==null?void 0:c.toLowerCase().includes(a==null?void 0:a.toLowerCase())});p(r)},[a,s]),n(L,{position:e.auth.user.position,branchid:e.auth.user.branchid,children:[t(N,{branchid:e.auth.user.branchid}),n("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(_,{branchid:e.auth.user.branchid})}),t("div",{className:"flex-1",children:t(v,{search:a,setSearch:f})})]}),t(w,{branchid:e.auth.user.branchid}),h?t(g,{}):t(j,{userid:e.auth.user.id,data:a==""?i:l})]})}export{rt as default};
