import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import FoodCategoryPage from "./FoodCategoryPage";
import "./FoodCategoryContainer.css"

/**
 * Displays the HTML components of FoodCategoryPage and NavBar
 * 
 * @author Valencino Tan
 * 
 * @returns HTML component of FoodCategoryContainer which contains the default NavBar and FoodCategoryPage
 */


export default function FoodCategoryContainer(){   
    return(
        <div className="container">
            <AccountCenterNavBar/>
            <div className="foodCategory">
                <FoodCategoryPage/>
            </div>
        </div>
    )
}
