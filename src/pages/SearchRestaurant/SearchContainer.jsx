import HomePageNavBar from "../../components/HomePageNavBar";
import SearchRestaurant from "./SearchRestaurant";
import GetLocation from "../../components/LocationRetriever";
import "./SearchContainer.css";

/**
 * Displays the Search Restaurant page for the current user.
 *
 * @author Xavier
 * @returns HTML page of the Search Restaurant page.
 */
const SearchContainer = () => {
    /**
     * Object containing the location of the user in the format {latitude, longitude}.
     */
    let location = GetLocation();
    return (
        <div>
            <HomePageNavBar />
            <SearchRestaurant latitude={location.latitude} longitude={location.longitude} />
        </div>
    );
}

export default SearchContainer;