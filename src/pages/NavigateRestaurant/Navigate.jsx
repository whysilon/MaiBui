import "./Navigate.css";
import GetLocation from "../../components/LocationRetriever";
import React from 'react';

const Navigate = (props) => {
  const {destlat, destlng} = props;

  let location = GetLocation();

  const url = "https://www.google.com/maps/embed/v1/view?key="
                + "AIzaSyAJ1JqQHpz1BUe9HcakxwV8AhvQBR703ks"  //Remove "-" to enable map
                + "&center=" + String(location.latitude) + ","
                + String(location.longitude)
                + "&zoom=15";
  return (
    <div className="navigation">
      <h1>Restaurant Name</h1>
      <div className="block-1">
        <p>Current location: </p>
        <p>{location.latitude}</p>
        <p>{location.longitude}</p>
        <iframe title="Map"
            width="450"
            height="250"
            frameborder="0" style={{border:"0"}}
            referrerpolicy="no-referrer-when-downgrade"
            src={url}
            allowFullscreen>
        </iframe>
      </div>
    </div>
    );
};
  
export default Navigate;
  