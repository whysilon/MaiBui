import React from "react";
import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";

//CSS
import "./ChangeUsernameForm.css";
import { Link } from "react-router-dom";

const ChangeUsernameForm = () => {
  const [enteredNewUsername, setEnterNewUsername] = useState("");
  const newUsernameHandler = (event) => {
    setEnterNewUsername(event.target.value);
  };
  const changeUsernameHandler = (event) => {
    const changeUsernameDetails = {
      newUsername: enteredNewUsername,
    };
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

              <Stack sx={{ margin: 5 }} direction="row" spacing={6}>
                <Button
                  onClick={window.location.assign("/account-center")}
                  type="reset"
                  id="cancel"
                >
                  Cancel
                </Button>

                <Button type="submit" disabled={!enteredNewUsername}>
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
