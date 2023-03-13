import HomePageNavBar from "../../components/HomePageNavBar";
import Navigate from "./Navigate";
import "./NavigateContainer.css"

const NavigateContainer = () => {
    return (
        <div className="navigate-container">
            <HomePageNavBar />
            <Navigate/>
        </div>
    );
}

export default NavigateContainer;