import "./RecommendRestaurant.css"
import React from "react"
import { createContext } from "react";
import { Link } from "react-router-dom";

const UserContext = createContext();

/**
 * Component for displaying nearby healthy restaurants to users.
 *
 * @author Xavier
 * @returns HTML of the Recommend Restaurant component.
 */
function RecommendRestaurant(props)
{
    let service;
    const google = window.google;

    /**
     * Array of restaurant results requested from the Google Places API.
     */
    var [data, setData] = React.useState([]);
    const [retrieved, setRetrieved] = React.useState(false);

    /**
     * Current location of the user.
     */
    var currentLocation = new google.maps.LatLng(props.latitude,props.longitude);

    /**
     * Object containing information needed for Google Places API request.
     */
    const request = {
        location: currentLocation,
        radius: '1000',
        keyword: 'healthy',
        type: ['restaurant']
    };
    service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch(request, callback);

    /**
     * Function for retrieving results from the Google Places API.
     * @param {*} results 
     * @param {*} status 
     */
    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            setData(results);
            setRetrieved(true);
        }
    }

    /**
     * Function to display restaurant results on the page.
     * @param {Array} data 
     * @returns {JSX.Element} HTML of the restaurant results.
     */
    function displayResults(data){
        if(data.length === 0){
            if(retrieved === true){
                return(<div><p>There are no nearby restaurants!</p></div>);
            }
            else{
                return(<div><p>Loading...</p></div>)
            }
        }
        else{
            return(
                data.map((result) => (
                    <UserContext.Provider value={data}>
                        <Link to={`/select-restaurant/${result.place_id}`}>
                            <div className="results">
                                <button key={result.id} style={{ width: "500px", height: "50px",}}>
                                    {result.name}
                                </button>
                            </div>
                        </Link>
                    </UserContext.Provider>
            )));
        }
    }
    
    return(
        <div className="recommend">
            <h1 style={{fontSize: 40}}>Restaurants near you:</h1>
            {displayResults(data)}
        </div>
    )
}

export default RecommendRestaurant;