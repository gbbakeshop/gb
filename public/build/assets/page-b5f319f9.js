import{r,q as L,u as C,j as p,a as e}from"./app-c48f66d4.js";import{A as D}from"./administrator-layout-a698a477.js";import P from"./bread-table-92aa5df0.js";import{g as v}from"./recipes-services-9e7c6def.js";import E from"./branch-bakers-production-tabs-6e2ff6e6.js";import{S as k}from"./skeleton-loader-8fac7016.js";import{g as A}from"./raw-materials-services-e4c7b96e.js";import{S as N}from"./search-a2f04bef.js";import T from"./sidebar-branches-b9873ac6.js";import{B as q}from"./bread-crumbs-5154e829.js";import"./squire-icon-0183d8c0.js";import"./useDispatch-b7840e4e.js";import"./store-icon-2fc7239b.js";import"./branches-services-41e1f4cc.js";import"./create-production-form-03f4386b.js";import"./x-mark-icon-db582e67.js";import"./plus-icon-412ba775.js";import"./ingredients-services-ebad2111.js";import"./records-services-8c083049.js";import"./transition-eefe54c6.js";import"./open-closed-b5e50602.js";import"./dialog-32fb1b8f.js";import"./keyboard-1e92b45a.js";import"./hidden-4b0e490b.js";import"./clock-icon-5777d3e4.js";import"./iconBase-c3477e42.js";import"./index.esm-58e69666.js";import"./use-resolve-button-type-23daba16.js";function ct(u){const{auth:l}=u,[o,d]=r.useState([]),[f,h]=r.useState([]),[S,B]=r.useState(!0),{url:_}=L(),c=_.split("/")[2],{refresh:g}=C(t=>t.app),[w,b]=r.useState([]),[s,x]=r.useState("");return r.useEffect(()=>{v().then(t=>{d(t),B(!1)}),A(c).then(t=>{h(t)})},[g]),r.useEffect(()=>{const t=o==null?void 0:o.map(a=>{var m;return(m=a==null?void 0:a.selected_breads)==null?void 0:m.filter(i=>{var n;return(n=i==null?void 0:i.bread_name)==null?void 0:n.toLowerCase().includes(s.toLowerCase())})});b(o.map((a,m)=>({...a,selected_breads:t[m]})))},[s,o]),p(D,{children:[e(T,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(q,{}),e(E,{}),e("br",{}),e(N,{search:s,setSearch:x}),S?e(k,{}):e(P,{account:l.user,branchid:c,data2:f,data:s==""?o:w})]})]})}export{ct as default};
