import { ExposureTwoTone } from '@mui/icons-material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './url'
const initialState = {
    property: [],
    status: 'idle',
    propertyDetails:{},
    currenProperty:{},
    tempProperties:[],
    propstatus:'',
    userProperties:[]
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
            return error

        }
   }
)

export const DeleteProperties=createAsyncThunk(
    'redux/DeleteProperty',
    async(propId)=>{
        
            try {
                const response=await axios.delete(`${url}Property/${propId}`)
               if(response.status===200)
               { 

                 console.log('deletted succsfully with status code 200');
                 return response.status
                 
               }
            } catch (error) {
                console.log('error accur in deleting prop id :',propId);
                return error;
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
        },

        setTemp:(state,action)=>{
            state.tempProperties=action.payload
        },
        setStatus:(state,action)=>{
            state.propstatus=action.payload;
        },
        setUserProperties:(state,action)=>{
           state.userProperties=[...action.payload];
        } 
      
    },
    extraReducers: (builder) => {
        builder.addCase(GetAllProperty.fulfilled, (state, action) => {
            //let s=   action.meta.arg.stat;
                //console.log( s);
                state.status  = 'fulfilled'
                state.property = action.payload
                state.tempProperties=action.payload;
            
               state.tempProperties=state.tempProperties.filter(x=>x.propertyStatus===state.propstatus)
         
            
        })
        builder.addCase(AddProperty.fulfilled,(state,action)=>{
            state.status='fulfilled';
            state.property.push(action.payload)

        })
        builder.addCase(DeleteProperties.fulfilled,(state,action)=>{
            state.status='fulfilled'

        })
    }
})

export const { setCurrentProperty,setpropertyDetails,setTemp,filterStatus,setStatus,setUserProperties} = PropertySlice.actions
export default PropertySlice.reducer