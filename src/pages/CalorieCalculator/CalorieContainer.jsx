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

    // This is done as useEffect keeps reading null value of user.email as useEffect is ran before the try statement.
    // I use the local storage to tackle this problem as local storage would always store the email.
    // using auth.currentUser.email directly also does not fetch the data as the page has not been loaded and no user data can be fetched.

    email = localStorage.getItem('token')
    getCalorieData(email).then((res) => {
      let temp = 0;
      res.forEach((element) => {
        temp = temp + parseInt(element.data().calorie)
      })
      setTotal(parseInt(temp))
      setLoading(false)
    })
    if (email === undefined) setLoading(true);
  },[])
  
  return (
    <div className="calculatorParentContainer">
      <AccountCenterNavBar/>
      <div className="innerContent">
        <div className="mainstats">
          <div className="block-1">
            <div className = "innerBlock-1">
              <Typography variant = "h3" textAlign = "left" fontWeight="bold">Hello, {username}</Typography>
              <Typography variant= "subtitle1" textAlign = "left">Daily Calorie Limit: {limit}</Typography>
              {
              loading ? <CircularProgress/> :
              <CalorieCalculator tot = {total} lim = {limit}/>
              }
            </div>
          </div>
          <div className="block-2">
              <Stack direction= "row" gap = {3}>
                <CustomInput/>
                <Link href = {"/food-search"} style={{textDecoration: "none"}}>
                  <Button 
                  endIcon = {<Search/>}
                  style={{color: "white", backgroundColor: "#344E41", width: "180px"}}>
                    Food Search
                  </Button>
                </Link>
              </Stack>
          </div>
        </div>
        <div className="imgHolder">
          <div className="background"></div>
        </div>
      </div>
    </div>
  );
}

export default CalorieContainer;
