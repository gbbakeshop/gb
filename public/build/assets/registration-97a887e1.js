import{r as o,j as a,a as t,F as l}from"./app-7fb59a5e.js";import{A as f}from"./administrator-layout-80c5bc93.js";import{g as u}from"./account-services-51e8beb1.js";import"./sweetalert2.all-9737a668.js";import{S as d}from"./skeleton-loader-47b36d8d.js";import g from"./sidebar-controls-d81e9b38.js";import h from"./account-tabs-37aa1a1c.js";import S from"./register-account-form-7cb5e008.js";import"./squire-icon-86b3867b.js";import"./useDispatch-19790469.js";import"./store-icon-33da30d0.js";import"./branches-services-3c08282d.js";import"./account-icons-cd1caa6f.js";import"./database-icon-b3fd4f8c.js";import"./TextInput-5a3beb14.js";import"./InputLabel-13cd7cd9.js";import"./PrimaryButton-08aa15e6.js";import"./move-icon-12b7ccd6.js";import"./check-icon-44537fea.js";import"./transition-46023121.js";import"./open-closed-88cf6580.js";import"./keyboard-d78ca1c4.js";import"./hidden-e6878c7b.js";import"./use-resolve-button-type-a8c5fdbb.js";function O(w){const[s,i]=o.useState([]),[m,p]=o.useState(!0),[x,c]=o.useState([]),[e,L]=o.useState("");return o.useEffect(()=>{u().then(r=>{i(r),p(!1)})},[]),o.useEffect(()=>{const r=s.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()));c(r)},[e]),a(f,{children:[t(g,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(h,{})}),t("br",{}),m?t(d,{}):t(l,{children:t(S,{})})]})]})}export{O as default};