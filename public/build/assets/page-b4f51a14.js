import{r as o,q as S,u as c,m as B,z as w,j as n,a as t}from"./app-2b2dd7b8.js";import{A as x}from"./administrator-layout-9c4dcc5b.js";import y from"./branch-history-tabs-8658f74f.js";import{S as L}from"./skeleton-loader-b9bb7611.js";import H from"./sidebar-branches-0ccea373.js";import{B as b}from"./bread-crumbs-8eebd306.js";import g from"./branch-history-table-44038f76.js";import{a as k}from"./history-services-2b7776b0.js";import v from"./branch-search-history-82840629.js";import{u as C}from"./useDispatch-b2dba95a.js";import"./squire-icon-8920d878.js";import"./store-icon-8685bff3.js";import"./branches-services-701ec3b7.js";import"./clock-icon-5e975338.js";import"./iconBase-f989216d.js";import"./index.esm-cca27195.js";import"./open-closed-d4a585f0.js";import"./keyboard-fa2556d0.js";import"./use-resolve-button-type-c4a04515.js";function X(D){const p=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{k(B().format("L")).then(r=>{p(w(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(s=>{var m;return(m=s==null?void 0:s.bread_name)==null?void 0:m.toLowerCase().includes(a.toLowerCase())});d(r)},[a,i]),n(x,{children:[t(H,{}),n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(b,{}),t(y,{}),t("br",{}),t(v,{}),f?t(L,{}):t(g,{data:a==""?e:h})]})]})}export{X as default};
