import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { useState, Fragment } from "react";
import { addCalorieData } from "../NutritionixAPI/CalorieDataControl";
import { Alert, Slide, Snackbar} from "@mui/material";
/**
 * This creates a popout form where users input the food name and calorie intake
 * 
 * @author Valencino Tan
 * 
 * @returns HTML component of CustomInput
 */

function CustomInput(){
    const [open, setOpen] = useState(false);
    const [foodName,setFoodName] = useState("");
    const [calorie,setCalorie] = useState(0);
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
     * Handles the text field input for the food name part of the form
     * 
     */

    const handleFoodNameChange = (event) => {
      setFoodName(event.target.value);
    }

    /**
     * Handles the text field input for the calorie part of the form
     * 
     */

    const handleCalorieChange = (event) => {
      setCalorie(event.target.value);
    }
    /**
     * Handles submitting the relevant data
     * 
     */
    const handleSubmit = async (event) => {
      event.preventDefault();
      const data = {
        "food_name" : foodName,
        "calorie" : calorie
      }
    try{
      const res = await addCalorieData(data,localStorage.token)
      // Error in add calorie data
      if(res === "Error!" || res === undefined){
          setSnackBarSeverity("error")
          setAlertMessage("Error in submitting, please wait one minute")
          setSnackBarOpen(true)
        }
      else{
          setAlertMessage("Input successful!");
          setSnackBarOpen(true);
          setSnackBarSeverity("success");
          setOpen(false);
        }
      }
      // Any other error
    catch(err){
        console.error(err)
        setSnackBarSeverity("error")
        setAlertMessage("Unknown Error occured, please wait a while before submitting again")
        setSnackBarOpen(true)
      }
    }
    return (
    <Fragment>
      <Button
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
        style={{width: "180px", color: "white", backgroundColor:"#588157"}}
      >
        Custom Input
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="Custom Input"
          aria-describedby="Add custom calories"
          sx={{ maxWidth: 500 }}
        >
          <Typography id="basic-modal-dialog-title" component="h2">
            Add custom calories
          </Typography>
          <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
            Fill in the food name and calories
          </Typography>
          <form
            onSubmit={handleSubmit}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Food Name</FormLabel>
                <Input 
                name = "food_name"
                value = {foodName}
                onChange = {handleFoodNameChange}
                autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Custom Calories</FormLabel>
                <Input 
                name = "calorie"
                type = "number"
                value = {calorie}
                onChange = {handleCalorieChange}
                required 
                // This makes it so that the user can only input positive numbers
                onKeyPress={(event) => {
                    if (event?.key === '-' || event?.key === '+' || event?.key === 'e') {
                    event.preventDefault();
                }}}/>
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
      <div>
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
    </Fragment>
  )
}

export default CustomInput;