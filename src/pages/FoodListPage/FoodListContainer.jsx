import SearchBar from "./SearchBar.jsx"
import "./FoodListContainer.css"
import AccountCenterNavBar from "../../components/AccountCenterNavBar"

/**
 * FoodListContainer contains the HomePageNavBar and the SearchBar 
 * to find food information based on queries
 *
 * 
 */
function FoodListContainer(){
    
    return(
        <div>
            <AccountCenterNavBar/>
            <SearchBar/>
        </div>
    )
}

export default FoodListContainer