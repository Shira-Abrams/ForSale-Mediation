import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import { LocalPrintshop } from '@mui/icons-material';
import ElevatorIcon from '@mui/icons-material/Elevator';
import BalconyIcon from '@mui/icons-material/Balcony';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
const PropCharFilter=(props)=>{



 const[charArrya,setCharArray]=React.useState([false,false,false,false,false,false,false,false,false])  
    
  const SendChar=()=>{
    console.log('at SendChar send:',charArrya);
         props.element(charArrya); 
   }
   const ChangeCharArray=(index)=>{
       let temp=[...charArrya]
       temp[index]=true
       console.log('at ChangeCharArray change index',index);
       setCharArray(temp)
       
   }
    return(
        <>
        <Stack direction='column' sx={{direction:'rtl'}}>
            <FormGroup>
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<LocalParkingIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(0)}/>
             <p style={{color:'black', marginRight:'2vh'}}>חניה</p>
            </Stack>
          
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<ElevatorIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}}  onClick={()=>ChangeCharArray(1)}/>
             <p style={{color:'black', marginRight:'2vh'}}>מעלית</p>
            </Stack>
         
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<BalconyIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(2)}/>
             <p style={{color:'black', marginRight:'2vh'}}>מרפסת</p>
            </Stack>
        
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<GppMaybeIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(3)}/>
             <p style={{color:'black', marginRight:'2vh'}}>ממד</p>
            </Stack>
                
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<AcUnitIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(4)}/>
             <p style={{color:'black', marginRight:'2vh'}}>מיזוג אויר</p>
            </Stack>
        
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<WarehouseIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}}onClick={()=>ChangeCharArray(5)}/>
             <p style={{color:'black', marginRight:'2vh'}}>מחסן</p>
            </Stack>

            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<AccessibleIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(6)}/>
             <p style={{color:'black', marginRight:'2vh'}}>נגיש</p>
            </Stack>
            <Stack direction='row'>
            <FormControlLabel control={<Checkbox  />} label={<DataSaverOffIcon fontSize='small'  sx={{color:'black'}}/>}  sx={{color:'black'}} onClick={()=>ChangeCharArray(7)}/>
             <p style={{color:'black', marginRight:'2vh'}}>סורגים</p>
            </Stack>

        </FormGroup>
         
          </Stack>
          <Divider component="li"  variant="middle"/>

           <Stack direction='row' spacing={10}>
           <Button variant="text" sx={{width:'15vh'}}>נקה הכל</Button>
           <Button variant="text"   sx={{width:'15vh'}} onClick={SendChar}>בחר</Button>
   
          </Stack> 
       
        </>

        
    )

}

export default PropCharFilter