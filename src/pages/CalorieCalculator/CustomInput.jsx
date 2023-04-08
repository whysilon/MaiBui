import "./CustomInput.css"
import * as React from 'react';
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
import { auth } from "../../firebase-config";
import { addCalorieData } from "../NutritionixAPI/CalorieDataControl";
/**
 * This creates a form where users input the food name and calorie intake
 * 
 * 
 * @returns Calorie Number (int)
 */

function CustomInput(){
    const [open, setOpen] = useState(false);
    const [foodName,setFoodName] = useState("");
    const [calorie,setCalorie] = useState(0);
    const handleFoodNameChange = (event) => {
      setFoodName(event.target.value);
    }
    const handleCalorieChange = (event) => {
      setCalorie(event.target.value);
    }
    return (
    <Fragment>
      <Button
        variant="outlined"
        color="neutral"
        startDecorator={<Add />}
        onClick={() => setOpen(true)}
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
            onSubmit={(event) => {
              event.preventDefault();
              console.log(foodName)
              console.log(calorie)
              const data = {
                "food_name" : foodName,
                "calorie" : calorie
              }
              addCalorieData(data,auth.currentUser.email).then((res) => {
              console.log(res)
              setOpen(false);
              }
              )
            }}
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
    </Fragment>
  );
}

export default CustomInput;