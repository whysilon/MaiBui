import "./FeedbackForm.css";
import React, { useState } from "react";

const FeedbackForm = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredExp, setEnteredExp] = useState("");

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const expHandler = (event) => {
    setEnteredExp(event.target.value);
  };

  const feedbackHandler = (event) => {
    event.preventDefault();

    const feedbackDetails = {
      name: enteredName,
      age: enteredAge,
      exp: enteredExp,
    };

    //Checks if details are blank
    if (
      feedbackDetails.name == "" ||
      feedbackDetails.age == "" ||
      feedbackDetails.exp
    ) {
      alert("Leave no fields blank!");
      setEnteredName("");
      setEnteredAge("");
      setEnteredExp("");
      event.reload();
    }
    //else checks details with database
    else {
      console.log(feedbackDetails);
      setEnteredName("");
      setEnteredAge("");
      setEnteredExp("");
    }
  };

  return (
    <form className="feedbackForm">
        <h1>Feedback</h1>
        <p>Your feedback is greatly appreciated.</p>
        <div className="formDetails">
          <p>Name:</p>
          <input value={enteredName} onChange={nameHandler} type="text" />
          <p>Age:</p>
          <input
            value={enteredAge}
            type="number"
            min="18"
            max="110"
            onChange={ageHandler}
          />
          </div>
          <div>
            <p>Details Of Experience:</p>
            <input value={enteredExp} type="text" onChange={expHandler} />
          </div>
        <button type="submit">Submit</button>
    </form>
  );
};

export default FeedbackForm;
