import React from "react";
import { useState } from "react";
import {
  Switch,
  FormControlLabel,
  IconButton,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

//CSS
import "./ChangePasswordForm.css";

const ChangePasswordForm = (props) => {
  const [enteredOldPwd, setEnterOldPwd] = useState("");
  const [enteredNewPwd, setEnterNewPwd] = useState("");
  const [enteredConfirmedPwd, setEnterConfirmPwd] = useState("");
  const [pwdShown, setPwdShown] = useState(false);

  const oldPwdHandler = (event) => {
    setEnterOldPwd(event.target.value);
  };
  const newPwdHandler = (event) => {
    setEnterNewPwd(event.target.value);
  };
  const confirmPwdHandler = (event) => {
    setEnterConfirmPwd(event.target.value);
  };

  function clearInputField() {
    setEnterOldPwd("");
    setEnterNewPwd("");
    setEnterConfirmPwd("");
  }
  const togglePwdShown = () => {
    setPwdShown(!pwdShown);
  };

  //TODO: check with DB
  const changePwdHandler = (event) => {
    event.preventDefault();

    const changePwdDetails = {
      oldPwd: enteredOldPwd,
      newPwd: enteredNewPwd,
      confirmedPwd: enteredConfirmedPwd,
    };
  };

  return (
    <React.Fragment>
      <form className="change-password-form" onSubmit={changePwdHandler}>
        <div className="change-password-form-container">
          <div className="form-details">
            <TextField
              className="input-rounded"
              value={enteredOldPwd}
              onChange={oldPwdHandler}
              type={pwdShown ? "text" : "password"}
              variant="outlined"
              label="Enter old password"
              margin="normal"
              error={enteredOldPwd === ""}
              helperText={enteredOldPwd === "" ? "Empty field!" : " "}

              //TODO: error helper text for 2nd codition
              //TODO:input radius
            ></TextField>

            <br />
            <TextField
              className="input-rounded"
              value={enteredNewPwd}
              onChange={newPwdHandler}
              type={pwdShown ? "text" : "password"}
              variant="outlined"
              label="Enter new password"
              margin="normal"
              error={
                enteredNewPwd === "" || enteredNewPwd !== enteredConfirmedPwd
              }
              helperText={enteredNewPwd === "" ? "Empty field!" : " "}
            ></TextField>
            <br />
            <TextField
              className="input-rounded"
              value={enteredConfirmedPwd}
              onChange={confirmPwdHandler}
              type={pwdShown ? "text" : "password"}
              label="Confirm new password"
              margin="normal"
              error={
                enteredConfirmedPwd === "" ||
                enteredNewPwd !== enteredConfirmedPwd
              }
              helperText={enteredConfirmedPwd === "" ? "Empty field!" : " "}
            ></TextField>
            <br />

            <FormControlLabel
              label="Show password"
              control={<Switch onClick={togglePwdShown} />}
            />

            <Button type="submit">Confirm Change</Button>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};

export default ChangePasswordForm;
