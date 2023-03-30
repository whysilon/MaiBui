import FeedbackForm from "./FeedbackForm";

import HomePageNavBar from "../../components/HomePageNavBar";


/**
 * Displays the full feedback form page of the 
 * website
 * 
 * @author Marcus Yeo
 * 
 */
const FeedbackContainer = () => {
  return (
    <div>
      <HomePageNavBar />
      <FeedbackForm />
    </div>
  );
};

export default FeedbackContainer;
