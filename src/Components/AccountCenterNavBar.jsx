import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Chip, Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AccountCircle, Logout } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { userProfileData } from "../pages/AccountCenterPage/userProfileData";
import SideBar from "./SideBar";

//CSS
import "./NavBar.css";

//Components
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
// TODO:Functionality

function AccountCenterNavBar(props) {
  const location = useLocation();
  let navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAccountCenter = () => {
    let path = `/account-center`;
    navigate(path);
  };

  //function to get the current page name
  function capitalizeLastSegment(str) {
    const segments = str.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  const currentLocation = capitalizeLastSegment(pathname);

  return (
    // <AppBar
    //   className="navbar"
    //   style={{
    //     position: "sticky",
    //     top: "0",
    //     display: "flex",
    //     margin: "auto",
    //     height: "70px",
    //   }}
    // >
    //   <MenuIcon />
    //   <span
    //     onClick={() => {
    //       console.log(currentLocation);
    //     }}
    //     // style={{ color: "black" }}
    //     className="location-name sefl-center"
    //   >
    //     {currentLocation}
    //   </span>
    //   <HomeButton />
    //   {/* <p style={{ fontSize: "1rem", width: "20%" }}>Currently logged in as</p> */}
    //   <Chip
    //     onClick={handleAvatarChipClick}
    //     avatar={<Avatar src={userProfileData.img} />}
    //     label={userProfileData.username}
    //     variant="outlined"
    //   ></Chip>
    // </AppBar>

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" className="navbar">
        <Toolbar>
          <SideBar />
          <Typography
            variant="h4"
            align="center"
            noWrap="true"
            sx={{ flexGrow: 2 }}
          >
            {currentLocation}
          </Typography>

          {auth && (
            <div>
              <Chip
                onClick={handleMenu}
                avatar={<Avatar src={userProfileData.img} />}
                label={userProfileData.username}
                variant="outlined"
              ></Chip>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={anchorEl}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleAccountCenter();
                  }}
                >
                  <AccountCircle />
                  Account Center
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Logout />
                  Log Out
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AccountCenterNavBar;
