import { createSlice } from '@reduxjs/toolkit'
import moment from 'moment'
export const branchExpenses = createSlice({
  name: 'branchExpenses',
  initialState: {
    expenses:[],
    charges:[],
    date:moment().format('L'),
    meridiem:moment().format("A")
  },
  reducers: {
    setCharge: (state,actions) => {
      state.charges = actions.payload
    },
    setExpenses: (state,actions) => {
      state.expenses = actions.payload
    },
    setDate: (state,actions) => {
      state.date = actions.payload
    },
    setMeridiem: (state,actions) => {
      state.meridiem = actions.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { 
    setCharge,
    setExpenses,
    setDate,
    setMeridiem,
} = branchExpenses.actions

export default branchExpenses.reducer