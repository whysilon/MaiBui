import React from "react";
import { Router, useLocation } from "react-router-dom";

//CSS
import "./NavBar.css";

//Components
import HomeButton from "./HomeButton";
import SideBar from "./SideBar";
import { Menu } from "@mui/material";
// TODO:Functionality

function HomePageNavBar() {
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
      style={{ display: "flex", height: "60px", justifyContent: "space-between"}}
    >
      <SideBar />
      <span
        className="location-name sefl-center"
        // style={{ color: "black" }}
      >
        {currentLocation}
      </span>
      {/* </div> */}
      <HomeButton />
    </div>
  );
}

export default HomePageNavBar;
