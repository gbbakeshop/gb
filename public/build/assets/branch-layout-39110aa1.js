import{j as o,a as r,q as c,r as g,s as u,d as t,u as h}from"./app-a4610531.js";import{S as b,a as p,L as m,T as y}from"./squire-icon-6fcda0ed.js";import{S as x}from"./store-icon-5ba739b8.js";import{g as k}from"./branches-services-2e46feeb.js";import{D as f}from"./database-icon-5c05cb9e.js";import{C as v}from"./calendar-icon-14b24c3e.js";import{u as w}from"./useDispatch-669033fe.js";function N(){return o("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:[r("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"}),r("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"})]})}function _(){return r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:r("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"})})}function L({position:a,branchid:d}){const n=w(),{url:s}=c(),e=s.split("/")[2];s.split("/")[3],g.useEffect(()=>{k().then(i=>{n(u(i))})},[]);const l=a=="Chief Baker"||a=="Baker"||a=="Lamasador"||a=="Hornero"?route("b_bread_production"):a=="Sales Lady"||a=="Cashier"||a=="Supervisor"?route("b_bakers_report"):route("b_bread_production");return o("div",{className:"flex  border-r flex-col items-center w-16 h-screen py-8 space-y-8 dark:bg-gray-900 dark:border-gray-700",children:[r(t,{href:route("b_dashboard"),className:`${e=="dashboard"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(x,{})}),a=="Supervisor"||a=="Cashier"||a=="admin"?r(t,{href:route("b_expenses"),className:`${e=="expenses"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r("div",{className:"relative",children:r(N,{})})}):null,r(t,{href:route("b_raw_materials"),className:`${e=="raw-materials"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(b,{})}),r(t,{href:l,className:`${e=="bakers-production"||e=="bakers-report"||e=="bread-report"||e=="sales-report"||e=="bread-production"||e=="history"||e=="accounts"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(f,{})}),r(t,{href:route("b_selecta"),className:`${e=="selecta"||e=="selecta_records"||e=="selecta_history"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(_,{})}),r(t,{href:route("b_settings"),className:`${e=="settings"||e=="credits"||e=="logs"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(p,{})}),a=="Supervisor"&&r(t,{href:route("b_branch_attendance"),className:`${e=="branch_attendance"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(v,{})}),r(t,{method:"post",href:route("logout"),className:`${e=="logout"?"p-1.5 text-red-500 transition-colors duration-200 bg-red-100 rounded-lg dark:text-red-400 dark:bg-gray-800":"p-1.5 text-gray-500 focus:outline-nones transition-colors duration-200 rounded-lg dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"} `,children:r(m,{})})]})}function z({children:a,position:d,branchid:n}){const{setResponse:s}=h(e=>e.app);return r("div",{className:"bg-white",children:o("div",{className:"relative isolate",children:[r("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true",children:r("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),o("aside",{className:"flex",children:[o("div",{children:[r(L,{branchid:n,position:d}),r(y,{response:s})]}),r("div",{className:"flex flex-col w-full p-4 overflow-auto h-screen",children:a})]})]})})}export{z as B};
