import React from "react";
import GetLocation from "../../components/LocationRetriever";

export default async function RecommendResults() {
    var [data, setData] = React.useState([]);
    var [check, setCheck] = React.useState(false);
    let location = GetLocation();
    let service;
    const google = window.google;
    var currentLocation = new google.maps.LatLng(location.latitude,location.longitude);

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
            setCheck(true);
        }
    }
    return({data: data, check: check});
};