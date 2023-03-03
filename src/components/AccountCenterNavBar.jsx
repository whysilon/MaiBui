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
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Backbutton from "../components/BackButton";

//CSS
// import "./NavBar.css";

//Components

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
    //TODO:conditional redering of login/un logged in pages (home, account center and its child pages)
    //TODO: databasae

    <AppBar position="static" color="inherit" className="navbar">
      <Toolbar>
        <SideBar />
        <Backbutton />

        <Typography
          variant="h5"
          align="center"
          // noWrap="true"
          sx={{ flexGrow: 1 }}
        >
          {currentLocation}
        </Typography>

        {auth && (
          <div>
            <IconButton
              onClick={handleMenu}
              edge={false}
              style={{ width: "100%", margin: "2px" }}
              sx={{
                p: 0,
                ...(open && {
                  "&:before": {
                    zIndex: 1,
                    content: "''",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    position: "absolute",
                  },
                }),
              }}
            >
              <Avatar src={userProfileData.img} />
            </IconButton>

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
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  p: 0,
                  mt: 1.5,
                  ml: 0.75,
                  width: 180,
                  "& .MuiMenuItem-root": {
                    typography: "body2",
                    borderRadius: 0.75,
                  },
                },
              }}
            >
              <Box sx={{ my: 1.5, px: 2.5 }}>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src={userProfileData.img} />
                  <Typography variant="h6" noWrap>
                    {userProfileData.username}
                  </Typography>
                </Stack>
              </Box>

              <Divider sx={{ borderStyle: "dashed" }} />
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
  );
}

export default AccountCenterNavBar;
