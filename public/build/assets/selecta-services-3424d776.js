import{k as a}from"./app-586d90fb.js";async function n(e){return(await a.post("/api/get_branch_selecta_history",e)).data.status}async function c(e){return(await a.post("/api/update_selecta_quantity_record",e)).data}async function r(e){return(await a.post("/api/update_selecta_quantity",e)).data}async function o(e){return(await a.post("/api/update_selecta_remaining",e)).data}async function p(e){return(await a.post("/api/update_selecta",e)).data}async function i(e){return(await a.delete("/api/delete_selecta/"+e)).data}async function _(e){return(await a.post("/api/create_selecta",e)).data}async function u(){return(await a.get("/api/get_all_selecta")).data.status}async function l(e){return(await a.get("/api/get_branch_selecta/"+e)).data.status}async function d(e){return(await a.post("/api/get_branch_selecta_records",e)).data.status}export{r as a,n as b,d as c,c as d,_ as e,i as f,l as g,p as h,u as i,o as u};
