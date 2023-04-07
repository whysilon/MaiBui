import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";
import CustomInput from "./CustomInput";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { db } from "../../firebase-config";
import { Timestamp, addDoc, collection, doc, getDoc } from "firebase/firestore";
import { addCalorieData, getCalorieData } from "./CalorieDataControl";

/**
 * This contains the functions required for Calorie Calculator
 * This displays the functions
 * 
 */

function CalorieContainer() {
  console.log(Timestamp.now().toDate().toISOString())
  const res = getCalorieData("why@gaho.com")
  console.log(res)
  return (
    <body className="background">
      <AccountCenterNavBar/>
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
