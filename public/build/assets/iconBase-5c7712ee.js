import{R as i}from"./app-586d90fb.js";var f={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=i.createContext&&i.createContext(f),l=globalThis&&globalThis.__assign||function(){return l=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},l.apply(this,arguments)},d=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(t[n[a]]=e[n[a]]);return t};function m(e){return e&&e.map(function(r,t){return i.createElement(r.tag,l({key:t},r.attr),m(r.child))})}function v(e){return function(r){return i.createElement(h,l({attr:l({},e.attr)},r),m(e.child))}}function h(e){var r=function(t){var n=e.attr,a=e.size,c=e.title,g=d(e,["attr","size","title"]),u=a||t.size||"1em",o;return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),i.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,g,{className:o,style:l(l({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&i.createElement("title",null,c),e.children)};return s!==void 0?i.createElement(s.Consumer,null,function(t){return r(t)}):r(f)}export{v as G};
