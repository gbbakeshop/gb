import{r,q as L,u as C,j as p,a as e}from"./app-5900872d.js";import{A as D}from"./administrator-layout-c9cd033b.js";import P from"./bread-table-e5d7aa08.js";import{g as v}from"./recipes-services-37830277.js";import E from"./branch-bakers-production-tabs-87632722.js";import{S as k}from"./skeleton-loader-85108e85.js";import{g as A}from"./raw-materials-services-05b554af.js";import{S as N}from"./search-793c1310.js";import T from"./sidebar-branches-3dd1a39a.js";import{B as q}from"./bread-crumbs-d94c3f8e.js";import"./squire-icon-badb1f6c.js";import"./useDispatch-15c9b9b4.js";import"./store-icon-c1f4360f.js";import"./branches-services-fe7e1245.js";import"./create-production-form-ed0b1f59.js";import"./x-mark-icon-c2db9d9f.js";import"./plus-icon-25e620de.js";import"./ingredients-services-c9d935e5.js";import"./records-services-8c083049.js";import"./transition-17b6df8c.js";import"./open-closed-efc52a04.js";import"./dialog-75a36335.js";import"./keyboard-743c1f9c.js";import"./hidden-130a8b57.js";import"./clock-icon-80172c37.js";import"./iconBase-5f07f12e.js";import"./index.esm-d6f5d9a3.js";import"./use-resolve-button-type-93a57146.js";function ct(u){const{auth:l}=u,[o,d]=r.useState([]),[f,h]=r.useState([]),[S,B]=r.useState(!0),{url:_}=L(),c=_.split("/")[2],{refresh:g}=C(t=>t.app),[w,b]=r.useState([]),[s,x]=r.useState("");return r.useEffect(()=>{v().then(t=>{d(t),B(!1)}),A(c).then(t=>{h(t)})},[g]),r.useEffect(()=>{const t=o==null?void 0:o.map(a=>{var m;return(m=a==null?void 0:a.selected_breads)==null?void 0:m.filter(i=>{var n;return(n=i==null?void 0:i.bread_name)==null?void 0:n.toLowerCase().includes(s.toLowerCase())})});b(o.map((a,m)=>({...a,selected_breads:t[m]})))},[s,o]),p(D,{children:[e(T,{}),p("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(q,{}),e(E,{}),e("br",{}),e(N,{search:s,setSearch:x}),S?e(k,{}):e(P,{account:l.user,branchid:c,data2:f,data:s==""?o:w})]})]})}export{ct as default};
