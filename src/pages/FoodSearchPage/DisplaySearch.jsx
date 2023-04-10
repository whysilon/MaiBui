import React, {useState , useEffect } from 'react'
import { Stack } from '@mui/system';
import { Paper, Typography, CircularProgress, Divider, Link} from '@mui/material';
import "./DisplaySearch.css"
import GetFoodSearch from '../NutritionixAPI/NutritionixAPIControl';

/**
 * Display the food list based on the search bar
 * 
 * @author Valencino Tan
 * @param query Input of search
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
    return (
        <div className="foodSearch-parentContainer">
            {loading ? (<CircularProgress/>) : 
            (
                <Stack
                divider={<Divider orientation="horizontal"/>}
                style={{
                    overflow: 'auto',
                    height: '450px',
                    width: '800px',
                    marginTop: '50px'
                }}
                >
                    {list.map((item,i) => (
                                <Paper key={i}
                                style={{
                                    textAlign:'left',
                                }}>
                                    <Link href={`/nutrition/${item.food_name}`} underline="hover" style={{color: "white", backgroundColor: '#588157', display: 'flex', justifyContent: 'space-between',alignItems:'center', height: '60px', border:'1px white solid'}}>
                                        <Typography variant = "button">Name: {item.food_name}</Typography>
                                        <Typography variant = "button">Serving Unit:{item.serving_unit}</Typography>
                                        <Typography variant = "button">Serving Qty: {item.serving_qty}</Typography> 
                                    </Link>
                                </Paper>
                    ))
                    }
                </Stack>)
            }
        </div>
    )
}

export default DisplaySearch;