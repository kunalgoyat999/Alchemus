import React, { useState } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import assets from "../assests";
import "../assests/css/navbar.css";
import { CgProfile } from "react-icons/cg";
import { useToast } from "@chakra-ui/react";

const NavBar = () => {
  let [isLogin, setLogin] = useState(true);
  let toast = useToast();
  let navigate = useNavigate();
  return (
    <Box
      m="auto"
      fontSize="14px"
      px="20%"
      py="1.3em"
      id="navbar"
      color="white"
      fontWeight="semibold"
    >
      <Image src={assets.images.COMMON.APP_LOGO} alt="Alchemus Logo" />
      {isLogin ? (
        <>
          <NavLink  to="/my-profile" activeClassName="active-link">
            MY PROFILE
          </NavLink>
          <NavLink  to="/search-jobs" activeClassName="active-link">
            SEARCH JOBS
          </NavLink>
          <NavLink  to="/referred-jobs" activeClassName="active-link">
            REFERRED JOBS
          </NavLink>
          <NavLink  to="/saved-jobs" activeClassName="active-link">
            SAVED JOBS
          </NavLink>
          <NavLink  to="/jobs-applied" activeClassName="active-link">
            JOBS APPLIED
          </NavLink>
          <NavLink
            
            to="/document-repository"
            activeClassName="active-link"
          >
            DOCUMENT REPOSITORY
          </NavLink>
          <Box>
            <Text fontSize="1.2em" className="navbar_profile_box">
              {/* <CgProfile style={{ paddingRight: "0.2em", fontSize: "2.2em" }} /> */}
              <Image
                src={assets.images.LOGIN.PROFILE}
                style={{ marginRight: "0.3em" }}
              />
              {"Vishal"}{" "}
            </Text>
            <Box className="logout_box">
              {" "}
              <Button
                id="logout_btn"
                onClick={() => {
                  setLogin(false);
                  navigate('/login')
                }}
                borderRadius={"none"}
              >
                LOGOUT
              </Button>
            </Box>
          </Box>
        </>
      ) : (
        <Box className="nav_login_box" fontSize='md'>
          <NavLink  to="/login" activeClassName="active-link">
            LOGIN{" "}
          </NavLink>
          {" | "}
          <NavLink  to="/signup" activeClassName="active-link">
            {" "}
            SIGNUP
          </NavLink>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
