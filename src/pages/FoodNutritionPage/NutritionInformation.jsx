/**
 * Contains nutritional information
 * 
 * 
 */

import {Button, TextField, Typography } from "@mui/material"
import { useState } from "react";


function NutritionInformation({data}) {
    /*
    if(data == "Error"){
        return <Typography variant = "h2">Error loading data</Typography>
    }
    */
   const [servings,setServings] = useState(1)
   /*
   data = {
        'serving_unit' : 'g',
        'food_name': "Tea",
        'nf_calories' : 10,
        'nf_cholesterol' : 1,
        'nf_saturated_fat' : 2,
        'nf_total_fat' : 42,
        'nf_total_carbohydrate' : 4}
        */
    const handleInput = (e) => {
        if(e === "") setServings(1);
        setServings(e.target.value);
        console.log(servings);
}
    return (
        <>
            <div>
                <Typography variant = "h2">Food name: {data.food_name}</Typography>
                <Typography>For one serving ({data.serving_unit})</Typography>
                <Typography>Calories: {data.nf_calories}kcal </Typography>
                <Typography>Cholesterol: {data.nf_cholesterol}mg</Typography>
                <Typography>Saturated Fat: {data.nf_saturated_fat}g</Typography>
                <Typography>Total Fat: {data.nf_total_fat}g</Typography>
                <Typography>Total Carbohydrates: {data.nf_total_carbohydrate}g</Typography>
            </div>
            <div>
                <Typography variant = "subtitle2">Enter your serving size here:</Typography>
                <form>
                    <TextField
                    label="Enter serving size"
                    variant="outlined"
                    placeholder="Search..."
                    size="small"
                    onInput={handleInput}
                    type = "number"
                    InputProps={{
                        inputProps:{min:0}
                    }}
                    onKeyPress={(event) => {
                        if (event?.key === '-' || event?.key === '+') {
                          event.preventDefault();
                    }}}
                    >
                    </TextField>
                    <Button variant="contained">Submit!</Button>
                    <Typography variant="subtitle1">Calories: {data.nf_calories*servings}</Typography>
                </form>
            </div>
        </>
        )
    
}

export default NutritionInformation
