import SignIn from "./shignin";
import SignUp from "./signup"; 
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from "@mui/material";
import { useState } from "react";

import '../cssomponents/login.css'


 const LoginForm=()=>{
        const [isSignIn,setisSignIn]=useState(true);
        const [isSignUp,setisSignUP]=useState(false);
     const ChangeSignIn=(event)=>{

        setisSignIn(true)
        setisSignUP(false)
        
        
        
    }
   
   const ChangeSignUp=(evn)=>{
        setisSignIn(false)
        setisSignUP(true)
    }
    

 const  SendNavBar=(IsCloseLogIn)=>{
        this.props.CloseLogIn(IsCloseLogIn)
  }
    return(
            <>  
               <div className="login">
                  
                <Stack  direction="column" spacing={1} >
                <div> 

                  <Stack  direction="row" spacing={0} className="button">
                   
                        <Button variant="contained" href=""  onClick={ChangeSignIn}  className="b" id="signin" sx={{backgroundColor:'lightgray',borderRadius:'0px'}}
                        >sign in</Button>
                        <Button variant="contained" href="" onClick={ChangeSignUp}  
                        className="b" id="signup"  sx={{backgroundColor:'#14C17B',borderRadius:'0px',height:'3vw'}}
                          >sign up</Button>
                  </Stack>
                      {isSignIn?(<SignIn></SignIn>):(<SignUp CloseLogIn={SendNavBar} ></SignUp>)}
                    
                </div>
                    
                </Stack>
                    
               </div>
               

             </>       
                
         

    )
}
export default LoginForm