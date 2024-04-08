import { createSlice } from "@reduxjs/toolkit";
const initialState={
    property:{}
}
export const SinglePropertySlice=createSlice({
    name:'property',
    initialState,
    reducers:{
        setProperty:(state,action)=>
        {
            state.property=action.payload
        }
    }
})
export const {setProperty}=SinglePropertySlice.actions;
export default  SinglePropertySlice.reducer