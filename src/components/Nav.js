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
          <NavLink exact to="/my-profile" activeClassName="active-link">
            MY PROFILE
          </NavLink>
          <NavLink exact to="/search-jobs" activeClassName="active-link">
            SEARCH JOBS
          </NavLink>
          <NavLink exact to="/referred-jobs" activeClassName="active-link">
            REFERRED JOBS
          </NavLink>
          <NavLink exact to="/saved-jobs" activeClassName="active-link">
            SAVED JOBS
          </NavLink>
          <NavLink exact to="/jobs-applied" activeClassName="active-link">
            JOBS APPLIED
          </NavLink>
          <NavLink
            exact
            to="/document-repository"
            activeClassName="active-link"
          >
            DOCUMENT REPOSITORY
          </NavLink>
          <Text
            fontSize="1.2em"
            className="navbar_profile_box"
            onClick={() => {
              toast({
                title: (
                  <Button
                    colorScheme="blackAlpha.600"
                    bg="transparent"
                    onClick={() => {
                      setLogin(false); navigate("/login");
                      toast.closeAll()
                    }}
                    variant="outline"
                  >
                    Log Out
                  </Button>
                ),
                position: "top",
                variant: "left-accent",
                isClosable: true,
                status: "error",
              });
            }}
          >
            {/* <CgProfile style={{ paddingRight: "0.2em", fontSize: "2.2em" }} /> */}
            <Image src={assets.images.LOGIN.PROFILE} style={{marginRight: "0.3em"}}/>
            {"Vishal"}{" "}
          </Text>
        </>
      ) : (
        <Box className="nav_login_box" >
          <NavLink exact to="/login" activeClassName="active-link">
            Login{" "}
          </NavLink>
          {" | "}
          <NavLink exact to="/signup" activeClassName="active-link">
            {" "}
            Signup
          </NavLink>
        </Box>
      )}
    </Box>
  );
};

export default NavBar;
