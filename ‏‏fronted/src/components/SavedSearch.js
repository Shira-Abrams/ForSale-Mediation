import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetAllSearchingProperty} from  '../redux/SearchinPropertySlice'
import Typography from '@mui/material/Typography';
import '../cssomponents/SavedSearch.css'
import DeleteIcon from '@mui/icons-material/Delete';
import SingleSavedSearach from './SingleSavedSearach';
import {setUserSearch} from'../redux/SearchinPropertySlice';
export default function SavedSearch() {
  const dispatch=useDispatch();
  const AllSearching=useSelector(state=>state.searching.searchingProperty)
  const userSearching=useSelector(state=>state.searching.userSearch)
  const propType=['דירה','בית פרטי','דירת גן','קוטג','דו משפחתי','פנטהאוז','דירת גג','שטח חקלאי','דופלקס','מגרש','בינין']
  const [IsShowDelete,setIsShowDelete]=useState(false)
  let currentUser=  localStorage.getItem('currentUser')
   currentUser=JSON.parse(currentUser)
  // let currentUser={id:1}
  useEffect(()=>{
        

     dispatch(setUserSearch(AllSearching.filter(x=>x.user.id===currentUser.Id)))
     console.log('use_Effect',AllSearching);
    console.log('use_Effect',userSearching);

  },[])
  
  return (
   <div>
    {userSearching.map((search,index)=>{
        return(
            <div key={index}>

                      <SingleSavedSearach  element={search}/>
            </div>
        

        )
    })}
   </div>
  )
}
