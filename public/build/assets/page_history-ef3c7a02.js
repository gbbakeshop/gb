import{q as x,r,u as l,m as y,C as B,j as i,a as e}from"./app-c48f66d4.js";import{A as v}from"./administrator-layout-a698a477.js";import{b as w}from"./selecta-services-3603522a.js";import{S as L}from"./skeleton-loader-8fac7016.js";import g from"./sidebar-branches-b9873ac6.js";import{B as N}from"./bread-crumbs-5154e829.js";import C from"./tab-4dd57cb1.js";import D from"./branch-selecta-history-table-8c49135c.js";import H from"./branch-selecta-search-date-history-54323318.js";import{u as j}from"./useDispatch-b7840e4e.js";import"./squire-icon-0183d8c0.js";import"./store-icon-2fc7239b.js";import"./branches-services-41e1f4cc.js";import"./open-closed-b5e50602.js";import"./keyboard-1e92b45a.js";import"./use-resolve-button-type-23daba16.js";import"./iconBase-c3477e42.js";import"./moment-7b5c21ff.js";function W(s){const{url:u}=x(),o=s.auth.user.position=="admin"?u.split("/")[2]:s.auth.user.branchid,[f,h]=r.useState(!0),[p,d]=r.useState([]),[a,E]=r.useState(""),{refresh:c}=l(t=>t.app),{history:n}=l(t=>t.branchSelecta),S=j();return r.useEffect(()=>{w({date:y().format("L"),branchid:o}).then(t=>{S(B(t)),h(!1)})},[c]),r.useEffect(()=>{const t=n.filter(b=>{var m;return(m=b.user.name)==null?void 0:m.toLowerCase().includes(a==null?void 0:a.toLowerCase())});d(t)},[a,c]),i(v,{children:[e(g,{}),i("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(N,{}),i("div",{className:"flex gap-4",children:[e("div",{className:"flex-none",children:e(H,{branchid:o})}),e("div",{className:"flex-1"})]}),e(C,{branchid:o}),f?e(L,{}):e(D,{userid:s.auth.user.id,data:a==""?n:p})]})]})}export{W as default};
