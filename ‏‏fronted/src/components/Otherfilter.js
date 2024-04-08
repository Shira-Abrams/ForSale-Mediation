import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { OpacityTwoTone, OpenInBrowser, PollTwoTone } from '@mui/icons-material';
import { number } from 'yup';

// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//   option: {
//     minHeight: '30px', // Set the minimum height for each option
//     overflow: 'auto', // Add a scrollbar when the content exceeds the height
//   },
// });
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
  const sm=[ {value: 10,label: '10',},{value: 20,label: '20',},{value: 30,label: '30',},{value: 40,label: '40',},{value: 50,label: '50',},{value: 60,label: '60',},{value: 70,label: '70',},{value: 80,label: '80'},{value: 90,label: '90',},{value: 100,label: '100',},
             {value: 110,label: '110',},{value: 120,label: '120',}, {value: 130,label: '130',},{value: 140,label: '140',}, {value: 150,label: '150',},{value: 160,label: '160',},{value: 170,label: '170',},{value: 180,label: '180',}, {value: 190,label: '190',},{value: 200,label: '200',}
 ];
    
    
  
 
 
const OtherFilters=(props)=>{
  
    const[propCondition,setPropCondition]=React.useState([false,false,false,false,false])
    const[area,setArea]=React.useState({from:0,until:0})
    const[floor,setFloor]=React.useState({from:0,until:0})
    const[otherCondition,setOtherCondition]=React.useState({
       'propCondition': propCondition,
       'area':area,
       'floor': floor
    }
     
     )
   

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedOption, setSelectedOption] = React.useState(null);


    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const [selectedOption2, setSelectedOption2] = React.useState(null);


    const [anchorElf1, setAnchorElf1] = React.useState(null);
    const [selectedOptionf1, setSelectedOptionf1] = React.useState(null);

    const [anchorElf2, setAnchorElf2] = React.useState(null);
    const [selectedOptionf2, setSelectedOptionf2] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = (option) => {
      setAnchorEl(null);
      if(option)
      {
        if (selectedOption2) {
         
          if(option.value<selectedOption2.value)
          {  

            console.log('handleClose good value',option.value,selectedOption2.value);
            setSelectedOption(option)
            setArea({...area,from:option.value})
            console.log('ares:',area);
         }  
           if(option.value>selectedOption2.value)
            {
              setArea({until:option.value,from:option.value})
              console.log('handleClose else bigger value',option.value,'>',selectedOption2.value);
              setSelectedOption(option);
              setSelectedOption2(option);
              console.log('ares:',area);
            }  
        }   
        else{
      
          setSelectedOption(option)
          setArea({...area,from:option.value})
          console.log('ares:',area);
  
        }         
         
          
         
      } 
    };    
          
          
         
        
       
      
     
   
//--------------------------------------------
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
  
    const handleClose2 = (option) => {
      setAnchorEl2(null);
      if(option)
      {
        if (selectedOption) {
          if(option.value>selectedOption.value)
          {  
             console.log('handleClose2 apropriate value',selectedOption.value,option.value);
            setSelectedOption2(option);
            setArea({...area,until:option.value})
            console.log('ares:',area);
         }
          if(option.value<selectedOption.value)
            {
              setArea({from:option.value,until:option.value})
               console.log('handleClose2 smaller value',option.value,'<',selectedOption.value);
               setSelectedOption(option);
               setSelectedOption2(option);
               console.log('area:',area);
              
            }  
          else{
             console.log('handleClose selectedOption undefined');
            setSelectedOption2(option);
            setArea({...area,until:option.value})
            console.log('ares:',area);
          }    }
           
        }   
     };     
            
           
          
         
        
        
        
          
        
      
     
   
   ///////////////////////////////////////////////////////

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
           setFloor({from:option.value,until:option.value})
           console.log(floor);
           
        }
        else{
          console.log('at handleClosef1 else');
          setSelectedOptionf1(option);
          setFloor({...floor,from:option.value})
          console.log(floor);
          
         }  
     }
      else{
      setSelectedOptionf1(option);
      setFloor({...floor,from:option.value})
      console.log(floor);
      }
    }
   };     
  
    
     
  
    
 
  
  //------------------------
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
          console.log(floor);
        }
        else{
          console.log('at handleClosef2 else');
          setSelectedOptionf2(option);
          setFloor({...floor,until:option.value})
          console.log(floor);
        }
        
      }
      else{
        setSelectedOptionf2(option);
        setFloor({...floor,until:option.value})
        console.log(floor);
      }
    }
       
  };

    const SendOtherFilter=()=>{
        const c={
          'propCondition': [...propCondition],
          'area':{...area},
          'floor': {...floor}
        }
        console.log('at SendOtherFilter object :',c);
       setOtherCondition([[...propCondition], {...area},  {...floor}])
        props.element(propCondition,area,floor)
    }
        
         

    const Cleacnall=()=>{
      
    }
    const SetPropConditonArray=(index)=>{
        let temparr=[...propCondition];
        temparr[index]=true;
        setPropCondition([...temparr]);
    }
    return(
        <>
         <h3 style={{color:'black',textAlign:'right',marginRight:'1vh'}}>מצב הנכס</h3>

          <FormGroup style={{direction:'rtl'}}>
          <FormControlLabel sx={{color:'black'}} control={<Checkbox />} label="חדדש מהקבלן" onClick={()=>SetPropConditonArray(0)}/>
          <FormControlLabel sx={{color:'black'}} control={<Checkbox />} label="חדש" onClick={()=>SetPropConditonArray(1)}/>

          <FormControlLabel sx={{color:'black'}} control={<Checkbox />} label="משופץ" onClick={()=>SetPropConditonArray(2)}/>
          <FormControlLabel sx={{color:'black'}} control={<Checkbox />} label="שמור" onClick={()=>SetPropConditonArray(3)}/>
          <FormControlLabel sx={{color:'black'}} control={<Checkbox />} label="ישן" onClick={()=>SetPropConditonArray(4)}/>

           </FormGroup>
           <h3 style={{color:'black',textAlign:'right',marginRight:'1vh'}}> שטח במ"ר</h3>
 <Stack direction='row' sx={{justifyContent:'center',margin:'3vh',}}>

     <TextField
        id="filled-select-currency-native"
        onClick={handleClick2}
        value={selectedOption2 ? selectedOption2.label : 'הכל'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
        }}
        sx={{maxWidth:'18vh'}}
      />
      <Menu
        anchorEl={anchorEl2}
        open={Boolean(anchorEl2)}
        onClose={() => handleClose2(null)}
        PaperProps={{
          style: {
            maxHeight: 200, // Adjust the maximum height as needed
            overflowY: 'auto',
          },
        }}
      >
        {sm.map((option) => (
          <MenuItem key={option.label} onClick={() => handleClose2(option)}>
            {option.label}
          </MenuItem>
        ))}
      </Menu>
      <div style={{color:'gray',fontSize:'4vh',width:'5vh',textAlign:'center'}}>_</div>


      <TextField
        id="filled-select-currency-native"
        onClick={handleClick}
        value={selectedOption ? selectedOption.label : 'הכל'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
        }}
        sx={{maxWidth:'18vh'}}
      />
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => handleClose(null)}
        PaperProps={{
          style: {
            maxHeight: 200, // Adjust the maximum height as needed
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

      </Stack>

      <h3 style={{color:'black',textAlign:'right',marginRight:'1vh'}}>קומה</h3>
 <Stack direction='row' sx={{justifyContent:'center',margin:'3vh',}}>

 <TextField
        id="filled-select-currency-native"
        onClick={handleClickf2}
        value={selectedOptionf2 ? selectedOptionf2.label :'עד קומה'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
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
      <div style={{color:'gray',fontSize:'4vh',width:'5vh',textAlign:'center'}}>_</div>


      <TextField
        id="filled-select-currency-native"
        onClick={handleClickf1}
        value={selectedOptionf1 ? selectedOptionf1.label : ' מקומה'}
        variant="outlined"
        InputProps={{
          endAdornment: <ArrowDropDownIcon />,
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
      </Stack>
      <Divider component="li"  variant="middle"/>

<Stack direction='row' spacing={20}>
<Button variant="text" sx={{width:'15vh'}} onClick={Cleacnall}>נקה הכל</Button>
<Button variant="text"   sx={{width:'15vh'}} onClick={SendOtherFilter}>בחר</Button>
</Stack>


              </>
          )
      }
      
      
export default OtherFilters