import{q as o,a as r,j as l,d}from"./app-f101d39f.js";function c({branchid:e}){const{url:t}=o(),a=t.split("/")[4];return r("div",{className:"text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700",children:l("ul",{className:"flex flex-wrap -mb-px",children:[r("li",{className:"mr-2",children:r(d,{href:route("branch_selecta",e),className:a==null?"inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300",children:"SELECTA"})}),r("li",{className:"mr-2",children:r(d,{href:route("branch_selecta_records",e),className:a=="records"?"inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300","aria-current":"page",children:"RECORDS"})}),r("li",{className:"mr-2",children:r(d,{href:route("branch_selecta_history",e),className:a=="history"?"inline-block p-4 text-red-600 border-b-2 border-red-600 rounded-t-lg active dark:text-red-500 dark:border-red-500":"inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300","aria-current":"page",children:"HISTORY LOGS"})})]})})}export{c as default};