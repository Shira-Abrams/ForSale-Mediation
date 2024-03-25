import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


const RoomFilter=(props)=>{
  const [numRoom,setNumRoom]=React.useState()
  const SendNumRoom=()=>{
     props.element(numRoom);
  }
return(<>

    <h1 style={{textAlign:'center',color:'black'}}>חדרים</h1>
    <Stack spacing={1} direction="row" sx={{justifyContent:'center',marginTop:'2vh'}}>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}  onClick={()=>{setNumRoom(6)}}>+6</Button>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}   onClick={()=>{setNumRoom(5)}}>5</Button>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}  onClick={()=>{setNumRoom(4)}}>4</Button>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}  onClick={()=>{setNumRoom(3)}}>3</Button>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}  onClick={()=>{setNumRoom(2)}}>2</Button>
    <Button variant="outlined" size='small'  sx={{borderRadius:'100%'}}  onClick={()=>{setNumRoom(2)}}>1</Button>
 
       
    </Stack>
   <Divider component="li"  variant="middle"/>

   <Stack direction='row' spacing={35}>
   <Button variant="text" sx={{width:'15vh'}}>נקה הכל</Button>
   <Button variant="text"   sx={{width:'15vh'}} onClick={SendNumRoom}>בחר</Button>
   
   </Stack> 

 </>)
 
   
}

export default RoomFilter;