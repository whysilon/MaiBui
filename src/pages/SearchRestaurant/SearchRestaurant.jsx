import "./SearchRestaurant.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SearchRestaurant(props)
{
    let service;
    const google = window.google;
    var [data, setData] = React.useState([]);
    var currentLocation = new google.maps.LatLng(props.latitude,props.longitude);
    const [restaurantName, setRestaurantName] = useState("");

    const searchHandler = (event) => {
        setRestaurantName(event.target.value);
    };

    const clickHandler = (event) => {
        event.preventDefault();
        console.log(restaurantName);
    }

    const request = {
        location: currentLocation,
        radius: '500',
        query: "healthy restaurant" + restaurantName,
    };
    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.textSearch(request, callback);

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
                    <div className="results">
                        <button key={result.id} style={{ width: "500px", height: "50px",}}>
                            <Link to="/select-restaurant" state={result}>{result.name}</Link>
                        </button>
                    </div>
            )));
        }
    }

    return(
        <div className="search">
            <h1 style={{fontSize: 40}}>Search for Healthier Restaurants</h1>
            <input 
            value={restaurantName}
            onChange={searchHandler}
            type="text"
            />
            <div>
                <button onClick={clickHandler}>Search</button>
            </div>
            {displayResults(data)}
        </div>
    )
}

export default SearchRestaurant;