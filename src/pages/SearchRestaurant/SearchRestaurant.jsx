import "./SearchRestaurant.css"
import React, { useState } from "react";
import { Link } from "react-router-dom";

/**
 * Component for displaying healthy restaurants searched by users.
 *
 * @author Xavier
 * @returns HTML of the SearchRestaurant component.
 */
function SearchRestaurant(props)
{
    let service;
    const google = window.google;

    /**
     * Array of restaurant results requested from the Google Places API.
     */
    var [data, setData] = React.useState([]);

    /**
     * Current location of the user.
     */
    var currentLocation = new google.maps.LatLng(props.latitude,props.longitude);
    const [restaurantName, setRestaurantName] = useState("");

    /**
     * Function to handle input in the search bar.
     * @param {*} event 
     */
    const searchHandler = (event) => {
        setRestaurantName(event.target.value);
    };

    /**
     * Object containing information needed for Google Places API request.
     */
    const request = {
        location: currentLocation,
        radius: '1500',
        query: "healthy restaurant" + restaurantName,
    };
    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.textSearch(request, callback);
    window.onload = service.textSearch(request, callback);

    /**
     * Function for retrieving results from the Google Places API.
     * @param {*} results 
     * @param {*} status 
     */
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            setData(results.slice(0, 10));
        }
    }

    /**
     * Function to display restaurant results on the page.
     * @param {Array} data 
     * @returns {JSX.Element} HTML of the restaurant results.
     */
    function displayResults(data){
        if(restaurantName === ""){
            return(<div><p>Waiting for search entry...</p></div>)
        }
        else if(data.length === 0){
            return(<div><p>There are no nearby restaurants!</p></div>);
        }
        else{
            return(
                data.map((result) => (
                    <div>
                        <Link to={`/select-restaurant/${result.place_id}`}>
                            <div key={result.id} style={{width: "444px", height: "60px", display: "flex", justifyContent: "center", alignItems:"center", fontSize: "17", color:"white", backgroundColor:"#588157",border: "3px white solid"}}>
                                {result.name}
                            </div>
                        </Link>
                    </div>
            )));
        }
    }

    return(
        <div className="search-parentContainer">
            <div className="search">
                <h1 style={{fontSize: 40}}>Search for Healthier Restaurants</h1>
                <input className="searchBar"
                value={restaurantName}
                onChange={searchHandler}
                type="search"
                placeholder="Enter restaurant name"
                />
                <div className="searchResults">
                    {displayResults(data)}
                </div>
            </div>
        </div>
    )
}

export default SearchRestaurant;