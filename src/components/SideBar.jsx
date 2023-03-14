import React from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

//CSS
import "./SideBar.css";

//Pages
import AccountCenterContainer from "../pages/AccountCenterPage/AccountCenterContainer";
export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/search-restaurant">
        Search Restaurant
      </a>
      <a className="menu-item" href="/recommend-restaurant">
        Nearby Restaurant
      </a>
      <a className="menu-item" href="/calorie-calculator">
        Calorie Calculator
      </a>
      <a className="menu-item" href="/account-center">
        Account Center
      </a>
    </Menu>
  );
};
