import BackButton from "../../components/BackButton";
import Navigate from "./Navigate";
import "./NavigateContainer.css"

const NavigateContainer = (props) => {
    return (
        <div>
            <BackButton />
            <Navigate />
        </div>
    );
}

export default NavigateContainer;