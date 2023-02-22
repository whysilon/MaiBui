import "./SelectRestaurantDetails.css";

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
        <button href="#navigate">Navigate</button>
        <button href="#reserve"className="oddle">
            <img src="https://cdn-icons-png.flaticon.com/512/3313/3313619.png"/>
            <span>Oddle Eats</span>
        </button>
        <button href="#feedback">Give feedback</button>
      </div>
    </div>
  );
};

export default SelectRestaurantDetails;
