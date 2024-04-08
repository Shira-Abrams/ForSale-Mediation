import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Stack } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useNavigate ,useParams} from 'react-router-dom';
import { setpropertyDetails } from '../redux/PropertySlice';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { DeleteProperties } from "../redux/PropertySlice";
import {setUserProperties} from "../redux/PropertySlice";

export default function SingleAdProp(props) {
const [imageFileList, setimageFileList] = useState([])
const [currentIndex, setcurrentIndex] = useState(0)
const [isShowSlide,setIsShowSlide]=useState(false)
const [iconColors, setIconColors] = useState([]); // Assuming 10 icons initially
 let property=props.element;
 const imageList=property.imageUrlList;
 const propType=['דירה','בית פרטי','דירת גן','קוטג','דו משפחתי','פנטהאוז','דירת גג','שטח חקלאי','דופלקס','מגרש','בינין']
 const navigate=useNavigate();
 const dispatch=useDispatch();
 let  properties = useSelector(state => state.properties.property)
 let currentUser=  localStorage.getItem('currentUser')
   currentUser=JSON.parse(currentUser)
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


 const LeftArrowStyle = {
    position: 'absolute',
    top: '35%',
    transform: 'translate(0,-50%)',
    left: '1vh',
    fontSize: '3vh',
    cursor: 'pointer',
    color: 'white'
  }

  const RightArrowStyle = {
    position: 'absolute',
    top: '35%',
    transform: 'translate(0,-50%)',
    right: '1vh',
    fontSize: '3vh',
    cursor: 'pointer',
    color: 'white'
  }
  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    zIndex: '0',
    position: 'absolute',
    top: '42%',
    left: '15%',
    right: '15%',
  }
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
   const SetCurrenProperty=()=>{
    console.log('SetCurrenProperty=====', props.element);
    dispatch(setpropertyDetails(props.element))
    navigate('/propDetails/'+props.element.id)
     console.log('at SetCurrenProperty the element that was click is :', props.element);
   }

   const DeleteProperty=( propId)=>{
      console.log('at DeleteProperty the propId', propId);
      dispatch(DeleteProperties(propId))
      dispatch(setUserProperties(properties.filter(x=>x.user.id===currentUser.Id)))
      window.location.reload();
   }

  return (
    <Card sx={{ width: 225 }} onMouseOver={()=>setIsShowSlide(true)} onMouseOut={()=>setIsShowSlide(false)}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="160"
        width='215'
        image={`${imageFileList[currentIndex]}`}
        alt="green iguana"
      />
      
      {isShowSlide&&
      <div >
      <div style={LeftArrowStyle} onClick={GoPrevious}>❯</div>
      <div style={RightArrowStyle} onClick={Gonext}>❮</div>
      {/* <img src={`${imageFileList[0]}`}/> */}
      <div style={{ ...dotsContainerStyle ,direction:'ltr'}}>
        {iconColors.map((dcolor, index) => {
          return (

            <FiberManualRecordIcon key={index} sx={{ fontSize: 'small', color: dcolor }} onClick={()=>ChangeCurruntIndex(index)} />


          )
        })}

      </div>
      </div>}
      
      
      <CardContent height='50'  onClick={SetCurrenProperty} sx={{padding:'8px'}}>
      <Stack direction='column' spacing={1}>
      <Typography variant="h6" color="text.secondary"  sx={{direction:'rtl',fontWeight:'5vh'}}>
         ₪{ props.element.propertyPrice}
        </Typography>
       <Typography variant="body2" color="text.secondary">
         {props.element.numRoom} חד'.קומה{props.element.floor} .{props.element.sm}מ"ר
        </Typography>
          <Typography variant="body3" color="text.secondary">
          {propType[props.element.propertyType]},{props.element.adress} ,{props.element.city.name}
          </Typography>
          
        </Stack>
        <Stack direction='column'>
            
         </Stack>
       
      </CardContent>
      <Button variant="outlined"  sx={{height:'4vh',width:'21vh', border:'1px solid lightgray',textAlign:'center',color:'black',direction:'ltr',marginRight:'5vh',marginBottom:'3vh'}} endIcon={<DeleteIcon  />}  onClick={()=>DeleteProperty(props.element.id)}>
            מחיקה
       </Button>
    </CardActionArea>
  </Card>
  )
}
