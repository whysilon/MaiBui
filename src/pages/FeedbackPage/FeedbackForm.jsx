import "./FeedbackForm.css";
import React, { useState, useEffect} from "react";
import { TextField } from "@mui/material";
import StarRating from "../../components/StarRating";

/**
 * Displays the feedback form showed on
 * FeedbackContainer
 * 
 * @author Marcus Yeo
 * @returns HTML of feedback form
 */

const FeedbackForm = () => {
  /**
   * Sets rating storage based on change
   * in StarRating componenet
   * 
   * @param {onClick} event 
   */
  const saveStarRatingHandler = (enteredStarRating) => {
    setEnteredRating(enteredStarRating)
  }
  /**Storage/setters for feedback form 
   * input variables */
  const [enteredRating, setEnteredRating] = useState(0);
  const [enteredExp, setEnteredExp] = useState("");
  const [expCount, setExpCount] = useState("");

  /**
   * Sets experience storage based on change
   * in experience input
   * 
   * Warns user in red if input length >= 512 by
   * making input red
   * 
   * @param {onChange} event 
   */

  const expHandler = (event) => {
    if(enteredExp.length >= 512){
    document.getElementById("exp").style.color = "red";
    }
    else{
      document.getElementById("exp").style.color = "black";
    }
    setEnteredExp(event.target.value);
  };

  /**
   * Coallates all details in feedback form and
   * POSTS to database
   * 
   * @param {onSubmit} event 
   */

  const feedbackHandler = (event) => {
    event.preventDefault();

    let feedbackDetails = {
      rating: enteredRating,
      exp: enteredExp,
    };

    //Checks if details are blank
    if (
      feedbackDetails.rating === 0 ||
      feedbackDetails.exp === ""
    ) {
      alert("Leave no fields blank!");
      feedbackDetails = {rating:0,exp:""};
      return;
    }

    //Checks if experience is too short
    if(feedbackDetails.exp.length > 512){
      alert("Keep feedback within 512 characters!");
      return;
    }

    //else checks details with database
    else {
      console.log(feedbackDetails);
      alert("Successful submission!");
      setEnteredRating(0)
      setEnteredExp("");
      setExpCount(0);
    }
  };
  /**
   * Updates character count of experience input
   */
  useEffect(() => {
    // update char count (including whitespaces)
    setExpCount(enteredExp.length);
  }, [enteredExp]);

  return (
    <form className="feedbackForm" onSubmit={feedbackHandler}>
      <div className="feedbackblock-1">
        <div className="details">
          <h1>Feedback</h1>
          <span>Your feedback is greatly appreciated.</span>
        </div>
      </div>

      <div className="feedbackblock-2">
        <div className="ratingName">
          <p>Rating:</p>
          <StarRating onSaveStarRating = {saveStarRatingHandler} />
        </div>
        <div className = "experience">
          <p>Details Of Experience:</p>
          <TextField
                className="exp"
                value={enteredExp}
                onChange={expHandler}
                type={"textarea"}
                variant="outlined"
                margin="normal"
                multiline
                cols={40}
                rows={5}
                helperText={
                  enteredExp === ""
                    ? "Empty field!"
                    : // : enteredNewPwd !== enteredConfirmedPwd
                      // ? "Passwords do not match!"
                      ""
                }
              ></TextField>
        </div>
        <div className = "feedbackBottom">
          <span id="exp">Character Count: {expCount}</span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
