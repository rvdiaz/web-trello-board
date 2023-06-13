import { createSlice } from "@reduxjs/toolkit";

const listSlices=createSlice({
    name:'list',
    initialState:{
        list:['test']
    },
    reducers:{
        getList:(state)=>{
            return state.list
        }
    }
})

export const {getList} =listSlices.actions;

export default listSlices.reducer;