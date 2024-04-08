import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './url'
import { wait } from '@testing-library/user-event/dist/utils'
import { useState } from 'react'
import { ResetTvRounded } from '@mui/icons-material'

const initialState={
    users:[],
    status:'idle'
}


export const AddUser=createAsyncThunk(
    'users/addUser',
    async(user)=>{
        console.log('add user fetch');
        console.log(user);
        try {
            const response=await axios.post("https://localhost:7076/api/User",user)
           
            console.log('at addUser the user was added',response.data);
            if(response.status===200)
            return response.data
        } catch (error) {
            console.log('error in add user',error.message);
            return error.message
        }
        
    }
)
    

   
     
   


    
  export const GetAllUser=createAsyncThunk(
    'redux/GetAllUser',
    async(thunkAPI)=>{
        console.log('get fetch user');
        try {
            const response= await  axios.get("https://localhost:7076/api/User")
             console.log("redux user data",response.data);     
            return response.data;


        } catch (error) {
            console.log(error.message);
            return error.message
        }
        
    }
  )




export const UserSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        
    },
    extraReducers:(builder)=>{ 

        builder.addCase(AddUser.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.users.push(action.payload)

        })
       builder.addCase(GetAllUser.fulfilled,(state,action)=>{
          state.status='fulfilled'
          state.users=action.payload
       })
    }
})

export const {}=UserSlice.actions
export default  UserSlice.reducer 