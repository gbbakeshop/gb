import{q as x,r,u as l,m as y,C as B,j as i,a as e}from"./app-08d5fdd9.js";import{A as v}from"./administrator-layout-b2a89450.js";import{b as w}from"./selecta-services-48840473.js";import{S as L}from"./skeleton-loader-6937505f.js";import g from"./sidebar-branches-54d4e9f3.js";import{B as N}from"./bread-crumbs-4632d0d7.js";import C from"./tab-7fa99a8f.js";import D from"./branch-selecta-history-table-72005a76.js";import H from"./branch-selecta-search-date-history-349ed6a7.js";import{u as j}from"./useDispatch-c969bf2e.js";import"./squire-icon-36f89341.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./open-closed-7b339eda.js";import"./keyboard-af8c721b.js";import"./use-resolve-button-type-0cbd914c.js";import"./iconBase-854383f2.js";import"./moment-fe6c6ad3.js";function W(s){const{url:u}=x(),o=s.auth.user.position=="admin"?u.split("/")[2]:s.auth.user.branchid,[f,h]=r.useState(!0),[p,d]=r.useState([]),[a,E]=r.useState(""),{refresh:c}=l(t=>t.app),{history:n}=l(t=>t.branchSelecta),S=j();return r.useEffect(()=>{w({date:y().format("L"),branchid:o}).then(t=>{S(B(t)),h(!1)})},[c]),r.useEffect(()=>{const t=n.filter(b=>{var m;return(m=b.user.name)==null?void 0:m.toLowerCase().includes(a==null?void 0:a.toLowerCase())});d(t)},[a,c]),i(v,{children:[e(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(N,{}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:o})}),e("div",{className:"flex-1"})]}),e(C,{branchid:o}),f?e(L,{}):e(D,{userid:s.auth.user.id,data:a==""?n:p})]})]})}export{W as default};