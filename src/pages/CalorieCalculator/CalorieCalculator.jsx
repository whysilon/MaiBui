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
  const {bgcolor,completed} = props;

  const containerStyles = {
      width: '110%',
      backgroundColor: "white",
      borderRadius: 20,
      margin: 0,
    }
  
    const fillerStyles = {
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: 'inherit',
      textAlign: 'center',
      fontSize: '0.9rem',
      height: '30px',
      color: 'black',
      fontWeight: 'bold',
    }
  return (
      <div style={containerStyles}>
          <div style={fillerStyles}>
              <p>{`${completed}%`}</p>  
          </div>
      </div>
    )
  }

function CalorieCalculator(props) {
  const UserData = {bgcolor: "#588157", completed: Math.round((props.tot/props.lim) * 100)};
  return (
          <div>
              <ProgressBar bgcolor = {UserData.bgcolor}
                            completed = {UserData.completed}/>
          </div>
  )
}

export default CalorieCalculator;