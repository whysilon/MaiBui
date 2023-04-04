/**
 * Displays the navigation page for the current user
 *
 * @author Xavier
 * @returns HTML of the Navigate component
 */
import "./Navigate.css";
import GetLocation from "../../components/LocationRetriever";
import React from 'react';
import { useParams } from "react-router-dom";

/**
 * A form component for changing the username of an account.
 * @returns {JSX.Element} A component for displaying the route to user chosen location.
 */
const Navigate = () => {
  /**
   * Object containing destination latitude and longitude.
   */
  const place_id = useParams();

  /**
   * Object containing latitude and longitude of user location.
   */
  let location = GetLocation();

  /**
   * String containing url of Google Maps API request.
   */
  const url = "https://www.google.com/maps/embed/v1/directions"
                + "?key=AIzaSyAJ1JqQHpz1BUe9HcakxwV8AhvQBR703ks"  //Remove "-" to enable map
                + "&origin=" + String(location.latitude) + ","
                + String(location.longitude)
                + "&destination=place_id:" + place_id.id
                + "&zoom=15";

  function displayMap(){
    if(location.latitude === 0 && location.longitude === 0){
      return(<div><p>Loading...</p></div>);
    }
    else{
      return(
        <iframe title="Map"
          width="675"
          height="375"
          frameborder="0" style={{border:"0"}}
          referrerpolicy="no-referrer-when-downgrade"
          src={url}
          allowFullscreen>
        </iframe>
      );
    }
  }

  return (
    <div className="navigation">
      <h1>How to get there!</h1>
      {displayMap()}
    </div>
    );
};
export default Navigate;