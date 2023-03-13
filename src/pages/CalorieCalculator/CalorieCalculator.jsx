import "./CalorieCalculator.css"
import React from "react"
import CustomInput from "./CustomInput";

function CalorieCalculator() {
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
    let limit = 2000;
    let current = 480;
    const UserData = {bgcolor: "purple", completed: current/limit * 100};
    
    return (
            <div>
                <ProgressBar bgcolor = {UserData.bgcolor}
                             completed = {UserData.completed}/>
            </div>
    )
}

export default CalorieCalculator;