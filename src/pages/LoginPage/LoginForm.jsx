// CSS
import "./LoginForm.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Button,
  Slide,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { auth } from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Displays the login form of LoginContainer
 *
 * @author Marcus Yeo
 * @returns HTML of LoginForm
 */

const LoginForm = () => {
  /**
   * Authenticates the user on the server
   */
  const signIn = async (details) => {
    try {
      await signInWithEmailAndPassword(
        auth,
        details.email,
        details.password
      ).then(async (res) => {
        const token = details.email;
        localStorage.setItem("token", token);
        console.log(localStorage);
      });

      setAlertMessage("Login successful!");
      setSnackBarOpen(true);
      setSnackBarSeverity("success");

      setTimeout(() => {
        window.location.href = "/home";
      }, 1000); // Redirects to /home after 1 seconds
    } catch (e) {
      if (e.message === "Firebase: Error (auth/user-not-found).") {
        // alert("User not found!");
        setAlertMessage("User not found!");
        setSnackBarOpen(true);
        setSnackBarSeverity("error");
      } else {
        // alert("Wrong password!");
        setAlertMessage("Wrong password!");
        setSnackBarOpen(true);
        setSnackBarSeverity("error");
      }
    }
  };
  /**
   * Storage/setters for userename input variable in login
   * form
   */

  const [enteredEmail, setEnteredEmail] = useState("");

  /**
   * Storage/setters for password input variable in login
   * form
   */

  const [enteredPassword, setEnteredPassword] = useState("");

  /**
   * Set the open state of SnackBar
   */
  const [snackBarOpen, setSnackBarOpen] = useState(false);

  /**
   * Set the alert message that will be shown in the SnackBar
   */
  const [alertMessage, setAlertMessage] = useState("");

  /**
   * Set the severity of the SnackBar,
   * initially "error"
   */
  const [snackBarSeverity, setSnackBarSeverity] = useState("");

  /**
   * Handle the close of the SnackBar
   * @param {*} event User clicked
   * @param {*} reason SnackBar would not be close if the user clicked outside of it
   *
   */

  const handleSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBarOpen(false);
  };

  /**
   * Changes the username storage based on
   * input
   *
   * @param {onChange} event
   */

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  /**
   * Changes the password storage based on
   * input
   *
   * @param {onChange} event
   */

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  /**
   * Tallies the loginDetails with database
   * and transits to Home Page
   *
   * @param {onSubmit} event
   */

  const loginHandler = (event) => {
    event.preventDefault();

    let loginDetails = {
      email: enteredEmail,
      password: enteredPassword,
    };

    //Checks if details are blank
    if (loginDetails.email === "" || loginDetails.password === "") {
      // alert("Leave no fields blank!");
      setAlertMessage("Leave no fields blank!");
      setSnackBarOpen(true);
      setSnackBarSeverity("error");
    }
    //else checks details with database
    else {
      signIn(loginDetails);
    }
  };

  return (
    <form className="loginForm" onSubmit={loginHandler}>
      <div className="loginForm_container">
        <h1>Mai Bui</h1>
        <p>Your all in one eating aid</p>
        <div className="formDetails">
          <p>Email:</p>
          <TextField
            className="login-text"
            value={enteredEmail}
            onChange={emailHandler}
            type={"email"}
            variant="outlined"
            label="Enter your email"
            margin="normal"
            helperText={
              enteredEmail === ""
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
        <Stack spacing={2} sx={{ marginTop: "20px" }}>
          <Link to="/forgot-password" className="loginLinks">
            Forgot Password?
          </Link>
          <Button id="loginBtn" type="submit">
            Login
          </Button>
        </Stack>
        <div className="login-bottom-box"></div>
        <p className="smallText">
          Don't have an account?{" "}
          <Link to="/signup" className="loginLinks">
            Sign Up
          </Link>
        </p>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackBarOpen}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          TransitionComponent={Slide}
        >
          <Alert onClose={handleSnackBarClose} severity={snackBarSeverity}>
            {alertMessage}
          </Alert>
        </Snackbar>
      </div>
    </form>
  );
};

export default LoginForm;
