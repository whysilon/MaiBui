

import './HomeChoices.css';

const HomeChoices = () => {
    return (
      <div className="homechoices-container">
        <div className="homechoices-choice">
          <a href="/calorie-calculator">
            <h1>Calorie Counter</h1>
            <p>Lorem Ipsum</p>
          </a>
        </div>

        <div className="homechoices-choice">
          <a href="/search">
            <h1>Select Restaurant</h1>
            <p>Lorem Ipsum</p>
          </a>
        </div>

        <div className="homechoices-choice">
          <a href="/navigate">
            <h1>Navigate</h1>
            <p>Lorem Ipsum</p>
          </a>
        </div>
      </div>
    );
}

export default HomeChoices;