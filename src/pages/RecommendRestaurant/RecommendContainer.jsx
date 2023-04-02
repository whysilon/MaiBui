import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import RecommendRestaurant from "./RecommendRestaurant";
import GetLocation from "../../components/LocationRetriever";
import "./RecommendContainer.css";
import React from "react";

/**
 * Displays the Recommend Restaurant page for the current user.
 *
 * @author Xavier
 * @returns HTML page of the Recommend Restaurant page.
 */
function RecommendContainer() {
  /**
   * Object containing the location of the user in the format {latitude, longitude}.
   */
  let location = GetLocation();
  return (
    <div>
      <AccountCenterNavBar />
      <RecommendRestaurant latitude={location.latitude} longitude={location.longitude} />
    </div>
  );
}
export default RecommendContainer;