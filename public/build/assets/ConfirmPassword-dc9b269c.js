import{W as l,r as c,j as a,a as s,b as p}from"./app-6a556eca.js";import{G as u}from"./GuestLayout-5767bc71.js";import{T as f,I as w}from"./TextInput-30652619.js";import{I as h}from"./InputLabel-26c8f860.js";import{P as b}from"./PrimaryButton-b41b9d5c.js";import"./ApplicationLogo-2b870893.js";function I(){const{data:e,setData:t,post:o,processing:m,errors:i,reset:n}=l({password:""});c.useEffect(()=>()=>{n("password")},[]);const d=r=>{t(r.target.name,r.target.value)};return a(u,{children:[s(p,{title:"Confirm Password"}),s("div",{className:"mb-4 text-sm text-gray-600 dark:text-gray-400",children:"This is a secure area of the application. Please confirm your password before continuing."}),a("form",{onSubmit:r=>{r.preventDefault(),o(route("password.confirm"))},children:[a("div",{className:"mt-4",children:[s(h,{htmlFor:"password",value:"Password"}),s(f,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:d}),s(w,{message:i.password,className:"mt-2"})]}),s("div",{className:"flex items-center justify-end mt-4",children:s(b,{className:"ml-4",disabled:m,children:"Confirm"})})]})]})}export{I as default};