import{k as s}from"./app-a4610531.js";async function r(){return(await s.get("/api/get_all_recipes")).data.status}async function n(e){return(await s.post("/api/create_recipes",e)).data}async function c(e){return(await s.delete("/api/delete_recipes/"+e)).data}export{n as c,c as d,r as g};