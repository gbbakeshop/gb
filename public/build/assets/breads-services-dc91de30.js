import{k as e}from"./app-17fabe6c.js";async function r(){return(await e.get("/api/get_all_breads")).data.status}async function n(a){return(await e.post("/api/create_breads",{data:a})).data}async function o(a){return(await e.delete("/api/delete_breads/"+a)).data}async function d(a){return(await e.put("/api/update_breads",{data:a})).data}export{n as c,o as d,r as g,d as u};