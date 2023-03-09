

import './HomeChoices.css';

const HomeChoices = () => {
    return (
      <div className="homechoices-parent-container">
        <div className = "homechoices-title">
            <h1>Mai Bui</h1>
            <span>What would you like to do?</span>
        </div>
        <div className="homechoices-container">
          <div className="homechoices-choice">
            <a href="/calorie-calculator">
              <h1>Calorie Calculator</h1>
              <span>Calculate the amount of calories you are consuming with our Calorie Calculator!</span>
            </a>
          </div>

          <div className="homechoices-choice">
            <a href="/search">
              <h1>Search For Restaurant</h1>
              <span>Get to know any of your favourite restaurants with a click of a button!</span>
            </a>
          </div>

          <div className="homechoices-choice">
            <a href="/navigate">
              <h1>Recommend Nearby Healthy Restaurant</h1>
              <span>Let us recommend you amazing healthy delicacies around you!</span>
            </a>
          </div>
        </div>
      </div>
    );
}

export default HomeChoices;