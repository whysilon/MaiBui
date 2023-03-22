import React, { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import PasswordChecklist from "react-password-checklist";
import { Link } from "react-router-dom";

const ChangeUsernameForm = () => {
  const [enteredNewUsername, setEnterNewUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  const changeUsernameHandler = (event) => {
    event.preventDefault();
    window.location.href = "/account-center";
    console.log({ newUsername: enteredNewUsername });
  };

  const handleCancel = () => {
    if (enteredNewUsername !== "") {
      if (
        window.confirm(
          "You have unsaved changes. Are you sure you want to cancel?"
        )
      ) {
        window.location.href = "/account-center";
      }
    } else {
      window.location.href = "/account-center";
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
                onChange={(valid) => setValidUsername(valid)}
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
                  disabled={!enteredNewUsername && !validUsername}
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
