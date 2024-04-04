
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import {  Margin } from '@mui/icons-material';
import SignIn from './shignin';
import { isVisible } from '@testing-library/user-event/dist/utils';
import '../cssomponents/navbar.css'
import Stack from '@mui/material/Stack';
import LoginForm from './login';
import { useNavigate ,useParams} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import Badge from '@mui/material/Badge';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AploadProperty } from './aploadProperty';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isVisible, setIsVisible] = React.useState(false);
  const[closeBybutton,setcloseBybutton]=React.useState(true)
  const [isprofile, setIsProfile] = React.useState(false);
  const for_sale='for-sale';
  const for_rent='for-rent';
  const navigate=useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    if(isprofile)
    setAnchorElUser(event.currentTarget);
   else 
   setIsVisible(!isVisible)
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

 
 
function NavigateHome()
{
  navigate('/home')
}
  // const SetStatusBuy=()=>
  // {
  //        localStorage.setItem('status',0)
  //        navigate('/allProperty')

  // }
  // const SetStatusSale=()=>{
  
  //   localStorage.setItem('status',1)
  //   navigate('/allProperty')
  // }

 const SetIsCloseLogIn=(e)=>{
   setIsVisible(!isVisible);
  //  const T= ()=>setcloseBybutton(true)
  //  T()
 }

 const uploudAnuonce=()=>{
        navigate('/aploudProperty')
 }
  return (
    <AppBar position="static"  sx={{backgroundColor:'white'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
        >
          <MenuIcon />
         </IconButton>
         
        {/* open menue navbar  */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
       <Stack spacing={2 } direction='row'>

       <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu}  sx={{ p: 0}}>
            <Avatar alt="shira abrams" src='fdfdf' />
        </IconButton>
        </Tooltip>
        <div style={{zIndex:1}}>{isVisible?(<LoginForm  CloseLogIn={SetIsCloseLogIn}></LoginForm> ):('')}</div>
      
      
         
       
        {/* profile meue */}
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
       </Box> 
       <Stack direction='row'>

       <p style={{width:'12vh',fontSize:'1.7vh',textAlign:'center',paddingLeft:'1vh'}}>מודעות שמורות</p>
       <Badge color="primary" badgeContent={1}  sx={{marginRight:'1vh'}}>
        <FavoriteBorderIcon sx={{color:'black'}}/>
      </Badge>
       </Stack>
       
     
       
       <Button variant="outlined" endIcon={<AddIcon />} className='uploudbutton' sx={{width:'20vh',fontSize:'1.5vh'}} onClick={uploudAnuonce}>
              העלאת מודעה
       </Button>     
           


       </Stack>
       
       <Box sx={{ flexGrow:1, display: { xs: 'none', md: 'flex' },direction:'rtl'}}>
           
         <div style={{Margin:5,display:'flex',flexDirection:'row',color:'white',direction:'ltr'}}> 
          <Stack direction="row" spacing={3}>
           <Link  className="link">מידע על כתובות</Link> 
           <Link  className="link">מדלן מסחרי</Link>   
           <Link  to={'/allProperty/'+for_rent}  className="link"   >דירות להשכרה </Link>   
           <Link   to={'/allProperty/'+for_sale}  className="link" >דירות למכירה </Link>    
           </Stack> 
          </div> 
              
        </Box>          
        
                 
                      <img src='./picture/bglogo.png'  width={80} onClick={NavigateHome}/>

                   {/* responsive logo */}
                   {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr:5}} /> */}
          
                  
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar; 
          



          
          
          
         
        
             
                
                
                
            


          
      

          
           
          
          

