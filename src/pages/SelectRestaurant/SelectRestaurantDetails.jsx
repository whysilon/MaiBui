// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
=======
import React from "react";
import { useParams } from "react-router-dom";
>>>>>>> 7c4f38abab37a4b60304d81da9ad9d45a7b07647

// To do: Sync Google API with details

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {
<<<<<<< HEAD

  let service;
  const google = window.google;
  const place_id = useParams();
  const [details, setDetails] = useState([]);
  const [opening_hours, setHours] = useState([]);
=======
  let service;
  const google = window.google;
  const place_id = useParams();
  const [details, setDetails] = React.useState([]);
  const [opening_hours, setHours] = React.useState([]);
>>>>>>> 7c4f38abab37a4b60304d81da9ad9d45a7b07647

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
    }
  }

  const renderList = (opening_hours).map((item, index) => 
                             <p key={index} style={{ fontSize: 15 }} >{item}</p>
                           );

  return (
    <div className="details">
      <div className="block-1">
        <h1>{details.name}</h1>
        <p>{details.formatted_address}</p>
        <p  >Operating Hours:</p>
        <p className="times">{renderList}</p>
      </div>
      <div className="block-2">
        <div className="child-1">
          <p>Number feedbacks</p>
        </div>
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
    </div>
  );
};

export default SelectRestaurantDetails;