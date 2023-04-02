// CSS
import "./SelectRestaurantDetails.css";

import { Link } from "react-router-dom";
import React from "react";
import { useParams } from "react-router-dom";

// To do: Sync Google API with details

/**
 * Displays the resturant details of the
 * Restaurant page
 * 
 * @author Marcus Yeo
 * @returns HTML of Restaurant page
 */

const SelectRestaurantDetails = () => {
  let service;
  const google = window.google;
  const place_id = useParams();
  const [details, setDetails] = React.useState([]);
  const [opening_hours, setHours] = React.useState([]);

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
        <button ><Link to={`/navigate-restaurant/${place_id.id}`}>Navigate</Link></button>
        <button className="oddle">
            <img src="https://cdn-icons-png.flaticon.com/512/3313/3313619.png" />
            <Link to={details.website }>Website</Link>
        </button>
        <button><Link to="/feedback">Give Feedback</Link></button>
      </div>
    </div>
  );
};

export default SelectRestaurantDetails;
