import { ExposureTwoTone } from '@mui/icons-material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './url'
const initialState = {
    property: [],
    status: 'idle',
    propertyDetails:{},
    currenProperty:{},
}

export const GetAllProperty = createAsyncThunk(
    'redux/GetAllProperty',
    async (thunkAPI) => {
        
        try {
            
            const response = await axios.get(`${url}Property`)
            console.log(response.data);
            return response.data;
        } catch (error) {
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
        const response=await axios.post(`${url}Property`,AddProperty, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response.data);
        if(response.status===200)
        {
         console.log(response.status);
         return response.data;
        }
       } catch (error) {
         console.log('error accuor in add property',error);
         return error.messa;
       }
   }

)







export const PropertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setCurrentProperty:(state,action)=>{
        state.currenProperty={...state.currenProperty,...action.payload}
  
        },

        setpropertyDetails:(state,action)=>{
            console.log('SetpropertyDetails', action.payload);
           state.propertyDetails={...action.payload}
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

export const { setCurrentProperty,setpropertyDetails} = PropertySlice.actions
export default PropertySlice.reducer