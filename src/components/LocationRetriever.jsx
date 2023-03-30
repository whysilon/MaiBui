import React from "react";

/**
 * Function used to retrieve the user's current location.
 * @function GetLocation
 * @returns {Float32Array, Float32Array} Latitude and longitude of user location.
 * 
 * @author Xavier
 * 
 */
function GetLocation() {
    const [latitude, setLatitude] = React.useState(0);
    const [longitude, setLongitude] = React.useState(0);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {  //Retrieve current location
        const lat = position.coords.latitude, lng = position.coords.longitude;
        setLatitude(lat);
        setLongitude(lng)
        })
    }, [])
    return (
        {"latitude": latitude, "longitude": longitude}
    );
}

export default GetLocation;