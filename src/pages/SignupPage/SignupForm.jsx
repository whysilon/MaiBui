import "./SignupForm.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import PasswordChecklist from "react-password-checklist"


// Must be able to check if username is taken


const SignupForm = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [enteredCfmPassword, setEnteredCfmPassword] = useState("");
  const [pwdShown, setPwdShown] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [validName, setValidName] = useState(false);

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const cfmpasswordHandler = (event) => {
    setEnteredCfmPassword(event.target.value);
  };

  const togglePwdShown = () => {
    setPwdShown(!pwdShown);
  };
  
  const validPwdHandler = (valid) => {
    setValidPwd(valid);
  }

  const validNameHandler = (valid) => {
    setValidName(valid);
  }

  const signupHandler = (event) => {
    event.preventDefault();

    const signupDetails = {
      username: enteredUsername,
      password: enteredPassword,
      cfmPassword: enteredCfmPassword,
    };

    //Checks if details are blank
    if(!validName && !validPwd){
      alert("Please enter a username and password");
    }
    else if(!validName){
      alert("Username not valid");
    }
    else if(!validPwd){
      alert("Password not valid");
    }
    //else checks details with database
    else {
      alert("Successfully Signed Up! Redirecting...")
      console.log(signupDetails);
    }
  };

  return (
    <form className="signupForm" onSubmit={signupHandler}>
      <div className="signupForm_container">
        <h1>Sign Up</h1>
        <p>Start your healthy journey</p>
        <div className="signup-formDetails">

          {/* Checks username */}
          <PasswordChecklist
            rules={["minLength","maxLength"]}
            maxLength={13}
            minLength={1}
            value={enteredUsername}
            onChange={(isValid) => {validNameHandler(isValid)}}
            messages={{
              maxLength: "Username must be 13 characters long maximum.",
              minLength: "Username must be 1 characters long minimally.",
            }}
          />

          <p>Username:</p>
          <TextField
            className="signup-text_1"
            value={enteredUsername}
            onChange={usernameHandler}
            type={"text"}
            variant="outlined"
            label="Enter your username"
            margin="normal"
            helperText={
              enteredUsername === ""
                ? "Empty field!"
                : // : enteredNewPwd !== enteredConfirmedPwd
                  // ? "Passwords do not match!"
                  ""
            }
          ></TextField>

          {/* Checks password */}
          <PasswordChecklist
            className = "signup-pwd-checker"
            rules={["minLength","capital","lowercase","number","specialChar","match"]}
            minLength={8}
            value={enteredPassword}
            valueAgain={enteredCfmPassword}
            onChange={(isValid) => {validPwdHandler(isValid)}}
          />

          <p>Password:</p>
          <TextField
            className="signup-text"
            value={enteredPassword}
            onChange={passwordHandler}
            type={pwdShown ? "text" : "password"}
            variant="outlined"
            label="Enter your password"
            helperText={
              enteredPassword === ""
                ? "Empty field!"
                : // : enteredNewPwd !== enteredConfirmedPwd
                  // ? "Passwords do not match!"
                  ""
            }
          ></TextField>

          <p>Confirm Password:</p>
          <TextField
            className="signup-text"
            value={enteredCfmPassword}
            onChange={cfmpasswordHandler}
            type={pwdShown ? "text" : "password"}
            variant="outlined"
            label="Confirm password"
            helperText={
              enteredCfmPassword === ""
                ? "Empty field!"
                : // : enteredNewPwd !== enteredConfirmedPwd
                  // ? "Passwords do not match!"
                  ""
            }
          ></TextField>
        </div>

        <div className="signup-button">
          <FormControlLabel
              label="Show password"
              control={<Switch onClick={togglePwdShown} />}
            />
          <button type="submit">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
