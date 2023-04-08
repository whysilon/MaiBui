import { useState } from "react";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { useParams } from "react-router-dom";
import { CircularProgress} from "@mui/material";
import FoodCategoryItems from "./FoodCategoryItems";
import GetFoodSearch from "../NutritionixAPI/NutritionixAPIControl";

let ignore = false

export default function FoodItemContainer(){
    const [data,setData] = useState("")
    const [loading,setLoading] = useState(true)
    const input = useParams().id
    console.log(input)

    if(!ignore){
        GetFoodSearch(input).then(
        res => {
            console.log(res)
            setData(res)
            setLoading(false)
            ignore = true
        });
    }
    return(
        <div>
        <AccountCenterNavBar/>
        {loading ? (<CircularProgress/>) :
        <FoodCategoryItems data = {data}/>
        }
        </div>
    )
}

