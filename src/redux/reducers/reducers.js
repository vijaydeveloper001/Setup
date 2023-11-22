import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: object
}

const initialState: CounterState = {
  value: {
    data:[{title:'Hello Worlds',id:0}],
    index:''
  },
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addtodo:(state,action)=>{
        state.value.data = action.payload
    },
    updatetodo:(state,action) =>{
        state.value.index = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addtodo,updatetodo } = counterSlice.actions

export default counterSlice.reducer