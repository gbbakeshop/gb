import{r as t,u as w,q as h,j as m,a as r}from"./app-d4e5b7bf.js";import{A as x}from"./administrator-layout-7ab5d1df.js";import{a as g}from"./raw-materials-services-7d500ab0.js";import L from"./raw-materials-table-d46c3438.js";import{S as C}from"./skeleton-loader-cd91ed6a.js";import{S as _}from"./search-0a38c6f0.js";import b from"./sidebar-controls-0968a541.js";import j from"./recipes-tabs-63d90d77.js";import"./squire-icon-b2706042.js";import"./useDispatch-869691c4.js";import"./store-icon-0d0f4826.js";import"./branches-services-103751ab.js";import"./moment-147a27ee.js";import"./raw-materials-form-6e48af8e.js";import"./x-mark-icon-ad71e7bd.js";import"./input-2933d61e.js";import"./ingredients-services-8d29ec5f.js";import"./transition-9c70f095.js";import"./open-closed-8edc26e7.js";import"./dialog-848df83d.js";import"./keyboard-520f8101.js";import"./hidden-5d53ce1c.js";import"./raw-materials-edit-29baa3f2.js";import"./pencil-icon-122c83e4.js";import"./raw-materials-delete-8b5230e5.js";import"./trash-icon-f8bfc03a.js";import"./sweetalert2.all-c4f11749.js";import"./raw-materials-create-8f11e1b6.js";import"./raw-materials-add-6fca0ae2.js";import"./plus-icon-2b068d03.js";import"./account-icons-fd4b3d2c.js";import"./index.esm-395df063.js";import"./iconBase-91368fa6.js";function st(v){const[a,p]=t.useState([]),[l,n]=t.useState(!0),{refresh:s}=w(o=>o.app),[c,f]=t.useState([]),[e,i]=t.useState(""),{url:u}=h(),d=u.split("/")[3];return t.useEffect(()=>{const o=a.filter(S=>S.raw_materials.toLowerCase().includes(e.toLowerCase()));f(o)},[e,s]),t.useEffect(()=>{g().then(o=>{p(o),i(""),n(!1)})},[s]),m(x,{children:[r(b,{}),m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(j,{page:d}),r("br",{}),r(_,{search:e,setSearch:i}),l?r(C,{}):r(L,{data:e==""?a:c})]})]})}export{st as default};
