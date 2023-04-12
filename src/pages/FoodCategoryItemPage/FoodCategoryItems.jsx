import {ImageList, ImageListItem, ImageListItemBar} from "@mui/material";
import "./FoodCategoryItems.css";

/**
 * This component displays the food items searched from the NutritionixAPI
 * and shows it in a image list.
 * 
 * @author Valencino Tan
 * 
 * @param {data} (Food items from search/instant endpoint from NutritionixAPI)
 * @returns HTML of FoodCategoryItems based on data given 
 */

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
