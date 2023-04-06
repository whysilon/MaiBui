import FeedbackForm from "./FeedbackForm";
import FeedbackNavBar from "../../components/FeedbackNavBar";

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
      <FeedbackNavBar />
      <FeedbackForm />
    </div>
  );
};

export default FeedbackContainer;
