import React, {useState , useEffect } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography, CircularProgress, Button, Divider, Link} from '@mui/material';
import "./DisplaySearch.css"
import GetFoodSearch from '../NutritionixAPI/NutritionixAPIControl';

/**
 * Display the food list based on the search bar
 * 
 * @author Valencino Tan
 * @argument query
 * @returns FoodList
 * 
 */

function DisplaySearch({query}){
    const [list,setList] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
    let ignore = false;
    if(query === ""){
        ignore = true;
    }
    setLoading(true)
    if(!ignore){
    GetFoodSearch(query).then(res => {
        if(!ignore) {
            setList(res)
            setLoading(false)
        }
    })};
    return () => {
        ignore = true;
    }
    }, [query])
    /*
    const handleClick = () => {
        
    }
    */
    return (
        <>
        {loading ? (<CircularProgress/>) : 
        (
        <Box>
        <Stack spacing={2}
        divider={<Divider orientation="horizontal" flexItem />}
        sx={{
            overflow: 'auto',
            maxHeight: 500,
        }}
        >
        {list.map((item,i) => (
                    <Paper key={i}
                    sx={{
                        textAlign:'left',
                        display:'flex',
                    }}>
                    <Link href={`/nutrition/${item.food_name}`} underline="hover">
                        <Typography variant = "button">Name: {item.food_name}</Typography>
                        <Typography variant = "button">Serving Unit:{item.serving_unit}</Typography>
                        <Typography variant = "button">Serving Qty: {item.serving_qty}</Typography> 
                    </Link>
                    </Paper>
        ))
        }
        </Stack>
        </Box>)
        }
        </>
    )
}

export default DisplaySearch;