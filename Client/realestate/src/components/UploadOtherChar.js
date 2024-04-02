import React from 'react'
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from "react";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Provider } from 'react';
import { MyContext } from './context';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProperty } from '../redux/PropertySlice';
import e from 'cors';

export default function UploadOtherChar() {
  const property=useSelector(state=>state.properties.currenProperty);
   const dispatch=useDispatch();
   const [charVariant,setCharVariant]=useState(['outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined'])
  //  const[charProperty,setCharProperty]=useState({
  //   Parkinglot:false,
  //   Elivator:false,
  //   Aircondition:false,
  //   Basmsent:false,
  //   SafeRoom:false,
  //   DisabledAcces:false,
  //   Bars:false,    
  //   PorchGarden:false,
  //   PropertyCondition:null,
  //   BuildingYear:null,
  //   Furniture:null,
  //   PropertyDesctiption:null
  //  })
    useEffect(()=>{
      dispatch(setCurrentProperty({Parkinglot:false,Elivator:false,
         Aircondition:false,
          Basmsent:false,
          SafeRoom:false,
          DisabledAcces:false,
          Bars:false,    
          PorchGarden:false,}))
    },[])
  
   
   const SetChar=(index)=>{
    const tempVariat=[...charVariant]
      switch (index) {
         case 0:
           if(property.Parkinglot)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({Parkinglot:false}))
           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({Parkinglot:true}))

           }
          break;


          

          case 1:
            if(property.Elivator)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({Elivator:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({Elivator:true}))

           }

          break;

          case 2:
            if(property.Basmsent)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({Basmsent:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({Basmsent:true}))

           }

          break;

          case 3:
            if(property.SafeRoom)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({SafeRoom:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({SafeRoom:true}))

           }
          break;

          case 4:
            if(property.Aircondition)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({Aircondition:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({Aircondition:true}))

           }
          break;
 
          

          case 5:
            if(property.DisabledAcces)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({DisabledAcces:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({DisabledAcces:true}))

           }
    
          break;

          case 6:
                  
          if(property.Bars)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({Bars:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({Bars:true}))


           }
          
         break;

          case 7:
          
          if(property.PorchGarden)
           {
            tempVariat[index]='outlined'
            dispatch(setCurrentProperty({PorchGarden:false}))

           }
           else{
            tempVariat[index]='contained'
            dispatch(setCurrentProperty({PorchGarden:true}))


           }
           

          break;
          default:
          break;
        } 
        setCharVariant(tempVariat) 
        
        
           
       }
    
    const SetBuildingYear=(event)=>{
       
        const by=event.target.value;
        let nby;
        const regex =/^\d+$/;
        if(regex.test(by))
        {
          nby=Number(by); 
          dispatch(setCurrentProperty({BuildingYear:nby}))
          console.log('nby=',nby);
          console.log(' at SetBuildingYear  property=',property);
          console.log('at if set by correct value ');
          
        

        }
        else{
           dispatch(setCurrentProperty({BuildingYear:property.BuildingYear||''}))
          console.log('at else set by',property);
          
        }

    }
         
     const SetCondition=(e)=>{     
          dispatch(setCurrentProperty({PropertyCondition:e.target.value}))
          console.log('at SetCondition the property is= ',property);
     }   
     

     const setFurniture=(e)=>{
      
      dispatch(setCurrentProperty({Furniture:e}))
      console.log('at setFurniture the property is= ',property);

    
     }
  return (
    
         
         <div style={{direction:'rtl'}}>
     <Stack spacing={'1vh'} sx={{margin:'2vh'}}>
       <Stack direction='row' spacing='1vh'>
            <Button variant={charVariant[0]} size='big'   sx={{borderRadius:'10%'}} onClick={()=>SetChar(0)}>חניה </Button>
           
            <Button variant={charVariant[1]} size='big'   sx={{borderRadius:'10%'}} onClick={()=>SetChar(1)}>מעלית </Button>
            <Button variant={charVariant[2]} size='big'   sx={{borderRadius:'10%'}}onClick={()=>SetChar(2)}>מחסן </Button>
            <Button variant={charVariant[3]} size='big'   sx={{borderRadius:'10%'}} onClick={()=>SetChar(3)}>ממ"ד</Button>
        </Stack>
        <Stack direction='row' spacing='1vh'>
            <Button variant={charVariant[4]} size='big'   sx={{borderRadius:'10%'}} onClick={()=>SetChar(4)} >מיזוג אויר</Button>
            <Button variant={charVariant[5]} size='big'   sx={{borderRadius:'10%',minWidth:0}} onClick={()=>SetChar(5)}>נגיש לנכים </Button>
            <Button variant={charVariant[6]} size='big'   sx={{borderRadius:'10%',minWidth:0}} onClick={()=>SetChar(6)}>סורגים </Button>
            <Button variant={charVariant[7]} size='big'   sx={{borderRadius:'10%',minWidth:0}} onClick={()=>SetChar(7)}>מרפסת </Button>
        </Stack>
         </Stack>
     
    <Divider  flexItem variant="middle" sx={{width:'50%'}}/>
     <div style={{direction:'rtl',margin:'3vh'}}>
     <Typography  variant='h5'textAlign="right" sx={{color:'black'}}>מצב הנכס</Typography>

    <FormControl sx={{direction:'rtl',marginTop:'2vh'}}>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value={0} control={<Radio />} label="חדש מקבלן" onClick={SetCondition}/>
      <FormControlLabel value={1} control={<Radio />} label="חדש"       onClick={SetCondition}/>
      <FormControlLabel value={2} control={<Radio />} label="משופץ"     onClick={SetCondition}/>

      <FormControlLabel value={3} control={<Radio />} label="שמור"      onClick={SetCondition}/>
      <FormControlLabel value={4} control={<Radio />} label="ישן"       onClick={SetCondition}/>
    </RadioGroup>
  </FormControl>
    </div>  
    <Divider  flexItem variant="middle" sx={{width:'50%'}}/>
    <div style={{direction:'rtl',margin:'3vh'}}>
    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>שנת בניה</Typography>
      <TextField
          value={property.BuildingYear}
          onChange={SetBuildingYear}
          id="outlined-required"
          inputProps={{style:{
            height:'1vh',
            width:'17vh'

          }}}
       />          
    </div>
    <Divider  flexItem variant="middle" sx={{width:'50%'}}/>

    <div   style={{direction:'rtl',margin:'3vh'}}>
    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>ריהוט </Typography>

    <FormControl sx={{direction:'rtl',marginTop:'2vh'}}>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >

      <FormControlLabel value={2} control={<Radio />} checked={property.Furniture===2} label="מלא"  onClick={(e)=>setFurniture(2)}/>
      <FormControlLabel value={1} control={<Radio />} checked={property.Furniture===1} label="חלקי" onClick={(e)=>setFurniture(1)}/>
      <FormControlLabel value={0} control={<Radio />} checked={property.Furniture===0} label="ללא"  onClick={(e)=>setFurniture(0)}/>
    </RadioGroup>
    </FormControl>   

    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>? מה עוד כדאי לדעת </Typography>
    <TextField
           alue={property.PropertyDesctiption}
           onChange={(e)=>{
           
           dispatch(setCurrentProperty({PropertyDesctiption:e.target.value}))
            
          }}
          id="outlined-multiline-static"
          multiline
          rows={4}
          sx={{width:'70vh',direction:'rtl'}}
          placeholder="פרטים נוספים שיעזרו לשווק את הנכס שלכם בצורה טובה יותר"
          
        />

    </div>
        


    </div>

   
   
  )
}
