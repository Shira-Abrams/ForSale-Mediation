import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import {url} from './url'
import { ExpandOutlined, Try } from '@mui/icons-material'

const initialState={
    searchings:[],
    status:'idle'
}

export const GetAllSearching=createAsyncThunk(
    'redux/GetAllSerching',
    async(thunkAPI)=>{
        try {
            const response=axios.get(`${url}SearchingProperty`)
            console.log(response);
            return (await response).data
        } catch (error) {
            console.log(error.message);
            return error.message
        }
    }
)

export const AddSearching=createAsyncThunk(
    'redux/addSearching',
    async(serching)=>
    {
       console.log('at add searching');
       console.log('the searching fo add is',serching);
       try {
        const response= await axios.post(`${url}SearchingProperty`,serching)
        console.log( response.data);
        if(response.status==200)
        return response.data
        
       } catch (error) {
        console.log('error at add searching');
        return error.message
       }
    }
)

export const SearchingSlice=createSlice(
    {
       name:'searching',
       initialState,
       reducers:{

       } ,
       extraReducers:(builder)=>{

        builder.addCase(AddSearching.fulfilled,(state,action)=>{
            state.status='fulfulled'
            state.searchings=[...state.searchings,action.payload]
        })
        builder.addCase(GetAllSearching.fulfilled,(state,action)=>{
             state.status='fulfilled'
             state.searchings=action.payload
        })
       }
    }
)
export const {} =SearchingSlice.actions
export default  SearchingSlice.reducer