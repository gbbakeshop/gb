import{r as o,j as a,a as t,F as l}from"./app-17fabe6c.js";import{A as f}from"./administrator-layout-190befc9.js";import{g as u}from"./account-services-4fa7e09c.js";import"./sweetalert2.all-bca58354.js";import{S as d}from"./skeleton-loader-7580b150.js";import g from"./sidebar-controls-b8ec7df1.js";import h from"./account-tabs-c59bffc9.js";import S from"./register-account-form-63ab2f23.js";import"./squire-icon-6d5a8750.js";import"./useDispatch-946d0582.js";import"./store-icon-15f7675b.js";import"./branches-services-bd94703a.js";import"./account-icons-5827fd52.js";import"./list-icon-0bad0adf.js";import"./database-icon-e713a6fe.js";import"./TextInput-daad75aa.js";import"./InputLabel-164b7aea.js";import"./PrimaryButton-128ef6c0.js";import"./move-icon-a9049189.js";import"./check-icon-2015e2b3.js";import"./transition-e0881b81.js";import"./open-closed-969ad825.js";import"./keyboard-adbd37b7.js";import"./hidden-0579742e.js";import"./use-resolve-button-type-84fc6829.js";function Q(w){const[s,i]=o.useState([]),[m,p]=o.useState(!0),[x,c]=o.useState([]),[e,L]=o.useState("");return o.useEffect(()=>{u().then(r=>{i(r),p(!1)})},[]),o.useEffect(()=>{const r=s.filter(n=>n.name.toLowerCase().includes(e.toLowerCase()));c(r)},[e]),a(f,{children:[t(g,{}),a("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:[t("div",{className:"mb-7",children:t(h,{})}),t("br",{}),m?t(d,{}):t(l,{children:t(S,{})})]})]})}export{Q as default};
