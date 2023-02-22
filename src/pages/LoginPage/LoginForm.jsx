import "./LoginForm.css";
import React, { useState } from "react";

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
      setEnteredUserName("");
      setEnteredPassword("");
    }
    //else checks details with database
    else {
      console.log(loginDetails);
      setEnteredUserName("");
      setEnteredPassword("");
    }
  };

  return (
    <form className="loginForm" onSubmit={loginHandler}>
      <div className="loginForm_container">
        <h1>Mai Bui</h1>
        <p>Your all in one eating aid</p>
        <div className="formDetails">
          <p>Username:</p>
          <input
            value={enteredUsername}
            onChange={usernameHandler}
            type="text"
          />
          <p>Password:</p>
          <input
            value={enteredPassword}
            type="password"
            onChange={passwordHandler}
          />
        </div>
        <a href="#forgotPassword" className="smallText">
          Forgot your password?
        </a>
        <button type="submit">Login</button>
        <p className="smallText">
          Don't have an account?<a href="#signup"> Sign Up</a>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
