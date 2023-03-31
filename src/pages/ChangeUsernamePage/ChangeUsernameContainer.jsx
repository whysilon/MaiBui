/**
 Displays the ChangeUsernameContainer page, which is responsible for rendering the change username page.
 * @author Xing Mian
 * @return HTML of Change Username Form

 */
import React from "react";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import ChangeUsernameForm from "./ChangeUsernameForm";

/**
 * This component is responsible for rendering the Change Username page.
 * It contains the AccountCenterNavBar and ChangeUsernameForm components.
 */
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
