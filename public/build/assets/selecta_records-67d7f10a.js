import{r as o,u as m,m as x,D as B,j as n,a as t}from"./app-ef09a1a0.js";import{B as L}from"./branch-layout-54ee40b1.js";import"./moment-0d1b12e8.js";import{c as D}from"./selecta-services-1e67ee1b.js";import{S as g}from"./skeleton-loader-8c8f6e8c.js";import{S as v}from"./search-b3d3565c.js";import w from"./selecta-tabs-4946876f.js";import{B as N}from"./bread-crumbs-e2cbb5ce.js";import _ from"./branch-selecta-search-date-8cb8034f.js";import j from"./branch-selecta-records-table-729e7895.js";import{u as C}from"./useDispatch-7c2ffa76.js";import"./squire-icon-26ab316c.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./database-icon-b3b189b7.js";import"./calendar-icon-2a3ae62d.js";import"./iconBase-7c7c9ea7.js";import"./branch-select-edit-record-52817433.js";import"./pencil-icon-9847225a.js";import"./loading-icon-7af66374.js";import"./x-mark-icon-d16dc334.js";import"./input-b4cacb1d.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";function rt(e){const d=e.auth.user.branchid,[h,u]=o.useState(!0),[l,p]=o.useState([]),[a,f]=o.useState(""),{refresh:s}=m(r=>r.app),{records:i}=m(r=>r.branchSelecta),b=C();return o.useEffect(()=>{D({date:x().format("L"),branchid:d}).then(r=>{b(B(r)),u(!1)})},[s]),o.useEffect(()=>{const r=i.filter(S=>{var c;return(c=S.selecta.product_name)==null?void 0:c.toLowerCase().includes(a==null?void 0:a.toLowerCase())});p(r)},[a,s]),n(L,{position:e.auth.user.position,branchid:e.auth.user.branchid,children:[t(N,{branchid:e.auth.user.branchid}),n("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(_,{branchid:e.auth.user.branchid})}),t("div",{className:"flex-1",children:t(v,{search:a,setSearch:f})})]}),t(w,{branchid:e.auth.user.branchid}),h?t(g,{}):t(j,{userid:e.auth.user.id,data:a==""?i:l})]})}export{rt as default};
