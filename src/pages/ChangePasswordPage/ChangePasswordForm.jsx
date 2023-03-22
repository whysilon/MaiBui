import React from "react";
import { useState } from "react";
import {
  Switch,
  FormControlLabel,
  IconButton,
  TextField,
  InputAdornment,
  Button,
  Stack,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import PasswordChecklist from "react-password-checklist";

//CSS
import "./ChangePasswordForm.css";
import { margin } from "@mui/system";

const ChangePasswordForm = (props) => {
  const [enteredOldPwd, setEnterOldPwd] = useState("");
  const [enteredNewPwd, setEnterNewPwd] = useState("");
  const [enteredConfirmedPwd, setEnterConfirmPwd] = useState("");
  const [pwdShown, setPwdShown] = useState(false);
  const [validPwd, setValidPwd] = useState(false);

  const oldPwdHandler = (event) => {
    setEnterOldPwd(event.target.value);
  };
  const newPwdHandler = (event) => {
    setEnterNewPwd(event.target.value);
  };
  const confirmPwdHandler = (event) => {
    setEnterConfirmPwd(event.target.value);
  };

  const validPwdHandler = (valid) => {
    setValidPwd(valid);
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
    window.location.href = "/account-center";
    console.log(changePwdDetails);
  };

  const confirmChangeHandler = () => {
    console.log("Password is changed");
  };

  const handleCancel = () => {
    if (
      enteredOldPwd !== "" ||
      enteredNewPwd !== "" ||
      enteredConfirmedPwd !== ""
    ) {
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
    <Box>
      <form className="change-password-form" onSubmit={changePwdHandler}>
        <Stack
          spacing={4}
          sx={{
            alignSelf: "center",
            margin: 5,
            padding: 5,
            alignItems: "center",
          }}
        >
          <div className="form-details">
            <Stack spacing={3}>
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
                helperText={
                  enteredNewPwd === ""
                    ? "Empty field!"
                    : // : enteredNewPwd !== enteredConfirmedPwd
                      // ? "Passwords do not match!"
                      ""
                }
              ></TextField>

              <TextField
                className="input-rounded"
                value={enteredConfirmedPwd}
                onChange={confirmPwdHandler}
                type={pwdShown ? "text" : "password"}
                label="Confirm password"
                margin="normal"
                error={
                  enteredConfirmedPwd === "" ||
                  enteredNewPwd !== enteredConfirmedPwd
                }
                helperText={
                  enteredConfirmedPwd === ""
                    ? "Empty field!"
                    : enteredNewPwd !== enteredConfirmedPwd
                    ? "Passwords do not match!"
                    : ""
                }
              ></TextField>
            </Stack>

            <FormControlLabel
              label="Show password"
              control={<Switch onClick={togglePwdShown} />}
            />
            <PasswordChecklist
              className="signup-pwd-checker"
              rules={[
                "minLength",
                "capital",
                "lowercase",
                "number",
                "specialChar",
                "match",
              ]}
              minLength={8}
              value={enteredNewPwd}
              valueAgain={enteredConfirmedPwd}
              onChange={(isValid) => {
                validPwdHandler(isValid);
              }}
            />
            <Stack sx={{ margin: 5 }} direction="row" spacing={6}>
              <Button type="reset" id="cancel" onClick={handleCancel}>
                Cancel
              </Button>

              <Button
                type="submit"
                disabled={
                  !enteredConfirmedPwd ||
                  !enteredNewPwd ||
                  !enteredOldPwd ||
                  enteredNewPwd !== enteredConfirmedPwd ||
                  !validPwd
                }
              >
                Confirm Change
              </Button>
            </Stack>
          </div>
        </Stack>
      </form>
    </Box>
  );
};

export default ChangePasswordForm;
