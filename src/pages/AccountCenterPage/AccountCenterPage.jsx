// import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//CSS
import "./AccountCenterPage.css";

//Components
import AccountCenterNavBar from "../../Components/AccountCenterNavBar";
import LogOutBtn from "./LogOutBtn";
import UserProfileContainer from "./UserProfileContainer.jsx";

function AccountCenterPage() {
  return (
    <div className="flex-col page">
      <AccountCenterNavBar />
      <UserProfileContainer className="self-center" />
      <span
        onClick={() => {
          console.log("Change Username is clicked");
        }}
        className="self-center hyperlink"
      >
        <Link to="/account-center/change-username">Change username</Link>
      </span>
      {/* TODO: implement change username page */}
      <span
        onClick={() => {
          console.log("Change Password is clicked");
        }}
        className="self-center hyperlink"
      >
        <Link to="/account-center/change-password">Change password</Link>
      </span>
      {/* TODO:implement change password page */}
      <LogOutBtn />
    </div>
  );
}

export default AccountCenterPage;
