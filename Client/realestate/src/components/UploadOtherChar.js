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

export default function UploadOtherChar() {

  const [parkingColor,setParkingColor]=useState('');
  const [ElivatorColor,setElivatorColor]=useState();
  const [basmentColor,setBasmentColor]=useState();
  const [safeRoomColor,setSafeRoomColor]=useState();
  const [airColor,setAirColor]=useState();
  const [accesColor,setAccesColor]=useState();
  const [barsColor,setBarsColor]=useState();
  const [porchColor,setPorchColor]=useState();

  return (
    <div style={{direction:'rtl'}}>
     <Stack spacing={'1vh'} sx={{margin:'2vh'}}>
       <Stack direction='row' spacing='1vh'>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%'}} >חניה </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%'}} >מעלית </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%'}} >מחסן </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%'}} >ממ"ד</Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%'}} >מיזוג אויר</Button>
        </Stack>
        <Stack direction='row' spacing='1vh'>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%',minWidth:0}} >נגיש לנכים </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%',minWidth:0}} >סורגים </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%',minWidth:0}} >מרפסת </Button>
            <Button variant="outlined" size='big'   sx={{borderRadius:'10%',minWidth:0}} >גינה</Button>
        </Stack>
         </Stack>
     
    <Divider  flexItem variant="middle" sx={{width:'50%'}}/>
     <div style={{direction:'rtl',margin:'3vh'}}>
     <Typography textAlign="right" sx={{color:'black'}}>תאריך כניסה</Typography>

    <FormControl sx={{direction:'rtl',marginTop:'2vh'}}>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <FormControlLabel value="מקבלן חדש " control={<Radio />} label="חדש מקבלן" />
      <FormControlLabel value="חדש" control={<Radio />} label="חדש" />
      <FormControlLabel value="משופץ" control={<Radio />} label="משופץ" />

      <FormControlLabel value="שמור" control={<Radio />} label="שמור" />
      <FormControlLabel value="ישן" control={<Radio />} label="ישן" />
    </RadioGroup>
  </FormControl>
    </div>  
    <Divider  flexItem variant="middle" sx={{width:'50%'}}/>
    <div style={{direction:'rtl',margin:'3vh'}}>
    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>שנת בניה</Typography>
      <TextField
          id="outlined-required"
          // sx={{width:'20vh'}}
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

      <FormControlLabel value={2} control={<Radio />} label="מלא" />
      <FormControlLabel value={1} control={<Radio />} label="חלקי" />
      <FormControlLabel value={0} control={<Radio />} label="ללא" />
    </RadioGroup>
    </FormControl>   

    <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>? מה עוד כדאי לדעת </Typography>
    <TextField
          id="outlined-multiline-static"
          multiline
          rows={4}
          sx={{width:'70vh',direction:'rtl'}}
          placeholder="Default Value"
          
        />

    </div>
        


    </div>
  )
}
