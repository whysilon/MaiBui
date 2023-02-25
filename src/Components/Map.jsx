import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'

const Map = ({ location, zoomLevel }) => (
    <div className="map">
      <div className="google-map">
        <p>{location.lat}</p>
        <p>{location.lng}</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: '-AIzaSyAJ1JqQHpz1BUe9HcakxwV8AhvQBR703ks' }}//Remove '-' at front
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
        </GoogleMapReact>
      </div>
    </div>
)
export default Map