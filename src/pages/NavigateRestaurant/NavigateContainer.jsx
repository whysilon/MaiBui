/**
 * Displays the navigation page for the current user
 *
 * @author Xavier
 * @returns HTML page of the navigation page
 */
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import Navigate from "./Navigate";
import "./NavigateContainer.css"

/**
 * This component is responsible for rendering the Navigation page.
 * It contains the ackButton and Navigate components.
 */
const NavigateContainer = (props) => {
    return (
        <div>
            <AccountCenterNavBar />
            <Navigate />
        </div>
    );
}

export default NavigateContainer;