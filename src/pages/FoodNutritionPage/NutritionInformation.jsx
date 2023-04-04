/**
 * Contains nutritional information
 * 
 * 
 */

import {Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import "./NutritionInformation.css";

function CapitalizeFirstLetter(str){
    return(
        str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
    )
}

function NutritionInformation({data}) {
    /*
    if(data == "Error"){
        return <Typography variant = "h2">Error loading data</Typography>
    }
    */
   const [servings,setServings] = useState(1)
   console.log(data)
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
    let noImage = false;
    if(data.photo.highres === null) noImage = true;
    return (
        <div className="info-container">
            <div className="wrapper">
                <div>
                    <Typography variant = "h2">Food name: {CapitalizeFirstLetter(data.food_name)}</Typography>
                    <Typography variant = "h4">For one serving ({data.serving_unit}):</Typography>
                    <Typography variant = "h5">Calories: {data.nf_calories}kcal</Typography>
                    <Typography variant = "h5">Cholesterol: {data.nf_cholesterol}mg</Typography>
                    <Typography variant = "h5">Saturated Fat: {data.nf_saturated_fat}g</Typography>
                    <Typography variant = "h5">Total Fat: {data.nf_total_fat}g</Typography>
                    <Typography variant = "h5">Total Carbohydrates: {data.nf_total_carbohydrate}g</Typography>
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
            </div>
            <div className ="box-size">
                {noImage ? <img className="image" src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="Placeholder"/>:
                <img className="image" src={data.photo.highres} alt={data.food_name+"Picture"}></img>
                }
            </div>
        </div>
        )
    
}

export default NutritionInformation
