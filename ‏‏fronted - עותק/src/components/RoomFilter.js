import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


const RoomFilter=(props)=>{
  const [numRoom,setNumRoom]=React.useState()
  const SendNumRoom=()=>{
     props.element(numRoom);
  }

  const cleanChose={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
return(<>

    <h2 style={{textAlign:'center',color:'black'}}>חדרים</h2>
    <Stack spacing={1} direction="row" sx={{justifyContent:'center',marginTop:'2vh'}}>
    <Button variant="outlined" size='big'  sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{setNumRoom(6)}}>+6</Button>
    <Button variant="outlined" size='big'   sx={{borderRadius:'50%',minWidth:0}}   onClick={()=>{setNumRoom(5)}}>5</Button>
    <Button variant="outlined" size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{setNumRoom(4)}}>4</Button>
    <Button variant="outlined" size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{setNumRoom(3)}}>3</Button>
    <Button variant="outlined" size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{setNumRoom(2)}}>2</Button>
    <Button variant="outlined" size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{setNumRoom(2)}}>1</Button>
 
       
    </Stack>
   <Divider component="li"  variant="middle"/>

   <div direction='row' style={{...cleanChose}}>
   <Button variant="text" sx={{width:'15vh'}}>נקה הכל</Button>
   <Button variant="text"   sx={{width:'15vh'}} onClick={SendNumRoom}>בחר</Button>
   
   </div> 

 </>)
 
   
}

export default RoomFilter;