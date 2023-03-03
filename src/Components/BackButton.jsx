import React from "react";
import { useNavigate } from "react-router-dom";
// TODO: functionality
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  //style
  // const style = {
  //   marginRight: "1px",
  //   marginTop: "2.5px",
  //   width: "4rem",
  //   height: "4rem",
  //   cursor: "pointer",
  // };

  function handleBackClick() {
    console.log("Back Button clicked");
    navigate(-1);
  }

  return (
    // <Link to={"../.."}>

    <IconButton style={{ maxWidth: "55px", margin: "2px", padding: "2px" }}>
      <ArrowBackIcon
        alt="Back"
        onClick={handleBackClick}
        fontSize="large"
        style={{ color: "black" }}
      ></ArrowBackIcon>
    </IconButton>
    // </Link>
  );
}

export default BackButton;
