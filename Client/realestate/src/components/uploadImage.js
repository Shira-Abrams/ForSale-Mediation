import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function UploadImage() {
    const[imagesUrl,setImagesUrl]=useState()

    const setImage=(e)=>{
        let image=e.target.files[0]
       
        
        const reader = new FileReader();
        reader.onload = () => {
            // Set the image source once the file is loaded
            setImagesUrl(reader.result);
        };
        if (image) {
            reader.readAsDataURL(image); // Read the file as a data URL
          }
    }
  return (
    <div>
        <input type='file' onChange={setImage}>
        </input>
         <img src={imagesUrl}/>
        {/* {imagesUrl.map((item,index)=>{
            <img src={imagesUrl[index]}/>
        })} */}
        
    </div>
  )
}
