// CSS
import "./LoginForm.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import { db, auth } from "../../firebase-config";
import {collection, addDoc, getDocs} from 'firebase/firestore';
import { signInWithEmailAndPassword } from "firebase/auth";

/**
 * Displays the login form of LoginContainer 
 * 
 * @author Marcus Yeo
 * @returns HTML of LoginForm
 */

const LoginForm = () => {

  const signIn = async (auth,email,password) => {
    try{
      const user = await signInWithEmailAndPassword(auth,email,password);
      window.location.href = '/home';
      alert('Login successful!')
    }
    catch(e){
      console.log(e.message);
      if(e.message=="Firebase: Error (auth/user-not-found)."){
        alert("User not found!")
      }
      else{
        alert("Password wrong!")
      }
    }
  }
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
      alert("Leave no fields blank!");
    }
    //else checks details with database
    else {
      signIn(auth, loginDetails.email,loginDetails.password);
      // window.location.href="/home"
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
        <div className="login-bottom-box">
          <Link to="/forgot-password" className="loginLinks">
            Forgot Password?
          </Link>
          <button type="submit">Login</button>
        </div>
        <p className="smallText">
            Don't have an account?{" "}
            <Link to="/signup"  className="loginLinks">
              Sign Up
            </Link>
          </p>
      </div>
    </form>
  );
};

export default LoginForm;
