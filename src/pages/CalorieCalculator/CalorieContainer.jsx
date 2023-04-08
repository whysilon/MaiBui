import CalorieCalculator from "./CalorieCalculator";
import "./CalorieContainer.css";
import React from "react";
import CustomInput from "./CustomInput";
import AccountCenterNavBar from "../../components/AccountCenterNavBar";
import { auth } from "../../firebase-config";
import { CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getCalorieData } from "./CalorieDataControl";

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
      console.log("in useeffect:",res)
      let temp = 0;
      res.forEach((element) => {
        console.log(element.data().calorie)
        temp = temp + parseInt(element.data().calorie)
        console.log("temp:",temp)
      })
      setTotal(parseInt(temp))
      setLoading(false)
      ignore = true
    })
    }
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
        <div>
          <CustomInput/>
        </div>
      </div>
    </div>
  );
}

export default CalorieContainer;
