import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import NutritionixAPIControl from "../pages/FoodListPage/NutritionixAPIControl";
import DisplayFoodList from "../pages/FoodListPage/DisplayFoodList.jsx"
import { Paper,Stack, Box, IconButton, Typography, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(){
    const [input, setInput] = useState("")
    const [list, setList]= useState([]);
    const [loading,setLoading] = useState(true);



    const handleInput = (e)=>{
        setLoading(true)
        if(e === ''){
            console.log('this happened')
            setInput('cereal')
        }
        console.log(e.target.value)
        setInput(e.target.value.toLowerCase())
    }
    return (
    <Box
    sx={{
        width: 400,
        height: 660,
        margin:'100px auto',
        
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly'
     }}>
        <form>
            <TextField
            id="search-bar"
            className="text"
            onInput={handleInput}
            label="Enter a city name"
            variant="outlined"
            placeholder="Search..."
            size="small"
            />
            <IconButton type="submit" aria-label="search">
                <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
        </form>
        <DisplayFoodList list = {list} loading = {loading} query = {input}/>
    </Box>
    );
}

export default SearchBar;