import React from "react";
import { slide as Menu } from "react-burger-menu";

//CSS
import "./SideBar.css";


/**
 * Displays a sidebar that displays links to 
 * different pages of the website
 * 
 * @author Marcus Yeo
 * 
 */

function SideBar() {
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
      <a className ="menu-item" href="/food-categories">
        Enquire Healthy Foods        
      </a>
      <a className="menu-item" href="/account-center">
        Account Center
      </a>
    </Menu>
  );
};

export default SideBar;
