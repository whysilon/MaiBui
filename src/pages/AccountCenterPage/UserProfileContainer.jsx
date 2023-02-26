import React from "react";
import "./UserProfile.css";
//Passing data
import { userProfileData } from "./userProfileData.jsx";
import { Avatar } from "@mui/material";

const UserProfileContainer = () => {
  return (
    <div className="self-center user-profile ">
      <Avatar
        className="profile-img"
        src={userProfileData.img}
        sx={{ width: 200, height: 200 }}
      />
      <div className="self-center">
        <span className="greeting">
          Hi, <br />
        </span>
        <span className="username">{userProfileData.username}</span>
      </div>
    </div>
  );
};

export default UserProfileContainer;
