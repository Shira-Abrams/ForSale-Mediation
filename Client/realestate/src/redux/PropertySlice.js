import { ExposureTwoTone } from '@mui/icons-material'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from './url'
const initialState = {
    property: [],
    status: 'idle'

}

export const GetAllProperty = createAsyncThunk(
    'redux/GetAllProperty',
    async (thunkAPI) => {
        
        try {
            debugger
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







export const PropertySlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(GetAllProperty.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.property = action.payload
        })
    }
})

export const { } = PropertySlice.actions
export default PropertySlice.reducer