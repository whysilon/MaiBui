import HomePageNavBar from "../../components/HomePageNavBar";
import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";
import CustomInput from "./CustomInput";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";

/**
 * This contains the functions required for Calorie Calculator
 * This displays the functions
 * 
 */

function CalorieContainer() {
  return (
    <body className="background">
      <AccountCenterNavBar />
      <div className="aligner">
        <div>
        <p className="helloUser">Hello User!</p>
        <p className="daily">Daily Calorie Limit: 2000</p>
        <CalorieCalculator />
        </div>
        <div>
          <CustomInput/>
        </div>
      </div>
    </body>
  );
}

export default CalorieContainer;
