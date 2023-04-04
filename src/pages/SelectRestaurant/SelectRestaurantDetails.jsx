// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config.js";
import { getDocs, collection, where, query, getCountFromServer  } from "firebase/firestore";
import { useState, useEffect } from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import FeedbackPopup from "../../components/FeedbackPopup";
// To do: Sync Google API with details

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {

  const FBCollectionRef = collection(db, 'feedbacks');
  const [buttonPopup, setButtonPopup] = useState(false);
  

  const checkNoOfFeedbacks = async (name) => {
    const data = await getDocs(FBCollectionRef);
    const q = query(data, where('restaurant',"==",name));
    const snapshot = await getCountFromServer(q);
    console.log(snapshot.data().count);
  }

  let service;
  const place_id = useParams();
  const google = window.google;
  const [details, setDetails] = useState([]);
  const [opening_hours, setHours] = useState([]);

  var request = {
    placeId: place_id.id,
    fields: ['name', 'formatted_address', 'opening_hours', 'website']
  };
  
  service = new google.maps.places.PlacesService(map);
  service.getDetails(request, callback);
  
  function callback(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setDetails(place);
      setHours(details.opening_hours.weekday_text);
    }
  }
  
  const renderList = (opening_hours).map((item, index) => 
                             <p key={index} style={{ fontSize: 15 }} >{item}</p>
                           );


  return (
    <div className="details">
      <main>
        <div className="block-1">
          <h1>{details.name}</h1>
          <p>{details.formatted_address}</p>
          <p  >Operating Hours:</p>
          <p className="times">{renderList}</p>
        </div>
        <div className="block-2">
          <div className="child-1">
            <p>Number of feedbacks: {checkNoOfFeedbacks(details.name)}</p>
          </div>
          <LaunchIcon className="launch-icon" onClick={()=>setButtonPopup(true)}/>
        </div>
        <div className="block-3">
          <Link to={`/navigate-restaurant/${place_id.id}`}>
            <button>
              Navigate
            </button>
          </Link>

          <Link to={details.website}>
            <button className="website">
                Website
            </button>
          </Link>

          <Link to="/feedback">
            <button>
              Give Feedback
            </button>
          </Link>
        </div>
      </main>

      <FeedbackPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h1>All feedbacks</h1>
      </FeedbackPopup> 
    </div> 
  );
};

export default SelectRestaurantDetails;