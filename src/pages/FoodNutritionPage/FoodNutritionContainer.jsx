/**
 * This contains the nutritional information from the Nutritionix API
 * It will display the nutritional information of the food selected
 * 
 */

import { useParams } from "react-router";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { getNutrition } from "../FoodListPage/NutritionixAPIControl";
import NutritionInformation from "./NutritionInformation";
import "./FoodNutritionContainer.css"

let ignore = false
function FoodNutritionContainer(){
    const input = useParams().id;
    console.log(input)
    return(

        <div className="container">
        <AccountCenterNavBar/>
            <div className = "nutrition" > 
            {   
                loading ? (<CircularProgress/>) :
                <NutritionInformation data = {data}/>
            }
            </div>
        </div>
    )
}

export default FoodNutritionContainer