import{r as o,q as S,u as c,m as B,z as w,j as n,a as t}from"./app-fc9452ec.js";import{A as x}from"./administrator-layout-b1b91844.js";import y from"./branch-history-tabs-04a0feba.js";import{S as L}from"./skeleton-loader-93a93307.js";import H from"./sidebar-branches-4488c20a.js";import{B as b}from"./bread-crumbs-0d9221cc.js";import g from"./branch-history-table-b77f9b3c.js";import{a as k}from"./history-services-2b7776b0.js";import v from"./branch-search-history-8f4fa50d.js";import{u as C}from"./useDispatch-6304ffde.js";import"./squire-icon-29c0155f.js";import"./store-icon-ce9eae4c.js";import"./branches-services-06a9e6d8.js";import"./clock-icon-629587ba.js";import"./iconBase-0f8b1903.js";import"./index.esm-32bf74ff.js";import"./open-closed-99cca602.js";import"./keyboard-a6f31502.js";import"./use-resolve-button-type-61ccdd32.js";function X(D){const p=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{k(B().format("L")).then(r=>{p(w(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(s=>{var m;return(m=s==null?void 0:s.bread_name)==null?void 0:m.toLowerCase().includes(a.toLowerCase())});d(r)},[a,i]),n(x,{children:[t(H,{}),n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(b,{}),t(y,{}),t("br",{}),t(v,{}),f?t(L,{}):t(g,{data:a==""?e:h})]})]})}export{X as default};
