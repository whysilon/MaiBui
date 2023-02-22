import React from "react";
import "./UserProfile.css";
//Passing data
import { userProfileData } from "./userProfileData.jsx";

const UserProfileContainer = () => {
  return (
    <div className="self-center user-profile ">
      <img className="profile-img" src={userProfileData.img} />
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
