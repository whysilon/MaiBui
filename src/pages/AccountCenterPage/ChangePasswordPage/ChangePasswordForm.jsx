import React from "react";
import { useState } from "react";

//CSS
import "./ChangePasswordForm.css";

const ChangePasswordForm = (props) => {
  const [enteredOldPwd, setEnterOldPwd] = useState("");
  const [enteredNewPwd, setEnterNewPwd] = useState("");
  const [enteredConfirmedPwd, setEnterConfirmPwd] = useState("");

  const oldPwdHandler = (event) => {
    setEnterOldPwd(event.target.value);
  };
  const newPwdHandler = (event) => {
    setEnterNewPwd(event.target.value);
  };
  const confirmPwdHandler = (event) => {
    setEnterConfirmPwd(event.target.value);
  };

  function resetInputField() {
    setEnterOldPwd("");
    setEnterNewPwd("");
    setEnterConfirmPwd("");
  }

  const changePwdHandler = (event) => {
    event.preventDefault();

    const changePwdDetails = {
      oldPwd: enteredOldPwd,
      newPwd: enteredNewPwd,
      confirmedPwd: enteredConfirmedPwd,
    };

    if (
      changePwdDetails.oldPwd === "" ||
      changePwdDetails.newPwd === "" ||
      changePwdDetails.confirmedPwd === ""
    ) {
      alert("Leave no fields blank!");
      resetInputField();
    } else {
      if (changePwdDetails.newPwd !== changePwdDetails.confirmedPwd) {
        alert("New password and confirm password do not match. Try again.");
      } else {
        console.log(changePwdDetails);
        resetInputField();
      }
    }
    //else checks details with database
  };

  return (
    <form className="change-password-form" onSubmit={changePwdHandler}>
      <div className="change-password-form-container">
        <div className="form-details">
          <p>Old password:</p>
          <input
            value={enteredOldPwd}
            onChange={oldPwdHandler}
            type="text"
          ></input>
          <p>New password:</p>
          <input
            value={enteredNewPwd}
            onChange={newPwdHandler}
            type="text"
          ></input>
          <p>Confirm new password:</p>
          <input
            value={enteredConfirmedPwd}
            onChange={confirmPwdHandler}
            type="text"
          ></input>
          <button type="submit">Confirm Change</button>
        </div>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
