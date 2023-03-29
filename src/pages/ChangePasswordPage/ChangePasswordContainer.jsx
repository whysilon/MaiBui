/**
 * Displays the ChangePasswordContainer page, which is responsible for rendering the change password page.
 * @see AccountCenterNavBar
 * @see ChangePasswordForm
 * @author Xing Mian
 * @return HTML of Change Password Container
 
 */

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
