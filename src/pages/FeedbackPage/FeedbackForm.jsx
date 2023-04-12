import "./FeedbackForm.css";
import React, { useState, useEffect} from "react";
import { TextField } from "@mui/material";
import StarRating from "../../components/StarRating";
import { db } from "../../firebase-config";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
/**
 * Displays the feedback form showed on
 * FeedbackContainer
 * 
 * @author Marcus Yeo
 * @returns HTML of feedback form
 */

const FeedbackForm = (props) => {



  let service;
  const place_id = useParams();
  const google = window.google;

  /**
   * Contains all the details of restaurant in array form
   */

  const [restaurant, setRestaurant] = useState([]);
  var request = {
    placeId: place_id.id,
    fields: ['name', 'formatted_address', 'opening_hours', 'website']
  };
  service = new google.maps.places.PlacesService(document.createElement('div'));
  service.getDetails(request, callback);
  

  /**
   * API Request to get respective restaurant details and stores it in restaurant state.
   * @returns Array<String>
   * 
   */
  function callback(place, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      setRestaurant(place);
    }
  }



  /**
   * Takes the reference of the collection of feedback documents in the firebase database
   * @returns CollectionReference
   * 
   */
  const feedbacksCollectionRef = collection(db,'feedbacks');

  /**
   * Function that checks if user has visited restaurant and submits the feedback and at the same time 
   * 
   */
  const submitFeedback = async (details) => {
    try{
      const email = localStorage.getItem('token')
      const q = doc(db,'users',email);
      const snapshot = await getDoc(q);
      if(snapshot.data().visited.includes(restaurant.name)){
        await addDoc(feedbacksCollectionRef, {email:email, experience:details.exp, rating:details.rating, restaurant:restaurant.name});
        alert("Successful submission!");
      }
      else{
        alert("You have not visited the restaurant before...");
        window.location.href=`/select-restaurant/${place_id.id}`;
      }
    }
    catch(e){
      console.log(e.message);
      alert("An error occurred. Please try again.");
    }
  }

  /**
   * Sets rating storage based on change
   * in StarRating componenet
   * 
   * @param {onClick} event 
   */
  const saveStarRatingHandler = (enteredStarRating) => {
    setEnteredRating(enteredStarRating)
  }
  
  /**Storage/setters for feedback form 
   * input variables */
  const [enteredRating, setEnteredRating] = useState(0);
  const [enteredExp, setEnteredExp] = useState("");
  const [expCount, setExpCount] = useState("");

  /**
   * Sets experience storage based on change
   * in experience input
   * 
   * Warns user in red if input length >= 512 by
   * making input red
   * 
   * @param {onChange} event 
   */

  const expHandler = (event) => {
    if(enteredExp.length >= 512){
    document.getElementById("exp").style.color = "red";
    }
    else{
      document.getElementById("exp").style.color = "black";
    }
    setEnteredExp(event.target.value);
  };

  /**
   * Coallates all details in feedback form and
   * POSTS to database
   * 
   * @param {onSubmit} event 
   */

  const feedbackHandler = (event) => {
    event.preventDefault();

    let feedbackDetails = {
      rating: enteredRating,
      exp: enteredExp,
    };

    //Checks if details are blank
    if (
      feedbackDetails.rating === 0 ||
      feedbackDetails.exp === ""
    ) {
      alert("Leave no fields blank!");
      feedbackDetails = {rating:0,exp:""};
      return;
    }

    //Checks if experience is too short
    if(feedbackDetails.exp.length > 512){
      alert("Keep feedback within 512 characters!");
      return;
    }

    //else checks details with database
    else {
      submitFeedback(feedbackDetails);
      setEnteredRating(0)
      setEnteredExp("");
      setExpCount(0);
    }
  };
  /**
   * Updates character count of experience input
   */
  useEffect(() => {
    // update char count (including whitespaces)
    setExpCount(enteredExp.length);
  }, [enteredExp]);

  return (
    <form className="feedbackForm" onSubmit={feedbackHandler}>
      <div className="feedbackblock-1">
        <div className="details">
          <h1>Feedback</h1>
          <span>Your feedback is greatly appreciated.</span>
        </div>
      </div>

      <div className="feedbackblock-2">
        <div className="ratingName">
          <p>Rating:</p>
          <StarRating onSaveStarRating = {saveStarRatingHandler} />
        </div>
        <div className = "experience">
          <p>Details Of Experience:</p>
          <TextField
                className="exp"
                value={enteredExp}
                onChange={expHandler}
                type={"textarea"}
                variant="outlined"
                margin="normal"
                multiline
                cols={40}
                rows={5}
                sx={{color: "#DAD7CD"}}
                helperText={
                  enteredExp === ""
                    ? "Empty field!"
                    : ""
                }
              ></TextField>
        </div>
        <div className = "feedbackBottom">
          <span id="exp">Character Count: {expCount}</span>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default FeedbackForm;
