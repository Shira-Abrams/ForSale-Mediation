import React, { useState } from 'react'

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { act } from 'react-dom/test-utils';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import UploadPropType from './uploadPropType'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UploadOtherChar from './UploadOtherChar';
const options = [
  'רחובות ',
  'ירוחם',
  'אבו גביש',
   'מעלה אדומים',
   'קרית ספר', 
   'פתח תקוה',
   'בני ברק', 
   'אלעד',
   'קרית שמונה',
   'ירושלים', 
   'נתיבות',
   'בית שמש',
   'שלומי',
   'רמות נפתלי',
   'ביתר',
   'חשמונאים',
   'חיפה',
   'בית הלל',
   'שדה נחמיה',
   ' רכסים',
   'עפולה',
   'מטולה',
   'ראש העין',
   'נחלים',
   'תל אביב',
   'כפר חבד',
  ]; 
  

export const AploadProperty=()=> {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [leavingvariant,setLeavingvariant]=useState('contained')
  const [comertialVariant,setComertialVariant]=useState('outlined')
  const [currentStage,setCurrentStage]=useState(0);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  
  const Leaving=()=>{
    setLeavingvariant('contained');
    setComertialVariant('outlined')
 }
 const Comertial=()=>{
  setLeavingvariant('outlined');
  setComertialVariant('contained')
 }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCurrentStage((prevActiveStep) => prevActiveStep + 1)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentStage((prevActiveStep) => prevActiveStep - 1)
  };
  
  
 
  

  const stage1=<div><Stack spacing={'4vh'} sx={{height:'100%'}}>
  <Typography textAlign="right" sx={{color:'black'}}>בואי נתחיל באיזה לוח אתם רוצים לפרסם</Typography>
  <div style={{display:'flex',justifyContent:'center'}}>
  <Stack  direction='row' spacing={2}>
      <Button width='30vh' variant={comertialVariant} onClick={Comertial} sx={{width:'30vh'}}>מסחרי</Button>
      <Button width='30vh' variant={leavingvariant} onClick={Leaving}   sx={{width:'30vh'}}>מגורים</Button>
  </Stack>
  </div>
  </Stack>
  </div> 
const stage2= <div>
  <Stack sx={{maxHeight:'100%'}} spacing={'4vh'}>
  <Typography textAlign="right" sx={{color:'black'}}>?מוכרים או משכירים</Typography>
  <div style={{display:'flex',justifyContent:'center'}}>
  <Stack  direction='row' spacing={2}>
    <Button width='30vh' variant={comertialVariant} onClick={Comertial} sx={{width:'30vh'}}>מוכרים</Button>
    <Button width='30vh' variant={leavingvariant} onClick={Leaving}   sx={{width:'30vh'}}>משכירים</Button>
  </Stack>
  </div>
  </Stack>
  </div>

const stage3=<div>
  <Typography textAlign="right" sx={{color:'black'}}>כתובת הנכס</Typography>
  <Toolbar sx={{marginRight:0,direction:'rtl'}}>
     <Autocomplete
       value=''
       onChange={(event, newValue) => {
         setValue(newValue);
       }}
       inputValue={inputValue}
       onInputChange={(event, newInputValue) => {
         setInputValue(newInputValue);
       }}
       id="controllable-states-demo"
       options={options}
       sx={{ width: 200 ,direction:'ltr'}}
       renderInput={(params) => <TextField {...params} label=""  />}
      
      /> 
  </Toolbar> 
  <Typography textAlign="right" sx={{color:'black'}}>רישום בטאבו</Typography>
  <Typography textAlign="right" sx={{color:'black'}}>אם ידוע לך, אפשר למלא גם גוש וחלקה</Typography>
  <Stack direction='row' sx={{direction:'rtl'}} >
    <TextField
          id="outlined-required"
          placeholder="גוש"
        />
         <TextField
          id="outlined-required"
          placeholder="חלקה"
        />
  </Stack>

</div>


      



  
const stage5=<div></div>
const stage6=<div></div>
const stage7=<div></div>
const AllStage=[stage1,stage2,stage3,<UploadPropType></UploadPropType>,<UploadOtherChar></UploadOtherChar>,stage6,stage7]

  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'10vh'}}>
     <div style={{width:'60%'}} >
    <Typography textAlign="right" sx={{color:'black'}}>  העלאת דירה . שלב{activeStep+1} מתוך 8</Typography>
    <MobileStepper
      variant="progress"
      steps={9}
      position="static"
      activeStep={activeStep}
      sx={{width:'100%',justifyContent:'right'}}
     />
     <div style={{height:'100%',width:'100%'}}> {AllStage[activeStep]}</div>
    
  
      <div style={{display:'flex',flexDirection:'row',paddingBottom:'0px',justifyContent:'space-between',position:'static'}}>
      <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>

        <Button size="small" onClick={handleNext} disabled={activeStep === 8}> 
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      </div>
     </div>
    </div>
  

    
      
  
    
  )
}
