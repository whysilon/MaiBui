// CSS
import "./SignupForm.css";

import React, { useState } from "react";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import PasswordChecklist from "react-password-checklist";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../firebase-config.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";

/**
 * Displays the sign up form of the sign up page
 *
 * @author Marcus Yeo
 * @returns HTML of Sign Up form
 */

const SignupForm = () => {
  /**
   * Collects all the documents from the firebase database under the collection user
   * @returns {Array<DocumentSnapshot>}
   */
  const usersCollectionRef = collection(db, "users");

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
        photoURL:
          "https://cod,efun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425892670871737.png",
      })
        .then(() => {
          console.log("Update username successfully");
          console.log(auth.currentUser.displayName);
        })
        .catch((error) => {
          console.log(error);
        });

      await addDoc(usersCollectionRef, {
        calories: 0,
        email: details.email,
        username: details.username,
        visited: [],
      });

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
    if (!validName && !validPwd) {
      alert("P");
    } else if (!validName) {
      alert("Username not valid");
    } else if (!validPwd) {
      alert("Password not valid");
    }
    //else checks details with database
    else {
      registerUser(signupDetails);
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

          <p className="pHeaders">Username:</p>
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

          <p className="pHeaders">Email:</p>
          <TextField
            className="signup-text_1"
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

          <p className="pHeaders">Password:</p>
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

          <p className="pHeaders">Confirm Password:</p>
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
          <button type="submit" href="#url" id="signup-link">
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
