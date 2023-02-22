import React from "react";
import { Router, useLocation } from "react-router-dom";
import BackButton from "./BackButton";
import HomeButton from "./HomeButton";
// TODO:Functionality

function AccountCenterNavBar(props) {
  // const location = useLocation();
  // const currentPageName = useLocation().pathname.substring(1);

  return (
    // <div>
    //   <BackButton />
    //   <Router>{currentPageName}</Router>
    //   <HomeButton />
    // </div>

    //As a placeholder only
    // <div className={`flex-row justify-between`}>
    <div
      className="navbar"
      style={{ position:'sticky', top:'0', display: "flex", margin: "auto", height: "70px" }}
    >
      <img
        className="image self-start"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425892709961737.png"
      />
      <span className="location-name sefl-center">{props.currentLocation}</span>
      {/* </div> */}
      <img
        className="image"
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/63eaee595a7e3f031030d055/63eaf4d142b69d0011f65b03/16763425968649173759.png" style={{position: 'fixed',
        width: '40px',
        height: '40px',
        right: '40px',
        top: '30px'}}/>
    </div>
  );
}

export default AccountCenterNavBar;
