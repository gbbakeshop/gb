import{q as x,r,u as l,h as y,D as B,j as i,a as e}from"./app-82567c3a.js";import{A as v}from"./administrator-layout-48983c60.js";import{b as w}from"./selecta-services-ccc8a27b.js";import{S as L}from"./skeleton-loader-eb22bc65.js";import g from"./sidebar-branches-9d437993.js";import{B as D}from"./bread-crumbs-90ae982a.js";import N from"./tab-c6324c6d.js";import H from"./branch-selecta-history-table-922c1f82.js";import j from"./branch-selecta-search-date-history-c8b43030.js";import{u as C}from"./useDispatch-be7aef64.js";import"./squire-icon-99b4d3f5.js";import"./store-icon-2c77a349.js";import"./branches-services-ff40547c.js";import"./open-closed-245e8a1d.js";import"./keyboard-9010cb57.js";import"./use-resolve-button-type-12389193.js";import"./iconBase-d2c8648f.js";import"./moment-bfc19645.js";function W(s){const{url:u}=x(),o=s.auth.user.position=="admin"?u.split("/")[2]:s.auth.user.branchid,[f,h]=r.useState(!0),[p,d]=r.useState([]),[a,E]=r.useState(""),{refresh:c}=l(t=>t.app),{history:n}=l(t=>t.branchSelecta),S=C();return r.useEffect(()=>{w({date:y().format("L"),branchid:o}).then(t=>{S(B(t)),h(!1)})},[c]),r.useEffect(()=>{const t=n.filter(b=>{var m;return(m=b.user.name)==null?void 0:m.toLowerCase().includes(a==null?void 0:a.toLowerCase())});d(t)},[a,c]),i(v,{children:[e(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(D,{}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(j,{branchid:o})}),e("div",{className:"flex-1"})]}),e(N,{branchid:o}),f?e(L,{}):e(H,{userid:s.auth.user.id,data:a==""?n:p})]})]})}export{W as default};
