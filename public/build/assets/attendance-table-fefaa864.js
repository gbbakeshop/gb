import{r as x,m as n,a as t,F as l,j as s}from"./app-586d90fb.js";import{C as i}from"./calendar-icon-d3c1efb6.js";import{C as r}from"./check-icon-084a58a9.js";import{E as c}from"./exclamation-icon-f35a24e0.js";import{L as o}from"./loading-icon-612b0a3e.js";import{g as O,c as D}from"./attendance-services-366c84e4.js";import{S as A}from"./sweetalert2.all-0e27aa49.js";function P({userid:L,branchid:u}){const[p,_]=x.useState([]),[v,N]=x.useState(0),[a,f]=x.useState(!1);function w(e,m){const k=new Date(e,m+1,0).getDate(),y=[];for(let h=1;h<=k;h++){const M=new Date(e,m,h);y.push({date:M,dayOfMonth:h})}return y}const b=new Date,C=b.getFullYear(),I=b.getMonth(),g=w(C,I);console.log(g),x.useEffect(()=>{O({data:g,userid:L,branchid:u,date2:n().format("M Y")}).then(e=>{_(e)})},[v]);function d(e,m){f(!0),D({id:e,userid:L,branchid:u,updateWhere:m,date:n().format(),dateNow:n().format("L")}).then(T=>{N(Math.random()),A.fire({position:"top-end",icon:"success",title:"Attendance Checked",showConfirmButton:!1,timer:1500}),f(!1)})}return t(l,{children:t("div",{class:"relative shadow-md sm:rounded-lg mt-5",children:s("table",{class:"w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400",children:[t("thead",{class:"text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400",children:s("tr",{children:[t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2 ",children:"AM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"PM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"AM"}),t("th",{colspan:"2",class:"px-6 py-3 text-center border-x-2",children:"PM"}),t("th",{class:"px-6 py-3 text-center",children:"TOTAL HOURS"}),t("th",{class:"px-6 py-3 text-center",children:"DATE"})]})}),s("tbody",{children:[s("tr",{class:"bg-white border-b ",children:[t("td",{class:"px-6 py-4 text-center",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"Out"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"IN"}),t("td",{class:"px-6 py-4 text-center border-r-2",children:"OUT"}),t("td",{class:"px-6 py-4 text-center border-r-2"}),t("td",{class:"px-6 py-4 text-center border-r-2"})]}),p==null?void 0:p.map((e,m)=>s("tr",{class:"bg-white border-b ",children:[t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_in!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_in==null?t("button",{onClick:()=>d(e.id,"am_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time In"}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_out!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am_out==null?t(l,{children:e.am_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"am_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time Out"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_in!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_in==null?t(l,{children:e.am_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"pm_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time In"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_out!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm_out==null?t(l,{children:e.pm_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"pm_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time Out"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am2_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_in!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_in==null?t(l,{children:e.pm_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"am2_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time In"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.am2_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_out!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.am2_out==null?t(l,{children:e.am2_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"am2_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time Out"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm2_in==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_in!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_in==null?t(l,{children:e.am2_out==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"pm2_in"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time In"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{class:"px-6 py-4 text-center border-r-2",children:t("center",{children:n(e.date3).format("LL")!==n().format("LL")&&e.pm2_out==null?t("div",{className:"text-red-500",children:t(c,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_out!==null?t("div",{className:"text-green-500",children:t(r,{})}):n(e.date3).format("LL")==n().format("LL")&&e.pm2_out==null?t(l,{children:e.pm2_in==null?t("div",{className:"text-orange-500",children:t(i,{})}):t("button",{onClick:()=>d(e.id,"pm2_out"),class:"bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-md",children:a?t(o,{}):" Time Out"})}):t("div",{className:"text-green-500",children:t(r,{})})})}),t("td",{className:"px-6 py-4 text-center border-r-2",children:e.total}),t("td",{class:"px-6 py-4 text-center",children:n(e.date3).format("LL")})]}))]})]})})})}export{P as default};
