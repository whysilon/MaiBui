import HomePageNavBar from "../../components/HomePageNavBar";
import SearchRestaurant from "./SearchRestaurant";
import "./SearchContainer.css"

const SearchContainer = (props) => {
    return (
        <div>
            <HomePageNavBar />
            <SearchRestaurant />
        </div>
    );
}

export default SearchContainer;