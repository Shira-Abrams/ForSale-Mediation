import React, { useEffect, useState } from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { json } from 'react-router-dom';


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
    const sm = [{value: 0,label: 'דירה',}, {value: 1,label: 'בית פרטי', },{value:2,  label: 'דירת גן',}, { value: 3, label: 'קוטג',    },{ value: 4, label: 'דו משפחתי',},

 { value: 5,label: 'פנטאהוז',},{ value: 6, label: 'דירת גג'}, {value: 7, label: ' שטח חקלאי',}, { value: 8, label: 'דופלקס',}, {value: 9,  label: 'מגרש ',}, {  value: 10,label: 'בינין',}  ];

 const currencies = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
        value: 5,
        label: '5',
      }, {
        value: 6,
        label: '6',
      }, 
      {
        value: 7,
        label: '7',
      },
      {
        value: 8,
        label: '8',
      }, {
        value: 9,
        label: '9',
      }, {
        value: 10,
        label: '10',
      }, {
        value: 11,
        label: '11',
      }, {
        value: 12,
        label: '12',
      }, {
        value: 13,
        label: '13',
      }, {
        value: 14,
        label: '14',
      }
  ];
export default function UploadPropType({savSend,isSave}) {
    const [value, setValue] = React.useState(options[0]);
    const [inputValue, setInputValue] = React.useState('');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);
    const [anchorElf1, setAnchorElf1] = React.useState(null);
    const [selectedOptionf1, setSelectedOptionf1] = React.useState(null);
    const [anchorElf2, setAnchorElf2] = React.useState(null);
    const [selectedOptionf2, setSelectedOptionf2] = React.useState(null);
    const[floor,setFloor]=React.useState({from:0,until:0})
     const [propertyType,setPropertyType]=useState({
      PropertyType:null,
      Sm:null,
      NumRoom:null,
      Floor:null,
      AllFloor:null,
      EntrcyDate:null,
      PropertyPrice:null,
      PriceForSm:null
     }); 
     const jsonObject=JSON.stringify(propertyType)
     localStorage.setItem('propType',jsonObject)
    const[roomVariant,setRoomVariant]=useState(['outlined','outlined','outlined','outlined','outlined','outlined']);
    const [price,setPrice]=useState('');
    const [sms,setSms]=useState('')
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = (option) => {   
         setAnchorEl(null);
       if(option)
       {
        setSelectedOption(option)
        setPropertyType({...propertyType,PropertyType:option.value})
        const jsonObject=JSON.stringify(propertyType)
        localStorage.setItem('propType',jsonObject)
        console.log(' at handleClose tha value is :',option.value)
        console.log(' at handleClose tha PropertyType  is :',propertyType)

       }
        
      }

      const handleClickf2 = (event) => {
        setAnchorElf2(event.currentTarget);
      };
    
      const handleClosef2 = (option) => {
       
       
        setAnchorElf2(null);
        if(option)
        {
          if (selectedOptionf1) {
            if(option.value<selectedOptionf1.value)
            { 
             
              console.log('at handleClosef2 if',option.value,selectedOptionf1.value);
              setSelectedOptionf1(option);
              setSelectedOptionf2(option);
              setFloor({from:option.value,until:option.value})
              setPropertyType({...propertyType,Floor:option.value,AllFloor:option.value})
              const jsonObject=JSON.stringify(propertyType)
              localStorage.setItem('propType',jsonObject)
               console.log('at change all floor the property type is :' ,propertyType);
              console.log(floor);
            }
            else{
              console.log('at handleClosef2 else');
              setSelectedOptionf2(option);
              setFloor({...floor,until:option.value})
              setPropertyType({...propertyType,AllFloor:option.value})
              const jsonObject=JSON.stringify(propertyType)
              localStorage.setItem('propType',jsonObject)
              console.log('else1 change all floor the property type is :' ,propertyType);
              console.log(floor);
            }
            
          }
          else{
            setSelectedOptionf2(option);
            setFloor({...floor,until:option.value})
            setPropertyType({...propertyType,AllFloor:option.value})
            const jsonObject=JSON.stringify(propertyType)
            localStorage.setItem('propType',jsonObject)
              console.log('else2 change all floor the property type is :' ,propertyType);
            console.log(floor);
          }
        }
           
      };
      
      const handleClickf1 = (event) => {
        setAnchorElf1(event.currentTarget);
      };
    
      const handleClosef1 = (option) => {
        
        setAnchorElf1(null);
        if(option)
        {
          if (selectedOptionf2) {
            console.log('at handleClosef1',option.value,selectedOptionf2.value);
            if(option.value>selectedOptionf2.value)
            { 
              console.log(option,selectedOptionf2.value);
              console.log('at handleClosef1 if');
               setSelectedOptionf1(option);
               setSelectedOptionf2(option);
               setPropertyType({...propertyType,Floor:option.value,AllFloor:option.value})
               const jsonObject=JSON.stringify(propertyType)
               localStorage.setItem('propType',jsonObject)
               setFloor({from:option.value,until:option.value})
               console.log(floor);
               console.log(' if at change floor  propertytype:',propertyType);

            }
            else{
              console.log('at handleClosef1 else');
              setSelectedOptionf1(option);
              setPropertyType({...propertyType,Floor:option})
              const jsonObject=JSON.stringify(propertyType)
              localStorage.setItem('propType',jsonObject)
              setFloor({...floor,from:option.value})
              console.log(floor);
              console.log(' else1 at change floor  propertytype:',propertyType);

             }  
         }
          else{
          setSelectedOptionf1(option);
          setFloor({...floor,from:option.value})
          setPropertyType({...propertyType,Floor:option.value})
          const jsonObject=JSON.stringify(propertyType)
          localStorage.setItem('propType',jsonObject)
          console.log(floor);
          console.log(' else2 at change floor  propertytype:',propertyType);

          
          }
        }
       };     
       const SaveSm=(event)=>{
        let s=event.target.value;
        let ns;
         const regex =/^\d+$/;
         if(regex.test(s))
         {
             setSms(s)
             ns=Number(s)
             setPropertyType({...propertyType,Sm:ns})
             const jsonObject=JSON.stringify(propertyType)
             localStorage.setItem('propType',jsonObject)
             console.log('at SaveSm the sm is' ,s);
             console.log('at SaveSm the property is',propertyType);
         }
         else{
          setSms(sms)
         }
       
       }
       const SetRoom=(index)=>{
        setPropertyType({...propertyType,NumRoom:index}) 
        const jsonObject=JSON.stringify(propertyType)
        localStorage.setItem('propType',jsonObject)
        console.log('the vlue is :', index);
        console.log('at SetRoom the property is settin now is ' ,propertyType); 
        let tempRoom=[...roomVariant]
            for (let i = 0; i < tempRoom.length; i++) {
                 tempRoom[i]='outlined'
             }  
           
            tempRoom[index-1]='contained'
            setRoomVariant(tempRoom);
       }


     const SetEntraceDate=(event)=>{
      console.log('SetEntraceDate ',event.target.value);
        setPropertyType({...propertyType,EntrcyDate:event.target.value})
        const jsonObject=JSON.stringify(propertyType)
        localStorage.setItem('propType',jsonObject)

        console.log('at SetEntraceDate the property type is :',propertyType );
    }

    const SavePrice=(event)=>{
      let p=event.target.value
      let np;
      const regex =/^\d+$/;
      if(regex.test(p))
      {
        setPrice(p)
        np=Number(p)
        setPropertyType({...propertyType,PropertyPrice:np,PriceForSm:np/propertyType.Sm})
        const jsonObject=JSON.stringify(propertyType)
        localStorage.setItem('propType',jsonObject)
        console.log('at SavePrice the property type is :',propertyType);
      }
      else{
         setPrice(price)
      }
        
       
        console.log('at SetPrice the value is :', price);
        setPropertyType({...propertyType,PropertyPrice:price})
        const jsonObject=JSON.stringify(propertyType)
        localStorage.setItem('propType',jsonObject)
    }
     
  return (
<div style={{direction:'rtl'}}>
   <Typography textAlign="right" sx={{color:'black'}}> פרטי הנכס</Typography>

   <div  style={{margin:'3vh'}}>
   <Typography textAlign="right" sx={{color:'black'}}>סוג הנכס</Typography>
    <TextField
        id="filled-select-currency-native"
        onClick={handleClick}
        value={selectedOption ? selectedOption.label : 'הכל'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
          style:{
            height:'5vh'
          }
        }}
        sx={{maxWidth:'20vh',direction:'rtl'}}
  />
  
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        PaperProps={{
          style: {
            maxHeight: 200, 
            overflowY: 'auto',
          },
        }}
      >
        {sm.map((option) => (
          <MenuItem key={option.label} onClick={() => handleClose(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
   </div>
   <Divider  flexItem variant="middle" sx={{width:'50%'}}/>

      <div style={{margin:'3vh'}}>
      <Typography textAlign="right" sx={{color:'black'}}>שטח במ"ר</Typography>
      <TextField
        value={sms}
          id="outlined-required"
          placeholder='סה"כ שטח'
          // sx={{width:'20vh'}}
          onChange={SaveSm}
          inputProps={{style:{
            height:'1vh',
            width:'17vh'

          }}}
       />    
      </div>
      
<Divider  flexItem variant="middle" sx={{width:'50%'}}/>
 <div style={{direction:'rtl',margin:'3vh'}}>
 <Typography textAlign="right" sx={{color:'black'}}> מס חדרים</Typography>
   <Stack spacing={1} direction="row" sx={{marginTop:'2vh',direction:'rtl'}}>
   <Button variant={roomVariant[0]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(1)} >1 </Button>
   <Button variant={roomVariant[1]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(2)}>2</Button>
   <Button variant={roomVariant[2]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(3)}>3</Button>
   <Button variant={roomVariant[3]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(4)}>4</Button>
   <Button variant={roomVariant[4]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(5)}>5</Button>
   <Button variant={roomVariant[5]} size='big'   sx={{borderRadius:'50%',minWidth:0}} onClick={()=>SetRoom(6)}>+6</Button>
   </Stack>
 </div>
 <Divider  flexItem variant="middle" sx={{width:'50%'}}/>
 <div style={{direction:'rtl',margin:'3vh'}}>
 <Typography textAlign="right" sx={{color:'black'}}>קומה</Typography>

    <Stack direction='row' spacing='1vh' sx={{marginTop:'2vh'}}>
    <TextField
        id="filled-select-currency-native"
        onClick={handleClickf1}
        value={selectedOptionf1 ? selectedOptionf1.label : ' מקומה'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
          style:{
            height:'5vh',
            width:'17vh'
          }
        }}
        sx={{maxWidth:'25vh'}}
        defaultValue={7}

      />
      <Menu
        anchorEl={anchorElf1}
        open={Boolean(anchorElf1)}
        onClose={() => handleClosef1(null)}
        PaperProps={{
          style: {
            maxHeight: 200, // Adjust the maximum height as needed
            overflowY: 'auto',
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.label} onClick={() => handleClosef1(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>  
       <p style={{textAlign:'center',margin:'2vh'}}>מתוך</p>


       <TextField
        id="filled-select-currency-native"
        onClick={handleClickf2}
        value={selectedOptionf2 ? selectedOptionf2.label :'עד קומה'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
          style:{
            height:'5vh',
            width:'17vh'
          }
        }}
        sx={{maxWidth:'25vh'}}
      />
      <Menu
        anchorEl={anchorElf2}
        open={Boolean(anchorElf2)}
        onClose={() => handleClosef2(null)}
        PaperProps={{
          style: {
            maxHeight: 200, // Adjust the maximum height as needed
            overflowY: 'auto',
          },
        }}
      >
        {currencies.map((option) => (
          <MenuItem key={option.label} onClick={() => handleClosef2(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>

    </Stack>
 </div>
 <Divider  flexItem variant="middle" sx={{width:'50%'}}/>

  <div style={{direction:'rtl',margin:'3vh'}}>
  <Typography textAlign="right" sx={{color:'black'}}>תאריך כניסה</Typography>

  <FormControl sx={{direction:'rtl',marginTop:'2vh'}}>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value={0} control={<Radio />} label="מיידי" onClick={SetEntraceDate}/>
        <FormControlLabel value={2} control={<Radio />} label="גמיש"  onClick={SetEntraceDate}/>
        <FormControlLabel value={1} control={<Radio />} label="עתידי" onClick={SetEntraceDate}/>
      </RadioGroup>
    </FormControl>
  </div>
    
  <Divider  flexItem variant="middle" sx={{width:'50%'}}/>

  <div style={{direction:'rtl',margin:'3vh'}}>
  <Typography textAlign="right" sx={{color:'black'}}> מחיר מבוקש (₪)</Typography>


      <FormControl  sx={{ m: 1 ,marginTop:'2vh'}}>
          <OutlinedInput
            value={price}
            id="outlined-adornment-amount"
            onChange={SavePrice}
            startAdornment={<InputAdornment position="start">₪</InputAdornment>}
            inputProps={{style:{
                height:'1vh',
                width:'17vh'
    
              }}}
          />
        </FormControl>
   </div>
 

    
 
</div>  
       
     )
}
