import { auth } from "../../firebase-config";
import "./CalorieCalculator.css"
import React, { useEffect, useState } from "react"
import { getCalorieData } from "./CalorieDataControl";
import { CircularProgress, Typography } from "@mui/material";

/**
 * This displays a progress bar for the daily calorie intake
 * 
 * @returns ProgressBar of the current calorie intake
 * 
 * 
 */
const ProgressBar = (props) => {
  const {bgcolor,completed } = props;

  const containerStyles = {
      width: '20%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: 0,
      textAlign: 'right'
    }
  
    const fillerStyles = {
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'right'
    }
  
    const labelStyles = {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }
  return (
      <div style={containerStyles}>
          <div style={fillerStyles}>
              <span className={labelStyles}>{`${completed}%`}</span>
          </div>
      </div>
  )
}

function CalorieCalculator({tot,lim}) {
    const UserData = {bgcolor: "purple", completed: tot/lim * 100};
    
    return (
            <div>
                <ProgressBar bgcolor = {UserData.bgcolor}
                             completed = {UserData.completed}/>
            </div>
    )
}

export default CalorieCalculator;