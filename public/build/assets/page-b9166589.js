import{r as t,u as w,q as h,j as m,a as r}from"./app-5ca2c22d.js";import{a as x}from"./raw-materials-services-7699e927.js";import{A as g}from"./administrator-layout-ec883afc.js";import L from"./raw-materials-table-e7277f92.js";import{S as C}from"./skeleton-loader-50443b5f.js";import{S as _}from"./search-e576df3c.js";import b from"./sidebar-controls-1d4cf04d.js";import j from"./recipes-tabs-9eafbaae.js";import"./squire-icon-d731efa4.js";import"./useDispatch-7400a40b.js";import"./store-icon-f54f9931.js";import"./branches-services-76a4b6cd.js";import"./moment-749acb39.js";import"./raw-materials-form-5b05dc97.js";import"./x-mark-icon-ff34a183.js";import"./input-035df74b.js";import"./ingredients-services-b2058bbf.js";import"./transition-7bedf571.js";import"./open-closed-0307cadb.js";import"./dialog-3e1c936a.js";import"./keyboard-56fe7772.js";import"./hidden-9c42630f.js";import"./raw-materials-edit-3cecec10.js";import"./pencil-icon-07044cd0.js";import"./raw-materials-delete-665d7409.js";import"./trash-icon-18871787.js";import"./sweetalert2.all-16020214.js";import"./raw-materials-create-e95cb8e8.js";import"./raw-materials-add-f08fcf5f.js";import"./plus-icon-e77818ca.js";import"./account-icons-b830871e.js";import"./index.esm-30992858.js";import"./iconBase-fae5cc8e.js";function st(v){const[a,p]=t.useState([]),[l,n]=t.useState(!0),{refresh:s}=w(o=>o.app),[c,f]=t.useState([]),[e,i]=t.useState(""),{url:u}=h(),d=u.split("/")[3];return t.useEffect(()=>{const o=a.filter(S=>S.raw_materials.toLowerCase().includes(e.toLowerCase()));f(o)},[e,s]),t.useEffect(()=>{x().then(o=>{p(o),i(""),n(!1)})},[s]),m(g,{children:[r(b,{}),m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[r(j,{page:d}),r("br",{}),r(_,{search:e,setSearch:i}),l?r(C,{}):r(L,{data:e==""?a:c})]})]})}export{st as default};
