async function a(e){return(await axios.post("/api/create_default_record",e)).data}async function o(e,s){return(await axios.get("/api/get_branch_period/"+e+"/"+s)).data}async function t(e,s){return(await axios.post("/api/get_record_of_the_day",{branchid:e,date:s})).data}async function n(e){return(await axios.post("/api/create_new_records",e)).data}async function c(e){return(await axios.post("/api/get_records",e)).data}async function i(e){return(await axios.post("/api/move_records",e)).data}async function p(e){return(await axios.post("/api/move_sales_records",e)).data}async function _(e){return(await axios.put("/api/edit_bakers_report_records",e)).data}async function d(e){return(await axios.put("/api/edit_bread_report_records",e)).data}async function u(e){return(await axios.put("/api/edit_sales_report_records",e)).data}async function f(e){return(await axios.put("/api/record_move_another_branch",e)).data}async function w(e){return(await axios.post("/api/search_record",{date:e})).data}export{c as a,n as b,a as c,p as d,_ as e,d as f,t as g,o as h,u as i,i as m,f as r,w as s};
