import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetAllSearchingProperty} from  '../redux/SearchinPropertySlice'
import Typography from '@mui/material/Typography';
import '../cssomponents/SavedSearch.css'
import DeleteIcon from '@mui/icons-material/Delete';
import {DeleteSearchingProperty} from '../redux/SearchinPropertySlice';
import {setUserSearch} from'../redux/SearchinPropertySlice';


export default function SingleSavedSearach(props) {
    const dispatch=useDispatch();
  const AllSearching=useSelector(state=>state.searching.searchingProperty)
  const propType=['דירה','בית פרטי','דירת גן','קוטג','דו משפחתי','פנטהאוז','דירת גג','שטח חקלאי','דופלקס','מגרש','בינין']
 const [IsShowDelete,setIsShowDelete]=useState(false)
 //const userSearching=useSelector(state=>state.searching.userSearch)
 let currentUser=  localStorage.getItem('currentUser')
   currentUser=JSON.parse(currentUser)

 const DeleteSearch=()=>{
         console.log(props.element.id);
         dispatch(DeleteSearchingProperty(props.element.id))
        // dispatch(GetAllSearchingProperty())
         dispatch(setUserSearch(AllSearching.filter(x=>x.user.id===currentUser.Id)))
         window.location.reload();

 }
  
  return (
    <div>
         <div className='warSaerch' >

       <div className='singleSearch'  onMouseOver={()=>setIsShowDelete(true)} onMouseOut={()=>setIsShowDelete(false)}>

            {props.element.propertyStatus===0?(<Typography textAlign="right" variant={'h6'} >לקניה</Typography>):(<Typography textAlign="right" variant={'h7'} >למכירה </Typography>)}
            <div  textAlign="right" variant={'h6'} style={{display:'inline',textAlign:'right',displa:'flex',flexDirection:'row-reverse',marginBottom:'1vh'}} className='types' direction='row'>

            {props.element.propertyTypes.map((type,index)=>{
                return(
                <Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>{propType[type]}.</Typography>

                )
            })}
            </div>
           {props.element.priceBegin>0&&<p style={{display:'inline',direction:'ltr'}} className='types'>{props.element.priceBegin}-החל מ</p>}
           {props.element.priceEnd<10000000&&<p style={{display:'inline',direction:'ltr'}} className='types'>{props.element.priceEnd}-עד</p>}

           {props.element.rooms>0&&<p style={{display:'inline',direction:'ltr'}} className='types'>{props.element.rooms}'חד</p>}
           {props.element.smBegin<0&&<p style={{display:'inline',direction:'ltr'}} className='types'>מ"ר{props.element.smBegin}-מ</p>}
            <div style={{display:'inline',textAlign:'right',displa:'flex',flexDirection:'row-reverse',marginTop:'1vh'}} className='types'>
            { props.element.parkinglot&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>חניה.</Typography>}
            { props.element.elivator&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>מעלית.</Typography>}
            { props.element.aircondition&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>מיזוג אויר.</Typography>}
            { props.element.basmsent&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}> מחסן.</Typography>}
            { props.element.safeRoom&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}> ממ"ד.</Typography>}
            { props.element.disabledAcces&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}> נגיש לנכים.</Typography>}
            { props.element.bars&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>סורגים.</Typography>}
            { props.element.porchGarden&&<Typography textAlign="right" variant={'h7'} sx={{m:'1vh'}}>מרפסת\גינה.</Typography>}
            {IsShowDelete&& <DeleteIcon fontSize='medium' className='delete' color='lightgray' onClick={DeleteSearch}/>}

        </div>



          
            

       </div> 
     
</div>
 </div>
  )
}
