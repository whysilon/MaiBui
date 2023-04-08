import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";
import CustomInput from "./CustomInput";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { auth } from "../../firebase-config";
import { Button, CircularProgress, Link, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getCalorieData } from "../NutritionixAPI/CalorieDataControl";
import { Search } from "@mui/icons-material";
import { Stack } from "@mui/system";

/**
 * This contains the functions required for Calorie Calculator
 * This displays the functions
 * 
 */

function CalorieContainer() { 
  let limit = 2000;
  const [total,setTotal] = useState(0)
  const [loading,setLoading] = useState(true)
  let user,email,username = "";
  try{
    user = auth.currentUser
    email = user.email
    username = user.displayName
  }
  catch(err){
    console.error(err)
  }
  useEffect(() => {
    let ignore = false
    setLoading(true)
    if(!ignore){
    getCalorieData(email).then((res) => {
      let temp = 0;
      res.forEach((element) => {
        temp = temp + parseInt(element.data().calorie)
      })
      setTotal(parseInt(temp))
      setLoading(false)
      ignore = true
    })
    }
    if (email === undefined) setLoading(true);
  },[])
  
  return (
    <div className="background">
      <AccountCenterNavBar/>
      <div className="aligner">
        <div>
        <Typography variant = "h3">Hello {username}!</Typography>
        <Typography variant= "subtitle1">Daily Calorie Limit: {limit}</Typography>
        {
        loading ? <CircularProgress/> :
        <CalorieCalculator tot = {total} lim = {limit} />
        }
        </div>
        <Stack direction= "row" spacing = {1}>
          <CustomInput/>
          <Link href = {"/food-search"}>
            <Button variant="outlined" 
            endIcon = {<Search/>}>
              Food Search
            </Button>
          </Link>
        </Stack>
      </div>
    </div>
  );
}

export default CalorieContainer;
