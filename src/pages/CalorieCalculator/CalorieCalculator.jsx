import "./CalorieCalculator.css"
import React, { useEffect, useState } from "react"
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
      width: '30%',
      backgroundColor: "#e0e0de",
      borderRadius: 20,
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
    const UserData = {bgcolor: "purple", completed: Math.round(tot/lim * 100)};
    return (
            <div>
                <ProgressBar bgcolor = {UserData.bgcolor}
                             completed = {UserData.completed}/>
            </div>
    )
}

export default CalorieCalculator;