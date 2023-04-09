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
        <ImageList style={{display: "grid", gridTemplateColumns: "auto auto auto auto" ,overflow: "hidden"}} gap={60}>
          {CategoryList.map((item) => (
            <a href= {`./food-categories/${item.food_name}`} className="linkToFoodCat">
              <ImageListItem style={{objectFit : "cover"}} key={item.food_name}>
                  <img 
                    style={{height: "250px", width: "250px"}}
                    src={item.image_url}
                    srcSet={item.image_url}
                    alt={item.food_name}
                    loading="lazy"
                  />
                  <span>
                    <ImageListItemBar
                      className= "caption"
                      title={item.food_name}
                      position="bottom"
                      style={{backgroundColor: "#A3B18A"}}
                    />
                  </span>
              </ImageListItem>
            </a>
          ))}
        </ImageList>
    );
}

export default FoodCategoryPage;