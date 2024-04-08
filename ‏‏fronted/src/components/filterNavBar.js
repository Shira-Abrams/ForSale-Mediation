import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import BedIcon from '@mui/icons-material/Bed';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Button from '@mui/material/Button';
import ChaletIcon from '@mui/icons-material/Chalet';
import TuneIcon from '@mui/icons-material/Tune';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import '../cssomponents/filternNavBar.css'
import PriceFilter from './priceFilter';
import RoomFilter from './RoomFilter';
import PropCharFilter from './PropChar';
import PropTypeFilter from './PropType';
import OtherFilters from './Otherfilter';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { array } from 'yup';
import { useDispatch, useSelector } from "react-redux";
import {AddSearchingProperty,DeleteSearchingProperty,GetAllSearchingProperty} from '../redux/SearchinPropertySlice'
import { LteMobiledata } from '@mui/icons-material';
const label = { inputProps: { 'aria-label': 'Switch demo' } };
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
  
const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 36,
  height: 20,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color:
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
      duration: 500,
    }),
  },
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


export default function SearchAppBar(props)
{ 

  let currentUser=  localStorage.getItem('currentUser')
  currentUser=JSON.parse(currentUser)
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
 const[isOpenPrice,setIsOpenPrice]=React.useState(false);
 const[isOpenRoom,setIsOpenRoom]=React.useState(false);
 const[isOpenPropType,setIsOpenPropType]=React.useState(false);
 const[isOpenPropchar,setIsOpenPropchar]=React.useState(false);
 const[isOpenOthers,setIsOpenOthers]=React.useState(false); 
 const [isSaveSearching,setIsSaveSearching]=React.useState(false);
 const [isDeleteSearching,setIsDeleteSearching]=React.useState(false)
 const[save,setSave]=React.useState(true);
 const[currentSearchingId,setCurrentSearchingId]=React.useState(undefined);

 const [searching,setSearching]=React.useState({
   UserId:currentUser.Id,
   Parkinglot:false,
   Elivator:false,
   Aircondition:false, 
    Basmsent:false,
    SafeRoom:false,
    DisabledAcces:false,
    Bars:false,
    PandorDoor:false,
    PorchGarden:false,
    Address:'',
    PriceBegin:0,
    PriceEnd:10000000,
    PriceForSmBegin:0,
    PriceForSmEnd:70000,
    Rooms:0,    
    SmBegin:0,
    SmEnd:200,
    PropertyCondtion:[],
    PropertyTypes:[],
    FloorBegin:0,
    FloorEnd:14,
    IsCommercial:false,
    Furniture:0
 })

 const dispatch=useDispatch()
// const propCharArray=['Parkinglot','Elivator','Aircondition','Basmsent','SafeRoom','DisabledAcces','Bars','PorchGardenars'];
 const propCharArray=['Parkinglot','Elivator','PorchGarden','SafeRoom','Aircondition','Basmsent','DisabledAcces','Bars'];

  const OpenPrice =()=>{
     props.filters.ChangeClose(true)
     setIsOpenPrice(!isOpenPrice)
     setIsOpenOthers(false);
     setIsOpenPropType(false);
     setIsOpenPropchar(false);
     setIsOpenRoom(false)
  }
  const OpenRoom =()=>{
    props.filters.ChangeClose(true)

     setIsOpenPrice(false)
     setIsOpenOthers(false);
     setIsOpenPropType(false);
     setIsOpenPropchar(false);
     setIsOpenRoom(!isOpenRoom)
  }
  const OpenPropType =()=>{
    props.filters.ChangeClose(true)

    setIsOpenPrice(false)
     setIsOpenOthers(false);
     setIsOpenPropType(!isOpenPropType);
     setIsOpenPropchar(false);
     setIsOpenRoom(false)
  }
  const OpenPropchar =()=>{
    props.filters.ChangeClose(true)

     setIsOpenPrice(false)
     setIsOpenOthers(false);
     setIsOpenPropType(false);
     setIsOpenPropchar(!isOpenPropchar);
     setIsOpenRoom(false)
  }
   const OpenOthers =()=>{     
    props.filters.ChangeClose(true)
    setIsOpenPrice(false)
    setIsOpenOthers(!isOpenOthers);
    setIsOpenPropType(false);
    setIsOpenPropchar(false);
    setIsOpenRoom(false)
  }
  
  const FilterBycity=(e)=>{
    if(e.key==='Enter'){
      console.log('at filter by city',value);
      setSearching({...searching,Address:value})
      props.filters.serch(value)
    }
    
    
 } 

 const SendPrice=(value,value2)=>{
   setIsOpenPrice(!isOpenPrice)
   setSearching({...searching,PriceBegin:value[0],PriceEnd:value[1],PriceForSmBegin:value2[0],PriceForSmEnd:value2[1]})
   console.log('at SendPrice the searchin was defined to',searching);
   props.filters.price(value,value2)
   
 }

 const SendRoom=(n)=>{
     setIsOpenRoom(!isOpenRoom)
     setSearching({...searching,Rooms:n})
     console.log('searching',searching);
     props.filters.room(n)
 }
 const SendFilterType=(arrtype)=>{
   //const propTypeArray=[...arrtype]
   let tempArray=[];
   for (let i = 0; i < arrtype.length; i++) {
     if(arrtype[i]===true)
     tempArray.push(i);
   }
   setSearching({...searching,PropertyTypes:tempArray})
   console.log(' at SendFilterType searching=',searching);
    setIsOpenPropType(!isOpenPropType)
    props.filters.propertytype(arrtype)
 }

 const SendChar=(obj)=>{
  setIsOpenPropchar(!isOpenPropchar)
   let pchar;
   for (let i = 0; i < propCharArray.length; i++) {
     pchar=propCharArray[i]
         setSearching({...searching,[pchar]:obj[i]})
    
   }
   console.log('at SendChar searching= ',searching);
   props.filters.PropChar(obj)
 }

 
 const SendOther=(condition,area,floor)=>{
   let auxiliryArray=[];
   for (let i = 0; i < condition.length; i++) {
     if(condition[i]===true)
       auxiliryArray.push(i);
   }
   setSearching({...searching,PropertyCondtion:auxiliryArray,SmBegin:area.from,SmEnd:area.until,FloorBegin:floor.from,FloorEnd:floor.until})
    console.log('at filer-navbar SendOther',condition,area,floor);
    console.log('searching',searching);
    setIsOpenOthers(!isOpenOthers)
    props.filters.others(condition,area,floor)
 }


 const SaveSearching=async()=>{
  let currentSearching; 
  let status;
  console.log('save =',save);
  if(save)
  {
    try {
     console.log('at save Searching ' ,searching);
     currentSearching= await dispatch(AddSearchingProperty(searching))
     setCurrentSearchingId(currentSearching.payload.id)
     console.log('currentSearching=',currentSearching);
     console.log('currentSearchingId=',currentSearchingId);
       setIsSaveSearching(true);
       setTimeout(() => {
         setIsSaveSearching(false)
       }, 5000);
    } catch (error) {
      console.log(error.message);
    }
  }
  else{
   
      console.log(currentSearchingId);
    status= await dispatch(DeleteSearchingProperty(currentSearchingId))
    status=status.payload;
    console.log('status=',status);
    if(status==200)
    {
      setIsDeleteSearching(true)
      setTimeout(() => {
        setIsDeleteSearching(false)
      }, 5000);
   
    }
      
   
  }
   setSave(!save) 
 }
  return (

    
    <Box sx={{ color:'white'}}>
    <AppBar position="static"  sx={{bgcolor:'white'}}>
    <Stack direction='row' position='static' sx={{marginRight:0,direction:'rtl' }}>
    <Toolbar>
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
       renderInput={(params) => <TextField {...params} label=""   onKeyDown={FilterBycity}/>}
       
       /> 
        <SearchIconWrapper >
       <SearchIcon />
      </SearchIconWrapper>
       </Toolbar> 
 

   

         <Stack direction="row" spacing={2} sx={{marginTop:'2vh',marginRight:'1vh',direction:'ltr'}}>
         
         <Stack direction="row"  sx={{ alignItems:'center',marginTop:'2vh',left:'3vh'}}>
        
           <p style={{fontSize:'small', color:'black',textAlign:'center',marginRight:'1vh'}}>שמירת חיפוש </p>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }}  onClick={SaveSearching} />}/>
          
           
        </Stack>
        
        <Divider orientation="vertical" variant="middle" flexItem sx={{height:'5vh'}} />

          
          <Button variant="contained" endIcon={<TuneIcon />}  sx={{bgcolor:'white',height:'5vh',width:'20vh', border:'2px solid #14C17B'}} onClick={OpenOthers}>
             מסננים נוספים
          </Button>
          
          
          
         
          <Button variant="contained" endIcon={<ChaletIcon />}  sx={{bgcolor:'white',height:'5vh',width:'20vh',  border:'2px solid #14C17B'}}  onClick={OpenPropchar}>
             מאפיני נכס
          </Button>
          <Button variant="contained" endIcon={<MapsHomeWorkIcon />}  sx={{bgcolor:'white',height:'5vh',width:'20vh',border:'2px solid #14C17B'}}  onClick={OpenPropType}>
             סוג נכס
          </Button>
          <Button variant="contained" endIcon={<BedIcon />}  sx={{bgcolor:'white',height:'5vh',width:'20vh',border:'2px solid  #14C17B'}}  onClick={OpenRoom}>
             חדרים
          </Button>
          <Button variant="contained" endIcon={<LocalOfferIcon />}  sx={{bgcolor:'white',height:'5vh',width:'20vh',border:'2px solid #14C17B'}}  onClick={OpenPrice}>
             מחיר
          </Button>
     </Stack>
       
        </Stack>   
       </AppBar>
      {isDeleteSearching&&<p className='saveSearching'>חיפוש זה נמחק אולי כבר מצאתם דירה?</p>}
      { isSaveSearching&&<div className='saveSearching'> נשמר בהצלחה! מעכשיו אתם הראשונים לדעת</div>}
      {isOpenPrice&&props.filters.close? (<div  className='price'><PriceFilter  element={SendPrice}/></div>):(null)}
      {isOpenRoom&&props.filters.close?( <div className='room'><RoomFilter element={SendRoom}/></div>):(null)}
      {isOpenPropType&&props.filters.close?(<div className='type'><PropTypeFilter  element={SendFilterType}/></div>):(null)}
      {isOpenPropchar&&props.filters.close? (<div className='char'><PropCharFilter element={SendChar}/></div>):(null)}
      {isOpenOthers&&props.filters.close?(<div className='other'><OtherFilters element={SendOther}/></div>):(null)}
     </Box>    
      

       
      
  
           
      
    
    
          
         
      
        
 
  )
}