import "./SearchRestaurant.css"
import React, { useState } from "react"

function SearchRestaurant()
{
    const [restaurantName, setRestaurantName] = useState("");

    const searchHandler = (event) => {
        setRestaurantName(event.target.value);
      };

    return(
        <div className="search">
            <h1 style={{fontSize: 40}}>Search for Healthier Restaurants</h1>
            <input
            value={restaurantName}
            onChange={searchHandler}
            type="text"
          />
            <button type="submit">Search</button>
        </div>
    )
}

export default SearchRestaurant;