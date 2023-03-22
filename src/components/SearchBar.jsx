import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import NutritionixAPIControl from "../pages/FoodListPage/NutritionixAPIControl";
import DisplayFoodList from "../pages/FoodListPage/DisplayFoodList";
import { Autocomplete, Box, Typography } from "@mui/material";


function SearchBar(){
    const [input, setInput] = useState("Cereal")
    const [list, setList]= useState([]);
    useEffect(()=>{
        NutritionixAPIControl(input)
        .then(res=>setList(res))
    },[])

    const handleInput = (e)=>{
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
        <Typography variant='h4' component={'h1'}>React Search Bar</Typography>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={list.map(item=>item.title)}
            defaultValue = "Cereal"
            renderInput={(params) => <TextField {...params} 
            label="Search title"
            onSelect={handleInput}
            sx={{
            width: 350,
            margin:'10px auto',
        }}  />}
    />
    <DisplayFoodList searchstring={input} list={list}/>
    </Box>
    );
}

export default SearchBar;