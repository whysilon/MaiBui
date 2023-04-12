import SearchBar from "./SearchBar.jsx"
import "./FoodSearchContainer.css"
import AccountCenterNavBar from "../../components/AccountCenterNavBar.jsx"

/**
 * FoodListContainer contains the NavBar and the SearchBar 
 * to find food information based on queries
 *
 * @author Valencino Tan
 * 
 * @returns HTML component of FoodSearchContainer
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