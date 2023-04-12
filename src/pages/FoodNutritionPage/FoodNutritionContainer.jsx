import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { getNutrition } from "../NutritionixAPI/NutritionixAPIControl.jsx";
import NutritionInformation from "./NutritionInformation";
import "./FoodNutritionContainer.css"
/**
 * Displays the Nutritional information of the given food based on
 * the given id (from navigation)
 * 
 * @author Valencino Tan
 * 
 * @returns HTML component of FoodNutrition Container
 */


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
        });
    }
    return(
    <div className="container">
        <AccountCenterNavBar/>
            <div className = "nutrition" > 
            {   
                loading ? (
                <div className = "progress">
                <CircularProgress/>
                </div>) :
                <NutritionInformation data = {data}/>
            }
            </div>
        </div>
    )
}

export default FoodNutritionContainer