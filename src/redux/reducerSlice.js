import { createSlice } from "@reduxjs/toolkit";
const reducerSlice =createSlice({
    name:'cart',
    initialState:[],
    reducer:{
        add(state,action){
          state.push(action.payload)
        },
        remove(state,action){
            state = state.filter((item)=> item.id == action.payload)
        }
    }
})

export const {add, remove } = reducerSlice.actions;

export default reducerSlice.reducer;