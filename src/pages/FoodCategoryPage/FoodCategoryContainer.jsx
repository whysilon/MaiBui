import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import FoodCategoryPage from "./FoodCategoryPage";
import "./FoodCategoryContainer.css"

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
