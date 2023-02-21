import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './SideBar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Search Restaurant
      </a>
      <a className="menu-item" href="/nearby">
        Nearby Restaurant
      </a>
      <a className="menu-item" href="/calorie">
        Calorie Calculator
      </a>
      <a className="menu-item" href="/account">
        Account Center
      </a>
    </Menu>
  );
};