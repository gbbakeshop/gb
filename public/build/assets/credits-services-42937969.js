import{l as t}from"./app-b6df9fca.js";async function i(e){return(await t.get("/api/get_account_credits_charge/"+e)).data.status}async function o(e,a,s,r){return(await t.post("/api/get_all_credits_charge",{date:a,branchid:e,meridiem:s,userid:r})).data.status}async function _(e){return(await t.post("/api/create_charge_credit",e)).data}export{o as a,_ as c,i as g};
