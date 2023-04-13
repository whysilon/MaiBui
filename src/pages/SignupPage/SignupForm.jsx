// CSS
import "./SignupForm.css";

import React, { useState } from "react";
import { TextField, FormControlLabel, Switch, Button } from "@mui/material";
import PasswordChecklist from "react-password-checklist";
import { auth, db } from "../../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { generateGravatar } from "../../helpers/accountHelpers";
import { setDoc, doc } from "firebase/firestore";

/**
 * Displays the sign up form of the sign up page
 *
 * @author Marcus Yeo
 * @returns HTML of Sign Up form
 */

const SignupForm = () => {
  /**
   * Registers user on the database and at the same time, creates an account on the database to faciliate
   * login and log out.
   */
  const registerUser = async (details) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        details.email,
        details.password
      );

      await updateProfile(auth.currentUser, {
        displayName: details.username,
        photoURL: generateGravatar(details.email),
      })
        .then(() => {
          console.log(auth.currentUser.displayName);
        })
        .catch((error) => {
          console.log(error);
        });

      await setDoc(doc(db, "users", details.email), {
        calories: 0,
        username: details.username,
        visited: [],
      });
      localStorage.setItem("token", details.email);

      window.location.href = "/home";
      alert(`${details.email} successfully registered!`);
    } catch (e) {
      console.log(e.message);
      if (e.message === "Firebase: Error (auth/missing-email).") {
        alert("Email is blank!");
      } else {
        alert("Email already taken!");
      }
    }
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  /**
   * Storage/setters of username input variable
   */
  const [enteredUsername, setEnteredUserName] = useState("");
  /**
   * Storage/setters of password input variable
   */
  const [enteredPassword, setEnteredPassword] = useState("");
  /**
   * Storage/setters of cfmpassword input variable
   */
  const [enteredCfmPassword, setEnteredCfmPassword] = useState("");
  /**
   * Storage/setters of show password boolean variable
   */
  const [pwdShown, setPwdShown] = useState(false);
  /**
   * Storage/setters of password validator boolean variable
   */
  const [validPwd, setValidPwd] = useState(false);
  /**
   * Storage/setters of name validator boolean variable
   */
  const [validName, setValidName] = useState(false);

  /**
   * Changes username storage based on username input
   *
   * @param {onChange} event
   */

  const usernameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  /**
   * Changes password storage based on password input
   *
   * @param {onChange} event
   */

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  /**
   * Changes cfmpassword storage based on cfmpassword input
   *
   * @param {onChange} event
   */

  const cfmpasswordHandler = (event) => {
    setEnteredCfmPassword(event.target.value);
  };

  /**
   * Changes togglPwd variable based on togglePwd input
   *
   * @param {onClick} event
   */

  const togglePwdShown = () => {
    setPwdShown(!pwdShown);
  };

  /**
   * Changes validPwd boolean based on validPwd input
   *
   * @param {onChange} event
   */

  const validPwdHandler = (valid) => {
    setValidPwd(valid);
  };

  /**
   * Changes validName boolean based on validName input
   *
   * @param {onChange} event
   */

  const validNameHandler = (valid) => {
    setValidName(valid);
  };

  /**
   * POSTS signup details and logins the user
   * to homepage
   *
   * @param {onSubmit} event
   */

  const signupHandler = (event) => {
    event.preventDefault();

    const signupDetails = {
      email: enteredEmail,
      username: enteredUsername,
      password: enteredPassword,
      cfmPassword: enteredCfmPassword,
    };

    //Checks if details are blank
    if (
      signupDetails.password === "" ||
      signupDetails.username === "" ||
      signupDetails.email === ""
    ) {
      alert("No blank inputs!");
    } else if (!validName) {
      alert("Username not valid");
    } else if (!validPwd) {
      alert("Password not valid");
    }
    //else checks details with database
    // else {
    registerUser(signupDetails);
    // }
  };

  return (
    <form className="signupForm" onSubmit={signupHandler}>
      <div className="signupForm_container">
        <h1>Sign Up</h1>
        <p>Start your healthy journey</p>
        <div className="signup-formDetails">
          {/* Checks username */}

          <p className="pHeaders">Username:</p>
          <TextField
            className="signup-text_1"
            value={enteredUsername}
            onChange={usernameHandler}
            type={"text"}
            variant="outlined"
            label="Enter your username"
            margin="normal"
            helperText={enteredUsername === "" ? "Empty field!" : ""}
          ></TextField>
          <PasswordChecklist
            rules={["minLength", "maxLength"]}
            maxLength={13}
            minLength={1}
            value={enteredUsername}
            onChange={(isValid) => {
              validNameHandler(isValid);
            }}
            messages={{
              maxLength: "Username must be 13 characters long maximum.",
              minLength: "Username must be 1 characters long minimally.",
            }}
          />

          <p className="pHeaders">Email:</p>
          <TextField
            className="signup-text_1"
            value={enteredEmail}
            onChange={emailHandler}
            type={"email"}
            variant="outlined"
            label="Enter your email"
            margin="normal"
            helperText={enteredEmail === "" ? "Empty field!" : ""}
          ></TextField>

          <p className="pHeaders">Password:</p>
          <TextField
            className="signup-text"
            value={enteredPassword}
            onChange={passwordHandler}
            type={pwdShown ? "text" : "password"}
            variant="outlined"
            label="Enter your password"
            helperText={enteredPassword === "" ? "Empty field!" : ""}
          ></TextField>

          <p className="pHeaders">Confirm Password:</p>
          <TextField
            className="signup-text"
            value={enteredCfmPassword}
            onChange={cfmpasswordHandler}
            type={pwdShown ? "text" : "password"}
            variant="outlined"
            label="Confirm password"
            helperText={enteredCfmPassword === "" ? "Empty field!" : ""}
          ></TextField>
        </div>
        {/* Checks password */}
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
          value={enteredPassword}
          valueAgain={enteredCfmPassword}
          onChange={(isValid) => {
            validPwdHandler(isValid);
          }}
        />

        <div className="signup-button">
          <FormControlLabel
            label="Show password"
            control={<Switch onClick={togglePwdShown} />}
          />
          <Button
            id="signup-link"
            type="submit"
            style={{ color: "white", backgroundColor: "#344E41" }}
            disabled={
              !enteredPassword ||
              !enteredCfmPassword ||
              !enteredUsername ||
              !enteredEmail ||
              !validName ||
              !validPwd
            }
          >
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
