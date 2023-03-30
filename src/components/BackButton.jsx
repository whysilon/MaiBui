/**
 * Displays BackButton component, which is a button that navigates the user back to the previous page.
 * @author Xing Mian
 * @return HTML of Back Button
 */

import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

/**
 * This function returns the BackButton component.
 * @returns {JSX.Element} The BackButton component.
 */
function BackButton() {
  const navigate = useNavigate();

  /**
   * This function handles the click event for the BackButton component.
   */
  function handleBackClick() {
    console.log("Back Button clicked");
    navigate(-1);
  }

  return (
    <IconButton style={{ maxWidth: "55px", margin: "2px", padding: "2px" }}>
      <ArrowBackIcon
        alt="Back"
        onClick={handleBackClick}
        fontSize="large"
        style={{ color: "black" }}
      ></ArrowBackIcon>
    </IconButton>
  );
}

export default BackButton;
