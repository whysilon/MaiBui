// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";


// To do: Sync Google API with details

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {
  return (
    <div className="details">
      <div className="block-1">
        <h1>Restaurant Name</h1>
        <p>Restaurant address</p>
        <p>Operating Hours</p>
      </div>
      <div className="block-2">
        <div className="child-1">
          <p>Dine In:</p>
          <p>Takeaway:</p>
          <p>Number feedbacks</p>
        </div>
      </div>
      <div className="block-3">
        <button ><Link to="/navigate-restaurant">Navigate</Link></button>
        <button className="oddle">
            <img src="https://cdn-icons-png.flaticon.com/512/3313/3313619.png"/>
            <Link to="/reserve">Oddle Eats</Link>
        </button>
        <button><Link to="/feedback">Give Feedback</Link></button>
      </div>
    </div>
  );
};

export default SelectRestaurantDetails;
