import{r,q as L,u as C,j as p,a as e}from"./app-6a556eca.js";import{A as D}from"./administrator-layout-0e3e0f86.js";import P from"./bread-table-8520ba2d.js";import{g as v}from"./recipes-services-14348721.js";import E from"./branch-bakers-production-tabs-0d22a49d.js";import{S as k}from"./skeleton-loader-e1bfafe6.js";import{g as A}from"./raw-materials-services-f756168b.js";import{S as N}from"./search-9e32b151.js";import T from"./sidebar-branches-c8613aad.js";import{B as q}from"./bread-crumbs-19da06f6.js";import"./squire-icon-0d73afe5.js";import"./useDispatch-c038fac8.js";import"./store-icon-525bb67d.js";import"./branches-services-ab741d85.js";import"./create-production-form-46aaf9be.js";import"./x-mark-icon-3f5f36c0.js";import"./plus-icon-dc174dbe.js";import"./ingredients-services-8b71578f.js";import"./records-services-8c083049.js";import"./transition-7ef188d1.js";import"./open-closed-cdb87e80.js";import"./dialog-9d8839d5.js";import"./keyboard-f966a89e.js";import"./hidden-11b9d246.js";import"./clock-icon-a40f6918.js";import"./iconBase-0773d4d8.js";import"./index.esm-cc929866.js";import"./use-resolve-button-type-73b6d5de.js";function ct(u){const{auth:l}=u,[o,d]=r.useState([]),[f,h]=r.useState([]),[S,B]=r.useState(!0),{url:_}=L(),c=_.split("/")[2],{refresh:g}=C(t=>t.app),[w,b]=r.useState([]),[s,x]=r.useState("");return r.useEffect(()=>{v().then(t=>{d(t),B(!1)}),A(c).then(t=>{h(t)})},[g]),r.useEffect(()=>{const t=o==null?void 0:o.map(a=>{var m;return(m=a==null?void 0:a.selected_breads)==null?void 0:m.filter(i=>{var n;return(n=i==null?void 0:i.bread_name)==null?void 0:n.toLowerCase().includes(s.toLowerCase())})});b(o.map((a,m)=>({...a,selected_breads:t[m]})))},[s,o]),p(D,{children:[e(T,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(q,{}),e(E,{}),e("br",{}),e(N,{search:s,setSearch:x}),S?e(k,{}):e(P,{account:l.user,branchid:c,data2:f,data:s==""?o:w})]})]})}export{ct as default};
