/**
 * Displays Change Username Form
 * @author Xing Mian
 * @return HTML of Change Username Form

 */
import React, { useState } from "react";
import { Button, TextField, Stack, Alert, Snackbar } from "@mui/material";
import PasswordChecklist from "react-password-checklist";
import { auth } from "../../firebase-config";
import { updateProfile } from "firebase/auth";

/**
 * A form component for changing the username of an account.
 * @returns {JSX.Element} A form component for changing the username of an account.
 */
const ChangeUsernameForm = () => {
  /**
   * State for the new username input field.
   */
  const [enteredNewUsername, setEnterNewUsername] = useState("");
  /**
   * State for the username validation.
   */
  const [validUsername, setValidUsername] = useState(false);

  /**
   * A function that handles the submission of the form to change the username.
   * @param {Event} event - The event object.
   */

  const validUsernameHandler = (isValid) => {
    setValidUsername(isValid);
  };

  const changeUsernameHandler = (event) => {
    const user = auth.currentUser;
    event.preventDefault();
    const changeUsernameDetails = {
      newUsername: enteredNewUsername,
    };
    updateProfile(user, {
      displayName: changeUsernameDetails.newUsername,
    })
      .then(() => {
        console.log(user.displayName);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        window.location.href = "/account-center";
      });

    console.log({ newUsername: enteredNewUsername });
  };

  /**
   * A function that handles the cancellation of the form to change the username.
   */
  const handleCancel = () => {
    if (enteredNewUsername !== "") {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to cancel?"
        )
      ) {
        setTimeout(() => {
          window.location.href = "/account-center";
        }, 0);
      }
    } else {
      setTimeout(() => {
        window.location.href = "/account-center";
      }, 0);
    }
  };

  return (
    <React.Fragment>
      <Stack
        spacing={6}
        sx={{
          alignSelf: "center",
          margin: 5,
          padding: 5,
          alignItems: "center",
        }}
      >
        <form className="change-password-form" onSubmit={changeUsernameHandler}>
          <div className="change-password-form-container">
            <div className="form-details">
              <Stack>
                <TextField
                  value={enteredNewUsername}
                  onChange={(event) => setEnterNewUsername(event.target.value)}
                  label="Enter new username"
                  margin="normal"
                  error={enteredNewUsername === ""}
                  helperText={enteredNewUsername === "" ? "Empty field!" : " "}
                  type="text"
                />
              </Stack>
              <PasswordChecklist
                rules={["minLength", "maxLength"]}
                maxLength={13}
                minLength={1}
                value={enteredNewUsername}
                onChange={(isValid) => {
                  setValidUsername(isValid);
                  console.log(isValid);
                }}
                messages={{
                  maxLength: "Username must be 13 characters long maximum.",
                  minLength: "Username must be 1 characters long minimally.",
                }}
              />

              <Stack sx={{ margin: 5 }} direction="row" spacing={6}>
                <Button type="reset" id="cancel" onClick={handleCancel}>
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={!enteredNewUsername || !validUsername}
                >
                  Confirm Change
                </Button>
              </Stack>
            </div>
          </div>
        </form>
      </Stack>
    </React.Fragment>
  );
};

export default ChangeUsernameForm;
