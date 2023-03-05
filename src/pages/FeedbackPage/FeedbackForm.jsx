import "./FeedbackForm.css";
import React, { useState, useEffect} from "react";
import { TextField } from "@mui/material";

const FeedbackForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredExp, setEnteredExp] = useState("");
  const [expCount, setExpCount] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);

  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const expHandler = (event) => {
    if(enteredExp.length >= 512){
    document.getElementById("exp").style.color = "red";
    }
    else{
      document.getElementById("exp").style.color = "black";
    }
    setEnteredExp(event.target.value);
  };

  const feedbackHandler = (event) => {
    event.preventDefault();

    let feedbackDetails = {
      name: enteredName,
      age: enteredAge,
      exp: enteredExp,
    };

    //Checks if details are blank
    if (
      feedbackDetails.name === "" ||
      feedbackDetails.age === "" ||
      feedbackDetails.exp === ""
    ) {
      alert("Leave no fields blank!");
      feedbackDetails = {name:"",age:"",exp:""};
      return;
    }

    //Checks if experience is too short
    if(feedbackDetails.exp.length > 512){
      alert("Keep feedback within 512 characters!");
      return;
    }

    //Checks if name is too long
    if(feedbackDetails.name.length > 512){
      alert("Invalid name!");
      return;
    }
    //else checks details with database
    else {
      console.log(feedbackDetails);
      alert("Successful submission!");
      setEnteredName("");
      setEnteredAge("");
      setEnteredExp("");
      setExpCount(0);
    }
  };

  useEffect(() => {
    // update char count (including whitespaces)
    setExpCount(enteredExp.length);
  }, [enteredExp]);

  return (
    <form className="feedbackForm" onSubmit={feedbackHandler}>
      <div className="feedbackblock-1">
        <div className="details">
          <h1>Feedback</h1>
          <p>Your feedback is greatly appreciated.</p>
        </div>
      </div>
      <div className="feedbackblock-2">
        <div className="NameAndAge">
          <p>Name:</p>
          <TextField
                value={enteredName}
                onChange={nameHandler}
                type={"text"}
                variant="outlined"
                label="Enter your name"
                margin="normal"
                helperText={
                  enteredName === ""
                    ? "Empty field!"
                    : // : enteredNewPwd !== enteredConfirmedPwd
                      // ? "Passwords do not match!"
                      ""
                }
              ></TextField>
          <p>Age:</p>
          <TextField
                className="age"
                value={enteredAge}
                onChange={ageHandler}
                type={"number"}
                variant="outlined"
                margin="normal"
                InputProps={{ inputProps: { min: 18, max: 150 } }}
                helperText={
                  enteredAge === ""
                    ? "Empty field!"
                    : // : enteredNewPwd !== enteredConfirmedPwd
                      // ? "Passwords do not match!"
                      ""
                }
              ></TextField>
        </div>
      </div>
      <div className="feedbackblock-3">
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
        <div>
          <span id="exp">Character Count: {expCount}</span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
