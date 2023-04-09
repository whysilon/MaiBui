import SearchBar from "./SearchBar.jsx"
import "./FoodSearchContainer.css"
import AccountCenterNavBar from "../../components/AccountCenterNavBar.jsx"

/**
 * FoodListContainer contains the HomePageNavBar and the SearchBar 
 * to find food information based on queries
 *
 * 
 */
function FoodSearchContainer(){
    
    return(
        <div className="parentcontainer-foodSearch"> 
            <AccountCenterNavBar/>
            <div className="wrapper-foodSearch">
                <div className="innercontainer-foodSearch">
                    <SearchBar/>
                </div>
            </div>
        </div>
    )
}

export default FoodSearchContainer