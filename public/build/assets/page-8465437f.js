import{r as o,q as S,u as c,m as B,z as w,j as n,a as t}from"./app-08d5fdd9.js";import{A as x}from"./administrator-layout-b2a89450.js";import y from"./branch-history-tabs-e211d1b1.js";import{S as L}from"./skeleton-loader-6937505f.js";import H from"./sidebar-branches-54d4e9f3.js";import{B as b}from"./bread-crumbs-4632d0d7.js";import g from"./branch-history-table-aeef36d6.js";import{a as k}from"./history-services-2b7776b0.js";import v from"./branch-search-history-36fc82e7.js";import{u as C}from"./useDispatch-c969bf2e.js";import"./squire-icon-36f89341.js";import"./store-icon-103ad9e1.js";import"./branches-services-9de66478.js";import"./clock-icon-82a0dbb1.js";import"./iconBase-854383f2.js";import"./index.esm-f6b76d60.js";import"./open-closed-7b339eda.js";import"./keyboard-af8c721b.js";import"./use-resolve-button-type-0cbd914c.js";function X(D){const p=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{k(B().format("L")).then(r=>{p(w(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(s=>{var m;return(m=s==null?void 0:s.bread_name)==null?void 0:m.toLowerCase().includes(a.toLowerCase())});d(r)},[a,i]),n(x,{children:[t(H,{}),n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(b,{}),t(y,{}),t("br",{}),t(v,{}),f?t(L,{}):t(g,{data:a==""?e:h})]})]})}export{X as default};
