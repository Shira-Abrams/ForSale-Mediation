import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { visuallyHidden } from '@mui/utils';

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
    const[imagesUrl,setImagesUrl]=useState([])
    
    localStorage.setItem('image_list',JSON.stringify(imagesUrl))

    const setImage=(event)=>{
      console.log(event[0]);
        let images=event;
        //const url=[];
        console.log(event);
        for (let i = 0; i < images.length; i++) {
            const image=images[i]
            const reader = new FileReader();
            reader.onload = () => {
            const imurl=reader.result;
            setImagesUrl(prevImage=>[...prevImage,imurl]);
               console.log(imagesUrl);   
             };   
             localStorage.setItem('image_list',JSON.stringify(imagesUrl))
    
         reader.readAsDataURL(image);     
        }                 
           console.log(imagesUrl);         
                 
                
           
       
            
       
   


       
       


        
       
    }
  return (
    <div>
        {/* <button  > <input type='file' onChange={(e)=>setImage(e.target.files)} accept="image/*" multiple  style={{ visibility: 'hidden'} }/>להעלאת תמונות</button> */}
        <Button
           component="label"
           role={undefined}
           variant="contained"
           tabIndex={-1}
           startIcon={<CloudUploadIcon />}
           >
             Upload file
            <VisuallyHiddenInput type="file"  multiple  onChange={(e)=>setImage(e.target.files)}/>
        </Button>
       
         {/* <img src={imagesUrl}/> */}
        {/* {imagesUrl.map((item,index)=>{
            <img src={imagesUrl[index]}/>
        })} */}
    <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap'}}></div>
        {imagesUrl.map((url,index)=>(
            <div key={index}>
                 <img src={url} style={{width:'30vh'}} alt={`Uploaded ${index}`} />
            </div>
        ))}
        
    </div>
  )
}
