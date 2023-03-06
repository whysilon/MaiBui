import "./LoginForm.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const LoginForm = (props) => {
  const [enteredUsername, setEnteredUserName] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const loginDetails = {
      username: enteredUsername,
      password: enteredPassword,
    };

    //Checks if details are blank
    if (loginDetails.username == "" || loginDetails.password == "") {
      alert("Leave no fields blank!");
    }
    //else checks details with database
    else {
      console.log(loginDetails);
    }
  };

  return (
    <form className="loginForm" onSubmit={loginHandler}>
      <div className="loginForm_container">
        <h1>Mai Bui</h1>
        <p>Your all in one eating aid</p>
        <div className="formDetails">
          <p>Username:</p>
          <TextField
            className="login-text"
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
          <p>Password:</p>
          <TextField
            className="login-text"
            value={enteredPassword}
            onChange={passwordHandler}
            type={"password"}
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
        </div>
        <div className="login-bottom-box">
          <Link to="/forgotpassword" className="loginLinks">
            Forgot Password?
          </Link>
          <button type="submit">Login</button>
        </div>
        <p className="smallText">
            Don't have an account?{" "}
            <Link to="/signup" className="loginLinks">
              Sign Up
            </Link>
          </p>
      </div>
    </form>
  );
};

export default LoginForm;
