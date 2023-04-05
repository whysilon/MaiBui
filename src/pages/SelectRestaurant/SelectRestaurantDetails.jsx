// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db, auth } from "../../firebase-config.js";
import {collection, getDocs, updateDoc} from "firebase/firestore";
import { useState, useEffect } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import FeedbackPopup from "../../components/FeedbackPopup";
import { getAuth } from "firebase/auth";
// To do: Display feedbacks in popup
//        Find a way to display username in feedback

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {

  const FBCollectionRef = collection(db, "feedbacks");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [restaurantCount, setRestaurantCount] = useState(0);

  // const renderFeedbacks = async (name) => {
  //   const data = await getDocs(FBCollectionRef);
  //   data.docs.map((doc)=>{
  //     if(doc.data().restaurant === name){
  //       <div>
  //         <div>
  //           <p>{doc.data().email}</p>
  //           <p>{doc.data().rating}</p>
  //         </div>
  //         <div>
  //           <p>{doc.data().experience}</p>
  //         </div>
  //       </div>
  //     }
  //   })
  // }


  // const visitedRestaurant = async (name) => {
  //   try{
  //     const userRef = getAuth().currentUser.email;
  //     const data = await getDocs(FBCollectionRef);
  //     data.docs.map((doc)=>{
  //       if(doc.data().email === name){
          
  //       }
  //     }
  //   }
  //   catch(e){
  //     console.log(e.message);
  //   }
  // }

  // const checkFeedbacks = async (name) => {
  //   let i = 0;
  //   const data = await getDocs(FBCollectionRef);
  //   data.docs.map((doc)=>{
  //     if(doc.data().restaurant == name){
  //       i = i +1;
  //     }
  //   })
  //   setRestaurantCount(i);
  // }
  

  let service;
  const place_id = useParams();
  const google = window.google;
  const [details, setDetails] = useState([]);
  const [opening_hours, setHours] = useState([]);

  var request = {
    placeId: place_id.id,
    fields: ['name', 'formatted_address', 'opening_hours', 'website']
  };
  
  service = new google.maps.places.PlacesService(document.createElement('div'));
  service.getDetails(request, callback);
  
  function callback(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setDetails(place);
      setHours(details.opening_hours.weekday_text);
      // checkFeedbacks(place.name);
    }
  }
  
  const renderList = (opening_hours).map((item, index) => 
                             <p key={index} style={{ fontSize: 15}} >{item}</p>
                           );

  return (
    <div className="details">
      <main>
        <div className="block-1">
          <h1>{details.name}</h1>
          <p>{details.formatted_address}</p>
        </div>
        <div className="times">
          <p>Operating Hours:</p>
          {renderList}
          </div>
        <div className="block-2">
          <div className="child-1">
            <p>Number of feedbacks: {restaurantCount}</p>
          </div>
          <LaunchIcon className="launch-icon" onClick={()=>setButtonPopup(true)}></LaunchIcon>
        </div>
        <div className="block-3">
          <Link to={`/navigate-restaurant/${place_id.id}`}>
            <button>
              Navigate
            </button>
          </Link>

          <Link to={details.website} target="_blank">
            <button className="website" >
                Website
            </button>
          </Link>

          <Link to={`/feedback/${place_id.id}`}>
            <button>
              Give Feedback
            </button>
          </Link>
        </div>
      </main>

      <FeedbackPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>Feedbacks</h1>
        {/* {renderFeedbacks(details.name)} */}
      </FeedbackPopup> 
    </div> 
  );
};

export default SelectRestaurantDetails;