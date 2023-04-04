import { Box, ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from "@mui/material";



export default function FoodCategoryItems({data}){

    return(
      <ImageList sx={{ height: "inherit",width: 600,overflowY: "auto"}} gap = {10}>
          {data.map((item) => (
              <ImageListItem key={item.food_name}>
                  <img 
                    src={`${item.photo.thumb}`}
                    srcSet={`${item.photo.thumb} 2x`}
                    alt={item.food_name}
                    loading="lazy"
                  />
                  <a href= {`/nutrition/${item.food_name}`}>
                    <ImageListItemBar
                      className= "caption"
                      title={item.food_name}
                      position="bottom"
                    />
                 </a>
              </ImageListItem>
          ))}
        </ImageList>
    )
}
