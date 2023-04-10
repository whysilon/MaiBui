import { useState } from "react";
import "./StarRating.css";

const StarRating = (props) => {
  /**
   * Stores the rating input of the user
   */    
    const [rating, setRating] = useState(0);
    
  /**
   * Function that takes the inputted value upon clicking and passes it to the parent component for database posting
   * @param {Event} index 
   */
    const setRatingHandler = (index) => {
        setRating(index);
        props.onSaveStarRating(index);
    }
    
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRatingHandler(index)}
            >
              <span className="star">&#9733;</span>
            </button>
          );
        })}
      </div>
    );
  };

export default StarRating;