import { configureStore } from "@reduxjs/toolkit";
import propertyReducer from './PropertySlice'
import singlePropertySlices from "./singlePropertySlice";
import userReducer from "./userSlice";
import SearchingSlice from "./SearchingSlice";
export const store=configureStore(
    {
        reducer:{
            properties:propertyReducer,
            property:singlePropertySlices,
            users:userReducer,
            searching:SearchingSlice
        }   
        
    }
)