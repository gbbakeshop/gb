import{r as o,q as S,u as c,m as B,z as w,j as n,a as t}from"./app-d4e5b7bf.js";import{A as x}from"./administrator-layout-7ab5d1df.js";import y from"./branch-history-tabs-3245a701.js";import{S as L}from"./skeleton-loader-cd91ed6a.js";import H from"./sidebar-branches-21dd9e47.js";import{B as b}from"./bread-crumbs-5cd46dbc.js";import g from"./branch-history-table-701e94b2.js";import{a as k}from"./history-services-2b7776b0.js";import v from"./branch-search-history-8bed3a9b.js";import{u as C}from"./useDispatch-869691c4.js";import"./squire-icon-b2706042.js";import"./store-icon-0d0f4826.js";import"./branches-services-103751ab.js";import"./clock-icon-c8508185.js";import"./iconBase-91368fa6.js";import"./index.esm-395df063.js";import"./open-closed-8edc26e7.js";import"./keyboard-520f8101.js";import"./use-resolve-button-type-15dc6a1a.js";function X(D){const p=C(),[f,l]=o.useState(!0),{url:u}=S();u.split("/")[2];const{refresh:i}=c(r=>r.app),{history:e}=c(r=>r.branchHistory),[h,d]=o.useState([]),[a,E]=o.useState("");return o.useEffect(()=>{k(B().format("L")).then(r=>{p(w(r)),l(!1)})},[i]),o.useEffect(()=>{const r=e==null?void 0:e.filter(s=>{var m;return(m=s==null?void 0:s.bread_name)==null?void 0:m.toLowerCase().includes(a.toLowerCase())});d(r)},[a,i]),n(x,{children:[t(H,{}),n("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t(b,{}),t(y,{}),t("br",{}),t(v,{}),f?t(L,{}):t(g,{data:a==""?e:h})]})]})}export{X as default};
