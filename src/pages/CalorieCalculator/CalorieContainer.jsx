import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";
import CustomInput from "./CustomInput";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import FindUsername from "../../components/findUsername";

/**
 * This contains the functions required for Calorie Calculator
 * This displays the functions
 * 
 */

function CalorieContainer() {
  return (
    <body>
      <AccountCenterNavBar/>
      <div className="aligner">
        <div className="imgAndStats">
          <div className="stats">
            <h1 className="helloUser">Hello, <FindUsername/>!</h1>
            <p className="daily">Daily Calorie Limit: 2000</p>
            <CalorieCalculator />
            <div className="customInput">
              <CustomInput/>
            </div>
          </div>
          <div className="background" src="../../public/LettuceBG.png"></div>
        </div>
      </div>
    </body>
  );
}

export default CalorieContainer;
