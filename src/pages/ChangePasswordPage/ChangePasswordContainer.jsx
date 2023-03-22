import React from "react";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import ChangePasswordForm from "./ChangePasswordForm";

const ChangePasswordContainer = () => {
  return (
    <div className="flex-col page">
      <AccountCenterNavBar />
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePasswordContainer;
