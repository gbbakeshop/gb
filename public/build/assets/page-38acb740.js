import{r as o,q as S,u as c,m as B,z as w,j as n,a as t}from"./app-c469e3d3.js";import{A as x}from"./administrator-layout-d307fe66.js";import y from"./branch-history-tabs-d3dc08fb.js";import{S as L}from"./skeleton-loader-0a429f79.js";import H from"./sidebar-branches-4eac1573.js";import{B as b}from"./bread-crumbs-d662e9bc.js";import g from"./branch-history-table-72d3e66b.js";import{a as k}from"./history-services-2b7776b0.js";import v from"./branch-search-history-c14af270.js";import{u as C}from"./useDispatch-9b73aee7.js";import"./squire-icon-f57118da.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./clock-icon-458fa36e.js";import"./iconBase-dd8be0d8.js";import"./index.esm-c7f3fc66.js";import"./open-closed-ddf98b25.js";import"./keyboard-5e188c8f.js";import"./use-resolve-button-type-0a5aa6bc.js";function X(D){const p=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{k(B().format("L")).then(r=>{p(w(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(s=>{var m;return(m=s==null?void 0:s.bread_name)==null?void 0:m.toLowerCase().includes(a.toLowerCase())});d(r)},[a,i]),n(x,{children:[t(H,{}),n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(b,{}),t(y,{}),t("br",{}),t(v,{}),f?t(L,{}):t(g,{data:a==""?e:h})]})]})}export{X as default};