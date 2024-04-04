import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { url } from './url'
const initialState={
    searchingProperty:[],
    status:'idle'
}

export const DeleteSearchingProperty=createAsyncThunk(
    'redux/DeleteSearchingProperty',
    async(propId)=>{
        console.log(url);

          console.log('at DeleteSearchingProperty redux slice ');
          console.log('delete now prop id :',propId);
          try {
            const response=await axios.delete(`${url}SearchingProperty/${propId}`)
            console.log(response.status);
            if(response.status===200)
            return response.status
            
          } catch (error) {
            console.log('error accur in deleting prop id :',propId);
            return error.message;
            
          }

          

    }
    

)
export const AddSearchingProperty=createAsyncThunk(
    'redux/AddSearchingProperty',
    async(SearchingProperty)=>{
        console.log(url);

        console.log('add searching property fetch');
        console.log(SearchingProperty);
        try {
          const response=await axios.post(`${url}SearchingProperty`,SearchingProperty)
          console.log(response.data);
          if(response.status==200)
          { 
             console.log(response.status);
              return response.data;
          }
         
        } catch (error) {
          console.log('error in add searching property',error.message);
          return error.message;
          
        }  
     }
)
export const GetAllSearchingProperty=createAsyncThunk(
    'redux/GetAllProperty',
    async(thunkAPI)=>{
        console.log(url);
        try {
           const response=await axios.get(`${url}SearchingProperty`);
           console.log(response.data);
           return response.data;
        } catch (error) {
            console.log(error.message);
            return error.message;
        }
    }

)

export const SearchingPropertySlice=createSlice({
    name:'searching property',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(GetAllSearchingProperty.fulfilled,(state,action)=>{
            state.status='fulfilled';
            state.searchingProperty=action.payload;
        })
        builder.addCase(DeleteSearchingProperty.fulfilled,(state,action)=>{
            state.status='fulfilled'
        })
        builder.addCase(AddSearchingProperty.fulfilled,(state,action)=>{
            state.status='fulfilled'
            state.searchingProperty.push(action.payload)
        })
    }
})
export const  {}=SearchingPropertySlice.actions
export default SearchingPropertySlice.reducer;