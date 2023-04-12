import { TextField } from "@mui/material";
import { useState } from "react";
import { auth } from "../../firebase-config";
import { sendPasswordResetEmail } from "firebase/auth";
import BackButton from "../../components/BackButton";
import { Button } from "@mui/material";
// CSS
import "./ForgotPassword.css";

/*todo : tally username with database and return password.
         display password after username tallied below button
*/

/**
 * Displays the ForgotPassword page directed from
 * LoginPage page
 *
 * @author Marcus Yeo
 * @returns HTML of ForgotPassword page
 */

const ForgotPasswordContainer = () => {
  //Storage/setter of username input
  const [forgotEmail, setForgotEmail] = useState("");
  const [error, setError] = useState("");

  /**
   * Changes content of username based on
   * input
   *
   * @param {onChange} event
   */

  const forgotEmailHandler = (event) => {
    setForgotEmail(event.target.value);
  };

  /**
   * Tallies username with database and returns
   * corresponding password
   *
   * @param {onSubmit} event
   */

  const submitHandler = async (event) => {
    event.preventDefault();

    let forgotpasswordDetails = {
      email: forgotEmail,
    };

    //blank input
    if (forgotpasswordDetails.email === "") {
      setError("Please enter an email!");
      return;
    }
    console.log(forgotpasswordDetails.email);
    try {
      await sendPasswordResetEmail(auth, forgotpasswordDetails.email);
      alert("Password reset email sent!");
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Invalid email format!");
      } else if (error.code === "auth/user-not-found") {
        setError("Email not found. Please try again!");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="forgotPassword-container">
      <BackButton />
      <form className="forgotPassword-form" onSubmit={submitHandler}>
        <h1>Forgot Password?</h1>
        <p1>Key in your email:</p1>
        <div className="forgotPassword-email-input">
          <TextField
            className="forgotEmail-text"
            value={forgotEmail}
            onChange={forgotEmailHandler}
            type={"text"}
            variant="outlined"
            label="Enter your email"
            helperText={error}
            error={error !== ""}
          />
        </div>
        <Button id="forgotBtn" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ForgotPasswordContainer;
