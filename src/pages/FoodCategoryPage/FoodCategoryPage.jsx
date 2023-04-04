import "./FoodCategoryPage.css";
import { ImageList, ImageListItem, ImageListItemBar, } from "@mui/material";
/**
 * 
 * Displays a list of categories of food
 * 
 * 
 */
const CategoryList = [
    {food_name : "Salad", image_url : "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Pasta", image_url : "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Whole Grain", image_url : "https://images.unsplash.com/photo-1626423641508-c473b1853008?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Burrito", image_url : "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Sandwich",image_url : "https://images.unsplash.com/photo-1554433607-66b5efe9d304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Burger", image_url: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Noodles", image_url: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"},
    {food_name : "Korean", image_url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&"}
]

function FoodCategoryPage(){
    return (
        <ImageList sx={{ height: "inherit",width: 600,overflowY: "auto"}} gap = {10}>
          {CategoryList.map((item) => (
              <ImageListItem sx={{objectFit : "cover",height : "100%",width: "100%"}} key={item.food_name}>
                  <img 
                    src={`${item.image_url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.food_name}
                    loading="lazy"
                  />
                  <a href= {`./food-categories/${item.food_name}`}>
                    <ImageListItemBar
                      className= "caption"
                      title={item.food_name}
                      position="bottom"
                    />
                 </a>
              </ImageListItem>
            
          ))}
        </ImageList>
      );
}

export default FoodCategoryPage;