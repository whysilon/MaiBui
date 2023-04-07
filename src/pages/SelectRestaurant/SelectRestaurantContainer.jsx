import RestaurantNavBar from "../../components/RestaurantNavBar";
import SelectRestaurantDetails from "./SelectRestaurantDetails";
/**
 * Displays the restaurant details after
 * restaurant has been selected
 *
 *
 * @author Marcus Yeo
 * @returns HomePageNavBar and SelectRestaurantDetails
 * components
 */

const SelectRestaurantContainer = () => {
  return (
    <div>
      <RestaurantNavBar />
      <SelectRestaurantDetails />
    </div>
  );
};

export default SelectRestaurantContainer;
