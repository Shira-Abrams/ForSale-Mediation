
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
import { useFormik } from 'formik';
// import { GoogleLogin } from '@react-oauth/google';
// import { useGoogleLogin } from '@react-oauth/google';
import { grey } from '@mui/material/colors';

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

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };   
 //check integrity schema 
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(4, 'Username must be at least 4 characters')
      .max(20, 'Username cannot exceed 20 characters')
      .matches(
        /^[a-zA-Z0-9_]+$/,
        'Username can only contain letters, numbers, and underscores'
      )
      .required('Username is required'),
  
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
  
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(16, 'Password cannot exceed 16 characters')
      
      .matches( /^[a-zA-Z0-9_]+$/,'Password can only contain letters, digits, and underscores')
      .required('Password is required'),
  });
  //cheack integrity useformik
  const formik = useFormik({
    initialValues: { username: '', email: '', password: '' },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      // For the demonstration purposes, we're console logging the values provided by user.
      console.log('Submitted values:', values);
    },
  });

    // const login = useGoogleLogin({
    //   onSuccess: tokenResponse => console.log(tokenResponse),
    // });
  
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
            <LockOutlinedIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          {/* sign in with google  */}
          {/* <GoogleLogin 
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
              useOneTap      
            /> */}
            <p style={{color:'#14C17B'}}>or</p>
          <Box component="form" onSubmit={formik.handleSubmit} noValidate sx={{ mt: 1 }}>
            
           {formik.errors.email?( <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus  
              error='true'
              {...formik.getFieldProps('email')}
            />):(<TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus  
              
              {...formik.getFieldProps('email')}
            />)} 
            
              {formik.touched.email && formik.errors.email && (
               <div style={{color:'red'}}>{formik.errors.email}</div> )}
             
             {formik.errors.password?(<TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" 
              error="true"
              {...formik.getFieldProps('password')} 
            />):(<TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password" 
              
              {...formik.getFieldProps('password')} 
            />)}
            
            {formik.touched.password && formik.errors.password && (
               <div style={{color:'red'}}>{formik.errors.password}</div> )}
            
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            {formik.errors.password ||formik.errors.email?(<Button  
              disabled
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'#14C17B', 
             
             }}
             
            >
              Sign In
            </Button>):(<Button  
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,backgroundColor:'#14C17B', 
              
              
             }}
            > 
            
              Sign In
            </Button>)}
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"  sx={{color:'#14C17B'}}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" sx={{color:'#14C17B'}}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      
      </Container>
      
      
   
  );
}