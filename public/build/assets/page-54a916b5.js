import{r as o,u as g,j as c,a as r}from"./app-ef09a1a0.js";import{A as w}from"./administrator-layout-66ad0b35.js";import{g as x}from"./recipes-services-811a5ca1.js";import C from"./recipes-table-f5958499.js";import{S as L}from"./skeleton-loader-8c8f6e8c.js";import _ from"./recipes-tabs-7142d9b1.js";import{S as b}from"./search-b3d3565c.js";import v from"./sidebar-controls-4fd309e4.js";import"./squire-icon-26ab316c.js";import"./useDispatch-7c2ffa76.js";import"./store-icon-7316d7ee.js";import"./branches-services-55444a51.js";import"./recipes-add-ingredients-780042d3.js";import"./ingredients-services-8f27a82b.js";import"./x-mark-icon-d16dc334.js";import"./pencil-icon-9847225a.js";import"./transition-8e4a6e29.js";import"./open-closed-3ca08ed2.js";import"./dialog-be297189.js";import"./keyboard-9cab4daa.js";import"./hidden-856ef68b.js";import"./recipes-show-ingredients-f453a3ef.js";import"./eyes-icon-73cdf1b0.js";import"./recipes-delete-ingredients-e2dc7015.js";import"./trash-icon-42c2df4b.js";import"./sweetalert2.all-fa9e0ac6.js";import"./index.esm-bb7319fd.js";import"./iconBase-7c7c9ea7.js";import"./index.esm-b11b9fec.js";import"./account-icons-9548478a.js";function ot(D){const[t,l]=o.useState([]),[n,f]=o.useState(!0),[u,d]=o.useState([]),[s,S]=o.useState(""),{refresh:h}=g(e=>e.app);return o.useEffect(()=>{x().then(e=>{console.log("hello",e),l(e),f(!1)})},[h]),o.useEffect(()=>{const e=t==null?void 0:t.map(a=>{var i;return(i=a==null?void 0:a.selected_breads)==null?void 0:i.filter(m=>{var p;return(p=m==null?void 0:m.bread_name)==null?void 0:p.toLowerCase().includes(s.toLowerCase())})});d(t.map((a,i)=>({...a,selected_breads:e[i]})))},[s,t]),c(w,{children:[r(v,{}),c("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(_,{}),r("br",{}),r(b,{search:s,setSearch:S}),n?r(L,{}):r(C,{data:s==""?t:u})]})]})}export{ot as default};
