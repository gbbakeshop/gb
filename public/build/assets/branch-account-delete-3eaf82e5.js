import{a as t,F as a,i as c}from"./app-7fb59a5e.js";import{T as u}from"./trash-icon-7fce7687.js";import{S as e}from"./sweetalert2.all-9737a668.js";import{d as l}from"./account-services-51e8beb1.js";import{u as f}from"./useDispatch-19790469.js";function B({id:r}){const n=f();function i(){e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&l(r).then(o=>{o.status=="success"&&(n(c()),e.fire({icon:"success",title:"Your work has been delete",showConfirmButton:!1,timer:1500}))}).catch(o=>{e.fire({icon:"error",title:"Your work has not been save!",showConfirmButton:!1,timer:1500})})})}return t(a,{children:t("button",{onClick:i,children:t(u,{})})})}export{B as default};