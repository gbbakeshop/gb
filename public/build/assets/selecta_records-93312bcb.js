import{r as o,u as m,m as x,D as B,j as n,a as t}from"./app-483a1188.js";import{B as L}from"./branch-layout-1700a69e.js";import"./moment-2b5494d9.js";import{c as D}from"./selecta-services-3b0d019f.js";import{S as g}from"./skeleton-loader-3f2952c8.js";import{S as v}from"./search-f13dd32c.js";import w from"./selecta-tabs-66cc36c5.js";import{B as N}from"./bread-crumbs-e090aa5b.js";import _ from"./branch-selecta-search-date-5277e49b.js";import j from"./branch-selecta-records-table-d6eabf76.js";import{u as C}from"./useDispatch-43f40b7a.js";import"./squire-icon-0c3b3213.js";import"./store-icon-84303c14.js";import"./branches-services-35bc74d2.js";import"./database-icon-d2a18a59.js";import"./calendar-icon-deb6848e.js";import"./iconBase-cdff590d.js";import"./branch-select-edit-record-e44a36ee.js";import"./pencil-icon-0feac25c.js";import"./loading-icon-d9b486ef.js";import"./x-mark-icon-7df95abc.js";import"./input-0c87556f.js";import"./transition-61a3cd28.js";import"./open-closed-90812656.js";import"./dialog-bf690031.js";import"./keyboard-b4182d0b.js";import"./hidden-6def840a.js";function rt(e){const d=e.auth.user.branchid,[h,u]=o.useState(!0),[l,p]=o.useState([]),[a,f]=o.useState(""),{refresh:s}=m(r=>r.app),{records:i}=m(r=>r.branchSelecta),b=C();return o.useEffect(()=>{D({date:x().format("L"),branchid:d}).then(r=>{b(B(r)),u(!1)})},[s]),o.useEffect(()=>{const r=i.filter(S=>{var c;return(c=S.selecta.product_name)==null?void 0:c.toLowerCase().includes(a==null?void 0:a.toLowerCase())});p(r)},[a,s]),n(L,{position:e.auth.user.position,branchid:e.auth.user.branchid,children:[t(N,{branchid:e.auth.user.branchid}),n("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(_,{branchid:e.auth.user.branchid})}),t("div",{className:"flex-1",children:t(v,{search:a,setSearch:f})})]}),t(w,{branchid:e.auth.user.branchid}),h?t(g,{}):t(j,{userid:e.auth.user.id,data:a==""?i:l})]})}export{rt as default};
