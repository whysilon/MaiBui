import React from "react";
import { useState } from "react";
import { Button, TextField, Stack } from "@mui/material";

//CSS
import "./ChangeUsernameForm.css";

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
  //TODO:backend
  return (
    <React.Fragment>
      <Stack
        spacing={6}
        sx={{
          alignSelf: "center",
          margin: 10,
          padding: 10,
          alignItems: "center",
        }}
      >
        <form className="change-password-form" onSubmit={changeUsernameHandler}>
          <div className="change-password-form-container">
            <div className="form-details">
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

              <Button type="submit">Confirm Change</Button>
            </div>
          </div>
        </form>
      </Stack>
    </React.Fragment>
  );
};

export default ChangeUsernameForm;
