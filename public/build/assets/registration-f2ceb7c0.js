import{r as o,j as a,a as t,F as l}from"./app-f101d39f.js";import{A as f}from"./administrator-layout-54b73559.js";import{g as u}from"./account-services-641765f7.js";import"./sweetalert2.all-e239fd5e.js";import{S as d}from"./skeleton-loader-6a7e536a.js";import g from"./sidebar-controls-bc6d9cba.js";import h from"./account-tabs-ccf44995.js";import S from"./register-account-form-3be40595.js";import"./squire-icon-56201442.js";import"./useDispatch-503ed058.js";import"./store-icon-7b2fb89c.js";import"./branches-services-0ff0a163.js";import"./account-icons-178b7ac5.js";import"./database-icon-2f2f30a2.js";import"./TextInput-ba066b49.js";import"./InputLabel-d7b9f2bb.js";import"./PrimaryButton-cf41a97e.js";import"./move-icon-07deadf1.js";import"./check-icon-1deb2cce.js";import"./transition-3d1135dd.js";import"./open-closed-70067b4f.js";import"./keyboard-a96c9ef8.js";import"./hidden-86be31c3.js";import"./use-resolve-button-type-a405b0cf.js";function O(w){const[s,i]=o.useState([]),[m,p]=o.useState(!0),[x,c]=o.useState([]),[e,L]=o.useState("");return o.useEffect(()=>{u().then(r=>{i(r),p(!1)})},[]),o.useEffect(()=>{const r=s.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()));c(r)},[e]),a(f,{children:[t(g,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(h,{})}),t("br",{}),m?t(d,{}):t(l,{children:t(S,{})})]})]})}export{O as default};
