import { useState } from "react";
import TextField from "@mui/material/TextField";
import DisplaySearch from "./DisplaySearch.jsx"
import { Paper,Stack, Box, IconButton, Typography, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
/**
* Displays the search bar for searching food
*
* @author Valencino Tan
* @returns SearchBar
*
*/

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
                label="Enter food name"
                variant="outlined"
                placeholder="Search..."
                size="small"
                />
                <IconButton type="button" aria-label="search">
                    <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
            </form>
            <DisplaySearch query = {input}/>
        </Box>
        )
}

export default SearchBar;