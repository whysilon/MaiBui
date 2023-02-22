import "./SelectRestaurantDetails.css";
import { Link } from "react-router-dom";

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
        <button ><Link to="/navigate">Navigate</Link></button>
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
