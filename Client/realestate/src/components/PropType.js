
import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { Stack, getSpeedDialActionUtilityClass } from '@mui/material';
import Button from '@mui/material/Button';


const PropTypeFilter=(props)=>{
  const [typeArray,setTypeArray]=React.useState([false,false,false,false,false,false,false,false,false,false,false])

//   const [typeObject,setTypeObject]=React.useState({parkinglot:false,
//     apartment:false,
//     privateHome:false,
//     gardenHome:false,
//     kotage:false,
//     doFamily:false,
//     fentouse:false,
//     roofApertment:false,
//     farmer:false,
//     doplex:false,
//     migrash:false,
//     buiding:false
//  
  const ChangeArrayType=(i)=>{
    let tempArray=[...typeArray];
    tempArray[i]=true;
    setTypeArray(tempArray)
  }

  const SendType=()=>{
    props.element(typeArray)
  }
  return(
    <>
    <FormGroup style={{direction:'rtl'}}>
     
      <FormControlLabel control={<Checkbox />} label="דירה" sx={{color:'black'}} onClick={()=>ChangeArrayType(0)}/>
      <FormControlLabel control={<Checkbox />} label="בית פרטי" sx={{color:'black'}}  onClick={()=>ChangeArrayType(1)}/>
      <FormControlLabel control={<Checkbox />} label="דירת גן" sx={{color:'black'}}  onClick={()=>ChangeArrayType(2)}/>
      <FormControlLabel control={<Checkbox />} label="קוטג" sx={{color:'black'}} onClick={()=>ChangeArrayType(3)}/>
      <FormControlLabel control={<Checkbox />} label="דו משפחתי" sx={{color:'black'}} onClick={()=>ChangeArrayType(4)}/>
      <FormControlLabel control={<Checkbox />} label="פנטאהוז" sx={{color:'black'}} onClick={()=>ChangeArrayType(5)}/>
      <FormControlLabel control={<Checkbox />} label="דירת גג" sx={{color:'black'}}onClick={()=>ChangeArrayType(6)}/>
      <FormControlLabel control={<Checkbox />} label="שטח חקלאי" sx={{color:'black'}}onClick={()=>ChangeArrayType(7)}/>
      <FormControlLabel control={<Checkbox />} label="דופלקס" sx={{color:'black'}} onClick={()=>ChangeArrayType(8)}/>
      <FormControlLabel control={<Checkbox />} label="מגרש" sx={{color:'black'}} onClick={()=>ChangeArrayType(9)}/>
      <FormControlLabel control={<Checkbox />} label="בינין"  sx={{color:'black'}} onClick={()=>ChangeArrayType(10)}/>
    </FormGroup>
   
          <Divider component="li"  variant="middle"/>

           <Stack direction='row' spacing={10}>
           <Button variant="text" sx={{width:'15vh'}}>נקה הכל</Button>
           <Button variant="text"   sx={{width:'15vh'}} onClick={SendType}>בחר</Button>
           </Stack>  
       
       
    </>
  )
}

export default PropTypeFilter