import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import * as Yup from 'yup';
import {useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { useState } from 'react';
import { AddUser, GetAllUser } from '../redux/userSlice';
import { useEffect } from 'react';
import { red } from '@mui/material/colors';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignUp(props) {
      
           const [u,setu]=useState({});
           const [isExist,setisExist]=useState(false)
           const exsitUsers=useSelector(state=>state.users.users)
           const stausUser=useSelector(state=>state.users.status)
            console.log('all exist user',exsitUsers);
           const [isSend,SetisSend]=useState(false);
           
          const dispatch=useDispatch();
          const handleSubmit = (event) => {
          event.preventDefault();
          console.log(event.currentTarget);
          const data = new FormData(event.currentTarget);
           setu( {
                  Id:0,
                  Name:data.get('username'),
                  PhoneNumber:'',
                  Email: data.get('email'),
                  Password: data.get('password')
            }) 
            localStorage.setItem('currentUser',u)
            if(!(IsExistUser(data.get('password'),data.get('email'))) )
            {
             
               SetisSend(true)
            }
             console.log(u);  
            props.closeLogForm(false)

           };     
                
        
             
            
           
         
               
      const IsExistUser =(up,em)=>{
      const p=  exsitUsers.find(item=>item.password===up);
      const e=  exsitUsers.find(item=>item.email===em);
      console.log('in IsExistUser function',p,e);
        if(p!==undefined||e!==undefined)
        {
           setisExist(true)
           return true
        }
        else{
          setisExist(false)
          return false  
       }
        
      }  
        

      //add user 
    useEffect(()=>{
       if(isSend)
       {
         console.log('send dispatch');
         console.log(u);
          dispatch(AddUser(u)); 
       }
      },[isSend])          
               
     //  get all user !!
      useEffect(()=>{

           console.log('dispatch');
           if(stausUser!='fulfilled')
            dispatch(GetAllUser())
           console.log(exsitUsers);
      },[])     
       

   
      

       
 
          
  

      
   
 


  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .max(20, 'Username cannot exceed 20 characters')
      .matches(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, digits, and underscores'
      )
      .required('Username is required'),
  
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required')
      .matches(/^[a-zA-Z0-9].*@.*gmail\.com+$/,'Invalid email format'),
  
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password cannot exceed 16 characters')
      
      .matches( /^[a-zA-Z0-9_]+$/,'Password can only contain letters, digits, and underscores')
      .required('Password is required'),
  });

  
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // For the demonstration purposes, we're console logging the values provided by user.
      console.log('Submitted values:', values);
    },
  });

  return (
   
   
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="username"
                  required
                  fullWidth
                  id="username"
                  label="User Name"   
                  autoFocus

                   {...formik.getFieldProps('username')}

                />
                 {formik.touched.username && formik.errors.username && (
                 <div style={{color:'red'}}>{formik.errors.username}</div> )}
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email" 
                   {...formik.getFieldProps('email')}
                 
                />
                 {formik.touched.email && formik.errors.email && (
               <div style={{color:'red'}}>{formik.errors.email}</div> )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...formik.getFieldProps('password')}

                  
                 
                />
                {formik.touched.password && formik.errors.password && (
               <div style={{color:'red'}}>{formik.errors.password}</div> )}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
              {isExist&& <p style={{color:'red',textAlign:'center'}}>משתמש קים במערכת נסה להתחבר</p>}
            </Grid>
           { formik.errors.username ||formik.errors.email||formik.errors.password ?( <Button 
              disabled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>):(  
              <Button 
      
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            )}
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    
    
  );
}