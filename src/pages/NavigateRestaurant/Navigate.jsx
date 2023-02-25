import "./Navigate.css";
import React from 'react';
import Map from "../../components/Map";

const locatio = {
  address: 'Current location',
  lat: 1.3632546730955803,
  lng: 103.75201386129335,
}

const initialLocation = {
  address: 'Current location',
  lat: 0,
  lng: 0,
}

const Navigate = () => {
  const [location, setLocation] = React.useState(initialLocation);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude, lng = position.coords.longitude;
      setLocation(loc => ({...loc, lat, lng})); 
    })
  }, [])
  
  return (
    <div className="navigation">
      <div className="block-1">
        <h1>Restaurant Name</h1>
        <p>Current location: </p>
        <p>{location.lat}</p>
        <p>{location.lng}</p>
        <Map location={location} zoomLevel={17}/>
      </div>
    </div>
    );
};
  
export default Navigate;
  