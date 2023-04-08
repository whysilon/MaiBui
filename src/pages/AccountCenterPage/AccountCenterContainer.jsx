// import React from "react";
import { Link } from "react-router-dom";

//CSS
import "./AccountCenterContainer.css";

//Components
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import UserProfileContainer from "./UserProfileContainer.jsx";
import { Stack } from "@mui/system";

/**
 * Displays the account center page for the current user
 *
 * @author Xing Mian
 * @returns HTML page of the Account Center
 */

function AccountCenterContainer() {



  return (
    <div className="flex-col page">
             <AccountCenterNavBar />
      <UserProfileContainer />

      <Stack spacing={4} sx={{ marginBottom: 20 }}>
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
        <span className="self-center hyperlink">
          <Link className="hyperlink" to="/account-center/change-password">
            Change password
          </Link>
        </span>
      </Stack>
      {/* <LogOutBtn /> */}
    </div>
  );
}

export default AccountCenterContainer;
