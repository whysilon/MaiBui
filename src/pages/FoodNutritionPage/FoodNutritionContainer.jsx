/**
 * This contains the nutritional information from the Nutritionix API
 * It will display the nutritional information of the food selected
 * 
 */

import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { getNutrition } from "../FoodListPage/NutritionixAPIControl";
import NutritionInformation from "./NutritionInformation";
let ignore = false

function FoodNutritionContainer(){
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const input = useParams().id
    if(!ignore){
        getNutrition(input).then(
        res => {
            setData(res)
            setLoading(false)
            ignore = true
            console.log(data)
        });
    }
    return(
        <>
        <AccountCenterNavBar/>
        {loading ? (<CircularProgress/>) : 
        <NutritionInformation data = {data}/>
        }
        </>
    )
}

export default FoodNutritionContainer