
export async function create_expenses(data) {
    const response = await axios.post('/api/create_expenses',data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
    return response.data;
}

export async function get_branch_expenses(id,date,meridiem,userid) {
  const response = await axios.post('/api/get_branch_expenses',{
    date:date,
    id:id,
    meridiem:meridiem,
    userid:userid
})
  return response.data.status;
}