import "./Navigate.css";
import React from 'react';

const Navigate = () => {
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {  //Retrieve current location
      const lat = position.coords.latitude, lng = position.coords.longitude;
      setLatitude(lat);
      setLongitude(lng)
    })
  }, [])
  const url = "https://www.google.com/maps/embed/v1/view?key="
                + "-AIzaSyAJ1JqQHpz1BUe9HcakxwV8AhvQBR703ks"  //Remove "-" to enable map
                + "&center=" + String(latitude) + ","
                + String(longitude)
                + "&zoom=15";
  return (
    <div className="navigation">
      <div className="block-1">
        <h1>Restaurant Name</h1>
        <p>Current location: </p>
        <p>{latitude}</p>
        <p>{longitude}</p>
        <iframe title="Map"
            width="450"
            height="250"
            frameborder="0" style={{border:"0"}}
            referrerpolicy="no-referrer-when-downgrade"
            src={url}
            allowfullscreen>
        </iframe>
      </div>
    </div>
    );
};
  
export default Navigate;
  