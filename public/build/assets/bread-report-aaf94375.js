import{r as t,u as S,q as B,j as L,a as e}from"./app-c469e3d3.js";import{B as g}from"./branch-layout-3c39fda9.js";import w from"./branch-bread-report-table-1c87e112.js";import{a as x}from"./records-services-66a159ca.js";import C from"./production-tabs-518bcdc6.js";import{S as j}from"./skeleton-loader-0a429f79.js";import{S as D}from"./search-3dc11d03.js";import"./squire-icon-f57118da.js";import"./useDispatch-9b73aee7.js";import"./store-icon-5a9ff54f.js";import"./branches-services-54618143.js";import"./database-icon-c6cf3fdf.js";import"./calendar-icon-e76276d5.js";import"./moment-06cf66e1.js";import"./move-to-sales-report-form-81dd553b.js";import"./x-mark-icon-83a4bcc4.js";import"./input-003dd785.js";import"./move-icon-3a3956a3.js";import"./exclamation-icon-e7ac0547.js";import"./transition-2f3c84ee.js";import"./open-closed-ddf98b25.js";import"./dialog-2ec0fd06.js";import"./keyboard-5e188c8f.js";import"./hidden-2b2e51c7.js";import"./branch-bread-report-edit-af738e7c.js";import"./pencil-icon-0a43fae8.js";import"./create-default-record-dcec3b98.js";import"./breads-services-65f205dc.js";import"./trash-icon-aab5b5e8.js";import"./loading-icon-723c98a9.js";import"./clock-icon-458fa36e.js";import"./iconBase-dd8be0d8.js";import"./index.esm-c7f3fc66.js";function st(m){const[s,n]=t.useState([]),{auth:r}=m,[c,u]=t.useState(!0),{refresh:d}=S(o=>o.app),[f,h]=t.useState([]),[a,l]=t.useState(""),{url:i}=B(),p=i.split("/")[2]==="bread-report"?r.user.branchid:i.split("/")[2];return t.useEffect(()=>{x({branchid:p,params:"bread"}).then(o=>{n(o.status),u(!1)})},[d]),t.useEffect(()=>{const o=s.filter(b=>b.bread_name.toLowerCase().includes(a.toLowerCase()));h(o)},[a]),L(g,{position:r.user.position,branchid:r.user.branchid,children:[e(C,{position:r.user.position}),e("br",{}),e(D,{search:a,setSearch:l}),c?e(j,{}):e(w,{branchid:p,account:r.user,data:a==""?s:f})]})}export{st as default};