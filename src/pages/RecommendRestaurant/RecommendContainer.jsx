import HomePageNavBar from "../../components/HomePageNavBar";
import RecommendRestaurant from "./RecommendRestaurant";
import GetLocation from "../../components/LocationRetriever";
import "./RecommendContainer.css";
import React from "react";

function RecommendContainer() {
  let location = GetLocation();
  return (
    <div>
      <HomePageNavBar />
      <RecommendRestaurant latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
}

export default RecommendContainer;
