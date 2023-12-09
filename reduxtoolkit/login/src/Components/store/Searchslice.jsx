import { createSlice } from "@reduxjs/toolkit";
const initialState={
    inputQuery:''
};
const Searchslice=createSlice({
  name:'searchQuery',
  initialState, 
  reducers:{
    setInputQuery:(state,action)=>{
state.inputQuery=action.payload;
    },
  },
});
export const {setInputQuery}=Searchslice.actions;
export default Searchslice.reducer;