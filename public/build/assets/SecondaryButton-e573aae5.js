import{a as e,r as n,j as c}from"./app-bc6632bd.js";import{_ as l}from"./dialog-21b5deee.js";import{t as i}from"./transition-6f84ebeb.js";function y({className:r="",disabled:a,children:t,...o}){return e("button",{...o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition ease-in-out duration-150 ${a&&"opacity-25"} `+r,disabled:a,children:t})}function x({children:r,show:a=!1,maxWidth:t="2xl",closeable:o=!0,onClose:s=()=>{}}){const d=()=>{o&&s()},m={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[t];return e(i,{show:a,as:n.Fragment,leave:"duration-200",children:c(l,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:d,children:[e(i.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e("div",{className:"absolute inset-0 bg-gray-500/75 dark:bg-gray-900/75"})}),e(i.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:e(l.Panel,{className:`mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${m}`,children:r})})]})})}function p({type:r="button",className:a="",disabled:t,children:o,...s}){return e("button",{...s,type:r,className:`inline-flex items-center px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-500 rounded-md font-semibold text-xs text-gray-700 dark:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${t&&"opacity-25"} `+a,disabled:t,children:o})}export{y as D,x as M,p as S};