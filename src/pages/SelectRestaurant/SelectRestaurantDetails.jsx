// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { db } from "../../firebase-config.js";
import {arrayUnion, collection, doc, getCountFromServer, getDoc, getDocs, query, updateDoc, where} from "firebase/firestore";
import { useState} from "react";
import LaunchIcon from '@mui/icons-material/Launch';
import FeedbackPopup from "../../components/FeedbackPopup";
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
  const [feedbacks,setFeedbacks] = useState([]);

  


  const visitedRestaurant = async () => {
    const email = localStorage.getItem('token');
    const q = doc(db,'users',email);
    const snapshot = await getDoc(q);
    var arr = snapshot.data().visited;
    if(!arr.includes(details.name)){
      arr.push(details.name);
      await updateDoc(q,{
        'visited': arr
      })
    }
    
  }

  const checkFeedbacks = async (name) => {
    const q = query(FBCollectionRef,where("restaurant",'==',name));
    const snapshot = await getCountFromServer(q);
    setRestaurantCount(snapshot.data().count);
  }

  const renderFeedback = async (restaurant) =>{
    const q = query(FBCollectionRef, where('restaurant','==', restaurant));
    const snapshot = await getDocs(q);
    setFeedbacks(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id})));
};


  

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
      checkFeedbacks(place.name);
      renderFeedback(place.name)
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

          <Link to={details.website} target="_blank" onClick={visitedRestaurant}>
            <button className="website" >
                Reserve
            </button>
          </Link>

          <Link to={`/feedback/${place_id.id}`}>
            <button>
              Give Feedback
            </button>
          </Link>
        </div>
      </main>

      <FeedbackPopup trigger={buttonPopup} setTrigger={setButtonPopup} restaurant={details.name}>
        <h1>Feedbacks</h1>
        {feedbacks.map((feedback)=>{
                      return (
                          <div className="feedbackbox">
                              <div className="box-1">
                                  <div>Email: {feedback.email}</div>
                                  <div>Rating: {[...Array(feedback.rating)].map((star, index) => {
                                index += 1;
                                return (
                                    <span className="star">&#9733;</span>
                                );
                              })}</div>
                              </div>
                              <div className="box-2">
                                  {feedback.experience}
                              </div>
                          </div>
                      )
                  })}
      </FeedbackPopup> 
    </div> 
  );
};

export default SelectRestaurantDetails;