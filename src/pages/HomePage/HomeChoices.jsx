
// CSS
import './HomeChoices.css';

/**
 * Displays the different selections on the 
 * home page.
 * 
 * @author Marcus Yeo
 * @returns HTML of HomePage content
 */

const HomeChoices = () => {
    return (
      <div className="homechoices-parent-container">
        <div className = "homechoices-title">
            <h1>Mai Bui</h1>
            <span>What would you like to do?</span>
        </div>
        <div className="homechoices-container">
          <a href="/calorie-calculator" className="homechoices-choice">
            <div>
              <h1>Calorie Calculator</h1>
              <span>Calculate the amount of calories you are consuming with our Calorie Calculator!</span>
            </div>
          </a>

          <a href="/navigate-restaurant" className="homechoices-choice">
            <div>
              <h1>Search For Restaurant</h1>
              <span>Get to know any of your favourite restaurants with a click of a button!</span>
            </div>
          </a>

          <a href="/recommend" className="homechoices-choice">
            <div>
              <h1>Recommend Nearby Healthy Restaurant</h1>
              <span>Let us recommend you amazing healthy delicacies around you!</span>
            </div>
          </a>
        </div>
      </div>
    );
}

export default HomeChoices;