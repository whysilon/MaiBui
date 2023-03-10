import HomePageNavBar from "../../components/HomePageNavBar";
import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";

function CalorieContainer() {
  return (
    <body className="background">
      <HomePageNavBar />
      <CalorieCalculator />
    </body>
  );
}

export default CalorieContainer;
