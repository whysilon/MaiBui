// import React from "react";

//CSS
import "./AccountCenter.css";

//Components
import UserProfile from "./UserProfile.jsx";
import NavBar from "../../Components/NavBar";

//Passing data
// import { userProfileData } from "./userProfileData.jsx";

function AccountCenter() {
  const currentLocation = "Account Center"; //TODO:replace with useNavigate

  return (
    <div className="flex-col page">
      <NavBar currentLocation={currentLocation} />
      <UserProfile className="self-center" />
      <span
        onClick={() => {
          console.log("Change Username is clicked");
        }}
        className="self-center hyperlink"
      >
        Change username
      </span>
      {/* TODO: implement change username page */}
      <span
        onClick={() => {
          console.log("Change Password is clicked");
        }}
        className="self-center hyperlink"
      >
        Change password
      </span>
      {/* TODO:implement change password page */}
      <button
        onClick={() => {
          console.log("Log Out is clicked");
          // style = {};
        }}
        className="flex-col justify-start items-center self-center button"
      >
        {/* Log Out */}
        <span className="button-text">Log Out</span>
        {/* TODO: implement log out */}
      </button>
    </div>
  );
}

export default AccountCenter;
