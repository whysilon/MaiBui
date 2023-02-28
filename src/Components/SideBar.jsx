import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

//CSS
import "./SideBar.css";

//Pages
import AccountCenterPage from "../pages/AccountCenterPage/AccountCenterPage";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/searchRestaurant">
        Search Restaurant
      </a>
      <a className="menu-item" href="/nearby">
        Nearby Restaurant
      </a>
      <a className="menu-item" href="/calorie">
        Calorie Calculator
      </a>
      <a className="menu-item" href="/account-center">
        Account Center
      </a>
    </Menu>
  );
};
