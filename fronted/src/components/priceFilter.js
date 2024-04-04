import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider, { SliderThumb } from '@mui/material/Slider';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { styled, alpha } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const iOSBoxShadow =
  '0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)';
const AirbnbSlider = styled(Slider)(({ theme }) => ({
  color: '#3a8589',
  height: 3,
  padding: '13px 0',
  '& .MuiSlider-thumb': {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    '&:hover': {
      boxShadow: '0 0 0 8px rgba(58, 133, 137, 0.16)',
    },
    '& .airbnb-bar': {
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  '& .MuiSlider-track': {
    height: 3,
  },
  '& .MuiSlider-rail': {
    color: theme.palette.mode === 'dark' ? '#bfbfbf' : '#d8d8d8',
    opacity: theme.palette.mode === 'dark' ? undefined : 1,
    height: 3,
  },
}));

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;
  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

const PriceFilter=(props)=>{
  const [value, setValue] = React.useState([0, 10000000]);
  const [value2,setValue2]=React.useState([0,70000])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleChange2 = (event, newValue) => {
    setValue2(newValue);
  };
  const Cleacnall=()=>{

  }

  const SendFilter=()=>{
     props.element(value,value2)
  }
     return(
        <>
        
        
        <div style={{alignItems:'center'}}>
        <Typography textAlign="right" sx={{color:'black',margin:'2vh'}}>מחיר הנכס</Typography>

           <Box sx={{ width: 320,marginLeft:'2vh'}}>
              <AirbnbSlider
                slots={{ thumb: AirbnbThumbComponent }}
                getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
                defaultValue={value}
                value={value}
                onChange={handleChange}
                min={0}
                max={10000000}
                step={50000}
                sx={{alignSelf:'center',color:'#14C17B'}}
                
              />
           </Box>
    
<Stack direction='row' sx={{justifyContent:'center',margin:'3vh',}}>

    <TextField
       id="outlined-number"
       label="From"
       type="number"
       sx={{width:115}}
       defaultValue={value[0]}
       value={value[0]}
       onChange={(e)=>{setValue([e.target.value,value[1]])}}

    />  
  <div style={{color:'gray',fontSize:'4vh',width:'5vh',textAlign:'center'}}>_</div>
  <TextField
    id="outlined-number"
    label="To"
    type="number"
    sx={{width:115}}
    value={value[1]}
    onChange={(e)=>{setValue([value[0],e.target.value])}}
  />
</Stack>
 <Typography textAlign="right" sx={{color:'black'}}>  מחיר למ"ר  </Typography>
<Stack sx={{ width: 320,marginLeft:'2vh',justifyContent:'center'}}>
   <AirbnbSlider
     slots={{ thumb: AirbnbThumbComponent }}
     getAriaLabel={(index) => (index === 0 ? 'Minimum price' : 'Maximum price')}
    defaultValue={value2}
      value={value2}
     sx={{color:'#14C17B'}}
     justifyContent='center'
     onChange={handleChange2}
     min={0}
     max={70000}
     step={5000}

   />
</Stack>

<Stack direction='row' sx={{justifyContent:'center',margin:'3vh',}}>

    <TextField
       id="outlined-number"
       label="From"
       type="number"
       sx={{width:115}}
       value={value2[0]}
       onChange={(e)=>{setValue2([e.target.value,value2[1]])}}
       
    />  
 <div style={{color:'gray',fontSize:'4vh',width:'5vh',textAlign:'center'}}>_</div>
  <TextField
    id="outlined-number"
    label="To"
    type="number"
    sx={{width:115}}
    value={[value2[1]]}
    onChange={(e)=>{setValue2([value2[0],e.target.value])}}


  />
</Stack>
<Divider component="li"  variant="middle"/>

<Stack direction='row' spacing={20}>
<Button variant="text" sx={{width:'15vh'}} onClick={Cleacnall}>נקה הכל</Button>
<Button variant="text"   sx={{width:'15vh'}} onClick={SendFilter}>בחר</Button>

</Stack>
</div>
  
 </> )    
       
   
   
            

            
  
}

export default PriceFilter