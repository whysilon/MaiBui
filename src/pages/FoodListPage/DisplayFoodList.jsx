import React, {useState , useEffect } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography, CircularProgress } from '@mui/material';
import NutritionixAPIControl from './NutritionixAPIControl';


function DisplayFoodList({query}){
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
    console.log(query)
    let ignore = false;
    if(query === ""){
        console.log("here",ignore)
        ignore = true;
    }
    setLoading(true)
    if(!ignore){
    console.log("there")
    NutritionixAPIControl(query).then(res => {
        if(!ignore) {
            setList(res)
            setLoading(false)
        }
    })};
    return () => {
        ignore = true;
    }
    }, [query])

    return (
        <>
        {loading ? (<CircularProgress/>) : 
        (
        <Box>
        <Stack spacing={2}
        sx={{
            overflow: 'auto',
            maxHeight: 500,
        
        }}
        >
        {list.map((item,i) => (
                    <Paper key={i}
                    sx={{
                        textAlign:'left'
                    }}  >
                        <Typography><strong>Name:</strong> {item.food_name}</Typography>
                        <Typography><strong>Serving Unit:</strong> {item.serving_unit}</Typography>
                        <Typography><strong>Serving Qty:</strong> {item.serving_qty}</Typography> 
                    </Paper>
        ))
        }
            
        </Stack>
        </Box>)
        }
        </>
    )
}


export default DisplayFoodList;