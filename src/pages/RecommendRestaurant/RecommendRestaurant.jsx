import "./RecommendRestaurant.css"
import React from "react"

function RecommendRestaurant(props)
{
    let service;
    const google = window.google;
    const [data, setData] = React.useState([]);
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
    const renderList = data.map((item, index) =>
                                <div key={index}>{item.name}</div>
    );
    return(
        <div className="recommend">
            <h1 style={{fontSize: 40}}>Nearby Restaurants</h1>
            {renderList}
        </div>
    )
}

export default RecommendRestaurant;