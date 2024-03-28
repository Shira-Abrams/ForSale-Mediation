import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function UploadImage() {
    const[imagesUrl,setImagesUrl]=useState([])

    const setImage=(event)=>{
        let images=event;
        const url=[];
        for (let i = 0; i < images.length; i++) {
            const image=images[i]
            const reader = new FileReader();
            reader.onload = () => {
            const imurl=reader.result;

                if(!url.includes(imurl))
                 url.push(imurl)
                if(url.length===images.length)
                 {
                    setImagesUrl(prevImage=>[...prevImage,...url]);
                    console.log(url.length);
                    console.log(imagesUrl);
                 }  
                // Set the image source once the file is loaded
                
            };
         reader.readAsDataURL(image);     
        }    
            
       // Read the file as a data URL
   
       console.log(imagesUrl);

       
       


        
       
    }
  return (
    <div>
        <input type='file' onChange={(e)=>setImage(e.target.files)} accept="image/*" multiple  />
         <img src={imagesUrl}/>
        {/* {imagesUrl.map((item,index)=>{
            <img src={imagesUrl[index]}/>
        })} */}
        {imagesUrl.map((url,index)=>(
            <div key={index}>
                 <img src={url} style={{width:'30vh'}} alt={`Uploaded ${index}`} />
            </div>
        ))}
        
    </div>
  )
}
