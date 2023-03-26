import "./RecommendRestaurant.css"
import React from "react"
import { Link } from "react-router-dom";

function RecommendRestaurant(props)
{
    let service;
    const google = window.google;
    var [data, setData] = React.useState([]);
    var currentLocation = new google.maps.LatLng(props.latitude,props.longitude);

    const request = {
        location: currentLocation,
        radius: '1000',
        keyword: 'healthy',
        type: ['restaurant']
    };
    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback);

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            setData(results);
        }
    }

    function displayResults(data){
        if(data.length === 0){
            return(<p>There are no nearby restaurants!</p>);
        }
        else{
            return(
                data.map((result) => (
                    <div>
                    <button key={result.id}>
                        <Link to="/select-restaurant" state={result}>{result.name}</Link>
                    </button>
                    </div>
                ))
            );
        }
    }
    
    return(
        <div className="recommend">
            <h1 style={{fontSize: 40}}>Nearby Restaurants</h1>
            {displayResults(data)}
        </div>
    )
}

export default RecommendRestaurant;