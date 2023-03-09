import HomePageNavBar from "../../components/HomePageNavBar";
import Navigate from "./Navigate";
import "./NavigateContainer.css"

const NavigateContainer = () => {
    return (
        <div className="container">
            <header><HomePageNavBar /></header>
            <body><Navigate/></body>
        </div>
    );
}

export default NavigateContainer;