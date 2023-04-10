import { useState } from "react";
import TextField from "@mui/material/TextField";
import DisplayFoodList from "../pages/FoodListPage/DisplayFoodList.jsx"
import { Paper,Stack, Box, IconButton, Typography, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar(){
    const [input,setInput] = useState("")
    const handleInput = (e) => {
        setInput(e.target.value.toLowerCase());
        console.log(input);
    }
    return(
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
            <DisplayFoodList query = {input}/>
        </Box>
        )
}

export default SearchBar;