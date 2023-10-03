import React, { useState } from 'react';
import { Box, Image } from "@chakra-ui/react";
import { NavLink } from 'react-router-dom';
import assets from '../assests';
import '../assests/css/navbar.css';

const NavBar = () => {
  let [isLogin,setLogin] = useState(true);
  return (
    <Box m='auto' fontSize='14px' px='10%' py='1em' id="navbar" color='white' fontWeight='semibold'>
      <NavLink exact to='/' activeClassName='active-link'>
        <Image src={assets.images.COMMON.APP_LOGO} alt='Alchemus Logo' />
      </NavLink>
       {
        isLogin ? <>
        <NavLink exact to='/my-profile' activeClassName='active-link'>MY PROFILE</NavLink>
        <NavLink exact to='/search-jobs' activeClassName='active-link'>SEARCH JOBS</NavLink>
        <NavLink exact to='/referred-jobs' activeClassName='active-link'>REFERRED JOBS</NavLink>
        <NavLink exact to='/saved-jobs' activeClassName='active-link'>SAVED JOBS</NavLink>
        <NavLink exact to='/jobs-applied' activeClassName='active-link'>JOBS APPLIED</NavLink>
        <NavLink exact to='/document-repository' activeClassName='active-link'>DOCUMENT REPOSITORY</NavLink>
        <NavLink exact to='/profile' activeClassName='active-link'>PROFILE</NavLink>
   
        </> : <Box className='nav_login_box'>
        <NavLink exact to='/signup' activeClassName='active-link'>Login </NavLink>
        {" | "}
        <NavLink exact to='/signup' activeClassName='active-link'> Signup</NavLink>
      </Box>
       }
    </Box>
  );
}

export default NavBar;
