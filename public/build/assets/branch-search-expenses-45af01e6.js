import{j as n,a as e,w as c}from"./app-17fabe6c.js";import{u as i}from"./useDispatch-946d0582.js";function g(){const r=i();function t(a){const s=a.target.value.split("-")[0],d=a.target.value.split("-")[1],o=a.target.value.split("-")[2],l=d+"/"+o+"/"+s;r(c(l))}return n("div",{className:"relative max-w-sm",children:[e("div",{className:"absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none",children:e("svg",{className:"w-4 h-4 text-gray-500 dark:text-gray-400","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:e("path",{d:"M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"})})}),e("input",{onChange:t,dataDateFormat:"MMMM DD YYYY",name:"date",datepicker:!0,type:"date",className:"bg-gray-50 border py-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500",placeholder:"Select date"})]})}export{g as default};