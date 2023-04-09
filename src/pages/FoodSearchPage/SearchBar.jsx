import { useState } from "react";
import TextField from "@mui/material/TextField";
import DisplaySearch from "./DisplaySearch.jsx"
import { Box, IconButton } from "@mui/material";
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
        style={{
            width: 600,
            height: 800,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: 'inherit',
            width: 'inherit',
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