import React from 'react'
import { Stack } from '@mui/system';
import { Paper, Box, Typography } from '@mui/material';


export default function DisplayFoodList({list}) {
    console.log(list)
    return (
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
        ))}
            
</Stack>
    </Box>
  )
}