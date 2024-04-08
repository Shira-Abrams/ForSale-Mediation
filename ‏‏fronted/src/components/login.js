import SignIn from "./shignin";
import SignUp from "./signup"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import { useState } from "react";

import '../cssomponents/login.css'


 const LoginForm=(props)=>{
        const [isSignIn,setisSignIn]=useState(true);
        const [isSignUp,setisSignUP]=useState(false);
        const[sinUpColor,setSinUpColor]=useState('#14C17B')
        const[sinInColor,setSinColor]=useState('lightgray')
     const ChangeSignIn=(event)=>{
        setisSignIn(true)
        setisSignUP(false)
        setSinUpColor('#14C17B');
        setSinColor('lightgray')
    }   
        
    const ChangeSignUp=(evn)=>{
        setisSignIn(false)
        setisSignUP(true)
        setSinUpColor('lightgray');
        setSinColor('#14C17B')
    }
        
        
    const SendCloseLogIn=(bool)=>{
      props.CloseLogIn(bool);
    }
   
   
    return(
            <>  
               
                  
                <Stack  direction="column" spacing={0} className="login" sx={{paddingTop:0}} >
                 

                  <Stack  direction="row" spacing={0} className="button" sx={{marginTop:0}}>
                   
                        {/* <Button variant="contained" href=""  onClick={ChangeSignIn}  className="b" id="signin" sx={{backgroundColor:sinInColor,borderRadius:'0px'}}
                        >sign in</Button>
                        <Button variant="contained" href="" onClick={ChangeSignUp}  
                        className="b" id="signup"  sx={{backgroundColor:sinUpColor,borderRadius:'0px',height:'3vw'}}
                          >sign up</Button> */}
                          <div onClick={ChangeSignIn}  className="b" id="signin"style={{backgroundColor:sinInColor,borderRadius:'0px'}}>sign in</div>
                          <div onClick={ChangeSignUp}  className="b" id="signin"style={{backgroundColor:sinUpColor,borderRadius:'0px'}}>sign up</div>

                  </Stack>
                      {isSignIn?(<SignIn></SignIn>):(<SignUp closeLogForm={SendCloseLogIn}></SignUp>)}
                    
              
                    
                </Stack>
                    
               

             </>       
                
         

    )
}
export default LoginForm