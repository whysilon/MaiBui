import React from "react";
import { useState } from "react";
import {
  Switch,
  FormControlLabel,
  IconButton,
  TextField,
  InputAdornment,
} from "@mui/material";
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

    // //Checks if details are blank
    // if (changeUsernameDetails.username == "") {
    //   alert("Leave no fields blank!");

    //   setEnterNewUsername("");
    // }
    // //else checks details with database
    // else {
    //   console.log(changeUsernameDetails);
    //   setEnterNewUsername("");
    // }
  };
  //TODO:backend
  return (
    <form className="change-username-form" onSubmit={changeUsernameHandler}>
      <div className="change-username-form-container">
        <div className="form-details">
          <p>New username:</p>
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

          <IconButton type="submit">Confirm Change</IconButton>
        </div>
      </div>
    </form>
  );
};

export default ChangeUsernameForm;
