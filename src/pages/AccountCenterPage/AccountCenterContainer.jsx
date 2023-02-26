// import React from "react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

//CSS
import "./AccountCenterContainer.css";

//Components
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import LogOutBtn from "./LogOutBtn";
import UserProfileContainer from "./UserProfileContainer.jsx";

function AccountCenterContainer() {
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
        <Link className="hyperlink" to="/account-center/change-username">
          Change username
        </Link>
      </span>

      <span
        onClick={() => {
          console.log("Change Password is clicked");
        }}
        className="self-center hyperlink"
      >
        <Link className="hyperlink" to="/account-center/change-password">
          Change password
        </Link>
      </span>

      <LogOutBtn />
    </div>
  );
}

export default AccountCenterContainer;
