import React from "react";
import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";
import PasswordChecklist from "react-password-checklist";
//CSS
// import "./ChangeUsernameForm.css";
import { Link } from "react-router-dom";

const ChangeUsernameForm = () => {
  const [enteredNewUsername, setEnterNewUsername] = useState("");
  const [validUsername, setValidUsername] = useState(false);

  const newUsernameHandler = (event) => {
    setEnterNewUsername(event.target.value);
  };
  const changeUsernameHandler = (event) => {
    event.preventDefault();
    const changeUsernameDetails = {
      newUsername: enteredNewUsername,
    };

    window.location.href = "/account-center";
    console.log(changeUsernameDetails);
  };

  const validUsernameHandler = (valid) => {
    setValidUsername(valid);
  };

  //TODO:check with DB
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
                  onChange={newUsernameHandler}
                  label="Enter new username"
                  margin="normal"
                  error={enteredNewUsername === ""}
                  helperText={enteredNewUsername === "" ? "Empty field!" : " "}
                  type="text"
                >
                  {/* Enter new username here */}
                </TextField>
              </Stack>
              <PasswordChecklist
                rules={["minLength", "maxLength"]}
                maxLength={13}
                minLength={1}
                value={enteredNewUsername}
                onChange={(validUsername) => {
                  validUsernameHandler(validUsername);
                }}
                messages={{
                  maxLength: "Username must be 13 characters long maximum.",
                  minLength: "Username must be 1 characters long minimally.",
                }}
              />

              <Stack sx={{ margin: 5 }} direction="row" spacing={6}>
                <Link to={"/account-center"}>
                  <Button type="reset" id="cancel">
                    Cancel
                  </Button>
                </Link>

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
