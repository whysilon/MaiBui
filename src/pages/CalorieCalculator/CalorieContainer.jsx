import HomePageNavBar from "../../components/HomePageNavBar"
import CalorieCalculator from "./CalorieCalculator"
import "./CalorieContainer.css"

function CalorieContainer() {
    return (
        <div className="background">
            <HomePageNavBar/>
            <CalorieCalculator/>
        </div>
    )
}

export default CalorieContainer;