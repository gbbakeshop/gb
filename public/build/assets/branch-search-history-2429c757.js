import{j as c,a,z as i}from"./app-586d90fb.js";import{a as h}from"./history-services-2b7776b0.js";import{u as g}from"./useDispatch-c98b54d7.js";function y(){const r=g();function t(e){const s=e.target.value.split("-")[0],o=e.target.value.split("-")[1],d=e.target.value.split("-")[2],n=o+"/"+d+"/"+s;h(n).then(l=>{r(i(l))})}return c("div",{className:"relative max-w-sm",children:[a("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none",children:a("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:a("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),a("input",{onChange:t,dataDateFormat:"MMMM DD YYYY",name:"date",datepicker:!0,type:"date",className:"bg-gray-50 border py-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500",placeholder:"Select date"})]})}export{y as default};
