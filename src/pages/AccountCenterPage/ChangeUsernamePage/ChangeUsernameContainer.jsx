import React from "react";

//Components
import AccountCenterNavBar from "../../../components/AccountCenterNavBar";
import ChangeUsernameForm from "./ChangeUsernameForm";

const ChangeUsernameContainer = () => {
  return (
    <div>
      <AccountCenterNavBar />
      <ChangeUsernameForm />
    </div>
  );
};

export default ChangeUsernameContainer;
