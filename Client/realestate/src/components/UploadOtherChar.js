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

export default function UploadOtherChar() {

   const [charVariant,setCharVariant]=useState(['outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined','outlined'])
   const[charProperty,setCharProperty]=useState({
    Parkinglot:false,
    Elivator:false,
    Aircondition:false,
    Basmsent:false,
    SafeRoom:false,
    DisabledAcces:false,
    Bars:false,    
    PorchGarden:false,
    PropertyCondition:null,
    BuildingYear:null,
    Furniture:null,
    PropertyDesctiption:null
   })
    let jsonChar=JSON.stringify(charProperty)
   localStorage.setItem('charProperty',jsonChar)
   
   const [by,setBy]=useState();
   useEffect(()=>{
  
      // jsonChar=JSON.stringify(charProperty)
      // localStorage.setItem('charProperty',jsonChar)
    
   },[])
    
   const SetChar=(index)=>{
    const tempVariat=[...charVariant]
      switch (index) {
         case 0:
           if(charProperty.Parkinglot)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,Parkinglot:!charProperty.Parkinglot})
           jsonChar=JSON.stringify(charProperty)
           localStorage.setItem('charProperty',jsonChar)
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 1:
            if(charProperty.Elivator)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,Elivator:!charProperty.Elivator})
           jsonChar=JSON.stringify(charProperty)
           localStorage.setItem('charProperty',jsonChar)
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 2:
            if(charProperty.Basmsent)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,Basmsent:!charProperty.Basmsent})
           
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 3:
            if(charProperty.SafeRoom)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,SafeRoom:!charProperty.SafeRoom})
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 4:
            if(charProperty.Aircondition)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,Aircondition:!charProperty.Aircondition})
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 5:
            if(charProperty.DisabledAcces)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,DisabledAcces:!charProperty.DisabledAcces})
            setCharVariant(tempVariat) 
            console.log(charProperty);

          break;

          case 6:
                  
          if(charProperty.Bars)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,Bars:!charProperty.Bars})
            setCharVariant(tempVariat) 
            console.log(charProperty);
         break;

          case 7:
          
          if(charProperty.PorchGarden)
           {
            tempVariat[index]='outlined'
           }
           else{
            tempVariat[index]='contained'

           }
           setCharProperty({...charProperty,PorchGarden:!charProperty.PorchGarden})
            setCharVariant(tempVariat)            
             console.log(charProperty);

          break;
          default:
          break;
        } 
          
        
        
        jsonChar=JSON.stringify(charProperty)
           localStorage.setItem('charProperty',jsonChar)
       }
    
    const SetBuildingYear=(event)=>{
       
        const by=event.target.value;
        let prevValue;
        let nby;
        const regex =/^\d+$/;
        if(regex.test(by))
        {
          nby=Number(by); 
          prevValue=nby;
          setCharProperty({...charProperty,BuildingYear:nby})
          jsonChar=JSON.stringify(charProperty)
           localStorage.setItem('charProperty',jsonChar)
          console.log('nby=',nby);
          console.log(' at SetBuildingYear  charProperty=',charProperty);
          console.log('at if set by correct value ');
          
        

        }
        else{
        
          console.log('at else set by',charProperty.BuildingYear);
          setCharProperty({...charProperty,BuildingYear:charProperty.BuildingYear||''})
          
        }

    }
         
     const SetCondition=(e)=>{jsonChar=JSON.stringify(charProperty)
     
      setCharProperty({...charProperty,PropertyCondition:e.target.value})
      jsonChar=JSON.stringify(charProperty)
      localStorage.setItem('charProperty',jsonChar)

     }   
     

     const setFurniture=(e)=>{
      setCharProperty({...charProperty,Furniture:e.target.value})
      jsonChar=JSON.stringify(charProperty)
      localStorage.setItem('charProperty',jsonChar)
     


     }
  return (
    <MyContext.Provider value={charProperty}>
         
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
          value={charProperty.BuildingYear}
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

      <FormControlLabel value={2} control={<Radio />} label="מלא"  onClick={setFurniture}/>
      <FormControlLabel value={1} control={<Radio />} label="חלקי" onClick={setFurniture}/>
      <FormControlLabel value={0} control={<Radio />} label="ללא"  onClick={setFurniture}/>
    </RadioGroup>
    </FormControl>   

    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>? מה עוד כדאי לדעת </Typography>
    <TextField
           alue={charProperty.PropertyDesctiption}
           onChange={(e)=>{
            setCharProperty({...charProperty,PropertyDesctiption:e.target.value})
            jsonChar=JSON.stringify(charProperty)
            localStorage.setItem('charProperty',jsonChar)
            
          }}
          id="outlined-multiline-static"
          multiline
          rows={4}
          sx={{width:'70vh',direction:'rtl'}}
          placeholder="פרטים נוספים שיעזרו לשווק את הנכס שלכם בצורה טובה יותר"
          
        />

    </div>
        


    </div>
 </MyContext.Provider >

   
   
  )
}
