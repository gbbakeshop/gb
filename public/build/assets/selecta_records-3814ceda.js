import{r as o,u as m,m as x,D as B,j as n,a as t}from"./app-a4610531.js";import{B as L}from"./branch-layout-39110aa1.js";import"./moment-590f3566.js";import{c as D}from"./selecta-services-9135a8b1.js";import{S as g}from"./skeleton-loader-6b29079c.js";import{S as v}from"./search-2ecb489f.js";import w from"./selecta-tabs-38c27b7c.js";import{B as N}from"./bread-crumbs-38045d93.js";import _ from"./branch-selecta-search-date-eb6e1b19.js";import j from"./branch-selecta-records-table-e6ac9eb3.js";import{u as C}from"./useDispatch-669033fe.js";import"./squire-icon-6fcda0ed.js";import"./store-icon-5ba739b8.js";import"./branches-services-2e46feeb.js";import"./database-icon-5c05cb9e.js";import"./calendar-icon-14b24c3e.js";import"./iconBase-ad0eb347.js";import"./branch-select-edit-record-0159ba3e.js";import"./pencil-icon-4fdb6bf8.js";import"./loading-icon-e88778b3.js";import"./x-mark-icon-bce11f14.js";import"./input-647c8c23.js";import"./transition-29879d40.js";import"./open-closed-db19f7e7.js";import"./dialog-97bd931e.js";import"./keyboard-82747e89.js";import"./hidden-880e3a32.js";function rt(e){const d=e.auth.user.branchid,[h,u]=o.useState(!0),[l,p]=o.useState([]),[a,f]=o.useState(""),{refresh:s}=m(r=>r.app),{records:i}=m(r=>r.branchSelecta),b=C();return o.useEffect(()=>{D({date:x().format("L"),branchid:d}).then(r=>{b(B(r)),u(!1)})},[s]),o.useEffect(()=>{const r=i.filter(S=>{var c;return(c=S.selecta.product_name)==null?void 0:c.toLowerCase().includes(a==null?void 0:a.toLowerCase())});p(r)},[a,s]),n(L,{position:e.auth.user.position,branchid:e.auth.user.branchid,children:[t(N,{branchid:e.auth.user.branchid}),n("div",{className:"flex gap-4",children:[t("div",{className:"flex-none",children:t(_,{branchid:e.auth.user.branchid})}),t("div",{className:"flex-1",children:t(v,{search:a,setSearch:f})})]}),t(w,{branchid:e.auth.user.branchid}),h?t(g,{}):t(j,{userid:e.auth.user.id,data:a==""?i:l})]})}export{rt as default};
