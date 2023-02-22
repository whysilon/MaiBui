import React from "react";
import "./LogOutBtn.css";
const LogOutHandler = () => {};
const LogOutBtn = () => {
  return (
    <button
      onClick={() => {
        console.log("Log Out is clicked");
      }}
      className="self-center button btn-work"
    >
      Log Out
    </button>
  );
};

export default LogOutBtn;
