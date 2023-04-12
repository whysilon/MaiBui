import { useState } from "react";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { useParams } from "react-router-dom";
import { CircularProgress} from "@mui/material";
import FoodCategoryItems from "./FoodCategoryItems";
import GetFoodSearch from "../NutritionixAPI/NutritionixAPIControl";

/**
 * Displays the list of food items from search/instant endpoint from
 * NutritionixAPI based on the category chosen.
 * 
 * @author Valencino Tan
 * 
 * @returns HTML component of FoodItemContainer
 */

let ignore = false

export default function FoodItemContainer(){
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const input = useParams().id

    if(!ignore){
        GetFoodSearch(input).then(
        res => {
            setData(res)
            setLoading(false)
            ignore = true
        });
    }
    return(
        <div style={{height: "100vh", width: "auto"}}>
            <AccountCenterNavBar/>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", height:"80vh", marginTop:"50px"}}>
                {loading ? (<CircularProgress/>) :
                <FoodCategoryItems data = {data}/>}
            </div>
        </div>
    )
}

