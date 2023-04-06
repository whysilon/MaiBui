import React from "react";
import "./LogOutBtn.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const LogOutHandler = () => {};
const LogOutBtn = () => {
  return (
    <Button
      style={{
        border: "0",
        backgroundColor: "#40b623",
        height: "50px",
        borderRadius: "40.5px",
        // width: "100%",
        padding: "auto",
        textAlign: "center",
      }}
      type="submit"
      onClick={() => {
        console.log("Log Out is clicked");
      }}
      className="self-center button"
    >
      Log Out
    </Button>
  );
};

export default LogOutBtn;
