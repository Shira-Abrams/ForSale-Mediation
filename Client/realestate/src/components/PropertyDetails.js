import React from 'react'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import axios, { AxiosError } from 'axios'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import '../cssomponents/PropertyDetail.css'
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';


export default function PropertyDetails() {   
    const [imageFileList, setimageFileList] = useState([])
    const [iconColors, setIconColors] = useState([]); // Assuming 10 icons initially
    const [currentIndex, setcurrentIndex] = useState(0)
    const property=useSelector(state=>state.properties.propertyDetails);
   console.log('at property detail',property);
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
        top: '52%',
        left: '15%',
        right: '15%',
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

  return (
   <div > 

      <div className='warpimg'>
        <img src={`${imageFileList[currentIndex]}`} className='img' style={{width:'50%'}} alt={'af'}/>
      </div>


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
        </div>

      
    
   </div>
    )
}


