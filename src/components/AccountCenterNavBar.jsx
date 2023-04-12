/**
 * Displays the Navigation Bar, which includes the Side Bar, user avatar and link to account center.
 * @see SideBar
 * @see Backbutton
 * @author Xing Mian
 * @return HTML of Navigation Bar

 */

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AccountCircle, Logout } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import SideBar from "./SideBar";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

import Backbutton from "../components/BackButton";
import { auth, db } from "../firebase-config";
import { collection } from "firebase/firestore";
import { useEffect } from "react";

/**
 * This function is a component for the navigation bar in the account center page.
 * @function AccountCenterNavBar
 * @param {Object} props - Props for the component.
 * @returns {JSX.Element} - Rendered component.
 */
function AccountCenterNavBar(props) {
  const usersCollectionRef = collection(db, "users");
  const location = useLocation();
  let navigate = useNavigate();
  const pathname = useLocation().pathname;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [username, setUsername] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [uid, setUid] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
        setUsername(user.displayName);
        setPhotoURL(user.photoURL);
      } else {
        setUid("");
        setUsername("");
        setPhotoURL("");
      }
    });

    return unsubscribe;
  }, [auth]);

  /**
   * This function handles the opening of the user menu.
   * @function handleMenu
   * @param {Object} event - The event object.
   */
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * This function handles the closing of the user menu.
   * @function handleClose
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * This function handles the navigation to the account center page.
   * @function handleAccountCenter
   */
  const handleAccountCenter = () => {
    // let path = "/account-center/";
    let path = "/account-center/";
    navigate(path);
  };

  /**
   * This function capitalizes the last segment of the path.
   * @function capitalizeLastSegment
   * @param {string} str - The string to capitalize.
   * @returns {string} - The capitalized string.
   */
  function capitalizeLastSegment(str) {
    const segments = str.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .replace(/%20/g, " ")
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1) + " ");
  }

  const logOut = () => {
    auth
      .signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        window.location.href = "/";
        alert("Logging out...");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const currentLocation = capitalizeLastSegment(pathname);

  return (
    //TODO: GET user profile data from databasae

    <AppBar
      position="static"
      style={{ backgroundColor: "#588157" }}
      className="navbar"
      elevation={0}
    >
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
              <Avatar src={photoURL} />
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
                  <Avatar src={photoURL} />
                  <Typography variant="p" fontSize={14} noWrap>
                    {username}
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
              <MenuItem
                onClick={() => {
                  handleClose();
                  auth.signOut().then(() => {
                    window.location.href = "/";
                  });
                }}
              >
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
