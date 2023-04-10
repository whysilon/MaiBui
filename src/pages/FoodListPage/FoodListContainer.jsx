import HomePageNavBar from "../../components/HomePageNavBar"
import SearchBar from "./SearchBar.jsx"
import "./FoodListContainer.css"

/**
 * FoodListContainer contains the HomePageNavBar and the SearchBar 
 * to find food information based on queries
 *
 * 
 */
function FoodListContainer(){
    
    return(
        <div>
            <HomePageNavBar/>
            <SearchBar/>
        </div>
    )
}

export default FoodListContainer