import "./CalorieCalculator.css"
import React from "react"

function CalorieCalculator() {
    const ProgressBar = (props) => {
        const {bgcolor,completed } = props;

        const containerStyles = {
            width: '20%',
            backgroundColor: "#e0e0de",
            borderRadius: 50,
            margin: 0
          }
        
          const fillerStyles = {
            height: '100%',
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
    const UserData = {bgcolor: "purple", completed: 40};
    return (
        <div className="container">
            <div className="daily">
                <p>Daily Calorie Limit: 2000</p>
            </div>
            <div>
                <ProgressBar bgcolor = {UserData.bgcolor}
                             completed = {UserData.completed}/>
            </div>
        </div>
    )
}

export default CalorieCalculator;