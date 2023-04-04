import { useState } from "react";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import GetFoodSearch from "../API/NutritionixAPIControl";
import { useParams } from "react-router-dom";
import { CircularProgress} from "@mui/material";
import FoodCategoryItems from "./FoodCategoryItems";

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

