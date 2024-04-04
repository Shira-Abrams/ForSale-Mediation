import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import axios from 'axios';
import { current } from '@reduxjs/toolkit';
import { array } from 'yup';
import Button from '@mui/material/Button';
import { useNavigate ,useParams} from 'react-router-dom';
// import {setpropertyDetails} from '../redux/PropertySlice'

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { setpropertyDetails } from '../redux/PropertySlice';
export default function ActionAreaCard(props) {
  const [imageFileList, setimageFileList] = useState([])
  const [currentIndex, setcurrentIndex] = useState(0)
  const [isShowSlide,setIsShowSlide]=useState(false)
  const [dotColor,setDotColor]=useState('white');
  const imageList = props.element.imageUrlList
  const [iconColors, setIconColors] = useState([]); // Assuming 10 icons initially
  //  useEffect(async()=>{
  //   const imgeList=props.element.imageUrlList
  //   const i=0;
 const navigate=useNavigate();
  const dispatch=useDispatch();
  // })   


  useEffect(() => {
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
  }, [])  
    

  // const propertyChar=[ 'חניה','מעלית','מחסן','ממ"ד','מיזוג אויר' , 'נגיש לנכים','סורגים','פנדור' ,'מרפסת']
  const propType=['דירה','בית פרטי','דירת גן','קוטג','דו משפחתי','פנטהאוז','דירת גג','שטח חקלאי','דופלקס','מגרש','בינין']
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
     console.log('at ChangeCurruntIndex ',dotColor);
     let temcolor=[];
      for (let i = 0; i < iconColors.length; i++) {
        temcolor.push('white')
      }  
      temcolor[index]='#14C17B'
      setcurrentIndex(index) 
      setIconColors(temcolor)     
      
   }
  //  const ResetOnMouseOut=()=>{
  //   let temcolor=[];
  //   for (let i = 0; i < iconColors.length; i++) {
  //     temcolor.push('white')
  //   }  
  //   temcolor[0]='#14C17B'
  //   setIconColors(temcolor)     
  //   setIsShowSlide(false)
  //   setcurrentIndex(0);
  //  }

  const dotsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    zIndex: '0',
    position: 'absolute',
    top: '52%',
    left: '15%',
    right: '15%',
  }
  const SetCurrenProperty=()=>{
    console.log('SetCurrenProperty=====', props.element);
    dispatch(setpropertyDetails(props.element))
    navigate('/propDetails/'+props.element.id)
     console.log('at SetCurrenProperty the element that was click is :', props.element);
   }
  return (

    <Card sx={{ width: 225 }} onMouseOver={()=>setIsShowSlide(true)} onMouseOut={()=>setIsShowSlide(false)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="170"
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
        
        
        <CardContent height='50'  onClick={SetCurrenProperty}>
        <Stack direction='column' spacing={1}>
        <Typography variant="h5" color="text.secondary"  sx={{direction:'rtl',fontWeight:'5vh'}}>
           ₪{ props.element.propertyPrice}
          </Typography>
         <Typography variant="body1" color="text.secondary">
           {props.element.numRoom} חד'.קומה{props.element.floor} .{props.element.sm}מ"ר
          </Typography>
            <Typography variant="body2" color="text.secondary">
            {propType[props.element.propertyType]},{props.element.adress} ,{props.element.city.name}
            </Typography>
            
          </Stack>
          <Stack direction='column'>
              
           </Stack>
         
          
          
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
