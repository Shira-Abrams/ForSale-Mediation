import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { visuallyHidden } from '@mui/utils';
import { useDispatch, useSelector } from "react-redux";
import { setCurrentProperty } from '../redux/PropertySlice';
import Typography from '@mui/material/Typography';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function UploadImage() {
    const[imagesUrls,setImagesUrls]=useState([])
    const [imageSend,setImageSend]=useState([])
    
    const property=useSelector(state=>state.properties.currenProperty);
    const dispatch=useDispatch();
    const ImageTosent=(imagefile)=>{
      setImageSend([...imageSend,...imagefile])
      console.log(imageSend,imagefile);
    }  
    
    // const setImage=(event)=>{
    // //  console.log(event[0]);
    //     let images=event;
    //     ImageTosent(event)
    //     dispatch(setCurrentProperty({FileImageList:JSON.stringify(imageSend)}))
    //     console.log('imageSend=',imageSend);
    //     console.log(property);
    //     //const url=[];
    //     console.log(event);
    //     for (let i = 0; i < event.length; i++) {
    //         const image=event[i]
    //         const reader = new FileReader();
    //         reader.onload = () => {
    //         const imurl=reader.result;
    //         setImagesUrl(prevImage=>[...prevImage,imurl]);
    //            console.log(imagesUrl);   
    //          };   
             
    
    //      reader.readAsDataURL(image);     
    //     }                 
    //        console.log(imagesUrl);         
                 
    // }            
           
   const HandleSingleImageChange=(event)=>{
    const image = event.target.files[0];
    console.log(event.target.files);
    console.log(event.target.files[0]);
    setImageSend([...imageSend,event.target.files[0]])
    if (image) {
      const reader = new FileReader();
      reader.onload = () => {
        const imageUrl = reader.result;
        setImagesUrls( [...imagesUrls, imageUrl]);
      };
      reader.readAsDataURL(image);
    }   
    console.log('list image',imagesUrls);
    console.log('image send',imageSend);
    dispatch(setCurrentProperty({FileImageList:[...imageSend,event.target.files[0]]}))
     console.log(property);
     //localStorage.setItem('images',JSON.stringify(imageSend))
   }   
   
       
       


        
       
    
  return (
    <div style={{direction:'rtl'}}>  
      <Typography textAlign="right" variant={'h5'} sx={{color:'black',marginBottom:'4vh'}}>העלאת תמונות</Typography>
         {/* <img src={imagesUrl}/> */}
        {/* {imagesUrl.map((item,index)=>{
            <img src={imagesUrl[index]}/>
        })} */}
    <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',}}>
        {imagesUrls.map((url,index)=>(
            <div key={index}  style={{width:'30vh',height:'40vh',margin:'2vh'}}>
                 <img src={url} style={{width:'100%',height:'100%'}} alt={`Uploaded ${index}`} />
            </div>
        ))}
      </div>  


       {/* <button  > <input type='file' onChange={(e)=>setImage(e.target.files)} accept="image/*" multiple  style={{ visibility: 'hidden'} }/>להעלאת תמונות</button> */}
      
       <Button
           component="label"
           role={undefined}
           variant="contained"
           tabIndex={-1}
           endIcon={<CloudUploadIcon />}
           sx={{direction:'ltr'}}
           >
            העלאת תמונות
            <VisuallyHiddenInput type="file"  accept='image/*'  onChange={HandleSingleImageChange}/>
        </Button>

        <div>
         <img src='./picture/UpImage.png' alt='ff'/>
        </div>


         
    </div>
  )
}
