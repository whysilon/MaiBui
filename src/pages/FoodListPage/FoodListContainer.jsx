import { Autocomplete } from "@mui/material"
import HomePageNavBar from "../../components/HomePageNavBar"
import SearchBar from "../../components/SearchBar.jsx"
import "./FoodListContainer.css"
import FoodPage from "./FoodPage"

function FoodListContainer(){
    
    return(
        <div>
            <HomePageNavBar/>
            <SearchBar/>
        </div>
    )
}

export default FoodListContainer