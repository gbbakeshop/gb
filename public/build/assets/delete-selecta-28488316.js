import{a as e,F as l,i as c}from"./app-08d5fdd9.js";import{T as f}from"./trash-icon-e0047594.js";import{f as u}from"./selecta-services-48840473.js";import{S as t}from"./sweetalert2.all-e1c49dde.js";import{u as m}from"./useDispatch-c969bf2e.js";function B({id:o}){const r=m();function n(i){t.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(s=>{s.isConfirmed&&u(i).then(a=>{a.status=="success"?(r(c()),t.fire({icon:"success",title:"Your work has been saved",showConfirmButton:!1,timer:1500})):t.fire({icon:"error",title:"Invalid",showConfirmButton:!1,timer:1500})})})}return e(l,{children:e("button",{onClick:()=>n(o),children:e(f,{})})})}export{B as default};