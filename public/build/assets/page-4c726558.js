import{r,q as L,u as C,j as p,a as e}from"./app-d4e5b7bf.js";import{A as D}from"./administrator-layout-7ab5d1df.js";import P from"./bread-table-8d84c46e.js";import{g as v}from"./recipes-services-220d574b.js";import E from"./branch-bakers-production-tabs-35783654.js";import{S as k}from"./skeleton-loader-cd91ed6a.js";import{g as A}from"./raw-materials-services-7d500ab0.js";import{S as N}from"./search-0a38c6f0.js";import T from"./sidebar-branches-21dd9e47.js";import{B as q}from"./bread-crumbs-5cd46dbc.js";import"./squire-icon-b2706042.js";import"./useDispatch-869691c4.js";import"./store-icon-0d0f4826.js";import"./branches-services-103751ab.js";import"./create-production-form-904917f5.js";import"./x-mark-icon-ad71e7bd.js";import"./plus-icon-2b068d03.js";import"./ingredients-services-8d29ec5f.js";import"./records-services-8c083049.js";import"./transition-9c70f095.js";import"./open-closed-8edc26e7.js";import"./dialog-848df83d.js";import"./keyboard-520f8101.js";import"./hidden-5d53ce1c.js";import"./clock-icon-c8508185.js";import"./iconBase-91368fa6.js";import"./index.esm-395df063.js";import"./use-resolve-button-type-15dc6a1a.js";function ct(u){const{auth:l}=u,[o,d]=r.useState([]),[f,h]=r.useState([]),[S,B]=r.useState(!0),{url:_}=L(),c=_.split("/")[2],{refresh:g}=C(t=>t.app),[w,b]=r.useState([]),[s,x]=r.useState("");return r.useEffect(()=>{v().then(t=>{d(t),B(!1)}),A(c).then(t=>{h(t)})},[g]),r.useEffect(()=>{const t=o==null?void 0:o.map(a=>{var m;return(m=a==null?void 0:a.selected_breads)==null?void 0:m.filter(i=>{var n;return(n=i==null?void 0:i.bread_name)==null?void 0:n.toLowerCase().includes(s.toLowerCase())})});b(o.map((a,m)=>({...a,selected_breads:t[m]})))},[s,o]),p(D,{children:[e(T,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(q,{}),e(E,{}),e("br",{}),e(N,{search:s,setSearch:x}),S?e(k,{}):e(P,{account:l.user,branchid:c,data2:f,data:s==""?o:w})]})]})}export{ct as default};
