import{r as l,W as c,h as u,a as e,j as s,d as g}from"./app-7fb59a5e.js";import{I as i}from"./TextInput-5a3beb14.js";function N({status:h,canResetPassword:f}){l.useState(!1);const{data:p,setData:o,post:m,processing:d,errors:a,reset:n}=c({email:"",password:"",remember:"",date:u().format("L")});l.useEffect(()=>()=>{n("password")},[]),console.log("errors",a);const r=t=>{o(t.target.name,t.target.type==="checkbox"?t.target.checked:t.target.value)};return e("div",{className:"bg-white",children:s("div",{className:"relative isolate px-6 lg:px-8",children:[e("div",{className:"absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl","aria-hidden":"true",children:e("div",{className:"relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]",style:{clipPath:"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}})}),s("div",{className:"flex min-h-full flex-col justify-center px-6 py-12 lg:px-8",children:[s("div",{className:"sm:mx-auto sm:w-full sm:max-w-sm",children:[e("img",{className:"mx-auto h-10 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=red&shade=600",alt:"Your Company"}),e("h2",{className:"mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900",children:"Sign in to your account"})]}),s("div",{className:"mt-10 sm:mx-auto sm:w-full sm:max-w-sm",children:[s("form",{onSubmit:t=>{t.preventDefault(),m(route("login"))},children:[s("div",{children:[e("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 text-gray-900",children:"Email address"}),s("div",{className:"mt-2",children:[e("input",{onChange:r,id:"email",name:"email",type:"email",autoComplete:"email",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"}),e(i,{message:a.email,className:"mt-2"})]})]}),s("div",{children:[s("div",{className:"flex items-center justify-between",children:[e("label",{htmlFor:"password",className:"block text-sm font-medium leading-6 text-gray-900",children:"Password"}),e("div",{className:"text-sm",children:e(g,{href:route("password.request"),className:"font-semibold text-red-600 hover:text-red-500",children:"Forgot password?"})})]}),s("div",{className:"mt-2",children:[e("input",{onChange:r,id:"password",name:"password",type:"password",autoComplete:"current-password",required:!0,className:"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"}),e(i,{message:a.password,className:"mt-2"})]})]}),e("br",{}),e("div",{children:e("button",{disabled:d,type:"submit",className:"flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600",children:"Sign in"})})]}),e("p",{className:"mt-10 text-center text-sm text-gray-500",children:e("a",{href:"#",className:"font-semibold leading-6 text-red-600 hover:text-red-500",children:"GB BAKESHOP INVENTORY MANAGEMENT"})})]})]})]})})}export{N as default};
