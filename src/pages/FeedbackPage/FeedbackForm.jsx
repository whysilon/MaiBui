import "./FeedbackForm.css";
import React, { useState, useEffect} from "react";

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
      setEnteredName("");
      setEnteredAge("");
      setEnteredExp("");
      setExpCount(0);
      return;
    }

    //Checks if experience is too short
    if(feedbackDetails.exp.length > 512){
      alert("Keep feedback within 512 characters!");
      setEnteredExp("");
      setExpCount(0);
      return;
    }

    //Checks if name is too long
    if(feedbackDetails.name.length > 512){
      alert("Invalid name!");
      setEnteredName("");
      setExpCount(0);
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
      <div className="block-1">
        <div className="details">
          <h1>Feedback</h1>
          <p>Your feedback is greatly appreciated.</p>
        </div>
      </div>
      <div className="block-2">
        <div className="NameAndAge">
          <p>Name:</p>
          <input value={enteredName} onChange={nameHandler} type="text" />
          <p>Age:</p>
          <input
            className="age"
            value={enteredAge}
            type="number"
            min="18"
            max="150"
            onChange={ageHandler}
          />
        </div>
      </div>
      <div className="block-3">
        <div className = "experience">
          <p>Details Of Experience:</p>
          <textarea className="exp" value={enteredExp} cols="40" rows="5" onChange={expHandler} />
          <span>Character Count: {expCount}</span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
