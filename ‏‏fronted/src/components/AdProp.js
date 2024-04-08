import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import SingleAdProp from './SingleAdProp';
import Typography from '@mui/material/Typography';
import {setUserProperties} from "../redux/PropertySlice";
import { GetAllProperty } from "../redux/PropertySlice";

export default function AdProp() {
  let currentUser=  localStorage.getItem('currentUser')
   currentUser=JSON.parse(currentUser)
 let  properties = useSelector(state => state.properties.property)
  let userProperty=useSelector(state=>state.properties.userProperties);

  const dispatch=useDispatch();
 useEffect(()=>{
  console.log(currentUser.Id);
       dispatch(GetAllProperty())
       dispatch(setUserProperties(properties.filter(x=>x.user.id===currentUser.Id)))
         console.log('properties',properties);
         console.log('userProperty',userProperty);

 },[])
  
  return (
    <div style={{direction:'rtl'}}> 

 <Typography  variant='h5'textAlign="right" sx={{color:'black',m:'2vh'}}> המודעות שלך</Typography>

 <div className='PropertyWarp' style={{direction:'rtl'}}>
        {userProperty.map((prop,index)=>{
            console.log(userProperty);
            return(
                <div key={index} className='Property' >
                    <SingleAdProp element={prop}></SingleAdProp>
                </div>
            )
        })}
    </div>
    </div>
   
   
  )
}
