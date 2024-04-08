import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from 'axios'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../cssomponents/PropertyDetail.css'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ElevatorIcon from '@mui/icons-material/Elevator';
import BalconyIcon from '@mui/icons-material/Balcony';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import AccessibleIcon from '@mui/icons-material/Accessible';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import StairsIcon from '@mui/icons-material/Stairs';
import BedIcon from '@mui/icons-material/Bed';
import CropIcon from '@mui/icons-material/Crop';
import Divider from '@mui/material/Divider';
import SellIcon from '@mui/icons-material/Sell';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper React components

// Import Swiper styles
// import "swiper/css";
// import 'swiper/css/free-mode';
// import 'swiper/css/navigation';
//  import 'swiper/css/thumbs';

// import {Swiper, SwiperSlide} from 'swiper/react'
// import 'swiper/css'
import { FreeMode, Thumbs,Navigation, Controller  } from 'swiper/modules';
// import required 
// import {FreeMode} from 'swiper';
// import { navigation, Thumbs} from 'swiper'
// import Swiper, { FreeMode, Navigation, Thumbs } from "swiper";
//  import FreeMode from 'swiper'
//  import Navigation from 'swiper'
//  import Thumbs from 'swiper'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

//import "./styles.css";

// import required modules
//import { FreeMode, Navigation, Thumbs } from "swiper/modules";


export default function PropertyDetails() {   
    const [imageFileList, setimageFileList] = useState([])
     const [iconColors, setIconColors] = useState([]); // Assuming 10 icons initially
    const [currentIndex, setcurrentIndex] = useState(0)
    const [conect,setConect]=useState('להצגת מספר הטלפון');
    const [variantConect,setVariantConect]=useState('outlined');
    const property=useSelector(state=>state.properties.propertyDetails);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const propType=['דירה','בית פרטי','דירת גן','קוטג','דו משפחתי','פנטהאוז','דירת גג','שטח חקלאי','דופלקס','מגרש','בינין']
     const sfp=property.priceForSm|0
   console.log('at property detail',property);
    const LeftArrowStyle = {
        position: 'absolute',
        top: '42%',
        transform: 'translate(0,-50%)',
        left: '70vh',
        fontSize: '3vh',
        cursor: 'pointer',
        color: 'white'
      }
    
      const RightArrowStyle = {
        position: 'absolute',
        top: '42%',
        transform: 'translate(0,-50%)',
        right: '70vh',
        fontSize: '3vh',
        cursor: 'pointer',
        color: 'white'
      }

      const dotsContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        zIndex: '0',
        position: 'absolute',
        top: '56%',
        left: '50%',
        right:'50%',
      }
      
     const imageList=property.imageUrlList
    useEffect(()=>{
        let imgfile=[];
        let tempcolor=[]
    for (let image of imageList) {
      
      axios.get(`https://localhost:7076/api/Property/getImage/${image}`).then(
        res => {
          imgfile.push(res.data)
          setimageFileList([...imgfile])
        }  
      )  
      tempcolor.push('white');
    }
    tempcolor[0]='#14C17B';
    setIconColors(tempcolor)
        
    },[])



    const GoPrevious = () => {
        let temcolor=[];
        const isfirstIndex = currentIndex === 0
        const newIndex = isfirstIndex ? imageFileList.length - 1 : currentIndex - 1
        setcurrentIndex(newIndex)
       
          for (let i = 0; i < iconColors.length; i++) {
            temcolor.push('white')
          }  
          temcolor[newIndex]='#14C17B'
          setIconColors(temcolor)
      }
    
    
      const Gonext = () => {
        let temcolor=[];
        const isLastIndex = currentIndex === imageFileList.length - 1;
        const newIndex = isLastIndex ? 0 : currentIndex + 1
        setcurrentIndex(newIndex)
        for (let i = 0; i < iconColors.length; i++) {
          temcolor.push('white')
        }  
        temcolor[newIndex]='#14C17B'
        setIconColors(temcolor)
      }
    
       const ChangeCurruntIndex=(index)=>{
        
         let temcolor=[];
          for (let i = 0; i < iconColors.length; i++) {
            temcolor.push('white')
          }  
          temcolor[index]='#14C17B'
          setcurrentIndex(index) 
          setIconColors(temcolor)     
          
       } 

    const displayPhone =()=>{
      const f=property.user.phoneNumber||'09993678'
      console.log('at displayPhone',property.user.phoneNumber,'f=',f);

      setConect(f)
      setVariantConect('contained')
    }

  return (
   <div style={{direction:'trl',width:'100%',widht:'100%'}} > 
   <div style={{marginTop:'10vh', display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100%'}}> 
   <div style={{widht:'60%-'}}>
        

         {/* <div className='warpimg'>
        <img src={`${imageFileList[currentIndex]}`} alt={'af'}/>
      </div> */}
      
       <Card  sx={{width:552}}>
       <CardMedia
          component="img"
         // width='100%'
          height='280'
          image={`${imageFileList[currentIndex]}`}
          alt="green iguana"
        />
       </Card>
       
      <div >
        <div style={RightArrowStyle} onClick={Gonext}>❯</div>
        <div style={LeftArrowStyle} onClick={GoPrevious}>❮</div>

         <div style={{ ...dotsContainerStyle ,direction:'ltr'}}>
          {iconColors.map((dcolor, index) => {
            return (

              <FiberManualRecordIcon key={index} sx={{ fontSize: 'small', color: dcolor }} onClick={()=>ChangeCurruntIndex(index)} />


            )
          })}

        </div>
        </div>
        <div style={{widht:'100%',justifyContent:'center'}}>
        <div className='typo'>
        <Stack direction="column">
        <Typography textAlign="right" variant={'h5'} sx={{color:'black'}}>{property.adress}</Typography>
        <Typography textAlign="right" variant={'h7'} sx={{color:'black'}}>{property.city.name}</Typography>
        </Stack>
        <Typography textAlign="right" variant={'h5'} sx={{color:'black'}}>₪{property.propertyPrice}</Typography>
        </div>
        </div>


  <div style={{marginTop:'4vh',marginBottom:'3vh'}}>
      <Stack direction='row' spacing={'1.5vh'}  sx={{direction:'rtl'}}>
  
    <Stack direction='row'spacing={'1vh'} sx={{direction:'rtl' }}>
    <MapsHomeWorkIcon fontSize='small'  sx={{color:'black',marginLeft:'1vh'}}/>
    <Typography textAlign="right" variant={'h7'} sx={{color:'black'}}>{propType[property.propertyType]}</Typography> 
    </Stack>

    <Divider orientation="vertical" flexItem />

    <Stack direction='row' spacing={'1vh'} sx={{direction:'ltr'}}>
    <Typography textAlign="right" variant={'h7'} sx={{color:'black',direction:'rtl'}}> {property.numRoom} חד </Typography> 
    <BedIcon fontSize='small'  sx={{color:'black'}}/>
    </Stack>

     
    <Divider orientation="vertical" flexItem />

    <Stack direction='row' spacing={'1vh'} sx={{direction:'ltr'}}>
    <Typography textAlign="right" variant={'h7'} sx={{color:'black',direction:'rtl'}} >קומה {property.floor}</Typography> 
    <StairsIcon fontSize='small'  sx={{color:'black'}} />
    </Stack>
   
    <Divider orientation="vertical" flexItem />

    <Stack direction='row' spacing={'1vh'} sx={{direction:'ltr'}}>
    <Typography textAlign="right" variant={'h7'} sx={{color:'black',direction:'rtl'}}> {property.sm} מ"ר </Typography> 
    <CropIcon fontSize='small'  sx={{color:'balck',marginLeft:'1vh'}}/>
    </Stack>


    <Divider orientation="vertical" flexItem />

    <Stack direction='row' spacing={'1vh'} sx={{direction:'ltr'}}>
    <Typography textAlign="right" variant={'h7'} sx={{color:'black',direction:'rtl'}}> { sfp} למ"ר בנוי </Typography> 
    <SellIcon fontSize='small'  sx={{color:'black'}}/>
    </Stack>
    
   </Stack>

  </div>
   

   <div className='descrip'>
   <Typography textAlign="right" variant={'h6'} sx={{color:'black'}}>תיאור הנכס</Typography> 
    <Typography textAlign="right" variant={'h7'} sx={{color:'black',textAlign:'right'}}>{property.propertyDesctiption} </Typography> 

   </div>
   
  <div style={{display:'flex',justifyContent:'center',widht:'100%'}}>
    <div style={{width:'100%'}}>
    <div  className='conect'>
     
     <Typography  variant={'h7'} sx={{color:'black'}}> ליצירת קשר</Typography>  

     <div style={{display:'flex',flexDirection:'row', borderRadius:'4px',margin:'2vh',backgroundColor:'white',width:'70%',justifyContent:'right',height:'30%',alignItems:'center'}}> 
     
     <Typography  variant={'h7'} sx={{color:'black'}}>  {property.user.name}</Typography> 
     <AccountBoxIcon fontSize='large'  sx={{color:'#14C17B',margin:'2vh'}} />
     
     
     


     </div>

     <Button width='30vh' variant={variantConect} sx={{width:'30vh'}}  onClick={displayPhone}   >{conect}  </Button>
    
    </div>
    </div>
   
  </div>
 
<div style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
<Typography textAlign="right" variant={'h6'} sx={{color:'black',margin:'2vh'}}>מפרט הנכס</Typography> 

 
 <Stack direction='row' spacing={'4vh'} sx={{direction:'rtl'}}>
  <div style={{marginLeft:'7vh'}}>
  <Stack direction='column' spacing={'1vh'}>
   
   {property.parkinglot?( 
        <Stack  direction='row' spacing={'3vh'}>
        <LocalParkingIcon fontSize='small'  sx={{color:'black'}}/>
        <Typography textAlign="right" variant={'h6'} sx={{color:'black'}}>יש חניה</Typography>
         </Stack>):
        (  <Stack  direction='row' spacing={'3vh'}>
           <LocalParkingIcon fontSize='small'  sx={{color:'lightgray'}}/>
           <Typography textAlign="center" variant={'h6'} sx={{color:'lightgray'}}>אין חניה</Typography>
           </Stack>)}
          
           {property.basmsent?( 
        <Stack  direction='row' spacing={'3vh'}>
        <WarehouseIcon fontSize='small'  sx={{color:'black'}}/>
        <Typography textAlign="center" variant={'h6'} sx={{color:'black'}}>יש מחסן</Typography>
         </Stack>):
        (  <Stack  direction='row' spacing={'3vh'}>
           <WarehouseIcon fontSize='small'  sx={{color:'lightgray'}}/>
           <Typography textAlign="center" variant={'h6'} sx={{color:'lightgray'}}>אין מחסן</Typography>
           </Stack>)}
 

{property.safeRoom?( 
<Stack  direction='row' spacing={'3vh'}>
<GppMaybeIcon fontSize='small'  sx={{color:'black'}}/>
<Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>יש ממ"ד</Typography>
</Stack>):
(  <Stack  direction='row' spacing={'3vh'}>
<GppMaybeIcon fontSize='small'  sx={{color:'lightgray'}}/>
<Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}>אין ממ"ד</Typography>
</Stack>)}


{property.porchGarden?( 
<Stack  direction='row' spacing={'3vh'}>
<BalconyIcon fontSize='small'  sx={{color:'black'}}/>
<Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>יש מרפסת</Typography>
</Stack>
):(  <Stack  direction='row' spacing={'3vh'}>
<BalconyIcon fontSize='small'  sx={{color:'lightgray'}}/>
<Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}>אין מרפסת</Typography>
</Stack>)}



  </Stack>
  </div>
 
  <Stack direction='column' spacing={'2vh'}>


    {property.bars?(
      <Stack  direction='row' spacing={'3vh'}>
      <DataSaverOffIcon fontSize='small'  sx={{color:'black'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>יש סורגים</Typography>
      </Stack>
    ):(
     <Stack  direction='row' spacing={'3vh'}>
      <DataSaverOffIcon fontSize='small'  sx={{color:'lightgray'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}>אין סורגים</Typography>
      </Stack>

    )}


{property.elivator?(
      <Stack  direction='row' spacing={'3vh'}>
      <ElevatorIcon fontSize='small'  sx={{color:'black'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>יש מעלית</Typography>
      </Stack>
    ):(
     <Stack  direction='row' spacing={'3vh'}>
      <ElevatorIcon fontSize='small'  sx={{color:'lightgray'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}>אין מעלית</Typography>
      </Stack>

    )}

{property.disabledAcces?(
      <Stack  direction='row' spacing={'3vh'}>
      <AccessibleIcon fontSize='small'  sx={{color:'black'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>נגיש לנכים</Typography>
      </Stack>
    ):(
     <Stack  direction='row' spacing={'3vh'}>
      <AccessibleIcon fontSize='small'  sx={{color:'lightgray'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}>לא נגיש לנכים</Typography>
      </Stack>

  )}

{property.disabledAcces?(
      <Stack  direction='row' spacing={'3vh'}>
      <AcUnitIcon fontSize='small'  sx={{color:'black'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'black'}}>מיזוג אויר </Typography>
      </Stack>
    ):(
     <Stack  direction='row' spacing={'3vh'}>
      <AcUnitIcon fontSize='small'  sx={{color:'lightgray'}}/>
      <Typography textAlign="center" variant={'h7'} sx={{color:'lightgray'}}> אין מיזוג אויר</Typography>
      </Stack>

  )}

</Stack>


</Stack>       
</div>

 
   {/* <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper}}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
     {imageList.map((image,index)=>{
         return(
        <SwiperSlide>
         <img src={image}  alt='fdfdfd'/>
         </SwiperSlide>
         )
          })}
      
      </Swiper>  */}
      {/* <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        
         
       {imageList.map((image,index)=>{
        return(
          <SwiperSlide>
          <img src={image}  alt='fdfdfd'/>
            
                 </SwiperSlide>
 
        )
        
       })}
       <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper> */}

   </div>
   </div>  

   <div style={{height:'5vh'}}></div>
   </div>
    )
}


