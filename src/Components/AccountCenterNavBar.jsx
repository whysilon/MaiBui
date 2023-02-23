import React from "react";
import { Link, Router, useLocation, useNavigate } from "react-router-dom";

//CSS
import "./NavBar.css";

//Components
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
// TODO:Functionality

function AccountCenterNavBar(props) {
  const location = useLocation();
  const pathname = useLocation().pathname;

  //function to get the current page name
  function capitalizeLastSegment(str) {
    const segments = str.split("/");
    const lastSegment = segments[segments.length - 1];
    return lastSegment
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(" ");
  }

  const currentLocation = capitalizeLastSegment(pathname);

  return (
    <div
      className="navbar"
      style={{
        position: "sticky",
        top: "0",
        display: "flex",
        margin: "auto",
        height: "70px",
      }}
    >
      <BackButton />
      <span
        onClick={() => {
          console.log(currentLocation);
        }}
        // style={{ color: "black" }}
        className="location-name sefl-center"
      >
        {currentLocation}
      </span>
      <HomeButton />
    </div>
  );
}

export default AccountCenterNavBar;
