import React from "react";
import { useState } from "react";

//CSS
import "./ChangeUsernameForm.css";

const ChangeUsernameForm = () => {
  const [enteredNewUsername, setEnterNewUsername] = useState("");
  const changeUsernameHandler = (event) => {
    setEnterNewUsername(event.target.value);
    const changeUsernameDetails = {
      newUsername: enteredNewUsername,
    };

    //Checks if details are blank
    if (changeUsernameDetails.username == "") {
      alert("Leave no fields blank!");

      setEnterNewUsername("");
    }
    //else checks details with database
    else {
      console.log(changeUsernameDetails);
      setEnterNewUsername("");
    }
  };

  return (
    <form className="change-username-form" onSubmit={changeUsernameHandler}>
      <div className="change-username-form-container">
        <div className="form-details">
          <p>New username:</p>
          <input
            value={enteredNewUsername}
            onChange={changeUsernameHandler}
            type="text"
          >
            {/* Enter new username here */}
          </input>
          <button type="submit">Confirm Change</button>
        </div>
      </div>
    </form>
  );
};

export default ChangeUsernameForm;
