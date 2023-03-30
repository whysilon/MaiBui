/**
 * This contains the nutritional information from the Nutritionix API
 * It will display the nutritional information of the food selected
 * 
 */

import { useParams } from "react-router";
import HomePageNavBar from "../../components/HomePageNavBar";

function FoodNutritionContainer(){
    const input = useParams().id;
    console.log(input)
    return(
        <HomePageNavBar/>
    )
}

export default FoodNutritionContainer