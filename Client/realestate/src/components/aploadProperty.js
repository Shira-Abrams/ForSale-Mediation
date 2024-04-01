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
import UploadImage from './uploadImage';
import { number } from 'yup';
import { useContext } from 'react';
import { MyContext } from './context.js';
import { useDispatch, useSelector } from "react-redux";
import { AddProperty } from '../redux/PropertySlice.js';

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
 

export const AploadProperty=({children})=> {
    const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(1);
  const [leavingvariant,setLeavingvariant]=useState('outlined')
  const [comertialVariant,setComertialVariant]=useState('outlined')
  const [saleVariant,setSaleVariant]=useState('outlined');
  const [rentVariant,setRentVariant]=useState('outlined');
  const [currentStage,setCurrentStage]=useState(0);
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');
  const [isSaveType,setIsSaveType]=useState(false)
  const dispatch=useDispatch();
  //const [char,setChar]=useState(useContext(MyContext))
  //let cc = useContext(MyContext);
 let charp=localStorage.getItem('charProperty');
 let convertChar=JSON.parse(charp);
  const [property,setProperty]=useState({
    CityId:null,
    UserId:1,
    PropertyStatus:null,
    OfferingStatus:'',
    Adress:null,
    Sm:null,
    Parkinglot:null,
    Elivator:null,
    Aircondition:null,
    Basmsent:null,
    SafeRoom:null,
    DisabledAcces:null,
    Bars:null,    
    PorchGarden:null,
    PropertyType:null,
    PropertyPrice:null,
    PropertyCondition:null,
    PriceForSm:null,
    Floor:null,
    AllFloor:null,
    NumRoom:null,
    NumBlock:null,
    NumEvenue:null,
    EntrcyDate:null,
    BuildingYear:null,
    PropertyDesctiption:null,
    Furniture:null,
    IsCommercial:null,
    FileImageList:null
   });
 const propType=localStorage.getItem('propType')
  const convertPropType=JSON.parse(propType)

  const imagesUp=localStorage.getItem('image_list')
  //const convertImageUp=JSON.parse(imagesUp)
const Leaving=()=>{
    setLeavingvariant('contained');
    setComertialVariant('outlined');
    setProperty({...property,IsCommercial:false})
    console.log('atLeaving property is : ', property);

   }

const Comertial=()=>{
  setLeavingvariant('outlined');
  setComertialVariant('contained')
  setProperty({...property,IsCommercial:true})
  console.log('atLeaving property is : ', property);

 }
 const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setCurrentStage((prevActiveStep) => prevActiveStep + 1)
    if(activeStep===4)
        SaveType(convertPropType)
    if(activeStep===5)
    SavePropChar();
     if(activeStep===6)
     SaveImage()
    if(activeStep===7)
    SendAllProperty()
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setCurrentStage((prevActiveStep) => prevActiveStep - 1)
  };
  
  const SetSale=()=>{
    setSaleVariant('contained');
    setRentVariant('outlined');
    setProperty({...property,PropertyStatus:0})
    console.log('at SetSale the property is :', property);

  }
  const SetRent=()=>{
    setSaleVariant('outlined');
    setRentVariant('contained');
    setProperty({...property,PropertyStatus:1})
    console.log('at SetRent the property is :', property);


  }
 const SetCity =(event)=>{
     let cityIndex=options.findIndex(x=>x===event)
    setProperty({...property,CityId:options[cityIndex]})
 } 
 const SetAdres =(event)=>{
  const regex =/^\d+$/;
   if(!regex.test(event.target.value))
    setProperty({...property,Adress:event.target.value})
    console.log('at SetAdres  the property is :' ,property);
  // else
  // setProperty({...property,Adress:''})

 }
 const SaveType=(obj)=>{
     setProperty({...property,
      PropertyPrice:obj.PropertyPrice,
      EntrcyDate:obj.EntrcyDate,
      AllFloor:obj.AllFloor,
      Floor:obj.Floor,
      NumRoom:obj.NumRoom,
      Sm:obj.Sm,
      PropertyType:obj.PropertyType,
      PriceForSm:obj.PriceForSm
     }) 
     console.log('obj =',obj);
  console.log('at save type  hte property now is : ', property);
}

const SavePropChar=()=>{
  console.log('  at SavePropChar charProperty= ',convertChar); 
  
  setProperty({
   ...property,
    Parkinglot:convertChar.Parkinglot,
    Elivator:convertChar.Elivator,
    Aircondition:convertChar.Aircondition,
    Basmsent:convertChar.Basmsent,
    SafeRoom:convertChar.SafeRoom,
    DisabledAcces:convertChar.DisabledAcces,
    Bars:convertChar.Bars,    
    PorchGarden:convertChar.PorchGarden,
    PropertyCondition:convertChar.PropertyCondition,
    BuildingYear:convertChar.BuildingYear,
    Furniture:convertChar.Furniture,
    PropertyDesctiption:convertChar.PropertyDesctiption
  
   })
  console.log('at SavePropChar  property = ',property);
}
const SaveImage=()=>{
    console.log('imagesUp=',imagesUp);
    setProperty({...property,FileImageList:imagesUp})
    console.log('at SaveImage property is =',property);

}


const SendAllProperty=()=>{
  console.log('at SendAllProperty the property how is sent do redux is =' ,property);
  const formData = new FormData();
  formData.append('CityId',property.CityId)
  formData.append('Adress',property.Adress)

  formData.append('Aircondition',property.Aircondition)
  formData.append('AllFloor',property.AllFloor)
  formData.append('Bars',property.Bars)
  formData.append('Basmsent',property.Basmsent)
  formData.append('BuildingYear',property.BuildingYear)
  formData.append('DisabledAcces',property.DisabledAcces)
  formData.append('Elivator',property.Elivator)
  formData.append('EntrcyDate',property.EntrcyDate)
  formData.append('FileImageList',property.FileImageList)
  formData.append('Floor',property.Floor)
  formData.append('Furniture',property.Furniture)
  formData.append('IsCommercial',property.IsCommercial)
  formData.append('NumBlock',property.NumBlock)
  formData.append('NumEvenue',property.NumEvenue)
  formData.append('NumRoom',property.NumRoom)
  formData.append('OfferingStatus',property.OfferingStatus)
  formData.append('Parkinglot',property.Parkinglot)
  formData.append('PorchGarden',property.PorchGarden)
  formData.append('PriceForSm',property.PriceForSm)
  formData.append('PropertyCondition',property.PropertyCondition)
  formData.append('PropertyDesctiption',property.PropertyDesctiption)
  formData.append('PropertyPrice',property.PropertyPrice)
 formData.append('PropertyStatus',property.PropertyStatus)
 formData.append('PropertyType',property.PropertyType)
 formData.append('SafeRoom',property.SafeRoom)
 formData.append('Sm',property.Sm)
  dispatch(AddProperty(formData))
}

  const stage1=<div><Stack spacing={'4vh'} sx={{height:'100%'}}>
  <Typography variant="h5"  textAlign="right" sx={{color:'black'}}>בואי נתחיל באיזה לוח אתם רוצים לפרסם</Typography>
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
  <Typography variant="h5" textAlign="right" sx={{color:'black'}}>?מוכרים או משכירים</Typography>
  <div style={{display:'flex',justifyContent:'center'}}>
  <Stack  direction='row' spacing={2}>
    <Button width='30vh' variant={rentVariant} onClick={SetRent}   sx={{width:'30vh'}}>משכירים</Button>
    <Button width='30vh' variant={saleVariant} onClick={SetSale} sx={{width:'30vh'}}>מוכרים</Button>

  </Stack>
  </div>
  </Stack>
  </div>

const stage3=<div>
  <Typography variant="h5" textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>כתובת הנכס</Typography>
  <Typography variant="h6" textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>עיר</Typography>

  <Toolbar sx={{marginRight:0,direction:'rtl'}}>
     <Autocomplete
       value={options[property.CityId]}
       onChange={(event, newValue) => {
         setValue(newValue);
         let cityIndex=options.findIndex(x=>x===newValue)
         setProperty({...property,CityId:cityIndex})
         console.log('at city autocomplete',property);
       }}
       inputValue={inputValue}
       onInputChange={(event, newInputValue) => {
         setInputValue(newInputValue);
       }}
       id="controllable-states-demo"
       options={options}
       sx={{ width:'20vh' ,direction:'ltr',
      }}
       renderInput={(params) => <TextField {...params} label="" 
       />}
      /> 
  </Toolbar> 
  <div style={{direction:'rtl',marginBottom:'2vh'}}>
  <Typography variant="h6" textAlign="right" sx={{color:'black',marginBottom:'2vh'}}>רחוב </Typography>
  <TextField
          value={property.Adress}
          id="outlined-required"
          onChange={SetAdres}
          placeholder="רחוב ודירה"
          inputProps={{style:{
            height:'1vh',
            width:'17vh',
            direction:'rtl',
            

          }}}
        />
  </div>
  

  <Typography variant="h5" fontSize='2.5vh' mt={2} textAlign="right" sx={{color:'black'}}>רישום בטאבו</Typography>
  <Typography textAlign="right" sx={{color:'black'}}>אם ידוע לך, אפשר למלא גם גוש וחלקה</Typography>
  <div style={{display:'flex',flexDirection:'row',padding:'2vh',direction:'rtl'}} >
  <div style={{marginLeft:'2vh'}}>
    <TextField
          type='number'  
          value={property.NumBlock}
          id="outlined-required"
          onChange={(event)=>{
            if(event.target.value>0)
             setProperty({...property,NumBlock:event.target.value})
             console.log('at change NumBlock the value is ',event.target.value);
             console.log('at change NumBlock the property is ',property);

          }}
          placeholder="גוש"
          inputProps={{style:{
            height:'1vh',
            width:'17vh',

          }}}
        />
    </div>
    <div>
    <TextField
          value={property.NumEvenue}
          type='number'
          onChange={(event)=>{
             if(event.target.value>0)
             setProperty({...property,NumEvenue:event.target.value})

          }}
          id="outlined-required"
          placeholder="חלקה"
          inputProps={{style:{
            height:'1vh',
            width:'17vh',

          }}}
    />
    </div>
        
  </div>

</div>
const stage7=<div style={{direction:'rtl'}}>
 <Typography textAlign="right" sx={{color:'black',marginBottom:'2vh'}}> פרטי התקשרות</Typography>
 <Typography textAlign="right" sx={{color:'black', marginBottom:'1vh'}}> שם מלא</Typography>

<TextField
         
          id="outlined-required"
          inputProps={{style:{
            height:'1vh',
            width:'17vh',

          }}}
       />  
       
       <Typography textAlign="right" sx={{color:'black',marginTop:'2vh',marginBottom:'2vh'}}>  טלפון</Typography>
 <TextField
          id="outlined-required"
          // sx={{width:'20vh'}}
          inputProps={{style:{
            height:'1vh',
            width:'17vh'

          }}}
       />  
       
</div>
const stage8=<div>
  <div style={{textAlign:'center',fontSize:'3vh'}}>המדועה מוכנה לפרסום בלחיצה על אישור פרטי הדירה יהיהו נגישים לכולם</div>
 
   <div style={{textAlign:'center',fontSize:'4vh'}}>      להמשך לחצו על הבא </div>


</div>
const AllStage=[stage1,stage2,stage3,<UploadPropType isSave={isSaveType} savSend={SaveType}></UploadPropType>,<UploadOtherChar></UploadOtherChar>,<UploadImage/>,stage7,stage8]

  return (
    <>


 <div style={{width:'100%',minHeight:'100%'}}>
    <div   style={{marginTop:'10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}>
      <div style={{width:'60%',height:'110%'}}>
             
      <Typography textAlign="right" sx={{color:'black'}}>  העלאת דירה . שלב {activeStep} מתוך 8</Typography>
      <MobileStepper
          variant="progress"
          steps={9}
          position="static"
          activeStep={activeStep}
          sx={{width:'100%',justifyContent:'right',
          '& .MuiMobileStepper-progress': {
            transform: 'scaleX(-1)', // Flip the progress indicator horizontally
            marginBottom:'2vh'
          }
        
        }}
           
     />
     <div style={{height:'100%',width:'100%'}}> {AllStage[activeStep-1]}</div>
   </div>
   </div>

 </div>
    {/* footer */}

  
   
 <div style={{position:'sticky',bottom:0,height:'15vh',boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)',width:'100%',justifyContent:'center',display:'flex',backgroundColor:'white',marginBottom:0,position:'fixed'}}>
      <div  style={{display:'flex',justifyContent:'space-between',flexDirection:'row',width:'60%',height:'100%',direction:'rtl',position:'relative'}}>
      <Button size="big" onClick={handleBack} disabled={activeStep === 1}>
          {theme.direction === 'ltr' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          קודם
        </Button>
        
        {activeStep===8?(<Button size="big"  > 
        אישור
      
      </Button>
       ) : (<Button size="big" onClick={handleNext} disabled={activeStep === 8}> 
       הבא
       {theme.direction === 'ltr' ? (
         <KeyboardArrowLeft />
       ) : (
         <KeyboardArrowRight />
       )}
     </Button>
      )}
  </div>
 </div> 
  <div  style={{height:'15vh'}}></div>      
  </>


    
   
 
 

   

    
   
   
       
    
   




 
   

    
 
     
  
   
    

    
      
  
    
  )
}
