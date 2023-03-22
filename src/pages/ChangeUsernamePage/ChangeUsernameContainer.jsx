import React from "react";

//Components
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import ChangeUsernameForm from "./ChangeUsernameForm";
import { Container } from "@mui/material";
const ChangeUsernameContainer = () => {
  return (
    <>
      <div className="flex-col page">
        <AccountCenterNavBar />
        <ChangeUsernameForm />
      </div>
    </>
  );
};

export default ChangeUsernameContainer;
