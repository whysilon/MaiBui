import HomePageNavBar from "../../components/HomePageNavBar";
import SearchRestaurant from "./SearchRestaurant";
import "./SearchContainer.css"

const SearchContainer = (props) => {
    return (
        <div className="container">
            <HomePageNavBar />
            <SearchRestaurant />
        </div>
    );
}

export default SearchContainer;