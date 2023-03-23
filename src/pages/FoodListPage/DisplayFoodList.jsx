import React, { Component } from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography, CircularProgress } from '@mui/material';
import NutritionixAPIControl from './NutritionixAPIControl';


class DisplayFoodList extends Component {
    constructor(props){
        super(props);
        this.state = {list : [],
                      loading : true,
                      query: ""
                    }
    }
    fetchData = () => {
       async function fetchFood (){
        if(!(this.query === "")){
        const data = await NutritionixAPIControl(this.query)
        this.list = data
       }
    }  
    }
    render() { 
        if (this.state.loading) {return (<CircularProgress/>)}
        else { 
            this.fetchData()
            return (
        <Box>
        <Stack spacing={2}
        sx={{
            overflow: 'auto',
            maxHeight: 500,
        
        }}
        >
        {this.state.list.map((item,i) => (
                    <Paper key={i}
                    sx={{
                        textAlign:'left'
                    }}  >
                        <Typography><strong>Name:</strong> {item.food_name}</Typography>
                        <Typography><strong>Serving Unit:</strong> {item.serving_unit}</Typography>
                        <Typography><strong>Serving Qty:</strong> {item.serving_qty}</Typography> 
                    </Paper>
        ))}
            
        </Stack>
        </Box>
            )
        }
    }
}

export default DisplayFoodList