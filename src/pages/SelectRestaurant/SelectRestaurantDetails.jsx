// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {db} from '../../firebase-config';
import {collection, doc, getDocs} from 'firebase/firestore';
import { useState, useEffect } from "react";

// To do: Sync Google API with details

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {
  const[feedbacks, setFeedbacks] = useState([]);
  const feedbacksCollectionRef = collection(db,"feedbacks")
  // Prints all feedbacks from database
  useEffect(()=>{
    const getFeedbacks = async () => {
      const data= await getDocs(feedbacksCollectionRef);
      setFeedbacks(data.docs.map((doc) =>{
        if(doc.data().restaurant === "Crowded Bowl"){
          return({...doc.data(), id:doc.id});
        }}));
    };

    getFeedbacks();
  }, []);

  const location = useLocation();
  console.log(location.data);
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
          <p>Number feedbacks: </p>
        </div>
      </div>
      <div className="block-3">
        <button ><Link to="/navigate-restaurant">Navigate</Link></button>
        <a href="https://eats.oddle.me/explore" target='_blank'>
          <button className="oddle">
            Oddle Eats<img src="https://cdn-icons-png.flaticon.com/512/3313/3313619.png"/>
          </button>
        </a>
        <button><Link to="/feedback">Give Feedback</Link></button>
      </div>
    </div>
  );
};

export default SelectRestaurantDetails;
