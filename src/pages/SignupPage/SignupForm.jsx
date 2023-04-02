// CSS
import "./SignupForm.css";

import React, { useState } from "react";
import { Link, createHashRouter } from "react-router-dom";
import { TextField, FormControlLabel, Switch } from "@mui/material";
import PasswordChecklist from "react-password-checklist"
import { WindowSharp } from "@mui/icons-material";
import { db } from "../../firebase-config";
import {collection, addDoc, getDocs} from 'firebase/firestore';


//TODO: Must be able to check if username is taken

/**
 * Displays the sign up form of the sign up page 
 * 
 * @author Marcus Yeo
 * @returns HTML of Sign Up form
 */

const SignupForm = () => {

  const usersCollectionRef = collection(db,"users");
  const [existUser, setUserExist] = useState(false);

  const userExist = async (details) => {
    //check for username duplicate
    const data = await getDocs(usersCollectionRef);
    data.docs.forEach((doc) => {
      if(doc.data().username === details.username){
        setUserExist(true);
      }
      else{
        setUserExist(false);
      }
    })
  }

  const createUser = async (details) => {
    await addDoc(usersCollectionRef, {username: details.username, password: details.password, calories: 0});
  };
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
  }

/**
 * Changes validName boolean based on validName input
 * 
 * @param {onChange} event 
 */

  const validNameHandler = (valid) => {
    setValidName(valid);
  }

/**
 * POSTS signup details and logins the user
 * to homepage
 * 
 * @param {onSubmit} event 
 */

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
      userExist(signupDetails);
      console.log(existUser);
      if(existUser){
        createUser(signupDetails);
        window.location.href = "/login";
      }
      else{
        alert("Username taken!");
      }
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

          {/* Checks password */}
          <PasswordChecklist
            className = "signup-pwd-checker"
            rules={["minLength","capital","lowercase","number","specialChar","match"]}
            minLength={8}
            value={enteredPassword}
            valueAgain={enteredCfmPassword}
            onChange={(isValid) => {validPwdHandler(isValid)}}
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
          <button type="submit" href="#url" id="signup-link">Sign Up</button>
        </div>
      </div>
    </form>
  );
};

export default SignupForm;
