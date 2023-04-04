import FeedbackForm from "./FeedbackForm";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";


/**
 * Displays the full feedback form page of the 
 * website
 * 
 * @author Marcus Yeo
 * 
 */
const FeedbackContainer = (props) => {
  return (
    <div>
      <AccountCenterNavBar/>
      <FeedbackForm/>
    </div>
  );
};

export default FeedbackContainer;
