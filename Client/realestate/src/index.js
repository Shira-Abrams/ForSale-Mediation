import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider,createTheme } from '@mui/material'
import { store } from './redux/store'; 
import { Provider } from 'react-redux';


const  thempoption=createTheme(
  {
    palette:{
      node:'light',
      primary:{
        main:'#14c17b'
      },
      secondary:{
        main:'#5a5557'
      }
    }
  }
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider  theme={thempoption}>
    
     {/* <GoogleOAuthProvider clientId='596356809269-4a6k21g0rb48qqmm47n77lt1ksh1iusg.apps.googleusercontent.com'> */}
        <Provider store={store}>
          <BrowserRouter>
             <App />
         </BrowserRouter>
        </Provider>
      {/* </GoogleOAuthProvider> */}
       
       </ThemeProvider>
  
          
      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
