import { useState } from "react";
import "./NutritionInformation.css";
import { addCalorieData } from "../NutritionixAPI/CalorieDataControl";
import { auth } from "../../firebase-config";
import { Alert, Button, Slide, Snackbar, TextField, Typography } from "@mui/material";

/**
 * Contains nutritional information
 * 
 * @author Valencino Tan
 * 
 * @param data (data from NutritionixAPI based on input)
 * 
 * @returns HTML of Nutritional Information
 * 
 */

function CapitalizeFirstLetter(str){
    str = str.replace(/%20/g," ");
    return(
        str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
    )
}

function NutritionInformation({data}) {
    /**
    * Set the amount of serving user desire
    */
    const [servings,setServings] = useState(1);
    /**
     * Set the alert message that will be shown in the SnackBar
     */
    const [alertMessage, setAlertMessage] = useState("");
    /**
    * Set the severity of the SnackBar,
    * initially "error"
    */
    const [snackBarSeverity, setSnackBarSeverity] = useState("error");
    /**
    * Set the open state of SnackBar
    */
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    /**
     * 
     * If user clicks away from the popup, the snackbar will close
     * 
     */
    const handleSnackBarClose = (event, reason) => {
        if (reason === "clickaway") {
          return;
        }
        setSnackBarOpen(false);
      };
    /**
     * Handles submitting the form into the database
     * 
     */
    const handleSubmit = async(e) => {
        e.preventDefault()
        const info = {
            food_name : data.food_name,
            calorie : Math.round(data.nf_calories*servings)
        }
        try{
            const user = auth.currentUser
            console.log(user)
            const email = user.email
            console.log(email)
            const res = await addCalorieData(info,email)
            setAlertMessage("Input successful!");
            setSnackBarOpen(true);
            setSnackBarSeverity("success");
      
            setTimeout(() => {
              window.location.href = "/calorie-calculator";
            }, 1000);
            console.log(res)
        }
        catch(err){
            console.error(err)
            setAlertMessage("Error! Please try again one minute later!");
            setSnackBarOpen(true);
            setSnackBarSeverity("error");
        }
   }
   /**
    * 
    * Handles the input of the number of servings the user have ate
    * 
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
                        <Button variant="contained" type="submit" style={{marginLeft: "50px", backgroundColor:"#344E41"}}>Submit</Button>
                        <Typography variant="subtitle1">Calories: {Math.round(data.nf_calories*servings)}</Typography>
                    </form>
                </div>
            </div>
            <div className ="box-size">
                {noImage ? <img className="image" src="https://png.pngtree.com/png-vector/20210604/ourmid/pngtree-gray-network-placeholder-png-image_3416659.jpg" alt="Placeholder"/>:
                <img className="image" src={data.photo.highres} alt={data.food_name+" picture"}></img>
                }
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={snackBarOpen}
          autoHideDuration={6000}
          onClose={handleSnackBarClose}
          TransitionComponent={Slide}
        >
          <Alert onClose={handleSnackBarClose} severity={snackBarSeverity}>
            {alertMessage}
          </Alert>
        </Snackbar>
            </div>
        </div>
        )
    
}

export default NutritionInformation