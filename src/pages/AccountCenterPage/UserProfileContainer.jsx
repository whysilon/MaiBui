import "./UserProfile.css";

import { Typography, Stack } from "@mui/material";

//Passing data
import { userProfileData } from "./userProfileData.jsx";
import { Avatar } from "@mui/material";
import FindUsername from "../../components/findUsername";

/**
 * Displays the user profile, including profile image and username.
 * @author Xing Mian
 * @returns HTML of User Profile Container
 */

//TODO: get date from database

const UserProfileContainer = () => {
  return (
        <Stack
          // direction="row"
          spacing={4}
          alignItems="center"
          // className="self-center"
          style={{ margin: "50px", alignSelf: "center" }}
        >
          <Avatar
            // className="profile-img"
            src={userProfileData.img}
            sx={{ width: 200, height: 200 }}
          />

          <Typography style={{display: "flex", justifyContent: "center", fontSize: 60}}>
            Welcome, <FindUsername />
          </Typography>
        </Stack>
  );
};

export default UserProfileContainer;
