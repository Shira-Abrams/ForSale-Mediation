import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';


const RoomFilter=(props)=>{
  const [numRoom,setNumRoom]=React.useState()
   const [roomvariant,setRoomavariant]=React.useState(['outlined','outlined','outlined','outlined','outlined','outlined',])
  const SendNumRoom=()=>{
     props.element(numRoom);
  }

  const changeRoom=(nr)=>{
    setNumRoom(nr+1)
    let tempvariant=[];
    for (let i = 0; i < roomvariant.length; i++) {
           tempvariant[i]='outlined'
      
    }
    tempvariant[nr]='contained'
    setRoomavariant(tempvariant)
  }
  const cleanChose={
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
  }
return(<>

    <h2 style={{textAlign:'center',color:'black'}}>חדרים</h2>
    <Stack spacing={1} direction="row" sx={{justifyContent:'center',marginTop:'2vh'}}>
    <Button variant={roomvariant[5]} size='big'  sx={{borderRadius:'50%',minWidth:0}}    onClick={()=>{changeRoom(5)}}>+6</Button>
    <Button variant={roomvariant[4]} size='big'   sx={{borderRadius:'50%',minWidth:0}}   onClick={()=>{changeRoom(4)}}>5</Button>
    <Button variant={roomvariant[3]} size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{changeRoom(3)}}>4</Button>
    <Button variant={roomvariant[2]} size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{changeRoom(2)}}>3</Button>
    <Button variant={roomvariant[1]} size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{changeRoom(1)}}>2</Button>
    <Button variant={roomvariant[0]} size='big'   sx={{borderRadius:'50%',minWidth:0}}  onClick={()=>{changeRoom(0)}}>1</Button>
 
       
    </Stack>
   <Divider component="li"  variant="middle"/>

   <div direction='row' style={{...cleanChose}}>
   <Button variant="text" sx={{width:'15vh'}}>נקה הכל</Button>
   <Button variant="text"   sx={{width:'15vh'}} onClick={SendNumRoom}>בחר</Button>
   
   </div> 

 </>)
 
   
}

export default RoomFilter;