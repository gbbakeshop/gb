import{r as t,u as S,q as w,j as m,a as o}from"./app-5d5d4b45.js";import{a as h}from"./raw-materials-services-2eb90c3f.js";import{A as x}from"./administrator-layout-d3f7380e.js";import L from"./raw-materials-table-470105a0.js";import{S as g}from"./skeleton-loader-193ae5b2.js";import{S as C}from"./search-eef54f62.js";import _ from"./sidebar-controls-5e74d62d.js";import"./squire-icon-1a44855d.js";import"./useDispatch-0c99af86.js";import"./store-icon-04c90c0e.js";import"./branches-services-1c17307a.js";import"./moment-fc772d1c.js";import"./raw-materials-form-e8965d0f.js";import"./x-mark-icon-fbf8a4fc.js";import"./input-0b839463.js";import"./ingredients-services-72ce9016.js";import"./transition-06a2aedf.js";import"./open-closed-45ab1d93.js";import"./dialog-da79ec4a.js";import"./keyboard-764791f2.js";import"./hidden-82969696.js";import"./raw-materials-edit-33b5f9cc.js";import"./pencil-icon-072e5607.js";import"./raw-materials-delete-6ce003ea.js";import"./trash-icon-6c6a8ea5.js";import"./sweetalert2.all-2aef531b.js";import"./raw-materials-create-ab3e5c9b.js";import"./raw-materials-add-0ee8d167.js";import"./plus-icon-c319a032.js";import"./account-icons-efad2578.js";function tt(j){const[e,p]=t.useState([]),[l,n]=t.useState(!0),{refresh:s}=S(r=>r.app),[c,f]=t.useState([]),[a,i]=t.useState(""),{url:u}=w();return u.split("/")[3],t.useEffect(()=>{const r=e.filter(d=>d.raw_materials.toLowerCase().includes(a.toLowerCase()));f(r)},[s]),t.useEffect(()=>{h().then(r=>{p(r),i(""),n(!1)})},[s,e]),m(x,{children:[o(_,{}),m("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[o("br",{}),o(C,{search:a,setSearch:i}),l?o(g,{}):o(L,{data:a==""?e:c})]})]})}export{tt as default};
