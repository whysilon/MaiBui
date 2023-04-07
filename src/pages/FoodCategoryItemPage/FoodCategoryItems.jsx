import { Box, ImageList, ImageListItem, ImageListItemBar, Paper, Typography } from "@mui/material";
import "./FoodCategoryItems.css";


export default function FoodCategoryItems({data}){

    return(
      <ImageList style={{height: "90%", display: "grid", gridTemplateColumns: "auto auto auto auto", overflowX: "hidden"}} gap = {60}>
          {data.map((item) => (
            <a href= {`/nutrition/${item.food_name}`} className="foodItemObject">
              <ImageListItem key={item.food_name} style={{objectFit : "cover"}}>
                  <img 
                    style={{height: "250px", width: "250px"}}
                    src={`${item.photo.thumb}`}
                    srcSet={`${item.photo.thumb} 2x`}
                    alt={item.food_name}
                    loading="lazy"
                  />
                  <ImageListItemBar
                    style={{backgroundColor: "#A3B18A", textTransform:"capitalize"}}
                    className= "caption"
                    title={item.food_name}
                    position="bottom"
                  />
              </ImageListItem>
            </a>
          ))}
        </ImageList>
    )
}
