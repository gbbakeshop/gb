import{r as a,q as E,u as h,t as L,v as N,j as m,a as e,F as D}from"./app-841358f4.js";import{A as _}from"./administrator-layout-32ba1782.js";import{S as k}from"./skeleton-loader-0b81c869.js";import A from"./sidebar-branches-217effad.js";import{B as F}from"./bread-crumbs-b2825b32.js";import T from"./branch-expenses-table-398ac21f.js";import b from"./branch-search-expenses-ac29689f.js";import q from"./credits-charge-table-fe5c1efd.js";import{g as y}from"./create-expenses-1329e86f.js";import{a as P}from"./credits-services-f2a43b9e.js";import R from"./sales-chart-8b3091cf.js";import z from"./domination-41084054.js";import{u as G}from"./useDispatch-d62d19bf.js";import"./squire-icon-27819e73.js";import"./store-icon-f2103ad0.js";import"./branches-services-33435438.js";import"./open-closed-ca7b03fb.js";import"./keyboard-6b473b2b.js";import"./use-resolve-button-type-1cff9754.js";import"./iconBase-f4adef3c.js";import"./show-receipts-51394130.js";import"./x-mark-icon-17e8208d.js";import"./transition-986adeed.js";import"./dialog-6430dbe0.js";import"./hidden-bf2f5385.js";import"./account-services-a49f304f.js";import"./create-charge-credit-ecde5b28.js";import"./records-services-8c083049.js";function we(H){const p=G(),[u,f]=a.useState(!0),{url:w}=E(),l=w.split("/")[2],{refresh:d}=h(t=>t.app),{expenses:o,charges:i,date:n}=h(t=>t.branchExpenses),[g,S]=a.useState([]),[x,v]=a.useState([]),[c,I]=a.useState(""),[C,J]=a.useState("");return a.useEffect(()=>{P(l,n).then(t=>{p(L(t)),f(!1)}),y(l,n).then(t=>{p(N(t))})},[d,n]),a.useEffect(()=>{const t=i==null?void 0:i.filter(r=>{var s;return(s=r==null?void 0:r.bread_name)==null?void 0:s.toLowerCase().includes(c.toLowerCase())}),B=o==null?void 0:o.filter(r=>{var s;return(s=r==null?void 0:r.name)==null?void 0:s.toLowerCase().includes(c.toLowerCase())});S(t),v(B)},[c,d]),m(_,{children:[e(A,{}),m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[e(F,{}),e("br",{}),u?e(k,{}):m(D,{children:[e(R,{}),e(b,{}),m("div",{className:"grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5",children:[e("div",{className:"col-span-2 h-auto w-auto ",children:e(q,{data:c==""?i:g})}),e("div",{className:"row-span-2 col-span-2 h-auto w-auto ",children:e(T,{data:C==""?o:x})}),e("div",{className:"row-span-3 h-auto w-auto ",children:e(z,{})})]})]})]})]})}export{we as default};