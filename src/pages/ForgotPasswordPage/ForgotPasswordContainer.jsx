import { TextField } from '@mui/material';
import { useState } from 'react';
import './ForgotPassword.css';

/*todo : tally username with database and return password.
         display password after username tallied below button
*/


const ForgotPasswordContainer = () => {
    const [forgotUsername, setForgotUsername] = useState("");

    const forgotUsernameHandler = (event) => {
        setForgotUsername(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        let forgotpasswordDetails = {
            username : forgotUsername,
        };

        if(forgotpasswordDetails.username === ""){
            alert("Please enter a username!");
        }
        //todo: username not found in database
        //username found
        else{
            console.log(forgotpasswordDetails.username);
            //change css to display
            let returnButton = document.getElementById("forgotPassword-return");
            let displayPassword = document.getElementById("forgotPassword-displayContainer");
            let password = document.getElementById("forgotPassword-display");

            returnButton.style.opacity = "100";
            returnButton.style.pointerEvents = "auto";
            displayPassword.style.opacity = "100";
            password.innerHTML="forgottenPassword";
        }
    }

    return (
      <div className="forgotPassword-container">
        <form className="forgotPassword-form" onSubmit={submitHandler}>
          <h1>Forgot Password?</h1>
          <p1>Key in your username:</p1>
          <div className="forgotPassword-username-input">
            <TextField
              className="forgotUsername-text"
              value={forgotUsername}
              onChange={forgotUsernameHandler}
              type={"text"}
              variant="outlined"
              label="Enter your username"
              helperText={forgotUsername === "" ? "Empty field!" : ""}
            />
          </div>
          <button type="submit">Submit</button>

          {/* Displays password below button */}
          <span id="forgotPassword-displayContainer">
            Your password is: <span id="forgotPassword-display"></span>
          </span>
          <button id="forgotPassword-return"><a href="/login">Back to login</a></button>
        </form>
      </div>
    );
}

export default ForgotPasswordContainer;