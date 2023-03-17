import { createSlice } from "@reduxjs/toolkit";

 const listSlice = createSlice({
    name : "list-cart",
    initialState :{
       value : []
    },
    reducers : {
        addToList(state,action){
          state.value = [...state.value,action.payload]
        }
    }
 })

 export const {addToList} = listSlice.actions;

 export default listSlice.reducer; 