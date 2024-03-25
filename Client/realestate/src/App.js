import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import ResponsiveAppBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import SignUp from './components/shignin';
//import { GoogleOAuthProvider } from '@react-oauth/google';
//import { GoogleLogin } from '@react-oauth/google';
import Home from './components/home';
import AllProperty from './components/AllProperty';
import MultiActionAreaCard from './components/singleProperty';
import { Link } from 'react-router-dom';
function App() {
  
   

  return (
    <div className="App">
      
       <ResponsiveAppBar className="navbar"/>
        
       <>
       
         <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='signup' element={<SignUp/>}></Route>
         <Route path='allProperty/:status' element={<AllProperty/>}></Route>
         <Route path='home' element={<Home/>}> </Route>
         <Route path='singleProperty' element={<MultiActionAreaCard/>}></Route>
        </Routes>
       </>
       
         

        
        
        
       
       {/* <SignUp></SignUp> */} 

          
       
     </div>
     
  );
}

export default App;
