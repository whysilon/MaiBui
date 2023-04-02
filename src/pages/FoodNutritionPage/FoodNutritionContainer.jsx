/**
 * This contains the nutritional information from the Nutritionix API
 * It will display the nutritional information of the food selected
 * 
 */

import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import HomePageNavBar from "../../components/HomePageNavBar";
import { getNutrition } from "../FoodListPage/NutritionixAPIControl";
import NutritionInformation from "./NutritionInformation";

function FoodNutritionContainer(){
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const input = useParams().id
    getNutrition(input).then(
        res => {
            setData(res)
            setLoading(false)
        });

    console.log(data)
    return(
        <>
        <HomePageNavBar/>
        {loading ? (<CircularProgress/>) : 
        <NutritionInformation data = {data}/>
        }
        </>
    )
}

export default FoodNutritionContainer