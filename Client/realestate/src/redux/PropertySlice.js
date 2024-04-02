import { ExposureTwoTone } from '@mui/icons-material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './url'
const initialState = {
    property: [],
    status: 'idle',
    currenProperty:{}
}

export const GetAllProperty = createAsyncThunk(
    'redux/GetAllProperty',
    async (thunkAPI) => {
        
        try {
            
            const response = await axios.get(`${url}Property`)
            console.log(response.data);
            return response.data;
        } catch (error) {
            debugger
            console.log(error.message);
            return error.message

        }



    }
)


export const AddProperty=createAsyncThunk(
   'redux/AddProperty',
   async(AddProperty)=>{
       console.log('at propertySlice Add Property');
       console.log(' the property how is added is :', AddProperty);
       try {
        const response=await axios.post(`${url}Property`,AddProperty)
        console.log(response.data);
        if(response.status===200)
        {
        console.log(response.status);
         return response.data;
        }
       } catch (error) {
         console.log('error accuor in add property',error.message);
         return error.message;
       }
   }

)







export const PropertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setCurrentProperty:(state,action)=>{
            
        if(Array.isArray(action.payload))
          state.currenProperty={...state.currenProperty,FileImageList:[...action.payload]}
        else 
        state.currenProperty={...state.currenProperty,...action.payload}
  
        }
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllProperty.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.property = action.payload
        })
        builder.addCase(AddProperty.fulfilled,(state,action)=>{
            state.status='fulfilled';
            state.property.push(action.payload)
        })
    }
})

export const { setCurrentProperty} = PropertySlice.actions
export default PropertySlice.reducer