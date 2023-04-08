/**
 * Contains nutritional information
 * 
 * 
 */

import { Button, TextField, Typography } from "@mui/material"
import { useState } from "react";
import "./NutritionInformation.css";
import { addCalorieData } from "../NutritionixAPI/CalorieDataControl";
import { auth } from "../../firebase-config";

function CapitalizeFirstLetter(str){
    str = str.replace(/%20/g," ");
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
   const handleSubmit = async(e) => {
        e.preventDefault()
        const info = {
            food_name : data.food_name,
            calorie : Math.round(data.nf_calories*servings)
        }
        try{
            console.log("er")
            const user = auth.currentUser
            console.log(user)
            const email = user.email
            console.log(email)
            const res = await addCalorieData(info,email)
            alert("Success!")
            console.log(res)
        }
        catch(err){
            console.error(err)
            alert("Error! Please try again a minute later")
        }
   }
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
                    <Typography variant = "h2">{CapitalizeFirstLetter(data.food_name)}</Typography>
                    <br></br>
                    <Typography variant = "h4">For one serving ({data.serving_unit}):</Typography>
                    <Typography variant = "h5">Calories: {data.nf_calories}kcal</Typography>
                    <Typography variant = "h5">Cholesterol: {data.nf_cholesterol}mg</Typography>
                    <Typography variant = "h5">Saturated Fat: {data.nf_saturated_fat}g</Typography>
                    <Typography variant = "h5">Total Fat: {data.nf_total_fat}g</Typography>
                    <Typography variant = "h5">Total Carbohydrates: {data.nf_total_carbohydrate}g</Typography>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
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
                            if (event?.key === '-' || event?.key === '+' || event?.key === 'e') {
                            event.preventDefault();
                        }}}
                        >
                        </TextField>
                        <Button variant="contained" type="submit">Submit!</Button>
                        <Button variant="contained" style={{marginLeft: "50px", backgroundColor:"#344E41"}}>Submit</Button>
                        <Typography variant="subtitle1">Calories: {Math.round(data.nf_calories*servings)}</Typography>
                    </form>
                </div>
            </div>
            <div className ="box-size">
                {noImage ? <img className="image" src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="Placeholder"/>:
                <img className="image" src={data.photo.highres} alt={data.food_name+" picture"}></img>
                }
            </div>
        </div>
        )
    
}

export default NutritionInformation